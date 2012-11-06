(ns mywebapp.server
  (:require [noir.server :as server]))

(server/load-views-ns 'mywebapp.views)

(def app-port (Integer. (get (System/getenv) "PORT" "8080")))

; Edit these uri links with your user and password !
(defn connect-to-db [args]
 (if (= (first args) "dev")
      (monger.core/connect-via-uri! "mongodb://user:password@alex.mongohq.com:10004/mywebapp-devdb")
      (monger.core/connect-via-uri! "mongodb://user:password@alex.mongohq.com:10003/mywebapp-db"))
  )

(defn -main [& args]
  (connect-to-db args)
  (server/start app-port))

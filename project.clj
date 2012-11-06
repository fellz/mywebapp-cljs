(defproject mywebapp "0.1.0-SNAPSHOT"
    :plugins [
             [lein-cljsbuild "0.2.8"]]
    :cljsbuild {:builds [
    {
      :source-path "src"
      :compiler {
        :output-to "resources/public/js/main.js"
        :optimizations :simple
        :pretty-print true 
    }}]}  
            :description "FIXME: write this!"
            :dependencies [[org.clojure/clojure "1.4.0"]
                           [noir "1.3.0-beta10"]
                           [com.novemberain/monger "1.3.1"]
                           [fetch "0.1.0-alpha2"]
                           [jayq "0.1.0-alpha3"]]
            :main mywebapp.server)

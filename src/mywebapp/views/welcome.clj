(ns mywebapp.views.welcome
  (:use [noir.core :only [defpage defpartial]]
        [hiccup.form])  
  (:require [mywebapp.views.common :as common]
            [monger.collection :as monger])

  (:import (org.bson.types ObjectId))
)  


(defpartial add-data-form []
     (form-to [:post "/book/new"]
        [:ul
          [:li (text-field {:placeholder "title"} "title")]
          [:li (text-field {:placeholder "author"} "author")]
          [:li (submit-button "Submit")]]))
  

;Main page 
(defpage "/" []
         (common/layout
           (add-data-form)))

; Send our data to dev db and redirect to main page
(defpage [:post "/book/new" ] {:keys [title author]}
  (monger/insert "books" 
    {:_id (ObjectId.)
    :title title
    :author author 
    })
  (response/redirect "/")
)
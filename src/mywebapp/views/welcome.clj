(ns mywebapp.views.welcome
  (:use [noir.core :only [defpage defpartial]]
        [hiccup.form])  
  (:require [mywebapp.views.common :as common]
            [monger.collection :as monger]
            [noir.response :as response])

  (:import (org.bson.types ObjectId))
)  

;Form to send title and author
(defpartial add-book-form []
     (form-to [:post "/book/new"]
          [:p (text-field {:placeholder "title"} "title")]
          [:p (text-field {:placeholder "author"} "author")]
          [:p (submit-button "Submit")]))
  
;[Templae] Book box with title and author  
(defpartial book-box [{:keys [title author]}]
  [:ul
    [:li 
      [:span title]
      [:span " -- "]
      [:span author]]
  ])

;Pass data to template
(defpartial books-list []
  (map book-box (monger/find-maps "books" {} ))
  )

;Main page 
(defpage "/" []
         (common/layout
           (books-list)
           (add-book-form)))

; Send our data to dev db and redirect to main page
(defpage [:post "/book/new" ] {:keys [title author]}
  (monger/insert "books" 
    {:_id (ObjectId.)
    :title title
    :author author 
    })
  (response/redirect "/")
)
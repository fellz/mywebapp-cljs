(ns mywebapp.views.welcome
  (:use [noir.core :only [defpage defpartial]]
        [hiccup.form]
        [noir.fetch.remotes])  
  (:require [mywebapp.views.common :as common]
            [monger.collection :as monger])

  (:import (org.bson.types ObjectId))
)  

;Form to send title and author
(defpartial add-book-form []
          [:p (text-field {:placeholder "title" :id "title"} "title")]
          [:p (text-field {:placeholder "author" :id "author"} "author")]
          [:p (submit-button {:id "add-book-btn"} "Submit")])
  
;[Template] Book box with title and author  
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

(defpartial last-book [id]
  (book-box (monger/find-one-as-map "books" {:_id id}))
  )

;Main page 
(defpage "/" []
         (common/layout
           [:div#books-list
             (books-list)]
           [:hr]
           [:h2 "Add book"]  
           (add-book-form)))

;Save our data in db
(defremote store-book [author title]
  (let [id (ObjectId.)]
    (if (monger/insert "books" 
      {:_id id
      :title title
      :author author 
      })
      (last-book id)) ; Response
  ))

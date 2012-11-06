(ns mywebapp.app
  (:use [jayq.core :only [$ on inner val attr show hide prevent toggle]])
  (:use-macros [fetch.macros :only [remote]])
  (:require 
    [fetch.remotes :as remotes])
)

; Take values from our fields ( author and title) send them to 
; store-book function on the server then invoke books-list-rem function
; and insert result under #books-list div. Clear form values.
(defn store-book [e]
  (prevent e)
  (let [author (val ($ :#author))
        title (val ($ :#title))
    ]
  (remote (store-book author title) [result]
    (remote (books-list-rem)[result]
      (inner ($ :#books-list) result)
      (val ($ :#author) "")
      (val ($ :#title) "")
      )))
)


; Here e is event object
(on ($ :body) :click :#add-book-btn (fn[e](store-book e)))

goog.provide('mywebapp.app');
goog.require('cljs.core');
goog.require('jayq.core');
goog.require('fetch.remotes');
goog.require('jayq.core');
mywebapp.app.store_book = (function store_book(e){
jayq.core.prevent.call(null,e);
var author__9490 = jayq.core.val.call(null,jayq.core.$.call(null,"\uFDD0'#author"));
var title__9491 = jayq.core.val.call(null,jayq.core.$.call(null,"\uFDD0'#title"));
fetch.remotes.remote_callback.call(null,"store-book",cljs.core.PersistentVector.fromArray([author__9490,title__9491], true),(function (result){
return jayq.core.prepend.call(null,jayq.core.$.call(null,"\uFDD0'#books-list"),result);
}));
jayq.core.val.call(null,jayq.core.$.call(null,"\uFDD0'#author"),"");
return jayq.core.val.call(null,jayq.core.$.call(null,"\uFDD0'#title"),"");
});
jayq.core.on.call(null,jayq.core.$.call(null,"\uFDD0'body"),"\uFDD0'click","\uFDD0'#add-book-btn",(function (e){
return mywebapp.app.store_book.call(null,e);
}));

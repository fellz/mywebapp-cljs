goog.provide('fetch.core');
goog.require('cljs.core');
goog.require('goog.structs');
goog.require('goog.Uri.QueryData');
goog.require('goog.events');
goog.require('cljs.reader');
goog.require('fetch.util');
goog.require('clojure.string');
goog.require('goog.net.XhrIo');
fetch.core.__GT_method = (function __GT_method(m){
return clojure.string.upper_case.call(null,cljs.core.name.call(null,m));
});
fetch.core.parse_route = (function parse_route(route){
if(cljs.core.string_QMARK_.call(null,route))
{return cljs.core.PersistentVector.fromArray(["GET",route], true);
} else
{if(cljs.core.vector_QMARK_.call(null,route))
{var vec__77625__77626 = route;
var m__77627 = cljs.core.nth.call(null,vec__77625__77626,0,null);
var u__77628 = cljs.core.nth.call(null,vec__77625__77626,1,null);
return cljs.core.PersistentVector.fromArray([fetch.core.__GT_method.call(null,m__77627),u__77628], true);
} else
{if("\uFDD0'else")
{return cljs.core.PersistentVector.fromArray(["GET",route], true);
} else
{return null;
}
}
}
});
fetch.core.__GT_data = (function __GT_data(d){
var cur__77631 = fetch.util.clj__GT_js.call(null,d);
var query__77632 = goog.Uri.QueryData.createFromMap((new goog.structs.Map(cur__77631)));
return [cljs.core.str(query__77632)].join('');
});
fetch.core.__GT_callback = (function __GT_callback(callback){
if(cljs.core.truth_(callback))
{return (function (req){
var data__77634 = req.getResponseText();
return callback.call(null,data__77634);
});
} else
{return null;
}
});
/**
* @param {...*} var_args
*/
fetch.core.xhr = (function() { 
var xhr__delegate = function (route,content,callback,p__77635){
var vec__77646__77647 = p__77635;
var opts__77648 = cljs.core.nth.call(null,vec__77646__77647,0,null);
var req__77650 = (new goog.net.XhrIo());
var vec__77649__77651 = fetch.core.parse_route.call(null,route);
var method__77652 = cljs.core.nth.call(null,vec__77649__77651,0,null);
var uri__77653 = cljs.core.nth.call(null,vec__77649__77651,1,null);
var data__77654 = fetch.core.__GT_data.call(null,content);
var callback__77655 = fetch.core.__GT_callback.call(null,callback);
if(cljs.core.truth_(callback__77655))
{goog.events.listen(req__77650,goog.net.EventType.COMPLETE,(function (){
return callback__77655.call(null,req__77650);
}));
} else
{}
return req__77650.send(uri__77653,method__77652,data__77654,(cljs.core.truth_(opts__77648)?fetch.util.clj__GT_js.call(null,opts__77648):null));
};
var xhr = function (route,content,callback,var_args){
var p__77635 = null;
if (goog.isDef(var_args)) {
  p__77635 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return xhr__delegate.call(this, route, content, callback, p__77635);
};
xhr.cljs$lang$maxFixedArity = 3;
xhr.cljs$lang$applyTo = (function (arglist__77656){
var route = cljs.core.first(arglist__77656);
var content = cljs.core.first(cljs.core.next(arglist__77656));
var callback = cljs.core.first(cljs.core.next(cljs.core.next(arglist__77656)));
var p__77635 = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__77656)));
return xhr__delegate(route, content, callback, p__77635);
});
xhr.cljs$lang$arity$variadic = xhr__delegate;
return xhr;
})()
;

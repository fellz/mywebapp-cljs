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
{var vec__86346__86347 = route;
var m__86348 = cljs.core.nth.call(null,vec__86346__86347,0,null);
var u__86349 = cljs.core.nth.call(null,vec__86346__86347,1,null);
return cljs.core.PersistentVector.fromArray([fetch.core.__GT_method.call(null,m__86348),u__86349], true);
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
var cur__86352 = fetch.util.clj__GT_js.call(null,d);
var query__86353 = goog.Uri.QueryData.createFromMap((new goog.structs.Map(cur__86352)));
return [cljs.core.str(query__86353)].join('');
});
fetch.core.__GT_callback = (function __GT_callback(callback){
if(cljs.core.truth_(callback))
{return (function (req){
var data__86355 = req.getResponseText();
return callback.call(null,data__86355);
});
} else
{return null;
}
});
/**
* @param {...*} var_args
*/
fetch.core.xhr = (function() { 
var xhr__delegate = function (route,content,callback,p__86356){
var vec__86367__86368 = p__86356;
var opts__86369 = cljs.core.nth.call(null,vec__86367__86368,0,null);
var req__86371 = (new goog.net.XhrIo());
var vec__86370__86372 = fetch.core.parse_route.call(null,route);
var method__86373 = cljs.core.nth.call(null,vec__86370__86372,0,null);
var uri__86374 = cljs.core.nth.call(null,vec__86370__86372,1,null);
var data__86375 = fetch.core.__GT_data.call(null,content);
var callback__86376 = fetch.core.__GT_callback.call(null,callback);
if(cljs.core.truth_(callback__86376))
{goog.events.listen(req__86371,goog.net.EventType.COMPLETE,(function (){
return callback__86376.call(null,req__86371);
}));
} else
{}
return req__86371.send(uri__86374,method__86373,data__86375,(cljs.core.truth_(opts__86369)?fetch.util.clj__GT_js.call(null,opts__86369):null));
};
var xhr = function (route,content,callback,var_args){
var p__86356 = null;
if (goog.isDef(var_args)) {
  p__86356 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return xhr__delegate.call(this, route, content, callback, p__86356);
};
xhr.cljs$lang$maxFixedArity = 3;
xhr.cljs$lang$applyTo = (function (arglist__86377){
var route = cljs.core.first(arglist__86377);
var content = cljs.core.first(cljs.core.next(arglist__86377));
var callback = cljs.core.first(cljs.core.next(cljs.core.next(arglist__86377)));
var p__86356 = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__86377)));
return xhr__delegate(route, content, callback, p__86356);
});
xhr.cljs$lang$arity$variadic = xhr__delegate;
return xhr;
})()
;

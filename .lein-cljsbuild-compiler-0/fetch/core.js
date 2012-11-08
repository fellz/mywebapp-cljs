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
{var vec__13649__13650 = route;
var m__13651 = cljs.core.nth.call(null,vec__13649__13650,0,null);
var u__13652 = cljs.core.nth.call(null,vec__13649__13650,1,null);
return cljs.core.PersistentVector.fromArray([fetch.core.__GT_method.call(null,m__13651),u__13652], true);
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
var cur__13655 = fetch.util.clj__GT_js.call(null,d);
var query__13656 = goog.Uri.QueryData.createFromMap((new goog.structs.Map(cur__13655)));
return [cljs.core.str(query__13656)].join('');
});
fetch.core.__GT_callback = (function __GT_callback(callback){
if(cljs.core.truth_(callback))
{return (function (req){
var data__13658 = req.getResponseText();
return callback.call(null,data__13658);
});
} else
{return null;
}
});
/**
* @param {...*} var_args
*/
fetch.core.xhr = (function() { 
var xhr__delegate = function (route,content,callback,p__13659){
var vec__13670__13671 = p__13659;
var opts__13672 = cljs.core.nth.call(null,vec__13670__13671,0,null);
var req__13674 = (new goog.net.XhrIo());
var vec__13673__13675 = fetch.core.parse_route.call(null,route);
var method__13676 = cljs.core.nth.call(null,vec__13673__13675,0,null);
var uri__13677 = cljs.core.nth.call(null,vec__13673__13675,1,null);
var data__13678 = fetch.core.__GT_data.call(null,content);
var callback__13679 = fetch.core.__GT_callback.call(null,callback);
if(cljs.core.truth_(callback__13679))
{goog.events.listen(req__13674,goog.net.EventType.COMPLETE,(function (){
return callback__13679.call(null,req__13674);
}));
} else
{}
return req__13674.send(uri__13677,method__13676,data__13678,(cljs.core.truth_(opts__13672)?fetch.util.clj__GT_js.call(null,opts__13672):null));
};
var xhr = function (route,content,callback,var_args){
var p__13659 = null;
if (goog.isDef(var_args)) {
  p__13659 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return xhr__delegate.call(this, route, content, callback, p__13659);
};
xhr.cljs$lang$maxFixedArity = 3;
xhr.cljs$lang$applyTo = (function (arglist__13680){
var route = cljs.core.first(arglist__13680);
var content = cljs.core.first(cljs.core.next(arglist__13680));
var callback = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13680)));
var p__13659 = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13680)));
return xhr__delegate(route, content, callback, p__13659);
});
xhr.cljs$lang$arity$variadic = xhr__delegate;
return xhr;
})()
;

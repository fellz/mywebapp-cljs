goog.provide('jayq.util');
goog.require('cljs.core');
jayq.util.map__GT_js = (function map__GT_js(m){
var out__86284 = {};
var G__86285__86286 = cljs.core.seq.call(null,m);
while(true){
if(G__86285__86286)
{var vec__86287__86288 = cljs.core.first.call(null,G__86285__86286);
var k__86289 = cljs.core.nth.call(null,vec__86287__86288,0,null);
var v__86290 = cljs.core.nth.call(null,vec__86287__86288,1,null);
(out__86284[cljs.core.name.call(null,k__86289)] = v__86290);
{
var G__86291 = cljs.core.next.call(null,G__86285__86286);
G__86285__86286 = G__86291;
continue;
}
} else
{}
break;
}
return out__86284;
});
jayq.util.wait = (function wait(ms,func){
return setTimeout(func, ms);
});
/**
* @param {...*} var_args
*/
jayq.util.log = (function() { 
var log__delegate = function (v,text){
var vs__86293 = ((cljs.core.string_QMARK_.call(null,v))?cljs.core.apply.call(null,cljs.core.str,v,text):v);
return console.log(vs__86293);
};
var log = function (v,var_args){
var text = null;
if (goog.isDef(var_args)) {
  text = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return log__delegate.call(this, v, text);
};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__86294){
var v = cljs.core.first(arglist__86294);
var text = cljs.core.rest(arglist__86294);
return log__delegate(v, text);
});
log.cljs$lang$arity$variadic = log__delegate;
return log;
})()
;
/**
* Recursively transforms ClojureScript maps into Javascript objects,
* other ClojureScript colls into JavaScript arrays, and ClojureScript
* keywords into JavaScript strings.
*/
jayq.util.clj__GT_js = (function clj__GT_js(x){
if(cljs.core.string_QMARK_.call(null,x))
{return x;
} else
{if(cljs.core.keyword_QMARK_.call(null,x))
{return cljs.core.name.call(null,x);
} else
{if(cljs.core.map_QMARK_.call(null,x))
{return cljs.core.reduce.call(null,(function (m,p__86300){
var vec__86301__86302 = p__86300;
var k__86303 = cljs.core.nth.call(null,vec__86301__86302,0,null);
var v__86304 = cljs.core.nth.call(null,vec__86301__86302,1,null);
return cljs.core.assoc.call(null,m,clj__GT_js.call(null,k__86303),clj__GT_js.call(null,v__86304));
}),cljs.core.ObjMap.EMPTY,x).strobj;
} else
{if(cljs.core.coll_QMARK_.call(null,x))
{return cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,clj__GT_js,x));
} else
{if("\uFDD0'else")
{return x;
} else
{return null;
}
}
}
}
}
});

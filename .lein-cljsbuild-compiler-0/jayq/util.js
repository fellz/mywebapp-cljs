goog.provide('jayq.util');
goog.require('cljs.core');
jayq.util.map__GT_js = (function map__GT_js(m){
var out__77563 = {};
var G__77564__77565 = cljs.core.seq.call(null,m);
while(true){
if(G__77564__77565)
{var vec__77566__77567 = cljs.core.first.call(null,G__77564__77565);
var k__77568 = cljs.core.nth.call(null,vec__77566__77567,0,null);
var v__77569 = cljs.core.nth.call(null,vec__77566__77567,1,null);
(out__77563[cljs.core.name.call(null,k__77568)] = v__77569);
{
var G__77570 = cljs.core.next.call(null,G__77564__77565);
G__77564__77565 = G__77570;
continue;
}
} else
{}
break;
}
return out__77563;
});
jayq.util.wait = (function wait(ms,func){
return setTimeout(func, ms);
});
/**
* @param {...*} var_args
*/
jayq.util.log = (function() { 
var log__delegate = function (v,text){
var vs__77572 = ((cljs.core.string_QMARK_.call(null,v))?cljs.core.apply.call(null,cljs.core.str,v,text):v);
return console.log(vs__77572);
};
var log = function (v,var_args){
var text = null;
if (goog.isDef(var_args)) {
  text = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return log__delegate.call(this, v, text);
};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__77573){
var v = cljs.core.first(arglist__77573);
var text = cljs.core.rest(arglist__77573);
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
{return cljs.core.reduce.call(null,(function (m,p__77579){
var vec__77580__77581 = p__77579;
var k__77582 = cljs.core.nth.call(null,vec__77580__77581,0,null);
var v__77583 = cljs.core.nth.call(null,vec__77580__77581,1,null);
return cljs.core.assoc.call(null,m,clj__GT_js.call(null,k__77582),clj__GT_js.call(null,v__77583));
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

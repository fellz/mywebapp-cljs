goog.provide('jayq.util');
goog.require('cljs.core');
jayq.util.map__GT_js = (function map__GT_js(m){
var out__13587 = {};
var G__13588__13589 = cljs.core.seq.call(null,m);
while(true){
if(G__13588__13589)
{var vec__13590__13591 = cljs.core.first.call(null,G__13588__13589);
var k__13592 = cljs.core.nth.call(null,vec__13590__13591,0,null);
var v__13593 = cljs.core.nth.call(null,vec__13590__13591,1,null);
(out__13587[cljs.core.name.call(null,k__13592)] = v__13593);
{
var G__13594 = cljs.core.next.call(null,G__13588__13589);
G__13588__13589 = G__13594;
continue;
}
} else
{}
break;
}
return out__13587;
});
jayq.util.wait = (function wait(ms,func){
return setTimeout(func, ms);
});
/**
* @param {...*} var_args
*/
jayq.util.log = (function() { 
var log__delegate = function (v,text){
var vs__13596 = ((cljs.core.string_QMARK_.call(null,v))?cljs.core.apply.call(null,cljs.core.str,v,text):v);
return console.log(vs__13596);
};
var log = function (v,var_args){
var text = null;
if (goog.isDef(var_args)) {
  text = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return log__delegate.call(this, v, text);
};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__13597){
var v = cljs.core.first(arglist__13597);
var text = cljs.core.rest(arglist__13597);
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
{return cljs.core.reduce.call(null,(function (m,p__13603){
var vec__13604__13605 = p__13603;
var k__13606 = cljs.core.nth.call(null,vec__13604__13605,0,null);
var v__13607 = cljs.core.nth.call(null,vec__13604__13605,1,null);
return cljs.core.assoc.call(null,m,clj__GT_js.call(null,k__13606),clj__GT_js.call(null,v__13607));
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

goog.provide('jayq.core');
goog.require('cljs.core');
goog.require('jayq.util');
goog.require('jayq.util');
goog.require('clojure.string');
jayq.core.crate_meta = (function crate_meta(func){
return func.prototype._crateGroup;
});
jayq.core.__GT_selector = (function __GT_selector(sel){
if(cljs.core.string_QMARK_.call(null,sel))
{return sel;
} else
{if(cljs.core.fn_QMARK_.call(null,sel))
{var temp__3971__auto____77397 = jayq.core.crate_meta.call(null,sel);
if(cljs.core.truth_(temp__3971__auto____77397))
{var cm__77398 = temp__3971__auto____77397;
return [cljs.core.str("[crateGroup="),cljs.core.str(cm__77398),cljs.core.str("]")].join('');
} else
{return sel;
}
} else
{if(cljs.core.keyword_QMARK_.call(null,sel))
{return cljs.core.name.call(null,sel);
} else
{if("\uFDD0'else")
{return sel;
} else
{return null;
}
}
}
}
});
/**
* @param {...*} var_args
*/
jayq.core.$ = (function() { 
var $__delegate = function (sel,p__77399){
var vec__77403__77404 = p__77399;
var context__77405 = cljs.core.nth.call(null,vec__77403__77404,0,null);
if(cljs.core.not.call(null,context__77405))
{return jQuery(jayq.core.__GT_selector.call(null,sel));
} else
{return jQuery(jayq.core.__GT_selector.call(null,sel),context__77405);
}
};
var $ = function (sel,var_args){
var p__77399 = null;
if (goog.isDef(var_args)) {
  p__77399 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return $__delegate.call(this, sel, p__77399);
};
$.cljs$lang$maxFixedArity = 1;
$.cljs$lang$applyTo = (function (arglist__77406){
var sel = cljs.core.first(arglist__77406);
var p__77399 = cljs.core.rest(arglist__77406);
return $__delegate(sel, p__77399);
});
$.cljs$lang$arity$variadic = $__delegate;
return $;
})()
;
jQuery.prototype.cljs$core$IReduce$ = true;
jQuery.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (this$,f){
return cljs.core.ci_reduce.call(null,jayq.core.coll,f,cljs.core.first.call(null,this$),cljs.core.count.call(null,this$));
});
jQuery.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (this$,f,start){
return cljs.core.ci_reduce.call(null,jayq.core.coll,f,start,jayq.core.i);
});
jQuery.prototype.cljs$core$ILookup$ = true;
jQuery.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var or__3824__auto____77407 = this$.slice(k,(k + 1));
if(cljs.core.truth_(or__3824__auto____77407))
{return or__3824__auto____77407;
} else
{return null;
}
});
jQuery.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){
return cljs.core._nth.call(null,this$,k,not_found);
});
jQuery.prototype.cljs$core$ISequential$ = true;
jQuery.prototype.cljs$core$IIndexed$ = true;
jQuery.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
if((n < cljs.core.count.call(null,this$)))
{return this$.slice(n,(n + 1));
} else
{return null;
}
});
jQuery.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
if((n < cljs.core.count.call(null,this$)))
{return this$.slice(n,(n + 1));
} else
{if((void 0 === not_found))
{return null;
} else
{return not_found;
}
}
});
jQuery.prototype.cljs$core$ICounted$ = true;
jQuery.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
return this$.size();
});
jQuery.prototype.cljs$core$ISeq$ = true;
jQuery.prototype.cljs$core$ISeq$_first$arity$1 = (function (this$){
return this$.get(0);
});
jQuery.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){
if((cljs.core.count.call(null,this$) > 1))
{return this$.slice(1);
} else
{return cljs.core.list.call(null);
}
});
jQuery.prototype.cljs$core$ISeqable$ = true;
jQuery.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
if(cljs.core.truth_(this$.get(0)))
{return this$;
} else
{return null;
}
});
jQuery.prototype.call = (function() {
var G__77408 = null;
var G__77408__2 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__77408__3 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__77408 = function(_,k,not_found){
switch(arguments.length){
case 2:
return G__77408__2.call(this,_,k);
case 3:
return G__77408__3.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__77408;
})()
;
jayq.core.anim = (function anim(elem,props,dur){
return elem.animate(jayq.util.clj__GT_js.call(null,props),dur);
});
jayq.core.text = (function text($elem,txt){
return $elem.text(txt);
});
jayq.core.css = (function css($elem,opts){
if(cljs.core.keyword_QMARK_.call(null,opts))
{return $elem.css(cljs.core.name.call(null,opts));
} else
{return $elem.css(jayq.util.clj__GT_js.call(null,opts));
}
});
/**
* @param {...*} var_args
*/
jayq.core.attr = (function() { 
var attr__delegate = function ($elem,a,p__77409){
var vec__77414__77415 = p__77409;
var v__77416 = cljs.core.nth.call(null,vec__77414__77415,0,null);
var a__77417 = cljs.core.name.call(null,a);
if(cljs.core.not.call(null,v__77416))
{return $elem.attr(a__77417);
} else
{return $elem.attr(a__77417,v__77416);
}
};
var attr = function ($elem,a,var_args){
var p__77409 = null;
if (goog.isDef(var_args)) {
  p__77409 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return attr__delegate.call(this, $elem, a, p__77409);
};
attr.cljs$lang$maxFixedArity = 2;
attr.cljs$lang$applyTo = (function (arglist__77418){
var $elem = cljs.core.first(arglist__77418);
var a = cljs.core.first(cljs.core.next(arglist__77418));
var p__77409 = cljs.core.rest(cljs.core.next(arglist__77418));
return attr__delegate($elem, a, p__77409);
});
attr.cljs$lang$arity$variadic = attr__delegate;
return attr;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.data = (function() { 
var data__delegate = function ($elem,k,p__77419){
var vec__77424__77425 = p__77419;
var v__77426 = cljs.core.nth.call(null,vec__77424__77425,0,null);
var k__77427 = cljs.core.name.call(null,k);
if(cljs.core.not.call(null,v__77426))
{return $elem.data(k__77427);
} else
{return $elem.data(k__77427,v__77426);
}
};
var data = function ($elem,k,var_args){
var p__77419 = null;
if (goog.isDef(var_args)) {
  p__77419 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return data__delegate.call(this, $elem, k, p__77419);
};
data.cljs$lang$maxFixedArity = 2;
data.cljs$lang$applyTo = (function (arglist__77428){
var $elem = cljs.core.first(arglist__77428);
var k = cljs.core.first(cljs.core.next(arglist__77428));
var p__77419 = cljs.core.rest(cljs.core.next(arglist__77428));
return data__delegate($elem, k, p__77419);
});
data.cljs$lang$arity$variadic = data__delegate;
return data;
})()
;
jayq.core.position = (function position($elem){
return cljs.core.js__GT_clj.call(null,$elem.position(),"\uFDD0'keywordize-keys",true);
});
jayq.core.add_class = (function add_class($elem,cl){
var cl__77430 = cljs.core.name.call(null,cl);
return $elem.addClass(cl__77430);
});
jayq.core.remove_class = (function remove_class($elem,cl){
var cl__77432 = cljs.core.name.call(null,cl);
return $elem.removeClass(cl__77432);
});
jayq.core.append = (function append($elem,content){
return $elem.append(content);
});
jayq.core.prepend = (function prepend($elem,content){
return $elem.prepend(content);
});
jayq.core.remove = (function remove($elem){
return $elem.remove();
});
/**
* @param {...*} var_args
*/
jayq.core.hide = (function() { 
var hide__delegate = function ($elem,p__77433){
var vec__77438__77439 = p__77433;
var speed__77440 = cljs.core.nth.call(null,vec__77438__77439,0,null);
var on_finish__77441 = cljs.core.nth.call(null,vec__77438__77439,1,null);
return $elem.hide(speed__77440,on_finish__77441);
};
var hide = function ($elem,var_args){
var p__77433 = null;
if (goog.isDef(var_args)) {
  p__77433 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return hide__delegate.call(this, $elem, p__77433);
};
hide.cljs$lang$maxFixedArity = 1;
hide.cljs$lang$applyTo = (function (arglist__77442){
var $elem = cljs.core.first(arglist__77442);
var p__77433 = cljs.core.rest(arglist__77442);
return hide__delegate($elem, p__77433);
});
hide.cljs$lang$arity$variadic = hide__delegate;
return hide;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.show = (function() { 
var show__delegate = function ($elem,p__77443){
var vec__77448__77449 = p__77443;
var speed__77450 = cljs.core.nth.call(null,vec__77448__77449,0,null);
var on_finish__77451 = cljs.core.nth.call(null,vec__77448__77449,1,null);
return $elem.show(speed__77450,on_finish__77451);
};
var show = function ($elem,var_args){
var p__77443 = null;
if (goog.isDef(var_args)) {
  p__77443 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return show__delegate.call(this, $elem, p__77443);
};
show.cljs$lang$maxFixedArity = 1;
show.cljs$lang$applyTo = (function (arglist__77452){
var $elem = cljs.core.first(arglist__77452);
var p__77443 = cljs.core.rest(arglist__77452);
return show__delegate($elem, p__77443);
});
show.cljs$lang$arity$variadic = show__delegate;
return show;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.toggle = (function() { 
var toggle__delegate = function ($elem,p__77453){
var vec__77458__77459 = p__77453;
var speed__77460 = cljs.core.nth.call(null,vec__77458__77459,0,null);
var on_finish__77461 = cljs.core.nth.call(null,vec__77458__77459,1,null);
return $elem.toggle(speed__77460,on_finish__77461);
};
var toggle = function ($elem,var_args){
var p__77453 = null;
if (goog.isDef(var_args)) {
  p__77453 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return toggle__delegate.call(this, $elem, p__77453);
};
toggle.cljs$lang$maxFixedArity = 1;
toggle.cljs$lang$applyTo = (function (arglist__77462){
var $elem = cljs.core.first(arglist__77462);
var p__77453 = cljs.core.rest(arglist__77462);
return toggle__delegate($elem, p__77453);
});
toggle.cljs$lang$arity$variadic = toggle__delegate;
return toggle;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.fade_out = (function() { 
var fade_out__delegate = function ($elem,p__77463){
var vec__77468__77469 = p__77463;
var speed__77470 = cljs.core.nth.call(null,vec__77468__77469,0,null);
var on_finish__77471 = cljs.core.nth.call(null,vec__77468__77469,1,null);
return $elem.fadeOut(speed__77470,on_finish__77471);
};
var fade_out = function ($elem,var_args){
var p__77463 = null;
if (goog.isDef(var_args)) {
  p__77463 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return fade_out__delegate.call(this, $elem, p__77463);
};
fade_out.cljs$lang$maxFixedArity = 1;
fade_out.cljs$lang$applyTo = (function (arglist__77472){
var $elem = cljs.core.first(arglist__77472);
var p__77463 = cljs.core.rest(arglist__77472);
return fade_out__delegate($elem, p__77463);
});
fade_out.cljs$lang$arity$variadic = fade_out__delegate;
return fade_out;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.fade_in = (function() { 
var fade_in__delegate = function ($elem,p__77473){
var vec__77478__77479 = p__77473;
var speed__77480 = cljs.core.nth.call(null,vec__77478__77479,0,null);
var on_finish__77481 = cljs.core.nth.call(null,vec__77478__77479,1,null);
return $elem.fadeIn(speed__77480,on_finish__77481);
};
var fade_in = function ($elem,var_args){
var p__77473 = null;
if (goog.isDef(var_args)) {
  p__77473 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return fade_in__delegate.call(this, $elem, p__77473);
};
fade_in.cljs$lang$maxFixedArity = 1;
fade_in.cljs$lang$applyTo = (function (arglist__77482){
var $elem = cljs.core.first(arglist__77482);
var p__77473 = cljs.core.rest(arglist__77482);
return fade_in__delegate($elem, p__77473);
});
fade_in.cljs$lang$arity$variadic = fade_in__delegate;
return fade_in;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.slide_up = (function() { 
var slide_up__delegate = function ($elem,p__77483){
var vec__77488__77489 = p__77483;
var speed__77490 = cljs.core.nth.call(null,vec__77488__77489,0,null);
var on_finish__77491 = cljs.core.nth.call(null,vec__77488__77489,1,null);
return $elem.slideUp(speed__77490,on_finish__77491);
};
var slide_up = function ($elem,var_args){
var p__77483 = null;
if (goog.isDef(var_args)) {
  p__77483 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return slide_up__delegate.call(this, $elem, p__77483);
};
slide_up.cljs$lang$maxFixedArity = 1;
slide_up.cljs$lang$applyTo = (function (arglist__77492){
var $elem = cljs.core.first(arglist__77492);
var p__77483 = cljs.core.rest(arglist__77492);
return slide_up__delegate($elem, p__77483);
});
slide_up.cljs$lang$arity$variadic = slide_up__delegate;
return slide_up;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.slide_down = (function() { 
var slide_down__delegate = function ($elem,p__77493){
var vec__77498__77499 = p__77493;
var speed__77500 = cljs.core.nth.call(null,vec__77498__77499,0,null);
var on_finish__77501 = cljs.core.nth.call(null,vec__77498__77499,1,null);
return $elem.slideDown(speed__77500,on_finish__77501);
};
var slide_down = function ($elem,var_args){
var p__77493 = null;
if (goog.isDef(var_args)) {
  p__77493 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return slide_down__delegate.call(this, $elem, p__77493);
};
slide_down.cljs$lang$maxFixedArity = 1;
slide_down.cljs$lang$applyTo = (function (arglist__77502){
var $elem = cljs.core.first(arglist__77502);
var p__77493 = cljs.core.rest(arglist__77502);
return slide_down__delegate($elem, p__77493);
});
slide_down.cljs$lang$arity$variadic = slide_down__delegate;
return slide_down;
})()
;
jayq.core.parent = (function parent($elem){
return $elem.parent();
});
jayq.core.find = (function find($elem,selector){
return $elem.find(cljs.core.name.call(null,selector));
});
jayq.core.clone = (function clone($elem){
return $elem.clone();
});
jayq.core.inner = (function inner($elem,v){
return $elem.html(v);
});
jayq.core.empty = (function empty($elem){
return $elem.empty();
});
/**
* @param {...*} var_args
*/
jayq.core.val = (function() { 
var val__delegate = function ($elem,p__77503){
var vec__77507__77508 = p__77503;
var v__77509 = cljs.core.nth.call(null,vec__77507__77508,0,null);
if(cljs.core.truth_(v__77509))
{return $elem.val(v__77509);
} else
{return $elem.val();
}
};
var val = function ($elem,var_args){
var p__77503 = null;
if (goog.isDef(var_args)) {
  p__77503 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return val__delegate.call(this, $elem, p__77503);
};
val.cljs$lang$maxFixedArity = 1;
val.cljs$lang$applyTo = (function (arglist__77510){
var $elem = cljs.core.first(arglist__77510);
var p__77503 = cljs.core.rest(arglist__77510);
return val__delegate($elem, p__77503);
});
val.cljs$lang$arity$variadic = val__delegate;
return val;
})()
;
jayq.core.queue = (function queue($elem,callback){
return $elem.queue(callback);
});
jayq.core.dequeue = (function dequeue(elem){
return jayq.core.$.call(null,elem).dequeue();
});
jayq.core.document_ready = (function document_ready(func){
return jayq.core.$.call(null,document).ready(func);
});
jayq.core.xhr = (function xhr(p__77511,content,callback){
var vec__77517__77518 = p__77511;
var method__77519 = cljs.core.nth.call(null,vec__77517__77518,0,null);
var uri__77520 = cljs.core.nth.call(null,vec__77517__77518,1,null);
var params__77521 = jayq.util.clj__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'type","\uFDD0'data","\uFDD0'success"],{"\uFDD0'type":clojure.string.upper_case.call(null,cljs.core.name.call(null,method__77519)),"\uFDD0'data":jayq.util.clj__GT_js.call(null,content),"\uFDD0'success":callback}));
return jQuery.ajax(uri__77520,params__77521);
});
jayq.core.bind = (function bind($elem,ev,func){
return $elem.bind(cljs.core.name.call(null,ev),func);
});
jayq.core.trigger = (function trigger($elem,ev){
return $elem.trigger(cljs.core.name.call(null,ev));
});
jayq.core.delegate = (function delegate($elem,sel,ev,func){
return $elem.delegate(jayq.core.__GT_selector.call(null,sel),cljs.core.name.call(null,ev),func);
});
jayq.core.__GT_event = (function __GT_event(e){
if(cljs.core.keyword_QMARK_.call(null,e))
{return cljs.core.name.call(null,e);
} else
{if(cljs.core.map_QMARK_.call(null,e))
{return jayq.util.clj__GT_js.call(null,e);
} else
{if(cljs.core.coll_QMARK_.call(null,e))
{return clojure.string.join.call(null," ",cljs.core.map.call(null,cljs.core.name,e));
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Unknown event type: "),cljs.core.str(e)].join('')));
} else
{return null;
}
}
}
}
});
/**
* @param {...*} var_args
*/
jayq.core.on = (function() { 
var on__delegate = function ($elem,events,p__77522){
var vec__77528__77529 = p__77522;
var sel__77530 = cljs.core.nth.call(null,vec__77528__77529,0,null);
var data__77531 = cljs.core.nth.call(null,vec__77528__77529,1,null);
var handler__77532 = cljs.core.nth.call(null,vec__77528__77529,2,null);
return $elem.on(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel__77530),data__77531,handler__77532);
};
var on = function ($elem,events,var_args){
var p__77522 = null;
if (goog.isDef(var_args)) {
  p__77522 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return on__delegate.call(this, $elem, events, p__77522);
};
on.cljs$lang$maxFixedArity = 2;
on.cljs$lang$applyTo = (function (arglist__77533){
var $elem = cljs.core.first(arglist__77533);
var events = cljs.core.first(cljs.core.next(arglist__77533));
var p__77522 = cljs.core.rest(cljs.core.next(arglist__77533));
return on__delegate($elem, events, p__77522);
});
on.cljs$lang$arity$variadic = on__delegate;
return on;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.one = (function() { 
var one__delegate = function ($elem,events,p__77534){
var vec__77540__77541 = p__77534;
var sel__77542 = cljs.core.nth.call(null,vec__77540__77541,0,null);
var data__77543 = cljs.core.nth.call(null,vec__77540__77541,1,null);
var handler__77544 = cljs.core.nth.call(null,vec__77540__77541,2,null);
return $elem.one(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel__77542),data__77543,handler__77544);
};
var one = function ($elem,events,var_args){
var p__77534 = null;
if (goog.isDef(var_args)) {
  p__77534 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return one__delegate.call(this, $elem, events, p__77534);
};
one.cljs$lang$maxFixedArity = 2;
one.cljs$lang$applyTo = (function (arglist__77545){
var $elem = cljs.core.first(arglist__77545);
var events = cljs.core.first(cljs.core.next(arglist__77545));
var p__77534 = cljs.core.rest(cljs.core.next(arglist__77545));
return one__delegate($elem, events, p__77534);
});
one.cljs$lang$arity$variadic = one__delegate;
return one;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.off = (function() { 
var off__delegate = function ($elem,events,p__77546){
var vec__77551__77552 = p__77546;
var sel__77553 = cljs.core.nth.call(null,vec__77551__77552,0,null);
var handler__77554 = cljs.core.nth.call(null,vec__77551__77552,1,null);
return $elem.off(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel__77553),handler__77554);
};
var off = function ($elem,events,var_args){
var p__77546 = null;
if (goog.isDef(var_args)) {
  p__77546 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return off__delegate.call(this, $elem, events, p__77546);
};
off.cljs$lang$maxFixedArity = 2;
off.cljs$lang$applyTo = (function (arglist__77555){
var $elem = cljs.core.first(arglist__77555);
var events = cljs.core.first(cljs.core.next(arglist__77555));
var p__77546 = cljs.core.rest(cljs.core.next(arglist__77555));
return off__delegate($elem, events, p__77546);
});
off.cljs$lang$arity$variadic = off__delegate;
return off;
})()
;
jayq.core.prevent = (function prevent(e){
return e.preventDefault();
});

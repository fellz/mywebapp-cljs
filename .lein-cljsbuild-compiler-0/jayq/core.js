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
{var temp__3971__auto____13421 = jayq.core.crate_meta.call(null,sel);
if(cljs.core.truth_(temp__3971__auto____13421))
{var cm__13422 = temp__3971__auto____13421;
return [cljs.core.str("[crateGroup="),cljs.core.str(cm__13422),cljs.core.str("]")].join('');
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
var $__delegate = function (sel,p__13423){
var vec__13427__13428 = p__13423;
var context__13429 = cljs.core.nth.call(null,vec__13427__13428,0,null);
if(cljs.core.not.call(null,context__13429))
{return jQuery(jayq.core.__GT_selector.call(null,sel));
} else
{return jQuery(jayq.core.__GT_selector.call(null,sel),context__13429);
}
};
var $ = function (sel,var_args){
var p__13423 = null;
if (goog.isDef(var_args)) {
  p__13423 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return $__delegate.call(this, sel, p__13423);
};
$.cljs$lang$maxFixedArity = 1;
$.cljs$lang$applyTo = (function (arglist__13430){
var sel = cljs.core.first(arglist__13430);
var p__13423 = cljs.core.rest(arglist__13430);
return $__delegate(sel, p__13423);
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
var or__3824__auto____13431 = this$.slice(k,(k + 1));
if(cljs.core.truth_(or__3824__auto____13431))
{return or__3824__auto____13431;
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
var G__13432 = null;
var G__13432__2 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__13432__3 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__13432 = function(_,k,not_found){
switch(arguments.length){
case 2:
return G__13432__2.call(this,_,k);
case 3:
return G__13432__3.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13432;
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
var attr__delegate = function ($elem,a,p__13433){
var vec__13438__13439 = p__13433;
var v__13440 = cljs.core.nth.call(null,vec__13438__13439,0,null);
var a__13441 = cljs.core.name.call(null,a);
if(cljs.core.not.call(null,v__13440))
{return $elem.attr(a__13441);
} else
{return $elem.attr(a__13441,v__13440);
}
};
var attr = function ($elem,a,var_args){
var p__13433 = null;
if (goog.isDef(var_args)) {
  p__13433 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return attr__delegate.call(this, $elem, a, p__13433);
};
attr.cljs$lang$maxFixedArity = 2;
attr.cljs$lang$applyTo = (function (arglist__13442){
var $elem = cljs.core.first(arglist__13442);
var a = cljs.core.first(cljs.core.next(arglist__13442));
var p__13433 = cljs.core.rest(cljs.core.next(arglist__13442));
return attr__delegate($elem, a, p__13433);
});
attr.cljs$lang$arity$variadic = attr__delegate;
return attr;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.data = (function() { 
var data__delegate = function ($elem,k,p__13443){
var vec__13448__13449 = p__13443;
var v__13450 = cljs.core.nth.call(null,vec__13448__13449,0,null);
var k__13451 = cljs.core.name.call(null,k);
if(cljs.core.not.call(null,v__13450))
{return $elem.data(k__13451);
} else
{return $elem.data(k__13451,v__13450);
}
};
var data = function ($elem,k,var_args){
var p__13443 = null;
if (goog.isDef(var_args)) {
  p__13443 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return data__delegate.call(this, $elem, k, p__13443);
};
data.cljs$lang$maxFixedArity = 2;
data.cljs$lang$applyTo = (function (arglist__13452){
var $elem = cljs.core.first(arglist__13452);
var k = cljs.core.first(cljs.core.next(arglist__13452));
var p__13443 = cljs.core.rest(cljs.core.next(arglist__13452));
return data__delegate($elem, k, p__13443);
});
data.cljs$lang$arity$variadic = data__delegate;
return data;
})()
;
jayq.core.position = (function position($elem){
return cljs.core.js__GT_clj.call(null,$elem.position(),"\uFDD0'keywordize-keys",true);
});
jayq.core.add_class = (function add_class($elem,cl){
var cl__13454 = cljs.core.name.call(null,cl);
return $elem.addClass(cl__13454);
});
jayq.core.remove_class = (function remove_class($elem,cl){
var cl__13456 = cljs.core.name.call(null,cl);
return $elem.removeClass(cl__13456);
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
var hide__delegate = function ($elem,p__13457){
var vec__13462__13463 = p__13457;
var speed__13464 = cljs.core.nth.call(null,vec__13462__13463,0,null);
var on_finish__13465 = cljs.core.nth.call(null,vec__13462__13463,1,null);
return $elem.hide(speed__13464,on_finish__13465);
};
var hide = function ($elem,var_args){
var p__13457 = null;
if (goog.isDef(var_args)) {
  p__13457 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return hide__delegate.call(this, $elem, p__13457);
};
hide.cljs$lang$maxFixedArity = 1;
hide.cljs$lang$applyTo = (function (arglist__13466){
var $elem = cljs.core.first(arglist__13466);
var p__13457 = cljs.core.rest(arglist__13466);
return hide__delegate($elem, p__13457);
});
hide.cljs$lang$arity$variadic = hide__delegate;
return hide;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.show = (function() { 
var show__delegate = function ($elem,p__13467){
var vec__13472__13473 = p__13467;
var speed__13474 = cljs.core.nth.call(null,vec__13472__13473,0,null);
var on_finish__13475 = cljs.core.nth.call(null,vec__13472__13473,1,null);
return $elem.show(speed__13474,on_finish__13475);
};
var show = function ($elem,var_args){
var p__13467 = null;
if (goog.isDef(var_args)) {
  p__13467 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return show__delegate.call(this, $elem, p__13467);
};
show.cljs$lang$maxFixedArity = 1;
show.cljs$lang$applyTo = (function (arglist__13476){
var $elem = cljs.core.first(arglist__13476);
var p__13467 = cljs.core.rest(arglist__13476);
return show__delegate($elem, p__13467);
});
show.cljs$lang$arity$variadic = show__delegate;
return show;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.toggle = (function() { 
var toggle__delegate = function ($elem,p__13477){
var vec__13482__13483 = p__13477;
var speed__13484 = cljs.core.nth.call(null,vec__13482__13483,0,null);
var on_finish__13485 = cljs.core.nth.call(null,vec__13482__13483,1,null);
return $elem.toggle(speed__13484,on_finish__13485);
};
var toggle = function ($elem,var_args){
var p__13477 = null;
if (goog.isDef(var_args)) {
  p__13477 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return toggle__delegate.call(this, $elem, p__13477);
};
toggle.cljs$lang$maxFixedArity = 1;
toggle.cljs$lang$applyTo = (function (arglist__13486){
var $elem = cljs.core.first(arglist__13486);
var p__13477 = cljs.core.rest(arglist__13486);
return toggle__delegate($elem, p__13477);
});
toggle.cljs$lang$arity$variadic = toggle__delegate;
return toggle;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.fade_out = (function() { 
var fade_out__delegate = function ($elem,p__13487){
var vec__13492__13493 = p__13487;
var speed__13494 = cljs.core.nth.call(null,vec__13492__13493,0,null);
var on_finish__13495 = cljs.core.nth.call(null,vec__13492__13493,1,null);
return $elem.fadeOut(speed__13494,on_finish__13495);
};
var fade_out = function ($elem,var_args){
var p__13487 = null;
if (goog.isDef(var_args)) {
  p__13487 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return fade_out__delegate.call(this, $elem, p__13487);
};
fade_out.cljs$lang$maxFixedArity = 1;
fade_out.cljs$lang$applyTo = (function (arglist__13496){
var $elem = cljs.core.first(arglist__13496);
var p__13487 = cljs.core.rest(arglist__13496);
return fade_out__delegate($elem, p__13487);
});
fade_out.cljs$lang$arity$variadic = fade_out__delegate;
return fade_out;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.fade_in = (function() { 
var fade_in__delegate = function ($elem,p__13497){
var vec__13502__13503 = p__13497;
var speed__13504 = cljs.core.nth.call(null,vec__13502__13503,0,null);
var on_finish__13505 = cljs.core.nth.call(null,vec__13502__13503,1,null);
return $elem.fadeIn(speed__13504,on_finish__13505);
};
var fade_in = function ($elem,var_args){
var p__13497 = null;
if (goog.isDef(var_args)) {
  p__13497 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return fade_in__delegate.call(this, $elem, p__13497);
};
fade_in.cljs$lang$maxFixedArity = 1;
fade_in.cljs$lang$applyTo = (function (arglist__13506){
var $elem = cljs.core.first(arglist__13506);
var p__13497 = cljs.core.rest(arglist__13506);
return fade_in__delegate($elem, p__13497);
});
fade_in.cljs$lang$arity$variadic = fade_in__delegate;
return fade_in;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.slide_up = (function() { 
var slide_up__delegate = function ($elem,p__13507){
var vec__13512__13513 = p__13507;
var speed__13514 = cljs.core.nth.call(null,vec__13512__13513,0,null);
var on_finish__13515 = cljs.core.nth.call(null,vec__13512__13513,1,null);
return $elem.slideUp(speed__13514,on_finish__13515);
};
var slide_up = function ($elem,var_args){
var p__13507 = null;
if (goog.isDef(var_args)) {
  p__13507 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return slide_up__delegate.call(this, $elem, p__13507);
};
slide_up.cljs$lang$maxFixedArity = 1;
slide_up.cljs$lang$applyTo = (function (arglist__13516){
var $elem = cljs.core.first(arglist__13516);
var p__13507 = cljs.core.rest(arglist__13516);
return slide_up__delegate($elem, p__13507);
});
slide_up.cljs$lang$arity$variadic = slide_up__delegate;
return slide_up;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.slide_down = (function() { 
var slide_down__delegate = function ($elem,p__13517){
var vec__13522__13523 = p__13517;
var speed__13524 = cljs.core.nth.call(null,vec__13522__13523,0,null);
var on_finish__13525 = cljs.core.nth.call(null,vec__13522__13523,1,null);
return $elem.slideDown(speed__13524,on_finish__13525);
};
var slide_down = function ($elem,var_args){
var p__13517 = null;
if (goog.isDef(var_args)) {
  p__13517 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return slide_down__delegate.call(this, $elem, p__13517);
};
slide_down.cljs$lang$maxFixedArity = 1;
slide_down.cljs$lang$applyTo = (function (arglist__13526){
var $elem = cljs.core.first(arglist__13526);
var p__13517 = cljs.core.rest(arglist__13526);
return slide_down__delegate($elem, p__13517);
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
var val__delegate = function ($elem,p__13527){
var vec__13531__13532 = p__13527;
var v__13533 = cljs.core.nth.call(null,vec__13531__13532,0,null);
if(cljs.core.truth_(v__13533))
{return $elem.val(v__13533);
} else
{return $elem.val();
}
};
var val = function ($elem,var_args){
var p__13527 = null;
if (goog.isDef(var_args)) {
  p__13527 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return val__delegate.call(this, $elem, p__13527);
};
val.cljs$lang$maxFixedArity = 1;
val.cljs$lang$applyTo = (function (arglist__13534){
var $elem = cljs.core.first(arglist__13534);
var p__13527 = cljs.core.rest(arglist__13534);
return val__delegate($elem, p__13527);
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
jayq.core.xhr = (function xhr(p__13535,content,callback){
var vec__13541__13542 = p__13535;
var method__13543 = cljs.core.nth.call(null,vec__13541__13542,0,null);
var uri__13544 = cljs.core.nth.call(null,vec__13541__13542,1,null);
var params__13545 = jayq.util.clj__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'type","\uFDD0'data","\uFDD0'success"],{"\uFDD0'type":clojure.string.upper_case.call(null,cljs.core.name.call(null,method__13543)),"\uFDD0'data":jayq.util.clj__GT_js.call(null,content),"\uFDD0'success":callback}));
return jQuery.ajax(uri__13544,params__13545);
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
var on__delegate = function ($elem,events,p__13546){
var vec__13552__13553 = p__13546;
var sel__13554 = cljs.core.nth.call(null,vec__13552__13553,0,null);
var data__13555 = cljs.core.nth.call(null,vec__13552__13553,1,null);
var handler__13556 = cljs.core.nth.call(null,vec__13552__13553,2,null);
return $elem.on(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel__13554),data__13555,handler__13556);
};
var on = function ($elem,events,var_args){
var p__13546 = null;
if (goog.isDef(var_args)) {
  p__13546 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return on__delegate.call(this, $elem, events, p__13546);
};
on.cljs$lang$maxFixedArity = 2;
on.cljs$lang$applyTo = (function (arglist__13557){
var $elem = cljs.core.first(arglist__13557);
var events = cljs.core.first(cljs.core.next(arglist__13557));
var p__13546 = cljs.core.rest(cljs.core.next(arglist__13557));
return on__delegate($elem, events, p__13546);
});
on.cljs$lang$arity$variadic = on__delegate;
return on;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.one = (function() { 
var one__delegate = function ($elem,events,p__13558){
var vec__13564__13565 = p__13558;
var sel__13566 = cljs.core.nth.call(null,vec__13564__13565,0,null);
var data__13567 = cljs.core.nth.call(null,vec__13564__13565,1,null);
var handler__13568 = cljs.core.nth.call(null,vec__13564__13565,2,null);
return $elem.one(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel__13566),data__13567,handler__13568);
};
var one = function ($elem,events,var_args){
var p__13558 = null;
if (goog.isDef(var_args)) {
  p__13558 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return one__delegate.call(this, $elem, events, p__13558);
};
one.cljs$lang$maxFixedArity = 2;
one.cljs$lang$applyTo = (function (arglist__13569){
var $elem = cljs.core.first(arglist__13569);
var events = cljs.core.first(cljs.core.next(arglist__13569));
var p__13558 = cljs.core.rest(cljs.core.next(arglist__13569));
return one__delegate($elem, events, p__13558);
});
one.cljs$lang$arity$variadic = one__delegate;
return one;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.off = (function() { 
var off__delegate = function ($elem,events,p__13570){
var vec__13575__13576 = p__13570;
var sel__13577 = cljs.core.nth.call(null,vec__13575__13576,0,null);
var handler__13578 = cljs.core.nth.call(null,vec__13575__13576,1,null);
return $elem.off(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel__13577),handler__13578);
};
var off = function ($elem,events,var_args){
var p__13570 = null;
if (goog.isDef(var_args)) {
  p__13570 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return off__delegate.call(this, $elem, events, p__13570);
};
off.cljs$lang$maxFixedArity = 2;
off.cljs$lang$applyTo = (function (arglist__13579){
var $elem = cljs.core.first(arglist__13579);
var events = cljs.core.first(cljs.core.next(arglist__13579));
var p__13570 = cljs.core.rest(cljs.core.next(arglist__13579));
return off__delegate($elem, events, p__13570);
});
off.cljs$lang$arity$variadic = off__delegate;
return off;
})()
;
jayq.core.prevent = (function prevent(e){
return e.preventDefault();
});

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
{var temp__3971__auto____86118 = jayq.core.crate_meta.call(null,sel);
if(cljs.core.truth_(temp__3971__auto____86118))
{var cm__86119 = temp__3971__auto____86118;
return [cljs.core.str("[crateGroup="),cljs.core.str(cm__86119),cljs.core.str("]")].join('');
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
var $__delegate = function (sel,p__86120){
var vec__86124__86125 = p__86120;
var context__86126 = cljs.core.nth.call(null,vec__86124__86125,0,null);
if(cljs.core.not.call(null,context__86126))
{return jQuery(jayq.core.__GT_selector.call(null,sel));
} else
{return jQuery(jayq.core.__GT_selector.call(null,sel),context__86126);
}
};
var $ = function (sel,var_args){
var p__86120 = null;
if (goog.isDef(var_args)) {
  p__86120 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return $__delegate.call(this, sel, p__86120);
};
$.cljs$lang$maxFixedArity = 1;
$.cljs$lang$applyTo = (function (arglist__86127){
var sel = cljs.core.first(arglist__86127);
var p__86120 = cljs.core.rest(arglist__86127);
return $__delegate(sel, p__86120);
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
var or__3824__auto____86128 = this$.slice(k,(k + 1));
if(cljs.core.truth_(or__3824__auto____86128))
{return or__3824__auto____86128;
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
var G__86129 = null;
var G__86129__2 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__86129__3 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__86129 = function(_,k,not_found){
switch(arguments.length){
case 2:
return G__86129__2.call(this,_,k);
case 3:
return G__86129__3.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__86129;
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
var attr__delegate = function ($elem,a,p__86130){
var vec__86135__86136 = p__86130;
var v__86137 = cljs.core.nth.call(null,vec__86135__86136,0,null);
var a__86138 = cljs.core.name.call(null,a);
if(cljs.core.not.call(null,v__86137))
{return $elem.attr(a__86138);
} else
{return $elem.attr(a__86138,v__86137);
}
};
var attr = function ($elem,a,var_args){
var p__86130 = null;
if (goog.isDef(var_args)) {
  p__86130 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return attr__delegate.call(this, $elem, a, p__86130);
};
attr.cljs$lang$maxFixedArity = 2;
attr.cljs$lang$applyTo = (function (arglist__86139){
var $elem = cljs.core.first(arglist__86139);
var a = cljs.core.first(cljs.core.next(arglist__86139));
var p__86130 = cljs.core.rest(cljs.core.next(arglist__86139));
return attr__delegate($elem, a, p__86130);
});
attr.cljs$lang$arity$variadic = attr__delegate;
return attr;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.data = (function() { 
var data__delegate = function ($elem,k,p__86140){
var vec__86145__86146 = p__86140;
var v__86147 = cljs.core.nth.call(null,vec__86145__86146,0,null);
var k__86148 = cljs.core.name.call(null,k);
if(cljs.core.not.call(null,v__86147))
{return $elem.data(k__86148);
} else
{return $elem.data(k__86148,v__86147);
}
};
var data = function ($elem,k,var_args){
var p__86140 = null;
if (goog.isDef(var_args)) {
  p__86140 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return data__delegate.call(this, $elem, k, p__86140);
};
data.cljs$lang$maxFixedArity = 2;
data.cljs$lang$applyTo = (function (arglist__86149){
var $elem = cljs.core.first(arglist__86149);
var k = cljs.core.first(cljs.core.next(arglist__86149));
var p__86140 = cljs.core.rest(cljs.core.next(arglist__86149));
return data__delegate($elem, k, p__86140);
});
data.cljs$lang$arity$variadic = data__delegate;
return data;
})()
;
jayq.core.position = (function position($elem){
return cljs.core.js__GT_clj.call(null,$elem.position(),"\uFDD0'keywordize-keys",true);
});
jayq.core.add_class = (function add_class($elem,cl){
var cl__86151 = cljs.core.name.call(null,cl);
return $elem.addClass(cl__86151);
});
jayq.core.remove_class = (function remove_class($elem,cl){
var cl__86153 = cljs.core.name.call(null,cl);
return $elem.removeClass(cl__86153);
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
var hide__delegate = function ($elem,p__86154){
var vec__86159__86160 = p__86154;
var speed__86161 = cljs.core.nth.call(null,vec__86159__86160,0,null);
var on_finish__86162 = cljs.core.nth.call(null,vec__86159__86160,1,null);
return $elem.hide(speed__86161,on_finish__86162);
};
var hide = function ($elem,var_args){
var p__86154 = null;
if (goog.isDef(var_args)) {
  p__86154 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return hide__delegate.call(this, $elem, p__86154);
};
hide.cljs$lang$maxFixedArity = 1;
hide.cljs$lang$applyTo = (function (arglist__86163){
var $elem = cljs.core.first(arglist__86163);
var p__86154 = cljs.core.rest(arglist__86163);
return hide__delegate($elem, p__86154);
});
hide.cljs$lang$arity$variadic = hide__delegate;
return hide;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.show = (function() { 
var show__delegate = function ($elem,p__86164){
var vec__86169__86170 = p__86164;
var speed__86171 = cljs.core.nth.call(null,vec__86169__86170,0,null);
var on_finish__86172 = cljs.core.nth.call(null,vec__86169__86170,1,null);
return $elem.show(speed__86171,on_finish__86172);
};
var show = function ($elem,var_args){
var p__86164 = null;
if (goog.isDef(var_args)) {
  p__86164 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return show__delegate.call(this, $elem, p__86164);
};
show.cljs$lang$maxFixedArity = 1;
show.cljs$lang$applyTo = (function (arglist__86173){
var $elem = cljs.core.first(arglist__86173);
var p__86164 = cljs.core.rest(arglist__86173);
return show__delegate($elem, p__86164);
});
show.cljs$lang$arity$variadic = show__delegate;
return show;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.toggle = (function() { 
var toggle__delegate = function ($elem,p__86174){
var vec__86179__86180 = p__86174;
var speed__86181 = cljs.core.nth.call(null,vec__86179__86180,0,null);
var on_finish__86182 = cljs.core.nth.call(null,vec__86179__86180,1,null);
return $elem.toggle(speed__86181,on_finish__86182);
};
var toggle = function ($elem,var_args){
var p__86174 = null;
if (goog.isDef(var_args)) {
  p__86174 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return toggle__delegate.call(this, $elem, p__86174);
};
toggle.cljs$lang$maxFixedArity = 1;
toggle.cljs$lang$applyTo = (function (arglist__86183){
var $elem = cljs.core.first(arglist__86183);
var p__86174 = cljs.core.rest(arglist__86183);
return toggle__delegate($elem, p__86174);
});
toggle.cljs$lang$arity$variadic = toggle__delegate;
return toggle;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.fade_out = (function() { 
var fade_out__delegate = function ($elem,p__86184){
var vec__86189__86190 = p__86184;
var speed__86191 = cljs.core.nth.call(null,vec__86189__86190,0,null);
var on_finish__86192 = cljs.core.nth.call(null,vec__86189__86190,1,null);
return $elem.fadeOut(speed__86191,on_finish__86192);
};
var fade_out = function ($elem,var_args){
var p__86184 = null;
if (goog.isDef(var_args)) {
  p__86184 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return fade_out__delegate.call(this, $elem, p__86184);
};
fade_out.cljs$lang$maxFixedArity = 1;
fade_out.cljs$lang$applyTo = (function (arglist__86193){
var $elem = cljs.core.first(arglist__86193);
var p__86184 = cljs.core.rest(arglist__86193);
return fade_out__delegate($elem, p__86184);
});
fade_out.cljs$lang$arity$variadic = fade_out__delegate;
return fade_out;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.fade_in = (function() { 
var fade_in__delegate = function ($elem,p__86194){
var vec__86199__86200 = p__86194;
var speed__86201 = cljs.core.nth.call(null,vec__86199__86200,0,null);
var on_finish__86202 = cljs.core.nth.call(null,vec__86199__86200,1,null);
return $elem.fadeIn(speed__86201,on_finish__86202);
};
var fade_in = function ($elem,var_args){
var p__86194 = null;
if (goog.isDef(var_args)) {
  p__86194 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return fade_in__delegate.call(this, $elem, p__86194);
};
fade_in.cljs$lang$maxFixedArity = 1;
fade_in.cljs$lang$applyTo = (function (arglist__86203){
var $elem = cljs.core.first(arglist__86203);
var p__86194 = cljs.core.rest(arglist__86203);
return fade_in__delegate($elem, p__86194);
});
fade_in.cljs$lang$arity$variadic = fade_in__delegate;
return fade_in;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.slide_up = (function() { 
var slide_up__delegate = function ($elem,p__86204){
var vec__86209__86210 = p__86204;
var speed__86211 = cljs.core.nth.call(null,vec__86209__86210,0,null);
var on_finish__86212 = cljs.core.nth.call(null,vec__86209__86210,1,null);
return $elem.slideUp(speed__86211,on_finish__86212);
};
var slide_up = function ($elem,var_args){
var p__86204 = null;
if (goog.isDef(var_args)) {
  p__86204 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return slide_up__delegate.call(this, $elem, p__86204);
};
slide_up.cljs$lang$maxFixedArity = 1;
slide_up.cljs$lang$applyTo = (function (arglist__86213){
var $elem = cljs.core.first(arglist__86213);
var p__86204 = cljs.core.rest(arglist__86213);
return slide_up__delegate($elem, p__86204);
});
slide_up.cljs$lang$arity$variadic = slide_up__delegate;
return slide_up;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.slide_down = (function() { 
var slide_down__delegate = function ($elem,p__86214){
var vec__86219__86220 = p__86214;
var speed__86221 = cljs.core.nth.call(null,vec__86219__86220,0,null);
var on_finish__86222 = cljs.core.nth.call(null,vec__86219__86220,1,null);
return $elem.slideDown(speed__86221,on_finish__86222);
};
var slide_down = function ($elem,var_args){
var p__86214 = null;
if (goog.isDef(var_args)) {
  p__86214 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return slide_down__delegate.call(this, $elem, p__86214);
};
slide_down.cljs$lang$maxFixedArity = 1;
slide_down.cljs$lang$applyTo = (function (arglist__86223){
var $elem = cljs.core.first(arglist__86223);
var p__86214 = cljs.core.rest(arglist__86223);
return slide_down__delegate($elem, p__86214);
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
var val__delegate = function ($elem,p__86224){
var vec__86228__86229 = p__86224;
var v__86230 = cljs.core.nth.call(null,vec__86228__86229,0,null);
if(cljs.core.truth_(v__86230))
{return $elem.val(v__86230);
} else
{return $elem.val();
}
};
var val = function ($elem,var_args){
var p__86224 = null;
if (goog.isDef(var_args)) {
  p__86224 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return val__delegate.call(this, $elem, p__86224);
};
val.cljs$lang$maxFixedArity = 1;
val.cljs$lang$applyTo = (function (arglist__86231){
var $elem = cljs.core.first(arglist__86231);
var p__86224 = cljs.core.rest(arglist__86231);
return val__delegate($elem, p__86224);
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

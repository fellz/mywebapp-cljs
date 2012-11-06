goog.provide('cljs.core');
goog.require('goog.array');
goog.require('goog.object');
goog.require('goog.string.format');
goog.require('goog.string.StringBuffer');
goog.require('goog.string');
cljs.core._STAR_unchecked_if_STAR_ = false;
/**
* Each runtime environment provides a diffenent way to print output.
* Whatever function *print-fn* is bound to will be passed any
* Strings which should be printed.
*/
cljs.core._STAR_print_fn_STAR_ = (function _STAR_print_fn_STAR_(_){
throw (new Error("No *print-fn* fn set for evaluation environment"));
});
/**
* Internal - do not use!
*/
cljs.core.truth_ = (function truth_(x){
return (x != null && x !== false);
});
/**
* Tests if 2 arguments are the same object
*/
cljs.core.identical_QMARK_ = (function identical_QMARK_(x,y){
return (x === y);
});
/**
* Returns true if x is nil, false otherwise.
*/
cljs.core.nil_QMARK_ = (function nil_QMARK_(x){
return (x == null);
});
/**
* Returns true if x is logical false, false otherwise.
*/
cljs.core.not = (function not(x){
if(cljs.core.truth_(x))
{return false;
} else
{return true;
}
});
/**
* Internal - do not use!
*/
cljs.core.type_satisfies_ = (function type_satisfies_(p,x){
var x__73469 = (((x == null))?null:x);
if((p[goog.typeOf(x__73469)]))
{return true;
} else
{if((p["_"]))
{return true;
} else
{if("\uFDD0'else")
{return false;
} else
{return null;
}
}
}
});
cljs.core.is_proto_ = (function is_proto_(x){
return (x.constructor.prototype === x);
});
/**
* When compiled for a command-line target, whatever
* function *main-fn* is set to will be called with the command-line
* argv as arguments
*/
cljs.core._STAR_main_cli_fn_STAR_ = null;
cljs.core.missing_protocol = (function missing_protocol(proto,obj){
return Error(["No protocol method ",proto," defined for type ",goog.typeOf(obj),": ",obj].join(""));
});
/**
* Returns a javascript array, cloned from the passed in array
*/
cljs.core.aclone = (function aclone(array_like){
return array_like.slice();
});
/**
* Creates a new javascript array.
* @param {...*} var_args
*/
cljs.core.array = (function array(var_args){
return Array.prototype.slice.call(arguments);
});
cljs.core.make_array = (function() {
var make_array = null;
var make_array__1 = (function (size){
return (new Array(size));
});
var make_array__2 = (function (type,size){
return make_array.call(null,size);
});
make_array = function(type,size){
switch(arguments.length){
case 1:
return make_array__1.call(this,type);
case 2:
return make_array__2.call(this,type,size);
}
throw('Invalid arity: ' + arguments.length);
};
make_array.cljs$lang$arity$1 = make_array__1;
make_array.cljs$lang$arity$2 = make_array__2;
return make_array;
})()
;
/**
* Returns the value at the index.
* @param {...*} var_args
*/
cljs.core.aget = (function() {
var aget = null;
var aget__2 = (function (array,i){
return (array[i]);
});
var aget__3 = (function() { 
var G__73470__delegate = function (array,i,idxs){
return cljs.core.apply.call(null,aget,aget.call(null,array,i),idxs);
};
var G__73470 = function (array,i,var_args){
var idxs = null;
if (goog.isDef(var_args)) {
  idxs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__73470__delegate.call(this, array, i, idxs);
};
G__73470.cljs$lang$maxFixedArity = 2;
G__73470.cljs$lang$applyTo = (function (arglist__73471){
var array = cljs.core.first(arglist__73471);
var i = cljs.core.first(cljs.core.next(arglist__73471));
var idxs = cljs.core.rest(cljs.core.next(arglist__73471));
return G__73470__delegate(array, i, idxs);
});
G__73470.cljs$lang$arity$variadic = G__73470__delegate;
return G__73470;
})()
;
aget = function(array,i,var_args){
var idxs = var_args;
switch(arguments.length){
case 2:
return aget__2.call(this,array,i);
default:
return aget__3.cljs$lang$arity$variadic(array,i, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
aget.cljs$lang$maxFixedArity = 2;
aget.cljs$lang$applyTo = aget__3.cljs$lang$applyTo;
aget.cljs$lang$arity$2 = aget__2;
aget.cljs$lang$arity$variadic = aget__3.cljs$lang$arity$variadic;
return aget;
})()
;
/**
* Sets the value at the index.
*/
cljs.core.aset = (function aset(array,i,val){
return (array[i] = val);
});
/**
* Returns the length of the array. Works on arrays of all types.
*/
cljs.core.alength = (function alength(array){
return array.length;
});
cljs.core.into_array = (function() {
var into_array = null;
var into_array__1 = (function (aseq){
return into_array.call(null,null,aseq);
});
var into_array__2 = (function (type,aseq){
return cljs.core.reduce.call(null,(function (a,x){
a.push(x);
return a;
}),[],aseq);
});
into_array = function(type,aseq){
switch(arguments.length){
case 1:
return into_array__1.call(this,type);
case 2:
return into_array__2.call(this,type,aseq);
}
throw('Invalid arity: ' + arguments.length);
};
into_array.cljs$lang$arity$1 = into_array__1;
into_array.cljs$lang$arity$2 = into_array__2;
return into_array;
})()
;
cljs.core.IFn = {};
cljs.core._invoke = (function() {
var _invoke = null;
var _invoke__1 = (function (this$){
if((function (){var and__3822__auto____73556 = this$;
if(and__3822__auto____73556)
{return this$.cljs$core$IFn$_invoke$arity$1;
} else
{return and__3822__auto____73556;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$1(this$);
} else
{var x__5531__auto____73557 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____73558 = (cljs.core._invoke[goog.typeOf(x__5531__auto____73557)]);
if(or__3824__auto____73558)
{return or__3824__auto____73558;
} else
{var or__3824__auto____73559 = (cljs.core._invoke["_"]);
if(or__3824__auto____73559)
{return or__3824__auto____73559;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__2 = (function (this$,a){
if((function (){var and__3822__auto____73560 = this$;
if(and__3822__auto____73560)
{return this$.cljs$core$IFn$_invoke$arity$2;
} else
{return and__3822__auto____73560;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$2(this$,a);
} else
{var x__5531__auto____73561 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____73562 = (cljs.core._invoke[goog.typeOf(x__5531__auto____73561)]);
if(or__3824__auto____73562)
{return or__3824__auto____73562;
} else
{var or__3824__auto____73563 = (cljs.core._invoke["_"]);
if(or__3824__auto____73563)
{return or__3824__auto____73563;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__3 = (function (this$,a,b){
if((function (){var and__3822__auto____73564 = this$;
if(and__3822__auto____73564)
{return this$.cljs$core$IFn$_invoke$arity$3;
} else
{return and__3822__auto____73564;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$3(this$,a,b);
} else
{var x__5531__auto____73565 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____73566 = (cljs.core._invoke[goog.typeOf(x__5531__auto____73565)]);
if(or__3824__auto____73566)
{return or__3824__auto____73566;
} else
{var or__3824__auto____73567 = (cljs.core._invoke["_"]);
if(or__3824__auto____73567)
{return or__3824__auto____73567;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__4 = (function (this$,a,b,c){
if((function (){var and__3822__auto____73568 = this$;
if(and__3822__auto____73568)
{return this$.cljs$core$IFn$_invoke$arity$4;
} else
{return and__3822__auto____73568;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$4(this$,a,b,c);
} else
{var x__5531__auto____73569 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____73570 = (cljs.core._invoke[goog.typeOf(x__5531__auto____73569)]);
if(or__3824__auto____73570)
{return or__3824__auto____73570;
} else
{var or__3824__auto____73571 = (cljs.core._invoke["_"]);
if(or__3824__auto____73571)
{return or__3824__auto____73571;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__5 = (function (this$,a,b,c,d){
if((function (){var and__3822__auto____73572 = this$;
if(and__3822__auto____73572)
{return this$.cljs$core$IFn$_invoke$arity$5;
} else
{return and__3822__auto____73572;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$5(this$,a,b,c,d);
} else
{var x__5531__auto____73573 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____73574 = (cljs.core._invoke[goog.typeOf(x__5531__auto____73573)]);
if(or__3824__auto____73574)
{return or__3824__auto____73574;
} else
{var or__3824__auto____73575 = (cljs.core._invoke["_"]);
if(or__3824__auto____73575)
{return or__3824__auto____73575;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__6 = (function (this$,a,b,c,d,e){
if((function (){var and__3822__auto____73576 = this$;
if(and__3822__auto____73576)
{return this$.cljs$core$IFn$_invoke$arity$6;
} else
{return and__3822__auto____73576;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$6(this$,a,b,c,d,e);
} else
{var x__5531__auto____73577 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____73578 = (cljs.core._invoke[goog.typeOf(x__5531__auto____73577)]);
if(or__3824__auto____73578)
{return or__3824__auto____73578;
} else
{var or__3824__auto____73579 = (cljs.core._invoke["_"]);
if(or__3824__auto____73579)
{return or__3824__auto____73579;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7 = (function (this$,a,b,c,d,e,f){
if((function (){var and__3822__auto____73580 = this$;
if(and__3822__auto____73580)
{return this$.cljs$core$IFn$_invoke$arity$7;
} else
{return and__3822__auto____73580;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$7(this$,a,b,c,d,e,f);
} else
{var x__5531__auto____73581 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____73582 = (cljs.core._invoke[goog.typeOf(x__5531__auto____73581)]);
if(or__3824__auto____73582)
{return or__3824__auto____73582;
} else
{var or__3824__auto____73583 = (cljs.core._invoke["_"]);
if(or__3824__auto____73583)
{return or__3824__auto____73583;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__8 = (function (this$,a,b,c,d,e,f,g){
if((function (){var and__3822__auto____73584 = this$;
if(and__3822__auto____73584)
{return this$.cljs$core$IFn$_invoke$arity$8;
} else
{return and__3822__auto____73584;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$8(this$,a,b,c,d,e,f,g);
} else
{var x__5531__auto____73585 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____73586 = (cljs.core._invoke[goog.typeOf(x__5531__auto____73585)]);
if(or__3824__auto____73586)
{return or__3824__auto____73586;
} else
{var or__3824__auto____73587 = (cljs.core._invoke["_"]);
if(or__3824__auto____73587)
{return or__3824__auto____73587;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__9 = (function (this$,a,b,c,d,e,f,g,h){
if((function (){var and__3822__auto____73588 = this$;
if(and__3822__auto____73588)
{return this$.cljs$core$IFn$_invoke$arity$9;
} else
{return and__3822__auto____73588;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$9(this$,a,b,c,d,e,f,g,h);
} else
{var x__5531__auto____73589 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____73590 = (cljs.core._invoke[goog.typeOf(x__5531__auto____73589)]);
if(or__3824__auto____73590)
{return or__3824__auto____73590;
} else
{var or__3824__auto____73591 = (cljs.core._invoke["_"]);
if(or__3824__auto____73591)
{return or__3824__auto____73591;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__10 = (function (this$,a,b,c,d,e,f,g,h,i){
if((function (){var and__3822__auto____73592 = this$;
if(and__3822__auto____73592)
{return this$.cljs$core$IFn$_invoke$arity$10;
} else
{return and__3822__auto____73592;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$10(this$,a,b,c,d,e,f,g,h,i);
} else
{var x__5531__auto____73593 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____73594 = (cljs.core._invoke[goog.typeOf(x__5531__auto____73593)]);
if(or__3824__auto____73594)
{return or__3824__auto____73594;
} else
{var or__3824__auto____73595 = (cljs.core._invoke["_"]);
if(or__3824__auto____73595)
{return or__3824__auto____73595;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__11 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if((function (){var and__3822__auto____73596 = this$;
if(and__3822__auto____73596)
{return this$.cljs$core$IFn$_invoke$arity$11;
} else
{return and__3822__auto____73596;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$11(this$,a,b,c,d,e,f,g,h,i,j);
} else
{var x__5531__auto____73597 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____73598 = (cljs.core._invoke[goog.typeOf(x__5531__auto____73597)]);
if(or__3824__auto____73598)
{return or__3824__auto____73598;
} else
{var or__3824__auto____73599 = (cljs.core._invoke["_"]);
if(or__3824__auto____73599)
{return or__3824__auto____73599;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__12 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if((function (){var and__3822__auto____73600 = this$;
if(and__3822__auto____73600)
{return this$.cljs$core$IFn$_invoke$arity$12;
} else
{return and__3822__auto____73600;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$12(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{var x__5531__auto____73601 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____73602 = (cljs.core._invoke[goog.typeOf(x__5531__auto____73601)]);
if(or__3824__auto____73602)
{return or__3824__auto____73602;
} else
{var or__3824__auto____73603 = (cljs.core._invoke["_"]);
if(or__3824__auto____73603)
{return or__3824__auto____73603;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__13 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if((function (){var and__3822__auto____73604 = this$;
if(and__3822__auto____73604)
{return this$.cljs$core$IFn$_invoke$arity$13;
} else
{return and__3822__auto____73604;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$13(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{var x__5531__auto____73605 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____73606 = (cljs.core._invoke[goog.typeOf(x__5531__auto____73605)]);
if(or__3824__auto____73606)
{return or__3824__auto____73606;
} else
{var or__3824__auto____73607 = (cljs.core._invoke["_"]);
if(or__3824__auto____73607)
{return or__3824__auto____73607;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__14 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if((function (){var and__3822__auto____73608 = this$;
if(and__3822__auto____73608)
{return this$.cljs$core$IFn$_invoke$arity$14;
} else
{return and__3822__auto____73608;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$14(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{var x__5531__auto____73609 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____73610 = (cljs.core._invoke[goog.typeOf(x__5531__auto____73609)]);
if(or__3824__auto____73610)
{return or__3824__auto____73610;
} else
{var or__3824__auto____73611 = (cljs.core._invoke["_"]);
if(or__3824__auto____73611)
{return or__3824__auto____73611;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__15 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if((function (){var and__3822__auto____73612 = this$;
if(and__3822__auto____73612)
{return this$.cljs$core$IFn$_invoke$arity$15;
} else
{return and__3822__auto____73612;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$15(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{var x__5531__auto____73613 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____73614 = (cljs.core._invoke[goog.typeOf(x__5531__auto____73613)]);
if(or__3824__auto____73614)
{return or__3824__auto____73614;
} else
{var or__3824__auto____73615 = (cljs.core._invoke["_"]);
if(or__3824__auto____73615)
{return or__3824__auto____73615;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__16 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if((function (){var and__3822__auto____73616 = this$;
if(and__3822__auto____73616)
{return this$.cljs$core$IFn$_invoke$arity$16;
} else
{return and__3822__auto____73616;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$16(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{var x__5531__auto____73617 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____73618 = (cljs.core._invoke[goog.typeOf(x__5531__auto____73617)]);
if(or__3824__auto____73618)
{return or__3824__auto____73618;
} else
{var or__3824__auto____73619 = (cljs.core._invoke["_"]);
if(or__3824__auto____73619)
{return or__3824__auto____73619;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__17 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if((function (){var and__3822__auto____73620 = this$;
if(and__3822__auto____73620)
{return this$.cljs$core$IFn$_invoke$arity$17;
} else
{return and__3822__auto____73620;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$17(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{var x__5531__auto____73621 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____73622 = (cljs.core._invoke[goog.typeOf(x__5531__auto____73621)]);
if(or__3824__auto____73622)
{return or__3824__auto____73622;
} else
{var or__3824__auto____73623 = (cljs.core._invoke["_"]);
if(or__3824__auto____73623)
{return or__3824__auto____73623;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__18 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if((function (){var and__3822__auto____73624 = this$;
if(and__3822__auto____73624)
{return this$.cljs$core$IFn$_invoke$arity$18;
} else
{return and__3822__auto____73624;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$18(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{var x__5531__auto____73625 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____73626 = (cljs.core._invoke[goog.typeOf(x__5531__auto____73625)]);
if(or__3824__auto____73626)
{return or__3824__auto____73626;
} else
{var or__3824__auto____73627 = (cljs.core._invoke["_"]);
if(or__3824__auto____73627)
{return or__3824__auto____73627;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__19 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if((function (){var and__3822__auto____73628 = this$;
if(and__3822__auto____73628)
{return this$.cljs$core$IFn$_invoke$arity$19;
} else
{return and__3822__auto____73628;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$19(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{var x__5531__auto____73629 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____73630 = (cljs.core._invoke[goog.typeOf(x__5531__auto____73629)]);
if(or__3824__auto____73630)
{return or__3824__auto____73630;
} else
{var or__3824__auto____73631 = (cljs.core._invoke["_"]);
if(or__3824__auto____73631)
{return or__3824__auto____73631;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__20 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if((function (){var and__3822__auto____73632 = this$;
if(and__3822__auto____73632)
{return this$.cljs$core$IFn$_invoke$arity$20;
} else
{return and__3822__auto____73632;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$20(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{var x__5531__auto____73633 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____73634 = (cljs.core._invoke[goog.typeOf(x__5531__auto____73633)]);
if(or__3824__auto____73634)
{return or__3824__auto____73634;
} else
{var or__3824__auto____73635 = (cljs.core._invoke["_"]);
if(or__3824__auto____73635)
{return or__3824__auto____73635;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__21 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if((function (){var and__3822__auto____73636 = this$;
if(and__3822__auto____73636)
{return this$.cljs$core$IFn$_invoke$arity$21;
} else
{return and__3822__auto____73636;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$21(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{var x__5531__auto____73637 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____73638 = (cljs.core._invoke[goog.typeOf(x__5531__auto____73637)]);
if(or__3824__auto____73638)
{return or__3824__auto____73638;
} else
{var or__3824__auto____73639 = (cljs.core._invoke["_"]);
if(or__3824__auto____73639)
{return or__3824__auto____73639;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
});
_invoke = function(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
switch(arguments.length){
case 1:
return _invoke__1.call(this,this$);
case 2:
return _invoke__2.call(this,this$,a);
case 3:
return _invoke__3.call(this,this$,a,b);
case 4:
return _invoke__4.call(this,this$,a,b,c);
case 5:
return _invoke__5.call(this,this$,a,b,c,d);
case 6:
return _invoke__6.call(this,this$,a,b,c,d,e);
case 7:
return _invoke__7.call(this,this$,a,b,c,d,e,f);
case 8:
return _invoke__8.call(this,this$,a,b,c,d,e,f,g);
case 9:
return _invoke__9.call(this,this$,a,b,c,d,e,f,g,h);
case 10:
return _invoke__10.call(this,this$,a,b,c,d,e,f,g,h,i);
case 11:
return _invoke__11.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case 12:
return _invoke__12.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case 13:
return _invoke__13.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case 14:
return _invoke__14.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case 15:
return _invoke__15.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case 16:
return _invoke__16.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case 17:
return _invoke__17.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case 18:
return _invoke__18.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case 19:
return _invoke__19.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case 20:
return _invoke__20.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case 21:
return _invoke__21.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
_invoke.cljs$lang$arity$1 = _invoke__1;
_invoke.cljs$lang$arity$2 = _invoke__2;
_invoke.cljs$lang$arity$3 = _invoke__3;
_invoke.cljs$lang$arity$4 = _invoke__4;
_invoke.cljs$lang$arity$5 = _invoke__5;
_invoke.cljs$lang$arity$6 = _invoke__6;
_invoke.cljs$lang$arity$7 = _invoke__7;
_invoke.cljs$lang$arity$8 = _invoke__8;
_invoke.cljs$lang$arity$9 = _invoke__9;
_invoke.cljs$lang$arity$10 = _invoke__10;
_invoke.cljs$lang$arity$11 = _invoke__11;
_invoke.cljs$lang$arity$12 = _invoke__12;
_invoke.cljs$lang$arity$13 = _invoke__13;
_invoke.cljs$lang$arity$14 = _invoke__14;
_invoke.cljs$lang$arity$15 = _invoke__15;
_invoke.cljs$lang$arity$16 = _invoke__16;
_invoke.cljs$lang$arity$17 = _invoke__17;
_invoke.cljs$lang$arity$18 = _invoke__18;
_invoke.cljs$lang$arity$19 = _invoke__19;
_invoke.cljs$lang$arity$20 = _invoke__20;
_invoke.cljs$lang$arity$21 = _invoke__21;
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if((function (){var and__3822__auto____73644 = coll;
if(and__3822__auto____73644)
{return coll.cljs$core$ICounted$_count$arity$1;
} else
{return and__3822__auto____73644;
}
})())
{return coll.cljs$core$ICounted$_count$arity$1(coll);
} else
{var x__5531__auto____73645 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____73646 = (cljs.core._count[goog.typeOf(x__5531__auto____73645)]);
if(or__3824__auto____73646)
{return or__3824__auto____73646;
} else
{var or__3824__auto____73647 = (cljs.core._count["_"]);
if(or__3824__auto____73647)
{return or__3824__auto____73647;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if((function (){var and__3822__auto____73652 = coll;
if(and__3822__auto____73652)
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1;
} else
{return and__3822__auto____73652;
}
})())
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{var x__5531__auto____73653 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____73654 = (cljs.core._empty[goog.typeOf(x__5531__auto____73653)]);
if(or__3824__auto____73654)
{return or__3824__auto____73654;
} else
{var or__3824__auto____73655 = (cljs.core._empty["_"]);
if(or__3824__auto____73655)
{return or__3824__auto____73655;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if((function (){var and__3822__auto____73660 = coll;
if(and__3822__auto____73660)
{return coll.cljs$core$ICollection$_conj$arity$2;
} else
{return and__3822__auto____73660;
}
})())
{return coll.cljs$core$ICollection$_conj$arity$2(coll,o);
} else
{var x__5531__auto____73661 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____73662 = (cljs.core._conj[goog.typeOf(x__5531__auto____73661)]);
if(or__3824__auto____73662)
{return or__3824__auto____73662;
} else
{var or__3824__auto____73663 = (cljs.core._conj["_"]);
if(or__3824__auto____73663)
{return or__3824__auto____73663;
} else
{throw cljs.core.missing_protocol.call(null,"ICollection.-conj",coll);
}
}
})().call(null,coll,o);
}
});
cljs.core.IIndexed = {};
cljs.core._nth = (function() {
var _nth = null;
var _nth__2 = (function (coll,n){
if((function (){var and__3822__auto____73672 = coll;
if(and__3822__auto____73672)
{return coll.cljs$core$IIndexed$_nth$arity$2;
} else
{return and__3822__auto____73672;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{var x__5531__auto____73673 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____73674 = (cljs.core._nth[goog.typeOf(x__5531__auto____73673)]);
if(or__3824__auto____73674)
{return or__3824__auto____73674;
} else
{var or__3824__auto____73675 = (cljs.core._nth["_"]);
if(or__3824__auto____73675)
{return or__3824__auto____73675;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__3 = (function (coll,n,not_found){
if((function (){var and__3822__auto____73676 = coll;
if(and__3822__auto____73676)
{return coll.cljs$core$IIndexed$_nth$arity$3;
} else
{return and__3822__auto____73676;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$3(coll,n,not_found);
} else
{var x__5531__auto____73677 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____73678 = (cljs.core._nth[goog.typeOf(x__5531__auto____73677)]);
if(or__3824__auto____73678)
{return or__3824__auto____73678;
} else
{var or__3824__auto____73679 = (cljs.core._nth["_"]);
if(or__3824__auto____73679)
{return or__3824__auto____73679;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n,not_found);
}
});
_nth = function(coll,n,not_found){
switch(arguments.length){
case 2:
return _nth__2.call(this,coll,n);
case 3:
return _nth__3.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
_nth.cljs$lang$arity$2 = _nth__2;
_nth.cljs$lang$arity$3 = _nth__3;
return _nth;
})()
;
cljs.core.ASeq = {};
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if((function (){var and__3822__auto____73684 = coll;
if(and__3822__auto____73684)
{return coll.cljs$core$ISeq$_first$arity$1;
} else
{return and__3822__auto____73684;
}
})())
{return coll.cljs$core$ISeq$_first$arity$1(coll);
} else
{var x__5531__auto____73685 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____73686 = (cljs.core._first[goog.typeOf(x__5531__auto____73685)]);
if(or__3824__auto____73686)
{return or__3824__auto____73686;
} else
{var or__3824__auto____73687 = (cljs.core._first["_"]);
if(or__3824__auto____73687)
{return or__3824__auto____73687;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if((function (){var and__3822__auto____73692 = coll;
if(and__3822__auto____73692)
{return coll.cljs$core$ISeq$_rest$arity$1;
} else
{return and__3822__auto____73692;
}
})())
{return coll.cljs$core$ISeq$_rest$arity$1(coll);
} else
{var x__5531__auto____73693 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____73694 = (cljs.core._rest[goog.typeOf(x__5531__auto____73693)]);
if(or__3824__auto____73694)
{return or__3824__auto____73694;
} else
{var or__3824__auto____73695 = (cljs.core._rest["_"]);
if(or__3824__auto____73695)
{return or__3824__auto____73695;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.INext = {};
cljs.core._next = (function _next(coll){
if((function (){var and__3822__auto____73700 = coll;
if(and__3822__auto____73700)
{return coll.cljs$core$INext$_next$arity$1;
} else
{return and__3822__auto____73700;
}
})())
{return coll.cljs$core$INext$_next$arity$1(coll);
} else
{var x__5531__auto____73701 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____73702 = (cljs.core._next[goog.typeOf(x__5531__auto____73701)]);
if(or__3824__auto____73702)
{return or__3824__auto____73702;
} else
{var or__3824__auto____73703 = (cljs.core._next["_"]);
if(or__3824__auto____73703)
{return or__3824__auto____73703;
} else
{throw cljs.core.missing_protocol.call(null,"INext.-next",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ILookup = {};
cljs.core._lookup = (function() {
var _lookup = null;
var _lookup__2 = (function (o,k){
if((function (){var and__3822__auto____73712 = o;
if(and__3822__auto____73712)
{return o.cljs$core$ILookup$_lookup$arity$2;
} else
{return and__3822__auto____73712;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$2(o,k);
} else
{var x__5531__auto____73713 = (((o == null))?null:o);
return (function (){var or__3824__auto____73714 = (cljs.core._lookup[goog.typeOf(x__5531__auto____73713)]);
if(or__3824__auto____73714)
{return or__3824__auto____73714;
} else
{var or__3824__auto____73715 = (cljs.core._lookup["_"]);
if(or__3824__auto____73715)
{return or__3824__auto____73715;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__3 = (function (o,k,not_found){
if((function (){var and__3822__auto____73716 = o;
if(and__3822__auto____73716)
{return o.cljs$core$ILookup$_lookup$arity$3;
} else
{return and__3822__auto____73716;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$3(o,k,not_found);
} else
{var x__5531__auto____73717 = (((o == null))?null:o);
return (function (){var or__3824__auto____73718 = (cljs.core._lookup[goog.typeOf(x__5531__auto____73717)]);
if(or__3824__auto____73718)
{return or__3824__auto____73718;
} else
{var or__3824__auto____73719 = (cljs.core._lookup["_"]);
if(or__3824__auto____73719)
{return or__3824__auto____73719;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k,not_found);
}
});
_lookup = function(o,k,not_found){
switch(arguments.length){
case 2:
return _lookup__2.call(this,o,k);
case 3:
return _lookup__3.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
_lookup.cljs$lang$arity$2 = _lookup__2;
_lookup.cljs$lang$arity$3 = _lookup__3;
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if((function (){var and__3822__auto____73724 = coll;
if(and__3822__auto____73724)
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2;
} else
{return and__3822__auto____73724;
}
})())
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2(coll,k);
} else
{var x__5531__auto____73725 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____73726 = (cljs.core._contains_key_QMARK_[goog.typeOf(x__5531__auto____73725)]);
if(or__3824__auto____73726)
{return or__3824__auto____73726;
} else
{var or__3824__auto____73727 = (cljs.core._contains_key_QMARK_["_"]);
if(or__3824__auto____73727)
{return or__3824__auto____73727;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if((function (){var and__3822__auto____73732 = coll;
if(and__3822__auto____73732)
{return coll.cljs$core$IAssociative$_assoc$arity$3;
} else
{return and__3822__auto____73732;
}
})())
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,k,v);
} else
{var x__5531__auto____73733 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____73734 = (cljs.core._assoc[goog.typeOf(x__5531__auto____73733)]);
if(or__3824__auto____73734)
{return or__3824__auto____73734;
} else
{var or__3824__auto____73735 = (cljs.core._assoc["_"]);
if(or__3824__auto____73735)
{return or__3824__auto____73735;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if((function (){var and__3822__auto____73740 = coll;
if(and__3822__auto____73740)
{return coll.cljs$core$IMap$_dissoc$arity$2;
} else
{return and__3822__auto____73740;
}
})())
{return coll.cljs$core$IMap$_dissoc$arity$2(coll,k);
} else
{var x__5531__auto____73741 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____73742 = (cljs.core._dissoc[goog.typeOf(x__5531__auto____73741)]);
if(or__3824__auto____73742)
{return or__3824__auto____73742;
} else
{var or__3824__auto____73743 = (cljs.core._dissoc["_"]);
if(or__3824__auto____73743)
{return or__3824__auto____73743;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.IMapEntry = {};
cljs.core._key = (function _key(coll){
if((function (){var and__3822__auto____73748 = coll;
if(and__3822__auto____73748)
{return coll.cljs$core$IMapEntry$_key$arity$1;
} else
{return and__3822__auto____73748;
}
})())
{return coll.cljs$core$IMapEntry$_key$arity$1(coll);
} else
{var x__5531__auto____73749 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____73750 = (cljs.core._key[goog.typeOf(x__5531__auto____73749)]);
if(or__3824__auto____73750)
{return or__3824__auto____73750;
} else
{var or__3824__auto____73751 = (cljs.core._key["_"]);
if(or__3824__auto____73751)
{return or__3824__auto____73751;
} else
{throw cljs.core.missing_protocol.call(null,"IMapEntry.-key",coll);
}
}
})().call(null,coll);
}
});
cljs.core._val = (function _val(coll){
if((function (){var and__3822__auto____73756 = coll;
if(and__3822__auto____73756)
{return coll.cljs$core$IMapEntry$_val$arity$1;
} else
{return and__3822__auto____73756;
}
})())
{return coll.cljs$core$IMapEntry$_val$arity$1(coll);
} else
{var x__5531__auto____73757 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____73758 = (cljs.core._val[goog.typeOf(x__5531__auto____73757)]);
if(or__3824__auto____73758)
{return or__3824__auto____73758;
} else
{var or__3824__auto____73759 = (cljs.core._val["_"]);
if(or__3824__auto____73759)
{return or__3824__auto____73759;
} else
{throw cljs.core.missing_protocol.call(null,"IMapEntry.-val",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if((function (){var and__3822__auto____73764 = coll;
if(and__3822__auto____73764)
{return coll.cljs$core$ISet$_disjoin$arity$2;
} else
{return and__3822__auto____73764;
}
})())
{return coll.cljs$core$ISet$_disjoin$arity$2(coll,v);
} else
{var x__5531__auto____73765 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____73766 = (cljs.core._disjoin[goog.typeOf(x__5531__auto____73765)]);
if(or__3824__auto____73766)
{return or__3824__auto____73766;
} else
{var or__3824__auto____73767 = (cljs.core._disjoin["_"]);
if(or__3824__auto____73767)
{return or__3824__auto____73767;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if((function (){var and__3822__auto____73772 = coll;
if(and__3822__auto____73772)
{return coll.cljs$core$IStack$_peek$arity$1;
} else
{return and__3822__auto____73772;
}
})())
{return coll.cljs$core$IStack$_peek$arity$1(coll);
} else
{var x__5531__auto____73773 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____73774 = (cljs.core._peek[goog.typeOf(x__5531__auto____73773)]);
if(or__3824__auto____73774)
{return or__3824__auto____73774;
} else
{var or__3824__auto____73775 = (cljs.core._peek["_"]);
if(or__3824__auto____73775)
{return or__3824__auto____73775;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if((function (){var and__3822__auto____73780 = coll;
if(and__3822__auto____73780)
{return coll.cljs$core$IStack$_pop$arity$1;
} else
{return and__3822__auto____73780;
}
})())
{return coll.cljs$core$IStack$_pop$arity$1(coll);
} else
{var x__5531__auto____73781 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____73782 = (cljs.core._pop[goog.typeOf(x__5531__auto____73781)]);
if(or__3824__auto____73782)
{return or__3824__auto____73782;
} else
{var or__3824__auto____73783 = (cljs.core._pop["_"]);
if(or__3824__auto____73783)
{return or__3824__auto____73783;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if((function (){var and__3822__auto____73788 = coll;
if(and__3822__auto____73788)
{return coll.cljs$core$IVector$_assoc_n$arity$3;
} else
{return and__3822__auto____73788;
}
})())
{return coll.cljs$core$IVector$_assoc_n$arity$3(coll,n,val);
} else
{var x__5531__auto____73789 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____73790 = (cljs.core._assoc_n[goog.typeOf(x__5531__auto____73789)]);
if(or__3824__auto____73790)
{return or__3824__auto____73790;
} else
{var or__3824__auto____73791 = (cljs.core._assoc_n["_"]);
if(or__3824__auto____73791)
{return or__3824__auto____73791;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if((function (){var and__3822__auto____73796 = o;
if(and__3822__auto____73796)
{return o.cljs$core$IDeref$_deref$arity$1;
} else
{return and__3822__auto____73796;
}
})())
{return o.cljs$core$IDeref$_deref$arity$1(o);
} else
{var x__5531__auto____73797 = (((o == null))?null:o);
return (function (){var or__3824__auto____73798 = (cljs.core._deref[goog.typeOf(x__5531__auto____73797)]);
if(or__3824__auto____73798)
{return or__3824__auto____73798;
} else
{var or__3824__auto____73799 = (cljs.core._deref["_"]);
if(or__3824__auto____73799)
{return or__3824__auto____73799;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if((function (){var and__3822__auto____73804 = o;
if(and__3822__auto____73804)
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3;
} else
{return and__3822__auto____73804;
}
})())
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3(o,msec,timeout_val);
} else
{var x__5531__auto____73805 = (((o == null))?null:o);
return (function (){var or__3824__auto____73806 = (cljs.core._deref_with_timeout[goog.typeOf(x__5531__auto____73805)]);
if(or__3824__auto____73806)
{return or__3824__auto____73806;
} else
{var or__3824__auto____73807 = (cljs.core._deref_with_timeout["_"]);
if(or__3824__auto____73807)
{return or__3824__auto____73807;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if((function (){var and__3822__auto____73812 = o;
if(and__3822__auto____73812)
{return o.cljs$core$IMeta$_meta$arity$1;
} else
{return and__3822__auto____73812;
}
})())
{return o.cljs$core$IMeta$_meta$arity$1(o);
} else
{var x__5531__auto____73813 = (((o == null))?null:o);
return (function (){var or__3824__auto____73814 = (cljs.core._meta[goog.typeOf(x__5531__auto____73813)]);
if(or__3824__auto____73814)
{return or__3824__auto____73814;
} else
{var or__3824__auto____73815 = (cljs.core._meta["_"]);
if(or__3824__auto____73815)
{return or__3824__auto____73815;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if((function (){var and__3822__auto____73820 = o;
if(and__3822__auto____73820)
{return o.cljs$core$IWithMeta$_with_meta$arity$2;
} else
{return and__3822__auto____73820;
}
})())
{return o.cljs$core$IWithMeta$_with_meta$arity$2(o,meta);
} else
{var x__5531__auto____73821 = (((o == null))?null:o);
return (function (){var or__3824__auto____73822 = (cljs.core._with_meta[goog.typeOf(x__5531__auto____73821)]);
if(or__3824__auto____73822)
{return or__3824__auto____73822;
} else
{var or__3824__auto____73823 = (cljs.core._with_meta["_"]);
if(or__3824__auto____73823)
{return or__3824__auto____73823;
} else
{throw cljs.core.missing_protocol.call(null,"IWithMeta.-with-meta",o);
}
}
})().call(null,o,meta);
}
});
cljs.core.IReduce = {};
cljs.core._reduce = (function() {
var _reduce = null;
var _reduce__2 = (function (coll,f){
if((function (){var and__3822__auto____73832 = coll;
if(and__3822__auto____73832)
{return coll.cljs$core$IReduce$_reduce$arity$2;
} else
{return and__3822__auto____73832;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$2(coll,f);
} else
{var x__5531__auto____73833 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____73834 = (cljs.core._reduce[goog.typeOf(x__5531__auto____73833)]);
if(or__3824__auto____73834)
{return or__3824__auto____73834;
} else
{var or__3824__auto____73835 = (cljs.core._reduce["_"]);
if(or__3824__auto____73835)
{return or__3824__auto____73835;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__3 = (function (coll,f,start){
if((function (){var and__3822__auto____73836 = coll;
if(and__3822__auto____73836)
{return coll.cljs$core$IReduce$_reduce$arity$3;
} else
{return and__3822__auto____73836;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$3(coll,f,start);
} else
{var x__5531__auto____73837 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____73838 = (cljs.core._reduce[goog.typeOf(x__5531__auto____73837)]);
if(or__3824__auto____73838)
{return or__3824__auto____73838;
} else
{var or__3824__auto____73839 = (cljs.core._reduce["_"]);
if(or__3824__auto____73839)
{return or__3824__auto____73839;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f,start);
}
});
_reduce = function(coll,f,start){
switch(arguments.length){
case 2:
return _reduce__2.call(this,coll,f);
case 3:
return _reduce__3.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
_reduce.cljs$lang$arity$2 = _reduce__2;
_reduce.cljs$lang$arity$3 = _reduce__3;
return _reduce;
})()
;
cljs.core.IKVReduce = {};
cljs.core._kv_reduce = (function _kv_reduce(coll,f,init){
if((function (){var and__3822__auto____73844 = coll;
if(and__3822__auto____73844)
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3;
} else
{return and__3822__auto____73844;
}
})())
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3(coll,f,init);
} else
{var x__5531__auto____73845 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____73846 = (cljs.core._kv_reduce[goog.typeOf(x__5531__auto____73845)]);
if(or__3824__auto____73846)
{return or__3824__auto____73846;
} else
{var or__3824__auto____73847 = (cljs.core._kv_reduce["_"]);
if(or__3824__auto____73847)
{return or__3824__auto____73847;
} else
{throw cljs.core.missing_protocol.call(null,"IKVReduce.-kv-reduce",coll);
}
}
})().call(null,coll,f,init);
}
});
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if((function (){var and__3822__auto____73852 = o;
if(and__3822__auto____73852)
{return o.cljs$core$IEquiv$_equiv$arity$2;
} else
{return and__3822__auto____73852;
}
})())
{return o.cljs$core$IEquiv$_equiv$arity$2(o,other);
} else
{var x__5531__auto____73853 = (((o == null))?null:o);
return (function (){var or__3824__auto____73854 = (cljs.core._equiv[goog.typeOf(x__5531__auto____73853)]);
if(or__3824__auto____73854)
{return or__3824__auto____73854;
} else
{var or__3824__auto____73855 = (cljs.core._equiv["_"]);
if(or__3824__auto____73855)
{return or__3824__auto____73855;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if((function (){var and__3822__auto____73860 = o;
if(and__3822__auto____73860)
{return o.cljs$core$IHash$_hash$arity$1;
} else
{return and__3822__auto____73860;
}
})())
{return o.cljs$core$IHash$_hash$arity$1(o);
} else
{var x__5531__auto____73861 = (((o == null))?null:o);
return (function (){var or__3824__auto____73862 = (cljs.core._hash[goog.typeOf(x__5531__auto____73861)]);
if(or__3824__auto____73862)
{return or__3824__auto____73862;
} else
{var or__3824__auto____73863 = (cljs.core._hash["_"]);
if(or__3824__auto____73863)
{return or__3824__auto____73863;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if((function (){var and__3822__auto____73868 = o;
if(and__3822__auto____73868)
{return o.cljs$core$ISeqable$_seq$arity$1;
} else
{return and__3822__auto____73868;
}
})())
{return o.cljs$core$ISeqable$_seq$arity$1(o);
} else
{var x__5531__auto____73869 = (((o == null))?null:o);
return (function (){var or__3824__auto____73870 = (cljs.core._seq[goog.typeOf(x__5531__auto____73869)]);
if(or__3824__auto____73870)
{return or__3824__auto____73870;
} else
{var or__3824__auto____73871 = (cljs.core._seq["_"]);
if(or__3824__auto____73871)
{return or__3824__auto____73871;
} else
{throw cljs.core.missing_protocol.call(null,"ISeqable.-seq",o);
}
}
})().call(null,o);
}
});
cljs.core.ISequential = {};
cljs.core.IList = {};
cljs.core.IRecord = {};
cljs.core.IReversible = {};
cljs.core._rseq = (function _rseq(coll){
if((function (){var and__3822__auto____73876 = coll;
if(and__3822__auto____73876)
{return coll.cljs$core$IReversible$_rseq$arity$1;
} else
{return and__3822__auto____73876;
}
})())
{return coll.cljs$core$IReversible$_rseq$arity$1(coll);
} else
{var x__5531__auto____73877 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____73878 = (cljs.core._rseq[goog.typeOf(x__5531__auto____73877)]);
if(or__3824__auto____73878)
{return or__3824__auto____73878;
} else
{var or__3824__auto____73879 = (cljs.core._rseq["_"]);
if(or__3824__auto____73879)
{return or__3824__auto____73879;
} else
{throw cljs.core.missing_protocol.call(null,"IReversible.-rseq",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ISorted = {};
cljs.core._sorted_seq = (function _sorted_seq(coll,ascending_QMARK_){
if((function (){var and__3822__auto____73884 = coll;
if(and__3822__auto____73884)
{return coll.cljs$core$ISorted$_sorted_seq$arity$2;
} else
{return and__3822__auto____73884;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq$arity$2(coll,ascending_QMARK_);
} else
{var x__5531__auto____73885 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____73886 = (cljs.core._sorted_seq[goog.typeOf(x__5531__auto____73885)]);
if(or__3824__auto____73886)
{return or__3824__auto____73886;
} else
{var or__3824__auto____73887 = (cljs.core._sorted_seq["_"]);
if(or__3824__auto____73887)
{return or__3824__auto____73887;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-sorted-seq",coll);
}
}
})().call(null,coll,ascending_QMARK_);
}
});
cljs.core._sorted_seq_from = (function _sorted_seq_from(coll,k,ascending_QMARK_){
if((function (){var and__3822__auto____73892 = coll;
if(and__3822__auto____73892)
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3;
} else
{return and__3822__auto____73892;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3(coll,k,ascending_QMARK_);
} else
{var x__5531__auto____73893 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____73894 = (cljs.core._sorted_seq_from[goog.typeOf(x__5531__auto____73893)]);
if(or__3824__auto____73894)
{return or__3824__auto____73894;
} else
{var or__3824__auto____73895 = (cljs.core._sorted_seq_from["_"]);
if(or__3824__auto____73895)
{return or__3824__auto____73895;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-sorted-seq-from",coll);
}
}
})().call(null,coll,k,ascending_QMARK_);
}
});
cljs.core._entry_key = (function _entry_key(coll,entry){
if((function (){var and__3822__auto____73900 = coll;
if(and__3822__auto____73900)
{return coll.cljs$core$ISorted$_entry_key$arity$2;
} else
{return and__3822__auto____73900;
}
})())
{return coll.cljs$core$ISorted$_entry_key$arity$2(coll,entry);
} else
{var x__5531__auto____73901 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____73902 = (cljs.core._entry_key[goog.typeOf(x__5531__auto____73901)]);
if(or__3824__auto____73902)
{return or__3824__auto____73902;
} else
{var or__3824__auto____73903 = (cljs.core._entry_key["_"]);
if(or__3824__auto____73903)
{return or__3824__auto____73903;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-entry-key",coll);
}
}
})().call(null,coll,entry);
}
});
cljs.core._comparator = (function _comparator(coll){
if((function (){var and__3822__auto____73908 = coll;
if(and__3822__auto____73908)
{return coll.cljs$core$ISorted$_comparator$arity$1;
} else
{return and__3822__auto____73908;
}
})())
{return coll.cljs$core$ISorted$_comparator$arity$1(coll);
} else
{var x__5531__auto____73909 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____73910 = (cljs.core._comparator[goog.typeOf(x__5531__auto____73909)]);
if(or__3824__auto____73910)
{return or__3824__auto____73910;
} else
{var or__3824__auto____73911 = (cljs.core._comparator["_"]);
if(or__3824__auto____73911)
{return or__3824__auto____73911;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-comparator",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IPrintable = {};
cljs.core._pr_seq = (function _pr_seq(o,opts){
if((function (){var and__3822__auto____73916 = o;
if(and__3822__auto____73916)
{return o.cljs$core$IPrintable$_pr_seq$arity$2;
} else
{return and__3822__auto____73916;
}
})())
{return o.cljs$core$IPrintable$_pr_seq$arity$2(o,opts);
} else
{var x__5531__auto____73917 = (((o == null))?null:o);
return (function (){var or__3824__auto____73918 = (cljs.core._pr_seq[goog.typeOf(x__5531__auto____73917)]);
if(or__3824__auto____73918)
{return or__3824__auto____73918;
} else
{var or__3824__auto____73919 = (cljs.core._pr_seq["_"]);
if(or__3824__auto____73919)
{return or__3824__auto____73919;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IWriter = {};
cljs.core._write = (function _write(writer,s){
if((function (){var and__3822__auto____73924 = writer;
if(and__3822__auto____73924)
{return writer.cljs$core$IWriter$_write$arity$2;
} else
{return and__3822__auto____73924;
}
})())
{return writer.cljs$core$IWriter$_write$arity$2(writer,s);
} else
{var x__5531__auto____73925 = (((writer == null))?null:writer);
return (function (){var or__3824__auto____73926 = (cljs.core._write[goog.typeOf(x__5531__auto____73925)]);
if(or__3824__auto____73926)
{return or__3824__auto____73926;
} else
{var or__3824__auto____73927 = (cljs.core._write["_"]);
if(or__3824__auto____73927)
{return or__3824__auto____73927;
} else
{throw cljs.core.missing_protocol.call(null,"IWriter.-write",writer);
}
}
})().call(null,writer,s);
}
});
cljs.core._flush = (function _flush(writer){
if((function (){var and__3822__auto____73932 = writer;
if(and__3822__auto____73932)
{return writer.cljs$core$IWriter$_flush$arity$1;
} else
{return and__3822__auto____73932;
}
})())
{return writer.cljs$core$IWriter$_flush$arity$1(writer);
} else
{var x__5531__auto____73933 = (((writer == null))?null:writer);
return (function (){var or__3824__auto____73934 = (cljs.core._flush[goog.typeOf(x__5531__auto____73933)]);
if(or__3824__auto____73934)
{return or__3824__auto____73934;
} else
{var or__3824__auto____73935 = (cljs.core._flush["_"]);
if(or__3824__auto____73935)
{return or__3824__auto____73935;
} else
{throw cljs.core.missing_protocol.call(null,"IWriter.-flush",writer);
}
}
})().call(null,writer);
}
});
cljs.core.IPrintWithWriter = {};
cljs.core._pr_writer = (function _pr_writer(o,writer,opts){
if((function (){var and__3822__auto____73940 = o;
if(and__3822__auto____73940)
{return o.cljs$core$IPrintWithWriter$_pr_writer$arity$3;
} else
{return and__3822__auto____73940;
}
})())
{return o.cljs$core$IPrintWithWriter$_pr_writer$arity$3(o,writer,opts);
} else
{var x__5531__auto____73941 = (((o == null))?null:o);
return (function (){var or__3824__auto____73942 = (cljs.core._pr_writer[goog.typeOf(x__5531__auto____73941)]);
if(or__3824__auto____73942)
{return or__3824__auto____73942;
} else
{var or__3824__auto____73943 = (cljs.core._pr_writer["_"]);
if(or__3824__auto____73943)
{return or__3824__auto____73943;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintWithWriter.-pr-writer",o);
}
}
})().call(null,o,writer,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if((function (){var and__3822__auto____73948 = d;
if(and__3822__auto____73948)
{return d.cljs$core$IPending$_realized_QMARK_$arity$1;
} else
{return and__3822__auto____73948;
}
})())
{return d.cljs$core$IPending$_realized_QMARK_$arity$1(d);
} else
{var x__5531__auto____73949 = (((d == null))?null:d);
return (function (){var or__3824__auto____73950 = (cljs.core._realized_QMARK_[goog.typeOf(x__5531__auto____73949)]);
if(or__3824__auto____73950)
{return or__3824__auto____73950;
} else
{var or__3824__auto____73951 = (cljs.core._realized_QMARK_["_"]);
if(or__3824__auto____73951)
{return or__3824__auto____73951;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if((function (){var and__3822__auto____73956 = this$;
if(and__3822__auto____73956)
{return this$.cljs$core$IWatchable$_notify_watches$arity$3;
} else
{return and__3822__auto____73956;
}
})())
{return this$.cljs$core$IWatchable$_notify_watches$arity$3(this$,oldval,newval);
} else
{var x__5531__auto____73957 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____73958 = (cljs.core._notify_watches[goog.typeOf(x__5531__auto____73957)]);
if(or__3824__auto____73958)
{return or__3824__auto____73958;
} else
{var or__3824__auto____73959 = (cljs.core._notify_watches["_"]);
if(or__3824__auto____73959)
{return or__3824__auto____73959;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if((function (){var and__3822__auto____73964 = this$;
if(and__3822__auto____73964)
{return this$.cljs$core$IWatchable$_add_watch$arity$3;
} else
{return and__3822__auto____73964;
}
})())
{return this$.cljs$core$IWatchable$_add_watch$arity$3(this$,key,f);
} else
{var x__5531__auto____73965 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____73966 = (cljs.core._add_watch[goog.typeOf(x__5531__auto____73965)]);
if(or__3824__auto____73966)
{return or__3824__auto____73966;
} else
{var or__3824__auto____73967 = (cljs.core._add_watch["_"]);
if(or__3824__auto____73967)
{return or__3824__auto____73967;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if((function (){var and__3822__auto____73972 = this$;
if(and__3822__auto____73972)
{return this$.cljs$core$IWatchable$_remove_watch$arity$2;
} else
{return and__3822__auto____73972;
}
})())
{return this$.cljs$core$IWatchable$_remove_watch$arity$2(this$,key);
} else
{var x__5531__auto____73973 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____73974 = (cljs.core._remove_watch[goog.typeOf(x__5531__auto____73973)]);
if(or__3824__auto____73974)
{return or__3824__auto____73974;
} else
{var or__3824__auto____73975 = (cljs.core._remove_watch["_"]);
if(or__3824__auto____73975)
{return or__3824__auto____73975;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-remove-watch",this$);
}
}
})().call(null,this$,key);
}
});
cljs.core.IEditableCollection = {};
cljs.core._as_transient = (function _as_transient(coll){
if((function (){var and__3822__auto____73980 = coll;
if(and__3822__auto____73980)
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1;
} else
{return and__3822__auto____73980;
}
})())
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1(coll);
} else
{var x__5531__auto____73981 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____73982 = (cljs.core._as_transient[goog.typeOf(x__5531__auto____73981)]);
if(or__3824__auto____73982)
{return or__3824__auto____73982;
} else
{var or__3824__auto____73983 = (cljs.core._as_transient["_"]);
if(or__3824__auto____73983)
{return or__3824__auto____73983;
} else
{throw cljs.core.missing_protocol.call(null,"IEditableCollection.-as-transient",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ITransientCollection = {};
cljs.core._conj_BANG_ = (function _conj_BANG_(tcoll,val){
if((function (){var and__3822__auto____73988 = tcoll;
if(and__3822__auto____73988)
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2;
} else
{return and__3822__auto____73988;
}
})())
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{var x__5531__auto____73989 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____73990 = (cljs.core._conj_BANG_[goog.typeOf(x__5531__auto____73989)]);
if(or__3824__auto____73990)
{return or__3824__auto____73990;
} else
{var or__3824__auto____73991 = (cljs.core._conj_BANG_["_"]);
if(or__3824__auto____73991)
{return or__3824__auto____73991;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientCollection.-conj!",tcoll);
}
}
})().call(null,tcoll,val);
}
});
cljs.core._persistent_BANG_ = (function _persistent_BANG_(tcoll){
if((function (){var and__3822__auto____73996 = tcoll;
if(and__3822__auto____73996)
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1;
} else
{return and__3822__auto____73996;
}
})())
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1(tcoll);
} else
{var x__5531__auto____73997 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____73998 = (cljs.core._persistent_BANG_[goog.typeOf(x__5531__auto____73997)]);
if(or__3824__auto____73998)
{return or__3824__auto____73998;
} else
{var or__3824__auto____73999 = (cljs.core._persistent_BANG_["_"]);
if(or__3824__auto____73999)
{return or__3824__auto____73999;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientCollection.-persistent!",tcoll);
}
}
})().call(null,tcoll);
}
});
cljs.core.ITransientAssociative = {};
cljs.core._assoc_BANG_ = (function _assoc_BANG_(tcoll,key,val){
if((function (){var and__3822__auto____74004 = tcoll;
if(and__3822__auto____74004)
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3;
} else
{return and__3822__auto____74004;
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,key,val);
} else
{var x__5531__auto____74005 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____74006 = (cljs.core._assoc_BANG_[goog.typeOf(x__5531__auto____74005)]);
if(or__3824__auto____74006)
{return or__3824__auto____74006;
} else
{var or__3824__auto____74007 = (cljs.core._assoc_BANG_["_"]);
if(or__3824__auto____74007)
{return or__3824__auto____74007;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientAssociative.-assoc!",tcoll);
}
}
})().call(null,tcoll,key,val);
}
});
cljs.core.ITransientMap = {};
cljs.core._dissoc_BANG_ = (function _dissoc_BANG_(tcoll,key){
if((function (){var and__3822__auto____74012 = tcoll;
if(and__3822__auto____74012)
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2;
} else
{return and__3822__auto____74012;
}
})())
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2(tcoll,key);
} else
{var x__5531__auto____74013 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____74014 = (cljs.core._dissoc_BANG_[goog.typeOf(x__5531__auto____74013)]);
if(or__3824__auto____74014)
{return or__3824__auto____74014;
} else
{var or__3824__auto____74015 = (cljs.core._dissoc_BANG_["_"]);
if(or__3824__auto____74015)
{return or__3824__auto____74015;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientMap.-dissoc!",tcoll);
}
}
})().call(null,tcoll,key);
}
});
cljs.core.ITransientVector = {};
cljs.core._assoc_n_BANG_ = (function _assoc_n_BANG_(tcoll,n,val){
if((function (){var and__3822__auto____74020 = tcoll;
if(and__3822__auto____74020)
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3;
} else
{return and__3822__auto____74020;
}
})())
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,n,val);
} else
{var x__5531__auto____74021 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____74022 = (cljs.core._assoc_n_BANG_[goog.typeOf(x__5531__auto____74021)]);
if(or__3824__auto____74022)
{return or__3824__auto____74022;
} else
{var or__3824__auto____74023 = (cljs.core._assoc_n_BANG_["_"]);
if(or__3824__auto____74023)
{return or__3824__auto____74023;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientVector.-assoc-n!",tcoll);
}
}
})().call(null,tcoll,n,val);
}
});
cljs.core._pop_BANG_ = (function _pop_BANG_(tcoll){
if((function (){var and__3822__auto____74028 = tcoll;
if(and__3822__auto____74028)
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1;
} else
{return and__3822__auto____74028;
}
})())
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1(tcoll);
} else
{var x__5531__auto____74029 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____74030 = (cljs.core._pop_BANG_[goog.typeOf(x__5531__auto____74029)]);
if(or__3824__auto____74030)
{return or__3824__auto____74030;
} else
{var or__3824__auto____74031 = (cljs.core._pop_BANG_["_"]);
if(or__3824__auto____74031)
{return or__3824__auto____74031;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientVector.-pop!",tcoll);
}
}
})().call(null,tcoll);
}
});
cljs.core.ITransientSet = {};
cljs.core._disjoin_BANG_ = (function _disjoin_BANG_(tcoll,v){
if((function (){var and__3822__auto____74036 = tcoll;
if(and__3822__auto____74036)
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2;
} else
{return and__3822__auto____74036;
}
})())
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2(tcoll,v);
} else
{var x__5531__auto____74037 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____74038 = (cljs.core._disjoin_BANG_[goog.typeOf(x__5531__auto____74037)]);
if(or__3824__auto____74038)
{return or__3824__auto____74038;
} else
{var or__3824__auto____74039 = (cljs.core._disjoin_BANG_["_"]);
if(or__3824__auto____74039)
{return or__3824__auto____74039;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientSet.-disjoin!",tcoll);
}
}
})().call(null,tcoll,v);
}
});
cljs.core.IComparable = {};
cljs.core._compare = (function _compare(x,y){
if((function (){var and__3822__auto____74044 = x;
if(and__3822__auto____74044)
{return x.cljs$core$IComparable$_compare$arity$2;
} else
{return and__3822__auto____74044;
}
})())
{return x.cljs$core$IComparable$_compare$arity$2(x,y);
} else
{var x__5531__auto____74045 = (((x == null))?null:x);
return (function (){var or__3824__auto____74046 = (cljs.core._compare[goog.typeOf(x__5531__auto____74045)]);
if(or__3824__auto____74046)
{return or__3824__auto____74046;
} else
{var or__3824__auto____74047 = (cljs.core._compare["_"]);
if(or__3824__auto____74047)
{return or__3824__auto____74047;
} else
{throw cljs.core.missing_protocol.call(null,"IComparable.-compare",x);
}
}
})().call(null,x,y);
}
});
cljs.core.IChunk = {};
cljs.core._drop_first = (function _drop_first(coll){
if((function (){var and__3822__auto____74052 = coll;
if(and__3822__auto____74052)
{return coll.cljs$core$IChunk$_drop_first$arity$1;
} else
{return and__3822__auto____74052;
}
})())
{return coll.cljs$core$IChunk$_drop_first$arity$1(coll);
} else
{var x__5531__auto____74053 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____74054 = (cljs.core._drop_first[goog.typeOf(x__5531__auto____74053)]);
if(or__3824__auto____74054)
{return or__3824__auto____74054;
} else
{var or__3824__auto____74055 = (cljs.core._drop_first["_"]);
if(or__3824__auto____74055)
{return or__3824__auto____74055;
} else
{throw cljs.core.missing_protocol.call(null,"IChunk.-drop-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IChunkedSeq = {};
cljs.core._chunked_first = (function _chunked_first(coll){
if((function (){var and__3822__auto____74060 = coll;
if(and__3822__auto____74060)
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1;
} else
{return and__3822__auto____74060;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1(coll);
} else
{var x__5531__auto____74061 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____74062 = (cljs.core._chunked_first[goog.typeOf(x__5531__auto____74061)]);
if(or__3824__auto____74062)
{return or__3824__auto____74062;
} else
{var or__3824__auto____74063 = (cljs.core._chunked_first["_"]);
if(or__3824__auto____74063)
{return or__3824__auto____74063;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedSeq.-chunked-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._chunked_rest = (function _chunked_rest(coll){
if((function (){var and__3822__auto____74068 = coll;
if(and__3822__auto____74068)
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1;
} else
{return and__3822__auto____74068;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
} else
{var x__5531__auto____74069 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____74070 = (cljs.core._chunked_rest[goog.typeOf(x__5531__auto____74069)]);
if(or__3824__auto____74070)
{return or__3824__auto____74070;
} else
{var or__3824__auto____74071 = (cljs.core._chunked_rest["_"]);
if(or__3824__auto____74071)
{return or__3824__auto____74071;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedSeq.-chunked-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IChunkedNext = {};
cljs.core._chunked_next = (function _chunked_next(coll){
if((function (){var and__3822__auto____74076 = coll;
if(and__3822__auto____74076)
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1;
} else
{return and__3822__auto____74076;
}
})())
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
} else
{var x__5531__auto____74077 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____74078 = (cljs.core._chunked_next[goog.typeOf(x__5531__auto____74077)]);
if(or__3824__auto____74078)
{return or__3824__auto____74078;
} else
{var or__3824__auto____74079 = (cljs.core._chunked_next["_"]);
if(or__3824__auto____74079)
{return or__3824__auto____74079;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedNext.-chunked-next",coll);
}
}
})().call(null,coll);
}
});
/**
* Returns a seq on the collection. If the collection is
* empty, returns nil.  (seq nil) returns nil. seq also works on
* Strings.
*/
cljs.core.seq = (function seq(coll){
if((coll == null))
{return null;
} else
{if((function (){var G__74083__74084 = coll;
if(G__74083__74084)
{if((function (){var or__3824__auto____74085 = (G__74083__74084.cljs$lang$protocol_mask$partition0$ & 32);
if(or__3824__auto____74085)
{return or__3824__auto____74085;
} else
{return G__74083__74084.cljs$core$ASeq$;
}
})())
{return true;
} else
{if((!G__74083__74084.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__74083__74084);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__74083__74084);
}
})())
{return coll;
} else
{return cljs.core._seq.call(null,coll);
}
}
});
/**
* Returns the first item in the collection. Calls seq on its
* argument. If coll is nil, returns nil.
*/
cljs.core.first = (function first(coll){
if((coll == null))
{return null;
} else
{if((function (){var G__74090__74091 = coll;
if(G__74090__74091)
{if((function (){var or__3824__auto____74092 = (G__74090__74091.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____74092)
{return or__3824__auto____74092;
} else
{return G__74090__74091.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__74090__74091.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__74090__74091);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__74090__74091);
}
})())
{return cljs.core._first.call(null,coll);
} else
{var s__74093 = cljs.core.seq.call(null,coll);
if((s__74093 == null))
{return null;
} else
{return cljs.core._first.call(null,s__74093);
}
}
}
});
/**
* Returns a possibly empty seq of the items after the first. Calls seq on its
* argument.
*/
cljs.core.rest = (function rest(coll){
if(!((coll == null)))
{if((function (){var G__74098__74099 = coll;
if(G__74098__74099)
{if((function (){var or__3824__auto____74100 = (G__74098__74099.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____74100)
{return or__3824__auto____74100;
} else
{return G__74098__74099.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__74098__74099.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__74098__74099);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__74098__74099);
}
})())
{return cljs.core._rest.call(null,coll);
} else
{var s__74101 = cljs.core.seq.call(null,coll);
if(!((s__74101 == null)))
{return cljs.core._rest.call(null,s__74101);
} else
{return cljs.core.List.EMPTY;
}
}
} else
{return cljs.core.List.EMPTY;
}
});
/**
* Returns a seq of the items after the first. Calls seq on its
* argument.  If there are no more items, returns nil
*/
cljs.core.next = (function next(coll){
if((coll == null))
{return null;
} else
{if((function (){var G__74105__74106 = coll;
if(G__74105__74106)
{if((function (){var or__3824__auto____74107 = (G__74105__74106.cljs$lang$protocol_mask$partition0$ & 128);
if(or__3824__auto____74107)
{return or__3824__auto____74107;
} else
{return G__74105__74106.cljs$core$INext$;
}
})())
{return true;
} else
{if((!G__74105__74106.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.INext,G__74105__74106);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.INext,G__74105__74106);
}
})())
{return cljs.core._next.call(null,coll);
} else
{return cljs.core.seq.call(null,cljs.core.rest.call(null,coll));
}
}
});
/**
* Equality. Returns true if x equals y, false if not. Compares
* numbers and collections in a type-independent manner.  Clojure's immutable data
* structures define -equiv (and thus =) as a value, not an identity,
* comparison.
* @param {...*} var_args
*/
cljs.core._EQ_ = (function() {
var _EQ_ = null;
var _EQ___1 = (function (x){
return true;
});
var _EQ___2 = (function (x,y){
var or__3824__auto____74109 = (x === y);
if(or__3824__auto____74109)
{return or__3824__auto____74109;
} else
{return cljs.core._equiv.call(null,x,y);
}
});
var _EQ___3 = (function() { 
var G__74110__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ_.call(null,x,y)))
{if(cljs.core.next.call(null,more))
{{
var G__74111 = y;
var G__74112 = cljs.core.first.call(null,more);
var G__74113 = cljs.core.next.call(null,more);
x = G__74111;
y = G__74112;
more = G__74113;
continue;
}
} else
{return _EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__74110 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__74110__delegate.call(this, x, y, more);
};
G__74110.cljs$lang$maxFixedArity = 2;
G__74110.cljs$lang$applyTo = (function (arglist__74114){
var x = cljs.core.first(arglist__74114);
var y = cljs.core.first(cljs.core.next(arglist__74114));
var more = cljs.core.rest(cljs.core.next(arglist__74114));
return G__74110__delegate(x, y, more);
});
G__74110.cljs$lang$arity$variadic = G__74110__delegate;
return G__74110;
})()
;
_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _EQ___1.call(this,x);
case 2:
return _EQ___2.call(this,x,y);
default:
return _EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_EQ_.cljs$lang$maxFixedArity = 2;
_EQ_.cljs$lang$applyTo = _EQ___3.cljs$lang$applyTo;
_EQ_.cljs$lang$arity$1 = _EQ___1;
_EQ_.cljs$lang$arity$2 = _EQ___2;
_EQ_.cljs$lang$arity$variadic = _EQ___3.cljs$lang$arity$variadic;
return _EQ_;
})()
;
cljs.core.type = (function type(x){
if((x == null))
{return null;
} else
{return x.constructor;
}
});
cljs.core.instance_QMARK_ = (function instance_QMARK_(t,o){
return (o instanceof t);
});
(cljs.core.IHash["null"] = true);
(cljs.core._hash["null"] = (function (o){
return 0;
}));
(cljs.core.ILookup["null"] = true);
(cljs.core._lookup["null"] = (function() {
var G__74115 = null;
var G__74115__2 = (function (o,k){
return null;
});
var G__74115__3 = (function (o,k,not_found){
return not_found;
});
G__74115 = function(o,k,not_found){
switch(arguments.length){
case 2:
return G__74115__2.call(this,o,k);
case 3:
return G__74115__3.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__74115;
})()
);
(cljs.core.IAssociative["null"] = true);
(cljs.core._assoc["null"] = (function (_,k,v){
return cljs.core.hash_map.call(null,k,v);
}));
(cljs.core.INext["null"] = true);
(cljs.core._next["null"] = (function (_){
return null;
}));
(cljs.core.IPrintWithWriter["null"] = true);
(cljs.core._pr_writer["null"] = (function (o,writer,_){
return cljs.core._write.call(null,writer,"nil");
}));
(cljs.core.ICollection["null"] = true);
(cljs.core._conj["null"] = (function (_,o){
return cljs.core.list.call(null,o);
}));
(cljs.core.IReduce["null"] = true);
(cljs.core._reduce["null"] = (function() {
var G__74116 = null;
var G__74116__2 = (function (_,f){
return f.call(null);
});
var G__74116__3 = (function (_,f,start){
return start;
});
G__74116 = function(_,f,start){
switch(arguments.length){
case 2:
return G__74116__2.call(this,_,f);
case 3:
return G__74116__3.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__74116;
})()
);
(cljs.core.IPrintable["null"] = true);
(cljs.core._pr_seq["null"] = (function (o){
return cljs.core.list.call(null,"nil");
}));
(cljs.core.ISet["null"] = true);
(cljs.core._disjoin["null"] = (function (_,v){
return null;
}));
(cljs.core.ICounted["null"] = true);
(cljs.core._count["null"] = (function (_){
return 0;
}));
(cljs.core.IStack["null"] = true);
(cljs.core._peek["null"] = (function (_){
return null;
}));
(cljs.core._pop["null"] = (function (_){
return null;
}));
(cljs.core.ISeq["null"] = true);
(cljs.core._first["null"] = (function (_){
return null;
}));
(cljs.core._rest["null"] = (function (_){
return cljs.core.list.call(null);
}));
(cljs.core.IEquiv["null"] = true);
(cljs.core._equiv["null"] = (function (_,o){
return (o == null);
}));
(cljs.core.IWithMeta["null"] = true);
(cljs.core._with_meta["null"] = (function (_,meta){
return null;
}));
(cljs.core.IMeta["null"] = true);
(cljs.core._meta["null"] = (function (_){
return null;
}));
(cljs.core.IIndexed["null"] = true);
(cljs.core._nth["null"] = (function() {
var G__74117 = null;
var G__74117__2 = (function (_,n){
return null;
});
var G__74117__3 = (function (_,n,not_found){
return not_found;
});
G__74117 = function(_,n,not_found){
switch(arguments.length){
case 2:
return G__74117__2.call(this,_,n);
case 3:
return G__74117__3.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__74117;
})()
);
(cljs.core.IEmptyableCollection["null"] = true);
(cljs.core._empty["null"] = (function (_){
return null;
}));
(cljs.core.IMap["null"] = true);
(cljs.core._dissoc["null"] = (function (_,k){
return null;
}));
Date.prototype.cljs$core$IEquiv$ = true;
Date.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var and__3822__auto____74118 = cljs.core.instance_QMARK_.call(null,Date,other);
if(and__3822__auto____74118)
{return (o.toString() === other.toString());
} else
{return and__3822__auto____74118;
}
});
(cljs.core.IHash["number"] = true);
(cljs.core._hash["number"] = (function (o){
return o;
}));
(cljs.core.IEquiv["number"] = true);
(cljs.core._equiv["number"] = (function (x,o){
return (x === o);
}));
(cljs.core.IHash["boolean"] = true);
(cljs.core._hash["boolean"] = (function (o){
if((o === true))
{return 1;
} else
{return 0;
}
}));
(cljs.core.IHash["_"] = true);
(cljs.core._hash["_"] = (function (o){
return goog.getUid(o);
}));
/**
* Returns a number one greater than num.
*/
cljs.core.inc = (function inc(x){
return (x + 1);
});

goog.provide('cljs.core.Reduced');

/**
* @constructor
*/
cljs.core.Reduced = (function (val){
this.val = val;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32768;
})
cljs.core.Reduced.cljs$lang$type = true;
cljs.core.Reduced.cljs$lang$ctorPrSeq = (function (this__5466__auto__){
return cljs.core.list.call(null,"cljs.core/Reduced");
});
cljs.core.Reduced.cljs$lang$ctorPrWriter = (function (this__5466__auto__,writer__5467__auto__){
return cljs.core._write.call(null,writer__5467__auto__,"cljs.core/Reduced");
});
cljs.core.Reduced.prototype.cljs$core$IDeref$_deref$arity$1 = (function (o){
var this__74119 = this;
return this__74119.val;
});
cljs.core.Reduced;
/**
* Wraps x in a way such that a reduce will terminate with the value x
*/
cljs.core.reduced = (function reduced(x){
return (new cljs.core.Reduced(x));
});
/**
* Returns true if x is the result of a call to reduced
*/
cljs.core.reduced_QMARK_ = (function reduced_QMARK_(r){
return cljs.core.instance_QMARK_.call(null,cljs.core.Reduced,r);
});
/**
* Accepts any collection which satisfies the ICount and IIndexed protocols and
* reduces them without incurring seq initialization
*/
cljs.core.ci_reduce = (function() {
var ci_reduce = null;
var ci_reduce__2 = (function (cicoll,f){
var cnt__74132 = cljs.core._count.call(null,cicoll);
if((cnt__74132 === 0))
{return f.call(null);
} else
{var val__74133 = cljs.core._nth.call(null,cicoll,0);
var n__74134 = 1;
while(true){
if((n__74134 < cnt__74132))
{var nval__74135 = f.call(null,val__74133,cljs.core._nth.call(null,cicoll,n__74134));
if(cljs.core.reduced_QMARK_.call(null,nval__74135))
{return cljs.core.deref.call(null,nval__74135);
} else
{{
var G__74144 = nval__74135;
var G__74145 = (n__74134 + 1);
val__74133 = G__74144;
n__74134 = G__74145;
continue;
}
}
} else
{return val__74133;
}
break;
}
}
});
var ci_reduce__3 = (function (cicoll,f,val){
var cnt__74136 = cljs.core._count.call(null,cicoll);
var val__74137 = val;
var n__74138 = 0;
while(true){
if((n__74138 < cnt__74136))
{var nval__74139 = f.call(null,val__74137,cljs.core._nth.call(null,cicoll,n__74138));
if(cljs.core.reduced_QMARK_.call(null,nval__74139))
{return cljs.core.deref.call(null,nval__74139);
} else
{{
var G__74146 = nval__74139;
var G__74147 = (n__74138 + 1);
val__74137 = G__74146;
n__74138 = G__74147;
continue;
}
}
} else
{return val__74137;
}
break;
}
});
var ci_reduce__4 = (function (cicoll,f,val,idx){
var cnt__74140 = cljs.core._count.call(null,cicoll);
var val__74141 = val;
var n__74142 = idx;
while(true){
if((n__74142 < cnt__74140))
{var nval__74143 = f.call(null,val__74141,cljs.core._nth.call(null,cicoll,n__74142));
if(cljs.core.reduced_QMARK_.call(null,nval__74143))
{return cljs.core.deref.call(null,nval__74143);
} else
{{
var G__74148 = nval__74143;
var G__74149 = (n__74142 + 1);
val__74141 = G__74148;
n__74142 = G__74149;
continue;
}
}
} else
{return val__74141;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case 2:
return ci_reduce__2.call(this,cicoll,f);
case 3:
return ci_reduce__3.call(this,cicoll,f,val);
case 4:
return ci_reduce__4.call(this,cicoll,f,val,idx);
}
throw('Invalid arity: ' + arguments.length);
};
ci_reduce.cljs$lang$arity$2 = ci_reduce__2;
ci_reduce.cljs$lang$arity$3 = ci_reduce__3;
ci_reduce.cljs$lang$arity$4 = ci_reduce__4;
return ci_reduce;
})()
;
cljs.core.array_reduce = (function() {
var array_reduce = null;
var array_reduce__2 = (function (arr,f){
var cnt__74162 = arr.length;
if((arr.length === 0))
{return f.call(null);
} else
{var val__74163 = (arr[0]);
var n__74164 = 1;
while(true){
if((n__74164 < cnt__74162))
{var nval__74165 = f.call(null,val__74163,(arr[n__74164]));
if(cljs.core.reduced_QMARK_.call(null,nval__74165))
{return cljs.core.deref.call(null,nval__74165);
} else
{{
var G__74174 = nval__74165;
var G__74175 = (n__74164 + 1);
val__74163 = G__74174;
n__74164 = G__74175;
continue;
}
}
} else
{return val__74163;
}
break;
}
}
});
var array_reduce__3 = (function (arr,f,val){
var cnt__74166 = arr.length;
var val__74167 = val;
var n__74168 = 0;
while(true){
if((n__74168 < cnt__74166))
{var nval__74169 = f.call(null,val__74167,(arr[n__74168]));
if(cljs.core.reduced_QMARK_.call(null,nval__74169))
{return cljs.core.deref.call(null,nval__74169);
} else
{{
var G__74176 = nval__74169;
var G__74177 = (n__74168 + 1);
val__74167 = G__74176;
n__74168 = G__74177;
continue;
}
}
} else
{return val__74167;
}
break;
}
});
var array_reduce__4 = (function (arr,f,val,idx){
var cnt__74170 = arr.length;
var val__74171 = val;
var n__74172 = idx;
while(true){
if((n__74172 < cnt__74170))
{var nval__74173 = f.call(null,val__74171,(arr[n__74172]));
if(cljs.core.reduced_QMARK_.call(null,nval__74173))
{return cljs.core.deref.call(null,nval__74173);
} else
{{
var G__74178 = nval__74173;
var G__74179 = (n__74172 + 1);
val__74171 = G__74178;
n__74172 = G__74179;
continue;
}
}
} else
{return val__74171;
}
break;
}
});
array_reduce = function(arr,f,val,idx){
switch(arguments.length){
case 2:
return array_reduce__2.call(this,arr,f);
case 3:
return array_reduce__3.call(this,arr,f,val);
case 4:
return array_reduce__4.call(this,arr,f,val,idx);
}
throw('Invalid arity: ' + arguments.length);
};
array_reduce.cljs$lang$arity$2 = array_reduce__2;
array_reduce.cljs$lang$arity$3 = array_reduce__3;
array_reduce.cljs$lang$arity$4 = array_reduce__4;
return array_reduce;
})()
;
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var G__74183__74184 = x;
if(G__74183__74184)
{if((function (){var or__3824__auto____74185 = (G__74183__74184.cljs$lang$protocol_mask$partition0$ & 2);
if(or__3824__auto____74185)
{return or__3824__auto____74185;
} else
{return G__74183__74184.cljs$core$ICounted$;
}
})())
{return true;
} else
{if((!G__74183__74184.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,G__74183__74184);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,G__74183__74184);
}
});
/**
* Returns true if coll implements nth in constant time
*/
cljs.core.indexed_QMARK_ = (function indexed_QMARK_(x){
var G__74189__74190 = x;
if(G__74189__74190)
{if((function (){var or__3824__auto____74191 = (G__74189__74190.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____74191)
{return or__3824__auto____74191;
} else
{return G__74189__74190.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__74189__74190.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__74189__74190);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__74189__74190);
}
});

goog.provide('cljs.core.IndexedSeq');

/**
* @constructor
*/
cljs.core.IndexedSeq = (function (a,i){
this.a = a;
this.i = i;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 166199550;
})
cljs.core.IndexedSeq.cljs$lang$type = true;
cljs.core.IndexedSeq.cljs$lang$ctorPrSeq = (function (this__5466__auto__){
return cljs.core.list.call(null,"cljs.core/IndexedSeq");
});
cljs.core.IndexedSeq.cljs$lang$ctorPrWriter = (function (this__5466__auto__,writer__5467__auto__){
return cljs.core._write.call(null,writer__5467__auto__,"cljs.core/IndexedSeq");
});
cljs.core.IndexedSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__74192 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (_){
var this__74193 = this;
if(((this__74193.i + 1) < this__74193.a.length))
{return (new cljs.core.IndexedSeq(this__74193.a,(this__74193.i + 1)));
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__74194 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__74195 = this;
var c__74196 = coll.cljs$core$ICounted$_count$arity$1(coll);
if((c__74196 > 0))
{return (new cljs.core.RSeq(coll,(c__74196 - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.IndexedSeq.prototype.toString = (function (){
var this__74197 = this;
var this__74198 = this;
return cljs.core.pr_str.call(null,this__74198);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__74199 = this;
if(cljs.core.counted_QMARK_.call(null,this__74199.a))
{return cljs.core.ci_reduce.call(null,this__74199.a,f,(this__74199.a[this__74199.i]),(this__74199.i + 1));
} else
{return cljs.core.ci_reduce.call(null,coll,f,(this__74199.a[this__74199.i]),0);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__74200 = this;
if(cljs.core.counted_QMARK_.call(null,this__74200.a))
{return cljs.core.ci_reduce.call(null,this__74200.a,f,start,this__74200.i);
} else
{return cljs.core.ci_reduce.call(null,coll,f,start,0);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__74201 = this;
return this$;
});
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__74202 = this;
return (this__74202.a.length - this__74202.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){
var this__74203 = this;
return (this__74203.a[this__74203.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (_){
var this__74204 = this;
if(((this__74204.i + 1) < this__74204.a.length))
{return (new cljs.core.IndexedSeq(this__74204.a,(this__74204.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__74205 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__74206 = this;
var i__74207 = (n + this__74206.i);
if((i__74207 < this__74206.a.length))
{return (this__74206.a[i__74207]);
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__74208 = this;
var i__74209 = (n + this__74208.i);
if((i__74209 < this__74208.a.length))
{return (this__74208.a[i__74209]);
} else
{return not_found;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__74210 = this;
return cljs.core.List.EMPTY;
});
cljs.core.IndexedSeq;
cljs.core.prim_seq = (function() {
var prim_seq = null;
var prim_seq__1 = (function (prim){
return prim_seq.call(null,prim,0);
});
var prim_seq__2 = (function (prim,i){
if((prim.length === 0))
{return null;
} else
{return (new cljs.core.IndexedSeq(prim,i));
}
});
prim_seq = function(prim,i){
switch(arguments.length){
case 1:
return prim_seq__1.call(this,prim);
case 2:
return prim_seq__2.call(this,prim,i);
}
throw('Invalid arity: ' + arguments.length);
};
prim_seq.cljs$lang$arity$1 = prim_seq__1;
prim_seq.cljs$lang$arity$2 = prim_seq__2;
return prim_seq;
})()
;
cljs.core.array_seq = (function() {
var array_seq = null;
var array_seq__1 = (function (array){
return cljs.core.prim_seq.call(null,array,0);
});
var array_seq__2 = (function (array,i){
return cljs.core.prim_seq.call(null,array,i);
});
array_seq = function(array,i){
switch(arguments.length){
case 1:
return array_seq__1.call(this,array);
case 2:
return array_seq__2.call(this,array,i);
}
throw('Invalid arity: ' + arguments.length);
};
array_seq.cljs$lang$arity$1 = array_seq__1;
array_seq.cljs$lang$arity$2 = array_seq__2;
return array_seq;
})()
;
(cljs.core.IReduce["array"] = true);
(cljs.core._reduce["array"] = (function() {
var G__74211 = null;
var G__74211__2 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__74211__3 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__74211 = function(array,f,start){
switch(arguments.length){
case 2:
return G__74211__2.call(this,array,f);
case 3:
return G__74211__3.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__74211;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__74212 = null;
var G__74212__2 = (function (array,k){
return (array[k]);
});
var G__74212__3 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__74212 = function(array,k,not_found){
switch(arguments.length){
case 2:
return G__74212__2.call(this,array,k);
case 3:
return G__74212__3.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__74212;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__74213 = null;
var G__74213__2 = (function (array,n){
if((n < array.length))
{return (array[n]);
} else
{return null;
}
});
var G__74213__3 = (function (array,n,not_found){
if((n < array.length))
{return (array[n]);
} else
{return not_found;
}
});
G__74213 = function(array,n,not_found){
switch(arguments.length){
case 2:
return G__74213__2.call(this,array,n);
case 3:
return G__74213__3.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__74213;
})()
);
(cljs.core.ICounted["array"] = true);
(cljs.core._count["array"] = (function (a){
return a.length;
}));
(cljs.core.ISeqable["array"] = true);
(cljs.core._seq["array"] = (function (array){
return cljs.core.array_seq.call(null,array,0);
}));

goog.provide('cljs.core.RSeq');

/**
* @constructor
*/
cljs.core.RSeq = (function (ci,i,meta){
this.ci = ci;
this.i = i;
this.meta = meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850574;
})
cljs.core.RSeq.cljs$lang$type = true;
cljs.core.RSeq.cljs$lang$ctorPrSeq = (function (this__5466__auto__){
return cljs.core.list.call(null,"cljs.core/RSeq");
});
cljs.core.RSeq.cljs$lang$ctorPrWriter = (function (this__5466__auto__,writer__5467__auto__){
return cljs.core._write.call(null,writer__5467__auto__,"cljs.core/RSeq");
});
cljs.core.RSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__74214 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.RSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__74215 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.RSeq.prototype.toString = (function (){
var this__74216 = this;
var this__74217 = this;
return cljs.core.pr_str.call(null,this__74217);
});
cljs.core.RSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__74218 = this;
return coll;
});
cljs.core.RSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__74219 = this;
return (this__74219.i + 1);
});
cljs.core.RSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__74220 = this;
return cljs.core._nth.call(null,this__74220.ci,this__74220.i);
});
cljs.core.RSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__74221 = this;
if((this__74221.i > 0))
{return (new cljs.core.RSeq(this__74221.ci,(this__74221.i - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.RSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__74222 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.RSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,new_meta){
var this__74223 = this;
return (new cljs.core.RSeq(this__74223.ci,this__74223.i,new_meta));
});
cljs.core.RSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__74224 = this;
return this__74224.meta;
});
cljs.core.RSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__74225 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__74225.meta);
});
cljs.core.RSeq;
/**
* Same as (first (next x))
*/
cljs.core.second = (function second(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (first (first x))
*/
cljs.core.ffirst = (function ffirst(coll){
return cljs.core.first.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (next (first x))
*/
cljs.core.nfirst = (function nfirst(coll){
return cljs.core.next.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (first (next x))
*/
cljs.core.fnext = (function fnext(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (next (next x))
*/
cljs.core.nnext = (function nnext(coll){
return cljs.core.next.call(null,cljs.core.next.call(null,coll));
});
/**
* Return the last item in coll, in linear time
*/
cljs.core.last = (function last(s){
while(true){
var sn__74227 = cljs.core.next.call(null,s);
if(!((sn__74227 == null)))
{{
var G__74228 = sn__74227;
s = G__74228;
continue;
}
} else
{return cljs.core.first.call(null,s);
}
break;
}
});
(cljs.core.IEquiv["_"] = true);
(cljs.core._equiv["_"] = (function (x,o){
return (x === o);
}));
/**
* conj[oin]. Returns a new collection with the xs
* 'added'. (conj nil item) returns (item).  The 'addition' may
* happen at different 'places' depending on the concrete type.
* @param {...*} var_args
*/
cljs.core.conj = (function() {
var conj = null;
var conj__2 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__3 = (function() { 
var G__74229__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__74230 = conj.call(null,coll,x);
var G__74231 = cljs.core.first.call(null,xs);
var G__74232 = cljs.core.next.call(null,xs);
coll = G__74230;
x = G__74231;
xs = G__74232;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__74229 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__74229__delegate.call(this, coll, x, xs);
};
G__74229.cljs$lang$maxFixedArity = 2;
G__74229.cljs$lang$applyTo = (function (arglist__74233){
var coll = cljs.core.first(arglist__74233);
var x = cljs.core.first(cljs.core.next(arglist__74233));
var xs = cljs.core.rest(cljs.core.next(arglist__74233));
return G__74229__delegate(coll, x, xs);
});
G__74229.cljs$lang$arity$variadic = G__74229__delegate;
return G__74229;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case 2:
return conj__2.call(this,coll,x);
default:
return conj__3.cljs$lang$arity$variadic(coll,x, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__3.cljs$lang$applyTo;
conj.cljs$lang$arity$2 = conj__2;
conj.cljs$lang$arity$variadic = conj__3.cljs$lang$arity$variadic;
return conj;
})()
;
/**
* Returns an empty collection of the same category as coll, or nil
*/
cljs.core.empty = (function empty(coll){
return cljs.core._empty.call(null,coll);
});
cljs.core.accumulating_seq_count = (function accumulating_seq_count(coll){
var s__74236 = cljs.core.seq.call(null,coll);
var acc__74237 = 0;
while(true){
if(cljs.core.counted_QMARK_.call(null,s__74236))
{return (acc__74237 + cljs.core._count.call(null,s__74236));
} else
{{
var G__74238 = cljs.core.next.call(null,s__74236);
var G__74239 = (acc__74237 + 1);
s__74236 = G__74238;
acc__74237 = G__74239;
continue;
}
}
break;
}
});
/**
* Returns the number of items in the collection. (count nil) returns
* 0.  Also works on strings, arrays, and Maps
*/
cljs.core.count = (function count(coll){
if(cljs.core.counted_QMARK_.call(null,coll))
{return cljs.core._count.call(null,coll);
} else
{return cljs.core.accumulating_seq_count.call(null,coll);
}
});
cljs.core.linear_traversal_nth = (function() {
var linear_traversal_nth = null;
var linear_traversal_nth__2 = (function (coll,n){
while(true){
if((coll == null))
{throw (new Error("Index out of bounds"));
} else
{if((n === 0))
{if(cljs.core.seq.call(null,coll))
{return cljs.core.first.call(null,coll);
} else
{throw (new Error("Index out of bounds"));
}
} else
{if(cljs.core.indexed_QMARK_.call(null,coll))
{return cljs.core._nth.call(null,coll,n);
} else
{if(cljs.core.seq.call(null,coll))
{{
var G__74240 = cljs.core.next.call(null,coll);
var G__74241 = (n - 1);
coll = G__74240;
n = G__74241;
continue;
}
} else
{if("\uFDD0'else")
{throw (new Error("Index out of bounds"));
} else
{return null;
}
}
}
}
}
break;
}
});
var linear_traversal_nth__3 = (function (coll,n,not_found){
while(true){
if((coll == null))
{return not_found;
} else
{if((n === 0))
{if(cljs.core.seq.call(null,coll))
{return cljs.core.first.call(null,coll);
} else
{return not_found;
}
} else
{if(cljs.core.indexed_QMARK_.call(null,coll))
{return cljs.core._nth.call(null,coll,n,not_found);
} else
{if(cljs.core.seq.call(null,coll))
{{
var G__74242 = cljs.core.next.call(null,coll);
var G__74243 = (n - 1);
var G__74244 = not_found;
coll = G__74242;
n = G__74243;
not_found = G__74244;
continue;
}
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
}
}
break;
}
});
linear_traversal_nth = function(coll,n,not_found){
switch(arguments.length){
case 2:
return linear_traversal_nth__2.call(this,coll,n);
case 3:
return linear_traversal_nth__3.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
linear_traversal_nth.cljs$lang$arity$2 = linear_traversal_nth__2;
linear_traversal_nth.cljs$lang$arity$3 = linear_traversal_nth__3;
return linear_traversal_nth;
})()
;
/**
* Returns the value at the index. get returns nil if index out of
* bounds, nth throws an exception unless not-found is supplied.  nth
* also works for strings, arrays, regex Matchers and Lists, and,
* in O(n) time, for sequences.
*/
cljs.core.nth = (function() {
var nth = null;
var nth__2 = (function (coll,n){
if((coll == null))
{return null;
} else
{if((function (){var G__74251__74252 = coll;
if(G__74251__74252)
{if((function (){var or__3824__auto____74253 = (G__74251__74252.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____74253)
{return or__3824__auto____74253;
} else
{return G__74251__74252.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__74251__74252.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__74251__74252);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__74251__74252);
}
})())
{return cljs.core._nth.call(null,coll,Math.floor(n));
} else
{return cljs.core.linear_traversal_nth.call(null,coll,Math.floor(n));
}
}
});
var nth__3 = (function (coll,n,not_found){
if(!((coll == null)))
{if((function (){var G__74254__74255 = coll;
if(G__74254__74255)
{if((function (){var or__3824__auto____74256 = (G__74254__74255.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____74256)
{return or__3824__auto____74256;
} else
{return G__74254__74255.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__74254__74255.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__74254__74255);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__74254__74255);
}
})())
{return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
} else
{return cljs.core.linear_traversal_nth.call(null,coll,Math.floor(n),not_found);
}
} else
{return not_found;
}
});
nth = function(coll,n,not_found){
switch(arguments.length){
case 2:
return nth__2.call(this,coll,n);
case 3:
return nth__3.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
nth.cljs$lang$arity$2 = nth__2;
nth.cljs$lang$arity$3 = nth__3;
return nth;
})()
;
/**
* Returns the value mapped to key, not-found or nil if key not present.
*/
cljs.core.get = (function() {
var get = null;
var get__2 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__3 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case 2:
return get__2.call(this,o,k);
case 3:
return get__3.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
get.cljs$lang$arity$2 = get__2;
get.cljs$lang$arity$3 = get__3;
return get;
})()
;
/**
* assoc[iate]. When applied to a map, returns a new map of the
* same (hashed/sorted) type, that contains the mapping of key(s) to
* val(s). When applied to a vector, returns a new vector that
* contains val at index.
* @param {...*} var_args
*/
cljs.core.assoc = (function() {
var assoc = null;
var assoc__3 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__4 = (function() { 
var G__74259__delegate = function (coll,k,v,kvs){
while(true){
var ret__74258 = assoc.call(null,coll,k,v);
if(cljs.core.truth_(kvs))
{{
var G__74260 = ret__74258;
var G__74261 = cljs.core.first.call(null,kvs);
var G__74262 = cljs.core.second.call(null,kvs);
var G__74263 = cljs.core.nnext.call(null,kvs);
coll = G__74260;
k = G__74261;
v = G__74262;
kvs = G__74263;
continue;
}
} else
{return ret__74258;
}
break;
}
};
var G__74259 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__74259__delegate.call(this, coll, k, v, kvs);
};
G__74259.cljs$lang$maxFixedArity = 3;
G__74259.cljs$lang$applyTo = (function (arglist__74264){
var coll = cljs.core.first(arglist__74264);
var k = cljs.core.first(cljs.core.next(arglist__74264));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__74264)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__74264)));
return G__74259__delegate(coll, k, v, kvs);
});
G__74259.cljs$lang$arity$variadic = G__74259__delegate;
return G__74259;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case 3:
return assoc__3.call(this,coll,k,v);
default:
return assoc__4.cljs$lang$arity$variadic(coll,k,v, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__4.cljs$lang$applyTo;
assoc.cljs$lang$arity$3 = assoc__3;
assoc.cljs$lang$arity$variadic = assoc__4.cljs$lang$arity$variadic;
return assoc;
})()
;
/**
* dissoc[iate]. Returns a new map of the same (hashed/sorted) type,
* that does not contain a mapping for key(s).
* @param {...*} var_args
*/
cljs.core.dissoc = (function() {
var dissoc = null;
var dissoc__1 = (function (coll){
return coll;
});
var dissoc__2 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__3 = (function() { 
var G__74267__delegate = function (coll,k,ks){
while(true){
var ret__74266 = dissoc.call(null,coll,k);
if(cljs.core.truth_(ks))
{{
var G__74268 = ret__74266;
var G__74269 = cljs.core.first.call(null,ks);
var G__74270 = cljs.core.next.call(null,ks);
coll = G__74268;
k = G__74269;
ks = G__74270;
continue;
}
} else
{return ret__74266;
}
break;
}
};
var G__74267 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__74267__delegate.call(this, coll, k, ks);
};
G__74267.cljs$lang$maxFixedArity = 2;
G__74267.cljs$lang$applyTo = (function (arglist__74271){
var coll = cljs.core.first(arglist__74271);
var k = cljs.core.first(cljs.core.next(arglist__74271));
var ks = cljs.core.rest(cljs.core.next(arglist__74271));
return G__74267__delegate(coll, k, ks);
});
G__74267.cljs$lang$arity$variadic = G__74267__delegate;
return G__74267;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case 1:
return dissoc__1.call(this,coll);
case 2:
return dissoc__2.call(this,coll,k);
default:
return dissoc__3.cljs$lang$arity$variadic(coll,k, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__3.cljs$lang$applyTo;
dissoc.cljs$lang$arity$1 = dissoc__1;
dissoc.cljs$lang$arity$2 = dissoc__2;
dissoc.cljs$lang$arity$variadic = dissoc__3.cljs$lang$arity$variadic;
return dissoc;
})()
;
/**
* Returns an object of the same type and value as obj, with
* map m as its metadata.
*/
cljs.core.with_meta = (function with_meta(o,meta){
return cljs.core._with_meta.call(null,o,meta);
});
/**
* Returns the metadata of obj, returns nil if there is no metadata.
*/
cljs.core.meta = (function meta(o){
if((function (){var G__74275__74276 = o;
if(G__74275__74276)
{if((function (){var or__3824__auto____74277 = (G__74275__74276.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3824__auto____74277)
{return or__3824__auto____74277;
} else
{return G__74275__74276.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__74275__74276.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__74275__74276);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__74275__74276);
}
})())
{return cljs.core._meta.call(null,o);
} else
{return null;
}
});
/**
* For a list or queue, same as first, for a vector, same as, but much
* more efficient than, last. If the collection is empty, returns nil.
*/
cljs.core.peek = (function peek(coll){
return cljs.core._peek.call(null,coll);
});
/**
* For a list or queue, returns a new list/queue without the first
* item, for a vector, returns a new vector without the last item.
* Note - not the same as next/butlast.
*/
cljs.core.pop = (function pop(coll){
return cljs.core._pop.call(null,coll);
});
/**
* disj[oin]. Returns a new set of the same (hashed/sorted) type, that
* does not contain key(s).
* @param {...*} var_args
*/
cljs.core.disj = (function() {
var disj = null;
var disj__1 = (function (coll){
return coll;
});
var disj__2 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__3 = (function() { 
var G__74280__delegate = function (coll,k,ks){
while(true){
var ret__74279 = disj.call(null,coll,k);
if(cljs.core.truth_(ks))
{{
var G__74281 = ret__74279;
var G__74282 = cljs.core.first.call(null,ks);
var G__74283 = cljs.core.next.call(null,ks);
coll = G__74281;
k = G__74282;
ks = G__74283;
continue;
}
} else
{return ret__74279;
}
break;
}
};
var G__74280 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__74280__delegate.call(this, coll, k, ks);
};
G__74280.cljs$lang$maxFixedArity = 2;
G__74280.cljs$lang$applyTo = (function (arglist__74284){
var coll = cljs.core.first(arglist__74284);
var k = cljs.core.first(cljs.core.next(arglist__74284));
var ks = cljs.core.rest(cljs.core.next(arglist__74284));
return G__74280__delegate(coll, k, ks);
});
G__74280.cljs$lang$arity$variadic = G__74280__delegate;
return G__74280;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case 1:
return disj__1.call(this,coll);
case 2:
return disj__2.call(this,coll,k);
default:
return disj__3.cljs$lang$arity$variadic(coll,k, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__3.cljs$lang$applyTo;
disj.cljs$lang$arity$1 = disj__1;
disj.cljs$lang$arity$2 = disj__2;
disj.cljs$lang$arity$variadic = disj__3.cljs$lang$arity$variadic;
return disj;
})()
;
cljs.core.string_hash_cache = {};
cljs.core.string_hash_cache_count = 0;
cljs.core.add_to_string_hash_cache = (function add_to_string_hash_cache(k){
var h__74286 = goog.string.hashCode(k);
(cljs.core.string_hash_cache[k] = h__74286);
cljs.core.string_hash_cache_count = (cljs.core.string_hash_cache_count + 1);
return h__74286;
});
cljs.core.check_string_hash_cache = (function check_string_hash_cache(k){
if((cljs.core.string_hash_cache_count > 255))
{cljs.core.string_hash_cache = {};
cljs.core.string_hash_cache_count = 0;
} else
{}
var h__74288 = (cljs.core.string_hash_cache[k]);
if(!((h__74288 == null)))
{return h__74288;
} else
{return cljs.core.add_to_string_hash_cache.call(null,k);
}
});
cljs.core.hash = (function() {
var hash = null;
var hash__1 = (function (o){
return hash.call(null,o,true);
});
var hash__2 = (function (o,check_cache){
if((function (){var and__3822__auto____74290 = goog.isString(o);
if(and__3822__auto____74290)
{return check_cache;
} else
{return and__3822__auto____74290;
}
})())
{return cljs.core.check_string_hash_cache.call(null,o);
} else
{return cljs.core._hash.call(null,o);
}
});
hash = function(o,check_cache){
switch(arguments.length){
case 1:
return hash__1.call(this,o);
case 2:
return hash__2.call(this,o,check_cache);
}
throw('Invalid arity: ' + arguments.length);
};
hash.cljs$lang$arity$1 = hash__1;
hash.cljs$lang$arity$2 = hash__2;
return hash;
})()
;
/**
* Returns true if coll has no items - same as (not (seq coll)).
* Please use the idiom (seq x) rather than (not (empty? x))
*/
cljs.core.empty_QMARK_ = (function empty_QMARK_(coll){
return cljs.core.not.call(null,cljs.core.seq.call(null,coll));
});
/**
* Returns true if x satisfies ICollection
*/
cljs.core.coll_QMARK_ = (function coll_QMARK_(x){
if((x == null))
{return false;
} else
{var G__74294__74295 = x;
if(G__74294__74295)
{if((function (){var or__3824__auto____74296 = (G__74294__74295.cljs$lang$protocol_mask$partition0$ & 8);
if(or__3824__auto____74296)
{return or__3824__auto____74296;
} else
{return G__74294__74295.cljs$core$ICollection$;
}
})())
{return true;
} else
{if((!G__74294__74295.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,G__74294__74295);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,G__74294__74295);
}
}
});
/**
* Returns true if x satisfies ISet
*/
cljs.core.set_QMARK_ = (function set_QMARK_(x){
if((x == null))
{return false;
} else
{var G__74300__74301 = x;
if(G__74300__74301)
{if((function (){var or__3824__auto____74302 = (G__74300__74301.cljs$lang$protocol_mask$partition0$ & 4096);
if(or__3824__auto____74302)
{return or__3824__auto____74302;
} else
{return G__74300__74301.cljs$core$ISet$;
}
})())
{return true;
} else
{if((!G__74300__74301.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,G__74300__74301);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,G__74300__74301);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var G__74306__74307 = x;
if(G__74306__74307)
{if((function (){var or__3824__auto____74308 = (G__74306__74307.cljs$lang$protocol_mask$partition0$ & 512);
if(or__3824__auto____74308)
{return or__3824__auto____74308;
} else
{return G__74306__74307.cljs$core$IAssociative$;
}
})())
{return true;
} else
{if((!G__74306__74307.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,G__74306__74307);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,G__74306__74307);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var G__74312__74313 = x;
if(G__74312__74313)
{if((function (){var or__3824__auto____74314 = (G__74312__74313.cljs$lang$protocol_mask$partition0$ & 16777216);
if(or__3824__auto____74314)
{return or__3824__auto____74314;
} else
{return G__74312__74313.cljs$core$ISequential$;
}
})())
{return true;
} else
{if((!G__74312__74313.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,G__74312__74313);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,G__74312__74313);
}
});
/**
* Returns true if coll satisfies IReduce
*/
cljs.core.reduceable_QMARK_ = (function reduceable_QMARK_(x){
var G__74318__74319 = x;
if(G__74318__74319)
{if((function (){var or__3824__auto____74320 = (G__74318__74319.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____74320)
{return or__3824__auto____74320;
} else
{return G__74318__74319.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__74318__74319.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__74318__74319);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__74318__74319);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if((x == null))
{return false;
} else
{var G__74324__74325 = x;
if(G__74324__74325)
{if((function (){var or__3824__auto____74326 = (G__74324__74325.cljs$lang$protocol_mask$partition0$ & 1024);
if(or__3824__auto____74326)
{return or__3824__auto____74326;
} else
{return G__74324__74325.cljs$core$IMap$;
}
})())
{return true;
} else
{if((!G__74324__74325.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,G__74324__74325);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,G__74324__74325);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var G__74330__74331 = x;
if(G__74330__74331)
{if((function (){var or__3824__auto____74332 = (G__74330__74331.cljs$lang$protocol_mask$partition0$ & 16384);
if(or__3824__auto____74332)
{return or__3824__auto____74332;
} else
{return G__74330__74331.cljs$core$IVector$;
}
})())
{return true;
} else
{if((!G__74330__74331.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,G__74330__74331);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,G__74330__74331);
}
});
cljs.core.chunked_seq_QMARK_ = (function chunked_seq_QMARK_(x){
var G__74336__74337 = x;
if(G__74336__74337)
{if((function (){var or__3824__auto____74338 = (G__74336__74337.cljs$lang$protocol_mask$partition1$ & 512);
if(or__3824__auto____74338)
{return or__3824__auto____74338;
} else
{return G__74336__74337.cljs$core$IChunkedSeq$;
}
})())
{return true;
} else
{if((!G__74336__74337.cljs$lang$protocol_mask$partition1$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedSeq,G__74336__74337);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedSeq,G__74336__74337);
}
});
/**
* @param {...*} var_args
*/
cljs.core.js_obj = (function() {
var js_obj = null;
var js_obj__0 = (function (){
return {};
});
var js_obj__1 = (function() { 
var G__74339__delegate = function (keyvals){
return cljs.core.apply.call(null,goog.object.create,keyvals);
};
var G__74339 = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__74339__delegate.call(this, keyvals);
};
G__74339.cljs$lang$maxFixedArity = 0;
G__74339.cljs$lang$applyTo = (function (arglist__74340){
var keyvals = cljs.core.seq(arglist__74340);;
return G__74339__delegate(keyvals);
});
G__74339.cljs$lang$arity$variadic = G__74339__delegate;
return G__74339;
})()
;
js_obj = function(var_args){
var keyvals = var_args;
switch(arguments.length){
case 0:
return js_obj__0.call(this);
default:
return js_obj__1.cljs$lang$arity$variadic(cljs.core.array_seq(arguments, 0));
}
throw('Invalid arity: ' + arguments.length);
};
js_obj.cljs$lang$maxFixedArity = 0;
js_obj.cljs$lang$applyTo = js_obj__1.cljs$lang$applyTo;
js_obj.cljs$lang$arity$0 = js_obj__0;
js_obj.cljs$lang$arity$variadic = js_obj__1.cljs$lang$arity$variadic;
return js_obj;
})()
;
cljs.core.js_keys = (function js_keys(obj){
var keys__74342 = [];
goog.object.forEach(obj,(function (val,key,obj){
return keys__74342.push(key);
}));
return keys__74342;
});
cljs.core.js_delete = (function js_delete(obj,key){
return delete obj[key];
});
cljs.core.array_copy = (function array_copy(from,i,to,j,len){
var i__74346 = i;
var j__74347 = j;
var len__74348 = len;
while(true){
if((len__74348 === 0))
{return to;
} else
{(to[j__74347] = (from[i__74346]));
{
var G__74349 = (i__74346 + 1);
var G__74350 = (j__74347 + 1);
var G__74351 = (len__74348 - 1);
i__74346 = G__74349;
j__74347 = G__74350;
len__74348 = G__74351;
continue;
}
}
break;
}
});
cljs.core.array_copy_downward = (function array_copy_downward(from,i,to,j,len){
var i__74355 = (i + (len - 1));
var j__74356 = (j + (len - 1));
var len__74357 = len;
while(true){
if((len__74357 === 0))
{return to;
} else
{(to[j__74356] = (from[i__74355]));
{
var G__74358 = (i__74355 - 1);
var G__74359 = (j__74356 - 1);
var G__74360 = (len__74357 - 1);
i__74355 = G__74358;
j__74356 = G__74359;
len__74357 = G__74360;
continue;
}
}
break;
}
});
cljs.core.lookup_sentinel = {};
/**
* Returns true if x is the value false, false otherwise.
*/
cljs.core.false_QMARK_ = (function false_QMARK_(x){
return x === false;
});
/**
* Returns true if x is the value true, false otherwise.
*/
cljs.core.true_QMARK_ = (function true_QMARK_(x){
return x === true;
});
cljs.core.undefined_QMARK_ = (function undefined_QMARK_(x){
return (void 0 === x);
});
/**
* Return true if s satisfies ISeq
*/
cljs.core.seq_QMARK_ = (function seq_QMARK_(s){
if((s == null))
{return false;
} else
{var G__74364__74365 = s;
if(G__74364__74365)
{if((function (){var or__3824__auto____74366 = (G__74364__74365.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____74366)
{return or__3824__auto____74366;
} else
{return G__74364__74365.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__74364__74365.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__74364__74365);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__74364__74365);
}
}
});
/**
* Return true if s satisfies ISeqable
*/
cljs.core.seqable_QMARK_ = (function seqable_QMARK_(s){
var G__74370__74371 = s;
if(G__74370__74371)
{if((function (){var or__3824__auto____74372 = (G__74370__74371.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3824__auto____74372)
{return or__3824__auto____74372;
} else
{return G__74370__74371.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__74370__74371.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__74370__74371);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__74370__74371);
}
});
cljs.core.boolean$ = (function boolean$(x){
if(cljs.core.truth_(x))
{return true;
} else
{return false;
}
});
cljs.core.string_QMARK_ = (function string_QMARK_(x){
var and__3822__auto____74375 = goog.isString(x);
if(and__3822__auto____74375)
{return !((function (){var or__3824__auto____74376 = (x.charAt(0) === "\uFDD0");
if(or__3824__auto____74376)
{return or__3824__auto____74376;
} else
{return (x.charAt(0) === "\uFDD1");
}
})());
} else
{return and__3822__auto____74375;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3822__auto____74378 = goog.isString(x);
if(and__3822__auto____74378)
{return (x.charAt(0) === "\uFDD0");
} else
{return and__3822__auto____74378;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3822__auto____74380 = goog.isString(x);
if(and__3822__auto____74380)
{return (x.charAt(0) === "\uFDD1");
} else
{return and__3822__auto____74380;
}
});
cljs.core.number_QMARK_ = (function number_QMARK_(n){
return goog.isNumber(n);
});
cljs.core.fn_QMARK_ = (function fn_QMARK_(f){
return goog.isFunction(f);
});
cljs.core.ifn_QMARK_ = (function ifn_QMARK_(f){
var or__3824__auto____74385 = cljs.core.fn_QMARK_.call(null,f);
if(or__3824__auto____74385)
{return or__3824__auto____74385;
} else
{var G__74386__74387 = f;
if(G__74386__74387)
{if((function (){var or__3824__auto____74388 = (G__74386__74387.cljs$lang$protocol_mask$partition0$ & 1);
if(or__3824__auto____74388)
{return or__3824__auto____74388;
} else
{return G__74386__74387.cljs$core$IFn$;
}
})())
{return true;
} else
{if((!G__74386__74387.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IFn,G__74386__74387);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IFn,G__74386__74387);
}
}
});
/**
* Returns true if n is an integer.
*/
cljs.core.integer_QMARK_ = (function integer_QMARK_(n){
var and__3822__auto____74392 = cljs.core.number_QMARK_.call(null,n);
if(and__3822__auto____74392)
{var and__3822__auto____74393 = !(isNaN(n));
if(and__3822__auto____74393)
{var and__3822__auto____74394 = !((n === Infinity));
if(and__3822__auto____74394)
{return (parseFloat(n) === parseInt(n,10));
} else
{return and__3822__auto____74394;
}
} else
{return and__3822__auto____74393;
}
} else
{return and__3822__auto____74392;
}
});
/**
* Returns true if key is present in the given collection, otherwise
* returns false.  Note that for numerically indexed collections like
* vectors and arrays, this tests if the numeric key is within the
* range of indexes. 'contains?' operates constant or logarithmic time;
* it will not perform a linear search for a value.  See also 'some'.
*/
cljs.core.contains_QMARK_ = (function contains_QMARK_(coll,v){
if((cljs.core._lookup.call(null,coll,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return false;
} else
{return true;
}
});
/**
* Returns the map entry for key, or nil if key not present.
*/
cljs.core.find = (function find(coll,k){
if((function (){var and__3822__auto____74397 = !((coll == null));
if(and__3822__auto____74397)
{var and__3822__auto____74398 = cljs.core.associative_QMARK_.call(null,coll);
if(and__3822__auto____74398)
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3822__auto____74398;
}
} else
{return and__3822__auto____74397;
}
})())
{return cljs.core.PersistentVector.fromArray([k,cljs.core._lookup.call(null,coll,k)], true);
} else
{return null;
}
});
/**
* Returns true if no two of the arguments are =
* @param {...*} var_args
*/
cljs.core.distinct_QMARK_ = (function() {
var distinct_QMARK_ = null;
var distinct_QMARK___1 = (function (x){
return true;
});
var distinct_QMARK___2 = (function (x,y){
return !(cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___3 = (function() { 
var G__74407__delegate = function (x,y,more){
if(!(cljs.core._EQ_.call(null,x,y)))
{var s__74403 = cljs.core.PersistentHashSet.fromArray([y,x]);
var xs__74404 = more;
while(true){
var x__74405 = cljs.core.first.call(null,xs__74404);
var etc__74406 = cljs.core.next.call(null,xs__74404);
if(cljs.core.truth_(xs__74404))
{if(cljs.core.contains_QMARK_.call(null,s__74403,x__74405))
{return false;
} else
{{
var G__74408 = cljs.core.conj.call(null,s__74403,x__74405);
var G__74409 = etc__74406;
s__74403 = G__74408;
xs__74404 = G__74409;
continue;
}
}
} else
{return true;
}
break;
}
} else
{return false;
}
};
var G__74407 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__74407__delegate.call(this, x, y, more);
};
G__74407.cljs$lang$maxFixedArity = 2;
G__74407.cljs$lang$applyTo = (function (arglist__74410){
var x = cljs.core.first(arglist__74410);
var y = cljs.core.first(cljs.core.next(arglist__74410));
var more = cljs.core.rest(cljs.core.next(arglist__74410));
return G__74407__delegate(x, y, more);
});
G__74407.cljs$lang$arity$variadic = G__74407__delegate;
return G__74407;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return distinct_QMARK___1.call(this,x);
case 2:
return distinct_QMARK___2.call(this,x,y);
default:
return distinct_QMARK___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___3.cljs$lang$applyTo;
distinct_QMARK_.cljs$lang$arity$1 = distinct_QMARK___1;
distinct_QMARK_.cljs$lang$arity$2 = distinct_QMARK___2;
distinct_QMARK_.cljs$lang$arity$variadic = distinct_QMARK___3.cljs$lang$arity$variadic;
return distinct_QMARK_;
})()
;
/**
* Comparator. Returns a negative number, zero, or a positive number
* when x is logically 'less than', 'equal to', or 'greater than'
* y. Uses IComparable if available and google.array.defaultCompare for objects
* of the same type and special-cases nil to be less than any other object.
*/
cljs.core.compare = (function compare(x,y){
if((x === y))
{return 0;
} else
{if((x == null))
{return -1;
} else
{if((y == null))
{return 1;
} else
{if((cljs.core.type.call(null,x) === cljs.core.type.call(null,y)))
{if((function (){var G__74414__74415 = x;
if(G__74414__74415)
{if((function (){var or__3824__auto____74416 = (G__74414__74415.cljs$lang$protocol_mask$partition1$ & 2048);
if(or__3824__auto____74416)
{return or__3824__auto____74416;
} else
{return G__74414__74415.cljs$core$IComparable$;
}
})())
{return true;
} else
{if((!G__74414__74415.cljs$lang$protocol_mask$partition1$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IComparable,G__74414__74415);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IComparable,G__74414__74415);
}
})())
{return cljs.core._compare.call(null,x,y);
} else
{return goog.array.defaultCompare(x,y);
}
} else
{if("\uFDD0'else")
{throw (new Error("compare on non-nil objects of different types"));
} else
{return null;
}
}
}
}
}
});
/**
* Compare indexed collection.
*/
cljs.core.compare_indexed = (function() {
var compare_indexed = null;
var compare_indexed__2 = (function (xs,ys){
var xl__74421 = cljs.core.count.call(null,xs);
var yl__74422 = cljs.core.count.call(null,ys);
if((xl__74421 < yl__74422))
{return -1;
} else
{if((xl__74421 > yl__74422))
{return 1;
} else
{if("\uFDD0'else")
{return compare_indexed.call(null,xs,ys,xl__74421,0);
} else
{return null;
}
}
}
});
var compare_indexed__4 = (function (xs,ys,len,n){
while(true){
var d__74423 = cljs.core.compare.call(null,cljs.core.nth.call(null,xs,n),cljs.core.nth.call(null,ys,n));
if((function (){var and__3822__auto____74424 = (d__74423 === 0);
if(and__3822__auto____74424)
{return ((n + 1) < len);
} else
{return and__3822__auto____74424;
}
})())
{{
var G__74425 = xs;
var G__74426 = ys;
var G__74427 = len;
var G__74428 = (n + 1);
xs = G__74425;
ys = G__74426;
len = G__74427;
n = G__74428;
continue;
}
} else
{return d__74423;
}
break;
}
});
compare_indexed = function(xs,ys,len,n){
switch(arguments.length){
case 2:
return compare_indexed__2.call(this,xs,ys);
case 4:
return compare_indexed__4.call(this,xs,ys,len,n);
}
throw('Invalid arity: ' + arguments.length);
};
compare_indexed.cljs$lang$arity$2 = compare_indexed__2;
compare_indexed.cljs$lang$arity$4 = compare_indexed__4;
return compare_indexed;
})()
;
/**
* Given a fn that might be boolean valued or a comparator,
* return a fn that is a comparator.
*/
cljs.core.fn__GT_comparator = (function fn__GT_comparator(f){
if(cljs.core._EQ_.call(null,f,cljs.core.compare))
{return cljs.core.compare;
} else
{return (function (x,y){
var r__74430 = f.call(null,x,y);
if(cljs.core.number_QMARK_.call(null,r__74430))
{return r__74430;
} else
{if(cljs.core.truth_(r__74430))
{return -1;
} else
{if(cljs.core.truth_(f.call(null,y,x)))
{return 1;
} else
{return 0;
}
}
}
});
}
});
/**
* Returns a sorted sequence of the items in coll. Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort = (function() {
var sort = null;
var sort__1 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__2 = (function (comp,coll){
if(cljs.core.seq.call(null,coll))
{var a__74432 = cljs.core.to_array.call(null,coll);
goog.array.stableSort(a__74432,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__74432);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case 1:
return sort__1.call(this,comp);
case 2:
return sort__2.call(this,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
sort.cljs$lang$arity$1 = sort__1;
sort.cljs$lang$arity$2 = sort__2;
return sort;
})()
;
/**
* Returns a sorted sequence of the items in coll, where the sort
* order is determined by comparing (keyfn item).  Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort_by = (function() {
var sort_by = null;
var sort_by__2 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__3 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case 2:
return sort_by__2.call(this,keyfn,comp);
case 3:
return sort_by__3.call(this,keyfn,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
sort_by.cljs$lang$arity$2 = sort_by__2;
sort_by.cljs$lang$arity$3 = sort_by__3;
return sort_by;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__2 = (function (f,coll){
var temp__3971__auto____74438 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____74438)
{var s__74439 = temp__3971__auto____74438;
return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__74439),cljs.core.next.call(null,s__74439));
} else
{return f.call(null);
}
});
var seq_reduce__3 = (function (f,val,coll){
var val__74440 = val;
var coll__74441 = cljs.core.seq.call(null,coll);
while(true){
if(coll__74441)
{var nval__74442 = f.call(null,val__74440,cljs.core.first.call(null,coll__74441));
if(cljs.core.reduced_QMARK_.call(null,nval__74442))
{return cljs.core.deref.call(null,nval__74442);
} else
{{
var G__74443 = nval__74442;
var G__74444 = cljs.core.next.call(null,coll__74441);
val__74440 = G__74443;
coll__74441 = G__74444;
continue;
}
}
} else
{return val__74440;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case 2:
return seq_reduce__2.call(this,f,val);
case 3:
return seq_reduce__3.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
seq_reduce.cljs$lang$arity$2 = seq_reduce__2;
seq_reduce.cljs$lang$arity$3 = seq_reduce__3;
return seq_reduce;
})()
;
/**
* Return a random permutation of coll
*/
cljs.core.shuffle = (function shuffle(coll){
var a__74446 = cljs.core.to_array.call(null,coll);
goog.array.shuffle(a__74446);
return cljs.core.vec.call(null,a__74446);
});
/**
* f should be a function of 2 arguments. If val is not supplied,
* returns the result of applying f to the first 2 items in coll, then
* applying f to that result and the 3rd item, etc. If coll contains no
* items, f must accept no arguments as well, and reduce returns the
* result of calling f with no arguments.  If coll has only 1 item, it
* is returned and f is not called.  If val is supplied, returns the
* result of applying f to val and the first item in coll, then
* applying f to that result and the 2nd item, etc. If coll contains no
* items, returns val and f is not called.
*/
cljs.core.reduce = (function() {
var reduce = null;
var reduce__2 = (function (f,coll){
if((function (){var G__74453__74454 = coll;
if(G__74453__74454)
{if((function (){var or__3824__auto____74455 = (G__74453__74454.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____74455)
{return or__3824__auto____74455;
} else
{return G__74453__74454.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__74453__74454.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__74453__74454);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__74453__74454);
}
})())
{return cljs.core._reduce.call(null,coll,f);
} else
{return cljs.core.seq_reduce.call(null,f,coll);
}
});
var reduce__3 = (function (f,val,coll){
if((function (){var G__74456__74457 = coll;
if(G__74456__74457)
{if((function (){var or__3824__auto____74458 = (G__74456__74457.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____74458)
{return or__3824__auto____74458;
} else
{return G__74456__74457.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__74456__74457.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__74456__74457);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__74456__74457);
}
})())
{return cljs.core._reduce.call(null,coll,f,val);
} else
{return cljs.core.seq_reduce.call(null,f,val,coll);
}
});
reduce = function(f,val,coll){
switch(arguments.length){
case 2:
return reduce__2.call(this,f,val);
case 3:
return reduce__3.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
reduce.cljs$lang$arity$2 = reduce__2;
reduce.cljs$lang$arity$3 = reduce__3;
return reduce;
})()
;
/**
* Reduces an associative collection. f should be a function of 3
* arguments. Returns the result of applying f to init, the first key
* and the first value in coll, then applying f to that result and the
* 2nd key and value, etc. If coll contains no entries, returns init
* and f is not called. Note that reduce-kv is supported on vectors,
* where the keys will be the ordinals.
*/
cljs.core.reduce_kv = (function reduce_kv(f,init,coll){
return cljs.core._kv_reduce.call(null,coll,f,init);
});
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___0 = (function (){
return 0;
});
var _PLUS___1 = (function (x){
return x;
});
var _PLUS___2 = (function (x,y){
return (x + y);
});
var _PLUS___3 = (function() { 
var G__74459__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__74459 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__74459__delegate.call(this, x, y, more);
};
G__74459.cljs$lang$maxFixedArity = 2;
G__74459.cljs$lang$applyTo = (function (arglist__74460){
var x = cljs.core.first(arglist__74460);
var y = cljs.core.first(cljs.core.next(arglist__74460));
var more = cljs.core.rest(cljs.core.next(arglist__74460));
return G__74459__delegate(x, y, more);
});
G__74459.cljs$lang$arity$variadic = G__74459__delegate;
return G__74459;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return _PLUS___0.call(this);
case 1:
return _PLUS___1.call(this,x);
case 2:
return _PLUS___2.call(this,x,y);
default:
return _PLUS___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___3.cljs$lang$applyTo;
_PLUS_.cljs$lang$arity$0 = _PLUS___0;
_PLUS_.cljs$lang$arity$1 = _PLUS___1;
_PLUS_.cljs$lang$arity$2 = _PLUS___2;
_PLUS_.cljs$lang$arity$variadic = _PLUS___3.cljs$lang$arity$variadic;
return _PLUS_;
})()
;
/**
* If no ys are supplied, returns the negation of x, else subtracts
* the ys from x and returns the result.
* @param {...*} var_args
*/
cljs.core._ = (function() {
var _ = null;
var ___1 = (function (x){
return (- x);
});
var ___2 = (function (x,y){
return (x - y);
});
var ___3 = (function() { 
var G__74461__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__74461 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__74461__delegate.call(this, x, y, more);
};
G__74461.cljs$lang$maxFixedArity = 2;
G__74461.cljs$lang$applyTo = (function (arglist__74462){
var x = cljs.core.first(arglist__74462);
var y = cljs.core.first(cljs.core.next(arglist__74462));
var more = cljs.core.rest(cljs.core.next(arglist__74462));
return G__74461__delegate(x, y, more);
});
G__74461.cljs$lang$arity$variadic = G__74461__delegate;
return G__74461;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return ___1.call(this,x);
case 2:
return ___2.call(this,x,y);
default:
return ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___3.cljs$lang$applyTo;
_.cljs$lang$arity$1 = ___1;
_.cljs$lang$arity$2 = ___2;
_.cljs$lang$arity$variadic = ___3.cljs$lang$arity$variadic;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___0 = (function (){
return 1;
});
var _STAR___1 = (function (x){
return x;
});
var _STAR___2 = (function (x,y){
return (x * y);
});
var _STAR___3 = (function() { 
var G__74463__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__74463 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__74463__delegate.call(this, x, y, more);
};
G__74463.cljs$lang$maxFixedArity = 2;
G__74463.cljs$lang$applyTo = (function (arglist__74464){
var x = cljs.core.first(arglist__74464);
var y = cljs.core.first(cljs.core.next(arglist__74464));
var more = cljs.core.rest(cljs.core.next(arglist__74464));
return G__74463__delegate(x, y, more);
});
G__74463.cljs$lang$arity$variadic = G__74463__delegate;
return G__74463;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return _STAR___0.call(this);
case 1:
return _STAR___1.call(this,x);
case 2:
return _STAR___2.call(this,x,y);
default:
return _STAR___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___3.cljs$lang$applyTo;
_STAR_.cljs$lang$arity$0 = _STAR___0;
_STAR_.cljs$lang$arity$1 = _STAR___1;
_STAR_.cljs$lang$arity$2 = _STAR___2;
_STAR_.cljs$lang$arity$variadic = _STAR___3.cljs$lang$arity$variadic;
return _STAR_;
})()
;
/**
* If no denominators are supplied, returns 1/numerator,
* else returns numerator divided by all of the denominators.
* @param {...*} var_args
*/
cljs.core._SLASH_ = (function() {
var _SLASH_ = null;
var _SLASH___1 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___2 = (function (x,y){
return (x / y);
});
var _SLASH___3 = (function() { 
var G__74465__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__74465 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__74465__delegate.call(this, x, y, more);
};
G__74465.cljs$lang$maxFixedArity = 2;
G__74465.cljs$lang$applyTo = (function (arglist__74466){
var x = cljs.core.first(arglist__74466);
var y = cljs.core.first(cljs.core.next(arglist__74466));
var more = cljs.core.rest(cljs.core.next(arglist__74466));
return G__74465__delegate(x, y, more);
});
G__74465.cljs$lang$arity$variadic = G__74465__delegate;
return G__74465;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _SLASH___1.call(this,x);
case 2:
return _SLASH___2.call(this,x,y);
default:
return _SLASH___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___3.cljs$lang$applyTo;
_SLASH_.cljs$lang$arity$1 = _SLASH___1;
_SLASH_.cljs$lang$arity$2 = _SLASH___2;
_SLASH_.cljs$lang$arity$variadic = _SLASH___3.cljs$lang$arity$variadic;
return _SLASH_;
})()
;
/**
* Returns non-nil if nums are in monotonically increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT_ = (function() {
var _LT_ = null;
var _LT___1 = (function (x){
return true;
});
var _LT___2 = (function (x,y){
return (x < y);
});
var _LT___3 = (function() { 
var G__74467__delegate = function (x,y,more){
while(true){
if((x < y))
{if(cljs.core.next.call(null,more))
{{
var G__74468 = y;
var G__74469 = cljs.core.first.call(null,more);
var G__74470 = cljs.core.next.call(null,more);
x = G__74468;
y = G__74469;
more = G__74470;
continue;
}
} else
{return (y < cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__74467 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__74467__delegate.call(this, x, y, more);
};
G__74467.cljs$lang$maxFixedArity = 2;
G__74467.cljs$lang$applyTo = (function (arglist__74471){
var x = cljs.core.first(arglist__74471);
var y = cljs.core.first(cljs.core.next(arglist__74471));
var more = cljs.core.rest(cljs.core.next(arglist__74471));
return G__74467__delegate(x, y, more);
});
G__74467.cljs$lang$arity$variadic = G__74467__delegate;
return G__74467;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _LT___1.call(this,x);
case 2:
return _LT___2.call(this,x,y);
default:
return _LT___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___3.cljs$lang$applyTo;
_LT_.cljs$lang$arity$1 = _LT___1;
_LT_.cljs$lang$arity$2 = _LT___2;
_LT_.cljs$lang$arity$variadic = _LT___3.cljs$lang$arity$variadic;
return _LT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT__EQ_ = (function() {
var _LT__EQ_ = null;
var _LT__EQ___1 = (function (x){
return true;
});
var _LT__EQ___2 = (function (x,y){
return (x <= y);
});
var _LT__EQ___3 = (function() { 
var G__74472__delegate = function (x,y,more){
while(true){
if((x <= y))
{if(cljs.core.next.call(null,more))
{{
var G__74473 = y;
var G__74474 = cljs.core.first.call(null,more);
var G__74475 = cljs.core.next.call(null,more);
x = G__74473;
y = G__74474;
more = G__74475;
continue;
}
} else
{return (y <= cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__74472 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__74472__delegate.call(this, x, y, more);
};
G__74472.cljs$lang$maxFixedArity = 2;
G__74472.cljs$lang$applyTo = (function (arglist__74476){
var x = cljs.core.first(arglist__74476);
var y = cljs.core.first(cljs.core.next(arglist__74476));
var more = cljs.core.rest(cljs.core.next(arglist__74476));
return G__74472__delegate(x, y, more);
});
G__74472.cljs$lang$arity$variadic = G__74472__delegate;
return G__74472;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _LT__EQ___1.call(this,x);
case 2:
return _LT__EQ___2.call(this,x,y);
default:
return _LT__EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___3.cljs$lang$applyTo;
_LT__EQ_.cljs$lang$arity$1 = _LT__EQ___1;
_LT__EQ_.cljs$lang$arity$2 = _LT__EQ___2;
_LT__EQ_.cljs$lang$arity$variadic = _LT__EQ___3.cljs$lang$arity$variadic;
return _LT__EQ_;
})()
;
/**
* Returns non-nil if nums are in monotonically decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT_ = (function() {
var _GT_ = null;
var _GT___1 = (function (x){
return true;
});
var _GT___2 = (function (x,y){
return (x > y);
});
var _GT___3 = (function() { 
var G__74477__delegate = function (x,y,more){
while(true){
if((x > y))
{if(cljs.core.next.call(null,more))
{{
var G__74478 = y;
var G__74479 = cljs.core.first.call(null,more);
var G__74480 = cljs.core.next.call(null,more);
x = G__74478;
y = G__74479;
more = G__74480;
continue;
}
} else
{return (y > cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__74477 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__74477__delegate.call(this, x, y, more);
};
G__74477.cljs$lang$maxFixedArity = 2;
G__74477.cljs$lang$applyTo = (function (arglist__74481){
var x = cljs.core.first(arglist__74481);
var y = cljs.core.first(cljs.core.next(arglist__74481));
var more = cljs.core.rest(cljs.core.next(arglist__74481));
return G__74477__delegate(x, y, more);
});
G__74477.cljs$lang$arity$variadic = G__74477__delegate;
return G__74477;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _GT___1.call(this,x);
case 2:
return _GT___2.call(this,x,y);
default:
return _GT___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___3.cljs$lang$applyTo;
_GT_.cljs$lang$arity$1 = _GT___1;
_GT_.cljs$lang$arity$2 = _GT___2;
_GT_.cljs$lang$arity$variadic = _GT___3.cljs$lang$arity$variadic;
return _GT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT__EQ_ = (function() {
var _GT__EQ_ = null;
var _GT__EQ___1 = (function (x){
return true;
});
var _GT__EQ___2 = (function (x,y){
return (x >= y);
});
var _GT__EQ___3 = (function() { 
var G__74482__delegate = function (x,y,more){
while(true){
if((x >= y))
{if(cljs.core.next.call(null,more))
{{
var G__74483 = y;
var G__74484 = cljs.core.first.call(null,more);
var G__74485 = cljs.core.next.call(null,more);
x = G__74483;
y = G__74484;
more = G__74485;
continue;
}
} else
{return (y >= cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__74482 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__74482__delegate.call(this, x, y, more);
};
G__74482.cljs$lang$maxFixedArity = 2;
G__74482.cljs$lang$applyTo = (function (arglist__74486){
var x = cljs.core.first(arglist__74486);
var y = cljs.core.first(cljs.core.next(arglist__74486));
var more = cljs.core.rest(cljs.core.next(arglist__74486));
return G__74482__delegate(x, y, more);
});
G__74482.cljs$lang$arity$variadic = G__74482__delegate;
return G__74482;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _GT__EQ___1.call(this,x);
case 2:
return _GT__EQ___2.call(this,x,y);
default:
return _GT__EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___3.cljs$lang$applyTo;
_GT__EQ_.cljs$lang$arity$1 = _GT__EQ___1;
_GT__EQ_.cljs$lang$arity$2 = _GT__EQ___2;
_GT__EQ_.cljs$lang$arity$variadic = _GT__EQ___3.cljs$lang$arity$variadic;
return _GT__EQ_;
})()
;
/**
* Returns a number one less than num.
*/
cljs.core.dec = (function dec(x){
return (x - 1);
});
/**
* Returns the greatest of the nums.
* @param {...*} var_args
*/
cljs.core.max = (function() {
var max = null;
var max__1 = (function (x){
return x;
});
var max__2 = (function (x,y){
return ((x > y) ? x : y);
});
var max__3 = (function() { 
var G__74487__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__74487 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__74487__delegate.call(this, x, y, more);
};
G__74487.cljs$lang$maxFixedArity = 2;
G__74487.cljs$lang$applyTo = (function (arglist__74488){
var x = cljs.core.first(arglist__74488);
var y = cljs.core.first(cljs.core.next(arglist__74488));
var more = cljs.core.rest(cljs.core.next(arglist__74488));
return G__74487__delegate(x, y, more);
});
G__74487.cljs$lang$arity$variadic = G__74487__delegate;
return G__74487;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return max__1.call(this,x);
case 2:
return max__2.call(this,x,y);
default:
return max__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__3.cljs$lang$applyTo;
max.cljs$lang$arity$1 = max__1;
max.cljs$lang$arity$2 = max__2;
max.cljs$lang$arity$variadic = max__3.cljs$lang$arity$variadic;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__1 = (function (x){
return x;
});
var min__2 = (function (x,y){
return ((x < y) ? x : y);
});
var min__3 = (function() { 
var G__74489__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__74489 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__74489__delegate.call(this, x, y, more);
};
G__74489.cljs$lang$maxFixedArity = 2;
G__74489.cljs$lang$applyTo = (function (arglist__74490){
var x = cljs.core.first(arglist__74490);
var y = cljs.core.first(cljs.core.next(arglist__74490));
var more = cljs.core.rest(cljs.core.next(arglist__74490));
return G__74489__delegate(x, y, more);
});
G__74489.cljs$lang$arity$variadic = G__74489__delegate;
return G__74489;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return min__1.call(this,x);
case 2:
return min__2.call(this,x,y);
default:
return min__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__3.cljs$lang$applyTo;
min.cljs$lang$arity$1 = min__1;
min.cljs$lang$arity$2 = min__2;
min.cljs$lang$arity$variadic = min__3.cljs$lang$arity$variadic;
return min;
})()
;
cljs.core.fix = (function fix(q){
if((q >= 0))
{return Math.floor.call(null,q);
} else
{return Math.ceil.call(null,q);
}
});
/**
* Coerce to int by stripping decimal places.
*/
cljs.core.int$ = (function int$(x){
return cljs.core.fix.call(null,x);
});
/**
* Coerce to long by stripping decimal places. Identical to `int'.
*/
cljs.core.long$ = (function long$(x){
return cljs.core.fix.call(null,x);
});
/**
* Modulus of num and div. Truncates toward negative infinity.
*/
cljs.core.mod = (function mod(n,d){
return (n % d);
});
/**
* quot[ient] of dividing numerator by denominator.
*/
cljs.core.quot = (function quot(n,d){
var rem__74492 = (n % d);
return cljs.core.fix.call(null,((n - rem__74492) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__74494 = cljs.core.quot.call(null,n,d);
return (n - (d * q__74494));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__0 = (function (){
return Math.random.call(null);
});
var rand__1 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case 0:
return rand__0.call(this);
case 1:
return rand__1.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
rand.cljs$lang$arity$0 = rand__0;
rand.cljs$lang$arity$1 = rand__1;
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return cljs.core.fix.call(null,cljs.core.rand.call(null,n));
});
/**
* Bitwise exclusive or
*/
cljs.core.bit_xor = (function bit_xor(x,y){
return (x ^ y);
});
/**
* Bitwise and
*/
cljs.core.bit_and = (function bit_and(x,y){
return (x & y);
});
/**
* Bitwise or
*/
cljs.core.bit_or = (function bit_or(x,y){
return (x | y);
});
/**
* Bitwise and
*/
cljs.core.bit_and_not = (function bit_and_not(x,y){
return (x & ~y);
});
/**
* Clear bit at index n
*/
cljs.core.bit_clear = (function bit_clear(x,n){
return (x & ~(1 << n));
});
/**
* Flip bit at index n
*/
cljs.core.bit_flip = (function bit_flip(x,n){
return (x ^ (1 << n));
});
/**
* Bitwise complement
*/
cljs.core.bit_not = (function bit_not(x){
return (~ x);
});
/**
* Set bit at index n
*/
cljs.core.bit_set = (function bit_set(x,n){
return (x | (1 << n));
});
/**
* Test bit at index n
*/
cljs.core.bit_test = (function bit_test(x,n){
return ((x & (1 << n)) != 0);
});
/**
* Bitwise shift left
*/
cljs.core.bit_shift_left = (function bit_shift_left(x,n){
return (x << n);
});
/**
* Bitwise shift right
*/
cljs.core.bit_shift_right = (function bit_shift_right(x,n){
return (x >> n);
});
/**
* Bitwise shift right with zero fill
*/
cljs.core.bit_shift_right_zero_fill = (function bit_shift_right_zero_fill(x,n){
return (x >>> n);
});
/**
* Counts the number of bits set in n
*/
cljs.core.bit_count = (function bit_count(v){
var v__74497 = (v - ((v >> 1) & 1431655765));
var v__74498 = ((v__74497 & 858993459) + ((v__74497 >> 2) & 858993459));
return ((((v__74498 + (v__74498 >> 4)) & 252645135) * 16843009) >> 24);
});
/**
* Returns non-nil if nums all have the equivalent
* value, otherwise false. Behavior on non nums is
* undefined.
* @param {...*} var_args
*/
cljs.core._EQ__EQ_ = (function() {
var _EQ__EQ_ = null;
var _EQ__EQ___1 = (function (x){
return true;
});
var _EQ__EQ___2 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___3 = (function() { 
var G__74499__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.next.call(null,more))
{{
var G__74500 = y;
var G__74501 = cljs.core.first.call(null,more);
var G__74502 = cljs.core.next.call(null,more);
x = G__74500;
y = G__74501;
more = G__74502;
continue;
}
} else
{return _EQ__EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__74499 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__74499__delegate.call(this, x, y, more);
};
G__74499.cljs$lang$maxFixedArity = 2;
G__74499.cljs$lang$applyTo = (function (arglist__74503){
var x = cljs.core.first(arglist__74503);
var y = cljs.core.first(cljs.core.next(arglist__74503));
var more = cljs.core.rest(cljs.core.next(arglist__74503));
return G__74499__delegate(x, y, more);
});
G__74499.cljs$lang$arity$variadic = G__74499__delegate;
return G__74499;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _EQ__EQ___1.call(this,x);
case 2:
return _EQ__EQ___2.call(this,x,y);
default:
return _EQ__EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___3.cljs$lang$applyTo;
_EQ__EQ_.cljs$lang$arity$1 = _EQ__EQ___1;
_EQ__EQ_.cljs$lang$arity$2 = _EQ__EQ___2;
_EQ__EQ_.cljs$lang$arity$variadic = _EQ__EQ___3.cljs$lang$arity$variadic;
return _EQ__EQ_;
})()
;
/**
* Returns true if num is greater than zero, else false
*/
cljs.core.pos_QMARK_ = (function pos_QMARK_(n){
return (n > 0);
});
cljs.core.zero_QMARK_ = (function zero_QMARK_(n){
return (n === 0);
});
/**
* Returns true if num is less than zero, else false
*/
cljs.core.neg_QMARK_ = (function neg_QMARK_(x){
return (x < 0);
});
/**
* Returns the nth next of coll, (seq coll) when n is 0.
*/
cljs.core.nthnext = (function nthnext(coll,n){
var n__74507 = n;
var xs__74508 = cljs.core.seq.call(null,coll);
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____74509 = xs__74508;
if(and__3822__auto____74509)
{return (n__74507 > 0);
} else
{return and__3822__auto____74509;
}
})()))
{{
var G__74510 = (n__74507 - 1);
var G__74511 = cljs.core.next.call(null,xs__74508);
n__74507 = G__74510;
xs__74508 = G__74511;
continue;
}
} else
{return xs__74508;
}
break;
}
});
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___0 = (function (){
return "";
});
var str_STAR___1 = (function (x){
if((x == null))
{return "";
} else
{if("\uFDD0'else")
{return x.toString();
} else
{return null;
}
}
});
var str_STAR___2 = (function() { 
var G__74512__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__74513 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__74514 = cljs.core.next.call(null,more);
sb = G__74513;
more = G__74514;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__74512 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__74512__delegate.call(this, x, ys);
};
G__74512.cljs$lang$maxFixedArity = 1;
G__74512.cljs$lang$applyTo = (function (arglist__74515){
var x = cljs.core.first(arglist__74515);
var ys = cljs.core.rest(arglist__74515);
return G__74512__delegate(x, ys);
});
G__74512.cljs$lang$arity$variadic = G__74512__delegate;
return G__74512;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case 0:
return str_STAR___0.call(this);
case 1:
return str_STAR___1.call(this,x);
default:
return str_STAR___2.cljs$lang$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___2.cljs$lang$applyTo;
str_STAR_.cljs$lang$arity$0 = str_STAR___0;
str_STAR_.cljs$lang$arity$1 = str_STAR___1;
str_STAR_.cljs$lang$arity$variadic = str_STAR___2.cljs$lang$arity$variadic;
return str_STAR_;
})()
;
/**
* With no args, returns the empty string. With one arg x, returns
* x.toString().  (str nil) returns the empty string. With more than
* one arg, returns the concatenation of the str values of the args.
* @param {...*} var_args
*/
cljs.core.str = (function() {
var str = null;
var str__0 = (function (){
return "";
});
var str__1 = (function (x){
if(cljs.core.symbol_QMARK_.call(null,x))
{return x.substring(2,x.length);
} else
{if(cljs.core.keyword_QMARK_.call(null,x))
{return cljs.core.str_STAR_.call(null,":",x.substring(2,x.length));
} else
{if((x == null))
{return "";
} else
{if("\uFDD0'else")
{return x.toString();
} else
{return null;
}
}
}
}
});
var str__2 = (function() { 
var G__74516__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__74517 = sb.append(str.call(null,cljs.core.first.call(null,more)));
var G__74518 = cljs.core.next.call(null,more);
sb = G__74517;
more = G__74518;
continue;
}
} else
{return cljs.core.str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str.call(null,x))),ys);
};
var G__74516 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__74516__delegate.call(this, x, ys);
};
G__74516.cljs$lang$maxFixedArity = 1;
G__74516.cljs$lang$applyTo = (function (arglist__74519){
var x = cljs.core.first(arglist__74519);
var ys = cljs.core.rest(arglist__74519);
return G__74516__delegate(x, ys);
});
G__74516.cljs$lang$arity$variadic = G__74516__delegate;
return G__74516;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case 0:
return str__0.call(this);
case 1:
return str__1.call(this,x);
default:
return str__2.cljs$lang$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__2.cljs$lang$applyTo;
str.cljs$lang$arity$0 = str__0;
str.cljs$lang$arity$1 = str__1;
str.cljs$lang$arity$variadic = str__2.cljs$lang$arity$variadic;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__2 = (function (s,start){
return s.substring(start);
});
var subs__3 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case 2:
return subs__2.call(this,s,start);
case 3:
return subs__3.call(this,s,start,end);
}
throw('Invalid arity: ' + arguments.length);
};
subs.cljs$lang$arity$2 = subs__2;
subs.cljs$lang$arity$3 = subs__3;
return subs;
})()
;
/**
* Formats a string using goog.string.format.
* @param {...*} var_args
*/
cljs.core.format = (function() { 
var format__delegate = function (fmt,args){
var args__74523 = cljs.core.map.call(null,(function (x){
if((function (){var or__3824__auto____74522 = cljs.core.keyword_QMARK_.call(null,x);
if(or__3824__auto____74522)
{return or__3824__auto____74522;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{return [cljs.core.str(x)].join('');
} else
{return x;
}
}),args);
return cljs.core.apply.call(null,goog.string.format,fmt,args__74523);
};
var format = function (fmt,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return format__delegate.call(this, fmt, args);
};
format.cljs$lang$maxFixedArity = 1;
format.cljs$lang$applyTo = (function (arglist__74524){
var fmt = cljs.core.first(arglist__74524);
var args = cljs.core.rest(arglist__74524);
return format__delegate(fmt, args);
});
format.cljs$lang$arity$variadic = format__delegate;
return format;
})()
;
/**
* Returns a Symbol with the given namespace and name.
*/
cljs.core.symbol = (function() {
var symbol = null;
var symbol__1 = (function (name){
if(cljs.core.symbol_QMARK_.call(null,name))
{return name;
} else
{if(cljs.core.keyword_QMARK_.call(null,name))
{return cljs.core.str_STAR_.call(null,"\uFDD1","'",cljs.core.subs.call(null,name,2));
} else
{if("\uFDD0'else")
{return cljs.core.str_STAR_.call(null,"\uFDD1","'",name);
} else
{return null;
}
}
}
});
var symbol__2 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case 1:
return symbol__1.call(this,ns);
case 2:
return symbol__2.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
symbol.cljs$lang$arity$1 = symbol__1;
symbol.cljs$lang$arity$2 = symbol__2;
return symbol;
})()
;
/**
* Returns a Keyword with the given namespace and name.  Do not use :
* in the keyword strings, it will be added automatically.
*/
cljs.core.keyword = (function() {
var keyword = null;
var keyword__1 = (function (name){
if(cljs.core.keyword_QMARK_.call(null,name))
{return name;
} else
{if(cljs.core.symbol_QMARK_.call(null,name))
{return cljs.core.str_STAR_.call(null,"\uFDD0","'",cljs.core.subs.call(null,name,2));
} else
{if("\uFDD0'else")
{return cljs.core.str_STAR_.call(null,"\uFDD0","'",name);
} else
{return null;
}
}
}
});
var keyword__2 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case 1:
return keyword__1.call(this,ns);
case 2:
return keyword__2.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
keyword.cljs$lang$arity$1 = keyword__1;
keyword.cljs$lang$arity$2 = keyword__2;
return keyword;
})()
;
/**
* Assumes x is sequential. Returns true if x equals y, otherwise
* returns false.
*/
cljs.core.equiv_sequential = (function equiv_sequential(x,y){
return cljs.core.boolean$.call(null,((cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__74527 = cljs.core.seq.call(null,x);
var ys__74528 = cljs.core.seq.call(null,y);
while(true){
if((xs__74527 == null))
{return (ys__74528 == null);
} else
{if((ys__74528 == null))
{return false;
} else
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__74527),cljs.core.first.call(null,ys__74528)))
{{
var G__74529 = cljs.core.next.call(null,xs__74527);
var G__74530 = cljs.core.next.call(null,ys__74528);
xs__74527 = G__74529;
ys__74528 = G__74530;
continue;
}
} else
{if("\uFDD0'else")
{return false;
} else
{return null;
}
}
}
}
break;
}
})():null));
});
cljs.core.hash_combine = (function hash_combine(seed,hash){
return (seed ^ (((hash + 2654435769) + (seed << 6)) + (seed >> 2)));
});
cljs.core.hash_coll = (function hash_coll(coll){
return cljs.core.reduce.call(null,(function (p1__74531_SHARP_,p2__74532_SHARP_){
return cljs.core.hash_combine.call(null,p1__74531_SHARP_,cljs.core.hash.call(null,p2__74532_SHARP_,false));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll),false),cljs.core.next.call(null,coll));
});
cljs.core.hash_imap = (function hash_imap(m){
var h__74536 = 0;
var s__74537 = cljs.core.seq.call(null,m);
while(true){
if(s__74537)
{var e__74538 = cljs.core.first.call(null,s__74537);
{
var G__74539 = ((h__74536 + (cljs.core.hash.call(null,cljs.core.key.call(null,e__74538)) ^ cljs.core.hash.call(null,cljs.core.val.call(null,e__74538)))) % 4503599627370496);
var G__74540 = cljs.core.next.call(null,s__74537);
h__74536 = G__74539;
s__74537 = G__74540;
continue;
}
} else
{return h__74536;
}
break;
}
});
cljs.core.hash_iset = (function hash_iset(s){
var h__74544 = 0;
var s__74545 = cljs.core.seq.call(null,s);
while(true){
if(s__74545)
{var e__74546 = cljs.core.first.call(null,s__74545);
{
var G__74547 = ((h__74544 + cljs.core.hash.call(null,e__74546)) % 4503599627370496);
var G__74548 = cljs.core.next.call(null,s__74545);
h__74544 = G__74547;
s__74545 = G__74548;
continue;
}
} else
{return h__74544;
}
break;
}
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__74556__74557 = cljs.core.seq.call(null,fn_map);
while(true){
if(G__74556__74557)
{var vec__74558__74559 = cljs.core.first.call(null,G__74556__74557);
var key_name__74560 = cljs.core.nth.call(null,vec__74558__74559,0,null);
var f__74561 = cljs.core.nth.call(null,vec__74558__74559,1,null);
var str_name__74562 = cljs.core.name.call(null,key_name__74560);
(obj[str_name__74562] = f__74561);
{
var G__74563 = cljs.core.next.call(null,G__74556__74557);
G__74556__74557 = G__74563;
continue;
}
} else
{}
break;
}
return obj;
});

goog.provide('cljs.core.List');

/**
* @constructor
*/
cljs.core.List = (function (meta,first,rest,count,__hash){
this.meta = meta;
this.first = first;
this.rest = rest;
this.count = count;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 65413358;
})
cljs.core.List.cljs$lang$type = true;
cljs.core.List.cljs$lang$ctorPrSeq = (function (this__5466__auto__){
return cljs.core.list.call(null,"cljs.core/List");
});
cljs.core.List.cljs$lang$ctorPrWriter = (function (this__5466__auto__,writer__5467__auto__){
return cljs.core._write.call(null,writer__5467__auto__,"cljs.core/List");
});
cljs.core.List.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__74564 = this;
var h__5347__auto____74565 = this__74564.__hash;
if(!((h__5347__auto____74565 == null)))
{return h__5347__auto____74565;
} else
{var h__5347__auto____74566 = cljs.core.hash_coll.call(null,coll);
this__74564.__hash = h__5347__auto____74566;
return h__5347__auto____74566;
}
});
cljs.core.List.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__74567 = this;
if((this__74567.count === 1))
{return null;
} else
{return this__74567.rest;
}
});
cljs.core.List.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__74568 = this;
return (new cljs.core.List(this__74568.meta,o,coll,(this__74568.count + 1),null));
});
cljs.core.List.prototype.toString = (function (){
var this__74569 = this;
var this__74570 = this;
return cljs.core.pr_str.call(null,this__74570);
});
cljs.core.List.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__74571 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__74572 = this;
return this__74572.count;
});
cljs.core.List.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__74573 = this;
return this__74573.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__74574 = this;
return coll.cljs$core$ISeq$_rest$arity$1(coll);
});
cljs.core.List.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__74575 = this;
return this__74575.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__74576 = this;
if((this__74576.count === 1))
{return cljs.core.List.EMPTY;
} else
{return this__74576.rest;
}
});
cljs.core.List.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__74577 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__74578 = this;
return (new cljs.core.List(meta,this__74578.first,this__74578.rest,this__74578.count,this__74578.__hash));
});
cljs.core.List.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__74579 = this;
return this__74579.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__74580 = this;
return cljs.core.List.EMPTY;
});
cljs.core.List;

goog.provide('cljs.core.EmptyList');

/**
* @constructor
*/
cljs.core.EmptyList = (function (meta){
this.meta = meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 65413326;
})
cljs.core.EmptyList.cljs$lang$type = true;
cljs.core.EmptyList.cljs$lang$ctorPrSeq = (function (this__5466__auto__){
return cljs.core.list.call(null,"cljs.core/EmptyList");
});
cljs.core.EmptyList.cljs$lang$ctorPrWriter = (function (this__5466__auto__,writer__5467__auto__){
return cljs.core._write.call(null,writer__5467__auto__,"cljs.core/EmptyList");
});
cljs.core.EmptyList.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__74581 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__74582 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__74583 = this;
return (new cljs.core.List(this__74583.meta,o,null,1,null));
});
cljs.core.EmptyList.prototype.toString = (function (){
var this__74584 = this;
var this__74585 = this;
return cljs.core.pr_str.call(null,this__74585);
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__74586 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__74587 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__74588 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__74589 = this;
throw (new Error("Can't pop empty list"));
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__74590 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__74591 = this;
return cljs.core.List.EMPTY;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__74592 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__74593 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__74594 = this;
return this__74594.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__74595 = this;
return coll;
});
cljs.core.EmptyList;
cljs.core.List.EMPTY = (new cljs.core.EmptyList(null));
cljs.core.reversible_QMARK_ = (function reversible_QMARK_(coll){
var G__74599__74600 = coll;
if(G__74599__74600)
{if((function (){var or__3824__auto____74601 = (G__74599__74600.cljs$lang$protocol_mask$partition0$ & 134217728);
if(or__3824__auto____74601)
{return or__3824__auto____74601;
} else
{return G__74599__74600.cljs$core$IReversible$;
}
})())
{return true;
} else
{if((!G__74599__74600.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReversible,G__74599__74600);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReversible,G__74599__74600);
}
});
cljs.core.rseq = (function rseq(coll){
return cljs.core._rseq.call(null,coll);
});
/**
* Returns a seq of the items in coll in reverse order. Not lazy.
*/
cljs.core.reverse = (function reverse(coll){
if(cljs.core.reversible_QMARK_.call(null,coll))
{return cljs.core.rseq.call(null,coll);
} else
{return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,coll);
}
});
/**
* @param {...*} var_args
*/
cljs.core.list = (function() {
var list = null;
var list__0 = (function (){
return cljs.core.List.EMPTY;
});
var list__1 = (function (x){
return cljs.core.conj.call(null,cljs.core.List.EMPTY,x);
});
var list__2 = (function (x,y){
return cljs.core.conj.call(null,list.call(null,y),x);
});
var list__3 = (function (x,y,z){
return cljs.core.conj.call(null,list.call(null,y,z),x);
});
var list__4 = (function() { 
var G__74602__delegate = function (x,y,z,items){
return cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,cljs.core.reverse.call(null,items)),z),y),x);
};
var G__74602 = function (x,y,z,var_args){
var items = null;
if (goog.isDef(var_args)) {
  items = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__74602__delegate.call(this, x, y, z, items);
};
G__74602.cljs$lang$maxFixedArity = 3;
G__74602.cljs$lang$applyTo = (function (arglist__74603){
var x = cljs.core.first(arglist__74603);
var y = cljs.core.first(cljs.core.next(arglist__74603));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__74603)));
var items = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__74603)));
return G__74602__delegate(x, y, z, items);
});
G__74602.cljs$lang$arity$variadic = G__74602__delegate;
return G__74602;
})()
;
list = function(x,y,z,var_args){
var items = var_args;
switch(arguments.length){
case 0:
return list__0.call(this);
case 1:
return list__1.call(this,x);
case 2:
return list__2.call(this,x,y);
case 3:
return list__3.call(this,x,y,z);
default:
return list__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
list.cljs$lang$maxFixedArity = 3;
list.cljs$lang$applyTo = list__4.cljs$lang$applyTo;
list.cljs$lang$arity$0 = list__0;
list.cljs$lang$arity$1 = list__1;
list.cljs$lang$arity$2 = list__2;
list.cljs$lang$arity$3 = list__3;
list.cljs$lang$arity$variadic = list__4.cljs$lang$arity$variadic;
return list;
})()
;

goog.provide('cljs.core.Cons');

/**
* @constructor
*/
cljs.core.Cons = (function (meta,first,rest,__hash){
this.meta = meta;
this.first = first;
this.rest = rest;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 65405164;
})
cljs.core.Cons.cljs$lang$type = true;
cljs.core.Cons.cljs$lang$ctorPrSeq = (function (this__5466__auto__){
return cljs.core.list.call(null,"cljs.core/Cons");
});
cljs.core.Cons.cljs$lang$ctorPrWriter = (function (this__5466__auto__,writer__5467__auto__){
return cljs.core._write.call(null,writer__5467__auto__,"cljs.core/Cons");
});
cljs.core.Cons.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__74604 = this;
var h__5347__auto____74605 = this__74604.__hash;
if(!((h__5347__auto____74605 == null)))
{return h__5347__auto____74605;
} else
{var h__5347__auto____74606 = cljs.core.hash_coll.call(null,coll);
this__74604.__hash = h__5347__auto____74606;
return h__5347__auto____74606;
}
});
cljs.core.Cons.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__74607 = this;
if((this__74607.rest == null))
{return null;
} else
{return cljs.core._seq.call(null,this__74607.rest);
}
});
cljs.core.Cons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__74608 = this;
return (new cljs.core.Cons(null,o,coll,this__74608.__hash));
});
cljs.core.Cons.prototype.toString = (function (){
var this__74609 = this;
var this__74610 = this;
return cljs.core.pr_str.call(null,this__74610);
});
cljs.core.Cons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__74611 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__74612 = this;
return this__74612.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__74613 = this;
if((this__74613.rest == null))
{return cljs.core.List.EMPTY;
} else
{return this__74613.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__74614 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__74615 = this;
return (new cljs.core.Cons(meta,this__74615.first,this__74615.rest,this__74615.__hash));
});
cljs.core.Cons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__74616 = this;
return this__74616.meta;
});
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__74617 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__74617.meta);
});
cljs.core.Cons;
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,coll){
if((function (){var or__3824__auto____74622 = (coll == null);
if(or__3824__auto____74622)
{return or__3824__auto____74622;
} else
{var G__74623__74624 = coll;
if(G__74623__74624)
{if((function (){var or__3824__auto____74625 = (G__74623__74624.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____74625)
{return or__3824__auto____74625;
} else
{return G__74623__74624.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__74623__74624.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__74623__74624);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__74623__74624);
}
}
})())
{return (new cljs.core.Cons(null,x,coll,null));
} else
{return (new cljs.core.Cons(null,x,cljs.core.seq.call(null,coll),null));
}
});
cljs.core.list_QMARK_ = (function list_QMARK_(x){
var G__74629__74630 = x;
if(G__74629__74630)
{if((function (){var or__3824__auto____74631 = (G__74629__74630.cljs$lang$protocol_mask$partition0$ & 33554432);
if(or__3824__auto____74631)
{return or__3824__auto____74631;
} else
{return G__74629__74630.cljs$core$IList$;
}
})())
{return true;
} else
{if((!G__74629__74630.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IList,G__74629__74630);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IList,G__74629__74630);
}
});
(cljs.core.IReduce["string"] = true);
(cljs.core._reduce["string"] = (function() {
var G__74632 = null;
var G__74632__2 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__74632__3 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__74632 = function(string,f,start){
switch(arguments.length){
case 2:
return G__74632__2.call(this,string,f);
case 3:
return G__74632__3.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__74632;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__74633 = null;
var G__74633__2 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__74633__3 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__74633 = function(string,k,not_found){
switch(arguments.length){
case 2:
return G__74633__2.call(this,string,k);
case 3:
return G__74633__3.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__74633;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__74634 = null;
var G__74634__2 = (function (string,n){
if((n < cljs.core._count.call(null,string)))
{return string.charAt(n);
} else
{return null;
}
});
var G__74634__3 = (function (string,n,not_found){
if((n < cljs.core._count.call(null,string)))
{return string.charAt(n);
} else
{return not_found;
}
});
G__74634 = function(string,n,not_found){
switch(arguments.length){
case 2:
return G__74634__2.call(this,string,n);
case 3:
return G__74634__3.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__74634;
})()
);
(cljs.core.ICounted["string"] = true);
(cljs.core._count["string"] = (function (s){
return s.length;
}));
(cljs.core.ISeqable["string"] = true);
(cljs.core._seq["string"] = (function (string){
return cljs.core.prim_seq.call(null,string,0);
}));
(cljs.core.IHash["string"] = true);
(cljs.core._hash["string"] = (function (o){
return goog.string.hashCode(o);
}));

goog.provide('cljs.core.Keyword');

/**
* @constructor
*/
cljs.core.Keyword = (function (k){
this.k = k;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 1;
})
cljs.core.Keyword.cljs$lang$type = true;
cljs.core.Keyword.cljs$lang$ctorPrSeq = (function (this__5466__auto__){
return cljs.core.list.call(null,"cljs.core/Keyword");
});
cljs.core.Keyword.cljs$lang$ctorPrWriter = (function (this__5466__auto__,writer__5467__auto__){
return cljs.core._write.call(null,writer__5467__auto__,"cljs.core/Keyword");
});
cljs.core.Keyword.prototype.call = (function() {
var G__74646 = null;
var G__74646__2 = (function (this_sym74637,coll){
var this__74639 = this;
var this_sym74637__74640 = this;
var ___74641 = this_sym74637__74640;
if((coll == null))
{return null;
} else
{var strobj__74642 = coll.strobj;
if((strobj__74642 == null))
{return cljs.core._lookup.call(null,coll,this__74639.k,null);
} else
{return (strobj__74642[this__74639.k]);
}
}
});
var G__74646__3 = (function (this_sym74638,coll,not_found){
var this__74639 = this;
var this_sym74638__74643 = this;
var ___74644 = this_sym74638__74643;
if((coll == null))
{return not_found;
} else
{return cljs.core._lookup.call(null,coll,this__74639.k,not_found);
}
});
G__74646 = function(this_sym74638,coll,not_found){
switch(arguments.length){
case 2:
return G__74646__2.call(this,this_sym74638,coll);
case 3:
return G__74646__3.call(this,this_sym74638,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__74646;
})()
;
cljs.core.Keyword.prototype.apply = (function (this_sym74635,args74636){
var this__74645 = this;
return this_sym74635.call.apply(this_sym74635,[this_sym74635].concat(args74636.slice()));
});
cljs.core.Keyword;
String.prototype.cljs$core$IFn$ = true;
String.prototype.call = (function() {
var G__74655 = null;
var G__74655__2 = (function (this_sym74649,coll){
var this_sym74649__74651 = this;
var this__74652 = this_sym74649__74651;
return cljs.core._lookup.call(null,coll,this__74652.toString(),null);
});
var G__74655__3 = (function (this_sym74650,coll,not_found){
var this_sym74650__74653 = this;
var this__74654 = this_sym74650__74653;
return cljs.core._lookup.call(null,coll,this__74654.toString(),not_found);
});
G__74655 = function(this_sym74650,coll,not_found){
switch(arguments.length){
case 2:
return G__74655__2.call(this,this_sym74650,coll);
case 3:
return G__74655__3.call(this,this_sym74650,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__74655;
})()
;
String.prototype.apply = (function (this_sym74647,args74648){
return this_sym74647.call.apply(this_sym74647,[this_sym74647].concat(args74648.slice()));
});
String.prototype.apply = (function (s,args){
if((cljs.core.count.call(null,args) < 2))
{return cljs.core._lookup.call(null,(args[0]),s,null);
} else
{return cljs.core._lookup.call(null,(args[0]),s,(args[1]));
}
});
cljs.core.lazy_seq_value = (function lazy_seq_value(lazy_seq){
var x__74657 = lazy_seq.x;
if(lazy_seq.realized)
{return x__74657;
} else
{lazy_seq.x = x__74657.call(null);
lazy_seq.realized = true;
return lazy_seq.x;
}
});

goog.provide('cljs.core.LazySeq');

/**
* @constructor
*/
cljs.core.LazySeq = (function (meta,realized,x,__hash){
this.meta = meta;
this.realized = realized;
this.x = x;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850700;
})
cljs.core.LazySeq.cljs$lang$type = true;
cljs.core.LazySeq.cljs$lang$ctorPrSeq = (function (this__5466__auto__){
return cljs.core.list.call(null,"cljs.core/LazySeq");
});
cljs.core.LazySeq.cljs$lang$ctorPrWriter = (function (this__5466__auto__,writer__5467__auto__){
return cljs.core._write.call(null,writer__5467__auto__,"cljs.core/LazySeq");
});
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__74658 = this;
var h__5347__auto____74659 = this__74658.__hash;
if(!((h__5347__auto____74659 == null)))
{return h__5347__auto____74659;
} else
{var h__5347__auto____74660 = cljs.core.hash_coll.call(null,coll);
this__74658.__hash = h__5347__auto____74660;
return h__5347__auto____74660;
}
});
cljs.core.LazySeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__74661 = this;
return cljs.core._seq.call(null,coll.cljs$core$ISeq$_rest$arity$1(coll));
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__74662 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.toString = (function (){
var this__74663 = this;
var this__74664 = this;
return cljs.core.pr_str.call(null,this__74664);
});
cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__74665 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__74666 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__74667 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__74668 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__74669 = this;
return (new cljs.core.LazySeq(meta,this__74669.realized,this__74669.x,this__74669.__hash));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__74670 = this;
return this__74670.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__74671 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__74671.meta);
});
cljs.core.LazySeq;

goog.provide('cljs.core.ChunkBuffer');

/**
* @constructor
*/
cljs.core.ChunkBuffer = (function (buf,end){
this.buf = buf;
this.end = end;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2;
})
cljs.core.ChunkBuffer.cljs$lang$type = true;
cljs.core.ChunkBuffer.cljs$lang$ctorPrSeq = (function (this__5466__auto__){
return cljs.core.list.call(null,"cljs.core/ChunkBuffer");
});
cljs.core.ChunkBuffer.cljs$lang$ctorPrWriter = (function (this__5466__auto__,writer__5467__auto__){
return cljs.core._write.call(null,writer__5467__auto__,"cljs.core/ChunkBuffer");
});
cljs.core.ChunkBuffer.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__74672 = this;
return this__74672.end;
});
cljs.core.ChunkBuffer.prototype.add = (function (o){
var this__74673 = this;
var ___74674 = this;
(this__74673.buf[this__74673.end] = o);
return this__74673.end = (this__74673.end + 1);
});
cljs.core.ChunkBuffer.prototype.chunk = (function (o){
var this__74675 = this;
var ___74676 = this;
var ret__74677 = (new cljs.core.ArrayChunk(this__74675.buf,0,this__74675.end));
this__74675.buf = null;
return ret__74677;
});
cljs.core.ChunkBuffer;
cljs.core.chunk_buffer = (function chunk_buffer(capacity){
return (new cljs.core.ChunkBuffer(cljs.core.make_array.call(null,capacity),0));
});

goog.provide('cljs.core.ArrayChunk');

/**
* @constructor
*/
cljs.core.ArrayChunk = (function (arr,off,end){
this.arr = arr;
this.off = off;
this.end = end;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 524306;
})
cljs.core.ArrayChunk.cljs$lang$type = true;
cljs.core.ArrayChunk.cljs$lang$ctorPrSeq = (function (this__5466__auto__){
return cljs.core.list.call(null,"cljs.core/ArrayChunk");
});
cljs.core.ArrayChunk.cljs$lang$ctorPrWriter = (function (this__5466__auto__,writer__5467__auto__){
return cljs.core._write.call(null,writer__5467__auto__,"cljs.core/ArrayChunk");
});
cljs.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__74678 = this;
return cljs.core.array_reduce.call(null,this__74678.arr,f,(this__74678.arr[this__74678.off]),(this__74678.off + 1));
});
cljs.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__74679 = this;
return cljs.core.array_reduce.call(null,this__74679.arr,f,start,this__74679.off);
});
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$ = true;
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$_drop_first$arity$1 = (function (coll){
var this__74680 = this;
if((this__74680.off === this__74680.end))
{throw (new Error("-drop-first of empty chunk"));
} else
{return (new cljs.core.ArrayChunk(this__74680.arr,(this__74680.off + 1),this__74680.end));
}
});
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,i){
var this__74681 = this;
return (this__74681.arr[(this__74681.off + i)]);
});
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,i,not_found){
var this__74682 = this;
if((function (){var and__3822__auto____74683 = (i >= 0);
if(and__3822__auto____74683)
{return (i < (this__74682.end - this__74682.off));
} else
{return and__3822__auto____74683;
}
})())
{return (this__74682.arr[(this__74682.off + i)]);
} else
{return not_found;
}
});
cljs.core.ArrayChunk.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__74684 = this;
return (this__74684.end - this__74684.off);
});
cljs.core.ArrayChunk;
cljs.core.array_chunk = (function() {
var array_chunk = null;
var array_chunk__1 = (function (arr){
return array_chunk.call(null,arr,0,arr.length);
});
var array_chunk__2 = (function (arr,off){
return array_chunk.call(null,arr,off,arr.length);
});
var array_chunk__3 = (function (arr,off,end){
return (new cljs.core.ArrayChunk(arr,off,end));
});
array_chunk = function(arr,off,end){
switch(arguments.length){
case 1:
return array_chunk__1.call(this,arr);
case 2:
return array_chunk__2.call(this,arr,off);
case 3:
return array_chunk__3.call(this,arr,off,end);
}
throw('Invalid arity: ' + arguments.length);
};
array_chunk.cljs$lang$arity$1 = array_chunk__1;
array_chunk.cljs$lang$arity$2 = array_chunk__2;
array_chunk.cljs$lang$arity$3 = array_chunk__3;
return array_chunk;
})()
;

goog.provide('cljs.core.ChunkedCons');

/**
* @constructor
*/
cljs.core.ChunkedCons = (function (chunk,more,meta,__hash){
this.chunk = chunk;
this.more = more;
this.meta = meta;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 31850604;
this.cljs$lang$protocol_mask$partition1$ = 1536;
})
cljs.core.ChunkedCons.cljs$lang$type = true;
cljs.core.ChunkedCons.cljs$lang$ctorPrSeq = (function (this__5466__auto__){
return cljs.core.list.call(null,"cljs.core/ChunkedCons");
});
cljs.core.ChunkedCons.cljs$lang$ctorPrWriter = (function (this__5466__auto__,writer__5467__auto__){
return cljs.core._write.call(null,writer__5467__auto__,"cljs.core/ChunkedCons");
});
cljs.core.ChunkedCons.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__74685 = this;
var h__5347__auto____74686 = this__74685.__hash;
if(!((h__5347__auto____74686 == null)))
{return h__5347__auto____74686;
} else
{var h__5347__auto____74687 = cljs.core.hash_coll.call(null,coll);
this__74685.__hash = h__5347__auto____74687;
return h__5347__auto____74687;
}
});
cljs.core.ChunkedCons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this$,o){
var this__74688 = this;
return cljs.core.cons.call(null,o,this$);
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__74689 = this;
return coll;
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__74690 = this;
return cljs.core._nth.call(null,this__74690.chunk,0);
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__74691 = this;
if((cljs.core._count.call(null,this__74691.chunk) > 1))
{return (new cljs.core.ChunkedCons(cljs.core._drop_first.call(null,this__74691.chunk),this__74691.more,this__74691.meta,null));
} else
{if((this__74691.more == null))
{return cljs.core.List.EMPTY;
} else
{return this__74691.more;
}
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var this__74692 = this;
if((this__74692.more == null))
{return null;
} else
{return this__74692.more;
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__74693 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ChunkedCons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var this__74694 = this;
return (new cljs.core.ChunkedCons(this__74694.chunk,this__74694.more,m,this__74694.__hash));
});
cljs.core.ChunkedCons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__74695 = this;
return this__74695.meta;
});
cljs.core.ChunkedCons.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__74696 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__74696.meta);
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var this__74697 = this;
return this__74697.chunk;
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var this__74698 = this;
if((this__74698.more == null))
{return cljs.core.List.EMPTY;
} else
{return this__74698.more;
}
});
cljs.core.ChunkedCons;
cljs.core.chunk_cons = (function chunk_cons(chunk,rest){
if((cljs.core._count.call(null,chunk) === 0))
{return rest;
} else
{return (new cljs.core.ChunkedCons(chunk,rest,null,null));
}
});
cljs.core.chunk_append = (function chunk_append(b,x){
return b.add(x);
});
cljs.core.chunk = (function chunk(b){
return b.chunk();
});
cljs.core.chunk_first = (function chunk_first(s){
return cljs.core._chunked_first.call(null,s);
});
cljs.core.chunk_rest = (function chunk_rest(s){
return cljs.core._chunked_rest.call(null,s);
});
cljs.core.chunk_next = (function chunk_next(s){
if((function (){var G__74702__74703 = s;
if(G__74702__74703)
{if((function (){var or__3824__auto____74704 = (G__74702__74703.cljs$lang$protocol_mask$partition1$ & 1024);
if(or__3824__auto____74704)
{return or__3824__auto____74704;
} else
{return G__74702__74703.cljs$core$IChunkedNext$;
}
})())
{return true;
} else
{if((!G__74702__74703.cljs$lang$protocol_mask$partition1$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedNext,G__74702__74703);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedNext,G__74702__74703);
}
})())
{return cljs.core._chunked_next.call(null,s);
} else
{return cljs.core.seq.call(null,cljs.core._chunked_rest.call(null,s));
}
});
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__74707 = [];
var s__74708 = s;
while(true){
if(cljs.core.seq.call(null,s__74708))
{ary__74707.push(cljs.core.first.call(null,s__74708));
{
var G__74709 = cljs.core.next.call(null,s__74708);
s__74708 = G__74709;
continue;
}
} else
{return ary__74707;
}
break;
}
});
/**
* Returns a (potentially-ragged) 2-dimensional array
* containing the contents of coll.
*/
cljs.core.to_array_2d = (function to_array_2d(coll){
var ret__74713 = cljs.core.make_array.call(null,cljs.core.count.call(null,coll));
var i__74714 = 0;
var xs__74715 = cljs.core.seq.call(null,coll);
while(true){
if(xs__74715)
{(ret__74713[i__74714] = cljs.core.to_array.call(null,cljs.core.first.call(null,xs__74715)));
{
var G__74716 = (i__74714 + 1);
var G__74717 = cljs.core.next.call(null,xs__74715);
i__74714 = G__74716;
xs__74715 = G__74717;
continue;
}
} else
{}
break;
}
return ret__74713;
});
cljs.core.long_array = (function() {
var long_array = null;
var long_array__1 = (function (size_or_seq){
if(cljs.core.number_QMARK_.call(null,size_or_seq))
{return long_array.call(null,size_or_seq,null);
} else
{if(cljs.core.seq_QMARK_.call(null,size_or_seq))
{return cljs.core.into_array.call(null,size_or_seq);
} else
{if("\uFDD0'else")
{throw (new Error("long-array called with something other than size or ISeq"));
} else
{return null;
}
}
}
});
var long_array__2 = (function (size,init_val_or_seq){
var a__74725 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__74726 = cljs.core.seq.call(null,init_val_or_seq);
var i__74727 = 0;
var s__74728 = s__74726;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____74729 = s__74728;
if(and__3822__auto____74729)
{return (i__74727 < size);
} else
{return and__3822__auto____74729;
}
})()))
{(a__74725[i__74727] = cljs.core.first.call(null,s__74728));
{
var G__74732 = (i__74727 + 1);
var G__74733 = cljs.core.next.call(null,s__74728);
i__74727 = G__74732;
s__74728 = G__74733;
continue;
}
} else
{return a__74725;
}
break;
}
} else
{var n__5693__auto____74730 = size;
var i__74731 = 0;
while(true){
if((i__74731 < n__5693__auto____74730))
{(a__74725[i__74731] = init_val_or_seq);
{
var G__74734 = (i__74731 + 1);
i__74731 = G__74734;
continue;
}
} else
{}
break;
}
return a__74725;
}
});
long_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return long_array__1.call(this,size);
case 2:
return long_array__2.call(this,size,init_val_or_seq);
}
throw('Invalid arity: ' + arguments.length);
};
long_array.cljs$lang$arity$1 = long_array__1;
long_array.cljs$lang$arity$2 = long_array__2;
return long_array;
})()
;
cljs.core.double_array = (function() {
var double_array = null;
var double_array__1 = (function (size_or_seq){
if(cljs.core.number_QMARK_.call(null,size_or_seq))
{return double_array.call(null,size_or_seq,null);
} else
{if(cljs.core.seq_QMARK_.call(null,size_or_seq))
{return cljs.core.into_array.call(null,size_or_seq);
} else
{if("\uFDD0'else")
{throw (new Error("double-array called with something other than size or ISeq"));
} else
{return null;
}
}
}
});
var double_array__2 = (function (size,init_val_or_seq){
var a__74742 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__74743 = cljs.core.seq.call(null,init_val_or_seq);
var i__74744 = 0;
var s__74745 = s__74743;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____74746 = s__74745;
if(and__3822__auto____74746)
{return (i__74744 < size);
} else
{return and__3822__auto____74746;
}
})()))
{(a__74742[i__74744] = cljs.core.first.call(null,s__74745));
{
var G__74749 = (i__74744 + 1);
var G__74750 = cljs.core.next.call(null,s__74745);
i__74744 = G__74749;
s__74745 = G__74750;
continue;
}
} else
{return a__74742;
}
break;
}
} else
{var n__5693__auto____74747 = size;
var i__74748 = 0;
while(true){
if((i__74748 < n__5693__auto____74747))
{(a__74742[i__74748] = init_val_or_seq);
{
var G__74751 = (i__74748 + 1);
i__74748 = G__74751;
continue;
}
} else
{}
break;
}
return a__74742;
}
});
double_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return double_array__1.call(this,size);
case 2:
return double_array__2.call(this,size,init_val_or_seq);
}
throw('Invalid arity: ' + arguments.length);
};
double_array.cljs$lang$arity$1 = double_array__1;
double_array.cljs$lang$arity$2 = double_array__2;
return double_array;
})()
;
cljs.core.object_array = (function() {
var object_array = null;
var object_array__1 = (function (size_or_seq){
if(cljs.core.number_QMARK_.call(null,size_or_seq))
{return object_array.call(null,size_or_seq,null);
} else
{if(cljs.core.seq_QMARK_.call(null,size_or_seq))
{return cljs.core.into_array.call(null,size_or_seq);
} else
{if("\uFDD0'else")
{throw (new Error("object-array called with something other than size or ISeq"));
} else
{return null;
}
}
}
});
var object_array__2 = (function (size,init_val_or_seq){
var a__74759 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__74760 = cljs.core.seq.call(null,init_val_or_seq);
var i__74761 = 0;
var s__74762 = s__74760;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____74763 = s__74762;
if(and__3822__auto____74763)
{return (i__74761 < size);
} else
{return and__3822__auto____74763;
}
})()))
{(a__74759[i__74761] = cljs.core.first.call(null,s__74762));
{
var G__74766 = (i__74761 + 1);
var G__74767 = cljs.core.next.call(null,s__74762);
i__74761 = G__74766;
s__74762 = G__74767;
continue;
}
} else
{return a__74759;
}
break;
}
} else
{var n__5693__auto____74764 = size;
var i__74765 = 0;
while(true){
if((i__74765 < n__5693__auto____74764))
{(a__74759[i__74765] = init_val_or_seq);
{
var G__74768 = (i__74765 + 1);
i__74765 = G__74768;
continue;
}
} else
{}
break;
}
return a__74759;
}
});
object_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return object_array__1.call(this,size);
case 2:
return object_array__2.call(this,size,init_val_or_seq);
}
throw('Invalid arity: ' + arguments.length);
};
object_array.cljs$lang$arity$1 = object_array__1;
object_array.cljs$lang$arity$2 = object_array__2;
return object_array;
})()
;
cljs.core.bounded_count = (function bounded_count(s,n){
if(cljs.core.counted_QMARK_.call(null,s))
{return cljs.core.count.call(null,s);
} else
{var s__74773 = s;
var i__74774 = n;
var sum__74775 = 0;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____74776 = (i__74774 > 0);
if(and__3822__auto____74776)
{return cljs.core.seq.call(null,s__74773);
} else
{return and__3822__auto____74776;
}
})()))
{{
var G__74777 = cljs.core.next.call(null,s__74773);
var G__74778 = (i__74774 - 1);
var G__74779 = (sum__74775 + 1);
s__74773 = G__74777;
i__74774 = G__74778;
sum__74775 = G__74779;
continue;
}
} else
{return sum__74775;
}
break;
}
}
});
cljs.core.spread = (function spread(arglist){
if((arglist == null))
{return null;
} else
{if((cljs.core.next.call(null,arglist) == null))
{return cljs.core.seq.call(null,cljs.core.first.call(null,arglist));
} else
{if("\uFDD0'else")
{return cljs.core.cons.call(null,cljs.core.first.call(null,arglist),spread.call(null,cljs.core.next.call(null,arglist)));
} else
{return null;
}
}
}
});
/**
* Returns a lazy seq representing the concatenation of the elements in the supplied colls.
* @param {...*} var_args
*/
cljs.core.concat = (function() {
var concat = null;
var concat__0 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
}),null));
});
var concat__1 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
}),null));
});
var concat__2 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__74784 = cljs.core.seq.call(null,x);
if(s__74784)
{if(cljs.core.chunked_seq_QMARK_.call(null,s__74784))
{return cljs.core.chunk_cons.call(null,cljs.core.chunk_first.call(null,s__74784),concat.call(null,cljs.core.chunk_rest.call(null,s__74784),y));
} else
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__74784),concat.call(null,cljs.core.rest.call(null,s__74784),y));
}
} else
{return y;
}
}),null));
});
var concat__3 = (function() { 
var G__74788__delegate = function (x,y,zs){
var cat__74787 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__74786 = cljs.core.seq.call(null,xys);
if(xys__74786)
{if(cljs.core.chunked_seq_QMARK_.call(null,xys__74786))
{return cljs.core.chunk_cons.call(null,cljs.core.chunk_first.call(null,xys__74786),cat.call(null,cljs.core.chunk_rest.call(null,xys__74786),zs));
} else
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__74786),cat.call(null,cljs.core.rest.call(null,xys__74786),zs));
}
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
}),null));
});
return cat__74787.call(null,concat.call(null,x,y),zs);
};
var G__74788 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__74788__delegate.call(this, x, y, zs);
};
G__74788.cljs$lang$maxFixedArity = 2;
G__74788.cljs$lang$applyTo = (function (arglist__74789){
var x = cljs.core.first(arglist__74789);
var y = cljs.core.first(cljs.core.next(arglist__74789));
var zs = cljs.core.rest(cljs.core.next(arglist__74789));
return G__74788__delegate(x, y, zs);
});
G__74788.cljs$lang$arity$variadic = G__74788__delegate;
return G__74788;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case 0:
return concat__0.call(this);
case 1:
return concat__1.call(this,x);
case 2:
return concat__2.call(this,x,y);
default:
return concat__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__3.cljs$lang$applyTo;
concat.cljs$lang$arity$0 = concat__0;
concat.cljs$lang$arity$1 = concat__1;
concat.cljs$lang$arity$2 = concat__2;
concat.cljs$lang$arity$variadic = concat__3.cljs$lang$arity$variadic;
return concat;
})()
;
/**
* Creates a new list containing the items prepended to the rest, the
* last of which will be treated as a sequence.
* @param {...*} var_args
*/
cljs.core.list_STAR_ = (function() {
var list_STAR_ = null;
var list_STAR___1 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___2 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___3 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___4 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___5 = (function() { 
var G__74790__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__74790 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__74790__delegate.call(this, a, b, c, d, more);
};
G__74790.cljs$lang$maxFixedArity = 4;
G__74790.cljs$lang$applyTo = (function (arglist__74791){
var a = cljs.core.first(arglist__74791);
var b = cljs.core.first(cljs.core.next(arglist__74791));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__74791)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__74791))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__74791))));
return G__74790__delegate(a, b, c, d, more);
});
G__74790.cljs$lang$arity$variadic = G__74790__delegate;
return G__74790;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return list_STAR___1.call(this,a);
case 2:
return list_STAR___2.call(this,a,b);
case 3:
return list_STAR___3.call(this,a,b,c);
case 4:
return list_STAR___4.call(this,a,b,c,d);
default:
return list_STAR___5.cljs$lang$arity$variadic(a,b,c,d, cljs.core.array_seq(arguments, 4));
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___5.cljs$lang$applyTo;
list_STAR_.cljs$lang$arity$1 = list_STAR___1;
list_STAR_.cljs$lang$arity$2 = list_STAR___2;
list_STAR_.cljs$lang$arity$3 = list_STAR___3;
list_STAR_.cljs$lang$arity$4 = list_STAR___4;
list_STAR_.cljs$lang$arity$variadic = list_STAR___5.cljs$lang$arity$variadic;
return list_STAR_;
})()
;
cljs.core.transient$ = (function transient$(coll){
return cljs.core._as_transient.call(null,coll);
});
cljs.core.persistent_BANG_ = (function persistent_BANG_(tcoll){
return cljs.core._persistent_BANG_.call(null,tcoll);
});
cljs.core.conj_BANG_ = (function conj_BANG_(tcoll,val){
return cljs.core._conj_BANG_.call(null,tcoll,val);
});
cljs.core.assoc_BANG_ = (function assoc_BANG_(tcoll,key,val){
return cljs.core._assoc_BANG_.call(null,tcoll,key,val);
});
cljs.core.dissoc_BANG_ = (function dissoc_BANG_(tcoll,key){
return cljs.core._dissoc_BANG_.call(null,tcoll,key);
});
cljs.core.pop_BANG_ = (function pop_BANG_(tcoll){
return cljs.core._pop_BANG_.call(null,tcoll);
});
cljs.core.disj_BANG_ = (function disj_BANG_(tcoll,val){
return cljs.core._disjoin_BANG_.call(null,tcoll,val);
});
cljs.core.apply_to = (function apply_to(f,argc,args){
var args__74833 = cljs.core.seq.call(null,args);
if((argc === 0))
{return f.call(null);
} else
{var a__74834 = cljs.core._first.call(null,args__74833);
var args__74835 = cljs.core._rest.call(null,args__74833);
if((argc === 1))
{if(f.cljs$lang$arity$1)
{return f.cljs$lang$arity$1(a__74834);
} else
{return f.call(null,a__74834);
}
} else
{var b__74836 = cljs.core._first.call(null,args__74835);
var args__74837 = cljs.core._rest.call(null,args__74835);
if((argc === 2))
{if(f.cljs$lang$arity$2)
{return f.cljs$lang$arity$2(a__74834,b__74836);
} else
{return f.call(null,a__74834,b__74836);
}
} else
{var c__74838 = cljs.core._first.call(null,args__74837);
var args__74839 = cljs.core._rest.call(null,args__74837);
if((argc === 3))
{if(f.cljs$lang$arity$3)
{return f.cljs$lang$arity$3(a__74834,b__74836,c__74838);
} else
{return f.call(null,a__74834,b__74836,c__74838);
}
} else
{var d__74840 = cljs.core._first.call(null,args__74839);
var args__74841 = cljs.core._rest.call(null,args__74839);
if((argc === 4))
{if(f.cljs$lang$arity$4)
{return f.cljs$lang$arity$4(a__74834,b__74836,c__74838,d__74840);
} else
{return f.call(null,a__74834,b__74836,c__74838,d__74840);
}
} else
{var e__74842 = cljs.core._first.call(null,args__74841);
var args__74843 = cljs.core._rest.call(null,args__74841);
if((argc === 5))
{if(f.cljs$lang$arity$5)
{return f.cljs$lang$arity$5(a__74834,b__74836,c__74838,d__74840,e__74842);
} else
{return f.call(null,a__74834,b__74836,c__74838,d__74840,e__74842);
}
} else
{var f__74844 = cljs.core._first.call(null,args__74843);
var args__74845 = cljs.core._rest.call(null,args__74843);
if((argc === 6))
{if(f__74844.cljs$lang$arity$6)
{return f__74844.cljs$lang$arity$6(a__74834,b__74836,c__74838,d__74840,e__74842,f__74844);
} else
{return f__74844.call(null,a__74834,b__74836,c__74838,d__74840,e__74842,f__74844);
}
} else
{var g__74846 = cljs.core._first.call(null,args__74845);
var args__74847 = cljs.core._rest.call(null,args__74845);
if((argc === 7))
{if(f__74844.cljs$lang$arity$7)
{return f__74844.cljs$lang$arity$7(a__74834,b__74836,c__74838,d__74840,e__74842,f__74844,g__74846);
} else
{return f__74844.call(null,a__74834,b__74836,c__74838,d__74840,e__74842,f__74844,g__74846);
}
} else
{var h__74848 = cljs.core._first.call(null,args__74847);
var args__74849 = cljs.core._rest.call(null,args__74847);
if((argc === 8))
{if(f__74844.cljs$lang$arity$8)
{return f__74844.cljs$lang$arity$8(a__74834,b__74836,c__74838,d__74840,e__74842,f__74844,g__74846,h__74848);
} else
{return f__74844.call(null,a__74834,b__74836,c__74838,d__74840,e__74842,f__74844,g__74846,h__74848);
}
} else
{var i__74850 = cljs.core._first.call(null,args__74849);
var args__74851 = cljs.core._rest.call(null,args__74849);
if((argc === 9))
{if(f__74844.cljs$lang$arity$9)
{return f__74844.cljs$lang$arity$9(a__74834,b__74836,c__74838,d__74840,e__74842,f__74844,g__74846,h__74848,i__74850);
} else
{return f__74844.call(null,a__74834,b__74836,c__74838,d__74840,e__74842,f__74844,g__74846,h__74848,i__74850);
}
} else
{var j__74852 = cljs.core._first.call(null,args__74851);
var args__74853 = cljs.core._rest.call(null,args__74851);
if((argc === 10))
{if(f__74844.cljs$lang$arity$10)
{return f__74844.cljs$lang$arity$10(a__74834,b__74836,c__74838,d__74840,e__74842,f__74844,g__74846,h__74848,i__74850,j__74852);
} else
{return f__74844.call(null,a__74834,b__74836,c__74838,d__74840,e__74842,f__74844,g__74846,h__74848,i__74850,j__74852);
}
} else
{var k__74854 = cljs.core._first.call(null,args__74853);
var args__74855 = cljs.core._rest.call(null,args__74853);
if((argc === 11))
{if(f__74844.cljs$lang$arity$11)
{return f__74844.cljs$lang$arity$11(a__74834,b__74836,c__74838,d__74840,e__74842,f__74844,g__74846,h__74848,i__74850,j__74852,k__74854);
} else
{return f__74844.call(null,a__74834,b__74836,c__74838,d__74840,e__74842,f__74844,g__74846,h__74848,i__74850,j__74852,k__74854);
}
} else
{var l__74856 = cljs.core._first.call(null,args__74855);
var args__74857 = cljs.core._rest.call(null,args__74855);
if((argc === 12))
{if(f__74844.cljs$lang$arity$12)
{return f__74844.cljs$lang$arity$12(a__74834,b__74836,c__74838,d__74840,e__74842,f__74844,g__74846,h__74848,i__74850,j__74852,k__74854,l__74856);
} else
{return f__74844.call(null,a__74834,b__74836,c__74838,d__74840,e__74842,f__74844,g__74846,h__74848,i__74850,j__74852,k__74854,l__74856);
}
} else
{var m__74858 = cljs.core._first.call(null,args__74857);
var args__74859 = cljs.core._rest.call(null,args__74857);
if((argc === 13))
{if(f__74844.cljs$lang$arity$13)
{return f__74844.cljs$lang$arity$13(a__74834,b__74836,c__74838,d__74840,e__74842,f__74844,g__74846,h__74848,i__74850,j__74852,k__74854,l__74856,m__74858);
} else
{return f__74844.call(null,a__74834,b__74836,c__74838,d__74840,e__74842,f__74844,g__74846,h__74848,i__74850,j__74852,k__74854,l__74856,m__74858);
}
} else
{var n__74860 = cljs.core._first.call(null,args__74859);
var args__74861 = cljs.core._rest.call(null,args__74859);
if((argc === 14))
{if(f__74844.cljs$lang$arity$14)
{return f__74844.cljs$lang$arity$14(a__74834,b__74836,c__74838,d__74840,e__74842,f__74844,g__74846,h__74848,i__74850,j__74852,k__74854,l__74856,m__74858,n__74860);
} else
{return f__74844.call(null,a__74834,b__74836,c__74838,d__74840,e__74842,f__74844,g__74846,h__74848,i__74850,j__74852,k__74854,l__74856,m__74858,n__74860);
}
} else
{var o__74862 = cljs.core._first.call(null,args__74861);
var args__74863 = cljs.core._rest.call(null,args__74861);
if((argc === 15))
{if(f__74844.cljs$lang$arity$15)
{return f__74844.cljs$lang$arity$15(a__74834,b__74836,c__74838,d__74840,e__74842,f__74844,g__74846,h__74848,i__74850,j__74852,k__74854,l__74856,m__74858,n__74860,o__74862);
} else
{return f__74844.call(null,a__74834,b__74836,c__74838,d__74840,e__74842,f__74844,g__74846,h__74848,i__74850,j__74852,k__74854,l__74856,m__74858,n__74860,o__74862);
}
} else
{var p__74864 = cljs.core._first.call(null,args__74863);
var args__74865 = cljs.core._rest.call(null,args__74863);
if((argc === 16))
{if(f__74844.cljs$lang$arity$16)
{return f__74844.cljs$lang$arity$16(a__74834,b__74836,c__74838,d__74840,e__74842,f__74844,g__74846,h__74848,i__74850,j__74852,k__74854,l__74856,m__74858,n__74860,o__74862,p__74864);
} else
{return f__74844.call(null,a__74834,b__74836,c__74838,d__74840,e__74842,f__74844,g__74846,h__74848,i__74850,j__74852,k__74854,l__74856,m__74858,n__74860,o__74862,p__74864);
}
} else
{var q__74866 = cljs.core._first.call(null,args__74865);
var args__74867 = cljs.core._rest.call(null,args__74865);
if((argc === 17))
{if(f__74844.cljs$lang$arity$17)
{return f__74844.cljs$lang$arity$17(a__74834,b__74836,c__74838,d__74840,e__74842,f__74844,g__74846,h__74848,i__74850,j__74852,k__74854,l__74856,m__74858,n__74860,o__74862,p__74864,q__74866);
} else
{return f__74844.call(null,a__74834,b__74836,c__74838,d__74840,e__74842,f__74844,g__74846,h__74848,i__74850,j__74852,k__74854,l__74856,m__74858,n__74860,o__74862,p__74864,q__74866);
}
} else
{var r__74868 = cljs.core._first.call(null,args__74867);
var args__74869 = cljs.core._rest.call(null,args__74867);
if((argc === 18))
{if(f__74844.cljs$lang$arity$18)
{return f__74844.cljs$lang$arity$18(a__74834,b__74836,c__74838,d__74840,e__74842,f__74844,g__74846,h__74848,i__74850,j__74852,k__74854,l__74856,m__74858,n__74860,o__74862,p__74864,q__74866,r__74868);
} else
{return f__74844.call(null,a__74834,b__74836,c__74838,d__74840,e__74842,f__74844,g__74846,h__74848,i__74850,j__74852,k__74854,l__74856,m__74858,n__74860,o__74862,p__74864,q__74866,r__74868);
}
} else
{var s__74870 = cljs.core._first.call(null,args__74869);
var args__74871 = cljs.core._rest.call(null,args__74869);
if((argc === 19))
{if(f__74844.cljs$lang$arity$19)
{return f__74844.cljs$lang$arity$19(a__74834,b__74836,c__74838,d__74840,e__74842,f__74844,g__74846,h__74848,i__74850,j__74852,k__74854,l__74856,m__74858,n__74860,o__74862,p__74864,q__74866,r__74868,s__74870);
} else
{return f__74844.call(null,a__74834,b__74836,c__74838,d__74840,e__74842,f__74844,g__74846,h__74848,i__74850,j__74852,k__74854,l__74856,m__74858,n__74860,o__74862,p__74864,q__74866,r__74868,s__74870);
}
} else
{var t__74872 = cljs.core._first.call(null,args__74871);
var args__74873 = cljs.core._rest.call(null,args__74871);
if((argc === 20))
{if(f__74844.cljs$lang$arity$20)
{return f__74844.cljs$lang$arity$20(a__74834,b__74836,c__74838,d__74840,e__74842,f__74844,g__74846,h__74848,i__74850,j__74852,k__74854,l__74856,m__74858,n__74860,o__74862,p__74864,q__74866,r__74868,s__74870,t__74872);
} else
{return f__74844.call(null,a__74834,b__74836,c__74838,d__74840,e__74842,f__74844,g__74846,h__74848,i__74850,j__74852,k__74854,l__74856,m__74858,n__74860,o__74862,p__74864,q__74866,r__74868,s__74870,t__74872);
}
} else
{throw (new Error("Only up to 20 arguments supported on functions"));
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
/**
* Applies fn f to the argument list formed by prepending intervening arguments to args.
* First cut.  Not lazy.  Needs to use emitted toApply.
* @param {...*} var_args
*/
cljs.core.apply = (function() {
var apply = null;
var apply__2 = (function (f,args){
var fixed_arity__74888 = f.cljs$lang$maxFixedArity;
if(f.cljs$lang$applyTo)
{var bc__74889 = cljs.core.bounded_count.call(null,args,(fixed_arity__74888 + 1));
if((bc__74889 <= fixed_arity__74888))
{return cljs.core.apply_to.call(null,f,bc__74889,args);
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__3 = (function (f,x,args){
var arglist__74890 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__74891 = f.cljs$lang$maxFixedArity;
if(f.cljs$lang$applyTo)
{var bc__74892 = cljs.core.bounded_count.call(null,arglist__74890,(fixed_arity__74891 + 1));
if((bc__74892 <= fixed_arity__74891))
{return cljs.core.apply_to.call(null,f,bc__74892,arglist__74890);
} else
{return f.cljs$lang$applyTo(arglist__74890);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__74890));
}
});
var apply__4 = (function (f,x,y,args){
var arglist__74893 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__74894 = f.cljs$lang$maxFixedArity;
if(f.cljs$lang$applyTo)
{var bc__74895 = cljs.core.bounded_count.call(null,arglist__74893,(fixed_arity__74894 + 1));
if((bc__74895 <= fixed_arity__74894))
{return cljs.core.apply_to.call(null,f,bc__74895,arglist__74893);
} else
{return f.cljs$lang$applyTo(arglist__74893);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__74893));
}
});
var apply__5 = (function (f,x,y,z,args){
var arglist__74896 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__74897 = f.cljs$lang$maxFixedArity;
if(f.cljs$lang$applyTo)
{var bc__74898 = cljs.core.bounded_count.call(null,arglist__74896,(fixed_arity__74897 + 1));
if((bc__74898 <= fixed_arity__74897))
{return cljs.core.apply_to.call(null,f,bc__74898,arglist__74896);
} else
{return f.cljs$lang$applyTo(arglist__74896);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__74896));
}
});
var apply__6 = (function() { 
var G__74902__delegate = function (f,a,b,c,d,args){
var arglist__74899 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__74900 = f.cljs$lang$maxFixedArity;
if(f.cljs$lang$applyTo)
{var bc__74901 = cljs.core.bounded_count.call(null,arglist__74899,(fixed_arity__74900 + 1));
if((bc__74901 <= fixed_arity__74900))
{return cljs.core.apply_to.call(null,f,bc__74901,arglist__74899);
} else
{return f.cljs$lang$applyTo(arglist__74899);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__74899));
}
};
var G__74902 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__74902__delegate.call(this, f, a, b, c, d, args);
};
G__74902.cljs$lang$maxFixedArity = 5;
G__74902.cljs$lang$applyTo = (function (arglist__74903){
var f = cljs.core.first(arglist__74903);
var a = cljs.core.first(cljs.core.next(arglist__74903));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__74903)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__74903))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__74903)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__74903)))));
return G__74902__delegate(f, a, b, c, d, args);
});
G__74902.cljs$lang$arity$variadic = G__74902__delegate;
return G__74902;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return apply__2.call(this,f,a);
case 3:
return apply__3.call(this,f,a,b);
case 4:
return apply__4.call(this,f,a,b,c);
case 5:
return apply__5.call(this,f,a,b,c,d);
default:
return apply__6.cljs$lang$arity$variadic(f,a,b,c,d, cljs.core.array_seq(arguments, 5));
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__6.cljs$lang$applyTo;
apply.cljs$lang$arity$2 = apply__2;
apply.cljs$lang$arity$3 = apply__3;
apply.cljs$lang$arity$4 = apply__4;
apply.cljs$lang$arity$5 = apply__5;
apply.cljs$lang$arity$variadic = apply__6.cljs$lang$arity$variadic;
return apply;
})()
;
/**
* Returns an object of the same type and value as obj, with
* (apply f (meta obj) args) as its metadata.
* @param {...*} var_args
*/
cljs.core.vary_meta = (function() { 
var vary_meta__delegate = function (obj,f,args){
return cljs.core.with_meta.call(null,obj,cljs.core.apply.call(null,f,cljs.core.meta.call(null,obj),args));
};
var vary_meta = function (obj,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return vary_meta__delegate.call(this, obj, f, args);
};
vary_meta.cljs$lang$maxFixedArity = 2;
vary_meta.cljs$lang$applyTo = (function (arglist__74904){
var obj = cljs.core.first(arglist__74904);
var f = cljs.core.first(cljs.core.next(arglist__74904));
var args = cljs.core.rest(cljs.core.next(arglist__74904));
return vary_meta__delegate(obj, f, args);
});
vary_meta.cljs$lang$arity$variadic = vary_meta__delegate;
return vary_meta;
})()
;
/**
* Same as (not (= obj1 obj2))
* @param {...*} var_args
*/
cljs.core.not_EQ_ = (function() {
var not_EQ_ = null;
var not_EQ___1 = (function (x){
return false;
});
var not_EQ___2 = (function (x,y){
return !(cljs.core._EQ_.call(null,x,y));
});
var not_EQ___3 = (function() { 
var G__74905__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__74905 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__74905__delegate.call(this, x, y, more);
};
G__74905.cljs$lang$maxFixedArity = 2;
G__74905.cljs$lang$applyTo = (function (arglist__74906){
var x = cljs.core.first(arglist__74906);
var y = cljs.core.first(cljs.core.next(arglist__74906));
var more = cljs.core.rest(cljs.core.next(arglist__74906));
return G__74905__delegate(x, y, more);
});
G__74905.cljs$lang$arity$variadic = G__74905__delegate;
return G__74905;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return not_EQ___1.call(this,x);
case 2:
return not_EQ___2.call(this,x,y);
default:
return not_EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___3.cljs$lang$applyTo;
not_EQ_.cljs$lang$arity$1 = not_EQ___1;
not_EQ_.cljs$lang$arity$2 = not_EQ___2;
not_EQ_.cljs$lang$arity$variadic = not_EQ___3.cljs$lang$arity$variadic;
return not_EQ_;
})()
;
/**
* If coll is empty, returns nil, else coll
*/
cljs.core.not_empty = (function not_empty(coll){
if(cljs.core.seq.call(null,coll))
{return coll;
} else
{return null;
}
});
/**
* Returns true if (pred x) is logical true for every x in coll, else
* false.
*/
cljs.core.every_QMARK_ = (function every_QMARK_(pred,coll){
while(true){
if((cljs.core.seq.call(null,coll) == null))
{return true;
} else
{if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,coll))))
{{
var G__74907 = pred;
var G__74908 = cljs.core.next.call(null,coll);
pred = G__74907;
coll = G__74908;
continue;
}
} else
{if("\uFDD0'else")
{return false;
} else
{return null;
}
}
}
break;
}
});
/**
* Returns false if (pred x) is logical true for every x in
* coll, else true.
*/
cljs.core.not_every_QMARK_ = (function not_every_QMARK_(pred,coll){
return !(cljs.core.every_QMARK_.call(null,pred,coll));
});
/**
* Returns the first logical true value of (pred x) for any x in coll,
* else nil.  One common idiom is to use a set as pred, for example
* this will return :fred if :fred is in the sequence, otherwise nil:
* (some #{:fred} coll)
*/
cljs.core.some = (function some(pred,coll){
while(true){
if(cljs.core.seq.call(null,coll))
{var or__3824__auto____74910 = pred.call(null,cljs.core.first.call(null,coll));
if(cljs.core.truth_(or__3824__auto____74910))
{return or__3824__auto____74910;
} else
{{
var G__74911 = pred;
var G__74912 = cljs.core.next.call(null,coll);
pred = G__74911;
coll = G__74912;
continue;
}
}
} else
{return null;
}
break;
}
});
/**
* Returns false if (pred x) is logical true for any x in coll,
* else true.
*/
cljs.core.not_any_QMARK_ = (function not_any_QMARK_(pred,coll){
return cljs.core.not.call(null,cljs.core.some.call(null,pred,coll));
});
/**
* Returns true if n is even, throws an exception if n is not an integer
*/
cljs.core.even_QMARK_ = (function even_QMARK_(n){
if(cljs.core.integer_QMARK_.call(null,n))
{return ((n & 1) === 0);
} else
{throw (new Error([cljs.core.str("Argument must be an integer: "),cljs.core.str(n)].join('')));
}
});
/**
* Returns true if n is odd, throws an exception if n is not an integer
*/
cljs.core.odd_QMARK_ = (function odd_QMARK_(n){
return !(cljs.core.even_QMARK_.call(null,n));
});
cljs.core.identity = (function identity(x){
return x;
});
/**
* Takes a fn f and returns a fn that takes the same arguments as f,
* has the same effects, if any, and returns the opposite truth value.
*/
cljs.core.complement = (function complement(f){
return (function() {
var G__74913 = null;
var G__74913__0 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__74913__1 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__74913__2 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__74913__3 = (function() { 
var G__74914__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__74914 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__74914__delegate.call(this, x, y, zs);
};
G__74914.cljs$lang$maxFixedArity = 2;
G__74914.cljs$lang$applyTo = (function (arglist__74915){
var x = cljs.core.first(arglist__74915);
var y = cljs.core.first(cljs.core.next(arglist__74915));
var zs = cljs.core.rest(cljs.core.next(arglist__74915));
return G__74914__delegate(x, y, zs);
});
G__74914.cljs$lang$arity$variadic = G__74914__delegate;
return G__74914;
})()
;
G__74913 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case 0:
return G__74913__0.call(this);
case 1:
return G__74913__1.call(this,x);
case 2:
return G__74913__2.call(this,x,y);
default:
return G__74913__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
G__74913.cljs$lang$maxFixedArity = 2;
G__74913.cljs$lang$applyTo = G__74913__3.cljs$lang$applyTo;
return G__74913;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__74916__delegate = function (args){
return x;
};
var G__74916 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__74916__delegate.call(this, args);
};
G__74916.cljs$lang$maxFixedArity = 0;
G__74916.cljs$lang$applyTo = (function (arglist__74917){
var args = cljs.core.seq(arglist__74917);;
return G__74916__delegate(args);
});
G__74916.cljs$lang$arity$variadic = G__74916__delegate;
return G__74916;
})()
;
});
/**
* Takes a set of functions and returns a fn that is the composition
* of those fns.  The returned fn takes a variable number of args,
* applies the rightmost of fns to the args, the next
* fn (right-to-left) to the result, etc.
* @param {...*} var_args
*/
cljs.core.comp = (function() {
var comp = null;
var comp__0 = (function (){
return cljs.core.identity;
});
var comp__1 = (function (f){
return f;
});
var comp__2 = (function (f,g){
return (function() {
var G__74924 = null;
var G__74924__0 = (function (){
return f.call(null,g.call(null));
});
var G__74924__1 = (function (x){
return f.call(null,g.call(null,x));
});
var G__74924__2 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__74924__3 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__74924__4 = (function() { 
var G__74925__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__74925 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__74925__delegate.call(this, x, y, z, args);
};
G__74925.cljs$lang$maxFixedArity = 3;
G__74925.cljs$lang$applyTo = (function (arglist__74926){
var x = cljs.core.first(arglist__74926);
var y = cljs.core.first(cljs.core.next(arglist__74926));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__74926)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__74926)));
return G__74925__delegate(x, y, z, args);
});
G__74925.cljs$lang$arity$variadic = G__74925__delegate;
return G__74925;
})()
;
G__74924 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__74924__0.call(this);
case 1:
return G__74924__1.call(this,x);
case 2:
return G__74924__2.call(this,x,y);
case 3:
return G__74924__3.call(this,x,y,z);
default:
return G__74924__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__74924.cljs$lang$maxFixedArity = 3;
G__74924.cljs$lang$applyTo = G__74924__4.cljs$lang$applyTo;
return G__74924;
})()
});
var comp__3 = (function (f,g,h){
return (function() {
var G__74927 = null;
var G__74927__0 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__74927__1 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__74927__2 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__74927__3 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__74927__4 = (function() { 
var G__74928__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__74928 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__74928__delegate.call(this, x, y, z, args);
};
G__74928.cljs$lang$maxFixedArity = 3;
G__74928.cljs$lang$applyTo = (function (arglist__74929){
var x = cljs.core.first(arglist__74929);
var y = cljs.core.first(cljs.core.next(arglist__74929));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__74929)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__74929)));
return G__74928__delegate(x, y, z, args);
});
G__74928.cljs$lang$arity$variadic = G__74928__delegate;
return G__74928;
})()
;
G__74927 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__74927__0.call(this);
case 1:
return G__74927__1.call(this,x);
case 2:
return G__74927__2.call(this,x,y);
case 3:
return G__74927__3.call(this,x,y,z);
default:
return G__74927__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__74927.cljs$lang$maxFixedArity = 3;
G__74927.cljs$lang$applyTo = G__74927__4.cljs$lang$applyTo;
return G__74927;
})()
});
var comp__4 = (function() { 
var G__74930__delegate = function (f1,f2,f3,fs){
var fs__74921 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));
return (function() { 
var G__74931__delegate = function (args){
var ret__74922 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__74921),args);
var fs__74923 = cljs.core.next.call(null,fs__74921);
while(true){
if(fs__74923)
{{
var G__74932 = cljs.core.first.call(null,fs__74923).call(null,ret__74922);
var G__74933 = cljs.core.next.call(null,fs__74923);
ret__74922 = G__74932;
fs__74923 = G__74933;
continue;
}
} else
{return ret__74922;
}
break;
}
};
var G__74931 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__74931__delegate.call(this, args);
};
G__74931.cljs$lang$maxFixedArity = 0;
G__74931.cljs$lang$applyTo = (function (arglist__74934){
var args = cljs.core.seq(arglist__74934);;
return G__74931__delegate(args);
});
G__74931.cljs$lang$arity$variadic = G__74931__delegate;
return G__74931;
})()
;
};
var G__74930 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__74930__delegate.call(this, f1, f2, f3, fs);
};
G__74930.cljs$lang$maxFixedArity = 3;
G__74930.cljs$lang$applyTo = (function (arglist__74935){
var f1 = cljs.core.first(arglist__74935);
var f2 = cljs.core.first(cljs.core.next(arglist__74935));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__74935)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__74935)));
return G__74930__delegate(f1, f2, f3, fs);
});
G__74930.cljs$lang$arity$variadic = G__74930__delegate;
return G__74930;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case 0:
return comp__0.call(this);
case 1:
return comp__1.call(this,f1);
case 2:
return comp__2.call(this,f1,f2);
case 3:
return comp__3.call(this,f1,f2,f3);
default:
return comp__4.cljs$lang$arity$variadic(f1,f2,f3, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__4.cljs$lang$applyTo;
comp.cljs$lang$arity$0 = comp__0;
comp.cljs$lang$arity$1 = comp__1;
comp.cljs$lang$arity$2 = comp__2;
comp.cljs$lang$arity$3 = comp__3;
comp.cljs$lang$arity$variadic = comp__4.cljs$lang$arity$variadic;
return comp;
})()
;
/**
* Takes a function f and fewer than the normal arguments to f, and
* returns a fn that takes a variable number of additional args. When
* called, the returned function calls f with args + additional args.
* @param {...*} var_args
*/
cljs.core.partial = (function() {
var partial = null;
var partial__2 = (function (f,arg1){
return (function() { 
var G__74936__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__74936 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__74936__delegate.call(this, args);
};
G__74936.cljs$lang$maxFixedArity = 0;
G__74936.cljs$lang$applyTo = (function (arglist__74937){
var args = cljs.core.seq(arglist__74937);;
return G__74936__delegate(args);
});
G__74936.cljs$lang$arity$variadic = G__74936__delegate;
return G__74936;
})()
;
});
var partial__3 = (function (f,arg1,arg2){
return (function() { 
var G__74938__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__74938 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__74938__delegate.call(this, args);
};
G__74938.cljs$lang$maxFixedArity = 0;
G__74938.cljs$lang$applyTo = (function (arglist__74939){
var args = cljs.core.seq(arglist__74939);;
return G__74938__delegate(args);
});
G__74938.cljs$lang$arity$variadic = G__74938__delegate;
return G__74938;
})()
;
});
var partial__4 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__74940__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__74940 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__74940__delegate.call(this, args);
};
G__74940.cljs$lang$maxFixedArity = 0;
G__74940.cljs$lang$applyTo = (function (arglist__74941){
var args = cljs.core.seq(arglist__74941);;
return G__74940__delegate(args);
});
G__74940.cljs$lang$arity$variadic = G__74940__delegate;
return G__74940;
})()
;
});
var partial__5 = (function() { 
var G__74942__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__74943__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__74943 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__74943__delegate.call(this, args);
};
G__74943.cljs$lang$maxFixedArity = 0;
G__74943.cljs$lang$applyTo = (function (arglist__74944){
var args = cljs.core.seq(arglist__74944);;
return G__74943__delegate(args);
});
G__74943.cljs$lang$arity$variadic = G__74943__delegate;
return G__74943;
})()
;
};
var G__74942 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__74942__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__74942.cljs$lang$maxFixedArity = 4;
G__74942.cljs$lang$applyTo = (function (arglist__74945){
var f = cljs.core.first(arglist__74945);
var arg1 = cljs.core.first(cljs.core.next(arglist__74945));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__74945)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__74945))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__74945))));
return G__74942__delegate(f, arg1, arg2, arg3, more);
});
G__74942.cljs$lang$arity$variadic = G__74942__delegate;
return G__74942;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return partial__2.call(this,f,arg1);
case 3:
return partial__3.call(this,f,arg1,arg2);
case 4:
return partial__4.call(this,f,arg1,arg2,arg3);
default:
return partial__5.cljs$lang$arity$variadic(f,arg1,arg2,arg3, cljs.core.array_seq(arguments, 4));
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__5.cljs$lang$applyTo;
partial.cljs$lang$arity$2 = partial__2;
partial.cljs$lang$arity$3 = partial__3;
partial.cljs$lang$arity$4 = partial__4;
partial.cljs$lang$arity$variadic = partial__5.cljs$lang$arity$variadic;
return partial;
})()
;
/**
* Takes a function f, and returns a function that calls f, replacing
* a nil first argument to f with the supplied value x. Higher arity
* versions can replace arguments in the second and third
* positions (y, z). Note that the function f can take any number of
* arguments, not just the one(s) being nil-patched.
*/
cljs.core.fnil = (function() {
var fnil = null;
var fnil__2 = (function (f,x){
return (function() {
var G__74946 = null;
var G__74946__1 = (function (a){
return f.call(null,(((a == null))?x:a));
});
var G__74946__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),b);
});
var G__74946__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),b,c);
});
var G__74946__4 = (function() { 
var G__74947__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),b,c,ds);
};
var G__74947 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__74947__delegate.call(this, a, b, c, ds);
};
G__74947.cljs$lang$maxFixedArity = 3;
G__74947.cljs$lang$applyTo = (function (arglist__74948){
var a = cljs.core.first(arglist__74948);
var b = cljs.core.first(cljs.core.next(arglist__74948));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__74948)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__74948)));
return G__74947__delegate(a, b, c, ds);
});
G__74947.cljs$lang$arity$variadic = G__74947__delegate;
return G__74947;
})()
;
G__74946 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 1:
return G__74946__1.call(this,a);
case 2:
return G__74946__2.call(this,a,b);
case 3:
return G__74946__3.call(this,a,b,c);
default:
return G__74946__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__74946.cljs$lang$maxFixedArity = 3;
G__74946.cljs$lang$applyTo = G__74946__4.cljs$lang$applyTo;
return G__74946;
})()
});
var fnil__3 = (function (f,x,y){
return (function() {
var G__74949 = null;
var G__74949__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b));
});
var G__74949__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b),c);
});
var G__74949__4 = (function() { 
var G__74950__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),(((b == null))?y:b),c,ds);
};
var G__74950 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__74950__delegate.call(this, a, b, c, ds);
};
G__74950.cljs$lang$maxFixedArity = 3;
G__74950.cljs$lang$applyTo = (function (arglist__74951){
var a = cljs.core.first(arglist__74951);
var b = cljs.core.first(cljs.core.next(arglist__74951));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__74951)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__74951)));
return G__74950__delegate(a, b, c, ds);
});
G__74950.cljs$lang$arity$variadic = G__74950__delegate;
return G__74950;
})()
;
G__74949 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__74949__2.call(this,a,b);
case 3:
return G__74949__3.call(this,a,b,c);
default:
return G__74949__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__74949.cljs$lang$maxFixedArity = 3;
G__74949.cljs$lang$applyTo = G__74949__4.cljs$lang$applyTo;
return G__74949;
})()
});
var fnil__4 = (function (f,x,y,z){
return (function() {
var G__74952 = null;
var G__74952__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b));
});
var G__74952__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c));
});
var G__74952__4 = (function() { 
var G__74953__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c),ds);
};
var G__74953 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__74953__delegate.call(this, a, b, c, ds);
};
G__74953.cljs$lang$maxFixedArity = 3;
G__74953.cljs$lang$applyTo = (function (arglist__74954){
var a = cljs.core.first(arglist__74954);
var b = cljs.core.first(cljs.core.next(arglist__74954));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__74954)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__74954)));
return G__74953__delegate(a, b, c, ds);
});
G__74953.cljs$lang$arity$variadic = G__74953__delegate;
return G__74953;
})()
;
G__74952 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__74952__2.call(this,a,b);
case 3:
return G__74952__3.call(this,a,b,c);
default:
return G__74952__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__74952.cljs$lang$maxFixedArity = 3;
G__74952.cljs$lang$applyTo = G__74952__4.cljs$lang$applyTo;
return G__74952;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case 2:
return fnil__2.call(this,f,x);
case 3:
return fnil__3.call(this,f,x,y);
case 4:
return fnil__4.call(this,f,x,y,z);
}
throw('Invalid arity: ' + arguments.length);
};
fnil.cljs$lang$arity$2 = fnil__2;
fnil.cljs$lang$arity$3 = fnil__3;
fnil.cljs$lang$arity$4 = fnil__4;
return fnil;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to 0
* and the first item of coll, followed by applying f to 1 and the second
* item in coll, etc, until coll is exhausted. Thus function f should
* accept 2 arguments, index and item.
*/
cljs.core.map_indexed = (function map_indexed(f,coll){
var mapi__74970 = (function mapi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____74978 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____74978)
{var s__74979 = temp__3974__auto____74978;
if(cljs.core.chunked_seq_QMARK_.call(null,s__74979))
{var c__74980 = cljs.core.chunk_first.call(null,s__74979);
var size__74981 = cljs.core.count.call(null,c__74980);
var b__74982 = cljs.core.chunk_buffer.call(null,size__74981);
var n__5693__auto____74983 = size__74981;
var i__74984 = 0;
while(true){
if((i__74984 < n__5693__auto____74983))
{cljs.core.chunk_append.call(null,b__74982,f.call(null,(idx + i__74984),cljs.core._nth.call(null,c__74980,i__74984)));
{
var G__74985 = (i__74984 + 1);
i__74984 = G__74985;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__74982),mapi.call(null,(idx + size__74981),cljs.core.chunk_rest.call(null,s__74979)));
} else
{return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__74979)),mapi.call(null,(idx + 1),cljs.core.rest.call(null,s__74979)));
}
} else
{return null;
}
}),null));
});
return mapi__74970.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____74995 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____74995)
{var s__74996 = temp__3974__auto____74995;
if(cljs.core.chunked_seq_QMARK_.call(null,s__74996))
{var c__74997 = cljs.core.chunk_first.call(null,s__74996);
var size__74998 = cljs.core.count.call(null,c__74997);
var b__74999 = cljs.core.chunk_buffer.call(null,size__74998);
var n__5693__auto____75000 = size__74998;
var i__75001 = 0;
while(true){
if((i__75001 < n__5693__auto____75000))
{var x__75002 = f.call(null,cljs.core._nth.call(null,c__74997,i__75001));
if((x__75002 == null))
{} else
{cljs.core.chunk_append.call(null,b__74999,x__75002);
}
{
var G__75004 = (i__75001 + 1);
i__75001 = G__75004;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__74999),keep.call(null,f,cljs.core.chunk_rest.call(null,s__74996)));
} else
{var x__75003 = f.call(null,cljs.core.first.call(null,s__74996));
if((x__75003 == null))
{return keep.call(null,f,cljs.core.rest.call(null,s__74996));
} else
{return cljs.core.cons.call(null,x__75003,keep.call(null,f,cljs.core.rest.call(null,s__74996)));
}
}
} else
{return null;
}
}),null));
});
/**
* Returns a lazy sequence of the non-nil results of (f index item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep_indexed = (function keep_indexed(f,coll){
var keepi__75030 = (function keepi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____75040 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____75040)
{var s__75041 = temp__3974__auto____75040;
if(cljs.core.chunked_seq_QMARK_.call(null,s__75041))
{var c__75042 = cljs.core.chunk_first.call(null,s__75041);
var size__75043 = cljs.core.count.call(null,c__75042);
var b__75044 = cljs.core.chunk_buffer.call(null,size__75043);
var n__5693__auto____75045 = size__75043;
var i__75046 = 0;
while(true){
if((i__75046 < n__5693__auto____75045))
{var x__75047 = f.call(null,(idx + i__75046),cljs.core._nth.call(null,c__75042,i__75046));
if((x__75047 == null))
{} else
{cljs.core.chunk_append.call(null,b__75044,x__75047);
}
{
var G__75049 = (i__75046 + 1);
i__75046 = G__75049;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__75044),keepi.call(null,(idx + size__75043),cljs.core.chunk_rest.call(null,s__75041)));
} else
{var x__75048 = f.call(null,idx,cljs.core.first.call(null,s__75041));
if((x__75048 == null))
{return keepi.call(null,(idx + 1),cljs.core.rest.call(null,s__75041));
} else
{return cljs.core.cons.call(null,x__75048,keepi.call(null,(idx + 1),cljs.core.rest.call(null,s__75041)));
}
}
} else
{return null;
}
}),null));
});
return keepi__75030.call(null,0,coll);
});
/**
* Takes a set of predicates and returns a function f that returns true if all of its
* composing predicates return a logical true value against all of its arguments, else it returns
* false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical false result against the original predicates.
* @param {...*} var_args
*/
cljs.core.every_pred = (function() {
var every_pred = null;
var every_pred__1 = (function (p){
return (function() {
var ep1 = null;
var ep1__0 = (function (){
return true;
});
var ep1__1 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____75135 = p.call(null,x);
if(cljs.core.truth_(and__3822__auto____75135))
{return p.call(null,y);
} else
{return and__3822__auto____75135;
}
})());
});
var ep1__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____75136 = p.call(null,x);
if(cljs.core.truth_(and__3822__auto____75136))
{var and__3822__auto____75137 = p.call(null,y);
if(cljs.core.truth_(and__3822__auto____75137))
{return p.call(null,z);
} else
{return and__3822__auto____75137;
}
} else
{return and__3822__auto____75136;
}
})());
});
var ep1__4 = (function() { 
var G__75206__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____75138 = ep1.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____75138))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3822__auto____75138;
}
})());
};
var G__75206 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__75206__delegate.call(this, x, y, z, args);
};
G__75206.cljs$lang$maxFixedArity = 3;
G__75206.cljs$lang$applyTo = (function (arglist__75207){
var x = cljs.core.first(arglist__75207);
var y = cljs.core.first(cljs.core.next(arglist__75207));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__75207)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__75207)));
return G__75206__delegate(x, y, z, args);
});
G__75206.cljs$lang$arity$variadic = G__75206__delegate;
return G__75206;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return ep1__0.call(this);
case 1:
return ep1__1.call(this,x);
case 2:
return ep1__2.call(this,x,y);
case 3:
return ep1__3.call(this,x,y,z);
default:
return ep1__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__4.cljs$lang$applyTo;
ep1.cljs$lang$arity$0 = ep1__0;
ep1.cljs$lang$arity$1 = ep1__1;
ep1.cljs$lang$arity$2 = ep1__2;
ep1.cljs$lang$arity$3 = ep1__3;
ep1.cljs$lang$arity$variadic = ep1__4.cljs$lang$arity$variadic;
return ep1;
})()
});
var every_pred__2 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__0 = (function (){
return true;
});
var ep2__1 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____75150 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____75150))
{return p2.call(null,x);
} else
{return and__3822__auto____75150;
}
})());
});
var ep2__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____75151 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____75151))
{var and__3822__auto____75152 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____75152))
{var and__3822__auto____75153 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____75153))
{return p2.call(null,y);
} else
{return and__3822__auto____75153;
}
} else
{return and__3822__auto____75152;
}
} else
{return and__3822__auto____75151;
}
})());
});
var ep2__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____75154 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____75154))
{var and__3822__auto____75155 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____75155))
{var and__3822__auto____75156 = p1.call(null,z);
if(cljs.core.truth_(and__3822__auto____75156))
{var and__3822__auto____75157 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____75157))
{var and__3822__auto____75158 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____75158))
{return p2.call(null,z);
} else
{return and__3822__auto____75158;
}
} else
{return and__3822__auto____75157;
}
} else
{return and__3822__auto____75156;
}
} else
{return and__3822__auto____75155;
}
} else
{return and__3822__auto____75154;
}
})());
});
var ep2__4 = (function() { 
var G__75208__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____75159 = ep2.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____75159))
{return cljs.core.every_QMARK_.call(null,(function (p1__75005_SHARP_){
var and__3822__auto____75160 = p1.call(null,p1__75005_SHARP_);
if(cljs.core.truth_(and__3822__auto____75160))
{return p2.call(null,p1__75005_SHARP_);
} else
{return and__3822__auto____75160;
}
}),args);
} else
{return and__3822__auto____75159;
}
})());
};
var G__75208 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__75208__delegate.call(this, x, y, z, args);
};
G__75208.cljs$lang$maxFixedArity = 3;
G__75208.cljs$lang$applyTo = (function (arglist__75209){
var x = cljs.core.first(arglist__75209);
var y = cljs.core.first(cljs.core.next(arglist__75209));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__75209)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__75209)));
return G__75208__delegate(x, y, z, args);
});
G__75208.cljs$lang$arity$variadic = G__75208__delegate;
return G__75208;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return ep2__0.call(this);
case 1:
return ep2__1.call(this,x);
case 2:
return ep2__2.call(this,x,y);
case 3:
return ep2__3.call(this,x,y,z);
default:
return ep2__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__4.cljs$lang$applyTo;
ep2.cljs$lang$arity$0 = ep2__0;
ep2.cljs$lang$arity$1 = ep2__1;
ep2.cljs$lang$arity$2 = ep2__2;
ep2.cljs$lang$arity$3 = ep2__3;
ep2.cljs$lang$arity$variadic = ep2__4.cljs$lang$arity$variadic;
return ep2;
})()
});
var every_pred__3 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__0 = (function (){
return true;
});
var ep3__1 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____75179 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____75179))
{var and__3822__auto____75180 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____75180))
{return p3.call(null,x);
} else
{return and__3822__auto____75180;
}
} else
{return and__3822__auto____75179;
}
})());
});
var ep3__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____75181 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____75181))
{var and__3822__auto____75182 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____75182))
{var and__3822__auto____75183 = p3.call(null,x);
if(cljs.core.truth_(and__3822__auto____75183))
{var and__3822__auto____75184 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____75184))
{var and__3822__auto____75185 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____75185))
{return p3.call(null,y);
} else
{return and__3822__auto____75185;
}
} else
{return and__3822__auto____75184;
}
} else
{return and__3822__auto____75183;
}
} else
{return and__3822__auto____75182;
}
} else
{return and__3822__auto____75181;
}
})());
});
var ep3__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____75186 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____75186))
{var and__3822__auto____75187 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____75187))
{var and__3822__auto____75188 = p3.call(null,x);
if(cljs.core.truth_(and__3822__auto____75188))
{var and__3822__auto____75189 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____75189))
{var and__3822__auto____75190 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____75190))
{var and__3822__auto____75191 = p3.call(null,y);
if(cljs.core.truth_(and__3822__auto____75191))
{var and__3822__auto____75192 = p1.call(null,z);
if(cljs.core.truth_(and__3822__auto____75192))
{var and__3822__auto____75193 = p2.call(null,z);
if(cljs.core.truth_(and__3822__auto____75193))
{return p3.call(null,z);
} else
{return and__3822__auto____75193;
}
} else
{return and__3822__auto____75192;
}
} else
{return and__3822__auto____75191;
}
} else
{return and__3822__auto____75190;
}
} else
{return and__3822__auto____75189;
}
} else
{return and__3822__auto____75188;
}
} else
{return and__3822__auto____75187;
}
} else
{return and__3822__auto____75186;
}
})());
});
var ep3__4 = (function() { 
var G__75210__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____75194 = ep3.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____75194))
{return cljs.core.every_QMARK_.call(null,(function (p1__75006_SHARP_){
var and__3822__auto____75195 = p1.call(null,p1__75006_SHARP_);
if(cljs.core.truth_(and__3822__auto____75195))
{var and__3822__auto____75196 = p2.call(null,p1__75006_SHARP_);
if(cljs.core.truth_(and__3822__auto____75196))
{return p3.call(null,p1__75006_SHARP_);
} else
{return and__3822__auto____75196;
}
} else
{return and__3822__auto____75195;
}
}),args);
} else
{return and__3822__auto____75194;
}
})());
};
var G__75210 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__75210__delegate.call(this, x, y, z, args);
};
G__75210.cljs$lang$maxFixedArity = 3;
G__75210.cljs$lang$applyTo = (function (arglist__75211){
var x = cljs.core.first(arglist__75211);
var y = cljs.core.first(cljs.core.next(arglist__75211));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__75211)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__75211)));
return G__75210__delegate(x, y, z, args);
});
G__75210.cljs$lang$arity$variadic = G__75210__delegate;
return G__75210;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return ep3__0.call(this);
case 1:
return ep3__1.call(this,x);
case 2:
return ep3__2.call(this,x,y);
case 3:
return ep3__3.call(this,x,y,z);
default:
return ep3__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__4.cljs$lang$applyTo;
ep3.cljs$lang$arity$0 = ep3__0;
ep3.cljs$lang$arity$1 = ep3__1;
ep3.cljs$lang$arity$2 = ep3__2;
ep3.cljs$lang$arity$3 = ep3__3;
ep3.cljs$lang$arity$variadic = ep3__4.cljs$lang$arity$variadic;
return ep3;
})()
});
var every_pred__4 = (function() { 
var G__75212__delegate = function (p1,p2,p3,ps){
var ps__75197 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);
return (function() {
var epn = null;
var epn__0 = (function (){
return true;
});
var epn__1 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__75007_SHARP_){
return p1__75007_SHARP_.call(null,x);
}),ps__75197);
});
var epn__2 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__75008_SHARP_){
var and__3822__auto____75202 = p1__75008_SHARP_.call(null,x);
if(cljs.core.truth_(and__3822__auto____75202))
{return p1__75008_SHARP_.call(null,y);
} else
{return and__3822__auto____75202;
}
}),ps__75197);
});
var epn__3 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__75009_SHARP_){
var and__3822__auto____75203 = p1__75009_SHARP_.call(null,x);
if(cljs.core.truth_(and__3822__auto____75203))
{var and__3822__auto____75204 = p1__75009_SHARP_.call(null,y);
if(cljs.core.truth_(and__3822__auto____75204))
{return p1__75009_SHARP_.call(null,z);
} else
{return and__3822__auto____75204;
}
} else
{return and__3822__auto____75203;
}
}),ps__75197);
});
var epn__4 = (function() { 
var G__75213__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____75205 = epn.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____75205))
{return cljs.core.every_QMARK_.call(null,(function (p1__75010_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__75010_SHARP_,args);
}),ps__75197);
} else
{return and__3822__auto____75205;
}
})());
};
var G__75213 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__75213__delegate.call(this, x, y, z, args);
};
G__75213.cljs$lang$maxFixedArity = 3;
G__75213.cljs$lang$applyTo = (function (arglist__75214){
var x = cljs.core.first(arglist__75214);
var y = cljs.core.first(cljs.core.next(arglist__75214));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__75214)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__75214)));
return G__75213__delegate(x, y, z, args);
});
G__75213.cljs$lang$arity$variadic = G__75213__delegate;
return G__75213;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return epn__0.call(this);
case 1:
return epn__1.call(this,x);
case 2:
return epn__2.call(this,x,y);
case 3:
return epn__3.call(this,x,y,z);
default:
return epn__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__4.cljs$lang$applyTo;
epn.cljs$lang$arity$0 = epn__0;
epn.cljs$lang$arity$1 = epn__1;
epn.cljs$lang$arity$2 = epn__2;
epn.cljs$lang$arity$3 = epn__3;
epn.cljs$lang$arity$variadic = epn__4.cljs$lang$arity$variadic;
return epn;
})()
};
var G__75212 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__75212__delegate.call(this, p1, p2, p3, ps);
};
G__75212.cljs$lang$maxFixedArity = 3;
G__75212.cljs$lang$applyTo = (function (arglist__75215){
var p1 = cljs.core.first(arglist__75215);
var p2 = cljs.core.first(cljs.core.next(arglist__75215));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__75215)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__75215)));
return G__75212__delegate(p1, p2, p3, ps);
});
G__75212.cljs$lang$arity$variadic = G__75212__delegate;
return G__75212;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case 1:
return every_pred__1.call(this,p1);
case 2:
return every_pred__2.call(this,p1,p2);
case 3:
return every_pred__3.call(this,p1,p2,p3);
default:
return every_pred__4.cljs$lang$arity$variadic(p1,p2,p3, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__4.cljs$lang$applyTo;
every_pred.cljs$lang$arity$1 = every_pred__1;
every_pred.cljs$lang$arity$2 = every_pred__2;
every_pred.cljs$lang$arity$3 = every_pred__3;
every_pred.cljs$lang$arity$variadic = every_pred__4.cljs$lang$arity$variadic;
return every_pred;
})()
;
/**
* Takes a set of predicates and returns a function f that returns the first logical true value
* returned by one of its composing predicates against any of its arguments, else it returns
* logical false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical true result against the original predicates.
* @param {...*} var_args
*/
cljs.core.some_fn = (function() {
var some_fn = null;
var some_fn__1 = (function (p){
return (function() {
var sp1 = null;
var sp1__0 = (function (){
return null;
});
var sp1__1 = (function (x){
return p.call(null,x);
});
var sp1__2 = (function (x,y){
var or__3824__auto____75296 = p.call(null,x);
if(cljs.core.truth_(or__3824__auto____75296))
{return or__3824__auto____75296;
} else
{return p.call(null,y);
}
});
var sp1__3 = (function (x,y,z){
var or__3824__auto____75297 = p.call(null,x);
if(cljs.core.truth_(or__3824__auto____75297))
{return or__3824__auto____75297;
} else
{var or__3824__auto____75298 = p.call(null,y);
if(cljs.core.truth_(or__3824__auto____75298))
{return or__3824__auto____75298;
} else
{return p.call(null,z);
}
}
});
var sp1__4 = (function() { 
var G__75367__delegate = function (x,y,z,args){
var or__3824__auto____75299 = sp1.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____75299))
{return or__3824__auto____75299;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__75367 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__75367__delegate.call(this, x, y, z, args);
};
G__75367.cljs$lang$maxFixedArity = 3;
G__75367.cljs$lang$applyTo = (function (arglist__75368){
var x = cljs.core.first(arglist__75368);
var y = cljs.core.first(cljs.core.next(arglist__75368));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__75368)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__75368)));
return G__75367__delegate(x, y, z, args);
});
G__75367.cljs$lang$arity$variadic = G__75367__delegate;
return G__75367;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return sp1__0.call(this);
case 1:
return sp1__1.call(this,x);
case 2:
return sp1__2.call(this,x,y);
case 3:
return sp1__3.call(this,x,y,z);
default:
return sp1__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__4.cljs$lang$applyTo;
sp1.cljs$lang$arity$0 = sp1__0;
sp1.cljs$lang$arity$1 = sp1__1;
sp1.cljs$lang$arity$2 = sp1__2;
sp1.cljs$lang$arity$3 = sp1__3;
sp1.cljs$lang$arity$variadic = sp1__4.cljs$lang$arity$variadic;
return sp1;
})()
});
var some_fn__2 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__0 = (function (){
return null;
});
var sp2__1 = (function (x){
var or__3824__auto____75311 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____75311))
{return or__3824__auto____75311;
} else
{return p2.call(null,x);
}
});
var sp2__2 = (function (x,y){
var or__3824__auto____75312 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____75312))
{return or__3824__auto____75312;
} else
{var or__3824__auto____75313 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____75313))
{return or__3824__auto____75313;
} else
{var or__3824__auto____75314 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____75314))
{return or__3824__auto____75314;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__3 = (function (x,y,z){
var or__3824__auto____75315 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____75315))
{return or__3824__auto____75315;
} else
{var or__3824__auto____75316 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____75316))
{return or__3824__auto____75316;
} else
{var or__3824__auto____75317 = p1.call(null,z);
if(cljs.core.truth_(or__3824__auto____75317))
{return or__3824__auto____75317;
} else
{var or__3824__auto____75318 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____75318))
{return or__3824__auto____75318;
} else
{var or__3824__auto____75319 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____75319))
{return or__3824__auto____75319;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__4 = (function() { 
var G__75369__delegate = function (x,y,z,args){
var or__3824__auto____75320 = sp2.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____75320))
{return or__3824__auto____75320;
} else
{return cljs.core.some.call(null,(function (p1__75050_SHARP_){
var or__3824__auto____75321 = p1.call(null,p1__75050_SHARP_);
if(cljs.core.truth_(or__3824__auto____75321))
{return or__3824__auto____75321;
} else
{return p2.call(null,p1__75050_SHARP_);
}
}),args);
}
};
var G__75369 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__75369__delegate.call(this, x, y, z, args);
};
G__75369.cljs$lang$maxFixedArity = 3;
G__75369.cljs$lang$applyTo = (function (arglist__75370){
var x = cljs.core.first(arglist__75370);
var y = cljs.core.first(cljs.core.next(arglist__75370));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__75370)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__75370)));
return G__75369__delegate(x, y, z, args);
});
G__75369.cljs$lang$arity$variadic = G__75369__delegate;
return G__75369;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return sp2__0.call(this);
case 1:
return sp2__1.call(this,x);
case 2:
return sp2__2.call(this,x,y);
case 3:
return sp2__3.call(this,x,y,z);
default:
return sp2__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__4.cljs$lang$applyTo;
sp2.cljs$lang$arity$0 = sp2__0;
sp2.cljs$lang$arity$1 = sp2__1;
sp2.cljs$lang$arity$2 = sp2__2;
sp2.cljs$lang$arity$3 = sp2__3;
sp2.cljs$lang$arity$variadic = sp2__4.cljs$lang$arity$variadic;
return sp2;
})()
});
var some_fn__3 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__0 = (function (){
return null;
});
var sp3__1 = (function (x){
var or__3824__auto____75340 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____75340))
{return or__3824__auto____75340;
} else
{var or__3824__auto____75341 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____75341))
{return or__3824__auto____75341;
} else
{return p3.call(null,x);
}
}
});
var sp3__2 = (function (x,y){
var or__3824__auto____75342 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____75342))
{return or__3824__auto____75342;
} else
{var or__3824__auto____75343 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____75343))
{return or__3824__auto____75343;
} else
{var or__3824__auto____75344 = p3.call(null,x);
if(cljs.core.truth_(or__3824__auto____75344))
{return or__3824__auto____75344;
} else
{var or__3824__auto____75345 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____75345))
{return or__3824__auto____75345;
} else
{var or__3824__auto____75346 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____75346))
{return or__3824__auto____75346;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__3 = (function (x,y,z){
var or__3824__auto____75347 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____75347))
{return or__3824__auto____75347;
} else
{var or__3824__auto____75348 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____75348))
{return or__3824__auto____75348;
} else
{var or__3824__auto____75349 = p3.call(null,x);
if(cljs.core.truth_(or__3824__auto____75349))
{return or__3824__auto____75349;
} else
{var or__3824__auto____75350 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____75350))
{return or__3824__auto____75350;
} else
{var or__3824__auto____75351 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____75351))
{return or__3824__auto____75351;
} else
{var or__3824__auto____75352 = p3.call(null,y);
if(cljs.core.truth_(or__3824__auto____75352))
{return or__3824__auto____75352;
} else
{var or__3824__auto____75353 = p1.call(null,z);
if(cljs.core.truth_(or__3824__auto____75353))
{return or__3824__auto____75353;
} else
{var or__3824__auto____75354 = p2.call(null,z);
if(cljs.core.truth_(or__3824__auto____75354))
{return or__3824__auto____75354;
} else
{return p3.call(null,z);
}
}
}
}
}
}
}
}
});
var sp3__4 = (function() { 
var G__75371__delegate = function (x,y,z,args){
var or__3824__auto____75355 = sp3.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____75355))
{return or__3824__auto____75355;
} else
{return cljs.core.some.call(null,(function (p1__75051_SHARP_){
var or__3824__auto____75356 = p1.call(null,p1__75051_SHARP_);
if(cljs.core.truth_(or__3824__auto____75356))
{return or__3824__auto____75356;
} else
{var or__3824__auto____75357 = p2.call(null,p1__75051_SHARP_);
if(cljs.core.truth_(or__3824__auto____75357))
{return or__3824__auto____75357;
} else
{return p3.call(null,p1__75051_SHARP_);
}
}
}),args);
}
};
var G__75371 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__75371__delegate.call(this, x, y, z, args);
};
G__75371.cljs$lang$maxFixedArity = 3;
G__75371.cljs$lang$applyTo = (function (arglist__75372){
var x = cljs.core.first(arglist__75372);
var y = cljs.core.first(cljs.core.next(arglist__75372));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__75372)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__75372)));
return G__75371__delegate(x, y, z, args);
});
G__75371.cljs$lang$arity$variadic = G__75371__delegate;
return G__75371;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return sp3__0.call(this);
case 1:
return sp3__1.call(this,x);
case 2:
return sp3__2.call(this,x,y);
case 3:
return sp3__3.call(this,x,y,z);
default:
return sp3__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__4.cljs$lang$applyTo;
sp3.cljs$lang$arity$0 = sp3__0;
sp3.cljs$lang$arity$1 = sp3__1;
sp3.cljs$lang$arity$2 = sp3__2;
sp3.cljs$lang$arity$3 = sp3__3;
sp3.cljs$lang$arity$variadic = sp3__4.cljs$lang$arity$variadic;
return sp3;
})()
});
var some_fn__4 = (function() { 
var G__75373__delegate = function (p1,p2,p3,ps){
var ps__75358 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);
return (function() {
var spn = null;
var spn__0 = (function (){
return null;
});
var spn__1 = (function (x){
return cljs.core.some.call(null,(function (p1__75052_SHARP_){
return p1__75052_SHARP_.call(null,x);
}),ps__75358);
});
var spn__2 = (function (x,y){
return cljs.core.some.call(null,(function (p1__75053_SHARP_){
var or__3824__auto____75363 = p1__75053_SHARP_.call(null,x);
if(cljs.core.truth_(or__3824__auto____75363))
{return or__3824__auto____75363;
} else
{return p1__75053_SHARP_.call(null,y);
}
}),ps__75358);
});
var spn__3 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__75054_SHARP_){
var or__3824__auto____75364 = p1__75054_SHARP_.call(null,x);
if(cljs.core.truth_(or__3824__auto____75364))
{return or__3824__auto____75364;
} else
{var or__3824__auto____75365 = p1__75054_SHARP_.call(null,y);
if(cljs.core.truth_(or__3824__auto____75365))
{return or__3824__auto____75365;
} else
{return p1__75054_SHARP_.call(null,z);
}
}
}),ps__75358);
});
var spn__4 = (function() { 
var G__75374__delegate = function (x,y,z,args){
var or__3824__auto____75366 = spn.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____75366))
{return or__3824__auto____75366;
} else
{return cljs.core.some.call(null,(function (p1__75055_SHARP_){
return cljs.core.some.call(null,p1__75055_SHARP_,args);
}),ps__75358);
}
};
var G__75374 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__75374__delegate.call(this, x, y, z, args);
};
G__75374.cljs$lang$maxFixedArity = 3;
G__75374.cljs$lang$applyTo = (function (arglist__75375){
var x = cljs.core.first(arglist__75375);
var y = cljs.core.first(cljs.core.next(arglist__75375));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__75375)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__75375)));
return G__75374__delegate(x, y, z, args);
});
G__75374.cljs$lang$arity$variadic = G__75374__delegate;
return G__75374;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return spn__0.call(this);
case 1:
return spn__1.call(this,x);
case 2:
return spn__2.call(this,x,y);
case 3:
return spn__3.call(this,x,y,z);
default:
return spn__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__4.cljs$lang$applyTo;
spn.cljs$lang$arity$0 = spn__0;
spn.cljs$lang$arity$1 = spn__1;
spn.cljs$lang$arity$2 = spn__2;
spn.cljs$lang$arity$3 = spn__3;
spn.cljs$lang$arity$variadic = spn__4.cljs$lang$arity$variadic;
return spn;
})()
};
var G__75373 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__75373__delegate.call(this, p1, p2, p3, ps);
};
G__75373.cljs$lang$maxFixedArity = 3;
G__75373.cljs$lang$applyTo = (function (arglist__75376){
var p1 = cljs.core.first(arglist__75376);
var p2 = cljs.core.first(cljs.core.next(arglist__75376));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__75376)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__75376)));
return G__75373__delegate(p1, p2, p3, ps);
});
G__75373.cljs$lang$arity$variadic = G__75373__delegate;
return G__75373;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case 1:
return some_fn__1.call(this,p1);
case 2:
return some_fn__2.call(this,p1,p2);
case 3:
return some_fn__3.call(this,p1,p2,p3);
default:
return some_fn__4.cljs$lang$arity$variadic(p1,p2,p3, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__4.cljs$lang$applyTo;
some_fn.cljs$lang$arity$1 = some_fn__1;
some_fn.cljs$lang$arity$2 = some_fn__2;
some_fn.cljs$lang$arity$3 = some_fn__3;
some_fn.cljs$lang$arity$variadic = some_fn__4.cljs$lang$arity$variadic;
return some_fn;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to the
* set of first items of each coll, followed by applying f to the set
* of second items in each coll, until any one of the colls is
* exhausted.  Any remaining items in other colls are ignored. Function
* f should accept number-of-colls arguments.
* @param {...*} var_args
*/
cljs.core.map = (function() {
var map = null;
var map__2 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____75395 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____75395)
{var s__75396 = temp__3974__auto____75395;
if(cljs.core.chunked_seq_QMARK_.call(null,s__75396))
{var c__75397 = cljs.core.chunk_first.call(null,s__75396);
var size__75398 = cljs.core.count.call(null,c__75397);
var b__75399 = cljs.core.chunk_buffer.call(null,size__75398);
var n__5693__auto____75400 = size__75398;
var i__75401 = 0;
while(true){
if((i__75401 < n__5693__auto____75400))
{cljs.core.chunk_append.call(null,b__75399,f.call(null,cljs.core._nth.call(null,c__75397,i__75401)));
{
var G__75413 = (i__75401 + 1);
i__75401 = G__75413;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__75399),map.call(null,f,cljs.core.chunk_rest.call(null,s__75396)));
} else
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__75396)),map.call(null,f,cljs.core.rest.call(null,s__75396)));
}
} else
{return null;
}
}),null));
});
var map__3 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__75402 = cljs.core.seq.call(null,c1);
var s2__75403 = cljs.core.seq.call(null,c2);
if((function (){var and__3822__auto____75404 = s1__75402;
if(and__3822__auto____75404)
{return s2__75403;
} else
{return and__3822__auto____75404;
}
})())
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__75402),cljs.core.first.call(null,s2__75403)),map.call(null,f,cljs.core.rest.call(null,s1__75402),cljs.core.rest.call(null,s2__75403)));
} else
{return null;
}
}),null));
});
var map__4 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__75405 = cljs.core.seq.call(null,c1);
var s2__75406 = cljs.core.seq.call(null,c2);
var s3__75407 = cljs.core.seq.call(null,c3);
if((function (){var and__3822__auto____75408 = s1__75405;
if(and__3822__auto____75408)
{var and__3822__auto____75409 = s2__75406;
if(and__3822__auto____75409)
{return s3__75407;
} else
{return and__3822__auto____75409;
}
} else
{return and__3822__auto____75408;
}
})())
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__75405),cljs.core.first.call(null,s2__75406),cljs.core.first.call(null,s3__75407)),map.call(null,f,cljs.core.rest.call(null,s1__75405),cljs.core.rest.call(null,s2__75406),cljs.core.rest.call(null,s3__75407)));
} else
{return null;
}
}),null));
});
var map__5 = (function() { 
var G__75414__delegate = function (f,c1,c2,c3,colls){
var step__75412 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__75411 = map.call(null,cljs.core.seq,cs);
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__75411))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__75411),step.call(null,map.call(null,cljs.core.rest,ss__75411)));
} else
{return null;
}
}),null));
});
return map.call(null,(function (p1__75216_SHARP_){
return cljs.core.apply.call(null,f,p1__75216_SHARP_);
}),step__75412.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__75414 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__75414__delegate.call(this, f, c1, c2, c3, colls);
};
G__75414.cljs$lang$maxFixedArity = 4;
G__75414.cljs$lang$applyTo = (function (arglist__75415){
var f = cljs.core.first(arglist__75415);
var c1 = cljs.core.first(cljs.core.next(arglist__75415));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__75415)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__75415))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__75415))));
return G__75414__delegate(f, c1, c2, c3, colls);
});
G__75414.cljs$lang$arity$variadic = G__75414__delegate;
return G__75414;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return map__2.call(this,f,c1);
case 3:
return map__3.call(this,f,c1,c2);
case 4:
return map__4.call(this,f,c1,c2,c3);
default:
return map__5.cljs$lang$arity$variadic(f,c1,c2,c3, cljs.core.array_seq(arguments, 4));
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__5.cljs$lang$applyTo;
map.cljs$lang$arity$2 = map__2;
map.cljs$lang$arity$3 = map__3;
map.cljs$lang$arity$4 = map__4;
map.cljs$lang$arity$variadic = map__5.cljs$lang$arity$variadic;
return map;
})()
;
/**
* Returns a lazy sequence of the first n items in coll, or all items if
* there are fewer than n.
*/
cljs.core.take = (function take(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
if((n > 0))
{var temp__3974__auto____75418 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____75418)
{var s__75419 = temp__3974__auto____75418;
return cljs.core.cons.call(null,cljs.core.first.call(null,s__75419),take.call(null,(n - 1),cljs.core.rest.call(null,s__75419)));
} else
{return null;
}
} else
{return null;
}
}),null));
});
/**
* Returns a lazy sequence of all but the first n items in coll.
*/
cljs.core.drop = (function drop(n,coll){
var step__75425 = (function (n,coll){
while(true){
var s__75423 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_((function (){var and__3822__auto____75424 = (n > 0);
if(and__3822__auto____75424)
{return s__75423;
} else
{return and__3822__auto____75424;
}
})()))
{{
var G__75426 = (n - 1);
var G__75427 = cljs.core.rest.call(null,s__75423);
n = G__75426;
coll = G__75427;
continue;
}
} else
{return s__75423;
}
break;
}
});
return (new cljs.core.LazySeq(null,false,(function (){
return step__75425.call(null,n,coll);
}),null));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__1 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__2 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case 1:
return drop_last__1.call(this,n);
case 2:
return drop_last__2.call(this,n,s);
}
throw('Invalid arity: ' + arguments.length);
};
drop_last.cljs$lang$arity$1 = drop_last__1;
drop_last.cljs$lang$arity$2 = drop_last__2;
return drop_last;
})()
;
/**
* Returns a seq of the last n items in coll.  Depending on the type
* of coll may be no better than linear time.  For vectors, see also subvec.
*/
cljs.core.take_last = (function take_last(n,coll){
var s__75430 = cljs.core.seq.call(null,coll);
var lead__75431 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));
while(true){
if(lead__75431)
{{
var G__75432 = cljs.core.next.call(null,s__75430);
var G__75433 = cljs.core.next.call(null,lead__75431);
s__75430 = G__75432;
lead__75431 = G__75433;
continue;
}
} else
{return s__75430;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__75439 = (function (pred,coll){
while(true){
var s__75437 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_((function (){var and__3822__auto____75438 = s__75437;
if(and__3822__auto____75438)
{return pred.call(null,cljs.core.first.call(null,s__75437));
} else
{return and__3822__auto____75438;
}
})()))
{{
var G__75440 = pred;
var G__75441 = cljs.core.rest.call(null,s__75437);
pred = G__75440;
coll = G__75441;
continue;
}
} else
{return s__75437;
}
break;
}
});
return (new cljs.core.LazySeq(null,false,(function (){
return step__75439.call(null,pred,coll);
}),null));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____75444 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____75444)
{var s__75445 = temp__3974__auto____75444;
return cljs.core.concat.call(null,s__75445,cycle.call(null,s__75445));
} else
{return null;
}
}),null));
});
/**
* Returns a vector of [(take n coll) (drop n coll)]
*/
cljs.core.split_at = (function split_at(n,coll){
return cljs.core.PersistentVector.fromArray([cljs.core.take.call(null,n,coll),cljs.core.drop.call(null,n,coll)], true);
});
/**
* Returns a lazy (infinite!, or length n if supplied) sequence of xs.
*/
cljs.core.repeat = (function() {
var repeat = null;
var repeat__1 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
}),null));
});
var repeat__2 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case 1:
return repeat__1.call(this,n);
case 2:
return repeat__2.call(this,n,x);
}
throw('Invalid arity: ' + arguments.length);
};
repeat.cljs$lang$arity$1 = repeat__1;
repeat.cljs$lang$arity$2 = repeat__2;
return repeat;
})()
;
/**
* Returns a lazy seq of n xs.
*/
cljs.core.replicate = (function replicate(n,x){
return cljs.core.take.call(null,n,cljs.core.repeat.call(null,x));
});
/**
* Takes a function of no args, presumably with side effects, and
* returns an infinite (or length n if supplied) lazy sequence of calls
* to it
*/
cljs.core.repeatedly = (function() {
var repeatedly = null;
var repeatedly__1 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
}),null));
});
var repeatedly__2 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case 1:
return repeatedly__1.call(this,n);
case 2:
return repeatedly__2.call(this,n,f);
}
throw('Invalid arity: ' + arguments.length);
};
repeatedly.cljs$lang$arity$1 = repeatedly__1;
repeatedly.cljs$lang$arity$2 = repeatedly__2;
return repeatedly;
})()
;
/**
* Returns a lazy sequence of x, (f x), (f (f x)) etc. f must be free of side-effects
*/
cljs.core.iterate = (function iterate(f,x){
return cljs.core.cons.call(null,x,(new cljs.core.LazySeq(null,false,(function (){
return iterate.call(null,f,f.call(null,x));
}),null)));
});
/**
* Returns a lazy seq of the first item in each coll, then the second etc.
* @param {...*} var_args
*/
cljs.core.interleave = (function() {
var interleave = null;
var interleave__2 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__75450 = cljs.core.seq.call(null,c1);
var s2__75451 = cljs.core.seq.call(null,c2);
if((function (){var and__3822__auto____75452 = s1__75450;
if(and__3822__auto____75452)
{return s2__75451;
} else
{return and__3822__auto____75452;
}
})())
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__75450),cljs.core.cons.call(null,cljs.core.first.call(null,s2__75451),interleave.call(null,cljs.core.rest.call(null,s1__75450),cljs.core.rest.call(null,s2__75451))));
} else
{return null;
}
}),null));
});
var interleave__3 = (function() { 
var G__75454__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__75453 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__75453))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__75453),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__75453)));
} else
{return null;
}
}),null));
};
var G__75454 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__75454__delegate.call(this, c1, c2, colls);
};
G__75454.cljs$lang$maxFixedArity = 2;
G__75454.cljs$lang$applyTo = (function (arglist__75455){
var c1 = cljs.core.first(arglist__75455);
var c2 = cljs.core.first(cljs.core.next(arglist__75455));
var colls = cljs.core.rest(cljs.core.next(arglist__75455));
return G__75454__delegate(c1, c2, colls);
});
G__75454.cljs$lang$arity$variadic = G__75454__delegate;
return G__75454;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return interleave__2.call(this,c1,c2);
default:
return interleave__3.cljs$lang$arity$variadic(c1,c2, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__3.cljs$lang$applyTo;
interleave.cljs$lang$arity$2 = interleave__2;
interleave.cljs$lang$arity$variadic = interleave__3.cljs$lang$arity$variadic;
return interleave;
})()
;
/**
* Returns a lazy seq of the elements of coll separated by sep
*/
cljs.core.interpose = (function interpose(sep,coll){
return cljs.core.drop.call(null,1,cljs.core.interleave.call(null,cljs.core.repeat.call(null,sep),coll));
});
/**
* Take a collection of collections, and return a lazy seq
* of items from the inner collection
*/
cljs.core.flatten1 = (function flatten1(colls){
var cat__75465 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3971__auto____75463 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____75463)
{var coll__75464 = temp__3971__auto____75463;
return cljs.core.cons.call(null,cljs.core.first.call(null,coll__75464),cat.call(null,cljs.core.rest.call(null,coll__75464),colls));
} else
{if(cljs.core.seq.call(null,colls))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
}),null));
});
return cat__75465.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__2 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__3 = (function() { 
var G__75466__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__75466 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__75466__delegate.call(this, f, coll, colls);
};
G__75466.cljs$lang$maxFixedArity = 2;
G__75466.cljs$lang$applyTo = (function (arglist__75467){
var f = cljs.core.first(arglist__75467);
var coll = cljs.core.first(cljs.core.next(arglist__75467));
var colls = cljs.core.rest(cljs.core.next(arglist__75467));
return G__75466__delegate(f, coll, colls);
});
G__75466.cljs$lang$arity$variadic = G__75466__delegate;
return G__75466;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return mapcat__2.call(this,f,coll);
default:
return mapcat__3.cljs$lang$arity$variadic(f,coll, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__3.cljs$lang$applyTo;
mapcat.cljs$lang$arity$2 = mapcat__2;
mapcat.cljs$lang$arity$variadic = mapcat__3.cljs$lang$arity$variadic;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____75477 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____75477)
{var s__75478 = temp__3974__auto____75477;
if(cljs.core.chunked_seq_QMARK_.call(null,s__75478))
{var c__75479 = cljs.core.chunk_first.call(null,s__75478);
var size__75480 = cljs.core.count.call(null,c__75479);
var b__75481 = cljs.core.chunk_buffer.call(null,size__75480);
var n__5693__auto____75482 = size__75480;
var i__75483 = 0;
while(true){
if((i__75483 < n__5693__auto____75482))
{if(cljs.core.truth_(pred.call(null,cljs.core._nth.call(null,c__75479,i__75483))))
{cljs.core.chunk_append.call(null,b__75481,cljs.core._nth.call(null,c__75479,i__75483));
} else
{}
{
var G__75486 = (i__75483 + 1);
i__75483 = G__75486;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__75481),filter.call(null,pred,cljs.core.chunk_rest.call(null,s__75478)));
} else
{var f__75484 = cljs.core.first.call(null,s__75478);
var r__75485 = cljs.core.rest.call(null,s__75478);
if(cljs.core.truth_(pred.call(null,f__75484)))
{return cljs.core.cons.call(null,f__75484,filter.call(null,pred,r__75485));
} else
{return filter.call(null,pred,r__75485);
}
}
} else
{return null;
}
}),null));
});
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns false. pred must be free of side-effects.
*/
cljs.core.remove = (function remove(pred,coll){
return cljs.core.filter.call(null,cljs.core.complement.call(null,pred),coll);
});
/**
* Returns a lazy sequence of the nodes in a tree, via a depth-first walk.
* branch? must be a fn of one arg that returns true if passed a node
* that can have children (but may not).  children must be a fn of one
* arg that returns a sequence of the children. Will only be called on
* nodes for which branch? returns true. Root is the root node of the
* tree.
*/
cljs.core.tree_seq = (function tree_seq(branch_QMARK_,children,root){
var walk__75489 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
}),null));
});
return walk__75489.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__75487_SHARP_){
return !(cljs.core.sequential_QMARK_.call(null,p1__75487_SHARP_));
}),cljs.core.rest.call(null,cljs.core.tree_seq.call(null,cljs.core.sequential_QMARK_,cljs.core.seq,x)));
});
/**
* Returns a new coll consisting of to-coll with all of the items of
* from-coll conjoined.
*/
cljs.core.into = (function into(to,from){
if((function (){var G__75493__75494 = to;
if(G__75493__75494)
{if((function (){var or__3824__auto____75495 = (G__75493__75494.cljs$lang$protocol_mask$partition1$ & 4);
if(or__3824__auto____75495)
{return or__3824__auto____75495;
} else
{return G__75493__75494.cljs$core$IEditableCollection$;
}
})())
{return true;
} else
{if((!G__75493__75494.cljs$lang$protocol_mask$partition1$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IEditableCollection,G__75493__75494);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IEditableCollection,G__75493__75494);
}
})())
{return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,cljs.core._conj_BANG_,cljs.core.transient$.call(null,to),from));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,to,from);
}
});
/**
* Returns a vector consisting of the result of applying f to the
* set of first items of each coll, followed by applying f to the set
* of second items in each coll, until any one of the colls is
* exhausted.  Any remaining items in other colls are ignored. Function
* f should accept number-of-colls arguments.
* @param {...*} var_args
*/
cljs.core.mapv = (function() {
var mapv = null;
var mapv__2 = (function (f,coll){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (v,o){
return cljs.core.conj_BANG_.call(null,v,f.call(null,o));
}),cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),coll));
});
var mapv__3 = (function (f,c1,c2){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,f,c1,c2));
});
var mapv__4 = (function (f,c1,c2,c3){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,f,c1,c2,c3));
});
var mapv__5 = (function() { 
var G__75496__delegate = function (f,c1,c2,c3,colls){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.apply.call(null,cljs.core.map,f,c1,c2,c3,colls));
};
var G__75496 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__75496__delegate.call(this, f, c1, c2, c3, colls);
};
G__75496.cljs$lang$maxFixedArity = 4;
G__75496.cljs$lang$applyTo = (function (arglist__75497){
var f = cljs.core.first(arglist__75497);
var c1 = cljs.core.first(cljs.core.next(arglist__75497));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__75497)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__75497))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__75497))));
return G__75496__delegate(f, c1, c2, c3, colls);
});
G__75496.cljs$lang$arity$variadic = G__75496__delegate;
return G__75496;
})()
;
mapv = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return mapv__2.call(this,f,c1);
case 3:
return mapv__3.call(this,f,c1,c2);
case 4:
return mapv__4.call(this,f,c1,c2,c3);
default:
return mapv__5.cljs$lang$arity$variadic(f,c1,c2,c3, cljs.core.array_seq(arguments, 4));
}
throw('Invalid arity: ' + arguments.length);
};
mapv.cljs$lang$maxFixedArity = 4;
mapv.cljs$lang$applyTo = mapv__5.cljs$lang$applyTo;
mapv.cljs$lang$arity$2 = mapv__2;
mapv.cljs$lang$arity$3 = mapv__3;
mapv.cljs$lang$arity$4 = mapv__4;
mapv.cljs$lang$arity$variadic = mapv__5.cljs$lang$arity$variadic;
return mapv;
})()
;
/**
* Returns a vector of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filterv = (function filterv(pred,coll){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (v,o){
if(cljs.core.truth_(pred.call(null,o)))
{return cljs.core.conj_BANG_.call(null,v,o);
} else
{return v;
}
}),cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),coll));
});
/**
* Returns a lazy sequence of lists of n items each, at offsets step
* apart. If step is not supplied, defaults to n, i.e. the partitions
* do not overlap. If a pad collection is supplied, use its elements as
* necessary to complete last partition upto n items. In case there are
* not enough padding elements, return a partition with less than n items.
*/
cljs.core.partition = (function() {
var partition = null;
var partition__2 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__3 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____75504 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____75504)
{var s__75505 = temp__3974__auto____75504;
var p__75506 = cljs.core.take.call(null,n,s__75505);
if((n === cljs.core.count.call(null,p__75506)))
{return cljs.core.cons.call(null,p__75506,partition.call(null,n,step,cljs.core.drop.call(null,step,s__75505)));
} else
{return null;
}
} else
{return null;
}
}),null));
});
var partition__4 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____75507 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____75507)
{var s__75508 = temp__3974__auto____75507;
var p__75509 = cljs.core.take.call(null,n,s__75508);
if((n === cljs.core.count.call(null,p__75509)))
{return cljs.core.cons.call(null,p__75509,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__75508)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__75509,pad)));
}
} else
{return null;
}
}),null));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case 2:
return partition__2.call(this,n,step);
case 3:
return partition__3.call(this,n,step,pad);
case 4:
return partition__4.call(this,n,step,pad,coll);
}
throw('Invalid arity: ' + arguments.length);
};
partition.cljs$lang$arity$2 = partition__2;
partition.cljs$lang$arity$3 = partition__3;
partition.cljs$lang$arity$4 = partition__4;
return partition;
})()
;
/**
* Returns the value in a nested associative structure,
* where ks is a sequence of keys. Returns nil if the key is not present,
* or the not-found value if supplied.
*/
cljs.core.get_in = (function() {
var get_in = null;
var get_in__2 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__3 = (function (m,ks,not_found){
var sentinel__75514 = cljs.core.lookup_sentinel;
var m__75515 = m;
var ks__75516 = cljs.core.seq.call(null,ks);
while(true){
if(ks__75516)
{var m__75517 = cljs.core._lookup.call(null,m__75515,cljs.core.first.call(null,ks__75516),sentinel__75514);
if((sentinel__75514 === m__75517))
{return not_found;
} else
{{
var G__75518 = sentinel__75514;
var G__75519 = m__75517;
var G__75520 = cljs.core.next.call(null,ks__75516);
sentinel__75514 = G__75518;
m__75515 = G__75519;
ks__75516 = G__75520;
continue;
}
}
} else
{return m__75515;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case 2:
return get_in__2.call(this,m,ks);
case 3:
return get_in__3.call(this,m,ks,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
get_in.cljs$lang$arity$2 = get_in__2;
get_in.cljs$lang$arity$3 = get_in__3;
return get_in;
})()
;
/**
* Associates a value in a nested associative structure, where ks is a
* sequence of keys and v is the new value and returns a new nested structure.
* If any levels do not exist, hash-maps will be created.
*/
cljs.core.assoc_in = (function assoc_in(m,p__75521,v){
var vec__75526__75527 = p__75521;
var k__75528 = cljs.core.nth.call(null,vec__75526__75527,0,null);
var ks__75529 = cljs.core.nthnext.call(null,vec__75526__75527,1);
if(cljs.core.truth_(ks__75529))
{return cljs.core.assoc.call(null,m,k__75528,assoc_in.call(null,cljs.core._lookup.call(null,m,k__75528,null),ks__75529,v));
} else
{return cljs.core.assoc.call(null,m,k__75528,v);
}
});
/**
* 'Updates' a value in a nested associative structure, where ks is a
* sequence of keys and f is a function that will take the old value
* and any supplied args and return the new value, and returns a new
* nested structure.  If any levels do not exist, hash-maps will be
* created.
* @param {...*} var_args
*/
cljs.core.update_in = (function() { 
var update_in__delegate = function (m,p__75530,f,args){
var vec__75535__75536 = p__75530;
var k__75537 = cljs.core.nth.call(null,vec__75535__75536,0,null);
var ks__75538 = cljs.core.nthnext.call(null,vec__75535__75536,1);
if(cljs.core.truth_(ks__75538))
{return cljs.core.assoc.call(null,m,k__75537,cljs.core.apply.call(null,update_in,cljs.core._lookup.call(null,m,k__75537,null),ks__75538,f,args));
} else
{return cljs.core.assoc.call(null,m,k__75537,cljs.core.apply.call(null,f,cljs.core._lookup.call(null,m,k__75537,null),args));
}
};
var update_in = function (m,p__75530,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__75530, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__75539){
var m = cljs.core.first(arglist__75539);
var p__75530 = cljs.core.first(cljs.core.next(arglist__75539));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__75539)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__75539)));
return update_in__delegate(m, p__75530, f, args);
});
update_in.cljs$lang$arity$variadic = update_in__delegate;
return update_in;
})()
;

goog.provide('cljs.core.Vector');

/**
* @constructor
*/
cljs.core.Vector = (function (meta,array,__hash){
this.meta = meta;
this.array = array;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32400159;
})
cljs.core.Vector.cljs$lang$type = true;
cljs.core.Vector.cljs$lang$ctorPrSeq = (function (this__5466__auto__){
return cljs.core.list.call(null,"cljs.core/Vector");
});
cljs.core.Vector.cljs$lang$ctorPrWriter = (function (this__5466__auto__,writer__5467__auto__){
return cljs.core._write.call(null,writer__5467__auto__,"cljs.core/Vector");
});
cljs.core.Vector.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__75542 = this;
var h__5347__auto____75543 = this__75542.__hash;
if(!((h__5347__auto____75543 == null)))
{return h__5347__auto____75543;
} else
{var h__5347__auto____75544 = cljs.core.hash_coll.call(null,coll);
this__75542.__hash = h__5347__auto____75544;
return h__5347__auto____75544;
}
});
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__75545 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__75546 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__75547 = this;
var new_array__75548 = this__75547.array.slice();
(new_array__75548[k] = v);
return (new cljs.core.Vector(this__75547.meta,new_array__75548,null));
});
cljs.core.Vector.prototype.call = (function() {
var G__75579 = null;
var G__75579__2 = (function (this_sym75549,k){
var this__75551 = this;
var this_sym75549__75552 = this;
var coll__75553 = this_sym75549__75552;
return coll__75553.cljs$core$ILookup$_lookup$arity$2(coll__75553,k);
});
var G__75579__3 = (function (this_sym75550,k,not_found){
var this__75551 = this;
var this_sym75550__75554 = this;
var coll__75555 = this_sym75550__75554;
return coll__75555.cljs$core$ILookup$_lookup$arity$3(coll__75555,k,not_found);
});
G__75579 = function(this_sym75550,k,not_found){
switch(arguments.length){
case 2:
return G__75579__2.call(this,this_sym75550,k);
case 3:
return G__75579__3.call(this,this_sym75550,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__75579;
})()
;
cljs.core.Vector.prototype.apply = (function (this_sym75540,args75541){
var this__75556 = this;
return this_sym75540.call.apply(this_sym75540,[this_sym75540].concat(args75541.slice()));
});
cljs.core.Vector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__75557 = this;
var new_array__75558 = this__75557.array.slice();
new_array__75558.push(o);
return (new cljs.core.Vector(this__75557.meta,new_array__75558,null));
});
cljs.core.Vector.prototype.toString = (function (){
var this__75559 = this;
var this__75560 = this;
return cljs.core.pr_str.call(null,this__75560);
});
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var this__75561 = this;
return cljs.core.ci_reduce.call(null,this__75561.array,f);
});
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var this__75562 = this;
return cljs.core.ci_reduce.call(null,this__75562.array,f,start);
});
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__75563 = this;
if((this__75563.array.length > 0))
{var vector_seq__75564 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if((i < this__75563.array.length))
{return cljs.core.cons.call(null,(this__75563.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
}),null));
});
return vector_seq__75564.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__75565 = this;
return this__75565.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__75566 = this;
var count__75567 = this__75566.array.length;
if((count__75567 > 0))
{return (this__75566.array[(count__75567 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__75568 = this;
if((this__75568.array.length > 0))
{var new_array__75569 = this__75568.array.slice();
new_array__75569.pop();
return (new cljs.core.Vector(this__75568.meta,new_array__75569,null));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__75570 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__75571 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__75572 = this;
return (new cljs.core.Vector(meta,this__75572.array,this__75572.__hash));
});
cljs.core.Vector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__75573 = this;
return this__75573.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__75574 = this;
if((function (){var and__3822__auto____75575 = (0 <= n);
if(and__3822__auto____75575)
{return (n < this__75574.array.length);
} else
{return and__3822__auto____75575;
}
})())
{return (this__75574.array[n]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__75576 = this;
if((function (){var and__3822__auto____75577 = (0 <= n);
if(and__3822__auto____75577)
{return (n < this__75576.array.length);
} else
{return and__3822__auto____75577;
}
})())
{return (this__75576.array[n]);
} else
{return not_found;
}
});
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__75578 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__75578.meta);
});
cljs.core.Vector;
cljs.core.Vector.EMPTY = (new cljs.core.Vector(null,[],0));
cljs.core.Vector.fromArray = (function (xs){
return (new cljs.core.Vector(null,xs,null));
});

goog.provide('cljs.core.VectorNode');

/**
* @constructor
*/
cljs.core.VectorNode = (function (edit,arr){
this.edit = edit;
this.arr = arr;
})
cljs.core.VectorNode.cljs$lang$type = true;
cljs.core.VectorNode.cljs$lang$ctorPrSeq = (function (this__5468__auto__){
return cljs.core.list.call(null,"cljs.core/VectorNode");
});
cljs.core.VectorNode.cljs$lang$ctorPrWriter = (function (this__5468__auto__,writer__5469__auto__){
return cljs.core._write.call(null,writer__5469__auto__,"cljs.core/VectorNode");
});
cljs.core.VectorNode;
cljs.core.pv_fresh_node = (function pv_fresh_node(edit){
return (new cljs.core.VectorNode(edit,cljs.core.make_array.call(null,32)));
});
cljs.core.pv_aget = (function pv_aget(node,idx){
return (node.arr[idx]);
});
cljs.core.pv_aset = (function pv_aset(node,idx,val){
return (node.arr[idx] = val);
});
cljs.core.pv_clone_node = (function pv_clone_node(node){
return (new cljs.core.VectorNode(node.edit,node.arr.slice()));
});
cljs.core.tail_off = (function tail_off(pv){
var cnt__75581 = pv.cnt;
if((cnt__75581 < 32))
{return 0;
} else
{return (((cnt__75581 - 1) >>> 5) << 5);
}
});
cljs.core.new_path = (function new_path(edit,level,node){
var ll__75587 = level;
var ret__75588 = node;
while(true){
if((ll__75587 === 0))
{return ret__75588;
} else
{var embed__75589 = ret__75588;
var r__75590 = cljs.core.pv_fresh_node.call(null,edit);
var ___75591 = cljs.core.pv_aset.call(null,r__75590,0,embed__75589);
{
var G__75592 = (ll__75587 - 5);
var G__75593 = r__75590;
ll__75587 = G__75592;
ret__75588 = G__75593;
continue;
}
}
break;
}
});
cljs.core.push_tail = (function push_tail(pv,level,parent,tailnode){
var ret__75599 = cljs.core.pv_clone_node.call(null,parent);
var subidx__75600 = (((pv.cnt - 1) >>> level) & 31);
if((5 === level))
{cljs.core.pv_aset.call(null,ret__75599,subidx__75600,tailnode);
return ret__75599;
} else
{var child__75601 = cljs.core.pv_aget.call(null,parent,subidx__75600);
if(!((child__75601 == null)))
{var node_to_insert__75602 = push_tail.call(null,pv,(level - 5),child__75601,tailnode);
cljs.core.pv_aset.call(null,ret__75599,subidx__75600,node_to_insert__75602);
return ret__75599;
} else
{var node_to_insert__75603 = cljs.core.new_path.call(null,null,(level - 5),tailnode);
cljs.core.pv_aset.call(null,ret__75599,subidx__75600,node_to_insert__75603);
return ret__75599;
}
}
});
cljs.core.array_for = (function array_for(pv,i){
if((function (){var and__3822__auto____75607 = (0 <= i);
if(and__3822__auto____75607)
{return (i < pv.cnt);
} else
{return and__3822__auto____75607;
}
})())
{if((i >= cljs.core.tail_off.call(null,pv)))
{return pv.tail;
} else
{var node__75608 = pv.root;
var level__75609 = pv.shift;
while(true){
if((level__75609 > 0))
{{
var G__75610 = cljs.core.pv_aget.call(null,node__75608,((i >>> level__75609) & 31));
var G__75611 = (level__75609 - 5);
node__75608 = G__75610;
level__75609 = G__75611;
continue;
}
} else
{return node__75608.arr;
}
break;
}
}
} else
{throw (new Error([cljs.core.str("No item "),cljs.core.str(i),cljs.core.str(" in vector of length "),cljs.core.str(pv.cnt)].join('')));
}
});
cljs.core.do_assoc = (function do_assoc(pv,level,node,i,val){
var ret__75614 = cljs.core.pv_clone_node.call(null,node);
if((level === 0))
{cljs.core.pv_aset.call(null,ret__75614,(i & 31),val);
return ret__75614;
} else
{var subidx__75615 = ((i >>> level) & 31);
cljs.core.pv_aset.call(null,ret__75614,subidx__75615,do_assoc.call(null,pv,(level - 5),cljs.core.pv_aget.call(null,node,subidx__75615),i,val));
return ret__75614;
}
});
cljs.core.pop_tail = (function pop_tail(pv,level,node){
var subidx__75621 = (((pv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child__75622 = pop_tail.call(null,pv,(level - 5),cljs.core.pv_aget.call(null,node,subidx__75621));
if((function (){var and__3822__auto____75623 = (new_child__75622 == null);
if(and__3822__auto____75623)
{return (subidx__75621 === 0);
} else
{return and__3822__auto____75623;
}
})())
{return null;
} else
{var ret__75624 = cljs.core.pv_clone_node.call(null,node);
cljs.core.pv_aset.call(null,ret__75624,subidx__75621,new_child__75622);
return ret__75624;
}
} else
{if((subidx__75621 === 0))
{return null;
} else
{if("\uFDD0'else")
{var ret__75625 = cljs.core.pv_clone_node.call(null,node);
cljs.core.pv_aset.call(null,ret__75625,subidx__75621,null);
return ret__75625;
} else
{return null;
}
}
}
});

goog.provide('cljs.core.PersistentVector');

/**
* @constructor
*/
cljs.core.PersistentVector = (function (meta,cnt,shift,root,tail,__hash){
this.meta = meta;
this.cnt = cnt;
this.shift = shift;
this.root = root;
this.tail = tail;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 4;
this.cljs$lang$protocol_mask$partition0$ = 167668511;
})
cljs.core.PersistentVector.cljs$lang$type = true;
cljs.core.PersistentVector.cljs$lang$ctorPrSeq = (function (this__5466__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentVector");
});
cljs.core.PersistentVector.cljs$lang$ctorPrWriter = (function (this__5466__auto__,writer__5467__auto__){
return cljs.core._write.call(null,writer__5467__auto__,"cljs.core/PersistentVector");
});
cljs.core.PersistentVector.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__75628 = this;
return (new cljs.core.TransientVector(this__75628.cnt,this__75628.shift,cljs.core.tv_editable_root.call(null,this__75628.root),cljs.core.tv_editable_tail.call(null,this__75628.tail)));
});
cljs.core.PersistentVector.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__75629 = this;
var h__5347__auto____75630 = this__75629.__hash;
if(!((h__5347__auto____75630 == null)))
{return h__5347__auto____75630;
} else
{var h__5347__auto____75631 = cljs.core.hash_coll.call(null,coll);
this__75629.__hash = h__5347__auto____75631;
return h__5347__auto____75631;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__75632 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__75633 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__75634 = this;
if((function (){var and__3822__auto____75635 = (0 <= k);
if(and__3822__auto____75635)
{return (k < this__75634.cnt);
} else
{return and__3822__auto____75635;
}
})())
{if((cljs.core.tail_off.call(null,coll) <= k))
{var new_tail__75636 = this__75634.tail.slice();
(new_tail__75636[(k & 31)] = v);
return (new cljs.core.PersistentVector(this__75634.meta,this__75634.cnt,this__75634.shift,this__75634.root,new_tail__75636,null));
} else
{return (new cljs.core.PersistentVector(this__75634.meta,this__75634.cnt,this__75634.shift,cljs.core.do_assoc.call(null,coll,this__75634.shift,this__75634.root,k,v),this__75634.tail,null));
}
} else
{if((k === this__75634.cnt))
{return coll.cljs$core$ICollection$_conj$arity$2(coll,v);
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Index "),cljs.core.str(k),cljs.core.str(" out of bounds  [0,"),cljs.core.str(this__75634.cnt),cljs.core.str("]")].join('')));
} else
{return null;
}
}
}
});
cljs.core.PersistentVector.prototype.call = (function() {
var G__75684 = null;
var G__75684__2 = (function (this_sym75637,k){
var this__75639 = this;
var this_sym75637__75640 = this;
var coll__75641 = this_sym75637__75640;
return coll__75641.cljs$core$ILookup$_lookup$arity$2(coll__75641,k);
});
var G__75684__3 = (function (this_sym75638,k,not_found){
var this__75639 = this;
var this_sym75638__75642 = this;
var coll__75643 = this_sym75638__75642;
return coll__75643.cljs$core$ILookup$_lookup$arity$3(coll__75643,k,not_found);
});
G__75684 = function(this_sym75638,k,not_found){
switch(arguments.length){
case 2:
return G__75684__2.call(this,this_sym75638,k);
case 3:
return G__75684__3.call(this,this_sym75638,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__75684;
})()
;
cljs.core.PersistentVector.prototype.apply = (function (this_sym75626,args75627){
var this__75644 = this;
return this_sym75626.call.apply(this_sym75626,[this_sym75626].concat(args75627.slice()));
});
cljs.core.PersistentVector.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (v,f,init){
var this__75645 = this;
var step_init__75646 = [0,init];
var i__75647 = 0;
while(true){
if((i__75647 < this__75645.cnt))
{var arr__75648 = cljs.core.array_for.call(null,v,i__75647);
var len__75649 = arr__75648.length;
var init__75653 = (function (){var j__75650 = 0;
var init__75651 = (step_init__75646[1]);
while(true){
if((j__75650 < len__75649))
{var init__75652 = f.call(null,init__75651,(j__75650 + i__75647),(arr__75648[j__75650]));
if(cljs.core.reduced_QMARK_.call(null,init__75652))
{return init__75652;
} else
{{
var G__75685 = (j__75650 + 1);
var G__75686 = init__75652;
j__75650 = G__75685;
init__75651 = G__75686;
continue;
}
}
} else
{(step_init__75646[0] = len__75649);
(step_init__75646[1] = init__75651);
return init__75651;
}
break;
}
})();
if(cljs.core.reduced_QMARK_.call(null,init__75653))
{return cljs.core.deref.call(null,init__75653);
} else
{{
var G__75687 = (i__75647 + (step_init__75646[0]));
i__75647 = G__75687;
continue;
}
}
} else
{return (step_init__75646[1]);
}
break;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__75654 = this;
if(((this__75654.cnt - cljs.core.tail_off.call(null,coll)) < 32))
{var new_tail__75655 = this__75654.tail.slice();
new_tail__75655.push(o);
return (new cljs.core.PersistentVector(this__75654.meta,(this__75654.cnt + 1),this__75654.shift,this__75654.root,new_tail__75655,null));
} else
{var root_overflow_QMARK___75656 = ((this__75654.cnt >>> 5) > (1 << this__75654.shift));
var new_shift__75657 = ((root_overflow_QMARK___75656)?(this__75654.shift + 5):this__75654.shift);
var new_root__75659 = ((root_overflow_QMARK___75656)?(function (){var n_r__75658 = cljs.core.pv_fresh_node.call(null,null);
cljs.core.pv_aset.call(null,n_r__75658,0,this__75654.root);
cljs.core.pv_aset.call(null,n_r__75658,1,cljs.core.new_path.call(null,null,this__75654.shift,(new cljs.core.VectorNode(null,this__75654.tail))));
return n_r__75658;
})():cljs.core.push_tail.call(null,coll,this__75654.shift,this__75654.root,(new cljs.core.VectorNode(null,this__75654.tail))));
return (new cljs.core.PersistentVector(this__75654.meta,(this__75654.cnt + 1),new_shift__75657,new_root__75659,[o],null));
}
});
cljs.core.PersistentVector.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__75660 = this;
if((this__75660.cnt > 0))
{return (new cljs.core.RSeq(coll,(this__75660.cnt - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (coll){
var this__75661 = this;
return coll.cljs$core$IIndexed$_nth$arity$2(coll,0);
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (coll){
var this__75662 = this;
return coll.cljs$core$IIndexed$_nth$arity$2(coll,1);
});
cljs.core.PersistentVector.prototype.toString = (function (){
var this__75663 = this;
var this__75664 = this;
return cljs.core.pr_str.call(null,this__75664);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var this__75665 = this;
return cljs.core.ci_reduce.call(null,v,f);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var this__75666 = this;
return cljs.core.ci_reduce.call(null,v,f,start);
});
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__75667 = this;
if((this__75667.cnt === 0))
{return null;
} else
{return cljs.core.chunked_seq.call(null,coll,0,0);
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__75668 = this;
return this__75668.cnt;
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__75669 = this;
if((this__75669.cnt > 0))
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,(this__75669.cnt - 1));
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__75670 = this;
if((this__75670.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === this__75670.cnt))
{return cljs.core._with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__75670.meta);
} else
{if((1 < (this__75670.cnt - cljs.core.tail_off.call(null,coll))))
{return (new cljs.core.PersistentVector(this__75670.meta,(this__75670.cnt - 1),this__75670.shift,this__75670.root,this__75670.tail.slice(0,-1),null));
} else
{if("\uFDD0'else")
{var new_tail__75671 = cljs.core.array_for.call(null,coll,(this__75670.cnt - 2));
var nr__75672 = cljs.core.pop_tail.call(null,coll,this__75670.shift,this__75670.root);
var new_root__75673 = (((nr__75672 == null))?cljs.core.PersistentVector.EMPTY_NODE:nr__75672);
var cnt_1__75674 = (this__75670.cnt - 1);
if((function (){var and__3822__auto____75675 = (5 < this__75670.shift);
if(and__3822__auto____75675)
{return (cljs.core.pv_aget.call(null,new_root__75673,1) == null);
} else
{return and__3822__auto____75675;
}
})())
{return (new cljs.core.PersistentVector(this__75670.meta,cnt_1__75674,(this__75670.shift - 5),cljs.core.pv_aget.call(null,new_root__75673,0),new_tail__75671,null));
} else
{return (new cljs.core.PersistentVector(this__75670.meta,cnt_1__75674,this__75670.shift,new_root__75673,new_tail__75671,null));
}
} else
{return null;
}
}
}
}
});
cljs.core.PersistentVector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__75676 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__75677 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__75678 = this;
return (new cljs.core.PersistentVector(meta,this__75678.cnt,this__75678.shift,this__75678.root,this__75678.tail,this__75678.__hash));
});
cljs.core.PersistentVector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__75679 = this;
return this__75679.meta;
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__75680 = this;
return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__75681 = this;
if((function (){var and__3822__auto____75682 = (0 <= n);
if(and__3822__auto____75682)
{return (n < this__75681.cnt);
} else
{return and__3822__auto____75682;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return not_found;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__75683 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__75683.meta);
});
cljs.core.PersistentVector;
cljs.core.PersistentVector.EMPTY_NODE = cljs.core.pv_fresh_node.call(null,null);
cljs.core.PersistentVector.EMPTY = (new cljs.core.PersistentVector(null,0,5,cljs.core.PersistentVector.EMPTY_NODE,[],0));
cljs.core.PersistentVector.fromArray = (function (xs,no_clone){
var l__75688 = xs.length;
var xs__75689 = (((no_clone === true))?xs:xs.slice());
if((l__75688 < 32))
{return (new cljs.core.PersistentVector(null,l__75688,5,cljs.core.PersistentVector.EMPTY_NODE,xs__75689,null));
} else
{var node__75690 = xs__75689.slice(0,32);
var v__75691 = (new cljs.core.PersistentVector(null,32,5,cljs.core.PersistentVector.EMPTY_NODE,node__75690,null));
var i__75692 = 32;
var out__75693 = cljs.core._as_transient.call(null,v__75691);
while(true){
if((i__75692 < l__75688))
{{
var G__75694 = (i__75692 + 1);
var G__75695 = cljs.core.conj_BANG_.call(null,out__75693,(xs__75689[i__75692]));
i__75692 = G__75694;
out__75693 = G__75695;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__75693);
}
break;
}
}
});
cljs.core.vec = (function vec(coll){
return cljs.core._persistent_BANG_.call(null,cljs.core.reduce.call(null,cljs.core._conj_BANG_,cljs.core._as_transient.call(null,cljs.core.PersistentVector.EMPTY),coll));
});
/**
* @param {...*} var_args
*/
cljs.core.vector = (function() { 
var vector__delegate = function (args){
return cljs.core.vec.call(null,args);
};
var vector = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return vector__delegate.call(this, args);
};
vector.cljs$lang$maxFixedArity = 0;
vector.cljs$lang$applyTo = (function (arglist__75696){
var args = cljs.core.seq(arglist__75696);;
return vector__delegate(args);
});
vector.cljs$lang$arity$variadic = vector__delegate;
return vector;
})()
;

goog.provide('cljs.core.ChunkedSeq');

/**
* @constructor
*/
cljs.core.ChunkedSeq = (function (vec,node,i,off,meta,__hash){
this.vec = vec;
this.node = node;
this.i = i;
this.off = off;
this.meta = meta;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 31719660;
this.cljs$lang$protocol_mask$partition1$ = 1536;
})
cljs.core.ChunkedSeq.cljs$lang$type = true;
cljs.core.ChunkedSeq.cljs$lang$ctorPrSeq = (function (this__5466__auto__){
return cljs.core.list.call(null,"cljs.core/ChunkedSeq");
});
cljs.core.ChunkedSeq.cljs$lang$ctorPrWriter = (function (this__5466__auto__,writer__5467__auto__){
return cljs.core._write.call(null,writer__5467__auto__,"cljs.core/ChunkedSeq");
});
cljs.core.ChunkedSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__75697 = this;
var h__5347__auto____75698 = this__75697.__hash;
if(!((h__5347__auto____75698 == null)))
{return h__5347__auto____75698;
} else
{var h__5347__auto____75699 = cljs.core.hash_coll.call(null,coll);
this__75697.__hash = h__5347__auto____75699;
return h__5347__auto____75699;
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__75700 = this;
if(((this__75700.off + 1) < this__75700.node.length))
{var s__75701 = cljs.core.chunked_seq.call(null,this__75700.vec,this__75700.node,this__75700.i,(this__75700.off + 1));
if((s__75701 == null))
{return null;
} else
{return s__75701;
}
} else
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__75702 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__75703 = this;
return coll;
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__75704 = this;
return (this__75704.node[this__75704.off]);
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__75705 = this;
if(((this__75705.off + 1) < this__75705.node.length))
{var s__75706 = cljs.core.chunked_seq.call(null,this__75705.vec,this__75705.node,this__75705.i,(this__75705.off + 1));
if((s__75706 == null))
{return cljs.core.List.EMPTY;
} else
{return s__75706;
}
} else
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var this__75707 = this;
var l__75708 = this__75707.node.length;
var s__75709 = ((((this__75707.i + l__75708) < cljs.core._count.call(null,this__75707.vec)))?cljs.core.chunked_seq.call(null,this__75707.vec,(this__75707.i + l__75708),0):null);
if((s__75709 == null))
{return null;
} else
{return s__75709;
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__75710 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var this__75711 = this;
return cljs.core.chunked_seq.call(null,this__75711.vec,this__75711.node,this__75711.i,this__75711.off,m);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_meta$arity$1 = (function (coll){
var this__75712 = this;
return this__75712.meta;
});
cljs.core.ChunkedSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__75713 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__75713.meta);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var this__75714 = this;
return cljs.core.array_chunk.call(null,this__75714.node,this__75714.off);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var this__75715 = this;
var l__75716 = this__75715.node.length;
var s__75717 = ((((this__75715.i + l__75716) < cljs.core._count.call(null,this__75715.vec)))?cljs.core.chunked_seq.call(null,this__75715.vec,(this__75715.i + l__75716),0):null);
if((s__75717 == null))
{return cljs.core.List.EMPTY;
} else
{return s__75717;
}
});
cljs.core.ChunkedSeq;
cljs.core.chunked_seq = (function() {
var chunked_seq = null;
var chunked_seq__3 = (function (vec,i,off){
return chunked_seq.call(null,vec,cljs.core.array_for.call(null,vec,i),i,off,null);
});
var chunked_seq__4 = (function (vec,node,i,off){
return chunked_seq.call(null,vec,node,i,off,null);
});
var chunked_seq__5 = (function (vec,node,i,off,meta){
return (new cljs.core.ChunkedSeq(vec,node,i,off,meta,null));
});
chunked_seq = function(vec,node,i,off,meta){
switch(arguments.length){
case 3:
return chunked_seq__3.call(this,vec,node,i);
case 4:
return chunked_seq__4.call(this,vec,node,i,off);
case 5:
return chunked_seq__5.call(this,vec,node,i,off,meta);
}
throw('Invalid arity: ' + arguments.length);
};
chunked_seq.cljs$lang$arity$3 = chunked_seq__3;
chunked_seq.cljs$lang$arity$4 = chunked_seq__4;
chunked_seq.cljs$lang$arity$5 = chunked_seq__5;
return chunked_seq;
})()
;

goog.provide('cljs.core.Subvec');

/**
* @constructor
*/
cljs.core.Subvec = (function (meta,v,start,end,__hash){
this.meta = meta;
this.v = v;
this.start = start;
this.end = end;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32400159;
})
cljs.core.Subvec.cljs$lang$type = true;
cljs.core.Subvec.cljs$lang$ctorPrSeq = (function (this__5466__auto__){
return cljs.core.list.call(null,"cljs.core/Subvec");
});
cljs.core.Subvec.cljs$lang$ctorPrWriter = (function (this__5466__auto__,writer__5467__auto__){
return cljs.core._write.call(null,writer__5467__auto__,"cljs.core/Subvec");
});
cljs.core.Subvec.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__75720 = this;
var h__5347__auto____75721 = this__75720.__hash;
if(!((h__5347__auto____75721 == null)))
{return h__5347__auto____75721;
} else
{var h__5347__auto____75722 = cljs.core.hash_coll.call(null,coll);
this__75720.__hash = h__5347__auto____75722;
return h__5347__auto____75722;
}
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__75723 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__75724 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,key,val){
var this__75725 = this;
var v_pos__75726 = (this__75725.start + key);
return (new cljs.core.Subvec(this__75725.meta,cljs.core._assoc.call(null,this__75725.v,v_pos__75726,val),this__75725.start,((this__75725.end > (v_pos__75726 + 1)) ? this__75725.end : (v_pos__75726 + 1)),null));
});
cljs.core.Subvec.prototype.call = (function() {
var G__75752 = null;
var G__75752__2 = (function (this_sym75727,k){
var this__75729 = this;
var this_sym75727__75730 = this;
var coll__75731 = this_sym75727__75730;
return coll__75731.cljs$core$ILookup$_lookup$arity$2(coll__75731,k);
});
var G__75752__3 = (function (this_sym75728,k,not_found){
var this__75729 = this;
var this_sym75728__75732 = this;
var coll__75733 = this_sym75728__75732;
return coll__75733.cljs$core$ILookup$_lookup$arity$3(coll__75733,k,not_found);
});
G__75752 = function(this_sym75728,k,not_found){
switch(arguments.length){
case 2:
return G__75752__2.call(this,this_sym75728,k);
case 3:
return G__75752__3.call(this,this_sym75728,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__75752;
})()
;
cljs.core.Subvec.prototype.apply = (function (this_sym75718,args75719){
var this__75734 = this;
return this_sym75718.call.apply(this_sym75718,[this_sym75718].concat(args75719.slice()));
});
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__75735 = this;
return (new cljs.core.Subvec(this__75735.meta,cljs.core._assoc_n.call(null,this__75735.v,this__75735.end,o),this__75735.start,(this__75735.end + 1),null));
});
cljs.core.Subvec.prototype.toString = (function (){
var this__75736 = this;
var this__75737 = this;
return cljs.core.pr_str.call(null,this__75737);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__75738 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__75739 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__75740 = this;
var subvec_seq__75741 = (function subvec_seq(i){
if((i === this__75740.end))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__75740.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}),null)));
}
});
return subvec_seq__75741.call(null,this__75740.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__75742 = this;
return (this__75742.end - this__75742.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__75743 = this;
return cljs.core._nth.call(null,this__75743.v,(this__75743.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__75744 = this;
if((this__75744.start === this__75744.end))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__75744.meta,this__75744.v,this__75744.start,(this__75744.end - 1),null));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__75745 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__75746 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__75747 = this;
return (new cljs.core.Subvec(meta,this__75747.v,this__75747.start,this__75747.end,this__75747.__hash));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__75748 = this;
return this__75748.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__75749 = this;
return cljs.core._nth.call(null,this__75749.v,(this__75749.start + n));
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__75750 = this;
return cljs.core._nth.call(null,this__75750.v,(this__75750.start + n),not_found);
});
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__75751 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__75751.meta);
});
cljs.core.Subvec;
/**
* Returns a persistent vector of the items in vector from
* start (inclusive) to end (exclusive).  If end is not supplied,
* defaults to (count vector). This operation is O(1) and very fast, as
* the resulting vector shares structure with the original and no
* trimming is done.
*/
cljs.core.subvec = (function() {
var subvec = null;
var subvec__2 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__3 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end,null));
});
subvec = function(v,start,end){
switch(arguments.length){
case 2:
return subvec__2.call(this,v,start);
case 3:
return subvec__3.call(this,v,start,end);
}
throw('Invalid arity: ' + arguments.length);
};
subvec.cljs$lang$arity$2 = subvec__2;
subvec.cljs$lang$arity$3 = subvec__3;
return subvec;
})()
;
cljs.core.tv_ensure_editable = (function tv_ensure_editable(edit,node){
if((edit === node.edit))
{return node;
} else
{return (new cljs.core.VectorNode(edit,node.arr.slice()));
}
});
cljs.core.tv_editable_root = (function tv_editable_root(node){
return (new cljs.core.VectorNode({},node.arr.slice()));
});
cljs.core.tv_editable_tail = (function tv_editable_tail(tl){
var ret__75754 = cljs.core.make_array.call(null,32);
cljs.core.array_copy.call(null,tl,0,ret__75754,0,tl.length);
return ret__75754;
});
cljs.core.tv_push_tail = (function tv_push_tail(tv,level,parent,tail_node){
var ret__75758 = cljs.core.tv_ensure_editable.call(null,tv.root.edit,parent);
var subidx__75759 = (((tv.cnt - 1) >>> level) & 31);
cljs.core.pv_aset.call(null,ret__75758,subidx__75759,(((level === 5))?tail_node:(function (){var child__75760 = cljs.core.pv_aget.call(null,ret__75758,subidx__75759);
if(!((child__75760 == null)))
{return tv_push_tail.call(null,tv,(level - 5),child__75760,tail_node);
} else
{return cljs.core.new_path.call(null,tv.root.edit,(level - 5),tail_node);
}
})()));
return ret__75758;
});
cljs.core.tv_pop_tail = (function tv_pop_tail(tv,level,node){
var node__75765 = cljs.core.tv_ensure_editable.call(null,tv.root.edit,node);
var subidx__75766 = (((tv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child__75767 = tv_pop_tail.call(null,tv,(level - 5),cljs.core.pv_aget.call(null,node__75765,subidx__75766));
if((function (){var and__3822__auto____75768 = (new_child__75767 == null);
if(and__3822__auto____75768)
{return (subidx__75766 === 0);
} else
{return and__3822__auto____75768;
}
})())
{return null;
} else
{cljs.core.pv_aset.call(null,node__75765,subidx__75766,new_child__75767);
return node__75765;
}
} else
{if((subidx__75766 === 0))
{return null;
} else
{if("\uFDD0'else")
{cljs.core.pv_aset.call(null,node__75765,subidx__75766,null);
return node__75765;
} else
{return null;
}
}
}
});
cljs.core.editable_array_for = (function editable_array_for(tv,i){
if((function (){var and__3822__auto____75773 = (0 <= i);
if(and__3822__auto____75773)
{return (i < tv.cnt);
} else
{return and__3822__auto____75773;
}
})())
{if((i >= cljs.core.tail_off.call(null,tv)))
{return tv.tail;
} else
{var root__75774 = tv.root;
var node__75775 = root__75774;
var level__75776 = tv.shift;
while(true){
if((level__75776 > 0))
{{
var G__75777 = cljs.core.tv_ensure_editable.call(null,root__75774.edit,cljs.core.pv_aget.call(null,node__75775,((i >>> level__75776) & 31)));
var G__75778 = (level__75776 - 5);
node__75775 = G__75777;
level__75776 = G__75778;
continue;
}
} else
{return node__75775.arr;
}
break;
}
}
} else
{throw (new Error([cljs.core.str("No item "),cljs.core.str(i),cljs.core.str(" in transient vector of length "),cljs.core.str(tv.cnt)].join('')));
}
});

goog.provide('cljs.core.TransientVector');

/**
* @constructor
*/
cljs.core.TransientVector = (function (cnt,shift,root,tail){
this.cnt = cnt;
this.shift = shift;
this.root = root;
this.tail = tail;
this.cljs$lang$protocol_mask$partition0$ = 275;
this.cljs$lang$protocol_mask$partition1$ = 88;
})
cljs.core.TransientVector.cljs$lang$type = true;
cljs.core.TransientVector.cljs$lang$ctorPrSeq = (function (this__5466__auto__){
return cljs.core.list.call(null,"cljs.core/TransientVector");
});
cljs.core.TransientVector.cljs$lang$ctorPrWriter = (function (this__5466__auto__,writer__5467__auto__){
return cljs.core._write.call(null,writer__5467__auto__,"cljs.core/TransientVector");
});
cljs.core.TransientVector.prototype.call = (function() {
var G__75818 = null;
var G__75818__2 = (function (this_sym75781,k){
var this__75783 = this;
var this_sym75781__75784 = this;
var coll__75785 = this_sym75781__75784;
return coll__75785.cljs$core$ILookup$_lookup$arity$2(coll__75785,k);
});
var G__75818__3 = (function (this_sym75782,k,not_found){
var this__75783 = this;
var this_sym75782__75786 = this;
var coll__75787 = this_sym75782__75786;
return coll__75787.cljs$core$ILookup$_lookup$arity$3(coll__75787,k,not_found);
});
G__75818 = function(this_sym75782,k,not_found){
switch(arguments.length){
case 2:
return G__75818__2.call(this,this_sym75782,k);
case 3:
return G__75818__3.call(this,this_sym75782,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__75818;
})()
;
cljs.core.TransientVector.prototype.apply = (function (this_sym75779,args75780){
var this__75788 = this;
return this_sym75779.call.apply(this_sym75779,[this_sym75779].concat(args75780.slice()));
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__75789 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__75790 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__75791 = this;
if(this__75791.root.edit)
{return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
} else
{throw (new Error("nth after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__75792 = this;
if((function (){var and__3822__auto____75793 = (0 <= n);
if(and__3822__auto____75793)
{return (n < this__75792.cnt);
} else
{return and__3822__auto____75793;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return not_found;
}
});
cljs.core.TransientVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__75794 = this;
if(this__75794.root.edit)
{return this__75794.cnt;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3 = (function (tcoll,n,val){
var this__75795 = this;
if(this__75795.root.edit)
{if((function (){var and__3822__auto____75796 = (0 <= n);
if(and__3822__auto____75796)
{return (n < this__75795.cnt);
} else
{return and__3822__auto____75796;
}
})())
{if((cljs.core.tail_off.call(null,tcoll) <= n))
{(this__75795.tail[(n & 31)] = val);
return tcoll;
} else
{var new_root__75801 = (function go(level,node){
var node__75799 = cljs.core.tv_ensure_editable.call(null,this__75795.root.edit,node);
if((level === 0))
{cljs.core.pv_aset.call(null,node__75799,(n & 31),val);
return node__75799;
} else
{var subidx__75800 = ((n >>> level) & 31);
cljs.core.pv_aset.call(null,node__75799,subidx__75800,go.call(null,(level - 5),cljs.core.pv_aget.call(null,node__75799,subidx__75800)));
return node__75799;
}
}).call(null,this__75795.shift,this__75795.root);
this__75795.root = new_root__75801;
return tcoll;
}
} else
{if((n === this__75795.cnt))
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Index "),cljs.core.str(n),cljs.core.str(" out of bounds for TransientVector of length"),cljs.core.str(this__75795.cnt)].join('')));
} else
{return null;
}
}
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientVector$_pop_BANG_$arity$1 = (function (tcoll){
var this__75802 = this;
if(this__75802.root.edit)
{if((this__75802.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === this__75802.cnt))
{this__75802.cnt = 0;
return tcoll;
} else
{if((((this__75802.cnt - 1) & 31) > 0))
{this__75802.cnt = (this__75802.cnt - 1);
return tcoll;
} else
{if("\uFDD0'else")
{var new_tail__75803 = cljs.core.editable_array_for.call(null,tcoll,(this__75802.cnt - 2));
var new_root__75805 = (function (){var nr__75804 = cljs.core.tv_pop_tail.call(null,tcoll,this__75802.shift,this__75802.root);
if(!((nr__75804 == null)))
{return nr__75804;
} else
{return (new cljs.core.VectorNode(this__75802.root.edit,cljs.core.make_array.call(null,32)));
}
})();
if((function (){var and__3822__auto____75806 = (5 < this__75802.shift);
if(and__3822__auto____75806)
{return (cljs.core.pv_aget.call(null,new_root__75805,1) == null);
} else
{return and__3822__auto____75806;
}
})())
{var new_root__75807 = cljs.core.tv_ensure_editable.call(null,this__75802.root.edit,cljs.core.pv_aget.call(null,new_root__75805,0));
this__75802.root = new_root__75807;
this__75802.shift = (this__75802.shift - 5);
this__75802.cnt = (this__75802.cnt - 1);
this__75802.tail = new_tail__75803;
return tcoll;
} else
{this__75802.root = new_root__75805;
this__75802.cnt = (this__75802.cnt - 1);
this__75802.tail = new_tail__75803;
return tcoll;
}
} else
{return null;
}
}
}
}
} else
{throw (new Error("pop! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__75808 = this;
return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,key,val);
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__75809 = this;
if(this__75809.root.edit)
{if(((this__75809.cnt - cljs.core.tail_off.call(null,tcoll)) < 32))
{(this__75809.tail[(this__75809.cnt & 31)] = o);
this__75809.cnt = (this__75809.cnt + 1);
return tcoll;
} else
{var tail_node__75810 = (new cljs.core.VectorNode(this__75809.root.edit,this__75809.tail));
var new_tail__75811 = cljs.core.make_array.call(null,32);
(new_tail__75811[0] = o);
this__75809.tail = new_tail__75811;
if(((this__75809.cnt >>> 5) > (1 << this__75809.shift)))
{var new_root_array__75812 = cljs.core.make_array.call(null,32);
var new_shift__75813 = (this__75809.shift + 5);
(new_root_array__75812[0] = this__75809.root);
(new_root_array__75812[1] = cljs.core.new_path.call(null,this__75809.root.edit,this__75809.shift,tail_node__75810));
this__75809.root = (new cljs.core.VectorNode(this__75809.root.edit,new_root_array__75812));
this__75809.shift = new_shift__75813;
this__75809.cnt = (this__75809.cnt + 1);
return tcoll;
} else
{var new_root__75814 = cljs.core.tv_push_tail.call(null,tcoll,this__75809.shift,this__75809.root,tail_node__75810);
this__75809.root = new_root__75814;
this__75809.cnt = (this__75809.cnt + 1);
return tcoll;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__75815 = this;
if(this__75815.root.edit)
{this__75815.root.edit = null;
var len__75816 = (this__75815.cnt - cljs.core.tail_off.call(null,tcoll));
var trimmed_tail__75817 = cljs.core.make_array.call(null,len__75816);
cljs.core.array_copy.call(null,this__75815.tail,0,trimmed_tail__75817,0,len__75816);
return (new cljs.core.PersistentVector(null,this__75815.cnt,this__75815.shift,this__75815.root,trimmed_tail__75817,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientVector;

goog.provide('cljs.core.PersistentQueueSeq');

/**
* @constructor
*/
cljs.core.PersistentQueueSeq = (function (meta,front,rear,__hash){
this.meta = meta;
this.front = front;
this.rear = rear;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850572;
})
cljs.core.PersistentQueueSeq.cljs$lang$type = true;
cljs.core.PersistentQueueSeq.cljs$lang$ctorPrSeq = (function (this__5466__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentQueueSeq");
});
cljs.core.PersistentQueueSeq.cljs$lang$ctorPrWriter = (function (this__5466__auto__,writer__5467__auto__){
return cljs.core._write.call(null,writer__5467__auto__,"cljs.core/PersistentQueueSeq");
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__75819 = this;
var h__5347__auto____75820 = this__75819.__hash;
if(!((h__5347__auto____75820 == null)))
{return h__5347__auto____75820;
} else
{var h__5347__auto____75821 = cljs.core.hash_coll.call(null,coll);
this__75819.__hash = h__5347__auto____75821;
return h__5347__auto____75821;
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__75822 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.toString = (function (){
var this__75823 = this;
var this__75824 = this;
return cljs.core.pr_str.call(null,this__75824);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__75825 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__75826 = this;
return cljs.core._first.call(null,this__75826.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__75827 = this;
var temp__3971__auto____75828 = cljs.core.next.call(null,this__75827.front);
if(temp__3971__auto____75828)
{var f1__75829 = temp__3971__auto____75828;
return (new cljs.core.PersistentQueueSeq(this__75827.meta,f1__75829,this__75827.rear,null));
} else
{if((this__75827.rear == null))
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__75827.meta,this__75827.rear,null,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__75830 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__75831 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__75831.front,this__75831.rear,this__75831.__hash));
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__75832 = this;
return this__75832.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__75833 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__75833.meta);
});
cljs.core.PersistentQueueSeq;

goog.provide('cljs.core.PersistentQueue');

/**
* @constructor
*/
cljs.core.PersistentQueue = (function (meta,count,front,rear,__hash){
this.meta = meta;
this.count = count;
this.front = front;
this.rear = rear;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31858766;
})
cljs.core.PersistentQueue.cljs$lang$type = true;
cljs.core.PersistentQueue.cljs$lang$ctorPrSeq = (function (this__5466__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentQueue");
});
cljs.core.PersistentQueue.cljs$lang$ctorPrWriter = (function (this__5466__auto__,writer__5467__auto__){
return cljs.core._write.call(null,writer__5467__auto__,"cljs.core/PersistentQueue");
});
cljs.core.PersistentQueue.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__75834 = this;
var h__5347__auto____75835 = this__75834.__hash;
if(!((h__5347__auto____75835 == null)))
{return h__5347__auto____75835;
} else
{var h__5347__auto____75836 = cljs.core.hash_coll.call(null,coll);
this__75834.__hash = h__5347__auto____75836;
return h__5347__auto____75836;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__75837 = this;
if(cljs.core.truth_(this__75837.front))
{return (new cljs.core.PersistentQueue(this__75837.meta,(this__75837.count + 1),this__75837.front,cljs.core.conj.call(null,(function (){var or__3824__auto____75838 = this__75837.rear;
if(cljs.core.truth_(or__3824__auto____75838))
{return or__3824__auto____75838;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})(),o),null));
} else
{return (new cljs.core.PersistentQueue(this__75837.meta,(this__75837.count + 1),cljs.core.conj.call(null,this__75837.front,o),cljs.core.PersistentVector.EMPTY,null));
}
});
cljs.core.PersistentQueue.prototype.toString = (function (){
var this__75839 = this;
var this__75840 = this;
return cljs.core.pr_str.call(null,this__75840);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__75841 = this;
var rear__75842 = cljs.core.seq.call(null,this__75841.rear);
if(cljs.core.truth_((function (){var or__3824__auto____75843 = this__75841.front;
if(cljs.core.truth_(or__3824__auto____75843))
{return or__3824__auto____75843;
} else
{return rear__75842;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__75841.front,cljs.core.seq.call(null,rear__75842),null));
} else
{return null;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__75844 = this;
return this__75844.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__75845 = this;
return cljs.core._first.call(null,this__75845.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__75846 = this;
if(cljs.core.truth_(this__75846.front))
{var temp__3971__auto____75847 = cljs.core.next.call(null,this__75846.front);
if(temp__3971__auto____75847)
{var f1__75848 = temp__3971__auto____75847;
return (new cljs.core.PersistentQueue(this__75846.meta,(this__75846.count - 1),f1__75848,this__75846.rear,null));
} else
{return (new cljs.core.PersistentQueue(this__75846.meta,(this__75846.count - 1),cljs.core.seq.call(null,this__75846.rear),cljs.core.PersistentVector.EMPTY,null));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__75849 = this;
return cljs.core.first.call(null,this__75849.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__75850 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__75851 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__75852 = this;
return (new cljs.core.PersistentQueue(meta,this__75852.count,this__75852.front,this__75852.rear,this__75852.__hash));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__75853 = this;
return this__75853.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__75854 = this;
return cljs.core.PersistentQueue.EMPTY;
});
cljs.core.PersistentQueue;
cljs.core.PersistentQueue.EMPTY = (new cljs.core.PersistentQueue(null,0,null,cljs.core.PersistentVector.EMPTY,0));

goog.provide('cljs.core.NeverEquiv');

/**
* @constructor
*/
cljs.core.NeverEquiv = (function (){
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2097152;
})
cljs.core.NeverEquiv.cljs$lang$type = true;
cljs.core.NeverEquiv.cljs$lang$ctorPrSeq = (function (this__5466__auto__){
return cljs.core.list.call(null,"cljs.core/NeverEquiv");
});
cljs.core.NeverEquiv.cljs$lang$ctorPrWriter = (function (this__5466__auto__,writer__5467__auto__){
return cljs.core._write.call(null,writer__5467__auto__,"cljs.core/NeverEquiv");
});
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var this__75855 = this;
return false;
});
cljs.core.NeverEquiv;
cljs.core.never_equiv = (new cljs.core.NeverEquiv());
/**
* Assumes y is a map. Returns true if x equals y, otherwise returns
* false.
*/
cljs.core.equiv_map = (function equiv_map(x,y){
return cljs.core.boolean$.call(null,((cljs.core.map_QMARK_.call(null,y))?(((cljs.core.count.call(null,x) === cljs.core.count.call(null,y)))?cljs.core.every_QMARK_.call(null,cljs.core.identity,cljs.core.map.call(null,(function (xkv){
return cljs.core._EQ_.call(null,cljs.core._lookup.call(null,y,cljs.core.first.call(null,xkv),cljs.core.never_equiv),cljs.core.second.call(null,xkv));
}),x)):null):null));
});
cljs.core.scan_array = (function scan_array(incr,k,array){
var len__75858 = array.length;
var i__75859 = 0;
while(true){
if((i__75859 < len__75858))
{if((k === (array[i__75859])))
{return i__75859;
} else
{{
var G__75860 = (i__75859 + incr);
i__75859 = G__75860;
continue;
}
}
} else
{return null;
}
break;
}
});
cljs.core.obj_map_compare_keys = (function obj_map_compare_keys(a,b){
var a__75863 = cljs.core.hash.call(null,a);
var b__75864 = cljs.core.hash.call(null,b);
if((a__75863 < b__75864))
{return -1;
} else
{if((a__75863 > b__75864))
{return 1;
} else
{if("\uFDD0'else")
{return 0;
} else
{return null;
}
}
}
});
cljs.core.obj_map__GT_hash_map = (function obj_map__GT_hash_map(m,k,v){
var ks__75872 = m.keys;
var len__75873 = ks__75872.length;
var so__75874 = m.strobj;
var out__75875 = cljs.core.with_meta.call(null,cljs.core.PersistentHashMap.EMPTY,cljs.core.meta.call(null,m));
var i__75876 = 0;
var out__75877 = cljs.core.transient$.call(null,out__75875);
while(true){
if((i__75876 < len__75873))
{var k__75878 = (ks__75872[i__75876]);
{
var G__75879 = (i__75876 + 1);
var G__75880 = cljs.core.assoc_BANG_.call(null,out__75877,k__75878,(so__75874[k__75878]));
i__75876 = G__75879;
out__75877 = G__75880;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,cljs.core.assoc_BANG_.call(null,out__75877,k,v));
}
break;
}
});
cljs.core.obj_clone = (function obj_clone(obj,ks){
var new_obj__75886 = {};
var l__75887 = ks.length;
var i__75888 = 0;
while(true){
if((i__75888 < l__75887))
{var k__75889 = (ks[i__75888]);
(new_obj__75886[k__75889] = (obj[k__75889]));
{
var G__75890 = (i__75888 + 1);
i__75888 = G__75890;
continue;
}
} else
{}
break;
}
return new_obj__75886;
});

goog.provide('cljs.core.ObjMap');

/**
* @constructor
*/
cljs.core.ObjMap = (function (meta,keys,strobj,update_count,__hash){
this.meta = meta;
this.keys = keys;
this.strobj = strobj;
this.update_count = update_count;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 4;
this.cljs$lang$protocol_mask$partition0$ = 15075087;
})
cljs.core.ObjMap.cljs$lang$type = true;
cljs.core.ObjMap.cljs$lang$ctorPrSeq = (function (this__5466__auto__){
return cljs.core.list.call(null,"cljs.core/ObjMap");
});
cljs.core.ObjMap.cljs$lang$ctorPrWriter = (function (this__5466__auto__,writer__5467__auto__){
return cljs.core._write.call(null,writer__5467__auto__,"cljs.core/ObjMap");
});
cljs.core.ObjMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__75893 = this;
return cljs.core.transient$.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null),coll));
});
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__75894 = this;
var h__5347__auto____75895 = this__75894.__hash;
if(!((h__5347__auto____75895 == null)))
{return h__5347__auto____75895;
} else
{var h__5347__auto____75896 = cljs.core.hash_imap.call(null,coll);
this__75894.__hash = h__5347__auto____75896;
return h__5347__auto____75896;
}
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__75897 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__75898 = this;
if((function (){var and__3822__auto____75899 = goog.isString(k);
if(and__3822__auto____75899)
{return !((cljs.core.scan_array.call(null,1,k,this__75898.keys) == null));
} else
{return and__3822__auto____75899;
}
})())
{return (this__75898.strobj[k]);
} else
{return not_found;
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__75900 = this;
if(goog.isString(k))
{if((function (){var or__3824__auto____75901 = (this__75900.update_count > cljs.core.ObjMap.HASHMAP_THRESHOLD);
if(or__3824__auto____75901)
{return or__3824__auto____75901;
} else
{return (this__75900.keys.length >= cljs.core.ObjMap.HASHMAP_THRESHOLD);
}
})())
{return cljs.core.obj_map__GT_hash_map.call(null,coll,k,v);
} else
{if(!((cljs.core.scan_array.call(null,1,k,this__75900.keys) == null)))
{var new_strobj__75902 = cljs.core.obj_clone.call(null,this__75900.strobj,this__75900.keys);
(new_strobj__75902[k] = v);
return (new cljs.core.ObjMap(this__75900.meta,this__75900.keys,new_strobj__75902,(this__75900.update_count + 1),null));
} else
{var new_strobj__75903 = cljs.core.obj_clone.call(null,this__75900.strobj,this__75900.keys);
var new_keys__75904 = this__75900.keys.slice();
(new_strobj__75903[k] = v);
new_keys__75904.push(k);
return (new cljs.core.ObjMap(this__75900.meta,new_keys__75904,new_strobj__75903,(this__75900.update_count + 1),null));
}
}
} else
{return cljs.core.obj_map__GT_hash_map.call(null,coll,k,v);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__75905 = this;
if((function (){var and__3822__auto____75906 = goog.isString(k);
if(and__3822__auto____75906)
{return !((cljs.core.scan_array.call(null,1,k,this__75905.keys) == null));
} else
{return and__3822__auto____75906;
}
})())
{return true;
} else
{return false;
}
});
cljs.core.ObjMap.prototype.call = (function() {
var G__75928 = null;
var G__75928__2 = (function (this_sym75907,k){
var this__75909 = this;
var this_sym75907__75910 = this;
var coll__75911 = this_sym75907__75910;
return coll__75911.cljs$core$ILookup$_lookup$arity$2(coll__75911,k);
});
var G__75928__3 = (function (this_sym75908,k,not_found){
var this__75909 = this;
var this_sym75908__75912 = this;
var coll__75913 = this_sym75908__75912;
return coll__75913.cljs$core$ILookup$_lookup$arity$3(coll__75913,k,not_found);
});
G__75928 = function(this_sym75908,k,not_found){
switch(arguments.length){
case 2:
return G__75928__2.call(this,this_sym75908,k);
case 3:
return G__75928__3.call(this,this_sym75908,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__75928;
})()
;
cljs.core.ObjMap.prototype.apply = (function (this_sym75891,args75892){
var this__75914 = this;
return this_sym75891.call.apply(this_sym75891,[this_sym75891].concat(args75892.slice()));
});
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__75915 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.toString = (function (){
var this__75916 = this;
var this__75917 = this;
return cljs.core.pr_str.call(null,this__75917);
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__75918 = this;
if((this__75918.keys.length > 0))
{return cljs.core.map.call(null,(function (p1__75881_SHARP_){
return cljs.core.vector.call(null,p1__75881_SHARP_,(this__75918.strobj[p1__75881_SHARP_]));
}),this__75918.keys.sort(cljs.core.obj_map_compare_keys));
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__75919 = this;
return this__75919.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__75920 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__75921 = this;
return (new cljs.core.ObjMap(meta,this__75921.keys,this__75921.strobj,this__75921.update_count,this__75921.__hash));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__75922 = this;
return this__75922.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__75923 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__75923.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__75924 = this;
if((function (){var and__3822__auto____75925 = goog.isString(k);
if(and__3822__auto____75925)
{return !((cljs.core.scan_array.call(null,1,k,this__75924.keys) == null));
} else
{return and__3822__auto____75925;
}
})())
{var new_keys__75926 = this__75924.keys.slice();
var new_strobj__75927 = cljs.core.obj_clone.call(null,this__75924.strobj,this__75924.keys);
new_keys__75926.splice(cljs.core.scan_array.call(null,1,k,new_keys__75926),1);
cljs.core.js_delete.call(null,new_strobj__75927,k);
return (new cljs.core.ObjMap(this__75924.meta,new_keys__75926,new_strobj__75927,(this__75924.update_count + 1),null));
} else
{return coll;
}
});
cljs.core.ObjMap;
cljs.core.ObjMap.EMPTY = (new cljs.core.ObjMap(null,[],{},0,0));
cljs.core.ObjMap.HASHMAP_THRESHOLD = 32;
cljs.core.ObjMap.fromObject = (function (ks,obj){
return (new cljs.core.ObjMap(null,ks,obj,0,null));
});

goog.provide('cljs.core.HashMap');

/**
* @constructor
*/
cljs.core.HashMap = (function (meta,count,hashobj,__hash){
this.meta = meta;
this.count = count;
this.hashobj = hashobj;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 15075087;
})
cljs.core.HashMap.cljs$lang$type = true;
cljs.core.HashMap.cljs$lang$ctorPrSeq = (function (this__5466__auto__){
return cljs.core.list.call(null,"cljs.core/HashMap");
});
cljs.core.HashMap.cljs$lang$ctorPrWriter = (function (this__5466__auto__,writer__5467__auto__){
return cljs.core._write.call(null,writer__5467__auto__,"cljs.core/HashMap");
});
cljs.core.HashMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__75932 = this;
var h__5347__auto____75933 = this__75932.__hash;
if(!((h__5347__auto____75933 == null)))
{return h__5347__auto____75933;
} else
{var h__5347__auto____75934 = cljs.core.hash_imap.call(null,coll);
this__75932.__hash = h__5347__auto____75934;
return h__5347__auto____75934;
}
});
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__75935 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__75936 = this;
var bucket__75937 = (this__75936.hashobj[cljs.core.hash.call(null,k)]);
var i__75938 = (cljs.core.truth_(bucket__75937)?cljs.core.scan_array.call(null,2,k,bucket__75937):null);
if(cljs.core.truth_(i__75938))
{return (bucket__75937[(i__75938 + 1)]);
} else
{return not_found;
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__75939 = this;
var h__75940 = cljs.core.hash.call(null,k);
var bucket__75941 = (this__75939.hashobj[h__75940]);
if(cljs.core.truth_(bucket__75941))
{var new_bucket__75942 = bucket__75941.slice();
var new_hashobj__75943 = goog.object.clone(this__75939.hashobj);
(new_hashobj__75943[h__75940] = new_bucket__75942);
var temp__3971__auto____75944 = cljs.core.scan_array.call(null,2,k,new_bucket__75942);
if(cljs.core.truth_(temp__3971__auto____75944))
{var i__75945 = temp__3971__auto____75944;
(new_bucket__75942[(i__75945 + 1)] = v);
return (new cljs.core.HashMap(this__75939.meta,this__75939.count,new_hashobj__75943,null));
} else
{new_bucket__75942.push(k,v);
return (new cljs.core.HashMap(this__75939.meta,(this__75939.count + 1),new_hashobj__75943,null));
}
} else
{var new_hashobj__75946 = goog.object.clone(this__75939.hashobj);
(new_hashobj__75946[h__75940] = [k,v]);
return (new cljs.core.HashMap(this__75939.meta,(this__75939.count + 1),new_hashobj__75946,null));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__75947 = this;
var bucket__75948 = (this__75947.hashobj[cljs.core.hash.call(null,k)]);
var i__75949 = (cljs.core.truth_(bucket__75948)?cljs.core.scan_array.call(null,2,k,bucket__75948):null);
if(cljs.core.truth_(i__75949))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.call = (function() {
var G__75974 = null;
var G__75974__2 = (function (this_sym75950,k){
var this__75952 = this;
var this_sym75950__75953 = this;
var coll__75954 = this_sym75950__75953;
return coll__75954.cljs$core$ILookup$_lookup$arity$2(coll__75954,k);
});
var G__75974__3 = (function (this_sym75951,k,not_found){
var this__75952 = this;
var this_sym75951__75955 = this;
var coll__75956 = this_sym75951__75955;
return coll__75956.cljs$core$ILookup$_lookup$arity$3(coll__75956,k,not_found);
});
G__75974 = function(this_sym75951,k,not_found){
switch(arguments.length){
case 2:
return G__75974__2.call(this,this_sym75951,k);
case 3:
return G__75974__3.call(this,this_sym75951,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__75974;
})()
;
cljs.core.HashMap.prototype.apply = (function (this_sym75930,args75931){
var this__75957 = this;
return this_sym75930.call.apply(this_sym75930,[this_sym75930].concat(args75931.slice()));
});
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__75958 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.toString = (function (){
var this__75959 = this;
var this__75960 = this;
return cljs.core.pr_str.call(null,this__75960);
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__75961 = this;
if((this__75961.count > 0))
{var hashes__75962 = cljs.core.js_keys.call(null,this__75961.hashobj).sort();
return cljs.core.mapcat.call(null,(function (p1__75929_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__75961.hashobj[p1__75929_SHARP_])));
}),hashes__75962);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__75963 = this;
return this__75963.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__75964 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__75965 = this;
return (new cljs.core.HashMap(meta,this__75965.count,this__75965.hashobj,this__75965.__hash));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__75966 = this;
return this__75966.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__75967 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__75967.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__75968 = this;
var h__75969 = cljs.core.hash.call(null,k);
var bucket__75970 = (this__75968.hashobj[h__75969]);
var i__75971 = (cljs.core.truth_(bucket__75970)?cljs.core.scan_array.call(null,2,k,bucket__75970):null);
if(cljs.core.not.call(null,i__75971))
{return coll;
} else
{var new_hashobj__75972 = goog.object.clone(this__75968.hashobj);
if((3 > bucket__75970.length))
{cljs.core.js_delete.call(null,new_hashobj__75972,h__75969);
} else
{var new_bucket__75973 = bucket__75970.slice();
new_bucket__75973.splice(i__75971,2);
(new_hashobj__75972[h__75969] = new_bucket__75973);
}
return (new cljs.core.HashMap(this__75968.meta,(this__75968.count - 1),new_hashobj__75972,null));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,{},0));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__75975 = ks.length;
var i__75976 = 0;
var out__75977 = cljs.core.HashMap.EMPTY;
while(true){
if((i__75976 < len__75975))
{{
var G__75978 = (i__75976 + 1);
var G__75979 = cljs.core.assoc.call(null,out__75977,(ks[i__75976]),(vs[i__75976]));
i__75976 = G__75978;
out__75977 = G__75979;
continue;
}
} else
{return out__75977;
}
break;
}
});
cljs.core.array_map_index_of = (function array_map_index_of(m,k){
var arr__75983 = m.arr;
var len__75984 = arr__75983.length;
var i__75985 = 0;
while(true){
if((len__75984 <= i__75985))
{return -1;
} else
{if(cljs.core._EQ_.call(null,(arr__75983[i__75985]),k))
{return i__75985;
} else
{if("\uFDD0'else")
{{
var G__75986 = (i__75985 + 2);
i__75985 = G__75986;
continue;
}
} else
{return null;
}
}
}
break;
}
});

goog.provide('cljs.core.PersistentArrayMap');

/**
* @constructor
*/
cljs.core.PersistentArrayMap = (function (meta,cnt,arr,__hash){
this.meta = meta;
this.cnt = cnt;
this.arr = arr;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 4;
this.cljs$lang$protocol_mask$partition0$ = 16123663;
})
cljs.core.PersistentArrayMap.cljs$lang$type = true;
cljs.core.PersistentArrayMap.cljs$lang$ctorPrSeq = (function (this__5466__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentArrayMap");
});
cljs.core.PersistentArrayMap.cljs$lang$ctorPrWriter = (function (this__5466__auto__,writer__5467__auto__){
return cljs.core._write.call(null,writer__5467__auto__,"cljs.core/PersistentArrayMap");
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__75989 = this;
return (new cljs.core.TransientArrayMap({},this__75989.arr.length,this__75989.arr.slice()));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__75990 = this;
var h__5347__auto____75991 = this__75990.__hash;
if(!((h__5347__auto____75991 == null)))
{return h__5347__auto____75991;
} else
{var h__5347__auto____75992 = cljs.core.hash_imap.call(null,coll);
this__75990.__hash = h__5347__auto____75992;
return h__5347__auto____75992;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__75993 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__75994 = this;
var idx__75995 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__75995 === -1))
{return not_found;
} else
{return (this__75994.arr[(idx__75995 + 1)]);
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__75996 = this;
var idx__75997 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__75997 === -1))
{if((this__75996.cnt < cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD))
{return (new cljs.core.PersistentArrayMap(this__75996.meta,(this__75996.cnt + 1),(function (){var G__75998__75999 = this__75996.arr.slice();
G__75998__75999.push(k);
G__75998__75999.push(v);
return G__75998__75999;
})(),null));
} else
{return cljs.core.persistent_BANG_.call(null,cljs.core.assoc_BANG_.call(null,cljs.core.transient$.call(null,cljs.core.into.call(null,cljs.core.PersistentHashMap.EMPTY,coll)),k,v));
}
} else
{if((v === (this__75996.arr[(idx__75997 + 1)])))
{return coll;
} else
{if("\uFDD0'else")
{return (new cljs.core.PersistentArrayMap(this__75996.meta,this__75996.cnt,(function (){var G__76000__76001 = this__75996.arr.slice();
(G__76000__76001[(idx__75997 + 1)] = v);
return G__76000__76001;
})(),null));
} else
{return null;
}
}
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__76002 = this;
return !((cljs.core.array_map_index_of.call(null,coll,k) === -1));
});
cljs.core.PersistentArrayMap.prototype.call = (function() {
var G__76034 = null;
var G__76034__2 = (function (this_sym76003,k){
var this__76005 = this;
var this_sym76003__76006 = this;
var coll__76007 = this_sym76003__76006;
return coll__76007.cljs$core$ILookup$_lookup$arity$2(coll__76007,k);
});
var G__76034__3 = (function (this_sym76004,k,not_found){
var this__76005 = this;
var this_sym76004__76008 = this;
var coll__76009 = this_sym76004__76008;
return coll__76009.cljs$core$ILookup$_lookup$arity$3(coll__76009,k,not_found);
});
G__76034 = function(this_sym76004,k,not_found){
switch(arguments.length){
case 2:
return G__76034__2.call(this,this_sym76004,k);
case 3:
return G__76034__3.call(this,this_sym76004,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__76034;
})()
;
cljs.core.PersistentArrayMap.prototype.apply = (function (this_sym75987,args75988){
var this__76010 = this;
return this_sym75987.call.apply(this_sym75987,[this_sym75987].concat(args75988.slice()));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__76011 = this;
var len__76012 = this__76011.arr.length;
var i__76013 = 0;
var init__76014 = init;
while(true){
if((i__76013 < len__76012))
{var init__76015 = f.call(null,init__76014,(this__76011.arr[i__76013]),(this__76011.arr[(i__76013 + 1)]));
if(cljs.core.reduced_QMARK_.call(null,init__76015))
{return cljs.core.deref.call(null,init__76015);
} else
{{
var G__76035 = (i__76013 + 2);
var G__76036 = init__76015;
i__76013 = G__76035;
init__76014 = G__76036;
continue;
}
}
} else
{return null;
}
break;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__76016 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentArrayMap.prototype.toString = (function (){
var this__76017 = this;
var this__76018 = this;
return cljs.core.pr_str.call(null,this__76018);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__76019 = this;
if((this__76019.cnt > 0))
{var len__76020 = this__76019.arr.length;
var array_map_seq__76021 = (function array_map_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if((i < len__76020))
{return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([(this__76019.arr[i]),(this__76019.arr[(i + 1)])], true),array_map_seq.call(null,(i + 2)));
} else
{return null;
}
}),null));
});
return array_map_seq__76021.call(null,0);
} else
{return null;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__76022 = this;
return this__76022.cnt;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__76023 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__76024 = this;
return (new cljs.core.PersistentArrayMap(meta,this__76024.cnt,this__76024.arr,this__76024.__hash));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__76025 = this;
return this__76025.meta;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__76026 = this;
return cljs.core._with_meta.call(null,cljs.core.PersistentArrayMap.EMPTY,this__76026.meta);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__76027 = this;
var idx__76028 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__76028 >= 0))
{var len__76029 = this__76027.arr.length;
var new_len__76030 = (len__76029 - 2);
if((new_len__76030 === 0))
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{var new_arr__76031 = cljs.core.make_array.call(null,new_len__76030);
var s__76032 = 0;
var d__76033 = 0;
while(true){
if((s__76032 >= len__76029))
{return (new cljs.core.PersistentArrayMap(this__76027.meta,(this__76027.cnt - 1),new_arr__76031,null));
} else
{if(cljs.core._EQ_.call(null,k,(this__76027.arr[s__76032])))
{{
var G__76037 = (s__76032 + 2);
var G__76038 = d__76033;
s__76032 = G__76037;
d__76033 = G__76038;
continue;
}
} else
{if("\uFDD0'else")
{(new_arr__76031[d__76033] = (this__76027.arr[s__76032]));
(new_arr__76031[(d__76033 + 1)] = (this__76027.arr[(s__76032 + 1)]));
{
var G__76039 = (s__76032 + 2);
var G__76040 = (d__76033 + 2);
s__76032 = G__76039;
d__76033 = G__76040;
continue;
}
} else
{return null;
}
}
}
break;
}
}
} else
{return coll;
}
});
cljs.core.PersistentArrayMap;
cljs.core.PersistentArrayMap.EMPTY = (new cljs.core.PersistentArrayMap(null,0,[],null));
cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD = 16;
cljs.core.PersistentArrayMap.fromArrays = (function (ks,vs){
var len__76041 = cljs.core.count.call(null,ks);
var i__76042 = 0;
var out__76043 = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i__76042 < len__76041))
{{
var G__76044 = (i__76042 + 1);
var G__76045 = cljs.core.assoc_BANG_.call(null,out__76043,(ks[i__76042]),(vs[i__76042]));
i__76042 = G__76044;
out__76043 = G__76045;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__76043);
}
break;
}
});

goog.provide('cljs.core.TransientArrayMap');

/**
* @constructor
*/
cljs.core.TransientArrayMap = (function (editable_QMARK_,len,arr){
this.editable_QMARK_ = editable_QMARK_;
this.len = len;
this.arr = arr;
this.cljs$lang$protocol_mask$partition1$ = 56;
this.cljs$lang$protocol_mask$partition0$ = 258;
})
cljs.core.TransientArrayMap.cljs$lang$type = true;
cljs.core.TransientArrayMap.cljs$lang$ctorPrSeq = (function (this__5466__auto__){
return cljs.core.list.call(null,"cljs.core/TransientArrayMap");
});
cljs.core.TransientArrayMap.cljs$lang$ctorPrWriter = (function (this__5466__auto__,writer__5467__auto__){
return cljs.core._write.call(null,writer__5467__auto__,"cljs.core/TransientArrayMap");
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = (function (tcoll,key){
var this__76046 = this;
if(cljs.core.truth_(this__76046.editable_QMARK_))
{var idx__76047 = cljs.core.array_map_index_of.call(null,tcoll,key);
if((idx__76047 >= 0))
{(this__76046.arr[idx__76047] = (this__76046.arr[(this__76046.len - 2)]));
(this__76046.arr[(idx__76047 + 1)] = (this__76046.arr[(this__76046.len - 1)]));
var G__76048__76049 = this__76046.arr;
G__76048__76049.pop();
G__76048__76049.pop();
G__76048__76049;
this__76046.len = (this__76046.len - 2);
} else
{}
return tcoll;
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__76050 = this;
if(cljs.core.truth_(this__76050.editable_QMARK_))
{var idx__76051 = cljs.core.array_map_index_of.call(null,tcoll,key);
if((idx__76051 === -1))
{if(((this__76050.len + 2) <= (2 * cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD)))
{this__76050.len = (this__76050.len + 2);
this__76050.arr.push(key);
this__76050.arr.push(val);
return tcoll;
} else
{return cljs.core.assoc_BANG_.call(null,cljs.core.array__GT_transient_hash_map.call(null,this__76050.len,this__76050.arr),key,val);
}
} else
{if((val === (this__76050.arr[(idx__76051 + 1)])))
{return tcoll;
} else
{(this__76050.arr[(idx__76051 + 1)] = val);
return tcoll;
}
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__76052 = this;
if(cljs.core.truth_(this__76052.editable_QMARK_))
{if((function (){var G__76053__76054 = o;
if(G__76053__76054)
{if((function (){var or__3824__auto____76055 = (G__76053__76054.cljs$lang$protocol_mask$partition0$ & 2048);
if(or__3824__auto____76055)
{return or__3824__auto____76055;
} else
{return G__76053__76054.cljs$core$IMapEntry$;
}
})())
{return true;
} else
{if((!G__76053__76054.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__76053__76054);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__76053__76054);
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,cljs.core.key.call(null,o),cljs.core.val.call(null,o));
} else
{var es__76056 = cljs.core.seq.call(null,o);
var tcoll__76057 = tcoll;
while(true){
var temp__3971__auto____76058 = cljs.core.first.call(null,es__76056);
if(cljs.core.truth_(temp__3971__auto____76058))
{var e__76059 = temp__3971__auto____76058;
{
var G__76065 = cljs.core.next.call(null,es__76056);
var G__76066 = tcoll__76057.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll__76057,cljs.core.key.call(null,e__76059),cljs.core.val.call(null,e__76059));
es__76056 = G__76065;
tcoll__76057 = G__76066;
continue;
}
} else
{return tcoll__76057;
}
break;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__76060 = this;
if(cljs.core.truth_(this__76060.editable_QMARK_))
{this__76060.editable_QMARK_ = false;
return (new cljs.core.PersistentArrayMap(null,cljs.core.quot.call(null,this__76060.len,2),this__76060.arr,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var this__76061 = this;
return tcoll.cljs$core$ILookup$_lookup$arity$3(tcoll,k,null);
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var this__76062 = this;
if(cljs.core.truth_(this__76062.editable_QMARK_))
{var idx__76063 = cljs.core.array_map_index_of.call(null,tcoll,k);
if((idx__76063 === -1))
{return not_found;
} else
{return (this__76062.arr[(idx__76063 + 1)]);
}
} else
{throw (new Error("lookup after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var this__76064 = this;
if(cljs.core.truth_(this__76064.editable_QMARK_))
{return cljs.core.quot.call(null,this__76064.len,2);
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientArrayMap;
cljs.core.array__GT_transient_hash_map = (function array__GT_transient_hash_map(len,arr){
var out__76069 = cljs.core.transient$.call(null,cljs.core.ObjMap.EMPTY);
var i__76070 = 0;
while(true){
if((i__76070 < len))
{{
var G__76071 = cljs.core.assoc_BANG_.call(null,out__76069,(arr[i__76070]),(arr[(i__76070 + 1)]));
var G__76072 = (i__76070 + 2);
out__76069 = G__76071;
i__76070 = G__76072;
continue;
}
} else
{return out__76069;
}
break;
}
});

goog.provide('cljs.core.Box');

/**
* @constructor
*/
cljs.core.Box = (function (val){
this.val = val;
})
cljs.core.Box.cljs$lang$type = true;
cljs.core.Box.cljs$lang$ctorPrSeq = (function (this__5468__auto__){
return cljs.core.list.call(null,"cljs.core/Box");
});
cljs.core.Box.cljs$lang$ctorPrWriter = (function (this__5468__auto__,writer__5469__auto__){
return cljs.core._write.call(null,writer__5469__auto__,"cljs.core/Box");
});
cljs.core.Box;
cljs.core.key_test = (function key_test(key,other){
if(goog.isString(key))
{return (key === other);
} else
{return cljs.core._EQ_.call(null,key,other);
}
});
cljs.core.mask = (function mask(hash,shift){
return ((hash >>> shift) & 31);
});
cljs.core.clone_and_set = (function() {
var clone_and_set = null;
var clone_and_set__3 = (function (arr,i,a){
var G__76077__76078 = arr.slice();
(G__76077__76078[i] = a);
return G__76077__76078;
});
var clone_and_set__5 = (function (arr,i,a,j,b){
var G__76079__76080 = arr.slice();
(G__76079__76080[i] = a);
(G__76079__76080[j] = b);
return G__76079__76080;
});
clone_and_set = function(arr,i,a,j,b){
switch(arguments.length){
case 3:
return clone_and_set__3.call(this,arr,i,a);
case 5:
return clone_and_set__5.call(this,arr,i,a,j,b);
}
throw('Invalid arity: ' + arguments.length);
};
clone_and_set.cljs$lang$arity$3 = clone_and_set__3;
clone_and_set.cljs$lang$arity$5 = clone_and_set__5;
return clone_and_set;
})()
;
cljs.core.remove_pair = (function remove_pair(arr,i){
var new_arr__76082 = cljs.core.make_array.call(null,(arr.length - 2));
cljs.core.array_copy.call(null,arr,0,new_arr__76082,0,(2 * i));
cljs.core.array_copy.call(null,arr,(2 * (i + 1)),new_arr__76082,(2 * i),(new_arr__76082.length - (2 * i)));
return new_arr__76082;
});
cljs.core.bitmap_indexed_node_index = (function bitmap_indexed_node_index(bitmap,bit){
return cljs.core.bit_count.call(null,(bitmap & (bit - 1)));
});
cljs.core.bitpos = (function bitpos(hash,shift){
return (1 << ((hash >>> shift) & 0x01f));
});
cljs.core.edit_and_set = (function() {
var edit_and_set = null;
var edit_and_set__4 = (function (inode,edit,i,a){
var editable__76085 = inode.ensure_editable(edit);
(editable__76085.arr[i] = a);
return editable__76085;
});
var edit_and_set__6 = (function (inode,edit,i,a,j,b){
var editable__76086 = inode.ensure_editable(edit);
(editable__76086.arr[i] = a);
(editable__76086.arr[j] = b);
return editable__76086;
});
edit_and_set = function(inode,edit,i,a,j,b){
switch(arguments.length){
case 4:
return edit_and_set__4.call(this,inode,edit,i,a);
case 6:
return edit_and_set__6.call(this,inode,edit,i,a,j,b);
}
throw('Invalid arity: ' + arguments.length);
};
edit_and_set.cljs$lang$arity$4 = edit_and_set__4;
edit_and_set.cljs$lang$arity$6 = edit_and_set__6;
return edit_and_set;
})()
;
cljs.core.inode_kv_reduce = (function inode_kv_reduce(arr,f,init){
var len__76093 = arr.length;
var i__76094 = 0;
var init__76095 = init;
while(true){
if((i__76094 < len__76093))
{var init__76098 = (function (){var k__76096 = (arr[i__76094]);
if(!((k__76096 == null)))
{return f.call(null,init__76095,k__76096,(arr[(i__76094 + 1)]));
} else
{var node__76097 = (arr[(i__76094 + 1)]);
if(!((node__76097 == null)))
{return node__76097.kv_reduce(f,init__76095);
} else
{return init__76095;
}
}
})();
if(cljs.core.reduced_QMARK_.call(null,init__76098))
{return cljs.core.deref.call(null,init__76098);
} else
{{
var G__76099 = (i__76094 + 2);
var G__76100 = init__76098;
i__76094 = G__76099;
init__76095 = G__76100;
continue;
}
}
} else
{return init__76095;
}
break;
}
});

goog.provide('cljs.core.BitmapIndexedNode');

/**
* @constructor
*/
cljs.core.BitmapIndexedNode = (function (edit,bitmap,arr){
this.edit = edit;
this.bitmap = bitmap;
this.arr = arr;
})
cljs.core.BitmapIndexedNode.cljs$lang$type = true;
cljs.core.BitmapIndexedNode.cljs$lang$ctorPrSeq = (function (this__5466__auto__){
return cljs.core.list.call(null,"cljs.core/BitmapIndexedNode");
});
cljs.core.BitmapIndexedNode.cljs$lang$ctorPrWriter = (function (this__5466__auto__,writer__5467__auto__){
return cljs.core._write.call(null,writer__5467__auto__,"cljs.core/BitmapIndexedNode");
});
cljs.core.BitmapIndexedNode.prototype.edit_and_remove_pair = (function (e,bit,i){
var this__76101 = this;
var inode__76102 = this;
if((this__76101.bitmap === bit))
{return null;
} else
{var editable__76103 = inode__76102.ensure_editable(e);
var earr__76104 = editable__76103.arr;
var len__76105 = earr__76104.length;
editable__76103.bitmap = (bit ^ editable__76103.bitmap);
cljs.core.array_copy.call(null,earr__76104,(2 * (i + 1)),earr__76104,(2 * i),(len__76105 - (2 * (i + 1))));
(earr__76104[(len__76105 - 2)] = null);
(earr__76104[(len__76105 - 1)] = null);
return editable__76103;
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__76106 = this;
var inode__76107 = this;
var bit__76108 = (1 << ((hash >>> shift) & 0x01f));
var idx__76109 = cljs.core.bitmap_indexed_node_index.call(null,this__76106.bitmap,bit__76108);
if(((this__76106.bitmap & bit__76108) === 0))
{var n__76110 = cljs.core.bit_count.call(null,this__76106.bitmap);
if(((2 * n__76110) < this__76106.arr.length))
{var editable__76111 = inode__76107.ensure_editable(edit);
var earr__76112 = editable__76111.arr;
added_leaf_QMARK_.val = true;
cljs.core.array_copy_downward.call(null,earr__76112,(2 * idx__76109),earr__76112,(2 * (idx__76109 + 1)),(2 * (n__76110 - idx__76109)));
(earr__76112[(2 * idx__76109)] = key);
(earr__76112[((2 * idx__76109) + 1)] = val);
editable__76111.bitmap = (editable__76111.bitmap | bit__76108);
return editable__76111;
} else
{if((n__76110 >= 16))
{var nodes__76113 = cljs.core.make_array.call(null,32);
var jdx__76114 = ((hash >>> shift) & 0x01f);
(nodes__76113[jdx__76114] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_));
var i__76115 = 0;
var j__76116 = 0;
while(true){
if((i__76115 < 32))
{if((((this__76106.bitmap >>> i__76115) & 1) === 0))
{{
var G__76169 = (i__76115 + 1);
var G__76170 = j__76116;
i__76115 = G__76169;
j__76116 = G__76170;
continue;
}
} else
{(nodes__76113[i__76115] = ((!(((this__76106.arr[j__76116]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),cljs.core.hash.call(null,(this__76106.arr[j__76116])),(this__76106.arr[j__76116]),(this__76106.arr[(j__76116 + 1)]),added_leaf_QMARK_):(this__76106.arr[(j__76116 + 1)])));
{
var G__76171 = (i__76115 + 1);
var G__76172 = (j__76116 + 2);
i__76115 = G__76171;
j__76116 = G__76172;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(edit,(n__76110 + 1),nodes__76113));
} else
{if("\uFDD0'else")
{var new_arr__76117 = cljs.core.make_array.call(null,(2 * (n__76110 + 4)));
cljs.core.array_copy.call(null,this__76106.arr,0,new_arr__76117,0,(2 * idx__76109));
(new_arr__76117[(2 * idx__76109)] = key);
(new_arr__76117[((2 * idx__76109) + 1)] = val);
cljs.core.array_copy.call(null,this__76106.arr,(2 * idx__76109),new_arr__76117,(2 * (idx__76109 + 1)),(2 * (n__76110 - idx__76109)));
added_leaf_QMARK_.val = true;
var editable__76118 = inode__76107.ensure_editable(edit);
editable__76118.arr = new_arr__76117;
editable__76118.bitmap = (editable__76118.bitmap | bit__76108);
return editable__76118;
} else
{return null;
}
}
}
} else
{var key_or_nil__76119 = (this__76106.arr[(2 * idx__76109)]);
var val_or_node__76120 = (this__76106.arr[((2 * idx__76109) + 1)]);
if((key_or_nil__76119 == null))
{var n__76121 = val_or_node__76120.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__76121 === val_or_node__76120))
{return inode__76107;
} else
{return cljs.core.edit_and_set.call(null,inode__76107,edit,((2 * idx__76109) + 1),n__76121);
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__76119))
{if((val === val_or_node__76120))
{return inode__76107;
} else
{return cljs.core.edit_and_set.call(null,inode__76107,edit,((2 * idx__76109) + 1),val);
}
} else
{if("\uFDD0'else")
{added_leaf_QMARK_.val = true;
return cljs.core.edit_and_set.call(null,inode__76107,edit,(2 * idx__76109),null,((2 * idx__76109) + 1),cljs.core.create_node.call(null,edit,(shift + 5),key_or_nil__76119,val_or_node__76120,hash,key,val));
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_seq = (function (){
var this__76122 = this;
var inode__76123 = this;
return cljs.core.create_inode_seq.call(null,this__76122.arr);
});
cljs.core.BitmapIndexedNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__76124 = this;
var inode__76125 = this;
var bit__76126 = (1 << ((hash >>> shift) & 0x01f));
if(((this__76124.bitmap & bit__76126) === 0))
{return inode__76125;
} else
{var idx__76127 = cljs.core.bitmap_indexed_node_index.call(null,this__76124.bitmap,bit__76126);
var key_or_nil__76128 = (this__76124.arr[(2 * idx__76127)]);
var val_or_node__76129 = (this__76124.arr[((2 * idx__76127) + 1)]);
if((key_or_nil__76128 == null))
{var n__76130 = val_or_node__76129.inode_without_BANG_(edit,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n__76130 === val_or_node__76129))
{return inode__76125;
} else
{if(!((n__76130 == null)))
{return cljs.core.edit_and_set.call(null,inode__76125,edit,((2 * idx__76127) + 1),n__76130);
} else
{if((this__76124.bitmap === bit__76126))
{return null;
} else
{if("\uFDD0'else")
{return inode__76125.edit_and_remove_pair(edit,bit__76126,idx__76127);
} else
{return null;
}
}
}
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__76128))
{(removed_leaf_QMARK_[0] = true);
return inode__76125.edit_and_remove_pair(edit,bit__76126,idx__76127);
} else
{if("\uFDD0'else")
{return inode__76125;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.ensure_editable = (function (e){
var this__76131 = this;
var inode__76132 = this;
if((e === this__76131.edit))
{return inode__76132;
} else
{var n__76133 = cljs.core.bit_count.call(null,this__76131.bitmap);
var new_arr__76134 = cljs.core.make_array.call(null,(((n__76133 < 0))?4:(2 * (n__76133 + 1))));
cljs.core.array_copy.call(null,this__76131.arr,0,new_arr__76134,0,(2 * n__76133));
return (new cljs.core.BitmapIndexedNode(e,this__76131.bitmap,new_arr__76134));
}
});
cljs.core.BitmapIndexedNode.prototype.kv_reduce = (function (f,init){
var this__76135 = this;
var inode__76136 = this;
return cljs.core.inode_kv_reduce.call(null,this__76135.arr,f,init);
});
cljs.core.BitmapIndexedNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__76137 = this;
var inode__76138 = this;
var bit__76139 = (1 << ((hash >>> shift) & 0x01f));
if(((this__76137.bitmap & bit__76139) === 0))
{return not_found;
} else
{var idx__76140 = cljs.core.bitmap_indexed_node_index.call(null,this__76137.bitmap,bit__76139);
var key_or_nil__76141 = (this__76137.arr[(2 * idx__76140)]);
var val_or_node__76142 = (this__76137.arr[((2 * idx__76140) + 1)]);
if((key_or_nil__76141 == null))
{return val_or_node__76142.inode_find((shift + 5),hash,key,not_found);
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__76141))
{return cljs.core.PersistentVector.fromArray([key_or_nil__76141,val_or_node__76142], true);
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_without = (function (shift,hash,key){
var this__76143 = this;
var inode__76144 = this;
var bit__76145 = (1 << ((hash >>> shift) & 0x01f));
if(((this__76143.bitmap & bit__76145) === 0))
{return inode__76144;
} else
{var idx__76146 = cljs.core.bitmap_indexed_node_index.call(null,this__76143.bitmap,bit__76145);
var key_or_nil__76147 = (this__76143.arr[(2 * idx__76146)]);
var val_or_node__76148 = (this__76143.arr[((2 * idx__76146) + 1)]);
if((key_or_nil__76147 == null))
{var n__76149 = val_or_node__76148.inode_without((shift + 5),hash,key);
if((n__76149 === val_or_node__76148))
{return inode__76144;
} else
{if(!((n__76149 == null)))
{return (new cljs.core.BitmapIndexedNode(null,this__76143.bitmap,cljs.core.clone_and_set.call(null,this__76143.arr,((2 * idx__76146) + 1),n__76149)));
} else
{if((this__76143.bitmap === bit__76145))
{return null;
} else
{if("\uFDD0'else")
{return (new cljs.core.BitmapIndexedNode(null,(this__76143.bitmap ^ bit__76145),cljs.core.remove_pair.call(null,this__76143.arr,idx__76146)));
} else
{return null;
}
}
}
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__76147))
{return (new cljs.core.BitmapIndexedNode(null,(this__76143.bitmap ^ bit__76145),cljs.core.remove_pair.call(null,this__76143.arr,idx__76146)));
} else
{if("\uFDD0'else")
{return inode__76144;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__76150 = this;
var inode__76151 = this;
var bit__76152 = (1 << ((hash >>> shift) & 0x01f));
var idx__76153 = cljs.core.bitmap_indexed_node_index.call(null,this__76150.bitmap,bit__76152);
if(((this__76150.bitmap & bit__76152) === 0))
{var n__76154 = cljs.core.bit_count.call(null,this__76150.bitmap);
if((n__76154 >= 16))
{var nodes__76155 = cljs.core.make_array.call(null,32);
var jdx__76156 = ((hash >>> shift) & 0x01f);
(nodes__76155[jdx__76156] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_));
var i__76157 = 0;
var j__76158 = 0;
while(true){
if((i__76157 < 32))
{if((((this__76150.bitmap >>> i__76157) & 1) === 0))
{{
var G__76173 = (i__76157 + 1);
var G__76174 = j__76158;
i__76157 = G__76173;
j__76158 = G__76174;
continue;
}
} else
{(nodes__76155[i__76157] = ((!(((this__76150.arr[j__76158]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),cljs.core.hash.call(null,(this__76150.arr[j__76158])),(this__76150.arr[j__76158]),(this__76150.arr[(j__76158 + 1)]),added_leaf_QMARK_):(this__76150.arr[(j__76158 + 1)])));
{
var G__76175 = (i__76157 + 1);
var G__76176 = (j__76158 + 2);
i__76157 = G__76175;
j__76158 = G__76176;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(null,(n__76154 + 1),nodes__76155));
} else
{var new_arr__76159 = cljs.core.make_array.call(null,(2 * (n__76154 + 1)));
cljs.core.array_copy.call(null,this__76150.arr,0,new_arr__76159,0,(2 * idx__76153));
(new_arr__76159[(2 * idx__76153)] = key);
(new_arr__76159[((2 * idx__76153) + 1)] = val);
cljs.core.array_copy.call(null,this__76150.arr,(2 * idx__76153),new_arr__76159,(2 * (idx__76153 + 1)),(2 * (n__76154 - idx__76153)));
added_leaf_QMARK_.val = true;
return (new cljs.core.BitmapIndexedNode(null,(this__76150.bitmap | bit__76152),new_arr__76159));
}
} else
{var key_or_nil__76160 = (this__76150.arr[(2 * idx__76153)]);
var val_or_node__76161 = (this__76150.arr[((2 * idx__76153) + 1)]);
if((key_or_nil__76160 == null))
{var n__76162 = val_or_node__76161.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__76162 === val_or_node__76161))
{return inode__76151;
} else
{return (new cljs.core.BitmapIndexedNode(null,this__76150.bitmap,cljs.core.clone_and_set.call(null,this__76150.arr,((2 * idx__76153) + 1),n__76162)));
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__76160))
{if((val === val_or_node__76161))
{return inode__76151;
} else
{return (new cljs.core.BitmapIndexedNode(null,this__76150.bitmap,cljs.core.clone_and_set.call(null,this__76150.arr,((2 * idx__76153) + 1),val)));
}
} else
{if("\uFDD0'else")
{added_leaf_QMARK_.val = true;
return (new cljs.core.BitmapIndexedNode(null,this__76150.bitmap,cljs.core.clone_and_set.call(null,this__76150.arr,(2 * idx__76153),null,((2 * idx__76153) + 1),cljs.core.create_node.call(null,(shift + 5),key_or_nil__76160,val_or_node__76161,hash,key,val))));
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__76163 = this;
var inode__76164 = this;
var bit__76165 = (1 << ((hash >>> shift) & 0x01f));
if(((this__76163.bitmap & bit__76165) === 0))
{return not_found;
} else
{var idx__76166 = cljs.core.bitmap_indexed_node_index.call(null,this__76163.bitmap,bit__76165);
var key_or_nil__76167 = (this__76163.arr[(2 * idx__76166)]);
var val_or_node__76168 = (this__76163.arr[((2 * idx__76166) + 1)]);
if((key_or_nil__76167 == null))
{return val_or_node__76168.inode_lookup((shift + 5),hash,key,not_found);
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__76167))
{return val_or_node__76168;
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode;
cljs.core.BitmapIndexedNode.EMPTY = (new cljs.core.BitmapIndexedNode(null,0,cljs.core.make_array.call(null,0)));
cljs.core.pack_array_node = (function pack_array_node(array_node,edit,idx){
var arr__76184 = array_node.arr;
var len__76185 = (2 * (array_node.cnt - 1));
var new_arr__76186 = cljs.core.make_array.call(null,len__76185);
var i__76187 = 0;
var j__76188 = 1;
var bitmap__76189 = 0;
while(true){
if((i__76187 < len__76185))
{if((function (){var and__3822__auto____76190 = !((i__76187 === idx));
if(and__3822__auto____76190)
{return !(((arr__76184[i__76187]) == null));
} else
{return and__3822__auto____76190;
}
})())
{(new_arr__76186[j__76188] = (arr__76184[i__76187]));
{
var G__76191 = (i__76187 + 1);
var G__76192 = (j__76188 + 2);
var G__76193 = (bitmap__76189 | (1 << i__76187));
i__76187 = G__76191;
j__76188 = G__76192;
bitmap__76189 = G__76193;
continue;
}
} else
{{
var G__76194 = (i__76187 + 1);
var G__76195 = j__76188;
var G__76196 = bitmap__76189;
i__76187 = G__76194;
j__76188 = G__76195;
bitmap__76189 = G__76196;
continue;
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,bitmap__76189,new_arr__76186));
}
break;
}
});

goog.provide('cljs.core.ArrayNode');

/**
* @constructor
*/
cljs.core.ArrayNode = (function (edit,cnt,arr){
this.edit = edit;
this.cnt = cnt;
this.arr = arr;
})
cljs.core.ArrayNode.cljs$lang$type = true;
cljs.core.ArrayNode.cljs$lang$ctorPrSeq = (function (this__5466__auto__){
return cljs.core.list.call(null,"cljs.core/ArrayNode");
});
cljs.core.ArrayNode.cljs$lang$ctorPrWriter = (function (this__5466__auto__,writer__5467__auto__){
return cljs.core._write.call(null,writer__5467__auto__,"cljs.core/ArrayNode");
});
cljs.core.ArrayNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__76197 = this;
var inode__76198 = this;
var idx__76199 = ((hash >>> shift) & 0x01f);
var node__76200 = (this__76197.arr[idx__76199]);
if((node__76200 == null))
{var editable__76201 = cljs.core.edit_and_set.call(null,inode__76198,edit,idx__76199,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_));
editable__76201.cnt = (editable__76201.cnt + 1);
return editable__76201;
} else
{var n__76202 = node__76200.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__76202 === node__76200))
{return inode__76198;
} else
{return cljs.core.edit_and_set.call(null,inode__76198,edit,idx__76199,n__76202);
}
}
});
cljs.core.ArrayNode.prototype.inode_seq = (function (){
var this__76203 = this;
var inode__76204 = this;
return cljs.core.create_array_node_seq.call(null,this__76203.arr);
});
cljs.core.ArrayNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__76205 = this;
var inode__76206 = this;
var idx__76207 = ((hash >>> shift) & 0x01f);
var node__76208 = (this__76205.arr[idx__76207]);
if((node__76208 == null))
{return inode__76206;
} else
{var n__76209 = node__76208.inode_without_BANG_(edit,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n__76209 === node__76208))
{return inode__76206;
} else
{if((n__76209 == null))
{if((this__76205.cnt <= 8))
{return cljs.core.pack_array_node.call(null,inode__76206,edit,idx__76207);
} else
{var editable__76210 = cljs.core.edit_and_set.call(null,inode__76206,edit,idx__76207,n__76209);
editable__76210.cnt = (editable__76210.cnt - 1);
return editable__76210;
}
} else
{if("\uFDD0'else")
{return cljs.core.edit_and_set.call(null,inode__76206,edit,idx__76207,n__76209);
} else
{return null;
}
}
}
}
});
cljs.core.ArrayNode.prototype.ensure_editable = (function (e){
var this__76211 = this;
var inode__76212 = this;
if((e === this__76211.edit))
{return inode__76212;
} else
{return (new cljs.core.ArrayNode(e,this__76211.cnt,this__76211.arr.slice()));
}
});
cljs.core.ArrayNode.prototype.kv_reduce = (function (f,init){
var this__76213 = this;
var inode__76214 = this;
var len__76215 = this__76213.arr.length;
var i__76216 = 0;
var init__76217 = init;
while(true){
if((i__76216 < len__76215))
{var node__76218 = (this__76213.arr[i__76216]);
if(!((node__76218 == null)))
{var init__76219 = node__76218.kv_reduce(f,init__76217);
if(cljs.core.reduced_QMARK_.call(null,init__76219))
{return cljs.core.deref.call(null,init__76219);
} else
{{
var G__76238 = (i__76216 + 1);
var G__76239 = init__76219;
i__76216 = G__76238;
init__76217 = G__76239;
continue;
}
}
} else
{return null;
}
} else
{return init__76217;
}
break;
}
});
cljs.core.ArrayNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__76220 = this;
var inode__76221 = this;
var idx__76222 = ((hash >>> shift) & 0x01f);
var node__76223 = (this__76220.arr[idx__76222]);
if(!((node__76223 == null)))
{return node__76223.inode_find((shift + 5),hash,key,not_found);
} else
{return not_found;
}
});
cljs.core.ArrayNode.prototype.inode_without = (function (shift,hash,key){
var this__76224 = this;
var inode__76225 = this;
var idx__76226 = ((hash >>> shift) & 0x01f);
var node__76227 = (this__76224.arr[idx__76226]);
if(!((node__76227 == null)))
{var n__76228 = node__76227.inode_without((shift + 5),hash,key);
if((n__76228 === node__76227))
{return inode__76225;
} else
{if((n__76228 == null))
{if((this__76224.cnt <= 8))
{return cljs.core.pack_array_node.call(null,inode__76225,null,idx__76226);
} else
{return (new cljs.core.ArrayNode(null,(this__76224.cnt - 1),cljs.core.clone_and_set.call(null,this__76224.arr,idx__76226,n__76228)));
}
} else
{if("\uFDD0'else")
{return (new cljs.core.ArrayNode(null,this__76224.cnt,cljs.core.clone_and_set.call(null,this__76224.arr,idx__76226,n__76228)));
} else
{return null;
}
}
}
} else
{return inode__76225;
}
});
cljs.core.ArrayNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__76229 = this;
var inode__76230 = this;
var idx__76231 = ((hash >>> shift) & 0x01f);
var node__76232 = (this__76229.arr[idx__76231]);
if((node__76232 == null))
{return (new cljs.core.ArrayNode(null,(this__76229.cnt + 1),cljs.core.clone_and_set.call(null,this__76229.arr,idx__76231,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_))));
} else
{var n__76233 = node__76232.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__76233 === node__76232))
{return inode__76230;
} else
{return (new cljs.core.ArrayNode(null,this__76229.cnt,cljs.core.clone_and_set.call(null,this__76229.arr,idx__76231,n__76233)));
}
}
});
cljs.core.ArrayNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__76234 = this;
var inode__76235 = this;
var idx__76236 = ((hash >>> shift) & 0x01f);
var node__76237 = (this__76234.arr[idx__76236]);
if(!((node__76237 == null)))
{return node__76237.inode_lookup((shift + 5),hash,key,not_found);
} else
{return not_found;
}
});
cljs.core.ArrayNode;
cljs.core.hash_collision_node_find_index = (function hash_collision_node_find_index(arr,cnt,key){
var lim__76242 = (2 * cnt);
var i__76243 = 0;
while(true){
if((i__76243 < lim__76242))
{if(cljs.core.key_test.call(null,key,(arr[i__76243])))
{return i__76243;
} else
{{
var G__76244 = (i__76243 + 2);
i__76243 = G__76244;
continue;
}
}
} else
{return -1;
}
break;
}
});

goog.provide('cljs.core.HashCollisionNode');

/**
* @constructor
*/
cljs.core.HashCollisionNode = (function (edit,collision_hash,cnt,arr){
this.edit = edit;
this.collision_hash = collision_hash;
this.cnt = cnt;
this.arr = arr;
})
cljs.core.HashCollisionNode.cljs$lang$type = true;
cljs.core.HashCollisionNode.cljs$lang$ctorPrSeq = (function (this__5466__auto__){
return cljs.core.list.call(null,"cljs.core/HashCollisionNode");
});
cljs.core.HashCollisionNode.cljs$lang$ctorPrWriter = (function (this__5466__auto__,writer__5467__auto__){
return cljs.core._write.call(null,writer__5467__auto__,"cljs.core/HashCollisionNode");
});
cljs.core.HashCollisionNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__76245 = this;
var inode__76246 = this;
if((hash === this__76245.collision_hash))
{var idx__76247 = cljs.core.hash_collision_node_find_index.call(null,this__76245.arr,this__76245.cnt,key);
if((idx__76247 === -1))
{if((this__76245.arr.length > (2 * this__76245.cnt)))
{var editable__76248 = cljs.core.edit_and_set.call(null,inode__76246,edit,(2 * this__76245.cnt),key,((2 * this__76245.cnt) + 1),val);
added_leaf_QMARK_.val = true;
editable__76248.cnt = (editable__76248.cnt + 1);
return editable__76248;
} else
{var len__76249 = this__76245.arr.length;
var new_arr__76250 = cljs.core.make_array.call(null,(len__76249 + 2));
cljs.core.array_copy.call(null,this__76245.arr,0,new_arr__76250,0,len__76249);
(new_arr__76250[len__76249] = key);
(new_arr__76250[(len__76249 + 1)] = val);
added_leaf_QMARK_.val = true;
return inode__76246.ensure_editable_array(edit,(this__76245.cnt + 1),new_arr__76250);
}
} else
{if(((this__76245.arr[(idx__76247 + 1)]) === val))
{return inode__76246;
} else
{return cljs.core.edit_and_set.call(null,inode__76246,edit,(idx__76247 + 1),val);
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,(1 << ((this__76245.collision_hash >>> shift) & 0x01f)),[null,inode__76246,null,null])).inode_assoc_BANG_(edit,shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_seq = (function (){
var this__76251 = this;
var inode__76252 = this;
return cljs.core.create_inode_seq.call(null,this__76251.arr);
});
cljs.core.HashCollisionNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__76253 = this;
var inode__76254 = this;
var idx__76255 = cljs.core.hash_collision_node_find_index.call(null,this__76253.arr,this__76253.cnt,key);
if((idx__76255 === -1))
{return inode__76254;
} else
{(removed_leaf_QMARK_[0] = true);
if((this__76253.cnt === 1))
{return null;
} else
{var editable__76256 = inode__76254.ensure_editable(edit);
var earr__76257 = editable__76256.arr;
(earr__76257[idx__76255] = (earr__76257[((2 * this__76253.cnt) - 2)]));
(earr__76257[(idx__76255 + 1)] = (earr__76257[((2 * this__76253.cnt) - 1)]));
(earr__76257[((2 * this__76253.cnt) - 1)] = null);
(earr__76257[((2 * this__76253.cnt) - 2)] = null);
editable__76256.cnt = (editable__76256.cnt - 1);
return editable__76256;
}
}
});
cljs.core.HashCollisionNode.prototype.ensure_editable = (function (e){
var this__76258 = this;
var inode__76259 = this;
if((e === this__76258.edit))
{return inode__76259;
} else
{var new_arr__76260 = cljs.core.make_array.call(null,(2 * (this__76258.cnt + 1)));
cljs.core.array_copy.call(null,this__76258.arr,0,new_arr__76260,0,(2 * this__76258.cnt));
return (new cljs.core.HashCollisionNode(e,this__76258.collision_hash,this__76258.cnt,new_arr__76260));
}
});
cljs.core.HashCollisionNode.prototype.kv_reduce = (function (f,init){
var this__76261 = this;
var inode__76262 = this;
return cljs.core.inode_kv_reduce.call(null,this__76261.arr,f,init);
});
cljs.core.HashCollisionNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__76263 = this;
var inode__76264 = this;
var idx__76265 = cljs.core.hash_collision_node_find_index.call(null,this__76263.arr,this__76263.cnt,key);
if((idx__76265 < 0))
{return not_found;
} else
{if(cljs.core.key_test.call(null,key,(this__76263.arr[idx__76265])))
{return cljs.core.PersistentVector.fromArray([(this__76263.arr[idx__76265]),(this__76263.arr[(idx__76265 + 1)])], true);
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
});
cljs.core.HashCollisionNode.prototype.inode_without = (function (shift,hash,key){
var this__76266 = this;
var inode__76267 = this;
var idx__76268 = cljs.core.hash_collision_node_find_index.call(null,this__76266.arr,this__76266.cnt,key);
if((idx__76268 === -1))
{return inode__76267;
} else
{if((this__76266.cnt === 1))
{return null;
} else
{if("\uFDD0'else")
{return (new cljs.core.HashCollisionNode(null,this__76266.collision_hash,(this__76266.cnt - 1),cljs.core.remove_pair.call(null,this__76266.arr,cljs.core.quot.call(null,idx__76268,2))));
} else
{return null;
}
}
}
});
cljs.core.HashCollisionNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__76269 = this;
var inode__76270 = this;
if((hash === this__76269.collision_hash))
{var idx__76271 = cljs.core.hash_collision_node_find_index.call(null,this__76269.arr,this__76269.cnt,key);
if((idx__76271 === -1))
{var len__76272 = this__76269.arr.length;
var new_arr__76273 = cljs.core.make_array.call(null,(len__76272 + 2));
cljs.core.array_copy.call(null,this__76269.arr,0,new_arr__76273,0,len__76272);
(new_arr__76273[len__76272] = key);
(new_arr__76273[(len__76272 + 1)] = val);
added_leaf_QMARK_.val = true;
return (new cljs.core.HashCollisionNode(null,this__76269.collision_hash,(this__76269.cnt + 1),new_arr__76273));
} else
{if(cljs.core._EQ_.call(null,(this__76269.arr[idx__76271]),val))
{return inode__76270;
} else
{return (new cljs.core.HashCollisionNode(null,this__76269.collision_hash,this__76269.cnt,cljs.core.clone_and_set.call(null,this__76269.arr,(idx__76271 + 1),val)));
}
}
} else
{return (new cljs.core.BitmapIndexedNode(null,(1 << ((this__76269.collision_hash >>> shift) & 0x01f)),[null,inode__76270])).inode_assoc(shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__76274 = this;
var inode__76275 = this;
var idx__76276 = cljs.core.hash_collision_node_find_index.call(null,this__76274.arr,this__76274.cnt,key);
if((idx__76276 < 0))
{return not_found;
} else
{if(cljs.core.key_test.call(null,key,(this__76274.arr[idx__76276])))
{return (this__76274.arr[(idx__76276 + 1)]);
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
});
cljs.core.HashCollisionNode.prototype.ensure_editable_array = (function (e,count,array){
var this__76277 = this;
var inode__76278 = this;
if((e === this__76277.edit))
{this__76277.arr = array;
this__76277.cnt = count;
return inode__76278;
} else
{return (new cljs.core.HashCollisionNode(this__76277.edit,this__76277.collision_hash,count,array));
}
});
cljs.core.HashCollisionNode;
cljs.core.create_node = (function() {
var create_node = null;
var create_node__6 = (function (shift,key1,val1,key2hash,key2,val2){
var key1hash__76283 = cljs.core.hash.call(null,key1);
if((key1hash__76283 === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash__76283,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK___76284 = (new cljs.core.Box(false));
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc(shift,key1hash__76283,key1,val1,added_leaf_QMARK___76284).inode_assoc(shift,key2hash,key2,val2,added_leaf_QMARK___76284);
}
});
var create_node__7 = (function (edit,shift,key1,val1,key2hash,key2,val2){
var key1hash__76285 = cljs.core.hash.call(null,key1);
if((key1hash__76285 === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash__76285,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK___76286 = (new cljs.core.Box(false));
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,shift,key1hash__76285,key1,val1,added_leaf_QMARK___76286).inode_assoc_BANG_(edit,shift,key2hash,key2,val2,added_leaf_QMARK___76286);
}
});
create_node = function(edit,shift,key1,val1,key2hash,key2,val2){
switch(arguments.length){
case 6:
return create_node__6.call(this,edit,shift,key1,val1,key2hash,key2);
case 7:
return create_node__7.call(this,edit,shift,key1,val1,key2hash,key2,val2);
}
throw('Invalid arity: ' + arguments.length);
};
create_node.cljs$lang$arity$6 = create_node__6;
create_node.cljs$lang$arity$7 = create_node__7;
return create_node;
})()
;

goog.provide('cljs.core.NodeSeq');

/**
* @constructor
*/
cljs.core.NodeSeq = (function (meta,nodes,i,s,__hash){
this.meta = meta;
this.nodes = nodes;
this.i = i;
this.s = s;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850572;
})
cljs.core.NodeSeq.cljs$lang$type = true;
cljs.core.NodeSeq.cljs$lang$ctorPrSeq = (function (this__5466__auto__){
return cljs.core.list.call(null,"cljs.core/NodeSeq");
});
cljs.core.NodeSeq.cljs$lang$ctorPrWriter = (function (this__5466__auto__,writer__5467__auto__){
return cljs.core._write.call(null,writer__5467__auto__,"cljs.core/NodeSeq");
});
cljs.core.NodeSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__76287 = this;
var h__5347__auto____76288 = this__76287.__hash;
if(!((h__5347__auto____76288 == null)))
{return h__5347__auto____76288;
} else
{var h__5347__auto____76289 = cljs.core.hash_coll.call(null,coll);
this__76287.__hash = h__5347__auto____76289;
return h__5347__auto____76289;
}
});
cljs.core.NodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__76290 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.NodeSeq.prototype.toString = (function (){
var this__76291 = this;
var this__76292 = this;
return cljs.core.pr_str.call(null,this__76292);
});
cljs.core.NodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__76293 = this;
return this$;
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__76294 = this;
if((this__76294.s == null))
{return cljs.core.PersistentVector.fromArray([(this__76294.nodes[this__76294.i]),(this__76294.nodes[(this__76294.i + 1)])], true);
} else
{return cljs.core.first.call(null,this__76294.s);
}
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__76295 = this;
if((this__76295.s == null))
{return cljs.core.create_inode_seq.call(null,this__76295.nodes,(this__76295.i + 2),null);
} else
{return cljs.core.create_inode_seq.call(null,this__76295.nodes,this__76295.i,cljs.core.next.call(null,this__76295.s));
}
});
cljs.core.NodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__76296 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.NodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__76297 = this;
return (new cljs.core.NodeSeq(meta,this__76297.nodes,this__76297.i,this__76297.s,this__76297.__hash));
});
cljs.core.NodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__76298 = this;
return this__76298.meta;
});
cljs.core.NodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__76299 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__76299.meta);
});
cljs.core.NodeSeq;
cljs.core.create_inode_seq = (function() {
var create_inode_seq = null;
var create_inode_seq__1 = (function (nodes){
return create_inode_seq.call(null,nodes,0,null);
});
var create_inode_seq__3 = (function (nodes,i,s){
if((s == null))
{var len__76306 = nodes.length;
var j__76307 = i;
while(true){
if((j__76307 < len__76306))
{if(!(((nodes[j__76307]) == null)))
{return (new cljs.core.NodeSeq(null,nodes,j__76307,null,null));
} else
{var temp__3971__auto____76308 = (nodes[(j__76307 + 1)]);
if(cljs.core.truth_(temp__3971__auto____76308))
{var node__76309 = temp__3971__auto____76308;
var temp__3971__auto____76310 = node__76309.inode_seq();
if(cljs.core.truth_(temp__3971__auto____76310))
{var node_seq__76311 = temp__3971__auto____76310;
return (new cljs.core.NodeSeq(null,nodes,(j__76307 + 2),node_seq__76311,null));
} else
{{
var G__76312 = (j__76307 + 2);
j__76307 = G__76312;
continue;
}
}
} else
{{
var G__76313 = (j__76307 + 2);
j__76307 = G__76313;
continue;
}
}
}
} else
{return null;
}
break;
}
} else
{return (new cljs.core.NodeSeq(null,nodes,i,s,null));
}
});
create_inode_seq = function(nodes,i,s){
switch(arguments.length){
case 1:
return create_inode_seq__1.call(this,nodes);
case 3:
return create_inode_seq__3.call(this,nodes,i,s);
}
throw('Invalid arity: ' + arguments.length);
};
create_inode_seq.cljs$lang$arity$1 = create_inode_seq__1;
create_inode_seq.cljs$lang$arity$3 = create_inode_seq__3;
return create_inode_seq;
})()
;

goog.provide('cljs.core.ArrayNodeSeq');

/**
* @constructor
*/
cljs.core.ArrayNodeSeq = (function (meta,nodes,i,s,__hash){
this.meta = meta;
this.nodes = nodes;
this.i = i;
this.s = s;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850572;
})
cljs.core.ArrayNodeSeq.cljs$lang$type = true;
cljs.core.ArrayNodeSeq.cljs$lang$ctorPrSeq = (function (this__5466__auto__){
return cljs.core.list.call(null,"cljs.core/ArrayNodeSeq");
});
cljs.core.ArrayNodeSeq.cljs$lang$ctorPrWriter = (function (this__5466__auto__,writer__5467__auto__){
return cljs.core._write.call(null,writer__5467__auto__,"cljs.core/ArrayNodeSeq");
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__76314 = this;
var h__5347__auto____76315 = this__76314.__hash;
if(!((h__5347__auto____76315 == null)))
{return h__5347__auto____76315;
} else
{var h__5347__auto____76316 = cljs.core.hash_coll.call(null,coll);
this__76314.__hash = h__5347__auto____76316;
return h__5347__auto____76316;
}
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__76317 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.ArrayNodeSeq.prototype.toString = (function (){
var this__76318 = this;
var this__76319 = this;
return cljs.core.pr_str.call(null,this__76319);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__76320 = this;
return this$;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__76321 = this;
return cljs.core.first.call(null,this__76321.s);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__76322 = this;
return cljs.core.create_array_node_seq.call(null,null,this__76322.nodes,this__76322.i,cljs.core.next.call(null,this__76322.s));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__76323 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__76324 = this;
return (new cljs.core.ArrayNodeSeq(meta,this__76324.nodes,this__76324.i,this__76324.s,this__76324.__hash));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__76325 = this;
return this__76325.meta;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__76326 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__76326.meta);
});
cljs.core.ArrayNodeSeq;
cljs.core.create_array_node_seq = (function() {
var create_array_node_seq = null;
var create_array_node_seq__1 = (function (nodes){
return create_array_node_seq.call(null,null,nodes,0,null);
});
var create_array_node_seq__4 = (function (meta,nodes,i,s){
if((s == null))
{var len__76333 = nodes.length;
var j__76334 = i;
while(true){
if((j__76334 < len__76333))
{var temp__3971__auto____76335 = (nodes[j__76334]);
if(cljs.core.truth_(temp__3971__auto____76335))
{var nj__76336 = temp__3971__auto____76335;
var temp__3971__auto____76337 = nj__76336.inode_seq();
if(cljs.core.truth_(temp__3971__auto____76337))
{var ns__76338 = temp__3971__auto____76337;
return (new cljs.core.ArrayNodeSeq(meta,nodes,(j__76334 + 1),ns__76338,null));
} else
{{
var G__76339 = (j__76334 + 1);
j__76334 = G__76339;
continue;
}
}
} else
{{
var G__76340 = (j__76334 + 1);
j__76334 = G__76340;
continue;
}
}
} else
{return null;
}
break;
}
} else
{return (new cljs.core.ArrayNodeSeq(meta,nodes,i,s,null));
}
});
create_array_node_seq = function(meta,nodes,i,s){
switch(arguments.length){
case 1:
return create_array_node_seq__1.call(this,meta);
case 4:
return create_array_node_seq__4.call(this,meta,nodes,i,s);
}
throw('Invalid arity: ' + arguments.length);
};
create_array_node_seq.cljs$lang$arity$1 = create_array_node_seq__1;
create_array_node_seq.cljs$lang$arity$4 = create_array_node_seq__4;
return create_array_node_seq;
})()
;

goog.provide('cljs.core.PersistentHashMap');

/**
* @constructor
*/
cljs.core.PersistentHashMap = (function (meta,cnt,root,has_nil_QMARK_,nil_val,__hash){
this.meta = meta;
this.cnt = cnt;
this.root = root;
this.has_nil_QMARK_ = has_nil_QMARK_;
this.nil_val = nil_val;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 4;
this.cljs$lang$protocol_mask$partition0$ = 16123663;
})
cljs.core.PersistentHashMap.cljs$lang$type = true;
cljs.core.PersistentHashMap.cljs$lang$ctorPrSeq = (function (this__5466__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentHashMap");
});
cljs.core.PersistentHashMap.cljs$lang$ctorPrWriter = (function (this__5466__auto__,writer__5467__auto__){
return cljs.core._write.call(null,writer__5467__auto__,"cljs.core/PersistentHashMap");
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__76343 = this;
return (new cljs.core.TransientHashMap({},this__76343.root,this__76343.cnt,this__76343.has_nil_QMARK_,this__76343.nil_val));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__76344 = this;
var h__5347__auto____76345 = this__76344.__hash;
if(!((h__5347__auto____76345 == null)))
{return h__5347__auto____76345;
} else
{var h__5347__auto____76346 = cljs.core.hash_imap.call(null,coll);
this__76344.__hash = h__5347__auto____76346;
return h__5347__auto____76346;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__76347 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__76348 = this;
if((k == null))
{if(this__76348.has_nil_QMARK_)
{return this__76348.nil_val;
} else
{return not_found;
}
} else
{if((this__76348.root == null))
{return not_found;
} else
{if("\uFDD0'else")
{return this__76348.root.inode_lookup(0,cljs.core.hash.call(null,k),k,not_found);
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__76349 = this;
if((k == null))
{if((function (){var and__3822__auto____76350 = this__76349.has_nil_QMARK_;
if(and__3822__auto____76350)
{return (v === this__76349.nil_val);
} else
{return and__3822__auto____76350;
}
})())
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__76349.meta,((this__76349.has_nil_QMARK_)?this__76349.cnt:(this__76349.cnt + 1)),this__76349.root,true,v,null));
}
} else
{var added_leaf_QMARK___76351 = (new cljs.core.Box(false));
var new_root__76352 = (((this__76349.root == null))?cljs.core.BitmapIndexedNode.EMPTY:this__76349.root).inode_assoc(0,cljs.core.hash.call(null,k),k,v,added_leaf_QMARK___76351);
if((new_root__76352 === this__76349.root))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__76349.meta,((added_leaf_QMARK___76351.val)?(this__76349.cnt + 1):this__76349.cnt),new_root__76352,this__76349.has_nil_QMARK_,this__76349.nil_val,null));
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__76353 = this;
if((k == null))
{return this__76353.has_nil_QMARK_;
} else
{if((this__76353.root == null))
{return false;
} else
{if("\uFDD0'else")
{return !((this__76353.root.inode_lookup(0,cljs.core.hash.call(null,k),k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel));
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.call = (function() {
var G__76376 = null;
var G__76376__2 = (function (this_sym76354,k){
var this__76356 = this;
var this_sym76354__76357 = this;
var coll__76358 = this_sym76354__76357;
return coll__76358.cljs$core$ILookup$_lookup$arity$2(coll__76358,k);
});
var G__76376__3 = (function (this_sym76355,k,not_found){
var this__76356 = this;
var this_sym76355__76359 = this;
var coll__76360 = this_sym76355__76359;
return coll__76360.cljs$core$ILookup$_lookup$arity$3(coll__76360,k,not_found);
});
G__76376 = function(this_sym76355,k,not_found){
switch(arguments.length){
case 2:
return G__76376__2.call(this,this_sym76355,k);
case 3:
return G__76376__3.call(this,this_sym76355,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__76376;
})()
;
cljs.core.PersistentHashMap.prototype.apply = (function (this_sym76341,args76342){
var this__76361 = this;
return this_sym76341.call.apply(this_sym76341,[this_sym76341].concat(args76342.slice()));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__76362 = this;
var init__76363 = ((this__76362.has_nil_QMARK_)?f.call(null,init,null,this__76362.nil_val):init);
if(cljs.core.reduced_QMARK_.call(null,init__76363))
{return cljs.core.deref.call(null,init__76363);
} else
{if(!((this__76362.root == null)))
{return this__76362.root.kv_reduce(f,init__76363);
} else
{if("\uFDD0'else")
{return init__76363;
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__76364 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentHashMap.prototype.toString = (function (){
var this__76365 = this;
var this__76366 = this;
return cljs.core.pr_str.call(null,this__76366);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__76367 = this;
if((this__76367.cnt > 0))
{var s__76368 = ((!((this__76367.root == null)))?this__76367.root.inode_seq():null);
if(this__76367.has_nil_QMARK_)
{return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([null,this__76367.nil_val], true),s__76368);
} else
{return s__76368;
}
} else
{return null;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__76369 = this;
return this__76369.cnt;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__76370 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__76371 = this;
return (new cljs.core.PersistentHashMap(meta,this__76371.cnt,this__76371.root,this__76371.has_nil_QMARK_,this__76371.nil_val,this__76371.__hash));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__76372 = this;
return this__76372.meta;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__76373 = this;
return cljs.core._with_meta.call(null,cljs.core.PersistentHashMap.EMPTY,this__76373.meta);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__76374 = this;
if((k == null))
{if(this__76374.has_nil_QMARK_)
{return (new cljs.core.PersistentHashMap(this__76374.meta,(this__76374.cnt - 1),this__76374.root,false,null,null));
} else
{return coll;
}
} else
{if((this__76374.root == null))
{return coll;
} else
{if("\uFDD0'else")
{var new_root__76375 = this__76374.root.inode_without(0,cljs.core.hash.call(null,k),k);
if((new_root__76375 === this__76374.root))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__76374.meta,(this__76374.cnt - 1),new_root__76375,this__76374.has_nil_QMARK_,this__76374.nil_val,null));
}
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap;
cljs.core.PersistentHashMap.EMPTY = (new cljs.core.PersistentHashMap(null,0,null,false,null,0));
cljs.core.PersistentHashMap.fromArrays = (function (ks,vs){
var len__76377 = ks.length;
var i__76378 = 0;
var out__76379 = cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);
while(true){
if((i__76378 < len__76377))
{{
var G__76380 = (i__76378 + 1);
var G__76381 = cljs.core.assoc_BANG_.call(null,out__76379,(ks[i__76378]),(vs[i__76378]));
i__76378 = G__76380;
out__76379 = G__76381;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__76379);
}
break;
}
});

goog.provide('cljs.core.TransientHashMap');

/**
* @constructor
*/
cljs.core.TransientHashMap = (function (edit,root,count,has_nil_QMARK_,nil_val){
this.edit = edit;
this.root = root;
this.count = count;
this.has_nil_QMARK_ = has_nil_QMARK_;
this.nil_val = nil_val;
this.cljs$lang$protocol_mask$partition1$ = 56;
this.cljs$lang$protocol_mask$partition0$ = 258;
})
cljs.core.TransientHashMap.cljs$lang$type = true;
cljs.core.TransientHashMap.cljs$lang$ctorPrSeq = (function (this__5466__auto__){
return cljs.core.list.call(null,"cljs.core/TransientHashMap");
});
cljs.core.TransientHashMap.cljs$lang$ctorPrWriter = (function (this__5466__auto__,writer__5467__auto__){
return cljs.core._write.call(null,writer__5467__auto__,"cljs.core/TransientHashMap");
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = (function (tcoll,key){
var this__76382 = this;
return tcoll.without_BANG_(key);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__76383 = this;
return tcoll.assoc_BANG_(key,val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,val){
var this__76384 = this;
return tcoll.conj_BANG_(val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__76385 = this;
return tcoll.persistent_BANG_();
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var this__76386 = this;
if((k == null))
{if(this__76386.has_nil_QMARK_)
{return this__76386.nil_val;
} else
{return null;
}
} else
{if((this__76386.root == null))
{return null;
} else
{return this__76386.root.inode_lookup(0,cljs.core.hash.call(null,k),k);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var this__76387 = this;
if((k == null))
{if(this__76387.has_nil_QMARK_)
{return this__76387.nil_val;
} else
{return not_found;
}
} else
{if((this__76387.root == null))
{return not_found;
} else
{return this__76387.root.inode_lookup(0,cljs.core.hash.call(null,k),k,not_found);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__76388 = this;
if(this__76388.edit)
{return this__76388.count;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.conj_BANG_ = (function (o){
var this__76389 = this;
var tcoll__76390 = this;
if(this__76389.edit)
{if((function (){var G__76391__76392 = o;
if(G__76391__76392)
{if((function (){var or__3824__auto____76393 = (G__76391__76392.cljs$lang$protocol_mask$partition0$ & 2048);
if(or__3824__auto____76393)
{return or__3824__auto____76393;
} else
{return G__76391__76392.cljs$core$IMapEntry$;
}
})())
{return true;
} else
{if((!G__76391__76392.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__76391__76392);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__76391__76392);
}
})())
{return tcoll__76390.assoc_BANG_(cljs.core.key.call(null,o),cljs.core.val.call(null,o));
} else
{var es__76394 = cljs.core.seq.call(null,o);
var tcoll__76395 = tcoll__76390;
while(true){
var temp__3971__auto____76396 = cljs.core.first.call(null,es__76394);
if(cljs.core.truth_(temp__3971__auto____76396))
{var e__76397 = temp__3971__auto____76396;
{
var G__76408 = cljs.core.next.call(null,es__76394);
var G__76409 = tcoll__76395.assoc_BANG_(cljs.core.key.call(null,e__76397),cljs.core.val.call(null,e__76397));
es__76394 = G__76408;
tcoll__76395 = G__76409;
continue;
}
} else
{return tcoll__76395;
}
break;
}
}
} else
{throw (new Error("conj! after persistent"));
}
});
cljs.core.TransientHashMap.prototype.assoc_BANG_ = (function (k,v){
var this__76398 = this;
var tcoll__76399 = this;
if(this__76398.edit)
{if((k == null))
{if((this__76398.nil_val === v))
{} else
{this__76398.nil_val = v;
}
if(this__76398.has_nil_QMARK_)
{} else
{this__76398.count = (this__76398.count + 1);
this__76398.has_nil_QMARK_ = true;
}
return tcoll__76399;
} else
{var added_leaf_QMARK___76400 = (new cljs.core.Box(false));
var node__76401 = (((this__76398.root == null))?cljs.core.BitmapIndexedNode.EMPTY:this__76398.root).inode_assoc_BANG_(this__76398.edit,0,cljs.core.hash.call(null,k),k,v,added_leaf_QMARK___76400);
if((node__76401 === this__76398.root))
{} else
{this__76398.root = node__76401;
}
if(added_leaf_QMARK___76400.val)
{this__76398.count = (this__76398.count + 1);
} else
{}
return tcoll__76399;
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.without_BANG_ = (function (k){
var this__76402 = this;
var tcoll__76403 = this;
if(this__76402.edit)
{if((k == null))
{if(this__76402.has_nil_QMARK_)
{this__76402.has_nil_QMARK_ = false;
this__76402.nil_val = null;
this__76402.count = (this__76402.count - 1);
return tcoll__76403;
} else
{return tcoll__76403;
}
} else
{if((this__76402.root == null))
{return tcoll__76403;
} else
{var removed_leaf_QMARK___76404 = (new cljs.core.Box(false));
var node__76405 = this__76402.root.inode_without_BANG_(this__76402.edit,0,cljs.core.hash.call(null,k),k,removed_leaf_QMARK___76404);
if((node__76405 === this__76402.root))
{} else
{this__76402.root = node__76405;
}
if(cljs.core.truth_((removed_leaf_QMARK___76404[0])))
{this__76402.count = (this__76402.count - 1);
} else
{}
return tcoll__76403;
}
}
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.persistent_BANG_ = (function (){
var this__76406 = this;
var tcoll__76407 = this;
if(this__76406.edit)
{this__76406.edit = null;
return (new cljs.core.PersistentHashMap(null,this__76406.count,this__76406.root,this__76406.has_nil_QMARK_,this__76406.nil_val,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientHashMap;
cljs.core.tree_map_seq_push = (function tree_map_seq_push(node,stack,ascending_QMARK_){
var t__76412 = node;
var stack__76413 = stack;
while(true){
if(!((t__76412 == null)))
{{
var G__76414 = ((ascending_QMARK_)?t__76412.left:t__76412.right);
var G__76415 = cljs.core.conj.call(null,stack__76413,t__76412);
t__76412 = G__76414;
stack__76413 = G__76415;
continue;
}
} else
{return stack__76413;
}
break;
}
});

goog.provide('cljs.core.PersistentTreeMapSeq');

/**
* @constructor
*/
cljs.core.PersistentTreeMapSeq = (function (meta,stack,ascending_QMARK_,cnt,__hash){
this.meta = meta;
this.stack = stack;
this.ascending_QMARK_ = ascending_QMARK_;
this.cnt = cnt;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850574;
})
cljs.core.PersistentTreeMapSeq.cljs$lang$type = true;
cljs.core.PersistentTreeMapSeq.cljs$lang$ctorPrSeq = (function (this__5466__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentTreeMapSeq");
});
cljs.core.PersistentTreeMapSeq.cljs$lang$ctorPrWriter = (function (this__5466__auto__,writer__5467__auto__){
return cljs.core._write.call(null,writer__5467__auto__,"cljs.core/PersistentTreeMapSeq");
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__76416 = this;
var h__5347__auto____76417 = this__76416.__hash;
if(!((h__5347__auto____76417 == null)))
{return h__5347__auto____76417;
} else
{var h__5347__auto____76418 = cljs.core.hash_coll.call(null,coll);
this__76416.__hash = h__5347__auto____76418;
return h__5347__auto____76418;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__76419 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentTreeMapSeq.prototype.toString = (function (){
var this__76420 = this;
var this__76421 = this;
return cljs.core.pr_str.call(null,this__76421);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__76422 = this;
return this$;
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__76423 = this;
if((this__76423.cnt < 0))
{return (cljs.core.count.call(null,cljs.core.next.call(null,coll)) + 1);
} else
{return this__76423.cnt;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (this$){
var this__76424 = this;
return cljs.core.peek.call(null,this__76424.stack);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){
var this__76425 = this;
var t__76426 = cljs.core.first.call(null,this__76425.stack);
var next_stack__76427 = cljs.core.tree_map_seq_push.call(null,((this__76425.ascending_QMARK_)?t__76426.right:t__76426.left),cljs.core.next.call(null,this__76425.stack),this__76425.ascending_QMARK_);
if(!((next_stack__76427 == null)))
{return (new cljs.core.PersistentTreeMapSeq(null,next_stack__76427,this__76425.ascending_QMARK_,(this__76425.cnt - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__76428 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__76429 = this;
return (new cljs.core.PersistentTreeMapSeq(meta,this__76429.stack,this__76429.ascending_QMARK_,this__76429.cnt,this__76429.__hash));
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__76430 = this;
return this__76430.meta;
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__76431 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__76431.meta);
});
cljs.core.PersistentTreeMapSeq;
cljs.core.create_tree_map_seq = (function create_tree_map_seq(tree,ascending_QMARK_,cnt){
return (new cljs.core.PersistentTreeMapSeq(null,cljs.core.tree_map_seq_push.call(null,tree,null,ascending_QMARK_),ascending_QMARK_,cnt,null));
});
cljs.core.balance_left = (function balance_left(key,val,ins,right){
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins))
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins.left))
{return (new cljs.core.RedNode(ins.key,ins.val,ins.left.blacken(),(new cljs.core.BlackNode(key,val,ins.right,right,null)),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins.right))
{return (new cljs.core.RedNode(ins.right.key,ins.right.val,(new cljs.core.BlackNode(ins.key,ins.val,ins.left,ins.right.left,null)),(new cljs.core.BlackNode(key,val,ins.right.right,right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(key,val,ins,right,null));
} else
{return null;
}
}
}
} else
{return (new cljs.core.BlackNode(key,val,ins,right,null));
}
});
cljs.core.balance_right = (function balance_right(key,val,left,ins){
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins))
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins.right))
{return (new cljs.core.RedNode(ins.key,ins.val,(new cljs.core.BlackNode(key,val,left,ins.left,null)),ins.right.blacken(),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins.left))
{return (new cljs.core.RedNode(ins.left.key,ins.left.val,(new cljs.core.BlackNode(key,val,left,ins.left.left,null)),(new cljs.core.BlackNode(ins.key,ins.val,ins.left.right,ins.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(key,val,left,ins,null));
} else
{return null;
}
}
}
} else
{return (new cljs.core.BlackNode(key,val,left,ins,null));
}
});
cljs.core.balance_left_del = (function balance_left_del(key,val,del,right){
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,del))
{return (new cljs.core.RedNode(key,val,del.blacken(),right,null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,right))
{return cljs.core.balance_right.call(null,key,val,del,right.redden());
} else
{if((function (){var and__3822__auto____76433 = cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right);
if(and__3822__auto____76433)
{return cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,right.left);
} else
{return and__3822__auto____76433;
}
})())
{return (new cljs.core.RedNode(right.left.key,right.left.val,(new cljs.core.BlackNode(key,val,del,right.left.left,null)),cljs.core.balance_right.call(null,right.key,right.val,right.left.right,right.right.redden()),null));
} else
{if("\uFDD0'else")
{throw (new Error("red-black tree invariant violation"));
} else
{return null;
}
}
}
}
});
cljs.core.balance_right_del = (function balance_right_del(key,val,left,del){
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,del))
{return (new cljs.core.RedNode(key,val,left,del.blacken(),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,left))
{return cljs.core.balance_left.call(null,key,val,left.redden(),del);
} else
{if((function (){var and__3822__auto____76435 = cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,left);
if(and__3822__auto____76435)
{return cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,left.right);
} else
{return and__3822__auto____76435;
}
})())
{return (new cljs.core.RedNode(left.right.key,left.right.val,cljs.core.balance_left.call(null,left.key,left.val,left.left.redden(),left.right.left),(new cljs.core.BlackNode(key,val,left.right.right,del,null)),null));
} else
{if("\uFDD0'else")
{throw (new Error("red-black tree invariant violation"));
} else
{return null;
}
}
}
}
});
cljs.core.tree_map_kv_reduce = (function tree_map_kv_reduce(node,f,init){
var init__76439 = f.call(null,init,node.key,node.val);
if(cljs.core.reduced_QMARK_.call(null,init__76439))
{return cljs.core.deref.call(null,init__76439);
} else
{var init__76440 = ((!((node.left == null)))?tree_map_kv_reduce.call(null,node.left,f,init__76439):init__76439);
if(cljs.core.reduced_QMARK_.call(null,init__76440))
{return cljs.core.deref.call(null,init__76440);
} else
{var init__76441 = ((!((node.right == null)))?tree_map_kv_reduce.call(null,node.right,f,init__76440):init__76440);
if(cljs.core.reduced_QMARK_.call(null,init__76441))
{return cljs.core.deref.call(null,init__76441);
} else
{return init__76441;
}
}
}
});

goog.provide('cljs.core.BlackNode');

/**
* @constructor
*/
cljs.core.BlackNode = (function (key,val,left,right,__hash){
this.key = key;
this.val = val;
this.left = left;
this.right = right;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32402207;
})
cljs.core.BlackNode.cljs$lang$type = true;
cljs.core.BlackNode.cljs$lang$ctorPrSeq = (function (this__5466__auto__){
return cljs.core.list.call(null,"cljs.core/BlackNode");
});
cljs.core.BlackNode.cljs$lang$ctorPrWriter = (function (this__5466__auto__,writer__5467__auto__){
return cljs.core._write.call(null,writer__5467__auto__,"cljs.core/BlackNode");
});
cljs.core.BlackNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__76444 = this;
var h__5347__auto____76445 = this__76444.__hash;
if(!((h__5347__auto____76445 == null)))
{return h__5347__auto____76445;
} else
{var h__5347__auto____76446 = cljs.core.hash_coll.call(null,coll);
this__76444.__hash = h__5347__auto____76446;
return h__5347__auto____76446;
}
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var this__76447 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,null);
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var this__76448 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,not_found);
});
cljs.core.BlackNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var this__76449 = this;
return cljs.core.assoc.call(null,cljs.core.PersistentVector.fromArray([this__76449.key,this__76449.val], true),k,v);
});
cljs.core.BlackNode.prototype.call = (function() {
var G__76497 = null;
var G__76497__2 = (function (this_sym76450,k){
var this__76452 = this;
var this_sym76450__76453 = this;
var node__76454 = this_sym76450__76453;
return node__76454.cljs$core$ILookup$_lookup$arity$2(node__76454,k);
});
var G__76497__3 = (function (this_sym76451,k,not_found){
var this__76452 = this;
var this_sym76451__76455 = this;
var node__76456 = this_sym76451__76455;
return node__76456.cljs$core$ILookup$_lookup$arity$3(node__76456,k,not_found);
});
G__76497 = function(this_sym76451,k,not_found){
switch(arguments.length){
case 2:
return G__76497__2.call(this,this_sym76451,k);
case 3:
return G__76497__3.call(this,this_sym76451,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__76497;
})()
;
cljs.core.BlackNode.prototype.apply = (function (this_sym76442,args76443){
var this__76457 = this;
return this_sym76442.call.apply(this_sym76442,[this_sym76442].concat(args76443.slice()));
});
cljs.core.BlackNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var this__76458 = this;
return cljs.core.PersistentVector.fromArray([this__76458.key,this__76458.val,o], true);
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var this__76459 = this;
return this__76459.key;
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var this__76460 = this;
return this__76460.val;
});
cljs.core.BlackNode.prototype.add_right = (function (ins){
var this__76461 = this;
var node__76462 = this;
return ins.balance_right(node__76462);
});
cljs.core.BlackNode.prototype.redden = (function (){
var this__76463 = this;
var node__76464 = this;
return (new cljs.core.RedNode(this__76463.key,this__76463.val,this__76463.left,this__76463.right,null));
});
cljs.core.BlackNode.prototype.remove_right = (function (del){
var this__76465 = this;
var node__76466 = this;
return cljs.core.balance_right_del.call(null,this__76465.key,this__76465.val,this__76465.left,del);
});
cljs.core.BlackNode.prototype.replace = (function (key,val,left,right){
var this__76467 = this;
var node__76468 = this;
return (new cljs.core.BlackNode(key,val,left,right,null));
});
cljs.core.BlackNode.prototype.kv_reduce = (function (f,init){
var this__76469 = this;
var node__76470 = this;
return cljs.core.tree_map_kv_reduce.call(null,node__76470,f,init);
});
cljs.core.BlackNode.prototype.remove_left = (function (del){
var this__76471 = this;
var node__76472 = this;
return cljs.core.balance_left_del.call(null,this__76471.key,this__76471.val,del,this__76471.right);
});
cljs.core.BlackNode.prototype.add_left = (function (ins){
var this__76473 = this;
var node__76474 = this;
return ins.balance_left(node__76474);
});
cljs.core.BlackNode.prototype.balance_left = (function (parent){
var this__76475 = this;
var node__76476 = this;
return (new cljs.core.BlackNode(parent.key,parent.val,node__76476,parent.right,null));
});
cljs.core.BlackNode.prototype.toString = (function() {
var G__76498 = null;
var G__76498__0 = (function (){
var this__76477 = this;
var this__76479 = this;
return cljs.core.pr_str.call(null,this__76479);
});
G__76498 = function(){
switch(arguments.length){
case 0:
return G__76498__0.call(this);
}
throw('Invalid arity: ' + arguments.length);
};
return G__76498;
})()
;
cljs.core.BlackNode.prototype.balance_right = (function (parent){
var this__76480 = this;
var node__76481 = this;
return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node__76481,null));
});
cljs.core.BlackNode.prototype.blacken = (function (){
var this__76482 = this;
var node__76483 = this;
return node__76483;
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var this__76484 = this;
return cljs.core.ci_reduce.call(null,node,f);
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var this__76485 = this;
return cljs.core.ci_reduce.call(null,node,f,start);
});
cljs.core.BlackNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var this__76486 = this;
return cljs.core.list.call(null,this__76486.key,this__76486.val);
});
cljs.core.BlackNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var this__76487 = this;
return 2;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var this__76488 = this;
return this__76488.val;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var this__76489 = this;
return cljs.core.PersistentVector.fromArray([this__76489.key], true);
});
cljs.core.BlackNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var this__76490 = this;
return cljs.core._assoc_n.call(null,cljs.core.PersistentVector.fromArray([this__76490.key,this__76490.val], true),n,v);
});
cljs.core.BlackNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__76491 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.BlackNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var this__76492 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([this__76492.key,this__76492.val], true),meta);
});
cljs.core.BlackNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var this__76493 = this;
return null;
});
cljs.core.BlackNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var this__76494 = this;
if((n === 0))
{return this__76494.key;
} else
{if((n === 1))
{return this__76494.val;
} else
{if("\uFDD0'else")
{return null;
} else
{return null;
}
}
}
});
cljs.core.BlackNode.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (node,n,not_found){
var this__76495 = this;
if((n === 0))
{return this__76495.key;
} else
{if((n === 1))
{return this__76495.val;
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
});
cljs.core.BlackNode.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (node){
var this__76496 = this;
return cljs.core.PersistentVector.EMPTY;
});
cljs.core.BlackNode;

goog.provide('cljs.core.RedNode');

/**
* @constructor
*/
cljs.core.RedNode = (function (key,val,left,right,__hash){
this.key = key;
this.val = val;
this.left = left;
this.right = right;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32402207;
})
cljs.core.RedNode.cljs$lang$type = true;
cljs.core.RedNode.cljs$lang$ctorPrSeq = (function (this__5466__auto__){
return cljs.core.list.call(null,"cljs.core/RedNode");
});
cljs.core.RedNode.cljs$lang$ctorPrWriter = (function (this__5466__auto__,writer__5467__auto__){
return cljs.core._write.call(null,writer__5467__auto__,"cljs.core/RedNode");
});
cljs.core.RedNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__76501 = this;
var h__5347__auto____76502 = this__76501.__hash;
if(!((h__5347__auto____76502 == null)))
{return h__5347__auto____76502;
} else
{var h__5347__auto____76503 = cljs.core.hash_coll.call(null,coll);
this__76501.__hash = h__5347__auto____76503;
return h__5347__auto____76503;
}
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var this__76504 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,null);
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var this__76505 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,not_found);
});
cljs.core.RedNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var this__76506 = this;
return cljs.core.assoc.call(null,cljs.core.PersistentVector.fromArray([this__76506.key,this__76506.val], true),k,v);
});
cljs.core.RedNode.prototype.call = (function() {
var G__76554 = null;
var G__76554__2 = (function (this_sym76507,k){
var this__76509 = this;
var this_sym76507__76510 = this;
var node__76511 = this_sym76507__76510;
return node__76511.cljs$core$ILookup$_lookup$arity$2(node__76511,k);
});
var G__76554__3 = (function (this_sym76508,k,not_found){
var this__76509 = this;
var this_sym76508__76512 = this;
var node__76513 = this_sym76508__76512;
return node__76513.cljs$core$ILookup$_lookup$arity$3(node__76513,k,not_found);
});
G__76554 = function(this_sym76508,k,not_found){
switch(arguments.length){
case 2:
return G__76554__2.call(this,this_sym76508,k);
case 3:
return G__76554__3.call(this,this_sym76508,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__76554;
})()
;
cljs.core.RedNode.prototype.apply = (function (this_sym76499,args76500){
var this__76514 = this;
return this_sym76499.call.apply(this_sym76499,[this_sym76499].concat(args76500.slice()));
});
cljs.core.RedNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var this__76515 = this;
return cljs.core.PersistentVector.fromArray([this__76515.key,this__76515.val,o], true);
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var this__76516 = this;
return this__76516.key;
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var this__76517 = this;
return this__76517.val;
});
cljs.core.RedNode.prototype.add_right = (function (ins){
var this__76518 = this;
var node__76519 = this;
return (new cljs.core.RedNode(this__76518.key,this__76518.val,this__76518.left,ins,null));
});
cljs.core.RedNode.prototype.redden = (function (){
var this__76520 = this;
var node__76521 = this;
throw (new Error("red-black tree invariant violation"));
});
cljs.core.RedNode.prototype.remove_right = (function (del){
var this__76522 = this;
var node__76523 = this;
return (new cljs.core.RedNode(this__76522.key,this__76522.val,this__76522.left,del,null));
});
cljs.core.RedNode.prototype.replace = (function (key,val,left,right){
var this__76524 = this;
var node__76525 = this;
return (new cljs.core.RedNode(key,val,left,right,null));
});
cljs.core.RedNode.prototype.kv_reduce = (function (f,init){
var this__76526 = this;
var node__76527 = this;
return cljs.core.tree_map_kv_reduce.call(null,node__76527,f,init);
});
cljs.core.RedNode.prototype.remove_left = (function (del){
var this__76528 = this;
var node__76529 = this;
return (new cljs.core.RedNode(this__76528.key,this__76528.val,del,this__76528.right,null));
});
cljs.core.RedNode.prototype.add_left = (function (ins){
var this__76530 = this;
var node__76531 = this;
return (new cljs.core.RedNode(this__76530.key,this__76530.val,ins,this__76530.right,null));
});
cljs.core.RedNode.prototype.balance_left = (function (parent){
var this__76532 = this;
var node__76533 = this;
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__76532.left))
{return (new cljs.core.RedNode(this__76532.key,this__76532.val,this__76532.left.blacken(),(new cljs.core.BlackNode(parent.key,parent.val,this__76532.right,parent.right,null)),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__76532.right))
{return (new cljs.core.RedNode(this__76532.right.key,this__76532.right.val,(new cljs.core.BlackNode(this__76532.key,this__76532.val,this__76532.left,this__76532.right.left,null)),(new cljs.core.BlackNode(parent.key,parent.val,this__76532.right.right,parent.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(parent.key,parent.val,node__76533,parent.right,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.toString = (function() {
var G__76555 = null;
var G__76555__0 = (function (){
var this__76534 = this;
var this__76536 = this;
return cljs.core.pr_str.call(null,this__76536);
});
G__76555 = function(){
switch(arguments.length){
case 0:
return G__76555__0.call(this);
}
throw('Invalid arity: ' + arguments.length);
};
return G__76555;
})()
;
cljs.core.RedNode.prototype.balance_right = (function (parent){
var this__76537 = this;
var node__76538 = this;
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__76537.right))
{return (new cljs.core.RedNode(this__76537.key,this__76537.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,this__76537.left,null)),this__76537.right.blacken(),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__76537.left))
{return (new cljs.core.RedNode(this__76537.left.key,this__76537.left.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,this__76537.left.left,null)),(new cljs.core.BlackNode(this__76537.key,this__76537.val,this__76537.left.right,this__76537.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node__76538,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.blacken = (function (){
var this__76539 = this;
var node__76540 = this;
return (new cljs.core.BlackNode(this__76539.key,this__76539.val,this__76539.left,this__76539.right,null));
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var this__76541 = this;
return cljs.core.ci_reduce.call(null,node,f);
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var this__76542 = this;
return cljs.core.ci_reduce.call(null,node,f,start);
});
cljs.core.RedNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var this__76543 = this;
return cljs.core.list.call(null,this__76543.key,this__76543.val);
});
cljs.core.RedNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var this__76544 = this;
return 2;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var this__76545 = this;
return this__76545.val;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var this__76546 = this;
return cljs.core.PersistentVector.fromArray([this__76546.key], true);
});
cljs.core.RedNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var this__76547 = this;
return cljs.core._assoc_n.call(null,cljs.core.PersistentVector.fromArray([this__76547.key,this__76547.val], true),n,v);
});
cljs.core.RedNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__76548 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.RedNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var this__76549 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([this__76549.key,this__76549.val], true),meta);
});
cljs.core.RedNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var this__76550 = this;
return null;
});
cljs.core.RedNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var this__76551 = this;
if((n === 0))
{return this__76551.key;
} else
{if((n === 1))
{return this__76551.val;
} else
{if("\uFDD0'else")
{return null;
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (node,n,not_found){
var this__76552 = this;
if((n === 0))
{return this__76552.key;
} else
{if((n === 1))
{return this__76552.val;
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (node){
var this__76553 = this;
return cljs.core.PersistentVector.EMPTY;
});
cljs.core.RedNode;
cljs.core.tree_map_add = (function tree_map_add(comp,tree,k,v,found){
if((tree == null))
{return (new cljs.core.RedNode(k,v,null,null,null));
} else
{var c__76559 = comp.call(null,k,tree.key);
if((c__76559 === 0))
{(found[0] = tree);
return null;
} else
{if((c__76559 < 0))
{var ins__76560 = tree_map_add.call(null,comp,tree.left,k,v,found);
if(!((ins__76560 == null)))
{return tree.add_left(ins__76560);
} else
{return null;
}
} else
{if("\uFDD0'else")
{var ins__76561 = tree_map_add.call(null,comp,tree.right,k,v,found);
if(!((ins__76561 == null)))
{return tree.add_right(ins__76561);
} else
{return null;
}
} else
{return null;
}
}
}
}
});
cljs.core.tree_map_append = (function tree_map_append(left,right){
if((left == null))
{return right;
} else
{if((right == null))
{return left;
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,left))
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right))
{var app__76564 = tree_map_append.call(null,left.right,right.left);
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,app__76564))
{return (new cljs.core.RedNode(app__76564.key,app__76564.val,(new cljs.core.RedNode(left.key,left.val,left.left,app__76564.left,null)),(new cljs.core.RedNode(right.key,right.val,app__76564.right,right.right,null)),null));
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,(new cljs.core.RedNode(right.key,right.val,app__76564,right.right,null)),null));
}
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,tree_map_append.call(null,left.right,right),null));
}
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right))
{return (new cljs.core.RedNode(right.key,right.val,tree_map_append.call(null,left,right.left),right.right,null));
} else
{if("\uFDD0'else")
{var app__76565 = tree_map_append.call(null,left.right,right.left);
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,app__76565))
{return (new cljs.core.RedNode(app__76565.key,app__76565.val,(new cljs.core.BlackNode(left.key,left.val,left.left,app__76565.left,null)),(new cljs.core.BlackNode(right.key,right.val,app__76565.right,right.right,null)),null));
} else
{return cljs.core.balance_left_del.call(null,left.key,left.val,left.left,(new cljs.core.BlackNode(right.key,right.val,app__76565,right.right,null)));
}
} else
{return null;
}
}
}
}
}
});
cljs.core.tree_map_remove = (function tree_map_remove(comp,tree,k,found){
if(!((tree == null)))
{var c__76571 = comp.call(null,k,tree.key);
if((c__76571 === 0))
{(found[0] = tree);
return cljs.core.tree_map_append.call(null,tree.left,tree.right);
} else
{if((c__76571 < 0))
{var del__76572 = tree_map_remove.call(null,comp,tree.left,k,found);
if((function (){var or__3824__auto____76573 = !((del__76572 == null));
if(or__3824__auto____76573)
{return or__3824__auto____76573;
} else
{return !(((found[0]) == null));
}
})())
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,tree.left))
{return cljs.core.balance_left_del.call(null,tree.key,tree.val,del__76572,tree.right);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,del__76572,tree.right,null));
}
} else
{return null;
}
} else
{if("\uFDD0'else")
{var del__76574 = tree_map_remove.call(null,comp,tree.right,k,found);
if((function (){var or__3824__auto____76575 = !((del__76574 == null));
if(or__3824__auto____76575)
{return or__3824__auto____76575;
} else
{return !(((found[0]) == null));
}
})())
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,tree.right))
{return cljs.core.balance_right_del.call(null,tree.key,tree.val,tree.left,del__76574);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,tree.left,del__76574,null));
}
} else
{return null;
}
} else
{return null;
}
}
}
} else
{return null;
}
});
cljs.core.tree_map_replace = (function tree_map_replace(comp,tree,k,v){
var tk__76578 = tree.key;
var c__76579 = comp.call(null,k,tk__76578);
if((c__76579 === 0))
{return tree.replace(tk__76578,v,tree.left,tree.right);
} else
{if((c__76579 < 0))
{return tree.replace(tk__76578,tree.val,tree_map_replace.call(null,comp,tree.left,k,v),tree.right);
} else
{if("\uFDD0'else")
{return tree.replace(tk__76578,tree.val,tree.left,tree_map_replace.call(null,comp,tree.right,k,v));
} else
{return null;
}
}
}
});

goog.provide('cljs.core.PersistentTreeMap');

/**
* @constructor
*/
cljs.core.PersistentTreeMap = (function (comp,tree,cnt,meta,__hash){
this.comp = comp;
this.tree = tree;
this.cnt = cnt;
this.meta = meta;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 418776847;
})
cljs.core.PersistentTreeMap.cljs$lang$type = true;
cljs.core.PersistentTreeMap.cljs$lang$ctorPrSeq = (function (this__5466__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentTreeMap");
});
cljs.core.PersistentTreeMap.cljs$lang$ctorPrWriter = (function (this__5466__auto__,writer__5467__auto__){
return cljs.core._write.call(null,writer__5467__auto__,"cljs.core/PersistentTreeMap");
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__76582 = this;
var h__5347__auto____76583 = this__76582.__hash;
if(!((h__5347__auto____76583 == null)))
{return h__5347__auto____76583;
} else
{var h__5347__auto____76584 = cljs.core.hash_imap.call(null,coll);
this__76582.__hash = h__5347__auto____76584;
return h__5347__auto____76584;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__76585 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__76586 = this;
var n__76587 = coll.entry_at(k);
if(!((n__76587 == null)))
{return n__76587.val;
} else
{return not_found;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__76588 = this;
var found__76589 = [null];
var t__76590 = cljs.core.tree_map_add.call(null,this__76588.comp,this__76588.tree,k,v,found__76589);
if((t__76590 == null))
{var found_node__76591 = cljs.core.nth.call(null,found__76589,0);
if(cljs.core._EQ_.call(null,v,found_node__76591.val))
{return coll;
} else
{return (new cljs.core.PersistentTreeMap(this__76588.comp,cljs.core.tree_map_replace.call(null,this__76588.comp,this__76588.tree,k,v),this__76588.cnt,this__76588.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(this__76588.comp,t__76590.blacken(),(this__76588.cnt + 1),this__76588.meta,null));
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__76592 = this;
return !((coll.entry_at(k) == null));
});
cljs.core.PersistentTreeMap.prototype.call = (function() {
var G__76626 = null;
var G__76626__2 = (function (this_sym76593,k){
var this__76595 = this;
var this_sym76593__76596 = this;
var coll__76597 = this_sym76593__76596;
return coll__76597.cljs$core$ILookup$_lookup$arity$2(coll__76597,k);
});
var G__76626__3 = (function (this_sym76594,k,not_found){
var this__76595 = this;
var this_sym76594__76598 = this;
var coll__76599 = this_sym76594__76598;
return coll__76599.cljs$core$ILookup$_lookup$arity$3(coll__76599,k,not_found);
});
G__76626 = function(this_sym76594,k,not_found){
switch(arguments.length){
case 2:
return G__76626__2.call(this,this_sym76594,k);
case 3:
return G__76626__3.call(this,this_sym76594,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__76626;
})()
;
cljs.core.PersistentTreeMap.prototype.apply = (function (this_sym76580,args76581){
var this__76600 = this;
return this_sym76580.call.apply(this_sym76580,[this_sym76580].concat(args76581.slice()));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__76601 = this;
if(!((this__76601.tree == null)))
{return cljs.core.tree_map_kv_reduce.call(null,this__76601.tree,f,init);
} else
{return init;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__76602 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__76603 = this;
if((this__76603.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__76603.tree,false,this__76603.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.toString = (function (){
var this__76604 = this;
var this__76605 = this;
return cljs.core.pr_str.call(null,this__76605);
});
cljs.core.PersistentTreeMap.prototype.entry_at = (function (k){
var this__76606 = this;
var coll__76607 = this;
var t__76608 = this__76606.tree;
while(true){
if(!((t__76608 == null)))
{var c__76609 = this__76606.comp.call(null,k,t__76608.key);
if((c__76609 === 0))
{return t__76608;
} else
{if((c__76609 < 0))
{{
var G__76627 = t__76608.left;
t__76608 = G__76627;
continue;
}
} else
{if("\uFDD0'else")
{{
var G__76628 = t__76608.right;
t__76608 = G__76628;
continue;
}
} else
{return null;
}
}
}
} else
{return null;
}
break;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (coll,ascending_QMARK_){
var this__76610 = this;
if((this__76610.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__76610.tree,ascending_QMARK_,this__76610.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var this__76611 = this;
if((this__76611.cnt > 0))
{var stack__76612 = null;
var t__76613 = this__76611.tree;
while(true){
if(!((t__76613 == null)))
{var c__76614 = this__76611.comp.call(null,k,t__76613.key);
if((c__76614 === 0))
{return (new cljs.core.PersistentTreeMapSeq(null,cljs.core.conj.call(null,stack__76612,t__76613),ascending_QMARK_,-1,null));
} else
{if(cljs.core.truth_(ascending_QMARK_))
{if((c__76614 < 0))
{{
var G__76629 = cljs.core.conj.call(null,stack__76612,t__76613);
var G__76630 = t__76613.left;
stack__76612 = G__76629;
t__76613 = G__76630;
continue;
}
} else
{{
var G__76631 = stack__76612;
var G__76632 = t__76613.right;
stack__76612 = G__76631;
t__76613 = G__76632;
continue;
}
}
} else
{if("\uFDD0'else")
{if((c__76614 > 0))
{{
var G__76633 = cljs.core.conj.call(null,stack__76612,t__76613);
var G__76634 = t__76613.right;
stack__76612 = G__76633;
t__76613 = G__76634;
continue;
}
} else
{{
var G__76635 = stack__76612;
var G__76636 = t__76613.left;
stack__76612 = G__76635;
t__76613 = G__76636;
continue;
}
}
} else
{return null;
}
}
}
} else
{if((stack__76612 == null))
{return (new cljs.core.PersistentTreeMapSeq(null,stack__76612,ascending_QMARK_,-1,null));
} else
{return null;
}
}
break;
}
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (coll,entry){
var this__76615 = this;
return cljs.core.key.call(null,entry);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var this__76616 = this;
return this__76616.comp;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__76617 = this;
if((this__76617.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__76617.tree,true,this__76617.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__76618 = this;
return this__76618.cnt;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__76619 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__76620 = this;
return (new cljs.core.PersistentTreeMap(this__76620.comp,this__76620.tree,this__76620.cnt,meta,this__76620.__hash));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__76621 = this;
return this__76621.meta;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__76622 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentTreeMap.EMPTY,this__76622.meta);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__76623 = this;
var found__76624 = [null];
var t__76625 = cljs.core.tree_map_remove.call(null,this__76623.comp,this__76623.tree,k,found__76624);
if((t__76625 == null))
{if((cljs.core.nth.call(null,found__76624,0) == null))
{return coll;
} else
{return (new cljs.core.PersistentTreeMap(this__76623.comp,null,0,this__76623.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(this__76623.comp,t__76625.blacken(),(this__76623.cnt - 1),this__76623.meta,null));
}
});
cljs.core.PersistentTreeMap;
cljs.core.PersistentTreeMap.EMPTY = (new cljs.core.PersistentTreeMap(cljs.core.compare,null,0,null,0));
/**
* keyval => key val
* Returns a new hash map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.hash_map = (function() { 
var hash_map__delegate = function (keyvals){
var in__76639 = cljs.core.seq.call(null,keyvals);
var out__76640 = cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);
while(true){
if(in__76639)
{{
var G__76641 = cljs.core.nnext.call(null,in__76639);
var G__76642 = cljs.core.assoc_BANG_.call(null,out__76640,cljs.core.first.call(null,in__76639),cljs.core.second.call(null,in__76639));
in__76639 = G__76641;
out__76640 = G__76642;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__76640);
}
break;
}
};
var hash_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return hash_map__delegate.call(this, keyvals);
};
hash_map.cljs$lang$maxFixedArity = 0;
hash_map.cljs$lang$applyTo = (function (arglist__76643){
var keyvals = cljs.core.seq(arglist__76643);;
return hash_map__delegate(keyvals);
});
hash_map.cljs$lang$arity$variadic = hash_map__delegate;
return hash_map;
})()
;
/**
* keyval => key val
* Returns a new array map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.array_map = (function() { 
var array_map__delegate = function (keyvals){
return (new cljs.core.PersistentArrayMap(null,cljs.core.quot.call(null,cljs.core.count.call(null,keyvals),2),cljs.core.apply.call(null,cljs.core.array,keyvals),null));
};
var array_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return array_map__delegate.call(this, keyvals);
};
array_map.cljs$lang$maxFixedArity = 0;
array_map.cljs$lang$applyTo = (function (arglist__76644){
var keyvals = cljs.core.seq(arglist__76644);;
return array_map__delegate(keyvals);
});
array_map.cljs$lang$arity$variadic = array_map__delegate;
return array_map;
})()
;
/**
* keyval => key val
* Returns a new object map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.obj_map = (function() { 
var obj_map__delegate = function (keyvals){
var ks__76648 = [];
var obj__76649 = {};
var kvs__76650 = cljs.core.seq.call(null,keyvals);
while(true){
if(kvs__76650)
{ks__76648.push(cljs.core.first.call(null,kvs__76650));
(obj__76649[cljs.core.first.call(null,kvs__76650)] = cljs.core.second.call(null,kvs__76650));
{
var G__76651 = cljs.core.nnext.call(null,kvs__76650);
kvs__76650 = G__76651;
continue;
}
} else
{return cljs.core.ObjMap.fromObject.call(null,ks__76648,obj__76649);
}
break;
}
};
var obj_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return obj_map__delegate.call(this, keyvals);
};
obj_map.cljs$lang$maxFixedArity = 0;
obj_map.cljs$lang$applyTo = (function (arglist__76652){
var keyvals = cljs.core.seq(arglist__76652);;
return obj_map__delegate(keyvals);
});
obj_map.cljs$lang$arity$variadic = obj_map__delegate;
return obj_map;
})()
;
/**
* keyval => key val
* Returns a new sorted map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.sorted_map = (function() { 
var sorted_map__delegate = function (keyvals){
var in__76655 = cljs.core.seq.call(null,keyvals);
var out__76656 = cljs.core.PersistentTreeMap.EMPTY;
while(true){
if(in__76655)
{{
var G__76657 = cljs.core.nnext.call(null,in__76655);
var G__76658 = cljs.core.assoc.call(null,out__76656,cljs.core.first.call(null,in__76655),cljs.core.second.call(null,in__76655));
in__76655 = G__76657;
out__76656 = G__76658;
continue;
}
} else
{return out__76656;
}
break;
}
};
var sorted_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return sorted_map__delegate.call(this, keyvals);
};
sorted_map.cljs$lang$maxFixedArity = 0;
sorted_map.cljs$lang$applyTo = (function (arglist__76659){
var keyvals = cljs.core.seq(arglist__76659);;
return sorted_map__delegate(keyvals);
});
sorted_map.cljs$lang$arity$variadic = sorted_map__delegate;
return sorted_map;
})()
;
/**
* keyval => key val
* Returns a new sorted map with supplied mappings, using the supplied comparator.
* @param {...*} var_args
*/
cljs.core.sorted_map_by = (function() { 
var sorted_map_by__delegate = function (comparator,keyvals){
var in__76662 = cljs.core.seq.call(null,keyvals);
var out__76663 = (new cljs.core.PersistentTreeMap(comparator,null,0,null,0));
while(true){
if(in__76662)
{{
var G__76664 = cljs.core.nnext.call(null,in__76662);
var G__76665 = cljs.core.assoc.call(null,out__76663,cljs.core.first.call(null,in__76662),cljs.core.second.call(null,in__76662));
in__76662 = G__76664;
out__76663 = G__76665;
continue;
}
} else
{return out__76663;
}
break;
}
};
var sorted_map_by = function (comparator,var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return sorted_map_by__delegate.call(this, comparator, keyvals);
};
sorted_map_by.cljs$lang$maxFixedArity = 1;
sorted_map_by.cljs$lang$applyTo = (function (arglist__76666){
var comparator = cljs.core.first(arglist__76666);
var keyvals = cljs.core.rest(arglist__76666);
return sorted_map_by__delegate(comparator, keyvals);
});
sorted_map_by.cljs$lang$arity$variadic = sorted_map_by__delegate;
return sorted_map_by;
})()
;
/**
* Returns a sequence of the map's keys.
*/
cljs.core.keys = (function keys(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.first,hash_map));
});
/**
* Returns the key of the map entry.
*/
cljs.core.key = (function key(map_entry){
return cljs.core._key.call(null,map_entry);
});
/**
* Returns a sequence of the map's values.
*/
cljs.core.vals = (function vals(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.second,hash_map));
});
/**
* Returns the value in the map entry.
*/
cljs.core.val = (function val(map_entry){
return cljs.core._val.call(null,map_entry);
});
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping from
* the latter (left-to-right) will be the mapping in the result.
* @param {...*} var_args
*/
cljs.core.merge = (function() { 
var merge__delegate = function (maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{return cljs.core.reduce.call(null,(function (p1__76667_SHARP_,p2__76668_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3824__auto____76670 = p1__76667_SHARP_;
if(cljs.core.truth_(or__3824__auto____76670))
{return or__3824__auto____76670;
} else
{return cljs.core.ObjMap.EMPTY;
}
})(),p2__76668_SHARP_);
}),maps);
} else
{return null;
}
};
var merge = function (var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return merge__delegate.call(this, maps);
};
merge.cljs$lang$maxFixedArity = 0;
merge.cljs$lang$applyTo = (function (arglist__76671){
var maps = cljs.core.seq(arglist__76671);;
return merge__delegate(maps);
});
merge.cljs$lang$arity$variadic = merge__delegate;
return merge;
})()
;
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping(s)
* from the latter (left-to-right) will be combined with the mapping in
* the result by calling (f val-in-result val-in-latter).
* @param {...*} var_args
*/
cljs.core.merge_with = (function() { 
var merge_with__delegate = function (f,maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{var merge_entry__76679 = (function (m,e){
var k__76677 = cljs.core.first.call(null,e);
var v__76678 = cljs.core.second.call(null,e);
if(cljs.core.contains_QMARK_.call(null,m,k__76677))
{return cljs.core.assoc.call(null,m,k__76677,f.call(null,cljs.core._lookup.call(null,m,k__76677,null),v__76678));
} else
{return cljs.core.assoc.call(null,m,k__76677,v__76678);
}
});
var merge2__76681 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__76679,(function (){var or__3824__auto____76680 = m1;
if(cljs.core.truth_(or__3824__auto____76680))
{return or__3824__auto____76680;
} else
{return cljs.core.ObjMap.EMPTY;
}
})(),cljs.core.seq.call(null,m2));
});
return cljs.core.reduce.call(null,merge2__76681,maps);
} else
{return null;
}
};
var merge_with = function (f,var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return merge_with__delegate.call(this, f, maps);
};
merge_with.cljs$lang$maxFixedArity = 1;
merge_with.cljs$lang$applyTo = (function (arglist__76682){
var f = cljs.core.first(arglist__76682);
var maps = cljs.core.rest(arglist__76682);
return merge_with__delegate(f, maps);
});
merge_with.cljs$lang$arity$variadic = merge_with__delegate;
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__76687 = cljs.core.ObjMap.EMPTY;
var keys__76688 = cljs.core.seq.call(null,keyseq);
while(true){
if(keys__76688)
{var key__76689 = cljs.core.first.call(null,keys__76688);
var entry__76690 = cljs.core._lookup.call(null,map,key__76689,"\uFDD0'cljs.core/not-found");
{
var G__76691 = ((cljs.core.not_EQ_.call(null,entry__76690,"\uFDD0'cljs.core/not-found"))?cljs.core.assoc.call(null,ret__76687,key__76689,entry__76690):ret__76687);
var G__76692 = cljs.core.next.call(null,keys__76688);
ret__76687 = G__76691;
keys__76688 = G__76692;
continue;
}
} else
{return ret__76687;
}
break;
}
});

goog.provide('cljs.core.PersistentHashSet');

/**
* @constructor
*/
cljs.core.PersistentHashSet = (function (meta,hash_map,__hash){
this.meta = meta;
this.hash_map = hash_map;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 4;
this.cljs$lang$protocol_mask$partition0$ = 15077647;
})
cljs.core.PersistentHashSet.cljs$lang$type = true;
cljs.core.PersistentHashSet.cljs$lang$ctorPrSeq = (function (this__5466__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentHashSet");
});
cljs.core.PersistentHashSet.cljs$lang$ctorPrWriter = (function (this__5466__auto__,writer__5467__auto__){
return cljs.core._write.call(null,writer__5467__auto__,"cljs.core/PersistentHashSet");
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__76696 = this;
return (new cljs.core.TransientHashSet(cljs.core.transient$.call(null,this__76696.hash_map)));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__76697 = this;
var h__5347__auto____76698 = this__76697.__hash;
if(!((h__5347__auto____76698 == null)))
{return h__5347__auto____76698;
} else
{var h__5347__auto____76699 = cljs.core.hash_iset.call(null,coll);
this__76697.__hash = h__5347__auto____76699;
return h__5347__auto____76699;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var this__76700 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,v,null);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var this__76701 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__76701.hash_map,v)))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentHashSet.prototype.call = (function() {
var G__76722 = null;
var G__76722__2 = (function (this_sym76702,k){
var this__76704 = this;
var this_sym76702__76705 = this;
var coll__76706 = this_sym76702__76705;
return coll__76706.cljs$core$ILookup$_lookup$arity$2(coll__76706,k);
});
var G__76722__3 = (function (this_sym76703,k,not_found){
var this__76704 = this;
var this_sym76703__76707 = this;
var coll__76708 = this_sym76703__76707;
return coll__76708.cljs$core$ILookup$_lookup$arity$3(coll__76708,k,not_found);
});
G__76722 = function(this_sym76703,k,not_found){
switch(arguments.length){
case 2:
return G__76722__2.call(this,this_sym76703,k);
case 3:
return G__76722__3.call(this,this_sym76703,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__76722;
})()
;
cljs.core.PersistentHashSet.prototype.apply = (function (this_sym76694,args76695){
var this__76709 = this;
return this_sym76694.call.apply(this_sym76694,[this_sym76694].concat(args76695.slice()));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__76710 = this;
return (new cljs.core.PersistentHashSet(this__76710.meta,cljs.core.assoc.call(null,this__76710.hash_map,o,null),null));
});
cljs.core.PersistentHashSet.prototype.toString = (function (){
var this__76711 = this;
var this__76712 = this;
return cljs.core.pr_str.call(null,this__76712);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__76713 = this;
return cljs.core.keys.call(null,this__76713.hash_map);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var this__76714 = this;
return (new cljs.core.PersistentHashSet(this__76714.meta,cljs.core.dissoc.call(null,this__76714.hash_map,v),null));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__76715 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__76716 = this;
var and__3822__auto____76717 = cljs.core.set_QMARK_.call(null,other);
if(and__3822__auto____76717)
{var and__3822__auto____76718 = (cljs.core.count.call(null,coll) === cljs.core.count.call(null,other));
if(and__3822__auto____76718)
{return cljs.core.every_QMARK_.call(null,(function (p1__76693_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__76693_SHARP_);
}),other);
} else
{return and__3822__auto____76718;
}
} else
{return and__3822__auto____76717;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__76719 = this;
return (new cljs.core.PersistentHashSet(meta,this__76719.hash_map,this__76719.__hash));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__76720 = this;
return this__76720.meta;
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__76721 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentHashSet.EMPTY,this__76721.meta);
});
cljs.core.PersistentHashSet;
cljs.core.PersistentHashSet.EMPTY = (new cljs.core.PersistentHashSet(null,cljs.core.hash_map.call(null),0));
cljs.core.PersistentHashSet.fromArray = (function (items){
var len__76723 = cljs.core.count.call(null,items);
var i__76724 = 0;
var out__76725 = cljs.core.transient$.call(null,cljs.core.PersistentHashSet.EMPTY);
while(true){
if((i__76724 < len__76723))
{{
var G__76726 = (i__76724 + 1);
var G__76727 = cljs.core.conj_BANG_.call(null,out__76725,(items[i__76724]));
i__76724 = G__76726;
out__76725 = G__76727;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__76725);
}
break;
}
});

goog.provide('cljs.core.TransientHashSet');

/**
* @constructor
*/
cljs.core.TransientHashSet = (function (transient_map){
this.transient_map = transient_map;
this.cljs$lang$protocol_mask$partition0$ = 259;
this.cljs$lang$protocol_mask$partition1$ = 136;
})
cljs.core.TransientHashSet.cljs$lang$type = true;
cljs.core.TransientHashSet.cljs$lang$ctorPrSeq = (function (this__5466__auto__){
return cljs.core.list.call(null,"cljs.core/TransientHashSet");
});
cljs.core.TransientHashSet.cljs$lang$ctorPrWriter = (function (this__5466__auto__,writer__5467__auto__){
return cljs.core._write.call(null,writer__5467__auto__,"cljs.core/TransientHashSet");
});
cljs.core.TransientHashSet.prototype.call = (function() {
var G__76745 = null;
var G__76745__2 = (function (this_sym76731,k){
var this__76733 = this;
var this_sym76731__76734 = this;
var tcoll__76735 = this_sym76731__76734;
if((cljs.core._lookup.call(null,this__76733.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return null;
} else
{return k;
}
});
var G__76745__3 = (function (this_sym76732,k,not_found){
var this__76733 = this;
var this_sym76732__76736 = this;
var tcoll__76737 = this_sym76732__76736;
if((cljs.core._lookup.call(null,this__76733.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return k;
}
});
G__76745 = function(this_sym76732,k,not_found){
switch(arguments.length){
case 2:
return G__76745__2.call(this,this_sym76732,k);
case 3:
return G__76745__3.call(this,this_sym76732,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__76745;
})()
;
cljs.core.TransientHashSet.prototype.apply = (function (this_sym76729,args76730){
var this__76738 = this;
return this_sym76729.call.apply(this_sym76729,[this_sym76729].concat(args76730.slice()));
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,v){
var this__76739 = this;
return tcoll.cljs$core$ILookup$_lookup$arity$3(tcoll,v,null);
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,v,not_found){
var this__76740 = this;
if((cljs.core._lookup.call(null,this__76740.transient_map,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return v;
}
});
cljs.core.TransientHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var this__76741 = this;
return cljs.core.count.call(null,this__76741.transient_map);
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientSet$_disjoin_BANG_$arity$2 = (function (tcoll,v){
var this__76742 = this;
this__76742.transient_map = cljs.core.dissoc_BANG_.call(null,this__76742.transient_map,v);
return tcoll;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__76743 = this;
this__76743.transient_map = cljs.core.assoc_BANG_.call(null,this__76743.transient_map,o,null);
return tcoll;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__76744 = this;
return (new cljs.core.PersistentHashSet(null,cljs.core.persistent_BANG_.call(null,this__76744.transient_map),null));
});
cljs.core.TransientHashSet;

goog.provide('cljs.core.PersistentTreeSet');

/**
* @constructor
*/
cljs.core.PersistentTreeSet = (function (meta,tree_map,__hash){
this.meta = meta;
this.tree_map = tree_map;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 417730831;
})
cljs.core.PersistentTreeSet.cljs$lang$type = true;
cljs.core.PersistentTreeSet.cljs$lang$ctorPrSeq = (function (this__5466__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentTreeSet");
});
cljs.core.PersistentTreeSet.cljs$lang$ctorPrWriter = (function (this__5466__auto__,writer__5467__auto__){
return cljs.core._write.call(null,writer__5467__auto__,"cljs.core/PersistentTreeSet");
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__76748 = this;
var h__5347__auto____76749 = this__76748.__hash;
if(!((h__5347__auto____76749 == null)))
{return h__5347__auto____76749;
} else
{var h__5347__auto____76750 = cljs.core.hash_iset.call(null,coll);
this__76748.__hash = h__5347__auto____76750;
return h__5347__auto____76750;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var this__76751 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,v,null);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var this__76752 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__76752.tree_map,v)))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentTreeSet.prototype.call = (function() {
var G__76778 = null;
var G__76778__2 = (function (this_sym76753,k){
var this__76755 = this;
var this_sym76753__76756 = this;
var coll__76757 = this_sym76753__76756;
return coll__76757.cljs$core$ILookup$_lookup$arity$2(coll__76757,k);
});
var G__76778__3 = (function (this_sym76754,k,not_found){
var this__76755 = this;
var this_sym76754__76758 = this;
var coll__76759 = this_sym76754__76758;
return coll__76759.cljs$core$ILookup$_lookup$arity$3(coll__76759,k,not_found);
});
G__76778 = function(this_sym76754,k,not_found){
switch(arguments.length){
case 2:
return G__76778__2.call(this,this_sym76754,k);
case 3:
return G__76778__3.call(this,this_sym76754,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__76778;
})()
;
cljs.core.PersistentTreeSet.prototype.apply = (function (this_sym76746,args76747){
var this__76760 = this;
return this_sym76746.call.apply(this_sym76746,[this_sym76746].concat(args76747.slice()));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__76761 = this;
return (new cljs.core.PersistentTreeSet(this__76761.meta,cljs.core.assoc.call(null,this__76761.tree_map,o,null),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__76762 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core.rseq.call(null,this__76762.tree_map));
});
cljs.core.PersistentTreeSet.prototype.toString = (function (){
var this__76763 = this;
var this__76764 = this;
return cljs.core.pr_str.call(null,this__76764);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (coll,ascending_QMARK_){
var this__76765 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core._sorted_seq.call(null,this__76765.tree_map,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var this__76766 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core._sorted_seq_from.call(null,this__76766.tree_map,k,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (coll,entry){
var this__76767 = this;
return entry;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var this__76768 = this;
return cljs.core._comparator.call(null,this__76768.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__76769 = this;
return cljs.core.keys.call(null,this__76769.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var this__76770 = this;
return (new cljs.core.PersistentTreeSet(this__76770.meta,cljs.core.dissoc.call(null,this__76770.tree_map,v),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__76771 = this;
return cljs.core.count.call(null,this__76771.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__76772 = this;
var and__3822__auto____76773 = cljs.core.set_QMARK_.call(null,other);
if(and__3822__auto____76773)
{var and__3822__auto____76774 = (cljs.core.count.call(null,coll) === cljs.core.count.call(null,other));
if(and__3822__auto____76774)
{return cljs.core.every_QMARK_.call(null,(function (p1__76728_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__76728_SHARP_);
}),other);
} else
{return and__3822__auto____76774;
}
} else
{return and__3822__auto____76773;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__76775 = this;
return (new cljs.core.PersistentTreeSet(meta,this__76775.tree_map,this__76775.__hash));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__76776 = this;
return this__76776.meta;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__76777 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentTreeSet.EMPTY,this__76777.meta);
});
cljs.core.PersistentTreeSet;
cljs.core.PersistentTreeSet.EMPTY = (new cljs.core.PersistentTreeSet(null,cljs.core.sorted_map.call(null),0));
/**
* @param {...*} var_args
*/
cljs.core.hash_set = (function() {
var hash_set = null;
var hash_set__0 = (function (){
return cljs.core.PersistentHashSet.EMPTY;
});
var hash_set__1 = (function() { 
var G__76783__delegate = function (keys){
var in__76781 = cljs.core.seq.call(null,keys);
var out__76782 = cljs.core.transient$.call(null,cljs.core.PersistentHashSet.EMPTY);
while(true){
if(cljs.core.seq.call(null,in__76781))
{{
var G__76784 = cljs.core.next.call(null,in__76781);
var G__76785 = cljs.core.conj_BANG_.call(null,out__76782,cljs.core.first.call(null,in__76781));
in__76781 = G__76784;
out__76782 = G__76785;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__76782);
}
break;
}
};
var G__76783 = function (var_args){
var keys = null;
if (goog.isDef(var_args)) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__76783__delegate.call(this, keys);
};
G__76783.cljs$lang$maxFixedArity = 0;
G__76783.cljs$lang$applyTo = (function (arglist__76786){
var keys = cljs.core.seq(arglist__76786);;
return G__76783__delegate(keys);
});
G__76783.cljs$lang$arity$variadic = G__76783__delegate;
return G__76783;
})()
;
hash_set = function(var_args){
var keys = var_args;
switch(arguments.length){
case 0:
return hash_set__0.call(this);
default:
return hash_set__1.cljs$lang$arity$variadic(cljs.core.array_seq(arguments, 0));
}
throw('Invalid arity: ' + arguments.length);
};
hash_set.cljs$lang$maxFixedArity = 0;
hash_set.cljs$lang$applyTo = hash_set__1.cljs$lang$applyTo;
hash_set.cljs$lang$arity$0 = hash_set__0;
hash_set.cljs$lang$arity$variadic = hash_set__1.cljs$lang$arity$variadic;
return hash_set;
})()
;
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
return cljs.core.apply.call(null,cljs.core.hash_set,coll);
});
/**
* Returns a new sorted set with supplied keys.
* @param {...*} var_args
*/
cljs.core.sorted_set = (function() { 
var sorted_set__delegate = function (keys){
return cljs.core.reduce.call(null,cljs.core._conj,cljs.core.PersistentTreeSet.EMPTY,keys);
};
var sorted_set = function (var_args){
var keys = null;
if (goog.isDef(var_args)) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return sorted_set__delegate.call(this, keys);
};
sorted_set.cljs$lang$maxFixedArity = 0;
sorted_set.cljs$lang$applyTo = (function (arglist__76787){
var keys = cljs.core.seq(arglist__76787);;
return sorted_set__delegate(keys);
});
sorted_set.cljs$lang$arity$variadic = sorted_set__delegate;
return sorted_set;
})()
;
/**
* Returns a new sorted set with supplied keys, using the supplied comparator.
* @param {...*} var_args
*/
cljs.core.sorted_set_by = (function() { 
var sorted_set_by__delegate = function (comparator,keys){
return cljs.core.reduce.call(null,cljs.core._conj,(new cljs.core.PersistentTreeSet(null,cljs.core.sorted_map_by.call(null,comparator),0)),keys);
};
var sorted_set_by = function (comparator,var_args){
var keys = null;
if (goog.isDef(var_args)) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return sorted_set_by__delegate.call(this, comparator, keys);
};
sorted_set_by.cljs$lang$maxFixedArity = 1;
sorted_set_by.cljs$lang$applyTo = (function (arglist__76789){
var comparator = cljs.core.first(arglist__76789);
var keys = cljs.core.rest(arglist__76789);
return sorted_set_by__delegate(comparator, keys);
});
sorted_set_by.cljs$lang$arity$variadic = sorted_set_by__delegate;
return sorted_set_by;
})()
;
/**
* Given a map of replacement pairs and a vector/collection, returns a
* vector/seq with any elements = a key in smap replaced with the
* corresponding val in smap
*/
cljs.core.replace = (function replace(smap,coll){
if(cljs.core.vector_QMARK_.call(null,coll))
{var n__76795 = cljs.core.count.call(null,coll);
return cljs.core.reduce.call(null,(function (v,i){
var temp__3971__auto____76796 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));
if(cljs.core.truth_(temp__3971__auto____76796))
{var e__76797 = temp__3971__auto____76796;
return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__76797));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__76795,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__76788_SHARP_){
var temp__3971__auto____76798 = cljs.core.find.call(null,smap,p1__76788_SHARP_);
if(cljs.core.truth_(temp__3971__auto____76798))
{var e__76799 = temp__3971__auto____76798;
return cljs.core.second.call(null,e__76799);
} else
{return p1__76788_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__76829 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__76822,seen){
while(true){
var vec__76823__76824 = p__76822;
var f__76825 = cljs.core.nth.call(null,vec__76823__76824,0,null);
var xs__76826 = vec__76823__76824;
var temp__3974__auto____76827 = cljs.core.seq.call(null,xs__76826);
if(temp__3974__auto____76827)
{var s__76828 = temp__3974__auto____76827;
if(cljs.core.contains_QMARK_.call(null,seen,f__76825))
{{
var G__76830 = cljs.core.rest.call(null,s__76828);
var G__76831 = seen;
p__76822 = G__76830;
seen = G__76831;
continue;
}
} else
{return cljs.core.cons.call(null,f__76825,step.call(null,cljs.core.rest.call(null,s__76828),cljs.core.conj.call(null,seen,f__76825)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
}),null));
});
return step__76829.call(null,coll,cljs.core.PersistentHashSet.EMPTY);
});
cljs.core.butlast = (function butlast(s){
var ret__76834 = cljs.core.PersistentVector.EMPTY;
var s__76835 = s;
while(true){
if(cljs.core.next.call(null,s__76835))
{{
var G__76836 = cljs.core.conj.call(null,ret__76834,cljs.core.first.call(null,s__76835));
var G__76837 = cljs.core.next.call(null,s__76835);
ret__76834 = G__76836;
s__76835 = G__76837;
continue;
}
} else
{return cljs.core.seq.call(null,ret__76834);
}
break;
}
});
/**
* Returns the name String of a string, symbol or keyword.
*/
cljs.core.name = (function name(x){
if(cljs.core.string_QMARK_.call(null,x))
{return x;
} else
{if((function (){var or__3824__auto____76840 = cljs.core.keyword_QMARK_.call(null,x);
if(or__3824__auto____76840)
{return or__3824__auto____76840;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{var i__76841 = x.lastIndexOf("/");
if((i__76841 < 0))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__76841 + 1));
}
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Doesn't support name: "),cljs.core.str(x)].join('')));
} else
{return null;
}
}
}
});
/**
* Returns the namespace String of a symbol or keyword, or nil if not present.
*/
cljs.core.namespace = (function namespace(x){
if((function (){var or__3824__auto____76844 = cljs.core.keyword_QMARK_.call(null,x);
if(or__3824__auto____76844)
{return or__3824__auto____76844;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{var i__76845 = x.lastIndexOf("/");
if((i__76845 > -1))
{return cljs.core.subs.call(null,x,2,i__76845);
} else
{return null;
}
} else
{throw (new Error([cljs.core.str("Doesn't support namespace: "),cljs.core.str(x)].join('')));
}
});
/**
* Returns a map with the keys mapped to the corresponding vals.
*/
cljs.core.zipmap = (function zipmap(keys,vals){
var map__76852 = cljs.core.ObjMap.EMPTY;
var ks__76853 = cljs.core.seq.call(null,keys);
var vs__76854 = cljs.core.seq.call(null,vals);
while(true){
if((function (){var and__3822__auto____76855 = ks__76853;
if(and__3822__auto____76855)
{return vs__76854;
} else
{return and__3822__auto____76855;
}
})())
{{
var G__76856 = cljs.core.assoc.call(null,map__76852,cljs.core.first.call(null,ks__76853),cljs.core.first.call(null,vs__76854));
var G__76857 = cljs.core.next.call(null,ks__76853);
var G__76858 = cljs.core.next.call(null,vs__76854);
map__76852 = G__76856;
ks__76853 = G__76857;
vs__76854 = G__76858;
continue;
}
} else
{return map__76852;
}
break;
}
});
/**
* Returns the x for which (k x), a number, is greatest.
* @param {...*} var_args
*/
cljs.core.max_key = (function() {
var max_key = null;
var max_key__2 = (function (k,x){
return x;
});
var max_key__3 = (function (k,x,y){
if((k.call(null,x) > k.call(null,y)))
{return x;
} else
{return y;
}
});
var max_key__4 = (function() { 
var G__76861__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__76846_SHARP_,p2__76847_SHARP_){
return max_key.call(null,k,p1__76846_SHARP_,p2__76847_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__76861 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__76861__delegate.call(this, k, x, y, more);
};
G__76861.cljs$lang$maxFixedArity = 3;
G__76861.cljs$lang$applyTo = (function (arglist__76862){
var k = cljs.core.first(arglist__76862);
var x = cljs.core.first(cljs.core.next(arglist__76862));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__76862)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__76862)));
return G__76861__delegate(k, x, y, more);
});
G__76861.cljs$lang$arity$variadic = G__76861__delegate;
return G__76861;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return max_key__2.call(this,k,x);
case 3:
return max_key__3.call(this,k,x,y);
default:
return max_key__4.cljs$lang$arity$variadic(k,x,y, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__4.cljs$lang$applyTo;
max_key.cljs$lang$arity$2 = max_key__2;
max_key.cljs$lang$arity$3 = max_key__3;
max_key.cljs$lang$arity$variadic = max_key__4.cljs$lang$arity$variadic;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__2 = (function (k,x){
return x;
});
var min_key__3 = (function (k,x,y){
if((k.call(null,x) < k.call(null,y)))
{return x;
} else
{return y;
}
});
var min_key__4 = (function() { 
var G__76863__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__76859_SHARP_,p2__76860_SHARP_){
return min_key.call(null,k,p1__76859_SHARP_,p2__76860_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__76863 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__76863__delegate.call(this, k, x, y, more);
};
G__76863.cljs$lang$maxFixedArity = 3;
G__76863.cljs$lang$applyTo = (function (arglist__76864){
var k = cljs.core.first(arglist__76864);
var x = cljs.core.first(cljs.core.next(arglist__76864));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__76864)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__76864)));
return G__76863__delegate(k, x, y, more);
});
G__76863.cljs$lang$arity$variadic = G__76863__delegate;
return G__76863;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return min_key__2.call(this,k,x);
case 3:
return min_key__3.call(this,k,x,y);
default:
return min_key__4.cljs$lang$arity$variadic(k,x,y, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__4.cljs$lang$applyTo;
min_key.cljs$lang$arity$2 = min_key__2;
min_key.cljs$lang$arity$3 = min_key__3;
min_key.cljs$lang$arity$variadic = min_key__4.cljs$lang$arity$variadic;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__2 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__3 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____76867 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____76867)
{var s__76868 = temp__3974__auto____76867;
return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__76868),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__76868)));
} else
{return null;
}
}),null));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case 2:
return partition_all__2.call(this,n,step);
case 3:
return partition_all__3.call(this,n,step,coll);
}
throw('Invalid arity: ' + arguments.length);
};
partition_all.cljs$lang$arity$2 = partition_all__2;
partition_all.cljs$lang$arity$3 = partition_all__3;
return partition_all;
})()
;
/**
* Returns a lazy sequence of successive items from coll while
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.take_while = (function take_while(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____76871 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____76871)
{var s__76872 = temp__3974__auto____76871;
if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__76872))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__76872),take_while.call(null,pred,cljs.core.rest.call(null,s__76872)));
} else
{return null;
}
} else
{return null;
}
}),null));
});
cljs.core.mk_bound_fn = (function mk_bound_fn(sc,test,key){
return (function (e){
var comp__76874 = cljs.core._comparator.call(null,sc);
return test.call(null,comp__76874.call(null,cljs.core._entry_key.call(null,sc,e),key),0);
});
});
/**
* sc must be a sorted collection, test(s) one of <, <=, > or
* >=. Returns a seq of those entries with keys ek for
* which (test (.. sc comparator (compare ek key)) 0) is true
*/
cljs.core.subseq = (function() {
var subseq = null;
var subseq__3 = (function (sc,test,key){
var include__76886 = cljs.core.mk_bound_fn.call(null,sc,test,key);
if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([cljs.core._GT_,cljs.core._GT__EQ_]).call(null,test)))
{var temp__3974__auto____76887 = cljs.core._sorted_seq_from.call(null,sc,key,true);
if(cljs.core.truth_(temp__3974__auto____76887))
{var vec__76888__76889 = temp__3974__auto____76887;
var e__76890 = cljs.core.nth.call(null,vec__76888__76889,0,null);
var s__76891 = vec__76888__76889;
if(cljs.core.truth_(include__76886.call(null,e__76890)))
{return s__76891;
} else
{return cljs.core.next.call(null,s__76891);
}
} else
{return null;
}
} else
{return cljs.core.take_while.call(null,include__76886,cljs.core._sorted_seq.call(null,sc,true));
}
});
var subseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__3974__auto____76892 = cljs.core._sorted_seq_from.call(null,sc,start_key,true);
if(cljs.core.truth_(temp__3974__auto____76892))
{var vec__76893__76894 = temp__3974__auto____76892;
var e__76895 = cljs.core.nth.call(null,vec__76893__76894,0,null);
var s__76896 = vec__76893__76894;
return cljs.core.take_while.call(null,cljs.core.mk_bound_fn.call(null,sc,end_test,end_key),(cljs.core.truth_(cljs.core.mk_bound_fn.call(null,sc,start_test,start_key).call(null,e__76895))?s__76896:cljs.core.next.call(null,s__76896)));
} else
{return null;
}
});
subseq = function(sc,start_test,start_key,end_test,end_key){
switch(arguments.length){
case 3:
return subseq__3.call(this,sc,start_test,start_key);
case 5:
return subseq__5.call(this,sc,start_test,start_key,end_test,end_key);
}
throw('Invalid arity: ' + arguments.length);
};
subseq.cljs$lang$arity$3 = subseq__3;
subseq.cljs$lang$arity$5 = subseq__5;
return subseq;
})()
;
/**
* sc must be a sorted collection, test(s) one of <, <=, > or
* >=. Returns a reverse seq of those entries with keys ek for
* which (test (.. sc comparator (compare ek key)) 0) is true
*/
cljs.core.rsubseq = (function() {
var rsubseq = null;
var rsubseq__3 = (function (sc,test,key){
var include__76908 = cljs.core.mk_bound_fn.call(null,sc,test,key);
if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([cljs.core._LT_,cljs.core._LT__EQ_]).call(null,test)))
{var temp__3974__auto____76909 = cljs.core._sorted_seq_from.call(null,sc,key,false);
if(cljs.core.truth_(temp__3974__auto____76909))
{var vec__76910__76911 = temp__3974__auto____76909;
var e__76912 = cljs.core.nth.call(null,vec__76910__76911,0,null);
var s__76913 = vec__76910__76911;
if(cljs.core.truth_(include__76908.call(null,e__76912)))
{return s__76913;
} else
{return cljs.core.next.call(null,s__76913);
}
} else
{return null;
}
} else
{return cljs.core.take_while.call(null,include__76908,cljs.core._sorted_seq.call(null,sc,false));
}
});
var rsubseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__3974__auto____76914 = cljs.core._sorted_seq_from.call(null,sc,end_key,false);
if(cljs.core.truth_(temp__3974__auto____76914))
{var vec__76915__76916 = temp__3974__auto____76914;
var e__76917 = cljs.core.nth.call(null,vec__76915__76916,0,null);
var s__76918 = vec__76915__76916;
return cljs.core.take_while.call(null,cljs.core.mk_bound_fn.call(null,sc,start_test,start_key),(cljs.core.truth_(cljs.core.mk_bound_fn.call(null,sc,end_test,end_key).call(null,e__76917))?s__76918:cljs.core.next.call(null,s__76918)));
} else
{return null;
}
});
rsubseq = function(sc,start_test,start_key,end_test,end_key){
switch(arguments.length){
case 3:
return rsubseq__3.call(this,sc,start_test,start_key);
case 5:
return rsubseq__5.call(this,sc,start_test,start_key,end_test,end_key);
}
throw('Invalid arity: ' + arguments.length);
};
rsubseq.cljs$lang$arity$3 = rsubseq__3;
rsubseq.cljs$lang$arity$5 = rsubseq__5;
return rsubseq;
})()
;

goog.provide('cljs.core.Range');

/**
* @constructor
*/
cljs.core.Range = (function (meta,start,end,step,__hash){
this.meta = meta;
this.start = start;
this.end = end;
this.step = step;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32375006;
})
cljs.core.Range.cljs$lang$type = true;
cljs.core.Range.cljs$lang$ctorPrSeq = (function (this__5466__auto__){
return cljs.core.list.call(null,"cljs.core/Range");
});
cljs.core.Range.cljs$lang$ctorPrWriter = (function (this__5466__auto__,writer__5467__auto__){
return cljs.core._write.call(null,writer__5467__auto__,"cljs.core/Range");
});
cljs.core.Range.prototype.cljs$core$IHash$_hash$arity$1 = (function (rng){
var this__76919 = this;
var h__5347__auto____76920 = this__76919.__hash;
if(!((h__5347__auto____76920 == null)))
{return h__5347__auto____76920;
} else
{var h__5347__auto____76921 = cljs.core.hash_coll.call(null,rng);
this__76919.__hash = h__5347__auto____76921;
return h__5347__auto____76921;
}
});
cljs.core.Range.prototype.cljs$core$INext$_next$arity$1 = (function (rng){
var this__76922 = this;
if((this__76922.step > 0))
{if(((this__76922.start + this__76922.step) < this__76922.end))
{return (new cljs.core.Range(this__76922.meta,(this__76922.start + this__76922.step),this__76922.end,this__76922.step,null));
} else
{return null;
}
} else
{if(((this__76922.start + this__76922.step) > this__76922.end))
{return (new cljs.core.Range(this__76922.meta,(this__76922.start + this__76922.step),this__76922.end,this__76922.step,null));
} else
{return null;
}
}
});
cljs.core.Range.prototype.cljs$core$ICollection$_conj$arity$2 = (function (rng,o){
var this__76923 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.toString = (function (){
var this__76924 = this;
var this__76925 = this;
return cljs.core.pr_str.call(null,this__76925);
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (rng,f){
var this__76926 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (rng,f,s){
var this__76927 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
cljs.core.Range.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (rng){
var this__76928 = this;
if((this__76928.step > 0))
{if((this__76928.start < this__76928.end))
{return rng;
} else
{return null;
}
} else
{if((this__76928.start > this__76928.end))
{return rng;
} else
{return null;
}
}
});
cljs.core.Range.prototype.cljs$core$ICounted$_count$arity$1 = (function (rng){
var this__76929 = this;
if(cljs.core.not.call(null,rng.cljs$core$ISeqable$_seq$arity$1(rng)))
{return 0;
} else
{return Math.ceil(((this__76929.end - this__76929.start) / this__76929.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$_first$arity$1 = (function (rng){
var this__76930 = this;
return this__76930.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest$arity$1 = (function (rng){
var this__76931 = this;
if(!((rng.cljs$core$ISeqable$_seq$arity$1(rng) == null)))
{return (new cljs.core.Range(this__76931.meta,(this__76931.start + this__76931.step),this__76931.end,this__76931.step,null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (rng,other){
var this__76932 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (rng,meta){
var this__76933 = this;
return (new cljs.core.Range(meta,this__76933.start,this__76933.end,this__76933.step,this__76933.__hash));
});
cljs.core.Range.prototype.cljs$core$IMeta$_meta$arity$1 = (function (rng){
var this__76934 = this;
return this__76934.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (rng,n){
var this__76935 = this;
if((n < rng.cljs$core$ICounted$_count$arity$1(rng)))
{return (this__76935.start + (n * this__76935.step));
} else
{if((function (){var and__3822__auto____76936 = (this__76935.start > this__76935.end);
if(and__3822__auto____76936)
{return (this__76935.step === 0);
} else
{return and__3822__auto____76936;
}
})())
{return this__76935.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (rng,n,not_found){
var this__76937 = this;
if((n < rng.cljs$core$ICounted$_count$arity$1(rng)))
{return (this__76937.start + (n * this__76937.step));
} else
{if((function (){var and__3822__auto____76938 = (this__76937.start > this__76937.end);
if(and__3822__auto____76938)
{return (this__76937.step === 0);
} else
{return and__3822__auto____76938;
}
})())
{return this__76937.start;
} else
{return not_found;
}
}
});
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (rng){
var this__76939 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__76939.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__0 = (function (){
return range.call(null,0,Number.MAX_VALUE,1);
});
var range__1 = (function (end){
return range.call(null,0,end,1);
});
var range__2 = (function (start,end){
return range.call(null,start,end,1);
});
var range__3 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step,null));
});
range = function(start,end,step){
switch(arguments.length){
case 0:
return range__0.call(this);
case 1:
return range__1.call(this,start);
case 2:
return range__2.call(this,start,end);
case 3:
return range__3.call(this,start,end,step);
}
throw('Invalid arity: ' + arguments.length);
};
range.cljs$lang$arity$0 = range__0;
range.cljs$lang$arity$1 = range__1;
range.cljs$lang$arity$2 = range__2;
range.cljs$lang$arity$3 = range__3;
return range;
})()
;
/**
* Returns a lazy seq of every nth item in coll.
*/
cljs.core.take_nth = (function take_nth(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____76942 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____76942)
{var s__76943 = temp__3974__auto____76942;
return cljs.core.cons.call(null,cljs.core.first.call(null,s__76943),take_nth.call(null,n,cljs.core.drop.call(null,n,s__76943)));
} else
{return null;
}
}),null));
});
/**
* Returns a vector of [(take-while pred coll) (drop-while pred coll)]
*/
cljs.core.split_with = (function split_with(pred,coll){
return cljs.core.PersistentVector.fromArray([cljs.core.take_while.call(null,pred,coll),cljs.core.drop_while.call(null,pred,coll)], true);
});
/**
* Applies f to each value in coll, splitting it each time f returns
* a new value.  Returns a lazy seq of partitions.
*/
cljs.core.partition_by = (function partition_by(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____76950 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____76950)
{var s__76951 = temp__3974__auto____76950;
var fst__76952 = cljs.core.first.call(null,s__76951);
var fv__76953 = f.call(null,fst__76952);
var run__76954 = cljs.core.cons.call(null,fst__76952,cljs.core.take_while.call(null,(function (p1__76944_SHARP_){
return cljs.core._EQ_.call(null,fv__76953,f.call(null,p1__76944_SHARP_));
}),cljs.core.next.call(null,s__76951)));
return cljs.core.cons.call(null,run__76954,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__76954),s__76951))));
} else
{return null;
}
}),null));
});
/**
* Returns a map from distinct items in coll to the number of times
* they appear.
*/
cljs.core.frequencies = (function frequencies(coll){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (counts,x){
return cljs.core.assoc_BANG_.call(null,counts,x,(cljs.core._lookup.call(null,counts,x,0) + 1));
}),cljs.core.transient$.call(null,cljs.core.ObjMap.EMPTY),coll));
});
/**
* Returns a lazy seq of the intermediate values of the reduction (as
* per reduce) of coll by f, starting with init.
*/
cljs.core.reductions = (function() {
var reductions = null;
var reductions__2 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3971__auto____76969 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____76969)
{var s__76970 = temp__3971__auto____76969;
return reductions.call(null,f,cljs.core.first.call(null,s__76970),cljs.core.rest.call(null,s__76970));
} else
{return cljs.core.list.call(null,f.call(null));
}
}),null));
});
var reductions__3 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____76971 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____76971)
{var s__76972 = temp__3974__auto____76971;
return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__76972)),cljs.core.rest.call(null,s__76972));
} else
{return null;
}
}),null)));
});
reductions = function(f,init,coll){
switch(arguments.length){
case 2:
return reductions__2.call(this,f,init);
case 3:
return reductions__3.call(this,f,init,coll);
}
throw('Invalid arity: ' + arguments.length);
};
reductions.cljs$lang$arity$2 = reductions__2;
reductions.cljs$lang$arity$3 = reductions__3;
return reductions;
})()
;
/**
* Takes a set of functions and returns a fn that is the juxtaposition
* of those fns.  The returned fn takes a variable number of args, and
* returns a vector containing the result of applying each fn to the
* args (left-to-right).
* ((juxt a b c) x) => [(a x) (b x) (c x)]
* @param {...*} var_args
*/
cljs.core.juxt = (function() {
var juxt = null;
var juxt__1 = (function (f){
return (function() {
var G__76975 = null;
var G__76975__0 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__76975__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__76975__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__76975__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__76975__4 = (function() { 
var G__76976__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__76976 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__76976__delegate.call(this, x, y, z, args);
};
G__76976.cljs$lang$maxFixedArity = 3;
G__76976.cljs$lang$applyTo = (function (arglist__76977){
var x = cljs.core.first(arglist__76977);
var y = cljs.core.first(cljs.core.next(arglist__76977));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__76977)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__76977)));
return G__76976__delegate(x, y, z, args);
});
G__76976.cljs$lang$arity$variadic = G__76976__delegate;
return G__76976;
})()
;
G__76975 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__76975__0.call(this);
case 1:
return G__76975__1.call(this,x);
case 2:
return G__76975__2.call(this,x,y);
case 3:
return G__76975__3.call(this,x,y,z);
default:
return G__76975__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__76975.cljs$lang$maxFixedArity = 3;
G__76975.cljs$lang$applyTo = G__76975__4.cljs$lang$applyTo;
return G__76975;
})()
});
var juxt__2 = (function (f,g){
return (function() {
var G__76978 = null;
var G__76978__0 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__76978__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__76978__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__76978__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__76978__4 = (function() { 
var G__76979__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__76979 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__76979__delegate.call(this, x, y, z, args);
};
G__76979.cljs$lang$maxFixedArity = 3;
G__76979.cljs$lang$applyTo = (function (arglist__76980){
var x = cljs.core.first(arglist__76980);
var y = cljs.core.first(cljs.core.next(arglist__76980));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__76980)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__76980)));
return G__76979__delegate(x, y, z, args);
});
G__76979.cljs$lang$arity$variadic = G__76979__delegate;
return G__76979;
})()
;
G__76978 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__76978__0.call(this);
case 1:
return G__76978__1.call(this,x);
case 2:
return G__76978__2.call(this,x,y);
case 3:
return G__76978__3.call(this,x,y,z);
default:
return G__76978__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__76978.cljs$lang$maxFixedArity = 3;
G__76978.cljs$lang$applyTo = G__76978__4.cljs$lang$applyTo;
return G__76978;
})()
});
var juxt__3 = (function (f,g,h){
return (function() {
var G__76981 = null;
var G__76981__0 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__76981__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__76981__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__76981__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__76981__4 = (function() { 
var G__76982__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__76982 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__76982__delegate.call(this, x, y, z, args);
};
G__76982.cljs$lang$maxFixedArity = 3;
G__76982.cljs$lang$applyTo = (function (arglist__76983){
var x = cljs.core.first(arglist__76983);
var y = cljs.core.first(cljs.core.next(arglist__76983));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__76983)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__76983)));
return G__76982__delegate(x, y, z, args);
});
G__76982.cljs$lang$arity$variadic = G__76982__delegate;
return G__76982;
})()
;
G__76981 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__76981__0.call(this);
case 1:
return G__76981__1.call(this,x);
case 2:
return G__76981__2.call(this,x,y);
case 3:
return G__76981__3.call(this,x,y,z);
default:
return G__76981__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__76981.cljs$lang$maxFixedArity = 3;
G__76981.cljs$lang$applyTo = G__76981__4.cljs$lang$applyTo;
return G__76981;
})()
});
var juxt__4 = (function() { 
var G__76984__delegate = function (f,g,h,fs){
var fs__76974 = cljs.core.list_STAR_.call(null,f,g,h,fs);
return (function() {
var G__76985 = null;
var G__76985__0 = (function (){
return cljs.core.reduce.call(null,(function (p1__76955_SHARP_,p2__76956_SHARP_){
return cljs.core.conj.call(null,p1__76955_SHARP_,p2__76956_SHARP_.call(null));
}),cljs.core.PersistentVector.EMPTY,fs__76974);
});
var G__76985__1 = (function (x){
return cljs.core.reduce.call(null,(function (p1__76957_SHARP_,p2__76958_SHARP_){
return cljs.core.conj.call(null,p1__76957_SHARP_,p2__76958_SHARP_.call(null,x));
}),cljs.core.PersistentVector.EMPTY,fs__76974);
});
var G__76985__2 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__76959_SHARP_,p2__76960_SHARP_){
return cljs.core.conj.call(null,p1__76959_SHARP_,p2__76960_SHARP_.call(null,x,y));
}),cljs.core.PersistentVector.EMPTY,fs__76974);
});
var G__76985__3 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__76961_SHARP_,p2__76962_SHARP_){
return cljs.core.conj.call(null,p1__76961_SHARP_,p2__76962_SHARP_.call(null,x,y,z));
}),cljs.core.PersistentVector.EMPTY,fs__76974);
});
var G__76985__4 = (function() { 
var G__76986__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__76963_SHARP_,p2__76964_SHARP_){
return cljs.core.conj.call(null,p1__76963_SHARP_,cljs.core.apply.call(null,p2__76964_SHARP_,x,y,z,args));
}),cljs.core.PersistentVector.EMPTY,fs__76974);
};
var G__76986 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__76986__delegate.call(this, x, y, z, args);
};
G__76986.cljs$lang$maxFixedArity = 3;
G__76986.cljs$lang$applyTo = (function (arglist__76987){
var x = cljs.core.first(arglist__76987);
var y = cljs.core.first(cljs.core.next(arglist__76987));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__76987)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__76987)));
return G__76986__delegate(x, y, z, args);
});
G__76986.cljs$lang$arity$variadic = G__76986__delegate;
return G__76986;
})()
;
G__76985 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__76985__0.call(this);
case 1:
return G__76985__1.call(this,x);
case 2:
return G__76985__2.call(this,x,y);
case 3:
return G__76985__3.call(this,x,y,z);
default:
return G__76985__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__76985.cljs$lang$maxFixedArity = 3;
G__76985.cljs$lang$applyTo = G__76985__4.cljs$lang$applyTo;
return G__76985;
})()
};
var G__76984 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__76984__delegate.call(this, f, g, h, fs);
};
G__76984.cljs$lang$maxFixedArity = 3;
G__76984.cljs$lang$applyTo = (function (arglist__76988){
var f = cljs.core.first(arglist__76988);
var g = cljs.core.first(cljs.core.next(arglist__76988));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__76988)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__76988)));
return G__76984__delegate(f, g, h, fs);
});
G__76984.cljs$lang$arity$variadic = G__76984__delegate;
return G__76984;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case 1:
return juxt__1.call(this,f);
case 2:
return juxt__2.call(this,f,g);
case 3:
return juxt__3.call(this,f,g,h);
default:
return juxt__4.cljs$lang$arity$variadic(f,g,h, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__4.cljs$lang$applyTo;
juxt.cljs$lang$arity$1 = juxt__1;
juxt.cljs$lang$arity$2 = juxt__2;
juxt.cljs$lang$arity$3 = juxt__3;
juxt.cljs$lang$arity$variadic = juxt__4.cljs$lang$arity$variadic;
return juxt;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. dorun can
* be used to force any effects. Walks through the successive nexts of
* the seq, does not retain the head and returns nil.
*/
cljs.core.dorun = (function() {
var dorun = null;
var dorun__1 = (function (coll){
while(true){
if(cljs.core.seq.call(null,coll))
{{
var G__76991 = cljs.core.next.call(null,coll);
coll = G__76991;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__2 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____76990 = cljs.core.seq.call(null,coll);
if(and__3822__auto____76990)
{return (n > 0);
} else
{return and__3822__auto____76990;
}
})()))
{{
var G__76992 = (n - 1);
var G__76993 = cljs.core.next.call(null,coll);
n = G__76992;
coll = G__76993;
continue;
}
} else
{return null;
}
break;
}
});
dorun = function(n,coll){
switch(arguments.length){
case 1:
return dorun__1.call(this,n);
case 2:
return dorun__2.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
dorun.cljs$lang$arity$1 = dorun__1;
dorun.cljs$lang$arity$2 = dorun__2;
return dorun;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. doall can
* be used to force any effects. Walks through the successive nexts of
* the seq, retains the head and returns it, thus causing the entire
* seq to reside in memory at one time.
*/
cljs.core.doall = (function() {
var doall = null;
var doall__1 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__2 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case 1:
return doall__1.call(this,n);
case 2:
return doall__2.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
doall.cljs$lang$arity$1 = doall__1;
doall.cljs$lang$arity$2 = doall__2;
return doall;
})()
;
cljs.core.regexp_QMARK_ = (function regexp_QMARK_(o){
return o instanceof RegExp;
});
/**
* Returns the result of (re-find re s) if re fully matches s.
*/
cljs.core.re_matches = (function re_matches(re,s){
var matches__76995 = re.exec(s);
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__76995),s))
{if((cljs.core.count.call(null,matches__76995) === 1))
{return cljs.core.first.call(null,matches__76995);
} else
{return cljs.core.vec.call(null,matches__76995);
}
} else
{return null;
}
});
/**
* Returns the first regex match, if any, of s to re, using
* re.exec(s). Returns a vector, containing first the matching
* substring, then any capturing groups if the regular expression contains
* capturing groups.
*/
cljs.core.re_find = (function re_find(re,s){
var matches__76997 = re.exec(s);
if((matches__76997 == null))
{return null;
} else
{if((cljs.core.count.call(null,matches__76997) === 1))
{return cljs.core.first.call(null,matches__76997);
} else
{return cljs.core.vec.call(null,matches__76997);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__77002 = cljs.core.re_find.call(null,re,s);
var match_idx__77003 = s.search(re);
var match_str__77004 = ((cljs.core.coll_QMARK_.call(null,match_data__77002))?cljs.core.first.call(null,match_data__77002):match_data__77002);
var post_match__77005 = cljs.core.subs.call(null,s,(match_idx__77003 + cljs.core.count.call(null,match_str__77004)));
if(cljs.core.truth_(match_data__77002))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__77002,re_seq.call(null,re,post_match__77005));
}),null));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
var vec__77012__77013 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,s);
var ___77014 = cljs.core.nth.call(null,vec__77012__77013,0,null);
var flags__77015 = cljs.core.nth.call(null,vec__77012__77013,1,null);
var pattern__77016 = cljs.core.nth.call(null,vec__77012__77013,2,null);
return (new RegExp(pattern__77016,flags__77015));
});
/**
* Do not use this.  It is kept for backwards compatibility with the
* old IPrintable protocol.
*/
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([begin], true),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.PersistentVector.fromArray([sep], true),cljs.core.map.call(null,(function (p1__77006_SHARP_){
return print_one.call(null,p1__77006_SHARP_,opts);
}),coll))),cljs.core.PersistentVector.fromArray([end], true));
});
cljs.core.pr_sequential_writer = (function pr_sequential_writer(writer,print_one,begin,sep,end,opts,coll){
cljs.core._write.call(null,writer,begin);
if(cljs.core.seq.call(null,coll))
{print_one.call(null,cljs.core.first.call(null,coll),writer,opts);
} else
{}
var G__77020__77021 = cljs.core.seq.call(null,cljs.core.next.call(null,coll));
while(true){
if(G__77020__77021)
{var o__77022 = cljs.core.first.call(null,G__77020__77021);
cljs.core._write.call(null,writer,sep);
print_one.call(null,o__77022,writer,opts);
{
var G__77023 = cljs.core.next.call(null,G__77020__77021);
G__77020__77021 = G__77023;
continue;
}
} else
{}
break;
}
return cljs.core._write.call(null,writer,end);
});
/**
* @param {...*} var_args
*/
cljs.core.write_all = (function() { 
var write_all__delegate = function (writer,ss){
var G__77027__77028 = cljs.core.seq.call(null,ss);
while(true){
if(G__77027__77028)
{var s__77029 = cljs.core.first.call(null,G__77027__77028);
cljs.core._write.call(null,writer,s__77029);
{
var G__77030 = cljs.core.next.call(null,G__77027__77028);
G__77027__77028 = G__77030;
continue;
}
} else
{return null;
}
break;
}
};
var write_all = function (writer,var_args){
var ss = null;
if (goog.isDef(var_args)) {
  ss = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return write_all__delegate.call(this, writer, ss);
};
write_all.cljs$lang$maxFixedArity = 1;
write_all.cljs$lang$applyTo = (function (arglist__77031){
var writer = cljs.core.first(arglist__77031);
var ss = cljs.core.rest(arglist__77031);
return write_all__delegate(writer, ss);
});
write_all.cljs$lang$arity$variadic = write_all__delegate;
return write_all;
})()
;
cljs.core.string_print = (function string_print(x){
cljs.core._STAR_print_fn_STAR_.call(null,x);
return null;
});
cljs.core.flush = (function flush(){
return null;
});

goog.provide('cljs.core.StringBufferWriter');

/**
* @constructor
*/
cljs.core.StringBufferWriter = (function (sb){
this.sb = sb;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 1073741824;
})
cljs.core.StringBufferWriter.cljs$lang$type = true;
cljs.core.StringBufferWriter.cljs$lang$ctorPrSeq = (function (this__5466__auto__){
return cljs.core.list.call(null,"cljs.core/StringBufferWriter");
});
cljs.core.StringBufferWriter.cljs$lang$ctorPrWriter = (function (this__5466__auto__,writer__5467__auto__){
return cljs.core._write.call(null,writer__5467__auto__,"cljs.core/StringBufferWriter");
});
cljs.core.StringBufferWriter.prototype.cljs$core$IWriter$_write$arity$2 = (function (_,s){
var this__77032 = this;
return this__77032.sb.append(s);
});
cljs.core.StringBufferWriter.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
var this__77033 = this;
return null;
});
cljs.core.StringBufferWriter;
/**
* Do not use this.  It is kept for backwards compatibility with the
* old IPrintable protocol.
*/
cljs.core.pr_seq = (function pr_seq(obj,opts){
if((obj == null))
{return cljs.core.list.call(null,"nil");
} else
{if((void 0 === obj))
{return cljs.core.list.call(null,"#<undefined>");
} else
{if("\uFDD0'else")
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3822__auto____77043 = cljs.core._lookup.call(null,opts,"\uFDD0'meta",null);
if(cljs.core.truth_(and__3822__auto____77043))
{var and__3822__auto____77047 = (function (){var G__77044__77045 = obj;
if(G__77044__77045)
{if((function (){var or__3824__auto____77046 = (G__77044__77045.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3824__auto____77046)
{return or__3824__auto____77046;
} else
{return G__77044__77045.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__77044__77045.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__77044__77045);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__77044__77045);
}
})();
if(cljs.core.truth_(and__3822__auto____77047))
{return cljs.core.meta.call(null,obj);
} else
{return and__3822__auto____77047;
}
} else
{return and__3822__auto____77043;
}
})())?cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["^"], true),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.PersistentVector.fromArray([" "], true)):null),(((function (){var and__3822__auto____77048 = !((obj == null));
if(and__3822__auto____77048)
{return obj.cljs$lang$type;
} else
{return and__3822__auto____77048;
}
})())?obj.cljs$lang$ctorPrSeq(obj):(((function (){var G__77049__77050 = obj;
if(G__77049__77050)
{if((function (){var or__3824__auto____77051 = (G__77049__77050.cljs$lang$protocol_mask$partition0$ & 536870912);
if(or__3824__auto____77051)
{return or__3824__auto____77051;
} else
{return G__77049__77050.cljs$core$IPrintable$;
}
})())
{return true;
} else
{if((!G__77049__77050.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__77049__77050);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__77049__77050);
}
})())?cljs.core._pr_seq.call(null,obj,opts):(cljs.core.truth_(cljs.core.regexp_QMARK_.call(null,obj))?cljs.core.list.call(null,"#\"",obj.source,"\""):(("\uFDD0'else")?cljs.core.list.call(null,"#<",[cljs.core.str(obj)].join(''),">"):null)))));
} else
{return null;
}
}
}
});
/**
* Prefer this to pr-seq, because it makes the printing function
* configurable, allowing efficient implementations such as appending
* to a StringBuffer.
*/
cljs.core.pr_writer = (function pr_writer(obj,writer,opts){
if((obj == null))
{return cljs.core._write.call(null,writer,"nil");
} else
{if((void 0 === obj))
{return cljs.core._write.call(null,writer,"#<undefined>");
} else
{if("\uFDD0'else")
{if(cljs.core.truth_((function (){var and__3822__auto____77064 = cljs.core._lookup.call(null,opts,"\uFDD0'meta",null);
if(cljs.core.truth_(and__3822__auto____77064))
{var and__3822__auto____77068 = (function (){var G__77065__77066 = obj;
if(G__77065__77066)
{if((function (){var or__3824__auto____77067 = (G__77065__77066.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3824__auto____77067)
{return or__3824__auto____77067;
} else
{return G__77065__77066.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__77065__77066.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__77065__77066);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__77065__77066);
}
})();
if(cljs.core.truth_(and__3822__auto____77068))
{return cljs.core.meta.call(null,obj);
} else
{return and__3822__auto____77068;
}
} else
{return and__3822__auto____77064;
}
})()))
{cljs.core._write.call(null,writer,"^");
pr_writer.call(null,cljs.core.meta.call(null,obj),writer,opts);
cljs.core._write.call(null,writer," ");
} else
{}
if((function (){var and__3822__auto____77069 = !((obj == null));
if(and__3822__auto____77069)
{return obj.cljs$lang$type;
} else
{return and__3822__auto____77069;
}
})())
{return obj.cljs$lang$ctorPrWriter(writer,opts);
} else
{if((function (){var G__77070__77071 = obj;
if(G__77070__77071)
{if((function (){var or__3824__auto____77072 = (G__77070__77071.cljs$lang$protocol_mask$partition0$ & 2147483648);
if(or__3824__auto____77072)
{return or__3824__auto____77072;
} else
{return G__77070__77071.cljs$core$IPrintWithWriter$;
}
})())
{return true;
} else
{if((!G__77070__77071.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintWithWriter,G__77070__77071);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintWithWriter,G__77070__77071);
}
})())
{return cljs.core._pr_writer.call(null,obj,writer,opts);
} else
{if((function (){var G__77073__77074 = obj;
if(G__77073__77074)
{if((function (){var or__3824__auto____77075 = (G__77073__77074.cljs$lang$protocol_mask$partition0$ & 536870912);
if(or__3824__auto____77075)
{return or__3824__auto____77075;
} else
{return G__77073__77074.cljs$core$IPrintable$;
}
})())
{return true;
} else
{if((!G__77073__77074.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__77073__77074);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__77073__77074);
}
})())
{return cljs.core.apply.call(null,cljs.core.write_all,writer,cljs.core._pr_seq.call(null,obj,opts));
} else
{if(cljs.core.truth_(cljs.core.regexp_QMARK_.call(null,obj)))
{return cljs.core.write_all.call(null,writer,"#\"",obj.source,"\"");
} else
{if("\uFDD0'else")
{return cljs.core.write_all.call(null,writer,"#<",[cljs.core.str(obj)].join(''),">");
} else
{return null;
}
}
}
}
}
} else
{return null;
}
}
}
});
cljs.core.pr_seq_writer = (function pr_seq_writer(objs,writer,opts){
cljs.core.pr_writer.call(null,cljs.core.first.call(null,objs),writer,opts);
var G__77079__77080 = cljs.core.seq.call(null,cljs.core.next.call(null,objs));
while(true){
if(G__77079__77080)
{var obj__77081 = cljs.core.first.call(null,G__77079__77080);
cljs.core._write.call(null,writer," ");
cljs.core.pr_writer.call(null,obj__77081,writer,opts);
{
var G__77082 = cljs.core.next.call(null,G__77079__77080);
G__77079__77080 = G__77082;
continue;
}
} else
{return null;
}
break;
}
});
cljs.core.pr_sb_with_opts = (function pr_sb_with_opts(objs,opts){
var sb__77085 = (new goog.string.StringBuffer());
var writer__77086 = (new cljs.core.StringBufferWriter(sb__77085));
cljs.core.pr_seq_writer.call(null,objs,writer__77086,opts);
cljs.core._flush.call(null,writer__77086);
return sb__77085;
});
/**
* Prints a sequence of objects to a string, observing all the
* options given in opts
*/
cljs.core.pr_str_with_opts = (function pr_str_with_opts(objs,opts){
if(cljs.core.empty_QMARK_.call(null,objs))
{return "";
} else
{return [cljs.core.str(cljs.core.pr_sb_with_opts.call(null,objs,opts))].join('');
}
});
/**
* Same as pr-str-with-opts followed by (newline)
*/
cljs.core.prn_str_with_opts = (function prn_str_with_opts(objs,opts){
if(cljs.core.empty_QMARK_.call(null,objs))
{return "\n";
} else
{var sb__77088 = cljs.core.pr_sb_with_opts.call(null,objs,opts);
sb__77088.append("\n");
return [cljs.core.str(sb__77088)].join('');
}
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
return cljs.core.string_print.call(null,cljs.core.pr_str_with_opts.call(null,objs,opts));
});
cljs.core.newline = (function newline(opts){
cljs.core.string_print.call(null,"\n");
if(cljs.core.truth_(cljs.core._lookup.call(null,opts,"\uFDD0'flush-on-newline",null)))
{return cljs.core.flush.call(null);
} else
{return null;
}
});
cljs.core._STAR_flush_on_newline_STAR_ = true;
cljs.core._STAR_print_readably_STAR_ = true;
cljs.core._STAR_print_meta_STAR_ = false;
cljs.core._STAR_print_dup_STAR_ = false;
cljs.core.pr_opts = (function pr_opts(){
return cljs.core.ObjMap.fromObject(["\uFDD0'flush-on-newline","\uFDD0'readably","\uFDD0'meta","\uFDD0'dup"],{"\uFDD0'flush-on-newline":cljs.core._STAR_flush_on_newline_STAR_,"\uFDD0'readably":cljs.core._STAR_print_readably_STAR_,"\uFDD0'meta":cljs.core._STAR_print_meta_STAR_,"\uFDD0'dup":cljs.core._STAR_print_dup_STAR_});
});
/**
* pr to a string, returning it. Fundamental entrypoint to IPrintable.
* @param {...*} var_args
*/
cljs.core.pr_str = (function() { 
var pr_str__delegate = function (objs){
return cljs.core.pr_str_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var pr_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr_str__delegate.call(this, objs);
};
pr_str.cljs$lang$maxFixedArity = 0;
pr_str.cljs$lang$applyTo = (function (arglist__77089){
var objs = cljs.core.seq(arglist__77089);;
return pr_str__delegate(objs);
});
pr_str.cljs$lang$arity$variadic = pr_str__delegate;
return pr_str;
})()
;
/**
* Same as pr-str followed by (newline)
* @param {...*} var_args
*/
cljs.core.prn_str = (function() { 
var prn_str__delegate = function (objs){
return cljs.core.prn_str_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var prn_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return prn_str__delegate.call(this, objs);
};
prn_str.cljs$lang$maxFixedArity = 0;
prn_str.cljs$lang$applyTo = (function (arglist__77090){
var objs = cljs.core.seq(arglist__77090);;
return prn_str__delegate(objs);
});
prn_str.cljs$lang$arity$variadic = prn_str__delegate;
return prn_str;
})()
;
/**
* Prints the object(s) using string-print.  Prints the
* object(s), separated by spaces if there is more than one.
* By default, pr and prn print in a way that objects can be
* read by the reader
* @param {...*} var_args
*/
cljs.core.pr = (function() { 
var pr__delegate = function (objs){
return cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var pr = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr__delegate.call(this, objs);
};
pr.cljs$lang$maxFixedArity = 0;
pr.cljs$lang$applyTo = (function (arglist__77091){
var objs = cljs.core.seq(arglist__77091);;
return pr__delegate(objs);
});
pr.cljs$lang$arity$variadic = pr__delegate;
return pr;
})()
;
/**
* Prints the object(s) using string-print.
* print and println produce output for human consumption.
* @param {...*} var_args
*/
cljs.core.print = (function() { 
var cljs_core_print__delegate = function (objs){
return cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"\uFDD0'readably",false));
};
var cljs_core_print = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return cljs_core_print__delegate.call(this, objs);
};
cljs_core_print.cljs$lang$maxFixedArity = 0;
cljs_core_print.cljs$lang$applyTo = (function (arglist__77092){
var objs = cljs.core.seq(arglist__77092);;
return cljs_core_print__delegate(objs);
});
cljs_core_print.cljs$lang$arity$variadic = cljs_core_print__delegate;
return cljs_core_print;
})()
;
/**
* print to a string, returning it
* @param {...*} var_args
*/
cljs.core.print_str = (function() { 
var print_str__delegate = function (objs){
return cljs.core.pr_str_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"\uFDD0'readably",false));
};
var print_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return print_str__delegate.call(this, objs);
};
print_str.cljs$lang$maxFixedArity = 0;
print_str.cljs$lang$applyTo = (function (arglist__77093){
var objs = cljs.core.seq(arglist__77093);;
return print_str__delegate(objs);
});
print_str.cljs$lang$arity$variadic = print_str__delegate;
return print_str;
})()
;
/**
* Same as print followed by (newline)
* @param {...*} var_args
*/
cljs.core.println = (function() { 
var println__delegate = function (objs){
cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"\uFDD0'readably",false));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
};
var println = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return println__delegate.call(this, objs);
};
println.cljs$lang$maxFixedArity = 0;
println.cljs$lang$applyTo = (function (arglist__77094){
var objs = cljs.core.seq(arglist__77094);;
return println__delegate(objs);
});
println.cljs$lang$arity$variadic = println__delegate;
return println;
})()
;
/**
* println to a string, returning it
* @param {...*} var_args
*/
cljs.core.println_str = (function() { 
var println_str__delegate = function (objs){
return cljs.core.prn_str_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"\uFDD0'readably",false));
};
var println_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return println_str__delegate.call(this, objs);
};
println_str.cljs$lang$maxFixedArity = 0;
println_str.cljs$lang$applyTo = (function (arglist__77095){
var objs = cljs.core.seq(arglist__77095);;
return println_str__delegate(objs);
});
println_str.cljs$lang$arity$variadic = println_str__delegate;
return println_str;
})()
;
/**
* Same as pr followed by (newline).
* @param {...*} var_args
*/
cljs.core.prn = (function() { 
var prn__delegate = function (objs){
cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
};
var prn = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return prn__delegate.call(this, objs);
};
prn.cljs$lang$maxFixedArity = 0;
prn.cljs$lang$applyTo = (function (arglist__77096){
var objs = cljs.core.seq(arglist__77096);;
return prn__delegate(objs);
});
prn.cljs$lang$arity$variadic = prn__delegate;
return prn;
})()
;
/**
* Prints formatted output, as per format
* @param {...*} var_args
*/
cljs.core.printf = (function() { 
var printf__delegate = function (fmt,args){
return cljs.core.print.call(null,cljs.core.apply.call(null,cljs.core.format,fmt,args));
};
var printf = function (fmt,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return printf__delegate.call(this, fmt, args);
};
printf.cljs$lang$maxFixedArity = 1;
printf.cljs$lang$applyTo = (function (arglist__77097){
var fmt = cljs.core.first(arglist__77097);
var args = cljs.core.rest(arglist__77097);
return printf__delegate(fmt, args);
});
printf.cljs$lang$arity$variadic = printf__delegate;
return printf;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__77098 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__77098,"{",", ","}",opts,coll);
});
(cljs.core.IPrintable["number"] = true);
(cljs.core._pr_seq["number"] = (function (n,opts){
return cljs.core.list.call(null,[cljs.core.str(n)].join(''));
}));
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.Subvec.prototype.cljs$core$IPrintable$ = true;
cljs.core.Subvec.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.ChunkedCons.prototype.cljs$core$IPrintable$ = true;
cljs.core.ChunkedCons.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__77099 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__77099,"{",", ","}",opts,coll);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__77100 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__77100,"{",", ","}",opts,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#queue ["," ","]",opts,cljs.core.seq.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.LazySeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.RSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.RSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#{"," ","}",opts,coll);
});
(cljs.core.IPrintable["boolean"] = true);
(cljs.core._pr_seq["boolean"] = (function (bool,opts){
return cljs.core.list.call(null,[cljs.core.str(bool)].join(''));
}));
(cljs.core.IPrintable["string"] = true);
(cljs.core._pr_seq["string"] = (function (obj,opts){
if(cljs.core.keyword_QMARK_.call(null,obj))
{return cljs.core.list.call(null,[cljs.core.str(":"),cljs.core.str((function (){var temp__3974__auto____77101 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3974__auto____77101))
{var nspc__77102 = temp__3974__auto____77101;
return [cljs.core.str(nspc__77102),cljs.core.str("/")].join('');
} else
{return null;
}
})()),cljs.core.str(cljs.core.name.call(null,obj))].join(''));
} else
{if(cljs.core.symbol_QMARK_.call(null,obj))
{return cljs.core.list.call(null,[cljs.core.str((function (){var temp__3974__auto____77103 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3974__auto____77103))
{var nspc__77104 = temp__3974__auto____77103;
return [cljs.core.str(nspc__77104),cljs.core.str("/")].join('');
} else
{return null;
}
})()),cljs.core.str(cljs.core.name.call(null,obj))].join(''));
} else
{if("\uFDD0'else")
{return cljs.core.list.call(null,(cljs.core.truth_((new cljs.core.Keyword("\uFDD0'readably")).call(null,opts))?goog.string.quote(obj):obj));
} else
{return null;
}
}
}
}));
cljs.core.NodeSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.NodeSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.RedNode.prototype.cljs$core$IPrintable$ = true;
cljs.core.RedNode.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.ChunkedSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__77105 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__77105,"{",", ","}",opts,coll);
});
cljs.core.Vector.prototype.cljs$core$IPrintable$ = true;
cljs.core.Vector.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.PersistentHashSet.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentHashSet.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#{"," ","}",opts,coll);
});
cljs.core.PersistentVector.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.List.prototype.cljs$core$IPrintable$ = true;
cljs.core.List.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["array"] = true);
(cljs.core._pr_seq["array"] = (function (a,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#<Array [",", ","]>",opts,a);
}));
(cljs.core.IPrintable["function"] = true);
(cljs.core._pr_seq["function"] = (function (this$){
return cljs.core.list.call(null,"#<",[cljs.core.str(this$)].join(''),">");
}));
cljs.core.EmptyList.prototype.cljs$core$IPrintable$ = true;
cljs.core.EmptyList.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.list.call(null,"()");
});
cljs.core.BlackNode.prototype.cljs$core$IPrintable$ = true;
cljs.core.BlackNode.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
Date.prototype.cljs$core$IPrintable$ = true;
Date.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (d,_){
var normalize__77107 = (function (n,len){
var ns__77106 = [cljs.core.str(n)].join('');
while(true){
if((cljs.core.count.call(null,ns__77106) < len))
{{
var G__77109 = [cljs.core.str("0"),cljs.core.str(ns__77106)].join('');
ns__77106 = G__77109;
continue;
}
} else
{return ns__77106;
}
break;
}
});
return cljs.core.list.call(null,[cljs.core.str("#inst \""),cljs.core.str(d.getUTCFullYear()),cljs.core.str("-"),cljs.core.str(normalize__77107.call(null,(d.getUTCMonth() + 1),2)),cljs.core.str("-"),cljs.core.str(normalize__77107.call(null,d.getUTCDate(),2)),cljs.core.str("T"),cljs.core.str(normalize__77107.call(null,d.getUTCHours(),2)),cljs.core.str(":"),cljs.core.str(normalize__77107.call(null,d.getUTCMinutes(),2)),cljs.core.str(":"),cljs.core.str(normalize__77107.call(null,d.getUTCSeconds(),2)),cljs.core.str("."),cljs.core.str(normalize__77107.call(null,d.getUTCMilliseconds(),3)),cljs.core.str("-"),cljs.core.str("00:00\"")].join(''));
});
cljs.core.Cons.prototype.cljs$core$IPrintable$ = true;
cljs.core.Cons.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.Range.prototype.cljs$core$IPrintable$ = true;
cljs.core.Range.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.ArrayNodeSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.ObjMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.ObjMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__77108 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__77108,"{",", ","}",opts,coll);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.HashMap.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var pr_pair__77110 = (function (keyval){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,""," ","",opts,keyval);
});
return cljs.core.pr_sequential_writer.call(null,writer,pr_pair__77110,"{",", ","}",opts,coll);
});
(cljs.core.IPrintWithWriter["number"] = true);
(cljs.core._pr_writer["number"] = (function (n,writer,opts){
(1 / 0);
return cljs.core._write.call(null,writer,[cljs.core.str(n)].join(''));
}));
cljs.core.IndexedSeq.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"("," ",")",opts,coll);
});
cljs.core.Subvec.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.Subvec.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"["," ","]",opts,coll);
});
cljs.core.ChunkedCons.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.ChunkedCons.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"("," ",")",opts,coll);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var pr_pair__77111 = (function (keyval){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,""," ","",opts,keyval);
});
return cljs.core.pr_sequential_writer.call(null,writer,pr_pair__77111,"{",", ","}",opts,coll);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var pr_pair__77112 = (function (keyval){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,""," ","",opts,keyval);
});
return cljs.core.pr_sequential_writer.call(null,writer,pr_pair__77112,"{",", ","}",opts,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"#queue ["," ","]",opts,cljs.core.seq.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.LazySeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"("," ",")",opts,coll);
});
cljs.core.RSeq.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.RSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"("," ",")",opts,coll);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"#{"," ","}",opts,coll);
});
(cljs.core.IPrintWithWriter["boolean"] = true);
(cljs.core._pr_writer["boolean"] = (function (bool,writer,opts){
return cljs.core._write.call(null,writer,[cljs.core.str(bool)].join(''));
}));
(cljs.core.IPrintWithWriter["string"] = true);
(cljs.core._pr_writer["string"] = (function (obj,writer,opts){
if(cljs.core.keyword_QMARK_.call(null,obj))
{cljs.core._write.call(null,writer,":");
var temp__3974__auto____77113 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3974__auto____77113))
{var nspc__77114 = temp__3974__auto____77113;
cljs.core.write_all.call(null,writer,[cljs.core.str(nspc__77114)].join(''),"/");
} else
{}
return cljs.core._write.call(null,writer,cljs.core.name.call(null,obj));
} else
{if(cljs.core.symbol_QMARK_.call(null,obj))
{var temp__3974__auto____77115 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3974__auto____77115))
{var nspc__77116 = temp__3974__auto____77115;
cljs.core.write_all.call(null,writer,[cljs.core.str(nspc__77116)].join(''),"/");
} else
{}
return cljs.core._write.call(null,writer,cljs.core.name.call(null,obj));
} else
{if("\uFDD0'else")
{if(cljs.core.truth_((new cljs.core.Keyword("\uFDD0'readably")).call(null,opts)))
{return cljs.core._write.call(null,writer,goog.string.quote(obj));
} else
{return cljs.core._write.call(null,writer,obj);
}
} else
{return null;
}
}
}
}));
cljs.core.NodeSeq.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.NodeSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"("," ",")",opts,coll);
});
cljs.core.RedNode.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.RedNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"["," ","]",opts,coll);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.ChunkedSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"("," ",")",opts,coll);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var pr_pair__77117 = (function (keyval){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,""," ","",opts,keyval);
});
return cljs.core.pr_sequential_writer.call(null,writer,pr_pair__77117,"{",", ","}",opts,coll);
});
cljs.core.Vector.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.Vector.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"["," ","]",opts,coll);
});
cljs.core.PersistentHashSet.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.PersistentHashSet.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"#{"," ","}",opts,coll);
});
cljs.core.PersistentVector.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"["," ","]",opts,coll);
});
cljs.core.List.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.List.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"("," ",")",opts,coll);
});
(cljs.core.IPrintWithWriter["array"] = true);
(cljs.core._pr_writer["array"] = (function (a,writer,opts){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"#<Array [",", ","]>",opts,a);
}));
(cljs.core.IPrintWithWriter["function"] = true);
(cljs.core._pr_writer["function"] = (function (this$,writer,_){
return cljs.core.write_all.call(null,writer,"#<",[cljs.core.str(this$)].join(''),">");
}));
cljs.core.EmptyList.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.EmptyList.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return cljs.core._write.call(null,writer,"()");
});
cljs.core.BlackNode.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.BlackNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"["," ","]",opts,coll);
});
Date.prototype.cljs$core$IPrintWithWriter$ = true;
Date.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (d,writer,_){
var normalize__77119 = (function (n,len){
var ns__77118 = [cljs.core.str(n)].join('');
while(true){
if((cljs.core.count.call(null,ns__77118) < len))
{{
var G__77121 = [cljs.core.str("0"),cljs.core.str(ns__77118)].join('');
ns__77118 = G__77121;
continue;
}
} else
{return ns__77118;
}
break;
}
});
return cljs.core.write_all.call(null,writer,"#inst \"",[cljs.core.str(d.getUTCFullYear())].join(''),"-",normalize__77119.call(null,(d.getUTCMonth() + 1),2),"-",normalize__77119.call(null,d.getUTCDate(),2),"T",normalize__77119.call(null,d.getUTCHours(),2),":",normalize__77119.call(null,d.getUTCMinutes(),2),":",normalize__77119.call(null,d.getUTCSeconds(),2),".",normalize__77119.call(null,d.getUTCMilliseconds(),3),"-","00:00\"");
});
cljs.core.Cons.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.Cons.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"("," ",")",opts,coll);
});
cljs.core.Range.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.Range.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"("," ",")",opts,coll);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.ArrayNodeSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"("," ",")",opts,coll);
});
cljs.core.ObjMap.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.ObjMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var pr_pair__77120 = (function (keyval){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,""," ","",opts,keyval);
});
return cljs.core.pr_sequential_writer.call(null,writer,pr_pair__77120,"{",", ","}",opts,coll);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"("," ",")",opts,coll);
});
cljs.core.PersistentVector.prototype.cljs$core$IComparable$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IComparable$_compare$arity$2 = (function (x,y){
return cljs.core.compare_indexed.call(null,x,y);
});

goog.provide('cljs.core.Atom');

/**
* @constructor
*/
cljs.core.Atom = (function (state,meta,validator,watches){
this.state = state;
this.meta = meta;
this.validator = validator;
this.watches = watches;
this.cljs$lang$protocol_mask$partition0$ = 2690809856;
this.cljs$lang$protocol_mask$partition1$ = 2;
})
cljs.core.Atom.cljs$lang$type = true;
cljs.core.Atom.cljs$lang$ctorPrSeq = (function (this__5466__auto__){
return cljs.core.list.call(null,"cljs.core/Atom");
});
cljs.core.Atom.cljs$lang$ctorPrWriter = (function (this__5466__auto__,writer__5467__auto__){
return cljs.core._write.call(null,writer__5467__auto__,"cljs.core/Atom");
});
cljs.core.Atom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this__77122 = this;
return goog.getUid(this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var this__77123 = this;
var G__77124__77125 = cljs.core.seq.call(null,this__77123.watches);
while(true){
if(G__77124__77125)
{var vec__77126__77127 = cljs.core.first.call(null,G__77124__77125);
var key__77128 = cljs.core.nth.call(null,vec__77126__77127,0,null);
var f__77129 = cljs.core.nth.call(null,vec__77126__77127,1,null);
f__77129.call(null,key__77128,this$,oldval,newval);
{
var G__77137 = cljs.core.next.call(null,G__77124__77125);
G__77124__77125 = G__77137;
continue;
}
} else
{return null;
}
break;
}
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var this__77130 = this;
return this$.watches = cljs.core.assoc.call(null,this__77130.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var this__77131 = this;
return this$.watches = cljs.core.dissoc.call(null,this__77131.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,writer,opts){
var this__77132 = this;
cljs.core._write.call(null,writer,"#<Atom: ");
cljs.core._pr_writer.call(null,this__77132.state,writer,opts);
return cljs.core._write.call(null,writer,">");
});
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (a,opts){
var this__77133 = this;
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["#<Atom: "], true),cljs.core._pr_seq.call(null,this__77133.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var this__77134 = this;
return this__77134.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var this__77135 = this;
return this__77135.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var this__77136 = this;
return (o === other);
});
cljs.core.Atom;
/**
* Creates and returns an Atom with an initial value of x and zero or
* more options (in any order):
* 
* :meta metadata-map
* 
* :validator validate-fn
* 
* If metadata-map is supplied, it will be come the metadata on the
* atom. validate-fn must be nil or a side-effect-free fn of one
* argument, which will be passed the intended new state on any state
* change. If the new state is unacceptable, the validate-fn should
* return false or throw an Error.  If either of these error conditions
* occur, then the value of the atom will not change.
* @param {...*} var_args
*/
cljs.core.atom = (function() {
var atom = null;
var atom__1 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__2 = (function() { 
var G__77149__delegate = function (x,p__77138){
var map__77144__77145 = p__77138;
var map__77144__77146 = ((cljs.core.seq_QMARK_.call(null,map__77144__77145))?cljs.core.apply.call(null,cljs.core.hash_map,map__77144__77145):map__77144__77145);
var validator__77147 = cljs.core._lookup.call(null,map__77144__77146,"\uFDD0'validator",null);
var meta__77148 = cljs.core._lookup.call(null,map__77144__77146,"\uFDD0'meta",null);
return (new cljs.core.Atom(x,meta__77148,validator__77147,null));
};
var G__77149 = function (x,var_args){
var p__77138 = null;
if (goog.isDef(var_args)) {
  p__77138 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__77149__delegate.call(this, x, p__77138);
};
G__77149.cljs$lang$maxFixedArity = 1;
G__77149.cljs$lang$applyTo = (function (arglist__77150){
var x = cljs.core.first(arglist__77150);
var p__77138 = cljs.core.rest(arglist__77150);
return G__77149__delegate(x, p__77138);
});
G__77149.cljs$lang$arity$variadic = G__77149__delegate;
return G__77149;
})()
;
atom = function(x,var_args){
var p__77138 = var_args;
switch(arguments.length){
case 1:
return atom__1.call(this,x);
default:
return atom__2.cljs$lang$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__2.cljs$lang$applyTo;
atom.cljs$lang$arity$1 = atom__1;
atom.cljs$lang$arity$variadic = atom__2.cljs$lang$arity$variadic;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3974__auto____77154 = a.validator;
if(cljs.core.truth_(temp__3974__auto____77154))
{var validate__77155 = temp__3974__auto____77154;
if(cljs.core.truth_(validate__77155.call(null,new_value)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Validator rejected reference state"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'validate","\uFDD1'new-value"),cljs.core.hash_map("\uFDD0'line",6683))))].join('')));
}
} else
{}
var old_value__77156 = a.state;
a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__77156,new_value);
return new_value;
});
/**
* Atomically swaps the value of atom to be:
* (apply f current-value-of-atom args). Note that f may be called
* multiple times, and thus should be free of side effects.  Returns
* the value that was swapped in.
* @param {...*} var_args
*/
cljs.core.swap_BANG_ = (function() {
var swap_BANG_ = null;
var swap_BANG___2 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___3 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___4 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___5 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___6 = (function() { 
var G__77157__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__77157 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__77157__delegate.call(this, a, f, x, y, z, more);
};
G__77157.cljs$lang$maxFixedArity = 5;
G__77157.cljs$lang$applyTo = (function (arglist__77158){
var a = cljs.core.first(arglist__77158);
var f = cljs.core.first(cljs.core.next(arglist__77158));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__77158)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__77158))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__77158)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__77158)))));
return G__77157__delegate(a, f, x, y, z, more);
});
G__77157.cljs$lang$arity$variadic = G__77157__delegate;
return G__77157;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return swap_BANG___2.call(this,a,f);
case 3:
return swap_BANG___3.call(this,a,f,x);
case 4:
return swap_BANG___4.call(this,a,f,x,y);
case 5:
return swap_BANG___5.call(this,a,f,x,y,z);
default:
return swap_BANG___6.cljs$lang$arity$variadic(a,f,x,y,z, cljs.core.array_seq(arguments, 5));
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___6.cljs$lang$applyTo;
swap_BANG_.cljs$lang$arity$2 = swap_BANG___2;
swap_BANG_.cljs$lang$arity$3 = swap_BANG___3;
swap_BANG_.cljs$lang$arity$4 = swap_BANG___4;
swap_BANG_.cljs$lang$arity$5 = swap_BANG___5;
swap_BANG_.cljs$lang$arity$variadic = swap_BANG___6.cljs$lang$arity$variadic;
return swap_BANG_;
})()
;
/**
* Atomically sets the value of atom to newval if and only if the
* current value of the atom is identical to oldval. Returns true if
* set happened, else false.
*/
cljs.core.compare_and_set_BANG_ = (function compare_and_set_BANG_(a,oldval,newval){
if(cljs.core._EQ_.call(null,a.state,oldval))
{cljs.core.reset_BANG_.call(null,a,newval);
return true;
} else
{return false;
}
});
cljs.core.deref = (function deref(o){
return cljs.core._deref.call(null,o);
});
/**
* Sets the validator-fn for an atom. validator-fn must be nil or a
* side-effect-free fn of one argument, which will be passed the intended
* new state on any state change. If the new state is unacceptable, the
* validator-fn should return false or throw an Error. If the current state
* is not acceptable to the new validator, an Error will be thrown and the
* validator will not be changed.
*/
cljs.core.set_validator_BANG_ = (function set_validator_BANG_(iref,val){
return iref.validator = val;
});
/**
* Gets the validator-fn for a var/ref/agent/atom.
*/
cljs.core.get_validator = (function get_validator(iref){
return iref.validator;
});
/**
* Atomically sets the metadata for a namespace/var/ref/agent/atom to be:
* 
* (apply f its-current-meta args)
* 
* f must be free of side-effects
* @param {...*} var_args
*/
cljs.core.alter_meta_BANG_ = (function() { 
var alter_meta_BANG___delegate = function (iref,f,args){
return iref.meta = cljs.core.apply.call(null,f,iref.meta,args);
};
var alter_meta_BANG_ = function (iref,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return alter_meta_BANG___delegate.call(this, iref, f, args);
};
alter_meta_BANG_.cljs$lang$maxFixedArity = 2;
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__77159){
var iref = cljs.core.first(arglist__77159);
var f = cljs.core.first(cljs.core.next(arglist__77159));
var args = cljs.core.rest(cljs.core.next(arglist__77159));
return alter_meta_BANG___delegate(iref, f, args);
});
alter_meta_BANG_.cljs$lang$arity$variadic = alter_meta_BANG___delegate;
return alter_meta_BANG_;
})()
;
/**
* Atomically resets the metadata for an atom
*/
cljs.core.reset_meta_BANG_ = (function reset_meta_BANG_(iref,m){
return iref.meta = m;
});
/**
* Alpha - subject to change.
* 
* Adds a watch function to an atom reference. The watch fn must be a
* fn of 4 args: a key, the reference, its old-state, its
* new-state. Whenever the reference's state might have been changed,
* any registered watches will have their functions called. The watch
* fn will be called synchronously. Note that an atom's state
* may have changed again prior to the fn call, so use old/new-state
* rather than derefing the reference. Keys must be unique per
* reference, and can be used to remove the watch with remove-watch,
* but are otherwise considered opaque by the watch mechanism.  Bear in
* mind that regardless of the result or action of the watch fns the
* atom's value will change.  Example:
* 
* (def a (atom 0))
* (add-watch a :inc (fn [k r o n] (assert (== 0 n))))
* (swap! a inc)
* ;; Assertion Error
* (deref a)
* ;=> 1
*/
cljs.core.add_watch = (function add_watch(iref,key,f){
return cljs.core._add_watch.call(null,iref,key,f);
});
/**
* Alpha - subject to change.
* 
* Removes a watch (set by add-watch) from a reference
*/
cljs.core.remove_watch = (function remove_watch(iref,key){
return cljs.core._remove_watch.call(null,iref,key);
});
cljs.core.gensym_counter = null;
/**
* Returns a new symbol with a unique name. If a prefix string is
* supplied, the name is prefix# where # is some unique number. If
* prefix is not supplied, the prefix is 'G__'.
*/
cljs.core.gensym = (function() {
var gensym = null;
var gensym__0 = (function (){
return gensym.call(null,"G__");
});
var gensym__1 = (function (prefix_string){
if((cljs.core.gensym_counter == null))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,[cljs.core.str(prefix_string),cljs.core.str(cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc))].join(''));
});
gensym = function(prefix_string){
switch(arguments.length){
case 0:
return gensym__0.call(this);
case 1:
return gensym__1.call(this,prefix_string);
}
throw('Invalid arity: ' + arguments.length);
};
gensym.cljs$lang$arity$0 = gensym__0;
gensym.cljs$lang$arity$1 = gensym__1;
return gensym;
})()
;
cljs.core.fixture1 = 1;
cljs.core.fixture2 = 2;

goog.provide('cljs.core.Delay');

/**
* @constructor
*/
cljs.core.Delay = (function (state,f){
this.state = state;
this.f = f;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 32768;
})
cljs.core.Delay.cljs$lang$type = true;
cljs.core.Delay.cljs$lang$ctorPrSeq = (function (this__5466__auto__){
return cljs.core.list.call(null,"cljs.core/Delay");
});
cljs.core.Delay.cljs$lang$ctorPrWriter = (function (this__5466__auto__,writer__5467__auto__){
return cljs.core._write.call(null,writer__5467__auto__,"cljs.core/Delay");
});
cljs.core.Delay.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = (function (d){
var this__77160 = this;
return (new cljs.core.Keyword("\uFDD0'done")).call(null,cljs.core.deref.call(null,this__77160.state));
});
cljs.core.Delay.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var this__77161 = this;
return (new cljs.core.Keyword("\uFDD0'value")).call(null,cljs.core.swap_BANG_.call(null,this__77161.state,(function (p__77162){
var map__77163__77164 = p__77162;
var map__77163__77165 = ((cljs.core.seq_QMARK_.call(null,map__77163__77164))?cljs.core.apply.call(null,cljs.core.hash_map,map__77163__77164):map__77163__77164);
var curr_state__77166 = map__77163__77165;
var done__77167 = cljs.core._lookup.call(null,map__77163__77165,"\uFDD0'done",null);
if(cljs.core.truth_(done__77167))
{return curr_state__77166;
} else
{return cljs.core.ObjMap.fromObject(["\uFDD0'done","\uFDD0'value"],{"\uFDD0'done":true,"\uFDD0'value":this__77161.f.call(null)});
}
})));
});
cljs.core.Delay;
/**
* returns true if x is a Delay created with delay
*/
cljs.core.delay_QMARK_ = (function delay_QMARK_(x){
return cljs.core.instance_QMARK_.call(null,cljs.core.Delay,x);
});
/**
* If x is a Delay, returns the (possibly cached) value of its expression, else returns x
*/
cljs.core.force = (function force(x){
if(cljs.core.delay_QMARK_.call(null,x))
{return cljs.core.deref.call(null,x);
} else
{return x;
}
});
/**
* Returns true if a value has been produced for a promise, delay, future or lazy sequence.
*/
cljs.core.realized_QMARK_ = (function realized_QMARK_(d){
return cljs.core._realized_QMARK_.call(null,d);
});
/**
* Recursively transforms JavaScript arrays into ClojureScript
* vectors, and JavaScript objects into ClojureScript maps.  With
* option ':keywordize-keys true' will convert object fields from
* strings to keywords.
* @param {...*} var_args
*/
cljs.core.js__GT_clj = (function() { 
var js__GT_clj__delegate = function (x,options){
var map__77188__77189 = options;
var map__77188__77190 = ((cljs.core.seq_QMARK_.call(null,map__77188__77189))?cljs.core.apply.call(null,cljs.core.hash_map,map__77188__77189):map__77188__77189);
var keywordize_keys__77191 = cljs.core._lookup.call(null,map__77188__77190,"\uFDD0'keywordize-keys",null);
var keyfn__77192 = (cljs.core.truth_(keywordize_keys__77191)?cljs.core.keyword:cljs.core.str);
var f__77207 = (function thisfn(x){
if(cljs.core.seq_QMARK_.call(null,x))
{return cljs.core.doall.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.coll_QMARK_.call(null,x))
{return cljs.core.into.call(null,cljs.core.empty.call(null,x),cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(goog.isArray(x)))
{return cljs.core.vec.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if((cljs.core.type.call(null,x) === Object))
{return cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,(function (){var iter__5628__auto____77206 = (function iter__77200(s__77201){
return (new cljs.core.LazySeq(null,false,(function (){
var s__77201__77204 = s__77201;
while(true){
if(cljs.core.seq.call(null,s__77201__77204))
{var k__77205 = cljs.core.first.call(null,s__77201__77204);
return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([keyfn__77192.call(null,k__77205),thisfn.call(null,(x[k__77205]))], true),iter__77200.call(null,cljs.core.rest.call(null,s__77201__77204)));
} else
{return null;
}
break;
}
}),null));
});
return iter__5628__auto____77206.call(null,cljs.core.js_keys.call(null,x));
})());
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
return f__77207.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__77208){
var x = cljs.core.first(arglist__77208);
var options = cljs.core.rest(arglist__77208);
return js__GT_clj__delegate(x, options);
});
js__GT_clj.cljs$lang$arity$variadic = js__GT_clj__delegate;
return js__GT_clj;
})()
;
/**
* Returns a memoized version of a referentially transparent function. The
* memoized version of the function keeps a cache of the mapping from arguments
* to results and, when calls with the same arguments are repeated often, has
* higher performance at the expense of higher memory use.
*/
cljs.core.memoize = (function memoize(f){
var mem__77213 = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
return (function() { 
var G__77217__delegate = function (args){
var temp__3971__auto____77214 = cljs.core._lookup.call(null,cljs.core.deref.call(null,mem__77213),args,null);
if(cljs.core.truth_(temp__3971__auto____77214))
{var v__77215 = temp__3971__auto____77214;
return v__77215;
} else
{var ret__77216 = cljs.core.apply.call(null,f,args);
cljs.core.swap_BANG_.call(null,mem__77213,cljs.core.assoc,args,ret__77216);
return ret__77216;
}
};
var G__77217 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__77217__delegate.call(this, args);
};
G__77217.cljs$lang$maxFixedArity = 0;
G__77217.cljs$lang$applyTo = (function (arglist__77218){
var args = cljs.core.seq(arglist__77218);;
return G__77217__delegate(args);
});
G__77217.cljs$lang$arity$variadic = G__77217__delegate;
return G__77217;
})()
;
});
/**
* trampoline can be used to convert algorithms requiring mutual
* recursion without stack consumption. Calls f with supplied args, if
* any. If f returns a fn, calls that fn with no arguments, and
* continues to repeat, until the return value is not a fn, then
* returns that non-fn value. Note that if you want to return a fn as a
* final value, you must wrap it in some data structure and unpack it
* after trampoline returns.
* @param {...*} var_args
*/
cljs.core.trampoline = (function() {
var trampoline = null;
var trampoline__1 = (function (f){
while(true){
var ret__77220 = f.call(null);
if(cljs.core.fn_QMARK_.call(null,ret__77220))
{{
var G__77221 = ret__77220;
f = G__77221;
continue;
}
} else
{return ret__77220;
}
break;
}
});
var trampoline__2 = (function() { 
var G__77222__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__77222 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__77222__delegate.call(this, f, args);
};
G__77222.cljs$lang$maxFixedArity = 1;
G__77222.cljs$lang$applyTo = (function (arglist__77223){
var f = cljs.core.first(arglist__77223);
var args = cljs.core.rest(arglist__77223);
return G__77222__delegate(f, args);
});
G__77222.cljs$lang$arity$variadic = G__77222__delegate;
return G__77222;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case 1:
return trampoline__1.call(this,f);
default:
return trampoline__2.cljs$lang$arity$variadic(f, cljs.core.array_seq(arguments, 1));
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__2.cljs$lang$applyTo;
trampoline.cljs$lang$arity$1 = trampoline__1;
trampoline.cljs$lang$arity$variadic = trampoline__2.cljs$lang$arity$variadic;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__0 = (function (){
return rand.call(null,1);
});
var rand__1 = (function (n){
return (Math.random.call(null) * n);
});
rand = function(n){
switch(arguments.length){
case 0:
return rand__0.call(this);
case 1:
return rand__1.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
rand.cljs$lang$arity$0 = rand__0;
rand.cljs$lang$arity$1 = rand__1;
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return Math.floor.call(null,(Math.random.call(null) * n));
});
/**
* Return a random element of the (sequential) collection. Will have
* the same performance characteristics as nth for the given
* collection.
*/
cljs.core.rand_nth = (function rand_nth(coll){
return cljs.core.nth.call(null,coll,cljs.core.rand_int.call(null,cljs.core.count.call(null,coll)));
});
/**
* Returns a map of the elements of coll keyed by the result of
* f on each element. The value at each key will be a vector of the
* corresponding elements, in the order they appeared in coll.
*/
cljs.core.group_by = (function group_by(f,coll){
return cljs.core.reduce.call(null,(function (ret,x){
var k__77225 = f.call(null,x);
return cljs.core.assoc.call(null,ret,k__77225,cljs.core.conj.call(null,cljs.core._lookup.call(null,ret,k__77225,cljs.core.PersistentVector.EMPTY),x));
}),cljs.core.ObjMap.EMPTY,coll);
});
/**
* Creates a hierarchy object for use with derive, isa? etc.
*/
cljs.core.make_hierarchy = (function make_hierarchy(){
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'descendants","\uFDD0'ancestors"],{"\uFDD0'parents":cljs.core.ObjMap.EMPTY,"\uFDD0'descendants":cljs.core.ObjMap.EMPTY,"\uFDD0'ancestors":cljs.core.ObjMap.EMPTY});
});
cljs.core.global_hierarchy = cljs.core.atom.call(null,cljs.core.make_hierarchy.call(null));
/**
* Returns true if (= child parent), or child is directly or indirectly derived from
* parent, either via a JavaScript type inheritance relationship or a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy
*/
cljs.core.isa_QMARK_ = (function() {
var isa_QMARK_ = null;
var isa_QMARK___2 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___3 = (function (h,child,parent){
var or__3824__auto____77234 = cljs.core._EQ_.call(null,child,parent);
if(or__3824__auto____77234)
{return or__3824__auto____77234;
} else
{var or__3824__auto____77235 = cljs.core.contains_QMARK_.call(null,(new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h).call(null,child),parent);
if(or__3824__auto____77235)
{return or__3824__auto____77235;
} else
{var and__3822__auto____77236 = cljs.core.vector_QMARK_.call(null,parent);
if(and__3822__auto____77236)
{var and__3822__auto____77237 = cljs.core.vector_QMARK_.call(null,child);
if(and__3822__auto____77237)
{var and__3822__auto____77238 = (cljs.core.count.call(null,parent) === cljs.core.count.call(null,child));
if(and__3822__auto____77238)
{var ret__77239 = true;
var i__77240 = 0;
while(true){
if((function (){var or__3824__auto____77241 = cljs.core.not.call(null,ret__77239);
if(or__3824__auto____77241)
{return or__3824__auto____77241;
} else
{return (i__77240 === cljs.core.count.call(null,parent));
}
})())
{return ret__77239;
} else
{{
var G__77242 = isa_QMARK_.call(null,h,child.call(null,i__77240),parent.call(null,i__77240));
var G__77243 = (i__77240 + 1);
ret__77239 = G__77242;
i__77240 = G__77243;
continue;
}
}
break;
}
} else
{return and__3822__auto____77238;
}
} else
{return and__3822__auto____77237;
}
} else
{return and__3822__auto____77236;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case 2:
return isa_QMARK___2.call(this,h,child);
case 3:
return isa_QMARK___3.call(this,h,child,parent);
}
throw('Invalid arity: ' + arguments.length);
};
isa_QMARK_.cljs$lang$arity$2 = isa_QMARK___2;
isa_QMARK_.cljs$lang$arity$3 = isa_QMARK___3;
return isa_QMARK_;
})()
;
/**
* Returns the immediate parents of tag, either via a JavaScript type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.parents = (function() {
var parents = null;
var parents__1 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__2 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core._lookup.call(null,(new cljs.core.Keyword("\uFDD0'parents")).call(null,h),tag,null));
});
parents = function(h,tag){
switch(arguments.length){
case 1:
return parents__1.call(this,h);
case 2:
return parents__2.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
parents.cljs$lang$arity$1 = parents__1;
parents.cljs$lang$arity$2 = parents__2;
return parents;
})()
;
/**
* Returns the immediate and indirect parents of tag, either via a JavaScript type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.ancestors = (function() {
var ancestors = null;
var ancestors__1 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__2 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core._lookup.call(null,(new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h),tag,null));
});
ancestors = function(h,tag){
switch(arguments.length){
case 1:
return ancestors__1.call(this,h);
case 2:
return ancestors__2.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
ancestors.cljs$lang$arity$1 = ancestors__1;
ancestors.cljs$lang$arity$2 = ancestors__2;
return ancestors;
})()
;
/**
* Returns the immediate and indirect children of tag, through a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy. Note: does not work on JavaScript type inheritance
* relationships.
*/
cljs.core.descendants = (function() {
var descendants = null;
var descendants__1 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__2 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core._lookup.call(null,(new cljs.core.Keyword("\uFDD0'descendants")).call(null,h),tag,null));
});
descendants = function(h,tag){
switch(arguments.length){
case 1:
return descendants__1.call(this,h);
case 2:
return descendants__2.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
descendants.cljs$lang$arity$1 = descendants__1;
descendants.cljs$lang$arity$2 = descendants__2;
return descendants;
})()
;
/**
* Establishes a parent/child relationship between parent and
* tag. Parent must be a namespace-qualified symbol or keyword and
* child can be either a namespace-qualified symbol or keyword or a
* class. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.derive = (function() {
var derive = null;
var derive__2 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'namespace","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",6967))))].join('')));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__3 = (function (h,tag,parent){
if(cljs.core.not_EQ_.call(null,tag,parent))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'not=","\uFDD1'tag","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",6971))))].join('')));
}
var tp__77252 = (new cljs.core.Keyword("\uFDD0'parents")).call(null,h);
var td__77253 = (new cljs.core.Keyword("\uFDD0'descendants")).call(null,h);
var ta__77254 = (new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h);
var tf__77255 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core._lookup.call(null,targets,k,cljs.core.PersistentHashSet.EMPTY),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});
var or__3824__auto____77256 = ((cljs.core.contains_QMARK_.call(null,tp__77252.call(null,tag),parent))?null:(function (){if(cljs.core.contains_QMARK_.call(null,ta__77254.call(null,tag),parent))
{throw (new Error([cljs.core.str(tag),cljs.core.str("already has"),cljs.core.str(parent),cljs.core.str("as ancestor")].join('')));
} else
{}
if(cljs.core.contains_QMARK_.call(null,ta__77254.call(null,parent),tag))
{throw (new Error([cljs.core.str("Cyclic derivation:"),cljs.core.str(parent),cljs.core.str("has"),cljs.core.str(tag),cljs.core.str("as ancestor")].join('')));
} else
{}
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'ancestors","\uFDD0'descendants"],{"\uFDD0'parents":cljs.core.assoc.call(null,(new cljs.core.Keyword("\uFDD0'parents")).call(null,h),tag,cljs.core.conj.call(null,cljs.core._lookup.call(null,tp__77252,tag,cljs.core.PersistentHashSet.EMPTY),parent)),"\uFDD0'ancestors":tf__77255.call(null,(new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h),tag,td__77253,parent,ta__77254),"\uFDD0'descendants":tf__77255.call(null,(new cljs.core.Keyword("\uFDD0'descendants")).call(null,h),parent,ta__77254,tag,td__77253)});
})());
if(cljs.core.truth_(or__3824__auto____77256))
{return or__3824__auto____77256;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case 2:
return derive__2.call(this,h,tag);
case 3:
return derive__3.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
derive.cljs$lang$arity$2 = derive__2;
derive.cljs$lang$arity$3 = derive__3;
return derive;
})()
;
/**
* Removes a parent/child relationship between parent and
* tag. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.underive = (function() {
var underive = null;
var underive__2 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__3 = (function (h,tag,parent){
var parentMap__77261 = (new cljs.core.Keyword("\uFDD0'parents")).call(null,h);
var childsParents__77262 = (cljs.core.truth_(parentMap__77261.call(null,tag))?cljs.core.disj.call(null,parentMap__77261.call(null,tag),parent):cljs.core.PersistentHashSet.EMPTY);
var newParents__77263 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__77262))?cljs.core.assoc.call(null,parentMap__77261,tag,childsParents__77262):cljs.core.dissoc.call(null,parentMap__77261,tag));
var deriv_seq__77264 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__77244_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__77244_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__77244_SHARP_),cljs.core.second.call(null,p1__77244_SHARP_)));
}),cljs.core.seq.call(null,newParents__77263)));
if(cljs.core.contains_QMARK_.call(null,parentMap__77261.call(null,tag),parent))
{return cljs.core.reduce.call(null,(function (p1__77245_SHARP_,p2__77246_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__77245_SHARP_,p2__77246_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__77264));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case 2:
return underive__2.call(this,h,tag);
case 3:
return underive__3.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
underive.cljs$lang$arity$2 = underive__2;
underive.cljs$lang$arity$3 = underive__3;
return underive;
})()
;
cljs.core.reset_cache = (function reset_cache(method_cache,method_table,cached_hierarchy,hierarchy){
cljs.core.swap_BANG_.call(null,method_cache,(function (_){
return cljs.core.deref.call(null,method_table);
}));
return cljs.core.swap_BANG_.call(null,cached_hierarchy,(function (_){
return cljs.core.deref.call(null,hierarchy);
}));
});
cljs.core.prefers_STAR_ = (function prefers_STAR_(x,y,prefer_table){
var xprefs__77272 = cljs.core.deref.call(null,prefer_table).call(null,x);
var or__3824__auto____77274 = (cljs.core.truth_((function (){var and__3822__auto____77273 = xprefs__77272;
if(cljs.core.truth_(and__3822__auto____77273))
{return xprefs__77272.call(null,y);
} else
{return and__3822__auto____77273;
}
})())?true:null);
if(cljs.core.truth_(or__3824__auto____77274))
{return or__3824__auto____77274;
} else
{var or__3824__auto____77276 = (function (){var ps__77275 = cljs.core.parents.call(null,y);
while(true){
if((cljs.core.count.call(null,ps__77275) > 0))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__77275),prefer_table)))
{} else
{}
{
var G__77279 = cljs.core.rest.call(null,ps__77275);
ps__77275 = G__77279;
continue;
}
} else
{return null;
}
break;
}
})();
if(cljs.core.truth_(or__3824__auto____77276))
{return or__3824__auto____77276;
} else
{var or__3824__auto____77278 = (function (){var ps__77277 = cljs.core.parents.call(null,x);
while(true){
if((cljs.core.count.call(null,ps__77277) > 0))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__77277),y,prefer_table)))
{} else
{}
{
var G__77280 = cljs.core.rest.call(null,ps__77277);
ps__77277 = G__77280;
continue;
}
} else
{return null;
}
break;
}
})();
if(cljs.core.truth_(or__3824__auto____77278))
{return or__3824__auto____77278;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3824__auto____77282 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);
if(cljs.core.truth_(or__3824__auto____77282))
{return or__3824__auto____77282;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__77300 = cljs.core.reduce.call(null,(function (be,p__77292){
var vec__77293__77294 = p__77292;
var k__77295 = cljs.core.nth.call(null,vec__77293__77294,0,null);
var ___77296 = cljs.core.nth.call(null,vec__77293__77294,1,null);
var e__77297 = vec__77293__77294;
if(cljs.core.isa_QMARK_.call(null,dispatch_val,k__77295))
{var be2__77299 = (cljs.core.truth_((function (){var or__3824__auto____77298 = (be == null);
if(or__3824__auto____77298)
{return or__3824__auto____77298;
} else
{return cljs.core.dominates.call(null,k__77295,cljs.core.first.call(null,be),prefer_table);
}
})())?e__77297:be);
if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__77299),k__77295,prefer_table)))
{} else
{throw (new Error([cljs.core.str("Multiple methods in multimethod '"),cljs.core.str(name),cljs.core.str("' match dispatch value: "),cljs.core.str(dispatch_val),cljs.core.str(" -> "),cljs.core.str(k__77295),cljs.core.str(" and "),cljs.core.str(cljs.core.first.call(null,be2__77299)),cljs.core.str(", and neither is preferred")].join('')));
}
return be2__77299;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));
if(cljs.core.truth_(best_entry__77300))
{if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy)))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__77300));
return cljs.core.second.call(null,best_entry__77300);
} else
{cljs.core.reset_cache.call(null,method_cache,method_table,cached_hierarchy,hierarchy);
return find_and_cache_best_method.call(null,name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy);
}
} else
{return null;
}
});
cljs.core.IMultiFn = {};
cljs.core._reset = (function _reset(mf){
if((function (){var and__3822__auto____77305 = mf;
if(and__3822__auto____77305)
{return mf.cljs$core$IMultiFn$_reset$arity$1;
} else
{return and__3822__auto____77305;
}
})())
{return mf.cljs$core$IMultiFn$_reset$arity$1(mf);
} else
{var x__5531__auto____77306 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____77307 = (cljs.core._reset[goog.typeOf(x__5531__auto____77306)]);
if(or__3824__auto____77307)
{return or__3824__auto____77307;
} else
{var or__3824__auto____77308 = (cljs.core._reset["_"]);
if(or__3824__auto____77308)
{return or__3824__auto____77308;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if((function (){var and__3822__auto____77313 = mf;
if(and__3822__auto____77313)
{return mf.cljs$core$IMultiFn$_add_method$arity$3;
} else
{return and__3822__auto____77313;
}
})())
{return mf.cljs$core$IMultiFn$_add_method$arity$3(mf,dispatch_val,method);
} else
{var x__5531__auto____77314 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____77315 = (cljs.core._add_method[goog.typeOf(x__5531__auto____77314)]);
if(or__3824__auto____77315)
{return or__3824__auto____77315;
} else
{var or__3824__auto____77316 = (cljs.core._add_method["_"]);
if(or__3824__auto____77316)
{return or__3824__auto____77316;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if((function (){var and__3822__auto____77321 = mf;
if(and__3822__auto____77321)
{return mf.cljs$core$IMultiFn$_remove_method$arity$2;
} else
{return and__3822__auto____77321;
}
})())
{return mf.cljs$core$IMultiFn$_remove_method$arity$2(mf,dispatch_val);
} else
{var x__5531__auto____77322 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____77323 = (cljs.core._remove_method[goog.typeOf(x__5531__auto____77322)]);
if(or__3824__auto____77323)
{return or__3824__auto____77323;
} else
{var or__3824__auto____77324 = (cljs.core._remove_method["_"]);
if(or__3824__auto____77324)
{return or__3824__auto____77324;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if((function (){var and__3822__auto____77329 = mf;
if(and__3822__auto____77329)
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3;
} else
{return and__3822__auto____77329;
}
})())
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3(mf,dispatch_val,dispatch_val_y);
} else
{var x__5531__auto____77330 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____77331 = (cljs.core._prefer_method[goog.typeOf(x__5531__auto____77330)]);
if(or__3824__auto____77331)
{return or__3824__auto____77331;
} else
{var or__3824__auto____77332 = (cljs.core._prefer_method["_"]);
if(or__3824__auto____77332)
{return or__3824__auto____77332;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if((function (){var and__3822__auto____77337 = mf;
if(and__3822__auto____77337)
{return mf.cljs$core$IMultiFn$_get_method$arity$2;
} else
{return and__3822__auto____77337;
}
})())
{return mf.cljs$core$IMultiFn$_get_method$arity$2(mf,dispatch_val);
} else
{var x__5531__auto____77338 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____77339 = (cljs.core._get_method[goog.typeOf(x__5531__auto____77338)]);
if(or__3824__auto____77339)
{return or__3824__auto____77339;
} else
{var or__3824__auto____77340 = (cljs.core._get_method["_"]);
if(or__3824__auto____77340)
{return or__3824__auto____77340;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if((function (){var and__3822__auto____77345 = mf;
if(and__3822__auto____77345)
{return mf.cljs$core$IMultiFn$_methods$arity$1;
} else
{return and__3822__auto____77345;
}
})())
{return mf.cljs$core$IMultiFn$_methods$arity$1(mf);
} else
{var x__5531__auto____77346 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____77347 = (cljs.core._methods[goog.typeOf(x__5531__auto____77346)]);
if(or__3824__auto____77347)
{return or__3824__auto____77347;
} else
{var or__3824__auto____77348 = (cljs.core._methods["_"]);
if(or__3824__auto____77348)
{return or__3824__auto____77348;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if((function (){var and__3822__auto____77353 = mf;
if(and__3822__auto____77353)
{return mf.cljs$core$IMultiFn$_prefers$arity$1;
} else
{return and__3822__auto____77353;
}
})())
{return mf.cljs$core$IMultiFn$_prefers$arity$1(mf);
} else
{var x__5531__auto____77354 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____77355 = (cljs.core._prefers[goog.typeOf(x__5531__auto____77354)]);
if(or__3824__auto____77355)
{return or__3824__auto____77355;
} else
{var or__3824__auto____77356 = (cljs.core._prefers["_"]);
if(or__3824__auto____77356)
{return or__3824__auto____77356;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if((function (){var and__3822__auto____77361 = mf;
if(and__3822__auto____77361)
{return mf.cljs$core$IMultiFn$_dispatch$arity$2;
} else
{return and__3822__auto____77361;
}
})())
{return mf.cljs$core$IMultiFn$_dispatch$arity$2(mf,args);
} else
{var x__5531__auto____77362 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____77363 = (cljs.core._dispatch[goog.typeOf(x__5531__auto____77362)]);
if(or__3824__auto____77363)
{return or__3824__auto____77363;
} else
{var or__3824__auto____77364 = (cljs.core._dispatch["_"]);
if(or__3824__auto____77364)
{return or__3824__auto____77364;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__77367 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__77368 = cljs.core._get_method.call(null,mf,dispatch_val__77367);
if(cljs.core.truth_(target_fn__77368))
{} else
{throw (new Error([cljs.core.str("No method in multimethod '"),cljs.core.str(cljs.core.name),cljs.core.str("' for dispatch value: "),cljs.core.str(dispatch_val__77367)].join('')));
}
return cljs.core.apply.call(null,target_fn__77368,args);
});

goog.provide('cljs.core.MultiFn');

/**
* @constructor
*/
cljs.core.MultiFn = (function (name,dispatch_fn,default_dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
this.name = name;
this.dispatch_fn = dispatch_fn;
this.default_dispatch_val = default_dispatch_val;
this.hierarchy = hierarchy;
this.method_table = method_table;
this.prefer_table = prefer_table;
this.method_cache = method_cache;
this.cached_hierarchy = cached_hierarchy;
this.cljs$lang$protocol_mask$partition0$ = 4194304;
this.cljs$lang$protocol_mask$partition1$ = 256;
})
cljs.core.MultiFn.cljs$lang$type = true;
cljs.core.MultiFn.cljs$lang$ctorPrSeq = (function (this__5466__auto__){
return cljs.core.list.call(null,"cljs.core/MultiFn");
});
cljs.core.MultiFn.cljs$lang$ctorPrWriter = (function (this__5466__auto__,writer__5467__auto__){
return cljs.core._write.call(null,writer__5467__auto__,"cljs.core/MultiFn");
});
cljs.core.MultiFn.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this__77369 = this;
return goog.getUid(this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset$arity$1 = (function (mf){
var this__77370 = this;
cljs.core.swap_BANG_.call(null,this__77370.method_table,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__77370.method_cache,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__77370.prefer_table,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__77370.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method$arity$3 = (function (mf,dispatch_val,method){
var this__77371 = this;
cljs.core.swap_BANG_.call(null,this__77371.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__77371.method_cache,this__77371.method_table,this__77371.cached_hierarchy,this__77371.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method$arity$2 = (function (mf,dispatch_val){
var this__77372 = this;
cljs.core.swap_BANG_.call(null,this__77372.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__77372.method_cache,this__77372.method_table,this__77372.cached_hierarchy,this__77372.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method$arity$2 = (function (mf,dispatch_val){
var this__77373 = this;
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__77373.cached_hierarchy),cljs.core.deref.call(null,this__77373.hierarchy)))
{} else
{cljs.core.reset_cache.call(null,this__77373.method_cache,this__77373.method_table,this__77373.cached_hierarchy,this__77373.hierarchy);
}
var temp__3971__auto____77374 = cljs.core.deref.call(null,this__77373.method_cache).call(null,dispatch_val);
if(cljs.core.truth_(temp__3971__auto____77374))
{var target_fn__77375 = temp__3971__auto____77374;
return target_fn__77375;
} else
{var temp__3971__auto____77376 = cljs.core.find_and_cache_best_method.call(null,this__77373.name,dispatch_val,this__77373.hierarchy,this__77373.method_table,this__77373.prefer_table,this__77373.method_cache,this__77373.cached_hierarchy);
if(cljs.core.truth_(temp__3971__auto____77376))
{var target_fn__77377 = temp__3971__auto____77376;
return target_fn__77377;
} else
{return cljs.core.deref.call(null,this__77373.method_table).call(null,this__77373.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method$arity$3 = (function (mf,dispatch_val_x,dispatch_val_y){
var this__77378 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__77378.prefer_table)))
{throw (new Error([cljs.core.str("Preference conflict in multimethod '"),cljs.core.str(this__77378.name),cljs.core.str("': "),cljs.core.str(dispatch_val_y),cljs.core.str(" is already preferred to "),cljs.core.str(dispatch_val_x)].join('')));
} else
{}
cljs.core.swap_BANG_.call(null,this__77378.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core._lookup.call(null,old,dispatch_val_x,cljs.core.PersistentHashSet.EMPTY),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__77378.method_cache,this__77378.method_table,this__77378.cached_hierarchy,this__77378.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods$arity$1 = (function (mf){
var this__77379 = this;
return cljs.core.deref.call(null,this__77379.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers$arity$1 = (function (mf){
var this__77380 = this;
return cljs.core.deref.call(null,this__77380.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch$arity$2 = (function (mf,args){
var this__77381 = this;
return cljs.core.do_dispatch.call(null,mf,this__77381.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__77383__delegate = function (_,args){
var self__77382 = this;
return cljs.core._dispatch.call(null,self__77382,args);
};
var G__77383 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__77383__delegate.call(this, _, args);
};
G__77383.cljs$lang$maxFixedArity = 1;
G__77383.cljs$lang$applyTo = (function (arglist__77384){
var _ = cljs.core.first(arglist__77384);
var args = cljs.core.rest(arglist__77384);
return G__77383__delegate(_, args);
});
G__77383.cljs$lang$arity$variadic = G__77383__delegate;
return G__77383;
})()
;
cljs.core.MultiFn.prototype.apply = (function (_,args){
var self__77385 = this;
return cljs.core._dispatch.call(null,self__77385,args);
});
/**
* Removes all of the methods of multimethod.
*/
cljs.core.remove_all_methods = (function remove_all_methods(multifn){
return cljs.core._reset.call(null,multifn);
});
/**
* Removes the method of multimethod associated with dispatch-value.
*/
cljs.core.remove_method = (function remove_method(multifn,dispatch_val){
return cljs.core._remove_method.call(null,multifn,dispatch_val);
});
/**
* Causes the multimethod to prefer matches of dispatch-val-x over dispatch-val-y
* when there is a conflict
*/
cljs.core.prefer_method = (function prefer_method(multifn,dispatch_val_x,dispatch_val_y){
return cljs.core._prefer_method.call(null,multifn,dispatch_val_x,dispatch_val_y);
});
/**
* Given a multimethod, returns a map of dispatch values -> dispatch fns
*/
cljs.core.methods$ = (function methods$(multifn){
return cljs.core._methods.call(null,multifn);
});
/**
* Given a multimethod and a dispatch value, returns the dispatch fn
* that would apply to that value, or nil if none apply and no default
*/
cljs.core.get_method = (function get_method(multifn,dispatch_val){
return cljs.core._get_method.call(null,multifn,dispatch_val);
});
/**
* Given a multimethod, returns a map of preferred value -> set of other values
*/
cljs.core.prefers = (function prefers(multifn){
return cljs.core._prefers.call(null,multifn);
});

goog.provide('cljs.core.UUID');

/**
* @constructor
*/
cljs.core.UUID = (function (uuid){
this.uuid = uuid;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2690646016;
})
cljs.core.UUID.cljs$lang$type = true;
cljs.core.UUID.cljs$lang$ctorPrSeq = (function (this__5466__auto__){
return cljs.core.list.call(null,"cljs.core/UUID");
});
cljs.core.UUID.cljs$lang$ctorPrWriter = (function (this__5466__auto__,writer__5467__auto__){
return cljs.core._write.call(null,writer__5467__auto__,"cljs.core/UUID");
});
cljs.core.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this__77386 = this;
return goog.string.hashCode(cljs.core.pr_str.call(null,this$));
});
cljs.core.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_77388,writer,_){
var this__77387 = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#uuid \""),cljs.core.str(this__77387.uuid),cljs.core.str("\"")].join(''));
});
cljs.core.UUID.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (_77390,_){
var this__77389 = this;
return cljs.core.list.call(null,[cljs.core.str("#uuid \""),cljs.core.str(this__77389.uuid),cljs.core.str("\"")].join(''));
});
cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var this__77391 = this;
var and__3822__auto____77392 = cljs.core.instance_QMARK_.call(null,cljs.core.UUID,other);
if(and__3822__auto____77392)
{return (this__77391.uuid === other.uuid);
} else
{return and__3822__auto____77392;
}
});
cljs.core.UUID.prototype.toString = (function (){
var this__77393 = this;
var this__77394 = this;
return cljs.core.pr_str.call(null,this__77394);
});
cljs.core.UUID;

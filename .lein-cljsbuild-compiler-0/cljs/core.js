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
var x__9493 = (((x == null))?null:x);
if((p[goog.typeOf(x__9493)]))
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
var G__9494__delegate = function (array,i,idxs){
return cljs.core.apply.call(null,aget,aget.call(null,array,i),idxs);
};
var G__9494 = function (array,i,var_args){
var idxs = null;
if (goog.isDef(var_args)) {
  idxs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9494__delegate.call(this, array, i, idxs);
};
G__9494.cljs$lang$maxFixedArity = 2;
G__9494.cljs$lang$applyTo = (function (arglist__9495){
var array = cljs.core.first(arglist__9495);
var i = cljs.core.first(cljs.core.next(arglist__9495));
var idxs = cljs.core.rest(cljs.core.next(arglist__9495));
return G__9494__delegate(array, i, idxs);
});
G__9494.cljs$lang$arity$variadic = G__9494__delegate;
return G__9494;
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
if((function (){var and__3822__auto____9580 = this$;
if(and__3822__auto____9580)
{return this$.cljs$core$IFn$_invoke$arity$1;
} else
{return and__3822__auto____9580;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$1(this$);
} else
{var x__5239__auto____9581 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____9582 = (cljs.core._invoke[goog.typeOf(x__5239__auto____9581)]);
if(or__3824__auto____9582)
{return or__3824__auto____9582;
} else
{var or__3824__auto____9583 = (cljs.core._invoke["_"]);
if(or__3824__auto____9583)
{return or__3824__auto____9583;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__2 = (function (this$,a){
if((function (){var and__3822__auto____9584 = this$;
if(and__3822__auto____9584)
{return this$.cljs$core$IFn$_invoke$arity$2;
} else
{return and__3822__auto____9584;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$2(this$,a);
} else
{var x__5239__auto____9585 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____9586 = (cljs.core._invoke[goog.typeOf(x__5239__auto____9585)]);
if(or__3824__auto____9586)
{return or__3824__auto____9586;
} else
{var or__3824__auto____9587 = (cljs.core._invoke["_"]);
if(or__3824__auto____9587)
{return or__3824__auto____9587;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__3 = (function (this$,a,b){
if((function (){var and__3822__auto____9588 = this$;
if(and__3822__auto____9588)
{return this$.cljs$core$IFn$_invoke$arity$3;
} else
{return and__3822__auto____9588;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$3(this$,a,b);
} else
{var x__5239__auto____9589 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____9590 = (cljs.core._invoke[goog.typeOf(x__5239__auto____9589)]);
if(or__3824__auto____9590)
{return or__3824__auto____9590;
} else
{var or__3824__auto____9591 = (cljs.core._invoke["_"]);
if(or__3824__auto____9591)
{return or__3824__auto____9591;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__4 = (function (this$,a,b,c){
if((function (){var and__3822__auto____9592 = this$;
if(and__3822__auto____9592)
{return this$.cljs$core$IFn$_invoke$arity$4;
} else
{return and__3822__auto____9592;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$4(this$,a,b,c);
} else
{var x__5239__auto____9593 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____9594 = (cljs.core._invoke[goog.typeOf(x__5239__auto____9593)]);
if(or__3824__auto____9594)
{return or__3824__auto____9594;
} else
{var or__3824__auto____9595 = (cljs.core._invoke["_"]);
if(or__3824__auto____9595)
{return or__3824__auto____9595;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__5 = (function (this$,a,b,c,d){
if((function (){var and__3822__auto____9596 = this$;
if(and__3822__auto____9596)
{return this$.cljs$core$IFn$_invoke$arity$5;
} else
{return and__3822__auto____9596;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$5(this$,a,b,c,d);
} else
{var x__5239__auto____9597 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____9598 = (cljs.core._invoke[goog.typeOf(x__5239__auto____9597)]);
if(or__3824__auto____9598)
{return or__3824__auto____9598;
} else
{var or__3824__auto____9599 = (cljs.core._invoke["_"]);
if(or__3824__auto____9599)
{return or__3824__auto____9599;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__6 = (function (this$,a,b,c,d,e){
if((function (){var and__3822__auto____9600 = this$;
if(and__3822__auto____9600)
{return this$.cljs$core$IFn$_invoke$arity$6;
} else
{return and__3822__auto____9600;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$6(this$,a,b,c,d,e);
} else
{var x__5239__auto____9601 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____9602 = (cljs.core._invoke[goog.typeOf(x__5239__auto____9601)]);
if(or__3824__auto____9602)
{return or__3824__auto____9602;
} else
{var or__3824__auto____9603 = (cljs.core._invoke["_"]);
if(or__3824__auto____9603)
{return or__3824__auto____9603;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7 = (function (this$,a,b,c,d,e,f){
if((function (){var and__3822__auto____9604 = this$;
if(and__3822__auto____9604)
{return this$.cljs$core$IFn$_invoke$arity$7;
} else
{return and__3822__auto____9604;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$7(this$,a,b,c,d,e,f);
} else
{var x__5239__auto____9605 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____9606 = (cljs.core._invoke[goog.typeOf(x__5239__auto____9605)]);
if(or__3824__auto____9606)
{return or__3824__auto____9606;
} else
{var or__3824__auto____9607 = (cljs.core._invoke["_"]);
if(or__3824__auto____9607)
{return or__3824__auto____9607;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__8 = (function (this$,a,b,c,d,e,f,g){
if((function (){var and__3822__auto____9608 = this$;
if(and__3822__auto____9608)
{return this$.cljs$core$IFn$_invoke$arity$8;
} else
{return and__3822__auto____9608;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$8(this$,a,b,c,d,e,f,g);
} else
{var x__5239__auto____9609 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____9610 = (cljs.core._invoke[goog.typeOf(x__5239__auto____9609)]);
if(or__3824__auto____9610)
{return or__3824__auto____9610;
} else
{var or__3824__auto____9611 = (cljs.core._invoke["_"]);
if(or__3824__auto____9611)
{return or__3824__auto____9611;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__9 = (function (this$,a,b,c,d,e,f,g,h){
if((function (){var and__3822__auto____9612 = this$;
if(and__3822__auto____9612)
{return this$.cljs$core$IFn$_invoke$arity$9;
} else
{return and__3822__auto____9612;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$9(this$,a,b,c,d,e,f,g,h);
} else
{var x__5239__auto____9613 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____9614 = (cljs.core._invoke[goog.typeOf(x__5239__auto____9613)]);
if(or__3824__auto____9614)
{return or__3824__auto____9614;
} else
{var or__3824__auto____9615 = (cljs.core._invoke["_"]);
if(or__3824__auto____9615)
{return or__3824__auto____9615;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__10 = (function (this$,a,b,c,d,e,f,g,h,i){
if((function (){var and__3822__auto____9616 = this$;
if(and__3822__auto____9616)
{return this$.cljs$core$IFn$_invoke$arity$10;
} else
{return and__3822__auto____9616;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$10(this$,a,b,c,d,e,f,g,h,i);
} else
{var x__5239__auto____9617 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____9618 = (cljs.core._invoke[goog.typeOf(x__5239__auto____9617)]);
if(or__3824__auto____9618)
{return or__3824__auto____9618;
} else
{var or__3824__auto____9619 = (cljs.core._invoke["_"]);
if(or__3824__auto____9619)
{return or__3824__auto____9619;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__11 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if((function (){var and__3822__auto____9620 = this$;
if(and__3822__auto____9620)
{return this$.cljs$core$IFn$_invoke$arity$11;
} else
{return and__3822__auto____9620;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$11(this$,a,b,c,d,e,f,g,h,i,j);
} else
{var x__5239__auto____9621 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____9622 = (cljs.core._invoke[goog.typeOf(x__5239__auto____9621)]);
if(or__3824__auto____9622)
{return or__3824__auto____9622;
} else
{var or__3824__auto____9623 = (cljs.core._invoke["_"]);
if(or__3824__auto____9623)
{return or__3824__auto____9623;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__12 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if((function (){var and__3822__auto____9624 = this$;
if(and__3822__auto____9624)
{return this$.cljs$core$IFn$_invoke$arity$12;
} else
{return and__3822__auto____9624;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$12(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{var x__5239__auto____9625 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____9626 = (cljs.core._invoke[goog.typeOf(x__5239__auto____9625)]);
if(or__3824__auto____9626)
{return or__3824__auto____9626;
} else
{var or__3824__auto____9627 = (cljs.core._invoke["_"]);
if(or__3824__auto____9627)
{return or__3824__auto____9627;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__13 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if((function (){var and__3822__auto____9628 = this$;
if(and__3822__auto____9628)
{return this$.cljs$core$IFn$_invoke$arity$13;
} else
{return and__3822__auto____9628;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$13(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{var x__5239__auto____9629 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____9630 = (cljs.core._invoke[goog.typeOf(x__5239__auto____9629)]);
if(or__3824__auto____9630)
{return or__3824__auto____9630;
} else
{var or__3824__auto____9631 = (cljs.core._invoke["_"]);
if(or__3824__auto____9631)
{return or__3824__auto____9631;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__14 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if((function (){var and__3822__auto____9632 = this$;
if(and__3822__auto____9632)
{return this$.cljs$core$IFn$_invoke$arity$14;
} else
{return and__3822__auto____9632;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$14(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{var x__5239__auto____9633 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____9634 = (cljs.core._invoke[goog.typeOf(x__5239__auto____9633)]);
if(or__3824__auto____9634)
{return or__3824__auto____9634;
} else
{var or__3824__auto____9635 = (cljs.core._invoke["_"]);
if(or__3824__auto____9635)
{return or__3824__auto____9635;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__15 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if((function (){var and__3822__auto____9636 = this$;
if(and__3822__auto____9636)
{return this$.cljs$core$IFn$_invoke$arity$15;
} else
{return and__3822__auto____9636;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$15(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{var x__5239__auto____9637 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____9638 = (cljs.core._invoke[goog.typeOf(x__5239__auto____9637)]);
if(or__3824__auto____9638)
{return or__3824__auto____9638;
} else
{var or__3824__auto____9639 = (cljs.core._invoke["_"]);
if(or__3824__auto____9639)
{return or__3824__auto____9639;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__16 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if((function (){var and__3822__auto____9640 = this$;
if(and__3822__auto____9640)
{return this$.cljs$core$IFn$_invoke$arity$16;
} else
{return and__3822__auto____9640;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$16(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{var x__5239__auto____9641 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____9642 = (cljs.core._invoke[goog.typeOf(x__5239__auto____9641)]);
if(or__3824__auto____9642)
{return or__3824__auto____9642;
} else
{var or__3824__auto____9643 = (cljs.core._invoke["_"]);
if(or__3824__auto____9643)
{return or__3824__auto____9643;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__17 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if((function (){var and__3822__auto____9644 = this$;
if(and__3822__auto____9644)
{return this$.cljs$core$IFn$_invoke$arity$17;
} else
{return and__3822__auto____9644;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$17(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{var x__5239__auto____9645 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____9646 = (cljs.core._invoke[goog.typeOf(x__5239__auto____9645)]);
if(or__3824__auto____9646)
{return or__3824__auto____9646;
} else
{var or__3824__auto____9647 = (cljs.core._invoke["_"]);
if(or__3824__auto____9647)
{return or__3824__auto____9647;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__18 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if((function (){var and__3822__auto____9648 = this$;
if(and__3822__auto____9648)
{return this$.cljs$core$IFn$_invoke$arity$18;
} else
{return and__3822__auto____9648;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$18(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{var x__5239__auto____9649 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____9650 = (cljs.core._invoke[goog.typeOf(x__5239__auto____9649)]);
if(or__3824__auto____9650)
{return or__3824__auto____9650;
} else
{var or__3824__auto____9651 = (cljs.core._invoke["_"]);
if(or__3824__auto____9651)
{return or__3824__auto____9651;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__19 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if((function (){var and__3822__auto____9652 = this$;
if(and__3822__auto____9652)
{return this$.cljs$core$IFn$_invoke$arity$19;
} else
{return and__3822__auto____9652;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$19(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{var x__5239__auto____9653 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____9654 = (cljs.core._invoke[goog.typeOf(x__5239__auto____9653)]);
if(or__3824__auto____9654)
{return or__3824__auto____9654;
} else
{var or__3824__auto____9655 = (cljs.core._invoke["_"]);
if(or__3824__auto____9655)
{return or__3824__auto____9655;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__20 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if((function (){var and__3822__auto____9656 = this$;
if(and__3822__auto____9656)
{return this$.cljs$core$IFn$_invoke$arity$20;
} else
{return and__3822__auto____9656;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$20(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{var x__5239__auto____9657 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____9658 = (cljs.core._invoke[goog.typeOf(x__5239__auto____9657)]);
if(or__3824__auto____9658)
{return or__3824__auto____9658;
} else
{var or__3824__auto____9659 = (cljs.core._invoke["_"]);
if(or__3824__auto____9659)
{return or__3824__auto____9659;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__21 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if((function (){var and__3822__auto____9660 = this$;
if(and__3822__auto____9660)
{return this$.cljs$core$IFn$_invoke$arity$21;
} else
{return and__3822__auto____9660;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$21(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{var x__5239__auto____9661 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____9662 = (cljs.core._invoke[goog.typeOf(x__5239__auto____9661)]);
if(or__3824__auto____9662)
{return or__3824__auto____9662;
} else
{var or__3824__auto____9663 = (cljs.core._invoke["_"]);
if(or__3824__auto____9663)
{return or__3824__auto____9663;
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
if((function (){var and__3822__auto____9668 = coll;
if(and__3822__auto____9668)
{return coll.cljs$core$ICounted$_count$arity$1;
} else
{return and__3822__auto____9668;
}
})())
{return coll.cljs$core$ICounted$_count$arity$1(coll);
} else
{var x__5239__auto____9669 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____9670 = (cljs.core._count[goog.typeOf(x__5239__auto____9669)]);
if(or__3824__auto____9670)
{return or__3824__auto____9670;
} else
{var or__3824__auto____9671 = (cljs.core._count["_"]);
if(or__3824__auto____9671)
{return or__3824__auto____9671;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if((function (){var and__3822__auto____9676 = coll;
if(and__3822__auto____9676)
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1;
} else
{return and__3822__auto____9676;
}
})())
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{var x__5239__auto____9677 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____9678 = (cljs.core._empty[goog.typeOf(x__5239__auto____9677)]);
if(or__3824__auto____9678)
{return or__3824__auto____9678;
} else
{var or__3824__auto____9679 = (cljs.core._empty["_"]);
if(or__3824__auto____9679)
{return or__3824__auto____9679;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if((function (){var and__3822__auto____9684 = coll;
if(and__3822__auto____9684)
{return coll.cljs$core$ICollection$_conj$arity$2;
} else
{return and__3822__auto____9684;
}
})())
{return coll.cljs$core$ICollection$_conj$arity$2(coll,o);
} else
{var x__5239__auto____9685 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____9686 = (cljs.core._conj[goog.typeOf(x__5239__auto____9685)]);
if(or__3824__auto____9686)
{return or__3824__auto____9686;
} else
{var or__3824__auto____9687 = (cljs.core._conj["_"]);
if(or__3824__auto____9687)
{return or__3824__auto____9687;
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
if((function (){var and__3822__auto____9696 = coll;
if(and__3822__auto____9696)
{return coll.cljs$core$IIndexed$_nth$arity$2;
} else
{return and__3822__auto____9696;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{var x__5239__auto____9697 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____9698 = (cljs.core._nth[goog.typeOf(x__5239__auto____9697)]);
if(or__3824__auto____9698)
{return or__3824__auto____9698;
} else
{var or__3824__auto____9699 = (cljs.core._nth["_"]);
if(or__3824__auto____9699)
{return or__3824__auto____9699;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__3 = (function (coll,n,not_found){
if((function (){var and__3822__auto____9700 = coll;
if(and__3822__auto____9700)
{return coll.cljs$core$IIndexed$_nth$arity$3;
} else
{return and__3822__auto____9700;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$3(coll,n,not_found);
} else
{var x__5239__auto____9701 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____9702 = (cljs.core._nth[goog.typeOf(x__5239__auto____9701)]);
if(or__3824__auto____9702)
{return or__3824__auto____9702;
} else
{var or__3824__auto____9703 = (cljs.core._nth["_"]);
if(or__3824__auto____9703)
{return or__3824__auto____9703;
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
if((function (){var and__3822__auto____9708 = coll;
if(and__3822__auto____9708)
{return coll.cljs$core$ISeq$_first$arity$1;
} else
{return and__3822__auto____9708;
}
})())
{return coll.cljs$core$ISeq$_first$arity$1(coll);
} else
{var x__5239__auto____9709 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____9710 = (cljs.core._first[goog.typeOf(x__5239__auto____9709)]);
if(or__3824__auto____9710)
{return or__3824__auto____9710;
} else
{var or__3824__auto____9711 = (cljs.core._first["_"]);
if(or__3824__auto____9711)
{return or__3824__auto____9711;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if((function (){var and__3822__auto____9716 = coll;
if(and__3822__auto____9716)
{return coll.cljs$core$ISeq$_rest$arity$1;
} else
{return and__3822__auto____9716;
}
})())
{return coll.cljs$core$ISeq$_rest$arity$1(coll);
} else
{var x__5239__auto____9717 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____9718 = (cljs.core._rest[goog.typeOf(x__5239__auto____9717)]);
if(or__3824__auto____9718)
{return or__3824__auto____9718;
} else
{var or__3824__auto____9719 = (cljs.core._rest["_"]);
if(or__3824__auto____9719)
{return or__3824__auto____9719;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.INext = {};
cljs.core._next = (function _next(coll){
if((function (){var and__3822__auto____9724 = coll;
if(and__3822__auto____9724)
{return coll.cljs$core$INext$_next$arity$1;
} else
{return and__3822__auto____9724;
}
})())
{return coll.cljs$core$INext$_next$arity$1(coll);
} else
{var x__5239__auto____9725 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____9726 = (cljs.core._next[goog.typeOf(x__5239__auto____9725)]);
if(or__3824__auto____9726)
{return or__3824__auto____9726;
} else
{var or__3824__auto____9727 = (cljs.core._next["_"]);
if(or__3824__auto____9727)
{return or__3824__auto____9727;
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
if((function (){var and__3822__auto____9736 = o;
if(and__3822__auto____9736)
{return o.cljs$core$ILookup$_lookup$arity$2;
} else
{return and__3822__auto____9736;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$2(o,k);
} else
{var x__5239__auto____9737 = (((o == null))?null:o);
return (function (){var or__3824__auto____9738 = (cljs.core._lookup[goog.typeOf(x__5239__auto____9737)]);
if(or__3824__auto____9738)
{return or__3824__auto____9738;
} else
{var or__3824__auto____9739 = (cljs.core._lookup["_"]);
if(or__3824__auto____9739)
{return or__3824__auto____9739;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__3 = (function (o,k,not_found){
if((function (){var and__3822__auto____9740 = o;
if(and__3822__auto____9740)
{return o.cljs$core$ILookup$_lookup$arity$3;
} else
{return and__3822__auto____9740;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$3(o,k,not_found);
} else
{var x__5239__auto____9741 = (((o == null))?null:o);
return (function (){var or__3824__auto____9742 = (cljs.core._lookup[goog.typeOf(x__5239__auto____9741)]);
if(or__3824__auto____9742)
{return or__3824__auto____9742;
} else
{var or__3824__auto____9743 = (cljs.core._lookup["_"]);
if(or__3824__auto____9743)
{return or__3824__auto____9743;
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
if((function (){var and__3822__auto____9748 = coll;
if(and__3822__auto____9748)
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2;
} else
{return and__3822__auto____9748;
}
})())
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2(coll,k);
} else
{var x__5239__auto____9749 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____9750 = (cljs.core._contains_key_QMARK_[goog.typeOf(x__5239__auto____9749)]);
if(or__3824__auto____9750)
{return or__3824__auto____9750;
} else
{var or__3824__auto____9751 = (cljs.core._contains_key_QMARK_["_"]);
if(or__3824__auto____9751)
{return or__3824__auto____9751;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if((function (){var and__3822__auto____9756 = coll;
if(and__3822__auto____9756)
{return coll.cljs$core$IAssociative$_assoc$arity$3;
} else
{return and__3822__auto____9756;
}
})())
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,k,v);
} else
{var x__5239__auto____9757 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____9758 = (cljs.core._assoc[goog.typeOf(x__5239__auto____9757)]);
if(or__3824__auto____9758)
{return or__3824__auto____9758;
} else
{var or__3824__auto____9759 = (cljs.core._assoc["_"]);
if(or__3824__auto____9759)
{return or__3824__auto____9759;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if((function (){var and__3822__auto____9764 = coll;
if(and__3822__auto____9764)
{return coll.cljs$core$IMap$_dissoc$arity$2;
} else
{return and__3822__auto____9764;
}
})())
{return coll.cljs$core$IMap$_dissoc$arity$2(coll,k);
} else
{var x__5239__auto____9765 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____9766 = (cljs.core._dissoc[goog.typeOf(x__5239__auto____9765)]);
if(or__3824__auto____9766)
{return or__3824__auto____9766;
} else
{var or__3824__auto____9767 = (cljs.core._dissoc["_"]);
if(or__3824__auto____9767)
{return or__3824__auto____9767;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.IMapEntry = {};
cljs.core._key = (function _key(coll){
if((function (){var and__3822__auto____9772 = coll;
if(and__3822__auto____9772)
{return coll.cljs$core$IMapEntry$_key$arity$1;
} else
{return and__3822__auto____9772;
}
})())
{return coll.cljs$core$IMapEntry$_key$arity$1(coll);
} else
{var x__5239__auto____9773 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____9774 = (cljs.core._key[goog.typeOf(x__5239__auto____9773)]);
if(or__3824__auto____9774)
{return or__3824__auto____9774;
} else
{var or__3824__auto____9775 = (cljs.core._key["_"]);
if(or__3824__auto____9775)
{return or__3824__auto____9775;
} else
{throw cljs.core.missing_protocol.call(null,"IMapEntry.-key",coll);
}
}
})().call(null,coll);
}
});
cljs.core._val = (function _val(coll){
if((function (){var and__3822__auto____9780 = coll;
if(and__3822__auto____9780)
{return coll.cljs$core$IMapEntry$_val$arity$1;
} else
{return and__3822__auto____9780;
}
})())
{return coll.cljs$core$IMapEntry$_val$arity$1(coll);
} else
{var x__5239__auto____9781 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____9782 = (cljs.core._val[goog.typeOf(x__5239__auto____9781)]);
if(or__3824__auto____9782)
{return or__3824__auto____9782;
} else
{var or__3824__auto____9783 = (cljs.core._val["_"]);
if(or__3824__auto____9783)
{return or__3824__auto____9783;
} else
{throw cljs.core.missing_protocol.call(null,"IMapEntry.-val",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if((function (){var and__3822__auto____9788 = coll;
if(and__3822__auto____9788)
{return coll.cljs$core$ISet$_disjoin$arity$2;
} else
{return and__3822__auto____9788;
}
})())
{return coll.cljs$core$ISet$_disjoin$arity$2(coll,v);
} else
{var x__5239__auto____9789 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____9790 = (cljs.core._disjoin[goog.typeOf(x__5239__auto____9789)]);
if(or__3824__auto____9790)
{return or__3824__auto____9790;
} else
{var or__3824__auto____9791 = (cljs.core._disjoin["_"]);
if(or__3824__auto____9791)
{return or__3824__auto____9791;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if((function (){var and__3822__auto____9796 = coll;
if(and__3822__auto____9796)
{return coll.cljs$core$IStack$_peek$arity$1;
} else
{return and__3822__auto____9796;
}
})())
{return coll.cljs$core$IStack$_peek$arity$1(coll);
} else
{var x__5239__auto____9797 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____9798 = (cljs.core._peek[goog.typeOf(x__5239__auto____9797)]);
if(or__3824__auto____9798)
{return or__3824__auto____9798;
} else
{var or__3824__auto____9799 = (cljs.core._peek["_"]);
if(or__3824__auto____9799)
{return or__3824__auto____9799;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if((function (){var and__3822__auto____9804 = coll;
if(and__3822__auto____9804)
{return coll.cljs$core$IStack$_pop$arity$1;
} else
{return and__3822__auto____9804;
}
})())
{return coll.cljs$core$IStack$_pop$arity$1(coll);
} else
{var x__5239__auto____9805 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____9806 = (cljs.core._pop[goog.typeOf(x__5239__auto____9805)]);
if(or__3824__auto____9806)
{return or__3824__auto____9806;
} else
{var or__3824__auto____9807 = (cljs.core._pop["_"]);
if(or__3824__auto____9807)
{return or__3824__auto____9807;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if((function (){var and__3822__auto____9812 = coll;
if(and__3822__auto____9812)
{return coll.cljs$core$IVector$_assoc_n$arity$3;
} else
{return and__3822__auto____9812;
}
})())
{return coll.cljs$core$IVector$_assoc_n$arity$3(coll,n,val);
} else
{var x__5239__auto____9813 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____9814 = (cljs.core._assoc_n[goog.typeOf(x__5239__auto____9813)]);
if(or__3824__auto____9814)
{return or__3824__auto____9814;
} else
{var or__3824__auto____9815 = (cljs.core._assoc_n["_"]);
if(or__3824__auto____9815)
{return or__3824__auto____9815;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if((function (){var and__3822__auto____9820 = o;
if(and__3822__auto____9820)
{return o.cljs$core$IDeref$_deref$arity$1;
} else
{return and__3822__auto____9820;
}
})())
{return o.cljs$core$IDeref$_deref$arity$1(o);
} else
{var x__5239__auto____9821 = (((o == null))?null:o);
return (function (){var or__3824__auto____9822 = (cljs.core._deref[goog.typeOf(x__5239__auto____9821)]);
if(or__3824__auto____9822)
{return or__3824__auto____9822;
} else
{var or__3824__auto____9823 = (cljs.core._deref["_"]);
if(or__3824__auto____9823)
{return or__3824__auto____9823;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if((function (){var and__3822__auto____9828 = o;
if(and__3822__auto____9828)
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3;
} else
{return and__3822__auto____9828;
}
})())
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3(o,msec,timeout_val);
} else
{var x__5239__auto____9829 = (((o == null))?null:o);
return (function (){var or__3824__auto____9830 = (cljs.core._deref_with_timeout[goog.typeOf(x__5239__auto____9829)]);
if(or__3824__auto____9830)
{return or__3824__auto____9830;
} else
{var or__3824__auto____9831 = (cljs.core._deref_with_timeout["_"]);
if(or__3824__auto____9831)
{return or__3824__auto____9831;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if((function (){var and__3822__auto____9836 = o;
if(and__3822__auto____9836)
{return o.cljs$core$IMeta$_meta$arity$1;
} else
{return and__3822__auto____9836;
}
})())
{return o.cljs$core$IMeta$_meta$arity$1(o);
} else
{var x__5239__auto____9837 = (((o == null))?null:o);
return (function (){var or__3824__auto____9838 = (cljs.core._meta[goog.typeOf(x__5239__auto____9837)]);
if(or__3824__auto____9838)
{return or__3824__auto____9838;
} else
{var or__3824__auto____9839 = (cljs.core._meta["_"]);
if(or__3824__auto____9839)
{return or__3824__auto____9839;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if((function (){var and__3822__auto____9844 = o;
if(and__3822__auto____9844)
{return o.cljs$core$IWithMeta$_with_meta$arity$2;
} else
{return and__3822__auto____9844;
}
})())
{return o.cljs$core$IWithMeta$_with_meta$arity$2(o,meta);
} else
{var x__5239__auto____9845 = (((o == null))?null:o);
return (function (){var or__3824__auto____9846 = (cljs.core._with_meta[goog.typeOf(x__5239__auto____9845)]);
if(or__3824__auto____9846)
{return or__3824__auto____9846;
} else
{var or__3824__auto____9847 = (cljs.core._with_meta["_"]);
if(or__3824__auto____9847)
{return or__3824__auto____9847;
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
if((function (){var and__3822__auto____9856 = coll;
if(and__3822__auto____9856)
{return coll.cljs$core$IReduce$_reduce$arity$2;
} else
{return and__3822__auto____9856;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$2(coll,f);
} else
{var x__5239__auto____9857 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____9858 = (cljs.core._reduce[goog.typeOf(x__5239__auto____9857)]);
if(or__3824__auto____9858)
{return or__3824__auto____9858;
} else
{var or__3824__auto____9859 = (cljs.core._reduce["_"]);
if(or__3824__auto____9859)
{return or__3824__auto____9859;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__3 = (function (coll,f,start){
if((function (){var and__3822__auto____9860 = coll;
if(and__3822__auto____9860)
{return coll.cljs$core$IReduce$_reduce$arity$3;
} else
{return and__3822__auto____9860;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$3(coll,f,start);
} else
{var x__5239__auto____9861 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____9862 = (cljs.core._reduce[goog.typeOf(x__5239__auto____9861)]);
if(or__3824__auto____9862)
{return or__3824__auto____9862;
} else
{var or__3824__auto____9863 = (cljs.core._reduce["_"]);
if(or__3824__auto____9863)
{return or__3824__auto____9863;
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
if((function (){var and__3822__auto____9868 = coll;
if(and__3822__auto____9868)
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3;
} else
{return and__3822__auto____9868;
}
})())
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3(coll,f,init);
} else
{var x__5239__auto____9869 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____9870 = (cljs.core._kv_reduce[goog.typeOf(x__5239__auto____9869)]);
if(or__3824__auto____9870)
{return or__3824__auto____9870;
} else
{var or__3824__auto____9871 = (cljs.core._kv_reduce["_"]);
if(or__3824__auto____9871)
{return or__3824__auto____9871;
} else
{throw cljs.core.missing_protocol.call(null,"IKVReduce.-kv-reduce",coll);
}
}
})().call(null,coll,f,init);
}
});
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if((function (){var and__3822__auto____9876 = o;
if(and__3822__auto____9876)
{return o.cljs$core$IEquiv$_equiv$arity$2;
} else
{return and__3822__auto____9876;
}
})())
{return o.cljs$core$IEquiv$_equiv$arity$2(o,other);
} else
{var x__5239__auto____9877 = (((o == null))?null:o);
return (function (){var or__3824__auto____9878 = (cljs.core._equiv[goog.typeOf(x__5239__auto____9877)]);
if(or__3824__auto____9878)
{return or__3824__auto____9878;
} else
{var or__3824__auto____9879 = (cljs.core._equiv["_"]);
if(or__3824__auto____9879)
{return or__3824__auto____9879;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if((function (){var and__3822__auto____9884 = o;
if(and__3822__auto____9884)
{return o.cljs$core$IHash$_hash$arity$1;
} else
{return and__3822__auto____9884;
}
})())
{return o.cljs$core$IHash$_hash$arity$1(o);
} else
{var x__5239__auto____9885 = (((o == null))?null:o);
return (function (){var or__3824__auto____9886 = (cljs.core._hash[goog.typeOf(x__5239__auto____9885)]);
if(or__3824__auto____9886)
{return or__3824__auto____9886;
} else
{var or__3824__auto____9887 = (cljs.core._hash["_"]);
if(or__3824__auto____9887)
{return or__3824__auto____9887;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if((function (){var and__3822__auto____9892 = o;
if(and__3822__auto____9892)
{return o.cljs$core$ISeqable$_seq$arity$1;
} else
{return and__3822__auto____9892;
}
})())
{return o.cljs$core$ISeqable$_seq$arity$1(o);
} else
{var x__5239__auto____9893 = (((o == null))?null:o);
return (function (){var or__3824__auto____9894 = (cljs.core._seq[goog.typeOf(x__5239__auto____9893)]);
if(or__3824__auto____9894)
{return or__3824__auto____9894;
} else
{var or__3824__auto____9895 = (cljs.core._seq["_"]);
if(or__3824__auto____9895)
{return or__3824__auto____9895;
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
if((function (){var and__3822__auto____9900 = coll;
if(and__3822__auto____9900)
{return coll.cljs$core$IReversible$_rseq$arity$1;
} else
{return and__3822__auto____9900;
}
})())
{return coll.cljs$core$IReversible$_rseq$arity$1(coll);
} else
{var x__5239__auto____9901 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____9902 = (cljs.core._rseq[goog.typeOf(x__5239__auto____9901)]);
if(or__3824__auto____9902)
{return or__3824__auto____9902;
} else
{var or__3824__auto____9903 = (cljs.core._rseq["_"]);
if(or__3824__auto____9903)
{return or__3824__auto____9903;
} else
{throw cljs.core.missing_protocol.call(null,"IReversible.-rseq",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ISorted = {};
cljs.core._sorted_seq = (function _sorted_seq(coll,ascending_QMARK_){
if((function (){var and__3822__auto____9908 = coll;
if(and__3822__auto____9908)
{return coll.cljs$core$ISorted$_sorted_seq$arity$2;
} else
{return and__3822__auto____9908;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq$arity$2(coll,ascending_QMARK_);
} else
{var x__5239__auto____9909 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____9910 = (cljs.core._sorted_seq[goog.typeOf(x__5239__auto____9909)]);
if(or__3824__auto____9910)
{return or__3824__auto____9910;
} else
{var or__3824__auto____9911 = (cljs.core._sorted_seq["_"]);
if(or__3824__auto____9911)
{return or__3824__auto____9911;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-sorted-seq",coll);
}
}
})().call(null,coll,ascending_QMARK_);
}
});
cljs.core._sorted_seq_from = (function _sorted_seq_from(coll,k,ascending_QMARK_){
if((function (){var and__3822__auto____9916 = coll;
if(and__3822__auto____9916)
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3;
} else
{return and__3822__auto____9916;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3(coll,k,ascending_QMARK_);
} else
{var x__5239__auto____9917 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____9918 = (cljs.core._sorted_seq_from[goog.typeOf(x__5239__auto____9917)]);
if(or__3824__auto____9918)
{return or__3824__auto____9918;
} else
{var or__3824__auto____9919 = (cljs.core._sorted_seq_from["_"]);
if(or__3824__auto____9919)
{return or__3824__auto____9919;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-sorted-seq-from",coll);
}
}
})().call(null,coll,k,ascending_QMARK_);
}
});
cljs.core._entry_key = (function _entry_key(coll,entry){
if((function (){var and__3822__auto____9924 = coll;
if(and__3822__auto____9924)
{return coll.cljs$core$ISorted$_entry_key$arity$2;
} else
{return and__3822__auto____9924;
}
})())
{return coll.cljs$core$ISorted$_entry_key$arity$2(coll,entry);
} else
{var x__5239__auto____9925 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____9926 = (cljs.core._entry_key[goog.typeOf(x__5239__auto____9925)]);
if(or__3824__auto____9926)
{return or__3824__auto____9926;
} else
{var or__3824__auto____9927 = (cljs.core._entry_key["_"]);
if(or__3824__auto____9927)
{return or__3824__auto____9927;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-entry-key",coll);
}
}
})().call(null,coll,entry);
}
});
cljs.core._comparator = (function _comparator(coll){
if((function (){var and__3822__auto____9932 = coll;
if(and__3822__auto____9932)
{return coll.cljs$core$ISorted$_comparator$arity$1;
} else
{return and__3822__auto____9932;
}
})())
{return coll.cljs$core$ISorted$_comparator$arity$1(coll);
} else
{var x__5239__auto____9933 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____9934 = (cljs.core._comparator[goog.typeOf(x__5239__auto____9933)]);
if(or__3824__auto____9934)
{return or__3824__auto____9934;
} else
{var or__3824__auto____9935 = (cljs.core._comparator["_"]);
if(or__3824__auto____9935)
{return or__3824__auto____9935;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-comparator",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IPrintable = {};
cljs.core._pr_seq = (function _pr_seq(o,opts){
if((function (){var and__3822__auto____9940 = o;
if(and__3822__auto____9940)
{return o.cljs$core$IPrintable$_pr_seq$arity$2;
} else
{return and__3822__auto____9940;
}
})())
{return o.cljs$core$IPrintable$_pr_seq$arity$2(o,opts);
} else
{var x__5239__auto____9941 = (((o == null))?null:o);
return (function (){var or__3824__auto____9942 = (cljs.core._pr_seq[goog.typeOf(x__5239__auto____9941)]);
if(or__3824__auto____9942)
{return or__3824__auto____9942;
} else
{var or__3824__auto____9943 = (cljs.core._pr_seq["_"]);
if(or__3824__auto____9943)
{return or__3824__auto____9943;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IWriter = {};
cljs.core._write = (function _write(writer,s){
if((function (){var and__3822__auto____9948 = writer;
if(and__3822__auto____9948)
{return writer.cljs$core$IWriter$_write$arity$2;
} else
{return and__3822__auto____9948;
}
})())
{return writer.cljs$core$IWriter$_write$arity$2(writer,s);
} else
{var x__5239__auto____9949 = (((writer == null))?null:writer);
return (function (){var or__3824__auto____9950 = (cljs.core._write[goog.typeOf(x__5239__auto____9949)]);
if(or__3824__auto____9950)
{return or__3824__auto____9950;
} else
{var or__3824__auto____9951 = (cljs.core._write["_"]);
if(or__3824__auto____9951)
{return or__3824__auto____9951;
} else
{throw cljs.core.missing_protocol.call(null,"IWriter.-write",writer);
}
}
})().call(null,writer,s);
}
});
cljs.core._flush = (function _flush(writer){
if((function (){var and__3822__auto____9956 = writer;
if(and__3822__auto____9956)
{return writer.cljs$core$IWriter$_flush$arity$1;
} else
{return and__3822__auto____9956;
}
})())
{return writer.cljs$core$IWriter$_flush$arity$1(writer);
} else
{var x__5239__auto____9957 = (((writer == null))?null:writer);
return (function (){var or__3824__auto____9958 = (cljs.core._flush[goog.typeOf(x__5239__auto____9957)]);
if(or__3824__auto____9958)
{return or__3824__auto____9958;
} else
{var or__3824__auto____9959 = (cljs.core._flush["_"]);
if(or__3824__auto____9959)
{return or__3824__auto____9959;
} else
{throw cljs.core.missing_protocol.call(null,"IWriter.-flush",writer);
}
}
})().call(null,writer);
}
});
cljs.core.IPrintWithWriter = {};
cljs.core._pr_writer = (function _pr_writer(o,writer,opts){
if((function (){var and__3822__auto____9964 = o;
if(and__3822__auto____9964)
{return o.cljs$core$IPrintWithWriter$_pr_writer$arity$3;
} else
{return and__3822__auto____9964;
}
})())
{return o.cljs$core$IPrintWithWriter$_pr_writer$arity$3(o,writer,opts);
} else
{var x__5239__auto____9965 = (((o == null))?null:o);
return (function (){var or__3824__auto____9966 = (cljs.core._pr_writer[goog.typeOf(x__5239__auto____9965)]);
if(or__3824__auto____9966)
{return or__3824__auto____9966;
} else
{var or__3824__auto____9967 = (cljs.core._pr_writer["_"]);
if(or__3824__auto____9967)
{return or__3824__auto____9967;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintWithWriter.-pr-writer",o);
}
}
})().call(null,o,writer,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if((function (){var and__3822__auto____9972 = d;
if(and__3822__auto____9972)
{return d.cljs$core$IPending$_realized_QMARK_$arity$1;
} else
{return and__3822__auto____9972;
}
})())
{return d.cljs$core$IPending$_realized_QMARK_$arity$1(d);
} else
{var x__5239__auto____9973 = (((d == null))?null:d);
return (function (){var or__3824__auto____9974 = (cljs.core._realized_QMARK_[goog.typeOf(x__5239__auto____9973)]);
if(or__3824__auto____9974)
{return or__3824__auto____9974;
} else
{var or__3824__auto____9975 = (cljs.core._realized_QMARK_["_"]);
if(or__3824__auto____9975)
{return or__3824__auto____9975;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if((function (){var and__3822__auto____9980 = this$;
if(and__3822__auto____9980)
{return this$.cljs$core$IWatchable$_notify_watches$arity$3;
} else
{return and__3822__auto____9980;
}
})())
{return this$.cljs$core$IWatchable$_notify_watches$arity$3(this$,oldval,newval);
} else
{var x__5239__auto____9981 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____9982 = (cljs.core._notify_watches[goog.typeOf(x__5239__auto____9981)]);
if(or__3824__auto____9982)
{return or__3824__auto____9982;
} else
{var or__3824__auto____9983 = (cljs.core._notify_watches["_"]);
if(or__3824__auto____9983)
{return or__3824__auto____9983;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if((function (){var and__3822__auto____9988 = this$;
if(and__3822__auto____9988)
{return this$.cljs$core$IWatchable$_add_watch$arity$3;
} else
{return and__3822__auto____9988;
}
})())
{return this$.cljs$core$IWatchable$_add_watch$arity$3(this$,key,f);
} else
{var x__5239__auto____9989 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____9990 = (cljs.core._add_watch[goog.typeOf(x__5239__auto____9989)]);
if(or__3824__auto____9990)
{return or__3824__auto____9990;
} else
{var or__3824__auto____9991 = (cljs.core._add_watch["_"]);
if(or__3824__auto____9991)
{return or__3824__auto____9991;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if((function (){var and__3822__auto____9996 = this$;
if(and__3822__auto____9996)
{return this$.cljs$core$IWatchable$_remove_watch$arity$2;
} else
{return and__3822__auto____9996;
}
})())
{return this$.cljs$core$IWatchable$_remove_watch$arity$2(this$,key);
} else
{var x__5239__auto____9997 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____9998 = (cljs.core._remove_watch[goog.typeOf(x__5239__auto____9997)]);
if(or__3824__auto____9998)
{return or__3824__auto____9998;
} else
{var or__3824__auto____9999 = (cljs.core._remove_watch["_"]);
if(or__3824__auto____9999)
{return or__3824__auto____9999;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-remove-watch",this$);
}
}
})().call(null,this$,key);
}
});
cljs.core.IEditableCollection = {};
cljs.core._as_transient = (function _as_transient(coll){
if((function (){var and__3822__auto____10004 = coll;
if(and__3822__auto____10004)
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1;
} else
{return and__3822__auto____10004;
}
})())
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1(coll);
} else
{var x__5239__auto____10005 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____10006 = (cljs.core._as_transient[goog.typeOf(x__5239__auto____10005)]);
if(or__3824__auto____10006)
{return or__3824__auto____10006;
} else
{var or__3824__auto____10007 = (cljs.core._as_transient["_"]);
if(or__3824__auto____10007)
{return or__3824__auto____10007;
} else
{throw cljs.core.missing_protocol.call(null,"IEditableCollection.-as-transient",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ITransientCollection = {};
cljs.core._conj_BANG_ = (function _conj_BANG_(tcoll,val){
if((function (){var and__3822__auto____10012 = tcoll;
if(and__3822__auto____10012)
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2;
} else
{return and__3822__auto____10012;
}
})())
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{var x__5239__auto____10013 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____10014 = (cljs.core._conj_BANG_[goog.typeOf(x__5239__auto____10013)]);
if(or__3824__auto____10014)
{return or__3824__auto____10014;
} else
{var or__3824__auto____10015 = (cljs.core._conj_BANG_["_"]);
if(or__3824__auto____10015)
{return or__3824__auto____10015;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientCollection.-conj!",tcoll);
}
}
})().call(null,tcoll,val);
}
});
cljs.core._persistent_BANG_ = (function _persistent_BANG_(tcoll){
if((function (){var and__3822__auto____10020 = tcoll;
if(and__3822__auto____10020)
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1;
} else
{return and__3822__auto____10020;
}
})())
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1(tcoll);
} else
{var x__5239__auto____10021 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____10022 = (cljs.core._persistent_BANG_[goog.typeOf(x__5239__auto____10021)]);
if(or__3824__auto____10022)
{return or__3824__auto____10022;
} else
{var or__3824__auto____10023 = (cljs.core._persistent_BANG_["_"]);
if(or__3824__auto____10023)
{return or__3824__auto____10023;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientCollection.-persistent!",tcoll);
}
}
})().call(null,tcoll);
}
});
cljs.core.ITransientAssociative = {};
cljs.core._assoc_BANG_ = (function _assoc_BANG_(tcoll,key,val){
if((function (){var and__3822__auto____10028 = tcoll;
if(and__3822__auto____10028)
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3;
} else
{return and__3822__auto____10028;
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,key,val);
} else
{var x__5239__auto____10029 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____10030 = (cljs.core._assoc_BANG_[goog.typeOf(x__5239__auto____10029)]);
if(or__3824__auto____10030)
{return or__3824__auto____10030;
} else
{var or__3824__auto____10031 = (cljs.core._assoc_BANG_["_"]);
if(or__3824__auto____10031)
{return or__3824__auto____10031;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientAssociative.-assoc!",tcoll);
}
}
})().call(null,tcoll,key,val);
}
});
cljs.core.ITransientMap = {};
cljs.core._dissoc_BANG_ = (function _dissoc_BANG_(tcoll,key){
if((function (){var and__3822__auto____10036 = tcoll;
if(and__3822__auto____10036)
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2;
} else
{return and__3822__auto____10036;
}
})())
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2(tcoll,key);
} else
{var x__5239__auto____10037 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____10038 = (cljs.core._dissoc_BANG_[goog.typeOf(x__5239__auto____10037)]);
if(or__3824__auto____10038)
{return or__3824__auto____10038;
} else
{var or__3824__auto____10039 = (cljs.core._dissoc_BANG_["_"]);
if(or__3824__auto____10039)
{return or__3824__auto____10039;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientMap.-dissoc!",tcoll);
}
}
})().call(null,tcoll,key);
}
});
cljs.core.ITransientVector = {};
cljs.core._assoc_n_BANG_ = (function _assoc_n_BANG_(tcoll,n,val){
if((function (){var and__3822__auto____10044 = tcoll;
if(and__3822__auto____10044)
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3;
} else
{return and__3822__auto____10044;
}
})())
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,n,val);
} else
{var x__5239__auto____10045 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____10046 = (cljs.core._assoc_n_BANG_[goog.typeOf(x__5239__auto____10045)]);
if(or__3824__auto____10046)
{return or__3824__auto____10046;
} else
{var or__3824__auto____10047 = (cljs.core._assoc_n_BANG_["_"]);
if(or__3824__auto____10047)
{return or__3824__auto____10047;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientVector.-assoc-n!",tcoll);
}
}
})().call(null,tcoll,n,val);
}
});
cljs.core._pop_BANG_ = (function _pop_BANG_(tcoll){
if((function (){var and__3822__auto____10052 = tcoll;
if(and__3822__auto____10052)
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1;
} else
{return and__3822__auto____10052;
}
})())
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1(tcoll);
} else
{var x__5239__auto____10053 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____10054 = (cljs.core._pop_BANG_[goog.typeOf(x__5239__auto____10053)]);
if(or__3824__auto____10054)
{return or__3824__auto____10054;
} else
{var or__3824__auto____10055 = (cljs.core._pop_BANG_["_"]);
if(or__3824__auto____10055)
{return or__3824__auto____10055;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientVector.-pop!",tcoll);
}
}
})().call(null,tcoll);
}
});
cljs.core.ITransientSet = {};
cljs.core._disjoin_BANG_ = (function _disjoin_BANG_(tcoll,v){
if((function (){var and__3822__auto____10060 = tcoll;
if(and__3822__auto____10060)
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2;
} else
{return and__3822__auto____10060;
}
})())
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2(tcoll,v);
} else
{var x__5239__auto____10061 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____10062 = (cljs.core._disjoin_BANG_[goog.typeOf(x__5239__auto____10061)]);
if(or__3824__auto____10062)
{return or__3824__auto____10062;
} else
{var or__3824__auto____10063 = (cljs.core._disjoin_BANG_["_"]);
if(or__3824__auto____10063)
{return or__3824__auto____10063;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientSet.-disjoin!",tcoll);
}
}
})().call(null,tcoll,v);
}
});
cljs.core.IComparable = {};
cljs.core._compare = (function _compare(x,y){
if((function (){var and__3822__auto____10068 = x;
if(and__3822__auto____10068)
{return x.cljs$core$IComparable$_compare$arity$2;
} else
{return and__3822__auto____10068;
}
})())
{return x.cljs$core$IComparable$_compare$arity$2(x,y);
} else
{var x__5239__auto____10069 = (((x == null))?null:x);
return (function (){var or__3824__auto____10070 = (cljs.core._compare[goog.typeOf(x__5239__auto____10069)]);
if(or__3824__auto____10070)
{return or__3824__auto____10070;
} else
{var or__3824__auto____10071 = (cljs.core._compare["_"]);
if(or__3824__auto____10071)
{return or__3824__auto____10071;
} else
{throw cljs.core.missing_protocol.call(null,"IComparable.-compare",x);
}
}
})().call(null,x,y);
}
});
cljs.core.IChunk = {};
cljs.core._drop_first = (function _drop_first(coll){
if((function (){var and__3822__auto____10076 = coll;
if(and__3822__auto____10076)
{return coll.cljs$core$IChunk$_drop_first$arity$1;
} else
{return and__3822__auto____10076;
}
})())
{return coll.cljs$core$IChunk$_drop_first$arity$1(coll);
} else
{var x__5239__auto____10077 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____10078 = (cljs.core._drop_first[goog.typeOf(x__5239__auto____10077)]);
if(or__3824__auto____10078)
{return or__3824__auto____10078;
} else
{var or__3824__auto____10079 = (cljs.core._drop_first["_"]);
if(or__3824__auto____10079)
{return or__3824__auto____10079;
} else
{throw cljs.core.missing_protocol.call(null,"IChunk.-drop-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IChunkedSeq = {};
cljs.core._chunked_first = (function _chunked_first(coll){
if((function (){var and__3822__auto____10084 = coll;
if(and__3822__auto____10084)
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1;
} else
{return and__3822__auto____10084;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1(coll);
} else
{var x__5239__auto____10085 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____10086 = (cljs.core._chunked_first[goog.typeOf(x__5239__auto____10085)]);
if(or__3824__auto____10086)
{return or__3824__auto____10086;
} else
{var or__3824__auto____10087 = (cljs.core._chunked_first["_"]);
if(or__3824__auto____10087)
{return or__3824__auto____10087;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedSeq.-chunked-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._chunked_rest = (function _chunked_rest(coll){
if((function (){var and__3822__auto____10092 = coll;
if(and__3822__auto____10092)
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1;
} else
{return and__3822__auto____10092;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
} else
{var x__5239__auto____10093 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____10094 = (cljs.core._chunked_rest[goog.typeOf(x__5239__auto____10093)]);
if(or__3824__auto____10094)
{return or__3824__auto____10094;
} else
{var or__3824__auto____10095 = (cljs.core._chunked_rest["_"]);
if(or__3824__auto____10095)
{return or__3824__auto____10095;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedSeq.-chunked-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IChunkedNext = {};
cljs.core._chunked_next = (function _chunked_next(coll){
if((function (){var and__3822__auto____10100 = coll;
if(and__3822__auto____10100)
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1;
} else
{return and__3822__auto____10100;
}
})())
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
} else
{var x__5239__auto____10101 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____10102 = (cljs.core._chunked_next[goog.typeOf(x__5239__auto____10101)]);
if(or__3824__auto____10102)
{return or__3824__auto____10102;
} else
{var or__3824__auto____10103 = (cljs.core._chunked_next["_"]);
if(or__3824__auto____10103)
{return or__3824__auto____10103;
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
{if((function (){var G__10107__10108 = coll;
if(G__10107__10108)
{if((function (){var or__3824__auto____10109 = (G__10107__10108.cljs$lang$protocol_mask$partition0$ & 32);
if(or__3824__auto____10109)
{return or__3824__auto____10109;
} else
{return G__10107__10108.cljs$core$ASeq$;
}
})())
{return true;
} else
{if((!G__10107__10108.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__10107__10108);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__10107__10108);
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
{if((function (){var G__10114__10115 = coll;
if(G__10114__10115)
{if((function (){var or__3824__auto____10116 = (G__10114__10115.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____10116)
{return or__3824__auto____10116;
} else
{return G__10114__10115.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__10114__10115.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__10114__10115);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__10114__10115);
}
})())
{return cljs.core._first.call(null,coll);
} else
{var s__10117 = cljs.core.seq.call(null,coll);
if((s__10117 == null))
{return null;
} else
{return cljs.core._first.call(null,s__10117);
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
{if((function (){var G__10122__10123 = coll;
if(G__10122__10123)
{if((function (){var or__3824__auto____10124 = (G__10122__10123.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____10124)
{return or__3824__auto____10124;
} else
{return G__10122__10123.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__10122__10123.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__10122__10123);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__10122__10123);
}
})())
{return cljs.core._rest.call(null,coll);
} else
{var s__10125 = cljs.core.seq.call(null,coll);
if(!((s__10125 == null)))
{return cljs.core._rest.call(null,s__10125);
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
{if((function (){var G__10129__10130 = coll;
if(G__10129__10130)
{if((function (){var or__3824__auto____10131 = (G__10129__10130.cljs$lang$protocol_mask$partition0$ & 128);
if(or__3824__auto____10131)
{return or__3824__auto____10131;
} else
{return G__10129__10130.cljs$core$INext$;
}
})())
{return true;
} else
{if((!G__10129__10130.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.INext,G__10129__10130);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.INext,G__10129__10130);
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
var or__3824__auto____10133 = (x === y);
if(or__3824__auto____10133)
{return or__3824__auto____10133;
} else
{return cljs.core._equiv.call(null,x,y);
}
});
var _EQ___3 = (function() { 
var G__10134__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ_.call(null,x,y)))
{if(cljs.core.next.call(null,more))
{{
var G__10135 = y;
var G__10136 = cljs.core.first.call(null,more);
var G__10137 = cljs.core.next.call(null,more);
x = G__10135;
y = G__10136;
more = G__10137;
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
var G__10134 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10134__delegate.call(this, x, y, more);
};
G__10134.cljs$lang$maxFixedArity = 2;
G__10134.cljs$lang$applyTo = (function (arglist__10138){
var x = cljs.core.first(arglist__10138);
var y = cljs.core.first(cljs.core.next(arglist__10138));
var more = cljs.core.rest(cljs.core.next(arglist__10138));
return G__10134__delegate(x, y, more);
});
G__10134.cljs$lang$arity$variadic = G__10134__delegate;
return G__10134;
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
var G__10139 = null;
var G__10139__2 = (function (o,k){
return null;
});
var G__10139__3 = (function (o,k,not_found){
return not_found;
});
G__10139 = function(o,k,not_found){
switch(arguments.length){
case 2:
return G__10139__2.call(this,o,k);
case 3:
return G__10139__3.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10139;
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
var G__10140 = null;
var G__10140__2 = (function (_,f){
return f.call(null);
});
var G__10140__3 = (function (_,f,start){
return start;
});
G__10140 = function(_,f,start){
switch(arguments.length){
case 2:
return G__10140__2.call(this,_,f);
case 3:
return G__10140__3.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10140;
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
var G__10141 = null;
var G__10141__2 = (function (_,n){
return null;
});
var G__10141__3 = (function (_,n,not_found){
return not_found;
});
G__10141 = function(_,n,not_found){
switch(arguments.length){
case 2:
return G__10141__2.call(this,_,n);
case 3:
return G__10141__3.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10141;
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
var and__3822__auto____10142 = cljs.core.instance_QMARK_.call(null,Date,other);
if(and__3822__auto____10142)
{return (o.toString() === other.toString());
} else
{return and__3822__auto____10142;
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
cljs.core.Reduced.cljs$lang$ctorPrSeq = (function (this__5174__auto__){
return cljs.core.list.call(null,"cljs.core/Reduced");
});
cljs.core.Reduced.cljs$lang$ctorPrWriter = (function (this__5174__auto__,writer__5175__auto__){
return cljs.core._write.call(null,writer__5175__auto__,"cljs.core/Reduced");
});
cljs.core.Reduced.prototype.cljs$core$IDeref$_deref$arity$1 = (function (o){
var this__10143 = this;
return this__10143.val;
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
var cnt__10156 = cljs.core._count.call(null,cicoll);
if((cnt__10156 === 0))
{return f.call(null);
} else
{var val__10157 = cljs.core._nth.call(null,cicoll,0);
var n__10158 = 1;
while(true){
if((n__10158 < cnt__10156))
{var nval__10159 = f.call(null,val__10157,cljs.core._nth.call(null,cicoll,n__10158));
if(cljs.core.reduced_QMARK_.call(null,nval__10159))
{return cljs.core.deref.call(null,nval__10159);
} else
{{
var G__10168 = nval__10159;
var G__10169 = (n__10158 + 1);
val__10157 = G__10168;
n__10158 = G__10169;
continue;
}
}
} else
{return val__10157;
}
break;
}
}
});
var ci_reduce__3 = (function (cicoll,f,val){
var cnt__10160 = cljs.core._count.call(null,cicoll);
var val__10161 = val;
var n__10162 = 0;
while(true){
if((n__10162 < cnt__10160))
{var nval__10163 = f.call(null,val__10161,cljs.core._nth.call(null,cicoll,n__10162));
if(cljs.core.reduced_QMARK_.call(null,nval__10163))
{return cljs.core.deref.call(null,nval__10163);
} else
{{
var G__10170 = nval__10163;
var G__10171 = (n__10162 + 1);
val__10161 = G__10170;
n__10162 = G__10171;
continue;
}
}
} else
{return val__10161;
}
break;
}
});
var ci_reduce__4 = (function (cicoll,f,val,idx){
var cnt__10164 = cljs.core._count.call(null,cicoll);
var val__10165 = val;
var n__10166 = idx;
while(true){
if((n__10166 < cnt__10164))
{var nval__10167 = f.call(null,val__10165,cljs.core._nth.call(null,cicoll,n__10166));
if(cljs.core.reduced_QMARK_.call(null,nval__10167))
{return cljs.core.deref.call(null,nval__10167);
} else
{{
var G__10172 = nval__10167;
var G__10173 = (n__10166 + 1);
val__10165 = G__10172;
n__10166 = G__10173;
continue;
}
}
} else
{return val__10165;
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
var cnt__10186 = arr.length;
if((arr.length === 0))
{return f.call(null);
} else
{var val__10187 = (arr[0]);
var n__10188 = 1;
while(true){
if((n__10188 < cnt__10186))
{var nval__10189 = f.call(null,val__10187,(arr[n__10188]));
if(cljs.core.reduced_QMARK_.call(null,nval__10189))
{return cljs.core.deref.call(null,nval__10189);
} else
{{
var G__10198 = nval__10189;
var G__10199 = (n__10188 + 1);
val__10187 = G__10198;
n__10188 = G__10199;
continue;
}
}
} else
{return val__10187;
}
break;
}
}
});
var array_reduce__3 = (function (arr,f,val){
var cnt__10190 = arr.length;
var val__10191 = val;
var n__10192 = 0;
while(true){
if((n__10192 < cnt__10190))
{var nval__10193 = f.call(null,val__10191,(arr[n__10192]));
if(cljs.core.reduced_QMARK_.call(null,nval__10193))
{return cljs.core.deref.call(null,nval__10193);
} else
{{
var G__10200 = nval__10193;
var G__10201 = (n__10192 + 1);
val__10191 = G__10200;
n__10192 = G__10201;
continue;
}
}
} else
{return val__10191;
}
break;
}
});
var array_reduce__4 = (function (arr,f,val,idx){
var cnt__10194 = arr.length;
var val__10195 = val;
var n__10196 = idx;
while(true){
if((n__10196 < cnt__10194))
{var nval__10197 = f.call(null,val__10195,(arr[n__10196]));
if(cljs.core.reduced_QMARK_.call(null,nval__10197))
{return cljs.core.deref.call(null,nval__10197);
} else
{{
var G__10202 = nval__10197;
var G__10203 = (n__10196 + 1);
val__10195 = G__10202;
n__10196 = G__10203;
continue;
}
}
} else
{return val__10195;
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
var G__10207__10208 = x;
if(G__10207__10208)
{if((function (){var or__3824__auto____10209 = (G__10207__10208.cljs$lang$protocol_mask$partition0$ & 2);
if(or__3824__auto____10209)
{return or__3824__auto____10209;
} else
{return G__10207__10208.cljs$core$ICounted$;
}
})())
{return true;
} else
{if((!G__10207__10208.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,G__10207__10208);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,G__10207__10208);
}
});
/**
* Returns true if coll implements nth in constant time
*/
cljs.core.indexed_QMARK_ = (function indexed_QMARK_(x){
var G__10213__10214 = x;
if(G__10213__10214)
{if((function (){var or__3824__auto____10215 = (G__10213__10214.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____10215)
{return or__3824__auto____10215;
} else
{return G__10213__10214.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__10213__10214.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__10213__10214);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__10213__10214);
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
cljs.core.IndexedSeq.cljs$lang$ctorPrSeq = (function (this__5174__auto__){
return cljs.core.list.call(null,"cljs.core/IndexedSeq");
});
cljs.core.IndexedSeq.cljs$lang$ctorPrWriter = (function (this__5174__auto__,writer__5175__auto__){
return cljs.core._write.call(null,writer__5175__auto__,"cljs.core/IndexedSeq");
});
cljs.core.IndexedSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__10216 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (_){
var this__10217 = this;
if(((this__10217.i + 1) < this__10217.a.length))
{return (new cljs.core.IndexedSeq(this__10217.a,(this__10217.i + 1)));
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__10218 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__10219 = this;
var c__10220 = coll.cljs$core$ICounted$_count$arity$1(coll);
if((c__10220 > 0))
{return (new cljs.core.RSeq(coll,(c__10220 - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.IndexedSeq.prototype.toString = (function (){
var this__10221 = this;
var this__10222 = this;
return cljs.core.pr_str.call(null,this__10222);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__10223 = this;
if(cljs.core.counted_QMARK_.call(null,this__10223.a))
{return cljs.core.ci_reduce.call(null,this__10223.a,f,(this__10223.a[this__10223.i]),(this__10223.i + 1));
} else
{return cljs.core.ci_reduce.call(null,coll,f,(this__10223.a[this__10223.i]),0);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__10224 = this;
if(cljs.core.counted_QMARK_.call(null,this__10224.a))
{return cljs.core.ci_reduce.call(null,this__10224.a,f,start,this__10224.i);
} else
{return cljs.core.ci_reduce.call(null,coll,f,start,0);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__10225 = this;
return this$;
});
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__10226 = this;
return (this__10226.a.length - this__10226.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){
var this__10227 = this;
return (this__10227.a[this__10227.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (_){
var this__10228 = this;
if(((this__10228.i + 1) < this__10228.a.length))
{return (new cljs.core.IndexedSeq(this__10228.a,(this__10228.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__10229 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__10230 = this;
var i__10231 = (n + this__10230.i);
if((i__10231 < this__10230.a.length))
{return (this__10230.a[i__10231]);
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__10232 = this;
var i__10233 = (n + this__10232.i);
if((i__10233 < this__10232.a.length))
{return (this__10232.a[i__10233]);
} else
{return not_found;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__10234 = this;
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
var G__10235 = null;
var G__10235__2 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__10235__3 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__10235 = function(array,f,start){
switch(arguments.length){
case 2:
return G__10235__2.call(this,array,f);
case 3:
return G__10235__3.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10235;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__10236 = null;
var G__10236__2 = (function (array,k){
return (array[k]);
});
var G__10236__3 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__10236 = function(array,k,not_found){
switch(arguments.length){
case 2:
return G__10236__2.call(this,array,k);
case 3:
return G__10236__3.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10236;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__10237 = null;
var G__10237__2 = (function (array,n){
if((n < array.length))
{return (array[n]);
} else
{return null;
}
});
var G__10237__3 = (function (array,n,not_found){
if((n < array.length))
{return (array[n]);
} else
{return not_found;
}
});
G__10237 = function(array,n,not_found){
switch(arguments.length){
case 2:
return G__10237__2.call(this,array,n);
case 3:
return G__10237__3.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10237;
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
cljs.core.RSeq.cljs$lang$ctorPrSeq = (function (this__5174__auto__){
return cljs.core.list.call(null,"cljs.core/RSeq");
});
cljs.core.RSeq.cljs$lang$ctorPrWriter = (function (this__5174__auto__,writer__5175__auto__){
return cljs.core._write.call(null,writer__5175__auto__,"cljs.core/RSeq");
});
cljs.core.RSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__10238 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.RSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__10239 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.RSeq.prototype.toString = (function (){
var this__10240 = this;
var this__10241 = this;
return cljs.core.pr_str.call(null,this__10241);
});
cljs.core.RSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__10242 = this;
return coll;
});
cljs.core.RSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__10243 = this;
return (this__10243.i + 1);
});
cljs.core.RSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__10244 = this;
return cljs.core._nth.call(null,this__10244.ci,this__10244.i);
});
cljs.core.RSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__10245 = this;
if((this__10245.i > 0))
{return (new cljs.core.RSeq(this__10245.ci,(this__10245.i - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.RSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__10246 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.RSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,new_meta){
var this__10247 = this;
return (new cljs.core.RSeq(this__10247.ci,this__10247.i,new_meta));
});
cljs.core.RSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__10248 = this;
return this__10248.meta;
});
cljs.core.RSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__10249 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__10249.meta);
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
var sn__10251 = cljs.core.next.call(null,s);
if(!((sn__10251 == null)))
{{
var G__10252 = sn__10251;
s = G__10252;
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
var G__10253__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__10254 = conj.call(null,coll,x);
var G__10255 = cljs.core.first.call(null,xs);
var G__10256 = cljs.core.next.call(null,xs);
coll = G__10254;
x = G__10255;
xs = G__10256;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__10253 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10253__delegate.call(this, coll, x, xs);
};
G__10253.cljs$lang$maxFixedArity = 2;
G__10253.cljs$lang$applyTo = (function (arglist__10257){
var coll = cljs.core.first(arglist__10257);
var x = cljs.core.first(cljs.core.next(arglist__10257));
var xs = cljs.core.rest(cljs.core.next(arglist__10257));
return G__10253__delegate(coll, x, xs);
});
G__10253.cljs$lang$arity$variadic = G__10253__delegate;
return G__10253;
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
var s__10260 = cljs.core.seq.call(null,coll);
var acc__10261 = 0;
while(true){
if(cljs.core.counted_QMARK_.call(null,s__10260))
{return (acc__10261 + cljs.core._count.call(null,s__10260));
} else
{{
var G__10262 = cljs.core.next.call(null,s__10260);
var G__10263 = (acc__10261 + 1);
s__10260 = G__10262;
acc__10261 = G__10263;
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
var G__10264 = cljs.core.next.call(null,coll);
var G__10265 = (n - 1);
coll = G__10264;
n = G__10265;
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
var G__10266 = cljs.core.next.call(null,coll);
var G__10267 = (n - 1);
var G__10268 = not_found;
coll = G__10266;
n = G__10267;
not_found = G__10268;
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
{if((function (){var G__10275__10276 = coll;
if(G__10275__10276)
{if((function (){var or__3824__auto____10277 = (G__10275__10276.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____10277)
{return or__3824__auto____10277;
} else
{return G__10275__10276.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__10275__10276.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__10275__10276);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__10275__10276);
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
{if((function (){var G__10278__10279 = coll;
if(G__10278__10279)
{if((function (){var or__3824__auto____10280 = (G__10278__10279.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____10280)
{return or__3824__auto____10280;
} else
{return G__10278__10279.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__10278__10279.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__10278__10279);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__10278__10279);
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
var G__10283__delegate = function (coll,k,v,kvs){
while(true){
var ret__10282 = assoc.call(null,coll,k,v);
if(cljs.core.truth_(kvs))
{{
var G__10284 = ret__10282;
var G__10285 = cljs.core.first.call(null,kvs);
var G__10286 = cljs.core.second.call(null,kvs);
var G__10287 = cljs.core.nnext.call(null,kvs);
coll = G__10284;
k = G__10285;
v = G__10286;
kvs = G__10287;
continue;
}
} else
{return ret__10282;
}
break;
}
};
var G__10283 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10283__delegate.call(this, coll, k, v, kvs);
};
G__10283.cljs$lang$maxFixedArity = 3;
G__10283.cljs$lang$applyTo = (function (arglist__10288){
var coll = cljs.core.first(arglist__10288);
var k = cljs.core.first(cljs.core.next(arglist__10288));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10288)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10288)));
return G__10283__delegate(coll, k, v, kvs);
});
G__10283.cljs$lang$arity$variadic = G__10283__delegate;
return G__10283;
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
var G__10291__delegate = function (coll,k,ks){
while(true){
var ret__10290 = dissoc.call(null,coll,k);
if(cljs.core.truth_(ks))
{{
var G__10292 = ret__10290;
var G__10293 = cljs.core.first.call(null,ks);
var G__10294 = cljs.core.next.call(null,ks);
coll = G__10292;
k = G__10293;
ks = G__10294;
continue;
}
} else
{return ret__10290;
}
break;
}
};
var G__10291 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10291__delegate.call(this, coll, k, ks);
};
G__10291.cljs$lang$maxFixedArity = 2;
G__10291.cljs$lang$applyTo = (function (arglist__10295){
var coll = cljs.core.first(arglist__10295);
var k = cljs.core.first(cljs.core.next(arglist__10295));
var ks = cljs.core.rest(cljs.core.next(arglist__10295));
return G__10291__delegate(coll, k, ks);
});
G__10291.cljs$lang$arity$variadic = G__10291__delegate;
return G__10291;
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
if((function (){var G__10299__10300 = o;
if(G__10299__10300)
{if((function (){var or__3824__auto____10301 = (G__10299__10300.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3824__auto____10301)
{return or__3824__auto____10301;
} else
{return G__10299__10300.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__10299__10300.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__10299__10300);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__10299__10300);
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
var G__10304__delegate = function (coll,k,ks){
while(true){
var ret__10303 = disj.call(null,coll,k);
if(cljs.core.truth_(ks))
{{
var G__10305 = ret__10303;
var G__10306 = cljs.core.first.call(null,ks);
var G__10307 = cljs.core.next.call(null,ks);
coll = G__10305;
k = G__10306;
ks = G__10307;
continue;
}
} else
{return ret__10303;
}
break;
}
};
var G__10304 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10304__delegate.call(this, coll, k, ks);
};
G__10304.cljs$lang$maxFixedArity = 2;
G__10304.cljs$lang$applyTo = (function (arglist__10308){
var coll = cljs.core.first(arglist__10308);
var k = cljs.core.first(cljs.core.next(arglist__10308));
var ks = cljs.core.rest(cljs.core.next(arglist__10308));
return G__10304__delegate(coll, k, ks);
});
G__10304.cljs$lang$arity$variadic = G__10304__delegate;
return G__10304;
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
var h__10310 = goog.string.hashCode(k);
(cljs.core.string_hash_cache[k] = h__10310);
cljs.core.string_hash_cache_count = (cljs.core.string_hash_cache_count + 1);
return h__10310;
});
cljs.core.check_string_hash_cache = (function check_string_hash_cache(k){
if((cljs.core.string_hash_cache_count > 255))
{cljs.core.string_hash_cache = {};
cljs.core.string_hash_cache_count = 0;
} else
{}
var h__10312 = (cljs.core.string_hash_cache[k]);
if(!((h__10312 == null)))
{return h__10312;
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
if((function (){var and__3822__auto____10314 = goog.isString(o);
if(and__3822__auto____10314)
{return check_cache;
} else
{return and__3822__auto____10314;
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
{var G__10318__10319 = x;
if(G__10318__10319)
{if((function (){var or__3824__auto____10320 = (G__10318__10319.cljs$lang$protocol_mask$partition0$ & 8);
if(or__3824__auto____10320)
{return or__3824__auto____10320;
} else
{return G__10318__10319.cljs$core$ICollection$;
}
})())
{return true;
} else
{if((!G__10318__10319.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,G__10318__10319);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,G__10318__10319);
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
{var G__10324__10325 = x;
if(G__10324__10325)
{if((function (){var or__3824__auto____10326 = (G__10324__10325.cljs$lang$protocol_mask$partition0$ & 4096);
if(or__3824__auto____10326)
{return or__3824__auto____10326;
} else
{return G__10324__10325.cljs$core$ISet$;
}
})())
{return true;
} else
{if((!G__10324__10325.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,G__10324__10325);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,G__10324__10325);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var G__10330__10331 = x;
if(G__10330__10331)
{if((function (){var or__3824__auto____10332 = (G__10330__10331.cljs$lang$protocol_mask$partition0$ & 512);
if(or__3824__auto____10332)
{return or__3824__auto____10332;
} else
{return G__10330__10331.cljs$core$IAssociative$;
}
})())
{return true;
} else
{if((!G__10330__10331.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,G__10330__10331);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,G__10330__10331);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var G__10336__10337 = x;
if(G__10336__10337)
{if((function (){var or__3824__auto____10338 = (G__10336__10337.cljs$lang$protocol_mask$partition0$ & 16777216);
if(or__3824__auto____10338)
{return or__3824__auto____10338;
} else
{return G__10336__10337.cljs$core$ISequential$;
}
})())
{return true;
} else
{if((!G__10336__10337.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,G__10336__10337);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,G__10336__10337);
}
});
/**
* Returns true if coll satisfies IReduce
*/
cljs.core.reduceable_QMARK_ = (function reduceable_QMARK_(x){
var G__10342__10343 = x;
if(G__10342__10343)
{if((function (){var or__3824__auto____10344 = (G__10342__10343.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____10344)
{return or__3824__auto____10344;
} else
{return G__10342__10343.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__10342__10343.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__10342__10343);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__10342__10343);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if((x == null))
{return false;
} else
{var G__10348__10349 = x;
if(G__10348__10349)
{if((function (){var or__3824__auto____10350 = (G__10348__10349.cljs$lang$protocol_mask$partition0$ & 1024);
if(or__3824__auto____10350)
{return or__3824__auto____10350;
} else
{return G__10348__10349.cljs$core$IMap$;
}
})())
{return true;
} else
{if((!G__10348__10349.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,G__10348__10349);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,G__10348__10349);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var G__10354__10355 = x;
if(G__10354__10355)
{if((function (){var or__3824__auto____10356 = (G__10354__10355.cljs$lang$protocol_mask$partition0$ & 16384);
if(or__3824__auto____10356)
{return or__3824__auto____10356;
} else
{return G__10354__10355.cljs$core$IVector$;
}
})())
{return true;
} else
{if((!G__10354__10355.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,G__10354__10355);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,G__10354__10355);
}
});
cljs.core.chunked_seq_QMARK_ = (function chunked_seq_QMARK_(x){
var G__10360__10361 = x;
if(G__10360__10361)
{if((function (){var or__3824__auto____10362 = (G__10360__10361.cljs$lang$protocol_mask$partition1$ & 512);
if(or__3824__auto____10362)
{return or__3824__auto____10362;
} else
{return G__10360__10361.cljs$core$IChunkedSeq$;
}
})())
{return true;
} else
{if((!G__10360__10361.cljs$lang$protocol_mask$partition1$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedSeq,G__10360__10361);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedSeq,G__10360__10361);
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
var G__10363__delegate = function (keyvals){
return cljs.core.apply.call(null,goog.object.create,keyvals);
};
var G__10363 = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10363__delegate.call(this, keyvals);
};
G__10363.cljs$lang$maxFixedArity = 0;
G__10363.cljs$lang$applyTo = (function (arglist__10364){
var keyvals = cljs.core.seq(arglist__10364);;
return G__10363__delegate(keyvals);
});
G__10363.cljs$lang$arity$variadic = G__10363__delegate;
return G__10363;
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
var keys__10366 = [];
goog.object.forEach(obj,(function (val,key,obj){
return keys__10366.push(key);
}));
return keys__10366;
});
cljs.core.js_delete = (function js_delete(obj,key){
return delete obj[key];
});
cljs.core.array_copy = (function array_copy(from,i,to,j,len){
var i__10370 = i;
var j__10371 = j;
var len__10372 = len;
while(true){
if((len__10372 === 0))
{return to;
} else
{(to[j__10371] = (from[i__10370]));
{
var G__10373 = (i__10370 + 1);
var G__10374 = (j__10371 + 1);
var G__10375 = (len__10372 - 1);
i__10370 = G__10373;
j__10371 = G__10374;
len__10372 = G__10375;
continue;
}
}
break;
}
});
cljs.core.array_copy_downward = (function array_copy_downward(from,i,to,j,len){
var i__10379 = (i + (len - 1));
var j__10380 = (j + (len - 1));
var len__10381 = len;
while(true){
if((len__10381 === 0))
{return to;
} else
{(to[j__10380] = (from[i__10379]));
{
var G__10382 = (i__10379 - 1);
var G__10383 = (j__10380 - 1);
var G__10384 = (len__10381 - 1);
i__10379 = G__10382;
j__10380 = G__10383;
len__10381 = G__10384;
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
{var G__10388__10389 = s;
if(G__10388__10389)
{if((function (){var or__3824__auto____10390 = (G__10388__10389.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____10390)
{return or__3824__auto____10390;
} else
{return G__10388__10389.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__10388__10389.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__10388__10389);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__10388__10389);
}
}
});
/**
* Return true if s satisfies ISeqable
*/
cljs.core.seqable_QMARK_ = (function seqable_QMARK_(s){
var G__10394__10395 = s;
if(G__10394__10395)
{if((function (){var or__3824__auto____10396 = (G__10394__10395.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3824__auto____10396)
{return or__3824__auto____10396;
} else
{return G__10394__10395.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__10394__10395.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__10394__10395);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__10394__10395);
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
var and__3822__auto____10399 = goog.isString(x);
if(and__3822__auto____10399)
{return !((function (){var or__3824__auto____10400 = (x.charAt(0) === "\uFDD0");
if(or__3824__auto____10400)
{return or__3824__auto____10400;
} else
{return (x.charAt(0) === "\uFDD1");
}
})());
} else
{return and__3822__auto____10399;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3822__auto____10402 = goog.isString(x);
if(and__3822__auto____10402)
{return (x.charAt(0) === "\uFDD0");
} else
{return and__3822__auto____10402;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3822__auto____10404 = goog.isString(x);
if(and__3822__auto____10404)
{return (x.charAt(0) === "\uFDD1");
} else
{return and__3822__auto____10404;
}
});
cljs.core.number_QMARK_ = (function number_QMARK_(n){
return goog.isNumber(n);
});
cljs.core.fn_QMARK_ = (function fn_QMARK_(f){
return goog.isFunction(f);
});
cljs.core.ifn_QMARK_ = (function ifn_QMARK_(f){
var or__3824__auto____10409 = cljs.core.fn_QMARK_.call(null,f);
if(or__3824__auto____10409)
{return or__3824__auto____10409;
} else
{var G__10410__10411 = f;
if(G__10410__10411)
{if((function (){var or__3824__auto____10412 = (G__10410__10411.cljs$lang$protocol_mask$partition0$ & 1);
if(or__3824__auto____10412)
{return or__3824__auto____10412;
} else
{return G__10410__10411.cljs$core$IFn$;
}
})())
{return true;
} else
{if((!G__10410__10411.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IFn,G__10410__10411);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IFn,G__10410__10411);
}
}
});
/**
* Returns true if n is an integer.
*/
cljs.core.integer_QMARK_ = (function integer_QMARK_(n){
var and__3822__auto____10416 = cljs.core.number_QMARK_.call(null,n);
if(and__3822__auto____10416)
{var and__3822__auto____10417 = !(isNaN(n));
if(and__3822__auto____10417)
{var and__3822__auto____10418 = !((n === Infinity));
if(and__3822__auto____10418)
{return (parseFloat(n) === parseInt(n,10));
} else
{return and__3822__auto____10418;
}
} else
{return and__3822__auto____10417;
}
} else
{return and__3822__auto____10416;
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
if((function (){var and__3822__auto____10421 = !((coll == null));
if(and__3822__auto____10421)
{var and__3822__auto____10422 = cljs.core.associative_QMARK_.call(null,coll);
if(and__3822__auto____10422)
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3822__auto____10422;
}
} else
{return and__3822__auto____10421;
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
var G__10431__delegate = function (x,y,more){
if(!(cljs.core._EQ_.call(null,x,y)))
{var s__10427 = cljs.core.PersistentHashSet.fromArray([y,x]);
var xs__10428 = more;
while(true){
var x__10429 = cljs.core.first.call(null,xs__10428);
var etc__10430 = cljs.core.next.call(null,xs__10428);
if(cljs.core.truth_(xs__10428))
{if(cljs.core.contains_QMARK_.call(null,s__10427,x__10429))
{return false;
} else
{{
var G__10432 = cljs.core.conj.call(null,s__10427,x__10429);
var G__10433 = etc__10430;
s__10427 = G__10432;
xs__10428 = G__10433;
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
var G__10431 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10431__delegate.call(this, x, y, more);
};
G__10431.cljs$lang$maxFixedArity = 2;
G__10431.cljs$lang$applyTo = (function (arglist__10434){
var x = cljs.core.first(arglist__10434);
var y = cljs.core.first(cljs.core.next(arglist__10434));
var more = cljs.core.rest(cljs.core.next(arglist__10434));
return G__10431__delegate(x, y, more);
});
G__10431.cljs$lang$arity$variadic = G__10431__delegate;
return G__10431;
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
{if((function (){var G__10438__10439 = x;
if(G__10438__10439)
{if((function (){var or__3824__auto____10440 = (G__10438__10439.cljs$lang$protocol_mask$partition1$ & 2048);
if(or__3824__auto____10440)
{return or__3824__auto____10440;
} else
{return G__10438__10439.cljs$core$IComparable$;
}
})())
{return true;
} else
{if((!G__10438__10439.cljs$lang$protocol_mask$partition1$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IComparable,G__10438__10439);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IComparable,G__10438__10439);
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
var xl__10445 = cljs.core.count.call(null,xs);
var yl__10446 = cljs.core.count.call(null,ys);
if((xl__10445 < yl__10446))
{return -1;
} else
{if((xl__10445 > yl__10446))
{return 1;
} else
{if("\uFDD0'else")
{return compare_indexed.call(null,xs,ys,xl__10445,0);
} else
{return null;
}
}
}
});
var compare_indexed__4 = (function (xs,ys,len,n){
while(true){
var d__10447 = cljs.core.compare.call(null,cljs.core.nth.call(null,xs,n),cljs.core.nth.call(null,ys,n));
if((function (){var and__3822__auto____10448 = (d__10447 === 0);
if(and__3822__auto____10448)
{return ((n + 1) < len);
} else
{return and__3822__auto____10448;
}
})())
{{
var G__10449 = xs;
var G__10450 = ys;
var G__10451 = len;
var G__10452 = (n + 1);
xs = G__10449;
ys = G__10450;
len = G__10451;
n = G__10452;
continue;
}
} else
{return d__10447;
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
var r__10454 = f.call(null,x,y);
if(cljs.core.number_QMARK_.call(null,r__10454))
{return r__10454;
} else
{if(cljs.core.truth_(r__10454))
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
{var a__10456 = cljs.core.to_array.call(null,coll);
goog.array.stableSort(a__10456,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__10456);
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
var temp__3971__auto____10462 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____10462)
{var s__10463 = temp__3971__auto____10462;
return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__10463),cljs.core.next.call(null,s__10463));
} else
{return f.call(null);
}
});
var seq_reduce__3 = (function (f,val,coll){
var val__10464 = val;
var coll__10465 = cljs.core.seq.call(null,coll);
while(true){
if(coll__10465)
{var nval__10466 = f.call(null,val__10464,cljs.core.first.call(null,coll__10465));
if(cljs.core.reduced_QMARK_.call(null,nval__10466))
{return cljs.core.deref.call(null,nval__10466);
} else
{{
var G__10467 = nval__10466;
var G__10468 = cljs.core.next.call(null,coll__10465);
val__10464 = G__10467;
coll__10465 = G__10468;
continue;
}
}
} else
{return val__10464;
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
var a__10470 = cljs.core.to_array.call(null,coll);
goog.array.shuffle(a__10470);
return cljs.core.vec.call(null,a__10470);
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
if((function (){var G__10477__10478 = coll;
if(G__10477__10478)
{if((function (){var or__3824__auto____10479 = (G__10477__10478.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____10479)
{return or__3824__auto____10479;
} else
{return G__10477__10478.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__10477__10478.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__10477__10478);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__10477__10478);
}
})())
{return cljs.core._reduce.call(null,coll,f);
} else
{return cljs.core.seq_reduce.call(null,f,coll);
}
});
var reduce__3 = (function (f,val,coll){
if((function (){var G__10480__10481 = coll;
if(G__10480__10481)
{if((function (){var or__3824__auto____10482 = (G__10480__10481.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____10482)
{return or__3824__auto____10482;
} else
{return G__10480__10481.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__10480__10481.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__10480__10481);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__10480__10481);
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
var G__10483__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__10483 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10483__delegate.call(this, x, y, more);
};
G__10483.cljs$lang$maxFixedArity = 2;
G__10483.cljs$lang$applyTo = (function (arglist__10484){
var x = cljs.core.first(arglist__10484);
var y = cljs.core.first(cljs.core.next(arglist__10484));
var more = cljs.core.rest(cljs.core.next(arglist__10484));
return G__10483__delegate(x, y, more);
});
G__10483.cljs$lang$arity$variadic = G__10483__delegate;
return G__10483;
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
var G__10485__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__10485 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10485__delegate.call(this, x, y, more);
};
G__10485.cljs$lang$maxFixedArity = 2;
G__10485.cljs$lang$applyTo = (function (arglist__10486){
var x = cljs.core.first(arglist__10486);
var y = cljs.core.first(cljs.core.next(arglist__10486));
var more = cljs.core.rest(cljs.core.next(arglist__10486));
return G__10485__delegate(x, y, more);
});
G__10485.cljs$lang$arity$variadic = G__10485__delegate;
return G__10485;
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
var G__10487__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__10487 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10487__delegate.call(this, x, y, more);
};
G__10487.cljs$lang$maxFixedArity = 2;
G__10487.cljs$lang$applyTo = (function (arglist__10488){
var x = cljs.core.first(arglist__10488);
var y = cljs.core.first(cljs.core.next(arglist__10488));
var more = cljs.core.rest(cljs.core.next(arglist__10488));
return G__10487__delegate(x, y, more);
});
G__10487.cljs$lang$arity$variadic = G__10487__delegate;
return G__10487;
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
var G__10489__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__10489 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10489__delegate.call(this, x, y, more);
};
G__10489.cljs$lang$maxFixedArity = 2;
G__10489.cljs$lang$applyTo = (function (arglist__10490){
var x = cljs.core.first(arglist__10490);
var y = cljs.core.first(cljs.core.next(arglist__10490));
var more = cljs.core.rest(cljs.core.next(arglist__10490));
return G__10489__delegate(x, y, more);
});
G__10489.cljs$lang$arity$variadic = G__10489__delegate;
return G__10489;
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
var G__10491__delegate = function (x,y,more){
while(true){
if((x < y))
{if(cljs.core.next.call(null,more))
{{
var G__10492 = y;
var G__10493 = cljs.core.first.call(null,more);
var G__10494 = cljs.core.next.call(null,more);
x = G__10492;
y = G__10493;
more = G__10494;
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
var G__10491 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10491__delegate.call(this, x, y, more);
};
G__10491.cljs$lang$maxFixedArity = 2;
G__10491.cljs$lang$applyTo = (function (arglist__10495){
var x = cljs.core.first(arglist__10495);
var y = cljs.core.first(cljs.core.next(arglist__10495));
var more = cljs.core.rest(cljs.core.next(arglist__10495));
return G__10491__delegate(x, y, more);
});
G__10491.cljs$lang$arity$variadic = G__10491__delegate;
return G__10491;
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
var G__10496__delegate = function (x,y,more){
while(true){
if((x <= y))
{if(cljs.core.next.call(null,more))
{{
var G__10497 = y;
var G__10498 = cljs.core.first.call(null,more);
var G__10499 = cljs.core.next.call(null,more);
x = G__10497;
y = G__10498;
more = G__10499;
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
var G__10496 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10496__delegate.call(this, x, y, more);
};
G__10496.cljs$lang$maxFixedArity = 2;
G__10496.cljs$lang$applyTo = (function (arglist__10500){
var x = cljs.core.first(arglist__10500);
var y = cljs.core.first(cljs.core.next(arglist__10500));
var more = cljs.core.rest(cljs.core.next(arglist__10500));
return G__10496__delegate(x, y, more);
});
G__10496.cljs$lang$arity$variadic = G__10496__delegate;
return G__10496;
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
var G__10501__delegate = function (x,y,more){
while(true){
if((x > y))
{if(cljs.core.next.call(null,more))
{{
var G__10502 = y;
var G__10503 = cljs.core.first.call(null,more);
var G__10504 = cljs.core.next.call(null,more);
x = G__10502;
y = G__10503;
more = G__10504;
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
var G__10501 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10501__delegate.call(this, x, y, more);
};
G__10501.cljs$lang$maxFixedArity = 2;
G__10501.cljs$lang$applyTo = (function (arglist__10505){
var x = cljs.core.first(arglist__10505);
var y = cljs.core.first(cljs.core.next(arglist__10505));
var more = cljs.core.rest(cljs.core.next(arglist__10505));
return G__10501__delegate(x, y, more);
});
G__10501.cljs$lang$arity$variadic = G__10501__delegate;
return G__10501;
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
var G__10506__delegate = function (x,y,more){
while(true){
if((x >= y))
{if(cljs.core.next.call(null,more))
{{
var G__10507 = y;
var G__10508 = cljs.core.first.call(null,more);
var G__10509 = cljs.core.next.call(null,more);
x = G__10507;
y = G__10508;
more = G__10509;
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
var G__10506 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10506__delegate.call(this, x, y, more);
};
G__10506.cljs$lang$maxFixedArity = 2;
G__10506.cljs$lang$applyTo = (function (arglist__10510){
var x = cljs.core.first(arglist__10510);
var y = cljs.core.first(cljs.core.next(arglist__10510));
var more = cljs.core.rest(cljs.core.next(arglist__10510));
return G__10506__delegate(x, y, more);
});
G__10506.cljs$lang$arity$variadic = G__10506__delegate;
return G__10506;
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
var G__10511__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__10511 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10511__delegate.call(this, x, y, more);
};
G__10511.cljs$lang$maxFixedArity = 2;
G__10511.cljs$lang$applyTo = (function (arglist__10512){
var x = cljs.core.first(arglist__10512);
var y = cljs.core.first(cljs.core.next(arglist__10512));
var more = cljs.core.rest(cljs.core.next(arglist__10512));
return G__10511__delegate(x, y, more);
});
G__10511.cljs$lang$arity$variadic = G__10511__delegate;
return G__10511;
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
var G__10513__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__10513 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10513__delegate.call(this, x, y, more);
};
G__10513.cljs$lang$maxFixedArity = 2;
G__10513.cljs$lang$applyTo = (function (arglist__10514){
var x = cljs.core.first(arglist__10514);
var y = cljs.core.first(cljs.core.next(arglist__10514));
var more = cljs.core.rest(cljs.core.next(arglist__10514));
return G__10513__delegate(x, y, more);
});
G__10513.cljs$lang$arity$variadic = G__10513__delegate;
return G__10513;
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
var rem__10516 = (n % d);
return cljs.core.fix.call(null,((n - rem__10516) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__10518 = cljs.core.quot.call(null,n,d);
return (n - (d * q__10518));
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
var v__10521 = (v - ((v >> 1) & 1431655765));
var v__10522 = ((v__10521 & 858993459) + ((v__10521 >> 2) & 858993459));
return ((((v__10522 + (v__10522 >> 4)) & 252645135) * 16843009) >> 24);
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
var G__10523__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.next.call(null,more))
{{
var G__10524 = y;
var G__10525 = cljs.core.first.call(null,more);
var G__10526 = cljs.core.next.call(null,more);
x = G__10524;
y = G__10525;
more = G__10526;
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
var G__10523 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10523__delegate.call(this, x, y, more);
};
G__10523.cljs$lang$maxFixedArity = 2;
G__10523.cljs$lang$applyTo = (function (arglist__10527){
var x = cljs.core.first(arglist__10527);
var y = cljs.core.first(cljs.core.next(arglist__10527));
var more = cljs.core.rest(cljs.core.next(arglist__10527));
return G__10523__delegate(x, y, more);
});
G__10523.cljs$lang$arity$variadic = G__10523__delegate;
return G__10523;
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
var n__10531 = n;
var xs__10532 = cljs.core.seq.call(null,coll);
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____10533 = xs__10532;
if(and__3822__auto____10533)
{return (n__10531 > 0);
} else
{return and__3822__auto____10533;
}
})()))
{{
var G__10534 = (n__10531 - 1);
var G__10535 = cljs.core.next.call(null,xs__10532);
n__10531 = G__10534;
xs__10532 = G__10535;
continue;
}
} else
{return xs__10532;
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
var G__10536__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__10537 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__10538 = cljs.core.next.call(null,more);
sb = G__10537;
more = G__10538;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__10536 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__10536__delegate.call(this, x, ys);
};
G__10536.cljs$lang$maxFixedArity = 1;
G__10536.cljs$lang$applyTo = (function (arglist__10539){
var x = cljs.core.first(arglist__10539);
var ys = cljs.core.rest(arglist__10539);
return G__10536__delegate(x, ys);
});
G__10536.cljs$lang$arity$variadic = G__10536__delegate;
return G__10536;
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
var G__10540__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__10541 = sb.append(str.call(null,cljs.core.first.call(null,more)));
var G__10542 = cljs.core.next.call(null,more);
sb = G__10541;
more = G__10542;
continue;
}
} else
{return cljs.core.str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str.call(null,x))),ys);
};
var G__10540 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__10540__delegate.call(this, x, ys);
};
G__10540.cljs$lang$maxFixedArity = 1;
G__10540.cljs$lang$applyTo = (function (arglist__10543){
var x = cljs.core.first(arglist__10543);
var ys = cljs.core.rest(arglist__10543);
return G__10540__delegate(x, ys);
});
G__10540.cljs$lang$arity$variadic = G__10540__delegate;
return G__10540;
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
var args__10547 = cljs.core.map.call(null,(function (x){
if((function (){var or__3824__auto____10546 = cljs.core.keyword_QMARK_.call(null,x);
if(or__3824__auto____10546)
{return or__3824__auto____10546;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{return [cljs.core.str(x)].join('');
} else
{return x;
}
}),args);
return cljs.core.apply.call(null,goog.string.format,fmt,args__10547);
};
var format = function (fmt,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return format__delegate.call(this, fmt, args);
};
format.cljs$lang$maxFixedArity = 1;
format.cljs$lang$applyTo = (function (arglist__10548){
var fmt = cljs.core.first(arglist__10548);
var args = cljs.core.rest(arglist__10548);
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
return cljs.core.boolean$.call(null,((cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__10551 = cljs.core.seq.call(null,x);
var ys__10552 = cljs.core.seq.call(null,y);
while(true){
if((xs__10551 == null))
{return (ys__10552 == null);
} else
{if((ys__10552 == null))
{return false;
} else
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__10551),cljs.core.first.call(null,ys__10552)))
{{
var G__10553 = cljs.core.next.call(null,xs__10551);
var G__10554 = cljs.core.next.call(null,ys__10552);
xs__10551 = G__10553;
ys__10552 = G__10554;
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
return cljs.core.reduce.call(null,(function (p1__10555_SHARP_,p2__10556_SHARP_){
return cljs.core.hash_combine.call(null,p1__10555_SHARP_,cljs.core.hash.call(null,p2__10556_SHARP_,false));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll),false),cljs.core.next.call(null,coll));
});
cljs.core.hash_imap = (function hash_imap(m){
var h__10560 = 0;
var s__10561 = cljs.core.seq.call(null,m);
while(true){
if(s__10561)
{var e__10562 = cljs.core.first.call(null,s__10561);
{
var G__10563 = ((h__10560 + (cljs.core.hash.call(null,cljs.core.key.call(null,e__10562)) ^ cljs.core.hash.call(null,cljs.core.val.call(null,e__10562)))) % 4503599627370496);
var G__10564 = cljs.core.next.call(null,s__10561);
h__10560 = G__10563;
s__10561 = G__10564;
continue;
}
} else
{return h__10560;
}
break;
}
});
cljs.core.hash_iset = (function hash_iset(s){
var h__10568 = 0;
var s__10569 = cljs.core.seq.call(null,s);
while(true){
if(s__10569)
{var e__10570 = cljs.core.first.call(null,s__10569);
{
var G__10571 = ((h__10568 + cljs.core.hash.call(null,e__10570)) % 4503599627370496);
var G__10572 = cljs.core.next.call(null,s__10569);
h__10568 = G__10571;
s__10569 = G__10572;
continue;
}
} else
{return h__10568;
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
var G__10580__10581 = cljs.core.seq.call(null,fn_map);
while(true){
if(G__10580__10581)
{var vec__10582__10583 = cljs.core.first.call(null,G__10580__10581);
var key_name__10584 = cljs.core.nth.call(null,vec__10582__10583,0,null);
var f__10585 = cljs.core.nth.call(null,vec__10582__10583,1,null);
var str_name__10586 = cljs.core.name.call(null,key_name__10584);
(obj[str_name__10586] = f__10585);
{
var G__10587 = cljs.core.next.call(null,G__10580__10581);
G__10580__10581 = G__10587;
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
cljs.core.List.cljs$lang$ctorPrSeq = (function (this__5174__auto__){
return cljs.core.list.call(null,"cljs.core/List");
});
cljs.core.List.cljs$lang$ctorPrWriter = (function (this__5174__auto__,writer__5175__auto__){
return cljs.core._write.call(null,writer__5175__auto__,"cljs.core/List");
});
cljs.core.List.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__10588 = this;
var h__5055__auto____10589 = this__10588.__hash;
if(!((h__5055__auto____10589 == null)))
{return h__5055__auto____10589;
} else
{var h__5055__auto____10590 = cljs.core.hash_coll.call(null,coll);
this__10588.__hash = h__5055__auto____10590;
return h__5055__auto____10590;
}
});
cljs.core.List.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__10591 = this;
if((this__10591.count === 1))
{return null;
} else
{return this__10591.rest;
}
});
cljs.core.List.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__10592 = this;
return (new cljs.core.List(this__10592.meta,o,coll,(this__10592.count + 1),null));
});
cljs.core.List.prototype.toString = (function (){
var this__10593 = this;
var this__10594 = this;
return cljs.core.pr_str.call(null,this__10594);
});
cljs.core.List.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__10595 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__10596 = this;
return this__10596.count;
});
cljs.core.List.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__10597 = this;
return this__10597.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__10598 = this;
return coll.cljs$core$ISeq$_rest$arity$1(coll);
});
cljs.core.List.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__10599 = this;
return this__10599.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__10600 = this;
if((this__10600.count === 1))
{return cljs.core.List.EMPTY;
} else
{return this__10600.rest;
}
});
cljs.core.List.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__10601 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__10602 = this;
return (new cljs.core.List(meta,this__10602.first,this__10602.rest,this__10602.count,this__10602.__hash));
});
cljs.core.List.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__10603 = this;
return this__10603.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__10604 = this;
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
cljs.core.EmptyList.cljs$lang$ctorPrSeq = (function (this__5174__auto__){
return cljs.core.list.call(null,"cljs.core/EmptyList");
});
cljs.core.EmptyList.cljs$lang$ctorPrWriter = (function (this__5174__auto__,writer__5175__auto__){
return cljs.core._write.call(null,writer__5175__auto__,"cljs.core/EmptyList");
});
cljs.core.EmptyList.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__10605 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__10606 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__10607 = this;
return (new cljs.core.List(this__10607.meta,o,null,1,null));
});
cljs.core.EmptyList.prototype.toString = (function (){
var this__10608 = this;
var this__10609 = this;
return cljs.core.pr_str.call(null,this__10609);
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__10610 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__10611 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__10612 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__10613 = this;
throw (new Error("Can't pop empty list"));
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__10614 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__10615 = this;
return cljs.core.List.EMPTY;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__10616 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__10617 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__10618 = this;
return this__10618.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__10619 = this;
return coll;
});
cljs.core.EmptyList;
cljs.core.List.EMPTY = (new cljs.core.EmptyList(null));
cljs.core.reversible_QMARK_ = (function reversible_QMARK_(coll){
var G__10623__10624 = coll;
if(G__10623__10624)
{if((function (){var or__3824__auto____10625 = (G__10623__10624.cljs$lang$protocol_mask$partition0$ & 134217728);
if(or__3824__auto____10625)
{return or__3824__auto____10625;
} else
{return G__10623__10624.cljs$core$IReversible$;
}
})())
{return true;
} else
{if((!G__10623__10624.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReversible,G__10623__10624);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReversible,G__10623__10624);
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
var G__10626__delegate = function (x,y,z,items){
return cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,cljs.core.reverse.call(null,items)),z),y),x);
};
var G__10626 = function (x,y,z,var_args){
var items = null;
if (goog.isDef(var_args)) {
  items = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10626__delegate.call(this, x, y, z, items);
};
G__10626.cljs$lang$maxFixedArity = 3;
G__10626.cljs$lang$applyTo = (function (arglist__10627){
var x = cljs.core.first(arglist__10627);
var y = cljs.core.first(cljs.core.next(arglist__10627));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10627)));
var items = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10627)));
return G__10626__delegate(x, y, z, items);
});
G__10626.cljs$lang$arity$variadic = G__10626__delegate;
return G__10626;
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
cljs.core.Cons.cljs$lang$ctorPrSeq = (function (this__5174__auto__){
return cljs.core.list.call(null,"cljs.core/Cons");
});
cljs.core.Cons.cljs$lang$ctorPrWriter = (function (this__5174__auto__,writer__5175__auto__){
return cljs.core._write.call(null,writer__5175__auto__,"cljs.core/Cons");
});
cljs.core.Cons.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__10628 = this;
var h__5055__auto____10629 = this__10628.__hash;
if(!((h__5055__auto____10629 == null)))
{return h__5055__auto____10629;
} else
{var h__5055__auto____10630 = cljs.core.hash_coll.call(null,coll);
this__10628.__hash = h__5055__auto____10630;
return h__5055__auto____10630;
}
});
cljs.core.Cons.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__10631 = this;
if((this__10631.rest == null))
{return null;
} else
{return cljs.core._seq.call(null,this__10631.rest);
}
});
cljs.core.Cons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__10632 = this;
return (new cljs.core.Cons(null,o,coll,this__10632.__hash));
});
cljs.core.Cons.prototype.toString = (function (){
var this__10633 = this;
var this__10634 = this;
return cljs.core.pr_str.call(null,this__10634);
});
cljs.core.Cons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__10635 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__10636 = this;
return this__10636.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__10637 = this;
if((this__10637.rest == null))
{return cljs.core.List.EMPTY;
} else
{return this__10637.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__10638 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__10639 = this;
return (new cljs.core.Cons(meta,this__10639.first,this__10639.rest,this__10639.__hash));
});
cljs.core.Cons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__10640 = this;
return this__10640.meta;
});
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__10641 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__10641.meta);
});
cljs.core.Cons;
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,coll){
if((function (){var or__3824__auto____10646 = (coll == null);
if(or__3824__auto____10646)
{return or__3824__auto____10646;
} else
{var G__10647__10648 = coll;
if(G__10647__10648)
{if((function (){var or__3824__auto____10649 = (G__10647__10648.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____10649)
{return or__3824__auto____10649;
} else
{return G__10647__10648.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__10647__10648.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__10647__10648);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__10647__10648);
}
}
})())
{return (new cljs.core.Cons(null,x,coll,null));
} else
{return (new cljs.core.Cons(null,x,cljs.core.seq.call(null,coll),null));
}
});
cljs.core.list_QMARK_ = (function list_QMARK_(x){
var G__10653__10654 = x;
if(G__10653__10654)
{if((function (){var or__3824__auto____10655 = (G__10653__10654.cljs$lang$protocol_mask$partition0$ & 33554432);
if(or__3824__auto____10655)
{return or__3824__auto____10655;
} else
{return G__10653__10654.cljs$core$IList$;
}
})())
{return true;
} else
{if((!G__10653__10654.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IList,G__10653__10654);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IList,G__10653__10654);
}
});
(cljs.core.IReduce["string"] = true);
(cljs.core._reduce["string"] = (function() {
var G__10656 = null;
var G__10656__2 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__10656__3 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__10656 = function(string,f,start){
switch(arguments.length){
case 2:
return G__10656__2.call(this,string,f);
case 3:
return G__10656__3.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10656;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__10657 = null;
var G__10657__2 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__10657__3 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__10657 = function(string,k,not_found){
switch(arguments.length){
case 2:
return G__10657__2.call(this,string,k);
case 3:
return G__10657__3.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10657;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__10658 = null;
var G__10658__2 = (function (string,n){
if((n < cljs.core._count.call(null,string)))
{return string.charAt(n);
} else
{return null;
}
});
var G__10658__3 = (function (string,n,not_found){
if((n < cljs.core._count.call(null,string)))
{return string.charAt(n);
} else
{return not_found;
}
});
G__10658 = function(string,n,not_found){
switch(arguments.length){
case 2:
return G__10658__2.call(this,string,n);
case 3:
return G__10658__3.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10658;
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
cljs.core.Keyword.cljs$lang$ctorPrSeq = (function (this__5174__auto__){
return cljs.core.list.call(null,"cljs.core/Keyword");
});
cljs.core.Keyword.cljs$lang$ctorPrWriter = (function (this__5174__auto__,writer__5175__auto__){
return cljs.core._write.call(null,writer__5175__auto__,"cljs.core/Keyword");
});
cljs.core.Keyword.prototype.call = (function() {
var G__10670 = null;
var G__10670__2 = (function (this_sym10661,coll){
var this__10663 = this;
var this_sym10661__10664 = this;
var ___10665 = this_sym10661__10664;
if((coll == null))
{return null;
} else
{var strobj__10666 = coll.strobj;
if((strobj__10666 == null))
{return cljs.core._lookup.call(null,coll,this__10663.k,null);
} else
{return (strobj__10666[this__10663.k]);
}
}
});
var G__10670__3 = (function (this_sym10662,coll,not_found){
var this__10663 = this;
var this_sym10662__10667 = this;
var ___10668 = this_sym10662__10667;
if((coll == null))
{return not_found;
} else
{return cljs.core._lookup.call(null,coll,this__10663.k,not_found);
}
});
G__10670 = function(this_sym10662,coll,not_found){
switch(arguments.length){
case 2:
return G__10670__2.call(this,this_sym10662,coll);
case 3:
return G__10670__3.call(this,this_sym10662,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10670;
})()
;
cljs.core.Keyword.prototype.apply = (function (this_sym10659,args10660){
var this__10669 = this;
return this_sym10659.call.apply(this_sym10659,[this_sym10659].concat(args10660.slice()));
});
cljs.core.Keyword;
String.prototype.cljs$core$IFn$ = true;
String.prototype.call = (function() {
var G__10679 = null;
var G__10679__2 = (function (this_sym10673,coll){
var this_sym10673__10675 = this;
var this__10676 = this_sym10673__10675;
return cljs.core._lookup.call(null,coll,this__10676.toString(),null);
});
var G__10679__3 = (function (this_sym10674,coll,not_found){
var this_sym10674__10677 = this;
var this__10678 = this_sym10674__10677;
return cljs.core._lookup.call(null,coll,this__10678.toString(),not_found);
});
G__10679 = function(this_sym10674,coll,not_found){
switch(arguments.length){
case 2:
return G__10679__2.call(this,this_sym10674,coll);
case 3:
return G__10679__3.call(this,this_sym10674,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10679;
})()
;
String.prototype.apply = (function (this_sym10671,args10672){
return this_sym10671.call.apply(this_sym10671,[this_sym10671].concat(args10672.slice()));
});
String.prototype.apply = (function (s,args){
if((cljs.core.count.call(null,args) < 2))
{return cljs.core._lookup.call(null,(args[0]),s,null);
} else
{return cljs.core._lookup.call(null,(args[0]),s,(args[1]));
}
});
cljs.core.lazy_seq_value = (function lazy_seq_value(lazy_seq){
var x__10681 = lazy_seq.x;
if(lazy_seq.realized)
{return x__10681;
} else
{lazy_seq.x = x__10681.call(null);
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
cljs.core.LazySeq.cljs$lang$ctorPrSeq = (function (this__5174__auto__){
return cljs.core.list.call(null,"cljs.core/LazySeq");
});
cljs.core.LazySeq.cljs$lang$ctorPrWriter = (function (this__5174__auto__,writer__5175__auto__){
return cljs.core._write.call(null,writer__5175__auto__,"cljs.core/LazySeq");
});
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__10682 = this;
var h__5055__auto____10683 = this__10682.__hash;
if(!((h__5055__auto____10683 == null)))
{return h__5055__auto____10683;
} else
{var h__5055__auto____10684 = cljs.core.hash_coll.call(null,coll);
this__10682.__hash = h__5055__auto____10684;
return h__5055__auto____10684;
}
});
cljs.core.LazySeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__10685 = this;
return cljs.core._seq.call(null,coll.cljs$core$ISeq$_rest$arity$1(coll));
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__10686 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.toString = (function (){
var this__10687 = this;
var this__10688 = this;
return cljs.core.pr_str.call(null,this__10688);
});
cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__10689 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__10690 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__10691 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__10692 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__10693 = this;
return (new cljs.core.LazySeq(meta,this__10693.realized,this__10693.x,this__10693.__hash));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__10694 = this;
return this__10694.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__10695 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__10695.meta);
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
cljs.core.ChunkBuffer.cljs$lang$ctorPrSeq = (function (this__5174__auto__){
return cljs.core.list.call(null,"cljs.core/ChunkBuffer");
});
cljs.core.ChunkBuffer.cljs$lang$ctorPrWriter = (function (this__5174__auto__,writer__5175__auto__){
return cljs.core._write.call(null,writer__5175__auto__,"cljs.core/ChunkBuffer");
});
cljs.core.ChunkBuffer.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__10696 = this;
return this__10696.end;
});
cljs.core.ChunkBuffer.prototype.add = (function (o){
var this__10697 = this;
var ___10698 = this;
(this__10697.buf[this__10697.end] = o);
return this__10697.end = (this__10697.end + 1);
});
cljs.core.ChunkBuffer.prototype.chunk = (function (o){
var this__10699 = this;
var ___10700 = this;
var ret__10701 = (new cljs.core.ArrayChunk(this__10699.buf,0,this__10699.end));
this__10699.buf = null;
return ret__10701;
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
cljs.core.ArrayChunk.cljs$lang$ctorPrSeq = (function (this__5174__auto__){
return cljs.core.list.call(null,"cljs.core/ArrayChunk");
});
cljs.core.ArrayChunk.cljs$lang$ctorPrWriter = (function (this__5174__auto__,writer__5175__auto__){
return cljs.core._write.call(null,writer__5175__auto__,"cljs.core/ArrayChunk");
});
cljs.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__10702 = this;
return cljs.core.array_reduce.call(null,this__10702.arr,f,(this__10702.arr[this__10702.off]),(this__10702.off + 1));
});
cljs.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__10703 = this;
return cljs.core.array_reduce.call(null,this__10703.arr,f,start,this__10703.off);
});
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$ = true;
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$_drop_first$arity$1 = (function (coll){
var this__10704 = this;
if((this__10704.off === this__10704.end))
{throw (new Error("-drop-first of empty chunk"));
} else
{return (new cljs.core.ArrayChunk(this__10704.arr,(this__10704.off + 1),this__10704.end));
}
});
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,i){
var this__10705 = this;
return (this__10705.arr[(this__10705.off + i)]);
});
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,i,not_found){
var this__10706 = this;
if((function (){var and__3822__auto____10707 = (i >= 0);
if(and__3822__auto____10707)
{return (i < (this__10706.end - this__10706.off));
} else
{return and__3822__auto____10707;
}
})())
{return (this__10706.arr[(this__10706.off + i)]);
} else
{return not_found;
}
});
cljs.core.ArrayChunk.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__10708 = this;
return (this__10708.end - this__10708.off);
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
cljs.core.ChunkedCons.cljs$lang$ctorPrSeq = (function (this__5174__auto__){
return cljs.core.list.call(null,"cljs.core/ChunkedCons");
});
cljs.core.ChunkedCons.cljs$lang$ctorPrWriter = (function (this__5174__auto__,writer__5175__auto__){
return cljs.core._write.call(null,writer__5175__auto__,"cljs.core/ChunkedCons");
});
cljs.core.ChunkedCons.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__10709 = this;
var h__5055__auto____10710 = this__10709.__hash;
if(!((h__5055__auto____10710 == null)))
{return h__5055__auto____10710;
} else
{var h__5055__auto____10711 = cljs.core.hash_coll.call(null,coll);
this__10709.__hash = h__5055__auto____10711;
return h__5055__auto____10711;
}
});
cljs.core.ChunkedCons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this$,o){
var this__10712 = this;
return cljs.core.cons.call(null,o,this$);
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__10713 = this;
return coll;
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__10714 = this;
return cljs.core._nth.call(null,this__10714.chunk,0);
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__10715 = this;
if((cljs.core._count.call(null,this__10715.chunk) > 1))
{return (new cljs.core.ChunkedCons(cljs.core._drop_first.call(null,this__10715.chunk),this__10715.more,this__10715.meta,null));
} else
{if((this__10715.more == null))
{return cljs.core.List.EMPTY;
} else
{return this__10715.more;
}
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var this__10716 = this;
if((this__10716.more == null))
{return null;
} else
{return this__10716.more;
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__10717 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ChunkedCons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var this__10718 = this;
return (new cljs.core.ChunkedCons(this__10718.chunk,this__10718.more,m,this__10718.__hash));
});
cljs.core.ChunkedCons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__10719 = this;
return this__10719.meta;
});
cljs.core.ChunkedCons.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__10720 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__10720.meta);
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var this__10721 = this;
return this__10721.chunk;
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var this__10722 = this;
if((this__10722.more == null))
{return cljs.core.List.EMPTY;
} else
{return this__10722.more;
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
if((function (){var G__10726__10727 = s;
if(G__10726__10727)
{if((function (){var or__3824__auto____10728 = (G__10726__10727.cljs$lang$protocol_mask$partition1$ & 1024);
if(or__3824__auto____10728)
{return or__3824__auto____10728;
} else
{return G__10726__10727.cljs$core$IChunkedNext$;
}
})())
{return true;
} else
{if((!G__10726__10727.cljs$lang$protocol_mask$partition1$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedNext,G__10726__10727);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedNext,G__10726__10727);
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
var ary__10731 = [];
var s__10732 = s;
while(true){
if(cljs.core.seq.call(null,s__10732))
{ary__10731.push(cljs.core.first.call(null,s__10732));
{
var G__10733 = cljs.core.next.call(null,s__10732);
s__10732 = G__10733;
continue;
}
} else
{return ary__10731;
}
break;
}
});
/**
* Returns a (potentially-ragged) 2-dimensional array
* containing the contents of coll.
*/
cljs.core.to_array_2d = (function to_array_2d(coll){
var ret__10737 = cljs.core.make_array.call(null,cljs.core.count.call(null,coll));
var i__10738 = 0;
var xs__10739 = cljs.core.seq.call(null,coll);
while(true){
if(xs__10739)
{(ret__10737[i__10738] = cljs.core.to_array.call(null,cljs.core.first.call(null,xs__10739)));
{
var G__10740 = (i__10738 + 1);
var G__10741 = cljs.core.next.call(null,xs__10739);
i__10738 = G__10740;
xs__10739 = G__10741;
continue;
}
} else
{}
break;
}
return ret__10737;
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
var a__10749 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__10750 = cljs.core.seq.call(null,init_val_or_seq);
var i__10751 = 0;
var s__10752 = s__10750;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____10753 = s__10752;
if(and__3822__auto____10753)
{return (i__10751 < size);
} else
{return and__3822__auto____10753;
}
})()))
{(a__10749[i__10751] = cljs.core.first.call(null,s__10752));
{
var G__10756 = (i__10751 + 1);
var G__10757 = cljs.core.next.call(null,s__10752);
i__10751 = G__10756;
s__10752 = G__10757;
continue;
}
} else
{return a__10749;
}
break;
}
} else
{var n__5401__auto____10754 = size;
var i__10755 = 0;
while(true){
if((i__10755 < n__5401__auto____10754))
{(a__10749[i__10755] = init_val_or_seq);
{
var G__10758 = (i__10755 + 1);
i__10755 = G__10758;
continue;
}
} else
{}
break;
}
return a__10749;
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
var a__10766 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__10767 = cljs.core.seq.call(null,init_val_or_seq);
var i__10768 = 0;
var s__10769 = s__10767;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____10770 = s__10769;
if(and__3822__auto____10770)
{return (i__10768 < size);
} else
{return and__3822__auto____10770;
}
})()))
{(a__10766[i__10768] = cljs.core.first.call(null,s__10769));
{
var G__10773 = (i__10768 + 1);
var G__10774 = cljs.core.next.call(null,s__10769);
i__10768 = G__10773;
s__10769 = G__10774;
continue;
}
} else
{return a__10766;
}
break;
}
} else
{var n__5401__auto____10771 = size;
var i__10772 = 0;
while(true){
if((i__10772 < n__5401__auto____10771))
{(a__10766[i__10772] = init_val_or_seq);
{
var G__10775 = (i__10772 + 1);
i__10772 = G__10775;
continue;
}
} else
{}
break;
}
return a__10766;
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
var a__10783 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__10784 = cljs.core.seq.call(null,init_val_or_seq);
var i__10785 = 0;
var s__10786 = s__10784;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____10787 = s__10786;
if(and__3822__auto____10787)
{return (i__10785 < size);
} else
{return and__3822__auto____10787;
}
})()))
{(a__10783[i__10785] = cljs.core.first.call(null,s__10786));
{
var G__10790 = (i__10785 + 1);
var G__10791 = cljs.core.next.call(null,s__10786);
i__10785 = G__10790;
s__10786 = G__10791;
continue;
}
} else
{return a__10783;
}
break;
}
} else
{var n__5401__auto____10788 = size;
var i__10789 = 0;
while(true){
if((i__10789 < n__5401__auto____10788))
{(a__10783[i__10789] = init_val_or_seq);
{
var G__10792 = (i__10789 + 1);
i__10789 = G__10792;
continue;
}
} else
{}
break;
}
return a__10783;
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
{var s__10797 = s;
var i__10798 = n;
var sum__10799 = 0;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____10800 = (i__10798 > 0);
if(and__3822__auto____10800)
{return cljs.core.seq.call(null,s__10797);
} else
{return and__3822__auto____10800;
}
})()))
{{
var G__10801 = cljs.core.next.call(null,s__10797);
var G__10802 = (i__10798 - 1);
var G__10803 = (sum__10799 + 1);
s__10797 = G__10801;
i__10798 = G__10802;
sum__10799 = G__10803;
continue;
}
} else
{return sum__10799;
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
var s__10808 = cljs.core.seq.call(null,x);
if(s__10808)
{if(cljs.core.chunked_seq_QMARK_.call(null,s__10808))
{return cljs.core.chunk_cons.call(null,cljs.core.chunk_first.call(null,s__10808),concat.call(null,cljs.core.chunk_rest.call(null,s__10808),y));
} else
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__10808),concat.call(null,cljs.core.rest.call(null,s__10808),y));
}
} else
{return y;
}
}),null));
});
var concat__3 = (function() { 
var G__10812__delegate = function (x,y,zs){
var cat__10811 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__10810 = cljs.core.seq.call(null,xys);
if(xys__10810)
{if(cljs.core.chunked_seq_QMARK_.call(null,xys__10810))
{return cljs.core.chunk_cons.call(null,cljs.core.chunk_first.call(null,xys__10810),cat.call(null,cljs.core.chunk_rest.call(null,xys__10810),zs));
} else
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__10810),cat.call(null,cljs.core.rest.call(null,xys__10810),zs));
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
return cat__10811.call(null,concat.call(null,x,y),zs);
};
var G__10812 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10812__delegate.call(this, x, y, zs);
};
G__10812.cljs$lang$maxFixedArity = 2;
G__10812.cljs$lang$applyTo = (function (arglist__10813){
var x = cljs.core.first(arglist__10813);
var y = cljs.core.first(cljs.core.next(arglist__10813));
var zs = cljs.core.rest(cljs.core.next(arglist__10813));
return G__10812__delegate(x, y, zs);
});
G__10812.cljs$lang$arity$variadic = G__10812__delegate;
return G__10812;
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
var G__10814__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__10814 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10814__delegate.call(this, a, b, c, d, more);
};
G__10814.cljs$lang$maxFixedArity = 4;
G__10814.cljs$lang$applyTo = (function (arglist__10815){
var a = cljs.core.first(arglist__10815);
var b = cljs.core.first(cljs.core.next(arglist__10815));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10815)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10815))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10815))));
return G__10814__delegate(a, b, c, d, more);
});
G__10814.cljs$lang$arity$variadic = G__10814__delegate;
return G__10814;
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
var args__10857 = cljs.core.seq.call(null,args);
if((argc === 0))
{return f.call(null);
} else
{var a__10858 = cljs.core._first.call(null,args__10857);
var args__10859 = cljs.core._rest.call(null,args__10857);
if((argc === 1))
{if(f.cljs$lang$arity$1)
{return f.cljs$lang$arity$1(a__10858);
} else
{return f.call(null,a__10858);
}
} else
{var b__10860 = cljs.core._first.call(null,args__10859);
var args__10861 = cljs.core._rest.call(null,args__10859);
if((argc === 2))
{if(f.cljs$lang$arity$2)
{return f.cljs$lang$arity$2(a__10858,b__10860);
} else
{return f.call(null,a__10858,b__10860);
}
} else
{var c__10862 = cljs.core._first.call(null,args__10861);
var args__10863 = cljs.core._rest.call(null,args__10861);
if((argc === 3))
{if(f.cljs$lang$arity$3)
{return f.cljs$lang$arity$3(a__10858,b__10860,c__10862);
} else
{return f.call(null,a__10858,b__10860,c__10862);
}
} else
{var d__10864 = cljs.core._first.call(null,args__10863);
var args__10865 = cljs.core._rest.call(null,args__10863);
if((argc === 4))
{if(f.cljs$lang$arity$4)
{return f.cljs$lang$arity$4(a__10858,b__10860,c__10862,d__10864);
} else
{return f.call(null,a__10858,b__10860,c__10862,d__10864);
}
} else
{var e__10866 = cljs.core._first.call(null,args__10865);
var args__10867 = cljs.core._rest.call(null,args__10865);
if((argc === 5))
{if(f.cljs$lang$arity$5)
{return f.cljs$lang$arity$5(a__10858,b__10860,c__10862,d__10864,e__10866);
} else
{return f.call(null,a__10858,b__10860,c__10862,d__10864,e__10866);
}
} else
{var f__10868 = cljs.core._first.call(null,args__10867);
var args__10869 = cljs.core._rest.call(null,args__10867);
if((argc === 6))
{if(f__10868.cljs$lang$arity$6)
{return f__10868.cljs$lang$arity$6(a__10858,b__10860,c__10862,d__10864,e__10866,f__10868);
} else
{return f__10868.call(null,a__10858,b__10860,c__10862,d__10864,e__10866,f__10868);
}
} else
{var g__10870 = cljs.core._first.call(null,args__10869);
var args__10871 = cljs.core._rest.call(null,args__10869);
if((argc === 7))
{if(f__10868.cljs$lang$arity$7)
{return f__10868.cljs$lang$arity$7(a__10858,b__10860,c__10862,d__10864,e__10866,f__10868,g__10870);
} else
{return f__10868.call(null,a__10858,b__10860,c__10862,d__10864,e__10866,f__10868,g__10870);
}
} else
{var h__10872 = cljs.core._first.call(null,args__10871);
var args__10873 = cljs.core._rest.call(null,args__10871);
if((argc === 8))
{if(f__10868.cljs$lang$arity$8)
{return f__10868.cljs$lang$arity$8(a__10858,b__10860,c__10862,d__10864,e__10866,f__10868,g__10870,h__10872);
} else
{return f__10868.call(null,a__10858,b__10860,c__10862,d__10864,e__10866,f__10868,g__10870,h__10872);
}
} else
{var i__10874 = cljs.core._first.call(null,args__10873);
var args__10875 = cljs.core._rest.call(null,args__10873);
if((argc === 9))
{if(f__10868.cljs$lang$arity$9)
{return f__10868.cljs$lang$arity$9(a__10858,b__10860,c__10862,d__10864,e__10866,f__10868,g__10870,h__10872,i__10874);
} else
{return f__10868.call(null,a__10858,b__10860,c__10862,d__10864,e__10866,f__10868,g__10870,h__10872,i__10874);
}
} else
{var j__10876 = cljs.core._first.call(null,args__10875);
var args__10877 = cljs.core._rest.call(null,args__10875);
if((argc === 10))
{if(f__10868.cljs$lang$arity$10)
{return f__10868.cljs$lang$arity$10(a__10858,b__10860,c__10862,d__10864,e__10866,f__10868,g__10870,h__10872,i__10874,j__10876);
} else
{return f__10868.call(null,a__10858,b__10860,c__10862,d__10864,e__10866,f__10868,g__10870,h__10872,i__10874,j__10876);
}
} else
{var k__10878 = cljs.core._first.call(null,args__10877);
var args__10879 = cljs.core._rest.call(null,args__10877);
if((argc === 11))
{if(f__10868.cljs$lang$arity$11)
{return f__10868.cljs$lang$arity$11(a__10858,b__10860,c__10862,d__10864,e__10866,f__10868,g__10870,h__10872,i__10874,j__10876,k__10878);
} else
{return f__10868.call(null,a__10858,b__10860,c__10862,d__10864,e__10866,f__10868,g__10870,h__10872,i__10874,j__10876,k__10878);
}
} else
{var l__10880 = cljs.core._first.call(null,args__10879);
var args__10881 = cljs.core._rest.call(null,args__10879);
if((argc === 12))
{if(f__10868.cljs$lang$arity$12)
{return f__10868.cljs$lang$arity$12(a__10858,b__10860,c__10862,d__10864,e__10866,f__10868,g__10870,h__10872,i__10874,j__10876,k__10878,l__10880);
} else
{return f__10868.call(null,a__10858,b__10860,c__10862,d__10864,e__10866,f__10868,g__10870,h__10872,i__10874,j__10876,k__10878,l__10880);
}
} else
{var m__10882 = cljs.core._first.call(null,args__10881);
var args__10883 = cljs.core._rest.call(null,args__10881);
if((argc === 13))
{if(f__10868.cljs$lang$arity$13)
{return f__10868.cljs$lang$arity$13(a__10858,b__10860,c__10862,d__10864,e__10866,f__10868,g__10870,h__10872,i__10874,j__10876,k__10878,l__10880,m__10882);
} else
{return f__10868.call(null,a__10858,b__10860,c__10862,d__10864,e__10866,f__10868,g__10870,h__10872,i__10874,j__10876,k__10878,l__10880,m__10882);
}
} else
{var n__10884 = cljs.core._first.call(null,args__10883);
var args__10885 = cljs.core._rest.call(null,args__10883);
if((argc === 14))
{if(f__10868.cljs$lang$arity$14)
{return f__10868.cljs$lang$arity$14(a__10858,b__10860,c__10862,d__10864,e__10866,f__10868,g__10870,h__10872,i__10874,j__10876,k__10878,l__10880,m__10882,n__10884);
} else
{return f__10868.call(null,a__10858,b__10860,c__10862,d__10864,e__10866,f__10868,g__10870,h__10872,i__10874,j__10876,k__10878,l__10880,m__10882,n__10884);
}
} else
{var o__10886 = cljs.core._first.call(null,args__10885);
var args__10887 = cljs.core._rest.call(null,args__10885);
if((argc === 15))
{if(f__10868.cljs$lang$arity$15)
{return f__10868.cljs$lang$arity$15(a__10858,b__10860,c__10862,d__10864,e__10866,f__10868,g__10870,h__10872,i__10874,j__10876,k__10878,l__10880,m__10882,n__10884,o__10886);
} else
{return f__10868.call(null,a__10858,b__10860,c__10862,d__10864,e__10866,f__10868,g__10870,h__10872,i__10874,j__10876,k__10878,l__10880,m__10882,n__10884,o__10886);
}
} else
{var p__10888 = cljs.core._first.call(null,args__10887);
var args__10889 = cljs.core._rest.call(null,args__10887);
if((argc === 16))
{if(f__10868.cljs$lang$arity$16)
{return f__10868.cljs$lang$arity$16(a__10858,b__10860,c__10862,d__10864,e__10866,f__10868,g__10870,h__10872,i__10874,j__10876,k__10878,l__10880,m__10882,n__10884,o__10886,p__10888);
} else
{return f__10868.call(null,a__10858,b__10860,c__10862,d__10864,e__10866,f__10868,g__10870,h__10872,i__10874,j__10876,k__10878,l__10880,m__10882,n__10884,o__10886,p__10888);
}
} else
{var q__10890 = cljs.core._first.call(null,args__10889);
var args__10891 = cljs.core._rest.call(null,args__10889);
if((argc === 17))
{if(f__10868.cljs$lang$arity$17)
{return f__10868.cljs$lang$arity$17(a__10858,b__10860,c__10862,d__10864,e__10866,f__10868,g__10870,h__10872,i__10874,j__10876,k__10878,l__10880,m__10882,n__10884,o__10886,p__10888,q__10890);
} else
{return f__10868.call(null,a__10858,b__10860,c__10862,d__10864,e__10866,f__10868,g__10870,h__10872,i__10874,j__10876,k__10878,l__10880,m__10882,n__10884,o__10886,p__10888,q__10890);
}
} else
{var r__10892 = cljs.core._first.call(null,args__10891);
var args__10893 = cljs.core._rest.call(null,args__10891);
if((argc === 18))
{if(f__10868.cljs$lang$arity$18)
{return f__10868.cljs$lang$arity$18(a__10858,b__10860,c__10862,d__10864,e__10866,f__10868,g__10870,h__10872,i__10874,j__10876,k__10878,l__10880,m__10882,n__10884,o__10886,p__10888,q__10890,r__10892);
} else
{return f__10868.call(null,a__10858,b__10860,c__10862,d__10864,e__10866,f__10868,g__10870,h__10872,i__10874,j__10876,k__10878,l__10880,m__10882,n__10884,o__10886,p__10888,q__10890,r__10892);
}
} else
{var s__10894 = cljs.core._first.call(null,args__10893);
var args__10895 = cljs.core._rest.call(null,args__10893);
if((argc === 19))
{if(f__10868.cljs$lang$arity$19)
{return f__10868.cljs$lang$arity$19(a__10858,b__10860,c__10862,d__10864,e__10866,f__10868,g__10870,h__10872,i__10874,j__10876,k__10878,l__10880,m__10882,n__10884,o__10886,p__10888,q__10890,r__10892,s__10894);
} else
{return f__10868.call(null,a__10858,b__10860,c__10862,d__10864,e__10866,f__10868,g__10870,h__10872,i__10874,j__10876,k__10878,l__10880,m__10882,n__10884,o__10886,p__10888,q__10890,r__10892,s__10894);
}
} else
{var t__10896 = cljs.core._first.call(null,args__10895);
var args__10897 = cljs.core._rest.call(null,args__10895);
if((argc === 20))
{if(f__10868.cljs$lang$arity$20)
{return f__10868.cljs$lang$arity$20(a__10858,b__10860,c__10862,d__10864,e__10866,f__10868,g__10870,h__10872,i__10874,j__10876,k__10878,l__10880,m__10882,n__10884,o__10886,p__10888,q__10890,r__10892,s__10894,t__10896);
} else
{return f__10868.call(null,a__10858,b__10860,c__10862,d__10864,e__10866,f__10868,g__10870,h__10872,i__10874,j__10876,k__10878,l__10880,m__10882,n__10884,o__10886,p__10888,q__10890,r__10892,s__10894,t__10896);
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
var fixed_arity__10912 = f.cljs$lang$maxFixedArity;
if(f.cljs$lang$applyTo)
{var bc__10913 = cljs.core.bounded_count.call(null,args,(fixed_arity__10912 + 1));
if((bc__10913 <= fixed_arity__10912))
{return cljs.core.apply_to.call(null,f,bc__10913,args);
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__3 = (function (f,x,args){
var arglist__10914 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__10915 = f.cljs$lang$maxFixedArity;
if(f.cljs$lang$applyTo)
{var bc__10916 = cljs.core.bounded_count.call(null,arglist__10914,(fixed_arity__10915 + 1));
if((bc__10916 <= fixed_arity__10915))
{return cljs.core.apply_to.call(null,f,bc__10916,arglist__10914);
} else
{return f.cljs$lang$applyTo(arglist__10914);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10914));
}
});
var apply__4 = (function (f,x,y,args){
var arglist__10917 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__10918 = f.cljs$lang$maxFixedArity;
if(f.cljs$lang$applyTo)
{var bc__10919 = cljs.core.bounded_count.call(null,arglist__10917,(fixed_arity__10918 + 1));
if((bc__10919 <= fixed_arity__10918))
{return cljs.core.apply_to.call(null,f,bc__10919,arglist__10917);
} else
{return f.cljs$lang$applyTo(arglist__10917);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10917));
}
});
var apply__5 = (function (f,x,y,z,args){
var arglist__10920 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__10921 = f.cljs$lang$maxFixedArity;
if(f.cljs$lang$applyTo)
{var bc__10922 = cljs.core.bounded_count.call(null,arglist__10920,(fixed_arity__10921 + 1));
if((bc__10922 <= fixed_arity__10921))
{return cljs.core.apply_to.call(null,f,bc__10922,arglist__10920);
} else
{return f.cljs$lang$applyTo(arglist__10920);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10920));
}
});
var apply__6 = (function() { 
var G__10926__delegate = function (f,a,b,c,d,args){
var arglist__10923 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__10924 = f.cljs$lang$maxFixedArity;
if(f.cljs$lang$applyTo)
{var bc__10925 = cljs.core.bounded_count.call(null,arglist__10923,(fixed_arity__10924 + 1));
if((bc__10925 <= fixed_arity__10924))
{return cljs.core.apply_to.call(null,f,bc__10925,arglist__10923);
} else
{return f.cljs$lang$applyTo(arglist__10923);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10923));
}
};
var G__10926 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__10926__delegate.call(this, f, a, b, c, d, args);
};
G__10926.cljs$lang$maxFixedArity = 5;
G__10926.cljs$lang$applyTo = (function (arglist__10927){
var f = cljs.core.first(arglist__10927);
var a = cljs.core.first(cljs.core.next(arglist__10927));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10927)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10927))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10927)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10927)))));
return G__10926__delegate(f, a, b, c, d, args);
});
G__10926.cljs$lang$arity$variadic = G__10926__delegate;
return G__10926;
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
vary_meta.cljs$lang$applyTo = (function (arglist__10928){
var obj = cljs.core.first(arglist__10928);
var f = cljs.core.first(cljs.core.next(arglist__10928));
var args = cljs.core.rest(cljs.core.next(arglist__10928));
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
var G__10929__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__10929 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10929__delegate.call(this, x, y, more);
};
G__10929.cljs$lang$maxFixedArity = 2;
G__10929.cljs$lang$applyTo = (function (arglist__10930){
var x = cljs.core.first(arglist__10930);
var y = cljs.core.first(cljs.core.next(arglist__10930));
var more = cljs.core.rest(cljs.core.next(arglist__10930));
return G__10929__delegate(x, y, more);
});
G__10929.cljs$lang$arity$variadic = G__10929__delegate;
return G__10929;
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
var G__10931 = pred;
var G__10932 = cljs.core.next.call(null,coll);
pred = G__10931;
coll = G__10932;
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
{var or__3824__auto____10934 = pred.call(null,cljs.core.first.call(null,coll));
if(cljs.core.truth_(or__3824__auto____10934))
{return or__3824__auto____10934;
} else
{{
var G__10935 = pred;
var G__10936 = cljs.core.next.call(null,coll);
pred = G__10935;
coll = G__10936;
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
var G__10937 = null;
var G__10937__0 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__10937__1 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__10937__2 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__10937__3 = (function() { 
var G__10938__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__10938 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10938__delegate.call(this, x, y, zs);
};
G__10938.cljs$lang$maxFixedArity = 2;
G__10938.cljs$lang$applyTo = (function (arglist__10939){
var x = cljs.core.first(arglist__10939);
var y = cljs.core.first(cljs.core.next(arglist__10939));
var zs = cljs.core.rest(cljs.core.next(arglist__10939));
return G__10938__delegate(x, y, zs);
});
G__10938.cljs$lang$arity$variadic = G__10938__delegate;
return G__10938;
})()
;
G__10937 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case 0:
return G__10937__0.call(this);
case 1:
return G__10937__1.call(this,x);
case 2:
return G__10937__2.call(this,x,y);
default:
return G__10937__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
G__10937.cljs$lang$maxFixedArity = 2;
G__10937.cljs$lang$applyTo = G__10937__3.cljs$lang$applyTo;
return G__10937;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__10940__delegate = function (args){
return x;
};
var G__10940 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10940__delegate.call(this, args);
};
G__10940.cljs$lang$maxFixedArity = 0;
G__10940.cljs$lang$applyTo = (function (arglist__10941){
var args = cljs.core.seq(arglist__10941);;
return G__10940__delegate(args);
});
G__10940.cljs$lang$arity$variadic = G__10940__delegate;
return G__10940;
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
var G__10948 = null;
var G__10948__0 = (function (){
return f.call(null,g.call(null));
});
var G__10948__1 = (function (x){
return f.call(null,g.call(null,x));
});
var G__10948__2 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__10948__3 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__10948__4 = (function() { 
var G__10949__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__10949 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10949__delegate.call(this, x, y, z, args);
};
G__10949.cljs$lang$maxFixedArity = 3;
G__10949.cljs$lang$applyTo = (function (arglist__10950){
var x = cljs.core.first(arglist__10950);
var y = cljs.core.first(cljs.core.next(arglist__10950));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10950)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10950)));
return G__10949__delegate(x, y, z, args);
});
G__10949.cljs$lang$arity$variadic = G__10949__delegate;
return G__10949;
})()
;
G__10948 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__10948__0.call(this);
case 1:
return G__10948__1.call(this,x);
case 2:
return G__10948__2.call(this,x,y);
case 3:
return G__10948__3.call(this,x,y,z);
default:
return G__10948__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__10948.cljs$lang$maxFixedArity = 3;
G__10948.cljs$lang$applyTo = G__10948__4.cljs$lang$applyTo;
return G__10948;
})()
});
var comp__3 = (function (f,g,h){
return (function() {
var G__10951 = null;
var G__10951__0 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__10951__1 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__10951__2 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__10951__3 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__10951__4 = (function() { 
var G__10952__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__10952 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10952__delegate.call(this, x, y, z, args);
};
G__10952.cljs$lang$maxFixedArity = 3;
G__10952.cljs$lang$applyTo = (function (arglist__10953){
var x = cljs.core.first(arglist__10953);
var y = cljs.core.first(cljs.core.next(arglist__10953));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10953)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10953)));
return G__10952__delegate(x, y, z, args);
});
G__10952.cljs$lang$arity$variadic = G__10952__delegate;
return G__10952;
})()
;
G__10951 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__10951__0.call(this);
case 1:
return G__10951__1.call(this,x);
case 2:
return G__10951__2.call(this,x,y);
case 3:
return G__10951__3.call(this,x,y,z);
default:
return G__10951__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__10951.cljs$lang$maxFixedArity = 3;
G__10951.cljs$lang$applyTo = G__10951__4.cljs$lang$applyTo;
return G__10951;
})()
});
var comp__4 = (function() { 
var G__10954__delegate = function (f1,f2,f3,fs){
var fs__10945 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));
return (function() { 
var G__10955__delegate = function (args){
var ret__10946 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__10945),args);
var fs__10947 = cljs.core.next.call(null,fs__10945);
while(true){
if(fs__10947)
{{
var G__10956 = cljs.core.first.call(null,fs__10947).call(null,ret__10946);
var G__10957 = cljs.core.next.call(null,fs__10947);
ret__10946 = G__10956;
fs__10947 = G__10957;
continue;
}
} else
{return ret__10946;
}
break;
}
};
var G__10955 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10955__delegate.call(this, args);
};
G__10955.cljs$lang$maxFixedArity = 0;
G__10955.cljs$lang$applyTo = (function (arglist__10958){
var args = cljs.core.seq(arglist__10958);;
return G__10955__delegate(args);
});
G__10955.cljs$lang$arity$variadic = G__10955__delegate;
return G__10955;
})()
;
};
var G__10954 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10954__delegate.call(this, f1, f2, f3, fs);
};
G__10954.cljs$lang$maxFixedArity = 3;
G__10954.cljs$lang$applyTo = (function (arglist__10959){
var f1 = cljs.core.first(arglist__10959);
var f2 = cljs.core.first(cljs.core.next(arglist__10959));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10959)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10959)));
return G__10954__delegate(f1, f2, f3, fs);
});
G__10954.cljs$lang$arity$variadic = G__10954__delegate;
return G__10954;
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
var G__10960__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__10960 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10960__delegate.call(this, args);
};
G__10960.cljs$lang$maxFixedArity = 0;
G__10960.cljs$lang$applyTo = (function (arglist__10961){
var args = cljs.core.seq(arglist__10961);;
return G__10960__delegate(args);
});
G__10960.cljs$lang$arity$variadic = G__10960__delegate;
return G__10960;
})()
;
});
var partial__3 = (function (f,arg1,arg2){
return (function() { 
var G__10962__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__10962 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10962__delegate.call(this, args);
};
G__10962.cljs$lang$maxFixedArity = 0;
G__10962.cljs$lang$applyTo = (function (arglist__10963){
var args = cljs.core.seq(arglist__10963);;
return G__10962__delegate(args);
});
G__10962.cljs$lang$arity$variadic = G__10962__delegate;
return G__10962;
})()
;
});
var partial__4 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__10964__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__10964 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10964__delegate.call(this, args);
};
G__10964.cljs$lang$maxFixedArity = 0;
G__10964.cljs$lang$applyTo = (function (arglist__10965){
var args = cljs.core.seq(arglist__10965);;
return G__10964__delegate(args);
});
G__10964.cljs$lang$arity$variadic = G__10964__delegate;
return G__10964;
})()
;
});
var partial__5 = (function() { 
var G__10966__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__10967__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__10967 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10967__delegate.call(this, args);
};
G__10967.cljs$lang$maxFixedArity = 0;
G__10967.cljs$lang$applyTo = (function (arglist__10968){
var args = cljs.core.seq(arglist__10968);;
return G__10967__delegate(args);
});
G__10967.cljs$lang$arity$variadic = G__10967__delegate;
return G__10967;
})()
;
};
var G__10966 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10966__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__10966.cljs$lang$maxFixedArity = 4;
G__10966.cljs$lang$applyTo = (function (arglist__10969){
var f = cljs.core.first(arglist__10969);
var arg1 = cljs.core.first(cljs.core.next(arglist__10969));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10969)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10969))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10969))));
return G__10966__delegate(f, arg1, arg2, arg3, more);
});
G__10966.cljs$lang$arity$variadic = G__10966__delegate;
return G__10966;
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
var G__10970 = null;
var G__10970__1 = (function (a){
return f.call(null,(((a == null))?x:a));
});
var G__10970__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),b);
});
var G__10970__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),b,c);
});
var G__10970__4 = (function() { 
var G__10971__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),b,c,ds);
};
var G__10971 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10971__delegate.call(this, a, b, c, ds);
};
G__10971.cljs$lang$maxFixedArity = 3;
G__10971.cljs$lang$applyTo = (function (arglist__10972){
var a = cljs.core.first(arglist__10972);
var b = cljs.core.first(cljs.core.next(arglist__10972));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10972)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10972)));
return G__10971__delegate(a, b, c, ds);
});
G__10971.cljs$lang$arity$variadic = G__10971__delegate;
return G__10971;
})()
;
G__10970 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 1:
return G__10970__1.call(this,a);
case 2:
return G__10970__2.call(this,a,b);
case 3:
return G__10970__3.call(this,a,b,c);
default:
return G__10970__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__10970.cljs$lang$maxFixedArity = 3;
G__10970.cljs$lang$applyTo = G__10970__4.cljs$lang$applyTo;
return G__10970;
})()
});
var fnil__3 = (function (f,x,y){
return (function() {
var G__10973 = null;
var G__10973__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b));
});
var G__10973__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b),c);
});
var G__10973__4 = (function() { 
var G__10974__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),(((b == null))?y:b),c,ds);
};
var G__10974 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10974__delegate.call(this, a, b, c, ds);
};
G__10974.cljs$lang$maxFixedArity = 3;
G__10974.cljs$lang$applyTo = (function (arglist__10975){
var a = cljs.core.first(arglist__10975);
var b = cljs.core.first(cljs.core.next(arglist__10975));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10975)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10975)));
return G__10974__delegate(a, b, c, ds);
});
G__10974.cljs$lang$arity$variadic = G__10974__delegate;
return G__10974;
})()
;
G__10973 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__10973__2.call(this,a,b);
case 3:
return G__10973__3.call(this,a,b,c);
default:
return G__10973__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__10973.cljs$lang$maxFixedArity = 3;
G__10973.cljs$lang$applyTo = G__10973__4.cljs$lang$applyTo;
return G__10973;
})()
});
var fnil__4 = (function (f,x,y,z){
return (function() {
var G__10976 = null;
var G__10976__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b));
});
var G__10976__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c));
});
var G__10976__4 = (function() { 
var G__10977__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c),ds);
};
var G__10977 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10977__delegate.call(this, a, b, c, ds);
};
G__10977.cljs$lang$maxFixedArity = 3;
G__10977.cljs$lang$applyTo = (function (arglist__10978){
var a = cljs.core.first(arglist__10978);
var b = cljs.core.first(cljs.core.next(arglist__10978));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10978)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10978)));
return G__10977__delegate(a, b, c, ds);
});
G__10977.cljs$lang$arity$variadic = G__10977__delegate;
return G__10977;
})()
;
G__10976 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__10976__2.call(this,a,b);
case 3:
return G__10976__3.call(this,a,b,c);
default:
return G__10976__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__10976.cljs$lang$maxFixedArity = 3;
G__10976.cljs$lang$applyTo = G__10976__4.cljs$lang$applyTo;
return G__10976;
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
var mapi__10994 = (function mapi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____11002 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____11002)
{var s__11003 = temp__3974__auto____11002;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11003))
{var c__11004 = cljs.core.chunk_first.call(null,s__11003);
var size__11005 = cljs.core.count.call(null,c__11004);
var b__11006 = cljs.core.chunk_buffer.call(null,size__11005);
var n__5401__auto____11007 = size__11005;
var i__11008 = 0;
while(true){
if((i__11008 < n__5401__auto____11007))
{cljs.core.chunk_append.call(null,b__11006,f.call(null,(idx + i__11008),cljs.core._nth.call(null,c__11004,i__11008)));
{
var G__11009 = (i__11008 + 1);
i__11008 = G__11009;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11006),mapi.call(null,(idx + size__11005),cljs.core.chunk_rest.call(null,s__11003)));
} else
{return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__11003)),mapi.call(null,(idx + 1),cljs.core.rest.call(null,s__11003)));
}
} else
{return null;
}
}),null));
});
return mapi__10994.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____11019 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____11019)
{var s__11020 = temp__3974__auto____11019;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11020))
{var c__11021 = cljs.core.chunk_first.call(null,s__11020);
var size__11022 = cljs.core.count.call(null,c__11021);
var b__11023 = cljs.core.chunk_buffer.call(null,size__11022);
var n__5401__auto____11024 = size__11022;
var i__11025 = 0;
while(true){
if((i__11025 < n__5401__auto____11024))
{var x__11026 = f.call(null,cljs.core._nth.call(null,c__11021,i__11025));
if((x__11026 == null))
{} else
{cljs.core.chunk_append.call(null,b__11023,x__11026);
}
{
var G__11028 = (i__11025 + 1);
i__11025 = G__11028;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11023),keep.call(null,f,cljs.core.chunk_rest.call(null,s__11020)));
} else
{var x__11027 = f.call(null,cljs.core.first.call(null,s__11020));
if((x__11027 == null))
{return keep.call(null,f,cljs.core.rest.call(null,s__11020));
} else
{return cljs.core.cons.call(null,x__11027,keep.call(null,f,cljs.core.rest.call(null,s__11020)));
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
var keepi__11054 = (function keepi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____11064 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____11064)
{var s__11065 = temp__3974__auto____11064;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11065))
{var c__11066 = cljs.core.chunk_first.call(null,s__11065);
var size__11067 = cljs.core.count.call(null,c__11066);
var b__11068 = cljs.core.chunk_buffer.call(null,size__11067);
var n__5401__auto____11069 = size__11067;
var i__11070 = 0;
while(true){
if((i__11070 < n__5401__auto____11069))
{var x__11071 = f.call(null,(idx + i__11070),cljs.core._nth.call(null,c__11066,i__11070));
if((x__11071 == null))
{} else
{cljs.core.chunk_append.call(null,b__11068,x__11071);
}
{
var G__11073 = (i__11070 + 1);
i__11070 = G__11073;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11068),keepi.call(null,(idx + size__11067),cljs.core.chunk_rest.call(null,s__11065)));
} else
{var x__11072 = f.call(null,idx,cljs.core.first.call(null,s__11065));
if((x__11072 == null))
{return keepi.call(null,(idx + 1),cljs.core.rest.call(null,s__11065));
} else
{return cljs.core.cons.call(null,x__11072,keepi.call(null,(idx + 1),cljs.core.rest.call(null,s__11065)));
}
}
} else
{return null;
}
}),null));
});
return keepi__11054.call(null,0,coll);
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
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____11159 = p.call(null,x);
if(cljs.core.truth_(and__3822__auto____11159))
{return p.call(null,y);
} else
{return and__3822__auto____11159;
}
})());
});
var ep1__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____11160 = p.call(null,x);
if(cljs.core.truth_(and__3822__auto____11160))
{var and__3822__auto____11161 = p.call(null,y);
if(cljs.core.truth_(and__3822__auto____11161))
{return p.call(null,z);
} else
{return and__3822__auto____11161;
}
} else
{return and__3822__auto____11160;
}
})());
});
var ep1__4 = (function() { 
var G__11230__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____11162 = ep1.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____11162))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3822__auto____11162;
}
})());
};
var G__11230 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11230__delegate.call(this, x, y, z, args);
};
G__11230.cljs$lang$maxFixedArity = 3;
G__11230.cljs$lang$applyTo = (function (arglist__11231){
var x = cljs.core.first(arglist__11231);
var y = cljs.core.first(cljs.core.next(arglist__11231));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11231)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11231)));
return G__11230__delegate(x, y, z, args);
});
G__11230.cljs$lang$arity$variadic = G__11230__delegate;
return G__11230;
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
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____11174 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____11174))
{return p2.call(null,x);
} else
{return and__3822__auto____11174;
}
})());
});
var ep2__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____11175 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____11175))
{var and__3822__auto____11176 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____11176))
{var and__3822__auto____11177 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____11177))
{return p2.call(null,y);
} else
{return and__3822__auto____11177;
}
} else
{return and__3822__auto____11176;
}
} else
{return and__3822__auto____11175;
}
})());
});
var ep2__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____11178 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____11178))
{var and__3822__auto____11179 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____11179))
{var and__3822__auto____11180 = p1.call(null,z);
if(cljs.core.truth_(and__3822__auto____11180))
{var and__3822__auto____11181 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____11181))
{var and__3822__auto____11182 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____11182))
{return p2.call(null,z);
} else
{return and__3822__auto____11182;
}
} else
{return and__3822__auto____11181;
}
} else
{return and__3822__auto____11180;
}
} else
{return and__3822__auto____11179;
}
} else
{return and__3822__auto____11178;
}
})());
});
var ep2__4 = (function() { 
var G__11232__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____11183 = ep2.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____11183))
{return cljs.core.every_QMARK_.call(null,(function (p1__11029_SHARP_){
var and__3822__auto____11184 = p1.call(null,p1__11029_SHARP_);
if(cljs.core.truth_(and__3822__auto____11184))
{return p2.call(null,p1__11029_SHARP_);
} else
{return and__3822__auto____11184;
}
}),args);
} else
{return and__3822__auto____11183;
}
})());
};
var G__11232 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11232__delegate.call(this, x, y, z, args);
};
G__11232.cljs$lang$maxFixedArity = 3;
G__11232.cljs$lang$applyTo = (function (arglist__11233){
var x = cljs.core.first(arglist__11233);
var y = cljs.core.first(cljs.core.next(arglist__11233));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11233)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11233)));
return G__11232__delegate(x, y, z, args);
});
G__11232.cljs$lang$arity$variadic = G__11232__delegate;
return G__11232;
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
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____11203 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____11203))
{var and__3822__auto____11204 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____11204))
{return p3.call(null,x);
} else
{return and__3822__auto____11204;
}
} else
{return and__3822__auto____11203;
}
})());
});
var ep3__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____11205 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____11205))
{var and__3822__auto____11206 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____11206))
{var and__3822__auto____11207 = p3.call(null,x);
if(cljs.core.truth_(and__3822__auto____11207))
{var and__3822__auto____11208 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____11208))
{var and__3822__auto____11209 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____11209))
{return p3.call(null,y);
} else
{return and__3822__auto____11209;
}
} else
{return and__3822__auto____11208;
}
} else
{return and__3822__auto____11207;
}
} else
{return and__3822__auto____11206;
}
} else
{return and__3822__auto____11205;
}
})());
});
var ep3__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____11210 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____11210))
{var and__3822__auto____11211 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____11211))
{var and__3822__auto____11212 = p3.call(null,x);
if(cljs.core.truth_(and__3822__auto____11212))
{var and__3822__auto____11213 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____11213))
{var and__3822__auto____11214 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____11214))
{var and__3822__auto____11215 = p3.call(null,y);
if(cljs.core.truth_(and__3822__auto____11215))
{var and__3822__auto____11216 = p1.call(null,z);
if(cljs.core.truth_(and__3822__auto____11216))
{var and__3822__auto____11217 = p2.call(null,z);
if(cljs.core.truth_(and__3822__auto____11217))
{return p3.call(null,z);
} else
{return and__3822__auto____11217;
}
} else
{return and__3822__auto____11216;
}
} else
{return and__3822__auto____11215;
}
} else
{return and__3822__auto____11214;
}
} else
{return and__3822__auto____11213;
}
} else
{return and__3822__auto____11212;
}
} else
{return and__3822__auto____11211;
}
} else
{return and__3822__auto____11210;
}
})());
});
var ep3__4 = (function() { 
var G__11234__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____11218 = ep3.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____11218))
{return cljs.core.every_QMARK_.call(null,(function (p1__11030_SHARP_){
var and__3822__auto____11219 = p1.call(null,p1__11030_SHARP_);
if(cljs.core.truth_(and__3822__auto____11219))
{var and__3822__auto____11220 = p2.call(null,p1__11030_SHARP_);
if(cljs.core.truth_(and__3822__auto____11220))
{return p3.call(null,p1__11030_SHARP_);
} else
{return and__3822__auto____11220;
}
} else
{return and__3822__auto____11219;
}
}),args);
} else
{return and__3822__auto____11218;
}
})());
};
var G__11234 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11234__delegate.call(this, x, y, z, args);
};
G__11234.cljs$lang$maxFixedArity = 3;
G__11234.cljs$lang$applyTo = (function (arglist__11235){
var x = cljs.core.first(arglist__11235);
var y = cljs.core.first(cljs.core.next(arglist__11235));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11235)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11235)));
return G__11234__delegate(x, y, z, args);
});
G__11234.cljs$lang$arity$variadic = G__11234__delegate;
return G__11234;
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
var G__11236__delegate = function (p1,p2,p3,ps){
var ps__11221 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);
return (function() {
var epn = null;
var epn__0 = (function (){
return true;
});
var epn__1 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__11031_SHARP_){
return p1__11031_SHARP_.call(null,x);
}),ps__11221);
});
var epn__2 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__11032_SHARP_){
var and__3822__auto____11226 = p1__11032_SHARP_.call(null,x);
if(cljs.core.truth_(and__3822__auto____11226))
{return p1__11032_SHARP_.call(null,y);
} else
{return and__3822__auto____11226;
}
}),ps__11221);
});
var epn__3 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__11033_SHARP_){
var and__3822__auto____11227 = p1__11033_SHARP_.call(null,x);
if(cljs.core.truth_(and__3822__auto____11227))
{var and__3822__auto____11228 = p1__11033_SHARP_.call(null,y);
if(cljs.core.truth_(and__3822__auto____11228))
{return p1__11033_SHARP_.call(null,z);
} else
{return and__3822__auto____11228;
}
} else
{return and__3822__auto____11227;
}
}),ps__11221);
});
var epn__4 = (function() { 
var G__11237__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____11229 = epn.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____11229))
{return cljs.core.every_QMARK_.call(null,(function (p1__11034_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__11034_SHARP_,args);
}),ps__11221);
} else
{return and__3822__auto____11229;
}
})());
};
var G__11237 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11237__delegate.call(this, x, y, z, args);
};
G__11237.cljs$lang$maxFixedArity = 3;
G__11237.cljs$lang$applyTo = (function (arglist__11238){
var x = cljs.core.first(arglist__11238);
var y = cljs.core.first(cljs.core.next(arglist__11238));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11238)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11238)));
return G__11237__delegate(x, y, z, args);
});
G__11237.cljs$lang$arity$variadic = G__11237__delegate;
return G__11237;
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
var G__11236 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11236__delegate.call(this, p1, p2, p3, ps);
};
G__11236.cljs$lang$maxFixedArity = 3;
G__11236.cljs$lang$applyTo = (function (arglist__11239){
var p1 = cljs.core.first(arglist__11239);
var p2 = cljs.core.first(cljs.core.next(arglist__11239));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11239)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11239)));
return G__11236__delegate(p1, p2, p3, ps);
});
G__11236.cljs$lang$arity$variadic = G__11236__delegate;
return G__11236;
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
var or__3824__auto____11320 = p.call(null,x);
if(cljs.core.truth_(or__3824__auto____11320))
{return or__3824__auto____11320;
} else
{return p.call(null,y);
}
});
var sp1__3 = (function (x,y,z){
var or__3824__auto____11321 = p.call(null,x);
if(cljs.core.truth_(or__3824__auto____11321))
{return or__3824__auto____11321;
} else
{var or__3824__auto____11322 = p.call(null,y);
if(cljs.core.truth_(or__3824__auto____11322))
{return or__3824__auto____11322;
} else
{return p.call(null,z);
}
}
});
var sp1__4 = (function() { 
var G__11391__delegate = function (x,y,z,args){
var or__3824__auto____11323 = sp1.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____11323))
{return or__3824__auto____11323;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__11391 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11391__delegate.call(this, x, y, z, args);
};
G__11391.cljs$lang$maxFixedArity = 3;
G__11391.cljs$lang$applyTo = (function (arglist__11392){
var x = cljs.core.first(arglist__11392);
var y = cljs.core.first(cljs.core.next(arglist__11392));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11392)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11392)));
return G__11391__delegate(x, y, z, args);
});
G__11391.cljs$lang$arity$variadic = G__11391__delegate;
return G__11391;
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
var or__3824__auto____11335 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____11335))
{return or__3824__auto____11335;
} else
{return p2.call(null,x);
}
});
var sp2__2 = (function (x,y){
var or__3824__auto____11336 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____11336))
{return or__3824__auto____11336;
} else
{var or__3824__auto____11337 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____11337))
{return or__3824__auto____11337;
} else
{var or__3824__auto____11338 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____11338))
{return or__3824__auto____11338;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__3 = (function (x,y,z){
var or__3824__auto____11339 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____11339))
{return or__3824__auto____11339;
} else
{var or__3824__auto____11340 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____11340))
{return or__3824__auto____11340;
} else
{var or__3824__auto____11341 = p1.call(null,z);
if(cljs.core.truth_(or__3824__auto____11341))
{return or__3824__auto____11341;
} else
{var or__3824__auto____11342 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____11342))
{return or__3824__auto____11342;
} else
{var or__3824__auto____11343 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____11343))
{return or__3824__auto____11343;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__4 = (function() { 
var G__11393__delegate = function (x,y,z,args){
var or__3824__auto____11344 = sp2.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____11344))
{return or__3824__auto____11344;
} else
{return cljs.core.some.call(null,(function (p1__11074_SHARP_){
var or__3824__auto____11345 = p1.call(null,p1__11074_SHARP_);
if(cljs.core.truth_(or__3824__auto____11345))
{return or__3824__auto____11345;
} else
{return p2.call(null,p1__11074_SHARP_);
}
}),args);
}
};
var G__11393 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11393__delegate.call(this, x, y, z, args);
};
G__11393.cljs$lang$maxFixedArity = 3;
G__11393.cljs$lang$applyTo = (function (arglist__11394){
var x = cljs.core.first(arglist__11394);
var y = cljs.core.first(cljs.core.next(arglist__11394));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11394)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11394)));
return G__11393__delegate(x, y, z, args);
});
G__11393.cljs$lang$arity$variadic = G__11393__delegate;
return G__11393;
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
var or__3824__auto____11364 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____11364))
{return or__3824__auto____11364;
} else
{var or__3824__auto____11365 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____11365))
{return or__3824__auto____11365;
} else
{return p3.call(null,x);
}
}
});
var sp3__2 = (function (x,y){
var or__3824__auto____11366 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____11366))
{return or__3824__auto____11366;
} else
{var or__3824__auto____11367 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____11367))
{return or__3824__auto____11367;
} else
{var or__3824__auto____11368 = p3.call(null,x);
if(cljs.core.truth_(or__3824__auto____11368))
{return or__3824__auto____11368;
} else
{var or__3824__auto____11369 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____11369))
{return or__3824__auto____11369;
} else
{var or__3824__auto____11370 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____11370))
{return or__3824__auto____11370;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__3 = (function (x,y,z){
var or__3824__auto____11371 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____11371))
{return or__3824__auto____11371;
} else
{var or__3824__auto____11372 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____11372))
{return or__3824__auto____11372;
} else
{var or__3824__auto____11373 = p3.call(null,x);
if(cljs.core.truth_(or__3824__auto____11373))
{return or__3824__auto____11373;
} else
{var or__3824__auto____11374 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____11374))
{return or__3824__auto____11374;
} else
{var or__3824__auto____11375 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____11375))
{return or__3824__auto____11375;
} else
{var or__3824__auto____11376 = p3.call(null,y);
if(cljs.core.truth_(or__3824__auto____11376))
{return or__3824__auto____11376;
} else
{var or__3824__auto____11377 = p1.call(null,z);
if(cljs.core.truth_(or__3824__auto____11377))
{return or__3824__auto____11377;
} else
{var or__3824__auto____11378 = p2.call(null,z);
if(cljs.core.truth_(or__3824__auto____11378))
{return or__3824__auto____11378;
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
var G__11395__delegate = function (x,y,z,args){
var or__3824__auto____11379 = sp3.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____11379))
{return or__3824__auto____11379;
} else
{return cljs.core.some.call(null,(function (p1__11075_SHARP_){
var or__3824__auto____11380 = p1.call(null,p1__11075_SHARP_);
if(cljs.core.truth_(or__3824__auto____11380))
{return or__3824__auto____11380;
} else
{var or__3824__auto____11381 = p2.call(null,p1__11075_SHARP_);
if(cljs.core.truth_(or__3824__auto____11381))
{return or__3824__auto____11381;
} else
{return p3.call(null,p1__11075_SHARP_);
}
}
}),args);
}
};
var G__11395 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11395__delegate.call(this, x, y, z, args);
};
G__11395.cljs$lang$maxFixedArity = 3;
G__11395.cljs$lang$applyTo = (function (arglist__11396){
var x = cljs.core.first(arglist__11396);
var y = cljs.core.first(cljs.core.next(arglist__11396));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11396)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11396)));
return G__11395__delegate(x, y, z, args);
});
G__11395.cljs$lang$arity$variadic = G__11395__delegate;
return G__11395;
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
var G__11397__delegate = function (p1,p2,p3,ps){
var ps__11382 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);
return (function() {
var spn = null;
var spn__0 = (function (){
return null;
});
var spn__1 = (function (x){
return cljs.core.some.call(null,(function (p1__11076_SHARP_){
return p1__11076_SHARP_.call(null,x);
}),ps__11382);
});
var spn__2 = (function (x,y){
return cljs.core.some.call(null,(function (p1__11077_SHARP_){
var or__3824__auto____11387 = p1__11077_SHARP_.call(null,x);
if(cljs.core.truth_(or__3824__auto____11387))
{return or__3824__auto____11387;
} else
{return p1__11077_SHARP_.call(null,y);
}
}),ps__11382);
});
var spn__3 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__11078_SHARP_){
var or__3824__auto____11388 = p1__11078_SHARP_.call(null,x);
if(cljs.core.truth_(or__3824__auto____11388))
{return or__3824__auto____11388;
} else
{var or__3824__auto____11389 = p1__11078_SHARP_.call(null,y);
if(cljs.core.truth_(or__3824__auto____11389))
{return or__3824__auto____11389;
} else
{return p1__11078_SHARP_.call(null,z);
}
}
}),ps__11382);
});
var spn__4 = (function() { 
var G__11398__delegate = function (x,y,z,args){
var or__3824__auto____11390 = spn.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____11390))
{return or__3824__auto____11390;
} else
{return cljs.core.some.call(null,(function (p1__11079_SHARP_){
return cljs.core.some.call(null,p1__11079_SHARP_,args);
}),ps__11382);
}
};
var G__11398 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11398__delegate.call(this, x, y, z, args);
};
G__11398.cljs$lang$maxFixedArity = 3;
G__11398.cljs$lang$applyTo = (function (arglist__11399){
var x = cljs.core.first(arglist__11399);
var y = cljs.core.first(cljs.core.next(arglist__11399));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11399)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11399)));
return G__11398__delegate(x, y, z, args);
});
G__11398.cljs$lang$arity$variadic = G__11398__delegate;
return G__11398;
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
var G__11397 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11397__delegate.call(this, p1, p2, p3, ps);
};
G__11397.cljs$lang$maxFixedArity = 3;
G__11397.cljs$lang$applyTo = (function (arglist__11400){
var p1 = cljs.core.first(arglist__11400);
var p2 = cljs.core.first(cljs.core.next(arglist__11400));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11400)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11400)));
return G__11397__delegate(p1, p2, p3, ps);
});
G__11397.cljs$lang$arity$variadic = G__11397__delegate;
return G__11397;
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
var temp__3974__auto____11419 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____11419)
{var s__11420 = temp__3974__auto____11419;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11420))
{var c__11421 = cljs.core.chunk_first.call(null,s__11420);
var size__11422 = cljs.core.count.call(null,c__11421);
var b__11423 = cljs.core.chunk_buffer.call(null,size__11422);
var n__5401__auto____11424 = size__11422;
var i__11425 = 0;
while(true){
if((i__11425 < n__5401__auto____11424))
{cljs.core.chunk_append.call(null,b__11423,f.call(null,cljs.core._nth.call(null,c__11421,i__11425)));
{
var G__11437 = (i__11425 + 1);
i__11425 = G__11437;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11423),map.call(null,f,cljs.core.chunk_rest.call(null,s__11420)));
} else
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__11420)),map.call(null,f,cljs.core.rest.call(null,s__11420)));
}
} else
{return null;
}
}),null));
});
var map__3 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11426 = cljs.core.seq.call(null,c1);
var s2__11427 = cljs.core.seq.call(null,c2);
if((function (){var and__3822__auto____11428 = s1__11426;
if(and__3822__auto____11428)
{return s2__11427;
} else
{return and__3822__auto____11428;
}
})())
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__11426),cljs.core.first.call(null,s2__11427)),map.call(null,f,cljs.core.rest.call(null,s1__11426),cljs.core.rest.call(null,s2__11427)));
} else
{return null;
}
}),null));
});
var map__4 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11429 = cljs.core.seq.call(null,c1);
var s2__11430 = cljs.core.seq.call(null,c2);
var s3__11431 = cljs.core.seq.call(null,c3);
if((function (){var and__3822__auto____11432 = s1__11429;
if(and__3822__auto____11432)
{var and__3822__auto____11433 = s2__11430;
if(and__3822__auto____11433)
{return s3__11431;
} else
{return and__3822__auto____11433;
}
} else
{return and__3822__auto____11432;
}
})())
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__11429),cljs.core.first.call(null,s2__11430),cljs.core.first.call(null,s3__11431)),map.call(null,f,cljs.core.rest.call(null,s1__11429),cljs.core.rest.call(null,s2__11430),cljs.core.rest.call(null,s3__11431)));
} else
{return null;
}
}),null));
});
var map__5 = (function() { 
var G__11438__delegate = function (f,c1,c2,c3,colls){
var step__11436 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__11435 = map.call(null,cljs.core.seq,cs);
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__11435))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__11435),step.call(null,map.call(null,cljs.core.rest,ss__11435)));
} else
{return null;
}
}),null));
});
return map.call(null,(function (p1__11240_SHARP_){
return cljs.core.apply.call(null,f,p1__11240_SHARP_);
}),step__11436.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__11438 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__11438__delegate.call(this, f, c1, c2, c3, colls);
};
G__11438.cljs$lang$maxFixedArity = 4;
G__11438.cljs$lang$applyTo = (function (arglist__11439){
var f = cljs.core.first(arglist__11439);
var c1 = cljs.core.first(cljs.core.next(arglist__11439));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11439)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11439))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11439))));
return G__11438__delegate(f, c1, c2, c3, colls);
});
G__11438.cljs$lang$arity$variadic = G__11438__delegate;
return G__11438;
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
{var temp__3974__auto____11442 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____11442)
{var s__11443 = temp__3974__auto____11442;
return cljs.core.cons.call(null,cljs.core.first.call(null,s__11443),take.call(null,(n - 1),cljs.core.rest.call(null,s__11443)));
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
var step__11449 = (function (n,coll){
while(true){
var s__11447 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_((function (){var and__3822__auto____11448 = (n > 0);
if(and__3822__auto____11448)
{return s__11447;
} else
{return and__3822__auto____11448;
}
})()))
{{
var G__11450 = (n - 1);
var G__11451 = cljs.core.rest.call(null,s__11447);
n = G__11450;
coll = G__11451;
continue;
}
} else
{return s__11447;
}
break;
}
});
return (new cljs.core.LazySeq(null,false,(function (){
return step__11449.call(null,n,coll);
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
var s__11454 = cljs.core.seq.call(null,coll);
var lead__11455 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));
while(true){
if(lead__11455)
{{
var G__11456 = cljs.core.next.call(null,s__11454);
var G__11457 = cljs.core.next.call(null,lead__11455);
s__11454 = G__11456;
lead__11455 = G__11457;
continue;
}
} else
{return s__11454;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__11463 = (function (pred,coll){
while(true){
var s__11461 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_((function (){var and__3822__auto____11462 = s__11461;
if(and__3822__auto____11462)
{return pred.call(null,cljs.core.first.call(null,s__11461));
} else
{return and__3822__auto____11462;
}
})()))
{{
var G__11464 = pred;
var G__11465 = cljs.core.rest.call(null,s__11461);
pred = G__11464;
coll = G__11465;
continue;
}
} else
{return s__11461;
}
break;
}
});
return (new cljs.core.LazySeq(null,false,(function (){
return step__11463.call(null,pred,coll);
}),null));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____11468 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____11468)
{var s__11469 = temp__3974__auto____11468;
return cljs.core.concat.call(null,s__11469,cycle.call(null,s__11469));
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
var s1__11474 = cljs.core.seq.call(null,c1);
var s2__11475 = cljs.core.seq.call(null,c2);
if((function (){var and__3822__auto____11476 = s1__11474;
if(and__3822__auto____11476)
{return s2__11475;
} else
{return and__3822__auto____11476;
}
})())
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__11474),cljs.core.cons.call(null,cljs.core.first.call(null,s2__11475),interleave.call(null,cljs.core.rest.call(null,s1__11474),cljs.core.rest.call(null,s2__11475))));
} else
{return null;
}
}),null));
});
var interleave__3 = (function() { 
var G__11478__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__11477 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__11477))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__11477),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__11477)));
} else
{return null;
}
}),null));
};
var G__11478 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11478__delegate.call(this, c1, c2, colls);
};
G__11478.cljs$lang$maxFixedArity = 2;
G__11478.cljs$lang$applyTo = (function (arglist__11479){
var c1 = cljs.core.first(arglist__11479);
var c2 = cljs.core.first(cljs.core.next(arglist__11479));
var colls = cljs.core.rest(cljs.core.next(arglist__11479));
return G__11478__delegate(c1, c2, colls);
});
G__11478.cljs$lang$arity$variadic = G__11478__delegate;
return G__11478;
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
var cat__11489 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3971__auto____11487 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____11487)
{var coll__11488 = temp__3971__auto____11487;
return cljs.core.cons.call(null,cljs.core.first.call(null,coll__11488),cat.call(null,cljs.core.rest.call(null,coll__11488),colls));
} else
{if(cljs.core.seq.call(null,colls))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
}),null));
});
return cat__11489.call(null,null,colls);
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
var G__11490__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__11490 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11490__delegate.call(this, f, coll, colls);
};
G__11490.cljs$lang$maxFixedArity = 2;
G__11490.cljs$lang$applyTo = (function (arglist__11491){
var f = cljs.core.first(arglist__11491);
var coll = cljs.core.first(cljs.core.next(arglist__11491));
var colls = cljs.core.rest(cljs.core.next(arglist__11491));
return G__11490__delegate(f, coll, colls);
});
G__11490.cljs$lang$arity$variadic = G__11490__delegate;
return G__11490;
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
var temp__3974__auto____11501 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____11501)
{var s__11502 = temp__3974__auto____11501;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11502))
{var c__11503 = cljs.core.chunk_first.call(null,s__11502);
var size__11504 = cljs.core.count.call(null,c__11503);
var b__11505 = cljs.core.chunk_buffer.call(null,size__11504);
var n__5401__auto____11506 = size__11504;
var i__11507 = 0;
while(true){
if((i__11507 < n__5401__auto____11506))
{if(cljs.core.truth_(pred.call(null,cljs.core._nth.call(null,c__11503,i__11507))))
{cljs.core.chunk_append.call(null,b__11505,cljs.core._nth.call(null,c__11503,i__11507));
} else
{}
{
var G__11510 = (i__11507 + 1);
i__11507 = G__11510;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11505),filter.call(null,pred,cljs.core.chunk_rest.call(null,s__11502)));
} else
{var f__11508 = cljs.core.first.call(null,s__11502);
var r__11509 = cljs.core.rest.call(null,s__11502);
if(cljs.core.truth_(pred.call(null,f__11508)))
{return cljs.core.cons.call(null,f__11508,filter.call(null,pred,r__11509));
} else
{return filter.call(null,pred,r__11509);
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
var walk__11513 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
}),null));
});
return walk__11513.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__11511_SHARP_){
return !(cljs.core.sequential_QMARK_.call(null,p1__11511_SHARP_));
}),cljs.core.rest.call(null,cljs.core.tree_seq.call(null,cljs.core.sequential_QMARK_,cljs.core.seq,x)));
});
/**
* Returns a new coll consisting of to-coll with all of the items of
* from-coll conjoined.
*/
cljs.core.into = (function into(to,from){
if((function (){var G__11517__11518 = to;
if(G__11517__11518)
{if((function (){var or__3824__auto____11519 = (G__11517__11518.cljs$lang$protocol_mask$partition1$ & 4);
if(or__3824__auto____11519)
{return or__3824__auto____11519;
} else
{return G__11517__11518.cljs$core$IEditableCollection$;
}
})())
{return true;
} else
{if((!G__11517__11518.cljs$lang$protocol_mask$partition1$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IEditableCollection,G__11517__11518);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IEditableCollection,G__11517__11518);
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
var G__11520__delegate = function (f,c1,c2,c3,colls){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.apply.call(null,cljs.core.map,f,c1,c2,c3,colls));
};
var G__11520 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__11520__delegate.call(this, f, c1, c2, c3, colls);
};
G__11520.cljs$lang$maxFixedArity = 4;
G__11520.cljs$lang$applyTo = (function (arglist__11521){
var f = cljs.core.first(arglist__11521);
var c1 = cljs.core.first(cljs.core.next(arglist__11521));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11521)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11521))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11521))));
return G__11520__delegate(f, c1, c2, c3, colls);
});
G__11520.cljs$lang$arity$variadic = G__11520__delegate;
return G__11520;
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
var temp__3974__auto____11528 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____11528)
{var s__11529 = temp__3974__auto____11528;
var p__11530 = cljs.core.take.call(null,n,s__11529);
if((n === cljs.core.count.call(null,p__11530)))
{return cljs.core.cons.call(null,p__11530,partition.call(null,n,step,cljs.core.drop.call(null,step,s__11529)));
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
var temp__3974__auto____11531 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____11531)
{var s__11532 = temp__3974__auto____11531;
var p__11533 = cljs.core.take.call(null,n,s__11532);
if((n === cljs.core.count.call(null,p__11533)))
{return cljs.core.cons.call(null,p__11533,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__11532)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__11533,pad)));
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
var sentinel__11538 = cljs.core.lookup_sentinel;
var m__11539 = m;
var ks__11540 = cljs.core.seq.call(null,ks);
while(true){
if(ks__11540)
{var m__11541 = cljs.core._lookup.call(null,m__11539,cljs.core.first.call(null,ks__11540),sentinel__11538);
if((sentinel__11538 === m__11541))
{return not_found;
} else
{{
var G__11542 = sentinel__11538;
var G__11543 = m__11541;
var G__11544 = cljs.core.next.call(null,ks__11540);
sentinel__11538 = G__11542;
m__11539 = G__11543;
ks__11540 = G__11544;
continue;
}
}
} else
{return m__11539;
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
cljs.core.assoc_in = (function assoc_in(m,p__11545,v){
var vec__11550__11551 = p__11545;
var k__11552 = cljs.core.nth.call(null,vec__11550__11551,0,null);
var ks__11553 = cljs.core.nthnext.call(null,vec__11550__11551,1);
if(cljs.core.truth_(ks__11553))
{return cljs.core.assoc.call(null,m,k__11552,assoc_in.call(null,cljs.core._lookup.call(null,m,k__11552,null),ks__11553,v));
} else
{return cljs.core.assoc.call(null,m,k__11552,v);
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
var update_in__delegate = function (m,p__11554,f,args){
var vec__11559__11560 = p__11554;
var k__11561 = cljs.core.nth.call(null,vec__11559__11560,0,null);
var ks__11562 = cljs.core.nthnext.call(null,vec__11559__11560,1);
if(cljs.core.truth_(ks__11562))
{return cljs.core.assoc.call(null,m,k__11561,cljs.core.apply.call(null,update_in,cljs.core._lookup.call(null,m,k__11561,null),ks__11562,f,args));
} else
{return cljs.core.assoc.call(null,m,k__11561,cljs.core.apply.call(null,f,cljs.core._lookup.call(null,m,k__11561,null),args));
}
};
var update_in = function (m,p__11554,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__11554, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__11563){
var m = cljs.core.first(arglist__11563);
var p__11554 = cljs.core.first(cljs.core.next(arglist__11563));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11563)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11563)));
return update_in__delegate(m, p__11554, f, args);
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
cljs.core.Vector.cljs$lang$ctorPrSeq = (function (this__5174__auto__){
return cljs.core.list.call(null,"cljs.core/Vector");
});
cljs.core.Vector.cljs$lang$ctorPrWriter = (function (this__5174__auto__,writer__5175__auto__){
return cljs.core._write.call(null,writer__5175__auto__,"cljs.core/Vector");
});
cljs.core.Vector.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__11566 = this;
var h__5055__auto____11567 = this__11566.__hash;
if(!((h__5055__auto____11567 == null)))
{return h__5055__auto____11567;
} else
{var h__5055__auto____11568 = cljs.core.hash_coll.call(null,coll);
this__11566.__hash = h__5055__auto____11568;
return h__5055__auto____11568;
}
});
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__11569 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__11570 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__11571 = this;
var new_array__11572 = this__11571.array.slice();
(new_array__11572[k] = v);
return (new cljs.core.Vector(this__11571.meta,new_array__11572,null));
});
cljs.core.Vector.prototype.call = (function() {
var G__11603 = null;
var G__11603__2 = (function (this_sym11573,k){
var this__11575 = this;
var this_sym11573__11576 = this;
var coll__11577 = this_sym11573__11576;
return coll__11577.cljs$core$ILookup$_lookup$arity$2(coll__11577,k);
});
var G__11603__3 = (function (this_sym11574,k,not_found){
var this__11575 = this;
var this_sym11574__11578 = this;
var coll__11579 = this_sym11574__11578;
return coll__11579.cljs$core$ILookup$_lookup$arity$3(coll__11579,k,not_found);
});
G__11603 = function(this_sym11574,k,not_found){
switch(arguments.length){
case 2:
return G__11603__2.call(this,this_sym11574,k);
case 3:
return G__11603__3.call(this,this_sym11574,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11603;
})()
;
cljs.core.Vector.prototype.apply = (function (this_sym11564,args11565){
var this__11580 = this;
return this_sym11564.call.apply(this_sym11564,[this_sym11564].concat(args11565.slice()));
});
cljs.core.Vector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__11581 = this;
var new_array__11582 = this__11581.array.slice();
new_array__11582.push(o);
return (new cljs.core.Vector(this__11581.meta,new_array__11582,null));
});
cljs.core.Vector.prototype.toString = (function (){
var this__11583 = this;
var this__11584 = this;
return cljs.core.pr_str.call(null,this__11584);
});
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var this__11585 = this;
return cljs.core.ci_reduce.call(null,this__11585.array,f);
});
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var this__11586 = this;
return cljs.core.ci_reduce.call(null,this__11586.array,f,start);
});
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__11587 = this;
if((this__11587.array.length > 0))
{var vector_seq__11588 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if((i < this__11587.array.length))
{return cljs.core.cons.call(null,(this__11587.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
}),null));
});
return vector_seq__11588.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__11589 = this;
return this__11589.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__11590 = this;
var count__11591 = this__11590.array.length;
if((count__11591 > 0))
{return (this__11590.array[(count__11591 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__11592 = this;
if((this__11592.array.length > 0))
{var new_array__11593 = this__11592.array.slice();
new_array__11593.pop();
return (new cljs.core.Vector(this__11592.meta,new_array__11593,null));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__11594 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__11595 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__11596 = this;
return (new cljs.core.Vector(meta,this__11596.array,this__11596.__hash));
});
cljs.core.Vector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__11597 = this;
return this__11597.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__11598 = this;
if((function (){var and__3822__auto____11599 = (0 <= n);
if(and__3822__auto____11599)
{return (n < this__11598.array.length);
} else
{return and__3822__auto____11599;
}
})())
{return (this__11598.array[n]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__11600 = this;
if((function (){var and__3822__auto____11601 = (0 <= n);
if(and__3822__auto____11601)
{return (n < this__11600.array.length);
} else
{return and__3822__auto____11601;
}
})())
{return (this__11600.array[n]);
} else
{return not_found;
}
});
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__11602 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__11602.meta);
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
cljs.core.VectorNode.cljs$lang$ctorPrSeq = (function (this__5176__auto__){
return cljs.core.list.call(null,"cljs.core/VectorNode");
});
cljs.core.VectorNode.cljs$lang$ctorPrWriter = (function (this__5176__auto__,writer__5177__auto__){
return cljs.core._write.call(null,writer__5177__auto__,"cljs.core/VectorNode");
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
var cnt__11605 = pv.cnt;
if((cnt__11605 < 32))
{return 0;
} else
{return (((cnt__11605 - 1) >>> 5) << 5);
}
});
cljs.core.new_path = (function new_path(edit,level,node){
var ll__11611 = level;
var ret__11612 = node;
while(true){
if((ll__11611 === 0))
{return ret__11612;
} else
{var embed__11613 = ret__11612;
var r__11614 = cljs.core.pv_fresh_node.call(null,edit);
var ___11615 = cljs.core.pv_aset.call(null,r__11614,0,embed__11613);
{
var G__11616 = (ll__11611 - 5);
var G__11617 = r__11614;
ll__11611 = G__11616;
ret__11612 = G__11617;
continue;
}
}
break;
}
});
cljs.core.push_tail = (function push_tail(pv,level,parent,tailnode){
var ret__11623 = cljs.core.pv_clone_node.call(null,parent);
var subidx__11624 = (((pv.cnt - 1) >>> level) & 31);
if((5 === level))
{cljs.core.pv_aset.call(null,ret__11623,subidx__11624,tailnode);
return ret__11623;
} else
{var child__11625 = cljs.core.pv_aget.call(null,parent,subidx__11624);
if(!((child__11625 == null)))
{var node_to_insert__11626 = push_tail.call(null,pv,(level - 5),child__11625,tailnode);
cljs.core.pv_aset.call(null,ret__11623,subidx__11624,node_to_insert__11626);
return ret__11623;
} else
{var node_to_insert__11627 = cljs.core.new_path.call(null,null,(level - 5),tailnode);
cljs.core.pv_aset.call(null,ret__11623,subidx__11624,node_to_insert__11627);
return ret__11623;
}
}
});
cljs.core.array_for = (function array_for(pv,i){
if((function (){var and__3822__auto____11631 = (0 <= i);
if(and__3822__auto____11631)
{return (i < pv.cnt);
} else
{return and__3822__auto____11631;
}
})())
{if((i >= cljs.core.tail_off.call(null,pv)))
{return pv.tail;
} else
{var node__11632 = pv.root;
var level__11633 = pv.shift;
while(true){
if((level__11633 > 0))
{{
var G__11634 = cljs.core.pv_aget.call(null,node__11632,((i >>> level__11633) & 31));
var G__11635 = (level__11633 - 5);
node__11632 = G__11634;
level__11633 = G__11635;
continue;
}
} else
{return node__11632.arr;
}
break;
}
}
} else
{throw (new Error([cljs.core.str("No item "),cljs.core.str(i),cljs.core.str(" in vector of length "),cljs.core.str(pv.cnt)].join('')));
}
});
cljs.core.do_assoc = (function do_assoc(pv,level,node,i,val){
var ret__11638 = cljs.core.pv_clone_node.call(null,node);
if((level === 0))
{cljs.core.pv_aset.call(null,ret__11638,(i & 31),val);
return ret__11638;
} else
{var subidx__11639 = ((i >>> level) & 31);
cljs.core.pv_aset.call(null,ret__11638,subidx__11639,do_assoc.call(null,pv,(level - 5),cljs.core.pv_aget.call(null,node,subidx__11639),i,val));
return ret__11638;
}
});
cljs.core.pop_tail = (function pop_tail(pv,level,node){
var subidx__11645 = (((pv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child__11646 = pop_tail.call(null,pv,(level - 5),cljs.core.pv_aget.call(null,node,subidx__11645));
if((function (){var and__3822__auto____11647 = (new_child__11646 == null);
if(and__3822__auto____11647)
{return (subidx__11645 === 0);
} else
{return and__3822__auto____11647;
}
})())
{return null;
} else
{var ret__11648 = cljs.core.pv_clone_node.call(null,node);
cljs.core.pv_aset.call(null,ret__11648,subidx__11645,new_child__11646);
return ret__11648;
}
} else
{if((subidx__11645 === 0))
{return null;
} else
{if("\uFDD0'else")
{var ret__11649 = cljs.core.pv_clone_node.call(null,node);
cljs.core.pv_aset.call(null,ret__11649,subidx__11645,null);
return ret__11649;
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
cljs.core.PersistentVector.cljs$lang$ctorPrSeq = (function (this__5174__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentVector");
});
cljs.core.PersistentVector.cljs$lang$ctorPrWriter = (function (this__5174__auto__,writer__5175__auto__){
return cljs.core._write.call(null,writer__5175__auto__,"cljs.core/PersistentVector");
});
cljs.core.PersistentVector.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__11652 = this;
return (new cljs.core.TransientVector(this__11652.cnt,this__11652.shift,cljs.core.tv_editable_root.call(null,this__11652.root),cljs.core.tv_editable_tail.call(null,this__11652.tail)));
});
cljs.core.PersistentVector.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__11653 = this;
var h__5055__auto____11654 = this__11653.__hash;
if(!((h__5055__auto____11654 == null)))
{return h__5055__auto____11654;
} else
{var h__5055__auto____11655 = cljs.core.hash_coll.call(null,coll);
this__11653.__hash = h__5055__auto____11655;
return h__5055__auto____11655;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__11656 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__11657 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__11658 = this;
if((function (){var and__3822__auto____11659 = (0 <= k);
if(and__3822__auto____11659)
{return (k < this__11658.cnt);
} else
{return and__3822__auto____11659;
}
})())
{if((cljs.core.tail_off.call(null,coll) <= k))
{var new_tail__11660 = this__11658.tail.slice();
(new_tail__11660[(k & 31)] = v);
return (new cljs.core.PersistentVector(this__11658.meta,this__11658.cnt,this__11658.shift,this__11658.root,new_tail__11660,null));
} else
{return (new cljs.core.PersistentVector(this__11658.meta,this__11658.cnt,this__11658.shift,cljs.core.do_assoc.call(null,coll,this__11658.shift,this__11658.root,k,v),this__11658.tail,null));
}
} else
{if((k === this__11658.cnt))
{return coll.cljs$core$ICollection$_conj$arity$2(coll,v);
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Index "),cljs.core.str(k),cljs.core.str(" out of bounds  [0,"),cljs.core.str(this__11658.cnt),cljs.core.str("]")].join('')));
} else
{return null;
}
}
}
});
cljs.core.PersistentVector.prototype.call = (function() {
var G__11708 = null;
var G__11708__2 = (function (this_sym11661,k){
var this__11663 = this;
var this_sym11661__11664 = this;
var coll__11665 = this_sym11661__11664;
return coll__11665.cljs$core$ILookup$_lookup$arity$2(coll__11665,k);
});
var G__11708__3 = (function (this_sym11662,k,not_found){
var this__11663 = this;
var this_sym11662__11666 = this;
var coll__11667 = this_sym11662__11666;
return coll__11667.cljs$core$ILookup$_lookup$arity$3(coll__11667,k,not_found);
});
G__11708 = function(this_sym11662,k,not_found){
switch(arguments.length){
case 2:
return G__11708__2.call(this,this_sym11662,k);
case 3:
return G__11708__3.call(this,this_sym11662,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11708;
})()
;
cljs.core.PersistentVector.prototype.apply = (function (this_sym11650,args11651){
var this__11668 = this;
return this_sym11650.call.apply(this_sym11650,[this_sym11650].concat(args11651.slice()));
});
cljs.core.PersistentVector.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (v,f,init){
var this__11669 = this;
var step_init__11670 = [0,init];
var i__11671 = 0;
while(true){
if((i__11671 < this__11669.cnt))
{var arr__11672 = cljs.core.array_for.call(null,v,i__11671);
var len__11673 = arr__11672.length;
var init__11677 = (function (){var j__11674 = 0;
var init__11675 = (step_init__11670[1]);
while(true){
if((j__11674 < len__11673))
{var init__11676 = f.call(null,init__11675,(j__11674 + i__11671),(arr__11672[j__11674]));
if(cljs.core.reduced_QMARK_.call(null,init__11676))
{return init__11676;
} else
{{
var G__11709 = (j__11674 + 1);
var G__11710 = init__11676;
j__11674 = G__11709;
init__11675 = G__11710;
continue;
}
}
} else
{(step_init__11670[0] = len__11673);
(step_init__11670[1] = init__11675);
return init__11675;
}
break;
}
})();
if(cljs.core.reduced_QMARK_.call(null,init__11677))
{return cljs.core.deref.call(null,init__11677);
} else
{{
var G__11711 = (i__11671 + (step_init__11670[0]));
i__11671 = G__11711;
continue;
}
}
} else
{return (step_init__11670[1]);
}
break;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__11678 = this;
if(((this__11678.cnt - cljs.core.tail_off.call(null,coll)) < 32))
{var new_tail__11679 = this__11678.tail.slice();
new_tail__11679.push(o);
return (new cljs.core.PersistentVector(this__11678.meta,(this__11678.cnt + 1),this__11678.shift,this__11678.root,new_tail__11679,null));
} else
{var root_overflow_QMARK___11680 = ((this__11678.cnt >>> 5) > (1 << this__11678.shift));
var new_shift__11681 = ((root_overflow_QMARK___11680)?(this__11678.shift + 5):this__11678.shift);
var new_root__11683 = ((root_overflow_QMARK___11680)?(function (){var n_r__11682 = cljs.core.pv_fresh_node.call(null,null);
cljs.core.pv_aset.call(null,n_r__11682,0,this__11678.root);
cljs.core.pv_aset.call(null,n_r__11682,1,cljs.core.new_path.call(null,null,this__11678.shift,(new cljs.core.VectorNode(null,this__11678.tail))));
return n_r__11682;
})():cljs.core.push_tail.call(null,coll,this__11678.shift,this__11678.root,(new cljs.core.VectorNode(null,this__11678.tail))));
return (new cljs.core.PersistentVector(this__11678.meta,(this__11678.cnt + 1),new_shift__11681,new_root__11683,[o],null));
}
});
cljs.core.PersistentVector.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__11684 = this;
if((this__11684.cnt > 0))
{return (new cljs.core.RSeq(coll,(this__11684.cnt - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (coll){
var this__11685 = this;
return coll.cljs$core$IIndexed$_nth$arity$2(coll,0);
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (coll){
var this__11686 = this;
return coll.cljs$core$IIndexed$_nth$arity$2(coll,1);
});
cljs.core.PersistentVector.prototype.toString = (function (){
var this__11687 = this;
var this__11688 = this;
return cljs.core.pr_str.call(null,this__11688);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var this__11689 = this;
return cljs.core.ci_reduce.call(null,v,f);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var this__11690 = this;
return cljs.core.ci_reduce.call(null,v,f,start);
});
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__11691 = this;
if((this__11691.cnt === 0))
{return null;
} else
{return cljs.core.chunked_seq.call(null,coll,0,0);
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__11692 = this;
return this__11692.cnt;
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__11693 = this;
if((this__11693.cnt > 0))
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,(this__11693.cnt - 1));
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__11694 = this;
if((this__11694.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === this__11694.cnt))
{return cljs.core._with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__11694.meta);
} else
{if((1 < (this__11694.cnt - cljs.core.tail_off.call(null,coll))))
{return (new cljs.core.PersistentVector(this__11694.meta,(this__11694.cnt - 1),this__11694.shift,this__11694.root,this__11694.tail.slice(0,-1),null));
} else
{if("\uFDD0'else")
{var new_tail__11695 = cljs.core.array_for.call(null,coll,(this__11694.cnt - 2));
var nr__11696 = cljs.core.pop_tail.call(null,coll,this__11694.shift,this__11694.root);
var new_root__11697 = (((nr__11696 == null))?cljs.core.PersistentVector.EMPTY_NODE:nr__11696);
var cnt_1__11698 = (this__11694.cnt - 1);
if((function (){var and__3822__auto____11699 = (5 < this__11694.shift);
if(and__3822__auto____11699)
{return (cljs.core.pv_aget.call(null,new_root__11697,1) == null);
} else
{return and__3822__auto____11699;
}
})())
{return (new cljs.core.PersistentVector(this__11694.meta,cnt_1__11698,(this__11694.shift - 5),cljs.core.pv_aget.call(null,new_root__11697,0),new_tail__11695,null));
} else
{return (new cljs.core.PersistentVector(this__11694.meta,cnt_1__11698,this__11694.shift,new_root__11697,new_tail__11695,null));
}
} else
{return null;
}
}
}
}
});
cljs.core.PersistentVector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__11700 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__11701 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__11702 = this;
return (new cljs.core.PersistentVector(meta,this__11702.cnt,this__11702.shift,this__11702.root,this__11702.tail,this__11702.__hash));
});
cljs.core.PersistentVector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__11703 = this;
return this__11703.meta;
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__11704 = this;
return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__11705 = this;
if((function (){var and__3822__auto____11706 = (0 <= n);
if(and__3822__auto____11706)
{return (n < this__11705.cnt);
} else
{return and__3822__auto____11706;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return not_found;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__11707 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__11707.meta);
});
cljs.core.PersistentVector;
cljs.core.PersistentVector.EMPTY_NODE = cljs.core.pv_fresh_node.call(null,null);
cljs.core.PersistentVector.EMPTY = (new cljs.core.PersistentVector(null,0,5,cljs.core.PersistentVector.EMPTY_NODE,[],0));
cljs.core.PersistentVector.fromArray = (function (xs,no_clone){
var l__11712 = xs.length;
var xs__11713 = (((no_clone === true))?xs:xs.slice());
if((l__11712 < 32))
{return (new cljs.core.PersistentVector(null,l__11712,5,cljs.core.PersistentVector.EMPTY_NODE,xs__11713,null));
} else
{var node__11714 = xs__11713.slice(0,32);
var v__11715 = (new cljs.core.PersistentVector(null,32,5,cljs.core.PersistentVector.EMPTY_NODE,node__11714,null));
var i__11716 = 32;
var out__11717 = cljs.core._as_transient.call(null,v__11715);
while(true){
if((i__11716 < l__11712))
{{
var G__11718 = (i__11716 + 1);
var G__11719 = cljs.core.conj_BANG_.call(null,out__11717,(xs__11713[i__11716]));
i__11716 = G__11718;
out__11717 = G__11719;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__11717);
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
vector.cljs$lang$applyTo = (function (arglist__11720){
var args = cljs.core.seq(arglist__11720);;
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
cljs.core.ChunkedSeq.cljs$lang$ctorPrSeq = (function (this__5174__auto__){
return cljs.core.list.call(null,"cljs.core/ChunkedSeq");
});
cljs.core.ChunkedSeq.cljs$lang$ctorPrWriter = (function (this__5174__auto__,writer__5175__auto__){
return cljs.core._write.call(null,writer__5175__auto__,"cljs.core/ChunkedSeq");
});
cljs.core.ChunkedSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__11721 = this;
var h__5055__auto____11722 = this__11721.__hash;
if(!((h__5055__auto____11722 == null)))
{return h__5055__auto____11722;
} else
{var h__5055__auto____11723 = cljs.core.hash_coll.call(null,coll);
this__11721.__hash = h__5055__auto____11723;
return h__5055__auto____11723;
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__11724 = this;
if(((this__11724.off + 1) < this__11724.node.length))
{var s__11725 = cljs.core.chunked_seq.call(null,this__11724.vec,this__11724.node,this__11724.i,(this__11724.off + 1));
if((s__11725 == null))
{return null;
} else
{return s__11725;
}
} else
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__11726 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__11727 = this;
return coll;
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__11728 = this;
return (this__11728.node[this__11728.off]);
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__11729 = this;
if(((this__11729.off + 1) < this__11729.node.length))
{var s__11730 = cljs.core.chunked_seq.call(null,this__11729.vec,this__11729.node,this__11729.i,(this__11729.off + 1));
if((s__11730 == null))
{return cljs.core.List.EMPTY;
} else
{return s__11730;
}
} else
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var this__11731 = this;
var l__11732 = this__11731.node.length;
var s__11733 = ((((this__11731.i + l__11732) < cljs.core._count.call(null,this__11731.vec)))?cljs.core.chunked_seq.call(null,this__11731.vec,(this__11731.i + l__11732),0):null);
if((s__11733 == null))
{return null;
} else
{return s__11733;
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__11734 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var this__11735 = this;
return cljs.core.chunked_seq.call(null,this__11735.vec,this__11735.node,this__11735.i,this__11735.off,m);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_meta$arity$1 = (function (coll){
var this__11736 = this;
return this__11736.meta;
});
cljs.core.ChunkedSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__11737 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__11737.meta);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var this__11738 = this;
return cljs.core.array_chunk.call(null,this__11738.node,this__11738.off);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var this__11739 = this;
var l__11740 = this__11739.node.length;
var s__11741 = ((((this__11739.i + l__11740) < cljs.core._count.call(null,this__11739.vec)))?cljs.core.chunked_seq.call(null,this__11739.vec,(this__11739.i + l__11740),0):null);
if((s__11741 == null))
{return cljs.core.List.EMPTY;
} else
{return s__11741;
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
cljs.core.Subvec.cljs$lang$ctorPrSeq = (function (this__5174__auto__){
return cljs.core.list.call(null,"cljs.core/Subvec");
});
cljs.core.Subvec.cljs$lang$ctorPrWriter = (function (this__5174__auto__,writer__5175__auto__){
return cljs.core._write.call(null,writer__5175__auto__,"cljs.core/Subvec");
});
cljs.core.Subvec.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__11744 = this;
var h__5055__auto____11745 = this__11744.__hash;
if(!((h__5055__auto____11745 == null)))
{return h__5055__auto____11745;
} else
{var h__5055__auto____11746 = cljs.core.hash_coll.call(null,coll);
this__11744.__hash = h__5055__auto____11746;
return h__5055__auto____11746;
}
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__11747 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__11748 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,key,val){
var this__11749 = this;
var v_pos__11750 = (this__11749.start + key);
return (new cljs.core.Subvec(this__11749.meta,cljs.core._assoc.call(null,this__11749.v,v_pos__11750,val),this__11749.start,((this__11749.end > (v_pos__11750 + 1)) ? this__11749.end : (v_pos__11750 + 1)),null));
});
cljs.core.Subvec.prototype.call = (function() {
var G__11776 = null;
var G__11776__2 = (function (this_sym11751,k){
var this__11753 = this;
var this_sym11751__11754 = this;
var coll__11755 = this_sym11751__11754;
return coll__11755.cljs$core$ILookup$_lookup$arity$2(coll__11755,k);
});
var G__11776__3 = (function (this_sym11752,k,not_found){
var this__11753 = this;
var this_sym11752__11756 = this;
var coll__11757 = this_sym11752__11756;
return coll__11757.cljs$core$ILookup$_lookup$arity$3(coll__11757,k,not_found);
});
G__11776 = function(this_sym11752,k,not_found){
switch(arguments.length){
case 2:
return G__11776__2.call(this,this_sym11752,k);
case 3:
return G__11776__3.call(this,this_sym11752,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11776;
})()
;
cljs.core.Subvec.prototype.apply = (function (this_sym11742,args11743){
var this__11758 = this;
return this_sym11742.call.apply(this_sym11742,[this_sym11742].concat(args11743.slice()));
});
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__11759 = this;
return (new cljs.core.Subvec(this__11759.meta,cljs.core._assoc_n.call(null,this__11759.v,this__11759.end,o),this__11759.start,(this__11759.end + 1),null));
});
cljs.core.Subvec.prototype.toString = (function (){
var this__11760 = this;
var this__11761 = this;
return cljs.core.pr_str.call(null,this__11761);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__11762 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__11763 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__11764 = this;
var subvec_seq__11765 = (function subvec_seq(i){
if((i === this__11764.end))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__11764.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}),null)));
}
});
return subvec_seq__11765.call(null,this__11764.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__11766 = this;
return (this__11766.end - this__11766.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__11767 = this;
return cljs.core._nth.call(null,this__11767.v,(this__11767.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__11768 = this;
if((this__11768.start === this__11768.end))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__11768.meta,this__11768.v,this__11768.start,(this__11768.end - 1),null));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__11769 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__11770 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__11771 = this;
return (new cljs.core.Subvec(meta,this__11771.v,this__11771.start,this__11771.end,this__11771.__hash));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__11772 = this;
return this__11772.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__11773 = this;
return cljs.core._nth.call(null,this__11773.v,(this__11773.start + n));
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__11774 = this;
return cljs.core._nth.call(null,this__11774.v,(this__11774.start + n),not_found);
});
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__11775 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__11775.meta);
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
var ret__11778 = cljs.core.make_array.call(null,32);
cljs.core.array_copy.call(null,tl,0,ret__11778,0,tl.length);
return ret__11778;
});
cljs.core.tv_push_tail = (function tv_push_tail(tv,level,parent,tail_node){
var ret__11782 = cljs.core.tv_ensure_editable.call(null,tv.root.edit,parent);
var subidx__11783 = (((tv.cnt - 1) >>> level) & 31);
cljs.core.pv_aset.call(null,ret__11782,subidx__11783,(((level === 5))?tail_node:(function (){var child__11784 = cljs.core.pv_aget.call(null,ret__11782,subidx__11783);
if(!((child__11784 == null)))
{return tv_push_tail.call(null,tv,(level - 5),child__11784,tail_node);
} else
{return cljs.core.new_path.call(null,tv.root.edit,(level - 5),tail_node);
}
})()));
return ret__11782;
});
cljs.core.tv_pop_tail = (function tv_pop_tail(tv,level,node){
var node__11789 = cljs.core.tv_ensure_editable.call(null,tv.root.edit,node);
var subidx__11790 = (((tv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child__11791 = tv_pop_tail.call(null,tv,(level - 5),cljs.core.pv_aget.call(null,node__11789,subidx__11790));
if((function (){var and__3822__auto____11792 = (new_child__11791 == null);
if(and__3822__auto____11792)
{return (subidx__11790 === 0);
} else
{return and__3822__auto____11792;
}
})())
{return null;
} else
{cljs.core.pv_aset.call(null,node__11789,subidx__11790,new_child__11791);
return node__11789;
}
} else
{if((subidx__11790 === 0))
{return null;
} else
{if("\uFDD0'else")
{cljs.core.pv_aset.call(null,node__11789,subidx__11790,null);
return node__11789;
} else
{return null;
}
}
}
});
cljs.core.editable_array_for = (function editable_array_for(tv,i){
if((function (){var and__3822__auto____11797 = (0 <= i);
if(and__3822__auto____11797)
{return (i < tv.cnt);
} else
{return and__3822__auto____11797;
}
})())
{if((i >= cljs.core.tail_off.call(null,tv)))
{return tv.tail;
} else
{var root__11798 = tv.root;
var node__11799 = root__11798;
var level__11800 = tv.shift;
while(true){
if((level__11800 > 0))
{{
var G__11801 = cljs.core.tv_ensure_editable.call(null,root__11798.edit,cljs.core.pv_aget.call(null,node__11799,((i >>> level__11800) & 31)));
var G__11802 = (level__11800 - 5);
node__11799 = G__11801;
level__11800 = G__11802;
continue;
}
} else
{return node__11799.arr;
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
cljs.core.TransientVector.cljs$lang$ctorPrSeq = (function (this__5174__auto__){
return cljs.core.list.call(null,"cljs.core/TransientVector");
});
cljs.core.TransientVector.cljs$lang$ctorPrWriter = (function (this__5174__auto__,writer__5175__auto__){
return cljs.core._write.call(null,writer__5175__auto__,"cljs.core/TransientVector");
});
cljs.core.TransientVector.prototype.call = (function() {
var G__11842 = null;
var G__11842__2 = (function (this_sym11805,k){
var this__11807 = this;
var this_sym11805__11808 = this;
var coll__11809 = this_sym11805__11808;
return coll__11809.cljs$core$ILookup$_lookup$arity$2(coll__11809,k);
});
var G__11842__3 = (function (this_sym11806,k,not_found){
var this__11807 = this;
var this_sym11806__11810 = this;
var coll__11811 = this_sym11806__11810;
return coll__11811.cljs$core$ILookup$_lookup$arity$3(coll__11811,k,not_found);
});
G__11842 = function(this_sym11806,k,not_found){
switch(arguments.length){
case 2:
return G__11842__2.call(this,this_sym11806,k);
case 3:
return G__11842__3.call(this,this_sym11806,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11842;
})()
;
cljs.core.TransientVector.prototype.apply = (function (this_sym11803,args11804){
var this__11812 = this;
return this_sym11803.call.apply(this_sym11803,[this_sym11803].concat(args11804.slice()));
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__11813 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__11814 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__11815 = this;
if(this__11815.root.edit)
{return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
} else
{throw (new Error("nth after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__11816 = this;
if((function (){var and__3822__auto____11817 = (0 <= n);
if(and__3822__auto____11817)
{return (n < this__11816.cnt);
} else
{return and__3822__auto____11817;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return not_found;
}
});
cljs.core.TransientVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__11818 = this;
if(this__11818.root.edit)
{return this__11818.cnt;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3 = (function (tcoll,n,val){
var this__11819 = this;
if(this__11819.root.edit)
{if((function (){var and__3822__auto____11820 = (0 <= n);
if(and__3822__auto____11820)
{return (n < this__11819.cnt);
} else
{return and__3822__auto____11820;
}
})())
{if((cljs.core.tail_off.call(null,tcoll) <= n))
{(this__11819.tail[(n & 31)] = val);
return tcoll;
} else
{var new_root__11825 = (function go(level,node){
var node__11823 = cljs.core.tv_ensure_editable.call(null,this__11819.root.edit,node);
if((level === 0))
{cljs.core.pv_aset.call(null,node__11823,(n & 31),val);
return node__11823;
} else
{var subidx__11824 = ((n >>> level) & 31);
cljs.core.pv_aset.call(null,node__11823,subidx__11824,go.call(null,(level - 5),cljs.core.pv_aget.call(null,node__11823,subidx__11824)));
return node__11823;
}
}).call(null,this__11819.shift,this__11819.root);
this__11819.root = new_root__11825;
return tcoll;
}
} else
{if((n === this__11819.cnt))
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Index "),cljs.core.str(n),cljs.core.str(" out of bounds for TransientVector of length"),cljs.core.str(this__11819.cnt)].join('')));
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
var this__11826 = this;
if(this__11826.root.edit)
{if((this__11826.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === this__11826.cnt))
{this__11826.cnt = 0;
return tcoll;
} else
{if((((this__11826.cnt - 1) & 31) > 0))
{this__11826.cnt = (this__11826.cnt - 1);
return tcoll;
} else
{if("\uFDD0'else")
{var new_tail__11827 = cljs.core.editable_array_for.call(null,tcoll,(this__11826.cnt - 2));
var new_root__11829 = (function (){var nr__11828 = cljs.core.tv_pop_tail.call(null,tcoll,this__11826.shift,this__11826.root);
if(!((nr__11828 == null)))
{return nr__11828;
} else
{return (new cljs.core.VectorNode(this__11826.root.edit,cljs.core.make_array.call(null,32)));
}
})();
if((function (){var and__3822__auto____11830 = (5 < this__11826.shift);
if(and__3822__auto____11830)
{return (cljs.core.pv_aget.call(null,new_root__11829,1) == null);
} else
{return and__3822__auto____11830;
}
})())
{var new_root__11831 = cljs.core.tv_ensure_editable.call(null,this__11826.root.edit,cljs.core.pv_aget.call(null,new_root__11829,0));
this__11826.root = new_root__11831;
this__11826.shift = (this__11826.shift - 5);
this__11826.cnt = (this__11826.cnt - 1);
this__11826.tail = new_tail__11827;
return tcoll;
} else
{this__11826.root = new_root__11829;
this__11826.cnt = (this__11826.cnt - 1);
this__11826.tail = new_tail__11827;
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
var this__11832 = this;
return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,key,val);
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__11833 = this;
if(this__11833.root.edit)
{if(((this__11833.cnt - cljs.core.tail_off.call(null,tcoll)) < 32))
{(this__11833.tail[(this__11833.cnt & 31)] = o);
this__11833.cnt = (this__11833.cnt + 1);
return tcoll;
} else
{var tail_node__11834 = (new cljs.core.VectorNode(this__11833.root.edit,this__11833.tail));
var new_tail__11835 = cljs.core.make_array.call(null,32);
(new_tail__11835[0] = o);
this__11833.tail = new_tail__11835;
if(((this__11833.cnt >>> 5) > (1 << this__11833.shift)))
{var new_root_array__11836 = cljs.core.make_array.call(null,32);
var new_shift__11837 = (this__11833.shift + 5);
(new_root_array__11836[0] = this__11833.root);
(new_root_array__11836[1] = cljs.core.new_path.call(null,this__11833.root.edit,this__11833.shift,tail_node__11834));
this__11833.root = (new cljs.core.VectorNode(this__11833.root.edit,new_root_array__11836));
this__11833.shift = new_shift__11837;
this__11833.cnt = (this__11833.cnt + 1);
return tcoll;
} else
{var new_root__11838 = cljs.core.tv_push_tail.call(null,tcoll,this__11833.shift,this__11833.root,tail_node__11834);
this__11833.root = new_root__11838;
this__11833.cnt = (this__11833.cnt + 1);
return tcoll;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__11839 = this;
if(this__11839.root.edit)
{this__11839.root.edit = null;
var len__11840 = (this__11839.cnt - cljs.core.tail_off.call(null,tcoll));
var trimmed_tail__11841 = cljs.core.make_array.call(null,len__11840);
cljs.core.array_copy.call(null,this__11839.tail,0,trimmed_tail__11841,0,len__11840);
return (new cljs.core.PersistentVector(null,this__11839.cnt,this__11839.shift,this__11839.root,trimmed_tail__11841,null));
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
cljs.core.PersistentQueueSeq.cljs$lang$ctorPrSeq = (function (this__5174__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentQueueSeq");
});
cljs.core.PersistentQueueSeq.cljs$lang$ctorPrWriter = (function (this__5174__auto__,writer__5175__auto__){
return cljs.core._write.call(null,writer__5175__auto__,"cljs.core/PersistentQueueSeq");
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__11843 = this;
var h__5055__auto____11844 = this__11843.__hash;
if(!((h__5055__auto____11844 == null)))
{return h__5055__auto____11844;
} else
{var h__5055__auto____11845 = cljs.core.hash_coll.call(null,coll);
this__11843.__hash = h__5055__auto____11845;
return h__5055__auto____11845;
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__11846 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.toString = (function (){
var this__11847 = this;
var this__11848 = this;
return cljs.core.pr_str.call(null,this__11848);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__11849 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__11850 = this;
return cljs.core._first.call(null,this__11850.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__11851 = this;
var temp__3971__auto____11852 = cljs.core.next.call(null,this__11851.front);
if(temp__3971__auto____11852)
{var f1__11853 = temp__3971__auto____11852;
return (new cljs.core.PersistentQueueSeq(this__11851.meta,f1__11853,this__11851.rear,null));
} else
{if((this__11851.rear == null))
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__11851.meta,this__11851.rear,null,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__11854 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__11855 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__11855.front,this__11855.rear,this__11855.__hash));
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__11856 = this;
return this__11856.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__11857 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__11857.meta);
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
cljs.core.PersistentQueue.cljs$lang$ctorPrSeq = (function (this__5174__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentQueue");
});
cljs.core.PersistentQueue.cljs$lang$ctorPrWriter = (function (this__5174__auto__,writer__5175__auto__){
return cljs.core._write.call(null,writer__5175__auto__,"cljs.core/PersistentQueue");
});
cljs.core.PersistentQueue.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__11858 = this;
var h__5055__auto____11859 = this__11858.__hash;
if(!((h__5055__auto____11859 == null)))
{return h__5055__auto____11859;
} else
{var h__5055__auto____11860 = cljs.core.hash_coll.call(null,coll);
this__11858.__hash = h__5055__auto____11860;
return h__5055__auto____11860;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__11861 = this;
if(cljs.core.truth_(this__11861.front))
{return (new cljs.core.PersistentQueue(this__11861.meta,(this__11861.count + 1),this__11861.front,cljs.core.conj.call(null,(function (){var or__3824__auto____11862 = this__11861.rear;
if(cljs.core.truth_(or__3824__auto____11862))
{return or__3824__auto____11862;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})(),o),null));
} else
{return (new cljs.core.PersistentQueue(this__11861.meta,(this__11861.count + 1),cljs.core.conj.call(null,this__11861.front,o),cljs.core.PersistentVector.EMPTY,null));
}
});
cljs.core.PersistentQueue.prototype.toString = (function (){
var this__11863 = this;
var this__11864 = this;
return cljs.core.pr_str.call(null,this__11864);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__11865 = this;
var rear__11866 = cljs.core.seq.call(null,this__11865.rear);
if(cljs.core.truth_((function (){var or__3824__auto____11867 = this__11865.front;
if(cljs.core.truth_(or__3824__auto____11867))
{return or__3824__auto____11867;
} else
{return rear__11866;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__11865.front,cljs.core.seq.call(null,rear__11866),null));
} else
{return null;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__11868 = this;
return this__11868.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__11869 = this;
return cljs.core._first.call(null,this__11869.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__11870 = this;
if(cljs.core.truth_(this__11870.front))
{var temp__3971__auto____11871 = cljs.core.next.call(null,this__11870.front);
if(temp__3971__auto____11871)
{var f1__11872 = temp__3971__auto____11871;
return (new cljs.core.PersistentQueue(this__11870.meta,(this__11870.count - 1),f1__11872,this__11870.rear,null));
} else
{return (new cljs.core.PersistentQueue(this__11870.meta,(this__11870.count - 1),cljs.core.seq.call(null,this__11870.rear),cljs.core.PersistentVector.EMPTY,null));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__11873 = this;
return cljs.core.first.call(null,this__11873.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__11874 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__11875 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__11876 = this;
return (new cljs.core.PersistentQueue(meta,this__11876.count,this__11876.front,this__11876.rear,this__11876.__hash));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__11877 = this;
return this__11877.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__11878 = this;
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
cljs.core.NeverEquiv.cljs$lang$ctorPrSeq = (function (this__5174__auto__){
return cljs.core.list.call(null,"cljs.core/NeverEquiv");
});
cljs.core.NeverEquiv.cljs$lang$ctorPrWriter = (function (this__5174__auto__,writer__5175__auto__){
return cljs.core._write.call(null,writer__5175__auto__,"cljs.core/NeverEquiv");
});
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var this__11879 = this;
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
var len__11882 = array.length;
var i__11883 = 0;
while(true){
if((i__11883 < len__11882))
{if((k === (array[i__11883])))
{return i__11883;
} else
{{
var G__11884 = (i__11883 + incr);
i__11883 = G__11884;
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
var a__11887 = cljs.core.hash.call(null,a);
var b__11888 = cljs.core.hash.call(null,b);
if((a__11887 < b__11888))
{return -1;
} else
{if((a__11887 > b__11888))
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
var ks__11896 = m.keys;
var len__11897 = ks__11896.length;
var so__11898 = m.strobj;
var out__11899 = cljs.core.with_meta.call(null,cljs.core.PersistentHashMap.EMPTY,cljs.core.meta.call(null,m));
var i__11900 = 0;
var out__11901 = cljs.core.transient$.call(null,out__11899);
while(true){
if((i__11900 < len__11897))
{var k__11902 = (ks__11896[i__11900]);
{
var G__11903 = (i__11900 + 1);
var G__11904 = cljs.core.assoc_BANG_.call(null,out__11901,k__11902,(so__11898[k__11902]));
i__11900 = G__11903;
out__11901 = G__11904;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,cljs.core.assoc_BANG_.call(null,out__11901,k,v));
}
break;
}
});
cljs.core.obj_clone = (function obj_clone(obj,ks){
var new_obj__11910 = {};
var l__11911 = ks.length;
var i__11912 = 0;
while(true){
if((i__11912 < l__11911))
{var k__11913 = (ks[i__11912]);
(new_obj__11910[k__11913] = (obj[k__11913]));
{
var G__11914 = (i__11912 + 1);
i__11912 = G__11914;
continue;
}
} else
{}
break;
}
return new_obj__11910;
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
cljs.core.ObjMap.cljs$lang$ctorPrSeq = (function (this__5174__auto__){
return cljs.core.list.call(null,"cljs.core/ObjMap");
});
cljs.core.ObjMap.cljs$lang$ctorPrWriter = (function (this__5174__auto__,writer__5175__auto__){
return cljs.core._write.call(null,writer__5175__auto__,"cljs.core/ObjMap");
});
cljs.core.ObjMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__11917 = this;
return cljs.core.transient$.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null),coll));
});
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__11918 = this;
var h__5055__auto____11919 = this__11918.__hash;
if(!((h__5055__auto____11919 == null)))
{return h__5055__auto____11919;
} else
{var h__5055__auto____11920 = cljs.core.hash_imap.call(null,coll);
this__11918.__hash = h__5055__auto____11920;
return h__5055__auto____11920;
}
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__11921 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__11922 = this;
if((function (){var and__3822__auto____11923 = goog.isString(k);
if(and__3822__auto____11923)
{return !((cljs.core.scan_array.call(null,1,k,this__11922.keys) == null));
} else
{return and__3822__auto____11923;
}
})())
{return (this__11922.strobj[k]);
} else
{return not_found;
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__11924 = this;
if(goog.isString(k))
{if((function (){var or__3824__auto____11925 = (this__11924.update_count > cljs.core.ObjMap.HASHMAP_THRESHOLD);
if(or__3824__auto____11925)
{return or__3824__auto____11925;
} else
{return (this__11924.keys.length >= cljs.core.ObjMap.HASHMAP_THRESHOLD);
}
})())
{return cljs.core.obj_map__GT_hash_map.call(null,coll,k,v);
} else
{if(!((cljs.core.scan_array.call(null,1,k,this__11924.keys) == null)))
{var new_strobj__11926 = cljs.core.obj_clone.call(null,this__11924.strobj,this__11924.keys);
(new_strobj__11926[k] = v);
return (new cljs.core.ObjMap(this__11924.meta,this__11924.keys,new_strobj__11926,(this__11924.update_count + 1),null));
} else
{var new_strobj__11927 = cljs.core.obj_clone.call(null,this__11924.strobj,this__11924.keys);
var new_keys__11928 = this__11924.keys.slice();
(new_strobj__11927[k] = v);
new_keys__11928.push(k);
return (new cljs.core.ObjMap(this__11924.meta,new_keys__11928,new_strobj__11927,(this__11924.update_count + 1),null));
}
}
} else
{return cljs.core.obj_map__GT_hash_map.call(null,coll,k,v);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__11929 = this;
if((function (){var and__3822__auto____11930 = goog.isString(k);
if(and__3822__auto____11930)
{return !((cljs.core.scan_array.call(null,1,k,this__11929.keys) == null));
} else
{return and__3822__auto____11930;
}
})())
{return true;
} else
{return false;
}
});
cljs.core.ObjMap.prototype.call = (function() {
var G__11952 = null;
var G__11952__2 = (function (this_sym11931,k){
var this__11933 = this;
var this_sym11931__11934 = this;
var coll__11935 = this_sym11931__11934;
return coll__11935.cljs$core$ILookup$_lookup$arity$2(coll__11935,k);
});
var G__11952__3 = (function (this_sym11932,k,not_found){
var this__11933 = this;
var this_sym11932__11936 = this;
var coll__11937 = this_sym11932__11936;
return coll__11937.cljs$core$ILookup$_lookup$arity$3(coll__11937,k,not_found);
});
G__11952 = function(this_sym11932,k,not_found){
switch(arguments.length){
case 2:
return G__11952__2.call(this,this_sym11932,k);
case 3:
return G__11952__3.call(this,this_sym11932,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11952;
})()
;
cljs.core.ObjMap.prototype.apply = (function (this_sym11915,args11916){
var this__11938 = this;
return this_sym11915.call.apply(this_sym11915,[this_sym11915].concat(args11916.slice()));
});
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__11939 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.toString = (function (){
var this__11940 = this;
var this__11941 = this;
return cljs.core.pr_str.call(null,this__11941);
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__11942 = this;
if((this__11942.keys.length > 0))
{return cljs.core.map.call(null,(function (p1__11905_SHARP_){
return cljs.core.vector.call(null,p1__11905_SHARP_,(this__11942.strobj[p1__11905_SHARP_]));
}),this__11942.keys.sort(cljs.core.obj_map_compare_keys));
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__11943 = this;
return this__11943.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__11944 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__11945 = this;
return (new cljs.core.ObjMap(meta,this__11945.keys,this__11945.strobj,this__11945.update_count,this__11945.__hash));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__11946 = this;
return this__11946.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__11947 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__11947.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__11948 = this;
if((function (){var and__3822__auto____11949 = goog.isString(k);
if(and__3822__auto____11949)
{return !((cljs.core.scan_array.call(null,1,k,this__11948.keys) == null));
} else
{return and__3822__auto____11949;
}
})())
{var new_keys__11950 = this__11948.keys.slice();
var new_strobj__11951 = cljs.core.obj_clone.call(null,this__11948.strobj,this__11948.keys);
new_keys__11950.splice(cljs.core.scan_array.call(null,1,k,new_keys__11950),1);
cljs.core.js_delete.call(null,new_strobj__11951,k);
return (new cljs.core.ObjMap(this__11948.meta,new_keys__11950,new_strobj__11951,(this__11948.update_count + 1),null));
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
cljs.core.HashMap.cljs$lang$ctorPrSeq = (function (this__5174__auto__){
return cljs.core.list.call(null,"cljs.core/HashMap");
});
cljs.core.HashMap.cljs$lang$ctorPrWriter = (function (this__5174__auto__,writer__5175__auto__){
return cljs.core._write.call(null,writer__5175__auto__,"cljs.core/HashMap");
});
cljs.core.HashMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__11956 = this;
var h__5055__auto____11957 = this__11956.__hash;
if(!((h__5055__auto____11957 == null)))
{return h__5055__auto____11957;
} else
{var h__5055__auto____11958 = cljs.core.hash_imap.call(null,coll);
this__11956.__hash = h__5055__auto____11958;
return h__5055__auto____11958;
}
});
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__11959 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__11960 = this;
var bucket__11961 = (this__11960.hashobj[cljs.core.hash.call(null,k)]);
var i__11962 = (cljs.core.truth_(bucket__11961)?cljs.core.scan_array.call(null,2,k,bucket__11961):null);
if(cljs.core.truth_(i__11962))
{return (bucket__11961[(i__11962 + 1)]);
} else
{return not_found;
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__11963 = this;
var h__11964 = cljs.core.hash.call(null,k);
var bucket__11965 = (this__11963.hashobj[h__11964]);
if(cljs.core.truth_(bucket__11965))
{var new_bucket__11966 = bucket__11965.slice();
var new_hashobj__11967 = goog.object.clone(this__11963.hashobj);
(new_hashobj__11967[h__11964] = new_bucket__11966);
var temp__3971__auto____11968 = cljs.core.scan_array.call(null,2,k,new_bucket__11966);
if(cljs.core.truth_(temp__3971__auto____11968))
{var i__11969 = temp__3971__auto____11968;
(new_bucket__11966[(i__11969 + 1)] = v);
return (new cljs.core.HashMap(this__11963.meta,this__11963.count,new_hashobj__11967,null));
} else
{new_bucket__11966.push(k,v);
return (new cljs.core.HashMap(this__11963.meta,(this__11963.count + 1),new_hashobj__11967,null));
}
} else
{var new_hashobj__11970 = goog.object.clone(this__11963.hashobj);
(new_hashobj__11970[h__11964] = [k,v]);
return (new cljs.core.HashMap(this__11963.meta,(this__11963.count + 1),new_hashobj__11970,null));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__11971 = this;
var bucket__11972 = (this__11971.hashobj[cljs.core.hash.call(null,k)]);
var i__11973 = (cljs.core.truth_(bucket__11972)?cljs.core.scan_array.call(null,2,k,bucket__11972):null);
if(cljs.core.truth_(i__11973))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.call = (function() {
var G__11998 = null;
var G__11998__2 = (function (this_sym11974,k){
var this__11976 = this;
var this_sym11974__11977 = this;
var coll__11978 = this_sym11974__11977;
return coll__11978.cljs$core$ILookup$_lookup$arity$2(coll__11978,k);
});
var G__11998__3 = (function (this_sym11975,k,not_found){
var this__11976 = this;
var this_sym11975__11979 = this;
var coll__11980 = this_sym11975__11979;
return coll__11980.cljs$core$ILookup$_lookup$arity$3(coll__11980,k,not_found);
});
G__11998 = function(this_sym11975,k,not_found){
switch(arguments.length){
case 2:
return G__11998__2.call(this,this_sym11975,k);
case 3:
return G__11998__3.call(this,this_sym11975,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11998;
})()
;
cljs.core.HashMap.prototype.apply = (function (this_sym11954,args11955){
var this__11981 = this;
return this_sym11954.call.apply(this_sym11954,[this_sym11954].concat(args11955.slice()));
});
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__11982 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.toString = (function (){
var this__11983 = this;
var this__11984 = this;
return cljs.core.pr_str.call(null,this__11984);
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__11985 = this;
if((this__11985.count > 0))
{var hashes__11986 = cljs.core.js_keys.call(null,this__11985.hashobj).sort();
return cljs.core.mapcat.call(null,(function (p1__11953_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__11985.hashobj[p1__11953_SHARP_])));
}),hashes__11986);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__11987 = this;
return this__11987.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__11988 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__11989 = this;
return (new cljs.core.HashMap(meta,this__11989.count,this__11989.hashobj,this__11989.__hash));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__11990 = this;
return this__11990.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__11991 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__11991.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__11992 = this;
var h__11993 = cljs.core.hash.call(null,k);
var bucket__11994 = (this__11992.hashobj[h__11993]);
var i__11995 = (cljs.core.truth_(bucket__11994)?cljs.core.scan_array.call(null,2,k,bucket__11994):null);
if(cljs.core.not.call(null,i__11995))
{return coll;
} else
{var new_hashobj__11996 = goog.object.clone(this__11992.hashobj);
if((3 > bucket__11994.length))
{cljs.core.js_delete.call(null,new_hashobj__11996,h__11993);
} else
{var new_bucket__11997 = bucket__11994.slice();
new_bucket__11997.splice(i__11995,2);
(new_hashobj__11996[h__11993] = new_bucket__11997);
}
return (new cljs.core.HashMap(this__11992.meta,(this__11992.count - 1),new_hashobj__11996,null));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,{},0));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__11999 = ks.length;
var i__12000 = 0;
var out__12001 = cljs.core.HashMap.EMPTY;
while(true){
if((i__12000 < len__11999))
{{
var G__12002 = (i__12000 + 1);
var G__12003 = cljs.core.assoc.call(null,out__12001,(ks[i__12000]),(vs[i__12000]));
i__12000 = G__12002;
out__12001 = G__12003;
continue;
}
} else
{return out__12001;
}
break;
}
});
cljs.core.array_map_index_of = (function array_map_index_of(m,k){
var arr__12007 = m.arr;
var len__12008 = arr__12007.length;
var i__12009 = 0;
while(true){
if((len__12008 <= i__12009))
{return -1;
} else
{if(cljs.core._EQ_.call(null,(arr__12007[i__12009]),k))
{return i__12009;
} else
{if("\uFDD0'else")
{{
var G__12010 = (i__12009 + 2);
i__12009 = G__12010;
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
cljs.core.PersistentArrayMap.cljs$lang$ctorPrSeq = (function (this__5174__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentArrayMap");
});
cljs.core.PersistentArrayMap.cljs$lang$ctorPrWriter = (function (this__5174__auto__,writer__5175__auto__){
return cljs.core._write.call(null,writer__5175__auto__,"cljs.core/PersistentArrayMap");
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__12013 = this;
return (new cljs.core.TransientArrayMap({},this__12013.arr.length,this__12013.arr.slice()));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__12014 = this;
var h__5055__auto____12015 = this__12014.__hash;
if(!((h__5055__auto____12015 == null)))
{return h__5055__auto____12015;
} else
{var h__5055__auto____12016 = cljs.core.hash_imap.call(null,coll);
this__12014.__hash = h__5055__auto____12016;
return h__5055__auto____12016;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__12017 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__12018 = this;
var idx__12019 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__12019 === -1))
{return not_found;
} else
{return (this__12018.arr[(idx__12019 + 1)]);
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__12020 = this;
var idx__12021 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__12021 === -1))
{if((this__12020.cnt < cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD))
{return (new cljs.core.PersistentArrayMap(this__12020.meta,(this__12020.cnt + 1),(function (){var G__12022__12023 = this__12020.arr.slice();
G__12022__12023.push(k);
G__12022__12023.push(v);
return G__12022__12023;
})(),null));
} else
{return cljs.core.persistent_BANG_.call(null,cljs.core.assoc_BANG_.call(null,cljs.core.transient$.call(null,cljs.core.into.call(null,cljs.core.PersistentHashMap.EMPTY,coll)),k,v));
}
} else
{if((v === (this__12020.arr[(idx__12021 + 1)])))
{return coll;
} else
{if("\uFDD0'else")
{return (new cljs.core.PersistentArrayMap(this__12020.meta,this__12020.cnt,(function (){var G__12024__12025 = this__12020.arr.slice();
(G__12024__12025[(idx__12021 + 1)] = v);
return G__12024__12025;
})(),null));
} else
{return null;
}
}
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__12026 = this;
return !((cljs.core.array_map_index_of.call(null,coll,k) === -1));
});
cljs.core.PersistentArrayMap.prototype.call = (function() {
var G__12058 = null;
var G__12058__2 = (function (this_sym12027,k){
var this__12029 = this;
var this_sym12027__12030 = this;
var coll__12031 = this_sym12027__12030;
return coll__12031.cljs$core$ILookup$_lookup$arity$2(coll__12031,k);
});
var G__12058__3 = (function (this_sym12028,k,not_found){
var this__12029 = this;
var this_sym12028__12032 = this;
var coll__12033 = this_sym12028__12032;
return coll__12033.cljs$core$ILookup$_lookup$arity$3(coll__12033,k,not_found);
});
G__12058 = function(this_sym12028,k,not_found){
switch(arguments.length){
case 2:
return G__12058__2.call(this,this_sym12028,k);
case 3:
return G__12058__3.call(this,this_sym12028,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12058;
})()
;
cljs.core.PersistentArrayMap.prototype.apply = (function (this_sym12011,args12012){
var this__12034 = this;
return this_sym12011.call.apply(this_sym12011,[this_sym12011].concat(args12012.slice()));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__12035 = this;
var len__12036 = this__12035.arr.length;
var i__12037 = 0;
var init__12038 = init;
while(true){
if((i__12037 < len__12036))
{var init__12039 = f.call(null,init__12038,(this__12035.arr[i__12037]),(this__12035.arr[(i__12037 + 1)]));
if(cljs.core.reduced_QMARK_.call(null,init__12039))
{return cljs.core.deref.call(null,init__12039);
} else
{{
var G__12059 = (i__12037 + 2);
var G__12060 = init__12039;
i__12037 = G__12059;
init__12038 = G__12060;
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
var this__12040 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentArrayMap.prototype.toString = (function (){
var this__12041 = this;
var this__12042 = this;
return cljs.core.pr_str.call(null,this__12042);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__12043 = this;
if((this__12043.cnt > 0))
{var len__12044 = this__12043.arr.length;
var array_map_seq__12045 = (function array_map_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if((i < len__12044))
{return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([(this__12043.arr[i]),(this__12043.arr[(i + 1)])], true),array_map_seq.call(null,(i + 2)));
} else
{return null;
}
}),null));
});
return array_map_seq__12045.call(null,0);
} else
{return null;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__12046 = this;
return this__12046.cnt;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__12047 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__12048 = this;
return (new cljs.core.PersistentArrayMap(meta,this__12048.cnt,this__12048.arr,this__12048.__hash));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__12049 = this;
return this__12049.meta;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__12050 = this;
return cljs.core._with_meta.call(null,cljs.core.PersistentArrayMap.EMPTY,this__12050.meta);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__12051 = this;
var idx__12052 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__12052 >= 0))
{var len__12053 = this__12051.arr.length;
var new_len__12054 = (len__12053 - 2);
if((new_len__12054 === 0))
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{var new_arr__12055 = cljs.core.make_array.call(null,new_len__12054);
var s__12056 = 0;
var d__12057 = 0;
while(true){
if((s__12056 >= len__12053))
{return (new cljs.core.PersistentArrayMap(this__12051.meta,(this__12051.cnt - 1),new_arr__12055,null));
} else
{if(cljs.core._EQ_.call(null,k,(this__12051.arr[s__12056])))
{{
var G__12061 = (s__12056 + 2);
var G__12062 = d__12057;
s__12056 = G__12061;
d__12057 = G__12062;
continue;
}
} else
{if("\uFDD0'else")
{(new_arr__12055[d__12057] = (this__12051.arr[s__12056]));
(new_arr__12055[(d__12057 + 1)] = (this__12051.arr[(s__12056 + 1)]));
{
var G__12063 = (s__12056 + 2);
var G__12064 = (d__12057 + 2);
s__12056 = G__12063;
d__12057 = G__12064;
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
var len__12065 = cljs.core.count.call(null,ks);
var i__12066 = 0;
var out__12067 = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i__12066 < len__12065))
{{
var G__12068 = (i__12066 + 1);
var G__12069 = cljs.core.assoc_BANG_.call(null,out__12067,(ks[i__12066]),(vs[i__12066]));
i__12066 = G__12068;
out__12067 = G__12069;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__12067);
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
cljs.core.TransientArrayMap.cljs$lang$ctorPrSeq = (function (this__5174__auto__){
return cljs.core.list.call(null,"cljs.core/TransientArrayMap");
});
cljs.core.TransientArrayMap.cljs$lang$ctorPrWriter = (function (this__5174__auto__,writer__5175__auto__){
return cljs.core._write.call(null,writer__5175__auto__,"cljs.core/TransientArrayMap");
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = (function (tcoll,key){
var this__12070 = this;
if(cljs.core.truth_(this__12070.editable_QMARK_))
{var idx__12071 = cljs.core.array_map_index_of.call(null,tcoll,key);
if((idx__12071 >= 0))
{(this__12070.arr[idx__12071] = (this__12070.arr[(this__12070.len - 2)]));
(this__12070.arr[(idx__12071 + 1)] = (this__12070.arr[(this__12070.len - 1)]));
var G__12072__12073 = this__12070.arr;
G__12072__12073.pop();
G__12072__12073.pop();
G__12072__12073;
this__12070.len = (this__12070.len - 2);
} else
{}
return tcoll;
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__12074 = this;
if(cljs.core.truth_(this__12074.editable_QMARK_))
{var idx__12075 = cljs.core.array_map_index_of.call(null,tcoll,key);
if((idx__12075 === -1))
{if(((this__12074.len + 2) <= (2 * cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD)))
{this__12074.len = (this__12074.len + 2);
this__12074.arr.push(key);
this__12074.arr.push(val);
return tcoll;
} else
{return cljs.core.assoc_BANG_.call(null,cljs.core.array__GT_transient_hash_map.call(null,this__12074.len,this__12074.arr),key,val);
}
} else
{if((val === (this__12074.arr[(idx__12075 + 1)])))
{return tcoll;
} else
{(this__12074.arr[(idx__12075 + 1)] = val);
return tcoll;
}
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__12076 = this;
if(cljs.core.truth_(this__12076.editable_QMARK_))
{if((function (){var G__12077__12078 = o;
if(G__12077__12078)
{if((function (){var or__3824__auto____12079 = (G__12077__12078.cljs$lang$protocol_mask$partition0$ & 2048);
if(or__3824__auto____12079)
{return or__3824__auto____12079;
} else
{return G__12077__12078.cljs$core$IMapEntry$;
}
})())
{return true;
} else
{if((!G__12077__12078.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__12077__12078);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__12077__12078);
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,cljs.core.key.call(null,o),cljs.core.val.call(null,o));
} else
{var es__12080 = cljs.core.seq.call(null,o);
var tcoll__12081 = tcoll;
while(true){
var temp__3971__auto____12082 = cljs.core.first.call(null,es__12080);
if(cljs.core.truth_(temp__3971__auto____12082))
{var e__12083 = temp__3971__auto____12082;
{
var G__12089 = cljs.core.next.call(null,es__12080);
var G__12090 = tcoll__12081.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll__12081,cljs.core.key.call(null,e__12083),cljs.core.val.call(null,e__12083));
es__12080 = G__12089;
tcoll__12081 = G__12090;
continue;
}
} else
{return tcoll__12081;
}
break;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__12084 = this;
if(cljs.core.truth_(this__12084.editable_QMARK_))
{this__12084.editable_QMARK_ = false;
return (new cljs.core.PersistentArrayMap(null,cljs.core.quot.call(null,this__12084.len,2),this__12084.arr,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var this__12085 = this;
return tcoll.cljs$core$ILookup$_lookup$arity$3(tcoll,k,null);
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var this__12086 = this;
if(cljs.core.truth_(this__12086.editable_QMARK_))
{var idx__12087 = cljs.core.array_map_index_of.call(null,tcoll,k);
if((idx__12087 === -1))
{return not_found;
} else
{return (this__12086.arr[(idx__12087 + 1)]);
}
} else
{throw (new Error("lookup after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var this__12088 = this;
if(cljs.core.truth_(this__12088.editable_QMARK_))
{return cljs.core.quot.call(null,this__12088.len,2);
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientArrayMap;
cljs.core.array__GT_transient_hash_map = (function array__GT_transient_hash_map(len,arr){
var out__12093 = cljs.core.transient$.call(null,cljs.core.ObjMap.EMPTY);
var i__12094 = 0;
while(true){
if((i__12094 < len))
{{
var G__12095 = cljs.core.assoc_BANG_.call(null,out__12093,(arr[i__12094]),(arr[(i__12094 + 1)]));
var G__12096 = (i__12094 + 2);
out__12093 = G__12095;
i__12094 = G__12096;
continue;
}
} else
{return out__12093;
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
cljs.core.Box.cljs$lang$ctorPrSeq = (function (this__5176__auto__){
return cljs.core.list.call(null,"cljs.core/Box");
});
cljs.core.Box.cljs$lang$ctorPrWriter = (function (this__5176__auto__,writer__5177__auto__){
return cljs.core._write.call(null,writer__5177__auto__,"cljs.core/Box");
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
var G__12101__12102 = arr.slice();
(G__12101__12102[i] = a);
return G__12101__12102;
});
var clone_and_set__5 = (function (arr,i,a,j,b){
var G__12103__12104 = arr.slice();
(G__12103__12104[i] = a);
(G__12103__12104[j] = b);
return G__12103__12104;
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
var new_arr__12106 = cljs.core.make_array.call(null,(arr.length - 2));
cljs.core.array_copy.call(null,arr,0,new_arr__12106,0,(2 * i));
cljs.core.array_copy.call(null,arr,(2 * (i + 1)),new_arr__12106,(2 * i),(new_arr__12106.length - (2 * i)));
return new_arr__12106;
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
var editable__12109 = inode.ensure_editable(edit);
(editable__12109.arr[i] = a);
return editable__12109;
});
var edit_and_set__6 = (function (inode,edit,i,a,j,b){
var editable__12110 = inode.ensure_editable(edit);
(editable__12110.arr[i] = a);
(editable__12110.arr[j] = b);
return editable__12110;
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
var len__12117 = arr.length;
var i__12118 = 0;
var init__12119 = init;
while(true){
if((i__12118 < len__12117))
{var init__12122 = (function (){var k__12120 = (arr[i__12118]);
if(!((k__12120 == null)))
{return f.call(null,init__12119,k__12120,(arr[(i__12118 + 1)]));
} else
{var node__12121 = (arr[(i__12118 + 1)]);
if(!((node__12121 == null)))
{return node__12121.kv_reduce(f,init__12119);
} else
{return init__12119;
}
}
})();
if(cljs.core.reduced_QMARK_.call(null,init__12122))
{return cljs.core.deref.call(null,init__12122);
} else
{{
var G__12123 = (i__12118 + 2);
var G__12124 = init__12122;
i__12118 = G__12123;
init__12119 = G__12124;
continue;
}
}
} else
{return init__12119;
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
cljs.core.BitmapIndexedNode.cljs$lang$ctorPrSeq = (function (this__5174__auto__){
return cljs.core.list.call(null,"cljs.core/BitmapIndexedNode");
});
cljs.core.BitmapIndexedNode.cljs$lang$ctorPrWriter = (function (this__5174__auto__,writer__5175__auto__){
return cljs.core._write.call(null,writer__5175__auto__,"cljs.core/BitmapIndexedNode");
});
cljs.core.BitmapIndexedNode.prototype.edit_and_remove_pair = (function (e,bit,i){
var this__12125 = this;
var inode__12126 = this;
if((this__12125.bitmap === bit))
{return null;
} else
{var editable__12127 = inode__12126.ensure_editable(e);
var earr__12128 = editable__12127.arr;
var len__12129 = earr__12128.length;
editable__12127.bitmap = (bit ^ editable__12127.bitmap);
cljs.core.array_copy.call(null,earr__12128,(2 * (i + 1)),earr__12128,(2 * i),(len__12129 - (2 * (i + 1))));
(earr__12128[(len__12129 - 2)] = null);
(earr__12128[(len__12129 - 1)] = null);
return editable__12127;
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__12130 = this;
var inode__12131 = this;
var bit__12132 = (1 << ((hash >>> shift) & 0x01f));
var idx__12133 = cljs.core.bitmap_indexed_node_index.call(null,this__12130.bitmap,bit__12132);
if(((this__12130.bitmap & bit__12132) === 0))
{var n__12134 = cljs.core.bit_count.call(null,this__12130.bitmap);
if(((2 * n__12134) < this__12130.arr.length))
{var editable__12135 = inode__12131.ensure_editable(edit);
var earr__12136 = editable__12135.arr;
added_leaf_QMARK_.val = true;
cljs.core.array_copy_downward.call(null,earr__12136,(2 * idx__12133),earr__12136,(2 * (idx__12133 + 1)),(2 * (n__12134 - idx__12133)));
(earr__12136[(2 * idx__12133)] = key);
(earr__12136[((2 * idx__12133) + 1)] = val);
editable__12135.bitmap = (editable__12135.bitmap | bit__12132);
return editable__12135;
} else
{if((n__12134 >= 16))
{var nodes__12137 = cljs.core.make_array.call(null,32);
var jdx__12138 = ((hash >>> shift) & 0x01f);
(nodes__12137[jdx__12138] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_));
var i__12139 = 0;
var j__12140 = 0;
while(true){
if((i__12139 < 32))
{if((((this__12130.bitmap >>> i__12139) & 1) === 0))
{{
var G__12193 = (i__12139 + 1);
var G__12194 = j__12140;
i__12139 = G__12193;
j__12140 = G__12194;
continue;
}
} else
{(nodes__12137[i__12139] = ((!(((this__12130.arr[j__12140]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),cljs.core.hash.call(null,(this__12130.arr[j__12140])),(this__12130.arr[j__12140]),(this__12130.arr[(j__12140 + 1)]),added_leaf_QMARK_):(this__12130.arr[(j__12140 + 1)])));
{
var G__12195 = (i__12139 + 1);
var G__12196 = (j__12140 + 2);
i__12139 = G__12195;
j__12140 = G__12196;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(edit,(n__12134 + 1),nodes__12137));
} else
{if("\uFDD0'else")
{var new_arr__12141 = cljs.core.make_array.call(null,(2 * (n__12134 + 4)));
cljs.core.array_copy.call(null,this__12130.arr,0,new_arr__12141,0,(2 * idx__12133));
(new_arr__12141[(2 * idx__12133)] = key);
(new_arr__12141[((2 * idx__12133) + 1)] = val);
cljs.core.array_copy.call(null,this__12130.arr,(2 * idx__12133),new_arr__12141,(2 * (idx__12133 + 1)),(2 * (n__12134 - idx__12133)));
added_leaf_QMARK_.val = true;
var editable__12142 = inode__12131.ensure_editable(edit);
editable__12142.arr = new_arr__12141;
editable__12142.bitmap = (editable__12142.bitmap | bit__12132);
return editable__12142;
} else
{return null;
}
}
}
} else
{var key_or_nil__12143 = (this__12130.arr[(2 * idx__12133)]);
var val_or_node__12144 = (this__12130.arr[((2 * idx__12133) + 1)]);
if((key_or_nil__12143 == null))
{var n__12145 = val_or_node__12144.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__12145 === val_or_node__12144))
{return inode__12131;
} else
{return cljs.core.edit_and_set.call(null,inode__12131,edit,((2 * idx__12133) + 1),n__12145);
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__12143))
{if((val === val_or_node__12144))
{return inode__12131;
} else
{return cljs.core.edit_and_set.call(null,inode__12131,edit,((2 * idx__12133) + 1),val);
}
} else
{if("\uFDD0'else")
{added_leaf_QMARK_.val = true;
return cljs.core.edit_and_set.call(null,inode__12131,edit,(2 * idx__12133),null,((2 * idx__12133) + 1),cljs.core.create_node.call(null,edit,(shift + 5),key_or_nil__12143,val_or_node__12144,hash,key,val));
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_seq = (function (){
var this__12146 = this;
var inode__12147 = this;
return cljs.core.create_inode_seq.call(null,this__12146.arr);
});
cljs.core.BitmapIndexedNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__12148 = this;
var inode__12149 = this;
var bit__12150 = (1 << ((hash >>> shift) & 0x01f));
if(((this__12148.bitmap & bit__12150) === 0))
{return inode__12149;
} else
{var idx__12151 = cljs.core.bitmap_indexed_node_index.call(null,this__12148.bitmap,bit__12150);
var key_or_nil__12152 = (this__12148.arr[(2 * idx__12151)]);
var val_or_node__12153 = (this__12148.arr[((2 * idx__12151) + 1)]);
if((key_or_nil__12152 == null))
{var n__12154 = val_or_node__12153.inode_without_BANG_(edit,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n__12154 === val_or_node__12153))
{return inode__12149;
} else
{if(!((n__12154 == null)))
{return cljs.core.edit_and_set.call(null,inode__12149,edit,((2 * idx__12151) + 1),n__12154);
} else
{if((this__12148.bitmap === bit__12150))
{return null;
} else
{if("\uFDD0'else")
{return inode__12149.edit_and_remove_pair(edit,bit__12150,idx__12151);
} else
{return null;
}
}
}
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__12152))
{(removed_leaf_QMARK_[0] = true);
return inode__12149.edit_and_remove_pair(edit,bit__12150,idx__12151);
} else
{if("\uFDD0'else")
{return inode__12149;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.ensure_editable = (function (e){
var this__12155 = this;
var inode__12156 = this;
if((e === this__12155.edit))
{return inode__12156;
} else
{var n__12157 = cljs.core.bit_count.call(null,this__12155.bitmap);
var new_arr__12158 = cljs.core.make_array.call(null,(((n__12157 < 0))?4:(2 * (n__12157 + 1))));
cljs.core.array_copy.call(null,this__12155.arr,0,new_arr__12158,0,(2 * n__12157));
return (new cljs.core.BitmapIndexedNode(e,this__12155.bitmap,new_arr__12158));
}
});
cljs.core.BitmapIndexedNode.prototype.kv_reduce = (function (f,init){
var this__12159 = this;
var inode__12160 = this;
return cljs.core.inode_kv_reduce.call(null,this__12159.arr,f,init);
});
cljs.core.BitmapIndexedNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__12161 = this;
var inode__12162 = this;
var bit__12163 = (1 << ((hash >>> shift) & 0x01f));
if(((this__12161.bitmap & bit__12163) === 0))
{return not_found;
} else
{var idx__12164 = cljs.core.bitmap_indexed_node_index.call(null,this__12161.bitmap,bit__12163);
var key_or_nil__12165 = (this__12161.arr[(2 * idx__12164)]);
var val_or_node__12166 = (this__12161.arr[((2 * idx__12164) + 1)]);
if((key_or_nil__12165 == null))
{return val_or_node__12166.inode_find((shift + 5),hash,key,not_found);
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__12165))
{return cljs.core.PersistentVector.fromArray([key_or_nil__12165,val_or_node__12166], true);
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
var this__12167 = this;
var inode__12168 = this;
var bit__12169 = (1 << ((hash >>> shift) & 0x01f));
if(((this__12167.bitmap & bit__12169) === 0))
{return inode__12168;
} else
{var idx__12170 = cljs.core.bitmap_indexed_node_index.call(null,this__12167.bitmap,bit__12169);
var key_or_nil__12171 = (this__12167.arr[(2 * idx__12170)]);
var val_or_node__12172 = (this__12167.arr[((2 * idx__12170) + 1)]);
if((key_or_nil__12171 == null))
{var n__12173 = val_or_node__12172.inode_without((shift + 5),hash,key);
if((n__12173 === val_or_node__12172))
{return inode__12168;
} else
{if(!((n__12173 == null)))
{return (new cljs.core.BitmapIndexedNode(null,this__12167.bitmap,cljs.core.clone_and_set.call(null,this__12167.arr,((2 * idx__12170) + 1),n__12173)));
} else
{if((this__12167.bitmap === bit__12169))
{return null;
} else
{if("\uFDD0'else")
{return (new cljs.core.BitmapIndexedNode(null,(this__12167.bitmap ^ bit__12169),cljs.core.remove_pair.call(null,this__12167.arr,idx__12170)));
} else
{return null;
}
}
}
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__12171))
{return (new cljs.core.BitmapIndexedNode(null,(this__12167.bitmap ^ bit__12169),cljs.core.remove_pair.call(null,this__12167.arr,idx__12170)));
} else
{if("\uFDD0'else")
{return inode__12168;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__12174 = this;
var inode__12175 = this;
var bit__12176 = (1 << ((hash >>> shift) & 0x01f));
var idx__12177 = cljs.core.bitmap_indexed_node_index.call(null,this__12174.bitmap,bit__12176);
if(((this__12174.bitmap & bit__12176) === 0))
{var n__12178 = cljs.core.bit_count.call(null,this__12174.bitmap);
if((n__12178 >= 16))
{var nodes__12179 = cljs.core.make_array.call(null,32);
var jdx__12180 = ((hash >>> shift) & 0x01f);
(nodes__12179[jdx__12180] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_));
var i__12181 = 0;
var j__12182 = 0;
while(true){
if((i__12181 < 32))
{if((((this__12174.bitmap >>> i__12181) & 1) === 0))
{{
var G__12197 = (i__12181 + 1);
var G__12198 = j__12182;
i__12181 = G__12197;
j__12182 = G__12198;
continue;
}
} else
{(nodes__12179[i__12181] = ((!(((this__12174.arr[j__12182]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),cljs.core.hash.call(null,(this__12174.arr[j__12182])),(this__12174.arr[j__12182]),(this__12174.arr[(j__12182 + 1)]),added_leaf_QMARK_):(this__12174.arr[(j__12182 + 1)])));
{
var G__12199 = (i__12181 + 1);
var G__12200 = (j__12182 + 2);
i__12181 = G__12199;
j__12182 = G__12200;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(null,(n__12178 + 1),nodes__12179));
} else
{var new_arr__12183 = cljs.core.make_array.call(null,(2 * (n__12178 + 1)));
cljs.core.array_copy.call(null,this__12174.arr,0,new_arr__12183,0,(2 * idx__12177));
(new_arr__12183[(2 * idx__12177)] = key);
(new_arr__12183[((2 * idx__12177) + 1)] = val);
cljs.core.array_copy.call(null,this__12174.arr,(2 * idx__12177),new_arr__12183,(2 * (idx__12177 + 1)),(2 * (n__12178 - idx__12177)));
added_leaf_QMARK_.val = true;
return (new cljs.core.BitmapIndexedNode(null,(this__12174.bitmap | bit__12176),new_arr__12183));
}
} else
{var key_or_nil__12184 = (this__12174.arr[(2 * idx__12177)]);
var val_or_node__12185 = (this__12174.arr[((2 * idx__12177) + 1)]);
if((key_or_nil__12184 == null))
{var n__12186 = val_or_node__12185.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__12186 === val_or_node__12185))
{return inode__12175;
} else
{return (new cljs.core.BitmapIndexedNode(null,this__12174.bitmap,cljs.core.clone_and_set.call(null,this__12174.arr,((2 * idx__12177) + 1),n__12186)));
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__12184))
{if((val === val_or_node__12185))
{return inode__12175;
} else
{return (new cljs.core.BitmapIndexedNode(null,this__12174.bitmap,cljs.core.clone_and_set.call(null,this__12174.arr,((2 * idx__12177) + 1),val)));
}
} else
{if("\uFDD0'else")
{added_leaf_QMARK_.val = true;
return (new cljs.core.BitmapIndexedNode(null,this__12174.bitmap,cljs.core.clone_and_set.call(null,this__12174.arr,(2 * idx__12177),null,((2 * idx__12177) + 1),cljs.core.create_node.call(null,(shift + 5),key_or_nil__12184,val_or_node__12185,hash,key,val))));
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__12187 = this;
var inode__12188 = this;
var bit__12189 = (1 << ((hash >>> shift) & 0x01f));
if(((this__12187.bitmap & bit__12189) === 0))
{return not_found;
} else
{var idx__12190 = cljs.core.bitmap_indexed_node_index.call(null,this__12187.bitmap,bit__12189);
var key_or_nil__12191 = (this__12187.arr[(2 * idx__12190)]);
var val_or_node__12192 = (this__12187.arr[((2 * idx__12190) + 1)]);
if((key_or_nil__12191 == null))
{return val_or_node__12192.inode_lookup((shift + 5),hash,key,not_found);
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__12191))
{return val_or_node__12192;
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
var arr__12208 = array_node.arr;
var len__12209 = (2 * (array_node.cnt - 1));
var new_arr__12210 = cljs.core.make_array.call(null,len__12209);
var i__12211 = 0;
var j__12212 = 1;
var bitmap__12213 = 0;
while(true){
if((i__12211 < len__12209))
{if((function (){var and__3822__auto____12214 = !((i__12211 === idx));
if(and__3822__auto____12214)
{return !(((arr__12208[i__12211]) == null));
} else
{return and__3822__auto____12214;
}
})())
{(new_arr__12210[j__12212] = (arr__12208[i__12211]));
{
var G__12215 = (i__12211 + 1);
var G__12216 = (j__12212 + 2);
var G__12217 = (bitmap__12213 | (1 << i__12211));
i__12211 = G__12215;
j__12212 = G__12216;
bitmap__12213 = G__12217;
continue;
}
} else
{{
var G__12218 = (i__12211 + 1);
var G__12219 = j__12212;
var G__12220 = bitmap__12213;
i__12211 = G__12218;
j__12212 = G__12219;
bitmap__12213 = G__12220;
continue;
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,bitmap__12213,new_arr__12210));
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
cljs.core.ArrayNode.cljs$lang$ctorPrSeq = (function (this__5174__auto__){
return cljs.core.list.call(null,"cljs.core/ArrayNode");
});
cljs.core.ArrayNode.cljs$lang$ctorPrWriter = (function (this__5174__auto__,writer__5175__auto__){
return cljs.core._write.call(null,writer__5175__auto__,"cljs.core/ArrayNode");
});
cljs.core.ArrayNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__12221 = this;
var inode__12222 = this;
var idx__12223 = ((hash >>> shift) & 0x01f);
var node__12224 = (this__12221.arr[idx__12223]);
if((node__12224 == null))
{var editable__12225 = cljs.core.edit_and_set.call(null,inode__12222,edit,idx__12223,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_));
editable__12225.cnt = (editable__12225.cnt + 1);
return editable__12225;
} else
{var n__12226 = node__12224.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__12226 === node__12224))
{return inode__12222;
} else
{return cljs.core.edit_and_set.call(null,inode__12222,edit,idx__12223,n__12226);
}
}
});
cljs.core.ArrayNode.prototype.inode_seq = (function (){
var this__12227 = this;
var inode__12228 = this;
return cljs.core.create_array_node_seq.call(null,this__12227.arr);
});
cljs.core.ArrayNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__12229 = this;
var inode__12230 = this;
var idx__12231 = ((hash >>> shift) & 0x01f);
var node__12232 = (this__12229.arr[idx__12231]);
if((node__12232 == null))
{return inode__12230;
} else
{var n__12233 = node__12232.inode_without_BANG_(edit,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n__12233 === node__12232))
{return inode__12230;
} else
{if((n__12233 == null))
{if((this__12229.cnt <= 8))
{return cljs.core.pack_array_node.call(null,inode__12230,edit,idx__12231);
} else
{var editable__12234 = cljs.core.edit_and_set.call(null,inode__12230,edit,idx__12231,n__12233);
editable__12234.cnt = (editable__12234.cnt - 1);
return editable__12234;
}
} else
{if("\uFDD0'else")
{return cljs.core.edit_and_set.call(null,inode__12230,edit,idx__12231,n__12233);
} else
{return null;
}
}
}
}
});
cljs.core.ArrayNode.prototype.ensure_editable = (function (e){
var this__12235 = this;
var inode__12236 = this;
if((e === this__12235.edit))
{return inode__12236;
} else
{return (new cljs.core.ArrayNode(e,this__12235.cnt,this__12235.arr.slice()));
}
});
cljs.core.ArrayNode.prototype.kv_reduce = (function (f,init){
var this__12237 = this;
var inode__12238 = this;
var len__12239 = this__12237.arr.length;
var i__12240 = 0;
var init__12241 = init;
while(true){
if((i__12240 < len__12239))
{var node__12242 = (this__12237.arr[i__12240]);
if(!((node__12242 == null)))
{var init__12243 = node__12242.kv_reduce(f,init__12241);
if(cljs.core.reduced_QMARK_.call(null,init__12243))
{return cljs.core.deref.call(null,init__12243);
} else
{{
var G__12262 = (i__12240 + 1);
var G__12263 = init__12243;
i__12240 = G__12262;
init__12241 = G__12263;
continue;
}
}
} else
{return null;
}
} else
{return init__12241;
}
break;
}
});
cljs.core.ArrayNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__12244 = this;
var inode__12245 = this;
var idx__12246 = ((hash >>> shift) & 0x01f);
var node__12247 = (this__12244.arr[idx__12246]);
if(!((node__12247 == null)))
{return node__12247.inode_find((shift + 5),hash,key,not_found);
} else
{return not_found;
}
});
cljs.core.ArrayNode.prototype.inode_without = (function (shift,hash,key){
var this__12248 = this;
var inode__12249 = this;
var idx__12250 = ((hash >>> shift) & 0x01f);
var node__12251 = (this__12248.arr[idx__12250]);
if(!((node__12251 == null)))
{var n__12252 = node__12251.inode_without((shift + 5),hash,key);
if((n__12252 === node__12251))
{return inode__12249;
} else
{if((n__12252 == null))
{if((this__12248.cnt <= 8))
{return cljs.core.pack_array_node.call(null,inode__12249,null,idx__12250);
} else
{return (new cljs.core.ArrayNode(null,(this__12248.cnt - 1),cljs.core.clone_and_set.call(null,this__12248.arr,idx__12250,n__12252)));
}
} else
{if("\uFDD0'else")
{return (new cljs.core.ArrayNode(null,this__12248.cnt,cljs.core.clone_and_set.call(null,this__12248.arr,idx__12250,n__12252)));
} else
{return null;
}
}
}
} else
{return inode__12249;
}
});
cljs.core.ArrayNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__12253 = this;
var inode__12254 = this;
var idx__12255 = ((hash >>> shift) & 0x01f);
var node__12256 = (this__12253.arr[idx__12255]);
if((node__12256 == null))
{return (new cljs.core.ArrayNode(null,(this__12253.cnt + 1),cljs.core.clone_and_set.call(null,this__12253.arr,idx__12255,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_))));
} else
{var n__12257 = node__12256.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__12257 === node__12256))
{return inode__12254;
} else
{return (new cljs.core.ArrayNode(null,this__12253.cnt,cljs.core.clone_and_set.call(null,this__12253.arr,idx__12255,n__12257)));
}
}
});
cljs.core.ArrayNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__12258 = this;
var inode__12259 = this;
var idx__12260 = ((hash >>> shift) & 0x01f);
var node__12261 = (this__12258.arr[idx__12260]);
if(!((node__12261 == null)))
{return node__12261.inode_lookup((shift + 5),hash,key,not_found);
} else
{return not_found;
}
});
cljs.core.ArrayNode;
cljs.core.hash_collision_node_find_index = (function hash_collision_node_find_index(arr,cnt,key){
var lim__12266 = (2 * cnt);
var i__12267 = 0;
while(true){
if((i__12267 < lim__12266))
{if(cljs.core.key_test.call(null,key,(arr[i__12267])))
{return i__12267;
} else
{{
var G__12268 = (i__12267 + 2);
i__12267 = G__12268;
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
cljs.core.HashCollisionNode.cljs$lang$ctorPrSeq = (function (this__5174__auto__){
return cljs.core.list.call(null,"cljs.core/HashCollisionNode");
});
cljs.core.HashCollisionNode.cljs$lang$ctorPrWriter = (function (this__5174__auto__,writer__5175__auto__){
return cljs.core._write.call(null,writer__5175__auto__,"cljs.core/HashCollisionNode");
});
cljs.core.HashCollisionNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__12269 = this;
var inode__12270 = this;
if((hash === this__12269.collision_hash))
{var idx__12271 = cljs.core.hash_collision_node_find_index.call(null,this__12269.arr,this__12269.cnt,key);
if((idx__12271 === -1))
{if((this__12269.arr.length > (2 * this__12269.cnt)))
{var editable__12272 = cljs.core.edit_and_set.call(null,inode__12270,edit,(2 * this__12269.cnt),key,((2 * this__12269.cnt) + 1),val);
added_leaf_QMARK_.val = true;
editable__12272.cnt = (editable__12272.cnt + 1);
return editable__12272;
} else
{var len__12273 = this__12269.arr.length;
var new_arr__12274 = cljs.core.make_array.call(null,(len__12273 + 2));
cljs.core.array_copy.call(null,this__12269.arr,0,new_arr__12274,0,len__12273);
(new_arr__12274[len__12273] = key);
(new_arr__12274[(len__12273 + 1)] = val);
added_leaf_QMARK_.val = true;
return inode__12270.ensure_editable_array(edit,(this__12269.cnt + 1),new_arr__12274);
}
} else
{if(((this__12269.arr[(idx__12271 + 1)]) === val))
{return inode__12270;
} else
{return cljs.core.edit_and_set.call(null,inode__12270,edit,(idx__12271 + 1),val);
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,(1 << ((this__12269.collision_hash >>> shift) & 0x01f)),[null,inode__12270,null,null])).inode_assoc_BANG_(edit,shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_seq = (function (){
var this__12275 = this;
var inode__12276 = this;
return cljs.core.create_inode_seq.call(null,this__12275.arr);
});
cljs.core.HashCollisionNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__12277 = this;
var inode__12278 = this;
var idx__12279 = cljs.core.hash_collision_node_find_index.call(null,this__12277.arr,this__12277.cnt,key);
if((idx__12279 === -1))
{return inode__12278;
} else
{(removed_leaf_QMARK_[0] = true);
if((this__12277.cnt === 1))
{return null;
} else
{var editable__12280 = inode__12278.ensure_editable(edit);
var earr__12281 = editable__12280.arr;
(earr__12281[idx__12279] = (earr__12281[((2 * this__12277.cnt) - 2)]));
(earr__12281[(idx__12279 + 1)] = (earr__12281[((2 * this__12277.cnt) - 1)]));
(earr__12281[((2 * this__12277.cnt) - 1)] = null);
(earr__12281[((2 * this__12277.cnt) - 2)] = null);
editable__12280.cnt = (editable__12280.cnt - 1);
return editable__12280;
}
}
});
cljs.core.HashCollisionNode.prototype.ensure_editable = (function (e){
var this__12282 = this;
var inode__12283 = this;
if((e === this__12282.edit))
{return inode__12283;
} else
{var new_arr__12284 = cljs.core.make_array.call(null,(2 * (this__12282.cnt + 1)));
cljs.core.array_copy.call(null,this__12282.arr,0,new_arr__12284,0,(2 * this__12282.cnt));
return (new cljs.core.HashCollisionNode(e,this__12282.collision_hash,this__12282.cnt,new_arr__12284));
}
});
cljs.core.HashCollisionNode.prototype.kv_reduce = (function (f,init){
var this__12285 = this;
var inode__12286 = this;
return cljs.core.inode_kv_reduce.call(null,this__12285.arr,f,init);
});
cljs.core.HashCollisionNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__12287 = this;
var inode__12288 = this;
var idx__12289 = cljs.core.hash_collision_node_find_index.call(null,this__12287.arr,this__12287.cnt,key);
if((idx__12289 < 0))
{return not_found;
} else
{if(cljs.core.key_test.call(null,key,(this__12287.arr[idx__12289])))
{return cljs.core.PersistentVector.fromArray([(this__12287.arr[idx__12289]),(this__12287.arr[(idx__12289 + 1)])], true);
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
var this__12290 = this;
var inode__12291 = this;
var idx__12292 = cljs.core.hash_collision_node_find_index.call(null,this__12290.arr,this__12290.cnt,key);
if((idx__12292 === -1))
{return inode__12291;
} else
{if((this__12290.cnt === 1))
{return null;
} else
{if("\uFDD0'else")
{return (new cljs.core.HashCollisionNode(null,this__12290.collision_hash,(this__12290.cnt - 1),cljs.core.remove_pair.call(null,this__12290.arr,cljs.core.quot.call(null,idx__12292,2))));
} else
{return null;
}
}
}
});
cljs.core.HashCollisionNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__12293 = this;
var inode__12294 = this;
if((hash === this__12293.collision_hash))
{var idx__12295 = cljs.core.hash_collision_node_find_index.call(null,this__12293.arr,this__12293.cnt,key);
if((idx__12295 === -1))
{var len__12296 = this__12293.arr.length;
var new_arr__12297 = cljs.core.make_array.call(null,(len__12296 + 2));
cljs.core.array_copy.call(null,this__12293.arr,0,new_arr__12297,0,len__12296);
(new_arr__12297[len__12296] = key);
(new_arr__12297[(len__12296 + 1)] = val);
added_leaf_QMARK_.val = true;
return (new cljs.core.HashCollisionNode(null,this__12293.collision_hash,(this__12293.cnt + 1),new_arr__12297));
} else
{if(cljs.core._EQ_.call(null,(this__12293.arr[idx__12295]),val))
{return inode__12294;
} else
{return (new cljs.core.HashCollisionNode(null,this__12293.collision_hash,this__12293.cnt,cljs.core.clone_and_set.call(null,this__12293.arr,(idx__12295 + 1),val)));
}
}
} else
{return (new cljs.core.BitmapIndexedNode(null,(1 << ((this__12293.collision_hash >>> shift) & 0x01f)),[null,inode__12294])).inode_assoc(shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__12298 = this;
var inode__12299 = this;
var idx__12300 = cljs.core.hash_collision_node_find_index.call(null,this__12298.arr,this__12298.cnt,key);
if((idx__12300 < 0))
{return not_found;
} else
{if(cljs.core.key_test.call(null,key,(this__12298.arr[idx__12300])))
{return (this__12298.arr[(idx__12300 + 1)]);
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
var this__12301 = this;
var inode__12302 = this;
if((e === this__12301.edit))
{this__12301.arr = array;
this__12301.cnt = count;
return inode__12302;
} else
{return (new cljs.core.HashCollisionNode(this__12301.edit,this__12301.collision_hash,count,array));
}
});
cljs.core.HashCollisionNode;
cljs.core.create_node = (function() {
var create_node = null;
var create_node__6 = (function (shift,key1,val1,key2hash,key2,val2){
var key1hash__12307 = cljs.core.hash.call(null,key1);
if((key1hash__12307 === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash__12307,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK___12308 = (new cljs.core.Box(false));
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc(shift,key1hash__12307,key1,val1,added_leaf_QMARK___12308).inode_assoc(shift,key2hash,key2,val2,added_leaf_QMARK___12308);
}
});
var create_node__7 = (function (edit,shift,key1,val1,key2hash,key2,val2){
var key1hash__12309 = cljs.core.hash.call(null,key1);
if((key1hash__12309 === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash__12309,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK___12310 = (new cljs.core.Box(false));
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,shift,key1hash__12309,key1,val1,added_leaf_QMARK___12310).inode_assoc_BANG_(edit,shift,key2hash,key2,val2,added_leaf_QMARK___12310);
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
cljs.core.NodeSeq.cljs$lang$ctorPrSeq = (function (this__5174__auto__){
return cljs.core.list.call(null,"cljs.core/NodeSeq");
});
cljs.core.NodeSeq.cljs$lang$ctorPrWriter = (function (this__5174__auto__,writer__5175__auto__){
return cljs.core._write.call(null,writer__5175__auto__,"cljs.core/NodeSeq");
});
cljs.core.NodeSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__12311 = this;
var h__5055__auto____12312 = this__12311.__hash;
if(!((h__5055__auto____12312 == null)))
{return h__5055__auto____12312;
} else
{var h__5055__auto____12313 = cljs.core.hash_coll.call(null,coll);
this__12311.__hash = h__5055__auto____12313;
return h__5055__auto____12313;
}
});
cljs.core.NodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__12314 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.NodeSeq.prototype.toString = (function (){
var this__12315 = this;
var this__12316 = this;
return cljs.core.pr_str.call(null,this__12316);
});
cljs.core.NodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__12317 = this;
return this$;
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__12318 = this;
if((this__12318.s == null))
{return cljs.core.PersistentVector.fromArray([(this__12318.nodes[this__12318.i]),(this__12318.nodes[(this__12318.i + 1)])], true);
} else
{return cljs.core.first.call(null,this__12318.s);
}
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__12319 = this;
if((this__12319.s == null))
{return cljs.core.create_inode_seq.call(null,this__12319.nodes,(this__12319.i + 2),null);
} else
{return cljs.core.create_inode_seq.call(null,this__12319.nodes,this__12319.i,cljs.core.next.call(null,this__12319.s));
}
});
cljs.core.NodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__12320 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.NodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__12321 = this;
return (new cljs.core.NodeSeq(meta,this__12321.nodes,this__12321.i,this__12321.s,this__12321.__hash));
});
cljs.core.NodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__12322 = this;
return this__12322.meta;
});
cljs.core.NodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__12323 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__12323.meta);
});
cljs.core.NodeSeq;
cljs.core.create_inode_seq = (function() {
var create_inode_seq = null;
var create_inode_seq__1 = (function (nodes){
return create_inode_seq.call(null,nodes,0,null);
});
var create_inode_seq__3 = (function (nodes,i,s){
if((s == null))
{var len__12330 = nodes.length;
var j__12331 = i;
while(true){
if((j__12331 < len__12330))
{if(!(((nodes[j__12331]) == null)))
{return (new cljs.core.NodeSeq(null,nodes,j__12331,null,null));
} else
{var temp__3971__auto____12332 = (nodes[(j__12331 + 1)]);
if(cljs.core.truth_(temp__3971__auto____12332))
{var node__12333 = temp__3971__auto____12332;
var temp__3971__auto____12334 = node__12333.inode_seq();
if(cljs.core.truth_(temp__3971__auto____12334))
{var node_seq__12335 = temp__3971__auto____12334;
return (new cljs.core.NodeSeq(null,nodes,(j__12331 + 2),node_seq__12335,null));
} else
{{
var G__12336 = (j__12331 + 2);
j__12331 = G__12336;
continue;
}
}
} else
{{
var G__12337 = (j__12331 + 2);
j__12331 = G__12337;
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
cljs.core.ArrayNodeSeq.cljs$lang$ctorPrSeq = (function (this__5174__auto__){
return cljs.core.list.call(null,"cljs.core/ArrayNodeSeq");
});
cljs.core.ArrayNodeSeq.cljs$lang$ctorPrWriter = (function (this__5174__auto__,writer__5175__auto__){
return cljs.core._write.call(null,writer__5175__auto__,"cljs.core/ArrayNodeSeq");
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__12338 = this;
var h__5055__auto____12339 = this__12338.__hash;
if(!((h__5055__auto____12339 == null)))
{return h__5055__auto____12339;
} else
{var h__5055__auto____12340 = cljs.core.hash_coll.call(null,coll);
this__12338.__hash = h__5055__auto____12340;
return h__5055__auto____12340;
}
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__12341 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.ArrayNodeSeq.prototype.toString = (function (){
var this__12342 = this;
var this__12343 = this;
return cljs.core.pr_str.call(null,this__12343);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__12344 = this;
return this$;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__12345 = this;
return cljs.core.first.call(null,this__12345.s);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__12346 = this;
return cljs.core.create_array_node_seq.call(null,null,this__12346.nodes,this__12346.i,cljs.core.next.call(null,this__12346.s));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__12347 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__12348 = this;
return (new cljs.core.ArrayNodeSeq(meta,this__12348.nodes,this__12348.i,this__12348.s,this__12348.__hash));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__12349 = this;
return this__12349.meta;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__12350 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__12350.meta);
});
cljs.core.ArrayNodeSeq;
cljs.core.create_array_node_seq = (function() {
var create_array_node_seq = null;
var create_array_node_seq__1 = (function (nodes){
return create_array_node_seq.call(null,null,nodes,0,null);
});
var create_array_node_seq__4 = (function (meta,nodes,i,s){
if((s == null))
{var len__12357 = nodes.length;
var j__12358 = i;
while(true){
if((j__12358 < len__12357))
{var temp__3971__auto____12359 = (nodes[j__12358]);
if(cljs.core.truth_(temp__3971__auto____12359))
{var nj__12360 = temp__3971__auto____12359;
var temp__3971__auto____12361 = nj__12360.inode_seq();
if(cljs.core.truth_(temp__3971__auto____12361))
{var ns__12362 = temp__3971__auto____12361;
return (new cljs.core.ArrayNodeSeq(meta,nodes,(j__12358 + 1),ns__12362,null));
} else
{{
var G__12363 = (j__12358 + 1);
j__12358 = G__12363;
continue;
}
}
} else
{{
var G__12364 = (j__12358 + 1);
j__12358 = G__12364;
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
cljs.core.PersistentHashMap.cljs$lang$ctorPrSeq = (function (this__5174__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentHashMap");
});
cljs.core.PersistentHashMap.cljs$lang$ctorPrWriter = (function (this__5174__auto__,writer__5175__auto__){
return cljs.core._write.call(null,writer__5175__auto__,"cljs.core/PersistentHashMap");
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__12367 = this;
return (new cljs.core.TransientHashMap({},this__12367.root,this__12367.cnt,this__12367.has_nil_QMARK_,this__12367.nil_val));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__12368 = this;
var h__5055__auto____12369 = this__12368.__hash;
if(!((h__5055__auto____12369 == null)))
{return h__5055__auto____12369;
} else
{var h__5055__auto____12370 = cljs.core.hash_imap.call(null,coll);
this__12368.__hash = h__5055__auto____12370;
return h__5055__auto____12370;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__12371 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__12372 = this;
if((k == null))
{if(this__12372.has_nil_QMARK_)
{return this__12372.nil_val;
} else
{return not_found;
}
} else
{if((this__12372.root == null))
{return not_found;
} else
{if("\uFDD0'else")
{return this__12372.root.inode_lookup(0,cljs.core.hash.call(null,k),k,not_found);
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__12373 = this;
if((k == null))
{if((function (){var and__3822__auto____12374 = this__12373.has_nil_QMARK_;
if(and__3822__auto____12374)
{return (v === this__12373.nil_val);
} else
{return and__3822__auto____12374;
}
})())
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__12373.meta,((this__12373.has_nil_QMARK_)?this__12373.cnt:(this__12373.cnt + 1)),this__12373.root,true,v,null));
}
} else
{var added_leaf_QMARK___12375 = (new cljs.core.Box(false));
var new_root__12376 = (((this__12373.root == null))?cljs.core.BitmapIndexedNode.EMPTY:this__12373.root).inode_assoc(0,cljs.core.hash.call(null,k),k,v,added_leaf_QMARK___12375);
if((new_root__12376 === this__12373.root))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__12373.meta,((added_leaf_QMARK___12375.val)?(this__12373.cnt + 1):this__12373.cnt),new_root__12376,this__12373.has_nil_QMARK_,this__12373.nil_val,null));
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__12377 = this;
if((k == null))
{return this__12377.has_nil_QMARK_;
} else
{if((this__12377.root == null))
{return false;
} else
{if("\uFDD0'else")
{return !((this__12377.root.inode_lookup(0,cljs.core.hash.call(null,k),k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel));
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.call = (function() {
var G__12400 = null;
var G__12400__2 = (function (this_sym12378,k){
var this__12380 = this;
var this_sym12378__12381 = this;
var coll__12382 = this_sym12378__12381;
return coll__12382.cljs$core$ILookup$_lookup$arity$2(coll__12382,k);
});
var G__12400__3 = (function (this_sym12379,k,not_found){
var this__12380 = this;
var this_sym12379__12383 = this;
var coll__12384 = this_sym12379__12383;
return coll__12384.cljs$core$ILookup$_lookup$arity$3(coll__12384,k,not_found);
});
G__12400 = function(this_sym12379,k,not_found){
switch(arguments.length){
case 2:
return G__12400__2.call(this,this_sym12379,k);
case 3:
return G__12400__3.call(this,this_sym12379,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12400;
})()
;
cljs.core.PersistentHashMap.prototype.apply = (function (this_sym12365,args12366){
var this__12385 = this;
return this_sym12365.call.apply(this_sym12365,[this_sym12365].concat(args12366.slice()));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__12386 = this;
var init__12387 = ((this__12386.has_nil_QMARK_)?f.call(null,init,null,this__12386.nil_val):init);
if(cljs.core.reduced_QMARK_.call(null,init__12387))
{return cljs.core.deref.call(null,init__12387);
} else
{if(!((this__12386.root == null)))
{return this__12386.root.kv_reduce(f,init__12387);
} else
{if("\uFDD0'else")
{return init__12387;
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__12388 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentHashMap.prototype.toString = (function (){
var this__12389 = this;
var this__12390 = this;
return cljs.core.pr_str.call(null,this__12390);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__12391 = this;
if((this__12391.cnt > 0))
{var s__12392 = ((!((this__12391.root == null)))?this__12391.root.inode_seq():null);
if(this__12391.has_nil_QMARK_)
{return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([null,this__12391.nil_val], true),s__12392);
} else
{return s__12392;
}
} else
{return null;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__12393 = this;
return this__12393.cnt;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__12394 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__12395 = this;
return (new cljs.core.PersistentHashMap(meta,this__12395.cnt,this__12395.root,this__12395.has_nil_QMARK_,this__12395.nil_val,this__12395.__hash));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__12396 = this;
return this__12396.meta;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__12397 = this;
return cljs.core._with_meta.call(null,cljs.core.PersistentHashMap.EMPTY,this__12397.meta);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__12398 = this;
if((k == null))
{if(this__12398.has_nil_QMARK_)
{return (new cljs.core.PersistentHashMap(this__12398.meta,(this__12398.cnt - 1),this__12398.root,false,null,null));
} else
{return coll;
}
} else
{if((this__12398.root == null))
{return coll;
} else
{if("\uFDD0'else")
{var new_root__12399 = this__12398.root.inode_without(0,cljs.core.hash.call(null,k),k);
if((new_root__12399 === this__12398.root))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__12398.meta,(this__12398.cnt - 1),new_root__12399,this__12398.has_nil_QMARK_,this__12398.nil_val,null));
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
var len__12401 = ks.length;
var i__12402 = 0;
var out__12403 = cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);
while(true){
if((i__12402 < len__12401))
{{
var G__12404 = (i__12402 + 1);
var G__12405 = cljs.core.assoc_BANG_.call(null,out__12403,(ks[i__12402]),(vs[i__12402]));
i__12402 = G__12404;
out__12403 = G__12405;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__12403);
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
cljs.core.TransientHashMap.cljs$lang$ctorPrSeq = (function (this__5174__auto__){
return cljs.core.list.call(null,"cljs.core/TransientHashMap");
});
cljs.core.TransientHashMap.cljs$lang$ctorPrWriter = (function (this__5174__auto__,writer__5175__auto__){
return cljs.core._write.call(null,writer__5175__auto__,"cljs.core/TransientHashMap");
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = (function (tcoll,key){
var this__12406 = this;
return tcoll.without_BANG_(key);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__12407 = this;
return tcoll.assoc_BANG_(key,val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,val){
var this__12408 = this;
return tcoll.conj_BANG_(val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__12409 = this;
return tcoll.persistent_BANG_();
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var this__12410 = this;
if((k == null))
{if(this__12410.has_nil_QMARK_)
{return this__12410.nil_val;
} else
{return null;
}
} else
{if((this__12410.root == null))
{return null;
} else
{return this__12410.root.inode_lookup(0,cljs.core.hash.call(null,k),k);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var this__12411 = this;
if((k == null))
{if(this__12411.has_nil_QMARK_)
{return this__12411.nil_val;
} else
{return not_found;
}
} else
{if((this__12411.root == null))
{return not_found;
} else
{return this__12411.root.inode_lookup(0,cljs.core.hash.call(null,k),k,not_found);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__12412 = this;
if(this__12412.edit)
{return this__12412.count;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.conj_BANG_ = (function (o){
var this__12413 = this;
var tcoll__12414 = this;
if(this__12413.edit)
{if((function (){var G__12415__12416 = o;
if(G__12415__12416)
{if((function (){var or__3824__auto____12417 = (G__12415__12416.cljs$lang$protocol_mask$partition0$ & 2048);
if(or__3824__auto____12417)
{return or__3824__auto____12417;
} else
{return G__12415__12416.cljs$core$IMapEntry$;
}
})())
{return true;
} else
{if((!G__12415__12416.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__12415__12416);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__12415__12416);
}
})())
{return tcoll__12414.assoc_BANG_(cljs.core.key.call(null,o),cljs.core.val.call(null,o));
} else
{var es__12418 = cljs.core.seq.call(null,o);
var tcoll__12419 = tcoll__12414;
while(true){
var temp__3971__auto____12420 = cljs.core.first.call(null,es__12418);
if(cljs.core.truth_(temp__3971__auto____12420))
{var e__12421 = temp__3971__auto____12420;
{
var G__12432 = cljs.core.next.call(null,es__12418);
var G__12433 = tcoll__12419.assoc_BANG_(cljs.core.key.call(null,e__12421),cljs.core.val.call(null,e__12421));
es__12418 = G__12432;
tcoll__12419 = G__12433;
continue;
}
} else
{return tcoll__12419;
}
break;
}
}
} else
{throw (new Error("conj! after persistent"));
}
});
cljs.core.TransientHashMap.prototype.assoc_BANG_ = (function (k,v){
var this__12422 = this;
var tcoll__12423 = this;
if(this__12422.edit)
{if((k == null))
{if((this__12422.nil_val === v))
{} else
{this__12422.nil_val = v;
}
if(this__12422.has_nil_QMARK_)
{} else
{this__12422.count = (this__12422.count + 1);
this__12422.has_nil_QMARK_ = true;
}
return tcoll__12423;
} else
{var added_leaf_QMARK___12424 = (new cljs.core.Box(false));
var node__12425 = (((this__12422.root == null))?cljs.core.BitmapIndexedNode.EMPTY:this__12422.root).inode_assoc_BANG_(this__12422.edit,0,cljs.core.hash.call(null,k),k,v,added_leaf_QMARK___12424);
if((node__12425 === this__12422.root))
{} else
{this__12422.root = node__12425;
}
if(added_leaf_QMARK___12424.val)
{this__12422.count = (this__12422.count + 1);
} else
{}
return tcoll__12423;
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.without_BANG_ = (function (k){
var this__12426 = this;
var tcoll__12427 = this;
if(this__12426.edit)
{if((k == null))
{if(this__12426.has_nil_QMARK_)
{this__12426.has_nil_QMARK_ = false;
this__12426.nil_val = null;
this__12426.count = (this__12426.count - 1);
return tcoll__12427;
} else
{return tcoll__12427;
}
} else
{if((this__12426.root == null))
{return tcoll__12427;
} else
{var removed_leaf_QMARK___12428 = (new cljs.core.Box(false));
var node__12429 = this__12426.root.inode_without_BANG_(this__12426.edit,0,cljs.core.hash.call(null,k),k,removed_leaf_QMARK___12428);
if((node__12429 === this__12426.root))
{} else
{this__12426.root = node__12429;
}
if(cljs.core.truth_((removed_leaf_QMARK___12428[0])))
{this__12426.count = (this__12426.count - 1);
} else
{}
return tcoll__12427;
}
}
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.persistent_BANG_ = (function (){
var this__12430 = this;
var tcoll__12431 = this;
if(this__12430.edit)
{this__12430.edit = null;
return (new cljs.core.PersistentHashMap(null,this__12430.count,this__12430.root,this__12430.has_nil_QMARK_,this__12430.nil_val,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientHashMap;
cljs.core.tree_map_seq_push = (function tree_map_seq_push(node,stack,ascending_QMARK_){
var t__12436 = node;
var stack__12437 = stack;
while(true){
if(!((t__12436 == null)))
{{
var G__12438 = ((ascending_QMARK_)?t__12436.left:t__12436.right);
var G__12439 = cljs.core.conj.call(null,stack__12437,t__12436);
t__12436 = G__12438;
stack__12437 = G__12439;
continue;
}
} else
{return stack__12437;
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
cljs.core.PersistentTreeMapSeq.cljs$lang$ctorPrSeq = (function (this__5174__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentTreeMapSeq");
});
cljs.core.PersistentTreeMapSeq.cljs$lang$ctorPrWriter = (function (this__5174__auto__,writer__5175__auto__){
return cljs.core._write.call(null,writer__5175__auto__,"cljs.core/PersistentTreeMapSeq");
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__12440 = this;
var h__5055__auto____12441 = this__12440.__hash;
if(!((h__5055__auto____12441 == null)))
{return h__5055__auto____12441;
} else
{var h__5055__auto____12442 = cljs.core.hash_coll.call(null,coll);
this__12440.__hash = h__5055__auto____12442;
return h__5055__auto____12442;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__12443 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentTreeMapSeq.prototype.toString = (function (){
var this__12444 = this;
var this__12445 = this;
return cljs.core.pr_str.call(null,this__12445);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__12446 = this;
return this$;
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__12447 = this;
if((this__12447.cnt < 0))
{return (cljs.core.count.call(null,cljs.core.next.call(null,coll)) + 1);
} else
{return this__12447.cnt;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (this$){
var this__12448 = this;
return cljs.core.peek.call(null,this__12448.stack);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){
var this__12449 = this;
var t__12450 = cljs.core.first.call(null,this__12449.stack);
var next_stack__12451 = cljs.core.tree_map_seq_push.call(null,((this__12449.ascending_QMARK_)?t__12450.right:t__12450.left),cljs.core.next.call(null,this__12449.stack),this__12449.ascending_QMARK_);
if(!((next_stack__12451 == null)))
{return (new cljs.core.PersistentTreeMapSeq(null,next_stack__12451,this__12449.ascending_QMARK_,(this__12449.cnt - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__12452 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__12453 = this;
return (new cljs.core.PersistentTreeMapSeq(meta,this__12453.stack,this__12453.ascending_QMARK_,this__12453.cnt,this__12453.__hash));
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__12454 = this;
return this__12454.meta;
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__12455 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__12455.meta);
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
{if((function (){var and__3822__auto____12457 = cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right);
if(and__3822__auto____12457)
{return cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,right.left);
} else
{return and__3822__auto____12457;
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
{if((function (){var and__3822__auto____12459 = cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,left);
if(and__3822__auto____12459)
{return cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,left.right);
} else
{return and__3822__auto____12459;
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
var init__12463 = f.call(null,init,node.key,node.val);
if(cljs.core.reduced_QMARK_.call(null,init__12463))
{return cljs.core.deref.call(null,init__12463);
} else
{var init__12464 = ((!((node.left == null)))?tree_map_kv_reduce.call(null,node.left,f,init__12463):init__12463);
if(cljs.core.reduced_QMARK_.call(null,init__12464))
{return cljs.core.deref.call(null,init__12464);
} else
{var init__12465 = ((!((node.right == null)))?tree_map_kv_reduce.call(null,node.right,f,init__12464):init__12464);
if(cljs.core.reduced_QMARK_.call(null,init__12465))
{return cljs.core.deref.call(null,init__12465);
} else
{return init__12465;
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
cljs.core.BlackNode.cljs$lang$ctorPrSeq = (function (this__5174__auto__){
return cljs.core.list.call(null,"cljs.core/BlackNode");
});
cljs.core.BlackNode.cljs$lang$ctorPrWriter = (function (this__5174__auto__,writer__5175__auto__){
return cljs.core._write.call(null,writer__5175__auto__,"cljs.core/BlackNode");
});
cljs.core.BlackNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__12468 = this;
var h__5055__auto____12469 = this__12468.__hash;
if(!((h__5055__auto____12469 == null)))
{return h__5055__auto____12469;
} else
{var h__5055__auto____12470 = cljs.core.hash_coll.call(null,coll);
this__12468.__hash = h__5055__auto____12470;
return h__5055__auto____12470;
}
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var this__12471 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,null);
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var this__12472 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,not_found);
});
cljs.core.BlackNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var this__12473 = this;
return cljs.core.assoc.call(null,cljs.core.PersistentVector.fromArray([this__12473.key,this__12473.val], true),k,v);
});
cljs.core.BlackNode.prototype.call = (function() {
var G__12521 = null;
var G__12521__2 = (function (this_sym12474,k){
var this__12476 = this;
var this_sym12474__12477 = this;
var node__12478 = this_sym12474__12477;
return node__12478.cljs$core$ILookup$_lookup$arity$2(node__12478,k);
});
var G__12521__3 = (function (this_sym12475,k,not_found){
var this__12476 = this;
var this_sym12475__12479 = this;
var node__12480 = this_sym12475__12479;
return node__12480.cljs$core$ILookup$_lookup$arity$3(node__12480,k,not_found);
});
G__12521 = function(this_sym12475,k,not_found){
switch(arguments.length){
case 2:
return G__12521__2.call(this,this_sym12475,k);
case 3:
return G__12521__3.call(this,this_sym12475,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12521;
})()
;
cljs.core.BlackNode.prototype.apply = (function (this_sym12466,args12467){
var this__12481 = this;
return this_sym12466.call.apply(this_sym12466,[this_sym12466].concat(args12467.slice()));
});
cljs.core.BlackNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var this__12482 = this;
return cljs.core.PersistentVector.fromArray([this__12482.key,this__12482.val,o], true);
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var this__12483 = this;
return this__12483.key;
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var this__12484 = this;
return this__12484.val;
});
cljs.core.BlackNode.prototype.add_right = (function (ins){
var this__12485 = this;
var node__12486 = this;
return ins.balance_right(node__12486);
});
cljs.core.BlackNode.prototype.redden = (function (){
var this__12487 = this;
var node__12488 = this;
return (new cljs.core.RedNode(this__12487.key,this__12487.val,this__12487.left,this__12487.right,null));
});
cljs.core.BlackNode.prototype.remove_right = (function (del){
var this__12489 = this;
var node__12490 = this;
return cljs.core.balance_right_del.call(null,this__12489.key,this__12489.val,this__12489.left,del);
});
cljs.core.BlackNode.prototype.replace = (function (key,val,left,right){
var this__12491 = this;
var node__12492 = this;
return (new cljs.core.BlackNode(key,val,left,right,null));
});
cljs.core.BlackNode.prototype.kv_reduce = (function (f,init){
var this__12493 = this;
var node__12494 = this;
return cljs.core.tree_map_kv_reduce.call(null,node__12494,f,init);
});
cljs.core.BlackNode.prototype.remove_left = (function (del){
var this__12495 = this;
var node__12496 = this;
return cljs.core.balance_left_del.call(null,this__12495.key,this__12495.val,del,this__12495.right);
});
cljs.core.BlackNode.prototype.add_left = (function (ins){
var this__12497 = this;
var node__12498 = this;
return ins.balance_left(node__12498);
});
cljs.core.BlackNode.prototype.balance_left = (function (parent){
var this__12499 = this;
var node__12500 = this;
return (new cljs.core.BlackNode(parent.key,parent.val,node__12500,parent.right,null));
});
cljs.core.BlackNode.prototype.toString = (function() {
var G__12522 = null;
var G__12522__0 = (function (){
var this__12501 = this;
var this__12503 = this;
return cljs.core.pr_str.call(null,this__12503);
});
G__12522 = function(){
switch(arguments.length){
case 0:
return G__12522__0.call(this);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12522;
})()
;
cljs.core.BlackNode.prototype.balance_right = (function (parent){
var this__12504 = this;
var node__12505 = this;
return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node__12505,null));
});
cljs.core.BlackNode.prototype.blacken = (function (){
var this__12506 = this;
var node__12507 = this;
return node__12507;
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var this__12508 = this;
return cljs.core.ci_reduce.call(null,node,f);
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var this__12509 = this;
return cljs.core.ci_reduce.call(null,node,f,start);
});
cljs.core.BlackNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var this__12510 = this;
return cljs.core.list.call(null,this__12510.key,this__12510.val);
});
cljs.core.BlackNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var this__12511 = this;
return 2;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var this__12512 = this;
return this__12512.val;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var this__12513 = this;
return cljs.core.PersistentVector.fromArray([this__12513.key], true);
});
cljs.core.BlackNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var this__12514 = this;
return cljs.core._assoc_n.call(null,cljs.core.PersistentVector.fromArray([this__12514.key,this__12514.val], true),n,v);
});
cljs.core.BlackNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__12515 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.BlackNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var this__12516 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([this__12516.key,this__12516.val], true),meta);
});
cljs.core.BlackNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var this__12517 = this;
return null;
});
cljs.core.BlackNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var this__12518 = this;
if((n === 0))
{return this__12518.key;
} else
{if((n === 1))
{return this__12518.val;
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
var this__12519 = this;
if((n === 0))
{return this__12519.key;
} else
{if((n === 1))
{return this__12519.val;
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
var this__12520 = this;
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
cljs.core.RedNode.cljs$lang$ctorPrSeq = (function (this__5174__auto__){
return cljs.core.list.call(null,"cljs.core/RedNode");
});
cljs.core.RedNode.cljs$lang$ctorPrWriter = (function (this__5174__auto__,writer__5175__auto__){
return cljs.core._write.call(null,writer__5175__auto__,"cljs.core/RedNode");
});
cljs.core.RedNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__12525 = this;
var h__5055__auto____12526 = this__12525.__hash;
if(!((h__5055__auto____12526 == null)))
{return h__5055__auto____12526;
} else
{var h__5055__auto____12527 = cljs.core.hash_coll.call(null,coll);
this__12525.__hash = h__5055__auto____12527;
return h__5055__auto____12527;
}
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var this__12528 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,null);
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var this__12529 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,not_found);
});
cljs.core.RedNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var this__12530 = this;
return cljs.core.assoc.call(null,cljs.core.PersistentVector.fromArray([this__12530.key,this__12530.val], true),k,v);
});
cljs.core.RedNode.prototype.call = (function() {
var G__12578 = null;
var G__12578__2 = (function (this_sym12531,k){
var this__12533 = this;
var this_sym12531__12534 = this;
var node__12535 = this_sym12531__12534;
return node__12535.cljs$core$ILookup$_lookup$arity$2(node__12535,k);
});
var G__12578__3 = (function (this_sym12532,k,not_found){
var this__12533 = this;
var this_sym12532__12536 = this;
var node__12537 = this_sym12532__12536;
return node__12537.cljs$core$ILookup$_lookup$arity$3(node__12537,k,not_found);
});
G__12578 = function(this_sym12532,k,not_found){
switch(arguments.length){
case 2:
return G__12578__2.call(this,this_sym12532,k);
case 3:
return G__12578__3.call(this,this_sym12532,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12578;
})()
;
cljs.core.RedNode.prototype.apply = (function (this_sym12523,args12524){
var this__12538 = this;
return this_sym12523.call.apply(this_sym12523,[this_sym12523].concat(args12524.slice()));
});
cljs.core.RedNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var this__12539 = this;
return cljs.core.PersistentVector.fromArray([this__12539.key,this__12539.val,o], true);
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var this__12540 = this;
return this__12540.key;
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var this__12541 = this;
return this__12541.val;
});
cljs.core.RedNode.prototype.add_right = (function (ins){
var this__12542 = this;
var node__12543 = this;
return (new cljs.core.RedNode(this__12542.key,this__12542.val,this__12542.left,ins,null));
});
cljs.core.RedNode.prototype.redden = (function (){
var this__12544 = this;
var node__12545 = this;
throw (new Error("red-black tree invariant violation"));
});
cljs.core.RedNode.prototype.remove_right = (function (del){
var this__12546 = this;
var node__12547 = this;
return (new cljs.core.RedNode(this__12546.key,this__12546.val,this__12546.left,del,null));
});
cljs.core.RedNode.prototype.replace = (function (key,val,left,right){
var this__12548 = this;
var node__12549 = this;
return (new cljs.core.RedNode(key,val,left,right,null));
});
cljs.core.RedNode.prototype.kv_reduce = (function (f,init){
var this__12550 = this;
var node__12551 = this;
return cljs.core.tree_map_kv_reduce.call(null,node__12551,f,init);
});
cljs.core.RedNode.prototype.remove_left = (function (del){
var this__12552 = this;
var node__12553 = this;
return (new cljs.core.RedNode(this__12552.key,this__12552.val,del,this__12552.right,null));
});
cljs.core.RedNode.prototype.add_left = (function (ins){
var this__12554 = this;
var node__12555 = this;
return (new cljs.core.RedNode(this__12554.key,this__12554.val,ins,this__12554.right,null));
});
cljs.core.RedNode.prototype.balance_left = (function (parent){
var this__12556 = this;
var node__12557 = this;
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__12556.left))
{return (new cljs.core.RedNode(this__12556.key,this__12556.val,this__12556.left.blacken(),(new cljs.core.BlackNode(parent.key,parent.val,this__12556.right,parent.right,null)),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__12556.right))
{return (new cljs.core.RedNode(this__12556.right.key,this__12556.right.val,(new cljs.core.BlackNode(this__12556.key,this__12556.val,this__12556.left,this__12556.right.left,null)),(new cljs.core.BlackNode(parent.key,parent.val,this__12556.right.right,parent.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(parent.key,parent.val,node__12557,parent.right,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.toString = (function() {
var G__12579 = null;
var G__12579__0 = (function (){
var this__12558 = this;
var this__12560 = this;
return cljs.core.pr_str.call(null,this__12560);
});
G__12579 = function(){
switch(arguments.length){
case 0:
return G__12579__0.call(this);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12579;
})()
;
cljs.core.RedNode.prototype.balance_right = (function (parent){
var this__12561 = this;
var node__12562 = this;
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__12561.right))
{return (new cljs.core.RedNode(this__12561.key,this__12561.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,this__12561.left,null)),this__12561.right.blacken(),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__12561.left))
{return (new cljs.core.RedNode(this__12561.left.key,this__12561.left.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,this__12561.left.left,null)),(new cljs.core.BlackNode(this__12561.key,this__12561.val,this__12561.left.right,this__12561.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node__12562,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.blacken = (function (){
var this__12563 = this;
var node__12564 = this;
return (new cljs.core.BlackNode(this__12563.key,this__12563.val,this__12563.left,this__12563.right,null));
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var this__12565 = this;
return cljs.core.ci_reduce.call(null,node,f);
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var this__12566 = this;
return cljs.core.ci_reduce.call(null,node,f,start);
});
cljs.core.RedNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var this__12567 = this;
return cljs.core.list.call(null,this__12567.key,this__12567.val);
});
cljs.core.RedNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var this__12568 = this;
return 2;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var this__12569 = this;
return this__12569.val;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var this__12570 = this;
return cljs.core.PersistentVector.fromArray([this__12570.key], true);
});
cljs.core.RedNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var this__12571 = this;
return cljs.core._assoc_n.call(null,cljs.core.PersistentVector.fromArray([this__12571.key,this__12571.val], true),n,v);
});
cljs.core.RedNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__12572 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.RedNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var this__12573 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([this__12573.key,this__12573.val], true),meta);
});
cljs.core.RedNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var this__12574 = this;
return null;
});
cljs.core.RedNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var this__12575 = this;
if((n === 0))
{return this__12575.key;
} else
{if((n === 1))
{return this__12575.val;
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
var this__12576 = this;
if((n === 0))
{return this__12576.key;
} else
{if((n === 1))
{return this__12576.val;
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
var this__12577 = this;
return cljs.core.PersistentVector.EMPTY;
});
cljs.core.RedNode;
cljs.core.tree_map_add = (function tree_map_add(comp,tree,k,v,found){
if((tree == null))
{return (new cljs.core.RedNode(k,v,null,null,null));
} else
{var c__12583 = comp.call(null,k,tree.key);
if((c__12583 === 0))
{(found[0] = tree);
return null;
} else
{if((c__12583 < 0))
{var ins__12584 = tree_map_add.call(null,comp,tree.left,k,v,found);
if(!((ins__12584 == null)))
{return tree.add_left(ins__12584);
} else
{return null;
}
} else
{if("\uFDD0'else")
{var ins__12585 = tree_map_add.call(null,comp,tree.right,k,v,found);
if(!((ins__12585 == null)))
{return tree.add_right(ins__12585);
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
{var app__12588 = tree_map_append.call(null,left.right,right.left);
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,app__12588))
{return (new cljs.core.RedNode(app__12588.key,app__12588.val,(new cljs.core.RedNode(left.key,left.val,left.left,app__12588.left,null)),(new cljs.core.RedNode(right.key,right.val,app__12588.right,right.right,null)),null));
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,(new cljs.core.RedNode(right.key,right.val,app__12588,right.right,null)),null));
}
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,tree_map_append.call(null,left.right,right),null));
}
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right))
{return (new cljs.core.RedNode(right.key,right.val,tree_map_append.call(null,left,right.left),right.right,null));
} else
{if("\uFDD0'else")
{var app__12589 = tree_map_append.call(null,left.right,right.left);
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,app__12589))
{return (new cljs.core.RedNode(app__12589.key,app__12589.val,(new cljs.core.BlackNode(left.key,left.val,left.left,app__12589.left,null)),(new cljs.core.BlackNode(right.key,right.val,app__12589.right,right.right,null)),null));
} else
{return cljs.core.balance_left_del.call(null,left.key,left.val,left.left,(new cljs.core.BlackNode(right.key,right.val,app__12589,right.right,null)));
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
{var c__12595 = comp.call(null,k,tree.key);
if((c__12595 === 0))
{(found[0] = tree);
return cljs.core.tree_map_append.call(null,tree.left,tree.right);
} else
{if((c__12595 < 0))
{var del__12596 = tree_map_remove.call(null,comp,tree.left,k,found);
if((function (){var or__3824__auto____12597 = !((del__12596 == null));
if(or__3824__auto____12597)
{return or__3824__auto____12597;
} else
{return !(((found[0]) == null));
}
})())
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,tree.left))
{return cljs.core.balance_left_del.call(null,tree.key,tree.val,del__12596,tree.right);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,del__12596,tree.right,null));
}
} else
{return null;
}
} else
{if("\uFDD0'else")
{var del__12598 = tree_map_remove.call(null,comp,tree.right,k,found);
if((function (){var or__3824__auto____12599 = !((del__12598 == null));
if(or__3824__auto____12599)
{return or__3824__auto____12599;
} else
{return !(((found[0]) == null));
}
})())
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,tree.right))
{return cljs.core.balance_right_del.call(null,tree.key,tree.val,tree.left,del__12598);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,tree.left,del__12598,null));
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
var tk__12602 = tree.key;
var c__12603 = comp.call(null,k,tk__12602);
if((c__12603 === 0))
{return tree.replace(tk__12602,v,tree.left,tree.right);
} else
{if((c__12603 < 0))
{return tree.replace(tk__12602,tree.val,tree_map_replace.call(null,comp,tree.left,k,v),tree.right);
} else
{if("\uFDD0'else")
{return tree.replace(tk__12602,tree.val,tree.left,tree_map_replace.call(null,comp,tree.right,k,v));
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
cljs.core.PersistentTreeMap.cljs$lang$ctorPrSeq = (function (this__5174__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentTreeMap");
});
cljs.core.PersistentTreeMap.cljs$lang$ctorPrWriter = (function (this__5174__auto__,writer__5175__auto__){
return cljs.core._write.call(null,writer__5175__auto__,"cljs.core/PersistentTreeMap");
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__12606 = this;
var h__5055__auto____12607 = this__12606.__hash;
if(!((h__5055__auto____12607 == null)))
{return h__5055__auto____12607;
} else
{var h__5055__auto____12608 = cljs.core.hash_imap.call(null,coll);
this__12606.__hash = h__5055__auto____12608;
return h__5055__auto____12608;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__12609 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__12610 = this;
var n__12611 = coll.entry_at(k);
if(!((n__12611 == null)))
{return n__12611.val;
} else
{return not_found;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__12612 = this;
var found__12613 = [null];
var t__12614 = cljs.core.tree_map_add.call(null,this__12612.comp,this__12612.tree,k,v,found__12613);
if((t__12614 == null))
{var found_node__12615 = cljs.core.nth.call(null,found__12613,0);
if(cljs.core._EQ_.call(null,v,found_node__12615.val))
{return coll;
} else
{return (new cljs.core.PersistentTreeMap(this__12612.comp,cljs.core.tree_map_replace.call(null,this__12612.comp,this__12612.tree,k,v),this__12612.cnt,this__12612.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(this__12612.comp,t__12614.blacken(),(this__12612.cnt + 1),this__12612.meta,null));
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__12616 = this;
return !((coll.entry_at(k) == null));
});
cljs.core.PersistentTreeMap.prototype.call = (function() {
var G__12650 = null;
var G__12650__2 = (function (this_sym12617,k){
var this__12619 = this;
var this_sym12617__12620 = this;
var coll__12621 = this_sym12617__12620;
return coll__12621.cljs$core$ILookup$_lookup$arity$2(coll__12621,k);
});
var G__12650__3 = (function (this_sym12618,k,not_found){
var this__12619 = this;
var this_sym12618__12622 = this;
var coll__12623 = this_sym12618__12622;
return coll__12623.cljs$core$ILookup$_lookup$arity$3(coll__12623,k,not_found);
});
G__12650 = function(this_sym12618,k,not_found){
switch(arguments.length){
case 2:
return G__12650__2.call(this,this_sym12618,k);
case 3:
return G__12650__3.call(this,this_sym12618,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12650;
})()
;
cljs.core.PersistentTreeMap.prototype.apply = (function (this_sym12604,args12605){
var this__12624 = this;
return this_sym12604.call.apply(this_sym12604,[this_sym12604].concat(args12605.slice()));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__12625 = this;
if(!((this__12625.tree == null)))
{return cljs.core.tree_map_kv_reduce.call(null,this__12625.tree,f,init);
} else
{return init;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__12626 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__12627 = this;
if((this__12627.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__12627.tree,false,this__12627.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.toString = (function (){
var this__12628 = this;
var this__12629 = this;
return cljs.core.pr_str.call(null,this__12629);
});
cljs.core.PersistentTreeMap.prototype.entry_at = (function (k){
var this__12630 = this;
var coll__12631 = this;
var t__12632 = this__12630.tree;
while(true){
if(!((t__12632 == null)))
{var c__12633 = this__12630.comp.call(null,k,t__12632.key);
if((c__12633 === 0))
{return t__12632;
} else
{if((c__12633 < 0))
{{
var G__12651 = t__12632.left;
t__12632 = G__12651;
continue;
}
} else
{if("\uFDD0'else")
{{
var G__12652 = t__12632.right;
t__12632 = G__12652;
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
var this__12634 = this;
if((this__12634.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__12634.tree,ascending_QMARK_,this__12634.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var this__12635 = this;
if((this__12635.cnt > 0))
{var stack__12636 = null;
var t__12637 = this__12635.tree;
while(true){
if(!((t__12637 == null)))
{var c__12638 = this__12635.comp.call(null,k,t__12637.key);
if((c__12638 === 0))
{return (new cljs.core.PersistentTreeMapSeq(null,cljs.core.conj.call(null,stack__12636,t__12637),ascending_QMARK_,-1,null));
} else
{if(cljs.core.truth_(ascending_QMARK_))
{if((c__12638 < 0))
{{
var G__12653 = cljs.core.conj.call(null,stack__12636,t__12637);
var G__12654 = t__12637.left;
stack__12636 = G__12653;
t__12637 = G__12654;
continue;
}
} else
{{
var G__12655 = stack__12636;
var G__12656 = t__12637.right;
stack__12636 = G__12655;
t__12637 = G__12656;
continue;
}
}
} else
{if("\uFDD0'else")
{if((c__12638 > 0))
{{
var G__12657 = cljs.core.conj.call(null,stack__12636,t__12637);
var G__12658 = t__12637.right;
stack__12636 = G__12657;
t__12637 = G__12658;
continue;
}
} else
{{
var G__12659 = stack__12636;
var G__12660 = t__12637.left;
stack__12636 = G__12659;
t__12637 = G__12660;
continue;
}
}
} else
{return null;
}
}
}
} else
{if((stack__12636 == null))
{return (new cljs.core.PersistentTreeMapSeq(null,stack__12636,ascending_QMARK_,-1,null));
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
var this__12639 = this;
return cljs.core.key.call(null,entry);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var this__12640 = this;
return this__12640.comp;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__12641 = this;
if((this__12641.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__12641.tree,true,this__12641.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__12642 = this;
return this__12642.cnt;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__12643 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__12644 = this;
return (new cljs.core.PersistentTreeMap(this__12644.comp,this__12644.tree,this__12644.cnt,meta,this__12644.__hash));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__12645 = this;
return this__12645.meta;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__12646 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentTreeMap.EMPTY,this__12646.meta);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__12647 = this;
var found__12648 = [null];
var t__12649 = cljs.core.tree_map_remove.call(null,this__12647.comp,this__12647.tree,k,found__12648);
if((t__12649 == null))
{if((cljs.core.nth.call(null,found__12648,0) == null))
{return coll;
} else
{return (new cljs.core.PersistentTreeMap(this__12647.comp,null,0,this__12647.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(this__12647.comp,t__12649.blacken(),(this__12647.cnt - 1),this__12647.meta,null));
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
var in__12663 = cljs.core.seq.call(null,keyvals);
var out__12664 = cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);
while(true){
if(in__12663)
{{
var G__12665 = cljs.core.nnext.call(null,in__12663);
var G__12666 = cljs.core.assoc_BANG_.call(null,out__12664,cljs.core.first.call(null,in__12663),cljs.core.second.call(null,in__12663));
in__12663 = G__12665;
out__12664 = G__12666;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__12664);
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
hash_map.cljs$lang$applyTo = (function (arglist__12667){
var keyvals = cljs.core.seq(arglist__12667);;
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
array_map.cljs$lang$applyTo = (function (arglist__12668){
var keyvals = cljs.core.seq(arglist__12668);;
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
var ks__12672 = [];
var obj__12673 = {};
var kvs__12674 = cljs.core.seq.call(null,keyvals);
while(true){
if(kvs__12674)
{ks__12672.push(cljs.core.first.call(null,kvs__12674));
(obj__12673[cljs.core.first.call(null,kvs__12674)] = cljs.core.second.call(null,kvs__12674));
{
var G__12675 = cljs.core.nnext.call(null,kvs__12674);
kvs__12674 = G__12675;
continue;
}
} else
{return cljs.core.ObjMap.fromObject.call(null,ks__12672,obj__12673);
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
obj_map.cljs$lang$applyTo = (function (arglist__12676){
var keyvals = cljs.core.seq(arglist__12676);;
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
var in__12679 = cljs.core.seq.call(null,keyvals);
var out__12680 = cljs.core.PersistentTreeMap.EMPTY;
while(true){
if(in__12679)
{{
var G__12681 = cljs.core.nnext.call(null,in__12679);
var G__12682 = cljs.core.assoc.call(null,out__12680,cljs.core.first.call(null,in__12679),cljs.core.second.call(null,in__12679));
in__12679 = G__12681;
out__12680 = G__12682;
continue;
}
} else
{return out__12680;
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
sorted_map.cljs$lang$applyTo = (function (arglist__12683){
var keyvals = cljs.core.seq(arglist__12683);;
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
var in__12686 = cljs.core.seq.call(null,keyvals);
var out__12687 = (new cljs.core.PersistentTreeMap(comparator,null,0,null,0));
while(true){
if(in__12686)
{{
var G__12688 = cljs.core.nnext.call(null,in__12686);
var G__12689 = cljs.core.assoc.call(null,out__12687,cljs.core.first.call(null,in__12686),cljs.core.second.call(null,in__12686));
in__12686 = G__12688;
out__12687 = G__12689;
continue;
}
} else
{return out__12687;
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
sorted_map_by.cljs$lang$applyTo = (function (arglist__12690){
var comparator = cljs.core.first(arglist__12690);
var keyvals = cljs.core.rest(arglist__12690);
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
{return cljs.core.reduce.call(null,(function (p1__12691_SHARP_,p2__12692_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3824__auto____12694 = p1__12691_SHARP_;
if(cljs.core.truth_(or__3824__auto____12694))
{return or__3824__auto____12694;
} else
{return cljs.core.ObjMap.EMPTY;
}
})(),p2__12692_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__12695){
var maps = cljs.core.seq(arglist__12695);;
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
{var merge_entry__12703 = (function (m,e){
var k__12701 = cljs.core.first.call(null,e);
var v__12702 = cljs.core.second.call(null,e);
if(cljs.core.contains_QMARK_.call(null,m,k__12701))
{return cljs.core.assoc.call(null,m,k__12701,f.call(null,cljs.core._lookup.call(null,m,k__12701,null),v__12702));
} else
{return cljs.core.assoc.call(null,m,k__12701,v__12702);
}
});
var merge2__12705 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__12703,(function (){var or__3824__auto____12704 = m1;
if(cljs.core.truth_(or__3824__auto____12704))
{return or__3824__auto____12704;
} else
{return cljs.core.ObjMap.EMPTY;
}
})(),cljs.core.seq.call(null,m2));
});
return cljs.core.reduce.call(null,merge2__12705,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__12706){
var f = cljs.core.first(arglist__12706);
var maps = cljs.core.rest(arglist__12706);
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
var ret__12711 = cljs.core.ObjMap.EMPTY;
var keys__12712 = cljs.core.seq.call(null,keyseq);
while(true){
if(keys__12712)
{var key__12713 = cljs.core.first.call(null,keys__12712);
var entry__12714 = cljs.core._lookup.call(null,map,key__12713,"\uFDD0'cljs.core/not-found");
{
var G__12715 = ((cljs.core.not_EQ_.call(null,entry__12714,"\uFDD0'cljs.core/not-found"))?cljs.core.assoc.call(null,ret__12711,key__12713,entry__12714):ret__12711);
var G__12716 = cljs.core.next.call(null,keys__12712);
ret__12711 = G__12715;
keys__12712 = G__12716;
continue;
}
} else
{return ret__12711;
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
cljs.core.PersistentHashSet.cljs$lang$ctorPrSeq = (function (this__5174__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentHashSet");
});
cljs.core.PersistentHashSet.cljs$lang$ctorPrWriter = (function (this__5174__auto__,writer__5175__auto__){
return cljs.core._write.call(null,writer__5175__auto__,"cljs.core/PersistentHashSet");
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__12720 = this;
return (new cljs.core.TransientHashSet(cljs.core.transient$.call(null,this__12720.hash_map)));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__12721 = this;
var h__5055__auto____12722 = this__12721.__hash;
if(!((h__5055__auto____12722 == null)))
{return h__5055__auto____12722;
} else
{var h__5055__auto____12723 = cljs.core.hash_iset.call(null,coll);
this__12721.__hash = h__5055__auto____12723;
return h__5055__auto____12723;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var this__12724 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,v,null);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var this__12725 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__12725.hash_map,v)))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentHashSet.prototype.call = (function() {
var G__12746 = null;
var G__12746__2 = (function (this_sym12726,k){
var this__12728 = this;
var this_sym12726__12729 = this;
var coll__12730 = this_sym12726__12729;
return coll__12730.cljs$core$ILookup$_lookup$arity$2(coll__12730,k);
});
var G__12746__3 = (function (this_sym12727,k,not_found){
var this__12728 = this;
var this_sym12727__12731 = this;
var coll__12732 = this_sym12727__12731;
return coll__12732.cljs$core$ILookup$_lookup$arity$3(coll__12732,k,not_found);
});
G__12746 = function(this_sym12727,k,not_found){
switch(arguments.length){
case 2:
return G__12746__2.call(this,this_sym12727,k);
case 3:
return G__12746__3.call(this,this_sym12727,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12746;
})()
;
cljs.core.PersistentHashSet.prototype.apply = (function (this_sym12718,args12719){
var this__12733 = this;
return this_sym12718.call.apply(this_sym12718,[this_sym12718].concat(args12719.slice()));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__12734 = this;
return (new cljs.core.PersistentHashSet(this__12734.meta,cljs.core.assoc.call(null,this__12734.hash_map,o,null),null));
});
cljs.core.PersistentHashSet.prototype.toString = (function (){
var this__12735 = this;
var this__12736 = this;
return cljs.core.pr_str.call(null,this__12736);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__12737 = this;
return cljs.core.keys.call(null,this__12737.hash_map);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var this__12738 = this;
return (new cljs.core.PersistentHashSet(this__12738.meta,cljs.core.dissoc.call(null,this__12738.hash_map,v),null));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__12739 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__12740 = this;
var and__3822__auto____12741 = cljs.core.set_QMARK_.call(null,other);
if(and__3822__auto____12741)
{var and__3822__auto____12742 = (cljs.core.count.call(null,coll) === cljs.core.count.call(null,other));
if(and__3822__auto____12742)
{return cljs.core.every_QMARK_.call(null,(function (p1__12717_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__12717_SHARP_);
}),other);
} else
{return and__3822__auto____12742;
}
} else
{return and__3822__auto____12741;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__12743 = this;
return (new cljs.core.PersistentHashSet(meta,this__12743.hash_map,this__12743.__hash));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__12744 = this;
return this__12744.meta;
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__12745 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentHashSet.EMPTY,this__12745.meta);
});
cljs.core.PersistentHashSet;
cljs.core.PersistentHashSet.EMPTY = (new cljs.core.PersistentHashSet(null,cljs.core.hash_map.call(null),0));
cljs.core.PersistentHashSet.fromArray = (function (items){
var len__12747 = cljs.core.count.call(null,items);
var i__12748 = 0;
var out__12749 = cljs.core.transient$.call(null,cljs.core.PersistentHashSet.EMPTY);
while(true){
if((i__12748 < len__12747))
{{
var G__12750 = (i__12748 + 1);
var G__12751 = cljs.core.conj_BANG_.call(null,out__12749,(items[i__12748]));
i__12748 = G__12750;
out__12749 = G__12751;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__12749);
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
cljs.core.TransientHashSet.cljs$lang$ctorPrSeq = (function (this__5174__auto__){
return cljs.core.list.call(null,"cljs.core/TransientHashSet");
});
cljs.core.TransientHashSet.cljs$lang$ctorPrWriter = (function (this__5174__auto__,writer__5175__auto__){
return cljs.core._write.call(null,writer__5175__auto__,"cljs.core/TransientHashSet");
});
cljs.core.TransientHashSet.prototype.call = (function() {
var G__12769 = null;
var G__12769__2 = (function (this_sym12755,k){
var this__12757 = this;
var this_sym12755__12758 = this;
var tcoll__12759 = this_sym12755__12758;
if((cljs.core._lookup.call(null,this__12757.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return null;
} else
{return k;
}
});
var G__12769__3 = (function (this_sym12756,k,not_found){
var this__12757 = this;
var this_sym12756__12760 = this;
var tcoll__12761 = this_sym12756__12760;
if((cljs.core._lookup.call(null,this__12757.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return k;
}
});
G__12769 = function(this_sym12756,k,not_found){
switch(arguments.length){
case 2:
return G__12769__2.call(this,this_sym12756,k);
case 3:
return G__12769__3.call(this,this_sym12756,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12769;
})()
;
cljs.core.TransientHashSet.prototype.apply = (function (this_sym12753,args12754){
var this__12762 = this;
return this_sym12753.call.apply(this_sym12753,[this_sym12753].concat(args12754.slice()));
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,v){
var this__12763 = this;
return tcoll.cljs$core$ILookup$_lookup$arity$3(tcoll,v,null);
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,v,not_found){
var this__12764 = this;
if((cljs.core._lookup.call(null,this__12764.transient_map,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return v;
}
});
cljs.core.TransientHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var this__12765 = this;
return cljs.core.count.call(null,this__12765.transient_map);
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientSet$_disjoin_BANG_$arity$2 = (function (tcoll,v){
var this__12766 = this;
this__12766.transient_map = cljs.core.dissoc_BANG_.call(null,this__12766.transient_map,v);
return tcoll;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__12767 = this;
this__12767.transient_map = cljs.core.assoc_BANG_.call(null,this__12767.transient_map,o,null);
return tcoll;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__12768 = this;
return (new cljs.core.PersistentHashSet(null,cljs.core.persistent_BANG_.call(null,this__12768.transient_map),null));
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
cljs.core.PersistentTreeSet.cljs$lang$ctorPrSeq = (function (this__5174__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentTreeSet");
});
cljs.core.PersistentTreeSet.cljs$lang$ctorPrWriter = (function (this__5174__auto__,writer__5175__auto__){
return cljs.core._write.call(null,writer__5175__auto__,"cljs.core/PersistentTreeSet");
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__12772 = this;
var h__5055__auto____12773 = this__12772.__hash;
if(!((h__5055__auto____12773 == null)))
{return h__5055__auto____12773;
} else
{var h__5055__auto____12774 = cljs.core.hash_iset.call(null,coll);
this__12772.__hash = h__5055__auto____12774;
return h__5055__auto____12774;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var this__12775 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,v,null);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var this__12776 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__12776.tree_map,v)))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentTreeSet.prototype.call = (function() {
var G__12802 = null;
var G__12802__2 = (function (this_sym12777,k){
var this__12779 = this;
var this_sym12777__12780 = this;
var coll__12781 = this_sym12777__12780;
return coll__12781.cljs$core$ILookup$_lookup$arity$2(coll__12781,k);
});
var G__12802__3 = (function (this_sym12778,k,not_found){
var this__12779 = this;
var this_sym12778__12782 = this;
var coll__12783 = this_sym12778__12782;
return coll__12783.cljs$core$ILookup$_lookup$arity$3(coll__12783,k,not_found);
});
G__12802 = function(this_sym12778,k,not_found){
switch(arguments.length){
case 2:
return G__12802__2.call(this,this_sym12778,k);
case 3:
return G__12802__3.call(this,this_sym12778,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12802;
})()
;
cljs.core.PersistentTreeSet.prototype.apply = (function (this_sym12770,args12771){
var this__12784 = this;
return this_sym12770.call.apply(this_sym12770,[this_sym12770].concat(args12771.slice()));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__12785 = this;
return (new cljs.core.PersistentTreeSet(this__12785.meta,cljs.core.assoc.call(null,this__12785.tree_map,o,null),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__12786 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core.rseq.call(null,this__12786.tree_map));
});
cljs.core.PersistentTreeSet.prototype.toString = (function (){
var this__12787 = this;
var this__12788 = this;
return cljs.core.pr_str.call(null,this__12788);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (coll,ascending_QMARK_){
var this__12789 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core._sorted_seq.call(null,this__12789.tree_map,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var this__12790 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core._sorted_seq_from.call(null,this__12790.tree_map,k,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (coll,entry){
var this__12791 = this;
return entry;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var this__12792 = this;
return cljs.core._comparator.call(null,this__12792.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__12793 = this;
return cljs.core.keys.call(null,this__12793.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var this__12794 = this;
return (new cljs.core.PersistentTreeSet(this__12794.meta,cljs.core.dissoc.call(null,this__12794.tree_map,v),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__12795 = this;
return cljs.core.count.call(null,this__12795.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__12796 = this;
var and__3822__auto____12797 = cljs.core.set_QMARK_.call(null,other);
if(and__3822__auto____12797)
{var and__3822__auto____12798 = (cljs.core.count.call(null,coll) === cljs.core.count.call(null,other));
if(and__3822__auto____12798)
{return cljs.core.every_QMARK_.call(null,(function (p1__12752_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__12752_SHARP_);
}),other);
} else
{return and__3822__auto____12798;
}
} else
{return and__3822__auto____12797;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__12799 = this;
return (new cljs.core.PersistentTreeSet(meta,this__12799.tree_map,this__12799.__hash));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__12800 = this;
return this__12800.meta;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__12801 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentTreeSet.EMPTY,this__12801.meta);
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
var G__12807__delegate = function (keys){
var in__12805 = cljs.core.seq.call(null,keys);
var out__12806 = cljs.core.transient$.call(null,cljs.core.PersistentHashSet.EMPTY);
while(true){
if(cljs.core.seq.call(null,in__12805))
{{
var G__12808 = cljs.core.next.call(null,in__12805);
var G__12809 = cljs.core.conj_BANG_.call(null,out__12806,cljs.core.first.call(null,in__12805));
in__12805 = G__12808;
out__12806 = G__12809;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__12806);
}
break;
}
};
var G__12807 = function (var_args){
var keys = null;
if (goog.isDef(var_args)) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__12807__delegate.call(this, keys);
};
G__12807.cljs$lang$maxFixedArity = 0;
G__12807.cljs$lang$applyTo = (function (arglist__12810){
var keys = cljs.core.seq(arglist__12810);;
return G__12807__delegate(keys);
});
G__12807.cljs$lang$arity$variadic = G__12807__delegate;
return G__12807;
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
sorted_set.cljs$lang$applyTo = (function (arglist__12811){
var keys = cljs.core.seq(arglist__12811);;
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
sorted_set_by.cljs$lang$applyTo = (function (arglist__12813){
var comparator = cljs.core.first(arglist__12813);
var keys = cljs.core.rest(arglist__12813);
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
{var n__12819 = cljs.core.count.call(null,coll);
return cljs.core.reduce.call(null,(function (v,i){
var temp__3971__auto____12820 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));
if(cljs.core.truth_(temp__3971__auto____12820))
{var e__12821 = temp__3971__auto____12820;
return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__12821));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__12819,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__12812_SHARP_){
var temp__3971__auto____12822 = cljs.core.find.call(null,smap,p1__12812_SHARP_);
if(cljs.core.truth_(temp__3971__auto____12822))
{var e__12823 = temp__3971__auto____12822;
return cljs.core.second.call(null,e__12823);
} else
{return p1__12812_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__12853 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__12846,seen){
while(true){
var vec__12847__12848 = p__12846;
var f__12849 = cljs.core.nth.call(null,vec__12847__12848,0,null);
var xs__12850 = vec__12847__12848;
var temp__3974__auto____12851 = cljs.core.seq.call(null,xs__12850);
if(temp__3974__auto____12851)
{var s__12852 = temp__3974__auto____12851;
if(cljs.core.contains_QMARK_.call(null,seen,f__12849))
{{
var G__12854 = cljs.core.rest.call(null,s__12852);
var G__12855 = seen;
p__12846 = G__12854;
seen = G__12855;
continue;
}
} else
{return cljs.core.cons.call(null,f__12849,step.call(null,cljs.core.rest.call(null,s__12852),cljs.core.conj.call(null,seen,f__12849)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
}),null));
});
return step__12853.call(null,coll,cljs.core.PersistentHashSet.EMPTY);
});
cljs.core.butlast = (function butlast(s){
var ret__12858 = cljs.core.PersistentVector.EMPTY;
var s__12859 = s;
while(true){
if(cljs.core.next.call(null,s__12859))
{{
var G__12860 = cljs.core.conj.call(null,ret__12858,cljs.core.first.call(null,s__12859));
var G__12861 = cljs.core.next.call(null,s__12859);
ret__12858 = G__12860;
s__12859 = G__12861;
continue;
}
} else
{return cljs.core.seq.call(null,ret__12858);
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
{if((function (){var or__3824__auto____12864 = cljs.core.keyword_QMARK_.call(null,x);
if(or__3824__auto____12864)
{return or__3824__auto____12864;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{var i__12865 = x.lastIndexOf("/");
if((i__12865 < 0))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__12865 + 1));
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
if((function (){var or__3824__auto____12868 = cljs.core.keyword_QMARK_.call(null,x);
if(or__3824__auto____12868)
{return or__3824__auto____12868;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{var i__12869 = x.lastIndexOf("/");
if((i__12869 > -1))
{return cljs.core.subs.call(null,x,2,i__12869);
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
var map__12876 = cljs.core.ObjMap.EMPTY;
var ks__12877 = cljs.core.seq.call(null,keys);
var vs__12878 = cljs.core.seq.call(null,vals);
while(true){
if((function (){var and__3822__auto____12879 = ks__12877;
if(and__3822__auto____12879)
{return vs__12878;
} else
{return and__3822__auto____12879;
}
})())
{{
var G__12880 = cljs.core.assoc.call(null,map__12876,cljs.core.first.call(null,ks__12877),cljs.core.first.call(null,vs__12878));
var G__12881 = cljs.core.next.call(null,ks__12877);
var G__12882 = cljs.core.next.call(null,vs__12878);
map__12876 = G__12880;
ks__12877 = G__12881;
vs__12878 = G__12882;
continue;
}
} else
{return map__12876;
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
var G__12885__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__12870_SHARP_,p2__12871_SHARP_){
return max_key.call(null,k,p1__12870_SHARP_,p2__12871_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__12885 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12885__delegate.call(this, k, x, y, more);
};
G__12885.cljs$lang$maxFixedArity = 3;
G__12885.cljs$lang$applyTo = (function (arglist__12886){
var k = cljs.core.first(arglist__12886);
var x = cljs.core.first(cljs.core.next(arglist__12886));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12886)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12886)));
return G__12885__delegate(k, x, y, more);
});
G__12885.cljs$lang$arity$variadic = G__12885__delegate;
return G__12885;
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
var G__12887__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__12883_SHARP_,p2__12884_SHARP_){
return min_key.call(null,k,p1__12883_SHARP_,p2__12884_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__12887 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12887__delegate.call(this, k, x, y, more);
};
G__12887.cljs$lang$maxFixedArity = 3;
G__12887.cljs$lang$applyTo = (function (arglist__12888){
var k = cljs.core.first(arglist__12888);
var x = cljs.core.first(cljs.core.next(arglist__12888));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12888)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12888)));
return G__12887__delegate(k, x, y, more);
});
G__12887.cljs$lang$arity$variadic = G__12887__delegate;
return G__12887;
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
var temp__3974__auto____12891 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____12891)
{var s__12892 = temp__3974__auto____12891;
return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__12892),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__12892)));
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
var temp__3974__auto____12895 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____12895)
{var s__12896 = temp__3974__auto____12895;
if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__12896))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__12896),take_while.call(null,pred,cljs.core.rest.call(null,s__12896)));
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
var comp__12898 = cljs.core._comparator.call(null,sc);
return test.call(null,comp__12898.call(null,cljs.core._entry_key.call(null,sc,e),key),0);
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
var include__12910 = cljs.core.mk_bound_fn.call(null,sc,test,key);
if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([cljs.core._GT_,cljs.core._GT__EQ_]).call(null,test)))
{var temp__3974__auto____12911 = cljs.core._sorted_seq_from.call(null,sc,key,true);
if(cljs.core.truth_(temp__3974__auto____12911))
{var vec__12912__12913 = temp__3974__auto____12911;
var e__12914 = cljs.core.nth.call(null,vec__12912__12913,0,null);
var s__12915 = vec__12912__12913;
if(cljs.core.truth_(include__12910.call(null,e__12914)))
{return s__12915;
} else
{return cljs.core.next.call(null,s__12915);
}
} else
{return null;
}
} else
{return cljs.core.take_while.call(null,include__12910,cljs.core._sorted_seq.call(null,sc,true));
}
});
var subseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__3974__auto____12916 = cljs.core._sorted_seq_from.call(null,sc,start_key,true);
if(cljs.core.truth_(temp__3974__auto____12916))
{var vec__12917__12918 = temp__3974__auto____12916;
var e__12919 = cljs.core.nth.call(null,vec__12917__12918,0,null);
var s__12920 = vec__12917__12918;
return cljs.core.take_while.call(null,cljs.core.mk_bound_fn.call(null,sc,end_test,end_key),(cljs.core.truth_(cljs.core.mk_bound_fn.call(null,sc,start_test,start_key).call(null,e__12919))?s__12920:cljs.core.next.call(null,s__12920)));
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
var include__12932 = cljs.core.mk_bound_fn.call(null,sc,test,key);
if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([cljs.core._LT_,cljs.core._LT__EQ_]).call(null,test)))
{var temp__3974__auto____12933 = cljs.core._sorted_seq_from.call(null,sc,key,false);
if(cljs.core.truth_(temp__3974__auto____12933))
{var vec__12934__12935 = temp__3974__auto____12933;
var e__12936 = cljs.core.nth.call(null,vec__12934__12935,0,null);
var s__12937 = vec__12934__12935;
if(cljs.core.truth_(include__12932.call(null,e__12936)))
{return s__12937;
} else
{return cljs.core.next.call(null,s__12937);
}
} else
{return null;
}
} else
{return cljs.core.take_while.call(null,include__12932,cljs.core._sorted_seq.call(null,sc,false));
}
});
var rsubseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__3974__auto____12938 = cljs.core._sorted_seq_from.call(null,sc,end_key,false);
if(cljs.core.truth_(temp__3974__auto____12938))
{var vec__12939__12940 = temp__3974__auto____12938;
var e__12941 = cljs.core.nth.call(null,vec__12939__12940,0,null);
var s__12942 = vec__12939__12940;
return cljs.core.take_while.call(null,cljs.core.mk_bound_fn.call(null,sc,start_test,start_key),(cljs.core.truth_(cljs.core.mk_bound_fn.call(null,sc,end_test,end_key).call(null,e__12941))?s__12942:cljs.core.next.call(null,s__12942)));
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
cljs.core.Range.cljs$lang$ctorPrSeq = (function (this__5174__auto__){
return cljs.core.list.call(null,"cljs.core/Range");
});
cljs.core.Range.cljs$lang$ctorPrWriter = (function (this__5174__auto__,writer__5175__auto__){
return cljs.core._write.call(null,writer__5175__auto__,"cljs.core/Range");
});
cljs.core.Range.prototype.cljs$core$IHash$_hash$arity$1 = (function (rng){
var this__12943 = this;
var h__5055__auto____12944 = this__12943.__hash;
if(!((h__5055__auto____12944 == null)))
{return h__5055__auto____12944;
} else
{var h__5055__auto____12945 = cljs.core.hash_coll.call(null,rng);
this__12943.__hash = h__5055__auto____12945;
return h__5055__auto____12945;
}
});
cljs.core.Range.prototype.cljs$core$INext$_next$arity$1 = (function (rng){
var this__12946 = this;
if((this__12946.step > 0))
{if(((this__12946.start + this__12946.step) < this__12946.end))
{return (new cljs.core.Range(this__12946.meta,(this__12946.start + this__12946.step),this__12946.end,this__12946.step,null));
} else
{return null;
}
} else
{if(((this__12946.start + this__12946.step) > this__12946.end))
{return (new cljs.core.Range(this__12946.meta,(this__12946.start + this__12946.step),this__12946.end,this__12946.step,null));
} else
{return null;
}
}
});
cljs.core.Range.prototype.cljs$core$ICollection$_conj$arity$2 = (function (rng,o){
var this__12947 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.toString = (function (){
var this__12948 = this;
var this__12949 = this;
return cljs.core.pr_str.call(null,this__12949);
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (rng,f){
var this__12950 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (rng,f,s){
var this__12951 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
cljs.core.Range.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (rng){
var this__12952 = this;
if((this__12952.step > 0))
{if((this__12952.start < this__12952.end))
{return rng;
} else
{return null;
}
} else
{if((this__12952.start > this__12952.end))
{return rng;
} else
{return null;
}
}
});
cljs.core.Range.prototype.cljs$core$ICounted$_count$arity$1 = (function (rng){
var this__12953 = this;
if(cljs.core.not.call(null,rng.cljs$core$ISeqable$_seq$arity$1(rng)))
{return 0;
} else
{return Math.ceil(((this__12953.end - this__12953.start) / this__12953.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$_first$arity$1 = (function (rng){
var this__12954 = this;
return this__12954.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest$arity$1 = (function (rng){
var this__12955 = this;
if(!((rng.cljs$core$ISeqable$_seq$arity$1(rng) == null)))
{return (new cljs.core.Range(this__12955.meta,(this__12955.start + this__12955.step),this__12955.end,this__12955.step,null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (rng,other){
var this__12956 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (rng,meta){
var this__12957 = this;
return (new cljs.core.Range(meta,this__12957.start,this__12957.end,this__12957.step,this__12957.__hash));
});
cljs.core.Range.prototype.cljs$core$IMeta$_meta$arity$1 = (function (rng){
var this__12958 = this;
return this__12958.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (rng,n){
var this__12959 = this;
if((n < rng.cljs$core$ICounted$_count$arity$1(rng)))
{return (this__12959.start + (n * this__12959.step));
} else
{if((function (){var and__3822__auto____12960 = (this__12959.start > this__12959.end);
if(and__3822__auto____12960)
{return (this__12959.step === 0);
} else
{return and__3822__auto____12960;
}
})())
{return this__12959.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (rng,n,not_found){
var this__12961 = this;
if((n < rng.cljs$core$ICounted$_count$arity$1(rng)))
{return (this__12961.start + (n * this__12961.step));
} else
{if((function (){var and__3822__auto____12962 = (this__12961.start > this__12961.end);
if(and__3822__auto____12962)
{return (this__12961.step === 0);
} else
{return and__3822__auto____12962;
}
})())
{return this__12961.start;
} else
{return not_found;
}
}
});
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (rng){
var this__12963 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__12963.meta);
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
var temp__3974__auto____12966 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____12966)
{var s__12967 = temp__3974__auto____12966;
return cljs.core.cons.call(null,cljs.core.first.call(null,s__12967),take_nth.call(null,n,cljs.core.drop.call(null,n,s__12967)));
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
var temp__3974__auto____12974 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____12974)
{var s__12975 = temp__3974__auto____12974;
var fst__12976 = cljs.core.first.call(null,s__12975);
var fv__12977 = f.call(null,fst__12976);
var run__12978 = cljs.core.cons.call(null,fst__12976,cljs.core.take_while.call(null,(function (p1__12968_SHARP_){
return cljs.core._EQ_.call(null,fv__12977,f.call(null,p1__12968_SHARP_));
}),cljs.core.next.call(null,s__12975)));
return cljs.core.cons.call(null,run__12978,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__12978),s__12975))));
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
var temp__3971__auto____12993 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____12993)
{var s__12994 = temp__3971__auto____12993;
return reductions.call(null,f,cljs.core.first.call(null,s__12994),cljs.core.rest.call(null,s__12994));
} else
{return cljs.core.list.call(null,f.call(null));
}
}),null));
});
var reductions__3 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____12995 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____12995)
{var s__12996 = temp__3974__auto____12995;
return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__12996)),cljs.core.rest.call(null,s__12996));
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
var G__12999 = null;
var G__12999__0 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__12999__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__12999__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__12999__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__12999__4 = (function() { 
var G__13000__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__13000 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13000__delegate.call(this, x, y, z, args);
};
G__13000.cljs$lang$maxFixedArity = 3;
G__13000.cljs$lang$applyTo = (function (arglist__13001){
var x = cljs.core.first(arglist__13001);
var y = cljs.core.first(cljs.core.next(arglist__13001));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13001)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13001)));
return G__13000__delegate(x, y, z, args);
});
G__13000.cljs$lang$arity$variadic = G__13000__delegate;
return G__13000;
})()
;
G__12999 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__12999__0.call(this);
case 1:
return G__12999__1.call(this,x);
case 2:
return G__12999__2.call(this,x,y);
case 3:
return G__12999__3.call(this,x,y,z);
default:
return G__12999__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__12999.cljs$lang$maxFixedArity = 3;
G__12999.cljs$lang$applyTo = G__12999__4.cljs$lang$applyTo;
return G__12999;
})()
});
var juxt__2 = (function (f,g){
return (function() {
var G__13002 = null;
var G__13002__0 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__13002__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__13002__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__13002__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__13002__4 = (function() { 
var G__13003__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__13003 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13003__delegate.call(this, x, y, z, args);
};
G__13003.cljs$lang$maxFixedArity = 3;
G__13003.cljs$lang$applyTo = (function (arglist__13004){
var x = cljs.core.first(arglist__13004);
var y = cljs.core.first(cljs.core.next(arglist__13004));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13004)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13004)));
return G__13003__delegate(x, y, z, args);
});
G__13003.cljs$lang$arity$variadic = G__13003__delegate;
return G__13003;
})()
;
G__13002 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__13002__0.call(this);
case 1:
return G__13002__1.call(this,x);
case 2:
return G__13002__2.call(this,x,y);
case 3:
return G__13002__3.call(this,x,y,z);
default:
return G__13002__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__13002.cljs$lang$maxFixedArity = 3;
G__13002.cljs$lang$applyTo = G__13002__4.cljs$lang$applyTo;
return G__13002;
})()
});
var juxt__3 = (function (f,g,h){
return (function() {
var G__13005 = null;
var G__13005__0 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__13005__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__13005__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__13005__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__13005__4 = (function() { 
var G__13006__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__13006 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13006__delegate.call(this, x, y, z, args);
};
G__13006.cljs$lang$maxFixedArity = 3;
G__13006.cljs$lang$applyTo = (function (arglist__13007){
var x = cljs.core.first(arglist__13007);
var y = cljs.core.first(cljs.core.next(arglist__13007));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13007)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13007)));
return G__13006__delegate(x, y, z, args);
});
G__13006.cljs$lang$arity$variadic = G__13006__delegate;
return G__13006;
})()
;
G__13005 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__13005__0.call(this);
case 1:
return G__13005__1.call(this,x);
case 2:
return G__13005__2.call(this,x,y);
case 3:
return G__13005__3.call(this,x,y,z);
default:
return G__13005__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__13005.cljs$lang$maxFixedArity = 3;
G__13005.cljs$lang$applyTo = G__13005__4.cljs$lang$applyTo;
return G__13005;
})()
});
var juxt__4 = (function() { 
var G__13008__delegate = function (f,g,h,fs){
var fs__12998 = cljs.core.list_STAR_.call(null,f,g,h,fs);
return (function() {
var G__13009 = null;
var G__13009__0 = (function (){
return cljs.core.reduce.call(null,(function (p1__12979_SHARP_,p2__12980_SHARP_){
return cljs.core.conj.call(null,p1__12979_SHARP_,p2__12980_SHARP_.call(null));
}),cljs.core.PersistentVector.EMPTY,fs__12998);
});
var G__13009__1 = (function (x){
return cljs.core.reduce.call(null,(function (p1__12981_SHARP_,p2__12982_SHARP_){
return cljs.core.conj.call(null,p1__12981_SHARP_,p2__12982_SHARP_.call(null,x));
}),cljs.core.PersistentVector.EMPTY,fs__12998);
});
var G__13009__2 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__12983_SHARP_,p2__12984_SHARP_){
return cljs.core.conj.call(null,p1__12983_SHARP_,p2__12984_SHARP_.call(null,x,y));
}),cljs.core.PersistentVector.EMPTY,fs__12998);
});
var G__13009__3 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__12985_SHARP_,p2__12986_SHARP_){
return cljs.core.conj.call(null,p1__12985_SHARP_,p2__12986_SHARP_.call(null,x,y,z));
}),cljs.core.PersistentVector.EMPTY,fs__12998);
});
var G__13009__4 = (function() { 
var G__13010__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__12987_SHARP_,p2__12988_SHARP_){
return cljs.core.conj.call(null,p1__12987_SHARP_,cljs.core.apply.call(null,p2__12988_SHARP_,x,y,z,args));
}),cljs.core.PersistentVector.EMPTY,fs__12998);
};
var G__13010 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13010__delegate.call(this, x, y, z, args);
};
G__13010.cljs$lang$maxFixedArity = 3;
G__13010.cljs$lang$applyTo = (function (arglist__13011){
var x = cljs.core.first(arglist__13011);
var y = cljs.core.first(cljs.core.next(arglist__13011));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13011)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13011)));
return G__13010__delegate(x, y, z, args);
});
G__13010.cljs$lang$arity$variadic = G__13010__delegate;
return G__13010;
})()
;
G__13009 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__13009__0.call(this);
case 1:
return G__13009__1.call(this,x);
case 2:
return G__13009__2.call(this,x,y);
case 3:
return G__13009__3.call(this,x,y,z);
default:
return G__13009__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__13009.cljs$lang$maxFixedArity = 3;
G__13009.cljs$lang$applyTo = G__13009__4.cljs$lang$applyTo;
return G__13009;
})()
};
var G__13008 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13008__delegate.call(this, f, g, h, fs);
};
G__13008.cljs$lang$maxFixedArity = 3;
G__13008.cljs$lang$applyTo = (function (arglist__13012){
var f = cljs.core.first(arglist__13012);
var g = cljs.core.first(cljs.core.next(arglist__13012));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13012)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13012)));
return G__13008__delegate(f, g, h, fs);
});
G__13008.cljs$lang$arity$variadic = G__13008__delegate;
return G__13008;
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
var G__13015 = cljs.core.next.call(null,coll);
coll = G__13015;
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
if(cljs.core.truth_((function (){var and__3822__auto____13014 = cljs.core.seq.call(null,coll);
if(and__3822__auto____13014)
{return (n > 0);
} else
{return and__3822__auto____13014;
}
})()))
{{
var G__13016 = (n - 1);
var G__13017 = cljs.core.next.call(null,coll);
n = G__13016;
coll = G__13017;
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
var matches__13019 = re.exec(s);
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__13019),s))
{if((cljs.core.count.call(null,matches__13019) === 1))
{return cljs.core.first.call(null,matches__13019);
} else
{return cljs.core.vec.call(null,matches__13019);
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
var matches__13021 = re.exec(s);
if((matches__13021 == null))
{return null;
} else
{if((cljs.core.count.call(null,matches__13021) === 1))
{return cljs.core.first.call(null,matches__13021);
} else
{return cljs.core.vec.call(null,matches__13021);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__13026 = cljs.core.re_find.call(null,re,s);
var match_idx__13027 = s.search(re);
var match_str__13028 = ((cljs.core.coll_QMARK_.call(null,match_data__13026))?cljs.core.first.call(null,match_data__13026):match_data__13026);
var post_match__13029 = cljs.core.subs.call(null,s,(match_idx__13027 + cljs.core.count.call(null,match_str__13028)));
if(cljs.core.truth_(match_data__13026))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__13026,re_seq.call(null,re,post_match__13029));
}),null));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
var vec__13036__13037 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,s);
var ___13038 = cljs.core.nth.call(null,vec__13036__13037,0,null);
var flags__13039 = cljs.core.nth.call(null,vec__13036__13037,1,null);
var pattern__13040 = cljs.core.nth.call(null,vec__13036__13037,2,null);
return (new RegExp(pattern__13040,flags__13039));
});
/**
* Do not use this.  It is kept for backwards compatibility with the
* old IPrintable protocol.
*/
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([begin], true),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.PersistentVector.fromArray([sep], true),cljs.core.map.call(null,(function (p1__13030_SHARP_){
return print_one.call(null,p1__13030_SHARP_,opts);
}),coll))),cljs.core.PersistentVector.fromArray([end], true));
});
cljs.core.pr_sequential_writer = (function pr_sequential_writer(writer,print_one,begin,sep,end,opts,coll){
cljs.core._write.call(null,writer,begin);
if(cljs.core.seq.call(null,coll))
{print_one.call(null,cljs.core.first.call(null,coll),writer,opts);
} else
{}
var G__13044__13045 = cljs.core.seq.call(null,cljs.core.next.call(null,coll));
while(true){
if(G__13044__13045)
{var o__13046 = cljs.core.first.call(null,G__13044__13045);
cljs.core._write.call(null,writer,sep);
print_one.call(null,o__13046,writer,opts);
{
var G__13047 = cljs.core.next.call(null,G__13044__13045);
G__13044__13045 = G__13047;
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
var G__13051__13052 = cljs.core.seq.call(null,ss);
while(true){
if(G__13051__13052)
{var s__13053 = cljs.core.first.call(null,G__13051__13052);
cljs.core._write.call(null,writer,s__13053);
{
var G__13054 = cljs.core.next.call(null,G__13051__13052);
G__13051__13052 = G__13054;
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
write_all.cljs$lang$applyTo = (function (arglist__13055){
var writer = cljs.core.first(arglist__13055);
var ss = cljs.core.rest(arglist__13055);
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
cljs.core.StringBufferWriter.cljs$lang$ctorPrSeq = (function (this__5174__auto__){
return cljs.core.list.call(null,"cljs.core/StringBufferWriter");
});
cljs.core.StringBufferWriter.cljs$lang$ctorPrWriter = (function (this__5174__auto__,writer__5175__auto__){
return cljs.core._write.call(null,writer__5175__auto__,"cljs.core/StringBufferWriter");
});
cljs.core.StringBufferWriter.prototype.cljs$core$IWriter$_write$arity$2 = (function (_,s){
var this__13056 = this;
return this__13056.sb.append(s);
});
cljs.core.StringBufferWriter.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
var this__13057 = this;
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3822__auto____13067 = cljs.core._lookup.call(null,opts,"\uFDD0'meta",null);
if(cljs.core.truth_(and__3822__auto____13067))
{var and__3822__auto____13071 = (function (){var G__13068__13069 = obj;
if(G__13068__13069)
{if((function (){var or__3824__auto____13070 = (G__13068__13069.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3824__auto____13070)
{return or__3824__auto____13070;
} else
{return G__13068__13069.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__13068__13069.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__13068__13069);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__13068__13069);
}
})();
if(cljs.core.truth_(and__3822__auto____13071))
{return cljs.core.meta.call(null,obj);
} else
{return and__3822__auto____13071;
}
} else
{return and__3822__auto____13067;
}
})())?cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["^"], true),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.PersistentVector.fromArray([" "], true)):null),(((function (){var and__3822__auto____13072 = !((obj == null));
if(and__3822__auto____13072)
{return obj.cljs$lang$type;
} else
{return and__3822__auto____13072;
}
})())?obj.cljs$lang$ctorPrSeq(obj):(((function (){var G__13073__13074 = obj;
if(G__13073__13074)
{if((function (){var or__3824__auto____13075 = (G__13073__13074.cljs$lang$protocol_mask$partition0$ & 536870912);
if(or__3824__auto____13075)
{return or__3824__auto____13075;
} else
{return G__13073__13074.cljs$core$IPrintable$;
}
})())
{return true;
} else
{if((!G__13073__13074.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__13073__13074);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__13073__13074);
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
{if(cljs.core.truth_((function (){var and__3822__auto____13088 = cljs.core._lookup.call(null,opts,"\uFDD0'meta",null);
if(cljs.core.truth_(and__3822__auto____13088))
{var and__3822__auto____13092 = (function (){var G__13089__13090 = obj;
if(G__13089__13090)
{if((function (){var or__3824__auto____13091 = (G__13089__13090.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3824__auto____13091)
{return or__3824__auto____13091;
} else
{return G__13089__13090.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__13089__13090.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__13089__13090);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__13089__13090);
}
})();
if(cljs.core.truth_(and__3822__auto____13092))
{return cljs.core.meta.call(null,obj);
} else
{return and__3822__auto____13092;
}
} else
{return and__3822__auto____13088;
}
})()))
{cljs.core._write.call(null,writer,"^");
pr_writer.call(null,cljs.core.meta.call(null,obj),writer,opts);
cljs.core._write.call(null,writer," ");
} else
{}
if((function (){var and__3822__auto____13093 = !((obj == null));
if(and__3822__auto____13093)
{return obj.cljs$lang$type;
} else
{return and__3822__auto____13093;
}
})())
{return obj.cljs$lang$ctorPrWriter(writer,opts);
} else
{if((function (){var G__13094__13095 = obj;
if(G__13094__13095)
{if((function (){var or__3824__auto____13096 = (G__13094__13095.cljs$lang$protocol_mask$partition0$ & 2147483648);
if(or__3824__auto____13096)
{return or__3824__auto____13096;
} else
{return G__13094__13095.cljs$core$IPrintWithWriter$;
}
})())
{return true;
} else
{if((!G__13094__13095.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintWithWriter,G__13094__13095);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintWithWriter,G__13094__13095);
}
})())
{return cljs.core._pr_writer.call(null,obj,writer,opts);
} else
{if((function (){var G__13097__13098 = obj;
if(G__13097__13098)
{if((function (){var or__3824__auto____13099 = (G__13097__13098.cljs$lang$protocol_mask$partition0$ & 536870912);
if(or__3824__auto____13099)
{return or__3824__auto____13099;
} else
{return G__13097__13098.cljs$core$IPrintable$;
}
})())
{return true;
} else
{if((!G__13097__13098.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__13097__13098);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__13097__13098);
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
var G__13103__13104 = cljs.core.seq.call(null,cljs.core.next.call(null,objs));
while(true){
if(G__13103__13104)
{var obj__13105 = cljs.core.first.call(null,G__13103__13104);
cljs.core._write.call(null,writer," ");
cljs.core.pr_writer.call(null,obj__13105,writer,opts);
{
var G__13106 = cljs.core.next.call(null,G__13103__13104);
G__13103__13104 = G__13106;
continue;
}
} else
{return null;
}
break;
}
});
cljs.core.pr_sb_with_opts = (function pr_sb_with_opts(objs,opts){
var sb__13109 = (new goog.string.StringBuffer());
var writer__13110 = (new cljs.core.StringBufferWriter(sb__13109));
cljs.core.pr_seq_writer.call(null,objs,writer__13110,opts);
cljs.core._flush.call(null,writer__13110);
return sb__13109;
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
{var sb__13112 = cljs.core.pr_sb_with_opts.call(null,objs,opts);
sb__13112.append("\n");
return [cljs.core.str(sb__13112)].join('');
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
pr_str.cljs$lang$applyTo = (function (arglist__13113){
var objs = cljs.core.seq(arglist__13113);;
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
prn_str.cljs$lang$applyTo = (function (arglist__13114){
var objs = cljs.core.seq(arglist__13114);;
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
pr.cljs$lang$applyTo = (function (arglist__13115){
var objs = cljs.core.seq(arglist__13115);;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__13116){
var objs = cljs.core.seq(arglist__13116);;
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
print_str.cljs$lang$applyTo = (function (arglist__13117){
var objs = cljs.core.seq(arglist__13117);;
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
println.cljs$lang$applyTo = (function (arglist__13118){
var objs = cljs.core.seq(arglist__13118);;
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
println_str.cljs$lang$applyTo = (function (arglist__13119){
var objs = cljs.core.seq(arglist__13119);;
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
prn.cljs$lang$applyTo = (function (arglist__13120){
var objs = cljs.core.seq(arglist__13120);;
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
printf.cljs$lang$applyTo = (function (arglist__13121){
var fmt = cljs.core.first(arglist__13121);
var args = cljs.core.rest(arglist__13121);
return printf__delegate(fmt, args);
});
printf.cljs$lang$arity$variadic = printf__delegate;
return printf;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__13122 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__13122,"{",", ","}",opts,coll);
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
var pr_pair__13123 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__13123,"{",", ","}",opts,coll);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__13124 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__13124,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,[cljs.core.str(":"),cljs.core.str((function (){var temp__3974__auto____13125 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3974__auto____13125))
{var nspc__13126 = temp__3974__auto____13125;
return [cljs.core.str(nspc__13126),cljs.core.str("/")].join('');
} else
{return null;
}
})()),cljs.core.str(cljs.core.name.call(null,obj))].join(''));
} else
{if(cljs.core.symbol_QMARK_.call(null,obj))
{return cljs.core.list.call(null,[cljs.core.str((function (){var temp__3974__auto____13127 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3974__auto____13127))
{var nspc__13128 = temp__3974__auto____13127;
return [cljs.core.str(nspc__13128),cljs.core.str("/")].join('');
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
var pr_pair__13129 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__13129,"{",", ","}",opts,coll);
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
var normalize__13131 = (function (n,len){
var ns__13130 = [cljs.core.str(n)].join('');
while(true){
if((cljs.core.count.call(null,ns__13130) < len))
{{
var G__13133 = [cljs.core.str("0"),cljs.core.str(ns__13130)].join('');
ns__13130 = G__13133;
continue;
}
} else
{return ns__13130;
}
break;
}
});
return cljs.core.list.call(null,[cljs.core.str("#inst \""),cljs.core.str(d.getUTCFullYear()),cljs.core.str("-"),cljs.core.str(normalize__13131.call(null,(d.getUTCMonth() + 1),2)),cljs.core.str("-"),cljs.core.str(normalize__13131.call(null,d.getUTCDate(),2)),cljs.core.str("T"),cljs.core.str(normalize__13131.call(null,d.getUTCHours(),2)),cljs.core.str(":"),cljs.core.str(normalize__13131.call(null,d.getUTCMinutes(),2)),cljs.core.str(":"),cljs.core.str(normalize__13131.call(null,d.getUTCSeconds(),2)),cljs.core.str("."),cljs.core.str(normalize__13131.call(null,d.getUTCMilliseconds(),3)),cljs.core.str("-"),cljs.core.str("00:00\"")].join(''));
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
var pr_pair__13132 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__13132,"{",", ","}",opts,coll);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.HashMap.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var pr_pair__13134 = (function (keyval){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,""," ","",opts,keyval);
});
return cljs.core.pr_sequential_writer.call(null,writer,pr_pair__13134,"{",", ","}",opts,coll);
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
var pr_pair__13135 = (function (keyval){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,""," ","",opts,keyval);
});
return cljs.core.pr_sequential_writer.call(null,writer,pr_pair__13135,"{",", ","}",opts,coll);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var pr_pair__13136 = (function (keyval){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,""," ","",opts,keyval);
});
return cljs.core.pr_sequential_writer.call(null,writer,pr_pair__13136,"{",", ","}",opts,coll);
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
var temp__3974__auto____13137 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3974__auto____13137))
{var nspc__13138 = temp__3974__auto____13137;
cljs.core.write_all.call(null,writer,[cljs.core.str(nspc__13138)].join(''),"/");
} else
{}
return cljs.core._write.call(null,writer,cljs.core.name.call(null,obj));
} else
{if(cljs.core.symbol_QMARK_.call(null,obj))
{var temp__3974__auto____13139 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3974__auto____13139))
{var nspc__13140 = temp__3974__auto____13139;
cljs.core.write_all.call(null,writer,[cljs.core.str(nspc__13140)].join(''),"/");
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
var pr_pair__13141 = (function (keyval){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,""," ","",opts,keyval);
});
return cljs.core.pr_sequential_writer.call(null,writer,pr_pair__13141,"{",", ","}",opts,coll);
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
var normalize__13143 = (function (n,len){
var ns__13142 = [cljs.core.str(n)].join('');
while(true){
if((cljs.core.count.call(null,ns__13142) < len))
{{
var G__13145 = [cljs.core.str("0"),cljs.core.str(ns__13142)].join('');
ns__13142 = G__13145;
continue;
}
} else
{return ns__13142;
}
break;
}
});
return cljs.core.write_all.call(null,writer,"#inst \"",[cljs.core.str(d.getUTCFullYear())].join(''),"-",normalize__13143.call(null,(d.getUTCMonth() + 1),2),"-",normalize__13143.call(null,d.getUTCDate(),2),"T",normalize__13143.call(null,d.getUTCHours(),2),":",normalize__13143.call(null,d.getUTCMinutes(),2),":",normalize__13143.call(null,d.getUTCSeconds(),2),".",normalize__13143.call(null,d.getUTCMilliseconds(),3),"-","00:00\"");
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
var pr_pair__13144 = (function (keyval){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,""," ","",opts,keyval);
});
return cljs.core.pr_sequential_writer.call(null,writer,pr_pair__13144,"{",", ","}",opts,coll);
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
cljs.core.Atom.cljs$lang$ctorPrSeq = (function (this__5174__auto__){
return cljs.core.list.call(null,"cljs.core/Atom");
});
cljs.core.Atom.cljs$lang$ctorPrWriter = (function (this__5174__auto__,writer__5175__auto__){
return cljs.core._write.call(null,writer__5175__auto__,"cljs.core/Atom");
});
cljs.core.Atom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this__13146 = this;
return goog.getUid(this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var this__13147 = this;
var G__13148__13149 = cljs.core.seq.call(null,this__13147.watches);
while(true){
if(G__13148__13149)
{var vec__13150__13151 = cljs.core.first.call(null,G__13148__13149);
var key__13152 = cljs.core.nth.call(null,vec__13150__13151,0,null);
var f__13153 = cljs.core.nth.call(null,vec__13150__13151,1,null);
f__13153.call(null,key__13152,this$,oldval,newval);
{
var G__13161 = cljs.core.next.call(null,G__13148__13149);
G__13148__13149 = G__13161;
continue;
}
} else
{return null;
}
break;
}
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var this__13154 = this;
return this$.watches = cljs.core.assoc.call(null,this__13154.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var this__13155 = this;
return this$.watches = cljs.core.dissoc.call(null,this__13155.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,writer,opts){
var this__13156 = this;
cljs.core._write.call(null,writer,"#<Atom: ");
cljs.core._pr_writer.call(null,this__13156.state,writer,opts);
return cljs.core._write.call(null,writer,">");
});
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (a,opts){
var this__13157 = this;
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["#<Atom: "], true),cljs.core._pr_seq.call(null,this__13157.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var this__13158 = this;
return this__13158.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var this__13159 = this;
return this__13159.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var this__13160 = this;
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
var G__13173__delegate = function (x,p__13162){
var map__13168__13169 = p__13162;
var map__13168__13170 = ((cljs.core.seq_QMARK_.call(null,map__13168__13169))?cljs.core.apply.call(null,cljs.core.hash_map,map__13168__13169):map__13168__13169);
var validator__13171 = cljs.core._lookup.call(null,map__13168__13170,"\uFDD0'validator",null);
var meta__13172 = cljs.core._lookup.call(null,map__13168__13170,"\uFDD0'meta",null);
return (new cljs.core.Atom(x,meta__13172,validator__13171,null));
};
var G__13173 = function (x,var_args){
var p__13162 = null;
if (goog.isDef(var_args)) {
  p__13162 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__13173__delegate.call(this, x, p__13162);
};
G__13173.cljs$lang$maxFixedArity = 1;
G__13173.cljs$lang$applyTo = (function (arglist__13174){
var x = cljs.core.first(arglist__13174);
var p__13162 = cljs.core.rest(arglist__13174);
return G__13173__delegate(x, p__13162);
});
G__13173.cljs$lang$arity$variadic = G__13173__delegate;
return G__13173;
})()
;
atom = function(x,var_args){
var p__13162 = var_args;
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
var temp__3974__auto____13178 = a.validator;
if(cljs.core.truth_(temp__3974__auto____13178))
{var validate__13179 = temp__3974__auto____13178;
if(cljs.core.truth_(validate__13179.call(null,new_value)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Validator rejected reference state"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'validate","\uFDD1'new-value"),cljs.core.hash_map("\uFDD0'line",6683))))].join('')));
}
} else
{}
var old_value__13180 = a.state;
a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__13180,new_value);
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
var G__13181__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__13181 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__13181__delegate.call(this, a, f, x, y, z, more);
};
G__13181.cljs$lang$maxFixedArity = 5;
G__13181.cljs$lang$applyTo = (function (arglist__13182){
var a = cljs.core.first(arglist__13182);
var f = cljs.core.first(cljs.core.next(arglist__13182));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13182)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__13182))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__13182)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__13182)))));
return G__13181__delegate(a, f, x, y, z, more);
});
G__13181.cljs$lang$arity$variadic = G__13181__delegate;
return G__13181;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__13183){
var iref = cljs.core.first(arglist__13183);
var f = cljs.core.first(cljs.core.next(arglist__13183));
var args = cljs.core.rest(cljs.core.next(arglist__13183));
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
cljs.core.Delay.cljs$lang$ctorPrSeq = (function (this__5174__auto__){
return cljs.core.list.call(null,"cljs.core/Delay");
});
cljs.core.Delay.cljs$lang$ctorPrWriter = (function (this__5174__auto__,writer__5175__auto__){
return cljs.core._write.call(null,writer__5175__auto__,"cljs.core/Delay");
});
cljs.core.Delay.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = (function (d){
var this__13184 = this;
return (new cljs.core.Keyword("\uFDD0'done")).call(null,cljs.core.deref.call(null,this__13184.state));
});
cljs.core.Delay.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var this__13185 = this;
return (new cljs.core.Keyword("\uFDD0'value")).call(null,cljs.core.swap_BANG_.call(null,this__13185.state,(function (p__13186){
var map__13187__13188 = p__13186;
var map__13187__13189 = ((cljs.core.seq_QMARK_.call(null,map__13187__13188))?cljs.core.apply.call(null,cljs.core.hash_map,map__13187__13188):map__13187__13188);
var curr_state__13190 = map__13187__13189;
var done__13191 = cljs.core._lookup.call(null,map__13187__13189,"\uFDD0'done",null);
if(cljs.core.truth_(done__13191))
{return curr_state__13190;
} else
{return cljs.core.ObjMap.fromObject(["\uFDD0'done","\uFDD0'value"],{"\uFDD0'done":true,"\uFDD0'value":this__13185.f.call(null)});
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
var map__13212__13213 = options;
var map__13212__13214 = ((cljs.core.seq_QMARK_.call(null,map__13212__13213))?cljs.core.apply.call(null,cljs.core.hash_map,map__13212__13213):map__13212__13213);
var keywordize_keys__13215 = cljs.core._lookup.call(null,map__13212__13214,"\uFDD0'keywordize-keys",null);
var keyfn__13216 = (cljs.core.truth_(keywordize_keys__13215)?cljs.core.keyword:cljs.core.str);
var f__13231 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,(function (){var iter__5336__auto____13230 = (function iter__13224(s__13225){
return (new cljs.core.LazySeq(null,false,(function (){
var s__13225__13228 = s__13225;
while(true){
if(cljs.core.seq.call(null,s__13225__13228))
{var k__13229 = cljs.core.first.call(null,s__13225__13228);
return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([keyfn__13216.call(null,k__13229),thisfn.call(null,(x[k__13229]))], true),iter__13224.call(null,cljs.core.rest.call(null,s__13225__13228)));
} else
{return null;
}
break;
}
}),null));
});
return iter__5336__auto____13230.call(null,cljs.core.js_keys.call(null,x));
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
return f__13231.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__13232){
var x = cljs.core.first(arglist__13232);
var options = cljs.core.rest(arglist__13232);
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
var mem__13237 = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
return (function() { 
var G__13241__delegate = function (args){
var temp__3971__auto____13238 = cljs.core._lookup.call(null,cljs.core.deref.call(null,mem__13237),args,null);
if(cljs.core.truth_(temp__3971__auto____13238))
{var v__13239 = temp__3971__auto____13238;
return v__13239;
} else
{var ret__13240 = cljs.core.apply.call(null,f,args);
cljs.core.swap_BANG_.call(null,mem__13237,cljs.core.assoc,args,ret__13240);
return ret__13240;
}
};
var G__13241 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__13241__delegate.call(this, args);
};
G__13241.cljs$lang$maxFixedArity = 0;
G__13241.cljs$lang$applyTo = (function (arglist__13242){
var args = cljs.core.seq(arglist__13242);;
return G__13241__delegate(args);
});
G__13241.cljs$lang$arity$variadic = G__13241__delegate;
return G__13241;
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
var ret__13244 = f.call(null);
if(cljs.core.fn_QMARK_.call(null,ret__13244))
{{
var G__13245 = ret__13244;
f = G__13245;
continue;
}
} else
{return ret__13244;
}
break;
}
});
var trampoline__2 = (function() { 
var G__13246__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__13246 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__13246__delegate.call(this, f, args);
};
G__13246.cljs$lang$maxFixedArity = 1;
G__13246.cljs$lang$applyTo = (function (arglist__13247){
var f = cljs.core.first(arglist__13247);
var args = cljs.core.rest(arglist__13247);
return G__13246__delegate(f, args);
});
G__13246.cljs$lang$arity$variadic = G__13246__delegate;
return G__13246;
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
var k__13249 = f.call(null,x);
return cljs.core.assoc.call(null,ret,k__13249,cljs.core.conj.call(null,cljs.core._lookup.call(null,ret,k__13249,cljs.core.PersistentVector.EMPTY),x));
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
var or__3824__auto____13258 = cljs.core._EQ_.call(null,child,parent);
if(or__3824__auto____13258)
{return or__3824__auto____13258;
} else
{var or__3824__auto____13259 = cljs.core.contains_QMARK_.call(null,(new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h).call(null,child),parent);
if(or__3824__auto____13259)
{return or__3824__auto____13259;
} else
{var and__3822__auto____13260 = cljs.core.vector_QMARK_.call(null,parent);
if(and__3822__auto____13260)
{var and__3822__auto____13261 = cljs.core.vector_QMARK_.call(null,child);
if(and__3822__auto____13261)
{var and__3822__auto____13262 = (cljs.core.count.call(null,parent) === cljs.core.count.call(null,child));
if(and__3822__auto____13262)
{var ret__13263 = true;
var i__13264 = 0;
while(true){
if((function (){var or__3824__auto____13265 = cljs.core.not.call(null,ret__13263);
if(or__3824__auto____13265)
{return or__3824__auto____13265;
} else
{return (i__13264 === cljs.core.count.call(null,parent));
}
})())
{return ret__13263;
} else
{{
var G__13266 = isa_QMARK_.call(null,h,child.call(null,i__13264),parent.call(null,i__13264));
var G__13267 = (i__13264 + 1);
ret__13263 = G__13266;
i__13264 = G__13267;
continue;
}
}
break;
}
} else
{return and__3822__auto____13262;
}
} else
{return and__3822__auto____13261;
}
} else
{return and__3822__auto____13260;
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
var tp__13276 = (new cljs.core.Keyword("\uFDD0'parents")).call(null,h);
var td__13277 = (new cljs.core.Keyword("\uFDD0'descendants")).call(null,h);
var ta__13278 = (new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h);
var tf__13279 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core._lookup.call(null,targets,k,cljs.core.PersistentHashSet.EMPTY),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});
var or__3824__auto____13280 = ((cljs.core.contains_QMARK_.call(null,tp__13276.call(null,tag),parent))?null:(function (){if(cljs.core.contains_QMARK_.call(null,ta__13278.call(null,tag),parent))
{throw (new Error([cljs.core.str(tag),cljs.core.str("already has"),cljs.core.str(parent),cljs.core.str("as ancestor")].join('')));
} else
{}
if(cljs.core.contains_QMARK_.call(null,ta__13278.call(null,parent),tag))
{throw (new Error([cljs.core.str("Cyclic derivation:"),cljs.core.str(parent),cljs.core.str("has"),cljs.core.str(tag),cljs.core.str("as ancestor")].join('')));
} else
{}
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'ancestors","\uFDD0'descendants"],{"\uFDD0'parents":cljs.core.assoc.call(null,(new cljs.core.Keyword("\uFDD0'parents")).call(null,h),tag,cljs.core.conj.call(null,cljs.core._lookup.call(null,tp__13276,tag,cljs.core.PersistentHashSet.EMPTY),parent)),"\uFDD0'ancestors":tf__13279.call(null,(new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h),tag,td__13277,parent,ta__13278),"\uFDD0'descendants":tf__13279.call(null,(new cljs.core.Keyword("\uFDD0'descendants")).call(null,h),parent,ta__13278,tag,td__13277)});
})());
if(cljs.core.truth_(or__3824__auto____13280))
{return or__3824__auto____13280;
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
var parentMap__13285 = (new cljs.core.Keyword("\uFDD0'parents")).call(null,h);
var childsParents__13286 = (cljs.core.truth_(parentMap__13285.call(null,tag))?cljs.core.disj.call(null,parentMap__13285.call(null,tag),parent):cljs.core.PersistentHashSet.EMPTY);
var newParents__13287 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__13286))?cljs.core.assoc.call(null,parentMap__13285,tag,childsParents__13286):cljs.core.dissoc.call(null,parentMap__13285,tag));
var deriv_seq__13288 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__13268_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__13268_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__13268_SHARP_),cljs.core.second.call(null,p1__13268_SHARP_)));
}),cljs.core.seq.call(null,newParents__13287)));
if(cljs.core.contains_QMARK_.call(null,parentMap__13285.call(null,tag),parent))
{return cljs.core.reduce.call(null,(function (p1__13269_SHARP_,p2__13270_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__13269_SHARP_,p2__13270_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__13288));
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
var xprefs__13296 = cljs.core.deref.call(null,prefer_table).call(null,x);
var or__3824__auto____13298 = (cljs.core.truth_((function (){var and__3822__auto____13297 = xprefs__13296;
if(cljs.core.truth_(and__3822__auto____13297))
{return xprefs__13296.call(null,y);
} else
{return and__3822__auto____13297;
}
})())?true:null);
if(cljs.core.truth_(or__3824__auto____13298))
{return or__3824__auto____13298;
} else
{var or__3824__auto____13300 = (function (){var ps__13299 = cljs.core.parents.call(null,y);
while(true){
if((cljs.core.count.call(null,ps__13299) > 0))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__13299),prefer_table)))
{} else
{}
{
var G__13303 = cljs.core.rest.call(null,ps__13299);
ps__13299 = G__13303;
continue;
}
} else
{return null;
}
break;
}
})();
if(cljs.core.truth_(or__3824__auto____13300))
{return or__3824__auto____13300;
} else
{var or__3824__auto____13302 = (function (){var ps__13301 = cljs.core.parents.call(null,x);
while(true){
if((cljs.core.count.call(null,ps__13301) > 0))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__13301),y,prefer_table)))
{} else
{}
{
var G__13304 = cljs.core.rest.call(null,ps__13301);
ps__13301 = G__13304;
continue;
}
} else
{return null;
}
break;
}
})();
if(cljs.core.truth_(or__3824__auto____13302))
{return or__3824__auto____13302;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3824__auto____13306 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);
if(cljs.core.truth_(or__3824__auto____13306))
{return or__3824__auto____13306;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__13324 = cljs.core.reduce.call(null,(function (be,p__13316){
var vec__13317__13318 = p__13316;
var k__13319 = cljs.core.nth.call(null,vec__13317__13318,0,null);
var ___13320 = cljs.core.nth.call(null,vec__13317__13318,1,null);
var e__13321 = vec__13317__13318;
if(cljs.core.isa_QMARK_.call(null,dispatch_val,k__13319))
{var be2__13323 = (cljs.core.truth_((function (){var or__3824__auto____13322 = (be == null);
if(or__3824__auto____13322)
{return or__3824__auto____13322;
} else
{return cljs.core.dominates.call(null,k__13319,cljs.core.first.call(null,be),prefer_table);
}
})())?e__13321:be);
if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__13323),k__13319,prefer_table)))
{} else
{throw (new Error([cljs.core.str("Multiple methods in multimethod '"),cljs.core.str(name),cljs.core.str("' match dispatch value: "),cljs.core.str(dispatch_val),cljs.core.str(" -> "),cljs.core.str(k__13319),cljs.core.str(" and "),cljs.core.str(cljs.core.first.call(null,be2__13323)),cljs.core.str(", and neither is preferred")].join('')));
}
return be2__13323;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));
if(cljs.core.truth_(best_entry__13324))
{if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy)))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__13324));
return cljs.core.second.call(null,best_entry__13324);
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
if((function (){var and__3822__auto____13329 = mf;
if(and__3822__auto____13329)
{return mf.cljs$core$IMultiFn$_reset$arity$1;
} else
{return and__3822__auto____13329;
}
})())
{return mf.cljs$core$IMultiFn$_reset$arity$1(mf);
} else
{var x__5239__auto____13330 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____13331 = (cljs.core._reset[goog.typeOf(x__5239__auto____13330)]);
if(or__3824__auto____13331)
{return or__3824__auto____13331;
} else
{var or__3824__auto____13332 = (cljs.core._reset["_"]);
if(or__3824__auto____13332)
{return or__3824__auto____13332;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if((function (){var and__3822__auto____13337 = mf;
if(and__3822__auto____13337)
{return mf.cljs$core$IMultiFn$_add_method$arity$3;
} else
{return and__3822__auto____13337;
}
})())
{return mf.cljs$core$IMultiFn$_add_method$arity$3(mf,dispatch_val,method);
} else
{var x__5239__auto____13338 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____13339 = (cljs.core._add_method[goog.typeOf(x__5239__auto____13338)]);
if(or__3824__auto____13339)
{return or__3824__auto____13339;
} else
{var or__3824__auto____13340 = (cljs.core._add_method["_"]);
if(or__3824__auto____13340)
{return or__3824__auto____13340;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if((function (){var and__3822__auto____13345 = mf;
if(and__3822__auto____13345)
{return mf.cljs$core$IMultiFn$_remove_method$arity$2;
} else
{return and__3822__auto____13345;
}
})())
{return mf.cljs$core$IMultiFn$_remove_method$arity$2(mf,dispatch_val);
} else
{var x__5239__auto____13346 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____13347 = (cljs.core._remove_method[goog.typeOf(x__5239__auto____13346)]);
if(or__3824__auto____13347)
{return or__3824__auto____13347;
} else
{var or__3824__auto____13348 = (cljs.core._remove_method["_"]);
if(or__3824__auto____13348)
{return or__3824__auto____13348;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if((function (){var and__3822__auto____13353 = mf;
if(and__3822__auto____13353)
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3;
} else
{return and__3822__auto____13353;
}
})())
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3(mf,dispatch_val,dispatch_val_y);
} else
{var x__5239__auto____13354 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____13355 = (cljs.core._prefer_method[goog.typeOf(x__5239__auto____13354)]);
if(or__3824__auto____13355)
{return or__3824__auto____13355;
} else
{var or__3824__auto____13356 = (cljs.core._prefer_method["_"]);
if(or__3824__auto____13356)
{return or__3824__auto____13356;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if((function (){var and__3822__auto____13361 = mf;
if(and__3822__auto____13361)
{return mf.cljs$core$IMultiFn$_get_method$arity$2;
} else
{return and__3822__auto____13361;
}
})())
{return mf.cljs$core$IMultiFn$_get_method$arity$2(mf,dispatch_val);
} else
{var x__5239__auto____13362 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____13363 = (cljs.core._get_method[goog.typeOf(x__5239__auto____13362)]);
if(or__3824__auto____13363)
{return or__3824__auto____13363;
} else
{var or__3824__auto____13364 = (cljs.core._get_method["_"]);
if(or__3824__auto____13364)
{return or__3824__auto____13364;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if((function (){var and__3822__auto____13369 = mf;
if(and__3822__auto____13369)
{return mf.cljs$core$IMultiFn$_methods$arity$1;
} else
{return and__3822__auto____13369;
}
})())
{return mf.cljs$core$IMultiFn$_methods$arity$1(mf);
} else
{var x__5239__auto____13370 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____13371 = (cljs.core._methods[goog.typeOf(x__5239__auto____13370)]);
if(or__3824__auto____13371)
{return or__3824__auto____13371;
} else
{var or__3824__auto____13372 = (cljs.core._methods["_"]);
if(or__3824__auto____13372)
{return or__3824__auto____13372;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if((function (){var and__3822__auto____13377 = mf;
if(and__3822__auto____13377)
{return mf.cljs$core$IMultiFn$_prefers$arity$1;
} else
{return and__3822__auto____13377;
}
})())
{return mf.cljs$core$IMultiFn$_prefers$arity$1(mf);
} else
{var x__5239__auto____13378 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____13379 = (cljs.core._prefers[goog.typeOf(x__5239__auto____13378)]);
if(or__3824__auto____13379)
{return or__3824__auto____13379;
} else
{var or__3824__auto____13380 = (cljs.core._prefers["_"]);
if(or__3824__auto____13380)
{return or__3824__auto____13380;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if((function (){var and__3822__auto____13385 = mf;
if(and__3822__auto____13385)
{return mf.cljs$core$IMultiFn$_dispatch$arity$2;
} else
{return and__3822__auto____13385;
}
})())
{return mf.cljs$core$IMultiFn$_dispatch$arity$2(mf,args);
} else
{var x__5239__auto____13386 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____13387 = (cljs.core._dispatch[goog.typeOf(x__5239__auto____13386)]);
if(or__3824__auto____13387)
{return or__3824__auto____13387;
} else
{var or__3824__auto____13388 = (cljs.core._dispatch["_"]);
if(or__3824__auto____13388)
{return or__3824__auto____13388;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__13391 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__13392 = cljs.core._get_method.call(null,mf,dispatch_val__13391);
if(cljs.core.truth_(target_fn__13392))
{} else
{throw (new Error([cljs.core.str("No method in multimethod '"),cljs.core.str(cljs.core.name),cljs.core.str("' for dispatch value: "),cljs.core.str(dispatch_val__13391)].join('')));
}
return cljs.core.apply.call(null,target_fn__13392,args);
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
cljs.core.MultiFn.cljs$lang$ctorPrSeq = (function (this__5174__auto__){
return cljs.core.list.call(null,"cljs.core/MultiFn");
});
cljs.core.MultiFn.cljs$lang$ctorPrWriter = (function (this__5174__auto__,writer__5175__auto__){
return cljs.core._write.call(null,writer__5175__auto__,"cljs.core/MultiFn");
});
cljs.core.MultiFn.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this__13393 = this;
return goog.getUid(this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset$arity$1 = (function (mf){
var this__13394 = this;
cljs.core.swap_BANG_.call(null,this__13394.method_table,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__13394.method_cache,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__13394.prefer_table,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__13394.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method$arity$3 = (function (mf,dispatch_val,method){
var this__13395 = this;
cljs.core.swap_BANG_.call(null,this__13395.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__13395.method_cache,this__13395.method_table,this__13395.cached_hierarchy,this__13395.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method$arity$2 = (function (mf,dispatch_val){
var this__13396 = this;
cljs.core.swap_BANG_.call(null,this__13396.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__13396.method_cache,this__13396.method_table,this__13396.cached_hierarchy,this__13396.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method$arity$2 = (function (mf,dispatch_val){
var this__13397 = this;
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__13397.cached_hierarchy),cljs.core.deref.call(null,this__13397.hierarchy)))
{} else
{cljs.core.reset_cache.call(null,this__13397.method_cache,this__13397.method_table,this__13397.cached_hierarchy,this__13397.hierarchy);
}
var temp__3971__auto____13398 = cljs.core.deref.call(null,this__13397.method_cache).call(null,dispatch_val);
if(cljs.core.truth_(temp__3971__auto____13398))
{var target_fn__13399 = temp__3971__auto____13398;
return target_fn__13399;
} else
{var temp__3971__auto____13400 = cljs.core.find_and_cache_best_method.call(null,this__13397.name,dispatch_val,this__13397.hierarchy,this__13397.method_table,this__13397.prefer_table,this__13397.method_cache,this__13397.cached_hierarchy);
if(cljs.core.truth_(temp__3971__auto____13400))
{var target_fn__13401 = temp__3971__auto____13400;
return target_fn__13401;
} else
{return cljs.core.deref.call(null,this__13397.method_table).call(null,this__13397.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method$arity$3 = (function (mf,dispatch_val_x,dispatch_val_y){
var this__13402 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__13402.prefer_table)))
{throw (new Error([cljs.core.str("Preference conflict in multimethod '"),cljs.core.str(this__13402.name),cljs.core.str("': "),cljs.core.str(dispatch_val_y),cljs.core.str(" is already preferred to "),cljs.core.str(dispatch_val_x)].join('')));
} else
{}
cljs.core.swap_BANG_.call(null,this__13402.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core._lookup.call(null,old,dispatch_val_x,cljs.core.PersistentHashSet.EMPTY),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__13402.method_cache,this__13402.method_table,this__13402.cached_hierarchy,this__13402.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods$arity$1 = (function (mf){
var this__13403 = this;
return cljs.core.deref.call(null,this__13403.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers$arity$1 = (function (mf){
var this__13404 = this;
return cljs.core.deref.call(null,this__13404.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch$arity$2 = (function (mf,args){
var this__13405 = this;
return cljs.core.do_dispatch.call(null,mf,this__13405.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__13407__delegate = function (_,args){
var self__13406 = this;
return cljs.core._dispatch.call(null,self__13406,args);
};
var G__13407 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__13407__delegate.call(this, _, args);
};
G__13407.cljs$lang$maxFixedArity = 1;
G__13407.cljs$lang$applyTo = (function (arglist__13408){
var _ = cljs.core.first(arglist__13408);
var args = cljs.core.rest(arglist__13408);
return G__13407__delegate(_, args);
});
G__13407.cljs$lang$arity$variadic = G__13407__delegate;
return G__13407;
})()
;
cljs.core.MultiFn.prototype.apply = (function (_,args){
var self__13409 = this;
return cljs.core._dispatch.call(null,self__13409,args);
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
cljs.core.UUID.cljs$lang$ctorPrSeq = (function (this__5174__auto__){
return cljs.core.list.call(null,"cljs.core/UUID");
});
cljs.core.UUID.cljs$lang$ctorPrWriter = (function (this__5174__auto__,writer__5175__auto__){
return cljs.core._write.call(null,writer__5175__auto__,"cljs.core/UUID");
});
cljs.core.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this__13410 = this;
return goog.string.hashCode(cljs.core.pr_str.call(null,this$));
});
cljs.core.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_13412,writer,_){
var this__13411 = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#uuid \""),cljs.core.str(this__13411.uuid),cljs.core.str("\"")].join(''));
});
cljs.core.UUID.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (_13414,_){
var this__13413 = this;
return cljs.core.list.call(null,[cljs.core.str("#uuid \""),cljs.core.str(this__13413.uuid),cljs.core.str("\"")].join(''));
});
cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var this__13415 = this;
var and__3822__auto____13416 = cljs.core.instance_QMARK_.call(null,cljs.core.UUID,other);
if(and__3822__auto____13416)
{return (this__13415.uuid === other.uuid);
} else
{return and__3822__auto____13416;
}
});
cljs.core.UUID.prototype.toString = (function (){
var this__13417 = this;
var this__13418 = this;
return cljs.core.pr_str.call(null,this__13418);
});
cljs.core.UUID;

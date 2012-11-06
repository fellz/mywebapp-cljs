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
var x__82190 = (((x == null))?null:x);
if((p[goog.typeOf(x__82190)]))
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
var G__82191__delegate = function (array,i,idxs){
return cljs.core.apply.call(null,aget,aget.call(null,array,i),idxs);
};
var G__82191 = function (array,i,var_args){
var idxs = null;
if (goog.isDef(var_args)) {
  idxs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__82191__delegate.call(this, array, i, idxs);
};
G__82191.cljs$lang$maxFixedArity = 2;
G__82191.cljs$lang$applyTo = (function (arglist__82192){
var array = cljs.core.first(arglist__82192);
var i = cljs.core.first(cljs.core.next(arglist__82192));
var idxs = cljs.core.rest(cljs.core.next(arglist__82192));
return G__82191__delegate(array, i, idxs);
});
G__82191.cljs$lang$arity$variadic = G__82191__delegate;
return G__82191;
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
if((function (){var and__3822__auto____82277 = this$;
if(and__3822__auto____82277)
{return this$.cljs$core$IFn$_invoke$arity$1;
} else
{return and__3822__auto____82277;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$1(this$);
} else
{var x__5531__auto____82278 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____82279 = (cljs.core._invoke[goog.typeOf(x__5531__auto____82278)]);
if(or__3824__auto____82279)
{return or__3824__auto____82279;
} else
{var or__3824__auto____82280 = (cljs.core._invoke["_"]);
if(or__3824__auto____82280)
{return or__3824__auto____82280;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__2 = (function (this$,a){
if((function (){var and__3822__auto____82281 = this$;
if(and__3822__auto____82281)
{return this$.cljs$core$IFn$_invoke$arity$2;
} else
{return and__3822__auto____82281;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$2(this$,a);
} else
{var x__5531__auto____82282 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____82283 = (cljs.core._invoke[goog.typeOf(x__5531__auto____82282)]);
if(or__3824__auto____82283)
{return or__3824__auto____82283;
} else
{var or__3824__auto____82284 = (cljs.core._invoke["_"]);
if(or__3824__auto____82284)
{return or__3824__auto____82284;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__3 = (function (this$,a,b){
if((function (){var and__3822__auto____82285 = this$;
if(and__3822__auto____82285)
{return this$.cljs$core$IFn$_invoke$arity$3;
} else
{return and__3822__auto____82285;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$3(this$,a,b);
} else
{var x__5531__auto____82286 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____82287 = (cljs.core._invoke[goog.typeOf(x__5531__auto____82286)]);
if(or__3824__auto____82287)
{return or__3824__auto____82287;
} else
{var or__3824__auto____82288 = (cljs.core._invoke["_"]);
if(or__3824__auto____82288)
{return or__3824__auto____82288;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__4 = (function (this$,a,b,c){
if((function (){var and__3822__auto____82289 = this$;
if(and__3822__auto____82289)
{return this$.cljs$core$IFn$_invoke$arity$4;
} else
{return and__3822__auto____82289;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$4(this$,a,b,c);
} else
{var x__5531__auto____82290 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____82291 = (cljs.core._invoke[goog.typeOf(x__5531__auto____82290)]);
if(or__3824__auto____82291)
{return or__3824__auto____82291;
} else
{var or__3824__auto____82292 = (cljs.core._invoke["_"]);
if(or__3824__auto____82292)
{return or__3824__auto____82292;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__5 = (function (this$,a,b,c,d){
if((function (){var and__3822__auto____82293 = this$;
if(and__3822__auto____82293)
{return this$.cljs$core$IFn$_invoke$arity$5;
} else
{return and__3822__auto____82293;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$5(this$,a,b,c,d);
} else
{var x__5531__auto____82294 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____82295 = (cljs.core._invoke[goog.typeOf(x__5531__auto____82294)]);
if(or__3824__auto____82295)
{return or__3824__auto____82295;
} else
{var or__3824__auto____82296 = (cljs.core._invoke["_"]);
if(or__3824__auto____82296)
{return or__3824__auto____82296;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__6 = (function (this$,a,b,c,d,e){
if((function (){var and__3822__auto____82297 = this$;
if(and__3822__auto____82297)
{return this$.cljs$core$IFn$_invoke$arity$6;
} else
{return and__3822__auto____82297;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$6(this$,a,b,c,d,e);
} else
{var x__5531__auto____82298 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____82299 = (cljs.core._invoke[goog.typeOf(x__5531__auto____82298)]);
if(or__3824__auto____82299)
{return or__3824__auto____82299;
} else
{var or__3824__auto____82300 = (cljs.core._invoke["_"]);
if(or__3824__auto____82300)
{return or__3824__auto____82300;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7 = (function (this$,a,b,c,d,e,f){
if((function (){var and__3822__auto____82301 = this$;
if(and__3822__auto____82301)
{return this$.cljs$core$IFn$_invoke$arity$7;
} else
{return and__3822__auto____82301;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$7(this$,a,b,c,d,e,f);
} else
{var x__5531__auto____82302 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____82303 = (cljs.core._invoke[goog.typeOf(x__5531__auto____82302)]);
if(or__3824__auto____82303)
{return or__3824__auto____82303;
} else
{var or__3824__auto____82304 = (cljs.core._invoke["_"]);
if(or__3824__auto____82304)
{return or__3824__auto____82304;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__8 = (function (this$,a,b,c,d,e,f,g){
if((function (){var and__3822__auto____82305 = this$;
if(and__3822__auto____82305)
{return this$.cljs$core$IFn$_invoke$arity$8;
} else
{return and__3822__auto____82305;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$8(this$,a,b,c,d,e,f,g);
} else
{var x__5531__auto____82306 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____82307 = (cljs.core._invoke[goog.typeOf(x__5531__auto____82306)]);
if(or__3824__auto____82307)
{return or__3824__auto____82307;
} else
{var or__3824__auto____82308 = (cljs.core._invoke["_"]);
if(or__3824__auto____82308)
{return or__3824__auto____82308;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__9 = (function (this$,a,b,c,d,e,f,g,h){
if((function (){var and__3822__auto____82309 = this$;
if(and__3822__auto____82309)
{return this$.cljs$core$IFn$_invoke$arity$9;
} else
{return and__3822__auto____82309;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$9(this$,a,b,c,d,e,f,g,h);
} else
{var x__5531__auto____82310 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____82311 = (cljs.core._invoke[goog.typeOf(x__5531__auto____82310)]);
if(or__3824__auto____82311)
{return or__3824__auto____82311;
} else
{var or__3824__auto____82312 = (cljs.core._invoke["_"]);
if(or__3824__auto____82312)
{return or__3824__auto____82312;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__10 = (function (this$,a,b,c,d,e,f,g,h,i){
if((function (){var and__3822__auto____82313 = this$;
if(and__3822__auto____82313)
{return this$.cljs$core$IFn$_invoke$arity$10;
} else
{return and__3822__auto____82313;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$10(this$,a,b,c,d,e,f,g,h,i);
} else
{var x__5531__auto____82314 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____82315 = (cljs.core._invoke[goog.typeOf(x__5531__auto____82314)]);
if(or__3824__auto____82315)
{return or__3824__auto____82315;
} else
{var or__3824__auto____82316 = (cljs.core._invoke["_"]);
if(or__3824__auto____82316)
{return or__3824__auto____82316;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__11 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if((function (){var and__3822__auto____82317 = this$;
if(and__3822__auto____82317)
{return this$.cljs$core$IFn$_invoke$arity$11;
} else
{return and__3822__auto____82317;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$11(this$,a,b,c,d,e,f,g,h,i,j);
} else
{var x__5531__auto____82318 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____82319 = (cljs.core._invoke[goog.typeOf(x__5531__auto____82318)]);
if(or__3824__auto____82319)
{return or__3824__auto____82319;
} else
{var or__3824__auto____82320 = (cljs.core._invoke["_"]);
if(or__3824__auto____82320)
{return or__3824__auto____82320;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__12 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if((function (){var and__3822__auto____82321 = this$;
if(and__3822__auto____82321)
{return this$.cljs$core$IFn$_invoke$arity$12;
} else
{return and__3822__auto____82321;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$12(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{var x__5531__auto____82322 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____82323 = (cljs.core._invoke[goog.typeOf(x__5531__auto____82322)]);
if(or__3824__auto____82323)
{return or__3824__auto____82323;
} else
{var or__3824__auto____82324 = (cljs.core._invoke["_"]);
if(or__3824__auto____82324)
{return or__3824__auto____82324;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__13 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if((function (){var and__3822__auto____82325 = this$;
if(and__3822__auto____82325)
{return this$.cljs$core$IFn$_invoke$arity$13;
} else
{return and__3822__auto____82325;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$13(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{var x__5531__auto____82326 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____82327 = (cljs.core._invoke[goog.typeOf(x__5531__auto____82326)]);
if(or__3824__auto____82327)
{return or__3824__auto____82327;
} else
{var or__3824__auto____82328 = (cljs.core._invoke["_"]);
if(or__3824__auto____82328)
{return or__3824__auto____82328;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__14 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if((function (){var and__3822__auto____82329 = this$;
if(and__3822__auto____82329)
{return this$.cljs$core$IFn$_invoke$arity$14;
} else
{return and__3822__auto____82329;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$14(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{var x__5531__auto____82330 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____82331 = (cljs.core._invoke[goog.typeOf(x__5531__auto____82330)]);
if(or__3824__auto____82331)
{return or__3824__auto____82331;
} else
{var or__3824__auto____82332 = (cljs.core._invoke["_"]);
if(or__3824__auto____82332)
{return or__3824__auto____82332;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__15 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if((function (){var and__3822__auto____82333 = this$;
if(and__3822__auto____82333)
{return this$.cljs$core$IFn$_invoke$arity$15;
} else
{return and__3822__auto____82333;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$15(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{var x__5531__auto____82334 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____82335 = (cljs.core._invoke[goog.typeOf(x__5531__auto____82334)]);
if(or__3824__auto____82335)
{return or__3824__auto____82335;
} else
{var or__3824__auto____82336 = (cljs.core._invoke["_"]);
if(or__3824__auto____82336)
{return or__3824__auto____82336;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__16 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if((function (){var and__3822__auto____82337 = this$;
if(and__3822__auto____82337)
{return this$.cljs$core$IFn$_invoke$arity$16;
} else
{return and__3822__auto____82337;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$16(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{var x__5531__auto____82338 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____82339 = (cljs.core._invoke[goog.typeOf(x__5531__auto____82338)]);
if(or__3824__auto____82339)
{return or__3824__auto____82339;
} else
{var or__3824__auto____82340 = (cljs.core._invoke["_"]);
if(or__3824__auto____82340)
{return or__3824__auto____82340;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__17 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if((function (){var and__3822__auto____82341 = this$;
if(and__3822__auto____82341)
{return this$.cljs$core$IFn$_invoke$arity$17;
} else
{return and__3822__auto____82341;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$17(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{var x__5531__auto____82342 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____82343 = (cljs.core._invoke[goog.typeOf(x__5531__auto____82342)]);
if(or__3824__auto____82343)
{return or__3824__auto____82343;
} else
{var or__3824__auto____82344 = (cljs.core._invoke["_"]);
if(or__3824__auto____82344)
{return or__3824__auto____82344;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__18 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if((function (){var and__3822__auto____82345 = this$;
if(and__3822__auto____82345)
{return this$.cljs$core$IFn$_invoke$arity$18;
} else
{return and__3822__auto____82345;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$18(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{var x__5531__auto____82346 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____82347 = (cljs.core._invoke[goog.typeOf(x__5531__auto____82346)]);
if(or__3824__auto____82347)
{return or__3824__auto____82347;
} else
{var or__3824__auto____82348 = (cljs.core._invoke["_"]);
if(or__3824__auto____82348)
{return or__3824__auto____82348;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__19 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if((function (){var and__3822__auto____82349 = this$;
if(and__3822__auto____82349)
{return this$.cljs$core$IFn$_invoke$arity$19;
} else
{return and__3822__auto____82349;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$19(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{var x__5531__auto____82350 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____82351 = (cljs.core._invoke[goog.typeOf(x__5531__auto____82350)]);
if(or__3824__auto____82351)
{return or__3824__auto____82351;
} else
{var or__3824__auto____82352 = (cljs.core._invoke["_"]);
if(or__3824__auto____82352)
{return or__3824__auto____82352;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__20 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if((function (){var and__3822__auto____82353 = this$;
if(and__3822__auto____82353)
{return this$.cljs$core$IFn$_invoke$arity$20;
} else
{return and__3822__auto____82353;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$20(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{var x__5531__auto____82354 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____82355 = (cljs.core._invoke[goog.typeOf(x__5531__auto____82354)]);
if(or__3824__auto____82355)
{return or__3824__auto____82355;
} else
{var or__3824__auto____82356 = (cljs.core._invoke["_"]);
if(or__3824__auto____82356)
{return or__3824__auto____82356;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__21 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if((function (){var and__3822__auto____82357 = this$;
if(and__3822__auto____82357)
{return this$.cljs$core$IFn$_invoke$arity$21;
} else
{return and__3822__auto____82357;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$21(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{var x__5531__auto____82358 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____82359 = (cljs.core._invoke[goog.typeOf(x__5531__auto____82358)]);
if(or__3824__auto____82359)
{return or__3824__auto____82359;
} else
{var or__3824__auto____82360 = (cljs.core._invoke["_"]);
if(or__3824__auto____82360)
{return or__3824__auto____82360;
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
if((function (){var and__3822__auto____82365 = coll;
if(and__3822__auto____82365)
{return coll.cljs$core$ICounted$_count$arity$1;
} else
{return and__3822__auto____82365;
}
})())
{return coll.cljs$core$ICounted$_count$arity$1(coll);
} else
{var x__5531__auto____82366 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____82367 = (cljs.core._count[goog.typeOf(x__5531__auto____82366)]);
if(or__3824__auto____82367)
{return or__3824__auto____82367;
} else
{var or__3824__auto____82368 = (cljs.core._count["_"]);
if(or__3824__auto____82368)
{return or__3824__auto____82368;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if((function (){var and__3822__auto____82373 = coll;
if(and__3822__auto____82373)
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1;
} else
{return and__3822__auto____82373;
}
})())
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{var x__5531__auto____82374 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____82375 = (cljs.core._empty[goog.typeOf(x__5531__auto____82374)]);
if(or__3824__auto____82375)
{return or__3824__auto____82375;
} else
{var or__3824__auto____82376 = (cljs.core._empty["_"]);
if(or__3824__auto____82376)
{return or__3824__auto____82376;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if((function (){var and__3822__auto____82381 = coll;
if(and__3822__auto____82381)
{return coll.cljs$core$ICollection$_conj$arity$2;
} else
{return and__3822__auto____82381;
}
})())
{return coll.cljs$core$ICollection$_conj$arity$2(coll,o);
} else
{var x__5531__auto____82382 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____82383 = (cljs.core._conj[goog.typeOf(x__5531__auto____82382)]);
if(or__3824__auto____82383)
{return or__3824__auto____82383;
} else
{var or__3824__auto____82384 = (cljs.core._conj["_"]);
if(or__3824__auto____82384)
{return or__3824__auto____82384;
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
if((function (){var and__3822__auto____82393 = coll;
if(and__3822__auto____82393)
{return coll.cljs$core$IIndexed$_nth$arity$2;
} else
{return and__3822__auto____82393;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{var x__5531__auto____82394 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____82395 = (cljs.core._nth[goog.typeOf(x__5531__auto____82394)]);
if(or__3824__auto____82395)
{return or__3824__auto____82395;
} else
{var or__3824__auto____82396 = (cljs.core._nth["_"]);
if(or__3824__auto____82396)
{return or__3824__auto____82396;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__3 = (function (coll,n,not_found){
if((function (){var and__3822__auto____82397 = coll;
if(and__3822__auto____82397)
{return coll.cljs$core$IIndexed$_nth$arity$3;
} else
{return and__3822__auto____82397;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$3(coll,n,not_found);
} else
{var x__5531__auto____82398 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____82399 = (cljs.core._nth[goog.typeOf(x__5531__auto____82398)]);
if(or__3824__auto____82399)
{return or__3824__auto____82399;
} else
{var or__3824__auto____82400 = (cljs.core._nth["_"]);
if(or__3824__auto____82400)
{return or__3824__auto____82400;
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
if((function (){var and__3822__auto____82405 = coll;
if(and__3822__auto____82405)
{return coll.cljs$core$ISeq$_first$arity$1;
} else
{return and__3822__auto____82405;
}
})())
{return coll.cljs$core$ISeq$_first$arity$1(coll);
} else
{var x__5531__auto____82406 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____82407 = (cljs.core._first[goog.typeOf(x__5531__auto____82406)]);
if(or__3824__auto____82407)
{return or__3824__auto____82407;
} else
{var or__3824__auto____82408 = (cljs.core._first["_"]);
if(or__3824__auto____82408)
{return or__3824__auto____82408;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if((function (){var and__3822__auto____82413 = coll;
if(and__3822__auto____82413)
{return coll.cljs$core$ISeq$_rest$arity$1;
} else
{return and__3822__auto____82413;
}
})())
{return coll.cljs$core$ISeq$_rest$arity$1(coll);
} else
{var x__5531__auto____82414 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____82415 = (cljs.core._rest[goog.typeOf(x__5531__auto____82414)]);
if(or__3824__auto____82415)
{return or__3824__auto____82415;
} else
{var or__3824__auto____82416 = (cljs.core._rest["_"]);
if(or__3824__auto____82416)
{return or__3824__auto____82416;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.INext = {};
cljs.core._next = (function _next(coll){
if((function (){var and__3822__auto____82421 = coll;
if(and__3822__auto____82421)
{return coll.cljs$core$INext$_next$arity$1;
} else
{return and__3822__auto____82421;
}
})())
{return coll.cljs$core$INext$_next$arity$1(coll);
} else
{var x__5531__auto____82422 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____82423 = (cljs.core._next[goog.typeOf(x__5531__auto____82422)]);
if(or__3824__auto____82423)
{return or__3824__auto____82423;
} else
{var or__3824__auto____82424 = (cljs.core._next["_"]);
if(or__3824__auto____82424)
{return or__3824__auto____82424;
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
if((function (){var and__3822__auto____82433 = o;
if(and__3822__auto____82433)
{return o.cljs$core$ILookup$_lookup$arity$2;
} else
{return and__3822__auto____82433;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$2(o,k);
} else
{var x__5531__auto____82434 = (((o == null))?null:o);
return (function (){var or__3824__auto____82435 = (cljs.core._lookup[goog.typeOf(x__5531__auto____82434)]);
if(or__3824__auto____82435)
{return or__3824__auto____82435;
} else
{var or__3824__auto____82436 = (cljs.core._lookup["_"]);
if(or__3824__auto____82436)
{return or__3824__auto____82436;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__3 = (function (o,k,not_found){
if((function (){var and__3822__auto____82437 = o;
if(and__3822__auto____82437)
{return o.cljs$core$ILookup$_lookup$arity$3;
} else
{return and__3822__auto____82437;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$3(o,k,not_found);
} else
{var x__5531__auto____82438 = (((o == null))?null:o);
return (function (){var or__3824__auto____82439 = (cljs.core._lookup[goog.typeOf(x__5531__auto____82438)]);
if(or__3824__auto____82439)
{return or__3824__auto____82439;
} else
{var or__3824__auto____82440 = (cljs.core._lookup["_"]);
if(or__3824__auto____82440)
{return or__3824__auto____82440;
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
if((function (){var and__3822__auto____82445 = coll;
if(and__3822__auto____82445)
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2;
} else
{return and__3822__auto____82445;
}
})())
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2(coll,k);
} else
{var x__5531__auto____82446 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____82447 = (cljs.core._contains_key_QMARK_[goog.typeOf(x__5531__auto____82446)]);
if(or__3824__auto____82447)
{return or__3824__auto____82447;
} else
{var or__3824__auto____82448 = (cljs.core._contains_key_QMARK_["_"]);
if(or__3824__auto____82448)
{return or__3824__auto____82448;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if((function (){var and__3822__auto____82453 = coll;
if(and__3822__auto____82453)
{return coll.cljs$core$IAssociative$_assoc$arity$3;
} else
{return and__3822__auto____82453;
}
})())
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,k,v);
} else
{var x__5531__auto____82454 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____82455 = (cljs.core._assoc[goog.typeOf(x__5531__auto____82454)]);
if(or__3824__auto____82455)
{return or__3824__auto____82455;
} else
{var or__3824__auto____82456 = (cljs.core._assoc["_"]);
if(or__3824__auto____82456)
{return or__3824__auto____82456;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if((function (){var and__3822__auto____82461 = coll;
if(and__3822__auto____82461)
{return coll.cljs$core$IMap$_dissoc$arity$2;
} else
{return and__3822__auto____82461;
}
})())
{return coll.cljs$core$IMap$_dissoc$arity$2(coll,k);
} else
{var x__5531__auto____82462 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____82463 = (cljs.core._dissoc[goog.typeOf(x__5531__auto____82462)]);
if(or__3824__auto____82463)
{return or__3824__auto____82463;
} else
{var or__3824__auto____82464 = (cljs.core._dissoc["_"]);
if(or__3824__auto____82464)
{return or__3824__auto____82464;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.IMapEntry = {};
cljs.core._key = (function _key(coll){
if((function (){var and__3822__auto____82469 = coll;
if(and__3822__auto____82469)
{return coll.cljs$core$IMapEntry$_key$arity$1;
} else
{return and__3822__auto____82469;
}
})())
{return coll.cljs$core$IMapEntry$_key$arity$1(coll);
} else
{var x__5531__auto____82470 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____82471 = (cljs.core._key[goog.typeOf(x__5531__auto____82470)]);
if(or__3824__auto____82471)
{return or__3824__auto____82471;
} else
{var or__3824__auto____82472 = (cljs.core._key["_"]);
if(or__3824__auto____82472)
{return or__3824__auto____82472;
} else
{throw cljs.core.missing_protocol.call(null,"IMapEntry.-key",coll);
}
}
})().call(null,coll);
}
});
cljs.core._val = (function _val(coll){
if((function (){var and__3822__auto____82477 = coll;
if(and__3822__auto____82477)
{return coll.cljs$core$IMapEntry$_val$arity$1;
} else
{return and__3822__auto____82477;
}
})())
{return coll.cljs$core$IMapEntry$_val$arity$1(coll);
} else
{var x__5531__auto____82478 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____82479 = (cljs.core._val[goog.typeOf(x__5531__auto____82478)]);
if(or__3824__auto____82479)
{return or__3824__auto____82479;
} else
{var or__3824__auto____82480 = (cljs.core._val["_"]);
if(or__3824__auto____82480)
{return or__3824__auto____82480;
} else
{throw cljs.core.missing_protocol.call(null,"IMapEntry.-val",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if((function (){var and__3822__auto____82485 = coll;
if(and__3822__auto____82485)
{return coll.cljs$core$ISet$_disjoin$arity$2;
} else
{return and__3822__auto____82485;
}
})())
{return coll.cljs$core$ISet$_disjoin$arity$2(coll,v);
} else
{var x__5531__auto____82486 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____82487 = (cljs.core._disjoin[goog.typeOf(x__5531__auto____82486)]);
if(or__3824__auto____82487)
{return or__3824__auto____82487;
} else
{var or__3824__auto____82488 = (cljs.core._disjoin["_"]);
if(or__3824__auto____82488)
{return or__3824__auto____82488;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if((function (){var and__3822__auto____82493 = coll;
if(and__3822__auto____82493)
{return coll.cljs$core$IStack$_peek$arity$1;
} else
{return and__3822__auto____82493;
}
})())
{return coll.cljs$core$IStack$_peek$arity$1(coll);
} else
{var x__5531__auto____82494 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____82495 = (cljs.core._peek[goog.typeOf(x__5531__auto____82494)]);
if(or__3824__auto____82495)
{return or__3824__auto____82495;
} else
{var or__3824__auto____82496 = (cljs.core._peek["_"]);
if(or__3824__auto____82496)
{return or__3824__auto____82496;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if((function (){var and__3822__auto____82501 = coll;
if(and__3822__auto____82501)
{return coll.cljs$core$IStack$_pop$arity$1;
} else
{return and__3822__auto____82501;
}
})())
{return coll.cljs$core$IStack$_pop$arity$1(coll);
} else
{var x__5531__auto____82502 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____82503 = (cljs.core._pop[goog.typeOf(x__5531__auto____82502)]);
if(or__3824__auto____82503)
{return or__3824__auto____82503;
} else
{var or__3824__auto____82504 = (cljs.core._pop["_"]);
if(or__3824__auto____82504)
{return or__3824__auto____82504;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if((function (){var and__3822__auto____82509 = coll;
if(and__3822__auto____82509)
{return coll.cljs$core$IVector$_assoc_n$arity$3;
} else
{return and__3822__auto____82509;
}
})())
{return coll.cljs$core$IVector$_assoc_n$arity$3(coll,n,val);
} else
{var x__5531__auto____82510 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____82511 = (cljs.core._assoc_n[goog.typeOf(x__5531__auto____82510)]);
if(or__3824__auto____82511)
{return or__3824__auto____82511;
} else
{var or__3824__auto____82512 = (cljs.core._assoc_n["_"]);
if(or__3824__auto____82512)
{return or__3824__auto____82512;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if((function (){var and__3822__auto____82517 = o;
if(and__3822__auto____82517)
{return o.cljs$core$IDeref$_deref$arity$1;
} else
{return and__3822__auto____82517;
}
})())
{return o.cljs$core$IDeref$_deref$arity$1(o);
} else
{var x__5531__auto____82518 = (((o == null))?null:o);
return (function (){var or__3824__auto____82519 = (cljs.core._deref[goog.typeOf(x__5531__auto____82518)]);
if(or__3824__auto____82519)
{return or__3824__auto____82519;
} else
{var or__3824__auto____82520 = (cljs.core._deref["_"]);
if(or__3824__auto____82520)
{return or__3824__auto____82520;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if((function (){var and__3822__auto____82525 = o;
if(and__3822__auto____82525)
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3;
} else
{return and__3822__auto____82525;
}
})())
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3(o,msec,timeout_val);
} else
{var x__5531__auto____82526 = (((o == null))?null:o);
return (function (){var or__3824__auto____82527 = (cljs.core._deref_with_timeout[goog.typeOf(x__5531__auto____82526)]);
if(or__3824__auto____82527)
{return or__3824__auto____82527;
} else
{var or__3824__auto____82528 = (cljs.core._deref_with_timeout["_"]);
if(or__3824__auto____82528)
{return or__3824__auto____82528;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if((function (){var and__3822__auto____82533 = o;
if(and__3822__auto____82533)
{return o.cljs$core$IMeta$_meta$arity$1;
} else
{return and__3822__auto____82533;
}
})())
{return o.cljs$core$IMeta$_meta$arity$1(o);
} else
{var x__5531__auto____82534 = (((o == null))?null:o);
return (function (){var or__3824__auto____82535 = (cljs.core._meta[goog.typeOf(x__5531__auto____82534)]);
if(or__3824__auto____82535)
{return or__3824__auto____82535;
} else
{var or__3824__auto____82536 = (cljs.core._meta["_"]);
if(or__3824__auto____82536)
{return or__3824__auto____82536;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if((function (){var and__3822__auto____82541 = o;
if(and__3822__auto____82541)
{return o.cljs$core$IWithMeta$_with_meta$arity$2;
} else
{return and__3822__auto____82541;
}
})())
{return o.cljs$core$IWithMeta$_with_meta$arity$2(o,meta);
} else
{var x__5531__auto____82542 = (((o == null))?null:o);
return (function (){var or__3824__auto____82543 = (cljs.core._with_meta[goog.typeOf(x__5531__auto____82542)]);
if(or__3824__auto____82543)
{return or__3824__auto____82543;
} else
{var or__3824__auto____82544 = (cljs.core._with_meta["_"]);
if(or__3824__auto____82544)
{return or__3824__auto____82544;
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
if((function (){var and__3822__auto____82553 = coll;
if(and__3822__auto____82553)
{return coll.cljs$core$IReduce$_reduce$arity$2;
} else
{return and__3822__auto____82553;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$2(coll,f);
} else
{var x__5531__auto____82554 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____82555 = (cljs.core._reduce[goog.typeOf(x__5531__auto____82554)]);
if(or__3824__auto____82555)
{return or__3824__auto____82555;
} else
{var or__3824__auto____82556 = (cljs.core._reduce["_"]);
if(or__3824__auto____82556)
{return or__3824__auto____82556;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__3 = (function (coll,f,start){
if((function (){var and__3822__auto____82557 = coll;
if(and__3822__auto____82557)
{return coll.cljs$core$IReduce$_reduce$arity$3;
} else
{return and__3822__auto____82557;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$3(coll,f,start);
} else
{var x__5531__auto____82558 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____82559 = (cljs.core._reduce[goog.typeOf(x__5531__auto____82558)]);
if(or__3824__auto____82559)
{return or__3824__auto____82559;
} else
{var or__3824__auto____82560 = (cljs.core._reduce["_"]);
if(or__3824__auto____82560)
{return or__3824__auto____82560;
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
if((function (){var and__3822__auto____82565 = coll;
if(and__3822__auto____82565)
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3;
} else
{return and__3822__auto____82565;
}
})())
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3(coll,f,init);
} else
{var x__5531__auto____82566 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____82567 = (cljs.core._kv_reduce[goog.typeOf(x__5531__auto____82566)]);
if(or__3824__auto____82567)
{return or__3824__auto____82567;
} else
{var or__3824__auto____82568 = (cljs.core._kv_reduce["_"]);
if(or__3824__auto____82568)
{return or__3824__auto____82568;
} else
{throw cljs.core.missing_protocol.call(null,"IKVReduce.-kv-reduce",coll);
}
}
})().call(null,coll,f,init);
}
});
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if((function (){var and__3822__auto____82573 = o;
if(and__3822__auto____82573)
{return o.cljs$core$IEquiv$_equiv$arity$2;
} else
{return and__3822__auto____82573;
}
})())
{return o.cljs$core$IEquiv$_equiv$arity$2(o,other);
} else
{var x__5531__auto____82574 = (((o == null))?null:o);
return (function (){var or__3824__auto____82575 = (cljs.core._equiv[goog.typeOf(x__5531__auto____82574)]);
if(or__3824__auto____82575)
{return or__3824__auto____82575;
} else
{var or__3824__auto____82576 = (cljs.core._equiv["_"]);
if(or__3824__auto____82576)
{return or__3824__auto____82576;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if((function (){var and__3822__auto____82581 = o;
if(and__3822__auto____82581)
{return o.cljs$core$IHash$_hash$arity$1;
} else
{return and__3822__auto____82581;
}
})())
{return o.cljs$core$IHash$_hash$arity$1(o);
} else
{var x__5531__auto____82582 = (((o == null))?null:o);
return (function (){var or__3824__auto____82583 = (cljs.core._hash[goog.typeOf(x__5531__auto____82582)]);
if(or__3824__auto____82583)
{return or__3824__auto____82583;
} else
{var or__3824__auto____82584 = (cljs.core._hash["_"]);
if(or__3824__auto____82584)
{return or__3824__auto____82584;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if((function (){var and__3822__auto____82589 = o;
if(and__3822__auto____82589)
{return o.cljs$core$ISeqable$_seq$arity$1;
} else
{return and__3822__auto____82589;
}
})())
{return o.cljs$core$ISeqable$_seq$arity$1(o);
} else
{var x__5531__auto____82590 = (((o == null))?null:o);
return (function (){var or__3824__auto____82591 = (cljs.core._seq[goog.typeOf(x__5531__auto____82590)]);
if(or__3824__auto____82591)
{return or__3824__auto____82591;
} else
{var or__3824__auto____82592 = (cljs.core._seq["_"]);
if(or__3824__auto____82592)
{return or__3824__auto____82592;
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
if((function (){var and__3822__auto____82597 = coll;
if(and__3822__auto____82597)
{return coll.cljs$core$IReversible$_rseq$arity$1;
} else
{return and__3822__auto____82597;
}
})())
{return coll.cljs$core$IReversible$_rseq$arity$1(coll);
} else
{var x__5531__auto____82598 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____82599 = (cljs.core._rseq[goog.typeOf(x__5531__auto____82598)]);
if(or__3824__auto____82599)
{return or__3824__auto____82599;
} else
{var or__3824__auto____82600 = (cljs.core._rseq["_"]);
if(or__3824__auto____82600)
{return or__3824__auto____82600;
} else
{throw cljs.core.missing_protocol.call(null,"IReversible.-rseq",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ISorted = {};
cljs.core._sorted_seq = (function _sorted_seq(coll,ascending_QMARK_){
if((function (){var and__3822__auto____82605 = coll;
if(and__3822__auto____82605)
{return coll.cljs$core$ISorted$_sorted_seq$arity$2;
} else
{return and__3822__auto____82605;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq$arity$2(coll,ascending_QMARK_);
} else
{var x__5531__auto____82606 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____82607 = (cljs.core._sorted_seq[goog.typeOf(x__5531__auto____82606)]);
if(or__3824__auto____82607)
{return or__3824__auto____82607;
} else
{var or__3824__auto____82608 = (cljs.core._sorted_seq["_"]);
if(or__3824__auto____82608)
{return or__3824__auto____82608;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-sorted-seq",coll);
}
}
})().call(null,coll,ascending_QMARK_);
}
});
cljs.core._sorted_seq_from = (function _sorted_seq_from(coll,k,ascending_QMARK_){
if((function (){var and__3822__auto____82613 = coll;
if(and__3822__auto____82613)
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3;
} else
{return and__3822__auto____82613;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3(coll,k,ascending_QMARK_);
} else
{var x__5531__auto____82614 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____82615 = (cljs.core._sorted_seq_from[goog.typeOf(x__5531__auto____82614)]);
if(or__3824__auto____82615)
{return or__3824__auto____82615;
} else
{var or__3824__auto____82616 = (cljs.core._sorted_seq_from["_"]);
if(or__3824__auto____82616)
{return or__3824__auto____82616;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-sorted-seq-from",coll);
}
}
})().call(null,coll,k,ascending_QMARK_);
}
});
cljs.core._entry_key = (function _entry_key(coll,entry){
if((function (){var and__3822__auto____82621 = coll;
if(and__3822__auto____82621)
{return coll.cljs$core$ISorted$_entry_key$arity$2;
} else
{return and__3822__auto____82621;
}
})())
{return coll.cljs$core$ISorted$_entry_key$arity$2(coll,entry);
} else
{var x__5531__auto____82622 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____82623 = (cljs.core._entry_key[goog.typeOf(x__5531__auto____82622)]);
if(or__3824__auto____82623)
{return or__3824__auto____82623;
} else
{var or__3824__auto____82624 = (cljs.core._entry_key["_"]);
if(or__3824__auto____82624)
{return or__3824__auto____82624;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-entry-key",coll);
}
}
})().call(null,coll,entry);
}
});
cljs.core._comparator = (function _comparator(coll){
if((function (){var and__3822__auto____82629 = coll;
if(and__3822__auto____82629)
{return coll.cljs$core$ISorted$_comparator$arity$1;
} else
{return and__3822__auto____82629;
}
})())
{return coll.cljs$core$ISorted$_comparator$arity$1(coll);
} else
{var x__5531__auto____82630 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____82631 = (cljs.core._comparator[goog.typeOf(x__5531__auto____82630)]);
if(or__3824__auto____82631)
{return or__3824__auto____82631;
} else
{var or__3824__auto____82632 = (cljs.core._comparator["_"]);
if(or__3824__auto____82632)
{return or__3824__auto____82632;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-comparator",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IPrintable = {};
cljs.core._pr_seq = (function _pr_seq(o,opts){
if((function (){var and__3822__auto____82637 = o;
if(and__3822__auto____82637)
{return o.cljs$core$IPrintable$_pr_seq$arity$2;
} else
{return and__3822__auto____82637;
}
})())
{return o.cljs$core$IPrintable$_pr_seq$arity$2(o,opts);
} else
{var x__5531__auto____82638 = (((o == null))?null:o);
return (function (){var or__3824__auto____82639 = (cljs.core._pr_seq[goog.typeOf(x__5531__auto____82638)]);
if(or__3824__auto____82639)
{return or__3824__auto____82639;
} else
{var or__3824__auto____82640 = (cljs.core._pr_seq["_"]);
if(or__3824__auto____82640)
{return or__3824__auto____82640;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IWriter = {};
cljs.core._write = (function _write(writer,s){
if((function (){var and__3822__auto____82645 = writer;
if(and__3822__auto____82645)
{return writer.cljs$core$IWriter$_write$arity$2;
} else
{return and__3822__auto____82645;
}
})())
{return writer.cljs$core$IWriter$_write$arity$2(writer,s);
} else
{var x__5531__auto____82646 = (((writer == null))?null:writer);
return (function (){var or__3824__auto____82647 = (cljs.core._write[goog.typeOf(x__5531__auto____82646)]);
if(or__3824__auto____82647)
{return or__3824__auto____82647;
} else
{var or__3824__auto____82648 = (cljs.core._write["_"]);
if(or__3824__auto____82648)
{return or__3824__auto____82648;
} else
{throw cljs.core.missing_protocol.call(null,"IWriter.-write",writer);
}
}
})().call(null,writer,s);
}
});
cljs.core._flush = (function _flush(writer){
if((function (){var and__3822__auto____82653 = writer;
if(and__3822__auto____82653)
{return writer.cljs$core$IWriter$_flush$arity$1;
} else
{return and__3822__auto____82653;
}
})())
{return writer.cljs$core$IWriter$_flush$arity$1(writer);
} else
{var x__5531__auto____82654 = (((writer == null))?null:writer);
return (function (){var or__3824__auto____82655 = (cljs.core._flush[goog.typeOf(x__5531__auto____82654)]);
if(or__3824__auto____82655)
{return or__3824__auto____82655;
} else
{var or__3824__auto____82656 = (cljs.core._flush["_"]);
if(or__3824__auto____82656)
{return or__3824__auto____82656;
} else
{throw cljs.core.missing_protocol.call(null,"IWriter.-flush",writer);
}
}
})().call(null,writer);
}
});
cljs.core.IPrintWithWriter = {};
cljs.core._pr_writer = (function _pr_writer(o,writer,opts){
if((function (){var and__3822__auto____82661 = o;
if(and__3822__auto____82661)
{return o.cljs$core$IPrintWithWriter$_pr_writer$arity$3;
} else
{return and__3822__auto____82661;
}
})())
{return o.cljs$core$IPrintWithWriter$_pr_writer$arity$3(o,writer,opts);
} else
{var x__5531__auto____82662 = (((o == null))?null:o);
return (function (){var or__3824__auto____82663 = (cljs.core._pr_writer[goog.typeOf(x__5531__auto____82662)]);
if(or__3824__auto____82663)
{return or__3824__auto____82663;
} else
{var or__3824__auto____82664 = (cljs.core._pr_writer["_"]);
if(or__3824__auto____82664)
{return or__3824__auto____82664;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintWithWriter.-pr-writer",o);
}
}
})().call(null,o,writer,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if((function (){var and__3822__auto____82669 = d;
if(and__3822__auto____82669)
{return d.cljs$core$IPending$_realized_QMARK_$arity$1;
} else
{return and__3822__auto____82669;
}
})())
{return d.cljs$core$IPending$_realized_QMARK_$arity$1(d);
} else
{var x__5531__auto____82670 = (((d == null))?null:d);
return (function (){var or__3824__auto____82671 = (cljs.core._realized_QMARK_[goog.typeOf(x__5531__auto____82670)]);
if(or__3824__auto____82671)
{return or__3824__auto____82671;
} else
{var or__3824__auto____82672 = (cljs.core._realized_QMARK_["_"]);
if(or__3824__auto____82672)
{return or__3824__auto____82672;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if((function (){var and__3822__auto____82677 = this$;
if(and__3822__auto____82677)
{return this$.cljs$core$IWatchable$_notify_watches$arity$3;
} else
{return and__3822__auto____82677;
}
})())
{return this$.cljs$core$IWatchable$_notify_watches$arity$3(this$,oldval,newval);
} else
{var x__5531__auto____82678 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____82679 = (cljs.core._notify_watches[goog.typeOf(x__5531__auto____82678)]);
if(or__3824__auto____82679)
{return or__3824__auto____82679;
} else
{var or__3824__auto____82680 = (cljs.core._notify_watches["_"]);
if(or__3824__auto____82680)
{return or__3824__auto____82680;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if((function (){var and__3822__auto____82685 = this$;
if(and__3822__auto____82685)
{return this$.cljs$core$IWatchable$_add_watch$arity$3;
} else
{return and__3822__auto____82685;
}
})())
{return this$.cljs$core$IWatchable$_add_watch$arity$3(this$,key,f);
} else
{var x__5531__auto____82686 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____82687 = (cljs.core._add_watch[goog.typeOf(x__5531__auto____82686)]);
if(or__3824__auto____82687)
{return or__3824__auto____82687;
} else
{var or__3824__auto____82688 = (cljs.core._add_watch["_"]);
if(or__3824__auto____82688)
{return or__3824__auto____82688;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if((function (){var and__3822__auto____82693 = this$;
if(and__3822__auto____82693)
{return this$.cljs$core$IWatchable$_remove_watch$arity$2;
} else
{return and__3822__auto____82693;
}
})())
{return this$.cljs$core$IWatchable$_remove_watch$arity$2(this$,key);
} else
{var x__5531__auto____82694 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____82695 = (cljs.core._remove_watch[goog.typeOf(x__5531__auto____82694)]);
if(or__3824__auto____82695)
{return or__3824__auto____82695;
} else
{var or__3824__auto____82696 = (cljs.core._remove_watch["_"]);
if(or__3824__auto____82696)
{return or__3824__auto____82696;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-remove-watch",this$);
}
}
})().call(null,this$,key);
}
});
cljs.core.IEditableCollection = {};
cljs.core._as_transient = (function _as_transient(coll){
if((function (){var and__3822__auto____82701 = coll;
if(and__3822__auto____82701)
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1;
} else
{return and__3822__auto____82701;
}
})())
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1(coll);
} else
{var x__5531__auto____82702 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____82703 = (cljs.core._as_transient[goog.typeOf(x__5531__auto____82702)]);
if(or__3824__auto____82703)
{return or__3824__auto____82703;
} else
{var or__3824__auto____82704 = (cljs.core._as_transient["_"]);
if(or__3824__auto____82704)
{return or__3824__auto____82704;
} else
{throw cljs.core.missing_protocol.call(null,"IEditableCollection.-as-transient",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ITransientCollection = {};
cljs.core._conj_BANG_ = (function _conj_BANG_(tcoll,val){
if((function (){var and__3822__auto____82709 = tcoll;
if(and__3822__auto____82709)
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2;
} else
{return and__3822__auto____82709;
}
})())
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{var x__5531__auto____82710 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____82711 = (cljs.core._conj_BANG_[goog.typeOf(x__5531__auto____82710)]);
if(or__3824__auto____82711)
{return or__3824__auto____82711;
} else
{var or__3824__auto____82712 = (cljs.core._conj_BANG_["_"]);
if(or__3824__auto____82712)
{return or__3824__auto____82712;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientCollection.-conj!",tcoll);
}
}
})().call(null,tcoll,val);
}
});
cljs.core._persistent_BANG_ = (function _persistent_BANG_(tcoll){
if((function (){var and__3822__auto____82717 = tcoll;
if(and__3822__auto____82717)
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1;
} else
{return and__3822__auto____82717;
}
})())
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1(tcoll);
} else
{var x__5531__auto____82718 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____82719 = (cljs.core._persistent_BANG_[goog.typeOf(x__5531__auto____82718)]);
if(or__3824__auto____82719)
{return or__3824__auto____82719;
} else
{var or__3824__auto____82720 = (cljs.core._persistent_BANG_["_"]);
if(or__3824__auto____82720)
{return or__3824__auto____82720;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientCollection.-persistent!",tcoll);
}
}
})().call(null,tcoll);
}
});
cljs.core.ITransientAssociative = {};
cljs.core._assoc_BANG_ = (function _assoc_BANG_(tcoll,key,val){
if((function (){var and__3822__auto____82725 = tcoll;
if(and__3822__auto____82725)
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3;
} else
{return and__3822__auto____82725;
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,key,val);
} else
{var x__5531__auto____82726 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____82727 = (cljs.core._assoc_BANG_[goog.typeOf(x__5531__auto____82726)]);
if(or__3824__auto____82727)
{return or__3824__auto____82727;
} else
{var or__3824__auto____82728 = (cljs.core._assoc_BANG_["_"]);
if(or__3824__auto____82728)
{return or__3824__auto____82728;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientAssociative.-assoc!",tcoll);
}
}
})().call(null,tcoll,key,val);
}
});
cljs.core.ITransientMap = {};
cljs.core._dissoc_BANG_ = (function _dissoc_BANG_(tcoll,key){
if((function (){var and__3822__auto____82733 = tcoll;
if(and__3822__auto____82733)
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2;
} else
{return and__3822__auto____82733;
}
})())
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2(tcoll,key);
} else
{var x__5531__auto____82734 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____82735 = (cljs.core._dissoc_BANG_[goog.typeOf(x__5531__auto____82734)]);
if(or__3824__auto____82735)
{return or__3824__auto____82735;
} else
{var or__3824__auto____82736 = (cljs.core._dissoc_BANG_["_"]);
if(or__3824__auto____82736)
{return or__3824__auto____82736;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientMap.-dissoc!",tcoll);
}
}
})().call(null,tcoll,key);
}
});
cljs.core.ITransientVector = {};
cljs.core._assoc_n_BANG_ = (function _assoc_n_BANG_(tcoll,n,val){
if((function (){var and__3822__auto____82741 = tcoll;
if(and__3822__auto____82741)
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3;
} else
{return and__3822__auto____82741;
}
})())
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,n,val);
} else
{var x__5531__auto____82742 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____82743 = (cljs.core._assoc_n_BANG_[goog.typeOf(x__5531__auto____82742)]);
if(or__3824__auto____82743)
{return or__3824__auto____82743;
} else
{var or__3824__auto____82744 = (cljs.core._assoc_n_BANG_["_"]);
if(or__3824__auto____82744)
{return or__3824__auto____82744;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientVector.-assoc-n!",tcoll);
}
}
})().call(null,tcoll,n,val);
}
});
cljs.core._pop_BANG_ = (function _pop_BANG_(tcoll){
if((function (){var and__3822__auto____82749 = tcoll;
if(and__3822__auto____82749)
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1;
} else
{return and__3822__auto____82749;
}
})())
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1(tcoll);
} else
{var x__5531__auto____82750 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____82751 = (cljs.core._pop_BANG_[goog.typeOf(x__5531__auto____82750)]);
if(or__3824__auto____82751)
{return or__3824__auto____82751;
} else
{var or__3824__auto____82752 = (cljs.core._pop_BANG_["_"]);
if(or__3824__auto____82752)
{return or__3824__auto____82752;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientVector.-pop!",tcoll);
}
}
})().call(null,tcoll);
}
});
cljs.core.ITransientSet = {};
cljs.core._disjoin_BANG_ = (function _disjoin_BANG_(tcoll,v){
if((function (){var and__3822__auto____82757 = tcoll;
if(and__3822__auto____82757)
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2;
} else
{return and__3822__auto____82757;
}
})())
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2(tcoll,v);
} else
{var x__5531__auto____82758 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____82759 = (cljs.core._disjoin_BANG_[goog.typeOf(x__5531__auto____82758)]);
if(or__3824__auto____82759)
{return or__3824__auto____82759;
} else
{var or__3824__auto____82760 = (cljs.core._disjoin_BANG_["_"]);
if(or__3824__auto____82760)
{return or__3824__auto____82760;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientSet.-disjoin!",tcoll);
}
}
})().call(null,tcoll,v);
}
});
cljs.core.IComparable = {};
cljs.core._compare = (function _compare(x,y){
if((function (){var and__3822__auto____82765 = x;
if(and__3822__auto____82765)
{return x.cljs$core$IComparable$_compare$arity$2;
} else
{return and__3822__auto____82765;
}
})())
{return x.cljs$core$IComparable$_compare$arity$2(x,y);
} else
{var x__5531__auto____82766 = (((x == null))?null:x);
return (function (){var or__3824__auto____82767 = (cljs.core._compare[goog.typeOf(x__5531__auto____82766)]);
if(or__3824__auto____82767)
{return or__3824__auto____82767;
} else
{var or__3824__auto____82768 = (cljs.core._compare["_"]);
if(or__3824__auto____82768)
{return or__3824__auto____82768;
} else
{throw cljs.core.missing_protocol.call(null,"IComparable.-compare",x);
}
}
})().call(null,x,y);
}
});
cljs.core.IChunk = {};
cljs.core._drop_first = (function _drop_first(coll){
if((function (){var and__3822__auto____82773 = coll;
if(and__3822__auto____82773)
{return coll.cljs$core$IChunk$_drop_first$arity$1;
} else
{return and__3822__auto____82773;
}
})())
{return coll.cljs$core$IChunk$_drop_first$arity$1(coll);
} else
{var x__5531__auto____82774 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____82775 = (cljs.core._drop_first[goog.typeOf(x__5531__auto____82774)]);
if(or__3824__auto____82775)
{return or__3824__auto____82775;
} else
{var or__3824__auto____82776 = (cljs.core._drop_first["_"]);
if(or__3824__auto____82776)
{return or__3824__auto____82776;
} else
{throw cljs.core.missing_protocol.call(null,"IChunk.-drop-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IChunkedSeq = {};
cljs.core._chunked_first = (function _chunked_first(coll){
if((function (){var and__3822__auto____82781 = coll;
if(and__3822__auto____82781)
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1;
} else
{return and__3822__auto____82781;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1(coll);
} else
{var x__5531__auto____82782 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____82783 = (cljs.core._chunked_first[goog.typeOf(x__5531__auto____82782)]);
if(or__3824__auto____82783)
{return or__3824__auto____82783;
} else
{var or__3824__auto____82784 = (cljs.core._chunked_first["_"]);
if(or__3824__auto____82784)
{return or__3824__auto____82784;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedSeq.-chunked-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._chunked_rest = (function _chunked_rest(coll){
if((function (){var and__3822__auto____82789 = coll;
if(and__3822__auto____82789)
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1;
} else
{return and__3822__auto____82789;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
} else
{var x__5531__auto____82790 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____82791 = (cljs.core._chunked_rest[goog.typeOf(x__5531__auto____82790)]);
if(or__3824__auto____82791)
{return or__3824__auto____82791;
} else
{var or__3824__auto____82792 = (cljs.core._chunked_rest["_"]);
if(or__3824__auto____82792)
{return or__3824__auto____82792;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedSeq.-chunked-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IChunkedNext = {};
cljs.core._chunked_next = (function _chunked_next(coll){
if((function (){var and__3822__auto____82797 = coll;
if(and__3822__auto____82797)
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1;
} else
{return and__3822__auto____82797;
}
})())
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
} else
{var x__5531__auto____82798 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____82799 = (cljs.core._chunked_next[goog.typeOf(x__5531__auto____82798)]);
if(or__3824__auto____82799)
{return or__3824__auto____82799;
} else
{var or__3824__auto____82800 = (cljs.core._chunked_next["_"]);
if(or__3824__auto____82800)
{return or__3824__auto____82800;
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
{if((function (){var G__82804__82805 = coll;
if(G__82804__82805)
{if((function (){var or__3824__auto____82806 = (G__82804__82805.cljs$lang$protocol_mask$partition0$ & 32);
if(or__3824__auto____82806)
{return or__3824__auto____82806;
} else
{return G__82804__82805.cljs$core$ASeq$;
}
})())
{return true;
} else
{if((!G__82804__82805.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__82804__82805);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__82804__82805);
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
{if((function (){var G__82811__82812 = coll;
if(G__82811__82812)
{if((function (){var or__3824__auto____82813 = (G__82811__82812.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____82813)
{return or__3824__auto____82813;
} else
{return G__82811__82812.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__82811__82812.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__82811__82812);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__82811__82812);
}
})())
{return cljs.core._first.call(null,coll);
} else
{var s__82814 = cljs.core.seq.call(null,coll);
if((s__82814 == null))
{return null;
} else
{return cljs.core._first.call(null,s__82814);
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
{if((function (){var G__82819__82820 = coll;
if(G__82819__82820)
{if((function (){var or__3824__auto____82821 = (G__82819__82820.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____82821)
{return or__3824__auto____82821;
} else
{return G__82819__82820.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__82819__82820.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__82819__82820);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__82819__82820);
}
})())
{return cljs.core._rest.call(null,coll);
} else
{var s__82822 = cljs.core.seq.call(null,coll);
if(!((s__82822 == null)))
{return cljs.core._rest.call(null,s__82822);
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
{if((function (){var G__82826__82827 = coll;
if(G__82826__82827)
{if((function (){var or__3824__auto____82828 = (G__82826__82827.cljs$lang$protocol_mask$partition0$ & 128);
if(or__3824__auto____82828)
{return or__3824__auto____82828;
} else
{return G__82826__82827.cljs$core$INext$;
}
})())
{return true;
} else
{if((!G__82826__82827.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.INext,G__82826__82827);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.INext,G__82826__82827);
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
var or__3824__auto____82830 = (x === y);
if(or__3824__auto____82830)
{return or__3824__auto____82830;
} else
{return cljs.core._equiv.call(null,x,y);
}
});
var _EQ___3 = (function() { 
var G__82831__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ_.call(null,x,y)))
{if(cljs.core.next.call(null,more))
{{
var G__82832 = y;
var G__82833 = cljs.core.first.call(null,more);
var G__82834 = cljs.core.next.call(null,more);
x = G__82832;
y = G__82833;
more = G__82834;
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
var G__82831 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__82831__delegate.call(this, x, y, more);
};
G__82831.cljs$lang$maxFixedArity = 2;
G__82831.cljs$lang$applyTo = (function (arglist__82835){
var x = cljs.core.first(arglist__82835);
var y = cljs.core.first(cljs.core.next(arglist__82835));
var more = cljs.core.rest(cljs.core.next(arglist__82835));
return G__82831__delegate(x, y, more);
});
G__82831.cljs$lang$arity$variadic = G__82831__delegate;
return G__82831;
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
var G__82836 = null;
var G__82836__2 = (function (o,k){
return null;
});
var G__82836__3 = (function (o,k,not_found){
return not_found;
});
G__82836 = function(o,k,not_found){
switch(arguments.length){
case 2:
return G__82836__2.call(this,o,k);
case 3:
return G__82836__3.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__82836;
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
var G__82837 = null;
var G__82837__2 = (function (_,f){
return f.call(null);
});
var G__82837__3 = (function (_,f,start){
return start;
});
G__82837 = function(_,f,start){
switch(arguments.length){
case 2:
return G__82837__2.call(this,_,f);
case 3:
return G__82837__3.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__82837;
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
var G__82838 = null;
var G__82838__2 = (function (_,n){
return null;
});
var G__82838__3 = (function (_,n,not_found){
return not_found;
});
G__82838 = function(_,n,not_found){
switch(arguments.length){
case 2:
return G__82838__2.call(this,_,n);
case 3:
return G__82838__3.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__82838;
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
var and__3822__auto____82839 = cljs.core.instance_QMARK_.call(null,Date,other);
if(and__3822__auto____82839)
{return (o.toString() === other.toString());
} else
{return and__3822__auto____82839;
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
var this__82840 = this;
return this__82840.val;
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
var cnt__82853 = cljs.core._count.call(null,cicoll);
if((cnt__82853 === 0))
{return f.call(null);
} else
{var val__82854 = cljs.core._nth.call(null,cicoll,0);
var n__82855 = 1;
while(true){
if((n__82855 < cnt__82853))
{var nval__82856 = f.call(null,val__82854,cljs.core._nth.call(null,cicoll,n__82855));
if(cljs.core.reduced_QMARK_.call(null,nval__82856))
{return cljs.core.deref.call(null,nval__82856);
} else
{{
var G__82865 = nval__82856;
var G__82866 = (n__82855 + 1);
val__82854 = G__82865;
n__82855 = G__82866;
continue;
}
}
} else
{return val__82854;
}
break;
}
}
});
var ci_reduce__3 = (function (cicoll,f,val){
var cnt__82857 = cljs.core._count.call(null,cicoll);
var val__82858 = val;
var n__82859 = 0;
while(true){
if((n__82859 < cnt__82857))
{var nval__82860 = f.call(null,val__82858,cljs.core._nth.call(null,cicoll,n__82859));
if(cljs.core.reduced_QMARK_.call(null,nval__82860))
{return cljs.core.deref.call(null,nval__82860);
} else
{{
var G__82867 = nval__82860;
var G__82868 = (n__82859 + 1);
val__82858 = G__82867;
n__82859 = G__82868;
continue;
}
}
} else
{return val__82858;
}
break;
}
});
var ci_reduce__4 = (function (cicoll,f,val,idx){
var cnt__82861 = cljs.core._count.call(null,cicoll);
var val__82862 = val;
var n__82863 = idx;
while(true){
if((n__82863 < cnt__82861))
{var nval__82864 = f.call(null,val__82862,cljs.core._nth.call(null,cicoll,n__82863));
if(cljs.core.reduced_QMARK_.call(null,nval__82864))
{return cljs.core.deref.call(null,nval__82864);
} else
{{
var G__82869 = nval__82864;
var G__82870 = (n__82863 + 1);
val__82862 = G__82869;
n__82863 = G__82870;
continue;
}
}
} else
{return val__82862;
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
var cnt__82883 = arr.length;
if((arr.length === 0))
{return f.call(null);
} else
{var val__82884 = (arr[0]);
var n__82885 = 1;
while(true){
if((n__82885 < cnt__82883))
{var nval__82886 = f.call(null,val__82884,(arr[n__82885]));
if(cljs.core.reduced_QMARK_.call(null,nval__82886))
{return cljs.core.deref.call(null,nval__82886);
} else
{{
var G__82895 = nval__82886;
var G__82896 = (n__82885 + 1);
val__82884 = G__82895;
n__82885 = G__82896;
continue;
}
}
} else
{return val__82884;
}
break;
}
}
});
var array_reduce__3 = (function (arr,f,val){
var cnt__82887 = arr.length;
var val__82888 = val;
var n__82889 = 0;
while(true){
if((n__82889 < cnt__82887))
{var nval__82890 = f.call(null,val__82888,(arr[n__82889]));
if(cljs.core.reduced_QMARK_.call(null,nval__82890))
{return cljs.core.deref.call(null,nval__82890);
} else
{{
var G__82897 = nval__82890;
var G__82898 = (n__82889 + 1);
val__82888 = G__82897;
n__82889 = G__82898;
continue;
}
}
} else
{return val__82888;
}
break;
}
});
var array_reduce__4 = (function (arr,f,val,idx){
var cnt__82891 = arr.length;
var val__82892 = val;
var n__82893 = idx;
while(true){
if((n__82893 < cnt__82891))
{var nval__82894 = f.call(null,val__82892,(arr[n__82893]));
if(cljs.core.reduced_QMARK_.call(null,nval__82894))
{return cljs.core.deref.call(null,nval__82894);
} else
{{
var G__82899 = nval__82894;
var G__82900 = (n__82893 + 1);
val__82892 = G__82899;
n__82893 = G__82900;
continue;
}
}
} else
{return val__82892;
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
var G__82904__82905 = x;
if(G__82904__82905)
{if((function (){var or__3824__auto____82906 = (G__82904__82905.cljs$lang$protocol_mask$partition0$ & 2);
if(or__3824__auto____82906)
{return or__3824__auto____82906;
} else
{return G__82904__82905.cljs$core$ICounted$;
}
})())
{return true;
} else
{if((!G__82904__82905.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,G__82904__82905);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,G__82904__82905);
}
});
/**
* Returns true if coll implements nth in constant time
*/
cljs.core.indexed_QMARK_ = (function indexed_QMARK_(x){
var G__82910__82911 = x;
if(G__82910__82911)
{if((function (){var or__3824__auto____82912 = (G__82910__82911.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____82912)
{return or__3824__auto____82912;
} else
{return G__82910__82911.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__82910__82911.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__82910__82911);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__82910__82911);
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
var this__82913 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (_){
var this__82914 = this;
if(((this__82914.i + 1) < this__82914.a.length))
{return (new cljs.core.IndexedSeq(this__82914.a,(this__82914.i + 1)));
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__82915 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__82916 = this;
var c__82917 = coll.cljs$core$ICounted$_count$arity$1(coll);
if((c__82917 > 0))
{return (new cljs.core.RSeq(coll,(c__82917 - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.IndexedSeq.prototype.toString = (function (){
var this__82918 = this;
var this__82919 = this;
return cljs.core.pr_str.call(null,this__82919);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__82920 = this;
if(cljs.core.counted_QMARK_.call(null,this__82920.a))
{return cljs.core.ci_reduce.call(null,this__82920.a,f,(this__82920.a[this__82920.i]),(this__82920.i + 1));
} else
{return cljs.core.ci_reduce.call(null,coll,f,(this__82920.a[this__82920.i]),0);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__82921 = this;
if(cljs.core.counted_QMARK_.call(null,this__82921.a))
{return cljs.core.ci_reduce.call(null,this__82921.a,f,start,this__82921.i);
} else
{return cljs.core.ci_reduce.call(null,coll,f,start,0);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__82922 = this;
return this$;
});
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__82923 = this;
return (this__82923.a.length - this__82923.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){
var this__82924 = this;
return (this__82924.a[this__82924.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (_){
var this__82925 = this;
if(((this__82925.i + 1) < this__82925.a.length))
{return (new cljs.core.IndexedSeq(this__82925.a,(this__82925.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__82926 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__82927 = this;
var i__82928 = (n + this__82927.i);
if((i__82928 < this__82927.a.length))
{return (this__82927.a[i__82928]);
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__82929 = this;
var i__82930 = (n + this__82929.i);
if((i__82930 < this__82929.a.length))
{return (this__82929.a[i__82930]);
} else
{return not_found;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__82931 = this;
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
var G__82932 = null;
var G__82932__2 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__82932__3 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__82932 = function(array,f,start){
switch(arguments.length){
case 2:
return G__82932__2.call(this,array,f);
case 3:
return G__82932__3.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__82932;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__82933 = null;
var G__82933__2 = (function (array,k){
return (array[k]);
});
var G__82933__3 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__82933 = function(array,k,not_found){
switch(arguments.length){
case 2:
return G__82933__2.call(this,array,k);
case 3:
return G__82933__3.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__82933;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__82934 = null;
var G__82934__2 = (function (array,n){
if((n < array.length))
{return (array[n]);
} else
{return null;
}
});
var G__82934__3 = (function (array,n,not_found){
if((n < array.length))
{return (array[n]);
} else
{return not_found;
}
});
G__82934 = function(array,n,not_found){
switch(arguments.length){
case 2:
return G__82934__2.call(this,array,n);
case 3:
return G__82934__3.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__82934;
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
var this__82935 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.RSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__82936 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.RSeq.prototype.toString = (function (){
var this__82937 = this;
var this__82938 = this;
return cljs.core.pr_str.call(null,this__82938);
});
cljs.core.RSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__82939 = this;
return coll;
});
cljs.core.RSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__82940 = this;
return (this__82940.i + 1);
});
cljs.core.RSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__82941 = this;
return cljs.core._nth.call(null,this__82941.ci,this__82941.i);
});
cljs.core.RSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__82942 = this;
if((this__82942.i > 0))
{return (new cljs.core.RSeq(this__82942.ci,(this__82942.i - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.RSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__82943 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.RSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,new_meta){
var this__82944 = this;
return (new cljs.core.RSeq(this__82944.ci,this__82944.i,new_meta));
});
cljs.core.RSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__82945 = this;
return this__82945.meta;
});
cljs.core.RSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__82946 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__82946.meta);
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
var sn__82948 = cljs.core.next.call(null,s);
if(!((sn__82948 == null)))
{{
var G__82949 = sn__82948;
s = G__82949;
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
var G__82950__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__82951 = conj.call(null,coll,x);
var G__82952 = cljs.core.first.call(null,xs);
var G__82953 = cljs.core.next.call(null,xs);
coll = G__82951;
x = G__82952;
xs = G__82953;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__82950 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__82950__delegate.call(this, coll, x, xs);
};
G__82950.cljs$lang$maxFixedArity = 2;
G__82950.cljs$lang$applyTo = (function (arglist__82954){
var coll = cljs.core.first(arglist__82954);
var x = cljs.core.first(cljs.core.next(arglist__82954));
var xs = cljs.core.rest(cljs.core.next(arglist__82954));
return G__82950__delegate(coll, x, xs);
});
G__82950.cljs$lang$arity$variadic = G__82950__delegate;
return G__82950;
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
var s__82957 = cljs.core.seq.call(null,coll);
var acc__82958 = 0;
while(true){
if(cljs.core.counted_QMARK_.call(null,s__82957))
{return (acc__82958 + cljs.core._count.call(null,s__82957));
} else
{{
var G__82959 = cljs.core.next.call(null,s__82957);
var G__82960 = (acc__82958 + 1);
s__82957 = G__82959;
acc__82958 = G__82960;
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
var G__82961 = cljs.core.next.call(null,coll);
var G__82962 = (n - 1);
coll = G__82961;
n = G__82962;
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
var G__82963 = cljs.core.next.call(null,coll);
var G__82964 = (n - 1);
var G__82965 = not_found;
coll = G__82963;
n = G__82964;
not_found = G__82965;
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
{if((function (){var G__82972__82973 = coll;
if(G__82972__82973)
{if((function (){var or__3824__auto____82974 = (G__82972__82973.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____82974)
{return or__3824__auto____82974;
} else
{return G__82972__82973.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__82972__82973.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__82972__82973);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__82972__82973);
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
{if((function (){var G__82975__82976 = coll;
if(G__82975__82976)
{if((function (){var or__3824__auto____82977 = (G__82975__82976.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____82977)
{return or__3824__auto____82977;
} else
{return G__82975__82976.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__82975__82976.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__82975__82976);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__82975__82976);
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
var G__82980__delegate = function (coll,k,v,kvs){
while(true){
var ret__82979 = assoc.call(null,coll,k,v);
if(cljs.core.truth_(kvs))
{{
var G__82981 = ret__82979;
var G__82982 = cljs.core.first.call(null,kvs);
var G__82983 = cljs.core.second.call(null,kvs);
var G__82984 = cljs.core.nnext.call(null,kvs);
coll = G__82981;
k = G__82982;
v = G__82983;
kvs = G__82984;
continue;
}
} else
{return ret__82979;
}
break;
}
};
var G__82980 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__82980__delegate.call(this, coll, k, v, kvs);
};
G__82980.cljs$lang$maxFixedArity = 3;
G__82980.cljs$lang$applyTo = (function (arglist__82985){
var coll = cljs.core.first(arglist__82985);
var k = cljs.core.first(cljs.core.next(arglist__82985));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__82985)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__82985)));
return G__82980__delegate(coll, k, v, kvs);
});
G__82980.cljs$lang$arity$variadic = G__82980__delegate;
return G__82980;
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
var G__82988__delegate = function (coll,k,ks){
while(true){
var ret__82987 = dissoc.call(null,coll,k);
if(cljs.core.truth_(ks))
{{
var G__82989 = ret__82987;
var G__82990 = cljs.core.first.call(null,ks);
var G__82991 = cljs.core.next.call(null,ks);
coll = G__82989;
k = G__82990;
ks = G__82991;
continue;
}
} else
{return ret__82987;
}
break;
}
};
var G__82988 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__82988__delegate.call(this, coll, k, ks);
};
G__82988.cljs$lang$maxFixedArity = 2;
G__82988.cljs$lang$applyTo = (function (arglist__82992){
var coll = cljs.core.first(arglist__82992);
var k = cljs.core.first(cljs.core.next(arglist__82992));
var ks = cljs.core.rest(cljs.core.next(arglist__82992));
return G__82988__delegate(coll, k, ks);
});
G__82988.cljs$lang$arity$variadic = G__82988__delegate;
return G__82988;
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
if((function (){var G__82996__82997 = o;
if(G__82996__82997)
{if((function (){var or__3824__auto____82998 = (G__82996__82997.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3824__auto____82998)
{return or__3824__auto____82998;
} else
{return G__82996__82997.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__82996__82997.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__82996__82997);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__82996__82997);
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
var G__83001__delegate = function (coll,k,ks){
while(true){
var ret__83000 = disj.call(null,coll,k);
if(cljs.core.truth_(ks))
{{
var G__83002 = ret__83000;
var G__83003 = cljs.core.first.call(null,ks);
var G__83004 = cljs.core.next.call(null,ks);
coll = G__83002;
k = G__83003;
ks = G__83004;
continue;
}
} else
{return ret__83000;
}
break;
}
};
var G__83001 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__83001__delegate.call(this, coll, k, ks);
};
G__83001.cljs$lang$maxFixedArity = 2;
G__83001.cljs$lang$applyTo = (function (arglist__83005){
var coll = cljs.core.first(arglist__83005);
var k = cljs.core.first(cljs.core.next(arglist__83005));
var ks = cljs.core.rest(cljs.core.next(arglist__83005));
return G__83001__delegate(coll, k, ks);
});
G__83001.cljs$lang$arity$variadic = G__83001__delegate;
return G__83001;
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
var h__83007 = goog.string.hashCode(k);
(cljs.core.string_hash_cache[k] = h__83007);
cljs.core.string_hash_cache_count = (cljs.core.string_hash_cache_count + 1);
return h__83007;
});
cljs.core.check_string_hash_cache = (function check_string_hash_cache(k){
if((cljs.core.string_hash_cache_count > 255))
{cljs.core.string_hash_cache = {};
cljs.core.string_hash_cache_count = 0;
} else
{}
var h__83009 = (cljs.core.string_hash_cache[k]);
if(!((h__83009 == null)))
{return h__83009;
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
if((function (){var and__3822__auto____83011 = goog.isString(o);
if(and__3822__auto____83011)
{return check_cache;
} else
{return and__3822__auto____83011;
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
{var G__83015__83016 = x;
if(G__83015__83016)
{if((function (){var or__3824__auto____83017 = (G__83015__83016.cljs$lang$protocol_mask$partition0$ & 8);
if(or__3824__auto____83017)
{return or__3824__auto____83017;
} else
{return G__83015__83016.cljs$core$ICollection$;
}
})())
{return true;
} else
{if((!G__83015__83016.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,G__83015__83016);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,G__83015__83016);
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
{var G__83021__83022 = x;
if(G__83021__83022)
{if((function (){var or__3824__auto____83023 = (G__83021__83022.cljs$lang$protocol_mask$partition0$ & 4096);
if(or__3824__auto____83023)
{return or__3824__auto____83023;
} else
{return G__83021__83022.cljs$core$ISet$;
}
})())
{return true;
} else
{if((!G__83021__83022.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,G__83021__83022);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,G__83021__83022);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var G__83027__83028 = x;
if(G__83027__83028)
{if((function (){var or__3824__auto____83029 = (G__83027__83028.cljs$lang$protocol_mask$partition0$ & 512);
if(or__3824__auto____83029)
{return or__3824__auto____83029;
} else
{return G__83027__83028.cljs$core$IAssociative$;
}
})())
{return true;
} else
{if((!G__83027__83028.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,G__83027__83028);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,G__83027__83028);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var G__83033__83034 = x;
if(G__83033__83034)
{if((function (){var or__3824__auto____83035 = (G__83033__83034.cljs$lang$protocol_mask$partition0$ & 16777216);
if(or__3824__auto____83035)
{return or__3824__auto____83035;
} else
{return G__83033__83034.cljs$core$ISequential$;
}
})())
{return true;
} else
{if((!G__83033__83034.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,G__83033__83034);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,G__83033__83034);
}
});
/**
* Returns true if coll satisfies IReduce
*/
cljs.core.reduceable_QMARK_ = (function reduceable_QMARK_(x){
var G__83039__83040 = x;
if(G__83039__83040)
{if((function (){var or__3824__auto____83041 = (G__83039__83040.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____83041)
{return or__3824__auto____83041;
} else
{return G__83039__83040.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__83039__83040.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__83039__83040);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__83039__83040);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if((x == null))
{return false;
} else
{var G__83045__83046 = x;
if(G__83045__83046)
{if((function (){var or__3824__auto____83047 = (G__83045__83046.cljs$lang$protocol_mask$partition0$ & 1024);
if(or__3824__auto____83047)
{return or__3824__auto____83047;
} else
{return G__83045__83046.cljs$core$IMap$;
}
})())
{return true;
} else
{if((!G__83045__83046.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,G__83045__83046);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,G__83045__83046);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var G__83051__83052 = x;
if(G__83051__83052)
{if((function (){var or__3824__auto____83053 = (G__83051__83052.cljs$lang$protocol_mask$partition0$ & 16384);
if(or__3824__auto____83053)
{return or__3824__auto____83053;
} else
{return G__83051__83052.cljs$core$IVector$;
}
})())
{return true;
} else
{if((!G__83051__83052.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,G__83051__83052);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,G__83051__83052);
}
});
cljs.core.chunked_seq_QMARK_ = (function chunked_seq_QMARK_(x){
var G__83057__83058 = x;
if(G__83057__83058)
{if((function (){var or__3824__auto____83059 = (G__83057__83058.cljs$lang$protocol_mask$partition1$ & 512);
if(or__3824__auto____83059)
{return or__3824__auto____83059;
} else
{return G__83057__83058.cljs$core$IChunkedSeq$;
}
})())
{return true;
} else
{if((!G__83057__83058.cljs$lang$protocol_mask$partition1$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedSeq,G__83057__83058);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedSeq,G__83057__83058);
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
var G__83060__delegate = function (keyvals){
return cljs.core.apply.call(null,goog.object.create,keyvals);
};
var G__83060 = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__83060__delegate.call(this, keyvals);
};
G__83060.cljs$lang$maxFixedArity = 0;
G__83060.cljs$lang$applyTo = (function (arglist__83061){
var keyvals = cljs.core.seq(arglist__83061);;
return G__83060__delegate(keyvals);
});
G__83060.cljs$lang$arity$variadic = G__83060__delegate;
return G__83060;
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
var keys__83063 = [];
goog.object.forEach(obj,(function (val,key,obj){
return keys__83063.push(key);
}));
return keys__83063;
});
cljs.core.js_delete = (function js_delete(obj,key){
return delete obj[key];
});
cljs.core.array_copy = (function array_copy(from,i,to,j,len){
var i__83067 = i;
var j__83068 = j;
var len__83069 = len;
while(true){
if((len__83069 === 0))
{return to;
} else
{(to[j__83068] = (from[i__83067]));
{
var G__83070 = (i__83067 + 1);
var G__83071 = (j__83068 + 1);
var G__83072 = (len__83069 - 1);
i__83067 = G__83070;
j__83068 = G__83071;
len__83069 = G__83072;
continue;
}
}
break;
}
});
cljs.core.array_copy_downward = (function array_copy_downward(from,i,to,j,len){
var i__83076 = (i + (len - 1));
var j__83077 = (j + (len - 1));
var len__83078 = len;
while(true){
if((len__83078 === 0))
{return to;
} else
{(to[j__83077] = (from[i__83076]));
{
var G__83079 = (i__83076 - 1);
var G__83080 = (j__83077 - 1);
var G__83081 = (len__83078 - 1);
i__83076 = G__83079;
j__83077 = G__83080;
len__83078 = G__83081;
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
{var G__83085__83086 = s;
if(G__83085__83086)
{if((function (){var or__3824__auto____83087 = (G__83085__83086.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____83087)
{return or__3824__auto____83087;
} else
{return G__83085__83086.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__83085__83086.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__83085__83086);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__83085__83086);
}
}
});
/**
* Return true if s satisfies ISeqable
*/
cljs.core.seqable_QMARK_ = (function seqable_QMARK_(s){
var G__83091__83092 = s;
if(G__83091__83092)
{if((function (){var or__3824__auto____83093 = (G__83091__83092.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3824__auto____83093)
{return or__3824__auto____83093;
} else
{return G__83091__83092.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__83091__83092.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__83091__83092);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__83091__83092);
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
var and__3822__auto____83096 = goog.isString(x);
if(and__3822__auto____83096)
{return !((function (){var or__3824__auto____83097 = (x.charAt(0) === "\uFDD0");
if(or__3824__auto____83097)
{return or__3824__auto____83097;
} else
{return (x.charAt(0) === "\uFDD1");
}
})());
} else
{return and__3822__auto____83096;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3822__auto____83099 = goog.isString(x);
if(and__3822__auto____83099)
{return (x.charAt(0) === "\uFDD0");
} else
{return and__3822__auto____83099;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3822__auto____83101 = goog.isString(x);
if(and__3822__auto____83101)
{return (x.charAt(0) === "\uFDD1");
} else
{return and__3822__auto____83101;
}
});
cljs.core.number_QMARK_ = (function number_QMARK_(n){
return goog.isNumber(n);
});
cljs.core.fn_QMARK_ = (function fn_QMARK_(f){
return goog.isFunction(f);
});
cljs.core.ifn_QMARK_ = (function ifn_QMARK_(f){
var or__3824__auto____83106 = cljs.core.fn_QMARK_.call(null,f);
if(or__3824__auto____83106)
{return or__3824__auto____83106;
} else
{var G__83107__83108 = f;
if(G__83107__83108)
{if((function (){var or__3824__auto____83109 = (G__83107__83108.cljs$lang$protocol_mask$partition0$ & 1);
if(or__3824__auto____83109)
{return or__3824__auto____83109;
} else
{return G__83107__83108.cljs$core$IFn$;
}
})())
{return true;
} else
{if((!G__83107__83108.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IFn,G__83107__83108);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IFn,G__83107__83108);
}
}
});
/**
* Returns true if n is an integer.
*/
cljs.core.integer_QMARK_ = (function integer_QMARK_(n){
var and__3822__auto____83113 = cljs.core.number_QMARK_.call(null,n);
if(and__3822__auto____83113)
{var and__3822__auto____83114 = !(isNaN(n));
if(and__3822__auto____83114)
{var and__3822__auto____83115 = !((n === Infinity));
if(and__3822__auto____83115)
{return (parseFloat(n) === parseInt(n,10));
} else
{return and__3822__auto____83115;
}
} else
{return and__3822__auto____83114;
}
} else
{return and__3822__auto____83113;
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
if((function (){var and__3822__auto____83118 = !((coll == null));
if(and__3822__auto____83118)
{var and__3822__auto____83119 = cljs.core.associative_QMARK_.call(null,coll);
if(and__3822__auto____83119)
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3822__auto____83119;
}
} else
{return and__3822__auto____83118;
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
var G__83128__delegate = function (x,y,more){
if(!(cljs.core._EQ_.call(null,x,y)))
{var s__83124 = cljs.core.PersistentHashSet.fromArray([y,x]);
var xs__83125 = more;
while(true){
var x__83126 = cljs.core.first.call(null,xs__83125);
var etc__83127 = cljs.core.next.call(null,xs__83125);
if(cljs.core.truth_(xs__83125))
{if(cljs.core.contains_QMARK_.call(null,s__83124,x__83126))
{return false;
} else
{{
var G__83129 = cljs.core.conj.call(null,s__83124,x__83126);
var G__83130 = etc__83127;
s__83124 = G__83129;
xs__83125 = G__83130;
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
var G__83128 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__83128__delegate.call(this, x, y, more);
};
G__83128.cljs$lang$maxFixedArity = 2;
G__83128.cljs$lang$applyTo = (function (arglist__83131){
var x = cljs.core.first(arglist__83131);
var y = cljs.core.first(cljs.core.next(arglist__83131));
var more = cljs.core.rest(cljs.core.next(arglist__83131));
return G__83128__delegate(x, y, more);
});
G__83128.cljs$lang$arity$variadic = G__83128__delegate;
return G__83128;
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
{if((function (){var G__83135__83136 = x;
if(G__83135__83136)
{if((function (){var or__3824__auto____83137 = (G__83135__83136.cljs$lang$protocol_mask$partition1$ & 2048);
if(or__3824__auto____83137)
{return or__3824__auto____83137;
} else
{return G__83135__83136.cljs$core$IComparable$;
}
})())
{return true;
} else
{if((!G__83135__83136.cljs$lang$protocol_mask$partition1$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IComparable,G__83135__83136);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IComparable,G__83135__83136);
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
var xl__83142 = cljs.core.count.call(null,xs);
var yl__83143 = cljs.core.count.call(null,ys);
if((xl__83142 < yl__83143))
{return -1;
} else
{if((xl__83142 > yl__83143))
{return 1;
} else
{if("\uFDD0'else")
{return compare_indexed.call(null,xs,ys,xl__83142,0);
} else
{return null;
}
}
}
});
var compare_indexed__4 = (function (xs,ys,len,n){
while(true){
var d__83144 = cljs.core.compare.call(null,cljs.core.nth.call(null,xs,n),cljs.core.nth.call(null,ys,n));
if((function (){var and__3822__auto____83145 = (d__83144 === 0);
if(and__3822__auto____83145)
{return ((n + 1) < len);
} else
{return and__3822__auto____83145;
}
})())
{{
var G__83146 = xs;
var G__83147 = ys;
var G__83148 = len;
var G__83149 = (n + 1);
xs = G__83146;
ys = G__83147;
len = G__83148;
n = G__83149;
continue;
}
} else
{return d__83144;
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
var r__83151 = f.call(null,x,y);
if(cljs.core.number_QMARK_.call(null,r__83151))
{return r__83151;
} else
{if(cljs.core.truth_(r__83151))
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
{var a__83153 = cljs.core.to_array.call(null,coll);
goog.array.stableSort(a__83153,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__83153);
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
var temp__3971__auto____83159 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____83159)
{var s__83160 = temp__3971__auto____83159;
return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__83160),cljs.core.next.call(null,s__83160));
} else
{return f.call(null);
}
});
var seq_reduce__3 = (function (f,val,coll){
var val__83161 = val;
var coll__83162 = cljs.core.seq.call(null,coll);
while(true){
if(coll__83162)
{var nval__83163 = f.call(null,val__83161,cljs.core.first.call(null,coll__83162));
if(cljs.core.reduced_QMARK_.call(null,nval__83163))
{return cljs.core.deref.call(null,nval__83163);
} else
{{
var G__83164 = nval__83163;
var G__83165 = cljs.core.next.call(null,coll__83162);
val__83161 = G__83164;
coll__83162 = G__83165;
continue;
}
}
} else
{return val__83161;
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
var a__83167 = cljs.core.to_array.call(null,coll);
goog.array.shuffle(a__83167);
return cljs.core.vec.call(null,a__83167);
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
if((function (){var G__83174__83175 = coll;
if(G__83174__83175)
{if((function (){var or__3824__auto____83176 = (G__83174__83175.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____83176)
{return or__3824__auto____83176;
} else
{return G__83174__83175.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__83174__83175.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__83174__83175);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__83174__83175);
}
})())
{return cljs.core._reduce.call(null,coll,f);
} else
{return cljs.core.seq_reduce.call(null,f,coll);
}
});
var reduce__3 = (function (f,val,coll){
if((function (){var G__83177__83178 = coll;
if(G__83177__83178)
{if((function (){var or__3824__auto____83179 = (G__83177__83178.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____83179)
{return or__3824__auto____83179;
} else
{return G__83177__83178.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__83177__83178.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__83177__83178);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__83177__83178);
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
var G__83180__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__83180 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__83180__delegate.call(this, x, y, more);
};
G__83180.cljs$lang$maxFixedArity = 2;
G__83180.cljs$lang$applyTo = (function (arglist__83181){
var x = cljs.core.first(arglist__83181);
var y = cljs.core.first(cljs.core.next(arglist__83181));
var more = cljs.core.rest(cljs.core.next(arglist__83181));
return G__83180__delegate(x, y, more);
});
G__83180.cljs$lang$arity$variadic = G__83180__delegate;
return G__83180;
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
var G__83182__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__83182 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__83182__delegate.call(this, x, y, more);
};
G__83182.cljs$lang$maxFixedArity = 2;
G__83182.cljs$lang$applyTo = (function (arglist__83183){
var x = cljs.core.first(arglist__83183);
var y = cljs.core.first(cljs.core.next(arglist__83183));
var more = cljs.core.rest(cljs.core.next(arglist__83183));
return G__83182__delegate(x, y, more);
});
G__83182.cljs$lang$arity$variadic = G__83182__delegate;
return G__83182;
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
var G__83184__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__83184 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__83184__delegate.call(this, x, y, more);
};
G__83184.cljs$lang$maxFixedArity = 2;
G__83184.cljs$lang$applyTo = (function (arglist__83185){
var x = cljs.core.first(arglist__83185);
var y = cljs.core.first(cljs.core.next(arglist__83185));
var more = cljs.core.rest(cljs.core.next(arglist__83185));
return G__83184__delegate(x, y, more);
});
G__83184.cljs$lang$arity$variadic = G__83184__delegate;
return G__83184;
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
var G__83186__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__83186 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__83186__delegate.call(this, x, y, more);
};
G__83186.cljs$lang$maxFixedArity = 2;
G__83186.cljs$lang$applyTo = (function (arglist__83187){
var x = cljs.core.first(arglist__83187);
var y = cljs.core.first(cljs.core.next(arglist__83187));
var more = cljs.core.rest(cljs.core.next(arglist__83187));
return G__83186__delegate(x, y, more);
});
G__83186.cljs$lang$arity$variadic = G__83186__delegate;
return G__83186;
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
var G__83188__delegate = function (x,y,more){
while(true){
if((x < y))
{if(cljs.core.next.call(null,more))
{{
var G__83189 = y;
var G__83190 = cljs.core.first.call(null,more);
var G__83191 = cljs.core.next.call(null,more);
x = G__83189;
y = G__83190;
more = G__83191;
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
var G__83188 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__83188__delegate.call(this, x, y, more);
};
G__83188.cljs$lang$maxFixedArity = 2;
G__83188.cljs$lang$applyTo = (function (arglist__83192){
var x = cljs.core.first(arglist__83192);
var y = cljs.core.first(cljs.core.next(arglist__83192));
var more = cljs.core.rest(cljs.core.next(arglist__83192));
return G__83188__delegate(x, y, more);
});
G__83188.cljs$lang$arity$variadic = G__83188__delegate;
return G__83188;
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
var G__83193__delegate = function (x,y,more){
while(true){
if((x <= y))
{if(cljs.core.next.call(null,more))
{{
var G__83194 = y;
var G__83195 = cljs.core.first.call(null,more);
var G__83196 = cljs.core.next.call(null,more);
x = G__83194;
y = G__83195;
more = G__83196;
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
var G__83193 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__83193__delegate.call(this, x, y, more);
};
G__83193.cljs$lang$maxFixedArity = 2;
G__83193.cljs$lang$applyTo = (function (arglist__83197){
var x = cljs.core.first(arglist__83197);
var y = cljs.core.first(cljs.core.next(arglist__83197));
var more = cljs.core.rest(cljs.core.next(arglist__83197));
return G__83193__delegate(x, y, more);
});
G__83193.cljs$lang$arity$variadic = G__83193__delegate;
return G__83193;
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
var G__83198__delegate = function (x,y,more){
while(true){
if((x > y))
{if(cljs.core.next.call(null,more))
{{
var G__83199 = y;
var G__83200 = cljs.core.first.call(null,more);
var G__83201 = cljs.core.next.call(null,more);
x = G__83199;
y = G__83200;
more = G__83201;
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
var G__83198 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__83198__delegate.call(this, x, y, more);
};
G__83198.cljs$lang$maxFixedArity = 2;
G__83198.cljs$lang$applyTo = (function (arglist__83202){
var x = cljs.core.first(arglist__83202);
var y = cljs.core.first(cljs.core.next(arglist__83202));
var more = cljs.core.rest(cljs.core.next(arglist__83202));
return G__83198__delegate(x, y, more);
});
G__83198.cljs$lang$arity$variadic = G__83198__delegate;
return G__83198;
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
var G__83203__delegate = function (x,y,more){
while(true){
if((x >= y))
{if(cljs.core.next.call(null,more))
{{
var G__83204 = y;
var G__83205 = cljs.core.first.call(null,more);
var G__83206 = cljs.core.next.call(null,more);
x = G__83204;
y = G__83205;
more = G__83206;
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
var G__83203 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__83203__delegate.call(this, x, y, more);
};
G__83203.cljs$lang$maxFixedArity = 2;
G__83203.cljs$lang$applyTo = (function (arglist__83207){
var x = cljs.core.first(arglist__83207);
var y = cljs.core.first(cljs.core.next(arglist__83207));
var more = cljs.core.rest(cljs.core.next(arglist__83207));
return G__83203__delegate(x, y, more);
});
G__83203.cljs$lang$arity$variadic = G__83203__delegate;
return G__83203;
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
var G__83208__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__83208 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__83208__delegate.call(this, x, y, more);
};
G__83208.cljs$lang$maxFixedArity = 2;
G__83208.cljs$lang$applyTo = (function (arglist__83209){
var x = cljs.core.first(arglist__83209);
var y = cljs.core.first(cljs.core.next(arglist__83209));
var more = cljs.core.rest(cljs.core.next(arglist__83209));
return G__83208__delegate(x, y, more);
});
G__83208.cljs$lang$arity$variadic = G__83208__delegate;
return G__83208;
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
var G__83210__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__83210 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__83210__delegate.call(this, x, y, more);
};
G__83210.cljs$lang$maxFixedArity = 2;
G__83210.cljs$lang$applyTo = (function (arglist__83211){
var x = cljs.core.first(arglist__83211);
var y = cljs.core.first(cljs.core.next(arglist__83211));
var more = cljs.core.rest(cljs.core.next(arglist__83211));
return G__83210__delegate(x, y, more);
});
G__83210.cljs$lang$arity$variadic = G__83210__delegate;
return G__83210;
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
var rem__83213 = (n % d);
return cljs.core.fix.call(null,((n - rem__83213) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__83215 = cljs.core.quot.call(null,n,d);
return (n - (d * q__83215));
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
var v__83218 = (v - ((v >> 1) & 1431655765));
var v__83219 = ((v__83218 & 858993459) + ((v__83218 >> 2) & 858993459));
return ((((v__83219 + (v__83219 >> 4)) & 252645135) * 16843009) >> 24);
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
var G__83220__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.next.call(null,more))
{{
var G__83221 = y;
var G__83222 = cljs.core.first.call(null,more);
var G__83223 = cljs.core.next.call(null,more);
x = G__83221;
y = G__83222;
more = G__83223;
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
var G__83220 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__83220__delegate.call(this, x, y, more);
};
G__83220.cljs$lang$maxFixedArity = 2;
G__83220.cljs$lang$applyTo = (function (arglist__83224){
var x = cljs.core.first(arglist__83224);
var y = cljs.core.first(cljs.core.next(arglist__83224));
var more = cljs.core.rest(cljs.core.next(arglist__83224));
return G__83220__delegate(x, y, more);
});
G__83220.cljs$lang$arity$variadic = G__83220__delegate;
return G__83220;
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
var n__83228 = n;
var xs__83229 = cljs.core.seq.call(null,coll);
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____83230 = xs__83229;
if(and__3822__auto____83230)
{return (n__83228 > 0);
} else
{return and__3822__auto____83230;
}
})()))
{{
var G__83231 = (n__83228 - 1);
var G__83232 = cljs.core.next.call(null,xs__83229);
n__83228 = G__83231;
xs__83229 = G__83232;
continue;
}
} else
{return xs__83229;
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
var G__83233__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__83234 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__83235 = cljs.core.next.call(null,more);
sb = G__83234;
more = G__83235;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__83233 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__83233__delegate.call(this, x, ys);
};
G__83233.cljs$lang$maxFixedArity = 1;
G__83233.cljs$lang$applyTo = (function (arglist__83236){
var x = cljs.core.first(arglist__83236);
var ys = cljs.core.rest(arglist__83236);
return G__83233__delegate(x, ys);
});
G__83233.cljs$lang$arity$variadic = G__83233__delegate;
return G__83233;
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
var G__83237__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__83238 = sb.append(str.call(null,cljs.core.first.call(null,more)));
var G__83239 = cljs.core.next.call(null,more);
sb = G__83238;
more = G__83239;
continue;
}
} else
{return cljs.core.str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str.call(null,x))),ys);
};
var G__83237 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__83237__delegate.call(this, x, ys);
};
G__83237.cljs$lang$maxFixedArity = 1;
G__83237.cljs$lang$applyTo = (function (arglist__83240){
var x = cljs.core.first(arglist__83240);
var ys = cljs.core.rest(arglist__83240);
return G__83237__delegate(x, ys);
});
G__83237.cljs$lang$arity$variadic = G__83237__delegate;
return G__83237;
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
var args__83244 = cljs.core.map.call(null,(function (x){
if((function (){var or__3824__auto____83243 = cljs.core.keyword_QMARK_.call(null,x);
if(or__3824__auto____83243)
{return or__3824__auto____83243;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{return [cljs.core.str(x)].join('');
} else
{return x;
}
}),args);
return cljs.core.apply.call(null,goog.string.format,fmt,args__83244);
};
var format = function (fmt,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return format__delegate.call(this, fmt, args);
};
format.cljs$lang$maxFixedArity = 1;
format.cljs$lang$applyTo = (function (arglist__83245){
var fmt = cljs.core.first(arglist__83245);
var args = cljs.core.rest(arglist__83245);
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
return cljs.core.boolean$.call(null,((cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__83248 = cljs.core.seq.call(null,x);
var ys__83249 = cljs.core.seq.call(null,y);
while(true){
if((xs__83248 == null))
{return (ys__83249 == null);
} else
{if((ys__83249 == null))
{return false;
} else
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__83248),cljs.core.first.call(null,ys__83249)))
{{
var G__83250 = cljs.core.next.call(null,xs__83248);
var G__83251 = cljs.core.next.call(null,ys__83249);
xs__83248 = G__83250;
ys__83249 = G__83251;
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
return cljs.core.reduce.call(null,(function (p1__83252_SHARP_,p2__83253_SHARP_){
return cljs.core.hash_combine.call(null,p1__83252_SHARP_,cljs.core.hash.call(null,p2__83253_SHARP_,false));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll),false),cljs.core.next.call(null,coll));
});
cljs.core.hash_imap = (function hash_imap(m){
var h__83257 = 0;
var s__83258 = cljs.core.seq.call(null,m);
while(true){
if(s__83258)
{var e__83259 = cljs.core.first.call(null,s__83258);
{
var G__83260 = ((h__83257 + (cljs.core.hash.call(null,cljs.core.key.call(null,e__83259)) ^ cljs.core.hash.call(null,cljs.core.val.call(null,e__83259)))) % 4503599627370496);
var G__83261 = cljs.core.next.call(null,s__83258);
h__83257 = G__83260;
s__83258 = G__83261;
continue;
}
} else
{return h__83257;
}
break;
}
});
cljs.core.hash_iset = (function hash_iset(s){
var h__83265 = 0;
var s__83266 = cljs.core.seq.call(null,s);
while(true){
if(s__83266)
{var e__83267 = cljs.core.first.call(null,s__83266);
{
var G__83268 = ((h__83265 + cljs.core.hash.call(null,e__83267)) % 4503599627370496);
var G__83269 = cljs.core.next.call(null,s__83266);
h__83265 = G__83268;
s__83266 = G__83269;
continue;
}
} else
{return h__83265;
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
var G__83277__83278 = cljs.core.seq.call(null,fn_map);
while(true){
if(G__83277__83278)
{var vec__83279__83280 = cljs.core.first.call(null,G__83277__83278);
var key_name__83281 = cljs.core.nth.call(null,vec__83279__83280,0,null);
var f__83282 = cljs.core.nth.call(null,vec__83279__83280,1,null);
var str_name__83283 = cljs.core.name.call(null,key_name__83281);
(obj[str_name__83283] = f__83282);
{
var G__83284 = cljs.core.next.call(null,G__83277__83278);
G__83277__83278 = G__83284;
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
var this__83285 = this;
var h__5347__auto____83286 = this__83285.__hash;
if(!((h__5347__auto____83286 == null)))
{return h__5347__auto____83286;
} else
{var h__5347__auto____83287 = cljs.core.hash_coll.call(null,coll);
this__83285.__hash = h__5347__auto____83287;
return h__5347__auto____83287;
}
});
cljs.core.List.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__83288 = this;
if((this__83288.count === 1))
{return null;
} else
{return this__83288.rest;
}
});
cljs.core.List.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__83289 = this;
return (new cljs.core.List(this__83289.meta,o,coll,(this__83289.count + 1),null));
});
cljs.core.List.prototype.toString = (function (){
var this__83290 = this;
var this__83291 = this;
return cljs.core.pr_str.call(null,this__83291);
});
cljs.core.List.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__83292 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__83293 = this;
return this__83293.count;
});
cljs.core.List.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__83294 = this;
return this__83294.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__83295 = this;
return coll.cljs$core$ISeq$_rest$arity$1(coll);
});
cljs.core.List.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__83296 = this;
return this__83296.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__83297 = this;
if((this__83297.count === 1))
{return cljs.core.List.EMPTY;
} else
{return this__83297.rest;
}
});
cljs.core.List.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__83298 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__83299 = this;
return (new cljs.core.List(meta,this__83299.first,this__83299.rest,this__83299.count,this__83299.__hash));
});
cljs.core.List.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__83300 = this;
return this__83300.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__83301 = this;
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
var this__83302 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__83303 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__83304 = this;
return (new cljs.core.List(this__83304.meta,o,null,1,null));
});
cljs.core.EmptyList.prototype.toString = (function (){
var this__83305 = this;
var this__83306 = this;
return cljs.core.pr_str.call(null,this__83306);
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__83307 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__83308 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__83309 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__83310 = this;
throw (new Error("Can't pop empty list"));
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__83311 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__83312 = this;
return cljs.core.List.EMPTY;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__83313 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__83314 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__83315 = this;
return this__83315.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__83316 = this;
return coll;
});
cljs.core.EmptyList;
cljs.core.List.EMPTY = (new cljs.core.EmptyList(null));
cljs.core.reversible_QMARK_ = (function reversible_QMARK_(coll){
var G__83320__83321 = coll;
if(G__83320__83321)
{if((function (){var or__3824__auto____83322 = (G__83320__83321.cljs$lang$protocol_mask$partition0$ & 134217728);
if(or__3824__auto____83322)
{return or__3824__auto____83322;
} else
{return G__83320__83321.cljs$core$IReversible$;
}
})())
{return true;
} else
{if((!G__83320__83321.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReversible,G__83320__83321);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReversible,G__83320__83321);
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
var G__83323__delegate = function (x,y,z,items){
return cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,cljs.core.reverse.call(null,items)),z),y),x);
};
var G__83323 = function (x,y,z,var_args){
var items = null;
if (goog.isDef(var_args)) {
  items = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__83323__delegate.call(this, x, y, z, items);
};
G__83323.cljs$lang$maxFixedArity = 3;
G__83323.cljs$lang$applyTo = (function (arglist__83324){
var x = cljs.core.first(arglist__83324);
var y = cljs.core.first(cljs.core.next(arglist__83324));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__83324)));
var items = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__83324)));
return G__83323__delegate(x, y, z, items);
});
G__83323.cljs$lang$arity$variadic = G__83323__delegate;
return G__83323;
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
var this__83325 = this;
var h__5347__auto____83326 = this__83325.__hash;
if(!((h__5347__auto____83326 == null)))
{return h__5347__auto____83326;
} else
{var h__5347__auto____83327 = cljs.core.hash_coll.call(null,coll);
this__83325.__hash = h__5347__auto____83327;
return h__5347__auto____83327;
}
});
cljs.core.Cons.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__83328 = this;
if((this__83328.rest == null))
{return null;
} else
{return cljs.core._seq.call(null,this__83328.rest);
}
});
cljs.core.Cons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__83329 = this;
return (new cljs.core.Cons(null,o,coll,this__83329.__hash));
});
cljs.core.Cons.prototype.toString = (function (){
var this__83330 = this;
var this__83331 = this;
return cljs.core.pr_str.call(null,this__83331);
});
cljs.core.Cons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__83332 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__83333 = this;
return this__83333.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__83334 = this;
if((this__83334.rest == null))
{return cljs.core.List.EMPTY;
} else
{return this__83334.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__83335 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__83336 = this;
return (new cljs.core.Cons(meta,this__83336.first,this__83336.rest,this__83336.__hash));
});
cljs.core.Cons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__83337 = this;
return this__83337.meta;
});
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__83338 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__83338.meta);
});
cljs.core.Cons;
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,coll){
if((function (){var or__3824__auto____83343 = (coll == null);
if(or__3824__auto____83343)
{return or__3824__auto____83343;
} else
{var G__83344__83345 = coll;
if(G__83344__83345)
{if((function (){var or__3824__auto____83346 = (G__83344__83345.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____83346)
{return or__3824__auto____83346;
} else
{return G__83344__83345.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__83344__83345.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__83344__83345);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__83344__83345);
}
}
})())
{return (new cljs.core.Cons(null,x,coll,null));
} else
{return (new cljs.core.Cons(null,x,cljs.core.seq.call(null,coll),null));
}
});
cljs.core.list_QMARK_ = (function list_QMARK_(x){
var G__83350__83351 = x;
if(G__83350__83351)
{if((function (){var or__3824__auto____83352 = (G__83350__83351.cljs$lang$protocol_mask$partition0$ & 33554432);
if(or__3824__auto____83352)
{return or__3824__auto____83352;
} else
{return G__83350__83351.cljs$core$IList$;
}
})())
{return true;
} else
{if((!G__83350__83351.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IList,G__83350__83351);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IList,G__83350__83351);
}
});
(cljs.core.IReduce["string"] = true);
(cljs.core._reduce["string"] = (function() {
var G__83353 = null;
var G__83353__2 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__83353__3 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__83353 = function(string,f,start){
switch(arguments.length){
case 2:
return G__83353__2.call(this,string,f);
case 3:
return G__83353__3.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__83353;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__83354 = null;
var G__83354__2 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__83354__3 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__83354 = function(string,k,not_found){
switch(arguments.length){
case 2:
return G__83354__2.call(this,string,k);
case 3:
return G__83354__3.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__83354;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__83355 = null;
var G__83355__2 = (function (string,n){
if((n < cljs.core._count.call(null,string)))
{return string.charAt(n);
} else
{return null;
}
});
var G__83355__3 = (function (string,n,not_found){
if((n < cljs.core._count.call(null,string)))
{return string.charAt(n);
} else
{return not_found;
}
});
G__83355 = function(string,n,not_found){
switch(arguments.length){
case 2:
return G__83355__2.call(this,string,n);
case 3:
return G__83355__3.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__83355;
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
var G__83367 = null;
var G__83367__2 = (function (this_sym83358,coll){
var this__83360 = this;
var this_sym83358__83361 = this;
var ___83362 = this_sym83358__83361;
if((coll == null))
{return null;
} else
{var strobj__83363 = coll.strobj;
if((strobj__83363 == null))
{return cljs.core._lookup.call(null,coll,this__83360.k,null);
} else
{return (strobj__83363[this__83360.k]);
}
}
});
var G__83367__3 = (function (this_sym83359,coll,not_found){
var this__83360 = this;
var this_sym83359__83364 = this;
var ___83365 = this_sym83359__83364;
if((coll == null))
{return not_found;
} else
{return cljs.core._lookup.call(null,coll,this__83360.k,not_found);
}
});
G__83367 = function(this_sym83359,coll,not_found){
switch(arguments.length){
case 2:
return G__83367__2.call(this,this_sym83359,coll);
case 3:
return G__83367__3.call(this,this_sym83359,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__83367;
})()
;
cljs.core.Keyword.prototype.apply = (function (this_sym83356,args83357){
var this__83366 = this;
return this_sym83356.call.apply(this_sym83356,[this_sym83356].concat(args83357.slice()));
});
cljs.core.Keyword;
String.prototype.cljs$core$IFn$ = true;
String.prototype.call = (function() {
var G__83376 = null;
var G__83376__2 = (function (this_sym83370,coll){
var this_sym83370__83372 = this;
var this__83373 = this_sym83370__83372;
return cljs.core._lookup.call(null,coll,this__83373.toString(),null);
});
var G__83376__3 = (function (this_sym83371,coll,not_found){
var this_sym83371__83374 = this;
var this__83375 = this_sym83371__83374;
return cljs.core._lookup.call(null,coll,this__83375.toString(),not_found);
});
G__83376 = function(this_sym83371,coll,not_found){
switch(arguments.length){
case 2:
return G__83376__2.call(this,this_sym83371,coll);
case 3:
return G__83376__3.call(this,this_sym83371,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__83376;
})()
;
String.prototype.apply = (function (this_sym83368,args83369){
return this_sym83368.call.apply(this_sym83368,[this_sym83368].concat(args83369.slice()));
});
String.prototype.apply = (function (s,args){
if((cljs.core.count.call(null,args) < 2))
{return cljs.core._lookup.call(null,(args[0]),s,null);
} else
{return cljs.core._lookup.call(null,(args[0]),s,(args[1]));
}
});
cljs.core.lazy_seq_value = (function lazy_seq_value(lazy_seq){
var x__83378 = lazy_seq.x;
if(lazy_seq.realized)
{return x__83378;
} else
{lazy_seq.x = x__83378.call(null);
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
var this__83379 = this;
var h__5347__auto____83380 = this__83379.__hash;
if(!((h__5347__auto____83380 == null)))
{return h__5347__auto____83380;
} else
{var h__5347__auto____83381 = cljs.core.hash_coll.call(null,coll);
this__83379.__hash = h__5347__auto____83381;
return h__5347__auto____83381;
}
});
cljs.core.LazySeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__83382 = this;
return cljs.core._seq.call(null,coll.cljs$core$ISeq$_rest$arity$1(coll));
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__83383 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.toString = (function (){
var this__83384 = this;
var this__83385 = this;
return cljs.core.pr_str.call(null,this__83385);
});
cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__83386 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__83387 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__83388 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__83389 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__83390 = this;
return (new cljs.core.LazySeq(meta,this__83390.realized,this__83390.x,this__83390.__hash));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__83391 = this;
return this__83391.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__83392 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__83392.meta);
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
var this__83393 = this;
return this__83393.end;
});
cljs.core.ChunkBuffer.prototype.add = (function (o){
var this__83394 = this;
var ___83395 = this;
(this__83394.buf[this__83394.end] = o);
return this__83394.end = (this__83394.end + 1);
});
cljs.core.ChunkBuffer.prototype.chunk = (function (o){
var this__83396 = this;
var ___83397 = this;
var ret__83398 = (new cljs.core.ArrayChunk(this__83396.buf,0,this__83396.end));
this__83396.buf = null;
return ret__83398;
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
var this__83399 = this;
return cljs.core.array_reduce.call(null,this__83399.arr,f,(this__83399.arr[this__83399.off]),(this__83399.off + 1));
});
cljs.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__83400 = this;
return cljs.core.array_reduce.call(null,this__83400.arr,f,start,this__83400.off);
});
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$ = true;
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$_drop_first$arity$1 = (function (coll){
var this__83401 = this;
if((this__83401.off === this__83401.end))
{throw (new Error("-drop-first of empty chunk"));
} else
{return (new cljs.core.ArrayChunk(this__83401.arr,(this__83401.off + 1),this__83401.end));
}
});
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,i){
var this__83402 = this;
return (this__83402.arr[(this__83402.off + i)]);
});
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,i,not_found){
var this__83403 = this;
if((function (){var and__3822__auto____83404 = (i >= 0);
if(and__3822__auto____83404)
{return (i < (this__83403.end - this__83403.off));
} else
{return and__3822__auto____83404;
}
})())
{return (this__83403.arr[(this__83403.off + i)]);
} else
{return not_found;
}
});
cljs.core.ArrayChunk.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__83405 = this;
return (this__83405.end - this__83405.off);
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
var this__83406 = this;
var h__5347__auto____83407 = this__83406.__hash;
if(!((h__5347__auto____83407 == null)))
{return h__5347__auto____83407;
} else
{var h__5347__auto____83408 = cljs.core.hash_coll.call(null,coll);
this__83406.__hash = h__5347__auto____83408;
return h__5347__auto____83408;
}
});
cljs.core.ChunkedCons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this$,o){
var this__83409 = this;
return cljs.core.cons.call(null,o,this$);
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__83410 = this;
return coll;
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__83411 = this;
return cljs.core._nth.call(null,this__83411.chunk,0);
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__83412 = this;
if((cljs.core._count.call(null,this__83412.chunk) > 1))
{return (new cljs.core.ChunkedCons(cljs.core._drop_first.call(null,this__83412.chunk),this__83412.more,this__83412.meta,null));
} else
{if((this__83412.more == null))
{return cljs.core.List.EMPTY;
} else
{return this__83412.more;
}
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var this__83413 = this;
if((this__83413.more == null))
{return null;
} else
{return this__83413.more;
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__83414 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ChunkedCons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var this__83415 = this;
return (new cljs.core.ChunkedCons(this__83415.chunk,this__83415.more,m,this__83415.__hash));
});
cljs.core.ChunkedCons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__83416 = this;
return this__83416.meta;
});
cljs.core.ChunkedCons.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__83417 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__83417.meta);
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var this__83418 = this;
return this__83418.chunk;
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var this__83419 = this;
if((this__83419.more == null))
{return cljs.core.List.EMPTY;
} else
{return this__83419.more;
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
if((function (){var G__83423__83424 = s;
if(G__83423__83424)
{if((function (){var or__3824__auto____83425 = (G__83423__83424.cljs$lang$protocol_mask$partition1$ & 1024);
if(or__3824__auto____83425)
{return or__3824__auto____83425;
} else
{return G__83423__83424.cljs$core$IChunkedNext$;
}
})())
{return true;
} else
{if((!G__83423__83424.cljs$lang$protocol_mask$partition1$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedNext,G__83423__83424);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedNext,G__83423__83424);
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
var ary__83428 = [];
var s__83429 = s;
while(true){
if(cljs.core.seq.call(null,s__83429))
{ary__83428.push(cljs.core.first.call(null,s__83429));
{
var G__83430 = cljs.core.next.call(null,s__83429);
s__83429 = G__83430;
continue;
}
} else
{return ary__83428;
}
break;
}
});
/**
* Returns a (potentially-ragged) 2-dimensional array
* containing the contents of coll.
*/
cljs.core.to_array_2d = (function to_array_2d(coll){
var ret__83434 = cljs.core.make_array.call(null,cljs.core.count.call(null,coll));
var i__83435 = 0;
var xs__83436 = cljs.core.seq.call(null,coll);
while(true){
if(xs__83436)
{(ret__83434[i__83435] = cljs.core.to_array.call(null,cljs.core.first.call(null,xs__83436)));
{
var G__83437 = (i__83435 + 1);
var G__83438 = cljs.core.next.call(null,xs__83436);
i__83435 = G__83437;
xs__83436 = G__83438;
continue;
}
} else
{}
break;
}
return ret__83434;
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
var a__83446 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__83447 = cljs.core.seq.call(null,init_val_or_seq);
var i__83448 = 0;
var s__83449 = s__83447;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____83450 = s__83449;
if(and__3822__auto____83450)
{return (i__83448 < size);
} else
{return and__3822__auto____83450;
}
})()))
{(a__83446[i__83448] = cljs.core.first.call(null,s__83449));
{
var G__83453 = (i__83448 + 1);
var G__83454 = cljs.core.next.call(null,s__83449);
i__83448 = G__83453;
s__83449 = G__83454;
continue;
}
} else
{return a__83446;
}
break;
}
} else
{var n__5693__auto____83451 = size;
var i__83452 = 0;
while(true){
if((i__83452 < n__5693__auto____83451))
{(a__83446[i__83452] = init_val_or_seq);
{
var G__83455 = (i__83452 + 1);
i__83452 = G__83455;
continue;
}
} else
{}
break;
}
return a__83446;
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
var a__83463 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__83464 = cljs.core.seq.call(null,init_val_or_seq);
var i__83465 = 0;
var s__83466 = s__83464;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____83467 = s__83466;
if(and__3822__auto____83467)
{return (i__83465 < size);
} else
{return and__3822__auto____83467;
}
})()))
{(a__83463[i__83465] = cljs.core.first.call(null,s__83466));
{
var G__83470 = (i__83465 + 1);
var G__83471 = cljs.core.next.call(null,s__83466);
i__83465 = G__83470;
s__83466 = G__83471;
continue;
}
} else
{return a__83463;
}
break;
}
} else
{var n__5693__auto____83468 = size;
var i__83469 = 0;
while(true){
if((i__83469 < n__5693__auto____83468))
{(a__83463[i__83469] = init_val_or_seq);
{
var G__83472 = (i__83469 + 1);
i__83469 = G__83472;
continue;
}
} else
{}
break;
}
return a__83463;
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
var a__83480 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__83481 = cljs.core.seq.call(null,init_val_or_seq);
var i__83482 = 0;
var s__83483 = s__83481;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____83484 = s__83483;
if(and__3822__auto____83484)
{return (i__83482 < size);
} else
{return and__3822__auto____83484;
}
})()))
{(a__83480[i__83482] = cljs.core.first.call(null,s__83483));
{
var G__83487 = (i__83482 + 1);
var G__83488 = cljs.core.next.call(null,s__83483);
i__83482 = G__83487;
s__83483 = G__83488;
continue;
}
} else
{return a__83480;
}
break;
}
} else
{var n__5693__auto____83485 = size;
var i__83486 = 0;
while(true){
if((i__83486 < n__5693__auto____83485))
{(a__83480[i__83486] = init_val_or_seq);
{
var G__83489 = (i__83486 + 1);
i__83486 = G__83489;
continue;
}
} else
{}
break;
}
return a__83480;
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
{var s__83494 = s;
var i__83495 = n;
var sum__83496 = 0;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____83497 = (i__83495 > 0);
if(and__3822__auto____83497)
{return cljs.core.seq.call(null,s__83494);
} else
{return and__3822__auto____83497;
}
})()))
{{
var G__83498 = cljs.core.next.call(null,s__83494);
var G__83499 = (i__83495 - 1);
var G__83500 = (sum__83496 + 1);
s__83494 = G__83498;
i__83495 = G__83499;
sum__83496 = G__83500;
continue;
}
} else
{return sum__83496;
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
var s__83505 = cljs.core.seq.call(null,x);
if(s__83505)
{if(cljs.core.chunked_seq_QMARK_.call(null,s__83505))
{return cljs.core.chunk_cons.call(null,cljs.core.chunk_first.call(null,s__83505),concat.call(null,cljs.core.chunk_rest.call(null,s__83505),y));
} else
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__83505),concat.call(null,cljs.core.rest.call(null,s__83505),y));
}
} else
{return y;
}
}),null));
});
var concat__3 = (function() { 
var G__83509__delegate = function (x,y,zs){
var cat__83508 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__83507 = cljs.core.seq.call(null,xys);
if(xys__83507)
{if(cljs.core.chunked_seq_QMARK_.call(null,xys__83507))
{return cljs.core.chunk_cons.call(null,cljs.core.chunk_first.call(null,xys__83507),cat.call(null,cljs.core.chunk_rest.call(null,xys__83507),zs));
} else
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__83507),cat.call(null,cljs.core.rest.call(null,xys__83507),zs));
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
return cat__83508.call(null,concat.call(null,x,y),zs);
};
var G__83509 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__83509__delegate.call(this, x, y, zs);
};
G__83509.cljs$lang$maxFixedArity = 2;
G__83509.cljs$lang$applyTo = (function (arglist__83510){
var x = cljs.core.first(arglist__83510);
var y = cljs.core.first(cljs.core.next(arglist__83510));
var zs = cljs.core.rest(cljs.core.next(arglist__83510));
return G__83509__delegate(x, y, zs);
});
G__83509.cljs$lang$arity$variadic = G__83509__delegate;
return G__83509;
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
var G__83511__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__83511 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__83511__delegate.call(this, a, b, c, d, more);
};
G__83511.cljs$lang$maxFixedArity = 4;
G__83511.cljs$lang$applyTo = (function (arglist__83512){
var a = cljs.core.first(arglist__83512);
var b = cljs.core.first(cljs.core.next(arglist__83512));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__83512)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__83512))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__83512))));
return G__83511__delegate(a, b, c, d, more);
});
G__83511.cljs$lang$arity$variadic = G__83511__delegate;
return G__83511;
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
var args__83554 = cljs.core.seq.call(null,args);
if((argc === 0))
{return f.call(null);
} else
{var a__83555 = cljs.core._first.call(null,args__83554);
var args__83556 = cljs.core._rest.call(null,args__83554);
if((argc === 1))
{if(f.cljs$lang$arity$1)
{return f.cljs$lang$arity$1(a__83555);
} else
{return f.call(null,a__83555);
}
} else
{var b__83557 = cljs.core._first.call(null,args__83556);
var args__83558 = cljs.core._rest.call(null,args__83556);
if((argc === 2))
{if(f.cljs$lang$arity$2)
{return f.cljs$lang$arity$2(a__83555,b__83557);
} else
{return f.call(null,a__83555,b__83557);
}
} else
{var c__83559 = cljs.core._first.call(null,args__83558);
var args__83560 = cljs.core._rest.call(null,args__83558);
if((argc === 3))
{if(f.cljs$lang$arity$3)
{return f.cljs$lang$arity$3(a__83555,b__83557,c__83559);
} else
{return f.call(null,a__83555,b__83557,c__83559);
}
} else
{var d__83561 = cljs.core._first.call(null,args__83560);
var args__83562 = cljs.core._rest.call(null,args__83560);
if((argc === 4))
{if(f.cljs$lang$arity$4)
{return f.cljs$lang$arity$4(a__83555,b__83557,c__83559,d__83561);
} else
{return f.call(null,a__83555,b__83557,c__83559,d__83561);
}
} else
{var e__83563 = cljs.core._first.call(null,args__83562);
var args__83564 = cljs.core._rest.call(null,args__83562);
if((argc === 5))
{if(f.cljs$lang$arity$5)
{return f.cljs$lang$arity$5(a__83555,b__83557,c__83559,d__83561,e__83563);
} else
{return f.call(null,a__83555,b__83557,c__83559,d__83561,e__83563);
}
} else
{var f__83565 = cljs.core._first.call(null,args__83564);
var args__83566 = cljs.core._rest.call(null,args__83564);
if((argc === 6))
{if(f__83565.cljs$lang$arity$6)
{return f__83565.cljs$lang$arity$6(a__83555,b__83557,c__83559,d__83561,e__83563,f__83565);
} else
{return f__83565.call(null,a__83555,b__83557,c__83559,d__83561,e__83563,f__83565);
}
} else
{var g__83567 = cljs.core._first.call(null,args__83566);
var args__83568 = cljs.core._rest.call(null,args__83566);
if((argc === 7))
{if(f__83565.cljs$lang$arity$7)
{return f__83565.cljs$lang$arity$7(a__83555,b__83557,c__83559,d__83561,e__83563,f__83565,g__83567);
} else
{return f__83565.call(null,a__83555,b__83557,c__83559,d__83561,e__83563,f__83565,g__83567);
}
} else
{var h__83569 = cljs.core._first.call(null,args__83568);
var args__83570 = cljs.core._rest.call(null,args__83568);
if((argc === 8))
{if(f__83565.cljs$lang$arity$8)
{return f__83565.cljs$lang$arity$8(a__83555,b__83557,c__83559,d__83561,e__83563,f__83565,g__83567,h__83569);
} else
{return f__83565.call(null,a__83555,b__83557,c__83559,d__83561,e__83563,f__83565,g__83567,h__83569);
}
} else
{var i__83571 = cljs.core._first.call(null,args__83570);
var args__83572 = cljs.core._rest.call(null,args__83570);
if((argc === 9))
{if(f__83565.cljs$lang$arity$9)
{return f__83565.cljs$lang$arity$9(a__83555,b__83557,c__83559,d__83561,e__83563,f__83565,g__83567,h__83569,i__83571);
} else
{return f__83565.call(null,a__83555,b__83557,c__83559,d__83561,e__83563,f__83565,g__83567,h__83569,i__83571);
}
} else
{var j__83573 = cljs.core._first.call(null,args__83572);
var args__83574 = cljs.core._rest.call(null,args__83572);
if((argc === 10))
{if(f__83565.cljs$lang$arity$10)
{return f__83565.cljs$lang$arity$10(a__83555,b__83557,c__83559,d__83561,e__83563,f__83565,g__83567,h__83569,i__83571,j__83573);
} else
{return f__83565.call(null,a__83555,b__83557,c__83559,d__83561,e__83563,f__83565,g__83567,h__83569,i__83571,j__83573);
}
} else
{var k__83575 = cljs.core._first.call(null,args__83574);
var args__83576 = cljs.core._rest.call(null,args__83574);
if((argc === 11))
{if(f__83565.cljs$lang$arity$11)
{return f__83565.cljs$lang$arity$11(a__83555,b__83557,c__83559,d__83561,e__83563,f__83565,g__83567,h__83569,i__83571,j__83573,k__83575);
} else
{return f__83565.call(null,a__83555,b__83557,c__83559,d__83561,e__83563,f__83565,g__83567,h__83569,i__83571,j__83573,k__83575);
}
} else
{var l__83577 = cljs.core._first.call(null,args__83576);
var args__83578 = cljs.core._rest.call(null,args__83576);
if((argc === 12))
{if(f__83565.cljs$lang$arity$12)
{return f__83565.cljs$lang$arity$12(a__83555,b__83557,c__83559,d__83561,e__83563,f__83565,g__83567,h__83569,i__83571,j__83573,k__83575,l__83577);
} else
{return f__83565.call(null,a__83555,b__83557,c__83559,d__83561,e__83563,f__83565,g__83567,h__83569,i__83571,j__83573,k__83575,l__83577);
}
} else
{var m__83579 = cljs.core._first.call(null,args__83578);
var args__83580 = cljs.core._rest.call(null,args__83578);
if((argc === 13))
{if(f__83565.cljs$lang$arity$13)
{return f__83565.cljs$lang$arity$13(a__83555,b__83557,c__83559,d__83561,e__83563,f__83565,g__83567,h__83569,i__83571,j__83573,k__83575,l__83577,m__83579);
} else
{return f__83565.call(null,a__83555,b__83557,c__83559,d__83561,e__83563,f__83565,g__83567,h__83569,i__83571,j__83573,k__83575,l__83577,m__83579);
}
} else
{var n__83581 = cljs.core._first.call(null,args__83580);
var args__83582 = cljs.core._rest.call(null,args__83580);
if((argc === 14))
{if(f__83565.cljs$lang$arity$14)
{return f__83565.cljs$lang$arity$14(a__83555,b__83557,c__83559,d__83561,e__83563,f__83565,g__83567,h__83569,i__83571,j__83573,k__83575,l__83577,m__83579,n__83581);
} else
{return f__83565.call(null,a__83555,b__83557,c__83559,d__83561,e__83563,f__83565,g__83567,h__83569,i__83571,j__83573,k__83575,l__83577,m__83579,n__83581);
}
} else
{var o__83583 = cljs.core._first.call(null,args__83582);
var args__83584 = cljs.core._rest.call(null,args__83582);
if((argc === 15))
{if(f__83565.cljs$lang$arity$15)
{return f__83565.cljs$lang$arity$15(a__83555,b__83557,c__83559,d__83561,e__83563,f__83565,g__83567,h__83569,i__83571,j__83573,k__83575,l__83577,m__83579,n__83581,o__83583);
} else
{return f__83565.call(null,a__83555,b__83557,c__83559,d__83561,e__83563,f__83565,g__83567,h__83569,i__83571,j__83573,k__83575,l__83577,m__83579,n__83581,o__83583);
}
} else
{var p__83585 = cljs.core._first.call(null,args__83584);
var args__83586 = cljs.core._rest.call(null,args__83584);
if((argc === 16))
{if(f__83565.cljs$lang$arity$16)
{return f__83565.cljs$lang$arity$16(a__83555,b__83557,c__83559,d__83561,e__83563,f__83565,g__83567,h__83569,i__83571,j__83573,k__83575,l__83577,m__83579,n__83581,o__83583,p__83585);
} else
{return f__83565.call(null,a__83555,b__83557,c__83559,d__83561,e__83563,f__83565,g__83567,h__83569,i__83571,j__83573,k__83575,l__83577,m__83579,n__83581,o__83583,p__83585);
}
} else
{var q__83587 = cljs.core._first.call(null,args__83586);
var args__83588 = cljs.core._rest.call(null,args__83586);
if((argc === 17))
{if(f__83565.cljs$lang$arity$17)
{return f__83565.cljs$lang$arity$17(a__83555,b__83557,c__83559,d__83561,e__83563,f__83565,g__83567,h__83569,i__83571,j__83573,k__83575,l__83577,m__83579,n__83581,o__83583,p__83585,q__83587);
} else
{return f__83565.call(null,a__83555,b__83557,c__83559,d__83561,e__83563,f__83565,g__83567,h__83569,i__83571,j__83573,k__83575,l__83577,m__83579,n__83581,o__83583,p__83585,q__83587);
}
} else
{var r__83589 = cljs.core._first.call(null,args__83588);
var args__83590 = cljs.core._rest.call(null,args__83588);
if((argc === 18))
{if(f__83565.cljs$lang$arity$18)
{return f__83565.cljs$lang$arity$18(a__83555,b__83557,c__83559,d__83561,e__83563,f__83565,g__83567,h__83569,i__83571,j__83573,k__83575,l__83577,m__83579,n__83581,o__83583,p__83585,q__83587,r__83589);
} else
{return f__83565.call(null,a__83555,b__83557,c__83559,d__83561,e__83563,f__83565,g__83567,h__83569,i__83571,j__83573,k__83575,l__83577,m__83579,n__83581,o__83583,p__83585,q__83587,r__83589);
}
} else
{var s__83591 = cljs.core._first.call(null,args__83590);
var args__83592 = cljs.core._rest.call(null,args__83590);
if((argc === 19))
{if(f__83565.cljs$lang$arity$19)
{return f__83565.cljs$lang$arity$19(a__83555,b__83557,c__83559,d__83561,e__83563,f__83565,g__83567,h__83569,i__83571,j__83573,k__83575,l__83577,m__83579,n__83581,o__83583,p__83585,q__83587,r__83589,s__83591);
} else
{return f__83565.call(null,a__83555,b__83557,c__83559,d__83561,e__83563,f__83565,g__83567,h__83569,i__83571,j__83573,k__83575,l__83577,m__83579,n__83581,o__83583,p__83585,q__83587,r__83589,s__83591);
}
} else
{var t__83593 = cljs.core._first.call(null,args__83592);
var args__83594 = cljs.core._rest.call(null,args__83592);
if((argc === 20))
{if(f__83565.cljs$lang$arity$20)
{return f__83565.cljs$lang$arity$20(a__83555,b__83557,c__83559,d__83561,e__83563,f__83565,g__83567,h__83569,i__83571,j__83573,k__83575,l__83577,m__83579,n__83581,o__83583,p__83585,q__83587,r__83589,s__83591,t__83593);
} else
{return f__83565.call(null,a__83555,b__83557,c__83559,d__83561,e__83563,f__83565,g__83567,h__83569,i__83571,j__83573,k__83575,l__83577,m__83579,n__83581,o__83583,p__83585,q__83587,r__83589,s__83591,t__83593);
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
var fixed_arity__83609 = f.cljs$lang$maxFixedArity;
if(f.cljs$lang$applyTo)
{var bc__83610 = cljs.core.bounded_count.call(null,args,(fixed_arity__83609 + 1));
if((bc__83610 <= fixed_arity__83609))
{return cljs.core.apply_to.call(null,f,bc__83610,args);
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__3 = (function (f,x,args){
var arglist__83611 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__83612 = f.cljs$lang$maxFixedArity;
if(f.cljs$lang$applyTo)
{var bc__83613 = cljs.core.bounded_count.call(null,arglist__83611,(fixed_arity__83612 + 1));
if((bc__83613 <= fixed_arity__83612))
{return cljs.core.apply_to.call(null,f,bc__83613,arglist__83611);
} else
{return f.cljs$lang$applyTo(arglist__83611);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__83611));
}
});
var apply__4 = (function (f,x,y,args){
var arglist__83614 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__83615 = f.cljs$lang$maxFixedArity;
if(f.cljs$lang$applyTo)
{var bc__83616 = cljs.core.bounded_count.call(null,arglist__83614,(fixed_arity__83615 + 1));
if((bc__83616 <= fixed_arity__83615))
{return cljs.core.apply_to.call(null,f,bc__83616,arglist__83614);
} else
{return f.cljs$lang$applyTo(arglist__83614);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__83614));
}
});
var apply__5 = (function (f,x,y,z,args){
var arglist__83617 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__83618 = f.cljs$lang$maxFixedArity;
if(f.cljs$lang$applyTo)
{var bc__83619 = cljs.core.bounded_count.call(null,arglist__83617,(fixed_arity__83618 + 1));
if((bc__83619 <= fixed_arity__83618))
{return cljs.core.apply_to.call(null,f,bc__83619,arglist__83617);
} else
{return f.cljs$lang$applyTo(arglist__83617);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__83617));
}
});
var apply__6 = (function() { 
var G__83623__delegate = function (f,a,b,c,d,args){
var arglist__83620 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__83621 = f.cljs$lang$maxFixedArity;
if(f.cljs$lang$applyTo)
{var bc__83622 = cljs.core.bounded_count.call(null,arglist__83620,(fixed_arity__83621 + 1));
if((bc__83622 <= fixed_arity__83621))
{return cljs.core.apply_to.call(null,f,bc__83622,arglist__83620);
} else
{return f.cljs$lang$applyTo(arglist__83620);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__83620));
}
};
var G__83623 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__83623__delegate.call(this, f, a, b, c, d, args);
};
G__83623.cljs$lang$maxFixedArity = 5;
G__83623.cljs$lang$applyTo = (function (arglist__83624){
var f = cljs.core.first(arglist__83624);
var a = cljs.core.first(cljs.core.next(arglist__83624));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__83624)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__83624))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__83624)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__83624)))));
return G__83623__delegate(f, a, b, c, d, args);
});
G__83623.cljs$lang$arity$variadic = G__83623__delegate;
return G__83623;
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
vary_meta.cljs$lang$applyTo = (function (arglist__83625){
var obj = cljs.core.first(arglist__83625);
var f = cljs.core.first(cljs.core.next(arglist__83625));
var args = cljs.core.rest(cljs.core.next(arglist__83625));
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
var G__83626__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__83626 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__83626__delegate.call(this, x, y, more);
};
G__83626.cljs$lang$maxFixedArity = 2;
G__83626.cljs$lang$applyTo = (function (arglist__83627){
var x = cljs.core.first(arglist__83627);
var y = cljs.core.first(cljs.core.next(arglist__83627));
var more = cljs.core.rest(cljs.core.next(arglist__83627));
return G__83626__delegate(x, y, more);
});
G__83626.cljs$lang$arity$variadic = G__83626__delegate;
return G__83626;
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
var G__83628 = pred;
var G__83629 = cljs.core.next.call(null,coll);
pred = G__83628;
coll = G__83629;
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
{var or__3824__auto____83631 = pred.call(null,cljs.core.first.call(null,coll));
if(cljs.core.truth_(or__3824__auto____83631))
{return or__3824__auto____83631;
} else
{{
var G__83632 = pred;
var G__83633 = cljs.core.next.call(null,coll);
pred = G__83632;
coll = G__83633;
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
var G__83634 = null;
var G__83634__0 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__83634__1 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__83634__2 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__83634__3 = (function() { 
var G__83635__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__83635 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__83635__delegate.call(this, x, y, zs);
};
G__83635.cljs$lang$maxFixedArity = 2;
G__83635.cljs$lang$applyTo = (function (arglist__83636){
var x = cljs.core.first(arglist__83636);
var y = cljs.core.first(cljs.core.next(arglist__83636));
var zs = cljs.core.rest(cljs.core.next(arglist__83636));
return G__83635__delegate(x, y, zs);
});
G__83635.cljs$lang$arity$variadic = G__83635__delegate;
return G__83635;
})()
;
G__83634 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case 0:
return G__83634__0.call(this);
case 1:
return G__83634__1.call(this,x);
case 2:
return G__83634__2.call(this,x,y);
default:
return G__83634__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
G__83634.cljs$lang$maxFixedArity = 2;
G__83634.cljs$lang$applyTo = G__83634__3.cljs$lang$applyTo;
return G__83634;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__83637__delegate = function (args){
return x;
};
var G__83637 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__83637__delegate.call(this, args);
};
G__83637.cljs$lang$maxFixedArity = 0;
G__83637.cljs$lang$applyTo = (function (arglist__83638){
var args = cljs.core.seq(arglist__83638);;
return G__83637__delegate(args);
});
G__83637.cljs$lang$arity$variadic = G__83637__delegate;
return G__83637;
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
var G__83645 = null;
var G__83645__0 = (function (){
return f.call(null,g.call(null));
});
var G__83645__1 = (function (x){
return f.call(null,g.call(null,x));
});
var G__83645__2 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__83645__3 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__83645__4 = (function() { 
var G__83646__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__83646 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__83646__delegate.call(this, x, y, z, args);
};
G__83646.cljs$lang$maxFixedArity = 3;
G__83646.cljs$lang$applyTo = (function (arglist__83647){
var x = cljs.core.first(arglist__83647);
var y = cljs.core.first(cljs.core.next(arglist__83647));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__83647)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__83647)));
return G__83646__delegate(x, y, z, args);
});
G__83646.cljs$lang$arity$variadic = G__83646__delegate;
return G__83646;
})()
;
G__83645 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__83645__0.call(this);
case 1:
return G__83645__1.call(this,x);
case 2:
return G__83645__2.call(this,x,y);
case 3:
return G__83645__3.call(this,x,y,z);
default:
return G__83645__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__83645.cljs$lang$maxFixedArity = 3;
G__83645.cljs$lang$applyTo = G__83645__4.cljs$lang$applyTo;
return G__83645;
})()
});
var comp__3 = (function (f,g,h){
return (function() {
var G__83648 = null;
var G__83648__0 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__83648__1 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__83648__2 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__83648__3 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__83648__4 = (function() { 
var G__83649__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__83649 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__83649__delegate.call(this, x, y, z, args);
};
G__83649.cljs$lang$maxFixedArity = 3;
G__83649.cljs$lang$applyTo = (function (arglist__83650){
var x = cljs.core.first(arglist__83650);
var y = cljs.core.first(cljs.core.next(arglist__83650));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__83650)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__83650)));
return G__83649__delegate(x, y, z, args);
});
G__83649.cljs$lang$arity$variadic = G__83649__delegate;
return G__83649;
})()
;
G__83648 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__83648__0.call(this);
case 1:
return G__83648__1.call(this,x);
case 2:
return G__83648__2.call(this,x,y);
case 3:
return G__83648__3.call(this,x,y,z);
default:
return G__83648__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__83648.cljs$lang$maxFixedArity = 3;
G__83648.cljs$lang$applyTo = G__83648__4.cljs$lang$applyTo;
return G__83648;
})()
});
var comp__4 = (function() { 
var G__83651__delegate = function (f1,f2,f3,fs){
var fs__83642 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));
return (function() { 
var G__83652__delegate = function (args){
var ret__83643 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__83642),args);
var fs__83644 = cljs.core.next.call(null,fs__83642);
while(true){
if(fs__83644)
{{
var G__83653 = cljs.core.first.call(null,fs__83644).call(null,ret__83643);
var G__83654 = cljs.core.next.call(null,fs__83644);
ret__83643 = G__83653;
fs__83644 = G__83654;
continue;
}
} else
{return ret__83643;
}
break;
}
};
var G__83652 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__83652__delegate.call(this, args);
};
G__83652.cljs$lang$maxFixedArity = 0;
G__83652.cljs$lang$applyTo = (function (arglist__83655){
var args = cljs.core.seq(arglist__83655);;
return G__83652__delegate(args);
});
G__83652.cljs$lang$arity$variadic = G__83652__delegate;
return G__83652;
})()
;
};
var G__83651 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__83651__delegate.call(this, f1, f2, f3, fs);
};
G__83651.cljs$lang$maxFixedArity = 3;
G__83651.cljs$lang$applyTo = (function (arglist__83656){
var f1 = cljs.core.first(arglist__83656);
var f2 = cljs.core.first(cljs.core.next(arglist__83656));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__83656)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__83656)));
return G__83651__delegate(f1, f2, f3, fs);
});
G__83651.cljs$lang$arity$variadic = G__83651__delegate;
return G__83651;
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
var G__83657__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__83657 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__83657__delegate.call(this, args);
};
G__83657.cljs$lang$maxFixedArity = 0;
G__83657.cljs$lang$applyTo = (function (arglist__83658){
var args = cljs.core.seq(arglist__83658);;
return G__83657__delegate(args);
});
G__83657.cljs$lang$arity$variadic = G__83657__delegate;
return G__83657;
})()
;
});
var partial__3 = (function (f,arg1,arg2){
return (function() { 
var G__83659__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__83659 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__83659__delegate.call(this, args);
};
G__83659.cljs$lang$maxFixedArity = 0;
G__83659.cljs$lang$applyTo = (function (arglist__83660){
var args = cljs.core.seq(arglist__83660);;
return G__83659__delegate(args);
});
G__83659.cljs$lang$arity$variadic = G__83659__delegate;
return G__83659;
})()
;
});
var partial__4 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__83661__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__83661 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__83661__delegate.call(this, args);
};
G__83661.cljs$lang$maxFixedArity = 0;
G__83661.cljs$lang$applyTo = (function (arglist__83662){
var args = cljs.core.seq(arglist__83662);;
return G__83661__delegate(args);
});
G__83661.cljs$lang$arity$variadic = G__83661__delegate;
return G__83661;
})()
;
});
var partial__5 = (function() { 
var G__83663__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__83664__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__83664 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__83664__delegate.call(this, args);
};
G__83664.cljs$lang$maxFixedArity = 0;
G__83664.cljs$lang$applyTo = (function (arglist__83665){
var args = cljs.core.seq(arglist__83665);;
return G__83664__delegate(args);
});
G__83664.cljs$lang$arity$variadic = G__83664__delegate;
return G__83664;
})()
;
};
var G__83663 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__83663__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__83663.cljs$lang$maxFixedArity = 4;
G__83663.cljs$lang$applyTo = (function (arglist__83666){
var f = cljs.core.first(arglist__83666);
var arg1 = cljs.core.first(cljs.core.next(arglist__83666));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__83666)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__83666))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__83666))));
return G__83663__delegate(f, arg1, arg2, arg3, more);
});
G__83663.cljs$lang$arity$variadic = G__83663__delegate;
return G__83663;
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
var G__83667 = null;
var G__83667__1 = (function (a){
return f.call(null,(((a == null))?x:a));
});
var G__83667__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),b);
});
var G__83667__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),b,c);
});
var G__83667__4 = (function() { 
var G__83668__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),b,c,ds);
};
var G__83668 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__83668__delegate.call(this, a, b, c, ds);
};
G__83668.cljs$lang$maxFixedArity = 3;
G__83668.cljs$lang$applyTo = (function (arglist__83669){
var a = cljs.core.first(arglist__83669);
var b = cljs.core.first(cljs.core.next(arglist__83669));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__83669)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__83669)));
return G__83668__delegate(a, b, c, ds);
});
G__83668.cljs$lang$arity$variadic = G__83668__delegate;
return G__83668;
})()
;
G__83667 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 1:
return G__83667__1.call(this,a);
case 2:
return G__83667__2.call(this,a,b);
case 3:
return G__83667__3.call(this,a,b,c);
default:
return G__83667__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__83667.cljs$lang$maxFixedArity = 3;
G__83667.cljs$lang$applyTo = G__83667__4.cljs$lang$applyTo;
return G__83667;
})()
});
var fnil__3 = (function (f,x,y){
return (function() {
var G__83670 = null;
var G__83670__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b));
});
var G__83670__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b),c);
});
var G__83670__4 = (function() { 
var G__83671__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),(((b == null))?y:b),c,ds);
};
var G__83671 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__83671__delegate.call(this, a, b, c, ds);
};
G__83671.cljs$lang$maxFixedArity = 3;
G__83671.cljs$lang$applyTo = (function (arglist__83672){
var a = cljs.core.first(arglist__83672);
var b = cljs.core.first(cljs.core.next(arglist__83672));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__83672)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__83672)));
return G__83671__delegate(a, b, c, ds);
});
G__83671.cljs$lang$arity$variadic = G__83671__delegate;
return G__83671;
})()
;
G__83670 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__83670__2.call(this,a,b);
case 3:
return G__83670__3.call(this,a,b,c);
default:
return G__83670__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__83670.cljs$lang$maxFixedArity = 3;
G__83670.cljs$lang$applyTo = G__83670__4.cljs$lang$applyTo;
return G__83670;
})()
});
var fnil__4 = (function (f,x,y,z){
return (function() {
var G__83673 = null;
var G__83673__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b));
});
var G__83673__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c));
});
var G__83673__4 = (function() { 
var G__83674__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c),ds);
};
var G__83674 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__83674__delegate.call(this, a, b, c, ds);
};
G__83674.cljs$lang$maxFixedArity = 3;
G__83674.cljs$lang$applyTo = (function (arglist__83675){
var a = cljs.core.first(arglist__83675);
var b = cljs.core.first(cljs.core.next(arglist__83675));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__83675)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__83675)));
return G__83674__delegate(a, b, c, ds);
});
G__83674.cljs$lang$arity$variadic = G__83674__delegate;
return G__83674;
})()
;
G__83673 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__83673__2.call(this,a,b);
case 3:
return G__83673__3.call(this,a,b,c);
default:
return G__83673__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__83673.cljs$lang$maxFixedArity = 3;
G__83673.cljs$lang$applyTo = G__83673__4.cljs$lang$applyTo;
return G__83673;
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
var mapi__83691 = (function mapi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____83699 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____83699)
{var s__83700 = temp__3974__auto____83699;
if(cljs.core.chunked_seq_QMARK_.call(null,s__83700))
{var c__83701 = cljs.core.chunk_first.call(null,s__83700);
var size__83702 = cljs.core.count.call(null,c__83701);
var b__83703 = cljs.core.chunk_buffer.call(null,size__83702);
var n__5693__auto____83704 = size__83702;
var i__83705 = 0;
while(true){
if((i__83705 < n__5693__auto____83704))
{cljs.core.chunk_append.call(null,b__83703,f.call(null,(idx + i__83705),cljs.core._nth.call(null,c__83701,i__83705)));
{
var G__83706 = (i__83705 + 1);
i__83705 = G__83706;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__83703),mapi.call(null,(idx + size__83702),cljs.core.chunk_rest.call(null,s__83700)));
} else
{return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__83700)),mapi.call(null,(idx + 1),cljs.core.rest.call(null,s__83700)));
}
} else
{return null;
}
}),null));
});
return mapi__83691.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____83716 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____83716)
{var s__83717 = temp__3974__auto____83716;
if(cljs.core.chunked_seq_QMARK_.call(null,s__83717))
{var c__83718 = cljs.core.chunk_first.call(null,s__83717);
var size__83719 = cljs.core.count.call(null,c__83718);
var b__83720 = cljs.core.chunk_buffer.call(null,size__83719);
var n__5693__auto____83721 = size__83719;
var i__83722 = 0;
while(true){
if((i__83722 < n__5693__auto____83721))
{var x__83723 = f.call(null,cljs.core._nth.call(null,c__83718,i__83722));
if((x__83723 == null))
{} else
{cljs.core.chunk_append.call(null,b__83720,x__83723);
}
{
var G__83725 = (i__83722 + 1);
i__83722 = G__83725;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__83720),keep.call(null,f,cljs.core.chunk_rest.call(null,s__83717)));
} else
{var x__83724 = f.call(null,cljs.core.first.call(null,s__83717));
if((x__83724 == null))
{return keep.call(null,f,cljs.core.rest.call(null,s__83717));
} else
{return cljs.core.cons.call(null,x__83724,keep.call(null,f,cljs.core.rest.call(null,s__83717)));
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
var keepi__83751 = (function keepi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____83761 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____83761)
{var s__83762 = temp__3974__auto____83761;
if(cljs.core.chunked_seq_QMARK_.call(null,s__83762))
{var c__83763 = cljs.core.chunk_first.call(null,s__83762);
var size__83764 = cljs.core.count.call(null,c__83763);
var b__83765 = cljs.core.chunk_buffer.call(null,size__83764);
var n__5693__auto____83766 = size__83764;
var i__83767 = 0;
while(true){
if((i__83767 < n__5693__auto____83766))
{var x__83768 = f.call(null,(idx + i__83767),cljs.core._nth.call(null,c__83763,i__83767));
if((x__83768 == null))
{} else
{cljs.core.chunk_append.call(null,b__83765,x__83768);
}
{
var G__83770 = (i__83767 + 1);
i__83767 = G__83770;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__83765),keepi.call(null,(idx + size__83764),cljs.core.chunk_rest.call(null,s__83762)));
} else
{var x__83769 = f.call(null,idx,cljs.core.first.call(null,s__83762));
if((x__83769 == null))
{return keepi.call(null,(idx + 1),cljs.core.rest.call(null,s__83762));
} else
{return cljs.core.cons.call(null,x__83769,keepi.call(null,(idx + 1),cljs.core.rest.call(null,s__83762)));
}
}
} else
{return null;
}
}),null));
});
return keepi__83751.call(null,0,coll);
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
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____83856 = p.call(null,x);
if(cljs.core.truth_(and__3822__auto____83856))
{return p.call(null,y);
} else
{return and__3822__auto____83856;
}
})());
});
var ep1__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____83857 = p.call(null,x);
if(cljs.core.truth_(and__3822__auto____83857))
{var and__3822__auto____83858 = p.call(null,y);
if(cljs.core.truth_(and__3822__auto____83858))
{return p.call(null,z);
} else
{return and__3822__auto____83858;
}
} else
{return and__3822__auto____83857;
}
})());
});
var ep1__4 = (function() { 
var G__83927__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____83859 = ep1.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____83859))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3822__auto____83859;
}
})());
};
var G__83927 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__83927__delegate.call(this, x, y, z, args);
};
G__83927.cljs$lang$maxFixedArity = 3;
G__83927.cljs$lang$applyTo = (function (arglist__83928){
var x = cljs.core.first(arglist__83928);
var y = cljs.core.first(cljs.core.next(arglist__83928));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__83928)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__83928)));
return G__83927__delegate(x, y, z, args);
});
G__83927.cljs$lang$arity$variadic = G__83927__delegate;
return G__83927;
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
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____83871 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____83871))
{return p2.call(null,x);
} else
{return and__3822__auto____83871;
}
})());
});
var ep2__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____83872 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____83872))
{var and__3822__auto____83873 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____83873))
{var and__3822__auto____83874 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____83874))
{return p2.call(null,y);
} else
{return and__3822__auto____83874;
}
} else
{return and__3822__auto____83873;
}
} else
{return and__3822__auto____83872;
}
})());
});
var ep2__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____83875 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____83875))
{var and__3822__auto____83876 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____83876))
{var and__3822__auto____83877 = p1.call(null,z);
if(cljs.core.truth_(and__3822__auto____83877))
{var and__3822__auto____83878 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____83878))
{var and__3822__auto____83879 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____83879))
{return p2.call(null,z);
} else
{return and__3822__auto____83879;
}
} else
{return and__3822__auto____83878;
}
} else
{return and__3822__auto____83877;
}
} else
{return and__3822__auto____83876;
}
} else
{return and__3822__auto____83875;
}
})());
});
var ep2__4 = (function() { 
var G__83929__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____83880 = ep2.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____83880))
{return cljs.core.every_QMARK_.call(null,(function (p1__83726_SHARP_){
var and__3822__auto____83881 = p1.call(null,p1__83726_SHARP_);
if(cljs.core.truth_(and__3822__auto____83881))
{return p2.call(null,p1__83726_SHARP_);
} else
{return and__3822__auto____83881;
}
}),args);
} else
{return and__3822__auto____83880;
}
})());
};
var G__83929 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__83929__delegate.call(this, x, y, z, args);
};
G__83929.cljs$lang$maxFixedArity = 3;
G__83929.cljs$lang$applyTo = (function (arglist__83930){
var x = cljs.core.first(arglist__83930);
var y = cljs.core.first(cljs.core.next(arglist__83930));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__83930)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__83930)));
return G__83929__delegate(x, y, z, args);
});
G__83929.cljs$lang$arity$variadic = G__83929__delegate;
return G__83929;
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
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____83900 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____83900))
{var and__3822__auto____83901 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____83901))
{return p3.call(null,x);
} else
{return and__3822__auto____83901;
}
} else
{return and__3822__auto____83900;
}
})());
});
var ep3__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____83902 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____83902))
{var and__3822__auto____83903 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____83903))
{var and__3822__auto____83904 = p3.call(null,x);
if(cljs.core.truth_(and__3822__auto____83904))
{var and__3822__auto____83905 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____83905))
{var and__3822__auto____83906 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____83906))
{return p3.call(null,y);
} else
{return and__3822__auto____83906;
}
} else
{return and__3822__auto____83905;
}
} else
{return and__3822__auto____83904;
}
} else
{return and__3822__auto____83903;
}
} else
{return and__3822__auto____83902;
}
})());
});
var ep3__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____83907 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____83907))
{var and__3822__auto____83908 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____83908))
{var and__3822__auto____83909 = p3.call(null,x);
if(cljs.core.truth_(and__3822__auto____83909))
{var and__3822__auto____83910 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____83910))
{var and__3822__auto____83911 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____83911))
{var and__3822__auto____83912 = p3.call(null,y);
if(cljs.core.truth_(and__3822__auto____83912))
{var and__3822__auto____83913 = p1.call(null,z);
if(cljs.core.truth_(and__3822__auto____83913))
{var and__3822__auto____83914 = p2.call(null,z);
if(cljs.core.truth_(and__3822__auto____83914))
{return p3.call(null,z);
} else
{return and__3822__auto____83914;
}
} else
{return and__3822__auto____83913;
}
} else
{return and__3822__auto____83912;
}
} else
{return and__3822__auto____83911;
}
} else
{return and__3822__auto____83910;
}
} else
{return and__3822__auto____83909;
}
} else
{return and__3822__auto____83908;
}
} else
{return and__3822__auto____83907;
}
})());
});
var ep3__4 = (function() { 
var G__83931__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____83915 = ep3.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____83915))
{return cljs.core.every_QMARK_.call(null,(function (p1__83727_SHARP_){
var and__3822__auto____83916 = p1.call(null,p1__83727_SHARP_);
if(cljs.core.truth_(and__3822__auto____83916))
{var and__3822__auto____83917 = p2.call(null,p1__83727_SHARP_);
if(cljs.core.truth_(and__3822__auto____83917))
{return p3.call(null,p1__83727_SHARP_);
} else
{return and__3822__auto____83917;
}
} else
{return and__3822__auto____83916;
}
}),args);
} else
{return and__3822__auto____83915;
}
})());
};
var G__83931 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__83931__delegate.call(this, x, y, z, args);
};
G__83931.cljs$lang$maxFixedArity = 3;
G__83931.cljs$lang$applyTo = (function (arglist__83932){
var x = cljs.core.first(arglist__83932);
var y = cljs.core.first(cljs.core.next(arglist__83932));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__83932)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__83932)));
return G__83931__delegate(x, y, z, args);
});
G__83931.cljs$lang$arity$variadic = G__83931__delegate;
return G__83931;
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
var G__83933__delegate = function (p1,p2,p3,ps){
var ps__83918 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);
return (function() {
var epn = null;
var epn__0 = (function (){
return true;
});
var epn__1 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__83728_SHARP_){
return p1__83728_SHARP_.call(null,x);
}),ps__83918);
});
var epn__2 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__83729_SHARP_){
var and__3822__auto____83923 = p1__83729_SHARP_.call(null,x);
if(cljs.core.truth_(and__3822__auto____83923))
{return p1__83729_SHARP_.call(null,y);
} else
{return and__3822__auto____83923;
}
}),ps__83918);
});
var epn__3 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__83730_SHARP_){
var and__3822__auto____83924 = p1__83730_SHARP_.call(null,x);
if(cljs.core.truth_(and__3822__auto____83924))
{var and__3822__auto____83925 = p1__83730_SHARP_.call(null,y);
if(cljs.core.truth_(and__3822__auto____83925))
{return p1__83730_SHARP_.call(null,z);
} else
{return and__3822__auto____83925;
}
} else
{return and__3822__auto____83924;
}
}),ps__83918);
});
var epn__4 = (function() { 
var G__83934__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____83926 = epn.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____83926))
{return cljs.core.every_QMARK_.call(null,(function (p1__83731_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__83731_SHARP_,args);
}),ps__83918);
} else
{return and__3822__auto____83926;
}
})());
};
var G__83934 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__83934__delegate.call(this, x, y, z, args);
};
G__83934.cljs$lang$maxFixedArity = 3;
G__83934.cljs$lang$applyTo = (function (arglist__83935){
var x = cljs.core.first(arglist__83935);
var y = cljs.core.first(cljs.core.next(arglist__83935));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__83935)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__83935)));
return G__83934__delegate(x, y, z, args);
});
G__83934.cljs$lang$arity$variadic = G__83934__delegate;
return G__83934;
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
var G__83933 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__83933__delegate.call(this, p1, p2, p3, ps);
};
G__83933.cljs$lang$maxFixedArity = 3;
G__83933.cljs$lang$applyTo = (function (arglist__83936){
var p1 = cljs.core.first(arglist__83936);
var p2 = cljs.core.first(cljs.core.next(arglist__83936));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__83936)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__83936)));
return G__83933__delegate(p1, p2, p3, ps);
});
G__83933.cljs$lang$arity$variadic = G__83933__delegate;
return G__83933;
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
var or__3824__auto____84017 = p.call(null,x);
if(cljs.core.truth_(or__3824__auto____84017))
{return or__3824__auto____84017;
} else
{return p.call(null,y);
}
});
var sp1__3 = (function (x,y,z){
var or__3824__auto____84018 = p.call(null,x);
if(cljs.core.truth_(or__3824__auto____84018))
{return or__3824__auto____84018;
} else
{var or__3824__auto____84019 = p.call(null,y);
if(cljs.core.truth_(or__3824__auto____84019))
{return or__3824__auto____84019;
} else
{return p.call(null,z);
}
}
});
var sp1__4 = (function() { 
var G__84088__delegate = function (x,y,z,args){
var or__3824__auto____84020 = sp1.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____84020))
{return or__3824__auto____84020;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__84088 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__84088__delegate.call(this, x, y, z, args);
};
G__84088.cljs$lang$maxFixedArity = 3;
G__84088.cljs$lang$applyTo = (function (arglist__84089){
var x = cljs.core.first(arglist__84089);
var y = cljs.core.first(cljs.core.next(arglist__84089));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__84089)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__84089)));
return G__84088__delegate(x, y, z, args);
});
G__84088.cljs$lang$arity$variadic = G__84088__delegate;
return G__84088;
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
var or__3824__auto____84032 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____84032))
{return or__3824__auto____84032;
} else
{return p2.call(null,x);
}
});
var sp2__2 = (function (x,y){
var or__3824__auto____84033 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____84033))
{return or__3824__auto____84033;
} else
{var or__3824__auto____84034 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____84034))
{return or__3824__auto____84034;
} else
{var or__3824__auto____84035 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____84035))
{return or__3824__auto____84035;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__3 = (function (x,y,z){
var or__3824__auto____84036 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____84036))
{return or__3824__auto____84036;
} else
{var or__3824__auto____84037 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____84037))
{return or__3824__auto____84037;
} else
{var or__3824__auto____84038 = p1.call(null,z);
if(cljs.core.truth_(or__3824__auto____84038))
{return or__3824__auto____84038;
} else
{var or__3824__auto____84039 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____84039))
{return or__3824__auto____84039;
} else
{var or__3824__auto____84040 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____84040))
{return or__3824__auto____84040;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__4 = (function() { 
var G__84090__delegate = function (x,y,z,args){
var or__3824__auto____84041 = sp2.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____84041))
{return or__3824__auto____84041;
} else
{return cljs.core.some.call(null,(function (p1__83771_SHARP_){
var or__3824__auto____84042 = p1.call(null,p1__83771_SHARP_);
if(cljs.core.truth_(or__3824__auto____84042))
{return or__3824__auto____84042;
} else
{return p2.call(null,p1__83771_SHARP_);
}
}),args);
}
};
var G__84090 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__84090__delegate.call(this, x, y, z, args);
};
G__84090.cljs$lang$maxFixedArity = 3;
G__84090.cljs$lang$applyTo = (function (arglist__84091){
var x = cljs.core.first(arglist__84091);
var y = cljs.core.first(cljs.core.next(arglist__84091));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__84091)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__84091)));
return G__84090__delegate(x, y, z, args);
});
G__84090.cljs$lang$arity$variadic = G__84090__delegate;
return G__84090;
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
var or__3824__auto____84061 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____84061))
{return or__3824__auto____84061;
} else
{var or__3824__auto____84062 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____84062))
{return or__3824__auto____84062;
} else
{return p3.call(null,x);
}
}
});
var sp3__2 = (function (x,y){
var or__3824__auto____84063 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____84063))
{return or__3824__auto____84063;
} else
{var or__3824__auto____84064 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____84064))
{return or__3824__auto____84064;
} else
{var or__3824__auto____84065 = p3.call(null,x);
if(cljs.core.truth_(or__3824__auto____84065))
{return or__3824__auto____84065;
} else
{var or__3824__auto____84066 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____84066))
{return or__3824__auto____84066;
} else
{var or__3824__auto____84067 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____84067))
{return or__3824__auto____84067;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__3 = (function (x,y,z){
var or__3824__auto____84068 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____84068))
{return or__3824__auto____84068;
} else
{var or__3824__auto____84069 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____84069))
{return or__3824__auto____84069;
} else
{var or__3824__auto____84070 = p3.call(null,x);
if(cljs.core.truth_(or__3824__auto____84070))
{return or__3824__auto____84070;
} else
{var or__3824__auto____84071 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____84071))
{return or__3824__auto____84071;
} else
{var or__3824__auto____84072 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____84072))
{return or__3824__auto____84072;
} else
{var or__3824__auto____84073 = p3.call(null,y);
if(cljs.core.truth_(or__3824__auto____84073))
{return or__3824__auto____84073;
} else
{var or__3824__auto____84074 = p1.call(null,z);
if(cljs.core.truth_(or__3824__auto____84074))
{return or__3824__auto____84074;
} else
{var or__3824__auto____84075 = p2.call(null,z);
if(cljs.core.truth_(or__3824__auto____84075))
{return or__3824__auto____84075;
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
var G__84092__delegate = function (x,y,z,args){
var or__3824__auto____84076 = sp3.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____84076))
{return or__3824__auto____84076;
} else
{return cljs.core.some.call(null,(function (p1__83772_SHARP_){
var or__3824__auto____84077 = p1.call(null,p1__83772_SHARP_);
if(cljs.core.truth_(or__3824__auto____84077))
{return or__3824__auto____84077;
} else
{var or__3824__auto____84078 = p2.call(null,p1__83772_SHARP_);
if(cljs.core.truth_(or__3824__auto____84078))
{return or__3824__auto____84078;
} else
{return p3.call(null,p1__83772_SHARP_);
}
}
}),args);
}
};
var G__84092 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__84092__delegate.call(this, x, y, z, args);
};
G__84092.cljs$lang$maxFixedArity = 3;
G__84092.cljs$lang$applyTo = (function (arglist__84093){
var x = cljs.core.first(arglist__84093);
var y = cljs.core.first(cljs.core.next(arglist__84093));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__84093)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__84093)));
return G__84092__delegate(x, y, z, args);
});
G__84092.cljs$lang$arity$variadic = G__84092__delegate;
return G__84092;
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
var G__84094__delegate = function (p1,p2,p3,ps){
var ps__84079 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);
return (function() {
var spn = null;
var spn__0 = (function (){
return null;
});
var spn__1 = (function (x){
return cljs.core.some.call(null,(function (p1__83773_SHARP_){
return p1__83773_SHARP_.call(null,x);
}),ps__84079);
});
var spn__2 = (function (x,y){
return cljs.core.some.call(null,(function (p1__83774_SHARP_){
var or__3824__auto____84084 = p1__83774_SHARP_.call(null,x);
if(cljs.core.truth_(or__3824__auto____84084))
{return or__3824__auto____84084;
} else
{return p1__83774_SHARP_.call(null,y);
}
}),ps__84079);
});
var spn__3 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__83775_SHARP_){
var or__3824__auto____84085 = p1__83775_SHARP_.call(null,x);
if(cljs.core.truth_(or__3824__auto____84085))
{return or__3824__auto____84085;
} else
{var or__3824__auto____84086 = p1__83775_SHARP_.call(null,y);
if(cljs.core.truth_(or__3824__auto____84086))
{return or__3824__auto____84086;
} else
{return p1__83775_SHARP_.call(null,z);
}
}
}),ps__84079);
});
var spn__4 = (function() { 
var G__84095__delegate = function (x,y,z,args){
var or__3824__auto____84087 = spn.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____84087))
{return or__3824__auto____84087;
} else
{return cljs.core.some.call(null,(function (p1__83776_SHARP_){
return cljs.core.some.call(null,p1__83776_SHARP_,args);
}),ps__84079);
}
};
var G__84095 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__84095__delegate.call(this, x, y, z, args);
};
G__84095.cljs$lang$maxFixedArity = 3;
G__84095.cljs$lang$applyTo = (function (arglist__84096){
var x = cljs.core.first(arglist__84096);
var y = cljs.core.first(cljs.core.next(arglist__84096));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__84096)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__84096)));
return G__84095__delegate(x, y, z, args);
});
G__84095.cljs$lang$arity$variadic = G__84095__delegate;
return G__84095;
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
var G__84094 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__84094__delegate.call(this, p1, p2, p3, ps);
};
G__84094.cljs$lang$maxFixedArity = 3;
G__84094.cljs$lang$applyTo = (function (arglist__84097){
var p1 = cljs.core.first(arglist__84097);
var p2 = cljs.core.first(cljs.core.next(arglist__84097));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__84097)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__84097)));
return G__84094__delegate(p1, p2, p3, ps);
});
G__84094.cljs$lang$arity$variadic = G__84094__delegate;
return G__84094;
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
var temp__3974__auto____84116 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____84116)
{var s__84117 = temp__3974__auto____84116;
if(cljs.core.chunked_seq_QMARK_.call(null,s__84117))
{var c__84118 = cljs.core.chunk_first.call(null,s__84117);
var size__84119 = cljs.core.count.call(null,c__84118);
var b__84120 = cljs.core.chunk_buffer.call(null,size__84119);
var n__5693__auto____84121 = size__84119;
var i__84122 = 0;
while(true){
if((i__84122 < n__5693__auto____84121))
{cljs.core.chunk_append.call(null,b__84120,f.call(null,cljs.core._nth.call(null,c__84118,i__84122)));
{
var G__84134 = (i__84122 + 1);
i__84122 = G__84134;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__84120),map.call(null,f,cljs.core.chunk_rest.call(null,s__84117)));
} else
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__84117)),map.call(null,f,cljs.core.rest.call(null,s__84117)));
}
} else
{return null;
}
}),null));
});
var map__3 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__84123 = cljs.core.seq.call(null,c1);
var s2__84124 = cljs.core.seq.call(null,c2);
if((function (){var and__3822__auto____84125 = s1__84123;
if(and__3822__auto____84125)
{return s2__84124;
} else
{return and__3822__auto____84125;
}
})())
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__84123),cljs.core.first.call(null,s2__84124)),map.call(null,f,cljs.core.rest.call(null,s1__84123),cljs.core.rest.call(null,s2__84124)));
} else
{return null;
}
}),null));
});
var map__4 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__84126 = cljs.core.seq.call(null,c1);
var s2__84127 = cljs.core.seq.call(null,c2);
var s3__84128 = cljs.core.seq.call(null,c3);
if((function (){var and__3822__auto____84129 = s1__84126;
if(and__3822__auto____84129)
{var and__3822__auto____84130 = s2__84127;
if(and__3822__auto____84130)
{return s3__84128;
} else
{return and__3822__auto____84130;
}
} else
{return and__3822__auto____84129;
}
})())
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__84126),cljs.core.first.call(null,s2__84127),cljs.core.first.call(null,s3__84128)),map.call(null,f,cljs.core.rest.call(null,s1__84126),cljs.core.rest.call(null,s2__84127),cljs.core.rest.call(null,s3__84128)));
} else
{return null;
}
}),null));
});
var map__5 = (function() { 
var G__84135__delegate = function (f,c1,c2,c3,colls){
var step__84133 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__84132 = map.call(null,cljs.core.seq,cs);
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__84132))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__84132),step.call(null,map.call(null,cljs.core.rest,ss__84132)));
} else
{return null;
}
}),null));
});
return map.call(null,(function (p1__83937_SHARP_){
return cljs.core.apply.call(null,f,p1__83937_SHARP_);
}),step__84133.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__84135 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__84135__delegate.call(this, f, c1, c2, c3, colls);
};
G__84135.cljs$lang$maxFixedArity = 4;
G__84135.cljs$lang$applyTo = (function (arglist__84136){
var f = cljs.core.first(arglist__84136);
var c1 = cljs.core.first(cljs.core.next(arglist__84136));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__84136)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__84136))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__84136))));
return G__84135__delegate(f, c1, c2, c3, colls);
});
G__84135.cljs$lang$arity$variadic = G__84135__delegate;
return G__84135;
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
{var temp__3974__auto____84139 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____84139)
{var s__84140 = temp__3974__auto____84139;
return cljs.core.cons.call(null,cljs.core.first.call(null,s__84140),take.call(null,(n - 1),cljs.core.rest.call(null,s__84140)));
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
var step__84146 = (function (n,coll){
while(true){
var s__84144 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_((function (){var and__3822__auto____84145 = (n > 0);
if(and__3822__auto____84145)
{return s__84144;
} else
{return and__3822__auto____84145;
}
})()))
{{
var G__84147 = (n - 1);
var G__84148 = cljs.core.rest.call(null,s__84144);
n = G__84147;
coll = G__84148;
continue;
}
} else
{return s__84144;
}
break;
}
});
return (new cljs.core.LazySeq(null,false,(function (){
return step__84146.call(null,n,coll);
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
var s__84151 = cljs.core.seq.call(null,coll);
var lead__84152 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));
while(true){
if(lead__84152)
{{
var G__84153 = cljs.core.next.call(null,s__84151);
var G__84154 = cljs.core.next.call(null,lead__84152);
s__84151 = G__84153;
lead__84152 = G__84154;
continue;
}
} else
{return s__84151;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__84160 = (function (pred,coll){
while(true){
var s__84158 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_((function (){var and__3822__auto____84159 = s__84158;
if(and__3822__auto____84159)
{return pred.call(null,cljs.core.first.call(null,s__84158));
} else
{return and__3822__auto____84159;
}
})()))
{{
var G__84161 = pred;
var G__84162 = cljs.core.rest.call(null,s__84158);
pred = G__84161;
coll = G__84162;
continue;
}
} else
{return s__84158;
}
break;
}
});
return (new cljs.core.LazySeq(null,false,(function (){
return step__84160.call(null,pred,coll);
}),null));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____84165 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____84165)
{var s__84166 = temp__3974__auto____84165;
return cljs.core.concat.call(null,s__84166,cycle.call(null,s__84166));
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
var s1__84171 = cljs.core.seq.call(null,c1);
var s2__84172 = cljs.core.seq.call(null,c2);
if((function (){var and__3822__auto____84173 = s1__84171;
if(and__3822__auto____84173)
{return s2__84172;
} else
{return and__3822__auto____84173;
}
})())
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__84171),cljs.core.cons.call(null,cljs.core.first.call(null,s2__84172),interleave.call(null,cljs.core.rest.call(null,s1__84171),cljs.core.rest.call(null,s2__84172))));
} else
{return null;
}
}),null));
});
var interleave__3 = (function() { 
var G__84175__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__84174 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__84174))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__84174),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__84174)));
} else
{return null;
}
}),null));
};
var G__84175 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__84175__delegate.call(this, c1, c2, colls);
};
G__84175.cljs$lang$maxFixedArity = 2;
G__84175.cljs$lang$applyTo = (function (arglist__84176){
var c1 = cljs.core.first(arglist__84176);
var c2 = cljs.core.first(cljs.core.next(arglist__84176));
var colls = cljs.core.rest(cljs.core.next(arglist__84176));
return G__84175__delegate(c1, c2, colls);
});
G__84175.cljs$lang$arity$variadic = G__84175__delegate;
return G__84175;
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
var cat__84186 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3971__auto____84184 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____84184)
{var coll__84185 = temp__3971__auto____84184;
return cljs.core.cons.call(null,cljs.core.first.call(null,coll__84185),cat.call(null,cljs.core.rest.call(null,coll__84185),colls));
} else
{if(cljs.core.seq.call(null,colls))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
}),null));
});
return cat__84186.call(null,null,colls);
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
var G__84187__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__84187 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__84187__delegate.call(this, f, coll, colls);
};
G__84187.cljs$lang$maxFixedArity = 2;
G__84187.cljs$lang$applyTo = (function (arglist__84188){
var f = cljs.core.first(arglist__84188);
var coll = cljs.core.first(cljs.core.next(arglist__84188));
var colls = cljs.core.rest(cljs.core.next(arglist__84188));
return G__84187__delegate(f, coll, colls);
});
G__84187.cljs$lang$arity$variadic = G__84187__delegate;
return G__84187;
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
var temp__3974__auto____84198 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____84198)
{var s__84199 = temp__3974__auto____84198;
if(cljs.core.chunked_seq_QMARK_.call(null,s__84199))
{var c__84200 = cljs.core.chunk_first.call(null,s__84199);
var size__84201 = cljs.core.count.call(null,c__84200);
var b__84202 = cljs.core.chunk_buffer.call(null,size__84201);
var n__5693__auto____84203 = size__84201;
var i__84204 = 0;
while(true){
if((i__84204 < n__5693__auto____84203))
{if(cljs.core.truth_(pred.call(null,cljs.core._nth.call(null,c__84200,i__84204))))
{cljs.core.chunk_append.call(null,b__84202,cljs.core._nth.call(null,c__84200,i__84204));
} else
{}
{
var G__84207 = (i__84204 + 1);
i__84204 = G__84207;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__84202),filter.call(null,pred,cljs.core.chunk_rest.call(null,s__84199)));
} else
{var f__84205 = cljs.core.first.call(null,s__84199);
var r__84206 = cljs.core.rest.call(null,s__84199);
if(cljs.core.truth_(pred.call(null,f__84205)))
{return cljs.core.cons.call(null,f__84205,filter.call(null,pred,r__84206));
} else
{return filter.call(null,pred,r__84206);
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
var walk__84210 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
}),null));
});
return walk__84210.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__84208_SHARP_){
return !(cljs.core.sequential_QMARK_.call(null,p1__84208_SHARP_));
}),cljs.core.rest.call(null,cljs.core.tree_seq.call(null,cljs.core.sequential_QMARK_,cljs.core.seq,x)));
});
/**
* Returns a new coll consisting of to-coll with all of the items of
* from-coll conjoined.
*/
cljs.core.into = (function into(to,from){
if((function (){var G__84214__84215 = to;
if(G__84214__84215)
{if((function (){var or__3824__auto____84216 = (G__84214__84215.cljs$lang$protocol_mask$partition1$ & 4);
if(or__3824__auto____84216)
{return or__3824__auto____84216;
} else
{return G__84214__84215.cljs$core$IEditableCollection$;
}
})())
{return true;
} else
{if((!G__84214__84215.cljs$lang$protocol_mask$partition1$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IEditableCollection,G__84214__84215);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IEditableCollection,G__84214__84215);
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
var G__84217__delegate = function (f,c1,c2,c3,colls){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.apply.call(null,cljs.core.map,f,c1,c2,c3,colls));
};
var G__84217 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__84217__delegate.call(this, f, c1, c2, c3, colls);
};
G__84217.cljs$lang$maxFixedArity = 4;
G__84217.cljs$lang$applyTo = (function (arglist__84218){
var f = cljs.core.first(arglist__84218);
var c1 = cljs.core.first(cljs.core.next(arglist__84218));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__84218)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__84218))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__84218))));
return G__84217__delegate(f, c1, c2, c3, colls);
});
G__84217.cljs$lang$arity$variadic = G__84217__delegate;
return G__84217;
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
var temp__3974__auto____84225 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____84225)
{var s__84226 = temp__3974__auto____84225;
var p__84227 = cljs.core.take.call(null,n,s__84226);
if((n === cljs.core.count.call(null,p__84227)))
{return cljs.core.cons.call(null,p__84227,partition.call(null,n,step,cljs.core.drop.call(null,step,s__84226)));
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
var temp__3974__auto____84228 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____84228)
{var s__84229 = temp__3974__auto____84228;
var p__84230 = cljs.core.take.call(null,n,s__84229);
if((n === cljs.core.count.call(null,p__84230)))
{return cljs.core.cons.call(null,p__84230,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__84229)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__84230,pad)));
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
var sentinel__84235 = cljs.core.lookup_sentinel;
var m__84236 = m;
var ks__84237 = cljs.core.seq.call(null,ks);
while(true){
if(ks__84237)
{var m__84238 = cljs.core._lookup.call(null,m__84236,cljs.core.first.call(null,ks__84237),sentinel__84235);
if((sentinel__84235 === m__84238))
{return not_found;
} else
{{
var G__84239 = sentinel__84235;
var G__84240 = m__84238;
var G__84241 = cljs.core.next.call(null,ks__84237);
sentinel__84235 = G__84239;
m__84236 = G__84240;
ks__84237 = G__84241;
continue;
}
}
} else
{return m__84236;
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
cljs.core.assoc_in = (function assoc_in(m,p__84242,v){
var vec__84247__84248 = p__84242;
var k__84249 = cljs.core.nth.call(null,vec__84247__84248,0,null);
var ks__84250 = cljs.core.nthnext.call(null,vec__84247__84248,1);
if(cljs.core.truth_(ks__84250))
{return cljs.core.assoc.call(null,m,k__84249,assoc_in.call(null,cljs.core._lookup.call(null,m,k__84249,null),ks__84250,v));
} else
{return cljs.core.assoc.call(null,m,k__84249,v);
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
var update_in__delegate = function (m,p__84251,f,args){
var vec__84256__84257 = p__84251;
var k__84258 = cljs.core.nth.call(null,vec__84256__84257,0,null);
var ks__84259 = cljs.core.nthnext.call(null,vec__84256__84257,1);
if(cljs.core.truth_(ks__84259))
{return cljs.core.assoc.call(null,m,k__84258,cljs.core.apply.call(null,update_in,cljs.core._lookup.call(null,m,k__84258,null),ks__84259,f,args));
} else
{return cljs.core.assoc.call(null,m,k__84258,cljs.core.apply.call(null,f,cljs.core._lookup.call(null,m,k__84258,null),args));
}
};
var update_in = function (m,p__84251,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__84251, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__84260){
var m = cljs.core.first(arglist__84260);
var p__84251 = cljs.core.first(cljs.core.next(arglist__84260));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__84260)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__84260)));
return update_in__delegate(m, p__84251, f, args);
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
var this__84263 = this;
var h__5347__auto____84264 = this__84263.__hash;
if(!((h__5347__auto____84264 == null)))
{return h__5347__auto____84264;
} else
{var h__5347__auto____84265 = cljs.core.hash_coll.call(null,coll);
this__84263.__hash = h__5347__auto____84265;
return h__5347__auto____84265;
}
});
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__84266 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__84267 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__84268 = this;
var new_array__84269 = this__84268.array.slice();
(new_array__84269[k] = v);
return (new cljs.core.Vector(this__84268.meta,new_array__84269,null));
});
cljs.core.Vector.prototype.call = (function() {
var G__84300 = null;
var G__84300__2 = (function (this_sym84270,k){
var this__84272 = this;
var this_sym84270__84273 = this;
var coll__84274 = this_sym84270__84273;
return coll__84274.cljs$core$ILookup$_lookup$arity$2(coll__84274,k);
});
var G__84300__3 = (function (this_sym84271,k,not_found){
var this__84272 = this;
var this_sym84271__84275 = this;
var coll__84276 = this_sym84271__84275;
return coll__84276.cljs$core$ILookup$_lookup$arity$3(coll__84276,k,not_found);
});
G__84300 = function(this_sym84271,k,not_found){
switch(arguments.length){
case 2:
return G__84300__2.call(this,this_sym84271,k);
case 3:
return G__84300__3.call(this,this_sym84271,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__84300;
})()
;
cljs.core.Vector.prototype.apply = (function (this_sym84261,args84262){
var this__84277 = this;
return this_sym84261.call.apply(this_sym84261,[this_sym84261].concat(args84262.slice()));
});
cljs.core.Vector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__84278 = this;
var new_array__84279 = this__84278.array.slice();
new_array__84279.push(o);
return (new cljs.core.Vector(this__84278.meta,new_array__84279,null));
});
cljs.core.Vector.prototype.toString = (function (){
var this__84280 = this;
var this__84281 = this;
return cljs.core.pr_str.call(null,this__84281);
});
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var this__84282 = this;
return cljs.core.ci_reduce.call(null,this__84282.array,f);
});
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var this__84283 = this;
return cljs.core.ci_reduce.call(null,this__84283.array,f,start);
});
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__84284 = this;
if((this__84284.array.length > 0))
{var vector_seq__84285 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if((i < this__84284.array.length))
{return cljs.core.cons.call(null,(this__84284.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
}),null));
});
return vector_seq__84285.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__84286 = this;
return this__84286.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__84287 = this;
var count__84288 = this__84287.array.length;
if((count__84288 > 0))
{return (this__84287.array[(count__84288 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__84289 = this;
if((this__84289.array.length > 0))
{var new_array__84290 = this__84289.array.slice();
new_array__84290.pop();
return (new cljs.core.Vector(this__84289.meta,new_array__84290,null));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__84291 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__84292 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__84293 = this;
return (new cljs.core.Vector(meta,this__84293.array,this__84293.__hash));
});
cljs.core.Vector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__84294 = this;
return this__84294.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__84295 = this;
if((function (){var and__3822__auto____84296 = (0 <= n);
if(and__3822__auto____84296)
{return (n < this__84295.array.length);
} else
{return and__3822__auto____84296;
}
})())
{return (this__84295.array[n]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__84297 = this;
if((function (){var and__3822__auto____84298 = (0 <= n);
if(and__3822__auto____84298)
{return (n < this__84297.array.length);
} else
{return and__3822__auto____84298;
}
})())
{return (this__84297.array[n]);
} else
{return not_found;
}
});
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__84299 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__84299.meta);
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
var cnt__84302 = pv.cnt;
if((cnt__84302 < 32))
{return 0;
} else
{return (((cnt__84302 - 1) >>> 5) << 5);
}
});
cljs.core.new_path = (function new_path(edit,level,node){
var ll__84308 = level;
var ret__84309 = node;
while(true){
if((ll__84308 === 0))
{return ret__84309;
} else
{var embed__84310 = ret__84309;
var r__84311 = cljs.core.pv_fresh_node.call(null,edit);
var ___84312 = cljs.core.pv_aset.call(null,r__84311,0,embed__84310);
{
var G__84313 = (ll__84308 - 5);
var G__84314 = r__84311;
ll__84308 = G__84313;
ret__84309 = G__84314;
continue;
}
}
break;
}
});
cljs.core.push_tail = (function push_tail(pv,level,parent,tailnode){
var ret__84320 = cljs.core.pv_clone_node.call(null,parent);
var subidx__84321 = (((pv.cnt - 1) >>> level) & 31);
if((5 === level))
{cljs.core.pv_aset.call(null,ret__84320,subidx__84321,tailnode);
return ret__84320;
} else
{var child__84322 = cljs.core.pv_aget.call(null,parent,subidx__84321);
if(!((child__84322 == null)))
{var node_to_insert__84323 = push_tail.call(null,pv,(level - 5),child__84322,tailnode);
cljs.core.pv_aset.call(null,ret__84320,subidx__84321,node_to_insert__84323);
return ret__84320;
} else
{var node_to_insert__84324 = cljs.core.new_path.call(null,null,(level - 5),tailnode);
cljs.core.pv_aset.call(null,ret__84320,subidx__84321,node_to_insert__84324);
return ret__84320;
}
}
});
cljs.core.array_for = (function array_for(pv,i){
if((function (){var and__3822__auto____84328 = (0 <= i);
if(and__3822__auto____84328)
{return (i < pv.cnt);
} else
{return and__3822__auto____84328;
}
})())
{if((i >= cljs.core.tail_off.call(null,pv)))
{return pv.tail;
} else
{var node__84329 = pv.root;
var level__84330 = pv.shift;
while(true){
if((level__84330 > 0))
{{
var G__84331 = cljs.core.pv_aget.call(null,node__84329,((i >>> level__84330) & 31));
var G__84332 = (level__84330 - 5);
node__84329 = G__84331;
level__84330 = G__84332;
continue;
}
} else
{return node__84329.arr;
}
break;
}
}
} else
{throw (new Error([cljs.core.str("No item "),cljs.core.str(i),cljs.core.str(" in vector of length "),cljs.core.str(pv.cnt)].join('')));
}
});
cljs.core.do_assoc = (function do_assoc(pv,level,node,i,val){
var ret__84335 = cljs.core.pv_clone_node.call(null,node);
if((level === 0))
{cljs.core.pv_aset.call(null,ret__84335,(i & 31),val);
return ret__84335;
} else
{var subidx__84336 = ((i >>> level) & 31);
cljs.core.pv_aset.call(null,ret__84335,subidx__84336,do_assoc.call(null,pv,(level - 5),cljs.core.pv_aget.call(null,node,subidx__84336),i,val));
return ret__84335;
}
});
cljs.core.pop_tail = (function pop_tail(pv,level,node){
var subidx__84342 = (((pv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child__84343 = pop_tail.call(null,pv,(level - 5),cljs.core.pv_aget.call(null,node,subidx__84342));
if((function (){var and__3822__auto____84344 = (new_child__84343 == null);
if(and__3822__auto____84344)
{return (subidx__84342 === 0);
} else
{return and__3822__auto____84344;
}
})())
{return null;
} else
{var ret__84345 = cljs.core.pv_clone_node.call(null,node);
cljs.core.pv_aset.call(null,ret__84345,subidx__84342,new_child__84343);
return ret__84345;
}
} else
{if((subidx__84342 === 0))
{return null;
} else
{if("\uFDD0'else")
{var ret__84346 = cljs.core.pv_clone_node.call(null,node);
cljs.core.pv_aset.call(null,ret__84346,subidx__84342,null);
return ret__84346;
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
var this__84349 = this;
return (new cljs.core.TransientVector(this__84349.cnt,this__84349.shift,cljs.core.tv_editable_root.call(null,this__84349.root),cljs.core.tv_editable_tail.call(null,this__84349.tail)));
});
cljs.core.PersistentVector.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__84350 = this;
var h__5347__auto____84351 = this__84350.__hash;
if(!((h__5347__auto____84351 == null)))
{return h__5347__auto____84351;
} else
{var h__5347__auto____84352 = cljs.core.hash_coll.call(null,coll);
this__84350.__hash = h__5347__auto____84352;
return h__5347__auto____84352;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__84353 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__84354 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__84355 = this;
if((function (){var and__3822__auto____84356 = (0 <= k);
if(and__3822__auto____84356)
{return (k < this__84355.cnt);
} else
{return and__3822__auto____84356;
}
})())
{if((cljs.core.tail_off.call(null,coll) <= k))
{var new_tail__84357 = this__84355.tail.slice();
(new_tail__84357[(k & 31)] = v);
return (new cljs.core.PersistentVector(this__84355.meta,this__84355.cnt,this__84355.shift,this__84355.root,new_tail__84357,null));
} else
{return (new cljs.core.PersistentVector(this__84355.meta,this__84355.cnt,this__84355.shift,cljs.core.do_assoc.call(null,coll,this__84355.shift,this__84355.root,k,v),this__84355.tail,null));
}
} else
{if((k === this__84355.cnt))
{return coll.cljs$core$ICollection$_conj$arity$2(coll,v);
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Index "),cljs.core.str(k),cljs.core.str(" out of bounds  [0,"),cljs.core.str(this__84355.cnt),cljs.core.str("]")].join('')));
} else
{return null;
}
}
}
});
cljs.core.PersistentVector.prototype.call = (function() {
var G__84405 = null;
var G__84405__2 = (function (this_sym84358,k){
var this__84360 = this;
var this_sym84358__84361 = this;
var coll__84362 = this_sym84358__84361;
return coll__84362.cljs$core$ILookup$_lookup$arity$2(coll__84362,k);
});
var G__84405__3 = (function (this_sym84359,k,not_found){
var this__84360 = this;
var this_sym84359__84363 = this;
var coll__84364 = this_sym84359__84363;
return coll__84364.cljs$core$ILookup$_lookup$arity$3(coll__84364,k,not_found);
});
G__84405 = function(this_sym84359,k,not_found){
switch(arguments.length){
case 2:
return G__84405__2.call(this,this_sym84359,k);
case 3:
return G__84405__3.call(this,this_sym84359,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__84405;
})()
;
cljs.core.PersistentVector.prototype.apply = (function (this_sym84347,args84348){
var this__84365 = this;
return this_sym84347.call.apply(this_sym84347,[this_sym84347].concat(args84348.slice()));
});
cljs.core.PersistentVector.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (v,f,init){
var this__84366 = this;
var step_init__84367 = [0,init];
var i__84368 = 0;
while(true){
if((i__84368 < this__84366.cnt))
{var arr__84369 = cljs.core.array_for.call(null,v,i__84368);
var len__84370 = arr__84369.length;
var init__84374 = (function (){var j__84371 = 0;
var init__84372 = (step_init__84367[1]);
while(true){
if((j__84371 < len__84370))
{var init__84373 = f.call(null,init__84372,(j__84371 + i__84368),(arr__84369[j__84371]));
if(cljs.core.reduced_QMARK_.call(null,init__84373))
{return init__84373;
} else
{{
var G__84406 = (j__84371 + 1);
var G__84407 = init__84373;
j__84371 = G__84406;
init__84372 = G__84407;
continue;
}
}
} else
{(step_init__84367[0] = len__84370);
(step_init__84367[1] = init__84372);
return init__84372;
}
break;
}
})();
if(cljs.core.reduced_QMARK_.call(null,init__84374))
{return cljs.core.deref.call(null,init__84374);
} else
{{
var G__84408 = (i__84368 + (step_init__84367[0]));
i__84368 = G__84408;
continue;
}
}
} else
{return (step_init__84367[1]);
}
break;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__84375 = this;
if(((this__84375.cnt - cljs.core.tail_off.call(null,coll)) < 32))
{var new_tail__84376 = this__84375.tail.slice();
new_tail__84376.push(o);
return (new cljs.core.PersistentVector(this__84375.meta,(this__84375.cnt + 1),this__84375.shift,this__84375.root,new_tail__84376,null));
} else
{var root_overflow_QMARK___84377 = ((this__84375.cnt >>> 5) > (1 << this__84375.shift));
var new_shift__84378 = ((root_overflow_QMARK___84377)?(this__84375.shift + 5):this__84375.shift);
var new_root__84380 = ((root_overflow_QMARK___84377)?(function (){var n_r__84379 = cljs.core.pv_fresh_node.call(null,null);
cljs.core.pv_aset.call(null,n_r__84379,0,this__84375.root);
cljs.core.pv_aset.call(null,n_r__84379,1,cljs.core.new_path.call(null,null,this__84375.shift,(new cljs.core.VectorNode(null,this__84375.tail))));
return n_r__84379;
})():cljs.core.push_tail.call(null,coll,this__84375.shift,this__84375.root,(new cljs.core.VectorNode(null,this__84375.tail))));
return (new cljs.core.PersistentVector(this__84375.meta,(this__84375.cnt + 1),new_shift__84378,new_root__84380,[o],null));
}
});
cljs.core.PersistentVector.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__84381 = this;
if((this__84381.cnt > 0))
{return (new cljs.core.RSeq(coll,(this__84381.cnt - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (coll){
var this__84382 = this;
return coll.cljs$core$IIndexed$_nth$arity$2(coll,0);
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (coll){
var this__84383 = this;
return coll.cljs$core$IIndexed$_nth$arity$2(coll,1);
});
cljs.core.PersistentVector.prototype.toString = (function (){
var this__84384 = this;
var this__84385 = this;
return cljs.core.pr_str.call(null,this__84385);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var this__84386 = this;
return cljs.core.ci_reduce.call(null,v,f);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var this__84387 = this;
return cljs.core.ci_reduce.call(null,v,f,start);
});
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__84388 = this;
if((this__84388.cnt === 0))
{return null;
} else
{return cljs.core.chunked_seq.call(null,coll,0,0);
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__84389 = this;
return this__84389.cnt;
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__84390 = this;
if((this__84390.cnt > 0))
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,(this__84390.cnt - 1));
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__84391 = this;
if((this__84391.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === this__84391.cnt))
{return cljs.core._with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__84391.meta);
} else
{if((1 < (this__84391.cnt - cljs.core.tail_off.call(null,coll))))
{return (new cljs.core.PersistentVector(this__84391.meta,(this__84391.cnt - 1),this__84391.shift,this__84391.root,this__84391.tail.slice(0,-1),null));
} else
{if("\uFDD0'else")
{var new_tail__84392 = cljs.core.array_for.call(null,coll,(this__84391.cnt - 2));
var nr__84393 = cljs.core.pop_tail.call(null,coll,this__84391.shift,this__84391.root);
var new_root__84394 = (((nr__84393 == null))?cljs.core.PersistentVector.EMPTY_NODE:nr__84393);
var cnt_1__84395 = (this__84391.cnt - 1);
if((function (){var and__3822__auto____84396 = (5 < this__84391.shift);
if(and__3822__auto____84396)
{return (cljs.core.pv_aget.call(null,new_root__84394,1) == null);
} else
{return and__3822__auto____84396;
}
})())
{return (new cljs.core.PersistentVector(this__84391.meta,cnt_1__84395,(this__84391.shift - 5),cljs.core.pv_aget.call(null,new_root__84394,0),new_tail__84392,null));
} else
{return (new cljs.core.PersistentVector(this__84391.meta,cnt_1__84395,this__84391.shift,new_root__84394,new_tail__84392,null));
}
} else
{return null;
}
}
}
}
});
cljs.core.PersistentVector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__84397 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__84398 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__84399 = this;
return (new cljs.core.PersistentVector(meta,this__84399.cnt,this__84399.shift,this__84399.root,this__84399.tail,this__84399.__hash));
});
cljs.core.PersistentVector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__84400 = this;
return this__84400.meta;
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__84401 = this;
return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__84402 = this;
if((function (){var and__3822__auto____84403 = (0 <= n);
if(and__3822__auto____84403)
{return (n < this__84402.cnt);
} else
{return and__3822__auto____84403;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return not_found;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__84404 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__84404.meta);
});
cljs.core.PersistentVector;
cljs.core.PersistentVector.EMPTY_NODE = cljs.core.pv_fresh_node.call(null,null);
cljs.core.PersistentVector.EMPTY = (new cljs.core.PersistentVector(null,0,5,cljs.core.PersistentVector.EMPTY_NODE,[],0));
cljs.core.PersistentVector.fromArray = (function (xs,no_clone){
var l__84409 = xs.length;
var xs__84410 = (((no_clone === true))?xs:xs.slice());
if((l__84409 < 32))
{return (new cljs.core.PersistentVector(null,l__84409,5,cljs.core.PersistentVector.EMPTY_NODE,xs__84410,null));
} else
{var node__84411 = xs__84410.slice(0,32);
var v__84412 = (new cljs.core.PersistentVector(null,32,5,cljs.core.PersistentVector.EMPTY_NODE,node__84411,null));
var i__84413 = 32;
var out__84414 = cljs.core._as_transient.call(null,v__84412);
while(true){
if((i__84413 < l__84409))
{{
var G__84415 = (i__84413 + 1);
var G__84416 = cljs.core.conj_BANG_.call(null,out__84414,(xs__84410[i__84413]));
i__84413 = G__84415;
out__84414 = G__84416;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__84414);
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
vector.cljs$lang$applyTo = (function (arglist__84417){
var args = cljs.core.seq(arglist__84417);;
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
var this__84418 = this;
var h__5347__auto____84419 = this__84418.__hash;
if(!((h__5347__auto____84419 == null)))
{return h__5347__auto____84419;
} else
{var h__5347__auto____84420 = cljs.core.hash_coll.call(null,coll);
this__84418.__hash = h__5347__auto____84420;
return h__5347__auto____84420;
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__84421 = this;
if(((this__84421.off + 1) < this__84421.node.length))
{var s__84422 = cljs.core.chunked_seq.call(null,this__84421.vec,this__84421.node,this__84421.i,(this__84421.off + 1));
if((s__84422 == null))
{return null;
} else
{return s__84422;
}
} else
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__84423 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__84424 = this;
return coll;
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__84425 = this;
return (this__84425.node[this__84425.off]);
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__84426 = this;
if(((this__84426.off + 1) < this__84426.node.length))
{var s__84427 = cljs.core.chunked_seq.call(null,this__84426.vec,this__84426.node,this__84426.i,(this__84426.off + 1));
if((s__84427 == null))
{return cljs.core.List.EMPTY;
} else
{return s__84427;
}
} else
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var this__84428 = this;
var l__84429 = this__84428.node.length;
var s__84430 = ((((this__84428.i + l__84429) < cljs.core._count.call(null,this__84428.vec)))?cljs.core.chunked_seq.call(null,this__84428.vec,(this__84428.i + l__84429),0):null);
if((s__84430 == null))
{return null;
} else
{return s__84430;
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__84431 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var this__84432 = this;
return cljs.core.chunked_seq.call(null,this__84432.vec,this__84432.node,this__84432.i,this__84432.off,m);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_meta$arity$1 = (function (coll){
var this__84433 = this;
return this__84433.meta;
});
cljs.core.ChunkedSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__84434 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__84434.meta);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var this__84435 = this;
return cljs.core.array_chunk.call(null,this__84435.node,this__84435.off);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var this__84436 = this;
var l__84437 = this__84436.node.length;
var s__84438 = ((((this__84436.i + l__84437) < cljs.core._count.call(null,this__84436.vec)))?cljs.core.chunked_seq.call(null,this__84436.vec,(this__84436.i + l__84437),0):null);
if((s__84438 == null))
{return cljs.core.List.EMPTY;
} else
{return s__84438;
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
var this__84441 = this;
var h__5347__auto____84442 = this__84441.__hash;
if(!((h__5347__auto____84442 == null)))
{return h__5347__auto____84442;
} else
{var h__5347__auto____84443 = cljs.core.hash_coll.call(null,coll);
this__84441.__hash = h__5347__auto____84443;
return h__5347__auto____84443;
}
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__84444 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__84445 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,key,val){
var this__84446 = this;
var v_pos__84447 = (this__84446.start + key);
return (new cljs.core.Subvec(this__84446.meta,cljs.core._assoc.call(null,this__84446.v,v_pos__84447,val),this__84446.start,((this__84446.end > (v_pos__84447 + 1)) ? this__84446.end : (v_pos__84447 + 1)),null));
});
cljs.core.Subvec.prototype.call = (function() {
var G__84473 = null;
var G__84473__2 = (function (this_sym84448,k){
var this__84450 = this;
var this_sym84448__84451 = this;
var coll__84452 = this_sym84448__84451;
return coll__84452.cljs$core$ILookup$_lookup$arity$2(coll__84452,k);
});
var G__84473__3 = (function (this_sym84449,k,not_found){
var this__84450 = this;
var this_sym84449__84453 = this;
var coll__84454 = this_sym84449__84453;
return coll__84454.cljs$core$ILookup$_lookup$arity$3(coll__84454,k,not_found);
});
G__84473 = function(this_sym84449,k,not_found){
switch(arguments.length){
case 2:
return G__84473__2.call(this,this_sym84449,k);
case 3:
return G__84473__3.call(this,this_sym84449,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__84473;
})()
;
cljs.core.Subvec.prototype.apply = (function (this_sym84439,args84440){
var this__84455 = this;
return this_sym84439.call.apply(this_sym84439,[this_sym84439].concat(args84440.slice()));
});
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__84456 = this;
return (new cljs.core.Subvec(this__84456.meta,cljs.core._assoc_n.call(null,this__84456.v,this__84456.end,o),this__84456.start,(this__84456.end + 1),null));
});
cljs.core.Subvec.prototype.toString = (function (){
var this__84457 = this;
var this__84458 = this;
return cljs.core.pr_str.call(null,this__84458);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__84459 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__84460 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__84461 = this;
var subvec_seq__84462 = (function subvec_seq(i){
if((i === this__84461.end))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__84461.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}),null)));
}
});
return subvec_seq__84462.call(null,this__84461.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__84463 = this;
return (this__84463.end - this__84463.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__84464 = this;
return cljs.core._nth.call(null,this__84464.v,(this__84464.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__84465 = this;
if((this__84465.start === this__84465.end))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__84465.meta,this__84465.v,this__84465.start,(this__84465.end - 1),null));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__84466 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__84467 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__84468 = this;
return (new cljs.core.Subvec(meta,this__84468.v,this__84468.start,this__84468.end,this__84468.__hash));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__84469 = this;
return this__84469.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__84470 = this;
return cljs.core._nth.call(null,this__84470.v,(this__84470.start + n));
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__84471 = this;
return cljs.core._nth.call(null,this__84471.v,(this__84471.start + n),not_found);
});
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__84472 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__84472.meta);
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
var ret__84475 = cljs.core.make_array.call(null,32);
cljs.core.array_copy.call(null,tl,0,ret__84475,0,tl.length);
return ret__84475;
});
cljs.core.tv_push_tail = (function tv_push_tail(tv,level,parent,tail_node){
var ret__84479 = cljs.core.tv_ensure_editable.call(null,tv.root.edit,parent);
var subidx__84480 = (((tv.cnt - 1) >>> level) & 31);
cljs.core.pv_aset.call(null,ret__84479,subidx__84480,(((level === 5))?tail_node:(function (){var child__84481 = cljs.core.pv_aget.call(null,ret__84479,subidx__84480);
if(!((child__84481 == null)))
{return tv_push_tail.call(null,tv,(level - 5),child__84481,tail_node);
} else
{return cljs.core.new_path.call(null,tv.root.edit,(level - 5),tail_node);
}
})()));
return ret__84479;
});
cljs.core.tv_pop_tail = (function tv_pop_tail(tv,level,node){
var node__84486 = cljs.core.tv_ensure_editable.call(null,tv.root.edit,node);
var subidx__84487 = (((tv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child__84488 = tv_pop_tail.call(null,tv,(level - 5),cljs.core.pv_aget.call(null,node__84486,subidx__84487));
if((function (){var and__3822__auto____84489 = (new_child__84488 == null);
if(and__3822__auto____84489)
{return (subidx__84487 === 0);
} else
{return and__3822__auto____84489;
}
})())
{return null;
} else
{cljs.core.pv_aset.call(null,node__84486,subidx__84487,new_child__84488);
return node__84486;
}
} else
{if((subidx__84487 === 0))
{return null;
} else
{if("\uFDD0'else")
{cljs.core.pv_aset.call(null,node__84486,subidx__84487,null);
return node__84486;
} else
{return null;
}
}
}
});
cljs.core.editable_array_for = (function editable_array_for(tv,i){
if((function (){var and__3822__auto____84494 = (0 <= i);
if(and__3822__auto____84494)
{return (i < tv.cnt);
} else
{return and__3822__auto____84494;
}
})())
{if((i >= cljs.core.tail_off.call(null,tv)))
{return tv.tail;
} else
{var root__84495 = tv.root;
var node__84496 = root__84495;
var level__84497 = tv.shift;
while(true){
if((level__84497 > 0))
{{
var G__84498 = cljs.core.tv_ensure_editable.call(null,root__84495.edit,cljs.core.pv_aget.call(null,node__84496,((i >>> level__84497) & 31)));
var G__84499 = (level__84497 - 5);
node__84496 = G__84498;
level__84497 = G__84499;
continue;
}
} else
{return node__84496.arr;
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
var G__84539 = null;
var G__84539__2 = (function (this_sym84502,k){
var this__84504 = this;
var this_sym84502__84505 = this;
var coll__84506 = this_sym84502__84505;
return coll__84506.cljs$core$ILookup$_lookup$arity$2(coll__84506,k);
});
var G__84539__3 = (function (this_sym84503,k,not_found){
var this__84504 = this;
var this_sym84503__84507 = this;
var coll__84508 = this_sym84503__84507;
return coll__84508.cljs$core$ILookup$_lookup$arity$3(coll__84508,k,not_found);
});
G__84539 = function(this_sym84503,k,not_found){
switch(arguments.length){
case 2:
return G__84539__2.call(this,this_sym84503,k);
case 3:
return G__84539__3.call(this,this_sym84503,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__84539;
})()
;
cljs.core.TransientVector.prototype.apply = (function (this_sym84500,args84501){
var this__84509 = this;
return this_sym84500.call.apply(this_sym84500,[this_sym84500].concat(args84501.slice()));
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__84510 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__84511 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__84512 = this;
if(this__84512.root.edit)
{return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
} else
{throw (new Error("nth after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__84513 = this;
if((function (){var and__3822__auto____84514 = (0 <= n);
if(and__3822__auto____84514)
{return (n < this__84513.cnt);
} else
{return and__3822__auto____84514;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return not_found;
}
});
cljs.core.TransientVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__84515 = this;
if(this__84515.root.edit)
{return this__84515.cnt;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3 = (function (tcoll,n,val){
var this__84516 = this;
if(this__84516.root.edit)
{if((function (){var and__3822__auto____84517 = (0 <= n);
if(and__3822__auto____84517)
{return (n < this__84516.cnt);
} else
{return and__3822__auto____84517;
}
})())
{if((cljs.core.tail_off.call(null,tcoll) <= n))
{(this__84516.tail[(n & 31)] = val);
return tcoll;
} else
{var new_root__84522 = (function go(level,node){
var node__84520 = cljs.core.tv_ensure_editable.call(null,this__84516.root.edit,node);
if((level === 0))
{cljs.core.pv_aset.call(null,node__84520,(n & 31),val);
return node__84520;
} else
{var subidx__84521 = ((n >>> level) & 31);
cljs.core.pv_aset.call(null,node__84520,subidx__84521,go.call(null,(level - 5),cljs.core.pv_aget.call(null,node__84520,subidx__84521)));
return node__84520;
}
}).call(null,this__84516.shift,this__84516.root);
this__84516.root = new_root__84522;
return tcoll;
}
} else
{if((n === this__84516.cnt))
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Index "),cljs.core.str(n),cljs.core.str(" out of bounds for TransientVector of length"),cljs.core.str(this__84516.cnt)].join('')));
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
var this__84523 = this;
if(this__84523.root.edit)
{if((this__84523.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === this__84523.cnt))
{this__84523.cnt = 0;
return tcoll;
} else
{if((((this__84523.cnt - 1) & 31) > 0))
{this__84523.cnt = (this__84523.cnt - 1);
return tcoll;
} else
{if("\uFDD0'else")
{var new_tail__84524 = cljs.core.editable_array_for.call(null,tcoll,(this__84523.cnt - 2));
var new_root__84526 = (function (){var nr__84525 = cljs.core.tv_pop_tail.call(null,tcoll,this__84523.shift,this__84523.root);
if(!((nr__84525 == null)))
{return nr__84525;
} else
{return (new cljs.core.VectorNode(this__84523.root.edit,cljs.core.make_array.call(null,32)));
}
})();
if((function (){var and__3822__auto____84527 = (5 < this__84523.shift);
if(and__3822__auto____84527)
{return (cljs.core.pv_aget.call(null,new_root__84526,1) == null);
} else
{return and__3822__auto____84527;
}
})())
{var new_root__84528 = cljs.core.tv_ensure_editable.call(null,this__84523.root.edit,cljs.core.pv_aget.call(null,new_root__84526,0));
this__84523.root = new_root__84528;
this__84523.shift = (this__84523.shift - 5);
this__84523.cnt = (this__84523.cnt - 1);
this__84523.tail = new_tail__84524;
return tcoll;
} else
{this__84523.root = new_root__84526;
this__84523.cnt = (this__84523.cnt - 1);
this__84523.tail = new_tail__84524;
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
var this__84529 = this;
return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,key,val);
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__84530 = this;
if(this__84530.root.edit)
{if(((this__84530.cnt - cljs.core.tail_off.call(null,tcoll)) < 32))
{(this__84530.tail[(this__84530.cnt & 31)] = o);
this__84530.cnt = (this__84530.cnt + 1);
return tcoll;
} else
{var tail_node__84531 = (new cljs.core.VectorNode(this__84530.root.edit,this__84530.tail));
var new_tail__84532 = cljs.core.make_array.call(null,32);
(new_tail__84532[0] = o);
this__84530.tail = new_tail__84532;
if(((this__84530.cnt >>> 5) > (1 << this__84530.shift)))
{var new_root_array__84533 = cljs.core.make_array.call(null,32);
var new_shift__84534 = (this__84530.shift + 5);
(new_root_array__84533[0] = this__84530.root);
(new_root_array__84533[1] = cljs.core.new_path.call(null,this__84530.root.edit,this__84530.shift,tail_node__84531));
this__84530.root = (new cljs.core.VectorNode(this__84530.root.edit,new_root_array__84533));
this__84530.shift = new_shift__84534;
this__84530.cnt = (this__84530.cnt + 1);
return tcoll;
} else
{var new_root__84535 = cljs.core.tv_push_tail.call(null,tcoll,this__84530.shift,this__84530.root,tail_node__84531);
this__84530.root = new_root__84535;
this__84530.cnt = (this__84530.cnt + 1);
return tcoll;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__84536 = this;
if(this__84536.root.edit)
{this__84536.root.edit = null;
var len__84537 = (this__84536.cnt - cljs.core.tail_off.call(null,tcoll));
var trimmed_tail__84538 = cljs.core.make_array.call(null,len__84537);
cljs.core.array_copy.call(null,this__84536.tail,0,trimmed_tail__84538,0,len__84537);
return (new cljs.core.PersistentVector(null,this__84536.cnt,this__84536.shift,this__84536.root,trimmed_tail__84538,null));
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
var this__84540 = this;
var h__5347__auto____84541 = this__84540.__hash;
if(!((h__5347__auto____84541 == null)))
{return h__5347__auto____84541;
} else
{var h__5347__auto____84542 = cljs.core.hash_coll.call(null,coll);
this__84540.__hash = h__5347__auto____84542;
return h__5347__auto____84542;
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__84543 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.toString = (function (){
var this__84544 = this;
var this__84545 = this;
return cljs.core.pr_str.call(null,this__84545);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__84546 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__84547 = this;
return cljs.core._first.call(null,this__84547.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__84548 = this;
var temp__3971__auto____84549 = cljs.core.next.call(null,this__84548.front);
if(temp__3971__auto____84549)
{var f1__84550 = temp__3971__auto____84549;
return (new cljs.core.PersistentQueueSeq(this__84548.meta,f1__84550,this__84548.rear,null));
} else
{if((this__84548.rear == null))
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__84548.meta,this__84548.rear,null,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__84551 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__84552 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__84552.front,this__84552.rear,this__84552.__hash));
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__84553 = this;
return this__84553.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__84554 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__84554.meta);
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
var this__84555 = this;
var h__5347__auto____84556 = this__84555.__hash;
if(!((h__5347__auto____84556 == null)))
{return h__5347__auto____84556;
} else
{var h__5347__auto____84557 = cljs.core.hash_coll.call(null,coll);
this__84555.__hash = h__5347__auto____84557;
return h__5347__auto____84557;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__84558 = this;
if(cljs.core.truth_(this__84558.front))
{return (new cljs.core.PersistentQueue(this__84558.meta,(this__84558.count + 1),this__84558.front,cljs.core.conj.call(null,(function (){var or__3824__auto____84559 = this__84558.rear;
if(cljs.core.truth_(or__3824__auto____84559))
{return or__3824__auto____84559;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})(),o),null));
} else
{return (new cljs.core.PersistentQueue(this__84558.meta,(this__84558.count + 1),cljs.core.conj.call(null,this__84558.front,o),cljs.core.PersistentVector.EMPTY,null));
}
});
cljs.core.PersistentQueue.prototype.toString = (function (){
var this__84560 = this;
var this__84561 = this;
return cljs.core.pr_str.call(null,this__84561);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__84562 = this;
var rear__84563 = cljs.core.seq.call(null,this__84562.rear);
if(cljs.core.truth_((function (){var or__3824__auto____84564 = this__84562.front;
if(cljs.core.truth_(or__3824__auto____84564))
{return or__3824__auto____84564;
} else
{return rear__84563;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__84562.front,cljs.core.seq.call(null,rear__84563),null));
} else
{return null;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__84565 = this;
return this__84565.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__84566 = this;
return cljs.core._first.call(null,this__84566.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__84567 = this;
if(cljs.core.truth_(this__84567.front))
{var temp__3971__auto____84568 = cljs.core.next.call(null,this__84567.front);
if(temp__3971__auto____84568)
{var f1__84569 = temp__3971__auto____84568;
return (new cljs.core.PersistentQueue(this__84567.meta,(this__84567.count - 1),f1__84569,this__84567.rear,null));
} else
{return (new cljs.core.PersistentQueue(this__84567.meta,(this__84567.count - 1),cljs.core.seq.call(null,this__84567.rear),cljs.core.PersistentVector.EMPTY,null));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__84570 = this;
return cljs.core.first.call(null,this__84570.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__84571 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__84572 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__84573 = this;
return (new cljs.core.PersistentQueue(meta,this__84573.count,this__84573.front,this__84573.rear,this__84573.__hash));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__84574 = this;
return this__84574.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__84575 = this;
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
var this__84576 = this;
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
var len__84579 = array.length;
var i__84580 = 0;
while(true){
if((i__84580 < len__84579))
{if((k === (array[i__84580])))
{return i__84580;
} else
{{
var G__84581 = (i__84580 + incr);
i__84580 = G__84581;
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
var a__84584 = cljs.core.hash.call(null,a);
var b__84585 = cljs.core.hash.call(null,b);
if((a__84584 < b__84585))
{return -1;
} else
{if((a__84584 > b__84585))
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
var ks__84593 = m.keys;
var len__84594 = ks__84593.length;
var so__84595 = m.strobj;
var out__84596 = cljs.core.with_meta.call(null,cljs.core.PersistentHashMap.EMPTY,cljs.core.meta.call(null,m));
var i__84597 = 0;
var out__84598 = cljs.core.transient$.call(null,out__84596);
while(true){
if((i__84597 < len__84594))
{var k__84599 = (ks__84593[i__84597]);
{
var G__84600 = (i__84597 + 1);
var G__84601 = cljs.core.assoc_BANG_.call(null,out__84598,k__84599,(so__84595[k__84599]));
i__84597 = G__84600;
out__84598 = G__84601;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,cljs.core.assoc_BANG_.call(null,out__84598,k,v));
}
break;
}
});
cljs.core.obj_clone = (function obj_clone(obj,ks){
var new_obj__84607 = {};
var l__84608 = ks.length;
var i__84609 = 0;
while(true){
if((i__84609 < l__84608))
{var k__84610 = (ks[i__84609]);
(new_obj__84607[k__84610] = (obj[k__84610]));
{
var G__84611 = (i__84609 + 1);
i__84609 = G__84611;
continue;
}
} else
{}
break;
}
return new_obj__84607;
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
var this__84614 = this;
return cljs.core.transient$.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null),coll));
});
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__84615 = this;
var h__5347__auto____84616 = this__84615.__hash;
if(!((h__5347__auto____84616 == null)))
{return h__5347__auto____84616;
} else
{var h__5347__auto____84617 = cljs.core.hash_imap.call(null,coll);
this__84615.__hash = h__5347__auto____84617;
return h__5347__auto____84617;
}
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__84618 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__84619 = this;
if((function (){var and__3822__auto____84620 = goog.isString(k);
if(and__3822__auto____84620)
{return !((cljs.core.scan_array.call(null,1,k,this__84619.keys) == null));
} else
{return and__3822__auto____84620;
}
})())
{return (this__84619.strobj[k]);
} else
{return not_found;
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__84621 = this;
if(goog.isString(k))
{if((function (){var or__3824__auto____84622 = (this__84621.update_count > cljs.core.ObjMap.HASHMAP_THRESHOLD);
if(or__3824__auto____84622)
{return or__3824__auto____84622;
} else
{return (this__84621.keys.length >= cljs.core.ObjMap.HASHMAP_THRESHOLD);
}
})())
{return cljs.core.obj_map__GT_hash_map.call(null,coll,k,v);
} else
{if(!((cljs.core.scan_array.call(null,1,k,this__84621.keys) == null)))
{var new_strobj__84623 = cljs.core.obj_clone.call(null,this__84621.strobj,this__84621.keys);
(new_strobj__84623[k] = v);
return (new cljs.core.ObjMap(this__84621.meta,this__84621.keys,new_strobj__84623,(this__84621.update_count + 1),null));
} else
{var new_strobj__84624 = cljs.core.obj_clone.call(null,this__84621.strobj,this__84621.keys);
var new_keys__84625 = this__84621.keys.slice();
(new_strobj__84624[k] = v);
new_keys__84625.push(k);
return (new cljs.core.ObjMap(this__84621.meta,new_keys__84625,new_strobj__84624,(this__84621.update_count + 1),null));
}
}
} else
{return cljs.core.obj_map__GT_hash_map.call(null,coll,k,v);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__84626 = this;
if((function (){var and__3822__auto____84627 = goog.isString(k);
if(and__3822__auto____84627)
{return !((cljs.core.scan_array.call(null,1,k,this__84626.keys) == null));
} else
{return and__3822__auto____84627;
}
})())
{return true;
} else
{return false;
}
});
cljs.core.ObjMap.prototype.call = (function() {
var G__84649 = null;
var G__84649__2 = (function (this_sym84628,k){
var this__84630 = this;
var this_sym84628__84631 = this;
var coll__84632 = this_sym84628__84631;
return coll__84632.cljs$core$ILookup$_lookup$arity$2(coll__84632,k);
});
var G__84649__3 = (function (this_sym84629,k,not_found){
var this__84630 = this;
var this_sym84629__84633 = this;
var coll__84634 = this_sym84629__84633;
return coll__84634.cljs$core$ILookup$_lookup$arity$3(coll__84634,k,not_found);
});
G__84649 = function(this_sym84629,k,not_found){
switch(arguments.length){
case 2:
return G__84649__2.call(this,this_sym84629,k);
case 3:
return G__84649__3.call(this,this_sym84629,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__84649;
})()
;
cljs.core.ObjMap.prototype.apply = (function (this_sym84612,args84613){
var this__84635 = this;
return this_sym84612.call.apply(this_sym84612,[this_sym84612].concat(args84613.slice()));
});
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__84636 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.toString = (function (){
var this__84637 = this;
var this__84638 = this;
return cljs.core.pr_str.call(null,this__84638);
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__84639 = this;
if((this__84639.keys.length > 0))
{return cljs.core.map.call(null,(function (p1__84602_SHARP_){
return cljs.core.vector.call(null,p1__84602_SHARP_,(this__84639.strobj[p1__84602_SHARP_]));
}),this__84639.keys.sort(cljs.core.obj_map_compare_keys));
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__84640 = this;
return this__84640.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__84641 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__84642 = this;
return (new cljs.core.ObjMap(meta,this__84642.keys,this__84642.strobj,this__84642.update_count,this__84642.__hash));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__84643 = this;
return this__84643.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__84644 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__84644.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__84645 = this;
if((function (){var and__3822__auto____84646 = goog.isString(k);
if(and__3822__auto____84646)
{return !((cljs.core.scan_array.call(null,1,k,this__84645.keys) == null));
} else
{return and__3822__auto____84646;
}
})())
{var new_keys__84647 = this__84645.keys.slice();
var new_strobj__84648 = cljs.core.obj_clone.call(null,this__84645.strobj,this__84645.keys);
new_keys__84647.splice(cljs.core.scan_array.call(null,1,k,new_keys__84647),1);
cljs.core.js_delete.call(null,new_strobj__84648,k);
return (new cljs.core.ObjMap(this__84645.meta,new_keys__84647,new_strobj__84648,(this__84645.update_count + 1),null));
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
var this__84653 = this;
var h__5347__auto____84654 = this__84653.__hash;
if(!((h__5347__auto____84654 == null)))
{return h__5347__auto____84654;
} else
{var h__5347__auto____84655 = cljs.core.hash_imap.call(null,coll);
this__84653.__hash = h__5347__auto____84655;
return h__5347__auto____84655;
}
});
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__84656 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__84657 = this;
var bucket__84658 = (this__84657.hashobj[cljs.core.hash.call(null,k)]);
var i__84659 = (cljs.core.truth_(bucket__84658)?cljs.core.scan_array.call(null,2,k,bucket__84658):null);
if(cljs.core.truth_(i__84659))
{return (bucket__84658[(i__84659 + 1)]);
} else
{return not_found;
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__84660 = this;
var h__84661 = cljs.core.hash.call(null,k);
var bucket__84662 = (this__84660.hashobj[h__84661]);
if(cljs.core.truth_(bucket__84662))
{var new_bucket__84663 = bucket__84662.slice();
var new_hashobj__84664 = goog.object.clone(this__84660.hashobj);
(new_hashobj__84664[h__84661] = new_bucket__84663);
var temp__3971__auto____84665 = cljs.core.scan_array.call(null,2,k,new_bucket__84663);
if(cljs.core.truth_(temp__3971__auto____84665))
{var i__84666 = temp__3971__auto____84665;
(new_bucket__84663[(i__84666 + 1)] = v);
return (new cljs.core.HashMap(this__84660.meta,this__84660.count,new_hashobj__84664,null));
} else
{new_bucket__84663.push(k,v);
return (new cljs.core.HashMap(this__84660.meta,(this__84660.count + 1),new_hashobj__84664,null));
}
} else
{var new_hashobj__84667 = goog.object.clone(this__84660.hashobj);
(new_hashobj__84667[h__84661] = [k,v]);
return (new cljs.core.HashMap(this__84660.meta,(this__84660.count + 1),new_hashobj__84667,null));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__84668 = this;
var bucket__84669 = (this__84668.hashobj[cljs.core.hash.call(null,k)]);
var i__84670 = (cljs.core.truth_(bucket__84669)?cljs.core.scan_array.call(null,2,k,bucket__84669):null);
if(cljs.core.truth_(i__84670))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.call = (function() {
var G__84695 = null;
var G__84695__2 = (function (this_sym84671,k){
var this__84673 = this;
var this_sym84671__84674 = this;
var coll__84675 = this_sym84671__84674;
return coll__84675.cljs$core$ILookup$_lookup$arity$2(coll__84675,k);
});
var G__84695__3 = (function (this_sym84672,k,not_found){
var this__84673 = this;
var this_sym84672__84676 = this;
var coll__84677 = this_sym84672__84676;
return coll__84677.cljs$core$ILookup$_lookup$arity$3(coll__84677,k,not_found);
});
G__84695 = function(this_sym84672,k,not_found){
switch(arguments.length){
case 2:
return G__84695__2.call(this,this_sym84672,k);
case 3:
return G__84695__3.call(this,this_sym84672,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__84695;
})()
;
cljs.core.HashMap.prototype.apply = (function (this_sym84651,args84652){
var this__84678 = this;
return this_sym84651.call.apply(this_sym84651,[this_sym84651].concat(args84652.slice()));
});
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__84679 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.toString = (function (){
var this__84680 = this;
var this__84681 = this;
return cljs.core.pr_str.call(null,this__84681);
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__84682 = this;
if((this__84682.count > 0))
{var hashes__84683 = cljs.core.js_keys.call(null,this__84682.hashobj).sort();
return cljs.core.mapcat.call(null,(function (p1__84650_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__84682.hashobj[p1__84650_SHARP_])));
}),hashes__84683);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__84684 = this;
return this__84684.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__84685 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__84686 = this;
return (new cljs.core.HashMap(meta,this__84686.count,this__84686.hashobj,this__84686.__hash));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__84687 = this;
return this__84687.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__84688 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__84688.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__84689 = this;
var h__84690 = cljs.core.hash.call(null,k);
var bucket__84691 = (this__84689.hashobj[h__84690]);
var i__84692 = (cljs.core.truth_(bucket__84691)?cljs.core.scan_array.call(null,2,k,bucket__84691):null);
if(cljs.core.not.call(null,i__84692))
{return coll;
} else
{var new_hashobj__84693 = goog.object.clone(this__84689.hashobj);
if((3 > bucket__84691.length))
{cljs.core.js_delete.call(null,new_hashobj__84693,h__84690);
} else
{var new_bucket__84694 = bucket__84691.slice();
new_bucket__84694.splice(i__84692,2);
(new_hashobj__84693[h__84690] = new_bucket__84694);
}
return (new cljs.core.HashMap(this__84689.meta,(this__84689.count - 1),new_hashobj__84693,null));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,{},0));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__84696 = ks.length;
var i__84697 = 0;
var out__84698 = cljs.core.HashMap.EMPTY;
while(true){
if((i__84697 < len__84696))
{{
var G__84699 = (i__84697 + 1);
var G__84700 = cljs.core.assoc.call(null,out__84698,(ks[i__84697]),(vs[i__84697]));
i__84697 = G__84699;
out__84698 = G__84700;
continue;
}
} else
{return out__84698;
}
break;
}
});
cljs.core.array_map_index_of = (function array_map_index_of(m,k){
var arr__84704 = m.arr;
var len__84705 = arr__84704.length;
var i__84706 = 0;
while(true){
if((len__84705 <= i__84706))
{return -1;
} else
{if(cljs.core._EQ_.call(null,(arr__84704[i__84706]),k))
{return i__84706;
} else
{if("\uFDD0'else")
{{
var G__84707 = (i__84706 + 2);
i__84706 = G__84707;
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
var this__84710 = this;
return (new cljs.core.TransientArrayMap({},this__84710.arr.length,this__84710.arr.slice()));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__84711 = this;
var h__5347__auto____84712 = this__84711.__hash;
if(!((h__5347__auto____84712 == null)))
{return h__5347__auto____84712;
} else
{var h__5347__auto____84713 = cljs.core.hash_imap.call(null,coll);
this__84711.__hash = h__5347__auto____84713;
return h__5347__auto____84713;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__84714 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__84715 = this;
var idx__84716 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__84716 === -1))
{return not_found;
} else
{return (this__84715.arr[(idx__84716 + 1)]);
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__84717 = this;
var idx__84718 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__84718 === -1))
{if((this__84717.cnt < cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD))
{return (new cljs.core.PersistentArrayMap(this__84717.meta,(this__84717.cnt + 1),(function (){var G__84719__84720 = this__84717.arr.slice();
G__84719__84720.push(k);
G__84719__84720.push(v);
return G__84719__84720;
})(),null));
} else
{return cljs.core.persistent_BANG_.call(null,cljs.core.assoc_BANG_.call(null,cljs.core.transient$.call(null,cljs.core.into.call(null,cljs.core.PersistentHashMap.EMPTY,coll)),k,v));
}
} else
{if((v === (this__84717.arr[(idx__84718 + 1)])))
{return coll;
} else
{if("\uFDD0'else")
{return (new cljs.core.PersistentArrayMap(this__84717.meta,this__84717.cnt,(function (){var G__84721__84722 = this__84717.arr.slice();
(G__84721__84722[(idx__84718 + 1)] = v);
return G__84721__84722;
})(),null));
} else
{return null;
}
}
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__84723 = this;
return !((cljs.core.array_map_index_of.call(null,coll,k) === -1));
});
cljs.core.PersistentArrayMap.prototype.call = (function() {
var G__84755 = null;
var G__84755__2 = (function (this_sym84724,k){
var this__84726 = this;
var this_sym84724__84727 = this;
var coll__84728 = this_sym84724__84727;
return coll__84728.cljs$core$ILookup$_lookup$arity$2(coll__84728,k);
});
var G__84755__3 = (function (this_sym84725,k,not_found){
var this__84726 = this;
var this_sym84725__84729 = this;
var coll__84730 = this_sym84725__84729;
return coll__84730.cljs$core$ILookup$_lookup$arity$3(coll__84730,k,not_found);
});
G__84755 = function(this_sym84725,k,not_found){
switch(arguments.length){
case 2:
return G__84755__2.call(this,this_sym84725,k);
case 3:
return G__84755__3.call(this,this_sym84725,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__84755;
})()
;
cljs.core.PersistentArrayMap.prototype.apply = (function (this_sym84708,args84709){
var this__84731 = this;
return this_sym84708.call.apply(this_sym84708,[this_sym84708].concat(args84709.slice()));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__84732 = this;
var len__84733 = this__84732.arr.length;
var i__84734 = 0;
var init__84735 = init;
while(true){
if((i__84734 < len__84733))
{var init__84736 = f.call(null,init__84735,(this__84732.arr[i__84734]),(this__84732.arr[(i__84734 + 1)]));
if(cljs.core.reduced_QMARK_.call(null,init__84736))
{return cljs.core.deref.call(null,init__84736);
} else
{{
var G__84756 = (i__84734 + 2);
var G__84757 = init__84736;
i__84734 = G__84756;
init__84735 = G__84757;
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
var this__84737 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentArrayMap.prototype.toString = (function (){
var this__84738 = this;
var this__84739 = this;
return cljs.core.pr_str.call(null,this__84739);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__84740 = this;
if((this__84740.cnt > 0))
{var len__84741 = this__84740.arr.length;
var array_map_seq__84742 = (function array_map_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if((i < len__84741))
{return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([(this__84740.arr[i]),(this__84740.arr[(i + 1)])], true),array_map_seq.call(null,(i + 2)));
} else
{return null;
}
}),null));
});
return array_map_seq__84742.call(null,0);
} else
{return null;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__84743 = this;
return this__84743.cnt;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__84744 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__84745 = this;
return (new cljs.core.PersistentArrayMap(meta,this__84745.cnt,this__84745.arr,this__84745.__hash));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__84746 = this;
return this__84746.meta;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__84747 = this;
return cljs.core._with_meta.call(null,cljs.core.PersistentArrayMap.EMPTY,this__84747.meta);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__84748 = this;
var idx__84749 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__84749 >= 0))
{var len__84750 = this__84748.arr.length;
var new_len__84751 = (len__84750 - 2);
if((new_len__84751 === 0))
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{var new_arr__84752 = cljs.core.make_array.call(null,new_len__84751);
var s__84753 = 0;
var d__84754 = 0;
while(true){
if((s__84753 >= len__84750))
{return (new cljs.core.PersistentArrayMap(this__84748.meta,(this__84748.cnt - 1),new_arr__84752,null));
} else
{if(cljs.core._EQ_.call(null,k,(this__84748.arr[s__84753])))
{{
var G__84758 = (s__84753 + 2);
var G__84759 = d__84754;
s__84753 = G__84758;
d__84754 = G__84759;
continue;
}
} else
{if("\uFDD0'else")
{(new_arr__84752[d__84754] = (this__84748.arr[s__84753]));
(new_arr__84752[(d__84754 + 1)] = (this__84748.arr[(s__84753 + 1)]));
{
var G__84760 = (s__84753 + 2);
var G__84761 = (d__84754 + 2);
s__84753 = G__84760;
d__84754 = G__84761;
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
var len__84762 = cljs.core.count.call(null,ks);
var i__84763 = 0;
var out__84764 = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i__84763 < len__84762))
{{
var G__84765 = (i__84763 + 1);
var G__84766 = cljs.core.assoc_BANG_.call(null,out__84764,(ks[i__84763]),(vs[i__84763]));
i__84763 = G__84765;
out__84764 = G__84766;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__84764);
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
var this__84767 = this;
if(cljs.core.truth_(this__84767.editable_QMARK_))
{var idx__84768 = cljs.core.array_map_index_of.call(null,tcoll,key);
if((idx__84768 >= 0))
{(this__84767.arr[idx__84768] = (this__84767.arr[(this__84767.len - 2)]));
(this__84767.arr[(idx__84768 + 1)] = (this__84767.arr[(this__84767.len - 1)]));
var G__84769__84770 = this__84767.arr;
G__84769__84770.pop();
G__84769__84770.pop();
G__84769__84770;
this__84767.len = (this__84767.len - 2);
} else
{}
return tcoll;
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__84771 = this;
if(cljs.core.truth_(this__84771.editable_QMARK_))
{var idx__84772 = cljs.core.array_map_index_of.call(null,tcoll,key);
if((idx__84772 === -1))
{if(((this__84771.len + 2) <= (2 * cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD)))
{this__84771.len = (this__84771.len + 2);
this__84771.arr.push(key);
this__84771.arr.push(val);
return tcoll;
} else
{return cljs.core.assoc_BANG_.call(null,cljs.core.array__GT_transient_hash_map.call(null,this__84771.len,this__84771.arr),key,val);
}
} else
{if((val === (this__84771.arr[(idx__84772 + 1)])))
{return tcoll;
} else
{(this__84771.arr[(idx__84772 + 1)] = val);
return tcoll;
}
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__84773 = this;
if(cljs.core.truth_(this__84773.editable_QMARK_))
{if((function (){var G__84774__84775 = o;
if(G__84774__84775)
{if((function (){var or__3824__auto____84776 = (G__84774__84775.cljs$lang$protocol_mask$partition0$ & 2048);
if(or__3824__auto____84776)
{return or__3824__auto____84776;
} else
{return G__84774__84775.cljs$core$IMapEntry$;
}
})())
{return true;
} else
{if((!G__84774__84775.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__84774__84775);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__84774__84775);
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,cljs.core.key.call(null,o),cljs.core.val.call(null,o));
} else
{var es__84777 = cljs.core.seq.call(null,o);
var tcoll__84778 = tcoll;
while(true){
var temp__3971__auto____84779 = cljs.core.first.call(null,es__84777);
if(cljs.core.truth_(temp__3971__auto____84779))
{var e__84780 = temp__3971__auto____84779;
{
var G__84786 = cljs.core.next.call(null,es__84777);
var G__84787 = tcoll__84778.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll__84778,cljs.core.key.call(null,e__84780),cljs.core.val.call(null,e__84780));
es__84777 = G__84786;
tcoll__84778 = G__84787;
continue;
}
} else
{return tcoll__84778;
}
break;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__84781 = this;
if(cljs.core.truth_(this__84781.editable_QMARK_))
{this__84781.editable_QMARK_ = false;
return (new cljs.core.PersistentArrayMap(null,cljs.core.quot.call(null,this__84781.len,2),this__84781.arr,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var this__84782 = this;
return tcoll.cljs$core$ILookup$_lookup$arity$3(tcoll,k,null);
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var this__84783 = this;
if(cljs.core.truth_(this__84783.editable_QMARK_))
{var idx__84784 = cljs.core.array_map_index_of.call(null,tcoll,k);
if((idx__84784 === -1))
{return not_found;
} else
{return (this__84783.arr[(idx__84784 + 1)]);
}
} else
{throw (new Error("lookup after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var this__84785 = this;
if(cljs.core.truth_(this__84785.editable_QMARK_))
{return cljs.core.quot.call(null,this__84785.len,2);
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientArrayMap;
cljs.core.array__GT_transient_hash_map = (function array__GT_transient_hash_map(len,arr){
var out__84790 = cljs.core.transient$.call(null,cljs.core.ObjMap.EMPTY);
var i__84791 = 0;
while(true){
if((i__84791 < len))
{{
var G__84792 = cljs.core.assoc_BANG_.call(null,out__84790,(arr[i__84791]),(arr[(i__84791 + 1)]));
var G__84793 = (i__84791 + 2);
out__84790 = G__84792;
i__84791 = G__84793;
continue;
}
} else
{return out__84790;
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
var G__84798__84799 = arr.slice();
(G__84798__84799[i] = a);
return G__84798__84799;
});
var clone_and_set__5 = (function (arr,i,a,j,b){
var G__84800__84801 = arr.slice();
(G__84800__84801[i] = a);
(G__84800__84801[j] = b);
return G__84800__84801;
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
var new_arr__84803 = cljs.core.make_array.call(null,(arr.length - 2));
cljs.core.array_copy.call(null,arr,0,new_arr__84803,0,(2 * i));
cljs.core.array_copy.call(null,arr,(2 * (i + 1)),new_arr__84803,(2 * i),(new_arr__84803.length - (2 * i)));
return new_arr__84803;
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
var editable__84806 = inode.ensure_editable(edit);
(editable__84806.arr[i] = a);
return editable__84806;
});
var edit_and_set__6 = (function (inode,edit,i,a,j,b){
var editable__84807 = inode.ensure_editable(edit);
(editable__84807.arr[i] = a);
(editable__84807.arr[j] = b);
return editable__84807;
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
var len__84814 = arr.length;
var i__84815 = 0;
var init__84816 = init;
while(true){
if((i__84815 < len__84814))
{var init__84819 = (function (){var k__84817 = (arr[i__84815]);
if(!((k__84817 == null)))
{return f.call(null,init__84816,k__84817,(arr[(i__84815 + 1)]));
} else
{var node__84818 = (arr[(i__84815 + 1)]);
if(!((node__84818 == null)))
{return node__84818.kv_reduce(f,init__84816);
} else
{return init__84816;
}
}
})();
if(cljs.core.reduced_QMARK_.call(null,init__84819))
{return cljs.core.deref.call(null,init__84819);
} else
{{
var G__84820 = (i__84815 + 2);
var G__84821 = init__84819;
i__84815 = G__84820;
init__84816 = G__84821;
continue;
}
}
} else
{return init__84816;
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
var this__84822 = this;
var inode__84823 = this;
if((this__84822.bitmap === bit))
{return null;
} else
{var editable__84824 = inode__84823.ensure_editable(e);
var earr__84825 = editable__84824.arr;
var len__84826 = earr__84825.length;
editable__84824.bitmap = (bit ^ editable__84824.bitmap);
cljs.core.array_copy.call(null,earr__84825,(2 * (i + 1)),earr__84825,(2 * i),(len__84826 - (2 * (i + 1))));
(earr__84825[(len__84826 - 2)] = null);
(earr__84825[(len__84826 - 1)] = null);
return editable__84824;
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__84827 = this;
var inode__84828 = this;
var bit__84829 = (1 << ((hash >>> shift) & 0x01f));
var idx__84830 = cljs.core.bitmap_indexed_node_index.call(null,this__84827.bitmap,bit__84829);
if(((this__84827.bitmap & bit__84829) === 0))
{var n__84831 = cljs.core.bit_count.call(null,this__84827.bitmap);
if(((2 * n__84831) < this__84827.arr.length))
{var editable__84832 = inode__84828.ensure_editable(edit);
var earr__84833 = editable__84832.arr;
added_leaf_QMARK_.val = true;
cljs.core.array_copy_downward.call(null,earr__84833,(2 * idx__84830),earr__84833,(2 * (idx__84830 + 1)),(2 * (n__84831 - idx__84830)));
(earr__84833[(2 * idx__84830)] = key);
(earr__84833[((2 * idx__84830) + 1)] = val);
editable__84832.bitmap = (editable__84832.bitmap | bit__84829);
return editable__84832;
} else
{if((n__84831 >= 16))
{var nodes__84834 = cljs.core.make_array.call(null,32);
var jdx__84835 = ((hash >>> shift) & 0x01f);
(nodes__84834[jdx__84835] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_));
var i__84836 = 0;
var j__84837 = 0;
while(true){
if((i__84836 < 32))
{if((((this__84827.bitmap >>> i__84836) & 1) === 0))
{{
var G__84890 = (i__84836 + 1);
var G__84891 = j__84837;
i__84836 = G__84890;
j__84837 = G__84891;
continue;
}
} else
{(nodes__84834[i__84836] = ((!(((this__84827.arr[j__84837]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),cljs.core.hash.call(null,(this__84827.arr[j__84837])),(this__84827.arr[j__84837]),(this__84827.arr[(j__84837 + 1)]),added_leaf_QMARK_):(this__84827.arr[(j__84837 + 1)])));
{
var G__84892 = (i__84836 + 1);
var G__84893 = (j__84837 + 2);
i__84836 = G__84892;
j__84837 = G__84893;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(edit,(n__84831 + 1),nodes__84834));
} else
{if("\uFDD0'else")
{var new_arr__84838 = cljs.core.make_array.call(null,(2 * (n__84831 + 4)));
cljs.core.array_copy.call(null,this__84827.arr,0,new_arr__84838,0,(2 * idx__84830));
(new_arr__84838[(2 * idx__84830)] = key);
(new_arr__84838[((2 * idx__84830) + 1)] = val);
cljs.core.array_copy.call(null,this__84827.arr,(2 * idx__84830),new_arr__84838,(2 * (idx__84830 + 1)),(2 * (n__84831 - idx__84830)));
added_leaf_QMARK_.val = true;
var editable__84839 = inode__84828.ensure_editable(edit);
editable__84839.arr = new_arr__84838;
editable__84839.bitmap = (editable__84839.bitmap | bit__84829);
return editable__84839;
} else
{return null;
}
}
}
} else
{var key_or_nil__84840 = (this__84827.arr[(2 * idx__84830)]);
var val_or_node__84841 = (this__84827.arr[((2 * idx__84830) + 1)]);
if((key_or_nil__84840 == null))
{var n__84842 = val_or_node__84841.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__84842 === val_or_node__84841))
{return inode__84828;
} else
{return cljs.core.edit_and_set.call(null,inode__84828,edit,((2 * idx__84830) + 1),n__84842);
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__84840))
{if((val === val_or_node__84841))
{return inode__84828;
} else
{return cljs.core.edit_and_set.call(null,inode__84828,edit,((2 * idx__84830) + 1),val);
}
} else
{if("\uFDD0'else")
{added_leaf_QMARK_.val = true;
return cljs.core.edit_and_set.call(null,inode__84828,edit,(2 * idx__84830),null,((2 * idx__84830) + 1),cljs.core.create_node.call(null,edit,(shift + 5),key_or_nil__84840,val_or_node__84841,hash,key,val));
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_seq = (function (){
var this__84843 = this;
var inode__84844 = this;
return cljs.core.create_inode_seq.call(null,this__84843.arr);
});
cljs.core.BitmapIndexedNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__84845 = this;
var inode__84846 = this;
var bit__84847 = (1 << ((hash >>> shift) & 0x01f));
if(((this__84845.bitmap & bit__84847) === 0))
{return inode__84846;
} else
{var idx__84848 = cljs.core.bitmap_indexed_node_index.call(null,this__84845.bitmap,bit__84847);
var key_or_nil__84849 = (this__84845.arr[(2 * idx__84848)]);
var val_or_node__84850 = (this__84845.arr[((2 * idx__84848) + 1)]);
if((key_or_nil__84849 == null))
{var n__84851 = val_or_node__84850.inode_without_BANG_(edit,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n__84851 === val_or_node__84850))
{return inode__84846;
} else
{if(!((n__84851 == null)))
{return cljs.core.edit_and_set.call(null,inode__84846,edit,((2 * idx__84848) + 1),n__84851);
} else
{if((this__84845.bitmap === bit__84847))
{return null;
} else
{if("\uFDD0'else")
{return inode__84846.edit_and_remove_pair(edit,bit__84847,idx__84848);
} else
{return null;
}
}
}
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__84849))
{(removed_leaf_QMARK_[0] = true);
return inode__84846.edit_and_remove_pair(edit,bit__84847,idx__84848);
} else
{if("\uFDD0'else")
{return inode__84846;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.ensure_editable = (function (e){
var this__84852 = this;
var inode__84853 = this;
if((e === this__84852.edit))
{return inode__84853;
} else
{var n__84854 = cljs.core.bit_count.call(null,this__84852.bitmap);
var new_arr__84855 = cljs.core.make_array.call(null,(((n__84854 < 0))?4:(2 * (n__84854 + 1))));
cljs.core.array_copy.call(null,this__84852.arr,0,new_arr__84855,0,(2 * n__84854));
return (new cljs.core.BitmapIndexedNode(e,this__84852.bitmap,new_arr__84855));
}
});
cljs.core.BitmapIndexedNode.prototype.kv_reduce = (function (f,init){
var this__84856 = this;
var inode__84857 = this;
return cljs.core.inode_kv_reduce.call(null,this__84856.arr,f,init);
});
cljs.core.BitmapIndexedNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__84858 = this;
var inode__84859 = this;
var bit__84860 = (1 << ((hash >>> shift) & 0x01f));
if(((this__84858.bitmap & bit__84860) === 0))
{return not_found;
} else
{var idx__84861 = cljs.core.bitmap_indexed_node_index.call(null,this__84858.bitmap,bit__84860);
var key_or_nil__84862 = (this__84858.arr[(2 * idx__84861)]);
var val_or_node__84863 = (this__84858.arr[((2 * idx__84861) + 1)]);
if((key_or_nil__84862 == null))
{return val_or_node__84863.inode_find((shift + 5),hash,key,not_found);
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__84862))
{return cljs.core.PersistentVector.fromArray([key_or_nil__84862,val_or_node__84863], true);
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
var this__84864 = this;
var inode__84865 = this;
var bit__84866 = (1 << ((hash >>> shift) & 0x01f));
if(((this__84864.bitmap & bit__84866) === 0))
{return inode__84865;
} else
{var idx__84867 = cljs.core.bitmap_indexed_node_index.call(null,this__84864.bitmap,bit__84866);
var key_or_nil__84868 = (this__84864.arr[(2 * idx__84867)]);
var val_or_node__84869 = (this__84864.arr[((2 * idx__84867) + 1)]);
if((key_or_nil__84868 == null))
{var n__84870 = val_or_node__84869.inode_without((shift + 5),hash,key);
if((n__84870 === val_or_node__84869))
{return inode__84865;
} else
{if(!((n__84870 == null)))
{return (new cljs.core.BitmapIndexedNode(null,this__84864.bitmap,cljs.core.clone_and_set.call(null,this__84864.arr,((2 * idx__84867) + 1),n__84870)));
} else
{if((this__84864.bitmap === bit__84866))
{return null;
} else
{if("\uFDD0'else")
{return (new cljs.core.BitmapIndexedNode(null,(this__84864.bitmap ^ bit__84866),cljs.core.remove_pair.call(null,this__84864.arr,idx__84867)));
} else
{return null;
}
}
}
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__84868))
{return (new cljs.core.BitmapIndexedNode(null,(this__84864.bitmap ^ bit__84866),cljs.core.remove_pair.call(null,this__84864.arr,idx__84867)));
} else
{if("\uFDD0'else")
{return inode__84865;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__84871 = this;
var inode__84872 = this;
var bit__84873 = (1 << ((hash >>> shift) & 0x01f));
var idx__84874 = cljs.core.bitmap_indexed_node_index.call(null,this__84871.bitmap,bit__84873);
if(((this__84871.bitmap & bit__84873) === 0))
{var n__84875 = cljs.core.bit_count.call(null,this__84871.bitmap);
if((n__84875 >= 16))
{var nodes__84876 = cljs.core.make_array.call(null,32);
var jdx__84877 = ((hash >>> shift) & 0x01f);
(nodes__84876[jdx__84877] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_));
var i__84878 = 0;
var j__84879 = 0;
while(true){
if((i__84878 < 32))
{if((((this__84871.bitmap >>> i__84878) & 1) === 0))
{{
var G__84894 = (i__84878 + 1);
var G__84895 = j__84879;
i__84878 = G__84894;
j__84879 = G__84895;
continue;
}
} else
{(nodes__84876[i__84878] = ((!(((this__84871.arr[j__84879]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),cljs.core.hash.call(null,(this__84871.arr[j__84879])),(this__84871.arr[j__84879]),(this__84871.arr[(j__84879 + 1)]),added_leaf_QMARK_):(this__84871.arr[(j__84879 + 1)])));
{
var G__84896 = (i__84878 + 1);
var G__84897 = (j__84879 + 2);
i__84878 = G__84896;
j__84879 = G__84897;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(null,(n__84875 + 1),nodes__84876));
} else
{var new_arr__84880 = cljs.core.make_array.call(null,(2 * (n__84875 + 1)));
cljs.core.array_copy.call(null,this__84871.arr,0,new_arr__84880,0,(2 * idx__84874));
(new_arr__84880[(2 * idx__84874)] = key);
(new_arr__84880[((2 * idx__84874) + 1)] = val);
cljs.core.array_copy.call(null,this__84871.arr,(2 * idx__84874),new_arr__84880,(2 * (idx__84874 + 1)),(2 * (n__84875 - idx__84874)));
added_leaf_QMARK_.val = true;
return (new cljs.core.BitmapIndexedNode(null,(this__84871.bitmap | bit__84873),new_arr__84880));
}
} else
{var key_or_nil__84881 = (this__84871.arr[(2 * idx__84874)]);
var val_or_node__84882 = (this__84871.arr[((2 * idx__84874) + 1)]);
if((key_or_nil__84881 == null))
{var n__84883 = val_or_node__84882.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__84883 === val_or_node__84882))
{return inode__84872;
} else
{return (new cljs.core.BitmapIndexedNode(null,this__84871.bitmap,cljs.core.clone_and_set.call(null,this__84871.arr,((2 * idx__84874) + 1),n__84883)));
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__84881))
{if((val === val_or_node__84882))
{return inode__84872;
} else
{return (new cljs.core.BitmapIndexedNode(null,this__84871.bitmap,cljs.core.clone_and_set.call(null,this__84871.arr,((2 * idx__84874) + 1),val)));
}
} else
{if("\uFDD0'else")
{added_leaf_QMARK_.val = true;
return (new cljs.core.BitmapIndexedNode(null,this__84871.bitmap,cljs.core.clone_and_set.call(null,this__84871.arr,(2 * idx__84874),null,((2 * idx__84874) + 1),cljs.core.create_node.call(null,(shift + 5),key_or_nil__84881,val_or_node__84882,hash,key,val))));
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__84884 = this;
var inode__84885 = this;
var bit__84886 = (1 << ((hash >>> shift) & 0x01f));
if(((this__84884.bitmap & bit__84886) === 0))
{return not_found;
} else
{var idx__84887 = cljs.core.bitmap_indexed_node_index.call(null,this__84884.bitmap,bit__84886);
var key_or_nil__84888 = (this__84884.arr[(2 * idx__84887)]);
var val_or_node__84889 = (this__84884.arr[((2 * idx__84887) + 1)]);
if((key_or_nil__84888 == null))
{return val_or_node__84889.inode_lookup((shift + 5),hash,key,not_found);
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__84888))
{return val_or_node__84889;
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
var arr__84905 = array_node.arr;
var len__84906 = (2 * (array_node.cnt - 1));
var new_arr__84907 = cljs.core.make_array.call(null,len__84906);
var i__84908 = 0;
var j__84909 = 1;
var bitmap__84910 = 0;
while(true){
if((i__84908 < len__84906))
{if((function (){var and__3822__auto____84911 = !((i__84908 === idx));
if(and__3822__auto____84911)
{return !(((arr__84905[i__84908]) == null));
} else
{return and__3822__auto____84911;
}
})())
{(new_arr__84907[j__84909] = (arr__84905[i__84908]));
{
var G__84912 = (i__84908 + 1);
var G__84913 = (j__84909 + 2);
var G__84914 = (bitmap__84910 | (1 << i__84908));
i__84908 = G__84912;
j__84909 = G__84913;
bitmap__84910 = G__84914;
continue;
}
} else
{{
var G__84915 = (i__84908 + 1);
var G__84916 = j__84909;
var G__84917 = bitmap__84910;
i__84908 = G__84915;
j__84909 = G__84916;
bitmap__84910 = G__84917;
continue;
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,bitmap__84910,new_arr__84907));
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
var this__84918 = this;
var inode__84919 = this;
var idx__84920 = ((hash >>> shift) & 0x01f);
var node__84921 = (this__84918.arr[idx__84920]);
if((node__84921 == null))
{var editable__84922 = cljs.core.edit_and_set.call(null,inode__84919,edit,idx__84920,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_));
editable__84922.cnt = (editable__84922.cnt + 1);
return editable__84922;
} else
{var n__84923 = node__84921.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__84923 === node__84921))
{return inode__84919;
} else
{return cljs.core.edit_and_set.call(null,inode__84919,edit,idx__84920,n__84923);
}
}
});
cljs.core.ArrayNode.prototype.inode_seq = (function (){
var this__84924 = this;
var inode__84925 = this;
return cljs.core.create_array_node_seq.call(null,this__84924.arr);
});
cljs.core.ArrayNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__84926 = this;
var inode__84927 = this;
var idx__84928 = ((hash >>> shift) & 0x01f);
var node__84929 = (this__84926.arr[idx__84928]);
if((node__84929 == null))
{return inode__84927;
} else
{var n__84930 = node__84929.inode_without_BANG_(edit,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n__84930 === node__84929))
{return inode__84927;
} else
{if((n__84930 == null))
{if((this__84926.cnt <= 8))
{return cljs.core.pack_array_node.call(null,inode__84927,edit,idx__84928);
} else
{var editable__84931 = cljs.core.edit_and_set.call(null,inode__84927,edit,idx__84928,n__84930);
editable__84931.cnt = (editable__84931.cnt - 1);
return editable__84931;
}
} else
{if("\uFDD0'else")
{return cljs.core.edit_and_set.call(null,inode__84927,edit,idx__84928,n__84930);
} else
{return null;
}
}
}
}
});
cljs.core.ArrayNode.prototype.ensure_editable = (function (e){
var this__84932 = this;
var inode__84933 = this;
if((e === this__84932.edit))
{return inode__84933;
} else
{return (new cljs.core.ArrayNode(e,this__84932.cnt,this__84932.arr.slice()));
}
});
cljs.core.ArrayNode.prototype.kv_reduce = (function (f,init){
var this__84934 = this;
var inode__84935 = this;
var len__84936 = this__84934.arr.length;
var i__84937 = 0;
var init__84938 = init;
while(true){
if((i__84937 < len__84936))
{var node__84939 = (this__84934.arr[i__84937]);
if(!((node__84939 == null)))
{var init__84940 = node__84939.kv_reduce(f,init__84938);
if(cljs.core.reduced_QMARK_.call(null,init__84940))
{return cljs.core.deref.call(null,init__84940);
} else
{{
var G__84959 = (i__84937 + 1);
var G__84960 = init__84940;
i__84937 = G__84959;
init__84938 = G__84960;
continue;
}
}
} else
{return null;
}
} else
{return init__84938;
}
break;
}
});
cljs.core.ArrayNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__84941 = this;
var inode__84942 = this;
var idx__84943 = ((hash >>> shift) & 0x01f);
var node__84944 = (this__84941.arr[idx__84943]);
if(!((node__84944 == null)))
{return node__84944.inode_find((shift + 5),hash,key,not_found);
} else
{return not_found;
}
});
cljs.core.ArrayNode.prototype.inode_without = (function (shift,hash,key){
var this__84945 = this;
var inode__84946 = this;
var idx__84947 = ((hash >>> shift) & 0x01f);
var node__84948 = (this__84945.arr[idx__84947]);
if(!((node__84948 == null)))
{var n__84949 = node__84948.inode_without((shift + 5),hash,key);
if((n__84949 === node__84948))
{return inode__84946;
} else
{if((n__84949 == null))
{if((this__84945.cnt <= 8))
{return cljs.core.pack_array_node.call(null,inode__84946,null,idx__84947);
} else
{return (new cljs.core.ArrayNode(null,(this__84945.cnt - 1),cljs.core.clone_and_set.call(null,this__84945.arr,idx__84947,n__84949)));
}
} else
{if("\uFDD0'else")
{return (new cljs.core.ArrayNode(null,this__84945.cnt,cljs.core.clone_and_set.call(null,this__84945.arr,idx__84947,n__84949)));
} else
{return null;
}
}
}
} else
{return inode__84946;
}
});
cljs.core.ArrayNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__84950 = this;
var inode__84951 = this;
var idx__84952 = ((hash >>> shift) & 0x01f);
var node__84953 = (this__84950.arr[idx__84952]);
if((node__84953 == null))
{return (new cljs.core.ArrayNode(null,(this__84950.cnt + 1),cljs.core.clone_and_set.call(null,this__84950.arr,idx__84952,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_))));
} else
{var n__84954 = node__84953.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__84954 === node__84953))
{return inode__84951;
} else
{return (new cljs.core.ArrayNode(null,this__84950.cnt,cljs.core.clone_and_set.call(null,this__84950.arr,idx__84952,n__84954)));
}
}
});
cljs.core.ArrayNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__84955 = this;
var inode__84956 = this;
var idx__84957 = ((hash >>> shift) & 0x01f);
var node__84958 = (this__84955.arr[idx__84957]);
if(!((node__84958 == null)))
{return node__84958.inode_lookup((shift + 5),hash,key,not_found);
} else
{return not_found;
}
});
cljs.core.ArrayNode;
cljs.core.hash_collision_node_find_index = (function hash_collision_node_find_index(arr,cnt,key){
var lim__84963 = (2 * cnt);
var i__84964 = 0;
while(true){
if((i__84964 < lim__84963))
{if(cljs.core.key_test.call(null,key,(arr[i__84964])))
{return i__84964;
} else
{{
var G__84965 = (i__84964 + 2);
i__84964 = G__84965;
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
var this__84966 = this;
var inode__84967 = this;
if((hash === this__84966.collision_hash))
{var idx__84968 = cljs.core.hash_collision_node_find_index.call(null,this__84966.arr,this__84966.cnt,key);
if((idx__84968 === -1))
{if((this__84966.arr.length > (2 * this__84966.cnt)))
{var editable__84969 = cljs.core.edit_and_set.call(null,inode__84967,edit,(2 * this__84966.cnt),key,((2 * this__84966.cnt) + 1),val);
added_leaf_QMARK_.val = true;
editable__84969.cnt = (editable__84969.cnt + 1);
return editable__84969;
} else
{var len__84970 = this__84966.arr.length;
var new_arr__84971 = cljs.core.make_array.call(null,(len__84970 + 2));
cljs.core.array_copy.call(null,this__84966.arr,0,new_arr__84971,0,len__84970);
(new_arr__84971[len__84970] = key);
(new_arr__84971[(len__84970 + 1)] = val);
added_leaf_QMARK_.val = true;
return inode__84967.ensure_editable_array(edit,(this__84966.cnt + 1),new_arr__84971);
}
} else
{if(((this__84966.arr[(idx__84968 + 1)]) === val))
{return inode__84967;
} else
{return cljs.core.edit_and_set.call(null,inode__84967,edit,(idx__84968 + 1),val);
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,(1 << ((this__84966.collision_hash >>> shift) & 0x01f)),[null,inode__84967,null,null])).inode_assoc_BANG_(edit,shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_seq = (function (){
var this__84972 = this;
var inode__84973 = this;
return cljs.core.create_inode_seq.call(null,this__84972.arr);
});
cljs.core.HashCollisionNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__84974 = this;
var inode__84975 = this;
var idx__84976 = cljs.core.hash_collision_node_find_index.call(null,this__84974.arr,this__84974.cnt,key);
if((idx__84976 === -1))
{return inode__84975;
} else
{(removed_leaf_QMARK_[0] = true);
if((this__84974.cnt === 1))
{return null;
} else
{var editable__84977 = inode__84975.ensure_editable(edit);
var earr__84978 = editable__84977.arr;
(earr__84978[idx__84976] = (earr__84978[((2 * this__84974.cnt) - 2)]));
(earr__84978[(idx__84976 + 1)] = (earr__84978[((2 * this__84974.cnt) - 1)]));
(earr__84978[((2 * this__84974.cnt) - 1)] = null);
(earr__84978[((2 * this__84974.cnt) - 2)] = null);
editable__84977.cnt = (editable__84977.cnt - 1);
return editable__84977;
}
}
});
cljs.core.HashCollisionNode.prototype.ensure_editable = (function (e){
var this__84979 = this;
var inode__84980 = this;
if((e === this__84979.edit))
{return inode__84980;
} else
{var new_arr__84981 = cljs.core.make_array.call(null,(2 * (this__84979.cnt + 1)));
cljs.core.array_copy.call(null,this__84979.arr,0,new_arr__84981,0,(2 * this__84979.cnt));
return (new cljs.core.HashCollisionNode(e,this__84979.collision_hash,this__84979.cnt,new_arr__84981));
}
});
cljs.core.HashCollisionNode.prototype.kv_reduce = (function (f,init){
var this__84982 = this;
var inode__84983 = this;
return cljs.core.inode_kv_reduce.call(null,this__84982.arr,f,init);
});
cljs.core.HashCollisionNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__84984 = this;
var inode__84985 = this;
var idx__84986 = cljs.core.hash_collision_node_find_index.call(null,this__84984.arr,this__84984.cnt,key);
if((idx__84986 < 0))
{return not_found;
} else
{if(cljs.core.key_test.call(null,key,(this__84984.arr[idx__84986])))
{return cljs.core.PersistentVector.fromArray([(this__84984.arr[idx__84986]),(this__84984.arr[(idx__84986 + 1)])], true);
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
var this__84987 = this;
var inode__84988 = this;
var idx__84989 = cljs.core.hash_collision_node_find_index.call(null,this__84987.arr,this__84987.cnt,key);
if((idx__84989 === -1))
{return inode__84988;
} else
{if((this__84987.cnt === 1))
{return null;
} else
{if("\uFDD0'else")
{return (new cljs.core.HashCollisionNode(null,this__84987.collision_hash,(this__84987.cnt - 1),cljs.core.remove_pair.call(null,this__84987.arr,cljs.core.quot.call(null,idx__84989,2))));
} else
{return null;
}
}
}
});
cljs.core.HashCollisionNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__84990 = this;
var inode__84991 = this;
if((hash === this__84990.collision_hash))
{var idx__84992 = cljs.core.hash_collision_node_find_index.call(null,this__84990.arr,this__84990.cnt,key);
if((idx__84992 === -1))
{var len__84993 = this__84990.arr.length;
var new_arr__84994 = cljs.core.make_array.call(null,(len__84993 + 2));
cljs.core.array_copy.call(null,this__84990.arr,0,new_arr__84994,0,len__84993);
(new_arr__84994[len__84993] = key);
(new_arr__84994[(len__84993 + 1)] = val);
added_leaf_QMARK_.val = true;
return (new cljs.core.HashCollisionNode(null,this__84990.collision_hash,(this__84990.cnt + 1),new_arr__84994));
} else
{if(cljs.core._EQ_.call(null,(this__84990.arr[idx__84992]),val))
{return inode__84991;
} else
{return (new cljs.core.HashCollisionNode(null,this__84990.collision_hash,this__84990.cnt,cljs.core.clone_and_set.call(null,this__84990.arr,(idx__84992 + 1),val)));
}
}
} else
{return (new cljs.core.BitmapIndexedNode(null,(1 << ((this__84990.collision_hash >>> shift) & 0x01f)),[null,inode__84991])).inode_assoc(shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__84995 = this;
var inode__84996 = this;
var idx__84997 = cljs.core.hash_collision_node_find_index.call(null,this__84995.arr,this__84995.cnt,key);
if((idx__84997 < 0))
{return not_found;
} else
{if(cljs.core.key_test.call(null,key,(this__84995.arr[idx__84997])))
{return (this__84995.arr[(idx__84997 + 1)]);
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
var this__84998 = this;
var inode__84999 = this;
if((e === this__84998.edit))
{this__84998.arr = array;
this__84998.cnt = count;
return inode__84999;
} else
{return (new cljs.core.HashCollisionNode(this__84998.edit,this__84998.collision_hash,count,array));
}
});
cljs.core.HashCollisionNode;
cljs.core.create_node = (function() {
var create_node = null;
var create_node__6 = (function (shift,key1,val1,key2hash,key2,val2){
var key1hash__85004 = cljs.core.hash.call(null,key1);
if((key1hash__85004 === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash__85004,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK___85005 = (new cljs.core.Box(false));
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc(shift,key1hash__85004,key1,val1,added_leaf_QMARK___85005).inode_assoc(shift,key2hash,key2,val2,added_leaf_QMARK___85005);
}
});
var create_node__7 = (function (edit,shift,key1,val1,key2hash,key2,val2){
var key1hash__85006 = cljs.core.hash.call(null,key1);
if((key1hash__85006 === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash__85006,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK___85007 = (new cljs.core.Box(false));
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,shift,key1hash__85006,key1,val1,added_leaf_QMARK___85007).inode_assoc_BANG_(edit,shift,key2hash,key2,val2,added_leaf_QMARK___85007);
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
var this__85008 = this;
var h__5347__auto____85009 = this__85008.__hash;
if(!((h__5347__auto____85009 == null)))
{return h__5347__auto____85009;
} else
{var h__5347__auto____85010 = cljs.core.hash_coll.call(null,coll);
this__85008.__hash = h__5347__auto____85010;
return h__5347__auto____85010;
}
});
cljs.core.NodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__85011 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.NodeSeq.prototype.toString = (function (){
var this__85012 = this;
var this__85013 = this;
return cljs.core.pr_str.call(null,this__85013);
});
cljs.core.NodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__85014 = this;
return this$;
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__85015 = this;
if((this__85015.s == null))
{return cljs.core.PersistentVector.fromArray([(this__85015.nodes[this__85015.i]),(this__85015.nodes[(this__85015.i + 1)])], true);
} else
{return cljs.core.first.call(null,this__85015.s);
}
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__85016 = this;
if((this__85016.s == null))
{return cljs.core.create_inode_seq.call(null,this__85016.nodes,(this__85016.i + 2),null);
} else
{return cljs.core.create_inode_seq.call(null,this__85016.nodes,this__85016.i,cljs.core.next.call(null,this__85016.s));
}
});
cljs.core.NodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__85017 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.NodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__85018 = this;
return (new cljs.core.NodeSeq(meta,this__85018.nodes,this__85018.i,this__85018.s,this__85018.__hash));
});
cljs.core.NodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__85019 = this;
return this__85019.meta;
});
cljs.core.NodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__85020 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__85020.meta);
});
cljs.core.NodeSeq;
cljs.core.create_inode_seq = (function() {
var create_inode_seq = null;
var create_inode_seq__1 = (function (nodes){
return create_inode_seq.call(null,nodes,0,null);
});
var create_inode_seq__3 = (function (nodes,i,s){
if((s == null))
{var len__85027 = nodes.length;
var j__85028 = i;
while(true){
if((j__85028 < len__85027))
{if(!(((nodes[j__85028]) == null)))
{return (new cljs.core.NodeSeq(null,nodes,j__85028,null,null));
} else
{var temp__3971__auto____85029 = (nodes[(j__85028 + 1)]);
if(cljs.core.truth_(temp__3971__auto____85029))
{var node__85030 = temp__3971__auto____85029;
var temp__3971__auto____85031 = node__85030.inode_seq();
if(cljs.core.truth_(temp__3971__auto____85031))
{var node_seq__85032 = temp__3971__auto____85031;
return (new cljs.core.NodeSeq(null,nodes,(j__85028 + 2),node_seq__85032,null));
} else
{{
var G__85033 = (j__85028 + 2);
j__85028 = G__85033;
continue;
}
}
} else
{{
var G__85034 = (j__85028 + 2);
j__85028 = G__85034;
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
var this__85035 = this;
var h__5347__auto____85036 = this__85035.__hash;
if(!((h__5347__auto____85036 == null)))
{return h__5347__auto____85036;
} else
{var h__5347__auto____85037 = cljs.core.hash_coll.call(null,coll);
this__85035.__hash = h__5347__auto____85037;
return h__5347__auto____85037;
}
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__85038 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.ArrayNodeSeq.prototype.toString = (function (){
var this__85039 = this;
var this__85040 = this;
return cljs.core.pr_str.call(null,this__85040);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__85041 = this;
return this$;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__85042 = this;
return cljs.core.first.call(null,this__85042.s);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__85043 = this;
return cljs.core.create_array_node_seq.call(null,null,this__85043.nodes,this__85043.i,cljs.core.next.call(null,this__85043.s));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__85044 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__85045 = this;
return (new cljs.core.ArrayNodeSeq(meta,this__85045.nodes,this__85045.i,this__85045.s,this__85045.__hash));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__85046 = this;
return this__85046.meta;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__85047 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__85047.meta);
});
cljs.core.ArrayNodeSeq;
cljs.core.create_array_node_seq = (function() {
var create_array_node_seq = null;
var create_array_node_seq__1 = (function (nodes){
return create_array_node_seq.call(null,null,nodes,0,null);
});
var create_array_node_seq__4 = (function (meta,nodes,i,s){
if((s == null))
{var len__85054 = nodes.length;
var j__85055 = i;
while(true){
if((j__85055 < len__85054))
{var temp__3971__auto____85056 = (nodes[j__85055]);
if(cljs.core.truth_(temp__3971__auto____85056))
{var nj__85057 = temp__3971__auto____85056;
var temp__3971__auto____85058 = nj__85057.inode_seq();
if(cljs.core.truth_(temp__3971__auto____85058))
{var ns__85059 = temp__3971__auto____85058;
return (new cljs.core.ArrayNodeSeq(meta,nodes,(j__85055 + 1),ns__85059,null));
} else
{{
var G__85060 = (j__85055 + 1);
j__85055 = G__85060;
continue;
}
}
} else
{{
var G__85061 = (j__85055 + 1);
j__85055 = G__85061;
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
var this__85064 = this;
return (new cljs.core.TransientHashMap({},this__85064.root,this__85064.cnt,this__85064.has_nil_QMARK_,this__85064.nil_val));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__85065 = this;
var h__5347__auto____85066 = this__85065.__hash;
if(!((h__5347__auto____85066 == null)))
{return h__5347__auto____85066;
} else
{var h__5347__auto____85067 = cljs.core.hash_imap.call(null,coll);
this__85065.__hash = h__5347__auto____85067;
return h__5347__auto____85067;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__85068 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__85069 = this;
if((k == null))
{if(this__85069.has_nil_QMARK_)
{return this__85069.nil_val;
} else
{return not_found;
}
} else
{if((this__85069.root == null))
{return not_found;
} else
{if("\uFDD0'else")
{return this__85069.root.inode_lookup(0,cljs.core.hash.call(null,k),k,not_found);
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__85070 = this;
if((k == null))
{if((function (){var and__3822__auto____85071 = this__85070.has_nil_QMARK_;
if(and__3822__auto____85071)
{return (v === this__85070.nil_val);
} else
{return and__3822__auto____85071;
}
})())
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__85070.meta,((this__85070.has_nil_QMARK_)?this__85070.cnt:(this__85070.cnt + 1)),this__85070.root,true,v,null));
}
} else
{var added_leaf_QMARK___85072 = (new cljs.core.Box(false));
var new_root__85073 = (((this__85070.root == null))?cljs.core.BitmapIndexedNode.EMPTY:this__85070.root).inode_assoc(0,cljs.core.hash.call(null,k),k,v,added_leaf_QMARK___85072);
if((new_root__85073 === this__85070.root))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__85070.meta,((added_leaf_QMARK___85072.val)?(this__85070.cnt + 1):this__85070.cnt),new_root__85073,this__85070.has_nil_QMARK_,this__85070.nil_val,null));
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__85074 = this;
if((k == null))
{return this__85074.has_nil_QMARK_;
} else
{if((this__85074.root == null))
{return false;
} else
{if("\uFDD0'else")
{return !((this__85074.root.inode_lookup(0,cljs.core.hash.call(null,k),k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel));
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.call = (function() {
var G__85097 = null;
var G__85097__2 = (function (this_sym85075,k){
var this__85077 = this;
var this_sym85075__85078 = this;
var coll__85079 = this_sym85075__85078;
return coll__85079.cljs$core$ILookup$_lookup$arity$2(coll__85079,k);
});
var G__85097__3 = (function (this_sym85076,k,not_found){
var this__85077 = this;
var this_sym85076__85080 = this;
var coll__85081 = this_sym85076__85080;
return coll__85081.cljs$core$ILookup$_lookup$arity$3(coll__85081,k,not_found);
});
G__85097 = function(this_sym85076,k,not_found){
switch(arguments.length){
case 2:
return G__85097__2.call(this,this_sym85076,k);
case 3:
return G__85097__3.call(this,this_sym85076,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__85097;
})()
;
cljs.core.PersistentHashMap.prototype.apply = (function (this_sym85062,args85063){
var this__85082 = this;
return this_sym85062.call.apply(this_sym85062,[this_sym85062].concat(args85063.slice()));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__85083 = this;
var init__85084 = ((this__85083.has_nil_QMARK_)?f.call(null,init,null,this__85083.nil_val):init);
if(cljs.core.reduced_QMARK_.call(null,init__85084))
{return cljs.core.deref.call(null,init__85084);
} else
{if(!((this__85083.root == null)))
{return this__85083.root.kv_reduce(f,init__85084);
} else
{if("\uFDD0'else")
{return init__85084;
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__85085 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentHashMap.prototype.toString = (function (){
var this__85086 = this;
var this__85087 = this;
return cljs.core.pr_str.call(null,this__85087);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__85088 = this;
if((this__85088.cnt > 0))
{var s__85089 = ((!((this__85088.root == null)))?this__85088.root.inode_seq():null);
if(this__85088.has_nil_QMARK_)
{return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([null,this__85088.nil_val], true),s__85089);
} else
{return s__85089;
}
} else
{return null;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__85090 = this;
return this__85090.cnt;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__85091 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__85092 = this;
return (new cljs.core.PersistentHashMap(meta,this__85092.cnt,this__85092.root,this__85092.has_nil_QMARK_,this__85092.nil_val,this__85092.__hash));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__85093 = this;
return this__85093.meta;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__85094 = this;
return cljs.core._with_meta.call(null,cljs.core.PersistentHashMap.EMPTY,this__85094.meta);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__85095 = this;
if((k == null))
{if(this__85095.has_nil_QMARK_)
{return (new cljs.core.PersistentHashMap(this__85095.meta,(this__85095.cnt - 1),this__85095.root,false,null,null));
} else
{return coll;
}
} else
{if((this__85095.root == null))
{return coll;
} else
{if("\uFDD0'else")
{var new_root__85096 = this__85095.root.inode_without(0,cljs.core.hash.call(null,k),k);
if((new_root__85096 === this__85095.root))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__85095.meta,(this__85095.cnt - 1),new_root__85096,this__85095.has_nil_QMARK_,this__85095.nil_val,null));
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
var len__85098 = ks.length;
var i__85099 = 0;
var out__85100 = cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);
while(true){
if((i__85099 < len__85098))
{{
var G__85101 = (i__85099 + 1);
var G__85102 = cljs.core.assoc_BANG_.call(null,out__85100,(ks[i__85099]),(vs[i__85099]));
i__85099 = G__85101;
out__85100 = G__85102;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__85100);
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
var this__85103 = this;
return tcoll.without_BANG_(key);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__85104 = this;
return tcoll.assoc_BANG_(key,val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,val){
var this__85105 = this;
return tcoll.conj_BANG_(val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__85106 = this;
return tcoll.persistent_BANG_();
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var this__85107 = this;
if((k == null))
{if(this__85107.has_nil_QMARK_)
{return this__85107.nil_val;
} else
{return null;
}
} else
{if((this__85107.root == null))
{return null;
} else
{return this__85107.root.inode_lookup(0,cljs.core.hash.call(null,k),k);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var this__85108 = this;
if((k == null))
{if(this__85108.has_nil_QMARK_)
{return this__85108.nil_val;
} else
{return not_found;
}
} else
{if((this__85108.root == null))
{return not_found;
} else
{return this__85108.root.inode_lookup(0,cljs.core.hash.call(null,k),k,not_found);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__85109 = this;
if(this__85109.edit)
{return this__85109.count;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.conj_BANG_ = (function (o){
var this__85110 = this;
var tcoll__85111 = this;
if(this__85110.edit)
{if((function (){var G__85112__85113 = o;
if(G__85112__85113)
{if((function (){var or__3824__auto____85114 = (G__85112__85113.cljs$lang$protocol_mask$partition0$ & 2048);
if(or__3824__auto____85114)
{return or__3824__auto____85114;
} else
{return G__85112__85113.cljs$core$IMapEntry$;
}
})())
{return true;
} else
{if((!G__85112__85113.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__85112__85113);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__85112__85113);
}
})())
{return tcoll__85111.assoc_BANG_(cljs.core.key.call(null,o),cljs.core.val.call(null,o));
} else
{var es__85115 = cljs.core.seq.call(null,o);
var tcoll__85116 = tcoll__85111;
while(true){
var temp__3971__auto____85117 = cljs.core.first.call(null,es__85115);
if(cljs.core.truth_(temp__3971__auto____85117))
{var e__85118 = temp__3971__auto____85117;
{
var G__85129 = cljs.core.next.call(null,es__85115);
var G__85130 = tcoll__85116.assoc_BANG_(cljs.core.key.call(null,e__85118),cljs.core.val.call(null,e__85118));
es__85115 = G__85129;
tcoll__85116 = G__85130;
continue;
}
} else
{return tcoll__85116;
}
break;
}
}
} else
{throw (new Error("conj! after persistent"));
}
});
cljs.core.TransientHashMap.prototype.assoc_BANG_ = (function (k,v){
var this__85119 = this;
var tcoll__85120 = this;
if(this__85119.edit)
{if((k == null))
{if((this__85119.nil_val === v))
{} else
{this__85119.nil_val = v;
}
if(this__85119.has_nil_QMARK_)
{} else
{this__85119.count = (this__85119.count + 1);
this__85119.has_nil_QMARK_ = true;
}
return tcoll__85120;
} else
{var added_leaf_QMARK___85121 = (new cljs.core.Box(false));
var node__85122 = (((this__85119.root == null))?cljs.core.BitmapIndexedNode.EMPTY:this__85119.root).inode_assoc_BANG_(this__85119.edit,0,cljs.core.hash.call(null,k),k,v,added_leaf_QMARK___85121);
if((node__85122 === this__85119.root))
{} else
{this__85119.root = node__85122;
}
if(added_leaf_QMARK___85121.val)
{this__85119.count = (this__85119.count + 1);
} else
{}
return tcoll__85120;
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.without_BANG_ = (function (k){
var this__85123 = this;
var tcoll__85124 = this;
if(this__85123.edit)
{if((k == null))
{if(this__85123.has_nil_QMARK_)
{this__85123.has_nil_QMARK_ = false;
this__85123.nil_val = null;
this__85123.count = (this__85123.count - 1);
return tcoll__85124;
} else
{return tcoll__85124;
}
} else
{if((this__85123.root == null))
{return tcoll__85124;
} else
{var removed_leaf_QMARK___85125 = (new cljs.core.Box(false));
var node__85126 = this__85123.root.inode_without_BANG_(this__85123.edit,0,cljs.core.hash.call(null,k),k,removed_leaf_QMARK___85125);
if((node__85126 === this__85123.root))
{} else
{this__85123.root = node__85126;
}
if(cljs.core.truth_((removed_leaf_QMARK___85125[0])))
{this__85123.count = (this__85123.count - 1);
} else
{}
return tcoll__85124;
}
}
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.persistent_BANG_ = (function (){
var this__85127 = this;
var tcoll__85128 = this;
if(this__85127.edit)
{this__85127.edit = null;
return (new cljs.core.PersistentHashMap(null,this__85127.count,this__85127.root,this__85127.has_nil_QMARK_,this__85127.nil_val,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientHashMap;
cljs.core.tree_map_seq_push = (function tree_map_seq_push(node,stack,ascending_QMARK_){
var t__85133 = node;
var stack__85134 = stack;
while(true){
if(!((t__85133 == null)))
{{
var G__85135 = ((ascending_QMARK_)?t__85133.left:t__85133.right);
var G__85136 = cljs.core.conj.call(null,stack__85134,t__85133);
t__85133 = G__85135;
stack__85134 = G__85136;
continue;
}
} else
{return stack__85134;
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
var this__85137 = this;
var h__5347__auto____85138 = this__85137.__hash;
if(!((h__5347__auto____85138 == null)))
{return h__5347__auto____85138;
} else
{var h__5347__auto____85139 = cljs.core.hash_coll.call(null,coll);
this__85137.__hash = h__5347__auto____85139;
return h__5347__auto____85139;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__85140 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentTreeMapSeq.prototype.toString = (function (){
var this__85141 = this;
var this__85142 = this;
return cljs.core.pr_str.call(null,this__85142);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__85143 = this;
return this$;
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__85144 = this;
if((this__85144.cnt < 0))
{return (cljs.core.count.call(null,cljs.core.next.call(null,coll)) + 1);
} else
{return this__85144.cnt;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (this$){
var this__85145 = this;
return cljs.core.peek.call(null,this__85145.stack);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){
var this__85146 = this;
var t__85147 = cljs.core.first.call(null,this__85146.stack);
var next_stack__85148 = cljs.core.tree_map_seq_push.call(null,((this__85146.ascending_QMARK_)?t__85147.right:t__85147.left),cljs.core.next.call(null,this__85146.stack),this__85146.ascending_QMARK_);
if(!((next_stack__85148 == null)))
{return (new cljs.core.PersistentTreeMapSeq(null,next_stack__85148,this__85146.ascending_QMARK_,(this__85146.cnt - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__85149 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__85150 = this;
return (new cljs.core.PersistentTreeMapSeq(meta,this__85150.stack,this__85150.ascending_QMARK_,this__85150.cnt,this__85150.__hash));
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__85151 = this;
return this__85151.meta;
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__85152 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__85152.meta);
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
{if((function (){var and__3822__auto____85154 = cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right);
if(and__3822__auto____85154)
{return cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,right.left);
} else
{return and__3822__auto____85154;
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
{if((function (){var and__3822__auto____85156 = cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,left);
if(and__3822__auto____85156)
{return cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,left.right);
} else
{return and__3822__auto____85156;
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
var init__85160 = f.call(null,init,node.key,node.val);
if(cljs.core.reduced_QMARK_.call(null,init__85160))
{return cljs.core.deref.call(null,init__85160);
} else
{var init__85161 = ((!((node.left == null)))?tree_map_kv_reduce.call(null,node.left,f,init__85160):init__85160);
if(cljs.core.reduced_QMARK_.call(null,init__85161))
{return cljs.core.deref.call(null,init__85161);
} else
{var init__85162 = ((!((node.right == null)))?tree_map_kv_reduce.call(null,node.right,f,init__85161):init__85161);
if(cljs.core.reduced_QMARK_.call(null,init__85162))
{return cljs.core.deref.call(null,init__85162);
} else
{return init__85162;
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
var this__85165 = this;
var h__5347__auto____85166 = this__85165.__hash;
if(!((h__5347__auto____85166 == null)))
{return h__5347__auto____85166;
} else
{var h__5347__auto____85167 = cljs.core.hash_coll.call(null,coll);
this__85165.__hash = h__5347__auto____85167;
return h__5347__auto____85167;
}
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var this__85168 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,null);
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var this__85169 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,not_found);
});
cljs.core.BlackNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var this__85170 = this;
return cljs.core.assoc.call(null,cljs.core.PersistentVector.fromArray([this__85170.key,this__85170.val], true),k,v);
});
cljs.core.BlackNode.prototype.call = (function() {
var G__85218 = null;
var G__85218__2 = (function (this_sym85171,k){
var this__85173 = this;
var this_sym85171__85174 = this;
var node__85175 = this_sym85171__85174;
return node__85175.cljs$core$ILookup$_lookup$arity$2(node__85175,k);
});
var G__85218__3 = (function (this_sym85172,k,not_found){
var this__85173 = this;
var this_sym85172__85176 = this;
var node__85177 = this_sym85172__85176;
return node__85177.cljs$core$ILookup$_lookup$arity$3(node__85177,k,not_found);
});
G__85218 = function(this_sym85172,k,not_found){
switch(arguments.length){
case 2:
return G__85218__2.call(this,this_sym85172,k);
case 3:
return G__85218__3.call(this,this_sym85172,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__85218;
})()
;
cljs.core.BlackNode.prototype.apply = (function (this_sym85163,args85164){
var this__85178 = this;
return this_sym85163.call.apply(this_sym85163,[this_sym85163].concat(args85164.slice()));
});
cljs.core.BlackNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var this__85179 = this;
return cljs.core.PersistentVector.fromArray([this__85179.key,this__85179.val,o], true);
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var this__85180 = this;
return this__85180.key;
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var this__85181 = this;
return this__85181.val;
});
cljs.core.BlackNode.prototype.add_right = (function (ins){
var this__85182 = this;
var node__85183 = this;
return ins.balance_right(node__85183);
});
cljs.core.BlackNode.prototype.redden = (function (){
var this__85184 = this;
var node__85185 = this;
return (new cljs.core.RedNode(this__85184.key,this__85184.val,this__85184.left,this__85184.right,null));
});
cljs.core.BlackNode.prototype.remove_right = (function (del){
var this__85186 = this;
var node__85187 = this;
return cljs.core.balance_right_del.call(null,this__85186.key,this__85186.val,this__85186.left,del);
});
cljs.core.BlackNode.prototype.replace = (function (key,val,left,right){
var this__85188 = this;
var node__85189 = this;
return (new cljs.core.BlackNode(key,val,left,right,null));
});
cljs.core.BlackNode.prototype.kv_reduce = (function (f,init){
var this__85190 = this;
var node__85191 = this;
return cljs.core.tree_map_kv_reduce.call(null,node__85191,f,init);
});
cljs.core.BlackNode.prototype.remove_left = (function (del){
var this__85192 = this;
var node__85193 = this;
return cljs.core.balance_left_del.call(null,this__85192.key,this__85192.val,del,this__85192.right);
});
cljs.core.BlackNode.prototype.add_left = (function (ins){
var this__85194 = this;
var node__85195 = this;
return ins.balance_left(node__85195);
});
cljs.core.BlackNode.prototype.balance_left = (function (parent){
var this__85196 = this;
var node__85197 = this;
return (new cljs.core.BlackNode(parent.key,parent.val,node__85197,parent.right,null));
});
cljs.core.BlackNode.prototype.toString = (function() {
var G__85219 = null;
var G__85219__0 = (function (){
var this__85198 = this;
var this__85200 = this;
return cljs.core.pr_str.call(null,this__85200);
});
G__85219 = function(){
switch(arguments.length){
case 0:
return G__85219__0.call(this);
}
throw('Invalid arity: ' + arguments.length);
};
return G__85219;
})()
;
cljs.core.BlackNode.prototype.balance_right = (function (parent){
var this__85201 = this;
var node__85202 = this;
return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node__85202,null));
});
cljs.core.BlackNode.prototype.blacken = (function (){
var this__85203 = this;
var node__85204 = this;
return node__85204;
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var this__85205 = this;
return cljs.core.ci_reduce.call(null,node,f);
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var this__85206 = this;
return cljs.core.ci_reduce.call(null,node,f,start);
});
cljs.core.BlackNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var this__85207 = this;
return cljs.core.list.call(null,this__85207.key,this__85207.val);
});
cljs.core.BlackNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var this__85208 = this;
return 2;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var this__85209 = this;
return this__85209.val;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var this__85210 = this;
return cljs.core.PersistentVector.fromArray([this__85210.key], true);
});
cljs.core.BlackNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var this__85211 = this;
return cljs.core._assoc_n.call(null,cljs.core.PersistentVector.fromArray([this__85211.key,this__85211.val], true),n,v);
});
cljs.core.BlackNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__85212 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.BlackNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var this__85213 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([this__85213.key,this__85213.val], true),meta);
});
cljs.core.BlackNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var this__85214 = this;
return null;
});
cljs.core.BlackNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var this__85215 = this;
if((n === 0))
{return this__85215.key;
} else
{if((n === 1))
{return this__85215.val;
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
var this__85216 = this;
if((n === 0))
{return this__85216.key;
} else
{if((n === 1))
{return this__85216.val;
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
var this__85217 = this;
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
var this__85222 = this;
var h__5347__auto____85223 = this__85222.__hash;
if(!((h__5347__auto____85223 == null)))
{return h__5347__auto____85223;
} else
{var h__5347__auto____85224 = cljs.core.hash_coll.call(null,coll);
this__85222.__hash = h__5347__auto____85224;
return h__5347__auto____85224;
}
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var this__85225 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,null);
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var this__85226 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,not_found);
});
cljs.core.RedNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var this__85227 = this;
return cljs.core.assoc.call(null,cljs.core.PersistentVector.fromArray([this__85227.key,this__85227.val], true),k,v);
});
cljs.core.RedNode.prototype.call = (function() {
var G__85275 = null;
var G__85275__2 = (function (this_sym85228,k){
var this__85230 = this;
var this_sym85228__85231 = this;
var node__85232 = this_sym85228__85231;
return node__85232.cljs$core$ILookup$_lookup$arity$2(node__85232,k);
});
var G__85275__3 = (function (this_sym85229,k,not_found){
var this__85230 = this;
var this_sym85229__85233 = this;
var node__85234 = this_sym85229__85233;
return node__85234.cljs$core$ILookup$_lookup$arity$3(node__85234,k,not_found);
});
G__85275 = function(this_sym85229,k,not_found){
switch(arguments.length){
case 2:
return G__85275__2.call(this,this_sym85229,k);
case 3:
return G__85275__3.call(this,this_sym85229,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__85275;
})()
;
cljs.core.RedNode.prototype.apply = (function (this_sym85220,args85221){
var this__85235 = this;
return this_sym85220.call.apply(this_sym85220,[this_sym85220].concat(args85221.slice()));
});
cljs.core.RedNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var this__85236 = this;
return cljs.core.PersistentVector.fromArray([this__85236.key,this__85236.val,o], true);
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var this__85237 = this;
return this__85237.key;
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var this__85238 = this;
return this__85238.val;
});
cljs.core.RedNode.prototype.add_right = (function (ins){
var this__85239 = this;
var node__85240 = this;
return (new cljs.core.RedNode(this__85239.key,this__85239.val,this__85239.left,ins,null));
});
cljs.core.RedNode.prototype.redden = (function (){
var this__85241 = this;
var node__85242 = this;
throw (new Error("red-black tree invariant violation"));
});
cljs.core.RedNode.prototype.remove_right = (function (del){
var this__85243 = this;
var node__85244 = this;
return (new cljs.core.RedNode(this__85243.key,this__85243.val,this__85243.left,del,null));
});
cljs.core.RedNode.prototype.replace = (function (key,val,left,right){
var this__85245 = this;
var node__85246 = this;
return (new cljs.core.RedNode(key,val,left,right,null));
});
cljs.core.RedNode.prototype.kv_reduce = (function (f,init){
var this__85247 = this;
var node__85248 = this;
return cljs.core.tree_map_kv_reduce.call(null,node__85248,f,init);
});
cljs.core.RedNode.prototype.remove_left = (function (del){
var this__85249 = this;
var node__85250 = this;
return (new cljs.core.RedNode(this__85249.key,this__85249.val,del,this__85249.right,null));
});
cljs.core.RedNode.prototype.add_left = (function (ins){
var this__85251 = this;
var node__85252 = this;
return (new cljs.core.RedNode(this__85251.key,this__85251.val,ins,this__85251.right,null));
});
cljs.core.RedNode.prototype.balance_left = (function (parent){
var this__85253 = this;
var node__85254 = this;
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__85253.left))
{return (new cljs.core.RedNode(this__85253.key,this__85253.val,this__85253.left.blacken(),(new cljs.core.BlackNode(parent.key,parent.val,this__85253.right,parent.right,null)),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__85253.right))
{return (new cljs.core.RedNode(this__85253.right.key,this__85253.right.val,(new cljs.core.BlackNode(this__85253.key,this__85253.val,this__85253.left,this__85253.right.left,null)),(new cljs.core.BlackNode(parent.key,parent.val,this__85253.right.right,parent.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(parent.key,parent.val,node__85254,parent.right,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.toString = (function() {
var G__85276 = null;
var G__85276__0 = (function (){
var this__85255 = this;
var this__85257 = this;
return cljs.core.pr_str.call(null,this__85257);
});
G__85276 = function(){
switch(arguments.length){
case 0:
return G__85276__0.call(this);
}
throw('Invalid arity: ' + arguments.length);
};
return G__85276;
})()
;
cljs.core.RedNode.prototype.balance_right = (function (parent){
var this__85258 = this;
var node__85259 = this;
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__85258.right))
{return (new cljs.core.RedNode(this__85258.key,this__85258.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,this__85258.left,null)),this__85258.right.blacken(),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__85258.left))
{return (new cljs.core.RedNode(this__85258.left.key,this__85258.left.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,this__85258.left.left,null)),(new cljs.core.BlackNode(this__85258.key,this__85258.val,this__85258.left.right,this__85258.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node__85259,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.blacken = (function (){
var this__85260 = this;
var node__85261 = this;
return (new cljs.core.BlackNode(this__85260.key,this__85260.val,this__85260.left,this__85260.right,null));
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var this__85262 = this;
return cljs.core.ci_reduce.call(null,node,f);
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var this__85263 = this;
return cljs.core.ci_reduce.call(null,node,f,start);
});
cljs.core.RedNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var this__85264 = this;
return cljs.core.list.call(null,this__85264.key,this__85264.val);
});
cljs.core.RedNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var this__85265 = this;
return 2;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var this__85266 = this;
return this__85266.val;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var this__85267 = this;
return cljs.core.PersistentVector.fromArray([this__85267.key], true);
});
cljs.core.RedNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var this__85268 = this;
return cljs.core._assoc_n.call(null,cljs.core.PersistentVector.fromArray([this__85268.key,this__85268.val], true),n,v);
});
cljs.core.RedNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__85269 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.RedNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var this__85270 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([this__85270.key,this__85270.val], true),meta);
});
cljs.core.RedNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var this__85271 = this;
return null;
});
cljs.core.RedNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var this__85272 = this;
if((n === 0))
{return this__85272.key;
} else
{if((n === 1))
{return this__85272.val;
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
var this__85273 = this;
if((n === 0))
{return this__85273.key;
} else
{if((n === 1))
{return this__85273.val;
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
var this__85274 = this;
return cljs.core.PersistentVector.EMPTY;
});
cljs.core.RedNode;
cljs.core.tree_map_add = (function tree_map_add(comp,tree,k,v,found){
if((tree == null))
{return (new cljs.core.RedNode(k,v,null,null,null));
} else
{var c__85280 = comp.call(null,k,tree.key);
if((c__85280 === 0))
{(found[0] = tree);
return null;
} else
{if((c__85280 < 0))
{var ins__85281 = tree_map_add.call(null,comp,tree.left,k,v,found);
if(!((ins__85281 == null)))
{return tree.add_left(ins__85281);
} else
{return null;
}
} else
{if("\uFDD0'else")
{var ins__85282 = tree_map_add.call(null,comp,tree.right,k,v,found);
if(!((ins__85282 == null)))
{return tree.add_right(ins__85282);
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
{var app__85285 = tree_map_append.call(null,left.right,right.left);
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,app__85285))
{return (new cljs.core.RedNode(app__85285.key,app__85285.val,(new cljs.core.RedNode(left.key,left.val,left.left,app__85285.left,null)),(new cljs.core.RedNode(right.key,right.val,app__85285.right,right.right,null)),null));
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,(new cljs.core.RedNode(right.key,right.val,app__85285,right.right,null)),null));
}
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,tree_map_append.call(null,left.right,right),null));
}
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right))
{return (new cljs.core.RedNode(right.key,right.val,tree_map_append.call(null,left,right.left),right.right,null));
} else
{if("\uFDD0'else")
{var app__85286 = tree_map_append.call(null,left.right,right.left);
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,app__85286))
{return (new cljs.core.RedNode(app__85286.key,app__85286.val,(new cljs.core.BlackNode(left.key,left.val,left.left,app__85286.left,null)),(new cljs.core.BlackNode(right.key,right.val,app__85286.right,right.right,null)),null));
} else
{return cljs.core.balance_left_del.call(null,left.key,left.val,left.left,(new cljs.core.BlackNode(right.key,right.val,app__85286,right.right,null)));
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
{var c__85292 = comp.call(null,k,tree.key);
if((c__85292 === 0))
{(found[0] = tree);
return cljs.core.tree_map_append.call(null,tree.left,tree.right);
} else
{if((c__85292 < 0))
{var del__85293 = tree_map_remove.call(null,comp,tree.left,k,found);
if((function (){var or__3824__auto____85294 = !((del__85293 == null));
if(or__3824__auto____85294)
{return or__3824__auto____85294;
} else
{return !(((found[0]) == null));
}
})())
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,tree.left))
{return cljs.core.balance_left_del.call(null,tree.key,tree.val,del__85293,tree.right);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,del__85293,tree.right,null));
}
} else
{return null;
}
} else
{if("\uFDD0'else")
{var del__85295 = tree_map_remove.call(null,comp,tree.right,k,found);
if((function (){var or__3824__auto____85296 = !((del__85295 == null));
if(or__3824__auto____85296)
{return or__3824__auto____85296;
} else
{return !(((found[0]) == null));
}
})())
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,tree.right))
{return cljs.core.balance_right_del.call(null,tree.key,tree.val,tree.left,del__85295);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,tree.left,del__85295,null));
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
var tk__85299 = tree.key;
var c__85300 = comp.call(null,k,tk__85299);
if((c__85300 === 0))
{return tree.replace(tk__85299,v,tree.left,tree.right);
} else
{if((c__85300 < 0))
{return tree.replace(tk__85299,tree.val,tree_map_replace.call(null,comp,tree.left,k,v),tree.right);
} else
{if("\uFDD0'else")
{return tree.replace(tk__85299,tree.val,tree.left,tree_map_replace.call(null,comp,tree.right,k,v));
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
var this__85303 = this;
var h__5347__auto____85304 = this__85303.__hash;
if(!((h__5347__auto____85304 == null)))
{return h__5347__auto____85304;
} else
{var h__5347__auto____85305 = cljs.core.hash_imap.call(null,coll);
this__85303.__hash = h__5347__auto____85305;
return h__5347__auto____85305;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__85306 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__85307 = this;
var n__85308 = coll.entry_at(k);
if(!((n__85308 == null)))
{return n__85308.val;
} else
{return not_found;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__85309 = this;
var found__85310 = [null];
var t__85311 = cljs.core.tree_map_add.call(null,this__85309.comp,this__85309.tree,k,v,found__85310);
if((t__85311 == null))
{var found_node__85312 = cljs.core.nth.call(null,found__85310,0);
if(cljs.core._EQ_.call(null,v,found_node__85312.val))
{return coll;
} else
{return (new cljs.core.PersistentTreeMap(this__85309.comp,cljs.core.tree_map_replace.call(null,this__85309.comp,this__85309.tree,k,v),this__85309.cnt,this__85309.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(this__85309.comp,t__85311.blacken(),(this__85309.cnt + 1),this__85309.meta,null));
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__85313 = this;
return !((coll.entry_at(k) == null));
});
cljs.core.PersistentTreeMap.prototype.call = (function() {
var G__85347 = null;
var G__85347__2 = (function (this_sym85314,k){
var this__85316 = this;
var this_sym85314__85317 = this;
var coll__85318 = this_sym85314__85317;
return coll__85318.cljs$core$ILookup$_lookup$arity$2(coll__85318,k);
});
var G__85347__3 = (function (this_sym85315,k,not_found){
var this__85316 = this;
var this_sym85315__85319 = this;
var coll__85320 = this_sym85315__85319;
return coll__85320.cljs$core$ILookup$_lookup$arity$3(coll__85320,k,not_found);
});
G__85347 = function(this_sym85315,k,not_found){
switch(arguments.length){
case 2:
return G__85347__2.call(this,this_sym85315,k);
case 3:
return G__85347__3.call(this,this_sym85315,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__85347;
})()
;
cljs.core.PersistentTreeMap.prototype.apply = (function (this_sym85301,args85302){
var this__85321 = this;
return this_sym85301.call.apply(this_sym85301,[this_sym85301].concat(args85302.slice()));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__85322 = this;
if(!((this__85322.tree == null)))
{return cljs.core.tree_map_kv_reduce.call(null,this__85322.tree,f,init);
} else
{return init;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__85323 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__85324 = this;
if((this__85324.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__85324.tree,false,this__85324.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.toString = (function (){
var this__85325 = this;
var this__85326 = this;
return cljs.core.pr_str.call(null,this__85326);
});
cljs.core.PersistentTreeMap.prototype.entry_at = (function (k){
var this__85327 = this;
var coll__85328 = this;
var t__85329 = this__85327.tree;
while(true){
if(!((t__85329 == null)))
{var c__85330 = this__85327.comp.call(null,k,t__85329.key);
if((c__85330 === 0))
{return t__85329;
} else
{if((c__85330 < 0))
{{
var G__85348 = t__85329.left;
t__85329 = G__85348;
continue;
}
} else
{if("\uFDD0'else")
{{
var G__85349 = t__85329.right;
t__85329 = G__85349;
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
var this__85331 = this;
if((this__85331.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__85331.tree,ascending_QMARK_,this__85331.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var this__85332 = this;
if((this__85332.cnt > 0))
{var stack__85333 = null;
var t__85334 = this__85332.tree;
while(true){
if(!((t__85334 == null)))
{var c__85335 = this__85332.comp.call(null,k,t__85334.key);
if((c__85335 === 0))
{return (new cljs.core.PersistentTreeMapSeq(null,cljs.core.conj.call(null,stack__85333,t__85334),ascending_QMARK_,-1,null));
} else
{if(cljs.core.truth_(ascending_QMARK_))
{if((c__85335 < 0))
{{
var G__85350 = cljs.core.conj.call(null,stack__85333,t__85334);
var G__85351 = t__85334.left;
stack__85333 = G__85350;
t__85334 = G__85351;
continue;
}
} else
{{
var G__85352 = stack__85333;
var G__85353 = t__85334.right;
stack__85333 = G__85352;
t__85334 = G__85353;
continue;
}
}
} else
{if("\uFDD0'else")
{if((c__85335 > 0))
{{
var G__85354 = cljs.core.conj.call(null,stack__85333,t__85334);
var G__85355 = t__85334.right;
stack__85333 = G__85354;
t__85334 = G__85355;
continue;
}
} else
{{
var G__85356 = stack__85333;
var G__85357 = t__85334.left;
stack__85333 = G__85356;
t__85334 = G__85357;
continue;
}
}
} else
{return null;
}
}
}
} else
{if((stack__85333 == null))
{return (new cljs.core.PersistentTreeMapSeq(null,stack__85333,ascending_QMARK_,-1,null));
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
var this__85336 = this;
return cljs.core.key.call(null,entry);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var this__85337 = this;
return this__85337.comp;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__85338 = this;
if((this__85338.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__85338.tree,true,this__85338.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__85339 = this;
return this__85339.cnt;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__85340 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__85341 = this;
return (new cljs.core.PersistentTreeMap(this__85341.comp,this__85341.tree,this__85341.cnt,meta,this__85341.__hash));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__85342 = this;
return this__85342.meta;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__85343 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentTreeMap.EMPTY,this__85343.meta);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__85344 = this;
var found__85345 = [null];
var t__85346 = cljs.core.tree_map_remove.call(null,this__85344.comp,this__85344.tree,k,found__85345);
if((t__85346 == null))
{if((cljs.core.nth.call(null,found__85345,0) == null))
{return coll;
} else
{return (new cljs.core.PersistentTreeMap(this__85344.comp,null,0,this__85344.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(this__85344.comp,t__85346.blacken(),(this__85344.cnt - 1),this__85344.meta,null));
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
var in__85360 = cljs.core.seq.call(null,keyvals);
var out__85361 = cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);
while(true){
if(in__85360)
{{
var G__85362 = cljs.core.nnext.call(null,in__85360);
var G__85363 = cljs.core.assoc_BANG_.call(null,out__85361,cljs.core.first.call(null,in__85360),cljs.core.second.call(null,in__85360));
in__85360 = G__85362;
out__85361 = G__85363;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__85361);
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
hash_map.cljs$lang$applyTo = (function (arglist__85364){
var keyvals = cljs.core.seq(arglist__85364);;
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
array_map.cljs$lang$applyTo = (function (arglist__85365){
var keyvals = cljs.core.seq(arglist__85365);;
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
var ks__85369 = [];
var obj__85370 = {};
var kvs__85371 = cljs.core.seq.call(null,keyvals);
while(true){
if(kvs__85371)
{ks__85369.push(cljs.core.first.call(null,kvs__85371));
(obj__85370[cljs.core.first.call(null,kvs__85371)] = cljs.core.second.call(null,kvs__85371));
{
var G__85372 = cljs.core.nnext.call(null,kvs__85371);
kvs__85371 = G__85372;
continue;
}
} else
{return cljs.core.ObjMap.fromObject.call(null,ks__85369,obj__85370);
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
obj_map.cljs$lang$applyTo = (function (arglist__85373){
var keyvals = cljs.core.seq(arglist__85373);;
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
var in__85376 = cljs.core.seq.call(null,keyvals);
var out__85377 = cljs.core.PersistentTreeMap.EMPTY;
while(true){
if(in__85376)
{{
var G__85378 = cljs.core.nnext.call(null,in__85376);
var G__85379 = cljs.core.assoc.call(null,out__85377,cljs.core.first.call(null,in__85376),cljs.core.second.call(null,in__85376));
in__85376 = G__85378;
out__85377 = G__85379;
continue;
}
} else
{return out__85377;
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
sorted_map.cljs$lang$applyTo = (function (arglist__85380){
var keyvals = cljs.core.seq(arglist__85380);;
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
var in__85383 = cljs.core.seq.call(null,keyvals);
var out__85384 = (new cljs.core.PersistentTreeMap(comparator,null,0,null,0));
while(true){
if(in__85383)
{{
var G__85385 = cljs.core.nnext.call(null,in__85383);
var G__85386 = cljs.core.assoc.call(null,out__85384,cljs.core.first.call(null,in__85383),cljs.core.second.call(null,in__85383));
in__85383 = G__85385;
out__85384 = G__85386;
continue;
}
} else
{return out__85384;
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
sorted_map_by.cljs$lang$applyTo = (function (arglist__85387){
var comparator = cljs.core.first(arglist__85387);
var keyvals = cljs.core.rest(arglist__85387);
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
{return cljs.core.reduce.call(null,(function (p1__85388_SHARP_,p2__85389_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3824__auto____85391 = p1__85388_SHARP_;
if(cljs.core.truth_(or__3824__auto____85391))
{return or__3824__auto____85391;
} else
{return cljs.core.ObjMap.EMPTY;
}
})(),p2__85389_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__85392){
var maps = cljs.core.seq(arglist__85392);;
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
{var merge_entry__85400 = (function (m,e){
var k__85398 = cljs.core.first.call(null,e);
var v__85399 = cljs.core.second.call(null,e);
if(cljs.core.contains_QMARK_.call(null,m,k__85398))
{return cljs.core.assoc.call(null,m,k__85398,f.call(null,cljs.core._lookup.call(null,m,k__85398,null),v__85399));
} else
{return cljs.core.assoc.call(null,m,k__85398,v__85399);
}
});
var merge2__85402 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__85400,(function (){var or__3824__auto____85401 = m1;
if(cljs.core.truth_(or__3824__auto____85401))
{return or__3824__auto____85401;
} else
{return cljs.core.ObjMap.EMPTY;
}
})(),cljs.core.seq.call(null,m2));
});
return cljs.core.reduce.call(null,merge2__85402,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__85403){
var f = cljs.core.first(arglist__85403);
var maps = cljs.core.rest(arglist__85403);
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
var ret__85408 = cljs.core.ObjMap.EMPTY;
var keys__85409 = cljs.core.seq.call(null,keyseq);
while(true){
if(keys__85409)
{var key__85410 = cljs.core.first.call(null,keys__85409);
var entry__85411 = cljs.core._lookup.call(null,map,key__85410,"\uFDD0'cljs.core/not-found");
{
var G__85412 = ((cljs.core.not_EQ_.call(null,entry__85411,"\uFDD0'cljs.core/not-found"))?cljs.core.assoc.call(null,ret__85408,key__85410,entry__85411):ret__85408);
var G__85413 = cljs.core.next.call(null,keys__85409);
ret__85408 = G__85412;
keys__85409 = G__85413;
continue;
}
} else
{return ret__85408;
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
var this__85417 = this;
return (new cljs.core.TransientHashSet(cljs.core.transient$.call(null,this__85417.hash_map)));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__85418 = this;
var h__5347__auto____85419 = this__85418.__hash;
if(!((h__5347__auto____85419 == null)))
{return h__5347__auto____85419;
} else
{var h__5347__auto____85420 = cljs.core.hash_iset.call(null,coll);
this__85418.__hash = h__5347__auto____85420;
return h__5347__auto____85420;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var this__85421 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,v,null);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var this__85422 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__85422.hash_map,v)))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentHashSet.prototype.call = (function() {
var G__85443 = null;
var G__85443__2 = (function (this_sym85423,k){
var this__85425 = this;
var this_sym85423__85426 = this;
var coll__85427 = this_sym85423__85426;
return coll__85427.cljs$core$ILookup$_lookup$arity$2(coll__85427,k);
});
var G__85443__3 = (function (this_sym85424,k,not_found){
var this__85425 = this;
var this_sym85424__85428 = this;
var coll__85429 = this_sym85424__85428;
return coll__85429.cljs$core$ILookup$_lookup$arity$3(coll__85429,k,not_found);
});
G__85443 = function(this_sym85424,k,not_found){
switch(arguments.length){
case 2:
return G__85443__2.call(this,this_sym85424,k);
case 3:
return G__85443__3.call(this,this_sym85424,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__85443;
})()
;
cljs.core.PersistentHashSet.prototype.apply = (function (this_sym85415,args85416){
var this__85430 = this;
return this_sym85415.call.apply(this_sym85415,[this_sym85415].concat(args85416.slice()));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__85431 = this;
return (new cljs.core.PersistentHashSet(this__85431.meta,cljs.core.assoc.call(null,this__85431.hash_map,o,null),null));
});
cljs.core.PersistentHashSet.prototype.toString = (function (){
var this__85432 = this;
var this__85433 = this;
return cljs.core.pr_str.call(null,this__85433);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__85434 = this;
return cljs.core.keys.call(null,this__85434.hash_map);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var this__85435 = this;
return (new cljs.core.PersistentHashSet(this__85435.meta,cljs.core.dissoc.call(null,this__85435.hash_map,v),null));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__85436 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__85437 = this;
var and__3822__auto____85438 = cljs.core.set_QMARK_.call(null,other);
if(and__3822__auto____85438)
{var and__3822__auto____85439 = (cljs.core.count.call(null,coll) === cljs.core.count.call(null,other));
if(and__3822__auto____85439)
{return cljs.core.every_QMARK_.call(null,(function (p1__85414_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__85414_SHARP_);
}),other);
} else
{return and__3822__auto____85439;
}
} else
{return and__3822__auto____85438;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__85440 = this;
return (new cljs.core.PersistentHashSet(meta,this__85440.hash_map,this__85440.__hash));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__85441 = this;
return this__85441.meta;
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__85442 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentHashSet.EMPTY,this__85442.meta);
});
cljs.core.PersistentHashSet;
cljs.core.PersistentHashSet.EMPTY = (new cljs.core.PersistentHashSet(null,cljs.core.hash_map.call(null),0));
cljs.core.PersistentHashSet.fromArray = (function (items){
var len__85444 = cljs.core.count.call(null,items);
var i__85445 = 0;
var out__85446 = cljs.core.transient$.call(null,cljs.core.PersistentHashSet.EMPTY);
while(true){
if((i__85445 < len__85444))
{{
var G__85447 = (i__85445 + 1);
var G__85448 = cljs.core.conj_BANG_.call(null,out__85446,(items[i__85445]));
i__85445 = G__85447;
out__85446 = G__85448;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__85446);
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
var G__85466 = null;
var G__85466__2 = (function (this_sym85452,k){
var this__85454 = this;
var this_sym85452__85455 = this;
var tcoll__85456 = this_sym85452__85455;
if((cljs.core._lookup.call(null,this__85454.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return null;
} else
{return k;
}
});
var G__85466__3 = (function (this_sym85453,k,not_found){
var this__85454 = this;
var this_sym85453__85457 = this;
var tcoll__85458 = this_sym85453__85457;
if((cljs.core._lookup.call(null,this__85454.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return k;
}
});
G__85466 = function(this_sym85453,k,not_found){
switch(arguments.length){
case 2:
return G__85466__2.call(this,this_sym85453,k);
case 3:
return G__85466__3.call(this,this_sym85453,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__85466;
})()
;
cljs.core.TransientHashSet.prototype.apply = (function (this_sym85450,args85451){
var this__85459 = this;
return this_sym85450.call.apply(this_sym85450,[this_sym85450].concat(args85451.slice()));
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,v){
var this__85460 = this;
return tcoll.cljs$core$ILookup$_lookup$arity$3(tcoll,v,null);
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,v,not_found){
var this__85461 = this;
if((cljs.core._lookup.call(null,this__85461.transient_map,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return v;
}
});
cljs.core.TransientHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var this__85462 = this;
return cljs.core.count.call(null,this__85462.transient_map);
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientSet$_disjoin_BANG_$arity$2 = (function (tcoll,v){
var this__85463 = this;
this__85463.transient_map = cljs.core.dissoc_BANG_.call(null,this__85463.transient_map,v);
return tcoll;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__85464 = this;
this__85464.transient_map = cljs.core.assoc_BANG_.call(null,this__85464.transient_map,o,null);
return tcoll;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__85465 = this;
return (new cljs.core.PersistentHashSet(null,cljs.core.persistent_BANG_.call(null,this__85465.transient_map),null));
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
var this__85469 = this;
var h__5347__auto____85470 = this__85469.__hash;
if(!((h__5347__auto____85470 == null)))
{return h__5347__auto____85470;
} else
{var h__5347__auto____85471 = cljs.core.hash_iset.call(null,coll);
this__85469.__hash = h__5347__auto____85471;
return h__5347__auto____85471;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var this__85472 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,v,null);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var this__85473 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__85473.tree_map,v)))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentTreeSet.prototype.call = (function() {
var G__85499 = null;
var G__85499__2 = (function (this_sym85474,k){
var this__85476 = this;
var this_sym85474__85477 = this;
var coll__85478 = this_sym85474__85477;
return coll__85478.cljs$core$ILookup$_lookup$arity$2(coll__85478,k);
});
var G__85499__3 = (function (this_sym85475,k,not_found){
var this__85476 = this;
var this_sym85475__85479 = this;
var coll__85480 = this_sym85475__85479;
return coll__85480.cljs$core$ILookup$_lookup$arity$3(coll__85480,k,not_found);
});
G__85499 = function(this_sym85475,k,not_found){
switch(arguments.length){
case 2:
return G__85499__2.call(this,this_sym85475,k);
case 3:
return G__85499__3.call(this,this_sym85475,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__85499;
})()
;
cljs.core.PersistentTreeSet.prototype.apply = (function (this_sym85467,args85468){
var this__85481 = this;
return this_sym85467.call.apply(this_sym85467,[this_sym85467].concat(args85468.slice()));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__85482 = this;
return (new cljs.core.PersistentTreeSet(this__85482.meta,cljs.core.assoc.call(null,this__85482.tree_map,o,null),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__85483 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core.rseq.call(null,this__85483.tree_map));
});
cljs.core.PersistentTreeSet.prototype.toString = (function (){
var this__85484 = this;
var this__85485 = this;
return cljs.core.pr_str.call(null,this__85485);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (coll,ascending_QMARK_){
var this__85486 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core._sorted_seq.call(null,this__85486.tree_map,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var this__85487 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core._sorted_seq_from.call(null,this__85487.tree_map,k,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (coll,entry){
var this__85488 = this;
return entry;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var this__85489 = this;
return cljs.core._comparator.call(null,this__85489.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__85490 = this;
return cljs.core.keys.call(null,this__85490.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var this__85491 = this;
return (new cljs.core.PersistentTreeSet(this__85491.meta,cljs.core.dissoc.call(null,this__85491.tree_map,v),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__85492 = this;
return cljs.core.count.call(null,this__85492.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__85493 = this;
var and__3822__auto____85494 = cljs.core.set_QMARK_.call(null,other);
if(and__3822__auto____85494)
{var and__3822__auto____85495 = (cljs.core.count.call(null,coll) === cljs.core.count.call(null,other));
if(and__3822__auto____85495)
{return cljs.core.every_QMARK_.call(null,(function (p1__85449_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__85449_SHARP_);
}),other);
} else
{return and__3822__auto____85495;
}
} else
{return and__3822__auto____85494;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__85496 = this;
return (new cljs.core.PersistentTreeSet(meta,this__85496.tree_map,this__85496.__hash));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__85497 = this;
return this__85497.meta;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__85498 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentTreeSet.EMPTY,this__85498.meta);
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
var G__85504__delegate = function (keys){
var in__85502 = cljs.core.seq.call(null,keys);
var out__85503 = cljs.core.transient$.call(null,cljs.core.PersistentHashSet.EMPTY);
while(true){
if(cljs.core.seq.call(null,in__85502))
{{
var G__85505 = cljs.core.next.call(null,in__85502);
var G__85506 = cljs.core.conj_BANG_.call(null,out__85503,cljs.core.first.call(null,in__85502));
in__85502 = G__85505;
out__85503 = G__85506;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__85503);
}
break;
}
};
var G__85504 = function (var_args){
var keys = null;
if (goog.isDef(var_args)) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__85504__delegate.call(this, keys);
};
G__85504.cljs$lang$maxFixedArity = 0;
G__85504.cljs$lang$applyTo = (function (arglist__85507){
var keys = cljs.core.seq(arglist__85507);;
return G__85504__delegate(keys);
});
G__85504.cljs$lang$arity$variadic = G__85504__delegate;
return G__85504;
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
sorted_set.cljs$lang$applyTo = (function (arglist__85508){
var keys = cljs.core.seq(arglist__85508);;
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
sorted_set_by.cljs$lang$applyTo = (function (arglist__85510){
var comparator = cljs.core.first(arglist__85510);
var keys = cljs.core.rest(arglist__85510);
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
{var n__85516 = cljs.core.count.call(null,coll);
return cljs.core.reduce.call(null,(function (v,i){
var temp__3971__auto____85517 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));
if(cljs.core.truth_(temp__3971__auto____85517))
{var e__85518 = temp__3971__auto____85517;
return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__85518));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__85516,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__85509_SHARP_){
var temp__3971__auto____85519 = cljs.core.find.call(null,smap,p1__85509_SHARP_);
if(cljs.core.truth_(temp__3971__auto____85519))
{var e__85520 = temp__3971__auto____85519;
return cljs.core.second.call(null,e__85520);
} else
{return p1__85509_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__85550 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__85543,seen){
while(true){
var vec__85544__85545 = p__85543;
var f__85546 = cljs.core.nth.call(null,vec__85544__85545,0,null);
var xs__85547 = vec__85544__85545;
var temp__3974__auto____85548 = cljs.core.seq.call(null,xs__85547);
if(temp__3974__auto____85548)
{var s__85549 = temp__3974__auto____85548;
if(cljs.core.contains_QMARK_.call(null,seen,f__85546))
{{
var G__85551 = cljs.core.rest.call(null,s__85549);
var G__85552 = seen;
p__85543 = G__85551;
seen = G__85552;
continue;
}
} else
{return cljs.core.cons.call(null,f__85546,step.call(null,cljs.core.rest.call(null,s__85549),cljs.core.conj.call(null,seen,f__85546)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
}),null));
});
return step__85550.call(null,coll,cljs.core.PersistentHashSet.EMPTY);
});
cljs.core.butlast = (function butlast(s){
var ret__85555 = cljs.core.PersistentVector.EMPTY;
var s__85556 = s;
while(true){
if(cljs.core.next.call(null,s__85556))
{{
var G__85557 = cljs.core.conj.call(null,ret__85555,cljs.core.first.call(null,s__85556));
var G__85558 = cljs.core.next.call(null,s__85556);
ret__85555 = G__85557;
s__85556 = G__85558;
continue;
}
} else
{return cljs.core.seq.call(null,ret__85555);
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
{if((function (){var or__3824__auto____85561 = cljs.core.keyword_QMARK_.call(null,x);
if(or__3824__auto____85561)
{return or__3824__auto____85561;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{var i__85562 = x.lastIndexOf("/");
if((i__85562 < 0))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__85562 + 1));
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
if((function (){var or__3824__auto____85565 = cljs.core.keyword_QMARK_.call(null,x);
if(or__3824__auto____85565)
{return or__3824__auto____85565;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{var i__85566 = x.lastIndexOf("/");
if((i__85566 > -1))
{return cljs.core.subs.call(null,x,2,i__85566);
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
var map__85573 = cljs.core.ObjMap.EMPTY;
var ks__85574 = cljs.core.seq.call(null,keys);
var vs__85575 = cljs.core.seq.call(null,vals);
while(true){
if((function (){var and__3822__auto____85576 = ks__85574;
if(and__3822__auto____85576)
{return vs__85575;
} else
{return and__3822__auto____85576;
}
})())
{{
var G__85577 = cljs.core.assoc.call(null,map__85573,cljs.core.first.call(null,ks__85574),cljs.core.first.call(null,vs__85575));
var G__85578 = cljs.core.next.call(null,ks__85574);
var G__85579 = cljs.core.next.call(null,vs__85575);
map__85573 = G__85577;
ks__85574 = G__85578;
vs__85575 = G__85579;
continue;
}
} else
{return map__85573;
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
var G__85582__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__85567_SHARP_,p2__85568_SHARP_){
return max_key.call(null,k,p1__85567_SHARP_,p2__85568_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__85582 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__85582__delegate.call(this, k, x, y, more);
};
G__85582.cljs$lang$maxFixedArity = 3;
G__85582.cljs$lang$applyTo = (function (arglist__85583){
var k = cljs.core.first(arglist__85583);
var x = cljs.core.first(cljs.core.next(arglist__85583));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__85583)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__85583)));
return G__85582__delegate(k, x, y, more);
});
G__85582.cljs$lang$arity$variadic = G__85582__delegate;
return G__85582;
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
var G__85584__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__85580_SHARP_,p2__85581_SHARP_){
return min_key.call(null,k,p1__85580_SHARP_,p2__85581_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__85584 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__85584__delegate.call(this, k, x, y, more);
};
G__85584.cljs$lang$maxFixedArity = 3;
G__85584.cljs$lang$applyTo = (function (arglist__85585){
var k = cljs.core.first(arglist__85585);
var x = cljs.core.first(cljs.core.next(arglist__85585));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__85585)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__85585)));
return G__85584__delegate(k, x, y, more);
});
G__85584.cljs$lang$arity$variadic = G__85584__delegate;
return G__85584;
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
var temp__3974__auto____85588 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____85588)
{var s__85589 = temp__3974__auto____85588;
return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__85589),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__85589)));
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
var temp__3974__auto____85592 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____85592)
{var s__85593 = temp__3974__auto____85592;
if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__85593))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__85593),take_while.call(null,pred,cljs.core.rest.call(null,s__85593)));
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
var comp__85595 = cljs.core._comparator.call(null,sc);
return test.call(null,comp__85595.call(null,cljs.core._entry_key.call(null,sc,e),key),0);
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
var include__85607 = cljs.core.mk_bound_fn.call(null,sc,test,key);
if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([cljs.core._GT_,cljs.core._GT__EQ_]).call(null,test)))
{var temp__3974__auto____85608 = cljs.core._sorted_seq_from.call(null,sc,key,true);
if(cljs.core.truth_(temp__3974__auto____85608))
{var vec__85609__85610 = temp__3974__auto____85608;
var e__85611 = cljs.core.nth.call(null,vec__85609__85610,0,null);
var s__85612 = vec__85609__85610;
if(cljs.core.truth_(include__85607.call(null,e__85611)))
{return s__85612;
} else
{return cljs.core.next.call(null,s__85612);
}
} else
{return null;
}
} else
{return cljs.core.take_while.call(null,include__85607,cljs.core._sorted_seq.call(null,sc,true));
}
});
var subseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__3974__auto____85613 = cljs.core._sorted_seq_from.call(null,sc,start_key,true);
if(cljs.core.truth_(temp__3974__auto____85613))
{var vec__85614__85615 = temp__3974__auto____85613;
var e__85616 = cljs.core.nth.call(null,vec__85614__85615,0,null);
var s__85617 = vec__85614__85615;
return cljs.core.take_while.call(null,cljs.core.mk_bound_fn.call(null,sc,end_test,end_key),(cljs.core.truth_(cljs.core.mk_bound_fn.call(null,sc,start_test,start_key).call(null,e__85616))?s__85617:cljs.core.next.call(null,s__85617)));
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
var include__85629 = cljs.core.mk_bound_fn.call(null,sc,test,key);
if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([cljs.core._LT_,cljs.core._LT__EQ_]).call(null,test)))
{var temp__3974__auto____85630 = cljs.core._sorted_seq_from.call(null,sc,key,false);
if(cljs.core.truth_(temp__3974__auto____85630))
{var vec__85631__85632 = temp__3974__auto____85630;
var e__85633 = cljs.core.nth.call(null,vec__85631__85632,0,null);
var s__85634 = vec__85631__85632;
if(cljs.core.truth_(include__85629.call(null,e__85633)))
{return s__85634;
} else
{return cljs.core.next.call(null,s__85634);
}
} else
{return null;
}
} else
{return cljs.core.take_while.call(null,include__85629,cljs.core._sorted_seq.call(null,sc,false));
}
});
var rsubseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__3974__auto____85635 = cljs.core._sorted_seq_from.call(null,sc,end_key,false);
if(cljs.core.truth_(temp__3974__auto____85635))
{var vec__85636__85637 = temp__3974__auto____85635;
var e__85638 = cljs.core.nth.call(null,vec__85636__85637,0,null);
var s__85639 = vec__85636__85637;
return cljs.core.take_while.call(null,cljs.core.mk_bound_fn.call(null,sc,start_test,start_key),(cljs.core.truth_(cljs.core.mk_bound_fn.call(null,sc,end_test,end_key).call(null,e__85638))?s__85639:cljs.core.next.call(null,s__85639)));
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
var this__85640 = this;
var h__5347__auto____85641 = this__85640.__hash;
if(!((h__5347__auto____85641 == null)))
{return h__5347__auto____85641;
} else
{var h__5347__auto____85642 = cljs.core.hash_coll.call(null,rng);
this__85640.__hash = h__5347__auto____85642;
return h__5347__auto____85642;
}
});
cljs.core.Range.prototype.cljs$core$INext$_next$arity$1 = (function (rng){
var this__85643 = this;
if((this__85643.step > 0))
{if(((this__85643.start + this__85643.step) < this__85643.end))
{return (new cljs.core.Range(this__85643.meta,(this__85643.start + this__85643.step),this__85643.end,this__85643.step,null));
} else
{return null;
}
} else
{if(((this__85643.start + this__85643.step) > this__85643.end))
{return (new cljs.core.Range(this__85643.meta,(this__85643.start + this__85643.step),this__85643.end,this__85643.step,null));
} else
{return null;
}
}
});
cljs.core.Range.prototype.cljs$core$ICollection$_conj$arity$2 = (function (rng,o){
var this__85644 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.toString = (function (){
var this__85645 = this;
var this__85646 = this;
return cljs.core.pr_str.call(null,this__85646);
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (rng,f){
var this__85647 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (rng,f,s){
var this__85648 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
cljs.core.Range.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (rng){
var this__85649 = this;
if((this__85649.step > 0))
{if((this__85649.start < this__85649.end))
{return rng;
} else
{return null;
}
} else
{if((this__85649.start > this__85649.end))
{return rng;
} else
{return null;
}
}
});
cljs.core.Range.prototype.cljs$core$ICounted$_count$arity$1 = (function (rng){
var this__85650 = this;
if(cljs.core.not.call(null,rng.cljs$core$ISeqable$_seq$arity$1(rng)))
{return 0;
} else
{return Math.ceil(((this__85650.end - this__85650.start) / this__85650.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$_first$arity$1 = (function (rng){
var this__85651 = this;
return this__85651.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest$arity$1 = (function (rng){
var this__85652 = this;
if(!((rng.cljs$core$ISeqable$_seq$arity$1(rng) == null)))
{return (new cljs.core.Range(this__85652.meta,(this__85652.start + this__85652.step),this__85652.end,this__85652.step,null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (rng,other){
var this__85653 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (rng,meta){
var this__85654 = this;
return (new cljs.core.Range(meta,this__85654.start,this__85654.end,this__85654.step,this__85654.__hash));
});
cljs.core.Range.prototype.cljs$core$IMeta$_meta$arity$1 = (function (rng){
var this__85655 = this;
return this__85655.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (rng,n){
var this__85656 = this;
if((n < rng.cljs$core$ICounted$_count$arity$1(rng)))
{return (this__85656.start + (n * this__85656.step));
} else
{if((function (){var and__3822__auto____85657 = (this__85656.start > this__85656.end);
if(and__3822__auto____85657)
{return (this__85656.step === 0);
} else
{return and__3822__auto____85657;
}
})())
{return this__85656.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (rng,n,not_found){
var this__85658 = this;
if((n < rng.cljs$core$ICounted$_count$arity$1(rng)))
{return (this__85658.start + (n * this__85658.step));
} else
{if((function (){var and__3822__auto____85659 = (this__85658.start > this__85658.end);
if(and__3822__auto____85659)
{return (this__85658.step === 0);
} else
{return and__3822__auto____85659;
}
})())
{return this__85658.start;
} else
{return not_found;
}
}
});
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (rng){
var this__85660 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__85660.meta);
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
var temp__3974__auto____85663 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____85663)
{var s__85664 = temp__3974__auto____85663;
return cljs.core.cons.call(null,cljs.core.first.call(null,s__85664),take_nth.call(null,n,cljs.core.drop.call(null,n,s__85664)));
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
var temp__3974__auto____85671 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____85671)
{var s__85672 = temp__3974__auto____85671;
var fst__85673 = cljs.core.first.call(null,s__85672);
var fv__85674 = f.call(null,fst__85673);
var run__85675 = cljs.core.cons.call(null,fst__85673,cljs.core.take_while.call(null,(function (p1__85665_SHARP_){
return cljs.core._EQ_.call(null,fv__85674,f.call(null,p1__85665_SHARP_));
}),cljs.core.next.call(null,s__85672)));
return cljs.core.cons.call(null,run__85675,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__85675),s__85672))));
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
var temp__3971__auto____85690 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____85690)
{var s__85691 = temp__3971__auto____85690;
return reductions.call(null,f,cljs.core.first.call(null,s__85691),cljs.core.rest.call(null,s__85691));
} else
{return cljs.core.list.call(null,f.call(null));
}
}),null));
});
var reductions__3 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____85692 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____85692)
{var s__85693 = temp__3974__auto____85692;
return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__85693)),cljs.core.rest.call(null,s__85693));
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
var G__85696 = null;
var G__85696__0 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__85696__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__85696__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__85696__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__85696__4 = (function() { 
var G__85697__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__85697 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__85697__delegate.call(this, x, y, z, args);
};
G__85697.cljs$lang$maxFixedArity = 3;
G__85697.cljs$lang$applyTo = (function (arglist__85698){
var x = cljs.core.first(arglist__85698);
var y = cljs.core.first(cljs.core.next(arglist__85698));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__85698)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__85698)));
return G__85697__delegate(x, y, z, args);
});
G__85697.cljs$lang$arity$variadic = G__85697__delegate;
return G__85697;
})()
;
G__85696 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__85696__0.call(this);
case 1:
return G__85696__1.call(this,x);
case 2:
return G__85696__2.call(this,x,y);
case 3:
return G__85696__3.call(this,x,y,z);
default:
return G__85696__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__85696.cljs$lang$maxFixedArity = 3;
G__85696.cljs$lang$applyTo = G__85696__4.cljs$lang$applyTo;
return G__85696;
})()
});
var juxt__2 = (function (f,g){
return (function() {
var G__85699 = null;
var G__85699__0 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__85699__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__85699__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__85699__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__85699__4 = (function() { 
var G__85700__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__85700 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__85700__delegate.call(this, x, y, z, args);
};
G__85700.cljs$lang$maxFixedArity = 3;
G__85700.cljs$lang$applyTo = (function (arglist__85701){
var x = cljs.core.first(arglist__85701);
var y = cljs.core.first(cljs.core.next(arglist__85701));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__85701)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__85701)));
return G__85700__delegate(x, y, z, args);
});
G__85700.cljs$lang$arity$variadic = G__85700__delegate;
return G__85700;
})()
;
G__85699 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__85699__0.call(this);
case 1:
return G__85699__1.call(this,x);
case 2:
return G__85699__2.call(this,x,y);
case 3:
return G__85699__3.call(this,x,y,z);
default:
return G__85699__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__85699.cljs$lang$maxFixedArity = 3;
G__85699.cljs$lang$applyTo = G__85699__4.cljs$lang$applyTo;
return G__85699;
})()
});
var juxt__3 = (function (f,g,h){
return (function() {
var G__85702 = null;
var G__85702__0 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__85702__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__85702__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__85702__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__85702__4 = (function() { 
var G__85703__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__85703 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__85703__delegate.call(this, x, y, z, args);
};
G__85703.cljs$lang$maxFixedArity = 3;
G__85703.cljs$lang$applyTo = (function (arglist__85704){
var x = cljs.core.first(arglist__85704);
var y = cljs.core.first(cljs.core.next(arglist__85704));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__85704)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__85704)));
return G__85703__delegate(x, y, z, args);
});
G__85703.cljs$lang$arity$variadic = G__85703__delegate;
return G__85703;
})()
;
G__85702 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__85702__0.call(this);
case 1:
return G__85702__1.call(this,x);
case 2:
return G__85702__2.call(this,x,y);
case 3:
return G__85702__3.call(this,x,y,z);
default:
return G__85702__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__85702.cljs$lang$maxFixedArity = 3;
G__85702.cljs$lang$applyTo = G__85702__4.cljs$lang$applyTo;
return G__85702;
})()
});
var juxt__4 = (function() { 
var G__85705__delegate = function (f,g,h,fs){
var fs__85695 = cljs.core.list_STAR_.call(null,f,g,h,fs);
return (function() {
var G__85706 = null;
var G__85706__0 = (function (){
return cljs.core.reduce.call(null,(function (p1__85676_SHARP_,p2__85677_SHARP_){
return cljs.core.conj.call(null,p1__85676_SHARP_,p2__85677_SHARP_.call(null));
}),cljs.core.PersistentVector.EMPTY,fs__85695);
});
var G__85706__1 = (function (x){
return cljs.core.reduce.call(null,(function (p1__85678_SHARP_,p2__85679_SHARP_){
return cljs.core.conj.call(null,p1__85678_SHARP_,p2__85679_SHARP_.call(null,x));
}),cljs.core.PersistentVector.EMPTY,fs__85695);
});
var G__85706__2 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__85680_SHARP_,p2__85681_SHARP_){
return cljs.core.conj.call(null,p1__85680_SHARP_,p2__85681_SHARP_.call(null,x,y));
}),cljs.core.PersistentVector.EMPTY,fs__85695);
});
var G__85706__3 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__85682_SHARP_,p2__85683_SHARP_){
return cljs.core.conj.call(null,p1__85682_SHARP_,p2__85683_SHARP_.call(null,x,y,z));
}),cljs.core.PersistentVector.EMPTY,fs__85695);
});
var G__85706__4 = (function() { 
var G__85707__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__85684_SHARP_,p2__85685_SHARP_){
return cljs.core.conj.call(null,p1__85684_SHARP_,cljs.core.apply.call(null,p2__85685_SHARP_,x,y,z,args));
}),cljs.core.PersistentVector.EMPTY,fs__85695);
};
var G__85707 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__85707__delegate.call(this, x, y, z, args);
};
G__85707.cljs$lang$maxFixedArity = 3;
G__85707.cljs$lang$applyTo = (function (arglist__85708){
var x = cljs.core.first(arglist__85708);
var y = cljs.core.first(cljs.core.next(arglist__85708));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__85708)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__85708)));
return G__85707__delegate(x, y, z, args);
});
G__85707.cljs$lang$arity$variadic = G__85707__delegate;
return G__85707;
})()
;
G__85706 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__85706__0.call(this);
case 1:
return G__85706__1.call(this,x);
case 2:
return G__85706__2.call(this,x,y);
case 3:
return G__85706__3.call(this,x,y,z);
default:
return G__85706__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__85706.cljs$lang$maxFixedArity = 3;
G__85706.cljs$lang$applyTo = G__85706__4.cljs$lang$applyTo;
return G__85706;
})()
};
var G__85705 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__85705__delegate.call(this, f, g, h, fs);
};
G__85705.cljs$lang$maxFixedArity = 3;
G__85705.cljs$lang$applyTo = (function (arglist__85709){
var f = cljs.core.first(arglist__85709);
var g = cljs.core.first(cljs.core.next(arglist__85709));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__85709)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__85709)));
return G__85705__delegate(f, g, h, fs);
});
G__85705.cljs$lang$arity$variadic = G__85705__delegate;
return G__85705;
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
var G__85712 = cljs.core.next.call(null,coll);
coll = G__85712;
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
if(cljs.core.truth_((function (){var and__3822__auto____85711 = cljs.core.seq.call(null,coll);
if(and__3822__auto____85711)
{return (n > 0);
} else
{return and__3822__auto____85711;
}
})()))
{{
var G__85713 = (n - 1);
var G__85714 = cljs.core.next.call(null,coll);
n = G__85713;
coll = G__85714;
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
var matches__85716 = re.exec(s);
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__85716),s))
{if((cljs.core.count.call(null,matches__85716) === 1))
{return cljs.core.first.call(null,matches__85716);
} else
{return cljs.core.vec.call(null,matches__85716);
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
var matches__85718 = re.exec(s);
if((matches__85718 == null))
{return null;
} else
{if((cljs.core.count.call(null,matches__85718) === 1))
{return cljs.core.first.call(null,matches__85718);
} else
{return cljs.core.vec.call(null,matches__85718);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__85723 = cljs.core.re_find.call(null,re,s);
var match_idx__85724 = s.search(re);
var match_str__85725 = ((cljs.core.coll_QMARK_.call(null,match_data__85723))?cljs.core.first.call(null,match_data__85723):match_data__85723);
var post_match__85726 = cljs.core.subs.call(null,s,(match_idx__85724 + cljs.core.count.call(null,match_str__85725)));
if(cljs.core.truth_(match_data__85723))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__85723,re_seq.call(null,re,post_match__85726));
}),null));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
var vec__85733__85734 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,s);
var ___85735 = cljs.core.nth.call(null,vec__85733__85734,0,null);
var flags__85736 = cljs.core.nth.call(null,vec__85733__85734,1,null);
var pattern__85737 = cljs.core.nth.call(null,vec__85733__85734,2,null);
return (new RegExp(pattern__85737,flags__85736));
});
/**
* Do not use this.  It is kept for backwards compatibility with the
* old IPrintable protocol.
*/
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([begin], true),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.PersistentVector.fromArray([sep], true),cljs.core.map.call(null,(function (p1__85727_SHARP_){
return print_one.call(null,p1__85727_SHARP_,opts);
}),coll))),cljs.core.PersistentVector.fromArray([end], true));
});
cljs.core.pr_sequential_writer = (function pr_sequential_writer(writer,print_one,begin,sep,end,opts,coll){
cljs.core._write.call(null,writer,begin);
if(cljs.core.seq.call(null,coll))
{print_one.call(null,cljs.core.first.call(null,coll),writer,opts);
} else
{}
var G__85741__85742 = cljs.core.seq.call(null,cljs.core.next.call(null,coll));
while(true){
if(G__85741__85742)
{var o__85743 = cljs.core.first.call(null,G__85741__85742);
cljs.core._write.call(null,writer,sep);
print_one.call(null,o__85743,writer,opts);
{
var G__85744 = cljs.core.next.call(null,G__85741__85742);
G__85741__85742 = G__85744;
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
var G__85748__85749 = cljs.core.seq.call(null,ss);
while(true){
if(G__85748__85749)
{var s__85750 = cljs.core.first.call(null,G__85748__85749);
cljs.core._write.call(null,writer,s__85750);
{
var G__85751 = cljs.core.next.call(null,G__85748__85749);
G__85748__85749 = G__85751;
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
write_all.cljs$lang$applyTo = (function (arglist__85752){
var writer = cljs.core.first(arglist__85752);
var ss = cljs.core.rest(arglist__85752);
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
var this__85753 = this;
return this__85753.sb.append(s);
});
cljs.core.StringBufferWriter.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
var this__85754 = this;
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3822__auto____85764 = cljs.core._lookup.call(null,opts,"\uFDD0'meta",null);
if(cljs.core.truth_(and__3822__auto____85764))
{var and__3822__auto____85768 = (function (){var G__85765__85766 = obj;
if(G__85765__85766)
{if((function (){var or__3824__auto____85767 = (G__85765__85766.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3824__auto____85767)
{return or__3824__auto____85767;
} else
{return G__85765__85766.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__85765__85766.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__85765__85766);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__85765__85766);
}
})();
if(cljs.core.truth_(and__3822__auto____85768))
{return cljs.core.meta.call(null,obj);
} else
{return and__3822__auto____85768;
}
} else
{return and__3822__auto____85764;
}
})())?cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["^"], true),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.PersistentVector.fromArray([" "], true)):null),(((function (){var and__3822__auto____85769 = !((obj == null));
if(and__3822__auto____85769)
{return obj.cljs$lang$type;
} else
{return and__3822__auto____85769;
}
})())?obj.cljs$lang$ctorPrSeq(obj):(((function (){var G__85770__85771 = obj;
if(G__85770__85771)
{if((function (){var or__3824__auto____85772 = (G__85770__85771.cljs$lang$protocol_mask$partition0$ & 536870912);
if(or__3824__auto____85772)
{return or__3824__auto____85772;
} else
{return G__85770__85771.cljs$core$IPrintable$;
}
})())
{return true;
} else
{if((!G__85770__85771.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__85770__85771);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__85770__85771);
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
{if(cljs.core.truth_((function (){var and__3822__auto____85785 = cljs.core._lookup.call(null,opts,"\uFDD0'meta",null);
if(cljs.core.truth_(and__3822__auto____85785))
{var and__3822__auto____85789 = (function (){var G__85786__85787 = obj;
if(G__85786__85787)
{if((function (){var or__3824__auto____85788 = (G__85786__85787.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3824__auto____85788)
{return or__3824__auto____85788;
} else
{return G__85786__85787.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__85786__85787.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__85786__85787);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__85786__85787);
}
})();
if(cljs.core.truth_(and__3822__auto____85789))
{return cljs.core.meta.call(null,obj);
} else
{return and__3822__auto____85789;
}
} else
{return and__3822__auto____85785;
}
})()))
{cljs.core._write.call(null,writer,"^");
pr_writer.call(null,cljs.core.meta.call(null,obj),writer,opts);
cljs.core._write.call(null,writer," ");
} else
{}
if((function (){var and__3822__auto____85790 = !((obj == null));
if(and__3822__auto____85790)
{return obj.cljs$lang$type;
} else
{return and__3822__auto____85790;
}
})())
{return obj.cljs$lang$ctorPrWriter(writer,opts);
} else
{if((function (){var G__85791__85792 = obj;
if(G__85791__85792)
{if((function (){var or__3824__auto____85793 = (G__85791__85792.cljs$lang$protocol_mask$partition0$ & 2147483648);
if(or__3824__auto____85793)
{return or__3824__auto____85793;
} else
{return G__85791__85792.cljs$core$IPrintWithWriter$;
}
})())
{return true;
} else
{if((!G__85791__85792.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintWithWriter,G__85791__85792);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintWithWriter,G__85791__85792);
}
})())
{return cljs.core._pr_writer.call(null,obj,writer,opts);
} else
{if((function (){var G__85794__85795 = obj;
if(G__85794__85795)
{if((function (){var or__3824__auto____85796 = (G__85794__85795.cljs$lang$protocol_mask$partition0$ & 536870912);
if(or__3824__auto____85796)
{return or__3824__auto____85796;
} else
{return G__85794__85795.cljs$core$IPrintable$;
}
})())
{return true;
} else
{if((!G__85794__85795.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__85794__85795);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__85794__85795);
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
var G__85800__85801 = cljs.core.seq.call(null,cljs.core.next.call(null,objs));
while(true){
if(G__85800__85801)
{var obj__85802 = cljs.core.first.call(null,G__85800__85801);
cljs.core._write.call(null,writer," ");
cljs.core.pr_writer.call(null,obj__85802,writer,opts);
{
var G__85803 = cljs.core.next.call(null,G__85800__85801);
G__85800__85801 = G__85803;
continue;
}
} else
{return null;
}
break;
}
});
cljs.core.pr_sb_with_opts = (function pr_sb_with_opts(objs,opts){
var sb__85806 = (new goog.string.StringBuffer());
var writer__85807 = (new cljs.core.StringBufferWriter(sb__85806));
cljs.core.pr_seq_writer.call(null,objs,writer__85807,opts);
cljs.core._flush.call(null,writer__85807);
return sb__85806;
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
{var sb__85809 = cljs.core.pr_sb_with_opts.call(null,objs,opts);
sb__85809.append("\n");
return [cljs.core.str(sb__85809)].join('');
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
pr_str.cljs$lang$applyTo = (function (arglist__85810){
var objs = cljs.core.seq(arglist__85810);;
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
prn_str.cljs$lang$applyTo = (function (arglist__85811){
var objs = cljs.core.seq(arglist__85811);;
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
pr.cljs$lang$applyTo = (function (arglist__85812){
var objs = cljs.core.seq(arglist__85812);;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__85813){
var objs = cljs.core.seq(arglist__85813);;
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
print_str.cljs$lang$applyTo = (function (arglist__85814){
var objs = cljs.core.seq(arglist__85814);;
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
println.cljs$lang$applyTo = (function (arglist__85815){
var objs = cljs.core.seq(arglist__85815);;
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
println_str.cljs$lang$applyTo = (function (arglist__85816){
var objs = cljs.core.seq(arglist__85816);;
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
prn.cljs$lang$applyTo = (function (arglist__85817){
var objs = cljs.core.seq(arglist__85817);;
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
printf.cljs$lang$applyTo = (function (arglist__85818){
var fmt = cljs.core.first(arglist__85818);
var args = cljs.core.rest(arglist__85818);
return printf__delegate(fmt, args);
});
printf.cljs$lang$arity$variadic = printf__delegate;
return printf;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__85819 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__85819,"{",", ","}",opts,coll);
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
var pr_pair__85820 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__85820,"{",", ","}",opts,coll);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__85821 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__85821,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,[cljs.core.str(":"),cljs.core.str((function (){var temp__3974__auto____85822 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3974__auto____85822))
{var nspc__85823 = temp__3974__auto____85822;
return [cljs.core.str(nspc__85823),cljs.core.str("/")].join('');
} else
{return null;
}
})()),cljs.core.str(cljs.core.name.call(null,obj))].join(''));
} else
{if(cljs.core.symbol_QMARK_.call(null,obj))
{return cljs.core.list.call(null,[cljs.core.str((function (){var temp__3974__auto____85824 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3974__auto____85824))
{var nspc__85825 = temp__3974__auto____85824;
return [cljs.core.str(nspc__85825),cljs.core.str("/")].join('');
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
var pr_pair__85826 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__85826,"{",", ","}",opts,coll);
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
var normalize__85828 = (function (n,len){
var ns__85827 = [cljs.core.str(n)].join('');
while(true){
if((cljs.core.count.call(null,ns__85827) < len))
{{
var G__85830 = [cljs.core.str("0"),cljs.core.str(ns__85827)].join('');
ns__85827 = G__85830;
continue;
}
} else
{return ns__85827;
}
break;
}
});
return cljs.core.list.call(null,[cljs.core.str("#inst \""),cljs.core.str(d.getUTCFullYear()),cljs.core.str("-"),cljs.core.str(normalize__85828.call(null,(d.getUTCMonth() + 1),2)),cljs.core.str("-"),cljs.core.str(normalize__85828.call(null,d.getUTCDate(),2)),cljs.core.str("T"),cljs.core.str(normalize__85828.call(null,d.getUTCHours(),2)),cljs.core.str(":"),cljs.core.str(normalize__85828.call(null,d.getUTCMinutes(),2)),cljs.core.str(":"),cljs.core.str(normalize__85828.call(null,d.getUTCSeconds(),2)),cljs.core.str("."),cljs.core.str(normalize__85828.call(null,d.getUTCMilliseconds(),3)),cljs.core.str("-"),cljs.core.str("00:00\"")].join(''));
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
var pr_pair__85829 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__85829,"{",", ","}",opts,coll);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.HashMap.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var pr_pair__85831 = (function (keyval){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,""," ","",opts,keyval);
});
return cljs.core.pr_sequential_writer.call(null,writer,pr_pair__85831,"{",", ","}",opts,coll);
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
var pr_pair__85832 = (function (keyval){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,""," ","",opts,keyval);
});
return cljs.core.pr_sequential_writer.call(null,writer,pr_pair__85832,"{",", ","}",opts,coll);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var pr_pair__85833 = (function (keyval){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,""," ","",opts,keyval);
});
return cljs.core.pr_sequential_writer.call(null,writer,pr_pair__85833,"{",", ","}",opts,coll);
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
var temp__3974__auto____85834 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3974__auto____85834))
{var nspc__85835 = temp__3974__auto____85834;
cljs.core.write_all.call(null,writer,[cljs.core.str(nspc__85835)].join(''),"/");
} else
{}
return cljs.core._write.call(null,writer,cljs.core.name.call(null,obj));
} else
{if(cljs.core.symbol_QMARK_.call(null,obj))
{var temp__3974__auto____85836 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3974__auto____85836))
{var nspc__85837 = temp__3974__auto____85836;
cljs.core.write_all.call(null,writer,[cljs.core.str(nspc__85837)].join(''),"/");
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
var pr_pair__85838 = (function (keyval){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,""," ","",opts,keyval);
});
return cljs.core.pr_sequential_writer.call(null,writer,pr_pair__85838,"{",", ","}",opts,coll);
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
var normalize__85840 = (function (n,len){
var ns__85839 = [cljs.core.str(n)].join('');
while(true){
if((cljs.core.count.call(null,ns__85839) < len))
{{
var G__85842 = [cljs.core.str("0"),cljs.core.str(ns__85839)].join('');
ns__85839 = G__85842;
continue;
}
} else
{return ns__85839;
}
break;
}
});
return cljs.core.write_all.call(null,writer,"#inst \"",[cljs.core.str(d.getUTCFullYear())].join(''),"-",normalize__85840.call(null,(d.getUTCMonth() + 1),2),"-",normalize__85840.call(null,d.getUTCDate(),2),"T",normalize__85840.call(null,d.getUTCHours(),2),":",normalize__85840.call(null,d.getUTCMinutes(),2),":",normalize__85840.call(null,d.getUTCSeconds(),2),".",normalize__85840.call(null,d.getUTCMilliseconds(),3),"-","00:00\"");
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
var pr_pair__85841 = (function (keyval){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,""," ","",opts,keyval);
});
return cljs.core.pr_sequential_writer.call(null,writer,pr_pair__85841,"{",", ","}",opts,coll);
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
var this__85843 = this;
return goog.getUid(this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var this__85844 = this;
var G__85845__85846 = cljs.core.seq.call(null,this__85844.watches);
while(true){
if(G__85845__85846)
{var vec__85847__85848 = cljs.core.first.call(null,G__85845__85846);
var key__85849 = cljs.core.nth.call(null,vec__85847__85848,0,null);
var f__85850 = cljs.core.nth.call(null,vec__85847__85848,1,null);
f__85850.call(null,key__85849,this$,oldval,newval);
{
var G__85858 = cljs.core.next.call(null,G__85845__85846);
G__85845__85846 = G__85858;
continue;
}
} else
{return null;
}
break;
}
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var this__85851 = this;
return this$.watches = cljs.core.assoc.call(null,this__85851.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var this__85852 = this;
return this$.watches = cljs.core.dissoc.call(null,this__85852.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,writer,opts){
var this__85853 = this;
cljs.core._write.call(null,writer,"#<Atom: ");
cljs.core._pr_writer.call(null,this__85853.state,writer,opts);
return cljs.core._write.call(null,writer,">");
});
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (a,opts){
var this__85854 = this;
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["#<Atom: "], true),cljs.core._pr_seq.call(null,this__85854.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var this__85855 = this;
return this__85855.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var this__85856 = this;
return this__85856.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var this__85857 = this;
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
var G__85870__delegate = function (x,p__85859){
var map__85865__85866 = p__85859;
var map__85865__85867 = ((cljs.core.seq_QMARK_.call(null,map__85865__85866))?cljs.core.apply.call(null,cljs.core.hash_map,map__85865__85866):map__85865__85866);
var validator__85868 = cljs.core._lookup.call(null,map__85865__85867,"\uFDD0'validator",null);
var meta__85869 = cljs.core._lookup.call(null,map__85865__85867,"\uFDD0'meta",null);
return (new cljs.core.Atom(x,meta__85869,validator__85868,null));
};
var G__85870 = function (x,var_args){
var p__85859 = null;
if (goog.isDef(var_args)) {
  p__85859 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__85870__delegate.call(this, x, p__85859);
};
G__85870.cljs$lang$maxFixedArity = 1;
G__85870.cljs$lang$applyTo = (function (arglist__85871){
var x = cljs.core.first(arglist__85871);
var p__85859 = cljs.core.rest(arglist__85871);
return G__85870__delegate(x, p__85859);
});
G__85870.cljs$lang$arity$variadic = G__85870__delegate;
return G__85870;
})()
;
atom = function(x,var_args){
var p__85859 = var_args;
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
var temp__3974__auto____85875 = a.validator;
if(cljs.core.truth_(temp__3974__auto____85875))
{var validate__85876 = temp__3974__auto____85875;
if(cljs.core.truth_(validate__85876.call(null,new_value)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Validator rejected reference state"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'validate","\uFDD1'new-value"),cljs.core.hash_map("\uFDD0'line",6683))))].join('')));
}
} else
{}
var old_value__85877 = a.state;
a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__85877,new_value);
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
var G__85878__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__85878 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__85878__delegate.call(this, a, f, x, y, z, more);
};
G__85878.cljs$lang$maxFixedArity = 5;
G__85878.cljs$lang$applyTo = (function (arglist__85879){
var a = cljs.core.first(arglist__85879);
var f = cljs.core.first(cljs.core.next(arglist__85879));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__85879)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__85879))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__85879)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__85879)))));
return G__85878__delegate(a, f, x, y, z, more);
});
G__85878.cljs$lang$arity$variadic = G__85878__delegate;
return G__85878;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__85880){
var iref = cljs.core.first(arglist__85880);
var f = cljs.core.first(cljs.core.next(arglist__85880));
var args = cljs.core.rest(cljs.core.next(arglist__85880));
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
var this__85881 = this;
return (new cljs.core.Keyword("\uFDD0'done")).call(null,cljs.core.deref.call(null,this__85881.state));
});
cljs.core.Delay.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var this__85882 = this;
return (new cljs.core.Keyword("\uFDD0'value")).call(null,cljs.core.swap_BANG_.call(null,this__85882.state,(function (p__85883){
var map__85884__85885 = p__85883;
var map__85884__85886 = ((cljs.core.seq_QMARK_.call(null,map__85884__85885))?cljs.core.apply.call(null,cljs.core.hash_map,map__85884__85885):map__85884__85885);
var curr_state__85887 = map__85884__85886;
var done__85888 = cljs.core._lookup.call(null,map__85884__85886,"\uFDD0'done",null);
if(cljs.core.truth_(done__85888))
{return curr_state__85887;
} else
{return cljs.core.ObjMap.fromObject(["\uFDD0'done","\uFDD0'value"],{"\uFDD0'done":true,"\uFDD0'value":this__85882.f.call(null)});
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
var map__85909__85910 = options;
var map__85909__85911 = ((cljs.core.seq_QMARK_.call(null,map__85909__85910))?cljs.core.apply.call(null,cljs.core.hash_map,map__85909__85910):map__85909__85910);
var keywordize_keys__85912 = cljs.core._lookup.call(null,map__85909__85911,"\uFDD0'keywordize-keys",null);
var keyfn__85913 = (cljs.core.truth_(keywordize_keys__85912)?cljs.core.keyword:cljs.core.str);
var f__85928 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,(function (){var iter__5628__auto____85927 = (function iter__85921(s__85922){
return (new cljs.core.LazySeq(null,false,(function (){
var s__85922__85925 = s__85922;
while(true){
if(cljs.core.seq.call(null,s__85922__85925))
{var k__85926 = cljs.core.first.call(null,s__85922__85925);
return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([keyfn__85913.call(null,k__85926),thisfn.call(null,(x[k__85926]))], true),iter__85921.call(null,cljs.core.rest.call(null,s__85922__85925)));
} else
{return null;
}
break;
}
}),null));
});
return iter__5628__auto____85927.call(null,cljs.core.js_keys.call(null,x));
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
return f__85928.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__85929){
var x = cljs.core.first(arglist__85929);
var options = cljs.core.rest(arglist__85929);
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
var mem__85934 = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
return (function() { 
var G__85938__delegate = function (args){
var temp__3971__auto____85935 = cljs.core._lookup.call(null,cljs.core.deref.call(null,mem__85934),args,null);
if(cljs.core.truth_(temp__3971__auto____85935))
{var v__85936 = temp__3971__auto____85935;
return v__85936;
} else
{var ret__85937 = cljs.core.apply.call(null,f,args);
cljs.core.swap_BANG_.call(null,mem__85934,cljs.core.assoc,args,ret__85937);
return ret__85937;
}
};
var G__85938 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__85938__delegate.call(this, args);
};
G__85938.cljs$lang$maxFixedArity = 0;
G__85938.cljs$lang$applyTo = (function (arglist__85939){
var args = cljs.core.seq(arglist__85939);;
return G__85938__delegate(args);
});
G__85938.cljs$lang$arity$variadic = G__85938__delegate;
return G__85938;
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
var ret__85941 = f.call(null);
if(cljs.core.fn_QMARK_.call(null,ret__85941))
{{
var G__85942 = ret__85941;
f = G__85942;
continue;
}
} else
{return ret__85941;
}
break;
}
});
var trampoline__2 = (function() { 
var G__85943__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__85943 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__85943__delegate.call(this, f, args);
};
G__85943.cljs$lang$maxFixedArity = 1;
G__85943.cljs$lang$applyTo = (function (arglist__85944){
var f = cljs.core.first(arglist__85944);
var args = cljs.core.rest(arglist__85944);
return G__85943__delegate(f, args);
});
G__85943.cljs$lang$arity$variadic = G__85943__delegate;
return G__85943;
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
var k__85946 = f.call(null,x);
return cljs.core.assoc.call(null,ret,k__85946,cljs.core.conj.call(null,cljs.core._lookup.call(null,ret,k__85946,cljs.core.PersistentVector.EMPTY),x));
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
var or__3824__auto____85955 = cljs.core._EQ_.call(null,child,parent);
if(or__3824__auto____85955)
{return or__3824__auto____85955;
} else
{var or__3824__auto____85956 = cljs.core.contains_QMARK_.call(null,(new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h).call(null,child),parent);
if(or__3824__auto____85956)
{return or__3824__auto____85956;
} else
{var and__3822__auto____85957 = cljs.core.vector_QMARK_.call(null,parent);
if(and__3822__auto____85957)
{var and__3822__auto____85958 = cljs.core.vector_QMARK_.call(null,child);
if(and__3822__auto____85958)
{var and__3822__auto____85959 = (cljs.core.count.call(null,parent) === cljs.core.count.call(null,child));
if(and__3822__auto____85959)
{var ret__85960 = true;
var i__85961 = 0;
while(true){
if((function (){var or__3824__auto____85962 = cljs.core.not.call(null,ret__85960);
if(or__3824__auto____85962)
{return or__3824__auto____85962;
} else
{return (i__85961 === cljs.core.count.call(null,parent));
}
})())
{return ret__85960;
} else
{{
var G__85963 = isa_QMARK_.call(null,h,child.call(null,i__85961),parent.call(null,i__85961));
var G__85964 = (i__85961 + 1);
ret__85960 = G__85963;
i__85961 = G__85964;
continue;
}
}
break;
}
} else
{return and__3822__auto____85959;
}
} else
{return and__3822__auto____85958;
}
} else
{return and__3822__auto____85957;
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
var tp__85973 = (new cljs.core.Keyword("\uFDD0'parents")).call(null,h);
var td__85974 = (new cljs.core.Keyword("\uFDD0'descendants")).call(null,h);
var ta__85975 = (new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h);
var tf__85976 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core._lookup.call(null,targets,k,cljs.core.PersistentHashSet.EMPTY),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});
var or__3824__auto____85977 = ((cljs.core.contains_QMARK_.call(null,tp__85973.call(null,tag),parent))?null:(function (){if(cljs.core.contains_QMARK_.call(null,ta__85975.call(null,tag),parent))
{throw (new Error([cljs.core.str(tag),cljs.core.str("already has"),cljs.core.str(parent),cljs.core.str("as ancestor")].join('')));
} else
{}
if(cljs.core.contains_QMARK_.call(null,ta__85975.call(null,parent),tag))
{throw (new Error([cljs.core.str("Cyclic derivation:"),cljs.core.str(parent),cljs.core.str("has"),cljs.core.str(tag),cljs.core.str("as ancestor")].join('')));
} else
{}
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'ancestors","\uFDD0'descendants"],{"\uFDD0'parents":cljs.core.assoc.call(null,(new cljs.core.Keyword("\uFDD0'parents")).call(null,h),tag,cljs.core.conj.call(null,cljs.core._lookup.call(null,tp__85973,tag,cljs.core.PersistentHashSet.EMPTY),parent)),"\uFDD0'ancestors":tf__85976.call(null,(new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h),tag,td__85974,parent,ta__85975),"\uFDD0'descendants":tf__85976.call(null,(new cljs.core.Keyword("\uFDD0'descendants")).call(null,h),parent,ta__85975,tag,td__85974)});
})());
if(cljs.core.truth_(or__3824__auto____85977))
{return or__3824__auto____85977;
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
var parentMap__85982 = (new cljs.core.Keyword("\uFDD0'parents")).call(null,h);
var childsParents__85983 = (cljs.core.truth_(parentMap__85982.call(null,tag))?cljs.core.disj.call(null,parentMap__85982.call(null,tag),parent):cljs.core.PersistentHashSet.EMPTY);
var newParents__85984 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__85983))?cljs.core.assoc.call(null,parentMap__85982,tag,childsParents__85983):cljs.core.dissoc.call(null,parentMap__85982,tag));
var deriv_seq__85985 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__85965_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__85965_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__85965_SHARP_),cljs.core.second.call(null,p1__85965_SHARP_)));
}),cljs.core.seq.call(null,newParents__85984)));
if(cljs.core.contains_QMARK_.call(null,parentMap__85982.call(null,tag),parent))
{return cljs.core.reduce.call(null,(function (p1__85966_SHARP_,p2__85967_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__85966_SHARP_,p2__85967_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__85985));
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
var xprefs__85993 = cljs.core.deref.call(null,prefer_table).call(null,x);
var or__3824__auto____85995 = (cljs.core.truth_((function (){var and__3822__auto____85994 = xprefs__85993;
if(cljs.core.truth_(and__3822__auto____85994))
{return xprefs__85993.call(null,y);
} else
{return and__3822__auto____85994;
}
})())?true:null);
if(cljs.core.truth_(or__3824__auto____85995))
{return or__3824__auto____85995;
} else
{var or__3824__auto____85997 = (function (){var ps__85996 = cljs.core.parents.call(null,y);
while(true){
if((cljs.core.count.call(null,ps__85996) > 0))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__85996),prefer_table)))
{} else
{}
{
var G__86000 = cljs.core.rest.call(null,ps__85996);
ps__85996 = G__86000;
continue;
}
} else
{return null;
}
break;
}
})();
if(cljs.core.truth_(or__3824__auto____85997))
{return or__3824__auto____85997;
} else
{var or__3824__auto____85999 = (function (){var ps__85998 = cljs.core.parents.call(null,x);
while(true){
if((cljs.core.count.call(null,ps__85998) > 0))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__85998),y,prefer_table)))
{} else
{}
{
var G__86001 = cljs.core.rest.call(null,ps__85998);
ps__85998 = G__86001;
continue;
}
} else
{return null;
}
break;
}
})();
if(cljs.core.truth_(or__3824__auto____85999))
{return or__3824__auto____85999;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3824__auto____86003 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);
if(cljs.core.truth_(or__3824__auto____86003))
{return or__3824__auto____86003;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__86021 = cljs.core.reduce.call(null,(function (be,p__86013){
var vec__86014__86015 = p__86013;
var k__86016 = cljs.core.nth.call(null,vec__86014__86015,0,null);
var ___86017 = cljs.core.nth.call(null,vec__86014__86015,1,null);
var e__86018 = vec__86014__86015;
if(cljs.core.isa_QMARK_.call(null,dispatch_val,k__86016))
{var be2__86020 = (cljs.core.truth_((function (){var or__3824__auto____86019 = (be == null);
if(or__3824__auto____86019)
{return or__3824__auto____86019;
} else
{return cljs.core.dominates.call(null,k__86016,cljs.core.first.call(null,be),prefer_table);
}
})())?e__86018:be);
if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__86020),k__86016,prefer_table)))
{} else
{throw (new Error([cljs.core.str("Multiple methods in multimethod '"),cljs.core.str(name),cljs.core.str("' match dispatch value: "),cljs.core.str(dispatch_val),cljs.core.str(" -> "),cljs.core.str(k__86016),cljs.core.str(" and "),cljs.core.str(cljs.core.first.call(null,be2__86020)),cljs.core.str(", and neither is preferred")].join('')));
}
return be2__86020;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));
if(cljs.core.truth_(best_entry__86021))
{if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy)))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__86021));
return cljs.core.second.call(null,best_entry__86021);
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
if((function (){var and__3822__auto____86026 = mf;
if(and__3822__auto____86026)
{return mf.cljs$core$IMultiFn$_reset$arity$1;
} else
{return and__3822__auto____86026;
}
})())
{return mf.cljs$core$IMultiFn$_reset$arity$1(mf);
} else
{var x__5531__auto____86027 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____86028 = (cljs.core._reset[goog.typeOf(x__5531__auto____86027)]);
if(or__3824__auto____86028)
{return or__3824__auto____86028;
} else
{var or__3824__auto____86029 = (cljs.core._reset["_"]);
if(or__3824__auto____86029)
{return or__3824__auto____86029;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if((function (){var and__3822__auto____86034 = mf;
if(and__3822__auto____86034)
{return mf.cljs$core$IMultiFn$_add_method$arity$3;
} else
{return and__3822__auto____86034;
}
})())
{return mf.cljs$core$IMultiFn$_add_method$arity$3(mf,dispatch_val,method);
} else
{var x__5531__auto____86035 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____86036 = (cljs.core._add_method[goog.typeOf(x__5531__auto____86035)]);
if(or__3824__auto____86036)
{return or__3824__auto____86036;
} else
{var or__3824__auto____86037 = (cljs.core._add_method["_"]);
if(or__3824__auto____86037)
{return or__3824__auto____86037;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if((function (){var and__3822__auto____86042 = mf;
if(and__3822__auto____86042)
{return mf.cljs$core$IMultiFn$_remove_method$arity$2;
} else
{return and__3822__auto____86042;
}
})())
{return mf.cljs$core$IMultiFn$_remove_method$arity$2(mf,dispatch_val);
} else
{var x__5531__auto____86043 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____86044 = (cljs.core._remove_method[goog.typeOf(x__5531__auto____86043)]);
if(or__3824__auto____86044)
{return or__3824__auto____86044;
} else
{var or__3824__auto____86045 = (cljs.core._remove_method["_"]);
if(or__3824__auto____86045)
{return or__3824__auto____86045;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if((function (){var and__3822__auto____86050 = mf;
if(and__3822__auto____86050)
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3;
} else
{return and__3822__auto____86050;
}
})())
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3(mf,dispatch_val,dispatch_val_y);
} else
{var x__5531__auto____86051 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____86052 = (cljs.core._prefer_method[goog.typeOf(x__5531__auto____86051)]);
if(or__3824__auto____86052)
{return or__3824__auto____86052;
} else
{var or__3824__auto____86053 = (cljs.core._prefer_method["_"]);
if(or__3824__auto____86053)
{return or__3824__auto____86053;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if((function (){var and__3822__auto____86058 = mf;
if(and__3822__auto____86058)
{return mf.cljs$core$IMultiFn$_get_method$arity$2;
} else
{return and__3822__auto____86058;
}
})())
{return mf.cljs$core$IMultiFn$_get_method$arity$2(mf,dispatch_val);
} else
{var x__5531__auto____86059 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____86060 = (cljs.core._get_method[goog.typeOf(x__5531__auto____86059)]);
if(or__3824__auto____86060)
{return or__3824__auto____86060;
} else
{var or__3824__auto____86061 = (cljs.core._get_method["_"]);
if(or__3824__auto____86061)
{return or__3824__auto____86061;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if((function (){var and__3822__auto____86066 = mf;
if(and__3822__auto____86066)
{return mf.cljs$core$IMultiFn$_methods$arity$1;
} else
{return and__3822__auto____86066;
}
})())
{return mf.cljs$core$IMultiFn$_methods$arity$1(mf);
} else
{var x__5531__auto____86067 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____86068 = (cljs.core._methods[goog.typeOf(x__5531__auto____86067)]);
if(or__3824__auto____86068)
{return or__3824__auto____86068;
} else
{var or__3824__auto____86069 = (cljs.core._methods["_"]);
if(or__3824__auto____86069)
{return or__3824__auto____86069;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if((function (){var and__3822__auto____86074 = mf;
if(and__3822__auto____86074)
{return mf.cljs$core$IMultiFn$_prefers$arity$1;
} else
{return and__3822__auto____86074;
}
})())
{return mf.cljs$core$IMultiFn$_prefers$arity$1(mf);
} else
{var x__5531__auto____86075 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____86076 = (cljs.core._prefers[goog.typeOf(x__5531__auto____86075)]);
if(or__3824__auto____86076)
{return or__3824__auto____86076;
} else
{var or__3824__auto____86077 = (cljs.core._prefers["_"]);
if(or__3824__auto____86077)
{return or__3824__auto____86077;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if((function (){var and__3822__auto____86082 = mf;
if(and__3822__auto____86082)
{return mf.cljs$core$IMultiFn$_dispatch$arity$2;
} else
{return and__3822__auto____86082;
}
})())
{return mf.cljs$core$IMultiFn$_dispatch$arity$2(mf,args);
} else
{var x__5531__auto____86083 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____86084 = (cljs.core._dispatch[goog.typeOf(x__5531__auto____86083)]);
if(or__3824__auto____86084)
{return or__3824__auto____86084;
} else
{var or__3824__auto____86085 = (cljs.core._dispatch["_"]);
if(or__3824__auto____86085)
{return or__3824__auto____86085;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__86088 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__86089 = cljs.core._get_method.call(null,mf,dispatch_val__86088);
if(cljs.core.truth_(target_fn__86089))
{} else
{throw (new Error([cljs.core.str("No method in multimethod '"),cljs.core.str(cljs.core.name),cljs.core.str("' for dispatch value: "),cljs.core.str(dispatch_val__86088)].join('')));
}
return cljs.core.apply.call(null,target_fn__86089,args);
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
var this__86090 = this;
return goog.getUid(this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset$arity$1 = (function (mf){
var this__86091 = this;
cljs.core.swap_BANG_.call(null,this__86091.method_table,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__86091.method_cache,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__86091.prefer_table,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__86091.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method$arity$3 = (function (mf,dispatch_val,method){
var this__86092 = this;
cljs.core.swap_BANG_.call(null,this__86092.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__86092.method_cache,this__86092.method_table,this__86092.cached_hierarchy,this__86092.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method$arity$2 = (function (mf,dispatch_val){
var this__86093 = this;
cljs.core.swap_BANG_.call(null,this__86093.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__86093.method_cache,this__86093.method_table,this__86093.cached_hierarchy,this__86093.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method$arity$2 = (function (mf,dispatch_val){
var this__86094 = this;
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__86094.cached_hierarchy),cljs.core.deref.call(null,this__86094.hierarchy)))
{} else
{cljs.core.reset_cache.call(null,this__86094.method_cache,this__86094.method_table,this__86094.cached_hierarchy,this__86094.hierarchy);
}
var temp__3971__auto____86095 = cljs.core.deref.call(null,this__86094.method_cache).call(null,dispatch_val);
if(cljs.core.truth_(temp__3971__auto____86095))
{var target_fn__86096 = temp__3971__auto____86095;
return target_fn__86096;
} else
{var temp__3971__auto____86097 = cljs.core.find_and_cache_best_method.call(null,this__86094.name,dispatch_val,this__86094.hierarchy,this__86094.method_table,this__86094.prefer_table,this__86094.method_cache,this__86094.cached_hierarchy);
if(cljs.core.truth_(temp__3971__auto____86097))
{var target_fn__86098 = temp__3971__auto____86097;
return target_fn__86098;
} else
{return cljs.core.deref.call(null,this__86094.method_table).call(null,this__86094.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method$arity$3 = (function (mf,dispatch_val_x,dispatch_val_y){
var this__86099 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__86099.prefer_table)))
{throw (new Error([cljs.core.str("Preference conflict in multimethod '"),cljs.core.str(this__86099.name),cljs.core.str("': "),cljs.core.str(dispatch_val_y),cljs.core.str(" is already preferred to "),cljs.core.str(dispatch_val_x)].join('')));
} else
{}
cljs.core.swap_BANG_.call(null,this__86099.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core._lookup.call(null,old,dispatch_val_x,cljs.core.PersistentHashSet.EMPTY),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__86099.method_cache,this__86099.method_table,this__86099.cached_hierarchy,this__86099.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods$arity$1 = (function (mf){
var this__86100 = this;
return cljs.core.deref.call(null,this__86100.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers$arity$1 = (function (mf){
var this__86101 = this;
return cljs.core.deref.call(null,this__86101.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch$arity$2 = (function (mf,args){
var this__86102 = this;
return cljs.core.do_dispatch.call(null,mf,this__86102.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__86104__delegate = function (_,args){
var self__86103 = this;
return cljs.core._dispatch.call(null,self__86103,args);
};
var G__86104 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__86104__delegate.call(this, _, args);
};
G__86104.cljs$lang$maxFixedArity = 1;
G__86104.cljs$lang$applyTo = (function (arglist__86105){
var _ = cljs.core.first(arglist__86105);
var args = cljs.core.rest(arglist__86105);
return G__86104__delegate(_, args);
});
G__86104.cljs$lang$arity$variadic = G__86104__delegate;
return G__86104;
})()
;
cljs.core.MultiFn.prototype.apply = (function (_,args){
var self__86106 = this;
return cljs.core._dispatch.call(null,self__86106,args);
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
var this__86107 = this;
return goog.string.hashCode(cljs.core.pr_str.call(null,this$));
});
cljs.core.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_86109,writer,_){
var this__86108 = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#uuid \""),cljs.core.str(this__86108.uuid),cljs.core.str("\"")].join(''));
});
cljs.core.UUID.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (_86111,_){
var this__86110 = this;
return cljs.core.list.call(null,[cljs.core.str("#uuid \""),cljs.core.str(this__86110.uuid),cljs.core.str("\"")].join(''));
});
cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var this__86112 = this;
var and__3822__auto____86113 = cljs.core.instance_QMARK_.call(null,cljs.core.UUID,other);
if(and__3822__auto____86113)
{return (this__86112.uuid === other.uuid);
} else
{return and__3822__auto____86113;
}
});
cljs.core.UUID.prototype.toString = (function (){
var this__86114 = this;
var this__86115 = this;
return cljs.core.pr_str.call(null,this__86115);
});
cljs.core.UUID;

goog.provide('cljs.reader');
goog.require('cljs.core');
goog.require('goog.string');
cljs.reader.PushbackReader = {};
cljs.reader.read_char = (function read_char(reader){
if((function (){var and__3822__auto____86393 = reader;
if(and__3822__auto____86393)
{return reader.cljs$reader$PushbackReader$read_char$arity$1;
} else
{return and__3822__auto____86393;
}
})())
{return reader.cljs$reader$PushbackReader$read_char$arity$1(reader);
} else
{var x__5531__auto____86394 = (((reader == null))?null:reader);
return (function (){var or__3824__auto____86395 = (cljs.reader.read_char[goog.typeOf(x__5531__auto____86394)]);
if(or__3824__auto____86395)
{return or__3824__auto____86395;
} else
{var or__3824__auto____86396 = (cljs.reader.read_char["_"]);
if(or__3824__auto____86396)
{return or__3824__auto____86396;
} else
{throw cljs.core.missing_protocol.call(null,"PushbackReader.read-char",reader);
}
}
})().call(null,reader);
}
});
cljs.reader.unread = (function unread(reader,ch){
if((function (){var and__3822__auto____86401 = reader;
if(and__3822__auto____86401)
{return reader.cljs$reader$PushbackReader$unread$arity$2;
} else
{return and__3822__auto____86401;
}
})())
{return reader.cljs$reader$PushbackReader$unread$arity$2(reader,ch);
} else
{var x__5531__auto____86402 = (((reader == null))?null:reader);
return (function (){var or__3824__auto____86403 = (cljs.reader.unread[goog.typeOf(x__5531__auto____86402)]);
if(or__3824__auto____86403)
{return or__3824__auto____86403;
} else
{var or__3824__auto____86404 = (cljs.reader.unread["_"]);
if(or__3824__auto____86404)
{return or__3824__auto____86404;
} else
{throw cljs.core.missing_protocol.call(null,"PushbackReader.unread",reader);
}
}
})().call(null,reader,ch);
}
});

goog.provide('cljs.reader.StringPushbackReader');

/**
* @constructor
*/
cljs.reader.StringPushbackReader = (function (s,index_atom,buffer_atom){
this.s = s;
this.index_atom = index_atom;
this.buffer_atom = buffer_atom;
})
cljs.reader.StringPushbackReader.cljs$lang$type = true;
cljs.reader.StringPushbackReader.cljs$lang$ctorPrSeq = (function (this__5466__auto__){
return cljs.core.list.call(null,"cljs.reader/StringPushbackReader");
});
cljs.reader.StringPushbackReader.cljs$lang$ctorPrWriter = (function (this__5466__auto__,writer__5467__auto__){
return cljs.core._write.call(null,writer__5467__auto__,"cljs.reader/StringPushbackReader");
});
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$ = true;
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$read_char$arity$1 = (function (reader){
var this__86405 = this;
if(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,this__86405.buffer_atom)))
{var idx__86406 = cljs.core.deref.call(null,this__86405.index_atom);
cljs.core.swap_BANG_.call(null,this__86405.index_atom,cljs.core.inc);
return (this__86405.s[idx__86406]);
} else
{var buf__86407 = cljs.core.deref.call(null,this__86405.buffer_atom);
cljs.core.swap_BANG_.call(null,this__86405.buffer_atom,cljs.core.rest);
return cljs.core.first.call(null,buf__86407);
}
});
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$unread$arity$2 = (function (reader,ch){
var this__86408 = this;
return cljs.core.swap_BANG_.call(null,this__86408.buffer_atom,(function (p1__86388_SHARP_){
return cljs.core.cons.call(null,ch,p1__86388_SHARP_);
}));
});
cljs.reader.StringPushbackReader;
cljs.reader.push_back_reader = (function push_back_reader(s){
return (new cljs.reader.StringPushbackReader(s,cljs.core.atom.call(null,0),cljs.core.atom.call(null,null)));
});
/**
* Checks whether a given character is whitespace
*/
cljs.reader.whitespace_QMARK_ = (function whitespace_QMARK_(ch){
var or__3824__auto____86410 = goog.string.isBreakingWhitespace(ch);
if(cljs.core.truth_(or__3824__auto____86410))
{return or__3824__auto____86410;
} else
{return ("," === ch);
}
});
/**
* Checks whether a given character is numeric
*/
cljs.reader.numeric_QMARK_ = (function numeric_QMARK_(ch){
return goog.string.isNumeric(ch);
});
/**
* Checks whether the character begins a comment.
*/
cljs.reader.comment_prefix_QMARK_ = (function comment_prefix_QMARK_(ch){
return (";" === ch);
});
/**
* Checks whether the reader is at the start of a number literal
*/
cljs.reader.number_literal_QMARK_ = (function number_literal_QMARK_(reader,initch){
var or__3824__auto____86415 = cljs.reader.numeric_QMARK_.call(null,initch);
if(or__3824__auto____86415)
{return or__3824__auto____86415;
} else
{var and__3822__auto____86417 = (function (){var or__3824__auto____86416 = ("+" === initch);
if(or__3824__auto____86416)
{return or__3824__auto____86416;
} else
{return ("-" === initch);
}
})();
if(cljs.core.truth_(and__3822__auto____86417))
{return cljs.reader.numeric_QMARK_.call(null,(function (){var next_ch__86418 = cljs.reader.read_char.call(null,reader);
cljs.reader.unread.call(null,reader,next_ch__86418);
return next_ch__86418;
})());
} else
{return and__3822__auto____86417;
}
}
});
/**
* @param {...*} var_args
*/
cljs.reader.reader_error = (function() { 
var reader_error__delegate = function (rdr,msg){
throw (new Error(cljs.core.apply.call(null,cljs.core.str,msg)));
};
var reader_error = function (rdr,var_args){
var msg = null;
if (goog.isDef(var_args)) {
  msg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return reader_error__delegate.call(this, rdr, msg);
};
reader_error.cljs$lang$maxFixedArity = 1;
reader_error.cljs$lang$applyTo = (function (arglist__86419){
var rdr = cljs.core.first(arglist__86419);
var msg = cljs.core.rest(arglist__86419);
return reader_error__delegate(rdr, msg);
});
reader_error.cljs$lang$arity$variadic = reader_error__delegate;
return reader_error;
})()
;
cljs.reader.macro_terminating_QMARK_ = (function macro_terminating_QMARK_(ch){
var and__3822__auto____86423 = !((ch === "#"));
if(and__3822__auto____86423)
{var and__3822__auto____86424 = !((ch === "'"));
if(and__3822__auto____86424)
{var and__3822__auto____86425 = !((ch === ":"));
if(and__3822__auto____86425)
{return cljs.reader.macros.call(null,ch);
} else
{return and__3822__auto____86425;
}
} else
{return and__3822__auto____86424;
}
} else
{return and__3822__auto____86423;
}
});
cljs.reader.read_token = (function read_token(rdr,initch){
var sb__86430 = (new goog.string.StringBuffer(initch));
var ch__86431 = cljs.reader.read_char.call(null,rdr);
while(true){
if((function (){var or__3824__auto____86432 = (ch__86431 == null);
if(or__3824__auto____86432)
{return or__3824__auto____86432;
} else
{var or__3824__auto____86433 = cljs.reader.whitespace_QMARK_.call(null,ch__86431);
if(or__3824__auto____86433)
{return or__3824__auto____86433;
} else
{return cljs.reader.macro_terminating_QMARK_.call(null,ch__86431);
}
}
})())
{cljs.reader.unread.call(null,rdr,ch__86431);
return sb__86430.toString();
} else
{{
var G__86434 = (function (){sb__86430.append(ch__86431);
return sb__86430;
})();
var G__86435 = cljs.reader.read_char.call(null,rdr);
sb__86430 = G__86434;
ch__86431 = G__86435;
continue;
}
}
break;
}
});
/**
* Advances the reader to the end of a line. Returns the reader
*/
cljs.reader.skip_line = (function skip_line(reader,_){
while(true){
var ch__86439 = cljs.reader.read_char.call(null,reader);
if((function (){var or__3824__auto____86440 = (ch__86439 === "n");
if(or__3824__auto____86440)
{return or__3824__auto____86440;
} else
{var or__3824__auto____86441 = (ch__86439 === "r");
if(or__3824__auto____86441)
{return or__3824__auto____86441;
} else
{return (ch__86439 == null);
}
}
})())
{return reader;
} else
{{
continue;
}
}
break;
}
});
cljs.reader.int_pattern = cljs.core.re_pattern.call(null,"([-+]?)(?:(0)|([1-9][0-9]*)|0[xX]([0-9A-Fa-f]+)|0([0-7]+)|([1-9][0-9]?)[rR]([0-9A-Za-z]+)|0[0-9]+)(N)?");
cljs.reader.ratio_pattern = cljs.core.re_pattern.call(null,"([-+]?[0-9]+)/([0-9]+)");
cljs.reader.float_pattern = cljs.core.re_pattern.call(null,"([-+]?[0-9]+(\\.[0-9]*)?([eE][-+]?[0-9]+)?)(M)?");
cljs.reader.symbol_pattern = cljs.core.re_pattern.call(null,"[:]?([^0-9/].*/)?([^0-9/][^/]*)");
cljs.reader.re_find_STAR_ = (function re_find_STAR_(re,s){
var matches__86443 = re.exec(s);
if((matches__86443 == null))
{return null;
} else
{if((matches__86443.length === 1))
{return (matches__86443[0]);
} else
{return matches__86443;
}
}
});
cljs.reader.match_int = (function match_int(s){
var groups__86451 = cljs.reader.re_find_STAR_.call(null,cljs.reader.int_pattern,s);
var group3__86452 = (groups__86451[2]);
if(!((function (){var or__3824__auto____86453 = (group3__86452 == null);
if(or__3824__auto____86453)
{return or__3824__auto____86453;
} else
{return (group3__86452.length < 1);
}
})()))
{return 0;
} else
{var negate__86454 = ((("-" === (groups__86451[1])))?-1:1);
var a__86455 = (cljs.core.truth_((groups__86451[3]))?[(groups__86451[3]),10]:(cljs.core.truth_((groups__86451[4]))?[(groups__86451[4]),16]:(cljs.core.truth_((groups__86451[5]))?[(groups__86451[5]),8]:(cljs.core.truth_((groups__86451[7]))?[(groups__86451[7]),parseInt((groups__86451[7]))]:(("\uFDD0'default")?[null,null]:null)))));
var n__86456 = (a__86455[0]);
var radix__86457 = (a__86455[1]);
if((n__86456 == null))
{return null;
} else
{return (negate__86454 * parseInt(n__86456,radix__86457));
}
}
});
cljs.reader.match_ratio = (function match_ratio(s){
var groups__86461 = cljs.reader.re_find_STAR_.call(null,cljs.reader.ratio_pattern,s);
var numinator__86462 = (groups__86461[1]);
var denominator__86463 = (groups__86461[2]);
return (parseInt(numinator__86462) / parseInt(denominator__86463));
});
cljs.reader.match_float = (function match_float(s){
return parseFloat(s);
});
cljs.reader.re_matches_STAR_ = (function re_matches_STAR_(re,s){
var matches__86466 = re.exec(s);
if((function (){var and__3822__auto____86467 = !((matches__86466 == null));
if(and__3822__auto____86467)
{return ((matches__86466[0]) === s);
} else
{return and__3822__auto____86467;
}
})())
{if((matches__86466.length === 1))
{return (matches__86466[0]);
} else
{return matches__86466;
}
} else
{return null;
}
});
cljs.reader.match_number = (function match_number(s){
if(cljs.core.truth_(cljs.reader.re_matches_STAR_.call(null,cljs.reader.int_pattern,s)))
{return cljs.reader.match_int.call(null,s);
} else
{if(cljs.core.truth_(cljs.reader.re_matches_STAR_.call(null,cljs.reader.ratio_pattern,s)))
{return cljs.reader.match_ratio.call(null,s);
} else
{if(cljs.core.truth_(cljs.reader.re_matches_STAR_.call(null,cljs.reader.float_pattern,s)))
{return cljs.reader.match_float.call(null,s);
} else
{return null;
}
}
}
});
cljs.reader.escape_char_map = (function escape_char_map(c){
if((c === "t"))
{return "\t";
} else
{if((c === "r"))
{return "\r";
} else
{if((c === "n"))
{return "\n";
} else
{if((c === "\\"))
{return "\\";
} else
{if((c === "\""))
{return "\"";
} else
{if((c === "b"))
{return "\b";
} else
{if((c === "f"))
{return "\f";
} else
{if("\uFDD0'else")
{return null;
} else
{return null;
}
}
}
}
}
}
}
}
});
cljs.reader.read_2_chars = (function read_2_chars(reader){
return (new goog.string.StringBuffer(cljs.reader.read_char.call(null,reader),cljs.reader.read_char.call(null,reader))).toString();
});
cljs.reader.read_4_chars = (function read_4_chars(reader){
return (new goog.string.StringBuffer(cljs.reader.read_char.call(null,reader),cljs.reader.read_char.call(null,reader),cljs.reader.read_char.call(null,reader),cljs.reader.read_char.call(null,reader))).toString();
});
cljs.reader.unicode_2_pattern = cljs.core.re_pattern.call(null,"[0-9A-Fa-f]{2}");
cljs.reader.unicode_4_pattern = cljs.core.re_pattern.call(null,"[0-9A-Fa-f]{4}");
cljs.reader.validate_unicode_escape = (function validate_unicode_escape(unicode_pattern,reader,escape_char,unicode_str){
if(cljs.core.truth_(cljs.core.re_matches.call(null,unicode_pattern,unicode_str)))
{return unicode_str;
} else
{return cljs.reader.reader_error.call(null,reader,"Unexpected unicode escape \\",escape_char,unicode_str);
}
});
cljs.reader.make_unicode_char = (function make_unicode_char(code_str){
var code__86469 = parseInt(code_str,16);
return String.fromCharCode(code__86469);
});
cljs.reader.escape_char = (function escape_char(buffer,reader){
var ch__86472 = cljs.reader.read_char.call(null,reader);
var mapresult__86473 = cljs.reader.escape_char_map.call(null,ch__86472);
if(cljs.core.truth_(mapresult__86473))
{return mapresult__86473;
} else
{if((ch__86472 === "x"))
{return cljs.reader.make_unicode_char.call(null,cljs.reader.validate_unicode_escape.call(null,cljs.reader.unicode_2_pattern,reader,ch__86472,cljs.reader.read_2_chars.call(null,reader)));
} else
{if((ch__86472 === "u"))
{return cljs.reader.make_unicode_char.call(null,cljs.reader.validate_unicode_escape.call(null,cljs.reader.unicode_4_pattern,reader,ch__86472,cljs.reader.read_4_chars.call(null,reader)));
} else
{if(cljs.reader.numeric_QMARK_.call(null,ch__86472))
{return String.fromCharCode(ch__86472);
} else
{if("\uFDD0'else")
{return cljs.reader.reader_error.call(null,reader,"Unexpected unicode escape \\",ch__86472);
} else
{return null;
}
}
}
}
}
});
/**
* Read until first character that doesn't match pred, returning
* char.
*/
cljs.reader.read_past = (function read_past(pred,rdr){
var ch__86475 = cljs.reader.read_char.call(null,rdr);
while(true){
if(cljs.core.truth_(pred.call(null,ch__86475)))
{{
var G__86476 = cljs.reader.read_char.call(null,rdr);
ch__86475 = G__86476;
continue;
}
} else
{return ch__86475;
}
break;
}
});
cljs.reader.read_delimited_list = (function read_delimited_list(delim,rdr,recursive_QMARK_){
var a__86483 = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
while(true){
var ch__86484 = cljs.reader.read_past.call(null,cljs.reader.whitespace_QMARK_,rdr);
if(cljs.core.truth_(ch__86484))
{} else
{cljs.reader.reader_error.call(null,rdr,"EOF while reading");
}
if((delim === ch__86484))
{return cljs.core.persistent_BANG_.call(null,a__86483);
} else
{var temp__3971__auto____86485 = cljs.reader.macros.call(null,ch__86484);
if(cljs.core.truth_(temp__3971__auto____86485))
{var macrofn__86486 = temp__3971__auto____86485;
var mret__86487 = macrofn__86486.call(null,rdr,ch__86484);
{
var G__86489 = (((mret__86487 === rdr))?a__86483:cljs.core.conj_BANG_.call(null,a__86483,mret__86487));
a__86483 = G__86489;
continue;
}
} else
{cljs.reader.unread.call(null,rdr,ch__86484);
var o__86488 = cljs.reader.read.call(null,rdr,true,null,recursive_QMARK_);
{
var G__86490 = (((o__86488 === rdr))?a__86483:cljs.core.conj_BANG_.call(null,a__86483,o__86488));
a__86483 = G__86490;
continue;
}
}
}
break;
}
});
cljs.reader.not_implemented = (function not_implemented(rdr,ch){
return cljs.reader.reader_error.call(null,rdr,"Reader for ",ch," not implemented yet");
});
cljs.reader.read_dispatch = (function read_dispatch(rdr,_){
var ch__86495 = cljs.reader.read_char.call(null,rdr);
var dm__86496 = cljs.reader.dispatch_macros.call(null,ch__86495);
if(cljs.core.truth_(dm__86496))
{return dm__86496.call(null,rdr,_);
} else
{var temp__3971__auto____86497 = cljs.reader.maybe_read_tagged_type.call(null,rdr,ch__86495);
if(cljs.core.truth_(temp__3971__auto____86497))
{var obj__86498 = temp__3971__auto____86497;
return obj__86498;
} else
{return cljs.reader.reader_error.call(null,rdr,"No dispatch macro for ",ch__86495);
}
}
});
cljs.reader.read_unmatched_delimiter = (function read_unmatched_delimiter(rdr,ch){
return cljs.reader.reader_error.call(null,rdr,"Unmached delimiter ",ch);
});
cljs.reader.read_list = (function read_list(rdr,_){
return cljs.core.apply.call(null,cljs.core.list,cljs.reader.read_delimited_list.call(null,")",rdr,true));
});
cljs.reader.read_comment = cljs.reader.skip_line;
cljs.reader.read_vector = (function read_vector(rdr,_){
return cljs.reader.read_delimited_list.call(null,"]",rdr,true);
});
cljs.reader.read_map = (function read_map(rdr,_){
var l__86500 = cljs.reader.read_delimited_list.call(null,"}",rdr,true);
if(cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,l__86500)))
{cljs.reader.reader_error.call(null,rdr,"Map literal must contain an even number of forms");
} else
{}
return cljs.core.apply.call(null,cljs.core.hash_map,l__86500);
});
cljs.reader.read_number = (function read_number(reader,initch){
var buffer__86507 = (new goog.string.StringBuffer(initch));
var ch__86508 = cljs.reader.read_char.call(null,reader);
while(true){
if(cljs.core.truth_((function (){var or__3824__auto____86509 = (ch__86508 == null);
if(or__3824__auto____86509)
{return or__3824__auto____86509;
} else
{var or__3824__auto____86510 = cljs.reader.whitespace_QMARK_.call(null,ch__86508);
if(or__3824__auto____86510)
{return or__3824__auto____86510;
} else
{return cljs.reader.macros.call(null,ch__86508);
}
}
})()))
{cljs.reader.unread.call(null,reader,ch__86508);
var s__86511 = buffer__86507.toString();
var or__3824__auto____86512 = cljs.reader.match_number.call(null,s__86511);
if(cljs.core.truth_(or__3824__auto____86512))
{return or__3824__auto____86512;
} else
{return cljs.reader.reader_error.call(null,reader,"Invalid number format [",s__86511,"]");
}
} else
{{
var G__86513 = (function (){buffer__86507.append(ch__86508);
return buffer__86507;
})();
var G__86514 = cljs.reader.read_char.call(null,reader);
buffer__86507 = G__86513;
ch__86508 = G__86514;
continue;
}
}
break;
}
});
cljs.reader.read_string_STAR_ = (function read_string_STAR_(reader,_){
var buffer__86517 = (new goog.string.StringBuffer());
var ch__86518 = cljs.reader.read_char.call(null,reader);
while(true){
if((ch__86518 == null))
{return cljs.reader.reader_error.call(null,reader,"EOF while reading");
} else
{if(("\\" === ch__86518))
{{
var G__86519 = (function (){buffer__86517.append(cljs.reader.escape_char.call(null,buffer__86517,reader));
return buffer__86517;
})();
var G__86520 = cljs.reader.read_char.call(null,reader);
buffer__86517 = G__86519;
ch__86518 = G__86520;
continue;
}
} else
{if(("\"" === ch__86518))
{return buffer__86517.toString();
} else
{if("\uFDD0'default")
{{
var G__86521 = (function (){buffer__86517.append(ch__86518);
return buffer__86517;
})();
var G__86522 = cljs.reader.read_char.call(null,reader);
buffer__86517 = G__86521;
ch__86518 = G__86522;
continue;
}
} else
{return null;
}
}
}
}
break;
}
});
cljs.reader.special_symbols = (function special_symbols(t,not_found){
if((t === "nil"))
{return null;
} else
{if((t === "true"))
{return true;
} else
{if((t === "false"))
{return false;
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
cljs.reader.read_symbol = (function read_symbol(reader,initch){
var token__86524 = cljs.reader.read_token.call(null,reader,initch);
if(cljs.core.truth_(goog.string.contains(token__86524,"/")))
{return cljs.core.symbol.call(null,cljs.core.subs.call(null,token__86524,0,token__86524.indexOf("/")),cljs.core.subs.call(null,token__86524,(token__86524.indexOf("/") + 1),token__86524.length));
} else
{return cljs.reader.special_symbols.call(null,token__86524,cljs.core.symbol.call(null,token__86524));
}
});
cljs.reader.read_keyword = (function read_keyword(reader,initch){
var token__86534 = cljs.reader.read_token.call(null,reader,cljs.reader.read_char.call(null,reader));
var a__86535 = cljs.reader.re_matches_STAR_.call(null,cljs.reader.symbol_pattern,token__86534);
var token__86536 = (a__86535[0]);
var ns__86537 = (a__86535[1]);
var name__86538 = (a__86535[2]);
if(cljs.core.truth_((function (){var or__3824__auto____86540 = (function (){var and__3822__auto____86539 = !((void 0 === ns__86537));
if(and__3822__auto____86539)
{return (ns__86537.substring((ns__86537.length - 2),ns__86537.length) === ":/");
} else
{return and__3822__auto____86539;
}
})();
if(cljs.core.truth_(or__3824__auto____86540))
{return or__3824__auto____86540;
} else
{var or__3824__auto____86541 = ((name__86538[(name__86538.length - 1)]) === ":");
if(or__3824__auto____86541)
{return or__3824__auto____86541;
} else
{return !((token__86536.indexOf("::",1) === -1));
}
}
})()))
{return cljs.reader.reader_error.call(null,reader,"Invalid token: ",token__86536);
} else
{if((function (){var and__3822__auto____86542 = !((ns__86537 == null));
if(and__3822__auto____86542)
{return (ns__86537.length > 0);
} else
{return and__3822__auto____86542;
}
})())
{return cljs.core.keyword.call(null,ns__86537.substring(0,ns__86537.indexOf("/")),name__86538);
} else
{return cljs.core.keyword.call(null,token__86536);
}
}
});
cljs.reader.desugar_meta = (function desugar_meta(f){
if(cljs.core.symbol_QMARK_.call(null,f))
{return cljs.core.ObjMap.fromObject(["\uFDD0'tag"],{"\uFDD0'tag":f});
} else
{if(cljs.core.string_QMARK_.call(null,f))
{return cljs.core.ObjMap.fromObject(["\uFDD0'tag"],{"\uFDD0'tag":f});
} else
{if(cljs.core.keyword_QMARK_.call(null,f))
{return cljs.core.PersistentArrayMap.fromArrays([f],[true]);
} else
{if("\uFDD0'else")
{return f;
} else
{return null;
}
}
}
}
});
cljs.reader.wrapping_reader = (function wrapping_reader(sym){
return (function (rdr,_){
return cljs.core.list.call(null,sym,cljs.reader.read.call(null,rdr,true,null,true));
});
});
cljs.reader.throwing_reader = (function throwing_reader(msg){
return (function (rdr,_){
return cljs.reader.reader_error.call(null,rdr,msg);
});
});
cljs.reader.read_meta = (function read_meta(rdr,_){
var m__86548 = cljs.reader.desugar_meta.call(null,cljs.reader.read.call(null,rdr,true,null,true));
if(cljs.core.map_QMARK_.call(null,m__86548))
{} else
{cljs.reader.reader_error.call(null,rdr,"Metadata must be Symbol,Keyword,String or Map");
}
var o__86549 = cljs.reader.read.call(null,rdr,true,null,true);
if((function (){var G__86550__86551 = o__86549;
if(G__86550__86551)
{if((function (){var or__3824__auto____86552 = (G__86550__86551.cljs$lang$protocol_mask$partition0$ & 262144);
if(or__3824__auto____86552)
{return or__3824__auto____86552;
} else
{return G__86550__86551.cljs$core$IWithMeta$;
}
})())
{return true;
} else
{if((!G__86550__86551.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IWithMeta,G__86550__86551);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IWithMeta,G__86550__86551);
}
})())
{return cljs.core.with_meta.call(null,o__86549,cljs.core.merge.call(null,cljs.core.meta.call(null,o__86549),m__86548));
} else
{return cljs.reader.reader_error.call(null,rdr,"Metadata can only be applied to IWithMetas");
}
});
cljs.reader.read_set = (function read_set(rdr,_){
return cljs.core.set.call(null,cljs.reader.read_delimited_list.call(null,"}",rdr,true));
});
cljs.reader.read_regex = (function read_regex(rdr,ch){
return cljs.core.re_pattern.call(null,cljs.reader.read_string_STAR_.call(null,rdr,ch));
});
cljs.reader.read_discard = (function read_discard(rdr,_){
cljs.reader.read.call(null,rdr,true,null,true);
return rdr;
});
cljs.reader.macros = (function macros(c){
if((c === "\""))
{return cljs.reader.read_string_STAR_;
} else
{if((c === ":"))
{return cljs.reader.read_keyword;
} else
{if((c === ";"))
{return cljs.reader.not_implemented;
} else
{if((c === "'"))
{return cljs.reader.wrapping_reader.call(null,"\uFDD1'quote");
} else
{if((c === "@"))
{return cljs.reader.wrapping_reader.call(null,"\uFDD1'deref");
} else
{if((c === "^"))
{return cljs.reader.read_meta;
} else
{if((c === "`"))
{return cljs.reader.not_implemented;
} else
{if((c === "~"))
{return cljs.reader.not_implemented;
} else
{if((c === "("))
{return cljs.reader.read_list;
} else
{if((c === ")"))
{return cljs.reader.read_unmatched_delimiter;
} else
{if((c === "["))
{return cljs.reader.read_vector;
} else
{if((c === "]"))
{return cljs.reader.read_unmatched_delimiter;
} else
{if((c === "{"))
{return cljs.reader.read_map;
} else
{if((c === "}"))
{return cljs.reader.read_unmatched_delimiter;
} else
{if((c === "\\"))
{return cljs.reader.read_char;
} else
{if((c === "%"))
{return cljs.reader.not_implemented;
} else
{if((c === "#"))
{return cljs.reader.read_dispatch;
} else
{if("\uFDD0'else")
{return null;
} else
{return null;
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
cljs.reader.dispatch_macros = (function dispatch_macros(s){
if((s === "{"))
{return cljs.reader.read_set;
} else
{if((s === "<"))
{return cljs.reader.throwing_reader.call(null,"Unreadable form");
} else
{if((s === "\""))
{return cljs.reader.read_regex;
} else
{if((s === "!"))
{return cljs.reader.read_comment;
} else
{if((s === "_"))
{return cljs.reader.read_discard;
} else
{if("\uFDD0'else")
{return null;
} else
{return null;
}
}
}
}
}
}
});
/**
* Reads the first object from a PushbackReader. Returns the object read.
* If EOF, throws if eof-is-error is true. Otherwise returns sentinel.
*/
cljs.reader.read = (function read(reader,eof_is_error,sentinel,is_recursive){
while(true){
var ch__86556 = cljs.reader.read_char.call(null,reader);
if((ch__86556 == null))
{if(cljs.core.truth_(eof_is_error))
{return cljs.reader.reader_error.call(null,reader,"EOF while reading");
} else
{return sentinel;
}
} else
{if(cljs.reader.whitespace_QMARK_.call(null,ch__86556))
{{
var G__86559 = reader;
var G__86560 = eof_is_error;
var G__86561 = sentinel;
var G__86562 = is_recursive;
reader = G__86559;
eof_is_error = G__86560;
sentinel = G__86561;
is_recursive = G__86562;
continue;
}
} else
{if(cljs.reader.comment_prefix_QMARK_.call(null,ch__86556))
{{
var G__86563 = cljs.reader.read_comment.call(null,reader,ch__86556);
var G__86564 = eof_is_error;
var G__86565 = sentinel;
var G__86566 = is_recursive;
reader = G__86563;
eof_is_error = G__86564;
sentinel = G__86565;
is_recursive = G__86566;
continue;
}
} else
{if("\uFDD0'else")
{var f__86557 = cljs.reader.macros.call(null,ch__86556);
var res__86558 = (cljs.core.truth_(f__86557)?f__86557.call(null,reader,ch__86556):((cljs.reader.number_literal_QMARK_.call(null,reader,ch__86556))?cljs.reader.read_number.call(null,reader,ch__86556):(("\uFDD0'else")?cljs.reader.read_symbol.call(null,reader,ch__86556):null)));
if((res__86558 === reader))
{{
var G__86567 = reader;
var G__86568 = eof_is_error;
var G__86569 = sentinel;
var G__86570 = is_recursive;
reader = G__86567;
eof_is_error = G__86568;
sentinel = G__86569;
is_recursive = G__86570;
continue;
}
} else
{return res__86558;
}
} else
{return null;
}
}
}
}
break;
}
});
/**
* Reads one object from the string s
*/
cljs.reader.read_string = (function read_string(s){
var r__86572 = cljs.reader.push_back_reader.call(null,s);
return cljs.reader.read.call(null,r__86572,true,null,false);
});
cljs.reader.zero_fill_right = (function zero_fill_right(s,width){
if(cljs.core._EQ_.call(null,width,cljs.core.count.call(null,s)))
{return s;
} else
{if((width < cljs.core.count.call(null,s)))
{return s.substring(0,width);
} else
{if("\uFDD0'else")
{var b__86574 = (new goog.string.StringBuffer(s));
while(true){
if((b__86574.getLength() < width))
{{
var G__86575 = b__86574.append("0");
b__86574 = G__86575;
continue;
}
} else
{return b__86574.toString();
}
break;
}
} else
{return null;
}
}
}
});
cljs.reader.divisible_QMARK_ = (function divisible_QMARK_(num,div){
return ((num % div) === 0);
});
cljs.reader.indivisible_QMARK_ = (function indivisible_QMARK_(num,div){
return cljs.core.not.call(null,cljs.reader.divisible_QMARK_.call(null,num,div));
});
cljs.reader.leap_year_QMARK_ = (function leap_year_QMARK_(year){
var and__3822__auto____86578 = cljs.reader.divisible_QMARK_.call(null,year,4);
if(cljs.core.truth_(and__3822__auto____86578))
{var or__3824__auto____86579 = cljs.reader.indivisible_QMARK_.call(null,year,100);
if(cljs.core.truth_(or__3824__auto____86579))
{return or__3824__auto____86579;
} else
{return cljs.reader.divisible_QMARK_.call(null,year,400);
}
} else
{return and__3822__auto____86578;
}
});
cljs.reader.days_in_month = (function (){var dim_norm__86584 = cljs.core.PersistentVector.fromArray([null,31,28,31,30,31,30,31,31,30,31,30,31], true);
var dim_leap__86585 = cljs.core.PersistentVector.fromArray([null,31,29,31,30,31,30,31,31,30,31,30,31], true);
return (function (month,leap_year_QMARK_){
return cljs.core._lookup.call(null,(cljs.core.truth_(leap_year_QMARK_)?dim_leap__86585:dim_norm__86584),month,null);
});
})();
cljs.reader.parse_and_validate_timestamp = (function (){var timestamp__86586 = /(\d\d\d\d)(?:-(\d\d)(?:-(\d\d)(?:[T](\d\d)(?::(\d\d)(?::(\d\d)(?:[.](\d+))?)?)?)?)?)?(?:[Z]|([-+])(\d\d):(\d\d))?/;
var check__86588 = (function (low,n,high,msg){
if((function (){var and__3822__auto____86587 = (low <= n);
if(and__3822__auto____86587)
{return (n <= high);
} else
{return and__3822__auto____86587;
}
})())
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str(msg),cljs.core.str(" Failed:  "),cljs.core.str(low),cljs.core.str("<="),cljs.core.str(n),cljs.core.str("<="),cljs.core.str(high)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'<=","\uFDD1'low","\uFDD1'n","\uFDD1'high"),cljs.core.hash_map("\uFDD0'line",474))))].join('')));
}
return n;
});
return (function (ts){
var temp__3974__auto____86589 = cljs.core.map.call(null,cljs.core.vec,cljs.core.split_at.call(null,8,cljs.core.re_matches.call(null,timestamp__86586,ts)));
if(cljs.core.truth_(temp__3974__auto____86589))
{var vec__86590__86593 = temp__3974__auto____86589;
var vec__86591__86594 = cljs.core.nth.call(null,vec__86590__86593,0,null);
var ___86595 = cljs.core.nth.call(null,vec__86591__86594,0,null);
var years__86596 = cljs.core.nth.call(null,vec__86591__86594,1,null);
var months__86597 = cljs.core.nth.call(null,vec__86591__86594,2,null);
var days__86598 = cljs.core.nth.call(null,vec__86591__86594,3,null);
var hours__86599 = cljs.core.nth.call(null,vec__86591__86594,4,null);
var minutes__86600 = cljs.core.nth.call(null,vec__86591__86594,5,null);
var seconds__86601 = cljs.core.nth.call(null,vec__86591__86594,6,null);
var milliseconds__86602 = cljs.core.nth.call(null,vec__86591__86594,7,null);
var vec__86592__86603 = cljs.core.nth.call(null,vec__86590__86593,1,null);
var ___86604 = cljs.core.nth.call(null,vec__86592__86603,0,null);
var ___86605 = cljs.core.nth.call(null,vec__86592__86603,1,null);
var ___86606 = cljs.core.nth.call(null,vec__86592__86603,2,null);
var V__86607 = vec__86590__86593;
var vec__86608__86611 = cljs.core.map.call(null,(function (v){
return cljs.core.map.call(null,(function (p1__86583_SHARP_){
return parseInt(p1__86583_SHARP_,10);
}),v);
}),cljs.core.map.call(null,(function (p1__86581_SHARP_,p2__86580_SHARP_){
return cljs.core.update_in.call(null,p2__86580_SHARP_,cljs.core.PersistentVector.fromArray([0], true),p1__86581_SHARP_);
}),cljs.core.PersistentVector.fromArray([cljs.core.constantly.call(null,null),(function (p1__86582_SHARP_){
if(cljs.core._EQ_.call(null,p1__86582_SHARP_,"-"))
{return "-1";
} else
{return "1";
}
})], true),V__86607));
var vec__86609__86612 = cljs.core.nth.call(null,vec__86608__86611,0,null);
var ___86613 = cljs.core.nth.call(null,vec__86609__86612,0,null);
var y__86614 = cljs.core.nth.call(null,vec__86609__86612,1,null);
var mo__86615 = cljs.core.nth.call(null,vec__86609__86612,2,null);
var d__86616 = cljs.core.nth.call(null,vec__86609__86612,3,null);
var h__86617 = cljs.core.nth.call(null,vec__86609__86612,4,null);
var m__86618 = cljs.core.nth.call(null,vec__86609__86612,5,null);
var s__86619 = cljs.core.nth.call(null,vec__86609__86612,6,null);
var ms__86620 = cljs.core.nth.call(null,vec__86609__86612,7,null);
var vec__86610__86621 = cljs.core.nth.call(null,vec__86608__86611,1,null);
var offset_sign__86622 = cljs.core.nth.call(null,vec__86610__86621,0,null);
var offset_hours__86623 = cljs.core.nth.call(null,vec__86610__86621,1,null);
var offset_minutes__86624 = cljs.core.nth.call(null,vec__86610__86621,2,null);
var offset__86625 = (offset_sign__86622 * ((offset_hours__86623 * 60) + offset_minutes__86624));
return cljs.core.PersistentVector.fromArray([((cljs.core.not.call(null,years__86596))?1970:y__86614),((cljs.core.not.call(null,months__86597))?1:check__86588.call(null,1,mo__86615,12,"timestamp month field must be in range 1..12")),((cljs.core.not.call(null,days__86598))?1:check__86588.call(null,1,d__86616,cljs.reader.days_in_month.call(null,mo__86615,cljs.reader.leap_year_QMARK_.call(null,y__86614)),"timestamp day field must be in range 1..last day in month")),((cljs.core.not.call(null,hours__86599))?0:check__86588.call(null,0,h__86617,23,"timestamp hour field must be in range 0..23")),((cljs.core.not.call(null,minutes__86600))?0:check__86588.call(null,0,m__86618,59,"timestamp minute field must be in range 0..59")),((cljs.core.not.call(null,seconds__86601))?0:check__86588.call(null,0,s__86619,((cljs.core._EQ_.call(null,m__86618,59))?60:59),"timestamp second field must be in range 0..60")),((cljs.core.not.call(null,milliseconds__86602))?0:check__86588.call(null,0,ms__86620,999,"timestamp millisecond field must be in range 0..999")),offset__86625], true);
} else
{return null;
}
});
})();
cljs.reader.parse_timestamp = (function parse_timestamp(ts){
var temp__3971__auto____86637 = cljs.reader.parse_and_validate_timestamp.call(null,ts);
if(cljs.core.truth_(temp__3971__auto____86637))
{var vec__86638__86639 = temp__3971__auto____86637;
var years__86640 = cljs.core.nth.call(null,vec__86638__86639,0,null);
var months__86641 = cljs.core.nth.call(null,vec__86638__86639,1,null);
var days__86642 = cljs.core.nth.call(null,vec__86638__86639,2,null);
var hours__86643 = cljs.core.nth.call(null,vec__86638__86639,3,null);
var minutes__86644 = cljs.core.nth.call(null,vec__86638__86639,4,null);
var seconds__86645 = cljs.core.nth.call(null,vec__86638__86639,5,null);
var ms__86646 = cljs.core.nth.call(null,vec__86638__86639,6,null);
var offset__86647 = cljs.core.nth.call(null,vec__86638__86639,7,null);
return (new Date((Date.UTC(years__86640,(months__86641 - 1),days__86642,hours__86643,minutes__86644,seconds__86645,ms__86646) - ((offset__86647 * 60) * 1000))));
} else
{return cljs.reader.reader_error.call(null,null,[cljs.core.str("Unrecognized date/time syntax: "),cljs.core.str(ts)].join(''));
}
});
cljs.reader.read_date = (function read_date(s){
if(cljs.core.string_QMARK_.call(null,s))
{return cljs.reader.parse_timestamp.call(null,s);
} else
{return cljs.reader.reader_error.call(null,null,"Instance literal expects a string for its timestamp.");
}
});
cljs.reader.read_queue = (function read_queue(elems){
if(cljs.core.vector_QMARK_.call(null,elems))
{return cljs.core.into.call(null,cljs.core.PersistentQueue.EMPTY,elems);
} else
{return cljs.reader.reader_error.call(null,null,"Queue literal expects a vector for its elements.");
}
});
cljs.reader.read_uuid = (function read_uuid(uuid){
if(cljs.core.string_QMARK_.call(null,uuid))
{return (new cljs.core.UUID(uuid));
} else
{return cljs.reader.reader_error.call(null,null,"UUID literal expects a string as its representation.");
}
});
cljs.reader._STAR_tag_table_STAR_ = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject(["inst","uuid","queue"],{"inst":cljs.reader.read_date,"uuid":cljs.reader.read_uuid,"queue":cljs.reader.read_queue}));
cljs.reader.maybe_read_tagged_type = (function maybe_read_tagged_type(rdr,initch){
var tag__86651 = cljs.reader.read_symbol.call(null,rdr,initch);
var temp__3971__auto____86652 = cljs.core._lookup.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_),cljs.core.name.call(null,tag__86651),null);
if(cljs.core.truth_(temp__3971__auto____86652))
{var pfn__86653 = temp__3971__auto____86652;
return pfn__86653.call(null,cljs.reader.read.call(null,rdr,true,null,false));
} else
{return cljs.reader.reader_error.call(null,rdr,"Could not find tag parser for ",cljs.core.name.call(null,tag__86651)," in ",cljs.core.pr_str.call(null,cljs.core.keys.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_))));
}
});
cljs.reader.register_tag_parser_BANG_ = (function register_tag_parser_BANG_(tag,f){
var tag__86656 = cljs.core.name.call(null,tag);
var old_parser__86657 = cljs.core._lookup.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_),tag__86656,null);
cljs.core.swap_BANG_.call(null,cljs.reader._STAR_tag_table_STAR_,cljs.core.assoc,tag__86656,f);
return old_parser__86657;
});
cljs.reader.deregister_tag_parser_BANG_ = (function deregister_tag_parser_BANG_(tag){
var tag__86660 = cljs.core.name.call(null,tag);
var old_parser__86661 = cljs.core._lookup.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_),tag__86660,null);
cljs.core.swap_BANG_.call(null,cljs.reader._STAR_tag_table_STAR_,cljs.core.dissoc,tag__86660);
return old_parser__86661;
});

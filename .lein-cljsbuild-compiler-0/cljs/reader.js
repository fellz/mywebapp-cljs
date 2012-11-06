goog.provide('cljs.reader');
goog.require('cljs.core');
goog.require('goog.string');
cljs.reader.PushbackReader = {};
cljs.reader.read_char = (function read_char(reader){
if((function (){var and__3822__auto____77672 = reader;
if(and__3822__auto____77672)
{return reader.cljs$reader$PushbackReader$read_char$arity$1;
} else
{return and__3822__auto____77672;
}
})())
{return reader.cljs$reader$PushbackReader$read_char$arity$1(reader);
} else
{var x__5531__auto____77673 = (((reader == null))?null:reader);
return (function (){var or__3824__auto____77674 = (cljs.reader.read_char[goog.typeOf(x__5531__auto____77673)]);
if(or__3824__auto____77674)
{return or__3824__auto____77674;
} else
{var or__3824__auto____77675 = (cljs.reader.read_char["_"]);
if(or__3824__auto____77675)
{return or__3824__auto____77675;
} else
{throw cljs.core.missing_protocol.call(null,"PushbackReader.read-char",reader);
}
}
})().call(null,reader);
}
});
cljs.reader.unread = (function unread(reader,ch){
if((function (){var and__3822__auto____77680 = reader;
if(and__3822__auto____77680)
{return reader.cljs$reader$PushbackReader$unread$arity$2;
} else
{return and__3822__auto____77680;
}
})())
{return reader.cljs$reader$PushbackReader$unread$arity$2(reader,ch);
} else
{var x__5531__auto____77681 = (((reader == null))?null:reader);
return (function (){var or__3824__auto____77682 = (cljs.reader.unread[goog.typeOf(x__5531__auto____77681)]);
if(or__3824__auto____77682)
{return or__3824__auto____77682;
} else
{var or__3824__auto____77683 = (cljs.reader.unread["_"]);
if(or__3824__auto____77683)
{return or__3824__auto____77683;
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
var this__77684 = this;
if(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,this__77684.buffer_atom)))
{var idx__77685 = cljs.core.deref.call(null,this__77684.index_atom);
cljs.core.swap_BANG_.call(null,this__77684.index_atom,cljs.core.inc);
return (this__77684.s[idx__77685]);
} else
{var buf__77686 = cljs.core.deref.call(null,this__77684.buffer_atom);
cljs.core.swap_BANG_.call(null,this__77684.buffer_atom,cljs.core.rest);
return cljs.core.first.call(null,buf__77686);
}
});
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$unread$arity$2 = (function (reader,ch){
var this__77687 = this;
return cljs.core.swap_BANG_.call(null,this__77687.buffer_atom,(function (p1__77667_SHARP_){
return cljs.core.cons.call(null,ch,p1__77667_SHARP_);
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
var or__3824__auto____77689 = goog.string.isBreakingWhitespace(ch);
if(cljs.core.truth_(or__3824__auto____77689))
{return or__3824__auto____77689;
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
var or__3824__auto____77694 = cljs.reader.numeric_QMARK_.call(null,initch);
if(or__3824__auto____77694)
{return or__3824__auto____77694;
} else
{var and__3822__auto____77696 = (function (){var or__3824__auto____77695 = ("+" === initch);
if(or__3824__auto____77695)
{return or__3824__auto____77695;
} else
{return ("-" === initch);
}
})();
if(cljs.core.truth_(and__3822__auto____77696))
{return cljs.reader.numeric_QMARK_.call(null,(function (){var next_ch__77697 = cljs.reader.read_char.call(null,reader);
cljs.reader.unread.call(null,reader,next_ch__77697);
return next_ch__77697;
})());
} else
{return and__3822__auto____77696;
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
reader_error.cljs$lang$applyTo = (function (arglist__77698){
var rdr = cljs.core.first(arglist__77698);
var msg = cljs.core.rest(arglist__77698);
return reader_error__delegate(rdr, msg);
});
reader_error.cljs$lang$arity$variadic = reader_error__delegate;
return reader_error;
})()
;
cljs.reader.macro_terminating_QMARK_ = (function macro_terminating_QMARK_(ch){
var and__3822__auto____77702 = !((ch === "#"));
if(and__3822__auto____77702)
{var and__3822__auto____77703 = !((ch === "'"));
if(and__3822__auto____77703)
{var and__3822__auto____77704 = !((ch === ":"));
if(and__3822__auto____77704)
{return cljs.reader.macros.call(null,ch);
} else
{return and__3822__auto____77704;
}
} else
{return and__3822__auto____77703;
}
} else
{return and__3822__auto____77702;
}
});
cljs.reader.read_token = (function read_token(rdr,initch){
var sb__77709 = (new goog.string.StringBuffer(initch));
var ch__77710 = cljs.reader.read_char.call(null,rdr);
while(true){
if((function (){var or__3824__auto____77711 = (ch__77710 == null);
if(or__3824__auto____77711)
{return or__3824__auto____77711;
} else
{var or__3824__auto____77712 = cljs.reader.whitespace_QMARK_.call(null,ch__77710);
if(or__3824__auto____77712)
{return or__3824__auto____77712;
} else
{return cljs.reader.macro_terminating_QMARK_.call(null,ch__77710);
}
}
})())
{cljs.reader.unread.call(null,rdr,ch__77710);
return sb__77709.toString();
} else
{{
var G__77713 = (function (){sb__77709.append(ch__77710);
return sb__77709;
})();
var G__77714 = cljs.reader.read_char.call(null,rdr);
sb__77709 = G__77713;
ch__77710 = G__77714;
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
var ch__77718 = cljs.reader.read_char.call(null,reader);
if((function (){var or__3824__auto____77719 = (ch__77718 === "n");
if(or__3824__auto____77719)
{return or__3824__auto____77719;
} else
{var or__3824__auto____77720 = (ch__77718 === "r");
if(or__3824__auto____77720)
{return or__3824__auto____77720;
} else
{return (ch__77718 == null);
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
var matches__77722 = re.exec(s);
if((matches__77722 == null))
{return null;
} else
{if((matches__77722.length === 1))
{return (matches__77722[0]);
} else
{return matches__77722;
}
}
});
cljs.reader.match_int = (function match_int(s){
var groups__77730 = cljs.reader.re_find_STAR_.call(null,cljs.reader.int_pattern,s);
var group3__77731 = (groups__77730[2]);
if(!((function (){var or__3824__auto____77732 = (group3__77731 == null);
if(or__3824__auto____77732)
{return or__3824__auto____77732;
} else
{return (group3__77731.length < 1);
}
})()))
{return 0;
} else
{var negate__77733 = ((("-" === (groups__77730[1])))?-1:1);
var a__77734 = (cljs.core.truth_((groups__77730[3]))?[(groups__77730[3]),10]:(cljs.core.truth_((groups__77730[4]))?[(groups__77730[4]),16]:(cljs.core.truth_((groups__77730[5]))?[(groups__77730[5]),8]:(cljs.core.truth_((groups__77730[7]))?[(groups__77730[7]),parseInt((groups__77730[7]))]:(("\uFDD0'default")?[null,null]:null)))));
var n__77735 = (a__77734[0]);
var radix__77736 = (a__77734[1]);
if((n__77735 == null))
{return null;
} else
{return (negate__77733 * parseInt(n__77735,radix__77736));
}
}
});
cljs.reader.match_ratio = (function match_ratio(s){
var groups__77740 = cljs.reader.re_find_STAR_.call(null,cljs.reader.ratio_pattern,s);
var numinator__77741 = (groups__77740[1]);
var denominator__77742 = (groups__77740[2]);
return (parseInt(numinator__77741) / parseInt(denominator__77742));
});
cljs.reader.match_float = (function match_float(s){
return parseFloat(s);
});
cljs.reader.re_matches_STAR_ = (function re_matches_STAR_(re,s){
var matches__77745 = re.exec(s);
if((function (){var and__3822__auto____77746 = !((matches__77745 == null));
if(and__3822__auto____77746)
{return ((matches__77745[0]) === s);
} else
{return and__3822__auto____77746;
}
})())
{if((matches__77745.length === 1))
{return (matches__77745[0]);
} else
{return matches__77745;
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
var code__77748 = parseInt(code_str,16);
return String.fromCharCode(code__77748);
});
cljs.reader.escape_char = (function escape_char(buffer,reader){
var ch__77751 = cljs.reader.read_char.call(null,reader);
var mapresult__77752 = cljs.reader.escape_char_map.call(null,ch__77751);
if(cljs.core.truth_(mapresult__77752))
{return mapresult__77752;
} else
{if((ch__77751 === "x"))
{return cljs.reader.make_unicode_char.call(null,cljs.reader.validate_unicode_escape.call(null,cljs.reader.unicode_2_pattern,reader,ch__77751,cljs.reader.read_2_chars.call(null,reader)));
} else
{if((ch__77751 === "u"))
{return cljs.reader.make_unicode_char.call(null,cljs.reader.validate_unicode_escape.call(null,cljs.reader.unicode_4_pattern,reader,ch__77751,cljs.reader.read_4_chars.call(null,reader)));
} else
{if(cljs.reader.numeric_QMARK_.call(null,ch__77751))
{return String.fromCharCode(ch__77751);
} else
{if("\uFDD0'else")
{return cljs.reader.reader_error.call(null,reader,"Unexpected unicode escape \\",ch__77751);
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
var ch__77754 = cljs.reader.read_char.call(null,rdr);
while(true){
if(cljs.core.truth_(pred.call(null,ch__77754)))
{{
var G__77755 = cljs.reader.read_char.call(null,rdr);
ch__77754 = G__77755;
continue;
}
} else
{return ch__77754;
}
break;
}
});
cljs.reader.read_delimited_list = (function read_delimited_list(delim,rdr,recursive_QMARK_){
var a__77762 = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
while(true){
var ch__77763 = cljs.reader.read_past.call(null,cljs.reader.whitespace_QMARK_,rdr);
if(cljs.core.truth_(ch__77763))
{} else
{cljs.reader.reader_error.call(null,rdr,"EOF while reading");
}
if((delim === ch__77763))
{return cljs.core.persistent_BANG_.call(null,a__77762);
} else
{var temp__3971__auto____77764 = cljs.reader.macros.call(null,ch__77763);
if(cljs.core.truth_(temp__3971__auto____77764))
{var macrofn__77765 = temp__3971__auto____77764;
var mret__77766 = macrofn__77765.call(null,rdr,ch__77763);
{
var G__77768 = (((mret__77766 === rdr))?a__77762:cljs.core.conj_BANG_.call(null,a__77762,mret__77766));
a__77762 = G__77768;
continue;
}
} else
{cljs.reader.unread.call(null,rdr,ch__77763);
var o__77767 = cljs.reader.read.call(null,rdr,true,null,recursive_QMARK_);
{
var G__77769 = (((o__77767 === rdr))?a__77762:cljs.core.conj_BANG_.call(null,a__77762,o__77767));
a__77762 = G__77769;
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
var ch__77774 = cljs.reader.read_char.call(null,rdr);
var dm__77775 = cljs.reader.dispatch_macros.call(null,ch__77774);
if(cljs.core.truth_(dm__77775))
{return dm__77775.call(null,rdr,_);
} else
{var temp__3971__auto____77776 = cljs.reader.maybe_read_tagged_type.call(null,rdr,ch__77774);
if(cljs.core.truth_(temp__3971__auto____77776))
{var obj__77777 = temp__3971__auto____77776;
return obj__77777;
} else
{return cljs.reader.reader_error.call(null,rdr,"No dispatch macro for ",ch__77774);
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
var l__77779 = cljs.reader.read_delimited_list.call(null,"}",rdr,true);
if(cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,l__77779)))
{cljs.reader.reader_error.call(null,rdr,"Map literal must contain an even number of forms");
} else
{}
return cljs.core.apply.call(null,cljs.core.hash_map,l__77779);
});
cljs.reader.read_number = (function read_number(reader,initch){
var buffer__77786 = (new goog.string.StringBuffer(initch));
var ch__77787 = cljs.reader.read_char.call(null,reader);
while(true){
if(cljs.core.truth_((function (){var or__3824__auto____77788 = (ch__77787 == null);
if(or__3824__auto____77788)
{return or__3824__auto____77788;
} else
{var or__3824__auto____77789 = cljs.reader.whitespace_QMARK_.call(null,ch__77787);
if(or__3824__auto____77789)
{return or__3824__auto____77789;
} else
{return cljs.reader.macros.call(null,ch__77787);
}
}
})()))
{cljs.reader.unread.call(null,reader,ch__77787);
var s__77790 = buffer__77786.toString();
var or__3824__auto____77791 = cljs.reader.match_number.call(null,s__77790);
if(cljs.core.truth_(or__3824__auto____77791))
{return or__3824__auto____77791;
} else
{return cljs.reader.reader_error.call(null,reader,"Invalid number format [",s__77790,"]");
}
} else
{{
var G__77792 = (function (){buffer__77786.append(ch__77787);
return buffer__77786;
})();
var G__77793 = cljs.reader.read_char.call(null,reader);
buffer__77786 = G__77792;
ch__77787 = G__77793;
continue;
}
}
break;
}
});
cljs.reader.read_string_STAR_ = (function read_string_STAR_(reader,_){
var buffer__77796 = (new goog.string.StringBuffer());
var ch__77797 = cljs.reader.read_char.call(null,reader);
while(true){
if((ch__77797 == null))
{return cljs.reader.reader_error.call(null,reader,"EOF while reading");
} else
{if(("\\" === ch__77797))
{{
var G__77798 = (function (){buffer__77796.append(cljs.reader.escape_char.call(null,buffer__77796,reader));
return buffer__77796;
})();
var G__77799 = cljs.reader.read_char.call(null,reader);
buffer__77796 = G__77798;
ch__77797 = G__77799;
continue;
}
} else
{if(("\"" === ch__77797))
{return buffer__77796.toString();
} else
{if("\uFDD0'default")
{{
var G__77800 = (function (){buffer__77796.append(ch__77797);
return buffer__77796;
})();
var G__77801 = cljs.reader.read_char.call(null,reader);
buffer__77796 = G__77800;
ch__77797 = G__77801;
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
var token__77803 = cljs.reader.read_token.call(null,reader,initch);
if(cljs.core.truth_(goog.string.contains(token__77803,"/")))
{return cljs.core.symbol.call(null,cljs.core.subs.call(null,token__77803,0,token__77803.indexOf("/")),cljs.core.subs.call(null,token__77803,(token__77803.indexOf("/") + 1),token__77803.length));
} else
{return cljs.reader.special_symbols.call(null,token__77803,cljs.core.symbol.call(null,token__77803));
}
});
cljs.reader.read_keyword = (function read_keyword(reader,initch){
var token__77813 = cljs.reader.read_token.call(null,reader,cljs.reader.read_char.call(null,reader));
var a__77814 = cljs.reader.re_matches_STAR_.call(null,cljs.reader.symbol_pattern,token__77813);
var token__77815 = (a__77814[0]);
var ns__77816 = (a__77814[1]);
var name__77817 = (a__77814[2]);
if(cljs.core.truth_((function (){var or__3824__auto____77819 = (function (){var and__3822__auto____77818 = !((void 0 === ns__77816));
if(and__3822__auto____77818)
{return (ns__77816.substring((ns__77816.length - 2),ns__77816.length) === ":/");
} else
{return and__3822__auto____77818;
}
})();
if(cljs.core.truth_(or__3824__auto____77819))
{return or__3824__auto____77819;
} else
{var or__3824__auto____77820 = ((name__77817[(name__77817.length - 1)]) === ":");
if(or__3824__auto____77820)
{return or__3824__auto____77820;
} else
{return !((token__77815.indexOf("::",1) === -1));
}
}
})()))
{return cljs.reader.reader_error.call(null,reader,"Invalid token: ",token__77815);
} else
{if((function (){var and__3822__auto____77821 = !((ns__77816 == null));
if(and__3822__auto____77821)
{return (ns__77816.length > 0);
} else
{return and__3822__auto____77821;
}
})())
{return cljs.core.keyword.call(null,ns__77816.substring(0,ns__77816.indexOf("/")),name__77817);
} else
{return cljs.core.keyword.call(null,token__77815);
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
var m__77827 = cljs.reader.desugar_meta.call(null,cljs.reader.read.call(null,rdr,true,null,true));
if(cljs.core.map_QMARK_.call(null,m__77827))
{} else
{cljs.reader.reader_error.call(null,rdr,"Metadata must be Symbol,Keyword,String or Map");
}
var o__77828 = cljs.reader.read.call(null,rdr,true,null,true);
if((function (){var G__77829__77830 = o__77828;
if(G__77829__77830)
{if((function (){var or__3824__auto____77831 = (G__77829__77830.cljs$lang$protocol_mask$partition0$ & 262144);
if(or__3824__auto____77831)
{return or__3824__auto____77831;
} else
{return G__77829__77830.cljs$core$IWithMeta$;
}
})())
{return true;
} else
{if((!G__77829__77830.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IWithMeta,G__77829__77830);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IWithMeta,G__77829__77830);
}
})())
{return cljs.core.with_meta.call(null,o__77828,cljs.core.merge.call(null,cljs.core.meta.call(null,o__77828),m__77827));
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
var ch__77835 = cljs.reader.read_char.call(null,reader);
if((ch__77835 == null))
{if(cljs.core.truth_(eof_is_error))
{return cljs.reader.reader_error.call(null,reader,"EOF while reading");
} else
{return sentinel;
}
} else
{if(cljs.reader.whitespace_QMARK_.call(null,ch__77835))
{{
var G__77838 = reader;
var G__77839 = eof_is_error;
var G__77840 = sentinel;
var G__77841 = is_recursive;
reader = G__77838;
eof_is_error = G__77839;
sentinel = G__77840;
is_recursive = G__77841;
continue;
}
} else
{if(cljs.reader.comment_prefix_QMARK_.call(null,ch__77835))
{{
var G__77842 = cljs.reader.read_comment.call(null,reader,ch__77835);
var G__77843 = eof_is_error;
var G__77844 = sentinel;
var G__77845 = is_recursive;
reader = G__77842;
eof_is_error = G__77843;
sentinel = G__77844;
is_recursive = G__77845;
continue;
}
} else
{if("\uFDD0'else")
{var f__77836 = cljs.reader.macros.call(null,ch__77835);
var res__77837 = (cljs.core.truth_(f__77836)?f__77836.call(null,reader,ch__77835):((cljs.reader.number_literal_QMARK_.call(null,reader,ch__77835))?cljs.reader.read_number.call(null,reader,ch__77835):(("\uFDD0'else")?cljs.reader.read_symbol.call(null,reader,ch__77835):null)));
if((res__77837 === reader))
{{
var G__77846 = reader;
var G__77847 = eof_is_error;
var G__77848 = sentinel;
var G__77849 = is_recursive;
reader = G__77846;
eof_is_error = G__77847;
sentinel = G__77848;
is_recursive = G__77849;
continue;
}
} else
{return res__77837;
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
var r__77851 = cljs.reader.push_back_reader.call(null,s);
return cljs.reader.read.call(null,r__77851,true,null,false);
});
cljs.reader.zero_fill_right = (function zero_fill_right(s,width){
if(cljs.core._EQ_.call(null,width,cljs.core.count.call(null,s)))
{return s;
} else
{if((width < cljs.core.count.call(null,s)))
{return s.substring(0,width);
} else
{if("\uFDD0'else")
{var b__77853 = (new goog.string.StringBuffer(s));
while(true){
if((b__77853.getLength() < width))
{{
var G__77854 = b__77853.append("0");
b__77853 = G__77854;
continue;
}
} else
{return b__77853.toString();
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
var and__3822__auto____77857 = cljs.reader.divisible_QMARK_.call(null,year,4);
if(cljs.core.truth_(and__3822__auto____77857))
{var or__3824__auto____77858 = cljs.reader.indivisible_QMARK_.call(null,year,100);
if(cljs.core.truth_(or__3824__auto____77858))
{return or__3824__auto____77858;
} else
{return cljs.reader.divisible_QMARK_.call(null,year,400);
}
} else
{return and__3822__auto____77857;
}
});
cljs.reader.days_in_month = (function (){var dim_norm__77863 = cljs.core.PersistentVector.fromArray([null,31,28,31,30,31,30,31,31,30,31,30,31], true);
var dim_leap__77864 = cljs.core.PersistentVector.fromArray([null,31,29,31,30,31,30,31,31,30,31,30,31], true);
return (function (month,leap_year_QMARK_){
return cljs.core._lookup.call(null,(cljs.core.truth_(leap_year_QMARK_)?dim_leap__77864:dim_norm__77863),month,null);
});
})();
cljs.reader.parse_and_validate_timestamp = (function (){var timestamp__77865 = /(\d\d\d\d)(?:-(\d\d)(?:-(\d\d)(?:[T](\d\d)(?::(\d\d)(?::(\d\d)(?:[.](\d+))?)?)?)?)?)?(?:[Z]|([-+])(\d\d):(\d\d))?/;
var check__77867 = (function (low,n,high,msg){
if((function (){var and__3822__auto____77866 = (low <= n);
if(and__3822__auto____77866)
{return (n <= high);
} else
{return and__3822__auto____77866;
}
})())
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str(msg),cljs.core.str(" Failed:  "),cljs.core.str(low),cljs.core.str("<="),cljs.core.str(n),cljs.core.str("<="),cljs.core.str(high)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'<=","\uFDD1'low","\uFDD1'n","\uFDD1'high"),cljs.core.hash_map("\uFDD0'line",474))))].join('')));
}
return n;
});
return (function (ts){
var temp__3974__auto____77868 = cljs.core.map.call(null,cljs.core.vec,cljs.core.split_at.call(null,8,cljs.core.re_matches.call(null,timestamp__77865,ts)));
if(cljs.core.truth_(temp__3974__auto____77868))
{var vec__77869__77872 = temp__3974__auto____77868;
var vec__77870__77873 = cljs.core.nth.call(null,vec__77869__77872,0,null);
var ___77874 = cljs.core.nth.call(null,vec__77870__77873,0,null);
var years__77875 = cljs.core.nth.call(null,vec__77870__77873,1,null);
var months__77876 = cljs.core.nth.call(null,vec__77870__77873,2,null);
var days__77877 = cljs.core.nth.call(null,vec__77870__77873,3,null);
var hours__77878 = cljs.core.nth.call(null,vec__77870__77873,4,null);
var minutes__77879 = cljs.core.nth.call(null,vec__77870__77873,5,null);
var seconds__77880 = cljs.core.nth.call(null,vec__77870__77873,6,null);
var milliseconds__77881 = cljs.core.nth.call(null,vec__77870__77873,7,null);
var vec__77871__77882 = cljs.core.nth.call(null,vec__77869__77872,1,null);
var ___77883 = cljs.core.nth.call(null,vec__77871__77882,0,null);
var ___77884 = cljs.core.nth.call(null,vec__77871__77882,1,null);
var ___77885 = cljs.core.nth.call(null,vec__77871__77882,2,null);
var V__77886 = vec__77869__77872;
var vec__77887__77890 = cljs.core.map.call(null,(function (v){
return cljs.core.map.call(null,(function (p1__77862_SHARP_){
return parseInt(p1__77862_SHARP_,10);
}),v);
}),cljs.core.map.call(null,(function (p1__77860_SHARP_,p2__77859_SHARP_){
return cljs.core.update_in.call(null,p2__77859_SHARP_,cljs.core.PersistentVector.fromArray([0], true),p1__77860_SHARP_);
}),cljs.core.PersistentVector.fromArray([cljs.core.constantly.call(null,null),(function (p1__77861_SHARP_){
if(cljs.core._EQ_.call(null,p1__77861_SHARP_,"-"))
{return "-1";
} else
{return "1";
}
})], true),V__77886));
var vec__77888__77891 = cljs.core.nth.call(null,vec__77887__77890,0,null);
var ___77892 = cljs.core.nth.call(null,vec__77888__77891,0,null);
var y__77893 = cljs.core.nth.call(null,vec__77888__77891,1,null);
var mo__77894 = cljs.core.nth.call(null,vec__77888__77891,2,null);
var d__77895 = cljs.core.nth.call(null,vec__77888__77891,3,null);
var h__77896 = cljs.core.nth.call(null,vec__77888__77891,4,null);
var m__77897 = cljs.core.nth.call(null,vec__77888__77891,5,null);
var s__77898 = cljs.core.nth.call(null,vec__77888__77891,6,null);
var ms__77899 = cljs.core.nth.call(null,vec__77888__77891,7,null);
var vec__77889__77900 = cljs.core.nth.call(null,vec__77887__77890,1,null);
var offset_sign__77901 = cljs.core.nth.call(null,vec__77889__77900,0,null);
var offset_hours__77902 = cljs.core.nth.call(null,vec__77889__77900,1,null);
var offset_minutes__77903 = cljs.core.nth.call(null,vec__77889__77900,2,null);
var offset__77904 = (offset_sign__77901 * ((offset_hours__77902 * 60) + offset_minutes__77903));
return cljs.core.PersistentVector.fromArray([((cljs.core.not.call(null,years__77875))?1970:y__77893),((cljs.core.not.call(null,months__77876))?1:check__77867.call(null,1,mo__77894,12,"timestamp month field must be in range 1..12")),((cljs.core.not.call(null,days__77877))?1:check__77867.call(null,1,d__77895,cljs.reader.days_in_month.call(null,mo__77894,cljs.reader.leap_year_QMARK_.call(null,y__77893)),"timestamp day field must be in range 1..last day in month")),((cljs.core.not.call(null,hours__77878))?0:check__77867.call(null,0,h__77896,23,"timestamp hour field must be in range 0..23")),((cljs.core.not.call(null,minutes__77879))?0:check__77867.call(null,0,m__77897,59,"timestamp minute field must be in range 0..59")),((cljs.core.not.call(null,seconds__77880))?0:check__77867.call(null,0,s__77898,((cljs.core._EQ_.call(null,m__77897,59))?60:59),"timestamp second field must be in range 0..60")),((cljs.core.not.call(null,milliseconds__77881))?0:check__77867.call(null,0,ms__77899,999,"timestamp millisecond field must be in range 0..999")),offset__77904], true);
} else
{return null;
}
});
})();
cljs.reader.parse_timestamp = (function parse_timestamp(ts){
var temp__3971__auto____77916 = cljs.reader.parse_and_validate_timestamp.call(null,ts);
if(cljs.core.truth_(temp__3971__auto____77916))
{var vec__77917__77918 = temp__3971__auto____77916;
var years__77919 = cljs.core.nth.call(null,vec__77917__77918,0,null);
var months__77920 = cljs.core.nth.call(null,vec__77917__77918,1,null);
var days__77921 = cljs.core.nth.call(null,vec__77917__77918,2,null);
var hours__77922 = cljs.core.nth.call(null,vec__77917__77918,3,null);
var minutes__77923 = cljs.core.nth.call(null,vec__77917__77918,4,null);
var seconds__77924 = cljs.core.nth.call(null,vec__77917__77918,5,null);
var ms__77925 = cljs.core.nth.call(null,vec__77917__77918,6,null);
var offset__77926 = cljs.core.nth.call(null,vec__77917__77918,7,null);
return (new Date((Date.UTC(years__77919,(months__77920 - 1),days__77921,hours__77922,minutes__77923,seconds__77924,ms__77925) - ((offset__77926 * 60) * 1000))));
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
var tag__77930 = cljs.reader.read_symbol.call(null,rdr,initch);
var temp__3971__auto____77931 = cljs.core._lookup.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_),cljs.core.name.call(null,tag__77930),null);
if(cljs.core.truth_(temp__3971__auto____77931))
{var pfn__77932 = temp__3971__auto____77931;
return pfn__77932.call(null,cljs.reader.read.call(null,rdr,true,null,false));
} else
{return cljs.reader.reader_error.call(null,rdr,"Could not find tag parser for ",cljs.core.name.call(null,tag__77930)," in ",cljs.core.pr_str.call(null,cljs.core.keys.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_))));
}
});
cljs.reader.register_tag_parser_BANG_ = (function register_tag_parser_BANG_(tag,f){
var tag__77935 = cljs.core.name.call(null,tag);
var old_parser__77936 = cljs.core._lookup.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_),tag__77935,null);
cljs.core.swap_BANG_.call(null,cljs.reader._STAR_tag_table_STAR_,cljs.core.assoc,tag__77935,f);
return old_parser__77936;
});
cljs.reader.deregister_tag_parser_BANG_ = (function deregister_tag_parser_BANG_(tag){
var tag__77939 = cljs.core.name.call(null,tag);
var old_parser__77940 = cljs.core._lookup.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_),tag__77939,null);
cljs.core.swap_BANG_.call(null,cljs.reader._STAR_tag_table_STAR_,cljs.core.dissoc,tag__77939);
return old_parser__77940;
});

goog.provide('cljs.reader');
goog.require('cljs.core');
goog.require('goog.string');
cljs.reader.PushbackReader = {};
cljs.reader.read_char = (function read_char(reader){
if((function (){var and__3822__auto____13696 = reader;
if(and__3822__auto____13696)
{return reader.cljs$reader$PushbackReader$read_char$arity$1;
} else
{return and__3822__auto____13696;
}
})())
{return reader.cljs$reader$PushbackReader$read_char$arity$1(reader);
} else
{var x__5239__auto____13697 = (((reader == null))?null:reader);
return (function (){var or__3824__auto____13698 = (cljs.reader.read_char[goog.typeOf(x__5239__auto____13697)]);
if(or__3824__auto____13698)
{return or__3824__auto____13698;
} else
{var or__3824__auto____13699 = (cljs.reader.read_char["_"]);
if(or__3824__auto____13699)
{return or__3824__auto____13699;
} else
{throw cljs.core.missing_protocol.call(null,"PushbackReader.read-char",reader);
}
}
})().call(null,reader);
}
});
cljs.reader.unread = (function unread(reader,ch){
if((function (){var and__3822__auto____13704 = reader;
if(and__3822__auto____13704)
{return reader.cljs$reader$PushbackReader$unread$arity$2;
} else
{return and__3822__auto____13704;
}
})())
{return reader.cljs$reader$PushbackReader$unread$arity$2(reader,ch);
} else
{var x__5239__auto____13705 = (((reader == null))?null:reader);
return (function (){var or__3824__auto____13706 = (cljs.reader.unread[goog.typeOf(x__5239__auto____13705)]);
if(or__3824__auto____13706)
{return or__3824__auto____13706;
} else
{var or__3824__auto____13707 = (cljs.reader.unread["_"]);
if(or__3824__auto____13707)
{return or__3824__auto____13707;
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
cljs.reader.StringPushbackReader.cljs$lang$ctorPrSeq = (function (this__5174__auto__){
return cljs.core.list.call(null,"cljs.reader/StringPushbackReader");
});
cljs.reader.StringPushbackReader.cljs$lang$ctorPrWriter = (function (this__5174__auto__,writer__5175__auto__){
return cljs.core._write.call(null,writer__5175__auto__,"cljs.reader/StringPushbackReader");
});
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$ = true;
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$read_char$arity$1 = (function (reader){
var this__13708 = this;
if(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,this__13708.buffer_atom)))
{var idx__13709 = cljs.core.deref.call(null,this__13708.index_atom);
cljs.core.swap_BANG_.call(null,this__13708.index_atom,cljs.core.inc);
return (this__13708.s[idx__13709]);
} else
{var buf__13710 = cljs.core.deref.call(null,this__13708.buffer_atom);
cljs.core.swap_BANG_.call(null,this__13708.buffer_atom,cljs.core.rest);
return cljs.core.first.call(null,buf__13710);
}
});
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$unread$arity$2 = (function (reader,ch){
var this__13711 = this;
return cljs.core.swap_BANG_.call(null,this__13711.buffer_atom,(function (p1__13691_SHARP_){
return cljs.core.cons.call(null,ch,p1__13691_SHARP_);
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
var or__3824__auto____13713 = goog.string.isBreakingWhitespace(ch);
if(cljs.core.truth_(or__3824__auto____13713))
{return or__3824__auto____13713;
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
var or__3824__auto____13718 = cljs.reader.numeric_QMARK_.call(null,initch);
if(or__3824__auto____13718)
{return or__3824__auto____13718;
} else
{var and__3822__auto____13720 = (function (){var or__3824__auto____13719 = ("+" === initch);
if(or__3824__auto____13719)
{return or__3824__auto____13719;
} else
{return ("-" === initch);
}
})();
if(cljs.core.truth_(and__3822__auto____13720))
{return cljs.reader.numeric_QMARK_.call(null,(function (){var next_ch__13721 = cljs.reader.read_char.call(null,reader);
cljs.reader.unread.call(null,reader,next_ch__13721);
return next_ch__13721;
})());
} else
{return and__3822__auto____13720;
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
reader_error.cljs$lang$applyTo = (function (arglist__13722){
var rdr = cljs.core.first(arglist__13722);
var msg = cljs.core.rest(arglist__13722);
return reader_error__delegate(rdr, msg);
});
reader_error.cljs$lang$arity$variadic = reader_error__delegate;
return reader_error;
})()
;
cljs.reader.macro_terminating_QMARK_ = (function macro_terminating_QMARK_(ch){
var and__3822__auto____13726 = !((ch === "#"));
if(and__3822__auto____13726)
{var and__3822__auto____13727 = !((ch === "'"));
if(and__3822__auto____13727)
{var and__3822__auto____13728 = !((ch === ":"));
if(and__3822__auto____13728)
{return cljs.reader.macros.call(null,ch);
} else
{return and__3822__auto____13728;
}
} else
{return and__3822__auto____13727;
}
} else
{return and__3822__auto____13726;
}
});
cljs.reader.read_token = (function read_token(rdr,initch){
var sb__13733 = (new goog.string.StringBuffer(initch));
var ch__13734 = cljs.reader.read_char.call(null,rdr);
while(true){
if((function (){var or__3824__auto____13735 = (ch__13734 == null);
if(or__3824__auto____13735)
{return or__3824__auto____13735;
} else
{var or__3824__auto____13736 = cljs.reader.whitespace_QMARK_.call(null,ch__13734);
if(or__3824__auto____13736)
{return or__3824__auto____13736;
} else
{return cljs.reader.macro_terminating_QMARK_.call(null,ch__13734);
}
}
})())
{cljs.reader.unread.call(null,rdr,ch__13734);
return sb__13733.toString();
} else
{{
var G__13737 = (function (){sb__13733.append(ch__13734);
return sb__13733;
})();
var G__13738 = cljs.reader.read_char.call(null,rdr);
sb__13733 = G__13737;
ch__13734 = G__13738;
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
var ch__13742 = cljs.reader.read_char.call(null,reader);
if((function (){var or__3824__auto____13743 = (ch__13742 === "n");
if(or__3824__auto____13743)
{return or__3824__auto____13743;
} else
{var or__3824__auto____13744 = (ch__13742 === "r");
if(or__3824__auto____13744)
{return or__3824__auto____13744;
} else
{return (ch__13742 == null);
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
var matches__13746 = re.exec(s);
if((matches__13746 == null))
{return null;
} else
{if((matches__13746.length === 1))
{return (matches__13746[0]);
} else
{return matches__13746;
}
}
});
cljs.reader.match_int = (function match_int(s){
var groups__13754 = cljs.reader.re_find_STAR_.call(null,cljs.reader.int_pattern,s);
var group3__13755 = (groups__13754[2]);
if(!((function (){var or__3824__auto____13756 = (group3__13755 == null);
if(or__3824__auto____13756)
{return or__3824__auto____13756;
} else
{return (group3__13755.length < 1);
}
})()))
{return 0;
} else
{var negate__13757 = ((("-" === (groups__13754[1])))?-1:1);
var a__13758 = (cljs.core.truth_((groups__13754[3]))?[(groups__13754[3]),10]:(cljs.core.truth_((groups__13754[4]))?[(groups__13754[4]),16]:(cljs.core.truth_((groups__13754[5]))?[(groups__13754[5]),8]:(cljs.core.truth_((groups__13754[7]))?[(groups__13754[7]),parseInt((groups__13754[7]))]:(("\uFDD0'default")?[null,null]:null)))));
var n__13759 = (a__13758[0]);
var radix__13760 = (a__13758[1]);
if((n__13759 == null))
{return null;
} else
{return (negate__13757 * parseInt(n__13759,radix__13760));
}
}
});
cljs.reader.match_ratio = (function match_ratio(s){
var groups__13764 = cljs.reader.re_find_STAR_.call(null,cljs.reader.ratio_pattern,s);
var numinator__13765 = (groups__13764[1]);
var denominator__13766 = (groups__13764[2]);
return (parseInt(numinator__13765) / parseInt(denominator__13766));
});
cljs.reader.match_float = (function match_float(s){
return parseFloat(s);
});
cljs.reader.re_matches_STAR_ = (function re_matches_STAR_(re,s){
var matches__13769 = re.exec(s);
if((function (){var and__3822__auto____13770 = !((matches__13769 == null));
if(and__3822__auto____13770)
{return ((matches__13769[0]) === s);
} else
{return and__3822__auto____13770;
}
})())
{if((matches__13769.length === 1))
{return (matches__13769[0]);
} else
{return matches__13769;
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
var code__13772 = parseInt(code_str,16);
return String.fromCharCode(code__13772);
});
cljs.reader.escape_char = (function escape_char(buffer,reader){
var ch__13775 = cljs.reader.read_char.call(null,reader);
var mapresult__13776 = cljs.reader.escape_char_map.call(null,ch__13775);
if(cljs.core.truth_(mapresult__13776))
{return mapresult__13776;
} else
{if((ch__13775 === "x"))
{return cljs.reader.make_unicode_char.call(null,cljs.reader.validate_unicode_escape.call(null,cljs.reader.unicode_2_pattern,reader,ch__13775,cljs.reader.read_2_chars.call(null,reader)));
} else
{if((ch__13775 === "u"))
{return cljs.reader.make_unicode_char.call(null,cljs.reader.validate_unicode_escape.call(null,cljs.reader.unicode_4_pattern,reader,ch__13775,cljs.reader.read_4_chars.call(null,reader)));
} else
{if(cljs.reader.numeric_QMARK_.call(null,ch__13775))
{return String.fromCharCode(ch__13775);
} else
{if("\uFDD0'else")
{return cljs.reader.reader_error.call(null,reader,"Unexpected unicode escape \\",ch__13775);
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
var ch__13778 = cljs.reader.read_char.call(null,rdr);
while(true){
if(cljs.core.truth_(pred.call(null,ch__13778)))
{{
var G__13779 = cljs.reader.read_char.call(null,rdr);
ch__13778 = G__13779;
continue;
}
} else
{return ch__13778;
}
break;
}
});
cljs.reader.read_delimited_list = (function read_delimited_list(delim,rdr,recursive_QMARK_){
var a__13786 = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
while(true){
var ch__13787 = cljs.reader.read_past.call(null,cljs.reader.whitespace_QMARK_,rdr);
if(cljs.core.truth_(ch__13787))
{} else
{cljs.reader.reader_error.call(null,rdr,"EOF while reading");
}
if((delim === ch__13787))
{return cljs.core.persistent_BANG_.call(null,a__13786);
} else
{var temp__3971__auto____13788 = cljs.reader.macros.call(null,ch__13787);
if(cljs.core.truth_(temp__3971__auto____13788))
{var macrofn__13789 = temp__3971__auto____13788;
var mret__13790 = macrofn__13789.call(null,rdr,ch__13787);
{
var G__13792 = (((mret__13790 === rdr))?a__13786:cljs.core.conj_BANG_.call(null,a__13786,mret__13790));
a__13786 = G__13792;
continue;
}
} else
{cljs.reader.unread.call(null,rdr,ch__13787);
var o__13791 = cljs.reader.read.call(null,rdr,true,null,recursive_QMARK_);
{
var G__13793 = (((o__13791 === rdr))?a__13786:cljs.core.conj_BANG_.call(null,a__13786,o__13791));
a__13786 = G__13793;
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
var ch__13798 = cljs.reader.read_char.call(null,rdr);
var dm__13799 = cljs.reader.dispatch_macros.call(null,ch__13798);
if(cljs.core.truth_(dm__13799))
{return dm__13799.call(null,rdr,_);
} else
{var temp__3971__auto____13800 = cljs.reader.maybe_read_tagged_type.call(null,rdr,ch__13798);
if(cljs.core.truth_(temp__3971__auto____13800))
{var obj__13801 = temp__3971__auto____13800;
return obj__13801;
} else
{return cljs.reader.reader_error.call(null,rdr,"No dispatch macro for ",ch__13798);
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
var l__13803 = cljs.reader.read_delimited_list.call(null,"}",rdr,true);
if(cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,l__13803)))
{cljs.reader.reader_error.call(null,rdr,"Map literal must contain an even number of forms");
} else
{}
return cljs.core.apply.call(null,cljs.core.hash_map,l__13803);
});
cljs.reader.read_number = (function read_number(reader,initch){
var buffer__13810 = (new goog.string.StringBuffer(initch));
var ch__13811 = cljs.reader.read_char.call(null,reader);
while(true){
if(cljs.core.truth_((function (){var or__3824__auto____13812 = (ch__13811 == null);
if(or__3824__auto____13812)
{return or__3824__auto____13812;
} else
{var or__3824__auto____13813 = cljs.reader.whitespace_QMARK_.call(null,ch__13811);
if(or__3824__auto____13813)
{return or__3824__auto____13813;
} else
{return cljs.reader.macros.call(null,ch__13811);
}
}
})()))
{cljs.reader.unread.call(null,reader,ch__13811);
var s__13814 = buffer__13810.toString();
var or__3824__auto____13815 = cljs.reader.match_number.call(null,s__13814);
if(cljs.core.truth_(or__3824__auto____13815))
{return or__3824__auto____13815;
} else
{return cljs.reader.reader_error.call(null,reader,"Invalid number format [",s__13814,"]");
}
} else
{{
var G__13816 = (function (){buffer__13810.append(ch__13811);
return buffer__13810;
})();
var G__13817 = cljs.reader.read_char.call(null,reader);
buffer__13810 = G__13816;
ch__13811 = G__13817;
continue;
}
}
break;
}
});
cljs.reader.read_string_STAR_ = (function read_string_STAR_(reader,_){
var buffer__13820 = (new goog.string.StringBuffer());
var ch__13821 = cljs.reader.read_char.call(null,reader);
while(true){
if((ch__13821 == null))
{return cljs.reader.reader_error.call(null,reader,"EOF while reading");
} else
{if(("\\" === ch__13821))
{{
var G__13822 = (function (){buffer__13820.append(cljs.reader.escape_char.call(null,buffer__13820,reader));
return buffer__13820;
})();
var G__13823 = cljs.reader.read_char.call(null,reader);
buffer__13820 = G__13822;
ch__13821 = G__13823;
continue;
}
} else
{if(("\"" === ch__13821))
{return buffer__13820.toString();
} else
{if("\uFDD0'default")
{{
var G__13824 = (function (){buffer__13820.append(ch__13821);
return buffer__13820;
})();
var G__13825 = cljs.reader.read_char.call(null,reader);
buffer__13820 = G__13824;
ch__13821 = G__13825;
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
var token__13827 = cljs.reader.read_token.call(null,reader,initch);
if(cljs.core.truth_(goog.string.contains(token__13827,"/")))
{return cljs.core.symbol.call(null,cljs.core.subs.call(null,token__13827,0,token__13827.indexOf("/")),cljs.core.subs.call(null,token__13827,(token__13827.indexOf("/") + 1),token__13827.length));
} else
{return cljs.reader.special_symbols.call(null,token__13827,cljs.core.symbol.call(null,token__13827));
}
});
cljs.reader.read_keyword = (function read_keyword(reader,initch){
var token__13837 = cljs.reader.read_token.call(null,reader,cljs.reader.read_char.call(null,reader));
var a__13838 = cljs.reader.re_matches_STAR_.call(null,cljs.reader.symbol_pattern,token__13837);
var token__13839 = (a__13838[0]);
var ns__13840 = (a__13838[1]);
var name__13841 = (a__13838[2]);
if(cljs.core.truth_((function (){var or__3824__auto____13843 = (function (){var and__3822__auto____13842 = !((void 0 === ns__13840));
if(and__3822__auto____13842)
{return (ns__13840.substring((ns__13840.length - 2),ns__13840.length) === ":/");
} else
{return and__3822__auto____13842;
}
})();
if(cljs.core.truth_(or__3824__auto____13843))
{return or__3824__auto____13843;
} else
{var or__3824__auto____13844 = ((name__13841[(name__13841.length - 1)]) === ":");
if(or__3824__auto____13844)
{return or__3824__auto____13844;
} else
{return !((token__13839.indexOf("::",1) === -1));
}
}
})()))
{return cljs.reader.reader_error.call(null,reader,"Invalid token: ",token__13839);
} else
{if((function (){var and__3822__auto____13845 = !((ns__13840 == null));
if(and__3822__auto____13845)
{return (ns__13840.length > 0);
} else
{return and__3822__auto____13845;
}
})())
{return cljs.core.keyword.call(null,ns__13840.substring(0,ns__13840.indexOf("/")),name__13841);
} else
{return cljs.core.keyword.call(null,token__13839);
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
var m__13851 = cljs.reader.desugar_meta.call(null,cljs.reader.read.call(null,rdr,true,null,true));
if(cljs.core.map_QMARK_.call(null,m__13851))
{} else
{cljs.reader.reader_error.call(null,rdr,"Metadata must be Symbol,Keyword,String or Map");
}
var o__13852 = cljs.reader.read.call(null,rdr,true,null,true);
if((function (){var G__13853__13854 = o__13852;
if(G__13853__13854)
{if((function (){var or__3824__auto____13855 = (G__13853__13854.cljs$lang$protocol_mask$partition0$ & 262144);
if(or__3824__auto____13855)
{return or__3824__auto____13855;
} else
{return G__13853__13854.cljs$core$IWithMeta$;
}
})())
{return true;
} else
{if((!G__13853__13854.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IWithMeta,G__13853__13854);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IWithMeta,G__13853__13854);
}
})())
{return cljs.core.with_meta.call(null,o__13852,cljs.core.merge.call(null,cljs.core.meta.call(null,o__13852),m__13851));
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
var ch__13859 = cljs.reader.read_char.call(null,reader);
if((ch__13859 == null))
{if(cljs.core.truth_(eof_is_error))
{return cljs.reader.reader_error.call(null,reader,"EOF while reading");
} else
{return sentinel;
}
} else
{if(cljs.reader.whitespace_QMARK_.call(null,ch__13859))
{{
var G__13862 = reader;
var G__13863 = eof_is_error;
var G__13864 = sentinel;
var G__13865 = is_recursive;
reader = G__13862;
eof_is_error = G__13863;
sentinel = G__13864;
is_recursive = G__13865;
continue;
}
} else
{if(cljs.reader.comment_prefix_QMARK_.call(null,ch__13859))
{{
var G__13866 = cljs.reader.read_comment.call(null,reader,ch__13859);
var G__13867 = eof_is_error;
var G__13868 = sentinel;
var G__13869 = is_recursive;
reader = G__13866;
eof_is_error = G__13867;
sentinel = G__13868;
is_recursive = G__13869;
continue;
}
} else
{if("\uFDD0'else")
{var f__13860 = cljs.reader.macros.call(null,ch__13859);
var res__13861 = (cljs.core.truth_(f__13860)?f__13860.call(null,reader,ch__13859):((cljs.reader.number_literal_QMARK_.call(null,reader,ch__13859))?cljs.reader.read_number.call(null,reader,ch__13859):(("\uFDD0'else")?cljs.reader.read_symbol.call(null,reader,ch__13859):null)));
if((res__13861 === reader))
{{
var G__13870 = reader;
var G__13871 = eof_is_error;
var G__13872 = sentinel;
var G__13873 = is_recursive;
reader = G__13870;
eof_is_error = G__13871;
sentinel = G__13872;
is_recursive = G__13873;
continue;
}
} else
{return res__13861;
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
var r__13875 = cljs.reader.push_back_reader.call(null,s);
return cljs.reader.read.call(null,r__13875,true,null,false);
});
cljs.reader.zero_fill_right = (function zero_fill_right(s,width){
if(cljs.core._EQ_.call(null,width,cljs.core.count.call(null,s)))
{return s;
} else
{if((width < cljs.core.count.call(null,s)))
{return s.substring(0,width);
} else
{if("\uFDD0'else")
{var b__13877 = (new goog.string.StringBuffer(s));
while(true){
if((b__13877.getLength() < width))
{{
var G__13878 = b__13877.append("0");
b__13877 = G__13878;
continue;
}
} else
{return b__13877.toString();
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
var and__3822__auto____13881 = cljs.reader.divisible_QMARK_.call(null,year,4);
if(cljs.core.truth_(and__3822__auto____13881))
{var or__3824__auto____13882 = cljs.reader.indivisible_QMARK_.call(null,year,100);
if(cljs.core.truth_(or__3824__auto____13882))
{return or__3824__auto____13882;
} else
{return cljs.reader.divisible_QMARK_.call(null,year,400);
}
} else
{return and__3822__auto____13881;
}
});
cljs.reader.days_in_month = (function (){var dim_norm__13887 = cljs.core.PersistentVector.fromArray([null,31,28,31,30,31,30,31,31,30,31,30,31], true);
var dim_leap__13888 = cljs.core.PersistentVector.fromArray([null,31,29,31,30,31,30,31,31,30,31,30,31], true);
return (function (month,leap_year_QMARK_){
return cljs.core._lookup.call(null,(cljs.core.truth_(leap_year_QMARK_)?dim_leap__13888:dim_norm__13887),month,null);
});
})();
cljs.reader.parse_and_validate_timestamp = (function (){var timestamp__13889 = /(\d\d\d\d)(?:-(\d\d)(?:-(\d\d)(?:[T](\d\d)(?::(\d\d)(?::(\d\d)(?:[.](\d+))?)?)?)?)?)?(?:[Z]|([-+])(\d\d):(\d\d))?/;
var check__13891 = (function (low,n,high,msg){
if((function (){var and__3822__auto____13890 = (low <= n);
if(and__3822__auto____13890)
{return (n <= high);
} else
{return and__3822__auto____13890;
}
})())
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str(msg),cljs.core.str(" Failed:  "),cljs.core.str(low),cljs.core.str("<="),cljs.core.str(n),cljs.core.str("<="),cljs.core.str(high)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'<=","\uFDD1'low","\uFDD1'n","\uFDD1'high"),cljs.core.hash_map("\uFDD0'line",474))))].join('')));
}
return n;
});
return (function (ts){
var temp__3974__auto____13892 = cljs.core.map.call(null,cljs.core.vec,cljs.core.split_at.call(null,8,cljs.core.re_matches.call(null,timestamp__13889,ts)));
if(cljs.core.truth_(temp__3974__auto____13892))
{var vec__13893__13896 = temp__3974__auto____13892;
var vec__13894__13897 = cljs.core.nth.call(null,vec__13893__13896,0,null);
var ___13898 = cljs.core.nth.call(null,vec__13894__13897,0,null);
var years__13899 = cljs.core.nth.call(null,vec__13894__13897,1,null);
var months__13900 = cljs.core.nth.call(null,vec__13894__13897,2,null);
var days__13901 = cljs.core.nth.call(null,vec__13894__13897,3,null);
var hours__13902 = cljs.core.nth.call(null,vec__13894__13897,4,null);
var minutes__13903 = cljs.core.nth.call(null,vec__13894__13897,5,null);
var seconds__13904 = cljs.core.nth.call(null,vec__13894__13897,6,null);
var milliseconds__13905 = cljs.core.nth.call(null,vec__13894__13897,7,null);
var vec__13895__13906 = cljs.core.nth.call(null,vec__13893__13896,1,null);
var ___13907 = cljs.core.nth.call(null,vec__13895__13906,0,null);
var ___13908 = cljs.core.nth.call(null,vec__13895__13906,1,null);
var ___13909 = cljs.core.nth.call(null,vec__13895__13906,2,null);
var V__13910 = vec__13893__13896;
var vec__13911__13914 = cljs.core.map.call(null,(function (v){
return cljs.core.map.call(null,(function (p1__13886_SHARP_){
return parseInt(p1__13886_SHARP_,10);
}),v);
}),cljs.core.map.call(null,(function (p1__13884_SHARP_,p2__13883_SHARP_){
return cljs.core.update_in.call(null,p2__13883_SHARP_,cljs.core.PersistentVector.fromArray([0], true),p1__13884_SHARP_);
}),cljs.core.PersistentVector.fromArray([cljs.core.constantly.call(null,null),(function (p1__13885_SHARP_){
if(cljs.core._EQ_.call(null,p1__13885_SHARP_,"-"))
{return "-1";
} else
{return "1";
}
})], true),V__13910));
var vec__13912__13915 = cljs.core.nth.call(null,vec__13911__13914,0,null);
var ___13916 = cljs.core.nth.call(null,vec__13912__13915,0,null);
var y__13917 = cljs.core.nth.call(null,vec__13912__13915,1,null);
var mo__13918 = cljs.core.nth.call(null,vec__13912__13915,2,null);
var d__13919 = cljs.core.nth.call(null,vec__13912__13915,3,null);
var h__13920 = cljs.core.nth.call(null,vec__13912__13915,4,null);
var m__13921 = cljs.core.nth.call(null,vec__13912__13915,5,null);
var s__13922 = cljs.core.nth.call(null,vec__13912__13915,6,null);
var ms__13923 = cljs.core.nth.call(null,vec__13912__13915,7,null);
var vec__13913__13924 = cljs.core.nth.call(null,vec__13911__13914,1,null);
var offset_sign__13925 = cljs.core.nth.call(null,vec__13913__13924,0,null);
var offset_hours__13926 = cljs.core.nth.call(null,vec__13913__13924,1,null);
var offset_minutes__13927 = cljs.core.nth.call(null,vec__13913__13924,2,null);
var offset__13928 = (offset_sign__13925 * ((offset_hours__13926 * 60) + offset_minutes__13927));
return cljs.core.PersistentVector.fromArray([((cljs.core.not.call(null,years__13899))?1970:y__13917),((cljs.core.not.call(null,months__13900))?1:check__13891.call(null,1,mo__13918,12,"timestamp month field must be in range 1..12")),((cljs.core.not.call(null,days__13901))?1:check__13891.call(null,1,d__13919,cljs.reader.days_in_month.call(null,mo__13918,cljs.reader.leap_year_QMARK_.call(null,y__13917)),"timestamp day field must be in range 1..last day in month")),((cljs.core.not.call(null,hours__13902))?0:check__13891.call(null,0,h__13920,23,"timestamp hour field must be in range 0..23")),((cljs.core.not.call(null,minutes__13903))?0:check__13891.call(null,0,m__13921,59,"timestamp minute field must be in range 0..59")),((cljs.core.not.call(null,seconds__13904))?0:check__13891.call(null,0,s__13922,((cljs.core._EQ_.call(null,m__13921,59))?60:59),"timestamp second field must be in range 0..60")),((cljs.core.not.call(null,milliseconds__13905))?0:check__13891.call(null,0,ms__13923,999,"timestamp millisecond field must be in range 0..999")),offset__13928], true);
} else
{return null;
}
});
})();
cljs.reader.parse_timestamp = (function parse_timestamp(ts){
var temp__3971__auto____13940 = cljs.reader.parse_and_validate_timestamp.call(null,ts);
if(cljs.core.truth_(temp__3971__auto____13940))
{var vec__13941__13942 = temp__3971__auto____13940;
var years__13943 = cljs.core.nth.call(null,vec__13941__13942,0,null);
var months__13944 = cljs.core.nth.call(null,vec__13941__13942,1,null);
var days__13945 = cljs.core.nth.call(null,vec__13941__13942,2,null);
var hours__13946 = cljs.core.nth.call(null,vec__13941__13942,3,null);
var minutes__13947 = cljs.core.nth.call(null,vec__13941__13942,4,null);
var seconds__13948 = cljs.core.nth.call(null,vec__13941__13942,5,null);
var ms__13949 = cljs.core.nth.call(null,vec__13941__13942,6,null);
var offset__13950 = cljs.core.nth.call(null,vec__13941__13942,7,null);
return (new Date((Date.UTC(years__13943,(months__13944 - 1),days__13945,hours__13946,minutes__13947,seconds__13948,ms__13949) - ((offset__13950 * 60) * 1000))));
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
var tag__13954 = cljs.reader.read_symbol.call(null,rdr,initch);
var temp__3971__auto____13955 = cljs.core._lookup.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_),cljs.core.name.call(null,tag__13954),null);
if(cljs.core.truth_(temp__3971__auto____13955))
{var pfn__13956 = temp__3971__auto____13955;
return pfn__13956.call(null,cljs.reader.read.call(null,rdr,true,null,false));
} else
{return cljs.reader.reader_error.call(null,rdr,"Could not find tag parser for ",cljs.core.name.call(null,tag__13954)," in ",cljs.core.pr_str.call(null,cljs.core.keys.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_))));
}
});
cljs.reader.register_tag_parser_BANG_ = (function register_tag_parser_BANG_(tag,f){
var tag__13959 = cljs.core.name.call(null,tag);
var old_parser__13960 = cljs.core._lookup.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_),tag__13959,null);
cljs.core.swap_BANG_.call(null,cljs.reader._STAR_tag_table_STAR_,cljs.core.assoc,tag__13959,f);
return old_parser__13960;
});
cljs.reader.deregister_tag_parser_BANG_ = (function deregister_tag_parser_BANG_(tag){
var tag__13963 = cljs.core.name.call(null,tag);
var old_parser__13964 = cljs.core._lookup.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_),tag__13963,null);
cljs.core.swap_BANG_.call(null,cljs.reader._STAR_tag_table_STAR_,cljs.core.dissoc,tag__13963);
return old_parser__13964;
});

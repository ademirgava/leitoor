/*
 Input Mask plugin for jquery
 http://github.com/RobinHerbots/jquery.inputmask
 Copyright (c) 2010 - 2014 Robin Herbots
 Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
 Version: 3.0.29
*/
(function(f){if(void 0===f.fn.inputmask){var R=function(c){var b=document.createElement("input");c="on"+c;var f=c in b;f||(b.setAttribute(c,"return;"),f="function"==typeof b[c]);return f},G=function(c,b,h){return(c=h.aliases[c])?(c.alias&&G(c.alias,void 0,h),f.extend(!0,h,c),f.extend(!0,h,b),!0):!1},K=function(c){function b(f){function b(c,f,d,g){this.matches=[];this.isGroup=c||!1;this.isOptional=f||!1;this.isQuantifier=d||!1;this.isAlternator=g||!1;this.quantifier={min:1,max:1}}function h(b,f,d){var g=
c.definitions[f],l=0==b.matches.length;d=void 0!=d?d:b.matches.length;if(g&&!u){for(var m=g.prevalidator,t=m?m.length:0,k=1;k<g.cardinality;k++){var s=t>=k?m[k-1]:[],r=s.validator,s=s.cardinality;b.matches.splice(d++,0,{fn:r?"string"==typeof r?RegExp(r):new function(){this.test=r}:/./,cardinality:s?s:1,optionality:b.isOptional,newBlockMarker:l,casing:g.casing,def:g.definitionSymbol||f})}b.matches.splice(d++,0,{fn:g.validator?"string"==typeof g.validator?RegExp(g.validator):new function(){this.test=
g.validator}:/./,cardinality:g.cardinality,optionality:b.isOptional,newBlockMarker:l,casing:g.casing,def:g.definitionSymbol||f})}else b.matches.splice(d++,0,{fn:null,cardinality:0,optionality:b.isOptional,newBlockMarker:l,casing:null,def:f}),u=!1}for(var k=/(?:[?*+]|\{[0-9\+\*]+(?:,[0-9\+\*]*)?\})\??|[^.?*+^${[]()|\\]+|./g,u=!1,p=new b,d,l=[],g=[];d=k.exec(f);)switch(d=d[0],d.charAt(0)){case c.optionalmarker.end:case c.groupmarker.end:var t=l.pop();0<l.length?l[l.length-1].matches.push(t):p.matches.push(t);
break;case c.optionalmarker.start:l.push(new b(!1,!0));break;case c.groupmarker.start:l.push(new b(!0));break;case c.quantifiermarker.start:t=new b(!1,!1,!0);d=d.replace(/[{}]/g,"");var A=d.split(",");d=isNaN(A[0])?A[0]:parseInt(A[0]);A=1==A.length?d:isNaN(A[1])?A[1]:parseInt(A[1]);if("*"==A||"+"==A)d="*"==d?0:1,c.greedy=!1;t.quantifier={min:d,max:A};if(0<l.length){A=l[l.length-1].matches;d=A.pop();if(!d.isGroup){var w=new b(!0);w.matches.push(d);d=w}A.push(d);A.push(t)}else d=p.matches.pop(),d.isGroup||
(w=new b(!0),w.matches.push(d),d=w),p.matches.push(d),p.matches.push(t);break;case c.escapeChar:u=!0;break;case c.alternatormarker:break;default:0<l.length?h(l[l.length-1],d):(0<p.matches.length&&(t=p.matches[p.matches.length-1],t.isGroup&&(t.isGroup=!1,h(t,c.groupmarker.start,0),h(t,c.groupmarker.end))),h(p,d))}0<p.matches.length&&g.push(p);return g}function h(m,h){if(c.numericInput){m=m.split("").reverse();for(var k in m)m[k]==c.optionalmarker.start?m[k]=c.optionalmarker.end:m[k]==c.optionalmarker.end?
m[k]=c.optionalmarker.start:m[k]==c.groupmarker.start?m[k]=c.groupmarker.end:m[k]==c.groupmarker.end&&(m[k]=c.groupmarker.start);m=m.join("")}if(void 0!=m&&""!=m){if(0<c.repeat||"*"==c.repeat||"+"==c.repeat)m=c.groupmarker.start+m+c.groupmarker.end+c.quantifiermarker.start+("*"==c.repeat?0:"+"==c.repeat?1:c.repeat)+","+c.repeat+c.quantifiermarker.end;void 0==f.inputmask.masksCache[m]&&(f.inputmask.masksCache[m]={mask:m,maskToken:b(m),validPositions:{},_buffer:void 0,buffer:void 0,tests:{},metadata:h});
return f.extend(!0,{},f.inputmask.masksCache[m])}}var k=[];f.isFunction(c.mask)&&(c.mask=c.mask.call(this,c));f.isArray(c.mask)?f.each(c.mask,function(c,b){void 0!=b.mask?k.push(h(b.mask.toString(),b)):k.push(h(b.toString()))}):(1==c.mask.length&&!1==c.greedy&&0!=c.repeat&&(c.placeholder=""),k=void 0!=c.mask.mask?h(c.mask.mask.toString(),c.mask):h(c.mask.toString()));return k},aa="function"===typeof ScriptEngineMajorVersion?ScriptEngineMajorVersion():10<=(new Function("/*@cc_on return @_jscript_version; @*/"))(),
x=navigator.userAgent,ba=null!==x.match(/iphone/i),ca=null!==x.match(/android.*safari.*/i),da=null!==x.match(/android.*chrome.*/i),ea=null!==x.match(/android.*firefox.*/i),fa=/Kindle/i.test(x)||/Silk/i.test(x)||/KFTT/i.test(x)||/KFOT/i.test(x)||/KFJWA/i.test(x)||/KFJWI/i.test(x)||/KFSOWI/i.test(x)||/KFTHWA/i.test(x)||/KFTHWI/i.test(x)||/KFAPWA/i.test(x)||/KFAPWI/i.test(x),U=R("paste")?"paste":R("input")?"input":"propertychange",C=function(c,b,h){function k(a,e,v){e=e||0;var f=[],g,q=0,y;do{if(!0===
a&&c.validPositions[q]){var l=c.validPositions[q];y=l.match;g=l.locator.slice();f.push(null==y.fn?y.def:!0===v?l.input:b.placeholder.charAt(q%b.placeholder.length))}else g=e>q?d(q,g,q-1)[0]:T(q,g,q-1),y=g.match,g=g.locator.slice(),f.push(null==y.fn?y.def:b.placeholder.charAt(q%b.placeholder.length));q++}while((void 0==I||q-1<I)&&null!=y.fn||null==y.fn&&""!=y.def||e>=q);f.pop();return f}function m(a){var e=c;e.buffer=void 0;e.tests={};!0!==a&&(e._buffer=void 0,e.validPositions={},e.p=-1)}function r(a){var e=
c,v=-1,d=e.validPositions;if(f.isFunction(b.getLastValidPosition))v=b.getLastValidPosition.call(n,e,a,b);else{void 0==a&&(a=-1);var e=v,g;for(g in d){var q=parseInt(g);if(-1==a||null!=d[q].match.fn)q<a&&(e=q),q>=a&&(v=q)}v=1<a-e||v<a?e:v}return v}function s(a,e,v){if(b.insertMode&&void 0!=c.validPositions[a]&&void 0==v){v=f.extend(!0,{},c.validPositions);var d=r(),g;for(g=a;g<=d;g++)delete c.validPositions[g];c.validPositions[a]=e;e=!0;for(g=a;g<=d;g++){a=v[g];if(void 0!=a){var q=null==a.match.fn?
g+1:D(g);e=p(q,a.match.def)?e&&!1!==w(q,a.input,!0,!0):!1}if(!e)break}if(!e)return c.validPositions=f.extend(!0,{},v),!1}else c.validPositions[a]=e;return!0}function T(a,e,c){a=d(a,e,c);var f,g;for(g in a)if(f=a[g],b.greedy||(!1===f.match.optionality||!1===f.match.newBlockMarker)&&!0!==f.match.optionalQuantifier)break;return f}function u(a){return c.validPositions[a]?c.validPositions[a].match:d(a)[0].match}function p(a,e){var c=!1,b=d(a),f;for(f in b)if(b[f].match.def==e){c=!0;break}return c}function d(a,
e,b){function f(e,c,b,v){function g(b,v,k){if(d==a&&void 0==b.matches)return l.push({match:b,locator:v.reverse()}),!0;if(void 0!=b.matches)if(b.isGroup&&!0!==k){if(b=g(e.matches[h+1],v))return!0}else if(b.isOptional){var E=b;if(b=f(b,c,v,k))b=l[l.length-1].match,(b=0==E.matches.indexOf(b))&&(m=!0),d=a}else{if(!b.isAlternator)if(b.isQuantifier&&!0!==k)for(E=b,k=0<c.length&&!0!==k?c.shift():0;k<(isNaN(E.quantifier.max)?k+1:E.quantifier.max)&&d<=a;k++){var t=e.matches[e.matches.indexOf(E)-1];if(b=g(t,
[k].concat(v),!0))if(b=l[l.length-1].match,b.optionalQuantifier=k>E.quantifier.min-1,b=0==t.matches.indexOf(b))if(k>E.quantifier.min-1){m=!0;d=a;break}else return!0;else return!0}else if(b=f(b,c,v,k))return!0}else d++}for(var h=0<c.length?c.shift():0;h<e.matches.length;h++)if(!0!==e.matches[h].isQuantifier){var k=g(e.matches[h],[h].concat(b),v);if(k&&d==a)return k;if(d>a)break}}var g=c.maskToken,d=e?b:0;b=e||[0];var l=[],m=!1;if(void 0==e){e=a-1;for(var h;void 0==(h=c.validPositions[e])&&-1<e;)e--;
if(void 0!=h&&-1<e)d=e,b=h.locator.slice();else{for(e=a-1;void 0==(h=c.tests[e])&&-1<e;)e--;void 0!=h&&-1<e&&(d=e,b=h[0].locator.slice())}}for(e=b.shift();e<g.length&&!(f(g[e],b,[e])&&d==a||d>a);e++);(0==l.length||m)&&l.push({match:{fn:null,cardinality:0,optionality:!0,casing:null,def:""},locator:[]});return c.tests[a]=l}function l(){void 0==c._buffer&&(c._buffer=k(!1,1));return c._buffer}function g(){void 0==c.buffer&&(c.buffer=k(!0,r(),!0));return c.buffer}function t(a,e){for(var c=g().slice(),
f=a;f<e;f++)c[f]!=O(f)&&c[f]!=b.skipOptionalPartCharacter&&w(f,c[f],!0,!0)}function A(a,e){switch(e.casing){case "upper":a=a.toUpperCase();break;case "lower":a=a.toLowerCase()}return a}function w(a,e,v,l){function h(a,e,v,q){var l=!1;f.each(d(a),function(k,h){for(var H=h.match,E=e?1:0,y="",n=g(),w=H.cardinality;w>E;w--)y+=void 0==c.validPositions[a-(w-1)]?O(a-(w-1)):c.validPositions[a-(w-1)].input;e&&(y+=e);l=null!=H.fn?H.fn.test(y,n,a,v,b):e!=H.def&&e!=b.skipOptionalPartCharacter||""==H.def?!1:{c:H.def,
pos:a};if(!1!==l){E=void 0!=l.c?l.c:e;E=E==b.skipOptionalPartCharacter&&null===H.fn?H.def:E;y=a;if(l.refreshFromBuffer){y=l.refreshFromBuffer;v=!0;!0===y?(c.validPositions={},c.tests={},t(0,g().length)):t(y.start,y.end);if(void 0==l.pos&&void 0==l.c)return l.pos=r(),!1;y=void 0!=l.pos?l.pos:a;h=d(y)[0]}else!0!==l&&l.pos!=a&&(y=l.pos,t(a,y),h=d(y)[0]);0<k&&m(!0);s(y,f.extend({},h,{input:A(E,H)}),q)||(l=!1);return!1}});return l}v=!0===v;var q=h(a,e,v,l);if(!v&&!1===q){var k=c.validPositions[a];if(k&&
null==k.match.fn&&(k.match.def==e||e==b.skipOptionalPartCharacter))q={caret:D(a)};else if((b.insertMode||void 0==c.validPositions[D(a)])&&!x(a))for(var k=a+1,n=D(a);k<=n;k++)if(q=h(k,e,v,l),!1!==q){a=k;break}}!0===q&&(q={pos:a});return q}function x(a){a=u(a);return null!=a.fn?a.fn:!1}function C(){var a;I=n.prop("maxLength");-1==I&&(I=void 0);if(!1==b.greedy){var e;e=r();a=c.validPositions[e];var f=void 0!=a?a.locator.slice():void 0;for(e+=1;void 0==a||null!=a.match.fn||null==a.match.fn&&""!=a.match.def;e++)a=
T(e,f,e-1),f=a.locator.slice();a=e}else a=g().length;return void 0==I||a<I?a:I}function D(a){var e=C();if(a>=e)return e;for(;++a<e&&!x(a)&&(!0!==b.nojumps||b.nojumpsThreshold>a););return a}function S(a){if(0>=a)return 0;for(;0<--a&&!x(a););return a}function F(a,e,b){a._valueSet(e.join(""));void 0!=b&&z(a,b)}function O(a,e){e=e||u(a);return null==e.fn?e.def:b.placeholder.charAt(a%b.placeholder.length)}function N(a,e,b,d,h){d=void 0!=d?d.slice():K(a._valueGet()).split("");m();e&&a._valueSet("");f.each(d,
function(e,d){if(!0===h){var g=c.p,g=-1==g?g:S(g),k=-1==g?e:D(g);-1==f.inArray(d,l().slice(g+1,k))&&V.call(a,void 0,!0,d.charCodeAt(0),!1,b,e)}else V.call(a,void 0,!0,d.charCodeAt(0),!1,b,e),b=b||0<e&&e>c.p});e&&F(a,g(),D(r(0)))}function G(a){return f.inputmask.escapeRegex.call(this,a)}function K(a){return a.replace(RegExp("("+G(l().join(""))+")*$"),"")}function M(a){var e=g().slice(),b,f=r(),d={},l=c.validPositions[f].locator.slice(),h;for(b=f+1;b<e.length;b++)h=T(b,l,b-1),l=h.locator.slice(),d[b]=
h;for(b=e.length-1;b>f;b--)if(h=d[b].match,h.optionality&&e[b]==O(b,h))e.pop();else break;F(a,e)}function R(a,e){if(!a.data("_inputmask")||!0!==e&&a.hasClass("hasDatepicker"))return a[0]._valueGet();var d=[],l=c.validPositions,h;for(h in l)null!=l[h].match.fn&&d.push(l[h].input);d=(B?d.reverse():d).join("");l=(B?g().reverse():g()).join("");return f.isFunction(b.onUnMask)?b.onUnMask.call(a,l,d,b):d}function L(a){!B||"number"!=typeof a||b.greedy&&""==b.placeholder||(a=g().length-a);return a}function z(a,
e,c){a=a.jquery&&0<a.length?a[0]:a;if("number"==typeof e){e=L(e);c=L(c);c="number"==typeof c?c:e;var d=f(a).data("_inputmask")||{};d.caret={begin:e,end:c};f(a).data("_inputmask",d);f(a).is(":visible")&&(a.scrollLeft=a.scrollWidth,!1==b.insertMode&&e==c&&c++,a.setSelectionRange?(a.selectionStart=e,a.selectionEnd=c):a.createTextRange&&(a=a.createTextRange(),a.collapse(!0),a.moveEnd("character",c),a.moveStart("character",e),a.select()))}else return d=f(a).data("_inputmask"),!f(a).is(":visible")&&d&&
void 0!=d.caret?(e=d.caret.begin,c=d.caret.end):a.setSelectionRange?(e=a.selectionStart,c=a.selectionEnd):document.selection&&document.selection.createRange&&(a=document.selection.createRange(),e=0-a.duplicate().moveStart("character",-1E5),c=e+a.text.length),e=L(e),c=L(c),{begin:e,end:c}}function P(a){if(f.isFunction(b.isComplete))return b.isComplete.call(n,a,b);if("*"!=b.repeat){var e=!1,c=S(C());if(r()==c)for(var e=!0,d=0;d<=c;d++){var g=x(d);if(g&&(void 0==a[d]||a[d]==O(d))||!g&&a[d]!=O(d)){e=
!1;break}}return e}}function ga(a){a=f._data(a).events;f.each(a,function(a,b){f.each(b,function(a,b){if("inputmask"==b.namespace&&"setvalue"!=b.type){var e=b.handler;b.handler=function(a){if(this.readOnly||this.disabled)a.preventDefault;else return e.apply(this,arguments)}}})})}function ha(a){function b(a){if(void 0==f.valHooks[a]||!0!=f.valHooks[a].inputmaskpatch){var e=f.valHooks[a]&&f.valHooks[a].get?f.valHooks[a].get:function(a){return a.value},c=f.valHooks[a]&&f.valHooks[a].set?f.valHooks[a].set:
function(a,b){a.value=b;return a};f.valHooks[a]={get:function(a){var b=f(a);if(b.data("_inputmask")){if(b.data("_inputmask").opts.autoUnmask)return b.inputmask("unmaskedvalue");a=e(a);b=(b=b.data("_inputmask").maskset._buffer)?b.join(""):"";return a!=b?a:""}return e(a)},set:function(a,b){var e=f(a),d=c(a,b);e.data("_inputmask")&&e.triggerHandler("setvalue.inputmask");return d},inputmaskpatch:!0}}}var c;Object.getOwnPropertyDescriptor&&(c=Object.getOwnPropertyDescriptor(a,"value"));if(c&&c.get){if(!a._valueGet){var d=
c.get,g=c.set;a._valueGet=function(){return B?d.call(this).split("").reverse().join(""):d.call(this)};a._valueSet=function(a){g.call(this,B?a.split("").reverse().join(""):a)};Object.defineProperty(a,"value",{get:function(){var a=f(this),b=f(this).data("_inputmask"),e=b.maskset;return b&&b.opts.autoUnmask?a.inputmask("unmaskedvalue"):d.call(this)!=e._buffer.join("")?d.call(this):""},set:function(a){g.call(this,a);f(this).triggerHandler("setvalue.inputmask")}})}}else document.__lookupGetter__&&a.__lookupGetter__("value")?
a._valueGet||(d=a.__lookupGetter__("value"),g=a.__lookupSetter__("value"),a._valueGet=function(){return B?d.call(this).split("").reverse().join(""):d.call(this)},a._valueSet=function(a){g.call(this,B?a.split("").reverse().join(""):a)},a.__defineGetter__("value",function(){var a=f(this),b=f(this).data("_inputmask"),e=b.maskset;return b&&b.opts.autoUnmask?a.inputmask("unmaskedvalue"):d.call(this)!=e._buffer.join("")?d.call(this):""}),a.__defineSetter__("value",function(a){g.call(this,a);f(this).triggerHandler("setvalue.inputmask")})):
(a._valueGet||(a._valueGet=function(){return B?this.value.split("").reverse().join(""):this.value},a._valueSet=function(a){this.value=B?a.split("").reverse().join(""):a}),b(a.type))}function X(a,e,d){if(b.numericInput||B){switch(e){case b.keyCode.BACKSPACE:e=b.keyCode.DELETE;break;case b.keyCode.DELETE:e=b.keyCode.BACKSPACE}B&&(a=d.end,d.end=d.begin,d.begin=a)}d.begin==d.end?e==b.keyCode.BACKSPACE?d.begin=S(d.begin):e==b.keyCode.DELETE&&d.end++:1!=d.end-d.begin||b.insertMode||e==b.keyCode.BACKSPACE&&
d.begin--;a=d.begin;var f=d.end;for(e=a;a<f;a++)delete c.validPositions[a];for(a=f;a<=r();){var f=c.validPositions[a],g=c.validPositions[e];void 0!=f&&void 0==g?(p(e,f.match.def)&&!1!==w(e,f.input,!0)&&(delete c.validPositions[a],a++),e++):a++}for(e=r();0<e&&(void 0==c.validPositions[e]||null==c.validPositions[e].match.fn);)delete c.validPositions[e],e--;m(!0);e=D(-1);r()<e?c.p=e:c.p=d.begin}function Y(a){W=!1;var e=this,d=f(e),h=a.keyCode,k=z(e);h==b.keyCode.BACKSPACE||h==b.keyCode.DELETE||ba&&127==
h||a.ctrlKey&&88==h?(a.preventDefault(),88==h&&(J=g().join("")),X(e,h,k),F(e,g(),c.p),e._valueGet()==l().join("")&&d.trigger("cleared"),b.showTooltip&&d.prop("title",c.mask)):h==b.keyCode.END||h==b.keyCode.PAGE_DOWN?setTimeout(function(){var d=D(r());b.insertMode||d!=C()||a.shiftKey||d--;z(e,a.shiftKey?k.begin:d,d)},0):h==b.keyCode.HOME&&!a.shiftKey||h==b.keyCode.PAGE_UP?z(e,0,a.shiftKey?k.begin:0):h==b.keyCode.ESCAPE||90==h&&a.ctrlKey?(N(e,!0,!1,J.split("")),d.click()):h!=b.keyCode.INSERT||a.shiftKey||
a.ctrlKey?!1!=b.insertMode||a.shiftKey||(h==b.keyCode.RIGHT?setTimeout(function(){var a=z(e);z(e,a.begin)},0):h==b.keyCode.LEFT&&setTimeout(function(){var a=z(e);z(e,a.begin-1)},0)):(b.insertMode=!b.insertMode,z(e,b.insertMode||k.begin!=C()?k.begin:k.begin-1));var d=z(e),q=b.onKeyDown.call(this,a,g(),b);q&&!0===q.refreshFromBuffer&&(c.validPositions={},c.tests={},t(0,g().length),m(!0),F(e,g()),z(e,d.begin,d.end));Z=-1!=f.inArray(h,b.ignorables)}function V(a,e,d,h,l,k){if(void 0==d&&W)return!1;W=!0;
var t=f(this);a=a||window.event;d=e?d:a.which||a.charCode||a.keyCode;if(!(!0===e||a.ctrlKey&&a.altKey)&&(a.ctrlKey||a.metaKey||Z))return!0;if(d){!0!==e&&46==d&&!1==a.shiftKey&&","==b.radixPoint&&(d=44);var n;d=String.fromCharCode(d);e?(k=l?k:r()+1,k={begin:k,end:k}):k=z(this);var A=B?1<k.begin-k.end||1==k.begin-k.end&&b.insertMode:1<k.end-k.begin||1==k.end-k.begin&&b.insertMode;A&&(c.undoPositions=f.extend(!0,{},c.validPositions),X(this,b.keyCode.DELETE,k),b.insertMode||(b.insertMode=!b.insertMode,
s(k.begin,l),b.insertMode=!b.insertMode),A=!b.multi);c.writeOutBuffer=!0;var p=k.begin,u=w(p,d,l);!1!==u&&(!0!==u&&(p=void 0!=u.pos?u.pos:p,d=void 0!=u.c?u.c:d),m(!0),void 0!=u.caret?n=u.caret:(l=c.validPositions,n=void 0!=l[p+1]&&T(k+1,l[p].locator.slice(),p).match.def!=l[p+1].match.def?p+1:D(p)),c.p=n);if(!1!==h){var x=this;setTimeout(function(){b.onKeyValidation.call(x,u,b)},0);if(c.writeOutBuffer&&!1!==u){var C=g();F(this,C,e?void 0:b.numericInput?S(n):n);!0!==e&&setTimeout(function(){!0===P(C)&&
t.trigger("complete");Q=!0;t.trigger("input")},0)}else A&&(c.buffer=void 0,c.validPositions=c.undoPositions)}else A&&(c.buffer=void 0,c.validPositions=c.undoPositions);b.showTooltip&&t.prop("title",c.mask);a&&!0!=e&&(a.preventDefault?a.preventDefault():a.returnValue=!1)}}function ia(a){var d=f(this),h=a.keyCode,l=g();(a=b.onKeyUp.call(this,a,l,b))&&!0===a.refreshFromBuffer&&(c.validPositions={},c.tests={},t(0,g().length),m(!0),F(this,g()));h==b.keyCode.TAB&&b.showMaskOnFocus&&(d.hasClass("focus.inputmask")&&
0==this._valueGet().length?(m(),l=g(),F(this,l),z(this,0),J=g().join("")):(F(this,l),z(this,L(0),L(C()))))}function $(a){if(!0===Q&&"input"==a.type)return Q=!1,!0;var d=this,c=f(d);if("propertychange"==a.type&&d._valueGet().length<=C())return!0;setTimeout(function(){var a=f.isFunction(b.onBeforePaste)?b.onBeforePaste.call(d,d._valueGet(),b):d._valueGet();N(d,!0,!1,a.split(""),!0);!0===P(g())&&c.trigger("complete");c.click()},0)}function ja(a){if(!0===Q&&"input"==a.type)return Q=!1,!0;var d=z(this),
c=this._valueGet(),c=c.replace(RegExp("("+G(l().join(""))+")*"),"");d.begin>c.length&&(z(this,c.length),d=z(this));1!=g().length-c.length||c.charAt(d.begin)==g()[d.begin]||c.charAt(d.begin+1)==g()[d.begin]||x(d.begin)||(a.keyCode=b.keyCode.BACKSPACE,Y.call(this,a));a.preventDefault()}function ka(a){n=f(a);if(n.is(":input")){n.data("_inputmask",{maskset:c,opts:b,isRTL:!1});b.showTooltip&&n.prop("title",c.mask);ha(a);("rtl"==a.dir||b.rightAlign)&&n.css("text-align","right");if("rtl"==a.dir||b.numericInput){a.dir=
"ltr";n.removeAttr("dir");var d=n.data("_inputmask");d.isRTL=!0;n.data("_inputmask",d);B=!0}n.unbind(".inputmask");n.removeClass("focus.inputmask");n.closest("form").bind("submit",function(){J!=g().join("")&&n.change()}).bind("reset",function(){setTimeout(function(){n.trigger("setvalue")},0)});n.bind("mouseenter.inputmask",function(){!f(this).hasClass("focus.inputmask")&&b.showMaskOnHover&&this._valueGet()!=g().join("")&&F(this,g())}).bind("blur.inputmask",function(){var a=f(this);if(a.data("_inputmask")){var d=
this._valueGet(),c=g();a.removeClass("focus.inputmask");J!=g().join("")&&a.change();b.clearMaskOnLostFocus&&""!=d&&(d==l().join("")?this._valueSet(""):M(this));!1===P(c)&&(a.trigger("incomplete"),b.clearIncomplete&&(m(),b.clearMaskOnLostFocus?this._valueSet(""):(c=l().slice(),F(this,c))))}}).bind("focus.inputmask",function(){var a=f(this),d=this._valueGet();b.showMaskOnFocus&&!a.hasClass("focus.inputmask")&&(!b.showMaskOnHover||b.showMaskOnHover&&""==d)&&this._valueGet()!=g().join("")&&F(this,g(),
D(r()));a.addClass("focus.inputmask");J=g().join("")}).bind("mouseleave.inputmask",function(){var a=f(this);b.clearMaskOnLostFocus&&(a.hasClass("focus.inputmask")||this._valueGet()==a.attr("placeholder")||(this._valueGet()==l().join("")||""==this._valueGet()?this._valueSet(""):M(this)))}).bind("click.inputmask",function(){var a=this;setTimeout(function(){var d=z(a);g();if(d.begin==d.end){var d=B?L(d.begin):d.begin,b=r(d),b=D(b);d<b?x(d)?z(a,d):z(a,D(d)):z(a,b)}},0)}).bind("dblclick.inputmask",function(){var a=
this;setTimeout(function(){z(a,0,D(r()))},0)}).bind(U+".inputmask dragdrop.inputmask drop.inputmask",$).bind("setvalue.inputmask",function(){N(this,!0);J=g().join("");this._valueGet()==l().join("")&&this._valueSet("")}).bind("complete.inputmask",b.oncomplete).bind("incomplete.inputmask",b.onincomplete).bind("cleared.inputmask",b.oncleared);n.bind("keydown.inputmask",Y).bind("keypress.inputmask",V).bind("keyup.inputmask",ia);if(ca||ea||da||fa)"input"==U&&n.unbind(U+".inputmask"),n.bind("input.inputmask",
ja);aa&&n.bind("input.inputmask",$);d=f.isFunction(b.onBeforeMask)?b.onBeforeMask.call(a,a._valueGet(),b):a._valueGet();N(a,!1,!1,d.split(""),!0);F(a,g());J=g().join("");var h;try{h=document.activeElement}catch(k){}h===a?(n.addClass("focus.inputmask"),z(a,D(r()))):b.clearMaskOnLostFocus?g().join("")==l().join("")?a._valueSet(""):M(a):F(a,g());ga(a)}}var B=!1,J=g().join(""),n,W=!1,Q=!1,Z=!1,I;if(void 0!=h)switch(h.action){case "isComplete":return n=f(h.el),P(h.buffer);case "unmaskedvalue":return n=
h.$input,B=h.$input.data("_inputmask").isRTL,R(h.$input,h.skipDatepickerCheck);case "mask":ka(h.el);break;case "format":return n=f({}),n.data("_inputmask",{maskset:c,opts:b,isRTL:b.numericInput}),b.numericInput&&(B=!0),h=h.value.split(""),N(n,!1,!1,B?h.reverse():h,!0),B?g().reverse().join(""):g().join("");case "isValid":return n=f({}),n.data("_inputmask",{maskset:c,opts:b,isRTL:b.numericInput}),b.numericInput&&(B=!0),h=h.value.split(""),N(n,!1,!0,B?h.reverse():h),P(g())}},M=function(c,b,h){function k(d,
b,g){d=d.jquery&&0<d.length?d[0]:d;if("number"==typeof b){b=m(b);g=m(g);g="number"==typeof g?g:b;if(d!=c){var k=f(d).data("_inputmask")||{};k.caret={begin:b,end:g};f(d).data("_inputmask",k)}f(d).is(":visible")&&(d.scrollLeft=d.scrollWidth,!1==h.insertMode&&b==g&&g++,d.setSelectionRange?(d.selectionStart=b,d.selectionEnd=g):d.createTextRange&&(d=d.createTextRange(),d.collapse(!0),d.moveEnd("character",g),d.moveStart("character",b),d.select()))}else return k=f(d).data("_inputmask"),!f(d).is(":visible")&&
k&&void 0!=k.caret?(b=k.caret.begin,g=k.caret.end):d.setSelectionRange?(b=d.selectionStart,g=d.selectionEnd):document.selection&&document.selection.createRange&&(d=document.selection.createRange(),b=0-d.duplicate().moveStart("character",-1E5),g=b+d.text.length),b=m(b),g=m(g),{begin:b,end:g}}function m(d){!x||"number"!=typeof d||h.greedy&&""==h.placeholder||(d=c.value.length-d);return d}function r(d,b){if("multiMaskScope"!=d){if(f.isFunction(h.determineActiveMasksetIndex))u=h.determineActiveMasksetIndex.call(s,
d,b);else{var g=-1,m=-1,p=-1;f.each(b,function(b,d){var c=f(d).data("_inputmask").maskset,h=-1,l=0,s=k(d).begin,w;for(w in c.validPositions)c=parseInt(w),c>h&&(h=c),l++;if(l>g||l==g&&m>s&&p>h||l==g&&m==s&&p<h)g=l,m=s,u=b,p=h})}var w=s.data("_inputmask-multi")||{activeMasksetIndex:0,elmasks:b};w.activeMasksetIndex=u;s.data("_inputmask-multi",w)}-1==["focus"].indexOf(d)&&c.value!=b[u]._valueGet()&&(w=""==f(b[u]).val()?b[u]._valueGet():f(b[u]).val(),c.value=w);-1==["blur","focus"].indexOf(d)&&f(b[u]).hasClass("focus.inputmask")&&
(w=k(b[u]),k(c,w.begin,w.end))}h.multi=!0;var s=f(c),x="rtl"==c.dir||h.numericInput,u=0,p=f.map(b,function(b,c){var g='<input type="text" ';s.attr("value")&&(g+='value="'+s.attr("value")+'" ');s.attr("dir")&&(g+='dir="'+s.attr("dir")+'" ');g=f(g+"/>")[0];C(f.extend(!0,{},b),h,{action:"mask",el:g});return g});s.data("_inputmask-multi",{activeMasksetIndex:0,elmasks:p});("rtl"==c.dir||h.rightAlign)&&s.css("text-align","right");c.dir="ltr";s.removeAttr("dir");""!=s.attr("value")&&r("init",p);s.bind("mouseenter blur focus mouseleave click dblclick keydown keypress keypress",
function(b){var l=k(c),g,t=!0;if("keydown"==b.type){g=b.keyCode;if(g==h.keyCode.DOWN&&u<p.length-1)return u++,r("multiMaskScope",p),!1;if(g==h.keyCode.UP&&0<u)return u--,r("multiMaskScope",p),!1;if(b.ctrlKey||b.shiftKey||b.altKey)return!0}else if("keypress"==b.type&&(b.ctrlKey||b.shiftKey||b.altKey))return!0;f.each(p,function(c,s){if("keydown"==b.type){g=b.keyCode;if(g==h.keyCode.BACKSPACE&&s._valueGet().length<l.begin)return;if(g==h.keyCode.TAB)t=!1;else{if(g==h.keyCode.RIGHT){k(s,l.begin+1,l.end+
1);t=!1;return}if(g==h.keyCode.LEFT){k(s,l.begin-1,l.end-1);t=!1;return}}}if(-1!=["click"].indexOf(b.type)&&(k(s,m(l.begin),m(l.end)),l.begin!=l.end)){t=!1;return}-1!=["keydown"].indexOf(b.type)&&l.begin!=l.end&&k(s,l.begin,l.end);f(s).triggerHandler(b)});t&&setTimeout(function(){r(b.type,p)},0)});s.bind(U+" dragdrop drop setvalue",function(b){k(c);setTimeout(function(){f.each(p,function(h,g){g._valueSet(c.value);f(g).triggerHandler(b)});setTimeout(function(){r(b.type,p)},0)},0)});(function(b){if(void 0==
f.valHooks[b]||!0!=f.valHooks[b].inputmaskmultipatch){var c=f.valHooks[b]&&f.valHooks[b].get?f.valHooks[b].get:function(b){return b.value},g=f.valHooks[b]&&f.valHooks[b].set?f.valHooks[b].set:function(b,d){b.value=d;return b};f.valHooks[b]={get:function(b){var d=f(b);return d.data("_inputmask-multi")?(b=d.data("_inputmask-multi"),c(b.elmasks[b.activeMasksetIndex])):c(b)},set:function(b,d){var c=f(b),h=g(b,d);c.data("_inputmask-multi")&&c.triggerHandler("setvalue");return h},inputmaskmultipatch:!0}}})(c.type)};
f.inputmask={defaults:{placeholder:"_",optionalmarker:{start:"[",end:"]"},quantifiermarker:{start:"{",end:"}"},groupmarker:{start:"(",end:")"},alternatormarker:"|",escapeChar:"\\",mask:null,oncomplete:f.noop,onincomplete:f.noop,oncleared:f.noop,repeat:0,greedy:!0,autoUnmask:!1,clearMaskOnLostFocus:!0,insertMode:!0,clearIncomplete:!1,aliases:{},onKeyUp:f.noop,onKeyDown:f.noop,onBeforeMask:void 0,onBeforePaste:void 0,onUnMask:void 0,showMaskOnFocus:!0,showMaskOnHover:!0,onKeyValidation:f.noop,skipOptionalPartCharacter:" ",
showTooltip:!1,numericInput:!1,getLastValidPosition:void 0,rightAlign:!1,radixPoint:"",definitions:{9:{validator:"[0-9]",cardinality:1,definitionSymbol:"*"},a:{validator:"[A-Za-z\u0410-\u044f\u0401\u0451]",cardinality:1,definitionSymbol:"*"},"*":{validator:"[A-Za-z\u0410-\u044f\u0401\u04510-9]",cardinality:1}},keyCode:{ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,
NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91},ignorables:[8,9,13,19,27,33,34,35,36,37,38,39,40,45,46,93,112,113,114,115,116,117,118,119,120,121,122,123],isComplete:void 0,multi:!1,nojumps:!1,nojumpsThreshold:0,determineActiveMasksetIndex:void 0},masksCache:{},escapeRegex:function(c){return c.replace(RegExp("(\\/|\\.|\\*|\\+|\\?|\\||\\(|\\)|\\[|\\]|\\{|\\}|\\\\)","gim"),
"\\$1")},format:function(c,b){var h=f.extend(!0,{},f.inputmask.defaults,b);G(h.alias,b,h);return C(K(h),h,{action:"format",value:c})},isValid:function(c,b){var h=f.extend(!0,{},f.inputmask.defaults,b);G(h.alias,b,h);return C(K(h),h,{action:"isValid",value:c})}};f.fn.inputmask=function(c,b){function h(b,c){var h=f(b),k;for(k in c){var d=h.data("inputmask-"+k.toLowerCase());void 0!=d&&(c[k]=d)}return c}var k=f.extend(!0,{},f.inputmask.defaults,b),m;if("string"===typeof c)switch(c){case "mask":return G(k.alias,
b,k),m=K(k),0==m.length?this:this.each(function(){f.isArray(m)?M(this,m,h(this,k)):C(f.extend(!0,{},m),h(this,k),{action:"mask",el:this})});case "unmaskedvalue":var r=f(this);return r.data("_inputmask")?(m=r.data("_inputmask").maskset,k=r.data("_inputmask").opts,C(m,k,{action:"unmaskedvalue",$input:r})):r.val();case "remove":return this.each(function(){var b=f(this);if(b.data("_inputmask")){m=b.data("_inputmask").maskset;k=b.data("_inputmask").opts;this._valueSet(C(m,k,{action:"unmaskedvalue",$input:b,
skipDatepickerCheck:!0}));b.unbind(".inputmask");b.removeClass("focus.inputmask");b.removeData("_inputmask");var c;Object.getOwnPropertyDescriptor&&(c=Object.getOwnPropertyDescriptor(this,"value"));c&&c.get?this._valueGet&&Object.defineProperty(this,"value",{get:this._valueGet,set:this._valueSet}):document.__lookupGetter__&&this.__lookupGetter__("value")&&this._valueGet&&(this.__defineGetter__("value",this._valueGet),this.__defineSetter__("value",this._valueSet));try{delete this._valueGet,delete this._valueSet}catch(h){this._valueSet=
this._valueGet=void 0}}});case "getemptymask":return this.data("_inputmask")?(m=this.data("_inputmask").maskset,m._buffer.join("")):"";case "hasMaskedValue":return this.data("_inputmask")?!this.data("_inputmask").opts.autoUnmask:!1;case "isComplete":return this.data("_inputmask")?(m=this.data("_inputmask").maskset,k=this.data("_inputmask").opts,C(m,k,{action:"isComplete",buffer:this[0]._valueGet().split(""),el:this})):!0;case "getmetadata":if(this.data("_inputmask"))return m=this.data("_inputmask").maskset,
m.metadata;break;default:return G(c,b,k)||(k.mask=c),m=K(k),void 0==m?this:this.each(function(){f.isArray(m)?M(this,m,h(this,k)):C(f.extend(!0,{},m),h(this,k),{action:"mask",el:this})})}else{if("object"==typeof c)return k=f.extend(!0,{},f.inputmask.defaults,c),G(k.alias,c,k),m=K(k),void 0==m?this:this.each(function(){f.isArray(m)?M(this,m,h(this,k)):C(f.extend(!0,{},m),h(this,k),{action:"mask",el:this})});if(void 0==c)return this.each(function(){var c=f(this).attr("data-inputmask");if(c&&""!=c)try{var c=
c.replace(RegExp("'","g"),'"'),h=f.parseJSON("{"+c+"}");f.extend(!0,h,b);k=f.extend(!0,{},f.inputmask.defaults,h);G(k.alias,h,k);k.alias=void 0;f(this).inputmask(k)}catch(m){}})}}}})(jQuery);
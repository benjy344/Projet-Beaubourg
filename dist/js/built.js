/*! jQuery v3.1.1 | (c) jQuery Foundation | jquery.org/license */
!function(a,b){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){"use strict";var c=[],d=a.document,e=Object.getPrototypeOf,f=c.slice,g=c.concat,h=c.push,i=c.indexOf,j={},k=j.toString,l=j.hasOwnProperty,m=l.toString,n=m.call(Object),o={};function p(a,b){b=b||d;var c=b.createElement("script");c.text=a,b.head.appendChild(c).parentNode.removeChild(c)}var q="3.1.1",r=function(a,b){return new r.fn.init(a,b)},s=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,t=/^-ms-/,u=/-([a-z])/g,v=function(a,b){return b.toUpperCase()};r.fn=r.prototype={jquery:q,constructor:r,length:0,toArray:function(){return f.call(this)},get:function(a){return null==a?f.call(this):a<0?this[a+this.length]:this[a]},pushStack:function(a){var b=r.merge(this.constructor(),a);return b.prevObject=this,b},each:function(a){return r.each(this,a)},map:function(a){return this.pushStack(r.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(f.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(a<0?b:0);return this.pushStack(c>=0&&c<b?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:h,sort:c.sort,splice:c.splice},r.extend=r.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||r.isFunction(g)||(g={}),h===i&&(g=this,h--);h<i;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(r.isPlainObject(d)||(e=r.isArray(d)))?(e?(e=!1,f=c&&r.isArray(c)?c:[]):f=c&&r.isPlainObject(c)?c:{},g[b]=r.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},r.extend({expando:"jQuery"+(q+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===r.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=r.type(a);return("number"===b||"string"===b)&&!isNaN(a-parseFloat(a))},isPlainObject:function(a){var b,c;return!(!a||"[object Object]"!==k.call(a))&&(!(b=e(a))||(c=l.call(b,"constructor")&&b.constructor,"function"==typeof c&&m.call(c)===n))},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?j[k.call(a)]||"object":typeof a},globalEval:function(a){p(a)},camelCase:function(a){return a.replace(t,"ms-").replace(u,v)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var c,d=0;if(w(a)){for(c=a.length;d<c;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(s,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(w(Object(a))?r.merge(c,"string"==typeof a?[a]:a):h.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:i.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;d<c;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;f<g;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,f=0,h=[];if(w(a))for(d=a.length;f<d;f++)e=b(a[f],f,c),null!=e&&h.push(e);else for(f in a)e=b(a[f],f,c),null!=e&&h.push(e);return g.apply([],h)},guid:1,proxy:function(a,b){var c,d,e;if("string"==typeof b&&(c=a[b],b=a,a=c),r.isFunction(a))return d=f.call(arguments,2),e=function(){return a.apply(b||this,d.concat(f.call(arguments)))},e.guid=a.guid=a.guid||r.guid++,e},now:Date.now,support:o}),"function"==typeof Symbol&&(r.fn[Symbol.iterator]=c[Symbol.iterator]),r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){j["[object "+b+"]"]=b.toLowerCase()});function w(a){var b=!!a&&"length"in a&&a.length,c=r.type(a);return"function"!==c&&!r.isWindow(a)&&("array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a)}var x=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=function(a,b){for(var c=0,d=a.length;c<d;c++)if(a[c]===b)return c;return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",M="\\["+K+"*("+L+")(?:"+K+"*([*^$|!~]?=)"+K+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+L+"))|)"+K+"*\\]",N=":("+L+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+M+")*)|.*)\\)|)",O=new RegExp(K+"+","g"),P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),Q=new RegExp("^"+K+"*,"+K+"*"),R=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),S=new RegExp("="+K+"*([^\\]'\"]*?)"+K+"*\\]","g"),T=new RegExp(N),U=new RegExp("^"+L+"$"),V={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L+"|[*])"),ATTR:new RegExp("^"+M),PSEUDO:new RegExp("^"+N),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),aa=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:d<0?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ba=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ca=function(a,b){return b?"\0"===a?"\ufffd":a.slice(0,-1)+"\\"+a.charCodeAt(a.length-1).toString(16)+" ":"\\"+a},da=function(){m()},ea=ta(function(a){return a.disabled===!0&&("form"in a||"label"in a)},{dir:"parentNode",next:"legend"});try{G.apply(D=H.call(v.childNodes),v.childNodes),D[v.childNodes.length].nodeType}catch(fa){G={apply:D.length?function(a,b){F.apply(a,H.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s=b&&b.ownerDocument,w=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==w&&9!==w&&11!==w)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==w&&(l=Z.exec(a)))if(f=l[1]){if(9===w){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(s&&(j=s.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(l[2])return G.apply(d,b.getElementsByTagName(a)),d;if((f=l[3])&&c.getElementsByClassName&&b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==w)s=b,r=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(ba,ca):b.setAttribute("id",k=u),o=g(a),h=o.length;while(h--)o[h]="#"+k+" "+sa(o[h]);r=o.join(","),s=$.test(a)&&qa(b.parentNode)||b}if(r)try{return G.apply(d,s.querySelectorAll(r)),d}catch(x){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(P,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("fieldset");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&a.sourceIndex-b.sourceIndex;if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return function(b){return"form"in b?b.parentNode&&b.disabled===!1?"label"in b?"label"in b.parentNode?b.parentNode.disabled===a:b.disabled===a:b.isDisabled===a||b.isDisabled!==!a&&ea(b)===a:b.disabled===a:"label"in b&&b.disabled===a}}function pa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function qa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return!!b&&"HTML"!==b.nodeName},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),v!==n&&(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Y.test(n.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){return a.getAttribute("id")===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}}):(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c,d,e,f=b.getElementById(a);if(f){if(c=f.getAttributeNode("id"),c&&c.value===a)return[f];e=b.getElementsByName(a),d=0;while(f=e[d++])if(c=f.getAttributeNode("id"),c&&c.value===a)return[f]}return[]}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){if("undefined"!=typeof b.getElementsByClassName&&p)return b.getElementsByClassName(a)},r=[],q=[],(c.qsa=Y.test(n.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){a.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+K+"*[*^$|!~]?="),2!==a.querySelectorAll(":enabled").length&&q.push(":enabled",":disabled"),o.appendChild(a).disabled=!0,2!==a.querySelectorAll(":disabled").length&&q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Y.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"*"),s.call(a,"[s!='']:x"),r.push("!=",N)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Y.test(o.compareDocumentPosition),t=b||Y.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?I(k,a)-I(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?I(k,a)-I(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?la(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(S,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.escape=function(a){return(a+"").replace(ba,ca)},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(_,aa),a[3]=(a[3]||a[4]||a[5]||"").replace(_,aa),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return V.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&T.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(_,aa).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:!b||(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(O," ")+" ").indexOf(c)>-1:"|="===b&&(e===c||e.slice(0,c.length+1)===c+"-"))}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=I(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(P,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(_,aa),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return U.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(_,aa).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:oa(!1),disabled:oa(!0),checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return X.test(a.nodeName)},input:function(a){return W.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:pa(function(){return[0]}),last:pa(function(a,b){return[b-1]}),eq:pa(function(a,b,c){return[c<0?c+b:c]}),even:pa(function(a,b){for(var c=0;c<b;c+=2)a.push(c);return a}),odd:pa(function(a,b){for(var c=1;c<b;c+=2)a.push(c);return a}),lt:pa(function(a,b,c){for(var d=c<0?c+b:c;--d>=0;)a.push(d);return a}),gt:pa(function(a,b,c){for(var d=c<0?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function ra(){}ra.prototype=d.filters=d.pseudos,d.setFilters=new ra,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=Q.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter)!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function sa(a){for(var b=0,c=a.length,d="";b<c;b++)d+=a[b].value;return d}function ta(a,b,c){var d=b.dir,e=b.next,f=e||d,g=c&&"parentNode"===f,h=x++;return b.first?function(b,c,e){while(b=b[d])if(1===b.nodeType||g)return a(b,c,e);return!1}:function(b,c,i){var j,k,l,m=[w,h];if(i){while(b=b[d])if((1===b.nodeType||g)&&a(b,c,i))return!0}else while(b=b[d])if(1===b.nodeType||g)if(l=b[u]||(b[u]={}),k=l[b.uniqueID]||(l[b.uniqueID]={}),e&&e===b.nodeName.toLowerCase())b=b[d]||b;else{if((j=k[f])&&j[0]===w&&j[1]===h)return m[2]=j[2];if(k[f]=m,m[2]=a(b,c,i))return!0}return!1}}function ua(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function va(a,b,c){for(var d=0,e=b.length;d<e;d++)ga(a,b[d],c);return c}function wa(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;h<i;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function xa(a,b,c,d,e,f){return d&&!d[u]&&(d=xa(d)),e&&!e[u]&&(e=xa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||va(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:wa(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=wa(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?I(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=wa(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}function ya(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ta(function(a){return a===b},h,!0),l=ta(function(a){return I(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];i<f;i++)if(c=d.relative[a[i].type])m=[ta(ua(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;e<f;e++)if(d.relative[a[e].type])break;return xa(i>1&&ua(m),i>1&&sa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(P,"$1"),c,i<e&&ya(a.slice(i,e)),e<f&&ya(a=a.slice(e)),e<f&&sa(a))}m.push(c)}return ua(m)}function za(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=E.call(i));u=wa(u)}G.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&ga.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=ya(b[c]),f[u]?d.push(f):e.push(f);f=A(a,za(e,d)),f.selector=a}return f},i=ga.select=function(a,b,c,e){var f,i,j,k,l,m="function"==typeof a&&a,n=!e&&g(a=m.selector||a);if(c=c||[],1===n.length){if(i=n[0]=n[0].slice(0),i.length>2&&"ID"===(j=i[0]).type&&9===b.nodeType&&p&&d.relative[i[1].type]){if(b=(d.find.ID(j.matches[0].replace(_,aa),b)||[])[0],!b)return c;m&&(b=b.parentNode),a=a.slice(i.shift().value.length)}f=V.needsContext.test(a)?0:i.length;while(f--){if(j=i[f],d.relative[k=j.type])break;if((l=d.find[k])&&(e=l(j.matches[0].replace(_,aa),$.test(i[0].type)&&qa(b.parentNode)||b))){if(i.splice(f,1),a=e.length&&sa(i),!a)return G.apply(c,e),c;break}}}return(m||h(a,n))(e,b,!p,c,!b||$.test(a)&&qa(b.parentNode)||b),c},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("fieldset"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){if(!c)return a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){if(!c&&"input"===a.nodeName.toLowerCase())return a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(J,function(a,b,c){var d;if(!c)return a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);r.find=x,r.expr=x.selectors,r.expr[":"]=r.expr.pseudos,r.uniqueSort=r.unique=x.uniqueSort,r.text=x.getText,r.isXMLDoc=x.isXML,r.contains=x.contains,r.escapeSelector=x.escape;var y=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&r(a).is(c))break;d.push(a)}return d},z=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},A=r.expr.match.needsContext,B=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,C=/^.[^:#\[\.,]*$/;function D(a,b,c){return r.isFunction(b)?r.grep(a,function(a,d){return!!b.call(a,d,a)!==c}):b.nodeType?r.grep(a,function(a){return a===b!==c}):"string"!=typeof b?r.grep(a,function(a){return i.call(b,a)>-1!==c}):C.test(b)?r.filter(b,a,c):(b=r.filter(b,a),r.grep(a,function(a){return i.call(b,a)>-1!==c&&1===a.nodeType}))}r.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?r.find.matchesSelector(d,a)?[d]:[]:r.find.matches(a,r.grep(b,function(a){return 1===a.nodeType}))},r.fn.extend({find:function(a){var b,c,d=this.length,e=this;if("string"!=typeof a)return this.pushStack(r(a).filter(function(){for(b=0;b<d;b++)if(r.contains(e[b],this))return!0}));for(c=this.pushStack([]),b=0;b<d;b++)r.find(a,e[b],c);return d>1?r.uniqueSort(c):c},filter:function(a){return this.pushStack(D(this,a||[],!1))},not:function(a){return this.pushStack(D(this,a||[],!0))},is:function(a){return!!D(this,"string"==typeof a&&A.test(a)?r(a):a||[],!1).length}});var E,F=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,G=r.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||E,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:F.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof r?b[0]:b,r.merge(this,r.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),B.test(e[1])&&r.isPlainObject(b))for(e in b)r.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&(this[0]=f,this.length=1),this}return a.nodeType?(this[0]=a,this.length=1,this):r.isFunction(a)?void 0!==c.ready?c.ready(a):a(r):r.makeArray(a,this)};G.prototype=r.fn,E=r(d);var H=/^(?:parents|prev(?:Until|All))/,I={children:!0,contents:!0,next:!0,prev:!0};r.fn.extend({has:function(a){var b=r(a,this),c=b.length;return this.filter(function(){for(var a=0;a<c;a++)if(r.contains(this,b[a]))return!0})},closest:function(a,b){var c,d=0,e=this.length,f=[],g="string"!=typeof a&&r(a);if(!A.test(a))for(;d<e;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&r.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?r.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?i.call(r(a),this[0]):i.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(r.uniqueSort(r.merge(this.get(),r(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function J(a,b){while((a=a[b])&&1!==a.nodeType);return a}r.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return y(a,"parentNode")},parentsUntil:function(a,b,c){return y(a,"parentNode",c)},next:function(a){return J(a,"nextSibling")},prev:function(a){return J(a,"previousSibling")},nextAll:function(a){return y(a,"nextSibling")},prevAll:function(a){return y(a,"previousSibling")},nextUntil:function(a,b,c){return y(a,"nextSibling",c)},prevUntil:function(a,b,c){return y(a,"previousSibling",c)},siblings:function(a){return z((a.parentNode||{}).firstChild,a)},children:function(a){return z(a.firstChild)},contents:function(a){return a.contentDocument||r.merge([],a.childNodes)}},function(a,b){r.fn[a]=function(c,d){var e=r.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=r.filter(d,e)),this.length>1&&(I[a]||r.uniqueSort(e),H.test(a)&&e.reverse()),this.pushStack(e)}});var K=/[^\x20\t\r\n\f]+/g;function L(a){var b={};return r.each(a.match(K)||[],function(a,c){b[c]=!0}),b}r.Callbacks=function(a){a="string"==typeof a?L(a):r.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){r.each(b,function(b,c){r.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==r.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return r.each(arguments,function(a,b){var c;while((c=r.inArray(b,f,c))>-1)f.splice(c,1),c<=h&&h--}),this},has:function(a){return a?r.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||b||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j};function M(a){return a}function N(a){throw a}function O(a,b,c){var d;try{a&&r.isFunction(d=a.promise)?d.call(a).done(b).fail(c):a&&r.isFunction(d=a.then)?d.call(a,b,c):b.call(void 0,a)}catch(a){c.call(void 0,a)}}r.extend({Deferred:function(b){var c=[["notify","progress",r.Callbacks("memory"),r.Callbacks("memory"),2],["resolve","done",r.Callbacks("once memory"),r.Callbacks("once memory"),0,"resolved"],["reject","fail",r.Callbacks("once memory"),r.Callbacks("once memory"),1,"rejected"]],d="pending",e={state:function(){return d},always:function(){return f.done(arguments).fail(arguments),this},"catch":function(a){return e.then(null,a)},pipe:function(){var a=arguments;return r.Deferred(function(b){r.each(c,function(c,d){var e=r.isFunction(a[d[4]])&&a[d[4]];f[d[1]](function(){var a=e&&e.apply(this,arguments);a&&r.isFunction(a.promise)?a.promise().progress(b.notify).done(b.resolve).fail(b.reject):b[d[0]+"With"](this,e?[a]:arguments)})}),a=null}).promise()},then:function(b,d,e){var f=0;function g(b,c,d,e){return function(){var h=this,i=arguments,j=function(){var a,j;if(!(b<f)){if(a=d.apply(h,i),a===c.promise())throw new TypeError("Thenable self-resolution");j=a&&("object"==typeof a||"function"==typeof a)&&a.then,r.isFunction(j)?e?j.call(a,g(f,c,M,e),g(f,c,N,e)):(f++,j.call(a,g(f,c,M,e),g(f,c,N,e),g(f,c,M,c.notifyWith))):(d!==M&&(h=void 0,i=[a]),(e||c.resolveWith)(h,i))}},k=e?j:function(){try{j()}catch(a){r.Deferred.exceptionHook&&r.Deferred.exceptionHook(a,k.stackTrace),b+1>=f&&(d!==N&&(h=void 0,i=[a]),c.rejectWith(h,i))}};b?k():(r.Deferred.getStackHook&&(k.stackTrace=r.Deferred.getStackHook()),a.setTimeout(k))}}return r.Deferred(function(a){c[0][3].add(g(0,a,r.isFunction(e)?e:M,a.notifyWith)),c[1][3].add(g(0,a,r.isFunction(b)?b:M)),c[2][3].add(g(0,a,r.isFunction(d)?d:N))}).promise()},promise:function(a){return null!=a?r.extend(a,e):e}},f={};return r.each(c,function(a,b){var g=b[2],h=b[5];e[b[1]]=g.add,h&&g.add(function(){d=h},c[3-a][2].disable,c[0][2].lock),g.add(b[3].fire),f[b[0]]=function(){return f[b[0]+"With"](this===f?void 0:this,arguments),this},f[b[0]+"With"]=g.fireWith}),e.promise(f),b&&b.call(f,f),f},when:function(a){var b=arguments.length,c=b,d=Array(c),e=f.call(arguments),g=r.Deferred(),h=function(a){return function(c){d[a]=this,e[a]=arguments.length>1?f.call(arguments):c,--b||g.resolveWith(d,e)}};if(b<=1&&(O(a,g.done(h(c)).resolve,g.reject),"pending"===g.state()||r.isFunction(e[c]&&e[c].then)))return g.then();while(c--)O(e[c],h(c),g.reject);return g.promise()}});var P=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;r.Deferred.exceptionHook=function(b,c){a.console&&a.console.warn&&b&&P.test(b.name)&&a.console.warn("jQuery.Deferred exception: "+b.message,b.stack,c)},r.readyException=function(b){a.setTimeout(function(){throw b})};var Q=r.Deferred();r.fn.ready=function(a){return Q.then(a)["catch"](function(a){r.readyException(a)}),this},r.extend({isReady:!1,readyWait:1,holdReady:function(a){a?r.readyWait++:r.ready(!0)},ready:function(a){(a===!0?--r.readyWait:r.isReady)||(r.isReady=!0,a!==!0&&--r.readyWait>0||Q.resolveWith(d,[r]))}}),r.ready.then=Q.then;function R(){d.removeEventListener("DOMContentLoaded",R),
a.removeEventListener("load",R),r.ready()}"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(r.ready):(d.addEventListener("DOMContentLoaded",R),a.addEventListener("load",R));var S=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===r.type(c)){e=!0;for(h in c)S(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,r.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(r(a),c)})),b))for(;h<i;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},T=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function U(){this.expando=r.expando+U.uid++}U.uid=1,U.prototype={cache:function(a){var b=a[this.expando];return b||(b={},T(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[r.camelCase(b)]=c;else for(d in b)e[r.camelCase(d)]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][r.camelCase(b)]},access:function(a,b,c){return void 0===b||b&&"string"==typeof b&&void 0===c?this.get(a,b):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d=a[this.expando];if(void 0!==d){if(void 0!==b){r.isArray(b)?b=b.map(r.camelCase):(b=r.camelCase(b),b=b in d?[b]:b.match(K)||[]),c=b.length;while(c--)delete d[b[c]]}(void 0===b||r.isEmptyObject(d))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!r.isEmptyObject(b)}};var V=new U,W=new U,X=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Y=/[A-Z]/g;function Z(a){return"true"===a||"false"!==a&&("null"===a?null:a===+a+""?+a:X.test(a)?JSON.parse(a):a)}function $(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Y,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c=Z(c)}catch(e){}W.set(a,b,c)}else c=void 0;return c}r.extend({hasData:function(a){return W.hasData(a)||V.hasData(a)},data:function(a,b,c){return W.access(a,b,c)},removeData:function(a,b){W.remove(a,b)},_data:function(a,b,c){return V.access(a,b,c)},_removeData:function(a,b){V.remove(a,b)}}),r.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=W.get(f),1===f.nodeType&&!V.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=r.camelCase(d.slice(5)),$(f,d,e[d])));V.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){W.set(this,a)}):S(this,function(b){var c;if(f&&void 0===b){if(c=W.get(f,a),void 0!==c)return c;if(c=$(f,a),void 0!==c)return c}else this.each(function(){W.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){W.remove(this,a)})}}),r.extend({queue:function(a,b,c){var d;if(a)return b=(b||"fx")+"queue",d=V.get(a,b),c&&(!d||r.isArray(c)?d=V.access(a,b,r.makeArray(c)):d.push(c)),d||[]},dequeue:function(a,b){b=b||"fx";var c=r.queue(a,b),d=c.length,e=c.shift(),f=r._queueHooks(a,b),g=function(){r.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return V.get(a,c)||V.access(a,c,{empty:r.Callbacks("once memory").add(function(){V.remove(a,[b+"queue",c])})})}}),r.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?r.queue(this[0],a):void 0===b?this:this.each(function(){var c=r.queue(this,a,b);r._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&r.dequeue(this,a)})},dequeue:function(a){return this.each(function(){r.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=r.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=V.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var _=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,aa=new RegExp("^(?:([+-])=|)("+_+")([a-z%]*)$","i"),ba=["Top","Right","Bottom","Left"],ca=function(a,b){return a=b||a,"none"===a.style.display||""===a.style.display&&r.contains(a.ownerDocument,a)&&"none"===r.css(a,"display")},da=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};function ea(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return r.css(a,b,"")},i=h(),j=c&&c[3]||(r.cssNumber[b]?"":"px"),k=(r.cssNumber[b]||"px"!==j&&+i)&&aa.exec(r.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,r.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var fa={};function ga(a){var b,c=a.ownerDocument,d=a.nodeName,e=fa[d];return e?e:(b=c.body.appendChild(c.createElement(d)),e=r.css(b,"display"),b.parentNode.removeChild(b),"none"===e&&(e="block"),fa[d]=e,e)}function ha(a,b){for(var c,d,e=[],f=0,g=a.length;f<g;f++)d=a[f],d.style&&(c=d.style.display,b?("none"===c&&(e[f]=V.get(d,"display")||null,e[f]||(d.style.display="")),""===d.style.display&&ca(d)&&(e[f]=ga(d))):"none"!==c&&(e[f]="none",V.set(d,"display",c)));for(f=0;f<g;f++)null!=e[f]&&(a[f].style.display=e[f]);return a}r.fn.extend({show:function(){return ha(this,!0)},hide:function(){return ha(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){ca(this)?r(this).show():r(this).hide()})}});var ia=/^(?:checkbox|radio)$/i,ja=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,ka=/^$|\/(?:java|ecma)script/i,la={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};la.optgroup=la.option,la.tbody=la.tfoot=la.colgroup=la.caption=la.thead,la.th=la.td;function ma(a,b){var c;return c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[],void 0===b||b&&r.nodeName(a,b)?r.merge([a],c):c}function na(a,b){for(var c=0,d=a.length;c<d;c++)V.set(a[c],"globalEval",!b||V.get(b[c],"globalEval"))}var oa=/<|&#?\w+;/;function pa(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],n=0,o=a.length;n<o;n++)if(f=a[n],f||0===f)if("object"===r.type(f))r.merge(m,f.nodeType?[f]:f);else if(oa.test(f)){g=g||l.appendChild(b.createElement("div")),h=(ja.exec(f)||["",""])[1].toLowerCase(),i=la[h]||la._default,g.innerHTML=i[1]+r.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;r.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",n=0;while(f=m[n++])if(d&&r.inArray(f,d)>-1)e&&e.push(f);else if(j=r.contains(f.ownerDocument,f),g=ma(l.appendChild(f),"script"),j&&na(g),c){k=0;while(f=g[k++])ka.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),o.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",o.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var qa=d.documentElement,ra=/^key/,sa=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,ta=/^([^.]*)(?:\.(.+)|)/;function ua(){return!0}function va(){return!1}function wa(){try{return d.activeElement}catch(a){}}function xa(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)xa(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=va;else if(!e)return a;return 1===f&&(g=e,e=function(a){return r().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=r.guid++)),a.each(function(){r.event.add(this,b,e,d,c)})}r.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=V.get(a);if(q){c.handler&&(f=c,c=f.handler,e=f.selector),e&&r.find.matchesSelector(qa,e),c.guid||(c.guid=r.guid++),(i=q.events)||(i=q.events={}),(g=q.handle)||(g=q.handle=function(b){return"undefined"!=typeof r&&r.event.triggered!==b.type?r.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(K)||[""],j=b.length;while(j--)h=ta.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n&&(l=r.event.special[n]||{},n=(e?l.delegateType:l.bindType)||n,l=r.event.special[n]||{},k=r.extend({type:n,origType:p,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&r.expr.match.needsContext.test(e),namespace:o.join(".")},f),(m=i[n])||(m=i[n]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,o,g)!==!1||a.addEventListener&&a.addEventListener(n,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),r.event.global[n]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=V.hasData(a)&&V.get(a);if(q&&(i=q.events)){b=(b||"").match(K)||[""],j=b.length;while(j--)if(h=ta.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n){l=r.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=i[n]||[],h=h[2]&&new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&p!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,o,q.handle)!==!1||r.removeEvent(a,n,q.handle),delete i[n])}else for(n in i)r.event.remove(a,n+b[j],c,d,!0);r.isEmptyObject(i)&&V.remove(a,"handle events")}},dispatch:function(a){var b=r.event.fix(a),c,d,e,f,g,h,i=new Array(arguments.length),j=(V.get(this,"events")||{})[b.type]||[],k=r.event.special[b.type]||{};for(i[0]=b,c=1;c<arguments.length;c++)i[c]=arguments[c];if(b.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,b)!==!1){h=r.event.handlers.call(this,b,j),c=0;while((f=h[c++])&&!b.isPropagationStopped()){b.currentTarget=f.elem,d=0;while((g=f.handlers[d++])&&!b.isImmediatePropagationStopped())b.rnamespace&&!b.rnamespace.test(g.namespace)||(b.handleObj=g,b.data=g.data,e=((r.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(b.result=e)===!1&&(b.preventDefault(),b.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,b),b.result}},handlers:function(a,b){var c,d,e,f,g,h=[],i=b.delegateCount,j=a.target;if(i&&j.nodeType&&!("click"===a.type&&a.button>=1))for(;j!==this;j=j.parentNode||this)if(1===j.nodeType&&("click"!==a.type||j.disabled!==!0)){for(f=[],g={},c=0;c<i;c++)d=b[c],e=d.selector+" ",void 0===g[e]&&(g[e]=d.needsContext?r(e,this).index(j)>-1:r.find(e,this,null,[j]).length),g[e]&&f.push(d);f.length&&h.push({elem:j,handlers:f})}return j=this,i<b.length&&h.push({elem:j,handlers:b.slice(i)}),h},addProp:function(a,b){Object.defineProperty(r.Event.prototype,a,{enumerable:!0,configurable:!0,get:r.isFunction(b)?function(){if(this.originalEvent)return b(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[a]},set:function(b){Object.defineProperty(this,a,{enumerable:!0,configurable:!0,writable:!0,value:b})}})},fix:function(a){return a[r.expando]?a:new r.Event(a)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==wa()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===wa()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&r.nodeName(this,"input"))return this.click(),!1},_default:function(a){return r.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},r.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},r.Event=function(a,b){return this instanceof r.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ua:va,this.target=a.target&&3===a.target.nodeType?a.target.parentNode:a.target,this.currentTarget=a.currentTarget,this.relatedTarget=a.relatedTarget):this.type=a,b&&r.extend(this,b),this.timeStamp=a&&a.timeStamp||r.now(),void(this[r.expando]=!0)):new r.Event(a,b)},r.Event.prototype={constructor:r.Event,isDefaultPrevented:va,isPropagationStopped:va,isImmediatePropagationStopped:va,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ua,a&&!this.isSimulated&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ua,a&&!this.isSimulated&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ua,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},r.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(a){var b=a.button;return null==a.which&&ra.test(a.type)?null!=a.charCode?a.charCode:a.keyCode:!a.which&&void 0!==b&&sa.test(a.type)?1&b?1:2&b?3:4&b?2:0:a.which}},r.event.addProp),r.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){r.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||r.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),r.fn.extend({on:function(a,b,c,d){return xa(this,a,b,c,d)},one:function(a,b,c,d){return xa(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,r(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=va),this.each(function(){r.event.remove(this,a,c,b)})}});var ya=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,za=/<script|<style|<link/i,Aa=/checked\s*(?:[^=]|=\s*.checked.)/i,Ba=/^true\/(.*)/,Ca=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Da(a,b){return r.nodeName(a,"table")&&r.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a:a}function Ea(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function Fa(a){var b=Ba.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Ga(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(V.hasData(a)&&(f=V.access(a),g=V.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;c<d;c++)r.event.add(b,e,j[e][c])}W.hasData(a)&&(h=W.access(a),i=r.extend({},h),W.set(b,i))}}function Ha(a,b){var c=b.nodeName.toLowerCase();"input"===c&&ia.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}function Ia(a,b,c,d){b=g.apply([],b);var e,f,h,i,j,k,l=0,m=a.length,n=m-1,q=b[0],s=r.isFunction(q);if(s||m>1&&"string"==typeof q&&!o.checkClone&&Aa.test(q))return a.each(function(e){var f=a.eq(e);s&&(b[0]=q.call(this,e,f.html())),Ia(f,b,c,d)});if(m&&(e=pa(b,a[0].ownerDocument,!1,a,d),f=e.firstChild,1===e.childNodes.length&&(e=f),f||d)){for(h=r.map(ma(e,"script"),Ea),i=h.length;l<m;l++)j=e,l!==n&&(j=r.clone(j,!0,!0),i&&r.merge(h,ma(j,"script"))),c.call(a[l],j,l);if(i)for(k=h[h.length-1].ownerDocument,r.map(h,Fa),l=0;l<i;l++)j=h[l],ka.test(j.type||"")&&!V.access(j,"globalEval")&&r.contains(k,j)&&(j.src?r._evalUrl&&r._evalUrl(j.src):p(j.textContent.replace(Ca,""),k))}return a}function Ja(a,b,c){for(var d,e=b?r.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||r.cleanData(ma(d)),d.parentNode&&(c&&r.contains(d.ownerDocument,d)&&na(ma(d,"script")),d.parentNode.removeChild(d));return a}r.extend({htmlPrefilter:function(a){return a.replace(ya,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=r.contains(a.ownerDocument,a);if(!(o.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||r.isXMLDoc(a)))for(g=ma(h),f=ma(a),d=0,e=f.length;d<e;d++)Ha(f[d],g[d]);if(b)if(c)for(f=f||ma(a),g=g||ma(h),d=0,e=f.length;d<e;d++)Ga(f[d],g[d]);else Ga(a,h);return g=ma(h,"script"),g.length>0&&na(g,!i&&ma(a,"script")),h},cleanData:function(a){for(var b,c,d,e=r.event.special,f=0;void 0!==(c=a[f]);f++)if(T(c)){if(b=c[V.expando]){if(b.events)for(d in b.events)e[d]?r.event.remove(c,d):r.removeEvent(c,d,b.handle);c[V.expando]=void 0}c[W.expando]&&(c[W.expando]=void 0)}}}),r.fn.extend({detach:function(a){return Ja(this,a,!0)},remove:function(a){return Ja(this,a)},text:function(a){return S(this,function(a){return void 0===a?r.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return Ia(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Da(this,a);b.appendChild(a)}})},prepend:function(){return Ia(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Da(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ia(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ia(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(r.cleanData(ma(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null!=a&&a,b=null==b?a:b,this.map(function(){return r.clone(this,a,b)})},html:function(a){return S(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!za.test(a)&&!la[(ja.exec(a)||["",""])[1].toLowerCase()]){a=r.htmlPrefilter(a);try{for(;c<d;c++)b=this[c]||{},1===b.nodeType&&(r.cleanData(ma(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ia(this,arguments,function(b){var c=this.parentNode;r.inArray(this,a)<0&&(r.cleanData(ma(this)),c&&c.replaceChild(b,this))},a)}}),r.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){r.fn[a]=function(a){for(var c,d=[],e=r(a),f=e.length-1,g=0;g<=f;g++)c=g===f?this:this.clone(!0),r(e[g])[b](c),h.apply(d,c.get());return this.pushStack(d)}});var Ka=/^margin/,La=new RegExp("^("+_+")(?!px)[a-z%]+$","i"),Ma=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)};!function(){function b(){if(i){i.style.cssText="box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",i.innerHTML="",qa.appendChild(h);var b=a.getComputedStyle(i);c="1%"!==b.top,g="2px"===b.marginLeft,e="4px"===b.width,i.style.marginRight="50%",f="4px"===b.marginRight,qa.removeChild(h),i=null}}var c,e,f,g,h=d.createElement("div"),i=d.createElement("div");i.style&&(i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",o.clearCloneStyle="content-box"===i.style.backgroundClip,h.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",h.appendChild(i),r.extend(o,{pixelPosition:function(){return b(),c},boxSizingReliable:function(){return b(),e},pixelMarginRight:function(){return b(),f},reliableMarginLeft:function(){return b(),g}}))}();function Na(a,b,c){var d,e,f,g,h=a.style;return c=c||Ma(a),c&&(g=c.getPropertyValue(b)||c[b],""!==g||r.contains(a.ownerDocument,a)||(g=r.style(a,b)),!o.pixelMarginRight()&&La.test(g)&&Ka.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function Oa(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Pa=/^(none|table(?!-c[ea]).+)/,Qa={position:"absolute",visibility:"hidden",display:"block"},Ra={letterSpacing:"0",fontWeight:"400"},Sa=["Webkit","Moz","ms"],Ta=d.createElement("div").style;function Ua(a){if(a in Ta)return a;var b=a[0].toUpperCase()+a.slice(1),c=Sa.length;while(c--)if(a=Sa[c]+b,a in Ta)return a}function Va(a,b,c){var d=aa.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Wa(a,b,c,d,e){var f,g=0;for(f=c===(d?"border":"content")?4:"width"===b?1:0;f<4;f+=2)"margin"===c&&(g+=r.css(a,c+ba[f],!0,e)),d?("content"===c&&(g-=r.css(a,"padding"+ba[f],!0,e)),"margin"!==c&&(g-=r.css(a,"border"+ba[f]+"Width",!0,e))):(g+=r.css(a,"padding"+ba[f],!0,e),"padding"!==c&&(g+=r.css(a,"border"+ba[f]+"Width",!0,e)));return g}function Xa(a,b,c){var d,e=!0,f=Ma(a),g="border-box"===r.css(a,"boxSizing",!1,f);if(a.getClientRects().length&&(d=a.getBoundingClientRect()[b]),d<=0||null==d){if(d=Na(a,b,f),(d<0||null==d)&&(d=a.style[b]),La.test(d))return d;e=g&&(o.boxSizingReliable()||d===a.style[b]),d=parseFloat(d)||0}return d+Wa(a,b,c||(g?"border":"content"),e,f)+"px"}r.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Na(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=r.camelCase(b),i=a.style;return b=r.cssProps[h]||(r.cssProps[h]=Ua(h)||h),g=r.cssHooks[b]||r.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=aa.exec(c))&&e[1]&&(c=ea(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(r.cssNumber[h]?"":"px")),o.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=r.camelCase(b);return b=r.cssProps[h]||(r.cssProps[h]=Ua(h)||h),g=r.cssHooks[b]||r.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Na(a,b,d)),"normal"===e&&b in Ra&&(e=Ra[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),r.each(["height","width"],function(a,b){r.cssHooks[b]={get:function(a,c,d){if(c)return!Pa.test(r.css(a,"display"))||a.getClientRects().length&&a.getBoundingClientRect().width?Xa(a,b,d):da(a,Qa,function(){return Xa(a,b,d)})},set:function(a,c,d){var e,f=d&&Ma(a),g=d&&Wa(a,b,d,"border-box"===r.css(a,"boxSizing",!1,f),f);return g&&(e=aa.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=r.css(a,b)),Va(a,c,g)}}}),r.cssHooks.marginLeft=Oa(o.reliableMarginLeft,function(a,b){if(b)return(parseFloat(Na(a,"marginLeft"))||a.getBoundingClientRect().left-da(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px"}),r.each({margin:"",padding:"",border:"Width"},function(a,b){r.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];d<4;d++)e[a+ba[d]+b]=f[d]||f[d-2]||f[0];return e}},Ka.test(a)||(r.cssHooks[a+b].set=Va)}),r.fn.extend({css:function(a,b){return S(this,function(a,b,c){var d,e,f={},g=0;if(r.isArray(b)){for(d=Ma(a),e=b.length;g<e;g++)f[b[g]]=r.css(a,b[g],!1,d);return f}return void 0!==c?r.style(a,b,c):r.css(a,b)},a,b,arguments.length>1)}});function Ya(a,b,c,d,e){return new Ya.prototype.init(a,b,c,d,e)}r.Tween=Ya,Ya.prototype={constructor:Ya,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||r.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(r.cssNumber[c]?"":"px")},cur:function(){var a=Ya.propHooks[this.prop];return a&&a.get?a.get(this):Ya.propHooks._default.get(this)},run:function(a){var b,c=Ya.propHooks[this.prop];return this.options.duration?this.pos=b=r.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Ya.propHooks._default.set(this),this}},Ya.prototype.init.prototype=Ya.prototype,Ya.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=r.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){r.fx.step[a.prop]?r.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[r.cssProps[a.prop]]&&!r.cssHooks[a.prop]?a.elem[a.prop]=a.now:r.style(a.elem,a.prop,a.now+a.unit)}}},Ya.propHooks.scrollTop=Ya.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},r.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},r.fx=Ya.prototype.init,r.fx.step={};var Za,$a,_a=/^(?:toggle|show|hide)$/,ab=/queueHooks$/;function bb(){$a&&(a.requestAnimationFrame(bb),r.fx.tick())}function cb(){return a.setTimeout(function(){Za=void 0}),Za=r.now()}function db(a,b){var c,d=0,e={height:a};for(b=b?1:0;d<4;d+=2-b)c=ba[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function eb(a,b,c){for(var d,e=(hb.tweeners[b]||[]).concat(hb.tweeners["*"]),f=0,g=e.length;f<g;f++)if(d=e[f].call(c,b,a))return d}function fb(a,b,c){var d,e,f,g,h,i,j,k,l="width"in b||"height"in b,m=this,n={},o=a.style,p=a.nodeType&&ca(a),q=V.get(a,"fxshow");c.queue||(g=r._queueHooks(a,"fx"),null==g.unqueued&&(g.unqueued=0,h=g.empty.fire,g.empty.fire=function(){g.unqueued||h()}),g.unqueued++,m.always(function(){m.always(function(){g.unqueued--,r.queue(a,"fx").length||g.empty.fire()})}));for(d in b)if(e=b[d],_a.test(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}n[d]=q&&q[d]||r.style(a,d)}if(i=!r.isEmptyObject(b),i||!r.isEmptyObject(n)){l&&1===a.nodeType&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=q&&q.display,null==j&&(j=V.get(a,"display")),k=r.css(a,"display"),"none"===k&&(j?k=j:(ha([a],!0),j=a.style.display||j,k=r.css(a,"display"),ha([a]))),("inline"===k||"inline-block"===k&&null!=j)&&"none"===r.css(a,"float")&&(i||(m.done(function(){o.display=j}),null==j&&(k=o.display,j="none"===k?"":k)),o.display="inline-block")),c.overflow&&(o.overflow="hidden",m.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]})),i=!1;for(d in n)i||(q?"hidden"in q&&(p=q.hidden):q=V.access(a,"fxshow",{display:j}),f&&(q.hidden=!p),p&&ha([a],!0),m.done(function(){p||ha([a]),V.remove(a,"fxshow");for(d in n)r.style(a,d,n[d])})),i=eb(p?q[d]:0,d,m),d in q||(q[d]=i.start,p&&(i.end=i.start,i.start=0))}}function gb(a,b){var c,d,e,f,g;for(c in a)if(d=r.camelCase(c),e=b[d],f=a[c],r.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=r.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function hb(a,b,c){var d,e,f=0,g=hb.prefilters.length,h=r.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Za||cb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;g<i;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),f<1&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:r.extend({},b),opts:r.extend(!0,{specialEasing:{},easing:r.easing._default},c),originalProperties:b,originalOptions:c,startTime:Za||cb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=r.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;c<d;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(gb(k,j.opts.specialEasing);f<g;f++)if(d=hb.prefilters[f].call(j,a,k,j.opts))return r.isFunction(d.stop)&&(r._queueHooks(j.elem,j.opts.queue).stop=r.proxy(d.stop,d)),d;return r.map(k,eb,j),r.isFunction(j.opts.start)&&j.opts.start.call(a,j),r.fx.timer(r.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}r.Animation=r.extend(hb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return ea(c.elem,a,aa.exec(b),c),c}]},tweener:function(a,b){r.isFunction(a)?(b=a,a=["*"]):a=a.match(K);for(var c,d=0,e=a.length;d<e;d++)c=a[d],hb.tweeners[c]=hb.tweeners[c]||[],hb.tweeners[c].unshift(b)},prefilters:[fb],prefilter:function(a,b){b?hb.prefilters.unshift(a):hb.prefilters.push(a)}}),r.speed=function(a,b,c){var e=a&&"object"==typeof a?r.extend({},a):{complete:c||!c&&b||r.isFunction(a)&&a,duration:a,easing:c&&b||b&&!r.isFunction(b)&&b};return r.fx.off||d.hidden?e.duration=0:"number"!=typeof e.duration&&(e.duration in r.fx.speeds?e.duration=r.fx.speeds[e.duration]:e.duration=r.fx.speeds._default),null!=e.queue&&e.queue!==!0||(e.queue="fx"),e.old=e.complete,e.complete=function(){r.isFunction(e.old)&&e.old.call(this),e.queue&&r.dequeue(this,e.queue)},e},r.fn.extend({fadeTo:function(a,b,c,d){return this.filter(ca).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=r.isEmptyObject(a),f=r.speed(b,c,d),g=function(){var b=hb(this,r.extend({},a),f);(e||V.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=r.timers,g=V.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&ab.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||r.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=V.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=r.timers,g=d?d.length:0;for(c.finish=!0,r.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;b<g;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),r.each(["toggle","show","hide"],function(a,b){var c=r.fn[b];r.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(db(b,!0),a,d,e)}}),r.each({slideDown:db("show"),slideUp:db("hide"),slideToggle:db("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){r.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),r.timers=[],r.fx.tick=function(){var a,b=0,c=r.timers;for(Za=r.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||r.fx.stop(),Za=void 0},r.fx.timer=function(a){r.timers.push(a),a()?r.fx.start():r.timers.pop()},r.fx.interval=13,r.fx.start=function(){$a||($a=a.requestAnimationFrame?a.requestAnimationFrame(bb):a.setInterval(r.fx.tick,r.fx.interval))},r.fx.stop=function(){a.cancelAnimationFrame?a.cancelAnimationFrame($a):a.clearInterval($a),$a=null},r.fx.speeds={slow:600,fast:200,_default:400},r.fn.delay=function(b,c){return b=r.fx?r.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",o.checkOn=""!==a.value,o.optSelected=c.selected,a=d.createElement("input"),a.value="t",a.type="radio",o.radioValue="t"===a.value}();var ib,jb=r.expr.attrHandle;r.fn.extend({attr:function(a,b){return S(this,r.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){r.removeAttr(this,a)})}}),r.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?r.prop(a,b,c):(1===f&&r.isXMLDoc(a)||(e=r.attrHooks[b.toLowerCase()]||(r.expr.match.bool.test(b)?ib:void 0)),
void 0!==c?null===c?void r.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=r.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!o.radioValue&&"radio"===b&&r.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d=0,e=b&&b.match(K);if(e&&1===a.nodeType)while(c=e[d++])a.removeAttribute(c)}}),ib={set:function(a,b,c){return b===!1?r.removeAttr(a,c):a.setAttribute(c,c),c}},r.each(r.expr.match.bool.source.match(/\w+/g),function(a,b){var c=jb[b]||r.find.attr;jb[b]=function(a,b,d){var e,f,g=b.toLowerCase();return d||(f=jb[g],jb[g]=e,e=null!=c(a,b,d)?g:null,jb[g]=f),e}});var kb=/^(?:input|select|textarea|button)$/i,lb=/^(?:a|area)$/i;r.fn.extend({prop:function(a,b){return S(this,r.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[r.propFix[a]||a]})}}),r.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&r.isXMLDoc(a)||(b=r.propFix[b]||b,e=r.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=r.find.attr(a,"tabindex");return b?parseInt(b,10):kb.test(a.nodeName)||lb.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),o.optSelected||(r.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),r.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){r.propFix[this.toLowerCase()]=this});function mb(a){var b=a.match(K)||[];return b.join(" ")}function nb(a){return a.getAttribute&&a.getAttribute("class")||""}r.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).addClass(a.call(this,b,nb(this)))});if("string"==typeof a&&a){b=a.match(K)||[];while(c=this[i++])if(e=nb(c),d=1===c.nodeType&&" "+mb(e)+" "){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=mb(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).removeClass(a.call(this,b,nb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(K)||[];while(c=this[i++])if(e=nb(c),d=1===c.nodeType&&" "+mb(e)+" "){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=mb(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):r.isFunction(a)?this.each(function(c){r(this).toggleClass(a.call(this,c,nb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=r(this),f=a.match(K)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=nb(this),b&&V.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":V.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+mb(nb(c))+" ").indexOf(b)>-1)return!0;return!1}});var ob=/\r/g;r.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=r.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,r(this).val()):a,null==e?e="":"number"==typeof e?e+="":r.isArray(e)&&(e=r.map(e,function(a){return null==a?"":a+""})),b=r.valHooks[this.type]||r.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=r.valHooks[e.type]||r.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(ob,""):null==c?"":c)}}}),r.extend({valHooks:{option:{get:function(a){var b=r.find.attr(a,"value");return null!=b?b:mb(r.text(a))}},select:{get:function(a){var b,c,d,e=a.options,f=a.selectedIndex,g="select-one"===a.type,h=g?null:[],i=g?f+1:e.length;for(d=f<0?i:g?f:0;d<i;d++)if(c=e[d],(c.selected||d===f)&&!c.disabled&&(!c.parentNode.disabled||!r.nodeName(c.parentNode,"optgroup"))){if(b=r(c).val(),g)return b;h.push(b)}return h},set:function(a,b){var c,d,e=a.options,f=r.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=r.inArray(r.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),r.each(["radio","checkbox"],function(){r.valHooks[this]={set:function(a,b){if(r.isArray(b))return a.checked=r.inArray(r(a).val(),b)>-1}},o.checkOn||(r.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var pb=/^(?:focusinfocus|focusoutblur)$/;r.extend(r.event,{trigger:function(b,c,e,f){var g,h,i,j,k,m,n,o=[e||d],p=l.call(b,"type")?b.type:b,q=l.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!pb.test(p+r.event.triggered)&&(p.indexOf(".")>-1&&(q=p.split("."),p=q.shift(),q.sort()),k=p.indexOf(":")<0&&"on"+p,b=b[r.expando]?b:new r.Event(p,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=q.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:r.makeArray(c,[b]),n=r.event.special[p]||{},f||!n.trigger||n.trigger.apply(e,c)!==!1)){if(!f&&!n.noBubble&&!r.isWindow(e)){for(j=n.delegateType||p,pb.test(j+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),i=h;i===(e.ownerDocument||d)&&o.push(i.defaultView||i.parentWindow||a)}g=0;while((h=o[g++])&&!b.isPropagationStopped())b.type=g>1?j:n.bindType||p,m=(V.get(h,"events")||{})[b.type]&&V.get(h,"handle"),m&&m.apply(h,c),m=k&&h[k],m&&m.apply&&T(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=p,f||b.isDefaultPrevented()||n._default&&n._default.apply(o.pop(),c)!==!1||!T(e)||k&&r.isFunction(e[p])&&!r.isWindow(e)&&(i=e[k],i&&(e[k]=null),r.event.triggered=p,e[p](),r.event.triggered=void 0,i&&(e[k]=i)),b.result}},simulate:function(a,b,c){var d=r.extend(new r.Event,c,{type:a,isSimulated:!0});r.event.trigger(d,null,b)}}),r.fn.extend({trigger:function(a,b){return this.each(function(){r.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];if(c)return r.event.trigger(a,b,c,!0)}}),r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(a,b){r.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),r.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),o.focusin="onfocusin"in a,o.focusin||r.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){r.event.simulate(b,a.target,r.event.fix(a))};r.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=V.access(d,b);e||d.addEventListener(a,c,!0),V.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=V.access(d,b)-1;e?V.access(d,b,e):(d.removeEventListener(a,c,!0),V.remove(d,b))}}});var qb=a.location,rb=r.now(),sb=/\?/;r.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return c&&!c.getElementsByTagName("parsererror").length||r.error("Invalid XML: "+b),c};var tb=/\[\]$/,ub=/\r?\n/g,vb=/^(?:submit|button|image|reset|file)$/i,wb=/^(?:input|select|textarea|keygen)/i;function xb(a,b,c,d){var e;if(r.isArray(b))r.each(b,function(b,e){c||tb.test(a)?d(a,e):xb(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==r.type(b))d(a,b);else for(e in b)xb(a+"["+e+"]",b[e],c,d)}r.param=function(a,b){var c,d=[],e=function(a,b){var c=r.isFunction(b)?b():b;d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(null==c?"":c)};if(r.isArray(a)||a.jquery&&!r.isPlainObject(a))r.each(a,function(){e(this.name,this.value)});else for(c in a)xb(c,a[c],b,e);return d.join("&")},r.fn.extend({serialize:function(){return r.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=r.prop(this,"elements");return a?r.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!r(this).is(":disabled")&&wb.test(this.nodeName)&&!vb.test(a)&&(this.checked||!ia.test(a))}).map(function(a,b){var c=r(this).val();return null==c?null:r.isArray(c)?r.map(c,function(a){return{name:b.name,value:a.replace(ub,"\r\n")}}):{name:b.name,value:c.replace(ub,"\r\n")}}).get()}});var yb=/%20/g,zb=/#.*$/,Ab=/([?&])_=[^&]*/,Bb=/^(.*?):[ \t]*([^\r\n]*)$/gm,Cb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Db=/^(?:GET|HEAD)$/,Eb=/^\/\//,Fb={},Gb={},Hb="*/".concat("*"),Ib=d.createElement("a");Ib.href=qb.href;function Jb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(K)||[];if(r.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Kb(a,b,c,d){var e={},f=a===Gb;function g(h){var i;return e[h]=!0,r.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Lb(a,b){var c,d,e=r.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&r.extend(!0,a,d),a}function Mb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}if(f)return f!==i[0]&&i.unshift(f),c[f]}function Nb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}r.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:qb.href,type:"GET",isLocal:Cb.test(qb.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Hb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":r.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Lb(Lb(a,r.ajaxSettings),b):Lb(r.ajaxSettings,a)},ajaxPrefilter:Jb(Fb),ajaxTransport:Jb(Gb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m,n,o=r.ajaxSetup({},c),p=o.context||o,q=o.context&&(p.nodeType||p.jquery)?r(p):r.event,s=r.Deferred(),t=r.Callbacks("once memory"),u=o.statusCode||{},v={},w={},x="canceled",y={readyState:0,getResponseHeader:function(a){var b;if(k){if(!h){h={};while(b=Bb.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return k?g:null},setRequestHeader:function(a,b){return null==k&&(a=w[a.toLowerCase()]=w[a.toLowerCase()]||a,v[a]=b),this},overrideMimeType:function(a){return null==k&&(o.mimeType=a),this},statusCode:function(a){var b;if(a)if(k)y.always(a[y.status]);else for(b in a)u[b]=[u[b],a[b]];return this},abort:function(a){var b=a||x;return e&&e.abort(b),A(0,b),this}};if(s.promise(y),o.url=((b||o.url||qb.href)+"").replace(Eb,qb.protocol+"//"),o.type=c.method||c.type||o.method||o.type,o.dataTypes=(o.dataType||"*").toLowerCase().match(K)||[""],null==o.crossDomain){j=d.createElement("a");try{j.href=o.url,j.href=j.href,o.crossDomain=Ib.protocol+"//"+Ib.host!=j.protocol+"//"+j.host}catch(z){o.crossDomain=!0}}if(o.data&&o.processData&&"string"!=typeof o.data&&(o.data=r.param(o.data,o.traditional)),Kb(Fb,o,c,y),k)return y;l=r.event&&o.global,l&&0===r.active++&&r.event.trigger("ajaxStart"),o.type=o.type.toUpperCase(),o.hasContent=!Db.test(o.type),f=o.url.replace(zb,""),o.hasContent?o.data&&o.processData&&0===(o.contentType||"").indexOf("application/x-www-form-urlencoded")&&(o.data=o.data.replace(yb,"+")):(n=o.url.slice(f.length),o.data&&(f+=(sb.test(f)?"&":"?")+o.data,delete o.data),o.cache===!1&&(f=f.replace(Ab,"$1"),n=(sb.test(f)?"&":"?")+"_="+rb++ +n),o.url=f+n),o.ifModified&&(r.lastModified[f]&&y.setRequestHeader("If-Modified-Since",r.lastModified[f]),r.etag[f]&&y.setRequestHeader("If-None-Match",r.etag[f])),(o.data&&o.hasContent&&o.contentType!==!1||c.contentType)&&y.setRequestHeader("Content-Type",o.contentType),y.setRequestHeader("Accept",o.dataTypes[0]&&o.accepts[o.dataTypes[0]]?o.accepts[o.dataTypes[0]]+("*"!==o.dataTypes[0]?", "+Hb+"; q=0.01":""):o.accepts["*"]);for(m in o.headers)y.setRequestHeader(m,o.headers[m]);if(o.beforeSend&&(o.beforeSend.call(p,y,o)===!1||k))return y.abort();if(x="abort",t.add(o.complete),y.done(o.success),y.fail(o.error),e=Kb(Gb,o,c,y)){if(y.readyState=1,l&&q.trigger("ajaxSend",[y,o]),k)return y;o.async&&o.timeout>0&&(i=a.setTimeout(function(){y.abort("timeout")},o.timeout));try{k=!1,e.send(v,A)}catch(z){if(k)throw z;A(-1,z)}}else A(-1,"No Transport");function A(b,c,d,h){var j,m,n,v,w,x=c;k||(k=!0,i&&a.clearTimeout(i),e=void 0,g=h||"",y.readyState=b>0?4:0,j=b>=200&&b<300||304===b,d&&(v=Mb(o,y,d)),v=Nb(o,v,y,j),j?(o.ifModified&&(w=y.getResponseHeader("Last-Modified"),w&&(r.lastModified[f]=w),w=y.getResponseHeader("etag"),w&&(r.etag[f]=w)),204===b||"HEAD"===o.type?x="nocontent":304===b?x="notmodified":(x=v.state,m=v.data,n=v.error,j=!n)):(n=x,!b&&x||(x="error",b<0&&(b=0))),y.status=b,y.statusText=(c||x)+"",j?s.resolveWith(p,[m,x,y]):s.rejectWith(p,[y,x,n]),y.statusCode(u),u=void 0,l&&q.trigger(j?"ajaxSuccess":"ajaxError",[y,o,j?m:n]),t.fireWith(p,[y,x]),l&&(q.trigger("ajaxComplete",[y,o]),--r.active||r.event.trigger("ajaxStop")))}return y},getJSON:function(a,b,c){return r.get(a,b,c,"json")},getScript:function(a,b){return r.get(a,void 0,b,"script")}}),r.each(["get","post"],function(a,b){r[b]=function(a,c,d,e){return r.isFunction(c)&&(e=e||d,d=c,c=void 0),r.ajax(r.extend({url:a,type:b,dataType:e,data:c,success:d},r.isPlainObject(a)&&a))}}),r._evalUrl=function(a){return r.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},r.fn.extend({wrapAll:function(a){var b;return this[0]&&(r.isFunction(a)&&(a=a.call(this[0])),b=r(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this},wrapInner:function(a){return r.isFunction(a)?this.each(function(b){r(this).wrapInner(a.call(this,b))}):this.each(function(){var b=r(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=r.isFunction(a);return this.each(function(c){r(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(a){return this.parent(a).not("body").each(function(){r(this).replaceWith(this.childNodes)}),this}}),r.expr.pseudos.hidden=function(a){return!r.expr.pseudos.visible(a)},r.expr.pseudos.visible=function(a){return!!(a.offsetWidth||a.offsetHeight||a.getClientRects().length)},r.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Ob={0:200,1223:204},Pb=r.ajaxSettings.xhr();o.cors=!!Pb&&"withCredentials"in Pb,o.ajax=Pb=!!Pb,r.ajaxTransport(function(b){var c,d;if(o.cors||Pb&&!b.crossDomain)return{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Ob[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}}),r.ajaxPrefilter(function(a){a.crossDomain&&(a.contents.script=!1)}),r.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return r.globalEval(a),a}}}),r.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),r.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=r("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Qb=[],Rb=/(=)\?(?=&|$)|\?\?/;r.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Qb.pop()||r.expando+"_"+rb++;return this[a]=!0,a}}),r.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Rb.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Rb.test(b.data)&&"data");if(h||"jsonp"===b.dataTypes[0])return e=b.jsonpCallback=r.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Rb,"$1"+e):b.jsonp!==!1&&(b.url+=(sb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||r.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?r(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Qb.push(e)),g&&r.isFunction(f)&&f(g[0]),g=f=void 0}),"script"}),o.createHTMLDocument=function(){var a=d.implementation.createHTMLDocument("").body;return a.innerHTML="<form></form><form></form>",2===a.childNodes.length}(),r.parseHTML=function(a,b,c){if("string"!=typeof a)return[];"boolean"==typeof b&&(c=b,b=!1);var e,f,g;return b||(o.createHTMLDocument?(b=d.implementation.createHTMLDocument(""),e=b.createElement("base"),e.href=d.location.href,b.head.appendChild(e)):b=d),f=B.exec(a),g=!c&&[],f?[b.createElement(f[1])]:(f=pa([a],b,g),g&&g.length&&r(g).remove(),r.merge([],f.childNodes))},r.fn.load=function(a,b,c){var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=mb(a.slice(h)),a=a.slice(0,h)),r.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&r.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?r("<div>").append(r.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},r.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){r.fn[b]=function(a){return this.on(b,a)}}),r.expr.pseudos.animated=function(a){return r.grep(r.timers,function(b){return a===b.elem}).length};function Sb(a){return r.isWindow(a)?a:9===a.nodeType&&a.defaultView}r.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=r.css(a,"position"),l=r(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=r.css(a,"top"),i=r.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),r.isFunction(b)&&(b=b.call(a,c,r.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},r.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){r.offset.setOffset(this,a,b)});var b,c,d,e,f=this[0];if(f)return f.getClientRects().length?(d=f.getBoundingClientRect(),d.width||d.height?(e=f.ownerDocument,c=Sb(e),b=e.documentElement,{top:d.top+c.pageYOffset-b.clientTop,left:d.left+c.pageXOffset-b.clientLeft}):d):{top:0,left:0}},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===r.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),r.nodeName(a[0],"html")||(d=a.offset()),d={top:d.top+r.css(a[0],"borderTopWidth",!0),left:d.left+r.css(a[0],"borderLeftWidth",!0)}),{top:b.top-d.top-r.css(c,"marginTop",!0),left:b.left-d.left-r.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===r.css(a,"position"))a=a.offsetParent;return a||qa})}}),r.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;r.fn[a]=function(d){return S(this,function(a,d,e){var f=Sb(a);return void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),r.each(["top","left"],function(a,b){r.cssHooks[b]=Oa(o.pixelPosition,function(a,c){if(c)return c=Na(a,b),La.test(c)?r(a).position()[b]+"px":c})}),r.each({Height:"height",Width:"width"},function(a,b){r.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){r.fn[d]=function(e,f){var g=arguments.length&&(c||"boolean"!=typeof e),h=c||(e===!0||f===!0?"margin":"border");return S(this,function(b,c,e){var f;return r.isWindow(b)?0===d.indexOf("outer")?b["inner"+a]:b.document.documentElement["client"+a]:9===b.nodeType?(f=b.documentElement,Math.max(b.body["scroll"+a],f["scroll"+a],b.body["offset"+a],f["offset"+a],f["client"+a])):void 0===e?r.css(b,c,h):r.style(b,c,e,h)},b,g?e:void 0,g)}})}),r.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),r.parseJSON=JSON.parse,"function"==typeof define&&define.amd&&define("jquery",[],function(){return r});var Tb=a.jQuery,Ub=a.$;return r.noConflict=function(b){return a.$===r&&(a.$=Ub),b&&a.jQuery===r&&(a.jQuery=Tb),r},b||(a.jQuery=a.$=r),r});
;
 /*********************************************************/
/*
Choses a implementer

applyposition et applyColor pour la sandbox
*/

var dest = './dist/',
    level = '/levels/',
    views = './dist/views/',
    screen = 'index',
    countLevel = 0,
    ecrin = false, 

    lang = "fr",
    isFr = true,

    Username = "",
    testing = false,
    aleNumber = '',
    binaire = '',

    codeMirror = null,

    answers = {},
    thisLvlAnswers = {},

    timeOut = 0,

    content = {};

var arrayCookieUser = {
    level1IsVisited: false,
    level2IsVisited: false,
    level3IsVisited: false,
    level4IsVisited: false,
    sandboxIsVisited: false,
    $tabSuccess : [],
    $countHelp : 0,
    $countip : 0,
    $countEncyclo : 0, 
    currentLevel:1
};

var up = 'up',
    haut = 'up',
    down = 'down',
    bas = 'down',
    left = 'left',
    gauche = 'left',
    right = 'right',
    droite = 'right',
    plus = 'up',
    moins = 'down';

var which = 'left',
    isFailedOnce = false;

var textArea = $('.codeMirror')[0],
    codeConfig = {
        mode: "text/javascript",
        theme: "icecoder", 
        lineWrapping: true, 
        lineNumbers: true, 
        autofocus: false
        //matchBrackets: true
    };

$Popup = $('.js-popup');
$content_popup = $Popup.find('.js-content-popup');
$button = $('.js-fleche-popup');
$hoverlay = $('.js-overlay');
//$popup_icon = $('.popup-icon i');

popinIsOpen = false;
tipIsOpened = false;
isNewTip = false;

countip = 0,
    counter = 0;

$tabArchiveTitle = [];
$tabArchiveContent = [];
$tabSuccess = [];
$tabHelpTitle = [];
$tabHelpContent = [];
encycloNameTab = [];
helpNameTab = [];

var level1IsVisited = false,
    level2IsVisited = false,
    level3IsVisited = false,
    level4IsVisited = false,
    sandboxIsVisited = false;

var $countHelp = 0,
    Tip1,
    tipsLevel1,
    Tip2,
    tipsLevel2,
    Tip3,
    tipsLevel3,
    Tip4,
    tipsLevel4,
    Tip5,
    tipsLevel5;

var startTime = 0,
    endTime =0;
var intervale = 0,
    t = 0;

var which = 'left';;
 /*********************************************************/
// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: http://codemirror.net/LICENSE

// This is CodeMirror (http://codemirror.net), a code editor
// implemented in JavaScript on top of the browser's DOM.
//
// You can find some technical background for some of the code below
// at http://marijnhaverbeke.nl/blog/#cm-internals .

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.CodeMirror = factory());
}(this, (function () { 'use strict';

// Kludges for bugs and behavior differences that can't be feature
// detected are enabled based on userAgent etc sniffing.
var userAgent = navigator.userAgent
var platform = navigator.platform

var gecko = /gecko\/\d/i.test(userAgent)
var ie_upto10 = /MSIE \d/.test(userAgent)
var ie_11up = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(userAgent)
var ie = ie_upto10 || ie_11up
var ie_version = ie && (ie_upto10 ? document.documentMode || 6 : ie_11up[1])
var webkit = /WebKit\//.test(userAgent)
var qtwebkit = webkit && /Qt\/\d+\.\d+/.test(userAgent)
var chrome = /Chrome\//.test(userAgent)
var presto = /Opera\//.test(userAgent)
var safari = /Apple Computer/.test(navigator.vendor)
var mac_geMountainLion = /Mac OS X 1\d\D([8-9]|\d\d)\D/.test(userAgent)
var phantom = /PhantomJS/.test(userAgent)

var ios = /AppleWebKit/.test(userAgent) && /Mobile\/\w+/.test(userAgent)
// This is woefully incomplete. Suggestions for alternative methods welcome.
var mobile = ios || /Android|webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(userAgent)
var mac = ios || /Mac/.test(platform)
var chromeOS = /\bCrOS\b/.test(userAgent)
var windows = /win/i.test(platform)

var presto_version = presto && userAgent.match(/Version\/(\d*\.\d*)/)
if (presto_version) { presto_version = Number(presto_version[1]) }
if (presto_version && presto_version >= 15) { presto = false; webkit = true }
// Some browsers use the wrong event properties to signal cmd/ctrl on OS X
var flipCtrlCmd = mac && (qtwebkit || presto && (presto_version == null || presto_version < 12.11))
var captureRightClick = gecko || (ie && ie_version >= 9)

function classTest(cls) { return new RegExp("(^|\\s)" + cls + "(?:$|\\s)\\s*") }

var rmClass = function(node, cls) {
  var current = node.className
  var match = classTest(cls).exec(current)
  if (match) {
    var after = current.slice(match.index + match[0].length)
    node.className = current.slice(0, match.index) + (after ? match[1] + after : "")
  }
}

function removeChildren(e) {
  for (var count = e.childNodes.length; count > 0; --count)
    { e.removeChild(e.firstChild) }
  return e
}

function removeChildrenAndAdd(parent, e) {
  return removeChildren(parent).appendChild(e)
}

function elt(tag, content, className, style) {
  var e = document.createElement(tag)
  if (className) { e.className = className }
  if (style) { e.style.cssText = style }
  if (typeof content == "string") { e.appendChild(document.createTextNode(content)) }
  else if (content) { for (var i = 0; i < content.length; ++i) { e.appendChild(content[i]) } }
  return e
}

var range
if (document.createRange) { range = function(node, start, end, endNode) {
  var r = document.createRange()
  r.setEnd(endNode || node, end)
  r.setStart(node, start)
  return r
} }
else { range = function(node, start, end) {
  var r = document.body.createTextRange()
  try { r.moveToElementText(node.parentNode) }
  catch(e) { return r }
  r.collapse(true)
  r.moveEnd("character", end)
  r.moveStart("character", start)
  return r
} }

function contains(parent, child) {
  if (child.nodeType == 3) // Android browser always returns false when child is a textnode
    { child = child.parentNode }
  if (parent.contains)
    { return parent.contains(child) }
  do {
    if (child.nodeType == 11) { child = child.host }
    if (child == parent) { return true }
  } while (child = child.parentNode)
}

var activeElt = function() {
  var activeElement = document.activeElement
  while (activeElement && activeElement.root && activeElement.root.activeElement)
    { activeElement = activeElement.root.activeElement }
  return activeElement
}
// Older versions of IE throws unspecified error when touching
// document.activeElement in some cases (during loading, in iframe)
if (ie && ie_version < 11) { activeElt = function() {
  try { return document.activeElement }
  catch(e) { return document.body }
} }

function addClass(node, cls) {
  var current = node.className
  if (!classTest(cls).test(current)) { node.className += (current ? " " : "") + cls }
}
function joinClasses(a, b) {
  var as = a.split(" ")
  for (var i = 0; i < as.length; i++)
    { if (as[i] && !classTest(as[i]).test(b)) { b += " " + as[i] } }
  return b
}

var selectInput = function(node) { node.select() }
if (ios) // Mobile Safari apparently has a bug where select() is broken.
  { selectInput = function(node) { node.selectionStart = 0; node.selectionEnd = node.value.length } }
else if (ie) // Suppress mysterious IE10 errors
  { selectInput = function(node) { try { node.select() } catch(_e) {} } }

function bind(f) {
  var args = Array.prototype.slice.call(arguments, 1)
  return function(){return f.apply(null, args)}
}

function copyObj(obj, target, overwrite) {
  if (!target) { target = {} }
  for (var prop in obj)
    { if (obj.hasOwnProperty(prop) && (overwrite !== false || !target.hasOwnProperty(prop)))
      { target[prop] = obj[prop] } }
  return target
}

// Counts the column offset in a string, taking tabs into account.
// Used mostly to find indentation.
function countColumn(string, end, tabSize, startIndex, startValue) {
  if (end == null) {
    end = string.search(/[^\s\u00a0]/)
    if (end == -1) { end = string.length }
  }
  for (var i = startIndex || 0, n = startValue || 0;;) {
    var nextTab = string.indexOf("\t", i)
    if (nextTab < 0 || nextTab >= end)
      { return n + (end - i) }
    n += nextTab - i
    n += tabSize - (n % tabSize)
    i = nextTab + 1
  }
}

function Delayed() {this.id = null}
Delayed.prototype.set = function(ms, f) {
  clearTimeout(this.id)
  this.id = setTimeout(f, ms)
}

function indexOf(array, elt) {
  for (var i = 0; i < array.length; ++i)
    { if (array[i] == elt) { return i } }
  return -1
}

// Number of pixels added to scroller and sizer to hide scrollbar
var scrollerGap = 30

// Returned or thrown by various protocols to signal 'I'm not
// handling this'.
var Pass = {toString: function(){return "CodeMirror.Pass"}}

// Reused option objects for setSelection & friends
var sel_dontScroll = {scroll: false};
var sel_mouse = {origin: "*mouse"};
var sel_move = {origin: "+move"}

// The inverse of countColumn -- find the offset that corresponds to
// a particular column.
function findColumn(string, goal, tabSize) {
  for (var pos = 0, col = 0;;) {
    var nextTab = string.indexOf("\t", pos)
    if (nextTab == -1) { nextTab = string.length }
    var skipped = nextTab - pos
    if (nextTab == string.length || col + skipped >= goal)
      { return pos + Math.min(skipped, goal - col) }
    col += nextTab - pos
    col += tabSize - (col % tabSize)
    pos = nextTab + 1
    if (col >= goal) { return pos }
  }
}

var spaceStrs = [""]
function spaceStr(n) {
  while (spaceStrs.length <= n)
    { spaceStrs.push(lst(spaceStrs) + " ") }
  return spaceStrs[n]
}

function lst(arr) { return arr[arr.length-1] }

function map(array, f) {
  var out = []
  for (var i = 0; i < array.length; i++) { out[i] = f(array[i], i) }
  return out
}

function insertSorted(array, value, score) {
  var pos = 0, priority = score(value)
  while (pos < array.length && score(array[pos]) <= priority) { pos++ }
  array.splice(pos, 0, value)
}

function nothing() {}

function createObj(base, props) {
  var inst
  if (Object.create) {
    inst = Object.create(base)
  } else {
    nothing.prototype = base
    inst = new nothing()
  }
  if (props) { copyObj(props, inst) }
  return inst
}

var nonASCIISingleCaseWordChar = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/
function isWordCharBasic(ch) {
  return /\w/.test(ch) || ch > "\x80" &&
    (ch.toUpperCase() != ch.toLowerCase() || nonASCIISingleCaseWordChar.test(ch))
}
function isWordChar(ch, helper) {
  if (!helper) { return isWordCharBasic(ch) }
  if (helper.source.indexOf("\\w") > -1 && isWordCharBasic(ch)) { return true }
  return helper.test(ch)
}

function isEmpty(obj) {
  for (var n in obj) { if (obj.hasOwnProperty(n) && obj[n]) { return false } }
  return true
}

// Extending unicode characters. A series of a non-extending char +
// any number of extending chars is treated as a single unit as far
// as editing and measuring is concerned. This is not fully correct,
// since some scripts/fonts/browsers also treat other configurations
// of code points as a group.
var extendingChars = /[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/
function isExtendingChar(ch) { return ch.charCodeAt(0) >= 768 && extendingChars.test(ch) }

// The display handles the DOM integration, both for input reading
// and content drawing. It holds references to DOM nodes and
// display-related state.

function Display(place, doc, input) {
  var d = this
  this.input = input

  // Covers bottom-right square when both scrollbars are present.
  d.scrollbarFiller = elt("div", null, "CodeMirror-scrollbar-filler")
  d.scrollbarFiller.setAttribute("cm-not-content", "true")
  // Covers bottom of gutter when coverGutterNextToScrollbar is on
  // and h scrollbar is present.
  d.gutterFiller = elt("div", null, "CodeMirror-gutter-filler")
  d.gutterFiller.setAttribute("cm-not-content", "true")
  // Will contain the actual code, positioned to cover the viewport.
  d.lineDiv = elt("div", null, "CodeMirror-code")
  // Elements are added to these to represent selection and cursors.
  d.selectionDiv = elt("div", null, null, "position: relative; z-index: 1")
  d.cursorDiv = elt("div", null, "CodeMirror-cursors")
  // A visibility: hidden element used to find the size of things.
  d.measure = elt("div", null, "CodeMirror-measure")
  // When lines outside of the viewport are measured, they are drawn in this.
  d.lineMeasure = elt("div", null, "CodeMirror-measure")
  // Wraps everything that needs to exist inside the vertically-padded coordinate system
  d.lineSpace = elt("div", [d.measure, d.lineMeasure, d.selectionDiv, d.cursorDiv, d.lineDiv],
                    null, "position: relative; outline: none")
  // Moved around its parent to cover visible view.
  d.mover = elt("div", [elt("div", [d.lineSpace], "CodeMirror-lines")], null, "position: relative")
  // Set to the height of the document, allowing scrolling.
  d.sizer = elt("div", [d.mover], "CodeMirror-sizer")
  d.sizerWidth = null
  // Behavior of elts with overflow: auto and padding is
  // inconsistent across browsers. This is used to ensure the
  // scrollable area is big enough.
  d.heightForcer = elt("div", null, null, "position: absolute; height: " + scrollerGap + "px; width: 1px;")
  // Will contain the gutters, if any.
  d.gutters = elt("div", null, "CodeMirror-gutters")
  d.lineGutter = null
  // Actual scrollable element.
  d.scroller = elt("div", [d.sizer, d.heightForcer, d.gutters], "CodeMirror-scroll")
  d.scroller.setAttribute("tabIndex", "-1")
  // The element in which the editor lives.
  d.wrapper = elt("div", [d.scrollbarFiller, d.gutterFiller, d.scroller], "CodeMirror")

  // Work around IE7 z-index bug (not perfect, hence IE7 not really being supported)
  if (ie && ie_version < 8) { d.gutters.style.zIndex = -1; d.scroller.style.paddingRight = 0 }
  if (!webkit && !(gecko && mobile)) { d.scroller.draggable = true }

  if (place) {
    if (place.appendChild) { place.appendChild(d.wrapper) }
    else { place(d.wrapper) }
  }

  // Current rendered range (may be bigger than the view window).
  d.viewFrom = d.viewTo = doc.first
  d.reportedViewFrom = d.reportedViewTo = doc.first
  // Information about the rendered lines.
  d.view = []
  d.renderedView = null
  // Holds info about a single rendered line when it was rendered
  // for measurement, while not in view.
  d.externalMeasured = null
  // Empty space (in pixels) above the view
  d.viewOffset = 0
  d.lastWrapHeight = d.lastWrapWidth = 0
  d.updateLineNumbers = null

  d.nativeBarWidth = d.barHeight = d.barWidth = 0
  d.scrollbarsClipped = false

  // Used to only resize the line number gutter when necessary (when
  // the amount of lines crosses a boundary that makes its width change)
  d.lineNumWidth = d.lineNumInnerWidth = d.lineNumChars = null
  // Set to true when a non-horizontal-scrolling line widget is
  // added. As an optimization, line widget aligning is skipped when
  // this is false.
  d.alignWidgets = false

  d.cachedCharWidth = d.cachedTextHeight = d.cachedPaddingH = null

  // Tracks the maximum line length so that the horizontal scrollbar
  // can be kept static when scrolling.
  d.maxLine = null
  d.maxLineLength = 0
  d.maxLineChanged = false

  // Used for measuring wheel scrolling granularity
  d.wheelDX = d.wheelDY = d.wheelStartX = d.wheelStartY = null

  // True when shift is held down.
  d.shift = false

  // Used to track whether anything happened since the context menu
  // was opened.
  d.selForContextMenu = null

  d.activeTouch = null

  input.init(d)
}

// Find the line object corresponding to the given line number.
function getLine(doc, n) {
  n -= doc.first
  if (n < 0 || n >= doc.size) { throw new Error("There is no line " + (n + doc.first) + " in the document.") }
  var chunk = doc
  while (!chunk.lines) {
    for (var i = 0;; ++i) {
      var child = chunk.children[i], sz = child.chunkSize()
      if (n < sz) { chunk = child; break }
      n -= sz
    }
  }
  return chunk.lines[n]
}

// Get the part of a document between two positions, as an array of
// strings.
function getBetween(doc, start, end) {
  var out = [], n = start.line
  doc.iter(start.line, end.line + 1, function (line) {
    var text = line.text
    if (n == end.line) { text = text.slice(0, end.ch) }
    if (n == start.line) { text = text.slice(start.ch) }
    out.push(text)
    ++n
  })
  return out
}
// Get the lines between from and to, as array of strings.
function getLines(doc, from, to) {
  var out = []
  doc.iter(from, to, function (line) { out.push(line.text) }) // iter aborts when callback returns truthy value
  return out
}

// Update the height of a line, propagating the height change
// upwards to parent nodes.
function updateLineHeight(line, height) {
  var diff = height - line.height
  if (diff) { for (var n = line; n; n = n.parent) { n.height += diff } }
}

// Given a line object, find its line number by walking up through
// its parent links.
function lineNo(line) {
  if (line.parent == null) { return null }
  var cur = line.parent, no = indexOf(cur.lines, line)
  for (var chunk = cur.parent; chunk; cur = chunk, chunk = chunk.parent) {
    for (var i = 0;; ++i) {
      if (chunk.children[i] == cur) { break }
      no += chunk.children[i].chunkSize()
    }
  }
  return no + cur.first
}

// Find the line at the given vertical position, using the height
// information in the document tree.
function lineAtHeight(chunk, h) {
  var n = chunk.first
  outer: do {
    for (var i$1 = 0; i$1 < chunk.children.length; ++i$1) {
      var child = chunk.children[i$1], ch = child.height
      if (h < ch) { chunk = child; continue outer }
      h -= ch
      n += child.chunkSize()
    }
    return n
  } while (!chunk.lines)
  var i = 0
  for (; i < chunk.lines.length; ++i) {
    var line = chunk.lines[i], lh = line.height
    if (h < lh) { break }
    h -= lh
  }
  return n + i
}

function isLine(doc, l) {return l >= doc.first && l < doc.first + doc.size}

function lineNumberFor(options, i) {
  return String(options.lineNumberFormatter(i + options.firstLineNumber))
}

// A Pos instance represents a position within the text.
function Pos (line, ch) {
  if (!(this instanceof Pos)) { return new Pos(line, ch) }
  this.line = line; this.ch = ch
}

// Compare two positions, return 0 if they are the same, a negative
// number when a is less, and a positive number otherwise.
function cmp(a, b) { return a.line - b.line || a.ch - b.ch }

function copyPos(x) {return Pos(x.line, x.ch)}
function maxPos(a, b) { return cmp(a, b) < 0 ? b : a }
function minPos(a, b) { return cmp(a, b) < 0 ? a : b }

// Most of the external API clips given positions to make sure they
// actually exist within the document.
function clipLine(doc, n) {return Math.max(doc.first, Math.min(n, doc.first + doc.size - 1))}
function clipPos(doc, pos) {
  if (pos.line < doc.first) { return Pos(doc.first, 0) }
  var last = doc.first + doc.size - 1
  if (pos.line > last) { return Pos(last, getLine(doc, last).text.length) }
  return clipToLen(pos, getLine(doc, pos.line).text.length)
}
function clipToLen(pos, linelen) {
  var ch = pos.ch
  if (ch == null || ch > linelen) { return Pos(pos.line, linelen) }
  else if (ch < 0) { return Pos(pos.line, 0) }
  else { return pos }
}
function clipPosArray(doc, array) {
  var out = []
  for (var i = 0; i < array.length; i++) { out[i] = clipPos(doc, array[i]) }
  return out
}

// Optimize some code when these features are not used.
var sawReadOnlySpans = false;
var sawCollapsedSpans = false

function seeReadOnlySpans() {
  sawReadOnlySpans = true
}

function seeCollapsedSpans() {
  sawCollapsedSpans = true
}

// TEXTMARKER SPANS

function MarkedSpan(marker, from, to) {
  this.marker = marker
  this.from = from; this.to = to
}

// Search an array of spans for a span matching the given marker.
function getMarkedSpanFor(spans, marker) {
  if (spans) { for (var i = 0; i < spans.length; ++i) {
    var span = spans[i]
    if (span.marker == marker) { return span }
  } }
}
// Remove a span from an array, returning undefined if no spans are
// left (we don't store arrays for lines without spans).
function removeMarkedSpan(spans, span) {
  var r
  for (var i = 0; i < spans.length; ++i)
    { if (spans[i] != span) { (r || (r = [])).push(spans[i]) } }
  return r
}
// Add a span to a line.
function addMarkedSpan(line, span) {
  line.markedSpans = line.markedSpans ? line.markedSpans.concat([span]) : [span]
  span.marker.attachLine(line)
}

// Used for the algorithm that adjusts markers for a change in the
// document. These functions cut an array of spans at a given
// character position, returning an array of remaining chunks (or
// undefined if nothing remains).
function markedSpansBefore(old, startCh, isInsert) {
  var nw
  if (old) { for (var i = 0; i < old.length; ++i) {
    var span = old[i], marker = span.marker
    var startsBefore = span.from == null || (marker.inclusiveLeft ? span.from <= startCh : span.from < startCh)
    if (startsBefore || span.from == startCh && marker.type == "bookmark" && (!isInsert || !span.marker.insertLeft)) {
      var endsAfter = span.to == null || (marker.inclusiveRight ? span.to >= startCh : span.to > startCh);(nw || (nw = [])).push(new MarkedSpan(marker, span.from, endsAfter ? null : span.to))
    }
  } }
  return nw
}
function markedSpansAfter(old, endCh, isInsert) {
  var nw
  if (old) { for (var i = 0; i < old.length; ++i) {
    var span = old[i], marker = span.marker
    var endsAfter = span.to == null || (marker.inclusiveRight ? span.to >= endCh : span.to > endCh)
    if (endsAfter || span.from == endCh && marker.type == "bookmark" && (!isInsert || span.marker.insertLeft)) {
      var startsBefore = span.from == null || (marker.inclusiveLeft ? span.from <= endCh : span.from < endCh);(nw || (nw = [])).push(new MarkedSpan(marker, startsBefore ? null : span.from - endCh,
                                            span.to == null ? null : span.to - endCh))
    }
  } }
  return nw
}

// Given a change object, compute the new set of marker spans that
// cover the line in which the change took place. Removes spans
// entirely within the change, reconnects spans belonging to the
// same marker that appear on both sides of the change, and cuts off
// spans partially within the change. Returns an array of span
// arrays with one element for each line in (after) the change.
function stretchSpansOverChange(doc, change) {
  if (change.full) { return null }
  var oldFirst = isLine(doc, change.from.line) && getLine(doc, change.from.line).markedSpans
  var oldLast = isLine(doc, change.to.line) && getLine(doc, change.to.line).markedSpans
  if (!oldFirst && !oldLast) { return null }

  var startCh = change.from.ch, endCh = change.to.ch, isInsert = cmp(change.from, change.to) == 0
  // Get the spans that 'stick out' on both sides
  var first = markedSpansBefore(oldFirst, startCh, isInsert)
  var last = markedSpansAfter(oldLast, endCh, isInsert)

  // Next, merge those two ends
  var sameLine = change.text.length == 1, offset = lst(change.text).length + (sameLine ? startCh : 0)
  if (first) {
    // Fix up .to properties of first
    for (var i = 0; i < first.length; ++i) {
      var span = first[i]
      if (span.to == null) {
        var found = getMarkedSpanFor(last, span.marker)
        if (!found) { span.to = startCh }
        else if (sameLine) { span.to = found.to == null ? null : found.to + offset }
      }
    }
  }
  if (last) {
    // Fix up .from in last (or move them into first in case of sameLine)
    for (var i$1 = 0; i$1 < last.length; ++i$1) {
      var span$1 = last[i$1]
      if (span$1.to != null) { span$1.to += offset }
      if (span$1.from == null) {
        var found$1 = getMarkedSpanFor(first, span$1.marker)
        if (!found$1) {
          span$1.from = offset
          if (sameLine) { (first || (first = [])).push(span$1) }
        }
      } else {
        span$1.from += offset
        if (sameLine) { (first || (first = [])).push(span$1) }
      }
    }
  }
  // Make sure we didn't create any zero-length spans
  if (first) { first = clearEmptySpans(first) }
  if (last && last != first) { last = clearEmptySpans(last) }

  var newMarkers = [first]
  if (!sameLine) {
    // Fill gap with whole-line-spans
    var gap = change.text.length - 2, gapMarkers
    if (gap > 0 && first)
      { for (var i$2 = 0; i$2 < first.length; ++i$2)
        { if (first[i$2].to == null)
          { (gapMarkers || (gapMarkers = [])).push(new MarkedSpan(first[i$2].marker, null, null)) } } }
    for (var i$3 = 0; i$3 < gap; ++i$3)
      { newMarkers.push(gapMarkers) }
    newMarkers.push(last)
  }
  return newMarkers
}

// Remove spans that are empty and don't have a clearWhenEmpty
// option of false.
function clearEmptySpans(spans) {
  for (var i = 0; i < spans.length; ++i) {
    var span = spans[i]
    if (span.from != null && span.from == span.to && span.marker.clearWhenEmpty !== false)
      { spans.splice(i--, 1) }
  }
  if (!spans.length) { return null }
  return spans
}

// Used to 'clip' out readOnly ranges when making a change.
function removeReadOnlyRanges(doc, from, to) {
  var markers = null
  doc.iter(from.line, to.line + 1, function (line) {
    if (line.markedSpans) { for (var i = 0; i < line.markedSpans.length; ++i) {
      var mark = line.markedSpans[i].marker
      if (mark.readOnly && (!markers || indexOf(markers, mark) == -1))
        { (markers || (markers = [])).push(mark) }
    } }
  })
  if (!markers) { return null }
  var parts = [{from: from, to: to}]
  for (var i = 0; i < markers.length; ++i) {
    var mk = markers[i], m = mk.find(0)
    for (var j = 0; j < parts.length; ++j) {
      var p = parts[j]
      if (cmp(p.to, m.from) < 0 || cmp(p.from, m.to) > 0) { continue }
      var newParts = [j, 1], dfrom = cmp(p.from, m.from), dto = cmp(p.to, m.to)
      if (dfrom < 0 || !mk.inclusiveLeft && !dfrom)
        { newParts.push({from: p.from, to: m.from}) }
      if (dto > 0 || !mk.inclusiveRight && !dto)
        { newParts.push({from: m.to, to: p.to}) }
      parts.splice.apply(parts, newParts)
      j += newParts.length - 1
    }
  }
  return parts
}

// Connect or disconnect spans from a line.
function detachMarkedSpans(line) {
  var spans = line.markedSpans
  if (!spans) { return }
  for (var i = 0; i < spans.length; ++i)
    { spans[i].marker.detachLine(line) }
  line.markedSpans = null
}
function attachMarkedSpans(line, spans) {
  if (!spans) { return }
  for (var i = 0; i < spans.length; ++i)
    { spans[i].marker.attachLine(line) }
  line.markedSpans = spans
}

// Helpers used when computing which overlapping collapsed span
// counts as the larger one.
function extraLeft(marker) { return marker.inclusiveLeft ? -1 : 0 }
function extraRight(marker) { return marker.inclusiveRight ? 1 : 0 }

// Returns a number indicating which of two overlapping collapsed
// spans is larger (and thus includes the other). Falls back to
// comparing ids when the spans cover exactly the same range.
function compareCollapsedMarkers(a, b) {
  var lenDiff = a.lines.length - b.lines.length
  if (lenDiff != 0) { return lenDiff }
  var aPos = a.find(), bPos = b.find()
  var fromCmp = cmp(aPos.from, bPos.from) || extraLeft(a) - extraLeft(b)
  if (fromCmp) { return -fromCmp }
  var toCmp = cmp(aPos.to, bPos.to) || extraRight(a) - extraRight(b)
  if (toCmp) { return toCmp }
  return b.id - a.id
}

// Find out whether a line ends or starts in a collapsed span. If
// so, return the marker for that span.
function collapsedSpanAtSide(line, start) {
  var sps = sawCollapsedSpans && line.markedSpans, found
  if (sps) { for (var sp = void 0, i = 0; i < sps.length; ++i) {
    sp = sps[i]
    if (sp.marker.collapsed && (start ? sp.from : sp.to) == null &&
        (!found || compareCollapsedMarkers(found, sp.marker) < 0))
      { found = sp.marker }
  } }
  return found
}
function collapsedSpanAtStart(line) { return collapsedSpanAtSide(line, true) }
function collapsedSpanAtEnd(line) { return collapsedSpanAtSide(line, false) }

// Test whether there exists a collapsed span that partially
// overlaps (covers the start or end, but not both) of a new span.
// Such overlap is not allowed.
function conflictingCollapsedRange(doc, lineNo$$1, from, to, marker) {
  var line = getLine(doc, lineNo$$1)
  var sps = sawCollapsedSpans && line.markedSpans
  if (sps) { for (var i = 0; i < sps.length; ++i) {
    var sp = sps[i]
    if (!sp.marker.collapsed) { continue }
    var found = sp.marker.find(0)
    var fromCmp = cmp(found.from, from) || extraLeft(sp.marker) - extraLeft(marker)
    var toCmp = cmp(found.to, to) || extraRight(sp.marker) - extraRight(marker)
    if (fromCmp >= 0 && toCmp <= 0 || fromCmp <= 0 && toCmp >= 0) { continue }
    if (fromCmp <= 0 && (sp.marker.inclusiveRight && marker.inclusiveLeft ? cmp(found.to, from) >= 0 : cmp(found.to, from) > 0) ||
        fromCmp >= 0 && (sp.marker.inclusiveRight && marker.inclusiveLeft ? cmp(found.from, to) <= 0 : cmp(found.from, to) < 0))
      { return true }
  } }
}

// A visual line is a line as drawn on the screen. Folding, for
// example, can cause multiple logical lines to appear on the same
// visual line. This finds the start of the visual line that the
// given line is part of (usually that is the line itself).
function visualLine(line) {
  var merged
  while (merged = collapsedSpanAtStart(line))
    { line = merged.find(-1, true).line }
  return line
}

// Returns an array of logical lines that continue the visual line
// started by the argument, or undefined if there are no such lines.
function visualLineContinued(line) {
  var merged, lines
  while (merged = collapsedSpanAtEnd(line)) {
    line = merged.find(1, true).line
    ;(lines || (lines = [])).push(line)
  }
  return lines
}

// Get the line number of the start of the visual line that the
// given line number is part of.
function visualLineNo(doc, lineN) {
  var line = getLine(doc, lineN), vis = visualLine(line)
  if (line == vis) { return lineN }
  return lineNo(vis)
}

// Get the line number of the start of the next visual line after
// the given line.
function visualLineEndNo(doc, lineN) {
  if (lineN > doc.lastLine()) { return lineN }
  var line = getLine(doc, lineN), merged
  if (!lineIsHidden(doc, line)) { return lineN }
  while (merged = collapsedSpanAtEnd(line))
    { line = merged.find(1, true).line }
  return lineNo(line) + 1
}

// Compute whether a line is hidden. Lines count as hidden when they
// are part of a visual line that starts with another line, or when
// they are entirely covered by collapsed, non-widget span.
function lineIsHidden(doc, line) {
  var sps = sawCollapsedSpans && line.markedSpans
  if (sps) { for (var sp = void 0, i = 0; i < sps.length; ++i) {
    sp = sps[i]
    if (!sp.marker.collapsed) { continue }
    if (sp.from == null) { return true }
    if (sp.marker.widgetNode) { continue }
    if (sp.from == 0 && sp.marker.inclusiveLeft && lineIsHiddenInner(doc, line, sp))
      { return true }
  } }
}
function lineIsHiddenInner(doc, line, span) {
  if (span.to == null) {
    var end = span.marker.find(1, true)
    return lineIsHiddenInner(doc, end.line, getMarkedSpanFor(end.line.markedSpans, span.marker))
  }
  if (span.marker.inclusiveRight && span.to == line.text.length)
    { return true }
  for (var sp = void 0, i = 0; i < line.markedSpans.length; ++i) {
    sp = line.markedSpans[i]
    if (sp.marker.collapsed && !sp.marker.widgetNode && sp.from == span.to &&
        (sp.to == null || sp.to != span.from) &&
        (sp.marker.inclusiveLeft || span.marker.inclusiveRight) &&
        lineIsHiddenInner(doc, line, sp)) { return true }
  }
}

// Find the height above the given line.
function heightAtLine(lineObj) {
  lineObj = visualLine(lineObj)

  var h = 0, chunk = lineObj.parent
  for (var i = 0; i < chunk.lines.length; ++i) {
    var line = chunk.lines[i]
    if (line == lineObj) { break }
    else { h += line.height }
  }
  for (var p = chunk.parent; p; chunk = p, p = chunk.parent) {
    for (var i$1 = 0; i$1 < p.children.length; ++i$1) {
      var cur = p.children[i$1]
      if (cur == chunk) { break }
      else { h += cur.height }
    }
  }
  return h
}

// Compute the character length of a line, taking into account
// collapsed ranges (see markText) that might hide parts, and join
// other lines onto it.
function lineLength(line) {
  if (line.height == 0) { return 0 }
  var len = line.text.length, merged, cur = line
  while (merged = collapsedSpanAtStart(cur)) {
    var found = merged.find(0, true)
    cur = found.from.line
    len += found.from.ch - found.to.ch
  }
  cur = line
  while (merged = collapsedSpanAtEnd(cur)) {
    var found$1 = merged.find(0, true)
    len -= cur.text.length - found$1.from.ch
    cur = found$1.to.line
    len += cur.text.length - found$1.to.ch
  }
  return len
}

// Find the longest line in the document.
function findMaxLine(cm) {
  var d = cm.display, doc = cm.doc
  d.maxLine = getLine(doc, doc.first)
  d.maxLineLength = lineLength(d.maxLine)
  d.maxLineChanged = true
  doc.iter(function (line) {
    var len = lineLength(line)
    if (len > d.maxLineLength) {
      d.maxLineLength = len
      d.maxLine = line
    }
  })
}

// BIDI HELPERS

function iterateBidiSections(order, from, to, f) {
  if (!order) { return f(from, to, "ltr") }
  var found = false
  for (var i = 0; i < order.length; ++i) {
    var part = order[i]
    if (part.from < to && part.to > from || from == to && part.to == from) {
      f(Math.max(part.from, from), Math.min(part.to, to), part.level == 1 ? "rtl" : "ltr")
      found = true
    }
  }
  if (!found) { f(from, to, "ltr") }
}

function bidiLeft(part) { return part.level % 2 ? part.to : part.from }
function bidiRight(part) { return part.level % 2 ? part.from : part.to }

function lineLeft(line) { var order = getOrder(line); return order ? bidiLeft(order[0]) : 0 }
function lineRight(line) {
  var order = getOrder(line)
  if (!order) { return line.text.length }
  return bidiRight(lst(order))
}

function compareBidiLevel(order, a, b) {
  var linedir = order[0].level
  if (a == linedir) { return true }
  if (b == linedir) { return false }
  return a < b
}

var bidiOther = null
function getBidiPartAt(order, pos) {
  var found
  bidiOther = null
  for (var i = 0; i < order.length; ++i) {
    var cur = order[i]
    if (cur.from < pos && cur.to > pos) { return i }
    if ((cur.from == pos || cur.to == pos)) {
      if (found == null) {
        found = i
      } else if (compareBidiLevel(order, cur.level, order[found].level)) {
        if (cur.from != cur.to) { bidiOther = found }
        return i
      } else {
        if (cur.from != cur.to) { bidiOther = i }
        return found
      }
    }
  }
  return found
}

function moveInLine(line, pos, dir, byUnit) {
  if (!byUnit) { return pos + dir }
  do { pos += dir }
  while (pos > 0 && isExtendingChar(line.text.charAt(pos)))
  return pos
}

// This is needed in order to move 'visually' through bi-directional
// text -- i.e., pressing left should make the cursor go left, even
// when in RTL text. The tricky part is the 'jumps', where RTL and
// LTR text touch each other. This often requires the cursor offset
// to move more than one unit, in order to visually move one unit.
function moveVisually(line, start, dir, byUnit) {
  var bidi = getOrder(line)
  if (!bidi) { return moveLogically(line, start, dir, byUnit) }
  var pos = getBidiPartAt(bidi, start), part = bidi[pos]
  var target = moveInLine(line, start, part.level % 2 ? -dir : dir, byUnit)

  for (;;) {
    if (target > part.from && target < part.to) { return target }
    if (target == part.from || target == part.to) {
      if (getBidiPartAt(bidi, target) == pos) { return target }
      part = bidi[pos += dir]
      return (dir > 0) == part.level % 2 ? part.to : part.from
    } else {
      part = bidi[pos += dir]
      if (!part) { return null }
      if ((dir > 0) == part.level % 2)
        { target = moveInLine(line, part.to, -1, byUnit) }
      else
        { target = moveInLine(line, part.from, 1, byUnit) }
    }
  }
}

function moveLogically(line, start, dir, byUnit) {
  var target = start + dir
  if (byUnit) { while (target > 0 && isExtendingChar(line.text.charAt(target))) { target += dir } }
  return target < 0 || target > line.text.length ? null : target
}

// Bidirectional ordering algorithm
// See http://unicode.org/reports/tr9/tr9-13.html for the algorithm
// that this (partially) implements.

// One-char codes used for character types:
// L (L):   Left-to-Right
// R (R):   Right-to-Left
// r (AL):  Right-to-Left Arabic
// 1 (EN):  European Number
// + (ES):  European Number Separator
// % (ET):  European Number Terminator
// n (AN):  Arabic Number
// , (CS):  Common Number Separator
// m (NSM): Non-Spacing Mark
// b (BN):  Boundary Neutral
// s (B):   Paragraph Separator
// t (S):   Segment Separator
// w (WS):  Whitespace
// N (ON):  Other Neutrals

// Returns null if characters are ordered as they appear
// (left-to-right), or an array of sections ({from, to, level}
// objects) in the order in which they occur visually.
var bidiOrdering = (function() {
  // Character types for codepoints 0 to 0xff
  var lowTypes = "bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN"
  // Character types for codepoints 0x600 to 0x6ff
  var arabicTypes = "rrrrrrrrrrrr,rNNmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmrrrrrrrnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmNmmmm"
  function charType(code) {
    if (code <= 0xf7) { return lowTypes.charAt(code) }
    else if (0x590 <= code && code <= 0x5f4) { return "R" }
    else if (0x600 <= code && code <= 0x6ed) { return arabicTypes.charAt(code - 0x600) }
    else if (0x6ee <= code && code <= 0x8ac) { return "r" }
    else if (0x2000 <= code && code <= 0x200b) { return "w" }
    else if (code == 0x200c) { return "b" }
    else { return "L" }
  }

  var bidiRE = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/
  var isNeutral = /[stwN]/, isStrong = /[LRr]/, countsAsLeft = /[Lb1n]/, countsAsNum = /[1n]/
  // Browsers seem to always treat the boundaries of block elements as being L.
  var outerType = "L"

  function BidiSpan(level, from, to) {
    this.level = level
    this.from = from; this.to = to
  }

  return function(str) {
    if (!bidiRE.test(str)) { return false }
    var len = str.length, types = []
    for (var i = 0; i < len; ++i)
      { types.push(charType(str.charCodeAt(i))) }

    // W1. Examine each non-spacing mark (NSM) in the level run, and
    // change the type of the NSM to the type of the previous
    // character. If the NSM is at the start of the level run, it will
    // get the type of sor.
    for (var i$1 = 0, prev = outerType; i$1 < len; ++i$1) {
      var type = types[i$1]
      if (type == "m") { types[i$1] = prev }
      else { prev = type }
    }

    // W2. Search backwards from each instance of a European number
    // until the first strong type (R, L, AL, or sor) is found. If an
    // AL is found, change the type of the European number to Arabic
    // number.
    // W3. Change all ALs to R.
    for (var i$2 = 0, cur = outerType; i$2 < len; ++i$2) {
      var type$1 = types[i$2]
      if (type$1 == "1" && cur == "r") { types[i$2] = "n" }
      else if (isStrong.test(type$1)) { cur = type$1; if (type$1 == "r") { types[i$2] = "R" } }
    }

    // W4. A single European separator between two European numbers
    // changes to a European number. A single common separator between
    // two numbers of the same type changes to that type.
    for (var i$3 = 1, prev$1 = types[0]; i$3 < len - 1; ++i$3) {
      var type$2 = types[i$3]
      if (type$2 == "+" && prev$1 == "1" && types[i$3+1] == "1") { types[i$3] = "1" }
      else if (type$2 == "," && prev$1 == types[i$3+1] &&
               (prev$1 == "1" || prev$1 == "n")) { types[i$3] = prev$1 }
      prev$1 = type$2
    }

    // W5. A sequence of European terminators adjacent to European
    // numbers changes to all European numbers.
    // W6. Otherwise, separators and terminators change to Other
    // Neutral.
    for (var i$4 = 0; i$4 < len; ++i$4) {
      var type$3 = types[i$4]
      if (type$3 == ",") { types[i$4] = "N" }
      else if (type$3 == "%") {
        var end = void 0
        for (end = i$4 + 1; end < len && types[end] == "%"; ++end) {}
        var replace = (i$4 && types[i$4-1] == "!") || (end < len && types[end] == "1") ? "1" : "N"
        for (var j = i$4; j < end; ++j) { types[j] = replace }
        i$4 = end - 1
      }
    }

    // W7. Search backwards from each instance of a European number
    // until the first strong type (R, L, or sor) is found. If an L is
    // found, then change the type of the European number to L.
    for (var i$5 = 0, cur$1 = outerType; i$5 < len; ++i$5) {
      var type$4 = types[i$5]
      if (cur$1 == "L" && type$4 == "1") { types[i$5] = "L" }
      else if (isStrong.test(type$4)) { cur$1 = type$4 }
    }

    // N1. A sequence of neutrals takes the direction of the
    // surrounding strong text if the text on both sides has the same
    // direction. European and Arabic numbers act as if they were R in
    // terms of their influence on neutrals. Start-of-level-run (sor)
    // and end-of-level-run (eor) are used at level run boundaries.
    // N2. Any remaining neutrals take the embedding direction.
    for (var i$6 = 0; i$6 < len; ++i$6) {
      if (isNeutral.test(types[i$6])) {
        var end$1 = void 0
        for (end$1 = i$6 + 1; end$1 < len && isNeutral.test(types[end$1]); ++end$1) {}
        var before = (i$6 ? types[i$6-1] : outerType) == "L"
        var after = (end$1 < len ? types[end$1] : outerType) == "L"
        var replace$1 = before || after ? "L" : "R"
        for (var j$1 = i$6; j$1 < end$1; ++j$1) { types[j$1] = replace$1 }
        i$6 = end$1 - 1
      }
    }

    // Here we depart from the documented algorithm, in order to avoid
    // building up an actual levels array. Since there are only three
    // levels (0, 1, 2) in an implementation that doesn't take
    // explicit embedding into account, we can build up the order on
    // the fly, without following the level-based algorithm.
    var order = [], m
    for (var i$7 = 0; i$7 < len;) {
      if (countsAsLeft.test(types[i$7])) {
        var start = i$7
        for (++i$7; i$7 < len && countsAsLeft.test(types[i$7]); ++i$7) {}
        order.push(new BidiSpan(0, start, i$7))
      } else {
        var pos = i$7, at = order.length
        for (++i$7; i$7 < len && types[i$7] != "L"; ++i$7) {}
        for (var j$2 = pos; j$2 < i$7;) {
          if (countsAsNum.test(types[j$2])) {
            if (pos < j$2) { order.splice(at, 0, new BidiSpan(1, pos, j$2)) }
            var nstart = j$2
            for (++j$2; j$2 < i$7 && countsAsNum.test(types[j$2]); ++j$2) {}
            order.splice(at, 0, new BidiSpan(2, nstart, j$2))
            pos = j$2
          } else { ++j$2 }
        }
        if (pos < i$7) { order.splice(at, 0, new BidiSpan(1, pos, i$7)) }
      }
    }
    if (order[0].level == 1 && (m = str.match(/^\s+/))) {
      order[0].from = m[0].length
      order.unshift(new BidiSpan(0, 0, m[0].length))
    }
    if (lst(order).level == 1 && (m = str.match(/\s+$/))) {
      lst(order).to -= m[0].length
      order.push(new BidiSpan(0, len - m[0].length, len))
    }
    if (order[0].level == 2)
      { order.unshift(new BidiSpan(1, order[0].to, order[0].to)) }
    if (order[0].level != lst(order).level)
      { order.push(new BidiSpan(order[0].level, len, len)) }

    return order
  }
})()

// Get the bidi ordering for the given line (and cache it). Returns
// false for lines that are fully left-to-right, and an array of
// BidiSpan objects otherwise.
function getOrder(line) {
  var order = line.order
  if (order == null) { order = line.order = bidiOrdering(line.text) }
  return order
}

// EVENT HANDLING

// Lightweight event framework. on/off also work on DOM nodes,
// registering native DOM handlers.

var on = function(emitter, type, f) {
  if (emitter.addEventListener)
    { emitter.addEventListener(type, f, false) }
  else if (emitter.attachEvent)
    { emitter.attachEvent("on" + type, f) }
  else {
    var map$$1 = emitter._handlers || (emitter._handlers = {})
    var arr = map$$1[type] || (map$$1[type] = [])
    arr.push(f)
  }
}

var noHandlers = []
function getHandlers(emitter, type, copy) {
  var arr = emitter._handlers && emitter._handlers[type]
  if (copy) { return arr && arr.length > 0 ? arr.slice() : noHandlers }
  else { return arr || noHandlers }
}

function off(emitter, type, f) {
  if (emitter.removeEventListener)
    { emitter.removeEventListener(type, f, false) }
  else if (emitter.detachEvent)
    { emitter.detachEvent("on" + type, f) }
  else {
    var handlers = getHandlers(emitter, type, false)
    for (var i = 0; i < handlers.length; ++i)
      { if (handlers[i] == f) { handlers.splice(i, 1); break } }
  }
}

function signal(emitter, type /*, values...*/) {
  var handlers = getHandlers(emitter, type, true)
  if (!handlers.length) { return }
  var args = Array.prototype.slice.call(arguments, 2)
  for (var i = 0; i < handlers.length; ++i) { handlers[i].apply(null, args) }
}

// The DOM events that CodeMirror handles can be overridden by
// registering a (non-DOM) handler on the editor for the event name,
// and preventDefault-ing the event in that handler.
function signalDOMEvent(cm, e, override) {
  if (typeof e == "string")
    { e = {type: e, preventDefault: function() { this.defaultPrevented = true }} }
  signal(cm, override || e.type, cm, e)
  return e_defaultPrevented(e) || e.codemirrorIgnore
}

function signalCursorActivity(cm) {
  var arr = cm._handlers && cm._handlers.cursorActivity
  if (!arr) { return }
  var set = cm.curOp.cursorActivityHandlers || (cm.curOp.cursorActivityHandlers = [])
  for (var i = 0; i < arr.length; ++i) { if (indexOf(set, arr[i]) == -1)
    { set.push(arr[i]) } }
}

function hasHandler(emitter, type) {
  return getHandlers(emitter, type).length > 0
}

// Add on and off methods to a constructor's prototype, to make
// registering events on such objects more convenient.
function eventMixin(ctor) {
  ctor.prototype.on = function(type, f) {on(this, type, f)}
  ctor.prototype.off = function(type, f) {off(this, type, f)}
}

// Due to the fact that we still support jurassic IE versions, some
// compatibility wrappers are needed.

function e_preventDefault(e) {
  if (e.preventDefault) { e.preventDefault() }
  else { e.returnValue = false }
}
function e_stopPropagation(e) {
  if (e.stopPropagation) { e.stopPropagation() }
  else { e.cancelBubble = true }
}
function e_defaultPrevented(e) {
  return e.defaultPrevented != null ? e.defaultPrevented : e.returnValue == false
}
function e_stop(e) {e_preventDefault(e); e_stopPropagation(e)}

function e_target(e) {return e.target || e.srcElement}
function e_button(e) {
  var b = e.which
  if (b == null) {
    if (e.button & 1) { b = 1 }
    else if (e.button & 2) { b = 3 }
    else if (e.button & 4) { b = 2 }
  }
  if (mac && e.ctrlKey && b == 1) { b = 3 }
  return b
}

// Detect drag-and-drop
var dragAndDrop = function() {
  // There is *some* kind of drag-and-drop support in IE6-8, but I
  // couldn't get it to work yet.
  if (ie && ie_version < 9) { return false }
  var div = elt('div')
  return "draggable" in div || "dragDrop" in div
}()

var zwspSupported
function zeroWidthElement(measure) {
  if (zwspSupported == null) {
    var test = elt("span", "\u200b")
    removeChildrenAndAdd(measure, elt("span", [test, document.createTextNode("x")]))
    if (measure.firstChild.offsetHeight != 0)
      { zwspSupported = test.offsetWidth <= 1 && test.offsetHeight > 2 && !(ie && ie_version < 8) }
  }
  var node = zwspSupported ? elt("span", "\u200b") :
    elt("span", "\u00a0", null, "display: inline-block; width: 1px; margin-right: -1px")
  node.setAttribute("cm-text", "")
  return node
}

// Feature-detect IE's crummy client rect reporting for bidi text
var badBidiRects
function hasBadBidiRects(measure) {
  if (badBidiRects != null) { return badBidiRects }
  var txt = removeChildrenAndAdd(measure, document.createTextNode("A\u062eA"))
  var r0 = range(txt, 0, 1).getBoundingClientRect()
  var r1 = range(txt, 1, 2).getBoundingClientRect()
  removeChildren(measure)
  if (!r0 || r0.left == r0.right) { return false } // Safari returns null in some cases (#2780)
  return badBidiRects = (r1.right - r0.right < 3)
}

// See if "".split is the broken IE version, if so, provide an
// alternative way to split lines.
var splitLinesAuto = "\n\nb".split(/\n/).length != 3 ? function (string) {
  var pos = 0, result = [], l = string.length
  while (pos <= l) {
    var nl = string.indexOf("\n", pos)
    if (nl == -1) { nl = string.length }
    var line = string.slice(pos, string.charAt(nl - 1) == "\r" ? nl - 1 : nl)
    var rt = line.indexOf("\r")
    if (rt != -1) {
      result.push(line.slice(0, rt))
      pos += rt + 1
    } else {
      result.push(line)
      pos = nl + 1
    }
  }
  return result
} : function (string) { return string.split(/\r\n?|\n/); }

var hasSelection = window.getSelection ? function (te) {
  try { return te.selectionStart != te.selectionEnd }
  catch(e) { return false }
} : function (te) {
  var range$$1
  try {range$$1 = te.ownerDocument.selection.createRange()}
  catch(e) {}
  if (!range$$1 || range$$1.parentElement() != te) { return false }
  return range$$1.compareEndPoints("StartToEnd", range$$1) != 0
}

var hasCopyEvent = (function () {
  var e = elt("div")
  if ("oncopy" in e) { return true }
  e.setAttribute("oncopy", "return;")
  return typeof e.oncopy == "function"
})()

var badZoomedRects = null
function hasBadZoomedRects(measure) {
  if (badZoomedRects != null) { return badZoomedRects }
  var node = removeChildrenAndAdd(measure, elt("span", "x"))
  var normal = node.getBoundingClientRect()
  var fromRange = range(node, 0, 1).getBoundingClientRect()
  return badZoomedRects = Math.abs(normal.left - fromRange.left) > 1
}

// Known modes, by name and by MIME
var modes = {};
var mimeModes = {}

// Extra arguments are stored as the mode's dependencies, which is
// used by (legacy) mechanisms like loadmode.js to automatically
// load a mode. (Preferred mechanism is the require/define calls.)
function defineMode(name, mode) {
  if (arguments.length > 2)
    { mode.dependencies = Array.prototype.slice.call(arguments, 2) }
  modes[name] = mode
}

function defineMIME(mime, spec) {
  mimeModes[mime] = spec
}

// Given a MIME type, a {name, ...options} config object, or a name
// string, return a mode config object.
function resolveMode(spec) {
  if (typeof spec == "string" && mimeModes.hasOwnProperty(spec)) {
    spec = mimeModes[spec]
  } else if (spec && typeof spec.name == "string" && mimeModes.hasOwnProperty(spec.name)) {
    var found = mimeModes[spec.name]
    if (typeof found == "string") { found = {name: found} }
    spec = createObj(found, spec)
    spec.name = found.name
  } else if (typeof spec == "string" && /^[\w\-]+\/[\w\-]+\+xml$/.test(spec)) {
    return resolveMode("application/xml")
  } else if (typeof spec == "string" && /^[\w\-]+\/[\w\-]+\+json$/.test(spec)) {
    return resolveMode("application/json")
  }
  if (typeof spec == "string") { return {name: spec} }
  else { return spec || {name: "null"} }
}

// Given a mode spec (anything that resolveMode accepts), find and
// initialize an actual mode object.
function getMode(options, spec) {
  spec = resolveMode(spec)
  var mfactory = modes[spec.name]
  if (!mfactory) { return getMode(options, "text/plain") }
  var modeObj = mfactory(options, spec)
  if (modeExtensions.hasOwnProperty(spec.name)) {
    var exts = modeExtensions[spec.name]
    for (var prop in exts) {
      if (!exts.hasOwnProperty(prop)) { continue }
      if (modeObj.hasOwnProperty(prop)) { modeObj["_" + prop] = modeObj[prop] }
      modeObj[prop] = exts[prop]
    }
  }
  modeObj.name = spec.name
  if (spec.helperType) { modeObj.helperType = spec.helperType }
  if (spec.modeProps) { for (var prop$1 in spec.modeProps)
    { modeObj[prop$1] = spec.modeProps[prop$1] } }

  return modeObj
}

// This can be used to attach properties to mode objects from
// outside the actual mode definition.
var modeExtensions = {}
function extendMode(mode, properties) {
  var exts = modeExtensions.hasOwnProperty(mode) ? modeExtensions[mode] : (modeExtensions[mode] = {})
  copyObj(properties, exts)
}

function copyState(mode, state) {
  if (state === true) { return state }
  if (mode.copyState) { return mode.copyState(state) }
  var nstate = {}
  for (var n in state) {
    var val = state[n]
    if (val instanceof Array) { val = val.concat([]) }
    nstate[n] = val
  }
  return nstate
}

// Given a mode and a state (for that mode), find the inner mode and
// state at the position that the state refers to.
function innerMode(mode, state) {
  var info
  while (mode.innerMode) {
    info = mode.innerMode(state)
    if (!info || info.mode == mode) { break }
    state = info.state
    mode = info.mode
  }
  return info || {mode: mode, state: state}
}

function startState(mode, a1, a2) {
  return mode.startState ? mode.startState(a1, a2) : true
}

// STRING STREAM

// Fed to the mode parsers, provides helper functions to make
// parsers more succinct.

var StringStream = function(string, tabSize) {
  this.pos = this.start = 0
  this.string = string
  this.tabSize = tabSize || 8
  this.lastColumnPos = this.lastColumnValue = 0
  this.lineStart = 0
}

StringStream.prototype = {
  eol: function() {return this.pos >= this.string.length},
  sol: function() {return this.pos == this.lineStart},
  peek: function() {return this.string.charAt(this.pos) || undefined},
  next: function() {
    if (this.pos < this.string.length)
      { return this.string.charAt(this.pos++) }
  },
  eat: function(match) {
    var ch = this.string.charAt(this.pos)
    var ok
    if (typeof match == "string") { ok = ch == match }
    else { ok = ch && (match.test ? match.test(ch) : match(ch)) }
    if (ok) {++this.pos; return ch}
  },
  eatWhile: function(match) {
    var start = this.pos
    while (this.eat(match)){}
    return this.pos > start
  },
  eatSpace: function() {
    var this$1 = this;

    var start = this.pos
    while (/[\s\u00a0]/.test(this.string.charAt(this.pos))) { ++this$1.pos }
    return this.pos > start
  },
  skipToEnd: function() {this.pos = this.string.length},
  skipTo: function(ch) {
    var found = this.string.indexOf(ch, this.pos)
    if (found > -1) {this.pos = found; return true}
  },
  backUp: function(n) {this.pos -= n},
  column: function() {
    if (this.lastColumnPos < this.start) {
      this.lastColumnValue = countColumn(this.string, this.start, this.tabSize, this.lastColumnPos, this.lastColumnValue)
      this.lastColumnPos = this.start
    }
    return this.lastColumnValue - (this.lineStart ? countColumn(this.string, this.lineStart, this.tabSize) : 0)
  },
  indentation: function() {
    return countColumn(this.string, null, this.tabSize) -
      (this.lineStart ? countColumn(this.string, this.lineStart, this.tabSize) : 0)
  },
  match: function(pattern, consume, caseInsensitive) {
    if (typeof pattern == "string") {
      var cased = function (str) { return caseInsensitive ? str.toLowerCase() : str; }
      var substr = this.string.substr(this.pos, pattern.length)
      if (cased(substr) == cased(pattern)) {
        if (consume !== false) { this.pos += pattern.length }
        return true
      }
    } else {
      var match = this.string.slice(this.pos).match(pattern)
      if (match && match.index > 0) { return null }
      if (match && consume !== false) { this.pos += match[0].length }
      return match
    }
  },
  current: function(){return this.string.slice(this.start, this.pos)},
  hideFirstChars: function(n, inner) {
    this.lineStart += n
    try { return inner() }
    finally { this.lineStart -= n }
  }
}

// Compute a style array (an array starting with a mode generation
// -- for invalidation -- followed by pairs of end positions and
// style strings), which is used to highlight the tokens on the
// line.
function highlightLine(cm, line, state, forceToEnd) {
  // A styles array always starts with a number identifying the
  // mode/overlays that it is based on (for easy invalidation).
  var st = [cm.state.modeGen], lineClasses = {}
  // Compute the base array of styles
  runMode(cm, line.text, cm.doc.mode, state, function (end, style) { return st.push(end, style); },
    lineClasses, forceToEnd)

  // Run overlays, adjust style array.
  var loop = function ( o ) {
    var overlay = cm.state.overlays[o], i = 1, at = 0
    runMode(cm, line.text, overlay.mode, true, function (end, style) {
      var start = i
      // Ensure there's a token end at the current position, and that i points at it
      while (at < end) {
        var i_end = st[i]
        if (i_end > end)
          { st.splice(i, 1, end, st[i+1], i_end) }
        i += 2
        at = Math.min(end, i_end)
      }
      if (!style) { return }
      if (overlay.opaque) {
        st.splice(start, i - start, end, "overlay " + style)
        i = start + 2
      } else {
        for (; start < i; start += 2) {
          var cur = st[start+1]
          st[start+1] = (cur ? cur + " " : "") + "overlay " + style
        }
      }
    }, lineClasses)
  };

  for (var o = 0; o < cm.state.overlays.length; ++o) loop( o );

  return {styles: st, classes: lineClasses.bgClass || lineClasses.textClass ? lineClasses : null}
}

function getLineStyles(cm, line, updateFrontier) {
  if (!line.styles || line.styles[0] != cm.state.modeGen) {
    var state = getStateBefore(cm, lineNo(line))
    var result = highlightLine(cm, line, line.text.length > cm.options.maxHighlightLength ? copyState(cm.doc.mode, state) : state)
    line.stateAfter = state
    line.styles = result.styles
    if (result.classes) { line.styleClasses = result.classes }
    else if (line.styleClasses) { line.styleClasses = null }
    if (updateFrontier === cm.doc.frontier) { cm.doc.frontier++ }
  }
  return line.styles
}

function getStateBefore(cm, n, precise) {
  var doc = cm.doc, display = cm.display
  if (!doc.mode.startState) { return true }
  var pos = findStartLine(cm, n, precise), state = pos > doc.first && getLine(doc, pos-1).stateAfter
  if (!state) { state = startState(doc.mode) }
  else { state = copyState(doc.mode, state) }
  doc.iter(pos, n, function (line) {
    processLine(cm, line.text, state)
    var save = pos == n - 1 || pos % 5 == 0 || pos >= display.viewFrom && pos < display.viewTo
    line.stateAfter = save ? copyState(doc.mode, state) : null
    ++pos
  })
  if (precise) { doc.frontier = pos }
  return state
}

// Lightweight form of highlight -- proceed over this line and
// update state, but don't save a style array. Used for lines that
// aren't currently visible.
function processLine(cm, text, state, startAt) {
  var mode = cm.doc.mode
  var stream = new StringStream(text, cm.options.tabSize)
  stream.start = stream.pos = startAt || 0
  if (text == "") { callBlankLine(mode, state) }
  while (!stream.eol()) {
    readToken(mode, stream, state)
    stream.start = stream.pos
  }
}

function callBlankLine(mode, state) {
  if (mode.blankLine) { return mode.blankLine(state) }
  if (!mode.innerMode) { return }
  var inner = innerMode(mode, state)
  if (inner.mode.blankLine) { return inner.mode.blankLine(inner.state) }
}

function readToken(mode, stream, state, inner) {
  for (var i = 0; i < 10; i++) {
    if (inner) { inner[0] = innerMode(mode, state).mode }
    var style = mode.token(stream, state)
    if (stream.pos > stream.start) { return style }
  }
  throw new Error("Mode " + mode.name + " failed to advance stream.")
}

// Utility for getTokenAt and getLineTokens
function takeToken(cm, pos, precise, asArray) {
  var getObj = function (copy) { return ({
    start: stream.start, end: stream.pos,
    string: stream.current(),
    type: style || null,
    state: copy ? copyState(doc.mode, state) : state
  }); }

  var doc = cm.doc, mode = doc.mode, style
  pos = clipPos(doc, pos)
  var line = getLine(doc, pos.line), state = getStateBefore(cm, pos.line, precise)
  var stream = new StringStream(line.text, cm.options.tabSize), tokens
  if (asArray) { tokens = [] }
  while ((asArray || stream.pos < pos.ch) && !stream.eol()) {
    stream.start = stream.pos
    style = readToken(mode, stream, state)
    if (asArray) { tokens.push(getObj(true)) }
  }
  return asArray ? tokens : getObj()
}

function extractLineClasses(type, output) {
  if (type) { for (;;) {
    var lineClass = type.match(/(?:^|\s+)line-(background-)?(\S+)/)
    if (!lineClass) { break }
    type = type.slice(0, lineClass.index) + type.slice(lineClass.index + lineClass[0].length)
    var prop = lineClass[1] ? "bgClass" : "textClass"
    if (output[prop] == null)
      { output[prop] = lineClass[2] }
    else if (!(new RegExp("(?:^|\s)" + lineClass[2] + "(?:$|\s)")).test(output[prop]))
      { output[prop] += " " + lineClass[2] }
  } }
  return type
}

// Run the given mode's parser over a line, calling f for each token.
function runMode(cm, text, mode, state, f, lineClasses, forceToEnd) {
  var flattenSpans = mode.flattenSpans
  if (flattenSpans == null) { flattenSpans = cm.options.flattenSpans }
  var curStart = 0, curStyle = null
  var stream = new StringStream(text, cm.options.tabSize), style
  var inner = cm.options.addModeClass && [null]
  if (text == "") { extractLineClasses(callBlankLine(mode, state), lineClasses) }
  while (!stream.eol()) {
    if (stream.pos > cm.options.maxHighlightLength) {
      flattenSpans = false
      if (forceToEnd) { processLine(cm, text, state, stream.pos) }
      stream.pos = text.length
      style = null
    } else {
      style = extractLineClasses(readToken(mode, stream, state, inner), lineClasses)
    }
    if (inner) {
      var mName = inner[0].name
      if (mName) { style = "m-" + (style ? mName + " " + style : mName) }
    }
    if (!flattenSpans || curStyle != style) {
      while (curStart < stream.start) {
        curStart = Math.min(stream.start, curStart + 5000)
        f(curStart, curStyle)
      }
      curStyle = style
    }
    stream.start = stream.pos
  }
  while (curStart < stream.pos) {
    // Webkit seems to refuse to render text nodes longer than 57444
    // characters, and returns inaccurate measurements in nodes
    // starting around 5000 chars.
    var pos = Math.min(stream.pos, curStart + 5000)
    f(pos, curStyle)
    curStart = pos
  }
}

// Finds the line to start with when starting a parse. Tries to
// find a line with a stateAfter, so that it can start with a
// valid state. If that fails, it returns the line with the
// smallest indentation, which tends to need the least context to
// parse correctly.
function findStartLine(cm, n, precise) {
  var minindent, minline, doc = cm.doc
  var lim = precise ? -1 : n - (cm.doc.mode.innerMode ? 1000 : 100)
  for (var search = n; search > lim; --search) {
    if (search <= doc.first) { return doc.first }
    var line = getLine(doc, search - 1)
    if (line.stateAfter && (!precise || search <= doc.frontier)) { return search }
    var indented = countColumn(line.text, null, cm.options.tabSize)
    if (minline == null || minindent > indented) {
      minline = search - 1
      minindent = indented
    }
  }
  return minline
}

// LINE DATA STRUCTURE

// Line objects. These hold state related to a line, including
// highlighting info (the styles array).
function Line(text, markedSpans, estimateHeight) {
  this.text = text
  attachMarkedSpans(this, markedSpans)
  this.height = estimateHeight ? estimateHeight(this) : 1
}
eventMixin(Line)
Line.prototype.lineNo = function() { return lineNo(this) }

// Change the content (text, markers) of a line. Automatically
// invalidates cached information and tries to re-estimate the
// line's height.
function updateLine(line, text, markedSpans, estimateHeight) {
  line.text = text
  if (line.stateAfter) { line.stateAfter = null }
  if (line.styles) { line.styles = null }
  if (line.order != null) { line.order = null }
  detachMarkedSpans(line)
  attachMarkedSpans(line, markedSpans)
  var estHeight = estimateHeight ? estimateHeight(line) : 1
  if (estHeight != line.height) { updateLineHeight(line, estHeight) }
}

// Detach a line from the document tree and its markers.
function cleanUpLine(line) {
  line.parent = null
  detachMarkedSpans(line)
}

// Convert a style as returned by a mode (either null, or a string
// containing one or more styles) to a CSS style. This is cached,
// and also looks for line-wide styles.
var styleToClassCache = {};
var styleToClassCacheWithMode = {}
function interpretTokenStyle(style, options) {
  if (!style || /^\s*$/.test(style)) { return null }
  var cache = options.addModeClass ? styleToClassCacheWithMode : styleToClassCache
  return cache[style] ||
    (cache[style] = style.replace(/\S+/g, "cm-$&"))
}

// Render the DOM representation of the text of a line. Also builds
// up a 'line map', which points at the DOM nodes that represent
// specific stretches of text, and is used by the measuring code.
// The returned object contains the DOM node, this map, and
// information about line-wide styles that were set by the mode.
function buildLineContent(cm, lineView) {
  // The padding-right forces the element to have a 'border', which
  // is needed on Webkit to be able to get line-level bounding
  // rectangles for it (in measureChar).
  var content = elt("span", null, null, webkit ? "padding-right: .1px" : null)
  var builder = {pre: elt("pre", [content], "CodeMirror-line"), content: content,
                 col: 0, pos: 0, cm: cm,
                 trailingSpace: false,
                 splitSpaces: (ie || webkit) && cm.getOption("lineWrapping")}
  lineView.measure = {}

  // Iterate over the logical lines that make up this visual line.
  for (var i = 0; i <= (lineView.rest ? lineView.rest.length : 0); i++) {
    var line = i ? lineView.rest[i - 1] : lineView.line, order = void 0
    builder.pos = 0
    builder.addToken = buildToken
    // Optionally wire in some hacks into the token-rendering
    // algorithm, to deal with browser quirks.
    if (hasBadBidiRects(cm.display.measure) && (order = getOrder(line)))
      { builder.addToken = buildTokenBadBidi(builder.addToken, order) }
    builder.map = []
    var allowFrontierUpdate = lineView != cm.display.externalMeasured && lineNo(line)
    insertLineContent(line, builder, getLineStyles(cm, line, allowFrontierUpdate))
    if (line.styleClasses) {
      if (line.styleClasses.bgClass)
        { builder.bgClass = joinClasses(line.styleClasses.bgClass, builder.bgClass || "") }
      if (line.styleClasses.textClass)
        { builder.textClass = joinClasses(line.styleClasses.textClass, builder.textClass || "") }
    }

    // Ensure at least a single node is present, for measuring.
    if (builder.map.length == 0)
      { builder.map.push(0, 0, builder.content.appendChild(zeroWidthElement(cm.display.measure))) }

    // Store the map and a cache object for the current logical line
    if (i == 0) {
      lineView.measure.map = builder.map
      lineView.measure.cache = {}
    } else {
      (lineView.measure.maps || (lineView.measure.maps = [])).push(builder.map)
      ;(lineView.measure.caches || (lineView.measure.caches = [])).push({})
    }
  }

  // See issue #2901
  if (webkit) {
    var last = builder.content.lastChild
    if (/\bcm-tab\b/.test(last.className) || (last.querySelector && last.querySelector(".cm-tab")))
      { builder.content.className = "cm-tab-wrap-hack" }
  }

  signal(cm, "renderLine", cm, lineView.line, builder.pre)
  if (builder.pre.className)
    { builder.textClass = joinClasses(builder.pre.className, builder.textClass || "") }

  return builder
}

function defaultSpecialCharPlaceholder(ch) {
  var token = elt("span", "\u2022", "cm-invalidchar")
  token.title = "\\u" + ch.charCodeAt(0).toString(16)
  token.setAttribute("aria-label", token.title)
  return token
}

// Build up the DOM representation for a single token, and add it to
// the line map. Takes care to render special characters separately.
function buildToken(builder, text, style, startStyle, endStyle, title, css) {
  if (!text) { return }
  var displayText = builder.splitSpaces ? splitSpaces(text, builder.trailingSpace) : text
  var special = builder.cm.state.specialChars, mustWrap = false
  var content
  if (!special.test(text)) {
    builder.col += text.length
    content = document.createTextNode(displayText)
    builder.map.push(builder.pos, builder.pos + text.length, content)
    if (ie && ie_version < 9) { mustWrap = true }
    builder.pos += text.length
  } else {
    content = document.createDocumentFragment()
    var pos = 0
    while (true) {
      special.lastIndex = pos
      var m = special.exec(text)
      var skipped = m ? m.index - pos : text.length - pos
      if (skipped) {
        var txt = document.createTextNode(displayText.slice(pos, pos + skipped))
        if (ie && ie_version < 9) { content.appendChild(elt("span", [txt])) }
        else { content.appendChild(txt) }
        builder.map.push(builder.pos, builder.pos + skipped, txt)
        builder.col += skipped
        builder.pos += skipped
      }
      if (!m) { break }
      pos += skipped + 1
      var txt$1 = void 0
      if (m[0] == "\t") {
        var tabSize = builder.cm.options.tabSize, tabWidth = tabSize - builder.col % tabSize
        txt$1 = content.appendChild(elt("span", spaceStr(tabWidth), "cm-tab"))
        txt$1.setAttribute("role", "presentation")
        txt$1.setAttribute("cm-text", "\t")
        builder.col += tabWidth
      } else if (m[0] == "\r" || m[0] == "\n") {
        txt$1 = content.appendChild(elt("span", m[0] == "\r" ? "\u240d" : "\u2424", "cm-invalidchar"))
        txt$1.setAttribute("cm-text", m[0])
        builder.col += 1
      } else {
        txt$1 = builder.cm.options.specialCharPlaceholder(m[0])
        txt$1.setAttribute("cm-text", m[0])
        if (ie && ie_version < 9) { content.appendChild(elt("span", [txt$1])) }
        else { content.appendChild(txt$1) }
        builder.col += 1
      }
      builder.map.push(builder.pos, builder.pos + 1, txt$1)
      builder.pos++
    }
  }
  builder.trailingSpace = displayText.charCodeAt(text.length - 1) == 32
  if (style || startStyle || endStyle || mustWrap || css) {
    var fullStyle = style || ""
    if (startStyle) { fullStyle += startStyle }
    if (endStyle) { fullStyle += endStyle }
    var token = elt("span", [content], fullStyle, css)
    if (title) { token.title = title }
    return builder.content.appendChild(token)
  }
  builder.content.appendChild(content)
}

function splitSpaces(text, trailingBefore) {
  if (text.length > 1 && !/  /.test(text)) { return text }
  var spaceBefore = trailingBefore, result = ""
  for (var i = 0; i < text.length; i++) {
    var ch = text.charAt(i)
    if (ch == " " && spaceBefore && (i == text.length - 1 || text.charCodeAt(i + 1) == 32))
      { ch = "\u00a0" }
    result += ch
    spaceBefore = ch == " "
  }
  return result
}

// Work around nonsense dimensions being reported for stretches of
// right-to-left text.
function buildTokenBadBidi(inner, order) {
  return function (builder, text, style, startStyle, endStyle, title, css) {
    style = style ? style + " cm-force-border" : "cm-force-border"
    var start = builder.pos, end = start + text.length
    for (;;) {
      // Find the part that overlaps with the start of this text
      var part = void 0
      for (var i = 0; i < order.length; i++) {
        part = order[i]
        if (part.to > start && part.from <= start) { break }
      }
      if (part.to >= end) { return inner(builder, text, style, startStyle, endStyle, title, css) }
      inner(builder, text.slice(0, part.to - start), style, startStyle, null, title, css)
      startStyle = null
      text = text.slice(part.to - start)
      start = part.to
    }
  }
}

function buildCollapsedSpan(builder, size, marker, ignoreWidget) {
  var widget = !ignoreWidget && marker.widgetNode
  if (widget) { builder.map.push(builder.pos, builder.pos + size, widget) }
  if (!ignoreWidget && builder.cm.display.input.needsContentAttribute) {
    if (!widget)
      { widget = builder.content.appendChild(document.createElement("span")) }
    widget.setAttribute("cm-marker", marker.id)
  }
  if (widget) {
    builder.cm.display.input.setUneditable(widget)
    builder.content.appendChild(widget)
  }
  builder.pos += size
  builder.trailingSpace = false
}

// Outputs a number of spans to make up a line, taking highlighting
// and marked text into account.
function insertLineContent(line, builder, styles) {
  var spans = line.markedSpans, allText = line.text, at = 0
  if (!spans) {
    for (var i$1 = 1; i$1 < styles.length; i$1+=2)
      { builder.addToken(builder, allText.slice(at, at = styles[i$1]), interpretTokenStyle(styles[i$1+1], builder.cm.options)) }
    return
  }

  var len = allText.length, pos = 0, i = 1, text = "", style, css
  var nextChange = 0, spanStyle, spanEndStyle, spanStartStyle, title, collapsed
  for (;;) {
    if (nextChange == pos) { // Update current marker set
      spanStyle = spanEndStyle = spanStartStyle = title = css = ""
      collapsed = null; nextChange = Infinity
      var foundBookmarks = [], endStyles = void 0
      for (var j = 0; j < spans.length; ++j) {
        var sp = spans[j], m = sp.marker
        if (m.type == "bookmark" && sp.from == pos && m.widgetNode) {
          foundBookmarks.push(m)
        } else if (sp.from <= pos && (sp.to == null || sp.to > pos || m.collapsed && sp.to == pos && sp.from == pos)) {
          if (sp.to != null && sp.to != pos && nextChange > sp.to) {
            nextChange = sp.to
            spanEndStyle = ""
          }
          if (m.className) { spanStyle += " " + m.className }
          if (m.css) { css = (css ? css + ";" : "") + m.css }
          if (m.startStyle && sp.from == pos) { spanStartStyle += " " + m.startStyle }
          if (m.endStyle && sp.to == nextChange) { (endStyles || (endStyles = [])).push(m.endStyle, sp.to) }
          if (m.title && !title) { title = m.title }
          if (m.collapsed && (!collapsed || compareCollapsedMarkers(collapsed.marker, m) < 0))
            { collapsed = sp }
        } else if (sp.from > pos && nextChange > sp.from) {
          nextChange = sp.from
        }
      }
      if (endStyles) { for (var j$1 = 0; j$1 < endStyles.length; j$1 += 2)
        { if (endStyles[j$1 + 1] == nextChange) { spanEndStyle += " " + endStyles[j$1] } } }

      if (!collapsed || collapsed.from == pos) { for (var j$2 = 0; j$2 < foundBookmarks.length; ++j$2)
        { buildCollapsedSpan(builder, 0, foundBookmarks[j$2]) } }
      if (collapsed && (collapsed.from || 0) == pos) {
        buildCollapsedSpan(builder, (collapsed.to == null ? len + 1 : collapsed.to) - pos,
                           collapsed.marker, collapsed.from == null)
        if (collapsed.to == null) { return }
        if (collapsed.to == pos) { collapsed = false }
      }
    }
    if (pos >= len) { break }

    var upto = Math.min(len, nextChange)
    while (true) {
      if (text) {
        var end = pos + text.length
        if (!collapsed) {
          var tokenText = end > upto ? text.slice(0, upto - pos) : text
          builder.addToken(builder, tokenText, style ? style + spanStyle : spanStyle,
                           spanStartStyle, pos + tokenText.length == nextChange ? spanEndStyle : "", title, css)
        }
        if (end >= upto) {text = text.slice(upto - pos); pos = upto; break}
        pos = end
        spanStartStyle = ""
      }
      text = allText.slice(at, at = styles[i++])
      style = interpretTokenStyle(styles[i++], builder.cm.options)
    }
  }
}


// These objects are used to represent the visible (currently drawn)
// part of the document. A LineView may correspond to multiple
// logical lines, if those are connected by collapsed ranges.
function LineView(doc, line, lineN) {
  // The starting line
  this.line = line
  // Continuing lines, if any
  this.rest = visualLineContinued(line)
  // Number of logical lines in this visual line
  this.size = this.rest ? lineNo(lst(this.rest)) - lineN + 1 : 1
  this.node = this.text = null
  this.hidden = lineIsHidden(doc, line)
}

// Create a range of LineView objects for the given lines.
function buildViewArray(cm, from, to) {
  var array = [], nextPos
  for (var pos = from; pos < to; pos = nextPos) {
    var view = new LineView(cm.doc, getLine(cm.doc, pos), pos)
    nextPos = pos + view.size
    array.push(view)
  }
  return array
}

var operationGroup = null

function pushOperation(op) {
  if (operationGroup) {
    operationGroup.ops.push(op)
  } else {
    op.ownsGroup = operationGroup = {
      ops: [op],
      delayedCallbacks: []
    }
  }
}

function fireCallbacksForOps(group) {
  // Calls delayed callbacks and cursorActivity handlers until no
  // new ones appear
  var callbacks = group.delayedCallbacks, i = 0
  do {
    for (; i < callbacks.length; i++)
      { callbacks[i].call(null) }
    for (var j = 0; j < group.ops.length; j++) {
      var op = group.ops[j]
      if (op.cursorActivityHandlers)
        { while (op.cursorActivityCalled < op.cursorActivityHandlers.length)
          { op.cursorActivityHandlers[op.cursorActivityCalled++].call(null, op.cm) } }
    }
  } while (i < callbacks.length)
}

function finishOperation(op, endCb) {
  var group = op.ownsGroup
  if (!group) { return }

  try { fireCallbacksForOps(group) }
  finally {
    operationGroup = null
    endCb(group)
  }
}

var orphanDelayedCallbacks = null

// Often, we want to signal events at a point where we are in the
// middle of some work, but don't want the handler to start calling
// other methods on the editor, which might be in an inconsistent
// state or simply not expect any other events to happen.
// signalLater looks whether there are any handlers, and schedules
// them to be executed when the last operation ends, or, if no
// operation is active, when a timeout fires.
function signalLater(emitter, type /*, values...*/) {
  var arr = getHandlers(emitter, type, false)
  if (!arr.length) { return }
  var args = Array.prototype.slice.call(arguments, 2), list
  if (operationGroup) {
    list = operationGroup.delayedCallbacks
  } else if (orphanDelayedCallbacks) {
    list = orphanDelayedCallbacks
  } else {
    list = orphanDelayedCallbacks = []
    setTimeout(fireOrphanDelayed, 0)
  }
  var loop = function ( i ) {
    list.push(function () { return arr[i].apply(null, args); })
  };

  for (var i = 0; i < arr.length; ++i)
    loop( i );
}

function fireOrphanDelayed() {
  var delayed = orphanDelayedCallbacks
  orphanDelayedCallbacks = null
  for (var i = 0; i < delayed.length; ++i) { delayed[i]() }
}

// When an aspect of a line changes, a string is added to
// lineView.changes. This updates the relevant part of the line's
// DOM structure.
function updateLineForChanges(cm, lineView, lineN, dims) {
  for (var j = 0; j < lineView.changes.length; j++) {
    var type = lineView.changes[j]
    if (type == "text") { updateLineText(cm, lineView) }
    else if (type == "gutter") { updateLineGutter(cm, lineView, lineN, dims) }
    else if (type == "class") { updateLineClasses(lineView) }
    else if (type == "widget") { updateLineWidgets(cm, lineView, dims) }
  }
  lineView.changes = null
}

// Lines with gutter elements, widgets or a background class need to
// be wrapped, and have the extra elements added to the wrapper div
function ensureLineWrapped(lineView) {
  if (lineView.node == lineView.text) {
    lineView.node = elt("div", null, null, "position: relative")
    if (lineView.text.parentNode)
      { lineView.text.parentNode.replaceChild(lineView.node, lineView.text) }
    lineView.node.appendChild(lineView.text)
    if (ie && ie_version < 8) { lineView.node.style.zIndex = 2 }
  }
  return lineView.node
}

function updateLineBackground(lineView) {
  var cls = lineView.bgClass ? lineView.bgClass + " " + (lineView.line.bgClass || "") : lineView.line.bgClass
  if (cls) { cls += " CodeMirror-linebackground" }
  if (lineView.background) {
    if (cls) { lineView.background.className = cls }
    else { lineView.background.parentNode.removeChild(lineView.background); lineView.background = null }
  } else if (cls) {
    var wrap = ensureLineWrapped(lineView)
    lineView.background = wrap.insertBefore(elt("div", null, cls), wrap.firstChild)
  }
}

// Wrapper around buildLineContent which will reuse the structure
// in display.externalMeasured when possible.
function getLineContent(cm, lineView) {
  var ext = cm.display.externalMeasured
  if (ext && ext.line == lineView.line) {
    cm.display.externalMeasured = null
    lineView.measure = ext.measure
    return ext.built
  }
  return buildLineContent(cm, lineView)
}

// Redraw the line's text. Interacts with the background and text
// classes because the mode may output tokens that influence these
// classes.
function updateLineText(cm, lineView) {
  var cls = lineView.text.className
  var built = getLineContent(cm, lineView)
  if (lineView.text == lineView.node) { lineView.node = built.pre }
  lineView.text.parentNode.replaceChild(built.pre, lineView.text)
  lineView.text = built.pre
  if (built.bgClass != lineView.bgClass || built.textClass != lineView.textClass) {
    lineView.bgClass = built.bgClass
    lineView.textClass = built.textClass
    updateLineClasses(lineView)
  } else if (cls) {
    lineView.text.className = cls
  }
}

function updateLineClasses(lineView) {
  updateLineBackground(lineView)
  if (lineView.line.wrapClass)
    { ensureLineWrapped(lineView).className = lineView.line.wrapClass }
  else if (lineView.node != lineView.text)
    { lineView.node.className = "" }
  var textClass = lineView.textClass ? lineView.textClass + " " + (lineView.line.textClass || "") : lineView.line.textClass
  lineView.text.className = textClass || ""
}

function updateLineGutter(cm, lineView, lineN, dims) {
  if (lineView.gutter) {
    lineView.node.removeChild(lineView.gutter)
    lineView.gutter = null
  }
  if (lineView.gutterBackground) {
    lineView.node.removeChild(lineView.gutterBackground)
    lineView.gutterBackground = null
  }
  if (lineView.line.gutterClass) {
    var wrap = ensureLineWrapped(lineView)
    lineView.gutterBackground = elt("div", null, "CodeMirror-gutter-background " + lineView.line.gutterClass,
                                    ("left: " + (cm.options.fixedGutter ? dims.fixedPos : -dims.gutterTotalWidth) + "px; width: " + (dims.gutterTotalWidth) + "px"))
    wrap.insertBefore(lineView.gutterBackground, lineView.text)
  }
  var markers = lineView.line.gutterMarkers
  if (cm.options.lineNumbers || markers) {
    var wrap$1 = ensureLineWrapped(lineView)
    var gutterWrap = lineView.gutter = elt("div", null, "CodeMirror-gutter-wrapper", ("left: " + (cm.options.fixedGutter ? dims.fixedPos : -dims.gutterTotalWidth) + "px"))
    cm.display.input.setUneditable(gutterWrap)
    wrap$1.insertBefore(gutterWrap, lineView.text)
    if (lineView.line.gutterClass)
      { gutterWrap.className += " " + lineView.line.gutterClass }
    if (cm.options.lineNumbers && (!markers || !markers["CodeMirror-linenumbers"]))
      { lineView.lineNumber = gutterWrap.appendChild(
        elt("div", lineNumberFor(cm.options, lineN),
            "CodeMirror-linenumber CodeMirror-gutter-elt",
            ("left: " + (dims.gutterLeft["CodeMirror-linenumbers"]) + "px; width: " + (cm.display.lineNumInnerWidth) + "px"))) }
    if (markers) { for (var k = 0; k < cm.options.gutters.length; ++k) {
      var id = cm.options.gutters[k], found = markers.hasOwnProperty(id) && markers[id]
      if (found)
        { gutterWrap.appendChild(elt("div", [found], "CodeMirror-gutter-elt",
                                   ("left: " + (dims.gutterLeft[id]) + "px; width: " + (dims.gutterWidth[id]) + "px"))) }
    } }
  }
}

function updateLineWidgets(cm, lineView, dims) {
  if (lineView.alignable) { lineView.alignable = null }
  for (var node = lineView.node.firstChild, next = void 0; node; node = next) {
    next = node.nextSibling
    if (node.className == "CodeMirror-linewidget")
      { lineView.node.removeChild(node) }
  }
  insertLineWidgets(cm, lineView, dims)
}

// Build a line's DOM representation from scratch
function buildLineElement(cm, lineView, lineN, dims) {
  var built = getLineContent(cm, lineView)
  lineView.text = lineView.node = built.pre
  if (built.bgClass) { lineView.bgClass = built.bgClass }
  if (built.textClass) { lineView.textClass = built.textClass }

  updateLineClasses(lineView)
  updateLineGutter(cm, lineView, lineN, dims)
  insertLineWidgets(cm, lineView, dims)
  return lineView.node
}

// A lineView may contain multiple logical lines (when merged by
// collapsed spans). The widgets for all of them need to be drawn.
function insertLineWidgets(cm, lineView, dims) {
  insertLineWidgetsFor(cm, lineView.line, lineView, dims, true)
  if (lineView.rest) { for (var i = 0; i < lineView.rest.length; i++)
    { insertLineWidgetsFor(cm, lineView.rest[i], lineView, dims, false) } }
}

function insertLineWidgetsFor(cm, line, lineView, dims, allowAbove) {
  if (!line.widgets) { return }
  var wrap = ensureLineWrapped(lineView)
  for (var i = 0, ws = line.widgets; i < ws.length; ++i) {
    var widget = ws[i], node = elt("div", [widget.node], "CodeMirror-linewidget")
    if (!widget.handleMouseEvents) { node.setAttribute("cm-ignore-events", "true") }
    positionLineWidget(widget, node, lineView, dims)
    cm.display.input.setUneditable(node)
    if (allowAbove && widget.above)
      { wrap.insertBefore(node, lineView.gutter || lineView.text) }
    else
      { wrap.appendChild(node) }
    signalLater(widget, "redraw")
  }
}

function positionLineWidget(widget, node, lineView, dims) {
  if (widget.noHScroll) {
    (lineView.alignable || (lineView.alignable = [])).push(node)
    var width = dims.wrapperWidth
    node.style.left = dims.fixedPos + "px"
    if (!widget.coverGutter) {
      width -= dims.gutterTotalWidth
      node.style.paddingLeft = dims.gutterTotalWidth + "px"
    }
    node.style.width = width + "px"
  }
  if (widget.coverGutter) {
    node.style.zIndex = 5
    node.style.position = "relative"
    if (!widget.noHScroll) { node.style.marginLeft = -dims.gutterTotalWidth + "px" }
  }
}

function widgetHeight(widget) {
  if (widget.height != null) { return widget.height }
  var cm = widget.doc.cm
  if (!cm) { return 0 }
  if (!contains(document.body, widget.node)) {
    var parentStyle = "position: relative;"
    if (widget.coverGutter)
      { parentStyle += "margin-left: -" + cm.display.gutters.offsetWidth + "px;" }
    if (widget.noHScroll)
      { parentStyle += "width: " + cm.display.wrapper.clientWidth + "px;" }
    removeChildrenAndAdd(cm.display.measure, elt("div", [widget.node], null, parentStyle))
  }
  return widget.height = widget.node.parentNode.offsetHeight
}

// Return true when the given mouse event happened in a widget
function eventInWidget(display, e) {
  for (var n = e_target(e); n != display.wrapper; n = n.parentNode) {
    if (!n || (n.nodeType == 1 && n.getAttribute("cm-ignore-events") == "true") ||
        (n.parentNode == display.sizer && n != display.mover))
      { return true }
  }
}

// POSITION MEASUREMENT

function paddingTop(display) {return display.lineSpace.offsetTop}
function paddingVert(display) {return display.mover.offsetHeight - display.lineSpace.offsetHeight}
function paddingH(display) {
  if (display.cachedPaddingH) { return display.cachedPaddingH }
  var e = removeChildrenAndAdd(display.measure, elt("pre", "x"))
  var style = window.getComputedStyle ? window.getComputedStyle(e) : e.currentStyle
  var data = {left: parseInt(style.paddingLeft), right: parseInt(style.paddingRight)}
  if (!isNaN(data.left) && !isNaN(data.right)) { display.cachedPaddingH = data }
  return data
}

function scrollGap(cm) { return scrollerGap - cm.display.nativeBarWidth }
function displayWidth(cm) {
  return cm.display.scroller.clientWidth - scrollGap(cm) - cm.display.barWidth
}
function displayHeight(cm) {
  return cm.display.scroller.clientHeight - scrollGap(cm) - cm.display.barHeight
}

// Ensure the lineView.wrapping.heights array is populated. This is
// an array of bottom offsets for the lines that make up a drawn
// line. When lineWrapping is on, there might be more than one
// height.
function ensureLineHeights(cm, lineView, rect) {
  var wrapping = cm.options.lineWrapping
  var curWidth = wrapping && displayWidth(cm)
  if (!lineView.measure.heights || wrapping && lineView.measure.width != curWidth) {
    var heights = lineView.measure.heights = []
    if (wrapping) {
      lineView.measure.width = curWidth
      var rects = lineView.text.firstChild.getClientRects()
      for (var i = 0; i < rects.length - 1; i++) {
        var cur = rects[i], next = rects[i + 1]
        if (Math.abs(cur.bottom - next.bottom) > 2)
          { heights.push((cur.bottom + next.top) / 2 - rect.top) }
      }
    }
    heights.push(rect.bottom - rect.top)
  }
}

// Find a line map (mapping character offsets to text nodes) and a
// measurement cache for the given line number. (A line view might
// contain multiple lines when collapsed ranges are present.)
function mapFromLineView(lineView, line, lineN) {
  if (lineView.line == line)
    { return {map: lineView.measure.map, cache: lineView.measure.cache} }
  for (var i = 0; i < lineView.rest.length; i++)
    { if (lineView.rest[i] == line)
      { return {map: lineView.measure.maps[i], cache: lineView.measure.caches[i]} } }
  for (var i$1 = 0; i$1 < lineView.rest.length; i$1++)
    { if (lineNo(lineView.rest[i$1]) > lineN)
      { return {map: lineView.measure.maps[i$1], cache: lineView.measure.caches[i$1], before: true} } }
}

// Render a line into the hidden node display.externalMeasured. Used
// when measurement is needed for a line that's not in the viewport.
function updateExternalMeasurement(cm, line) {
  line = visualLine(line)
  var lineN = lineNo(line)
  var view = cm.display.externalMeasured = new LineView(cm.doc, line, lineN)
  view.lineN = lineN
  var built = view.built = buildLineContent(cm, view)
  view.text = built.pre
  removeChildrenAndAdd(cm.display.lineMeasure, built.pre)
  return view
}

// Get a {top, bottom, left, right} box (in line-local coordinates)
// for a given character.
function measureChar(cm, line, ch, bias) {
  return measureCharPrepared(cm, prepareMeasureForLine(cm, line), ch, bias)
}

// Find a line view that corresponds to the given line number.
function findViewForLine(cm, lineN) {
  if (lineN >= cm.display.viewFrom && lineN < cm.display.viewTo)
    { return cm.display.view[findViewIndex(cm, lineN)] }
  var ext = cm.display.externalMeasured
  if (ext && lineN >= ext.lineN && lineN < ext.lineN + ext.size)
    { return ext }
}

// Measurement can be split in two steps, the set-up work that
// applies to the whole line, and the measurement of the actual
// character. Functions like coordsChar, that need to do a lot of
// measurements in a row, can thus ensure that the set-up work is
// only done once.
function prepareMeasureForLine(cm, line) {
  var lineN = lineNo(line)
  var view = findViewForLine(cm, lineN)
  if (view && !view.text) {
    view = null
  } else if (view && view.changes) {
    updateLineForChanges(cm, view, lineN, getDimensions(cm))
    cm.curOp.forceUpdate = true
  }
  if (!view)
    { view = updateExternalMeasurement(cm, line) }

  var info = mapFromLineView(view, line, lineN)
  return {
    line: line, view: view, rect: null,
    map: info.map, cache: info.cache, before: info.before,
    hasHeights: false
  }
}

// Given a prepared measurement object, measures the position of an
// actual character (or fetches it from the cache).
function measureCharPrepared(cm, prepared, ch, bias, varHeight) {
  if (prepared.before) { ch = -1 }
  var key = ch + (bias || ""), found
  if (prepared.cache.hasOwnProperty(key)) {
    found = prepared.cache[key]
  } else {
    if (!prepared.rect)
      { prepared.rect = prepared.view.text.getBoundingClientRect() }
    if (!prepared.hasHeights) {
      ensureLineHeights(cm, prepared.view, prepared.rect)
      prepared.hasHeights = true
    }
    found = measureCharInner(cm, prepared, ch, bias)
    if (!found.bogus) { prepared.cache[key] = found }
  }
  return {left: found.left, right: found.right,
          top: varHeight ? found.rtop : found.top,
          bottom: varHeight ? found.rbottom : found.bottom}
}

var nullRect = {left: 0, right: 0, top: 0, bottom: 0}

function nodeAndOffsetInLineMap(map$$1, ch, bias) {
  var node, start, end, collapse, mStart, mEnd
  // First, search the line map for the text node corresponding to,
  // or closest to, the target character.
  for (var i = 0; i < map$$1.length; i += 3) {
    mStart = map$$1[i]
    mEnd = map$$1[i + 1]
    if (ch < mStart) {
      start = 0; end = 1
      collapse = "left"
    } else if (ch < mEnd) {
      start = ch - mStart
      end = start + 1
    } else if (i == map$$1.length - 3 || ch == mEnd && map$$1[i + 3] > ch) {
      end = mEnd - mStart
      start = end - 1
      if (ch >= mEnd) { collapse = "right" }
    }
    if (start != null) {
      node = map$$1[i + 2]
      if (mStart == mEnd && bias == (node.insertLeft ? "left" : "right"))
        { collapse = bias }
      if (bias == "left" && start == 0)
        { while (i && map$$1[i - 2] == map$$1[i - 3] && map$$1[i - 1].insertLeft) {
          node = map$$1[(i -= 3) + 2]
          collapse = "left"
        } }
      if (bias == "right" && start == mEnd - mStart)
        { while (i < map$$1.length - 3 && map$$1[i + 3] == map$$1[i + 4] && !map$$1[i + 5].insertLeft) {
          node = map$$1[(i += 3) + 2]
          collapse = "right"
        } }
      break
    }
  }
  return {node: node, start: start, end: end, collapse: collapse, coverStart: mStart, coverEnd: mEnd}
}

function getUsefulRect(rects, bias) {
  var rect = nullRect
  if (bias == "left") { for (var i = 0; i < rects.length; i++) {
    if ((rect = rects[i]).left != rect.right) { break }
  } } else { for (var i$1 = rects.length - 1; i$1 >= 0; i$1--) {
    if ((rect = rects[i$1]).left != rect.right) { break }
  } }
  return rect
}

function measureCharInner(cm, prepared, ch, bias) {
  var place = nodeAndOffsetInLineMap(prepared.map, ch, bias)
  var node = place.node, start = place.start, end = place.end, collapse = place.collapse

  var rect
  if (node.nodeType == 3) { // If it is a text node, use a range to retrieve the coordinates.
    for (var i$1 = 0; i$1 < 4; i$1++) { // Retry a maximum of 4 times when nonsense rectangles are returned
      while (start && isExtendingChar(prepared.line.text.charAt(place.coverStart + start))) { --start }
      while (place.coverStart + end < place.coverEnd && isExtendingChar(prepared.line.text.charAt(place.coverStart + end))) { ++end }
      if (ie && ie_version < 9 && start == 0 && end == place.coverEnd - place.coverStart)
        { rect = node.parentNode.getBoundingClientRect() }
      else
        { rect = getUsefulRect(range(node, start, end).getClientRects(), bias) }
      if (rect.left || rect.right || start == 0) { break }
      end = start
      start = start - 1
      collapse = "right"
    }
    if (ie && ie_version < 11) { rect = maybeUpdateRectForZooming(cm.display.measure, rect) }
  } else { // If it is a widget, simply get the box for the whole widget.
    if (start > 0) { collapse = bias = "right" }
    var rects
    if (cm.options.lineWrapping && (rects = node.getClientRects()).length > 1)
      { rect = rects[bias == "right" ? rects.length - 1 : 0] }
    else
      { rect = node.getBoundingClientRect() }
  }
  if (ie && ie_version < 9 && !start && (!rect || !rect.left && !rect.right)) {
    var rSpan = node.parentNode.getClientRects()[0]
    if (rSpan)
      { rect = {left: rSpan.left, right: rSpan.left + charWidth(cm.display), top: rSpan.top, bottom: rSpan.bottom} }
    else
      { rect = nullRect }
  }

  var rtop = rect.top - prepared.rect.top, rbot = rect.bottom - prepared.rect.top
  var mid = (rtop + rbot) / 2
  var heights = prepared.view.measure.heights
  var i = 0
  for (; i < heights.length - 1; i++)
    { if (mid < heights[i]) { break } }
  var top = i ? heights[i - 1] : 0, bot = heights[i]
  var result = {left: (collapse == "right" ? rect.right : rect.left) - prepared.rect.left,
                right: (collapse == "left" ? rect.left : rect.right) - prepared.rect.left,
                top: top, bottom: bot}
  if (!rect.left && !rect.right) { result.bogus = true }
  if (!cm.options.singleCursorHeightPerLine) { result.rtop = rtop; result.rbottom = rbot }

  return result
}

// Work around problem with bounding client rects on ranges being
// returned incorrectly when zoomed on IE10 and below.
function maybeUpdateRectForZooming(measure, rect) {
  if (!window.screen || screen.logicalXDPI == null ||
      screen.logicalXDPI == screen.deviceXDPI || !hasBadZoomedRects(measure))
    { return rect }
  var scaleX = screen.logicalXDPI / screen.deviceXDPI
  var scaleY = screen.logicalYDPI / screen.deviceYDPI
  return {left: rect.left * scaleX, right: rect.right * scaleX,
          top: rect.top * scaleY, bottom: rect.bottom * scaleY}
}

function clearLineMeasurementCacheFor(lineView) {
  if (lineView.measure) {
    lineView.measure.cache = {}
    lineView.measure.heights = null
    if (lineView.rest) { for (var i = 0; i < lineView.rest.length; i++)
      { lineView.measure.caches[i] = {} } }
  }
}

function clearLineMeasurementCache(cm) {
  cm.display.externalMeasure = null
  removeChildren(cm.display.lineMeasure)
  for (var i = 0; i < cm.display.view.length; i++)
    { clearLineMeasurementCacheFor(cm.display.view[i]) }
}

function clearCaches(cm) {
  clearLineMeasurementCache(cm)
  cm.display.cachedCharWidth = cm.display.cachedTextHeight = cm.display.cachedPaddingH = null
  if (!cm.options.lineWrapping) { cm.display.maxLineChanged = true }
  cm.display.lineNumChars = null
}

function pageScrollX() { return window.pageXOffset || (document.documentElement || document.body).scrollLeft }
function pageScrollY() { return window.pageYOffset || (document.documentElement || document.body).scrollTop }

// Converts a {top, bottom, left, right} box from line-local
// coordinates into another coordinate system. Context may be one of
// "line", "div" (display.lineDiv), "local"./null (editor), "window",
// or "page".
function intoCoordSystem(cm, lineObj, rect, context) {
  if (lineObj.widgets) { for (var i = 0; i < lineObj.widgets.length; ++i) { if (lineObj.widgets[i].above) {
    var size = widgetHeight(lineObj.widgets[i])
    rect.top += size; rect.bottom += size
  } } }
  if (context == "line") { return rect }
  if (!context) { context = "local" }
  var yOff = heightAtLine(lineObj)
  if (context == "local") { yOff += paddingTop(cm.display) }
  else { yOff -= cm.display.viewOffset }
  if (context == "page" || context == "window") {
    var lOff = cm.display.lineSpace.getBoundingClientRect()
    yOff += lOff.top + (context == "window" ? 0 : pageScrollY())
    var xOff = lOff.left + (context == "window" ? 0 : pageScrollX())
    rect.left += xOff; rect.right += xOff
  }
  rect.top += yOff; rect.bottom += yOff
  return rect
}

// Coverts a box from "div" coords to another coordinate system.
// Context may be "window", "page", "div", or "local"./null.
function fromCoordSystem(cm, coords, context) {
  if (context == "div") { return coords }
  var left = coords.left, top = coords.top
  // First move into "page" coordinate system
  if (context == "page") {
    left -= pageScrollX()
    top -= pageScrollY()
  } else if (context == "local" || !context) {
    var localBox = cm.display.sizer.getBoundingClientRect()
    left += localBox.left
    top += localBox.top
  }

  var lineSpaceBox = cm.display.lineSpace.getBoundingClientRect()
  return {left: left - lineSpaceBox.left, top: top - lineSpaceBox.top}
}

function charCoords(cm, pos, context, lineObj, bias) {
  if (!lineObj) { lineObj = getLine(cm.doc, pos.line) }
  return intoCoordSystem(cm, lineObj, measureChar(cm, lineObj, pos.ch, bias), context)
}

// Returns a box for a given cursor position, which may have an
// 'other' property containing the position of the secondary cursor
// on a bidi boundary.
function cursorCoords(cm, pos, context, lineObj, preparedMeasure, varHeight) {
  lineObj = lineObj || getLine(cm.doc, pos.line)
  if (!preparedMeasure) { preparedMeasure = prepareMeasureForLine(cm, lineObj) }
  function get(ch, right) {
    var m = measureCharPrepared(cm, preparedMeasure, ch, right ? "right" : "left", varHeight)
    if (right) { m.left = m.right; } else { m.right = m.left }
    return intoCoordSystem(cm, lineObj, m, context)
  }
  function getBidi(ch, partPos) {
    var part = order[partPos], right = part.level % 2
    if (ch == bidiLeft(part) && partPos && part.level < order[partPos - 1].level) {
      part = order[--partPos]
      ch = bidiRight(part) - (part.level % 2 ? 0 : 1)
      right = true
    } else if (ch == bidiRight(part) && partPos < order.length - 1 && part.level < order[partPos + 1].level) {
      part = order[++partPos]
      ch = bidiLeft(part) - part.level % 2
      right = false
    }
    if (right && ch == part.to && ch > part.from) { return get(ch - 1) }
    return get(ch, right)
  }
  var order = getOrder(lineObj), ch = pos.ch
  if (!order) { return get(ch) }
  var partPos = getBidiPartAt(order, ch)
  var val = getBidi(ch, partPos)
  if (bidiOther != null) { val.other = getBidi(ch, bidiOther) }
  return val
}

// Used to cheaply estimate the coordinates for a position. Used for
// intermediate scroll updates.
function estimateCoords(cm, pos) {
  var left = 0
  pos = clipPos(cm.doc, pos)
  if (!cm.options.lineWrapping) { left = charWidth(cm.display) * pos.ch }
  var lineObj = getLine(cm.doc, pos.line)
  var top = heightAtLine(lineObj) + paddingTop(cm.display)
  return {left: left, right: left, top: top, bottom: top + lineObj.height}
}

// Positions returned by coordsChar contain some extra information.
// xRel is the relative x position of the input coordinates compared
// to the found position (so xRel > 0 means the coordinates are to
// the right of the character position, for example). When outside
// is true, that means the coordinates lie outside the line's
// vertical range.
function PosWithInfo(line, ch, outside, xRel) {
  var pos = Pos(line, ch)
  pos.xRel = xRel
  if (outside) { pos.outside = true }
  return pos
}

// Compute the character position closest to the given coordinates.
// Input must be lineSpace-local ("div" coordinate system).
function coordsChar(cm, x, y) {
  var doc = cm.doc
  y += cm.display.viewOffset
  if (y < 0) { return PosWithInfo(doc.first, 0, true, -1) }
  var lineN = lineAtHeight(doc, y), last = doc.first + doc.size - 1
  if (lineN > last)
    { return PosWithInfo(doc.first + doc.size - 1, getLine(doc, last).text.length, true, 1) }
  if (x < 0) { x = 0 }

  var lineObj = getLine(doc, lineN)
  for (;;) {
    var found = coordsCharInner(cm, lineObj, lineN, x, y)
    var merged = collapsedSpanAtEnd(lineObj)
    var mergedPos = merged && merged.find(0, true)
    if (merged && (found.ch > mergedPos.from.ch || found.ch == mergedPos.from.ch && found.xRel > 0))
      { lineN = lineNo(lineObj = mergedPos.to.line) }
    else
      { return found }
  }
}

function coordsCharInner(cm, lineObj, lineNo$$1, x, y) {
  var innerOff = y - heightAtLine(lineObj)
  var wrongLine = false, adjust = 2 * cm.display.wrapper.clientWidth
  var preparedMeasure = prepareMeasureForLine(cm, lineObj)

  function getX(ch) {
    var sp = cursorCoords(cm, Pos(lineNo$$1, ch), "line", lineObj, preparedMeasure)
    wrongLine = true
    if (innerOff > sp.bottom) { return sp.left - adjust }
    else if (innerOff < sp.top) { return sp.left + adjust }
    else { wrongLine = false }
    return sp.left
  }

  var bidi = getOrder(lineObj), dist = lineObj.text.length
  var from = lineLeft(lineObj), to = lineRight(lineObj)
  var fromX = getX(from), fromOutside = wrongLine, toX = getX(to), toOutside = wrongLine

  if (x > toX) { return PosWithInfo(lineNo$$1, to, toOutside, 1) }
  // Do a binary search between these bounds.
  for (;;) {
    if (bidi ? to == from || to == moveVisually(lineObj, from, 1) : to - from <= 1) {
      var ch = x < fromX || x - fromX <= toX - x ? from : to
      var outside = ch == from ? fromOutside : toOutside
      var xDiff = x - (ch == from ? fromX : toX)
      // This is a kludge to handle the case where the coordinates
      // are after a line-wrapped line. We should replace it with a
      // more general handling of cursor positions around line
      // breaks. (Issue #4078)
      if (toOutside && !bidi && !/\s/.test(lineObj.text.charAt(ch)) && xDiff > 0 &&
          ch < lineObj.text.length && preparedMeasure.view.measure.heights.length > 1) {
        var charSize = measureCharPrepared(cm, preparedMeasure, ch, "right")
        if (innerOff <= charSize.bottom && innerOff >= charSize.top && Math.abs(x - charSize.right) < xDiff) {
          outside = false
          ch++
          xDiff = x - charSize.right
        }
      }
      while (isExtendingChar(lineObj.text.charAt(ch))) { ++ch }
      var pos = PosWithInfo(lineNo$$1, ch, outside, xDiff < -1 ? -1 : xDiff > 1 ? 1 : 0)
      return pos
    }
    var step = Math.ceil(dist / 2), middle = from + step
    if (bidi) {
      middle = from
      for (var i = 0; i < step; ++i) { middle = moveVisually(lineObj, middle, 1) }
    }
    var middleX = getX(middle)
    if (middleX > x) {to = middle; toX = middleX; if (toOutside = wrongLine) { toX += 1000; } dist = step}
    else {from = middle; fromX = middleX; fromOutside = wrongLine; dist -= step}
  }
}

var measureText
// Compute the default text height.
function textHeight(display) {
  if (display.cachedTextHeight != null) { return display.cachedTextHeight }
  if (measureText == null) {
    measureText = elt("pre")
    // Measure a bunch of lines, for browsers that compute
    // fractional heights.
    for (var i = 0; i < 49; ++i) {
      measureText.appendChild(document.createTextNode("x"))
      measureText.appendChild(elt("br"))
    }
    measureText.appendChild(document.createTextNode("x"))
  }
  removeChildrenAndAdd(display.measure, measureText)
  var height = measureText.offsetHeight / 50
  if (height > 3) { display.cachedTextHeight = height }
  removeChildren(display.measure)
  return height || 1
}

// Compute the default character width.
function charWidth(display) {
  if (display.cachedCharWidth != null) { return display.cachedCharWidth }
  var anchor = elt("span", "xxxxxxxxxx")
  var pre = elt("pre", [anchor])
  removeChildrenAndAdd(display.measure, pre)
  var rect = anchor.getBoundingClientRect(), width = (rect.right - rect.left) / 10
  if (width > 2) { display.cachedCharWidth = width }
  return width || 10
}

// Do a bulk-read of the DOM positions and sizes needed to draw the
// view, so that we don't interleave reading and writing to the DOM.
function getDimensions(cm) {
  var d = cm.display, left = {}, width = {}
  var gutterLeft = d.gutters.clientLeft
  for (var n = d.gutters.firstChild, i = 0; n; n = n.nextSibling, ++i) {
    left[cm.options.gutters[i]] = n.offsetLeft + n.clientLeft + gutterLeft
    width[cm.options.gutters[i]] = n.clientWidth
  }
  return {fixedPos: compensateForHScroll(d),
          gutterTotalWidth: d.gutters.offsetWidth,
          gutterLeft: left,
          gutterWidth: width,
          wrapperWidth: d.wrapper.clientWidth}
}

// Computes display.scroller.scrollLeft + display.gutters.offsetWidth,
// but using getBoundingClientRect to get a sub-pixel-accurate
// result.
function compensateForHScroll(display) {
  return display.scroller.getBoundingClientRect().left - display.sizer.getBoundingClientRect().left
}

// Returns a function that estimates the height of a line, to use as
// first approximation until the line becomes visible (and is thus
// properly measurable).
function estimateHeight(cm) {
  var th = textHeight(cm.display), wrapping = cm.options.lineWrapping
  var perLine = wrapping && Math.max(5, cm.display.scroller.clientWidth / charWidth(cm.display) - 3)
  return function (line) {
    if (lineIsHidden(cm.doc, line)) { return 0 }

    var widgetsHeight = 0
    if (line.widgets) { for (var i = 0; i < line.widgets.length; i++) {
      if (line.widgets[i].height) { widgetsHeight += line.widgets[i].height }
    } }

    if (wrapping)
      { return widgetsHeight + (Math.ceil(line.text.length / perLine) || 1) * th }
    else
      { return widgetsHeight + th }
  }
}

function estimateLineHeights(cm) {
  var doc = cm.doc, est = estimateHeight(cm)
  doc.iter(function (line) {
    var estHeight = est(line)
    if (estHeight != line.height) { updateLineHeight(line, estHeight) }
  })
}

// Given a mouse event, find the corresponding position. If liberal
// is false, it checks whether a gutter or scrollbar was clicked,
// and returns null if it was. forRect is used by rectangular
// selections, and tries to estimate a character position even for
// coordinates beyond the right of the text.
function posFromMouse(cm, e, liberal, forRect) {
  var display = cm.display
  if (!liberal && e_target(e).getAttribute("cm-not-content") == "true") { return null }

  var x, y, space = display.lineSpace.getBoundingClientRect()
  // Fails unpredictably on IE[67] when mouse is dragged around quickly.
  try { x = e.clientX - space.left; y = e.clientY - space.top }
  catch (e) { return null }
  var coords = coordsChar(cm, x, y), line
  if (forRect && coords.xRel == 1 && (line = getLine(cm.doc, coords.line).text).length == coords.ch) {
    var colDiff = countColumn(line, line.length, cm.options.tabSize) - line.length
    coords = Pos(coords.line, Math.max(0, Math.round((x - paddingH(cm.display).left) / charWidth(cm.display)) - colDiff))
  }
  return coords
}

// Find the view element corresponding to a given line. Return null
// when the line isn't visible.
function findViewIndex(cm, n) {
  if (n >= cm.display.viewTo) { return null }
  n -= cm.display.viewFrom
  if (n < 0) { return null }
  var view = cm.display.view
  for (var i = 0; i < view.length; i++) {
    n -= view[i].size
    if (n < 0) { return i }
  }
}

function updateSelection(cm) {
  cm.display.input.showSelection(cm.display.input.prepareSelection())
}

function prepareSelection(cm, primary) {
  var doc = cm.doc, result = {}
  var curFragment = result.cursors = document.createDocumentFragment()
  var selFragment = result.selection = document.createDocumentFragment()

  for (var i = 0; i < doc.sel.ranges.length; i++) {
    if (primary === false && i == doc.sel.primIndex) { continue }
    var range$$1 = doc.sel.ranges[i]
    if (range$$1.from().line >= cm.display.viewTo || range$$1.to().line < cm.display.viewFrom) { continue }
    var collapsed = range$$1.empty()
    if (collapsed || cm.options.showCursorWhenSelecting)
      { drawSelectionCursor(cm, range$$1.head, curFragment) }
    if (!collapsed)
      { drawSelectionRange(cm, range$$1, selFragment) }
  }
  return result
}

// Draws a cursor for the given range
function drawSelectionCursor(cm, head, output) {
  var pos = cursorCoords(cm, head, "div", null, null, !cm.options.singleCursorHeightPerLine)

  var cursor = output.appendChild(elt("div", "\u00a0", "CodeMirror-cursor"))
  cursor.style.left = pos.left + "px"
  cursor.style.top = pos.top + "px"
  cursor.style.height = Math.max(0, pos.bottom - pos.top) * cm.options.cursorHeight + "px"

  if (pos.other) {
    // Secondary cursor, shown when on a 'jump' in bi-directional text
    var otherCursor = output.appendChild(elt("div", "\u00a0", "CodeMirror-cursor CodeMirror-secondarycursor"))
    otherCursor.style.display = ""
    otherCursor.style.left = pos.other.left + "px"
    otherCursor.style.top = pos.other.top + "px"
    otherCursor.style.height = (pos.other.bottom - pos.other.top) * .85 + "px"
  }
}

// Draws the given range as a highlighted selection
function drawSelectionRange(cm, range$$1, output) {
  var display = cm.display, doc = cm.doc
  var fragment = document.createDocumentFragment()
  var padding = paddingH(cm.display), leftSide = padding.left
  var rightSide = Math.max(display.sizerWidth, displayWidth(cm) - display.sizer.offsetLeft) - padding.right

  function add(left, top, width, bottom) {
    if (top < 0) { top = 0 }
    top = Math.round(top)
    bottom = Math.round(bottom)
    fragment.appendChild(elt("div", null, "CodeMirror-selected", ("position: absolute; left: " + left + "px;\n                             top: " + top + "px; width: " + (width == null ? rightSide - left : width) + "px;\n                             height: " + (bottom - top) + "px")))
  }

  function drawForLine(line, fromArg, toArg) {
    var lineObj = getLine(doc, line)
    var lineLen = lineObj.text.length
    var start, end
    function coords(ch, bias) {
      return charCoords(cm, Pos(line, ch), "div", lineObj, bias)
    }

    iterateBidiSections(getOrder(lineObj), fromArg || 0, toArg == null ? lineLen : toArg, function (from, to, dir) {
      var leftPos = coords(from, "left"), rightPos, left, right
      if (from == to) {
        rightPos = leftPos
        left = right = leftPos.left
      } else {
        rightPos = coords(to - 1, "right")
        if (dir == "rtl") { var tmp = leftPos; leftPos = rightPos; rightPos = tmp }
        left = leftPos.left
        right = rightPos.right
      }
      if (fromArg == null && from == 0) { left = leftSide }
      if (rightPos.top - leftPos.top > 3) { // Different lines, draw top part
        add(left, leftPos.top, null, leftPos.bottom)
        left = leftSide
        if (leftPos.bottom < rightPos.top) { add(left, leftPos.bottom, null, rightPos.top) }
      }
      if (toArg == null && to == lineLen) { right = rightSide }
      if (!start || leftPos.top < start.top || leftPos.top == start.top && leftPos.left < start.left)
        { start = leftPos }
      if (!end || rightPos.bottom > end.bottom || rightPos.bottom == end.bottom && rightPos.right > end.right)
        { end = rightPos }
      if (left < leftSide + 1) { left = leftSide }
      add(left, rightPos.top, right - left, rightPos.bottom)
    })
    return {start: start, end: end}
  }

  var sFrom = range$$1.from(), sTo = range$$1.to()
  if (sFrom.line == sTo.line) {
    drawForLine(sFrom.line, sFrom.ch, sTo.ch)
  } else {
    var fromLine = getLine(doc, sFrom.line), toLine = getLine(doc, sTo.line)
    var singleVLine = visualLine(fromLine) == visualLine(toLine)
    var leftEnd = drawForLine(sFrom.line, sFrom.ch, singleVLine ? fromLine.text.length + 1 : null).end
    var rightStart = drawForLine(sTo.line, singleVLine ? 0 : null, sTo.ch).start
    if (singleVLine) {
      if (leftEnd.top < rightStart.top - 2) {
        add(leftEnd.right, leftEnd.top, null, leftEnd.bottom)
        add(leftSide, rightStart.top, rightStart.left, rightStart.bottom)
      } else {
        add(leftEnd.right, leftEnd.top, rightStart.left - leftEnd.right, leftEnd.bottom)
      }
    }
    if (leftEnd.bottom < rightStart.top)
      { add(leftSide, leftEnd.bottom, null, rightStart.top) }
  }

  output.appendChild(fragment)
}

// Cursor-blinking
function restartBlink(cm) {
  if (!cm.state.focused) { return }
  var display = cm.display
  clearInterval(display.blinker)
  var on = true
  display.cursorDiv.style.visibility = ""
  if (cm.options.cursorBlinkRate > 0)
    { display.blinker = setInterval(function () { return display.cursorDiv.style.visibility = (on = !on) ? "" : "hidden"; },
      cm.options.cursorBlinkRate) }
  else if (cm.options.cursorBlinkRate < 0)
    { display.cursorDiv.style.visibility = "hidden" }
}

function ensureFocus(cm) {
  if (!cm.state.focused) { cm.display.input.focus(); onFocus(cm) }
}

function delayBlurEvent(cm) {
  cm.state.delayingBlurEvent = true
  setTimeout(function () { if (cm.state.delayingBlurEvent) {
    cm.state.delayingBlurEvent = false
    onBlur(cm)
  } }, 100)
}

function onFocus(cm, e) {
  if (cm.state.delayingBlurEvent) { cm.state.delayingBlurEvent = false }

  if (cm.options.readOnly == "nocursor") { return }
  if (!cm.state.focused) {
    signal(cm, "focus", cm, e)
    cm.state.focused = true
    addClass(cm.display.wrapper, "CodeMirror-focused")
    // This test prevents this from firing when a context
    // menu is closed (since the input reset would kill the
    // select-all detection hack)
    if (!cm.curOp && cm.display.selForContextMenu != cm.doc.sel) {
      cm.display.input.reset()
      if (webkit) { setTimeout(function () { return cm.display.input.reset(true); }, 20) } // Issue #1730
    }
    cm.display.input.receivedFocus()
  }
  restartBlink(cm)
}
function onBlur(cm, e) {
  if (cm.state.delayingBlurEvent) { return }

  if (cm.state.focused) {
    signal(cm, "blur", cm, e)
    cm.state.focused = false
    rmClass(cm.display.wrapper, "CodeMirror-focused")
  }
  clearInterval(cm.display.blinker)
  setTimeout(function () { if (!cm.state.focused) { cm.display.shift = false } }, 150)
}

// Re-align line numbers and gutter marks to compensate for
// horizontal scrolling.
function alignHorizontally(cm) {
  var display = cm.display, view = display.view
  if (!display.alignWidgets && (!display.gutters.firstChild || !cm.options.fixedGutter)) { return }
  var comp = compensateForHScroll(display) - display.scroller.scrollLeft + cm.doc.scrollLeft
  var gutterW = display.gutters.offsetWidth, left = comp + "px"
  for (var i = 0; i < view.length; i++) { if (!view[i].hidden) {
    if (cm.options.fixedGutter) {
      if (view[i].gutter)
        { view[i].gutter.style.left = left }
      if (view[i].gutterBackground)
        { view[i].gutterBackground.style.left = left }
    }
    var align = view[i].alignable
    if (align) { for (var j = 0; j < align.length; j++)
      { align[j].style.left = left } }
  } }
  if (cm.options.fixedGutter)
    { display.gutters.style.left = (comp + gutterW) + "px" }
}

// Used to ensure that the line number gutter is still the right
// size for the current document size. Returns true when an update
// is needed.
function maybeUpdateLineNumberWidth(cm) {
  if (!cm.options.lineNumbers) { return false }
  var doc = cm.doc, last = lineNumberFor(cm.options, doc.first + doc.size - 1), display = cm.display
  if (last.length != display.lineNumChars) {
    var test = display.measure.appendChild(elt("div", [elt("div", last)],
                                               "CodeMirror-linenumber CodeMirror-gutter-elt"))
    var innerW = test.firstChild.offsetWidth, padding = test.offsetWidth - innerW
    display.lineGutter.style.width = ""
    display.lineNumInnerWidth = Math.max(innerW, display.lineGutter.offsetWidth - padding) + 1
    display.lineNumWidth = display.lineNumInnerWidth + padding
    display.lineNumChars = display.lineNumInnerWidth ? last.length : -1
    display.lineGutter.style.width = display.lineNumWidth + "px"
    updateGutterSpace(cm)
    return true
  }
  return false
}

// Read the actual heights of the rendered lines, and update their
// stored heights to match.
function updateHeightsInViewport(cm) {
  var display = cm.display
  var prevBottom = display.lineDiv.offsetTop
  for (var i = 0; i < display.view.length; i++) {
    var cur = display.view[i], height = void 0
    if (cur.hidden) { continue }
    if (ie && ie_version < 8) {
      var bot = cur.node.offsetTop + cur.node.offsetHeight
      height = bot - prevBottom
      prevBottom = bot
    } else {
      var box = cur.node.getBoundingClientRect()
      height = box.bottom - box.top
    }
    var diff = cur.line.height - height
    if (height < 2) { height = textHeight(display) }
    if (diff > .001 || diff < -.001) {
      updateLineHeight(cur.line, height)
      updateWidgetHeight(cur.line)
      if (cur.rest) { for (var j = 0; j < cur.rest.length; j++)
        { updateWidgetHeight(cur.rest[j]) } }
    }
  }
}

// Read and store the height of line widgets associated with the
// given line.
function updateWidgetHeight(line) {
  if (line.widgets) { for (var i = 0; i < line.widgets.length; ++i)
    { line.widgets[i].height = line.widgets[i].node.parentNode.offsetHeight } }
}

// Compute the lines that are visible in a given viewport (defaults
// the the current scroll position). viewport may contain top,
// height, and ensure (see op.scrollToPos) properties.
function visibleLines(display, doc, viewport) {
  var top = viewport && viewport.top != null ? Math.max(0, viewport.top) : display.scroller.scrollTop
  top = Math.floor(top - paddingTop(display))
  var bottom = viewport && viewport.bottom != null ? viewport.bottom : top + display.wrapper.clientHeight

  var from = lineAtHeight(doc, top), to = lineAtHeight(doc, bottom)
  // Ensure is a {from: {line, ch}, to: {line, ch}} object, and
  // forces those lines into the viewport (if possible).
  if (viewport && viewport.ensure) {
    var ensureFrom = viewport.ensure.from.line, ensureTo = viewport.ensure.to.line
    if (ensureFrom < from) {
      from = ensureFrom
      to = lineAtHeight(doc, heightAtLine(getLine(doc, ensureFrom)) + display.wrapper.clientHeight)
    } else if (Math.min(ensureTo, doc.lastLine()) >= to) {
      from = lineAtHeight(doc, heightAtLine(getLine(doc, ensureTo)) - display.wrapper.clientHeight)
      to = ensureTo
    }
  }
  return {from: from, to: Math.max(to, from + 1)}
}

// Sync the scrollable area and scrollbars, ensure the viewport
// covers the visible area.
function setScrollTop(cm, val) {
  if (Math.abs(cm.doc.scrollTop - val) < 2) { return }
  cm.doc.scrollTop = val
  if (!gecko) { updateDisplaySimple(cm, {top: val}) }
  if (cm.display.scroller.scrollTop != val) { cm.display.scroller.scrollTop = val }
  cm.display.scrollbars.setScrollTop(val)
  if (gecko) { updateDisplaySimple(cm) }
  startWorker(cm, 100)
}
// Sync scroller and scrollbar, ensure the gutter elements are
// aligned.
function setScrollLeft(cm, val, isScroller) {
  if (isScroller ? val == cm.doc.scrollLeft : Math.abs(cm.doc.scrollLeft - val) < 2) { return }
  val = Math.min(val, cm.display.scroller.scrollWidth - cm.display.scroller.clientWidth)
  cm.doc.scrollLeft = val
  alignHorizontally(cm)
  if (cm.display.scroller.scrollLeft != val) { cm.display.scroller.scrollLeft = val }
  cm.display.scrollbars.setScrollLeft(val)
}

// Since the delta values reported on mouse wheel events are
// unstandardized between browsers and even browser versions, and
// generally horribly unpredictable, this code starts by measuring
// the scroll effect that the first few mouse wheel events have,
// and, from that, detects the way it can convert deltas to pixel
// offsets afterwards.
//
// The reason we want to know the amount a wheel event will scroll
// is that it gives us a chance to update the display before the
// actual scrolling happens, reducing flickering.

var wheelSamples = 0;
var wheelPixelsPerUnit = null
// Fill in a browser-detected starting value on browsers where we
// know one. These don't have to be accurate -- the result of them
// being wrong would just be a slight flicker on the first wheel
// scroll (if it is large enough).
if (ie) { wheelPixelsPerUnit = -.53 }
else if (gecko) { wheelPixelsPerUnit = 15 }
else if (chrome) { wheelPixelsPerUnit = -.7 }
else if (safari) { wheelPixelsPerUnit = -1/3 }

function wheelEventDelta(e) {
  var dx = e.wheelDeltaX, dy = e.wheelDeltaY
  if (dx == null && e.detail && e.axis == e.HORIZONTAL_AXIS) { dx = e.detail }
  if (dy == null && e.detail && e.axis == e.VERTICAL_AXIS) { dy = e.detail }
  else if (dy == null) { dy = e.wheelDelta }
  return {x: dx, y: dy}
}
function wheelEventPixels(e) {
  var delta = wheelEventDelta(e)
  delta.x *= wheelPixelsPerUnit
  delta.y *= wheelPixelsPerUnit
  return delta
}

function onScrollWheel(cm, e) {
  var delta = wheelEventDelta(e), dx = delta.x, dy = delta.y

  var display = cm.display, scroll = display.scroller
  // Quit if there's nothing to scroll here
  var canScrollX = scroll.scrollWidth > scroll.clientWidth
  var canScrollY = scroll.scrollHeight > scroll.clientHeight
  if (!(dx && canScrollX || dy && canScrollY)) { return }

  // Webkit browsers on OS X abort momentum scrolls when the target
  // of the scroll event is removed from the scrollable element.
  // This hack (see related code in patchDisplay) makes sure the
  // element is kept around.
  if (dy && mac && webkit) {
    outer: for (var cur = e.target, view = display.view; cur != scroll; cur = cur.parentNode) {
      for (var i = 0; i < view.length; i++) {
        if (view[i].node == cur) {
          cm.display.currentWheelTarget = cur
          break outer
        }
      }
    }
  }

  // On some browsers, horizontal scrolling will cause redraws to
  // happen before the gutter has been realigned, causing it to
  // wriggle around in a most unseemly way. When we have an
  // estimated pixels/delta value, we just handle horizontal
  // scrolling entirely here. It'll be slightly off from native, but
  // better than glitching out.
  if (dx && !gecko && !presto && wheelPixelsPerUnit != null) {
    if (dy && canScrollY)
      { setScrollTop(cm, Math.max(0, Math.min(scroll.scrollTop + dy * wheelPixelsPerUnit, scroll.scrollHeight - scroll.clientHeight))) }
    setScrollLeft(cm, Math.max(0, Math.min(scroll.scrollLeft + dx * wheelPixelsPerUnit, scroll.scrollWidth - scroll.clientWidth)))
    // Only prevent default scrolling if vertical scrolling is
    // actually possible. Otherwise, it causes vertical scroll
    // jitter on OSX trackpads when deltaX is small and deltaY
    // is large (issue #3579)
    if (!dy || (dy && canScrollY))
      { e_preventDefault(e) }
    display.wheelStartX = null // Abort measurement, if in progress
    return
  }

  // 'Project' the visible viewport to cover the area that is being
  // scrolled into view (if we know enough to estimate it).
  if (dy && wheelPixelsPerUnit != null) {
    var pixels = dy * wheelPixelsPerUnit
    var top = cm.doc.scrollTop, bot = top + display.wrapper.clientHeight
    if (pixels < 0) { top = Math.max(0, top + pixels - 50) }
    else { bot = Math.min(cm.doc.height, bot + pixels + 50) }
    updateDisplaySimple(cm, {top: top, bottom: bot})
  }

  if (wheelSamples < 20) {
    if (display.wheelStartX == null) {
      display.wheelStartX = scroll.scrollLeft; display.wheelStartY = scroll.scrollTop
      display.wheelDX = dx; display.wheelDY = dy
      setTimeout(function () {
        if (display.wheelStartX == null) { return }
        var movedX = scroll.scrollLeft - display.wheelStartX
        var movedY = scroll.scrollTop - display.wheelStartY
        var sample = (movedY && display.wheelDY && movedY / display.wheelDY) ||
          (movedX && display.wheelDX && movedX / display.wheelDX)
        display.wheelStartX = display.wheelStartY = null
        if (!sample) { return }
        wheelPixelsPerUnit = (wheelPixelsPerUnit * wheelSamples + sample) / (wheelSamples + 1)
        ++wheelSamples
      }, 200)
    } else {
      display.wheelDX += dx; display.wheelDY += dy
    }
  }
}

// SCROLLBARS

// Prepare DOM reads needed to update the scrollbars. Done in one
// shot to minimize update/measure roundtrips.
function measureForScrollbars(cm) {
  var d = cm.display, gutterW = d.gutters.offsetWidth
  var docH = Math.round(cm.doc.height + paddingVert(cm.display))
  return {
    clientHeight: d.scroller.clientHeight,
    viewHeight: d.wrapper.clientHeight,
    scrollWidth: d.scroller.scrollWidth, clientWidth: d.scroller.clientWidth,
    viewWidth: d.wrapper.clientWidth,
    barLeft: cm.options.fixedGutter ? gutterW : 0,
    docHeight: docH,
    scrollHeight: docH + scrollGap(cm) + d.barHeight,
    nativeBarWidth: d.nativeBarWidth,
    gutterWidth: gutterW
  }
}

function NativeScrollbars(place, scroll, cm) {
  this.cm = cm
  var vert = this.vert = elt("div", [elt("div", null, null, "min-width: 1px")], "CodeMirror-vscrollbar")
  var horiz = this.horiz = elt("div", [elt("div", null, null, "height: 100%; min-height: 1px")], "CodeMirror-hscrollbar")
  place(vert); place(horiz)

  on(vert, "scroll", function () {
    if (vert.clientHeight) { scroll(vert.scrollTop, "vertical") }
  })
  on(horiz, "scroll", function () {
    if (horiz.clientWidth) { scroll(horiz.scrollLeft, "horizontal") }
  })

  this.checkedZeroWidth = false
  // Need to set a minimum width to see the scrollbar on IE7 (but must not set it on IE8).
  if (ie && ie_version < 8) { this.horiz.style.minHeight = this.vert.style.minWidth = "18px" }
}

NativeScrollbars.prototype = copyObj({
  update: function(measure) {
    var needsH = measure.scrollWidth > measure.clientWidth + 1
    var needsV = measure.scrollHeight > measure.clientHeight + 1
    var sWidth = measure.nativeBarWidth

    if (needsV) {
      this.vert.style.display = "block"
      this.vert.style.bottom = needsH ? sWidth + "px" : "0"
      var totalHeight = measure.viewHeight - (needsH ? sWidth : 0)
      // A bug in IE8 can cause this value to be negative, so guard it.
      this.vert.firstChild.style.height =
        Math.max(0, measure.scrollHeight - measure.clientHeight + totalHeight) + "px"
    } else {
      this.vert.style.display = ""
      this.vert.firstChild.style.height = "0"
    }

    if (needsH) {
      this.horiz.style.display = "block"
      this.horiz.style.right = needsV ? sWidth + "px" : "0"
      this.horiz.style.left = measure.barLeft + "px"
      var totalWidth = measure.viewWidth - measure.barLeft - (needsV ? sWidth : 0)
      this.horiz.firstChild.style.width =
        (measure.scrollWidth - measure.clientWidth + totalWidth) + "px"
    } else {
      this.horiz.style.display = ""
      this.horiz.firstChild.style.width = "0"
    }

    if (!this.checkedZeroWidth && measure.clientHeight > 0) {
      if (sWidth == 0) { this.zeroWidthHack() }
      this.checkedZeroWidth = true
    }

    return {right: needsV ? sWidth : 0, bottom: needsH ? sWidth : 0}
  },
  setScrollLeft: function(pos) {
    if (this.horiz.scrollLeft != pos) { this.horiz.scrollLeft = pos }
    if (this.disableHoriz) { this.enableZeroWidthBar(this.horiz, this.disableHoriz) }
  },
  setScrollTop: function(pos) {
    if (this.vert.scrollTop != pos) { this.vert.scrollTop = pos }
    if (this.disableVert) { this.enableZeroWidthBar(this.vert, this.disableVert) }
  },
  zeroWidthHack: function() {
    var w = mac && !mac_geMountainLion ? "12px" : "18px"
    this.horiz.style.height = this.vert.style.width = w
    this.horiz.style.pointerEvents = this.vert.style.pointerEvents = "none"
    this.disableHoriz = new Delayed
    this.disableVert = new Delayed
  },
  enableZeroWidthBar: function(bar, delay) {
    bar.style.pointerEvents = "auto"
    function maybeDisable() {
      // To find out whether the scrollbar is still visible, we
      // check whether the element under the pixel in the bottom
      // left corner of the scrollbar box is the scrollbar box
      // itself (when the bar is still visible) or its filler child
      // (when the bar is hidden). If it is still visible, we keep
      // it enabled, if it's hidden, we disable pointer events.
      var box = bar.getBoundingClientRect()
      var elt$$1 = document.elementFromPoint(box.left + 1, box.bottom - 1)
      if (elt$$1 != bar) { bar.style.pointerEvents = "none" }
      else { delay.set(1000, maybeDisable) }
    }
    delay.set(1000, maybeDisable)
  },
  clear: function() {
    var parent = this.horiz.parentNode
    parent.removeChild(this.horiz)
    parent.removeChild(this.vert)
  }
}, NativeScrollbars.prototype)

function NullScrollbars() {}

NullScrollbars.prototype = copyObj({
  update: function() { return {bottom: 0, right: 0} },
  setScrollLeft: function() {},
  setScrollTop: function() {},
  clear: function() {}
}, NullScrollbars.prototype)

function updateScrollbars(cm, measure) {
  if (!measure) { measure = measureForScrollbars(cm) }
  var startWidth = cm.display.barWidth, startHeight = cm.display.barHeight
  updateScrollbarsInner(cm, measure)
  for (var i = 0; i < 4 && startWidth != cm.display.barWidth || startHeight != cm.display.barHeight; i++) {
    if (startWidth != cm.display.barWidth && cm.options.lineWrapping)
      { updateHeightsInViewport(cm) }
    updateScrollbarsInner(cm, measureForScrollbars(cm))
    startWidth = cm.display.barWidth; startHeight = cm.display.barHeight
  }
}

// Re-synchronize the fake scrollbars with the actual size of the
// content.
function updateScrollbarsInner(cm, measure) {
  var d = cm.display
  var sizes = d.scrollbars.update(measure)

  d.sizer.style.paddingRight = (d.barWidth = sizes.right) + "px"
  d.sizer.style.paddingBottom = (d.barHeight = sizes.bottom) + "px"
  d.heightForcer.style.borderBottom = sizes.bottom + "px solid transparent"

  if (sizes.right && sizes.bottom) {
    d.scrollbarFiller.style.display = "block"
    d.scrollbarFiller.style.height = sizes.bottom + "px"
    d.scrollbarFiller.style.width = sizes.right + "px"
  } else { d.scrollbarFiller.style.display = "" }
  if (sizes.bottom && cm.options.coverGutterNextToScrollbar && cm.options.fixedGutter) {
    d.gutterFiller.style.display = "block"
    d.gutterFiller.style.height = sizes.bottom + "px"
    d.gutterFiller.style.width = measure.gutterWidth + "px"
  } else { d.gutterFiller.style.display = "" }
}

var scrollbarModel = {"native": NativeScrollbars, "null": NullScrollbars}

function initScrollbars(cm) {
  if (cm.display.scrollbars) {
    cm.display.scrollbars.clear()
    if (cm.display.scrollbars.addClass)
      { rmClass(cm.display.wrapper, cm.display.scrollbars.addClass) }
  }

  cm.display.scrollbars = new scrollbarModel[cm.options.scrollbarStyle](function (node) {
    cm.display.wrapper.insertBefore(node, cm.display.scrollbarFiller)
    // Prevent clicks in the scrollbars from killing focus
    on(node, "mousedown", function () {
      if (cm.state.focused) { setTimeout(function () { return cm.display.input.focus(); }, 0) }
    })
    node.setAttribute("cm-not-content", "true")
  }, function (pos, axis) {
    if (axis == "horizontal") { setScrollLeft(cm, pos) }
    else { setScrollTop(cm, pos) }
  }, cm)
  if (cm.display.scrollbars.addClass)
    { addClass(cm.display.wrapper, cm.display.scrollbars.addClass) }
}

// SCROLLING THINGS INTO VIEW

// If an editor sits on the top or bottom of the window, partially
// scrolled out of view, this ensures that the cursor is visible.
function maybeScrollWindow(cm, coords) {
  if (signalDOMEvent(cm, "scrollCursorIntoView")) { return }

  var display = cm.display, box = display.sizer.getBoundingClientRect(), doScroll = null
  if (coords.top + box.top < 0) { doScroll = true }
  else if (coords.bottom + box.top > (window.innerHeight || document.documentElement.clientHeight)) { doScroll = false }
  if (doScroll != null && !phantom) {
    var scrollNode = elt("div", "\u200b", null, ("position: absolute;\n                         top: " + (coords.top - display.viewOffset - paddingTop(cm.display)) + "px;\n                         height: " + (coords.bottom - coords.top + scrollGap(cm) + display.barHeight) + "px;\n                         left: " + (coords.left) + "px; width: 2px;"))
    cm.display.lineSpace.appendChild(scrollNode)
    scrollNode.scrollIntoView(doScroll)
    cm.display.lineSpace.removeChild(scrollNode)
  }
}

// Scroll a given position into view (immediately), verifying that
// it actually became visible (as line heights are accurately
// measured, the position of something may 'drift' during drawing).
function scrollPosIntoView(cm, pos, end, margin) {
  if (margin == null) { margin = 0 }
  var coords
  for (var limit = 0; limit < 5; limit++) {
    var changed = false
    coords = cursorCoords(cm, pos)
    var endCoords = !end || end == pos ? coords : cursorCoords(cm, end)
    var scrollPos = calculateScrollPos(cm, Math.min(coords.left, endCoords.left),
                                       Math.min(coords.top, endCoords.top) - margin,
                                       Math.max(coords.left, endCoords.left),
                                       Math.max(coords.bottom, endCoords.bottom) + margin)
    var startTop = cm.doc.scrollTop, startLeft = cm.doc.scrollLeft
    if (scrollPos.scrollTop != null) {
      setScrollTop(cm, scrollPos.scrollTop)
      if (Math.abs(cm.doc.scrollTop - startTop) > 1) { changed = true }
    }
    if (scrollPos.scrollLeft != null) {
      setScrollLeft(cm, scrollPos.scrollLeft)
      if (Math.abs(cm.doc.scrollLeft - startLeft) > 1) { changed = true }
    }
    if (!changed) { break }
  }
  return coords
}

// Scroll a given set of coordinates into view (immediately).
function scrollIntoView(cm, x1, y1, x2, y2) {
  var scrollPos = calculateScrollPos(cm, x1, y1, x2, y2)
  if (scrollPos.scrollTop != null) { setScrollTop(cm, scrollPos.scrollTop) }
  if (scrollPos.scrollLeft != null) { setScrollLeft(cm, scrollPos.scrollLeft) }
}

// Calculate a new scroll position needed to scroll the given
// rectangle into view. Returns an object with scrollTop and
// scrollLeft properties. When these are undefined, the
// vertical/horizontal position does not need to be adjusted.
function calculateScrollPos(cm, x1, y1, x2, y2) {
  var display = cm.display, snapMargin = textHeight(cm.display)
  if (y1 < 0) { y1 = 0 }
  var screentop = cm.curOp && cm.curOp.scrollTop != null ? cm.curOp.scrollTop : display.scroller.scrollTop
  var screen = displayHeight(cm), result = {}
  if (y2 - y1 > screen) { y2 = y1 + screen }
  var docBottom = cm.doc.height + paddingVert(display)
  var atTop = y1 < snapMargin, atBottom = y2 > docBottom - snapMargin
  if (y1 < screentop) {
    result.scrollTop = atTop ? 0 : y1
  } else if (y2 > screentop + screen) {
    var newTop = Math.min(y1, (atBottom ? docBottom : y2) - screen)
    if (newTop != screentop) { result.scrollTop = newTop }
  }

  var screenleft = cm.curOp && cm.curOp.scrollLeft != null ? cm.curOp.scrollLeft : display.scroller.scrollLeft
  var screenw = displayWidth(cm) - (cm.options.fixedGutter ? display.gutters.offsetWidth : 0)
  var tooWide = x2 - x1 > screenw
  if (tooWide) { x2 = x1 + screenw }
  if (x1 < 10)
    { result.scrollLeft = 0 }
  else if (x1 < screenleft)
    { result.scrollLeft = Math.max(0, x1 - (tooWide ? 0 : 10)) }
  else if (x2 > screenw + screenleft - 3)
    { result.scrollLeft = x2 + (tooWide ? 0 : 10) - screenw }
  return result
}

// Store a relative adjustment to the scroll position in the current
// operation (to be applied when the operation finishes).
function addToScrollPos(cm, left, top) {
  if (left != null || top != null) { resolveScrollToPos(cm) }
  if (left != null)
    { cm.curOp.scrollLeft = (cm.curOp.scrollLeft == null ? cm.doc.scrollLeft : cm.curOp.scrollLeft) + left }
  if (top != null)
    { cm.curOp.scrollTop = (cm.curOp.scrollTop == null ? cm.doc.scrollTop : cm.curOp.scrollTop) + top }
}

// Make sure that at the end of the operation the current cursor is
// shown.
function ensureCursorVisible(cm) {
  resolveScrollToPos(cm)
  var cur = cm.getCursor(), from = cur, to = cur
  if (!cm.options.lineWrapping) {
    from = cur.ch ? Pos(cur.line, cur.ch - 1) : cur
    to = Pos(cur.line, cur.ch + 1)
  }
  cm.curOp.scrollToPos = {from: from, to: to, margin: cm.options.cursorScrollMargin, isCursor: true}
}

// When an operation has its scrollToPos property set, and another
// scroll action is applied before the end of the operation, this
// 'simulates' scrolling that position into view in a cheap way, so
// that the effect of intermediate scroll commands is not ignored.
function resolveScrollToPos(cm) {
  var range$$1 = cm.curOp.scrollToPos
  if (range$$1) {
    cm.curOp.scrollToPos = null
    var from = estimateCoords(cm, range$$1.from), to = estimateCoords(cm, range$$1.to)
    var sPos = calculateScrollPos(cm, Math.min(from.left, to.left),
                                  Math.min(from.top, to.top) - range$$1.margin,
                                  Math.max(from.right, to.right),
                                  Math.max(from.bottom, to.bottom) + range$$1.margin)
    cm.scrollTo(sPos.scrollLeft, sPos.scrollTop)
  }
}

// Operations are used to wrap a series of changes to the editor
// state in such a way that each change won't have to update the
// cursor and display (which would be awkward, slow, and
// error-prone). Instead, display updates are batched and then all
// combined and executed at once.

var nextOpId = 0
// Start a new operation.
function startOperation(cm) {
  cm.curOp = {
    cm: cm,
    viewChanged: false,      // Flag that indicates that lines might need to be redrawn
    startHeight: cm.doc.height, // Used to detect need to update scrollbar
    forceUpdate: false,      // Used to force a redraw
    updateInput: null,       // Whether to reset the input textarea
    typing: false,           // Whether this reset should be careful to leave existing text (for compositing)
    changeObjs: null,        // Accumulated changes, for firing change events
    cursorActivityHandlers: null, // Set of handlers to fire cursorActivity on
    cursorActivityCalled: 0, // Tracks which cursorActivity handlers have been called already
    selectionChanged: false, // Whether the selection needs to be redrawn
    updateMaxLine: false,    // Set when the widest line needs to be determined anew
    scrollLeft: null, scrollTop: null, // Intermediate scroll position, not pushed to DOM yet
    scrollToPos: null,       // Used to scroll to a specific position
    focus: false,
    id: ++nextOpId           // Unique ID
  }
  pushOperation(cm.curOp)
}

// Finish an operation, updating the display and signalling delayed events
function endOperation(cm) {
  var op = cm.curOp
  finishOperation(op, function (group) {
    for (var i = 0; i < group.ops.length; i++)
      { group.ops[i].cm.curOp = null }
    endOperations(group)
  })
}

// The DOM updates done when an operation finishes are batched so
// that the minimum number of relayouts are required.
function endOperations(group) {
  var ops = group.ops
  for (var i = 0; i < ops.length; i++) // Read DOM
    { endOperation_R1(ops[i]) }
  for (var i$1 = 0; i$1 < ops.length; i$1++) // Write DOM (maybe)
    { endOperation_W1(ops[i$1]) }
  for (var i$2 = 0; i$2 < ops.length; i$2++) // Read DOM
    { endOperation_R2(ops[i$2]) }
  for (var i$3 = 0; i$3 < ops.length; i$3++) // Write DOM (maybe)
    { endOperation_W2(ops[i$3]) }
  for (var i$4 = 0; i$4 < ops.length; i$4++) // Read DOM
    { endOperation_finish(ops[i$4]) }
}

function endOperation_R1(op) {
  var cm = op.cm, display = cm.display
  maybeClipScrollbars(cm)
  if (op.updateMaxLine) { findMaxLine(cm) }

  op.mustUpdate = op.viewChanged || op.forceUpdate || op.scrollTop != null ||
    op.scrollToPos && (op.scrollToPos.from.line < display.viewFrom ||
                       op.scrollToPos.to.line >= display.viewTo) ||
    display.maxLineChanged && cm.options.lineWrapping
  op.update = op.mustUpdate &&
    new DisplayUpdate(cm, op.mustUpdate && {top: op.scrollTop, ensure: op.scrollToPos}, op.forceUpdate)
}

function endOperation_W1(op) {
  op.updatedDisplay = op.mustUpdate && updateDisplayIfNeeded(op.cm, op.update)
}

function endOperation_R2(op) {
  var cm = op.cm, display = cm.display
  if (op.updatedDisplay) { updateHeightsInViewport(cm) }

  op.barMeasure = measureForScrollbars(cm)

  // If the max line changed since it was last measured, measure it,
  // and ensure the document's width matches it.
  // updateDisplay_W2 will use these properties to do the actual resizing
  if (display.maxLineChanged && !cm.options.lineWrapping) {
    op.adjustWidthTo = measureChar(cm, display.maxLine, display.maxLine.text.length).left + 3
    cm.display.sizerWidth = op.adjustWidthTo
    op.barMeasure.scrollWidth =
      Math.max(display.scroller.clientWidth, display.sizer.offsetLeft + op.adjustWidthTo + scrollGap(cm) + cm.display.barWidth)
    op.maxScrollLeft = Math.max(0, display.sizer.offsetLeft + op.adjustWidthTo - displayWidth(cm))
  }

  if (op.updatedDisplay || op.selectionChanged)
    { op.preparedSelection = display.input.prepareSelection(op.focus) }
}

function endOperation_W2(op) {
  var cm = op.cm

  if (op.adjustWidthTo != null) {
    cm.display.sizer.style.minWidth = op.adjustWidthTo + "px"
    if (op.maxScrollLeft < cm.doc.scrollLeft)
      { setScrollLeft(cm, Math.min(cm.display.scroller.scrollLeft, op.maxScrollLeft), true) }
    cm.display.maxLineChanged = false
  }

  var takeFocus = op.focus && op.focus == activeElt() && (!document.hasFocus || document.hasFocus())
  if (op.preparedSelection)
    { cm.display.input.showSelection(op.preparedSelection, takeFocus) }
  if (op.updatedDisplay || op.startHeight != cm.doc.height)
    { updateScrollbars(cm, op.barMeasure) }
  if (op.updatedDisplay)
    { setDocumentHeight(cm, op.barMeasure) }

  if (op.selectionChanged) { restartBlink(cm) }

  if (cm.state.focused && op.updateInput)
    { cm.display.input.reset(op.typing) }
  if (takeFocus) { ensureFocus(op.cm) }
}

function endOperation_finish(op) {
  var cm = op.cm, display = cm.display, doc = cm.doc

  if (op.updatedDisplay) { postUpdateDisplay(cm, op.update) }

  // Abort mouse wheel delta measurement, when scrolling explicitly
  if (display.wheelStartX != null && (op.scrollTop != null || op.scrollLeft != null || op.scrollToPos))
    { display.wheelStartX = display.wheelStartY = null }

  // Propagate the scroll position to the actual DOM scroller
  if (op.scrollTop != null && (display.scroller.scrollTop != op.scrollTop || op.forceScroll)) {
    doc.scrollTop = Math.max(0, Math.min(display.scroller.scrollHeight - display.scroller.clientHeight, op.scrollTop))
    display.scrollbars.setScrollTop(doc.scrollTop)
    display.scroller.scrollTop = doc.scrollTop
  }
  if (op.scrollLeft != null && (display.scroller.scrollLeft != op.scrollLeft || op.forceScroll)) {
    doc.scrollLeft = Math.max(0, Math.min(display.scroller.scrollWidth - display.scroller.clientWidth, op.scrollLeft))
    display.scrollbars.setScrollLeft(doc.scrollLeft)
    display.scroller.scrollLeft = doc.scrollLeft
    alignHorizontally(cm)
  }
  // If we need to scroll a specific position into view, do so.
  if (op.scrollToPos) {
    var coords = scrollPosIntoView(cm, clipPos(doc, op.scrollToPos.from),
                                   clipPos(doc, op.scrollToPos.to), op.scrollToPos.margin)
    if (op.scrollToPos.isCursor && cm.state.focused) { maybeScrollWindow(cm, coords) }
  }

  // Fire events for markers that are hidden/unidden by editing or
  // undoing
  var hidden = op.maybeHiddenMarkers, unhidden = op.maybeUnhiddenMarkers
  if (hidden) { for (var i = 0; i < hidden.length; ++i)
    { if (!hidden[i].lines.length) { signal(hidden[i], "hide") } } }
  if (unhidden) { for (var i$1 = 0; i$1 < unhidden.length; ++i$1)
    { if (unhidden[i$1].lines.length) { signal(unhidden[i$1], "unhide") } } }

  if (display.wrapper.offsetHeight)
    { doc.scrollTop = cm.display.scroller.scrollTop }

  // Fire change events, and delayed event handlers
  if (op.changeObjs)
    { signal(cm, "changes", cm, op.changeObjs) }
  if (op.update)
    { op.update.finish() }
}

// Run the given function in an operation
function runInOp(cm, f) {
  if (cm.curOp) { return f() }
  startOperation(cm)
  try { return f() }
  finally { endOperation(cm) }
}
// Wraps a function in an operation. Returns the wrapped function.
function operation(cm, f) {
  return function() {
    if (cm.curOp) { return f.apply(cm, arguments) }
    startOperation(cm)
    try { return f.apply(cm, arguments) }
    finally { endOperation(cm) }
  }
}
// Used to add methods to editor and doc instances, wrapping them in
// operations.
function methodOp(f) {
  return function() {
    if (this.curOp) { return f.apply(this, arguments) }
    startOperation(this)
    try { return f.apply(this, arguments) }
    finally { endOperation(this) }
  }
}
function docMethodOp(f) {
  return function() {
    var cm = this.cm
    if (!cm || cm.curOp) { return f.apply(this, arguments) }
    startOperation(cm)
    try { return f.apply(this, arguments) }
    finally { endOperation(cm) }
  }
}

// Updates the display.view data structure for a given change to the
// document. From and to are in pre-change coordinates. Lendiff is
// the amount of lines added or subtracted by the change. This is
// used for changes that span multiple lines, or change the way
// lines are divided into visual lines. regLineChange (below)
// registers single-line changes.
function regChange(cm, from, to, lendiff) {
  if (from == null) { from = cm.doc.first }
  if (to == null) { to = cm.doc.first + cm.doc.size }
  if (!lendiff) { lendiff = 0 }

  var display = cm.display
  if (lendiff && to < display.viewTo &&
      (display.updateLineNumbers == null || display.updateLineNumbers > from))
    { display.updateLineNumbers = from }

  cm.curOp.viewChanged = true

  if (from >= display.viewTo) { // Change after
    if (sawCollapsedSpans && visualLineNo(cm.doc, from) < display.viewTo)
      { resetView(cm) }
  } else if (to <= display.viewFrom) { // Change before
    if (sawCollapsedSpans && visualLineEndNo(cm.doc, to + lendiff) > display.viewFrom) {
      resetView(cm)
    } else {
      display.viewFrom += lendiff
      display.viewTo += lendiff
    }
  } else if (from <= display.viewFrom && to >= display.viewTo) { // Full overlap
    resetView(cm)
  } else if (from <= display.viewFrom) { // Top overlap
    var cut = viewCuttingPoint(cm, to, to + lendiff, 1)
    if (cut) {
      display.view = display.view.slice(cut.index)
      display.viewFrom = cut.lineN
      display.viewTo += lendiff
    } else {
      resetView(cm)
    }
  } else if (to >= display.viewTo) { // Bottom overlap
    var cut$1 = viewCuttingPoint(cm, from, from, -1)
    if (cut$1) {
      display.view = display.view.slice(0, cut$1.index)
      display.viewTo = cut$1.lineN
    } else {
      resetView(cm)
    }
  } else { // Gap in the middle
    var cutTop = viewCuttingPoint(cm, from, from, -1)
    var cutBot = viewCuttingPoint(cm, to, to + lendiff, 1)
    if (cutTop && cutBot) {
      display.view = display.view.slice(0, cutTop.index)
        .concat(buildViewArray(cm, cutTop.lineN, cutBot.lineN))
        .concat(display.view.slice(cutBot.index))
      display.viewTo += lendiff
    } else {
      resetView(cm)
    }
  }

  var ext = display.externalMeasured
  if (ext) {
    if (to < ext.lineN)
      { ext.lineN += lendiff }
    else if (from < ext.lineN + ext.size)
      { display.externalMeasured = null }
  }
}

// Register a change to a single line. Type must be one of "text",
// "gutter", "class", "widget"
function regLineChange(cm, line, type) {
  cm.curOp.viewChanged = true
  var display = cm.display, ext = cm.display.externalMeasured
  if (ext && line >= ext.lineN && line < ext.lineN + ext.size)
    { display.externalMeasured = null }

  if (line < display.viewFrom || line >= display.viewTo) { return }
  var lineView = display.view[findViewIndex(cm, line)]
  if (lineView.node == null) { return }
  var arr = lineView.changes || (lineView.changes = [])
  if (indexOf(arr, type) == -1) { arr.push(type) }
}

// Clear the view.
function resetView(cm) {
  cm.display.viewFrom = cm.display.viewTo = cm.doc.first
  cm.display.view = []
  cm.display.viewOffset = 0
}

function viewCuttingPoint(cm, oldN, newN, dir) {
  var index = findViewIndex(cm, oldN), diff, view = cm.display.view
  if (!sawCollapsedSpans || newN == cm.doc.first + cm.doc.size)
    { return {index: index, lineN: newN} }
  var n = cm.display.viewFrom
  for (var i = 0; i < index; i++)
    { n += view[i].size }
  if (n != oldN) {
    if (dir > 0) {
      if (index == view.length - 1) { return null }
      diff = (n + view[index].size) - oldN
      index++
    } else {
      diff = n - oldN
    }
    oldN += diff; newN += diff
  }
  while (visualLineNo(cm.doc, newN) != newN) {
    if (index == (dir < 0 ? 0 : view.length - 1)) { return null }
    newN += dir * view[index - (dir < 0 ? 1 : 0)].size
    index += dir
  }
  return {index: index, lineN: newN}
}

// Force the view to cover a given range, adding empty view element
// or clipping off existing ones as needed.
function adjustView(cm, from, to) {
  var display = cm.display, view = display.view
  if (view.length == 0 || from >= display.viewTo || to <= display.viewFrom) {
    display.view = buildViewArray(cm, from, to)
    display.viewFrom = from
  } else {
    if (display.viewFrom > from)
      { display.view = buildViewArray(cm, from, display.viewFrom).concat(display.view) }
    else if (display.viewFrom < from)
      { display.view = display.view.slice(findViewIndex(cm, from)) }
    display.viewFrom = from
    if (display.viewTo < to)
      { display.view = display.view.concat(buildViewArray(cm, display.viewTo, to)) }
    else if (display.viewTo > to)
      { display.view = display.view.slice(0, findViewIndex(cm, to)) }
  }
  display.viewTo = to
}

// Count the number of lines in the view whose DOM representation is
// out of date (or nonexistent).
function countDirtyView(cm) {
  var view = cm.display.view, dirty = 0
  for (var i = 0; i < view.length; i++) {
    var lineView = view[i]
    if (!lineView.hidden && (!lineView.node || lineView.changes)) { ++dirty }
  }
  return dirty
}

// HIGHLIGHT WORKER

function startWorker(cm, time) {
  if (cm.doc.mode.startState && cm.doc.frontier < cm.display.viewTo)
    { cm.state.highlight.set(time, bind(highlightWorker, cm)) }
}

function highlightWorker(cm) {
  var doc = cm.doc
  if (doc.frontier < doc.first) { doc.frontier = doc.first }
  if (doc.frontier >= cm.display.viewTo) { return }
  var end = +new Date + cm.options.workTime
  var state = copyState(doc.mode, getStateBefore(cm, doc.frontier))
  var changedLines = []

  doc.iter(doc.frontier, Math.min(doc.first + doc.size, cm.display.viewTo + 500), function (line) {
    if (doc.frontier >= cm.display.viewFrom) { // Visible
      var oldStyles = line.styles, tooLong = line.text.length > cm.options.maxHighlightLength
      var highlighted = highlightLine(cm, line, tooLong ? copyState(doc.mode, state) : state, true)
      line.styles = highlighted.styles
      var oldCls = line.styleClasses, newCls = highlighted.classes
      if (newCls) { line.styleClasses = newCls }
      else if (oldCls) { line.styleClasses = null }
      var ischange = !oldStyles || oldStyles.length != line.styles.length ||
        oldCls != newCls && (!oldCls || !newCls || oldCls.bgClass != newCls.bgClass || oldCls.textClass != newCls.textClass)
      for (var i = 0; !ischange && i < oldStyles.length; ++i) { ischange = oldStyles[i] != line.styles[i] }
      if (ischange) { changedLines.push(doc.frontier) }
      line.stateAfter = tooLong ? state : copyState(doc.mode, state)
    } else {
      if (line.text.length <= cm.options.maxHighlightLength)
        { processLine(cm, line.text, state) }
      line.stateAfter = doc.frontier % 5 == 0 ? copyState(doc.mode, state) : null
    }
    ++doc.frontier
    if (+new Date > end) {
      startWorker(cm, cm.options.workDelay)
      return true
    }
  })
  if (changedLines.length) { runInOp(cm, function () {
    for (var i = 0; i < changedLines.length; i++)
      { regLineChange(cm, changedLines[i], "text") }
  }) }
}

// DISPLAY DRAWING

function DisplayUpdate(cm, viewport, force) {
  var display = cm.display

  this.viewport = viewport
  // Store some values that we'll need later (but don't want to force a relayout for)
  this.visible = visibleLines(display, cm.doc, viewport)
  this.editorIsHidden = !display.wrapper.offsetWidth
  this.wrapperHeight = display.wrapper.clientHeight
  this.wrapperWidth = display.wrapper.clientWidth
  this.oldDisplayWidth = displayWidth(cm)
  this.force = force
  this.dims = getDimensions(cm)
  this.events = []
}

DisplayUpdate.prototype.signal = function(emitter, type) {
  if (hasHandler(emitter, type))
    { this.events.push(arguments) }
}
DisplayUpdate.prototype.finish = function() {
  var this$1 = this;

  for (var i = 0; i < this.events.length; i++)
    { signal.apply(null, this$1.events[i]) }
}

function maybeClipScrollbars(cm) {
  var display = cm.display
  if (!display.scrollbarsClipped && display.scroller.offsetWidth) {
    display.nativeBarWidth = display.scroller.offsetWidth - display.scroller.clientWidth
    display.heightForcer.style.height = scrollGap(cm) + "px"
    display.sizer.style.marginBottom = -display.nativeBarWidth + "px"
    display.sizer.style.borderRightWidth = scrollGap(cm) + "px"
    display.scrollbarsClipped = true
  }
}

// Does the actual updating of the line display. Bails out
// (returning false) when there is nothing to be done and forced is
// false.
function updateDisplayIfNeeded(cm, update) {
  var display = cm.display, doc = cm.doc

  if (update.editorIsHidden) {
    resetView(cm)
    return false
  }

  // Bail out if the visible area is already rendered and nothing changed.
  if (!update.force &&
      update.visible.from >= display.viewFrom && update.visible.to <= display.viewTo &&
      (display.updateLineNumbers == null || display.updateLineNumbers >= display.viewTo) &&
      display.renderedView == display.view && countDirtyView(cm) == 0)
    { return false }

  if (maybeUpdateLineNumberWidth(cm)) {
    resetView(cm)
    update.dims = getDimensions(cm)
  }

  // Compute a suitable new viewport (from & to)
  var end = doc.first + doc.size
  var from = Math.max(update.visible.from - cm.options.viewportMargin, doc.first)
  var to = Math.min(end, update.visible.to + cm.options.viewportMargin)
  if (display.viewFrom < from && from - display.viewFrom < 20) { from = Math.max(doc.first, display.viewFrom) }
  if (display.viewTo > to && display.viewTo - to < 20) { to = Math.min(end, display.viewTo) }
  if (sawCollapsedSpans) {
    from = visualLineNo(cm.doc, from)
    to = visualLineEndNo(cm.doc, to)
  }

  var different = from != display.viewFrom || to != display.viewTo ||
    display.lastWrapHeight != update.wrapperHeight || display.lastWrapWidth != update.wrapperWidth
  adjustView(cm, from, to)

  display.viewOffset = heightAtLine(getLine(cm.doc, display.viewFrom))
  // Position the mover div to align with the current scroll position
  cm.display.mover.style.top = display.viewOffset + "px"

  var toUpdate = countDirtyView(cm)
  if (!different && toUpdate == 0 && !update.force && display.renderedView == display.view &&
      (display.updateLineNumbers == null || display.updateLineNumbers >= display.viewTo))
    { return false }

  // For big changes, we hide the enclosing element during the
  // update, since that speeds up the operations on most browsers.
  var focused = activeElt()
  if (toUpdate > 4) { display.lineDiv.style.display = "none" }
  patchDisplay(cm, display.updateLineNumbers, update.dims)
  if (toUpdate > 4) { display.lineDiv.style.display = "" }
  display.renderedView = display.view
  // There might have been a widget with a focused element that got
  // hidden or updated, if so re-focus it.
  if (focused && activeElt() != focused && focused.offsetHeight) { focused.focus() }

  // Prevent selection and cursors from interfering with the scroll
  // width and height.
  removeChildren(display.cursorDiv)
  removeChildren(display.selectionDiv)
  display.gutters.style.height = display.sizer.style.minHeight = 0

  if (different) {
    display.lastWrapHeight = update.wrapperHeight
    display.lastWrapWidth = update.wrapperWidth
    startWorker(cm, 400)
  }

  display.updateLineNumbers = null

  return true
}

function postUpdateDisplay(cm, update) {
  var viewport = update.viewport

  for (var first = true;; first = false) {
    if (!first || !cm.options.lineWrapping || update.oldDisplayWidth == displayWidth(cm)) {
      // Clip forced viewport to actual scrollable area.
      if (viewport && viewport.top != null)
        { viewport = {top: Math.min(cm.doc.height + paddingVert(cm.display) - displayHeight(cm), viewport.top)} }
      // Updated line heights might result in the drawn area not
      // actually covering the viewport. Keep looping until it does.
      update.visible = visibleLines(cm.display, cm.doc, viewport)
      if (update.visible.from >= cm.display.viewFrom && update.visible.to <= cm.display.viewTo)
        { break }
    }
    if (!updateDisplayIfNeeded(cm, update)) { break }
    updateHeightsInViewport(cm)
    var barMeasure = measureForScrollbars(cm)
    updateSelection(cm)
    updateScrollbars(cm, barMeasure)
    setDocumentHeight(cm, barMeasure)
  }

  update.signal(cm, "update", cm)
  if (cm.display.viewFrom != cm.display.reportedViewFrom || cm.display.viewTo != cm.display.reportedViewTo) {
    update.signal(cm, "viewportChange", cm, cm.display.viewFrom, cm.display.viewTo)
    cm.display.reportedViewFrom = cm.display.viewFrom; cm.display.reportedViewTo = cm.display.viewTo
  }
}

function updateDisplaySimple(cm, viewport) {
  var update = new DisplayUpdate(cm, viewport)
  if (updateDisplayIfNeeded(cm, update)) {
    updateHeightsInViewport(cm)
    postUpdateDisplay(cm, update)
    var barMeasure = measureForScrollbars(cm)
    updateSelection(cm)
    updateScrollbars(cm, barMeasure)
    setDocumentHeight(cm, barMeasure)
    update.finish()
  }
}

// Sync the actual display DOM structure with display.view, removing
// nodes for lines that are no longer in view, and creating the ones
// that are not there yet, and updating the ones that are out of
// date.
function patchDisplay(cm, updateNumbersFrom, dims) {
  var display = cm.display, lineNumbers = cm.options.lineNumbers
  var container = display.lineDiv, cur = container.firstChild

  function rm(node) {
    var next = node.nextSibling
    // Works around a throw-scroll bug in OS X Webkit
    if (webkit && mac && cm.display.currentWheelTarget == node)
      { node.style.display = "none" }
    else
      { node.parentNode.removeChild(node) }
    return next
  }

  var view = display.view, lineN = display.viewFrom
  // Loop over the elements in the view, syncing cur (the DOM nodes
  // in display.lineDiv) with the view as we go.
  for (var i = 0; i < view.length; i++) {
    var lineView = view[i]
    if (lineView.hidden) {
    } else if (!lineView.node || lineView.node.parentNode != container) { // Not drawn yet
      var node = buildLineElement(cm, lineView, lineN, dims)
      container.insertBefore(node, cur)
    } else { // Already drawn
      while (cur != lineView.node) { cur = rm(cur) }
      var updateNumber = lineNumbers && updateNumbersFrom != null &&
        updateNumbersFrom <= lineN && lineView.lineNumber
      if (lineView.changes) {
        if (indexOf(lineView.changes, "gutter") > -1) { updateNumber = false }
        updateLineForChanges(cm, lineView, lineN, dims)
      }
      if (updateNumber) {
        removeChildren(lineView.lineNumber)
        lineView.lineNumber.appendChild(document.createTextNode(lineNumberFor(cm.options, lineN)))
      }
      cur = lineView.node.nextSibling
    }
    lineN += lineView.size
  }
  while (cur) { cur = rm(cur) }
}

function updateGutterSpace(cm) {
  var width = cm.display.gutters.offsetWidth
  cm.display.sizer.style.marginLeft = width + "px"
}

function setDocumentHeight(cm, measure) {
  cm.display.sizer.style.minHeight = measure.docHeight + "px"
  cm.display.heightForcer.style.top = measure.docHeight + "px"
  cm.display.gutters.style.height = (measure.docHeight + cm.display.barHeight + scrollGap(cm)) + "px"
}

// Rebuild the gutter elements, ensure the margin to the left of the
// code matches their width.
function updateGutters(cm) {
  var gutters = cm.display.gutters, specs = cm.options.gutters
  removeChildren(gutters)
  var i = 0
  for (; i < specs.length; ++i) {
    var gutterClass = specs[i]
    var gElt = gutters.appendChild(elt("div", null, "CodeMirror-gutter " + gutterClass))
    if (gutterClass == "CodeMirror-linenumbers") {
      cm.display.lineGutter = gElt
      gElt.style.width = (cm.display.lineNumWidth || 1) + "px"
    }
  }
  gutters.style.display = i ? "" : "none"
  updateGutterSpace(cm)
}

// Make sure the gutters options contains the element
// "CodeMirror-linenumbers" when the lineNumbers option is true.
function setGuttersForLineNumbers(options) {
  var found = indexOf(options.gutters, "CodeMirror-linenumbers")
  if (found == -1 && options.lineNumbers) {
    options.gutters = options.gutters.concat(["CodeMirror-linenumbers"])
  } else if (found > -1 && !options.lineNumbers) {
    options.gutters = options.gutters.slice(0)
    options.gutters.splice(found, 1)
  }
}

// Selection objects are immutable. A new one is created every time
// the selection changes. A selection is one or more non-overlapping
// (and non-touching) ranges, sorted, and an integer that indicates
// which one is the primary selection (the one that's scrolled into
// view, that getCursor returns, etc).
function Selection(ranges, primIndex) {
  this.ranges = ranges
  this.primIndex = primIndex
}

Selection.prototype = {
  primary: function() { return this.ranges[this.primIndex] },
  equals: function(other) {
    var this$1 = this;

    if (other == this) { return true }
    if (other.primIndex != this.primIndex || other.ranges.length != this.ranges.length) { return false }
    for (var i = 0; i < this.ranges.length; i++) {
      var here = this$1.ranges[i], there = other.ranges[i]
      if (cmp(here.anchor, there.anchor) != 0 || cmp(here.head, there.head) != 0) { return false }
    }
    return true
  },
  deepCopy: function() {
    var this$1 = this;

    var out = []
    for (var i = 0; i < this.ranges.length; i++)
      { out[i] = new Range(copyPos(this$1.ranges[i].anchor), copyPos(this$1.ranges[i].head)) }
    return new Selection(out, this.primIndex)
  },
  somethingSelected: function() {
    var this$1 = this;

    for (var i = 0; i < this.ranges.length; i++)
      { if (!this$1.ranges[i].empty()) { return true } }
    return false
  },
  contains: function(pos, end) {
    var this$1 = this;

    if (!end) { end = pos }
    for (var i = 0; i < this.ranges.length; i++) {
      var range = this$1.ranges[i]
      if (cmp(end, range.from()) >= 0 && cmp(pos, range.to()) <= 0)
        { return i }
    }
    return -1
  }
}

function Range(anchor, head) {
  this.anchor = anchor; this.head = head
}

Range.prototype = {
  from: function() { return minPos(this.anchor, this.head) },
  to: function() { return maxPos(this.anchor, this.head) },
  empty: function() {
    return this.head.line == this.anchor.line && this.head.ch == this.anchor.ch
  }
}

// Take an unsorted, potentially overlapping set of ranges, and
// build a selection out of it. 'Consumes' ranges array (modifying
// it).
function normalizeSelection(ranges, primIndex) {
  var prim = ranges[primIndex]
  ranges.sort(function (a, b) { return cmp(a.from(), b.from()); })
  primIndex = indexOf(ranges, prim)
  for (var i = 1; i < ranges.length; i++) {
    var cur = ranges[i], prev = ranges[i - 1]
    if (cmp(prev.to(), cur.from()) >= 0) {
      var from = minPos(prev.from(), cur.from()), to = maxPos(prev.to(), cur.to())
      var inv = prev.empty() ? cur.from() == cur.head : prev.from() == prev.head
      if (i <= primIndex) { --primIndex }
      ranges.splice(--i, 2, new Range(inv ? to : from, inv ? from : to))
    }
  }
  return new Selection(ranges, primIndex)
}

function simpleSelection(anchor, head) {
  return new Selection([new Range(anchor, head || anchor)], 0)
}

// Compute the position of the end of a change (its 'to' property
// refers to the pre-change end).
function changeEnd(change) {
  if (!change.text) { return change.to }
  return Pos(change.from.line + change.text.length - 1,
             lst(change.text).length + (change.text.length == 1 ? change.from.ch : 0))
}

// Adjust a position to refer to the post-change position of the
// same text, or the end of the change if the change covers it.
function adjustForChange(pos, change) {
  if (cmp(pos, change.from) < 0) { return pos }
  if (cmp(pos, change.to) <= 0) { return changeEnd(change) }

  var line = pos.line + change.text.length - (change.to.line - change.from.line) - 1, ch = pos.ch
  if (pos.line == change.to.line) { ch += changeEnd(change).ch - change.to.ch }
  return Pos(line, ch)
}

function computeSelAfterChange(doc, change) {
  var out = []
  for (var i = 0; i < doc.sel.ranges.length; i++) {
    var range = doc.sel.ranges[i]
    out.push(new Range(adjustForChange(range.anchor, change),
                       adjustForChange(range.head, change)))
  }
  return normalizeSelection(out, doc.sel.primIndex)
}

function offsetPos(pos, old, nw) {
  if (pos.line == old.line)
    { return Pos(nw.line, pos.ch - old.ch + nw.ch) }
  else
    { return Pos(nw.line + (pos.line - old.line), pos.ch) }
}

// Used by replaceSelections to allow moving the selection to the
// start or around the replaced test. Hint may be "start" or "around".
function computeReplacedSel(doc, changes, hint) {
  var out = []
  var oldPrev = Pos(doc.first, 0), newPrev = oldPrev
  for (var i = 0; i < changes.length; i++) {
    var change = changes[i]
    var from = offsetPos(change.from, oldPrev, newPrev)
    var to = offsetPos(changeEnd(change), oldPrev, newPrev)
    oldPrev = change.to
    newPrev = to
    if (hint == "around") {
      var range = doc.sel.ranges[i], inv = cmp(range.head, range.anchor) < 0
      out[i] = new Range(inv ? to : from, inv ? from : to)
    } else {
      out[i] = new Range(from, from)
    }
  }
  return new Selection(out, doc.sel.primIndex)
}

// Used to get the editor into a consistent state again when options change.

function loadMode(cm) {
  cm.doc.mode = getMode(cm.options, cm.doc.modeOption)
  resetModeState(cm)
}

function resetModeState(cm) {
  cm.doc.iter(function (line) {
    if (line.stateAfter) { line.stateAfter = null }
    if (line.styles) { line.styles = null }
  })
  cm.doc.frontier = cm.doc.first
  startWorker(cm, 100)
  cm.state.modeGen++
  if (cm.curOp) { regChange(cm) }
}

// DOCUMENT DATA STRUCTURE

// By default, updates that start and end at the beginning of a line
// are treated specially, in order to make the association of line
// widgets and marker elements with the text behave more intuitive.
function isWholeLineUpdate(doc, change) {
  return change.from.ch == 0 && change.to.ch == 0 && lst(change.text) == "" &&
    (!doc.cm || doc.cm.options.wholeLineUpdateBefore)
}

// Perform a change on the document data structure.
function updateDoc(doc, change, markedSpans, estimateHeight$$1) {
  function spansFor(n) {return markedSpans ? markedSpans[n] : null}
  function update(line, text, spans) {
    updateLine(line, text, spans, estimateHeight$$1)
    signalLater(line, "change", line, change)
  }
  function linesFor(start, end) {
    var result = []
    for (var i = start; i < end; ++i)
      { result.push(new Line(text[i], spansFor(i), estimateHeight$$1)) }
    return result
  }

  var from = change.from, to = change.to, text = change.text
  var firstLine = getLine(doc, from.line), lastLine = getLine(doc, to.line)
  var lastText = lst(text), lastSpans = spansFor(text.length - 1), nlines = to.line - from.line

  // Adjust the line structure
  if (change.full) {
    doc.insert(0, linesFor(0, text.length))
    doc.remove(text.length, doc.size - text.length)
  } else if (isWholeLineUpdate(doc, change)) {
    // This is a whole-line replace. Treated specially to make
    // sure line objects move the way they are supposed to.
    var added = linesFor(0, text.length - 1)
    update(lastLine, lastLine.text, lastSpans)
    if (nlines) { doc.remove(from.line, nlines) }
    if (added.length) { doc.insert(from.line, added) }
  } else if (firstLine == lastLine) {
    if (text.length == 1) {
      update(firstLine, firstLine.text.slice(0, from.ch) + lastText + firstLine.text.slice(to.ch), lastSpans)
    } else {
      var added$1 = linesFor(1, text.length - 1)
      added$1.push(new Line(lastText + firstLine.text.slice(to.ch), lastSpans, estimateHeight$$1))
      update(firstLine, firstLine.text.slice(0, from.ch) + text[0], spansFor(0))
      doc.insert(from.line + 1, added$1)
    }
  } else if (text.length == 1) {
    update(firstLine, firstLine.text.slice(0, from.ch) + text[0] + lastLine.text.slice(to.ch), spansFor(0))
    doc.remove(from.line + 1, nlines)
  } else {
    update(firstLine, firstLine.text.slice(0, from.ch) + text[0], spansFor(0))
    update(lastLine, lastText + lastLine.text.slice(to.ch), lastSpans)
    var added$2 = linesFor(1, text.length - 1)
    if (nlines > 1) { doc.remove(from.line + 1, nlines - 1) }
    doc.insert(from.line + 1, added$2)
  }

  signalLater(doc, "change", doc, change)
}

// Call f for all linked documents.
function linkedDocs(doc, f, sharedHistOnly) {
  function propagate(doc, skip, sharedHist) {
    if (doc.linked) { for (var i = 0; i < doc.linked.length; ++i) {
      var rel = doc.linked[i]
      if (rel.doc == skip) { continue }
      var shared = sharedHist && rel.sharedHist
      if (sharedHistOnly && !shared) { continue }
      f(rel.doc, shared)
      propagate(rel.doc, doc, shared)
    } }
  }
  propagate(doc, null, true)
}

// Attach a document to an editor.
function attachDoc(cm, doc) {
  if (doc.cm) { throw new Error("This document is already in use.") }
  cm.doc = doc
  doc.cm = cm
  estimateLineHeights(cm)
  loadMode(cm)
  if (!cm.options.lineWrapping) { findMaxLine(cm) }
  cm.options.mode = doc.modeOption
  regChange(cm)
}

function History(startGen) {
  // Arrays of change events and selections. Doing something adds an
  // event to done and clears undo. Undoing moves events from done
  // to undone, redoing moves them in the other direction.
  this.done = []; this.undone = []
  this.undoDepth = Infinity
  // Used to track when changes can be merged into a single undo
  // event
  this.lastModTime = this.lastSelTime = 0
  this.lastOp = this.lastSelOp = null
  this.lastOrigin = this.lastSelOrigin = null
  // Used by the isClean() method
  this.generation = this.maxGeneration = startGen || 1
}

// Create a history change event from an updateDoc-style change
// object.
function historyChangeFromChange(doc, change) {
  var histChange = {from: copyPos(change.from), to: changeEnd(change), text: getBetween(doc, change.from, change.to)}
  attachLocalSpans(doc, histChange, change.from.line, change.to.line + 1)
  linkedDocs(doc, function (doc) { return attachLocalSpans(doc, histChange, change.from.line, change.to.line + 1); }, true)
  return histChange
}

// Pop all selection events off the end of a history array. Stop at
// a change event.
function clearSelectionEvents(array) {
  while (array.length) {
    var last = lst(array)
    if (last.ranges) { array.pop() }
    else { break }
  }
}

// Find the top change event in the history. Pop off selection
// events that are in the way.
function lastChangeEvent(hist, force) {
  if (force) {
    clearSelectionEvents(hist.done)
    return lst(hist.done)
  } else if (hist.done.length && !lst(hist.done).ranges) {
    return lst(hist.done)
  } else if (hist.done.length > 1 && !hist.done[hist.done.length - 2].ranges) {
    hist.done.pop()
    return lst(hist.done)
  }
}

// Register a change in the history. Merges changes that are within
// a single operation, or are close together with an origin that
// allows merging (starting with "+") into a single event.
function addChangeToHistory(doc, change, selAfter, opId) {
  var hist = doc.history
  hist.undone.length = 0
  var time = +new Date, cur
  var last

  if ((hist.lastOp == opId ||
       hist.lastOrigin == change.origin && change.origin &&
       ((change.origin.charAt(0) == "+" && doc.cm && hist.lastModTime > time - doc.cm.options.historyEventDelay) ||
        change.origin.charAt(0) == "*")) &&
      (cur = lastChangeEvent(hist, hist.lastOp == opId))) {
    // Merge this change into the last event
    last = lst(cur.changes)
    if (cmp(change.from, change.to) == 0 && cmp(change.from, last.to) == 0) {
      // Optimized case for simple insertion -- don't want to add
      // new changesets for every character typed
      last.to = changeEnd(change)
    } else {
      // Add new sub-event
      cur.changes.push(historyChangeFromChange(doc, change))
    }
  } else {
    // Can not be merged, start a new event.
    var before = lst(hist.done)
    if (!before || !before.ranges)
      { pushSelectionToHistory(doc.sel, hist.done) }
    cur = {changes: [historyChangeFromChange(doc, change)],
           generation: hist.generation}
    hist.done.push(cur)
    while (hist.done.length > hist.undoDepth) {
      hist.done.shift()
      if (!hist.done[0].ranges) { hist.done.shift() }
    }
  }
  hist.done.push(selAfter)
  hist.generation = ++hist.maxGeneration
  hist.lastModTime = hist.lastSelTime = time
  hist.lastOp = hist.lastSelOp = opId
  hist.lastOrigin = hist.lastSelOrigin = change.origin

  if (!last) { signal(doc, "historyAdded") }
}

function selectionEventCanBeMerged(doc, origin, prev, sel) {
  var ch = origin.charAt(0)
  return ch == "*" ||
    ch == "+" &&
    prev.ranges.length == sel.ranges.length &&
    prev.somethingSelected() == sel.somethingSelected() &&
    new Date - doc.history.lastSelTime <= (doc.cm ? doc.cm.options.historyEventDelay : 500)
}

// Called whenever the selection changes, sets the new selection as
// the pending selection in the history, and pushes the old pending
// selection into the 'done' array when it was significantly
// different (in number of selected ranges, emptiness, or time).
function addSelectionToHistory(doc, sel, opId, options) {
  var hist = doc.history, origin = options && options.origin

  // A new event is started when the previous origin does not match
  // the current, or the origins don't allow matching. Origins
  // starting with * are always merged, those starting with + are
  // merged when similar and close together in time.
  if (opId == hist.lastSelOp ||
      (origin && hist.lastSelOrigin == origin &&
       (hist.lastModTime == hist.lastSelTime && hist.lastOrigin == origin ||
        selectionEventCanBeMerged(doc, origin, lst(hist.done), sel))))
    { hist.done[hist.done.length - 1] = sel }
  else
    { pushSelectionToHistory(sel, hist.done) }

  hist.lastSelTime = +new Date
  hist.lastSelOrigin = origin
  hist.lastSelOp = opId
  if (options && options.clearRedo !== false)
    { clearSelectionEvents(hist.undone) }
}

function pushSelectionToHistory(sel, dest) {
  var top = lst(dest)
  if (!(top && top.ranges && top.equals(sel)))
    { dest.push(sel) }
}

// Used to store marked span information in the history.
function attachLocalSpans(doc, change, from, to) {
  var existing = change["spans_" + doc.id], n = 0
  doc.iter(Math.max(doc.first, from), Math.min(doc.first + doc.size, to), function (line) {
    if (line.markedSpans)
      { (existing || (existing = change["spans_" + doc.id] = {}))[n] = line.markedSpans }
    ++n
  })
}

// When un/re-doing restores text containing marked spans, those
// that have been explicitly cleared should not be restored.
function removeClearedSpans(spans) {
  if (!spans) { return null }
  var out
  for (var i = 0; i < spans.length; ++i) {
    if (spans[i].marker.explicitlyCleared) { if (!out) { out = spans.slice(0, i) } }
    else if (out) { out.push(spans[i]) }
  }
  return !out ? spans : out.length ? out : null
}

// Retrieve and filter the old marked spans stored in a change event.
function getOldSpans(doc, change) {
  var found = change["spans_" + doc.id]
  if (!found) { return null }
  var nw = []
  for (var i = 0; i < change.text.length; ++i)
    { nw.push(removeClearedSpans(found[i])) }
  return nw
}

// Used for un/re-doing changes from the history. Combines the
// result of computing the existing spans with the set of spans that
// existed in the history (so that deleting around a span and then
// undoing brings back the span).
function mergeOldSpans(doc, change) {
  var old = getOldSpans(doc, change)
  var stretched = stretchSpansOverChange(doc, change)
  if (!old) { return stretched }
  if (!stretched) { return old }

  for (var i = 0; i < old.length; ++i) {
    var oldCur = old[i], stretchCur = stretched[i]
    if (oldCur && stretchCur) {
      spans: for (var j = 0; j < stretchCur.length; ++j) {
        var span = stretchCur[j]
        for (var k = 0; k < oldCur.length; ++k)
          { if (oldCur[k].marker == span.marker) { continue spans } }
        oldCur.push(span)
      }
    } else if (stretchCur) {
      old[i] = stretchCur
    }
  }
  return old
}

// Used both to provide a JSON-safe object in .getHistory, and, when
// detaching a document, to split the history in two
function copyHistoryArray(events, newGroup, instantiateSel) {
  var copy = []
  for (var i = 0; i < events.length; ++i) {
    var event = events[i]
    if (event.ranges) {
      copy.push(instantiateSel ? Selection.prototype.deepCopy.call(event) : event)
      continue
    }
    var changes = event.changes, newChanges = []
    copy.push({changes: newChanges})
    for (var j = 0; j < changes.length; ++j) {
      var change = changes[j], m = void 0
      newChanges.push({from: change.from, to: change.to, text: change.text})
      if (newGroup) { for (var prop in change) { if (m = prop.match(/^spans_(\d+)$/)) {
        if (indexOf(newGroup, Number(m[1])) > -1) {
          lst(newChanges)[prop] = change[prop]
          delete change[prop]
        }
      } } }
    }
  }
  return copy
}

// The 'scroll' parameter given to many of these indicated whether
// the new cursor position should be scrolled into view after
// modifying the selection.

// If shift is held or the extend flag is set, extends a range to
// include a given position (and optionally a second position).
// Otherwise, simply returns the range between the given positions.
// Used for cursor motion and such.
function extendRange(doc, range, head, other) {
  if (doc.cm && doc.cm.display.shift || doc.extend) {
    var anchor = range.anchor
    if (other) {
      var posBefore = cmp(head, anchor) < 0
      if (posBefore != (cmp(other, anchor) < 0)) {
        anchor = head
        head = other
      } else if (posBefore != (cmp(head, other) < 0)) {
        head = other
      }
    }
    return new Range(anchor, head)
  } else {
    return new Range(other || head, head)
  }
}

// Extend the primary selection range, discard the rest.
function extendSelection(doc, head, other, options) {
  setSelection(doc, new Selection([extendRange(doc, doc.sel.primary(), head, other)], 0), options)
}

// Extend all selections (pos is an array of selections with length
// equal the number of selections)
function extendSelections(doc, heads, options) {
  var out = []
  for (var i = 0; i < doc.sel.ranges.length; i++)
    { out[i] = extendRange(doc, doc.sel.ranges[i], heads[i], null) }
  var newSel = normalizeSelection(out, doc.sel.primIndex)
  setSelection(doc, newSel, options)
}

// Updates a single range in the selection.
function replaceOneSelection(doc, i, range, options) {
  var ranges = doc.sel.ranges.slice(0)
  ranges[i] = range
  setSelection(doc, normalizeSelection(ranges, doc.sel.primIndex), options)
}

// Reset the selection to a single range.
function setSimpleSelection(doc, anchor, head, options) {
  setSelection(doc, simpleSelection(anchor, head), options)
}

// Give beforeSelectionChange handlers a change to influence a
// selection update.
function filterSelectionChange(doc, sel, options) {
  var obj = {
    ranges: sel.ranges,
    update: function(ranges) {
      var this$1 = this;

      this.ranges = []
      for (var i = 0; i < ranges.length; i++)
        { this$1.ranges[i] = new Range(clipPos(doc, ranges[i].anchor),
                                   clipPos(doc, ranges[i].head)) }
    },
    origin: options && options.origin
  }
  signal(doc, "beforeSelectionChange", doc, obj)
  if (doc.cm) { signal(doc.cm, "beforeSelectionChange", doc.cm, obj) }
  if (obj.ranges != sel.ranges) { return normalizeSelection(obj.ranges, obj.ranges.length - 1) }
  else { return sel }
}

function setSelectionReplaceHistory(doc, sel, options) {
  var done = doc.history.done, last = lst(done)
  if (last && last.ranges) {
    done[done.length - 1] = sel
    setSelectionNoUndo(doc, sel, options)
  } else {
    setSelection(doc, sel, options)
  }
}

// Set a new selection.
function setSelection(doc, sel, options) {
  setSelectionNoUndo(doc, sel, options)
  addSelectionToHistory(doc, doc.sel, doc.cm ? doc.cm.curOp.id : NaN, options)
}

function setSelectionNoUndo(doc, sel, options) {
  if (hasHandler(doc, "beforeSelectionChange") || doc.cm && hasHandler(doc.cm, "beforeSelectionChange"))
    { sel = filterSelectionChange(doc, sel, options) }

  var bias = options && options.bias ||
    (cmp(sel.primary().head, doc.sel.primary().head) < 0 ? -1 : 1)
  setSelectionInner(doc, skipAtomicInSelection(doc, sel, bias, true))

  if (!(options && options.scroll === false) && doc.cm)
    { ensureCursorVisible(doc.cm) }
}

function setSelectionInner(doc, sel) {
  if (sel.equals(doc.sel)) { return }

  doc.sel = sel

  if (doc.cm) {
    doc.cm.curOp.updateInput = doc.cm.curOp.selectionChanged = true
    signalCursorActivity(doc.cm)
  }
  signalLater(doc, "cursorActivity", doc)
}

// Verify that the selection does not partially select any atomic
// marked ranges.
function reCheckSelection(doc) {
  setSelectionInner(doc, skipAtomicInSelection(doc, doc.sel, null, false), sel_dontScroll)
}

// Return a selection that does not partially select any atomic
// ranges.
function skipAtomicInSelection(doc, sel, bias, mayClear) {
  var out
  for (var i = 0; i < sel.ranges.length; i++) {
    var range = sel.ranges[i]
    var old = sel.ranges.length == doc.sel.ranges.length && doc.sel.ranges[i]
    var newAnchor = skipAtomic(doc, range.anchor, old && old.anchor, bias, mayClear)
    var newHead = skipAtomic(doc, range.head, old && old.head, bias, mayClear)
    if (out || newAnchor != range.anchor || newHead != range.head) {
      if (!out) { out = sel.ranges.slice(0, i) }
      out[i] = new Range(newAnchor, newHead)
    }
  }
  return out ? normalizeSelection(out, sel.primIndex) : sel
}

function skipAtomicInner(doc, pos, oldPos, dir, mayClear) {
  var line = getLine(doc, pos.line)
  if (line.markedSpans) { for (var i = 0; i < line.markedSpans.length; ++i) {
    var sp = line.markedSpans[i], m = sp.marker
    if ((sp.from == null || (m.inclusiveLeft ? sp.from <= pos.ch : sp.from < pos.ch)) &&
        (sp.to == null || (m.inclusiveRight ? sp.to >= pos.ch : sp.to > pos.ch))) {
      if (mayClear) {
        signal(m, "beforeCursorEnter")
        if (m.explicitlyCleared) {
          if (!line.markedSpans) { break }
          else {--i; continue}
        }
      }
      if (!m.atomic) { continue }

      if (oldPos) {
        var near = m.find(dir < 0 ? 1 : -1), diff = void 0
        if (dir < 0 ? m.inclusiveRight : m.inclusiveLeft)
          { near = movePos(doc, near, -dir, near && near.line == pos.line ? line : null) }
        if (near && near.line == pos.line && (diff = cmp(near, oldPos)) && (dir < 0 ? diff < 0 : diff > 0))
          { return skipAtomicInner(doc, near, pos, dir, mayClear) }
      }

      var far = m.find(dir < 0 ? -1 : 1)
      if (dir < 0 ? m.inclusiveLeft : m.inclusiveRight)
        { far = movePos(doc, far, dir, far.line == pos.line ? line : null) }
      return far ? skipAtomicInner(doc, far, pos, dir, mayClear) : null
    }
  } }
  return pos
}

// Ensure a given position is not inside an atomic range.
function skipAtomic(doc, pos, oldPos, bias, mayClear) {
  var dir = bias || 1
  var found = skipAtomicInner(doc, pos, oldPos, dir, mayClear) ||
      (!mayClear && skipAtomicInner(doc, pos, oldPos, dir, true)) ||
      skipAtomicInner(doc, pos, oldPos, -dir, mayClear) ||
      (!mayClear && skipAtomicInner(doc, pos, oldPos, -dir, true))
  if (!found) {
    doc.cantEdit = true
    return Pos(doc.first, 0)
  }
  return found
}

function movePos(doc, pos, dir, line) {
  if (dir < 0 && pos.ch == 0) {
    if (pos.line > doc.first) { return clipPos(doc, Pos(pos.line - 1)) }
    else { return null }
  } else if (dir > 0 && pos.ch == (line || getLine(doc, pos.line)).text.length) {
    if (pos.line < doc.first + doc.size - 1) { return Pos(pos.line + 1, 0) }
    else { return null }
  } else {
    return new Pos(pos.line, pos.ch + dir)
  }
}

function selectAll(cm) {
  cm.setSelection(Pos(cm.firstLine(), 0), Pos(cm.lastLine()), sel_dontScroll)
}

// UPDATING

// Allow "beforeChange" event handlers to influence a change
function filterChange(doc, change, update) {
  var obj = {
    canceled: false,
    from: change.from,
    to: change.to,
    text: change.text,
    origin: change.origin,
    cancel: function () { return obj.canceled = true; }
  }
  if (update) { obj.update = function (from, to, text, origin) {
    if (from) { obj.from = clipPos(doc, from) }
    if (to) { obj.to = clipPos(doc, to) }
    if (text) { obj.text = text }
    if (origin !== undefined) { obj.origin = origin }
  } }
  signal(doc, "beforeChange", doc, obj)
  if (doc.cm) { signal(doc.cm, "beforeChange", doc.cm, obj) }

  if (obj.canceled) { return null }
  return {from: obj.from, to: obj.to, text: obj.text, origin: obj.origin}
}

// Apply a change to a document, and add it to the document's
// history, and propagating it to all linked documents.
function makeChange(doc, change, ignoreReadOnly) {
  if (doc.cm) {
    if (!doc.cm.curOp) { return operation(doc.cm, makeChange)(doc, change, ignoreReadOnly) }
    if (doc.cm.state.suppressEdits) { return }
  }

  if (hasHandler(doc, "beforeChange") || doc.cm && hasHandler(doc.cm, "beforeChange")) {
    change = filterChange(doc, change, true)
    if (!change) { return }
  }

  // Possibly split or suppress the update based on the presence
  // of read-only spans in its range.
  var split = sawReadOnlySpans && !ignoreReadOnly && removeReadOnlyRanges(doc, change.from, change.to)
  if (split) {
    for (var i = split.length - 1; i >= 0; --i)
      { makeChangeInner(doc, {from: split[i].from, to: split[i].to, text: i ? [""] : change.text}) }
  } else {
    makeChangeInner(doc, change)
  }
}

function makeChangeInner(doc, change) {
  if (change.text.length == 1 && change.text[0] == "" && cmp(change.from, change.to) == 0) { return }
  var selAfter = computeSelAfterChange(doc, change)
  addChangeToHistory(doc, change, selAfter, doc.cm ? doc.cm.curOp.id : NaN)

  makeChangeSingleDoc(doc, change, selAfter, stretchSpansOverChange(doc, change))
  var rebased = []

  linkedDocs(doc, function (doc, sharedHist) {
    if (!sharedHist && indexOf(rebased, doc.history) == -1) {
      rebaseHist(doc.history, change)
      rebased.push(doc.history)
    }
    makeChangeSingleDoc(doc, change, null, stretchSpansOverChange(doc, change))
  })
}

// Revert a change stored in a document's history.
function makeChangeFromHistory(doc, type, allowSelectionOnly) {
  if (doc.cm && doc.cm.state.suppressEdits && !allowSelectionOnly) { return }

  var hist = doc.history, event, selAfter = doc.sel
  var source = type == "undo" ? hist.done : hist.undone, dest = type == "undo" ? hist.undone : hist.done

  // Verify that there is a useable event (so that ctrl-z won't
  // needlessly clear selection events)
  var i = 0
  for (; i < source.length; i++) {
    event = source[i]
    if (allowSelectionOnly ? event.ranges && !event.equals(doc.sel) : !event.ranges)
      { break }
  }
  if (i == source.length) { return }
  hist.lastOrigin = hist.lastSelOrigin = null

  for (;;) {
    event = source.pop()
    if (event.ranges) {
      pushSelectionToHistory(event, dest)
      if (allowSelectionOnly && !event.equals(doc.sel)) {
        setSelection(doc, event, {clearRedo: false})
        return
      }
      selAfter = event
    }
    else { break }
  }

  // Build up a reverse change object to add to the opposite history
  // stack (redo when undoing, and vice versa).
  var antiChanges = []
  pushSelectionToHistory(selAfter, dest)
  dest.push({changes: antiChanges, generation: hist.generation})
  hist.generation = event.generation || ++hist.maxGeneration

  var filter = hasHandler(doc, "beforeChange") || doc.cm && hasHandler(doc.cm, "beforeChange")

  var loop = function ( i ) {
    var change = event.changes[i]
    change.origin = type
    if (filter && !filterChange(doc, change, false)) {
      source.length = 0
      return {}
    }

    antiChanges.push(historyChangeFromChange(doc, change))

    var after = i ? computeSelAfterChange(doc, change) : lst(source)
    makeChangeSingleDoc(doc, change, after, mergeOldSpans(doc, change))
    if (!i && doc.cm) { doc.cm.scrollIntoView({from: change.from, to: changeEnd(change)}) }
    var rebased = []

    // Propagate to the linked documents
    linkedDocs(doc, function (doc, sharedHist) {
      if (!sharedHist && indexOf(rebased, doc.history) == -1) {
        rebaseHist(doc.history, change)
        rebased.push(doc.history)
      }
      makeChangeSingleDoc(doc, change, null, mergeOldSpans(doc, change))
    })
  };

  for (var i$1 = event.changes.length - 1; i$1 >= 0; --i$1) {
    var returned = loop( i$1 );

    if ( returned ) return returned.v;
  }
}

// Sub-views need their line numbers shifted when text is added
// above or below them in the parent document.
function shiftDoc(doc, distance) {
  if (distance == 0) { return }
  doc.first += distance
  doc.sel = new Selection(map(doc.sel.ranges, function (range) { return new Range(
    Pos(range.anchor.line + distance, range.anchor.ch),
    Pos(range.head.line + distance, range.head.ch)
  ); }), doc.sel.primIndex)
  if (doc.cm) {
    regChange(doc.cm, doc.first, doc.first - distance, distance)
    for (var d = doc.cm.display, l = d.viewFrom; l < d.viewTo; l++)
      { regLineChange(doc.cm, l, "gutter") }
  }
}

// More lower-level change function, handling only a single document
// (not linked ones).
function makeChangeSingleDoc(doc, change, selAfter, spans) {
  if (doc.cm && !doc.cm.curOp)
    { return operation(doc.cm, makeChangeSingleDoc)(doc, change, selAfter, spans) }

  if (change.to.line < doc.first) {
    shiftDoc(doc, change.text.length - 1 - (change.to.line - change.from.line))
    return
  }
  if (change.from.line > doc.lastLine()) { return }

  // Clip the change to the size of this doc
  if (change.from.line < doc.first) {
    var shift = change.text.length - 1 - (doc.first - change.from.line)
    shiftDoc(doc, shift)
    change = {from: Pos(doc.first, 0), to: Pos(change.to.line + shift, change.to.ch),
              text: [lst(change.text)], origin: change.origin}
  }
  var last = doc.lastLine()
  if (change.to.line > last) {
    change = {from: change.from, to: Pos(last, getLine(doc, last).text.length),
              text: [change.text[0]], origin: change.origin}
  }

  change.removed = getBetween(doc, change.from, change.to)

  if (!selAfter) { selAfter = computeSelAfterChange(doc, change) }
  if (doc.cm) { makeChangeSingleDocInEditor(doc.cm, change, spans) }
  else { updateDoc(doc, change, spans) }
  setSelectionNoUndo(doc, selAfter, sel_dontScroll)
}

// Handle the interaction of a change to a document with the editor
// that this document is part of.
function makeChangeSingleDocInEditor(cm, change, spans) {
  var doc = cm.doc, display = cm.display, from = change.from, to = change.to

  var recomputeMaxLength = false, checkWidthStart = from.line
  if (!cm.options.lineWrapping) {
    checkWidthStart = lineNo(visualLine(getLine(doc, from.line)))
    doc.iter(checkWidthStart, to.line + 1, function (line) {
      if (line == display.maxLine) {
        recomputeMaxLength = true
        return true
      }
    })
  }

  if (doc.sel.contains(change.from, change.to) > -1)
    { signalCursorActivity(cm) }

  updateDoc(doc, change, spans, estimateHeight(cm))

  if (!cm.options.lineWrapping) {
    doc.iter(checkWidthStart, from.line + change.text.length, function (line) {
      var len = lineLength(line)
      if (len > display.maxLineLength) {
        display.maxLine = line
        display.maxLineLength = len
        display.maxLineChanged = true
        recomputeMaxLength = false
      }
    })
    if (recomputeMaxLength) { cm.curOp.updateMaxLine = true }
  }

  // Adjust frontier, schedule worker
  doc.frontier = Math.min(doc.frontier, from.line)
  startWorker(cm, 400)

  var lendiff = change.text.length - (to.line - from.line) - 1
  // Remember that these lines changed, for updating the display
  if (change.full)
    { regChange(cm) }
  else if (from.line == to.line && change.text.length == 1 && !isWholeLineUpdate(cm.doc, change))
    { regLineChange(cm, from.line, "text") }
  else
    { regChange(cm, from.line, to.line + 1, lendiff) }

  var changesHandler = hasHandler(cm, "changes"), changeHandler = hasHandler(cm, "change")
  if (changeHandler || changesHandler) {
    var obj = {
      from: from, to: to,
      text: change.text,
      removed: change.removed,
      origin: change.origin
    }
    if (changeHandler) { signalLater(cm, "change", cm, obj) }
    if (changesHandler) { (cm.curOp.changeObjs || (cm.curOp.changeObjs = [])).push(obj) }
  }
  cm.display.selForContextMenu = null
}

function replaceRange(doc, code, from, to, origin) {
  if (!to) { to = from }
  if (cmp(to, from) < 0) { var tmp = to; to = from; from = tmp }
  if (typeof code == "string") { code = doc.splitLines(code) }
  makeChange(doc, {from: from, to: to, text: code, origin: origin})
}

// Rebasing/resetting history to deal with externally-sourced changes

function rebaseHistSelSingle(pos, from, to, diff) {
  if (to < pos.line) {
    pos.line += diff
  } else if (from < pos.line) {
    pos.line = from
    pos.ch = 0
  }
}

// Tries to rebase an array of history events given a change in the
// document. If the change touches the same lines as the event, the
// event, and everything 'behind' it, is discarded. If the change is
// before the event, the event's positions are updated. Uses a
// copy-on-write scheme for the positions, to avoid having to
// reallocate them all on every rebase, but also avoid problems with
// shared position objects being unsafely updated.
function rebaseHistArray(array, from, to, diff) {
  for (var i = 0; i < array.length; ++i) {
    var sub = array[i], ok = true
    if (sub.ranges) {
      if (!sub.copied) { sub = array[i] = sub.deepCopy(); sub.copied = true }
      for (var j = 0; j < sub.ranges.length; j++) {
        rebaseHistSelSingle(sub.ranges[j].anchor, from, to, diff)
        rebaseHistSelSingle(sub.ranges[j].head, from, to, diff)
      }
      continue
    }
    for (var j$1 = 0; j$1 < sub.changes.length; ++j$1) {
      var cur = sub.changes[j$1]
      if (to < cur.from.line) {
        cur.from = Pos(cur.from.line + diff, cur.from.ch)
        cur.to = Pos(cur.to.line + diff, cur.to.ch)
      } else if (from <= cur.to.line) {
        ok = false
        break
      }
    }
    if (!ok) {
      array.splice(0, i + 1)
      i = 0
    }
  }
}

function rebaseHist(hist, change) {
  var from = change.from.line, to = change.to.line, diff = change.text.length - (to - from) - 1
  rebaseHistArray(hist.done, from, to, diff)
  rebaseHistArray(hist.undone, from, to, diff)
}

// Utility for applying a change to a line by handle or number,
// returning the number and optionally registering the line as
// changed.
function changeLine(doc, handle, changeType, op) {
  var no = handle, line = handle
  if (typeof handle == "number") { line = getLine(doc, clipLine(doc, handle)) }
  else { no = lineNo(handle) }
  if (no == null) { return null }
  if (op(line, no) && doc.cm) { regLineChange(doc.cm, no, changeType) }
  return line
}

// The document is represented as a BTree consisting of leaves, with
// chunk of lines in them, and branches, with up to ten leaves or
// other branch nodes below them. The top node is always a branch
// node, and is the document object itself (meaning it has
// additional methods and properties).
//
// All nodes have parent links. The tree is used both to go from
// line numbers to line objects, and to go from objects to numbers.
// It also indexes by height, and is used to convert between height
// and line object, and to find the total height of the document.
//
// See also http://marijnhaverbeke.nl/blog/codemirror-line-tree.html

function LeafChunk(lines) {
  var this$1 = this;

  this.lines = lines
  this.parent = null
  var height = 0
  for (var i = 0; i < lines.length; ++i) {
    lines[i].parent = this$1
    height += lines[i].height
  }
  this.height = height
}

LeafChunk.prototype = {
  chunkSize: function() { return this.lines.length },
  // Remove the n lines at offset 'at'.
  removeInner: function(at, n) {
    var this$1 = this;

    for (var i = at, e = at + n; i < e; ++i) {
      var line = this$1.lines[i]
      this$1.height -= line.height
      cleanUpLine(line)
      signalLater(line, "delete")
    }
    this.lines.splice(at, n)
  },
  // Helper used to collapse a small branch into a single leaf.
  collapse: function(lines) {
    lines.push.apply(lines, this.lines)
  },
  // Insert the given array of lines at offset 'at', count them as
  // having the given height.
  insertInner: function(at, lines, height) {
    var this$1 = this;

    this.height += height
    this.lines = this.lines.slice(0, at).concat(lines).concat(this.lines.slice(at))
    for (var i = 0; i < lines.length; ++i) { lines[i].parent = this$1 }
  },
  // Used to iterate over a part of the tree.
  iterN: function(at, n, op) {
    var this$1 = this;

    for (var e = at + n; at < e; ++at)
      { if (op(this$1.lines[at])) { return true } }
  }
}

function BranchChunk(children) {
  var this$1 = this;

  this.children = children
  var size = 0, height = 0
  for (var i = 0; i < children.length; ++i) {
    var ch = children[i]
    size += ch.chunkSize(); height += ch.height
    ch.parent = this$1
  }
  this.size = size
  this.height = height
  this.parent = null
}

BranchChunk.prototype = {
  chunkSize: function() { return this.size },
  removeInner: function(at, n) {
    var this$1 = this;

    this.size -= n
    for (var i = 0; i < this.children.length; ++i) {
      var child = this$1.children[i], sz = child.chunkSize()
      if (at < sz) {
        var rm = Math.min(n, sz - at), oldHeight = child.height
        child.removeInner(at, rm)
        this$1.height -= oldHeight - child.height
        if (sz == rm) { this$1.children.splice(i--, 1); child.parent = null }
        if ((n -= rm) == 0) { break }
        at = 0
      } else { at -= sz }
    }
    // If the result is smaller than 25 lines, ensure that it is a
    // single leaf node.
    if (this.size - n < 25 &&
        (this.children.length > 1 || !(this.children[0] instanceof LeafChunk))) {
      var lines = []
      this.collapse(lines)
      this.children = [new LeafChunk(lines)]
      this.children[0].parent = this
    }
  },
  collapse: function(lines) {
    var this$1 = this;

    for (var i = 0; i < this.children.length; ++i) { this$1.children[i].collapse(lines) }
  },
  insertInner: function(at, lines, height) {
    var this$1 = this;

    this.size += lines.length
    this.height += height
    for (var i = 0; i < this.children.length; ++i) {
      var child = this$1.children[i], sz = child.chunkSize()
      if (at <= sz) {
        child.insertInner(at, lines, height)
        if (child.lines && child.lines.length > 50) {
          // To avoid memory thrashing when child.lines is huge (e.g. first view of a large file), it's never spliced.
          // Instead, small slices are taken. They're taken in order because sequential memory accesses are fastest.
          var remaining = child.lines.length % 25 + 25
          for (var pos = remaining; pos < child.lines.length;) {
            var leaf = new LeafChunk(child.lines.slice(pos, pos += 25))
            child.height -= leaf.height
            this$1.children.splice(++i, 0, leaf)
            leaf.parent = this$1
          }
          child.lines = child.lines.slice(0, remaining)
          this$1.maybeSpill()
        }
        break
      }
      at -= sz
    }
  },
  // When a node has grown, check whether it should be split.
  maybeSpill: function() {
    if (this.children.length <= 10) { return }
    var me = this
    do {
      var spilled = me.children.splice(me.children.length - 5, 5)
      var sibling = new BranchChunk(spilled)
      if (!me.parent) { // Become the parent node
        var copy = new BranchChunk(me.children)
        copy.parent = me
        me.children = [copy, sibling]
        me = copy
     } else {
        me.size -= sibling.size
        me.height -= sibling.height
        var myIndex = indexOf(me.parent.children, me)
        me.parent.children.splice(myIndex + 1, 0, sibling)
      }
      sibling.parent = me.parent
    } while (me.children.length > 10)
    me.parent.maybeSpill()
  },
  iterN: function(at, n, op) {
    var this$1 = this;

    for (var i = 0; i < this.children.length; ++i) {
      var child = this$1.children[i], sz = child.chunkSize()
      if (at < sz) {
        var used = Math.min(n, sz - at)
        if (child.iterN(at, used, op)) { return true }
        if ((n -= used) == 0) { break }
        at = 0
      } else { at -= sz }
    }
  }
}

// Line widgets are block elements displayed above or below a line.

function LineWidget(doc, node, options) {
  var this$1 = this;

  if (options) { for (var opt in options) { if (options.hasOwnProperty(opt))
    { this$1[opt] = options[opt] } } }
  this.doc = doc
  this.node = node
}
eventMixin(LineWidget)

function adjustScrollWhenAboveVisible(cm, line, diff) {
  if (heightAtLine(line) < ((cm.curOp && cm.curOp.scrollTop) || cm.doc.scrollTop))
    { addToScrollPos(cm, null, diff) }
}

LineWidget.prototype.clear = function() {
  var this$1 = this;

  var cm = this.doc.cm, ws = this.line.widgets, line = this.line, no = lineNo(line)
  if (no == null || !ws) { return }
  for (var i = 0; i < ws.length; ++i) { if (ws[i] == this$1) { ws.splice(i--, 1) } }
  if (!ws.length) { line.widgets = null }
  var height = widgetHeight(this)
  updateLineHeight(line, Math.max(0, line.height - height))
  if (cm) { runInOp(cm, function () {
    adjustScrollWhenAboveVisible(cm, line, -height)
    regLineChange(cm, no, "widget")
  }) }
}
LineWidget.prototype.changed = function() {
  var oldH = this.height, cm = this.doc.cm, line = this.line
  this.height = null
  var diff = widgetHeight(this) - oldH
  if (!diff) { return }
  updateLineHeight(line, line.height + diff)
  if (cm) { runInOp(cm, function () {
    cm.curOp.forceUpdate = true
    adjustScrollWhenAboveVisible(cm, line, diff)
  }) }
}

function addLineWidget(doc, handle, node, options) {
  var widget = new LineWidget(doc, node, options)
  var cm = doc.cm
  if (cm && widget.noHScroll) { cm.display.alignWidgets = true }
  changeLine(doc, handle, "widget", function (line) {
    var widgets = line.widgets || (line.widgets = [])
    if (widget.insertAt == null) { widgets.push(widget) }
    else { widgets.splice(Math.min(widgets.length - 1, Math.max(0, widget.insertAt)), 0, widget) }
    widget.line = line
    if (cm && !lineIsHidden(doc, line)) {
      var aboveVisible = heightAtLine(line) < doc.scrollTop
      updateLineHeight(line, line.height + widgetHeight(widget))
      if (aboveVisible) { addToScrollPos(cm, null, widget.height) }
      cm.curOp.forceUpdate = true
    }
    return true
  })
  return widget
}

// TEXTMARKERS

// Created with markText and setBookmark methods. A TextMarker is a
// handle that can be used to clear or find a marked position in the
// document. Line objects hold arrays (markedSpans) containing
// {from, to, marker} object pointing to such marker objects, and
// indicating that such a marker is present on that line. Multiple
// lines may point to the same marker when it spans across lines.
// The spans will have null for their from/to properties when the
// marker continues beyond the start/end of the line. Markers have
// links back to the lines they currently touch.

// Collapsed markers have unique ids, in order to be able to order
// them, which is needed for uniquely determining an outer marker
// when they overlap (they may nest, but not partially overlap).
var nextMarkerId = 0

function TextMarker(doc, type) {
  this.lines = []
  this.type = type
  this.doc = doc
  this.id = ++nextMarkerId
}
eventMixin(TextMarker)

// Clear the marker.
TextMarker.prototype.clear = function() {
  var this$1 = this;

  if (this.explicitlyCleared) { return }
  var cm = this.doc.cm, withOp = cm && !cm.curOp
  if (withOp) { startOperation(cm) }
  if (hasHandler(this, "clear")) {
    var found = this.find()
    if (found) { signalLater(this, "clear", found.from, found.to) }
  }
  var min = null, max = null
  for (var i = 0; i < this.lines.length; ++i) {
    var line = this$1.lines[i]
    var span = getMarkedSpanFor(line.markedSpans, this$1)
    if (cm && !this$1.collapsed) { regLineChange(cm, lineNo(line), "text") }
    else if (cm) {
      if (span.to != null) { max = lineNo(line) }
      if (span.from != null) { min = lineNo(line) }
    }
    line.markedSpans = removeMarkedSpan(line.markedSpans, span)
    if (span.from == null && this$1.collapsed && !lineIsHidden(this$1.doc, line) && cm)
      { updateLineHeight(line, textHeight(cm.display)) }
  }
  if (cm && this.collapsed && !cm.options.lineWrapping) { for (var i$1 = 0; i$1 < this.lines.length; ++i$1) {
    var visual = visualLine(this$1.lines[i$1]), len = lineLength(visual)
    if (len > cm.display.maxLineLength) {
      cm.display.maxLine = visual
      cm.display.maxLineLength = len
      cm.display.maxLineChanged = true
    }
  } }

  if (min != null && cm && this.collapsed) { regChange(cm, min, max + 1) }
  this.lines.length = 0
  this.explicitlyCleared = true
  if (this.atomic && this.doc.cantEdit) {
    this.doc.cantEdit = false
    if (cm) { reCheckSelection(cm.doc) }
  }
  if (cm) { signalLater(cm, "markerCleared", cm, this) }
  if (withOp) { endOperation(cm) }
  if (this.parent) { this.parent.clear() }
}

// Find the position of the marker in the document. Returns a {from,
// to} object by default. Side can be passed to get a specific side
// -- 0 (both), -1 (left), or 1 (right). When lineObj is true, the
// Pos objects returned contain a line object, rather than a line
// number (used to prevent looking up the same line twice).
TextMarker.prototype.find = function(side, lineObj) {
  var this$1 = this;

  if (side == null && this.type == "bookmark") { side = 1 }
  var from, to
  for (var i = 0; i < this.lines.length; ++i) {
    var line = this$1.lines[i]
    var span = getMarkedSpanFor(line.markedSpans, this$1)
    if (span.from != null) {
      from = Pos(lineObj ? line : lineNo(line), span.from)
      if (side == -1) { return from }
    }
    if (span.to != null) {
      to = Pos(lineObj ? line : lineNo(line), span.to)
      if (side == 1) { return to }
    }
  }
  return from && {from: from, to: to}
}

// Signals that the marker's widget changed, and surrounding layout
// should be recomputed.
TextMarker.prototype.changed = function() {
  var pos = this.find(-1, true), widget = this, cm = this.doc.cm
  if (!pos || !cm) { return }
  runInOp(cm, function () {
    var line = pos.line, lineN = lineNo(pos.line)
    var view = findViewForLine(cm, lineN)
    if (view) {
      clearLineMeasurementCacheFor(view)
      cm.curOp.selectionChanged = cm.curOp.forceUpdate = true
    }
    cm.curOp.updateMaxLine = true
    if (!lineIsHidden(widget.doc, line) && widget.height != null) {
      var oldHeight = widget.height
      widget.height = null
      var dHeight = widgetHeight(widget) - oldHeight
      if (dHeight)
        { updateLineHeight(line, line.height + dHeight) }
    }
  })
}

TextMarker.prototype.attachLine = function(line) {
  if (!this.lines.length && this.doc.cm) {
    var op = this.doc.cm.curOp
    if (!op.maybeHiddenMarkers || indexOf(op.maybeHiddenMarkers, this) == -1)
      { (op.maybeUnhiddenMarkers || (op.maybeUnhiddenMarkers = [])).push(this) }
  }
  this.lines.push(line)
}
TextMarker.prototype.detachLine = function(line) {
  this.lines.splice(indexOf(this.lines, line), 1)
  if (!this.lines.length && this.doc.cm) {
    var op = this.doc.cm.curOp;(op.maybeHiddenMarkers || (op.maybeHiddenMarkers = [])).push(this)
  }
}

// Create a marker, wire it up to the right lines, and
function markText(doc, from, to, options, type) {
  // Shared markers (across linked documents) are handled separately
  // (markTextShared will call out to this again, once per
  // document).
  if (options && options.shared) { return markTextShared(doc, from, to, options, type) }
  // Ensure we are in an operation.
  if (doc.cm && !doc.cm.curOp) { return operation(doc.cm, markText)(doc, from, to, options, type) }

  var marker = new TextMarker(doc, type), diff = cmp(from, to)
  if (options) { copyObj(options, marker, false) }
  // Don't connect empty markers unless clearWhenEmpty is false
  if (diff > 0 || diff == 0 && marker.clearWhenEmpty !== false)
    { return marker }
  if (marker.replacedWith) {
    // Showing up as a widget implies collapsed (widget replaces text)
    marker.collapsed = true
    marker.widgetNode = elt("span", [marker.replacedWith], "CodeMirror-widget")
    if (!options.handleMouseEvents) { marker.widgetNode.setAttribute("cm-ignore-events", "true") }
    if (options.insertLeft) { marker.widgetNode.insertLeft = true }
  }
  if (marker.collapsed) {
    if (conflictingCollapsedRange(doc, from.line, from, to, marker) ||
        from.line != to.line && conflictingCollapsedRange(doc, to.line, from, to, marker))
      { throw new Error("Inserting collapsed marker partially overlapping an existing one") }
    seeCollapsedSpans()
  }

  if (marker.addToHistory)
    { addChangeToHistory(doc, {from: from, to: to, origin: "markText"}, doc.sel, NaN) }

  var curLine = from.line, cm = doc.cm, updateMaxLine
  doc.iter(curLine, to.line + 1, function (line) {
    if (cm && marker.collapsed && !cm.options.lineWrapping && visualLine(line) == cm.display.maxLine)
      { updateMaxLine = true }
    if (marker.collapsed && curLine != from.line) { updateLineHeight(line, 0) }
    addMarkedSpan(line, new MarkedSpan(marker,
                                       curLine == from.line ? from.ch : null,
                                       curLine == to.line ? to.ch : null))
    ++curLine
  })
  // lineIsHidden depends on the presence of the spans, so needs a second pass
  if (marker.collapsed) { doc.iter(from.line, to.line + 1, function (line) {
    if (lineIsHidden(doc, line)) { updateLineHeight(line, 0) }
  }) }

  if (marker.clearOnEnter) { on(marker, "beforeCursorEnter", function () { return marker.clear(); }) }

  if (marker.readOnly) {
    seeReadOnlySpans()
    if (doc.history.done.length || doc.history.undone.length)
      { doc.clearHistory() }
  }
  if (marker.collapsed) {
    marker.id = ++nextMarkerId
    marker.atomic = true
  }
  if (cm) {
    // Sync editor state
    if (updateMaxLine) { cm.curOp.updateMaxLine = true }
    if (marker.collapsed)
      { regChange(cm, from.line, to.line + 1) }
    else if (marker.className || marker.title || marker.startStyle || marker.endStyle || marker.css)
      { for (var i = from.line; i <= to.line; i++) { regLineChange(cm, i, "text") } }
    if (marker.atomic) { reCheckSelection(cm.doc) }
    signalLater(cm, "markerAdded", cm, marker)
  }
  return marker
}

// SHARED TEXTMARKERS

// A shared marker spans multiple linked documents. It is
// implemented as a meta-marker-object controlling multiple normal
// markers.
function SharedTextMarker(markers, primary) {
  var this$1 = this;

  this.markers = markers
  this.primary = primary
  for (var i = 0; i < markers.length; ++i)
    { markers[i].parent = this$1 }
}
eventMixin(SharedTextMarker)

SharedTextMarker.prototype.clear = function() {
  var this$1 = this;

  if (this.explicitlyCleared) { return }
  this.explicitlyCleared = true
  for (var i = 0; i < this.markers.length; ++i)
    { this$1.markers[i].clear() }
  signalLater(this, "clear")
}
SharedTextMarker.prototype.find = function(side, lineObj) {
  return this.primary.find(side, lineObj)
}

function markTextShared(doc, from, to, options, type) {
  options = copyObj(options)
  options.shared = false
  var markers = [markText(doc, from, to, options, type)], primary = markers[0]
  var widget = options.widgetNode
  linkedDocs(doc, function (doc) {
    if (widget) { options.widgetNode = widget.cloneNode(true) }
    markers.push(markText(doc, clipPos(doc, from), clipPos(doc, to), options, type))
    for (var i = 0; i < doc.linked.length; ++i)
      { if (doc.linked[i].isParent) { return } }
    primary = lst(markers)
  })
  return new SharedTextMarker(markers, primary)
}

function findSharedMarkers(doc) {
  return doc.findMarks(Pos(doc.first, 0), doc.clipPos(Pos(doc.lastLine())), function (m) { return m.parent; })
}

function copySharedMarkers(doc, markers) {
  for (var i = 0; i < markers.length; i++) {
    var marker = markers[i], pos = marker.find()
    var mFrom = doc.clipPos(pos.from), mTo = doc.clipPos(pos.to)
    if (cmp(mFrom, mTo)) {
      var subMark = markText(doc, mFrom, mTo, marker.primary, marker.primary.type)
      marker.markers.push(subMark)
      subMark.parent = marker
    }
  }
}

function detachSharedMarkers(markers) {
  var loop = function ( i ) {
    var marker = markers[i], linked = [marker.primary.doc]
    linkedDocs(marker.primary.doc, function (d) { return linked.push(d); })
    for (var j = 0; j < marker.markers.length; j++) {
      var subMarker = marker.markers[j]
      if (indexOf(linked, subMarker.doc) == -1) {
        subMarker.parent = null
        marker.markers.splice(j--, 1)
      }
    }
  };

  for (var i = 0; i < markers.length; i++) loop( i );
}

var nextDocId = 0
var Doc = function(text, mode, firstLine, lineSep) {
  if (!(this instanceof Doc)) { return new Doc(text, mode, firstLine, lineSep) }
  if (firstLine == null) { firstLine = 0 }

  BranchChunk.call(this, [new LeafChunk([new Line("", null)])])
  this.first = firstLine
  this.scrollTop = this.scrollLeft = 0
  this.cantEdit = false
  this.cleanGeneration = 1
  this.frontier = firstLine
  var start = Pos(firstLine, 0)
  this.sel = simpleSelection(start)
  this.history = new History(null)
  this.id = ++nextDocId
  this.modeOption = mode
  this.lineSep = lineSep
  this.extend = false

  if (typeof text == "string") { text = this.splitLines(text) }
  updateDoc(this, {from: start, to: start, text: text})
  setSelection(this, simpleSelection(start), sel_dontScroll)
}

Doc.prototype = createObj(BranchChunk.prototype, {
  constructor: Doc,
  // Iterate over the document. Supports two forms -- with only one
  // argument, it calls that for each line in the document. With
  // three, it iterates over the range given by the first two (with
  // the second being non-inclusive).
  iter: function(from, to, op) {
    if (op) { this.iterN(from - this.first, to - from, op) }
    else { this.iterN(this.first, this.first + this.size, from) }
  },

  // Non-public interface for adding and removing lines.
  insert: function(at, lines) {
    var height = 0
    for (var i = 0; i < lines.length; ++i) { height += lines[i].height }
    this.insertInner(at - this.first, lines, height)
  },
  remove: function(at, n) { this.removeInner(at - this.first, n) },

  // From here, the methods are part of the public interface. Most
  // are also available from CodeMirror (editor) instances.

  getValue: function(lineSep) {
    var lines = getLines(this, this.first, this.first + this.size)
    if (lineSep === false) { return lines }
    return lines.join(lineSep || this.lineSeparator())
  },
  setValue: docMethodOp(function(code) {
    var top = Pos(this.first, 0), last = this.first + this.size - 1
    makeChange(this, {from: top, to: Pos(last, getLine(this, last).text.length),
                      text: this.splitLines(code), origin: "setValue", full: true}, true)
    setSelection(this, simpleSelection(top))
  }),
  replaceRange: function(code, from, to, origin) {
    from = clipPos(this, from)
    to = to ? clipPos(this, to) : from
    replaceRange(this, code, from, to, origin)
  },
  getRange: function(from, to, lineSep) {
    var lines = getBetween(this, clipPos(this, from), clipPos(this, to))
    if (lineSep === false) { return lines }
    return lines.join(lineSep || this.lineSeparator())
  },

  getLine: function(line) {var l = this.getLineHandle(line); return l && l.text},

  getLineHandle: function(line) {if (isLine(this, line)) { return getLine(this, line) }},
  getLineNumber: function(line) {return lineNo(line)},

  getLineHandleVisualStart: function(line) {
    if (typeof line == "number") { line = getLine(this, line) }
    return visualLine(line)
  },

  lineCount: function() {return this.size},
  firstLine: function() {return this.first},
  lastLine: function() {return this.first + this.size - 1},

  clipPos: function(pos) {return clipPos(this, pos)},

  getCursor: function(start) {
    var range$$1 = this.sel.primary(), pos
    if (start == null || start == "head") { pos = range$$1.head }
    else if (start == "anchor") { pos = range$$1.anchor }
    else if (start == "end" || start == "to" || start === false) { pos = range$$1.to() }
    else { pos = range$$1.from() }
    return pos
  },
  listSelections: function() { return this.sel.ranges },
  somethingSelected: function() {return this.sel.somethingSelected()},

  setCursor: docMethodOp(function(line, ch, options) {
    setSimpleSelection(this, clipPos(this, typeof line == "number" ? Pos(line, ch || 0) : line), null, options)
  }),
  setSelection: docMethodOp(function(anchor, head, options) {
    setSimpleSelection(this, clipPos(this, anchor), clipPos(this, head || anchor), options)
  }),
  extendSelection: docMethodOp(function(head, other, options) {
    extendSelection(this, clipPos(this, head), other && clipPos(this, other), options)
  }),
  extendSelections: docMethodOp(function(heads, options) {
    extendSelections(this, clipPosArray(this, heads), options)
  }),
  extendSelectionsBy: docMethodOp(function(f, options) {
    var heads = map(this.sel.ranges, f)
    extendSelections(this, clipPosArray(this, heads), options)
  }),
  setSelections: docMethodOp(function(ranges, primary, options) {
    var this$1 = this;

    if (!ranges.length) { return }
    var out = []
    for (var i = 0; i < ranges.length; i++)
      { out[i] = new Range(clipPos(this$1, ranges[i].anchor),
                         clipPos(this$1, ranges[i].head)) }
    if (primary == null) { primary = Math.min(ranges.length - 1, this.sel.primIndex) }
    setSelection(this, normalizeSelection(out, primary), options)
  }),
  addSelection: docMethodOp(function(anchor, head, options) {
    var ranges = this.sel.ranges.slice(0)
    ranges.push(new Range(clipPos(this, anchor), clipPos(this, head || anchor)))
    setSelection(this, normalizeSelection(ranges, ranges.length - 1), options)
  }),

  getSelection: function(lineSep) {
    var this$1 = this;

    var ranges = this.sel.ranges, lines
    for (var i = 0; i < ranges.length; i++) {
      var sel = getBetween(this$1, ranges[i].from(), ranges[i].to())
      lines = lines ? lines.concat(sel) : sel
    }
    if (lineSep === false) { return lines }
    else { return lines.join(lineSep || this.lineSeparator()) }
  },
  getSelections: function(lineSep) {
    var this$1 = this;

    var parts = [], ranges = this.sel.ranges
    for (var i = 0; i < ranges.length; i++) {
      var sel = getBetween(this$1, ranges[i].from(), ranges[i].to())
      if (lineSep !== false) { sel = sel.join(lineSep || this$1.lineSeparator()) }
      parts[i] = sel
    }
    return parts
  },
  replaceSelection: function(code, collapse, origin) {
    var dup = []
    for (var i = 0; i < this.sel.ranges.length; i++)
      { dup[i] = code }
    this.replaceSelections(dup, collapse, origin || "+input")
  },
  replaceSelections: docMethodOp(function(code, collapse, origin) {
    var this$1 = this;

    var changes = [], sel = this.sel
    for (var i = 0; i < sel.ranges.length; i++) {
      var range$$1 = sel.ranges[i]
      changes[i] = {from: range$$1.from(), to: range$$1.to(), text: this$1.splitLines(code[i]), origin: origin}
    }
    var newSel = collapse && collapse != "end" && computeReplacedSel(this, changes, collapse)
    for (var i$1 = changes.length - 1; i$1 >= 0; i$1--)
      { makeChange(this$1, changes[i$1]) }
    if (newSel) { setSelectionReplaceHistory(this, newSel) }
    else if (this.cm) { ensureCursorVisible(this.cm) }
  }),
  undo: docMethodOp(function() {makeChangeFromHistory(this, "undo")}),
  redo: docMethodOp(function() {makeChangeFromHistory(this, "redo")}),
  undoSelection: docMethodOp(function() {makeChangeFromHistory(this, "undo", true)}),
  redoSelection: docMethodOp(function() {makeChangeFromHistory(this, "redo", true)}),

  setExtending: function(val) {this.extend = val},
  getExtending: function() {return this.extend},

  historySize: function() {
    var hist = this.history, done = 0, undone = 0
    for (var i = 0; i < hist.done.length; i++) { if (!hist.done[i].ranges) { ++done } }
    for (var i$1 = 0; i$1 < hist.undone.length; i$1++) { if (!hist.undone[i$1].ranges) { ++undone } }
    return {undo: done, redo: undone}
  },
  clearHistory: function() {this.history = new History(this.history.maxGeneration)},

  markClean: function() {
    this.cleanGeneration = this.changeGeneration(true)
  },
  changeGeneration: function(forceSplit) {
    if (forceSplit)
      { this.history.lastOp = this.history.lastSelOp = this.history.lastOrigin = null }
    return this.history.generation
  },
  isClean: function (gen) {
    return this.history.generation == (gen || this.cleanGeneration)
  },

  getHistory: function() {
    return {done: copyHistoryArray(this.history.done),
            undone: copyHistoryArray(this.history.undone)}
  },
  setHistory: function(histData) {
    var hist = this.history = new History(this.history.maxGeneration)
    hist.done = copyHistoryArray(histData.done.slice(0), null, true)
    hist.undone = copyHistoryArray(histData.undone.slice(0), null, true)
  },

  addLineClass: docMethodOp(function(handle, where, cls) {
    return changeLine(this, handle, where == "gutter" ? "gutter" : "class", function (line) {
      var prop = where == "text" ? "textClass"
               : where == "background" ? "bgClass"
               : where == "gutter" ? "gutterClass" : "wrapClass"
      if (!line[prop]) { line[prop] = cls }
      else if (classTest(cls).test(line[prop])) { return false }
      else { line[prop] += " " + cls }
      return true
    })
  }),
  removeLineClass: docMethodOp(function(handle, where, cls) {
    return changeLine(this, handle, where == "gutter" ? "gutter" : "class", function (line) {
      var prop = where == "text" ? "textClass"
               : where == "background" ? "bgClass"
               : where == "gutter" ? "gutterClass" : "wrapClass"
      var cur = line[prop]
      if (!cur) { return false }
      else if (cls == null) { line[prop] = null }
      else {
        var found = cur.match(classTest(cls))
        if (!found) { return false }
        var end = found.index + found[0].length
        line[prop] = cur.slice(0, found.index) + (!found.index || end == cur.length ? "" : " ") + cur.slice(end) || null
      }
      return true
    })
  }),

  addLineWidget: docMethodOp(function(handle, node, options) {
    return addLineWidget(this, handle, node, options)
  }),
  removeLineWidget: function(widget) { widget.clear() },

  markText: function(from, to, options) {
    return markText(this, clipPos(this, from), clipPos(this, to), options, options && options.type || "range")
  },
  setBookmark: function(pos, options) {
    var realOpts = {replacedWith: options && (options.nodeType == null ? options.widget : options),
                    insertLeft: options && options.insertLeft,
                    clearWhenEmpty: false, shared: options && options.shared,
                    handleMouseEvents: options && options.handleMouseEvents}
    pos = clipPos(this, pos)
    return markText(this, pos, pos, realOpts, "bookmark")
  },
  findMarksAt: function(pos) {
    pos = clipPos(this, pos)
    var markers = [], spans = getLine(this, pos.line).markedSpans
    if (spans) { for (var i = 0; i < spans.length; ++i) {
      var span = spans[i]
      if ((span.from == null || span.from <= pos.ch) &&
          (span.to == null || span.to >= pos.ch))
        { markers.push(span.marker.parent || span.marker) }
    } }
    return markers
  },
  findMarks: function(from, to, filter) {
    from = clipPos(this, from); to = clipPos(this, to)
    var found = [], lineNo$$1 = from.line
    this.iter(from.line, to.line + 1, function (line) {
      var spans = line.markedSpans
      if (spans) { for (var i = 0; i < spans.length; i++) {
        var span = spans[i]
        if (!(span.to != null && lineNo$$1 == from.line && from.ch >= span.to ||
              span.from == null && lineNo$$1 != from.line ||
              span.from != null && lineNo$$1 == to.line && span.from >= to.ch) &&
            (!filter || filter(span.marker)))
          { found.push(span.marker.parent || span.marker) }
      } }
      ++lineNo$$1
    })
    return found
  },
  getAllMarks: function() {
    var markers = []
    this.iter(function (line) {
      var sps = line.markedSpans
      if (sps) { for (var i = 0; i < sps.length; ++i)
        { if (sps[i].from != null) { markers.push(sps[i].marker) } } }
    })
    return markers
  },

  posFromIndex: function(off) {
    var ch, lineNo$$1 = this.first, sepSize = this.lineSeparator().length
    this.iter(function (line) {
      var sz = line.text.length + sepSize
      if (sz > off) { ch = off; return true }
      off -= sz
      ++lineNo$$1
    })
    return clipPos(this, Pos(lineNo$$1, ch))
  },
  indexFromPos: function (coords) {
    coords = clipPos(this, coords)
    var index = coords.ch
    if (coords.line < this.first || coords.ch < 0) { return 0 }
    var sepSize = this.lineSeparator().length
    this.iter(this.first, coords.line, function (line) { // iter aborts when callback returns a truthy value
      index += line.text.length + sepSize
    })
    return index
  },

  copy: function(copyHistory) {
    var doc = new Doc(getLines(this, this.first, this.first + this.size),
                      this.modeOption, this.first, this.lineSep)
    doc.scrollTop = this.scrollTop; doc.scrollLeft = this.scrollLeft
    doc.sel = this.sel
    doc.extend = false
    if (copyHistory) {
      doc.history.undoDepth = this.history.undoDepth
      doc.setHistory(this.getHistory())
    }
    return doc
  },

  linkedDoc: function(options) {
    if (!options) { options = {} }
    var from = this.first, to = this.first + this.size
    if (options.from != null && options.from > from) { from = options.from }
    if (options.to != null && options.to < to) { to = options.to }
    var copy = new Doc(getLines(this, from, to), options.mode || this.modeOption, from, this.lineSep)
    if (options.sharedHist) { copy.history = this.history
    ; }(this.linked || (this.linked = [])).push({doc: copy, sharedHist: options.sharedHist})
    copy.linked = [{doc: this, isParent: true, sharedHist: options.sharedHist}]
    copySharedMarkers(copy, findSharedMarkers(this))
    return copy
  },
  unlinkDoc: function(other) {
    var this$1 = this;

    if (other instanceof CodeMirror$1) { other = other.doc }
    if (this.linked) { for (var i = 0; i < this.linked.length; ++i) {
      var link = this$1.linked[i]
      if (link.doc != other) { continue }
      this$1.linked.splice(i, 1)
      other.unlinkDoc(this$1)
      detachSharedMarkers(findSharedMarkers(this$1))
      break
    } }
    // If the histories were shared, split them again
    if (other.history == this.history) {
      var splitIds = [other.id]
      linkedDocs(other, function (doc) { return splitIds.push(doc.id); }, true)
      other.history = new History(null)
      other.history.done = copyHistoryArray(this.history.done, splitIds)
      other.history.undone = copyHistoryArray(this.history.undone, splitIds)
    }
  },
  iterLinkedDocs: function(f) {linkedDocs(this, f)},

  getMode: function() {return this.mode},
  getEditor: function() {return this.cm},

  splitLines: function(str) {
    if (this.lineSep) { return str.split(this.lineSep) }
    return splitLinesAuto(str)
  },
  lineSeparator: function() { return this.lineSep || "\n" }
})

// Public alias.
Doc.prototype.eachLine = Doc.prototype.iter

// Kludge to work around strange IE behavior where it'll sometimes
// re-fire a series of drag-related events right after the drop (#1551)
var lastDrop = 0

function onDrop(e) {
  var cm = this
  clearDragCursor(cm)
  if (signalDOMEvent(cm, e) || eventInWidget(cm.display, e))
    { return }
  e_preventDefault(e)
  if (ie) { lastDrop = +new Date }
  var pos = posFromMouse(cm, e, true), files = e.dataTransfer.files
  if (!pos || cm.isReadOnly()) { return }
  // Might be a file drop, in which case we simply extract the text
  // and insert it.
  if (files && files.length && window.FileReader && window.File) {
    var n = files.length, text = Array(n), read = 0
    var loadFile = function (file, i) {
      if (cm.options.allowDropFileTypes &&
          indexOf(cm.options.allowDropFileTypes, file.type) == -1)
        { return }

      var reader = new FileReader
      reader.onload = operation(cm, function () {
        var content = reader.result
        if (/[\x00-\x08\x0e-\x1f]{2}/.test(content)) { content = "" }
        text[i] = content
        if (++read == n) {
          pos = clipPos(cm.doc, pos)
          var change = {from: pos, to: pos,
                        text: cm.doc.splitLines(text.join(cm.doc.lineSeparator())),
                        origin: "paste"}
          makeChange(cm.doc, change)
          setSelectionReplaceHistory(cm.doc, simpleSelection(pos, changeEnd(change)))
        }
      })
      reader.readAsText(file)
    }
    for (var i = 0; i < n; ++i) { loadFile(files[i], i) }
  } else { // Normal drop
    // Don't do a replace if the drop happened inside of the selected text.
    if (cm.state.draggingText && cm.doc.sel.contains(pos) > -1) {
      cm.state.draggingText(e)
      // Ensure the editor is re-focused
      setTimeout(function () { return cm.display.input.focus(); }, 20)
      return
    }
    try {
      var text$1 = e.dataTransfer.getData("Text")
      if (text$1) {
        var selected
        if (cm.state.draggingText && !cm.state.draggingText.copy)
          { selected = cm.listSelections() }
        setSelectionNoUndo(cm.doc, simpleSelection(pos, pos))
        if (selected) { for (var i$1 = 0; i$1 < selected.length; ++i$1)
          { replaceRange(cm.doc, "", selected[i$1].anchor, selected[i$1].head, "drag") } }
        cm.replaceSelection(text$1, "around", "paste")
        cm.display.input.focus()
      }
    }
    catch(e){}
  }
}

function onDragStart(cm, e) {
  if (ie && (!cm.state.draggingText || +new Date - lastDrop < 100)) { e_stop(e); return }
  if (signalDOMEvent(cm, e) || eventInWidget(cm.display, e)) { return }

  e.dataTransfer.setData("Text", cm.getSelection())
  e.dataTransfer.effectAllowed = "copyMove"

  // Use dummy image instead of default browsers image.
  // Recent Safari (~6.0.2) have a tendency to segfault when this happens, so we don't do it there.
  if (e.dataTransfer.setDragImage && !safari) {
    var img = elt("img", null, null, "position: fixed; left: 0; top: 0;")
    img.src = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
    if (presto) {
      img.width = img.height = 1
      cm.display.wrapper.appendChild(img)
      // Force a relayout, or Opera won't use our image for some obscure reason
      img._top = img.offsetTop
    }
    e.dataTransfer.setDragImage(img, 0, 0)
    if (presto) { img.parentNode.removeChild(img) }
  }
}

function onDragOver(cm, e) {
  var pos = posFromMouse(cm, e)
  if (!pos) { return }
  var frag = document.createDocumentFragment()
  drawSelectionCursor(cm, pos, frag)
  if (!cm.display.dragCursor) {
    cm.display.dragCursor = elt("div", null, "CodeMirror-cursors CodeMirror-dragcursors")
    cm.display.lineSpace.insertBefore(cm.display.dragCursor, cm.display.cursorDiv)
  }
  removeChildrenAndAdd(cm.display.dragCursor, frag)
}

function clearDragCursor(cm) {
  if (cm.display.dragCursor) {
    cm.display.lineSpace.removeChild(cm.display.dragCursor)
    cm.display.dragCursor = null
  }
}

// These must be handled carefully, because naively registering a
// handler for each editor will cause the editors to never be
// garbage collected.

function forEachCodeMirror(f) {
  if (!document.body.getElementsByClassName) { return }
  var byClass = document.body.getElementsByClassName("CodeMirror")
  for (var i = 0; i < byClass.length; i++) {
    var cm = byClass[i].CodeMirror
    if (cm) { f(cm) }
  }
}

var globalsRegistered = false
function ensureGlobalHandlers() {
  if (globalsRegistered) { return }
  registerGlobalHandlers()
  globalsRegistered = true
}
function registerGlobalHandlers() {
  // When the window resizes, we need to refresh active editors.
  var resizeTimer
  on(window, "resize", function () {
    if (resizeTimer == null) { resizeTimer = setTimeout(function () {
      resizeTimer = null
      forEachCodeMirror(onResize)
    }, 100) }
  })
  // When the window loses focus, we want to show the editor as blurred
  on(window, "blur", function () { return forEachCodeMirror(onBlur); })
}
// Called when the window resizes
function onResize(cm) {
  var d = cm.display
  if (d.lastWrapHeight == d.wrapper.clientHeight && d.lastWrapWidth == d.wrapper.clientWidth)
    { return }
  // Might be a text scaling operation, clear size caches.
  d.cachedCharWidth = d.cachedTextHeight = d.cachedPaddingH = null
  d.scrollbarsClipped = false
  cm.setSize()
}

var keyNames = {
  3: "Enter", 8: "Backspace", 9: "Tab", 13: "Enter", 16: "Shift", 17: "Ctrl", 18: "Alt",
  19: "Pause", 20: "CapsLock", 27: "Esc", 32: "Space", 33: "PageUp", 34: "PageDown", 35: "End",
  36: "Home", 37: "Left", 38: "Up", 39: "Right", 40: "Down", 44: "PrintScrn", 45: "Insert",
  46: "Delete", 59: ";", 61: "=", 91: "Mod", 92: "Mod", 93: "Mod",
  106: "*", 107: "=", 109: "-", 110: ".", 111: "/", 127: "Delete",
  173: "-", 186: ";", 187: "=", 188: ",", 189: "-", 190: ".", 191: "/", 192: "`", 219: "[", 220: "\\",
  221: "]", 222: "'", 63232: "Up", 63233: "Down", 63234: "Left", 63235: "Right", 63272: "Delete",
  63273: "Home", 63275: "End", 63276: "PageUp", 63277: "PageDown", 63302: "Insert"
}

// Number keys
for (var i = 0; i < 10; i++) { keyNames[i + 48] = keyNames[i + 96] = String(i) }
// Alphabetic keys
for (var i$1 = 65; i$1 <= 90; i$1++) { keyNames[i$1] = String.fromCharCode(i$1) }
// Function keys
for (var i$2 = 1; i$2 <= 12; i$2++) { keyNames[i$2 + 111] = keyNames[i$2 + 63235] = "F" + i$2 }

var keyMap = {}

keyMap.basic = {
  "Left": "goCharLeft", "Right": "goCharRight", "Up": "goLineUp", "Down": "goLineDown",
  "End": "goLineEnd", "Home": "goLineStartSmart", "PageUp": "goPageUp", "PageDown": "goPageDown",
  "Delete": "delCharAfter", "Backspace": "delCharBefore", "Shift-Backspace": "delCharBefore",
  "Tab": "defaultTab", "Shift-Tab": "indentAuto",
  "Enter": "newlineAndIndent", "Insert": "toggleOverwrite",
  "Esc": "singleSelection"
}
// Note that the save and find-related commands aren't defined by
// default. User code or addons can define them. Unknown commands
// are simply ignored.
keyMap.pcDefault = {
  "Ctrl-A": "selectAll", "Ctrl-D": "deleteLine", "Ctrl-Z": "undo", "Shift-Ctrl-Z": "redo", "Ctrl-Y": "redo",
  "Ctrl-Home": "goDocStart", "Ctrl-End": "goDocEnd", "Ctrl-Up": "goLineUp", "Ctrl-Down": "goLineDown",
  "Ctrl-Left": "goGroupLeft", "Ctrl-Right": "goGroupRight", "Alt-Left": "goLineStart", "Alt-Right": "goLineEnd",
  "Ctrl-Backspace": "delGroupBefore", "Ctrl-Delete": "delGroupAfter", "Ctrl-S": "save", "Ctrl-F": "find",
  "Ctrl-G": "findNext", "Shift-Ctrl-G": "findPrev", "Shift-Ctrl-F": "replace", "Shift-Ctrl-R": "replaceAll",
  "Ctrl-[": "indentLess", "Ctrl-]": "indentMore",
  "Ctrl-U": "undoSelection", "Shift-Ctrl-U": "redoSelection", "Alt-U": "redoSelection",
  fallthrough: "basic"
}
// Very basic readline/emacs-style bindings, which are standard on Mac.
keyMap.emacsy = {
  "Ctrl-F": "goCharRight", "Ctrl-B": "goCharLeft", "Ctrl-P": "goLineUp", "Ctrl-N": "goLineDown",
  "Alt-F": "goWordRight", "Alt-B": "goWordLeft", "Ctrl-A": "goLineStart", "Ctrl-E": "goLineEnd",
  "Ctrl-V": "goPageDown", "Shift-Ctrl-V": "goPageUp", "Ctrl-D": "delCharAfter", "Ctrl-H": "delCharBefore",
  "Alt-D": "delWordAfter", "Alt-Backspace": "delWordBefore", "Ctrl-K": "killLine", "Ctrl-T": "transposeChars",
  "Ctrl-O": "openLine"
}
keyMap.macDefault = {
  "Cmd-A": "selectAll", "Cmd-D": "deleteLine", "Cmd-Z": "undo", "Shift-Cmd-Z": "redo", "Cmd-Y": "redo",
  "Cmd-Home": "goDocStart", "Cmd-Up": "goDocStart", "Cmd-End": "goDocEnd", "Cmd-Down": "goDocEnd", "Alt-Left": "goGroupLeft",
  "Alt-Right": "goGroupRight", "Cmd-Left": "goLineLeft", "Cmd-Right": "goLineRight", "Alt-Backspace": "delGroupBefore",
  "Ctrl-Alt-Backspace": "delGroupAfter", "Alt-Delete": "delGroupAfter", "Cmd-S": "save", "Cmd-F": "find",
  "Cmd-G": "findNext", "Shift-Cmd-G": "findPrev", "Cmd-Alt-F": "replace", "Shift-Cmd-Alt-F": "replaceAll",
  "Cmd-[": "indentLess", "Cmd-]": "indentMore", "Cmd-Backspace": "delWrappedLineLeft", "Cmd-Delete": "delWrappedLineRight",
  "Cmd-U": "undoSelection", "Shift-Cmd-U": "redoSelection", "Ctrl-Up": "goDocStart", "Ctrl-Down": "goDocEnd",
  fallthrough: ["basic", "emacsy"]
}
keyMap["default"] = mac ? keyMap.macDefault : keyMap.pcDefault

// KEYMAP DISPATCH

function normalizeKeyName(name) {
  var parts = name.split(/-(?!$)/)
  name = parts[parts.length - 1]
  var alt, ctrl, shift, cmd
  for (var i = 0; i < parts.length - 1; i++) {
    var mod = parts[i]
    if (/^(cmd|meta|m)$/i.test(mod)) { cmd = true }
    else if (/^a(lt)?$/i.test(mod)) { alt = true }
    else if (/^(c|ctrl|control)$/i.test(mod)) { ctrl = true }
    else if (/^s(hift)?$/i.test(mod)) { shift = true }
    else { throw new Error("Unrecognized modifier name: " + mod) }
  }
  if (alt) { name = "Alt-" + name }
  if (ctrl) { name = "Ctrl-" + name }
  if (cmd) { name = "Cmd-" + name }
  if (shift) { name = "Shift-" + name }
  return name
}

// This is a kludge to keep keymaps mostly working as raw objects
// (backwards compatibility) while at the same time support features
// like normalization and multi-stroke key bindings. It compiles a
// new normalized keymap, and then updates the old object to reflect
// this.
function normalizeKeyMap(keymap) {
  var copy = {}
  for (var keyname in keymap) { if (keymap.hasOwnProperty(keyname)) {
    var value = keymap[keyname]
    if (/^(name|fallthrough|(de|at)tach)$/.test(keyname)) { continue }
    if (value == "...") { delete keymap[keyname]; continue }

    var keys = map(keyname.split(" "), normalizeKeyName)
    for (var i = 0; i < keys.length; i++) {
      var val = void 0, name = void 0
      if (i == keys.length - 1) {
        name = keys.join(" ")
        val = value
      } else {
        name = keys.slice(0, i + 1).join(" ")
        val = "..."
      }
      var prev = copy[name]
      if (!prev) { copy[name] = val }
      else if (prev != val) { throw new Error("Inconsistent bindings for " + name) }
    }
    delete keymap[keyname]
  } }
  for (var prop in copy) { keymap[prop] = copy[prop] }
  return keymap
}

function lookupKey(key, map$$1, handle, context) {
  map$$1 = getKeyMap(map$$1)
  var found = map$$1.call ? map$$1.call(key, context) : map$$1[key]
  if (found === false) { return "nothing" }
  if (found === "...") { return "multi" }
  if (found != null && handle(found)) { return "handled" }

  if (map$$1.fallthrough) {
    if (Object.prototype.toString.call(map$$1.fallthrough) != "[object Array]")
      { return lookupKey(key, map$$1.fallthrough, handle, context) }
    for (var i = 0; i < map$$1.fallthrough.length; i++) {
      var result = lookupKey(key, map$$1.fallthrough[i], handle, context)
      if (result) { return result }
    }
  }
}

// Modifier key presses don't count as 'real' key presses for the
// purpose of keymap fallthrough.
function isModifierKey(value) {
  var name = typeof value == "string" ? value : keyNames[value.keyCode]
  return name == "Ctrl" || name == "Alt" || name == "Shift" || name == "Mod"
}

// Look up the name of a key as indicated by an event object.
function keyName(event, noShift) {
  if (presto && event.keyCode == 34 && event["char"]) { return false }
  var base = keyNames[event.keyCode], name = base
  if (name == null || event.altGraphKey) { return false }
  if (event.altKey && base != "Alt") { name = "Alt-" + name }
  if ((flipCtrlCmd ? event.metaKey : event.ctrlKey) && base != "Ctrl") { name = "Ctrl-" + name }
  if ((flipCtrlCmd ? event.ctrlKey : event.metaKey) && base != "Cmd") { name = "Cmd-" + name }
  if (!noShift && event.shiftKey && base != "Shift") { name = "Shift-" + name }
  return name
}

function getKeyMap(val) {
  return typeof val == "string" ? keyMap[val] : val
}

// Helper for deleting text near the selection(s), used to implement
// backspace, delete, and similar functionality.
function deleteNearSelection(cm, compute) {
  var ranges = cm.doc.sel.ranges, kill = []
  // Build up a set of ranges to kill first, merging overlapping
  // ranges.
  for (var i = 0; i < ranges.length; i++) {
    var toKill = compute(ranges[i])
    while (kill.length && cmp(toKill.from, lst(kill).to) <= 0) {
      var replaced = kill.pop()
      if (cmp(replaced.from, toKill.from) < 0) {
        toKill.from = replaced.from
        break
      }
    }
    kill.push(toKill)
  }
  // Next, remove those actual ranges.
  runInOp(cm, function () {
    for (var i = kill.length - 1; i >= 0; i--)
      { replaceRange(cm.doc, "", kill[i].from, kill[i].to, "+delete") }
    ensureCursorVisible(cm)
  })
}

// Commands are parameter-less actions that can be performed on an
// editor, mostly used for keybindings.
var commands = {
  selectAll: selectAll,
  singleSelection: function (cm) { return cm.setSelection(cm.getCursor("anchor"), cm.getCursor("head"), sel_dontScroll); },
  killLine: function (cm) { return deleteNearSelection(cm, function (range) {
    if (range.empty()) {
      var len = getLine(cm.doc, range.head.line).text.length
      if (range.head.ch == len && range.head.line < cm.lastLine())
        { return {from: range.head, to: Pos(range.head.line + 1, 0)} }
      else
        { return {from: range.head, to: Pos(range.head.line, len)} }
    } else {
      return {from: range.from(), to: range.to()}
    }
  }); },
  deleteLine: function (cm) { return deleteNearSelection(cm, function (range) { return ({
    from: Pos(range.from().line, 0),
    to: clipPos(cm.doc, Pos(range.to().line + 1, 0))
  }); }); },
  delLineLeft: function (cm) { return deleteNearSelection(cm, function (range) { return ({
    from: Pos(range.from().line, 0), to: range.from()
  }); }); },
  delWrappedLineLeft: function (cm) { return deleteNearSelection(cm, function (range) {
    var top = cm.charCoords(range.head, "div").top + 5
    var leftPos = cm.coordsChar({left: 0, top: top}, "div")
    return {from: leftPos, to: range.from()}
  }); },
  delWrappedLineRight: function (cm) { return deleteNearSelection(cm, function (range) {
    var top = cm.charCoords(range.head, "div").top + 5
    var rightPos = cm.coordsChar({left: cm.display.lineDiv.offsetWidth + 100, top: top}, "div")
    return {from: range.from(), to: rightPos }
  }); },
  undo: function (cm) { return cm.undo(); },
  redo: function (cm) { return cm.redo(); },
  undoSelection: function (cm) { return cm.undoSelection(); },
  redoSelection: function (cm) { return cm.redoSelection(); },
  goDocStart: function (cm) { return cm.extendSelection(Pos(cm.firstLine(), 0)); },
  goDocEnd: function (cm) { return cm.extendSelection(Pos(cm.lastLine())); },
  goLineStart: function (cm) { return cm.extendSelectionsBy(function (range) { return lineStart(cm, range.head.line); },
    {origin: "+move", bias: 1}
  ); },
  goLineStartSmart: function (cm) { return cm.extendSelectionsBy(function (range) { return lineStartSmart(cm, range.head); },
    {origin: "+move", bias: 1}
  ); },
  goLineEnd: function (cm) { return cm.extendSelectionsBy(function (range) { return lineEnd(cm, range.head.line); },
    {origin: "+move", bias: -1}
  ); },
  goLineRight: function (cm) { return cm.extendSelectionsBy(function (range) {
    var top = cm.charCoords(range.head, "div").top + 5
    return cm.coordsChar({left: cm.display.lineDiv.offsetWidth + 100, top: top}, "div")
  }, sel_move); },
  goLineLeft: function (cm) { return cm.extendSelectionsBy(function (range) {
    var top = cm.charCoords(range.head, "div").top + 5
    return cm.coordsChar({left: 0, top: top}, "div")
  }, sel_move); },
  goLineLeftSmart: function (cm) { return cm.extendSelectionsBy(function (range) {
    var top = cm.charCoords(range.head, "div").top + 5
    var pos = cm.coordsChar({left: 0, top: top}, "div")
    if (pos.ch < cm.getLine(pos.line).search(/\S/)) { return lineStartSmart(cm, range.head) }
    return pos
  }, sel_move); },
  goLineUp: function (cm) { return cm.moveV(-1, "line"); },
  goLineDown: function (cm) { return cm.moveV(1, "line"); },
  goPageUp: function (cm) { return cm.moveV(-1, "page"); },
  goPageDown: function (cm) { return cm.moveV(1, "page"); },
  goCharLeft: function (cm) { return cm.moveH(-1, "char"); },
  goCharRight: function (cm) { return cm.moveH(1, "char"); },
  goColumnLeft: function (cm) { return cm.moveH(-1, "column"); },
  goColumnRight: function (cm) { return cm.moveH(1, "column"); },
  goWordLeft: function (cm) { return cm.moveH(-1, "word"); },
  goGroupRight: function (cm) { return cm.moveH(1, "group"); },
  goGroupLeft: function (cm) { return cm.moveH(-1, "group"); },
  goWordRight: function (cm) { return cm.moveH(1, "word"); },
  delCharBefore: function (cm) { return cm.deleteH(-1, "char"); },
  delCharAfter: function (cm) { return cm.deleteH(1, "char"); },
  delWordBefore: function (cm) { return cm.deleteH(-1, "word"); },
  delWordAfter: function (cm) { return cm.deleteH(1, "word"); },
  delGroupBefore: function (cm) { return cm.deleteH(-1, "group"); },
  delGroupAfter: function (cm) { return cm.deleteH(1, "group"); },
  indentAuto: function (cm) { return cm.indentSelection("smart"); },
  indentMore: function (cm) { return cm.indentSelection("add"); },
  indentLess: function (cm) { return cm.indentSelection("subtract"); },
  insertTab: function (cm) { return cm.replaceSelection("\t"); },
  insertSoftTab: function (cm) {
    var spaces = [], ranges = cm.listSelections(), tabSize = cm.options.tabSize
    for (var i = 0; i < ranges.length; i++) {
      var pos = ranges[i].from()
      var col = countColumn(cm.getLine(pos.line), pos.ch, tabSize)
      spaces.push(spaceStr(tabSize - col % tabSize))
    }
    cm.replaceSelections(spaces)
  },
  defaultTab: function (cm) {
    if (cm.somethingSelected()) { cm.indentSelection("add") }
    else { cm.execCommand("insertTab") }
  },
  // Swap the two chars left and right of each selection's head.
  // Move cursor behind the two swapped characters afterwards.
  //
  // Doesn't consider line feeds a character.
  // Doesn't scan more than one line above to find a character.
  // Doesn't do anything on an empty line.
  // Doesn't do anything with non-empty selections.
  transposeChars: function (cm) { return runInOp(cm, function () {
    var ranges = cm.listSelections(), newSel = []
    for (var i = 0; i < ranges.length; i++) {
      if (!ranges[i].empty()) { continue }
      var cur = ranges[i].head, line = getLine(cm.doc, cur.line).text
      if (line) {
        if (cur.ch == line.length) { cur = new Pos(cur.line, cur.ch - 1) }
        if (cur.ch > 0) {
          cur = new Pos(cur.line, cur.ch + 1)
          cm.replaceRange(line.charAt(cur.ch - 1) + line.charAt(cur.ch - 2),
                          Pos(cur.line, cur.ch - 2), cur, "+transpose")
        } else if (cur.line > cm.doc.first) {
          var prev = getLine(cm.doc, cur.line - 1).text
          if (prev) {
            cur = new Pos(cur.line, 1)
            cm.replaceRange(line.charAt(0) + cm.doc.lineSeparator() +
                            prev.charAt(prev.length - 1),
                            Pos(cur.line - 1, prev.length - 1), cur, "+transpose")
          }
        }
      }
      newSel.push(new Range(cur, cur))
    }
    cm.setSelections(newSel)
  }); },
  newlineAndIndent: function (cm) { return runInOp(cm, function () {
    var sels = cm.listSelections()
    for (var i = sels.length - 1; i >= 0; i--)
      { cm.replaceRange(cm.doc.lineSeparator(), sels[i].anchor, sels[i].head, "+input") }
    sels = cm.listSelections()
    for (var i$1 = 0; i$1 < sels.length; i$1++)
      { cm.indentLine(sels[i$1].from().line, null, true) }
    ensureCursorVisible(cm)
  }); },
  openLine: function (cm) { return cm.replaceSelection("\n", "start"); },
  toggleOverwrite: function (cm) { return cm.toggleOverwrite(); }
}


function lineStart(cm, lineN) {
  var line = getLine(cm.doc, lineN)
  var visual = visualLine(line)
  if (visual != line) { lineN = lineNo(visual) }
  var order = getOrder(visual)
  var ch = !order ? 0 : order[0].level % 2 ? lineRight(visual) : lineLeft(visual)
  return Pos(lineN, ch)
}
function lineEnd(cm, lineN) {
  var merged, line = getLine(cm.doc, lineN)
  while (merged = collapsedSpanAtEnd(line)) {
    line = merged.find(1, true).line
    lineN = null
  }
  var order = getOrder(line)
  var ch = !order ? line.text.length : order[0].level % 2 ? lineLeft(line) : lineRight(line)
  return Pos(lineN == null ? lineNo(line) : lineN, ch)
}
function lineStartSmart(cm, pos) {
  var start = lineStart(cm, pos.line)
  var line = getLine(cm.doc, start.line)
  var order = getOrder(line)
  if (!order || order[0].level == 0) {
    var firstNonWS = Math.max(0, line.text.search(/\S/))
    var inWS = pos.line == start.line && pos.ch <= firstNonWS && pos.ch
    return Pos(start.line, inWS ? 0 : firstNonWS)
  }
  return start
}

// Run a handler that was bound to a key.
function doHandleBinding(cm, bound, dropShift) {
  if (typeof bound == "string") {
    bound = commands[bound]
    if (!bound) { return false }
  }
  // Ensure previous input has been read, so that the handler sees a
  // consistent view of the document
  cm.display.input.ensurePolled()
  var prevShift = cm.display.shift, done = false
  try {
    if (cm.isReadOnly()) { cm.state.suppressEdits = true }
    if (dropShift) { cm.display.shift = false }
    done = bound(cm) != Pass
  } finally {
    cm.display.shift = prevShift
    cm.state.suppressEdits = false
  }
  return done
}

function lookupKeyForEditor(cm, name, handle) {
  for (var i = 0; i < cm.state.keyMaps.length; i++) {
    var result = lookupKey(name, cm.state.keyMaps[i], handle, cm)
    if (result) { return result }
  }
  return (cm.options.extraKeys && lookupKey(name, cm.options.extraKeys, handle, cm))
    || lookupKey(name, cm.options.keyMap, handle, cm)
}

var stopSeq = new Delayed
function dispatchKey(cm, name, e, handle) {
  var seq = cm.state.keySeq
  if (seq) {
    if (isModifierKey(name)) { return "handled" }
    stopSeq.set(50, function () {
      if (cm.state.keySeq == seq) {
        cm.state.keySeq = null
        cm.display.input.reset()
      }
    })
    name = seq + " " + name
  }
  var result = lookupKeyForEditor(cm, name, handle)

  if (result == "multi")
    { cm.state.keySeq = name }
  if (result == "handled")
    { signalLater(cm, "keyHandled", cm, name, e) }

  if (result == "handled" || result == "multi") {
    e_preventDefault(e)
    restartBlink(cm)
  }

  if (seq && !result && /\'$/.test(name)) {
    e_preventDefault(e)
    return true
  }
  return !!result
}

// Handle a key from the keydown event.
function handleKeyBinding(cm, e) {
  var name = keyName(e, true)
  if (!name) { return false }

  if (e.shiftKey && !cm.state.keySeq) {
    // First try to resolve full name (including 'Shift-'). Failing
    // that, see if there is a cursor-motion command (starting with
    // 'go') bound to the keyname without 'Shift-'.
    return dispatchKey(cm, "Shift-" + name, e, function (b) { return doHandleBinding(cm, b, true); })
        || dispatchKey(cm, name, e, function (b) {
             if (typeof b == "string" ? /^go[A-Z]/.test(b) : b.motion)
               { return doHandleBinding(cm, b) }
           })
  } else {
    return dispatchKey(cm, name, e, function (b) { return doHandleBinding(cm, b); })
  }
}

// Handle a key from the keypress event
function handleCharBinding(cm, e, ch) {
  return dispatchKey(cm, "'" + ch + "'", e, function (b) { return doHandleBinding(cm, b, true); })
}

var lastStoppedKey = null
function onKeyDown(e) {
  var cm = this
  cm.curOp.focus = activeElt()
  if (signalDOMEvent(cm, e)) { return }
  // IE does strange things with escape.
  if (ie && ie_version < 11 && e.keyCode == 27) { e.returnValue = false }
  var code = e.keyCode
  cm.display.shift = code == 16 || e.shiftKey
  var handled = handleKeyBinding(cm, e)
  if (presto) {
    lastStoppedKey = handled ? code : null
    // Opera has no cut event... we try to at least catch the key combo
    if (!handled && code == 88 && !hasCopyEvent && (mac ? e.metaKey : e.ctrlKey))
      { cm.replaceSelection("", null, "cut") }
  }

  // Turn mouse into crosshair when Alt is held on Mac.
  if (code == 18 && !/\bCodeMirror-crosshair\b/.test(cm.display.lineDiv.className))
    { showCrossHair(cm) }
}

function showCrossHair(cm) {
  var lineDiv = cm.display.lineDiv
  addClass(lineDiv, "CodeMirror-crosshair")

  function up(e) {
    if (e.keyCode == 18 || !e.altKey) {
      rmClass(lineDiv, "CodeMirror-crosshair")
      off(document, "keyup", up)
      off(document, "mouseover", up)
    }
  }
  on(document, "keyup", up)
  on(document, "mouseover", up)
}

function onKeyUp(e) {
  if (e.keyCode == 16) { this.doc.sel.shift = false }
  signalDOMEvent(this, e)
}

function onKeyPress(e) {
  var cm = this
  if (eventInWidget(cm.display, e) || signalDOMEvent(cm, e) || e.ctrlKey && !e.altKey || mac && e.metaKey) { return }
  var keyCode = e.keyCode, charCode = e.charCode
  if (presto && keyCode == lastStoppedKey) {lastStoppedKey = null; e_preventDefault(e); return}
  if ((presto && (!e.which || e.which < 10)) && handleKeyBinding(cm, e)) { return }
  var ch = String.fromCharCode(charCode == null ? keyCode : charCode)
  // Some browsers fire keypress events for backspace
  if (ch == "\x08") { return }
  if (handleCharBinding(cm, e, ch)) { return }
  cm.display.input.onKeyPress(e)
}

// A mouse down can be a single click, double click, triple click,
// start of selection drag, start of text drag, new cursor
// (ctrl-click), rectangle drag (alt-drag), or xwin
// middle-click-paste. Or it might be a click on something we should
// not interfere with, such as a scrollbar or widget.
function onMouseDown(e) {
  var cm = this, display = cm.display
  if (signalDOMEvent(cm, e) || display.activeTouch && display.input.supportsTouch()) { return }
  display.shift = e.shiftKey

  if (eventInWidget(display, e)) {
    if (!webkit) {
      // Briefly turn off draggability, to allow widgets to do
      // normal dragging things.
      display.scroller.draggable = false
      setTimeout(function () { return display.scroller.draggable = true; }, 100)
    }
    return
  }
  if (clickInGutter(cm, e)) { return }
  var start = posFromMouse(cm, e)
  window.focus()

  switch (e_button(e)) {
  case 1:
    // #3261: make sure, that we're not starting a second selection
    if (cm.state.selectingText)
      { cm.state.selectingText(e) }
    else if (start)
      { leftButtonDown(cm, e, start) }
    else if (e_target(e) == display.scroller)
      { e_preventDefault(e) }
    break
  case 2:
    if (webkit) { cm.state.lastMiddleDown = +new Date }
    if (start) { extendSelection(cm.doc, start) }
    setTimeout(function () { return display.input.focus(); }, 20)
    e_preventDefault(e)
    break
  case 3:
    if (captureRightClick) { onContextMenu(cm, e) }
    else { delayBlurEvent(cm) }
    break
  }
}

var lastClick;
var lastDoubleClick
function leftButtonDown(cm, e, start) {
  if (ie) { setTimeout(bind(ensureFocus, cm), 0) }
  else { cm.curOp.focus = activeElt() }

  var now = +new Date, type
  if (lastDoubleClick && lastDoubleClick.time > now - 400 && cmp(lastDoubleClick.pos, start) == 0) {
    type = "triple"
  } else if (lastClick && lastClick.time > now - 400 && cmp(lastClick.pos, start) == 0) {
    type = "double"
    lastDoubleClick = {time: now, pos: start}
  } else {
    type = "single"
    lastClick = {time: now, pos: start}
  }

  var sel = cm.doc.sel, modifier = mac ? e.metaKey : e.ctrlKey, contained
  if (cm.options.dragDrop && dragAndDrop && !cm.isReadOnly() &&
      type == "single" && (contained = sel.contains(start)) > -1 &&
      (cmp((contained = sel.ranges[contained]).from(), start) < 0 || start.xRel > 0) &&
      (cmp(contained.to(), start) > 0 || start.xRel < 0))
    { leftButtonStartDrag(cm, e, start, modifier) }
  else
    { leftButtonSelect(cm, e, start, type, modifier) }
}

// Start a text drag. When it ends, see if any dragging actually
// happen, and treat as a click if it didn't.
function leftButtonStartDrag(cm, e, start, modifier) {
  var display = cm.display, startTime = +new Date
  var dragEnd = operation(cm, function (e2) {
    if (webkit) { display.scroller.draggable = false }
    cm.state.draggingText = false
    off(document, "mouseup", dragEnd)
    off(display.scroller, "drop", dragEnd)
    if (Math.abs(e.clientX - e2.clientX) + Math.abs(e.clientY - e2.clientY) < 10) {
      e_preventDefault(e2)
      if (!modifier && +new Date - 200 < startTime)
        { extendSelection(cm.doc, start) }
      // Work around unexplainable focus problem in IE9 (#2127) and Chrome (#3081)
      if (webkit || ie && ie_version == 9)
        { setTimeout(function () {document.body.focus(); display.input.focus()}, 20) }
      else
        { display.input.focus() }
    }
  })
  // Let the drag handler handle this.
  if (webkit) { display.scroller.draggable = true }
  cm.state.draggingText = dragEnd
  dragEnd.copy = mac ? e.altKey : e.ctrlKey
  // IE's approach to draggable
  if (display.scroller.dragDrop) { display.scroller.dragDrop() }
  on(document, "mouseup", dragEnd)
  on(display.scroller, "drop", dragEnd)
}

// Normal selection, as opposed to text dragging.
function leftButtonSelect(cm, e, start, type, addNew) {
  var display = cm.display, doc = cm.doc
  e_preventDefault(e)

  var ourRange, ourIndex, startSel = doc.sel, ranges = startSel.ranges
  if (addNew && !e.shiftKey) {
    ourIndex = doc.sel.contains(start)
    if (ourIndex > -1)
      { ourRange = ranges[ourIndex] }
    else
      { ourRange = new Range(start, start) }
  } else {
    ourRange = doc.sel.primary()
    ourIndex = doc.sel.primIndex
  }

  if (chromeOS ? e.shiftKey && e.metaKey : e.altKey) {
    type = "rect"
    if (!addNew) { ourRange = new Range(start, start) }
    start = posFromMouse(cm, e, true, true)
    ourIndex = -1
  } else if (type == "double") {
    var word = cm.findWordAt(start)
    if (cm.display.shift || doc.extend)
      { ourRange = extendRange(doc, ourRange, word.anchor, word.head) }
    else
      { ourRange = word }
  } else if (type == "triple") {
    var line = new Range(Pos(start.line, 0), clipPos(doc, Pos(start.line + 1, 0)))
    if (cm.display.shift || doc.extend)
      { ourRange = extendRange(doc, ourRange, line.anchor, line.head) }
    else
      { ourRange = line }
  } else {
    ourRange = extendRange(doc, ourRange, start)
  }

  if (!addNew) {
    ourIndex = 0
    setSelection(doc, new Selection([ourRange], 0), sel_mouse)
    startSel = doc.sel
  } else if (ourIndex == -1) {
    ourIndex = ranges.length
    setSelection(doc, normalizeSelection(ranges.concat([ourRange]), ourIndex),
                 {scroll: false, origin: "*mouse"})
  } else if (ranges.length > 1 && ranges[ourIndex].empty() && type == "single" && !e.shiftKey) {
    setSelection(doc, normalizeSelection(ranges.slice(0, ourIndex).concat(ranges.slice(ourIndex + 1)), 0),
                 {scroll: false, origin: "*mouse"})
    startSel = doc.sel
  } else {
    replaceOneSelection(doc, ourIndex, ourRange, sel_mouse)
  }

  var lastPos = start
  function extendTo(pos) {
    if (cmp(lastPos, pos) == 0) { return }
    lastPos = pos

    if (type == "rect") {
      var ranges = [], tabSize = cm.options.tabSize
      var startCol = countColumn(getLine(doc, start.line).text, start.ch, tabSize)
      var posCol = countColumn(getLine(doc, pos.line).text, pos.ch, tabSize)
      var left = Math.min(startCol, posCol), right = Math.max(startCol, posCol)
      for (var line = Math.min(start.line, pos.line), end = Math.min(cm.lastLine(), Math.max(start.line, pos.line));
           line <= end; line++) {
        var text = getLine(doc, line).text, leftPos = findColumn(text, left, tabSize)
        if (left == right)
          { ranges.push(new Range(Pos(line, leftPos), Pos(line, leftPos))) }
        else if (text.length > leftPos)
          { ranges.push(new Range(Pos(line, leftPos), Pos(line, findColumn(text, right, tabSize)))) }
      }
      if (!ranges.length) { ranges.push(new Range(start, start)) }
      setSelection(doc, normalizeSelection(startSel.ranges.slice(0, ourIndex).concat(ranges), ourIndex),
                   {origin: "*mouse", scroll: false})
      cm.scrollIntoView(pos)
    } else {
      var oldRange = ourRange
      var anchor = oldRange.anchor, head = pos
      if (type != "single") {
        var range$$1
        if (type == "double")
          { range$$1 = cm.findWordAt(pos) }
        else
          { range$$1 = new Range(Pos(pos.line, 0), clipPos(doc, Pos(pos.line + 1, 0))) }
        if (cmp(range$$1.anchor, anchor) > 0) {
          head = range$$1.head
          anchor = minPos(oldRange.from(), range$$1.anchor)
        } else {
          head = range$$1.anchor
          anchor = maxPos(oldRange.to(), range$$1.head)
        }
      }
      var ranges$1 = startSel.ranges.slice(0)
      ranges$1[ourIndex] = new Range(clipPos(doc, anchor), head)
      setSelection(doc, normalizeSelection(ranges$1, ourIndex), sel_mouse)
    }
  }

  var editorSize = display.wrapper.getBoundingClientRect()
  // Used to ensure timeout re-tries don't fire when another extend
  // happened in the meantime (clearTimeout isn't reliable -- at
  // least on Chrome, the timeouts still happen even when cleared,
  // if the clear happens after their scheduled firing time).
  var counter = 0

  function extend(e) {
    var curCount = ++counter
    var cur = posFromMouse(cm, e, true, type == "rect")
    if (!cur) { return }
    if (cmp(cur, lastPos) != 0) {
      cm.curOp.focus = activeElt()
      extendTo(cur)
      var visible = visibleLines(display, doc)
      if (cur.line >= visible.to || cur.line < visible.from)
        { setTimeout(operation(cm, function () {if (counter == curCount) { extend(e) }}), 150) }
    } else {
      var outside = e.clientY < editorSize.top ? -20 : e.clientY > editorSize.bottom ? 20 : 0
      if (outside) { setTimeout(operation(cm, function () {
        if (counter != curCount) { return }
        display.scroller.scrollTop += outside
        extend(e)
      }), 50) }
    }
  }

  function done(e) {
    cm.state.selectingText = false
    counter = Infinity
    e_preventDefault(e)
    display.input.focus()
    off(document, "mousemove", move)
    off(document, "mouseup", up)
    doc.history.lastSelOrigin = null
  }

  var move = operation(cm, function (e) {
    if (!e_button(e)) { done(e) }
    else { extend(e) }
  })
  var up = operation(cm, done)
  cm.state.selectingText = up
  on(document, "mousemove", move)
  on(document, "mouseup", up)
}


// Determines whether an event happened in the gutter, and fires the
// handlers for the corresponding event.
function gutterEvent(cm, e, type, prevent) {
  var mX, mY
  try { mX = e.clientX; mY = e.clientY }
  catch(e) { return false }
  if (mX >= Math.floor(cm.display.gutters.getBoundingClientRect().right)) { return false }
  if (prevent) { e_preventDefault(e) }

  var display = cm.display
  var lineBox = display.lineDiv.getBoundingClientRect()

  if (mY > lineBox.bottom || !hasHandler(cm, type)) { return e_defaultPrevented(e) }
  mY -= lineBox.top - display.viewOffset

  for (var i = 0; i < cm.options.gutters.length; ++i) {
    var g = display.gutters.childNodes[i]
    if (g && g.getBoundingClientRect().right >= mX) {
      var line = lineAtHeight(cm.doc, mY)
      var gutter = cm.options.gutters[i]
      signal(cm, type, cm, line, gutter, e)
      return e_defaultPrevented(e)
    }
  }
}

function clickInGutter(cm, e) {
  return gutterEvent(cm, e, "gutterClick", true)
}

// CONTEXT MENU HANDLING

// To make the context menu work, we need to briefly unhide the
// textarea (making it as unobtrusive as possible) to let the
// right-click take effect on it.
function onContextMenu(cm, e) {
  if (eventInWidget(cm.display, e) || contextMenuInGutter(cm, e)) { return }
  if (signalDOMEvent(cm, e, "contextmenu")) { return }
  cm.display.input.onContextMenu(e)
}

function contextMenuInGutter(cm, e) {
  if (!hasHandler(cm, "gutterContextMenu")) { return false }
  return gutterEvent(cm, e, "gutterContextMenu", false)
}

function themeChanged(cm) {
  cm.display.wrapper.className = cm.display.wrapper.className.replace(/\s*cm-s-\S+/g, "") +
    cm.options.theme.replace(/(^|\s)\s*/g, " cm-s-")
  clearCaches(cm)
}

var Init = {toString: function(){return "CodeMirror.Init"}}

var defaults = {}
var optionHandlers = {}

function defineOptions(CodeMirror) {
  var optionHandlers = CodeMirror.optionHandlers

  function option(name, deflt, handle, notOnInit) {
    CodeMirror.defaults[name] = deflt
    if (handle) { optionHandlers[name] =
      notOnInit ? function (cm, val, old) {if (old != Init) { handle(cm, val, old) }} : handle }
  }

  CodeMirror.defineOption = option

  // Passed to option handlers when there is no old value.
  CodeMirror.Init = Init

  // These two are, on init, called from the constructor because they
  // have to be initialized before the editor can start at all.
  option("value", "", function (cm, val) { return cm.setValue(val); }, true)
  option("mode", null, function (cm, val) {
    cm.doc.modeOption = val
    loadMode(cm)
  }, true)

  option("indentUnit", 2, loadMode, true)
  option("indentWithTabs", false)
  option("smartIndent", true)
  option("tabSize", 4, function (cm) {
    resetModeState(cm)
    clearCaches(cm)
    regChange(cm)
  }, true)
  option("lineSeparator", null, function (cm, val) {
    cm.doc.lineSep = val
    if (!val) { return }
    var newBreaks = [], lineNo = cm.doc.first
    cm.doc.iter(function (line) {
      for (var pos = 0;;) {
        var found = line.text.indexOf(val, pos)
        if (found == -1) { break }
        pos = found + val.length
        newBreaks.push(Pos(lineNo, found))
      }
      lineNo++
    })
    for (var i = newBreaks.length - 1; i >= 0; i--)
      { replaceRange(cm.doc, val, newBreaks[i], Pos(newBreaks[i].line, newBreaks[i].ch + val.length)) }
  })
  option("specialChars", /[\u0000-\u001f\u007f\u00ad\u200b-\u200f\u2028\u2029\ufeff]/g, function (cm, val, old) {
    cm.state.specialChars = new RegExp(val.source + (val.test("\t") ? "" : "|\t"), "g")
    if (old != Init) { cm.refresh() }
  })
  option("specialCharPlaceholder", defaultSpecialCharPlaceholder, function (cm) { return cm.refresh(); }, true)
  option("electricChars", true)
  option("inputStyle", mobile ? "contenteditable" : "textarea", function () {
    throw new Error("inputStyle can not (yet) be changed in a running editor") // FIXME
  }, true)
  option("spellcheck", false, function (cm, val) { return cm.getInputField().spellcheck = val; }, true)
  option("rtlMoveVisually", !windows)
  option("wholeLineUpdateBefore", true)

  option("theme", "default", function (cm) {
    themeChanged(cm)
    guttersChanged(cm)
  }, true)
  option("keyMap", "default", function (cm, val, old) {
    var next = getKeyMap(val)
    var prev = old != Init && getKeyMap(old)
    if (prev && prev.detach) { prev.detach(cm, next) }
    if (next.attach) { next.attach(cm, prev || null) }
  })
  option("extraKeys", null)

  option("lineWrapping", false, wrappingChanged, true)
  option("gutters", [], function (cm) {
    setGuttersForLineNumbers(cm.options)
    guttersChanged(cm)
  }, true)
  option("fixedGutter", true, function (cm, val) {
    cm.display.gutters.style.left = val ? compensateForHScroll(cm.display) + "px" : "0"
    cm.refresh()
  }, true)
  option("coverGutterNextToScrollbar", false, function (cm) { return updateScrollbars(cm); }, true)
  option("scrollbarStyle", "native", function (cm) {
    initScrollbars(cm)
    updateScrollbars(cm)
    cm.display.scrollbars.setScrollTop(cm.doc.scrollTop)
    cm.display.scrollbars.setScrollLeft(cm.doc.scrollLeft)
  }, true)
  option("lineNumbers", false, function (cm) {
    setGuttersForLineNumbers(cm.options)
    guttersChanged(cm)
  }, true)
  option("firstLineNumber", 1, guttersChanged, true)
  option("lineNumberFormatter", function (integer) { return integer; }, guttersChanged, true)
  option("showCursorWhenSelecting", false, updateSelection, true)

  option("resetSelectionOnContextMenu", true)
  option("lineWiseCopyCut", true)

  option("readOnly", false, function (cm, val) {
    if (val == "nocursor") {
      onBlur(cm)
      cm.display.input.blur()
      cm.display.disabled = true
    } else {
      cm.display.disabled = false
    }
    cm.display.input.readOnlyChanged(val)
  })
  option("disableInput", false, function (cm, val) {if (!val) { cm.display.input.reset() }}, true)
  option("dragDrop", true, dragDropChanged)
  option("allowDropFileTypes", null)

  option("cursorBlinkRate", 530)
  option("cursorScrollMargin", 0)
  option("cursorHeight", 1, updateSelection, true)
  option("singleCursorHeightPerLine", true, updateSelection, true)
  option("workTime", 100)
  option("workDelay", 100)
  option("flattenSpans", true, resetModeState, true)
  option("addModeClass", false, resetModeState, true)
  option("pollInterval", 100)
  option("undoDepth", 200, function (cm, val) { return cm.doc.history.undoDepth = val; })
  option("historyEventDelay", 1250)
  option("viewportMargin", 10, function (cm) { return cm.refresh(); }, true)
  option("maxHighlightLength", 10000, resetModeState, true)
  option("moveInputWithCursor", true, function (cm, val) {
    if (!val) { cm.display.input.resetPosition() }
  })

  option("tabindex", null, function (cm, val) { return cm.display.input.getField().tabIndex = val || ""; })
  option("autofocus", null)
}

function guttersChanged(cm) {
  updateGutters(cm)
  regChange(cm)
  setTimeout(function () { return alignHorizontally(cm); }, 20)
}

function dragDropChanged(cm, value, old) {
  var wasOn = old && old != Init
  if (!value != !wasOn) {
    var funcs = cm.display.dragFunctions
    var toggle = value ? on : off
    toggle(cm.display.scroller, "dragstart", funcs.start)
    toggle(cm.display.scroller, "dragenter", funcs.enter)
    toggle(cm.display.scroller, "dragover", funcs.over)
    toggle(cm.display.scroller, "dragleave", funcs.leave)
    toggle(cm.display.scroller, "drop", funcs.drop)
  }
}

function wrappingChanged(cm) {
  if (cm.options.lineWrapping) {
    addClass(cm.display.wrapper, "CodeMirror-wrap")
    cm.display.sizer.style.minWidth = ""
    cm.display.sizerWidth = null
  } else {
    rmClass(cm.display.wrapper, "CodeMirror-wrap")
    findMaxLine(cm)
  }
  estimateLineHeights(cm)
  regChange(cm)
  clearCaches(cm)
  setTimeout(function () { return updateScrollbars(cm); }, 100)
}

// A CodeMirror instance represents an editor. This is the object
// that user code is usually dealing with.

function CodeMirror$1(place, options) {
  var this$1 = this;

  if (!(this instanceof CodeMirror$1)) { return new CodeMirror$1(place, options) }

  this.options = options = options ? copyObj(options) : {}
  // Determine effective options based on given values and defaults.
  copyObj(defaults, options, false)
  setGuttersForLineNumbers(options)

  var doc = options.value
  if (typeof doc == "string") { doc = new Doc(doc, options.mode, null, options.lineSeparator) }
  this.doc = doc

  var input = new CodeMirror$1.inputStyles[options.inputStyle](this)
  var display = this.display = new Display(place, doc, input)
  display.wrapper.CodeMirror = this
  updateGutters(this)
  themeChanged(this)
  if (options.lineWrapping)
    { this.display.wrapper.className += " CodeMirror-wrap" }
  if (options.autofocus && !mobile) { display.input.focus() }
  initScrollbars(this)

  this.state = {
    keyMaps: [],  // stores maps added by addKeyMap
    overlays: [], // highlighting overlays, as added by addOverlay
    modeGen: 0,   // bumped when mode/overlay changes, used to invalidate highlighting info
    overwrite: false,
    delayingBlurEvent: false,
    focused: false,
    suppressEdits: false, // used to disable editing during key handlers when in readOnly mode
    pasteIncoming: false, cutIncoming: false, // help recognize paste/cut edits in input.poll
    selectingText: false,
    draggingText: false,
    highlight: new Delayed(), // stores highlight worker timeout
    keySeq: null,  // Unfinished key sequence
    specialChars: null
  }

  // Override magic textarea content restore that IE sometimes does
  // on our hidden textarea on reload
  if (ie && ie_version < 11) { setTimeout(function () { return this$1.display.input.reset(true); }, 20) }

  registerEventHandlers(this)
  ensureGlobalHandlers()

  startOperation(this)
  this.curOp.forceUpdate = true
  attachDoc(this, doc)

  if ((options.autofocus && !mobile) || this.hasFocus())
    { setTimeout(bind(onFocus, this), 20) }
  else
    { onBlur(this) }

  for (var opt in optionHandlers) { if (optionHandlers.hasOwnProperty(opt))
    { optionHandlers[opt](this$1, options[opt], Init) } }
  maybeUpdateLineNumberWidth(this)
  if (options.finishInit) { options.finishInit(this) }
  for (var i = 0; i < initHooks.length; ++i) { initHooks[i](this$1) }
  endOperation(this)
  // Suppress optimizelegibility in Webkit, since it breaks text
  // measuring on line wrapping boundaries.
  if (webkit && options.lineWrapping &&
      getComputedStyle(display.lineDiv).textRendering == "optimizelegibility")
    { display.lineDiv.style.textRendering = "auto" }
}

// The default configuration options.
CodeMirror$1.defaults = defaults
// Functions to run when options are changed.
CodeMirror$1.optionHandlers = optionHandlers

// Attach the necessary event handlers when initializing the editor
function registerEventHandlers(cm) {
  var d = cm.display
  on(d.scroller, "mousedown", operation(cm, onMouseDown))
  // Older IE's will not fire a second mousedown for a double click
  if (ie && ie_version < 11)
    { on(d.scroller, "dblclick", operation(cm, function (e) {
      if (signalDOMEvent(cm, e)) { return }
      var pos = posFromMouse(cm, e)
      if (!pos || clickInGutter(cm, e) || eventInWidget(cm.display, e)) { return }
      e_preventDefault(e)
      var word = cm.findWordAt(pos)
      extendSelection(cm.doc, word.anchor, word.head)
    })) }
  else
    { on(d.scroller, "dblclick", function (e) { return signalDOMEvent(cm, e) || e_preventDefault(e); }) }
  // Some browsers fire contextmenu *after* opening the menu, at
  // which point we can't mess with it anymore. Context menu is
  // handled in onMouseDown for these browsers.
  if (!captureRightClick) { on(d.scroller, "contextmenu", function (e) { return onContextMenu(cm, e); }) }

  // Used to suppress mouse event handling when a touch happens
  var touchFinished, prevTouch = {end: 0}
  function finishTouch() {
    if (d.activeTouch) {
      touchFinished = setTimeout(function () { return d.activeTouch = null; }, 1000)
      prevTouch = d.activeTouch
      prevTouch.end = +new Date
    }
  }
  function isMouseLikeTouchEvent(e) {
    if (e.touches.length != 1) { return false }
    var touch = e.touches[0]
    return touch.radiusX <= 1 && touch.radiusY <= 1
  }
  function farAway(touch, other) {
    if (other.left == null) { return true }
    var dx = other.left - touch.left, dy = other.top - touch.top
    return dx * dx + dy * dy > 20 * 20
  }
  on(d.scroller, "touchstart", function (e) {
    if (!signalDOMEvent(cm, e) && !isMouseLikeTouchEvent(e)) {
      clearTimeout(touchFinished)
      var now = +new Date
      d.activeTouch = {start: now, moved: false,
                       prev: now - prevTouch.end <= 300 ? prevTouch : null}
      if (e.touches.length == 1) {
        d.activeTouch.left = e.touches[0].pageX
        d.activeTouch.top = e.touches[0].pageY
      }
    }
  })
  on(d.scroller, "touchmove", function () {
    if (d.activeTouch) { d.activeTouch.moved = true }
  })
  on(d.scroller, "touchend", function (e) {
    var touch = d.activeTouch
    if (touch && !eventInWidget(d, e) && touch.left != null &&
        !touch.moved && new Date - touch.start < 300) {
      var pos = cm.coordsChar(d.activeTouch, "page"), range
      if (!touch.prev || farAway(touch, touch.prev)) // Single tap
        { range = new Range(pos, pos) }
      else if (!touch.prev.prev || farAway(touch, touch.prev.prev)) // Double tap
        { range = cm.findWordAt(pos) }
      else // Triple tap
        { range = new Range(Pos(pos.line, 0), clipPos(cm.doc, Pos(pos.line + 1, 0))) }
      cm.setSelection(range.anchor, range.head)
      cm.focus()
      e_preventDefault(e)
    }
    finishTouch()
  })
  on(d.scroller, "touchcancel", finishTouch)

  // Sync scrolling between fake scrollbars and real scrollable
  // area, ensure viewport is updated when scrolling.
  on(d.scroller, "scroll", function () {
    if (d.scroller.clientHeight) {
      setScrollTop(cm, d.scroller.scrollTop)
      setScrollLeft(cm, d.scroller.scrollLeft, true)
      signal(cm, "scroll", cm)
    }
  })

  // Listen to wheel events in order to try and update the viewport on time.
  on(d.scroller, "mousewheel", function (e) { return onScrollWheel(cm, e); })
  on(d.scroller, "DOMMouseScroll", function (e) { return onScrollWheel(cm, e); })

  // Prevent wrapper from ever scrolling
  on(d.wrapper, "scroll", function () { return d.wrapper.scrollTop = d.wrapper.scrollLeft = 0; })

  d.dragFunctions = {
    enter: function (e) {if (!signalDOMEvent(cm, e)) { e_stop(e) }},
    over: function (e) {if (!signalDOMEvent(cm, e)) { onDragOver(cm, e); e_stop(e) }},
    start: function (e) { return onDragStart(cm, e); },
    drop: operation(cm, onDrop),
    leave: function (e) {if (!signalDOMEvent(cm, e)) { clearDragCursor(cm) }}
  }

  var inp = d.input.getField()
  on(inp, "keyup", function (e) { return onKeyUp.call(cm, e); })
  on(inp, "keydown", operation(cm, onKeyDown))
  on(inp, "keypress", operation(cm, onKeyPress))
  on(inp, "focus", function (e) { return onFocus(cm, e); })
  on(inp, "blur", function (e) { return onBlur(cm, e); })
}

var initHooks = []
CodeMirror$1.defineInitHook = function (f) { return initHooks.push(f); }

// Indent the given line. The how parameter can be "smart",
// "add"/null, "subtract", or "prev". When aggressive is false
// (typically set to true for forced single-line indents), empty
// lines are not indented, and places where the mode returns Pass
// are left alone.
function indentLine(cm, n, how, aggressive) {
  var doc = cm.doc, state
  if (how == null) { how = "add" }
  if (how == "smart") {
    // Fall back to "prev" when the mode doesn't have an indentation
    // method.
    if (!doc.mode.indent) { how = "prev" }
    else { state = getStateBefore(cm, n) }
  }

  var tabSize = cm.options.tabSize
  var line = getLine(doc, n), curSpace = countColumn(line.text, null, tabSize)
  if (line.stateAfter) { line.stateAfter = null }
  var curSpaceString = line.text.match(/^\s*/)[0], indentation
  if (!aggressive && !/\S/.test(line.text)) {
    indentation = 0
    how = "not"
  } else if (how == "smart") {
    indentation = doc.mode.indent(state, line.text.slice(curSpaceString.length), line.text)
    if (indentation == Pass || indentation > 150) {
      if (!aggressive) { return }
      how = "prev"
    }
  }
  if (how == "prev") {
    if (n > doc.first) { indentation = countColumn(getLine(doc, n-1).text, null, tabSize) }
    else { indentation = 0 }
  } else if (how == "add") {
    indentation = curSpace + cm.options.indentUnit
  } else if (how == "subtract") {
    indentation = curSpace - cm.options.indentUnit
  } else if (typeof how == "number") {
    indentation = curSpace + how
  }
  indentation = Math.max(0, indentation)

  var indentString = "", pos = 0
  if (cm.options.indentWithTabs)
    { for (var i = Math.floor(indentation / tabSize); i; --i) {pos += tabSize; indentString += "\t"} }
  if (pos < indentation) { indentString += spaceStr(indentation - pos) }

  if (indentString != curSpaceString) {
    replaceRange(doc, indentString, Pos(n, 0), Pos(n, curSpaceString.length), "+input")
    line.stateAfter = null
    return true
  } else {
    // Ensure that, if the cursor was in the whitespace at the start
    // of the line, it is moved to the end of that space.
    for (var i$1 = 0; i$1 < doc.sel.ranges.length; i$1++) {
      var range = doc.sel.ranges[i$1]
      if (range.head.line == n && range.head.ch < curSpaceString.length) {
        var pos$1 = Pos(n, curSpaceString.length)
        replaceOneSelection(doc, i$1, new Range(pos$1, pos$1))
        break
      }
    }
  }
}

// This will be set to a {lineWise: bool, text: [string]} object, so
// that, when pasting, we know what kind of selections the copied
// text was made out of.
var lastCopied = null

function setLastCopied(newLastCopied) {
  lastCopied = newLastCopied
}

function applyTextInput(cm, inserted, deleted, sel, origin) {
  var doc = cm.doc
  cm.display.shift = false
  if (!sel) { sel = doc.sel }

  var paste = cm.state.pasteIncoming || origin == "paste"
  var textLines = splitLinesAuto(inserted), multiPaste = null
  // When pasing N lines into N selections, insert one line per selection
  if (paste && sel.ranges.length > 1) {
    if (lastCopied && lastCopied.text.join("\n") == inserted) {
      if (sel.ranges.length % lastCopied.text.length == 0) {
        multiPaste = []
        for (var i = 0; i < lastCopied.text.length; i++)
          { multiPaste.push(doc.splitLines(lastCopied.text[i])) }
      }
    } else if (textLines.length == sel.ranges.length) {
      multiPaste = map(textLines, function (l) { return [l]; })
    }
  }

  var updateInput
  // Normal behavior is to insert the new text into every selection
  for (var i$1 = sel.ranges.length - 1; i$1 >= 0; i$1--) {
    var range$$1 = sel.ranges[i$1]
    var from = range$$1.from(), to = range$$1.to()
    if (range$$1.empty()) {
      if (deleted && deleted > 0) // Handle deletion
        { from = Pos(from.line, from.ch - deleted) }
      else if (cm.state.overwrite && !paste) // Handle overwrite
        { to = Pos(to.line, Math.min(getLine(doc, to.line).text.length, to.ch + lst(textLines).length)) }
      else if (lastCopied && lastCopied.lineWise && lastCopied.text.join("\n") == inserted)
        { from = to = Pos(from.line, 0) }
    }
    updateInput = cm.curOp.updateInput
    var changeEvent = {from: from, to: to, text: multiPaste ? multiPaste[i$1 % multiPaste.length] : textLines,
                       origin: origin || (paste ? "paste" : cm.state.cutIncoming ? "cut" : "+input")}
    makeChange(cm.doc, changeEvent)
    signalLater(cm, "inputRead", cm, changeEvent)
  }
  if (inserted && !paste)
    { triggerElectric(cm, inserted) }

  ensureCursorVisible(cm)
  cm.curOp.updateInput = updateInput
  cm.curOp.typing = true
  cm.state.pasteIncoming = cm.state.cutIncoming = false
}

function handlePaste(e, cm) {
  var pasted = e.clipboardData && e.clipboardData.getData("Text")
  if (pasted) {
    e.preventDefault()
    if (!cm.isReadOnly() && !cm.options.disableInput)
      { runInOp(cm, function () { return applyTextInput(cm, pasted, 0, null, "paste"); }) }
    return true
  }
}

function triggerElectric(cm, inserted) {
  // When an 'electric' character is inserted, immediately trigger a reindent
  if (!cm.options.electricChars || !cm.options.smartIndent) { return }
  var sel = cm.doc.sel

  for (var i = sel.ranges.length - 1; i >= 0; i--) {
    var range$$1 = sel.ranges[i]
    if (range$$1.head.ch > 100 || (i && sel.ranges[i - 1].head.line == range$$1.head.line)) { continue }
    var mode = cm.getModeAt(range$$1.head)
    var indented = false
    if (mode.electricChars) {
      for (var j = 0; j < mode.electricChars.length; j++)
        { if (inserted.indexOf(mode.electricChars.charAt(j)) > -1) {
          indented = indentLine(cm, range$$1.head.line, "smart")
          break
        } }
    } else if (mode.electricInput) {
      if (mode.electricInput.test(getLine(cm.doc, range$$1.head.line).text.slice(0, range$$1.head.ch)))
        { indented = indentLine(cm, range$$1.head.line, "smart") }
    }
    if (indented) { signalLater(cm, "electricInput", cm, range$$1.head.line) }
  }
}

function copyableRanges(cm) {
  var text = [], ranges = []
  for (var i = 0; i < cm.doc.sel.ranges.length; i++) {
    var line = cm.doc.sel.ranges[i].head.line
    var lineRange = {anchor: Pos(line, 0), head: Pos(line + 1, 0)}
    ranges.push(lineRange)
    text.push(cm.getRange(lineRange.anchor, lineRange.head))
  }
  return {text: text, ranges: ranges}
}

function disableBrowserMagic(field, spellcheck) {
  field.setAttribute("autocorrect", "off")
  field.setAttribute("autocapitalize", "off")
  field.setAttribute("spellcheck", !!spellcheck)
}

function hiddenTextarea() {
  var te = elt("textarea", null, null, "position: absolute; bottom: -1em; padding: 0; width: 1px; height: 1em; outline: none")
  var div = elt("div", [te], null, "overflow: hidden; position: relative; width: 3px; height: 0px;")
  // The textarea is kept positioned near the cursor to prevent the
  // fact that it'll be scrolled into view on input from scrolling
  // our fake cursor out of view. On webkit, when wrap=off, paste is
  // very slow. So make the area wide instead.
  if (webkit) { te.style.width = "1000px" }
  else { te.setAttribute("wrap", "off") }
  // If border: 0; -- iOS fails to open keyboard (issue #1287)
  if (ios) { te.style.border = "1px solid black" }
  disableBrowserMagic(te)
  return div
}

// The publicly visible API. Note that methodOp(f) means
// 'wrap f in an operation, performed on its `this` parameter'.

// This is not the complete set of editor methods. Most of the
// methods defined on the Doc type are also injected into
// CodeMirror.prototype, for backwards compatibility and
// convenience.

var addEditorMethods = function(CodeMirror) {
  var optionHandlers = CodeMirror.optionHandlers

  var helpers = CodeMirror.helpers = {}

  CodeMirror.prototype = {
    constructor: CodeMirror,
    focus: function(){window.focus(); this.display.input.focus()},

    setOption: function(option, value) {
      var options = this.options, old = options[option]
      if (options[option] == value && option != "mode") { return }
      options[option] = value
      if (optionHandlers.hasOwnProperty(option))
        { operation(this, optionHandlers[option])(this, value, old) }
    },

    getOption: function(option) {return this.options[option]},
    getDoc: function() {return this.doc},

    addKeyMap: function(map$$1, bottom) {
      this.state.keyMaps[bottom ? "push" : "unshift"](getKeyMap(map$$1))
    },
    removeKeyMap: function(map$$1) {
      var maps = this.state.keyMaps
      for (var i = 0; i < maps.length; ++i)
        { if (maps[i] == map$$1 || maps[i].name == map$$1) {
          maps.splice(i, 1)
          return true
        } }
    },

    addOverlay: methodOp(function(spec, options) {
      var mode = spec.token ? spec : CodeMirror.getMode(this.options, spec)
      if (mode.startState) { throw new Error("Overlays may not be stateful.") }
      insertSorted(this.state.overlays,
                   {mode: mode, modeSpec: spec, opaque: options && options.opaque,
                    priority: (options && options.priority) || 0},
                   function (overlay) { return overlay.priority; })
      this.state.modeGen++
      regChange(this)
    }),
    removeOverlay: methodOp(function(spec) {
      var this$1 = this;

      var overlays = this.state.overlays
      for (var i = 0; i < overlays.length; ++i) {
        var cur = overlays[i].modeSpec
        if (cur == spec || typeof spec == "string" && cur.name == spec) {
          overlays.splice(i, 1)
          this$1.state.modeGen++
          regChange(this$1)
          return
        }
      }
    }),

    indentLine: methodOp(function(n, dir, aggressive) {
      if (typeof dir != "string" && typeof dir != "number") {
        if (dir == null) { dir = this.options.smartIndent ? "smart" : "prev" }
        else { dir = dir ? "add" : "subtract" }
      }
      if (isLine(this.doc, n)) { indentLine(this, n, dir, aggressive) }
    }),
    indentSelection: methodOp(function(how) {
      var this$1 = this;

      var ranges = this.doc.sel.ranges, end = -1
      for (var i = 0; i < ranges.length; i++) {
        var range$$1 = ranges[i]
        if (!range$$1.empty()) {
          var from = range$$1.from(), to = range$$1.to()
          var start = Math.max(end, from.line)
          end = Math.min(this$1.lastLine(), to.line - (to.ch ? 0 : 1)) + 1
          for (var j = start; j < end; ++j)
            { indentLine(this$1, j, how) }
          var newRanges = this$1.doc.sel.ranges
          if (from.ch == 0 && ranges.length == newRanges.length && newRanges[i].from().ch > 0)
            { replaceOneSelection(this$1.doc, i, new Range(from, newRanges[i].to()), sel_dontScroll) }
        } else if (range$$1.head.line > end) {
          indentLine(this$1, range$$1.head.line, how, true)
          end = range$$1.head.line
          if (i == this$1.doc.sel.primIndex) { ensureCursorVisible(this$1) }
        }
      }
    }),

    // Fetch the parser token for a given character. Useful for hacks
    // that want to inspect the mode state (say, for completion).
    getTokenAt: function(pos, precise) {
      return takeToken(this, pos, precise)
    },

    getLineTokens: function(line, precise) {
      return takeToken(this, Pos(line), precise, true)
    },

    getTokenTypeAt: function(pos) {
      pos = clipPos(this.doc, pos)
      var styles = getLineStyles(this, getLine(this.doc, pos.line))
      var before = 0, after = (styles.length - 1) / 2, ch = pos.ch
      var type
      if (ch == 0) { type = styles[2] }
      else { for (;;) {
        var mid = (before + after) >> 1
        if ((mid ? styles[mid * 2 - 1] : 0) >= ch) { after = mid }
        else if (styles[mid * 2 + 1] < ch) { before = mid + 1 }
        else { type = styles[mid * 2 + 2]; break }
      } }
      var cut = type ? type.indexOf("overlay ") : -1
      return cut < 0 ? type : cut == 0 ? null : type.slice(0, cut - 1)
    },

    getModeAt: function(pos) {
      var mode = this.doc.mode
      if (!mode.innerMode) { return mode }
      return CodeMirror.innerMode(mode, this.getTokenAt(pos).state).mode
    },

    getHelper: function(pos, type) {
      return this.getHelpers(pos, type)[0]
    },

    getHelpers: function(pos, type) {
      var this$1 = this;

      var found = []
      if (!helpers.hasOwnProperty(type)) { return found }
      var help = helpers[type], mode = this.getModeAt(pos)
      if (typeof mode[type] == "string") {
        if (help[mode[type]]) { found.push(help[mode[type]]) }
      } else if (mode[type]) {
        for (var i = 0; i < mode[type].length; i++) {
          var val = help[mode[type][i]]
          if (val) { found.push(val) }
        }
      } else if (mode.helperType && help[mode.helperType]) {
        found.push(help[mode.helperType])
      } else if (help[mode.name]) {
        found.push(help[mode.name])
      }
      for (var i$1 = 0; i$1 < help._global.length; i$1++) {
        var cur = help._global[i$1]
        if (cur.pred(mode, this$1) && indexOf(found, cur.val) == -1)
          { found.push(cur.val) }
      }
      return found
    },

    getStateAfter: function(line, precise) {
      var doc = this.doc
      line = clipLine(doc, line == null ? doc.first + doc.size - 1: line)
      return getStateBefore(this, line + 1, precise)
    },

    cursorCoords: function(start, mode) {
      var pos, range$$1 = this.doc.sel.primary()
      if (start == null) { pos = range$$1.head }
      else if (typeof start == "object") { pos = clipPos(this.doc, start) }
      else { pos = start ? range$$1.from() : range$$1.to() }
      return cursorCoords(this, pos, mode || "page")
    },

    charCoords: function(pos, mode) {
      return charCoords(this, clipPos(this.doc, pos), mode || "page")
    },

    coordsChar: function(coords, mode) {
      coords = fromCoordSystem(this, coords, mode || "page")
      return coordsChar(this, coords.left, coords.top)
    },

    lineAtHeight: function(height, mode) {
      height = fromCoordSystem(this, {top: height, left: 0}, mode || "page").top
      return lineAtHeight(this.doc, height + this.display.viewOffset)
    },
    heightAtLine: function(line, mode) {
      var end = false, lineObj
      if (typeof line == "number") {
        var last = this.doc.first + this.doc.size - 1
        if (line < this.doc.first) { line = this.doc.first }
        else if (line > last) { line = last; end = true }
        lineObj = getLine(this.doc, line)
      } else {
        lineObj = line
      }
      return intoCoordSystem(this, lineObj, {top: 0, left: 0}, mode || "page").top +
        (end ? this.doc.height - heightAtLine(lineObj) : 0)
    },

    defaultTextHeight: function() { return textHeight(this.display) },
    defaultCharWidth: function() { return charWidth(this.display) },

    setGutterMarker: methodOp(function(line, gutterID, value) {
      return changeLine(this.doc, line, "gutter", function (line) {
        var markers = line.gutterMarkers || (line.gutterMarkers = {})
        markers[gutterID] = value
        if (!value && isEmpty(markers)) { line.gutterMarkers = null }
        return true
      })
    }),

    clearGutter: methodOp(function(gutterID) {
      var this$1 = this;

      var doc = this.doc, i = doc.first
      doc.iter(function (line) {
        if (line.gutterMarkers && line.gutterMarkers[gutterID]) {
          line.gutterMarkers[gutterID] = null
          regLineChange(this$1, i, "gutter")
          if (isEmpty(line.gutterMarkers)) { line.gutterMarkers = null }
        }
        ++i
      })
    }),

    lineInfo: function(line) {
      var n
      if (typeof line == "number") {
        if (!isLine(this.doc, line)) { return null }
        n = line
        line = getLine(this.doc, line)
        if (!line) { return null }
      } else {
        n = lineNo(line)
        if (n == null) { return null }
      }
      return {line: n, handle: line, text: line.text, gutterMarkers: line.gutterMarkers,
              textClass: line.textClass, bgClass: line.bgClass, wrapClass: line.wrapClass,
              widgets: line.widgets}
    },

    getViewport: function() { return {from: this.display.viewFrom, to: this.display.viewTo}},

    addWidget: function(pos, node, scroll, vert, horiz) {
      var display = this.display
      pos = cursorCoords(this, clipPos(this.doc, pos))
      var top = pos.bottom, left = pos.left
      node.style.position = "absolute"
      node.setAttribute("cm-ignore-events", "true")
      this.display.input.setUneditable(node)
      display.sizer.appendChild(node)
      if (vert == "over") {
        top = pos.top
      } else if (vert == "above" || vert == "near") {
        var vspace = Math.max(display.wrapper.clientHeight, this.doc.height),
        hspace = Math.max(display.sizer.clientWidth, display.lineSpace.clientWidth)
        // Default to positioning above (if specified and possible); otherwise default to positioning below
        if ((vert == 'above' || pos.bottom + node.offsetHeight > vspace) && pos.top > node.offsetHeight)
          { top = pos.top - node.offsetHeight }
        else if (pos.bottom + node.offsetHeight <= vspace)
          { top = pos.bottom }
        if (left + node.offsetWidth > hspace)
          { left = hspace - node.offsetWidth }
      }
      node.style.top = top + "px"
      node.style.left = node.style.right = ""
      if (horiz == "right") {
        left = display.sizer.clientWidth - node.offsetWidth
        node.style.right = "0px"
      } else {
        if (horiz == "left") { left = 0 }
        else if (horiz == "middle") { left = (display.sizer.clientWidth - node.offsetWidth) / 2 }
        node.style.left = left + "px"
      }
      if (scroll)
        { scrollIntoView(this, left, top, left + node.offsetWidth, top + node.offsetHeight) }
    },

    triggerOnKeyDown: methodOp(onKeyDown),
    triggerOnKeyPress: methodOp(onKeyPress),
    triggerOnKeyUp: onKeyUp,

    execCommand: function(cmd) {
      if (commands.hasOwnProperty(cmd))
        { return commands[cmd].call(null, this) }
    },

    triggerElectric: methodOp(function(text) { triggerElectric(this, text) }),

    findPosH: function(from, amount, unit, visually) {
      var this$1 = this;

      var dir = 1
      if (amount < 0) { dir = -1; amount = -amount }
      var cur = clipPos(this.doc, from)
      for (var i = 0; i < amount; ++i) {
        cur = findPosH(this$1.doc, cur, dir, unit, visually)
        if (cur.hitSide) { break }
      }
      return cur
    },

    moveH: methodOp(function(dir, unit) {
      var this$1 = this;

      this.extendSelectionsBy(function (range$$1) {
        if (this$1.display.shift || this$1.doc.extend || range$$1.empty())
          { return findPosH(this$1.doc, range$$1.head, dir, unit, this$1.options.rtlMoveVisually) }
        else
          { return dir < 0 ? range$$1.from() : range$$1.to() }
      }, sel_move)
    }),

    deleteH: methodOp(function(dir, unit) {
      var sel = this.doc.sel, doc = this.doc
      if (sel.somethingSelected())
        { doc.replaceSelection("", null, "+delete") }
      else
        { deleteNearSelection(this, function (range$$1) {
          var other = findPosH(doc, range$$1.head, dir, unit, false)
          return dir < 0 ? {from: other, to: range$$1.head} : {from: range$$1.head, to: other}
        }) }
    }),

    findPosV: function(from, amount, unit, goalColumn) {
      var this$1 = this;

      var dir = 1, x = goalColumn
      if (amount < 0) { dir = -1; amount = -amount }
      var cur = clipPos(this.doc, from)
      for (var i = 0; i < amount; ++i) {
        var coords = cursorCoords(this$1, cur, "div")
        if (x == null) { x = coords.left }
        else { coords.left = x }
        cur = findPosV(this$1, coords, dir, unit)
        if (cur.hitSide) { break }
      }
      return cur
    },

    moveV: methodOp(function(dir, unit) {
      var this$1 = this;

      var doc = this.doc, goals = []
      var collapse = !this.display.shift && !doc.extend && doc.sel.somethingSelected()
      doc.extendSelectionsBy(function (range$$1) {
        if (collapse)
          { return dir < 0 ? range$$1.from() : range$$1.to() }
        var headPos = cursorCoords(this$1, range$$1.head, "div")
        if (range$$1.goalColumn != null) { headPos.left = range$$1.goalColumn }
        goals.push(headPos.left)
        var pos = findPosV(this$1, headPos, dir, unit)
        if (unit == "page" && range$$1 == doc.sel.primary())
          { addToScrollPos(this$1, null, charCoords(this$1, pos, "div").top - headPos.top) }
        return pos
      }, sel_move)
      if (goals.length) { for (var i = 0; i < doc.sel.ranges.length; i++)
        { doc.sel.ranges[i].goalColumn = goals[i] } }
    }),

    // Find the word at the given position (as returned by coordsChar).
    findWordAt: function(pos) {
      var doc = this.doc, line = getLine(doc, pos.line).text
      var start = pos.ch, end = pos.ch
      if (line) {
        var helper = this.getHelper(pos, "wordChars")
        if ((pos.xRel < 0 || end == line.length) && start) { --start; } else { ++end }
        var startChar = line.charAt(start)
        var check = isWordChar(startChar, helper)
          ? function (ch) { return isWordChar(ch, helper); }
          : /\s/.test(startChar) ? function (ch) { return /\s/.test(ch); }
          : function (ch) { return (!/\s/.test(ch) && !isWordChar(ch)); }
        while (start > 0 && check(line.charAt(start - 1))) { --start }
        while (end < line.length && check(line.charAt(end))) { ++end }
      }
      return new Range(Pos(pos.line, start), Pos(pos.line, end))
    },

    toggleOverwrite: function(value) {
      if (value != null && value == this.state.overwrite) { return }
      if (this.state.overwrite = !this.state.overwrite)
        { addClass(this.display.cursorDiv, "CodeMirror-overwrite") }
      else
        { rmClass(this.display.cursorDiv, "CodeMirror-overwrite") }

      signal(this, "overwriteToggle", this, this.state.overwrite)
    },
    hasFocus: function() { return this.display.input.getField() == activeElt() },
    isReadOnly: function() { return !!(this.options.readOnly || this.doc.cantEdit) },

    scrollTo: methodOp(function(x, y) {
      if (x != null || y != null) { resolveScrollToPos(this) }
      if (x != null) { this.curOp.scrollLeft = x }
      if (y != null) { this.curOp.scrollTop = y }
    }),
    getScrollInfo: function() {
      var scroller = this.display.scroller
      return {left: scroller.scrollLeft, top: scroller.scrollTop,
              height: scroller.scrollHeight - scrollGap(this) - this.display.barHeight,
              width: scroller.scrollWidth - scrollGap(this) - this.display.barWidth,
              clientHeight: displayHeight(this), clientWidth: displayWidth(this)}
    },

    scrollIntoView: methodOp(function(range$$1, margin) {
      if (range$$1 == null) {
        range$$1 = {from: this.doc.sel.primary().head, to: null}
        if (margin == null) { margin = this.options.cursorScrollMargin }
      } else if (typeof range$$1 == "number") {
        range$$1 = {from: Pos(range$$1, 0), to: null}
      } else if (range$$1.from == null) {
        range$$1 = {from: range$$1, to: null}
      }
      if (!range$$1.to) { range$$1.to = range$$1.from }
      range$$1.margin = margin || 0

      if (range$$1.from.line != null) {
        resolveScrollToPos(this)
        this.curOp.scrollToPos = range$$1
      } else {
        var sPos = calculateScrollPos(this, Math.min(range$$1.from.left, range$$1.to.left),
                                      Math.min(range$$1.from.top, range$$1.to.top) - range$$1.margin,
                                      Math.max(range$$1.from.right, range$$1.to.right),
                                      Math.max(range$$1.from.bottom, range$$1.to.bottom) + range$$1.margin)
        this.scrollTo(sPos.scrollLeft, sPos.scrollTop)
      }
    }),

    setSize: methodOp(function(width, height) {
      var this$1 = this;

      var interpret = function (val) { return typeof val == "number" || /^\d+$/.test(String(val)) ? val + "px" : val; }
      if (width != null) { this.display.wrapper.style.width = interpret(width) }
      if (height != null) { this.display.wrapper.style.height = interpret(height) }
      if (this.options.lineWrapping) { clearLineMeasurementCache(this) }
      var lineNo$$1 = this.display.viewFrom
      this.doc.iter(lineNo$$1, this.display.viewTo, function (line) {
        if (line.widgets) { for (var i = 0; i < line.widgets.length; i++)
          { if (line.widgets[i].noHScroll) { regLineChange(this$1, lineNo$$1, "widget"); break } } }
        ++lineNo$$1
      })
      this.curOp.forceUpdate = true
      signal(this, "refresh", this)
    }),

    operation: function(f){return runInOp(this, f)},

    refresh: methodOp(function() {
      var oldHeight = this.display.cachedTextHeight
      regChange(this)
      this.curOp.forceUpdate = true
      clearCaches(this)
      this.scrollTo(this.doc.scrollLeft, this.doc.scrollTop)
      updateGutterSpace(this)
      if (oldHeight == null || Math.abs(oldHeight - textHeight(this.display)) > .5)
        { estimateLineHeights(this) }
      signal(this, "refresh", this)
    }),

    swapDoc: methodOp(function(doc) {
      var old = this.doc
      old.cm = null
      attachDoc(this, doc)
      clearCaches(this)
      this.display.input.reset()
      this.scrollTo(doc.scrollLeft, doc.scrollTop)
      this.curOp.forceScroll = true
      signalLater(this, "swapDoc", this, old)
      return old
    }),

    getInputField: function(){return this.display.input.getField()},
    getWrapperElement: function(){return this.display.wrapper},
    getScrollerElement: function(){return this.display.scroller},
    getGutterElement: function(){return this.display.gutters}
  }
  eventMixin(CodeMirror)

  CodeMirror.registerHelper = function(type, name, value) {
    if (!helpers.hasOwnProperty(type)) { helpers[type] = CodeMirror[type] = {_global: []} }
    helpers[type][name] = value
  }
  CodeMirror.registerGlobalHelper = function(type, name, predicate, value) {
    CodeMirror.registerHelper(type, name, value)
    helpers[type]._global.push({pred: predicate, val: value})
  }
}

// Used for horizontal relative motion. Dir is -1 or 1 (left or
// right), unit can be "char", "column" (like char, but doesn't
// cross line boundaries), "word" (across next word), or "group" (to
// the start of next group of word or non-word-non-whitespace
// chars). The visually param controls whether, in right-to-left
// text, direction 1 means to move towards the next index in the
// string, or towards the character to the right of the current
// position. The resulting position will have a hitSide=true
// property if it reached the end of the document.
function findPosH(doc, pos, dir, unit, visually) {
  var line = pos.line, ch = pos.ch, origDir = dir
  var lineObj = getLine(doc, line)
  function findNextLine() {
    var l = line + dir
    if (l < doc.first || l >= doc.first + doc.size) { return false }
    line = l
    return lineObj = getLine(doc, l)
  }
  function moveOnce(boundToLine) {
    var next = (visually ? moveVisually : moveLogically)(lineObj, ch, dir, true)
    if (next == null) {
      if (!boundToLine && findNextLine()) {
        if (visually) { ch = (dir < 0 ? lineRight : lineLeft)(lineObj) }
        else { ch = dir < 0 ? lineObj.text.length : 0 }
      } else { return false }
    } else { ch = next }
    return true
  }

  if (unit == "char") {
    moveOnce()
  } else if (unit == "column") {
    moveOnce(true)
  } else if (unit == "word" || unit == "group") {
    var sawType = null, group = unit == "group"
    var helper = doc.cm && doc.cm.getHelper(pos, "wordChars")
    for (var first = true;; first = false) {
      if (dir < 0 && !moveOnce(!first)) { break }
      var cur = lineObj.text.charAt(ch) || "\n"
      var type = isWordChar(cur, helper) ? "w"
        : group && cur == "\n" ? "n"
        : !group || /\s/.test(cur) ? null
        : "p"
      if (group && !first && !type) { type = "s" }
      if (sawType && sawType != type) {
        if (dir < 0) {dir = 1; moveOnce()}
        break
      }

      if (type) { sawType = type }
      if (dir > 0 && !moveOnce(!first)) { break }
    }
  }
  var result = skipAtomic(doc, Pos(line, ch), pos, origDir, true)
  if (!cmp(pos, result)) { result.hitSide = true }
  return result
}

// For relative vertical movement. Dir may be -1 or 1. Unit can be
// "page" or "line". The resulting position will have a hitSide=true
// property if it reached the end of the document.
function findPosV(cm, pos, dir, unit) {
  var doc = cm.doc, x = pos.left, y
  if (unit == "page") {
    var pageSize = Math.min(cm.display.wrapper.clientHeight, window.innerHeight || document.documentElement.clientHeight)
    var moveAmount = Math.max(pageSize - .5 * textHeight(cm.display), 3)
    y = (dir > 0 ? pos.bottom : pos.top) + dir * moveAmount

  } else if (unit == "line") {
    y = dir > 0 ? pos.bottom + 3 : pos.top - 3
  }
  var target
  for (;;) {
    target = coordsChar(cm, x, y)
    if (!target.outside) { break }
    if (dir < 0 ? y <= 0 : y >= doc.height) { target.hitSide = true; break }
    y += dir * 5
  }
  return target
}

// CONTENTEDITABLE INPUT STYLE

function ContentEditableInput(cm) {
  this.cm = cm
  this.lastAnchorNode = this.lastAnchorOffset = this.lastFocusNode = this.lastFocusOffset = null
  this.polling = new Delayed()
  this.gracePeriod = false
}

ContentEditableInput.prototype = copyObj({
  init: function(display) {
    var input = this, cm = input.cm
    var div = input.div = display.lineDiv
    disableBrowserMagic(div, cm.options.spellcheck)

    on(div, "paste", function (e) {
      if (signalDOMEvent(cm, e) || handlePaste(e, cm)) { return }
      // IE doesn't fire input events, so we schedule a read for the pasted content in this way
      if (ie_version <= 11) { setTimeout(operation(cm, function () {
        if (!input.pollContent()) { regChange(cm) }
      }), 20) }
    })

    on(div, "compositionstart", function (e) {
      var data = e.data
      input.composing = {sel: cm.doc.sel, data: data, startData: data}
      if (!data) { return }
      var prim = cm.doc.sel.primary()
      var line = cm.getLine(prim.head.line)
      var found = line.indexOf(data, Math.max(0, prim.head.ch - data.length))
      if (found > -1 && found <= prim.head.ch)
        { input.composing.sel = simpleSelection(Pos(prim.head.line, found),
                                              Pos(prim.head.line, found + data.length)) }
    })
    on(div, "compositionupdate", function (e) { return input.composing.data = e.data; })
    on(div, "compositionend", function (e) {
      var ours = input.composing
      if (!ours) { return }
      if (e.data != ours.startData && !/\u200b/.test(e.data))
        { ours.data = e.data }
      // Need a small delay to prevent other code (input event,
      // selection polling) from doing damage when fired right after
      // compositionend.
      setTimeout(function () {
        if (!ours.handled)
          { input.applyComposition(ours) }
        if (input.composing == ours)
          { input.composing = null }
      }, 50)
    })

    on(div, "touchstart", function () { return input.forceCompositionEnd(); })

    on(div, "input", function () {
      if (input.composing) { return }
      if (cm.isReadOnly() || !input.pollContent())
        { runInOp(input.cm, function () { return regChange(cm); }) }
    })

    function onCopyCut(e) {
      if (signalDOMEvent(cm, e)) { return }
      if (cm.somethingSelected()) {
        setLastCopied({lineWise: false, text: cm.getSelections()})
        if (e.type == "cut") { cm.replaceSelection("", null, "cut") }
      } else if (!cm.options.lineWiseCopyCut) {
        return
      } else {
        var ranges = copyableRanges(cm)
        setLastCopied({lineWise: true, text: ranges.text})
        if (e.type == "cut") {
          cm.operation(function () {
            cm.setSelections(ranges.ranges, 0, sel_dontScroll)
            cm.replaceSelection("", null, "cut")
          })
        }
      }
      if (e.clipboardData) {
        e.clipboardData.clearData()
        var content = lastCopied.text.join("\n")
        // iOS exposes the clipboard API, but seems to discard content inserted into it
        e.clipboardData.setData("Text", content)
        if (e.clipboardData.getData("Text") == content) {
          e.preventDefault()
          return
        }
      }
      // Old-fashioned briefly-focus-a-textarea hack
      var kludge = hiddenTextarea(), te = kludge.firstChild
      cm.display.lineSpace.insertBefore(kludge, cm.display.lineSpace.firstChild)
      te.value = lastCopied.text.join("\n")
      var hadFocus = document.activeElement
      selectInput(te)
      setTimeout(function () {
        cm.display.lineSpace.removeChild(kludge)
        hadFocus.focus()
        if (hadFocus == div) { input.showPrimarySelection() }
      }, 50)
    }
    on(div, "copy", onCopyCut)
    on(div, "cut", onCopyCut)
  },

  prepareSelection: function() {
    var result = prepareSelection(this.cm, false)
    result.focus = this.cm.state.focused
    return result
  },

  showSelection: function(info, takeFocus) {
    if (!info || !this.cm.display.view.length) { return }
    if (info.focus || takeFocus) { this.showPrimarySelection() }
    this.showMultipleSelections(info)
  },

  showPrimarySelection: function() {
    var sel = window.getSelection(), prim = this.cm.doc.sel.primary()
    var curAnchor = domToPos(this.cm, sel.anchorNode, sel.anchorOffset)
    var curFocus = domToPos(this.cm, sel.focusNode, sel.focusOffset)
    if (curAnchor && !curAnchor.bad && curFocus && !curFocus.bad &&
        cmp(minPos(curAnchor, curFocus), prim.from()) == 0 &&
        cmp(maxPos(curAnchor, curFocus), prim.to()) == 0)
      { return }

    var start = posToDOM(this.cm, prim.from())
    var end = posToDOM(this.cm, prim.to())
    if (!start && !end) { return }

    var view = this.cm.display.view
    var old = sel.rangeCount && sel.getRangeAt(0)
    if (!start) {
      start = {node: view[0].measure.map[2], offset: 0}
    } else if (!end) { // FIXME dangerously hacky
      var measure = view[view.length - 1].measure
      var map$$1 = measure.maps ? measure.maps[measure.maps.length - 1] : measure.map
      end = {node: map$$1[map$$1.length - 1], offset: map$$1[map$$1.length - 2] - map$$1[map$$1.length - 3]}
    }

    var rng
    try { rng = range(start.node, start.offset, end.offset, end.node) }
    catch(e) {} // Our model of the DOM might be outdated, in which case the range we try to set can be impossible
    if (rng) {
      if (!gecko && this.cm.state.focused) {
        sel.collapse(start.node, start.offset)
        if (!rng.collapsed) {
          sel.removeAllRanges()
          sel.addRange(rng)
        }
      } else {
        sel.removeAllRanges()
        sel.addRange(rng)
      }
      if (old && sel.anchorNode == null) { sel.addRange(old) }
      else if (gecko) { this.startGracePeriod() }
    }
    this.rememberSelection()
  },

  startGracePeriod: function() {
    var this$1 = this;

    clearTimeout(this.gracePeriod)
    this.gracePeriod = setTimeout(function () {
      this$1.gracePeriod = false
      if (this$1.selectionChanged())
        { this$1.cm.operation(function () { return this$1.cm.curOp.selectionChanged = true; }) }
    }, 20)
  },

  showMultipleSelections: function(info) {
    removeChildrenAndAdd(this.cm.display.cursorDiv, info.cursors)
    removeChildrenAndAdd(this.cm.display.selectionDiv, info.selection)
  },

  rememberSelection: function() {
    var sel = window.getSelection()
    this.lastAnchorNode = sel.anchorNode; this.lastAnchorOffset = sel.anchorOffset
    this.lastFocusNode = sel.focusNode; this.lastFocusOffset = sel.focusOffset
  },

  selectionInEditor: function() {
    var sel = window.getSelection()
    if (!sel.rangeCount) { return false }
    var node = sel.getRangeAt(0).commonAncestorContainer
    return contains(this.div, node)
  },

  focus: function() {
    if (this.cm.options.readOnly != "nocursor") { this.div.focus() }
  },
  blur: function() { this.div.blur() },
  getField: function() { return this.div },

  supportsTouch: function() { return true },

  receivedFocus: function() {
    var input = this
    if (this.selectionInEditor())
      { this.pollSelection() }
    else
      { runInOp(this.cm, function () { return input.cm.curOp.selectionChanged = true; }) }

    function poll() {
      if (input.cm.state.focused) {
        input.pollSelection()
        input.polling.set(input.cm.options.pollInterval, poll)
      }
    }
    this.polling.set(this.cm.options.pollInterval, poll)
  },

  selectionChanged: function() {
    var sel = window.getSelection()
    return sel.anchorNode != this.lastAnchorNode || sel.anchorOffset != this.lastAnchorOffset ||
      sel.focusNode != this.lastFocusNode || sel.focusOffset != this.lastFocusOffset
  },

  pollSelection: function() {
    if (!this.composing && !this.gracePeriod && this.selectionChanged()) {
      var sel = window.getSelection(), cm = this.cm
      this.rememberSelection()
      var anchor = domToPos(cm, sel.anchorNode, sel.anchorOffset)
      var head = domToPos(cm, sel.focusNode, sel.focusOffset)
      if (anchor && head) { runInOp(cm, function () {
        setSelection(cm.doc, simpleSelection(anchor, head), sel_dontScroll)
        if (anchor.bad || head.bad) { cm.curOp.selectionChanged = true }
      }) }
    }
  },

  pollContent: function() {
    var cm = this.cm, display = cm.display, sel = cm.doc.sel.primary()
    var from = sel.from(), to = sel.to()
    if (from.line < display.viewFrom || to.line > display.viewTo - 1) { return false }

    var fromIndex, fromLine, fromNode
    if (from.line == display.viewFrom || (fromIndex = findViewIndex(cm, from.line)) == 0) {
      fromLine = lineNo(display.view[0].line)
      fromNode = display.view[0].node
    } else {
      fromLine = lineNo(display.view[fromIndex].line)
      fromNode = display.view[fromIndex - 1].node.nextSibling
    }
    var toIndex = findViewIndex(cm, to.line)
    var toLine, toNode
    if (toIndex == display.view.length - 1) {
      toLine = display.viewTo - 1
      toNode = display.lineDiv.lastChild
    } else {
      toLine = lineNo(display.view[toIndex + 1].line) - 1
      toNode = display.view[toIndex + 1].node.previousSibling
    }

    var newText = cm.doc.splitLines(domTextBetween(cm, fromNode, toNode, fromLine, toLine))
    var oldText = getBetween(cm.doc, Pos(fromLine, 0), Pos(toLine, getLine(cm.doc, toLine).text.length))
    while (newText.length > 1 && oldText.length > 1) {
      if (lst(newText) == lst(oldText)) { newText.pop(); oldText.pop(); toLine-- }
      else if (newText[0] == oldText[0]) { newText.shift(); oldText.shift(); fromLine++ }
      else { break }
    }

    var cutFront = 0, cutEnd = 0
    var newTop = newText[0], oldTop = oldText[0], maxCutFront = Math.min(newTop.length, oldTop.length)
    while (cutFront < maxCutFront && newTop.charCodeAt(cutFront) == oldTop.charCodeAt(cutFront))
      { ++cutFront }
    var newBot = lst(newText), oldBot = lst(oldText)
    var maxCutEnd = Math.min(newBot.length - (newText.length == 1 ? cutFront : 0),
                             oldBot.length - (oldText.length == 1 ? cutFront : 0))
    while (cutEnd < maxCutEnd &&
           newBot.charCodeAt(newBot.length - cutEnd - 1) == oldBot.charCodeAt(oldBot.length - cutEnd - 1))
      { ++cutEnd }

    newText[newText.length - 1] = newBot.slice(0, newBot.length - cutEnd)
    newText[0] = newText[0].slice(cutFront)

    var chFrom = Pos(fromLine, cutFront)
    var chTo = Pos(toLine, oldText.length ? lst(oldText).length - cutEnd : 0)
    if (newText.length > 1 || newText[0] || cmp(chFrom, chTo)) {
      replaceRange(cm.doc, newText, chFrom, chTo, "+input")
      return true
    }
  },

  ensurePolled: function() {
    this.forceCompositionEnd()
  },
  reset: function() {
    this.forceCompositionEnd()
  },
  forceCompositionEnd: function() {
    if (!this.composing || this.composing.handled) { return }
    this.applyComposition(this.composing)
    this.composing.handled = true
    this.div.blur()
    this.div.focus()
  },
  applyComposition: function(composing) {
    if (this.cm.isReadOnly())
      { operation(this.cm, regChange)(this.cm) }
    else if (composing.data && composing.data != composing.startData)
      { operation(this.cm, applyTextInput)(this.cm, composing.data, 0, composing.sel) }
  },

  setUneditable: function(node) {
    node.contentEditable = "false"
  },

  onKeyPress: function(e) {
    e.preventDefault()
    if (!this.cm.isReadOnly())
      { operation(this.cm, applyTextInput)(this.cm, String.fromCharCode(e.charCode == null ? e.keyCode : e.charCode), 0) }
  },

  readOnlyChanged: function(val) {
    this.div.contentEditable = String(val != "nocursor")
  },

  onContextMenu: nothing,
  resetPosition: nothing,

  needsContentAttribute: true
  }, ContentEditableInput.prototype)

function posToDOM(cm, pos) {
  var view = findViewForLine(cm, pos.line)
  if (!view || view.hidden) { return null }
  var line = getLine(cm.doc, pos.line)
  var info = mapFromLineView(view, line, pos.line)

  var order = getOrder(line), side = "left"
  if (order) {
    var partPos = getBidiPartAt(order, pos.ch)
    side = partPos % 2 ? "right" : "left"
  }
  var result = nodeAndOffsetInLineMap(info.map, pos.ch, side)
  result.offset = result.collapse == "right" ? result.end : result.start
  return result
}

function badPos(pos, bad) { if (bad) { pos.bad = true; } return pos }

function domTextBetween(cm, from, to, fromLine, toLine) {
  var text = "", closing = false, lineSep = cm.doc.lineSeparator()
  function recognizeMarker(id) { return function (marker) { return marker.id == id; } }
  function walk(node) {
    if (node.nodeType == 1) {
      var cmText = node.getAttribute("cm-text")
      if (cmText != null) {
        if (cmText == "") { cmText = node.textContent.replace(/\u200b/g, "") }
        text += cmText
        return
      }
      var markerID = node.getAttribute("cm-marker"), range$$1
      if (markerID) {
        var found = cm.findMarks(Pos(fromLine, 0), Pos(toLine + 1, 0), recognizeMarker(+markerID))
        if (found.length && (range$$1 = found[0].find()))
          { text += getBetween(cm.doc, range$$1.from, range$$1.to).join(lineSep) }
        return
      }
      if (node.getAttribute("contenteditable") == "false") { return }
      for (var i = 0; i < node.childNodes.length; i++)
        { walk(node.childNodes[i]) }
      if (/^(pre|div|p)$/i.test(node.nodeName))
        { closing = true }
    } else if (node.nodeType == 3) {
      var val = node.nodeValue
      if (!val) { return }
      if (closing) {
        text += lineSep
        closing = false
      }
      text += val
    }
  }
  for (;;) {
    walk(from)
    if (from == to) { break }
    from = from.nextSibling
  }
  return text
}

function domToPos(cm, node, offset) {
  var lineNode
  if (node == cm.display.lineDiv) {
    lineNode = cm.display.lineDiv.childNodes[offset]
    if (!lineNode) { return badPos(cm.clipPos(Pos(cm.display.viewTo - 1)), true) }
    node = null; offset = 0
  } else {
    for (lineNode = node;; lineNode = lineNode.parentNode) {
      if (!lineNode || lineNode == cm.display.lineDiv) { return null }
      if (lineNode.parentNode && lineNode.parentNode == cm.display.lineDiv) { break }
    }
  }
  for (var i = 0; i < cm.display.view.length; i++) {
    var lineView = cm.display.view[i]
    if (lineView.node == lineNode)
      { return locateNodeInLineView(lineView, node, offset) }
  }
}

function locateNodeInLineView(lineView, node, offset) {
  var wrapper = lineView.text.firstChild, bad = false
  if (!node || !contains(wrapper, node)) { return badPos(Pos(lineNo(lineView.line), 0), true) }
  if (node == wrapper) {
    bad = true
    node = wrapper.childNodes[offset]
    offset = 0
    if (!node) {
      var line = lineView.rest ? lst(lineView.rest) : lineView.line
      return badPos(Pos(lineNo(line), line.text.length), bad)
    }
  }

  var textNode = node.nodeType == 3 ? node : null, topNode = node
  if (!textNode && node.childNodes.length == 1 && node.firstChild.nodeType == 3) {
    textNode = node.firstChild
    if (offset) { offset = textNode.nodeValue.length }
  }
  while (topNode.parentNode != wrapper) { topNode = topNode.parentNode }
  var measure = lineView.measure, maps = measure.maps

  function find(textNode, topNode, offset) {
    for (var i = -1; i < (maps ? maps.length : 0); i++) {
      var map$$1 = i < 0 ? measure.map : maps[i]
      for (var j = 0; j < map$$1.length; j += 3) {
        var curNode = map$$1[j + 2]
        if (curNode == textNode || curNode == topNode) {
          var line = lineNo(i < 0 ? lineView.line : lineView.rest[i])
          var ch = map$$1[j] + offset
          if (offset < 0 || curNode != textNode) { ch = map$$1[j + (offset ? 1 : 0)] }
          return Pos(line, ch)
        }
      }
    }
  }
  var found = find(textNode, topNode, offset)
  if (found) { return badPos(found, bad) }

  // FIXME this is all really shaky. might handle the few cases it needs to handle, but likely to cause problems
  for (var after = topNode.nextSibling, dist = textNode ? textNode.nodeValue.length - offset : 0; after; after = after.nextSibling) {
    found = find(after, after.firstChild, 0)
    if (found)
      { return badPos(Pos(found.line, found.ch - dist), bad) }
    else
      { dist += after.textContent.length }
  }
  for (var before = topNode.previousSibling, dist$1 = offset; before; before = before.previousSibling) {
    found = find(before, before.firstChild, -1)
    if (found)
      { return badPos(Pos(found.line, found.ch + dist$1), bad) }
    else
      { dist$1 += before.textContent.length }
  }
}

// TEXTAREA INPUT STYLE

function TextareaInput(cm) {
  this.cm = cm
  // See input.poll and input.reset
  this.prevInput = ""

  // Flag that indicates whether we expect input to appear real soon
  // now (after some event like 'keypress' or 'input') and are
  // polling intensively.
  this.pollingFast = false
  // Self-resetting timeout for the poller
  this.polling = new Delayed()
  // Tracks when input.reset has punted to just putting a short
  // string into the textarea instead of the full selection.
  this.inaccurateSelection = false
  // Used to work around IE issue with selection being forgotten when focus moves away from textarea
  this.hasSelection = false
  this.composing = null
}

TextareaInput.prototype = copyObj({
  init: function(display) {
    var this$1 = this;

    var input = this, cm = this.cm

    // Wraps and hides input textarea
    var div = this.wrapper = hiddenTextarea()
    // The semihidden textarea that is focused when the editor is
    // focused, and receives input.
    var te = this.textarea = div.firstChild
    display.wrapper.insertBefore(div, display.wrapper.firstChild)

    // Needed to hide big blue blinking cursor on Mobile Safari (doesn't seem to work in iOS 8 anymore)
    if (ios) { te.style.width = "0px" }

    on(te, "input", function () {
      if (ie && ie_version >= 9 && this$1.hasSelection) { this$1.hasSelection = null }
      input.poll()
    })

    on(te, "paste", function (e) {
      if (signalDOMEvent(cm, e) || handlePaste(e, cm)) { return }

      cm.state.pasteIncoming = true
      input.fastPoll()
    })

    function prepareCopyCut(e) {
      if (signalDOMEvent(cm, e)) { return }
      if (cm.somethingSelected()) {
        setLastCopied({lineWise: false, text: cm.getSelections()})
        if (input.inaccurateSelection) {
          input.prevInput = ""
          input.inaccurateSelection = false
          te.value = lastCopied.text.join("\n")
          selectInput(te)
        }
      } else if (!cm.options.lineWiseCopyCut) {
        return
      } else {
        var ranges = copyableRanges(cm)
        setLastCopied({lineWise: true, text: ranges.text})
        if (e.type == "cut") {
          cm.setSelections(ranges.ranges, null, sel_dontScroll)
        } else {
          input.prevInput = ""
          te.value = ranges.text.join("\n")
          selectInput(te)
        }
      }
      if (e.type == "cut") { cm.state.cutIncoming = true }
    }
    on(te, "cut", prepareCopyCut)
    on(te, "copy", prepareCopyCut)

    on(display.scroller, "paste", function (e) {
      if (eventInWidget(display, e) || signalDOMEvent(cm, e)) { return }
      cm.state.pasteIncoming = true
      input.focus()
    })

    // Prevent normal selection in the editor (we handle our own)
    on(display.lineSpace, "selectstart", function (e) {
      if (!eventInWidget(display, e)) { e_preventDefault(e) }
    })

    on(te, "compositionstart", function () {
      var start = cm.getCursor("from")
      if (input.composing) { input.composing.range.clear() }
      input.composing = {
        start: start,
        range: cm.markText(start, cm.getCursor("to"), {className: "CodeMirror-composing"})
      }
    })
    on(te, "compositionend", function () {
      if (input.composing) {
        input.poll()
        input.composing.range.clear()
        input.composing = null
      }
    })
  },

  prepareSelection: function() {
    // Redraw the selection and/or cursor
    var cm = this.cm, display = cm.display, doc = cm.doc
    var result = prepareSelection(cm)

    // Move the hidden textarea near the cursor to prevent scrolling artifacts
    if (cm.options.moveInputWithCursor) {
      var headPos = cursorCoords(cm, doc.sel.primary().head, "div")
      var wrapOff = display.wrapper.getBoundingClientRect(), lineOff = display.lineDiv.getBoundingClientRect()
      result.teTop = Math.max(0, Math.min(display.wrapper.clientHeight - 10,
                                          headPos.top + lineOff.top - wrapOff.top))
      result.teLeft = Math.max(0, Math.min(display.wrapper.clientWidth - 10,
                                           headPos.left + lineOff.left - wrapOff.left))
    }

    return result
  },

  showSelection: function(drawn) {
    var cm = this.cm, display = cm.display
    removeChildrenAndAdd(display.cursorDiv, drawn.cursors)
    removeChildrenAndAdd(display.selectionDiv, drawn.selection)
    if (drawn.teTop != null) {
      this.wrapper.style.top = drawn.teTop + "px"
      this.wrapper.style.left = drawn.teLeft + "px"
    }
  },

  // Reset the input to correspond to the selection (or to be empty,
  // when not typing and nothing is selected)
  reset: function(typing) {
    if (this.contextMenuPending) { return }
    var minimal, selected, cm = this.cm, doc = cm.doc
    if (cm.somethingSelected()) {
      this.prevInput = ""
      var range$$1 = doc.sel.primary()
      minimal = hasCopyEvent &&
        (range$$1.to().line - range$$1.from().line > 100 || (selected = cm.getSelection()).length > 1000)
      var content = minimal ? "-" : selected || cm.getSelection()
      this.textarea.value = content
      if (cm.state.focused) { selectInput(this.textarea) }
      if (ie && ie_version >= 9) { this.hasSelection = content }
    } else if (!typing) {
      this.prevInput = this.textarea.value = ""
      if (ie && ie_version >= 9) { this.hasSelection = null }
    }
    this.inaccurateSelection = minimal
  },

  getField: function() { return this.textarea },

  supportsTouch: function() { return false },

  focus: function() {
    if (this.cm.options.readOnly != "nocursor" && (!mobile || activeElt() != this.textarea)) {
      try { this.textarea.focus() }
      catch (e) {} // IE8 will throw if the textarea is display: none or not in DOM
    }
  },

  blur: function() { this.textarea.blur() },

  resetPosition: function() {
    this.wrapper.style.top = this.wrapper.style.left = 0
  },

  receivedFocus: function() { this.slowPoll() },

  // Poll for input changes, using the normal rate of polling. This
  // runs as long as the editor is focused.
  slowPoll: function() {
    var this$1 = this;

    if (this.pollingFast) { return }
    this.polling.set(this.cm.options.pollInterval, function () {
      this$1.poll()
      if (this$1.cm.state.focused) { this$1.slowPoll() }
    })
  },

  // When an event has just come in that is likely to add or change
  // something in the input textarea, we poll faster, to ensure that
  // the change appears on the screen quickly.
  fastPoll: function() {
    var missed = false, input = this
    input.pollingFast = true
    function p() {
      var changed = input.poll()
      if (!changed && !missed) {missed = true; input.polling.set(60, p)}
      else {input.pollingFast = false; input.slowPoll()}
    }
    input.polling.set(20, p)
  },

  // Read input from the textarea, and update the document to match.
  // When something is selected, it is present in the textarea, and
  // selected (unless it is huge, in which case a placeholder is
  // used). When nothing is selected, the cursor sits after previously
  // seen text (can be empty), which is stored in prevInput (we must
  // not reset the textarea when typing, because that breaks IME).
  poll: function() {
    var this$1 = this;

    var cm = this.cm, input = this.textarea, prevInput = this.prevInput
    // Since this is called a *lot*, try to bail out as cheaply as
    // possible when it is clear that nothing happened. hasSelection
    // will be the case when there is a lot of text in the textarea,
    // in which case reading its value would be expensive.
    if (this.contextMenuPending || !cm.state.focused ||
        (hasSelection(input) && !prevInput && !this.composing) ||
        cm.isReadOnly() || cm.options.disableInput || cm.state.keySeq)
      { return false }

    var text = input.value
    // If nothing changed, bail.
    if (text == prevInput && !cm.somethingSelected()) { return false }
    // Work around nonsensical selection resetting in IE9/10, and
    // inexplicable appearance of private area unicode characters on
    // some key combos in Mac (#2689).
    if (ie && ie_version >= 9 && this.hasSelection === text ||
        mac && /[\uf700-\uf7ff]/.test(text)) {
      cm.display.input.reset()
      return false
    }

    if (cm.doc.sel == cm.display.selForContextMenu) {
      var first = text.charCodeAt(0)
      if (first == 0x200b && !prevInput) { prevInput = "\u200b" }
      if (first == 0x21da) { this.reset(); return this.cm.execCommand("undo") }
    }
    // Find the part of the input that is actually new
    var same = 0, l = Math.min(prevInput.length, text.length)
    while (same < l && prevInput.charCodeAt(same) == text.charCodeAt(same)) { ++same }

    runInOp(cm, function () {
      applyTextInput(cm, text.slice(same), prevInput.length - same,
                     null, this$1.composing ? "*compose" : null)

      // Don't leave long text in the textarea, since it makes further polling slow
      if (text.length > 1000 || text.indexOf("\n") > -1) { input.value = this$1.prevInput = "" }
      else { this$1.prevInput = text }

      if (this$1.composing) {
        this$1.composing.range.clear()
        this$1.composing.range = cm.markText(this$1.composing.start, cm.getCursor("to"),
                                           {className: "CodeMirror-composing"})
      }
    })
    return true
  },

  ensurePolled: function() {
    if (this.pollingFast && this.poll()) { this.pollingFast = false }
  },

  onKeyPress: function() {
    if (ie && ie_version >= 9) { this.hasSelection = null }
    this.fastPoll()
  },

  onContextMenu: function(e) {
    var input = this, cm = input.cm, display = cm.display, te = input.textarea
    var pos = posFromMouse(cm, e), scrollPos = display.scroller.scrollTop
    if (!pos || presto) { return } // Opera is difficult.

    // Reset the current text selection only if the click is done outside of the selection
    // and 'resetSelectionOnContextMenu' option is true.
    var reset = cm.options.resetSelectionOnContextMenu
    if (reset && cm.doc.sel.contains(pos) == -1)
      { operation(cm, setSelection)(cm.doc, simpleSelection(pos), sel_dontScroll) }

    var oldCSS = te.style.cssText, oldWrapperCSS = input.wrapper.style.cssText
    input.wrapper.style.cssText = "position: absolute"
    var wrapperBox = input.wrapper.getBoundingClientRect()
    te.style.cssText = "position: absolute; width: 30px; height: 30px;\n      top: " + (e.clientY - wrapperBox.top - 5) + "px; left: " + (e.clientX - wrapperBox.left - 5) + "px;\n      z-index: 1000; background: " + (ie ? "rgba(255, 255, 255, .05)" : "transparent") + ";\n      outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);"
    var oldScrollY
    if (webkit) { oldScrollY = window.scrollY } // Work around Chrome issue (#2712)
    display.input.focus()
    if (webkit) { window.scrollTo(null, oldScrollY) }
    display.input.reset()
    // Adds "Select all" to context menu in FF
    if (!cm.somethingSelected()) { te.value = input.prevInput = " " }
    input.contextMenuPending = true
    display.selForContextMenu = cm.doc.sel
    clearTimeout(display.detectingSelectAll)

    // Select-all will be greyed out if there's nothing to select, so
    // this adds a zero-width space so that we can later check whether
    // it got selected.
    function prepareSelectAllHack() {
      if (te.selectionStart != null) {
        var selected = cm.somethingSelected()
        var extval = "\u200b" + (selected ? te.value : "")
        te.value = "\u21da" // Used to catch context-menu undo
        te.value = extval
        input.prevInput = selected ? "" : "\u200b"
        te.selectionStart = 1; te.selectionEnd = extval.length
        // Re-set this, in case some other handler touched the
        // selection in the meantime.
        display.selForContextMenu = cm.doc.sel
      }
    }
    function rehide() {
      input.contextMenuPending = false
      input.wrapper.style.cssText = oldWrapperCSS
      te.style.cssText = oldCSS
      if (ie && ie_version < 9) { display.scrollbars.setScrollTop(display.scroller.scrollTop = scrollPos) }

      // Try to detect the user choosing select-all
      if (te.selectionStart != null) {
        if (!ie || (ie && ie_version < 9)) { prepareSelectAllHack() }
        var i = 0, poll = function () {
          if (display.selForContextMenu == cm.doc.sel && te.selectionStart == 0 &&
              te.selectionEnd > 0 && input.prevInput == "\u200b")
            { operation(cm, selectAll)(cm) }
          else if (i++ < 10) { display.detectingSelectAll = setTimeout(poll, 500) }
          else { display.input.reset() }
        }
        display.detectingSelectAll = setTimeout(poll, 200)
      }
    }

    if (ie && ie_version >= 9) { prepareSelectAllHack() }
    if (captureRightClick) {
      e_stop(e)
      var mouseup = function () {
        off(window, "mouseup", mouseup)
        setTimeout(rehide, 20)
      }
      on(window, "mouseup", mouseup)
    } else {
      setTimeout(rehide, 50)
    }
  },

  readOnlyChanged: function(val) {
    if (!val) { this.reset() }
  },

  setUneditable: nothing,

  needsContentAttribute: false
}, TextareaInput.prototype)

function fromTextArea(textarea, options) {
  options = options ? copyObj(options) : {}
  options.value = textarea.value
  if (!options.tabindex && textarea.tabIndex)
    { options.tabindex = textarea.tabIndex }
  if (!options.placeholder && textarea.placeholder)
    { options.placeholder = textarea.placeholder }
  // Set autofocus to true if this textarea is focused, or if it has
  // autofocus and no other element is focused.
  if (options.autofocus == null) {
    var hasFocus = activeElt()
    options.autofocus = hasFocus == textarea ||
      textarea.getAttribute("autofocus") != null && hasFocus == document.body
  }

  function save() {textarea.value = cm.getValue()}

  var realSubmit
  if (textarea.form) {
    on(textarea.form, "submit", save)
    // Deplorable hack to make the submit method do the right thing.
    if (!options.leaveSubmitMethodAlone) {
      var form = textarea.form
      realSubmit = form.submit
      try {
        var wrappedSubmit = form.submit = function () {
          save()
          form.submit = realSubmit
          form.submit()
          form.submit = wrappedSubmit
        }
      } catch(e) {}
    }
  }

  options.finishInit = function (cm) {
    cm.save = save
    cm.getTextArea = function () { return textarea; }
    cm.toTextArea = function () {
      cm.toTextArea = isNaN // Prevent this from being ran twice
      save()
      textarea.parentNode.removeChild(cm.getWrapperElement())
      textarea.style.display = ""
      if (textarea.form) {
        off(textarea.form, "submit", save)
        if (typeof textarea.form.submit == "function")
          { textarea.form.submit = realSubmit }
      }
    }
  }

  textarea.style.display = "none"
  var cm = CodeMirror$1(function (node) { return textarea.parentNode.insertBefore(node, textarea.nextSibling); },
    options)
  return cm
}

function addLegacyProps(CodeMirror) {
  CodeMirror.off = off
  CodeMirror.on = on
  CodeMirror.wheelEventPixels = wheelEventPixels
  CodeMirror.Doc = Doc
  CodeMirror.splitLines = splitLinesAuto
  CodeMirror.countColumn = countColumn
  CodeMirror.findColumn = findColumn
  CodeMirror.isWordChar = isWordCharBasic
  CodeMirror.Pass = Pass
  CodeMirror.signal = signal
  CodeMirror.Line = Line
  CodeMirror.changeEnd = changeEnd
  CodeMirror.scrollbarModel = scrollbarModel
  CodeMirror.Pos = Pos
  CodeMirror.cmpPos = cmp
  CodeMirror.modes = modes
  CodeMirror.mimeModes = mimeModes
  CodeMirror.resolveMode = resolveMode
  CodeMirror.getMode = getMode
  CodeMirror.modeExtensions = modeExtensions
  CodeMirror.extendMode = extendMode
  CodeMirror.copyState = copyState
  CodeMirror.startState = startState
  CodeMirror.innerMode = innerMode
  CodeMirror.commands = commands
  CodeMirror.keyMap = keyMap
  CodeMirror.keyName = keyName
  CodeMirror.isModifierKey = isModifierKey
  CodeMirror.lookupKey = lookupKey
  CodeMirror.normalizeKeyMap = normalizeKeyMap
  CodeMirror.StringStream = StringStream
  CodeMirror.SharedTextMarker = SharedTextMarker
  CodeMirror.TextMarker = TextMarker
  CodeMirror.LineWidget = LineWidget
  CodeMirror.e_preventDefault = e_preventDefault
  CodeMirror.e_stopPropagation = e_stopPropagation
  CodeMirror.e_stop = e_stop
  CodeMirror.addClass = addClass
  CodeMirror.contains = contains
  CodeMirror.rmClass = rmClass
  CodeMirror.keyNames = keyNames
}

// EDITOR CONSTRUCTOR

defineOptions(CodeMirror$1)

addEditorMethods(CodeMirror$1)

// Set up methods on CodeMirror's prototype to redirect to the editor's document.
var dontDelegate = "iter insert remove copy getEditor constructor".split(" ")
for (var prop in Doc.prototype) { if (Doc.prototype.hasOwnProperty(prop) && indexOf(dontDelegate, prop) < 0)
  { CodeMirror$1.prototype[prop] = (function(method) {
    return function() {return method.apply(this.doc, arguments)}
  })(Doc.prototype[prop]) } }

eventMixin(Doc)

// INPUT HANDLING

CodeMirror$1.inputStyles = {"textarea": TextareaInput, "contenteditable": ContentEditableInput}

// MODE DEFINITION AND QUERYING

// Extra arguments are stored as the mode's dependencies, which is
// used by (legacy) mechanisms like loadmode.js to automatically
// load a mode. (Preferred mechanism is the require/define calls.)
CodeMirror$1.defineMode = function(name/*, mode, …*/) {
  if (!CodeMirror$1.defaults.mode && name != "null") { CodeMirror$1.defaults.mode = name }
  defineMode.apply(this, arguments)
}

CodeMirror$1.defineMIME = defineMIME

// Minimal default mode.
CodeMirror$1.defineMode("null", function () { return ({token: function (stream) { return stream.skipToEnd(); }}); })
CodeMirror$1.defineMIME("text/plain", "null")

// EXTENSIONS

CodeMirror$1.defineExtension = function (name, func) {
  CodeMirror$1.prototype[name] = func
}
CodeMirror$1.defineDocExtension = function (name, func) {
  Doc.prototype[name] = func
}

CodeMirror$1.fromTextArea = fromTextArea

addLegacyProps(CodeMirror$1)

CodeMirror$1.version = "5.20.2"

return CodeMirror$1;

})));
;
 /*********************************************************/
/********************
*
*   gestion niveaux/chapitres 
*
*********************/

function reloadLevel() {
    switch(screen) {
        case 'level1':
            loadLevel1();
            break;
        case 'level2':
            loadLevel2();
            break;
        case 'level3':
            loadLevel3();
            break;
        case 'level4':
            loadLevel4();
            break;
    }
}

/********************
*
*   Intro 
*
*********************/
function loadIntro(){

    if ($('input#name').val() == '') {

        $('input#name').focus();

    } else {
        Username = $('input#name').val();
        if (Username =='FX') { // {DEV}
            testing = true;
        } 

        lang = $('#chooseLang input[type="radio"]:checked').attr('id');
        if (lang == 'en') {
            isFr = false;
        }

        $.get("dist/content/content_"+lang+".html", function(data) {
            $(data).filter('div').each(function(i) {
                var name = $(this).attr("id");
                content[name] = $(this).html();
            })

            $('.main-nav ul').html(content['menu'])

            $.getJSON('dist/json/answers_' + lang + '.json', function(data) {
                answers = data;

                isUserExiste(Username);
            });
        });
    }
}


function isUserExiste (username) {
    if(readCookie(username)){
        arrayCookieUser = readCookie(username);
        $('main').load(views+lang+'/intro.html', function() {
            initRealoadSession();
            if (countLevel == 5) {
                var l = 'loadSandbox()';
            } else {
                var l = 'loadLevel'+countLevel+'()';
            }
            if (isFr) {
                var $portalLevel1 = new Portal({
                    title: 'Bon retour '+Username,
                    notion: 'Vous retrouverez tout ce que vous avez débloqué',
                    callback: l
                }); 
            } else {
                var $portalLevel1 = new Portal({
                    title: 'Welcome back '+Username,
                    notion: 'You can access everything you have already unlocked',
                    callback: l
                }); 
            }
        });
    } else {
        createCookie(username, arrayCookieUser, 20);
        $('main').load(views+lang+'/intro.html', function() {
            $('#username').text(Username);     
        });
    }
}



function initRealoadSession() {
    if (eval(arrayCookieUser.$tabSuccess)!= 0 && eval(arrayCookieUser.$tabSuccess)!= undefined) {
        $tabSuccess = eval(arrayCookieUser.$tabSuccess);
    } else {
        $tabSuccess = [];
    }
    level1IsVisited = eval(arrayCookieUser.level1IsVisited),
        level2IsVisited = eval(arrayCookieUser.level2IsVisited),
        level3IsVisited = eval(arrayCookieUser.level3IsVisited),
        level4IsVisited = eval(arrayCookieUser.level4IsVisited),
        sandboxIsVisited = eval(arrayCookieUser.sandboxIsVisited);
    countLevel = eval(arrayCookieUser.currentLevel);
    var countHelp = arrayCookieUser.$countHelp;
    var countEncyclo = arrayCookieUser.$countEncyclo;
    var number = 1; 
    var levelForHelp = 1; 
    console.log(countEncyclo)
    for (var i = 0; i < countHelp; i++) {
        var thecontent = 'jeu'+levelForHelp+'astuce'+number,
            title = (isFr ? 'Niveau '+levelForHelp+' Aide n°'+number : 'Level '+levelForHelp+' Hint n°'+number);
        addHelp(title, content[thecontent]);
        if ((number % 3) == 0) {levelForHelp++; number = 1;} else {number++; }
    }
    var numberTitle = 0;
    if(level2IsVisited){
            var titleExplain = isFr ? 'Les Variables' : 'Variables';
            addEncyclo(titleExplain, content['variable'], false);
        }
    if(level3IsVisited){
        var titleExplain = isFr ? 'Validation du niveau 3' : 'Level 3 validation';
        addEncyclo(titleExplain, content['lvl3explanation'], false);
    }
    if(level4IsVisited){
        var titleExplain = isFr ? 'Les Fonctions' : 'Functions';
        addEncyclo(titleExplain, content['fonction'], false);
    }

    for (var i = 1; i < (parseInt(countEncyclo)+1); i++) {        
        var title = (isFr ? 'Niveau '+i : 'Level '+i);
        var thecontent = 'encyclo1jeu'+i;
        addEncyclo(title, content[thecontent]);
    }

}
/**********************************
*
*             COOKIES
*
*********************************/

function createCookie(name, tabvalue, duration) {
    // Le nombre de duration est spécifié
    value = decodeURIComponent( $.param( tabvalue ) );
    if (duration) {
        var date = new Date();
        // Converti le nombre de jour en millisecondes
        date.setTime(date.getTime()+(duration*24*60*60*1000));
        var expire = "; expire="+date.toGMTString();
    }
    // Aucune valeur de duration spécifiée
    else var expire = "";
    document.cookie = name+"="+value+expire+"; path=/";
}
function readCookie(name) {
    // Ajoute le signe égale virgule au name
    // pour la recherche
    var name2 = name + "=";
    // Array contenant tous les cookies
    var arrCookies = document.cookie.split(';');
    // Cherche l'array pour le cookie en question
    for(var i=0;i < arrCookies.length;i++) {
        var a = arrCookies[i];
        // Si c'est un espace, enlever
        while (a.charAt(0)==' ') {
            a = a.substring(1,a.length);
        }
        if (a.indexOf(name2) == 0) {
            return $.parseParams("?"+a.substring(name2.length,a.length));
        }
    }
    // Aucun cookie trouvé
    return null;
}

function eraseCookie(name) {
    createCookie(name,"",-1);
}


/********************
*
*   Page de choix des chapitres 
*
*********************/
function loadChooseLevel(){
    $('main').load(views+lang+'/accueil.html');
}

$.fn.loadLevel = function(levelToLoad, callback) {

    reinitMain();

    screen = levelToLoad;

    var file = views + lang + level+levelToLoad+'.html',
        lvl = '#'+levelToLoad,
        modal = '#modal-content';

    thisLvlAnswers = answers[levelToLoad];
    //console.log(thisLvlAnswers);

    this.load(file + ' ' + lvl, function() {  
        $('.modal-content').load(file + ' ' + modal, function() {
            callback();
        })
    })
}



/*********************

Implementation de l'encyclopedie

********************/

// ici tout le contenu designé sera stoqué en tant que page dans l'encyclopedie
// en param de la fonction => 
/**
* Nom de la page ( titre du li)
* contenu textuel
*
*/

function addEncyclo(name, content, count = true) {
    var exist = false;
    console.log('addEncyclo', name)
    for (var i = 0; i < encycloNameTab.length; i++) {
        if (encycloNameTab[i] === name) {
            exist = true;
        }
    }

    if (!exist) {
        if (count) {
            encycloNameTab.push(name);
            countEncyclo = encycloNameTab.length;
            arrayCookieUser.$countEncyclo = countEncyclo;
        } 
        console.log(arrayCookieUser.$countEncyclo)
        counter++;
        createCookie(Username, arrayCookieUser, 20);
        if (name && content) {
            $tabArchiveTitle.push('<li data-link="content-'+counter+'">'+name+'</li>');
            $tabArchiveContent.push('<div id="content-'+counter+'" class="encycloPop " data-link="content-'+counter+'">'+content+'</div>');
        } 
    } else {
        return;
    }
}
/*********************

Implementation de l'aide

********************/

// ici tout le contenu designé sera stoqué en tant que page dans l'aide
// en param de la fonction => 
/**
* Nom de la page ( titre du li)
* contenu textuel
*
*/

function addHelp(name, content) {
    var exist = false;
    for (var i = 0; i < helpNameTab.length; i++) {
        if (helpNameTab[i] === name) {
            exist = true;
            break;
        }
    }
    if (!exist) {
        helpNameTab.push(name);
        countHelp = $tabHelpTitle.length;
        arrayCookieUser.$countHelp = countHelp+1;
        createCookie(Username, arrayCookieUser, 20);
        if (name && content) {
            $tabHelpTitle.push('<li data-link="content-'+countHelp+'">'+name+'</li>');
            $tabHelpContent.push('<div id="content-'+countHelp+'" class="encycloPop " data-link="help-'+countHelp+'">'+content+'</div>');
        } 
    } else {
        return;
    }

}

function helpTitle(level, help) {
    var title = isFr ? 'Niveau '+level+' Aide n°'+help : 'Level '+level+' Help n°'+help;
    return title;
}

/*********************

Implementation des success 

********************/

// ici tout le contenu designé sera stoqué en tant trophé dans la pages des success 
// en param de la fonction => 
/**
* class de l'icon du success
*
*/
function addSuccess(icon) {
    countSuccess = $tabSuccess.length;
    if (icon) {
        $tabSuccess.push(icon);
        arrayCookieUser.$tabSuccess = $tabSuccess;
        createCookie(Username, arrayCookieUser, 20);
    }
}

function openFirstTip() {
    $(".help-button").removeClass("first-tip").trigger( "click" );   
}

function alertErr() {
    var pixel = $('.pixel-active').data('rvb');
    resetCodePixel($('.pixel-active').data('name'), pixel.red, pixel.green, pixel.blue)
    codeMirror.getInputField().blur();
    //codeMirror.focus();
    alert('ERROR');
}

function finish() {
    var totalSucces = 8,
        nbSucces = (totalSucces - $tabSuccess.length),
        title = "", 
        content = "";

    if (totalSucces > $tabSuccess.length) {
        if (isFr) {
            title = "Félicitations !"; 
            content = 'Vous êtes venu à bout de toutes les épreuves, cependant il vous reste '+nbSucces+' succé(s) à débloquer! n\'hésitez pas à rejouer les activités. D\'autres groupes vous attendent dans le musée pour vous proposer d\'autres experiences'; 
        } else {
            title = "Congratulations !";
            content = 'Vous êtes venu à bout de toutes les épreuves, cependant il vous reste '+nbSucces+' succé(s) à débloquer! n\'hésitez pas à rejouer les activités. D\'autres groupes vous attendent dans le musée pour vous proposer d\'autres experiences'; 
        }
    } else {
        if (isFr) {
            title = "Félicitations !"; 
            content = 'Vous êtes venu à bout de toutes les épreuves en débloquant tous les succés!! Allez présenter cet écran aux résponssables pour recevoir une recompence! D\'autres groupes vous attendent dans le musée pour vous proposer d\'autres experiences'; 
        } else {
            title = "Congratulations !";
            content = 'Vous êtes venu à bout de toutes les épreuves en débloquant tous les succés!! Allez présenter cet écran aux résponssables pour recevoir une recompence! D\'autres groupes vous attendent dans le musée pour vous proposer d\'autres experiences'; 
        }
    }

    var $portalFinish = new Portal({
        title: title,
        notion: content,
        callback: 'portalLevel1()', 
        loadCallbackOnClose: true
    });

}
function unlockAllSuccess() {
    for (var i = 1; i < 9; i++) {
        var succes = 'succes'+i;
        addSuccess(succes); 
    }
}

// Modal gestion
function showModal() {
    $('#modal-container').removeAttr('class').addClass('openCode');
    $('body').addClass('modal-active');
    setTimeout(function() {
        if ($('body').hasClass('modal-active')) {
            $('.content-global').hide();
        }
    }, 1000);
}

function initEcrin() {
    $('main').addClass('flex');
    $('.background').addClass('none');
    $('.js-hamburger').show();
    ecrin = true;
}

function hideModal() {
    $('#modal-container').addClass('out');
    $('body').removeClass('modal-active');
    $('.content-global').show(); 
}

//**********************************************************************
// function waitfor - Wait until a condition is met
//        
// Needed parameters:
//    test: function that returns a value
//    expectedValue: the value of the test function we are waiting for
//    msec: delay between the calls to test
//    callback: function to execute when the condition is met
// Parameters for debugging:
//    count: used to count the loops
//    source: a string to specify an ID, a message, etc
//**********************************************************************
function waitforPopinIsOpen( expectedValue, msec, count, source, level, callback) {
    // Check if condition met. If not, re-check later (msec).
    if (countLevel === level) {
        if (popinIsOpen !== expectedValue || isNewTip !== expectedValue) {
            count++;
            setTimeout(function() {
                waitforPopinIsOpen( expectedValue, msec, count, source, level, callback);
            }, msec);
            return;
        } 
    }else {
        return;
    }

    // Condition finally met. callback() can be executed.
    //console.log(source + ': ' + popinIsOpen + ', expected: ' + expectedValue + ', ' + count + ' loops.');
    callback();
}




// Add an URL parser to JQuery that returns an object
// This function is meant to be used with an URL like the window.location
// Use: $.parseParams('http://mysite.com/?var=string') or $.parseParams() to parse the window.location
// Simple variable:  ?var=abc                        returns {var: "abc"}
// Simple object:    ?var.length=2&var.scope=123     returns {var: {length: "2", scope: "123"}}
// Simple array:     ?var[]=0&var[]=9                returns {var: ["0", "9"]}
// Array with index: ?var[0]=0&var[1]=9              returns {var: ["0", "9"]}
// Nested objects:   ?my.var.is.here=5               returns {my: {var: {is: {here: "5"}}}}
// All together:     ?var=a&my.var[]=b&my.cookie=no  returns {var: "a", my: {var: ["b"], cookie: "no"}}
// You just cant have an object in an array, e.g. ?var[1].test=abc DOES NOT WORK
(function ($) {
    //
    var re = /([^&=]+)=?([^&]*)/g;
    var decode = function (str) {
        return decodeURIComponent(str.replace(/\+/g, ' '));
    };
    $.parseParams = function (query) {

        // recursive function to construct the result object
        function createElement(params, key, value) {
            key = key + '';

            // if the key is a property
            if (key.indexOf('.') !== -1) {
                // extract the first part with the name of the object
                var list = key.split('.');

                // the rest of the key
                var new_key = key.split(/\.(.+)?/)[1];

                // create the object if it doesnt exist
                if (!params[list[0]]) params[list[0]] = {};

                // if the key is not empty, create it in the object
                if (new_key !== '') {
                    createElement(params[list[0]], new_key, value);
                } else console.warn('parseParams :: empty property in key "' + key + '"');
            } else
                // if the key is an array    
                if (key.indexOf('[') !== -1) {
                    // extract the array name
                    var list = key.split('[');
                    key = list[0];

                    // extract the index of the array
                    var list = list[1].split(']');
                    var index = list[0]

                    // if index is empty, just push the value at the end of the array
                    if (index == '') {
                        if (!params) params = {};
                        if (!params[key] || !$.isArray(params[key])) params[key] = [];
                        params[key].push(value);
                    } else
                        // add the value at the index (must be an integer)
                    {
                        if (!params) params = {};
                        if (!params[key] || !$.isArray(params[key])) params[key] = [];
                        params[key][parseInt(index)] = value;
                    }
                } else
                    // just normal key
                {
                    if (!params) params = {};
                    params[key] = value;
                }
        }

        // be sure the query is a string
        query = query + '';

        if (query === '') query = window.location + '';

        var params = {}, e;
        if (query) {
            // remove # from end of query
            if (query.indexOf('#') !== -1) {
                query = query.substr(0, query.indexOf('#'));
            }

            // remove ? at the begining of the query
            if (query.indexOf('?') !== -1) {
                query = query.substr(query.indexOf('?') + 1, query.length);
            } else return {};

            // empty parameters
            if (query == '') return {};

            // execute a createElement on every key and value
            while (e = re.exec(query)) {
                var key = decode(e[1]);
                var value = decode(e[2]);
                createElement(params, key, value);
            }
        }
        return params;
    };
})(jQuery);;
 /*********************************************************/
// add pixel
function addPixel() {
    var pixel = $('<div class="pixel js-pixel"></div>');

    pixel.data('rvb', {
        red: 0, 
        green: 0, 
        blue: 0
    })
        .data('pos', {
        x: 0,
        y: 0,
        rot: 0,
        scale: 4,
    }).data('name', 'pixel_'+$(this).index());

    $('.js-sandboxwrapper').append(pixel);
}

function colorPixelRVB() {
    //console.log(pixel)
    var pixel = $('.pixel-active').data('rvb')
    var red = 0,
        green = 0,
        blue = 0;
    if (pixel.red) {
        red = 255;
    }
    if (pixel.green) {
        green = 255;
    }
    if (pixel.blue) {
        blue = 255;
    }
    $('.pixel-active').css('background-color', 'rgb(' + red + ', ' + green + ', ' + blue + ')');

    colorModel(red, green, blue);
}

function colorPixel() {    
    var pixel = $('.pixel-active').data('rvb')

    $('.pixel-active').css('background-color', 'rgb(' + pixel.red + ', ' + pixel.green + ', ' + pixel.blue + ')');

    colorModel(pixel.red, pixel.green, pixel.blue);
}

function colorModel(r, g, b) {
    $('.pixel-model').css('background-color', 'rgb(' + r + ', ' + g + ', ' + b + ')')
}

function resetCodePixel(id, r, g, b) {
    codeMirror.setValue('var ' + id + ' = {\n\tred : ' + r + ',\n\tgreen : ' + g + ',\n\tblue : ' + b + '\n};\n');
    codeMirror.markText({line: 0, ch: 0}, {line: 1, ch: 7}, {readOnly: true, inclusiveLeft: true});
    codeMirror.markText({line: 2, ch: 0}, {line: 2, ch: 9}, {readOnly: true, inclusiveLeft: true});
    codeMirror.markText({line: 3, ch: 0}, {line: 3, ch: 8}, {readOnly: true, inclusiveLeft: true});
    if (screen != 'sandbox') {
        codeMirror.markText({line: 4, ch: 0}, {line: 5, ch: 0}, {readOnly: true, inclusiveLeft: true});
    }
}

function resetCheckboxes(r, g, b) {
    var valR, valG, valB;
    if (r) {valR = 255} else {valR = 0}
    if (g) {valG = 255} else {valG = 0}
    if (b) {valB = 255} else {valB = 0}
    $('input.red').prop('checked', r).parent().css('background-color', 'rgb(' + valR + ', 0, 0)')
    $('input.green').prop('checked', g).parent().css('background-color', 'rgb(0, ' + valG + ', 0)')
    $('input.blue').prop('checked', b).parent().css('background-color', 'rgb(0, 0, ' + valB + ')')

    colorModel(valR, valG, valB)
}

function setSelection(varType) {
    var setPos = true,
        cm = codeMirror,
        currentPos = cm.getCursor(),
        line = currentPos.line,
        tokens,
        i; //Indice du token en cours

    //Commencer la recherche en début de ligne suivante si le curseur est en fin de ligne
    if (currentPos.ch == cm.getLine(line).length) {
        line++;
        currentPos.ch = 0;
    }
    tokens = cm.getLineTokens(line);
    i = 0; 
    //Commencer la recherche après la position actuelle du curseur
    while (tokens[i].end <= currentPos.ch) {
        i++;
    }
    //Commencer la recherche au token suivant si le token en cours est du bon type
    if (tokens[i].type == varType) {
        i++;
    }
    //Commencer la recherche a la ligne suivante si il n'y a plus de tokens sur la ligne
    if (typeof tokens[i] == 'undefined') {
        i = 0;
        line++
        tokens = cm.getLineTokens(line)
    }

    //Début de la recherche
    //Tant que le token en cours n'est pas du bon type, on analyse le token suivant
    while (tokens[i].type != varType) {
        i++
        //Continuer la recherche a la ligne suivante si il n'y a plus de tokens sur la ligne
        if (typeof tokens[i] == 'undefined') {
            i = 0;
            line++
            tokens = cm.getLineTokens(line)
        }
        //Il n'y a plus de tokens dans l'editeur. On arrete la boucle et !setPos pour ne pas effectuer les prochaines instructions
        if (line > codeMirror.lineCount()) {
            setPos = false;
            //console.log('should run code')
            break;
        }
    }
    //console.log('oui')
    //Si on a trouvé un prochain token, le selectionne
    if (setPos) {
        cm.setSelection({
            line: line,
            ch: tokens[i].start
        }, {
            line: line,
            ch: tokens[i].end
        });
    } else {//Si on a pas trouvé de token, on vérifie qu'il y ait bien 3 tokens du bon type
        //console.log('runcode')
        if ($('.cm-atom').length != 3) {
            alertErr();
            //console.log('nope')
        } else { //Si oui, unfocus l'editeur et lance le code
            if (screen == 'level2') {
                runCodeLevel2();
            } else if (screen == 'level3') {
                runCodeLevel3();
            }

            codeMirror.getInputField().blur();
        }
    }
    //console.log(tokens[i])
}

function enterKeyMap() {
    var setPos = true,
        cm = codeMirror,
        currentPos = cm.getCursor(),
        line = currentPos.line,
        lineCount = cm.lineCount();

    if (line+1 != lineCount) {
        var linePos = line + 1,
            chPos = cm.getLine(linePos).length,
            lastChar = cm.getRange({line: linePos, ch: chPos-1}, {line: linePos, ch: chPos});

        if (lastChar == ',') {
            chPos -= 1;
        } 
        if (lastChar == ';') {
            if (screen != 'sandbox') {
                codeMirror.getInputField().blur();
            } else {
                cm.setCursor({line: 6, ch: 0})
            }

        } else {
            cm.setCursor({line: linePos, ch: chPos})
        }
    } else {
        CodeMirror.commands.newlineAndIndent(cm)
    }




    //var token = cm.getLineTokens(linePos);
    //    if (token.length < 2) {
    //        codeMirror.getInputField().blur();
    //    } else {
    //        cm.setCursor({line: linePos, ch: chPos})
    //    }
}

function reinitImg() {
    $('.js-framewrapper .js-image-object').each(function () {
        $(this).data('pos', {
            x: 0,
            y: 0,
            rot: 0
        });
        $(this).attr('style', '');
    });
}

function addCode(btn) {
    var cmContent = codeMirror.getValue();

    var fn = btn.html();
    var comment = ''

    switch (btn.attr('data-function')) {
        case 'left':
            comment = (isFr ? '//Déplacer de 1 case à gauche' : '//Move one square left' );
            break;
        case 'right':
            comment = (isFr ? '//Déplacer de 1 case à droite' : '//Move one square right' );
            break;
        case 'up':
            comment = (isFr ? '//Déplacer de 1 case en haut' : '//Move one square up' );
            break;
        case 'down':
            comment = (isFr ? '//Déplacer de 1 case en bas' : '//Move one square down' );
            break;
        case 'rotate':
            comment = (isFr ? '//Touner de 90 degrés dans le sens horaire' : '//Rotate 90 degrees clockwise' );
            break;
        case 'scaleUp':
            comment = (isFr ? '//Augmenter la taille' : '//Increase size' );
            break;
        case 'scaleDown':
            comment = (isFr ? '//Diminuer la taille' : '//Decrease size' );
            break;
        default:
            break;
    }

    //console.log(cmContent, fn, comment);

    codeMirror.setValue(cmContent + "\n" + comment + "\n" + fn);
}

function moveLeft() {
    var pos = $('.img-active').data('pos'); 
    pos.x--;
    $('.img-active').data('pos', pos)
}
function moveRight() {
    var pos = $('.img-active').data('pos'); 
    pos.x++;
    $('.img-active').data('pos', pos)
}
function moveUp() {
    var pos = $('.img-active').data('pos'); 
    pos.y--;
    $('.img-active').data('pos', pos)
}
function moveDown() {
    //console.log('GOOOOOIIING DOOOWN')
    var pos = $('.img-active').data('pos'); 
    pos.y++;
    $('.img-active').data('pos', pos)
}
function rotate(deg) {

    if (screen == 'sandbox' && !deg) {
        deg = 22.5
    } else if (!deg) {
        deg = 90;
    }  
    var pos = $('.img-active').data('pos'); 
    pos.rot = pos.rot + deg;
    $('.img-active').data('pos', pos)
}
function move(direction, repeat) {
    if (repeat && typeof repeat == 'number') {
        for (i = 0; i < repeat; i++) {
            move(direction);
        }
    } else {
        //console.log('moving')
        switch(direction) {
            case up:
            case haut:
                moveUp();
                break;
            case down:
            case bas:
                moveDown();
                break;
            case left:
            case gauche:
                moveLeft();
                break;
            case right:
            case droite:
                moveRight();
                break;
            default:
                console.log("error") //{DEV}   
                break;
        }
    }
} 
function scaleUp() {
    var pos = $('.img-active').data('pos'); 
    pos.scale--;
    if (pos.scale < 2) {size = 2}
    $('.img-active').data('pos', pos)
}
function scaleDown() {
    var pos = $('.img-active').data('pos'); 
    pos.scale++;
    if (pos.scale > 8) {size = 8}
    $('.img-active').data('pos', pos)
}

function applyPosition() {
    var pos = $('.img-active').data('pos'); 

    if (screen == 'sandbox') {

        var scale = $('.img-active').data('pos', pos);
        scale = pos.scale;
        size = 100/scale;
        var sizepx = size + '%'
        console.log(size)

        var posMax = scale - 1;
        console.log(posMax, posMax);
        pos.x = pos.x > posMax ? posMax : (pos.x < 0) ? 0 : pos.x;
        pos.y = pos.y > posMax ? posMax : (pos.y < 0) ? 0 : pos.y;
        pos.rot %= 360;
        console.log(pos.x, pos.y);

        $('.img-active').css('width', sizepx);
        $('.img-active').css('height', sizepx);
        $('.pixel-active').css('transform', 'rotate('+pos.rot+'deg)');
        $('.pixel-active').css('left', pos.x * size + '%');
        $('.pixel-active').css('top', pos.y * size + '%');

    } else {


        pos.x = pos.x > 1 ? 1 : (pos.x < -1) ? -1 : pos.x;
        pos.y = pos.y > 1 ? 1 : (pos.y < -1) ? -1 : pos.y;
        pos.rot %= 360;

        //console.log(pos.rot)

        $('.img-active').css('transform', 'rotate('+pos.rot+'deg)');

        $('.img-active').css('left', pos.x * 100 + '%');
        $('.img-active').css('top', pos.y * 100 + '%');
    }
}

function resetCode() {
    codeMirror.setValue('');
}

function resetSliders(r, g, b) {
    $('input.red').prop('disabled', '').val(r).parent().css('background-color', 'rgb('+r+', 0, 0)').removeClass('validated')
    $('input.green').prop('disabled', '').val(g).parent().css('background-color', 'rgb(0, '+g+', 0)').removeClass('validated')
    $('input.blue').prop('disabled', '').val(b).parent().css('background-color', 'rgb(0, 0, '+b+')').removeClass('validated')

    colorModel(r, g, b)
}

function disableSliders(validated) {
    $.each(validated, function(color, disabled) {
        //console.log(color, disabled)
        if (disabled) {
            $('input.'+color).prop('disabled', 'disabled').parent().addClass('validated');
            if (!isFailedOnce) {
                isFailedOnce = true;
                popinExplainLevel3();
            }
        }
    });
}

;
 /*********************************************************/
// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: http://codemirror.net/LICENSE

(function(mod) {
  if (typeof exports == "object" && typeof module == "object") // CommonJS
    mod(require("../../lib/codemirror"));
  else if (typeof define == "function" && define.amd) // AMD
    define(["../../lib/codemirror"], mod);
  else // Plain browser env
    mod(CodeMirror);
})(function(CodeMirror) {
"use strict";

function expressionAllowed(stream, state, backUp) {
  return /^(?:operator|sof|keyword c|case|new|[\[{}\(,;:]|=>)$/.test(state.lastType) ||
    (state.lastType == "quasi" && /\{\s*$/.test(stream.string.slice(0, stream.pos - (backUp || 0))))
}

CodeMirror.defineMode("javascript", function(config, parserConfig) {
  var indentUnit = config.indentUnit;
  var statementIndent = parserConfig.statementIndent;
  var jsonldMode = parserConfig.jsonld;
  var jsonMode = parserConfig.json || jsonldMode;
  var isTS = parserConfig.typescript;
  var wordRE = parserConfig.wordCharacters || /[\w$\xa1-\uffff]/;

  // Tokenizer

  var keywords = function(){
    function kw(type) {return {type: type, style: "keyword"};}
    var A = kw("keyword a"), B = kw("keyword b"), C = kw("keyword c");
    var operator = kw("operator"), atom = {type: "atom", style: "atom"};

    var jsKeywords = {
      "if": kw("if"), "while": A, "with": A, "else": B, "do": B, "try": B, "finally": B,
      "return": C, "break": C, "continue": C, "new": kw("new"), "delete": C, "throw": C, "debugger": C,
      "var": kw("var"), "const": kw("var"), "let": kw("var"),
      "function": kw("function"), "catch": kw("catch"),
      "for": kw("for"), "switch": kw("switch"), "case": kw("case"), "default": kw("default"),
      "in": operator, "typeof": operator, "instanceof": operator,
      "true": atom, "false": atom, "null": atom, "undefined": atom, "NaN": atom, "Infinity": atom,
      "this": kw("this"), "class": kw("class"), "super": kw("atom"),
      "yield": C, "export": kw("export"), "import": kw("import"), "extends": C,
      "await": C, "async": kw("async")
    };

    // Extend the 'normal' keywords with the TypeScript language extensions
    if (isTS) {
      var type = {type: "variable", style: "variable-3"};
      var tsKeywords = {
        // object-like things
        "interface": kw("class"),
        "implements": C,
        "namespace": C,
        "module": kw("module"),
        "enum": kw("module"),
        "type": kw("type"),

        // scope modifiers
        "public": kw("modifier"),
        "private": kw("modifier"),
        "protected": kw("modifier"),
        "abstract": kw("modifier"),

        // operators
        "as": operator,

        // types
        "string": type, "number": type, "boolean": type, "any": type
      };

      for (var attr in tsKeywords) {
        jsKeywords[attr] = tsKeywords[attr];
      }
    }

    return jsKeywords;
  }();

  var isOperatorChar = /[+\-*&%=<>!?|~^]/;
  var isJsonldKeyword = /^@(context|id|value|language|type|container|list|set|reverse|index|base|vocab|graph)"/;

  function readRegexp(stream) {
    var escaped = false, next, inSet = false;
    while ((next = stream.next()) != null) {
      if (!escaped) {
        if (next == "/" && !inSet) return;
        if (next == "[") inSet = true;
        else if (inSet && next == "]") inSet = false;
      }
      escaped = !escaped && next == "\\";
    }
  }

  // Used as scratch variables to communicate multiple values without
  // consing up tons of objects.
  var type, content;
  function ret(tp, style, cont) {
    type = tp; content = cont;
    return style;
  }
  function tokenBase(stream, state) {
    var ch = stream.next();
    if (ch == '"' || ch == "'") {
      state.tokenize = tokenString(ch);
      return state.tokenize(stream, state);
    } else if (ch == "." && stream.match(/^\d+(?:[eE][+\-]?\d+)?/)) {
      return ret("number", "number");
    } else if (ch == "." && stream.match("..")) {
      return ret("spread", "meta");
    } else if (/[\[\]{}\(\),;\:\.]/.test(ch)) {
      return ret(ch);
    } else if (ch == "=" && stream.eat(">")) {
      return ret("=>", "operator");
    } else if (ch == "0" && stream.eat(/x/i)) {
      stream.eatWhile(/[\da-f]/i);
      return ret("number", "number");
    } else if (ch == "0" && stream.eat(/o/i)) {
      stream.eatWhile(/[0-7]/i);
      return ret("number", "number");
    } else if (ch == "0" && stream.eat(/b/i)) {
      stream.eatWhile(/[01]/i);
      return ret("number", "number");
    } else if (/\d/.test(ch)) {
      stream.match(/^\d*(?:\.\d*)?(?:[eE][+\-]?\d+)?/);
      return ret("number", "number");
    } else if (ch == "/") {
      if (stream.eat("*")) {
        state.tokenize = tokenComment;
        return tokenComment(stream, state);
      } else if (stream.eat("/")) {
        stream.skipToEnd();
        return ret("comment", "comment");
      } else if (expressionAllowed(stream, state, 1)) {
        readRegexp(stream);
        stream.match(/^\b(([gimyu])(?![gimyu]*\2))+\b/);
        return ret("regexp", "string-2");
      } else {
        stream.eatWhile(isOperatorChar);
        return ret("operator", "operator", stream.current());
      }
    } else if (ch == "`") {
      state.tokenize = tokenQuasi;
      return tokenQuasi(stream, state);
    } else if (ch == "#") {
      stream.skipToEnd();
      return ret("error", "error");
    } else if (isOperatorChar.test(ch)) {
      stream.eatWhile(isOperatorChar);
      return ret("operator", "operator", stream.current());
    } else if (wordRE.test(ch)) {
      stream.eatWhile(wordRE);
      var word = stream.current(), known = keywords.propertyIsEnumerable(word) && keywords[word];
      return (known && state.lastType != ".") ? ret(known.type, known.style, word) :
                     ret("variable", "variable", word);
    }
  }

  function tokenString(quote) {
    return function(stream, state) {
      var escaped = false, next;
      if (jsonldMode && stream.peek() == "@" && stream.match(isJsonldKeyword)){
        state.tokenize = tokenBase;
        return ret("jsonld-keyword", "meta");
      }
      while ((next = stream.next()) != null) {
        if (next == quote && !escaped) break;
        escaped = !escaped && next == "\\";
      }
      if (!escaped) state.tokenize = tokenBase;
      return ret("string", "string");
    };
  }

  function tokenComment(stream, state) {
    var maybeEnd = false, ch;
    while (ch = stream.next()) {
      if (ch == "/" && maybeEnd) {
        state.tokenize = tokenBase;
        break;
      }
      maybeEnd = (ch == "*");
    }
    return ret("comment", "comment");
  }

  function tokenQuasi(stream, state) {
    var escaped = false, next;
    while ((next = stream.next()) != null) {
      if (!escaped && (next == "`" || next == "$" && stream.eat("{"))) {
        state.tokenize = tokenBase;
        break;
      }
      escaped = !escaped && next == "\\";
    }
    return ret("quasi", "string-2", stream.current());
  }

  var brackets = "([{}])";
  // This is a crude lookahead trick to try and notice that we're
  // parsing the argument patterns for a fat-arrow function before we
  // actually hit the arrow token. It only works if the arrow is on
  // the same line as the arguments and there's no strange noise
  // (comments) in between. Fallback is to only notice when we hit the
  // arrow, and not declare the arguments as locals for the arrow
  // body.
  function findFatArrow(stream, state) {
    if (state.fatArrowAt) state.fatArrowAt = null;
    var arrow = stream.string.indexOf("=>", stream.start);
    if (arrow < 0) return;

    if (isTS) { // Try to skip TypeScript return type declarations after the arguments
      var m = /:\s*(?:\w+(?:<[^>]*>|\[\])?|\{[^}]*\})\s*$/.exec(stream.string.slice(stream.start, arrow))
      if (m) arrow = m.index
    }

    var depth = 0, sawSomething = false;
    for (var pos = arrow - 1; pos >= 0; --pos) {
      var ch = stream.string.charAt(pos);
      var bracket = brackets.indexOf(ch);
      if (bracket >= 0 && bracket < 3) {
        if (!depth) { ++pos; break; }
        if (--depth == 0) { if (ch == "(") sawSomething = true; break; }
      } else if (bracket >= 3 && bracket < 6) {
        ++depth;
      } else if (wordRE.test(ch)) {
        sawSomething = true;
      } else if (/["'\/]/.test(ch)) {
        return;
      } else if (sawSomething && !depth) {
        ++pos;
        break;
      }
    }
    if (sawSomething && !depth) state.fatArrowAt = pos;
  }

  // Parser

  var atomicTypes = {"atom": true, "number": true, "variable": true, "string": true, "regexp": true, "this": true, "jsonld-keyword": true};

  function JSLexical(indented, column, type, align, prev, info) {
    this.indented = indented;
    this.column = column;
    this.type = type;
    this.prev = prev;
    this.info = info;
    if (align != null) this.align = align;
  }

  function inScope(state, varname) {
    for (var v = state.localVars; v; v = v.next)
      if (v.name == varname) return true;
    for (var cx = state.context; cx; cx = cx.prev) {
      for (var v = cx.vars; v; v = v.next)
        if (v.name == varname) return true;
    }
  }

  function parseJS(state, style, type, content, stream) {
    var cc = state.cc;
    // Communicate our context to the combinators.
    // (Less wasteful than consing up a hundred closures on every call.)
    cx.state = state; cx.stream = stream; cx.marked = null, cx.cc = cc; cx.style = style;

    if (!state.lexical.hasOwnProperty("align"))
      state.lexical.align = true;

    while(true) {
      var combinator = cc.length ? cc.pop() : jsonMode ? expression : statement;
      if (combinator(type, content)) {
        while(cc.length && cc[cc.length - 1].lex)
          cc.pop()();
        if (cx.marked) return cx.marked;
        if (type == "variable" && inScope(state, content)) return "variable-2";
        return style;
      }
    }
  }

  // Combinator utils

  var cx = {state: null, column: null, marked: null, cc: null};
  function pass() {
    for (var i = arguments.length - 1; i >= 0; i--) cx.cc.push(arguments[i]);
  }
  function cont() {
    pass.apply(null, arguments);
    return true;
  }
  function register(varname) {
    function inList(list) {
      for (var v = list; v; v = v.next)
        if (v.name == varname) return true;
      return false;
    }
    var state = cx.state;
    cx.marked = "def";
    if (state.context) {
      if (inList(state.localVars)) return;
      state.localVars = {name: varname, next: state.localVars};
    } else {
      if (inList(state.globalVars)) return;
      if (parserConfig.globalVars)
        state.globalVars = {name: varname, next: state.globalVars};
    }
  }

  // Combinators

  var defaultVars = {name: "this", next: {name: "arguments"}};
  function pushcontext() {
    cx.state.context = {prev: cx.state.context, vars: cx.state.localVars};
    cx.state.localVars = defaultVars;
  }
  function popcontext() {
    cx.state.localVars = cx.state.context.vars;
    cx.state.context = cx.state.context.prev;
  }
  function pushlex(type, info) {
    var result = function() {
      var state = cx.state, indent = state.indented;
      if (state.lexical.type == "stat") indent = state.lexical.indented;
      else for (var outer = state.lexical; outer && outer.type == ")" && outer.align; outer = outer.prev)
        indent = outer.indented;
      state.lexical = new JSLexical(indent, cx.stream.column(), type, null, state.lexical, info);
    };
    result.lex = true;
    return result;
  }
  function poplex() {
    var state = cx.state;
    if (state.lexical.prev) {
      if (state.lexical.type == ")")
        state.indented = state.lexical.indented;
      state.lexical = state.lexical.prev;
    }
  }
  poplex.lex = true;

  function expect(wanted) {
    function exp(type) {
      if (type == wanted) return cont();
      else if (wanted == ";") return pass();
      else return cont(exp);
    };
    return exp;
  }

  function statement(type, value) {
    if (type == "var") return cont(pushlex("vardef", value.length), vardef, expect(";"), poplex);
    if (type == "keyword a") return cont(pushlex("form"), parenExpr, statement, poplex);
    if (type == "keyword b") return cont(pushlex("form"), statement, poplex);
    if (type == "{") return cont(pushlex("}"), block, poplex);
    if (type == ";") return cont();
    if (type == "if") {
      if (cx.state.lexical.info == "else" && cx.state.cc[cx.state.cc.length - 1] == poplex)
        cx.state.cc.pop()();
      return cont(pushlex("form"), parenExpr, statement, poplex, maybeelse);
    }
    if (type == "function") return cont(functiondef);
    if (type == "for") return cont(pushlex("form"), forspec, statement, poplex);
    if (type == "variable") return cont(pushlex("stat"), maybelabel);
    if (type == "switch") return cont(pushlex("form"), parenExpr, pushlex("}", "switch"), expect("{"),
                                      block, poplex, poplex);
    if (type == "case") return cont(expression, expect(":"));
    if (type == "default") return cont(expect(":"));
    if (type == "catch") return cont(pushlex("form"), pushcontext, expect("("), funarg, expect(")"),
                                     statement, poplex, popcontext);
    if (type == "class") return cont(pushlex("form"), className, poplex);
    if (type == "export") return cont(pushlex("stat"), afterExport, poplex);
    if (type == "import") return cont(pushlex("stat"), afterImport, poplex);
    if (type == "module") return cont(pushlex("form"), pattern, pushlex("}"), expect("{"), block, poplex, poplex)
    if (type == "type") return cont(typeexpr, expect("operator"), typeexpr, expect(";"));
    if (type == "async") return cont(statement)
    return pass(pushlex("stat"), expression, expect(";"), poplex);
  }
  function expression(type) {
    return expressionInner(type, false);
  }
  function expressionNoComma(type) {
    return expressionInner(type, true);
  }
  function parenExpr(type) {
    if (type != "(") return pass()
    return cont(pushlex(")"), expression, expect(")"), poplex)
  }
  function expressionInner(type, noComma) {
    if (cx.state.fatArrowAt == cx.stream.start) {
      var body = noComma ? arrowBodyNoComma : arrowBody;
      if (type == "(") return cont(pushcontext, pushlex(")"), commasep(pattern, ")"), poplex, expect("=>"), body, popcontext);
      else if (type == "variable") return pass(pushcontext, pattern, expect("=>"), body, popcontext);
    }

    var maybeop = noComma ? maybeoperatorNoComma : maybeoperatorComma;
    if (atomicTypes.hasOwnProperty(type)) return cont(maybeop);
    if (type == "function") return cont(functiondef, maybeop);
    if (type == "class") return cont(pushlex("form"), classExpression, poplex);
    if (type == "keyword c" || type == "async") return cont(noComma ? maybeexpressionNoComma : maybeexpression);
    if (type == "(") return cont(pushlex(")"), maybeexpression, expect(")"), poplex, maybeop);
    if (type == "operator" || type == "spread") return cont(noComma ? expressionNoComma : expression);
    if (type == "[") return cont(pushlex("]"), arrayLiteral, poplex, maybeop);
    if (type == "{") return contCommasep(objprop, "}", null, maybeop);
    if (type == "quasi") return pass(quasi, maybeop);
    if (type == "new") return cont(maybeTarget(noComma));
    return cont();
  }
  function maybeexpression(type) {
    if (type.match(/[;\}\)\],]/)) return pass();
    return pass(expression);
  }
  function maybeexpressionNoComma(type) {
    if (type.match(/[;\}\)\],]/)) return pass();
    return pass(expressionNoComma);
  }

  function maybeoperatorComma(type, value) {
    if (type == ",") return cont(expression);
    return maybeoperatorNoComma(type, value, false);
  }
  function maybeoperatorNoComma(type, value, noComma) {
    var me = noComma == false ? maybeoperatorComma : maybeoperatorNoComma;
    var expr = noComma == false ? expression : expressionNoComma;
    if (type == "=>") return cont(pushcontext, noComma ? arrowBodyNoComma : arrowBody, popcontext);
    if (type == "operator") {
      if (/\+\+|--/.test(value)) return cont(me);
      if (value == "?") return cont(expression, expect(":"), expr);
      return cont(expr);
    }
    if (type == "quasi") { return pass(quasi, me); }
    if (type == ";") return;
    if (type == "(") return contCommasep(expressionNoComma, ")", "call", me);
    if (type == ".") return cont(property, me);
    if (type == "[") return cont(pushlex("]"), maybeexpression, expect("]"), poplex, me);
  }
  function quasi(type, value) {
    if (type != "quasi") return pass();
    if (value.slice(value.length - 2) != "${") return cont(quasi);
    return cont(expression, continueQuasi);
  }
  function continueQuasi(type) {
    if (type == "}") {
      cx.marked = "string-2";
      cx.state.tokenize = tokenQuasi;
      return cont(quasi);
    }
  }
  function arrowBody(type) {
    findFatArrow(cx.stream, cx.state);
    return pass(type == "{" ? statement : expression);
  }
  function arrowBodyNoComma(type) {
    findFatArrow(cx.stream, cx.state);
    return pass(type == "{" ? statement : expressionNoComma);
  }
  function maybeTarget(noComma) {
    return function(type) {
      if (type == ".") return cont(noComma ? targetNoComma : target);
      else return pass(noComma ? expressionNoComma : expression);
    };
  }
  function target(_, value) {
    if (value == "target") { cx.marked = "keyword"; return cont(maybeoperatorComma); }
  }
  function targetNoComma(_, value) {
    if (value == "target") { cx.marked = "keyword"; return cont(maybeoperatorNoComma); }
  }
  function maybelabel(type) {
    if (type == ":") return cont(poplex, statement);
    return pass(maybeoperatorComma, expect(";"), poplex);
  }
  function property(type) {
    if (type == "variable") {cx.marked = "property"; return cont();}
  }
  function objprop(type, value) {
    if (type == "async") {
      cx.marked = "property";
      return cont(objprop);
    } else if (type == "variable" || cx.style == "keyword") {
      cx.marked = "property";
      if (value == "get" || value == "set") return cont(getterSetter);
      return cont(afterprop);
    } else if (type == "number" || type == "string") {
      cx.marked = jsonldMode ? "property" : (cx.style + " property");
      return cont(afterprop);
    } else if (type == "jsonld-keyword") {
      return cont(afterprop);
    } else if (type == "modifier") {
      return cont(objprop)
    } else if (type == "[") {
      return cont(expression, expect("]"), afterprop);
    } else if (type == "spread") {
      return cont(expression);
    } else if (type == ":") {
      return pass(afterprop)
    }
  }
  function getterSetter(type) {
    if (type != "variable") return pass(afterprop);
    cx.marked = "property";
    return cont(functiondef);
  }
  function afterprop(type) {
    if (type == ":") return cont(expressionNoComma);
    if (type == "(") return pass(functiondef);
  }
  function commasep(what, end) {
    function proceed(type, value) {
      if (type == ",") {
        var lex = cx.state.lexical;
        if (lex.info == "call") lex.pos = (lex.pos || 0) + 1;
        return cont(function(type, value) {
          if (type == end || value == end) return pass()
          return pass(what)
        }, proceed);
      }
      if (type == end || value == end) return cont();
      return cont(expect(end));
    }
    return function(type, value) {
      if (type == end || value == end) return cont();
      return pass(what, proceed);
    };
  }
  function contCommasep(what, end, info) {
    for (var i = 3; i < arguments.length; i++)
      cx.cc.push(arguments[i]);
    return cont(pushlex(end, info), commasep(what, end), poplex);
  }
  function block(type) {
    if (type == "}") return cont();
    return pass(statement, block);
  }
  function maybetype(type, value) {
    if (isTS) {
      if (type == ":") return cont(typeexpr);
      if (value == "?") return cont(maybetype);
    }
  }
  function typeexpr(type) {
    if (type == "variable") {cx.marked = "variable-3"; return cont(afterType);}
    if (type == "{") return cont(commasep(typeprop, "}"))
    if (type == "(") return cont(commasep(typearg, ")"), maybeReturnType)
  }
  function maybeReturnType(type) {
    if (type == "=>") return cont(typeexpr)
  }
  function typeprop(type) {
    if (type == "variable" || cx.style == "keyword") {
      cx.marked = "property"
      return cont(typeprop)
    } else if (type == ":") {
      return cont(typeexpr)
    }
  }
  function typearg(type) {
    if (type == "variable") return cont(typearg)
    else if (type == ":") return cont(typeexpr)
  }
  function afterType(type, value) {
    if (value == "<") return cont(commasep(typeexpr, ">"), afterType)
    if (type == "[") return cont(expect("]"), afterType)
  }
  function vardef() {
    return pass(pattern, maybetype, maybeAssign, vardefCont);
  }
  function pattern(type, value) {
    if (type == "modifier") return cont(pattern)
    if (type == "variable") { register(value); return cont(); }
    if (type == "spread") return cont(pattern);
    if (type == "[") return contCommasep(pattern, "]");
    if (type == "{") return contCommasep(proppattern, "}");
  }
  function proppattern(type, value) {
    if (type == "variable" && !cx.stream.match(/^\s*:/, false)) {
      register(value);
      return cont(maybeAssign);
    }
    if (type == "variable") cx.marked = "property";
    if (type == "spread") return cont(pattern);
    if (type == "}") return pass();
    return cont(expect(":"), pattern, maybeAssign);
  }
  function maybeAssign(_type, value) {
    if (value == "=") return cont(expressionNoComma);
  }
  function vardefCont(type) {
    if (type == ",") return cont(vardef);
  }
  function maybeelse(type, value) {
    if (type == "keyword b" && value == "else") return cont(pushlex("form", "else"), statement, poplex);
  }
  function forspec(type) {
    if (type == "(") return cont(pushlex(")"), forspec1, expect(")"), poplex);
  }
  function forspec1(type) {
    if (type == "var") return cont(vardef, expect(";"), forspec2);
    if (type == ";") return cont(forspec2);
    if (type == "variable") return cont(formaybeinof);
    return pass(expression, expect(";"), forspec2);
  }
  function formaybeinof(_type, value) {
    if (value == "in" || value == "of") { cx.marked = "keyword"; return cont(expression); }
    return cont(maybeoperatorComma, forspec2);
  }
  function forspec2(type, value) {
    if (type == ";") return cont(forspec3);
    if (value == "in" || value == "of") { cx.marked = "keyword"; return cont(expression); }
    return pass(expression, expect(";"), forspec3);
  }
  function forspec3(type) {
    if (type != ")") cont(expression);
  }
  function functiondef(type, value) {
    if (value == "*") {cx.marked = "keyword"; return cont(functiondef);}
    if (type == "variable") {register(value); return cont(functiondef);}
    if (type == "(") return cont(pushcontext, pushlex(")"), commasep(funarg, ")"), poplex, maybetype, statement, popcontext);
  }
  function funarg(type) {
    if (type == "spread") return cont(funarg);
    return pass(pattern, maybetype, maybeAssign);
  }
  function classExpression(type, value) {
    // Class expressions may have an optional name.
    if (type == "variable") return className(type, value);
    return classNameAfter(type, value);
  }
  function className(type, value) {
    if (type == "variable") {register(value); return cont(classNameAfter);}
  }
  function classNameAfter(type, value) {
    if (value == "extends" || value == "implements") return cont(isTS ? typeexpr : expression, classNameAfter);
    if (type == "{") return cont(pushlex("}"), classBody, poplex);
  }
  function classBody(type, value) {
    if (type == "variable" || cx.style == "keyword") {
      if ((value == "static" || value == "get" || value == "set" ||
           (isTS && (value == "public" || value == "private" || value == "protected" || value == "readonly" || value == "abstract"))) &&
          cx.stream.match(/^\s+[\w$\xa1-\uffff]/, false)) {
        cx.marked = "keyword";
        return cont(classBody);
      }
      cx.marked = "property";
      return cont(isTS ? classfield : functiondef, classBody);
    }
    if (value == "*") {
      cx.marked = "keyword";
      return cont(classBody);
    }
    if (type == ";") return cont(classBody);
    if (type == "}") return cont();
  }
  function classfield(type, value) {
    if (value == "?") return cont(classfield)
    if (type == ":") return cont(typeexpr, maybeAssign)
    return pass(functiondef)
  }
  function afterExport(_type, value) {
    if (value == "*") { cx.marked = "keyword"; return cont(maybeFrom, expect(";")); }
    if (value == "default") { cx.marked = "keyword"; return cont(expression, expect(";")); }
    return pass(statement);
  }
  function afterImport(type) {
    if (type == "string") return cont();
    return pass(importSpec, maybeFrom);
  }
  function importSpec(type, value) {
    if (type == "{") return contCommasep(importSpec, "}");
    if (type == "variable") register(value);
    if (value == "*") cx.marked = "keyword";
    return cont(maybeAs);
  }
  function maybeAs(_type, value) {
    if (value == "as") { cx.marked = "keyword"; return cont(importSpec); }
  }
  function maybeFrom(_type, value) {
    if (value == "from") { cx.marked = "keyword"; return cont(expression); }
  }
  function arrayLiteral(type) {
    if (type == "]") return cont();
    return pass(commasep(expressionNoComma, "]"));
  }

  function isContinuedStatement(state, textAfter) {
    return state.lastType == "operator" || state.lastType == "," ||
      isOperatorChar.test(textAfter.charAt(0)) ||
      /[,.]/.test(textAfter.charAt(0));
  }

  // Interface

  return {
    startState: function(basecolumn) {
      var state = {
        tokenize: tokenBase,
        lastType: "sof",
        cc: [],
        lexical: new JSLexical((basecolumn || 0) - indentUnit, 0, "block", false),
        localVars: parserConfig.localVars,
        context: parserConfig.localVars && {vars: parserConfig.localVars},
        indented: basecolumn || 0
      };
      if (parserConfig.globalVars && typeof parserConfig.globalVars == "object")
        state.globalVars = parserConfig.globalVars;
      return state;
    },

    token: function(stream, state) {
      if (stream.sol()) {
        if (!state.lexical.hasOwnProperty("align"))
          state.lexical.align = false;
        state.indented = stream.indentation();
        findFatArrow(stream, state);
      }
      if (state.tokenize != tokenComment && stream.eatSpace()) return null;
      var style = state.tokenize(stream, state);
      if (type == "comment") return style;
      state.lastType = type == "operator" && (content == "++" || content == "--") ? "incdec" : type;
      return parseJS(state, style, type, content, stream);
    },

    indent: function(state, textAfter) {
      if (state.tokenize == tokenComment) return CodeMirror.Pass;
      if (state.tokenize != tokenBase) return 0;
      var firstChar = textAfter && textAfter.charAt(0), lexical = state.lexical, top
      // Kludge to prevent 'maybelse' from blocking lexical scope pops
      if (!/^\s*else\b/.test(textAfter)) for (var i = state.cc.length - 1; i >= 0; --i) {
        var c = state.cc[i];
        if (c == poplex) lexical = lexical.prev;
        else if (c != maybeelse) break;
      }
      while ((lexical.type == "stat" || lexical.type == "form") &&
             (firstChar == "}" || ((top = state.cc[state.cc.length - 1]) &&
                                   (top == maybeoperatorComma || top == maybeoperatorNoComma) &&
                                   !/^[,\.=+\-*:?[\(]/.test(textAfter))))
        lexical = lexical.prev;
      if (statementIndent && lexical.type == ")" && lexical.prev.type == "stat")
        lexical = lexical.prev;
      var type = lexical.type, closing = firstChar == type;

      if (type == "vardef") return lexical.indented + (state.lastType == "operator" || state.lastType == "," ? lexical.info + 1 : 0);
      else if (type == "form" && firstChar == "{") return lexical.indented;
      else if (type == "form") return lexical.indented + indentUnit;
      else if (type == "stat")
        return lexical.indented + (isContinuedStatement(state, textAfter) ? statementIndent || indentUnit : 0);
      else if (lexical.info == "switch" && !closing && parserConfig.doubleIndentSwitch != false)
        return lexical.indented + (/^(?:case|default)\b/.test(textAfter) ? indentUnit : 2 * indentUnit);
      else if (lexical.align) return lexical.column + (closing ? 0 : 1);
      else return lexical.indented + (closing ? 0 : indentUnit);
    },

    electricInput: /^\s*(?:case .*?:|default:|\{|\})$/,
    blockCommentStart: jsonMode ? null : "/*",
    blockCommentEnd: jsonMode ? null : "*/",
    lineComment: jsonMode ? null : "//",
    fold: "brace",
    closeBrackets: "()[]{}''\"\"``",

    helperType: jsonMode ? "json" : "javascript",
    jsonldMode: jsonldMode,
    jsonMode: jsonMode,

    expressionAllowed: expressionAllowed,
    skipExpression: function(state) {
      var top = state.cc[state.cc.length - 1]
      if (top == expression || top == expressionNoComma) state.cc.pop()
    }
  };
});

CodeMirror.registerHelper("wordChars", "javascript", /[\w$]/);

CodeMirror.defineMIME("text/javascript", "javascript");
CodeMirror.defineMIME("text/ecmascript", "javascript");
CodeMirror.defineMIME("application/javascript", "javascript");
CodeMirror.defineMIME("application/x-javascript", "javascript");
CodeMirror.defineMIME("application/ecmascript", "javascript");
CodeMirror.defineMIME("application/json", {name: "javascript", json: true});
CodeMirror.defineMIME("application/x-json", {name: "javascript", json: true});
CodeMirror.defineMIME("application/ld+json", {name: "javascript", jsonld: true});
CodeMirror.defineMIME("text/typescript", { name: "javascript", typescript: true });
CodeMirror.defineMIME("application/typescript", { name: "javascript", typescript: true });

});
;
 /*********************************************************/
/********************
*
*   Chapitre 1
*
*********************/
function portalLevel1() {
    if (isFr) {
        var $portalLevel1 = new Portal({
            title: 'Le Pixel',
            notion: 'Chiffres pairs ou impairs ? À vous de retranscrire la chaîne de chiffre proposée',
            callback: 'loadLevel1()'
        });
    } else {
        var $portalLevel1 = new Portal({
            title: 'Level 1',
            notion: 'The Pixel',
            callback: 'loadLevel1()'
        });
    }
    
    arrayCookieUser.currentLevel = 1;
    createCookie(Username, arrayCookieUser, 20);
}

function loadLevel1() {
    binaire = '';
    initEcrin();
    startTime = Date.now();
    countLevel = 1;
    if (!level1IsVisited) {
        var $popinSlider = new Popin({
            isSlider: true,
            type: 'encyclo',
            content: content['encyclo1jeu1']
        });

        tipsLevel1 = {
            0 : content['jeu1astuce1'],
            1 : content['jeu1astuce2'],
            2 : content['jeu1astuce3']
        }
        //var tips1 = []
        Tip1 = new Tip({
            'tips' : tipsLevel1,
            'duration' : 4000,
            'level': 1
        })
    } else {
        if (arrayCookieUser.$countHelp <=3) {
            switch (arrayCookieUser.$countHelp) {
                case 0:
                tipsLevel1 = {
                    0 : content['jeu1astuce1'],
                    1 : content['jeu1astuce2'],
                    2 : content['jeu1astuce3']
                }
                break;
                case 1:
                tipsLevel1 = {
                    0 : content['jeu1astuce1'],
                    1 : content['jeu1astuce2'],
                    2 : content['jeu1astuce3']
                }
                break;
                case 2:
                tipsLevel1 = {
                    0 : content['jeu1astuce1'],
                    1 : content['jeu1astuce2'],
                    2 : content['jeu1astuce3']
                }
                break;
            }
            
            //var tips1 = []
            Tip1 = new Tip({
                'tips' : tipsLevel1,
                'duration' : 4000,
                'level': 1
            })
        }
    }
    
    level1IsVisited = true;
    arrayCookieUser.level1IsVisited = true;
    createCookie(Username, arrayCookieUser, 20);
    alenumber = "";
    $('main').loadLevel('level1', function(){
        //generation du nombre aléatoir a 24 chiffres + creation d'une chaine binaire
        var heightNumber =  16;
        var min = Math.ceil(0);
        var max = Math.floor(9);
        
        for (var i = 0; i < heightNumber; i++){
            var alea = Math.floor(Math.random() * (max - min +1)) + min;
            if (alea % 2 == 0) {
                binaire = binaire+'0';
            }
            else { binaire = binaire+'1'; }
            //console.log( i % 4 )
            if (i != 0) {
                if (i % 4 === 0) { alenumber += '</span><span class="numbercase">'+alea+'';} else {alenumber += ''+alea+'';}
            } else {
                alenumber += '<span class="numbercase">'+alea+'';
            }
            
            
        }

        alenumber += '</span>';
        $('.js-alenumber').html(alenumber);
        
        var div = $('.tableau ul li div');

        div.on('touch click', function(e) {
            $(this).toggleClass('black');
        });
    });
}


/********************
*
*   Fonctions du Chapitre 1
*
*********************/
function submitLevel1() {
    console.log('submit lv1')
    endTime = Date.now();

    var myTime = (endTime - startTime)/1000;

    var chaineTableau = '';
    var div = $('.tableau ul li div');

    $(div).each(function() {
        if($( this ).hasClass( "black" )){
            chaineTableau = chaineTableau + '0';
        }
        else{
            chaineTableau = chaineTableau + '1';
        }
    });
    if (chaineTableau == binaire || testing) { //{TEST} Always True

        if (!level2IsVisited) {
            if (myTime <= 30) {
                var $popinError = new Popin({
                    content: content['jeu1d'],
                    type: 'succes',
                    callback: 'popinEndLevel1()',
                    icon: 'succes1'
                });
            } else {
                var $popinError = new Popin({
                    content: content['jeu1d'],
                    type: 'succes',
                    callback: 'portalLevel2()',
                    icon: 'succes1'
                });
            }

            if(Tip1){ Tip1.destroy('Tip1');}
        } else {
            if (myTime <= 30) { popinEndLevel1();} else { portalLevel2();}
        } 
        
        
    }else{var $popinError = new Popin({
        content: content['erreur'],
    });}
}
function popinEndLevel1 () {
    var exist = false;
    for (var i = 0; i < $tabSuccess.length; i++) {
        if ($tabSuccess[i] === 'succes5') {
            exist = true;
            break;
        }
    }
    if (!exist) {
        var $popinSuccessTime = new Popin({
            content: content['jeu1s'],
            type: 'succes',
            callback: 'portalLevel2()',
            icon: 'succes5'
        });
    }else {
        portalLevel2();
    }
    
}
;
 /*********************************************************/
/********************
*
*   Chapitre 2
*
*********************/
function portalLevel2() {
    if (isFr) {
        var $portalLevel2 = new Portal({
            title: 'La Couleur',
            notion: 'Retrouvez les couleurs perdues du tableau !',
            callback: 'loadLevel2()'
        });
    } else {
        var $portalLevel2 = new Portal({
            title: 'The Color',
            notion: 'Blabla',
            callback: 'loadLevel2()'
        });
    }
    arrayCookieUser.currentLevel = 2;
    createCookie(Username, arrayCookieUser, 20);
}

function loadLevel2() {
    startTime = Date.now();
    if (!ecrin) {initEcrin()}
    $('.help-button').removeClass("first-tip");
    countLevel = 2;
    if (!level2IsVisited) {
        var $popinSlider = new Popin({
            isSlider: true,
            type: 'encyclo',
            content: content['encyclo1jeu2']
        });
        addHelp(helpTitle(1, 1), content['jeu1astuce1']);
        addHelp(helpTitle(1, 2), content['jeu1astuce2']);
        addHelp(helpTitle(1, 3), content['jeu1astuce3']);   

        tipsLevel2 = {
            0 : content['jeu2astuce1'],
            1 : content['jeu2astuce2'],
            2 : content['jeu2astuce3']
        }
        Tip2 = new Tip({
            'tips' : tipsLevel2,
            'duration' : 4000,
            'level': 2
        }) 
    }


    level2IsVisited = true;
    arrayCookieUser.level2IsVisited = true;
    createCookie(Username, arrayCookieUser, 20);
    $('main').loadLevel('level2', function() {
       var titleExplain = isFr ? 'Les Variables' : 'Variables';
        var info = new Popin({
            type: 'info',
            title: titleExplain,
            content: content['variable'],
            isSlider: true, 
            $popin: $('.js-popup-info'),
            $open: $('.js-icon-info')
        })

        var pixel = $('.js-pixel');
        pixel.on('touch click', showModal) //{DEV}

        //CodeMirror
        textArea = $('.js-code-mirror')[0];
        codeConfig = {
            mode: "text/javascript",
            theme: "icecoder", 
            lineWrapping: true, 
            lineNumbers: true, 
            autofocus: false
            //matchBrackets: true
        };
        //Initialisation des variables
        var defaultValue = false;

        codeConfig.readOnly = 'nocursor';





        //Initialisation de codeMirror
        codeMirror = CodeMirror.fromTextArea(textArea, codeConfig);
        //cm.addKeyMap(map: object, bottom: boolean) || extraKeys: Dans la config du CM
        codeMirror.addKeyMap({
            Enter: function (cm) {
                enterKeyMap();
            }
        });
        $('.cm-s-icecoder').addClass('only-color');

        $('.js-framewrapper').children().each(function () {
            $(this).data('rvb', {
                red: defaultValue,
                green: defaultValue,
                blue: defaultValue
            }).data('name', 'pixel_'+$(this).index());
        });

        //Change Active Pixel
        $('.js-framewrapper .js-pixel').click(function () {
            $('.pixel-active').removeClass('pixel-active');
            $(this).addClass('pixel-active');
            var thisColors = $(this).data('rvb');
            resetCheckboxes(thisColors.red, thisColors.green, thisColors.blue);
            resetCodePixel($('.pixel-active').data('name'), thisColors.red, thisColors.green, thisColors.blue);
        })

        //Run Code
        $('.js-run-code').click(function () {
            runCodeLevel2();
        });

        $('.js-apply-color').on('touch click', hideModal)

        //Change input
        $('.checkboxes input:checkbox').change(function () {
            var name = $(this).attr('class');
            var thisPixel = $('.pixel-active').data('rvb');
            var val;
            if ($(this).is(':checked')) {
                thisPixel[name] = true;
                val = 255;
            }
            else {
                thisPixel[name] = false;
                val = 0;
            }
            switch (name) {
                case 'red':
                    $(this).parent().css('background-color', 'rgb(' + val + ', 0, 0)');
                    break;
                case 'green':
                    $(this).parent().css('background-color', 'rgb(0, ' + val + ', 0)');
                    break;
                case 'blue':
                    $(this).parent().css('background-color', 'rgb(0, 0, ' + val + ')');
                    break;
                default:
                    break;
            }
            resetCodePixel($('.pixel-active').data('name'), thisPixel.red, thisPixel.green, thisPixel.blue);
            colorPixelRVB();
            //verifPixelLevel2();
        })
    })
}

function runCodeLevel2() {
    var code = codeMirror.getValue();

    try {
        eval(code)

        pixel = eval($('.pixel-active').data('name'));
        //console.log(pixel)                    
        $('.pixel-active').data('rvb', {
            red: pixel.red, 
            green: pixel.green, 
            blue: pixel.blue
        });
        resetCheckboxes(pixel.red, pixel.green, pixel.blue);
        resetCodePixel($('.pixel-active').data('name'), pixel.red, pixel.green, pixel.blue);
        colorPixelRVB();
        //verifPixelLevel2();
    } catch(e) {
        var resetPixel = $('.pixel-active').data('rvb');

        resetCodePixel($('.pixel-active').data('name'), resetPixel.red, resetPixel.green, resetPixel.blue);
    }
}



/********************
*
*   Fonctions du Chapitre 2
*
*********************/

function submitLevel2() {
    endTime = Date.now();
    var numCorrect = 0;
    var pixels = $('.js-pixel');
    var myTime = (endTime - startTime)/1000;

    for (i=0; i < pixels.length; i++) {
        var rvb = $(pixels[i]).data('rvb'),
            pixelName = $(pixels[i]).data('name'),
            correctRVB = thisLvlAnswers[pixelName].rvb;

        if (JSON.stringify(rvb) == JSON.stringify(correctRVB)) {
            numCorrect++;
        } else {
            break;
        }
    }

    if (numCorrect == pixels.length || testing) { //{}
        
        if (!level3IsVisited) {

            if (myTime <= 40) {
                var $popinError = new Popin({
                    content: content['jeu2d'],
                    type: 'succes',
                    callback: 'popinEndLevel2()',
                    icon: 'succes2'
                });
            } else {
                var $popinError = new Popin({
                    content: content['jeu2d'],
                    type: 'succes',
                    callback: 'portalLevel3()',
                    icon: 'succes2'
                });
            }

            if(Tip2){Tip2.destroy('Tip2')};
        } else {
            if (myTime <= 40) {
                popinEndLevel2();
            } else {
                portalLevel3();                
            }
        }
    } else {
        var $popinError = new Popin({
            content: content['erreur']
        });
    }

}
function popinEndLevel2 () {
    var exist = false;
    for (var i = 0; i < $tabSuccess.length; i++) {
        if ($tabSuccess[i] === 'succes6') {
            exist = true;
            break;
        }
    }
    if (!exist) {
        var $popinSuccessTime = new Popin({
                content: content['jeu2s'],
                type: 'succes',
                callback: 'portalLevel3()',
                icon: 'succes6'
            });
    }else {
        portalLevel3();
    }
};
 /*********************************************************/
/********************
*
*   Chapitre 3
*
*********************/

function portalLevel3() {
    if (isFr) {
        var $portalLevel2 = new Portal({
            title: 'La Couleur Additive',
            notion: 'Reproduisez les teintes de l’un des dégradés de Morellet, soyez méticuleux !',
            callback: 'loadLevel3()'
        });
    } else {
        var $portalLevel2 = new Portal({
            title: 'The Additive Color Process',
            notion: 'Blabla',
            callback: 'loadLevel3()'
        });
    }
    arrayCookieUser.currentLevel = 3;
    createCookie(Username, arrayCookieUser, 20);
}


function loadLevel3() {
    startTime = Date.now();
    if (!ecrin) {initEcrin()}
    countLevel = 3;
    if (!level3IsVisited) {
        var $popinSlider = new Popin({
            isSlider: true,
            type: 'encyclo',
            content: content['encyclo1jeu3']
        });
        addHelp(helpTitle(2, 1), content['jeu2astuce1']);
        addHelp(helpTitle(2, 2), content['jeu2astuce2']);
        addHelp(helpTitle(2, 3), content['jeu2astuce3']); 
        tipsLevel3 = {
            0 : content['jeu3astuce1'],
            1 : content['jeu3astuce2'],
            2 : content['jeu3astuce3']
        }
        //var tips1 = []
        Tip3 = new Tip({
            'tips' : tipsLevel3,
            'duration' : 4000,
            'level': 3
        })
    } else {
        var $popinSlider = new Popin({
            content: content['jeu3reloadpopin']
        });
    }
    var titleExplain = isFr ? 'Validation du niveau 3' : 'Level 3 validation';
    var info = new Popin({
            type: 'info',
            title: titleExplain,
            content: content['lvl3explanation'],
            $popin: $('.js-popup-info'),
            $open: $('.js-icon-info')
        })
    level3IsVisited = true;
    arrayCookieUser.level3IsVisited = true;
    createCookie(Username, arrayCookieUser, 20);
    $('main').loadLevel('level3', function () {

        var pixel = $('.square');

        //CodeMirror
        textArea = $('.js-code-mirror')[0];
        codeConfig = {
            mode: "text/javascript",
            theme: "icecoder",
            lineWrapping: true,
            lineNumbers: true,
            autofocus: false
            //matchBrackets: true
        }
        //Initialisation des variables
        var defaultValue = 0;

        codeConfig.readOnly = 'nocursor';

        //thisLvlAnswers = answers.lvl3;
        //console.log(thisLvlAnswers)

        //Initialisation de codeMirror
        codeMirror = CodeMirror.fromTextArea(textArea, codeConfig);
        //        codeMirror.addKeyMap({
        //            Enter: function (cm) {
        //                enterKeyMap();
        //            }
        //        });
        $('.cm-s-icecoder').addClass('only-color');

        //Run Code
        $('.js-run-code').click(function(){
            runCodeLevel3();
        });


        //Change Active Pixel
        pixel.on('touch click', function() {
            if (!$(this).hasClass('.correct')) {
                $('.pixel-active').removeClass('pixel-active');
                $(this).addClass('pixel-active');
                var thisColors = $(this).data('rvb');
                //console.log(thisColors)
                resetSliders(thisColors.red, thisColors.green, thisColors.blue);
                disableSliders($(this).data('validated'));
                resetCodePixel($('.pixel-active').data('name'), thisColors.red, thisColors.green, thisColors.blue);
                showModal();
            }
        })

        $('.apply-color').on('touch click', function(){
            $('.pixel-active').verifyPixel();
        })


        $('#chooseFrameLvl3 input[type="radio"]').on('change', function() {
            which = $('#chooseFrameLvl3 input[type="radio"]:checked').attr('id');
            //console.log(which)
        })

        $('.js-close-popup-encyclo, .js-overlay').on('touch click', function() {
            //console.log('initiating level')
            $('input[name="chooseFrameLvl3"]').off();
            var varNames = [];
            $(content['jeu3variables_'+which]).map(function() {
                varNames.push($(this).text())
            })
            //console.log(varNames)
            $('.js-framewrapper').children().each(function(){
                $(this).data('rvb', {red: defaultValue, green: defaultValue, blue: defaultValue}).data('name', varNames[$(this).index()]).data('validated', {red:false, green:false, blue:false});
            });
        })

        //Change input
        $('input[type=range]').on("input", function(){

            var name = $(this).attr('class');
            var thisPixel = $('.pixel-active').data('rvb');

            switch(name) {
                case 'red':
                    $(this).parent().css('background-color', 'rgb('+$(this).val()+', 0, 0)');
                    break;
                case 'green': 
                    $(this).parent().css('background-color', 'rgb(0, '+$(this).val()+', 0)');
                    break;
                case 'blue':
                    $(this).parent().css('background-color', 'rgb(0, 0, '+$(this).val()+')');
                    break;
                default:
                    break;
            }

            thisPixel[name] = $(this).val();
            resetCodePixel($('.pixel-active').data('name'), thisPixel.red, thisPixel.green, thisPixel.blue);
            colorPixel();
        })

    });
}

function runCodeLevel3() {
    //console.log('running code')
    var code = codeMirror.getValue();

    try {
        eval(code)

        var pixelBorder = eval($('.pixel-active').data('name'));

        $.each(pixelBorder, function(i, value) {
            if (typeof value == 'number') {
                if (value < 0) {
                    pixelBorder[i] = 0;
                }
                if (value > 255) {
                    pixelBorder[i] = 255;
                }
            } else {
                pixelBorder[i] = 0
            }
        });

        $('.pixel-active').data('rvb', {red: pixelBorder.red, green: pixelBorder.green, blue: pixelBorder.blue});

        resetSliders(pixelBorder.red, pixelBorder.green, pixelBorder.blue);

        resetCodePixel($('.pixel-active').data('name'), pixelBorder.red, pixelBorder.green, pixelBorder.blue);
        colorPixel();

    } catch(e) {
        alert ('pls input only nu')

        var resetPixel = $('.pixel-active').data('rvb');

        resetCodePixel($('.pixel-active').data('name'), resetPixel.red, resetPixel.green, resetPixel.blue);
    }
}


/********************
*
*   Fonctions du Chapitre 3
*
*********************/

function submitLevel3() {
    endTime = Date.now();
    var myTime = (endTime - startTime)/1000;


    $.each($('.square').not('correct'), function(i) {
        $(this).removeClass('active-pixel');
        $(this).verifyPixel();
    });

    if ($('.correct').length == $('.square').length || testing) { //{TEST}
        if (!level4IsVisited) {

            if (myTime <= 120) { 
                var $popinError = new Popin({
                    content: content['jeu3d'],
                    type: 'succes',
                    callback: 'popinEndLevel3()',
                    icon: 'succes3'
                });
            } else {
                var $popinError = new Popin({
                    content: content['jeu3d'],
                    type: 'succes',
                    callback: 'portalLevel4()',
                    icon: 'succes3'
                });
            }

            if (Tip3) Tip3.destroy('Tip3');
        } else {
            if (myTime <= 120) {
                popinEndLevel3();
            } else {
                portalLevel4();                
            }
        }

    } else {
        var $popinError = new Popin({
            content: content['erreur']
        });
    }

}

$.fn.verifyPixel = function() {
    //console.log('verifying');
    //console.log($(this))
    var rvb = $(this).data('rvb'),
        validated = $(this).data('validated'),
        pixelName = $(this).data('name'),
        correctRvb = thisLvlAnswers[which][pixelName],
        isCorrect = true;

    //console.log(validated)

    $.each(correctRvb, function(color, value){
        //console.log(color, value);
        if (value.length > 1) { 
            if (!(rvb[color] < value[0] || rvb[color] > value[1])) { 
                validated[color] = true;
            }
        } else { 
            if (rvb[color] == value[0]) { 
                validated[color] = true;
            }
        }     
    }) 

    $(this).data('validated', validated);
    if ($(this).hasClass('pixel-active')) {
        disableSliders(validated);
    }

    //console.log(isCorrect);
    if (validated.red && validated.green && validated.blue) {
        $(this).removeClass('incorrect')
        $(this).addClass('correct')
        setTimeout(hideModal, 500);
    } else {
        $(this).addClass('incorrect') 
    }
}

function popinExplainLevel3() {
    var title = isFr ? 'Validation du niveau 3' : 'Level 3 validation';
    var popinExplain = new Popin({
        content: content['lvl3explanation'],
        type: 'info',
        title: title
    });
}

function popinEndLevel3 () {
    var exist = false;
    for (var i = 0; i < $tabSuccess.length; i++) {
        if ($tabSuccess[i] === 'succes7') {
            exist = true;
            break;
        }
    }
    if (!exist) {
        var $popinSuccessTime = new Popin({
            content: content['jeu3s'],
            type: 'succes',
            callback: 'portalLevel4()',
            icon: 'succes7'
        });
    }else {
        portalLevel4();
    }
}
;
 /*********************************************************/
/********************
*
*   Chapitre 4
*
*********************/
function portalLevel4() {
    if (isFr) {
        var $portalLevel2 = new Portal({
            title: 'Le Positionnement',
            notion: 'Repositionnez les 9 carrés superposés et recréer l’oeuvre de Morellet',
            callback: 'loadLevel4()'
        });
    } else {
        var $portalLevel2 = new Portal({
            title: 'Positionning',
            notion: 'Blabla',
            callback: 'loadLevel4()'
        });
    }
    arrayCookieUser.currentLevel = 4;
    createCookie(Username, arrayCookieUser, 20);
}
function loadLevel4() {
    if (!ecrin) {initEcrin()}
    countLevel = 4;
    if (!level4IsVisited) {
        var $popinSlider = new Popin({
            isSlider: true,
            type: 'encyclo',
            content: content['encyclo1jeu4']
        });
        addHelp(helpTitle(3, 1), content['jeu3astuce1']);
        addHelp(helpTitle(3, 2), content['jeu3astuce2']);
        addHelp(helpTitle(3, 3), content['jeu3astuce3']); 

        tipsLevel4 = {
            0 : content['jeu4astuce1'],
            1 : content['jeu4astuce2'],
            2 : content['jeu4astuce3']
        }
        Tip4 = new Tip({
            'tips' : tipsLevel4,
            'duration' : 4000,
            'level': 4
        })
    }
    var titleExplain = isFr ? 'Les Fonctions' : 'Functions';
    var info = new Popin({
            type: 'info',
            title: titleExplain,
            content: content['fonction'],
            $popin: $('.js-popup-info'),
            $open: $('.js-icon-info')
        })
    level4IsVisited = true;
    arrayCookieUser.level4IsVisited = true;
    createCookie(Username, arrayCookieUser, 20);
    $('main').loadLevel('level4', function () {

        var image = $('.js-image-object');
        var holdTimeout = '';


        //CodeMirror
        textArea = $('.js-code-mirror')[0];
        codeConfig = {
            mode: "text/javascript",
            theme: "icecoder", 
            lineWrapping: true, 
            lineNumbers: true, 
            autofocus: false,
            readOnly: 'nocursor'
            //matchBrackets: true
        }
        //Initialisation des variables
        codeConfig.readOnly = 'nocursor';




        //thisLvlAnswers = answers.lvl4;

        //Initialisation de codeMirror
        codeMirror = CodeMirror.fromTextArea(textArea, codeConfig);

        //        codeMirror.addKeyMap({
        //            Enter: function (cm) {
        //
        //            }
        //        });

        image.each(function () {
            $(this).data('pos', {
                x: 0,
                y: 0,
                rot: 0
            }).data('name', 'img_'+$(this).index());
        });


        //        $('.imageObject').bind('mousedown touchstart', function() {
        //            console.log($(this))
        //            var that = $(this)
        //            holdTimeout = setTimeout(add.bind(null, that), 1000);
        //        })
        //        
        //        $('.imageObject').bind('mouseup touchend', function() {
        //            console.log($(this))
        //            if ($(this).hasClass('hovered')) {
        //                $(this).removeClass('hovered')
        //            } else {
        //                clearTimeout(holdTimeout);
        //            }
        //        })
        //        
        //        function add(that) {
        //            console.log(that)
        //            that.addClass('hovered');
        //        }

        image.bind('mousedown touchstart', function() {
            $(this).addClass('hovered');
        })

        image.bind('mouseup touchend', function() {
            if ($(this).hasClass('hovered')) {
                $(this).removeClass('hovered')
            }
        })


        //Change Active Pixel
        image.on('touch click', function () {
            showModal();
            $('.img-active').removeClass('img-active');
            $(this).addClass('img-active');

            resetCode();
        });




        //Run Code
        $('.js-run-code').on('touch click', function () {
            runCodeLevel4();
            hideModal();
        });

        $('.functions-btn .btn').click(function() {
            console.log($(this))
            addCode($(this));
        })

        $('.reinit-img').click(reinitImg);

        codeMirror.setValue('init');
        //resetCode();

    })

}



function runCodeLevel4() {
    console.log('running code lvl4')
    // console.log($('.imgActive').data('pos'))
    //alert('ok')
    var code = codeMirror.getValue();
    var oldPos = $('.img-active').data('pos'); 
    eval(code)
    applyPosition();
    resetCode();
}



/********************
*
*   Fonctions du Chapitre 4
*
*********************/

function submitLevel4() {
    //Validate
    endTime = Date.now();
    var myTime = (endTime - startTime)/1000;


    var isCorrect = 0;
    $.each($('.js-image-object'), function(i) {
        var pos = $(this).data('pos');
        $.each(thisLvlAnswers, function(i, value) {
            if (JSON.stringify(pos) == JSON.stringify(value)) {
                console.log(pos);
                console.log(value);
                isCorrect++;
            }
        });
    })
    if (isCorrect == 9 || testing) { //{TEST}
        if (!sandboxIsVisited) {


            if (myTime <= 90) { 
                var $popinError = new Popin({
                    content: content['jeu4d'],
                    type: 'succes',
                    callback: 'popinEndLevel4()',
                    icon: 'succes4'
                });
            } else {
                var $popinError = new Popin({
                    content: content['jeu4d'],
                    type: 'succes',
                    callback: 'portalSandbox()',
                    icon: 'succes4'
                });
            }
            if (Tip4) Tip4.destroy('Tip4');
        } else {
            if (myTime <= 90) {
                popinEndLevel4();
            } else {
                portalSandbox();                
            }
        }
    } else {
        var $popinError = new Popin({
            content: content['erreur']
        });
    }
}

function popinEndLevel3 () {
    var exist = false;
    for (var i = 0; i < $tabSuccess.length; i++) {
        if ($tabSuccess[i] === 'succes8') {
            exist = true;
            break;
        }
    }
    if (!exist) {
    var $popinSuccessTime = new Popin({
                content: content['jeu3s'],
                type: 'succes',
                callback: 'portalSandbox()',
                icon: 'succes8'
            });
    }else {
        portalSandbox();
    }
}
;
 /*********************************************************/
/*
 * Popin is a module that fades in an element over #popin-overlay
 *
 * Args : object {
 *   $popin, $open, $close, $overlay, $popinWrapper : jQuery element
 *   type : popin | help | succes | encyclo | info
 *   callback : string to eval 
 * }
 *
 */

/* $popin = new Popin({

*             content: 'blabla',
*             type: 'popin',
*             callback: 'loadIntro()'
*     });
*/
function Popin(options) {
    this.init(options);
}

Popin.prototype = {



    init: function(options) {
        this.$popin   =   $(".js-popup");
        this.$open    =   undefined;
        this.$overlay =   $(".js-overlay");
        this.type     =   'popin';
        this.content  =   '';
        this.isSlider =   false;

        if (options) {
            if (options.type) this.type = options.type;
            if (options.$popin) this.$popin = options.$popin;
            if (options.content) this.content = options.content;
            if (options.$open) this.$open = options.$open;            
            if (options.callback) this.callback = options.callback;            
            if (options.isSlider) this.isSlider = options.isSlider;
            if (options.icon) this.icon = options.icon;
            if (options.helpTitle) this.helpTitle = options.helpTitle;
            if (options.title) this.title = options.title;
        }

        this.buildElements();
        this.addEventListeners();


    },
    /*
     * Adds listeners for open / close 
     */
    addEventListeners: function() {
        var _this = this;
        if (this.$open) {
            this.updateOpenTriggers( this.$open );
        }else {
            _this.defaultOpen(); 
        }

        if (this.$close) {

            this.$close.off("click touch");
            this.$close.on( "click touch", function(e) { $.proxy(_this.defaultClose, _this, e)(); });

        }

        this.$overlay.off('click touch').on("click touch", function(e) {$.proxy(_this.defaultClose, _this, e)();});

    },

    updateOpenTriggers: function( $elements) {
        if (this.$open) {
            this.$open.off("click touch");
        }
        this.$open = $elements;
        var _this = this;
        this.$open.each(function() {
            $(this).on( "click touch", function(e) { 
                _this.defaultOpen(); 
            });
        });
    },

    /*
     * Builds the overlay and close button if necessary
     */
    buildElements: function() {
        this.$ContentPopup = this.$popin.find('.js-content-popup');
        if(this.type === "help") this.$overlay = $(".js-overlay-tips");
        if(this.type === "info") this.$overlay = $(".js-overlay-info");
        this.$ContentPopup.html(this.content);
        this.$popin.find('.js-fleche-popup').remove();
        if (this.$ContentPopup.find('.js-close-popup-encyclo').length) {
            this.$close = this.$ContentPopup.find('.js-close-popup-encyclo');
        } else {
            if (isFr) {
                this.$close = $("<div class='fleche js-fleche-popup' >c'est compris</div>");
            } else {
                this.$close = $("<div class='fleche js-fleche-popup' >got it</div>");
            }
            this.$popin.append(this.$close);
        }  
    },

    defaultOpen: function() {
        popinIsOpen = true;

        if (this.type === 'help') {
            isNewTip = true ;
            tipIsOpened = true;
            if ($('.help-button').hasClass('newTip')) {
                var title = isFr ? 'Niveau ' : 'Level ';
                title += countLevel+' '+this.helpTitle;
                addHelp(title, this.content);
                $countHelp++;
                $('.help-button').removeClass('newTip');
            }
        }

        if (this.type === 'succes') addSuccess(this.icon)

        if (this.type === 'encyclo') {
            if(this.title) {var title = this.title }else {var title = isFr ? 'Niveau ' : 'Level '
            title += countLevel};
            addEncyclo(title, this.content);
        }
        if (this.type === 'info') {
            if(this.title) {var title = this.title };
            addEncyclo(title, this.content);
        } 

        if (this.isSlider) $slider = new Slider()

        this.$overlay.removeClass("hide");
        this.$popin.removeClass("hide");
    },

    defaultClose: function(e) {
        if (popinIsOpen) {
            var _this = this;
            popinIsOpen = false;
            if (this.type === "help") {
                if (isNewTip) isNewTip=false;
                if (tipIsOpened) tipIsOpened=false;
            }
            //this.$ContentPopup.html('');
            this.$overlay.addClass("hide");
            this.$popin.addClass("hide");
            if (this.callback) eval(this.callback);
        }
    }

};

/*module.exports = modules.Popin = Popin;*/;
 /*********************************************************/
/*
 * Portal is a module that hide load of the next level
 *
 * Args : object {
 *   title : string 
 *   notion : string 
 *   callback : string to eval 
 * }
 *
 */

/* $popin = new Portal({
*         
*             title: 'Titre',
*             notion: 'Notion',
*             callback: 'loadIntro()'
*     });
*/
function Portal(options) {
    this.init(options);
}

Portal.prototype = {

	init: function(options) {
		var _this       =   this;
        this.$portal    =   $(".js-level-portal");
        this.$title     =   this.$portal.find('.js-portail-title');
        this.$notion 	=   this.$portal.find(".js-notion-title");

        if (options) {
            if (options.title) this.title = options.title;
            if (options.notion) this.notion = options.notion;
            if (options.callback) this.callback = options.callback;
            if (options.loadCallbackOnClose) this.loadCallbackOnClose = options.loadCallbackOnClose;
        }
        
        this.$title.text(this.title);
        this.$notion.text(this.notion);

        this.onOpen();
        this.$portal.on('click touch', function(e) { $.proxy(_this.onClose, _this, e)(); });
    },

    onOpen: function() {
    	this.$portal.addClass('show');
    	this.$title.addClass('fade-in');
    	this.$notion.addClass('fade-in');
    	if(!this.loadCallbackOnClose) {
            eval(this.callback);
        }else {
            this.$portal.addClass('last-portal');
        }
    },
    onClose: function(e) {
		this.$portal.removeClass('show').removeClass('last-portal');
		this.$title.removeClass('fade-in');
		this.$notion.removeClass('fade-in');
        if(this.loadCallbackOnClose) {this.loadCallbackOnClose = false; eval(this.callback)};
        delete this;
    },

}
;
 /*********************************************************/
/*********************

Document.ready

********************/

$(document).ready(function() {

    //Username = $('input#name').val();
    $('.hamburger').hide();

    $('.hamburger').on('touch click', function() {
        $('.hamburger').toggleClass('is-active');
        $('#overlay').toggleClass('open');
        $('.main-nav>ul').removeClass('childOpen');
        $('.main-nav .child').removeClass('isOpen');
    });

    $('.loading').slideUp(1000);

    $('.modal .close').on('touch click', hideModal);
    /////////////////Gestion menu

    $(document).on('click touch', '.haveChild', function(event) {

        event.preventDefault();
        event.stopPropagation();
        var loader = $(this).attr('data-loading');

        var $parent = $('.main-nav>ul');
        var $child = $('.main-nav .child');
        var $child_content = $('.main-nav .child .child-content');

        $parent.addClass('childOpen');
        $child.addClass('isOpen');

        $child_content.load(views+lang+'/'+loader+'.html');


    });
    $(document).on('click touch', '.main-nav .child i', function(event){
        event.preventDefault();
        event.stopPropagation();
        var $parent = $('.main-nav>ul');
        var $child = $('.main-nav .child');

        $parent.removeClass('childOpen');
        $child.removeClass('isOpen');

    });

    /////////////////Formulaire
    // Test for placeholder support
    $.support.placeholder = (function(){
        var i = document.createElement('input');
        return 'placeholder' in i;
    })();

    // Hide labels by default if placeholders are supported
    if($.support.placeholder) {
        $('.form-label').each(function(){
            $(this).addClass('js-hide-label');
        });  

        // Code for adding/removing classes here
        $('.form-group').find('input, textarea').on('keyup blur focus', function(e){
            //Cache our selectors
            var $this = $(this),
                $parent = $this.parent().find("label");

            if (e.type == 'keyup') {
                if( $this.val() == '' ) {
                    $parent.addClass('js-hide-label'); 
                } else {
                    $parent.removeClass('js-hide-label');   
                }                     
            } 
            else if (e.type == 'blur') {
                if( $this.val() == '' ) {
                    $parent.addClass('js-hide-label');
                } 
                else {
                    $parent.removeClass('js-hide-label').addClass('js-unhighlight-label');
                }
            } 
            else if (e.type == 'focus') {
                if( $this.val() !== '' ) {
                    $parent.removeClass('js-unhighlight-label');
                }
            }
        });
    } 
});;
 /*********************************************************/
/********************
*
*   Fonctions de réinitialisation
*
*********************/

function resetCM() {

    if(codeMirror) {

        codeMirror.off();
        codeMirror.getWrapperElement().parentNode.removeChild(codeMirror.getWrapperElement());
        codeMirror=null;
        //console.log('cm = ' + codeMirror);
    }
}

function reinitMain() {
    //hidePopup();
    hideModal();
    resetCM();
    $('.hamburger').removeClass('is-active');
    $('#overlay').removeClass('open');
    $('.main-nav>ul').removeClass('childOpen');
    $('.main-nav .child').removeClass('isOpen');
    $('.help-button').hide();
    clearTimeout(timeOut);

    switch(screen) {
        case 'level1':
            resetLevel1(); 
            break;
        case 'level2':
            resetLevel2();
            break;
        case 'level3':
            resetLevel3();
            break;
        case 'level4':
            resetLevel4();
            break;
        case 'sandbox':
            resetSandbox();
            break;
        default:

    }
}

function resetLevel1() {

}

function resetLevel2() {
    $('.pixel').off()
    $('.runCode').off()
    $('.checkboxes input:checkbox').off();
}

function resetLevel3() {
    $('.square').off();
    $('.runCode').off()
    $('input[type=range]').off();
}

function resetLevel4() {
    $('.imageObject').off();
    $('.functions-btn .btn');
    $('.runCode').off()
    $('.reinitImg').off();

}

function resetSandbox() {

}

function reinitSandbox() {
    $('#sandboxWrapper').empty(); 
}
;
 /*********************************************************/

/********************
*
*   Sandbox
*
*********************/
function portalSandbox() {
    if (isFr) {
        var $portalSandbox = new Portal({
            title: 'Sandbox',
            notion: 'Appliquez toutes les notions vues précedement, vous êtes libre !',
            callback: 'loadSandbox()'
        });
    } else {
        var $portalSandbox = new Portal({
            title: 'Sandbox',
            notion: 'Blabla',
            callback: 'loadSandbox()'
        });
    }
    arrayCookieUser.currentLevel = 5;
    createCookie(Username, arrayCookieUser, 20);
}

function loadSandbox() {
    if (!ecrin) {initEcrin()}
    countLevel = 5;
    if (!sandboxIsVisited) {
        var $popinSlider = new Popin({
            type: 'encyclo',
            content: content['encyclo1jeu5'], 
            title: 'Sandbox'
        });

        addHelp(helpTitle(4, 1), content['jeu4astuce1']);
        addHelp(helpTitle(4, 2), content['jeu4astuce2']);
        addHelp(helpTitle(4, 3), content['jeu4astuce3']); 
    }

    sandboxIsVisited = true;
    arrayCookieUser.sandboxIsVisited = true;
    createCookie(Username, arrayCookieUser, 20);
    $('main').loadLevel('sandbox', function () {

        //var image = $('.imageObject');

        //CodeMirror
        textArea = $('.js-code-mirror')[0];
        codeConfig = {
            mode: "text/javascript",
            theme: "icecoder", 
            lineWrapping: true, 
            lineNumbers: true, 
            autofocus: false,
            readOnly: 'nocursor'
            //matchBrackets: true
        }

        //Initialisation de codeMirror
        codeMirror = CodeMirror.fromTextArea(textArea, codeConfig);
        codeMirror.addKeyMap({
            Enter: function (cm) {
                enterKeyMap();
            }
        });


        //        $('#frameWrapper .imageObject').each(function () {
        //            $(this).data('pos', {
        //                x: 0,
        //                y: 0,
        //                rot: 0
        //            }).data('name', 'img_'+$(this).index());
        //        });



        //Change Active Pixel
        $(document).on('touch click', '.js-pixel', function () {

            if ($(this).hasClass('pixel-active')) {
                $('.pixel-active').removeClass('pixel-active img-active');
                $('.js-edit-pixel').addClass('hidden');
            } else {
                $('.pixel-active').removeClass('pixel-active img-active');
                $(this).addClass('pixel-active img-active');
                $('.js-edit-pixel').removeClass('hidden');
            }


        })

        $('.js-change-color').on('touch click', function() {
            if($('.pixel-active').length > 0) {

                $('.btn-position').addClass('hidden');
                $('.btn-color').removeClass('hidden');
                $('.cm-s-icecoder').addClass('only-color');

                var name = $('.pixel-active').data('name');
                var thisColors = $('.pixel-active').data('rvb');
                resetCodePixel(name, thisColors.red, thisColors.green, thisColors.blue);
                resetSliders(thisColors.red, thisColors.green, thisColors.blue);

                showModal();
            }
        })

        $('.js-change-position').on('touch click', function() {
            if($('.pixel-active').length > 0) {
                $('.btn-color').addClass('hidden');
                $('.btn-position').removeClass('hidden');
                $('.cm-s-icecoder').removeClass('only-color');
                showModal();  
                resetCode();
            }
        })

        $('.js-reinit-sandbox').click(reinitSandbox);



        $('.js-add-pixel').click(addPixel);


        $('input[type=range]').on("input", function(){

            var name = $(this).attr('class');
            var thisPixel = $('.pixel-active').data('rvb');

            switch(name) {
                case 'red':
                    $(this).parent().css('background-color', 'rgb('+$(this).val()+', 0, 0)');
                    break;
                case 'green': 
                    $(this).parent().css('background-color', 'rgb(0, '+$(this).val()+', 0)');
                    break;
                case 'blue':
                    $(this).parent().css('background-color', 'rgb(0, 0, '+$(this).val()+')');
                    break;
                default:
                    break;
            }

            thisPixel[name] = $(this).val();
            resetCodePixel($('.pixel-active').data('name'), thisPixel.red, thisPixel.green, thisPixel.blue);
            colorPixel();
        })

        $('.js-run-code').click(function () {
            hideModal();
            runCodeLevel4();  
        });

        $('.js-apply-color').on('touch click', hideModal)

        $('.functions-btn .btn').on('touch click', function() {
            console.log($(this))
            addCode($(this));
        })

        codeMirror.setValue('init');
        resetCode();

    })
}

function runSandbox() {

    var code = codeMirror.getValue();

    try {
        eval(code); 

        pixel = eval($('.pixel-active').data('name'));

        $.each(pixel, function(i, value) {
            if (typeof value == 'number') {
                if (value < 0) {
                    pixel[i] = 0;
                }
                if (value > 255) {
                    pixel[i] = 255;
                }
            } else {
                pixel[i] = 0
            }
        });



        $('.pixel-active').data('rvb', {
            red: pixel.red, 
            green: pixel.green, 
            blue: pixel.blue
        });
        resetCodePixel($('.pixel-active').data('name'), pixel.red, pixel.green, pixel.blue);

        colorPixel();

        var pos = $('.pixel-active').data('pos'); 
        var size = $('.pixel-active').outerWidth();

        hideModal();

        //console.log($('.js-sandboxwrapper').length);
        var xMax = Math.ceil($('.js-sandboxwrapper').width() / size) - 1;
        var yMax = Math.ceil($('.js-sandboxwrapper').height() / size) - 1;
        //console.log(xMax, yMax)

        pos.x = pos.x > xMax ? xMax : (pos.x < 0) ? 0 : pos.x;
        pos.y = pos.y > yMax ? yMax : (pos.y < 0) ? 0 : pos.y;
        pos.rot %= 360;

        //console.log(pos.x, pos.y);

        $('.pixel-active').css('transform', 'rotate('+pos.rot+'deg)');
        $('.pixel-active').css('left', pos.x * size + 'px');
        $('.pixel-active').css('top', pos.y * size + 'px');




    } catch (e) {

        alert(e.message);

        var resetPixel = $('.pixel-active').data('rvb');

        resetCodePixel($('.pixel-active').data('name'), resetPixel.red, resetPixel.green, resetPixel.blue);

    }
};
 /*********************************************************/
/*
 * Tip is a module that constructs in an element and put it in the menu
 *
 * Args : object {
 *   $popin, $open, $close, $overlay, $popinWrapper :                   jQuery element
 *   closeButton :                                      true|false
 *   onOpen, onOpened, onClose, onClosed, onResize :    callback function
 *   type : popin|help\succes\encyclo
 * }
 *
 */

// $popin = new Tip({

//             content: 'blabla',
//             type: 'popin',
//             callback: 'loadIntro()'
//     });
function Tip(options) {
    //console.log(options.stop)
    if (options.stop) { this.stop(options)} else {this.init(options);}
}

Tip.prototype = {



    init: function(options) {
        this.duration = 42000;
        this.tips = "";
        this.number0fTips = 0;
        this.count = 0;
        this.$open = $('.help-button');
        this.setTimeOut = 0;
        this.level = 1;
        this.waitFor = 0;


        if (options) {
            if (options.tips) {
                this.tips = options.tips;
                this.number0fTips = Object.keys(this.tips).length;
            }
            if (options.duration) this.duration = options.duration;
            if (options.$open) this.$open = options.$open;
            if (options.level) this.level = options.level;
        }
        this.canIconstruct(this.tips[this.count]);
    },

    canIconstruct: function(tip) {
        $this = this;
        ////console.log($this.canIconstruct())
        if (this.level === countLevel ) {
            $this.waitFor = waitforPopinIsOpen(false, 500, 0, 'lunch constructTip false', $this.level, function() {
                $this.setTimeOut = setTimeout(function () {
                    $this.constructTip(tip)
                }, $this.duration)
            });

        } else {this.destroy()}

    },

    constructTip : function (tip) {
        //console.log('constructTip')
        $this = this;
        if (this.level === countLevel ) {
            $this.waitFor = waitforPopinIsOpen(false, 500, 0, 'play->popinIsOpen false', $this.level, function() {
                $this.count++;
                $this.$open.show().addClass('newTip');
                if($this.$open.hasClass('first-tip')) {
                    var $explain = new Popin({
                        content: content['tipexplain'], 
                        callback: 'openFirstTip()'                   
                    });
                }
                isNewTip = true;
                title = isFr ? 'Aide n°' : 'Help n°'
                title += $this.count;
                var $popup = $popin = new Popin({
                    content: tip,
                    type: 'help',
                    helpTitle: title,
                    $popin: $('.js-popup-tip'),
                    $open: $this.$open
                });
                if($this.count<$this.number0fTips) { $this.canIconstruct($this.tips[$this.count])} else {$this.stop};
            });
        } else {this.destroy()}

    },

    stop : function (options) {
        $this = this;
        //console.log('stop');
        clearTimeout($this.setTimeOut);
        $this.setTimeOut = 0;
        $this.waitFor = 0;
    },
    destroy: function(tip) {
        // Delete the variable that references the instance of the constructor.
        //console.log(Tip1)
        switch (tip) {
            case 'Tip1':
                clearTimeout(window.Tip1.setTimeOut);
                window.Tip1.setTimeOut = 0;
                console.log('tip1 '+window.Tip1.setTimeOut)
                window.Tip1 = undefined;
                delete window.Tip1;
                break;
            case 'Tip2':
                clearTimeout(window.Tip2.setTimeOut);
                window.Tip2.setTimeOut = 0;
                console.log('tip2 '+window.Tip2.setTimeOut)
                window.Tip2 = undefined;
                delete window.Tip2;
                break;
            case 'Tip3':
                clearTimeout(window.Tip3.setTimeOut);
                window.Tip3.setTimeOut = 0;
                console.log('tip3 '+window.Tip3.setTimeOut)
                window.Tip3 = undefined;
                delete window.Tip3;
                break;
            case 'Tip4':
                clearTimeout(window.Tip4.setTimeOut);
                window.Tip4.setTimeOut = 0;
                console.log('tip4 '+window.Tip4.setTimeOut)
                window.Tip4 = undefined;
                delete window.Tip4;
                break;
        }


        //console.log(Tip1)
    }

};

/*module.exports = modules.Popin = Popin;*/;
 /*********************************************************/
function Slider($delete) {
    if ($delete) {
        this.deleted()
    } else {
        this.init()
    };
};

Slider.prototype = {

    init: function() {
        // swipe min
        + function() {
            function t(t, i) {
                var n = this;
                n.data = {}, n.node = $(t), n.options = i, n.node.on("mousedown", function(t) {
                    n.start(t, {
                        x: t.clientX,
                        y: t.clientY
                    })
                }), n.node.on("mousemove", function(t) {
                    n.move(t, {
                        x: t.clientX,
                        y: t.clientY
                    })
                }), $(window).on("mouseup", function(t) {
                    n.end(t)
                }), n.node.on("touchstart", function(t) {
                    n.start(t, {
                        x: t.originalEvent.touches[0].clientX,
                        y: t.originalEvent.touches[0].clientY
                    })
                }), n.node.on("touchmove", function(t) {
                    n.move(t, {
                        x: t.originalEvent.touches[0].clientX,
                        y: t.originalEvent.touches[0].clientY
                    })
                }), $(window).on("touchend", function(t) {
                    n.end(t)
                })
            }
            t.prototype = {
                constructor: t,
                swipeStart: !1,
                swiping: !1,
                data: null,
                node: null,
                start: function(t, i) {
                    this.swipeStart = !0, this.data.start = i
                },
                move: function(t, i) {
                    this.swipeStart && this.data.start && (this.data.current = i, this.data.delta = {
                        x: this.data.start.x - this.data.current.x,
                        y: this.data.start.y - this.data.current.y
                    }, this.data.currentTime = Date.now(), this.swiping || (this.data.startTime = Date.now(), this.node.trigger("swipestart", this.data)), this.swiping = !0, this.node.trigger("swipe", this.data), this.options.doNotScroll instanceof Function && this.options.doNotScroll.call(this) && t.preventDefault())
                },
                end: function() {
                    this.data.delta && "number" == typeof this.data.delta.x && "number" == typeof this.data.delta.y && (this.data.currentTime = Date.now(), this.node.trigger("swipeend", this.data)), this.swipeStart = !1, this.swiping = !1, this.data = {}
                }
            }, $.fn.swipe = function(i) {
                return this.each(function() {
                    $(this).data("swipe") instanceof t || $(this).data("swipe", new t(this, i))
                })
            }
        }();
        // slider max
        +
        function() {
            function e(e, t, i) {
                function r(e) {
                    var t = d.find("li"),
                        r = Array.prototype.slice.call(t),
                        n = (this.tagName || "").toLowerCase(),
                        l = "number" == typeof e ? e : r.indexOf("li" == n ? this : s),
                        o = t.not(".active");

                    if ("button" == n && ++l, (0 > l || l > r.length - 1) && (l = 0), s != r[l]) {
                        t.removeClass("active");
                        var c = parseFloat(o.css("width")),
                            p = parseFloat(o.css("marginRight")),
                            u = parseFloat(a[0].offsetWidth),
                            f = -((c + p) * l + u / 2);

                        d.css("marginLeft", f),
                            s = r[l],
                            t.eq(l).addClass("active"),
                            i instanceof Function && i(l)
                    }
                }
                var s,
                    n = $('<div class="dots"><button class="icon icon-next"></button><ul></ul></div>'),
                    a = n.find("button"),
                    d = n.find("ul");

                return a.on("click", r),
                    d.on("click", "li", r),

                    e.forEach(function(e, t) {
                        var i = $("<li></li>");
                        t || (i.addClass("active"),
                                s = i[0]),
                            d.append(i)
                    }),
                    t.append(n),
                    r(), r
            }

            function t(e) {
                this.wrapper = $(e),
                    this.render()
            }
            t.prototype = {
                constructor: t,
                backlashPercent: 10,
                notSwipePercent: 4,
                scrollPercent: 2,
                swipeTime: 1e4,

                getSlideTime: function() {
                    return parseFloat(this.wrapper.data("slideTime") || this.wrapper.attr("slide-time"))
                },

                render: function() {
                    var t = this;
                    
                    t.wrapper.hasClass("dot-mode") && (t.dotMode = e(Array.prototype.slice.call(t.wrapper.find(".slide")).map(function() {
                                return ""
                            }),

                            t.wrapper,

                            function(e) {
                                e != t.currentSlideIndex && t.setCurrentSlide(e)
                            })),
                        t.wrapper.swipe({
                            doNotScroll: function() {
                                return t.delta.x > t.scrollPercent
                            }
                        }).on("swipestart", function() {}).on("swipe", function(e, i) {
                            t.wrapper.hasClass("swipe-mode") && (t.swipeData = i, t.move(e), t.swipeTime < i.currentTime - i.startTime && t.wrapper.data("swipe").end())
                        }).on("swipeend", function(e, i) {
                            if (t.wrapper.hasClass("swipe-mode")) {
                                var r = t.swipeTime >= i.currentTime - i.startTime,
                                    s = t.delta.x > t.backlashPercent;
                                var total_child = $('.slide').length,
                                	_$current = $('.current');                                  
                                if ($('.popencyclo').hasClass('open')) {total_child = $('.popencyclo .slide').length;_$current = $('.popencyclo .current')}
                                var prelastchild = total_child-1;
                                	

                                if (_$current.is(':first-child') && t.sign === -1) {
                                	t.setCurrentSlide(0);
                                } else if(_$current.is(':nth-child('+total_child+')') && t.sign === 1) {
                                	t.setCurrentSlide(total_child-1);                           
                                } else {t.setCurrentSlide(t.currentSlideIndex + (r && s ? t.sign : 0))}                           
                            }
                        }), t.setCurrentSlide(0)
                },
                move: function() {
                    if (this.delta = {
                            x: Math.abs(100 * this.swipeData.delta.x / this.wrapper[0].offsetWidth),
                            y: Math.abs(100 * this.swipeData.delta.y / this.wrapper[0].offsetHeight)
                        }, this.sign = this.swipeData.delta.x < 0 ? -1 : 1, !(this.delta.x <= this.notSwipePercent)) {
                        this.wrapper.find(".slide").removeClass("animating");
                        var e = -this.sign * this.delta.x,
                            t = this.getPreviousSlide(),
                            i = this.getCurrentSlide(),
                            r = this.getNextSlide();
                        this.wrapper.hasClass("swipe-mode") && (t.css("transform", "translate3d(" + (-100 + e) + "%,0,0)").css("-webkit-transform", "translate3d(" + (-100 + e) + "%,0,0)"), i.css("transform", "translate3d(" + e + "%,0,0)").css("-webkit-transform", "translate3d(" + e + "%,0,0)"), r.css("transform", "translate3d(" + (100 + e) + "%,0,0)").css("-webkit-transform", "translate3d(" + (100 + e) + "%,0,0)"))
                    }
                },
                getSlideIndex: function(e) {
                    var t = this.wrapper.find(".slide").length - 1;
                    return 0 > e && (e = t), e > t && (e = 0), e
                },
                getSlideByIndex: function(e) {
                    return this.wrapper.find(".slide").eq(this.getSlideIndex(e))
                },
                getCurrentSlide: function() {
                    return this.getSlideByIndex(this.currentSlideIndex)
                },
                getPreviousSlide: function() {           
                    return this.getSlideByIndex(this.currentSlideIndex - 1).not(this.getCurrentSlide())
                },
                getNextSlide: function() {
                    return this.getSlideByIndex(this.currentSlideIndex + 1).not(this.getCurrentSlide())
                },
                setCurrentSlide: function(e) {

                    var t = this,
                        i = t.wrapper.find(".slide").length - 1,//max
                        r = t.currentSlideIndex;
                    t.currentSlideIndex = t.getSlideIndex(e);
                    $button = $('.dots button');  
                    if(t.currentSlideIndex == i) {
                    	$button.addClass('hidden');
                    } else {$button.removeClass('hidden');}
                    var s = t.wrapper.find(".slide").removeClass("previous").removeClass("current").removeClass("next").removeClass("animating");
                    if (s.css("opacity", ""), t.wrapper.hasClass("swipe-mode") && s.css("transform", "").css("-webkit-transform", ""), t.getCurrentSlide().addClass("current"), t.getPreviousSlide().addClass("previous"), t.getNextSlide().addClass("next"), "number" == typeof r) {
                        var n = 0 === r && t.currentSlideIndex === i,
                            a = r === i && 0 === t.currentSlideIndex,
                            d = r < t.currentSlideIndex,
                            l = t.wrapper.data("swipe").swiping ? t.sign > 0 : !n && d || a,
                            o = t.wrapper.data("swipe").swiping ? t.delta.x > t.backlashPercent : !0;
                        t.getCurrentSlide().addClass("animating"),t[l ? o ? "getPreviousSlide" : "getNextSlide" : o ? "getNextSlide" : "getPreviousSlide"]().addClass("animating")
                    }
                    clearTimeout(t.timer);
                    var c = t.getSlideTime();
                    c && (t.timer = setTimeout(function() {
                        t.setCurrentSlide(t.currentSlideIndex + 1)
                    }, c)), t.dotMode && t.dotMode(t.currentSlideIndex)
                }
            }, $.fn.slider = function() {
                return this.each(function() {
                    $(this).data("slider") instanceof t || $(this).data("slider", new t(this))
                })
            }
        }(), $().ready(function() {
            $(".slider").slider()
        });

    },
    deleted: function() {
        delete this;
        $('.dots').remove();
    }
};
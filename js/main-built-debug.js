
/*! jQuery v1.7.2 jquery.com | jquery.org/license */
(function(a,b){function cy(a){return f.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1}function cu(a){if(!cj[a]){var b=c.body,d=f("<"+a+">").appendTo(b),e=d.css("display");d.remove();if(e==="none"||e===""){ck||(ck=c.createElement("iframe"),ck.frameBorder=ck.width=ck.height=0),b.appendChild(ck);if(!cl||!ck.createElement)cl=(ck.contentWindow||ck.contentDocument).document,cl.write((f.support.boxModel?"<!doctype html>":"")+"<html><body>"),cl.close();d=cl.createElement(a),cl.body.appendChild(d),e=f.css(d,"display"),b.removeChild(ck)}cj[a]=e}return cj[a]}function ct(a,b){var c={};f.each(cp.concat.apply([],cp.slice(0,b)),function(){c[this]=a});return c}function cs(){cq=b}function cr(){setTimeout(cs,0);return cq=f.now()}function ci(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}function ch(){try{return new a.XMLHttpRequest}catch(b){}}function cb(a,c){a.dataFilter&&(c=a.dataFilter(c,a.dataType));var d=a.dataTypes,e={},g,h,i=d.length,j,k=d[0],l,m,n,o,p;for(g=1;g<i;g++){if(g===1)for(h in a.converters)typeof h=="string"&&(e[h.toLowerCase()]=a.converters[h]);l=k,k=d[g];if(k==="*")k=l;else if(l!=="*"&&l!==k){m=l+" "+k,n=e[m]||e["* "+k];if(!n){p=b;for(o in e){j=o.split(" ");if(j[0]===l||j[0]==="*"){p=e[j[1]+" "+k];if(p){o=e[o],o===!0?n=p:p===!0&&(n=o);break}}}}!n&&!p&&f.error("No conversion from "+m.replace(" "," to ")),n!==!0&&(c=n?n(c):p(o(c)))}}return c}function ca(a,c,d){var e=a.contents,f=a.dataTypes,g=a.responseFields,h,i,j,k;for(i in g)i in d&&(c[g[i]]=d[i]);while(f[0]==="*")f.shift(),h===b&&(h=a.mimeType||c.getResponseHeader("content-type"));if(h)for(i in e)if(e[i]&&e[i].test(h)){f.unshift(i);break}if(f[0]in d)j=f[0];else{for(i in d){if(!f[0]||a.converters[i+" "+f[0]]){j=i;break}k||(k=i)}j=j||k}if(j){j!==f[0]&&f.unshift(j);return d[j]}}function b_(a,b,c,d){if(f.isArray(b))f.each(b,function(b,e){c||bD.test(a)?d(a,e):b_(a+"["+(typeof e=="object"?b:"")+"]",e,c,d)});else if(!c&&f.type(b)==="object")for(var e in b)b_(a+"["+e+"]",b[e],c,d);else d(a,b)}function b$(a,c){var d,e,g=f.ajaxSettings.flatOptions||{};for(d in c)c[d]!==b&&((g[d]?a:e||(e={}))[d]=c[d]);e&&f.extend(!0,a,e)}function bZ(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;var h=a[f],i=0,j=h?h.length:0,k=a===bS,l;for(;i<j&&(k||!l);i++)l=h[i](c,d,e),typeof l=="string"&&(!k||g[l]?l=b:(c.dataTypes.unshift(l),l=bZ(a,c,d,e,l,g)));(k||!l)&&!g["*"]&&(l=bZ(a,c,d,e,"*",g));return l}function bY(a){return function(b,c){typeof b!="string"&&(c=b,b="*");if(f.isFunction(c)){var d=b.toLowerCase().split(bO),e=0,g=d.length,h,i,j;for(;e<g;e++)h=d[e],j=/^\+/.test(h),j&&(h=h.substr(1)||"*"),i=a[h]=a[h]||[],i[j?"unshift":"push"](c)}}}function bB(a,b,c){var d=b==="width"?a.offsetWidth:a.offsetHeight,e=b==="width"?1:0,g=4;if(d>0){if(c!=="border")for(;e<g;e+=2)c||(d-=parseFloat(f.css(a,"padding"+bx[e]))||0),c==="margin"?d+=parseFloat(f.css(a,c+bx[e]))||0:d-=parseFloat(f.css(a,"border"+bx[e]+"Width"))||0;return d+"px"}d=by(a,b);if(d<0||d==null)d=a.style[b];if(bt.test(d))return d;d=parseFloat(d)||0;if(c)for(;e<g;e+=2)d+=parseFloat(f.css(a,"padding"+bx[e]))||0,c!=="padding"&&(d+=parseFloat(f.css(a,"border"+bx[e]+"Width"))||0),c==="margin"&&(d+=parseFloat(f.css(a,c+bx[e]))||0);return d+"px"}function bo(a){var b=c.createElement("div");bh.appendChild(b),b.innerHTML=a.outerHTML;return b.firstChild}function bn(a){var b=(a.nodeName||"").toLowerCase();b==="input"?bm(a):b!=="script"&&typeof a.getElementsByTagName!="undefined"&&f.grep(a.getElementsByTagName("input"),bm)}function bm(a){if(a.type==="checkbox"||a.type==="radio")a.defaultChecked=a.checked}function bl(a){return typeof a.getElementsByTagName!="undefined"?a.getElementsByTagName("*"):typeof a.querySelectorAll!="undefined"?a.querySelectorAll("*"):[]}function bk(a,b){var c;b.nodeType===1&&(b.clearAttributes&&b.clearAttributes(),b.mergeAttributes&&b.mergeAttributes(a),c=b.nodeName.toLowerCase(),c==="object"?b.outerHTML=a.outerHTML:c!=="input"||a.type!=="checkbox"&&a.type!=="radio"?c==="option"?b.selected=a.defaultSelected:c==="input"||c==="textarea"?b.defaultValue=a.defaultValue:c==="script"&&b.text!==a.text&&(b.text=a.text):(a.checked&&(b.defaultChecked=b.checked=a.checked),b.value!==a.value&&(b.value=a.value)),b.removeAttribute(f.expando),b.removeAttribute("_submit_attached"),b.removeAttribute("_change_attached"))}function bj(a,b){if(b.nodeType===1&&!!f.hasData(a)){var c,d,e,g=f._data(a),h=f._data(b,g),i=g.events;if(i){delete h.handle,h.events={};for(c in i)for(d=0,e=i[c].length;d<e;d++)f.event.add(b,c,i[c][d])}h.data&&(h.data=f.extend({},h.data))}}function bi(a,b){return f.nodeName(a,"table")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function U(a){var b=V.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}function T(a,b,c){b=b||0;if(f.isFunction(b))return f.grep(a,function(a,d){var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return f.grep(a,function(a,d){return a===b===c});if(typeof b=="string"){var d=f.grep(a,function(a){return a.nodeType===1});if(O.test(b))return f.filter(b,d,!c);b=f.filter(b,d)}return f.grep(a,function(a,d){return f.inArray(a,b)>=0===c})}function S(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function K(){return!0}function J(){return!1}function n(a,b,c){var d=b+"defer",e=b+"queue",g=b+"mark",h=f._data(a,d);h&&(c==="queue"||!f._data(a,e))&&(c==="mark"||!f._data(a,g))&&setTimeout(function(){!f._data(a,e)&&!f._data(a,g)&&(f.removeData(a,d,!0),h.fire())},0)}function m(a){for(var b in a){if(b==="data"&&f.isEmptyObject(a[b]))continue;if(b!=="toJSON")return!1}return!0}function l(a,c,d){if(d===b&&a.nodeType===1){var e="data-"+c.replace(k,"-$1").toLowerCase();d=a.getAttribute(e);if(typeof d=="string"){try{d=d==="true"?!0:d==="false"?!1:d==="null"?null:f.isNumeric(d)?+d:j.test(d)?f.parseJSON(d):d}catch(g){}f.data(a,c,d)}else d=b}return d}function h(a){var b=g[a]={},c,d;a=a.split(/\s+/);for(c=0,d=a.length;c<d;c++)b[a[c]]=!0;return b}var c=a.document,d=a.navigator,e=a.location,f=function(){function J(){if(!e.isReady){try{c.documentElement.doScroll("left")}catch(a){setTimeout(J,1);return}e.ready()}}var e=function(a,b){return new e.fn.init(a,b,h)},f=a.jQuery,g=a.$,h,i=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,j=/\S/,k=/^\s+/,l=/\s+$/,m=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,n=/^[\],:{}\s]*$/,o=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,p=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,q=/(?:^|:|,)(?:\s*\[)+/g,r=/(webkit)[ \/]([\w.]+)/,s=/(opera)(?:.*version)?[ \/]([\w.]+)/,t=/(msie) ([\w.]+)/,u=/(mozilla)(?:.*? rv:([\w.]+))?/,v=/-([a-z]|[0-9])/ig,w=/^-ms-/,x=function(a,b){return(b+"").toUpperCase()},y=d.userAgent,z,A,B,C=Object.prototype.toString,D=Object.prototype.hasOwnProperty,E=Array.prototype.push,F=Array.prototype.slice,G=String.prototype.trim,H=Array.prototype.indexOf,I={};e.fn=e.prototype={constructor:e,init:function(a,d,f){var g,h,j,k;if(!a)return this;if(a.nodeType){this.context=this[0]=a,this.length=1;return this}if(a==="body"&&!d&&c.body){this.context=c,this[0]=c.body,this.selector=a,this.length=1;return this}if(typeof a=="string"){a.charAt(0)!=="<"||a.charAt(a.length-1)!==">"||a.length<3?g=i.exec(a):g=[null,a,null];if(g&&(g[1]||!d)){if(g[1]){d=d instanceof e?d[0]:d,k=d?d.ownerDocument||d:c,j=m.exec(a),j?e.isPlainObject(d)?(a=[c.createElement(j[1])],e.fn.attr.call(a,d,!0)):a=[k.createElement(j[1])]:(j=e.buildFragment([g[1]],[k]),a=(j.cacheable?e.clone(j.fragment):j.fragment).childNodes);return e.merge(this,a)}h=c.getElementById(g[2]);if(h&&h.parentNode){if(h.id!==g[2])return f.find(a);this.length=1,this[0]=h}this.context=c,this.selector=a;return this}return!d||d.jquery?(d||f).find(a):this.constructor(d).find(a)}if(e.isFunction(a))return f.ready(a);a.selector!==b&&(this.selector=a.selector,this.context=a.context);return e.makeArray(a,this)},selector:"",jquery:"1.7.2",length:0,size:function(){return this.length},toArray:function(){return F.call(this,0)},get:function(a){return a==null?this.toArray():a<0?this[this.length+a]:this[a]},pushStack:function(a,b,c){var d=this.constructor();e.isArray(a)?E.apply(d,a):e.merge(d,a),d.prevObject=this,d.context=this.context,b==="find"?d.selector=this.selector+(this.selector?" ":"")+c:b&&(d.selector=this.selector+"."+b+"("+c+")");return d},each:function(a,b){return e.each(this,a,b)},ready:function(a){e.bindReady(),A.add(a);return this},eq:function(a){a=+a;return a===-1?this.slice(a):this.slice(a,a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(F.apply(this,arguments),"slice",F.call(arguments).join(","))},map:function(a){return this.pushStack(e.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:E,sort:[].sort,splice:[].splice},e.fn.init.prototype=e.fn,e.extend=e.fn.extend=function(){var a,c,d,f,g,h,i=arguments[0]||{},j=1,k=arguments.length,l=!1;typeof i=="boolean"&&(l=i,i=arguments[1]||{},j=2),typeof i!="object"&&!e.isFunction(i)&&(i={}),k===j&&(i=this,--j);for(;j<k;j++)if((a=arguments[j])!=null)for(c in a){d=i[c],f=a[c];if(i===f)continue;l&&f&&(e.isPlainObject(f)||(g=e.isArray(f)))?(g?(g=!1,h=d&&e.isArray(d)?d:[]):h=d&&e.isPlainObject(d)?d:{},i[c]=e.extend(l,h,f)):f!==b&&(i[c]=f)}return i},e.extend({noConflict:function(b){a.$===e&&(a.$=g),b&&a.jQuery===e&&(a.jQuery=f);return e},isReady:!1,readyWait:1,holdReady:function(a){a?e.readyWait++:e.ready(!0)},ready:function(a){if(a===!0&&!--e.readyWait||a!==!0&&!e.isReady){if(!c.body)return setTimeout(e.ready,1);e.isReady=!0;if(a!==!0&&--e.readyWait>0)return;A.fireWith(c,[e]),e.fn.trigger&&e(c).trigger("ready").off("ready")}},bindReady:function(){if(!A){A=e.Callbacks("once memory");if(c.readyState==="complete")return setTimeout(e.ready,1);if(c.addEventListener)c.addEventListener("DOMContentLoaded",B,!1),a.addEventListener("load",e.ready,!1);else if(c.attachEvent){c.attachEvent("onreadystatechange",B),a.attachEvent("onload",e.ready);var b=!1;try{b=a.frameElement==null}catch(d){}c.documentElement.doScroll&&b&&J()}}},isFunction:function(a){return e.type(a)==="function"},isArray:Array.isArray||function(a){return e.type(a)==="array"},isWindow:function(a){return a!=null&&a==a.window},isNumeric:function(a){return!isNaN(parseFloat(a))&&isFinite(a)},type:function(a){return a==null?String(a):I[C.call(a)]||"object"},isPlainObject:function(a){if(!a||e.type(a)!=="object"||a.nodeType||e.isWindow(a))return!1;try{if(a.constructor&&!D.call(a,"constructor")&&!D.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}var d;for(d in a);return d===b||D.call(a,d)},isEmptyObject:function(a){for(var b in a)return!1;return!0},error:function(a){throw new Error(a)},parseJSON:function(b){if(typeof b!="string"||!b)return null;b=e.trim(b);if(a.JSON&&a.JSON.parse)return a.JSON.parse(b);if(n.test(b.replace(o,"@").replace(p,"]").replace(q,"")))return(new Function("return "+b))();e.error("Invalid JSON: "+b)},parseXML:function(c){if(typeof c!="string"||!c)return null;var d,f;try{a.DOMParser?(f=new DOMParser,d=f.parseFromString(c,"text/xml")):(d=new ActiveXObject("Microsoft.XMLDOM"),d.async="false",d.loadXML(c))}catch(g){d=b}(!d||!d.documentElement||d.getElementsByTagName("parsererror").length)&&e.error("Invalid XML: "+c);return d},noop:function(){},globalEval:function(b){b&&j.test(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(w,"ms-").replace(v,x)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,c,d){var f,g=0,h=a.length,i=h===b||e.isFunction(a);if(d){if(i){for(f in a)if(c.apply(a[f],d)===!1)break}else for(;g<h;)if(c.apply(a[g++],d)===!1)break}else if(i){for(f in a)if(c.call(a[f],f,a[f])===!1)break}else for(;g<h;)if(c.call(a[g],g,a[g++])===!1)break;return a},trim:G?function(a){return a==null?"":G.call(a)}:function(a){return a==null?"":(a+"").replace(k,"").replace(l,"")},makeArray:function(a,b){var c=b||[];if(a!=null){var d=e.type(a);a.length==null||d==="string"||d==="function"||d==="regexp"||e.isWindow(a)?E.call(c,a):e.merge(c,a)}return c},inArray:function(a,b,c){var d;if(b){if(H)return H.call(b,a,c);d=b.length,c=c?c<0?Math.max(0,d+c):c:0;for(;c<d;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,c){var d=a.length,e=0;if(typeof c.length=="number")for(var f=c.length;e<f;e++)a[d++]=c[e];else while(c[e]!==b)a[d++]=c[e++];a.length=d;return a},grep:function(a,b,c){var d=[],e;c=!!c;for(var f=0,g=a.length;f<g;f++)e=!!b(a[f],f),c!==e&&d.push(a[f]);return d},map:function(a,c,d){var f,g,h=[],i=0,j=a.length,k=a instanceof e||j!==b&&typeof j=="number"&&(j>0&&a[0]&&a[j-1]||j===0||e.isArray(a));if(k)for(;i<j;i++)f=c(a[i],i,d),f!=null&&(h[h.length]=f);else for(g in a)f=c(a[g],g,d),f!=null&&(h[h.length]=f);return h.concat.apply([],h)},guid:1,proxy:function(a,c){if(typeof c=="string"){var d=a[c];c=a,a=d}if(!e.isFunction(a))return b;var f=F.call(arguments,2),g=function(){return a.apply(c,f.concat(F.call(arguments)))};g.guid=a.guid=a.guid||g.guid||e.guid++;return g},access:function(a,c,d,f,g,h,i){var j,k=d==null,l=0,m=a.length;if(d&&typeof d=="object"){for(l in d)e.access(a,c,l,d[l],1,h,f);g=1}else if(f!==b){j=i===b&&e.isFunction(f),k&&(j?(j=c,c=function(a,b,c){return j.call(e(a),c)}):(c.call(a,f),c=null));if(c)for(;l<m;l++)c(a[l],d,j?f.call(a[l],l,c(a[l],d)):f,i);g=1}return g?a:k?c.call(a):m?c(a[0],d):h},now:function(){return(new Date).getTime()},uaMatch:function(a){a=a.toLowerCase();var b=r.exec(a)||s.exec(a)||t.exec(a)||a.indexOf("compatible")<0&&u.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},sub:function(){function a(b,c){return new a.fn.init(b,c)}e.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.sub=this.sub,a.fn.init=function(d,f){f&&f instanceof e&&!(f instanceof a)&&(f=a(f));return e.fn.init.call(this,d,f,b)},a.fn.init.prototype=a.fn;var b=a(c);return a},browser:{}}),e.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){I["[object "+b+"]"]=b.toLowerCase()}),z=e.uaMatch(y),z.browser&&(e.browser[z.browser]=!0,e.browser.version=z.version),e.browser.webkit&&(e.browser.safari=!0),j.test(" ")&&(k=/^[\s\xA0]+/,l=/[\s\xA0]+$/),h=e(c),c.addEventListener?B=function(){c.removeEventListener("DOMContentLoaded",B,!1),e.ready()}:c.attachEvent&&(B=function(){c.readyState==="complete"&&(c.detachEvent("onreadystatechange",B),e.ready())});return e}(),g={};f.Callbacks=function(a){a=a?g[a]||h(a):{};var c=[],d=[],e,i,j,k,l,m,n=function(b){var d,e,g,h,i;for(d=0,e=b.length;d<e;d++)g=b[d],h=f.type(g),h==="array"?n(g):h==="function"&&(!a.unique||!p.has(g))&&c.push(g)},o=function(b,f){f=f||[],e=!a.memory||[b,f],i=!0,j=!0,m=k||0,k=0,l=c.length;for(;c&&m<l;m++)if(c[m].apply(b,f)===!1&&a.stopOnFalse){e=!0;break}j=!1,c&&(a.once?e===!0?p.disable():c=[]:d&&d.length&&(e=d.shift(),p.fireWith(e[0],e[1])))},p={add:function(){if(c){var a=c.length;n(arguments),j?l=c.length:e&&e!==!0&&(k=a,o(e[0],e[1]))}return this},remove:function(){if(c){var b=arguments,d=0,e=b.length;for(;d<e;d++)for(var f=0;f<c.length;f++)if(b[d]===c[f]){j&&f<=l&&(l--,f<=m&&m--),c.splice(f--,1);if(a.unique)break}}return this},has:function(a){if(c){var b=0,d=c.length;for(;b<d;b++)if(a===c[b])return!0}return!1},empty:function(){c=[];return this},disable:function(){c=d=e=b;return this},disabled:function(){return!c},lock:function(){d=b,(!e||e===!0)&&p.disable();return this},locked:function(){return!d},fireWith:function(b,c){d&&(j?a.once||d.push([b,c]):(!a.once||!e)&&o(b,c));return this},fire:function(){p.fireWith(this,arguments);return this},fired:function(){return!!i}};return p};var i=[].slice;f.extend({Deferred:function(a){var b=f.Callbacks("once memory"),c=f.Callbacks("once memory"),d=f.Callbacks("memory"),e="pending",g={resolve:b,reject:c,notify:d},h={done:b.add,fail:c.add,progress:d.add,state:function(){return e},isResolved:b.fired,isRejected:c.fired,then:function(a,b,c){i.done(a).fail(b).progress(c);return this},always:function(){i.done.apply(i,arguments).fail.apply(i,arguments);return this},pipe:function(a,b,c){return f.Deferred(function(d){f.each({done:[a,"resolve"],fail:[b,"reject"],progress:[c,"notify"]},function(a,b){var c=b[0],e=b[1],g;f.isFunction(c)?i[a](function(){g=c.apply(this,arguments),g&&f.isFunction(g.promise)?g.promise().then(d.resolve,d.reject,d.notify):d[e+"With"](this===i?d:this,[g])}):i[a](d[e])})}).promise()},promise:function(a){if(a==null)a=h;else for(var b in h)a[b]=h[b];return a}},i=h.promise({}),j;for(j in g)i[j]=g[j].fire,i[j+"With"]=g[j].fireWith;i.done(function(){e="resolved"},c.disable,d.lock).fail(function(){e="rejected"},b.disable,d.lock),a&&a.call(i,i);return i},when:function(a){function m(a){return function(b){e[a]=arguments.length>1?i.call(arguments,0):b,j.notifyWith(k,e)}}function l(a){return function(c){b[a]=arguments.length>1?i.call(arguments,0):c,--g||j.resolveWith(j,b)}}var b=i.call(arguments,0),c=0,d=b.length,e=Array(d),g=d,h=d,j=d<=1&&a&&f.isFunction(a.promise)?a:f.Deferred(),k=j.promise();if(d>1){for(;c<d;c++)b[c]&&b[c].promise&&f.isFunction(b[c].promise)?b[c].promise().then(l(c),j.reject,m(c)):--g;g||j.resolveWith(j,b)}else j!==a&&j.resolveWith(j,d?[a]:[]);return k}}),f.support=function(){var b,d,e,g,h,i,j,k,l,m,n,o,p=c.createElement("div"),q=c.documentElement;p.setAttribute("className","t"),p.innerHTML="   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>",d=p.getElementsByTagName("*"),e=p.getElementsByTagName("a")[0];if(!d||!d.length||!e)return{};g=c.createElement("select"),h=g.appendChild(c.createElement("option")),i=p.getElementsByTagName("input")[0],b={leadingWhitespace:p.firstChild.nodeType===3,tbody:!p.getElementsByTagName("tbody").length,htmlSerialize:!!p.getElementsByTagName("link").length,style:/top/.test(e.getAttribute("style")),hrefNormalized:e.getAttribute("href")==="/a",opacity:/^0.55/.test(e.style.opacity),cssFloat:!!e.style.cssFloat,checkOn:i.value==="on",optSelected:h.selected,getSetAttribute:p.className!=="t",enctype:!!c.createElement("form").enctype,html5Clone:c.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,pixelMargin:!0},f.boxModel=b.boxModel=c.compatMode==="CSS1Compat",i.checked=!0,b.noCloneChecked=i.cloneNode(!0).checked,g.disabled=!0,b.optDisabled=!h.disabled;try{delete p.test}catch(r){b.deleteExpando=!1}!p.addEventListener&&p.attachEvent&&p.fireEvent&&(p.attachEvent("onclick",function(){b.noCloneEvent=!1}),p.cloneNode(!0).fireEvent("onclick")),i=c.createElement("input"),i.value="t",i.setAttribute("type","radio"),b.radioValue=i.value==="t",i.setAttribute("checked","checked"),i.setAttribute("name","t"),p.appendChild(i),j=c.createDocumentFragment(),j.appendChild(p.lastChild),b.checkClone=j.cloneNode(!0).cloneNode(!0).lastChild.checked,b.appendChecked=i.checked,j.removeChild(i),j.appendChild(p);if(p.attachEvent)for(n in{submit:1,change:1,focusin:1})m="on"+n,o=m in p,o||(p.setAttribute(m,"return;"),o=typeof p[m]=="function"),b[n+"Bubbles"]=o;j.removeChild(p),j=g=h=p=i=null,f(function(){var d,e,g,h,i,j,l,m,n,q,r,s,t,u=c.getElementsByTagName("body")[0];!u||(m=1,t="padding:0;margin:0;border:",r="position:absolute;top:0;left:0;width:1px;height:1px;",s=t+"0;visibility:hidden;",n="style='"+r+t+"5px solid #000;",q="<div "+n+"display:block;'><div style='"+t+"0;display:block;overflow:hidden;'></div></div>"+"<table "+n+"' cellpadding='0' cellspacing='0'>"+"<tr><td></td></tr></table>",d=c.createElement("div"),d.style.cssText=s+"width:0;height:0;position:static;top:0;margin-top:"+m+"px",u.insertBefore(d,u.firstChild),p=c.createElement("div"),d.appendChild(p),p.innerHTML="<table><tr><td style='"+t+"0;display:none'></td><td>t</td></tr></table>",k=p.getElementsByTagName("td"),o=k[0].offsetHeight===0,k[0].style.display="",k[1].style.display="none",b.reliableHiddenOffsets=o&&k[0].offsetHeight===0,a.getComputedStyle&&(p.innerHTML="",l=c.createElement("div"),l.style.width="0",l.style.marginRight="0",p.style.width="2px",p.appendChild(l),b.reliableMarginRight=(parseInt((a.getComputedStyle(l,null)||{marginRight:0}).marginRight,10)||0)===0),typeof p.style.zoom!="undefined"&&(p.innerHTML="",p.style.width=p.style.padding="1px",p.style.border=0,p.style.overflow="hidden",p.style.display="inline",p.style.zoom=1,b.inlineBlockNeedsLayout=p.offsetWidth===3,p.style.display="block",p.style.overflow="visible",p.innerHTML="<div style='width:5px;'></div>",b.shrinkWrapBlocks=p.offsetWidth!==3),p.style.cssText=r+s,p.innerHTML=q,e=p.firstChild,g=e.firstChild,i=e.nextSibling.firstChild.firstChild,j={doesNotAddBorder:g.offsetTop!==5,doesAddBorderForTableAndCells:i.offsetTop===5},g.style.position="fixed",g.style.top="20px",j.fixedPosition=g.offsetTop===20||g.offsetTop===15,g.style.position=g.style.top="",e.style.overflow="hidden",e.style.position="relative",j.subtractsBorderForOverflowNotVisible=g.offsetTop===-5,j.doesNotIncludeMarginInBodyOffset=u.offsetTop!==m,a.getComputedStyle&&(p.style.marginTop="1%",b.pixelMargin=(a.getComputedStyle(p,null)||{marginTop:0}).marginTop!=="1%"),typeof d.style.zoom!="undefined"&&(d.style.zoom=1),u.removeChild(d),l=p=d=null,f.extend(b,j))});return b}();var j=/^(?:\{.*\}|\[.*\])$/,k=/([A-Z])/g;f.extend({cache:{},uuid:0,expando:"jQuery"+(f.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){a=a.nodeType?f.cache[a[f.expando]]:a[f.expando];return!!a&&!m(a)},data:function(a,c,d,e){if(!!f.acceptData(a)){var g,h,i,j=f.expando,k=typeof c=="string",l=a.nodeType,m=l?f.cache:a,n=l?a[j]:a[j]&&j,o=c==="events";if((!n||!m[n]||!o&&!e&&!m[n].data)&&k&&d===b)return;n||(l?a[j]=n=++f.uuid:n=j),m[n]||(m[n]={},l||(m[n].toJSON=f.noop));if(typeof c=="object"||typeof c=="function")e?m[n]=f.extend(m[n],c):m[n].data=f.extend(m[n].data,c);g=h=m[n],e||(h.data||(h.data={}),h=h.data),d!==b&&(h[f.camelCase(c)]=d);if(o&&!h[c])return g.events;k?(i=h[c],i==null&&(i=h[f.camelCase(c)])):i=h;return i}},removeData:function(a,b,c){if(!!f.acceptData(a)){var d,e,g,h=f.expando,i=a.nodeType,j=i?f.cache:a,k=i?a[h]:h;if(!j[k])return;if(b){d=c?j[k]:j[k].data;if(d){f.isArray(b)||(b in d?b=[b]:(b=f.camelCase(b),b in d?b=[b]:b=b.split(" ")));for(e=0,g=b.length;e<g;e++)delete d[b[e]];if(!(c?m:f.isEmptyObject)(d))return}}if(!c){delete j[k].data;if(!m(j[k]))return}f.support.deleteExpando||!j.setInterval?delete j[k]:j[k]=null,i&&(f.support.deleteExpando?delete a[h]:a.removeAttribute?a.removeAttribute(h):a[h]=null)}},_data:function(a,b,c){return f.data(a,b,c,!0)},acceptData:function(a){if(a.nodeName){var b=f.noData[a.nodeName.toLowerCase()];if(b)return b!==!0&&a.getAttribute("classid")===b}return!0}}),f.fn.extend({data:function(a,c){var d,e,g,h,i,j=this[0],k=0,m=null;if(a===b){if(this.length){m=f.data(j);if(j.nodeType===1&&!f._data(j,"parsedAttrs")){g=j.attributes;for(i=g.length;k<i;k++)h=g[k].name,h.indexOf("data-")===0&&(h=f.camelCase(h.substring(5)),l(j,h,m[h]));f._data(j,"parsedAttrs",!0)}}return m}if(typeof a=="object")return this.each(function(){f.data(this,a)});d=a.split(".",2),d[1]=d[1]?"."+d[1]:"",e=d[1]+"!";return f.access(this,function(c){if(c===b){m=this.triggerHandler("getData"+e,[d[0]]),m===b&&j&&(m=f.data(j,a),m=l(j,a,m));return m===b&&d[1]?this.data(d[0]):m}d[1]=c,this.each(function(){var b=f(this);b.triggerHandler("setData"+e,d),f.data(this,a,c),b.triggerHandler("changeData"+e,d)})},null,c,arguments.length>1,null,!1)},removeData:function(a){return this.each(function(){f.removeData(this,a)})}}),f.extend({_mark:function(a,b){a&&(b=(b||"fx")+"mark",f._data(a,b,(f._data(a,b)||0)+1))},_unmark:function(a,b,c){a!==!0&&(c=b,b=a,a=!1);if(b){c=c||"fx";var d=c+"mark",e=a?0:(f._data(b,d)||1)-1;e?f._data(b,d,e):(f.removeData(b,d,!0),n(b,c,"mark"))}},queue:function(a,b,c){var d;if(a){b=(b||"fx")+"queue",d=f._data(a,b),c&&(!d||f.isArray(c)?d=f._data(a,b,f.makeArray(c)):d.push(c));return d||[]}},dequeue:function(a,b){b=b||"fx";var c=f.queue(a,b),d=c.shift(),e={};d==="inprogress"&&(d=c.shift()),d&&(b==="fx"&&c.unshift("inprogress"),f._data(a,b+".run",e),d.call(a,function(){f.dequeue(a,b)},e)),c.length||(f.removeData(a,b+"queue "+b+".run",!0),n(a,b,"queue"))}}),f.fn.extend({queue:function(a,c){var d=2;typeof a!="string"&&(c=a,a="fx",d--);if(arguments.length<d)return f.queue(this[0],a);return c===b?this:this.each(function(){var b=f.queue(this,a,c);a==="fx"&&b[0]!=="inprogress"&&f.dequeue(this,a)})},dequeue:function(a){return this.each(function(){f.dequeue(this,a)})},delay:function(a,b){a=f.fx?f.fx.speeds[a]||a:a,b=b||"fx";return this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,c){function m(){--h||d.resolveWith(e,[e])}typeof a!="string"&&(c=a,a=b),a=a||"fx";var d=f.Deferred(),e=this,g=e.length,h=1,i=a+"defer",j=a+"queue",k=a+"mark",l;while(g--)if(l=f.data(e[g],i,b,!0)||(f.data(e[g],j,b,!0)||f.data(e[g],k,b,!0))&&f.data(e[g],i,f.Callbacks("once memory"),!0))h++,l.add(m);m();return d.promise(c)}});var o=/[\n\t\r]/g,p=/\s+/,q=/\r/g,r=/^(?:button|input)$/i,s=/^(?:button|input|object|select|textarea)$/i,t=/^a(?:rea)?$/i,u=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,v=f.support.getSetAttribute,w,x,y;f.fn.extend({attr:function(a,b){return f.access(this,f.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){f.removeAttr(this,a)})},prop:function(a,b){return f.access(this,f.prop,a,b,arguments.length>1)},removeProp:function(a){a=f.propFix[a]||a;return this.each(function(){try{this[a]=b,delete this[a]}catch(c){}})},addClass:function(a){var b,c,d,e,g,h,i;if(f.isFunction(a))return this.each(function(b){f(this).addClass(a.call(this,b,this.className))});if(a&&typeof a=="string"){b=a.split(p);for(c=0,d=this.length;c<d;c++){e=this[c];if(e.nodeType===1)if(!e.className&&b.length===1)e.className=a;else{g=" "+e.className+" ";for(h=0,i=b.length;h<i;h++)~g.indexOf(" "+b[h]+" ")||(g+=b[h]+" ");e.className=f.trim(g)}}}return this},removeClass:function(a){var c,d,e,g,h,i,j;if(f.isFunction(a))return this.each(function(b){f(this).removeClass(a.call(this,b,this.className))});if(a&&typeof a=="string"||a===b){c=(a||"").split(p);for(d=0,e=this.length;d<e;d++){g=this[d];if(g.nodeType===1&&g.className)if(a){h=(" "+g.className+" ").replace(o," ");for(i=0,j=c.length;i<j;i++)h=h.replace(" "+c[i]+" "," ");g.className=f.trim(h)}else g.className=""}}return this},toggleClass:function(a,b){var c=typeof a,d=typeof b=="boolean";if(f.isFunction(a))return this.each(function(c){f(this).toggleClass(a.call(this,c,this.className,b),b)});return this.each(function(){if(c==="string"){var e,g=0,h=f(this),i=b,j=a.split(p);while(e=j[g++])i=d?i:!h.hasClass(e),h[i?"addClass":"removeClass"](e)}else if(c==="undefined"||c==="boolean")this.className&&f._data(this,"__className__",this.className),this.className=this.className||a===!1?"":f._data(this,"__className__")||""})},hasClass:function(a){var b=" "+a+" ",c=0,d=this.length;for(;c<d;c++)if(this[c].nodeType===1&&(" "+this[c].className+" ").replace(o," ").indexOf(b)>-1)return!0;return!1},val:function(a){var c,d,e,g=this[0];{if(!!arguments.length){e=f.isFunction(a);return this.each(function(d){var g=f(this),h;if(this.nodeType===1){e?h=a.call(this,d,g.val()):h=a,h==null?h="":typeof h=="number"?h+="":f.isArray(h)&&(h=f.map(h,function(a){return a==null?"":a+""})),c=f.valHooks[this.type]||f.valHooks[this.nodeName.toLowerCase()];if(!c||!("set"in c)||c.set(this,h,"value")===b)this.value=h}})}if(g){c=f.valHooks[g.type]||f.valHooks[g.nodeName.toLowerCase()];if(c&&"get"in c&&(d=c.get(g,"value"))!==b)return d;d=g.value;return typeof d=="string"?d.replace(q,""):d==null?"":d}}}}),f.extend({valHooks:{option:{get:function(a){var b=a.attributes.value;return!b||b.specified?a.value:a.text}},select:{get:function(a){var b,c,d,e,g=a.selectedIndex,h=[],i=a.options,j=a.type==="select-one";if(g<0)return null;c=j?g:0,d=j?g+1:i.length;for(;c<d;c++){e=i[c];if(e.selected&&(f.support.optDisabled?!e.disabled:e.getAttribute("disabled")===null)&&(!e.parentNode.disabled||!f.nodeName(e.parentNode,"optgroup"))){b=f(e).val();if(j)return b;h.push(b)}}if(j&&!h.length&&i.length)return f(i[g]).val();return h},set:function(a,b){var c=f.makeArray(b);f(a).find("option").each(function(){this.selected=f.inArray(f(this).val(),c)>=0}),c.length||(a.selectedIndex=-1);return c}}},attrFn:{val:!0,css:!0,html:!0,text:!0,data:!0,width:!0,height:!0,offset:!0},attr:function(a,c,d,e){var g,h,i,j=a.nodeType;if(!!a&&j!==3&&j!==8&&j!==2){if(e&&c in f.attrFn)return f(a)[c](d);if(typeof a.getAttribute=="undefined")return f.prop(a,c,d);i=j!==1||!f.isXMLDoc(a),i&&(c=c.toLowerCase(),h=f.attrHooks[c]||(u.test(c)?x:w));if(d!==b){if(d===null){f.removeAttr(a,c);return}if(h&&"set"in h&&i&&(g=h.set(a,d,c))!==b)return g;a.setAttribute(c,""+d);return d}if(h&&"get"in h&&i&&(g=h.get(a,c))!==null)return g;g=a.getAttribute(c);return g===null?b:g}},removeAttr:function(a,b){var c,d,e,g,h,i=0;if(b&&a.nodeType===1){d=b.toLowerCase().split(p),g=d.length;for(;i<g;i++)e=d[i],e&&(c=f.propFix[e]||e,h=u.test(e),h||f.attr(a,e,""),a.removeAttribute(v?e:c),h&&c in a&&(a[c]=!1))}},attrHooks:{type:{set:function(a,b){if(r.test(a.nodeName)&&a.parentNode)f.error("type property can't be changed");else if(!f.support.radioValue&&b==="radio"&&f.nodeName(a,"input")){var c=a.value;a.setAttribute("type",b),c&&(a.value=c);return b}}},value:{get:function(a,b){if(w&&f.nodeName(a,"button"))return w.get(a,b);return b in a?a.value:null},set:function(a,b,c){if(w&&f.nodeName(a,"button"))return w.set(a,b,c);a.value=b}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(a,c,d){var e,g,h,i=a.nodeType;if(!!a&&i!==3&&i!==8&&i!==2){h=i!==1||!f.isXMLDoc(a),h&&(c=f.propFix[c]||c,g=f.propHooks[c]);return d!==b?g&&"set"in g&&(e=g.set(a,d,c))!==b?e:a[c]=d:g&&"get"in g&&(e=g.get(a,c))!==null?e:a[c]}},propHooks:{tabIndex:{get:function(a){var c=a.getAttributeNode("tabindex");return c&&c.specified?parseInt(c.value,10):s.test(a.nodeName)||t.test(a.nodeName)&&a.href?0:b}}}}),f.attrHooks.tabindex=f.propHooks.tabIndex,x={get:function(a,c){var d,e=f.prop(a,c);return e===!0||typeof e!="boolean"&&(d=a.getAttributeNode(c))&&d.nodeValue!==!1?c.toLowerCase():b},set:function(a,b,c){var d;b===!1?f.removeAttr(a,c):(d=f.propFix[c]||c,d in a&&(a[d]=!0),a.setAttribute(c,c.toLowerCase()));return c}},v||(y={name:!0,id:!0,coords:!0},w=f.valHooks.button={get:function(a,c){var d;d=a.getAttributeNode(c);return d&&(y[c]?d.nodeValue!=="":d.specified)?d.nodeValue:b},set:function(a,b,d){var e=a.getAttributeNode(d);e||(e=c.createAttribute(d),a.setAttributeNode(e));return e.nodeValue=b+""}},f.attrHooks.tabindex.set=w.set,f.each(["width","height"],function(a,b){f.attrHooks[b]=f.extend(f.attrHooks[b],{set:function(a,c){if(c===""){a.setAttribute(b,"auto");return c}}})}),f.attrHooks.contenteditable={get:w.get,set:function(a,b,c){b===""&&(b="false"),w.set(a,b,c)}}),f.support.hrefNormalized||f.each(["href","src","width","height"],function(a,c){f.attrHooks[c]=f.extend(f.attrHooks[c],{get:function(a){var d=a.getAttribute(c,2);return d===null?b:d}})}),f.support.style||(f.attrHooks.style={get:function(a){return a.style.cssText.toLowerCase()||b},set:function(a,b){return a.style.cssText=""+b}}),f.support.optSelected||(f.propHooks.selected=f.extend(f.propHooks.selected,{get:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex);return null}})),f.support.enctype||(f.propFix.enctype="encoding"),f.support.checkOn||f.each(["radio","checkbox"],function(){f.valHooks[this]={get:function(a){return a.getAttribute("value")===null?"on":a.value}}}),f.each(["radio","checkbox"],function(){f.valHooks[this]=f.extend(f.valHooks[this],{set:function(a,b){if(f.isArray(b))return a.checked=f.inArray(f(a).val(),b)>=0}})});var z=/^(?:textarea|input|select)$/i,A=/^([^\.]*)?(?:\.(.+))?$/,B=/(?:^|\s)hover(\.\S+)?\b/,C=/^key/,D=/^(?:mouse|contextmenu)|click/,E=/^(?:focusinfocus|focusoutblur)$/,F=/^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,G=function(
a){var b=F.exec(a);b&&(b[1]=(b[1]||"").toLowerCase(),b[3]=b[3]&&new RegExp("(?:^|\\s)"+b[3]+"(?:\\s|$)"));return b},H=function(a,b){var c=a.attributes||{};return(!b[1]||a.nodeName.toLowerCase()===b[1])&&(!b[2]||(c.id||{}).value===b[2])&&(!b[3]||b[3].test((c["class"]||{}).value))},I=function(a){return f.event.special.hover?a:a.replace(B,"mouseenter$1 mouseleave$1")};f.event={add:function(a,c,d,e,g){var h,i,j,k,l,m,n,o,p,q,r,s;if(!(a.nodeType===3||a.nodeType===8||!c||!d||!(h=f._data(a)))){d.handler&&(p=d,d=p.handler,g=p.selector),d.guid||(d.guid=f.guid++),j=h.events,j||(h.events=j={}),i=h.handle,i||(h.handle=i=function(a){return typeof f!="undefined"&&(!a||f.event.triggered!==a.type)?f.event.dispatch.apply(i.elem,arguments):b},i.elem=a),c=f.trim(I(c)).split(" ");for(k=0;k<c.length;k++){l=A.exec(c[k])||[],m=l[1],n=(l[2]||"").split(".").sort(),s=f.event.special[m]||{},m=(g?s.delegateType:s.bindType)||m,s=f.event.special[m]||{},o=f.extend({type:m,origType:l[1],data:e,handler:d,guid:d.guid,selector:g,quick:g&&G(g),namespace:n.join(".")},p),r=j[m];if(!r){r=j[m]=[],r.delegateCount=0;if(!s.setup||s.setup.call(a,e,n,i)===!1)a.addEventListener?a.addEventListener(m,i,!1):a.attachEvent&&a.attachEvent("on"+m,i)}s.add&&(s.add.call(a,o),o.handler.guid||(o.handler.guid=d.guid)),g?r.splice(r.delegateCount++,0,o):r.push(o),f.event.global[m]=!0}a=null}},global:{},remove:function(a,b,c,d,e){var g=f.hasData(a)&&f._data(a),h,i,j,k,l,m,n,o,p,q,r,s;if(!!g&&!!(o=g.events)){b=f.trim(I(b||"")).split(" ");for(h=0;h<b.length;h++){i=A.exec(b[h])||[],j=k=i[1],l=i[2];if(!j){for(j in o)f.event.remove(a,j+b[h],c,d,!0);continue}p=f.event.special[j]||{},j=(d?p.delegateType:p.bindType)||j,r=o[j]||[],m=r.length,l=l?new RegExp("(^|\\.)"+l.split(".").sort().join("\\.(?:.*\\.)?")+"(\\.|$)"):null;for(n=0;n<r.length;n++)s=r[n],(e||k===s.origType)&&(!c||c.guid===s.guid)&&(!l||l.test(s.namespace))&&(!d||d===s.selector||d==="**"&&s.selector)&&(r.splice(n--,1),s.selector&&r.delegateCount--,p.remove&&p.remove.call(a,s));r.length===0&&m!==r.length&&((!p.teardown||p.teardown.call(a,l)===!1)&&f.removeEvent(a,j,g.handle),delete o[j])}f.isEmptyObject(o)&&(q=g.handle,q&&(q.elem=null),f.removeData(a,["events","handle"],!0))}},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(c,d,e,g){if(!e||e.nodeType!==3&&e.nodeType!==8){var h=c.type||c,i=[],j,k,l,m,n,o,p,q,r,s;if(E.test(h+f.event.triggered))return;h.indexOf("!")>=0&&(h=h.slice(0,-1),k=!0),h.indexOf(".")>=0&&(i=h.split("."),h=i.shift(),i.sort());if((!e||f.event.customEvent[h])&&!f.event.global[h])return;c=typeof c=="object"?c[f.expando]?c:new f.Event(h,c):new f.Event(h),c.type=h,c.isTrigger=!0,c.exclusive=k,c.namespace=i.join("."),c.namespace_re=c.namespace?new RegExp("(^|\\.)"+i.join("\\.(?:.*\\.)?")+"(\\.|$)"):null,o=h.indexOf(":")<0?"on"+h:"";if(!e){j=f.cache;for(l in j)j[l].events&&j[l].events[h]&&f.event.trigger(c,d,j[l].handle.elem,!0);return}c.result=b,c.target||(c.target=e),d=d!=null?f.makeArray(d):[],d.unshift(c),p=f.event.special[h]||{};if(p.trigger&&p.trigger.apply(e,d)===!1)return;r=[[e,p.bindType||h]];if(!g&&!p.noBubble&&!f.isWindow(e)){s=p.delegateType||h,m=E.test(s+h)?e:e.parentNode,n=null;for(;m;m=m.parentNode)r.push([m,s]),n=m;n&&n===e.ownerDocument&&r.push([n.defaultView||n.parentWindow||a,s])}for(l=0;l<r.length&&!c.isPropagationStopped();l++)m=r[l][0],c.type=r[l][1],q=(f._data(m,"events")||{})[c.type]&&f._data(m,"handle"),q&&q.apply(m,d),q=o&&m[o],q&&f.acceptData(m)&&q.apply(m,d)===!1&&c.preventDefault();c.type=h,!g&&!c.isDefaultPrevented()&&(!p._default||p._default.apply(e.ownerDocument,d)===!1)&&(h!=="click"||!f.nodeName(e,"a"))&&f.acceptData(e)&&o&&e[h]&&(h!=="focus"&&h!=="blur"||c.target.offsetWidth!==0)&&!f.isWindow(e)&&(n=e[o],n&&(e[o]=null),f.event.triggered=h,e[h](),f.event.triggered=b,n&&(e[o]=n));return c.result}},dispatch:function(c){c=f.event.fix(c||a.event);var d=(f._data(this,"events")||{})[c.type]||[],e=d.delegateCount,g=[].slice.call(arguments,0),h=!c.exclusive&&!c.namespace,i=f.event.special[c.type]||{},j=[],k,l,m,n,o,p,q,r,s,t,u;g[0]=c,c.delegateTarget=this;if(!i.preDispatch||i.preDispatch.call(this,c)!==!1){if(e&&(!c.button||c.type!=="click")){n=f(this),n.context=this.ownerDocument||this;for(m=c.target;m!=this;m=m.parentNode||this)if(m.disabled!==!0){p={},r=[],n[0]=m;for(k=0;k<e;k++)s=d[k],t=s.selector,p[t]===b&&(p[t]=s.quick?H(m,s.quick):n.is(t)),p[t]&&r.push(s);r.length&&j.push({elem:m,matches:r})}}d.length>e&&j.push({elem:this,matches:d.slice(e)});for(k=0;k<j.length&&!c.isPropagationStopped();k++){q=j[k],c.currentTarget=q.elem;for(l=0;l<q.matches.length&&!c.isImmediatePropagationStopped();l++){s=q.matches[l];if(h||!c.namespace&&!s.namespace||c.namespace_re&&c.namespace_re.test(s.namespace))c.data=s.data,c.handleObj=s,o=((f.event.special[s.origType]||{}).handle||s.handler).apply(q.elem,g),o!==b&&(c.result=o,o===!1&&(c.preventDefault(),c.stopPropagation()))}}i.postDispatch&&i.postDispatch.call(this,c);return c.result}},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){a.which==null&&(a.which=b.charCode!=null?b.charCode:b.keyCode);return a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,d){var e,f,g,h=d.button,i=d.fromElement;a.pageX==null&&d.clientX!=null&&(e=a.target.ownerDocument||c,f=e.documentElement,g=e.body,a.pageX=d.clientX+(f&&f.scrollLeft||g&&g.scrollLeft||0)-(f&&f.clientLeft||g&&g.clientLeft||0),a.pageY=d.clientY+(f&&f.scrollTop||g&&g.scrollTop||0)-(f&&f.clientTop||g&&g.clientTop||0)),!a.relatedTarget&&i&&(a.relatedTarget=i===a.target?d.toElement:i),!a.which&&h!==b&&(a.which=h&1?1:h&2?3:h&4?2:0);return a}},fix:function(a){if(a[f.expando])return a;var d,e,g=a,h=f.event.fixHooks[a.type]||{},i=h.props?this.props.concat(h.props):this.props;a=f.Event(g);for(d=i.length;d;)e=i[--d],a[e]=g[e];a.target||(a.target=g.srcElement||c),a.target.nodeType===3&&(a.target=a.target.parentNode),a.metaKey===b&&(a.metaKey=a.ctrlKey);return h.filter?h.filter(a,g):a},special:{ready:{setup:f.bindReady},load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(a,b,c){f.isWindow(this)&&(this.onbeforeunload=c)},teardown:function(a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)}}},simulate:function(a,b,c,d){var e=f.extend(new f.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?f.event.trigger(e,null,b):f.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},f.event.handle=f.event.dispatch,f.removeEvent=c.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){a.detachEvent&&a.detachEvent("on"+b,c)},f.Event=function(a,b){if(!(this instanceof f.Event))return new f.Event(a,b);a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?K:J):this.type=a,b&&f.extend(this,b),this.timeStamp=a&&a.timeStamp||f.now(),this[f.expando]=!0},f.Event.prototype={preventDefault:function(){this.isDefaultPrevented=K;var a=this.originalEvent;!a||(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){this.isPropagationStopped=K;var a=this.originalEvent;!a||(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=K,this.stopPropagation()},isDefaultPrevented:J,isPropagationStopped:J,isImmediatePropagationStopped:J},f.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){f.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c=this,d=a.relatedTarget,e=a.handleObj,g=e.selector,h;if(!d||d!==c&&!f.contains(c,d))a.type=e.origType,h=e.handler.apply(this,arguments),a.type=b;return h}}}),f.support.submitBubbles||(f.event.special.submit={setup:function(){if(f.nodeName(this,"form"))return!1;f.event.add(this,"click._submit keypress._submit",function(a){var c=a.target,d=f.nodeName(c,"input")||f.nodeName(c,"button")?c.form:b;d&&!d._submit_attached&&(f.event.add(d,"submit._submit",function(a){a._submit_bubble=!0}),d._submit_attached=!0)})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&f.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){if(f.nodeName(this,"form"))return!1;f.event.remove(this,"._submit")}}),f.support.changeBubbles||(f.event.special.change={setup:function(){if(z.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")f.event.add(this,"propertychange._change",function(a){a.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),f.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1,f.event.simulate("change",this,a,!0))});return!1}f.event.add(this,"beforeactivate._change",function(a){var b=a.target;z.test(b.nodeName)&&!b._change_attached&&(f.event.add(b,"change._change",function(a){this.parentNode&&!a.isSimulated&&!a.isTrigger&&f.event.simulate("change",this.parentNode,a,!0)}),b._change_attached=!0)})},handle:function(a){var b=a.target;if(this!==b||a.isSimulated||a.isTrigger||b.type!=="radio"&&b.type!=="checkbox")return a.handleObj.handler.apply(this,arguments)},teardown:function(){f.event.remove(this,"._change");return z.test(this.nodeName)}}),f.support.focusinBubbles||f.each({focus:"focusin",blur:"focusout"},function(a,b){var d=0,e=function(a){f.event.simulate(b,a.target,f.event.fix(a),!0)};f.event.special[b]={setup:function(){d++===0&&c.addEventListener(a,e,!0)},teardown:function(){--d===0&&c.removeEventListener(a,e,!0)}}}),f.fn.extend({on:function(a,c,d,e,g){var h,i;if(typeof a=="object"){typeof c!="string"&&(d=d||c,c=b);for(i in a)this.on(i,c,d,a[i],g);return this}d==null&&e==null?(e=c,d=c=b):e==null&&(typeof c=="string"?(e=d,d=b):(e=d,d=c,c=b));if(e===!1)e=J;else if(!e)return this;g===1&&(h=e,e=function(a){f().off(a);return h.apply(this,arguments)},e.guid=h.guid||(h.guid=f.guid++));return this.each(function(){f.event.add(this,a,e,d,c)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,c,d){if(a&&a.preventDefault&&a.handleObj){var e=a.handleObj;f(a.delegateTarget).off(e.namespace?e.origType+"."+e.namespace:e.origType,e.selector,e.handler);return this}if(typeof a=="object"){for(var g in a)this.off(g,c,a[g]);return this}if(c===!1||typeof c=="function")d=c,c=b;d===!1&&(d=J);return this.each(function(){f.event.remove(this,a,d,c)})},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},live:function(a,b,c){f(this.context).on(a,this.selector,b,c);return this},die:function(a,b){f(this.context).off(a,this.selector||"**",b);return this},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return arguments.length==1?this.off(a,"**"):this.off(b,a,c)},trigger:function(a,b){return this.each(function(){f.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0])return f.event.trigger(a,b,this[0],!0)},toggle:function(a){var b=arguments,c=a.guid||f.guid++,d=0,e=function(c){var e=(f._data(this,"lastToggle"+a.guid)||0)%d;f._data(this,"lastToggle"+a.guid,e+1),c.preventDefault();return b[e].apply(this,arguments)||!1};e.guid=c;while(d<b.length)b[d++].guid=c;return this.click(e)},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){f.fn[b]=function(a,c){c==null&&(c=a,a=null);return arguments.length>0?this.on(b,null,a,c):this.trigger(b)},f.attrFn&&(f.attrFn[b]=!0),C.test(b)&&(f.event.fixHooks[b]=f.event.keyHooks),D.test(b)&&(f.event.fixHooks[b]=f.event.mouseHooks)}),function(){function x(a,b,c,e,f,g){for(var h=0,i=e.length;h<i;h++){var j=e[h];if(j){var k=!1;j=j[a];while(j){if(j[d]===c){k=e[j.sizset];break}if(j.nodeType===1){g||(j[d]=c,j.sizset=h);if(typeof b!="string"){if(j===b){k=!0;break}}else if(m.filter(b,[j]).length>0){k=j;break}}j=j[a]}e[h]=k}}}function w(a,b,c,e,f,g){for(var h=0,i=e.length;h<i;h++){var j=e[h];if(j){var k=!1;j=j[a];while(j){if(j[d]===c){k=e[j.sizset];break}j.nodeType===1&&!g&&(j[d]=c,j.sizset=h);if(j.nodeName.toLowerCase()===b){k=j;break}j=j[a]}e[h]=k}}}var a=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,d="sizcache"+(Math.random()+"").replace(".",""),e=0,g=Object.prototype.toString,h=!1,i=!0,j=/\\/g,k=/\r\n/g,l=/\W/;[0,0].sort(function(){i=!1;return 0});var m=function(b,d,e,f){e=e||[],d=d||c;var h=d;if(d.nodeType!==1&&d.nodeType!==9)return[];if(!b||typeof b!="string")return e;var i,j,k,l,n,q,r,t,u=!0,v=m.isXML(d),w=[],x=b;do{a.exec(""),i=a.exec(x);if(i){x=i[3],w.push(i[1]);if(i[2]){l=i[3];break}}}while(i);if(w.length>1&&p.exec(b))if(w.length===2&&o.relative[w[0]])j=y(w[0]+w[1],d,f);else{j=o.relative[w[0]]?[d]:m(w.shift(),d);while(w.length)b=w.shift(),o.relative[b]&&(b+=w.shift()),j=y(b,j,f)}else{!f&&w.length>1&&d.nodeType===9&&!v&&o.match.ID.test(w[0])&&!o.match.ID.test(w[w.length-1])&&(n=m.find(w.shift(),d,v),d=n.expr?m.filter(n.expr,n.set)[0]:n.set[0]);if(d){n=f?{expr:w.pop(),set:s(f)}:m.find(w.pop(),w.length===1&&(w[0]==="~"||w[0]==="+")&&d.parentNode?d.parentNode:d,v),j=n.expr?m.filter(n.expr,n.set):n.set,w.length>0?k=s(j):u=!1;while(w.length)q=w.pop(),r=q,o.relative[q]?r=w.pop():q="",r==null&&(r=d),o.relative[q](k,r,v)}else k=w=[]}k||(k=j),k||m.error(q||b);if(g.call(k)==="[object Array]")if(!u)e.push.apply(e,k);else if(d&&d.nodeType===1)for(t=0;k[t]!=null;t++)k[t]&&(k[t]===!0||k[t].nodeType===1&&m.contains(d,k[t]))&&e.push(j[t]);else for(t=0;k[t]!=null;t++)k[t]&&k[t].nodeType===1&&e.push(j[t]);else s(k,e);l&&(m(l,h,e,f),m.uniqueSort(e));return e};m.uniqueSort=function(a){if(u){h=i,a.sort(u);if(h)for(var b=1;b<a.length;b++)a[b]===a[b-1]&&a.splice(b--,1)}return a},m.matches=function(a,b){return m(a,null,null,b)},m.matchesSelector=function(a,b){return m(b,null,null,[a]).length>0},m.find=function(a,b,c){var d,e,f,g,h,i;if(!a)return[];for(e=0,f=o.order.length;e<f;e++){h=o.order[e];if(g=o.leftMatch[h].exec(a)){i=g[1],g.splice(1,1);if(i.substr(i.length-1)!=="\\"){g[1]=(g[1]||"").replace(j,""),d=o.find[h](g,b,c);if(d!=null){a=a.replace(o.match[h],"");break}}}}d||(d=typeof b.getElementsByTagName!="undefined"?b.getElementsByTagName("*"):[]);return{set:d,expr:a}},m.filter=function(a,c,d,e){var f,g,h,i,j,k,l,n,p,q=a,r=[],s=c,t=c&&c[0]&&m.isXML(c[0]);while(a&&c.length){for(h in o.filter)if((f=o.leftMatch[h].exec(a))!=null&&f[2]){k=o.filter[h],l=f[1],g=!1,f.splice(1,1);if(l.substr(l.length-1)==="\\")continue;s===r&&(r=[]);if(o.preFilter[h]){f=o.preFilter[h](f,s,d,r,e,t);if(!f)g=i=!0;else if(f===!0)continue}if(f)for(n=0;(j=s[n])!=null;n++)j&&(i=k(j,f,n,s),p=e^i,d&&i!=null?p?g=!0:s[n]=!1:p&&(r.push(j),g=!0));if(i!==b){d||(s=r),a=a.replace(o.match[h],"");if(!g)return[];break}}if(a===q)if(g==null)m.error(a);else break;q=a}return s},m.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)};var n=m.getText=function(a){var b,c,d=a.nodeType,e="";if(d){if(d===1||d===9||d===11){if(typeof a.textContent=="string")return a.textContent;if(typeof a.innerText=="string")return a.innerText.replace(k,"");for(a=a.firstChild;a;a=a.nextSibling)e+=n(a)}else if(d===3||d===4)return a.nodeValue}else for(b=0;c=a[b];b++)c.nodeType!==8&&(e+=n(c));return e},o=m.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(a){return a.getAttribute("href")},type:function(a){return a.getAttribute("type")}},relative:{"+":function(a,b){var c=typeof b=="string",d=c&&!l.test(b),e=c&&!d;d&&(b=b.toLowerCase());for(var f=0,g=a.length,h;f<g;f++)if(h=a[f]){while((h=h.previousSibling)&&h.nodeType!==1);a[f]=e||h&&h.nodeName.toLowerCase()===b?h||!1:h===b}e&&m.filter(b,a,!0)},">":function(a,b){var c,d=typeof b=="string",e=0,f=a.length;if(d&&!l.test(b)){b=b.toLowerCase();for(;e<f;e++){c=a[e];if(c){var g=c.parentNode;a[e]=g.nodeName.toLowerCase()===b?g:!1}}}else{for(;e<f;e++)c=a[e],c&&(a[e]=d?c.parentNode:c.parentNode===b);d&&m.filter(b,a,!0)}},"":function(a,b,c){var d,f=e++,g=x;typeof b=="string"&&!l.test(b)&&(b=b.toLowerCase(),d=b,g=w),g("parentNode",b,f,a,d,c)},"~":function(a,b,c){var d,f=e++,g=x;typeof b=="string"&&!l.test(b)&&(b=b.toLowerCase(),d=b,g=w),g("previousSibling",b,f,a,d,c)}},find:{ID:function(a,b,c){if(typeof b.getElementById!="undefined"&&!c){var d=b.getElementById(a[1]);return d&&d.parentNode?[d]:[]}},NAME:function(a,b){if(typeof b.getElementsByName!="undefined"){var c=[],d=b.getElementsByName(a[1]);for(var e=0,f=d.length;e<f;e++)d[e].getAttribute("name")===a[1]&&c.push(d[e]);return c.length===0?null:c}},TAG:function(a,b){if(typeof b.getElementsByTagName!="undefined")return b.getElementsByTagName(a[1])}},preFilter:{CLASS:function(a,b,c,d,e,f){a=" "+a[1].replace(j,"")+" ";if(f)return a;for(var g=0,h;(h=b[g])!=null;g++)h&&(e^(h.className&&(" "+h.className+" ").replace(/[\t\n\r]/g," ").indexOf(a)>=0)?c||d.push(h):c&&(b[g]=!1));return!1},ID:function(a){return a[1].replace(j,"")},TAG:function(a,b){return a[1].replace(j,"").toLowerCase()},CHILD:function(a){if(a[1]==="nth"){a[2]||m.error(a[0]),a[2]=a[2].replace(/^\+|\s*/g,"");var b=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2]==="even"&&"2n"||a[2]==="odd"&&"2n+1"||!/\D/.test(a[2])&&"0n+"+a[2]||a[2]);a[2]=b[1]+(b[2]||1)-0,a[3]=b[3]-0}else a[2]&&m.error(a[0]);a[0]=e++;return a},ATTR:function(a,b,c,d,e,f){var g=a[1]=a[1].replace(j,"");!f&&o.attrMap[g]&&(a[1]=o.attrMap[g]),a[4]=(a[4]||a[5]||"").replace(j,""),a[2]==="~="&&(a[4]=" "+a[4]+" ");return a},PSEUDO:function(b,c,d,e,f){if(b[1]==="not")if((a.exec(b[3])||"").length>1||/^\w/.test(b[3]))b[3]=m(b[3],null,null,c);else{var g=m.filter(b[3],c,d,!0^f);d||e.push.apply(e,g);return!1}else if(o.match.POS.test(b[0])||o.match.CHILD.test(b[0]))return!0;return b},POS:function(a){a.unshift(!0);return a}},filters:{enabled:function(a){return a.disabled===!1&&a.type!=="hidden"},disabled:function(a){return a.disabled===!0},checked:function(a){return a.checked===!0},selected:function(a){a.parentNode&&a.parentNode.selectedIndex;return a.selected===!0},parent:function(a){return!!a.firstChild},empty:function(a){return!a.firstChild},has:function(a,b,c){return!!m(c[3],a).length},header:function(a){return/h\d/i.test(a.nodeName)},text:function(a){var b=a.getAttribute("type"),c=a.type;return a.nodeName.toLowerCase()==="input"&&"text"===c&&(b===c||b===null)},radio:function(a){return a.nodeName.toLowerCase()==="input"&&"radio"===a.type},checkbox:function(a){return a.nodeName.toLowerCase()==="input"&&"checkbox"===a.type},file:function(a){return a.nodeName.toLowerCase()==="input"&&"file"===a.type},password:function(a){return a.nodeName.toLowerCase()==="input"&&"password"===a.type},submit:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"submit"===a.type},image:function(a){return a.nodeName.toLowerCase()==="input"&&"image"===a.type},reset:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"reset"===a.type},button:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&"button"===a.type||b==="button"},input:function(a){return/input|select|textarea|button/i.test(a.nodeName)},focus:function(a){return a===a.ownerDocument.activeElement}},setFilters:{first:function(a,b){return b===0},last:function(a,b,c,d){return b===d.length-1},even:function(a,b){return b%2===0},odd:function(a,b){return b%2===1},lt:function(a,b,c){return b<c[3]-0},gt:function(a,b,c){return b>c[3]-0},nth:function(a,b,c){return c[3]-0===b},eq:function(a,b,c){return c[3]-0===b}},filter:{PSEUDO:function(a,b,c,d){var e=b[1],f=o.filters[e];if(f)return f(a,c,b,d);if(e==="contains")return(a.textContent||a.innerText||n([a])||"").indexOf(b[3])>=0;if(e==="not"){var g=b[3];for(var h=0,i=g.length;h<i;h++)if(g[h]===a)return!1;return!0}m.error(e)},CHILD:function(a,b){var c,e,f,g,h,i,j,k=b[1],l=a;switch(k){case"only":case"first":while(l=l.previousSibling)if(l.nodeType===1)return!1;if(k==="first")return!0;l=a;case"last":while(l=l.nextSibling)if(l.nodeType===1)return!1;return!0;case"nth":c=b[2],e=b[3];if(c===1&&e===0)return!0;f=b[0],g=a.parentNode;if(g&&(g[d]!==f||!a.nodeIndex)){i=0;for(l=g.firstChild;l;l=l.nextSibling)l.nodeType===1&&(l.nodeIndex=++i);g[d]=f}j=a.nodeIndex-e;return c===0?j===0:j%c===0&&j/c>=0}},ID:function(a,b){return a.nodeType===1&&a.getAttribute("id")===b},TAG:function(a,b){return b==="*"&&a.nodeType===1||!!a.nodeName&&a.nodeName.toLowerCase()===b},CLASS:function(a,b){return(" "+(a.className||a.getAttribute("class"))+" ").indexOf(b)>-1},ATTR:function(a,b){var c=b[1],d=m.attr?m.attr(a,c):o.attrHandle[c]?o.attrHandle[c](a):a[c]!=null?a[c]:a.getAttribute(c),e=d+"",f=b[2],g=b[4];return d==null?f==="!=":!f&&m.attr?d!=null:f==="="?e===g:f==="*="?e.indexOf(g)>=0:f==="~="?(" "+e+" ").indexOf(g)>=0:g?f==="!="?e!==g:f==="^="?e.indexOf(g)===0:f==="$="?e.substr(e.length-g.length)===g:f==="|="?e===g||e.substr(0,g.length+1)===g+"-":!1:e&&d!==!1},POS:function(a,b,c,d){var e=b[2],f=o.setFilters[e];if(f)return f(a,c,b,d)}}},p=o.match.POS,q=function(a,b){return"\\"+(b-0+1)};for(var r in o.match)o.match[r]=new RegExp(o.match[r].source+/(?![^\[]*\])(?![^\(]*\))/.source),o.leftMatch[r]=new RegExp(/(^(?:.|\r|\n)*?)/.source+o.match[r].source.replace(/\\(\d+)/g,q));o.match.globalPOS=p;var s=function(a,b){a=Array.prototype.slice.call(a,0);if(b){b.push.apply(b,a);return b}return a};try{Array.prototype.slice.call(c.documentElement.childNodes,0)[0].nodeType}catch(t){s=function(a,b){var c=0,d=b||[];if(g.call(a)==="[object Array]")Array.prototype.push.apply(d,a);else if(typeof a.length=="number")for(var e=a.length;c<e;c++)d.push(a[c]);else for(;a[c];c++)d.push(a[c]);return d}}var u,v;c.documentElement.compareDocumentPosition?u=function(a,b){if(a===b){h=!0;return 0}if(!a.compareDocumentPosition||!b.compareDocumentPosition)return a.compareDocumentPosition?-1:1;return a.compareDocumentPosition(b)&4?-1:1}:(u=function(a,b){if(a===b){h=!0;return 0}if(a.sourceIndex&&b.sourceIndex)return a.sourceIndex-b.sourceIndex;var c,d,e=[],f=[],g=a.parentNode,i=b.parentNode,j=g;if(g===i)return v(a,b);if(!g)return-1;if(!i)return 1;while(j)e.unshift(j),j=j.parentNode;j=i;while(j)f.unshift(j),j=j.parentNode;c=e.length,d=f.length;for(var k=0;k<c&&k<d;k++)if(e[k]!==f[k])return v(e[k],f[k]);return k===c?v(a,f[k],-1):v(e[k],b,1)},v=function(a,b,c){if(a===b)return c;var d=a.nextSibling;while(d){if(d===b)return-1;d=d.nextSibling}return 1}),function(){var a=c.createElement("div"),d="script"+(new Date).getTime(),e=c.documentElement;a.innerHTML="<a name='"+d+"'/>",e.insertBefore(a,e.firstChild),c.getElementById(d)&&(o.find.ID=function(a,c,d){if(typeof c.getElementById!="undefined"&&!d){var e=c.getElementById(a[1]);return e?e.id===a[1]||typeof e.getAttributeNode!="undefined"&&e.getAttributeNode("id").nodeValue===a[1]?[e]:b:[]}},o.filter.ID=function(a,b){var c=typeof a.getAttributeNode!="undefined"&&a.getAttributeNode("id");return a.nodeType===1&&c&&c.nodeValue===b}),e.removeChild(a),e=a=null}(),function(){var a=c.createElement("div");a.appendChild(c.createComment("")),a.getElementsByTagName("*").length>0&&(o.find.TAG=function(a,b){var c=b.getElementsByTagName(a[1]);if(a[1]==="*"){var d=[];for(var e=0;c[e];e++)c[e].nodeType===1&&d.push(c[e]);c=d}return c}),a.innerHTML="<a href='#'></a>",a.firstChild&&typeof a.firstChild.getAttribute!="undefined"&&a.firstChild.getAttribute("href")!=="#"&&(o.attrHandle.href=function(a){return a.getAttribute("href",2)}),a=null}(),c.querySelectorAll&&function(){var a=m,b=c.createElement("div"),d="__sizzle__";b.innerHTML="<p class='TEST'></p>";if(!b.querySelectorAll||b.querySelectorAll(".TEST").length!==0){m=function(b,e,f,g){e=e||c;if(!g&&!m.isXML(e)){var h=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);if(h&&(e.nodeType===1||e.nodeType===9)){if(h[1])return s(e.getElementsByTagName(b),f);if(h[2]&&o.find.CLASS&&e.getElementsByClassName)return s(e.getElementsByClassName(h[2]),f)}if(e.nodeType===9){if(b==="body"&&e.body)return s([e.body],f);if(h&&h[3]){var i=e.getElementById(h[3]);if(!i||!i.parentNode)return s([],f);if(i.id===h[3])return s([i],f)}try{return s(e.querySelectorAll(b),f)}catch(j){}}else if(e.nodeType===1&&e.nodeName.toLowerCase()!=="object"){var k=e,l=e.getAttribute("id"),n=l||d,p=e.parentNode,q=/^\s*[+~]/.test(b);l?n=n.replace(/'/g,"\\$&"):e.setAttribute("id",n),q&&p&&(e=e.parentNode);try{if(!q||p)return s(e.querySelectorAll("[id='"+n+"'] "+b),f)}catch(r){}finally{l||k.removeAttribute("id")}}}return a(b,e,f,g)};for(var e in a)m[e]=a[e];b=null}}(),function(){var a=c.documentElement,b=a.matchesSelector||a.mozMatchesSelector||a.webkitMatchesSelector||a.msMatchesSelector;if(b){var d=!b.call(c.createElement("div"),"div"),e=!1;try{b.call(c.documentElement,"[test!='']:sizzle")}catch(f){e=!0}m.matchesSelector=function(a,c){c=c.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");if(!m.isXML(a))try{if(e||!o.match.PSEUDO.test(c)&&!/!=/.test(c)){var f=b.call(a,c);if(f||!d||a.document&&a.document.nodeType!==11)return f}}catch(g){}return m(c,null,null,[a]).length>0}}}(),function(){var a=c.createElement("div");a.innerHTML="<div class='test e'></div><div class='test'></div>";if(!!a.getElementsByClassName&&a.getElementsByClassName("e").length!==0){a.lastChild.className="e";if(a.getElementsByClassName("e").length===1)return;o.order.splice(1,0,"CLASS"),o.find.CLASS=function(a,b,c){if(typeof b.getElementsByClassName!="undefined"&&!c)return b.getElementsByClassName(a[1])},a=null}}(),c.documentElement.contains?m.contains=function(a,b){return a!==b&&(a.contains?a.contains(b):!0)}:c.documentElement.compareDocumentPosition?m.contains=function(a,b){return!!(a.compareDocumentPosition(b)&16)}:m.contains=function(){return!1},m.isXML=function(a){var b=(a?a.ownerDocument||a:0).documentElement;return b?b.nodeName!=="HTML":!1};var y=function(a,b,c){var d,e=[],f="",g=b.nodeType?[b]:b;while(d=o.match.PSEUDO.exec(a))f+=d[0],a=a.replace(o.match.PSEUDO,"");a=o.relative[a]?a+"*":a;for(var h=0,i=g.length;h<i;h++)m(a,g[h],e,c);return m.filter(f,e)};m.attr=f.attr,m.selectors.attrMap={},f.find=m,f.expr=m.selectors,f.expr[":"]=f.expr.filters,f.unique=m.uniqueSort,f.text=m.getText,f.isXMLDoc=m.isXML,f.contains=m.contains}();var L=/Until$/,M=/^(?:parents|prevUntil|prevAll)/,N=/,/,O=/^.[^:#\[\.,]*$/,P=Array.prototype.slice,Q=f.expr.match.globalPOS,R={children:!0,contents:!0,next:!0,prev:!0};f.fn.extend({find:function(a){var b=this,c,d;if(typeof a!="string")return f(a).filter(function(){for(c=0,d=b.length;c<d;c++)if(f.contains(b[c],this))return!0});var e=this.pushStack("","find",a),g,h,i;for(c=0,d=this.length;c<d;c++){g=e.length,f.find(a,this[c],e);if(c>0)for(h=g;h<e.length;h++)for(i=0;i<g;i++)if(e[i]===e[h]){e.splice(h--,1);break}}return e},has:function(a){var b=f(a);return this.filter(function(){for(var a=0,c=b.length;a<c;a++)if(f.contains(this,b[a]))return!0})},not:function(a){return this.pushStack(T(this,a,!1),"not",a)},filter:function(a){return this.pushStack(T(this,a,!0),"filter",a)},is:function(a){return!!a&&(typeof a=="string"?Q.test(a)?f(a,this.context).index(this[0])>=0:f.filter(a,this).length>0:this.filter(a).length>0)},closest:function(a,b){var c=[],d,e,g=this[0];if(f.isArray(a)){var h=1;while(g&&g.ownerDocument&&g!==b){for(d=0;d<a.length;d++)f(g).is(a[d])&&c.push({selector:a[d],elem:g,level:h});g=g.parentNode,h++}return c}var i=Q.test(a)||typeof a!="string"?f(a,b||this.context):0;for(d=0,e=this.length;d<e;d++){g=this[d];while(g){if(i?i.index(g)>-1:f.find.matchesSelector(g,a)){c.push(g);break}g=g.parentNode;if(!g||!g.ownerDocument||g===b||g.nodeType===11)break}}c=c.length>1?f.unique(c):c;return this.pushStack(c,"closest",a)},index:function(a){if(!a)return this[0]&&this[0].parentNode?this.prevAll().length:-1;if(typeof a=="string")return f.inArray(this[0],f(a));return f.inArray(a.jquery?a[0]:a,this)},add:function(a,b){var c=typeof a=="string"?f(a,b):f.makeArray(a&&a.nodeType?[a]:a),d=f.merge(this.get(),c);return this.pushStack(S(c[0])||S(d[0])?d:f.unique(d))},andSelf:function(){return this.add(this.prevObject)}}),f.each({parent:function(a){var b=a.parentNode;return b&&b.nodeType!==11?b:null},parents:function(a){return f.dir(a,"parentNode")},parentsUntil:function(a,b,c){return f.dir(a,"parentNode",c)},next:function(a){return f.nth(a,2,"nextSibling")},prev:function(a){return f.nth(a,2,"previousSibling")},nextAll:function(a){return f.dir(a,"nextSibling")},prevAll:function(a){return f.dir(a,"previousSibling")},nextUntil:function(a,b,c){return f.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return f.dir(a,"previousSibling",c)},siblings:function(a){return f.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return f.sibling(a.firstChild)},contents:function(a){return f.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:f.makeArray(a.childNodes)}},function(a,b){f.fn[a]=function(c,d){var e=f.map(this,b,c);L.test(a)||(d=c),d&&typeof d=="string"&&(e=f.filter(d,e)),e=this.length>1&&!R[a]?f.unique(e):e,(this.length>1||N.test(d))&&M.test(a)&&(e=e.reverse());return this.pushStack(e,a,P.call(arguments).join(","))}}),f.extend({filter:function(a,b,c){c&&(a=":not("+a+")");return b.length===1?f.find.matchesSelector(b[0],a)?[b[0]]:[]:f.find.matches(a,b)},dir:function(a,c,d){var e=[],g=a[c];while(g&&g.nodeType!==9&&(d===b||g.nodeType!==1||!f(g).is(d)))g.nodeType===1&&e.push(g),g=g[c];return e},nth:function(a,b,c,d){b=b||1;var e=0;for(;a;a=a[c])if(a.nodeType===1&&++e===b)break;return a},sibling:function(a,b){var c=[];for(;a;a=a.nextSibling)a.nodeType===1&&a!==b&&c.push(a);return c}});var V="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",W=/ jQuery\d+="(?:\d+|null)"/g,X=/^\s+/,Y=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,Z=/<([\w:]+)/,$=/<tbody/i,_=/<|&#?\w+;/,ba=/<(?:script|style)/i,bb=/<(?:script|object|embed|option|style)/i,bc=new RegExp("<(?:"+V+")[\\s/>]","i"),bd=/checked\s*(?:[^=]|=\s*.checked.)/i,be=/\/(java|ecma)script/i,bf=/^\s*<!(?:\[CDATA\[|\-\-)/,bg={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},bh=U(c);bg.optgroup=bg.option,bg.tbody=bg.tfoot=bg.colgroup=bg.caption=bg.thead,bg.th=bg.td,f.support.htmlSerialize||(bg._default=[1,"div<div>","</div>"]),f.fn.extend({text:function(a){return f.access(this,function(a){return a===b?f.text(this):this.empty().append((this[0]&&this[0].ownerDocument||c).createTextNode(a))},null,a,arguments.length)},wrapAll:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapAll(a.call(this,b))});if(this[0]){var b=f(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&a.firstChild.nodeType===1)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapInner(a.call(this,b))});return this.each(function(){var b=f(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=f.isFunction(a);return this.each(function(c){f(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){f.nodeName(this,"body")||f(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.insertBefore(a,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=f
.clean(arguments);a.push.apply(a,this.toArray());return this.pushStack(a,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=this.pushStack(this,"after",arguments);a.push.apply(a,f.clean(arguments));return a}},remove:function(a,b){for(var c=0,d;(d=this[c])!=null;c++)if(!a||f.filter(a,[d]).length)!b&&d.nodeType===1&&(f.cleanData(d.getElementsByTagName("*")),f.cleanData([d])),d.parentNode&&d.parentNode.removeChild(d);return this},empty:function(){for(var a=0,b;(b=this[a])!=null;a++){b.nodeType===1&&f.cleanData(b.getElementsByTagName("*"));while(b.firstChild)b.removeChild(b.firstChild)}return this},clone:function(a,b){a=a==null?!1:a,b=b==null?a:b;return this.map(function(){return f.clone(this,a,b)})},html:function(a){return f.access(this,function(a){var c=this[0]||{},d=0,e=this.length;if(a===b)return c.nodeType===1?c.innerHTML.replace(W,""):null;if(typeof a=="string"&&!ba.test(a)&&(f.support.leadingWhitespace||!X.test(a))&&!bg[(Z.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(Y,"<$1></$2>");try{for(;d<e;d++)c=this[d]||{},c.nodeType===1&&(f.cleanData(c.getElementsByTagName("*")),c.innerHTML=a);c=0}catch(g){}}c&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(a){if(this[0]&&this[0].parentNode){if(f.isFunction(a))return this.each(function(b){var c=f(this),d=c.html();c.replaceWith(a.call(this,b,d))});typeof a!="string"&&(a=f(a).detach());return this.each(function(){var b=this.nextSibling,c=this.parentNode;f(this).remove(),b?f(b).before(a):f(c).append(a)})}return this.length?this.pushStack(f(f.isFunction(a)?a():a),"replaceWith",a):this},detach:function(a){return this.remove(a,!0)},domManip:function(a,c,d){var e,g,h,i,j=a[0],k=[];if(!f.support.checkClone&&arguments.length===3&&typeof j=="string"&&bd.test(j))return this.each(function(){f(this).domManip(a,c,d,!0)});if(f.isFunction(j))return this.each(function(e){var g=f(this);a[0]=j.call(this,e,c?g.html():b),g.domManip(a,c,d)});if(this[0]){i=j&&j.parentNode,f.support.parentNode&&i&&i.nodeType===11&&i.childNodes.length===this.length?e={fragment:i}:e=f.buildFragment(a,this,k),h=e.fragment,h.childNodes.length===1?g=h=h.firstChild:g=h.firstChild;if(g){c=c&&f.nodeName(g,"tr");for(var l=0,m=this.length,n=m-1;l<m;l++)d.call(c?bi(this[l],g):this[l],e.cacheable||m>1&&l<n?f.clone(h,!0,!0):h)}k.length&&f.each(k,function(a,b){b.src?f.ajax({type:"GET",global:!1,url:b.src,async:!1,dataType:"script"}):f.globalEval((b.text||b.textContent||b.innerHTML||"").replace(bf,"/*$0*/")),b.parentNode&&b.parentNode.removeChild(b)})}return this}}),f.buildFragment=function(a,b,d){var e,g,h,i,j=a[0];b&&b[0]&&(i=b[0].ownerDocument||b[0]),i.createDocumentFragment||(i=c),a.length===1&&typeof j=="string"&&j.length<512&&i===c&&j.charAt(0)==="<"&&!bb.test(j)&&(f.support.checkClone||!bd.test(j))&&(f.support.html5Clone||!bc.test(j))&&(g=!0,h=f.fragments[j],h&&h!==1&&(e=h)),e||(e=i.createDocumentFragment(),f.clean(a,i,e,d)),g&&(f.fragments[j]=h?e:1);return{fragment:e,cacheable:g}},f.fragments={},f.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){f.fn[a]=function(c){var d=[],e=f(c),g=this.length===1&&this[0].parentNode;if(g&&g.nodeType===11&&g.childNodes.length===1&&e.length===1){e[b](this[0]);return this}for(var h=0,i=e.length;h<i;h++){var j=(h>0?this.clone(!0):this).get();f(e[h])[b](j),d=d.concat(j)}return this.pushStack(d,a,e.selector)}}),f.extend({clone:function(a,b,c){var d,e,g,h=f.support.html5Clone||f.isXMLDoc(a)||!bc.test("<"+a.nodeName+">")?a.cloneNode(!0):bo(a);if((!f.support.noCloneEvent||!f.support.noCloneChecked)&&(a.nodeType===1||a.nodeType===11)&&!f.isXMLDoc(a)){bk(a,h),d=bl(a),e=bl(h);for(g=0;d[g];++g)e[g]&&bk(d[g],e[g])}if(b){bj(a,h);if(c){d=bl(a),e=bl(h);for(g=0;d[g];++g)bj(d[g],e[g])}}d=e=null;return h},clean:function(a,b,d,e){var g,h,i,j=[];b=b||c,typeof b.createElement=="undefined"&&(b=b.ownerDocument||b[0]&&b[0].ownerDocument||c);for(var k=0,l;(l=a[k])!=null;k++){typeof l=="number"&&(l+="");if(!l)continue;if(typeof l=="string")if(!_.test(l))l=b.createTextNode(l);else{l=l.replace(Y,"<$1></$2>");var m=(Z.exec(l)||["",""])[1].toLowerCase(),n=bg[m]||bg._default,o=n[0],p=b.createElement("div"),q=bh.childNodes,r;b===c?bh.appendChild(p):U(b).appendChild(p),p.innerHTML=n[1]+l+n[2];while(o--)p=p.lastChild;if(!f.support.tbody){var s=$.test(l),t=m==="table"&&!s?p.firstChild&&p.firstChild.childNodes:n[1]==="<table>"&&!s?p.childNodes:[];for(i=t.length-1;i>=0;--i)f.nodeName(t[i],"tbody")&&!t[i].childNodes.length&&t[i].parentNode.removeChild(t[i])}!f.support.leadingWhitespace&&X.test(l)&&p.insertBefore(b.createTextNode(X.exec(l)[0]),p.firstChild),l=p.childNodes,p&&(p.parentNode.removeChild(p),q.length>0&&(r=q[q.length-1],r&&r.parentNode&&r.parentNode.removeChild(r)))}var u;if(!f.support.appendChecked)if(l[0]&&typeof (u=l.length)=="number")for(i=0;i<u;i++)bn(l[i]);else bn(l);l.nodeType?j.push(l):j=f.merge(j,l)}if(d){g=function(a){return!a.type||be.test(a.type)};for(k=0;j[k];k++){h=j[k];if(e&&f.nodeName(h,"script")&&(!h.type||be.test(h.type)))e.push(h.parentNode?h.parentNode.removeChild(h):h);else{if(h.nodeType===1){var v=f.grep(h.getElementsByTagName("script"),g);j.splice.apply(j,[k+1,0].concat(v))}d.appendChild(h)}}}return j},cleanData:function(a){var b,c,d=f.cache,e=f.event.special,g=f.support.deleteExpando;for(var h=0,i;(i=a[h])!=null;h++){if(i.nodeName&&f.noData[i.nodeName.toLowerCase()])continue;c=i[f.expando];if(c){b=d[c];if(b&&b.events){for(var j in b.events)e[j]?f.event.remove(i,j):f.removeEvent(i,j,b.handle);b.handle&&(b.handle.elem=null)}g?delete i[f.expando]:i.removeAttribute&&i.removeAttribute(f.expando),delete d[c]}}}});var bp=/alpha\([^)]*\)/i,bq=/opacity=([^)]*)/,br=/([A-Z]|^ms)/g,bs=/^[\-+]?(?:\d*\.)?\d+$/i,bt=/^-?(?:\d*\.)?\d+(?!px)[^\d\s]+$/i,bu=/^([\-+])=([\-+.\de]+)/,bv=/^margin/,bw={position:"absolute",visibility:"hidden",display:"block"},bx=["Top","Right","Bottom","Left"],by,bz,bA;f.fn.css=function(a,c){return f.access(this,function(a,c,d){return d!==b?f.style(a,c,d):f.css(a,c)},a,c,arguments.length>1)},f.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=by(a,"opacity");return c===""?"1":c}return a.style.opacity}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":f.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,c,d,e){if(!!a&&a.nodeType!==3&&a.nodeType!==8&&!!a.style){var g,h,i=f.camelCase(c),j=a.style,k=f.cssHooks[i];c=f.cssProps[i]||i;if(d===b){if(k&&"get"in k&&(g=k.get(a,!1,e))!==b)return g;return j[c]}h=typeof d,h==="string"&&(g=bu.exec(d))&&(d=+(g[1]+1)*+g[2]+parseFloat(f.css(a,c)),h="number");if(d==null||h==="number"&&isNaN(d))return;h==="number"&&!f.cssNumber[i]&&(d+="px");if(!k||!("set"in k)||(d=k.set(a,d))!==b)try{j[c]=d}catch(l){}}},css:function(a,c,d){var e,g;c=f.camelCase(c),g=f.cssHooks[c],c=f.cssProps[c]||c,c==="cssFloat"&&(c="float");if(g&&"get"in g&&(e=g.get(a,!0,d))!==b)return e;if(by)return by(a,c)},swap:function(a,b,c){var d={},e,f;for(f in b)d[f]=a.style[f],a.style[f]=b[f];e=c.call(a);for(f in b)a.style[f]=d[f];return e}}),f.curCSS=f.css,c.defaultView&&c.defaultView.getComputedStyle&&(bz=function(a,b){var c,d,e,g,h=a.style;b=b.replace(br,"-$1").toLowerCase(),(d=a.ownerDocument.defaultView)&&(e=d.getComputedStyle(a,null))&&(c=e.getPropertyValue(b),c===""&&!f.contains(a.ownerDocument.documentElement,a)&&(c=f.style(a,b))),!f.support.pixelMargin&&e&&bv.test(b)&&bt.test(c)&&(g=h.width,h.width=c,c=e.width,h.width=g);return c}),c.documentElement.currentStyle&&(bA=function(a,b){var c,d,e,f=a.currentStyle&&a.currentStyle[b],g=a.style;f==null&&g&&(e=g[b])&&(f=e),bt.test(f)&&(c=g.left,d=a.runtimeStyle&&a.runtimeStyle.left,d&&(a.runtimeStyle.left=a.currentStyle.left),g.left=b==="fontSize"?"1em":f,f=g.pixelLeft+"px",g.left=c,d&&(a.runtimeStyle.left=d));return f===""?"auto":f}),by=bz||bA,f.each(["height","width"],function(a,b){f.cssHooks[b]={get:function(a,c,d){if(c)return a.offsetWidth!==0?bB(a,b,d):f.swap(a,bw,function(){return bB(a,b,d)})},set:function(a,b){return bs.test(b)?b+"px":b}}}),f.support.opacity||(f.cssHooks.opacity={get:function(a,b){return bq.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=f.isNumeric(b)?"alpha(opacity="+b*100+")":"",g=d&&d.filter||c.filter||"";c.zoom=1;if(b>=1&&f.trim(g.replace(bp,""))===""){c.removeAttribute("filter");if(d&&!d.filter)return}c.filter=bp.test(g)?g.replace(bp,e):g+" "+e}}),f(function(){f.support.reliableMarginRight||(f.cssHooks.marginRight={get:function(a,b){return f.swap(a,{display:"inline-block"},function(){return b?by(a,"margin-right"):a.style.marginRight})}})}),f.expr&&f.expr.filters&&(f.expr.filters.hidden=function(a){var b=a.offsetWidth,c=a.offsetHeight;return b===0&&c===0||!f.support.reliableHiddenOffsets&&(a.style&&a.style.display||f.css(a,"display"))==="none"},f.expr.filters.visible=function(a){return!f.expr.filters.hidden(a)}),f.each({margin:"",padding:"",border:"Width"},function(a,b){f.cssHooks[a+b]={expand:function(c){var d,e=typeof c=="string"?c.split(" "):[c],f={};for(d=0;d<4;d++)f[a+bx[d]+b]=e[d]||e[d-2]||e[0];return f}}});var bC=/%20/g,bD=/\[\]$/,bE=/\r?\n/g,bF=/#.*$/,bG=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,bH=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,bI=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,bJ=/^(?:GET|HEAD)$/,bK=/^\/\//,bL=/\?/,bM=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,bN=/^(?:select|textarea)/i,bO=/\s+/,bP=/([?&])_=[^&]*/,bQ=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,bR=f.fn.load,bS={},bT={},bU,bV,bW=["*/"]+["*"];try{bU=e.href}catch(bX){bU=c.createElement("a"),bU.href="",bU=bU.href}bV=bQ.exec(bU.toLowerCase())||[],f.fn.extend({load:function(a,c,d){if(typeof a!="string"&&bR)return bR.apply(this,arguments);if(!this.length)return this;var e=a.indexOf(" ");if(e>=0){var g=a.slice(e,a.length);a=a.slice(0,e)}var h="GET";c&&(f.isFunction(c)?(d=c,c=b):typeof c=="object"&&(c=f.param(c,f.ajaxSettings.traditional),h="POST"));var i=this;f.ajax({url:a,type:h,dataType:"html",data:c,complete:function(a,b,c){c=a.responseText,a.isResolved()&&(a.done(function(a){c=a}),i.html(g?f("<div>").append(c.replace(bM,"")).find(g):c)),d&&i.each(d,[c,b,a])}});return this},serialize:function(){return f.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?f.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||bN.test(this.nodeName)||bH.test(this.type))}).map(function(a,b){var c=f(this).val();return c==null?null:f.isArray(c)?f.map(c,function(a,c){return{name:b.name,value:a.replace(bE,"\r\n")}}):{name:b.name,value:c.replace(bE,"\r\n")}}).get()}}),f.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){f.fn[b]=function(a){return this.on(b,a)}}),f.each(["get","post"],function(a,c){f[c]=function(a,d,e,g){f.isFunction(d)&&(g=g||e,e=d,d=b);return f.ajax({type:c,url:a,data:d,success:e,dataType:g})}}),f.extend({getScript:function(a,c){return f.get(a,b,c,"script")},getJSON:function(a,b,c){return f.get(a,b,c,"json")},ajaxSetup:function(a,b){b?b$(a,f.ajaxSettings):(b=a,a=f.ajaxSettings),b$(a,b);return a},ajaxSettings:{url:bU,isLocal:bI.test(bV[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":bW},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a.String,"text html":!0,"text json":f.parseJSON,"text xml":f.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:bY(bS),ajaxTransport:bY(bT),ajax:function(a,c){function w(a,c,l,m){if(s!==2){s=2,q&&clearTimeout(q),p=b,n=m||"",v.readyState=a>0?4:0;var o,r,u,w=c,x=l?ca(d,v,l):b,y,z;if(a>=200&&a<300||a===304){if(d.ifModified){if(y=v.getResponseHeader("Last-Modified"))f.lastModified[k]=y;if(z=v.getResponseHeader("Etag"))f.etag[k]=z}if(a===304)w="notmodified",o=!0;else try{r=cb(d,x),w="success",o=!0}catch(A){w="parsererror",u=A}}else{u=w;if(!w||a)w="error",a<0&&(a=0)}v.status=a,v.statusText=""+(c||w),o?h.resolveWith(e,[r,w,v]):h.rejectWith(e,[v,w,u]),v.statusCode(j),j=b,t&&g.trigger("ajax"+(o?"Success":"Error"),[v,d,o?r:u]),i.fireWith(e,[v,w]),t&&(g.trigger("ajaxComplete",[v,d]),--f.active||f.event.trigger("ajaxStop"))}}typeof a=="object"&&(c=a,a=b),c=c||{};var d=f.ajaxSetup({},c),e=d.context||d,g=e!==d&&(e.nodeType||e instanceof f)?f(e):f.event,h=f.Deferred(),i=f.Callbacks("once memory"),j=d.statusCode||{},k,l={},m={},n,o,p,q,r,s=0,t,u,v={readyState:0,setRequestHeader:function(a,b){if(!s){var c=a.toLowerCase();a=m[c]=m[c]||a,l[a]=b}return this},getAllResponseHeaders:function(){return s===2?n:null},getResponseHeader:function(a){var c;if(s===2){if(!o){o={};while(c=bG.exec(n))o[c[1].toLowerCase()]=c[2]}c=o[a.toLowerCase()]}return c===b?null:c},overrideMimeType:function(a){s||(d.mimeType=a);return this},abort:function(a){a=a||"abort",p&&p.abort(a),w(0,a);return this}};h.promise(v),v.success=v.done,v.error=v.fail,v.complete=i.add,v.statusCode=function(a){if(a){var b;if(s<2)for(b in a)j[b]=[j[b],a[b]];else b=a[v.status],v.then(b,b)}return this},d.url=((a||d.url)+"").replace(bF,"").replace(bK,bV[1]+"//"),d.dataTypes=f.trim(d.dataType||"*").toLowerCase().split(bO),d.crossDomain==null&&(r=bQ.exec(d.url.toLowerCase()),d.crossDomain=!(!r||r[1]==bV[1]&&r[2]==bV[2]&&(r[3]||(r[1]==="http:"?80:443))==(bV[3]||(bV[1]==="http:"?80:443)))),d.data&&d.processData&&typeof d.data!="string"&&(d.data=f.param(d.data,d.traditional)),bZ(bS,d,c,v);if(s===2)return!1;t=d.global,d.type=d.type.toUpperCase(),d.hasContent=!bJ.test(d.type),t&&f.active++===0&&f.event.trigger("ajaxStart");if(!d.hasContent){d.data&&(d.url+=(bL.test(d.url)?"&":"?")+d.data,delete d.data),k=d.url;if(d.cache===!1){var x=f.now(),y=d.url.replace(bP,"$1_="+x);d.url=y+(y===d.url?(bL.test(d.url)?"&":"?")+"_="+x:"")}}(d.data&&d.hasContent&&d.contentType!==!1||c.contentType)&&v.setRequestHeader("Content-Type",d.contentType),d.ifModified&&(k=k||d.url,f.lastModified[k]&&v.setRequestHeader("If-Modified-Since",f.lastModified[k]),f.etag[k]&&v.setRequestHeader("If-None-Match",f.etag[k])),v.setRequestHeader("Accept",d.dataTypes[0]&&d.accepts[d.dataTypes[0]]?d.accepts[d.dataTypes[0]]+(d.dataTypes[0]!=="*"?", "+bW+"; q=0.01":""):d.accepts["*"]);for(u in d.headers)v.setRequestHeader(u,d.headers[u]);if(d.beforeSend&&(d.beforeSend.call(e,v,d)===!1||s===2)){v.abort();return!1}for(u in{success:1,error:1,complete:1})v[u](d[u]);p=bZ(bT,d,c,v);if(!p)w(-1,"No Transport");else{v.readyState=1,t&&g.trigger("ajaxSend",[v,d]),d.async&&d.timeout>0&&(q=setTimeout(function(){v.abort("timeout")},d.timeout));try{s=1,p.send(l,w)}catch(z){if(s<2)w(-1,z);else throw z}}return v},param:function(a,c){var d=[],e=function(a,b){b=f.isFunction(b)?b():b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};c===b&&(c=f.ajaxSettings.traditional);if(f.isArray(a)||a.jquery&&!f.isPlainObject(a))f.each(a,function(){e(this.name,this.value)});else for(var g in a)b_(g,a[g],c,e);return d.join("&").replace(bC,"+")}}),f.extend({active:0,lastModified:{},etag:{}});var cc=f.now(),cd=/(\=)\?(&|$)|\?\?/i;f.ajaxSetup({jsonp:"callback",jsonpCallback:function(){return f.expando+"_"+cc++}}),f.ajaxPrefilter("json jsonp",function(b,c,d){var e=typeof b.data=="string"&&/^application\/x\-www\-form\-urlencoded/.test(b.contentType);if(b.dataTypes[0]==="jsonp"||b.jsonp!==!1&&(cd.test(b.url)||e&&cd.test(b.data))){var g,h=b.jsonpCallback=f.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,i=a[h],j=b.url,k=b.data,l="$1"+h+"$2";b.jsonp!==!1&&(j=j.replace(cd,l),b.url===j&&(e&&(k=k.replace(cd,l)),b.data===k&&(j+=(/\?/.test(j)?"&":"?")+b.jsonp+"="+h))),b.url=j,b.data=k,a[h]=function(a){g=[a]},d.always(function(){a[h]=i,g&&f.isFunction(i)&&a[h](g[0])}),b.converters["script json"]=function(){g||f.error(h+" was not called");return g[0]},b.dataTypes[0]="json";return"script"}}),f.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(a){f.globalEval(a);return a}}}),f.ajaxPrefilter("script",function(a){a.cache===b&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),f.ajaxTransport("script",function(a){if(a.crossDomain){var d,e=c.head||c.getElementsByTagName("head")[0]||c.documentElement;return{send:function(f,g){d=c.createElement("script"),d.async="async",a.scriptCharset&&(d.charset=a.scriptCharset),d.src=a.url,d.onload=d.onreadystatechange=function(a,c){if(c||!d.readyState||/loaded|complete/.test(d.readyState))d.onload=d.onreadystatechange=null,e&&d.parentNode&&e.removeChild(d),d=b,c||g(200,"success")},e.insertBefore(d,e.firstChild)},abort:function(){d&&d.onload(0,1)}}}});var ce=a.ActiveXObject?function(){for(var a in cg)cg[a](0,1)}:!1,cf=0,cg;f.ajaxSettings.xhr=a.ActiveXObject?function(){return!this.isLocal&&ch()||ci()}:ch,function(a){f.extend(f.support,{ajax:!!a,cors:!!a&&"withCredentials"in a})}(f.ajaxSettings.xhr()),f.support.ajax&&f.ajaxTransport(function(c){if(!c.crossDomain||f.support.cors){var d;return{send:function(e,g){var h=c.xhr(),i,j;c.username?h.open(c.type,c.url,c.async,c.username,c.password):h.open(c.type,c.url,c.async);if(c.xhrFields)for(j in c.xhrFields)h[j]=c.xhrFields[j];c.mimeType&&h.overrideMimeType&&h.overrideMimeType(c.mimeType),!c.crossDomain&&!e["X-Requested-With"]&&(e["X-Requested-With"]="XMLHttpRequest");try{for(j in e)h.setRequestHeader(j,e[j])}catch(k){}h.send(c.hasContent&&c.data||null),d=function(a,e){var j,k,l,m,n;try{if(d&&(e||h.readyState===4)){d=b,i&&(h.onreadystatechange=f.noop,ce&&delete cg[i]);if(e)h.readyState!==4&&h.abort();else{j=h.status,l=h.getAllResponseHeaders(),m={},n=h.responseXML,n&&n.documentElement&&(m.xml=n);try{m.text=h.responseText}catch(a){}try{k=h.statusText}catch(o){k=""}!j&&c.isLocal&&!c.crossDomain?j=m.text?200:404:j===1223&&(j=204)}}}catch(p){e||g(-1,p)}m&&g(j,k,m,l)},!c.async||h.readyState===4?d():(i=++cf,ce&&(cg||(cg={},f(a).unload(ce)),cg[i]=d),h.onreadystatechange=d)},abort:function(){d&&d(0,1)}}}});var cj={},ck,cl,cm=/^(?:toggle|show|hide)$/,cn=/^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,co,cp=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]],cq;f.fn.extend({show:function(a,b,c){var d,e;if(a||a===0)return this.animate(ct("show",3),a,b,c);for(var g=0,h=this.length;g<h;g++)d=this[g],d.style&&(e=d.style.display,!f._data(d,"olddisplay")&&e==="none"&&(e=d.style.display=""),(e===""&&f.css(d,"display")==="none"||!f.contains(d.ownerDocument.documentElement,d))&&f._data(d,"olddisplay",cu(d.nodeName)));for(g=0;g<h;g++){d=this[g];if(d.style){e=d.style.display;if(e===""||e==="none")d.style.display=f._data(d,"olddisplay")||""}}return this},hide:function(a,b,c){if(a||a===0)return this.animate(ct("hide",3),a,b,c);var d,e,g=0,h=this.length;for(;g<h;g++)d=this[g],d.style&&(e=f.css(d,"display"),e!=="none"&&!f._data(d,"olddisplay")&&f._data(d,"olddisplay",e));for(g=0;g<h;g++)this[g].style&&(this[g].style.display="none");return this},_toggle:f.fn.toggle,toggle:function(a,b,c){var d=typeof a=="boolean";f.isFunction(a)&&f.isFunction(b)?this._toggle.apply(this,arguments):a==null||d?this.each(function(){var b=d?a:f(this).is(":hidden");f(this)[b?"show":"hide"]()}):this.animate(ct("toggle",3),a,b,c);return this},fadeTo:function(a,b,c,d){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){function g(){e.queue===!1&&f._mark(this);var b=f.extend({},e),c=this.nodeType===1,d=c&&f(this).is(":hidden"),g,h,i,j,k,l,m,n,o,p,q;b.animatedProperties={};for(i in a){g=f.camelCase(i),i!==g&&(a[g]=a[i],delete a[i]);if((k=f.cssHooks[g])&&"expand"in k){l=k.expand(a[g]),delete a[g];for(i in l)i in a||(a[i]=l[i])}}for(g in a){h=a[g],f.isArray(h)?(b.animatedProperties[g]=h[1],h=a[g]=h[0]):b.animatedProperties[g]=b.specialEasing&&b.specialEasing[g]||b.easing||"swing";if(h==="hide"&&d||h==="show"&&!d)return b.complete.call(this);c&&(g==="height"||g==="width")&&(b.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY],f.css(this,"display")==="inline"&&f.css(this,"float")==="none"&&(!f.support.inlineBlockNeedsLayout||cu(this.nodeName)==="inline"?this.style.display="inline-block":this.style.zoom=1))}b.overflow!=null&&(this.style.overflow="hidden");for(i in a)j=new f.fx(this,b,i),h=a[i],cm.test(h)?(q=f._data(this,"toggle"+i)||(h==="toggle"?d?"show":"hide":0),q?(f._data(this,"toggle"+i,q==="show"?"hide":"show"),j[q]()):j[h]()):(m=cn.exec(h),n=j.cur(),m?(o=parseFloat(m[2]),p=m[3]||(f.cssNumber[i]?"":"px"),p!=="px"&&(f.style(this,i,(o||1)+p),n=(o||1)/j.cur()*n,f.style(this,i,n+p)),m[1]&&(o=(m[1]==="-="?-1:1)*o+n),j.custom(n,o,p)):j.custom(n,h,""));return!0}var e=f.speed(b,c,d);if(f.isEmptyObject(a))return this.each(e.complete,[!1]);a=f.extend({},a);return e.queue===!1?this.each(g):this.queue(e.queue,g)},stop:function(a,c,d){typeof a!="string"&&(d=c,c=a,a=b),c&&a!==!1&&this.queue(a||"fx",[]);return this.each(function(){function h(a,b,c){var e=b[c];f.removeData(a,c,!0),e.stop(d)}var b,c=!1,e=f.timers,g=f._data(this);d||f._unmark(!0,this);if(a==null)for(b in g)g[b]&&g[b].stop&&b.indexOf(".run")===b.length-4&&h(this,g,b);else g[b=a+".run"]&&g[b].stop&&h(this,g,b);for(b=e.length;b--;)e[b].elem===this&&(a==null||e[b].queue===a)&&(d?e[b](!0):e[b].saveState(),c=!0,e.splice(b,1));(!d||!c)&&f.dequeue(this,a)})}}),f.each({slideDown:ct("show",1),slideUp:ct("hide",1),slideToggle:ct("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){f.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),f.extend({speed:function(a,b,c){var d=a&&typeof a=="object"?f.extend({},a):{complete:c||!c&&b||f.isFunction(a)&&a,duration:a,easing:c&&b||b&&!f.isFunction(b)&&b};d.duration=f.fx.off?0:typeof d.duration=="number"?d.duration:d.duration in f.fx.speeds?f.fx.speeds[d.duration]:f.fx.speeds._default;if(d.queue==null||d.queue===!0)d.queue="fx";d.old=d.complete,d.complete=function(a){f.isFunction(d.old)&&d.old.call(this),d.queue?f.dequeue(this,d.queue):a!==!1&&f._unmark(this)};return d},easing:{linear:function(a){return a},swing:function(a){return-Math.cos(a*Math.PI)/2+.5}},timers:[],fx:function(a,b,c){this.options=b,this.elem=a,this.prop=c,b.orig=b.orig||{}}}),f.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this),(f.fx.step[this.prop]||f.fx.step._default)(this)},cur:function(){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null))return this.elem[this.prop];var a,b=f.css(this.elem,this.prop);return isNaN(a=parseFloat(b))?!b||b==="auto"?0:b:a},custom:function(a,c,d){function h(a){return e.step(a)}var e=this,g=f.fx;this.startTime=cq||cr(),this.end=c,this.now=this.start=a,this.pos=this.state=0,this.unit=d||this.unit||(f.cssNumber[this.prop]?"":"px"),h.queue=this.options.queue,h.elem=this.elem,h.saveState=function(){f._data(e.elem,"fxshow"+e.prop)===b&&(e.options.hide?f._data(e.elem,"fxshow"+e.prop,e.start):e.options.show&&f._data(e.elem,"fxshow"+e.prop,e.end))},h()&&f.timers.push(h)&&!co&&(co=setInterval(g.tick,g.interval))},show:function(){var a=f._data(this.elem,"fxshow"+this.prop);this.options.orig[this.prop]=a||f.style(this.elem,this.prop),this.options.show=!0,a!==b?this.custom(this.cur(),a):this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur()),f(this.elem).show()},hide:function(){this.options.orig[this.prop]=f._data(this.elem,"fxshow"+this.prop)||f.style(this.elem,this.prop),this.options.hide=!0,this.custom(this.cur(),0)},step:function(a){var b,c,d,e=cq||cr(),g=!0,h=this.elem,i=this.options;if(a||e>=i.duration+this.startTime){this.now=this.end,this.pos=this.state=1,this.update(),i.animatedProperties[this.prop]=!0;for(b in i.animatedProperties)i.animatedProperties[b]!==!0&&(g=!1);if(g){i.overflow!=null&&!f.support.shrinkWrapBlocks&&f.each(["","X","Y"],function(a,b){h.style["overflow"+b]=i.overflow[a]}),i.hide&&f(h).hide();if(i.hide||i.show)for(b in i.animatedProperties)f.style(h,b,i.orig[b]),f.removeData(h,"fxshow"+b,!0),f.removeData(h,"toggle"+b,!0);d=i.complete,d&&(i.complete=!1,d.call(h))}return!1}i.duration==Infinity?this.now=e:(c=e-this.startTime,this.state=c/i.duration,this.pos=f.easing[i.animatedProperties[this.prop]](this.state,c,0,1,i.duration),this.now=this.start+(this.end-this.start)*this.pos),this.update();return!0}},f.extend(f.fx,{tick:function(){var a,b=f.timers,c=0;for(;c<b.length;c++)a=b[c],!a()&&b[c]===a&&b.splice(c--,1);b.length||f.fx.stop()},interval:13,stop:function(){clearInterval(co),co=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(a){f.style(a.elem,"opacity",a.now)},_default:function(a){a.elem.style&&a.elem.style[a.prop]!=null?a.elem.style[a.prop]=a.now+a.unit:a.elem[a.prop]=a.now}}}),f.each(cp.concat.apply([],cp),function(a,b){b.indexOf("margin")&&(f.fx.step[b]=function(a){f.style(a.elem,b,Math.max(0,a.now)+a.unit)})}),f.expr&&f.expr.filters&&(f.expr.filters.animated=function(a){return f.grep(f.timers,function(b){return a===b.elem}).length});var cv,cw=/^t(?:able|d|h)$/i,cx=/^(?:body|html)$/i;"getBoundingClientRect"in c.documentElement?cv=function(a,b,c,d){try{d=a.getBoundingClientRect()}catch(e){}if(!d||!f.contains(c,a))return d?{top:d.top,left:d.left}:{top:0,left:0};var g=b.body,h=cy(b),i=c.clientTop||g.clientTop||0,j=c.clientLeft||g.clientLeft||0,k=h.pageYOffset||f.support.boxModel&&c.scrollTop||g.scrollTop,l=h.pageXOffset||f.support.boxModel&&c.scrollLeft||g.scrollLeft,m=d.top+k-i,n=d.left+l-j;return{top:m,left:n}}:cv=function(a,b,c){var d,e=a.offsetParent,g=a,h=b.body,i=b.defaultView,j=i?i.getComputedStyle(a,null):a.currentStyle,k=a.offsetTop,l=a.offsetLeft;while((a=a.parentNode)&&a!==h&&a!==c){if(f.support.fixedPosition&&j.position==="fixed")break;d=i?i.getComputedStyle(a,null):a.currentStyle,k-=a.scrollTop,l-=a.scrollLeft,a===e&&(k+=a.offsetTop,l+=a.offsetLeft,f.support.doesNotAddBorder&&(!f.support.doesAddBorderForTableAndCells||!cw.test(a.nodeName))&&(k+=parseFloat(d.borderTopWidth)||0,l+=parseFloat(d.borderLeftWidth)||0),g=e,e=a.offsetParent),f.support.subtractsBorderForOverflowNotVisible&&d.overflow!=="visible"&&(k+=parseFloat(d.borderTopWidth)||0,l+=parseFloat(d.borderLeftWidth)||0),j=d}if(j.position==="relative"||j.position==="static")k+=h.offsetTop,l+=h.offsetLeft;f.support.fixedPosition&&j.position==="fixed"&&(k+=Math.max(c.scrollTop,h.scrollTop),l+=Math.max(c.scrollLeft,h.scrollLeft));return{top:k,left:l}},f.fn.offset=function(a){if(arguments.length)return a===b?this:this.each(function(b){f.offset.setOffset(this,a,b)});var c=this[0],d=c&&c.ownerDocument;if(!d)return null;if(c===d.body)return f.offset.bodyOffset(c);return cv(c,d,d.documentElement)},f.offset={bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;f.support.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(f.css(a,"marginTop"))||0,c+=parseFloat(f.css(a,"marginLeft"))||0);return{top:b,left:c}},setOffset:function(a,b,c){var d=f.css(a,"position");d==="static"&&(a.style.position="relative");var e=f(a),g=e.offset(),h=f.css(a,"top"),i=f.css(a,"left"),j=(d==="absolute"||d==="fixed")&&f.inArray("auto",[h,i])>-1,k={},l={},m,n;j?(l=e.position(),m=l.top,n=l.left):(m=parseFloat(h)||0,n=parseFloat(i)||0),f.isFunction(b)&&(b=b.call(a,c,g)),b.top!=null&&(k.top=b.top-g.top+m),b.left!=null&&(k.left=b.left-g.left+n),"using"in b?b.using.call(a,k):e.css(k)}},f.fn.extend({position:function(){if(!this[0])return null;var a=this[0],b=this.offsetParent(),c=this.offset(),d=cx.test(b[0].nodeName)?{top:0,left:0}:b.offset();c.top-=parseFloat(f.css(a,"marginTop"))||0,c.left-=parseFloat(f.css(a,"marginLeft"))||0,d.top+=parseFloat(f.css(b[0],"borderTopWidth"))||0,d.left+=parseFloat(f.css(b[0],"borderLeftWidth"))||0;return{top:c.top-d.top,left:c.left-d.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||c.body;while(a&&!cx.test(a.nodeName)&&f.css(a,"position")==="static")a=a.offsetParent;return a})}}),f.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,c){var d=/Y/.test(c);f.fn[a]=function(e){return f.access(this,function(a,e,g){var h=cy(a);if(g===b)return h?c in h?h[c]:f.support.boxModel&&h.document.documentElement[e]||h.document.body[e]:a[e];h?h.scrollTo(d?f(h).scrollLeft():g,d?g:f(h).scrollTop()):a[e]=g},a,e,arguments.length,null)}}),f.each({Height:"height",Width:"width"},function(a,c){var d="client"+a,e="scroll"+a,g="offset"+a;f.fn["inner"+a]=function(){var a=this[0];return a?a.style?parseFloat(f.css(a,c,"padding")):this[c]():null},f.fn["outer"+a]=function(a){var b=this[0];return b?b.style?parseFloat(f.css(b,c,a?"margin":"border")):this[c]():null},f.fn[c]=function(a){return f.access(this,function(a,c,h){var i,j,k,l;if(f.isWindow(a)){i=a.document,j=i.documentElement[d];return f.support.boxModel&&j||i.body&&i.body[d]||j}if(a.nodeType===9){i=a.documentElement;if(i[d]>=i[e])return i[d];return Math.max(a.body[e],i[e],a.body[g],i[g])}if(h===b){k=f.css(a,c),l=parseFloat(k);return f.isNumeric(l)?l:k}f(a).css(c,h)},c,a,arguments.length,null)}}),a.jQuery=a.$=f,typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return f})})(window);


// This jQuery plugin adds functions that make it easy to display
// friendly tips to a user based on Slowparse errors. For more information
// on Slowparse errors, see the [error specification][spec].
//
// For examples of this plugin in use, consult its [test suite][].
//
//  [spec]: http://toolness.github.com/slowparse/spec/
//  [test suite]: https://github.com/toolness/slowparse/blob/gh-pages/test/test-errors.jquery.js

(function(jQuery) {
  var $ = jQuery;
  
  // ## jQuery Extensions
  
  jQuery.extend({
    // **jQuery.errorTemplates** is a selection that contains all our error
    // message templates.
    
    errorTemplates: $(),
    // **jQuery.loadErrors(*basePath*, *names*, *cb*)** loads a set of error
    // message templates.
    //
    // * *basePath* is the relative path containing the error message
    //   template HTML files.
    //
    // * *names* is an array of template files to load. For each `name`
    //   in this array, the file `errors.name.html` will be loaded from 
    //   *basePath*.
    //
    // * *cb* is a function that will be called once all the templates
    //   are loaded. Its first argument will be null only if no errors
    //   occurred.
    loadErrors: function(basePath, names, cb) {
      var reqs = names.map(function(name) {
        var url = basePath + "errors." + name + ".html";
        return jQuery.get(url);
      });
      jQuery.when.apply(jQuery, reqs).then(function() {
        reqs.forEach(function(req) {
          var div = $('<div></div>').html(req.responseText);
          $.errorTemplates = $.errorTemplates.add($(".error-msg", div));
        });
        cb(null);
      }, function() {
        cb("ERROR: At least one template file did not load.");
      });
    }
  });
  
  jQuery.fn.extend({
    // **jQuery.fn.errorHighlightInterval()** returns an object
    // containing `{start, end}` keys that describe the integral start and
    // end indexes of a `data-highlight` attribute on the first
    // element of the current selection.
    errorHighlightInterval: function() {
      var interval = $(this).attr("data-highlight").split(",");
      var start = parseInt(interval[0]);
      var end = interval[1] ? parseInt(interval[1]) : undefined;
      return {start: start, end: end};
    },
    
    // **jQuery.fn.eachErrorHighlight(*cb*)** calls the given callback on
    // every element with a `data-highlight` attribute in the current
    // selection. The callback is passed `(start, end, i)` arguments
    // which represent the integral start and end of the highlight, and
    // the array index of the element.
    eachErrorHighlight: function(cb) {
      $("[data-highlight]", this).each(function(i) {
        var interval = $(this).errorHighlightInterval();
        cb.call(this, interval.start, interval.end, i);
      });
      return this;
    },
    
    // **jQuery.fn.fillError(*error* [, *templates*])** fills the current selection with the
    // friendly error message for the given error object. For more
    // information on error objects, see the [error specification][spec].
    //
    // Optionally, a second argument containing a selection of all
    // available error templates can be provided. If not present, the
    // global selection of templates from `jQuery.errorTemplates` will
    // be used.
    //
    //   [spec]: http://toolness.github.com/slowparse/spec/
    fillError: function(error, templates) {
      var selector = ".error-msg." + error.type;
      var template = (templates || $.errorTemplates).filter(selector);
      if (template.length == 0)
        throw new Error("Error template not found for " + error.type);
      this.html(_.template(template.html(), error, mustacheSettings)).show();
      return this;
    }
  });

  // ## Underscore.js Templating
  //
  // We define a private subset of [underscore.js][] that includes only
  // `_.escape()` and `_.template()`. This is done to avoid the need for
  // including underscore as a dependency.
  //
  // The `_.template()` function has been stripped of functionality to
  // interpolate and evaluate, since we don't need that functionality
  // for our error reporting.
  //
  //   [underscore.js]: http://documentcloud.github.com/underscore/  
  var _ = (function createUnderscoreTemplating() {
    // Certain characters need to be escaped so that they can be put into a
    // string literal.
    var escapes = {
      '\\': '\\',
      "'": "'",
      'r': '\r',
      'n': '\n',
      't': '\t',
      'u2028': '\u2028',
      'u2029': '\u2029'
    };

    for (var p in escapes) escapes[escapes[p]] = p;
    var escaper = /\\|'|\r|\n|\t|\u2028|\u2029/g;
  
    var _ = {
      // Escape a string for HTML interpolation.
      escape: function escape(string) {
        return (''+string)
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;')
          .replace(/'/g, '&#x27;')
          .replace(/\//g,'&#x2F;');
      },
  
      // JavaScript micro-templating, similar to John Resig's implementation.
      // Underscore templating handles arbitrary delimiters, preserves
      // whitespace, and correctly escapes quotes within interpolated code.
      template: function template(text, data, settings) {
        // Compile the template source, taking care to escape characters that
        // cannot be included in a string literal and then unescape them in
        // code blocks.
        var source = "__p+='" + text
          .replace(escaper, function(match) {
            return '\\' + escapes[match];
          })
          .replace(settings.escape || noMatch, function(match, code) {
            return "'+\n((__t=(" + unescape(code) + 
                   "))==null?'':_.escape(__t))+\n'";
          }) + "';\n";

        // If a variable is not specified, place data values in local scope.
        if (!settings.variable) source = 'with(obj||{}){\n' + source + '}\n';

        source = "var __t,__p='',__j=Array.prototype.join," +
          "print=function(){__p+=__j.call(arguments,'')};\n" +
          source + "return __p;\n";

        var render = new Function(settings.variable || 'obj', '_', source);
        if (data) return render(data, _);
        var template = function(data) {
          return render.call(this, data, _);
        };

        // Provide the compiled function source as a convenience for
        // precompilation.
        template.source = 'function(' + (settings.variable || 'obj') +
                          '){\n' + source + '}';

        return template;
      }
    };
    
    return _;
  })();
  
  // We want to use "mustache"-style templating, e.g. `hello there {{name}}`.
  var mustacheSettings = {
    escape: /\{\{(.+?)\}\}/g
  };
})(jQuery);

define("jquery-slowparse", ["jquery"], (function (global) {
    return function () {
        return global.$;
    }
}(this)));



// This is a simple [RequireJS plugin][] that waits for a few resources
// to load before we execute any of the app's main logic.
//
//  [RequireJS plugin]: http://requirejs.org/docs/plugins.html#apiload
define('appReady',['jquery-slowparse'], function ($) {
  var errorsLoaded,
      typekitFinished;

  function startLoad() {
    errorsLoaded = $.Deferred();
    typekitFinished = $.Deferred();

    try {
      Typekit.load({
        active: finishTypekit,
        inactive: finishTypekit
      });
    } catch(e) { typekitFinished.resolve(); }

    $.loadErrors("slowparse/spec/", ["base", "forbidjs"], function() {
      errorsLoaded.resolve();
    });
  }

  return {
    load: function(name, req, onLoad, config) {
      if (config.isBuild) {
        onLoad(startLoad.toString());
      } else {
        startload();
        $.when(errorsLoaded, typekitFinished).then(onLoad);
      }
    }
  };
});
// tipsy, facebook style tooltips for jquery
// version 1.0.0a
// (c) 2008-2010 jason frame [jason@onehackoranother.com]
// released under the MIT license

(function($) {
    
    function maybeCall(thing, ctx) {
        return (typeof thing == 'function') ? (thing.call(ctx)) : thing;
    };
    
    function Tipsy(element, options) {
        this.$element = $(element);
        this.options = options;
        this.enabled = true;
        this.fixTitle();
    };
    
    Tipsy.prototype = {
        show: function() {
            var title = this.getTitle();
            if (title && this.enabled) {
                var $tip = this.tip();
                
                $tip.find('.tipsy-inner')[this.options.html ? 'html' : 'text'](title);
                $tip[0].className = 'tipsy'; // reset classname in case of dynamic gravity
                $tip.remove().css({top: 0, left: 0, visibility: 'hidden', display: 'block'}).prependTo(document.body);
                
                var pos = $.extend({}, this.$element.offset(), {
                    width: this.$element[0].offsetWidth,
                    height: this.$element[0].offsetHeight
                });
                
                var actualWidth = $tip[0].offsetWidth,
                    actualHeight = $tip[0].offsetHeight,
                    gravity = maybeCall(this.options.gravity, this.$element[0]);
                
                var tp;
                switch (gravity.charAt(0)) {
                    case 'n':
                        tp = {top: pos.top + pos.height + this.options.offset, left: pos.left + pos.width / 2 - actualWidth / 2};
                        break;
                    case 's':
                        tp = {top: pos.top - actualHeight - this.options.offset, left: pos.left + pos.width / 2 - actualWidth / 2};
                        break;
                    case 'e':
                        tp = {top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth - this.options.offset};
                        break;
                    case 'w':
                        tp = {top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width + this.options.offset};
                        break;
                }
                
                if (gravity.length == 2) {
                    if (gravity.charAt(1) == 'w') {
                        tp.left = pos.left + pos.width / 2 - 15;
                    } else {
                        tp.left = pos.left + pos.width / 2 - actualWidth + 15;
                    }
                }
                
                $tip.css(tp).addClass('tipsy-' + gravity);
                $tip.find('.tipsy-arrow')[0].className = 'tipsy-arrow tipsy-arrow-' + gravity.charAt(0);
                if (this.options.className) {
                    $tip.addClass(maybeCall(this.options.className, this.$element[0]));
                }
                
                if (this.options.fade) {
                    $tip.stop().css({opacity: 0, display: 'block', visibility: 'visible'}).animate({opacity: this.options.opacity});
                } else {
                    $tip.css({visibility: 'visible', opacity: this.options.opacity});
                }
            }
        },
        
        hide: function() {
            if (this.options.fade) {
                this.tip().stop().fadeOut(function() { $(this).remove(); });
            } else {
                this.tip().remove();
            }
        },
        
        fixTitle: function() {
            var $e = this.$element;
            if ($e.attr('title') || typeof($e.attr('original-title')) != 'string') {
                $e.attr('original-title', $e.attr('title') || '').removeAttr('title');
            }
        },
        
        getTitle: function() {
            var title, $e = this.$element, o = this.options;
            this.fixTitle();
            var title, o = this.options;
            if (typeof o.title == 'string') {
                title = $e.attr(o.title == 'title' ? 'original-title' : o.title);
            } else if (typeof o.title == 'function') {
                title = o.title.call($e[0]);
            }
            title = ('' + title).replace(/(^\s*|\s*$)/, "");
            return title || o.fallback;
        },
        
        tip: function() {
            if (!this.$tip) {
                this.$tip = $('<div class="tipsy"></div>').html('<div class="tipsy-arrow"></div><div class="tipsy-inner"></div>');
            }
            return this.$tip;
        },
        
        validate: function() {
            if (!this.$element[0].parentNode) {
                this.hide();
                this.$element = null;
                this.options = null;
            }
        },
        
        enable: function() { this.enabled = true; },
        disable: function() { this.enabled = false; },
        toggleEnabled: function() { this.enabled = !this.enabled; }
    };
    
    $.fn.tipsy = function(options) {
        
        if (options === true) {
            return this.data('tipsy');
        } else if (typeof options == 'string') {
            var tipsy = this.data('tipsy');
            if (tipsy) tipsy[options]();
            return this;
        }
        
        options = $.extend({}, $.fn.tipsy.defaults, options);
        
        function get(ele) {
            var tipsy = $.data(ele, 'tipsy');
            if (!tipsy) {
                tipsy = new Tipsy(ele, $.fn.tipsy.elementOptions(ele, options));
                $.data(ele, 'tipsy', tipsy);
            }
            return tipsy;
        }
        
        function enter() {
            var tipsy = get(this);
            tipsy.hoverState = 'in';
            if (options.delayIn == 0) {
                tipsy.show();
            } else {
                tipsy.fixTitle();
                setTimeout(function() { if (tipsy.hoverState == 'in') tipsy.show(); }, options.delayIn);
            }
        };
        
        function leave() {
            var tipsy = get(this);
            tipsy.hoverState = 'out';
            if (options.delayOut == 0) {
                tipsy.hide();
            } else {
                setTimeout(function() { if (tipsy.hoverState == 'out') tipsy.hide(); }, options.delayOut);
            }
        };
        
        if (!options.live) this.each(function() { get(this); });
        
        if (options.trigger != 'manual') {
            var binder   = options.live ? 'live' : 'bind',
                eventIn  = options.trigger == 'hover' ? 'mouseenter' : 'focus',
                eventOut = options.trigger == 'hover' ? 'mouseleave' : 'blur';
            this[binder](eventIn, enter)[binder](eventOut, leave);
        }
        
        return this;
        
    };
    
    $.fn.tipsy.defaults = {
        className: null,
        delayIn: 0,
        delayOut: 0,
        fade: false,
        fallback: '',
        gravity: 'n',
        html: false,
        live: false,
        offset: 0,
        opacity: 0.8,
        title: 'title',
        trigger: 'hover'
    };
    
    // Overwrite this method to provide options on a per-element basis.
    // For example, you could store the gravity in a 'tipsy-gravity' attribute:
    // return $.extend({}, options, {gravity: $(ele).attr('tipsy-gravity') || 'n' });
    // (remember - do not modify 'options' in place!)
    $.fn.tipsy.elementOptions = function(ele, options) {
        return $.metadata ? $.extend({}, options, $(ele).metadata()) : options;
    };
    
    $.fn.tipsy.autoNS = function() {
        return $(this).offset().top > ($(document).scrollTop() + $(window).height() / 2) ? 's' : 'n';
    };
    
    $.fn.tipsy.autoWE = function() {
        return $(this).offset().left > ($(document).scrollLeft() + $(window).width() / 2) ? 'e' : 'w';
    };
    
    /**
     * yields a closure of the supplied parameters, producing a function that takes
     * no arguments and is suitable for use as an autogravity function like so:
     *
     * @param margin (int) - distance from the viewable region edge that an
     *        element should be before setting its tooltip's gravity to be away
     *        from that edge.
     * @param prefer (string, e.g. 'n', 'sw', 'w') - the direction to prefer
     *        if there are no viewable region edges effecting the tooltip's
     *        gravity. It will try to vary from this minimally, for example,
     *        if 'sw' is preferred and an element is near the right viewable 
     *        region edge, but not the top edge, it will set the gravity for
     *        that element's tooltip to be 'se', preserving the southern
     *        component.
     */
     $.fn.tipsy.autoBounds = function(margin, prefer) {
		return function() {
			var dir = {ns: prefer[0], ew: (prefer.length > 1 ? prefer[1] : false)},
			    boundTop = $(document).scrollTop() + margin,
			    boundLeft = $(document).scrollLeft() + margin,
			    $this = $(this);

			if ($this.offset().top < boundTop) dir.ns = 'n';
			if ($this.offset().left < boundLeft) dir.ew = 'w';
			if ($(window).width() + $(document).scrollLeft() - $this.offset().left < margin) dir.ew = 'e';
			if ($(window).height() + $(document).scrollTop() - $this.offset().top < margin) dir.ns = 's';

			return dir.ns + (dir.ew ? dir.ew : '');
		}
	};
    
})(jQuery);

define("jquery-tipsy", ["jquery"], (function (global) {
    return function () {
        return global.$;
    }
}(this)));

// Underscore.js 1.3.3
// (c) 2009-2012 Jeremy Ashkenas, DocumentCloud Inc.
// Underscore is freely distributable under the MIT license.
// Portions of Underscore are inspired or borrowed from Prototype,
// Oliver Steele's Functional, and John Resig's Micro-Templating.
// For all details and documentation:
// http://documentcloud.github.com/underscore
(function(){function r(a,c,d){if(a===c)return 0!==a||1/a==1/c;if(null==a||null==c)return a===c;a._chain&&(a=a._wrapped);c._chain&&(c=c._wrapped);if(a.isEqual&&b.isFunction(a.isEqual))return a.isEqual(c);if(c.isEqual&&b.isFunction(c.isEqual))return c.isEqual(a);var e=l.call(a);if(e!=l.call(c))return!1;switch(e){case "[object String]":return a==""+c;case "[object Number]":return a!=+a?c!=+c:0==a?1/a==1/c:a==+c;case "[object Date]":case "[object Boolean]":return+a==+c;case "[object RegExp]":return a.source==
c.source&&a.global==c.global&&a.multiline==c.multiline&&a.ignoreCase==c.ignoreCase}if("object"!=typeof a||"object"!=typeof c)return!1;for(var f=d.length;f--;)if(d[f]==a)return!0;d.push(a);var f=0,g=!0;if("[object Array]"==e){if(f=a.length,g=f==c.length)for(;f--&&(g=f in a==f in c&&r(a[f],c[f],d)););}else{if("constructor"in a!="constructor"in c||a.constructor!=c.constructor)return!1;for(var h in a)if(b.has(a,h)&&(f++,!(g=b.has(c,h)&&r(a[h],c[h],d))))break;if(g){for(h in c)if(b.has(c,h)&&!f--)break;
g=!f}}d.pop();return g}var s=this,I=s._,o={},k=Array.prototype,p=Object.prototype,i=k.slice,J=k.unshift,l=p.toString,K=p.hasOwnProperty,y=k.forEach,z=k.map,A=k.reduce,B=k.reduceRight,C=k.filter,D=k.every,E=k.some,q=k.indexOf,F=k.lastIndexOf,p=Array.isArray,L=Object.keys,t=Function.prototype.bind,b=function(a){return new m(a)};"undefined"!==typeof exports?("undefined"!==typeof module&&module.exports&&(exports=module.exports=b),exports._=b):s._=b;b.VERSION="1.3.3";var j=b.each=b.forEach=function(a,
c,d){if(a!=null)if(y&&a.forEach===y)a.forEach(c,d);else if(a.length===+a.length)for(var e=0,f=a.length;e<f;e++){if(e in a&&c.call(d,a[e],e,a)===o)break}else for(e in a)if(b.has(a,e)&&c.call(d,a[e],e,a)===o)break};b.map=b.collect=function(a,c,b){var e=[];if(a==null)return e;if(z&&a.map===z)return a.map(c,b);j(a,function(a,g,h){e[e.length]=c.call(b,a,g,h)});if(a.length===+a.length)e.length=a.length;return e};b.reduce=b.foldl=b.inject=function(a,c,d,e){var f=arguments.length>2;a==null&&(a=[]);if(A&&
a.reduce===A){e&&(c=b.bind(c,e));return f?a.reduce(c,d):a.reduce(c)}j(a,function(a,b,i){if(f)d=c.call(e,d,a,b,i);else{d=a;f=true}});if(!f)throw new TypeError("Reduce of empty array with no initial value");return d};b.reduceRight=b.foldr=function(a,c,d,e){var f=arguments.length>2;a==null&&(a=[]);if(B&&a.reduceRight===B){e&&(c=b.bind(c,e));return f?a.reduceRight(c,d):a.reduceRight(c)}var g=b.toArray(a).reverse();e&&!f&&(c=b.bind(c,e));return f?b.reduce(g,c,d,e):b.reduce(g,c)};b.find=b.detect=function(a,
c,b){var e;G(a,function(a,g,h){if(c.call(b,a,g,h)){e=a;return true}});return e};b.filter=b.select=function(a,c,b){var e=[];if(a==null)return e;if(C&&a.filter===C)return a.filter(c,b);j(a,function(a,g,h){c.call(b,a,g,h)&&(e[e.length]=a)});return e};b.reject=function(a,c,b){var e=[];if(a==null)return e;j(a,function(a,g,h){c.call(b,a,g,h)||(e[e.length]=a)});return e};b.every=b.all=function(a,c,b){var e=true;if(a==null)return e;if(D&&a.every===D)return a.every(c,b);j(a,function(a,g,h){if(!(e=e&&c.call(b,
a,g,h)))return o});return!!e};var G=b.some=b.any=function(a,c,d){c||(c=b.identity);var e=false;if(a==null)return e;if(E&&a.some===E)return a.some(c,d);j(a,function(a,b,h){if(e||(e=c.call(d,a,b,h)))return o});return!!e};b.include=b.contains=function(a,c){var b=false;if(a==null)return b;if(q&&a.indexOf===q)return a.indexOf(c)!=-1;return b=G(a,function(a){return a===c})};b.invoke=function(a,c){var d=i.call(arguments,2);return b.map(a,function(a){return(b.isFunction(c)?c||a:a[c]).apply(a,d)})};b.pluck=
function(a,c){return b.map(a,function(a){return a[c]})};b.max=function(a,c,d){if(!c&&b.isArray(a)&&a[0]===+a[0])return Math.max.apply(Math,a);if(!c&&b.isEmpty(a))return-Infinity;var e={computed:-Infinity};j(a,function(a,b,h){b=c?c.call(d,a,b,h):a;b>=e.computed&&(e={value:a,computed:b})});return e.value};b.min=function(a,c,d){if(!c&&b.isArray(a)&&a[0]===+a[0])return Math.min.apply(Math,a);if(!c&&b.isEmpty(a))return Infinity;var e={computed:Infinity};j(a,function(a,b,h){b=c?c.call(d,a,b,h):a;b<e.computed&&
(e={value:a,computed:b})});return e.value};b.shuffle=function(a){var b=[],d;j(a,function(a,f){d=Math.floor(Math.random()*(f+1));b[f]=b[d];b[d]=a});return b};b.sortBy=function(a,c,d){var e=b.isFunction(c)?c:function(a){return a[c]};return b.pluck(b.map(a,function(a,b,c){return{value:a,criteria:e.call(d,a,b,c)}}).sort(function(a,b){var c=a.criteria,d=b.criteria;return c===void 0?1:d===void 0?-1:c<d?-1:c>d?1:0}),"value")};b.groupBy=function(a,c){var d={},e=b.isFunction(c)?c:function(a){return a[c]};
j(a,function(a,b){var c=e(a,b);(d[c]||(d[c]=[])).push(a)});return d};b.sortedIndex=function(a,c,d){d||(d=b.identity);for(var e=0,f=a.length;e<f;){var g=e+f>>1;d(a[g])<d(c)?e=g+1:f=g}return e};b.toArray=function(a){return!a?[]:b.isArray(a)||b.isArguments(a)?i.call(a):a.toArray&&b.isFunction(a.toArray)?a.toArray():b.values(a)};b.size=function(a){return b.isArray(a)?a.length:b.keys(a).length};b.first=b.head=b.take=function(a,b,d){return b!=null&&!d?i.call(a,0,b):a[0]};b.initial=function(a,b,d){return i.call(a,
0,a.length-(b==null||d?1:b))};b.last=function(a,b,d){return b!=null&&!d?i.call(a,Math.max(a.length-b,0)):a[a.length-1]};b.rest=b.tail=function(a,b,d){return i.call(a,b==null||d?1:b)};b.compact=function(a){return b.filter(a,function(a){return!!a})};b.flatten=function(a,c){return b.reduce(a,function(a,e){if(b.isArray(e))return a.concat(c?e:b.flatten(e));a[a.length]=e;return a},[])};b.without=function(a){return b.difference(a,i.call(arguments,1))};b.uniq=b.unique=function(a,c,d){var d=d?b.map(a,d):a,
e=[];a.length<3&&(c=true);b.reduce(d,function(d,g,h){if(c?b.last(d)!==g||!d.length:!b.include(d,g)){d.push(g);e.push(a[h])}return d},[]);return e};b.union=function(){return b.uniq(b.flatten(arguments,true))};b.intersection=b.intersect=function(a){var c=i.call(arguments,1);return b.filter(b.uniq(a),function(a){return b.every(c,function(c){return b.indexOf(c,a)>=0})})};b.difference=function(a){var c=b.flatten(i.call(arguments,1),true);return b.filter(a,function(a){return!b.include(c,a)})};b.zip=function(){for(var a=
i.call(arguments),c=b.max(b.pluck(a,"length")),d=Array(c),e=0;e<c;e++)d[e]=b.pluck(a,""+e);return d};b.indexOf=function(a,c,d){if(a==null)return-1;var e;if(d){d=b.sortedIndex(a,c);return a[d]===c?d:-1}if(q&&a.indexOf===q)return a.indexOf(c);d=0;for(e=a.length;d<e;d++)if(d in a&&a[d]===c)return d;return-1};b.lastIndexOf=function(a,b){if(a==null)return-1;if(F&&a.lastIndexOf===F)return a.lastIndexOf(b);for(var d=a.length;d--;)if(d in a&&a[d]===b)return d;return-1};b.range=function(a,b,d){if(arguments.length<=
1){b=a||0;a=0}for(var d=arguments[2]||1,e=Math.max(Math.ceil((b-a)/d),0),f=0,g=Array(e);f<e;){g[f++]=a;a=a+d}return g};var H=function(){};b.bind=function(a,c){var d,e;if(a.bind===t&&t)return t.apply(a,i.call(arguments,1));if(!b.isFunction(a))throw new TypeError;e=i.call(arguments,2);return d=function(){if(!(this instanceof d))return a.apply(c,e.concat(i.call(arguments)));H.prototype=a.prototype;var b=new H,g=a.apply(b,e.concat(i.call(arguments)));return Object(g)===g?g:b}};b.bindAll=function(a){var c=
i.call(arguments,1);c.length==0&&(c=b.functions(a));j(c,function(c){a[c]=b.bind(a[c],a)});return a};b.memoize=function(a,c){var d={};c||(c=b.identity);return function(){var e=c.apply(this,arguments);return b.has(d,e)?d[e]:d[e]=a.apply(this,arguments)}};b.delay=function(a,b){var d=i.call(arguments,2);return setTimeout(function(){return a.apply(null,d)},b)};b.defer=function(a){return b.delay.apply(b,[a,1].concat(i.call(arguments,1)))};b.throttle=function(a,c){var d,e,f,g,h,i,j=b.debounce(function(){h=
g=false},c);return function(){d=this;e=arguments;f||(f=setTimeout(function(){f=null;h&&a.apply(d,e);j()},c));g?h=true:i=a.apply(d,e);j();g=true;return i}};b.debounce=function(a,b,d){var e;return function(){var f=this,g=arguments;d&&!e&&a.apply(f,g);clearTimeout(e);e=setTimeout(function(){e=null;d||a.apply(f,g)},b)}};b.once=function(a){var b=false,d;return function(){if(b)return d;b=true;return d=a.apply(this,arguments)}};b.wrap=function(a,b){return function(){var d=[a].concat(i.call(arguments,0));
return b.apply(this,d)}};b.compose=function(){var a=arguments;return function(){for(var b=arguments,d=a.length-1;d>=0;d--)b=[a[d].apply(this,b)];return b[0]}};b.after=function(a,b){return a<=0?b():function(){if(--a<1)return b.apply(this,arguments)}};b.keys=L||function(a){if(a!==Object(a))throw new TypeError("Invalid object");var c=[],d;for(d in a)b.has(a,d)&&(c[c.length]=d);return c};b.values=function(a){return b.map(a,b.identity)};b.functions=b.methods=function(a){var c=[],d;for(d in a)b.isFunction(a[d])&&
c.push(d);return c.sort()};b.extend=function(a){j(i.call(arguments,1),function(b){for(var d in b)a[d]=b[d]});return a};b.pick=function(a){var c={};j(b.flatten(i.call(arguments,1)),function(b){b in a&&(c[b]=a[b])});return c};b.defaults=function(a){j(i.call(arguments,1),function(b){for(var d in b)a[d]==null&&(a[d]=b[d])});return a};b.clone=function(a){return!b.isObject(a)?a:b.isArray(a)?a.slice():b.extend({},a)};b.tap=function(a,b){b(a);return a};b.isEqual=function(a,b){return r(a,b,[])};b.isEmpty=
function(a){if(a==null)return true;if(b.isArray(a)||b.isString(a))return a.length===0;for(var c in a)if(b.has(a,c))return false;return true};b.isElement=function(a){return!!(a&&a.nodeType==1)};b.isArray=p||function(a){return l.call(a)=="[object Array]"};b.isObject=function(a){return a===Object(a)};b.isArguments=function(a){return l.call(a)=="[object Arguments]"};b.isArguments(arguments)||(b.isArguments=function(a){return!(!a||!b.has(a,"callee"))});b.isFunction=function(a){return l.call(a)=="[object Function]"};
b.isString=function(a){return l.call(a)=="[object String]"};b.isNumber=function(a){return l.call(a)=="[object Number]"};b.isFinite=function(a){return b.isNumber(a)&&isFinite(a)};b.isNaN=function(a){return a!==a};b.isBoolean=function(a){return a===true||a===false||l.call(a)=="[object Boolean]"};b.isDate=function(a){return l.call(a)=="[object Date]"};b.isRegExp=function(a){return l.call(a)=="[object RegExp]"};b.isNull=function(a){return a===null};b.isUndefined=function(a){return a===void 0};b.has=function(a,
b){return K.call(a,b)};b.noConflict=function(){s._=I;return this};b.identity=function(a){return a};b.times=function(a,b,d){for(var e=0;e<a;e++)b.call(d,e)};b.escape=function(a){return(""+a).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;")};b.result=function(a,c){if(a==null)return null;var d=a[c];return b.isFunction(d)?d.call(a):d};b.mixin=function(a){j(b.functions(a),function(c){M(c,b[c]=a[c])})};var N=0;b.uniqueId=
function(a){var b=N++;return a?a+b:b};b.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var u=/.^/,n={"\\":"\\","'":"'",r:"\r",n:"\n",t:"\t",u2028:"\u2028",u2029:"\u2029"},v;for(v in n)n[n[v]]=v;var O=/\\|'|\r|\n|\t|\u2028|\u2029/g,P=/\\(\\|'|r|n|t|u2028|u2029)/g,w=function(a){return a.replace(P,function(a,b){return n[b]})};b.template=function(a,c,d){d=b.defaults(d||{},b.templateSettings);a="__p+='"+a.replace(O,function(a){return"\\"+n[a]}).replace(d.escape||
u,function(a,b){return"'+\n_.escape("+w(b)+")+\n'"}).replace(d.interpolate||u,function(a,b){return"'+\n("+w(b)+")+\n'"}).replace(d.evaluate||u,function(a,b){return"';\n"+w(b)+"\n;__p+='"})+"';\n";d.variable||(a="with(obj||{}){\n"+a+"}\n");var a="var __p='';var print=function(){__p+=Array.prototype.join.call(arguments, '')};\n"+a+"return __p;\n",e=new Function(d.variable||"obj","_",a);if(c)return e(c,b);c=function(a){return e.call(this,a,b)};c.source="function("+(d.variable||"obj")+"){\n"+a+"}";return c};
b.chain=function(a){return b(a).chain()};var m=function(a){this._wrapped=a};b.prototype=m.prototype;var x=function(a,c){return c?b(a).chain():a},M=function(a,c){m.prototype[a]=function(){var a=i.call(arguments);J.call(a,this._wrapped);return x(c.apply(b,a),this._chain)}};b.mixin(b);j("pop,push,reverse,shift,sort,splice,unshift".split(","),function(a){var b=k[a];m.prototype[a]=function(){var d=this._wrapped;b.apply(d,arguments);var e=d.length;(a=="shift"||a=="splice")&&e===0&&delete d[0];return x(d,
this._chain)}});j(["concat","join","slice"],function(a){var b=k[a];m.prototype[a]=function(){return x(b.apply(this._wrapped,arguments),this._chain)}});m.prototype.chain=function(){this._chain=true;return this};m.prototype.value=function(){return this._wrapped}}).call(this);
define("underscore", (function (global) {
    return function () {
        return global._;
    }
}(this)));

// Backbone.js 0.9.2

// (c) 2010-2012 Jeremy Ashkenas, DocumentCloud Inc.
// Backbone may be freely distributed under the MIT license.
// For all details and documentation:
// http://backbonejs.org
(function(){var l=this,y=l.Backbone,z=Array.prototype.slice,A=Array.prototype.splice,g;g="undefined"!==typeof exports?exports:l.Backbone={};g.VERSION="0.9.2";var f=l._;!f&&"undefined"!==typeof require&&(f=require("underscore"));var i=l.jQuery||l.Zepto||l.ender;g.setDomLibrary=function(a){i=a};g.noConflict=function(){l.Backbone=y;return this};g.emulateHTTP=!1;g.emulateJSON=!1;var p=/\s+/,k=g.Events={on:function(a,b,c){var d,e,f,g,j;if(!b)return this;a=a.split(p);for(d=this._callbacks||(this._callbacks=
{});e=a.shift();)f=(j=d[e])?j.tail:{},f.next=g={},f.context=c,f.callback=b,d[e]={tail:g,next:j?j.next:f};return this},off:function(a,b,c){var d,e,h,g,j,q;if(e=this._callbacks){if(!a&&!b&&!c)return delete this._callbacks,this;for(a=a?a.split(p):f.keys(e);d=a.shift();)if(h=e[d],delete e[d],h&&(b||c))for(g=h.tail;(h=h.next)!==g;)if(j=h.callback,q=h.context,b&&j!==b||c&&q!==c)this.on(d,j,q);return this}},trigger:function(a){var b,c,d,e,f,g;if(!(d=this._callbacks))return this;f=d.all;a=a.split(p);for(g=
z.call(arguments,1);b=a.shift();){if(c=d[b])for(e=c.tail;(c=c.next)!==e;)c.callback.apply(c.context||this,g);if(c=f){e=c.tail;for(b=[b].concat(g);(c=c.next)!==e;)c.callback.apply(c.context||this,b)}}return this}};k.bind=k.on;k.unbind=k.off;var o=g.Model=function(a,b){var c;a||(a={});b&&b.parse&&(a=this.parse(a));if(c=n(this,"defaults"))a=f.extend({},c,a);b&&b.collection&&(this.collection=b.collection);this.attributes={};this._escapedAttributes={};this.cid=f.uniqueId("c");this.changed={};this._silent=
{};this._pending={};this.set(a,{silent:!0});this.changed={};this._silent={};this._pending={};this._previousAttributes=f.clone(this.attributes);this.initialize.apply(this,arguments)};f.extend(o.prototype,k,{changed:null,_silent:null,_pending:null,idAttribute:"id",initialize:function(){},toJSON:function(){return f.clone(this.attributes)},get:function(a){return this.attributes[a]},escape:function(a){var b;if(b=this._escapedAttributes[a])return b;b=this.get(a);return this._escapedAttributes[a]=f.escape(null==
b?"":""+b)},has:function(a){return null!=this.get(a)},set:function(a,b,c){var d,e;f.isObject(a)||null==a?(d=a,c=b):(d={},d[a]=b);c||(c={});if(!d)return this;d instanceof o&&(d=d.attributes);if(c.unset)for(e in d)d[e]=void 0;if(!this._validate(d,c))return!1;this.idAttribute in d&&(this.id=d[this.idAttribute]);var b=c.changes={},h=this.attributes,g=this._escapedAttributes,j=this._previousAttributes||{};for(e in d){a=d[e];if(!f.isEqual(h[e],a)||c.unset&&f.has(h,e))delete g[e],(c.silent?this._silent:
b)[e]=!0;c.unset?delete h[e]:h[e]=a;!f.isEqual(j[e],a)||f.has(h,e)!=f.has(j,e)?(this.changed[e]=a,c.silent||(this._pending[e]=!0)):(delete this.changed[e],delete this._pending[e])}c.silent||this.change(c);return this},unset:function(a,b){(b||(b={})).unset=!0;return this.set(a,null,b)},clear:function(a){(a||(a={})).unset=!0;return this.set(f.clone(this.attributes),a)},fetch:function(a){var a=a?f.clone(a):{},b=this,c=a.success;a.success=function(d,e,f){if(!b.set(b.parse(d,f),a))return!1;c&&c(b,d)};
a.error=g.wrapError(a.error,b,a);return(this.sync||g.sync).call(this,"read",this,a)},save:function(a,b,c){var d,e;f.isObject(a)||null==a?(d=a,c=b):(d={},d[a]=b);c=c?f.clone(c):{};if(c.wait){if(!this._validate(d,c))return!1;e=f.clone(this.attributes)}a=f.extend({},c,{silent:!0});if(d&&!this.set(d,c.wait?a:c))return!1;var h=this,i=c.success;c.success=function(a,b,e){b=h.parse(a,e);if(c.wait){delete c.wait;b=f.extend(d||{},b)}if(!h.set(b,c))return false;i?i(h,a):h.trigger("sync",h,a,c)};c.error=g.wrapError(c.error,
h,c);b=this.isNew()?"create":"update";b=(this.sync||g.sync).call(this,b,this,c);c.wait&&this.set(e,a);return b},destroy:function(a){var a=a?f.clone(a):{},b=this,c=a.success,d=function(){b.trigger("destroy",b,b.collection,a)};if(this.isNew())return d(),!1;a.success=function(e){a.wait&&d();c?c(b,e):b.trigger("sync",b,e,a)};a.error=g.wrapError(a.error,b,a);var e=(this.sync||g.sync).call(this,"delete",this,a);a.wait||d();return e},url:function(){var a=n(this,"urlRoot")||n(this.collection,"url")||t();
return this.isNew()?a:a+("/"==a.charAt(a.length-1)?"":"/")+encodeURIComponent(this.id)},parse:function(a){return a},clone:function(){return new this.constructor(this.attributes)},isNew:function(){return null==this.id},change:function(a){a||(a={});var b=this._changing;this._changing=!0;for(var c in this._silent)this._pending[c]=!0;var d=f.extend({},a.changes,this._silent);this._silent={};for(c in d)this.trigger("change:"+c,this,this.get(c),a);if(b)return this;for(;!f.isEmpty(this._pending);){this._pending=
{};this.trigger("change",this,a);for(c in this.changed)!this._pending[c]&&!this._silent[c]&&delete this.changed[c];this._previousAttributes=f.clone(this.attributes)}this._changing=!1;return this},hasChanged:function(a){return!arguments.length?!f.isEmpty(this.changed):f.has(this.changed,a)},changedAttributes:function(a){if(!a)return this.hasChanged()?f.clone(this.changed):!1;var b,c=!1,d=this._previousAttributes,e;for(e in a)if(!f.isEqual(d[e],b=a[e]))(c||(c={}))[e]=b;return c},previous:function(a){return!arguments.length||
!this._previousAttributes?null:this._previousAttributes[a]},previousAttributes:function(){return f.clone(this._previousAttributes)},isValid:function(){return!this.validate(this.attributes)},_validate:function(a,b){if(b.silent||!this.validate)return!0;var a=f.extend({},this.attributes,a),c=this.validate(a,b);if(!c)return!0;b&&b.error?b.error(this,c,b):this.trigger("error",this,c,b);return!1}});var r=g.Collection=function(a,b){b||(b={});b.model&&(this.model=b.model);b.comparator&&(this.comparator=b.comparator);
this._reset();this.initialize.apply(this,arguments);a&&this.reset(a,{silent:!0,parse:b.parse})};f.extend(r.prototype,k,{model:o,initialize:function(){},toJSON:function(a){return this.map(function(b){return b.toJSON(a)})},add:function(a,b){var c,d,e,g,i,j={},k={},l=[];b||(b={});a=f.isArray(a)?a.slice():[a];c=0;for(d=a.length;c<d;c++){if(!(e=a[c]=this._prepareModel(a[c],b)))throw Error("Can't add an invalid model to a collection");g=e.cid;i=e.id;j[g]||this._byCid[g]||null!=i&&(k[i]||this._byId[i])?
l.push(c):j[g]=k[i]=e}for(c=l.length;c--;)a.splice(l[c],1);c=0;for(d=a.length;c<d;c++)(e=a[c]).on("all",this._onModelEvent,this),this._byCid[e.cid]=e,null!=e.id&&(this._byId[e.id]=e);this.length+=d;A.apply(this.models,[null!=b.at?b.at:this.models.length,0].concat(a));this.comparator&&this.sort({silent:!0});if(b.silent)return this;c=0;for(d=this.models.length;c<d;c++)if(j[(e=this.models[c]).cid])b.index=c,e.trigger("add",e,this,b);return this},remove:function(a,b){var c,d,e,g;b||(b={});a=f.isArray(a)?
a.slice():[a];c=0;for(d=a.length;c<d;c++)if(g=this.getByCid(a[c])||this.get(a[c]))delete this._byId[g.id],delete this._byCid[g.cid],e=this.indexOf(g),this.models.splice(e,1),this.length--,b.silent||(b.index=e,g.trigger("remove",g,this,b)),this._removeReference(g);return this},push:function(a,b){a=this._prepareModel(a,b);this.add(a,b);return a},pop:function(a){var b=this.at(this.length-1);this.remove(b,a);return b},unshift:function(a,b){a=this._prepareModel(a,b);this.add(a,f.extend({at:0},b));return a},
shift:function(a){var b=this.at(0);this.remove(b,a);return b},get:function(a){return null==a?void 0:this._byId[null!=a.id?a.id:a]},getByCid:function(a){return a&&this._byCid[a.cid||a]},at:function(a){return this.models[a]},where:function(a){return f.isEmpty(a)?[]:this.filter(function(b){for(var c in a)if(a[c]!==b.get(c))return!1;return!0})},sort:function(a){a||(a={});if(!this.comparator)throw Error("Cannot sort a set without a comparator");var b=f.bind(this.comparator,this);1==this.comparator.length?
this.models=this.sortBy(b):this.models.sort(b);a.silent||this.trigger("reset",this,a);return this},pluck:function(a){return f.map(this.models,function(b){return b.get(a)})},reset:function(a,b){a||(a=[]);b||(b={});for(var c=0,d=this.models.length;c<d;c++)this._removeReference(this.models[c]);this._reset();this.add(a,f.extend({silent:!0},b));b.silent||this.trigger("reset",this,b);return this},fetch:function(a){a=a?f.clone(a):{};void 0===a.parse&&(a.parse=!0);var b=this,c=a.success;a.success=function(d,
e,f){b[a.add?"add":"reset"](b.parse(d,f),a);c&&c(b,d)};a.error=g.wrapError(a.error,b,a);return(this.sync||g.sync).call(this,"read",this,a)},create:function(a,b){var c=this,b=b?f.clone(b):{},a=this._prepareModel(a,b);if(!a)return!1;b.wait||c.add(a,b);var d=b.success;b.success=function(e,f){b.wait&&c.add(e,b);d?d(e,f):e.trigger("sync",a,f,b)};a.save(null,b);return a},parse:function(a){return a},chain:function(){return f(this.models).chain()},_reset:function(){this.length=0;this.models=[];this._byId=
{};this._byCid={}},_prepareModel:function(a,b){b||(b={});a instanceof o?a.collection||(a.collection=this):(b.collection=this,a=new this.model(a,b),a._validate(a.attributes,b)||(a=!1));return a},_removeReference:function(a){this==a.collection&&delete a.collection;a.off("all",this._onModelEvent,this)},_onModelEvent:function(a,b,c,d){("add"==a||"remove"==a)&&c!=this||("destroy"==a&&this.remove(b,d),b&&a==="change:"+b.idAttribute&&(delete this._byId[b.previous(b.idAttribute)],this._byId[b.id]=b),this.trigger.apply(this,
arguments))}});f.each("forEach,each,map,reduce,reduceRight,find,detect,filter,select,reject,every,all,some,any,include,contains,invoke,max,min,sortBy,sortedIndex,toArray,size,first,initial,rest,last,without,indexOf,shuffle,lastIndexOf,isEmpty,groupBy".split(","),function(a){r.prototype[a]=function(){return f[a].apply(f,[this.models].concat(f.toArray(arguments)))}});var u=g.Router=function(a){a||(a={});a.routes&&(this.routes=a.routes);this._bindRoutes();this.initialize.apply(this,arguments)},B=/:\w+/g,
C=/\*\w+/g,D=/[-[\]{}()+?.,\\^$|#\s]/g;f.extend(u.prototype,k,{initialize:function(){},route:function(a,b,c){g.history||(g.history=new m);f.isRegExp(a)||(a=this._routeToRegExp(a));c||(c=this[b]);g.history.route(a,f.bind(function(d){d=this._extractParameters(a,d);c&&c.apply(this,d);this.trigger.apply(this,["route:"+b].concat(d));g.history.trigger("route",this,b,d)},this));return this},navigate:function(a,b){g.history.navigate(a,b)},_bindRoutes:function(){if(this.routes){var a=[],b;for(b in this.routes)a.unshift([b,
this.routes[b]]);b=0;for(var c=a.length;b<c;b++)this.route(a[b][0],a[b][1],this[a[b][1]])}},_routeToRegExp:function(a){a=a.replace(D,"\\$&").replace(B,"([^/]+)").replace(C,"(.*?)");return RegExp("^"+a+"$")},_extractParameters:function(a,b){return a.exec(b).slice(1)}});var m=g.History=function(){this.handlers=[];f.bindAll(this,"checkUrl")},s=/^[#\/]/,E=/msie [\w.]+/;m.started=!1;f.extend(m.prototype,k,{interval:50,getHash:function(a){return(a=(a?a.location:window.location).href.match(/#(.*)$/))?a[1]:
""},getFragment:function(a,b){if(null==a)if(this._hasPushState||b){var a=window.location.pathname,c=window.location.search;c&&(a+=c)}else a=this.getHash();a.indexOf(this.options.root)||(a=a.substr(this.options.root.length));return a.replace(s,"")},start:function(a){if(m.started)throw Error("Backbone.history has already been started");m.started=!0;this.options=f.extend({},{root:"/"},this.options,a);this._wantsHashChange=!1!==this.options.hashChange;this._wantsPushState=!!this.options.pushState;this._hasPushState=
!(!this.options.pushState||!window.history||!window.history.pushState);var a=this.getFragment(),b=document.documentMode;if(b=E.exec(navigator.userAgent.toLowerCase())&&(!b||7>=b))this.iframe=i('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow,this.navigate(a);this._hasPushState?i(window).bind("popstate",this.checkUrl):this._wantsHashChange&&"onhashchange"in window&&!b?i(window).bind("hashchange",this.checkUrl):this._wantsHashChange&&(this._checkUrlInterval=setInterval(this.checkUrl,
this.interval));this.fragment=a;a=window.location;b=a.pathname==this.options.root;if(this._wantsHashChange&&this._wantsPushState&&!this._hasPushState&&!b)return this.fragment=this.getFragment(null,!0),window.location.replace(this.options.root+"#"+this.fragment),!0;this._wantsPushState&&this._hasPushState&&b&&a.hash&&(this.fragment=this.getHash().replace(s,""),window.history.replaceState({},document.title,a.protocol+"//"+a.host+this.options.root+this.fragment));if(!this.options.silent)return this.loadUrl()},
stop:function(){i(window).unbind("popstate",this.checkUrl).unbind("hashchange",this.checkUrl);clearInterval(this._checkUrlInterval);m.started=!1},route:function(a,b){this.handlers.unshift({route:a,callback:b})},checkUrl:function(){var a=this.getFragment();a==this.fragment&&this.iframe&&(a=this.getFragment(this.getHash(this.iframe)));if(a==this.fragment)return!1;this.iframe&&this.navigate(a);this.loadUrl()||this.loadUrl(this.getHash())},loadUrl:function(a){var b=this.fragment=this.getFragment(a);return f.any(this.handlers,
function(a){if(a.route.test(b))return a.callback(b),!0})},navigate:function(a,b){if(!m.started)return!1;if(!b||!0===b)b={trigger:b};var c=(a||"").replace(s,"");this.fragment!=c&&(this._hasPushState?(0!=c.indexOf(this.options.root)&&(c=this.options.root+c),this.fragment=c,window.history[b.replace?"replaceState":"pushState"]({},document.title,c)):this._wantsHashChange?(this.fragment=c,this._updateHash(window.location,c,b.replace),this.iframe&&c!=this.getFragment(this.getHash(this.iframe))&&(b.replace||
this.iframe.document.open().close(),this._updateHash(this.iframe.location,c,b.replace))):window.location.assign(this.options.root+a),b.trigger&&this.loadUrl(a))},_updateHash:function(a,b,c){c?a.replace(a.toString().replace(/(javascript:|#).*$/,"")+"#"+b):a.hash=b}});var v=g.View=function(a){this.cid=f.uniqueId("view");this._configure(a||{});this._ensureElement();this.initialize.apply(this,arguments);this.delegateEvents()},F=/^(\S+)\s*(.*)$/,w="model,collection,el,id,attributes,className,tagName".split(",");
f.extend(v.prototype,k,{tagName:"div",$:function(a){return this.$el.find(a)},initialize:function(){},render:function(){return this},remove:function(){this.$el.remove();return this},make:function(a,b,c){a=document.createElement(a);b&&i(a).attr(b);c&&i(a).html(c);return a},setElement:function(a,b){this.$el&&this.undelegateEvents();this.$el=a instanceof i?a:i(a);this.el=this.$el[0];!1!==b&&this.delegateEvents();return this},delegateEvents:function(a){if(a||(a=n(this,"events"))){this.undelegateEvents();
for(var b in a){var c=a[b];f.isFunction(c)||(c=this[a[b]]);if(!c)throw Error('Method "'+a[b]+'" does not exist');var d=b.match(F),e=d[1],d=d[2],c=f.bind(c,this),e=e+(".delegateEvents"+this.cid);""===d?this.$el.bind(e,c):this.$el.delegate(d,e,c)}}},undelegateEvents:function(){this.$el.unbind(".delegateEvents"+this.cid)},_configure:function(a){this.options&&(a=f.extend({},this.options,a));for(var b=0,c=w.length;b<c;b++){var d=w[b];a[d]&&(this[d]=a[d])}this.options=a},_ensureElement:function(){if(this.el)this.setElement(this.el,
!1);else{var a=n(this,"attributes")||{};this.id&&(a.id=this.id);this.className&&(a["class"]=this.className);this.setElement(this.make(this.tagName,a),!1)}}});o.extend=r.extend=u.extend=v.extend=function(a,b){var c=G(this,a,b);c.extend=this.extend;return c};var H={create:"POST",update:"PUT","delete":"DELETE",read:"GET"};g.sync=function(a,b,c){var d=H[a];c||(c={});var e={type:d,dataType:"json"};c.url||(e.url=n(b,"url")||t());if(!c.data&&b&&("create"==a||"update"==a))e.contentType="application/json",
e.data=JSON.stringify(b.toJSON());g.emulateJSON&&(e.contentType="application/x-www-form-urlencoded",e.data=e.data?{model:e.data}:{});if(g.emulateHTTP&&("PUT"===d||"DELETE"===d))g.emulateJSON&&(e.data._method=d),e.type="POST",e.beforeSend=function(a){a.setRequestHeader("X-HTTP-Method-Override",d)};"GET"!==e.type&&!g.emulateJSON&&(e.processData=!1);return i.ajax(f.extend(e,c))};g.wrapError=function(a,b,c){return function(d,e){e=d===b?e:d;a?a(b,e,c):b.trigger("error",b,e,c)}};var x=function(){},G=function(a,
b,c){var d;d=b&&b.hasOwnProperty("constructor")?b.constructor:function(){a.apply(this,arguments)};f.extend(d,a);x.prototype=a.prototype;d.prototype=new x;b&&f.extend(d.prototype,b);c&&f.extend(d,c);d.prototype.constructor=d;d.__super__=a.prototype;return d},n=function(a,b){return!a||!a[b]?null:f.isFunction(a[b])?a[b]():a[b]},t=function(){throw Error('A "url" property or function must be specified');}}).call(this);
define("backbone", ["underscore","jquery"], (function (global) {
    return function () {
        return global.Backbone;
    }
}(this)));



// Data here is ultimately scraped from MDN:
// https://github.com/toolness/hacktionary
define('fc/hacktionary-data',[],function() { return {
  "short-element-descriptions": {
    "a": "anchor or hyperlink",
    "abbr": "abbreviation",
    "area": "image-map hyperlink",
    "article": "independent article",
    "aside": "tangential content",
    "audio": "embedded audio stream",
    "b": "bold",
    "base": "base URL",
    "bdi": "bi-directional text formatting",
    "bdo": "bi-directional override",
    "bgsound": "background sound",
    "blockquote": "block quotation",
    "body": "document body",
    "br": "line break",
    "button": "interactive button",
    "canvas": "dynamic graphics drawing area",
    "caption": "table caption",
    "cite": "work title",
    "code": "code fragment",
    "col": "table column",
    "colgroup": "table column group",
    "command": "user action control",
    "datalist": "list of predefined options",
    "dd": "definition description",
    "del": "deleted text",
    "details": "on-demand control",
    "dfn": "definition",
    "div": "document division",
    "dl": "definition list",
    "dt": "definition term",
    "em": "emphasis",
    "fieldset": "set of form controls",
    "figcaption": "figure caption",
    "form": "user-submittable form",
    "h1": "heading",
    "h2": "heading",
    "h3": "heading",
    "h4": "heading",
    "h5": "heading",
    "h6": "heading",
    "head": "document metadata container",
    "hgroup": "heading group",
    "hr": "horizontal rule",
    "html": "document root",
    "i": "italics",
    "iframe": "inline frame",
    "img": "image",
    "input": "input form control",
    "ins": "inserted text",
    "kbd": "keyboard input",
    "keygen": "key-pair generator",
    "label": "form control label",
    "legend": "field set legend",
    "li": "list item",
    "link": "metadata for inter-document relationships",
    "map": "image map",
    "mark": "marked text",
    "menu": "list of commands",
    "meta": "metadata",
    "meter": "scalar gauge",
    "nav": "navigation",
    "nobr": "no breaks",
    "noscript": "script fallback content",
    "object": "embedded object",
    "ol": "ordered list",
    "optgroup": "option grouping",
    "option": "option item",
    "output": "calculated result",
    "p": "paragraph",
    "param": "object parameter",
    "pre": "preformatted text",
    "progress": "progress indicator",
    "q": "quotation",
    "samp": "sample text",
    "script": "embedded script",
    "section": "document outline section",
    "select": "selection list",
    "small": "small text",
    "source": "embedded media source",
    "spacer": "layout space",
    "span": "text span",
    "strong": "strong emphasis",
    "style": "CSS style sheet",
    "sub": "subscript",
    "summary": "summary of details",
    "sup": "superscript",
    "table": "tabular data",
    "tbody": "table body",
    "td": "table data cell",
    "textarea": "multi-line text input",
    "tfoot": "table footer",
    "th": "table header cell",
    "thead": "table header",
    "time": "date or time",
    "title": "document title",
    "tr": "table row",
    "tt": "teletype text",
    "u": "underline",
    "ul": "unordered list",
    "var": "variable",
    "video": "embedded video stream",
    "wbr": "word break opportunity"
  },
  "css-property-docs": {
    "animation": "The <code>animation</code> <a title=\"CSS\" rel=\"internal\" href=\"https://developer.mozilla.org/en/CSS\">CSS</a> property is a shorthand property for <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/animation-name\">animation-name</a></code>\n, <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/animation-duration\">animation-duration</a></code>\n, <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/animation-timing-function\">animation-timing-function</a></code>\n, <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/animation-delay\">animation-delay</a></code>\n, <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/animation-iteration-count\">animation-iteration-count</a></code>\n and <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/animation-direction\">animation-direction</a></code>\n.",
    "animation-delay": "The <code>animation-delay</code> <a title=\"CSS\" rel=\"internal\" href=\"https://developer.mozilla.org/en/CSS\">CSS</a> property specifies when the animation should start. This lets the animation sequence begin some time after it's applied to an element.",
    "animation-direction": "The <code>animation-direction</code> CSS property indicates whether the animation should play in reverse on alternate cycles.",
    "animation-duration": "The <code>animation-duration</code> CSS property specifies the length of time that an animation should take to complete one cycle.",
    "animation-iteration-count": "The <code>animation-iteration-count</code> <a title=\"CSS\" rel=\"internal\" href=\"https://developer.mozilla.org/en/CSS\">CSS</a> property defines the number of times an animation cycle should be played before stopping.",
    "animation-name": "The <code>animation-name</code> <a title=\"CSS\" rel=\"internal\" href=\"https://developer.mozilla.org/en/CSS\">CSS</a> property specifies a list of animations that should be applied to the selected element. Each name indicates a <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/@keyframes\">@keyframes</a></code>\n at-rule that defines the property values for the animation sequence.",
    "animation-play-state": "The <code>animation-play-state</code> <a title=\"CSS\" rel=\"internal\" href=\"https://developer.mozilla.org/en/CSS\">CSS</a> property determines whether an animation is running or paused. You can query this property's value to determine whether or not the animation is currently running; in addition, you can set its value to pause and resume playback of an animation.",
    "animation-timing-function": "The <code>animation-timing-function</code> <a title=\"CSS\" rel=\"internal\" href=\"https://developer.mozilla.org/en/CSS\">CSS</a> property specifies how a CSS animation should progress over the duration of each cycle. The possible values are one or several <span class=\"lang lang-en\"><code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/timing-function\">&lt;timing-function&gt;</a></code>\n </span>.",
    "azimuth": "In combination with<code> elevation</code>, <code>azimuth</code> enables different audio sources to be positioned spatially for aural presentation. This is important in that it provides a natural way to tell several voices apart, as each can be positioned to originate at a different location on the sound stage. Stereo output produce a lateral sound stage, while binaural headphones and multi-speaker setups allow for a fully three-dimensional stage.",
    "backface-visibility": "The <code>backface-visibility</code> <a title=\"CSS\" rel=\"internal\" href=\"https://developer.mozilla.org/en/CSS\">CSS</a> property determines whether or not the back face of the element is visible when facing the user. The back face of an element always is a transparent background, letting, when visible, a mirror image of the front face be displayed.",
    "background": "The<code> background </code>CSS property is a shorthand for setting the individual background values in a single place in the style sheet.<code> background </code>can be used to set the values for one or more of: <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/background-color\">background-color</a></code>\n, <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/background-image\">background-image</a></code>\n, <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/background-position\">background-position</a></code>\n, <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/background-repeat\">background-repeat</a></code>\n, <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/background-size\">background-size</a></code>\n, and <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/background-attachment\">background-attachment</a></code>\n.",
    "background-attachment": "If a <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/background-image\">background-image</a></code>\n is specified, the <code>background-attachment</code> <a title=\"CSS\" rel=\"internal\" href=\"https://developer.mozilla.org/en/CSS\">CSS</a> property determines whether that image's position is fixed within the viewport, or scrolls along with its containing block.",
    "background-clip": "The<code> background-clip </code>CSS property specifies whether an element's background, either the color or image, extends underneath its border.",
    "background-color": "The <code>background-color</code> <a title=\"CSS\" rel=\"internal\" href=\"https://developer.mozilla.org/en/CSS\">CSS</a> property sets the background color of an element, either through a color value or the keyword <code>transparent</code>.",
    "background-image": "The<code> background-image </code>CSS property sets the background images for an element. The images are drawn on successive stacking context layers, with the first specified being drawn as if it is the closest to the user. The <a title=\"border\" rel=\"internal\" href=\"https://developer.mozilla.org/cn/CSS/border\">borders</a> of the element are then drawn on top of them, and the <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/background-color\">background-color</a></code>\n is drawn beneath them.",
    "background-origin": "The<code> background-origin </code>CSS property determines the background positioning area, that is the position of the origin of an image specified using the <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/background-image\">background-image</a></code>\n CSS property.",
    "background-position": "The<code> background-position </code>CSS property sets the initial position, relative to the background position layer defined by <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/background-origin\">background-origin</a></code>\n for each defined background image.",
    "background-repeat": "The <code>background-repeat</code> <a title=\"CSS\" rel=\"internal\" href=\"https://developer.mozilla.org/en/CSS\">CSS</a> property defines how background images are repeated. A background image can be repeated along the horizontal axis, the vertical axis, both, or not repeated at all. When the repetition of the image tiles doesn't let them exactly cover the background, the way adjustments are done can be controlled by the author: by default, the last image is clipped, but the different tiles can instead be re-sized, or space can be inserted between the tiles.",
    "background-size": "The<code> background-size </code>CSS property specifies the size of the background images.",
    "bleed": "This property specifies the extent of the page bleed area outside the page box. This property only has effect if crop marks are enabled.",
    "border": "The <code>border</code> <a title=\"CSS\" rel=\"internal\" href=\"https://developer.mozilla.org/en/CSS\">CSS</a> property is a shorthand property for setting the individual border property values in a single place in the style sheet. <code>border</code> can be used to set the values for one or more of: <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/border-width\">border-width</a></code>\n, <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/border-style\">border-style</a></code>\n, <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/border-color\">border-color</a></code>\n.",
    "border-bottom": "The <code>border-bottom</code> <a title=\"CSS\" rel=\"internal\" href=\"https://developer.mozilla.org/en/CSS\">CSS</a> property is a shorthand that sets the values of <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/border-bottom-color\">border-bottom-color</a></code>\n, <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/border-bottom-style\">border-bottom-style</a></code>\n, and <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/border-bottom-width\">border-bottom-width</a></code>\n. These properties describe the bottom border of elements.",
    "border-bottom-color": "The<code> border-bottom-color </code>CSS property sets the color of the bottom border of an element. Note that in many cases the shorthand CSS properties&nbsp; <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/border-color\">border-color</a></code>\n or <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/border-bottom\">border-bottom</a></code>\n are more convenient and preferable.",
    "border-bottom-left-radius": "The <code>border-bottom-left-radius</code> CSS property sets the rounding of the bottom-left corner of the element. The rounding can be a circle or an ellipse, or if one of the value is <code>0</code> no rounding is done and the corner is square.",
    "border-bottom-right-radius": "The <code>border-bottom-right-radius</code> CSS property sets the rounding of the bottom-right corner of the element. The rounding can be a circle or an ellipse, or if one of the value is <code>0</code> no rounding is done and the corner is square.",
    "border-bottom-style": "The <code>border-bottom-style</code> <a title=\"CSS\" rel=\"internal\" href=\"https://developer.mozilla.org/en/CSS\">CSS</a> property sets the line style of the bottom border of a box.",
    "border-bottom-width": "The <code>border-bottom-width</code> <a title=\"CSS\" rel=\"internal\" href=\"https://developer.mozilla.org/en/CSS\">CSS</a> property sets the width of the bottom border of a box.",
    "border-collapse": "The<code> border-collapse </code>CSS property selects a table's border model. This has a big influence on the look and style of the table cells.",
    "border-color": "The<code> border-color </code>CSS property is a shorthand for setting the color of the four sides of an element's border: <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/border-top-color\">border-top-color</a></code>\n, <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/border-right-color\">border-right-color</a></code>\n, <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/border-bottom-color\">border-bottom-color</a></code>\n, <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/border-left-color\">border-left-color</a></code>\n",
    "border-image": "The<code> border-image </code>CSS property allows drawing an image on the borders of elements. This makes drawing complex looking widgets much simpler than it has been and removes the need for nine boxes in some cases.",
    "border-image-outset": "The <code>border-image-outset </code>property describes, by which amount <dfn id=\"border-image-area\">border image area</dfn> extends beyond the border box.",
    "border-image-repeat": "The <code>border-image-repeat</code> CSS property defines how the middle part of a border image is handled to match the size of the border. It has a one-value syntax which describes the behavior for all sides, and a two-value syntax that sets a different value for the horizontal and vertical behavior.",
    "border-image-source": "The <code>border-image-source</code> CSS property defines the <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/image\">&lt;image&gt;</a></code>\n to use instead of the style of the border. If this property is set to <code>none</code>, the style defined by <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/border-style\">border-style</a></code>\n is used instead.",
    "border-image-width": "The <code>border-image-width</code> CSS property defines the offset to use for dividing the border image in nine parts, the top-left corner, central top edge, top-right-corner, central right edge, bottom-right corner, central bottom edge, bottom-left corner, and central right edge. They represent inward distance from the top, right, bottom and right edges.",
    "border-left": "The <code>border-left</code> <a title=\"CSS\" rel=\"internal\" href=\"https://developer.mozilla.org/en/CSS\">CSS</a> property is a shorthand that sets the values of <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/border-left-color\">border-left-color</a></code>\n, <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/border-left-style\">border-left-style</a></code>\n, and <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/border-left-width\">border-left-width</a></code>\n. These properties describe the left border of elements.",
    "border-left-color": "The<code> border-left-color </code>CSS property sets the color of the bottom border of an element. Note that in many cases the shorthand CSS properties&nbsp; <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/border-color\">border-color</a></code>\n or <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/border-left\">border-left</a></code>\n are more convenient and preferable.",
    "border-left-style": "The <code>border-left-style</code> <a title=\"CSS\" rel=\"internal\" href=\"https://developer.mozilla.org/en/CSS\">CSS</a> property sets the line style of the left border of a box.",
    "border-left-width": "The <code>border-left-width</code> <a title=\"CSS\" rel=\"internal\" href=\"https://developer.mozilla.org/en/CSS\">CSS</a> property sets the width of the left border of a box.",
    "border-radius": "The <code>border-radius</code> CSS property allows Web authors to define how rounded border corners are. The curve of each corner is defined using one or two radii, defining its shape: circle or ellipse.",
    "border-right": "The <code>border-right</code> <a title=\"CSS\" rel=\"internal\" href=\"https://developer.mozilla.org/en/CSS\">CSS</a> property is a shorthand that sets the values of <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/border-right-color\">border-right-color</a></code>\n, <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/border-right-style\">border-right-style</a></code>\n, and <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/border-right-width\">border-right-width</a></code>\n. These properties describe the right border of elements.",
    "border-right-color": "The<code> border-right-color </code>CSS property sets the color of the bottom border of an element. Note that in many cases the shorthand CSS properties&nbsp; <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/border-color\">border-color</a></code>\n or <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/border-right\">border-right</a></code>\n are more convenient and preferable.",
    "border-right-style": "The <code>border-right-style</code> <a title=\"CSS\" rel=\"internal\" href=\"https://developer.mozilla.org/en/CSS\">CSS</a> property sets the line style of the right border of a box.",
    "border-right-width": "The <code>border-right-width</code> <a title=\"CSS\" rel=\"internal\" href=\"https://developer.mozilla.org/en/CSS\">CSS</a> property sets the width of the right border of a box.",
    "border-spacing": "The <code>border-spacing</code> CSS property specifies the distance between the borders of adjacent cells (only for the <a title=\"en/CSS/border-collapse\" rel=\"internal\" href=\"https://developer.mozilla.org/en/CSS/border-collapse\">separated borders model</a>). This is equivalent to the <code>cellspacing</code> attribute in presentational HTML, but an optional second value can be used to set different horizontal and vertical spacing.",
    "border-style": "The <code>border-style</code> <a title=\"CSS\" rel=\"internal\" href=\"https://developer.mozilla.org/en/CSS\">CSS</a> property is a shorthand property for setting the line style for all four sides of the elements border.",
    "border-top": "The <code>border-top</code> <a title=\"CSS\" rel=\"internal\" href=\"https://developer.mozilla.org/en/CSS\">CSS</a> property is a shorthand that sets the values of <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/border-top-color\">border-top-color</a></code>\n, <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/border-top-style\">border-top-style</a></code>\n, and <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/border-top-width\">border-top-width</a></code>\n. These properties describe the top border of elements.",
    "border-top-color": "The<code> border-top-color </code>CSS property sets the color of the top border of an element. Note that in many cases the shorthand CSS properties&nbsp; <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/border-color\">border-color</a></code>\n or <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/border-top\">border-top</a></code>\n are more convenient and preferable.",
    "border-top-left-radius": "The <code>border-top-left-radius</code> CSS property sets the rounding of the top-left corner of the element. The rounding can be a circle or an ellipse, or if one of the value is <code>0</code> no rounding is done and the corner is square.",
    "border-top-right-radius": "The <code>border-top-right-radius</code> CSS property sets the rounding of the top-right corner of the element. The rounding can be a circle or an ellipse, or if one of the value is <code>0</code> no rounding is done and the corner is square.",
    "border-top-style": "The <code>border-top-style</code> <a title=\"CSS\" rel=\"internal\" href=\"https://developer.mozilla.org/en/CSS\">CSS</a> property sets the line style of the top border of a box.",
    "border-top-width": "The <code>border-top-width</code> <a title=\"CSS\" rel=\"internal\" href=\"https://developer.mozilla.org/en/CSS\">CSS</a> property sets the width of the top border of a box.",
    "border-width": "The<code> border-width </code>CSS property sets the width of the border of a box. Using the shorthand property <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/border\">border</a></code>\n is often more convenient.",
    "bottom": "The <code>bottom</code> <a title=\"CSS\" rel=\"internal\" href=\"https://developer.mozilla.org/en/CSS\">CSS</a> property participates in specifying the position of <em>positioned elements</em>.",
    "box-shadow": "The <code>box-shadow</code> CSS property accepts one or more shadow effects as a comma-separated list. It allows casting a drop shadow from the frame of almost any element. If a <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/border-radius\">border-radius</a></code>\n is specified on the element with a box shadow, the box shadow takes on the same rounded corners. The z-ordering of multiple box shadows is the same as multiple <a title=\"text-shadow\" rel=\"internal\" href=\"https://developer.mozilla.org/en/CSS/text-shadow\">text shadows</a> (the first specified shadow is on top).",
    "box-sizing": "The<code> box-sizing </code>CSS property is used to alter the default CSS box model used to calculate widths and heights of elements. It is possible to use this property to emulate the behavior of browsers that do not correctly support the CSS box model specification.",
    "caption-side": "The <code>caption-side</code> <a title=\"CSS\" rel=\"internal\" href=\"https://developer.mozilla.org/en/CSS\">CSS</a> property positions the content of a table's <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/HTML/Element/caption\">&lt;caption&gt;</a></code>\n on the specified side.",
    "clear": "The <code>clear</code> <a title=\"CSS\" rel=\"internal\" href=\"https://developer.mozilla.org/en/CSS\">CSS</a> property specifies whether an element can be next to <a title=\"en/CSS/float\" rel=\"internal\" href=\"https://developer.mozilla.org/en/CSS/float\">floating</a> elements that precede it or must be moved down (cleared) below them.",
    "clip": "The <code>clip</code> CSS property defines what portion of an element is visible. The <code>clip</code> property applies only to elements with <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/position\">position:absolute</a></code>\n.",
    "color": "The <code>color</code> CSS property sets the foreground color of an element's text content",
    "column-count": "The <code>column-count </code>CSS property describes the number of columns of the element.",
    "column-fill": "The <code>column-fill</code> CSS property controls how contents are partitioned into columns. Contents are either balanced, which means that contents in all columns will have the same height or, when using <code>auto</code>, just take up the room the content needs.",
    "column-gap": "The <code>column-gap</code> CSS property sets the size of the gap between columns for elements which are specified to display as a multi-column element.",
    "column-rule": "In multi-column layouts, the <code>column-rule</code> CSS property specifies a straight line, or \"rule\", to be drawn between each column. It is a convenient shorthand to avoid setting each of the individual <code>column-rule-*</code> properties separately : <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/column-rule-width\">column-rule-width</a></code>\n, <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/column-rule-style\">column-rule-style</a></code>\n and <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/column-rule-color\">column-rule-color</a></code>\n.",
    "column-rule-color": "The<code> column-rule-color </code>CSS property lets you set the color of the rule drawn between columns in multi-column layouts.",
    "column-rule-style": "The<code> column-rule-style </code>CSS property lets you set the style of the rule drawn between columns in multi-column layouts.",
    "column-rule-width": "The<code> column-rule-width </code>CSS property lets you set the width of the rule drawn between columns in multi-column layouts.",
    "column-span": "The <code>column-span</code> CSS property makes it possible for an element to span across all columns when its value is set to <code>all</code>. An element that spans more than one column is called a <strong>spanning element</strong>.",
    "column-width": "The <code>column-width</code> CSS property suggests an optimal column width. This is not a absolute value but a mere hint. Browser will adjust the width of the column around that suggested value, allowing to achieve scalable designs that fit different screen size. Especially in presence of the <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/column-count\">column-count</a></code>\n CSS property which has precedence, to set an exact column width, all length values must be specified. In horizontal text these are <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/width\">width</a></code>\n, <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/column-width\">column-width</a></code>\n, <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/column-gap\">column-gap</a></code>\n, and <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/column-rule-width\">column-rule-width</a></code>\n.",
    "columns": "The <code>columns</code> <a title=\"CSS\" rel=\"internal\" href=\"https://developer.mozilla.org/en/CSS\">CSS</a> property is a shorthand property allowing to set both the <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/column-width\">column-width</a></code>\n and the <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/column-count\">column-count</a></code>\n properties at the same time.",
    "content": "The<code> content </code>CSS property is used with the <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/%3Abefore\">:before</a></code>\n and <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/%3Aafter\">:after</a></code>\n pseudo-elements to generate content in an element.",
    "counter-increment": "The <code>counter-increment</code> <a title=\"CSS\" rel=\"internal\" href=\"https://developer.mozilla.org/en/CSS\">CSS</a> property is used to increase the value of <a title=\"en/CSS_Counters\" rel=\"internal\" href=\"https://developer.mozilla.org/en/CSS_Counters\">CSS Counters</a> by a given value. The counter's value can be reset using the <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/counter-reset\">counter-reset</a></code>\n CSS property.",
    "counter-reset": "The <code>counter-reset</code> <a title=\"CSS\" rel=\"internal\" href=\"https://developer.mozilla.org/en/CSS\">CSS</a> property is used to reset <a title=\"en/CSS_Counters\" rel=\"internal\" href=\"https://developer.mozilla.org/en/CSS_Counters\">CSS Counters</a> to a given value.",
    "cursor": "The<code> cursor </code>CSS property specifies the mouse cursor displayed when the mouse pointer is over an element.",
    "direction": "The <code>direction</code> CSS property should be set to match the direction of the text: <code>rtl</code> for Hebrew or Arabic text and <code>ltr</code> for other scripts. This should normally be done as part of the document (e.g., using the <code>dir</code> attribute in HTML) rather than through direct use of CSS.",
    "display": "The <code>display</code> CSS property specifies the type of rendering box used for an element. In HTML, default <code>display</code> property values are taken from behaviors described in the HTML specifications or from the browser/user default stylesheet. The default value in XML is <code>inline</code>.",
    "empty-cells": "The <code>empty-cells </code>CSS property specifies how user agent should render borders and backgrounds around cells that have no visible content.",
    "float": "The <code>float</code> CSS property specifies that an element should be taken from the normal flow and placed along the left or right side of its container, where text and inline elements will wrap around it.",
    "font": "The <code>font</code> CSS property is either a shorthand property for setting <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/font-style\">font-style</a></code>\n, <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/font-variant\">font-variant</a></code>\n, <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/font-weight\">font-weight</a></code>\n, <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/font-size\">font-size</a></code>\n, <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/line-height\">line-height</a></code>\n and <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/font-family\">font-family</a></code>\n, or a way to set the element's font to a system font, using specific keywords.",
    "font-family": "The<code> font-family </code>CSS property allows for a prioritized list of font family names and/or generic family names to be specified for the selected element. Unlike most other CSS properties, values are separated by a comma to indicate that they are alternatives. The browser will select the first font on the list that is installed on the computer, or that can be downloaded using the information provided by a <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/@font-face\">@font-face</a></code>\n at-rule.",
    "font-size": "The <code>font-size</code> <a title=\"CSS\" rel=\"internal\" href=\"https://developer.mozilla.org/en/CSS\">CSS</a> property specifies the size of the font. The font size may, in turn, change the size of other items, since it is used to compute the value of <code>em</code> and <code>ex</code> length units.",
    "font-size-adjust": "The<code> font-size-adjust </code>CSS property specifies that font size should be chosen based on the height of lowercase letters rather than the height of capital letters.",
    "font-stretch": "The<code> font-stretch </code>CSS property selects a normal, condensed, or extended face from a font family.",
    "font-style": "The<code> font-style </code>CSS property allows<code> italic </code>or<code> oblique </code>faces to be selected within a <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/font-family\">font-family</a></code>\n.<br> ",
    "font-variant": "The<code> font-variant </code>CSS property selects a<code> normal</code>, or<code> small-caps </code>face from a font family. Setting<code> font-variant </code>is also possible by using the <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/font\">font</a></code>\n shorthand.",
    "font-weight": "The <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/font-weight\">font-weight</a></code>\n <a title=\"CSS\" rel=\"internal\" href=\"https://developer.mozilla.org/en/CSS\">CSS</a> property specifies the weight or boldness of the font. However, some fonts are not available in all weights; some are available only on <code>normal</code> and <code>bold</code>.",
    "height": "The<code> height </code>CSS property specifies the height of the content area of an element. The <a title=\"en/CSS/Box_model#content\" rel=\"internal\" href=\"https://developer.mozilla.org/en/CSS/box_model#content\">content area</a> is <em>inside</em> the padding, border, and margin of the element.",
    "hyphens": "The <code>hyphens</code> <a title=\"CSS\" rel=\"internal\" href=\"https://developer.mozilla.org/en/CSS\">CSS</a> property tells the browser how to go about splitting words to improve the layout of text when line-wrapping.",
    "image-rendering": "The <code>image-rendering</code> <a title=\"CSS\" rel=\"internal\" href=\"https://developer.mozilla.org/en/CSS\">CSS</a> property provides a hint to the user agent about how to handle its image rendering.<br> <code>image-rendering </code>applies to scaled images (and other elements, see below). For example, if the natural size of the image is<em> 100×100px </em>but the page author specifies the dimensions to <code>200×200px</code> (or<code>50×50px</code>), then the image will be upscaled (or downscaled) to the new dimensions using the specified algorithm. Scaling may also apply due to user interaction (zooming).",
    "left": "The <code>left</code> CSS property specifies part of the position of positioned elements.",
    "letter-spacing": "The<code> letter-spacing </code>CSS property specifies spacing behavior between text characters.",
    "line-height": "On inline elements, the<code> line-height </code>CSS property specifies the height that is used in the calculation of the line box height.<br>\nOn block level elements,<code> line-height </code>specifies the minimal height of line boxes within the element.",
    "list-style": "The<code> list-style </code>CSS property is a shorthand property for setting <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/list-style-type\">list-style-type</a></code>\n, <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/list-style-image\">list-style-image</a></code>\n and <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/list-style-position\">list-style-position</a></code>\n.",
    "list-style-image": "The<code> list-style-image </code>CSS property sets the image that will be used as the list item marker. It is often more convenient to use the shortcut <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/list-style\">list-style</a></code>\n.",
    "list-style-position": "The<code> list-style-position </code>CSS property specifies the position of the marker box in the principal block box. It is often more convenient to use the shortcut <span class=\"lang lang-en\"><code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/list-style\">list-style</a></code>\n</span>.",
    "list-style-type": "The<code> list-style-type </code>CSS property specifies appearance of a list item element. As it is the only one who defaults to <code>display:list-item</code>, this is usually a <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/HTML/Element/li\">&lt;li&gt;</a></code>\n element, but can be any element with this <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/display\">display</a></code>\n value.",
    "margin": "The<code> margin </code>CSS property sets the margin for all four sides. It is a shorthand to avoid setting each side separately with the other margin properties:<br>\n<code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/margin-top\">margin-top</a></code>\n, <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/margin-right\">margin-right</a></code>\n, <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/margin-bottom\">margin-bottom</a></code>\n and <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/margin-left\">margin-left</a></code>\n.<br>\nNegative value are also allowed.",
    "margin-bottom": "The <code>margin-bottom</code> <a title=\"CSS\" rel=\"internal\" href=\"https://developer.mozilla.org/en/CSS\">CSS</a> property of an element sets the margin space required on the bottom of an element. A negative value is also allowed.",
    "margin-left": "The <code>margin-left</code> <a title=\"CSS\" rel=\"internal\" href=\"https://developer.mozilla.org/en/CSS\">CSS</a> property of an element sets the margin space required on the left side of an element. A negative value is also allowed.",
    "margin-right": "The <code>margin-right</code> <a title=\"CSS\" rel=\"internal\" href=\"https://developer.mozilla.org/en/CSS\">CSS</a> property of an element sets the margin space required on the right side of an element. A negative value is also allowed.",
    "margin-top": "The<code> margin-top </code>CSS property of an element sets the margin space required on the top of an element. A negative value is also allowed.",
    "marker-offset": "&nbsp;",
    "marks": "The <code>marks</code> <a title=\"CSS\" rel=\"internal\" href=\"https://developer.mozilla.org/en/CSS\">CSS</a> property adds crop and/or cross marks to the presentation of the document. <em>Crop marks</em> indicate where the page should be cut. <em>Cross marks</em> are used to align sheets.",
    "max-height": "The<code> max-height </code>CSS property is used to set the maximum height of a given element. It prevents the used value of the <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/height\">height</a></code>\n property from becoming larger than the value specified for<code> max-height</code>.",
    "max-width": "The<code> max-width </code>CSS property is used to set the maximum width of a given element. It prevents the used value of the <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/width\">width</a></code>\n property from becoming larger than the value specified for<code> max-width</code>.",
    "min-height": "The<code> min-height </code>CSS property is used to set the minimum height of a given element. It prevents the used value of the <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/height\">height</a></code>\n property from becoming smaller than the value specified for<code> min-height</code>.",
    "min-width": "The<code> min-width </code>CSS property is used to set the minimum width of a given element. It prevents the used value of the <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/width\">width</a></code>\n property from becoming smaller than the value specified for<code> min-width</code>.",
    "opacity": "The <code>opacity</code> CSS property specifies the transparency of an element, that is, the degree to which the background behind the element is overlaid.",
    "orphans": "The <code>orphans</code> <a title=\"CSS\" rel=\"internal\" href=\"https://developer.mozilla.org/en/CSS\">CSS</a> property refers to the <em>minimum</em> number of lines in a block container that must be left at the bottom of the page.&nbsp; This property is normally used to control how page breaks occur.",
    "outline": "The<code> outline </code>CSS property is a shorthand property for setting one or more of the individual outline properties <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/outline-style\">outline-style</a></code>\n, <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/outline-width\">outline-width</a></code>\n and <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/outline-color\">outline-color</a></code>\n in a single rule. In most cases the use of this shortcut is preferable and more convenient.",
    "outline-color": "The<code> outline-color </code>CSS property sets the color of the outline of an element. An outline is a line that is drawn around elements, outside the border edge, to make the element stand out.",
    "outline-offset": "The<code> outline-offset </code>CSS property is used to set space between an <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/outline\">outline</a></code>\n and the edge or border of an element. An outline is a line that is drawn around elements, outside the border edge.",
    "outline-style": "The<code> outline-style </code>CSS property is used to set the style of the outline of an element. An outline is a line that is drawn around elements, outside the border edge, to make the element stand out.",
    "outline-width": "The<code> outline-width </code>CSS property is used to set the width of the outline of an element. An outline is a line that is drawn around elements, outside the border edge, to make the element stand out:",
    "overflow": "The<code> overflow </code>CSS property specifies whether to clip content, render scroll bars or display overflow content of a block-level element.",
    "overflow-x": "The <code>overflow-x </code><a title=\"CSS\" rel=\"internal\" href=\"https://developer.mozilla.org/en/CSS\">CSS</a> property specifies whether to clip content, render a scroll bar or display overflow content of a block-level element, when it overflows at the left and right edges.",
    "padding": "The<code> padding </code>CSS property sets the required padding space on all sides of an element. The <a title=\"http://developer.mozilla.org/en/CSS/Box_model#padding\" rel=\"internal\" href=\"https://developer.mozilla.org/en/CSS/Box_model#padding\">padding area</a> is the space between the content of the element and its border. Negative values are not allowed.",
    "padding-bottom": "The <code>padding-bottom</code> <a title=\"CSS\" rel=\"internal\" href=\"https://developer.mozilla.org/en/CSS\">CSS</a> property of an element sets the padding space required on the bottom of an element. The <a title=\"http://developer.mozilla.org/en/CSS/Box_model#padding\" rel=\"internal\" href=\"https://developer.mozilla.org/en/CSS/box_model#padding\">padding area</a> is the space between the content of the element and it's border. A negative value is not allowed.",
    "padding-left": "The <code>padding-left</code> <a title=\"CSS\" rel=\"internal\" href=\"https://developer.mozilla.org/en/CSS\">CSS</a> property of an element sets the padding space required on the left side of an element. The <a title=\"http://developer.mozilla.org/en/CSS/Box_model#padding\" rel=\"internal\" href=\"https://developer.mozilla.org/en/CSS/box_model#padding\">padding area</a> is the space between the content of the element and it's border. A negative value is not allowed.",
    "padding-right": "The <code>padding-right</code> <a title=\"CSS\" rel=\"internal\" href=\"https://developer.mozilla.org/en/CSS\">CSS</a> property of an element sets the padding space required on the right side of an element. The <a title=\"http://developer.mozilla.org/en/CSS/Box_model#padding\" rel=\"internal\" href=\"https://developer.mozilla.org/en/CSS/box_model#padding\">padding area</a> is the space between the content of the element and its border. Negative values are not allowed.",
    "padding-top": "The <code>padding-top</code> <a title=\"CSS\" rel=\"internal\" href=\"https://developer.mozilla.org/en/CSS\">CSS</a> property of an element sets the padding space required on the top of an element. The <a title=\"http://developer.mozilla.org/en/CSS/Box_model#padding\" rel=\"internal\" href=\"https://developer.mozilla.org/en/CSS/box_model#padding\">padding area</a> is the space between the content of the element and it's border. A negative values is not allowed.",
    "page-break-after": "The <code>page-break-after</code> CSS property adjusts page breaks <em>after</em> the current element.",
    "page-break-before": "The <code>page-break-before</code> CSS property adjusts page breaks <em>before</em> the current element.",
    "page-break-inside": "The <code>page-break-inside</code> CSS property adjusts page breaks <em>inside</em> the current element.",
    "perspective": "The <code>perspective</code> <a title=\"CSS\" rel=\"internal\" href=\"https://developer.mozilla.org/en/CSS\">CSS</a> property determines the distance between the z=0 plane and the user in order to give to the 3D-positioned element some perspective. Each 3D element that is placed between the z=0 and the user is enlarged, each 3D-element with z&lt;0 is shrinked. How much deformation is defined by the value of this property.",
    "perspective-origin": "The <code>perspective-origin</code> <a title=\"CSS\" rel=\"internal\" href=\"https://developer.mozilla.org/en/CSS\">CSS</a> property determines the position the viewer is looking at. It is used as the <em>vanishing point</em> by the <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/perspective\">perspective</a></code>\n property.",
    "position": "The<code> position </code>CSS property chooses alternative rules for positioning elements, designed to be useful for scripted animation effects.",
    "quotes": "The <code>quotes</code> <a title=\"CSS\" rel=\"internal\" href=\"https://developer.mozilla.org/en/CSS\">CSS</a> property indicates how user agents should render quotation marks.",
    "resize": "The <code>resize</code> CSS property lets you control the resizability of an element.",
    "right": "The <code>right</code> <a title=\"CSS\" rel=\"internal\" href=\"https://developer.mozilla.org/en/CSS\">CSS</a> property specifies part of the position of positioned elements.",
    "tab-size": "The <code>tab-size</code> CSS property is used to customize the width of a tab (<code>U+0009</code>) character.",
    "table-layout": "The <code>table-layout</code> CSS property defines the algorithm to be used to layout the table cells, rows, and columns.",
    "text-align": "The<code> text-align </code>CSS property describes how inline content like text is aligned in its parent block element.<code> text-align </code>does not control the alignment of block elements itself, only their inline content.",
    "text-align-last": "The <code>text-align-last</code> CSS property describes how the last line of a block or a line right before a forced line break is aligned.",
    "text-decoration": "The<code> text-decoration </code>CSS property is used to set the text formattings <code>underline, overline, line-through</code> and <code>blink</code>.",
    "text-decoration-color": "The <code>text-decoration-color</code> CSS property sets the color used when drawing underlines, overlines, or strike-throughs specified by <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/text-decoration-line\">text-decoration-line</a></code>\n. This is the preferred way to color these text decorations, rather than using combinations of other HTML&nbsp;elements.",
    "text-decoration-line": "The <code>text-decoration-line</code> CSS property sets what kind of line decorations are added to an element.",
    "text-decoration-style": "The <code>text-decoration-style</code> CSS property defines the style of the lines specified by <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/text-decoration-line\">text-decoration-line</a></code>\n. The style applies to all lines, there is no way to define different style for each of the line defined by <code>text-decoration-line</code>.",
    "text-indent": "The<code> text-indent </code>CSS property specifies how much horizontal space should be left before beginning of the first line of the text content of an element. Horizontal spacing is with respect to the left (or right, for right-to-left layout) edge of the containing block element's box.",
    "text-shadow": "The<code> text-shadow </code>CSS property adds shadows to text. It accepts a comma-separated list of shadows to be applied to the text and <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/text-decoration\">text-decorations</a></code>\n of the element.",
    "text-transform": "The <code>text-transform</code> CSS property specifies how to capitalize an element's text. It can be used to make text appear in all-uppercase or all-lowercase, or with each word capitalized.",
    "top": "The <code>top</code> CSS property specifies part of the position of positioned elements. It has no effect on non-positioned elements.",
    "transform": "The <code>transform</code> CSS property lets you modify the coordinate space of the CSS visual formatting model. Using it, elements can be translated, rotated, scaled, and skewed according to the values set.",
    "transform-origin": "The <code>transform-origin</code> CSS property lets you modify the origin for transformations of an element. For example, the transform-origin of the <code>rotate()</code> function is the centre of rotation. (This property is applied by first translating the element by the negated value of the property, then applying the element's transform, then translating by the property value.)",
    "transform-style": "The <code>transform-style</code> <a title=\"CSS\" rel=\"internal\" href=\"https://developer.mozilla.org/en/CSS\">CSS</a> property determines if the children of the element are positioned in the 3D-space or are flattened in the plane of the element.",
    "transition": "The<code> transition </code><a title=\"CSS\" rel=\"internal\" href=\"https://developer.mozilla.org/en/CSS\">CSS</a> property is a shorthand property for <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/transition-property\">transition-property</a></code>\n, <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/transition-duration\">transition-duration</a></code>\n, <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/transition-timing-function\">transition-timing-function</a></code>\n, and <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/transition-delay\">transition-delay</a></code>\n.",
    "transition-delay": "The<code> transition-delay </code><a title=\"CSS\" rel=\"internal\" href=\"https://developer.mozilla.org/en/CSS\">CSS</a> property specifies the amount of time to wait between a change being requested to a property that is to be transitioned and the start of the <a title=\"en/CSS/CSS transitions\" rel=\"internal\" href=\"https://developer.mozilla.org/en/CSS/CSS_transitions\">transition effect</a>.",
    "transition-duration": "The<code> transition-duration </code><a title=\"CSS\" rel=\"internal\" href=\"https://developer.mozilla.org/en/CSS\">CSS</a> property specifies the number of seconds or milliseconds a transition animation should take to complete. By default, the value is 0s, meaning that no animation will occur.",
    "transition-property": "The <code>transition-property</code> CSS property is used to specify the names of CSS properties to which a <a title=\"en/CSS/CSS transitions\" rel=\"internal\" href=\"https://developer.mozilla.org/en/CSS/CSS_transitions\">transition effect</a> should be applied.",
    "transition-timing-function": "The<code> transition-timing-function </code>CSS property is used to describe how the intermediate values of the CSS&nbsp;properties being affected by a <a title=\"en/CSS/CSS transitions\" rel=\"internal\" href=\"https://developer.mozilla.org/en/CSS/CSS_transitions\">transition effect</a> are calculated. This in essence lets you establish an acceleration curve, so that the speed of the transition can vary over its duration.",
    "vertical-align": "The <code>vertical-align</code> <a title=\"CSS\" rel=\"internal\" href=\"https://developer.mozilla.org/en/CSS\">CSS</a> property specifies the vertical alignment of an inline or table-cell element.",
    "visibility": "The<code> visibility </code>CSS property is used for two things:",
    "white-space": "The<code> white-space </code>CSS property is used to to describe how whitespace inside the element is handled.",
    "widows": "where:",
    "width": "The<code> width </code>CSS property specifies the width of the content area of an element. The <a title=\"en/CSS/box_model#content\" rel=\"internal\" href=\"https://developer.mozilla.org/en/CSS/box_model#content\">content area</a> is <em>inside</em> the padding, border, and margin of the element.",
    "word-spacing": "The<code> word-spacing </code>CSS property specifies spacing behavior between tags and words.",
    "word-wrap": "The <code>word-wrap</code> <a title=\"CSS\" rel=\"internal\" href=\"https://developer.mozilla.org/en/CSS\">CSS</a> property is used to to specify whether or not the browser is allowed to break lines within words in order to prevent overflow when an otherwise unbreakable string is too long to fit.",
    "z-index": "The<code> z-index </code>CSS property specifies the z-order of an element and its descendants. When elements overlap, z-order determines which one covers the other. An element with a larger z-index generally covers an element with a lower one."
  },
  "html-element-docs": {
    "a": "The HTML Anchor Element (<code>&lt;a&gt;</code>) defines a hyperlink, the named target destination for a hyperlink, or both.",
    "abbr": "The HTML&nbsp;Abbreviation Element (<code>&lt;abbr&gt;</code>) represents an abbreviation and optionally provides a full description for it. If present, the <strong>title</strong> attribute must contain this full description and nothing else.",
    "address": "The HTML Address&nbsp;Element (<code>&lt;address&gt;)</code> may be used by authors to supply contact information for its nearest <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/HTML/Element/article\">&lt;article&gt;</a></code>\n or <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/HTML/Element/body\">&lt;body&gt;</a></code>\n ancestor; in the later case, it applies to the whole document.",
    "area": "The HTML <em>Area</em> element (<code>&lt;area&gt;</code>) defines a hot-spot region on an image, and optionally associates it with a hypertext link. This element is used only within a <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/HTML/Element/map\">&lt;map&gt;</a></code>\n element.",
    "article": "The <em>HTML Article Element</em> (<span style=\"font-family: Courier New;\">&lt;article&gt;</span>) represents a self-contained composition in a document, page, application, or site, which is intended to be independently distributable or reusable, e.g., in syndication. This could be a forum post, a magazine or newspaper article, a blog entry, a user-submitted comment, an interactive widget or gadget, or any other independent item of content.",
    "aside": "The <em>HTML Aside Element</em> (<span style=\"font-family: Courier New;\">&lt;aside&gt;</span>) represents a section of a page that consists of content that is tangentially related to the content around it, which could be considered separate from that content. Such sections are often represented as sidebars or as inserts; they often contains side explanation like a glossary definition, more loosely related stuff like advertisements, the biography of the author, or in web-applications, profile information or related blog links.",
    "audio": "The <code>audio</code> element is used to embed sound content in an HTML&nbsp;or XHTML document.&nbsp; The <code>audio</code> element was added as part of HTML5.",
    "b": "The HTML B Element (<code>&lt;b&gt;</code>) represents a span of text stylistically different from normal text, without a conveying any special importance or relevance. It is typically used for keywords in a summary, product names in a review, or other spans of text whose typical presentation would be boldfaced. Another example of its use is to mark the lead sentence of each paragraph of an article.",
    "base": "The HTML&nbsp;<em>Base</em> element (<code>&lt;base&gt;</code>) specifies the base URL to use for all relative URLs contained within a document.&nbsp;",
    "bdi": "The <em>HTML Bi-directional Isolation Element</em> (<code>&lt;bdi&gt;</code>) isolates a span of text that might be formatted in a different direction from other text outside it.",
    "bdo": "The HTML Bidirectional Override Element (<span style=\"font-family: Courier New;\">&lt;bdo&gt;</span>) is used to override the current directionality of text. It causes the directionality of the characters to be ignored in favor of the specified directionality.",
    "blockquote": "The HTML <em>Block Quotation</em> (<code>&lt;blockquote&gt;</code>) element indicates that the enclosed text is an extended quotation. Usually, this is rendered visually by indentation (see <a title=\"en/HTML/Element/blockquote#Notes\" rel=\"internal\" href=\"https://developer.mozilla.org/en/HTML/Element/blockquote#Notes\">Notes</a> for how to change it). A URL for the source of the quotation may be given using the <strong>cite</strong> attribute, while a text representation of the source can be given using the <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/HTML/Element/cite\">&lt;cite&gt;</a></code>\n element.",
    "body": "The HTML&nbsp;Body (<code>&lt;body&gt;</code>) element represents the main content of an HTML&nbsp;document. There is only one <code>&lt;body&gt;</code> element in a document.",
    "br": "The HTML&nbsp;<em>Line Break</em> element (<code>&lt;br&gt;</code>) produces a line break in text (carriage-return). It is useful for writing a poem or an address, where the division of lines is significant.&nbsp;",
    "button": "The <em>button</em> (<span style=\"font-family: Courier New;\">&lt;button&gt;</span>)&nbsp;HTML element represents a clickable button.",
    "canvas": "The <em>Canvas</em> (<code>&lt;canvas&gt;</code>) HTML element can be used to draw graphics via scripting (usually <a title=\"en/JavaScript\" rel=\"internal\" href=\"https://developer.mozilla.org/en/JavaScript\">JavaScript</a>). For example, it can be used to draw graphs, make photo compositions or even perform animations.",
    "caption": "The <em>HTML Table Caption Element</em> (<span style=\"font-family: Courier New;\">&lt;caption&gt;</span>) represents the title of a table. Though it is always the first descendant of a <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/HTML/Element/table\">&lt;table&gt;</a></code>\n, its styling, using CSS, may place it elsewhere, relative to the table.",
    "cite": "The HTML&nbsp;Citation Element (<span style=\"font-family: Courier New;\">&lt;cite&gt;</span>) contains the title of a work, such as a book, song, movie, TV&nbsp;show, sculpture, etc.",
    "code": "The HTML Code Element (<span style=\"font-family: Courier New;\">&lt;code&gt;</span>) represents a fragment of computer code. By default, it is displayed in the browser's default monospace font.",
    "col": "The <em>HTML Table Column Element</em> (<code>&lt;col&gt;</code>) defines a column within a table and is used for defining common semantic on all common cells. It is generally found within a <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/HTML/Element/colgroup\">&lt;colgroup&gt;</a></code>\n element.",
    "colgroup": "The <em>HTML Table Column Group Element</em> (<span style=\"font-family: Courier New;\">&lt;colgroup&gt;</span>) defines a group of column within a table.",
    "command": "The <code>command </code>element represents a command which the user can invoke.",
    "datalist": "The <em>HTML Datalist Element</em> (<span style=\"font-family: Courier New;\">&lt;datalist&gt;</span>) contains a set of <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/HTML/Element/option\">&lt;option&gt;</a></code>\n elements that represent the possible options for the value of other controls.",
    "dd": "The Definition Description Element (<span style=\"font-family: Courier New;\">&lt;dd&gt;</span>) indicates the definition of a term in a definition list (<code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/HTML/Element/dl\">&lt;dl&gt;</a></code>\n) element. This element can occur only as a child element of a definition list and it must follow a <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/HTML/Element/dt\">&lt;dt&gt;</a></code>\n element.",
    "del": "The Deleted Text (<code>&lt;del&gt;</code>) HTML&nbsp;element represents a range of text that has been deleted from a document. This element is often (but need not be) rendered with strike-through text.",
    "details": "The HTML <em>details</em> element (<code>&lt;details&gt;</code>) is used as a disclosure widget from which the user the retrieve additional information.",
    "dfn": "The Definition (<code>&lt;dfn&gt;</code>)&nbsp;HTML element represents the defining instance of a term.",
    "div": "The Document Division (&lt;div&gt;) HTML&nbsp;element is generic container for flow content, which does not inherently represent anything. It can be used to group elements for styling purposes (using the <strong>class</strong> or <strong>id</strong> attributes), or because they share attribute values, such as <strong>lang</strong>. It should be used only when no other semantic element (such as <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/HTML/Element/article\">&lt;article&gt;</a></code>\n or <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/HTML/Element/nav\">&lt;nav&gt;</a></code>\n) is appropriate.",
    "dl": "The HTML <em>Definition List</em> (<code>&lt;dl&gt;</code>) element encloses a list of pairs of terms and descriptions. A common use for this element is to implement a glossary.",
    "dt": "The HTML Definition Term Element (<span style=\"font-family: Courier New;\">&lt;dt&gt;</span>) identifies a term in a definition list. This element can occur only as a child element of a <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/HTML/Element/dl\">&lt;dl&gt;</a></code>\n. It is usually followed by a <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/HTML/Element/dd\">&lt;dd&gt;</a></code>\n element; however, multiple <code>&lt;dt&gt;</code> elements in a row indicate several terms that are all defined by the immediate next <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/HTML/Element/dd\">&lt;dd&gt;</a></code>\n element.",
    "em": "The HTML Emphasis Element (<span style=\"font-family: Courier New;\">&lt;em&gt;</span>) marks text that has stress emphasis. The <code>&lt;em&gt;</code> element can be nested, with each level of nesting indicating a greater degree of emphasis.",
    "embed": "The <em>HTML&nbsp;Embed Element</em> (<code>&lt;embed&gt;</code>) represents an integration point for an external application or interactive content (in other words, a plug-in).",
    "fieldset": "The HTML&nbsp;element<em> fieldset </em>(<span style=\"font-family: Courier New;\">&lt;fieldset&gt;</span>) is used to group several controls as well as labels (<code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/HTML/Element/label\">&lt;label&gt;</a></code>\n) within a web form.",
    "figcaption": "The <em>HTML Figcaption Element</em> (<code>&lt;figcaption&gt;</code>) represents a caption or a legend associated with a figure or an illustration described by the rest of the data of the <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/HTML/Element/figure\">&lt;figure&gt;</a></code>\n element which is its immediate ancestor which means <code>&lt;figcaption&gt;</code> can be the first or last element inside a <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/HTML/Element/figure\">&lt;figure&gt;</a></code>\n block.&nbsp;Also, the <em>HTML Figcaption Element&nbsp;</em>is optional; if not provided, then the parent figure element will have no caption.",
    "figure": "The <em>HTML Figure Element&nbsp;</em>(<span style=\"font-family: Courier New;\">&lt;figure&gt;</span>) represents self-contained content, frequently with a caption&nbsp;(<code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/HTML/Element/figcaption\">&lt;figcaption&gt;</a></code>\n)<em><code>,</code></em> and is&nbsp;typically referenced as a single unit. While it is related to the main flow, its position is independent of the main flow. Usually this is an image, an illustration, a diagram, a code snippet, or a schema that is referenced in the main text, but that can be moved to another page or to an appendix without affecting the main flow.",
    "footer": "The <em>HTML Footer Element</em> (<span style=\"font-family: Courier New;\">&lt;footer&gt;</span>) represents a footer for its nearest sectioning content or <a title=\"en/Sections and Outlines of an HTML5 document#sectioning root\" rel=\"internal\" href=\"https://developer.mozilla.org/en/Sections_and_Outlines_of_an_HTML5_document#sectioning_root\">sectioning root</a> element (i.e, its nearest parent <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/HTML/Element/article\">&lt;article&gt;</a></code>\n, <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/HTML/Element/aside\">&lt;aside&gt;</a></code>\n, <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/HTML/Element/nav\">&lt;nav&gt;</a></code>\n, <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/HTML/Element/section\">&lt;section&gt;</a></code>\n, <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/HTML/Element/blockquote\">&lt;blockquote&gt;</a></code>\n, <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/HTML/Element/body\">&lt;body&gt;</a></code>\n, <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/HTML/Element/details\">&lt;details&gt;</a></code>\n, <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/HTML/Element/fieldset\">&lt;fieldset&gt;</a></code>\n, <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/HTML/Element/figure\">&lt;figure&gt;</a></code>\n, <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/HTML/Element/td\">&lt;td&gt;</a></code>\n). A footer typically contains information about the author of the section, copyright data or links to related documents.",
    "form": "The <em>form</em> (&lt;form&gt;) HTML&nbsp;element represents a section of document that contains interactive controls that enable a user to submit information to a web server.",
    "h1": "<strong>Heading</strong> elements implement six levels of document headings, <code>&lt;h1&gt;</code> is the most important and <code>&lt;h6&gt;</code> is the least. A heading element briefly describes the topic of the section it introduces. Heading information may be used by user agents, for example, to construct a table of contents for a document automatically.",
    "head": "The HTML <code>&lt;head&gt;</code> element represents a collection of metadata about the document, including links to or definitions of scripts and style sheets.",
    "header": "The <em>HTML Header Element</em> (<code>&lt;header&gt;</code>) represents a group of introductory or navigational aids. It may contain some heading elements but also other elements like a logo, wrapped section's header, a search form, and so on.",
    "hgroup": "The <em>HTML Headings Group Element</em> (<span style=\"font-family: Courier New;\">&lt;hgroup&gt;</span>) represents the heading of a section. It defines a single title that participates in <a title=\"en/Sections and Outlines of an HTML5 document\" rel=\"internal\" href=\"https://developer.mozilla.org/en/Sections_and_Outlines_of_an_HTML5_document\">the outline of the document</a> as the heading of the implicit or explicit section that it belongs too.",
    "hr": "In \n<span style=\"border: 1px solid rgb(129, 129, 250); background-color: rgb(174, 218, 229); font-size: x-small; white-space: nowrap; padding: 2px;\"><a rel=\"custom\" href=\"/en/HTML/HTML5\">HTML5</a></span> the &lt;hr&gt; element represents a thematic break between paragraph-level elements (for example, a change of scene in a story, or a shift of topic with a section). In previous versions of HTML, it represented a horizontal rule. It may still be displayed as a horizontal rule in visual browsers, but is now defined in semantic terms, rather than presentational terms.",
    "html": "The HTML root element (<span style=\"font-family: Courier New;\">&lt;html&gt;</span>) represents the root of an HTML or XHTML document. All other elements must be descendants of this element.",
    "i": "The HTML Offset Text (or Italics) Element (<span style=\"font-family: Courier New;\">&lt;i&gt;</span>) represents a range of text that is set off from the normal text for some reason, for example, technical terms, foreign language phrases, or fictional character thoughts. It is typically displayed in italic type.",
    "iframe": "The HTML&nbsp;inline frame element (<code>&lt;iframe&gt;</code>) represents a nested browsing context, effectively embedding another HTML page into the current page. Each browsing context has its own session history and active document. The browsing context that contains the embedded content is called the <dfn id=\"parent\">parent</dfn> browsing context. The <dfn id=\"top-level\">top-level</dfn> browsing context (which has no parent) is typically the browser window.",
    "img": "The HTML Image Element (<code>&lt;img&gt;</code>) represents an image to the document.",
    "input": "The <em>input</em> (<code>&lt;input&gt;</code>) element is used to create interactive controls for web-based forms.",
    "ins": "The <em>HTML&nbsp;Inserted Text</em> (<code>&lt;ins&gt;</code>) HTML represents a range of text that has been added to a document.",
    "kbd": "The HTML Keyboard Input Element (<span style=\"font-family: Courier New;\">&lt;kbd&gt;</span>) produces an inline element displayed in the browser's default monotype font. This element is used to identify user input.",
    "keygen": "The HTML <code>keygen</code> element exists to facilitate generation of key material, and submission of the public key as part of an HTML form. This mechanism is designed for use with Web-based certificate management systems. It is expected that the <code>keygen</code> element will be used in an HTML form along with other information needed to construct a certificate request, and that the result of the process will be a signed certificate.",
    "label": "The <em>HTML Label Element</em> (<code>&lt;label&gt;</code>) represents a caption for an item in a user interface. It can be associated with a control either by using the <code>for</code> attribute, or by placing the control element inside the <code>label</code> element. Such a control is called the <em>labeled control</em> of the label element.",
    "legend": "The <em>HTML Legend Field Element</em> (<span style=\"font-family: Courier New;\">&lt;legend&gt;</span>) represents a caption for the content of its parent <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/HTML/Element/fieldset\">&lt;fieldset&gt;</a></code>\n.",
    "li": "The <em>HTML List item element</em> (<code>&lt;li&gt;</code>) is used to represent a list item. It should be contained in an ordered list (<code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/HTML/Element/ol\">&lt;ol&gt;</a></code>), an unordered list (<code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/HTML/Element/ul\">&lt;ul&gt;</a></code>) or a menu (<code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/HTML/Element/menu\">&lt;menu&gt;</a></code>), where it represents a single entity in that list.",
    "link": "The <em>HTML Link Element</em> (&lt;link&gt;) specifies relationships between the current document and other documents. Possible uses for this element include defining a relational framework for navigation and linking the document to a style sheet.",
    "map": "The HTML <em>Map</em> element (<code>&lt;map&gt;</code>) is used with <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/HTML/Element/area\">&lt;area&gt;</a></code>\n elements to define a image map.",
    "mark": "The <em>HTML Mark Element</em> (<span style=\"font-family: Courier New;\">&lt;mark&gt;</span>) represents highlighted text, i.e., a run of text marked for reference purpose, due to its <em>relevance</em> in a particular context. For example it can be used in a page showing search results to highlight every instance of the searched for word.",
    "menu": "The HTML <em>menu</em> element (<code>&lt;menu&gt;</code>) represents an unordered list of menu choices, or commands.",
    "meta": "The <em>HTML Meta Element</em> (<code>&lt;meta&gt;</code>) represents any metadata information which cannot be represented using one of the other meta-related element (<code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/HTML/Element/base\">&lt;base&gt;</a></code>\n, <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/HTML/Element/link\">&lt;link&gt;</a></code>\n, <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/HTML/Element/script\">&lt;script&gt;</a></code>\n, <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/HTML/Element/style\">&lt;style&gt;</a></code>\n or <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/HTML/Element/title\">&lt;title&gt;</a></code>\n). According to the attributes set, the kind of metadata can be one of the following:",
    "meter": "The HTML <em>meter</em> element (<code>&lt;meter&gt;</code>) represents either a scalar value within a known range or a fractional value.",
    "nav": "The <em>HTML Navigation Element</em> (<code>&lt;nav&gt;</code>) represents a section of a page that links to other pages or to parts within the page: a section with navigation links.",
    "noscript": "The HTML NoScript Element (<code>&lt;noscript&gt;</code>) defines a section of html to be inserted if a script type on the page is unsupported or if scripting is currently turned off in the browser.",
    "object": "The Embedded Object (&lt;object&gt;) element represents an external resource, which can be treated as an image, a nested browsing context, or a resource to be handled by a plugin.",
    "ol": "The HTML <em>ordered list</em> element (<code>&lt;ol&gt;</code>) represents an ordered list of items. Typically, ordered-list items are displayed with a preceding numbering, which can be of any form, like numerals, letters or Romans numerals or even simple bullets. This numbered style is not defined in the HTML description of the page, but in its associated CSS, using the <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/list-style-type\">list-style-type</a></code>\n property.",
    "optgroup": "In a web form, the HTML <em>optgroup</em> element (&lt;optgroup&gt;) creates a grouping of options within a <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/HTML/Element/select\">&lt;select&gt;</a></code>\n element.",
    "option": "In a web form, the HTML<em> option </em>element (<span style=\"font-family: Courier New;\">&lt;option&gt;</span>) is used to create a control representing an item within a <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/HTML/Element/select\">&lt;select&gt;</a></code>\n, an <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/HTML/Element/optgroup\">&lt;optgroup&gt;</a></code>\n or a <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/HTML/Element/datalist\">&lt;datalist&gt;</a></code>\n HTML5 element.",
    "output": "The <em>output</em> (&lt;output&gt;) element represents the result of a calculation.",
    "p": "<strong>Paragraph</strong> element (&lt;p&gt;) represents a paragraph. It is the most commonly used block-level element.",
    "param": "<strong>Parameter </strong>element which defines parameters for <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/HTML/Element/object\">&lt;object&gt;</a></code>\n.",
    "pre": "This element represents preformatted text. Text within this element is typically displayed in a non-proportional font exactly as it is laid out in the file. Whitespaces inside this element are displayed as typed.",
    "progress": "The HTML <em>progress</em> (<code>&lt;progress&gt;</code>) element is used to view the completion progress of a task. While the specifics of how it's displayed is left up to the browser developer, it's typically displayed as a progress bar.",
    "q": "The <strong>quote</strong> element indicates that the enclosed text is a short inline quotation.",
    "s": "The <em>HTML&nbsp;Strikethrough Element</em> (<span style=\"font-family: Courier New;\">&lt;s&gt;</span>) renders text with a strike-through, or a line through it. Use the <code>&lt;s&gt;</code> element to represent things that are no longer relevant or no longer accurate. However, <code>&lt;s&gt;</code> is not appropriate when indicating document edits; for that, use the <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/HTML/Element/del\">&lt;del&gt;</a></code>\n and <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/HTML/Element/ins\">&lt;ins&gt;</a></code>\n elements, as appropriate.",
    "samp": "The HTML Sample Text Element (<span style=\"font-family: Courier New;\">&lt;samp&gt;</span>) produces an inline element displayed in the browser's default monotype font (Lucida Console). This element was intended to identify sample output from a computer program.",
    "script": "The <code>script</code> element is used to embed or reference an executable script within an <abbr title=\"Hypertext Markup Language\">HTML</abbr> or <abbr title=\"Extensible Hypertext Markup Language\">XHTML</abbr> document.",
    "section": "The <em>HTML Section Element</em> (<code>&lt;section&gt;</code>) represents a generic section of a document, i.e., a thematic grouping of content, typically with a heading.",
    "select": "The <em>select</em> (<code>&lt;select&gt;</code>) HTML element represents a control that presents menu of options. The options within the menu are represented by <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/HTML/Element/option\">&lt;option&gt;</a></code>\n elements, which can be grouped by <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/HTML/Element/optgroup\">&lt;optgroup&gt;</a></code>\n elements. Options can be pre-selected for the user.",
    "small": "The HTML Small Element (<span style=\"font-family: Courier New;\">&lt;small&gt;</span>) makes the text <em>font size</em> one size smaller (for example, from large to medium, or from small to x-small) down to the browser's minimum font size.",
    "source": "The <code>source</code> element is used to specify multiple media resources for <code> audio</code> and <code>video</code> elements in HTML5. It is an empty element. It is commonly used to serve the same media in <a title=\"En/Media formats supported by the audio and video elements\" rel=\"internal\" href=\"https://developer.mozilla.org/En/Media_formats_supported_by_the_audio_and_video_elements\">multiple formats supported by different browsers</a>.",
    "span": "This HTML element is a generic inline container for phrasing content, which does not inherently represent anything. It can be used to group elements for styling purposes (using the <strong>class</strong> or <strong>id</strong> attributes), or because they share attribute values, such as <strong>lang</strong>. It should be used only when no other semantic element is appropriate. &lt;span&gt; is very much like a <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/HTML/Element/div\">&lt;div&gt;</a></code>\n element, but <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/HTML/Element/div\">&lt;div&gt;</a></code>\n is a block-level element whereas a &lt;span&gt; is an inline element.",
    "strong": "The HTML Strong Element (<span style=\"font-family: Courier New;\">&lt;strong&gt;</span>) gives text strong emphasis, typically this is displayed in bold.",
    "style": "Style element contains style information for a document. Style information should go inside of this element, usually in the CSS language (see <a title=\"CSS\" rel=\"internal\" href=\"https://developer.mozilla.org/en/CSS\">CSS</a>).",
    "sub": "The <em>HTML Subscript Element</em> (<code>&lt;sub&gt;</code>) defines a span of text that should be displayed, for typographic reasons, lower, and often smaller, than the main span of text.",
    "summary": "The HTML <em>summary </em>element (<code>&lt;summary&gt;</code>) is used as a summary, caption or legend for the content of a <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/HTML/Element/details\">&lt;details&gt;</a></code>\n element.",
    "sup": "The <em>HTML Superscript Element</em> (<code>&lt;sup&gt;</code>) defines a span of text that should be displayed, for typographic reasons, higher, and often smaller, than the main span of text.",
    "table": "The <em>HTML Table Element </em>(<code>&lt;table&gt;</code>) represents data in two dimensions or more.",
    "tbody": "The <em>HTML Table Body Element</em> (<code>&lt;tbody&gt;</code>) defines a set of rows defining the body of the table. Though not mandatory, as the rows of the body can be defined as <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/HTML/Element/tr\">&lt;tr&gt;</a></code>\n elements children of the parent <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/HTML/Element/table\">&lt;table&gt;</a></code>\n element, if present, all <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/HTML/Element/tr\">&lt;tr&gt;</a></code>\n elements part of the body must be included into a unique <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/HTML/Element/tbody\">&lt;tbody&gt;</a></code>\n element.",
    "td": "The <em>HTML Table Cell Element</em> (<code>&lt;td&gt;</code>) defines a cell that content data.",
    "textarea": "The <em>textarea</em> (<code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/HTML/Element/textarea\">&lt;textarea&gt;</a></code>\n) HTML element represents a multi-line plain-text editing control.",
    "tfoot": "The <em>HTML Table Foot Element</em> (<code>&lt;tfoot&gt;</code>) defines a set of rows summarizing the columns of the table.",
    "th": "The <em>HTML Table Header Cell Element</em> (<code>&lt;th&gt;</code>) defines a cell that is a header for a group of cells of a table. The group of cells that the header refers to is defined by the \n\n<code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/HTML/Element/th#attr-scope\">scope</a></code>\n and \n\n<code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/HTML/Element/th#attr-headers\">headers</a></code>\n attribute.",
    "thead": "The <em>HTML Table Head Element</em> (<code>&lt;thead&gt;</code>) defines a set of rows defining the head of the columns of the table.",
    "time": "The HTML <em>time</em> element (<code>&lt;time&gt;</code>) represents either time on a 24-hour clock or a precise date in the <a class=\"external\" title=\"http://en.wikipedia.org/wiki/Gregorian_calendar\" rel=\"external\" href=\"http://en.wikipedia.org/wiki/Gregorian_calendar\" target=\"_blank\">Gregorian calendar</a> (with optional time and timezone information).",
    "title": "The <em>HTML Title Element</em> (<code>&lt;title&gt;</code>) defines the title of the document, shown in a browser's title bar or on the page's tab. It can only contain text and any contained tags are not interpreted.",
    "tr": "The <em>HTML Table Row Element</em> (<code>&lt;tr&gt;</code>) defines a row of cells in a table. Those can be a mix of <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/HTML/Element/td\">&lt;td&gt;</a></code>\n and <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/HTML/Element/th\">&lt;th&gt;</a></code>\n elements.",
    "u": "The <em>HTML Underline Element</em> (<span style=\"font-family: Courier New;\">&lt;u&gt;</span>) renders text with an underline, a line under the baseline of its content.",
    "ul": "The HTML <em>unordered list</em> element (<code>&lt;ul&gt;</code>) represents an unordered list of items, namely a collection of items that do not have a numerical ordering, and their order in the list is meaningless. Typically, unordered-list items are displayed with a bullet, which can be of several forms, like a dot, a circle or a squared. The bullet style is not defined in the HTML description of the page, but in its associated CSS, using the <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/list-style-type\">list-style-type</a></code>\n property.",
    "var": "The HTML Variable Element (<code>&lt;var&gt;</code>) represents a variable in a mathematical expression or a programming context.",
    "video": "The HTML&nbsp; <code>&lt;video&gt;</code> element is used to embed video content in an HTML&nbsp;or XHTML document.",
    "wbr": "The <em>Word Break Opportunit</em><em>y</em> (<code>&lt;wbr&gt;</code>) HTML element represents a position within text where the browser may optionally break a line, though its line-breaking rules would not otherwise create a break at that location."
  },
  "css-selector-docs": "This is a CSS selector. It describes the kinds of HTML elements that a CSS rule's style will be applied to."
}});



define('fc/help',["fc/hacktionary-data"], function(HacktionaryData) {
  // A help index provides context-sensitive help for an HTML document,
  // indexed by characters in the HTML source code.
  function HelpIndex() {
    // A mapping from character indices in source code to associated
    // context-sensitive help information.
    var helpIndex = [];

    return {
      // Clear the help index.
      clear: function() {
        helpIndex = [];
      },
      // Build a new help index based on the given HTML and its DOM
      // representation, which should be annotated by Slowparse.
      build: function(document, html) {
        buildHelpIndex(document, helpIndex, html);
      },
      // Return the context-sensitive help information for a particular
      // position in the source code, or undefined if no help is available.
      get: function(index) {
        return getHelp(index, helpIndex);
      }
    };
  }

  // Return the context-sensitive help information for a particular
  // position in the source code, or undefined if no help is available.
  function getHelp(index, helpIndex) {
    var help = helpIndex[index];
    if (help) {
      if (help.type == "tag" &&
          help.value in HacktionaryData["html-element-docs"])
        return {
          type: help.type,
          html: HacktionaryData["html-element-docs"][help.value],
          url: Help.MDN_URLS.html + help.value,
          highlights: help.highlights
        };
      else if (help.type == "cssProperty" &&
               help.value in HacktionaryData["css-property-docs"])
        return {
          type: help.type,
          html: HacktionaryData["css-property-docs"][help.value],
          url: Help.MDN_URLS.css + help.value,
          highlights: help.highlights
        };
      else if (help.type == "cssSelector")
        return {
          type: help.type,
          html: HacktionaryData["css-selector-docs"],
          url: Help.MDN_URLS.cssSelectors,
          highlights: help.highlights
        };
    }
  }

  // "Normalize" a tag name by converting e.g. any heading level to h1,
  // so that they can be easily looked up in the hacktionary.
  function normalizeTagName(tagName) {
    tagName = tagName.toLowerCase();
    if (tagName.match(/^h[1-6]$/))
      return "h1";
    return tagName;
  }

  // Recursively build the help index mapping source code indices 
  // to context-sensitive help.
  function buildHelpIndex(element, helpIndex, html) {
    var i, child,
        pi = element.parseInfo,
        tagInfo = {
          type: "tag",
          value: normalizeTagName(element.nodeName),
          highlights: []
        };
    if (pi) {
      if (pi.openTag) {
        tagInfo.highlights.push(pi.openTag);
        for (i = pi.openTag.start + 1;
             i < pi.openTag.start + element.nodeName.length + 2;
             i++)
          helpIndex[i] = tagInfo;
      }
      if (pi.closeTag) {
        tagInfo.highlights.push(pi.closeTag);
        for (i = pi.closeTag.start + 1; i < pi.closeTag.end; i++)
          helpIndex[i] = tagInfo;
      }
    }
    for (i = 0; i < element.childNodes.length; i++) {
      child = element.childNodes[i];
      if (child.nodeType == element.ELEMENT_NODE) {
        buildHelpIndex(child, helpIndex, html);
      }
      if (element.nodeName == "STYLE" && child.parseInfo.rules) {
        child.parseInfo.rules.forEach(function(rule) {
          var selectorInfo = {
            type: "cssSelector",
            highlights: [rule.selector]
          };
          for (var i = rule.selector.start; i < rule.selector.end; i++)
            helpIndex[i] = selectorInfo;
          rule.declarations.properties.forEach(function(prop) {
            var cssInfo = {
              type: "cssProperty",
              value: html.slice(prop.name.start, prop.name.end).toLowerCase(),
              highlights: [prop.name]
            };
            for (var i = prop.name.start; i < prop.name.end; i++)
              helpIndex[i] = cssInfo;
          });
        });
      }
    }
  }
  
  var Help = {
    Index: HelpIndex,
    // URLs for help on the Mozilla Developer Network.
    MDN_URLS: {
      html: "https://developer.mozilla.org/en/HTML/Element/",
      css: "https://developer.mozilla.org/en/CSS/",
      cssSelectors: "https://developer.mozilla.org/en/CSS/" +
                    "Getting_Started/Selectors"
    }
  };

  return Help;
});

/**
 * lscache library
 * Copyright (c) 2011, Pamela Fox
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/*jshint undef:true, browser:true */

/**
 * Creates a namespace for the lscache functions.
 */
define('lscache',[],function() {
  // Prefix for all lscache keys
  var CACHE_PREFIX = 'lscache-';

  // Suffix for the key name on the expiration items in localStorage
  var CACHE_SUFFIX = '-cacheexpiration';

  // expiration date radix (set to Base-36 for most space savings)
  var EXPIRY_RADIX = 10;

  // time resolution in minutes
  var EXPIRY_UNITS = 60 * 1000;

  // ECMAScript max Date (epoch + 1e8 days)
  var MAX_DATE = Math.floor(8.64e15/EXPIRY_UNITS);

  var cachedStorage;
  var cachedJSON;

  // Determines if localStorage is supported in the browser;
  // result is cached for better performance instead of being run each time.
  // Feature detection is based on how Modernizr does it;
  // it's not straightforward due to FF4 issues.
  // It's not run at parse-time as it takes 200ms in Android.
  function supportsStorage() {
    var key = '__lscachetest__';
    var value = key;

    if (cachedStorage !== undefined) {
      return cachedStorage;
    }

    try {
      setItem(key, value);
      removeItem(key);
      cachedStorage = true;
    } catch (exc) {
      cachedStorage = false;
    }
    return cachedStorage;
  }

  // Determines if native JSON (de-)serialization is supported in the browser.
  function supportsJSON() {
    /*jshint eqnull:true */
    if (cachedJSON === undefined) {
      cachedJSON = (window.JSON != null);
    }
    return cachedJSON;
  }

  /**
   * Returns the full string for the localStorage expiration item.
   * @param {String} key
   * @return {string}
   */
  function expirationKey(key) {
    return key + CACHE_SUFFIX;
  }

  /**
   * Returns the number of minutes since the epoch.
   * @return {number}
   */
  function currentTime() {
    return Math.floor((new Date().getTime())/EXPIRY_UNITS);
  }

  /**
   * Wrapper functions for localStorage methods
   */

  function getItem(key) {
    return localStorage.getItem(CACHE_PREFIX + key);
  }

  function setItem(key, value) {
    // Fix for iPad issue - sometimes throws QUOTA_EXCEEDED_ERR on setItem.
    localStorage.removeItem(CACHE_PREFIX + key);
    localStorage.setItem(CACHE_PREFIX + key, value);
  }

  function removeItem(key) {
    localStorage.removeItem(CACHE_PREFIX + key);
  }

  return {

    /**
     * Stores the value in localStorage. Expires after specified number of minutes.
     * @param {string} key
     * @param {Object|string} value
     * @param {number} time
     */
    set: function(key, value, time) {
      if (!supportsStorage()) return;

      // If we don't get a string value, try to stringify
      // In future, localStorage may properly support storing non-strings
      // and this can be removed.
      if (typeof value !== 'string') {
        if (!supportsJSON()) return;
        try {
          value = JSON.stringify(value);
        } catch (e) {
          // Sometimes we can't stringify due to circular refs
          // in complex objects, so we won't bother storing then.
          return;
        }
      }

      try {
        setItem(key, value);
      } catch (e) {
        if (e.name === 'QUOTA_EXCEEDED_ERR' || e.name === 'NS_ERROR_DOM_QUOTA_REACHED') {
          // If we exceeded the quota, then we will sort
          // by the expire time, and then remove the N oldest
          var storedKeys = [];
          var storedKey;
          for (var i = 0; i < localStorage.length; i++) {
            storedKey = localStorage.key(i);

            if (storedKey.indexOf(CACHE_PREFIX) === 0 && storedKey.indexOf(CACHE_SUFFIX) < 0) {
              var mainKey = storedKey.substr(CACHE_PREFIX.length);
              var exprKey = expirationKey(mainKey);
              var expiration = getItem(exprKey);
              if (expiration) {
                expiration = parseInt(expiration, EXPIRY_RADIX);
              } else {
                // TODO: Store date added for non-expiring items for smarter removal
                expiration = MAX_DATE;
              }
              storedKeys.push({
                key: mainKey,
                size: (getItem(mainKey)||'').length,
                expiration: expiration
              });
            }
          }
          // Sorts the keys with oldest expiration time last
          storedKeys.sort(function(a, b) { return (b.expiration-a.expiration); });

          var targetSize = (value||'').length;
          while (storedKeys.length && targetSize > 0) {
            storedKey = storedKeys.pop();
            removeItem(storedKey.key);
            removeItem(expirationKey(storedKey.key));
            targetSize -= storedKey.size;
          }
          try {
            setItem(key, value);
          } catch (e) {
            // value may be larger than total quota
            return;
          }
        } else {
          // If it was some other error, just give up.
          return;
        }
      }

      // If a time is specified, store expiration info in localStorage
      if (time) {
        setItem(expirationKey(key), (currentTime() + time).toString(EXPIRY_RADIX));
      } else {
        // In case they previously set a time, remove that info from localStorage.
        removeItem(expirationKey(key));
      }
    },

    /**
     * Retrieves specified value from localStorage, if not expired.
     * @param {string} key
     * @return {string|Object}
     */
    get: function(key) {
      if (!supportsStorage()) return null;

      // Return the de-serialized item if not expired
      var exprKey = expirationKey(key);
      var expr = getItem(exprKey);

      if (expr) {
        var expirationTime = parseInt(expr, EXPIRY_RADIX);

        // Check if we should actually kick item out of storage
        if (currentTime() >= expirationTime) {
          removeItem(key);
          removeItem(exprKey);
          return null;
        }
      }

      // Tries to de-serialize stored value if its an object, and returns the normal value otherwise.
      var value = getItem(key);
      if (!value || !supportsJSON()) {
        return value;
      }

      try {
        // We can't tell if its JSON or a string, so we try to parse
        return JSON.parse(value);
      } catch (e) {
        // If we can't parse, it's probably because it isn't an object
        return value;
      }
    },

    /**
     * Removes a value from localStorage.
     * Equivalent to 'delete' in memcache, but that's a keyword in JS.
     * @param {string} key
     */
    remove: function(key) {
      if (!supportsStorage()) return null;
      removeItem(key);
      removeItem(expirationKey(key));
    },

    /**
     * Returns whether local storage is supported.
     * Currently exposed for testing purposes.
     * @return {boolean}
     */
    supported: function() {
      return supportsStorage();
    },

    /**
     * Flushes all lscache items and expiry markers without affecting rest of localStorage
     */
    flush: function() {
      if (!supportsStorage()) return;

      // Loop in reverse as removing items will change indices of tail
      for (var i = localStorage.length-1; i >= 0 ; --i) {
        var key = localStorage.key(i);
        if (key.indexOf(CACHE_PREFIX) === 0) {
          localStorage.removeItem(key);
        }
      }
    }
  };
});


// This helper saves the editor's data to local storage just before
// the page unloads, and provides a method to restore it. Useful for
// when a user accidentally refreshes/navigates away from the editor
// and wants to retrieve their old content.
//
// TODO: This could be a privacy concern, since people at shared terminals
// might not want the next user to be able to see what they were just
// working on. We're currently only saving the data for a few minutes, though,
// so hopefully this shouldn't be that big a problem.
define('fc/parachute',["lscache"], function(lscache) {
  return function Parachute(window, codeMirror, page) {  
    // Amount of time, in minutes, to save parachute data.
    var timeLimit = 5;
    var prefix = "FRIENDLYCODE_PARACHUTE_DATA_";
    var key = prefix + page;
    var originalData = codeMirror.getValue();
    var self = {
      restore: function() {
        var saved = lscache.get(key);
        if (saved) {
          if (saved == codeMirror.getValue()) {
            // Our saved data is the same as the unmodified data, so there's
            // no need to store it.
            lscache.remove(key);
          } else {
            codeMirror.setValue(saved);
            return true;
          }
        }
        return false;
      },
      save: function() {
        if (codeMirror.getValue() != originalData)
          lscache.set(key, codeMirror.getValue(), timeLimit);
      },
      refresh: function() {
        originalData = codeMirror.getValue();
      },
      clearCurrentPage: function() {
        lscache.remove(key);
      },
      changePage: function(newPage) {
        page = newPage;
        key = prefix + page;
      },
      destroyAll: function() {
        window.removeEventListener("beforeunload", self.save, true);
        lscache.flush();
      }
    };
  
    window.addEventListener("beforeunload", self.save, true);
    return self;
  };
});



// This class is responsible for communicating with a publishing server
// to save and load published code.
define('fc/publisher',[],function() {
  var myOrigin = window.location.protocol + "//" + window.location.host;
  
  function Publisher(baseURL) {
    // We want to support CORS for development but in production it doesn't
    // matter because all requests will be same-origin. However, browsers
    // that don't support CORS will barf if they're given absolute URLs to
    // the same domain, so we want to return relative URLs in such cases.
    function makeURL(path) {
      if (baseURL == myOrigin)
        return path;
      path = baseURL + path;
      if (!jQuery.support.cors && window.console)
        window.console.warn("No CORS detected for request to " + path);
      return path;
    }

    return {
      baseURL: baseURL,
      loadCode: function(path, cb) {
        jQuery.ajax({
          type: 'GET',
          url: makeURL(path),
          dataType: 'text',
          error: function(data) {
            cb(data);
          },
          success: function(data) {
            cb(null, fixDoctypeHeadBodyMunging(data), baseURL + path);
          }
        });
      },
      saveCode: function(data, originalURL, cb) {
        $.ajax({
          type: 'POST',
          url: makeURL('/api/page'),
          data: {
            'html': data,
            'original-url': originalURL || ''
          },
          dataType: 'text',
          error: function(data) {
            cb(data);
          },
          success: function(data) {
            cb(null, {path: data, url: baseURL + data});
          }
        });
      }
    };
  }
  
  // This is a fix for https://github.com/mozilla/webpagemaker/issues/20.
  function fixDoctypeHeadBodyMunging(html) {
    var lines = html.split('\n');
    if (lines.length > 2 &&
        lines[0] == '<!DOCTYPE html><html><head>' &&
        lines[lines.length-1] == '</body></html>') {
      return '<!DOCTYPE html>\n<html>\n  <head>\n' +
             lines.slice(1, -1).join('\n') + '</body>\n</html>';
    }
    return html;
  }
  
  // Exposing this for unit testing purposes only.
  Publisher._fixDoctypeHeadBodyMunging = fixDoctypeHeadBodyMunging;
  
  return Publisher;
});

// CodeMirror version 2.25
//
// All functions that need access to the editor's state live inside
// the CodeMirror function. Below that, at the bottom of the file,
// some utilities are defined.

// CodeMirror is the only global var we claim
var CodeMirror = (function() {
  // This is the function that produces an editor instance. Its
  // closure is used to store the editor state.
  function CodeMirror(place, givenOptions) {
    // Determine effective options based on given values and defaults.
    var options = {}, defaults = CodeMirror.defaults;
    for (var opt in defaults)
      if (defaults.hasOwnProperty(opt))
        options[opt] = (givenOptions && givenOptions.hasOwnProperty(opt) ? givenOptions : defaults)[opt];

    // The element in which the editor lives.
    var wrapper = document.createElement("div");
    wrapper.className = "CodeMirror" + (options.lineWrapping ? " CodeMirror-wrap" : "");
    // This mess creates the base DOM structure for the editor.
    wrapper.innerHTML =
      '<div style="overflow: hidden; position: relative; width: 3px; height: 0px;">' + // Wraps and hides input textarea
        '<textarea style="position: absolute; padding: 0; width: 1px; height: 1em" wrap="off" ' +
          'autocorrect="off" autocapitalize="off"></textarea></div>' +
      '<div class="CodeMirror-scroll" tabindex="-1">' +
        '<div style="position: relative">' + // Set to the height of the text, causes scrolling
          '<div style="position: relative">' + // Moved around its parent to cover visible view
            '<div class="CodeMirror-gutter"><div class="CodeMirror-gutter-text"></div></div>' +
            // Provides positioning relative to (visible) text origin
            '<div class="CodeMirror-lines"><div style="position: relative; z-index: 0">' +
              '<div style="position: absolute; width: 100%; height: 0; overflow: hidden; visibility: hidden;"></div>' +
              '<pre class="CodeMirror-cursor">&#160;</pre>' + // Absolutely positioned blinky cursor
              '<div style="position: relative; z-index: -1"></div><div></div>' + // DIVs containing the selection and the actual code
            '</div></div></div></div></div>';
    if (place.appendChild) place.appendChild(wrapper); else place(wrapper);
    // I've never seen more elegant code in my life.
    var inputDiv = wrapper.firstChild, input = inputDiv.firstChild,
        scroller = wrapper.lastChild, code = scroller.firstChild,
        mover = code.firstChild, gutter = mover.firstChild, gutterText = gutter.firstChild,
        lineSpace = gutter.nextSibling.firstChild, measure = lineSpace.firstChild,
        cursor = measure.nextSibling, selectionDiv = cursor.nextSibling,
        lineDiv = selectionDiv.nextSibling;
    themeChanged(); keyMapChanged();
    // Needed to hide big blue blinking cursor on Mobile Safari
    if (ios) input.style.width = "0px";
    if (!webkit) lineSpace.draggable = true;
    lineSpace.style.outline = "none";
    if (options.tabindex != null) input.tabIndex = options.tabindex;
    if (options.autofocus) focusInput();
    if (!options.gutter && !options.lineNumbers) gutter.style.display = "none";
    // Needed to handle Tab key in KHTML
    if (khtml) inputDiv.style.height = "1px", inputDiv.style.position = "absolute";

    // Check for problem with IE innerHTML not working when we have a
    // P (or similar) parent node.
    try { stringWidth("x"); }
    catch (e) {
      if (e.message.match(/runtime/i))
        e = new Error("A CodeMirror inside a P-style element does not work in Internet Explorer. (innerHTML bug)");
      throw e;
    }

    // Delayed object wrap timeouts, making sure only one is active. blinker holds an interval.
    var poll = new Delayed(), highlight = new Delayed(), blinker;

    // mode holds a mode API object. doc is the tree of Line objects,
    // work an array of lines that should be parsed, and history the
    // undo history (instance of History constructor).
    var mode, doc = new BranchChunk([new LeafChunk([new Line("")])]), work, focused;
    loadMode();
    // The selection. These are always maintained to point at valid
    // positions. Inverted is used to remember that the user is
    // selecting bottom-to-top.
    var sel = {from: {line: 0, ch: 0}, to: {line: 0, ch: 0}, inverted: false};
    // Selection-related flags. shiftSelecting obviously tracks
    // whether the user is holding shift.
    var shiftSelecting, lastClick, lastDoubleClick, lastScrollPos = 0, draggingText,
        overwrite = false, suppressEdits = false;
    // Variables used by startOperation/endOperation to track what
    // happened during the operation.
    var updateInput, userSelChange, changes, textChanged, selectionChanged, leaveInputAlone,
        gutterDirty, callbacks, maxLengthChanged;
    // Current visible range (may be bigger than the view window).
    var displayOffset = 0, showingFrom = 0, showingTo = 0, lastSizeC = 0;
    // bracketHighlighted is used to remember that a bracket has been
    // marked.
    var bracketHighlighted;
    // Tracks the maximum line length so that the horizontal scrollbar
    // can be kept static when scrolling.
    var maxLine = "", maxWidth;
    var tabCache = {};

    // Initialize the content.
    operation(function(){setValue(options.value || ""); updateInput = false;})();
    var history = new History();

    // Register our event handlers.
    connect(scroller, "mousedown", operation(onMouseDown));
    connect(scroller, "dblclick", operation(onDoubleClick));
    connect(lineSpace, "selectstart", e_preventDefault);
    // Gecko browsers fire contextmenu *after* opening the menu, at
    // which point we can't mess with it anymore. Context menu is
    // handled in onMouseDown for Gecko.
    if (!gecko) connect(scroller, "contextmenu", onContextMenu);
    connect(scroller, "scroll", function() {
      lastScrollPos = scroller.scrollTop;
      updateDisplay([]);
      if (options.fixedGutter) gutter.style.left = scroller.scrollLeft + "px";
      if (options.onScroll) options.onScroll(instance);
    });
    connect(window, "resize", function() {updateDisplay(true);});
    connect(input, "keyup", operation(onKeyUp));
    connect(input, "input", fastPoll);
    connect(input, "keydown", operation(onKeyDown));
    connect(input, "keypress", operation(onKeyPress));
    connect(input, "focus", onFocus);
    connect(input, "blur", onBlur);

    if (options.dragDrop) {
      connect(lineSpace, "dragstart", onDragStart);
      function drag_(e) {
        if (options.onDragEvent && options.onDragEvent(instance, addStop(e))) return;
        e_stop(e);
      }
      connect(scroller, "dragenter", drag_);
      connect(scroller, "dragover", drag_);
      connect(scroller, "drop", operation(onDrop));
    }
    connect(scroller, "paste", function(){focusInput(); fastPoll();});
    connect(input, "paste", fastPoll);
    connect(input, "cut", operation(function(){
      if (!options.readOnly) replaceSelection("");
    }));

    // Needed to handle Tab key in KHTML
    if (khtml) connect(code, "mouseup", function() {
        if (document.activeElement == input) input.blur();
        focusInput();
    });

    // IE throws unspecified error in certain cases, when
    // trying to access activeElement before onload
    var hasFocus; try { hasFocus = (document.activeElement == input); } catch(e) { }
    if (hasFocus || options.autofocus) setTimeout(onFocus, 20);
    else onBlur();

    function isLine(l) {return l >= 0 && l < doc.size;}
    // The instance object that we'll return. Mostly calls out to
    // local functions in the CodeMirror function. Some do some extra
    // range checking and/or clipping. operation is used to wrap the
    // call so that changes it makes are tracked, and the display is
    // updated afterwards.
    var instance = wrapper.CodeMirror = {
      getValue: getValue,
      setValue: operation(setValue),
      getSelection: getSelection,
      replaceSelection: operation(replaceSelection),
      focus: function(){window.focus(); focusInput(); onFocus(); fastPoll();},
      setOption: function(option, value) {
        var oldVal = options[option];
        options[option] = value;
        if (option == "mode" || option == "indentUnit") loadMode();
        else if (option == "readOnly" && value == "nocursor") {onBlur(); input.blur();}
        else if (option == "readOnly" && !value) {resetInput(true);}
        else if (option == "theme") themeChanged();
        else if (option == "lineWrapping" && oldVal != value) operation(wrappingChanged)();
        else if (option == "tabSize") updateDisplay(true);
        else if (option == "keyMap") keyMapChanged();
        if (option == "lineNumbers" || option == "gutter" || option == "firstLineNumber" || option == "theme") {
          gutterChanged();
          updateDisplay(true);
        }
      },
      getOption: function(option) {return options[option];},
      undo: operation(undo),
      redo: operation(redo),
      indentLine: operation(function(n, dir) {
        if (typeof dir != "string") {
          if (dir == null) dir = options.smartIndent ? "smart" : "prev";
          else dir = dir ? "add" : "subtract";
        }
        if (isLine(n)) indentLine(n, dir);
      }),
      indentSelection: operation(indentSelected),
      historySize: function() {return {undo: history.done.length, redo: history.undone.length};},
      clearHistory: function() {history = new History();},
      matchBrackets: operation(function(){matchBrackets(true);}),
      getTokenAt: operation(function(pos) {
        pos = clipPos(pos);
        return getLine(pos.line).getTokenAt(mode, getStateBefore(pos.line), pos.ch);
      }),
      getStateAfter: function(line) {
        line = clipLine(line == null ? doc.size - 1: line);
        return getStateBefore(line + 1);
      },
      cursorCoords: function(start, mode) {
        if (start == null) start = sel.inverted;
        return this.charCoords(start ? sel.from : sel.to, mode);
      },
      charCoords: function(pos, mode) {
        pos = clipPos(pos);
        if (mode == "local") return localCoords(pos, false);
        if (mode == "div") return localCoords(pos, true);
        return pageCoords(pos);
      },
      coordsChar: function(coords) {
        var off = eltOffset(lineSpace);
        return coordsChar(coords.x - off.left, coords.y - off.top);
      },
      markText: operation(markText),
      setBookmark: setBookmark,
      findMarksAt: findMarksAt,
      setMarker: operation(addGutterMarker),
      clearMarker: operation(removeGutterMarker),
      setLineClass: operation(setLineClass),
      hideLine: operation(function(h) {return setLineHidden(h, true);}),
      showLine: operation(function(h) {return setLineHidden(h, false);}),
      onDeleteLine: function(line, f) {
        if (typeof line == "number") {
          if (!isLine(line)) return null;
          line = getLine(line);
        }
        (line.handlers || (line.handlers = [])).push(f);
        return line;
      },
      lineInfo: lineInfo,
      addWidget: function(pos, node, scroll, vert, horiz) {
        pos = localCoords(clipPos(pos));
        var top = pos.yBot, left = pos.x;
        node.style.position = "absolute";
        code.appendChild(node);
        if (vert == "over") top = pos.y;
        else if (vert == "near") {
          var vspace = Math.max(scroller.offsetHeight, doc.height * textHeight()),
              hspace = Math.max(code.clientWidth, lineSpace.clientWidth) - paddingLeft();
          if (pos.yBot + node.offsetHeight > vspace && pos.y > node.offsetHeight)
            top = pos.y - node.offsetHeight;
          if (left + node.offsetWidth > hspace)
            left = hspace - node.offsetWidth;
        }
        node.style.top = (top + paddingTop()) + "px";
        node.style.left = node.style.right = "";
        if (horiz == "right") {
          left = code.clientWidth - node.offsetWidth;
          node.style.right = "0px";
        } else {
          if (horiz == "left") left = 0;
          else if (horiz == "middle") left = (code.clientWidth - node.offsetWidth) / 2;
          node.style.left = (left + paddingLeft()) + "px";
        }
        if (scroll)
          scrollIntoView(left, top, left + node.offsetWidth, top + node.offsetHeight);
      },

      lineCount: function() {return doc.size;},
      clipPos: clipPos,
      getCursor: function(start) {
        if (start == null) start = sel.inverted;
        return copyPos(start ? sel.from : sel.to);
      },
      somethingSelected: function() {return !posEq(sel.from, sel.to);},
      setCursor: operation(function(line, ch, user) {
        if (ch == null && typeof line.line == "number") setCursor(line.line, line.ch, user);
        else setCursor(line, ch, user);
      }),
      setSelection: operation(function(from, to, user) {
        (user ? setSelectionUser : setSelection)(clipPos(from), clipPos(to || from));
      }),
      getLine: function(line) {if (isLine(line)) return getLine(line).text;},
      getLineHandle: function(line) {if (isLine(line)) return getLine(line);},
      setLine: operation(function(line, text) {
        if (isLine(line)) replaceRange(text, {line: line, ch: 0}, {line: line, ch: getLine(line).text.length});
      }),
      removeLine: operation(function(line) {
        if (isLine(line)) replaceRange("", {line: line, ch: 0}, clipPos({line: line+1, ch: 0}));
      }),
      replaceRange: operation(replaceRange),
      getRange: function(from, to) {return getRange(clipPos(from), clipPos(to));},

      triggerOnKeyDown: operation(onKeyDown),
      execCommand: function(cmd) {return commands[cmd](instance);},
      // Stuff used by commands, probably not much use to outside code.
      moveH: operation(moveH),
      deleteH: operation(deleteH),
      moveV: operation(moveV),
      toggleOverwrite: function() {
        if(overwrite){
          overwrite = false;
          cursor.className = cursor.className.replace(" CodeMirror-overwrite", "");
        } else {
          overwrite = true;
          cursor.className += " CodeMirror-overwrite";
        }
      },

      posFromIndex: function(off) {
        var lineNo = 0, ch;
        doc.iter(0, doc.size, function(line) {
          var sz = line.text.length + 1;
          if (sz > off) { ch = off; return true; }
          off -= sz;
          ++lineNo;
        });
        return clipPos({line: lineNo, ch: ch});
      },
      indexFromPos: function (coords) {
        if (coords.line < 0 || coords.ch < 0) return 0;
        var index = coords.ch;
        doc.iter(0, coords.line, function (line) {
          index += line.text.length + 1;
        });
        return index;
      },
      scrollTo: function(x, y) {
        if (x != null) scroller.scrollLeft = x;
        if (y != null) scroller.scrollTop = y;
        updateDisplay([]);
      },

      operation: function(f){return operation(f)();},
      compoundChange: function(f){return compoundChange(f);},
      refresh: function(){
        updateDisplay(true);
        if (scroller.scrollHeight > lastScrollPos)
          scroller.scrollTop = lastScrollPos;
      },
      getInputField: function(){return input;},
      getWrapperElement: function(){return wrapper;},
      getScrollerElement: function(){return scroller;},
      getGutterElement: function(){return gutter;}
    };

    function getLine(n) { return getLineAt(doc, n); }
    function updateLineHeight(line, height) {
      gutterDirty = true;
      var diff = height - line.height;
      for (var n = line; n; n = n.parent) n.height += diff;
    }

    function setValue(code) {
      var top = {line: 0, ch: 0};
      updateLines(top, {line: doc.size - 1, ch: getLine(doc.size-1).text.length},
                  splitLines(code), top, top);
      updateInput = true;
    }
    function getValue() {
      var text = [];
      doc.iter(0, doc.size, function(line) { text.push(line.text); });
      return text.join("\n");
    }

    function onMouseDown(e) {
      setShift(e_prop(e, "shiftKey"));
      // Check whether this is a click in a widget
      for (var n = e_target(e); n != wrapper; n = n.parentNode)
        if (n.parentNode == code && n != mover) return;

      // See if this is a click in the gutter
      for (var n = e_target(e); n != wrapper; n = n.parentNode)
        if (n.parentNode == gutterText) {
          if (options.onGutterClick)
            options.onGutterClick(instance, indexOf(gutterText.childNodes, n) + showingFrom, e);
          return e_preventDefault(e);
        }

      var start = posFromMouse(e);

      switch (e_button(e)) {
      case 3:
        if (gecko && !mac) onContextMenu(e);
        return;
      case 2:
        if (start) setCursor(start.line, start.ch, true);
        setTimeout(focusInput, 20);
        return;
      }
      // For button 1, if it was clicked inside the editor
      // (posFromMouse returning non-null), we have to adjust the
      // selection.
      if (!start) {if (e_target(e) == scroller) e_preventDefault(e); return;}

      if (!focused) onFocus();

      var now = +new Date;
      if (lastDoubleClick && lastDoubleClick.time > now - 400 && posEq(lastDoubleClick.pos, start)) {
        e_preventDefault(e);
        setTimeout(focusInput, 20);
        return selectLine(start.line);
      } else if (lastClick && lastClick.time > now - 400 && posEq(lastClick.pos, start)) {
        lastDoubleClick = {time: now, pos: start};
        e_preventDefault(e);
        return selectWordAt(start);
      } else { lastClick = {time: now, pos: start}; }

      var last = start, going;
      if (options.dragDrop && dragAndDrop && !options.readOnly && !posEq(sel.from, sel.to) &&
          !posLess(start, sel.from) && !posLess(sel.to, start)) {
        // Let the drag handler handle this.
        if (webkit) lineSpace.draggable = true;
        function dragEnd(e2) {
          if (webkit) lineSpace.draggable = false;
          draggingText = false;
          up(); drop();
          if (Math.abs(e.clientX - e2.clientX) + Math.abs(e.clientY - e2.clientY) < 10) {
            e_preventDefault(e2);
            setCursor(start.line, start.ch, true);
            focusInput();
          }
        }
        var up = connect(document, "mouseup", operation(dragEnd), true);
        var drop = connect(scroller, "drop", operation(dragEnd), true);
        draggingText = true;
        // IE's approach to draggable
        if (lineSpace.dragDrop) lineSpace.dragDrop();
        return;
      }
      e_preventDefault(e);
      setCursor(start.line, start.ch, true);

      function extend(e) {
        var cur = posFromMouse(e, true);
        if (cur && !posEq(cur, last)) {
          if (!focused) onFocus();
          last = cur;
          setSelectionUser(start, cur);
          updateInput = false;
          var visible = visibleLines();
          if (cur.line >= visible.to || cur.line < visible.from)
            going = setTimeout(operation(function(){extend(e);}), 150);
        }
      }

      function done(e) {
        clearTimeout(going);
        var cur = posFromMouse(e);
        if (cur) setSelectionUser(start, cur);
        e_preventDefault(e);
        focusInput();
        updateInput = true;
        move(); up();
      }
      var move = connect(document, "mousemove", operation(function(e) {
        clearTimeout(going);
        e_preventDefault(e);
        if (!ie && !e_button(e)) done(e);
        else extend(e);
      }), true);
      var up = connect(document, "mouseup", operation(done), true);
    }
    function onDoubleClick(e) {
      for (var n = e_target(e); n != wrapper; n = n.parentNode)
        if (n.parentNode == gutterText) return e_preventDefault(e);
      var start = posFromMouse(e);
      if (!start) return;
      lastDoubleClick = {time: +new Date, pos: start};
      e_preventDefault(e);
      selectWordAt(start);
    }
    function onDrop(e) {
      if (options.onDragEvent && options.onDragEvent(instance, addStop(e))) return;
      e.preventDefault();
      var pos = posFromMouse(e, true), files = e.dataTransfer.files;
      if (!pos || options.readOnly) return;
      if (files && files.length && window.FileReader && window.File) {
        function loadFile(file, i) {
          var reader = new FileReader;
          reader.onload = function() {
            text[i] = reader.result;
            if (++read == n) {
              pos = clipPos(pos);
              operation(function() {
                var end = replaceRange(text.join(""), pos, pos);
                setSelectionUser(pos, end);
              })();
            }
          };
          reader.readAsText(file);
        }
        var n = files.length, text = Array(n), read = 0;
        for (var i = 0; i < n; ++i) loadFile(files[i], i);
      }
      else {
        try {
          var text = e.dataTransfer.getData("Text");
          if (text) {
            compoundChange(function() {
              var curFrom = sel.from, curTo = sel.to;
              setSelectionUser(pos, pos);
              if (draggingText) replaceRange("", curFrom, curTo);
              replaceSelection(text);
              focusInput();
            });
          }
        }
        catch(e){}
      }
    }
    function onDragStart(e) {
      var txt = getSelection();
      e.dataTransfer.setData("Text", txt);
      
      // Use dummy image instead of default browsers image.
      if (gecko || chrome) {
        var img = document.createElement('img');
        img.scr = 'data:image/gif;base64,R0lGODdhAgACAIAAAAAAAP///ywAAAAAAgACAAACAoRRADs='; //1x1 image
        e.dataTransfer.setDragImage(img, 0, 0);
      }
    }

    function doHandleBinding(bound, dropShift) {
      if (typeof bound == "string") {
        bound = commands[bound];
        if (!bound) return false;
      }
      var prevShift = shiftSelecting;
      try {
        if (options.readOnly) suppressEdits = true;
        if (dropShift) shiftSelecting = null;
        bound(instance);
      } catch(e) {
        if (e != Pass) throw e;
        return false;
      } finally {
        shiftSelecting = prevShift;
        suppressEdits = false;
      }
      return true;
    }
    function handleKeyBinding(e) {
      // Handle auto keymap transitions
      var startMap = getKeyMap(options.keyMap), next = startMap.auto;
      clearTimeout(maybeTransition);
      if (next && !isModifierKey(e)) maybeTransition = setTimeout(function() {
        if (getKeyMap(options.keyMap) == startMap) {
          options.keyMap = (next.call ? next.call(null, instance) : next);
        }
      }, 50);

      var name = keyNames[e_prop(e, "keyCode")], handled = false;
      if (name == null || e.altGraphKey) return false;
      if (e_prop(e, "altKey")) name = "Alt-" + name;
      if (e_prop(e, "ctrlKey")) name = "Ctrl-" + name;
      if (e_prop(e, "metaKey")) name = "Cmd-" + name;

      var stopped = false;
      function stop() { stopped = true; }

      if (e_prop(e, "shiftKey")) {
        handled = lookupKey("Shift-" + name, options.extraKeys, options.keyMap,
                            function(b) {return doHandleBinding(b, true);}, stop)
               || lookupKey(name, options.extraKeys, options.keyMap, function(b) {
                 if (typeof b == "string" && /^go[A-Z]/.test(b)) return doHandleBinding(b);
               }, stop);
      } else {
        handled = lookupKey(name, options.extraKeys, options.keyMap, doHandleBinding, stop);
      }
      if (stopped) handled = false;
      if (handled) {
        e_preventDefault(e);
        restartBlink();
        if (ie) { e.oldKeyCode = e.keyCode; e.keyCode = 0; }
      }
      return handled;
    }
    function handleCharBinding(e, ch) {
      var handled = lookupKey("'" + ch + "'", options.extraKeys,
                              options.keyMap, function(b) { return doHandleBinding(b, true); });
      if (handled) {
        e_preventDefault(e);
        restartBlink();
      }
      return handled;
    }

    var lastStoppedKey = null, maybeTransition;
    function onKeyDown(e) {
      if (!focused) onFocus();
      if (ie && e.keyCode == 27) { e.returnValue = false; }
      if (pollingFast) { if (readInput()) pollingFast = false; }
      if (options.onKeyEvent && options.onKeyEvent(instance, addStop(e))) return;
      var code = e_prop(e, "keyCode");
      // IE does strange things with escape.
      setShift(code == 16 || e_prop(e, "shiftKey"));
      // First give onKeyEvent option a chance to handle this.
      var handled = handleKeyBinding(e);
      if (window.opera) {
        lastStoppedKey = handled ? code : null;
        // Opera has no cut event... we try to at least catch the key combo
        if (!handled && code == 88 && e_prop(e, mac ? "metaKey" : "ctrlKey"))
          replaceSelection("");
      }
    }
    function onKeyPress(e) {
      if (pollingFast) readInput();
      if (options.onKeyEvent && options.onKeyEvent(instance, addStop(e))) return;
      var keyCode = e_prop(e, "keyCode"), charCode = e_prop(e, "charCode");
      if (window.opera && keyCode == lastStoppedKey) {lastStoppedKey = null; e_preventDefault(e); return;}
      if (((window.opera && (!e.which || e.which < 10)) || khtml) && handleKeyBinding(e)) return;
      var ch = String.fromCharCode(charCode == null ? keyCode : charCode);
      if (options.electricChars && mode.electricChars && options.smartIndent && !options.readOnly) {
        if (mode.electricChars.indexOf(ch) > -1)
          setTimeout(operation(function() {indentLine(sel.to.line, "smart");}), 75);
      }
      if (handleCharBinding(e, ch)) return;
      fastPoll();
    }
    function onKeyUp(e) {
      if (options.onKeyEvent && options.onKeyEvent(instance, addStop(e))) return;
      if (e_prop(e, "keyCode") == 16) shiftSelecting = null;
    }

    function onFocus() {
      if (options.readOnly == "nocursor") return;
      if (!focused) {
        if (options.onFocus) options.onFocus(instance);
        focused = true;
        if (wrapper.className.search(/\bCodeMirror-focused\b/) == -1)
          wrapper.className += " CodeMirror-focused";
        if (!leaveInputAlone) resetInput(true);
      }
      slowPoll();
      restartBlink();
    }
    function onBlur() {
      if (focused) {
        if (options.onBlur) options.onBlur(instance);
        focused = false;
        if (bracketHighlighted)
          operation(function(){
            if (bracketHighlighted) { bracketHighlighted(); bracketHighlighted = null; }
          })();
        wrapper.className = wrapper.className.replace(" CodeMirror-focused", "");
      }
      clearInterval(blinker);
      setTimeout(function() {if (!focused) shiftSelecting = null;}, 150);
    }

    // Replace the range from from to to by the strings in newText.
    // Afterwards, set the selection to selFrom, selTo.
    function updateLines(from, to, newText, selFrom, selTo) {
      if (suppressEdits) return;
      if (history) {
        var old = [];
        doc.iter(from.line, to.line + 1, function(line) { old.push(line.text); });
        history.addChange(from.line, newText.length, old);
        while (history.done.length > options.undoDepth) history.done.shift();
      }
      updateLinesNoUndo(from, to, newText, selFrom, selTo);
    }
    function unredoHelper(from, to) {
      if (!from.length) return;
      var set = from.pop(), out = [];
      for (var i = set.length - 1; i >= 0; i -= 1) {
        var change = set[i];
        var replaced = [], end = change.start + change.added;
        doc.iter(change.start, end, function(line) { replaced.push(line.text); });
        out.push({start: change.start, added: change.old.length, old: replaced});
        var pos = clipPos({line: change.start + change.old.length - 1,
                           ch: editEnd(replaced[replaced.length-1], change.old[change.old.length-1])});
        updateLinesNoUndo({line: change.start, ch: 0}, {line: end - 1, ch: getLine(end-1).text.length}, change.old, pos, pos);
      }
      updateInput = true;
      to.push(out);
    }
    function undo() {unredoHelper(history.done, history.undone);}
    function redo() {unredoHelper(history.undone, history.done);}

    function updateLinesNoUndo(from, to, newText, selFrom, selTo) {
      if (suppressEdits) return;
      var recomputeMaxLength = false, maxLineLength = maxLine.length;
      if (!options.lineWrapping)
        doc.iter(from.line, to.line + 1, function(line) {
          if (!line.hidden && line.text.length == maxLineLength) {recomputeMaxLength = true; return true;}
        });
      if (from.line != to.line || newText.length > 1) gutterDirty = true;

      var nlines = to.line - from.line, firstLine = getLine(from.line), lastLine = getLine(to.line);
      // First adjust the line structure, taking some care to leave highlighting intact.
      if (from.ch == 0 && to.ch == 0 && newText[newText.length - 1] == "") {
        // This is a whole-line replace. Treated specially to make
        // sure line objects move the way they are supposed to.
        var added = [], prevLine = null;
        if (from.line) {
          prevLine = getLine(from.line - 1);
          prevLine.fixMarkEnds(lastLine);
        } else lastLine.fixMarkStarts();
        for (var i = 0, e = newText.length - 1; i < e; ++i)
          added.push(Line.inheritMarks(newText[i], prevLine));
        if (nlines) doc.remove(from.line, nlines, callbacks);
        if (added.length) doc.insert(from.line, added);
      } else if (firstLine == lastLine) {
        if (newText.length == 1)
          firstLine.replace(from.ch, to.ch, newText[0]);
        else {
          lastLine = firstLine.split(to.ch, newText[newText.length-1]);
          firstLine.replace(from.ch, null, newText[0]);
          firstLine.fixMarkEnds(lastLine);
          var added = [];
          for (var i = 1, e = newText.length - 1; i < e; ++i)
            added.push(Line.inheritMarks(newText[i], firstLine));
          added.push(lastLine);
          doc.insert(from.line + 1, added);
        }
      } else if (newText.length == 1) {
        firstLine.replace(from.ch, null, newText[0]);
        lastLine.replace(null, to.ch, "");
        firstLine.append(lastLine);
        doc.remove(from.line + 1, nlines, callbacks);
      } else {
        var added = [];
        firstLine.replace(from.ch, null, newText[0]);
        lastLine.replace(null, to.ch, newText[newText.length-1]);
        firstLine.fixMarkEnds(lastLine);
        for (var i = 1, e = newText.length - 1; i < e; ++i)
          added.push(Line.inheritMarks(newText[i], firstLine));
        if (nlines > 1) doc.remove(from.line + 1, nlines - 1, callbacks);
        doc.insert(from.line + 1, added);
      }
      if (options.lineWrapping) {
        var perLine = Math.max(5, scroller.clientWidth / charWidth() - 3);
        doc.iter(from.line, from.line + newText.length, function(line) {
          if (line.hidden) return;
          var guess = Math.ceil(line.text.length / perLine) || 1;
          if (guess != line.height) updateLineHeight(line, guess);
        });
      } else {
        doc.iter(from.line, from.line + newText.length, function(line) {
          var l = line.text;
          if (!line.hidden && l.length > maxLineLength) {
            maxLine = l; maxLineLength = l.length; maxWidth = null;
            recomputeMaxLength = false;
          }
        });
        if (recomputeMaxLength) maxLengthChanged = true;
      }

      // Add these lines to the work array, so that they will be
      // highlighted. Adjust work lines if lines were added/removed.
      var newWork = [], lendiff = newText.length - nlines - 1;
      for (var i = 0, l = work.length; i < l; ++i) {
        var task = work[i];
        if (task < from.line) newWork.push(task);
        else if (task > to.line) newWork.push(task + lendiff);
      }
      var hlEnd = from.line + Math.min(newText.length, 500);
      highlightLines(from.line, hlEnd);
      newWork.push(hlEnd);
      work = newWork;
      startWorker(100);
      // Remember that these lines changed, for updating the display
      changes.push({from: from.line, to: to.line + 1, diff: lendiff});
      var changeObj = {from: from, to: to, text: newText};
      if (textChanged) {
        for (var cur = textChanged; cur.next; cur = cur.next) {}
        cur.next = changeObj;
      } else textChanged = changeObj;

      // Update the selection
      function updateLine(n) {return n <= Math.min(to.line, to.line + lendiff) ? n : n + lendiff;}
      setSelection(selFrom, selTo, updateLine(sel.from.line), updateLine(sel.to.line));

      // Make sure the scroll-size div has the correct height.
      if (scroller.clientHeight)
        code.style.height = (doc.height * textHeight() + 2 * paddingTop()) + "px";
    }
    
    function computeMaxLength() {
      var maxLineLength = 0; 
      maxLine = ""; maxWidth = null;
      doc.iter(0, doc.size, function(line) {
        var l = line.text;
        if (!line.hidden && l.length > maxLineLength) {
          maxLineLength = l.length; maxLine = l;
        }
      });
      maxLengthChanged = false;
    }

    function replaceRange(code, from, to) {
      from = clipPos(from);
      if (!to) to = from; else to = clipPos(to);
      code = splitLines(code);
      function adjustPos(pos) {
        if (posLess(pos, from)) return pos;
        if (!posLess(to, pos)) return end;
        var line = pos.line + code.length - (to.line - from.line) - 1;
        var ch = pos.ch;
        if (pos.line == to.line)
          ch += code[code.length-1].length - (to.ch - (to.line == from.line ? from.ch : 0));
        return {line: line, ch: ch};
      }
      var end;
      replaceRange1(code, from, to, function(end1) {
        end = end1;
        return {from: adjustPos(sel.from), to: adjustPos(sel.to)};
      });
      return end;
    }
    function replaceSelection(code, collapse) {
      replaceRange1(splitLines(code), sel.from, sel.to, function(end) {
        if (collapse == "end") return {from: end, to: end};
        else if (collapse == "start") return {from: sel.from, to: sel.from};
        else return {from: sel.from, to: end};
      });
    }
    function replaceRange1(code, from, to, computeSel) {
      var endch = code.length == 1 ? code[0].length + from.ch : code[code.length-1].length;
      var newSel = computeSel({line: from.line + code.length - 1, ch: endch});
      updateLines(from, to, code, newSel.from, newSel.to);
    }

    function getRange(from, to) {
      var l1 = from.line, l2 = to.line;
      if (l1 == l2) return getLine(l1).text.slice(from.ch, to.ch);
      var code = [getLine(l1).text.slice(from.ch)];
      doc.iter(l1 + 1, l2, function(line) { code.push(line.text); });
      code.push(getLine(l2).text.slice(0, to.ch));
      return code.join("\n");
    }
    function getSelection() {
      return getRange(sel.from, sel.to);
    }

    var pollingFast = false; // Ensures slowPoll doesn't cancel fastPoll
    function slowPoll() {
      if (pollingFast) return;
      poll.set(options.pollInterval, function() {
        startOperation();
        readInput();
        if (focused) slowPoll();
        endOperation();
      });
    }
    function fastPoll() {
      var missed = false;
      pollingFast = true;
      function p() {
        startOperation();
        var changed = readInput();
        if (!changed && !missed) {missed = true; poll.set(60, p);}
        else {pollingFast = false; slowPoll();}
        endOperation();
      }
      poll.set(20, p);
    }

    // Previnput is a hack to work with IME. If we reset the textarea
    // on every change, that breaks IME. So we look for changes
    // compared to the previous content instead. (Modern browsers have
    // events that indicate IME taking place, but these are not widely
    // supported or compatible enough yet to rely on.)
    var prevInput = "";
    function readInput() {
      if (leaveInputAlone || !focused || hasSelection(input) || options.readOnly) return false;
      var text = input.value;
      if (text == prevInput) return false;
      shiftSelecting = null;
      var same = 0, l = Math.min(prevInput.length, text.length);
      while (same < l && prevInput[same] == text[same]) ++same;
      if (same < prevInput.length)
        sel.from = {line: sel.from.line, ch: sel.from.ch - (prevInput.length - same)};
      else if (overwrite && posEq(sel.from, sel.to))
        sel.to = {line: sel.to.line, ch: Math.min(getLine(sel.to.line).text.length, sel.to.ch + (text.length - same))};
      replaceSelection(text.slice(same), "end");
      if (text.length > 1000) { input.value = prevInput = ""; }
      else prevInput = text;
      return true;
    }
    function resetInput(user) {
      if (!posEq(sel.from, sel.to)) {
        prevInput = "";
        input.value = getSelection();
        selectInput(input);
      } else if (user) prevInput = input.value = "";
    }

    function focusInput() {
      if (options.readOnly != "nocursor") input.focus();
    }

    function scrollEditorIntoView() {
      if (!cursor.getBoundingClientRect) return;
      var rect = cursor.getBoundingClientRect();
      // IE returns bogus coordinates when the instance sits inside of an iframe and the cursor is hidden
      if (ie && rect.top == rect.bottom) return;
      var winH = window.innerHeight || Math.max(document.body.offsetHeight, document.documentElement.offsetHeight);
      if (rect.top < 0 || rect.bottom > winH) cursor.scrollIntoView();
    }
    function scrollCursorIntoView() {
      var cursor = localCoords(sel.inverted ? sel.from : sel.to);
      var x = options.lineWrapping ? Math.min(cursor.x, lineSpace.offsetWidth) : cursor.x;
      return scrollIntoView(x, cursor.y, x, cursor.yBot);
    }
    function scrollIntoView(x1, y1, x2, y2) {
      var pl = paddingLeft(), pt = paddingTop();
      y1 += pt; y2 += pt; x1 += pl; x2 += pl;
      var screen = scroller.clientHeight, screentop = scroller.scrollTop, scrolled = false, result = true;
      if (y1 < screentop) {scroller.scrollTop = Math.max(0, y1); scrolled = true;}
      else if (y2 > screentop + screen) {scroller.scrollTop = y2 - screen; scrolled = true;}

      var screenw = scroller.clientWidth, screenleft = scroller.scrollLeft;
      var gutterw = options.fixedGutter ? gutter.clientWidth : 0;
      var atLeft = x1 < gutterw + pl + 10;
      if (x1 < screenleft + gutterw || atLeft) {
        if (atLeft) x1 = 0;
        scroller.scrollLeft = Math.max(0, x1 - 10 - gutterw);
        scrolled = true;
      }
      else if (x2 > screenw + screenleft - 3) {
        scroller.scrollLeft = x2 + 10 - screenw;
        scrolled = true;
        if (x2 > code.clientWidth) result = false;
      }
      if (scrolled && options.onScroll) options.onScroll(instance);
      return result;
    }

    function visibleLines() {
      var lh = textHeight(), top = scroller.scrollTop - paddingTop();
      var fromHeight = Math.max(0, Math.floor(top / lh));
      var toHeight = Math.ceil((top + scroller.clientHeight) / lh);
      return {from: lineAtHeight(doc, fromHeight),
              to: lineAtHeight(doc, toHeight)};
    }
    // Uses a set of changes plus the current scroll position to
    // determine which DOM updates have to be made, and makes the
    // updates.
    function updateDisplay(changes, suppressCallback) {
      if (!scroller.clientWidth) {
        showingFrom = showingTo = displayOffset = 0;
        return;
      }
      // Compute the new visible window
      var visible = visibleLines();
      // Bail out if the visible area is already rendered and nothing changed.
      if (changes !== true && changes.length == 0 && visible.from > showingFrom && visible.to < showingTo) return;
      var from = Math.max(visible.from - 100, 0), to = Math.min(doc.size, visible.to + 100);
      if (showingFrom < from && from - showingFrom < 20) from = showingFrom;
      if (showingTo > to && showingTo - to < 20) to = Math.min(doc.size, showingTo);

      // Create a range of theoretically intact lines, and punch holes
      // in that using the change info.
      var intact = changes === true ? [] :
        computeIntact([{from: showingFrom, to: showingTo, domStart: 0}], changes);
      // Clip off the parts that won't be visible
      var intactLines = 0;
      for (var i = 0; i < intact.length; ++i) {
        var range = intact[i];
        if (range.from < from) {range.domStart += (from - range.from); range.from = from;}
        if (range.to > to) range.to = to;
        if (range.from >= range.to) intact.splice(i--, 1);
        else intactLines += range.to - range.from;
      }
      if (intactLines == to - from && from == showingFrom && to == showingTo) return;
      intact.sort(function(a, b) {return a.domStart - b.domStart;});

      var th = textHeight(), gutterDisplay = gutter.style.display;
      lineDiv.style.display = "none";
      patchDisplay(from, to, intact);
      lineDiv.style.display = gutter.style.display = "";

      // Position the mover div to align with the lines it's supposed
      // to be showing (which will cover the visible display)
      var different = from != showingFrom || to != showingTo || lastSizeC != scroller.clientHeight + th;
      // This is just a bogus formula that detects when the editor is
      // resized or the font size changes.
      if (different) lastSizeC = scroller.clientHeight + th;
      showingFrom = from; showingTo = to;
      displayOffset = heightAtLine(doc, from);
      mover.style.top = (displayOffset * th) + "px";
      if (scroller.clientHeight)
        code.style.height = (doc.height * th + 2 * paddingTop()) + "px";

      // Since this is all rather error prone, it is honoured with the
      // only assertion in the whole file.
      if (lineDiv.childNodes.length != showingTo - showingFrom)
        throw new Error("BAD PATCH! " + JSON.stringify(intact) + " size=" + (showingTo - showingFrom) +
                        " nodes=" + lineDiv.childNodes.length);

      function checkHeights() {
        maxWidth = scroller.clientWidth;
        var curNode = lineDiv.firstChild, heightChanged = false;
        doc.iter(showingFrom, showingTo, function(line) {
          if (!line.hidden) {
            var height = Math.round(curNode.offsetHeight / th) || 1;
            if (line.height != height) {
              updateLineHeight(line, height);
              gutterDirty = heightChanged = true;
            }
          }
          curNode = curNode.nextSibling;
        });
        if (heightChanged)
          code.style.height = (doc.height * th + 2 * paddingTop()) + "px";
        return heightChanged;
      }

      if (options.lineWrapping) {
        checkHeights();
      } else {
        if (maxWidth == null) maxWidth = stringWidth(maxLine);
        if (maxWidth > scroller.clientWidth) {
          lineSpace.style.width = maxWidth + "px";
          // Needed to prevent odd wrapping/hiding of widgets placed in here.
          code.style.width = "";
          code.style.width = scroller.scrollWidth + "px";
        } else {
          lineSpace.style.width = code.style.width = "";
        }
      }

      gutter.style.display = gutterDisplay;
      if (different || gutterDirty) {
        // If the gutter grew in size, re-check heights. If those changed, re-draw gutter.
        updateGutter() && options.lineWrapping && checkHeights() && updateGutter();
      }
      updateSelection();
      if (!suppressCallback && options.onUpdate) options.onUpdate(instance);
      return true;
    }

    function computeIntact(intact, changes) {
      for (var i = 0, l = changes.length || 0; i < l; ++i) {
        var change = changes[i], intact2 = [], diff = change.diff || 0;
        for (var j = 0, l2 = intact.length; j < l2; ++j) {
          var range = intact[j];
          if (change.to <= range.from && change.diff)
            intact2.push({from: range.from + diff, to: range.to + diff,
                          domStart: range.domStart});
          else if (change.to <= range.from || change.from >= range.to)
            intact2.push(range);
          else {
            if (change.from > range.from)
              intact2.push({from: range.from, to: change.from, domStart: range.domStart});
            if (change.to < range.to)
              intact2.push({from: change.to + diff, to: range.to + diff,
                            domStart: range.domStart + (change.to - range.from)});
          }
        }
        intact = intact2;
      }
      return intact;
    }

    function patchDisplay(from, to, intact) {
      // The first pass removes the DOM nodes that aren't intact.
      if (!intact.length) lineDiv.innerHTML = "";
      else {
        function killNode(node) {
          var tmp = node.nextSibling;
          node.parentNode.removeChild(node);
          return tmp;
        }
        var domPos = 0, curNode = lineDiv.firstChild, n;
        for (var i = 0; i < intact.length; ++i) {
          var cur = intact[i];
          while (cur.domStart > domPos) {curNode = killNode(curNode); domPos++;}
          for (var j = 0, e = cur.to - cur.from; j < e; ++j) {curNode = curNode.nextSibling; domPos++;}
        }
        while (curNode) curNode = killNode(curNode);
      }
      // This pass fills in the lines that actually changed.
      var nextIntact = intact.shift(), curNode = lineDiv.firstChild, j = from;
      var scratch = document.createElement("div");
      doc.iter(from, to, function(line) {
        if (nextIntact && nextIntact.to == j) nextIntact = intact.shift();
        if (!nextIntact || nextIntact.from > j) {
          if (line.hidden) var html = scratch.innerHTML = "<pre></pre>";
          else {
            var html = '<pre' + (line.className ? ' class="' + line.className + '"' : '') + '>'
              + line.getHTML(makeTab) + '</pre>';
            // Kludge to make sure the styled element lies behind the selection (by z-index)
            if (line.bgClassName)
              html = '<div style="position: relative"><pre class="' + line.bgClassName +
              '" style="position: absolute; left: 0; right: 0; top: 0; bottom: 0; z-index: -2">&#160;</pre>' + html + "</div>";
          }
          scratch.innerHTML = html;
          lineDiv.insertBefore(scratch.firstChild, curNode);
        } else {
          curNode = curNode.nextSibling;
        }
        ++j;
      });
    }

    function updateGutter() {
      if (!options.gutter && !options.lineNumbers) return;
      var hText = mover.offsetHeight, hEditor = scroller.clientHeight;
      gutter.style.height = (hText - hEditor < 2 ? hEditor : hText) + "px";
      var html = [], i = showingFrom, normalNode;
      doc.iter(showingFrom, Math.max(showingTo, showingFrom + 1), function(line) {
        if (line.hidden) {
          html.push("<pre></pre>");
        } else {
          var marker = line.gutterMarker;
          var text = options.lineNumbers ? i + options.firstLineNumber : null;
          if (marker && marker.text)
            text = marker.text.replace("%N%", text != null ? text : "");
          else if (text == null)
            text = "\u00a0";
          html.push((marker && marker.style ? '<pre class="' + marker.style + '">' : "<pre>"), text);
          for (var j = 1; j < line.height; ++j) html.push("<br/>&#160;");
          html.push("</pre>");
          if (!marker) normalNode = i;
        }
        ++i;
      });
      gutter.style.display = "none";
      gutterText.innerHTML = html.join("");
      // Make sure scrolling doesn't cause number gutter size to pop
      if (normalNode != null) {
        var node = gutterText.childNodes[normalNode - showingFrom];
        var minwidth = String(doc.size).length, val = eltText(node), pad = "";
        while (val.length + pad.length < minwidth) pad += "\u00a0";
        if (pad) node.insertBefore(document.createTextNode(pad), node.firstChild);
      }
      gutter.style.display = "";
      var resized = Math.abs((parseInt(lineSpace.style.marginLeft) || 0) - gutter.offsetWidth) > 2;
      lineSpace.style.marginLeft = gutter.offsetWidth + "px";
      gutterDirty = false;
      return resized;
    }
    function updateSelection() {
      var collapsed = posEq(sel.from, sel.to);
      var fromPos = localCoords(sel.from, true);
      var toPos = collapsed ? fromPos : localCoords(sel.to, true);
      var headPos = sel.inverted ? fromPos : toPos, th = textHeight();
      var wrapOff = eltOffset(wrapper), lineOff = eltOffset(lineDiv);
      inputDiv.style.top = Math.max(0, Math.min(scroller.offsetHeight, headPos.y + lineOff.top - wrapOff.top)) + "px";
      inputDiv.style.left = Math.max(0, Math.min(scroller.offsetWidth, headPos.x + lineOff.left - wrapOff.left)) + "px";
      if (collapsed) {
        cursor.style.top = headPos.y + "px";
        cursor.style.left = (options.lineWrapping ? Math.min(headPos.x, lineSpace.offsetWidth) : headPos.x) + "px";
        cursor.style.display = "";
        selectionDiv.style.display = "none";
      } else {
        var sameLine = fromPos.y == toPos.y, html = "";
        var clientWidth = lineSpace.clientWidth || lineSpace.offsetWidth;
        var clientHeight = lineSpace.clientHeight || lineSpace.offsetHeight;
        function add(left, top, right, height) {
          var rstyle = quirksMode ? "width: " + (!right ? clientWidth : clientWidth - right - left) + "px"
                                  : "right: " + right + "px";
          html += '<div class="CodeMirror-selected" style="position: absolute; left: ' + left +
            'px; top: ' + top + 'px; ' + rstyle + '; height: ' + height + 'px"></div>';
        }
        if (sel.from.ch && fromPos.y >= 0) {
          var right = sameLine ? clientWidth - toPos.x : 0;
          add(fromPos.x, fromPos.y, right, th);
        }
        var middleStart = Math.max(0, fromPos.y + (sel.from.ch ? th : 0));
        var middleHeight = Math.min(toPos.y, clientHeight) - middleStart;
        if (middleHeight > 0.2 * th)
          add(0, middleStart, 0, middleHeight);
        if ((!sameLine || !sel.from.ch) && toPos.y < clientHeight - .5 * th)
          add(0, toPos.y, clientWidth - toPos.x, th);
        selectionDiv.innerHTML = html;
        cursor.style.display = "none";
        selectionDiv.style.display = "";
      }
    }

    function setShift(val) {
      if (val) shiftSelecting = shiftSelecting || (sel.inverted ? sel.to : sel.from);
      else shiftSelecting = null;
    }
    function setSelectionUser(from, to) {
      var sh = shiftSelecting && clipPos(shiftSelecting);
      if (sh) {
        if (posLess(sh, from)) from = sh;
        else if (posLess(to, sh)) to = sh;
      }
      setSelection(from, to);
      userSelChange = true;
    }
    // Update the selection. Last two args are only used by
    // updateLines, since they have to be expressed in the line
    // numbers before the update.
    function setSelection(from, to, oldFrom, oldTo) {
      goalColumn = null;
      if (oldFrom == null) {oldFrom = sel.from.line; oldTo = sel.to.line;}
      if (posEq(sel.from, from) && posEq(sel.to, to)) return;
      if (posLess(to, from)) {var tmp = to; to = from; from = tmp;}

      // Skip over hidden lines.
      if (from.line != oldFrom) {
        var from1 = skipHidden(from, oldFrom, sel.from.ch);
        // If there is no non-hidden line left, force visibility on current line
        if (!from1) setLineHidden(from.line, false);
        else from = from1;
      }
      if (to.line != oldTo) to = skipHidden(to, oldTo, sel.to.ch);

      if (posEq(from, to)) sel.inverted = false;
      else if (posEq(from, sel.to)) sel.inverted = false;
      else if (posEq(to, sel.from)) sel.inverted = true;

      if (options.autoClearEmptyLines && posEq(sel.from, sel.to)) {
        var head = sel.inverted ? from : to;
        if (head.line != sel.from.line && sel.from.line < doc.size) {
          var oldLine = getLine(sel.from.line);
          if (/^\s+$/.test(oldLine.text))
            setTimeout(operation(function() {
              if (oldLine.parent && /^\s+$/.test(oldLine.text)) {
                var no = lineNo(oldLine);
                replaceRange("", {line: no, ch: 0}, {line: no, ch: oldLine.text.length});
              }
            }, 10));
        }
      }

      sel.from = from; sel.to = to;
      selectionChanged = true;
    }
    function skipHidden(pos, oldLine, oldCh) {
      function getNonHidden(dir) {
        var lNo = pos.line + dir, end = dir == 1 ? doc.size : -1;
        while (lNo != end) {
          var line = getLine(lNo);
          if (!line.hidden) {
            var ch = pos.ch;
            if (toEnd || ch > oldCh || ch > line.text.length) ch = line.text.length;
            return {line: lNo, ch: ch};
          }
          lNo += dir;
        }
      }
      var line = getLine(pos.line);
      var toEnd = pos.ch == line.text.length && pos.ch != oldCh;
      if (!line.hidden) return pos;
      if (pos.line >= oldLine) return getNonHidden(1) || getNonHidden(-1);
      else return getNonHidden(-1) || getNonHidden(1);
    }
    function setCursor(line, ch, user) {
      var pos = clipPos({line: line, ch: ch || 0});
      (user ? setSelectionUser : setSelection)(pos, pos);
    }

    function clipLine(n) {return Math.max(0, Math.min(n, doc.size-1));}
    function clipPos(pos) {
      if (pos.line < 0) return {line: 0, ch: 0};
      if (pos.line >= doc.size) return {line: doc.size-1, ch: getLine(doc.size-1).text.length};
      var ch = pos.ch, linelen = getLine(pos.line).text.length;
      if (ch == null || ch > linelen) return {line: pos.line, ch: linelen};
      else if (ch < 0) return {line: pos.line, ch: 0};
      else return pos;
    }

    function findPosH(dir, unit) {
      var end = sel.inverted ? sel.from : sel.to, line = end.line, ch = end.ch;
      var lineObj = getLine(line);
      function findNextLine() {
        for (var l = line + dir, e = dir < 0 ? -1 : doc.size; l != e; l += dir) {
          var lo = getLine(l);
          if (!lo.hidden) { line = l; lineObj = lo; return true; }
        }
      }
      function moveOnce(boundToLine) {
        if (ch == (dir < 0 ? 0 : lineObj.text.length)) {
          if (!boundToLine && findNextLine()) ch = dir < 0 ? lineObj.text.length : 0;
          else return false;
        } else ch += dir;
        return true;
      }
      if (unit == "char") moveOnce();
      else if (unit == "column") moveOnce(true);
      else if (unit == "word") {
        var sawWord = false;
        for (;;) {
          if (dir < 0) if (!moveOnce()) break;
          if (isWordChar(lineObj.text.charAt(ch))) sawWord = true;
          else if (sawWord) {if (dir < 0) {dir = 1; moveOnce();} break;}
          if (dir > 0) if (!moveOnce()) break;
        }
      }
      return {line: line, ch: ch};
    }
    function moveH(dir, unit) {
      var pos = dir < 0 ? sel.from : sel.to;
      if (shiftSelecting || posEq(sel.from, sel.to)) pos = findPosH(dir, unit);
      setCursor(pos.line, pos.ch, true);
    }
    function deleteH(dir, unit) {
      if (!posEq(sel.from, sel.to)) replaceRange("", sel.from, sel.to);
      else if (dir < 0) replaceRange("", findPosH(dir, unit), sel.to);
      else replaceRange("", sel.from, findPosH(dir, unit));
      userSelChange = true;
    }
    var goalColumn = null;
    function moveV(dir, unit) {
      var dist = 0, pos = localCoords(sel.inverted ? sel.from : sel.to, true);
      if (goalColumn != null) pos.x = goalColumn;
      if (unit == "page") dist = Math.min(scroller.clientHeight, window.innerHeight || document.documentElement.clientHeight);
      else if (unit == "line") dist = textHeight();
      var target = coordsChar(pos.x, pos.y + dist * dir + 2);
      if (unit == "page") scroller.scrollTop += localCoords(target, true).y - pos.y;
      setCursor(target.line, target.ch, true);
      goalColumn = pos.x;
    }

    function selectWordAt(pos) {
      var line = getLine(pos.line).text;
      var start = pos.ch, end = pos.ch;
      while (start > 0 && isWordChar(line.charAt(start - 1))) --start;
      while (end < line.length && isWordChar(line.charAt(end))) ++end;
      setSelectionUser({line: pos.line, ch: start}, {line: pos.line, ch: end});
    }
    function selectLine(line) {
      setSelectionUser({line: line, ch: 0}, clipPos({line: line + 1, ch: 0}));
    }
    function indentSelected(mode) {
      if (posEq(sel.from, sel.to)) return indentLine(sel.from.line, mode);
      var e = sel.to.line - (sel.to.ch ? 0 : 1);
      for (var i = sel.from.line; i <= e; ++i) indentLine(i, mode);
    }

    function indentLine(n, how) {
      if (!how) how = "add";
      if (how == "smart") {
        if (!mode.indent) how = "prev";
        else var state = getStateBefore(n);
      }

      var line = getLine(n), curSpace = line.indentation(options.tabSize),
          curSpaceString = line.text.match(/^\s*/)[0], indentation;
      if (how == "prev") {
        if (n) indentation = getLine(n-1).indentation(options.tabSize);
        else indentation = 0;
      }
      else if (how == "smart") indentation = mode.indent(state, line.text.slice(curSpaceString.length), line.text);
      else if (how == "add") indentation = curSpace + options.indentUnit;
      else if (how == "subtract") indentation = curSpace - options.indentUnit;
      indentation = Math.max(0, indentation);
      var diff = indentation - curSpace;

      if (!diff) {
        if (sel.from.line != n && sel.to.line != n) return;
        var indentString = curSpaceString;
      }
      else {
        var indentString = "", pos = 0;
        if (options.indentWithTabs)
          for (var i = Math.floor(indentation / options.tabSize); i; --i) {pos += options.tabSize; indentString += "\t";}
        while (pos < indentation) {++pos; indentString += " ";}
      }

      replaceRange(indentString, {line: n, ch: 0}, {line: n, ch: curSpaceString.length});
    }

    function loadMode() {
      mode = CodeMirror.getMode(options, options.mode);
      doc.iter(0, doc.size, function(line) { line.stateAfter = null; });
      work = [0];
      startWorker();
    }
    function gutterChanged() {
      var visible = options.gutter || options.lineNumbers;
      gutter.style.display = visible ? "" : "none";
      if (visible) gutterDirty = true;
      else lineDiv.parentNode.style.marginLeft = 0;
    }
    function wrappingChanged(from, to) {
      if (options.lineWrapping) {
        wrapper.className += " CodeMirror-wrap";
        var perLine = scroller.clientWidth / charWidth() - 3;
        doc.iter(0, doc.size, function(line) {
          if (line.hidden) return;
          var guess = Math.ceil(line.text.length / perLine) || 1;
          if (guess != 1) updateLineHeight(line, guess);
        });
        lineSpace.style.width = code.style.width = "";
      } else {
        wrapper.className = wrapper.className.replace(" CodeMirror-wrap", "");
        maxWidth = null; maxLine = "";
        doc.iter(0, doc.size, function(line) {
          if (line.height != 1 && !line.hidden) updateLineHeight(line, 1);
          if (line.text.length > maxLine.length) maxLine = line.text;
        });
      }
      changes.push({from: 0, to: doc.size});
    }
    function makeTab(col) {
      var w = options.tabSize - col % options.tabSize, cached = tabCache[w];
      if (cached) return cached;
      for (var str = '<span class="cm-tab">', i = 0; i < w; ++i) str += " ";
      return (tabCache[w] = {html: str + "</span>", width: w});
    }
    function themeChanged() {
      scroller.className = scroller.className.replace(/\s*cm-s-\S+/g, "") +
        options.theme.replace(/(^|\s)\s*/g, " cm-s-");
    }
    function keyMapChanged() {
      var style = keyMap[options.keyMap].style;
      wrapper.className = wrapper.className.replace(/\s*cm-keymap-\S+/g, "") +
        (style ? " cm-keymap-" + style : "");
    }

    function TextMarker() { this.set = []; }
    TextMarker.prototype.clear = operation(function() {
      var min = Infinity, max = -Infinity;
      for (var i = 0, e = this.set.length; i < e; ++i) {
        var line = this.set[i], mk = line.marked;
        if (!mk || !line.parent) continue;
        var lineN = lineNo(line);
        min = Math.min(min, lineN); max = Math.max(max, lineN);
        for (var j = 0; j < mk.length; ++j)
          if (mk[j].marker == this) mk.splice(j--, 1);
      }
      if (min != Infinity)
        changes.push({from: min, to: max + 1});
    });
    TextMarker.prototype.find = function() {
      var from, to;
      for (var i = 0, e = this.set.length; i < e; ++i) {
        var line = this.set[i], mk = line.marked;
        for (var j = 0; j < mk.length; ++j) {
          var mark = mk[j];
          if (mark.marker == this) {
            if (mark.from != null || mark.to != null) {
              var found = lineNo(line);
              if (found != null) {
                if (mark.from != null) from = {line: found, ch: mark.from};
                if (mark.to != null) to = {line: found, ch: mark.to};
              }
            }
          }
        }
      }
      return {from: from, to: to};
    };

    function markText(from, to, className) {
      from = clipPos(from); to = clipPos(to);
      var tm = new TextMarker();
      if (!posLess(from, to)) return tm;
      function add(line, from, to, className) {
        getLine(line).addMark(new MarkedText(from, to, className, tm));
      }
      if (from.line == to.line) add(from.line, from.ch, to.ch, className);
      else {
        add(from.line, from.ch, null, className);
        for (var i = from.line + 1, e = to.line; i < e; ++i)
          add(i, null, null, className);
        add(to.line, null, to.ch, className);
      }
      changes.push({from: from.line, to: to.line + 1});
      return tm;
    }

    function setBookmark(pos) {
      pos = clipPos(pos);
      var bm = new Bookmark(pos.ch);
      getLine(pos.line).addMark(bm);
      return bm;
    }

    function findMarksAt(pos) {
      pos = clipPos(pos);
      var markers = [], marked = getLine(pos.line).marked;
      if (!marked) return markers;
      for (var i = 0, e = marked.length; i < e; ++i) {
        var m = marked[i];
        if ((m.from == null || m.from <= pos.ch) &&
            (m.to == null || m.to >= pos.ch))
          markers.push(m.marker || m);
      }
      return markers;
    }

    function addGutterMarker(line, text, className) {
      if (typeof line == "number") line = getLine(clipLine(line));
      line.gutterMarker = {text: text, style: className};
      gutterDirty = true;
      return line;
    }
    function removeGutterMarker(line) {
      if (typeof line == "number") line = getLine(clipLine(line));
      line.gutterMarker = null;
      gutterDirty = true;
    }

    function changeLine(handle, op) {
      var no = handle, line = handle;
      if (typeof handle == "number") line = getLine(clipLine(handle));
      else no = lineNo(handle);
      if (no == null) return null;
      if (op(line, no)) changes.push({from: no, to: no + 1});
      else return null;
      return line;
    }
    function setLineClass(handle, className, bgClassName) {
      return changeLine(handle, function(line) {
        if (line.className != className || line.bgClassName != bgClassName) {
          line.className = className;
          line.bgClassName = bgClassName;
          return true;
        }
      });
    }
    function setLineHidden(handle, hidden) {
      return changeLine(handle, function(line, no) {
        if (line.hidden != hidden) {
          line.hidden = hidden;
          if (!options.lineWrapping) {
            var l = line.text;
            if (hidden && l.length == maxLine.length) {
              maxLengthChanged = true;
            }
            else if (!hidden && l.length > maxLine.length) {
              maxLine = l; maxWidth = null;
              maxLengthChanged = false;
            }
          }
          updateLineHeight(line, hidden ? 0 : 1);
          var fline = sel.from.line, tline = sel.to.line;
          if (hidden && (fline == no || tline == no)) {
            var from = fline == no ? skipHidden({line: fline, ch: 0}, fline, 0) : sel.from;
            var to = tline == no ? skipHidden({line: tline, ch: 0}, tline, 0) : sel.to;
            // Can't hide the last visible line, we'd have no place to put the cursor
            if (!to) return;
            setSelection(from, to);
          }
          return (gutterDirty = true);
        }
      });
    }

    function lineInfo(line) {
      if (typeof line == "number") {
        if (!isLine(line)) return null;
        var n = line;
        line = getLine(line);
        if (!line) return null;
      }
      else {
        var n = lineNo(line);
        if (n == null) return null;
      }
      var marker = line.gutterMarker;
      return {line: n, handle: line, text: line.text, markerText: marker && marker.text,
              markerClass: marker && marker.style, lineClass: line.className, bgClass: line.bgClassName};
    }

    function stringWidth(str) {
      measure.innerHTML = "<pre><span>x</span></pre>";
      measure.firstChild.firstChild.firstChild.nodeValue = str;
      return measure.firstChild.firstChild.offsetWidth || 10;
    }
    // These are used to go from pixel positions to character
    // positions, taking varying character widths into account.
    function charFromX(line, x) {
      if (x <= 0) return 0;
      var lineObj = getLine(line), text = lineObj.text;
      function getX(len) {
        return measureLine(lineObj, len).left;
      }
      var from = 0, fromX = 0, to = text.length, toX;
      // Guess a suitable upper bound for our search.
      var estimated = Math.min(to, Math.ceil(x / charWidth()));
      for (;;) {
        var estX = getX(estimated);
        if (estX <= x && estimated < to) estimated = Math.min(to, Math.ceil(estimated * 1.2));
        else {toX = estX; to = estimated; break;}
      }
      if (x > toX) return to;
      // Try to guess a suitable lower bound as well.
      estimated = Math.floor(to * 0.8); estX = getX(estimated);
      if (estX < x) {from = estimated; fromX = estX;}
      // Do a binary search between these bounds.
      for (;;) {
        if (to - from <= 1) return (toX - x > x - fromX) ? from : to;
        var middle = Math.ceil((from + to) / 2), middleX = getX(middle);
        if (middleX > x) {to = middle; toX = middleX;}
        else {from = middle; fromX = middleX;}
      }
    }

    var tempId = "CodeMirror-temp-" + Math.floor(Math.random() * 0xffffff).toString(16);
    function measureLine(line, ch) {
      if (ch == 0) return {top: 0, left: 0};
      var wbr = options.lineWrapping && ch < line.text.length &&
                spanAffectsWrapping.test(line.text.slice(ch - 1, ch + 1));
      measure.innerHTML = "<pre>" + line.getHTML(makeTab, ch, tempId, wbr) + "</pre>";
      var elt = document.getElementById(tempId);
      if (!elt) {
        // Temporary workaround for:
        // https://github.com/mozilla/webpagemaker/issues/394
        if (window.console) {
          if (window.console.warn)
            window.console.warn("elt is null for ch " + ch + " of line " +
                                JSON.stringify(line.text));
          if (window.console.trace)
            window.console.trace();
        }
        return {top: 0, left: 0};
      }
      var top = elt.offsetTop, left = elt.offsetLeft;
      // Older IEs report zero offsets for spans directly after a wrap
      if (ie && top == 0 && left == 0) {
        var backup = document.createElement("span");
        backup.innerHTML = "x";
        elt.parentNode.insertBefore(backup, elt.nextSibling);
        top = backup.offsetTop;
      }
      return {top: top, left: left};
    }
    function localCoords(pos, inLineWrap) {
      var x, lh = textHeight(), y = lh * (heightAtLine(doc, pos.line) - (inLineWrap ? displayOffset : 0));
      if (pos.ch == 0) x = 0;
      else {
        var sp = measureLine(getLine(pos.line), pos.ch);
        x = sp.left;
        if (options.lineWrapping) y += Math.max(0, sp.top);
      }
      return {x: x, y: y, yBot: y + lh};
    }
    // Coords must be lineSpace-local
    function coordsChar(x, y) {
      if (y < 0) y = 0;
      var th = textHeight(), cw = charWidth(), heightPos = displayOffset + Math.floor(y / th);
      var lineNo = lineAtHeight(doc, heightPos);
      if (lineNo >= doc.size) return {line: doc.size - 1, ch: getLine(doc.size - 1).text.length};
      var lineObj = getLine(lineNo), text = lineObj.text;
      var tw = options.lineWrapping, innerOff = tw ? heightPos - heightAtLine(doc, lineNo) : 0;
      if (x <= 0 && innerOff == 0) return {line: lineNo, ch: 0};
      function getX(len) {
        var sp = measureLine(lineObj, len);
        if (tw) {
          var off = Math.round(sp.top / th);
          return Math.max(0, sp.left + (off - innerOff) * scroller.clientWidth);
        }
        return sp.left;
      }
      var from = 0, fromX = 0, to = text.length, toX;
      // Guess a suitable upper bound for our search.
      var estimated = Math.min(to, Math.ceil((x + innerOff * scroller.clientWidth * .9) / cw));
      for (;;) {
        var estX = getX(estimated);
        if (estX <= x && estimated < to) estimated = Math.min(to, Math.ceil(estimated * 1.2));
        else {toX = estX; to = estimated; break;}
      }
      if (x > toX) return {line: lineNo, ch: to};
      // Try to guess a suitable lower bound as well.
      estimated = Math.floor(to * 0.8); estX = getX(estimated);
      if (estX < x) {from = estimated; fromX = estX;}
      // Do a binary search between these bounds.
      for (;;) {
        if (to - from <= 1) return {line: lineNo, ch: (toX - x > x - fromX) ? from : to};
        var middle = Math.ceil((from + to) / 2), middleX = getX(middle);
        if (middleX > x) {to = middle; toX = middleX;}
        else {from = middle; fromX = middleX;}
      }
    }
    function pageCoords(pos) {
      var local = localCoords(pos, true), off = eltOffset(lineSpace);
      return {x: off.left + local.x, y: off.top + local.y, yBot: off.top + local.yBot};
    }

    var cachedHeight, cachedHeightFor, measureText;
    function textHeight() {
      if (measureText == null) {
        measureText = "<pre>";
        for (var i = 0; i < 49; ++i) measureText += "x<br/>";
        measureText += "x</pre>";
      }
      var offsetHeight = lineDiv.clientHeight;
      if (offsetHeight == cachedHeightFor) return cachedHeight;
      cachedHeightFor = offsetHeight;
      measure.innerHTML = measureText;
      cachedHeight = measure.firstChild.offsetHeight / 50 || 1;
      measure.innerHTML = "";
      return cachedHeight;
    }
    var cachedWidth, cachedWidthFor = 0;
    function charWidth() {
      if (scroller.clientWidth == cachedWidthFor) return cachedWidth;
      cachedWidthFor = scroller.clientWidth;
      return (cachedWidth = stringWidth("x"));
    }
    function paddingTop() {return lineSpace.offsetTop;}
    function paddingLeft() {return lineSpace.offsetLeft;}

    function posFromMouse(e, liberal) {
      var offW = eltOffset(scroller, true), x, y;
      // Fails unpredictably on IE[67] when mouse is dragged around quickly.
      try { x = e.clientX; y = e.clientY; } catch (e) { return null; }
      // This is a mess of a heuristic to try and determine whether a
      // scroll-bar was clicked or not, and to return null if one was
      // (and !liberal).
      if (!liberal && (x - offW.left > scroller.clientWidth || y - offW.top > scroller.clientHeight))
        return null;
      var offL = eltOffset(lineSpace, true);
      return coordsChar(x - offL.left, y - offL.top);
    }
    function onContextMenu(e) {
      var pos = posFromMouse(e), scrollPos = scroller.scrollTop;
      if (!pos || window.opera) return; // Opera is difficult.
      if (posEq(sel.from, sel.to) || posLess(pos, sel.from) || !posLess(pos, sel.to))
        operation(setCursor)(pos.line, pos.ch);

      var oldCSS = input.style.cssText;
      inputDiv.style.position = "absolute";
      input.style.cssText = "position: fixed; width: 30px; height: 30px; top: " + (e.clientY - 5) +
        "px; left: " + (e.clientX - 5) + "px; z-index: 1000; background: white; " +
        "border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);";
      leaveInputAlone = true;
      var val = input.value = getSelection();
      focusInput();
      selectInput(input);
      function rehide() {
        var newVal = splitLines(input.value).join("\n");
        if (newVal != val) operation(replaceSelection)(newVal, "end");
        inputDiv.style.position = "relative";
        input.style.cssText = oldCSS;
        if (ie_lt9) scroller.scrollTop = scrollPos;
        leaveInputAlone = false;
        resetInput(true);
        slowPoll();
      }

      if (gecko) {
        e_stop(e);
        var mouseup = connect(window, "mouseup", function() {
          mouseup();
          setTimeout(rehide, 20);
        }, true);
      } else {
        setTimeout(rehide, 50);
      }
    }

    // Cursor-blinking
    function restartBlink() {
      clearInterval(blinker);
      var on = true;
      cursor.style.visibility = "";
      blinker = setInterval(function() {
        cursor.style.visibility = (on = !on) ? "" : "hidden";
      }, 650);
    }

    var matching = {"(": ")>", ")": "(<", "[": "]>", "]": "[<", "{": "}>", "}": "{<"};
    function matchBrackets(autoclear) {
      var head = sel.inverted ? sel.from : sel.to, line = getLine(head.line), pos = head.ch - 1;
      var match = (pos >= 0 && matching[line.text.charAt(pos)]) || matching[line.text.charAt(++pos)];
      if (!match) return;
      var ch = match.charAt(0), forward = match.charAt(1) == ">", d = forward ? 1 : -1, st = line.styles;
      for (var off = pos + 1, i = 0, e = st.length; i < e; i+=2)
        if ((off -= st[i].length) <= 0) {var style = st[i+1]; break;}

      var stack = [line.text.charAt(pos)], re = /[(){}[\]]/;
      function scan(line, from, to) {
        if (!line.text) return;
        var st = line.styles, pos = forward ? 0 : line.text.length - 1, cur;
        for (var i = forward ? 0 : st.length - 2, e = forward ? st.length : -2; i != e; i += 2*d) {
          var text = st[i];
          if (st[i+1] != null && st[i+1] != style) {pos += d * text.length; continue;}
          for (var j = forward ? 0 : text.length - 1, te = forward ? text.length : -1; j != te; j += d, pos+=d) {
            if (pos >= from && pos < to && re.test(cur = text.charAt(j))) {
              var match = matching[cur];
              if (match.charAt(1) == ">" == forward) stack.push(cur);
              else if (stack.pop() != match.charAt(0)) return {pos: pos, match: false};
              else if (!stack.length) return {pos: pos, match: true};
            }
          }
        }
      }
      for (var i = head.line, e = forward ? Math.min(i + 100, doc.size) : Math.max(-1, i - 100); i != e; i+=d) {
        var line = getLine(i), first = i == head.line;
        var found = scan(line, first && forward ? pos + 1 : 0, first && !forward ? pos : line.text.length);
        if (found) break;
      }
      if (!found) found = {pos: null, match: false};
      var style = found.match ? "CodeMirror-matchingbracket" : "CodeMirror-nonmatchingbracket";
      var one = markText({line: head.line, ch: pos}, {line: head.line, ch: pos+1}, style),
          two = found.pos != null && markText({line: i, ch: found.pos}, {line: i, ch: found.pos + 1}, style);
      var clear = operation(function(){one.clear(); two && two.clear();});
      if (autoclear) setTimeout(clear, 800);
      else bracketHighlighted = clear;
    }

    // Finds the line to start with when starting a parse. Tries to
    // find a line with a stateAfter, so that it can start with a
    // valid state. If that fails, it returns the line with the
    // smallest indentation, which tends to need the least context to
    // parse correctly.
    function findStartLine(n) {
      var minindent, minline;
      for (var search = n, lim = n - 40; search > lim; --search) {
        if (search == 0) return 0;
        var line = getLine(search-1);
        if (line.stateAfter) return search;
        var indented = line.indentation(options.tabSize);
        if (minline == null || minindent > indented) {
          minline = search - 1;
          minindent = indented;
        }
      }
      return minline;
    }
    function getStateBefore(n) {
      var start = findStartLine(n), state = start && getLine(start-1).stateAfter;
      if (!state) state = startState(mode);
      else state = copyState(mode, state);
      doc.iter(start, n, function(line) {
        line.highlight(mode, state, options.tabSize);
        line.stateAfter = copyState(mode, state);
      });
      if (start < n) changes.push({from: start, to: n});
      if (n < doc.size && !getLine(n).stateAfter) work.push(n);
      return state;
    }
    function highlightLines(start, end) {
      var state = getStateBefore(start);
      doc.iter(start, end, function(line) {
        line.highlight(mode, state, options.tabSize);
        line.stateAfter = copyState(mode, state);
      });
    }
    function highlightWorker() {
      var end = +new Date + options.workTime;
      var foundWork = work.length;
      while (work.length) {
        if (!getLine(showingFrom).stateAfter) var task = showingFrom;
        else var task = work.pop();
        if (task >= doc.size) continue;
        var start = findStartLine(task), state = start && getLine(start-1).stateAfter;
        if (state) state = copyState(mode, state);
        else state = startState(mode);

        var unchanged = 0, compare = mode.compareStates, realChange = false,
            i = start, bail = false;
        doc.iter(i, doc.size, function(line) {
          var hadState = line.stateAfter;
          if (+new Date > end) {
            work.push(i);
            startWorker(options.workDelay);
            if (realChange) changes.push({from: task, to: i + 1});
            return (bail = true);
          }
          var changed = line.highlight(mode, state, options.tabSize);
          if (changed) realChange = true;
          line.stateAfter = copyState(mode, state);
          var done = null;
          if (compare) {
            var same = hadState && compare(hadState, state);
            if (same != Pass) done = !!same;
          }
          if (done == null) {
            if (changed !== false || !hadState) unchanged = 0;
            else if (++unchanged > 3 && (!mode.indent || mode.indent(hadState, "") == mode.indent(state, "")))
              done = true;
          }
          if (done) return true;
          ++i;
        });
        if (bail) return;
        if (realChange) changes.push({from: task, to: i + 1});
      }
      if (foundWork && options.onHighlightComplete)
        options.onHighlightComplete(instance);
    }
    function startWorker(time) {
      if (!work.length) return;
      highlight.set(time, operation(highlightWorker));
    }

    // Operations are used to wrap changes in such a way that each
    // change won't have to update the cursor and display (which would
    // be awkward, slow, and error-prone), but instead updates are
    // batched and then all combined and executed at once.
    function startOperation() {
      updateInput = userSelChange = textChanged = null;
      changes = []; selectionChanged = false; callbacks = [];
    }
    function endOperation() {
      var reScroll = false, updated;
      if (maxLengthChanged) computeMaxLength();
      if (selectionChanged) reScroll = !scrollCursorIntoView();
      if (changes.length) updated = updateDisplay(changes, true);
      else {
        if (selectionChanged) updateSelection();
        if (gutterDirty) updateGutter();
      }
      if (reScroll) scrollCursorIntoView();
      if (selectionChanged) {scrollEditorIntoView(); restartBlink();}

      if (focused && !leaveInputAlone &&
          (updateInput === true || (updateInput !== false && selectionChanged)))
        resetInput(userSelChange);

      if (selectionChanged && options.matchBrackets)
        setTimeout(operation(function() {
          if (bracketHighlighted) {bracketHighlighted(); bracketHighlighted = null;}
          if (posEq(sel.from, sel.to)) matchBrackets(false);
        }), 20);
      var tc = textChanged, cbs = callbacks; // these can be reset by callbacks
      if (selectionChanged && options.onCursorActivity)
        options.onCursorActivity(instance);
      if (tc && options.onChange && instance)
        options.onChange(instance, tc);
      for (var i = 0; i < cbs.length; ++i) cbs[i](instance);
      if (updated && options.onUpdate) options.onUpdate(instance);
    }
    var nestedOperation = 0;
    function operation(f) {
      return function() {
        if (!nestedOperation++) startOperation();
        try {var result = f.apply(this, arguments);}
        finally {if (!--nestedOperation) endOperation();}
        return result;
      };
    }

    function compoundChange(f) {
      history.startCompound();
      try { return f(); } finally { history.endCompound(); }
    }

    for (var ext in extensions)
      if (extensions.propertyIsEnumerable(ext) &&
          !instance.propertyIsEnumerable(ext))
        instance[ext] = extensions[ext];
    return instance;
  } // (end of function CodeMirror)

  // The default configuration options.
  CodeMirror.defaults = {
    value: "",
    mode: null,
    theme: "default",
    indentUnit: 2,
    indentWithTabs: false,
    smartIndent: true,
    tabSize: 4,
    keyMap: "default",
    extraKeys: null,
    electricChars: true,
    autoClearEmptyLines: false,
    onKeyEvent: null,
    onDragEvent: null,
    lineWrapping: false,
    lineNumbers: false,
    gutter: false,
    fixedGutter: false,
    firstLineNumber: 1,
    readOnly: false,
    dragDrop: true,
    onChange: null,
    onCursorActivity: null,
    onGutterClick: null,
    onHighlightComplete: null,
    onUpdate: null,
    onFocus: null, onBlur: null, onScroll: null,
    matchBrackets: false,
    workTime: 100,
    workDelay: 200,
    pollInterval: 100,
    undoDepth: 40,
    tabindex: null,
    autofocus: null
  };

  var ios = /AppleWebKit/.test(navigator.userAgent) && /Mobile\/\w+/.test(navigator.userAgent);
  var mac = ios || /Mac/.test(navigator.platform);
  var win = /Win/.test(navigator.platform);

  // Known modes, by name and by MIME
  var modes = CodeMirror.modes = {}, mimeModes = CodeMirror.mimeModes = {};
  CodeMirror.defineMode = function(name, mode) {
    if (!CodeMirror.defaults.mode && name != "null") CodeMirror.defaults.mode = name;
    if (arguments.length > 2) {
      mode.dependencies = [];
      for (var i = 2; i < arguments.length; ++i) mode.dependencies.push(arguments[i]);
    }
    modes[name] = mode;
  };
  CodeMirror.defineMIME = function(mime, spec) {
    mimeModes[mime] = spec;
  };
  CodeMirror.resolveMode = function(spec) {
    if (typeof spec == "string" && mimeModes.hasOwnProperty(spec))
      spec = mimeModes[spec];
    else if (typeof spec == "string" && /^[\w\-]+\/[\w\-]+\+xml$/.test(spec))
      return CodeMirror.resolveMode("application/xml");
    if (typeof spec == "string") return {name: spec};
    else return spec || {name: "null"};
  };
  CodeMirror.getMode = function(options, spec) {
    var spec = CodeMirror.resolveMode(spec);
    var mfactory = modes[spec.name];
    if (!mfactory) return CodeMirror.getMode(options, "text/plain");
    return mfactory(options, spec);
  };
  CodeMirror.listModes = function() {
    var list = [];
    for (var m in modes)
      if (modes.propertyIsEnumerable(m)) list.push(m);
    return list;
  };
  CodeMirror.listMIMEs = function() {
    var list = [];
    for (var m in mimeModes)
      if (mimeModes.propertyIsEnumerable(m)) list.push({mime: m, mode: mimeModes[m]});
    return list;
  };

  var extensions = CodeMirror.extensions = {};
  CodeMirror.defineExtension = function(name, func) {
    extensions[name] = func;
  };

  var commands = CodeMirror.commands = {
    selectAll: function(cm) {cm.setSelection({line: 0, ch: 0}, {line: cm.lineCount() - 1});},
    killLine: function(cm) {
      var from = cm.getCursor(true), to = cm.getCursor(false), sel = !posEq(from, to);
      if (!sel && cm.getLine(from.line).length == from.ch) cm.replaceRange("", from, {line: from.line + 1, ch: 0});
      else cm.replaceRange("", from, sel ? to : {line: from.line});
    },
    deleteLine: function(cm) {var l = cm.getCursor().line; cm.replaceRange("", {line: l, ch: 0}, {line: l});},
    undo: function(cm) {cm.undo();},
    redo: function(cm) {cm.redo();},
    goDocStart: function(cm) {cm.setCursor(0, 0, true);},
    goDocEnd: function(cm) {cm.setSelection({line: cm.lineCount() - 1}, null, true);},
    goLineStart: function(cm) {cm.setCursor(cm.getCursor().line, 0, true);},
    goLineStartSmart: function(cm) {
      var cur = cm.getCursor();
      var text = cm.getLine(cur.line), firstNonWS = Math.max(0, text.search(/\S/));
      cm.setCursor(cur.line, cur.ch <= firstNonWS && cur.ch ? 0 : firstNonWS, true);
    },
    goLineEnd: function(cm) {cm.setSelection({line: cm.getCursor().line}, null, true);},
    goLineUp: function(cm) {cm.moveV(-1, "line");},
    goLineDown: function(cm) {cm.moveV(1, "line");},
    goPageUp: function(cm) {cm.moveV(-1, "page");},
    goPageDown: function(cm) {cm.moveV(1, "page");},
    goCharLeft: function(cm) {cm.moveH(-1, "char");},
    goCharRight: function(cm) {cm.moveH(1, "char");},
    goColumnLeft: function(cm) {cm.moveH(-1, "column");},
    goColumnRight: function(cm) {cm.moveH(1, "column");},
    goWordLeft: function(cm) {cm.moveH(-1, "word");},
    goWordRight: function(cm) {cm.moveH(1, "word");},
    delCharLeft: function(cm) {cm.deleteH(-1, "char");},
    delCharRight: function(cm) {cm.deleteH(1, "char");},
    delWordLeft: function(cm) {cm.deleteH(-1, "word");},
    delWordRight: function(cm) {cm.deleteH(1, "word");},
    indentAuto: function(cm) {cm.indentSelection("smart");},
    indentMore: function(cm) {cm.indentSelection("add");},
    indentLess: function(cm) {cm.indentSelection("subtract");},
    insertTab: function(cm) {cm.replaceSelection("\t", "end");},
    defaultTab: function(cm) {
      if (cm.somethingSelected()) cm.indentSelection("add");
      else cm.replaceSelection("\t", "end");
    },
    transposeChars: function(cm) {
      var cur = cm.getCursor(), line = cm.getLine(cur.line);
      if (cur.ch > 0 && cur.ch < line.length - 1)
        cm.replaceRange(line.charAt(cur.ch) + line.charAt(cur.ch - 1),
                        {line: cur.line, ch: cur.ch - 1}, {line: cur.line, ch: cur.ch + 1});
    },
    newlineAndIndent: function(cm) {
      cm.replaceSelection("\n", "end");
      cm.indentLine(cm.getCursor().line);
    },
    toggleOverwrite: function(cm) {cm.toggleOverwrite();}
  };

  var keyMap = CodeMirror.keyMap = {};
  keyMap.basic = {
    "Left": "goCharLeft", "Right": "goCharRight", "Up": "goLineUp", "Down": "goLineDown",
    "End": "goLineEnd", "Home": "goLineStartSmart", "PageUp": "goPageUp", "PageDown": "goPageDown",
    "Delete": "delCharRight", "Backspace": "delCharLeft", "Tab": "defaultTab", "Shift-Tab": "indentAuto",
    "Enter": "newlineAndIndent", "Insert": "toggleOverwrite"
  };
  // Note that the save and find-related commands aren't defined by
  // default. Unknown commands are simply ignored.
  keyMap.pcDefault = {
    "Ctrl-A": "selectAll", "Ctrl-D": "deleteLine", "Ctrl-Z": "undo", "Shift-Ctrl-Z": "redo", "Ctrl-Y": "redo",
    "Ctrl-Home": "goDocStart", "Alt-Up": "goDocStart", "Ctrl-End": "goDocEnd", "Ctrl-Down": "goDocEnd",
    "Ctrl-Left": "goWordLeft", "Ctrl-Right": "goWordRight", "Alt-Left": "goLineStart", "Alt-Right": "goLineEnd",
    "Ctrl-Backspace": "delWordLeft", "Ctrl-Delete": "delWordRight", "Ctrl-S": "save", "Ctrl-F": "find",
    "Ctrl-G": "findNext", "Shift-Ctrl-G": "findPrev", "Shift-Ctrl-F": "replace", "Shift-Ctrl-R": "replaceAll",
    "Ctrl-[": "indentLess", "Ctrl-]": "indentMore",
    fallthrough: "basic"
  };
  keyMap.macDefault = {
    "Cmd-A": "selectAll", "Cmd-D": "deleteLine", "Cmd-Z": "undo", "Shift-Cmd-Z": "redo", "Cmd-Y": "redo",
    "Cmd-Up": "goDocStart", "Cmd-End": "goDocEnd", "Cmd-Down": "goDocEnd", "Alt-Left": "goWordLeft",
    "Alt-Right": "goWordRight", "Cmd-Left": "goLineStart", "Cmd-Right": "goLineEnd", "Alt-Backspace": "delWordLeft",
    "Ctrl-Alt-Backspace": "delWordRight", "Alt-Delete": "delWordRight", "Cmd-S": "save", "Cmd-F": "find",
    "Cmd-G": "findNext", "Shift-Cmd-G": "findPrev", "Cmd-Alt-F": "replace", "Shift-Cmd-Alt-F": "replaceAll",
    "Cmd-[": "indentLess", "Cmd-]": "indentMore",
    fallthrough: ["basic", "emacsy"]
  };
  keyMap["default"] = mac ? keyMap.macDefault : keyMap.pcDefault;
  keyMap.emacsy = {
    "Ctrl-F": "goCharRight", "Ctrl-B": "goCharLeft", "Ctrl-P": "goLineUp", "Ctrl-N": "goLineDown",
    "Alt-F": "goWordRight", "Alt-B": "goWordLeft", "Ctrl-A": "goLineStart", "Ctrl-E": "goLineEnd",
    "Ctrl-V": "goPageUp", "Shift-Ctrl-V": "goPageDown", "Ctrl-D": "delCharRight", "Ctrl-H": "delCharLeft",
    "Alt-D": "delWordRight", "Alt-Backspace": "delWordLeft", "Ctrl-K": "killLine", "Ctrl-T": "transposeChars"
  };

  function getKeyMap(val) {
    if (typeof val == "string") return keyMap[val];
    else return val;
  }
  function lookupKey(name, extraMap, map, handle, stop) {
    function lookup(map) {
      map = getKeyMap(map);
      var found = map[name];
      if (found != null && handle(found)) return true;
      if (map.nofallthrough) {
        if (stop) stop();
        return true;
      }
      var fallthrough = map.fallthrough;
      if (fallthrough == null) return false;
      if (Object.prototype.toString.call(fallthrough) != "[object Array]")
        return lookup(fallthrough);
      for (var i = 0, e = fallthrough.length; i < e; ++i) {
        if (lookup(fallthrough[i])) return true;
      }
      return false;
    }
    if (extraMap && lookup(extraMap)) return true;
    return lookup(map);
  }
  function isModifierKey(event) {
    var name = keyNames[e_prop(event, "keyCode")];
    return name == "Ctrl" || name == "Alt" || name == "Shift" || name == "Mod";
  }

  CodeMirror.fromTextArea = function(textarea, options) {
    if (!options) options = {};
    options.value = textarea.value;
    if (!options.tabindex && textarea.tabindex)
      options.tabindex = textarea.tabindex;
    if (options.autofocus == null && textarea.getAttribute("autofocus") != null)
      options.autofocus = true;

    function save() {textarea.value = instance.getValue();}
    if (textarea.form) {
      // Deplorable hack to make the submit method do the right thing.
      var rmSubmit = connect(textarea.form, "submit", save, true);
      if (typeof textarea.form.submit == "function") {
        var realSubmit = textarea.form.submit;
        function wrappedSubmit() {
          save();
          textarea.form.submit = realSubmit;
          textarea.form.submit();
          textarea.form.submit = wrappedSubmit;
        }
        textarea.form.submit = wrappedSubmit;
      }
    }

    textarea.style.display = "none";
    var instance = CodeMirror(function(node) {
      textarea.parentNode.insertBefore(node, textarea.nextSibling);
    }, options);
    instance.save = save;
    instance.getTextArea = function() { return textarea; };
    instance.toTextArea = function() {
      save();
      textarea.parentNode.removeChild(instance.getWrapperElement());
      textarea.style.display = "";
      if (textarea.form) {
        rmSubmit();
        if (typeof textarea.form.submit == "function")
          textarea.form.submit = realSubmit;
      }
    };
    return instance;
  };

  // Utility functions for working with state. Exported because modes
  // sometimes need to do this.
  function copyState(mode, state) {
    if (state === true) return state;
    if (mode.copyState) return mode.copyState(state);
    var nstate = {};
    for (var n in state) {
      var val = state[n];
      if (val instanceof Array) val = val.concat([]);
      nstate[n] = val;
    }
    return nstate;
  }
  CodeMirror.copyState = copyState;
  function startState(mode, a1, a2) {
    return mode.startState ? mode.startState(a1, a2) : true;
  }
  CodeMirror.startState = startState;

  // The character stream used by a mode's parser.
  function StringStream(string, tabSize) {
    this.pos = this.start = 0;
    this.string = string;
    this.tabSize = tabSize || 8;
  }
  StringStream.prototype = {
    eol: function() {return this.pos >= this.string.length;},
    sol: function() {return this.pos == 0;},
    peek: function() {return this.string.charAt(this.pos);},
    next: function() {
      if (this.pos < this.string.length)
        return this.string.charAt(this.pos++);
    },
    eat: function(match) {
      var ch = this.string.charAt(this.pos);
      if (typeof match == "string") var ok = ch == match;
      else var ok = ch && (match.test ? match.test(ch) : match(ch));
      if (ok) {++this.pos; return ch;}
    },
    eatWhile: function(match) {
      var start = this.pos;
      while (this.eat(match)){}
      return this.pos > start;
    },
    eatSpace: function() {
      var start = this.pos;
      while (/[\s\u00a0]/.test(this.string.charAt(this.pos))) ++this.pos;
      return this.pos > start;
    },
    skipToEnd: function() {this.pos = this.string.length;},
    skipTo: function(ch) {
      var found = this.string.indexOf(ch, this.pos);
      if (found > -1) {this.pos = found; return true;}
    },
    backUp: function(n) {this.pos -= n;},
    column: function() {return countColumn(this.string, this.start, this.tabSize);},
    indentation: function() {return countColumn(this.string, null, this.tabSize);},
    match: function(pattern, consume, caseInsensitive) {
      if (typeof pattern == "string") {
        function cased(str) {return caseInsensitive ? str.toLowerCase() : str;}
        if (cased(this.string).indexOf(cased(pattern), this.pos) == this.pos) {
          if (consume !== false) this.pos += pattern.length;
          return true;
        }
      }
      else {
        var match = this.string.slice(this.pos).match(pattern);
        if (match && consume !== false) this.pos += match[0].length;
        return match;
      }
    },
    current: function(){return this.string.slice(this.start, this.pos);}
  };
  CodeMirror.StringStream = StringStream;

  function MarkedText(from, to, className, marker) {
    this.from = from; this.to = to; this.style = className; this.marker = marker;
  }
  MarkedText.prototype = {
    attach: function(line) { this.marker.set.push(line); },
    detach: function(line) {
      var ix = indexOf(this.marker.set, line);
      if (ix > -1) this.marker.set.splice(ix, 1);
    },
    split: function(pos, lenBefore) {
      if (this.to <= pos && this.to != null) return null;
      var from = this.from < pos || this.from == null ? null : this.from - pos + lenBefore;
      var to = this.to == null ? null : this.to - pos + lenBefore;
      return new MarkedText(from, to, this.style, this.marker);
    },
    dup: function() { return new MarkedText(null, null, this.style, this.marker); },
    clipTo: function(fromOpen, from, toOpen, to, diff) {
      if (fromOpen && to > this.from && (to < this.to || this.to == null))
        this.from = null;
      else if (this.from != null && this.from >= from)
        this.from = Math.max(to, this.from) + diff;
      if (toOpen && (from < this.to || this.to == null) && (from > this.from || this.from == null))
        this.to = null;
      else if (this.to != null && this.to > from)
        this.to = to < this.to ? this.to + diff : from;
    },
    isDead: function() { return this.from != null && this.to != null && this.from >= this.to; },
    sameSet: function(x) { return this.marker == x.marker; }
  };

  function Bookmark(pos) {
    this.from = pos; this.to = pos; this.line = null;
  }
  Bookmark.prototype = {
    attach: function(line) { this.line = line; },
    detach: function(line) { if (this.line == line) this.line = null; },
    split: function(pos, lenBefore) {
      if (pos < this.from) {
        this.from = this.to = (this.from - pos) + lenBefore;
        return this;
      }
    },
    isDead: function() { return this.from > this.to; },
    clipTo: function(fromOpen, from, toOpen, to, diff) {
      if ((fromOpen || from < this.from) && (toOpen || to > this.to)) {
        this.from = 0; this.to = -1;
      } else if (this.from > from) {
        this.from = this.to = Math.max(to, this.from) + diff;
      }
    },
    sameSet: function(x) { return false; },
    find: function() {
      if (!this.line || !this.line.parent) return null;
      return {line: lineNo(this.line), ch: this.from};
    },
    clear: function() {
      if (this.line) {
        var found = indexOf(this.line.marked, this);
        if (found != -1) this.line.marked.splice(found, 1);
        this.line = null;
      }
    }
  };

  // Line objects. These hold state related to a line, including
  // highlighting info (the styles array).
  function Line(text, styles) {
    this.styles = styles || [text, null];
    this.text = text;
    this.height = 1;
    this.marked = this.gutterMarker = this.className = this.bgClassName = this.handlers = null;
    this.stateAfter = this.parent = this.hidden = null;
  }
  Line.inheritMarks = function(text, orig) {
    var ln = new Line(text), mk = orig && orig.marked;
    if (mk) {
      for (var i = 0; i < mk.length; ++i) {
        if (mk[i].to == null && mk[i].style) {
          var newmk = ln.marked || (ln.marked = []), mark = mk[i];
          var nmark = mark.dup(); newmk.push(nmark); nmark.attach(ln);
        }
      }
    }
    return ln;
  }
  Line.prototype = {
    // Replace a piece of a line, keeping the styles around it intact.
    replace: function(from, to_, text) {
      var st = [], mk = this.marked, to = to_ == null ? this.text.length : to_;
      copyStyles(0, from, this.styles, st);
      if (text) st.push(text, null);
      copyStyles(to, this.text.length, this.styles, st);
      this.styles = st;
      this.text = this.text.slice(0, from) + text + this.text.slice(to);
      this.stateAfter = null;
      if (mk) {
        var diff = text.length - (to - from);
        for (var i = 0; i < mk.length; ++i) {
          var mark = mk[i];
          mark.clipTo(from == null, from || 0, to_ == null, to, diff);
          if (mark.isDead()) {mark.detach(this); mk.splice(i--, 1);}
        }
      }
    },
    // Split a part off a line, keeping styles and markers intact.
    split: function(pos, textBefore) {
      var st = [textBefore, null], mk = this.marked;
      copyStyles(pos, this.text.length, this.styles, st);
      var taken = new Line(textBefore + this.text.slice(pos), st);
      if (mk) {
        for (var i = 0; i < mk.length; ++i) {
          var mark = mk[i];
          var newmark = mark.split(pos, textBefore.length);
          if (newmark) {
            if (!taken.marked) taken.marked = [];
            taken.marked.push(newmark); newmark.attach(taken);
            if (newmark == mark) mk.splice(i--, 1);
          }
        }
      }
      return taken;
    },
    append: function(line) {
      var mylen = this.text.length, mk = line.marked, mymk = this.marked;
      this.text += line.text;
      copyStyles(0, line.text.length, line.styles, this.styles);
      if (mymk) {
        for (var i = 0; i < mymk.length; ++i)
          if (mymk[i].to == null) mymk[i].to = mylen;
      }
      if (mk && mk.length) {
        if (!mymk) this.marked = mymk = [];
        outer: for (var i = 0; i < mk.length; ++i) {
          var mark = mk[i];
          if (!mark.from) {
            for (var j = 0; j < mymk.length; ++j) {
              var mymark = mymk[j];
              if (mymark.to == mylen && mymark.sameSet(mark)) {
                mymark.to = mark.to == null ? null : mark.to + mylen;
                if (mymark.isDead()) {
                  mymark.detach(this);
                  mk.splice(i--, 1);
                }
                continue outer;
              }
            }
          }
          mymk.push(mark);
          mark.attach(this);
          mark.from += mylen;
          if (mark.to != null) mark.to += mylen;
        }
      }
    },
    fixMarkEnds: function(other) {
      var mk = this.marked, omk = other.marked;
      if (!mk) return;
      for (var i = 0; i < mk.length; ++i) {
        var mark = mk[i], close = mark.to == null;
        if (close && omk) {
          for (var j = 0; j < omk.length; ++j)
            if (omk[j].sameSet(mark)) {close = false; break;}
        }
        if (close) mark.to = this.text.length;
      }
    },
    fixMarkStarts: function() {
      var mk = this.marked;
      if (!mk) return;
      for (var i = 0; i < mk.length; ++i)
        if (mk[i].from == null) mk[i].from = 0;
    },
    addMark: function(mark) {
      mark.attach(this);
      if (this.marked == null) this.marked = [];
      this.marked.push(mark);
      this.marked.sort(function(a, b){return (a.from || 0) - (b.from || 0);});
    },
    // Run the given mode's parser over a line, update the styles
    // array, which contains alternating fragments of text and CSS
    // classes.
    highlight: function(mode, state, tabSize) {
      var stream = new StringStream(this.text, tabSize), st = this.styles, pos = 0;
      var changed = false, curWord = st[0], prevWord;
      if (this.text == "" && mode.blankLine) mode.blankLine(state);
      while (!stream.eol()) {
        var style = mode.token(stream, state);
        var substr = this.text.slice(stream.start, stream.pos);
        stream.start = stream.pos;
        if (pos && st[pos-1] == style)
          st[pos-2] += substr;
        else if (substr) {
          if (!changed && (st[pos+1] != style || (pos && st[pos-2] != prevWord))) changed = true;
          st[pos++] = substr; st[pos++] = style;
          prevWord = curWord; curWord = st[pos];
        }
        // Give up when line is ridiculously long
        if (stream.pos > 5000) {
          st[pos++] = this.text.slice(stream.pos); st[pos++] = null;
          break;
        }
      }
      if (st.length != pos) {st.length = pos; changed = true;}
      if (pos && st[pos-2] != prevWord) changed = true;
      // Short lines with simple highlights return null, and are
      // counted as changed by the driver because they are likely to
      // highlight the same way in various contexts.
      return changed || (st.length < 5 && this.text.length < 10 ? null : false);
    },
    // Fetch the parser token for a given character. Useful for hacks
    // that want to inspect the mode state (say, for completion).
    getTokenAt: function(mode, state, ch) {
      var txt = this.text, stream = new StringStream(txt);
      while (stream.pos < ch && !stream.eol()) {
        stream.start = stream.pos;
        var style = mode.token(stream, state);
      }
      return {start: stream.start,
              end: stream.pos,
              string: stream.current(),
              className: style || null,
              state: state};
    },
    indentation: function(tabSize) {return countColumn(this.text, null, tabSize);},
    // Produces an HTML fragment for the line, taking selection,
    // marking, and highlighting into account.
    getHTML: function(makeTab, wrapAt, wrapId, wrapWBR) {
      var html = [], first = true, col = 0;
      function span_(text, style) {
        if (!text) return;
        // Work around a bug where, in some compat modes, IE ignores leading spaces
        if (first && ie && text.charAt(0) == " ") text = "\u00a0" + text.slice(1);
        first = false;
        if (text.indexOf("\t") == -1) {
          col += text.length;
          var escaped = htmlEscape(text);
        } else {
          var escaped = "";
          for (var pos = 0;;) {
            var idx = text.indexOf("\t", pos);
            if (idx == -1) {
              escaped += htmlEscape(text.slice(pos));
              col += text.length - pos;
              break;
            } else {
              col += idx - pos;
              var tab = makeTab(col);
              escaped += htmlEscape(text.slice(pos, idx)) + tab.html;
              col += tab.width;
              pos = idx + 1;
            }
          }
        }
        if (style) html.push('<span class="', style, '">', escaped, "</span>");
        else html.push(escaped);
      }
      var span = span_;
      if (wrapAt != null) {
        var outPos = 0, open = "<span id=\"" + wrapId + "\">";
        span = function(text, style) {
          var l = text.length;
          if (wrapAt >= outPos && wrapAt < outPos + l) {
            if (wrapAt > outPos) {
              span_(text.slice(0, wrapAt - outPos), style);
              // See comment at the definition of spanAffectsWrapping
              if (wrapWBR) html.push("<wbr>");
            }
            html.push(open);
            var cut = wrapAt - outPos;
            span_(window.opera ? text.slice(cut, cut + 1) : text.slice(cut), style);
            html.push("</span>");
            if (window.opera) span_(text.slice(cut + 1), style);
            wrapAt--;
            outPos += l;
          } else {
            outPos += l;
            span_(text, style);
            // Output empty wrapper when at end of line
            if (outPos == wrapAt && outPos == len) html.push(open + " </span>");
            // Stop outputting HTML when gone sufficiently far beyond measure
            else if (outPos > wrapAt + 10 && /\s/.test(text)) span = function(){};
          }
        }
      }

      var st = this.styles, allText = this.text, marked = this.marked;
      var len = allText.length;
      function styleToClass(style) {
        if (!style) return null;
        return "cm-" + style.replace(/ +/g, " cm-");
      }

      if (!allText && wrapAt == null) {
        span(" ");
      } else if (!marked || !marked.length) {
        for (var i = 0, ch = 0; ch < len; i+=2) {
          var str = st[i], style = st[i+1], l = str.length;
          if (ch + l > len) str = str.slice(0, len - ch);
          ch += l;
          span(str, styleToClass(style));
        }
      } else {
        var pos = 0, i = 0, text = "", style, sg = 0;
        var nextChange = marked[0].from || 0, marks = [], markpos = 0;
        function advanceMarks() {
          var m;
          while (markpos < marked.length &&
                 ((m = marked[markpos]).from == pos || m.from == null)) {
            if (m.style != null) marks.push(m);
            ++markpos;
          }
          nextChange = markpos < marked.length ? marked[markpos].from : Infinity;
          for (var i = 0; i < marks.length; ++i) {
            var to = marks[i].to || Infinity;
            if (to == pos) marks.splice(i--, 1);
            else nextChange = Math.min(to, nextChange);
          }
        }
        var m = 0;
        while (pos < len) {
          if (nextChange == pos) advanceMarks();
          var upto = Math.min(len, nextChange);
          while (true) {
            if (text) {
              var end = pos + text.length;
              var appliedStyle = style;
              for (var j = 0; j < marks.length; ++j)
                appliedStyle = (appliedStyle ? appliedStyle + " " : "") + marks[j].style;
              span(end > upto ? text.slice(0, upto - pos) : text, appliedStyle);
              if (end >= upto) {text = text.slice(upto - pos); pos = upto; break;}
              pos = end;
            }
            text = st[i++]; style = styleToClass(st[i++]);
          }
        }
      }
      return html.join("");
    },
    cleanUp: function() {
      this.parent = null;
      if (this.marked)
        for (var i = 0, e = this.marked.length; i < e; ++i) this.marked[i].detach(this);
    }
  };
  // Utility used by replace and split above
  function copyStyles(from, to, source, dest) {
    for (var i = 0, pos = 0, state = 0; pos < to; i+=2) {
      var part = source[i], end = pos + part.length;
      if (state == 0) {
        if (end > from) dest.push(part.slice(from - pos, Math.min(part.length, to - pos)), source[i+1]);
        if (end >= from) state = 1;
      }
      else if (state == 1) {
        if (end > to) dest.push(part.slice(0, to - pos), source[i+1]);
        else dest.push(part, source[i+1]);
      }
      pos = end;
    }
  }

  // Data structure that holds the sequence of lines.
  function LeafChunk(lines) {
    this.lines = lines;
    this.parent = null;
    for (var i = 0, e = lines.length, height = 0; i < e; ++i) {
      lines[i].parent = this;
      height += lines[i].height;
    }
    this.height = height;
  }
  LeafChunk.prototype = {
    chunkSize: function() { return this.lines.length; },
    remove: function(at, n, callbacks) {
      for (var i = at, e = at + n; i < e; ++i) {
        var line = this.lines[i];
        this.height -= line.height;
        line.cleanUp();
        if (line.handlers)
          for (var j = 0; j < line.handlers.length; ++j) callbacks.push(line.handlers[j]);
      }
      this.lines.splice(at, n);
    },
    collapse: function(lines) {
      lines.splice.apply(lines, [lines.length, 0].concat(this.lines));
    },
    insertHeight: function(at, lines, height) {
      this.height += height;
      this.lines = this.lines.slice(0, at).concat(lines).concat(this.lines.slice(at));
      for (var i = 0, e = lines.length; i < e; ++i) lines[i].parent = this;
    },
    iterN: function(at, n, op) {
      for (var e = at + n; at < e; ++at)
        if (op(this.lines[at])) return true;
    }
  };
  function BranchChunk(children) {
    this.children = children;
    var size = 0, height = 0;
    for (var i = 0, e = children.length; i < e; ++i) {
      var ch = children[i];
      size += ch.chunkSize(); height += ch.height;
      ch.parent = this;
    }
    this.size = size;
    this.height = height;
    this.parent = null;
  }
  BranchChunk.prototype = {
    chunkSize: function() { return this.size; },
    remove: function(at, n, callbacks) {
      this.size -= n;
      for (var i = 0; i < this.children.length; ++i) {
        var child = this.children[i], sz = child.chunkSize();
        if (at < sz) {
          var rm = Math.min(n, sz - at), oldHeight = child.height;
          child.remove(at, rm, callbacks);
          this.height -= oldHeight - child.height;
          if (sz == rm) { this.children.splice(i--, 1); child.parent = null; }
          if ((n -= rm) == 0) break;
          at = 0;
        } else at -= sz;
      }
      if (this.size - n < 25) {
        var lines = [];
        this.collapse(lines);
        this.children = [new LeafChunk(lines)];
        this.children[0].parent = this;
      }
    },
    collapse: function(lines) {
      for (var i = 0, e = this.children.length; i < e; ++i) this.children[i].collapse(lines);
    },
    insert: function(at, lines) {
      var height = 0;
      for (var i = 0, e = lines.length; i < e; ++i) height += lines[i].height;
      this.insertHeight(at, lines, height);
    },
    insertHeight: function(at, lines, height) {
      this.size += lines.length;
      this.height += height;
      for (var i = 0, e = this.children.length; i < e; ++i) {
        var child = this.children[i], sz = child.chunkSize();
        if (at <= sz) {
          child.insertHeight(at, lines, height);
          if (child.lines && child.lines.length > 50) {
            while (child.lines.length > 50) {
              var spilled = child.lines.splice(child.lines.length - 25, 25);
              var newleaf = new LeafChunk(spilled);
              child.height -= newleaf.height;
              this.children.splice(i + 1, 0, newleaf);
              newleaf.parent = this;
            }
            this.maybeSpill();
          }
          break;
        }
        at -= sz;
      }
    },
    maybeSpill: function() {
      if (this.children.length <= 10) return;
      var me = this;
      do {
        var spilled = me.children.splice(me.children.length - 5, 5);
        var sibling = new BranchChunk(spilled);
        if (!me.parent) { // Become the parent node
          var copy = new BranchChunk(me.children);
          copy.parent = me;
          me.children = [copy, sibling];
          me = copy;
        } else {
          me.size -= sibling.size;
          me.height -= sibling.height;
          var myIndex = indexOf(me.parent.children, me);
          me.parent.children.splice(myIndex + 1, 0, sibling);
        }
        sibling.parent = me.parent;
      } while (me.children.length > 10);
      me.parent.maybeSpill();
    },
    iter: function(from, to, op) { this.iterN(from, to - from, op); },
    iterN: function(at, n, op) {
      for (var i = 0, e = this.children.length; i < e; ++i) {
        var child = this.children[i], sz = child.chunkSize();
        if (at < sz) {
          var used = Math.min(n, sz - at);
          if (child.iterN(at, used, op)) return true;
          if ((n -= used) == 0) break;
          at = 0;
        } else at -= sz;
      }
    }
  };

  function getLineAt(chunk, n) {
    while (!chunk.lines) {
      for (var i = 0;; ++i) {
        var child = chunk.children[i], sz = child.chunkSize();
        if (n < sz) { chunk = child; break; }
        n -= sz;
      }
    }
    return chunk.lines[n];
  }
  function lineNo(line) {
    if (line.parent == null) return null;
    var cur = line.parent, no = indexOf(cur.lines, line);
    for (var chunk = cur.parent; chunk; cur = chunk, chunk = chunk.parent) {
      for (var i = 0, e = chunk.children.length; ; ++i) {
        if (chunk.children[i] == cur) break;
        no += chunk.children[i].chunkSize();
      }
    }
    return no;
  }
  function lineAtHeight(chunk, h) {
    var n = 0;
    outer: do {
      for (var i = 0, e = chunk.children.length; i < e; ++i) {
        var child = chunk.children[i], ch = child.height;
        if (h < ch) { chunk = child; continue outer; }
        h -= ch;
        n += child.chunkSize();
      }
      return n;
    } while (!chunk.lines);
    for (var i = 0, e = chunk.lines.length; i < e; ++i) {
      var line = chunk.lines[i], lh = line.height;
      if (h < lh) break;
      h -= lh;
    }
    return n + i;
  }
  function heightAtLine(chunk, n) {
    var h = 0;
    outer: do {
      for (var i = 0, e = chunk.children.length; i < e; ++i) {
        var child = chunk.children[i], sz = child.chunkSize();
        if (n < sz) { chunk = child; continue outer; }
        n -= sz;
        h += child.height;
      }
      return h;
    } while (!chunk.lines);
    for (var i = 0; i < n; ++i) h += chunk.lines[i].height;
    return h;
  }

  // The history object 'chunks' changes that are made close together
  // and at almost the same time into bigger undoable units.
  function History() {
    this.time = 0;
    this.done = []; this.undone = [];
    this.compound = 0;
    this.closed = false;
  }
  History.prototype = {
    addChange: function(start, added, old) {
      this.undone.length = 0;
      var time = +new Date, cur = this.done[this.done.length - 1], last = cur && cur[cur.length - 1];
      var dtime = time - this.time;

      if (this.compound && cur && !this.closed) {
        cur.push({start: start, added: added, old: old});
      } else if (dtime > 400 || !last || this.closed ||
                 last.start > start + old.length || last.start + last.added < start) {
        this.done.push([{start: start, added: added, old: old}]);
        this.closed = false;
      } else {
        var startBefore = Math.max(0, last.start - start),
            endAfter = Math.max(0, (start + old.length) - (last.start + last.added));
        for (var i = startBefore; i > 0; --i) last.old.unshift(old[i - 1]);
        for (var i = endAfter; i > 0; --i) last.old.push(old[old.length - i]);
        if (startBefore) last.start = start;
        last.added += added - (old.length - startBefore - endAfter);
      }
      this.time = time;
    },
    startCompound: function() {
      if (!this.compound++) this.closed = true;
    },
    endCompound: function() {
      if (!--this.compound) this.closed = true;
    }
  };

  function stopMethod() {e_stop(this);}
  // Ensure an event has a stop method.
  function addStop(event) {
    if (!event.stop) event.stop = stopMethod;
    return event;
  }

  function e_preventDefault(e) {
    if (e.preventDefault) e.preventDefault();
    else e.returnValue = false;
  }
  function e_stopPropagation(e) {
    if (e.stopPropagation) e.stopPropagation();
    else e.cancelBubble = true;
  }
  function e_stop(e) {e_preventDefault(e); e_stopPropagation(e);}
  CodeMirror.e_stop = e_stop;
  CodeMirror.e_preventDefault = e_preventDefault;
  CodeMirror.e_stopPropagation = e_stopPropagation;

  function e_target(e) {return e.target || e.srcElement;}
  function e_button(e) {
    if (e.which) return e.which;
    else if (e.button & 1) return 1;
    else if (e.button & 2) return 3;
    else if (e.button & 4) return 2;
  }

  // Allow 3rd-party code to override event properties by adding an override
  // object to an event object.
  function e_prop(e, prop) {
    var overridden = e.override && e.override.hasOwnProperty(prop);
    return overridden ? e.override[prop] : e[prop];
  }

  // Event handler registration. If disconnect is true, it'll return a
  // function that unregisters the handler.
  function connect(node, type, handler, disconnect) {
    if (typeof node.addEventListener == "function") {
      node.addEventListener(type, handler, false);
      if (disconnect) return function() {node.removeEventListener(type, handler, false);};
    }
    else {
      var wrapHandler = function(event) {handler(event || window.event);};
      node.attachEvent("on" + type, wrapHandler);
      if (disconnect) return function() {node.detachEvent("on" + type, wrapHandler);};
    }
  }
  CodeMirror.connect = connect;

  function Delayed() {this.id = null;}
  Delayed.prototype = {set: function(ms, f) {clearTimeout(this.id); this.id = setTimeout(f, ms);}};

  var Pass = CodeMirror.Pass = {toString: function(){return "CodeMirror.Pass";}};

  var gecko = /gecko\/\d{7}/i.test(navigator.userAgent);
  var ie = /MSIE \d/.test(navigator.userAgent);
  var ie_lt9 = /MSIE [1-8]\b/.test(navigator.userAgent);
  var quirksMode = ie && document.documentMode == 5;
  var webkit = /WebKit\//.test(navigator.userAgent);
  var chrome = /Chrome\//.test(navigator.userAgent);
  var safari = /Apple Computer/.test(navigator.vendor);
  var khtml = /KHTML\//.test(navigator.userAgent);

  // Detect drag-and-drop
  var dragAndDrop = function() {
    // There is *some* kind of drag-and-drop support in IE6-8, but I
    // couldn't get it to work yet.
    if (ie_lt9) return false;
    var div = document.createElement('div');
    return "draggable" in div || "dragDrop" in div;
  }();

  // Feature-detect whether newlines in textareas are converted to \r\n
  var lineSep = function () {
    var te = document.createElement("textarea");
    te.value = "foo\nbar";
    if (te.value.indexOf("\r") > -1) return "\r\n";
    return "\n";
  }();

  // For a reason I have yet to figure out, some browsers disallow
  // word wrapping between certain characters *only* if a new inline
  // element is started between them. This makes it hard to reliably
  // measure the position of things, since that requires inserting an
  // extra span. This terribly fragile set of regexps matches the
  // character combinations that suffer from this phenomenon on the
  // various browsers.
  var spanAffectsWrapping = /^$/; // Won't match any two-character string
  if (gecko) spanAffectsWrapping = /$'/;
  else if (safari) spanAffectsWrapping = /\-[^ \-?]|\?[^ !'\"\),.\-\/:;\?\]\}]/;
  else if (chrome) spanAffectsWrapping = /\-[^ \-\.?]|\?[^ \-\.?\]\}:;!'\"\),\/]|[\.!\"#&%\)*+,:;=>\]|\}~][\(\{\[<]|\$'/;

  // Counts the column offset in a string, taking tabs into account.
  // Used mostly to find indentation.
  function countColumn(string, end, tabSize) {
    if (end == null) {
      end = string.search(/[^\s\u00a0]/);
      if (end == -1) end = string.length;
    }
    for (var i = 0, n = 0; i < end; ++i) {
      if (string.charAt(i) == "\t") n += tabSize - (n % tabSize);
      else ++n;
    }
    return n;
  }

  function computedStyle(elt) {
    if (elt.currentStyle) return elt.currentStyle;
    return window.getComputedStyle(elt, null);
  }

  // Find the position of an element by following the offsetParent chain.
  // If screen==true, it returns screen (rather than page) coordinates.
  function eltOffset(node, screen) {
    var bod = node.ownerDocument.body;
    var x = 0, y = 0, skipBody = false;
    for (var n = node; n; n = n.offsetParent) {
      var ol = n.offsetLeft, ot = n.offsetTop;
      // Firefox reports weird inverted offsets when the body has a border.
      if (n == bod) { x += Math.abs(ol); y += Math.abs(ot); }
      else { x += ol, y += ot; }
      if (screen && computedStyle(n).position == "fixed")
        skipBody = true;
    }
    var e = screen && !skipBody ? null : bod;
    for (var n = node.parentNode; n != e; n = n.parentNode)
      if (n.scrollLeft != null) { x -= n.scrollLeft; y -= n.scrollTop;}
    return {left: x, top: y};
  }
  // Use the faster and saner getBoundingClientRect method when possible.
  if (document.documentElement.getBoundingClientRect != null) eltOffset = function(node, screen) {
    // Take the parts of bounding client rect that we are interested in so we are able to edit if need be,
    // since the returned value cannot be changed externally (they are kept in sync as the element moves within the page)
    try { var box = node.getBoundingClientRect(); box = { top: box.top, left: box.left }; }
    catch(e) { box = {top: 0, left: 0}; }
    if (!screen) {
      // Get the toplevel scroll, working around browser differences.
      if (window.pageYOffset == null) {
        var t = document.documentElement || document.body.parentNode;
        if (t.scrollTop == null) t = document.body;
        box.top += t.scrollTop; box.left += t.scrollLeft;
      } else {
        box.top += window.pageYOffset; box.left += window.pageXOffset;
      }
    }
    return box;
  };

  // Get a node's text content.
  function eltText(node) {
    return node.textContent || node.innerText || node.nodeValue || "";
  }
  function selectInput(node) {
    if (ios) { // Mobile Safari apparently has a bug where select() is broken.
      node.selectionStart = 0;
      node.selectionEnd = node.value.length;
    } else node.select();
  }

  // Operations on {line, ch} objects.
  function posEq(a, b) {return a.line == b.line && a.ch == b.ch;}
  function posLess(a, b) {return a.line < b.line || (a.line == b.line && a.ch < b.ch);}
  function copyPos(x) {return {line: x.line, ch: x.ch};}

  var escapeElement = document.createElement("pre");
  function htmlEscape(str) {
    escapeElement.textContent = str;
    return escapeElement.innerHTML;
  }
  // Recent (late 2011) Opera betas insert bogus newlines at the start
  // of the textContent, so we strip those.
  if (htmlEscape("a") == "\na")
    htmlEscape = function(str) {
      escapeElement.textContent = str;
      return escapeElement.innerHTML.slice(1);
    };
  // Some IEs don't preserve tabs through innerHTML
  else if (htmlEscape("\t") != "\t")
    htmlEscape = function(str) {
      escapeElement.innerHTML = "";
      escapeElement.appendChild(document.createTextNode(str));
      return escapeElement.innerHTML;
    };
  CodeMirror.htmlEscape = htmlEscape;

  // Used to position the cursor after an undo/redo by finding the
  // last edited character.
  function editEnd(from, to) {
    if (!to) return 0;
    if (!from) return to.length;
    for (var i = from.length, j = to.length; i >= 0 && j >= 0; --i, --j)
      if (from.charAt(i) != to.charAt(j)) break;
    return j + 1;
  }

  function indexOf(collection, elt) {
    if (collection.indexOf) return collection.indexOf(elt);
    for (var i = 0, e = collection.length; i < e; ++i)
      if (collection[i] == elt) return i;
    return -1;
  }
  function isWordChar(ch) {
    return /\w/.test(ch) || ch.toUpperCase() != ch.toLowerCase();
  }

  // See if "".split is the broken IE version, if so, provide an
  // alternative way to split lines.
  var splitLines = "\n\nb".split(/\n/).length != 3 ? function(string) {
    var pos = 0, nl, result = [];
    while ((nl = string.indexOf("\n", pos)) > -1) {
      result.push(string.slice(pos, string.charAt(nl-1) == "\r" ? nl - 1 : nl));
      pos = nl + 1;
    }
    result.push(string.slice(pos));
    return result;
  } : function(string){return string.split(/\r?\n/);};
  CodeMirror.splitLines = splitLines;

  var hasSelection = window.getSelection ? function(te) {
    try { return te.selectionStart != te.selectionEnd; }
    catch(e) { return false; }
  } : function(te) {
    try {var range = te.ownerDocument.selection.createRange();}
    catch(e) {}
    if (!range || range.parentElement() != te) return false;
    return range.compareEndPoints("StartToEnd", range) != 0;
  };

  CodeMirror.defineMode("null", function() {
    return {token: function(stream) {stream.skipToEnd();}};
  });
  CodeMirror.defineMIME("text/plain", "null");

  var keyNames = {3: "Enter", 8: "Backspace", 9: "Tab", 13: "Enter", 16: "Shift", 17: "Ctrl", 18: "Alt",
                  19: "Pause", 20: "CapsLock", 27: "Esc", 32: "Space", 33: "PageUp", 34: "PageDown", 35: "End",
                  36: "Home", 37: "Left", 38: "Up", 39: "Right", 40: "Down", 44: "PrintScrn", 45: "Insert",
                  46: "Delete", 59: ";", 91: "Mod", 92: "Mod", 93: "Mod", 127: "Delete", 186: ";", 187: "=", 188: ",",
                  189: "-", 190: ".", 191: "/", 192: "`", 219: "[", 220: "\\", 221: "]", 222: "'", 63276: "PageUp",
                  63277: "PageDown", 63275: "End", 63273: "Home", 63234: "Left", 63232: "Up", 63235: "Right",
                  63233: "Down", 63302: "Insert", 63272: "Delete"};
  CodeMirror.keyNames = keyNames;
  (function() {
    // Number keys
    for (var i = 0; i < 10; i++) keyNames[i + 48] = String(i);
    // Alphabetic keys
    for (var i = 65; i <= 90; i++) keyNames[i] = String.fromCharCode(i);
    // Function keys
    for (var i = 1; i <= 12; i++) keyNames[i + 111] = keyNames[i + 63235] = "F" + i;
  })();

  return CodeMirror;
})();

define("codemirror", (function (global) {
    return function () {
        return global.CodeMirror;
    }
}(this)));

CodeMirror.defineMode("xml", function(config, parserConfig) {
  var indentUnit = config.indentUnit;
  var Kludges = parserConfig.htmlMode ? {
    autoSelfClosers: {'area': true, 'base': true, 'br': true, 'col': true, 'command': true,
                      'embed': true, 'frame': true, 'hr': true, 'img': true, 'input': true,
                      'keygen': true, 'link': true, 'meta': true, 'param': true, 'source': true,
                      'track': true, 'wbr': true},
    implicitlyClosed: {'dd': true, 'li': true, 'optgroup': true, 'option': true, 'p': true,
                       'rp': true, 'rt': true, 'tbody': true, 'td': true, 'tfoot': true,
                       'th': true, 'tr': true},
    contextGrabbers: {
      'dd': {'dd': true, 'dt': true},
      'dt': {'dd': true, 'dt': true},
      'li': {'li': true},
      'option': {'option': true, 'optgroup': true},
      'optgroup': {'optgroup': true},
      'p': {'address': true, 'article': true, 'aside': true, 'blockquote': true, 'dir': true,
            'div': true, 'dl': true, 'fieldset': true, 'footer': true, 'form': true,
            'h1': true, 'h2': true, 'h3': true, 'h4': true, 'h5': true, 'h6': true,
            'header': true, 'hgroup': true, 'hr': true, 'menu': true, 'nav': true, 'ol': true,
            'p': true, 'pre': true, 'section': true, 'table': true, 'ul': true},
      'rp': {'rp': true, 'rt': true},
      'rt': {'rp': true, 'rt': true},
      'tbody': {'tbody': true, 'tfoot': true},
      'td': {'td': true, 'th': true},
      'tfoot': {'tbody': true},
      'th': {'td': true, 'th': true},
      'thead': {'tbody': true, 'tfoot': true},
      'tr': {'tr': true}
    },
    doNotIndent: {"pre": true},
    allowUnquoted: true,
    allowMissing: false
  } : {
    autoSelfClosers: {},
    implicitlyClosed: {},
    contextGrabbers: {},
    doNotIndent: {},
    allowUnquoted: false,
    allowMissing: false
  };
  var alignCDATA = parserConfig.alignCDATA;

  // Return variables for tokenizers
  var tagName, type;

  function inText(stream, state) {
    function chain(parser) {
      state.tokenize = parser;
      return parser(stream, state);
    }

    var ch = stream.next();
    if (ch == "<") {
      if (stream.eat("!")) {
        if (stream.eat("[")) {
          if (stream.match("CDATA[")) return chain(inBlock("atom", "]]>"));
          else return null;
        }
        else if (stream.match("--")) return chain(inBlock("comment", "-->"));
        else if (stream.match("DOCTYPE", true, true)) {
          stream.eatWhile(/[\w\._\-]/);
          return chain(doctype(1));
        }
        else return null;
      }
      else if (stream.eat("?")) {
        stream.eatWhile(/[\w\._\-]/);
        state.tokenize = inBlock("meta", "?>");
        return "meta";
      }
      else {
        type = stream.eat("/") ? "closeTag" : "openTag";
        stream.eatSpace();
        tagName = "";
        var c;
        while ((c = stream.eat(/[^\s\u00a0=<>\"\'\/?]/))) tagName += c;
        state.tokenize = inTag;
        return "tag";
      }
    }
    else if (ch == "&") {
      var ok;
      if (stream.eat("#")) {
        if (stream.eat("x")) {
          ok = stream.eatWhile(/[a-fA-F\d]/) && stream.eat(";");          
        } else {
          ok = stream.eatWhile(/[\d]/) && stream.eat(";");
        }
      } else {
        ok = stream.eatWhile(/[\w\.\-:]/) && stream.eat(";");
      }
      return ok ? "atom" : "error";
    }
    else {
      stream.eatWhile(/[^&<]/);
      return null;
    }
  }

  function inTag(stream, state) {
    var ch = stream.next();
    if (ch == ">" || (ch == "/" && stream.eat(">"))) {
      state.tokenize = inText;
      type = ch == ">" ? "endTag" : "selfcloseTag";
      return "tag";
    }
    else if (ch == "=") {
      type = "equals";
      return null;
    }
    else if (/[\'\"]/.test(ch)) {
      state.tokenize = inAttribute(ch);
      return state.tokenize(stream, state);
    }
    else {
      stream.eatWhile(/[^\s\u00a0=<>\"\'\/?]/);
      return "word";
    }
  }

  function inAttribute(quote) {
    return function(stream, state) {
      while (!stream.eol()) {
        if (stream.next() == quote) {
          state.tokenize = inTag;
          break;
        }
      }
      return "string";
    };
  }

  function inBlock(style, terminator) {
    return function(stream, state) {
      while (!stream.eol()) {
        if (stream.match(terminator)) {
          state.tokenize = inText;
          break;
        }
        stream.next();
      }
      return style;
    };
  }
  function doctype(depth) {
    return function(stream, state) {
      var ch;
      while ((ch = stream.next()) != null) {
        if (ch == "<") {
          state.tokenize = doctype(depth + 1);
          return state.tokenize(stream, state);
        } else if (ch == ">") {
          if (depth == 1) {
            state.tokenize = inText;
            break;
          } else {
            state.tokenize = doctype(depth - 1);
            return state.tokenize(stream, state);
          }
        }
      }
      return "meta";
    };
  }

  var curState, setStyle;
  function pass() {
    for (var i = arguments.length - 1; i >= 0; i--) curState.cc.push(arguments[i]);
  }
  function cont() {
    pass.apply(null, arguments);
    return true;
  }

  function pushContext(tagName, startOfLine) {
    var noIndent = Kludges.doNotIndent.hasOwnProperty(tagName) || (curState.context && curState.context.noIndent);
    curState.context = {
      prev: curState.context,
      tagName: tagName,
      indent: curState.indented,
      startOfLine: startOfLine,
      noIndent: noIndent
    };
  }
  function popContext() {
    if (curState.context) curState.context = curState.context.prev;
  }

  function element(type) {
    if (type == "openTag") {
      curState.tagName = tagName;
      return cont(attributes, endtag(curState.startOfLine));
    } else if (type == "closeTag") {
      var err = false;
      if (curState.context) {
        if (curState.context.tagName != tagName) {
          if (Kludges.implicitlyClosed.hasOwnProperty(curState.context.tagName.toLowerCase())) {
            popContext();
          }
          err = !curState.context || curState.context.tagName != tagName;
        }
      } else {
        err = true;
      }
      if (err) setStyle = "error";
      return cont(endclosetag(err));
    }
    return cont();
  }
  function endtag(startOfLine) {
    return function(type) {
      if (type == "selfcloseTag" ||
          (type == "endTag" && Kludges.autoSelfClosers.hasOwnProperty(curState.tagName.toLowerCase()))) {
        maybePopContext(curState.tagName.toLowerCase());
        return cont();
      }
      if (type == "endTag") {
        maybePopContext(curState.tagName.toLowerCase());
        pushContext(curState.tagName, startOfLine);
        return cont();
      }
      return cont();
    };
  }
  function endclosetag(err) {
    return function(type) {
      if (err) setStyle = "error";
      if (type == "endTag") { popContext(); return cont(); }
      setStyle = "error";
      return cont(arguments.callee);
    }
  }
  function maybePopContext(nextTagName) {
    var parentTagName;
    while (true) {
      if (!curState.context) {
        return;
      }
      parentTagName = curState.context.tagName.toLowerCase();
      if (!Kludges.contextGrabbers.hasOwnProperty(parentTagName) ||
          !Kludges.contextGrabbers[parentTagName].hasOwnProperty(nextTagName)) {
        return;
      }
      popContext();
    }
  }

  function attributes(type) {
    if (type == "word") {setStyle = "attribute"; return cont(attribute, attributes);}
    if (type == "endTag" || type == "selfcloseTag") return pass();
    setStyle = "error";
    return cont(attributes);
  }
  function attribute(type) {
    if (type == "equals") return cont(attvalue, attributes);
    if (!Kludges.allowMissing) setStyle = "error";
    return (type == "endTag" || type == "selfcloseTag") ? pass() : cont();
  }
  function attvalue(type) {
    if (type == "string") return cont(attvaluemaybe);
    if (type == "word" && Kludges.allowUnquoted) {setStyle = "string"; return cont();}
    setStyle = "error";
    return (type == "endTag" || type == "selfCloseTag") ? pass() : cont();
  }
  function attvaluemaybe(type) {
    if (type == "string") return cont(attvaluemaybe);
    else return pass();
  }

  return {
    startState: function() {
      return {tokenize: inText, cc: [], indented: 0, startOfLine: true, tagName: null, context: null};
    },

    token: function(stream, state) {
      if (stream.sol()) {
        state.startOfLine = true;
        state.indented = stream.indentation();
      }
      if (stream.eatSpace()) return null;

      setStyle = type = tagName = null;
      var style = state.tokenize(stream, state);
      state.type = type;
      if ((style || type) && style != "comment") {
        curState = state;
        while (true) {
          var comb = state.cc.pop() || element;
          if (comb(type || style)) break;
        }
      }
      state.startOfLine = false;
      return setStyle || style;
    },

    indent: function(state, textAfter, fullLine) {
      var context = state.context;
      if ((state.tokenize != inTag && state.tokenize != inText) ||
          context && context.noIndent)
        return fullLine ? fullLine.match(/^(\s*)/)[0].length : 0;
      if (alignCDATA && /<!\[CDATA\[/.test(textAfter)) return 0;
      if (context && /^<\//.test(textAfter))
        context = context.prev;
      while (context && !context.startOfLine)
        context = context.prev;
      if (context) return context.indent + indentUnit;
      else return 0;
    },

    compareStates: function(a, b) {
      if (a.indented != b.indented || a.tokenize != b.tokenize) return false;
      for (var ca = a.context, cb = b.context; ; ca = ca.prev, cb = cb.prev) {
        if (!ca || !cb) return ca == cb;
        if (ca.tagName != cb.tagName) return false;
      }
    },

    electricChars: "/"
  };
});

CodeMirror.defineMIME("application/xml", "xml");
if (!CodeMirror.mimeModes.hasOwnProperty("text/html"))
  CodeMirror.defineMIME("text/html", {name: "xml", htmlMode: true});

define("codemirror/xml", ["codemirror"], (function (global) {
    return function () {
        return global.CodeMirror;
    }
}(this)));

CodeMirror.defineMode("javascript", function(config, parserConfig) {
  var indentUnit = config.indentUnit;
  var jsonMode = parserConfig.json;

  // Tokenizer

  var keywords = function(){
    function kw(type) {return {type: type, style: "keyword"};}
    var A = kw("keyword a"), B = kw("keyword b"), C = kw("keyword c");
    var operator = kw("operator"), atom = {type: "atom", style: "atom"};
    return {
      "if": A, "while": A, "with": A, "else": B, "do": B, "try": B, "finally": B,
      "return": C, "break": C, "continue": C, "new": C, "delete": C, "throw": C,
      "var": kw("var"), "const": kw("var"), "let": kw("var"),
      "function": kw("function"), "catch": kw("catch"),
      "for": kw("for"), "switch": kw("switch"), "case": kw("case"), "default": kw("default"),
      "in": operator, "typeof": operator, "instanceof": operator,
      "true": atom, "false": atom, "null": atom, "undefined": atom, "NaN": atom, "Infinity": atom
    };
  }();

  var isOperatorChar = /[+\-*&%=<>!?|]/;

  function chain(stream, state, f) {
    state.tokenize = f;
    return f(stream, state);
  }

  function nextUntilUnescaped(stream, end) {
    var escaped = false, next;
    while ((next = stream.next()) != null) {
      if (next == end && !escaped)
        return false;
      escaped = !escaped && next == "\\";
    }
    return escaped;
  }

  // Used as scratch variables to communicate multiple values without
  // consing up tons of objects.
  var type, content;
  function ret(tp, style, cont) {
    type = tp; content = cont;
    return style;
  }

  function jsTokenBase(stream, state) {
    var ch = stream.next();
    if (ch == '"' || ch == "'")
      return chain(stream, state, jsTokenString(ch));
    else if (/[\[\]{}\(\),;\:\.]/.test(ch))
      return ret(ch);
    else if (ch == "0" && stream.eat(/x/i)) {
      stream.eatWhile(/[\da-f]/i);
      return ret("number", "number");
    }      
    else if (/\d/.test(ch) || ch == "-" && stream.eat(/\d/)) {
      stream.match(/^\d*(?:\.\d*)?(?:[eE][+\-]?\d+)?/);
      return ret("number", "number");
    }
    else if (ch == "/") {
      if (stream.eat("*")) {
        return chain(stream, state, jsTokenComment);
      }
      else if (stream.eat("/")) {
        stream.skipToEnd();
        return ret("comment", "comment");
      }
      else if (state.reAllowed) {
        nextUntilUnescaped(stream, "/");
        stream.eatWhile(/[gimy]/); // 'y' is "sticky" option in Mozilla
        return ret("regexp", "string-2");
      }
      else {
        stream.eatWhile(isOperatorChar);
        return ret("operator", null, stream.current());
      }
    }
    else if (ch == "#") {
        stream.skipToEnd();
        return ret("error", "error");
    }
    else if (isOperatorChar.test(ch)) {
      stream.eatWhile(isOperatorChar);
      return ret("operator", null, stream.current());
    }
    else {
      stream.eatWhile(/[\w\$_]/);
      var word = stream.current(), known = keywords.propertyIsEnumerable(word) && keywords[word];
      return (known && state.kwAllowed) ? ret(known.type, known.style, word) :
                     ret("variable", "variable", word);
    }
  }

  function jsTokenString(quote) {
    return function(stream, state) {
      if (!nextUntilUnescaped(stream, quote))
        state.tokenize = jsTokenBase;
      return ret("string", "string");
    };
  }

  function jsTokenComment(stream, state) {
    var maybeEnd = false, ch;
    while (ch = stream.next()) {
      if (ch == "/" && maybeEnd) {
        state.tokenize = jsTokenBase;
        break;
      }
      maybeEnd = (ch == "*");
    }
    return ret("comment", "comment");
  }

  // Parser

  var atomicTypes = {"atom": true, "number": true, "variable": true, "string": true, "regexp": true};

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
  }

  function parseJS(state, style, type, content, stream) {
    var cc = state.cc;
    // Communicate our context to the combinators.
    // (Less wasteful than consing up a hundred closures on every call.)
    cx.state = state; cx.stream = stream; cx.marked = null, cx.cc = cc;
  
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
    var state = cx.state;
    if (state.context) {
      cx.marked = "def";
      for (var v = state.localVars; v; v = v.next)
        if (v.name == varname) return;
      state.localVars = {name: varname, next: state.localVars};
    }
  }

  // Combinators

  var defaultVars = {name: "this", next: {name: "arguments"}};
  function pushcontext() {
    if (!cx.state.context) cx.state.localVars = defaultVars;
    cx.state.context = {prev: cx.state.context, vars: cx.state.localVars};
  }
  function popcontext() {
    cx.state.localVars = cx.state.context.vars;
    cx.state.context = cx.state.context.prev;
  }
  function pushlex(type, info) {
    var result = function() {
      var state = cx.state;
      state.lexical = new JSLexical(state.indented, cx.stream.column(), type, null, state.lexical, info)
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
    return function expecting(type) {
      if (type == wanted) return cont();
      else if (wanted == ";") return pass();
      else return cont(arguments.callee);
    };
  }

  function statement(type) {
    if (type == "var") return cont(pushlex("vardef"), vardef1, expect(";"), poplex);
    if (type == "keyword a") return cont(pushlex("form"), expression, statement, poplex);
    if (type == "keyword b") return cont(pushlex("form"), statement, poplex);
    if (type == "{") return cont(pushlex("}"), block, poplex);
    if (type == ";") return cont();
    if (type == "function") return cont(functiondef);
    if (type == "for") return cont(pushlex("form"), expect("("), pushlex(")"), forspec1, expect(")"),
                                      poplex, statement, poplex);
    if (type == "variable") return cont(pushlex("stat"), maybelabel);
    if (type == "switch") return cont(pushlex("form"), expression, pushlex("}", "switch"), expect("{"),
                                         block, poplex, poplex);
    if (type == "case") return cont(expression, expect(":"));
    if (type == "default") return cont(expect(":"));
    if (type == "catch") return cont(pushlex("form"), pushcontext, expect("("), funarg, expect(")"),
                                        statement, poplex, popcontext);
    return pass(pushlex("stat"), expression, expect(";"), poplex);
  }
  function expression(type) {
    if (atomicTypes.hasOwnProperty(type)) return cont(maybeoperator);
    if (type == "function") return cont(functiondef);
    if (type == "keyword c") return cont(maybeexpression);
    if (type == "(") return cont(pushlex(")"), maybeexpression, expect(")"), poplex, maybeoperator);
    if (type == "operator") return cont(expression);
    if (type == "[") return cont(pushlex("]"), commasep(expression, "]"), poplex, maybeoperator);
    if (type == "{") return cont(pushlex("}"), commasep(objprop, "}"), poplex, maybeoperator);
    return cont();
  }
  function maybeexpression(type) {
    if (type.match(/[;\}\)\],]/)) return pass();
    return pass(expression);
  }
    
  function maybeoperator(type, value) {
    if (type == "operator" && /\+\+|--/.test(value)) return cont(maybeoperator);
    if (type == "operator" || type == ":") return cont(expression);
    if (type == ";") return;
    if (type == "(") return cont(pushlex(")"), commasep(expression, ")"), poplex, maybeoperator);
    if (type == ".") return cont(property, maybeoperator);
    if (type == "[") return cont(pushlex("]"), expression, expect("]"), poplex, maybeoperator);
  }
  function maybelabel(type) {
    if (type == ":") return cont(poplex, statement);
    return pass(maybeoperator, expect(";"), poplex);
  }
  function property(type) {
    if (type == "variable") {cx.marked = "property"; return cont();}
  }
  function objprop(type) {
    if (type == "variable") cx.marked = "property";
    if (atomicTypes.hasOwnProperty(type)) return cont(expect(":"), expression);
  }
  function commasep(what, end) {
    function proceed(type) {
      if (type == ",") return cont(what, proceed);
      if (type == end) return cont();
      return cont(expect(end));
    }
    return function commaSeparated(type) {
      if (type == end) return cont();
      else return pass(what, proceed);
    };
  }
  function block(type) {
    if (type == "}") return cont();
    return pass(statement, block);
  }
  function vardef1(type, value) {
    if (type == "variable"){register(value); return cont(vardef2);}
    return cont();
  }
  function vardef2(type, value) {
    if (value == "=") return cont(expression, vardef2);
    if (type == ",") return cont(vardef1);
  }
  function forspec1(type) {
    if (type == "var") return cont(vardef1, forspec2);
    if (type == ";") return pass(forspec2);
    if (type == "variable") return cont(formaybein);
    return pass(forspec2);
  }
  function formaybein(type, value) {
    if (value == "in") return cont(expression);
    return cont(maybeoperator, forspec2);
  }
  function forspec2(type, value) {
    if (type == ";") return cont(forspec3);
    if (value == "in") return cont(expression);
    return cont(expression, expect(";"), forspec3);
  }
  function forspec3(type) {
    if (type != ")") cont(expression);
  }
  function functiondef(type, value) {
    if (type == "variable") {register(value); return cont(functiondef);}
    if (type == "(") return cont(pushlex(")"), pushcontext, commasep(funarg, ")"), poplex, statement, popcontext);
  }
  function funarg(type, value) {
    if (type == "variable") {register(value); return cont();}
  }

  // Interface

  return {
    startState: function(basecolumn) {
      return {
        tokenize: jsTokenBase,
        reAllowed: true,
        kwAllowed: true,
        cc: [],
        lexical: new JSLexical((basecolumn || 0) - indentUnit, 0, "block", false),
        localVars: parserConfig.localVars,
        context: parserConfig.localVars && {vars: parserConfig.localVars},
        indented: 0
      };
    },

    token: function(stream, state) {
      if (stream.sol()) {
        if (!state.lexical.hasOwnProperty("align"))
          state.lexical.align = false;
        state.indented = stream.indentation();
      }
      if (stream.eatSpace()) return null;
      var style = state.tokenize(stream, state);
      if (type == "comment") return style;
      state.reAllowed = !!(type == "operator" || type == "keyword c" || type.match(/^[\[{}\(,;:]$/));
      state.kwAllowed = type != '.';
      return parseJS(state, style, type, content, stream);
    },

    indent: function(state, textAfter) {
      if (state.tokenize != jsTokenBase) return 0;
      var firstChar = textAfter && textAfter.charAt(0), lexical = state.lexical;
      if (lexical.type == "stat" && firstChar == "}") lexical = lexical.prev;
      var type = lexical.type, closing = firstChar == type;
      if (type == "vardef") return lexical.indented + 4;
      else if (type == "form" && firstChar == "{") return lexical.indented;
      else if (type == "stat" || type == "form") return lexical.indented + indentUnit;
      else if (lexical.info == "switch" && !closing)
        return lexical.indented + (/^(?:case|default)\b/.test(textAfter) ? indentUnit : 2 * indentUnit);
      else if (lexical.align) return lexical.column + (closing ? 0 : 1);
      else return lexical.indented + (closing ? 0 : indentUnit);
    },

    electricChars: ":{}"
  };
});

CodeMirror.defineMIME("text/javascript", "javascript");
CodeMirror.defineMIME("application/json", {name: "javascript", json: true});

define("codemirror/javascript", ["codemirror"], (function (global) {
    return function () {
        return global.CodeMirror;
    }
}(this)));

CodeMirror.defineMode("css", function(config) {
  var indentUnit = config.indentUnit, type;
  function ret(style, tp) {type = tp; return style;}

  function tokenBase(stream, state) {
    var ch = stream.next();
    if (ch == "@") {stream.eatWhile(/[\w\\\-]/); return ret("meta", stream.current());}
    else if (ch == "/" && stream.eat("*")) {
      state.tokenize = tokenCComment;
      return tokenCComment(stream, state);
    }
    else if (ch == "<" && stream.eat("!")) {
      state.tokenize = tokenSGMLComment;
      return tokenSGMLComment(stream, state);
    }
    else if (ch == "=") ret(null, "compare");
    else if ((ch == "~" || ch == "|") && stream.eat("=")) return ret(null, "compare");
    else if (ch == "\"" || ch == "'") {
      state.tokenize = tokenString(ch);
      return state.tokenize(stream, state);
    }
    else if (ch == "#") {
      stream.eatWhile(/[\w\\\-]/);
      return ret("atom", "hash");
    }
    else if (ch == "!") {
      stream.match(/^\s*\w*/);
      return ret("keyword", "important");
    }
    else if (/\d/.test(ch)) {
      stream.eatWhile(/[\w.%]/);
      return ret("number", "unit");
    }
    else if (/[,.+>*\/]/.test(ch)) {
      return ret(null, "select-op");
    }
    else if (/[;{}:\[\]]/.test(ch)) {
      return ret(null, ch);
    }
    else {
      stream.eatWhile(/[\w\\\-]/);
      return ret("variable", "variable");
    }
  }

  function tokenCComment(stream, state) {
    var maybeEnd = false, ch;
    while ((ch = stream.next()) != null) {
      if (maybeEnd && ch == "/") {
        state.tokenize = tokenBase;
        break;
      }
      maybeEnd = (ch == "*");
    }
    return ret("comment", "comment");
  }

  function tokenSGMLComment(stream, state) {
    var dashes = 0, ch;
    while ((ch = stream.next()) != null) {
      if (dashes >= 2 && ch == ">") {
        state.tokenize = tokenBase;
        break;
      }
      dashes = (ch == "-") ? dashes + 1 : 0;
    }
    return ret("comment", "comment");
  }

  function tokenString(quote) {
    return function(stream, state) {
      var escaped = false, ch;
      while ((ch = stream.next()) != null) {
        if (ch == quote && !escaped)
          break;
        escaped = !escaped && ch == "\\";
      }
      if (!escaped) state.tokenize = tokenBase;
      return ret("string", "string");
    };
  }

  return {
    startState: function(base) {
      return {tokenize: tokenBase,
              baseIndent: base || 0,
              stack: []};
    },

    token: function(stream, state) {
      if (stream.eatSpace()) return null;
      var style = state.tokenize(stream, state);

      var context = state.stack[state.stack.length-1];
      if (type == "hash" && context != "rule") style = "string-2";
      else if (style == "variable") {
        if (context == "rule") style = "number";
        else if (!context || context == "@media{") style = "tag";
      }

      if (context == "rule" && /^[\{\};]$/.test(type))
        state.stack.pop();
      if (type == "{") {
        if (context == "@media") state.stack[state.stack.length-1] = "@media{";
        else state.stack.push("{");
      }
      else if (type == "}") state.stack.pop();
      else if (type == "@media") state.stack.push("@media");
      else if (context == "{" && type != "comment") state.stack.push("rule");
      return style;
    },

    indent: function(state, textAfter) {
      var n = state.stack.length;
      if (/^\}/.test(textAfter))
        n -= state.stack[state.stack.length-1] == "rule" ? 2 : 1;
      return state.baseIndent + n * indentUnit;
    },

    electricChars: "}"
  };
});

CodeMirror.defineMIME("text/css", "css");

define("codemirror/css", ["codemirror"], (function (global) {
    return function () {
        return global.CodeMirror;
    }
}(this)));

CodeMirror.defineMode("htmlmixed", function(config, parserConfig) {
  var htmlMode = CodeMirror.getMode(config, {name: "xml", htmlMode: true});
  var jsMode = CodeMirror.getMode(config, "javascript");
  var cssMode = CodeMirror.getMode(config, "css");

  function html(stream, state) {
    var style = htmlMode.token(stream, state.htmlState);
    if (style == "tag" && stream.current() == ">" && state.htmlState.context) {
      if (/^script$/i.test(state.htmlState.context.tagName)) {
        state.token = javascript;
        state.localState = jsMode.startState(htmlMode.indent(state.htmlState, ""));
        state.mode = "javascript";
      }
      else if (/^style$/i.test(state.htmlState.context.tagName)) {
        state.token = css;
        state.localState = cssMode.startState(htmlMode.indent(state.htmlState, ""));
        state.mode = "css";
      }
    }
    return style;
  }
  function maybeBackup(stream, pat, style) {
    var cur = stream.current();
    var close = cur.search(pat);
    if (close > -1) stream.backUp(cur.length - close);
    return style;
  }
  function javascript(stream, state) {
    if (stream.match(/^<\/\s*script\s*>/i, false)) {
      state.token = html;
      state.localState = null;
      state.mode = "html";
      return html(stream, state);
    }
    return maybeBackup(stream, /<\/\s*script\s*>/,
                       jsMode.token(stream, state.localState));
  }
  function css(stream, state) {
    if (stream.match(/^<\/\s*style\s*>/i, false)) {
      state.token = html;
      state.localState = null;
      state.mode = "html";
      return html(stream, state);
    }
    return maybeBackup(stream, /<\/\s*style\s*>/,
                       cssMode.token(stream, state.localState));
  }

  return {
    startState: function() {
      var state = htmlMode.startState();
      return {token: html, localState: null, mode: "html", htmlState: state};
    },

    copyState: function(state) {
      if (state.localState)
        var local = CodeMirror.copyState(state.token == css ? cssMode : jsMode, state.localState);
      return {token: state.token, localState: local, mode: state.mode,
              htmlState: CodeMirror.copyState(htmlMode, state.htmlState)};
    },

    token: function(stream, state) {
      return state.token(stream, state);
    },

    indent: function(state, textAfter) {
      if (state.token == html || /^\s*<\//.test(textAfter))
        return htmlMode.indent(state.htmlState, textAfter);
      else if (state.token == javascript)
        return jsMode.indent(state.localState, textAfter);
      else
        return cssMode.indent(state.localState, textAfter);
    },

    compareStates: function(a, b) {
      if (a.mode != b.mode) return false;
      if (a.localState) return CodeMirror.Pass;
      return htmlMode.compareStates(a.htmlState, b.htmlState);
    },

    electricChars: "/{}:"
  }
}, "xml", "javascript", "css");

CodeMirror.defineMIME("text/html", "htmlmixed");

define("codemirror/html", ["codemirror/xml","codemirror/javascript","codemirror/css"], (function (global) {
    return function () {
        return global.CodeMirror;
    }
}(this)));



// A subclass of CodeMirror which adds a few methods that make it easier
// to work with character indexes rather than {line, ch} objects.
define('fc/ui/indexable-codemirror',["codemirror"], function(CodeMirror) {
  return function IndexableCodeMirror(place, givenOptions) {
    var codeMirror = CodeMirror(place, givenOptions);
  
    // Returns the character index of the cursor position.
    codeMirror.getCursorIndex = function() {
      return codeMirror.indexFromPos(codeMirror.getCursor());
    };
  
    return codeMirror;
  };
});



// `TreeInspectors` contains functions that inspect a document
// fragment and report interesting things about it.
//
// This library has no required dependencies, though optional Slowparse
// integration is included.
//
// If [RequireJS] is detected, this file is defined as a module via
// `define()`. Otherwise, a global called `TreeInspectors` is exposed.
//
//   [RequireJS]: http://requirejs.org/
var TreeInspectors = (function() {
  // ## Utility Functions
  var utils = {
    // This function calls the given function for every element
    // that matches the given selector.
    each: function each(doc, selector, fn) {
      var all = doc.querySelectorAll(selector);
      for (var i = 0; i < all.length; i++)
        fn(all[i]);
    },
    // This function calls the given function for every attribute
    // in the given DOM node, as well as for every attribute in all
    // its children.
    eachAttr: function eachAttr(node, fn) {
      var i;
      if (node.attributes)
        for (i = 0; i < node.attributes.length; i++)
          fn(node.attributes[i]);
      for (i = 0; i < node.childNodes.length; i++)
        if (node.childNodes[i].nodeType == node.ELEMENT_NODE)
          eachAttr(node.childNodes[i], fn);
    }
  };
  
  var TreeInspectors = {
    // We export our utility functions in case any other scripts want
    // to extend the `TreeInspectors` object with more inspectors.
    utils: utils,
    // ## Finding JavaScript Usage
    //
    // Given a document fragment, this function finds all occurrences
    // of the most common kinds of JavaScript use in it and returns
    // an array containing `{type, node}` objects that describe each
    // use of JavaScript.
    findJS: function(doc) {
      var js = [];
      
      // We want to find `script` elements.
      utils.each(doc, "script", function(script) {
        js.push({type: "SCRIPT_ELEMENT", node: script});
      });
      
      utils.eachAttr(doc, function(attr) {
        // If the attribute name begins with `on`, we can safely assume
        // it's an event handler attribute. We can change this in the
        // future if there are valid non-event-handler attributes that
        // start with `on`.
        if (attr.nodeName.match(/^on/i))
          js.push({type: "EVENT_HANDLER_ATTR", node: attr});
          
        // If the attribute value starts with `javascript:`, regardless
        // of the attribute name, raise an error. We can change this in
        // the future if we only want to make this check on specific
        // attributes.
        if (attr.nodeValue.match(/^javascript:/i))
          js.push({type: "JAVASCRIPT_URL", node: attr});
      });
      
      return js;
    },
    // This is a Slowparse error detector that returns an error object
    // if the given document fragment contains any JS.
    forbidJS: function(html, doc) {
      var js = TreeInspectors.findJS(doc);
      if (!js.length)
        return null;
      var error = JSON.parse(JSON.stringify(js[0].node.parseInfo));
      error.type = js[0].type + "_NOT_ALLOWED";
      return error;
    }
  };
  
  if (typeof(define) == "function") {
    define('slowparse/tree-inspectors',[],function() { return TreeInspectors; });
  } else
    return TreeInspectors;
})();



// Slowparse is a token stream parser for HTML and CSS text,
// recording regions of interest during the parse run and
// signaling any errors detected accompanied by relevant
// regions in the text stream, to make debugging easy. Each
// error type is documented in the [error specification][].
//
// Slowparse also builds a DOM as it goes, attaching metadata
// to each node build that points to where it came from in
// the original source.
//
// For more information on the rationale behind Slowparse, as
// well as its design goals, see the [README][].
//
// If [RequireJS] is detected, this file is defined as a module via
// `define()`. Otherwise, a global called `Slowparse` is exposed.
//
// ## Implementation
//
// Slowparse is effectively a finite state machine for
// HTML and CSS strings, and will switch between the HTML
// and CSS parsers while maintaining a single token stream.
//
//   [RequireJS]: http://requirejs.org/
//   [error specification]: http://toolness.github.com/slowparse/spec/
//   [README]: https://github.com/toolness/slowparse#readme
var Slowparse = (function() {
  // ### Character Entity Parsing
  //
  // We currently only parse the most common named character entities.
  var CHARACTER_ENTITY_REFS = {
    lt: "<",
    gt: ">",
    apos: "'",
    quot: '"',
    amp: "&"
  };
  
  // `replaceEntityRefs()` will replace named character entity references
  // (e.g. `&lt;`) in the given text string and return the result. If an
  // entity name is unrecognized, don't replace it at all. Writing HTML
  // would be surprisingly painful without this forgiving behavior.
  //
  // This function does not currently replace numeric character entity
  // references (e.g., `&#160;`).
  function replaceEntityRefs(text) {
    return text.replace(/&([A-Za-z]+);/g, function(ref, name) {
      name = name.toLowerCase();
      if (name in CHARACTER_ENTITY_REFS)
        return CHARACTER_ENTITY_REFS[name];
      return ref;
    });
  }
  
  
  // ### Errors
  //
  // `ParseError` is an internal error class used to indicate a parsing error. 
  // It never gets seen by Slowparse clients, as parse errors are an
  // expected occurrence. However, they are used internally to simplify
  // flow control.
  //
  // The first argument is the name of an error type, followed by
  // arbitrary positional arguments specific to that error type. Every
  // instance has a `parseInfo` property which contains the error
  // object that will be exposed to Slowparse clients when parsing errors
  // occur.
  function ParseError(type) {
    this.name = "ParseError";
    if (!(type in ParseErrorBuilders))
      throw new Error("Unknown ParseError type: " + type);
    var args = [];
    for (var i = 1; i < arguments.length; i++)
      args.push(arguments[i]);
    var parseInfo = ParseErrorBuilders[type].apply(ParseErrorBuilders, args);

    /* This may seem a weird way of setting an attribute, but we want
     * to make the JSON serialize so the 'type' appears first, as it
     * makes our documentation read better. */
    parseInfo = ParseErrorBuilders._combine({
      type: type
    }, parseInfo);
    this.message = type;
    this.parseInfo = parseInfo;
  }

  ParseError.prototype = Error.prototype;

  // `ParseErrorBuilders` contains Factory functions for all our types of
  // parse errors, indexed by error type.
  //
  // Each public factory function returns a `parseInfo` object, sans the 
  // `type` property. For more information on each type of error,
  // see the [error specification][].
  //
  //   [error specification]: http://toolness.github.com/slowparse/spec/
  var ParseErrorBuilders = {
    /* Create a new object that has the properties of both arguments
     * and return it. */
    _combine: function(a, b) {
      var obj = {}, name;
      for (name in a) {
        obj[name] = a[name];
      }
      for (name in b) {
        obj[name] = b[name];
      }
      return obj;
    },
    // These are HTML errors.
    UNCLOSED_TAG: function(parser) {
      return {
        openTag: this._combine({
          name: parser.domBuilder.currentNode.nodeName.toLowerCase()
        }, parser.domBuilder.currentNode.parseInfo.openTag)
      };
    },
    INVALID_TAG_NAME: function(tagName, token) {
      return {
        openTag: this._combine({
          name: tagName
        }, token.interval)
      };
    },
    UNEXPECTED_CLOSE_TAG: function(parser, closeTagName, token) {
      return {
        closeTag: this._combine({
          name: closeTagName
        }, token.interval)
      };
    },
    MISMATCHED_CLOSE_TAG: function(parser, openTagName, closeTagName, token) {
      return {
        openTag: this._combine({
          name: openTagName
        }, parser.domBuilder.currentNode.parseInfo.openTag),
        closeTag: this._combine({
          name: closeTagName
        }, token.interval)
      };
    },
    CLOSE_TAG_FOR_VOID_ELEMENT: function(parser, closeTagName, token) {
      return {
        closeTag: this._combine({
          name: closeTagName
        }, token.interval)
      };
    },
    UNTERMINATED_COMMENT: function(token) {
      return {
        start: token.interval.start
      };
    },
    UNTERMINATED_ATTR_VALUE: function(parser, nameTok) {
      return {
        openTag: this._combine({
          name: parser.domBuilder.currentNode.nodeName.toLowerCase()
        }, parser.domBuilder.currentNode.parseInfo.openTag),
        attribute: {
          name: {
            value: nameTok.value,
            start: nameTok.interval.start,
            end: nameTok.interval.end
          },
          value: {
            start: parser.stream.makeToken().interval.start
          }
        },
      };
    },
    UNQUOTED_ATTR_VALUE: function(parser) {
      var pos = parser.stream.pos;
      if (!parser.stream.end())
        pos = parser.stream.makeToken().interval.start;
      return {
        start: pos
      };
    },
    UNTERMINATED_OPEN_TAG: function(parser) {
      return {
        openTag: {
          start: parser.domBuilder.currentNode.parseInfo.openTag.start,
          end: parser.stream.pos,
          name: parser.domBuilder.currentNode.nodeName.toLowerCase()
        }
      };
    },
    SELF_CLOSING_NON_VOID_ELEMENT: function(parser, tagName) {
      return {
        name: tagName,
        start: parser.domBuilder.currentNode.parseInfo.openTag.start,
        end: parser.stream.makeToken().interval.end
      };
    },
    UNTERMINATED_CLOSE_TAG: function(parser) {
      var end = parser.stream.pos;
      if (!parser.stream.end())
        end = parser.stream.makeToken().interval.start;
      return {
        closeTag: {
          name: parser.domBuilder.currentNode.nodeName.toLowerCase(),
          start: parser.domBuilder.currentNode.parseInfo.closeTag.start,
          end: end
        }
      };
    },
    // These are CSS errors.
    MISSING_CSS_SELECTOR: function(parser, start, end) {
      return {
        cssBlock: {
          start: start,
          end: end
        }
      };
    },
    UNFINISHED_CSS_SELECTOR: function(parser, start, end, selector) {
      return {
        cssSelector: {
          start: start,
          end: end,
          selector: selector
        }
      };
    },
    MISSING_CSS_BLOCK_OPENER: function(parser, start, end, selector) {
      return {
        cssSelector: {
          start: start,
          end: end,
          selector: selector
        }
      };
    },
    INVALID_CSS_PROPERTY_NAME: function(parser, start, end, property) {
      return {
        cssProperty: {
          start: start,
          end: end,
          property: property
        }
      };
    },
    MISSING_CSS_PROPERTY: function(parser, start, end, selector) {
      return {
        cssSelector: {
          start: start,
          end: end,
          selector: selector
        }
      };
    },
    UNFINISHED_CSS_PROPERTY: function(parser, start, end, property) {
      return {
        cssProperty: {
          start: start,
          end: end,
          property: property
        }
      };
    },
    MISSING_CSS_VALUE: function(parser, start, end, property) {
      return {
        cssProperty: {
          start: start,
          end: end,
          property: property
        }
      };
    },
    UNFINISHED_CSS_VALUE: function(parser, start, end, value) {
      return {
        cssValue: {
          start: start,
          end: end,
          value: value
        }
      };
    },
    MISSING_CSS_BLOCK_CLOSER: function(parser, start, end, value) {
      return {
        cssValue: {
          start: start,
          end: end,
          value: value
        }
      };
    },
    UNCAUGHT_CSS_PARSE_ERROR: function(parser, start, end, msg) {
      return {
        error: {
          start: start,
          end: end,
          msg: msg
        }
      };
    },
    UNTERMINATED_CSS_COMMENT: function(start) {
      return {
        start: start
      };
    },
    HTML_CODE_IN_CSS_BLOCK: function(parser, start, end) {
      return {
        html: {
          start: start,
          end: end
        }
      }
    }
  };
  
  // ### Streams
  //
  // `Stream` is an internal class used for tokenization. The interface for
  // this class is inspired by the analogous class in [CodeMirror][].
  //
  //   [CodeMirror]: http://codemirror.net/doc/manual.html#modeapi
  function Stream(text) {
    this.text = text;
    this.pos = 0;
    this.tokenStart = 0;
  }

  Stream.prototype = {
    // `Stream.peek()` returns the next character in the stream without
    // advancing it. It will return `undefined` at the end of the text.
    peek: function() {
      return this.text[this.pos];
    },
    // `Stream.substream(len)` returns a substream from the stream
    // without advancing it, with length `len`.
    substream: function(len) {
      return this.text.substring(this.pos, this.pos + len);
    },
    // `Stream.next()` returns the next character in the stream and advances
    // it. It also returns `undefined` when no more characters are available.
    next: function() {
      if (!this.end())
        return this.text[this.pos++];
    },
    // `Stream.end()` returns true only if the stream is at the end of the
    // text.
    end: function() {
      return (this.pos == this.text.length);
    },
    // `Stream.eat()` takes a regular expression. If the next character in
    // the stream matches the given argument, it is consumed and returned.
    // Otherwise, `undefined` is returned.
    eat: function(match) {
      if (!this.end() && this.peek().match(match))
        return this.next();
    },
    // `Stream.eatWhile()` repeatedly calls `eat()` with the given argument,
    // until it fails. Returns `true` if any characters were eaten.
    eatWhile: function(matcher) {
      var wereAnyEaten = false;
      while (!this.end()) {
        if (this.eat(matcher))
          wereAnyEaten = true;
        else
          return wereAnyEaten;
      }
    },
    // `Stream.eatSpace()` is a shortcut for `eatWhile()` when matching
    // white-space (including newlines).
    eatSpace: function() {
      return this.eatWhile(/[\s\n]/);
    },
    // `Stream.eatCSSWhile()` is like `eatWhile()`, but it
    // automatically deals with eating block comments like `/* foo */`.
    eatCSSWhile: function(matcher) {
      var wereAnyEaten = false,
          chr = '',
          peek = '',
          next = '';
      while (!this.end()) {
        chr = this.eat(matcher);
        if (chr)
          wereAnyEaten = true;
        else
          return wereAnyEaten;
        if (chr === '/') {
          peek = this.peek();
          if (peek === '*') {
            /* Block comment found. Gobble until resolved. */
            while(next !== '/' && !this.end()) {
              this.eatWhile(/[^*]/);
              this.next();
              next = this.next();
            }
            next = '';
          }
        }
      }
    },
    // `Stream.markTokenStart()` will set the start for the next token to
    // the current stream position (i.e., "where we are now").
    markTokenStart: function() {
      this.tokenStart = this.pos;
    },
    // `Stream.markTokenStartAfterSpace()` is a wrapper function for eating
    // up space, then marking the start for a new token.
    markTokenStartAfterSpace: function() {
      this.eatSpace();
      this.markTokenStart();
    },
    // `Stream.makeToken()` generates a JSON-serializable token object
    // representing the interval of text between the end of the last
    // generated token and the current stream position.
    makeToken: function() {
      if (this.pos == this.tokenStart)
        return null;
      var token = {
        value: this.text.slice(this.tokenStart, this.pos),
        interval: {
          start: this.tokenStart,
          end: this.pos
        }
      };
      this.tokenStart = this.pos;
      return token;
    },
    // `Stream.match()` acts like a multi-character eat—if *consume* is `true`
    // or not given—or a look-ahead that doesn't update the stream
    // position—if it is `false`. *string* must be a string. *caseFold* can
    // be set to `true` to make the match case-insensitive.
    match: function(string, consume, caseFold) {
      var substring = this.text.slice(this.pos, this.pos + string.length);
      if (caseFold) {
        string = string.toLowerCase();
        substring = substring.toLowerCase();
      }
      if (string == substring) {
        if (consume)
          this.pos += string.length;
        return true;
      }
      return false;
    }
  };


  // ### CSS Parsing
  // 
  // `CSSParser` is our internal CSS token stream parser object. This object
  // has references to the stream, as well as the HTML DOM builder that is
  // used by the HTML parser. 
  function CSSParser(stream, domBuilder) {
    this.stream = stream;
    this.domBuilder = domBuilder;
  }

  CSSParser.prototype = {
    // We keep a list of all currently valid CSS properties (CSS1-CSS3).
    // This list does not contain vendor prefixes.
    cssProperties: [
      "alignment-adjust","alignment-baseline","animation","animation-delay",
      "animation-direction","animation-duration","animation-iteration-count",
      "animation-name","animation-play-state","animation-timing-function",
      "appearance","azimuth","backface-visibility","background",
      "background-attachment","background-clip","background-color",
      "background-image","background-origin","background-position",
      "background-repeat","background-size","baseline-shift","binding",
      "bleed","bookmark-label","bookmark-level","bookmark-state",
      "bookmark-target","border","border-bottom","border-bottom-color",
      "border-bottom-left-radius","border-bottom-right-radius",
      "border-bottom-style","border-bottom-width","border-collapse",
      "border-color","border-image","border-image-outset",
      "border-image-repeat","border-image-slice","border-image-source",
      "border-image-width","border-left","border-left-color",
      "border-left-style","border-left-width","border-radius","border-right",
      "border-right-color","border-right-style","border-right-width",
      "border-spacing","border-style","border-top","border-top-color",
      "border-top-left-radius","border-top-right-radius","border-top-style",
      "border-top-width","border-width","bottom","box-decoration-break",
      "box-shadow","box-sizing","break-after","break-before","break-inside",
      "caption-side","clear","clip","color","color-profile","column-count",
      "column-fill","column-gap","column-rule","column-rule-color",
      "column-rule-style","column-rule-width","column-span","column-width",
      "columns","content","counter-increment","counter-reset","crop","cue",
      "cue-after","cue-before","cursor","direction","display",
      "dominant-baseline","drop-initial-after-adjust",
      "drop-initial-after-align","drop-initial-before-adjust",
      "drop-initial-before-align","drop-initial-size","drop-initial-value",
      "elevation","empty-cells","filter","fit","fit-position","flex-align",
      "flex-flow","flex-line-pack","flex-order","flex-pack","float","float-offset",
      "font","font-family","font-size","font-size-adjust","font-stretch",
      "font-style","font-variant","font-weight","grid-columns","grid-rows",
      "hanging-punctuation","height","hyphenate-after","hyphenate-before",
      "hyphenate-character","hyphenate-lines","hyphenate-resource","hyphens",
      "icon","image-orientation","image-rendering","image-resolution",
      "inline-box-align","left","letter-spacing","line-break","line-height",
      "line-stacking","line-stacking-ruby","line-stacking-shift",
      "line-stacking-strategy","list-style","list-style-image",
      "list-style-position","list-style-type","margin","margin-bottom",
      "margin-left","margin-right","margin-top","marker-offset","marks",
      "marquee-direction","marquee-loop","marquee-play-count","marquee-speed",
      "marquee-style","max-height","max-width","min-height","min-width",
      "move-to","nav-down","nav-index","nav-left","nav-right","nav-up",
      "opacity","orphans","outline","outline-color","outline-offset",
      "outline-style","outline-width","overflow","overflow-style",
      "overflow-wrap","overflow-x","overflow-y","padding","padding-bottom",
      "padding-left","padding-right","padding-top","page","page-break-after",
      "page-break-before","page-break-inside","page-policy","pause",
      "pause-after","pause-before","perspective","perspective-origin",
      "phonemes","pitch","pitch-range","play-during","position",
      "presentation-level","punctuation-trim","quotes","rendering-intent",
      "resize","rest","rest-after","rest-before","richness","right",
      "rotation","rotation-point","ruby-align","ruby-overhang",
      "ruby-position","ruby-span","src","size","speak","speak-header",
      "speak-numeral","speak-punctuation","speech-rate","stress","string-set",
      "tab-size","table-layout","target","target-name","target-new",
      "target-position","text-align","text-align-last","text-decoration",
      "text-decoration-color","text-decoration-line","text-decoration-skip",
      "text-decoration-style","text-emphasis","text-emphasis-color",
      "text-emphasis-position","text-emphasis-style","text-height",
      "text-indent","text-justify","text-outline","text-shadow",
      "text-space-collapse","text-transform","text-underline-position",
      "text-wrap","top","transform","transform-origin","transform-style",
      "transition","transition-delay","transition-duration",
      "transition-property","transition-timing-function","unicode-bidi",
      "vertical-align","visibility","voice-balance","voice-duration",
      "voice-family","voice-pitch","voice-pitch-range","voice-rate",
      "voice-stress","voice-volume","volume","white-space","widows","width",
      "word-break","word-spacing","word-wrap","z-index"],
    // This helper verifies that a specific string is a known CSS property.
    // We include vendor-prefixed known CSS properties, like `-o-transition`.
    _knownCSSProperty: function(propertyName) {
      propertyName = propertyName.replace(/^-.+?-/,'');
      return this.cssProperties.indexOf(propertyName) > -1;
    },
    // #### The CSS Master Parse Function
    //
    // Here we process the token stream, assumed to have its pointer inside a
    // CSS element, and will try to parse the content inside it as CSS until
    // we hit the end of the CSS element.
    //
    // Any parse errors along the way will result in a `ParseError`
    // being thrown.
    parse: function() {
      // We'll use some instance variables to keep track of our parse
      // state:

      // * A list of the CSS rulesets for the CSS block.
      this.rules = [];
      
      // * A list of comment blocks inside the CSS.
      this.comments = [];

      // Parsing is based on finite states, and a call
      // to `_parseSelector()` will run through any number
      // of states until it either throws an error,
      // or terminates cleanly.
      var sliceStart = this.stream.pos;
      this.stream.markTokenStartAfterSpace();
      this._parseSelector();
      var sliceEnd = this.stream.pos;

      // If we get here, the CSS block has no errors,
      // and we report the start/end of the CSS block
      // in the stream, as well as the rules/comments
      // for the calling `HTMLparser` instance to work with.
      var cssBlock = {
        value: this.stream.text.slice(sliceStart, sliceEnd),
        parseInfo: {
          start: sliceStart,
          end: sliceEnd,
          rules: this.rules,
          comments: this.comments
        }
      };

      this.rules = null;
      this.comments = null;
      return cssBlock;
    },
    // #### CSS Comment Parsing
    //
    // Here we record the position of comments in *term* in the instance's
    // comment list, and return *term* with all its comments stripped.
    stripComments: function(term, startPos) {
      var pos,
          last = term.length,
          commentStart, commentEnd,
          prev, next,
          stripped = "";
      for (pos=0; pos < last; pos++) {
        if (term[pos] === '/' && pos<last-1 && term[pos+1] === '*') {
          commentStart = startPos + pos;
          pos += 3;
          while(pos < last-1 && term.substr(pos-1,2) !== "*/") {
            pos++;
          }
          if (pos >= last-1 && term.substr(pos-1,2) !== "*/")
            throw new ParseError("UNTERMINATED_CSS_COMMENT", commentStart);
          commentEnd = startPos + pos + 1;
          this.comments.push({start: commentStart, end: commentEnd});
        } else {
          stripped += term[pos];
        }
      }
      return stripped.trim();
    },
    // #### CSS Comment Filtering
    //
    // Here we filter a token so that its start and end positions
    // point to the content without leading and trailing comments,
    // with comments in the token.value completely removed.
    filterComments: function(token) {
      var text = token.value,
          tsize = text.length,
          ntsize,
          stripped = this.stripComments(text, token.interval.start);
      // strip leading comments
      text = text.replace(/^\s+/,"");
      text = text.replace(/^\/\*[\w\W]*?\*\/\s*/,'');
      ntsize = text.length;
      token.interval.start += tsize - ntsize;
      // strip trailing comments (=reverse and repeat previous)
      tsize = ntsize;
      text = text.split('').reverse().join('');
      text = text.replace(/^\s+/,"");
      text = text.replace(/^\/\*[\w\W]*?\*\/\s*/,'');
      // FIXME: this still fails comments like this: /* ... /* ... */,
      //        which is a single block. The problems is that in the
      //        reversed string this looks like /* ... */ ... */ which
      //        counts as one block plus left-over junk.
      ntsize = text.length;
      token.interval.end -= tsize - ntsize;
      // commit text change
      token.value = stripped;
    },
    // #### CSS Selector Parsing
    //
    // A selector is a string, and terminates on `{`, which signals
    // the start of a CSS property/value pair (which may be empty).
    //
    // There are a few characters in selectors that are an immediate error:
    //
    // * `;`  Rule terminator (ERROR: missing block opener)
    // * `}`  End of css block (ERROR: missing block opener)
    // * `<`  End of `<style>` element, start of `</style>`
    //   (ERROR: css declaration has no body)
    //
    // Note that we cannot flag `:` as an error because pseudo-classes use
    // it as their prefix.
    _parseSelector: function() {
      // Depending on our state, we may be coming from having just parsed
      // a rule. If that's the case, add it to our list of rules.
      if (this.currentRule) {
        this.rules.push(this.currentRule);
        this.currentRule = null;
      }

      // Gobble all characters that could be part of the selector.
      this.stream.eatCSSWhile(/[^\{;\}<]/);
      var token = this.stream.makeToken(),
          peek = this.stream.peek();
      
      // If there was nothing to select, we're either done,
      // or an error occurred.
      if (token === null) {
        if (!this.stream.end() && this.stream.peek() === '<') {
          // if this is the start of <!-- make sure to throw an error
          if (this.stream.substream(2) !== "</") {
            throw new ParseError("HTML_CODE_IN_CSS_BLOCK", this, this.stream.pos-1,
                                 this.stream.pos);
          }
          return;
        }
        throw new ParseError("MISSING_CSS_SELECTOR", this, this.stream.pos-1,
                             this.stream.pos);
      }

      // If we get here, we have a selector string.
      // Filter the token for comments before continueing.
      this.filterComments(token);
      var selector = token.value,
          selectorStart = token.interval.start,
          selectorEnd = token.interval.end;

      if (selector === '') {
        this._parseSelector();
        return;
      }

      // Now we'll set up a ruleset object for this selector.
      this.currentRule = {
        selector: {
          value: selector,
          start: selectorStart,
          end: selectorEnd
        },
        declarations: {
          start: null,
          end: null,
          properties: []
        }
      };

      // Now we start to analyse whether we can continue,
      // or whether we're in a terminal state, based on the
      // next character in the stream.
      if (this.stream.end() || peek === '<') {
        throw new ParseError("UNFINISHED_CSS_SELECTOR", this, selectorStart,
                             selectorEnd, selector);
      }

      if (!this.stream.end()) {
        var next = this.stream.next(),
            errorMsg = "[_parseSelector] Expected {, }, ; or :, " +
                       "instead found " + next;
        if (next === '{') {
          // The only legal continuation after a selector is the opening
          // `{` character. If that's the character we see, we can mark the
          // start of the declarations block and start parsing them.
          this.currentRule.declarations.start = this.stream.pos-1;
          this._parseDeclaration(selector, selectorStart);
        } else if (next === ';' || next === '}') {
          // Otherwise, this is a parse error; we should have seen `{`
          // instead.
          throw new ParseError("MISSING_CSS_BLOCK_OPENER", this,
                               selectorStart, selectorEnd, selector);
        } else {
          // We get here if an unexpected character was found.
          throw new ParseError("UNCAUGHT_CSS_PARSE_ERROR", this,
                               token.interval.start, token.interval.end,
                               errorMsg);
        }
      } else {
        // If the stream ended after the selector, we want the user to follow
        // up with `{`.
        throw new ParseError("MISSING_CSS_BLOCK_OPENER", this, selectorStart,
                             selectorEnd, selector);
      }
    },
    // #### CSS Declaration Parsing
    //
    // A declaration is a `property: value;` pair. It can be empty,
    // in which case the next character must be `}`.
    _parseDeclaration: function(selector, selectorStart, value) {
      // First, we forward the stream to the next non-space character.
      this.stream.markTokenStartAfterSpace();
      var peek = this.stream.peek();
      if (peek === '}') {
        // If the next character is `}` then this is an empty block, and we
        // should move on to trying to read a new selector ruleset.
        this.stream.next();
        this.currentRule.declarations.end = this.stream.pos;
        this.stream.markTokenStartAfterSpace();
        this._parseSelector();
      }
      // Administratively important: there are two ways for this function
      // to have been called. One is from `_parseSelector()`, which is
      // "the normal way", the other from `_parseValue()`, after finding a
      // properly closed `property:value;` pair. In this case *value* will be
      // the last declaration's value, which will let us throw a sensible
      // debug error in case the stream is empty at this point, or points to
      // `</style>`.
      else if (value && (this.stream.end() || peek === '<')) {
        throw new ParseError("MISSING_CSS_BLOCK_CLOSER", this, selectorStart,
                             selectorStart+value.length, value);
      }
      
      // If we're still in this function at this point, all is well
      // and we can move on to property parsing.
      else {
        this._parseProperty(selector, selectorStart);
      }
    },
    // #### CSS Property Parsing
    // There is a fixed list of CSS properties, and we must check two things:
    //
    // 1. Does the token string contain a syntax-legal property?
    // 2. Is that property in the set of known ones?
    //
    // Properties are terminated by `:`, but we might also see the following
    // characters, which should signal an error:
    //
    // * `;` rule terminator (ERROR: missing value)
    // * `}` end of CSS block (ERROR: missing value)
    // * `<` end of `<style>` element, start of `</style>`
    //   (ERROR: missing value)
    _parseProperty: function(selector, selectorStart) {
      var property = this.stream.eatCSSWhile(/[^\{\}<;:]/),
          token = this.stream.makeToken();

      if (token === null) {
        throw new ParseError("MISSING_CSS_PROPERTY", this, selectorStart,
                             selectorStart + selector.length, selector);
      }

      this.filterComments(token)
      var property = token.value,
          propertyStart = token.interval.start,
          propertyEnd = token.interval.end;

      if (property === '') {
        this._parseDeclaration(selector, selectorStart);
        return;
      }

      var next = this.stream.next(),
          errorMsg = "[_parseProperty] Expected }, {, <, ; or :, " +
                     "instead found " + next;

      if (next === '{') {
        throw new ParseError("MISSING_CSS_BLOCK_CLOSER", this, selectorStart,
                             propertyStart, selector);
      }


      if ((this.stream.end() && next !== ':') || next === '<' ||
          next === '}') {
        throw new ParseError("UNFINISHED_CSS_PROPERTY", this, propertyStart,
                             propertyEnd, property);
      }

      // We record `property: value` pairs as we run through the stream,
      // which are added to the set of `property: value` pairs in the
      // instance's `rules.properties` array. The push happens when we have a
      // clean run in `_parseValue()`.
      this.currentProperty = {
        name: {
          value: property,
          start: propertyStart,
          end: propertyEnd
        }
      };

      // If we find a colon, we have a property and now need a value to go
      // along with it.
      if (next === ':') {
        // Before we continue, we must make sure the string we found is a real
        // CSS property.
        if (!( property && property.match(/^[a-z\-]+$/)) ||
            !this._knownCSSProperty(property))
          throw new ParseError("INVALID_CSS_PROPERTY_NAME", this,
                               propertyStart, propertyEnd, property);
        this.stream.markTokenStartAfterSpace();
        this._parseValue(selector, selectorStart, property, propertyStart);
      }
      // Otherwise, anything else at this point constitutes an error.
      else if (next === ';') {
        throw new ParseError("MISSING_CSS_VALUE", this, propertyStart,
                             propertyEnd, property);
      }
      else {
        throw new ParseError("UNCAUGHT_CSS_PARSE_ERROR", this,
                             token.interval.start, token.interval.end,
                             errorMsg);
      }
    },
    // #### CSS Value Parsing
    //
    // A value must end either in `;` or in `}`. However, we may also find:
    //
    // * `<` end of `<style>` element, start of `</style>`
    //   (ERROR: missing block closer)
    _parseValue: function(selector, selectorStart, property, propertyStart) {
      var rule = this.stream.eatCSSWhile(/[^}<;]/),
          token = this.stream.makeToken();
          
      if(token === null) {
        throw new ParseError("MISSING_CSS_VALUE", this, propertyStart,
                             propertyStart+property.length, property);
      }

      var next = (!this.stream.end() ? this.stream.next() : "end of stream"),
          errorMsg = "[_parseValue] Expected }, <, or ;, instead found "+next;
      
      
      this.filterComments(token);
      var value = token.value,
          valueStart = token.interval.start,
          valueEnd = token.interval.end;

      if (value === '') {
        throw new ParseError("MISSING_CSS_VALUE", this, this.stream.pos-1,
                             this.stream.pos);
      }

      // At this point we can fill in the *value* part of the current
      // `property: value;` pair. However, we hold off binding it until
      // we are sure there are no parse errors.
      this.currentProperty.value = {
        value: value,
        start: valueStart,
        end: valueEnd
      }

      if ((this.stream.end() && next !== ';') || next === '<') {
        throw new ParseError("UNFINISHED_CSS_VALUE", this, valueStart,
                             valueEnd, value);
      }

      if (next === ';') {
        // This is normal CSS rule termination; try to read a new
        // property/value pair.
        this._bindCurrentRule();
        this.stream.markTokenStartAfterSpace();
        this._parseDeclaration(selector, valueStart, value);
      }
      else if (next === '}') {
        // This is block level termination; try to read a new selector.
        this.currentRule.declarations.end = this.stream.pos;
        this._bindCurrentRule();
        this.stream.markTokenStartAfterSpace();
        this._parseSelector();
      }
      else {
        throw new ParseError("UNCAUGHT_CSS_PARSE_ERROR", this,
                             token.interval.start, token.interval.end,
                             errorMsg);
      }
    },
    // This helper function binds the currrent `property: value` object
    // in the current ruleset, and resets it for the next selector block. 
    _bindCurrentRule: function() {
      this.currentRule.declarations.properties.push(this.currentProperty);
      this.currentProperty = null;
    }
  }


  // ### HTML Parsing
  //
  // The HTML token stream parser object has references to the stream,
  // as well as a DOM builder that is used to construct the DOM while we
  // run through the token stream.
  function HTMLParser(stream, domBuilder) {
    this.stream = stream;
    this.domBuilder = domBuilder;
    this.cssParser = new CSSParser(stream, domBuilder);
  }

  HTMLParser.prototype = {
    html5Doctype: '<!DOCTYPE html>',
    // Void HTML elements are the ones that don't need to have a closing
    // tag.
    voidHtmlElements: ["area", "base", "br", "col", "command", "embed", "hr",
                       "img", "input", "keygen", "link", "meta", "param",
                       "source", "track", "wbr"],
    // We keep a list of all valid HTML5 elements.
    htmlElements: ["a", "abbr", "address", "area", "article", "aside",
                   "audio", "b", "base", "bdi", "bdo", "bgsound", "blink",
                   "blockquote", "body", "br", "button", "canvas", "caption",
                   "cite", "code", "col", "colgroup", "command", "datalist",
                   "dd", "del", "details", "dfn", "div", "dl", "dt", "em",
                   "embed", "fieldset", "figcaption", "figure", "footer",
                   "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5",
                   "h6", "head", "header", "hgroup", "hr", "html", "i",
                   "iframe", "img", "input", "ins", "kbd", "keygen", "label",
                   "legend", "li", "link", "map", "mark", "marquee", "menu",
                   "meta", "meter", "nav", "nobr", "noscript", "object", "ol",
                   "optgroup", "option", "output", "p", "param", "pre",
                   "progress", "q", "rp", "rt", "ruby", "samp", "script",
                   "section", "select", "small", "source", "spacer", "span",
                   "strong", "style", "sub", "summary", "sup", "table",
                   "tbody", "td", "textarea", "tfoot", "th", "thead", "time",
                   "title", "tr", "track", "u", "ul", "var", "video", "wbr"],
    // We also keep a list of HTML elements that are now obsolete, but
    // may still be encountered in the wild on popular sites.
    obsoleteHtmlElements: ["acronym", "applet", "basefont", "big", "center",
                           "dir", "font", "isindex", "listing", "noframes",
                           "plaintext", "s", "strike", "tt", "xmp"],

    // This is a helper function to determine whether a given string
    // is a legal HTML element tag.
    _knownHTMLElement: function(tagName) {
      return this.voidHtmlElements.indexOf(tagName) > -1 || 
              this.htmlElements.indexOf(tagName) > -1 ||
              this.obsoleteHtmlElements.indexOf(tagName) > -1;
    },
    // This is a helper function to determine whether a given string
    // is a void HTML element tag.
    _knownVoidHTMLElement: function(tagName) {
      return this.voidHtmlElements.indexOf(tagName) > -1;
    },
    // #### The HTML Master Parse Function
    //
    // The HTML master parse function works the same as the CSS
    // parser: it takes the token stream and will try to parse
    // the content as a sequence of HTML elements.
    //
    // Any parse errors along the way will result in the code
    // throwing a `ParseError`.
    parse: function() {
      // First we check to see if the beginning of our stream is
      // an HTML5 doctype tag. We're currently quite strict and don't
      // parse XHTML or other doctypes.
      if (this.stream.match(this.html5Doctype, true, true))
        this.domBuilder.fragment.parseInfo = {
          doctype: {
            start: 0,
            end: this.stream.pos
          }
        };
      
      // Next, we parse "tag soup", creating text nodes and diving into
      // tags as we find them.
      while (!this.stream.end()) {
        if (this.stream.peek() == '<') {
          this._buildTextNode();
          this._parseStartTag();
        } else
          this.stream.next();
      }

      this._buildTextNode();

      // At the end, it's possible we're left with an open tag, so
      // we test for that.
      if (this.domBuilder.currentNode != this.domBuilder.fragment)
        throw new ParseError("UNCLOSED_TAG", this);
    },
    // This is a helper to build a DOM text node.
    _buildTextNode: function() {
      var token = this.stream.makeToken();
      if (token) {
        this.domBuilder.text(replaceEntityRefs(token.value), token.interval);
      }
    },
    // #### HTML Tag Parsing
    //
    // This is the entry point for parsing the beginning of an HTML tag.
    // It assumes the stream is on a `<` character.
    _parseStartTag: function() {
      if (this.stream.next() != '<')
        throw new Error('assertion failed, expected to be on "<"');

      if (this.stream.match('!--', true)) {
        this._parseComment();
        return;
      }
      
      this.stream.eat(/\//);
      this.stream.eatWhile(/[\w\d]/);
      var token = this.stream.makeToken();
      var tagName = token.value.slice(1).toLowerCase();
      
      // If the character after the `<` is a `/`, we're on a closing tag.
      // We want to report useful errors about whether the tag is unexpected
      // or doesn't match with the most recent opening tag.
      if (tagName[0] == '/') {
        var closeTagName = tagName.slice(1).toLowerCase();
        if (this._knownVoidHTMLElement(closeTagName))
          throw new ParseError("CLOSE_TAG_FOR_VOID_ELEMENT", this,
                               closeTagName, token);
        if (!this.domBuilder.currentNode.parseInfo)
          throw new ParseError("UNEXPECTED_CLOSE_TAG", this, closeTagName,
                               token);
        this.domBuilder.currentNode.parseInfo.closeTag = {
          start: token.interval.start
        };
        var openTagName = this.domBuilder.currentNode.nodeName.toLowerCase();
        if (closeTagName != openTagName)
          throw new ParseError("MISMATCHED_CLOSE_TAG", this, openTagName,
                               closeTagName, token);
        this._parseEndCloseTag();
      }
      
      else {
        // We want to make sure that opening tags have valid tag names.
        if (!(tagName && this._knownHTMLElement(tagName)))
          throw new ParseError("INVALID_TAG_NAME", tagName, token);

        this.domBuilder.pushElement(tagName, {
          openTag: {
            start: token.interval.start
          }
        });
        if (!this.stream.end())
          this._parseEndOpenTag(tagName);
      }
    },
    // This helper parses HTML comments. It assumes the stream has just
    // passed the beginning `<!--` of an HTML comment.
    _parseComment: function() {
      var token;
      while (!this.stream.end()) {
        if (this.stream.match('-->', true)) {
          token = this.stream.makeToken();
          this.domBuilder.comment(token.value.slice(4, -3), token.interval);
          return;
        }
        this.stream.next();
      }
      token = this.stream.makeToken();
      throw new ParseError("UNTERMINATED_COMMENT", token);
    },
    // This helper function parses the end of a closing tag. It expects
    // the stream to be right after the end of the closing tag's tag
    // name.
    _parseEndCloseTag: function() {
      this.stream.eatSpace();
      if (this.stream.next() != '>')
        throw new ParseError("UNTERMINATED_CLOSE_TAG", this);
      var end = this.stream.makeToken().interval.end;
      this.domBuilder.currentNode.parseInfo.closeTag.end = end;
      this.domBuilder.popElement();
    },
    // This helper function parses the rest of an opening tag after
    // its tag name, looking for `attribute="value"` data until a
    // `>` is encountered.
    _parseEndOpenTag: function(tagName) {
      /* FIXME: we probably don't need while() here, as the parser will
       *        either cleanly terminate or throw a ParseError anyway? */
      while (!this.stream.end()) {
        if (this.stream.eatWhile(/[A-Za-z\-]/)) {
          this._parseAttribute();
        }
        else if (this.stream.eatSpace()) {
          this.stream.makeToken();
        }
        else if (this.stream.peek() == '>' || this.stream.match("/>")) {
          if (this.stream.match("/>", true)) {
            if (!this._knownVoidHTMLElement(tagName))
              throw new ParseError("SELF_CLOSING_NON_VOID_ELEMENT", this, 
                                   tagName);
          } else
            this.stream.next();
          var end = this.stream.makeToken().interval.end;
          this.domBuilder.currentNode.parseInfo.openTag.end = end;

          // If the opening tag represents a void element, there will not be
          // a closing element, so we tell our DOM builder that we're done.
          if (tagName && this._knownVoidHTMLElement(tagName))
            this.domBuilder.popElement();
          
          // If the opening tag represents a `<style>` element, we hand
          // off parsing to our CSS parser.
          if (!this.stream.end() && tagName === "style") {
            var cssBlock = this.cssParser.parse();
            this.domBuilder.text(cssBlock.value, cssBlock.parseInfo);
          }

          return;
        } else
          throw new ParseError("UNTERMINATED_OPEN_TAG", this);
      }
    },
    // This helper function parses an HTML tag attribute. It expects
    // the stream to be right after the end of an attribute name.
    _parseAttribute: function() {
      var nameTok = this.stream.makeToken();
      nameTok.value = nameTok.value.toLowerCase();
      this.stream.eatSpace();
      // If the character after the attribute name is a `=`, then we
      // look for an attribute value; otherwise, this is a boolean
      // attribute.
      if (this.stream.peek() == '=') {
        this.stream.next();
        // Currently, we only support quoted attribute values, even
        // though the HTML5 standard allows them to sometimes go unquoted.
        this.stream.eatSpace();
        this.stream.makeToken();
        var quoteType = this.stream.next();
        if (quoteType !== '"' && quoteType !== "'") {
          throw new ParseError("UNQUOTED_ATTR_VALUE", this);
        }
        if (quoteType === '"') {
          this.stream.eatWhile(/[^"]/);
        } else {
          this.stream.eatWhile(/[^']/);
        }
        if (this.stream.next() !== quoteType) {
          throw new ParseError("UNTERMINATED_ATTR_VALUE", this, nameTok);
        }
        var valueTok = this.stream.makeToken();
        var unquotedValue = replaceEntityRefs(valueTok.value.slice(1, -1));
        this.domBuilder.attribute(nameTok.value, unquotedValue, {
          name: nameTok.interval,
          value: valueTok.interval
        });
      } else {
        this.stream.makeToken();
        this.domBuilder.attribute(nameTok.value, '', {
          name: nameTok.interval
        });
      }
    }
  };

  // ### The DOM Builder
  //
  // The DOM builder is used to construct a DOM representation of the
  // HTML/CSS being parsed. Each node contains a `parseInfo` expando
  // property that contains information about the text extents of the
  // original source code that the DOM element maps to.
  //
  // The DOM builder is given a single document DOM object that will
  // be used to create all necessary DOM nodes.
  function DOMBuilder(document) {
    this.document = document;
    this.fragment = document.createDocumentFragment();
    this.currentNode = this.fragment;
  }

  DOMBuilder.prototype = {
    // This method pushes a new element onto the DOM builder's stack.
    // The element is appended to the currently active element and is
    // then made the new currently active element.
    pushElement: function(tagName, parseInfo) {
      var node = this.document.createElement(tagName);
      node.parseInfo = parseInfo;
      this.currentNode.appendChild(node);
      this.currentNode = node;
    },
    // This method pops the current element off the DOM builder's stack,
    // making its parent element the currently active element.
    popElement: function() {
      this.currentNode = this.currentNode.parentNode;
    },
    // This method appends an HTML comment node to the currently active
    // element.
    comment: function(data, parseInfo) {
      var comment = this.document.createComment('');
      comment.nodeValue = data;
      comment.parseInfo = parseInfo;
      this.currentNode.appendChild(comment);
    },
    // This method appends an attribute to the currently active element.
    attribute: function(name, value, parseInfo) {
      var attrNode = this.document.createAttribute(name);
      attrNode.parseInfo = parseInfo;
      attrNode.nodeValue = value;
      this.currentNode.attributes.setNamedItem(attrNode);
    },
    // This method appends a text node to the currently active element.
    text: function(text, parseInfo) {
      var textNode = this.document.createTextNode(text);
      textNode.parseInfo = parseInfo;
      this.currentNode.appendChild(textNode);
    }
  };

  // ### Exported Symbols
  // 
  // `Slowparse` is the object that holds all exported symbols from
  // this library.
  var Slowparse = {
    // We export our list of recognized HTML elements and CSS properties
    // for clients to use if needed.
    HTML_ELEMENT_NAMES: HTMLParser.prototype.voidHtmlElements.concat(
                          HTMLParser.prototype.htmlElements.concat(
                            HTMLParser.prototype.obsoleteHtmlElements)),
    CSS_PROPERTY_NAMES: CSSParser.prototype.cssProperties,

    // We also export a few internal symbols for use by Slowparse's
    // testing suite.
    replaceEntityRefs: replaceEntityRefs,
    Stream: Stream,

    // `Slowparse.HTML()` is the primary function we export. Given
    // a DOM document object (or a DOMBuilder instance) and a string
    // of HTML, we return an object with the following keys:
    //
    // * `document` is a DOM document fragment containing the DOM of
    //   the parsed HTML. If an error occurred while parsing, this
    //   document is incomplete, and represents what was built before
    //   the error was encountered.
    //
    // * `error` is a JSON-serializable object representing any error
    //   that occurred while parsing. If no errors occurred while parsing,
    //   its value is `null`. For a list of the types of errors that
    //   can be returned, see the [error specification][].
    //
    // An array of error detector functions can also be passed as a
    // third argument to this function. An error detector function takes
    // the HTML and generated document fragment as arguments and returns
    // an error object if an error is detected, or `undefined` otherwise.
    // This can be used for further error checking on the parsed document.
    //
    //   [error specification]: http://toolness.github.com/slowparse/spec/
    HTML: function(document, html, errorDetectors) {
      var stream = new Stream(html),
          domBuilder,
          parser,
          error = null;

      if (document.pushElement)
        domBuilder = document;
      else
        domBuilder = new DOMBuilder(document);
      parser = new HTMLParser(stream, domBuilder);

      try {
        parser.parse();
      } catch (e) {
        if (e.parseInfo) {
          error = e.parseInfo;
        } else
          throw e;
      }
      
      (errorDetectors || []).forEach(function(detector) {
        if (!error)
          error = detector(html, domBuilder.fragment) || null;
      });

      return {
        document: domBuilder.fragment,
        error: error
      };
    },
    // `Slowparse.findError()` just returns any error in the given HTML
    // string, or `null` if the HTML contains no errors.
    findError: function(html, errorDetectors) {
      return this.HTML(document, html, errorDetectors).error;
    }
  };

  if (typeof(define) == "function") {
    define('slowparse/slowparse',[],function() { return Slowparse; });
  } else
    return Slowparse;
})();



// A subclass of IndexableCodeMirror which continuously re-parses
// the code in its editor. Also adds a Backbone.Events interface
// for extension points to hook into.
define('fc/ui/parsing-codemirror',[
  'underscore',
  "fc/ui/indexable-codemirror",
  "slowparse/tree-inspectors",
  "slowparse/slowparse"
], function(_, IndexableCodeMirror, TreeInspectors, Slowparse) {

  function parseSource (html) {
    return Slowparse.HTML(document, html, [TreeInspectors.forbidJS]);
  }

  return function ParsingCodeMirror(place, givenOptions) {
    // Called whenever content of the editor area changes.
    function reparse() {
      var sourceCode = codeMirror.getValue();
      var result = (givenOptions.parse || parseSource)(sourceCode);
      codeMirror.trigger("reparse", {
        error: result.error,
        sourceCode: sourceCode,
        document: result.document
      });
      // Cursor activity would've been fired before us, so call it again
      // to make sure it displays the right context-sensitive help based
      // on the new state of the document.
      onCursorActivity();
    }

    // Called whenever the user moves their cursor in the editor area.
    function onCursorActivity() {
      codeMirror.trigger("cursor-activity");
    }

    // The number of milliseconds to wait before re-parsing the editor
    // content.
    var parseDelay = givenOptions.parseDelay || 300;
    var time = givenOptions.time || window;
    var reparseTimeout;

    givenOptions.onChange = function() {
      codeMirror.trigger("change");
      if (reparseTimeout !== undefined)
        time.clearTimeout(reparseTimeout);
      reparseTimeout = time.setTimeout(reparse, parseDelay);
    };
    givenOptions.onCursorActivity = onCursorActivity;

    var codeMirror = IndexableCodeMirror(place, givenOptions);
    _.extend(codeMirror, Backbone.Events);
    codeMirror.reparse = reparse;
    return codeMirror;
  };
});



// This helper class keeps track of different kinds of highlighting in
// a CodeMirror instance.
define('fc/ui/mark-tracker',[],function() {
  return function MarkTracker(codeMirror) {
    var classNames = {};
    var marks = [];

    return {
      // Mark a given start/end interval in the CodeMirror, based on character
      // indices (not {line, ch} objects), with the given class name. If
      // an element is provided, give it the class name too.
      mark: function(start, end, className, element) {
        if (!(className in classNames))
          classNames[className] = [];
        if (element) {
          classNames[className].push(element);
          $(element).addClass(className);
        }
        start = codeMirror.posFromIndex(start);
        end = codeMirror.posFromIndex(end);
        marks.push(codeMirror.markText(start, end, className));
      },
      // Clear all marks made so far and remove the class from any elements
      // it was previously given to.
      clear: function() {
        marks.forEach(function(mark) {
          // Odd, from the CodeMirror docs you'd think this would remove
          // the class from the highlighted text, too, but it doesn't.
          // I guess we're just garbage collecting here.
          mark.clear();
        });
        var wrapper = codeMirror.getWrapperElement();
        for (var className in classNames) {
          classNames[className].forEach(function(element) {
            $(element).removeClass(className);
          });
          $("." + className, wrapper).removeClass(className);
        }

        marks = [];
        classNames = {};
      }
    };
  };
});
  
/**
 * @license RequireJS text 2.0.0+ Copyright (c) 2010-2012, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/requirejs/text for details
 */
/*jslint regexp: true */
/*global require: false, XMLHttpRequest: false, ActiveXObject: false,
  define: false, window: false, process: false, Packages: false,
  java: false, location: false */

define('text',['module'], function (module) {
    

    var progIds = ['Msxml2.XMLHTTP', 'Microsoft.XMLHTTP', 'Msxml2.XMLHTTP.4.0'],
        xmlRegExp = /^\s*<\?xml(\s)+version=[\'\"](\d)*.(\d)*[\'\"](\s)*\?>/im,
        bodyRegExp = /<body[^>]*>\s*([\s\S]+)\s*<\/body>/im,
        hasLocation = typeof location !== 'undefined' && location.href,
        defaultProtocol = hasLocation && location.protocol && location.protocol.replace(/\:/, ''),
        defaultHostName = hasLocation && location.hostname,
        defaultPort = hasLocation && (location.port || undefined),
        buildMap = [],
        masterConfig = module.config(),
        text, fs;

    text = {
        version: '2.0.0+',

        strip: function (content) {
            //Strips <?xml ...?> declarations so that external SVG and XML
            //documents can be added to a document without worry. Also, if the string
            //is an HTML document, only the part inside the body tag is returned.
            if (content) {
                content = content.replace(xmlRegExp, "");
                var matches = content.match(bodyRegExp);
                if (matches) {
                    content = matches[1];
                }
            } else {
                content = "";
            }
            return content;
        },

        jsEscape: function (content) {
            return content.replace(/(['\\])/g, '\\$1')
                .replace(/[\f]/g, "\\f")
                .replace(/[\b]/g, "\\b")
                .replace(/[\n]/g, "\\n")
                .replace(/[\t]/g, "\\t")
                .replace(/[\r]/g, "\\r")
                .replace(/[\u2028]/g, "\\u2028")
                .replace(/[\u2029]/g, "\\u2029");
        },

        createXhr: masterConfig.createXhr || function () {
            //Would love to dump the ActiveX crap in here. Need IE 6 to die first.
            var xhr, i, progId;
            if (typeof XMLHttpRequest !== "undefined") {
                return new XMLHttpRequest();
            } else if (typeof ActiveXObject !== "undefined") {
                for (i = 0; i < 3; i += 1) {
                    progId = progIds[i];
                    try {
                        xhr = new ActiveXObject(progId);
                    } catch (e) {}

                    if (xhr) {
                        progIds = [progId];  // so faster next time
                        break;
                    }
                }
            }

            return xhr;
        },

        /**
         * Parses a resource name into its component parts. Resource names
         * look like: module/name.ext!strip, where the !strip part is
         * optional.
         * @param {String} name the resource name
         * @returns {Object} with properties "moduleName", "ext" and "strip"
         * where strip is a boolean.
         */
        parseName: function (name) {
            var strip = false, index = name.indexOf("."),
                modName = name.substring(0, index),
                ext = name.substring(index + 1, name.length);

            index = ext.indexOf("!");
            if (index !== -1) {
                //Pull off the strip arg.
                strip = ext.substring(index + 1, ext.length);
                strip = strip === "strip";
                ext = ext.substring(0, index);
            }

            return {
                moduleName: modName,
                ext: ext,
                strip: strip
            };
        },

        xdRegExp: /^((\w+)\:)?\/\/([^\/\\]+)/,

        /**
         * Is an URL on another domain. Only works for browser use, returns
         * false in non-browser environments. Only used to know if an
         * optimized .js version of a text resource should be loaded
         * instead.
         * @param {String} url
         * @returns Boolean
         */
        useXhr: function (url, protocol, hostname, port) {
            var match = text.xdRegExp.exec(url),
                uProtocol, uHostName, uPort;
            if (!match) {
                return true;
            }
            uProtocol = match[2];
            uHostName = match[3];

            uHostName = uHostName.split(':');
            uPort = uHostName[1];
            uHostName = uHostName[0];

            return (!uProtocol || uProtocol === protocol) &&
                   (!uHostName || uHostName.toLowerCase() === hostname.toLowerCase()) &&
                   ((!uPort && !uHostName) || uPort === port);
        },

        finishLoad: function (name, strip, content, onLoad) {
            content = strip ? text.strip(content) : content;
            if (masterConfig.isBuild) {
                buildMap[name] = content;
            }
            onLoad(content);
        },

        load: function (name, req, onLoad, config) {
            //Name has format: some.module.filext!strip
            //The strip part is optional.
            //if strip is present, then that means only get the string contents
            //inside a body tag in an HTML string. For XML/SVG content it means
            //removing the <?xml ...?> declarations so the content can be inserted
            //into the current doc without problems.

            // Do not bother with the work if a build and text will
            // not be inlined.
            if (config.isBuild && !config.inlineText) {
                onLoad();
                return;
            }

            masterConfig.isBuild = config.isBuild;

            var parsed = text.parseName(name),
                nonStripName = parsed.moduleName + '.' + parsed.ext,
                url = req.toUrl(nonStripName),
                useXhr = (masterConfig.useXhr) ||
                         text.useXhr;

            //Load the text. Use XHR if possible and in a browser.
            if (!hasLocation || useXhr(url, defaultProtocol, defaultHostName, defaultPort)) {
                text.get(url, function (content) {
                    text.finishLoad(name, parsed.strip, content, onLoad);
                }, function (err) {
                    if (onLoad.error) {
                        onLoad.error(err);
                    }
                });
            } else {
                //Need to fetch the resource across domains. Assume
                //the resource has been optimized into a JS module. Fetch
                //by the module name + extension, but do not include the
                //!strip part to avoid file system issues.
                req([nonStripName], function (content) {
                    text.finishLoad(parsed.moduleName + '.' + parsed.ext,
                                    parsed.strip, content, onLoad);
                });
            }
        },

        write: function (pluginName, moduleName, write, config) {
            if (buildMap.hasOwnProperty(moduleName)) {
                var content = text.jsEscape(buildMap[moduleName]);
                write.asModule(pluginName + "!" + moduleName,
                               "define(function () { return '" +
                                   content +
                               "';});\n");
            }
        },

        writeFile: function (pluginName, moduleName, req, write, config) {
            var parsed = text.parseName(moduleName),
                nonStripName = parsed.moduleName + '.' + parsed.ext,
                //Use a '.js' file name so that it indicates it is a
                //script that can be loaded across domains.
                fileName = req.toUrl(parsed.moduleName + '.' +
                                     parsed.ext) + '.js';

            //Leverage own load() method to load plugin value, but only
            //write out values that do not have the strip argument,
            //to avoid any potential issues with ! in file names.
            text.load(nonStripName, req, function (value) {
                //Use own write() method to construct full module value.
                //But need to create shell that translates writeFile's
                //write() to the right interface.
                var textWrite = function (contents) {
                    return write(fileName, contents);
                };
                textWrite.asModule = function (moduleName, contents) {
                    return write.asModule(moduleName, fileName, contents);
                };

                text.write(pluginName, nonStripName, textWrite, config);
            }, config);
        }
    };

    if (typeof process !== "undefined" &&
             process.versions &&
             !!process.versions.node) {
        //Using special require.nodeRequire, something added by r.js.
        fs = require.nodeRequire('fs');

        text.get = function (url, callback) {
            var file = fs.readFileSync(url, 'utf8');
            //Remove BOM (Byte Mark Order) from utf8 files if it is there.
            if (file.indexOf('\uFEFF') === 0) {
                file = file.substring(1);
            }
            callback(file);
        };
    } else if (text.createXhr()) {
        text.get = function (url, callback, errback) {
            var xhr = text.createXhr();
            xhr.open('GET', url, true);

            //Allow overrides specified in config
            if (masterConfig.onXhr) {
                masterConfig.onXhr(xhr, url);
            }

            xhr.onreadystatechange = function (evt) {
                var status, err;
                //Do not explicitly handle errors, those should be
                //visible via console output in the browser.
                if (xhr.readyState === 4) {
                    status = xhr.status;
                    if (status > 399 && status < 600) {
                        //An http 4xx or 5xx error. Signal an error.
                        err = new Error(url + ' HTTP status: ' + status);
                        err.xhr = xhr;
                        errback(err);
                    } else {
                        callback(xhr.responseText);
                    }
                }
            };
            xhr.send(null);
        };
    } else if (typeof Packages !== 'undefined') {
        //Why Java, why is this so awkward?
        text.get = function (url, callback) {
            var encoding = "utf-8",
                file = new java.io.File(url),
                lineSeparator = java.lang.System.getProperty("line.separator"),
                input = new java.io.BufferedReader(new java.io.InputStreamReader(new java.io.FileInputStream(file), encoding)),
                stringBuffer, line,
                content = '';
            try {
                stringBuffer = new java.lang.StringBuffer();
                line = input.readLine();

                // Byte Order Mark (BOM) - The Unicode Standard, version 3.0, page 324
                // http://www.unicode.org/faq/utf_bom.html

                // Note that when we use utf-8, the BOM should appear as "EF BB BF", but it doesn't due to this bug in the JDK:
                // http://bugs.sun.com/bugdatabase/view_bug.do?bug_id=4508058
                if (line && line.length() && line.charAt(0) === 0xfeff) {
                    // Eat the BOM, since we've already found the encoding on this file,
                    // and we plan to concatenating this buffer with others; the BOM should
                    // only appear at the top of a file.
                    line = line.substring(1);
                }

                stringBuffer.append(line);

                while ((line = input.readLine()) !== null) {
                    stringBuffer.append(lineSeparator);
                    stringBuffer.append(line);
                }
                //Make sure we return a JavaScript string and not a Java string.
                content = String(stringBuffer.toString()); //String
            } finally {
                input.close();
            }
            callback(content);
        };
    }

    return text;
});

// This is a simple RequireJS plugin that loads an underscore.js template.
define('template',['module', 'text', 'underscore'], function (module, text, _) {
  var buildMap = {},
      masterConfig = module.config();

  return {
    load: function(name, req, onLoad, config) {
      var url = req.toUrl(name).replace('.js', '.html');

      //req(["text!templates/" + name + ".html"], function(text) {
      text.get('templates/' + name + '.html', function (data) {
        // remove white spaces
        data = data.replace(/\r\n|\n|\r/g, '');

        var template;
        if (config.isBuild) {
          template = buildMap[name] = "_.template('" + data  + "')";
        } else {
          template = _.template(data);
        }

        onLoad(template);
      });
    },
    write: function (pluginName, moduleName, write) {
      if (buildMap[moduleName]) {
        var content = buildMap[moduleName];
        write.asModule(pluginName + "!" + moduleName,
          "\ndefine(function () { \n  return " + content + ";});\n");
      }
    }
  };
});

define('template!help',[],function () { 
  return _.template('<div class="up-arrow"></div><div class="icon"></div><div class="content">  <%= html %>  <% if (type == "cssSelector") { %>    <span class="selector-matches"> It currently matches <%- matchCount %> element(s).</span>  <% } %>  <a class="learn-more" href="<%- url %>">more…</a></div><div class="down-arrow"></div>');});



// Provides context-sensitive help for a ParsingCodeMirror based on
// the current cursor position.
define('fc/ui/context-sensitive-help',[
  "jquery",
  "fc/ui/mark-tracker",
  "fc/help",
  "template!help"
], function($, MarkTracker, Help, HelpTemplate) {
  return function ContextSensitiveHelp(options) {
    var self = {};
    var codeMirror = options.codeMirror;
    var template = HelpTemplate;
    var helpArea = $(options.selector);
    var relocator = options.relocator;
    var helpIndex = Help.Index();
    var lastEvent = null;
    var timeout = null;
    var lastHelp = null;
    
    // The escape key should close hints 
    $(document).keyup(function(event) {
      if (event.keyCode == 27)
        clearHelp();
    });

    // Keep track of context-sensitive help highlighting.
    var cursorHelpMarks = MarkTracker(codeMirror);

    codeMirror.on("reparse", function(event) {
      clearHelp();
      lastEvent = event;
      helpIndex.clear();
      if (!event.error)
        helpIndex.build(event.document, event.sourceCode);
    });
    
    function showHelp(cursorIndex, help) {
      cursorHelpMarks.clear();

      if (help.type == "cssSelector") {
        // TODO: Because we're looking at the generated document fragment and
        // not an actual HTML document, implied elements like <body> may not
        // be captured here.
        var selector = help.highlights[0].value;
        var matches = lastEvent.document.querySelectorAll(selector).length;
        help.matchCount = matches;
      }
      var oldOffset = helpArea.offset();
      helpArea.html(template(help)).show();
      var startMark = null;
      help.highlights.forEach(function(interval) {
        var start = interval.start,
            end = interval.end;
        // Show the help message closest to the highlight that
        // encloses the current cursor position.
        if (start <= cursorIndex && end >= cursorIndex)
          startMark = start;
        cursorHelpMarks.mark(start, end, "cursor-help-highlight");
      });
      if (startMark !== null) {
        relocator.relocate(helpArea, startMark, "help");
        var newOffset = helpArea.offset();
        if (newOffset.top != oldOffset.top ||
            newOffset.left != oldOffset.left) {
          helpArea.hide();
          helpArea.fadeIn();
        }
      }
    }

    function clearHelp() {
      clearTimeout(timeout);
      lastHelp = null;
      cursorHelpMarks.clear();
      helpArea.hide();
      relocator.cleanup();
    }
    
    codeMirror.on("change", clearHelp);
    codeMirror.on("cursor-activity", function() {
      clearTimeout(timeout);
      
      // people may not want helpful hints
      if ($("#hints-nav-item .checkbox").hasClass("off")) return;

      // If the editor widget doesn't have input focus, this event
      // was likely triggered through some programmatic manipulation rather
      // than manual cursor movement, so don't bother displaying a hint.
      if (!$(codeMirror.getWrapperElement()).hasClass("CodeMirror-focused"))
        return;

      var cursorIndex = codeMirror.getCursorIndex();
      var help = helpIndex.get(cursorIndex);

      if (JSON.stringify(help) == lastHelp)
        return;

      clearHelp();
      if (help)
        timeout = setTimeout(function() {
          lastHelp = JSON.stringify(help);
          showHelp(cursorIndex, help);
        }, 250);
    });

    return self;
  };
});

define('template!error',[],function () { 
  return _.template('<div class="up-arrow"></div><div class="icon"></div><div class="content">  <%= error %></div><div class="down-arrow"></div>');});



// Provides helpful Slowparse-based error suggestions for a
// ParsingCodeMirror.
define('fc/ui/error-help',[
  "jquery",
  "fc/ui/mark-tracker",
  "template!error"
], function($, MarkTracker, ErrorTemplate) {
  // Display an animated arrow pointing at a particular position in a
  // codeMirror instance. It disappears after a short delay.
  function pointAtPosition(codeMirror, pos) {
    var MOVE_TIME = 500;
    var PAUSE_TIME = 1000;
    var pointer = $('<div class="cursor-pointer"></div>');
    codeMirror.addWidget(pos, pointer[0], true);
    pointer.css({
      opacity: 0,
      paddingTop: '50px'
    });
    pointer.animate({
      opacity: 1,
      paddingTop: 0
    }, MOVE_TIME).delay(PAUSE_TIME).fadeOut(function() {
      pointer.remove();
    });
  }

  return function ErrorHelp(options) {
    var self = {};
    var codeMirror = options.codeMirror;
    var template = ErrorTemplate
    var errorArea = $(options.selector);
    var relocator = options.relocator;
    var timeout = null;
    var ERROR_DISPLAY_DELAY = 1000;

    // The escape key should close error help 
    $(document).keyup(function(event) {
      if (event.keyCode == 27)
        clearError();
    });

    // Keep track of error highlighting.
    var errorHelpMarks = MarkTracker(codeMirror, relocator);
  
    // Report the given Slowparse error.
    function reportError(error) {
      var startMark = null;
      var errorHTML = $("<div></div>").fillError(error);
      errorArea.html(template({error: errorHTML.html()})).show();
      errorArea.eachErrorHighlight(function(start, end, i) {
        // Point the error message's arrow at the first occurrence of
        // the word "here" in the error message.
        if (startMark === null)
          startMark = start;
        errorHelpMarks.mark(start, end, "highlight-" + (i+1), this);
        $(this).click(function() {
          var pos = codeMirror.posFromIndex(start);
          codeMirror.setCursor(pos);
          pointAtPosition(codeMirror, pos);
        });
      });
      relocator.relocate(errorArea, startMark, "error");
      errorArea.hide().fadeIn();
    }
  
    function clearError() {
      clearTimeout(timeout);
      errorHelpMarks.clear();
      errorArea.hide();
      relocator.cleanup();
    }
    
    codeMirror.on("change", clearError);
    codeMirror.on("reparse", function(event) {
      clearError();
      if (event.error) {
        timeout = setTimeout(function() {
          reportError(event.error);
        }, ERROR_DISPLAY_DELAY);
      }
    });
    return self;
  };
});



// Displays the HTML source of a CodeMirror editor as a rendered preview
// in an iframe.
define('fc/ui/live-preview',[],function() {
  function LivePreview(options) {
    var self = {codeMirror: options.codeMirror},
        codeMirror = options.codeMirror,
        iframe;

    codeMirror.on("reparse", function(event) {
      if (!event.error || options.ignoreErrors) {
        var x = 0,
            y = 0,
            docFrag = event.document,
            doc, wind;
        
        if (iframe) {
          doc = $(iframe).contents()[0];
          wind = doc.defaultView;
          x = wind.pageXOffset;
          y = wind.pageYOffset;
          $(iframe).remove();
        }

        iframe = document.createElement("iframe");
        options.previewArea.append(iframe);
        
        // Update the preview area with the given HTML.
        doc = $(iframe).contents()[0];
        wind = doc.defaultView;

        doc.open();
        doc.write(event.sourceCode);
        doc.close();

        // Insert a BASE TARGET tag so that links don't open in
        // the iframe.
        var baseTag = doc.createElement('base');
        baseTag.setAttribute('target', '_blank');
        doc.querySelector("head").appendChild(baseTag);
        
        // TODO: If the document has images that take a while to load
        // and the previous scroll position of the document depends on
        // their dimensions being set on load, we may need to refresh
        // this scroll position after the document has loaded.
        wind.scroll(x, y);
        
        self.trigger("refresh", {
          window: wind,
          documentFragment: event.document
        });
      }
    });

    _.extend(self, Backbone.Events);
    return self;
  };
  
  return LivePreview;
});



define('fc/ui/preview-to-editor-mapping',[
  "fc/ui/mark-tracker"
], function(MarkTracker) {
  // Given a descendant of the given root element, returns a CSS
  // selector that uniquely selects only the descendant from the
  // root element.
  function pathTo(root, descendant) {
    var target = $(descendant).get(0);
    var parts = [];
    var node, nodeName, n, selector;

    for (node = target; node && node != root; node = node.parentNode) {
      nodeName = node.nodeName.toLowerCase();
      n = $(node).prevAll(nodeName).length + 1;
      selector = nodeName + ':nth-of-type(' + n + ')';
      parts.push(selector);
    }
    
    parts.reverse();
    return ' > ' + parts.join(' > ');
  }
  
  function nodeToCode(node, docFrag) {
    var root, i;
    var htmlNode = docFrag.querySelector("html");
    var origDocFrag = docFrag;
    if (htmlNode && docFrag.querySelector("body")) {
      root = node.ownerDocument.documentElement;
    } else {
      if (!htmlNode) {
        docFrag = document.createDocumentFragment();
        htmlNode = document.createElement("html");
        docFrag.appendChild(htmlNode);
        for (i = 0; i < origDocFrag.childNodes.length; i++)
          htmlNode.appendChild(origDocFrag.childNodes[i]);
      }
      root = node.ownerDocument.body;
    }
    var path = "html " + pathTo(root, node);
    var parallelNode = docFrag.querySelector(path);
    var result = null;
    if (parallelNode) {
      var pi = parallelNode.parseInfo;
      var isVoidElement = !pi.closeTag;
      result = {
        start: pi.openTag.start,
        end: isVoidElement ? pi.openTag.end : pi.closeTag.end,
        contentStart: isVoidElement ? pi.openTag.start : pi.openTag.end
      };
    }
    if (origDocFrag != docFrag) {
      for (i = 0; i < htmlNode.childNodes.length; i++)
        origDocFrag.appendChild(htmlNode.childNodes[i]);
    }
    return result;
  }

  function PreviewToEditorMapping(livePreview, codeMirrorAreas) {
    var codeMirror = livePreview.codeMirror;
    var marks = MarkTracker(codeMirror);
    codeMirrorAreas.on("mouseup", marks.clear);
    livePreview.on("refresh", function(event) {
      var docFrag = event.documentFragment;
      marks.clear();
      $(event.window).on("mousedown", function(event) {
        marks.clear();
        var tagName = event.target.tagName.toLowerCase();
        var interval = null;
        if (tagName !== "html" && tagName !== "body")
          interval = nodeToCode(event.target, docFrag);
        if (interval) {
          var start = codeMirror.posFromIndex(interval.start);
          var end = codeMirror.posFromIndex(interval.end);
          var contentStart = codeMirror.posFromIndex(interval.contentStart);
          var startCoords = codeMirror.charCoords(start, "local");
          codeMirror.scrollTo(startCoords.x, startCoords.y);
          marks.mark(interval.start, interval.end,
                     "preview-to-editor-highlight");
          codeMirror.focus();
          event.preventDefault();
          event.stopPropagation();
        }
      });
    });
  }
  
  PreviewToEditorMapping._pathTo = pathTo;
  PreviewToEditorMapping._nodeToCode = nodeToCode;
  
  return PreviewToEditorMapping;
});



// This manages the UI for undo/redo.
define('fc/ui/history',[],function() {
  return function HistoryUI(options) {
    var undo = options.undo;
    var redo = options.redo;
    var codeMirror = options.codeMirror;

    function refreshButtons() {
      var history = codeMirror.historySize();
      undo.toggleClass("enabled", history.undo == 0 ? false : true);
      redo.toggleClass("enabled", history.redo == 0 ? false : true);
    }
  
    undo.click(function() {
      codeMirror.undo();
      codeMirror.reparse();
      refreshButtons();
    });
    redo.click(function() {
      codeMirror.redo();
      codeMirror.reparse();
      refreshButtons();
    });
    codeMirror.on("change", refreshButtons);
    refreshButtons();
    return {refresh: refreshButtons};
  };
});



// This class is responsible for the UI behind saving and loading published
// code.
define('fc/ui/publish',[],function() {
  return function PublishUI(options) {
    var defaultRemixURL = location.protocol + "//" + location.host + 
                          location.pathname + "#{{VIEW_URL}}";
    var baseRemixURL = options.remixURLTemplate || defaultRemixURL;
    var dlg = options.dialog;
    var error = options.error;
    var codeMirror = options.codeMirror;
    var publisher = options.publisher;
    var currURL;

    return {
      loadCode: function(path, cb) {
        publisher.loadCode(path, function(err, data, url) {
          if (err) {
            $(".error-text",error).text('Sorry, an error occurred while trying to get the page.');
            dlg.stop().hide();
            error.show();
          } else {
            codeMirror.setValue(data);
            currURL = url;
          }
          cb();
        });
      },
      saveCode: function(callback) {
        var code = codeMirror.getValue();
        publisher.saveCode(code, currURL, function(err, info) {
          if (err) {
            $(".error-text",error).text("Sorry, an error occurred while trying to publish. " + err.responseText);
            dlg.stop().hide();
            error.show();
            dlg.hide();
          } else {
            var viewURL = info.url;
            var remixURL = baseRemixURL.replace("{{VIEW_URL}}",
                                                escape(info.path));
            $('a.view', dlg).attr('href', viewURL).text(viewURL);
            $('a.remix', dlg).attr('href', remixURL).text(remixURL);

            // The user is now effectively remixing the page they just
            // published.
            currURL = viewURL;

            if (callback) {
              callback(viewURL, remixURL, info.path);
            }
          }
        });
      }
    };
  };
});



// code will relocate an error or help message to near where the error actually is in CodeMirror.
define('fc/ui/relocator',['jquery'], function($) {
  return function Relocator(codeMirror) {
    var lastPos = null;
    var lastElement = null;
    
    function flipElementIfNeeded() {
      var coords = codeMirror.charCoords(lastPos, "local");
      var bottomChar = {line: codeMirror.lineCount(), ch: 0};
      var bottomCoords = codeMirror.charCoords(bottomChar, "local");
      var height = lastElement.height();
      var bottom = Math.max(bottomCoords.yBot,
                            $(codeMirror.getScrollerElement()).height());
      var isPointingDown = coords.yBot + height > bottom;
      lastElement.toggleClass("flipped", isPointingDown);
    }
    
    var relocator = {
      // clear old markings
      cleanup: function() {
        if (lastPos) {
          codeMirror.setLineClass(lastPos.line, null, null);
          codeMirror.clearMarker(lastPos.line);
          lastPos = null;
        }
        if (lastElement) {
          lastElement.hide();
          lastElement = null;
        }
      },

      // relocate an element to inside CodeMirror, pointing "at" the line for startMark
      relocate: function(element, startMark, type) {
        this.cleanup();
        lastElement = $(element);

        // find the line and character position for the start mark. We want
        // both because the line may actually span multiple screen lines due
        // to soft-wrapping, so we want to make sure that we point at
        // the right one.
        lastPos = codeMirror.posFromIndex(startMark);
        codeMirror.setLineClass(lastPos.line, null, "CodeMirror-line-highlight");
        codeMirror.setMarker(lastPos.line, null, "gutter-highlight-" + type);
        lastElement.show();
        codeMirror.addWidget(lastPos, lastElement[0], false);
        $(".up-arrow, .down-arrow", lastElement).css({
          left: codeMirror.charCoords(lastPos, "local").x + "px"
        });
        flipElementIfNeeded();
      }
    };

    return relocator;
  };
});



/**
 * A tiny library for load-loading social media share buttons.
 * If we don't do this, social media will track users even before
 * they click the like button and we don't like that kind of
 * monitoring behaviour.
 */
define('fc/ui/social-media',['jquery'], function($) {
  return function SocialMedia(options) {
    var parent = options.container;
    var getURL = options.getURL;
    var urlPlaceHolder = "__URL__PLACE__HOLDER__";

    /**
     * The various social media all have the same API.
     */
    var self = {
      facebook: {
        id: "facebook-jssdk",
        src: "//connect.facebook.net/en_US/all.js#xfbml=1&appId=1",
        html: "<div class='fb-like' data-href='"+urlPlaceHolder+"' data-send='false' data-action='recommend' data-layout='button_count' data-show-faces='false' data-font='tahoma'></div>"
      },



      google: {
        id: "google-plus",
        src: "//apis.google.com/js/plusone.js",
        html: "<g:plusone annotation='none' href='"+urlPlaceHolder+"'></g:plusone>"
      },

      twitter: {
        id: "twitter-wjs",
        src: "//platform.twitter.com/widgets.js",
        html: "<a href='https://twitter.com/share'class='twitter-share-button' data-text='Check out the #MozThimble page I just made: ' data-url='"+urlPlaceHolder+"' data-via='Mozilla' data-count='none'>Tweet</a>"
      },

      /**
       * Hot-load a social medium's button by first
       * injecting the necessary HTML for the medium
       * to perform its own iframe replacements, and
       * then late-loading the script required for
       * the medium to load up its functionality.
       */
      hotLoad:  function($, element, socialMedium) {
        // TODO: Should we escape the return value of getURL()? It's likely
        // to not contain any characters that need escaping, and its value
        // is trusted, but we may still want to do it.
        element.html(socialMedium.html.replace(urlPlaceHolder, getURL()));
        (function(document, id, src, url) {
          var script = document.createElement("script");
          script.type = "text/javascript";
          script.id = id;
          script.src = src;
          document.head.appendChild(script);
        }(document, socialMedium.id, socialMedium.src));
      }
    };

    return self;
  };
});



define('fc/ui/modals',[],function() {
  return function(options) {
    var codeMirror = options.codeMirror,
        publishUI = options.publishUI,
        socialMedia = options.socialMedia;

    var hideModals = function() {
      $(".modal-overlay").fadeOut();
    }

    /**
     * When someone clicks on the darkening-overlay, rather
     * than the modal dialog, close the modal dialog again.
     */
    $(".modal-overlay").click(function(event) { 
      if (event.target === this) { 
        $(this).fadeOut(); 
      }
    });

    /**
     * The escape key should univerally close modal dialogs
     */ 
    $(document).keyup(function(event) {
      if (event.keyCode == 27) {
        hideModals();
      }
    });

    /**
     * Add accordion behaviour to the publication dialog.
     */
    var accordion = $(".thimble-menu-content div.accordion");
    var clickHandler = function(item) {
      accordion.addClass("collapsed");
      $(item).removeClass("collapsed");
    }
    accordion.click(function() { clickHandler(this); });

    /**
     * modal dialog interaction sequence
     */
    codeMirror.on("change", function() {
      var isEnabled = codeMirror.getValue().trim().length ? true : false;
      $("#publish-button").toggleClass("enabled", isEnabled);
    });
    
    codeMirror.on("reparse", function(event) {
      var hasErrors = event.error ? true : false;
      $("#confirm-dialog").toggleClass("has-errors", hasErrors);
    });
    
    $("#publish-button").click(function(){
      if ($(this).hasClass("enabled")) $("#confirm-dialog").fadeIn();
    });

    // CONFIRM DIALOG IS IN MAIN.JS FOR THE MOMENT DUE TO
    // ITS NEED TO CALL A PUBLICATION CALLBACK IN MAIN.JS

    $("#modal-close-button, #cancel-publication").click(function(){ 
      hideModals();
    });

    /**
     * Late-loading for social media
     */
    $("#share-result").click(function() {
      var mediaList = $("#share-result li");
      mediaList.each(function() {
        var element = $(this),
             medium = element.attr("data-medium");
        if (!element.hasClass("hotloaded") && medium && socialMedia[medium]) {
          socialMedia.hotLoad($, element, socialMedia[medium]);
          element.addClass("hotloaded");
          // Facebook needs additional help, because it needs
          // to be told that it has to refresh its button, rather
          // than simply reloading.
          if (medium === "facebook" && FB && FB.XFBML && FB.XFBML.parse) {
            FB.XFBML.parse();
          }
        }
      });
    });
    
    return {
      /**
       * Reset the publish modal dialog
       */
      resetPublishModal: function() {
        $("script#twitter-wjs, script#google-plus, script#facebook-jssdk").remove();
        $("a.view, a.remix").text("[we're busy publishing your page...]");
        $(".accordion").addClass("collapsed");
        $("#publication-result").removeClass("collapsed");
        $("#share-result .thimble-additionals").html("<ul><li data-medium='twitter'>Twitter</li><li data-medium='google'>Google+</li><li data-medium='facebook'>Facebook</li></ul>");
      }
    }
  };
});



define('fc/ui/text',["lscache"], function(lscache) {
  // Amount of time, in minutes, to store text size setting.
  var CACHE_TIME_LIMIT = 9000;
  var DEFAULT_CACHE_KEY = "ThimbleTextSize";

  return function(options) {
    var codeMirror = options.codeMirror;
    var navItem = options.navItem;
    var cacheKey = options.cacheKey || DEFAULT_CACHE_KEY;
    var menu = navItem.find("ul");
    var menuItems = menu.find("li");
    
    function menuItem(size) {
      var item = $("li[data-size=" + size + "]", menu);
      return item.length ? item : null;
    }
    
    /**
     * Show or hide the font size drop-down menu
     */
    navItem.hover(function() {
      var t = $(this),
          lp = t.position().left;
      menu.css("display","inline")
        .css("left", (lp-1) + "px").css("top","7px");
      return false;
    }, function() {
      menu.hide();
    });

    /**
     * bind the resize behaviour to the various text resize options
     */
    menuItems.click(function() {
      var t = $(this),
          size = t.attr("data-size");
      
      $(codeMirror.getWrapperElement()).attr("data-size", size);
      
      // refesh code mirror
      codeMirror.refresh();
      // reparse as well, in case there were any errors
      codeMirror.reparse();
      lscache.set(cacheKey, size, CACHE_TIME_LIMIT);
      // mark text size in drop-down
      menuItems.removeClass("selected");
      $(this).addClass("selected");
      menu.hide();
    });
    
    var defaultSize = $("li[data-default-size]", menu).attr("data-size");
    var lastSize = lscache.get(cacheKey);
    if (lastSize && menuItem(lastSize))
      defaultSize = lastSize;
    
    menuItem(defaultSize).click();
  };
});



require.config({
  baseUrl: 'js',
  shim: {
    underscore: {
      exports: '_'
    },
    jquery: {
      exports: '$'
    },
    'jquery-tipsy': {
      deps: ['jquery'],
      exports: '$'
    },
    'jquery-slowparse': {
      deps: ['jquery'],
      exports: '$'
    },
    backbone: {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },
    codemirror: {
      exports: "CodeMirror"
    },
    "codemirror/xml": {
      deps: ["codemirror"],
      exports: "CodeMirror"
    },
    "codemirror/javascript": {
      deps: ["codemirror"],
      exports: "CodeMirror"
    },
    "codemirror/css": {
      deps: ["codemirror"],
      exports: "CodeMirror"
    },
    "codemirror/html": {
      deps: [
        "codemirror/xml",
        "codemirror/javascript",
        "codemirror/css"
      ],
      exports: "CodeMirror"
    }
  },
  paths: {
    jquery: 'jquery.min',
    'jquery-tipsy': 'jquery.tipsy',
    'jquery-slowparse': '../slowparse/spec/errors.jquery',
    underscore: 'underscore.min',
    backbone: 'backbone.min',
    templates: '../templates',
    slowparse: '../slowparse',
    codemirror: "../codemirror2/lib/codemirror",
    "codemirror/xml": "../codemirror2/mode/xml/xml",
    "codemirror/javascript": "../codemirror2/mode/javascript/javascript",
    "codemirror/css": "../codemirror2/mode/css/css",
    "codemirror/html": "../codemirror2/mode/htmlmixed/htmlmixed"
  }
});


// All of this module's exports are only being exposed for debugging
// purposes. Other parts of our code should never cite this module
// as a dependency.
define('main', [
  // sloparse is appReady deps
  // 'jquery-slowparse',
  "appReady",
  // "appReady!",
  'jquery-tipsy',
  'underscore',
  'backbone',
  'fc/help',
  "fc/parachute",
  "fc/publisher",
  "codemirror/html",
  "fc/ui/parsing-codemirror",
  "fc/ui/context-sensitive-help",
  "fc/ui/error-help",
  "fc/ui/live-preview",
  "fc/ui/preview-to-editor-mapping",
  "fc/ui/history",
  "fc/ui/publish",
  "fc/ui/relocator",
  "fc/ui/social-media",
  "fc/ui/modals",
  "fc/ui/text"
],function (
  AppReady,
  $,
  _,
  Backbone,
  Help,
  Parachute,
  Publisher,
  CodeMirror,
  ParsingCodeMirror,
  ContextSensitiveHelp,
  ErrorHelp,
  LivePreview,
  PreviewToEditorMapping,
  HistoryUI,
  PublishUI,
  Relocator,
  SocialMedia,
  Modals,
  TextUI
) {

  var publishURL = $("meta[name='publish-url']").attr("content"),
      pageToLoad = $("meta[name='remix-url']").attr("content"),
      deploymentType = $("meta[name='deployment-type']").attr("content"),
      supportsPushState = window.history.pushState ? true : false,
      remixURLTemplate = null,
      ready = $.Deferred();


  $("html").addClass("deployment-type-" + deploymentType);
  if (pageToLoad) {
    // A server is serving us as the custom edit URL for a web page.
    remixURLTemplate = location.protocol + "//" + location.host +
                       "{{VIEW_URL}}/edit";
  }
  // If a URL hash is specified, it should override anything provided by
  // a server.
  if (window.location.hash.slice(1))
    pageToLoad = window.location.hash.slice(1);

  if (supportsPushState)
    window.history.replaceState({pageToLoad: pageToLoad}, "", location.href);

  var codeMirror = ParsingCodeMirror($("#source")[0], {
    mode: "text/html",
    theme: "jsbin",
    tabMode: "indent",
    lineWrapping: true,
    lineNumbers: true
  });

  var relocator = Relocator(codeMirror);

  var cursorHelp = ContextSensitiveHelp({
    selector: '.help',
    codeMirror: codeMirror,
    relocator: relocator
  });

  var errorHelp = ErrorHelp({
    selector: '.error',
    codeMirror: codeMirror,
    relocator: relocator
  });

  var preview = LivePreview({
    codeMirror: codeMirror,
    ignoreErrors: true,
    previewArea: $("#preview-holder")
  });

  var previewToEditorMapping = PreviewToEditorMapping(preview, $(".CodeMirror-lines"));

  var publisher = Publisher(publishURL);

  var publishUI = PublishUI({
    codeMirror: codeMirror,
    publisher: publisher,
    dialog: $("#publish-dialog"),
    error: $("#error-dialog"),
    remixURLTemplate: remixURLTemplate
  });

  var historyUI = HistoryUI({
    codeMirror: codeMirror,
    undo: $("#undo-nav-item"),
    redo: $("#redo-nav-item")
  });

  var socialMedia = SocialMedia({
    getURL: function() {
      return $("#publication-result a.view")[0].href;
    },
    container: $("#share-result")
  });

  var modals = Modals({
    codeMirror: codeMirror,
    publishUI: publishUI,
    socialMedia: socialMedia
  });

  var textUI = TextUI({
    codeMirror: codeMirror,
    navItem: $("#text-nav-item")
  });

  var parachute = Parachute(window, codeMirror, pageToLoad);

  // make hints on/off actually work
  $("#hints-nav-item").click(function() {
    var hints = $(".checkbox", this);
    if (hints.hasClass("on")) {
      hints.removeClass("on").addClass("off");
      // make sure to hide the help, in case it's active when this option's selected
      $("div.help").hide();
      relocator.cleanup();
    } else {
      hints.removeClass("off").addClass("on");
    }
  });


  window.addEventListener("hashchange", function(event) {
    // We don't currently support dynamically changing the URL
    // without a full page reload, unfortunately, so just trigger a
    // reload if the user clicked the 'back' button after we pushed
    // a new URL to it.
    var newPageToLoad = window.location.hash.slice(1);
    if (newPageToLoad != pageToLoad)
      window.location.reload();
  }, false);

  if (supportsPushState)
    window.addEventListener("popstate", function(event) {
      // We don't currently support dynamically changing the URL
      // without a full page reload, unfortunately, so just trigger a
      // reload if the user clicked the 'back' button after we pushed
      // a new URL to it.
      //
      // Also, for some reason Webkit is sending a spurious popstate with
      // state == null on page load, so we want to check that it's
      // non-null first (see #39).
      if (event.state && event.state.pageToLoad != pageToLoad)
        window.location.reload();
    }, false);

  function onPostPublish(url, newPageToLoad) {
    // If the browser supports history.pushState, set the URL to
    // be the new URL to remix the page they just published, so they
    // can share/bookmark the URL and it'll be what they expect it
    // to be.
    pageToLoad = newPageToLoad;
    // If the user clicks their back button, we don't want to show
    // them the page they just published--we want to show them the
    // page the current page is based on.
    parachute.clearCurrentPage();
    parachute.changePage(pageToLoad);
    // It's possible that the server sanitized some stuff that the
    // user will be confused by, so save the new state of the page
    // to be what they expect it to be, just in case.
    parachute.save();
    if (supportsPushState)
      window.history.pushState({pageToLoad: pageToLoad}, "", url);
    else
      window.location.hash = "#" + pageToLoad;
  }

  // TEMP TEMP TEMP TEMP TEMP -- HOOK UP VIA publishUI INSTEAD
  $("#confirm-publication").click(function(){
    // Start the actual publishing process, so that hopefully by the
    // time the transition has finished, the user's page is published.
    modals.resetPublishModal();
    publishUI.saveCode(function(viewURL, remixURL, path) {
      onPostPublish(remixURL, path);
    });
    // We want the dialogs to transition while the page-sized translucent
    // overlay stays in place. Because each dialog has its own overlay,
    // however, this is a bit tricky. Eventually we might want to move
    // to a DOM structure where each modal dialog shares the same overlay.
    $("#confirm-dialog .thimble-modal-menu").slideUp(function() {
      $(this).show();
      $("#confirm-dialog").hide();
      // suppress publish dialog if an error occurred
      if ($("#error-dialog:hidden").length !== 0) {
        $("#publish-dialog").show();
        $("#publish-dialog .thimble-modal-menu").hide().slideDown();
      }
    });
  });
  // TEMP TEMP TEMP TEMP TEMP -- HOOK UP VIA publishUI INSTEAD

  function doneLoading() {
    $("body").removeClass("loading");
    codeMirror.clearHistory();
    historyUI.refresh();
    if (parachute.restore()) {
      // Display a non-modal message telling the user that their
      // previous data has been restored, and that they can click 'undo'
      // to go back to the original version of the editor content.
      // This is just a temporary workaround to avoid confusion until
      // we figure out a better solution; see this issue for more
      // discussion:
      //
      // https://github.com/mozilla/webpagemaker/issues/53
      $("#undo-nav-item").tipsy({
        gravity: 'n',
        fade: true,
        trigger: 'manual',
        title: 'data-restore-help'
      }).tipsy("show");
      setTimeout(function() { $("#undo-nav-item").tipsy("hide"); }, 6000);
    } else {
      // Only save data on page unload if it's different from
      // the URL we just (hopefully) loaded.
      parachute.refresh();
    }
    codeMirror.reparse();
    codeMirror.focus();
    ready.resolve();
  }

  preview.on("refresh", function(event) {
    var title = event.window.document.title;
    if (title.length)
      $(".preview-title").text(title).show();
    else
      $(".preview-title").hide();
  });

  if (!pageToLoad) {
    $.get("default-content.html", function(html) {
      codeMirror.setValue(html.trim());
      doneLoading();
    }, "text");
  } else
    publishUI.loadCode(pageToLoad, doneLoading);

  return {
    codeMirror: codeMirror,
    parachute: parachute,
    ready: ready
  };
});

/**
 * this final line is for requirejs optimization
 */
require(['main'], function () {});
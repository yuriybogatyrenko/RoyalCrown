/*
pub/libs/jquery-1.8.2.min.js
pub/libs/jquery.history.js
pub/libs/jquery.event.move.js
pub/libs/jquery.event.swipe.js
pub/libs/jquery.videosub.min.js
pub/libs/jquery.iepngfix.js
pub/libs/jquery.touchSwipe.min.js
pub/libs/bootstrap/js/bootstrap.js
pub/libs/jquery.html5-placeholder-shim.js
pub/libs/greensock/TweenMax.min.js
pub/libs/greensock/plugins/ScrollToPlugin.min.js
pub/app/core/Browser.js
pub/app/core/Utils.js
pub/app/core/EventDispatcher.js
pub/app/core/SimpleAjax.js
pub/app/core/Cookie.js
pub/app/core/Dom.js
pub/libs/pinterest.js
pub/app/piagetcom/js/Nav.js
pub/app/piagetcom/js/Localization.js
pub/app/piagetcom/js/PopIn.js
pub/app/piagetcom/js/FixedFooter.js
pub/app/piagetcom/js/SlideShow.js
pub/app/piagetcom/js/PageFlip.js
pub/app/piagetcom/js/Slider.js
pub/app/piagetcom/js/GridSystem.js
pub/app/piagetcom/js/ProductTileHover.js
pub/app/piagetcom/js/ProductItemFooter.js
pub/app/piagetcom/js/FixedMagic.js
pub/app/piagetcom/js/Anchor.js
pub/app/piagetcom/js/VideoPlayer.js
pub/app/piagetcom/js/SalableProductsController.js
pub/app/piagetcom/js/CollectionFilters.js
pub/app/piagetcom/js/MsIe.js
pub/app/piagetcom/js/FullScreenApi.js
pub/app/piagetcom/js/UserAccount.js
pub/app/ecommerce/js/MainMenu.js
pub/app/checkout/jquery.cascade.js
pub/app/api/forms/Form.js
pub/app/api/forms/Field.js
pub/app/api/ApiReturn.js
pub/app/api/UiDialog.js
pub/app/piagetcom/js/Share.js
pub/app/piagetcom/js/stats/Stats.js
pub/app/Piaget.js
pub/app/piagetcom/js/PiagetCom.js
*/
/*! jQuery v1.8.2 jquery.com | jquery.org/license */
(function(a,b){function G(a){var b=F[a]={};return p.each(a.split(s),function(a,c){b[c]=!0}),b}function J(a,c,d){if(d===b&&a.nodeType===1){var e="data-"+c.replace(I,"-$1").toLowerCase();d=a.getAttribute(e);if(typeof d=="string"){try{d=d==="true"?!0:d==="false"?!1:d==="null"?null:+d+""===d?+d:H.test(d)?p.parseJSON(d):d}catch(f){}p.data(a,c,d)}else d=b}return d}function K(a){var b;for(b in a){if(b==="data"&&p.isEmptyObject(a[b]))continue;if(b!=="toJSON")return!1}return!0}function ba(){return!1}function bb(){return!0}function bh(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function bi(a,b){do a=a[b];while(a&&a.nodeType!==1);return a}function bj(a,b,c){b=b||0;if(p.isFunction(b))return p.grep(a,function(a,d){var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return p.grep(a,function(a,d){return a===b===c});if(typeof b=="string"){var d=p.grep(a,function(a){return a.nodeType===1});if(be.test(b))return p.filter(b,d,!c);b=p.filter(b,d)}return p.grep(a,function(a,d){return p.inArray(a,b)>=0===c})}function bk(a){var b=bl.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}function bC(a,b){return a.getElementsByTagName(b)[0]||a.appendChild(a.ownerDocument.createElement(b))}function bD(a,b){if(b.nodeType!==1||!p.hasData(a))return;var c,d,e,f=p._data(a),g=p._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;d<e;d++)p.event.add(b,c,h[c][d])}g.data&&(g.data=p.extend({},g.data))}function bE(a,b){var c;if(b.nodeType!==1)return;b.clearAttributes&&b.clearAttributes(),b.mergeAttributes&&b.mergeAttributes(a),c=b.nodeName.toLowerCase(),c==="object"?(b.parentNode&&(b.outerHTML=a.outerHTML),p.support.html5Clone&&a.innerHTML&&!p.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):c==="input"&&bv.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):c==="option"?b.selected=a.defaultSelected:c==="input"||c==="textarea"?b.defaultValue=a.defaultValue:c==="script"&&b.text!==a.text&&(b.text=a.text),b.removeAttribute(p.expando)}function bF(a){return typeof a.getElementsByTagName!="undefined"?a.getElementsByTagName("*"):typeof a.querySelectorAll!="undefined"?a.querySelectorAll("*"):[]}function bG(a){bv.test(a.type)&&(a.defaultChecked=a.checked)}function bY(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=bW.length;while(e--){b=bW[e]+c;if(b in a)return b}return d}function bZ(a,b){return a=b||a,p.css(a,"display")==="none"||!p.contains(a.ownerDocument,a)}function b$(a,b){var c,d,e=[],f=0,g=a.length;for(;f<g;f++){c=a[f];if(!c.style)continue;e[f]=p._data(c,"olddisplay"),b?(!e[f]&&c.style.display==="none"&&(c.style.display=""),c.style.display===""&&bZ(c)&&(e[f]=p._data(c,"olddisplay",cc(c.nodeName)))):(d=bH(c,"display"),!e[f]&&d!=="none"&&p._data(c,"olddisplay",d))}for(f=0;f<g;f++){c=a[f];if(!c.style)continue;if(!b||c.style.display==="none"||c.style.display==="")c.style.display=b?e[f]||"":"none"}return a}function b_(a,b,c){var d=bP.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function ca(a,b,c,d){var e=c===(d?"border":"content")?4:b==="width"?1:0,f=0;for(;e<4;e+=2)c==="margin"&&(f+=p.css(a,c+bV[e],!0)),d?(c==="content"&&(f-=parseFloat(bH(a,"padding"+bV[e]))||0),c!=="margin"&&(f-=parseFloat(bH(a,"border"+bV[e]+"Width"))||0)):(f+=parseFloat(bH(a,"padding"+bV[e]))||0,c!=="padding"&&(f+=parseFloat(bH(a,"border"+bV[e]+"Width"))||0));return f}function cb(a,b,c){var d=b==="width"?a.offsetWidth:a.offsetHeight,e=!0,f=p.support.boxSizing&&p.css(a,"boxSizing")==="border-box";if(d<=0||d==null){d=bH(a,b);if(d<0||d==null)d=a.style[b];if(bQ.test(d))return d;e=f&&(p.support.boxSizingReliable||d===a.style[b]),d=parseFloat(d)||0}return d+ca(a,b,c||(f?"border":"content"),e)+"px"}function cc(a){if(bS[a])return bS[a];var b=p("<"+a+">").appendTo(e.body),c=b.css("display");b.remove();if(c==="none"||c===""){bI=e.body.appendChild(bI||p.extend(e.createElement("iframe"),{frameBorder:0,width:0,height:0}));if(!bJ||!bI.createElement)bJ=(bI.contentWindow||bI.contentDocument).document,bJ.write("<!doctype html><html><body>"),bJ.close();b=bJ.body.appendChild(bJ.createElement(a)),c=bH(b,"display"),e.body.removeChild(bI)}return bS[a]=c,c}function ci(a,b,c,d){var e;if(p.isArray(b))p.each(b,function(b,e){c||ce.test(a)?d(a,e):ci(a+"["+(typeof e=="object"?b:"")+"]",e,c,d)});else if(!c&&p.type(b)==="object")for(e in b)ci(a+"["+e+"]",b[e],c,d);else d(a,b)}function cz(a){return function(b,c){typeof b!="string"&&(c=b,b="*");var d,e,f,g=b.toLowerCase().split(s),h=0,i=g.length;if(p.isFunction(c))for(;h<i;h++)d=g[h],f=/^\+/.test(d),f&&(d=d.substr(1)||"*"),e=a[d]=a[d]||[],e[f?"unshift":"push"](c)}}function cA(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;var h,i=a[f],j=0,k=i?i.length:0,l=a===cv;for(;j<k&&(l||!h);j++)h=i[j](c,d,e),typeof h=="string"&&(!l||g[h]?h=b:(c.dataTypes.unshift(h),h=cA(a,c,d,e,h,g)));return(l||!h)&&!g["*"]&&(h=cA(a,c,d,e,"*",g)),h}function cB(a,c){var d,e,f=p.ajaxSettings.flatOptions||{};for(d in c)c[d]!==b&&((f[d]?a:e||(e={}))[d]=c[d]);e&&p.extend(!0,a,e)}function cC(a,c,d){var e,f,g,h,i=a.contents,j=a.dataTypes,k=a.responseFields;for(f in k)f in d&&(c[k[f]]=d[f]);while(j[0]==="*")j.shift(),e===b&&(e=a.mimeType||c.getResponseHeader("content-type"));if(e)for(f in i)if(i[f]&&i[f].test(e)){j.unshift(f);break}if(j[0]in d)g=j[0];else{for(f in d){if(!j[0]||a.converters[f+" "+j[0]]){g=f;break}h||(h=f)}g=g||h}if(g)return g!==j[0]&&j.unshift(g),d[g]}function cD(a,b){var c,d,e,f,g=a.dataTypes.slice(),h=g[0],i={},j=0;a.dataFilter&&(b=a.dataFilter(b,a.dataType));if(g[1])for(c in a.converters)i[c.toLowerCase()]=a.converters[c];for(;e=g[++j];)if(e!=="*"){if(h!=="*"&&h!==e){c=i[h+" "+e]||i["* "+e];if(!c)for(d in i){f=d.split(" ");if(f[1]===e){c=i[h+" "+f[0]]||i["* "+f[0]];if(c){c===!0?c=i[d]:i[d]!==!0&&(e=f[0],g.splice(j--,0,e));break}}}if(c!==!0)if(c&&a["throws"])b=c(b);else try{b=c(b)}catch(k){return{state:"parsererror",error:c?k:"No conversion from "+h+" to "+e}}}h=e}return{state:"success",data:b}}function cL(){try{return new a.XMLHttpRequest}catch(b){}}function cM(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}function cU(){return setTimeout(function(){cN=b},0),cN=p.now()}function cV(a,b){p.each(b,function(b,c){var d=(cT[b]||[]).concat(cT["*"]),e=0,f=d.length;for(;e<f;e++)if(d[e].call(a,b,c))return})}function cW(a,b,c){var d,e=0,f=0,g=cS.length,h=p.Deferred().always(function(){delete i.elem}),i=function(){var b=cN||cU(),c=Math.max(0,j.startTime+j.duration-b),d=1-(c/j.duration||0),e=0,f=j.tweens.length;for(;e<f;e++)j.tweens[e].run(d);return h.notifyWith(a,[j,d,c]),d<1&&f?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:p.extend({},b),opts:p.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:cN||cU(),duration:c.duration,tweens:[],createTween:function(b,c,d){var e=p.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(e),e},stop:function(b){var c=0,d=b?j.tweens.length:0;for(;c<d;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;cX(k,j.opts.specialEasing);for(;e<g;e++){d=cS[e].call(j,a,k,j.opts);if(d)return d}return cV(j,k),p.isFunction(j.opts.start)&&j.opts.start.call(a,j),p.fx.timer(p.extend(i,{anim:j,queue:j.opts.queue,elem:a})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}function cX(a,b){var c,d,e,f,g;for(c in a){d=p.camelCase(c),e=b[d],f=a[c],p.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=p.cssHooks[d];if(g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}}function cY(a,b,c){var d,e,f,g,h,i,j,k,l=this,m=a.style,n={},o=[],q=a.nodeType&&bZ(a);c.queue||(j=p._queueHooks(a,"fx"),j.unqueued==null&&(j.unqueued=0,k=j.empty.fire,j.empty.fire=function(){j.unqueued||k()}),j.unqueued++,l.always(function(){l.always(function(){j.unqueued--,p.queue(a,"fx").length||j.empty.fire()})})),a.nodeType===1&&("height"in b||"width"in b)&&(c.overflow=[m.overflow,m.overflowX,m.overflowY],p.css(a,"display")==="inline"&&p.css(a,"float")==="none"&&(!p.support.inlineBlockNeedsLayout||cc(a.nodeName)==="inline"?m.display="inline-block":m.zoom=1)),c.overflow&&(m.overflow="hidden",p.support.shrinkWrapBlocks||l.done(function(){m.overflow=c.overflow[0],m.overflowX=c.overflow[1],m.overflowY=c.overflow[2]}));for(d in b){f=b[d];if(cP.exec(f)){delete b[d];if(f===(q?"hide":"show"))continue;o.push(d)}}g=o.length;if(g){h=p._data(a,"fxshow")||p._data(a,"fxshow",{}),q?p(a).show():l.done(function(){p(a).hide()}),l.done(function(){var b;p.removeData(a,"fxshow",!0);for(b in n)p.style(a,b,n[b])});for(d=0;d<g;d++)e=o[d],i=l.createTween(e,q?h[e]:0),n[e]=h[e]||p.style(a,e),e in h||(h[e]=i.start,q&&(i.end=i.start,i.start=e==="width"||e==="height"?1:0))}}function cZ(a,b,c,d,e){return new cZ.prototype.init(a,b,c,d,e)}function c$(a,b){var c,d={height:a},e=0;b=b?1:0;for(;e<4;e+=2-b)c=bV[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function da(a){return p.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1}var c,d,e=a.document,f=a.location,g=a.navigator,h=a.jQuery,i=a.$,j=Array.prototype.push,k=Array.prototype.slice,l=Array.prototype.indexOf,m=Object.prototype.toString,n=Object.prototype.hasOwnProperty,o=String.prototype.trim,p=function(a,b){return new p.fn.init(a,b,c)},q=/[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,r=/\S/,s=/\s+/,t=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,u=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^[\],:{}\s]*$/,x=/(?:^|:|,)(?:\s*\[)+/g,y=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,z=/"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,A=/^-ms-/,B=/-([\da-z])/gi,C=function(a,b){return(b+"").toUpperCase()},D=function(){e.addEventListener?(e.removeEventListener("DOMContentLoaded",D,!1),p.ready()):e.readyState==="complete"&&(e.detachEvent("onreadystatechange",D),p.ready())},E={};p.fn=p.prototype={constructor:p,init:function(a,c,d){var f,g,h,i;if(!a)return this;if(a.nodeType)return this.context=this[0]=a,this.length=1,this;if(typeof a=="string"){a.charAt(0)==="<"&&a.charAt(a.length-1)===">"&&a.length>=3?f=[null,a,null]:f=u.exec(a);if(f&&(f[1]||!c)){if(f[1])return c=c instanceof p?c[0]:c,i=c&&c.nodeType?c.ownerDocument||c:e,a=p.parseHTML(f[1],i,!0),v.test(f[1])&&p.isPlainObject(c)&&this.attr.call(a,c,!0),p.merge(this,a);g=e.getElementById(f[2]);if(g&&g.parentNode){if(g.id!==f[2])return d.find(a);this.length=1,this[0]=g}return this.context=e,this.selector=a,this}return!c||c.jquery?(c||d).find(a):this.constructor(c).find(a)}return p.isFunction(a)?d.ready(a):(a.selector!==b&&(this.selector=a.selector,this.context=a.context),p.makeArray(a,this))},selector:"",jquery:"1.8.2",length:0,size:function(){return this.length},toArray:function(){return k.call(this)},get:function(a){return a==null?this.toArray():a<0?this[this.length+a]:this[a]},pushStack:function(a,b,c){var d=p.merge(this.constructor(),a);return d.prevObject=this,d.context=this.context,b==="find"?d.selector=this.selector+(this.selector?" ":"")+c:b&&(d.selector=this.selector+"."+b+"("+c+")"),d},each:function(a,b){return p.each(this,a,b)},ready:function(a){return p.ready.promise().done(a),this},eq:function(a){return a=+a,a===-1?this.slice(a):this.slice(a,a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(k.apply(this,arguments),"slice",k.call(arguments).join(","))},map:function(a){return this.pushStack(p.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:j,sort:[].sort,splice:[].splice},p.fn.init.prototype=p.fn,p.extend=p.fn.extend=function(){var a,c,d,e,f,g,h=arguments[0]||{},i=1,j=arguments.length,k=!1;typeof h=="boolean"&&(k=h,h=arguments[1]||{},i=2),typeof h!="object"&&!p.isFunction(h)&&(h={}),j===i&&(h=this,--i);for(;i<j;i++)if((a=arguments[i])!=null)for(c in a){d=h[c],e=a[c];if(h===e)continue;k&&e&&(p.isPlainObject(e)||(f=p.isArray(e)))?(f?(f=!1,g=d&&p.isArray(d)?d:[]):g=d&&p.isPlainObject(d)?d:{},h[c]=p.extend(k,g,e)):e!==b&&(h[c]=e)}return h},p.extend({noConflict:function(b){return a.$===p&&(a.$=i),b&&a.jQuery===p&&(a.jQuery=h),p},isReady:!1,readyWait:1,holdReady:function(a){a?p.readyWait++:p.ready(!0)},ready:function(a){if(a===!0?--p.readyWait:p.isReady)return;if(!e.body)return setTimeout(p.ready,1);p.isReady=!0;if(a!==!0&&--p.readyWait>0)return;d.resolveWith(e,[p]),p.fn.trigger&&p(e).trigger("ready").off("ready")},isFunction:function(a){return p.type(a)==="function"},isArray:Array.isArray||function(a){return p.type(a)==="array"},isWindow:function(a){return a!=null&&a==a.window},isNumeric:function(a){return!isNaN(parseFloat(a))&&isFinite(a)},type:function(a){return a==null?String(a):E[m.call(a)]||"object"},isPlainObject:function(a){if(!a||p.type(a)!=="object"||a.nodeType||p.isWindow(a))return!1;try{if(a.constructor&&!n.call(a,"constructor")&&!n.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}var d;for(d in a);return d===b||n.call(a,d)},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},error:function(a){throw new Error(a)},parseHTML:function(a,b,c){var d;return!a||typeof a!="string"?null:(typeof b=="boolean"&&(c=b,b=0),b=b||e,(d=v.exec(a))?[b.createElement(d[1])]:(d=p.buildFragment([a],b,c?null:[]),p.merge([],(d.cacheable?p.clone(d.fragment):d.fragment).childNodes)))},parseJSON:function(b){if(!b||typeof b!="string")return null;b=p.trim(b);if(a.JSON&&a.JSON.parse)return a.JSON.parse(b);if(w.test(b.replace(y,"@").replace(z,"]").replace(x,"")))return(new Function("return "+b))();p.error("Invalid JSON: "+b)},parseXML:function(c){var d,e;if(!c||typeof c!="string")return null;try{a.DOMParser?(e=new DOMParser,d=e.parseFromString(c,"text/xml")):(d=new ActiveXObject("Microsoft.XMLDOM"),d.async="false",d.loadXML(c))}catch(f){d=b}return(!d||!d.documentElement||d.getElementsByTagName("parsererror").length)&&p.error("Invalid XML: "+c),d},noop:function(){},globalEval:function(b){b&&r.test(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(A,"ms-").replace(B,C)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,c,d){var e,f=0,g=a.length,h=g===b||p.isFunction(a);if(d){if(h){for(e in a)if(c.apply(a[e],d)===!1)break}else for(;f<g;)if(c.apply(a[f++],d)===!1)break}else if(h){for(e in a)if(c.call(a[e],e,a[e])===!1)break}else for(;f<g;)if(c.call(a[f],f,a[f++])===!1)break;return a},trim:o&&!o.call("п»їВ ")?function(a){return a==null?"":o.call(a)}:function(a){return a==null?"":(a+"").replace(t,"")},makeArray:function(a,b){var c,d=b||[];return a!=null&&(c=p.type(a),a.length==null||c==="string"||c==="function"||c==="regexp"||p.isWindow(a)?j.call(d,a):p.merge(d,a)),d},inArray:function(a,b,c){var d;if(b){if(l)return l.call(b,a,c);d=b.length,c=c?c<0?Math.max(0,d+c):c:0;for(;c<d;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,c){var d=c.length,e=a.length,f=0;if(typeof d=="number")for(;f<d;f++)a[e++]=c[f];else while(c[f]!==b)a[e++]=c[f++];return a.length=e,a},grep:function(a,b,c){var d,e=[],f=0,g=a.length;c=!!c;for(;f<g;f++)d=!!b(a[f],f),c!==d&&e.push(a[f]);return e},map:function(a,c,d){var e,f,g=[],h=0,i=a.length,j=a instanceof p||i!==b&&typeof i=="number"&&(i>0&&a[0]&&a[i-1]||i===0||p.isArray(a));if(j)for(;h<i;h++)e=c(a[h],h,d),e!=null&&(g[g.length]=e);else for(f in a)e=c(a[f],f,d),e!=null&&(g[g.length]=e);return g.concat.apply([],g)},guid:1,proxy:function(a,c){var d,e,f;return typeof c=="string"&&(d=a[c],c=a,a=d),p.isFunction(a)?(e=k.call(arguments,2),f=function(){return a.apply(c,e.concat(k.call(arguments)))},f.guid=a.guid=a.guid||p.guid++,f):b},access:function(a,c,d,e,f,g,h){var i,j=d==null,k=0,l=a.length;if(d&&typeof d=="object"){for(k in d)p.access(a,c,k,d[k],1,g,e);f=1}else if(e!==b){i=h===b&&p.isFunction(e),j&&(i?(i=c,c=function(a,b,c){return i.call(p(a),c)}):(c.call(a,e),c=null));if(c)for(;k<l;k++)c(a[k],d,i?e.call(a[k],k,c(a[k],d)):e,h);f=1}return f?a:j?c.call(a):l?c(a[0],d):g},now:function(){return(new Date).getTime()}}),p.ready.promise=function(b){if(!d){d=p.Deferred();if(e.readyState==="complete")setTimeout(p.ready,1);else if(e.addEventListener)e.addEventListener("DOMContentLoaded",D,!1),a.addEventListener("load",p.ready,!1);else{e.attachEvent("onreadystatechange",D),a.attachEvent("onload",p.ready);var c=!1;try{c=a.frameElement==null&&e.documentElement}catch(f){}c&&c.doScroll&&function g(){if(!p.isReady){try{c.doScroll("left")}catch(a){return setTimeout(g,50)}p.ready()}}()}}return d.promise(b)},p.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){E["[object "+b+"]"]=b.toLowerCase()}),c=p(e);var F={};p.Callbacks=function(a){a=typeof a=="string"?F[a]||G(a):p.extend({},a);var c,d,e,f,g,h,i=[],j=!a.once&&[],k=function(b){c=a.memory&&b,d=!0,h=f||0,f=0,g=i.length,e=!0;for(;i&&h<g;h++)if(i[h].apply(b[0],b[1])===!1&&a.stopOnFalse){c=!1;break}e=!1,i&&(j?j.length&&k(j.shift()):c?i=[]:l.disable())},l={add:function(){if(i){var b=i.length;(function d(b){p.each(b,function(b,c){var e=p.type(c);e==="function"&&(!a.unique||!l.has(c))?i.push(c):c&&c.length&&e!=="string"&&d(c)})})(arguments),e?g=i.length:c&&(f=b,k(c))}return this},remove:function(){return i&&p.each(arguments,function(a,b){var c;while((c=p.inArray(b,i,c))>-1)i.splice(c,1),e&&(c<=g&&g--,c<=h&&h--)}),this},has:function(a){return p.inArray(a,i)>-1},empty:function(){return i=[],this},disable:function(){return i=j=c=b,this},disabled:function(){return!i},lock:function(){return j=b,c||l.disable(),this},locked:function(){return!j},fireWith:function(a,b){return b=b||[],b=[a,b.slice?b.slice():b],i&&(!d||j)&&(e?j.push(b):k(b)),this},fire:function(){return l.fireWith(this,arguments),this},fired:function(){return!!d}};return l},p.extend({Deferred:function(a){var b=[["resolve","done",p.Callbacks("once memory"),"resolved"],["reject","fail",p.Callbacks("once memory"),"rejected"],["notify","progress",p.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return p.Deferred(function(c){p.each(b,function(b,d){var f=d[0],g=a[b];e[d[1]](p.isFunction(g)?function(){var a=g.apply(this,arguments);a&&p.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f+"With"](this===e?c:this,[a])}:c[f])}),a=null}).promise()},promise:function(a){return a!=null?p.extend(a,d):d}},e={};return d.pipe=d.then,p.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[a^1][2].disable,b[2][2].lock),e[f[0]]=g.fire,e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=k.call(arguments),d=c.length,e=d!==1||a&&p.isFunction(a.promise)?d:0,f=e===1?a:p.Deferred(),g=function(a,b,c){return function(d){b[a]=this,c[a]=arguments.length>1?k.call(arguments):d,c===h?f.notifyWith(b,c):--e||f.resolveWith(b,c)}},h,i,j;if(d>1){h=new Array(d),i=new Array(d),j=new Array(d);for(;b<d;b++)c[b]&&p.isFunction(c[b].promise)?c[b].promise().done(g(b,j,c)).fail(f.reject).progress(g(b,i,h)):--e}return e||f.resolveWith(j,c),f.promise()}}),p.support=function(){var b,c,d,f,g,h,i,j,k,l,m,n=e.createElement("div");n.setAttribute("className","t"),n.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",c=n.getElementsByTagName("*"),d=n.getElementsByTagName("a")[0],d.style.cssText="top:1px;float:left;opacity:.5";if(!c||!c.length)return{};f=e.createElement("select"),g=f.appendChild(e.createElement("option")),h=n.getElementsByTagName("input")[0],b={leadingWhitespace:n.firstChild.nodeType===3,tbody:!n.getElementsByTagName("tbody").length,htmlSerialize:!!n.getElementsByTagName("link").length,style:/top/.test(d.getAttribute("style")),hrefNormalized:d.getAttribute("href")==="/a",opacity:/^0.5/.test(d.style.opacity),cssFloat:!!d.style.cssFloat,checkOn:h.value==="on",optSelected:g.selected,getSetAttribute:n.className!=="t",enctype:!!e.createElement("form").enctype,html5Clone:e.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",boxModel:e.compatMode==="CSS1Compat",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,boxSizingReliable:!0,pixelPosition:!1},h.checked=!0,b.noCloneChecked=h.cloneNode(!0).checked,f.disabled=!0,b.optDisabled=!g.disabled;try{delete n.test}catch(o){b.deleteExpando=!1}!n.addEventListener&&n.attachEvent&&n.fireEvent&&(n.attachEvent("onclick",m=function(){b.noCloneEvent=!1}),n.cloneNode(!0).fireEvent("onclick"),n.detachEvent("onclick",m)),h=e.createElement("input"),h.value="t",h.setAttribute("type","radio"),b.radioValue=h.value==="t",h.setAttribute("checked","checked"),h.setAttribute("name","t"),n.appendChild(h),i=e.createDocumentFragment(),i.appendChild(n.lastChild),b.checkClone=i.cloneNode(!0).cloneNode(!0).lastChild.checked,b.appendChecked=h.checked,i.removeChild(h),i.appendChild(n);if(n.attachEvent)for(k in{submit:!0,change:!0,focusin:!0})j="on"+k,l=j in n,l||(n.setAttribute(j,"return;"),l=typeof n[j]=="function"),b[k+"Bubbles"]=l;return p(function(){var c,d,f,g,h="padding:0;margin:0;border:0;display:block;overflow:hidden;",i=e.getElementsByTagName("body")[0];if(!i)return;c=e.createElement("div"),c.style.cssText="visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px",i.insertBefore(c,i.firstChild),d=e.createElement("div"),c.appendChild(d),d.innerHTML="<table><tr><td></td><td>t</td></tr></table>",f=d.getElementsByTagName("td"),f[0].style.cssText="padding:0;margin:0;border:0;display:none",l=f[0].offsetHeight===0,f[0].style.display="",f[1].style.display="none",b.reliableHiddenOffsets=l&&f[0].offsetHeight===0,d.innerHTML="",d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",b.boxSizing=d.offsetWidth===4,b.doesNotIncludeMarginInBodyOffset=i.offsetTop!==1,a.getComputedStyle&&(b.pixelPosition=(a.getComputedStyle(d,null)||{}).top!=="1%",b.boxSizingReliable=(a.getComputedStyle(d,null)||{width:"4px"}).width==="4px",g=e.createElement("div"),g.style.cssText=d.style.cssText=h,g.style.marginRight=g.style.width="0",d.style.width="1px",d.appendChild(g),b.reliableMarginRight=!parseFloat((a.getComputedStyle(g,null)||{}).marginRight)),typeof d.style.zoom!="undefined"&&(d.innerHTML="",d.style.cssText=h+"width:1px;padding:1px;display:inline;zoom:1",b.inlineBlockNeedsLayout=d.offsetWidth===3,d.style.display="block",d.style.overflow="visible",d.innerHTML="<div></div>",d.firstChild.style.width="5px",b.shrinkWrapBlocks=d.offsetWidth!==3,c.style.zoom=1),i.removeChild(c),c=d=f=g=null}),i.removeChild(n),c=d=f=g=h=i=n=null,b}();var H=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,I=/([A-Z])/g;p.extend({cache:{},deletedIds:[],uuid:0,expando:"jQuery"+(p.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){return a=a.nodeType?p.cache[a[p.expando]]:a[p.expando],!!a&&!K(a)},data:function(a,c,d,e){if(!p.acceptData(a))return;var f,g,h=p.expando,i=typeof c=="string",j=a.nodeType,k=j?p.cache:a,l=j?a[h]:a[h]&&h;if((!l||!k[l]||!e&&!k[l].data)&&i&&d===b)return;l||(j?a[h]=l=p.deletedIds.pop()||p.guid++:l=h),k[l]||(k[l]={},j||(k[l].toJSON=p.noop));if(typeof c=="object"||typeof c=="function")e?k[l]=p.extend(k[l],c):k[l].data=p.extend(k[l].data,c);return f=k[l],e||(f.data||(f.data={}),f=f.data),d!==b&&(f[p.camelCase(c)]=d),i?(g=f[c],g==null&&(g=f[p.camelCase(c)])):g=f,g},removeData:function(a,b,c){if(!p.acceptData(a))return;var d,e,f,g=a.nodeType,h=g?p.cache:a,i=g?a[p.expando]:p.expando;if(!h[i])return;if(b){d=c?h[i]:h[i].data;if(d){p.isArray(b)||(b in d?b=[b]:(b=p.camelCase(b),b in d?b=[b]:b=b.split(" ")));for(e=0,f=b.length;e<f;e++)delete d[b[e]];if(!(c?K:p.isEmptyObject)(d))return}}if(!c){delete h[i].data;if(!K(h[i]))return}g?p.cleanData([a],!0):p.support.deleteExpando||h!=h.window?delete h[i]:h[i]=null},_data:function(a,b,c){return p.data(a,b,c,!0)},acceptData:function(a){var b=a.nodeName&&p.noData[a.nodeName.toLowerCase()];return!b||b!==!0&&a.getAttribute("classid")===b}}),p.fn.extend({data:function(a,c){var d,e,f,g,h,i=this[0],j=0,k=null;if(a===b){if(this.length){k=p.data(i);if(i.nodeType===1&&!p._data(i,"parsedAttrs")){f=i.attributes;for(h=f.length;j<h;j++)g=f[j].name,g.indexOf("data-")||(g=p.camelCase(g.substring(5)),J(i,g,k[g]));p._data(i,"parsedAttrs",!0)}}return k}return typeof a=="object"?this.each(function(){p.data(this,a)}):(d=a.split(".",2),d[1]=d[1]?"."+d[1]:"",e=d[1]+"!",p.access(this,function(c){if(c===b)return k=this.triggerHandler("getData"+e,[d[0]]),k===b&&i&&(k=p.data(i,a),k=J(i,a,k)),k===b&&d[1]?this.data(d[0]):k;d[1]=c,this.each(function(){var b=p(this);b.triggerHandler("setData"+e,d),p.data(this,a,c),b.triggerHandler("changeData"+e,d)})},null,c,arguments.length>1,null,!1))},removeData:function(a){return this.each(function(){p.removeData(this,a)})}}),p.extend({queue:function(a,b,c){var d;if(a)return b=(b||"fx")+"queue",d=p._data(a,b),c&&(!d||p.isArray(c)?d=p._data(a,b,p.makeArray(c)):d.push(c)),d||[]},dequeue:function(a,b){b=b||"fx";var c=p.queue(a,b),d=c.length,e=c.shift(),f=p._queueHooks(a,b),g=function(){p.dequeue(a,b)};e==="inprogress"&&(e=c.shift(),d--),e&&(b==="fx"&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return p._data(a,c)||p._data(a,c,{empty:p.Callbacks("once memory").add(function(){p.removeData(a,b+"queue",!0),p.removeData(a,c,!0)})})}}),p.fn.extend({queue:function(a,c){var d=2;return typeof a!="string"&&(c=a,a="fx",d--),arguments.length<d?p.queue(this[0],a):c===b?this:this.each(function(){var b=p.queue(this,a,c);p._queueHooks(this,a),a==="fx"&&b[0]!=="inprogress"&&p.dequeue(this,a)})},dequeue:function(a){return this.each(function(){p.dequeue(this,a)})},delay:function(a,b){return a=p.fx?p.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,c){var d,e=1,f=p.Deferred(),g=this,h=this.length,i=function(){--e||f.resolveWith(g,[g])};typeof a!="string"&&(c=a,a=b),a=a||"fx";while(h--)d=p._data(g[h],a+"queueHooks"),d&&d.empty&&(e++,d.empty.add(i));return i(),f.promise(c)}});var L,M,N,O=/[\t\r\n]/g,P=/\r/g,Q=/^(?:button|input)$/i,R=/^(?:button|input|object|select|textarea)$/i,S=/^a(?:rea|)$/i,T=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,U=p.support.getSetAttribute;p.fn.extend({attr:function(a,b){return p.access(this,p.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){p.removeAttr(this,a)})},prop:function(a,b){return p.access(this,p.prop,a,b,arguments.length>1)},removeProp:function(a){return a=p.propFix[a]||a,this.each(function(){try{this[a]=b,delete this[a]}catch(c){}})},addClass:function(a){var b,c,d,e,f,g,h;if(p.isFunction(a))return this.each(function(b){p(this).addClass(a.call(this,b,this.className))});if(a&&typeof a=="string"){b=a.split(s);for(c=0,d=this.length;c<d;c++){e=this[c];if(e.nodeType===1)if(!e.className&&b.length===1)e.className=a;else{f=" "+e.className+" ";for(g=0,h=b.length;g<h;g++)f.indexOf(" "+b[g]+" ")<0&&(f+=b[g]+" ");e.className=p.trim(f)}}}return this},removeClass:function(a){var c,d,e,f,g,h,i;if(p.isFunction(a))return this.each(function(b){p(this).removeClass(a.call(this,b,this.className))});if(a&&typeof a=="string"||a===b){c=(a||"").split(s);for(h=0,i=this.length;h<i;h++){e=this[h];if(e.nodeType===1&&e.className){d=(" "+e.className+" ").replace(O," ");for(f=0,g=c.length;f<g;f++)while(d.indexOf(" "+c[f]+" ")>=0)d=d.replace(" "+c[f]+" "," ");e.className=a?p.trim(d):""}}}return this},toggleClass:function(a,b){var c=typeof a,d=typeof b=="boolean";return p.isFunction(a)?this.each(function(c){p(this).toggleClass(a.call(this,c,this.className,b),b)}):this.each(function(){if(c==="string"){var e,f=0,g=p(this),h=b,i=a.split(s);while(e=i[f++])h=d?h:!g.hasClass(e),g[h?"addClass":"removeClass"](e)}else if(c==="undefined"||c==="boolean")this.className&&p._data(this,"__className__",this.className),this.className=this.className||a===!1?"":p._data(this,"__className__")||""})},hasClass:function(a){var b=" "+a+" ",c=0,d=this.length;for(;c<d;c++)if(this[c].nodeType===1&&(" "+this[c].className+" ").replace(O," ").indexOf(b)>=0)return!0;return!1},val:function(a){var c,d,e,f=this[0];if(!arguments.length){if(f)return c=p.valHooks[f.type]||p.valHooks[f.nodeName.toLowerCase()],c&&"get"in c&&(d=c.get(f,"value"))!==b?d:(d=f.value,typeof d=="string"?d.replace(P,""):d==null?"":d);return}return e=p.isFunction(a),this.each(function(d){var f,g=p(this);if(this.nodeType!==1)return;e?f=a.call(this,d,g.val()):f=a,f==null?f="":typeof f=="number"?f+="":p.isArray(f)&&(f=p.map(f,function(a){return a==null?"":a+""})),c=p.valHooks[this.type]||p.valHooks[this.nodeName.toLowerCase()];if(!c||!("set"in c)||c.set(this,f,"value")===b)this.value=f})}}),p.extend({valHooks:{option:{get:function(a){var b=a.attributes.value;return!b||b.specified?a.value:a.text}},select:{get:function(a){var b,c,d,e,f=a.selectedIndex,g=[],h=a.options,i=a.type==="select-one";if(f<0)return null;c=i?f:0,d=i?f+1:h.length;for(;c<d;c++){e=h[c];if(e.selected&&(p.support.optDisabled?!e.disabled:e.getAttribute("disabled")===null)&&(!e.parentNode.disabled||!p.nodeName(e.parentNode,"optgroup"))){b=p(e).val();if(i)return b;g.push(b)}}return i&&!g.length&&h.length?p(h[f]).val():g},set:function(a,b){var c=p.makeArray(b);return p(a).find("option").each(function(){this.selected=p.inArray(p(this).val(),c)>=0}),c.length||(a.selectedIndex=-1),c}}},attrFn:{},attr:function(a,c,d,e){var f,g,h,i=a.nodeType;if(!a||i===3||i===8||i===2)return;if(e&&p.isFunction(p.fn[c]))return p(a)[c](d);if(typeof a.getAttribute=="undefined")return p.prop(a,c,d);h=i!==1||!p.isXMLDoc(a),h&&(c=c.toLowerCase(),g=p.attrHooks[c]||(T.test(c)?M:L));if(d!==b){if(d===null){p.removeAttr(a,c);return}return g&&"set"in g&&h&&(f=g.set(a,d,c))!==b?f:(a.setAttribute(c,d+""),d)}return g&&"get"in g&&h&&(f=g.get(a,c))!==null?f:(f=a.getAttribute(c),f===null?b:f)},removeAttr:function(a,b){var c,d,e,f,g=0;if(b&&a.nodeType===1){d=b.split(s);for(;g<d.length;g++)e=d[g],e&&(c=p.propFix[e]||e,f=T.test(e),f||p.attr(a,e,""),a.removeAttribute(U?e:c),f&&c in a&&(a[c]=!1))}},attrHooks:{type:{set:function(a,b){if(Q.test(a.nodeName)&&a.parentNode)p.error("type property can't be changed");else if(!p.support.radioValue&&b==="radio"&&p.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}},value:{get:function(a,b){return L&&p.nodeName(a,"button")?L.get(a,b):b in a?a.value:null},set:function(a,b,c){if(L&&p.nodeName(a,"button"))return L.set(a,b,c);a.value=b}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(a,c,d){var e,f,g,h=a.nodeType;if(!a||h===3||h===8||h===2)return;return g=h!==1||!p.isXMLDoc(a),g&&(c=p.propFix[c]||c,f=p.propHooks[c]),d!==b?f&&"set"in f&&(e=f.set(a,d,c))!==b?e:a[c]=d:f&&"get"in f&&(e=f.get(a,c))!==null?e:a[c]},propHooks:{tabIndex:{get:function(a){var c=a.getAttributeNode("tabindex");return c&&c.specified?parseInt(c.value,10):R.test(a.nodeName)||S.test(a.nodeName)&&a.href?0:b}}}}),M={get:function(a,c){var d,e=p.prop(a,c);return e===!0||typeof e!="boolean"&&(d=a.getAttributeNode(c))&&d.nodeValue!==!1?c.toLowerCase():b},set:function(a,b,c){var d;return b===!1?p.removeAttr(a,c):(d=p.propFix[c]||c,d in a&&(a[d]=!0),a.setAttribute(c,c.toLowerCase())),c}},U||(N={name:!0,id:!0,coords:!0},L=p.valHooks.button={get:function(a,c){var d;return d=a.getAttributeNode(c),d&&(N[c]?d.value!=="":d.specified)?d.value:b},set:function(a,b,c){var d=a.getAttributeNode(c);return d||(d=e.createAttribute(c),a.setAttributeNode(d)),d.value=b+""}},p.each(["width","height"],function(a,b){p.attrHooks[b]=p.extend(p.attrHooks[b],{set:function(a,c){if(c==="")return a.setAttribute(b,"auto"),c}})}),p.attrHooks.contenteditable={get:L.get,set:function(a,b,c){b===""&&(b="false"),L.set(a,b,c)}}),p.support.hrefNormalized||p.each(["href","src","width","height"],function(a,c){p.attrHooks[c]=p.extend(p.attrHooks[c],{get:function(a){var d=a.getAttribute(c,2);return d===null?b:d}})}),p.support.style||(p.attrHooks.style={get:function(a){return a.style.cssText.toLowerCase()||b},set:function(a,b){return a.style.cssText=b+""}}),p.support.optSelected||(p.propHooks.selected=p.extend(p.propHooks.selected,{get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}})),p.support.enctype||(p.propFix.enctype="encoding"),p.support.checkOn||p.each(["radio","checkbox"],function(){p.valHooks[this]={get:function(a){return a.getAttribute("value")===null?"on":a.value}}}),p.each(["radio","checkbox"],function(){p.valHooks[this]=p.extend(p.valHooks[this],{set:function(a,b){if(p.isArray(b))return a.checked=p.inArray(p(a).val(),b)>=0}})});var V=/^(?:textarea|input|select)$/i,W=/^([^\.]*|)(?:\.(.+)|)$/,X=/(?:^|\s)hover(\.\S+|)\b/,Y=/^key/,Z=/^(?:mouse|contextmenu)|click/,$=/^(?:focusinfocus|focusoutblur)$/,_=function(a){return p.event.special.hover?a:a.replace(X,"mouseenter$1 mouseleave$1")};p.event={add:function(a,c,d,e,f){var g,h,i,j,k,l,m,n,o,q,r;if(a.nodeType===3||a.nodeType===8||!c||!d||!(g=p._data(a)))return;d.handler&&(o=d,d=o.handler,f=o.selector),d.guid||(d.guid=p.guid++),i=g.events,i||(g.events=i={}),h=g.handle,h||(g.handle=h=function(a){return typeof p!="undefined"&&(!a||p.event.triggered!==a.type)?p.event.dispatch.apply(h.elem,arguments):b},h.elem=a),c=p.trim(_(c)).split(" ");for(j=0;j<c.length;j++){k=W.exec(c[j])||[],l=k[1],m=(k[2]||"").split(".").sort(),r=p.event.special[l]||{},l=(f?r.delegateType:r.bindType)||l,r=p.event.special[l]||{},n=p.extend({type:l,origType:k[1],data:e,handler:d,guid:d.guid,selector:f,needsContext:f&&p.expr.match.needsContext.test(f),namespace:m.join(".")},o),q=i[l];if(!q){q=i[l]=[],q.delegateCount=0;if(!r.setup||r.setup.call(a,e,m,h)===!1)a.addEventListener?a.addEventListener(l,h,!1):a.attachEvent&&a.attachEvent("on"+l,h)}r.add&&(r.add.call(a,n),n.handler.guid||(n.handler.guid=d.guid)),f?q.splice(q.delegateCount++,0,n):q.push(n),p.event.global[l]=!0}a=null},global:{},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,q,r=p.hasData(a)&&p._data(a);if(!r||!(m=r.events))return;b=p.trim(_(b||"")).split(" ");for(f=0;f<b.length;f++){g=W.exec(b[f])||[],h=i=g[1],j=g[2];if(!h){for(h in m)p.event.remove(a,h+b[f],c,d,!0);continue}n=p.event.special[h]||{},h=(d?n.delegateType:n.bindType)||h,o=m[h]||[],k=o.length,j=j?new RegExp("(^|\\.)"+j.split(".").sort().join("\\.(?:.*\\.|)")+"(\\.|$)"):null;for(l=0;l<o.length;l++)q=o[l],(e||i===q.origType)&&(!c||c.guid===q.guid)&&(!j||j.test(q.namespace))&&(!d||d===q.selector||d==="**"&&q.selector)&&(o.splice(l--,1),q.selector&&o.delegateCount--,n.remove&&n.remove.call(a,q));o.length===0&&k!==o.length&&((!n.teardown||n.teardown.call(a,j,r.handle)===!1)&&p.removeEvent(a,h,r.handle),delete m[h])}p.isEmptyObject(m)&&(delete r.handle,p.removeData(a,"events",!0))},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(c,d,f,g){if(!f||f.nodeType!==3&&f.nodeType!==8){var h,i,j,k,l,m,n,o,q,r,s=c.type||c,t=[];if($.test(s+p.event.triggered))return;s.indexOf("!")>=0&&(s=s.slice(0,-1),i=!0),s.indexOf(".")>=0&&(t=s.split("."),s=t.shift(),t.sort());if((!f||p.event.customEvent[s])&&!p.event.global[s])return;c=typeof c=="object"?c[p.expando]?c:new p.Event(s,c):new p.Event(s),c.type=s,c.isTrigger=!0,c.exclusive=i,c.namespace=t.join("."),c.namespace_re=c.namespace?new RegExp("(^|\\.)"+t.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,m=s.indexOf(":")<0?"on"+s:"";if(!f){h=p.cache;for(j in h)h[j].events&&h[j].events[s]&&p.event.trigger(c,d,h[j].handle.elem,!0);return}c.result=b,c.target||(c.target=f),d=d!=null?p.makeArray(d):[],d.unshift(c),n=p.event.special[s]||{};if(n.trigger&&n.trigger.apply(f,d)===!1)return;q=[[f,n.bindType||s]];if(!g&&!n.noBubble&&!p.isWindow(f)){r=n.delegateType||s,k=$.test(r+s)?f:f.parentNode;for(l=f;k;k=k.parentNode)q.push([k,r]),l=k;l===(f.ownerDocument||e)&&q.push([l.defaultView||l.parentWindow||a,r])}for(j=0;j<q.length&&!c.isPropagationStopped();j++)k=q[j][0],c.type=q[j][1],o=(p._data(k,"events")||{})[c.type]&&p._data(k,"handle"),o&&o.apply(k,d),o=m&&k[m],o&&p.acceptData(k)&&o.apply&&o.apply(k,d)===!1&&c.preventDefault();return c.type=s,!g&&!c.isDefaultPrevented()&&(!n._default||n._default.apply(f.ownerDocument,d)===!1)&&(s!=="click"||!p.nodeName(f,"a"))&&p.acceptData(f)&&m&&f[s]&&(s!=="focus"&&s!=="blur"||c.target.offsetWidth!==0)&&!p.isWindow(f)&&(l=f[m],l&&(f[m]=null),p.event.triggered=s,f[s](),p.event.triggered=b,l&&(f[m]=l)),c.result}return},dispatch:function(c){c=p.event.fix(c||a.event);var d,e,f,g,h,i,j,l,m,n,o=(p._data(this,"events")||{})[c.type]||[],q=o.delegateCount,r=k.call(arguments),s=!c.exclusive&&!c.namespace,t=p.event.special[c.type]||{},u=[];r[0]=c,c.delegateTarget=this;if(t.preDispatch&&t.preDispatch.call(this,c)===!1)return;if(q&&(!c.button||c.type!=="click"))for(f=c.target;f!=this;f=f.parentNode||this)if(f.disabled!==!0||c.type!=="click"){h={},j=[];for(d=0;d<q;d++)l=o[d],m=l.selector,h[m]===b&&(h[m]=l.needsContext?p(m,this).index(f)>=0:p.find(m,this,null,[f]).length),h[m]&&j.push(l);j.length&&u.push({elem:f,matches:j})}o.length>q&&u.push({elem:this,matches:o.slice(q)});for(d=0;d<u.length&&!c.isPropagationStopped();d++){i=u[d],c.currentTarget=i.elem;for(e=0;e<i.matches.length&&!c.isImmediatePropagationStopped();e++){l=i.matches[e];if(s||!c.namespace&&!l.namespace||c.namespace_re&&c.namespace_re.test(l.namespace))c.data=l.data,c.handleObj=l,g=((p.event.special[l.origType]||{}).handle||l.handler).apply(i.elem,r),g!==b&&(c.result=g,g===!1&&(c.preventDefault(),c.stopPropagation()))}}return t.postDispatch&&t.postDispatch.call(this,c),c.result},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return a.which==null&&(a.which=b.charCode!=null?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,c){var d,f,g,h=c.button,i=c.fromElement;return a.pageX==null&&c.clientX!=null&&(d=a.target.ownerDocument||e,f=d.documentElement,g=d.body,a.pageX=c.clientX+(f&&f.scrollLeft||g&&g.scrollLeft||0)-(f&&f.clientLeft||g&&g.clientLeft||0),a.pageY=c.clientY+(f&&f.scrollTop||g&&g.scrollTop||0)-(f&&f.clientTop||g&&g.clientTop||0)),!a.relatedTarget&&i&&(a.relatedTarget=i===a.target?c.toElement:i),!a.which&&h!==b&&(a.which=h&1?1:h&2?3:h&4?2:0),a}},fix:function(a){if(a[p.expando])return a;var b,c,d=a,f=p.event.fixHooks[a.type]||{},g=f.props?this.props.concat(f.props):this.props;a=p.Event(d);for(b=g.length;b;)c=g[--b],a[c]=d[c];return a.target||(a.target=d.srcElement||e),a.target.nodeType===3&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,f.filter?f.filter(a,d):a},special:{load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(a,b,c){p.isWindow(this)&&(this.onbeforeunload=c)},teardown:function(a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)}}},simulate:function(a,b,c,d){var e=p.extend(new p.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?p.event.trigger(e,null,b):p.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},p.event.handle=p.event.dispatch,p.removeEvent=e.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]=="undefined"&&(a[d]=null),a.detachEvent(d,c))},p.Event=function(a,b){if(this instanceof p.Event)a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?bb:ba):this.type=a,b&&p.extend(this,b),this.timeStamp=a&&a.timeStamp||p.now(),this[p.expando]=!0;else return new p.Event(a,b)},p.Event.prototype={preventDefault:function(){this.isDefaultPrevented=bb;var a=this.originalEvent;if(!a)return;a.preventDefault?a.preventDefault():a.returnValue=!1},stopPropagation:function(){this.isPropagationStopped=bb;var a=this.originalEvent;if(!a)return;a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=bb,this.stopPropagation()},isDefaultPrevented:ba,isPropagationStopped:ba,isImmediatePropagationStopped:ba},p.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){p.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj,g=f.selector;if(!e||e!==d&&!p.contains(d,e))a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b;return c}}}),p.support.submitBubbles||(p.event.special.submit={setup:function(){if(p.nodeName(this,"form"))return!1;p.event.add(this,"click._submit keypress._submit",function(a){var c=a.target,d=p.nodeName(c,"input")||p.nodeName(c,"button")?c.form:b;d&&!p._data(d,"_submit_attached")&&(p.event.add(d,"submit._submit",function(a){a._submit_bubble=!0}),p._data(d,"_submit_attached",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&p.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){if(p.nodeName(this,"form"))return!1;p.event.remove(this,"._submit")}}),p.support.changeBubbles||(p.event.special.change={setup:function(){if(V.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")p.event.add(this,"propertychange._change",function(a){a.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),p.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),p.event.simulate("change",this,a,!0)});return!1}p.event.add(this,"beforeactivate._change",function(a){var b=a.target;V.test(b.nodeName)&&!p._data(b,"_change_attached")&&(p.event.add(b,"change._change",function(a){this.parentNode&&!a.isSimulated&&!a.isTrigger&&p.event.simulate("change",this.parentNode,a,!0)}),p._data(b,"_change_attached",!0))})},handle:function(a){var b=a.target;if(this!==b||a.isSimulated||a.isTrigger||b.type!=="radio"&&b.type!=="checkbox")return a.handleObj.handler.apply(this,arguments)},teardown:function(){return p.event.remove(this,"._change"),!V.test(this.nodeName)}}),p.support.focusinBubbles||p.each({focus:"focusin",blur:"focusout"},function(a,b){var c=0,d=function(a){p.event.simulate(b,a.target,p.event.fix(a),!0)};p.event.special[b]={setup:function(){c++===0&&e.addEventListener(a,d,!0)},teardown:function(){--c===0&&e.removeEventListener(a,d,!0)}}}),p.fn.extend({on:function(a,c,d,e,f){var g,h;if(typeof a=="object"){typeof c!="string"&&(d=d||c,c=b);for(h in a)this.on(h,c,d,a[h],f);return this}d==null&&e==null?(e=c,d=c=b):e==null&&(typeof c=="string"?(e=d,d=b):(e=d,d=c,c=b));if(e===!1)e=ba;else if(!e)return this;return f===1&&(g=e,e=function(a){return p().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=p.guid++)),this.each(function(){p.event.add(this,a,e,d,c)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,c,d){var e,f;if(a&&a.preventDefault&&a.handleObj)return e=a.handleObj,p(a.delegateTarget).off(e.namespace?e.origType+"."+e.namespace:e.origType,e.selector,e.handler),this;if(typeof a=="object"){for(f in a)this.off(f,c,a[f]);return this}if(c===!1||typeof c=="function")d=c,c=b;return d===!1&&(d=ba),this.each(function(){p.event.remove(this,a,d,c)})},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},live:function(a,b,c){return p(this.context).on(a,this.selector,b,c),this},die:function(a,b){return p(this.context).off(a,this.selector||"**",b),this},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return arguments.length===1?this.off(a,"**"):this.off(b,a||"**",c)},trigger:function(a,b){return this.each(function(){p.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0])return p.event.trigger(a,b,this[0],!0)},toggle:function(a){var b=arguments,c=a.guid||p.guid++,d=0,e=function(c){var e=(p._data(this,"lastToggle"+a.guid)||0)%d;return p._data(this,"lastToggle"+a.guid,e+1),c.preventDefault(),b[e].apply(this,arguments)||!1};e.guid=c;while(d<b.length)b[d++].guid=c;return this.click(e)},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),p.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){p.fn[b]=function(a,c){return c==null&&(c=a,a=null),arguments.length>0?this.on(b,null,a,c):this.trigger(b)},Y.test(b)&&(p.event.fixHooks[b]=p.event.keyHooks),Z.test(b)&&(p.event.fixHooks[b]=p.event.mouseHooks)}),function(a,b){function bc(a,b,c,d){c=c||[],b=b||r;var e,f,i,j,k=b.nodeType;if(!a||typeof a!="string")return c;if(k!==1&&k!==9)return[];i=g(b);if(!i&&!d)if(e=P.exec(a))if(j=e[1]){if(k===9){f=b.getElementById(j);if(!f||!f.parentNode)return c;if(f.id===j)return c.push(f),c}else if(b.ownerDocument&&(f=b.ownerDocument.getElementById(j))&&h(b,f)&&f.id===j)return c.push(f),c}else{if(e[2])return w.apply(c,x.call(b.getElementsByTagName(a),0)),c;if((j=e[3])&&_&&b.getElementsByClassName)return w.apply(c,x.call(b.getElementsByClassName(j),0)),c}return bp(a.replace(L,"$1"),b,c,d,i)}function bd(a){return function(b){var c=b.nodeName.toLowerCase();return c==="input"&&b.type===a}}function be(a){return function(b){var c=b.nodeName.toLowerCase();return(c==="input"||c==="button")&&b.type===a}}function bf(a){return z(function(b){return b=+b,z(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function bg(a,b,c){if(a===b)return c;var d=a.nextSibling;while(d){if(d===b)return-1;d=d.nextSibling}return 1}function bh(a,b){var c,d,f,g,h,i,j,k=C[o][a];if(k)return b?0:k.slice(0);h=a,i=[],j=e.preFilter;while(h){if(!c||(d=M.exec(h)))d&&(h=h.slice(d[0].length)),i.push(f=[]);c=!1;if(d=N.exec(h))f.push(c=new q(d.shift())),h=h.slice(c.length),c.type=d[0].replace(L," ");for(g in e.filter)(d=W[g].exec(h))&&(!j[g]||(d=j[g](d,r,!0)))&&(f.push(c=new q(d.shift())),h=h.slice(c.length),c.type=g,c.matches=d);if(!c)break}return b?h.length:h?bc.error(a):C(a,i).slice(0)}function bi(a,b,d){var e=b.dir,f=d&&b.dir==="parentNode",g=u++;return b.first?function(b,c,d){while(b=b[e])if(f||b.nodeType===1)return a(b,c,d)}:function(b,d,h){if(!h){var i,j=t+" "+g+" ",k=j+c;while(b=b[e])if(f||b.nodeType===1){if((i=b[o])===k)return b.sizset;if(typeof i=="string"&&i.indexOf(j)===0){if(b.sizset)return b}else{b[o]=k;if(a(b,d,h))return b.sizset=!0,b;b.sizset=!1}}}else while(b=b[e])if(f||b.nodeType===1)if(a(b,d,h))return b}}function bj(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function bk(a,b,c,d,e){var f,g=[],h=0,i=a.length,j=b!=null;for(;h<i;h++)if(f=a[h])if(!c||c(f,d,e))g.push(f),j&&b.push(h);return g}function bl(a,b,c,d,e,f){return d&&!d[o]&&(d=bl(d)),e&&!e[o]&&(e=bl(e,f)),z(function(f,g,h,i){if(f&&e)return;var j,k,l,m=[],n=[],o=g.length,p=f||bo(b||"*",h.nodeType?[h]:h,[],f),q=a&&(f||!b)?bk(p,m,a,h,i):p,r=c?e||(f?a:o||d)?[]:g:q;c&&c(q,r,h,i);if(d){l=bk(r,n),d(l,[],h,i),j=l.length;while(j--)if(k=l[j])r[n[j]]=!(q[n[j]]=k)}if(f){j=a&&r.length;while(j--)if(k=r[j])f[m[j]]=!(g[m[j]]=k)}else r=bk(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):w.apply(g,r)})}function bm(a){var b,c,d,f=a.length,g=e.relative[a[0].type],h=g||e.relative[" "],i=g?1:0,j=bi(function(a){return a===b},h,!0),k=bi(function(a){return y.call(b,a)>-1},h,!0),m=[function(a,c,d){return!g&&(d||c!==l)||((b=c).nodeType?j(a,c,d):k(a,c,d))}];for(;i<f;i++)if(c=e.relative[a[i].type])m=[bi(bj(m),c)];else{c=e.filter[a[i].type].apply(null,a[i].matches);if(c[o]){d=++i;for(;d<f;d++)if(e.relative[a[d].type])break;return bl(i>1&&bj(m),i>1&&a.slice(0,i-1).join("").replace(L,"$1"),c,i<d&&bm(a.slice(i,d)),d<f&&bm(a=a.slice(d)),d<f&&a.join(""))}m.push(c)}return bj(m)}function bn(a,b){var d=b.length>0,f=a.length>0,g=function(h,i,j,k,m){var n,o,p,q=[],s=0,u="0",x=h&&[],y=m!=null,z=l,A=h||f&&e.find.TAG("*",m&&i.parentNode||i),B=t+=z==null?1:Math.E;y&&(l=i!==r&&i,c=g.el);for(;(n=A[u])!=null;u++){if(f&&n){for(o=0;p=a[o];o++)if(p(n,i,j)){k.push(n);break}y&&(t=B,c=++g.el)}d&&((n=!p&&n)&&s--,h&&x.push(n))}s+=u;if(d&&u!==s){for(o=0;p=b[o];o++)p(x,q,i,j);if(h){if(s>0)while(u--)!x[u]&&!q[u]&&(q[u]=v.call(k));q=bk(q)}w.apply(k,q),y&&!h&&q.length>0&&s+b.length>1&&bc.uniqueSort(k)}return y&&(t=B,l=z),x};return g.el=0,d?z(g):g}function bo(a,b,c,d){var e=0,f=b.length;for(;e<f;e++)bc(a,b[e],c,d);return c}function bp(a,b,c,d,f){var g,h,j,k,l,m=bh(a),n=m.length;if(!d&&m.length===1){h=m[0]=m[0].slice(0);if(h.length>2&&(j=h[0]).type==="ID"&&b.nodeType===9&&!f&&e.relative[h[1].type]){b=e.find.ID(j.matches[0].replace(V,""),b,f)[0];if(!b)return c;a=a.slice(h.shift().length)}for(g=W.POS.test(a)?-1:h.length-1;g>=0;g--){j=h[g];if(e.relative[k=j.type])break;if(l=e.find[k])if(d=l(j.matches[0].replace(V,""),R.test(h[0].type)&&b.parentNode||b,f)){h.splice(g,1),a=d.length&&h.join("");if(!a)return w.apply(c,x.call(d,0)),c;break}}}return i(a,m)(d,b,f,c,R.test(a)),c}function bq(){}var c,d,e,f,g,h,i,j,k,l,m=!0,n="undefined",o=("sizcache"+Math.random()).replace(".",""),q=String,r=a.document,s=r.documentElement,t=0,u=0,v=[].pop,w=[].push,x=[].slice,y=[].indexOf||function(a){var b=0,c=this.length;for(;b<c;b++)if(this[b]===a)return b;return-1},z=function(a,b){return a[o]=b==null||b,a},A=function(){var a={},b=[];return z(function(c,d){return b.push(c)>e.cacheLength&&delete a[b.shift()],a[c]=d},a)},B=A(),C=A(),D=A(),E="[\\x20\\t\\r\\n\\f]",F="(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",G=F.replace("w","w#"),H="([*^$|!~]?=)",I="\\["+E+"*("+F+")"+E+"*(?:"+H+E+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+G+")|)|)"+E+"*\\]",J=":("+F+")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:"+I+")|[^:]|\\\\.)*|.*))\\)|)",K=":(even|odd|eq|gt|lt|nth|first|last)(?:\\("+E+"*((?:-\\d)?\\d*)"+E+"*\\)|)(?=[^-]|$)",L=new RegExp("^"+E+"+|((?:^|[^\\\\])(?:\\\\.)*)"+E+"+$","g"),M=new RegExp("^"+E+"*,"+E+"*"),N=new RegExp("^"+E+"*([\\x20\\t\\r\\n\\f>+~])"+E+"*"),O=new RegExp(J),P=/^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,Q=/^:not/,R=/[\x20\t\r\n\f]*[+~]/,S=/:not\($/,T=/h\d/i,U=/input|select|textarea|button/i,V=/\\(?!\\)/g,W={ID:new RegExp("^#("+F+")"),CLASS:new RegExp("^\\.("+F+")"),NAME:new RegExp("^\\[name=['\"]?("+F+")['\"]?\\]"),TAG:new RegExp("^("+F.replace("w","w*")+")"),ATTR:new RegExp("^"+I),PSEUDO:new RegExp("^"+J),POS:new RegExp(K,"i"),CHILD:new RegExp("^:(only|nth|first|last)-child(?:\\("+E+"*(even|odd|(([+-]|)(\\d*)n|)"+E+"*(?:([+-]|)"+E+"*(\\d+)|))"+E+"*\\)|)","i"),needsContext:new RegExp("^"+E+"*[>+~]|"+K,"i")},X=function(a){var b=r.createElement("div");try{return a(b)}catch(c){return!1}finally{b=null}},Y=X(function(a){return a.appendChild(r.createComment("")),!a.getElementsByTagName("*").length}),Z=X(function(a){return a.innerHTML="<a href='#'></a>",a.firstChild&&typeof a.firstChild.getAttribute!==n&&a.firstChild.getAttribute("href")==="#"}),$=X(function(a){a.innerHTML="<select></select>";var b=typeof a.lastChild.getAttribute("multiple");return b!=="boolean"&&b!=="string"}),_=X(function(a){return a.innerHTML="<div class='hidden e'></div><div class='hidden'></div>",!a.getElementsByClassName||!a.getElementsByClassName("e").length?!1:(a.lastChild.className="e",a.getElementsByClassName("e").length===2)}),ba=X(function(a){a.id=o+0,a.innerHTML="<a name='"+o+"'></a><div name='"+o+"'></div>",s.insertBefore(a,s.firstChild);var b=r.getElementsByName&&r.getElementsByName(o).length===2+r.getElementsByName(o+0).length;return d=!r.getElementById(o),s.removeChild(a),b});try{x.call(s.childNodes,0)[0].nodeType}catch(bb){x=function(a){var b,c=[];for(;b=this[a];a++)c.push(b);return c}}bc.matches=function(a,b){return bc(a,null,null,b)},bc.matchesSelector=function(a,b){return bc(b,null,null,[a]).length>0},f=bc.getText=function(a){var b,c="",d=0,e=a.nodeType;if(e){if(e===1||e===9||e===11){if(typeof a.textContent=="string")return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=f(a)}else if(e===3||e===4)return a.nodeValue}else for(;b=a[d];d++)c+=f(b);return c},g=bc.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?b.nodeName!=="HTML":!1},h=bc.contains=s.contains?function(a,b){var c=a.nodeType===9?a.documentElement:a,d=b&&b.parentNode;return a===d||!!(d&&d.nodeType===1&&c.contains&&c.contains(d))}:s.compareDocumentPosition?function(a,b){return b&&!!(a.compareDocumentPosition(b)&16)}:function(a,b){while(b=b.parentNode)if(b===a)return!0;return!1},bc.attr=function(a,b){var c,d=g(a);return d||(b=b.toLowerCase()),(c=e.attrHandle[b])?c(a):d||$?a.getAttribute(b):(c=a.getAttributeNode(b),c?typeof a[b]=="boolean"?a[b]?b:null:c.specified?c.value:null:null)},e=bc.selectors={cacheLength:50,createPseudo:z,match:W,attrHandle:Z?{}:{href:function(a){return a.getAttribute("href",2)},type:function(a){return a.getAttribute("type")}},find:{ID:d?function(a,b,c){if(typeof b.getElementById!==n&&!c){var d=b.getElementById(a);return d&&d.parentNode?[d]:[]}}:function(a,c,d){if(typeof c.getElementById!==n&&!d){var e=c.getElementById(a);return e?e.id===a||typeof e.getAttributeNode!==n&&e.getAttributeNode("id").value===a?[e]:b:[]}},TAG:Y?function(a,b){if(typeof b.getElementsByTagName!==n)return b.getElementsByTagName(a)}:function(a,b){var c=b.getElementsByTagName(a);if(a==="*"){var d,e=[],f=0;for(;d=c[f];f++)d.nodeType===1&&e.push(d);return e}return c},NAME:ba&&function(a,b){if(typeof b.getElementsByName!==n)return b.getElementsByName(name)},CLASS:_&&function(a,b,c){if(typeof b.getElementsByClassName!==n&&!c)return b.getElementsByClassName(a)}},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(V,""),a[3]=(a[4]||a[5]||"").replace(V,""),a[2]==="~="&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),a[1]==="nth"?(a[2]||bc.error(a[0]),a[3]=+(a[3]?a[4]+(a[5]||1):2*(a[2]==="even"||a[2]==="odd")),a[4]=+(a[6]+a[7]||a[2]==="odd")):a[2]&&bc.error(a[0]),a},PSEUDO:function(a){var b,c;if(W.CHILD.test(a[0]))return null;if(a[3])a[2]=a[3];else if(b=a[4])O.test(b)&&(c=bh(b,!0))&&(c=b.indexOf(")",b.length-c)-b.length)&&(b=b.slice(0,c),a[0]=a[0].slice(0,c)),a[2]=b;return a.slice(0,3)}},filter:{ID:d?function(a){return a=a.replace(V,""),function(b){return b.getAttribute("id")===a}}:function(a){return a=a.replace(V,""),function(b){var c=typeof b.getAttributeNode!==n&&b.getAttributeNode("id");return c&&c.value===a}},TAG:function(a){return a==="*"?function(){return!0}:(a=a.replace(V,"").toLowerCase(),function(b){return b.nodeName&&b.nodeName.toLowerCase()===a})},CLASS:function(a){var b=B[o][a];return b||(b=B(a,new RegExp("(^|"+E+")"+a+"("+E+"|$)"))),function(a){return b.test(a.className||typeof a.getAttribute!==n&&a.getAttribute("class")||"")}},ATTR:function(a,b,c){return function(d,e){var f=bc.attr(d,a);return f==null?b==="!=":b?(f+="",b==="="?f===c:b==="!="?f!==c:b==="^="?c&&f.indexOf(c)===0:b==="*="?c&&f.indexOf(c)>-1:b==="$="?c&&f.substr(f.length-c.length)===c:b==="~="?(" "+f+" ").indexOf(c)>-1:b==="|="?f===c||f.substr(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d){return a==="nth"?function(a){var b,e,f=a.parentNode;if(c===1&&d===0)return!0;if(f){e=0;for(b=f.firstChild;b;b=b.nextSibling)if(b.nodeType===1){e++;if(a===b)break}}return e-=d,e===c||e%c===0&&e/c>=0}:function(b){var c=b;switch(a){case"only":case"first":while(c=c.previousSibling)if(c.nodeType===1)return!1;if(a==="first")return!0;c=b;case"last":while(c=c.nextSibling)if(c.nodeType===1)return!1;return!0}}},PSEUDO:function(a,b){var c,d=e.pseudos[a]||e.setFilters[a.toLowerCase()]||bc.error("unsupported pseudo: "+a);return d[o]?d(b):d.length>1?(c=[a,a,"",b],e.setFilters.hasOwnProperty(a.toLowerCase())?z(function(a,c){var e,f=d(a,b),g=f.length;while(g--)e=y.call(a,f[g]),a[e]=!(c[e]=f[g])}):function(a){return d(a,0,c)}):d}},pseudos:{not:z(function(a){var b=[],c=[],d=i(a.replace(L,"$1"));return d[o]?z(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)if(f=g[h])a[h]=!(b[h]=f)}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:z(function(a){return function(b){return bc(a,b).length>0}}),contains:z(function(a){return function(b){return(b.textContent||b.innerText||f(b)).indexOf(a)>-1}}),enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&!!a.checked||b==="option"&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},parent:function(a){return!e.pseudos.empty(a)},empty:function(a){var b;a=a.firstChild;while(a){if(a.nodeName>"@"||(b=a.nodeType)===3||b===4)return!1;a=a.nextSibling}return!0},header:function(a){return T.test(a.nodeName)},text:function(a){var b,c;return a.nodeName.toLowerCase()==="input"&&(b=a.type)==="text"&&((c=a.getAttribute("type"))==null||c.toLowerCase()===b)},radio:bd("radio"),checkbox:bd("checkbox"),file:bd("file"),password:bd("password"),image:bd("image"),submit:be("submit"),reset:be("reset"),button:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&a.type==="button"||b==="button"},input:function(a){return U.test(a.nodeName)},focus:function(a){var b=a.ownerDocument;return a===b.activeElement&&(!b.hasFocus||b.hasFocus())&&(!!a.type||!!a.href)},active:function(a){return a===a.ownerDocument.activeElement},first:bf(function(a,b,c){return[0]}),last:bf(function(a,b,c){return[b-1]}),eq:bf(function(a,b,c){return[c<0?c+b:c]}),even:bf(function(a,b,c){for(var d=0;d<b;d+=2)a.push(d);return a}),odd:bf(function(a,b,c){for(var d=1;d<b;d+=2)a.push(d);return a}),lt:bf(function(a,b,c){for(var d=c<0?c+b:c;--d>=0;)a.push(d);return a}),gt:bf(function(a,b,c){for(var d=c<0?c+b:c;++d<b;)a.push(d);return a})}},j=s.compareDocumentPosition?function(a,b){return a===b?(k=!0,0):(!a.compareDocumentPosition||!b.compareDocumentPosition?a.compareDocumentPosition:a.compareDocumentPosition(b)&4)?-1:1}:function(a,b){if(a===b)return k=!0,0;if(a.sourceIndex&&b.sourceIndex)return a.sourceIndex-b.sourceIndex;var c,d,e=[],f=[],g=a.parentNode,h=b.parentNode,i=g;if(g===h)return bg(a,b);if(!g)return-1;if(!h)return 1;while(i)e.unshift(i),i=i.parentNode;i=h;while(i)f.unshift(i),i=i.parentNode;c=e.length,d=f.length;for(var j=0;j<c&&j<d;j++)if(e[j]!==f[j])return bg(e[j],f[j]);return j===c?bg(a,f[j],-1):bg(e[j],b,1)},[0,0].sort(j),m=!k,bc.uniqueSort=function(a){var b,c=1;k=m,a.sort(j);if(k)for(;b=a[c];c++)b===a[c-1]&&a.splice(c--,1);return a},bc.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},i=bc.compile=function(a,b){var c,d=[],e=[],f=D[o][a];if(!f){b||(b=bh(a)),c=b.length;while(c--)f=bm(b[c]),f[o]?d.push(f):e.push(f);f=D(a,bn(e,d))}return f},r.querySelectorAll&&function(){var a,b=bp,c=/'|\\/g,d=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,e=[":focus"],f=[":active",":focus"],h=s.matchesSelector||s.mozMatchesSelector||s.webkitMatchesSelector||s.oMatchesSelector||s.msMatchesSelector;X(function(a){a.innerHTML="<select><option selected=''></option></select>",a.querySelectorAll("[selected]").length||e.push("\\["+E+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),a.querySelectorAll(":checked").length||e.push(":checked")}),X(function(a){a.innerHTML="<p test=''></p>",a.querySelectorAll("[test^='']").length&&e.push("[*^$]="+E+"*(?:\"\"|'')"),a.innerHTML="<input type='hidden'/>",a.querySelectorAll(":enabled").length||e.push(":enabled",":disabled")}),e=new RegExp(e.join("|")),bp=function(a,d,f,g,h){if(!g&&!h&&(!e||!e.test(a))){var i,j,k=!0,l=o,m=d,n=d.nodeType===9&&a;if(d.nodeType===1&&d.nodeName.toLowerCase()!=="object"){i=bh(a),(k=d.getAttribute("id"))?l=k.replace(c,"\\$&"):d.setAttribute("id",l),l="[id='"+l+"'] ",j=i.length;while(j--)i[j]=l+i[j].join("");m=R.test(a)&&d.parentNode||d,n=i.join(",")}if(n)try{return w.apply(f,x.call(m.querySelectorAll(n),0)),f}catch(p){}finally{k||d.removeAttribute("id")}}return b(a,d,f,g,h)},h&&(X(function(b){a=h.call(b,"div");try{h.call(b,"[test!='']:sizzle"),f.push("!=",J)}catch(c){}}),f=new RegExp(f.join("|")),bc.matchesSelector=function(b,c){c=c.replace(d,"='$1']");if(!g(b)&&!f.test(c)&&(!e||!e.test(c)))try{var i=h.call(b,c);if(i||a||b.document&&b.document.nodeType!==11)return i}catch(j){}return bc(c,null,null,[b]).length>0})}(),e.pseudos.nth=e.pseudos.eq,e.filters=bq.prototype=e.pseudos,e.setFilters=new bq,bc.attr=p.attr,p.find=bc,p.expr=bc.selectors,p.expr[":"]=p.expr.pseudos,p.unique=bc.uniqueSort,p.text=bc.getText,p.isXMLDoc=bc.isXML,p.contains=bc.contains}(a);var bc=/Until$/,bd=/^(?:parents|prev(?:Until|All))/,be=/^.[^:#\[\.,]*$/,bf=p.expr.match.needsContext,bg={children:!0,contents:!0,next:!0,prev:!0};p.fn.extend({find:function(a){var b,c,d,e,f,g,h=this;if(typeof a!="string")return p(a).filter(function(){for(b=0,c=h.length;b<c;b++)if(p.contains(h[b],this))return!0});g=this.pushStack("","find",a);for(b=0,c=this.length;b<c;b++){d=g.length,p.find(a,this[b],g);if(b>0)for(e=d;e<g.length;e++)for(f=0;f<d;f++)if(g[f]===g[e]){g.splice(e--,1);break}}return g},has:function(a){var b,c=p(a,this),d=c.length;return this.filter(function(){for(b=0;b<d;b++)if(p.contains(this,c[b]))return!0})},not:function(a){return this.pushStack(bj(this,a,!1),"not",a)},filter:function(a){return this.pushStack(bj(this,a,!0),"filter",a)},is:function(a){return!!a&&(typeof a=="string"?bf.test(a)?p(a,this.context).index(this[0])>=0:p.filter(a,this).length>0:this.filter(a).length>0)},closest:function(a,b){var c,d=0,e=this.length,f=[],g=bf.test(a)||typeof a!="string"?p(a,b||this.context):0;for(;d<e;d++){c=this[d];while(c&&c.ownerDocument&&c!==b&&c.nodeType!==11){if(g?g.index(c)>-1:p.find.matchesSelector(c,a)){f.push(c);break}c=c.parentNode}}return f=f.length>1?p.unique(f):f,this.pushStack(f,"closest",a)},index:function(a){return a?typeof a=="string"?p.inArray(this[0],p(a)):p.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.prevAll().length:-1},add:function(a,b){var c=typeof a=="string"?p(a,b):p.makeArray(a&&a.nodeType?[a]:a),d=p.merge(this.get(),c);return this.pushStack(bh(c[0])||bh(d[0])?d:p.unique(d))},addBack:function(a){return this.add(a==null?this.prevObject:this.prevObject.filter(a))}}),p.fn.andSelf=p.fn.addBack,p.each({parent:function(a){var b=a.parentNode;return b&&b.nodeType!==11?b:null},parents:function(a){return p.dir(a,"parentNode")},parentsUntil:function(a,b,c){return p.dir(a,"parentNode",c)},next:function(a){return bi(a,"nextSibling")},prev:function(a){return bi(a,"previousSibling")},nextAll:function(a){return p.dir(a,"nextSibling")},prevAll:function(a){return p.dir(a,"previousSibling")},nextUntil:function(a,b,c){return p.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return p.dir(a,"previousSibling",c)},siblings:function(a){return p.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return p.sibling(a.firstChild)},contents:function(a){return p.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:p.merge([],a.childNodes)}},function(a,b){p.fn[a]=function(c,d){var e=p.map(this,b,c);return bc.test(a)||(d=c),d&&typeof d=="string"&&(e=p.filter(d,e)),e=this.length>1&&!bg[a]?p.unique(e):e,this.length>1&&bd.test(a)&&(e=e.reverse()),this.pushStack(e,a,k.call(arguments).join(","))}}),p.extend({filter:function(a,b,c){return c&&(a=":not("+a+")"),b.length===1?p.find.matchesSelector(b[0],a)?[b[0]]:[]:p.find.matches(a,b)},dir:function(a,c,d){var e=[],f=a[c];while(f&&f.nodeType!==9&&(d===b||f.nodeType!==1||!p(f).is(d)))f.nodeType===1&&e.push(f),f=f[c];return e},sibling:function(a,b){var c=[];for(;a;a=a.nextSibling)a.nodeType===1&&a!==b&&c.push(a);return c}});var bl="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",bm=/ jQuery\d+="(?:null|\d+)"/g,bn=/^\s+/,bo=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bp=/<([\w:]+)/,bq=/<tbody/i,br=/<|&#?\w+;/,bs=/<(?:script|style|link)/i,bt=/<(?:script|object|embed|option|style)/i,bu=new RegExp("<(?:"+bl+")[\\s/>]","i"),bv=/^(?:checkbox|radio)$/,bw=/checked\s*(?:[^=]|=\s*.checked.)/i,bx=/\/(java|ecma)script/i,by=/^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,bz={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},bA=bk(e),bB=bA.appendChild(e.createElement("div"));bz.optgroup=bz.option,bz.tbody=bz.tfoot=bz.colgroup=bz.caption=bz.thead,bz.th=bz.td,p.support.htmlSerialize||(bz._default=[1,"X<div>","</div>"]),p.fn.extend({text:function(a){return p.access(this,function(a){return a===b?p.text(this):this.empty().append((this[0]&&this[0].ownerDocument||e).createTextNode(a))},null,a,arguments.length)},wrapAll:function(a){if(p.isFunction(a))return this.each(function(b){p(this).wrapAll(a.call(this,b))});if(this[0]){var b=p(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&a.firstChild.nodeType===1)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return p.isFunction(a)?this.each(function(b){p(this).wrapInner(a.call(this,b))}):this.each(function(){var b=p(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=p.isFunction(a);return this.each(function(c){p(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){p.nodeName(this,"body")||p(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){(this.nodeType===1||this.nodeType===11)&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){(this.nodeType===1||this.nodeType===11)&&this.insertBefore(a,this.firstChild)})},before:function(){if(!bh(this[0]))return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=p.clean(arguments);return this.pushStack(p.merge(a,this),"before",this.selector)}},after:function(){if(!bh(this[0]))return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=p.clean(arguments);return this.pushStack(p.merge(this,a),"after",this.selector)}},remove:function(a,b){var c,d=0;for(;(c=this[d])!=null;d++)if(!a||p.filter(a,[c]).length)!b&&c.nodeType===1&&(p.cleanData(c.getElementsByTagName("*")),p.cleanData([c])),c.parentNode&&c.parentNode.removeChild(c);return this},empty:function(){var a,b=0;for(;(a=this[b])!=null;b++){a.nodeType===1&&p.cleanData(a.getElementsByTagName("*"));while(a.firstChild)a.removeChild(a.firstChild)}return this},clone:function(a,b){return a=a==null?!1:a,b=b==null?a:b,this.map(function(){return p.clone(this,a,b)})},html:function(a){return p.access(this,function(a){var c=this[0]||{},d=0,e=this.length;if(a===b)return c.nodeType===1?c.innerHTML.replace(bm,""):b;if(typeof a=="string"&&!bs.test(a)&&(p.support.htmlSerialize||!bu.test(a))&&(p.support.leadingWhitespace||!bn.test(a))&&!bz[(bp.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(bo,"<$1></$2>");try{for(;d<e;d++)c=this[d]||{},c.nodeType===1&&(p.cleanData(c.getElementsByTagName("*")),c.innerHTML=a);c=0}catch(f){}}c&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(a){return bh(this[0])?this.length?this.pushStack(p(p.isFunction(a)?a():a),"replaceWith",a):this:p.isFunction(a)?this.each(function(b){var c=p(this),d=c.html();c.replaceWith(a.call(this,b,d))}):(typeof a!="string"&&(a=p(a).detach()),this.each(function(){var b=this.nextSibling,c=this.parentNode;p(this).remove(),b?p(b).before(a):p(c).append(a)}))},detach:function(a){return this.remove(a,!0)},domManip:function(a,c,d){a=[].concat.apply([],a);var e,f,g,h,i=0,j=a[0],k=[],l=this.length;if(!p.support.checkClone&&l>1&&typeof j=="string"&&bw.test(j))return this.each(function(){p(this).domManip(a,c,d)});if(p.isFunction(j))return this.each(function(e){var f=p(this);a[0]=j.call(this,e,c?f.html():b),f.domManip(a,c,d)});if(this[0]){e=p.buildFragment(a,this,k),g=e.fragment,f=g.firstChild,g.childNodes.length===1&&(g=f);if(f){c=c&&p.nodeName(f,"tr");for(h=e.cacheable||l-1;i<l;i++)d.call(c&&p.nodeName(this[i],"table")?bC(this[i],"tbody"):this[i],i===h?g:p.clone(g,!0,!0))}g=f=null,k.length&&p.each(k,function(a,b){b.src?p.ajax?p.ajax({url:b.src,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0}):p.error("no ajax"):p.globalEval((b.text||b.textContent||b.innerHTML||"").replace(by,"")),b.parentNode&&b.parentNode.removeChild(b)})}return this}}),p.buildFragment=function(a,c,d){var f,g,h,i=a[0];return c=c||e,c=!c.nodeType&&c[0]||c,c=c.ownerDocument||c,a.length===1&&typeof i=="string"&&i.length<512&&c===e&&i.charAt(0)==="<"&&!bt.test(i)&&(p.support.checkClone||!bw.test(i))&&(p.support.html5Clone||!bu.test(i))&&(g=!0,f=p.fragments[i],h=f!==b),f||(f=c.createDocumentFragment(),p.clean(a,c,f,d),g&&(p.fragments[i]=h&&f)),{fragment:f,cacheable:g}},p.fragments={},p.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){p.fn[a]=function(c){var d,e=0,f=[],g=p(c),h=g.length,i=this.length===1&&this[0].parentNode;if((i==null||i&&i.nodeType===11&&i.childNodes.length===1)&&h===1)return g[b](this[0]),this;for(;e<h;e++)d=(e>0?this.clone(!0):this).get(),p(g[e])[b](d),f=f.concat(d);return this.pushStack(f,a,g.selector)}}),p.extend({clone:function(a,b,c){var d,e,f,g;p.support.html5Clone||p.isXMLDoc(a)||!bu.test("<"+a.nodeName+">")?g=a.cloneNode(!0):(bB.innerHTML=a.outerHTML,bB.removeChild(g=bB.firstChild));if((!p.support.noCloneEvent||!p.support.noCloneChecked)&&(a.nodeType===1||a.nodeType===11)&&!p.isXMLDoc(a)){bE(a,g),d=bF(a),e=bF(g);for(f=0;d[f];++f)e[f]&&bE(d[f],e[f])}if(b){bD(a,g);if(c){d=bF(a),e=bF(g);for(f=0;d[f];++f)bD(d[f],e[f])}}return d=e=null,g},clean:function(a,b,c,d){var f,g,h,i,j,k,l,m,n,o,q,r,s=b===e&&bA,t=[];if(!b||typeof b.createDocumentFragment=="undefined")b=e;for(f=0;(h=a[f])!=null;f++){typeof h=="number"&&(h+="");if(!h)continue;if(typeof h=="string")if(!br.test(h))h=b.createTextNode(h);else{s=s||bk(b),l=b.createElement("div"),s.appendChild(l),h=h.replace(bo,"<$1></$2>"),i=(bp.exec(h)||["",""])[1].toLowerCase(),j=bz[i]||bz._default,k=j[0],l.innerHTML=j[1]+h+j[2];while(k--)l=l.lastChild;if(!p.support.tbody){m=bq.test(h),n=i==="table"&&!m?l.firstChild&&l.firstChild.childNodes:j[1]==="<table>"&&!m?l.childNodes:[];for(g=n.length-1;g>=0;--g)p.nodeName(n[g],"tbody")&&!n[g].childNodes.length&&n[g].parentNode.removeChild(n[g])}!p.support.leadingWhitespace&&bn.test(h)&&l.insertBefore(b.createTextNode(bn.exec(h)[0]),l.firstChild),h=l.childNodes,l.parentNode.removeChild(l)}h.nodeType?t.push(h):p.merge(t,h)}l&&(h=l=s=null);if(!p.support.appendChecked)for(f=0;(h=t[f])!=null;f++)p.nodeName(h,"input")?bG(h):typeof h.getElementsByTagName!="undefined"&&p.grep(h.getElementsByTagName("input"),bG);if(c){q=function(a){if(!a.type||bx.test(a.type))return d?d.push(a.parentNode?a.parentNode.removeChild(a):a):c.appendChild(a)};for(f=0;(h=t[f])!=null;f++)if(!p.nodeName(h,"script")||!q(h))c.appendChild(h),typeof h.getElementsByTagName!="undefined"&&(r=p.grep(p.merge([],h.getElementsByTagName("script")),q),t.splice.apply(t,[f+1,0].concat(r)),f+=r.length)}return t},cleanData:function(a,b){var c,d,e,f,g=0,h=p.expando,i=p.cache,j=p.support.deleteExpando,k=p.event.special;for(;(e=a[g])!=null;g++)if(b||p.acceptData(e)){d=e[h],c=d&&i[d];if(c){if(c.events)for(f in c.events)k[f]?p.event.remove(e,f):p.removeEvent(e,f,c.handle);i[d]&&(delete i[d],j?delete e[h]:e.removeAttribute?e.removeAttribute(h):e[h]=null,p.deletedIds.push(d))}}}}),function(){var a,b;p.uaMatch=function(a){a=a.toLowerCase();var b=/(chrome)[ \/]([\w.]+)/.exec(a)||/(webkit)[ \/]([\w.]+)/.exec(a)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a)||/(msie) ([\w.]+)/.exec(a)||a.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},a=p.uaMatch(g.userAgent),b={},a.browser&&(b[a.browser]=!0,b.version=a.version),b.chrome?b.webkit=!0:b.webkit&&(b.safari=!0),p.browser=b,p.sub=function(){function a(b,c){return new a.fn.init(b,c)}p.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.sub=this.sub,a.fn.init=function c(c,d){return d&&d instanceof p&&!(d instanceof a)&&(d=a(d)),p.fn.init.call(this,c,d,b)},a.fn.init.prototype=a.fn;var b=a(e);return a}}();var bH,bI,bJ,bK=/alpha\([^)]*\)/i,bL=/opacity=([^)]*)/,bM=/^(top|right|bottom|left)$/,bN=/^(none|table(?!-c[ea]).+)/,bO=/^margin/,bP=new RegExp("^("+q+")(.*)$","i"),bQ=new RegExp("^("+q+")(?!px)[a-z%]+$","i"),bR=new RegExp("^([-+])=("+q+")","i"),bS={},bT={position:"absolute",visibility:"hidden",display:"block"},bU={letterSpacing:0,fontWeight:400},bV=["Top","Right","Bottom","Left"],bW=["Webkit","O","Moz","ms"],bX=p.fn.toggle;p.fn.extend({css:function(a,c){return p.access(this,function(a,c,d){return d!==b?p.style(a,c,d):p.css(a,c)},a,c,arguments.length>1)},show:function(){return b$(this,!0)},hide:function(){return b$(this)},toggle:function(a,b){var c=typeof a=="boolean";return p.isFunction(a)&&p.isFunction(b)?bX.apply(this,arguments):this.each(function(){(c?a:bZ(this))?p(this).show():p(this).hide()})}}),p.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=bH(a,"opacity");return c===""?"1":c}}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":p.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,c,d,e){if(!a||a.nodeType===3||a.nodeType===8||!a.style)return;var f,g,h,i=p.camelCase(c),j=a.style;c=p.cssProps[i]||(p.cssProps[i]=bY(j,i)),h=p.cssHooks[c]||p.cssHooks[i];if(d===b)return h&&"get"in h&&(f=h.get(a,!1,e))!==b?f:j[c];g=typeof d,g==="string"&&(f=bR.exec(d))&&(d=(f[1]+1)*f[2]+parseFloat(p.css(a,c)),g="number");if(d==null||g==="number"&&isNaN(d))return;g==="number"&&!p.cssNumber[i]&&(d+="px");if(!h||!("set"in h)||(d=h.set(a,d,e))!==b)try{j[c]=d}catch(k){}},css:function(a,c,d,e){var f,g,h,i=p.camelCase(c);return c=p.cssProps[i]||(p.cssProps[i]=bY(a.style,i)),h=p.cssHooks[c]||p.cssHooks[i],h&&"get"in h&&(f=h.get(a,!0,e)),f===b&&(f=bH(a,c)),f==="normal"&&c in bU&&(f=bU[c]),d||e!==b?(g=parseFloat(f),d||p.isNumeric(g)?g||0:f):f},swap:function(a,b,c){var d,e,f={};for(e in b)f[e]=a.style[e],a.style[e]=b[e];d=c.call(a);for(e in b)a.style[e]=f[e];return d}}),a.getComputedStyle?bH=function(b,c){var d,e,f,g,h=a.getComputedStyle(b,null),i=b.style;return h&&(d=h[c],d===""&&!p.contains(b.ownerDocument,b)&&(d=p.style(b,c)),bQ.test(d)&&bO.test(c)&&(e=i.width,f=i.minWidth,g=i.maxWidth,i.minWidth=i.maxWidth=i.width=d,d=h.width,i.width=e,i.minWidth=f,i.maxWidth=g)),d}:e.documentElement.currentStyle&&(bH=function(a,b){var c,d,e=a.currentStyle&&a.currentStyle[b],f=a.style;return e==null&&f&&f[b]&&(e=f[b]),bQ.test(e)&&!bM.test(b)&&(c=f.left,d=a.runtimeStyle&&a.runtimeStyle.left,d&&(a.runtimeStyle.left=a.currentStyle.left),f.left=b==="fontSize"?"1em":e,e=f.pixelLeft+"px",f.left=c,d&&(a.runtimeStyle.left=d)),e===""?"auto":e}),p.each(["height","width"],function(a,b){p.cssHooks[b]={get:function(a,c,d){if(c)return a.offsetWidth===0&&bN.test(bH(a,"display"))?p.swap(a,bT,function(){return cb(a,b,d)}):cb(a,b,d)},set:function(a,c,d){return b_(a,c,d?ca(a,b,d,p.support.boxSizing&&p.css(a,"boxSizing")==="border-box"):0)}}}),p.support.opacity||(p.cssHooks.opacity={get:function(a,b){return bL.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=p.isNumeric(b)?"alpha(opacity="+b*100+")":"",f=d&&d.filter||c.filter||"";c.zoom=1;if(b>=1&&p.trim(f.replace(bK,""))===""&&c.removeAttribute){c.removeAttribute("filter");if(d&&!d.filter)return}c.filter=bK.test(f)?f.replace(bK,e):f+" "+e}}),p(function(){p.support.reliableMarginRight||(p.cssHooks.marginRight={get:function(a,b){return p.swap(a,{display:"inline-block"},function(){if(b)return bH(a,"marginRight")})}}),!p.support.pixelPosition&&p.fn.position&&p.each(["top","left"],function(a,b){p.cssHooks[b]={get:function(a,c){if(c){var d=bH(a,b);return bQ.test(d)?p(a).position()[b]+"px":d}}}})}),p.expr&&p.expr.filters&&(p.expr.filters.hidden=function(a){return a.offsetWidth===0&&a.offsetHeight===0||!p.support.reliableHiddenOffsets&&(a.style&&a.style.display||bH(a,"display"))==="none"},p.expr.filters.visible=function(a){return!p.expr.filters.hidden(a)}),p.each({margin:"",padding:"",border:"Width"},function(a,b){p.cssHooks[a+b]={expand:function(c){var d,e=typeof c=="string"?c.split(" "):[c],f={};for(d=0;d<4;d++)f[a+bV[d]+b]=e[d]||e[d-2]||e[0];return f}},bO.test(a)||(p.cssHooks[a+b].set=b_)});var cd=/%20/g,ce=/\[\]$/,cf=/\r?\n/g,cg=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,ch=/^(?:select|textarea)/i;p.fn.extend({serialize:function(){return p.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?p.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||ch.test(this.nodeName)||cg.test(this.type))}).map(function(a,b){var c=p(this).val();return c==null?null:p.isArray(c)?p.map(c,function(a,c){return{name:b.name,value:a.replace(cf,"\r\n")}}):{name:b.name,value:c.replace(cf,"\r\n")}}).get()}}),p.param=function(a,c){var d,e=[],f=function(a,b){b=p.isFunction(b)?b():b==null?"":b,e[e.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};c===b&&(c=p.ajaxSettings&&p.ajaxSettings.traditional);if(p.isArray(a)||a.jquery&&!p.isPlainObject(a))p.each(a,function(){f(this.name,this.value)});else for(d in a)ci(d,a[d],c,f);return e.join("&").replace(cd,"+")};var cj,ck,cl=/#.*$/,cm=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,cn=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,co=/^(?:GET|HEAD)$/,cp=/^\/\//,cq=/\?/,cr=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,cs=/([?&])_=[^&]*/,ct=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,cu=p.fn.load,cv={},cw={},cx=["*/"]+["*"];try{ck=f.href}catch(cy){ck=e.createElement("a"),ck.href="",ck=ck.href}cj=ct.exec(ck.toLowerCase())||[],p.fn.load=function(a,c,d){if(typeof a!="string"&&cu)return cu.apply(this,arguments);if(!this.length)return this;var e,f,g,h=this,i=a.indexOf(" ");return i>=0&&(e=a.slice(i,a.length),a=a.slice(0,i)),p.isFunction(c)?(d=c,c=b):c&&typeof c=="object"&&(f="POST"),p.ajax({url:a,type:f,dataType:"html",data:c,complete:function(a,b){d&&h.each(d,g||[a.responseText,b,a])}}).done(function(a){g=arguments,h.html(e?p("<div>").append(a.replace(cr,"")).find(e):a)}),this},p.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){p.fn[b]=function(a){return this.on(b,a)}}),p.each(["get","post"],function(a,c){p[c]=function(a,d,e,f){return p.isFunction(d)&&(f=f||e,e=d,d=b),p.ajax({type:c,url:a,data:d,success:e,dataType:f})}}),p.extend({getScript:function(a,c){return p.get(a,b,c,"script")},getJSON:function(a,b,c){return p.get(a,b,c,"json")},ajaxSetup:function(a,b){return b?cB(a,p.ajaxSettings):(b=a,a=p.ajaxSettings),cB(a,b),a},ajaxSettings:{url:ck,isLocal:cn.test(cj[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":cx},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a.String,"text html":!0,"text json":p.parseJSON,"text xml":p.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:cz(cv),ajaxTransport:cz(cw),ajax:function(a,c){function y(a,c,f,i){var k,s,t,u,w,y=c;if(v===2)return;v=2,h&&clearTimeout(h),g=b,e=i||"",x.readyState=a>0?4:0,f&&(u=cC(l,x,f));if(a>=200&&a<300||a===304)l.ifModified&&(w=x.getResponseHeader("Last-Modified"),w&&(p.lastModified[d]=w),w=x.getResponseHeader("Etag"),w&&(p.etag[d]=w)),a===304?(y="notmodified",k=!0):(k=cD(l,u),y=k.state,s=k.data,t=k.error,k=!t);else{t=y;if(!y||a)y="error",a<0&&(a=0)}x.status=a,x.statusText=(c||y)+"",k?o.resolveWith(m,[s,y,x]):o.rejectWith(m,[x,y,t]),x.statusCode(r),r=b,j&&n.trigger("ajax"+(k?"Success":"Error"),[x,l,k?s:t]),q.fireWith(m,[x,y]),j&&(n.trigger("ajaxComplete",[x,l]),--p.active||p.event.trigger("ajaxStop"))}typeof a=="object"&&(c=a,a=b),c=c||{};var d,e,f,g,h,i,j,k,l=p.ajaxSetup({},c),m=l.context||l,n=m!==l&&(m.nodeType||m instanceof p)?p(m):p.event,o=p.Deferred(),q=p.Callbacks("once memory"),r=l.statusCode||{},t={},u={},v=0,w="canceled",x={readyState:0,setRequestHeader:function(a,b){if(!v){var c=a.toLowerCase();a=u[c]=u[c]||a,t[a]=b}return this},getAllResponseHeaders:function(){return v===2?e:null},getResponseHeader:function(a){var c;if(v===2){if(!f){f={};while(c=cm.exec(e))f[c[1].toLowerCase()]=c[2]}c=f[a.toLowerCase()]}return c===b?null:c},overrideMimeType:function(a){return v||(l.mimeType=a),this},abort:function(a){return a=a||w,g&&g.abort(a),y(0,a),this}};o.promise(x),x.success=x.done,x.error=x.fail,x.complete=q.add,x.statusCode=function(a){if(a){var b;if(v<2)for(b in a)r[b]=[r[b],a[b]];else b=a[x.status],x.always(b)}return this},l.url=((a||l.url)+"").replace(cl,"").replace(cp,cj[1]+"//"),l.dataTypes=p.trim(l.dataType||"*").toLowerCase().split(s),l.crossDomain==null&&(i=ct.exec(l.url.toLowerCase())||!1,l.crossDomain=i&&i.join(":")+(i[3]?"":i[1]==="http:"?80:443)!==cj.join(":")+(cj[3]?"":cj[1]==="http:"?80:443)),l.data&&l.processData&&typeof l.data!="string"&&(l.data=p.param(l.data,l.traditional)),cA(cv,l,c,x);if(v===2)return x;j=l.global,l.type=l.type.toUpperCase(),l.hasContent=!co.test(l.type),j&&p.active++===0&&p.event.trigger("ajaxStart");if(!l.hasContent){l.data&&(l.url+=(cq.test(l.url)?"&":"?")+l.data,delete l.data),d=l.url;if(l.cache===!1){var z=p.now(),A=l.url.replace(cs,"$1_="+z);l.url=A+(A===l.url?(cq.test(l.url)?"&":"?")+"_="+z:"")}}(l.data&&l.hasContent&&l.contentType!==!1||c.contentType)&&x.setRequestHeader("Content-Type",l.contentType),l.ifModified&&(d=d||l.url,p.lastModified[d]&&x.setRequestHeader("If-Modified-Since",p.lastModified[d]),p.etag[d]&&x.setRequestHeader("If-None-Match",p.etag[d])),x.setRequestHeader("Accept",l.dataTypes[0]&&l.accepts[l.dataTypes[0]]?l.accepts[l.dataTypes[0]]+(l.dataTypes[0]!=="*"?", "+cx+"; q=0.01":""):l.accepts["*"]);for(k in l.headers)x.setRequestHeader(k,l.headers[k]);if(!l.beforeSend||l.beforeSend.call(m,x,l)!==!1&&v!==2){w="abort";for(k in{success:1,error:1,complete:1})x[k](l[k]);g=cA(cw,l,c,x);if(!g)y(-1,"No Transport");else{x.readyState=1,j&&n.trigger("ajaxSend",[x,l]),l.async&&l.timeout>0&&(h=setTimeout(function(){x.abort("timeout")},l.timeout));try{v=1,g.send(t,y)}catch(B){if(v<2)y(-1,B);else throw B}}return x}return x.abort()},active:0,lastModified:{},etag:{}});var cE=[],cF=/\?/,cG=/(=)\?(?=&|$)|\?\?/,cH=p.now();p.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=cE.pop()||p.expando+"_"+cH++;return this[a]=!0,a}}),p.ajaxPrefilter("json jsonp",function(c,d,e){var f,g,h,i=c.data,j=c.url,k=c.jsonp!==!1,l=k&&cG.test(j),m=k&&!l&&typeof i=="string"&&!(c.contentType||"").indexOf("application/x-www-form-urlencoded")&&cG.test(i);if(c.dataTypes[0]==="jsonp"||l||m)return f=c.jsonpCallback=p.isFunction(c.jsonpCallback)?c.jsonpCallback():c.jsonpCallback,g=a[f],l?c.url=j.replace(cG,"$1"+f):m?c.data=i.replace(cG,"$1"+f):k&&(c.url+=(cF.test(j)?"&":"?")+c.jsonp+"="+f),c.converters["script json"]=function(){return h||p.error(f+" was not called"),h[0]},c.dataTypes[0]="json",a[f]=function(){h=arguments},e.always(function(){a[f]=g,c[f]&&(c.jsonpCallback=d.jsonpCallback,cE.push(f)),h&&p.isFunction(g)&&g(h[0]),h=g=b}),"script"}),p.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(a){return p.globalEval(a),a}}}),p.ajaxPrefilter("script",function(a){a.cache===b&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),p.ajaxTransport("script",function(a){if(a.crossDomain){var c,d=e.head||e.getElementsByTagName("head")[0]||e.documentElement;return{send:function(f,g){c=e.createElement("script"),c.async="async",a.scriptCharset&&(c.charset=a.scriptCharset),c.src=a.url,c.onload=c.onreadystatechange=function(a,e){if(e||!c.readyState||/loaded|complete/.test(c.readyState))c.onload=c.onreadystatechange=null,d&&c.parentNode&&d.removeChild(c),c=b,e||g(200,"success")},d.insertBefore(c,d.firstChild)},abort:function(){c&&c.onload(0,1)}}}});var cI,cJ=a.ActiveXObject?function(){for(var a in cI)cI[a](0,1)}:!1,cK=0;p.ajaxSettings.xhr=a.ActiveXObject?function(){return!this.isLocal&&cL()||cM()}:cL,function(a){p.extend(p.support,{ajax:!!a,cors:!!a&&"withCredentials"in a})}(p.ajaxSettings.xhr()),p.support.ajax&&p.ajaxTransport(function(c){if(!c.crossDomain||p.support.cors){var d;return{send:function(e,f){var g,h,i=c.xhr();c.username?i.open(c.type,c.url,c.async,c.username,c.password):i.open(c.type,c.url,c.async);if(c.xhrFields)for(h in c.xhrFields)i[h]=c.xhrFields[h];c.mimeType&&i.overrideMimeType&&i.overrideMimeType(c.mimeType),!c.crossDomain&&!e["X-Requested-With"]&&(e["X-Requested-With"]="XMLHttpRequest");try{for(h in e)i.setRequestHeader(h,e[h])}catch(j){}i.send(c.hasContent&&c.data||null),d=function(a,e){var h,j,k,l,m;try{if(d&&(e||i.readyState===4)){d=b,g&&(i.onreadystatechange=p.noop,cJ&&delete cI[g]);if(e)i.readyState!==4&&i.abort();else{h=i.status,k=i.getAllResponseHeaders(),l={},m=i.responseXML,m&&m.documentElement&&(l.xml=m);try{l.text=i.responseText}catch(a){}try{j=i.statusText}catch(n){j=""}!h&&c.isLocal&&!c.crossDomain?h=l.text?200:404:h===1223&&(h=204)}}}catch(o){e||f(-1,o)}l&&f(h,j,l,k)},c.async?i.readyState===4?setTimeout(d,0):(g=++cK,cJ&&(cI||(cI={},p(a).unload(cJ)),cI[g]=d),i.onreadystatechange=d):d()},abort:function(){d&&d(0,1)}}}});var cN,cO,cP=/^(?:toggle|show|hide)$/,cQ=new RegExp("^(?:([-+])=|)("+q+")([a-z%]*)$","i"),cR=/queueHooks$/,cS=[cY],cT={"*":[function(a,b){var c,d,e=this.createTween(a,b),f=cQ.exec(b),g=e.cur(),h=+g||0,i=1,j=20;if(f){c=+f[2],d=f[3]||(p.cssNumber[a]?"":"px");if(d!=="px"&&h){h=p.css(e.elem,a,!0)||c||1;do i=i||".5",h=h/i,p.style(e.elem,a,h+d);while(i!==(i=e.cur()/g)&&i!==1&&--j)}e.unit=d,e.start=h,e.end=f[1]?h+(f[1]+1)*c:c}return e}]};p.Animation=p.extend(cW,{tweener:function(a,b){p.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");var c,d=0,e=a.length;for(;d<e;d++)c=a[d],cT[c]=cT[c]||[],cT[c].unshift(b)},prefilter:function(a,b){b?cS.unshift(a):cS.push(a)}}),p.Tween=cZ,cZ.prototype={constructor:cZ,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(p.cssNumber[c]?"":"px")},cur:function(){var a=cZ.propHooks[this.prop];return a&&a.get?a.get(this):cZ.propHooks._default.get(this)},run:function(a){var b,c=cZ.propHooks[this.prop];return this.options.duration?this.pos=b=p.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):cZ.propHooks._default.set(this),this}},cZ.prototype.init.prototype=cZ.prototype,cZ.propHooks={_default:{get:function(a){var b;return a.elem[a.prop]==null||!!a.elem.style&&a.elem.style[a.prop]!=null?(b=p.css(a.elem,a.prop,!1,""),!b||b==="auto"?0:b):a.elem[a.prop]},set:function(a){p.fx.step[a.prop]?p.fx.step[a.prop](a):a.elem.style&&(a.elem.style[p.cssProps[a.prop]]!=null||p.cssHooks[a.prop])?p.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},cZ.propHooks.scrollTop=cZ.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},p.each(["toggle","show","hide"],function(a,b){var c=p.fn[b];p.fn[b]=function(d,e,f){return d==null||typeof d=="boolean"||!a&&p.isFunction(d)&&p.isFunction(e)?c.apply(this,arguments):this.animate(c$(b,!0),d,e,f)}}),p.fn.extend({fadeTo:function(a,b,c,d){return this.filter(bZ).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=p.isEmptyObject(a),f=p.speed(b,c,d),g=function(){var b=cW(this,p.extend({},a),f);e&&b.stop(!0)};return e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,c,d){var e=function(a){var b=a.stop;delete a.stop,b(d)};return typeof a!="string"&&(d=c,c=a,a=b),c&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,c=a!=null&&a+"queueHooks",f=p.timers,g=p._data(this);if(c)g[c]&&g[c].stop&&e(g[c]);else for(c in g)g[c]&&g[c].stop&&cR.test(c)&&e(g[c]);for(c=f.length;c--;)f[c].elem===this&&(a==null||f[c].queue===a)&&(f[c].anim.stop(d),b=!1,f.splice(c,1));(b||!d)&&p.dequeue(this,a)})}}),p.each({slideDown:c$("show"),slideUp:c$("hide"),slideToggle:c$("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){p.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),p.speed=function(a,b,c){var d=a&&typeof a=="object"?p.extend({},a):{complete:c||!c&&b||p.isFunction(a)&&a,duration:a,easing:c&&b||b&&!p.isFunction(b)&&b};d.duration=p.fx.off?0:typeof d.duration=="number"?d.duration:d.duration in p.fx.speeds?p.fx.speeds[d.duration]:p.fx.speeds._default;if(d.queue==null||d.queue===!0)d.queue="fx";return d.old=d.complete,d.complete=function(){p.isFunction(d.old)&&d.old.call(this),d.queue&&p.dequeue(this,d.queue)},d},p.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},p.timers=[],p.fx=cZ.prototype.init,p.fx.tick=function(){var a,b=p.timers,c=0;for(;c<b.length;c++)a=b[c],!a()&&b[c]===a&&b.splice(c--,1);b.length||p.fx.stop()},p.fx.timer=function(a){a()&&p.timers.push(a)&&!cO&&(cO=setInterval(p.fx.tick,p.fx.interval))},p.fx.interval=13,p.fx.stop=function(){clearInterval(cO),cO=null},p.fx.speeds={slow:600,fast:200,_default:400},p.fx.step={},p.expr&&p.expr.filters&&(p.expr.filters.animated=function(a){return p.grep(p.timers,function(b){return a===b.elem}).length});var c_=/^(?:body|html)$/i;p.fn.offset=function(a){if(arguments.length)return a===b?this:this.each(function(b){p.offset.setOffset(this,a,b)});var c,d,e,f,g,h,i,j={top:0,left:0},k=this[0],l=k&&k.ownerDocument;if(!l)return;return(d=l.body)===k?p.offset.bodyOffset(k):(c=l.documentElement,p.contains(c,k)?(typeof k.getBoundingClientRect!="undefined"&&(j=k.getBoundingClientRect()),e=da(l),f=c.clientTop||d.clientTop||0,g=c.clientLeft||d.clientLeft||0,h=e.pageYOffset||c.scrollTop,i=e.pageXOffset||c.scrollLeft,{top:j.top+h-f,left:j.left+i-g}):j)},p.offset={bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;return p.support.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(p.css(a,"marginTop"))||0,c+=parseFloat(p.css(a,"marginLeft"))||0),{top:b,left:c}},setOffset:function(a,b,c){var d=p.css(a,"position");d==="static"&&(a.style.position="relative");var e=p(a),f=e.offset(),g=p.css(a,"top"),h=p.css(a,"left"),i=(d==="absolute"||d==="fixed")&&p.inArray("auto",[g,h])>-1,j={},k={},l,m;i?(k=e.position(),l=k.top,m=k.left):(l=parseFloat(g)||0,m=parseFloat(h)||0),p.isFunction(b)&&(b=b.call(a,c,f)),b.top!=null&&(j.top=b.top-f.top+l),b.left!=null&&(j.left=b.left-f.left+m),"using"in b?b.using.call(a,j):e.css(j)}},p.fn.extend({position:function(){if(!this[0])return;var a=this[0],b=this.offsetParent(),c=this.offset(),d=c_.test(b[0].nodeName)?{top:0,left:0}:b.offset();return c.top-=parseFloat(p.css(a,"marginTop"))||0,c.left-=parseFloat(p.css(a,"marginLeft"))||0,d.top+=parseFloat(p.css(b[0],"borderTopWidth"))||0,d.left+=parseFloat(p.css(b[0],"borderLeftWidth"))||0,{top:c.top-d.top,left:c.left-d.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||e.body;while(a&&!c_.test(a.nodeName)&&p.css(a,"position")==="static")a=a.offsetParent;return a||e.body})}}),p.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,c){var d=/Y/.test(c);p.fn[a]=function(e){return p.access(this,function(a,e,f){var g=da(a);if(f===b)return g?c in g?g[c]:g.document.documentElement[e]:a[e];g?g.scrollTo(d?p(g).scrollLeft():f,d?f:p(g).scrollTop()):a[e]=f},a,e,arguments.length,null)}}),p.each({Height:"height",Width:"width"},function(a,c){p.each({padding:"inner"+a,content:c,"":"outer"+a},function(d,e){p.fn[e]=function(e,f){var g=arguments.length&&(d||typeof e!="boolean"),h=d||(e===!0||f===!0?"margin":"border");return p.access(this,function(c,d,e){var f;return p.isWindow(c)?c.document.documentElement["client"+a]:c.nodeType===9?(f=c.documentElement,Math.max(c.body["scroll"+a],f["scroll"+a],c.body["offset"+a],f["offset"+a],f["client"+a])):e===b?p.css(c,d,e,h):p.style(c,d,e,h)},c,g?e:b,g,null)}})}),a.jQuery=a.$=p,typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return p})})(window);;
typeof JSON!="object"&&(JSON={}),function(){"use strict";function f(e){return e<10?"0"+e:e}function quote(e){return escapable.lastIndex=0,escapable.test(e)?'"'+e.replace(escapable,function(e){var t=meta[e];return typeof t=="string"?t:"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+e+'"'}function str(e,t){var n,r,i,s,o=gap,u,a=t[e];a&&typeof a=="object"&&typeof a.toJSON=="function"&&(a=a.toJSON(e)),typeof rep=="function"&&(a=rep.call(t,e,a));switch(typeof a){case"string":return quote(a);case"number":return isFinite(a)?String(a):"null";case"boolean":case"null":return String(a);case"object":if(!a)return"null";gap+=indent,u=[];if(Object.prototype.toString.apply(a)==="[object Array]"){s=a.length;for(n=0;n<s;n+=1)u[n]=str(n,a)||"null";return i=u.length===0?"[]":gap?"[\n"+gap+u.join(",\n"+gap)+"\n"+o+"]":"["+u.join(",")+"]",gap=o,i}if(rep&&typeof rep=="object"){s=rep.length;for(n=0;n<s;n+=1)typeof rep[n]=="string"&&(r=rep[n],i=str(r,a),i&&u.push(quote(r)+(gap?": ":":")+i))}else for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(i=str(r,a),i&&u.push(quote(r)+(gap?": ":":")+i));return i=u.length===0?"{}":gap?"{\n"+gap+u.join(",\n"+gap)+"\n"+o+"}":"{"+u.join(",")+"}",gap=o,i}}typeof Date.prototype.toJSON!="function"&&(Date.prototype.toJSON=function(e){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(e){return this.valueOf()});var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={"\b":"\\b","	":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep;typeof JSON.stringify!="function"&&(JSON.stringify=function(e,t,n){var r;gap="",indent="";if(typeof n=="number")for(r=0;r<n;r+=1)indent+=" ";else typeof n=="string"&&(indent=n);rep=t;if(!t||typeof t=="function"||typeof t=="object"&&typeof t.length=="number")return str("",{"":e});throw new Error("JSON.stringify")}),typeof JSON.parse!="function"&&(JSON.parse=function(text,reviver){function walk(e,t){var n,r,i=e[t];if(i&&typeof i=="object")for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(r=walk(i,n),r!==undefined?i[n]=r:delete i[n]);return reviver.call(e,t,i)}var j;text=String(text),cx.lastIndex=0,cx.test(text)&&(text=text.replace(cx,function(e){return"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)}));if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return j=eval("("+text+")"),typeof reviver=="function"?walk({"":j},""):j;throw new SyntaxError("JSON.parse")})}(),function(e,t){"use strict";var n=e.History=e.History||{},r=e.jQuery;if(typeof n.Adapter!="undefined")throw new Error("History.js Adapter has already been loaded...");n.Adapter={bind:function(e,t,n){r(e).bind(t,n)},trigger:function(e,t,n){r(e).trigger(t,n)},extractEventData:function(e,n,r){var i=n&&n.originalEvent&&n.originalEvent[e]||r&&r[e]||t;return i},onDomLoad:function(e){r(e)}},typeof n.init!="undefined"&&n.init()}(window),function(e,t){"use strict";var n=e.document,r=e.setTimeout||r,i=e.clearTimeout||i,s=e.setInterval||s,o=e.History=e.History||{};if(typeof o.initHtml4!="undefined")throw new Error("History.js HTML4 Support has already been loaded...");o.initHtml4=function(){if(typeof o.initHtml4.initialized!="undefined")return!1;o.initHtml4.initialized=!0,o.enabled=!0,o.savedHashes=[],o.isLastHash=function(e){var t=o.getHashByIndex(),n;return n=e===t,n},o.isHashEqual=function(e,t){return e=encodeURIComponent(e).replace(/%25/g,"%"),t=encodeURIComponent(t).replace(/%25/g,"%"),e===t},o.saveHash=function(e){return o.isLastHash(e)?!1:(o.savedHashes.push(e),!0)},o.getHashByIndex=function(e){var t=null;return typeof e=="undefined"?t=o.savedHashes[o.savedHashes.length-1]:e<0?t=o.savedHashes[o.savedHashes.length+e]:t=o.savedHashes[e],t},o.discardedHashes={},o.discardedStates={},o.discardState=function(e,t,n){var r=o.getHashByState(e),i;return i={discardedState:e,backState:n,forwardState:t},o.discardedStates[r]=i,!0},o.discardHash=function(e,t,n){var r={discardedHash:e,backState:n,forwardState:t};return o.discardedHashes[e]=r,!0},o.discardedState=function(e){var t=o.getHashByState(e),n;return n=o.discardedStates[t]||!1,n},o.discardedHash=function(e){var t=o.discardedHashes[e]||!1;return t},o.recycleState=function(e){var t=o.getHashByState(e);return o.discardedState(e)&&delete o.discardedStates[t],!0},o.emulated.hashChange&&(o.hashChangeInit=function(){o.checkerFunction=null;var t="",r,i,u,a,f=Boolean(o.getHash());return o.isInternetExplorer()?(r="historyjs-iframe",i=n.createElement("iframe"),i.setAttribute("id",r),i.setAttribute("src","#"),i.style.display="none",n.body.appendChild(i),i.contentWindow.document.open(),i.contentWindow.document.close(),u="",a=!1,o.checkerFunction=function(){if(a)return!1;a=!0;var n=o.getHash(),r=o.getHash(i.contentWindow.document.location);return n!==t?(t=n,r!==n&&(u=r=n,i.contentWindow.document.open(),i.contentWindow.document.close(),i.contentWindow.document.location.hash=o.escapeHash(n)),o.Adapter.trigger(e,"hashchange")):r!==u&&(u=r,f&&r===""?o.back():o.setHash(r,!1)),a=!1,!0}):o.checkerFunction=function(){var n=o.getHash()||"";return n!==t&&(t=n,o.Adapter.trigger(e,"hashchange")),!0},o.intervalList.push(s(o.checkerFunction,o.options.hashChangeInterval)),!0},o.Adapter.onDomLoad(o.hashChangeInit)),o.emulated.pushState&&(o.onHashChange=function(t){var n=t&&t.newURL||o.getLocationHref(),r=o.getHashByUrl(n),i=null,s=null,u=null,a;return o.isLastHash(r)?(o.busy(!1),!1):(o.doubleCheckComplete(),o.saveHash(r),r&&o.isTraditionalAnchor(r)?(o.Adapter.trigger(e,"anchorchange"),o.busy(!1),!1):(i=o.extractState(o.getFullUrl(r||o.getLocationHref()),!0),o.isLastSavedState(i)?(o.busy(!1),!1):(s=o.getHashByState(i),a=o.discardedState(i),a?(o.getHashByIndex(-2)===o.getHashByState(a.forwardState)?o.back(!1):o.forward(!1),!1):(o.pushState(i.data,i.title,encodeURI(i.url),!1),!0))))},o.Adapter.bind(e,"hashchange",o.onHashChange),o.pushState=function(t,n,r,i){r=encodeURI(r).replace(/%25/g,"%");if(o.getHashByUrl(r))throw new Error("History.js does not support states with fragment-identifiers (hashes/anchors).");if(i!==!1&&o.busy())return o.pushQueue({scope:o,callback:o.pushState,args:arguments,queue:i}),!1;o.busy(!0);var s=o.createStateObject(t,n,r),u=o.getHashByState(s),a=o.getState(!1),f=o.getHashByState(a),l=o.getHash(),c=o.expectedStateId==s.id;return o.storeState(s),o.expectedStateId=s.id,o.recycleState(s),o.setTitle(s),u===f?(o.busy(!1),!1):(o.saveState(s),c||o.Adapter.trigger(e,"statechange"),!o.isHashEqual(u,l)&&!o.isHashEqual(u,o.getShortUrl(o.getLocationHref()))&&o.setHash(u,!1),o.busy(!1),!0)},o.replaceState=function(t,n,r,i){r=encodeURI(r).replace(/%25/g,"%");if(o.getHashByUrl(r))throw new Error("History.js does not support states with fragment-identifiers (hashes/anchors).");if(i!==!1&&o.busy())return o.pushQueue({scope:o,callback:o.replaceState,args:arguments,queue:i}),!1;o.busy(!0);var s=o.createStateObject(t,n,r),u=o.getHashByState(s),a=o.getState(!1),f=o.getHashByState(a),l=o.getStateByIndex(-2);return o.discardState(a,s,l),u===f?(o.storeState(s),o.expectedStateId=s.id,o.recycleState(s),o.setTitle(s),o.saveState(s),o.Adapter.trigger(e,"statechange"),o.busy(!1)):o.pushState(s.data,s.title,s.url,!1),!0}),o.emulated.pushState&&o.getHash()&&!o.emulated.hashChange&&o.Adapter.onDomLoad(function(){o.Adapter.trigger(e,"hashchange")})},typeof o.init!="undefined"&&o.init()}(window),function(e,t){"use strict";var n=e.console||t,r=e.document,i=e.navigator,s=e.sessionStorage||!1,o=e.setTimeout,u=e.clearTimeout,a=e.setInterval,f=e.clearInterval,l=e.JSON,c=e.alert,h=e.History=e.History||{},p=e.history;try{s.setItem("TEST","1"),s.removeItem("TEST")}catch(d){s=!1}l.stringify=l.stringify||l.encode,l.parse=l.parse||l.decode;if(typeof h.init!="undefined")throw new Error("History.js Core has already been loaded...");h.init=function(e){return typeof h.Adapter=="undefined"?!1:(typeof h.initCore!="undefined"&&h.initCore(),typeof h.initHtml4!="undefined"&&h.initHtml4(),!0)},h.initCore=function(d){if(typeof h.initCore.initialized!="undefined")return!1;h.initCore.initialized=!0,h.options=h.options||{},h.options.hashChangeInterval=h.options.hashChangeInterval||100,h.options.safariPollInterval=h.options.safariPollInterval||500,h.options.doubleCheckInterval=h.options.doubleCheckInterval||500,h.options.disableSuid=h.options.disableSuid||!1,h.options.storeInterval=h.options.storeInterval||1e3,h.options.busyDelay=h.options.busyDelay||250,h.options.debug=h.options.debug||!1,h.options.initialTitle=h.options.initialTitle||r.title,h.options.html4Mode=h.options.html4Mode||!1,h.options.delayInit=h.options.delayInit||!1,h.intervalList=[],h.clearAllIntervals=function(){var e,t=h.intervalList;if(typeof t!="undefined"&&t!==null){for(e=0;e<t.length;e++)f(t[e]);h.intervalList=null}},h.debug=function(){(h.options.debug||!1)&&h.log.apply(h,arguments)},h.log=function(){var e=typeof n!="undefined"&&typeof n.log!="undefined"&&typeof n.log.apply!="undefined",t=r.getElementById("log"),i,s,o,u,a;e?(u=Array.prototype.slice.call(arguments),i=u.shift(),typeof n.debug!="undefined"?n.debug.apply(n,[i,u]):n.log.apply(n,[i,u])):i="\n"+arguments[0]+"\n";for(s=1,o=arguments.length;s<o;++s){a=arguments[s];if(typeof a=="object"&&typeof l!="undefined")try{a=l.stringify(a)}catch(f){}i+="\n"+a+"\n"}return t?(t.value+=i+"\n-----\n",t.scrollTop=t.scrollHeight-t.clientHeight):e||c(i),!0},h.getInternetExplorerMajorVersion=function(){var e=h.getInternetExplorerMajorVersion.cached=typeof h.getInternetExplorerMajorVersion.cached!="undefined"?h.getInternetExplorerMajorVersion.cached:function(){var e=3,t=r.createElement("div"),n=t.getElementsByTagName("i");while((t.innerHTML="<!--[if gt IE "+ ++e+"]><i></i><![endif]-->")&&n[0]);return e>4?e:!1}();return e},h.isInternetExplorer=function(){var e=h.isInternetExplorer.cached=typeof h.isInternetExplorer.cached!="undefined"?h.isInternetExplorer.cached:Boolean(h.getInternetExplorerMajorVersion());return e},h.options.html4Mode?h.emulated={pushState:!0,hashChange:!0}:h.emulated={pushState:!Boolean(e.history&&e.history.pushState&&e.history.replaceState&&!/ Mobile\/([1-7][a-z]|(8([abcde]|f(1[0-8]))))/i.test(i.userAgent)&&!/AppleWebKit\/5([0-2]|3[0-2])/i.test(i.userAgent)),hashChange:Boolean(!("onhashchange"in e||"onhashchange"in r)||h.isInternetExplorer()&&h.getInternetExplorerMajorVersion()<8)},h.enabled=!h.emulated.pushState,h.bugs={setHash:Boolean(!h.emulated.pushState&&i.vendor==="Apple Computer, Inc."&&/AppleWebKit\/5([0-2]|3[0-3])/.test(i.userAgent)),safariPoll:Boolean(!h.emulated.pushState&&i.vendor==="Apple Computer, Inc."&&/AppleWebKit\/5([0-2]|3[0-3])/.test(i.userAgent)),ieDoubleCheck:Boolean(h.isInternetExplorer()&&h.getInternetExplorerMajorVersion()<8),hashEscape:Boolean(h.isInternetExplorer()&&h.getInternetExplorerMajorVersion()<7)},h.isEmptyObject=function(e){for(var t in e)if(e.hasOwnProperty(t))return!1;return!0},h.cloneObject=function(e){var t,n;return e?(t=l.stringify(e),n=l.parse(t)):n={},n},h.getRootUrl=function(){var e=r.location.protocol+"//"+(r.location.hostname||r.location.host);if(r.location.port||!1)e+=":"+r.location.port;return e+="/",e},h.getBaseHref=function(){var e=r.getElementsByTagName("base"),t=null,n="";return e.length===1&&(t=e[0],n=t.href.replace(/[^\/]+$/,"")),n=n.replace(/\/+$/,""),n&&(n+="/"),n},h.getBaseUrl=function(){var e=h.getBaseHref()||h.getBasePageUrl()||h.getRootUrl();return e},h.getPageUrl=function(){var e=h.getState(!1,!1),t=(e||{}).url||h.getLocationHref(),n;return n=t.replace(/\/+$/,"").replace(/[^\/]+$/,function(e,t,n){return/\./.test(e)?e:e+"/"}),n},h.getBasePageUrl=function(){var e=h.getLocationHref().replace(/[#\?].*/,"").replace(/[^\/]+$/,function(e,t,n){return/[^\/]$/.test(e)?"":e}).replace(/\/+$/,"")+"/";return e},h.getFullUrl=function(e,t){var n=e,r=e.substring(0,1);return t=typeof t=="undefined"?!0:t,/[a-z]+\:\/\//.test(e)||(r==="/"?n=h.getRootUrl()+e.replace(/^\/+/,""):r==="#"?n=h.getPageUrl().replace(/#.*/,"")+e:r==="?"?n=h.getPageUrl().replace(/[\?#].*/,"")+e:t?n=h.getBaseUrl()+e.replace(/^(\.\/)+/,""):n=h.getBasePageUrl()+e.replace(/^(\.\/)+/,"")),n.replace(/\#$/,"")},h.getShortUrl=function(e){var t=e,n=h.getBaseUrl(),r=h.getRootUrl();return h.emulated.pushState&&(t=t.replace(n,"")),t=t.replace(r,"/"),h.isTraditionalAnchor(t)&&(t="./"+t),t=t.replace(/^(\.\/)+/g,"./").replace(/\#$/,""),t},h.getLocationHref=function(e){return e=e||r,e.URL===e.location.href?e.location.href:e.location.href===decodeURIComponent(e.URL)?e.URL:e.location.hash&&decodeURIComponent(e.location.href.replace(/^[^#]+/,""))===e.location.hash?e.location.href:e.URL.indexOf("#")==-1&&e.location.href.indexOf("#")!=-1?e.location.href:e.URL||e.location.href},h.store={},h.idToState=h.idToState||{},h.stateToId=h.stateToId||{},h.urlToId=h.urlToId||{},h.storedStates=h.storedStates||[],h.savedStates=h.savedStates||[],h.normalizeStore=function(){h.store.idToState=h.store.idToState||{},h.store.urlToId=h.store.urlToId||{},h.store.stateToId=h.store.stateToId||{}},h.getState=function(e,t){typeof e=="undefined"&&(e=!0),typeof t=="undefined"&&(t=!0);var n=h.getLastSavedState();return!n&&t&&(n=h.createStateObject()),e&&(n=h.cloneObject(n),n.url=n.cleanUrl||n.url),n},h.getIdByState=function(e){var t=h.extractId(e.url),n;if(!t){n=h.getStateString(e);if(typeof h.stateToId[n]!="undefined")t=h.stateToId[n];else if(typeof h.store.stateToId[n]!="undefined")t=h.store.stateToId[n];else{for(;;){t=(new Date).getTime()+String(Math.random()).replace(/\D/g,"");if(typeof h.idToState[t]=="undefined"&&typeof h.store.idToState[t]=="undefined")break}h.stateToId[n]=t,h.idToState[t]=e}}return t},h.normalizeState=function(e){var t,n;if(!e||typeof e!="object")e={};if(typeof e.normalized!="undefined")return e;if(!e.data||typeof e.data!="object")e.data={};return t={},t.normalized=!0,t.title=e.title||"",t.url=h.getFullUrl(e.url?decodeURIComponent(e.url):h.getLocationHref()),t.hash=h.getShortUrl(t.url),t.data=h.cloneObject(e.data),t.id=h.getIdByState(t),t.cleanUrl=t.url.replace(/\??\&_suid.*/,""),t.url=t.cleanUrl,n=!h.isEmptyObject(t.data),(t.title||n)&&h.options.disableSuid!==!0&&(t.hash=h.getShortUrl(t.url).replace(/\??\&_suid.*/,""),/\?/.test(t.hash)||(t.hash+="?"),t.hash+="&_suid="+t.id),t.hashedUrl=h.getFullUrl(t.hash),(h.emulated.pushState||h.bugs.safariPoll)&&h.hasUrlDuplicate(t)&&(t.url=t.hashedUrl),t},h.createStateObject=function(e,t,n){var r={data:e,title:t,url:n};return r=h.normalizeState(r),r},h.getStateById=function(e){e=String(e);var n=h.idToState[e]||h.store.idToState[e]||t;return n},h.getStateString=function(e){var t,n,r;return t=h.normalizeState(e),n={data:t.data,title:e.title,url:e.url},r=l.stringify(n),r},h.getStateId=function(e){var t,n;return t=h.normalizeState(e),n=t.id,n},h.getHashByState=function(e){var t,n;return t=h.normalizeState(e),n=t.hash,n},h.extractId=function(e){var t,n,r,i;return e.indexOf("#")!=-1?i=e.split("#")[0]:i=e,n=/(.*)\&_suid=([0-9]+)$/.exec(i),r=n?n[1]||e:e,t=n?String(n[2]||""):"",t||!1},h.isTraditionalAnchor=function(e){var t=!/[\/\?\.]/.test(e);return t},h.extractState=function(e,t){var n=null,r,i;return t=t||!1,r=h.extractId(e),r&&(n=h.getStateById(r)),n||(i=h.getFullUrl(e),r=h.getIdByUrl(i)||!1,r&&(n=h.getStateById(r)),!n&&t&&!h.isTraditionalAnchor(e)&&(n=h.createStateObject(null,null,i))),n},h.getIdByUrl=function(e){var n=h.urlToId[e]||h.store.urlToId[e]||t;return n},h.getLastSavedState=function(){return h.savedStates[h.savedStates.length-1]||t},h.getLastStoredState=function(){return h.storedStates[h.storedStates.length-1]||t},h.hasUrlDuplicate=function(e){var t=!1,n;return n=h.extractState(e.url),t=n&&n.id!==e.id,t},h.storeState=function(e){return h.urlToId[e.url]=e.id,h.storedStates.push(h.cloneObject(e)),e},h.isLastSavedState=function(e){var t=!1,n,r,i;return h.savedStates.length&&(n=e.id,r=h.getLastSavedState(),i=r.id,t=n===i),t},h.saveState=function(e){return h.isLastSavedState(e)?!1:(h.savedStates.push(h.cloneObject(e)),!0)},h.getStateByIndex=function(e){var t=null;return typeof e=="undefined"?t=h.savedStates[h.savedStates.length-1]:e<0?t=h.savedStates[h.savedStates.length+e]:t=h.savedStates[e],t},h.getCurrentIndex=function(){var e=null;return h.savedStates.length<1?e=0:e=h.savedStates.length-1,e},h.getHash=function(e){var t=h.getLocationHref(e),n;return n=h.getHashByUrl(t),n},h.unescapeHash=function(e){var t=h.normalizeHash(e);return t=decodeURIComponent(t),t},h.normalizeHash=function(e){var t=e.replace(/[^#]*#/,"").replace(/#.*/,"");return t},h.setHash=function(e,t){var n,i;return t!==!1&&h.busy()?(h.pushQueue({scope:h,callback:h.setHash,args:arguments,queue:t}),!1):(h.busy(!0),n=h.extractState(e,!0),n&&!h.emulated.pushState?h.pushState(n.data,n.title,n.url,!1):h.getHash()!==e&&(h.bugs.setHash?(i=h.getPageUrl(),h.pushState(null,null,i+"#"+e,!1)):r.location.hash=e),h)},h.escapeHash=function(t){var n=h.normalizeHash(t);return n=e.encodeURIComponent(n),h.bugs.hashEscape||(n=n.replace(/\%21/g,"!").replace(/\%26/g,"&").replace(/\%3D/g,"=").replace(/\%3F/g,"?")),n},h.getHashByUrl=function(e){var t=String(e).replace(/([^#]*)#?([^#]*)#?(.*)/,"$2");return t=h.unescapeHash(t),t},h.setTitle=function(e){var t=e.title,n;t||(n=h.getStateByIndex(0),n&&n.url===e.url&&(t=n.title||h.options.initialTitle));try{r.getElementsByTagName("title")[0].innerHTML=t.replace("<","&lt;").replace(">","&gt;").replace(" & "," &amp; ")}catch(i){}return r.title=t,h},h.queues=[],h.busy=function(e){typeof e!="undefined"?h.busy.flag=e:typeof h.busy.flag=="undefined"&&(h.busy.flag=!1);if(!h.busy.flag){u(h.busy.timeout);var t=function(){var e,n,r;if(h.busy.flag)return;for(e=h.queues.length-1;e>=0;--e){n=h.queues[e];if(n.length===0)continue;r=n.shift(),h.fireQueueItem(r),h.busy.timeout=o(t,h.options.busyDelay)}};h.busy.timeout=o(t,h.options.busyDelay)}return h.busy.flag},h.busy.flag=!1,h.fireQueueItem=function(e){return e.callback.apply(e.scope||h,e.args||[])},h.pushQueue=function(e){return h.queues[e.queue||0]=h.queues[e.queue||0]||[],h.queues[e.queue||0].push(e),h},h.queue=function(e,t){return typeof e=="function"&&(e={callback:e}),typeof t!="undefined"&&(e.queue=t),h.busy()?h.pushQueue(e):h.fireQueueItem(e),h},h.clearQueue=function(){return h.busy.flag=!1,h.queues=[],h},h.stateChanged=!1,h.doubleChecker=!1,h.doubleCheckComplete=function(){return h.stateChanged=!0,h.doubleCheckClear(),h},h.doubleCheckClear=function(){return h.doubleChecker&&(u(h.doubleChecker),h.doubleChecker=!1),h},h.doubleCheck=function(e){return h.stateChanged=!1,h.doubleCheckClear(),h.bugs.ieDoubleCheck&&(h.doubleChecker=o(function(){return h.doubleCheckClear(),h.stateChanged||e(),!0},h.options.doubleCheckInterval)),h},h.safariStatePoll=function(){var t=h.extractState(h.getLocationHref()),n;if(!h.isLastSavedState(t))return n=t,n||(n=h.createStateObject()),h.Adapter.trigger(e,"popstate"),h;return},h.back=function(e){return e!==!1&&h.busy()?(h.pushQueue({scope:h,callback:h.back,args:arguments,queue:e}),!1):(h.busy(!0),h.doubleCheck(function(){h.back(!1)}),p.go(-1),!0)},h.forward=function(e){return e!==!1&&h.busy()?(h.pushQueue({scope:h,callback:h.forward,args:arguments,queue:e}),!1):(h.busy(!0),h.doubleCheck(function(){h.forward(!1)}),p.go(1),!0)},h.go=function(e,t){var n;if(e>0)for(n=1;n<=e;++n)h.forward(t);else{if(!(e<0))throw new Error("History.go: History.go requires a positive or negative integer passed.");for(n=-1;n>=e;--n)h.back(t)}return h};if(h.emulated.pushState){var v=function(){};h.pushState=h.pushState||v,h.replaceState=h.replaceState||v}else h.onPopState=function(t,n){var r=!1,i=!1,s,o;return h.doubleCheckComplete(),s=h.getHash(),s?(o=h.extractState(s||h.getLocationHref(),!0),o?h.replaceState(o.data,o.title,o.url,!1):(h.Adapter.trigger(e,"anchorchange"),h.busy(!1)),h.expectedStateId=!1,!1):(r=h.Adapter.extractEventData("state",t,n)||!1,r?i=h.getStateById(r):h.expectedStateId?i=h.getStateById(h.expectedStateId):i=h.extractState(h.getLocationHref()),i||(i=h.createStateObject(null,null,h.getLocationHref())),h.expectedStateId=!1,h.isLastSavedState(i)?(h.busy(!1),!1):(h.storeState(i),h.saveState(i),h.setTitle(i),h.Adapter.trigger(e,"statechange"),h.busy(!1),!0))},h.Adapter.bind(e,"popstate",h.onPopState),h.pushState=function(t,n,r,i){if(h.getHashByUrl(r)&&h.emulated.pushState)throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");if(i!==!1&&h.busy())return h.pushQueue({scope:h,callback:h.pushState,args:arguments,queue:i}),!1;h.busy(!0);var s=h.createStateObject(t,n,r);return h.isLastSavedState(s)?h.busy(!1):(h.storeState(s),h.expectedStateId=s.id,p.pushState(s.id,s.title,s.url),h.Adapter.trigger(e,"popstate")),!0},h.replaceState=function(t,n,r,i){if(h.getHashByUrl(r)&&h.emulated.pushState)throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");if(i!==!1&&h.busy())return h.pushQueue({scope:h,callback:h.replaceState,args:arguments,queue:i}),!1;h.busy(!0);var s=h.createStateObject(t,n,r);return h.isLastSavedState(s)?h.busy(!1):(h.storeState(s),h.expectedStateId=s.id,p.replaceState(s.id,s.title,s.url),h.Adapter.trigger(e,"popstate")),!0};if(s){try{h.store=l.parse(s.getItem("History.store"))||{}}catch(m){h.store={}}h.normalizeStore()}else h.store={},h.normalizeStore();h.Adapter.bind(e,"unload",h.clearAllIntervals),h.saveState(h.storeState(h.extractState(h.getLocationHref(),!0))),s&&(h.onUnload=function(){var e,t,n;try{e=l.parse(s.getItem("History.store"))||{}}catch(r){e={}}e.idToState=e.idToState||{},e.urlToId=e.urlToId||{},e.stateToId=e.stateToId||{};for(t in h.idToState){if(!h.idToState.hasOwnProperty(t))continue;e.idToState[t]=h.idToState[t]}for(t in h.urlToId){if(!h.urlToId.hasOwnProperty(t))continue;e.urlToId[t]=h.urlToId[t]}for(t in h.stateToId){if(!h.stateToId.hasOwnProperty(t))continue;e.stateToId[t]=h.stateToId[t]}h.store=e,h.normalizeStore(),n=l.stringify(e);try{s.setItem("History.store",n)}catch(i){if(!/QUOTA_EXCEEDED_ERR/.test(i.message))throw i;s.removeItem("History.store"),s.setItem("History.store",n)}},h.intervalList.push(a(h.onUnload,h.options.storeInterval)),h.Adapter.bind(e,"beforeunload",h.onUnload),h.Adapter.bind(e,"unload",h.onUnload));if(!h.emulated.pushState){h.bugs.safariPoll&&h.intervalList.push(a(h.safariStatePoll,h.options.safariPollInterval));if(i.vendor==="Apple Computer, Inc."||(i.appCodeName||"")==="Mozilla")h.Adapter.bind(e,"hashchange",function(){h.Adapter.trigger(e,"popstate")}),h.getHash()&&h.Adapter.onDomLoad(function(){h.Adapter.trigger(e,"hashchange")})}},(!h.options||!h.options.delayInit)&&h.init()}(window);
// jquery.event.move
//
// 1.3.1
//
// Stephen Band
//
// Triggers 'movestart', 'move' and 'moveend' events after
// mousemoves following a mousedown cross a distance threshold,
// similar to the native 'dragstart', 'drag' and 'dragend' events.
// Move events are throttled to animation frames. Move event objects
// have the properties:
//
// pageX:
// pageY:   Page coordinates of pointer.
// startX:
// startY:  Page coordinates of pointer at movestart.
// distX:
// distY:  Distance the pointer has moved since movestart.
// deltaX:
// deltaY:  Distance the finger has moved since last event.
// velocityX:
// velocityY:  Average velocity over last few events.


(function (module) {
	if (typeof define === 'function' && define.amd) {
		// AMD. Register as an anonymous module.
		define(['jquery'], module);
	} else {
		// Browser globals
		module(jQuery);
	}
})(function(jQuery, undefined){

	var // Number of pixels a pressed pointer travels before movestart
	    // event is fired.
	    threshold = 6,
	
	    add = jQuery.event.add,
	
	    remove = jQuery.event.remove,

	    // Just sugar, so we can have arguments in the same order as
	    // add and remove.
	    trigger = function(node, type, data) {
	    	jQuery.event.trigger(type, data, node);
	    },

	    // Shim for requestAnimationFrame, falling back to timer. See:
	    // see http://paulirish.com/2011/requestanimationframe-for-smart-animating/
	    requestFrame = (function(){
	    	return (
	    		window.requestAnimationFrame ||
	    		window.webkitRequestAnimationFrame ||
	    		window.mozRequestAnimationFrame ||
	    		window.oRequestAnimationFrame ||
	    		window.msRequestAnimationFrame ||
	    		function(fn, element){
	    			return window.setTimeout(function(){
	    				fn();
	    			}, 25);
	    		}
	    	);
	    })(),
	    
	    ignoreTags = {
	    	textarea: true,
	    	input: true,
	    	select: true,
	    	button: true
	    },
	    
	    mouseevents = {
	    	move: 'mousemove',
	    	cancel: 'mouseup dragstart',
	    	end: 'mouseup'
	    },
	    
	    touchevents = {
	    	move: 'touchmove',
	    	cancel: 'touchend',
	    	end: 'touchend'
	    };


	// Constructors
	
	function Timer(fn){
		var callback = fn,
				active = false,
				running = false;
		
		function trigger(time) {
			if (active){
				callback();
				requestFrame(trigger);
				running = true;
				active = false;
			}
			else {
				running = false;
			}
		}
		
		this.kick = function(fn) {
			active = true;
			if (!running) { trigger(); }
		};
		
		this.end = function(fn) {
			var cb = callback;
			
			if (!fn) { return; }
			
			// If the timer is not running, simply call the end callback.
			if (!running) {
				fn();
			}
			// If the timer is running, and has been kicked lately, then
			// queue up the current callback and the end callback, otherwise
			// just the end callback.
			else {
				callback = active ?
					function(){ cb(); fn(); } : 
					fn ;
				
				active = true;
			}
		};
	}


	// Functions
	
	function returnTrue() {
		return true;
	}
	
	function returnFalse() {
		return false;
	}
	
	function preventDefault(e) {
		e.preventDefault();
	}
	
	function preventIgnoreTags(e) {
		// Don't prevent interaction with form elements.
		if (ignoreTags[ e.target.tagName.toLowerCase() ]) { return; }
		
		e.preventDefault();
	}

	function isLeftButton(e) {
		// Ignore mousedowns on any button other than the left (or primary)
		// mouse button, or when a modifier key is pressed.
		return (e.which === 1 && !e.ctrlKey && !e.altKey);
	}

	function identifiedTouch(touchList, id) {
		var i, l;

		if (touchList.identifiedTouch) {
			return touchList.identifiedTouch(id);
		}
		
		// touchList.identifiedTouch() does not exist in
		// webkit yetвЂ¦ we must do the search ourselves...
		
		i = -1;
		l = touchList.length;
		
		while (++i < l) {
			if (touchList[i].identifier === id) {
				return touchList[i];
			}
		}
	}

	function changedTouch(e, event) {
		var touch = identifiedTouch(e.changedTouches, event.identifier);

		// This isn't the touch you're looking for.
		if (!touch) { return; }

		// Chrome Android (at least) includes touches that have not
		// changed in e.changedTouches. That's a bit annoying. Check
		// that this touch has changed.
		if (touch.pageX === event.pageX && touch.pageY === event.pageY) { return; }

		return touch;
	}


	// Handlers that decide when the first movestart is triggered
	
	function mousedown(e){
		var data;

		if (!isLeftButton(e)) { return; }

		data = {
			target: e.target,
			startX: e.pageX,
			startY: e.pageY,
			timeStamp: e.timeStamp
		};

		add(document, mouseevents.move, mousemove, data);
		add(document, mouseevents.cancel, mouseend, data);
	}

	function mousemove(e){
		var data = e.data;

		checkThreshold(e, data, e, removeMouse);
	}

	function mouseend(e) {
		removeMouse();
	}

	function removeMouse() {
		remove(document, mouseevents.move, mousemove);
		remove(document, mouseevents.cancel, mouseend);
	}

	function touchstart(e) {
		var touch, template;

		// Don't get in the way of interaction with form elements.
		if (ignoreTags[ e.target.tagName.toLowerCase() ]) { return; }

		touch = e.changedTouches[0];
		
		// iOS live updates the touch objects whereas Android gives us copies.
		// That means we can't trust the touchstart object to stay the same,
		// so we must copy the data. This object acts as a template for
		// movestart, move and moveend event objects.
		template = {
			target: touch.target,
			startX: touch.pageX,
			startY: touch.pageY,
			timeStamp: e.timeStamp,
			identifier: touch.identifier
		};

		// Use the touch identifier as a namespace, so that we can later
		// remove handlers pertaining only to this touch.
		add(document, touchevents.move + '.' + touch.identifier, touchmove, template);
		add(document, touchevents.cancel + '.' + touch.identifier, touchend, template);
	}

	function touchmove(e){
		var data = e.data,
		    touch = changedTouch(e, data);

		if (!touch) { return; }

		checkThreshold(e, data, touch, removeTouch);
	}

	function touchend(e) {
		var template = e.data,
		    touch = identifiedTouch(e.changedTouches, template.identifier);

		if (!touch) { return; }

		removeTouch(template.identifier);
	}

	function removeTouch(identifier) {
		remove(document, '.' + identifier, touchmove);
		remove(document, '.' + identifier, touchend);
	}


	// Logic for deciding when to trigger a movestart.

	function checkThreshold(e, template, touch, fn) {
		var distX = touch.pageX - template.startX,
		    distY = touch.pageY - template.startY;

		// Do nothing if the threshold has not been crossed.
		if ((distX * distX) + (distY * distY) < (threshold * threshold)) { return; }

		triggerStart(e, template, touch, distX, distY, fn);
	}

	function handled() {
		// this._handled should return false once, and after return true.
		this._handled = returnTrue;
		return false;
	}

	function flagAsHandled(e) {
		e._handled();
	}

	function triggerStart(e, template, touch, distX, distY, fn) {
		var node = template.target,
		    touches, time;

		touches = e.targetTouches;
		time = e.timeStamp - template.timeStamp;

		// Create a movestart object with some special properties that
		// are passed only to the movestart handlers.
		template.type = 'movestart';
		template.distX = distX;
		template.distY = distY;
		template.deltaX = distX;
		template.deltaY = distY;
		template.pageX = touch.pageX;
		template.pageY = touch.pageY;
		template.velocityX = distX / time;
		template.velocityY = distY / time;
		template.targetTouches = touches;
		template.finger = touches ?
			touches.length :
			1 ;

		// The _handled method is fired to tell the default movestart
		// handler that one of the move events is bound.
		template._handled = handled;
			
		// Pass the touchmove event so it can be prevented if or when
		// movestart is handled.
		template._preventTouchmoveDefault = function() {
			e.preventDefault();
		};

		// Trigger the movestart event.
		trigger(template.target, template);

		// Unbind handlers that tracked the touch or mouse up till now.
		fn(template.identifier);
	}


	// Handlers that control what happens following a movestart

	function activeMousemove(e) {
		var event = e.data.event,
		    timer = e.data.timer;

		updateEvent(event, e, e.timeStamp, timer);
	}

	function activeMouseend(e) {
		var event = e.data.event,
		    timer = e.data.timer;
		
		removeActiveMouse();

		endEvent(event, timer, function() {
			// Unbind the click suppressor, waiting until after mouseup
			// has been handled.
			setTimeout(function(){
				remove(event.target, 'click', returnFalse);
			}, 0);
		});
	}

	function removeActiveMouse(event) {
		remove(document, mouseevents.move, activeMousemove);
		remove(document, mouseevents.end, activeMouseend);
	}

	function activeTouchmove(e) {
		var event = e.data.event,
		    timer = e.data.timer,
		    touch = changedTouch(e, event);

		if (!touch) { return; }

		// Stop the interface from gesturing
		e.preventDefault();

		event.targetTouches = e.targetTouches;
		updateEvent(event, touch, e.timeStamp, timer);
	}

	function activeTouchend(e) {
		var event = e.data.event,
		    timer = e.data.timer,
		    touch = identifiedTouch(e.changedTouches, event.identifier);

		// This isn't the touch you're looking for.
		if (!touch) { return; }

		removeActiveTouch(event);
		endEvent(event, timer);
	}

	function removeActiveTouch(event) {
		remove(document, '.' + event.identifier, activeTouchmove);
		remove(document, '.' + event.identifier, activeTouchend);
	}


	// Logic for triggering move and moveend events

	function updateEvent(event, touch, timeStamp, timer) {
		var time = timeStamp - event.timeStamp;

		event.type = 'move';
		event.distX =  touch.pageX - event.startX;
		event.distY =  touch.pageY - event.startY;
		event.deltaX = touch.pageX - event.pageX;
		event.deltaY = touch.pageY - event.pageY;
		
		// Average the velocity of the last few events using a decay
		// curve to even out spurious jumps in values.
		event.velocityX = 0.3 * event.velocityX + 0.7 * event.deltaX / time;
		event.velocityY = 0.3 * event.velocityY + 0.7 * event.deltaY / time;
		event.pageX =  touch.pageX;
		event.pageY =  touch.pageY;

		timer.kick();
	}

	function endEvent(event, timer, fn) {
		timer.end(function(){
			event.type = 'moveend';

			trigger(event.target, event);
			
			return fn && fn();
		});
	}


	// jQuery special event definition

	function setup(data, namespaces, eventHandle) {
		// Stop the node from being dragged
		//add(this, 'dragstart.move drag.move', preventDefault);
		
		// Prevent text selection and touch interface scrolling
		//add(this, 'mousedown.move', preventIgnoreTags);
		
		// Tell movestart default handler that we've handled this
		add(this, 'movestart.move', flagAsHandled);

		// Don't bind to the DOM. For speed.
		return true;
	}
	
	function teardown(namespaces) {
		remove(this, 'dragstart drag', preventDefault);
		remove(this, 'mousedown touchstart', preventIgnoreTags);
		remove(this, 'movestart', flagAsHandled);
		
		// Don't bind to the DOM. For speed.
		return true;
	}
	
	function addMethod(handleObj) {
		// We're not interested in preventing defaults for handlers that
		// come from internal move or moveend bindings
		if (handleObj.namespace === "move" || handleObj.namespace === "moveend") {
			return;
		}
		
		// Stop the node from being dragged
		add(this, 'dragstart.' + handleObj.guid + ' drag.' + handleObj.guid, preventDefault, undefined, handleObj.selector);
		
		// Prevent text selection and touch interface scrolling
		add(this, 'mousedown.' + handleObj.guid, preventIgnoreTags, undefined, handleObj.selector);
	}
	
	function removeMethod(handleObj) {
		if (handleObj.namespace === "move" || handleObj.namespace === "moveend") {
			return;
		}
		
		remove(this, 'dragstart.' + handleObj.guid + ' drag.' + handleObj.guid);
		remove(this, 'mousedown.' + handleObj.guid);
	}
	
	jQuery.event.special.movestart = {
		setup: setup,
		teardown: teardown,
		add: addMethod,
		remove: removeMethod,

		_default: function(e) {
			var template, data;
			
			// If no move events were bound to any ancestors of this
			// target, high tail it out of here.
			if (!e._handled()) { return; }

			template = {
				target: e.target,
				startX: e.startX,
				startY: e.startY,
				pageX: e.pageX,
				pageY: e.pageY,
				distX: e.distX,
				distY: e.distY,
				deltaX: e.deltaX,
				deltaY: e.deltaY,
				velocityX: e.velocityX,
				velocityY: e.velocityY,
				timeStamp: e.timeStamp,
				identifier: e.identifier,
				targetTouches: e.targetTouches,
				finger: e.finger
			};

			data = {
				event: template,
				timer: new Timer(function(time){
					trigger(e.target, template);
				})
			};
			
			if (e.identifier === undefined) {
				// We're dealing with a mouse
				// Stop clicks from propagating during a move
				add(e.target, 'click', returnFalse);
				add(document, mouseevents.move, activeMousemove, data);
				add(document, mouseevents.end, activeMouseend, data);
			}
			else {
				// We're dealing with a touch. Stop touchmove doing
				// anything defaulty.
				e._preventTouchmoveDefault();
				add(document, touchevents.move + '.' + e.identifier, activeTouchmove, data);
				add(document, touchevents.end + '.' + e.identifier, activeTouchend, data);
			}
		}
	};

	jQuery.event.special.move = {
		setup: function() {
			// Bind a noop to movestart. Why? It's the movestart
			// setup that decides whether other move events are fired.
			add(this, 'movestart.move', jQuery.noop);
		},
		
		teardown: function() {
			remove(this, 'movestart.move', jQuery.noop);
		}
	};
	
	jQuery.event.special.moveend = {
		setup: function() {
			// Bind a noop to movestart. Why? It's the movestart
			// setup that decides whether other move events are fired.
			add(this, 'movestart.moveend', jQuery.noop);
		},
		
		teardown: function() {
			remove(this, 'movestart.moveend', jQuery.noop);
		}
	};

	add(document, 'mousedown.move', mousedown);
	add(document, 'touchstart.move', touchstart);

	// Make jQuery copy touch event properties over to the jQuery event
	// object, if they are not already listed. But only do the ones we
	// really need. IE7/8 do not have Array#indexOf(), but nor do they
	// have touch events, so let's assume we can ignore them.
	if (typeof Array.prototype.indexOf === 'function') {
		(function(jQuery, undefined){
			var props = ["changedTouches", "targetTouches"],
			    l = props.length;
			
			while (l--) {
				if (jQuery.event.props.indexOf(props[l]) === -1) {
					jQuery.event.props.push(props[l]);
				}
			}
		})(jQuery);
	};
});
;
// jQuery.event.swipe
// 0.5
// Stephen Band

// Dependencies
// jQuery.event.move 1.2

// One of swipeleft, swiperight, swipeup or swipedown is triggered on
// moveend, when the move has covered a threshold ratio of the dimension
// of the target node, or has gone really fast. Threshold and velocity
// sensitivity changed with:
//
// jQuery.event.special.swipe.settings.threshold
// jQuery.event.special.swipe.settings.sensitivity

(function (module) {
	if (typeof define === 'function' && define.amd) {
		// AMD. Register as an anonymous module.
		define(['jquery'], module);
	} else {
		// Browser globals
		module(jQuery);
	}
})(function(jQuery, undefined){
	var add = jQuery.event.add,
	   
	    remove = jQuery.event.remove,

	    // Just sugar, so we can have arguments in the same order as
	    // add and remove.
	    trigger = function(node, type, data) {
	    	jQuery.event.trigger(type, data, node);
	    },

	    settings = {
	    	// Ratio of distance over target finger must travel to be
	    	// considered a swipe.
	    	threshold: 0.4,
	    	// Faster fingers can travel shorter distances to be considered
	    	// swipes. 'sensitivity' controls how much. Bigger is shorter.
	    	sensitivity: 6
	    };

	function moveend(e) {
		var w, h, event;

		w = e.target.offsetWidth;
		h = e.target.offsetHeight;

		// Copy over some useful properties from the move event
		event = {
			distX: e.distX,
			distY: e.distY,
			velocityX: e.velocityX,
			velocityY: e.velocityY,
			finger: e.finger
		};

		// Find out which of the four directions was swiped
		if (e.distX > e.distY) {
			if (e.distX > -e.distY) {
				if (e.distX/w > settings.threshold || e.velocityX * e.distX/w * settings.sensitivity > 1) {
					event.type = 'swiperight';
					trigger(e.currentTarget, event);
				}
			}
			else {
				if (-e.distY/h > settings.threshold || e.velocityY * e.distY/w * settings.sensitivity > 1) {
					event.type = 'swipeup';
					trigger(e.currentTarget, event);
				}
			}
		}
		else {
			if (e.distX > -e.distY) {
				if (e.distY/h > settings.threshold || e.velocityY * e.distY/w * settings.sensitivity > 1) {
					event.type = 'swipedown';
					trigger(e.currentTarget, event);
				}
			}
			else {
				if (-e.distX/w > settings.threshold || e.velocityX * e.distX/w * settings.sensitivity > 1) {
					event.type = 'swipeleft';
					trigger(e.currentTarget, event);
				}
			}
		}
	}

	function getData(node) {
		var data = jQuery.data(node, 'event_swipe');
		
		if (!data) {
			data = { count: 0 };
			jQuery.data(node, 'event_swipe', data);
		}
		
		return data;
	}

	jQuery.event.special.swipe =
	jQuery.event.special.swipeleft =
	jQuery.event.special.swiperight =
	jQuery.event.special.swipeup =
	jQuery.event.special.swipedown = {
		setup: function( data, namespaces, eventHandle ) {
			var data = getData(this);

			// If another swipe event is already setup, don't setup again.
			if (data.count++ > 0) { return; }

			add(this, 'moveend', moveend);

			return true;
		},

		teardown: function() {
			var data = getData(this);

			// If another swipe event is still setup, don't teardown.
			if (--data.count > 0) { return; }

			remove(this, 'moveend', moveend);

			return true;
		},

		settings: settings
	};
});;
/* ------------------------------------------------------------------------------
 VideoSub v0.9.6

 Original MooTools implementation by [Thomas Sturm](http://www.storiesinflight.com)
 jQuery port by [Max Wheeler](http://www.icelab.com.au)
 Freeware, Attribution Appreciated
 ------------------------------------------------------------------------------ */
(function(c){var a,b,d;c.fn.videoSub=function(e){var f,g;if(typeof(typeof(f=c("<video>").addtrack)!=="undefined"&&f!==null)){g=c.extend({},c.fn.videoSub.defaults,e);return this.each(function(){var l,i,k,h,j,n,m;j=this;l=c(this);n=(typeof(i=c.meta)!=="undefined"&&i!==null)?c.extend(g,l.data()):g;m=c("track",this).attr("src");if(typeof m!=="undefined"&&m!==null){h=c('<div class="'+n.containerClass+'">');h.css("position","relative");h=l.wrap(h).parent();k=c('<div class="'+n.barClass+'">');k.css("width",l.outerWidth()-40);if(n.useBarDefaultStyle){k.css({position:"absolute",bottom:"40px",padding:"0 25px","text-align":"center",color:"#ffffff","font-family":"Helvetica, Arial, sans-serif","font-size":"16px","font-weight":"bold","text-shadow":"#000000 1px 1px 0px"})}k=k.appendTo(h);j.subtitles=[];j.subcount=0;j.update=function(q){var p,o;o=q.replace(/(\r\n|\r|\n)/g,"\n").split("\n\n");p=0;c(o).each(function(r){j.subtitles[p]=[];return(j.subtitles[p++]=o[r].split("\n"))});l.bind("play",function(r){return(j.subcount=0)});l.bind("ended",function(r){return(j.subcount=0)});l.bind("seeked",function(s){var r;j.subcount=0;r=[];while(b(j.subtitles[j.subcount][1])<this.currentTime.toFixed(1)){j.subcount++;if(j.subcount>j.subtitles.length-1){j.subcount=j.subtitles.length-1;break}}return r});return l.bind("timeupdate",function(s){var r;r="";if(j.currentTime.toFixed(1)>d(j.subtitles[j.subcount][1])&&j.currentTime.toFixed(1)<b(j.subtitles[j.subcount][1])){r=j.subtitles[j.subcount][2]}if(j.currentTime.toFixed(1)>b(j.subtitles[j.subcount][1])&&j.subcount<(j.subtitles.length-1)){j.subcount++}return k.html(r)})};return c.ajax({method:"get",url:m,success:j.update})}})}};d=function(e){var f;f=e.split(" --> ");return a(f[0])};b=function(e){var f;f=e.split(" --> ");return a(f[1])};a=function(e){var h,g,f;g=e.split(",");f=g[0].split(":");return(h=Math.floor(f[0]*60*60)+Math.floor(f[1]*60)+Math.floor(f[2]))};c.fn.videoSub.defaults={containerClass:"videosub-container",barClass:"videosub-bar",useBarDefaultStyle:true}})(jQuery);;
// jquery.iepngfix adds IE5/6/7/8 support for transparent PNGs and
// fixes issue where black blobs appear on non-binary alpha channel
// areas of PNGs when using CSS opacity or fading with jquery.cycle.
//
// It accomplishes this by setting the AlphaImageLoader filter in IE,
// adding support for PNG transparency in IE > 5.5
//
// THE PITFALLS
// source: http://24ways.org/2007/supersleight-transparent-png-in-ie6
// Please read the above link's "The pitfalls" section to better
// understand performance issues and other limitations of this method.
(function( $ ) {

    $.fn.fixPNG = function(options) {

        // Don't bother with non-IE browsers
        if (!($.browser.msie)) return this;

        // This fix only applies to IE 5/6/7/8
        var MIN_IE_VERSION = 5;
        var MAX_IE_VERSION = 8;
        var ieVersion = parseInt(jQuery.browser.version, 10);
        if (ieVersion < MIN_IE_VERSION || ieVersion > MAX_IE_VERSION) return this;

        // Empty 1x1px GIF, Base 64 encoded
        // src: Comment by George Stephanis at http://allinthehead.com/retro/338/supersleight-jquery-plugin
        var SHIM_IMAGE = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAAAAAA6fptVAAAACXZwQWcAAAABAAAAAQDHlV/tAAAAAnRSTlMA/1uRIrUAAAAKSURBVAjXY/gPAAEBAQAbtu5WAAAAAElFTkSuQmCC';

        // classname of div wrapper for the divWrapImages option
        var DIV_WRAPPER_CLASS = 'iepngfix-wrapper';

        // Set up default options
        var defaults = {
            divWrapImages: false
        };

        // Overwrite default options with user provided
        // ones and merge them into "options"
        options = $.extend({}, defaults, options);

        return this.each(function(i, elem) {


            // fix IMG elements for PNGs
            //if($.nodeName(elem, "img") && $(elem).attr('src').match(/\.png/i) !== null) {
            if($.nodeName(elem, "img")) {
                var styles = {
                    // Manually set the CSS width and height so
                    // that the shim properly expands to fill the image
                    'width'  : $(elem).width() + 'px',
                    'height' : $(elem).height() + 'px',

                    // Set the "AlphaImageLoader" proprietary IE filter
                    'filter' : "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + $(elem).attr('src') + "', sizingMethod='scale')"
                };

                // apply the CSS styles
                $(elem).css(styles);

                // apply the shim image
                //$(elem).attr('src', SHIM_IMAGE);

                if(options.divWrapImages) {
                    // wrap IMG in a div for jquery.cycle support
                    $(elem).wrap('<div class="'+DIV_WRAPPER_CLASS+'">');
                }
            }

            // fix other elements that have CSS background-image PNGs
            //else if($(elem).css('background-image').match(/\.png/i) !== null) {
            else if($(elem).css('background-image') !== null) {
                var imageName = $(elem).css('backgroundImage');
                var src = imageName.substring(5,imageName.length-2);

                // set the AlphaImageLoader filter's sizingMethod
                // to 'scale' for repeating BGs, 'crop' for non-repeating BGs
                var sizingMethod = ($(elem).css('background-repeat') == 'no-repeat' ? 'crop' : 'scale');

                var styles = {
                    // setup the shim image
                    'backgroundImage' : 'url(' + SHIM_IMAGE + ')',

                    // Set the "AlphaImageLoader" proprietary IE filter
                    'filter'          : "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + src + "', sizingMethod='" + sizingMethod + "')"
                }

                // apply the CSS styles
                $(elem).css(styles);
            }
        });
    }
})( jQuery );;
(function(a){if(typeof define==="function"&&define.amd&&define.amd.jQuery){define(["jquery"],a)}else{a(jQuery)}}(function(e){var o="left",n="right",d="up",v="down",c="in",w="out",l="none",r="auto",k="swipe",s="pinch",x="tap",i="doubletap",b="longtap",A="horizontal",t="vertical",h="all",q=10,f="start",j="move",g="end",p="cancel",a="ontouchstart" in window,y="TouchSwipe";var m={fingers:1,threshold:75,cancelThreshold:null,pinchThreshold:20,maxTimeThreshold:null,fingerReleaseThreshold:250,longTapThreshold:500,doubleTapThreshold:200,swipe:null,swipeLeft:null,swipeRight:null,swipeUp:null,swipeDown:null,swipeStatus:null,pinchIn:null,pinchOut:null,pinchStatus:null,click:null,tap:null,doubleTap:null,longTap:null,triggerOnTouchEnd:true,triggerOnTouchLeave:false,allowPageScroll:"auto",fallbackToMouseEvents:true,excludedElements:"label, button, input, select, textarea, a, .noSwipe"};e.fn.swipe=function(D){var C=e(this),B=C.data(y);if(B&&typeof D==="string"){if(B[D]){return B[D].apply(this,Array.prototype.slice.call(arguments,1))}else{e.error("Method "+D+" does not exist on jQuery.swipe")}}else{if(!B&&(typeof D==="object"||!D)){return u.apply(this,arguments)}}return C};e.fn.swipe.defaults=m;e.fn.swipe.phases={PHASE_START:f,PHASE_MOVE:j,PHASE_END:g,PHASE_CANCEL:p};e.fn.swipe.directions={LEFT:o,RIGHT:n,UP:d,DOWN:v,IN:c,OUT:w};e.fn.swipe.pageScroll={NONE:l,HORIZONTAL:A,VERTICAL:t,AUTO:r};e.fn.swipe.fingers={ONE:1,TWO:2,THREE:3,ALL:h};function u(B){if(B&&(B.allowPageScroll===undefined&&(B.swipe!==undefined||B.swipeStatus!==undefined))){B.allowPageScroll=l}if(B.click!==undefined&&B.tap===undefined){B.tap=B.click}if(!B){B={}}B=e.extend({},e.fn.swipe.defaults,B);return this.each(function(){var D=e(this);var C=D.data(y);if(!C){C=new z(this,B);D.data(y,C)}})}function z(a0,aq){var av=(a||!aq.fallbackToMouseEvents),G=av?"touchstart":"mousedown",au=av?"touchmove":"mousemove",R=av?"touchend":"mouseup",P=av?null:"mouseleave",az="touchcancel";var ac=0,aL=null,Y=0,aX=0,aV=0,D=1,am=0,aF=0,J=null;var aN=e(a0);var W="start";var T=0;var aM=null;var Q=0,aY=0,a1=0,aa=0,K=0;var aS=null;try{aN.bind(G,aJ);aN.bind(az,a5)}catch(ag){e.error("events not supported "+G+","+az+" on jQuery.swipe")}this.enable=function(){aN.bind(G,aJ);aN.bind(az,a5);return aN};this.disable=function(){aG();return aN};this.destroy=function(){aG();aN.data(y,null);return aN};this.option=function(a8,a7){if(aq[a8]!==undefined){if(a7===undefined){return aq[a8]}else{aq[a8]=a7}}else{e.error("Option "+a8+" does not exist on jQuery.swipe.options")}return null};function aJ(a9){if(ax()){return}if(e(a9.target).closest(aq.excludedElements,aN).length>0){return}var ba=a9.originalEvent?a9.originalEvent:a9;var a8,a7=a?ba.touches[0]:ba;W=f;if(a){T=ba.touches.length}else{a9.preventDefault()}ac=0;aL=null;aF=null;Y=0;aX=0;aV=0;D=1;am=0;aM=af();J=X();O();if(!a||(T===aq.fingers||aq.fingers===h)||aT()){ae(0,a7);Q=ao();if(T==2){ae(1,ba.touches[1]);aX=aV=ap(aM[0].start,aM[1].start)}if(aq.swipeStatus||aq.pinchStatus){a8=L(ba,W)}}else{a8=false}if(a8===false){W=p;L(ba,W);return a8}else{ak(true)}return null}function aZ(ba){var bd=ba.originalEvent?ba.originalEvent:ba;if(W===g||W===p||ai()){return}var a9,a8=a?bd.touches[0]:bd;var bb=aD(a8);aY=ao();if(a){T=bd.touches.length}W=j;if(T==2){if(aX==0){ae(1,bd.touches[1]);aX=aV=ap(aM[0].start,aM[1].start)}else{aD(bd.touches[1]);aV=ap(aM[0].end,aM[1].end);aF=an(aM[0].end,aM[1].end)}D=a3(aX,aV);am=Math.abs(aX-aV)}if((T===aq.fingers||aq.fingers===h)||!a||aT()){aL=aH(bb.start,bb.end);ah(ba,aL);ac=aO(bb.start,bb.end);Y=aI();aE(aL,ac);if(aq.swipeStatus||aq.pinchStatus){a9=L(bd,W)}if(!aq.triggerOnTouchEnd||aq.triggerOnTouchLeave){var a7=true;if(aq.triggerOnTouchLeave){var bc=aU(this);a7=B(bb.end,bc)}if(!aq.triggerOnTouchEnd&&a7){W=ay(j)}else{if(aq.triggerOnTouchLeave&&!a7){W=ay(g)}}if(W==p||W==g){L(bd,W)}}}else{W=p;L(bd,W)}if(a9===false){W=p;L(bd,W)}}function I(a7){var a8=a7.originalEvent;if(a){if(a8.touches.length>0){C();return true}}if(ai()){T=aa}a7.preventDefault();aY=ao();Y=aI();if(a6()){W=p;L(a8,W)}else{if(aq.triggerOnTouchEnd||(aq.triggerOnTouchEnd==false&&W===j)){W=g;L(a8,W)}else{if(!aq.triggerOnTouchEnd&&a2()){W=g;aB(a8,W,x)}else{if(W===j){W=p;L(a8,W)}}}}ak(false);return null}function a5(){T=0;aY=0;Q=0;aX=0;aV=0;D=1;O();ak(false)}function H(a7){var a8=a7.originalEvent;if(aq.triggerOnTouchLeave){W=ay(g);L(a8,W)}}function aG(){aN.unbind(G,aJ);aN.unbind(az,a5);aN.unbind(au,aZ);aN.unbind(R,I);if(P){aN.unbind(P,H)}ak(false)}function ay(bb){var ba=bb;var a9=aw();var a8=aj();var a7=a6();if(!a9||a7){ba=p}else{if(a8&&bb==j&&(!aq.triggerOnTouchEnd||aq.triggerOnTouchLeave)){ba=g}else{if(!a8&&bb==g&&aq.triggerOnTouchLeave){ba=p}}}return ba}function L(a9,a7){var a8=undefined;if(F()||S()){a8=aB(a9,a7,k)}else{if((M()||aT())&&a8!==false){a8=aB(a9,a7,s)}}if(aC()&&a8!==false){a8=aB(a9,a7,i)}else{if(al()&&a8!==false){a8=aB(a9,a7,b)}else{if(ad()&&a8!==false){a8=aB(a9,a7,x)}}}if(a7===p){a5(a9)}if(a7===g){if(a){if(a9.touches.length==0){a5(a9)}}else{a5(a9)}}return a8}function aB(ba,a7,a9){var a8=undefined;if(a9==k){aN.trigger("swipeStatus",[a7,aL||null,ac||0,Y||0,T]);if(aq.swipeStatus){a8=aq.swipeStatus.call(aN,ba,a7,aL||null,ac||0,Y||0,T);if(a8===false){return false}}if(a7==g&&aR()){aN.trigger("swipe",[aL,ac,Y,T]);if(aq.swipe){a8=aq.swipe.call(aN,ba,aL,ac,Y,T);if(a8===false){return false}}switch(aL){case o:aN.trigger("swipeLeft",[aL,ac,Y,T]);if(aq.swipeLeft){a8=aq.swipeLeft.call(aN,ba,aL,ac,Y,T)}break;case n:aN.trigger("swipeRight",[aL,ac,Y,T]);if(aq.swipeRight){a8=aq.swipeRight.call(aN,ba,aL,ac,Y,T)}break;case d:aN.trigger("swipeUp",[aL,ac,Y,T]);if(aq.swipeUp){a8=aq.swipeUp.call(aN,ba,aL,ac,Y,T)}break;case v:aN.trigger("swipeDown",[aL,ac,Y,T]);if(aq.swipeDown){a8=aq.swipeDown.call(aN,ba,aL,ac,Y,T)}break}}}if(a9==s){aN.trigger("pinchStatus",[a7,aF||null,am||0,Y||0,T,D]);if(aq.pinchStatus){a8=aq.pinchStatus.call(aN,ba,a7,aF||null,am||0,Y||0,T,D);if(a8===false){return false}}if(a7==g&&a4()){switch(aF){case c:aN.trigger("pinchIn",[aF||null,am||0,Y||0,T,D]);if(aq.pinchIn){a8=aq.pinchIn.call(aN,ba,aF||null,am||0,Y||0,T,D)}break;case w:aN.trigger("pinchOut",[aF||null,am||0,Y||0,T,D]);if(aq.pinchOut){a8=aq.pinchOut.call(aN,ba,aF||null,am||0,Y||0,T,D)}break}}}if(a9==x){if(a7===p||a7===g){clearTimeout(aS);if(V()&&!E()){K=ao();aS=setTimeout(e.proxy(function(){K=null;aN.trigger("tap",[ba.target]);if(aq.tap){a8=aq.tap.call(aN,ba,ba.target)}},this),aq.doubleTapThreshold)}else{K=null;aN.trigger("tap",[ba.target]);if(aq.tap){a8=aq.tap.call(aN,ba,ba.target)}}}}else{if(a9==i){if(a7===p||a7===g){clearTimeout(aS);K=null;aN.trigger("doubletap",[ba.target]);if(aq.doubleTap){a8=aq.doubleTap.call(aN,ba,ba.target)}}}else{if(a9==b){if(a7===p||a7===g){clearTimeout(aS);K=null;aN.trigger("longtap",[ba.target]);if(aq.longTap){a8=aq.longTap.call(aN,ba,ba.target)}}}}}return a8}function aj(){var a7=true;if(aq.threshold!==null){a7=ac>=aq.threshold}return a7}function a6(){var a7=false;if(aq.cancelThreshold!==null&&aL!==null){a7=(aP(aL)-ac)>=aq.cancelThreshold}return a7}function ab(){if(aq.pinchThreshold!==null){return am>=aq.pinchThreshold}return true}function aw(){var a7;if(aq.maxTimeThreshold){if(Y>=aq.maxTimeThreshold){a7=false}else{a7=true}}else{a7=true}return a7}function ah(a7,a8){if(aq.allowPageScroll===l||aT()){a7.preventDefault()}else{var a9=aq.allowPageScroll===r;switch(a8){case o:if((aq.swipeLeft&&a9)||(!a9&&aq.allowPageScroll!=A)){a7.preventDefault()}break;case n:if((aq.swipeRight&&a9)||(!a9&&aq.allowPageScroll!=A)){a7.preventDefault()}break;case d:if((aq.swipeUp&&a9)||(!a9&&aq.allowPageScroll!=t)){a7.preventDefault()}break;case v:if((aq.swipeDown&&a9)||(!a9&&aq.allowPageScroll!=t)){a7.preventDefault()}break}}}function a4(){var a8=aK();var a7=U();var a9=ab();return a8&&a7&&a9}function aT(){return !!(aq.pinchStatus||aq.pinchIn||aq.pinchOut)}function M(){return !!(a4()&&aT())}function aR(){var ba=aw();var bc=aj();var a9=aK();var a7=U();var a8=a6();var bb=!a8&&a7&&a9&&bc&&ba;return bb}function S(){return !!(aq.swipe||aq.swipeStatus||aq.swipeLeft||aq.swipeRight||aq.swipeUp||aq.swipeDown)}function F(){return !!(aR()&&S())}function aK(){return((T===aq.fingers||aq.fingers===h)||!a)}function U(){return aM[0].end.x!==0}function a2(){return !!(aq.tap)}function V(){return !!(aq.doubleTap)}function aQ(){return !!(aq.longTap)}function N(){if(K==null){return false}var a7=ao();return(V()&&((a7-K)<=aq.doubleTapThreshold))}function E(){return N()}function at(){return((T===1||!a)&&(isNaN(ac)||ac===0))}function aW(){return((Y>aq.longTapThreshold)&&(ac<q))}function ad(){return !!(at()&&a2())}function aC(){return !!(N()&&V())}function al(){return !!(aW()&&aQ())}function C(){a1=ao();aa=event.touches.length+1}function O(){a1=0;aa=0}function ai(){var a7=false;if(a1){var a8=ao()-a1;if(a8<=aq.fingerReleaseThreshold){a7=true}}return a7}function ax(){return !!(aN.data(y+"_intouch")===true)}function ak(a7){if(a7===true){aN.bind(au,aZ);aN.bind(R,I);if(P){aN.bind(P,H)}}else{aN.unbind(au,aZ,false);aN.unbind(R,I,false);if(P){aN.unbind(P,H,false)}}aN.data(y+"_intouch",a7===true)}function ae(a8,a7){var a9=a7.identifier!==undefined?a7.identifier:0;aM[a8].identifier=a9;aM[a8].start.x=aM[a8].end.x=a7.pageX||a7.clientX;aM[a8].start.y=aM[a8].end.y=a7.pageY||a7.clientY;return aM[a8]}function aD(a7){var a9=a7.identifier!==undefined?a7.identifier:0;var a8=Z(a9);a8.end.x=a7.pageX||a7.clientX;a8.end.y=a7.pageY||a7.clientY;return a8}function Z(a8){for(var a7=0;a7<aM.length;a7++){if(aM[a7].identifier==a8){return aM[a7]}}}function af(){var a7=[];for(var a8=0;a8<=5;a8++){a7.push({start:{x:0,y:0},end:{x:0,y:0},identifier:0})}return a7}function aE(a7,a8){a8=Math.max(a8,aP(a7));J[a7].distance=a8}function aP(a7){if(J[a7]){return J[a7].distance}return undefined}function X(){var a7={};a7[o]=ar(o);a7[n]=ar(n);a7[d]=ar(d);a7[v]=ar(v);return a7}function ar(a7){return{direction:a7,distance:0}}function aI(){return aY-Q}function ap(ba,a9){var a8=Math.abs(ba.x-a9.x);var a7=Math.abs(ba.y-a9.y);return Math.round(Math.sqrt(a8*a8+a7*a7))}function a3(a7,a8){var a9=(a8/a7)*1;return a9.toFixed(2)}function an(){if(D<1){return w}else{return c}}function aO(a8,a7){return Math.round(Math.sqrt(Math.pow(a7.x-a8.x,2)+Math.pow(a7.y-a8.y,2)))}function aA(ba,a8){var a7=ba.x-a8.x;var bc=a8.y-ba.y;var a9=Math.atan2(bc,a7);var bb=Math.round(a9*180/Math.PI);if(bb<0){bb=360-Math.abs(bb)}return bb}function aH(a8,a7){var a9=aA(a8,a7);if((a9<=45)&&(a9>=0)){return o}else{if((a9<=360)&&(a9>=315)){return o}else{if((a9>=135)&&(a9<=225)){return n}else{if((a9>45)&&(a9<135)){return v}else{return d}}}}}function ao(){var a7=new Date();return a7.getTime()}function aU(a7){a7=e(a7);var a9=a7.offset();var a8={left:a9.left,right:a9.left+a7.outerWidth(),top:a9.top,bottom:a9.top+a7.outerHeight()};return a8}function B(a7,a8){return(a7.x>a8.left&&a7.x<a8.right&&a7.y>a8.top&&a7.y<a8.bottom)}}}));;
/* ===================================================
 * bootstrap-transition.js v2.1.0
 * http://twitter.github.com/bootstrap/javascript.html#transitions
 * ===================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */


!function ($) {

  $(function () {

    "use strict"; // jshint ;_;


    /* CSS TRANSITION SUPPORT (http://www.modernizr.com/)
     * ======================================================= */

    $.support.transition = (function () {

      var transitionEnd = (function () {

        var el = document.createElement('bootstrap')
          , transEndEventNames = {
               'WebkitTransition' : 'webkitTransitionEnd'
            ,  'MozTransition'    : 'transitionend'
            ,  'OTransition'      : 'oTransitionEnd otransitionend'
            ,  'transition'       : 'transitionend'
            }
          , name

        for (name in transEndEventNames){
          if (el.style[name] !== undefined) {
            return transEndEventNames[name]
          }
        }

      }())

      return transitionEnd && {
        end: transitionEnd
      }

    })()

  })

}(window.jQuery);
/* =========================================================
 * bootstrap-modal.js v2.1.0
 * http://twitter.github.com/bootstrap/javascript.html#modals
 * =========================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================= */


!function ($) {

  "use strict"; // jshint ;_;


 /* MODAL CLASS DEFINITION
  * ====================== */

  var Modal = function (element, options) {
    this.options = options
    this.$element = $(element)
      .delegate('[data-dismiss="modal"]', 'click.dismiss.modal', $.proxy(this.hide, this))
    this.options.remote && this.$element.find('.modal-body').load(this.options.remote)
  }

  Modal.prototype = {

      constructor: Modal

    , toggle: function () {
        return this[!this.isShown ? 'show' : 'hide']()
      }

    , show: function () {
        var that = this
          , e = $.Event('show')

        this.$element.trigger(e)

        if (this.isShown || e.isDefaultPrevented()) return

        $('body').addClass('modal-open')

        this.isShown = true

        this.escape()

        this.backdrop(function () {
          var transition = $.support.transition && that.$element.hasClass('fade')

          if (!that.$element.parent().length) {
            that.$element.appendTo(document.body) //don't move modals dom position
          }

          that.$element
            .show()

          if (transition) {
            that.$element[0].offsetWidth // force reflow
          }

          that.$element
            .addClass('in')
            .attr('aria-hidden', false)
            .focus()

          that.enforceFocus()

          transition ?
            that.$element.one($.support.transition.end, function () { that.$element.trigger('shown') }) :
            that.$element.trigger('shown')

        })
      }

    , hide: function (e) {
        e && e.preventDefault()

        var that = this

        e = $.Event('hide')

        this.$element.trigger(e)

        if (!this.isShown || e.isDefaultPrevented()) return

        this.isShown = false

        $('body').removeClass('modal-open')

        this.escape()

        $(document).off('focusin.modal')

        this.$element
          .removeClass('in')
          .attr('aria-hidden', true)

        $.support.transition && this.$element.hasClass('fade') ?
          this.hideWithTransition() :
          this.hideModal()
      }

    , enforceFocus: function () {
        var that = this
        $(document).on('focusin.modal', function (e) {
          if (that.$element[0] !== e.target && !that.$element.has(e.target).length) {
            that.$element.focus()
          }
        })
      }

    , escape: function () {
        var that = this
        if (this.isShown && this.options.keyboard) {
          this.$element.on('keyup.dismiss.modal', function ( e ) {
            e.which == 27 && that.hide()
          })
        } else if (!this.isShown) {
          this.$element.off('keyup.dismiss.modal')
        }
      }

    , hideWithTransition: function () {
        var that = this
          , timeout = setTimeout(function () {
              that.$element.off($.support.transition.end)
              that.hideModal()
            }, 500)

        this.$element.one($.support.transition.end, function () {
          clearTimeout(timeout)
          that.hideModal()
        })
      }

    , hideModal: function (that) {
        this.$element
          .hide()
          .trigger('hidden')

        this.backdrop()
      }

    , removeBackdrop: function () {
        this.$backdrop.remove()
        this.$backdrop = null
      }

    , backdrop: function (callback) {
        var that = this
          , animate = this.$element.hasClass('fade') ? 'fade' : ''

        if (this.isShown && this.options.backdrop) {
          var doAnimate = $.support.transition && animate

          this.$backdrop = $('<div class="modal-backdrop ' + animate + '" />')
            .appendTo(document.body)

          if (this.options.backdrop != 'static') {
            this.$backdrop.click($.proxy(this.hide, this))
          }

          if (doAnimate) this.$backdrop[0].offsetWidth // force reflow

          this.$backdrop.addClass('in')

          doAnimate ?
            this.$backdrop.one($.support.transition.end, callback) :
            callback()

        } else if (!this.isShown && this.$backdrop) {
          this.$backdrop.removeClass('in')

          $.support.transition && this.$element.hasClass('fade')?
            this.$backdrop.one($.support.transition.end, $.proxy(this.removeBackdrop, this)) :
            this.removeBackdrop()

        } else if (callback) {
          callback()
        }
      }
  }


 /* MODAL PLUGIN DEFINITION
  * ======================= */

  $.fn.modal = function (option) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('modal')
        , options = $.extend({}, $.fn.modal.defaults, $this.data(), typeof option == 'object' && option)
      if (!data) $this.data('modal', (data = new Modal(this, options)))
      if (typeof option == 'string') data[option]()
      else if (options.show) data.show()
    })
  }

  $.fn.modal.defaults = {
      backdrop: true
    , keyboard: true
    , show: true
  }

  $.fn.modal.Constructor = Modal


 /* MODAL DATA-API
  * ============== */

  $(function () {
    $('body').on('click.modal.data-api', '[data-toggle="modal"]', function ( e ) {
      var $this = $(this)
        , href = $this.attr('href')
        , $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, ''))) //strip for ie7
        , option = $target.data('modal') ? 'toggle' : $.extend({ remote: !/#/.test(href) && href }, $target.data(), $this.data())

      e.preventDefault()

      $target
        .modal(option)
        .one('hide', function () {
          $this.focus()
        })
    })
  })

}(window.jQuery);
/* ============================================================
 * bootstrap-dropdown.js v2.1.0
 * http://twitter.github.com/bootstrap/javascript.html#dropdowns
 * ============================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ============================================================ */


!function ($) {

  "use strict"; // jshint ;_;


 /* DROPDOWN CLASS DEFINITION
  * ========================= */

  var toggle = '[data-toggle=dropdown]'
    , Dropdown = function (element) {
        var $el = $(element).on('click.dropdown.data-api', this.toggle)
        $('html').on('click.dropdown.data-api', function () {
          $el.parent().removeClass('open')
        })
      }

  Dropdown.prototype = {

    constructor: Dropdown

  , toggle: function (e) {
      var $this = $(this)
        , $parent
        , isActive

      if ($this.is('.disabled, :disabled')) return

      $parent = getParent($this)

      isActive = $parent.hasClass('open')

      clearMenus()

      if (!isActive) {
        $parent.toggleClass('open')
        $this.focus()
      }

      return false
    }

  , keydown: function (e) {
      var $this
        , $items
        , $active
        , $parent
        , isActive
        , index

      if (!/(38|40|27)/.test(e.keyCode)) return

      $this = $(this)

      e.preventDefault()
      e.stopPropagation()

      if ($this.is('.disabled, :disabled')) return

      $parent = getParent($this)

      isActive = $parent.hasClass('open')

      if (!isActive || (isActive && e.keyCode == 27)) return $this.click()

      $items = $('[role=menu] li:not(.divider) a', $parent)

      if (!$items.length) return

      index = $items.index($items.filter(':focus'))

      if (e.keyCode == 38 && index > 0) index--                                        // up
      if (e.keyCode == 40 && index < $items.length - 1) index++                        // down
      if (!~index) index = 0

      $items
        .eq(index)
        .focus()
    }

  }

  function clearMenus() {
    getParent($(toggle))
      .removeClass('open')
  }

  function getParent($this) {
    var selector = $this.attr('data-target')
      , $parent

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') //strip for ie7
    }

    $parent = $(selector)
    $parent.length || ($parent = $this.parent())

    return $parent
  }


  /* DROPDOWN PLUGIN DEFINITION
   * ========================== */

  $.fn.dropdown = function (option) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('dropdown')
      if (!data) $this.data('dropdown', (data = new Dropdown(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  $.fn.dropdown.Constructor = Dropdown


  /* APPLY TO STANDARD DROPDOWN ELEMENTS
   * =================================== */

  $(function () {
    $('html')
      .on('click.dropdown.data-api touchstart.dropdown.data-api', clearMenus)
    $('body')
      .on('click.dropdown touchstart.dropdown.data-api', '.dropdown', function (e) { e.stopPropagation() })
      .on('click.dropdown.data-api touchstart.dropdown.data-api'  , toggle, Dropdown.prototype.toggle)
      .on('keydown.dropdown.data-api touchstart.dropdown.data-api', toggle + ', [role=menu]' , Dropdown.prototype.keydown)
  })

}(window.jQuery);
/* =============================================================
 * bootstrap-scrollspy.js v2.1.0
 * http://twitter.github.com/bootstrap/javascript.html#scrollspy
 * =============================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ============================================================== */


!function ($) {

  "use strict"; // jshint ;_;


 /* SCROLLSPY CLASS DEFINITION
  * ========================== */

  function ScrollSpy(element, options) {
    var process = $.proxy(this.process, this)
      , $element = $(element).is('body') ? $(window) : $(element)
      , href
    this.options = $.extend({}, $.fn.scrollspy.defaults, options)
    this.$scrollElement = $element.on('scroll.scroll-spy.data-api', process)
    this.selector = (this.options.target
      || ((href = $(element).attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) //strip for ie7
      || '') + ' .nav li > a'
    this.$body = $('body')
    this.refresh()
    this.process()
  }

  ScrollSpy.prototype = {

      constructor: ScrollSpy

    , refresh: function () {
        var self = this
          , $targets

        this.offsets = $([])
        this.targets = $([])

        $targets = this.$body
          .find(this.selector)
          .map(function () {
            var $el = $(this)
              , href = $el.data('target') || $el.attr('href')
              , $href = /^#\w/.test(href) && $(href)
            return ( $href
              && $href.length
              && [[ $href.position().top, href ]] ) || null
          })
          .sort(function (a, b) { return a[0] - b[0] })
          .each(function () {
            self.offsets.push(this[0])
            self.targets.push(this[1])
          })
      }

    , process: function () {
        var scrollTop = this.$scrollElement.scrollTop() + this.options.offset
          , scrollHeight = this.$scrollElement[0].scrollHeight || this.$body[0].scrollHeight
          , maxScroll = scrollHeight - this.$scrollElement.height()
          , offsets = this.offsets
          , targets = this.targets
          , activeTarget = this.activeTarget
          , i

        if (scrollTop >= maxScroll) {
          return activeTarget != (i = targets.last()[0])
            && this.activate ( i )
        }

        for (i = offsets.length; i--;) {
          activeTarget != targets[i]
            && scrollTop >= offsets[i]
            && (!offsets[i + 1] || scrollTop <= offsets[i + 1])
            && this.activate( targets[i] )
        }
      }

    , activate: function (target) {
        var active
          , selector

        this.activeTarget = target

        $(this.selector)
          .parent('.active')
          .removeClass('active')

        selector = this.selector
          + '[data-target="' + target + '"],'
          + this.selector + '[href="' + target + '"]'

        active = $(selector)
          .parent('li')
          .addClass('active')

        if (active.parent('.dropdown-menu').length)  {
          active = active.closest('li.dropdown').addClass('active')
        }

        active.trigger('activate')
      }

  }


 /* SCROLLSPY PLUGIN DEFINITION
  * =========================== */

  $.fn.scrollspy = function (option) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('scrollspy')
        , options = typeof option == 'object' && option
      if (!data) $this.data('scrollspy', (data = new ScrollSpy(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.scrollspy.Constructor = ScrollSpy

  $.fn.scrollspy.defaults = {
    offset: 10
  }


 /* SCROLLSPY DATA-API
  * ================== */

  $(window).on('load', function () {
    $('[data-spy="scroll"]').each(function () {
      var $spy = $(this)
      $spy.scrollspy($spy.data())
    })
  })

}(window.jQuery);
/* ========================================================
 * bootstrap-tab.js v2.1.0
 * http://twitter.github.com/bootstrap/javascript.html#tabs
 * ========================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================== */


!function ($) {

  "use strict"; // jshint ;_;


 /* TAB CLASS DEFINITION
  * ==================== */

  var Tab = function (element) {
    this.element = $(element)
  }

  Tab.prototype = {

    constructor: Tab

  , show: function () {
      var $this = this.element
        , $ul = $this.closest('ul:not(.dropdown-menu)')
        , selector = $this.attr('data-target')
        , previous
        , $target
        , e

      if (!selector) {
        selector = $this.attr('href')
        selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') //strip for ie7
      }

      if ( $this.parent('li').hasClass('active') ) return

      previous = $ul.find('.active a').last()[0]

      e = $.Event('show', {
        relatedTarget: previous
      })

      $this.trigger(e)

      if (e.isDefaultPrevented()) return

      $target = $(selector)

      this.activate($this.parent('li'), $ul)
      this.activate($target, $target.parent(), function () {
        $this.trigger({
          type: 'shown'
        , relatedTarget: previous
        })
      })
    }

  , activate: function ( element, container, callback) {
      var $active = container.find('> .active')
        , transition = callback
            && $.support.transition
            && $active.hasClass('fade')

      function next() {
        $active
          .removeClass('active')
          .find('> .dropdown-menu > .active')
          .removeClass('active')

        element.addClass('active')

        if (transition) {
          element[0].offsetWidth // reflow for transition
          element.addClass('in')
        } else {
          element.removeClass('fade')
        }

        if ( element.parent('.dropdown-menu') ) {
          element.closest('li.dropdown').addClass('active')
        }

        callback && callback()
      }

      transition ?
        $active.one($.support.transition.end, next) :
        next()

      $active.removeClass('in')
    }
  }


 /* TAB PLUGIN DEFINITION
  * ===================== */

  $.fn.tab = function ( option ) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('tab')
      if (!data) $this.data('tab', (data = new Tab(this)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.tab.Constructor = Tab


 /* TAB DATA-API
  * ============ */

  $(function () {
    $('body').on('click.tab.data-api', '[data-toggle="tab"], [data-toggle="pill"]', function (e) {
      e.preventDefault()
      $(this).tab('show')
    })
  })

}(window.jQuery);
/* ===========================================================
 * bootstrap-tooltip.js v2.1.0
 * http://twitter.github.com/bootstrap/javascript.html#tooltips
 * Inspired by the original jQuery.tipsy by Jason Frame
 * ===========================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */


!function ($) {

  "use strict"; // jshint ;_;


 /* TOOLTIP PUBLIC CLASS DEFINITION
  * =============================== */

  var Tooltip = function (element, options) {
    this.init('tooltip', element, options)
  }

  Tooltip.prototype = {

    constructor: Tooltip

  , init: function (type, element, options) {
      var eventIn
        , eventOut

      this.type = type
      this.$element = $(element)
      this.options = this.getOptions(options)
      this.enabled = true

      if (this.options.trigger == 'click') {
        this.$element.on('click.' + this.type, this.options.selector, $.proxy(this.toggle, this))
      } else if (this.options.trigger != 'manual') {
        eventIn = this.options.trigger == 'hover' ? 'mouseenter' : 'focus'
        eventOut = this.options.trigger == 'hover' ? 'mouseleave' : 'blur'
        this.$element.on(eventIn + '.' + this.type, this.options.selector, $.proxy(this.enter, this))
        this.$element.on(eventOut + '.' + this.type, this.options.selector, $.proxy(this.leave, this))
      }

      this.options.selector ?
        (this._options = $.extend({}, this.options, { trigger: 'manual', selector: '' })) :
        this.fixTitle()
    }

  , getOptions: function (options) {
      options = $.extend({}, $.fn[this.type].defaults, options, this.$element.data())

      if (options.delay && typeof options.delay == 'number') {
        options.delay = {
          show: options.delay
        , hide: options.delay
        }
      }

      return options
    }

  , enter: function (e) {
      var self = $(e.currentTarget)[this.type](this._options).data(this.type)

      if (!self.options.delay || !self.options.delay.show) return self.show()

      clearTimeout(this.timeout)
      self.hoverState = 'in'
      this.timeout = setTimeout(function() {
        if (self.hoverState == 'in') self.show()
      }, self.options.delay.show)
    }

  , leave: function (e) {
      var self = $(e.currentTarget)[this.type](this._options).data(this.type)

      if (this.timeout) clearTimeout(this.timeout)
      if (!self.options.delay || !self.options.delay.hide) return self.hide()

      self.hoverState = 'out'
      this.timeout = setTimeout(function() {
        if (self.hoverState == 'out') self.hide()
      }, self.options.delay.hide)
    }

  , show: function () {
      var $tip
        , inside
        , pos
        , actualWidth
        , actualHeight
        , placement
        , tp

      if (this.hasContent() && this.enabled) {
        $tip = this.tip()
        this.setContent()

        if (this.options.animation) {
          $tip.addClass('fade')
        }

        placement = typeof this.options.placement == 'function' ?
          this.options.placement.call(this, $tip[0], this.$element[0]) :
          this.options.placement

        inside = /in/.test(placement)

        $tip
          .remove()
          .css({ top: 0, left: 0, display: 'block' })
          .appendTo(inside ? this.$element : document.body)

        pos = this.getPosition(inside)

        actualWidth = $tip[0].offsetWidth
        actualHeight = $tip[0].offsetHeight

        switch (inside ? placement.split(' ')[1] : placement) {
          case 'bottom':
            tp = {top: pos.top + pos.height, left: pos.left + pos.width / 2 - actualWidth / 2}
            break
          case 'top':
            tp = {top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2}
            break
          case 'left':
            tp = {top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth}
            break
          case 'right':
            tp = {top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width}
            break
        }

        $tip
          .css(tp)
          .addClass(placement)
          .addClass('in')
      }
    }

  , setContent: function () {
      var $tip = this.tip()
        , title = this.getTitle()

      $tip.find('.tooltip-inner')[this.options.html ? 'html' : 'text'](title)
      $tip.removeClass('fade in top bottom left right')
    }

  , hide: function () {
      var that = this
        , $tip = this.tip()

      $tip.removeClass('in')

      function removeWithAnimation() {
        var timeout = setTimeout(function () {
          $tip.off($.support.transition.end).remove()
        }, 500)

        $tip.one($.support.transition.end, function () {
          clearTimeout(timeout)
          $tip.remove()
        })
      }

      $.support.transition && this.$tip.hasClass('fade') ?
        removeWithAnimation() :
        $tip.remove()

      return this
    }

  , fixTitle: function () {
      var $e = this.$element
      if ($e.attr('title') || typeof($e.attr('data-original-title')) != 'string') {
        $e.attr('data-original-title', $e.attr('title') || '').removeAttr('title')
      }
    }

  , hasContent: function () {
      return this.getTitle()
    }

  , getPosition: function (inside) {
      return $.extend({}, (inside ? {top: 0, left: 0} : this.$element.offset()), {
        width: this.$element[0].offsetWidth
      , height: this.$element[0].offsetHeight
      })
    }

  , getTitle: function () {
      var title
        , $e = this.$element
        , o = this.options

      title = $e.attr('data-original-title')
        || (typeof o.title == 'function' ? o.title.call($e[0]) :  o.title)

      return title
    }

  , tip: function () {
      return this.$tip = this.$tip || $(this.options.template)
    }

  , validate: function () {
      if (!this.$element[0].parentNode) {
        this.hide()
        this.$element = null
        this.options = null
      }
    }

  , enable: function () {
      this.enabled = true
    }

  , disable: function () {
      this.enabled = false
    }

  , toggleEnabled: function () {
      this.enabled = !this.enabled
    }

  , toggle: function () {
      this[this.tip().hasClass('in') ? 'hide' : 'show']()
    }

  , destroy: function () {
      this.hide().$element.off('.' + this.type).removeData(this.type)
    }

  }


 /* TOOLTIP PLUGIN DEFINITION
  * ========================= */

  $.fn.tooltip = function ( option ) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('tooltip')
        , options = typeof option == 'object' && option
      if (!data) $this.data('tooltip', (data = new Tooltip(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.tooltip.Constructor = Tooltip

  $.fn.tooltip.defaults = {
    animation: true
  , placement: 'top'
  , selector: false
  , template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'
  , trigger: 'hover'
  , title: ''
  , delay: 0
  , html: true
  }

}(window.jQuery);

/* ===========================================================
 * bootstrap-popover.js v2.1.0
 * http://twitter.github.com/bootstrap/javascript.html#popovers
 * ===========================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =========================================================== */


!function ($) {

  "use strict"; // jshint ;_;


 /* POPOVER PUBLIC CLASS DEFINITION
  * =============================== */

  var Popover = function (element, options) {
    this.init('popover', element, options)
  }


  /* NOTE: POPOVER EXTENDS BOOTSTRAP-TOOLTIP.js
     ========================================== */

  Popover.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype, {

    constructor: Popover

  , setContent: function () {
      var $tip = this.tip()
        , title = this.getTitle()
        , content = this.getContent()

      $tip.find('.popover-title')[this.options.html ? 'html' : 'text'](title)
      $tip.find('.popover-content > *')[this.options.html ? 'html' : 'text'](content)

      $tip.removeClass('fade top bottom left right in')
    }

  , hasContent: function () {
      return this.getTitle() || this.getContent()
    }

  , getContent: function () {
      var content
        , $e = this.$element
        , o = this.options

      content = $e.attr('data-content')
        || (typeof o.content == 'function' ? o.content.call($e[0]) :  o.content)

      return content
    }

  , tip: function () {
      if (!this.$tip) {
        this.$tip = $(this.options.template)
      }
      return this.$tip
    }

  , destroy: function () {
      this.hide().$element.off('.' + this.type).removeData(this.type)
    }

  })


 /* POPOVER PLUGIN DEFINITION
  * ======================= */

  $.fn.popover = function (option) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('popover')
        , options = typeof option == 'object' && option
      if (!data) $this.data('popover', (data = new Popover(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.popover.Constructor = Popover

  $.fn.popover.defaults = $.extend({} , $.fn.tooltip.defaults, {
    placement: 'right'
  , trigger: 'click'
  , content: ''
  , template: '<div class="popover"><div class="arrow"></div><div class="popover-inner"><h3 class="popover-title"></h3><div class="popover-content"><p></p></div></div></div>'
  })

}(window.jQuery);
/* ==========================================================
 * bootstrap-affix.js v2.1.0
 * http://twitter.github.com/bootstrap/javascript.html#affix
 * ==========================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */


!function ($) {

  "use strict"; // jshint ;_;


 /* AFFIX CLASS DEFINITION
  * ====================== */

  var Affix = function (element, options) {
    this.options = $.extend({}, $.fn.affix.defaults, options)
    this.$window = $(window).on('scroll.affix.data-api', $.proxy(this.checkPosition, this))
    this.$element = $(element)
    this.checkPosition()
  }

  Affix.prototype.checkPosition = function () {
    if (!this.$element.is(':visible')) return

    var scrollHeight = $(document).height()
      , scrollTop = this.$window.scrollTop()
      , position = this.$element.offset()
      , offset = this.options.offset
      , offsetBottom = offset.bottom
      , offsetTop = offset.top
      , reset = 'affix affix-top affix-bottom'
      , affix

    if (typeof offset != 'object') offsetBottom = offsetTop = offset
    if (typeof offsetTop == 'function') offsetTop = offset.top()
    if (typeof offsetBottom == 'function') offsetBottom = offset.bottom()

    affix = this.unpin != null && (scrollTop + this.unpin <= position.top) ?
      false    : offsetBottom != null && (position.top + this.$element.height() >= scrollHeight - offsetBottom) ?
      'bottom' : offsetTop != null && scrollTop <= offsetTop ?
      'top'    : false

    if (this.affixed === affix) return

    this.affixed = affix
    this.unpin = affix == 'bottom' ? position.top - scrollTop : null

    this.$element.removeClass(reset).addClass('affix' + (affix ? '-' + affix : ''))
  }


 /* AFFIX PLUGIN DEFINITION
  * ======================= */

  $.fn.affix = function (option) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('affix')
        , options = typeof option == 'object' && option
      if (!data) $this.data('affix', (data = new Affix(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.affix.Constructor = Affix

  $.fn.affix.defaults = {
    offset: 0
  }


 /* AFFIX DATA-API
  * ============== */

  $(window).on('load', function () {
    $('[data-spy="affix"]').each(function () {
      var $spy = $(this)
        , data = $spy.data()

      data.offset = data.offset || {}

      data.offsetBottom && (data.offset.bottom = data.offsetBottom)
      data.offsetTop && (data.offset.top = data.offsetTop)

      $spy.affix(data)
    })
  })


}(window.jQuery);
/* ==========================================================
 * bootstrap-alert.js v2.1.0
 * http://twitter.github.com/bootstrap/javascript.html#alerts
 * ==========================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */


!function ($) {

  "use strict"; // jshint ;_;


 /* ALERT CLASS DEFINITION
  * ====================== */

  var dismiss = '[data-dismiss="alert"]'
    , Alert = function (el) {
        $(el).on('click', dismiss, this.close)
      }

  Alert.prototype.close = function (e) {
    var $this = $(this)
      , selector = $this.attr('data-target')
      , $parent

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') //strip for ie7
    }

    $parent = $(selector)

    e && e.preventDefault()

    $parent.length || ($parent = $this.hasClass('alert') ? $this : $this.parent())

    $parent.trigger(e = $.Event('close'))

    if (e.isDefaultPrevented()) return

    $parent.removeClass('in')

    function removeElement() {
      $parent
        .trigger('closed')
        .remove()
    }

    $.support.transition && $parent.hasClass('fade') ?
      $parent.on($.support.transition.end, removeElement) :
      removeElement()
  }


 /* ALERT PLUGIN DEFINITION
  * ======================= */

  $.fn.alert = function (option) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('alert')
      if (!data) $this.data('alert', (data = new Alert(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  $.fn.alert.Constructor = Alert


 /* ALERT DATA-API
  * ============== */

  $(function () {
    $('body').on('click.alert.data-api', dismiss, Alert.prototype.close)
  })

}(window.jQuery);
/* ============================================================
 * bootstrap-button.js v2.1.0
 * http://twitter.github.com/bootstrap/javascript.html#buttons
 * ============================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ============================================================ */


!function ($) {

  "use strict"; // jshint ;_;


 /* BUTTON PUBLIC CLASS DEFINITION
  * ============================== */

  var Button = function (element, options) {
    this.$element = $(element)
    this.options = $.extend({}, $.fn.button.defaults, options)
  }

  Button.prototype.setState = function (state) {
    var d = 'disabled'
      , $el = this.$element
      , data = $el.data()
      , val = $el.is('input') ? 'val' : 'html'

    state = state + 'Text'
    data.resetText || $el.data('resetText', $el[val]())

    $el[val](data[state] || this.options[state])

    // push to event loop to allow forms to submit
    setTimeout(function () {
      state == 'loadingText' ?
        $el.addClass(d).attr(d, d) :
        $el.removeClass(d).removeAttr(d)
    }, 0)
  }

  Button.prototype.toggle = function () {
    var $parent = this.$element.parent('[data-toggle="buttons-radio"]')

    $parent && $parent
      .find('.active')
      .removeClass('active')

    this.$element.toggleClass('active')
  }


 /* BUTTON PLUGIN DEFINITION
  * ======================== */

  $.fn.button = function (option) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('button')
        , options = typeof option == 'object' && option
      if (!data) $this.data('button', (data = new Button(this, options)))
      if (option == 'toggle') data.toggle()
      else if (option) data.setState(option)
    })
  }

  $.fn.button.defaults = {
    loadingText: 'loading...'
  }

  $.fn.button.Constructor = Button


 /* BUTTON DATA-API
  * =============== */

  $(function () {
    $('body').on('click.button.data-api', '[data-toggle^=button]', function ( e ) {
      var $btn = $(e.target)
      if (!$btn.hasClass('btn')) $btn = $btn.closest('.btn')
      $btn.button('toggle')
    })
  })

}(window.jQuery);
/* =============================================================
 * bootstrap-collapse.js v2.1.0
 * http://twitter.github.com/bootstrap/javascript.html#collapse
 * =============================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ============================================================ */


!function ($) {

  "use strict"; // jshint ;_;


 /* COLLAPSE PUBLIC CLASS DEFINITION
  * ================================ */

  var Collapse = function (element, options) {
    this.$element = $(element)
    this.options = $.extend({}, $.fn.collapse.defaults, options)

    if (this.options.parent) {
      this.$parent = $(this.options.parent)
    }

    this.options.toggle && this.toggle()
  }

  Collapse.prototype = {

    constructor: Collapse

  , dimension: function () {
      var hasWidth = this.$element.hasClass('width')
      return hasWidth ? 'width' : 'height'
    }

  , show: function () {
      var dimension
        , scroll
        , actives
        , hasData

      if (this.transitioning) return

      dimension = this.dimension()
      scroll = $.camelCase(['scroll', dimension].join('-'))
      actives = this.$parent && this.$parent.find('> .accordion-group > .in')

      if (actives && actives.length) {
        hasData = actives.data('collapse')
        if (hasData && hasData.transitioning) return
        actives.collapse('hide')
        hasData || actives.data('collapse', null)
      }

      this.$element[dimension](0)
      this.transition('addClass', $.Event('show'), 'shown')
      $.support.transition && this.$element[dimension](this.$element[0][scroll])
    }

  , hide: function () {
      var dimension
      if (this.transitioning) return
      dimension = this.dimension()
      this.reset(this.$element[dimension]())
      this.transition('removeClass', $.Event('hide'), 'hidden')
      this.$element[dimension](0)
    }

  , reset: function (size) {
      var dimension = this.dimension()

      this.$element
        .removeClass('collapse')
        [dimension](size || 'auto')
        [0].offsetWidth

      this.$element[size !== null ? 'addClass' : 'removeClass']('collapse')

      return this
    }

  , transition: function (method, startEvent, completeEvent) {
      var that = this
        , complete = function () {
            if (startEvent.type == 'show') that.reset()
            that.transitioning = 0
            that.$element.trigger(completeEvent)
          }

      this.$element.trigger(startEvent)

      if (startEvent.isDefaultPrevented()) return

      this.transitioning = 1

      this.$element[method]('in')

      $.support.transition && this.$element.hasClass('collapse') ?
        this.$element.one($.support.transition.end, complete) :
        complete()
    }

  , toggle: function () {
      this[this.$element.hasClass('in') ? 'hide' : 'show']()
    }

  }


 /* COLLAPSIBLE PLUGIN DEFINITION
  * ============================== */

  $.fn.collapse = function (option) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('collapse')
        , options = typeof option == 'object' && option
      if (!data) $this.data('collapse', (data = new Collapse(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.collapse.defaults = {
    toggle: true
  }

  $.fn.collapse.Constructor = Collapse


 /* COLLAPSIBLE DATA-API
  * ==================== */

  $(function () {
    $('body').on('click.collapse.data-api', '[data-toggle=collapse]', function (e) {
      var $this = $(this), href
        , target = $this.attr('data-target')
          || e.preventDefault()
          || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '') //strip for ie7
        , option = $(target).data('collapse') ? 'toggle' : $this.data()
      $this[$(target).hasClass('in') ? 'addClass' : 'removeClass']('collapsed')
      $(target).collapse(option)
    })
  })

}(window.jQuery);
/* ==========================================================
 * bootstrap-carousel.js v2.1.0
 * http://twitter.github.com/bootstrap/javascript.html#carousel
 * ==========================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */


!function ($) {

  "use strict"; // jshint ;_;


 /* CAROUSEL CLASS DEFINITION
  * ========================= */

  var Carousel = function (element, options) {
    this.$element = $(element)
    this.options = options
    this.options.slide && this.slide(this.options.slide)
    this.options.pause == 'hover' && this.$element
      .on('mouseenter', $.proxy(this.pause, this))
      .on('mouseleave', $.proxy(this.cycle, this))
  }

  Carousel.prototype = {

    cycle: function (e) {
      if (!e) this.paused = false
      this.options.interval
        && !this.paused
        && (this.interval = setInterval($.proxy(this.next, this), this.options.interval))
      return this
    }

  , to: function (pos) {
      var $active = this.$element.find('.item.active')
        , children = $active.parent().children()
        , activePos = children.index($active)
        , that = this

      if (pos > (children.length - 1) || pos < 0) return

      if (this.sliding) {
        return this.$element.one('slid', function () {
          that.to(pos)
        })
      }

      if (activePos == pos) {
        return this.pause().cycle()
      }

      return this.slide(pos > activePos ? 'next' : 'prev', $(children[pos]))
    }

  , pause: function (e) {
      if (!e) this.paused = true
      if (this.$element.find('.next, .prev').length && $.support.transition.end) {
        this.$element.trigger($.support.transition.end)
        this.cycle()
      }
      clearInterval(this.interval)
      this.interval = null
      return this
    }

  , next: function () {
      if (this.sliding) return
      return this.slide('next')
    }

  , prev: function () {
      if (this.sliding) return
      return this.slide('prev')
    }

  , slide: function (type, next) {
      var $active = this.$element.find('.item.active')
        , $next = next || $active[type]()
        , isCycling = this.interval
        , direction = type == 'next' ? 'left' : 'right'
        , fallback  = type == 'next' ? 'first' : 'last'
        , that = this
        , e = $.Event('slide', {
            relatedTarget: $next[0]
          })

      this.sliding = true

      isCycling && this.pause()

      $next = $next.length ? $next : this.$element.find('.item')[fallback]()

      if ($next.hasClass('active')) return

      if ($.support.transition && this.$element.hasClass('slide')) {
        this.$element.trigger(e)
        if (e.isDefaultPrevented()) return
        $next.addClass(type)
        $next[0].offsetWidth // force reflow
        $active.addClass(direction)
        $next.addClass(direction)
        this.$element.one($.support.transition.end, function () {
          $next.removeClass([type, direction].join(' ')).addClass('active')
          $active.removeClass(['active', direction].join(' '))
          that.sliding = false
          setTimeout(function () { that.$element.trigger('slid') }, 0)
        })
      } else {
        this.$element.trigger(e)
        if (e.isDefaultPrevented()) return
        $active.removeClass('active')
        $next.addClass('active')
        this.sliding = false
        this.$element.trigger('slid')
      }

      isCycling && this.cycle()

      return this
    }

  }


 /* CAROUSEL PLUGIN DEFINITION
  * ========================== */

  $.fn.carousel = function (option) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('carousel')
        , options = $.extend({}, $.fn.carousel.defaults, typeof option == 'object' && option)
        , action = typeof option == 'string' ? option : options.slide
      if (!data) $this.data('carousel', (data = new Carousel(this, options)))
      if (typeof option == 'number') data.to(option)
      else if (action) data[action]()
      else if (options.interval) data.cycle()
    })
  }

  $.fn.carousel.defaults = {
    interval: 5000
  , pause: 'hover'
  }

  $.fn.carousel.Constructor = Carousel


 /* CAROUSEL DATA-API
  * ================= */

  $(function () {
    $('body').on('click.carousel.data-api', '[data-slide]', function ( e ) {
      var $this = $(this), href
        , $target = $($this.attr('data-target') || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) //strip for ie7
        , options = !$target.data('modal') && $.extend({}, $target.data(), $this.data())
      $target.carousel(options)
      e.preventDefault()
    })
  })

}(window.jQuery);
/* =============================================================
 * bootstrap-typeahead.js v2.1.0
 * http://twitter.github.com/bootstrap/javascript.html#typeahead
 * =============================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ============================================================ */


!function($){

  "use strict"; // jshint ;_;


 /* TYPEAHEAD PUBLIC CLASS DEFINITION
  * ================================= */

  var Typeahead = function (element, options) {
    this.$element = $(element)
    this.options = $.extend({}, $.fn.typeahead.defaults, options)
    this.matcher = this.options.matcher || this.matcher
    this.sorter = this.options.sorter || this.sorter
    this.highlighter = this.options.highlighter || this.highlighter
    this.updater = this.options.updater || this.updater
    this.$menu = $(this.options.menu).appendTo('body')
    this.source = this.options.source
    this.shown = false
    this.listen()
  }

  Typeahead.prototype = {

    constructor: Typeahead

  , select: function () {
      var val = this.$menu.find('.active').attr('data-value')
      this.$element
        .val(this.updater(val))
        .change()
      return this.hide()
    }

  , updater: function (item) {
      return item
    }

  , show: function () {
      var pos = $.extend({}, this.$element.offset(), {
        height: this.$element[0].offsetHeight
      })

      this.$menu.css({
        top: pos.top + pos.height
      , left: pos.left
      })

      this.$menu.show()
      this.shown = true
      return this
    }

  , hide: function () {
      this.$menu.hide()
      this.shown = false
      return this
    }

  , lookup: function (event) {
      var items

      this.query = this.$element.val()

      if (!this.query || this.query.length < this.options.minLength) {
        return this.shown ? this.hide() : this
      }

      items = $.isFunction(this.source) ? this.source(this.query, $.proxy(this.process, this)) : this.source

      return items ? this.process(items) : this
    }

  , process: function (items) {
      var that = this

      items = $.grep(items, function (item) {
        return that.matcher(item)
      })

      items = this.sorter(items)

      if (!items.length) {
        return this.shown ? this.hide() : this
      }

      return this.render(items.slice(0, this.options.items)).show()
    }

  , matcher: function (item) {
      return ~item.toLowerCase().indexOf(this.query.toLowerCase())
    }

  , sorter: function (items) {
      var beginswith = []
        , caseSensitive = []
        , caseInsensitive = []
        , item

      while (item = items.shift()) {
        if (!item.toLowerCase().indexOf(this.query.toLowerCase())) beginswith.push(item)
        else if (~item.indexOf(this.query)) caseSensitive.push(item)
        else caseInsensitive.push(item)
      }

      return beginswith.concat(caseSensitive, caseInsensitive)
    }

  , highlighter: function (item) {
      var query = this.query.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, '\\$&')
      return item.replace(new RegExp('(' + query + ')', 'ig'), function ($1, match) {
        return '<strong>' + match + '</strong>'
      })
    }

  , render: function (items) {
      var that = this

      items = $(items).map(function (i, item) {
        i = $(that.options.item).attr('data-value', item)
        i.find('a').html(that.highlighter(item))
        return i[0]
      })

      items.first().addClass('active')
      this.$menu.html(items)
      return this
    }

  , next: function (event) {
      var active = this.$menu.find('.active').removeClass('active')
        , next = active.next()

      if (!next.length) {
        next = $(this.$menu.find('li')[0])
      }

      next.addClass('active')
    }

  , prev: function (event) {
      var active = this.$menu.find('.active').removeClass('active')
        , prev = active.prev()

      if (!prev.length) {
        prev = this.$menu.find('li').last()
      }

      prev.addClass('active')
    }

  , listen: function () {
      this.$element
        .on('blur',     $.proxy(this.blur, this))
        .on('keypress', $.proxy(this.keypress, this))
        .on('keyup',    $.proxy(this.keyup, this))

      if ($.browser.webkit || $.browser.msie) {
        this.$element.on('keydown', $.proxy(this.keydown, this))
      }

      this.$menu
        .on('click', $.proxy(this.click, this))
        .on('mouseenter', 'li', $.proxy(this.mouseenter, this))
    }

  , move: function (e) {
      if (!this.shown) return

      switch(e.keyCode) {
        case 9: // tab
        case 13: // enter
        case 27: // escape
          e.preventDefault()
          break

        case 38: // up arrow
          e.preventDefault()
          this.prev()
          break

        case 40: // down arrow
          e.preventDefault()
          this.next()
          break
      }

      e.stopPropagation()
    }

  , keydown: function (e) {
      this.suppressKeyPressRepeat = !~$.inArray(e.keyCode, [40,38,9,13,27])
      this.move(e)
    }

  , keypress: function (e) {
      if (this.suppressKeyPressRepeat) return
      this.move(e)
    }

  , keyup: function (e) {
      switch(e.keyCode) {
        case 40: // down arrow
        case 38: // up arrow
          break

        case 9: // tab
        case 13: // enter
          if (!this.shown) return
          this.select()
          break

        case 27: // escape
          if (!this.shown) return
          this.hide()
          break

        default:
          this.lookup()
      }

      e.stopPropagation()
      e.preventDefault()
  }

  , blur: function (e) {
      var that = this
      setTimeout(function () { that.hide() }, 150)
    }

  , click: function (e) {
      e.stopPropagation()
      e.preventDefault()
      this.select()
    }

  , mouseenter: function (e) {
      this.$menu.find('.active').removeClass('active')
      $(e.currentTarget).addClass('active')
    }

  }


  /* TYPEAHEAD PLUGIN DEFINITION
   * =========================== */

  $.fn.typeahead = function (option) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('typeahead')
        , options = typeof option == 'object' && option
      if (!data) $this.data('typeahead', (data = new Typeahead(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.typeahead.defaults = {
    source: []
  , items: 8
  , menu: '<ul class="typeahead dropdown-menu"></ul>'
  , item: '<li><a href="#"></a></li>'
  , minLength: 1
  }

  $.fn.typeahead.Constructor = Typeahead


 /*   TYPEAHEAD DATA-API
  * ================== */

  $(function () {
    $('body').on('focus.typeahead.data-api', '[data-provide="typeahead"]', function (e) {
      var $this = $(this)
      if ($this.data('typeahead')) return
      e.preventDefault()
      $this.typeahead($this.data())
    })
  })

}(window.jQuery);
;
(function($) {
  // @todo Document this.
  $.extend($,{ placeholder: {
      browser_supported: function() {
        return this._supported !== undefined ?
          this._supported :
          ( this._supported = !!('placeholder' in $('<input type="text">')[0]) );
      },
      shim: function(opts) {
        var config = {
          color: '#888',
          cls: 'placeholder',
          selector: 'input[placeholder], textarea[placeholder]'
        };
        $.extend(config,opts);
        return !this.browser_supported() && $(config.selector)._placeholder_shim(config);
      }
  }});

  $.extend($.fn,{
    _placeholder_shim: function(config) {
      function calcPositionCss(target)
      {
        var op = $(target).offsetParent().offset();
        var ot = $(target).offset();

        return {
          top: ot.top - op.top,
          left: ot.left - op.left,
          width: $(target).width()
        };
      }
      function adjustToResizing(label) {
      	var $target = label.data('target');
      	if(typeof $target !== "undefined") {
          label.css(calcPositionCss($target));
          $(window).one("resize", function () { adjustToResizing(label); });
        }
      }
      return this.each(function() {
        var $this = $(this);

        if( $this.is(':visible') ) {

          if( $this.data('placeholder') ) {
            var $ol = $this.data('placeholder');
            $ol.css(calcPositionCss($this));
            return true;
          }

          var possible_line_height = {};
          if( !$this.is('textarea') && $this.css('height') != 'auto') {
            possible_line_height = { lineHeight: $this.css('height'), whiteSpace: 'nowrap' };
          }

          var ol = $('<label />')
            .text($this.attr('placeholder'))
            .addClass(config.cls)
            .css($.extend({
              position:'absolute',
              display: 'inline',
              float:'none',
              overflow:'hidden',
              //textAlign: 'left',
              color: config.color,
              cursor: 'text',
              paddingTop: $this.css('padding-top'),
              paddingRight: $this.css('padding-right'),
              paddingBottom: $this.css('padding-bottom'),
              paddingLeft: $this.css('padding-left'),
              fontSize: $this.css('font-size'),
              fontFamily: $this.css('font-family'),
              fontStyle: $this.css('font-style'),
              fontWeight: $this.css('font-weight'),
              textTransform: $this.css('text-transform'),
              backgroundColor: 'transparent',
              zIndex: 99
            }, possible_line_height))
            .css(calcPositionCss(this))
            .attr('for', this.id)
            .data('target',$this)
            .click(function(){
              $(this).data('target').focus();
            })
            .insertBefore(this);
          $this
            .data('placeholder',ol)
            .focus(function(){
              ol.hide();
            }).blur(function() {
              ol[$this.val().length ? 'hide' : 'show']();
            }).triggerHandler('blur');
          $(window).one("resize", function () { adjustToResizing(ol); });
        }
      });
    }
  });
})(jQuery);

jQuery(document).add(window).bind('ready load', function() {
  if (jQuery.placeholder) {
    jQuery.placeholder.shim();
  }
});

;
/*!
 * VERSION: 1.11.8
 * DATE: 2014-05-13
 * UPDATES AND DOCS AT: http://www.greensock.com
 * 
 * Includes all of the following: TweenLite, TweenMax, TimelineLite, TimelineMax, EasePack, CSSPlugin, RoundPropsPlugin, BezierPlugin, AttrPlugin, DirectionalRotationPlugin
 *
 * @license Copyright (c) 2008-2014, GreenSock. All rights reserved.
 * This work is subject to the terms at http://www.greensock.com/terms_of_use.html or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
(window._gsQueue||(window._gsQueue=[])).push(function(){"use strict";window._gsDefine("TweenMax",["core.Animation","core.SimpleTimeline","TweenLite"],function(t,e,i){var s=[].slice,r=function(t,e,s){i.call(this,t,e,s),this._cycle=0,this._yoyo=this.vars.yoyo===!0,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._dirty=!0,this.render=r.prototype.render},n=1e-10,a=i._internals.isSelector,o=i._internals.isArray,h=r.prototype=i.to({},.1,{}),l=[];r.version="1.11.8",h.constructor=r,h.kill()._gc=!1,r.killTweensOf=r.killDelayedCallsTo=i.killTweensOf,r.getTweensOf=i.getTweensOf,r.ticker=i.ticker,h.invalidate=function(){return this._yoyo=this.vars.yoyo===!0,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._uncache(!0),i.prototype.invalidate.call(this)},h.updateTo=function(t,e){var s,r=this.ratio;e&&this._startTime<this._timeline._time&&(this._startTime=this._timeline._time,this._uncache(!1),this._gc?this._enabled(!0,!1):this._timeline.insert(this,this._startTime-this._delay));for(s in t)this.vars[s]=t[s];if(this._initted)if(e)this._initted=!1;else if(this._gc&&this._enabled(!0,!1),this._notifyPluginsOfEnabled&&this._firstPT&&i._onPluginEvent("_onDisable",this),this._time/this._duration>.998){var n=this._time;this.render(0,!0,!1),this._initted=!1,this.render(n,!0,!1)}else if(this._time>0){this._initted=!1,this._init();for(var a,o=1/(1-r),h=this._firstPT;h;)a=h.s+h.c,h.c*=o,h.s=a-h.c,h=h._next}return this},h.render=function(t,e,i){this._initted||0===this._duration&&this.vars.repeat&&this.invalidate();var s,r,a,o,h,_,u,p,c=this._dirty?this.totalDuration():this._totalDuration,f=this._time,m=this._totalTime,d=this._cycle,g=this._duration;if(t>=c?(this._totalTime=c,this._cycle=this._repeat,this._yoyo&&0!==(1&this._cycle)?(this._time=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0):(this._time=g,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1),this._reversed||(s=!0,r="onComplete"),0===g&&(p=this._rawPrevTime,this._startTime===this._timeline._duration&&(t=0),(0===t||0>p||p===n)&&p!==t&&(i=!0,p>n&&(r="onReverseComplete")),this._rawPrevTime=p=!e||t||this._rawPrevTime===t?t:n)):1e-7>t?(this._totalTime=this._time=this._cycle=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0,(0!==m||0===g&&this._rawPrevTime>0&&this._rawPrevTime!==n)&&(r="onReverseComplete",s=this._reversed),0>t?(this._active=!1,0===g&&(this._rawPrevTime>=0&&(i=!0),this._rawPrevTime=p=!e||t||this._rawPrevTime===t?t:n)):this._initted||(i=!0)):(this._totalTime=this._time=t,0!==this._repeat&&(o=g+this._repeatDelay,this._cycle=this._totalTime/o>>0,0!==this._cycle&&this._cycle===this._totalTime/o&&this._cycle--,this._time=this._totalTime-this._cycle*o,this._yoyo&&0!==(1&this._cycle)&&(this._time=g-this._time),this._time>g?this._time=g:0>this._time&&(this._time=0)),this._easeType?(h=this._time/g,_=this._easeType,u=this._easePower,(1===_||3===_&&h>=.5)&&(h=1-h),3===_&&(h*=2),1===u?h*=h:2===u?h*=h*h:3===u?h*=h*h*h:4===u&&(h*=h*h*h*h),this.ratio=1===_?1-h:2===_?h:.5>this._time/g?h/2:1-h/2):this.ratio=this._ease.getRatio(this._time/g)),f===this._time&&!i&&d===this._cycle)return m!==this._totalTime&&this._onUpdate&&(e||this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||l)),void 0;if(!this._initted){if(this._init(),!this._initted||this._gc)return;this._time&&!s?this.ratio=this._ease.getRatio(this._time/g):s&&this._ease._calcEnd&&(this.ratio=this._ease.getRatio(0===this._time?0:1))}for(this._active||!this._paused&&this._time!==f&&t>=0&&(this._active=!0),0===m&&(this._startAt&&(t>=0?this._startAt.render(t,e,i):r||(r="_dummyGS")),this.vars.onStart&&(0!==this._totalTime||0===g)&&(e||this.vars.onStart.apply(this.vars.onStartScope||this,this.vars.onStartParams||l))),a=this._firstPT;a;)a.f?a.t[a.p](a.c*this.ratio+a.s):a.t[a.p]=a.c*this.ratio+a.s,a=a._next;this._onUpdate&&(0>t&&this._startAt&&this._startTime&&this._startAt.render(t,e,i),e||(this._totalTime!==m||s)&&this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||l)),this._cycle!==d&&(e||this._gc||this.vars.onRepeat&&this.vars.onRepeat.apply(this.vars.onRepeatScope||this,this.vars.onRepeatParams||l)),r&&(this._gc||(0>t&&this._startAt&&!this._onUpdate&&this._startTime&&this._startAt.render(t,e,i),s&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!e&&this.vars[r]&&this.vars[r].apply(this.vars[r+"Scope"]||this,this.vars[r+"Params"]||l),0===g&&this._rawPrevTime===n&&p!==n&&(this._rawPrevTime=0)))},r.to=function(t,e,i){return new r(t,e,i)},r.from=function(t,e,i){return i.runBackwards=!0,i.immediateRender=0!=i.immediateRender,new r(t,e,i)},r.fromTo=function(t,e,i,s){return s.startAt=i,s.immediateRender=0!=s.immediateRender&&0!=i.immediateRender,new r(t,e,s)},r.staggerTo=r.allTo=function(t,e,n,h,_,u,p){h=h||0;var c,f,m,d,g=n.delay||0,v=[],y=function(){n.onComplete&&n.onComplete.apply(n.onCompleteScope||this,arguments),_.apply(p||this,u||l)};for(o(t)||("string"==typeof t&&(t=i.selector(t)||t),a(t)&&(t=s.call(t,0))),c=t.length,m=0;c>m;m++){f={};for(d in n)f[d]=n[d];f.delay=g,m===c-1&&_&&(f.onComplete=y),v[m]=new r(t[m],e,f),g+=h}return v},r.staggerFrom=r.allFrom=function(t,e,i,s,n,a,o){return i.runBackwards=!0,i.immediateRender=0!=i.immediateRender,r.staggerTo(t,e,i,s,n,a,o)},r.staggerFromTo=r.allFromTo=function(t,e,i,s,n,a,o,h){return s.startAt=i,s.immediateRender=0!=s.immediateRender&&0!=i.immediateRender,r.staggerTo(t,e,s,n,a,o,h)},r.delayedCall=function(t,e,i,s,n){return new r(e,0,{delay:t,onComplete:e,onCompleteParams:i,onCompleteScope:s,onReverseComplete:e,onReverseCompleteParams:i,onReverseCompleteScope:s,immediateRender:!1,useFrames:n,overwrite:0})},r.set=function(t,e){return new r(t,0,e)},r.isTweening=function(t){return i.getTweensOf(t,!0).length>0};var _=function(t,e){for(var s=[],r=0,n=t._first;n;)n instanceof i?s[r++]=n:(e&&(s[r++]=n),s=s.concat(_(n,e)),r=s.length),n=n._next;return s},u=r.getAllTweens=function(e){return _(t._rootTimeline,e).concat(_(t._rootFramesTimeline,e))};r.killAll=function(t,i,s,r){null==i&&(i=!0),null==s&&(s=!0);var n,a,o,h=u(0!=r),l=h.length,_=i&&s&&r;for(o=0;l>o;o++)a=h[o],(_||a instanceof e||(n=a.target===a.vars.onComplete)&&s||i&&!n)&&(t?a.totalTime(a.totalDuration()):a._enabled(!1,!1))},r.killChildTweensOf=function(t,e){if(null!=t){var n,h,l,_,u,p=i._tweenLookup;if("string"==typeof t&&(t=i.selector(t)||t),a(t)&&(t=s.call(t,0)),o(t))for(_=t.length;--_>-1;)r.killChildTweensOf(t[_],e);else{n=[];for(l in p)for(h=p[l].target.parentNode;h;)h===t&&(n=n.concat(p[l].tweens)),h=h.parentNode;for(u=n.length,_=0;u>_;_++)e&&n[_].totalTime(n[_].totalDuration()),n[_]._enabled(!1,!1)}}};var p=function(t,i,s,r){i=i!==!1,s=s!==!1,r=r!==!1;for(var n,a,o=u(r),h=i&&s&&r,l=o.length;--l>-1;)a=o[l],(h||a instanceof e||(n=a.target===a.vars.onComplete)&&s||i&&!n)&&a.paused(t)};return r.pauseAll=function(t,e,i){p(!0,t,e,i)},r.resumeAll=function(t,e,i){p(!1,t,e,i)},r.globalTimeScale=function(e){var s=t._rootTimeline,r=i.ticker.time;return arguments.length?(e=e||n,s._startTime=r-(r-s._startTime)*s._timeScale/e,s=t._rootFramesTimeline,r=i.ticker.frame,s._startTime=r-(r-s._startTime)*s._timeScale/e,s._timeScale=t._rootTimeline._timeScale=e,e):s._timeScale},h.progress=function(t){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&0!==(1&this._cycle)?1-t:t)+this._cycle*(this._duration+this._repeatDelay),!1):this._time/this.duration()},h.totalProgress=function(t){return arguments.length?this.totalTime(this.totalDuration()*t,!1):this._totalTime/this.totalDuration()},h.time=function(t,e){return arguments.length?(this._dirty&&this.totalDuration(),t>this._duration&&(t=this._duration),this._yoyo&&0!==(1&this._cycle)?t=this._duration-t+this._cycle*(this._duration+this._repeatDelay):0!==this._repeat&&(t+=this._cycle*(this._duration+this._repeatDelay)),this.totalTime(t,e)):this._time},h.duration=function(e){return arguments.length?t.prototype.duration.call(this,e):this._duration},h.totalDuration=function(t){return arguments.length?-1===this._repeat?this:this.duration((t-this._repeat*this._repeatDelay)/(this._repeat+1)):(this._dirty&&(this._totalDuration=-1===this._repeat?999999999999:this._duration*(this._repeat+1)+this._repeatDelay*this._repeat,this._dirty=!1),this._totalDuration)},h.repeat=function(t){return arguments.length?(this._repeat=t,this._uncache(!0)):this._repeat},h.repeatDelay=function(t){return arguments.length?(this._repeatDelay=t,this._uncache(!0)):this._repeatDelay},h.yoyo=function(t){return arguments.length?(this._yoyo=t,this):this._yoyo},r},!0),window._gsDefine("TimelineLite",["core.Animation","core.SimpleTimeline","TweenLite"],function(t,e,i){var s=function(t){e.call(this,t),this._labels={},this.autoRemoveChildren=this.vars.autoRemoveChildren===!0,this.smoothChildTiming=this.vars.smoothChildTiming===!0,this._sortChildren=!0,this._onUpdate=this.vars.onUpdate;var i,s,r=this.vars;for(s in r)i=r[s],a(i)&&-1!==i.join("").indexOf("{self}")&&(r[s]=this._swapSelfInParams(i));a(r.tweens)&&this.add(r.tweens,0,r.align,r.stagger)},r=1e-10,n=i._internals.isSelector,a=i._internals.isArray,o=[],h=window._gsDefine.globals,l=function(t){var e,i={};for(e in t)i[e]=t[e];return i},_=function(t,e,i,s){t._timeline.pause(t._startTime),e&&e.apply(s||t._timeline,i||o)},u=o.slice,p=s.prototype=new e;return s.version="1.11.8",p.constructor=s,p.kill()._gc=!1,p.to=function(t,e,s,r){var n=s.repeat&&h.TweenMax||i;return e?this.add(new n(t,e,s),r):this.set(t,s,r)},p.from=function(t,e,s,r){return this.add((s.repeat&&h.TweenMax||i).from(t,e,s),r)},p.fromTo=function(t,e,s,r,n){var a=r.repeat&&h.TweenMax||i;return e?this.add(a.fromTo(t,e,s,r),n):this.set(t,r,n)},p.staggerTo=function(t,e,r,a,o,h,_,p){var c,f=new s({onComplete:h,onCompleteParams:_,onCompleteScope:p,smoothChildTiming:this.smoothChildTiming});for("string"==typeof t&&(t=i.selector(t)||t),n(t)&&(t=u.call(t,0)),a=a||0,c=0;t.length>c;c++)r.startAt&&(r.startAt=l(r.startAt)),f.to(t[c],e,l(r),c*a);return this.add(f,o)},p.staggerFrom=function(t,e,i,s,r,n,a,o){return i.immediateRender=0!=i.immediateRender,i.runBackwards=!0,this.staggerTo(t,e,i,s,r,n,a,o)},p.staggerFromTo=function(t,e,i,s,r,n,a,o,h){return s.startAt=i,s.immediateRender=0!=s.immediateRender&&0!=i.immediateRender,this.staggerTo(t,e,s,r,n,a,o,h)},p.call=function(t,e,s,r){return this.add(i.delayedCall(0,t,e,s),r)},p.set=function(t,e,s){return s=this._parseTimeOrLabel(s,0,!0),null==e.immediateRender&&(e.immediateRender=s===this._time&&!this._paused),this.add(new i(t,0,e),s)},s.exportRoot=function(t,e){t=t||{},null==t.smoothChildTiming&&(t.smoothChildTiming=!0);var r,n,a=new s(t),o=a._timeline;for(null==e&&(e=!0),o._remove(a,!0),a._startTime=0,a._rawPrevTime=a._time=a._totalTime=o._time,r=o._first;r;)n=r._next,e&&r instanceof i&&r.target===r.vars.onComplete||a.add(r,r._startTime-r._delay),r=n;return o.add(a,0),a},p.add=function(r,n,o,h){var l,_,u,p,c,f;if("number"!=typeof n&&(n=this._parseTimeOrLabel(n,0,!0,r)),!(r instanceof t)){if(r instanceof Array||r&&r.push&&a(r)){for(o=o||"normal",h=h||0,l=n,_=r.length,u=0;_>u;u++)a(p=r[u])&&(p=new s({tweens:p})),this.add(p,l),"string"!=typeof p&&"function"!=typeof p&&("sequence"===o?l=p._startTime+p.totalDuration()/p._timeScale:"start"===o&&(p._startTime-=p.delay())),l+=h;return this._uncache(!0)}if("string"==typeof r)return this.addLabel(r,n);if("function"!=typeof r)throw"Cannot add "+r+" into the timeline; it is not a tween, timeline, function, or string.";r=i.delayedCall(0,r)}if(e.prototype.add.call(this,r,n),(this._gc||this._time===this._duration)&&!this._paused&&this._duration<this.duration())for(c=this,f=c.rawTime()>r._startTime;c._timeline;)f&&c._timeline.smoothChildTiming?c.totalTime(c._totalTime,!0):c._gc&&c._enabled(!0,!1),c=c._timeline;return this},p.remove=function(e){if(e instanceof t)return this._remove(e,!1);if(e instanceof Array||e&&e.push&&a(e)){for(var i=e.length;--i>-1;)this.remove(e[i]);return this}return"string"==typeof e?this.removeLabel(e):this.kill(null,e)},p._remove=function(t,i){e.prototype._remove.call(this,t,i);var s=this._last;return s?this._time>s._startTime+s._totalDuration/s._timeScale&&(this._time=this.duration(),this._totalTime=this._totalDuration):this._time=this._totalTime=this._duration=this._totalDuration=0,this},p.append=function(t,e){return this.add(t,this._parseTimeOrLabel(null,e,!0,t))},p.insert=p.insertMultiple=function(t,e,i,s){return this.add(t,e||0,i,s)},p.appendMultiple=function(t,e,i,s){return this.add(t,this._parseTimeOrLabel(null,e,!0,t),i,s)},p.addLabel=function(t,e){return this._labels[t]=this._parseTimeOrLabel(e),this},p.addPause=function(t,e,i,s){return this.call(_,["{self}",e,i,s],this,t)},p.removeLabel=function(t){return delete this._labels[t],this},p.getLabelTime=function(t){return null!=this._labels[t]?this._labels[t]:-1},p._parseTimeOrLabel=function(e,i,s,r){var n;if(r instanceof t&&r.timeline===this)this.remove(r);else if(r&&(r instanceof Array||r.push&&a(r)))for(n=r.length;--n>-1;)r[n]instanceof t&&r[n].timeline===this&&this.remove(r[n]);if("string"==typeof i)return this._parseTimeOrLabel(i,s&&"number"==typeof e&&null==this._labels[i]?e-this.duration():0,s);if(i=i||0,"string"!=typeof e||!isNaN(e)&&null==this._labels[e])null==e&&(e=this.duration());else{if(n=e.indexOf("="),-1===n)return null==this._labels[e]?s?this._labels[e]=this.duration()+i:i:this._labels[e]+i;i=parseInt(e.charAt(n-1)+"1",10)*Number(e.substr(n+1)),e=n>1?this._parseTimeOrLabel(e.substr(0,n-1),0,s):this.duration()}return Number(e)+i},p.seek=function(t,e){return this.totalTime("number"==typeof t?t:this._parseTimeOrLabel(t),e!==!1)},p.stop=function(){return this.paused(!0)},p.gotoAndPlay=function(t,e){return this.play(t,e)},p.gotoAndStop=function(t,e){return this.pause(t,e)},p.render=function(t,e,i){this._gc&&this._enabled(!0,!1);var s,n,a,h,l,_=this._dirty?this.totalDuration():this._totalDuration,u=this._time,p=this._startTime,c=this._timeScale,f=this._paused;if(t>=_?(this._totalTime=this._time=_,this._reversed||this._hasPausedChild()||(n=!0,h="onComplete",0===this._duration&&(0===t||0>this._rawPrevTime||this._rawPrevTime===r)&&this._rawPrevTime!==t&&this._first&&(l=!0,this._rawPrevTime>r&&(h="onReverseComplete"))),this._rawPrevTime=this._duration||!e||t||this._rawPrevTime===t?t:r,t=_+1e-4):1e-7>t?(this._totalTime=this._time=0,(0!==u||0===this._duration&&this._rawPrevTime!==r&&(this._rawPrevTime>0||0>t&&this._rawPrevTime>=0))&&(h="onReverseComplete",n=this._reversed),0>t?(this._active=!1,0===this._duration&&this._rawPrevTime>=0&&this._first&&(l=!0),this._rawPrevTime=t):(this._rawPrevTime=this._duration||!e||t||this._rawPrevTime===t?t:r,t=0,this._initted||(l=!0))):this._totalTime=this._time=this._rawPrevTime=t,this._time!==u&&this._first||i||l){if(this._initted||(this._initted=!0),this._active||!this._paused&&this._time!==u&&t>0&&(this._active=!0),0===u&&this.vars.onStart&&0!==this._time&&(e||this.vars.onStart.apply(this.vars.onStartScope||this,this.vars.onStartParams||o)),this._time>=u)for(s=this._first;s&&(a=s._next,!this._paused||f);)(s._active||s._startTime<=this._time&&!s._paused&&!s._gc)&&(s._reversed?s.render((s._dirty?s.totalDuration():s._totalDuration)-(t-s._startTime)*s._timeScale,e,i):s.render((t-s._startTime)*s._timeScale,e,i)),s=a;else for(s=this._last;s&&(a=s._prev,!this._paused||f);)(s._active||u>=s._startTime&&!s._paused&&!s._gc)&&(s._reversed?s.render((s._dirty?s.totalDuration():s._totalDuration)-(t-s._startTime)*s._timeScale,e,i):s.render((t-s._startTime)*s._timeScale,e,i)),s=a;this._onUpdate&&(e||this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||o)),h&&(this._gc||(p===this._startTime||c!==this._timeScale)&&(0===this._time||_>=this.totalDuration())&&(n&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!e&&this.vars[h]&&this.vars[h].apply(this.vars[h+"Scope"]||this,this.vars[h+"Params"]||o)))}},p._hasPausedChild=function(){for(var t=this._first;t;){if(t._paused||t instanceof s&&t._hasPausedChild())return!0;t=t._next}return!1},p.getChildren=function(t,e,s,r){r=r||-9999999999;for(var n=[],a=this._first,o=0;a;)r>a._startTime||(a instanceof i?e!==!1&&(n[o++]=a):(s!==!1&&(n[o++]=a),t!==!1&&(n=n.concat(a.getChildren(!0,e,s)),o=n.length))),a=a._next;return n},p.getTweensOf=function(t,e){for(var s=i.getTweensOf(t),r=s.length,n=[],a=0;--r>-1;)(s[r].timeline===this||e&&this._contains(s[r]))&&(n[a++]=s[r]);return n},p._contains=function(t){for(var e=t.timeline;e;){if(e===this)return!0;e=e.timeline}return!1},p.shiftChildren=function(t,e,i){i=i||0;for(var s,r=this._first,n=this._labels;r;)r._startTime>=i&&(r._startTime+=t),r=r._next;if(e)for(s in n)n[s]>=i&&(n[s]+=t);return this._uncache(!0)},p._kill=function(t,e){if(!t&&!e)return this._enabled(!1,!1);for(var i=e?this.getTweensOf(e):this.getChildren(!0,!0,!1),s=i.length,r=!1;--s>-1;)i[s]._kill(t,e)&&(r=!0);return r},p.clear=function(t){var e=this.getChildren(!1,!0,!0),i=e.length;for(this._time=this._totalTime=0;--i>-1;)e[i]._enabled(!1,!1);return t!==!1&&(this._labels={}),this._uncache(!0)},p.invalidate=function(){for(var t=this._first;t;)t.invalidate(),t=t._next;return this},p._enabled=function(t,i){if(t===this._gc)for(var s=this._first;s;)s._enabled(t,!0),s=s._next;return e.prototype._enabled.call(this,t,i)},p.duration=function(t){return arguments.length?(0!==this.duration()&&0!==t&&this.timeScale(this._duration/t),this):(this._dirty&&this.totalDuration(),this._duration)},p.totalDuration=function(t){if(!arguments.length){if(this._dirty){for(var e,i,s=0,r=this._last,n=999999999999;r;)e=r._prev,r._dirty&&r.totalDuration(),r._startTime>n&&this._sortChildren&&!r._paused?this.add(r,r._startTime-r._delay):n=r._startTime,0>r._startTime&&!r._paused&&(s-=r._startTime,this._timeline.smoothChildTiming&&(this._startTime+=r._startTime/this._timeScale),this.shiftChildren(-r._startTime,!1,-9999999999),n=0),i=r._startTime+r._totalDuration/r._timeScale,i>s&&(s=i),r=e;this._duration=this._totalDuration=s,this._dirty=!1}return this._totalDuration}return 0!==this.totalDuration()&&0!==t&&this.timeScale(this._totalDuration/t),this},p.usesFrames=function(){for(var e=this._timeline;e._timeline;)e=e._timeline;return e===t._rootFramesTimeline},p.rawTime=function(){return this._paused?this._totalTime:(this._timeline.rawTime()-this._startTime)*this._timeScale},s},!0),window._gsDefine("TimelineMax",["TimelineLite","TweenLite","easing.Ease"],function(t,e,i){var s=function(e){t.call(this,e),this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._cycle=0,this._yoyo=this.vars.yoyo===!0,this._dirty=!0},r=1e-10,n=[],a=new i(null,null,1,0),o=s.prototype=new t;return o.constructor=s,o.kill()._gc=!1,s.version="1.11.8",o.invalidate=function(){return this._yoyo=this.vars.yoyo===!0,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._uncache(!0),t.prototype.invalidate.call(this)},o.addCallback=function(t,i,s,r){return this.add(e.delayedCall(0,t,s,r),i)},o.removeCallback=function(t,e){if(t)if(null==e)this._kill(null,t);else for(var i=this.getTweensOf(t,!1),s=i.length,r=this._parseTimeOrLabel(e);--s>-1;)i[s]._startTime===r&&i[s]._enabled(!1,!1);return this},o.tweenTo=function(t,i){i=i||{};var s,r,o,h={ease:a,overwrite:i.delay?2:1,useFrames:this.usesFrames(),immediateRender:!1};for(r in i)h[r]=i[r];return h.time=this._parseTimeOrLabel(t),s=Math.abs(Number(h.time)-this._time)/this._timeScale||.001,o=new e(this,s,h),h.onStart=function(){o.target.paused(!0),o.vars.time!==o.target.time()&&s===o.duration()&&o.duration(Math.abs(o.vars.time-o.target.time())/o.target._timeScale),i.onStart&&i.onStart.apply(i.onStartScope||o,i.onStartParams||n)},o},o.tweenFromTo=function(t,e,i){i=i||{},t=this._parseTimeOrLabel(t),i.startAt={onComplete:this.seek,onCompleteParams:[t],onCompleteScope:this},i.immediateRender=i.immediateRender!==!1;var s=this.tweenTo(e,i);return s.duration(Math.abs(s.vars.time-t)/this._timeScale||.001)},o.render=function(t,e,i){this._gc&&this._enabled(!0,!1);var s,a,o,h,l,_,u=this._dirty?this.totalDuration():this._totalDuration,p=this._duration,c=this._time,f=this._totalTime,m=this._startTime,d=this._timeScale,g=this._rawPrevTime,v=this._paused,y=this._cycle;if(t>=u?(this._locked||(this._totalTime=u,this._cycle=this._repeat),this._reversed||this._hasPausedChild()||(a=!0,h="onComplete",0===this._duration&&(0===t||0>g||g===r)&&g!==t&&this._first&&(l=!0,g>r&&(h="onReverseComplete"))),this._rawPrevTime=this._duration||!e||t||this._rawPrevTime===t?t:r,this._yoyo&&0!==(1&this._cycle)?this._time=t=0:(this._time=p,t=p+1e-4)):1e-7>t?(this._locked||(this._totalTime=this._cycle=0),this._time=0,(0!==c||0===p&&g!==r&&(g>0||0>t&&g>=0)&&!this._locked)&&(h="onReverseComplete",a=this._reversed),0>t?(this._active=!1,0===p&&g>=0&&this._first&&(l=!0),this._rawPrevTime=t):(this._rawPrevTime=p||!e||t||this._rawPrevTime===t?t:r,t=0,this._initted||(l=!0))):(0===p&&0>g&&(l=!0),this._time=this._rawPrevTime=t,this._locked||(this._totalTime=t,0!==this._repeat&&(_=p+this._repeatDelay,this._cycle=this._totalTime/_>>0,0!==this._cycle&&this._cycle===this._totalTime/_&&this._cycle--,this._time=this._totalTime-this._cycle*_,this._yoyo&&0!==(1&this._cycle)&&(this._time=p-this._time),this._time>p?(this._time=p,t=p+1e-4):0>this._time?this._time=t=0:t=this._time))),this._cycle!==y&&!this._locked){var T=this._yoyo&&0!==(1&y),w=T===(this._yoyo&&0!==(1&this._cycle)),x=this._totalTime,b=this._cycle,P=this._rawPrevTime,S=this._time;if(this._totalTime=y*p,y>this._cycle?T=!T:this._totalTime+=p,this._time=c,this._rawPrevTime=0===p?g-1e-4:g,this._cycle=y,this._locked=!0,c=T?0:p,this.render(c,e,0===p),e||this._gc||this.vars.onRepeat&&this.vars.onRepeat.apply(this.vars.onRepeatScope||this,this.vars.onRepeatParams||n),w&&(c=T?p+1e-4:-1e-4,this.render(c,!0,!1)),this._locked=!1,this._paused&&!v)return;this._time=S,this._totalTime=x,this._cycle=b,this._rawPrevTime=P}if(!(this._time!==c&&this._first||i||l))return f!==this._totalTime&&this._onUpdate&&(e||this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||n)),void 0;if(this._initted||(this._initted=!0),this._active||!this._paused&&this._totalTime!==f&&t>0&&(this._active=!0),0===f&&this.vars.onStart&&0!==this._totalTime&&(e||this.vars.onStart.apply(this.vars.onStartScope||this,this.vars.onStartParams||n)),this._time>=c)for(s=this._first;s&&(o=s._next,!this._paused||v);)(s._active||s._startTime<=this._time&&!s._paused&&!s._gc)&&(s._reversed?s.render((s._dirty?s.totalDuration():s._totalDuration)-(t-s._startTime)*s._timeScale,e,i):s.render((t-s._startTime)*s._timeScale,e,i)),s=o;else for(s=this._last;s&&(o=s._prev,!this._paused||v);)(s._active||c>=s._startTime&&!s._paused&&!s._gc)&&(s._reversed?s.render((s._dirty?s.totalDuration():s._totalDuration)-(t-s._startTime)*s._timeScale,e,i):s.render((t-s._startTime)*s._timeScale,e,i)),s=o;this._onUpdate&&(e||this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||n)),h&&(this._locked||this._gc||(m===this._startTime||d!==this._timeScale)&&(0===this._time||u>=this.totalDuration())&&(a&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!e&&this.vars[h]&&this.vars[h].apply(this.vars[h+"Scope"]||this,this.vars[h+"Params"]||n)))},o.getActive=function(t,e,i){null==t&&(t=!0),null==e&&(e=!0),null==i&&(i=!1);var s,r,n=[],a=this.getChildren(t,e,i),o=0,h=a.length;for(s=0;h>s;s++)r=a[s],r.isActive()&&(n[o++]=r);return n},o.getLabelAfter=function(t){t||0!==t&&(t=this._time);var e,i=this.getLabelsArray(),s=i.length;for(e=0;s>e;e++)if(i[e].time>t)return i[e].name;return null},o.getLabelBefore=function(t){null==t&&(t=this._time);for(var e=this.getLabelsArray(),i=e.length;--i>-1;)if(t>e[i].time)return e[i].name;return null},o.getLabelsArray=function(){var t,e=[],i=0;for(t in this._labels)e[i++]={time:this._labels[t],name:t};return e.sort(function(t,e){return t.time-e.time}),e},o.progress=function(t){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&0!==(1&this._cycle)?1-t:t)+this._cycle*(this._duration+this._repeatDelay),!1):this._time/this.duration()},o.totalProgress=function(t){return arguments.length?this.totalTime(this.totalDuration()*t,!1):this._totalTime/this.totalDuration()},o.totalDuration=function(e){return arguments.length?-1===this._repeat?this:this.duration((e-this._repeat*this._repeatDelay)/(this._repeat+1)):(this._dirty&&(t.prototype.totalDuration.call(this),this._totalDuration=-1===this._repeat?999999999999:this._duration*(this._repeat+1)+this._repeatDelay*this._repeat),this._totalDuration)},o.time=function(t,e){return arguments.length?(this._dirty&&this.totalDuration(),t>this._duration&&(t=this._duration),this._yoyo&&0!==(1&this._cycle)?t=this._duration-t+this._cycle*(this._duration+this._repeatDelay):0!==this._repeat&&(t+=this._cycle*(this._duration+this._repeatDelay)),this.totalTime(t,e)):this._time},o.repeat=function(t){return arguments.length?(this._repeat=t,this._uncache(!0)):this._repeat},o.repeatDelay=function(t){return arguments.length?(this._repeatDelay=t,this._uncache(!0)):this._repeatDelay},o.yoyo=function(t){return arguments.length?(this._yoyo=t,this):this._yoyo},o.currentLabel=function(t){return arguments.length?this.seek(t,!0):this.getLabelBefore(this._time+1e-8)},s},!0),function(){var t=180/Math.PI,e=[],i=[],s=[],r={},n=function(t,e,i,s){this.a=t,this.b=e,this.c=i,this.d=s,this.da=s-t,this.ca=i-t,this.ba=e-t},a=",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",o=function(t,e,i,s){var r={a:t},n={},a={},o={c:s},h=(t+e)/2,l=(e+i)/2,_=(i+s)/2,u=(h+l)/2,p=(l+_)/2,c=(p-u)/8;return r.b=h+(t-h)/4,n.b=u+c,r.c=n.a=(r.b+n.b)/2,n.c=a.a=(u+p)/2,a.b=p-c,o.b=_+(s-_)/4,a.c=o.a=(a.b+o.b)/2,[r,n,a,o]},h=function(t,r,n,a,h){var l,_,u,p,c,f,m,d,g,v,y,T,w,x=t.length-1,b=0,P=t[0].a;for(l=0;x>l;l++)c=t[b],_=c.a,u=c.d,p=t[b+1].d,h?(y=e[l],T=i[l],w=.25*(T+y)*r/(a?.5:s[l]||.5),f=u-(u-_)*(a?.5*r:0!==y?w/y:0),m=u+(p-u)*(a?.5*r:0!==T?w/T:0),d=u-(f+((m-f)*(3*y/(y+T)+.5)/4||0))):(f=u-.5*(u-_)*r,m=u+.5*(p-u)*r,d=u-(f+m)/2),f+=d,m+=d,c.c=g=f,c.b=0!==l?P:P=c.a+.6*(c.c-c.a),c.da=u-_,c.ca=g-_,c.ba=P-_,n?(v=o(_,P,g,u),t.splice(b,1,v[0],v[1],v[2],v[3]),b+=4):b++,P=m;c=t[b],c.b=P,c.c=P+.4*(c.d-P),c.da=c.d-c.a,c.ca=c.c-c.a,c.ba=P-c.a,n&&(v=o(c.a,P,c.c,c.d),t.splice(b,1,v[0],v[1],v[2],v[3]))},l=function(t,s,r,a){var o,h,l,_,u,p,c=[];if(a)for(t=[a].concat(t),h=t.length;--h>-1;)"string"==typeof(p=t[h][s])&&"="===p.charAt(1)&&(t[h][s]=a[s]+Number(p.charAt(0)+p.substr(2)));if(o=t.length-2,0>o)return c[0]=new n(t[0][s],0,0,t[-1>o?0:1][s]),c;for(h=0;o>h;h++)l=t[h][s],_=t[h+1][s],c[h]=new n(l,0,0,_),r&&(u=t[h+2][s],e[h]=(e[h]||0)+(_-l)*(_-l),i[h]=(i[h]||0)+(u-_)*(u-_));return c[h]=new n(t[h][s],0,0,t[h+1][s]),c},_=function(t,n,o,_,u,p){var c,f,m,d,g,v,y,T,w={},x=[],b=p||t[0];u="string"==typeof u?","+u+",":a,null==n&&(n=1);for(f in t[0])x.push(f);if(t.length>1){for(T=t[t.length-1],y=!0,c=x.length;--c>-1;)if(f=x[c],Math.abs(b[f]-T[f])>.05){y=!1;break}y&&(t=t.concat(),p&&t.unshift(p),t.push(t[1]),p=t[t.length-3])}for(e.length=i.length=s.length=0,c=x.length;--c>-1;)f=x[c],r[f]=-1!==u.indexOf(","+f+","),w[f]=l(t,f,r[f],p);for(c=e.length;--c>-1;)e[c]=Math.sqrt(e[c]),i[c]=Math.sqrt(i[c]);if(!_){for(c=x.length;--c>-1;)if(r[f])for(m=w[x[c]],v=m.length-1,d=0;v>d;d++)g=m[d+1].da/i[d]+m[d].da/e[d],s[d]=(s[d]||0)+g*g;for(c=s.length;--c>-1;)s[c]=Math.sqrt(s[c])}for(c=x.length,d=o?4:1;--c>-1;)f=x[c],m=w[f],h(m,n,o,_,r[f]),y&&(m.splice(0,d),m.splice(m.length-d,d));return w},u=function(t,e,i){e=e||"soft";var s,r,a,o,h,l,_,u,p,c,f,m={},d="cubic"===e?3:2,g="soft"===e,v=[];if(g&&i&&(t=[i].concat(t)),null==t||d+1>t.length)throw"invalid Bezier data";for(p in t[0])v.push(p);for(l=v.length;--l>-1;){for(p=v[l],m[p]=h=[],c=0,u=t.length,_=0;u>_;_++)s=null==i?t[_][p]:"string"==typeof(f=t[_][p])&&"="===f.charAt(1)?i[p]+Number(f.charAt(0)+f.substr(2)):Number(f),g&&_>1&&u-1>_&&(h[c++]=(s+h[c-2])/2),h[c++]=s;for(u=c-d+1,c=0,_=0;u>_;_+=d)s=h[_],r=h[_+1],a=h[_+2],o=2===d?0:h[_+3],h[c++]=f=3===d?new n(s,r,a,o):new n(s,(2*r+s)/3,(2*r+a)/3,a);h.length=c}return m},p=function(t,e,i){for(var s,r,n,a,o,h,l,_,u,p,c,f=1/i,m=t.length;--m>-1;)for(p=t[m],n=p.a,a=p.d-n,o=p.c-n,h=p.b-n,s=r=0,_=1;i>=_;_++)l=f*_,u=1-l,s=r-(r=(l*l*a+3*u*(l*o+u*h))*l),c=m*i+_-1,e[c]=(e[c]||0)+s*s},c=function(t,e){e=e>>0||6;var i,s,r,n,a=[],o=[],h=0,l=0,_=e-1,u=[],c=[];for(i in t)p(t[i],a,e);for(r=a.length,s=0;r>s;s++)h+=Math.sqrt(a[s]),n=s%e,c[n]=h,n===_&&(l+=h,n=s/e>>0,u[n]=c,o[n]=l,h=0,c=[]);return{length:l,lengths:o,segments:u}},f=window._gsDefine.plugin({propName:"bezier",priority:-1,version:"1.3.2",API:2,global:!0,init:function(t,e,i){this._target=t,e instanceof Array&&(e={values:e}),this._func={},this._round={},this._props=[],this._timeRes=null==e.timeResolution?6:parseInt(e.timeResolution,10);var s,r,n,a,o,h=e.values||[],l={},p=h[0],f=e.autoRotate||i.vars.orientToBezier;this._autoRotate=f?f instanceof Array?f:[["x","y","rotation",f===!0?0:Number(f)||0]]:null;for(s in p)this._props.push(s);for(n=this._props.length;--n>-1;)s=this._props[n],this._overwriteProps.push(s),r=this._func[s]="function"==typeof t[s],l[s]=r?t[s.indexOf("set")||"function"!=typeof t["get"+s.substr(3)]?s:"get"+s.substr(3)]():parseFloat(t[s]),o||l[s]!==h[0][s]&&(o=l);if(this._beziers="cubic"!==e.type&&"quadratic"!==e.type&&"soft"!==e.type?_(h,isNaN(e.curviness)?1:e.curviness,!1,"thruBasic"===e.type,e.correlate,o):u(h,e.type,l),this._segCount=this._beziers[s].length,this._timeRes){var m=c(this._beziers,this._timeRes);this._length=m.length,this._lengths=m.lengths,this._segments=m.segments,this._l1=this._li=this._s1=this._si=0,this._l2=this._lengths[0],this._curSeg=this._segments[0],this._s2=this._curSeg[0],this._prec=1/this._curSeg.length}if(f=this._autoRotate)for(this._initialRotations=[],f[0]instanceof Array||(this._autoRotate=f=[f]),n=f.length;--n>-1;){for(a=0;3>a;a++)s=f[n][a],this._func[s]="function"==typeof t[s]?t[s.indexOf("set")||"function"!=typeof t["get"+s.substr(3)]?s:"get"+s.substr(3)]:!1;s=f[n][2],this._initialRotations[n]=this._func[s]?this._func[s].call(this._target):this._target[s]}return this._startRatio=i.vars.runBackwards?1:0,!0},set:function(e){var i,s,r,n,a,o,h,l,_,u,p=this._segCount,c=this._func,f=this._target,m=e!==this._startRatio;if(this._timeRes){if(_=this._lengths,u=this._curSeg,e*=this._length,r=this._li,e>this._l2&&p-1>r){for(l=p-1;l>r&&e>=(this._l2=_[++r]););this._l1=_[r-1],this._li=r,this._curSeg=u=this._segments[r],this._s2=u[this._s1=this._si=0]}else if(this._l1>e&&r>0){for(;r>0&&(this._l1=_[--r])>=e;);0===r&&this._l1>e?this._l1=0:r++,this._l2=_[r],this._li=r,this._curSeg=u=this._segments[r],this._s1=u[(this._si=u.length-1)-1]||0,this._s2=u[this._si]}if(i=r,e-=this._l1,r=this._si,e>this._s2&&u.length-1>r){for(l=u.length-1;l>r&&e>=(this._s2=u[++r]););this._s1=u[r-1],this._si=r}else if(this._s1>e&&r>0){for(;r>0&&(this._s1=u[--r])>=e;);0===r&&this._s1>e?this._s1=0:r++,this._s2=u[r],this._si=r}o=(r+(e-this._s1)/(this._s2-this._s1))*this._prec}else i=0>e?0:e>=1?p-1:p*e>>0,o=(e-i*(1/p))*p;for(s=1-o,r=this._props.length;--r>-1;)n=this._props[r],a=this._beziers[n][i],h=(o*o*a.da+3*s*(o*a.ca+s*a.ba))*o+a.a,this._round[n]&&(h=Math.round(h)),c[n]?f[n](h):f[n]=h;if(this._autoRotate){var d,g,v,y,T,w,x,b=this._autoRotate;for(r=b.length;--r>-1;)n=b[r][2],w=b[r][3]||0,x=b[r][4]===!0?1:t,a=this._beziers[b[r][0]],d=this._beziers[b[r][1]],a&&d&&(a=a[i],d=d[i],g=a.a+(a.b-a.a)*o,y=a.b+(a.c-a.b)*o,g+=(y-g)*o,y+=(a.c+(a.d-a.c)*o-y)*o,v=d.a+(d.b-d.a)*o,T=d.b+(d.c-d.b)*o,v+=(T-v)*o,T+=(d.c+(d.d-d.c)*o-T)*o,h=m?Math.atan2(T-v,y-g)*x+w:this._initialRotations[r],c[n]?f[n](h):f[n]=h)}}}),m=f.prototype;f.bezierThrough=_,f.cubicToQuadratic=o,f._autoCSS=!0,f.quadraticToCubic=function(t,e,i){return new n(t,(2*e+t)/3,(2*e+i)/3,i)},f._cssRegister=function(){var t=window._gsDefine.globals.CSSPlugin;if(t){var e=t._internals,i=e._parseToProxy,s=e._setPluginRatio,r=e.CSSPropTween;e._registerComplexSpecialProp("bezier",{parser:function(t,e,n,a,o,h){e instanceof Array&&(e={values:e}),h=new f;
var l,_,u,p=e.values,c=p.length-1,m=[],d={};if(0>c)return o;for(l=0;c>=l;l++)u=i(t,p[l],a,o,h,c!==l),m[l]=u.end;for(_ in e)d[_]=e[_];return d.values=m,o=new r(t,"bezier",0,0,u.pt,2),o.data=u,o.plugin=h,o.setRatio=s,0===d.autoRotate&&(d.autoRotate=!0),!d.autoRotate||d.autoRotate instanceof Array||(l=d.autoRotate===!0?0:Number(d.autoRotate),d.autoRotate=null!=u.end.left?[["left","top","rotation",l,!1]]:null!=u.end.x?[["x","y","rotation",l,!1]]:!1),d.autoRotate&&(a._transform||a._enableTransforms(!1),u.autoRotate=a._target._gsTransform),h._onInitTween(u.proxy,d,a._tween),o}})}},m._roundProps=function(t,e){for(var i=this._overwriteProps,s=i.length;--s>-1;)(t[i[s]]||t.bezier||t.bezierThrough)&&(this._round[i[s]]=e)},m._kill=function(t){var e,i,s=this._props;for(e in this._beziers)if(e in t)for(delete this._beziers[e],delete this._func[e],i=s.length;--i>-1;)s[i]===e&&s.splice(i,1);return this._super._kill.call(this,t)}}(),window._gsDefine("plugins.CSSPlugin",["plugins.TweenPlugin","TweenLite"],function(t,e){var i,s,r,n,a=function(){t.call(this,"css"),this._overwriteProps.length=0,this.setRatio=a.prototype.setRatio},o={},h=a.prototype=new t("css");h.constructor=a,a.version="1.11.8",a.API=2,a.defaultTransformPerspective=0,a.defaultSkewType="compensated",h="px",a.suffixMap={top:h,right:h,bottom:h,left:h,width:h,height:h,fontSize:h,padding:h,margin:h,perspective:h,lineHeight:""};var l,_,u,p,c,f,m=/(?:\d|\-\d|\.\d|\-\.\d)+/g,d=/(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,g=/(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,v=/[^\d\-\.]/g,y=/(?:\d|\-|\+|=|#|\.)*/g,T=/opacity *= *([^)]*)/,w=/opacity:([^;]*)/,x=/alpha\(opacity *=.+?\)/i,b=/^(rgb|hsl)/,P=/([A-Z])/g,S=/-([a-z])/gi,k=/(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,R=function(t,e){return e.toUpperCase()},A=/(?:Left|Right|Width)/i,C=/(M11|M12|M21|M22)=[\d\-\.e]+/gi,O=/progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,D=/,(?=[^\)]*(?:\(|$))/gi,M=Math.PI/180,I=180/Math.PI,E={},N=document,F=N.createElement("div"),L=N.createElement("img"),X=a._internals={_specialProps:o},z=navigator.userAgent,U=function(){var t,e=z.indexOf("Android"),i=N.createElement("div");return u=-1!==z.indexOf("Safari")&&-1===z.indexOf("Chrome")&&(-1===e||Number(z.substr(e+8,1))>3),c=u&&6>Number(z.substr(z.indexOf("Version/")+8,1)),p=-1!==z.indexOf("Firefox"),/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(z)&&(f=parseFloat(RegExp.$1)),i.innerHTML="<a style='top:1px;opacity:.55;'>a</a>",t=i.getElementsByTagName("a")[0],t?/^0.55/.test(t.style.opacity):!1}(),Y=function(t){return T.test("string"==typeof t?t:(t.currentStyle?t.currentStyle.filter:t.style.filter)||"")?parseFloat(RegExp.$1)/100:1},j=function(t){window.console&&console.log(t)},B="",q="",V=function(t,e){e=e||F;var i,s,r=e.style;if(void 0!==r[t])return t;for(t=t.charAt(0).toUpperCase()+t.substr(1),i=["O","Moz","ms","Ms","Webkit"],s=5;--s>-1&&void 0===r[i[s]+t];);return s>=0?(q=3===s?"ms":i[s],B="-"+q.toLowerCase()+"-",q+t):null},W=N.defaultView?N.defaultView.getComputedStyle:function(){},G=a.getStyle=function(t,e,i,s,r){var n;return U||"opacity"!==e?(!s&&t.style[e]?n=t.style[e]:(i=i||W(t,null))?n=i[e]||i.getPropertyValue(e)||i.getPropertyValue(e.replace(P,"-$1").toLowerCase()):t.currentStyle&&(n=t.currentStyle[e]),null==r||n&&"none"!==n&&"auto"!==n&&"auto auto"!==n?n:r):Y(t)},$=X.convertToPixels=function(t,i,s,r,n){if("px"===r||!r)return s;if("auto"===r||!s)return 0;var o,h,l,_=A.test(i),u=t,p=F.style,c=0>s;if(c&&(s=-s),"%"===r&&-1!==i.indexOf("border"))o=s/100*(_?t.clientWidth:t.clientHeight);else{if(p.cssText="border:0 solid red;position:"+G(t,"position")+";line-height:0;","%"!==r&&u.appendChild)p[_?"borderLeftWidth":"borderTopWidth"]=s+r;else{if(u=t.parentNode||N.body,h=u._gsCache,l=e.ticker.frame,h&&_&&h.time===l)return h.width*s/100;p[_?"width":"height"]=s+r}u.appendChild(F),o=parseFloat(F[_?"offsetWidth":"offsetHeight"]),u.removeChild(F),_&&"%"===r&&a.cacheWidths!==!1&&(h=u._gsCache=u._gsCache||{},h.time=l,h.width=100*(o/s)),0!==o||n||(o=$(t,i,s,r,!0))}return c?-o:o},Z=X.calculateOffset=function(t,e,i){if("absolute"!==G(t,"position",i))return 0;var s="left"===e?"Left":"Top",r=G(t,"margin"+s,i);return t["offset"+s]-($(t,e,parseFloat(r),r.replace(y,""))||0)},Q=function(t,e){var i,s,r={};if(e=e||W(t,null))if(i=e.length)for(;--i>-1;)r[e[i].replace(S,R)]=e.getPropertyValue(e[i]);else for(i in e)r[i]=e[i];else if(e=t.currentStyle||t.style)for(i in e)"string"==typeof i&&void 0===r[i]&&(r[i.replace(S,R)]=e[i]);return U||(r.opacity=Y(t)),s=Pe(t,e,!1),r.rotation=s.rotation,r.skewX=s.skewX,r.scaleX=s.scaleX,r.scaleY=s.scaleY,r.x=s.x,r.y=s.y,xe&&(r.z=s.z,r.rotationX=s.rotationX,r.rotationY=s.rotationY,r.scaleZ=s.scaleZ),r.filters&&delete r.filters,r},H=function(t,e,i,s,r){var n,a,o,h={},l=t.style;for(a in i)"cssText"!==a&&"length"!==a&&isNaN(a)&&(e[a]!==(n=i[a])||r&&r[a])&&-1===a.indexOf("Origin")&&("number"==typeof n||"string"==typeof n)&&(h[a]="auto"!==n||"left"!==a&&"top"!==a?""!==n&&"auto"!==n&&"none"!==n||"string"!=typeof e[a]||""===e[a].replace(v,"")?n:0:Z(t,a),void 0!==l[a]&&(o=new ue(l,a,l[a],o)));if(s)for(a in s)"className"!==a&&(h[a]=s[a]);return{difs:h,firstMPT:o}},K={width:["Left","Right"],height:["Top","Bottom"]},J=["marginLeft","marginRight","marginTop","marginBottom"],te=function(t,e,i){var s=parseFloat("width"===e?t.offsetWidth:t.offsetHeight),r=K[e],n=r.length;for(i=i||W(t,null);--n>-1;)s-=parseFloat(G(t,"padding"+r[n],i,!0))||0,s-=parseFloat(G(t,"border"+r[n]+"Width",i,!0))||0;return s},ee=function(t,e){(null==t||""===t||"auto"===t||"auto auto"===t)&&(t="0 0");var i=t.split(" "),s=-1!==t.indexOf("left")?"0%":-1!==t.indexOf("right")?"100%":i[0],r=-1!==t.indexOf("top")?"0%":-1!==t.indexOf("bottom")?"100%":i[1];return null==r?r="0":"center"===r&&(r="50%"),("center"===s||isNaN(parseFloat(s))&&-1===(s+"").indexOf("="))&&(s="50%"),e&&(e.oxp=-1!==s.indexOf("%"),e.oyp=-1!==r.indexOf("%"),e.oxr="="===s.charAt(1),e.oyr="="===r.charAt(1),e.ox=parseFloat(s.replace(v,"")),e.oy=parseFloat(r.replace(v,""))),s+" "+r+(i.length>2?" "+i[2]:"")},ie=function(t,e){return"string"==typeof t&&"="===t.charAt(1)?parseInt(t.charAt(0)+"1",10)*parseFloat(t.substr(2)):parseFloat(t)-parseFloat(e)},se=function(t,e){return null==t?e:"string"==typeof t&&"="===t.charAt(1)?parseInt(t.charAt(0)+"1",10)*Number(t.substr(2))+e:parseFloat(t)},re=function(t,e,i,s){var r,n,a,o,h=1e-6;return null==t?o=e:"number"==typeof t?o=t:(r=360,n=t.split("_"),a=Number(n[0].replace(v,""))*(-1===t.indexOf("rad")?1:I)-("="===t.charAt(1)?0:e),n.length&&(s&&(s[i]=e+a),-1!==t.indexOf("short")&&(a%=r,a!==a%(r/2)&&(a=0>a?a+r:a-r)),-1!==t.indexOf("_cw")&&0>a?a=(a+9999999999*r)%r-(0|a/r)*r:-1!==t.indexOf("ccw")&&a>0&&(a=(a-9999999999*r)%r-(0|a/r)*r)),o=e+a),h>o&&o>-h&&(o=0),o},ne={aqua:[0,255,255],lime:[0,255,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,255],navy:[0,0,128],white:[255,255,255],fuchsia:[255,0,255],olive:[128,128,0],yellow:[255,255,0],orange:[255,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[255,0,0],pink:[255,192,203],cyan:[0,255,255],transparent:[255,255,255,0]},ae=function(t,e,i){return t=0>t?t+1:t>1?t-1:t,0|255*(1>6*t?e+6*(i-e)*t:.5>t?i:2>3*t?e+6*(i-e)*(2/3-t):e)+.5},oe=function(t){var e,i,s,r,n,a;return t&&""!==t?"number"==typeof t?[t>>16,255&t>>8,255&t]:(","===t.charAt(t.length-1)&&(t=t.substr(0,t.length-1)),ne[t]?ne[t]:"#"===t.charAt(0)?(4===t.length&&(e=t.charAt(1),i=t.charAt(2),s=t.charAt(3),t="#"+e+e+i+i+s+s),t=parseInt(t.substr(1),16),[t>>16,255&t>>8,255&t]):"hsl"===t.substr(0,3)?(t=t.match(m),r=Number(t[0])%360/360,n=Number(t[1])/100,a=Number(t[2])/100,i=.5>=a?a*(n+1):a+n-a*n,e=2*a-i,t.length>3&&(t[3]=Number(t[3])),t[0]=ae(r+1/3,e,i),t[1]=ae(r,e,i),t[2]=ae(r-1/3,e,i),t):(t=t.match(m)||ne.transparent,t[0]=Number(t[0]),t[1]=Number(t[1]),t[2]=Number(t[2]),t.length>3&&(t[3]=Number(t[3])),t)):ne.black},he="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";for(h in ne)he+="|"+h+"\\b";he=RegExp(he+")","gi");var le=function(t,e,i,s){if(null==t)return function(t){return t};var r,n=e?(t.match(he)||[""])[0]:"",a=t.split(n).join("").match(g)||[],o=t.substr(0,t.indexOf(a[0])),h=")"===t.charAt(t.length-1)?")":"",l=-1!==t.indexOf(" ")?" ":",",_=a.length,u=_>0?a[0].replace(m,""):"";return _?r=e?function(t){var e,p,c,f;if("number"==typeof t)t+=u;else if(s&&D.test(t)){for(f=t.replace(D,"|").split("|"),c=0;f.length>c;c++)f[c]=r(f[c]);return f.join(",")}if(e=(t.match(he)||[n])[0],p=t.split(e).join("").match(g)||[],c=p.length,_>c--)for(;_>++c;)p[c]=i?p[0|(c-1)/2]:a[c];return o+p.join(l)+l+e+h+(-1!==t.indexOf("inset")?" inset":"")}:function(t){var e,n,p;if("number"==typeof t)t+=u;else if(s&&D.test(t)){for(n=t.replace(D,"|").split("|"),p=0;n.length>p;p++)n[p]=r(n[p]);return n.join(",")}if(e=t.match(g)||[],p=e.length,_>p--)for(;_>++p;)e[p]=i?e[0|(p-1)/2]:a[p];return o+e.join(l)+h}:function(t){return t}},_e=function(t){return t=t.split(","),function(e,i,s,r,n,a,o){var h,l=(i+"").split(" ");for(o={},h=0;4>h;h++)o[t[h]]=l[h]=l[h]||l[(h-1)/2>>0];return r.parse(e,o,n,a)}},ue=(X._setPluginRatio=function(t){this.plugin.setRatio(t);for(var e,i,s,r,n=this.data,a=n.proxy,o=n.firstMPT,h=1e-6;o;)e=a[o.v],o.r?e=Math.round(e):h>e&&e>-h&&(e=0),o.t[o.p]=e,o=o._next;if(n.autoRotate&&(n.autoRotate.rotation=a.rotation),1===t)for(o=n.firstMPT;o;){if(i=o.t,i.type){if(1===i.type){for(r=i.xs0+i.s+i.xs1,s=1;i.l>s;s++)r+=i["xn"+s]+i["xs"+(s+1)];i.e=r}}else i.e=i.s+i.xs0;o=o._next}},function(t,e,i,s,r){this.t=t,this.p=e,this.v=i,this.r=r,s&&(s._prev=this,this._next=s)}),pe=(X._parseToProxy=function(t,e,i,s,r,n){var a,o,h,l,_,u=s,p={},c={},f=i._transform,m=E;for(i._transform=null,E=e,s=_=i.parse(t,e,s,r),E=m,n&&(i._transform=f,u&&(u._prev=null,u._prev&&(u._prev._next=null)));s&&s!==u;){if(1>=s.type&&(o=s.p,c[o]=s.s+s.c,p[o]=s.s,n||(l=new ue(s,"s",o,l,s.r),s.c=0),1===s.type))for(a=s.l;--a>0;)h="xn"+a,o=s.p+"_"+h,c[o]=s.data[h],p[o]=s[h],n||(l=new ue(s,h,o,l,s.rxp[h]));s=s._next}return{proxy:p,end:c,firstMPT:l,pt:_}},X.CSSPropTween=function(t,e,s,r,a,o,h,l,_,u,p){this.t=t,this.p=e,this.s=s,this.c=r,this.n=h||e,t instanceof pe||n.push(this.n),this.r=l,this.type=o||0,_&&(this.pr=_,i=!0),this.b=void 0===u?s:u,this.e=void 0===p?s+r:p,a&&(this._next=a,a._prev=this)}),ce=a.parseComplex=function(t,e,i,s,r,n,a,o,h,_){i=i||n||"",a=new pe(t,e,0,0,a,_?2:1,null,!1,o,i,s),s+="";var u,p,c,f,g,v,y,T,w,x,P,S,k=i.split(", ").join(",").split(" "),R=s.split(", ").join(",").split(" "),A=k.length,C=l!==!1;for((-1!==s.indexOf(",")||-1!==i.indexOf(","))&&(k=k.join(" ").replace(D,", ").split(" "),R=R.join(" ").replace(D,", ").split(" "),A=k.length),A!==R.length&&(k=(n||"").split(" "),A=k.length),a.plugin=h,a.setRatio=_,u=0;A>u;u++)if(f=k[u],g=R[u],T=parseFloat(f),T||0===T)a.appendXtra("",T,ie(g,T),g.replace(d,""),C&&-1!==g.indexOf("px"),!0);else if(r&&("#"===f.charAt(0)||ne[f]||b.test(f)))S=","===g.charAt(g.length-1)?"),":")",f=oe(f),g=oe(g),w=f.length+g.length>6,w&&!U&&0===g[3]?(a["xs"+a.l]+=a.l?" transparent":"transparent",a.e=a.e.split(R[u]).join("transparent")):(U||(w=!1),a.appendXtra(w?"rgba(":"rgb(",f[0],g[0]-f[0],",",!0,!0).appendXtra("",f[1],g[1]-f[1],",",!0).appendXtra("",f[2],g[2]-f[2],w?",":S,!0),w&&(f=4>f.length?1:f[3],a.appendXtra("",f,(4>g.length?1:g[3])-f,S,!1)));else if(v=f.match(m)){if(y=g.match(d),!y||y.length!==v.length)return a;for(c=0,p=0;v.length>p;p++)P=v[p],x=f.indexOf(P,c),a.appendXtra(f.substr(c,x-c),Number(P),ie(y[p],P),"",C&&"px"===f.substr(x+P.length,2),0===p),c=x+P.length;a["xs"+a.l]+=f.substr(c)}else a["xs"+a.l]+=a.l?" "+f:f;if(-1!==s.indexOf("=")&&a.data){for(S=a.xs0+a.data.s,u=1;a.l>u;u++)S+=a["xs"+u]+a.data["xn"+u];a.e=S+a["xs"+u]}return a.l||(a.type=-1,a.xs0=a.e),a.xfirst||a},fe=9;for(h=pe.prototype,h.l=h.pr=0;--fe>0;)h["xn"+fe]=0,h["xs"+fe]="";h.xs0="",h._next=h._prev=h.xfirst=h.data=h.plugin=h.setRatio=h.rxp=null,h.appendXtra=function(t,e,i,s,r,n){var a=this,o=a.l;return a["xs"+o]+=n&&o?" "+t:t||"",i||0===o||a.plugin?(a.l++,a.type=a.setRatio?2:1,a["xs"+a.l]=s||"",o>0?(a.data["xn"+o]=e+i,a.rxp["xn"+o]=r,a["xn"+o]=e,a.plugin||(a.xfirst=new pe(a,"xn"+o,e,i,a.xfirst||a,0,a.n,r,a.pr),a.xfirst.xs0=0),a):(a.data={s:e+i},a.rxp={},a.s=e,a.c=i,a.r=r,a)):(a["xs"+o]+=e+(s||""),a)};var me=function(t,e){e=e||{},this.p=e.prefix?V(t)||t:t,o[t]=o[this.p]=this,this.format=e.formatter||le(e.defaultValue,e.color,e.collapsible,e.multi),e.parser&&(this.parse=e.parser),this.clrs=e.color,this.multi=e.multi,this.keyword=e.keyword,this.dflt=e.defaultValue,this.pr=e.priority||0},de=X._registerComplexSpecialProp=function(t,e,i){"object"!=typeof e&&(e={parser:i});var s,r,n=t.split(","),a=e.defaultValue;for(i=i||[a],s=0;n.length>s;s++)e.prefix=0===s&&e.prefix,e.defaultValue=i[s]||a,r=new me(n[s],e)},ge=function(t){if(!o[t]){var e=t.charAt(0).toUpperCase()+t.substr(1)+"Plugin";de(t,{parser:function(t,i,s,r,n,a,h){var l=(window.GreenSockGlobals||window).com.greensock.plugins[e];return l?(l._cssRegister(),o[s].parse(t,i,s,r,n,a,h)):(j("Error: "+e+" js file not loaded."),n)}})}};h=me.prototype,h.parseComplex=function(t,e,i,s,r,n){var a,o,h,l,_,u,p=this.keyword;if(this.multi&&(D.test(i)||D.test(e)?(o=e.replace(D,"|").split("|"),h=i.replace(D,"|").split("|")):p&&(o=[e],h=[i])),h){for(l=h.length>o.length?h.length:o.length,a=0;l>a;a++)e=o[a]=o[a]||this.dflt,i=h[a]=h[a]||this.dflt,p&&(_=e.indexOf(p),u=i.indexOf(p),_!==u&&(i=-1===u?h:o,i[a]+=" "+p));e=o.join(", "),i=h.join(", ")}return ce(t,this.p,e,i,this.clrs,this.dflt,s,this.pr,r,n)},h.parse=function(t,e,i,s,n,a){return this.parseComplex(t.style,this.format(G(t,this.p,r,!1,this.dflt)),this.format(e),n,a)},a.registerSpecialProp=function(t,e,i){de(t,{parser:function(t,s,r,n,a,o){var h=new pe(t,r,0,0,a,2,r,!1,i);return h.plugin=o,h.setRatio=e(t,s,n._tween,r),h},priority:i})};var ve="scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective".split(","),ye=V("transform"),Te=B+"transform",we=V("transformOrigin"),xe=null!==V("perspective"),be=X.Transform=function(){this.skewY=0},Pe=X.getTransform=function(t,e,i,s){if(t._gsTransform&&i&&!s)return t._gsTransform;var r,n,o,h,l,_,u,p,c,f,m,d,g,v=i?t._gsTransform||new be:new be,y=0>v.scaleX,T=2e-5,w=1e5,x=179.99,b=x*M,P=xe?parseFloat(G(t,we,e,!1,"0 0 0").split(" ")[2])||v.zOrigin||0:0;for(ye?r=G(t,Te,e,!0):t.currentStyle&&(r=t.currentStyle.filter.match(C),r=r&&4===r.length?[r[0].substr(4),Number(r[2].substr(4)),Number(r[1].substr(4)),r[3].substr(4),v.x||0,v.y||0].join(","):""),n=(r||"").match(/(?:\-|\b)[\d\-\.e]+\b/gi)||[],o=n.length;--o>-1;)h=Number(n[o]),n[o]=(l=h-(h|=0))?(0|l*w+(0>l?-.5:.5))/w+h:h;if(16===n.length){var S=n[8],k=n[9],R=n[10],A=n[12],O=n[13],D=n[14];if(v.zOrigin&&(D=-v.zOrigin,A=S*D-n[12],O=k*D-n[13],D=R*D+v.zOrigin-n[14]),!i||s||null==v.rotationX){var E,N,F,L,X,z,U,Y=n[0],j=n[1],B=n[2],q=n[3],V=n[4],W=n[5],$=n[6],Z=n[7],Q=n[11],H=Math.atan2($,R),K=-b>H||H>b;v.rotationX=H*I,H&&(L=Math.cos(-H),X=Math.sin(-H),E=V*L+S*X,N=W*L+k*X,F=$*L+R*X,S=V*-X+S*L,k=W*-X+k*L,R=$*-X+R*L,Q=Z*-X+Q*L,V=E,W=N,$=F),H=Math.atan2(S,Y),v.rotationY=H*I,H&&(z=-b>H||H>b,L=Math.cos(-H),X=Math.sin(-H),E=Y*L-S*X,N=j*L-k*X,F=B*L-R*X,k=j*X+k*L,R=B*X+R*L,Q=q*X+Q*L,Y=E,j=N,B=F),H=Math.atan2(j,W),v.rotation=H*I,H&&(U=-b>H||H>b,L=Math.cos(-H),X=Math.sin(-H),Y=Y*L+V*X,N=j*L+W*X,W=j*-X+W*L,$=B*-X+$*L,j=N),U&&K?v.rotation=v.rotationX=0:U&&z?v.rotation=v.rotationY=0:z&&K&&(v.rotationY=v.rotationX=0),v.scaleX=(0|Math.sqrt(Y*Y+j*j)*w+.5)/w,v.scaleY=(0|Math.sqrt(W*W+k*k)*w+.5)/w,v.scaleZ=(0|Math.sqrt($*$+R*R)*w+.5)/w,v.skewX=0,v.perspective=Q?1/(0>Q?-Q:Q):0,v.x=A,v.y=O,v.z=D}}else if(!(xe&&!s&&n.length&&v.x===n[4]&&v.y===n[5]&&(v.rotationX||v.rotationY)||void 0!==v.x&&"none"===G(t,"display",e))){var J=n.length>=6,te=J?n[0]:1,ee=n[1]||0,ie=n[2]||0,se=J?n[3]:1;v.x=n[4]||0,v.y=n[5]||0,_=Math.sqrt(te*te+ee*ee),u=Math.sqrt(se*se+ie*ie),p=te||ee?Math.atan2(ee,te)*I:v.rotation||0,c=ie||se?Math.atan2(ie,se)*I+p:v.skewX||0,f=_-Math.abs(v.scaleX||0),m=u-Math.abs(v.scaleY||0),Math.abs(c)>90&&270>Math.abs(c)&&(y?(_*=-1,c+=0>=p?180:-180,p+=0>=p?180:-180):(u*=-1,c+=0>=c?180:-180)),d=(p-v.rotation)%180,g=(c-v.skewX)%180,(void 0===v.skewX||f>T||-T>f||m>T||-T>m||d>-x&&x>d&&false|d*w||g>-x&&x>g&&false|g*w)&&(v.scaleX=_,v.scaleY=u,v.rotation=p,v.skewX=c),xe&&(v.rotationX=v.rotationY=v.z=0,v.perspective=parseFloat(a.defaultTransformPerspective)||0,v.scaleZ=1)}v.zOrigin=P;for(o in v)T>v[o]&&v[o]>-T&&(v[o]=0);return i&&(t._gsTransform=v),v},Se=function(t){var e,i,s=this.data,r=-s.rotation*M,n=r+s.skewX*M,a=1e5,o=(0|Math.cos(r)*s.scaleX*a)/a,h=(0|Math.sin(r)*s.scaleX*a)/a,l=(0|Math.sin(n)*-s.scaleY*a)/a,_=(0|Math.cos(n)*s.scaleY*a)/a,u=this.t.style,p=this.t.currentStyle;if(p){i=h,h=-l,l=-i,e=p.filter,u.filter="";var c,m,d=this.t.offsetWidth,g=this.t.offsetHeight,v="absolute"!==p.position,w="progid:DXImageTransform.Microsoft.Matrix(M11="+o+", M12="+h+", M21="+l+", M22="+_,x=s.x,b=s.y;if(null!=s.ox&&(c=(s.oxp?.01*d*s.ox:s.ox)-d/2,m=(s.oyp?.01*g*s.oy:s.oy)-g/2,x+=c-(c*o+m*h),b+=m-(c*l+m*_)),v?(c=d/2,m=g/2,w+=", Dx="+(c-(c*o+m*h)+x)+", Dy="+(m-(c*l+m*_)+b)+")"):w+=", sizingMethod='auto expand')",u.filter=-1!==e.indexOf("DXImageTransform.Microsoft.Matrix(")?e.replace(O,w):w+" "+e,(0===t||1===t)&&1===o&&0===h&&0===l&&1===_&&(v&&-1===w.indexOf("Dx=0, Dy=0")||T.test(e)&&100!==parseFloat(RegExp.$1)||-1===e.indexOf("gradient("&&e.indexOf("Alpha"))&&u.removeAttribute("filter")),!v){var P,S,k,R=8>f?1:-1;for(c=s.ieOffsetX||0,m=s.ieOffsetY||0,s.ieOffsetX=Math.round((d-((0>o?-o:o)*d+(0>h?-h:h)*g))/2+x),s.ieOffsetY=Math.round((g-((0>_?-_:_)*g+(0>l?-l:l)*d))/2+b),fe=0;4>fe;fe++)S=J[fe],P=p[S],i=-1!==P.indexOf("px")?parseFloat(P):$(this.t,S,parseFloat(P),P.replace(y,""))||0,k=i!==s[S]?2>fe?-s.ieOffsetX:-s.ieOffsetY:2>fe?c-s.ieOffsetX:m-s.ieOffsetY,u[S]=(s[S]=Math.round(i-k*(0===fe||2===fe?1:R)))+"px"}}},ke=X.set3DTransformRatio=function(){var t,e,i,s,r,n,a,o,h,l,_,u,c,f,m,d,g,v,y,T,w,x,b,P=this.data,S=this.t.style,k=P.rotation*M,R=P.scaleX,A=P.scaleY,C=P.scaleZ,O=P.perspective;if(p){var D=1e-4;D>R&&R>-D&&(R=C=2e-5),D>A&&A>-D&&(A=C=2e-5),!O||P.z||P.rotationX||P.rotationY||(O=0)}if(k||P.skewX)v=Math.cos(k),y=Math.sin(k),t=v,r=y,P.skewX&&(k-=P.skewX*M,v=Math.cos(k),y=Math.sin(k),"simple"===P.skewType&&(T=Math.tan(P.skewX*M),T=Math.sqrt(1+T*T),v*=T,y*=T)),e=-y,n=v;else{if(!(P.rotationY||P.rotationX||1!==C||O))return S[ye]="translate3d("+P.x+"px,"+P.y+"px,"+P.z+"px)"+(1!==R||1!==A?" scale("+R+","+A+")":""),void 0;t=n=1,e=r=0}_=1,i=s=a=o=h=l=u=c=f=0,m=O?-1/O:0,d=P.zOrigin,g=1e5,k=P.rotationY*M,k&&(v=Math.cos(k),y=Math.sin(k),h=_*-y,c=m*-y,i=t*y,a=r*y,_*=v,m*=v,t*=v,r*=v),k=P.rotationX*M,k&&(v=Math.cos(k),y=Math.sin(k),T=e*v+i*y,w=n*v+a*y,x=l*v+_*y,b=f*v+m*y,i=e*-y+i*v,a=n*-y+a*v,_=l*-y+_*v,m=f*-y+m*v,e=T,n=w,l=x,f=b),1!==C&&(i*=C,a*=C,_*=C,m*=C),1!==A&&(e*=A,n*=A,l*=A,f*=A),1!==R&&(t*=R,r*=R,h*=R,c*=R),d&&(u-=d,s=i*u,o=a*u,u=_*u+d),s=(T=(s+=P.x)-(s|=0))?(0|T*g+(0>T?-.5:.5))/g+s:s,o=(T=(o+=P.y)-(o|=0))?(0|T*g+(0>T?-.5:.5))/g+o:o,u=(T=(u+=P.z)-(u|=0))?(0|T*g+(0>T?-.5:.5))/g+u:u,S[ye]="matrix3d("+[(0|t*g)/g,(0|r*g)/g,(0|h*g)/g,(0|c*g)/g,(0|e*g)/g,(0|n*g)/g,(0|l*g)/g,(0|f*g)/g,(0|i*g)/g,(0|a*g)/g,(0|_*g)/g,(0|m*g)/g,s,o,u,O?1+-u/O:1].join(",")+")"},Re=X.set2DTransformRatio=function(t){var e,i,s,r,n,a=this.data,o=this.t,h=o.style;return a.rotationX||a.rotationY||a.z||a.force3D?(this.setRatio=ke,ke.call(this,t),void 0):(a.rotation||a.skewX?(e=a.rotation*M,i=e-a.skewX*M,s=1e5,r=a.scaleX*s,n=a.scaleY*s,h[ye]="matrix("+(0|Math.cos(e)*r)/s+","+(0|Math.sin(e)*r)/s+","+(0|Math.sin(i)*-n)/s+","+(0|Math.cos(i)*n)/s+","+a.x+","+a.y+")"):h[ye]="matrix("+a.scaleX+",0,0,"+a.scaleY+","+a.x+","+a.y+")",void 0)};de("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType",{parser:function(t,e,i,s,n,o,h){if(s._transform)return n;var l,_,u,p,c,f,m,d=s._transform=Pe(t,r,!0,h.parseTransform),g=t.style,v=1e-6,y=ve.length,T=h,w={};if("string"==typeof T.transform&&ye)u=g.cssText,g[ye]=T.transform,g.display="block",l=Pe(t,null,!1),g.cssText=u;else if("object"==typeof T){if(l={scaleX:se(null!=T.scaleX?T.scaleX:T.scale,d.scaleX),scaleY:se(null!=T.scaleY?T.scaleY:T.scale,d.scaleY),scaleZ:se(T.scaleZ,d.scaleZ),x:se(T.x,d.x),y:se(T.y,d.y),z:se(T.z,d.z),perspective:se(T.transformPerspective,d.perspective)},m=T.directionalRotation,null!=m)if("object"==typeof m)for(u in m)T[u]=m[u];else T.rotation=m;l.rotation=re("rotation"in T?T.rotation:"shortRotation"in T?T.shortRotation+"_short":"rotationZ"in T?T.rotationZ:d.rotation,d.rotation,"rotation",w),xe&&(l.rotationX=re("rotationX"in T?T.rotationX:"shortRotationX"in T?T.shortRotationX+"_short":d.rotationX||0,d.rotationX,"rotationX",w),l.rotationY=re("rotationY"in T?T.rotationY:"shortRotationY"in T?T.shortRotationY+"_short":d.rotationY||0,d.rotationY,"rotationY",w)),l.skewX=null==T.skewX?d.skewX:re(T.skewX,d.skewX),l.skewY=null==T.skewY?d.skewY:re(T.skewY,d.skewY),(_=l.skewY-d.skewY)&&(l.skewX+=_,l.rotation+=_)}for(xe&&null!=T.force3D&&(d.force3D=T.force3D,f=!0),d.skewType=T.skewType||d.skewType||a.defaultSkewType,c=d.force3D||d.z||d.rotationX||d.rotationY||l.z||l.rotationX||l.rotationY||l.perspective,c||null==T.scale||(l.scaleZ=1);--y>-1;)i=ve[y],p=l[i]-d[i],(p>v||-v>p||null!=E[i])&&(f=!0,n=new pe(d,i,d[i],p,n),i in w&&(n.e=w[i]),n.xs0=0,n.plugin=o,s._overwriteProps.push(n.n));return p=T.transformOrigin,(p||xe&&c&&d.zOrigin)&&(ye?(f=!0,i=we,p=(p||G(t,i,r,!1,"50% 50%"))+"",n=new pe(g,i,0,0,n,-1,"transformOrigin"),n.b=g[i],n.plugin=o,xe?(u=d.zOrigin,p=p.split(" "),d.zOrigin=(p.length>2&&(0===u||"0px"!==p[2])?parseFloat(p[2]):u)||0,n.xs0=n.e=g[i]=p[0]+" "+(p[1]||"50%")+" 0px",n=new pe(d,"zOrigin",0,0,n,-1,n.n),n.b=u,n.xs0=n.e=d.zOrigin):n.xs0=n.e=g[i]=p):ee(p+"",d)),f&&(s._transformType=c||3===this._transformType?3:2),n},prefix:!0}),de("boxShadow",{defaultValue:"0px 0px 0px 0px #999",prefix:!0,color:!0,multi:!0,keyword:"inset"}),de("borderRadius",{defaultValue:"0px",parser:function(t,e,i,n,a){e=this.format(e);var o,h,l,_,u,p,c,f,m,d,g,v,y,T,w,x,b=["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"],P=t.style;for(m=parseFloat(t.offsetWidth),d=parseFloat(t.offsetHeight),o=e.split(" "),h=0;b.length>h;h++)this.p.indexOf("border")&&(b[h]=V(b[h])),u=_=G(t,b[h],r,!1,"0px"),-1!==u.indexOf(" ")&&(_=u.split(" "),u=_[0],_=_[1]),p=l=o[h],c=parseFloat(u),v=u.substr((c+"").length),y="="===p.charAt(1),y?(f=parseInt(p.charAt(0)+"1",10),p=p.substr(2),f*=parseFloat(p),g=p.substr((f+"").length-(0>f?1:0))||""):(f=parseFloat(p),g=p.substr((f+"").length)),""===g&&(g=s[i]||v),g!==v&&(T=$(t,"borderLeft",c,v),w=$(t,"borderTop",c,v),"%"===g?(u=100*(T/m)+"%",_=100*(w/d)+"%"):"em"===g?(x=$(t,"borderLeft",1,"em"),u=T/x+"em",_=w/x+"em"):(u=T+"px",_=w+"px"),y&&(p=parseFloat(u)+f+g,l=parseFloat(_)+f+g)),a=ce(P,b[h],u+" "+_,p+" "+l,!1,"0px",a);return a},prefix:!0,formatter:le("0px 0px 0px 0px",!1,!0)}),de("backgroundPosition",{defaultValue:"0 0",parser:function(t,e,i,s,n,a){var o,h,l,_,u,p,c="background-position",m=r||W(t,null),d=this.format((m?f?m.getPropertyValue(c+"-x")+" "+m.getPropertyValue(c+"-y"):m.getPropertyValue(c):t.currentStyle.backgroundPositionX+" "+t.currentStyle.backgroundPositionY)||"0 0"),g=this.format(e);if(-1!==d.indexOf("%")!=(-1!==g.indexOf("%"))&&(p=G(t,"backgroundImage").replace(k,""),p&&"none"!==p)){for(o=d.split(" "),h=g.split(" "),L.setAttribute("src",p),l=2;--l>-1;)d=o[l],_=-1!==d.indexOf("%"),_!==(-1!==h[l].indexOf("%"))&&(u=0===l?t.offsetWidth-L.width:t.offsetHeight-L.height,o[l]=_?parseFloat(d)/100*u+"px":100*(parseFloat(d)/u)+"%");d=o.join(" ")}return this.parseComplex(t.style,d,g,n,a)},formatter:ee}),de("backgroundSize",{defaultValue:"0 0",formatter:ee}),de("perspective",{defaultValue:"0px",prefix:!0}),de("perspectiveOrigin",{defaultValue:"50% 50%",prefix:!0}),de("transformStyle",{prefix:!0}),de("backfaceVisibility",{prefix:!0}),de("userSelect",{prefix:!0}),de("margin",{parser:_e("marginTop,marginRight,marginBottom,marginLeft")}),de("padding",{parser:_e("paddingTop,paddingRight,paddingBottom,paddingLeft")}),de("clip",{defaultValue:"rect(0px,0px,0px,0px)",parser:function(t,e,i,s,n,a){var o,h,l;return 9>f?(h=t.currentStyle,l=8>f?" ":",",o="rect("+h.clipTop+l+h.clipRight+l+h.clipBottom+l+h.clipLeft+")",e=this.format(e).split(",").join(l)):(o=this.format(G(t,this.p,r,!1,this.dflt)),e=this.format(e)),this.parseComplex(t.style,o,e,n,a)}}),de("textShadow",{defaultValue:"0px 0px 0px #999",color:!0,multi:!0}),de("autoRound,strictUnits",{parser:function(t,e,i,s,r){return r}}),de("border",{defaultValue:"0px solid #000",parser:function(t,e,i,s,n,a){return this.parseComplex(t.style,this.format(G(t,"borderTopWidth",r,!1,"0px")+" "+G(t,"borderTopStyle",r,!1,"solid")+" "+G(t,"borderTopColor",r,!1,"#000")),this.format(e),n,a)},color:!0,formatter:function(t){var e=t.split(" ");return e[0]+" "+(e[1]||"solid")+" "+(t.match(he)||["#000"])[0]}}),de("borderWidth",{parser:_e("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")}),de("float,cssFloat,styleFloat",{parser:function(t,e,i,s,r){var n=t.style,a="cssFloat"in n?"cssFloat":"styleFloat";return new pe(n,a,0,0,r,-1,i,!1,0,n[a],e)}});var Ae=function(t){var e,i=this.t,s=i.filter||G(this.data,"filter"),r=0|this.s+this.c*t;100===r&&(-1===s.indexOf("atrix(")&&-1===s.indexOf("radient(")&&-1===s.indexOf("oader(")?(i.removeAttribute("filter"),e=!G(this.data,"filter")):(i.filter=s.replace(x,""),e=!0)),e||(this.xn1&&(i.filter=s=s||"alpha(opacity="+r+")"),-1===s.indexOf("opacity")?0===r&&this.xn1||(i.filter=s+" alpha(opacity="+r+")"):i.filter=s.replace(T,"opacity="+r))};de("opacity,alpha,autoAlpha",{defaultValue:"1",parser:function(t,e,i,s,n,a){var o=parseFloat(G(t,"opacity",r,!1,"1")),h=t.style,l="autoAlpha"===i;return"string"==typeof e&&"="===e.charAt(1)&&(e=("-"===e.charAt(0)?-1:1)*parseFloat(e.substr(2))+o),l&&1===o&&"hidden"===G(t,"visibility",r)&&0!==e&&(o=0),U?n=new pe(h,"opacity",o,e-o,n):(n=new pe(h,"opacity",100*o,100*(e-o),n),n.xn1=l?1:0,h.zoom=1,n.type=2,n.b="alpha(opacity="+n.s+")",n.e="alpha(opacity="+(n.s+n.c)+")",n.data=t,n.plugin=a,n.setRatio=Ae),l&&(n=new pe(h,"visibility",0,0,n,-1,null,!1,0,0!==o?"inherit":"hidden",0===e?"hidden":"inherit"),n.xs0="inherit",s._overwriteProps.push(n.n),s._overwriteProps.push(i)),n}});var Ce=function(t,e){e&&(t.removeProperty?("ms"===e.substr(0,2)&&(e="M"+e.substr(1)),t.removeProperty(e.replace(P,"-$1").toLowerCase())):t.removeAttribute(e))},Oe=function(t){if(this.t._gsClassPT=this,1===t||0===t){this.t.className=0===t?this.b:this.e;for(var e=this.data,i=this.t.style;e;)e.v?i[e.p]=e.v:Ce(i,e.p),e=e._next;1===t&&this.t._gsClassPT===this&&(this.t._gsClassPT=null)}else this.t.className!==this.e&&(this.t.className=this.e)};de("className",{parser:function(t,e,s,n,a,o,h){var l,_,u,p,c,f=t.className,m=t.style.cssText;if(a=n._classNamePT=new pe(t,s,0,0,a,2),a.setRatio=Oe,a.pr=-11,i=!0,a.b=f,_=Q(t,r),u=t._gsClassPT){for(p={},c=u.data;c;)p[c.p]=1,c=c._next;u.setRatio(1)}return t._gsClassPT=a,a.e="="!==e.charAt(1)?e:f.replace(RegExp("\\s*\\b"+e.substr(2)+"\\b"),"")+("+"===e.charAt(0)?" "+e.substr(2):""),n._tween._duration&&(t.className=a.e,l=H(t,_,Q(t),h,p),t.className=f,a.data=l.firstMPT,t.style.cssText=m,a=a.xfirst=n.parse(t,l.difs,a,o)),a}});var De=function(t){if((1===t||0===t)&&this.data._totalTime===this.data._totalDuration&&"isFromStart"!==this.data.data){var e,i,s,r,n=this.t.style,a=o.transform.parse;if("all"===this.e)n.cssText="",r=!0;else for(e=this.e.split(","),s=e.length;--s>-1;)i=e[s],o[i]&&(o[i].parse===a?r=!0:i="transformOrigin"===i?we:o[i].p),Ce(n,i);r&&(Ce(n,ye),this.t._gsTransform&&delete this.t._gsTransform)}};for(de("clearProps",{parser:function(t,e,s,r,n){return n=new pe(t,s,0,0,n,2),n.setRatio=De,n.e=e,n.pr=-10,n.data=r._tween,i=!0,n}}),h="bezier,throwProps,physicsProps,physics2D".split(","),fe=h.length;fe--;)ge(h[fe]);h=a.prototype,h._firstPT=null,h._onInitTween=function(t,e,o){if(!t.nodeType)return!1;this._target=t,this._tween=o,this._vars=e,l=e.autoRound,i=!1,s=e.suffixMap||a.suffixMap,r=W(t,""),n=this._overwriteProps;var h,p,f,m,d,g,v,y,T,x=t.style;if(_&&""===x.zIndex&&(h=G(t,"zIndex",r),("auto"===h||""===h)&&(x.zIndex=0)),"string"==typeof e&&(m=x.cssText,h=Q(t,r),x.cssText=m+";"+e,h=H(t,h,Q(t)).difs,!U&&w.test(e)&&(h.opacity=parseFloat(RegExp.$1)),e=h,x.cssText=m),this._firstPT=p=this.parse(t,e,null),this._transformType){for(T=3===this._transformType,ye?u&&(_=!0,""===x.zIndex&&(v=G(t,"zIndex",r),("auto"===v||""===v)&&(x.zIndex=0)),c&&(x.WebkitBackfaceVisibility=this._vars.WebkitBackfaceVisibility||(T?"visible":"hidden"))):x.zoom=1,f=p;f&&f._next;)f=f._next;y=new pe(t,"transform",0,0,null,2),this._linkCSSP(y,null,f),y.setRatio=T&&xe?ke:ye?Re:Se,y.data=this._transform||Pe(t,r,!0),n.pop()}if(i){for(;p;){for(g=p._next,f=m;f&&f.pr>p.pr;)f=f._next;(p._prev=f?f._prev:d)?p._prev._next=p:m=p,(p._next=f)?f._prev=p:d=p,p=g}this._firstPT=m}return!0},h.parse=function(t,e,i,n){var a,h,_,u,p,c,f,m,d,g,v=t.style;for(a in e)c=e[a],h=o[a],h?i=h.parse(t,c,a,this,i,n,e):(p=G(t,a,r)+"",d="string"==typeof c,"color"===a||"fill"===a||"stroke"===a||-1!==a.indexOf("Color")||d&&b.test(c)?(d||(c=oe(c),c=(c.length>3?"rgba(":"rgb(")+c.join(",")+")"),i=ce(v,a,p,c,!0,"transparent",i,0,n)):!d||-1===c.indexOf(" ")&&-1===c.indexOf(",")?(_=parseFloat(p),f=_||0===_?p.substr((_+"").length):"",(""===p||"auto"===p)&&("width"===a||"height"===a?(_=te(t,a,r),f="px"):"left"===a||"top"===a?(_=Z(t,a,r),f="px"):(_="opacity"!==a?0:1,f="")),g=d&&"="===c.charAt(1),g?(u=parseInt(c.charAt(0)+"1",10),c=c.substr(2),u*=parseFloat(c),m=c.replace(y,"")):(u=parseFloat(c),m=d?c.substr((u+"").length)||"":""),""===m&&(m=a in s?s[a]:f),c=u||0===u?(g?u+_:u)+m:e[a],f!==m&&""!==m&&(u||0===u)&&_&&(_=$(t,a,_,f),"%"===m?(_/=$(t,a,100,"%")/100,e.strictUnits!==!0&&(p=_+"%")):"em"===m?_/=$(t,a,1,"em"):"px"!==m&&(u=$(t,a,u,m),m="px"),g&&(u||0===u)&&(c=u+_+m)),g&&(u+=_),!_&&0!==_||!u&&0!==u?void 0!==v[a]&&(c||"NaN"!=c+""&&null!=c)?(i=new pe(v,a,u||_||0,0,i,-1,a,!1,0,p,c),i.xs0="none"!==c||"display"!==a&&-1===a.indexOf("Style")?c:p):j("invalid "+a+" tween value: "+e[a]):(i=new pe(v,a,_,u-_,i,0,a,l!==!1&&("px"===m||"zIndex"===a),0,p,c),i.xs0=m)):i=ce(v,a,p,c,!0,null,i,0,n)),n&&i&&!i.plugin&&(i.plugin=n);return i},h.setRatio=function(t){var e,i,s,r=this._firstPT,n=1e-6;if(1!==t||this._tween._time!==this._tween._duration&&0!==this._tween._time)if(t||this._tween._time!==this._tween._duration&&0!==this._tween._time||this._tween._rawPrevTime===-1e-6)for(;r;){if(e=r.c*t+r.s,r.r?e=Math.round(e):n>e&&e>-n&&(e=0),r.type)if(1===r.type)if(s=r.l,2===s)r.t[r.p]=r.xs0+e+r.xs1+r.xn1+r.xs2;else if(3===s)r.t[r.p]=r.xs0+e+r.xs1+r.xn1+r.xs2+r.xn2+r.xs3;else if(4===s)r.t[r.p]=r.xs0+e+r.xs1+r.xn1+r.xs2+r.xn2+r.xs3+r.xn3+r.xs4;else if(5===s)r.t[r.p]=r.xs0+e+r.xs1+r.xn1+r.xs2+r.xn2+r.xs3+r.xn3+r.xs4+r.xn4+r.xs5;else{for(i=r.xs0+e+r.xs1,s=1;r.l>s;s++)i+=r["xn"+s]+r["xs"+(s+1)];r.t[r.p]=i}else-1===r.type?r.t[r.p]=r.xs0:r.setRatio&&r.setRatio(t);else r.t[r.p]=e+r.xs0;r=r._next}else for(;r;)2!==r.type?r.t[r.p]=r.b:r.setRatio(t),r=r._next;else for(;r;)2!==r.type?r.t[r.p]=r.e:r.setRatio(t),r=r._next},h._enableTransforms=function(t){this._transformType=t||3===this._transformType?3:2,this._transform=this._transform||Pe(this._target,r,!0)},h._linkCSSP=function(t,e,i,s){return t&&(e&&(e._prev=t),t._next&&(t._next._prev=t._prev),t._prev?t._prev._next=t._next:this._firstPT===t&&(this._firstPT=t._next,s=!0),i?i._next=t:s||null!==this._firstPT||(this._firstPT=t),t._next=e,t._prev=i),t},h._kill=function(e){var i,s,r,n=e;if(e.autoAlpha||e.alpha){n={};for(s in e)n[s]=e[s];n.opacity=1,n.autoAlpha&&(n.visibility=1)}return e.className&&(i=this._classNamePT)&&(r=i.xfirst,r&&r._prev?this._linkCSSP(r._prev,i._next,r._prev._prev):r===this._firstPT&&(this._firstPT=i._next),i._next&&this._linkCSSP(i._next,i._next._next,r._prev),this._classNamePT=null),t.prototype._kill.call(this,n)};var Me=function(t,e,i){var s,r,n,a;if(t.slice)for(r=t.length;--r>-1;)Me(t[r],e,i);else for(s=t.childNodes,r=s.length;--r>-1;)n=s[r],a=n.type,n.style&&(e.push(Q(n)),i&&i.push(n)),1!==a&&9!==a&&11!==a||!n.childNodes.length||Me(n,e,i)
};return a.cascadeTo=function(t,i,s){var r,n,a,o=e.to(t,i,s),h=[o],l=[],_=[],u=[],p=e._internals.reservedProps;for(t=o._targets||o.target,Me(t,l,u),o.render(i,!0),Me(t,_),o.render(0,!0),o._enabled(!0),r=u.length;--r>-1;)if(n=H(u[r],l[r],_[r]),n.firstMPT){n=n.difs;for(a in s)p[a]&&(n[a]=s[a]);h.push(e.to(u[r],i,n))}return h},t.activate([a]),a},!0),function(){var t=window._gsDefine.plugin({propName:"roundProps",priority:-1,API:2,init:function(t,e,i){return this._tween=i,!0}}),e=t.prototype;e._onInitAllProps=function(){for(var t,e,i,s=this._tween,r=s.vars.roundProps instanceof Array?s.vars.roundProps:s.vars.roundProps.split(","),n=r.length,a={},o=s._propLookup.roundProps;--n>-1;)a[r[n]]=1;for(n=r.length;--n>-1;)for(t=r[n],e=s._firstPT;e;)i=e._next,e.pg?e.t._roundProps(a,!0):e.n===t&&(this._add(e.t,t,e.s,e.c),i&&(i._prev=e._prev),e._prev?e._prev._next=i:s._firstPT===e&&(s._firstPT=i),e._next=e._prev=null,s._propLookup[t]=o),e=i;return!1},e._add=function(t,e,i,s){this._addTween(t,e,i,i+s,e,!0),this._overwriteProps.push(e)}}(),window._gsDefine.plugin({propName:"attr",API:2,version:"0.3.0",init:function(t,e,i){var s,r,n;if("function"!=typeof t.setAttribute)return!1;this._target=t,this._proxy={},this._start={},this._end={},this._endRatio=i.vars.runBackwards?0:1;for(s in e)this._start[s]=this._proxy[s]=r=t.getAttribute(s),this._end[s]=n=e[s],this._addTween(this._proxy,s,parseFloat(r),n,s),this._overwriteProps.push(s);return!0},set:function(t){this._super.setRatio.call(this,t);for(var e,i=this._overwriteProps,s=i.length,r=0!==t&&1!==t?this._proxy:t===this._endRatio?this._end:this._start;--s>-1;)e=i[s],this._target.setAttribute(e,r[e]+"")}}),window._gsDefine.plugin({propName:"directionalRotation",API:2,version:"0.2.0",init:function(t,e){"object"!=typeof e&&(e={rotation:e}),this.finals={};var i,s,r,n,a,o,h=e.useRadians===!0?2*Math.PI:360,l=1e-6;for(i in e)"useRadians"!==i&&(o=(e[i]+"").split("_"),s=o[0],r=parseFloat("function"!=typeof t[i]?t[i]:t[i.indexOf("set")||"function"!=typeof t["get"+i.substr(3)]?i:"get"+i.substr(3)]()),n=this.finals[i]="string"==typeof s&&"="===s.charAt(1)?r+parseInt(s.charAt(0)+"1",10)*Number(s.substr(2)):Number(s)||0,a=n-r,o.length&&(s=o.join("_"),-1!==s.indexOf("short")&&(a%=h,a!==a%(h/2)&&(a=0>a?a+h:a-h)),-1!==s.indexOf("_cw")&&0>a?a=(a+9999999999*h)%h-(0|a/h)*h:-1!==s.indexOf("ccw")&&a>0&&(a=(a-9999999999*h)%h-(0|a/h)*h)),(a>l||-l>a)&&(this._addTween(t,i,r,r+a,i),this._overwriteProps.push(i)));return!0},set:function(t){var e;if(1!==t)this._super.setRatio.call(this,t);else for(e=this._firstPT;e;)e.f?e.t[e.p](this.finals[e.p]):e.t[e.p]=this.finals[e.p],e=e._next}})._autoCSS=!0,window._gsDefine("easing.Back",["easing.Ease"],function(t){var e,i,s,r=window.GreenSockGlobals||window,n=r.com.greensock,a=2*Math.PI,o=Math.PI/2,h=n._class,l=function(e,i){var s=h("easing."+e,function(){},!0),r=s.prototype=new t;return r.constructor=s,r.getRatio=i,s},_=t.register||function(){},u=function(t,e,i,s){var r=h("easing."+t,{easeOut:new e,easeIn:new i,easeInOut:new s},!0);return _(r,t),r},p=function(t,e,i){this.t=t,this.v=e,i&&(this.next=i,i.prev=this,this.c=i.v-e,this.gap=i.t-t)},c=function(e,i){var s=h("easing."+e,function(t){this._p1=t||0===t?t:1.70158,this._p2=1.525*this._p1},!0),r=s.prototype=new t;return r.constructor=s,r.getRatio=i,r.config=function(t){return new s(t)},s},f=u("Back",c("BackOut",function(t){return(t-=1)*t*((this._p1+1)*t+this._p1)+1}),c("BackIn",function(t){return t*t*((this._p1+1)*t-this._p1)}),c("BackInOut",function(t){return 1>(t*=2)?.5*t*t*((this._p2+1)*t-this._p2):.5*((t-=2)*t*((this._p2+1)*t+this._p2)+2)})),m=h("easing.SlowMo",function(t,e,i){e=e||0===e?e:.7,null==t?t=.7:t>1&&(t=1),this._p=1!==t?e:0,this._p1=(1-t)/2,this._p2=t,this._p3=this._p1+this._p2,this._calcEnd=i===!0},!0),d=m.prototype=new t;return d.constructor=m,d.getRatio=function(t){var e=t+(.5-t)*this._p;return this._p1>t?this._calcEnd?1-(t=1-t/this._p1)*t:e-(t=1-t/this._p1)*t*t*t*e:t>this._p3?this._calcEnd?1-(t=(t-this._p3)/this._p1)*t:e+(t-e)*(t=(t-this._p3)/this._p1)*t*t*t:this._calcEnd?1:e},m.ease=new m(.7,.7),d.config=m.config=function(t,e,i){return new m(t,e,i)},e=h("easing.SteppedEase",function(t){t=t||1,this._p1=1/t,this._p2=t+1},!0),d=e.prototype=new t,d.constructor=e,d.getRatio=function(t){return 0>t?t=0:t>=1&&(t=.999999999),(this._p2*t>>0)*this._p1},d.config=e.config=function(t){return new e(t)},i=h("easing.RoughEase",function(e){e=e||{};for(var i,s,r,n,a,o,h=e.taper||"none",l=[],_=0,u=0|(e.points||20),c=u,f=e.randomize!==!1,m=e.clamp===!0,d=e.template instanceof t?e.template:null,g="number"==typeof e.strength?.4*e.strength:.4;--c>-1;)i=f?Math.random():1/u*c,s=d?d.getRatio(i):i,"none"===h?r=g:"out"===h?(n=1-i,r=n*n*g):"in"===h?r=i*i*g:.5>i?(n=2*i,r=.5*n*n*g):(n=2*(1-i),r=.5*n*n*g),f?s+=Math.random()*r-.5*r:c%2?s+=.5*r:s-=.5*r,m&&(s>1?s=1:0>s&&(s=0)),l[_++]={x:i,y:s};for(l.sort(function(t,e){return t.x-e.x}),o=new p(1,1,null),c=u;--c>-1;)a=l[c],o=new p(a.x,a.y,o);this._prev=new p(0,0,0!==o.t?o:o.next)},!0),d=i.prototype=new t,d.constructor=i,d.getRatio=function(t){var e=this._prev;if(t>e.t){for(;e.next&&t>=e.t;)e=e.next;e=e.prev}else for(;e.prev&&e.t>=t;)e=e.prev;return this._prev=e,e.v+(t-e.t)/e.gap*e.c},d.config=function(t){return new i(t)},i.ease=new i,u("Bounce",l("BounceOut",function(t){return 1/2.75>t?7.5625*t*t:2/2.75>t?7.5625*(t-=1.5/2.75)*t+.75:2.5/2.75>t?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375}),l("BounceIn",function(t){return 1/2.75>(t=1-t)?1-7.5625*t*t:2/2.75>t?1-(7.5625*(t-=1.5/2.75)*t+.75):2.5/2.75>t?1-(7.5625*(t-=2.25/2.75)*t+.9375):1-(7.5625*(t-=2.625/2.75)*t+.984375)}),l("BounceInOut",function(t){var e=.5>t;return t=e?1-2*t:2*t-1,t=1/2.75>t?7.5625*t*t:2/2.75>t?7.5625*(t-=1.5/2.75)*t+.75:2.5/2.75>t?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375,e?.5*(1-t):.5*t+.5})),u("Circ",l("CircOut",function(t){return Math.sqrt(1-(t-=1)*t)}),l("CircIn",function(t){return-(Math.sqrt(1-t*t)-1)}),l("CircInOut",function(t){return 1>(t*=2)?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)})),s=function(e,i,s){var r=h("easing."+e,function(t,e){this._p1=t||1,this._p2=e||s,this._p3=this._p2/a*(Math.asin(1/this._p1)||0)},!0),n=r.prototype=new t;return n.constructor=r,n.getRatio=i,n.config=function(t,e){return new r(t,e)},r},u("Elastic",s("ElasticOut",function(t){return this._p1*Math.pow(2,-10*t)*Math.sin((t-this._p3)*a/this._p2)+1},.3),s("ElasticIn",function(t){return-(this._p1*Math.pow(2,10*(t-=1))*Math.sin((t-this._p3)*a/this._p2))},.3),s("ElasticInOut",function(t){return 1>(t*=2)?-.5*this._p1*Math.pow(2,10*(t-=1))*Math.sin((t-this._p3)*a/this._p2):.5*this._p1*Math.pow(2,-10*(t-=1))*Math.sin((t-this._p3)*a/this._p2)+1},.45)),u("Expo",l("ExpoOut",function(t){return 1-Math.pow(2,-10*t)}),l("ExpoIn",function(t){return Math.pow(2,10*(t-1))-.001}),l("ExpoInOut",function(t){return 1>(t*=2)?.5*Math.pow(2,10*(t-1)):.5*(2-Math.pow(2,-10*(t-1)))})),u("Sine",l("SineOut",function(t){return Math.sin(t*o)}),l("SineIn",function(t){return-Math.cos(t*o)+1}),l("SineInOut",function(t){return-.5*(Math.cos(Math.PI*t)-1)})),h("easing.EaseLookup",{find:function(e){return t.map[e]}},!0),_(r.SlowMo,"SlowMo","ease,"),_(i,"RoughEase","ease,"),_(e,"SteppedEase","ease,"),f},!0)}),function(t){"use strict";var e=t.GreenSockGlobals||t;if(!e.TweenLite){var i,s,r,n,a,o=function(t){var i,s=t.split("."),r=e;for(i=0;s.length>i;i++)r[s[i]]=r=r[s[i]]||{};return r},h=o("com.greensock"),l=1e-10,_=[].slice,u=function(){},p=function(){var t=Object.prototype.toString,e=t.call([]);return function(i){return null!=i&&(i instanceof Array||"object"==typeof i&&!!i.push&&t.call(i)===e)}}(),c={},f=function(i,s,r,n){this.sc=c[i]?c[i].sc:[],c[i]=this,this.gsClass=null,this.func=r;var a=[];this.check=function(h){for(var l,_,u,p,m=s.length,d=m;--m>-1;)(l=c[s[m]]||new f(s[m],[])).gsClass?(a[m]=l.gsClass,d--):h&&l.sc.push(this);if(0===d&&r)for(_=("com.greensock."+i).split("."),u=_.pop(),p=o(_.join("."))[u]=this.gsClass=r.apply(r,a),n&&(e[u]=p,"function"==typeof define&&define.amd?define((t.GreenSockAMDPath?t.GreenSockAMDPath+"/":"")+i.split(".").join("/"),[],function(){return p}):"undefined"!=typeof module&&module.exports&&(module.exports=p)),m=0;this.sc.length>m;m++)this.sc[m].check()},this.check(!0)},m=t._gsDefine=function(t,e,i,s){return new f(t,e,i,s)},d=h._class=function(t,e,i){return e=e||function(){},m(t,[],function(){return e},i),e};m.globals=e;var g=[0,0,1,1],v=[],y=d("easing.Ease",function(t,e,i,s){this._func=t,this._type=i||0,this._power=s||0,this._params=e?g.concat(e):g},!0),T=y.map={},w=y.register=function(t,e,i,s){for(var r,n,a,o,l=e.split(","),_=l.length,u=(i||"easeIn,easeOut,easeInOut").split(",");--_>-1;)for(n=l[_],r=s?d("easing."+n,null,!0):h.easing[n]||{},a=u.length;--a>-1;)o=u[a],T[n+"."+o]=T[o+n]=r[o]=t.getRatio?t:t[o]||new t};for(r=y.prototype,r._calcEnd=!1,r.getRatio=function(t){if(this._func)return this._params[0]=t,this._func.apply(null,this._params);var e=this._type,i=this._power,s=1===e?1-t:2===e?t:.5>t?2*t:2*(1-t);return 1===i?s*=s:2===i?s*=s*s:3===i?s*=s*s*s:4===i&&(s*=s*s*s*s),1===e?1-s:2===e?s:.5>t?s/2:1-s/2},i=["Linear","Quad","Cubic","Quart","Quint,Strong"],s=i.length;--s>-1;)r=i[s]+",Power"+s,w(new y(null,null,1,s),r,"easeOut",!0),w(new y(null,null,2,s),r,"easeIn"+(0===s?",easeNone":"")),w(new y(null,null,3,s),r,"easeInOut");T.linear=h.easing.Linear.easeIn,T.swing=h.easing.Quad.easeInOut;var x=d("events.EventDispatcher",function(t){this._listeners={},this._eventTarget=t||this});r=x.prototype,r.addEventListener=function(t,e,i,s,r){r=r||0;var o,h,l=this._listeners[t],_=0;for(null==l&&(this._listeners[t]=l=[]),h=l.length;--h>-1;)o=l[h],o.c===e&&o.s===i?l.splice(h,1):0===_&&r>o.pr&&(_=h+1);l.splice(_,0,{c:e,s:i,up:s,pr:r}),this!==n||a||n.wake()},r.removeEventListener=function(t,e){var i,s=this._listeners[t];if(s)for(i=s.length;--i>-1;)if(s[i].c===e)return s.splice(i,1),void 0},r.dispatchEvent=function(t){var e,i,s,r=this._listeners[t];if(r)for(e=r.length,i=this._eventTarget;--e>-1;)s=r[e],s.up?s.c.call(s.s||i,{type:t,target:i}):s.c.call(s.s||i)};var b=t.requestAnimationFrame,P=t.cancelAnimationFrame,S=Date.now||function(){return(new Date).getTime()},k=S();for(i=["ms","moz","webkit","o"],s=i.length;--s>-1&&!b;)b=t[i[s]+"RequestAnimationFrame"],P=t[i[s]+"CancelAnimationFrame"]||t[i[s]+"CancelRequestAnimationFrame"];d("Ticker",function(t,e){var i,s,r,o,h,l=this,_=S(),p=e!==!1&&b,c=function(t){k=S(),l.time=(k-_)/1e3;var e,n=l.time-h;(!i||n>0||t===!0)&&(l.frame++,h+=n+(n>=o?.004:o-n),e=!0),t!==!0&&(r=s(c)),e&&l.dispatchEvent("tick")};x.call(l),l.time=l.frame=0,l.tick=function(){c(!0)},l.sleep=function(){null!=r&&(p&&P?P(r):clearTimeout(r),s=u,r=null,l===n&&(a=!1))},l.wake=function(){null!==r&&l.sleep(),s=0===i?u:p&&b?b:function(t){return setTimeout(t,0|1e3*(h-l.time)+1)},l===n&&(a=!0),c(2)},l.fps=function(t){return arguments.length?(i=t,o=1/(i||60),h=this.time+o,l.wake(),void 0):i},l.useRAF=function(t){return arguments.length?(l.sleep(),p=t,l.fps(i),void 0):p},l.fps(t),setTimeout(function(){p&&(!r||5>l.frame)&&l.useRAF(!1)},1500)}),r=h.Ticker.prototype=new h.events.EventDispatcher,r.constructor=h.Ticker;var R=d("core.Animation",function(t,e){if(this.vars=e=e||{},this._duration=this._totalDuration=t||0,this._delay=Number(e.delay)||0,this._timeScale=1,this._active=e.immediateRender===!0,this.data=e.data,this._reversed=e.reversed===!0,U){a||n.wake();var i=this.vars.useFrames?z:U;i.add(this,i._time),this.vars.paused&&this.paused(!0)}});n=R.ticker=new h.Ticker,r=R.prototype,r._dirty=r._gc=r._initted=r._paused=!1,r._totalTime=r._time=0,r._rawPrevTime=-1,r._next=r._last=r._onUpdate=r._timeline=r.timeline=null,r._paused=!1;var A=function(){a&&S()-k>2e3&&n.wake(),setTimeout(A,2e3)};A(),r.play=function(t,e){return null!=t&&this.seek(t,e),this.reversed(!1).paused(!1)},r.pause=function(t,e){return null!=t&&this.seek(t,e),this.paused(!0)},r.resume=function(t,e){return null!=t&&this.seek(t,e),this.paused(!1)},r.seek=function(t,e){return this.totalTime(Number(t),e!==!1)},r.restart=function(t,e){return this.reversed(!1).paused(!1).totalTime(t?-this._delay:0,e!==!1,!0)},r.reverse=function(t,e){return null!=t&&this.seek(t||this.totalDuration(),e),this.reversed(!0).paused(!1)},r.render=function(){},r.invalidate=function(){return this},r.isActive=function(){var t,e=this._timeline,i=this._startTime;return!e||!this._gc&&!this._paused&&e.isActive()&&(t=e.rawTime())>=i&&i+this.totalDuration()/this._timeScale>t},r._enabled=function(t,e){return a||n.wake(),this._gc=!t,this._active=this.isActive(),e!==!0&&(t&&!this.timeline?this._timeline.add(this,this._startTime-this._delay):!t&&this.timeline&&this._timeline._remove(this,!0)),!1},r._kill=function(){return this._enabled(!1,!1)},r.kill=function(t,e){return this._kill(t,e),this},r._uncache=function(t){for(var e=t?this:this.timeline;e;)e._dirty=!0,e=e.timeline;return this},r._swapSelfInParams=function(t){for(var e=t.length,i=t.concat();--e>-1;)"{self}"===t[e]&&(i[e]=this);return i},r.eventCallback=function(t,e,i,s){if("on"===(t||"").substr(0,2)){var r=this.vars;if(1===arguments.length)return r[t];null==e?delete r[t]:(r[t]=e,r[t+"Params"]=p(i)&&-1!==i.join("").indexOf("{self}")?this._swapSelfInParams(i):i,r[t+"Scope"]=s),"onUpdate"===t&&(this._onUpdate=e)}return this},r.delay=function(t){return arguments.length?(this._timeline.smoothChildTiming&&this.startTime(this._startTime+t-this._delay),this._delay=t,this):this._delay},r.duration=function(t){return arguments.length?(this._duration=this._totalDuration=t,this._uncache(!0),this._timeline.smoothChildTiming&&this._time>0&&this._time<this._duration&&0!==t&&this.totalTime(this._totalTime*(t/this._duration),!0),this):(this._dirty=!1,this._duration)},r.totalDuration=function(t){return this._dirty=!1,arguments.length?this.duration(t):this._totalDuration},r.time=function(t,e){return arguments.length?(this._dirty&&this.totalDuration(),this.totalTime(t>this._duration?this._duration:t,e)):this._time},r.totalTime=function(t,e,i){if(a||n.wake(),!arguments.length)return this._totalTime;if(this._timeline){if(0>t&&!i&&(t+=this.totalDuration()),this._timeline.smoothChildTiming){this._dirty&&this.totalDuration();var s=this._totalDuration,r=this._timeline;if(t>s&&!i&&(t=s),this._startTime=(this._paused?this._pauseTime:r._time)-(this._reversed?s-t:t)/this._timeScale,r._dirty||this._uncache(!1),r._timeline)for(;r._timeline;)r._timeline._time!==(r._startTime+r._totalTime)/r._timeScale&&r.totalTime(r._totalTime,!0),r=r._timeline}this._gc&&this._enabled(!0,!1),(this._totalTime!==t||0===this._duration)&&this.render(t,e,!1)}return this},r.progress=r.totalProgress=function(t,e){return arguments.length?this.totalTime(this.duration()*t,e):this._time/this.duration()},r.startTime=function(t){return arguments.length?(t!==this._startTime&&(this._startTime=t,this.timeline&&this.timeline._sortChildren&&this.timeline.add(this,t-this._delay)),this):this._startTime},r.timeScale=function(t){if(!arguments.length)return this._timeScale;if(t=t||l,this._timeline&&this._timeline.smoothChildTiming){var e=this._pauseTime,i=e||0===e?e:this._timeline.totalTime();this._startTime=i-(i-this._startTime)*this._timeScale/t}return this._timeScale=t,this._uncache(!1)},r.reversed=function(t){return arguments.length?(t!=this._reversed&&(this._reversed=t,this.totalTime(this._timeline&&!this._timeline.smoothChildTiming?this.totalDuration()-this._totalTime:this._totalTime,!0)),this):this._reversed},r.paused=function(t){if(!arguments.length)return this._paused;if(t!=this._paused&&this._timeline){a||t||n.wake();var e=this._timeline,i=e.rawTime(),s=i-this._pauseTime;!t&&e.smoothChildTiming&&(this._startTime+=s,this._uncache(!1)),this._pauseTime=t?i:null,this._paused=t,this._active=this.isActive(),!t&&0!==s&&this._initted&&this.duration()&&this.render(e.smoothChildTiming?this._totalTime:(i-this._startTime)/this._timeScale,!0,!0)}return this._gc&&!t&&this._enabled(!0,!1),this};var C=d("core.SimpleTimeline",function(t){R.call(this,0,t),this.autoRemoveChildren=this.smoothChildTiming=!0});r=C.prototype=new R,r.constructor=C,r.kill()._gc=!1,r._first=r._last=null,r._sortChildren=!1,r.add=r.insert=function(t,e){var i,s;if(t._startTime=Number(e||0)+t._delay,t._paused&&this!==t._timeline&&(t._pauseTime=t._startTime+(this.rawTime()-t._startTime)/t._timeScale),t.timeline&&t.timeline._remove(t,!0),t.timeline=t._timeline=this,t._gc&&t._enabled(!0,!0),i=this._last,this._sortChildren)for(s=t._startTime;i&&i._startTime>s;)i=i._prev;return i?(t._next=i._next,i._next=t):(t._next=this._first,this._first=t),t._next?t._next._prev=t:this._last=t,t._prev=i,this._timeline&&this._uncache(!0),this},r._remove=function(t,e){return t.timeline===this&&(e||t._enabled(!1,!0),t.timeline=null,t._prev?t._prev._next=t._next:this._first===t&&(this._first=t._next),t._next?t._next._prev=t._prev:this._last===t&&(this._last=t._prev),this._timeline&&this._uncache(!0)),this},r.render=function(t,e,i){var s,r=this._first;for(this._totalTime=this._time=this._rawPrevTime=t;r;)s=r._next,(r._active||t>=r._startTime&&!r._paused)&&(r._reversed?r.render((r._dirty?r.totalDuration():r._totalDuration)-(t-r._startTime)*r._timeScale,e,i):r.render((t-r._startTime)*r._timeScale,e,i)),r=s},r.rawTime=function(){return a||n.wake(),this._totalTime};var O=d("TweenLite",function(e,i,s){if(R.call(this,i,s),this.render=O.prototype.render,null==e)throw"Cannot tween a null target.";this.target=e="string"!=typeof e?e:O.selector(e)||e;var r,n,a,o=e.jquery||e.length&&e!==t&&e[0]&&(e[0]===t||e[0].nodeType&&e[0].style&&!e.nodeType),h=this.vars.overwrite;if(this._overwrite=h=null==h?X[O.defaultOverwrite]:"number"==typeof h?h>>0:X[h],(o||e instanceof Array||e.push&&p(e))&&"number"!=typeof e[0])for(this._targets=a=_.call(e,0),this._propLookup=[],this._siblings=[],r=0;a.length>r;r++)n=a[r],n?"string"!=typeof n?n.length&&n!==t&&n[0]&&(n[0]===t||n[0].nodeType&&n[0].style&&!n.nodeType)?(a.splice(r--,1),this._targets=a=a.concat(_.call(n,0))):(this._siblings[r]=Y(n,this,!1),1===h&&this._siblings[r].length>1&&j(n,this,null,1,this._siblings[r])):(n=a[r--]=O.selector(n),"string"==typeof n&&a.splice(r+1,1)):a.splice(r--,1);else this._propLookup={},this._siblings=Y(e,this,!1),1===h&&this._siblings.length>1&&j(e,this,null,1,this._siblings);(this.vars.immediateRender||0===i&&0===this._delay&&this.vars.immediateRender!==!1)&&this.render(-this._delay,!1,!0)},!0),D=function(e){return e.length&&e!==t&&e[0]&&(e[0]===t||e[0].nodeType&&e[0].style&&!e.nodeType)},M=function(t,e){var i,s={};for(i in t)L[i]||i in e&&"x"!==i&&"y"!==i&&"width"!==i&&"height"!==i&&"className"!==i&&"border"!==i||!(!E[i]||E[i]&&E[i]._autoCSS)||(s[i]=t[i],delete t[i]);t.css=s};r=O.prototype=new R,r.constructor=O,r.kill()._gc=!1,r.ratio=0,r._firstPT=r._targets=r._overwrittenProps=r._startAt=null,r._notifyPluginsOfEnabled=!1,O.version="1.11.8",O.defaultEase=r._ease=new y(null,null,1,1),O.defaultOverwrite="auto",O.ticker=n,O.autoSleep=!0,O.selector=t.$||t.jQuery||function(e){return t.$?(O.selector=t.$,t.$(e)):t.document?t.document.getElementById("#"===e.charAt(0)?e.substr(1):e):e};var I=O._internals={isArray:p,isSelector:D},E=O._plugins={},N=O._tweenLookup={},F=0,L=I.reservedProps={ease:1,delay:1,overwrite:1,onComplete:1,onCompleteParams:1,onCompleteScope:1,useFrames:1,runBackwards:1,startAt:1,onUpdate:1,onUpdateParams:1,onUpdateScope:1,onStart:1,onStartParams:1,onStartScope:1,onReverseComplete:1,onReverseCompleteParams:1,onReverseCompleteScope:1,onRepeat:1,onRepeatParams:1,onRepeatScope:1,easeParams:1,yoyo:1,immediateRender:1,repeat:1,repeatDelay:1,data:1,paused:1,reversed:1,autoCSS:1},X={none:0,all:1,auto:2,concurrent:3,allOnStart:4,preexisting:5,"true":1,"false":0},z=R._rootFramesTimeline=new C,U=R._rootTimeline=new C;U._startTime=n.time,z._startTime=n.frame,U._active=z._active=!0,R._updateRoot=function(){if(U.render((n.time-U._startTime)*U._timeScale,!1,!1),z.render((n.frame-z._startTime)*z._timeScale,!1,!1),!(n.frame%120)){var t,e,i;for(i in N){for(e=N[i].tweens,t=e.length;--t>-1;)e[t]._gc&&e.splice(t,1);0===e.length&&delete N[i]}if(i=U._first,(!i||i._paused)&&O.autoSleep&&!z._first&&1===n._listeners.tick.length){for(;i&&i._paused;)i=i._next;i||n.sleep()}}},n.addEventListener("tick",R._updateRoot);var Y=function(t,e,i){var s,r,n=t._gsTweenID;if(N[n||(t._gsTweenID=n="t"+F++)]||(N[n]={target:t,tweens:[]}),e&&(s=N[n].tweens,s[r=s.length]=e,i))for(;--r>-1;)s[r]===e&&s.splice(r,1);return N[n].tweens},j=function(t,e,i,s,r){var n,a,o,h;if(1===s||s>=4){for(h=r.length,n=0;h>n;n++)if((o=r[n])!==e)o._gc||o._enabled(!1,!1)&&(a=!0);else if(5===s)break;return a}var _,u=e._startTime+l,p=[],c=0,f=0===e._duration;for(n=r.length;--n>-1;)(o=r[n])===e||o._gc||o._paused||(o._timeline!==e._timeline?(_=_||B(e,0,f),0===B(o,_,f)&&(p[c++]=o)):u>=o._startTime&&o._startTime+o.totalDuration()/o._timeScale>u&&((f||!o._initted)&&2e-10>=u-o._startTime||(p[c++]=o)));for(n=c;--n>-1;)o=p[n],2===s&&o._kill(i,t)&&(a=!0),(2!==s||!o._firstPT&&o._initted)&&o._enabled(!1,!1)&&(a=!0);return a},B=function(t,e,i){for(var s=t._timeline,r=s._timeScale,n=t._startTime;s._timeline;){if(n+=s._startTime,r*=s._timeScale,s._paused)return-100;s=s._timeline}return n/=r,n>e?n-e:i&&n===e||!t._initted&&2*l>n-e?l:(n+=t.totalDuration()/t._timeScale/r)>e+l?0:n-e-l};r._init=function(){var t,e,i,s,r=this.vars,n=this._overwrittenProps,a=this._duration,o=r.immediateRender,h=r.ease;if(r.startAt){if(this._startAt&&this._startAt.render(-1,!0),r.startAt.overwrite=0,r.startAt.immediateRender=!0,this._startAt=O.to(this.target,0,r.startAt),o)if(this._time>0)this._startAt=null;else if(0!==a)return}else if(r.runBackwards&&0!==a)if(this._startAt)this._startAt.render(-1,!0),this._startAt=null;else{i={};for(s in r)L[s]&&"autoCSS"!==s||(i[s]=r[s]);if(i.overwrite=0,i.data="isFromStart",this._startAt=O.to(this.target,0,i),r.immediateRender){if(0===this._time)return}else this._startAt.render(-1,!0)}if(this._ease=h?h instanceof y?r.easeParams instanceof Array?h.config.apply(h,r.easeParams):h:"function"==typeof h?new y(h,r.easeParams):T[h]||O.defaultEase:O.defaultEase,this._easeType=this._ease._type,this._easePower=this._ease._power,this._firstPT=null,this._targets)for(t=this._targets.length;--t>-1;)this._initProps(this._targets[t],this._propLookup[t]={},this._siblings[t],n?n[t]:null)&&(e=!0);else e=this._initProps(this.target,this._propLookup,this._siblings,n);if(e&&O._onPluginEvent("_onInitAllProps",this),n&&(this._firstPT||"function"!=typeof this.target&&this._enabled(!1,!1)),r.runBackwards)for(i=this._firstPT;i;)i.s+=i.c,i.c=-i.c,i=i._next;this._onUpdate=r.onUpdate,this._initted=!0},r._initProps=function(e,i,s,r){var n,a,o,h,l,_;if(null==e)return!1;this.vars.css||e.style&&e!==t&&e.nodeType&&E.css&&this.vars.autoCSS!==!1&&M(this.vars,e);for(n in this.vars){if(_=this.vars[n],L[n])_&&(_ instanceof Array||_.push&&p(_))&&-1!==_.join("").indexOf("{self}")&&(this.vars[n]=_=this._swapSelfInParams(_,this));else if(E[n]&&(h=new E[n])._onInitTween(e,this.vars[n],this)){for(this._firstPT=l={_next:this._firstPT,t:h,p:"setRatio",s:0,c:1,f:!0,n:n,pg:!0,pr:h._priority},a=h._overwriteProps.length;--a>-1;)i[h._overwriteProps[a]]=this._firstPT;(h._priority||h._onInitAllProps)&&(o=!0),(h._onDisable||h._onEnable)&&(this._notifyPluginsOfEnabled=!0)}else this._firstPT=i[n]=l={_next:this._firstPT,t:e,p:n,f:"function"==typeof e[n],n:n,pg:!1,pr:0},l.s=l.f?e[n.indexOf("set")||"function"!=typeof e["get"+n.substr(3)]?n:"get"+n.substr(3)]():parseFloat(e[n]),l.c="string"==typeof _&&"="===_.charAt(1)?parseInt(_.charAt(0)+"1",10)*Number(_.substr(2)):Number(_)-l.s||0;l&&l._next&&(l._next._prev=l)}return r&&this._kill(r,e)?this._initProps(e,i,s,r):this._overwrite>1&&this._firstPT&&s.length>1&&j(e,this,i,this._overwrite,s)?(this._kill(i,e),this._initProps(e,i,s,r)):o},r.render=function(t,e,i){var s,r,n,a,o=this._time,h=this._duration;if(t>=h)this._totalTime=this._time=h,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1,this._reversed||(s=!0,r="onComplete"),0===h&&(a=this._rawPrevTime,this._startTime===this._timeline._duration&&(t=0),(0===t||0>a||a===l)&&a!==t&&(i=!0,a>l&&(r="onReverseComplete")),this._rawPrevTime=a=!e||t||this._rawPrevTime===t?t:l);else if(1e-7>t)this._totalTime=this._time=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0,(0!==o||0===h&&this._rawPrevTime>0&&this._rawPrevTime!==l)&&(r="onReverseComplete",s=this._reversed),0>t?(this._active=!1,0===h&&(this._rawPrevTime>=0&&(i=!0),this._rawPrevTime=a=!e||t||this._rawPrevTime===t?t:l)):this._initted||(i=!0);else if(this._totalTime=this._time=t,this._easeType){var _=t/h,u=this._easeType,p=this._easePower;(1===u||3===u&&_>=.5)&&(_=1-_),3===u&&(_*=2),1===p?_*=_:2===p?_*=_*_:3===p?_*=_*_*_:4===p&&(_*=_*_*_*_),this.ratio=1===u?1-_:2===u?_:.5>t/h?_/2:1-_/2}else this.ratio=this._ease.getRatio(t/h);if(this._time!==o||i){if(!this._initted){if(this._init(),!this._initted||this._gc)return;this._time&&!s?this.ratio=this._ease.getRatio(this._time/h):s&&this._ease._calcEnd&&(this.ratio=this._ease.getRatio(0===this._time?0:1))}for(this._active||!this._paused&&this._time!==o&&t>=0&&(this._active=!0),0===o&&(this._startAt&&(t>=0?this._startAt.render(t,e,i):r||(r="_dummyGS")),this.vars.onStart&&(0!==this._time||0===h)&&(e||this.vars.onStart.apply(this.vars.onStartScope||this,this.vars.onStartParams||v))),n=this._firstPT;n;)n.f?n.t[n.p](n.c*this.ratio+n.s):n.t[n.p]=n.c*this.ratio+n.s,n=n._next;this._onUpdate&&(0>t&&this._startAt&&this._startTime&&this._startAt.render(t,e,i),e||(this._time!==o||s)&&this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||v)),r&&(this._gc||(0>t&&this._startAt&&!this._onUpdate&&this._startTime&&this._startAt.render(t,e,i),s&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!e&&this.vars[r]&&this.vars[r].apply(this.vars[r+"Scope"]||this,this.vars[r+"Params"]||v),0===h&&this._rawPrevTime===l&&a!==l&&(this._rawPrevTime=0)))}},r._kill=function(t,e){if("all"===t&&(t=null),null==t&&(null==e||e===this.target))return this._enabled(!1,!1);e="string"!=typeof e?e||this._targets||this.target:O.selector(e)||e;var i,s,r,n,a,o,h,l;if((p(e)||D(e))&&"number"!=typeof e[0])for(i=e.length;--i>-1;)this._kill(t,e[i])&&(o=!0);else{if(this._targets){for(i=this._targets.length;--i>-1;)if(e===this._targets[i]){a=this._propLookup[i]||{},this._overwrittenProps=this._overwrittenProps||[],s=this._overwrittenProps[i]=t?this._overwrittenProps[i]||{}:"all";break}}else{if(e!==this.target)return!1;a=this._propLookup,s=this._overwrittenProps=t?this._overwrittenProps||{}:"all"}if(a){h=t||a,l=t!==s&&"all"!==s&&t!==a&&("object"!=typeof t||!t._tempKill);for(r in h)(n=a[r])&&(n.pg&&n.t._kill(h)&&(o=!0),n.pg&&0!==n.t._overwriteProps.length||(n._prev?n._prev._next=n._next:n===this._firstPT&&(this._firstPT=n._next),n._next&&(n._next._prev=n._prev),n._next=n._prev=null),delete a[r]),l&&(s[r]=1);!this._firstPT&&this._initted&&this._enabled(!1,!1)}}return o},r.invalidate=function(){return this._notifyPluginsOfEnabled&&O._onPluginEvent("_onDisable",this),this._firstPT=null,this._overwrittenProps=null,this._onUpdate=null,this._startAt=null,this._initted=this._active=this._notifyPluginsOfEnabled=!1,this._propLookup=this._targets?{}:[],this},r._enabled=function(t,e){if(a||n.wake(),t&&this._gc){var i,s=this._targets;if(s)for(i=s.length;--i>-1;)this._siblings[i]=Y(s[i],this,!0);else this._siblings=Y(this.target,this,!0)}return R.prototype._enabled.call(this,t,e),this._notifyPluginsOfEnabled&&this._firstPT?O._onPluginEvent(t?"_onEnable":"_onDisable",this):!1},O.to=function(t,e,i){return new O(t,e,i)},O.from=function(t,e,i){return i.runBackwards=!0,i.immediateRender=0!=i.immediateRender,new O(t,e,i)},O.fromTo=function(t,e,i,s){return s.startAt=i,s.immediateRender=0!=s.immediateRender&&0!=i.immediateRender,new O(t,e,s)},O.delayedCall=function(t,e,i,s,r){return new O(e,0,{delay:t,onComplete:e,onCompleteParams:i,onCompleteScope:s,onReverseComplete:e,onReverseCompleteParams:i,onReverseCompleteScope:s,immediateRender:!1,useFrames:r,overwrite:0})},O.set=function(t,e){return new O(t,0,e)},O.getTweensOf=function(t,e){if(null==t)return[];t="string"!=typeof t?t:O.selector(t)||t;var i,s,r,n;if((p(t)||D(t))&&"number"!=typeof t[0]){for(i=t.length,s=[];--i>-1;)s=s.concat(O.getTweensOf(t[i],e));for(i=s.length;--i>-1;)for(n=s[i],r=i;--r>-1;)n===s[r]&&s.splice(i,1)}else for(s=Y(t).concat(),i=s.length;--i>-1;)(s[i]._gc||e&&!s[i].isActive())&&s.splice(i,1);return s},O.killTweensOf=O.killDelayedCallsTo=function(t,e,i){"object"==typeof e&&(i=e,e=!1);for(var s=O.getTweensOf(t,e),r=s.length;--r>-1;)s[r]._kill(i,t)};var q=d("plugins.TweenPlugin",function(t,e){this._overwriteProps=(t||"").split(","),this._propName=this._overwriteProps[0],this._priority=e||0,this._super=q.prototype},!0);if(r=q.prototype,q.version="1.10.1",q.API=2,r._firstPT=null,r._addTween=function(t,e,i,s,r,n){var a,o;return null!=s&&(a="number"==typeof s||"="!==s.charAt(1)?Number(s)-i:parseInt(s.charAt(0)+"1",10)*Number(s.substr(2)))?(this._firstPT=o={_next:this._firstPT,t:t,p:e,s:i,c:a,f:"function"==typeof t[e],n:r||e,r:n},o._next&&(o._next._prev=o),o):void 0},r.setRatio=function(t){for(var e,i=this._firstPT,s=1e-6;i;)e=i.c*t+i.s,i.r?e=Math.round(e):s>e&&e>-s&&(e=0),i.f?i.t[i.p](e):i.t[i.p]=e,i=i._next},r._kill=function(t){var e,i=this._overwriteProps,s=this._firstPT;if(null!=t[this._propName])this._overwriteProps=[];else for(e=i.length;--e>-1;)null!=t[i[e]]&&i.splice(e,1);for(;s;)null!=t[s.n]&&(s._next&&(s._next._prev=s._prev),s._prev?(s._prev._next=s._next,s._prev=null):this._firstPT===s&&(this._firstPT=s._next)),s=s._next;return!1},r._roundProps=function(t,e){for(var i=this._firstPT;i;)(t[this._propName]||null!=i.n&&t[i.n.split(this._propName+"_").join("")])&&(i.r=e),i=i._next},O._onPluginEvent=function(t,e){var i,s,r,n,a,o=e._firstPT;if("_onInitAllProps"===t){for(;o;){for(a=o._next,s=r;s&&s.pr>o.pr;)s=s._next;(o._prev=s?s._prev:n)?o._prev._next=o:r=o,(o._next=s)?s._prev=o:n=o,o=a}o=e._firstPT=r}for(;o;)o.pg&&"function"==typeof o.t[t]&&o.t[t]()&&(i=!0),o=o._next;return i},q.activate=function(t){for(var e=t.length;--e>-1;)t[e].API===q.API&&(E[(new t[e])._propName]=t[e]);return!0},m.plugin=function(t){if(!(t&&t.propName&&t.init&&t.API))throw"illegal plugin definition.";var e,i=t.propName,s=t.priority||0,r=t.overwriteProps,n={init:"_onInitTween",set:"setRatio",kill:"_kill",round:"_roundProps",initAll:"_onInitAllProps"},a=d("plugins."+i.charAt(0).toUpperCase()+i.substr(1)+"Plugin",function(){q.call(this,i,s),this._overwriteProps=r||[]},t.global===!0),o=a.prototype=new q(i);o.constructor=a,a.API=t.API;for(e in n)"function"==typeof t[e]&&(o[n[e]]=t[e]);return a.version=t.version,q.activate([a]),a},i=t._gsQueue){for(s=0;i.length>s;s++)i[s]();for(r in c)c[r].func||t.console.log("GSAP encountered missing dependency: com.greensock."+r)}a=!1}}(window);;
/*!
 * VERSION: beta 1.7.0
 * DATE: 2013-02-27
 * JavaScript 
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * @license Copyright (c) 2008-2013, GreenSock. All rights reserved.
 * This work is subject to the terms in http://www.greensock.com/terms_of_use.html or for 
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
(window._gsQueue||(window._gsQueue=[])).push(function(){"use strict";var a=document.documentElement,b=window,c=function(c,d){var e="x"===d?"Width":"Height",f="scroll"+e,g="client"+e,h=document.body;return c===b||c===a||c===h?Math.max(a[f],h[f])-Math.max(a[g],h[g]):c[f]-c["offset"+e]},d=window._gsDefine.plugin({propName:"scrollTo",API:2,init:function(a,d,e){return this._wdw=a===b,this._target=a,this._tween=e,"object"!=typeof d&&(d={y:d}),this._autoKill=d.autoKill!==!1,this.x=this.xPrev=this.getX(),this.y=this.yPrev=this.getY(),null!=d.x?this._addTween(this,"x",this.x,"max"===d.x?c(a,"x"):d.x,"scrollTo_x",!0):this.skipX=!0,null!=d.y?this._addTween(this,"y",this.y,"max"===d.y?c(a,"y"):d.y,"scrollTo_y",!0):this.skipY=!0,!0},set:function(a){this._super.setRatio.call(this,a);var c=this._wdw||!this.skipX?this.getX():this.xPrev,d=this._wdw||!this.skipY?this.getY():this.yPrev,e=d-this.yPrev,f=c-this.xPrev;this._autoKill&&(!this.skipX&&(f>7||-7>f)&&(this.skipX=!0),!this.skipY&&(e>7||-7>e)&&(this.skipY=!0),this.skipX&&this.skipY&&this._tween.kill()),this._wdw?b.scrollTo(this.skipX?c:this.x,this.skipY?d:this.y):(this.skipY||(this._target.scrollTop=this.y),this.skipX||(this._target.scrollLeft=this.x)),this.xPrev=this.x,this.yPrev=this.y}}),e=d.prototype;d.max=c,e.getX=function(){return this._wdw?null!=b.pageXOffset?b.pageXOffset:null!=a.scrollLeft?a.scrollLeft:document.body.scrollLeft:this._target.scrollLeft},e.getY=function(){return this._wdw?null!=b.pageYOffset?b.pageYOffset:null!=a.scrollTop?a.scrollTop:document.body.scrollTop:this._target.scrollTop},e._kill=function(a){return a.scrollTo_x&&(this.skipX=!0),a.scrollTo_y&&(this.skipY=!0),this._super._kill.call(this,a)}}),window._gsDefine&&window._gsQueue.pop()();;
"use strict";
/**
 * Information about the browser.
 * @type {Object}
 */
var Browser={
    /**
     * Is it internet explorer?
     */
    isIE:false,
    /**
     * Is it Firefox?
     */
    isFF:false,
    /**
     * If true : good luck to you...
     */
    isIE6:false,
    /**
     * is it internet explorer 7 ?
     */
    isIE7:false,
    /**
     * is it internet explorer 8 ?
     */
    isIE8:false,
    /**
     * Should we activate flash or not
     */
    isFlash:true,
    /**
     * is a mobile phone?
     */
    isMobile:false,
    /**
     * Is it a tablet or a phone?
     */
    isTouchDevice:false,
    /**
     * The native user agent
     */
    userAgent:null,
    /**
     * The language/market code directly from the browser
     */
    localisation:"",
    /**
     * The language code
     */
    language:"",
    /**
     * The country code
     */
    country:"",

    transforms3d:false,
    /**
     * The screen width, not the browser, the screen, right? This value will be ALWAYS higher than screenHeight
     */
    screenWidth:0,
    /**
     * The screen height, not the browser, the screen ok? This value will be ALWAYS lower than screenWidth
     */
    screenHeight:0,


    /**
     * initialize the values
     */
    init:function(){
        "use strict";


        Browser.userAgent=navigator.userAgent;

        //language

        switch(true){
            case navigator.language != undefined:
                Browser.localisation=navigator.language;
                break;
            case navigator.userLanguage != undefined:
                Browser.localisation=navigator.userLanguage;
                break;
            case navigator.systemLanguage != undefined :
                Browser.localisation=navigator.systemLanguage ;
                break;
            default:
                Browser.localisation=null;
                break;

        }
        if(Browser.localisation){
            var ar=Browser.localisation.split("-");
            if(ar.length>1){
                Browser.language=ar[0];
                Browser.country=ar[1];
            }else{
                Browser.language=Browser.localisation;
            }
        }

        //3d test
        if($.browser){
            if($.browser.mozilla || $.browser.chrome){
                Browser.transforms3d=true;
            }else{
                Modernizr.testStyles('@media (transform-3d),(-moz-transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}', function( node, rule ) {
                    if(node.offsetLeft === 9 && node.offsetHeight === 3) {
                        Browser.transforms3d=true;
                    }
                });
            }

            if($.browser.mozilla){
                Browser.isFF=true;
            }

            var jqBrowser=$.browser;

            //ie
            if(jqBrowser.msie){
                Browser.isIE=true;
                if(jqBrowser.version<7){
                    Browser.isIE6=true;
                }else if(jqBrowser.version<8){
                    Browser.isIE7=true;
                }else if(jqBrowser.version<9){
                    Browser.isIE8=true;
                }
            }
        }else{


            Browser.transforms3d=true;
        }




        //mobile and flash by screen definition
        // if no tablet phone detected but small screen...
        Browser.screenWidth=Math.max(window.innerWidth, window.innerHeight);
        Browser.screenHeight=Math.min(window.innerWidth, window.innerHeight);

        var p=/(mobile)|(Phone)/g;
        if(p.test(Browser.userAgent)){
            Browser.isMobile=true;
            Browser.isTouchDevice=true;
            Browser.isFlash=false;
        }
        p=/Android/g;
        if(p.test(Browser.userAgent)){
            Browser.isMobile=true;
            Browser.isTouchDevice=true;
            Browser.isFlash=false;
        }
        p=/iPad/g;
        if(p.test(Browser.userAgent)){
            Browser.isMobile=false;
            Browser.isTouchDevice=true;
            Browser.isFlash=false;
            Browser.screenWidth=Math.max(screen.width, screen.height);
            Browser.screenHeight=Math.min(screen.width, screen.height);
        }
        p=/iPhone/g;
        if(p.test(Browser.userAgent)){
            Browser.isMobile=true;
            Browser.isTouchDevice=true;
            Browser.isFlash=false;
            Browser.screenWidth=Math.max(screen.width, screen.height);
            Browser.screenHeight=Math.min(screen.width, screen.height);
        }

        if(Browser.screenWidth<780){
            Browser.isMobile=true;
            Browser.isFlash=false;
            Browser.isTouchDevice=true;
        }else{
            //if the screen is higher than 780px it's not a phone!
            Browser.isMobile=false;
        }

        var dom=$("#browser-info");

        var log="";
        for(var k in jqBrowser){
            log+= k;
            log+= " : ";
            log+= jqBrowser[k];
            log+= "<br>";

        }
        log+= "-------------------<br>";
        for(var k in Browser){
           log+= k;
           log+= " : ";
           log+= Browser[k];
           log+= "<br>";
        }
        dom.html(log);

        //dom.removeClass("hidden");
        //this.isFlash=false;
        //Browser.transforms3d=false;


        //console.log(Browser);
    },

    /**
     * device test and if a redirection is needed (if the user use mobile device and url is not a mobile url => redirection and vice-versa)
     */
    checkDevice: function(){

        var cookie = Cookie.getRawCookie("devicePreference");
        var isMobileDevice = Browser.isMobile;
        var isMobileUrl = Piaget.pageJsonData.isMobile;

        /* debug mode activation for test mobile version on computer put mobileTest=1 in url to allow and mobileTest=0 to disallowed */
        /*
        if (document.location.search.indexOf("mobileTest=0") >= 1){
            Cookie.setRawCookie("debugMode","", -1);
            //console.log("debug desactivate");
        }
        if (document.location.search.indexOf("mobileTest=1") >= 1 || Cookie.getRawCookie("debugMode")) {
            //console.log("debug mobile activate");
            Cookie.setRawCookie("debugMode","mobileTest",1);
            return ;
        }
        */

        //if device is desktop, go to desktop and that's all! no question!
        if(!Browser.isMobile && Piaget.pageJsonData.isMobile){
            Cookie.setRawCookie("devicePreference","desktop",1);
            Browser.redirectToDesktop();
            return;
        }
        if(cookie){
            if(cookie == "mobile" && !isMobileUrl){
                Browser.askRedirection("mobile");
            }else if (cookie == "desktop" && isMobileUrl){
                Browser.askRedirection("desktop");
            }
        }else if(Browser.isMobile != Piaget.pageJsonData.isMobile){
            if(Browser.isMobile){
                Browser.askRedirection("mobile");
            }else{
                Browser.askRedirection("desktop");
            }
        }
    },

    redirectToDesktop:function () {
        window.location.href = Piaget.pageJsonData.desktopUrl;
    },

    redirectToMobile:function () {
        window.location.href = Piaget.pageJsonData.mobileUrl;
    },

    isAppleDevice:function(){
        var iPhone=/iPhone/g;
        var iPad=/iPad/g;
        if(iPhone.test(Browser.userAgent) || iPad.test(Browser.userAgent)){
            return true;
        }

        return false;
    },
    askRedirection: function(target){

        var question;

        if(target == "mobile"){
            question = (typeof(Translation) != "undefined")?Translation.main_navigation_js_do_you_want_mobile_version:"change to mobile version?";
            if(confirm(question)){
                Cookie.setRawCookie("devicePreference","mobile",1);
                //console.log("cookie =< "+Cookie.getRawCookie("devicePreference"));
                //redirection

                Browser.redirectToMobile();
            }else{
                Cookie.setRawCookie("devicePreference","desktop",1);
            }

        }else if(target == "desktop"){
            question = (typeof(Translation) != "undefined")?Translation.main_navigation_js_do_you_want_desktop_version:"change to desktop version?";
            if(confirm(question)){
                Cookie.setRawCookie("devicePreference","desktop",1);
                //redirection
                Browser.redirectToDesktop();
            }else{
                Cookie.setRawCookie("devicePreference","mobile",1);
            }
        }
    }
};


Browser.init();;
/**
 * Common utilities
 *
 * @type {{getUrl: Function, nl2br: Function, getUrlParam: Function, rapport: Function, showAllInrect: Function, uid: number, getUid: Function, print: Function, rgbCss2hexCss: Function, hrefIse: Function, numberCss: Function, arrayRand: Function, inArray: Function, loadImgFile: Function, getCanvasImage: Function, blink: Function, removeDiacritics: Function}}
 */
var Utils={
    /**
     * ouvre une url
     * @param url Г  ouvrir
     * @param target si Г©gual Г  blank ouvrira dans une nouvelle fenetre
     */
    getUrl:function(url,target){

        if(target){
            if(!Utils.windows){
                Utils.windows={};
            }
            if(Utils.windows[target] && !Utils.windows[target].closed){
                Utils.windows[target].close();
            }
            Utils.windows[target]=window.open( url,target );
            
        }else{
            window.open(url);
        }
        
        
    },

    nl2br:function (str, is_xhtml) {
        var breakTag = (is_xhtml || typeof is_xhtml === 'undefined') ? "<br />" : "<br>";
        return (str + "").replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, "$1"+ breakTag +"$2");
    },

    /**
     * renvoie la valeur de paramName trouvГ©e dans l'url en paramГЁtre GET
     * @param paramName le nom du paramГЁtre GET de l'url en cours dont on souhaite rГ©cupГ©rer la valeur.
     */
    getUrlParam:function(paramName){
          var name = paramName.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
          var regexS = "[\\?&]"+name+"=([^&#]*)";
          var regex = new RegExp( regexS );
          var results = regex.exec( window.location.href );
          if( results == null ){
            return "";
          }else{
            return results[1];
          }
    },
    rapport:function(valeur,maxentree, maxsortie, minentree, minsortie) {
        var produitentree = (valeur-minentree)/(maxentree-minentree);
        var valeursortie = ((maxsortie-minsortie)*produitentree)+minsortie;
        return valeursortie;
    },
    showAllInrect:function(w,h,maxW,maxH){
        //console.log("showAllInrect");
        //console.log(w,h,maxW,maxH);
        var rw=Utils.rapport(w, w, maxW, 0, 0);
        var rh=Utils.rapport(h, w, maxW, 0, 0);

        if(rh>maxH){
            rh=Utils.rapport(h, h, maxH, 0, 0);
            rw=Utils.rapport(w, h, maxH, 0, 0); 
        }
        return {w:rw,h:rh,x:Math.floor(maxW/2-rw/2),y:Math.floor(maxH/2-rh/2)};
    },
    /**
     * chiffre incrГ©mentГ© par Utils.getUid();
     */
    uid:0,
    /**
     * renvoie un id unique
     */
    getUid:function(){
       Utils.uid++;
       return "utilsUid"+String(Utils.uid)
    },
    /**
     * renvoie une chaine representant l'objet (un print_r en php)
     * @param obj l'obet Г  tracer
     * @param htmlOutput si dГ©fini sur true renverra un output html
     */
    print:function(obj,htmlOutput){
        var r="";
        var value=null;
        var variable=null;
        return JSON.stringify(obj);
    },
    /**
     * Function to convert hex format to a rgb color. call the function: rgb( "rgb(0, 70, 255)" ); returns: #0046ff
     */
    rgbCss2hexCss:function (rgb) {
        if(!rgb){
            return "none";
        }
     var hexDigits = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];
     rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
     if(!rgb){
       return "none";
     }
     var hex=function(x) {
      return isNaN(x) ? "00" : hexDigits[(x - x % 16) / 16] + hexDigits[x % 16];
     }
     return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
    },
    /**
     * prend le premier lien dans domObj et l'applique comme lien Г  domObj
     */
    hrefIse:function(domObj,onClick){
        var link=$(domObj).find("a").attr("href");
        $(domObj).addClass("btn");
        $(domObj).click(function(){
            document.location=link;
            //$(domObj).find("a").onclick();
        })
    },

    numberCss:function(cssValue){
        cssValue=String(cssValue).replace("auto","0");
        cssValue=String(cssValue).replace("px","");
        cssValue=String(cssValue).replace("%","");
        cssValue=String(cssValue).replace(" ","");
        cssValue=Number(cssValue);
        if(cssValue=="NaN"){
            cssValue= 0;
        }
        return cssValue;

    },
    arrayRand:function(ar){
	
	return ar[Math.floor(Math.random()*(ar.length))];
    },
    inArray:function(array,value){
      for(var i=0;i<array.length;i++){
          if(array[i]==value){
              return true;
          }
      }  
      return false;
    },
    /**
     * charge le fichier file dans le tag image
     */
    loadImgFile:function(domImg,file){
        domImg.src = window.URL.createObjectURL(file);  
	domImg.onload = function(e) {
	    window.URL.revokeObjectURL(this.src);  
	}
    },
    /**
     * renvoie un objet dom canvas de l'image resizГ©e fournie par file
     */
    getCanvasImage:function(w,h,file){
        var w=w;
        var h=h;

        var canvas=$("<canvas width='"+w+"px'  height='"+h+"px'></canvas>");
        canvas.css("width",w+"px");
	canvas.css("height",h+"px");

        var ctx = canvas[0].getContext("2d");
        var destX = 0;
        var destY = 0;
        var destWidth = w;
        var destHeight = h;
        /*
        ctx.fillStyle = "Red";
        ctx.fillRect(3,3,w,h);
        ctx.lineTo(30,30);
        */
        var domImg=new Image();
        domImg.onload = function(){
            window.URL.revokeObjectURL(this.src); 
            var origW=this.width;
            var origH=this.height;
            //alert("onload "+origW+"/"+origH);
            var fact=w/origW;
            var newW=w;
            var newH=origH*fact;
            //alert(newW+"//"+newH);
            if(newH>h){
               fact=h/origH;
               newH=h;
               newW=origW*fact;
            }
            //copie l'image la recentre et la redimensionne
            ctx.drawImage(domImg, 0, 0, origW, origH, w/2-newW/2, h/2-newH/2, newW, newH);
        };
        domImg.src = window.URL.createObjectURL(file);
        return canvas;
        //imageObj.src = "darth-vader.jpg";  
    },
    /**
     * fait clignotter el si flag==true, sinon arrГЄte de la faire clignotter
     */
    blink:function(el,flag,ms){
        var els=$(el);
        var flag=flag;
        
        if(ms){
            var ms = ms;
        }else{
            var ms = 100;
        }
        
        
        
        var fade=function(dom,show){
            if(show){
                $(dom).animate({"opacity":1},$(dom).data("Utils_blink_ms"),function(){
                    if($(this).data("Utils_blink")){
                        fade($(this),false);
                    }
                })
            }else{
                $(dom).animate({"opacity":0.2},$(dom).data("Utils_blink_ms"),function(){
                    fade($(this),true);
                }) 
            }
        }
        
        for(var i=0;i<els.length;i++){
            if(flag){
                if(!$(els[i]).data("Utils_blink")){
                    $(els[i]).data("Utils_blink", true);
                    $(els[i]).data("Utils_blink_ms", ms);
                    fade($(el[i]),false);
                }
            }else{
                $(els[i]).data("Utils_blink", false);
                fade($(els[i]),true);
            }
        }
        
    },
    removeDiacritics : function  (str) {

        var changes = [
            {'base':'A', 'letters':/[\u0041\u24B6\uFF21\u00C0\u00C1\u00C2\u1EA6\u1EA4\u1EAA\u1EA8\u00C3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\u00C4\u01DE\u1EA2\u00C5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F]/g},
            {'base':'AA','letters':/[\uA732]/g},
            {'base':'AE','letters':/[\u00C6\u01FC\u01E2]/g},
            {'base':'AO','letters':/[\uA734]/g},
            {'base':'AU','letters':/[\uA736]/g},
            {'base':'AV','letters':/[\uA738\uA73A]/g},
            {'base':'AY','letters':/[\uA73C]/g},
            {'base':'B', 'letters':/[\u0042\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0182\u0181]/g},
            {'base':'C', 'letters':/[\u0043\u24B8\uFF23\u0106\u0108\u010A\u010C\u00C7\u1E08\u0187\u023B\uA73E]/g},
            {'base':'D', 'letters':/[\u0044\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018B\u018A\u0189\uA779]/g},
            {'base':'DZ','letters':/[\u01F1\u01C4]/g},
            {'base':'Dz','letters':/[\u01F2\u01C5]/g},
            {'base':'E', 'letters':/[\u0045\u24BA\uFF25\u00C8\u00C9\u00CA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\u00CB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E]/g},
            {'base':'F', 'letters':/[\u0046\u24BB\uFF26\u1E1E\u0191\uA77B]/g},
            {'base':'G', 'letters':/[\u0047\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E]/g},
            {'base':'H', 'letters':/[\u0048\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D]/g},
            {'base':'I', 'letters':/[\u0049\u24BE\uFF29\u00CC\u00CD\u00CE\u0128\u012A\u012C\u0130\u00CF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197]/g},
            {'base':'J', 'letters':/[\u004A\u24BF\uFF2A\u0134\u0248]/g},
            {'base':'K', 'letters':/[\u004B\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2]/g},
            {'base':'L', 'letters':/[\u004C\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780]/g},
            {'base':'LJ','letters':/[\u01C7]/g},
            {'base':'Lj','letters':/[\u01C8]/g},
            {'base':'M', 'letters':/[\u004D\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C]/g},
            {'base':'N', 'letters':/[\u004E\u24C3\uFF2E\u01F8\u0143\u00D1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u0220\u019D\uA790\uA7A4]/g},
            {'base':'NJ','letters':/[\u01CA]/g},
            {'base':'Nj','letters':/[\u01CB]/g},
            {'base':'O', 'letters':/[\u004F\u24C4\uFF2F\u00D2\u00D3\u00D4\u1ED2\u1ED0\u1ED6\u1ED4\u00D5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\u00D6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\u00D8\u01FE\u0186\u019F\uA74A\uA74C]/g},
            {'base':'OI','letters':/[\u01A2]/g},
            {'base':'OO','letters':/[\uA74E]/g},
            {'base':'OU','letters':/[\u0222]/g},
            {'base':'P', 'letters':/[\u0050\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754]/g},
            {'base':'Q', 'letters':/[\u0051\u24C6\uFF31\uA756\uA758\u024A]/g},
            {'base':'R', 'letters':/[\u0052\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782]/g},
            {'base':'S', 'letters':/[\u0053\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784]/g},
            {'base':'T', 'letters':/[\u0054\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786]/g},
            {'base':'TZ','letters':/[\uA728]/g},
            {'base':'U', 'letters':/[\u0055\u24CA\uFF35\u00D9\u00DA\u00DB\u0168\u1E78\u016A\u1E7A\u016C\u00DC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244]/g},
            {'base':'V', 'letters':/[\u0056\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245]/g},
            {'base':'VY','letters':/[\uA760]/g},
            {'base':'W', 'letters':/[\u0057\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72]/g},
            {'base':'X', 'letters':/[\u0058\u24CD\uFF38\u1E8A\u1E8C]/g},
            {'base':'Y', 'letters':/[\u0059\u24CE\uFF39\u1EF2\u00DD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE]/g},
            {'base':'Z', 'letters':/[\u005A\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762]/g},
            {'base':'a', 'letters':/[\u0061\u24D0\uFF41\u1E9A\u00E0\u00E1\u00E2\u1EA7\u1EA5\u1EAB\u1EA9\u00E3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\u00E4\u01DF\u1EA3\u00E5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250]/g},
            {'base':'aa','letters':/[\uA733]/g},
            {'base':'ae','letters':/[\u00E6\u01FD\u01E3]/g},
            {'base':'ao','letters':/[\uA735]/g},
            {'base':'au','letters':/[\uA737]/g},
            {'base':'av','letters':/[\uA739\uA73B]/g},
            {'base':'ay','letters':/[\uA73D]/g},
            {'base':'b', 'letters':/[\u0062\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253]/g},
            {'base':'c', 'letters':/[\u0063\u24D2\uFF43\u0107\u0109\u010B\u010D\u00E7\u1E09\u0188\u023C\uA73F\u2184]/g},
            {'base':'d', 'letters':/[\u0064\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\uA77A]/g},
            {'base':'dz','letters':/[\u01F3\u01C6]/g},
            {'base':'e', 'letters':/[\u0065\u24D4\uFF45\u00E8\u00E9\u00EA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\u00EB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD]/g},
            {'base':'f', 'letters':/[\u0066\u24D5\uFF46\u1E1F\u0192\uA77C]/g},
            {'base':'g', 'letters':/[\u0067\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\u1D79\uA77F]/g},
            {'base':'h', 'letters':/[\u0068\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265]/g},
            {'base':'hv','letters':/[\u0195]/g},
            {'base':'i', 'letters':/[\u0069\u24D8\uFF49\u00EC\u00ED\u00EE\u0129\u012B\u012D\u00EF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131]/g},
            {'base':'j', 'letters':/[\u006A\u24D9\uFF4A\u0135\u01F0\u0249]/g},
            {'base':'k', 'letters':/[\u006B\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3]/g},
            {'base':'l', 'letters':/[\u006C\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747]/g},
            {'base':'lj','letters':/[\u01C9]/g},
            {'base':'m', 'letters':/[\u006D\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F]/g},
            {'base':'n', 'letters':/[\u006E\u24DD\uFF4E\u01F9\u0144\u00F1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5]/g},
            {'base':'nj','letters':/[\u01CC]/g},
            {'base':'o', 'letters':/[\u006F\u24DE\uFF4F\u00F2\u00F3\u00F4\u1ED3\u1ED1\u1ED7\u1ED5\u00F5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\u00F6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\u00F8\u01FF\u0254\uA74B\uA74D\u0275]/g},
            {'base':'oi','letters':/[\u01A3]/g},
            {'base':'ou','letters':/[\u0223]/g},
            {'base':'oo','letters':/[\uA74F]/g},
            {'base':'p','letters':/[\u0070\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755]/g},
            {'base':'q','letters':/[\u0071\u24E0\uFF51\u024B\uA757\uA759]/g},
            {'base':'r','letters':/[\u0072\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783]/g},
            {'base':'s','letters':/[\u0073\u24E2\uFF53\u00DF\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B]/g},
            {'base':'t','letters':/[\u0074\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787]/g},
            {'base':'tz','letters':/[\uA729]/g},
            {'base':'u','letters':/[\u0075\u24E4\uFF55\u00F9\u00FA\u00FB\u0169\u1E79\u016B\u1E7B\u016D\u00FC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289]/g},
            {'base':'v','letters':/[\u0076\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C]/g},
            {'base':'vy','letters':/[\uA761]/g},
            {'base':'w','letters':/[\u0077\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73]/g},
            {'base':'x','letters':/[\u0078\u24E7\uFF58\u1E8B\u1E8D]/g},
            {'base':'y','letters':/[\u0079\u24E8\uFF59\u1EF3\u00FD\u0177\u1EF9\u0233\u1E8F\u00FF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF]/g},
            {'base':'z','letters':/[\u007A\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763]/g}
        ];

        for(var i=0; i<changes.length; i++) {
            str = str.replace(changes[i].letters, changes[i].base);
        }
        return str;
    }
}






//html5 file loader
window.URL = window.URL || window.webkitURL; 




/**
 * positionne le curseur  dans un input
 */
$.fn.setCursorPosition = function(position){
    if(this.lengh == 0) return this;
    return $(this).setSelection(position, position);
}
/**
 * positionne la selection dans un intpu
 */
$.fn.setSelection = function(selectionStart, selectionEnd) {
    if(this.lengh == 0) return this;
    input = this[0];

    if (input.createTextRange) {
        var range = input.createTextRange();
        range.collapse(true);
        range.moveEnd('character', selectionEnd);
        range.moveStart('character', selectionStart);
        range.select();
    } else if (input.setSelectionRange) {
        input.focus();
        input.setSelectionRange(selectionStart, selectionEnd);
    }

    return this;
}
/**
 * positionne le curseur Г  la fin dans un input
 */
$.fn.focusEnd = function(){
    if(this.val()){
      this.setCursorPosition(this.val().length);  
    }
    
}



Object.keys = Object.keys || (function () {
    var hasOwnProperty = Object.prototype.hasOwnProperty,
        hasDontEnumBug = !{toString:null}.propertyIsEnumerable("toString"),
        DontEnums = [
            'toString',
            'toLocaleString',
            'valueOf',
            'hasOwnProperty',
            'isPrototypeOf',
            'propertyIsEnumerable',
            'constructor'
        ],
        DontEnumsLength = DontEnums.length;

    return function (o) {
        if (typeof o != "object" && typeof o != "function" || o === null)
            throw new TypeError("Object.keys called on a non-object");

        var result = [];
        for (var name in o) {
            if (hasOwnProperty.call(o, name))
                result.push(name);
        }

        if (hasDontEnumBug) {
            for (var i = 0; i < DontEnumsLength; i++) {
                if (hasOwnProperty.call(o, DontEnums[i]))
                    result.push(DontEnums[i]);
            }
        }

        return result;
    };
})();;
/**
 * Evetn Handler for all objects,forms etc.
 */
var EventDispatcher;
EventDispatcher = function () {
    var me = this;
    /**
     * contains the functions to call
     */
    var listeners = {};

    /**
     * dispatch an event
     * @param event String
     */
    this.dispatchEvent = function (event, params) {
        var listenersList = listeners[event];
        if (!listenersList) {
            return;
        }
        //call the registerd events
        var l;
        for (var i = 0; i < listenersList.length; i++) {
            l=listenersList[i];
            var p=params;
            if(l.delay){
                TweenMax.killDelayedCallsTo(l.fn);
                TweenMax.delayedCall(l.delay/1000,l.fn, l.p);
                /*l.timeout=setTimeout(
                    function(){
                        console.log("ok "+ l.uid);
                        l.fn(p);
                    },
                    l.delay
                );*/

            }else{

                l.fn(p);
            }

        }
    }
    var uid=0;
    /**
     * add a event listener. when this event is fired (via dispatchEvent), the function will be launched.
     * @param event String
     * @param fn Function the function to call
     */
    this.addEventListener = function (event, fn) {
        var listenersList = listeners[event];
        if (!listenersList) {
            //init the object
            listenersList = listeners[event] = [];
        }
        uid++;
        var ev={
            event:event,
            fn:fn,
            uid:"eventListener"+uid
        }
        listenersList.push(ev);
        return ev;

    };
    this.addDelayedEventListener=function(event,ms, fn){
        var ev=me.addEventListener(event,fn);
        ev.delay=ms;
        return ev;
    }

    /**
     * Remove event
     * @param event String
     */
    this.removeEventListener = function(event) {
        delete listeners[event];
    }

    this.addEventsListener = function (events, fn) {
        for (var i = 0; i < events.length; i++) {
            me.addEventListener(events[i], fn);
        }
    }
};


var EVENT_SUCCESS="event-success";
var EVENT_ERROR="event-error";
var EVENT_LOADING="event-loading";
var EVENT_RESIZE="event-resize";
var EVENT_SCROLL="event-scroll";
var EVENT_CHANGE="event-change";
var EVENT_INIT="event-init";
;
/**
 * A simple class to manage Ajax requests
 *
 * @param url {String} The url to load.
 * @param data {Object} The data to send.
 * @param cache {Boolean} Set it to true to use cached requests
 * @constructor
 */
var SimpleAjax=function(url,data,cache){
    "use strict";

    var me = this;

    var url=url;
    var data=data;

    /**
     * The type of request to make ("POST" or "GET"), default is "POST".
     * @type {String}
     */
    this.type = "POST";

    /**
     * (xml, json, script, or html)
     * @type {String}
     */
    this.dataType = null;

    /**
     * Here you can listen to EVENT_AJAX_SUCCESS that will return a AjaxEventSuccess object.
     * @type {EventDispatcher}
     */
    this.events=new EventDispatcher();
    /**
     * Send the stuff
     */
    this.send=function(){
        $.ajax({
            type : me.type,
            url: url,
            data: data,
            cache:cache,
            dataType : me.dataType,
            success:
                function (response){
                    me.events.dispatchEvent(EVENT_AJAX_SUCCESS,new EventAjaxSuccess(response));
                }
        });
    }
};
/**
 * The identifier for an successful ajax request.
 * @type {String}
 */
var EVENT_AJAX_SUCCESS="event-ajax-success";

/**
 *
 * @param json
 * @constructor
 */
var EventAjaxSuccess=function(json){
    "use strict";
    /**
     *
     * @type {String} The real data received
     */
    this.json=json;
    this.data=json;
};;
/**
 * Common Cookie Functions
 *
 * @type {{
 *      setRawCookie: Function,
 *      getRawCookie: Function,
 *      createCookie: Function,
 *      getCookie: Function
 *  }}
 */
var Cookie = {
    /**
     * Set a raw cookie, if you need complex cookie use the createCookie function instead
     * @param name The cookie name
     * @param value The cookie value
     * @param days The number of day the cookie will be valid
     */
    setRawCookie: function (name, value, days) {
        var expires = Cookie._getExpire(days);

        var domain=document.location.hostname;
        domain=domain.replace(/(.*)piaget(.*)/,"piaget$2");

        document.cookie = name + "=" + value + expires + "; path=/; domain="+domain;
    },
    /**
     * Return a cookie value, if you need to get a complex cookie (objects, array etc...) use the getCookie function instead
     * @param name The cookie name
     * @returns {string}
     */
    getRawCookie: function (name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = $.trim(ca[i]);
            if (c.indexOf(nameEQ) == 0) {
                return c.substring(nameEQ.length, c.length);
            }
        }
    },

    /**
     * Create a complex cookie
     * @param name
     * @param value
     * @param days
     */
    createCookie: function (name, value, days) {
        var expires = Cookie._getExpire(days);
        var path = "/";
        var s = document.location.host.split('.');
        var domain = s.slice(-2).join('.');
        var secure = "";
        document.cookie = name + "=" + escape(value) + ((expires) ? "; expires=" + expires : "") + ((path) ? "; path=" + path : "") + ((domain) ? "; domain=" + domain : "") + ((secure) ? "; secure" : "");
    },
    /**
     * Get a complex cookie
     * @param c_name
     */
    getCookie: function (c_name) {
        var cookies = document.cookie.split(";");
        for (var i = 0; i < cookies.length; i++) {
            var x = cookies[i].substr(0, cookies[i].indexOf("="));
            var y = cookies[i].substr(cookies[i].indexOf("=") + 1);
            x = x.replace(/^\s+|\s+$/g, "");
            if (x == c_name) {
                return unescape(y);
            }
        }
    },

    /**
     * Return an expiry time string for a cookie based on the number
     * of days
     * @param days
     * @returns {*}
     * @private
     */
    _getExpire: function(days) {
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            return "; expires=" + date.toGMTString();
        }

        return '';
    }
};;
/**
 * Dom Object
 */
var Dom = {
    win : $(window),
    body : $("body"),
    main : $("#mainContent"),
    html:$("html")
};

if(!window.console){
    window.console = {};
    var methods = ["log", "debug", "warn", "info"];
    for(var i=0;i<methods.length;i++){
        var met=methods[i]
        console[met] = function(str){
            "use strict";
            // this line is commented to avoid all console log on ie replace the document title, only decomment it if you want debug dont keep it on production
            //document.title=str;
        };
    }
}else{

};
/* Based on Pinterest bookmarklet code from http://assets.pinterest.com/js/pinmarklet.js
 Modified by Cameron Clark
 */
function selectPinImage(prepend, append, hidden, within, elements) {
    /* JSON object of variables to pass into anonymous function above, private to the function */
    var m = {
        k: "PIN_" + (new Date).getTime(),
        checkDomain: {
            url: "//api.pinterest.com/v2/domains/filter_nopin/"
        },
        cdn: {
            "https:": "https://a248.e.akamai.net/passets.pinterest.com.s3.amazonaws.com",
            "http:": "http://passets-cdn.pinterest.com"
        },
        embed: "//pinterest.com/embed/?",
        pin: "pinterest.com/pin/create/bookmarklet/",
        minImgSize: 80,
        maxCheckCount: 20,
        thumbCellSize: 200,
        check: elements || ["meta", "iframe", "embed", "object", "img", "video", "a"],
        checkHidden: (typeof hidden !== 'undefined' ? hidden : false),
        parentElement: within || document,
        prependText: prepend || '',
        appendText: append || '',
        url: {
            fivehundredpx: /^https?:\/\/500px\.com\/photo\//,
            etsy: /^https?:\/\/.*?\.etsy\.com\/listing\//,
            facebook: /^https?:\/\/.*?\.facebook\.com\//,
            flickr: /^https?:\/\/www\.flickr\.com\//,
            googleImages: /^https?:\/\/.*?\.google\.com\/search/,
            googleReader: /^https?:\/\/.*?\.google\.com\/reader\//,
            kickstarter: /^https?:\/\/.*?\.kickstarter\.com\/projects\//,
            netflix: /^https?:\/\/.*?\.netflix\.com/,
            pinterest: /^https?:\/\/.*?\.?pinterest\.com\//,
            slideshare: /^https?:\/\/.*?\.slideshare\.net\//,
            soundcloud: /^https?:\/\/soundcloud\.com\//,
            stumbleUpon: /^https?:\/\/.*?\.stumbleupon\.com\//,
            tumblr: /^https?:\/\/www\.tumblr\.com/,
            vimeo: /^https?:\/\/vimeo\.com\//,
            youtube: /^https?:\/\/www\.youtube\.com\/watch\?/
        },
        via: {
            og: {
                tagName: "meta",
                property: "property",
                content: "content",
                field: {
                    "og:type": "pId",
                    "og:url": "pUrl",
                    "og:image": "pImg"
                }
            }
        },
        seek: {
            etsy: {
                id: "etsymarketplace:item",
                via: {
                    tagName: "meta",
                    property: "property",
                    content: "content",
                    field: {
                        "og:title": "pTitle",
                        "og:type": "pId",
                        "og:url": "pUrl",
                        "og:image": "pImg",
                        "etsymarketplace:price_value": "pPrice",
                        "etsymarketplace:currency_symbol": "pCurrencySymbol"
                    }
                },
                fixImg: {
                    find: /_570xN/,
                    replace: "_fullxfull"
                },
                fixTitle: {
                    suffix: ". %s%, via Etsy."
                },
                checkNonCanonicalImages: true
            },
            fivehundredpx: {
                id: "five_hundred_pixels:photo",
                via: "og",
                fixImg: {
                    find: /\/3.jpg/,
                    replace: "/4.jpg"
                },
                fixTitle: {
                    find: /^500px \/ Photo /,
                    replace: "",
                    suffix: ", via 500px."
                }
            },
            flickr: {
                via: {
                    tagName: "link",
                    property: "rel",
                    content: "href",
                    field: {
                        canonical: "pUrl",
                        image_src: "pImg"
                    }
                },
                fixImg: {
                    find: /_m.jpg/,
                    replace: "_z.jpg"
                },
                fixTitle: {
                    find: / \| Flickr(.*)$/,
                    replace: "",
                    suffix: ", via Flickr."
                }
            },
            kickstarter: {
                id: "kickstarter:project",
                via: "og",
                media: "video",
                fixTitle: {
                    find: / \u2014 Kickstarter$/,
                    replace: "",
                    suffix: ", via Kickstarter."
                }
            },
            slideshare: {
                id: "article",
                via: "og",
                media: "video"
            },
            soundcloud: {
                id: "soundcloud:sound",
                via: "og",
                media: "video",
                fixTitle: {
                    find: / on SoundCloud(.*)$/,
                    replace: "",
                    suffix: ", via SoundCloud."
                }
            },
            youtube: {
                id: "video",
                via: "og",
                fixTitle: {
                    find: / - YouTube$/,
                    replace: "",
                    suffix: ", via YouTube."
                }
            }
        },
        stumbleFrame: ["tb-stumble-frame", "stumbleFrame"],
        tag: {
            img: {
                flickr: {
                    att: "src",
                    match: [/staticflickr.com/, /static.flickr.com/]
                },
                fivehundredpx: {
                    att: "src",
                    match: [/pcdn\.500px\.net/]
                },
                behance: {
                    att: "src",
                    match: [/^http:\/\/behance\.vo\.llnwd\.net/]
                },
                netflix: {
                    att: "src",
                    match: [/^http:\/\/cdn-?[0-9]\.nflximg\.com/, /^http?s:\/\/netflix\.hs\.llnwd\.net/]
                },
                youtube: {
                    att: "src",
                    match: [/ytimg.com\/vi/, /img.youtube.com\/vi/]
                }
            },
            video: {
                youtube: {
                    att: "src",
                    match: [/videoplayback/]
                }
            },
            embed: {
                youtube: {
                    att: "src",
                    match: [/^http:\/\/s\.ytimg\.com\/yt/, /^http:\/\/.*?\.?youtube-nocookie\.com\/v/]
                }
            },
            iframe: {
                youtube: {
                    att: "src",
                    match: [/^http:\/\/www\.youtube\.com\/embed\/([a-zA-Z0-9\-_]+)/]
                },
                vimeo: {
                    att: "src",
                    match: [/^http?s:\/\/vimeo.com\/(\d+)/, /^http:\/\/player\.vimeo\.com\/video\/(\d+)/]
                }
            },
            object: {
                youtube: {
                    att: "data",
                    match: [/^http:\/\/.*?\.?youtube-nocookie\.com\/v/]
                }
            }
        },
        msg: {
            check: "",
            cancelTitle: "Cancel",
            grayOut: "Sorry, cannot pin this image.",
            noPinIncompletePage: "Sorry, can't pin from non-HTML pages. If you're trying to upload an image, please visit pinterest.com.",
            bustFrame: "We need to hide the StumbleUpon toolbar to Pin from this page.  After pinning, you can use the back button in your browser to return to StumbleUpon. Click OK to continue or Cancel to stay here.",
            noPin: "Sorry, pinning is not allowed from this domain. Please contact the site operator if you have any questions.",
            privateDomain: "Sorry, can't pin directly from %privateDomain%.",
            notFound: "Sorry, couldn't find any pinnable images or video on this page.",
            installed: "The bookmarklet is installed! Now you can click your Pin It button to pin images as you browse sites around the web."
        },
        pop: "status=no,resizable=yes,scrollbars=yes,personalbar=no,directories=no,location=no,toolbar=no,menubar=no,width=632,height=270,left=0,top=0",
        rules: ["#_shim {z-index:8675309; position: absolute; background: transparent; top:0; right:0; bottom:0; left:0; width: 100%; border: 0;}", "#_bg {z-index:8675310; position: absolute; top:0; right:0; bottom:0; left:0; background-color:#f2f2f2; opacity:.95; width: 100%; }", "#_bd {z-index:8675311; position: absolute; text-align: center; width: 100%; top: 0; left: 0; right: 0; font:16px hevetica neue,arial,san-serif; }", "#_bd #_hd { z-index:8675312; -moz-box-shadow: 0 1px 2px #aaa; -webkit-box-shadow: 0 1px 2px #aaa; box-shadow: 0 1px 2px #aaa; position: fixed; *position:absolute; width:100%; top: 0; left: 0; right: 0; height: 45px; line-height: 45px; font-size: 14px; font-weight: bold; display: block; margin: 0; background: #fbf7f7; border-bottom: 1px solid #aaa; }", "#_bd #_hd a#_x { display: block; cursor: pointer; color: #524D4D; line-height: 45px; text-shadow: 0 1px #fff; float: right; text-align: center; width: 100px; height: 45px; border-left: 1px solid #aaa; }", "#_bd #_hd a#_x:hover { color: #524D4D; background: #e1dfdf; text-decoration: none; }", "#_bd #_hd a#_x:active { color: #fff; background: #cb2027; text-decoration: none; text-shadow:none;}", "#_bd #_hd #_logo {height: 43px; width: 100px; display: inline-block; margin-right: -100px; background: transparent url(_cdn/images/LogoRed.png) 50% 50% no-repeat; border: none;}", "#_bd #_spacer { display: block; height: 50px; }", "#_bd span._pinContainer { height:200px; width:200px; display:inline-block; background:#fff; position:relative; -moz-box-shadow:0 0  2px #555; -webkit-box-shadow: 0 0  2px #555; box-shadow: 0 0  2px #555; margin: 10px; }", "#_bd span._pinContainer { zoom:1; *border: 1px solid #aaa; }", "#_bd span._pinContainer img { margin:0; padding:0; border:none; }", "#_bd span._pinContainer span.img, #_bd span._pinContainer span._play { position: absolute; top: 0; left: 0; height:200px; width:200px; overflow:hidden; }", "#_bd span._pinContainer span._play { background: transparent url(_cdn/images/bm/play.png) 50% 50% no-repeat; }", "#_bd span._pinContainer cite, #_bd span._pinContainer cite span { position: absolute; bottom: 0; left: 0; right: 0; width: 200px; color: #000; height: 22px; line-height: 24px; font-size: 10px; font-style: normal; text-align: center; overflow: hidden; }", "#_bd span._pinContainer cite span._mask { background:#eee; opacity:.75; *filter:alpha(opacity=75); }", "#_bd span._pinContainer cite span._behance { background: transparent url(_cdn/images/attrib/behance.png) 180px 3px no-repeat; }", "#_bd span._pinContainer cite span._flickr { background: transparent url(_cdn/images/attrib/flickr.png) 182px 3px no-repeat; }", "#_bd span._pinContainer cite span._fivehundredpx { background: transparent url(_cdn/images/attrib/fivehundredpx.png) 180px 3px no-repeat; }", "#_bd span._pinContainer cite span._kickstarter { background: transparent url(_cdn/images/attrib/kickstarter.png) 182px 3px no-repeat; }", "#_bd span._pinContainer cite span._slideshare { background: transparent url(_cdn/images/attrib/slideshare.png) 182px 3px no-repeat; }", "#_bd span._pinContainer cite span._soundcloud { background: transparent url(_cdn/images/attrib/soundcloud.png) 182px 3px no-repeat; }", "#_bd span._pinContainer cite span._vimeo { background: transparent url(_cdn/images/attrib/vimeo.png) 180px 3px no-repeat; }", "#_bd span._pinContainer cite span._vimeo_s { background: transparent url(_cdn/images/attrib/vimeo.png) 180px 3px no-repeat; }", "#_bd span._pinContainer cite span._youtube { background: transparent url(_cdn/images/attrib/youtube.png) 180px 3px no-repeat; }", "#_bd span._pinContainer a { text-decoration:none; background:transparent url(_cdn/images/bm/button.png) 60px 300px no-repeat; cursor:pointer; position:absolute; top:0; left:0; height:200px; width:200px; }", "#_bd span._pinContainer a { -moz-transition-property: background-color; -moz-transition-duration: .25s; -webkit-transition-property: background-color; -webkit-transition-duration: .25s; transition-property: background-color; transition-duration: .25s; }", "#_bd span._pinContainer a:hover { background-position: 60px 80px; background-color:rgba(0, 0, 0, 0.5); }", "#_bd span._pinContainer a._hideMe { background: rgba(128, 128, 128, .5); *background: #aaa; *filter:alpha(opacity=75); line-height: 200px; font-size: 10px; color: #fff; text-align: center; font-weight: normal!important; }"]
    };

    var a = window[m.k] = { // save this object to window with unique name: 'PIN_' + time
        w: window,    // window
        d: document,  // document
        n: navigator, // navigator
        a: m,         // JSON vars object
        s: {},
        f: function () { // a.f contains all subfunctions, so a.f.kill() would call the kill() function below
            return {
                callback: [],
                kill: function (b) {
                    if (typeof b === "string") b = a.d.getElementById(b);
                    b && b.parentNode && b.parentNode.removeChild(b)
                },
                get: function (b, c) {
                    var d = null;
                    return d = typeof b[c] === "string" ? b[c] : b.getAttribute(c)
                },
                set: function (b, c, d) {
                    if (typeof b[c] === "string") {
                        b[c] = d;
                    } else {
                        b.setAttribute(c, d)
                    }
                },
                make: function (b) {
                    var c = false, d, e;
                    for (d in b) if (b[d].hasOwnProperty) {
                        c = a.d.createElement(d);
                        for (e in b[d]) {
                            b[d][e].hasOwnProperty && typeof b[d][e] === "string" && a.f.set(c, e, b[d][e]);
                        }
                        break;
                    }
                    return c;
                },
                listen: function (b, c, d) {
                    if (typeof a.w.addEventListener !== "undefined") {
                        b.addEventListener(c, d, false);
                    } else {
                        typeof a.w.attachEvent !== "undefined" && b.attachEvent("on" + c, d);
                    }
                },
                getSelection: function () {
                    return ("" + (a.w.getSelection ? a.w.getSelection() : a.d.getSelection ? a.d.getSelection() : a.d.selection.createRange().text)).replace(/(^\s+|\s+$)/g, "");
                },
                pin: function (b) {
                    var c = a.a.pin + "?",
                        d = "false",
                        e = a.f.get(b, "pinImg"),
                        g = a.f.get(b, "pinUrl") || a.d.URL,
                        f = a.v.selectedText || a.f.get(b, "pinDesc") || a.d.title;
                    f = a.a.prependText + f + a.a.appendText;
                    g = g.split("#")[0];
                    if (b.rel === "video") {
                        d = "true";
                    }
                    c = c + "media=" + encodeURIComponent(e);
                    c = c + "&url=" + encodeURIComponent(g);
                    c = c + "&title=" + encodeURIComponent(a.d.title.substr(0, 500));
                    c = c + "&is_video=" + d;
                    c = c + "&description=" + encodeURIComponent(f.substr(0, 500));
                    if (a.v.inlineHandler) c = c + "&via=" + encodeURIComponent(a.d.URL);
                    if (a.v.hazIOS) {
                        a.w.setTimeout(function () {
                            a.w.location = "pinit12://" + c
                        }, 25);
                        a.w.location = "http://" + c
                    } else {
                        a.w.open("http://" + c, "pin" + (new Date).getTime(), a.a.pop);
                    }
                },
                close: function (b) {
                    if (a.s.bg) {
                        a.d.b.removeChild(a.s.shim);
                        a.d.b.removeChild(a.s.bg);
                        a.d.b.removeChild(a.s.bd)
                    }
                    a.w.hazPinningNow = false;
                    b && a.w.alert(b);
                    a.v.hazGoodUrl = false;
                    a.w.scroll(0, a.v.saveScrollTop)
                },
                click: function (b) {
                    b = b || a.w.event;
                    var c = null;
                    if (c = b.target ? b.target.nodeType === 3 ? b.target.parentNode : b.target : b.srcElement) if (c === a.s.x) a.f.close();
                    else if (c.className !== a.a.k + "_hideMe") if (c.className === a.a.k + "_pinThis") {
                        a.f.pin(c);
                        a.w.setTimeout(function () {
                            a.f.close()
                        }, 10)
                    }
                },
                keydown: function (b) {
                    ((b || a.w.event).keyCode || null) === 27 && a.f.close()
                },
                behavior: function () {
                    a.f.listen(a.s.bd, "click", a.f.click);
                    a.f.listen(a.d, "keydown", a.f.keydown)
                },
                presentation: function () {
                    var b = a.f.make({
                            STYLE: {
                                type: "text/css"
                            }
                        }),
                        c = a.a.cdn[a.w.location.protocol] || a.a.cdn["http:"],
                        d = a.a.rules.join("\n");
                    d = d.replace(/#_/g, "#" + m.k + "_");
                    d = d.replace(/\._/g, "." + m.k + "_");
                    d = d.replace(/_cdn/g, c);
                    if (b.styleSheet) {
                        b.styleSheet.cssText = d;
                    } else {
                        b.appendChild(a.d.createTextNode(d));
                    }
                    a.d.h.appendChild(b)
                },
                addThumb: function (b, c, d) {
                    (d = b.getElementsByTagName(d)[0]) ? b.insertBefore(c, d) : b.appendChild(c)
                },
                thumb: function (b) {
                    if (b.src) {
                        if (!b.media) {
                            b.media = "image";
                        }
                        var c = a.a.k + "_thumb_" + b.src,
                            d = a.f.make({
                                SPAN: {
                                    className: a.a.k + "_pinContainer"
                                }
                            }),
                            e = a.f.make({
                                A: {
                                    className: a.a.k + "_pinThis",
                                    rel: b.media,
                                    href: "#"
                                }
                            }),
                            g = a.f.make({
                                SPAN: {
                                    className: "img"
                                }
                            }),
                            f = new Image;
                        a.f.set(f, "nopin", "nopin");
                        b.page && a.f.set(e, "pinUrl", b.page);
                        if (a.v.canonicalTitle || b.title) {
                            a.f.set(e, "pinDesc", a.v.canonicalTitle || b.title);
                        }
                        b.desc && a.f.set(e, "pinDesc", b.desc);
                        f.style.visibility = "hidden";
                        f.onload = function () {
                            if (Browser.isIE6 || Browser.isIE7 || Browser.isIE8) {
                                var i = this.width, h = this.height;
                            } else {
                                var i = $(this).width(), h = $(this).height();
                            }

                            if (h === i) {
                                this.width = this.height = a.a.thumbCellSize;
                            }
                            if (h > i) {
                                this.width = a.a.thumbCellSize;
                                this.height = a.a.thumbCellSize * (h / i);
                                if (Browser.isIE6 || Browser.isIE7 || Browser.isIE8) {
                                    this.style.marginTop = 0 - (this.height - a.a.thumbCellSize) / 2 + "px";
                                }
                                else {
                                    this.style.marginTop = 0 - ($(this).height() - a.a.thumbCellSize) / 2 + "px";
                                }

                            }
                            if (h < i) {
                                this.height = a.a.thumbCellSize;

                                if (Browser.isIE6 || Browser.isIE7 || Browser.isIE8) {
                                    this.width = a.a.thumbCellSize;
                                    this.style.marginLeft = 0 + "px";
                                }
                                else {
                                    this.width = a.a.thumbCellSize * (i / h);
                                    this.style.marginLeft = 0 - ( $(this).width() - a.a.thumbCellSize) / 2 + "px";
                                }

                            }
                            this.style.visibility = ""
                        };
                        f.src = b.thumb ? b.thumb : b.src;
                        a.f.set(e, "pinImg", b.src);
                        if (b.extended) {
                            f.className = "extended";
                        }
                        g.appendChild(f);
                        d.appendChild(g);
                        b.media !== "image" && d.appendChild(a.f.make({
                            SPAN: {
                                className: a.a.k + "_play"
                            }
                        }));
                        g = a.f.make({
                            CITE: {}
                        });
                        g.appendChild(a.f.make({
                            span: {
                                className: a.a.k + "_mask"
                            }
                        }));
                        f = b.height + " x " + b.width;
                        if (b.duration) {
                            f = b.duration % 60;
                            if (f < 10) f = "0" + f;
                            f = ~~ (b.duration / 60) + ":" + f
                        }
                        if (b.total_slides) f = b.total_slides + " slides";
                        f = a.f.make({
                            span: {
                                innerHTML: f
                            }
                        });
                        if (b.provider) {
                            f.className = a.a.k + "_" + b.provider;
                        }
                        g.appendChild(f);
                        d.appendChild(g);
                        d.appendChild(e);
                        e = false;
                        if (b.dupe) {
                            g = 0;
                            for (f = a.v.thumbed.length; g < f; g += 1) {
                                if (a.v.thumbed[g].id.indexOf(b.dupe) !== -1) {
                                    e = a.v.thumbed[g].id;
                                    break;
                                }
                            }
                        }
                        if (e !== false) {
                            if (e = a.d.getElementById(e)) {
                                e.parentNode.insertBefore(d, e);
                                e.parentNode.removeChild(e);
                            } else {
                                b.page || b.media !== "image" ? a.f.addThumb(a.s.embedContainer, d, "SPAN") : a.f.addThumb(a.s.imgContainer, d, "SPAN");
                            }
                        } else {
                            a.s.imgContainer.appendChild(d);
                            a.v.hazAtLeastOneGoodThumb += 1;
                        }
                        (b = a.d.getElementById(c)) && b.parentNode.removeChild(b);
                        d.id = c;
                        a.f.set(d, "domain", c.split("/")[2]);
                        a.v.thumbed.push(d);
                    }
                },
                call: function (b, c) {
                    var d = a.f.callback.length,
                        e = a.a.k + ".f.callback[" + d + "]",
                        g = a.d.createElement("SCRIPT");
                    a.f.callback[d] = function (f) {
                        c(f, d);
                        a.v.awaitingCallbacks -= 1;
                        a.f.kill(e);
                    };
                    g.id = e;
                    g.src = b + "&callback=" + e;
                    g.type = "text/javascript";
                    g.charset = "utf-8";
                    a.v.firstScript.parentNode.insertBefore(g, a.v.firstScript);
                    a.v.awaitingCallbacks += 1;
                },
                ping: {
                    checkDomain: function (b) {
                        var c, d;
                        if (b && b.disallowed_domains && b.disallowed_domains.length) {
                            c = 0;
                            for (d = b.disallowed_domains.length; c < d; c += 1) if (b.disallowed_domains[c] === a.w.location.host) {
                                a.f.close(a.a.msg.noPin);
                                return
                            } else a.v.badDomain[b.disallowed_domains[c]] = true;
                            c = 0;
                            for (d = a.v.thumbed.length; c < d; c += 1) a.v.badDomain[a.f.get(a.v.thumbed[c], "domain")] === true && a.f.unThumb(a.v.thumbed[c].id.split("thumb_").pop())
                        }
                    },
                    info: function (b) {
                        if (b) {
                            if (b.err) {
                                a.f.unThumb(b.id);
                            } else if (b.reply && b.reply.img && b.reply.img.src) {
                                var c = "";
                                if (b.reply.page) {
                                    c = b.reply.page;
                                }
                                if (b.reply.nopin && b.reply.nopin === 1) {
                                    a.f.unThumb(b.id);
                                } else {
                                    if (a.v.scragAllThumbs === true) {
                                        a.s.embedContainer.innerHTML = "";
                                        a.s.imgContainer.innerHTML = ""
                                    }
                                    a.f.thumb({
                                        provider: b.src,
                                        src: b.reply.img.src,
                                        height: b.reply.img.height,
                                        width: b.reply.img.width,
                                        media: b.reply.media,
                                        desc: b.reply.description,
                                        page: c,
                                        duration: b.reply.duration || 0,
                                        total_slides: b.reply.total_slides || 0,
                                        dupe: b.id
                                    });
                                }
                            }
                        }
                    }
                },
                unThumb: function (b) {
                    b = a.a.k + "_thumb_" + b;
                    var c = a.d.getElementById(b);
                    if (c) {
                        if (a.v.canonicalImage) if (a.a.k + "_thumb_" + a.v.canonicalImage === b) return;
                        b = c.getElementsByTagName("A")[0];
                        b.className = a.a.k + "_hideMe";
                        b.innerHTML = a.a.msg.grayOut;
                        a.v.hazAtLeastOneGoodThumb -= 1
                    }
                },
                getExtendedInfo: function (b) {
                    if (!a.v.hazCalledForInfo[b]) {
                        a.v.hazCalledForInfo[b] = true;
                        a.f.call(a.a.embed + b, a.f.ping.info)
                    }
                },
                getId: function (b) {
                    for (var c, d = b.u.split("?")[0].split("#")[0].split("/"); !c;) c = d.pop();
                    if (b.r) c = parseInt(c, b.r);
                    return encodeURIComponent(c)
                },
                seekCanonical: function (b) {
                    var c = a.a.seek[b],
                        d = null,
                        e = null,
                        g, f, i, h, l, j = {
                            pPrice: "",
                            pCurrencySymbol: ""
                        };
                    if (!c || !c.via) {
                        return null;
                    }
                    if (typeof c.via === "string" && a.a.via[c.via]) {
                        d = a.a.via[c.via];
                    } else if (typeof c.via === "object") {
                        d = c.via;
                    }
                    g = a.v[d.tagName] || a.d.getElementsByTagName(d.tagName);
                    l = g.length;
                    for (h = 0; h < l; h += 1) {
                        f = a.f.get(g[h], d.property);
                        if ((i = a.f.get(g[h], d.content)) && f) {
                            if (d.field[f]) {
                                j[d.field[f]] = i;
                            }
                        }
                    }
                    if (j.pId && j.pId !== c.id) {
                        return null;
                    }
                    if (j.pUrl && j.pImg) {
                        e = new Image;
                        e.onload = function () {
                            a.f.thumb({
                                media: c.media || "image",
                                provider: b,
                                src: this.src,
                                title: this.title,
                                height: this.height,
                                width: this.width
                            });
                            a.v.tag.push(e)
                        };
                        a.v.canonicalTitle = j.pTitle || a.d.title;
                        if (c.fixTitle) {
                            if (a.v.canonicalTitle.match(c.fixTitle.find)) {
                                a.v.canonicalTitle = a.v.canonicalTitle.replace(c.fixTitle.find, c.fixTitle.replace);
                                if (c.fixTitle.suffix) {
                                    a.v.canonicalTitle += c.fixTitle.suffix;
                                }
                            }
                        }
                        a.v.canonicalTitle = a.v.canonicalTitle.replace(/%s%/, j.pCurrencySymbol + j.pPrice);
                        e.title = a.v.canonicalTitle;
                        e.setAttribute("page", j.pUrl);
                        if (c.fixImg) if (j.pImg.match(c.fixImg.find)) j.pImg = j.pImg.replace(c.fixImg.find, c.fixImg.replace);
                        if (c.checkNonCanonicalImages) a.v.checkNonCanonicalImages = true;
                        a.v.canonicalImage = e.src = j.pImg;
                        return e
                    }
                    return null
                },
                hazUrl: {
                    etsy: function () {
                        a.f.seekCanonical("etsy")
                    },
                    fivehundredpx: function () {
                        var b = a.f.seekCanonical("fivehundredpx");
                        if (b) {
                            b.setAttribute("extended", true);
                            b.setAttribute("dupe", b.src);
                            a.f.getExtendedInfo("src=fivehundredpx&id=" + encodeURIComponent(b.src))
                        }
                    },
                    flickr: function () {
                        var b = a.f.seekCanonical("flickr");
                        if (b) {
                            b.setAttribute("extended", true);
                            b.setAttribute("dupe", b.src);
                            a.f.getExtendedInfo("src=flickr&id=" + encodeURIComponent(b.src))
                        }
                    },
                    kickstarter: function () {},
                    soundcloud: function () {},
                    slideshare: function () {},
                    youtube: function () {
                        var b = a.f.seekCanonical("youtube");
                        if (b) {
                            b.setAttribute("extended", true);
                            a.f.getExtendedInfo("src=youtube&id=" + encodeURIComponent(b.getAttribute("page").split("=")[1].split("&")[0]))
                        }
                    },
                    vimeo: function () {
                        var b = a.f.getId({
                                u: a.d.URL,
                                r: 10
                            }),
                            c = "vimeo";
                        if (a.w.location.protocol === "https:") c += "_s";
                        b > 1E3 && a.f.getExtendedInfo("src=" + c + "&id=" + b)
                    },
                    googleImages: function () {
                        a.v.inlineHandler = "google"
                    },
                    tumblr: function () {
                        a.v.inlineHandler = "tumblr"
                    },
                    netflix: function () {
                        a.v.inlineHandler = "netflix"
                    },
                    pinterest: function () {
                        a.f.close(a.a.msg.installed)
                    },
                    facebook: function () {
                        a.f.close(a.a.msg.privateDomain.replace(/%privateDomain%/, "Facebook"))
                    },
                    googleReader: function () {
                        a.f.close(a.a.msg.privateDomain.replace(/%privateDomain%/, "Google Reader"))
                    },
                    stumbleUpon: function () {
                        var b = 0,
                            c = a.a.stumbleFrame.length,
                            d;
                        for (b = 0; b < c; b += 1) if (d = a.d.getElementById(a.a.stumbleFrame[b])) {
                            a.f.close();
                            if (a.w.confirm(a.a.msg.bustFrame)) a.w.location = d.src;
                            break
                        }
                    }
                },
                hazSite: {
                    flickr: {
                        img: function (b) {
                            if (b.src) {
                                b.src = b.src.split("?")[0];
                                a.f.getExtendedInfo("src=flickr&id=" + encodeURIComponent(b.src))
                            }
                        }
                    },
                    fivehundredpx: {
                        img: function (b) {
                            if (b.src) {
                                b.src = b.src.split("?")[0];
                                a.f.getExtendedInfo("src=fivehundredpx&id=" + encodeURIComponent(b.src))
                            }
                        }
                    },
                    behance: {
                        img: function (b) {
                            if (b.src) {
                                b.src = b.src.split("?")[0];
                                a.f.getExtendedInfo("src=behance&id=" + encodeURIComponent(b.src))
                            }
                        }
                    },
                    netflix: {
                        img: function (b) {
                            if (b = b.src.split("?")[0].split("#")[0].split("/").pop()) {
                                id = parseInt(b.split(".")[0]);
                                id > 1E3 && a.v.inlineHandler && a.v.inlineHandler === "netflix" && a.f.getExtendedInfo("src=netflix&id=" + id)
                            }
                        }
                    },
                    youtube: {
                        img: function (b) {
                            b = b.src.split("?")[0].split("#")[0].split("/");
                            b.pop();
                            (id = b.pop()) && a.f.getExtendedInfo("src=youtube&id=" + id)
                        },
                        iframe: function (b) {
                            (b = a.f.getId({
                                u: b.src
                            })) && a.f.getExtendedInfo("src=youtube&id=" + b)
                        },
                        video: function (b) {
                            (b = a.f.get(b, "data-youtube-id")) && a.f.getExtendedInfo("src=youtube&id=" + b)
                        },
                        embed: function (b) {
                            var c = a.f.get(b, "flashvars"),
                                d = "";
                            if (c) {
                                if (d = c.split("video_id=")[1]) d = d.split("&")[0];
                                d = encodeURIComponent(d)
                            } else d = a.f.getId({
                                u: b.src
                            });
                            d && a.f.getExtendedInfo("src=youtube&id=" + d)
                        },
                        object: function (b) {
                            b = a.f.get(b, "data");
                            var c = "";
                            if (b)(c = a.f.getId({
                                u: b
                            })) && a.f.getExtendedInfo("src=youtube&id=" + c)
                        }
                    },
                    vimeo: {
                        iframe: function (b) {
                            b = a.f.getId({
                                u: b.src,
                                r: 10
                            });
                            b > 1E3 && a.f.getExtendedInfo("src=vimeo&id=" + b)
                        }
                    }
                },
                parse: function (b, c) {
                    b = b.split(c);
                    if (b[1]) return b[1].split("&")[0];
                    return ""
                },
                handleInline: {
                    google: function (b) {
                        if (b) {
                            var c, d = 0,
                                e = 0,
                                g = a.f.get(b, "src");
                            if (g) {
                                e = b.parentNode;
                                if (e.tagName === "A" && e.href) {
                                    b = a.f.parse(e.href, "&imgrefurl=");
                                    c = a.f.parse(e.href, "&imgurl=");
                                    d = parseInt(a.f.parse(e.href, "&w="));
                                    e = parseInt(a.f.parse(e.href, "&h="));
                                    c && g && b && e > a.a.minImgSize && d > a.a.minImgSize && a.f.thumb({
                                        thumb: g,
                                        src: c,
                                        page: b,
                                        height: e,
                                        width: d
                                    });
                                    a.v.checkThisDomain[c.split("/")[2]] = true
                                }
                            }
                        }
                    },
                    tumblr: function (b) {
                        var c = [];
                        c = null;
                        c = "";
                        if (b.src) {
                            for (c = b.parentNode; c.tagName !== "LI" && c !== a.d.b;) c = c.parentNode;
                            if (c.tagName === "LI" && c.parentNode.id === "posts") {
                                c = c.getElementsByTagName("A");
                                (c = c[c.length - 1]) && c.href && a.f.thumb({
                                    src: b.src,
                                    page: c.href,
                                    height: b.height,
                                    width: b.width
                                })
                            }
                        }
                    }
                },
                hazTag: {
                    img: function (b) {
                        if (a.v.inlineHandler && typeof a.f.handleInline[a.v.inlineHandler] === "function") a.f.handleInline[a.v.inlineHandler](b);
                        else if (!b.src.match(/^data/)) {
                            if (b.height && b.height > 0 && b.width && b.width > 0) {
                                a.f.checkImg(b, b.height, b.width);
                            } else if (a.a.checkHidden) {
                                // if checking hidden images, and image has no dimensions, clone the image and get dimensions after it loads
                                d = new Image;
                                d.onload = function () {
                                    a.f.checkImg(b, this.height, this.width);
                                };
                                d.src = b.src;
                            }
                        }
                    }
                },
                checkImg: function (img,h,w) {
                    if (h > a.a.minImgSize && w > a.a.minImgSize) {
                        // be sure to set up thumb for primary image 1st
                        a.f.thumb({
                            src: img.src,
                            height: h,
                            width: w,
                            title: img.title || img.alt
                        });
                        // then set up thumb for liked image 2nd, so that thumb function can correctly check for dupes
                        if (img.parentNode.tagName === "A" && img.parentNode.href) {
                            var c = img.parentNode, d = c.href.split(".").pop().split("?")[0].split("#")[0];
                            if (d === "gif" || d === "jpg" || d === "jpeg" || d === "png") {
                                d = new Image;
                                d.onload = function () {
                                    a.f.thumb({
                                        src: this.src,
                                        height: this.height,
                                        width: this.width,
                                        title: this.title,
                                        dupe: this.getAttribute("dupe")
                                    })
                                };
                                d.setAttribute("dupe", img.src); // call this before setting src, or else IE 7/8 ignore it if image is already loaded
                                d.title = c.title || c.alt || img.title || img.alt;
                                d.src = c.href;
                            }
                        }
                    }
                },
                checkTags: function () {
                    var b, c, d, e, g, f, i, h, l;
                    b = 0;
                    for (c = a.a.check.length; b < c; b += 1) {
                        g = a.a.parentElement.getElementsByTagName(a.a.check[b]);
                        d = 0;
                        for (e = g.length; d < e; d += 1) {
                            f = g[d];
                            //!a.f.get(f, "nopin") && (a.a.checkHidden || a.f.isVisible(f)) && a.v.tag.push(f);
                            a.f.get(f, "pin") && (a.a.checkHidden || a.f.isVisible(f)) && a.v.tag.push(f);
                        }
                    }
                    b = 0;
                    for (c = a.v.tag.length; b < c; b += 1) {
                        g = a.v.tag[b];
                        f = g.tagName.toLowerCase();
                        if (a.a.tag[f]) for (i in a.a.tag[f]) if (a.a.tag[f][i].hasOwnProperty) {
                            h = a.a.tag[f][i];
                            if (l = a.f.get(g, h.att)) {
                                d = 0;
                                for (e = h.match.length; d < e; d += 1) {
                                    l.match(h.match[d]) && a.f.hazSite[i][f](g)
                                }
                            }
                        }
                        a.f.hazTag[f] && a.f.hazTag[f](g)
                    }
                    a.f.checkDomainBlacklist();
                },
                getHeight: function () {
                    return Math.max(Math.max(a.d.b.scrollHeight, a.d.d.scrollHeight), Math.max(a.d.b.offsetHeight, a.d.d.offsetHeight), Math.max(a.d.b.clientHeight, a.d.d.clientHeight))
                },
                structure: function () {
                    a.s.shim = a.f.make({
                        IFRAME: {
                            height: "100%",
                            width: "100%",
                            allowTransparency: true,
                            id: a.a.k + "_shim"
                        }
                    });
                    a.f.set(a.s.shim, "nopin", "nopin");
                    a.d.b.appendChild(a.s.shim);
                    a.s.bg = a.f.make({
                        DIV: {
                            id: a.a.k + "_bg"
                        }
                    });
                    a.d.b.appendChild(a.s.bg);
                    a.s.bd = a.f.make({
                        DIV: {
                            id: a.a.k + "_bd"
                        }
                    });
                    a.s.bd.appendChild(a.f.make({
                        DIV: {
                            id: a.a.k + "_spacer"
                        }
                    }));
                    a.s.hd = a.f.make({
                        DIV: {
                            id: a.a.k + "_hd"
                        }
                    });
                    a.s.x = a.f.make({
                        A: {
                            id: a.a.k + "_x",
                            innerHTML: a.a.msg.cancelTitle
                        }
                    });
                    a.s.hd.appendChild(a.s.x);
                    a.s.hd.appendChild(a.f.make({
                        SPAN: {
                            id: a.a.k + "_logo"
                        }
                    }));
                    a.s.bd.appendChild(a.s.hd);
                    a.s.embedContainer = a.f.make({
                        SPAN: {
                            id: a.a.k + "_embedContainer"
                        }
                    });
                    a.s.bd.appendChild(a.s.embedContainer);
                    a.s.imgContainer = a.f.make({
                        SPAN: {
                            id: a.a.k + "_imgContainer"
                        }
                    });
                    a.s.bd.appendChild(a.s.imgContainer);
                    a.d.b.appendChild(a.s.bd);
                    var b = a.f.getHeight();
                    if (a.s.bd.offsetHeight < b) {
                        a.s.bd.style.height = b + "px";
                        a.s.bg.style.height = b + "px";
                        a.s.shim.style.height = b + "px"
                    }
                    a.w.scroll(0, 0)
                },
                checkUrl: function () {
                    var b;
                    for (b in a.a.url) {
                        if (a.a.url[b].hasOwnProperty) {
                            if (a.d.URL.match(a.a.url[b])) {
                                a.f.hazUrl[b]();
                                if (a.v.hazGoodUrl === false) {
                                    return false
                                }
                            }
                        }
                    }
                    return true
                },
                checkPage: function () {
                    if (a.f.checkUrl()) {
                        if (!a.v.canonicalImage || a.v.checkNonCanonicalImages) {
                            a.f.checkTags();
                        }
                        if (a.v.hazGoodUrl === false) {
                            return false;
                        }
                    } else {
                        return false;
                    }
                    return true;
                },
                checkDomainBlacklist: function () {
                    var b = a.a.checkDomain.url + "?domains=", c, d = 0;
                    for (c in a.v.checkThisDomain) {
                        if (a.v.checkThisDomain[c].hasOwnProperty && !a.v.checkDomainDone[c]) {
                            a.v.checkDomainDone[c] = true;
                            if (d) {
                                b += ",";
                            }
                            d += 1;
                            b += encodeURIComponent(c);
                            if (d > a.a.maxCheckCount) {
                                a.f.call(b, a.f.ping.checkDomain);
                                b = a.a.checkDomain.url + "?domains=";
                                d = 0
                            }
                        }
                    }
                    d > 0 && a.f.call(b, a.f.ping.checkDomain);
                },
                isVisible: function(obj) {
                    if (obj == document) return true
                    if (!obj) return false
                    if (!obj.parentNode) return false
                    if (obj.style) {
                        if (obj.style.display == 'none') return false
                        if (obj.style.visibility == 'hidden') return false
                    }
                    if (window.getComputedStyle) {
                        var style = window.getComputedStyle(obj, "")
                        if (style.display == 'none') return false
                        if (style.visibility == 'hidden') return false
                    }
                    var style = obj.currentStyle // IE only
                    if (style) {
                        if (style['display'] == 'none') return false
                        if (style['visibility'] == 'hidden') return false
                    }
                    return a.f.isVisible(obj.parentNode)
                },
                init: function () {
                    a.d.d = a.d.documentElement;
                    a.d.b = a.d.getElementsByTagName("BODY")[0];
                    a.d.h = a.d.getElementsByTagName("HEAD")[0];
                    if (!a.d.b || !a.d.h) a.f.close(a.a.msg.noPinIncompletePage);
                    else if (a.w.hazPinningNow !== true) {
                        a.w.hazPinningNow = true;
                        var b = a.n.userAgent;
                        a.v = {
                            saveScrollTop: a.w.pageYOffset,
                            hazGoodUrl: true,
                            hazAtLeastOneGoodThumb: 0,
                            awaitingCallbacks: 0,
                            thumbed: [],
                            hazIE: function () {
                                return /msie/i.test(b) && !/opera/i.test(b)
                            }(),
                            hazIOS: function () {
                                return b.match(/iP/) !== null
                            }(),
                            firstScript: a.d.getElementsByTagName("SCRIPT")[0],
                            selectedText: a.f.getSelection(),
                            hazCalledForInfo: {},
                            checkThisDomain: {},
                            checkDomainDone: {},
                            badDomain: {},
                            meta: a.d.getElementsByTagName("META"),
                            tag: [],
                            canonicalTitle: ""
                        };
                        a.v.checkThisDomain[a.w.location.host] = true;
                        a.f.checkDomainBlacklist();
                        a.f.presentation();
                        a.f.structure();
                        if (a.f.checkPage()) {
                            if (a.v.hazGoodUrl === true) {
                                a.f.behavior();
                                if (a.f.callback.length > 1) {
                                    a.v.waitForCallbacks = a.w.setInterval(function () {
                                        if (a.v.awaitingCallbacks === 0) {
                                            if (a.v.hazAtLeastOneGoodThumb === 0 || a.v.tag.length === 0) {
                                                a.w.clearInterval(a.v.waitForCallbacks);
                                                a.f.close(a.a.msg.notFound)
                                            }
                                        }
                                    }, 500);
                                } else if (!a.v.canonicalImage && (a.v.hazAtLeastOneGoodThumb === 0 || a.v.tag.length === 0)) {
                                    a.f.close(a.a.msg.notFound);
                                }
                            }
                        }
                    }
                }
            }
        }()
    };
    /* call init subfunction to start things going */
    a.f.init();

};
/**
 * Manage General Piaget Navigation
 *
 * @type {{events: EventDispatcher, rootUrl: string, History: null, currentState: null, ecommerceActive: boolean, goToUrl: Function, disableLoadOnStateChange: boolean, init: Function, onApiChange: Function, clickLink: Function}}
 */
var Nav = {
    events:new EventDispatcher(),
    rootUrl:"/",
    History : null,
    currentState : null,
    ecommerceActive: false,
    goToUrl : function(url, target,data) {
        Nav.changeUrlFromJsAction=true;
        // change url
        if(!data) data = {};
        data.url=url;
        data.target=target;
        if(document.location.protocol=="https:"){
            document.location=url;
        } else if (Nav.History) {
            Nav.History.pushState(data, url, url);
        }
        Nav.changeUrlFromJsAction=false;


    },

    /**
     * flag, if set to true the url can change, but no ajax will be performed
     */
    disableLoadOnStateChange:false,
    /**
     * initialize the stuff
     */
    init: function() {
        window.NO_HISTORYJS_INIT !== true && Nav.initHistory();
        try{
        if(Api){
            Api.events.addEventListener("onChange", Nav.onApiChange);
        }}catch(e){}
    },
    /**
     * Launched when the API (admin) do something in dom. When it happen maybe the url should change (cause it's not managed in the api).
     * @param {Api.EventOnChange} apiEvent
     */
    onApiChange:function(apiEvent){
        if(apiEvent.controllerUrl){
            //if the api Event provide an url it means that we used an url to display stuff in dom.
            //so we will change the url (in the browser bar) but we will prevent the ajax call cause the api did it before.
            Nav.disableLoadOnStateChange=true;
            Nav.goToUrl(apiEvent.controllerUrl,null,true);
            Nav.disableLoadOnStateChange=false;

        }
        //in all cases, we need to re-init the dom objects
        PiagetCom.initAfterAjax();
    },
    /**
     * Performs correct action according parameters on the a href clicked
     * @param jqClicked {jQuery} The a href jQuery element.
     */
    clickLink:function(jqClicked){
        var href=jqClicked.attr("href"); //the url

        /**
         * According the current href value and target performs the link
         */
        function simpleLink(){
            "use strict";

            var target=jqClicked.attr("target"); //the href target
            //alert(href);
            if(target){
                window.open(href,target);
            }else{
                document.location = Gtm.appendDataAttributeParametersToURL(href, jqClicked, null);
            }
        }
        /**
         * load the content in ajax somewhere....
         */
        function ajaxLink(){
            "use strict";
            if(jqClicked.attr("data-nav-ajax-href")){ //if a specific ajax href is defined we use it
                href=jqClicked.attr("data-nav-ajax-href");
            }

            // Current page:
            // get [data-currentPage] if exists
            // get closest [data-currentPage] if exists
            // At the end takes current URL
            var currentPage;
            if (jqClicked.attr("data-currentpage")) {
                currentPage = window.location.origin + jqClicked.data("currentpage");
            }

            if (! currentPage) {
                var page = jqClicked.closest('[data-currentpage]').data('currentpage');
                if (page) {
                    currentPage = window.location.origin + page;
                }
            }

            if (! currentPage) {
                currentPage = document.location;
            }

            // Current reference:
            var currentReference = '';
            if (jqClicked.data('currentreference')) {
                currentReference = jqClicked.data('currentreference');
            }

            if (! currentReference) {
                var ref = jqClicked.closest('[data-currentreference]').data('currentreference');
                if (!ref) {
                    ref = jqClicked.closest('[data-model-reference]').data('model-reference');
                }
                if (ref) {
                    currentReference = ref;
                }
            }

            //search where to load the content
            var receiverId=jqClicked.attr("data-nav-ajax-receiver");
            var statAction = jqClicked.attr("data-nav-ajax-stats");


            /////////////////////////////////// related popin stuff BEGIN //////////////////////////////////
            //special behavious for popin
            if(receiverId=="popin") {
                var loader=new SimpleAjax(href, "currentPage=" + currentPage + "&currentReference=" + currentReference);
                loader.events.addEventListener(EVENT_AJAX_SUCCESS,function(ajaxEvent){
                    "use strict";
                    var el=$("<div>");
                    el.html(ajaxEvent.data);
                    var domPopIn=$(el.find(">div"));
                    PopIn.getContainer();
                    PopIn.container.empty();
                    PopIn.container.append(domPopIn);
                    var popIn=new PopIn(domPopIn);
                    popIn.show();

                    // IE fix for placeholder
                    if(Browser.isIE){
                        $.placeholder.shim();
                    }

                    // Update the phone number "mandatory" attribute when changing the country / catalogs.
                    if(href == '/popin_relationship/contact/popin'){
                        Form.setUpMandatoryCatalogFields();
                    }

                    if(statAction){
                        Stats.action(statAction);
                    }
                });
                loader.send();
                return;
            }else{
                if(receiverId){
                    var match = receiverId.match("pop-in-relationship\/(.*)");
                }else{
                    var match=false;
                }

                //special behaviour for popin-relationship
                if(match && match[1]){

                    var parentReceiver = $("div[data-nav-is-ajax-receiver='pop-in-relationship']");

                    //if the content selected has already been loaded we don't reload it, we just fade out/fade in
                    if($("div[data-nav-is-ajax-receiver='"+receiverId+"']").length > 0){
                        TweenMax.to(parentReceiver.children("div[data-nav-is-ajax-receiver!='"+receiverId+"']"),0.5,{
                            css:{opacity:0},
                            onComplete:function(){
                                parentReceiver.children("div[data-nav-is-ajax-receiver!='"+receiverId+"']").addClass("hidden");
                                $("div[data-nav-is-ajax-receiver='"+receiverId+"']").removeClass("hidden");
                                TweenMax.to($("div[data-nav-is-ajax-receiver='"+receiverId+"']"),0.5,{
                                    css:{opacity:1},
                                    onComplete:PiagetCom.initAfterAjax
                                });
                            }
                        });
                        return;
                    }

                    //otherwise we create the sub div in order to store the data. Later we will just have to display this div and hide the other ones.
                    var newReceiver = $("<div data-nav-is-ajax-receiver='"+receiverId+"'></div>");
                    parentReceiver.append(newReceiver);

                    TweenMax.to(parentReceiver.children("div[data-nav-is-ajax-receiver!='"+receiverId+"']"),0.5,{
                        css:{opacity:0},
                        onComplete:function(){
                            parentReceiver.children("div[data-nav-is-ajax-receiver!='"+receiverId+"']").addClass("hidden")
                        }
                    });
                    //receiver.children("div").addClass("hidden");
                    receiver = newReceiver;

                }
            }

            /////////////////////////////////// related popin stuff END //////////////////////////////////


            var receiver = $("div[data-nav-is-ajax-receiver='"+receiverId+"']");
            if(!receiver || receiver.length==0){

                alert("error : no ajax receiver found "+receiverId);
                return;

            }
            //the request
            var loader=new SimpleAjax(href,"currentPage="+document.location + "&currentReference=" + currentReference);
            loader.events.addEventListener(EVENT_AJAX_SUCCESS,
                function(ajaxEvent){

                    //transition in
                    receiver.empty();
                    receiver.css("height","auto");
                    receiver.scrollLeft(0);
                    receiver.scrollTop(0);
                    receiver.html(ajaxEvent.data);

                    var heightAfter=receiver.height();
                    receiver.css("height",heightBefore);
                    receiver.css("overflow","hidden");
                    TweenMax.to(receiver,0.5,{
                                css:{height:heightAfter,opacity:1},
                                onComplete:function(){
                                    receiver.css("height","");
                                    receiver.css("overflow","");
                                    PiagetCom.initAfterAjax();
                                }
                            }
                    );

                    Stats.action(statAction);
                }
            )

            //transition out...and ajax load send at the end
            var heightBefore=receiver.height();
            TweenMax.to(receiver,0.5,{
                css:{opacity:0.1,height:heightBefore},
                onComplete:function(){
                    //send the request after transition out
                    loader.send();
                }

            });
        }

        /**
         * Returns true if the link should newer be displayed on the mobile website
         * @returns {boolean}
         */
        function preventMobileLink(){
            if(jqClicked.hasClass("js-link-prevent-phone")){
                return true;
            }
            if(jqClicked.attr("data-nav-ajax-href") && jqClicked.attr("data-nav-ajax-href").indexOf("engraving")!=-1){
                return true;
            }
            return false;
        }

        //Ajax or not ajax this is the question...

        //no ajax target....easy
        if( !jqClicked.attr("data-nav-ajax-receiver")){
            simpleLink();
            return;
        }

        if(!preventMobileLink() ){
            if( Nav.isResponsivePhone() ){
                    if(Nav.isResponsivePhone() ){ //mobile
                        jqClicked.attr("target","mobile")
                    }
                simpleLink();
                return;
            }
        }
        ajaxLink();

    }
};

/**
 * Will return true if we are on my account and if screen witdth is bellow a certain size
 * @returns {boolean|*}
 */
Nav.isResponsivePhone=function(){
   return (Browser.isMobile && Dom.body.hasClass("ma"));
};

/**
 * URL handling
 */
Nav.initHistory = function(){

    if (window.History) {
        Nav.History = window.History;

        // Bind to State Change
        if (History && History.Adapter) {
            History.Adapter.bind(window,'statechange',function(e){ // Note: We are using statechange instead of popstate
                if(Nav.changeUrlFromJsAction){
                    Nav.events.dispatchEvent("history-change",e);
                }else{
                    Nav.events.dispatchEvent("history-back",e);
                }
            });
        }
    }
};

Nav.Loader = function(url, target) {
    this.events = new EventDispatcher();
    var me = this;

    this.start=function(){
        $.ajax({
            type: "POST",
            url: url,
            data: {},
            success:
                function (response){
                    target.html(response);
                    me.events.dispatchEvent("loaded");
                }
        });
    }
};

Nav.autoLoads = function() {
    $("[" + Nav.CTRL.AJAX_AUTOLOAD + "]").each(function() {
        Nav.navAutoLoadOne($(this));

        // prevent multiple calls
        $(this).removeAttr(Nav.CTRL.AJAX_AUTOLOAD);
    });
};

Nav.navAutoLoadOne = function(elem,url) {
    var loader,
        elem = elem,
        url = url || elem.attr(Nav.CTRL.AJAX_AUTOLOAD);

    if( url && url != "") {
        elem.attr(Nav.CTRL.AJAX_AUTOLOAD + "Loaded", url);

        var loading = new PiagetCom.Loading(elem);

        loading.setLoading();

        loader = new Nav.Loader(url, elem);
        loader.events.addEventListener("loaded", function() {
            elem.removeAttr(Nav.CTRL.AJAX_AUTOLOAD);
            loading.setNormal();
            PiagetCom.initAfterAjax(elem);
        });
        loader.start();
    }
};

Nav.CTRL =  {
    DISABLED : "[data-nav-disabled]",
    AJAX_LINK : "data-nav-is-ajax",
    AJAX_TARGET : "data-nav-is-ajax-target",
    AJAX_RECEIVER : "[data-nav-ajax-receiver]",
    AJAX_AUTOLOAD : "data-nav-ajax-autoload",
    LINK_INSIDE : ".js-data-nav-link-inside",
    ITEM_NAV : "[data-is-item-nav]",
    LINK_PRINT : "a[href='#Print']",
    MOBILE_ITEM : "[data-nav-is-mobile-item='true']",
    MOBILE_BACK : "[data-nav-is-mobile-back='true']",
    TOUCH_OVER : "[data-touch-over]"

};

Dom.body.on("click", Nav.CTRL.AJAX_LINK, function(ev) {
    ev.preventDefault();
    var elem=$(this);
    Nav.clickLink($(this));
});

//manage old links
var Phone={
    popup:function(popinurl){
        var firstSelector = '[data-nav-ajax-stats="email-concierge"]',
            secondSelector = '[data-nav-ajax-stats="speak-with-concierge"]',
            element = (0 !== $(firstSelector).length) ? $(firstSelector) : $(secondSelector);

        Nav.clickLink(element);
    }
};

Dom.body.on("click", Nav.CTRL.DISABLED, function(ev) {
    ev.preventDefault();
});

Dom.body.on("click", Nav.CTRL.LINK_INSIDE+",[data-nav-ajax-receiver]", function(ev) {
    ev.preventDefault();
    var elem=$(this);
    if(!elem.attr("href")){
        elem=$(elem.find("a")[0]);
    }
    Nav.clickLink(elem);

    var autoDestroyTheLink=$(this).attr("data-nav-link-auto-destroy-after")
    if(autoDestroyTheLink && autoDestroyTheLink=="click"){
        $(this).removeClass("js-data-nav-link-inside");
    }
});

Dom.body.on("click", ".js-nav-link-inside-inside", function(ev) {
    ev.stopPropagation();
});

Dom.body.on("click", Nav.CTRL.LINK_PRINT, function(ev) {
    ev.preventDefault();
    var elem=$(this);
    switch(true){
        case $(document.body).hasClass('product'):
            Stats.action('print', '9');
            break;

        case $(document.body).hasClass('store'):
            Stats.action('print', '4');
            break;

        default:
            Stats.action('print', '9');
            break;
    }

    window.print();
});



//--------- active page -----------------

Dom.body.on("click", Nav.CTRL.ITEM_NAV, function(ev) {
    ev.preventDefault();
    $(".navBarComponent").find(".item-nav").each(function(){
        $(this).removeClass("active");
    });

    $(this).closest("div.item-nav").addClass("active");
});

//--------- mobile nav menu -----------------
Dom.body.on("click", Nav.CTRL.MOBILE_ITEM, function(ev) {
    ev.preventDefault();
    var el = $(this);

    // first we get the current menu
    var parentElem = el.closest("ul").first();
    if (parentElem.hasClass("active-menu")) {
        // remove active-menu class
        parentElem.removeClass("active-menu");

        // disable all is link and back button
        parentElem.children(":not(.menu-back)").attr("data-nav-is-mobile-item", "false");
        parentElem.children(".menu-back").attr("data-nav-is-mobile-back", "false");
    }

    // get the new menu
    var childElem = el.find('ul:first');
    if (childElem.hasClass("hide")) {
        // remove from hidden and just set has active
        childElem.removeClass("hide");
        childElem.addClass("active-menu");
    }

    // we don't want to display the parent menu so just hide it
    parentElem.find("li[data-nav-is-mobile-back='false']").find("span:first").css("display", "none");
    parentElem.find("li[data-nav-is-mobile-item='false']").find("span:first").css("display", "none");
});

Dom.body.on("click", Nav.CTRL.MOBILE_BACK, function(ev) {
    ev.preventDefault();
    var el = $(this);

    // first we get the current menu
    var parentElem   = el.closest("ul").first();

    // second we get the parent menu
    var bigParentElem = parentElem.parent().closest("ul").first();

    // just remove the active menu class and hide it
    if (parentElem.hasClass("active-menu")) {
        parentElem.removeClass("active-menu");
        parentElem.addClass("hide");
    }

    // we set the parent to active
    bigParentElem.addClass("active-menu");
    // display it
    bigParentElem.find("li[data-nav-is-mobile-back='false']").find("span:first").css("display", "block");
    bigParentElem.find("li[data-nav-is-mobile-item='false']").find("span:first").css("display", "block");

    // re able links
    bigParentElem.children("li[data-nav-is-mobile-item='false']").attr("data-nav-is-mobile-item", "true");
    bigParentElem.children("li[data-nav-is-mobile-back='false']").attr("data-nav-is-mobile-back", "true");
});




/**
 * Put a .active css class on the element itself on click
 *
 * markup : [nav-activable-item]
 * markup to get only one active element in children list : [nav-activable-item-list]
 * <ul nav-activable-item-list >
 *     <li nav-activable-item></li>
 *     <li nav-activable-item class="active">you just clicked me baby</li>
 *     <li nav-activable-item></li>
 *     <li nav-activable-item></li>
 *     <li nav-activable-item></li>
 * </ul>
 */
Dom.body.on("click","[nav-activable-item]",function(e){
    e.preventDefault();
    Nav.activeItem($(this));
});

Nav.activeItem = function(element){
    var parent=element.closest("[nav-activable-item-list]");
    if(parent.length>0){
        parent.find("[nav-activable-item]").removeClass("active");
    }
    element.addClass("active");
};

/* touch over handler for touch devices */
Dom.body.on("click", Nav.CTRL.TOUCH_OVER, function(e) {
    // stop all event
    e.stopPropagation();
    e.preventDefault();
    e.stopImmediatePropagation();

    // get the current element
    var elem = $(this);
    var step = elem.attr("data-touch-over");

    // if the action is a data-roll hover target
    if (typeof elem.attr('data-roll-over-target') !== 'undefined') {
        $(".main-nav a.active[data-roll-over-target!='"+elem.attr("data-roll-over-target")+"']").removeClass("active");

        if (step == "step1") {
            // just in case for the opening put all things to step 1
            $(".main-nav [data-is-touchable]").attr("data-touch-over", "step1");

            elem.attr("data-touch-over", "step2");
            // remove all active stuff

            var target=$("[data-is-roll-over-target='"+elem.attr("data-roll-over-target")+"']");
            var h = target.find(".container").height();
            h += 60;
            TweenMax.to(target,0.5,{css:{height:h}});

        } else if (step == "step2") {
            elem.attr("data-touch-over", "step1");

            // remove all active stuff
            $(".main-nav a.active[data-roll-over-target!='"+elem.attr("data-roll-over-target")+"']").removeClass("active");

            TweenMax.to($("[data-is-roll-over-target]"),0,{css:{height:0}});
        }
    }

    var parent=elem.closest(".js-collection-filters");
    if(parent.length>0){
        if (step == "step1") {
            var maxElement = parent.find("div.filters-group").attr("data-max-elem");
            parent.find(".filters").css('height', (maxElement*30) + 50 + 'px');
            elem.attr("data-touch-over", "step2");
        } else if (step == "step2") {
            parent.find(".filters").css('height', '0px');
            elem.attr("data-touch-over", "step1");
        }
    }
});


//------------mobile only

Dom.body.on("click",".js-phone-list-menu",function(e){
    if(/*Browser.isMobile*/ Stage.width<780){
        if(!$(this).hasClass("open") ){
            e.preventDefault();
            e.stopPropagation();
            $(this).addClass("open");
        }
    }

});

Dom.body.on("click",".js-phone-expand-box .togg",function(e){
    e.preventDefault();
    if(Browser.isMobile){
        var p=$(this).closest(".js-phone-expand-box");
        if(!p.hasClass("open") ){
            e.preventDefault();
            e.stopPropagation();
            p.addClass("open");
        }else{
            p.removeClass("open");
        }
    }
});

Dom.body.on("change",".js-select-url",function(e){
    document.location=$(this).val();
});

/**
 * Adapte search field with on screen size
 *  - large screen -> full search field
 *  - small screen (ipad) -> display only the picto and slide open the field on click
 */
$(function() {
    var $logo = $('.links .logo'),
        $nav = $('.main-nav > .container'),
        $search = $('.search-menu-form'),
        $search_field = $('#appendedInputButtons'),
        $search_button = $search.find('.search-button'),
        $search_container = $('.search-menu-form-container'),
        $menu_items = $('.links .text');

    var options = {
        search_width: 191,
        sliding_class: 'sliding',
        sliding_speed: 0.5
    };

    // display the full search bar if enough space, a small sliding one otherwise
    var adaptSearchBar = function() {
        // There's no $menu_items in checkout pages
        if(typeof($menu_items) != 'undefined' && $menu_items.size() > 0) {
            var space_left = $nav.width() - ($menu_items.last().position().left + $menu_items.last().outerWidth() - $logo.position().left);

            if (space_left > options.search_width) {
                $search_field.show();
                $search_field.css('width', '');
                $search.removeClass(options.sliding_class);
                $search_button.off();
            } else {
                $search_field.hide();
                $search_field.css('width', 0);
                $search.addClass(options.sliding_class);
            }
        }
    };

    // Respond to browser resizing
    adaptSearchBar();
    $(window).resize(adaptSearchBar);

    // open the sliding bar
    var openSmallSearchBar = function() {
        if (!$search.hasClass(options.sliding_class) || $search_field.hasClass('open')){
            return;
        };
        TweenMax.to($search_field, options.sliding_speed, {
            css: {
                display: 'inline',
                width: options.search_width
            },
            onComplete: function() {
                $search_field.addClass('open');
            }
        });
    }

    // close the sliding bar
    var closeSmallSearchBar = function() {
        if (!$search.hasClass(options.sliding_class) || !$search_field.hasClass('open')){
            return;
        };
        TweenMax.to($search_field, options.sliding_speed, {
            css: {
                width: 0
            },
            onComplete: function() {
                $search_field.hide();
                $search_field.removeClass('open');
            }
        });
    };

    // open or close the sliding bar according to the current state
    var toogleSmallSearchBar = function() {
        $search_field.hasClass('open') ?
            closeSmallSearchBar() :
            openSmallSearchBar()
        ;
    };

    // On click, if the field is empty toggle the sliding field back to small
    $search_button.on('click', function(e) {
        if ($search_field.val().length == 0) {
            e.preventDefault();
            toogleSmallSearchBar();
        }
    });

    // Mouse enter mouse leave should work until the user start to write into the field
    $search_container
        .on('mouseenter', function() {
            openSmallSearchBar()
        })
        .on('mouseleave', function() {
            if ($search_field.is(":focus") || ($search_field.val() && $search_field.val().length > 0)){
                return;
            }
            closeSmallSearchBar();
        })
    ;

    // Close the field on blur
    $search_field.on('blur', function(e) {
        if ($search_field.val().length == 0) {
            closeSmallSearchBar();
        }
    });

});
;
/**
 * Manage User Localization by GEO IP
 */
var Localization={};

Localization.matchUserChoiceCookieName = 'localisationMatchUserChoice';
Localization.cookieName = "matchingUserDomain";
Localization.currentCookie = '';

/**
 * If the user doesn't have the country cookie yet, process an ajax call to get it
 *
 * When the user arrives on a domain, multiple things can happen :
 *
 * 1В° The user has no domain cookie ('matchingUserDomain') : a geo localisation call is made (see below)
 * 2В° The user has a domain cookie that matches the current domain : nothing is done
 * 3В° The user has a domain cookie that does not match the current domain : the user is redirected automatically
 * 4В° The user has a domain cookie with value 'ignored' : nothing is done
 *
 *
 * Upon a geo localisation call, if the user domain matches the one found via geo localisation, nothing happens
 * and no cookie is set. Otherwise a popin is displayed with two choices :
 *
 * 1В° Accept the redirection : the new domain is saved in the cookie
 * 2В° Refuse : the value 'ignored' is saved in the cookie
 *
 * The duration of the cookie is determined by a checkbox "Remember my choice". If left unchecked
 * the cookie expires at the end of the session. Otherwise, the cookie is kept 90 days.
 *
 *
 * All those cookie manipulations happen only in this javascript file. There is one exception to this rule :
 *
 * When a user clicks a country link in the footer, the query string value localisationMatchUserChoice=1
 * is present in the URL. The presence of this query instructs the backend to send back an answer with
 * a cookie containing the arriving domain that last the duration of the session. This mechanism is in
 * place to avoid pestering the user with the localisation popin on the domain he has just chosen.
 *
 * This implies that any previously chosen domain will be overwritten by choosing a new domain
 * in the country footer !
 *
 *
 * It is also really important to note that a cookie has a domain and thus is only valid for this domain.
 * The domain must contain at least 2 levels (ie piaget.com or piaget.fr) and is valid on all subdomains.
 * This implies that any localisation cookie set on www.piaget.com or int.piaget.com cannot have any
 * effect if the user visits www.piaget.es for example. It is thus perfectly possible that the user is
 * presented with the localisation popin when visiting websites with different top level domain.
 */
Localization.checkLocalization=function(openLocalizationCallback)
{
    // Allow to test a specific ip given through query string
    var forceIp = null;
    var match = document.URL.match(/[?&]userip=([^&#]*)/);
    if (match !== null) {
        forceIp = match[1];
    }

    // If we already have the cookie, we do nothing
    var domain = Cookie.getRawCookie(Localization.cookieName);
    if(domain && forceIp === null) {
        if(domain != 'ignored' && $('.active.link-to-domain-' + domain).length == 0) {
            var link = $('.link-to-domain-'+domain);
            if(link && link.attr('href')) {
                link.attr('href', link.attr('href').replace(Localization.matchUserChoiceCookieName + '=1', ''));
                link[0].click();
            }
        }

        return;
    }

    // Request the geo loc
    var ajaxParam = {};
    if (forceIp){
        ajaxParam.forceIp= forceIp;
    }
    $.ajax({
        url: "/piaget/geoipCheck",
        data: ajaxParam,
        success: function (data) {
            if (data === "" || $('body').hasClass('no-localisation-popin') || data.success !== true || data.messages.popin === "")
                return;

            Localization.currentCookie = data.messages.domain;
            openLocalizationCallback(data.messages.popin);
        }
    });
};


Localization.updateCookieIfNeeded = function(canceled, remember) {
    // this is done this way because the mobile popin does not have access to the checkbox
    // directly, so it has to use another way
    if(typeof(remember) == 'undefined') {
        remember = $('#rememberCountrySuggestion:checked').length > 0;
    }

    var days = remember ? 90 : '';
    if(canceled) {
        Localization.currentCookie = 'ignored';
    }

    Cookie.setRawCookie(Localization.cookieName, Localization.currentCookie, days);
    return remember;
};

Localization.jumpToSuggestedDomain=function() {
    var domainId = $('#popin-domain-suggestion').data('suggested-domain');
    var $link = $('.link-to-domain-'+domainId).first();

    // we don't want to set the cookie on the arrival domain, so remove the query string
    var href = $link.attr('href').replace(Localization.matchUserChoiceCookieName + '=1', '');

    href = Gtm.appendPlainParametersToURL(href, {
        'event':'footerSelectorAccepted',
        'country': $link.find("[data-text-en]").data("text-en")
    });

    $link.attr("href", href);
    $link[0].click();
};;
/**
 * Create an new popin object from a jquery object.
 *
 * @param {jQuery} jq
 * @return {PopIn}
 * @constructor
 */
var PopIn=function(jq){
    "use strict";
    var me=this;
    var jq=this.jq=$(jq);
    jq.data("ref",this);
    this.events=new EventDispatcher();

    /**
     * hide the pop in. Note if you will not need to reuse the pop in later, you should use destroy
     */
    this.hide=function(){
        "use strict";

        Dom.html.removeClass("pop-in-open");
        Dom.html.removeClass("pop-in-scroll");
        if(Popin.saveScroll){
            Dom.body.scrollTop(Popin.saveScroll);
        }
        me.events.dispatchEvent(EVENT_POP_IN_HIDE,me);
    };
    /**
     * show the pop in
     */
    this.show=function(){
        "use strict";
        Dom.html.addClass("pop-in-open");
        Popin.saveScroll=Stage.scrollY;
        PopIn.resizeAll();
        me.events.dispatchEvent(EVENT_POP_IN_SHOW,me);
    };
    /**
     * remove from dom and destroy the object.
     */
    this.destroy=function(){
       "use strict";
       me.hide();
       me.events.addEventListener(EVENT_POP_IN_HIDE,function(){
           jq.remove();
           me.events.dispatchEvent(EVENT_POP_IN_DESTROY,me);
           me=null;
       });
    };

    /*
     * confirm yes
     */
    jq.find(PopIn.CTRL.BTN_YES).on("click",function(e){
        "use strict";
        e.preventDefault();
        me.hide();
        me.yesCall();
    });
};
/**
 * Dispatched when the popin is visible
 * @type {String}
 */
var EVENT_POP_IN_SHOW="event-pop-in-show";
/**
 * Dispatched when the popin is hidden
 * @type {String}
 */
var EVENT_POP_IN_HIDE="event-pop-in-hide";
/**
 * Dispatched just before the pop in was destroyed
 * @type {String}
 */
var EVENT_POP_IN_DESTROY="event-pop-in-destroy";

//-----------------statics----------------------------------

/**
 *
 * @param el
 * @return {PopIn}
 */
PopIn.getParent=function(el){
    "use strict";
    return new PopIn(el.closest(PopIn.CTRL.POP_IN));
};
/**
 * Create a new pop in form a dom element and returns it.
 * @param {jQuery} jqContent A jQuery dom element to inject into the popIn
 * @return {PopIn} The new PopIn instance (you will need to use the show method to display the object).
 */
PopIn.fromContent=function(jqContent){
    "use strict";
    var domPopIn=$("<div></div>");
    domPopIn.addClass("js-pop-in");
    domPopIn.append(jqContent);
    PopIn.getContainer();
    PopIn.container.empty();
    PopIn.container.append(domPopIn);
    var popIn=new PopIn(domPopIn);
    return popIn;
};

PopIn.confirm =  function (title, message,yesCallBack) {
    var conformContent = $(UserMessage.CTRL.USER_MESSAGE).html();
    var domPopIn=$("<div></div>");
    domPopIn.addClass("js-pop-in");

    domPopIn.css("min-height","125px");
    domPopIn.css("width","300px");
    domPopIn.append(conformContent);

    var messageContainer = domPopIn.find(PopIn.CTRL.MESSAGE);
    messageContainer.html(message);

    var titleContainer = domPopIn.find(PopIn.CTRL.TITLE);
    if(title) {
        titleContainer.html(title);
    }
    PopIn.getContainer();
    PopIn.container.empty();
    PopIn.container.append(domPopIn);
    var popIn=new PopIn(domPopIn);
    popIn.yesCall =yesCallBack;
    return popIn;
};


PopIn.getContainer=function(){
    "use strict";
    var p=$("#pop-in-container");
    PopIn.container=p;
    return p;
};
PopIn.container=PopIn.getContainer();


PopIn.resizeAll=function(){
    "use strict";
    var margin;
    if(Browser.isTouchDevice){
        margin=0;
    }else{
        margin=20;
    }
    PopIn.getContainer().css("height","auto");

    //the relationship popin...we will auto adjust height according the content & the screen height
    var relationshipContent=$(".js-pop-in.relationship>.content");
    var relationshipMenu=$(".js-pop-in.relationship>.menu");
    var relationship=$(".js-pop-in.relationship");
    //reset menu height to css default
    relationshipMenu.css("height","");
    relationshipMenu.removeClass("condensed");
    function isMenuTooTall(){
        if(relationshipMenu[0].scrollHeight>50 || relationshipContent.position().top > 50){
            return true
        }
        return false;
    }

    function isMenuTooLarge() {
        var width = 0;
        relationshipMenu.find("a").each(function() {
            var $this = $(this);
            width += $this.outerWidth();
        });

        if(width >= relationshipMenu.width() - 85 ) {
            return true;
        }

        return false;
    }

    if(relationshipContent.length > 0){
        //maybe the menu is on 2 lines :\

        if(isMenuTooTall() || isMenuTooLarge()){
            relationshipMenu.addClass("condensed");
        }
        //still so fat...
        if(isMenuTooTall()){
            relationshipMenu.css("height",relationshipContent.position().top);
        }
        var saveScroll=relationshipContent.scrollTop();
        relationshipContent.css("height","auto");
        relationship.css("height","auto");
        var pad=20; // the relationship content padding
        if(relationship.height()>Stage.height*(1/Stage.zoom)-margin+pad){
            relationshipContent.css("height",Stage.height*(1/Stage.zoom)-margin-relationshipMenu.height()-pad);
        }
        relationshipContent.scrollTop(saveScroll);
    }
    PopIn.container.css("left","0px");




    if(Nav.isResponsivePhone()){
        if(Popin.container.height()>Stage.height){
            //alert("pop in too big");

            Dom.html.addClass("pop-in-scroll"); // the body will scroll

        }
    }else{
        if(PopIn.container.height()>Stage.height*(1/Stage.zoom)-margin){
            PopIn.container.css("height",Stage.height*(1/Stage.zoom)-margin);
            PopIn.container.css("overflow","hidden");
        }
    }

    //center X & Y the whole stuff
    var left=Stage.width/2-PopIn.container.width()/2;
    var top=Stage.height/2-PopIn.container.height()/2;

    left=Math.max(0,left);
    top=Math.max(0,top);

    PopIn.container.css("left",left);
    TweenMax.to(PopIn.container,0.5,{css:{top:top}});

    $('.content.ml-gutter-demi').css({
        'max-height': $(window).height() - 70
    });
};
var Popin=PopIn;
PopIn.loadForm=function(p){
    if(p=="estara"){
        var el=$("[data-nav-ajax-stats='email-concierge']")
        Nav.clickLink(el);
    }
}

//-------------------------controls-----------------------------------

/**
 * Dom Selectors for popIn management in html markup
 * @type {Object}
 */
PopIn.CTRL={
    POP_IN:".js-pop-in",
    BTN_HIDE:"[data-pop-in-action='hide']",
    BTN_YES:"[data-pop-in-action='yes']",
    BTN_DESTROY:"[data-pop-in-action='destroy']",
    TITLE : ".modal-header h3",
    MESSAGE : ".modal-body p"
};


/**
 * Destroy pop in button
 */
Dom.body.on("click",PopIn.CTRL.POP_IN+" "+PopIn.CTRL.BTN_DESTROY,function(e){
    "use strict";
    e.preventDefault();
    var popIn=PopIn.getParent($(this));
    popIn.destroy();
});
/**
 * Destroy pop in button
 */
Dom.body.on("click",PopIn.CTRL.POP_IN+" "+PopIn.CTRL.BTN_HIDE,function(e){
    "use strict";
    e.preventDefault();
    var popIn=PopIn.getParent($(this));
    popIn.hide();
});
;
/**
 * This is the class manage site Fixed Footer
 *
 * @constructor
 */
var FixedFooter=function(){
    var me=this;
    var jq=Dom.body.find("[data-fixed-footer='true']");
    me.jq = jq;
    me.linkActiveClass = "active";
    me.activeWindowClass = null;

    /**
     *
     * @return {*}
     */
    this.buttons=function(){
        "use strict";
        return me.jq.find("[data-fixed-footer-action]");
    };

    this.open=function(){
        if(Dom.body.hasClass("footer-without-js")){
            //Anchor.
            pos=$(".fixed-footer").position().top;
            TweenLite.to(Dom.body, 1, {scrollTo:{y:pos}, ease:Power2.easeOut});
        }else{
            //close other possibles menus in the footer.
            FixedFooterSlides.closeAll();

            me.buttons().addClass("active");
            Dom.body.addClass("fixed-footer-open");
        }
    };

    this.close=function(){
        me.buttons().removeClass("active");
        Dom.body.removeClass("fixed-footer-open");
        $(".fixed-footer .contextual-content .js-slider").css("visibility","");
    };

    this.closeActive=function(){
        if( me.activeWindowClass ) {
            Dom.body.removeClass(me.activeWindowClass);
            jq.find( "." + me.linkActiveClass).removeClass( me.linkActiveClass);
        }
    };

    //initialize the user actions
    jq.on("click","[data-fixed-footer-action]",function(e){
        e.preventDefault();
        var el=$(this);
        var action=el.attr("data-fixed-footer-action");

        switch(action){
            case "open":
              me.open();
                break;

            case "close":
              me.close();
                break;
        }
    });

    jq.on("click",FixedFooter.CTRL.DATA_ACTION ,function(e){
        e.preventDefault();
        var elem = $(this);
        var className = elem.attr(FixedFooter.CTRL.DATA_ACTION_CLASS);
        if( className != me.activeWindowClass){
            me.closeActive();
        }

        me.activeWindowClass = className;
        if( Dom.body.hasClass(className) ) {
            Dom.body.removeClass(className);
            elem.removeClass(me.linkActiveClass)
        } else {
            Dom.body.addClass(className);
            elem.addClass(me.linkActiveClass)
        }
    });



    /*
     * Scroll event
     */

    $(function() {

        if (Stage.widthZoomed >= 940) {

            // On desktops, the footer is fixed on bottom of page until a certain
            // scroll level where it's static

            var footerHeight = 305;
            var fixedBarHeight = 30;
            var triggerScrollPosition = footerHeight - fixedBarHeight;

            Dom.body.removeClass('footer-without-js');
            Dom.body.removeClass('hide-bookmarks');

            var onScroll = function() {
                // If the current scroll state is low enough to display the footer,
                // we fix the barat a static position
                if (Stage.maxScrollY - Stage.scrollY <= triggerScrollPosition) {
                    Dom.body.removeClass('step1');
                    Dom.body.addClass('step2');
                } else {
                    Dom.body.removeClass('step2');
                    Dom.body.addClass('step1');
                }
            };

            // Register the callback with a delay for old IE
            if (Browser.isIE7 || Browser.isIE8) {
                PiagetCom.events.addDelayedEventListener(EVENT_SCROLL, 100, onScroll);
            } else {
                PiagetCom.events.addEventListener(EVENT_SCROLL, onScroll)
            }

        } else {

            // On mobiles, the footer is always fixed at the bottom of the page

            Dom.body.addClass('footer-without-js');
            Dom.body.removeClass('step1');
            Dom.body.removeClass('step2');

        }

    });

};

/**
 * If the screen is too small to display left an right menu, will hide the left one
 */
FixedFooter.resize=function(){
    "use strict";
    var left=$("[data-fixed-footer='true'] .ui-bar>.container>.left");
    var right=$("[data-fixed-footer='true'] .ui-bar>.container>.right");
    var c=$("[data-fixed-footer='true'] .ui-bar>.container");
    //show all by default
    left.css("display","block");
    var leftLinks=left.find(">span,>a");
    leftLinks.css("display","inline-block");
    if(left.width()+right.width() > c.width()){
        for(var i=0;i<leftLinks.length;i++){
            if(left.width() + right.width() > c.width()){
                $(leftLinks[i]).css("display","none"); //hide the next left one
            }else{
                return; //it's ok stop
            }
        }
        left.css("display","none");
    }
};

FixedFooter.CTRL = {
    DATA_ACTION : "[data-fixed-footer-action='true']",
    DATA_ACTION_CLASS : "data-fixed-footer-action-class"
};

/**
 *
 * @type {FixedFooter} Singleton fixed footer
 */
FixedFooter.current=null;

FixedFooter.init=function(){
    FixedFooter.current=new FixedFooter();
};


//--------------------------------------------
/**
 * This is the class for countries selectors at least...
 * @param jq
 * @return {*}
 * @constructor
 */
var FixedFooterSlides=function(jq){
    var me=this;
    this.jq=jq;

    //unique reference
    if(jq.data("fixedFooterSlides")){
        return jq.data("fixedFooterSlides")
    }
    jq.data("fixedFooterSlides",me);

    /**
     * id of the slide
     * @type {string}
     */
    this.id=jq.attr(FixedFooterSlides.CTRL.SLIDE_IDENTIFIER);

    this.open=function(){
        //close all before
        FixedFooter.current.close();
        FixedFooterSlides.closeAll();
        
        me.jq.addClass("open");
        me.jq.css('top', 0);
        
        $(FixedFooterSlides.CTRL.SLIDE).parents(".mask").addClass("open");
        me.buttons().addClass("active");
        //hide the product slider because of z-indexes stuff
        if(!Dom.body.hasClass("footer-without-js")){
            $(".fixed-footer .contextual-content .js-slider").css("visibility","hidden");
        }
        Dom.body.addClass("fixed-footer-open");
    }
    this.close=function(){
        me.jq.removeClass("open");
        me.jq.css('top', me.jq.parent().height());
        
        $(FixedFooterSlides.CTRL.SLIDE).parents(".mask").removeClass("open");
        me.buttons().removeClass("active");
        $(".fixed-footer .contextual-content .js-slider").css("visibility","");
    }
    this.isOpen = function(){
        return me.jq.hasClass("open");
    }
    this.buttons=function(){
        return Dom.body.find("["+FixedFooterSlides.CTRL.BUTTON_IDENTIFIER+"='"+me.id+"']");
    }
    this.toggle = function(){
        if(me.isOpen()) {
            me.close();
        } else {
            me.open();
        }
    }

};

FixedFooterSlides.closeAll=function(forceClose){
    if(forceClose){
        $(".keep-open-on-scroll").removeClass("keep-open-on-scroll");
    }
    $(FixedFooterSlides.CTRL.SLIDE).removeClass("open");

    var mask = $(FixedFooterSlides.CTRL.SLIDE).parents(".mask");
    mask.removeClass("open");
    $("["+FixedFooterSlides.CTRL.BUTTON_IDENTIFIER+"]").removeClass("active");

    // remove properties
    $('.mask .countries-footer').css('top', mask.height());

    FixedFooter.current.close();
    FixedFooter.current.closeActive();
};

FixedFooterSlides.CTRL = {
    SLIDE : ".js-slide",
    BUTTON_IDENTIFIER:"data-js-slide-toggler",
    SLIDE_IDENTIFIER:"data-js-slide",
    SEOHOME_SHOWER:".interaction-link"
};

Dom.body.on("click","["+FixedFooterSlides.CTRL.BUTTON_IDENTIFIER+"]",function(e){
    e.preventDefault();
    var slideId=$(this).attr(FixedFooterSlides.CTRL.BUTTON_IDENTIFIER);
    var slide=new FixedFooterSlides($("["+FixedFooterSlides.CTRL.SLIDE_IDENTIFIER+"='"+slideId+"']"));
    slide.toggle();
});

Dom.body.on("click","[data-footer-action='close']",function(e){
    e.preventDefault();
    FixedFooterSlides.closeAll(true);
});

Dom.body.on("click",FixedFooterSlides.CTRL.SEOHOME_SHOWER,function(e){
    e.preventDefault();
    var el = $(this);
    if (el.hasClass("isHidden")) {
        el.removeClass("isHidden");
        TweenLite.to($(".footer-seo-container"), 1.5, {height:200, onComplete:function(){
                var bottom = $(document).height()-$(window).height();
                TweenLite.to(window, 1, {scrollTo:{y: bottom}});
            }
        });

    } else {
        el.addClass("isHidden");
        TweenLite.to($(".footer-seo-container"), 1.5, {height:0});
    }
});
;
/**
 * Manage all kind of Slide Show
 *
 * Like home page main slide show
 *
 * @param dom
 * @returns {*}
 * @constructor
 */
var SlideShow=function(dom){
    var me=this;
    var dom=$(dom);
    if(dom.data("slide-show-ref")){
        return dom.data("slide-show-ref");
    }
    dom.data("slide-show-ref",me);
    /**
     * {TimelineMax}
     */
    var tl;
    var slides=dom.find(SlideShow.CTRL.SLIDE);
    var id=dom.attr("data-slide-show");
    var controls;
    var duration=dom.attr("data-duration");
    var autostart=dom.attr("data-autostart");
    if(autostart=="false"){
        autostart=false;
    }else{
        autostart=true;
    }

    var arrowVisible = dom.attr("data-arrow");
    var arrows = null;
    if( arrowVisible ){
        arrows = dom.find(SlideShow.CTRL.SLIDE_ARROW);
    }

    /**
     *
     * @type {jQuery[]}
     */
    var btns=[];
    var btnsIcon=[];
    //look for a controls object declared in dom
    if($("[data-slide-show-controls='"+id+"']").length>0){
        //controls will be visible
        controls=$("[data-slide-show-controls='"+id+"']");
    } else {
        //controls will exists but not be shown
        controls=$("<div class='controls'></div>");
    }
    /**
     * put a class active on the button
     * @param btn
     */
    var setActive=function(btn){
        for(var i=0;i<btnsIcon.length;i++){
            btnsIcon[i].removeClass("active");
        }
        $(btn).find("i").addClass("active");
        if($(btn).data("slide")){
            $(btn).data("slide").css("z-index",nextZindex());
            if( arrowVisible ){
                arrows.css("z-index",nextZindex());
            }
            for(var i=0;i<btns.length;i++){
                resizeSlide($(btns[i]).data("slide"));
            }
        }
    };

    var resize=function(){
        //console.log("resize "+Math.random())
        for(var i=0;i<slides.length;i++){
            resizeSlide($(slides[i]));
        }
    };

    /**
     * The slide height will be equal to the closest parent element height.
     * @param slide jqDom object related to the slide
     */
    var resizeSlide=function(slide){
        var h=0;
        var el=slide;
        var limit=0;
        while(h<=0 && limit++<20){
            el=el.parent();
            h=el.height();
        }
        if(h==0){
            return;
        }
        slide.height(h+"px");
        var img= slide.find("img");

        //TweenMax.delayedCall(1,
            //function(img,slide,h){

                img.css("margin-top","1px");//just a little trick to force refresh on ipad
                if(img.height()>0){
                    slide.css("visibility","visible");
                    if(false && Browser.isTouchDevice){
                        img.css("margin-top","0px");
                    }else{
                        img.css("margin-top",String(h/2-img.height()/2)+"px");
                    }
                }
            //},
            //[img,slide,h]
        //)
    }
    /**
     *
     * @type {Number} zindex increase for each slide
     */
    var currentZindex=0;
    /**
     *
     * @return {Number} increase zIndex and returns it
     */
    var nextZindex=function(){
        currentZindex++;
        return currentZindex;
    };
    /**
     * Build the timeline
     */
    var init=function(){
        tl = new TimelineMax({repeat:-1});
        /**
         * the slide
         */
        var jqSlide;
        /**
         * the button related to the slide
         */
        var point;
        /**
         * label in the timeline to the current slade
         */
        var label;

        //before starting....all slides visible and z-index reversed
        for(var i=slides.length-1;i>=0;i--){
            jqSlide=$(slides[i]);
            jqSlide.css("opacity",1);
            jqSlide.css("z-index",nextZindex());
        }

        btns=[];
        btnsIcon=[];

        // clean fiters
        if($.browser.msie && $.browser.version < 9){
            for(var filterPos=0;filterPos<slides.length;filterPos++){
                var filterSlide=$(slides[filterPos]);
                if (filterSlide.find(".carousel-caption:first-child").css("filter") == "progid:DXImageTransform.Microsoft.gradient(startColorstr=#BF000000, endColorstr=#BF000000)") {
                    filterSlide.css("filter", "progid:DXImageTransform.Microsoft.gradient(startColorstr=#BF000000, endColorstr=#BF000000)");
                } else {
                    filterSlide.css("filter", "progid:DXImageTransform.Microsoft.gradient(startColorstr=#BF000000, endColorstr=#BF000000)");
                }
            }
        }

        // init arrows
        if( arrowVisible ){
            dom.mouseenter(function() {
                arrows.css("z-index",nextZindex());
                TweenLite.to(arrows, 0.4, {
                    css:MsIe.ieOpacity(1)
                });
            });

            dom.mouseleave(function() {
                TweenLite.to(arrows, 0.4, {
                    css:MsIe.ieOpacity(0)
                });
            });

            arrows.on("click",function(e){
                e.preventDefault();
                var item = $(this);
                var slide = null;
                var max  = 0;
                var slideIndex = 0;

                slides.each(function() {
                    var a =  $(this).css('z-index');
                    if(parseInt(a) > parseInt(max)){
                        max = a;
                        slide = $(this);
                    }
                });

                if(item.hasClass("js-slides-previous")) {
                    if(slide.prev(SlideShow.CTRL.SLIDE).length < 1) {
                        slide = slide.parent(SlideShow.CTRL.MAIN).find(SlideShow.CTRL.SLIDE + " :last" );
                    } else {
                        slide = slide.prev(SlideShow.CTRL.SLIDE);
                    }
                } else {
                    if(slide.next(SlideShow.CTRL.SLIDE).length < 1) {
                        slide = slide.parent(SlideShow.CTRL.MAIN).find(SlideShow.CTRL.SLIDE + " :first" );
                    } else {
                        slide = slide.next(SlideShow.CTRL.SLIDE);
                    }
                }

                if(slide) {
                    var b = controls.find("["+SlideShow.CTRL.DATA_INDEX+"="+slide.attr(SlideShow.CTRL.DATA_INDEX)+"]");
                    tl.pause(b.data("label"));
                    //tl.stop();
                    setActive(b);

                    TweenLite.to(slide, 0, {
                        css:MsIe.ieOpacity(0)
                    });

                    //slide.css("z-index",nextZindex());
                    arrows.css("z-index",nextZindex());
                    TweenLite.to(slide, 1, {
                        css:MsIe.ieOpacity(1)
                    });
                }
            });

            arrows.on("mouseout",function(){
                tl.play();
            });
        }

        //create the timeline
        for(var i=0;i<slides.length;i++){
            jqSlide=$(slides[i]);
            point=$("<div class='point'><i class='icon-piaget-slide-show-point'></i></div>");

            jqSlide.attr(SlideShow.CTRL.DATA_INDEX, i);
            point.attr(SlideShow.CTRL.DATA_INDEX, i);

            btns.push(point);
            btnsIcon.push(point.find("i"));
            label="slide"+i;
            if(slides.length > 1){
                controls.append(point);
            } else {
                controls.addClass('hidden');
            }
            point.data("label",label);
            point.data("slide",jqSlide);

            //loading img...
            var img=jqSlide.find("img");
            img.data("slide",jqSlide);
            img.on("load",function(){
                resizeSlide($(this).data("slide"));
            })

            //ui listeners
            point.on("mouseover",function(){
                tl.pause($(this).data("label"));
                setActive($(this))
            })
            point.on("mouseout",function(){
                tl.play();
            })

            //hide the slide
             tl.append(
                 TweenLite.to(jqSlide, 0, {
                     delay:duration,
                     css:MsIe.ieOpacity(0)
                 })
             );
            //at this point set the button as "active"
            tl.addCallback(
                function(btn,slide){
                    setActive(btn);
                },
                tl.duration()+0.1,
                [point,jqSlide]
            );
            //show the slide
            tl.append(
                TweenLite.to(jqSlide, 1, {
                    css:MsIe.ieOpacity(1)
                })
            );

            tl.addCallback(
                function(btn,slide){

                    if($.browser.msie && $.browser.version < 9){
                        if (slide.find(".carousel-caption").css("filter") == "progid:DXImageTransform.Microsoft.gradient(startColorstr=#BF000000, endColorstr=#BF000000)") {
                            slide.css("filter", "progid:DXImageTransform.Microsoft.gradient(startColorstr=#BF000000, endColorstr=#BF000000)");
                        } else {
                            slide.css("filter", "");
                        }

                    }
                },
                tl.duration(),
                [point,jqSlide]
            );

            //here the slide is visible
            tl.addLabel(label,tl.duration());
        }


    };

    /**
     * This function is to put the color effect on the  rollover on the slideshow
     * @param slideshow
     */
    var initRolloverEffect = function(slideshow) {
        var effectParent = $(slideshow);
        effectParent.find(".js-slide").each(function() {
            var effectChild = $(this);

            effectChild.hover(function() {
                var description = $(this).find("p.description");
                var color = description.find("span[data-color-rollover]").attr("data-color-rollover");

                if (color) {
                    description.css('color', color);
                    description.find("a").css('color', color);
                } else {
                    description.css('color', '#fafafa');
                    description.find("a").css('color', '#fafafa');
                }
            }, function() {
                var description = $(this).find("p.description");

                description.css('color', '#86868a');
                description.find("a").css('color', '#86868a');
            });
        });
    };

    init();
    initRolloverEffect(dom);
    //automatically launch the first one
    tl.seek(btns[0].data("label"));
    if(!autostart){
       tl.stop();
    }
    setActive(btns[0]);
    PiagetCom.events.addDelayedEventListener(EVENT_RESIZE,100,function(){

        resize();

    });
    this.uid=Math.random();
    if(slides.length>1){
        PiagetCom.events.addDelayedEventListener(EVENT_SCROLL,1000,
            function(){
                //on scroll start or stop the diaporama
                if(Stage.isVisible(dom)){
                    tl.play();
                }else{
                    tl.stop();
                }
            }
        );
    }
};

SlideShow.fromDom=function(dom){
    var dom=$(dom);
    var slides = dom.find(SlideShow.CTRL.MAIN);
    for(var i=0;i<slides.length;i++){
        new SlideShow(slides[i]);
    }
};

SlideShow.CTRL = {
    "MAIN":".js-slide-show",
    "SLIDE":".js-slide",
    "SLIDE_ARROW":".js-slide-arrow",
    "DATA_ARROW":"data-arrow",
    "DATA_INDEX":"data-index"
};
;
/**
 * Used for catalogs in html version
 *
 * @param jq
 * @constructor
 */
var PagesFlip=function(jq){

    var jq=$(jq);
    jq.removeClass("bg-loading");
    var speed=0.5;
    var persp=2000;

    var tl = new TimelineMax();



    if( Browser.transforms3d){
        var pages=jq.find(".pages .page-flip .left,.pages .page-flip .right");
        var p;
        //init the right pages
        for(var i=0;i<pages.length;i++){
            p=$(pages[i]);
            p.css("display","block");
            if(p.hasClass("left")){
                TweenMax.to(p, 0, {rotationY:90, transformOrigin:"right 50%",transformPerspective:persp});
            }
        }

        for(var i=0;i<pages.length;i++){
            p=$(pages[i]);
            if(p.hasClass("left")){
                tl.addLabel("page"+i, tl.duration());

                tl.to(p, speed, {rotationY:0, transformOrigin:"right 50%",
                    onStartParams:[p],
                    onCompleteParams:[p],
                    onReverseCompleteParams:[p],
                    onStart:function(p){
                    },
                    onComplete:function(p){
                        tl.stop();
                    },
                    onReverseComplete :function(p){
                    },
                    ease:"Linear.easeNone"});



            }else{

                //find the related button to reach this page
                var pageNum=p.closest("[data-is-page-num]");
                pageNum=pageNum.attr("data-is-page-num");
                var btn=$("[data-page-num='"+pageNum+"']");
                btn.data("timelineposition",tl.duration());
                btn.on("click",function(){
                    "use strict";
                    tl.tweenTo($(this).data("timelineposition"));
                });

                tl.to(p, 0, {transformPerspective:-persp});
                tl.to(p, speed, {rotationY:90, transformOrigin:"left 50%",
                    onStartParams:[p],
                    onCompleteParams:[p],
                    onReverseCompleteParams:[p],
                    onStart:function(p){
                    },
                    onComplete:function(p){
                    },
                    onReverseComplete :function(p){
                        tl.stop();
                    },
                    ease:"Linear.easeNone"
                });


            }

        }
    }else{
        var pages=jq.find(".pages .page-flip");
        var p;
        var zindex=50;
        for(var i=0;i<pages.length;i++){
            p=$(pages[i]);
            p.find(".left,.right").css("display","block");
            p.css("z-index",zindex++);
            if(i>0){
            tl.to(p, 0, {opacity:0});
            }
        }
        for(var i=0;i<pages.length;i++){
            p=$(pages[i]);

            tl.to(p, speed, {
                    opacity:1,
                    onStartParams:[p],
                    onCompleteParams:[p],
                    onReverseCompleteParams:[p],
                    onStart:function(p){
                    },
                    onComplete:function(p){
                        tl.stop();
                    },
                    onReverseComplete :function(p){
                        "use strict";
                        tl.stop();
                    },
                    ease:"Linear.easeNone"
            });

            //find the related button to reach this page
            var pageNum;
            pageNum=p.attr("data-is-page-num");
            var btn=$("[data-page-num='"+pageNum+"']");
            btn.data("timelineposition",tl.duration());
            btn.on("click",function(){
                "use strict";

                tl.tweenTo($(this).data("timelineposition"));
            });

            }


    }
    tl.stop();

    jq.find(".pages .left").on("click",function(){
        catalogPrev();
    })
    jq.find(".pages .right").on("click",function(){
        catalogNext();
    })
    jq.find(".pages").on("swipeleft",function(){
        catalogNext();
    })
    jq.find(".pages").on("swiperight",function(){
        catalogPrev();
    })
    jq.on('movestart', function(e) {
        // If the movestart is heading off in an upwards or downwards
        // direction, prevent it so that the browser scrolls normally.
        if ((e.distX > e.distY && e.distX < -e.distY) ||
            (e.distX < e.distY && e.distX > -e.distY)) {
            e.preventDefault();
        }
    });
    if(Browser.isTouchDevice){
        $(".js-pages-flip-controls").on("swipeleft swiperight",function(e){
            if(Math.abs(e.velocityX)>0.1){
            var x=Utils.numberCss($(this).css("margin-left"));
            x+=e.distX*e.velocityX;
            TweenMax.to($(this),0.5,{"margin-left":x});
            }
        })
        $(".js-pages-flip-controls")
            .bind('move', function(e) {
                // move .mydiv horizontally
                var x=Utils.numberCss($(this).css("margin-left"));
                x+= e.deltaX;
                $(this).css({ "margin-left": x });
            })
            .bind('moveend', function() {
                // move is complete!
        });
    }

    $(".js-pages-flip-controls").on("mouseup",function(e){
        if(Stage.width*(1/Stage.zoom)<$(this).width()){
        var x=Utils.numberCss($(this).css("margin-left"));
        if(e.clientX>Stage.width*(1/Stage.zoom)/2){
            x-=Stage.width*(1/Stage.zoom)/2;
        }else{
            x+=Stage.width*(1/Stage.zoom)/2;
        }
        TweenMax.to($(this)[0],0.5,{"marginLeft":x});
        }
    })

    function catalogPrev(){
        tl.reverse();
    }
    function catalogNext(){
        tl.play();
    }
    //PagesFlip.resize();

    PiagetCom.events.addEventListener(EVENT_RESIZE,function(){
        if(Stage.bodyWidth<1000){
            jq.find(" .pages").height(Stage.bodyWidth/2);
            //console.log("yop "+Stage.bodyWidth);
        }else{
            jq.find(" .pages").css("height","");
        }
    })

}
;
/**
 * A Slider slide an element...goood for it, well:
 * The slide move by span values, so it is related to bootstrap CSS.
 * It also needs the GridSystem Class to calculate grid values.
 *
 * Markup :
 * Use The .js-slider class on the element you need to slide.
 * on this element put a data-move-by-span="4" attribute to move the slider 4 spans by 4 spans.
 * In it you will use <a href="#move-left"> and <a href="#move-right">
 * The element that slide for true is marked by a  css class .js-slider-move.
 * This element need to have a defined width...it's up to you to do it.
 *
 * <div class="js-slider" data-move-by-span="4">
 *     <div class="container for exemple">
 *      <div class="js-slider-move" style="width:20000px;">
 *          <div class="row">
 *              <div class="span2">bla bla</div>
 *              <div class="span2">bla bla</div>
 *              <div class="span2">bla bla</div>
 *              <div class="span2">bla bla</div>
 *              <div class="span2">bla bla</div>
 *          </div>
 *      </div>
 *     </div>
 *     <a data-move="left" href="#">left</a>
 *     <a data-move="right" href="#">right</right>
 * </div>
 *
 *
 * @param jq
 * @return {*}
 * @constructor
 */
var Slider=function(jq){
    "use strict";
    var me = this;
    jq = this.jq = $(jq);

    this.toMove=jq.find(".js-slider-move");
    this.container=me.toMove.parent();

    this.leftBtn=function(){
        return $(jq.find("[data-move='left']"));
    };

    this.rightBtn=function(){
        return $(jq.find("[data-move='right']"));
    };

    this.rightBtn().css("z-index",3400);
    this.leftBtn().css("z-index",3400);

    var moveSpan=jq.attr("data-move-by-span");
    var moveMinSpan=jq.attr("data-move-min-span");
    if(!moveMinSpan){
        moveMinSpan=moveSpan;
    }

    var limitLeft=function(){
        return me.container.width() - me.toMove.width() + GridSystem.gutter+5;
    };

    /**
     * Will be true if the content is to small to be slided
     * @returns {boolean}
     */
    this.isTooSmall=function(){
        return me.toMove.width() < me.container.width();
    };

    this.possiblePos=function(pos,moveUnit){
        var tooSmall=false;
        if(me.isTooSmall()){
            tooSmall=true;
            moveSpan=1;
        }

        var unit;
        if(!tooSmall && moveUnit){
           unit=moveUnit;
        }else{
           unit=me.moveValue();
        }

        var rounded= Math.round(pos/unit)*unit;
        if(rounded>0 && !tooSmall){
            return 0;
        }else if(rounded<limitLeft() && !tooSmall){
            return limitLeft();
        }
        return rounded;
    };
    this.moveValue=function(){
        return moveSpan*(GridSystem.column+GridSystem.gutter);
    };
    this.moveMinValue=function(){
        return moveMinSpan*(GridSystem.column+GridSystem.gutter);
    };
    this.getPos=function(){
        return Utils.numberCss(me.toMove.css("margin-left"));
    };
    this.moveLeft=function(){
        var to=me.possiblePos(me.getPos()+me.moveValue());
        TweenMax.to(me.toMove,0.5,{css:{"marginLeft":to},onComplete:function(){
            me.refreshButtons();
        }});
    };
    this.moveRight=function(){
        var to=me.possiblePos(me.getPos()-me.moveValue());
        TweenMax.to(me.toMove,0.5,{css:{"marginLeft":to},onComplete:function(){
            me.refreshButtons();
        }});
    };
    /**
     * adjust position to fit the grid.
     */
    this.resize=function(){
        me.toMove.css("margin-left",me.possiblePos(me.getPos(),me.moveMinValue()));
        me.refreshButtons();
    };
    /**
     * hide or show the buttons according the possibles movements
     */
    this.refreshButtons=function(){
        if(me.getPos()=="NaN"){
            me.leftBtn().css("display","none");
            me.rightBtn().css("display","none");
            return;
        }


        if(me.getPos()>=0){
            me.leftBtn().css("display","none");
        }else{
            me.leftBtn().css("display","block");
        }
        if(me.getPos()<=limitLeft()){
            me.rightBtn().css("display","none");
        }else{
            me.rightBtn().css("display","block");
        }
    };
    /**
     * According the current url will search if there is a corresponding link in the slider.
     * If the current page is in the slider, the slider will be positioned to show this one at the beginning of the list.
     */
    this.initToGoodPosition=function(){
        if(me.isTooSmall()){
           return;
        }

        var currentUrl=decodeURIComponent(document.location.pathname);
        var href=me.container.find("a[href='"+currentUrl+"']");
        if(href.length==1){
            var item=href.closest(".js-product-item,.js-data-nav-link-inside");
            if(item.length==1){
                var to=-item.position().left;
                me.toMove.css("margin-left",me.possiblePos(to,me.moveMinValue()));
                me.refreshButtons();

            }
        }
    };
};

Slider.resizeAll=function(){
    "use strict";
    if(Slider.resizeAllDelay){
        Slider.resizeAllDelay.kill();
    }

    var all=Dom.body.find(".js-slider");
    for(var i=0;i<all.length;i++){
        new Slider(all[i]).resize();
    }
};
/**
 *
 * @param {jQuery} elem The dom object where to find sliders
 */
Slider.initAfterAjaxAll=function(elem){
    "use strict";
        if(elem){
            var all=elem.find(".js-slider");
            for(var i=0;i<all.length;i++){
                new Slider(all[i]).initToGoodPosition();
            }
        }

};

/**
 * Timer to prevent unnecessary resize in the same time
 */
Slider.resizeAllDelay=null;
/**
 *
 * @param el
 * @return {Slider}
 */
Slider.getParent=function(el){
    "use strict";
    return new Slider($(el).closest(".js-slider"));
};
Dom.body.on("click",".js-slider [data-move='left']",function(e){
    "use strict";
    e.preventDefault();
    Slider.getParent($(this)).moveLeft();
});
Dom.body.on("click",".js-slider [data-move='right']",function(e){
    "use strict";
    e.preventDefault();
    Slider.getParent($(this)).moveRight();
});;
/**
 * GridSystem static object calculate gutters and columns values even on responsive bootstrap.
 *
 * @type {Object}
 */
var GridSystem={};
GridSystem.column=0;
GridSystem.gutter=0;
GridSystem.isMobile=false;

GridSystem.reset=function(){
    "use strict";
    if(Stage.width>768){
        GridSystem.isMobile=false;
    }else{
        GridSystem.isMobile=true;
    }
    var span1=$("<div class='span1'>test</div>");
    Dom.body.append(span1);
    GridSystem.column=span1.width();
    GridSystem.gutter=Utils.numberCss(span1.css("margin-left"));
    if(GridSystem.gutter==0){ //rtl
        GridSystem.gutter=Utils.numberCss(span1.css("margin-right"));
    }
    span1.remove();
    span1=null;
}

/**
 * A containfull object is like a .container class in bootstrap except that it fills the entire with available on the parent.
 * usage :
 * <div class="container js-container-full">
 * @param jq
 * @return {*}
 * @constructor
 */

var ContainerFull=function(jq){

    var me=this;
    var jq=this.jq=$(jq);
    if(jq.data("inst")){
        return jq.data("inst");
    }
    jq.data("inst",me);

    this.spanBy=(jq.attr("data-span-by"))*1;


    this.parentWidth=function(){
        "use strict";
        var w=0;
        var el=jq;
        while(w<=0){
            if(!el || el.length==0){
                break;
            }
            el=el.parent();
            w=el.width();
        }
        return w;
    }
    this.resize=function(){
        "use strict";

        var maxW=me.parentWidth();
        var unit=me.spanBy*(GridSystem.column+GridSystem.gutter);

        var spanedWidth=Math.floor(maxW/unit)*unit-GridSystem.gutter;
        //tablet size = 2 columns less
        if(GridSystem.column<60 && jq.closest(".fixed-footer").length>0){
            spanedWidth-=(GridSystem.column+GridSystem.gutter)*2;
        }
        jq.width(spanedWidth);
    }
}
ContainerFull.initAll=function(){
    "use strict";
    var els=Dom.body.find(".js-container-full");
    for(var i=0;i<els.length;i++){
        ContainerFull.all.push(new ContainerFull(els[i]));
    }
}
/**
 *
 * @type {ContainerFull[]}
 */
ContainerFull.all=[];
ContainerFull.resizeAll=function(){
    "use strict";
    for(var i=0;i<ContainerFull.all.length;i++){
        ContainerFull.all[i].resize();
    }
}


/**
 * A ContainerSpansAuto object is marked by a css class js-content-span-auto-width.
 * in it it should be a row and then a list of span.
 * The dom element will have a width that allows to display all the spans in one line.
 * @param jq
 * @return {*}
 * @constructor
 */
var ContainerSpansAuto=function(jq){
    "use strict";
    var me=this;
    var jq=this.jq=$(jq);
    if(jq.data("inst")){
        return jq.data("inst");
    }
    jq.data("inst",me);

    this.resize=function(){
        /*if(Browser.isMobile){
            jq.css("width","auto");
            return;
        }*/
        var w=0;
        var els=jq.find(".row>[class*='span']");

        var unit=$(els[0]).width()+GridSystem.gutter;
        jq.width(unit*els.length);

        if (jq.find("div.row[data-span-by]").length > 0) {
            var c = $(jq.find("div.row[data-span-by]"));
            if (c.find(".product-item").length >= 3) {
                c.find(".product-item:first-child").find(".details [class*='span']").addClass("first-item-slider");
                c.find(".product-item:last-child").find(".details [class*='span']").addClass("last-item-slider");
            }
        }

        var el;
        /*
        for(var i=0;i<els.length;i++){
            el=$(els[i]);
            //w+=el.width()+Utils.numberCss(el.css("margin-left"));
            var ww=Math.round(el.width()/10)*10;
            w+=ww+GridSystem.gutter;
        }
        jq.width(w);
        */
    }
    PiagetCom.events.addEventListener(EVENT_RESIZE,function(){
        me.resize();
    })

}
ContainerSpansAuto.initAll=function(){
    "use strict";
    ContainerSpansAuto.all=[];
    var els=Dom.body.find(".js-content-cols-auto-width");
    var el;
    for(var i=0;i<els.length;i++){
        el=new ContainerSpansAuto(els[i]);
        ContainerSpansAuto.all.push(el);
    }
}

/**
 *
 * @type {ContainerSpansAuto[]}
 */
ContainerSpansAuto.all=[];




;
/**
 * This is used to display the hover information in the following parts :
 * - 'Related pieces' tab on Watches
 * - 'Also in the collection' section on product pages
 * - 'Perfectly fit' section on product pages
 */

var ProductTileHover = function() {
    "use strict";

    function display() {
        var container_width = $(this).parents('.slider-container').width();
        var element_position = $(this).position().left;
        var element_size = $(this).width();

        $(this).toggleClass('slider-last-visible', container_width < (element_position + element_size));

        var text = $(this).find('.js-text-inside').hide();
        setTimeout(function() {
            text.show();
        }, 400);
        // if you change the timeout, also check the transition delay in products-list.less
    }

    function initAll() {
        $('body').on('mouseenter', '.js-product-tile', display);
    }

    return {
        initAll: initAll
    }
}();
;
/**
 * Represents a little product in the footer.
 *
 * Roll over interaction need to be managed via javascript.
 *
 * -------------------------------------------------------------------
 * WARNING, whenever possible, ProductTileHover should be used instead
 * of this implementation which has multiple bug and is only kept so
 * that some legacy parts continues to work !
 * -------------------------------------------------------------------
 *
 * @param jq
 * @return {*}
 * @constructor
 */

var ProductItemFooter = function (jq, forcedInitial, forcedSpan, forcedLeft) {
    "use strict";
    var me = this;
    var jq = this.jq = $(jq);

    if (jq.data("inst")) {
        return jq.data("inst");
    }

    jq.data("inst", me);

    this.img = jq.find("img");
    this.details = jq.find(".details");
    this.text = jq.find(".js-text-inside");


    this.img.on("mouseover", function () {
        me.jq.css("position", "relative");
        me.jq.css("z-index", 2990);
        me.details.css("z-index", 2990);
        me.img.css("z-index", 2990);

        jq.addClass("mouseover");

        me.pos();

        if (me.details.length > 0) {
            TweenMax.to(me.details, 0, {
                css: me.pos1
            });

            TweenMax.to(me.details, 0.25,
                {
                    delay: 0,
                    css: me.pos2,

                    onComplete: function () {
                        TweenMax.to(me.details, 0.25, {
                            css: me.pos3
                        })
                    }
                }
            )
        }

        if (me.text.length > 0) {
            TweenMax.to(me.text, 0, {css: MsIe.ieOpacity(0)});
            TweenMax.fromTo(me.text, 0.25,
                {
                    css: MsIe.ieOpacity(0)
                },
                {
                    delay: 0.75,
                    css: MsIe.ieOpacity(1)
                }
            )
        }
    });

    this.img.on("mouseout", function () {
        jq.removeClass("mouseover");
        me.jq.css("z-index", 2500);
        me.details.css("z-index", 2500);
        me.img.css("z-index", 2500);
    });


    this.pos1 = MsIe.ieOpacity(0);
    this.pos2 = MsIe.ieOpacity(1);
    this.pos3 = {};


    this.pos = function () {

        var m = 5;
        var position = me.img.offset().left + (GridSystem.column * 5 + GridSystem.gutter * 5);

        if (forcedInitial) {
            me.pos1.width = forcedInitial;
            me.pos2.width = forcedInitial + GridSystem.gutter;
        } else {
            me.pos1.width = GridSystem.column * 2;
            me.pos2.width = GridSystem.column * 2 + GridSystem.gutter;
        }

        me.pos1.left = GridSystem.gutter + m * 3;
        me.pos1.top = GridSystem.gutter + m * 3;
        me.pos1.bottom = GridSystem.gutter + m * 3;

        me.pos2.left = GridSystem.gutter - m * 2;
        me.pos2.top = GridSystem.gutter / 2;
        me.pos2.bottom = GridSystem.gutter / 2;

        var detailCol = 2;
        var detailWidth = 4;
        var textLeft = 1.5;
        var lessPlace = 0;

        if (GridSystem.isMobile) {
            detailCol = 4;
            detailWidth = 6;
            textLeft = 2;
            lessPlace = 32;//reduce the size on the left (no place for the mid product)
        }

        if (forcedSpan && forcedLeft) {
            detailWidth = forcedSpan;
            textLeft += forcedLeft;
        }

        if (position > Stage.widthZoomed - 200) {
            // Display the stuff on left side
            me.text.css("left", GridSystem.gutter * 1.5);
            me.pos3.left = -(GridSystem.column * detailCol + GridSystem.gutter * detailCol) - 20 + lessPlace;
        } else {
            me.text.css("left", GridSystem.column * 2 + GridSystem.gutter * textLeft);
            me.pos3.left = 20;
        }

        me.pos3.width = GridSystem.column * detailWidth + GridSystem.gutter * detailWidth - lessPlace;

    }

};

ProductItemFooter.initAll = function () {
    "use strict";
    var all = Dom.body.find(".js-product-item");

    for (var i = 0; i < all.length; i++) {
        var item = $(all[i]);

        if (typeof item.attr('data-initial') != 'undefined'
            && typeof item.attr('data-width') != 'undefined'
            && typeof item.attr('data-left') != 'undefined') {
            new ProductItemFooter(
                $(all[i]),
                parseInt(item.attr('data-initial')),
                parseInt(item.attr('data-width')),
                parseInt(item.attr('data-left'))
            );
        } else {
            new ProductItemFooter($(all[i]));
        }

    }
};;
/**
 * @param element
 * @return {*}
 * @constructor
 */
var FixedMagic = function (element) {
    element = $(element);

    return {

        _initialOffset: 0,

        initialize: function() {
            this._initialOffset = element.offset().top;
        },

        refresh: function() {
            if (Stage.scrollY >= this._initialOffset) {
                element.css({
                    position: 'fixed',
                    top: 0
                });
            } else {
                element.css({
                    position: 'relative'
                });
            }
        }

    };

};

/**
 * All instances
 * @type {FixedMagic[]}
 */
FixedMagic.all = [];

/**
 * Called on load
 * To call if the DOM change
 */
FixedMagic.initAll = function () {
    var all = Dom.body.find(".js-fixed-magic");
    var el;

    for (var i = 0; i < all.length; i++) {
        el = $(all[i]);
        if (!el.data("fixed")) {
            FixedMagic.all.push(new FixedMagic(el));
        }
    }

    FixedMagic.resizeAll();

    all.removeClass("hidden");
};

/**
 * Refresh all
 */
FixedMagic.refreshAll = function () {
    for (var i = 0; i < FixedMagic.all.length; i++) {
        FixedMagic.all[i].refresh();
    }
};

/**
 * To call after window resize
 */
FixedMagic.resizeAll = function () {
    for (var i = 0; i < FixedMagic.all.length; i++) {
        FixedMagic.all[i].initialize();
        FixedMagic.all[i].refresh();
    }
};

$(function() {

    /*
     * Register scroll listeners
     */
    if (Browser.isIE8 || Browser.isIE7 || Browser.isIE6) {
        PiagetCom.events.addDelayedEventListener(EVENT_SCROLL, 100, FixedMagic.refreshAll);
        PiagetCom.events.addDelayedEventListener(EVENT_RESIZE, 100, FixedMagic.resizeAll);
    } else {
        PiagetCom.events.addEventListener(EVENT_SCROLL, FixedMagic.refreshAll);
        PiagetCom.events.addEventListener(EVENT_RESIZE, FixedMagic.resizeAll);
    }

});
;
/**
 *
 * To do smooth anchors...
 *
 * <a href="#" data-anchor-target="toto">MyAnchor button</a>
 *
 * <div data-anchor="toto">
 *     MyAnchor content target
 * </div>
 *
 * @param jq
 * @return {*}
 * @constructor
 */
var Anchor = function (jq) {
    "use strict";
    var me = this;
    var jq = this.jq = $(jq);
    if (jq.data("fixed")) {
        return jq.data("fixed");
    }
    jq.data("fixed", me);
};
Anchor.TOP="top";

Anchor.getByName = function (name) {
    return Dom.body.find("[data-anchor='" + name + "']");
};

Dom.body.on("click", "[data-anchor-target]", function (e) {
    e.preventDefault();

    var id = $(this).data("anchor-target");
    var pos, scroller;

    if(id == Anchor.TOP){
        pos=0;
        scroller = window;
    } else {
        var target = Anchor.getByName(id);
        if(target && target.offset()){
            if(target.closest(".js-pop-in .content").length>0){
                scroller=target.closest(".js-pop-in .content");
                pos = scroller.scrollTop()-scroller.innerHeight()+target.position().top+$(window).height()*0.8;
            } else {
                pos = target.offset().top - 10 ;
                scroller = window;
            }
        } else {
            return;
        }
    }

    TweenLite.to(scroller, 1, {
        scrollTo:{y:pos},
        ease:Power2.easeOut,
        onComplete: function(){
            Gtm.send({
                event:'reachDataAnchor',
                anchor: id
            });
        }
    });
});
;
/**
 * Manage Video Player Flash or HTML5
 *
 * If browser does not support Flash, Load HTML5 Player
 *
 * @param jq
 * @constructor
 */
var VideoPlayer = function (jq) {
    var me = this;
    this.jq = me.jq = $(jq);

    //prevent multiple initialisations
    if(jq.hasClass("video-yet-done")){
        return;
    }

    jq.addClass("video-yet-done");

    jq.attr("id", "player-video-" + String(Math.floor(Math.random() * 10000)));

    this.videoUrl = '';
    this.posterUrl = '';

    this.HdOn = "HD is on";
    this.HdOff = "HD is off";

    this.timerFontSize = '12';
    this.srtFontColor = 'ffffff';
    this.timerFontColor = 'ffffff';

    this.videoLowDefUrl = '';
    this.timerFont = '_sans';
    this.menuHeight = '50';
    this.srtUrl = '';
    this.menuBgColor = '000000';
    this.menuBgAlpha = '0.7';
    this.autoplay = 'false';
    this.autoload = 'false';
    this.progressHeight = '3';
    this.posterScaling = 'false';
    this.progressBgColor = '333333';
    this.volumeBackgroundColor = '999999';
    this.videoScaling = 'true';
    this.videoCrop = 'false';
    this.progressLoadingColor = 'ffffff';
    this.posterCrop = 'true';
    this.progressLoadingAlpha = '0.5';
    this.volumeProgressColor = 'ffffff';
    this.srtFont = '_sans';
    this.progressColor = 'ffffff';
    this.srtFontSize = '20';
    this.loop = 'false';
    this.width = '100%';
    this.height = '100%';
    /**
     * parms du flash
     */
    this.params = {
        bgcolor:"#000000",
        menu:"false",
        wmode:"opaque",
        allowfullscreen:"true",
        AllowScriptAccess:"always"
    };

    /**
     * retourne l'objet des flash vars
     */
    this.getFlashVars = function () {
        return {
            timerFontSize:me.timerFontSize,
            srtFontColor:me.srtFontColor,
            timerFontColor:me.timerFontColor,
            videoUrl:me.videoUrl,
            videoLowDefUrl:me.videoLowDefUrl,
            timerFont:me.timerFont,
            posterUrl:me.posterUrl,
            menuHeight:me.menuHeight,
            srtUrl:me.srtUrl,
            menuBgColor:me.menuBgColor,
            menuBgAlpha:me.menuBgAlpha,
            autoplay:me.autoplay,
            autoload:me.autoload,
            progressHeight:me.progressHeight,
            posterScaling:me.posterScaling,
            progressBgColor:me.progressBgColor,
            volumeBackgroundColor:me.volumeBackgroundColor,
            videoScaling:me.videoScaling,
            videoCrop:me.videoCrop,
            progressLoadingColor:me.progressLoadingColor,
            posterCrop:me.posterCrop,
            progressLoadingAlpha:me.progressLoadingAlpha,
            volumeProgressColor:me.volumeProgressColor,
            srtFont:me.srtFont,
            progressColor:me.progressColor,
            srtFontSize:me.srtFontSize,
            HdOn:me.HdOn,
            HdOff:me.HdOff,
            loop:me.loop
        };
    };

    /**
     * charge le swf du player video
     */
    this.load = function () {
        var name = jq.attr("id");
        var el = '<div id="' + name + '" name="' + name + '" style="width:100%; height:100%;"></div>';

        jq.html("");
        jq.append(el);
        if(Browser.isFlash){
            swfobject.embedSWF(
                Nav.rootUrl + "pub/app/piagetcom/swf/videoPlayer.swf",
                name,
                this.width, this.height, "9.0.0", "",
                me.getFlashVars(),
                me.params,
                "",
                me.onVideoFlash
            );
        }else{
            me.loadHtml5();
        }
    };

    this.onVideoFlash = function (e) {
        if (!e.success) {
            Browser.isFlash=false;
            me.loadHtml5();

        }
    };

    /**
     * charge le lecteur html5
     */
    this.loadHtml5 = function () {
        var e = $("#" + jq.attr("id"));
        var name = jq.attr("id") + "_html5";
        var srtUrl = jq.attr("data-srt-html-url");
        var idVideo = name + '" src="' + me.videoUrl;

        var images = "";
        if (this.posterUrl) {
            images = 'background-image:url("' + this.posterUrl + '") poster="' + this.posterUrl + '"';
        }

        var el = '<video id="' + idVideo + '" controls="controls" ZZZautoplay="ZZZautoplay" zzzautobuffer="zzzautobuffer" ' + images + ' style="width:100%; height:100%; background-color:#000; background-position:center center;" >';
        if(srtUrl != "") el += '<track src="'+srtUrl+'" kind="subtitle" srclang="en-US" label="English" />';
            el +=    '</video>';
        e.html("");

        e.append(el);

        $('#' + name).videoSub();
    }
};


VideoPlayer.fromDom = function (jq, options) {
    if(jq.hasClass("video-yet-done")){
        return;
    }

    if (jq.closest(".video-yet-done").length > 0) {
        return;
    }

    var vp = $.extend(new VideoPlayer(jq), options, {
        width: '100%',
        height: '100%',
        HdOn: 'qualityHi',
        HdOff: "qualityLow",
        videoUrl: jq.attr("data-video-url"),
        srtUrl: jq.attr("data-srt-url"),
        posterUrl: jq.find("img").attr("src")
    });

    vp.load();
};

VideoPlayer.initAll = function () {
    Dom.body.find("[data-video-url]").each(function() {
        VideoPlayer.fromDom($(this));
    });

    $('.block-video-intro').on('click', function() {
        var video = $(this).siblings('.block-video-element').first();

        video.removeClass('hidden video-yet-done');
        VideoPlayer.initOne(video.find('[data-video-url]').first(), { autoplay: true });
    });

    $('.block-video-element, .block-video-element-close').on('click', function(e) {
        $(this).parents('.block-video').find('.block-video-element').addClass('hidden');
        e.preventDefault();
    });
};

/**
 * @param $elem jQuery element
 */
VideoPlayer.initOne = function($elem, options) {
    VideoPlayer.fromDom($elem, options);
};;
/**
 * This little Class manage the display or not products according if they are salable ord not.
 *
 * @param jq
 * @return {*}
 * @constructor
 */
var SalableProductsController=function(jq){
    "use strict";
    var me=this;
    var jq=this.jq=$(jq);
    if(jq.data("SalableProductsController")){
        return jq.data("SalableProductsController");
    }

    jq.data("SalableProductsController",me);
    /**
     *
     * @return {jQuery}
     */
    var getContainer=function(){
        "use strict";
        return Dom.body.find(".products-salable,.products-salable-off");
    };

    this.showAll=function(){
        "use strict";
        var c=getContainer();
        c.addClass("products-salable-off");
        c.removeClass("products-salable");
        jq.removeClass("product-salable");
    };

    this.showSalableOnly=function(){
        "use strict";
        var c=getContainer();
        c.removeClass("products-salable-off");
        c.addClass("products-salable");
        jq.addClass("product-salable");
    }
};

Dom.body.on("click",".js_salable_products_controller .js_control",function(e){
    e.preventDefault();
    e.stopPropagation();
    var btn=$(this);
    var objJq=btn.closest(".js_salable_products_controller");
    var obj=new SalableProductsController(objJq);
    //performs the action
    if(btn.attr("href")=="#show-all"){
        obj.showAll();
        actionEvent = "show-all";
    }
    if(btn.attr("href")=="#purchase-only"){
        obj.showSalableOnly();
        actionEvent = "purchase-only";
    }
});;
'use strict';
/**
 * This object manages a check box ui to select product properties in a box and to display or not related blocks.
 * @param jq
 * @constructor
 */
var CollectionFilters = function (jq) {
    var props = [];

    jq = this.jq = $(jq);

    /**
     * Refresh the display according the dom
     */
    this.update = function () {
        props = []; // Empty props first

        var domProps = jq.find('.prop'); // The properties in the dom
        var i;

        // For each filter Show, metal, price, etc...
        for (i = 0; i < domProps.length; i++) {
            props.push(new CollectionFilterProp($(domProps[i])));
        }

        // Now will select only the necessary ones
        var allBlocks = $('.js-collection-filter-block');
        var productSelection = $('.js-collection-filter-block .collection-filterable');

        // Disable all
        for (i = 0; i < allBlocks.length; i++) {
            hideBlock($(allBlocks[i]));
        }

        var j;
        var selectors;
        var selector = [];
        var numberOfSelected = 0;

        for (i = 0; i < props.length; i++) {
            selectors = [];

            for (j = 0; j < props[i].values.length; j++) {
                selectors.push('.' + props[i].values[j]);
                numberOfSelected++;
            }

            if (selectors.length > 0) {
                selector = selectors.join(', ');
                productSelection = productSelection.filter(selector);
            }
        }

        if (numberOfSelected == 0) {
            // Re enable all because there is no user selection
            for (i = 0; i < allBlocks.length; i++) {
                showBlock($(allBlocks[i]));
            }

            allBlocks.removeClass('filter-activated');
        }
        // Exception if there is one filter, in particulary for the show all
        else if (numberOfSelected == 1) {
            // Find if there is show filter
            var showFilter = jq.find('.prop[data-var="SHOW"]');

            // If it is
            if (showFilter) {
                // Check if the show all is the active filter
                var showAll = showFilter.find('.js-check.active[data-css-prop-id="prod-prop-all-product"]');

                if (showAll.length > 0) {
                    // If it is just remove all filter effects
                    for (i = 0; i < allBlocks.length; i++) {
                        showBlock($(allBlocks[i]));
                        restoreBlockStyle(allBlocks[i]);
                    }

                    allBlocks.removeClass('filter-activated');
                } else {
                    // If it is a another filter just to is effect
                    for (i = 0; i < productSelection.length; i++) {
                        var handle = $(productSelection[i]).closest('.js-collection-filter-block');
                        showBlock(handle);
                        updateBlockStyle(handle);
                    }
                }
            }
        }
        else {
            // Re enable the found ones
            for (i = 0; i < productSelection.length; i++) {
                showBlock($(productSelection[i]).closest('.js-collection-filter-block'));
            }
        }
    };

    var updateBlockStyle = function (jqBlock) {
        var handle = $(jqBlock);

        if (undefined !== handle.data('previous-span')) {
            return;
        }

        var spanSize = (handle.attr('class').match(/span\d{1,2}/) || [''])[0];
        handle.data('previous-span', spanSize);
        handle.removeClass(spanSize);
        handle.addClass('span3');

        var tile = $('.product-tile', handle);
        tile.removeClass(spanSize);
        tile.addClass('span3');
    };

    var restoreBlockStyle = function (jqBlock) {
        var handle = $(jqBlock);
        var previousSpanSize = handle.data('previous-span');

        if (undefined === previousSpanSize) {
            return;
        }

        handle.removeClass('span3');
        handle.addClass(previousSpanSize);
        handle.removeData('previous-span');

        var tile = $('.product-tile', handle);
        tile.removeClass('span3');
        tile.addClass(previousSpanSize);
    };

    var showBlock = function (jqBlock) {
        var handle = $(jqBlock);
        handle.css('display', 'block');
        handle.addClass('filter-activated');

        TweenMax.to(handle[0], 1, {
            css: { opacity: 1 }
        });
    };

    var hideBlock = function (jqBlock) {
        var handle = $(jqBlock);

        // Fix filter for IE put an exeption
        if ($.browser.msie && $.browser.version < 9) {
            handle.css('display', 'none');
        } else {
            TweenMax.to(handle[0], 1, {
                css: { opacity: 0 },
                onComplete: function () {
                    handle.css('display', 'none');
                }
            })
        }
    };
};

var CollectionFilterProp = function (jq) {
    this.values = [];
    var valuesDom = jq.find('.js-check.active');

    for (var i = 0; i < valuesDom.length; i++) {
        this.values.push($(valuesDom[i]).attr('data-css-prop-id'));
    }
};

/**
 * @param jq
 * @return {CollectionFilters}
 */
CollectionFilters.getParent = function (jq) {
    return new CollectionFilters(jq.closest('.js-collection-filters'))
};

/**
 * This function check if all filters possibility are available if one of them is useless we hide all stuff
 * @param filter the current filter
 * @param container the container to find the filtered elements
 */
CollectionFilters.hideAll = function (filter, container) {
    var isEnable = true;
    var nbElem = 0;

    filter.find('a[data-css-prop-id]').each(function () {
        var filterAttrName = $(this).data('css-prop-id');

        if (container.find('div.' + filterAttrName).length == 0) {
            isEnable = false;
            nbElem = 0;
        } else {
            nbElem++;
        }
    });

    if (! isEnable) {
        filter.css('display', 'none');
    }

    return nbElem;
};

/**
 * This function check if filters possibility are available if it's not we just hide this filter possibility
 * @param filter the current filter
 * @param container the container to find the filtered elements
 */
CollectionFilters.hideOne = function (filter, container) {
    var isEnable = true;
    var nbElem = 0;
    var filterAttrs = filter.find('a[data-css-prop-id]');
    var hiddenFilter = 0;

    filterAttrs.each(function () {
        var filterAttr = $(this);
        var filterAttrName = filterAttr.data('css-prop-id');

        if (container.find('div.' + filterAttrName).length == 0) {
            hiddenFilter++;
            filterAttr.css('display', 'none');
        } else {
            nbElem++;
        }
    });

    // If all possibility are useless just hide all the filter / ex: for prices
    if (filterAttrs.length == hiddenFilter) {
        isEnable = false;
        nbElem = 0;
    }

    if (!isEnable) {
        filter.css('display', 'none');
    }

    return nbElem;
};

/**
 * init the collection filters, in this init we hide useless filter
 */
CollectionFilters.init = function () {
    var filterContent = $('.container');
    var filters = filterContent.find('div.filters-group').children('div[data-var]');
    var maxElement = 0;

    // For each filter check if there is one less element with the property
    filters.each(function () {
        var filter = $(this);
        var filterName = filter.data('var');
        var nbElem;

        // Just hide or display the available filters
        if (filterName == 'SHOW') {
            nbElem = CollectionFilters.hideAll(filter, filterContent);
        } else {
            nbElem = CollectionFilters.hideOne(filter, filterContent);
        }

        if (nbElem > maxElement) {
            maxElement = nbElem;
        }

        // Apply all active filters
        var valuesDom = filter.find('.js-check.active');

        for (var i = 0; i < valuesDom.length; i++) {
            // If the filter is available
            var hidden = $(valuesDom[i]).parent().css('display') == 'none';
            var forAllProducts = $(valuesDom[i]).data('css-prop-id') == 'prod-prop-all-product';

            if (! hidden && ! forAllProducts) {
                CollectionFilters.getParent($(valuesDom[i])).update();
            }
        }
    });

    filterContent.find('div.filters-group').attr('data-max-elem', maxElement);

    // Init height
    if (!Browser.isTouchDevice) {
        $('.js-collection-filters').hover(
            function () {
                $(this).find('.filters').css('height', (maxElement * 30) + 50 + 'px');
            },
            function () {
                $(this).find('.filters').css('height', '0px');
            }
        );
    }
};


/**
 * on click a filter update the whole stuff !
 */
Dom.body.on('click', '.js-collection-filters .js-check', function (e) {
    e.preventDefault();
    var el = $(this);

    // Exception to make a radio behavior
    if (el.closest('.prop').hasClass('prop-radio')) {
        if (!el.hasClass('active')) {
            el.addClass('active');
        }

        var active = el.hasClass('active');

        el.closest('.prop').find('.active').removeClass('active');

        if (active) {
            el.addClass('active');
        }
    } else {
        el.toggleClass('active');
    }

    var filters = CollectionFilters.getParent(el);
    filters.update();
});

// Init the filter list
setTimeout(function () {
    CollectionFilters.init();
}, 500);
;
/**
 * Manage and Fix Microsoft Internet Explorer
 *
 * Fix placeholder
 * Fix PNG
 * Fix margin and padding problems
 *
 * @type {{}}
 */
var MsIe={

};

MsIe.refresh=function(){
    "use strict";

    if(Browser.isIE6){
        //alert("ok...");
        $(".main-nav .subnav").css("display","none");
        /*
        $(".main-nav .subnav").css("overflow","hidden");
        $(".main-nav .subnav").css("width","100%");
        $(".main-nav .subnav").css("height","0px");
        */

        //main na float
        $(".main-nav .links >div").css("float","left");
        $(".main-nav .links >div").css("margin-right","4px");

        //quick menu right
        $(".quickmenu .nav> li").css("padding","0 10px");
        $(".quickmenu .nav> li").css("display","inline");


        $(".js-slide-show-controls").css("height","20px");

        $(".divider-right").css("width","auto");

        $(".span4.media-home.minimal").css("height","300");
        $(".noprint").css("display","block");


        $(".footer .container .row,.footer .container .row .span3").css("height","60px");
        $(".footer .container .row").css("padding","0px");
        $(".footer .container .row").css("background-color","#80f");

        $(".social-footer").css("height","20px");
        $(".social-footer").css("background-color","#ff0");
        $(".corporate-footer").css("background-color","#f0f");
        $(".corporate-footer").css("margin-top","0px");

        $(".search-menu-form").css("display","none");
    }

    if ($.browser.version < 9) {
        // fix all img png who have the png class
        $('img.png').fixPNG();

        // remove filter on
        // slider on the footer
        $(".js-slide").css("filter", "");

        // footer bar
        $(".ui-bar").css("filter", "");

        // details view on roll hover
        $(".details").css("filter", "");

        // menu change
        $(".main-nav .links > div .subnav .content").css("filter", "");
        $(".fixed-footer .contextual-content").css("filter", "");
    }
};

// This function is to return display and not opacity if it's IE < 9
MsIe.ieOpacity=function(opacityLevel) {
    if ($.browser.version < 9) {
        if (opacityLevel == 0) {
            return {visibility:'hidden'};
        }
        else {
            return {visibility:'visible'};
        }
    }

    // otherwise its not ie or bigger than ie 8
    if (opacityLevel == 0) {
        return {opacity:0};
    }
    else {
        return {opacity:1};
    }
};

/*
MsIe.fixPlaceHolder = function( ) {
    var input = document.createElement("input");

    if(('placeholder' in input)==false) {
        $('[placeholder]').focus(function() {
            var i = $(this);
            if(i.val() == i.attr('placeholder')) {
                i.val('').removeClass('placeholder');
                if(i.hasClass('password')) {
                    i.removeClass('password');
                    this.type='password';
                }
            }
        }).blur(function() {
                var i = $(this);
                if(i.val() == '' || i.val() == i.attr('placeholder')) {
                    if(this.type=='password') {
                        i.addClass('password');
                        if ($.browser.version > 8) {
                            this.type='text';
                        } else {
                            i.removeAttr("placeholder");
                        }
                    }
                    i.addClass('placeholder').val(i.attr('placeholder'));
                }
            }).blur().parents('form').submit(function() {
                $(this).find('[placeholder]').each(function() {
                    var i = $(this);
                    if(i.val() == i.attr('placeholder'))
                        i.val('');
                })
            });
    }
}*/;
/**
 * Product Image Real Full Screen
 */
(function() {
    var
        fullScreenApi = {
            supportsFullScreen: false,
            isFullScreen: function() { return false; },
            requestFullScreen: function() {},
            cancelFullScreen: function() {},
            fullScreenEventName: '',
            prefix: ''
        },
        browserPrefixes = 'webkit moz o ms khtml'.split(' ');

    // check for native support
    if (typeof document.cancelFullScreen != 'undefined') {
        fullScreenApi.supportsFullScreen = true;
    } else {
        // check for fullscreen support by vendor prefix
        for (var i = 0, il = browserPrefixes.length; i < il; i++ ) {
            fullScreenApi.prefix = browserPrefixes[i];

            if (typeof document[fullScreenApi.prefix + 'CancelFullScreen' ] != 'undefined' ) {
                fullScreenApi.supportsFullScreen = true;

                break;
            }
        }
    }

    // update methods to do something useful
    if (fullScreenApi.supportsFullScreen) {
        fullScreenApi.fullScreenEventName = fullScreenApi.prefix + 'fullscreenchange';

        fullScreenApi.isFullScreen = function() {
            switch (this.prefix) {
                case '':
                    return document.fullScreen;
                case 'webkit':
                    return document.webkitIsFullScreen;
                default:
                    return document[this.prefix + 'FullScreen'];
            }
        }
        fullScreenApi.requestFullScreen = function(el) {
            return (this.prefix === '') ? el.requestFullScreen() : el[this.prefix + 'RequestFullScreen']();
        }
        fullScreenApi.cancelFullScreen = function(el) {
            return (this.prefix === '') ? document.cancelFullScreen() : document[this.prefix + 'CancelFullScreen']();
        }
    }

    // jQuery plugin
    if (typeof jQuery != 'undefined') {
        jQuery.fn.requestFullScreen = function() {

            return this.each(function() {
                var el = jQuery(this);
                if (fullScreenApi.supportsFullScreen) {
                    fullScreenApi.requestFullScreen(el);
                }
            });
        };
    }

    // export api
    window.fullScreenApi = fullScreenApi;
})();;
var UserAccount = {
    init: function() {
        var $countrySelect = $('form[data-form="address_detail"] div[data-field="addCountry"] select');

        $countrySelect.change(function(event) {
            UserAccount.updateFieldsOnCountryChange($(event.target).val());
        });

        // Initial fields update on page load
        UserAccount.updateFieldsOnCountryChange($countrySelect.val());
    },

    /**
     * Updates various stuff in fields according to the given country. For
     * example in Ireland the zip code is optional.
     */
    updateFieldsOnCountryChange: function(country) {
        var $zipField = $('div[data-field="zip"]');

        // Zip code is optional for Ireland
        UserAccount.setMandatoryState($zipField, country != 'IE');
    },

    /**
     * Sets a field as javascriptely mandatory or not. The given $field should
     * be a jQuery object representing the div that contains the field (it
     * should have a 'data-field' attribute with the name of the field).
     */
    setMandatoryState: function($field, isMandatory) {
        var $mandatorySign = $field.find('span.mandatory-star');
        var $fieldInput = $field.find('input[type="text"]');
        var fieldInputPlaceholder = $fieldInput.attr('placeholder');
        var placeholderMandatorySign = '*';

        $field.attr('data-field-mandatory', isMandatory ? 'true' : 'false');

        if(typeof(fieldInputPlaceholder) == 'undefined') {
            return;
        }

        if(isMandatory) {
            // Add the mandatory sign at the and of the placeholder if it's not
            // here yet
            if(fieldInputPlaceholder.indexOf(placeholderMandatorySign, fieldInputPlaceholder.length - placeholderMandatorySign.length) == -1) {
                $fieldInput.attr('placeholder', fieldInputPlaceholder + placeholderMandatorySign);
            }

            $mandatorySign.show();
        }
        else {
            // Remove the mandatory sign at the end of the placeholder if it's
            // here
            if(fieldInputPlaceholder.indexOf(placeholderMandatorySign, fieldInputPlaceholder.length - placeholderMandatorySign.length) !== -1) {
                $fieldInput.attr('placeholder', fieldInputPlaceholder.substring(0, fieldInputPlaceholder.length - placeholderMandatorySign.length));
            }

            $mandatorySign.hide();
        }
    }
};
;
/**
 * The MainMenu exposes a pub/sub subscribe pattern
 * so that all subscribers are notified when the menu should
 * get displayed or hidden.
 * It is the responsibility of each page/nanosite to take care of
 * showing/hiding the menu.
 */
var MainMenu = (function($) {
    var EVENT_MENU_SHOULD_SHOW = 'menu-should-show';
    var EVENT_MENU_SHOULD_HIDE = 'menu-should-hide';

    var callbacks = [];

    /**
     * Main public function to get notified on menu events.
     * The callback will receive as first argument the type of event.
     *
     * @param callback
     * @param context [optional] the execution context
     */
    function subscribe(callback, context) {
        callbacks.push({fct: callback, ctx: context});
    }

    /**
     * Call this when the menu should open
     */
    function shouldShow() {
        _executeCallbacksForEvent(EVENT_MENU_SHOULD_SHOW);
    }

    /**
     * Call this when the menu should close
     */
    function shouldHide() {
        _executeCallbacksForEvent(EVENT_MENU_SHOULD_HIDE);
    }


    function _executeCallbacksForEvent(event) {
        for (var i = 0; i < callbacks.length; i++) {
            callbacks[i].fct.call(callbacks[i].ctx || window, event);
        }
    }

    // public API
    return {
        subscribe: subscribe,
        shouldShow: shouldShow,
        shouldHide: shouldHide,
        EVENT_MENU_SHOULD_SHOW: EVENT_MENU_SHOULD_SHOW,
        EVENT_MENU_SHOULD_HIDE: EVENT_MENU_SHOULD_HIDE
    };
})(window.jQuery);;
/**
 * When first element changes, it runs a query on element[name] = element[value] and fill in the 2nd item
 * Same behaviour on 2nd element changing the 3rd, etc..
 *
 * Usage:
 *
 * <div class="my-cascade" data-cascade-url="/my-url">
 *   <select name="first-item" data-cascade-item="1">
 *   <select name="second-item" data-cascade-item="2" data-cascade-name="second">
 *   <select name="thrid-item" data-cascade-item="3">
 *   <select name="fourth-item" data-cascade-item="4">
 * </div>
 *
 * Notes:
 *
 * It is possible to override the name sent to backend with 'data-cascade-name'
 *
 * $('.my-cascade').cascade();
 */
(function($) {
    $.fn.cascade = function() {
        var $groups = $(this);

        var initBehaviour = function($group) {
            var $elements = $group.find('select[data-cascade-item]'),
                textChoose = $group.data('cascade-choose') || 'choose',
                url = '/' + $group.data('cascade-url');

            var getItem = function(item) {
                return $elements.filter('[data-cascade-item="'+ item +'"]');
            };

            var getItemName = function($item) {
                return $item.data('cascade-name') || $item.attr('name');
            };

            $elements.on('change', function() {
                var $el = $(this),
                    itemId = $el.data('cascade-item'),
                    $nextItem = getItem(itemId + 1),
                    data = {};

                if (itemId === $elements.length) {
                    return;
                }

                for(var i = 1; i <= itemId; i++) {
                    var $item = getItem(i),
                        name = getItemName($item);

                    // no query if one parameter is empty
                    if ($item.val() === '') {
                        if (typeof $nextItem !== "undefined") {
                            $nextItem.empty().trigger('change');
                        }

                        return;
                    }

                    data[name] = $item.val();
                }

                data.find = getItemName($nextItem);

                $.ajax({
                    url: url,
                    data: data,
                    success: function(data) {
                        $nextItem.empty();
                        $nextItem.append($('<option />').val('').text(textChoose));
                        $nextItem.removeAttr('disabled');

                        $.each(data.data, function(k, value) {
                            $nextItem.append($('<option />').val(value).text(value));
                        });

                        $nextItem.trigger('change');
                    }
                });
            });
        };

        $groups.each(function() {
            initBehaviour($(this));
        });

        return this;
    };
})(jQuery);
;
/**
 * The form object manage form submissions, errors and api returns.
 *
 * @param jq {jQuery} a form element
 * @constructor
 */
var Form=function(jq){

    var me=this;
    /**
     *
     * @type {jQuery}
     */
    var jq=this.jq=$(jq);
    /**
     *
     * @type {MessagesDisplay}
     */
    this.messages=new MessagesDisplay(jq.find(".js-form-messages"));

    /**
     * Use this getter to know if we will sen data via ajax or simply post the form
     * @return {Boolean}
     */
    this.isAjaxPost=function(){
        if(jq.attr("data-ajax-post")=="true"){
            return true;
        }else{
            return false;
        }
    };

    //unique instance
    if(jq.data("ref")){
        return jq.data("ref");
    }
    jq.data("ref",this);

    /**
     * Return yhe field objects of the form
     * @return {Field[]} Field objects array
     */
    this.getFields=function(){
        var r=[];
        var fields=jq.find("[data-field]");
        var f;
        for(var i=0;i<fields.length;i++){
            f=Field.getField(fields[i]);
            if(f){
               r.push(f);
            }
        }
        return r;
    };

    /**
     * Return an array containing the
     * fields name that have an error.
     *
     * @returns {Array}
     */
    this.getFieldWithErrors = function () {
        var fields = [];
        jQuery.each(me.getFields(), function (key, field) {

            // Get field name (input and select)
            if (field.errors.length > 0) {
                if (field.jq.find('input').length) {
                    fields.push(field.jq.find('input').attr('name'));
                } else if (field.jq.find('select').length) {
                    fields.push(field.jq.find('select').attr('name'));
                }
            }

        });

        return fields;
    };

    /**
     * Return data to send the form.
     * @return {Object} The field values
     */
    this.getData=function(){
        var fields=me.getFields();
        var data={};
        for(var i=0;i<fields.length;i++){
            data[fields[i].variable()]=fields[i].value();
        }
        return data;
    };
    /**
     *
     * @param name {String} The field name you need
     * @return {Field}
     */
    this.getFieldByName=function(name){
        "use strict";
        var dom=jq.find("[data-field='"+name+"']");
        if(dom.length==1){
            return new Field(dom);
        }else{
            //console.log("error getting field by name : "+name);
            //console.log(dom);
            return null;
        }
    };
    /**
     *
     * @return {String} The url where to send the form.
     */
    this.url=function(){
        "use strict";
        return jq.attr("action");
    };
    /**
     * Send the form
     */
    this.submit=function(event){

        me.messages.empty();

        //allow php to know if the form has been sent by an human or a bot
        var n = $.now();
        if($("#i_am_an_human")){
            $("#i_am_an_human").parent().remove();
        }
        me.jq.append('<div data-field="i_am_an_human"><input type="hidden" id="i_am_an_human" name="i_am_an_human" value="now'+String(n)+'"/></div>');

        var isValid=me.validate();
        if(isValid){
            //console.log("send the form...");
            $("input").blur();
            me.loading(true);
            //me.messages.addInfo("TODO::david::trad Recording your information");
            if(me.isAjaxPost()){
                event.preventDefault();
                var ajax=new SimpleAjax(me.url(),me.getData(),false);

                // Allows to plug on the AJAX's events system from external JavaScript files
                Form.events.dispatchEvent(EVENT_AJAX_FORM_SUBMISSION, ajax);

                // Add the Form handling listener too
                ajax.events.addEventListener(EVENT_AJAX_SUCCESS,me.onAjax);
                ajax.send();
            }else{
                //console.log(event);
                //alert("normal post");
                //normal post submit
                //me.jq.submit();
            }

        }else{
            event.preventDefault();

            // Tracks frontend errors on account creation
            if (Stats.isAccountCreationPage()) {

                // Gets the right event depending if
                // we are on mobile or not
                var eventOnError;
                if (Browser.isMobile) {
                    eventOnError = 'clickOnSubmitAccountCreationWithErrorMobile';
                } else {
                    eventOnError = 'clickOnSubmitAccountCreationWithError';
                }

                Gtm.send({
                    event: eventOnError,
                    errorType: me.getFieldWithErrors()
                });
            }

            me.displayTextErrors();
        }
    };

    this.displayTextErrors=function(){
        me.messages.empty();
        var fields=me.getFields();
        for(var i=0;i<fields.length;i++){
            for(j=0;j<fields[i].errors.length;j++){
                me.messages.addError(fields[i].errors[j].message);
            }
        }
    };

    /**
     * Handles Ajax request on success (HTTP code 200).
     *
     * @param {EventAjaxSuccess} ev  The ajax event success
     */
    this.onAjax = function (ev) {

        "use strict";

        var gtmEvent;

        if (ev.data.success) {

            // Tracks login success on mobile
            if (ev.data.statsEventCall === 'login_form' && ev.data.redirect) {

                ev.data.redirect = ev.data.redirect + '#gtm-parameters=' + Gtm.encodeParameters({
                    event: 'clickOnLoginMobile',
                    visitorLoggedStatus: 'logged'
                });
            }

            // Tracks newsletter subscription
            if (ev.data.statsEventCall === 'form-newsletter') {

                // Gets the right event depending if
                // we are on mobile or not
                gtmEvent = (Browser.isMobile) ? 'clickOnNewsletterSubmitMobile' : 'clickOnNewsletterSubmit';

                Gtm.send({
                    event: gtmEvent
                });
            }

            // Tracks contact submit with and without newsletter subscription
            if (ev.data.statsEventCall === 'form-contact') {

                if (ev.data.statsWithNewsletter === '1') {
                    gtmEvent = (Browser.isMobile) ? 'clickOnFooterContactRequestWithNewsletterMobile' : 'clickOnFooterContactRequestWithNewsletter';
                } else {
                    gtmEvent = (Browser.isMobile) ? 'clickOnFooterContactRequestWithoutNewsletterMobile' : 'clickOnFooterContactRequestWithoutNewsletter';
                }

                Gtm.send({
                    event: gtmEvent
                });
            }

            // Tracks account registration success
            // with and without newsletter on mobile or desktop
            if (ev.data.statsEventCall === 'account-creation' && ev.data.redirect) {

                if (ev.data.statsWithNewsletter) {
                    gtmEvent = (Browser.isMobile) ? 'clickOnSubmitAccountCreationWithNewsletterMobile' : 'clickOnSubmitAccountCreationWithNewsletter';
                } else {
                    gtmEvent = (Browser.isMobile) ? 'clickOnSubmitAccountCreationWithoutNewsletterMobile' : 'clickOnSubmitAccountCreationWithoutNewsletter';
                }

                ev.data.redirect = ev.data.redirect + '#gtm-parameters=' + Gtm.encodeParameters({
                    event: gtmEvent
                });
            }

        } else {

            // Tracks backend errors on subscription
            if (ev.data.statsEventCall === 'account-creation') {

                // Gets the right event depending if
                // we are on mobile or not
                gtmEvent = (Browser.isMobile) ? 'clickOnSubmitAccountCreationWithErrorMobile' : 'clickOnSubmitAccountCreationWithError';

                if (ev.data.errors.length) { // Errors on customer registration
                    Gtm.send({
                        event: gtmEvent,
                        errorType: ev.data.errors
                    });
                } else if (ev.data.messages) { // Errors on address registration
                    Gtm.send({
                        event: gtmEvent,
                        errorType: ev.data.messages
                    });
                }
            }
        }

        me.loading(false);
        me.processApiReturn(new ApiReturn(ev.data));
    };

    /**
     *
     * @param {ApiReturn} apiReturn
     */
    this.processApiReturn=function(apiReturn){
        me.messages.empty();
        if(apiReturn.uiDialog){
            var popInContent=$(apiReturn.uiDialog);
            var popIn=PopIn.fromContent(popInContent);
            popIn.show();
            var uiDialog=new UiDialog(popIn.jq);
            uiDialog.events.addEventListener(EVENT_UI_DIALOG_JSON,function(json){
                //console.log("receive json !");
                //console.log(json);
                me.fillWithJson(json);
                me.jq.submit();
                popIn.hide();
            })
        }



        if(apiReturn.template) {
            var templateTarget = me.jq.attr("data-template-target");
            if( templateTarget ){
                var target = Dom.body.find("[data-template= "+templateTarget+"]");
                if(target) {
                    target.html();
                    target.html(apiReturn.template);
                }
            }
        }

        if(apiReturn.captcha){
            me.enableCaptcha();
        }

        if(apiReturn.success){

            me.disableCaptcha();

            if(apiReturn.messages){
                for(var i=0;i<apiReturn.messages.length;i++){
                    me.messages.addMessage(apiReturn.messages[i] );

                    var fn = null;
                    var sucFunction = me.jq.attr("data-form-success-func");

                    if( sucFunction ) {
                        var dotIndex = sucFunction.indexOf(".");

                        if(dotIndex) {
                            var n=sucFunction.split(".");
                            var object = window[n[0]];
                            fn = object[n[1]];
                        } else {
                            fn = window[sucFunction];
                        }

                        if( fn /*&& typeof fn === 'function'*/ ){
                            try {
                                fn(apiReturn);
                            }
                            catch(err)
                            {
                                //console.log("catch")
                                //console.log(err)
                            }
                        }
                    }


                }
            }

            if(apiReturn.redirect) {
                window.location = apiReturn.redirect;
            }else if(me.jq.attr("data-empty-fields") == "true"){
                me.emptyAllFields();
            }
            if(apiReturn.processAfter){
                apiReturn.processAfter;
            }
        }else{
            if(apiReturn.messages){
                for(var i=0;i<apiReturn.messages.length;i++){
                    me.messages.addError(apiReturn.messages[i]);
                }
            }
        }

        var container = me.jq.parents(".content");
        if(container.length > 0 ) {
            container.animate({
                scrollTop: me.jq.find(".js-form-messages").offset().top - container.offset().top + container.scrollTop()
            }, 2000);
        }

        //if a popin exist inside the page
        if(typeof(PopIn) != "undefined" && PopIn.resizeAll){
            PopIn.resizeAll();
        }
    };

    this.enableCaptcha=function(){

        var captcha = this.jq.find("[data-field='captcha']");
        if(captcha){
            captcha.removeClass("hidden");
            captcha.attr("data-field-mandatory", "true");
            var captchaData = captcha.find("[data-value='captchaData']");
            captchaData.val(captchaData.find("option").last().val());

            me.validate();
        }
    };

    this.disableCaptcha=function(){

        var captcha = this.jq.find("[data-field='captcha']");
        if(captcha){
            captcha.addClass("hidden");
            captcha.removeAttr("data-field-mandatory");
            var captchaData = captcha.find("[data-value='captchaData']");
            captchaData.val("");
        }
    };


    this.fillWithJson=function(json){
        //console.log("fill with json");
        //console.log(json);
        var field;
        for(var key in json){
            //console.log("key..."+key);
            //console.log(json[key]);
            if(json.hasOwnProperty(key)) {
                field=me.getFieldByName(key);
                if(field){
                    //console.log("david t'es trop fort !");
                    field.setValue(json[key]);
                }
            }
        }
    };

    this.emptyAllFields=function(){
        //console.log("empty fields");
        var fields = me.getFields();
        for(var i=0;i<fields.length;i++){

            fields[i].jq.find("input:text,select,textarea").val("");
            fields[i].jq.find('input:checkbox, input:radio').removeAttr('checked');

            // mobile jquery radio
            fields[i].jq.find(".ui-radio-on").removeClass("ui-radio-on").addClass("ui-radio-off");
            fields[i].jq.find(".ui-icon-radio-on").removeClass("ui-icon-radio-on").addClass("ui-icon-radio-off");
            fields[i].jq.find(".ui-icon-checkbox-on").removeClass("ui-icon-checkbox-off").addClass("ui-icon-checkbox-off");
        }
    };

    /**
     * Change the mandatory status of the field. Also change
     * the placeholder if available (add or remove the *)
     * @param field
     * @param bool status
     */
    this.updateMandatoryStatus = function(field, status) {
        field.attr('data-field-mandatory', status ? 'true' : 'false');

        var input = field.find('input, textarea');
        var placeholder = input.attr('placeholder');
        var re = /\*$/;
        if(typeof(placeholder) !== 'undefined') {
            placeholder = placeholder.replace(re, '');
            if(status) {
                placeholder = placeholder + '*';
            }
            input.attr('placeholder', placeholder);
        }
    };

    /**
     * This piece of logic is also written in PHP in \ContactFormPhoneNumberFieldMandatorySpec::isSatisfiedBy().
     * Please, keep them in sync. For more information, check \ContactFormPhoneNumberFieldMandatorySpec.
     *
     * @return {Boolean}
     */
    this.shouldContactFormPhoneNumberBeMandatory = function ($countryField, $catalogsFields) {
        var catalogRequirement = (0 < $catalogsFields.length),
            countryRequirement = (-1 !== $.inArray($countryField.val(), window.countriesRequiringPhoneNumber));

        return (catalogRequirement && countryRequirement);
    };

    /**
     * Update the "data-field-mandatory" of the contact form's phone number field
     */
    this.updateContactFormPhoneNumberMandatory = function (pageLoad) {

        if(typeof(pageLoad) == 'undefined')pageLoad = false;

        var $countryField = $('div[data-field="country"] select'),
            $catalogsFields = $('div[data-field="catalogs"] input:checked'),
            $phoneNumberField = $('div[data-field="phoneNumber"]'),
            mandatoryOnLoad = $phoneNumberField.attr('data-field-mandatory') == "true",
            phoneNumberIsMandatory = me.shouldContactFormPhoneNumberBeMandatory($countryField, $catalogsFields);

        me.updateMandatoryStatus($phoneNumberField, (phoneNumberIsMandatory || (pageLoad && mandatoryOnLoad)));

        if(!$phoneNumberField.data('always-display') && !phoneNumberIsMandatory){
            $phoneNumberField.addClass('hidden');
        }else{
            $phoneNumberField.removeClass('hidden');
        }

        // Avoid the field to stay "error'ed" when changing the country/catalogs fields
        if (false == phoneNumberIsMandatory) {
            $phoneNumberField.removeClass('error');
        }
    };

    /**
     * Set the address fields as mandatory based on parameter
     * @param bool mandatory
     */
    this.updateContactFormAddressMandatory = function(mandatory) {
        var fields = [
            $('div[data-field="address"]'),
            $('div[data-field="city"]'),
            $('div[data-field="cp"]')
        ];

        for(var idx in fields) {
            var f = fields[idx];

            var onload = f.attr('data-mandatory-onload');
            if(typeof(onload) === 'undefined') {
                onload = f.attr('data-field-mandatory') ? 'true' : 'false';
                f.attr('data-mandatory-onload', onload);
            }

            // if the field were mandatory on page load, keep it that way
            var status = mandatory || onload == 'true';

            me.updateMandatoryStatus(f, status);
            if(! status) {
                f.removeClass('error');
            }
        }
    };

    /**
     * Will test the fields and display errors if there is.
     * @return {Boolean} Will be true if the form is valid (in a javascript point of view)
     */
    this.validate=function(){
        var fields=me.getFields();
        var isValid=true;
        /**
         *
         * @type {FieldError[]}
         */
        var errors=[];
        for(var i=0;i<fields.length;i++){
           if(!fields[i].validate()){
               isValid=false;
               for(var j=0;j<fields[i].errors.length;j++){
                   errors.push(fields[i].errors[j])
               }
           }
        }
        if(!isValid){
            //this.disableSubmit(true);
            for(i=0;i<fields.length;i++){
                fields[i].displayErrors();
            }
            me.displayTextErrors();
            //scroll to the first error field
            //TweenLite.to(window, 0.5, {scrollTo:{y:errors[0].field.jq.offset().top-50}, ease:Power2.easeOut});
            return false;
        }else{
            this.disableSubmit(false);
            me.messages.empty();
            return true;
        }
    };

    /**
     * Show or hide the form loading.
     * @param state {Boolean} if true will show loading, if false, will hide.
     */
    this.loading=function(state){
        var layer = jq.find('div.js-loading-layer').first();

        if(state){
            jq.addClass("loading");

            TweenMax.to(layer,0.5,{
                css:{
                    opacity:0.9
                }
            })
            me.disableSubmit(true);
            //jq.css("opacity",0.5);
        }else{
            TweenMax.to(layer,0.5,{
                css:{
                    opacity:0.1
                },
                onComplete:function(inst){
                    inst.jq.removeClass("loading");
                    inst.disableSubmit(false);
                },
                onCompleteParams:[me]
            })

        }
    };
    this.disableSubmit=function(state){
        "use strict";
        var btn=jq.find(".js-submit");
        if(state){
            btn.addClass("disabled");
            btn.attr("disabled","disabled");
            //jq.css("opacity",0.5);
        }else{
            btn.removeClass("disabled");
            btn.removeAttr("disabled")
            //jq.css("opacity",1);
        }
    };
};

/**
 * Event dispatcher (shared by all instances of Form)
 * @type {EventDispatcher}
 */
Form.events = new EventDispatcher();

/**
 * The identifier for an ajax request coming from a form submission.
 * @type {String}
 */
var EVENT_AJAX_FORM_SUBMISSION = 'event-ajax-form-submission';

/**
 * Returns the parent Form object.
 * @param jq {jQuery} A jquery dom object inside the form
 * @return {Form}
 */
Form.getParent=function(jq){

    var f=$(jq).closest("form");
    return new Form(f);
};

Dom.body.on("submit","[data-form]",function(e){
    "use strict";
    //console.log("submit");
    var form=Form.getParent($(this));
    form.submit(e);
});

Form.setUpMandatoryCatalogFields = function() {
    var catalogSelector = 'div[data-field="catalogs"] input';

    $(document).on('change', 'div[data-field="country"] select, ' + catalogSelector, function(){
        Form.getParent($(this)).updateContactFormPhoneNumberMandatory(false);
    });

    $(document).on('change', catalogSelector, function() {
        var checked = $(catalogSelector + ':checked').length > 0;
        Form.getParent($(this)).updateContactFormAddressMandatory(checked);
    });

    (new Form($('form'))).updateContactFormPhoneNumberMandatory(true);
};


var MessagesDisplay=function(jq){
    "use strict";
    var me = this;
    var jq = this.jq=jq;
    /**
     * Create, append and return a message element.
     * @param {String} text
     * @return {jQuery}
     */
    var getMessageElement=function(text){
        var el=$("<div></div>");
        el.addClass("message");
        el.html(text);
        jq.append(el);
        return el;
    };
    var show_old=function(el){
        TweenLite.fromTo(
            el, 0.5,
            {css:{height:"0px",opacity:0,"margin-bottom":"0px"}},
            {css:{height:el.height(),opacity:1,"margin-bottom":"10px"},ease:Linear.easeNone}
        );
    };
    var show=function(el){
        TweenLite.fromTo(
            el, 0.5,
            {css:{opacity:0}},
            {css:{opacity:1},ease:Linear.easeNone}
        );
    };
    this.addMessage=function(text){
        if(!me.exists(text)){
            var el=getMessageElement(text);
            el.addClass("success");
            show(el);
        }

    };
    this.addError=function(text){
        if(!me.exists(text)){
            var el=getMessageElement(text);
            el.addClass("error");
            show(el);
        }
    };
    this.addInfo=function(text){
        if(!me.exists(text)){
            var el=getMessageElement(text);
            show(el);
        }
    };
    /**
     * removes all messages
     */
    this.empty=function(){
        //jq.empty();
        var messages=jq.find(".message");
        var m;
        for(var i=0;i<messages.length;i++){
            m=$(messages[i]);
            m.removeClass("message");
            m.remove();
            /*
            TweenLite.to(m,
                0.5,
                {
                css:{height:"0px",opacity:0,"margin-bottom":0},
                ease:Linear.easeNone,
                onComplete:function(mess){
                    mess.remove();
                },
                onCompleteParams:[m]
                }
            );
            */
        }

    };
    /**
     * Tells you if a message already exists in the messages list
     * @param {String} textMessage
     */
    this.exists=function(textMessage){
        var messages=jq.find(".message");
        for(var i=0;i<messages.length;i++){
            if($(messages[i]).text()==textMessage){
                return true;
            }
        }
        return false;
    };

};
;
/**
 * This is the basic class to manage Fields
 */
var Field=function(jq){
    "use strict";
    var me=this;

    var jq=this.jq=$(jq);
    //unique instance
    if(jq.data("ref")){
        return jq.data("ref");
    }
    jq.data("ref",this);

    /**
     * The errors relative to this field
     * @type {FieldError[]}
     */
    this.errors=[];
    /**
     *
     * @type {EventDispatcher} Here you chan listen for EVENT_CHANGE
     */
    this.events=new EventDispatcher();


    /**
     * Tells you if the field is mandatory or not
     * @return {Boolean}
     */
    this.isMandatory=function(){
        "use strict";
        if(jq.attr("data-field-mandatory")=="true"){
            return true;
        }else{
            return false;
        }
    };
    /**
     * Is this field a multi field
     * @return {Boolean}
     */
    this.isMultiFields=function(){
        "use strict";
        if(jq.attr("data-is-multi-fields")=="true"){
            return true;
        }else{
            return false;
        }
    };
    /**
     * Is this field an email
     * @return {Boolean}
     */
    this.isEmail=function(){
        "use strict";
        if(jq.attr("data-is-email")=="true"){
            return true;
        }else{
            return false;
        }
    };
    /**
     * Is this field a phone number
     * @return {Boolean}
     */
    this.isPhone=function(){
        "use strict";
        if(jq.attr("data-is-phone")=="true"){
            return true;
        }else{
            return false;
        }
    };
    /**
     *
     * @return {Int} The minimum length for the field
     */
    this.minimumLength=function(){
        var attr=jq.attr("data-minimum-length");
        if(attr){
            return attr;
        }else{
            return false;
        }
    };

    this.setValue=function(val){
        //-----------texts---------------------
        var input=jq.find("input[type='text'],input[type='hidden'],input[type='password'],textarea,select");
        if(input.length==1){
            input.val(val);
            return true;
        }

        //console.log(jq.find("input[type='radio']"))

        var radioInput=jq.find("input[type='radio']");
        if(radioInput.length>1){
            //console.log("radio")
            radioInput.filter('[value="'+val+'"]').attr('checked', true);
            //$('input:radio[value="'+val+'"]').attr('checked',true);
        }
    };
    /**
     *
     * @return {*} Value of the field
     */
    this.value=function(){
        var input;
        var i;
        //----------radio--------------------
        input=jq.find("input[type='radio']");

        if(input.length>0){
            for(var i=0;i<input.length;i++){
                if($(input[i]).is(':checked')){
                    return $(input[i]).val();
                }
            }
            return null;
        }

        //----------checkboxes---------------
        input=jq.find("input[type='checkbox']");


        if(input.length==1){
            //boolean checkbox in fact
            if($(input).is(':checked')){
                return $(input).val();
            }else{
                return null;
            }
        }else if(input.length>1){
            //checkbox multiple
            var ret=[];
            for(var i=0;i<input.length;i++){
                if($(input[i]).is(':checked')){
                    ret.push($(input[i]).val());
                }
            }
            return ret;
        }

        //-----------select---------------------
        input=jq.find("select");
        //console.log(input)
        //console.log(input.length)

        if(input.length == 1) {
            return input.val();
        }else if( input.length > 1 ) {
            var ret=[];
            var obj = {};
            $.each( input, function( key, val ) {
                var k = $(val).attr("data-value");
                var v = $(val).val();

                obj[k] = v;
            });

            //console.log(ret);

            return obj;
        }

        //-----------texts---------------------
        input=jq.find("input[type='text'],input[type='hidden'],input[type='password'],textarea");
        if(input.length<=0){
            return null;
        }
        if(!input.val() || input.val()==""){
            return null
        }
        return input.val();

    };
    /**
     *
     * @return {Form} The form of this field
     */
    this.form=function(){
        "use strict";
        return Form.getParent(jq);
    };
    /**
     *
     * @return {String} The variable name of the field
     */
    this.variable=function(){
        "use strict";
        return jq.attr("data-field");
    };
    /**
     *
     * @return {Field} The field which value should be equal to the actual field
     */
    this.fieldThatShouldBeEqual=function(){
        "use strict";
        if(jq.attr("data-field-equal")){
            return me.form().getFieldByName(jq.attr("data-field-equal"));
        }else{
            return null;
        }
    };
    /**
     *
     * @return {Field} This field or that one should be filled
     */
    this.fieldAtLeastOneFilled=function(){
        "use strict";
        if(jq.attr("data-field-at-least-one-filled")){
            return me.form().getFieldByName(jq.attr("data-field-at-least-one-filled"));
        }else{
            return null;
        }
    };
    /**
     * Tells you if the field is valid and fills the errors array.
     * @return {Boolean} Will be true if the field is valid
     */
    this.validate=function(){

        //reset
        jq.removeClass("error");

        var val=me.value();
        me.errors=[];

        //check if the field is mandatory compared to the class form (some fields can be mandatory only in some specific cases. For thoses fields we use the classes of the form)
        var isMan = false;
        if(me.jq.attr("class")){
            var regx = new RegExp('\\bmandatory-form-.*\\b', 'g');
            var manFieldClass = me.jq.attr("class").match(regx);
            //var manFormClass = me.form().attr("class").match(regx);

            if(manFieldClass) {
                manFieldClass = manFieldClass[0].split(" ");
                $.each( manFieldClass, function( key, value )  {
                    if( me.form().jq.hasClass(value) == true ) {
                        isMan = true;

                    }
                })
            }
        }

        //mandatory field
        if(me.isMandatory() || isMan){

            var e=new FieldError(me,"mandatory");
            var mess=me.jq.attr("data-field-mandatory-error-message");


            //multi fields (for example 2 or 3 selects)
            if(me.isMultiFields() && val){
                var error = false;
                $.each( val, function( key, value )  {
                    //console.log(key);
                    //console.log(value);
                    if( value == "" || value == "0") {
                        error = true;
                    }
                });

            //for all other fields
            }else if(!val){
                error = true;
            }

            if(error){
                if(mess){
                    e.message = mess;
                }
                me.errors.push(e);
            }
        }

        //valid email
        if(val && me.isEmail()){
            if( !Field.Regexps.emailRegexp.test(val)){
                var e=new FieldError(me,"email");
                //TODO::david::TODO::gokce::no translations for invalid email input?
                var mess=me.jq.attr("data-is-email-error-message");
                if(mess){
                    //e.message="field "+me.variable()+"/"+mess;
                    e.message = mess;
                }
                me.errors.push(e);
            }
        }

        //valid phone
        if(val && me.isPhone()){
            if( !Field.Regexps.phoneRegexp.test(val)){
                var e=new FieldError(me,"phone");
                //TODO::david::TODO::gokce::no translations for invalid phone input?
                var mess=me.jq.attr("data-is-phone-error-message");
                if(mess){
                    //e.message="field "+me.variable()+"/"+mess;
                    e.message = mess;
                }
                me.errors.push(e);
            }
        }

        //minimum length
        var min=me.minimumLength();
        if(val && min){
            if(val.length<min){
                var e=new FieldError(me,"field "+me.variable()+"/"+me.jq.attr("data-minimum-length-error-message"));
                e.type="minLength";
                e.message = me.jq.attr("data-minimum-length-error-message");
                me.errors.push(e);
            }
        }

        //pair of equal fields
        var mirrorField=me.fieldThatShouldBeEqual();
        if(mirrorField){
            //clean the equality errors in the mirror field
            for(var i=0;i<mirrorField.errors.length;i++){
                if(mirrorField.errors[i].type=="equality"){
                    mirrorField.errors.splice(i,1);
                    break;
                }
            }
            //check equality
            if(mirrorField.value()!=val){
                var e=new FieldError(me,"Fields are not equals");
                e.type="equality";
                var mess=me.jq.attr("data-field-equal-error-message");
                if(mess){
                    //e.message="field "+me.variable()+"/"+mess;
                    e.message = mess;
                }
                me.errors.push(e);

                mirrorField.errors.push(e);
            }
            //refresh the mirror according the errors (or not)
            mirrorField.displayErrors();
        }
        //pair field, at least one has to be filled
        mirrorField=me.fieldAtLeastOneFilled();
        if(mirrorField){
            //clean the equality errors in the mirror field
            for(var i=0;i<mirrorField.errors.length;i++){
                if(mirrorField.errors[i].type=="at-least-one-filled"){
                    mirrorField.errors.splice(i,1);
                    break;
                }
            }
            if(!val){
                if(!mirrorField.value()){
                    var e=new FieldError(me,"At least one should be filled");
                    e.type="at-least-one-filled";
                    var mess=me.jq.attr("data-field-at-least-one-filled-error-message");
                    if(mess){
                        //e.message="field "+me.variable()+"/"+mess;
                        e.message = mess;
                    }
                    me.errors.push(e);
                    mirrorField.errors.push(e);
                }
            }
            //refresh the mirror according the errors (or not)
            mirrorField.displayErrors();

        }


        if(me.errors.length>0){
            return false;
        }else{
            return true;
        }
    };
    /**
     * Do the basic stuff on field change...call it after a change event for sure.
     */
    this.hasChanged=function(){
        "use strict";
        //me.form().validate();
        me.events.dispatchEvent(EVENT_CHANGE,me);

        var fieldName = me.jq.attr("data-field");
        fieldName = fieldName.replace(' ','');
        if(fieldName && me.jq.attr("data-give-condition-class") == "true"){

            var regx = new RegExp('\\bmandatory-form-'+fieldName+'-[0-9]*\\b', 'g');
            if(me.form().jq.attr("class")){
                me.form().jq.attr("class", me.form().jq.attr("class").replace(regx, ''));
            }
            if(me.value()){
                me.form().jq.addClass("mandatory-form-"+fieldName+"-"+me.value());
            }
        }

        // form shim update otherwise placeholder does not update in IE
        $.placeholder.shim();

    };
    /**
     * Display the errors (if there is).
     */
    this.displayErrors=function(){
        "use strict";
        //reset
        jq.removeClass("error");

        if(me.errors.length>0){
            jq.addClass("error");
            /*
             for(var i=0;i<me.errors.length;i++){
             console.log(me.errors[i].field.variable()+"/field error:"+me.errors[i].message);
             console.log("value is...");
             console.log(me.value());
             }
             */
        }

    }

};
Field.Regexps={};
//Field.Regexps.emailRegexp= new RegExp("^([a-zA-Z0-9_-])+([.]?[a-zA-Z0-9_-]{1,})*@([a-zA-Z0-9-_]{2,}[.])+[a-zA-Z]{2,3}$");
Field.Regexps.emailRegexp= new RegExp("^([a-zA-Z0-9_-])+([.+]?[a-zA-Z0-9_-]{1,})*@([a-zA-Z0-9-_]{2,}[.])+[a-zA-Z]{2,3}$");
Field.Regexps.phoneRegexp= new RegExp("^[0-9 \(\)\-+]+$");
Field.Regexps.zipcodeRegexp= new RegExp("^[0-9 a-zA-Z\-]+$");
/**
 *
 * @param jq {jQuery}
 * @return {Field} Return the field object
 */
Field.getField=function(jq){
    return new Field(jq);
};
/**
 * Return the immediate parent field object.
 * @param jq {jQuery}
 * @return {Field}
 */
Field.getParent=function(jq){
    "use strict";
    return Field.getField($(jq).closest("[data-field]"));
};
/**
 *
 * @param field {Field}
 * @param message {String}
 * @constructor
 */
var FieldError=function(field,message){
    "use strict";
    /**
     *
     * @type {Field} The field where the error is
     */
    this.field=field;
    /**
     *
     * @type {String} The error message
     */
    this.message=this.field.variable();
    /**
     *
     * @type {String} The error type
     */
    this.type="";

};

Dom.body.on("keyup paste keydown change focus","[data-counter-char='1']",function(e){
    var elem = $(this);
    var field=Field.getParent(elem);

    var maxchar = elem.attr("data-max-char");
    var counterMessageContainer = field.jq.find(".counter-char");
    var messagePlural = counterMessageContainer.attr("data-message-plural");
    var message = counterMessageContainer.attr("data-message-single");

    var left = maxchar - elem.val().length;
    if (left < 0) {
        left = 0;
    }

    if( left > 1 ) {
        message = messagePlural;
    }

    if(elem.val().length > maxchar) {
        elem.val(elem.val().substr(0, maxchar));
    }

    message = message.replace("{char-left}", left);

    counterMessageContainer.html("");
    counterMessageContainer.html( message );
    //counterMessageContainer.html(left + " " + message);
});

Dom.body.on("keyup paste keydown","[data-field] input[type='text'],[data-field] input[type='password'],[data-field] textarea",function(e){
    "use strict";
    var field=Field.getParent($(this));
    field.hasChanged();
});
Dom.body.on("change click","[data-field] input[type='radio'],[data-field] input[type='checkbox'], [data-field] select",function(e){
    "use strict";
    var field=Field.getParent($(this));
    field.hasChanged();
});



//--------------other fields-----------------





;
/**
 * Representation of an Ajax Api return
 */
var ApiReturn=function(json){
    "use strict";
    this.success=false;
    /**
     *
     * @type {String} An url where to redirect
     */
    this.redirect=null;
    /**
     *
     * @type {String[]} List of messages
     */
    this.messages=[];
    /**
     *
     * @type {String[]} List of errors
     */
    this.errors=[];

    this.template="";
    /**
     * Html to interact with the user...most of time it will be displayed in a popin
     * @type {String}
     */
    this.uiDialog=null;
    /**
     * If we have to display captcha
     * @type {Boolean}
     */
    this.captcha=false;

    this.all = null;

    console.log("return type="+typeof json);

    if(!json || (typeof json) != "object"){
        this.errors.push("invalid json return");
        this.messages.push("invalid json return");
    }else{
        this.success=json.success;
        this.messages=json.messages;
        this.redirect=json.redirect;
        this.errors=json.errors;
        this.template=json.template;
        this.uiDialog=json.uiDialog;
        this.captcha=json.captcha;
        this.all=json.all;
        this.processAfter=json.processAfter;
    }
};;
/**
 * UiDialog class provide events between HTML content user interaction and other classes.
 * Most of time, it is used with events listeners.
 */
var UiDialog=function(jq){
    "use strict";
    var me=this;
    /**
     *
     * @type {jQuery}
     */
    var jq=this.jq=jq;
    if(!jq.attr("data-ui-dialog")){
        jq.attr("data-ui-dialog","true");
    }

    //unique instance
    console.log("maybe new UiDialog...");
    if(jq.data("uidialog")){
        return jq.data("uidialog");
    }
    jq.data("uidialog",this);

    console.log("new UiDialog");
    /**
     * The events, the big deal is here
     * @type {EventDispatcher}
     */
    this.events=new EventDispatcher();


    this.dispatchJson=function(json){
        console.log("dispatch json");
        console.log(json);
        me.events.dispatchEvent(EVENT_UI_DIALOG_JSON,json);
    }
    this.dispatchYes=function(){
        console.log("dispatch yes");
        me.events.dispatchEvent(EVENT_UI_DIALOG_YES,me);
    }
    this.dispatchNo=function(){
        console.log("dispatch yes");
        me.events.dispatchEvent(EVENT_UI_DIALOG_NO,me);
    }


}
//------------static----------------
/**
 *
 * @param jq
 * @return {UiDialog}
 */
UiDialog.getParent=function(jq){
    "use strict";
    var f=$(jq).closest("[data-ui-dialog]");
    return new UiDialog(f);
}

//----------selectors---------------

UiDialog.CTRL={
    YES:"[data-ui-dialog-action='yes']",
    NO:"[data-ui-dialog-action='no']",
    JSON:"[data-ui-dialog-action='json']"
}


//----------events-------------------

var EVENT_UI_DIALOG_YES="event-ui-dialog-yes";
var EVENT_UI_DIALOG_NO="event-ui-dialog-no";
var EVENT_UI_DIALOG_JSON="event-ui-dialog-json";

Dom.body.on("click",UiDialog.CTRL.JSON,function(e){
    e.preventDefault();
    "use strict";
    var json=jQuery.parseJSON($(this).find(".json").text());
    var ui=UiDialog.getParent($(this));
    ui.dispatchJson(json);
})
Dom.body.on("click",UiDialog.CTRL.YES,function(e){
    e.preventDefault();
    "use strict";
    var ui=UiDialog.getParent($(this));
    ui.dispatchYes();
})
Dom.body.on("click",UiDialog.CTRL.NO,function(e){
    e.preventDefault();
    "use strict";
    var ui=UiDialog.getParent($(this));
    ui.dispatchNo();
});
/**
 * Manage Social Network Share
 *
 * @type {{init: Function}}
 */
var Share = {
    init: function() {
    }
};

Share.CTRL =  {
    ACTION_FB : "a[href='#Facebook']",
    ACTION_TWITTER : "a[href='#Twitter']",
    ACTION_GOOGLE : "a[href='#Google']",
    ACTION_PIN : "a[href='#Pinterest']",
    ACTION_MAIL : "a[href='#Mail']",
    ACTION_WEIBO : "a[href='#Weibo']"
};

Share.bitly = {
    login : "shicpi",
    api_key : "R_49013f12d89bde0cab5832a70a871614",
    short_url : "",
    sharehref : "",
    popup : ""
};

Share.get_short_url = function (long_url, func)
{
    var h;
    if(document.location.protocol=="https:"){
        h="https://api-ssl.bitly.com";
    }else{
        h="http://api.bitly.com";
    }

    $.getJSON(
        h+"/v3/shorten?callback=?",
        {
            "format": "json",
            "apiKey": Share.bitly.api_key,
            "login": Share.bitly.login,
            "longUrl": long_url
        },
        function(response)
        {
            func(response.data.url);
        }
    );
};

/**
 * Just display a pop up
 * @param url string of the site we want to show
 */
Share.show_popup = function(width, height, url) {
    var leftPosition, topPosition;
    //Allow for borders.
    leftPosition = (window.screen.width / 2) - ((width / 2) + 10);
    //Allow for title and status bars.
    topPosition = (window.screen.height / 2) - ((height / 2) + 50);
    var windowFeatures = "status=no,height=" + height + ",width=" + width + ",resizable=yes,left=" + leftPosition + ",top=" + topPosition + ",screenX=" + leftPosition + ",screenY=" + topPosition + ",toolbar=no,menubar=no,scrollbars=no,location=no,directories=no";
    Share.bitly.popup = window.open(url, '', windowFeatures);
};

/**
 * Allow to force the vertical share display on a specific position
 * @param topVal
 */
Share.forceTopTo = function(topVal) {
    $(".fixed-right-share-nav").css({"top":topVal});
};

Share.initPinElements = function() {
    // pinterest attribute to allow pin just on some images
    // by default we pin all things inside the text-height who is the main div container
    Dom.body.find('div.screen-height img[pin!="pin"]').attr("pin", "pin");
};

/**
 * Tells if current share buttons are on a nanosite page
 */
Share.isInNanosite = function() {
    return $(".main-content .nanosite-main").length == 1;
};

/**
 * Get the nanosite name
 */
Share.getNanositeName = function() {
    var id = $(".main-content .nanosite-main").attr('id');
    return id.substr(9);
};


/**
 * Event on facebook share
 */
Share.shareFacebook = function(ev) {
    ev.preventDefault();

    var u = location.href;
    var t = document.title;
    var url = 'http://www.facebook.com/sharer.php?u='+encodeURIComponent(u)+'&t='+encodeURIComponent(t);
    Share.show_popup(626, 436, url);

    Stats.action("Share-Facebook");
};
Dom.body.on("click", Share.CTRL.ACTION_FB, Share.shareFacebook);

/**
 * Event on twitter share
 */
Share.shareTwitter = function(ev) {
    ev.preventDefault();
    var elem=$(this);

    var u = location.href;
    var t = document.title;

    Stats.action("Share-Twitter");

    var url = 'http://twitter.com/share?text='+encodeURIComponent(t)+'&url=';
    Share.bitly.sharehref = url;
    Share.show_popup(626, 436, url);
    Share.get_short_url(u, function(short_url) {
        Share.bitly.short_url = short_url;
        Share.bitly.popup.location.href = Share.bitly.sharehref + short_url;

    });
};
Dom.body.on("click", Share.CTRL.ACTION_TWITTER, Share.shareTwitter);

/**
 * Event on google+ share
 */
Share.shareGooglePlus = function(ev) {
    ev.preventDefault();
    var elem=$(this);

    var u = location.href;
    var t = document.title;

    Stats.action("Share-Google");

    var url = 'https://plus.google.com/share?url=';
    Share.bitly.sharehref = url;
    Share.show_popup(626, 436, url);

    Share.get_short_url(u, function(short_url) {
        Share.bitly.short_url = short_url;
        Share.bitly.popup.location.href = Share.bitly.sharehref + short_url;
    });
};
Dom.body.on("click", Share.CTRL.ACTION_GOOGLE, Share.shareGooglePlus);


/**
 * Event on pinterest share
 */
Share.sharePinterest = function(ev) {
    ev.preventDefault();
    var elem=$(this);

    selectPinImage('','', true);

    Stats.action("Share-Pinterest");
};
Dom.body.on("click", Share.CTRL.ACTION_PIN, Share.sharePinterest);


/**
 * Event on weibo share
 */
Share.shareWeibo = function(ev) {
    ev.preventDefault();
    var elem=$(this);

    var u = location.href;
    var t = document.title;

    var url = 'http://service.weibo.com/share/share.php?appkey=&title=' + encodeURIComponent(t) + '&pic=&ralateUid=&url=' + encodeURIComponent(u);
    Share.show_popup(626, 436, url);

    Stats.action("Share-Weibo");
};
Dom.body.on("click", Share.CTRL.ACTION_WEIBO, Share.shareWeibo);



/**
 * Event on email share
 */
Dom.body.on("click", Share.CTRL.ACTION_MAIL, function(ev) {
    ev.preventDefault();
    var elem=$(this);

    alert("share mail");
});
;
/**
 * Used to handle stats.
 *
 * TODO: Merge GTM and Stats together and then simplify action()
 */
var Stats = {

    gtmActive: false,

    consoleLogActive: false,

    // Page information coming from the backend
    jsonData: null,

    _init: function() {
        this.gtmActive = ControllerVars.Stats.gtmActive;
        this.consoleLogActive = ControllerVars.Stats.consoleLogActive;

        if (document.URL.match(/.*gtm_debug.*/)){
            this.consoleLogActive = true;
        }

        Gtm.init();
    },

    /**
     * Sets the objects vars with the values coming from the backend
     * and initializes GTM.
     */
    initAndCall: function () {
        // init if GTM is already loaded, wait on the event otherwise
        if (window.AnalyticsBy55) {
            Stats._init();
        } else {
            jQuery('document').on('piaget.pageLoad', Stats._init);
        }
    },

    actionIframe: function() {},

    /**
     * Returns a hit with the given action.
     *
     * @param {string} action The action
     * @returns {string}
     */
    getPageAndAction: function (action) {
        return Stats.jsonData.fullPage + "/action/" + action + "/action/";
    },

    /**
     * Return true if we're currently
     * on a product page.
     *
     * @returns {boolean}
     */
    isOnProductPage: function () {
        return jQuery('.container[data-model-type="Product"]').length > 0 || jQuery('.product-page[data-model-type="Product"]').length > 0
    },

    /**
     * Returns true if we're currently
     * on a collection page.
     *
     * @returns {boolean}
     */
    isOnCollectionPage: function () {
        return jQuery('body[data-page-type="Collections"]').length > 0
    },

    /**
     * Return true if we're currently
     * on an account creation page.
     *
     * @returns {boolean}
     */
    isAccountCreationPage: function () {
        return jQuery('form[data-form="account_create"]').length > 0
    },

    /**
     * Pushes some information to the dataLayer depending
     * on the given action. If the given action is not a share
     * action the a virtualPage is gonna be pushed.
     *
     * @param {string} act
     */
    action: function (act) {
        try{
            var pageAndAction = Stats.getPageAndAction(act);
            Stats.log(["Stats.action", pageAndAction]);

            // do verification for form submit
            var n = pageAndAction.match("action/(.*?)\/action");
            if (n[1].indexOf("post") !=-1) {
                act = "post/valid";
            }

            var action;
            switch (act) {

                /* handle social share */
                case "Share-Facebook":

                    // The social action is different on
                    // desktop and mobile.
                    // This is used to recognize mobile or
                    // desktop hit.
                    if (Browser.isMobile) {
                        action = 'share on social networks';
                    } else {
                        action = 'share';
                    }

                    Gtm.socialBookmark('facebook', action, pageAndAction, pageAndAction);

                    // Tracks clicks on social networks on product page
                    if (Stats.isOnProductPage()) {
                        Gtm.send({
                            event: 'clickOnSocialLinkOnProductPage',
                            socialNetwork: 'Facebook'
                        });
                    }

                    break;

                case "Share-Twitter":

                    // The social action is different on
                    // desktop and mobile.
                    // This is used to recognize mobile or
                    // desktop hit.
                    // This action is completely different
                    // on each device. This is due to their
                    // implementation into GTM.
                    if (Browser.isMobile) {
                        action = 'share on social networks';
                    } else {
                        action = 'tweet';
                    }

                    Gtm.socialBookmark('twitter', action, pageAndAction, pageAndAction);

                    // Tracks clicks on social networks on product page
                    if (Stats.isOnProductPage()) {
                        Gtm.send({
                            event: 'clickOnSocialLinkOnProductPage',
                            socialNetwork: 'Twitter'
                        });
                    }

                    break;

                case "Share-Google":

                    // The social action is different on
                    // desktop and mobile.
                    // This is used to recognize mobile or
                    // desktop hit.
                    if (Browser.isMobile) {
                        action = 'share on social networks';
                    } else {
                        action = 'share';
                    }

                    Gtm.socialBookmark('google-plus', action, pageAndAction, pageAndAction);

                    // Tracks clicks on social networks on product page
                    if (Stats.isOnProductPage()) {
                        Gtm.send({
                            event: 'clickOnSocialLinkOnProductPage',
                            socialNetwork: 'Google'
                        });
                    }

                    break;

                case "Share-Weibo":

                    // The social action is different on
                    // desktop and mobile.
                    // This is used to recognize mobile or
                    // desktop hit.
                    if (Browser.isMobile) {
                        action = 'share on social networks';
                    } else {
                        action = 'share';
                    }

                    Gtm.socialBookmark('weibo', action, pageAndAction, pageAndAction);

                    // Tracks clicks on social networks on product page
                    if (Stats.isOnProductPage()) {
                        Gtm.send({
                            event: 'clickOnSocialLinkOnProductPage',
                            socialNetwork: 'Weibo'
                        });
                    }

                    break;

                case "Share-Pinterest":

                    // The social action is different on
                    // desktop and mobile.
                    // This is used to recognize mobile or
                    // desktop hit.
                    if (Browser.isMobile) {
                        action = 'share on social networks';
                    } else {
                        action = 'share';
                    }

                    Gtm.socialBookmark('pinterest', action, pageAndAction, pageAndAction);

                    // Tracks clicks on social networks on product page
                    if (Stats.isOnProductPage()) {
                        Gtm.send({
                            event: 'clickOnSocialLinkOnProductPage',
                            socialNetwork: 'Pinterest'
                        });
                    }

                    break;

                default :
                    Gtm.virtualPageView(pageAndAction);
            }
        } catch(e) {
            Stats.log(e);
        }
    },

    /**
     * Prints the given information in the console with time
     *
     * @param {object} loggable The information that need to be logged
     */
    log: function (loggable) {
        if (Stats.consoleLogActive) {
            var time = new Date().getTime();
            if(typeof(console) != 'undefined') {
                console.log("----- Stats logs ---------" + time);
                console.log(loggable);
                console.log("--------------------------" + time);
            }
        }
    }
};

Stats.CTRL = {
    DATA_STAT_EVENT_CALL : "data-stat-event-call",
    DATA_STAT_EVENT_CATEGORY : "data-stat-event-category",
    DATA_STAT_EVENT_REDIRECTION : "data-stat-event-redirection"
};

var Gtm = {

    GTMDATAATTRIBUTE: 'data-gtm-parameters',
    GTMDATAATTRIBUTE_LAZY: 'data-gtm-lazy-parameters',
    GTMURLKEY: '#gtm-parameters=',

    /**
     * Returns the percentage the user scroll
     * on the page.
     *
     * @returns {number}
     */
    getScrollPercentage: function () {
        var heightFromTop = jQuery(window).scrollTop(),
            screenHeight = jQuery(document).height(),
            windowHeight = jQuery(window).height();

        return (heightFromTop / (screenHeight - windowHeight)) * 100;
    },

    /**
     * Pushes a virtualPageView event in the dataLayer with the given page hit.
     * If the attribute name is not passed then it'll take the value 'piagetPage'.
     * This method is used to track all the pages like pop-in, search results, ...
     *
     * @param {string} pageHit The page hit
     * @param {string} attributeName The attribute name of the given pageHit that will be pushed to the dataLayer
     */
    virtualPageView: function (pageHit, attributeName) {

        if (!Stats.gtmActive) {
            return;
        }

        if (typeof(attributeName) !== 'string') {
            attributeName = 'piagetPage';
        }

        var parameters = {
            event: 'virtualPageview'
        };

        parameters[attributeName] = pageHit;

        dataLayer.push(parameters);

        Stats.log(["Gtm.virtualPageView call", parameters]);
    },

    /**
     * Logs and pushes the given parameters to the dataLayer.
     *
     * @param {object} parameters
     */
    send: function (parameters) {

        if(!Stats.gtmActive) {
            Stats.log(["Gtm.send call not done because GTM is not active", parameters]);
            return;
        }

        dataLayer.push(parameters);

        // Log the GTM call
        Stats.log(["Gtm.send call",parameters]);
    },

    /**
     * Logs and pushes a social event to the dataLayer.
     *
     * @param {string} network The network
     * @param {string} socialAction The action perform to the social Network (share, tweet, ...)
     * @param {string} opt_target
     * @param {string} opt_pagePath
     */
    socialBookmark: function (network, socialAction, opt_target, opt_pagePath) {

        if(!Stats.gtmActive){
            return;
        }

        var obj = {
            event: 'social',
            socialNetwork: network,
            socialAction: socialAction,
            socialTarget: opt_target,
            socialPage: opt_pagePath
        };

        dataLayer.push(obj);

        Stats.log(["Gtm.socialBookmark call", obj]);
    },

    /**
     * Tracks events on loaded elements.
     */
    trackLoadEvents: function () {
    },

    /**
     * Tracks click events.
     */
    trackClickEvents: function () {
        var me = this;

        // Track click on shop online button
        jQuery('#dropShopOnline').on('click', null, null, function () {
            Gtm.send({
                event: 'clickOnShopOnline'
            });
        });

        // Track click on sign in button
        jQuery('#dropLogin').on('click', null, null, function () {
            Gtm.send({
                event: 'clickOnSignin'
            });
        });

        // Track click on whishlist button
        jQuery('#dropWishlist').on('click', null, null, function () {
            Gtm.send({
                event: 'clickOnWishlist'
            });
        });

        // Tracks click on shopping bag button
        jQuery('#dropShoppingbag').on('click', null, null, function () {
            Gtm.send({
                event: 'clickOnShoppingBagHeader'
            });
        });

        // Tracks click on Newsletter link in the header
        // on desktop version
        Dom.body.on('click', '#menuNewsletter', null, function () {
            Gtm.send({
                event: 'clickOnNewsletter'
            });
        });

        // Track clicks social network in the footer
        Dom.body.on('click', '.social-footer a', function () {
            Gtm.send({
                event: 'clickOnSocialNetworkFooterLink',
                socialNetwork: jQuery(this).attr('data-social-network')
            });
        });

        // Tracks click on the concierge phone number in the footer
        var firstSelector = '.fixed-footer a[data-nav-ajax-stats="email-concierge"]',
            secondSelector = '.fixed-footer a[data-nav-ajax-stats="speak-with-concierge"]',
            goodSelector = (0 !== $(firstSelector).length) ? firstSelector : secondSelector;
        Dom.body.on('click', goodSelector, null, function () {
            Gtm.send({
                event: 'clickOnConciergeCallMeBack'
            });
        });

        // Tracks click on ring size dropdown download link
        Dom.body.on('click', '.product-presentation .dropdown-footer a', function () {
            Gtm.send({event: 'clickOnDownloadRingSizer'});
        });

        // Tracks click on the shipping selector in the footer
        if (jQuery('[' + FixedFooterSlides.CTRL.BUTTON_IDENTIFIER + '][data-fixed-footer-action-class="fixed-footer-shipping-to-open"]').length >= 0) {
            jQuery('[' + FixedFooterSlides.CTRL.BUTTON_IDENTIFIER + '][data-fixed-footer-action-class="fixed-footer-shipping-to-open"]').click(function (e) {
                e.preventDefault();
                Gtm.send({
                    event: 'clickOnShippingSelector'
                });
            });
        }

        // Track clicks on All products or Available for purchase online
        Dom.body.on('click', '.collection-page .js-fixed-magic.fixed-topbar .js_control', function () {
            Gtm.send({
                event: 'clickOnAllOrOnlineFilter',
                filterSelected: jQuery(this).attr('data-filter')
            });
        });

        // Tracks clicks on wedding collection filters
        Dom.body.on('click', '.js-collection-filters .filters a.js-check', null, function () {
            Gtm.send({
                event: 'clickOnWeddingFilter',
                filterSelected: jQuery(this).attr('data-filter')
            });
        });

        // Track clicks on "shop by phone" button
        Dom.body.on('click', '.product-presentation .btn[data-nav-ajax-receiver="popin"], ' +
        '#nanosite-900p [data-nav-ajax-stats=email-concierge]', function (e) {
            e.preventDefault();
            var params = {};
            if($("#nanosite-900p #p900p_altiplano_details").size() == 1){
                var sku = $(this).parents("[data-model-reference]").attr("data-model-reference");
                params = {
                    navigation:"Nano 900P",
                    productCategory: "WATCHES",
                    productCollection: "Altiplano",
                    productSKU:sku
                }
            }
            params.event = 'clickOnShopByPhone';
            Gtm.send(params);
        });

        // Tracks clicks on 360В° button on the product page
        Dom.body.on('click', '.product-medias .product-images-icons a.load-interaction-btn[data-rotation-iframe-url]', function () {
            Gtm.send({event: 'clickOn360Button'});
        });

        // Tracks clicks on zoom button on the product page
        Dom.body.on('click', '.product-medias .product-images-icons a.product-img-zoom-in', function () {
            Gtm.send({event: 'clickOnZoomButton'});
        });

        // Tracks clicks on carried button on the product page
        Dom.body.on('click', '.product-medias .product-images-icons a.load-carry-btn', function () {
            Gtm.send({event: 'clickOnCarriedButton'});
        });

        // Tracks clicks on engraving button on the product page
        Dom.body.on('click', '.product-presentation .engraving a', function () {
            Gtm.send({event: 'clickOnAddEngraving'});
        });

        // Tracks clicks on request information button on the product page
        Dom.body.on('click', '.product-presentation a[data-stat-event-call="request-information"]', function () {
            Gtm.send({event: 'clickOnRequestInformation'});
        });

        // Tracks clicks on Shipping, payment and returns on the product page
        Dom.body.on('click', '.product-presentation a[data-nav-ajax-stats="shipping-returns"]', function () {
            Gtm.send({event: 'clickOnShippingPaymentAndReturns'});
        });

        // Tracks clicks on More details on the product page
        Dom.body.on('click', '.product-presentation a.bottom.noprint', function () {
            Gtm.send({event: 'clickOnMoreDetails'});
        });

        // Tracks clicks on send an email to a friend on product page
        if (Stats.isOnProductPage()) {
            Dom.body.on('click', '.fixed-right-share-nav.noprint a[data-nav-ajax-stats="email-send-to-a-friend"]', function () {
                Gtm.send({
                    event: 'clickOnSocialLinkOnProductPage',
                    socialNetwork: 'Send to a friend'
                });
            });
        }

        // Tracks clicks on links in the left menu on the product page
        if (Stats.isOnProductPage()) {
            Dom.body.on('click', '.js-fixed-magic .text-menu a', null, function () {
                Gtm.send({
                    event: 'clickOnLeftMenuBelowProductInfo',
                    productLeftMenu: jQuery(this).attr('data-section')
                });
            });
        }

        // Tracks clicks on Download size guide link on the product page
        Dom.body.on('click', '.block-sections .properties .sizePDF', function () {
            Gtm.send({event: 'clickOnDownloadSizingGuide'});
        });

        // Tracks clicks on Call us at ... on the product page
        Dom.body.on('click', '.block-sections .pt1 a[data-nav-ajax-stats="email-concierge"]', function () {
            Gtm.send({event: 'clickOnCallUsAt'});
        });

        // Tracks clicks on Email the concierge link on the product page
        Dom.body.on('click', '.block-sections .pt1 a[data-nav-ajax-stats="email-contact"]', function () {
            Gtm.send({event: 'clickOnEmailConcierge'});
        });

        // Tracks scroll on create an account page
        if (Stats.isAccountCreationPage()) {

            jQuery(window).on('scroll', null, null, function () {
                Gtm.send({
                    event: 'userScrolls',
                    scrollLevel: me.getScrollPercentage().toString() + '%'
                });
            });
        }

        // Tracks clicks on social links on the whishlist page
        Dom.body.on('click', '.form-box.wishlist-detail a[href="#Share.WishList"]', function () {
            Gtm.send({
                event: 'clickOnSocialButtonFromWishlistPage',
                socialNetwork: jQuery(this).attr('data-model-type')
            });
        });

        // Tracks clicks on Send to a friend on the whishlist page
        Dom.body.on('click', '.form-box.wishlist-detail a[data-nav-ajax-stats="email-send-to-a-friend"]', function () {
            Gtm.send({
                event: 'clickOnSocialButtonFromWishlistPage',
                socialNetwork: 'Send to a friend'
            });
        });

        // Tracks clicks on Order a catalog button on catalog pages
        Dom.body.on('click', '.btn.bouton-light.noprint.pull-right[data-nav-ajax-stats="email-contact"]', null, function () {
            Gtm.send({
                event: 'clickOnOrderCatalogue'
            });
        });

        // When user clicks on Share on Piaget perfect match
        jQuery('#perfect-match-iframe').load(function(){

            var iframeBody = jQuery(this.contentDocument.getElementsByTagName('body')[0]);

            iframeBody
                .on('click', ".share [data-is-action='product-share']", null, function(){
                    Gtm.send({
                        event:'clickOnPerfectMatchShare'
                    });
                })
                .on('click', '.share-connect .fbconnect', null, function(){
                    Gtm.send({
                        event:'clickOnConnectWithFB'
                    });
                })
                .on('click', '.arrows .prev-left, .arrows .prev-right', null, function(){
                    Gtm.send({
                        event:'clickOnLesserThanButton'
                    });
                })
                .on('click', '.arrows .next-left, .arrows .next-right', null, function(){
                    Gtm.send({
                        event:'clickOnGreaterThanButton'
                    });
                });
        });

        jQuery(".product-minisite-section iframe").load(function(){
            var iframeBody = jQuery(this.contentDocument.getElementsByTagName('body')[0]);

            iframeBody.on('click', 'a', null, function(){
                Gtm.send({
                    event:'interactWithPromotion',
                    promotionInteraction: 'click on mini-site link'
                });
            });
        });

        // Tracks when the user click on the search filters
        jQuery(
            '#search-form-scope .scope-label, ' +
            '#search-form-scope .property-radio-group label, ' +
            '#search-form-scope .property-value label'
        ).on('click', null, null, function () {
            Gtm.send({
                event: 'useSearchFilter',
                filterName: jQuery(this).text()
            });
        });

        // PIA-1204
        Dom.body.on('open', '.checkout [data-accordion-name="order_recap"]', function () {
            Gtm.send({
                'event': 'orderRecap',
                'piagetDevice': Stats.site,
                'market': Stats.market,
                'language': Stats.langue
            });
        });

        var homeDeliverySelector = '.checkout [data-attribute="delivery_mode"] [data-value="home"].box--selected';
        // PIA-1204
        Dom.body.on('click', '.checkout button[data-action="checkout/shippingOption"]', function () {
            var shippingChoice =
                0 !== $(homeDeliverySelector).length
                    ? 'delivery'
                    : 'boutique_pickup';

            Gtm.send({
                'event': 'deliveryMethod',
                'piagetDevice': Stats.site,
                'market': Stats.market,
                'language': Stats.langue,
                'shippingChoice' : shippingChoice
            });
        });

        // PIA-1204
        Dom.body.on('open', '.checkout [data-accordion-name="options"]', function () {
            var shippingChoice =
                0 !== $(homeDeliverySelector).length
                    ? 'delivery'
                    : 'boutique_pickup';

            Gtm.send({
                'event': 'optionsSection',
                'piagetDevice': Stats.site,
                'market': Stats.market,
                'language': Stats.langue,
                'shippingChoice' : shippingChoice
            });
        });

        // PIA-1204
        Dom.body.on('click', '.checkout [data-accordion-name="options"] button.continue', function () {
            var shippingChoice =
                0 !== $(homeDeliverySelector).length
                    ? 'delivery'
                    : 'boutique_pickup';

            var inputs = $('.checkout [data-accordion-name="options"] input:checked');
            if (0 < inputs.length) {
                var handle = [];
                inputs.each(
                    function (index, element) {
                        handle.push(element.getAttribute('name'));
                    }
                );
                var optionsCheckout = handle.join('+');

                Gtm.send({
                    'event': 'checkoutOptions',
                    'optionsCheckout': optionsCheckout
                });
            }

            Gtm.send({
                'event': 'paymentSection',
                'piagetDevice': Stats.site,
                'market': Stats.market,
                'language': Stats.langue,
                'shippingChoice' : shippingChoice
            });
        });
    },

    trackIframeEvents: function(iframe){

        var me = this;

        var iframeBody = jQuery(iframe.contentDocument.getElementsByTagName('body')[0]);

        iframeBody.off('click', '.slideshow__item--0 a, .slideshow__item--1 a, .slideshow__item--2 a');

        iframeBody
            .on('click', '.slideshow__item--0 a', null, function(e){
                e.preventDefault();
                var sliderTheme = "Watches";
                var sliderPosition = 1;
                var href = $(this).attr('href');
                var url = me.appendPlainParametersToURL( href, {
                    event: 'clickOnMainSlider',
                    category: 'Homepage',
                    sliderId: 'Christmas-2014',
                    sliderTheme: sliderTheme,
                    sliderPosition: sliderPosition
                });
                window.location = url;
            })
            .on('click', '.slideshow__item--1 a', null, function(e){
                e.preventDefault();
                var sliderTheme = "Jewelry";
                var sliderPosition = 2;
                var href = $(this).attr('href');
                var url = me.appendPlainParametersToURL( href, {
                    event: 'clickOnMainSlider',
                    category: 'Homepage',
                    sliderId: 'Christmas-2014',
                    sliderTheme: sliderTheme,
                    sliderPosition: sliderPosition
                });
                window.location = url;
            })
            .on('click', '.slideshow__item--2 a', null, function(e){
                e.preventDefault();
                var sliderTheme = "Limelight Diamonds";
                var sliderPosition = 3;
                var href = $(this).attr('href');
                var url = me.appendPlainParametersToURL( href, {
                    event: 'clickOnMainSlider',
                    category: 'Homepage',
                    sliderId: 'Christmas-2014',
                    sliderTheme: sliderTheme,
                    sliderPosition: sliderPosition
                });
                window.location = url;
            })
            .on('click', '.slideshow__navigation .icon-arrow-right', null, function(){
                Gtm.send({
                    event:'clickOnGreaterThanButton',
                    sliderId: 'Christmas-2014'
                });
            })
            .on('click', '.slideshow__navigation .icon-arrow-left', null, function(){
                Gtm.send({
                    event:'clickOnLesserThanButton',
                    sliderId: 'Christmas-2014'
                });
            })
            .on('click', '.slideshow__pagination__item--0', null, function(){
                Gtm.send({
                    event: 'clickOnBanner',
                    bannerTheme: "Watches",
                    bannerPosition: 1
                });
            })
            .on('click', '.slideshow__pagination__item--1', null, function(){
                Gtm.send({
                    event: 'clickOnBanner',
                    bannerTheme: "Jewelry",
                    bannerPosition: 2
                });
            })
            .on('click', '.slideshow__pagination__item--2', null, function(){
                Gtm.send({
                    event: 'clickOnBanner',
                    bannerTheme: "Limelight Diamonds",
                    bannerPosition: 3
                });
            });

    },

    /**
     * Tracks click events on destination page by URL.
     */
    trackClickEventsByURL: function () {
        var inst = this;

        // Add the gtm-parameters attribute value to the URL then redirect
        Dom.body.on('click', 'a[' + this.GTMDATAATTRIBUTE + ']', null, function (event) {
            event.preventDefault();
            window.location = inst.appendDataAttributeParametersToURL(jQuery(this).attr('href'), jQuery(this), null);
        });
    },

    /**
     * Track page loads.
     */
    trackPageLoad: function () {
        var host = window.location.hostname;
        var path = window.location.pathname;

        if('/checkout/confirmation' === path) {
            var oi = window.__OrderInfo;
            var os = window.__OrderShippingInfo;

            Gtm.send({
                'pagePath': window.location.pathname,
                'transactionId': oi.transactionId,
                'transactionTotal': +oi.transactionTotal,
                'transactionTax': +oi.transactionTax,
                'transactionShipping': 0,
                'transactionAffiliation': 0,
                'transactionCoupon': '',
                'transactionProducts': oi.transactionProducts
            });

            Gtm.send({
                'event': 'checkoutOptionsPostTransaction',
                'optionsCheckout': window.__OrderOptionsInfo
            });

            Gtm.send({
                'event': 'Purchase',
                'paymentMethod': window.__OrderPaymentInfo
            });

            Gtm.send({
                'event': 'deliveryChoiceCheckout',
                'shippingChoice': os.shippingChoice,
                'boutiqueName': os.boutiqueName
            });
        }
    },

    /**
     * Encodes and append plain parameters to the
     * given URL or the current one by passing 'current' as url value.
     *
     * @param {string} url The URL without any hash that will have the parameters or 'current'
     * @param {object} parameters The parameters to add to the URL
     * @returns {string|undefined}
     */
    appendPlainParametersToURL: function (url, parameters) {
        var encodedParameters = this.encodeParameters(parameters);

        return this.appendParametersToURL(url, encodedParameters);
    },

    /**
     * Gets the encoded GTM parameters from the data attribute 'data-gtm-parameters'
     * or 'data-gtm-lazy-parameters' if 'lazy' has been as parameterType and append
     * them to the given URL or the current one by passing 'current' as url value.
     * If there is no data attribute then it returns the given URL.
     *
     * @param {string} url The URL without any hash that will have the parameters or 'current'
     * @param {jQuery} element The element that has the data attribute with the parameters
     * @param {string|null} parameterType The data attribute alias ('lazy')
     * @returns {string}
     */
    appendDataAttributeParametersToURL: function (url, element, parameterType) {
        var encodedParameters = this.getParametersFromDataAttribute(element, parameterType);

        if (typeof encodedParameters != 'undefined') {
            return this.appendParametersToURL(url, encodedParameters);
        } else {
            return url;
        }
    },

    /**
     * Gets the encoded GTM parameters from the data attribute 'data-gtm-parameters'
     * or 'data-gtm-lazy-parameters' if 'lazy' has been as parameterType.
     *
     * @param element
     * @param {string|null} parameterType Pass 'lazy' if you want to get the data-gtm-lazy-parameters value
     * @returns {string|null}
     */
    getParametersFromDataAttribute: function (element, parameterType) {
        return (parameterType === 'lazy') ? element.attr(this.GTMDATAATTRIBUTE_LAZY) : element.attr(this.GTMDATAATTRIBUTE);
    },

    /**
     * Appends the given encoded parameters to the given URL
     * or the current one by passing 'current' as url value.
     *
     * @param {string} url The URL without any hash that will have the parameters or 'current'
     * @param {string} encodedParameters The encoded parameters
     * @returns {string|undefined}
     */
    appendParametersToURL: function (url, encodedParameters) {

        if (url === 'current') {
            window.location.hash = this.GTMURLKEY + encodedParameters
        } else {
            return url +  this.GTMURLKEY + encodedParameters
        }
    },

    /**
     * Pushes the GTM the parameters in the dataLayer from
     * the URL and then removes them.
     */
    sendParametersFromURL: function () {
        var parameters = this.getParametersFromURL();

        if (parameters) {
            Gtm.send(parameters);
            this.removeParametersFromUrl();
        }
    },

    /**
     * Gets and decodes the GTM parameters
     * from the URL.
     *
     * @returns {Object|null}
     */
    getParametersFromURL: function () {
        if (document.URL.indexOf(this.GTMURLKEY) > 0) {
            var encodedParameters = document.URL.substr(document.URL.indexOf(this.GTMURLKEY) + this.GTMURLKEY.length);
            return this.decodeParameters(encodedParameters);
        }

        return null;
    },

    /**
     * Removes the GTM parameters
     * from the URL.
     */
    removeParametersFromUrl: function () {
        var url = document.URL.substr(0, document.URL.indexOf(this.GTMURLKEY));
        if(typeof history.pushState == 'function'){
            history.pushState({}, document.title, url);
        }else{
            window.location.hash = '';
        }
    },

    /**
     * Decodes the given string
     * and returns an object containing
     * the key and values from it.
     *
     * @param string
     * @returns {object}
     */
    decodeParameters: function (string) {
        var parameters = {},
            decodedString;

        decodedString = decodeURIComponent(string);
        jQuery.each(decodedString.split('__&__'), function (key, rawParameter) {
            var parts = rawParameter.split('__=__');
            parameters[parts[0]] = parts[1];
        });

        return parameters;
    },

    /**
     * Separates the given parameters by '__&__', the
     * key and value by '__=__'.
     * Then the string is encoded for URL (RFC 3986).
     *
     * @param parameters
     * @returns {string}
     */
    encodeParameters: function (parameters) {
        var encodedParameters = '';

        jQuery.each(parameters, function (key, value) {
            encodedParameters += (encodedParameters) ? '__&__' : '';
            encodedParameters += key;
            encodedParameters += (value) ? '__=__' + value : '';
        });

        return encodeURIComponent(encodedParameters);
    },

    /**
     * Initializes the event tracking.
     * This method must be called after the Stats.initAndCall()
     * method in order to be sure that GTM is activated.
     */
    init: function () {
        this.trackPageLoad();
        this.trackLoadEvents();
        this.trackClickEvents();
        this.trackClickEventsByURL();
        this.sendParametersFromURL();

        // Provide 3 variables to allow any external tracking script to generate virtualPageEvent
        this.site = Stats.jsonData.stat_site;
        this.market = Stats.jsonData.stat_market;
        this.langue = Stats.jsonData.stat_langue;
    }
};
;
/**
 * The main Piaget.com object to manage the website.
 * @type {Object}
 */
var Piaget = {
    pageJsonData : {}
};

/**
 * Init Page Json Data
 * Page title, desc, stats data etc.
 */
Piaget.initPageJsonData = function () {
    Piaget.pageJsonData = jsonData;
    Stats.jsonData = Piaget.pageJsonData;
};

Piaget.events = new EventDispatcher();

/**
 * Manage humans vs robots displays
 */
Piaget.initSEO=function(){
    $(".countries-footer [data-text]").each(function(){
        var elem = $(this);
        elem.html(elem.attr("data-text"));
    });
};

// Remove highlight on the UK or Other countries menu item to match the country
// the user is currently in
Piaget.fixActiveUkCountry = function() {
    var isUkParam = Utils.getUrlParam('uk');

    if(isUkParam == '1') {
        Cookie.setRawCookie('isUk', 1);
    }
    else if(isUkParam == '0') {
        Cookie.setRawCookie('isUk', 0, -1);
    }

    var isUk = Cookie.getRawCookie('isUk') == '1';
    var inactiveElementSelector = isUk ? '.country-en-eu' : '.country-en-uk';

    $('.countries-footer ' + inactiveElementSelector).removeClass('active');

    // We also need to change the text "Country: ..." to reflect the correct
    // selected country
    if(isUk) {
        $('#current-country span.value').text(
            $('.countries-footer a.active span[data-text]').data('text')
        );
    }
};

Piaget.adaptFooterSize = function() {
    var $container = $(".js-fixed-footer-slides .mask").first(),
        $footerContainer = $container.find('.container').first();

    var height = $footerContainer.height();

    $container.find("> .countries-footer").css({
        'height': 2000,
        'top': height
    });
    $container.find(".list-countries.padded").css({
        'min-height': height - 45
    });
};
;
/**
 * The main Piaget.com object to manage the website.
 *
 * @type {Object}
 */
var PiagetCom = {

    Loading:function(target) {

        target = $(target);
        this.events=new EventDispatcher();
        var me = this;
        var inside = $("<div/>");
        inside.addClass("loading-box-inside");
        inside.addClass("marged");


        this.setLoading = function () {
            target.addClass("loading-box");
            target.append(inside);
            TweenLite.fromTo(
                inside,
                0.5,
                {css:{opacity:0}},
                {css:{opacity:"1"},
                    ease:Linear.easeNone,
                    onComplete:function () {
                        me.events.dispatchEvent("onStateLoading");
                    }
                }
            );

        };

        this.setNormal=function(){
            target.append(inside);
            TweenLite.to(
                inside,
                0.5,
                {
                    css:{opacity:0},
                    ease:Linear.easeNone,
                    onComplete:function(){
                        target.removeClass("loading-box");
                        inside.remove();
                    }
                }
            );
        }

    }
};

PiagetCom.events=new EventDispatcher();

PiagetCom.init = function () {

    if(Browser.isIE){
        Dom.body.addClass("stupid-ie");
    }

    // our friend ie
    MsIe.refresh();

    Nav.init();
    FixedFooter.init();

    //resize listener
    $(window).on("resize orientationchange", function () {
        if(Stage.hasChanged()){ //thank you ie <=8 for this fabulous infinite loop
            setTimeout(function(){
                PiagetCom.initAfterResize(true);
            },100)

        }
    });

    //scroll listener
    if(!Browser.isIE6){
        $(window).on("scroll", function () {
            PiagetCom.onScroll();
        });
    }

    PiagetCom.initAfterAjax();
    Piaget.initPageJsonData();

    //
    PiagetCom.initBasicSlideShow();

    //mouse move stuff
    MouseEventManager.init();

    Stats.initAndCall();

    Localization.checkLocalization(function(domPopIn) {
        domPopIn = $(domPopIn);

        Gtm.send({event: 'footerSelectorLoads'});

        PopIn.getContainer();
        PopIn.container.empty();
        PopIn.container.append(domPopIn);
        var popIn = new PopIn(domPopIn);
        popIn.show();

        $('body').on('click', '.refuse-domain-suggestion', function() {
            $('#choose-location-popin button.close').click();
        });

        // Instrument popin actions
        $('body').on('click', '#choose-location-popin button.close', function () {
            Localization.updateCookieIfNeeded(true);

            var domainId = $('#popin-domain-suggestion').data('suggested-domain');
            var link = $('.link-to-domain-'+domainId)[0];
            Gtm.send({
                'event':'footerSelectorRejected',
                'country': $(link).find("[data-text-en]").data("text-en")
            });
        });
        $('body').on('click', 'button.accept-domain-suggestion', function(){
            Localization.updateCookieIfNeeded(false);
            Localization.jumpToSuggestedDomain();
        });
    });

    Piaget.initSEO();
    PiagetCom.events.dispatchEvent(EVENT_INIT);
};


/**
 * Should be called after each ajax call. Guys, try to keep it minimal by using relay event on clicks.
 */
PiagetCom.initAfterAjax = function (elem) {

    Nav.autoLoads();
    ContainerSpansAuto.initAll();
    ContainerFull.initAll();

    PiagetCom.initAfterResize(true);

    MsIe.refresh();
    //listener on images loading and cached image prevention
    $(".js-full-screen img").one('load',function () {
        PiagetCom.initAfterResize();
    }).each(function () {
            if (this.complete) $(this).load();
    });

    VideoPlayer.initAll();
    SlideShow.fromDom(Dom.body);
    Slider.initAfterAjaxAll(elem);
    ProductTileHover.initAll();
    ProductItemFooter.initAll();
    FixedMagic.initAll();

    PiagetCom.onScroll();
    PiagetCom.setColorEffect();
    PiagetCom.initMouseMoves();
    PiagetCom.initSwfs();
    PiagetCom.events.dispatchEvent(EVENT_PIAGET_COM_AFTER_AJAX);
    Share.initPinElements();

    // put a data touch over for all roll hover target if its a mobile support
    if(Browser.isTouchDevice){
        $("[data-is-touchable]").attr("data-touch-over", "step1");
    }
};

PiagetCom.disableSwfs=function(){
    $(".visible-swf").css("display","none");
    $("[data-swf-alternative]").css("display","block");
};

PiagetCom.initSwfs=function(){
    function loadHtmlAlternative(url,jq){
        jq.css("display","block");
        jq.text(" ");
        var loader=Nav.navAutoLoadOne(jq,url);
    }

    var all=$(".js-swf");
    for(var i=0;i<all.length;i++){
        var jq=$(all[i]);
        jq.removeClass("js-swf");
        // display it to none
        jq.css("display", "none");

        try{
        var json=jQuery.parseJSON(jq.text());
        json.jq=jq;
        }catch(e){}

        // if its an iframe
        if(String(jq[0].tagName).toLowerCase()=="iframe"){
            jq.css("display", "block");
        }
        // its a flash
        else{
            if(Browser.isFlash){

                var host = window.location.hostname;

                if( window.location.hostname.indexOf("secure")>-1 ) {
                    //secure
                    host = "https://" + host;
                } else {
                    host = "http://" + host;
                }

                json.swfUrl = host + "/" + json.swfUrl;

                swfobject.embedSWF(
                    json.swfUrl,
                    json.uid,
                    json.width, json.height, "10.0.0", "",
                    json.flashVars,
                    {
                        bgcolor:"#"+json.background,
                        menu:"false",
                        base:json.swfUrl,
                        wmode:json.wMode,
                        allowfullscreen:"true",
                        AllowScriptAccess:"always"
                    },
                    "",
                    function (e) {
                        if (!e.success) {
                            if(json.ajaxAlternative){

                                json.jq.removeClass("visible-swf")
                                loadHtmlAlternative(json.ajaxAlternative,json.jq);
                            }else{
                                PiagetCom.disableSwfs();
                            }

                        }else{

                            $("[data-swf-alternative='"+json.uid+"']").css("display","none");

                        }
                    }
                );

            }else{
                if(json.ajaxAlternative){
                    json.jq.removeClass("visible-swf")
                    loadHtmlAlternative(json.ajaxAlternative,json.jq);
                }else{
                    PiagetCom.disableSwfs();
                }

            }
        }
    }
};

/**
 * Initialize the mouse move, roll over, roll out events. This events should not be in relay because they are too expensive.
 */
PiagetCom.initMouseMoves=function(){
    /**
     * Change image src on roll over
     * @param e
     */
    var changeImageOnRollOver=function(e){
        e.preventDefault();
        var dataThumbnail = $(this).attr(PiagetCom.CTRL.DATA_THUMBNAIL);
        var dataTarget = $(this).attr(PiagetCom.CTRL.DATA_TARGET);
        var dataReceiver = Dom.body.find("[" + PiagetCom.CTRL.DATA_RECEIVER+"='"+dataTarget+ "']");
        if(dataReceiver.length > 0 && dataThumbnail != dataReceiver.attr("src") ) {
            dataReceiver.attr("src", dataThumbnail).bind('onreadystatechange load', function(){
                if (this.complete) {
                    if(Browser.isIE6 || Browser.isIE7 || Browser.isIE8){
                        $(this).stop(true,true).hide().css("display", "block");
                    } else {
                        $(this).stop(true,true).hide().fadeIn(800);
                    }
                }

             });
        }
    };

    new MouseEventManager($("["+PiagetCom.CTRL.DATA_THUMBNAIL+"]"),"hover",changeImageOnRollOver);

    var showHideOnRollOver=function(e){
        "use strict";
        e.preventDefault();
        removeAllSurLayerIframe();
        TweenMax.to($("[data-is-roll-over-target]"),0,{css:{height:0}});

        if(e.type=="mouseenter"){
            var targetString=$(this).attr("data-roll-over-target");

            if( targetString == "") {
                TweenMax.to($("[data-is-roll-over-target]"),0,{css:{height:0}});
            } else {
                //we add a layer on top of the iframe in order to receive the exit event
                addSurLayerIframe($("iframe"));

                var target=$("[data-is-roll-over-target='"+targetString+"']");
                var h = 300;
                var containerH = target.find(".container").height();
                h = containerH + 60;

                target.find(".divider-right").css("height", h - 100 + "px")
                TweenMax.to(target,0.5,{css:{height:h}});

                if (QuickMenu && typeof(QuickMenu.closeMenu) == "function") {
                    QuickMenu.closeMenu();
                }
            }
        }
    }

    var addSurLayerIframe=function(elements){
        $.each(elements, function(i, v){
            var elem = $(v);
            elem.after("<div class='js_iframe_toplayer' style='position:absolute;left:"+elem.position().left+"px;top:"+elem.position().top+"px;width:"+elem.width()+"px;height:"+elem.height()+"px;'></div>");
        })
    }

    var removeAllSurLayerIframe=function(){
        $(".js_iframe_toplayer").remove();
    }

    new MouseEventManager($("[data-roll-over-target]"),"mouseenter",showHideOnRollOver);
    new MouseEventManager($("[data-roll-over-target]"),"exit",showHideOnRollOver,{top:25,bottom:400});
};

/**
 * Add an event to specified element(s) ONCE. If the event is already there it will not re-add it.
 * @param {jQuery} jqSelection One or more jquery dom objects where to add the event
 * @param {String} event The event to add...probably "hover"
 * @param {Function} fn The function to call on envent fired
 * @constructor
 */
var MouseEventManager=function(jqSelection,event,fn,rollOutCoordinates){
    "use strict";
    var el;
    var eventInitFlag="mouseeventinit"+event;
    for(var i=0;i<jqSelection.length;i++){
        el=$(jqSelection);
        //initialize event once!
        if(el.data(eventInitFlag)!="done"){
            el.data(eventInitFlag,"done");
            el.on(event,fn);
            if(rollOutCoordinates){
                rollOutCoordinates.event="exit";
                rollOutCoordinates.jq=el;
                MouseEventManager.rollOutListeners.push(rollOutCoordinates)
            }
        }

    }

};

MouseEventManager.init=function(){
    "use strict";
    $("body").mousemove(function(e){
        MouseEventManager.mouseY= e.clientY;
        var coords;
        for(var i=0;i<MouseEventManager.rollOutListeners.length;i++){
            coords=MouseEventManager.rollOutListeners[i];
            if(MouseEventManager.mouseY>coords.bottom || MouseEventManager.mouseY<coords.top){
                  coords.jq.trigger("exit");
            }
        }
    });
};

MouseEventManager.mouseY=0;
MouseEventManager.rollOutListeners=[];


/**
 * Manage the actions to perform when the user resize its browser window
 *
 */
PiagetCom.initAfterResize = function (completeCheck) {
    Stage.update();
    GridSystem.reset();
    ContainerFull.resizeAll();
    Slider.resizeAll();
    PopIn.resizeAll();
    FixedFooter.resize();

    //sometime caption are to big (long title in german for ex)
    var captionsRight=$(".carousel-caption.right");
    var el;
    for(var i=0;i<captionsRight.length;i++){
        el=$(captionsRight[i]);
        el.css("width","");
        if(el.innerWidth()<el[0].scrollWidth){
            el.css("width",el[0].scrollWidth)
        }
    }

    //here are actions to perform after non window resize operation, just sizing operations
    PiagetCom.bigImageAdapt();


    PiagetCom.events.dispatchEvent(EVENT_RESIZE);
};

/**
 * Manage the action to performs on body scroll
 */
PiagetCom.onScroll = function () {
    Stage.update();
    PiagetCom.events.dispatchEvent(EVENT_SCROLL,{});
};
/**
 * Adapt the big image in product page
 */
PiagetCom.bigImageAdapt = function () {
    var otherStuffHeight = 320; // header + footer height in fact
    var height = Math.max(
        Math.min(Stage.heightZoomed, Stage.widthZoomed) - otherStuffHeight,
        400
    );

    var fullScreen = $(".js-full-screen");
    fullScreen.css('height', height);
    fullScreen.find('.tab-content, iframe').css('height', height);
    fullScreen.find('.big-picture').css('max-height', height);
};

PiagetCom.setActiveTab = function (tab) {
    $("[data-main-tab]").removeClass("active");
    $("[data-main-tab='" + tab + "']").addClass("active");
};


PiagetCom.setColorEffect = function () {
    if(Browser.isIE6 || Browser.isIE7 || Browser.isIE8){
        $("img.greyEffect").mouseenter(
            function() {
                $(this).css("visibility", "hidden");
        });

        $("img.colorEffect").mouseleave(
            function() {
                $(this).parent().find("img.greyEffect").css("visibility", "visible");
        });

    } else {
        $("img.greyEffect").hover(
            function() {
                $(this).stop().animate({"opacity": "0", "-ms-filter":"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)"}, "slow");
            },
            function() {
                $(this).stop().animate({"opacity": "1", "-ms-filter":"progid:DXImageTransform.Microsoft.Alpha(Opacity=100)"}, "slow");
        });
    }
};

/**
 * Load 360 Interaction for product page
 */
PiagetCom.LoadProduct360 = function (item) {
    var iFrameDragDropUrl = item.attr("data-drag-drop-iframe-url");
    PiagetCom.LoadProductInteractionIFrame(iFrameDragDropUrl);
    item.find("i").addClass("active");
};

/**
 * Load Rotation Interaction for product page
 */
PiagetCom.LoadProductRotation = function (item) {
    var iFrameRotationUrl = item.attr("data-rotation-iframe-url");
    PiagetCom.LoadProductInteractionIFrame(iFrameRotationUrl);
    item.find("i").addClass("active");
};

/**
 * Load Interaction IFrame for product page
 */
PiagetCom.LoadProductInteractionIFrame = function (iFrameUrl) {
    var iFrameContainer = Dom.body.find(".interaction iframe");
    var interaction = Dom.body.find(".interaction");
    Dom.body.find(".product-images-icons").find("i").removeClass("active");
    if(iFrameUrl) {
        if(iFrameContainer.length > 0) {
            if(interaction.hasClass("active")) {
                TweenMax.to(iFrameContainer,1,{css:{"opacity":0},onComplete:function(){
                    iFrameContainer.attr("src", iFrameUrl);
                    TweenMax.delayedCall(0.2,function(){
                        "use strict";
                        TweenMax.to(iFrameContainer,1,{css:{"opacity":1}});
                    });
                }});
                interaction.addClass("active");
            } else {
                iFrameContainer.attr("src", iFrameUrl);
                PiagetCom.setActiveProductMedia(interaction);
            }
        }
    }
};

PiagetCom.toggleCarryImage = function( item ) {
    var showContainer = null;
    var carryContainer = Dom.body.find(".carry-picture");

    if(item.find("i").hasClass("active") == false) {
        Dom.body.find(".product-images-icons").find("i").removeClass("active");
        showContainer = carryContainer;
        item.find("i").addClass("active");
        PiagetCom.setActiveProductMedia(showContainer);
    }
};

PiagetCom.showBigImage = function( item ) {
    Dom.body.find(".product-images-icons").find("i").removeClass("active");
    item.find("i").addClass("active");
    var bigPictureContainer = Dom.body.find(".big-picture");
    PiagetCom.setActiveProductMedia(bigPictureContainer);

};

PiagetCom.setActiveProductMedia = function( showContainer ) {
    var hideContainer = Dom.body.find(".product-medias > div.active");

    if(showContainer.find(".js-slide").length > 0) {
        showContainer.parents(".js-full-screen").find(".js-slide-show-controls").removeClass("hidden");
    }

    if(hideContainer.find(".js-slide").length > 0) {
        hideContainer.parents(".js-full-screen").find(".js-slide-show-controls").addClass("hidden");
    }

    TweenMax.to(hideContainer,1,{css:{"opacity":0},onComplete:function(){
        TweenMax.delayedCall(0.2,function(){
            "use strict";
            PiagetCom.initAfterResize(true);
            TweenMax.to(showContainer,1,{css:{"opacity":1}});
            showContainer.css("opacity",0);
            showContainer.removeClass("hidden");
            showContainer.addClass("active");
            hideContainer.removeClass("active");
            hideContainer.addClass("hidden");
        });
    }});
};

/**
 * Product Zoom : change zoom image by menu
 */
Dom.body.on("click", ".product-zoom-detail",function(e){
    e.preventDefault();
    var item = $(this);
    var imgSrc = item.attr(PiagetCom.CTRL.DATA_PRODUCT_IMG_FULL);
    var productImgFullScreenContainer = Dom.body.find(PiagetCom.CTRL.PRODUCT_IMG_FULL_SCREEN_CONTAINER);
    var mediaContainer = productImgFullScreenContainer.find(".media");
    var img = productImgFullScreenContainer.find(".media").find("img");
    productImgFullScreenContainer.find(".media").find(".icon-loading").fadeIn();
    TweenLite.to(img, 0.5, {css:MsIe.ieOpacity(0), onComplete:function(){
            img.attr("src", "");
            img.attr("src", imgSrc);
            img.load(function () {
                img.css({marginTop: '0px' });
                productImgFullScreenContainer.find(".media").find(".icon-loading").fadeOut();
                TweenLite.to(img, 1, {
                    css:MsIe.ieOpacity(1)
                });
            });
        }
    });
});

/**
 * Close Product full screen image
 */
Dom.body.on("click", "a[href='#product-img-zoom-close']",function(e){
    e.preventDefault();
    PiagetCom.exitProductImageFullScreen();
});

/**
 * Show Product Image full Screen
 */
PiagetCom.showProductImageFullScreen = function () {
    var productImgFullScreenContainer = Dom.body.find(PiagetCom.CTRL.PRODUCT_IMG_FULL_SCREEN_CONTAINER);
    var mediaContainer = productImgFullScreenContainer.find(".media");
    var menuContainer = productImgFullScreenContainer.find(".menu");

    if(!PiagetCom.fullScrenInited) {
        PiagetCom.fullScrenInited = true;

        var menuImages = [];
        var fullScreenImage = $('img.allow-fullscreen').first().data('img-fullscreen');
        menuContainer.html("");

        $('img.allow-fullscreen').each(function() {
            menuImages.push([$(this).attr('src'), $(this).data('img-fullscreen')]);
        });

        if(fullScreenImage){
            mediaContainer.html("");
            jQuery('<div/>', {
                "class": "",
                "style": "top: 50%; position: absolute; left: 50%; margin-left:-16px;",
                html: '<i class="icon-loading"></i>'
            }).prependTo(mediaContainer);
            var fImg = $('<img/>').attr('src', fullScreenImage).hide().appendTo(mediaContainer);
            fImg.load(function () {
                $(this).parent().find(".icon-loading").fadeOut();
                $(this).fadeIn(1000);
            });
        }

        // append menu images
        $.each(menuImages, function(i, val) {
            $('<img/>').attr(PiagetCom.CTRL.DATA_PRODUCT_IMG_FULL, val[1])
                .attr('src', val[0])
                .addClass('product-zoom-detail')
                .appendTo(menuContainer);
        });

        mediaContainer.mousemove(function( event ) {
            var mediaContainer = $(this);
            var img = mediaContainer.find("img");
            var ANIMATION_TIME = 100;
            var defaults = {
                ratio: 0,
                imageWidth: 0,
                imageHeight: 0,
                containerWidth: 0,
                containerHeight: 0
            };
            var options = jQuery.extend(defaults, options);
            var o = options;

            var mouseX = (event.pageX - mediaContainer.offset().left);
            var mouseY = (event.pageY - mediaContainer.offset().top);
            o.imageWidth = img.width();
            o.imageHeight = img.height();
            o.ratio = o.imageWidth / o.imageHeight;
            o.containerWidth = mediaContainer.width();
            o.containerHeight = mediaContainer.height();

            img.css("margin-top" ,  (Math.round(- (o.imageHeight - o.containerHeight) * (mouseY / o.containerHeight))) + "px");

        });

        if(Browser.isTouchDevice) {
            var swipeOptions = {
                swipeStatus:swipeStatus,
                threshold:20,
                maxTimeThreshold:1000
            };

            var rrr = mediaContainer.swipe(swipeOptions);
            var img = mediaContainer.find("img");


            function swipeStatus(event, phase, direction, distance, duration) {
                var operator = (direction == 'left' || direction == 'up') ? -1 : 1;

                if (img.width() > mediaContainer.width()) {
                    if ((operator * (distance / 10)) + parseInt(img.css('left')) <= 0 && (operator * (distance / 10)) + parseInt(img.css('left')) > mediaContainer.width() - img.width()) el.css({left: ((operator * (distance / 10)) + parseInt(img.css('left'))) + 'px' });
                }

                if (img.height() > mediaContainer.height()) {
                    if ((operator * (distance / 10)) + parseInt(img.css('margin-top')) <= 0 && (operator * (distance / 10)) + parseInt(img.css('margin-top')) > mediaContainer.height() - img.height())
                    {
                        img.css({marginTop: ((operator * (distance / 10)) + parseInt(img.css('margin-top'))) + 'px' });
                    }
                }

                if (phase=='end') {
                    if (direction == 'left') jQuery('body').trigger('nextSwipe', ['Custom', 'Event']);
                    else jQuery('body').trigger('prevSwipe', ['Custom', 'Event']);
                }
            }

            mediaContainer.bind('orientationchange', function(event) {
                if(img) {
                    img.css({marginTop: '0px' });
                }
            });
        }

    }

    productImgFullScreenContainer.css("opacity",0);
    productImgFullScreenContainer.removeClass("hidden");
    TweenMax.to(productImgFullScreenContainer,1,{css:{"opacity":1}});


    // Real Full Screen for modern Browser
    if (window.fullScreenApi.supportsFullScreen === true) {
        // do full screen stuff
        fsElement = document.getElementById("product-img-full-screen");
        window.fullScreenApi.requestFullScreen(fsElement);

        fsElement.addEventListener(fullScreenApi.fullScreenEventName, function() {
            if (fullScreenApi.isFullScreen()) {
            } else {
                PiagetCom.exitProductImageFullScreen();
            }
        }, true);
    }
};

PiagetCom.fullScrenInited = false;

/**
 * Exit and Close Product Image Full Screen
 */
PiagetCom.exitProductImageFullScreen = function () {
    Dom.html.css("overflow", "auto");

    var productImgFullScreenContainer = Dom.body.find(PiagetCom.CTRL.PRODUCT_IMG_FULL_SCREEN_CONTAINER);

    var mediaContainer = productImgFullScreenContainer.find(".media");
    mediaContainer.unbind('orientationchange');

    TweenMax.to(productImgFullScreenContainer,1,{css:{"opacity":0}
        ,onComplete:function(){
            productImgFullScreenContainer.addClass("hidden");
            if (window.fullScreenApi.supportsFullScreen === true) {
                fsElement = document.getElementById("product-img-full-screen");
                window.fullScreenApi.cancelFullScreen(fsElement);
            }
        }});
};

/**
 * initilise slideshow in the header
 */
PiagetCom.initBasicSlideShow = function() {
    var container = Dom.body.find("[data-type='basic-slide-show']");

    if(container.length > 0) {
        container.each(function(index) {
            var slider = $(this).find(".row");

            slider.each(function(index) {
                var el = $(this);
                if (index > 0) {
                    el.css("display", "none");
                } else {
                    el.addClass("active");
                }
                el.attr("data-slide-position", index);
            });

            // start the slide show
            PiagetCom.startBasicSlideShow($(this), 3);
        });
    }
};

PiagetCom.startBasicSlideShow = function(slider, duration) {
    var maxElem = slider.find(".row").length;
    var currentElem = slider.find(".row.active").attr("data-slide-position");

    setTimeout(function() {
        if(Browser.isIE6 || Browser.isIE7 || Browser.isIE8){
            PiagetCom.autoBasicSlideShowMSIE(slider, duration, (maxElem - 1), currentElem);
        } else {
            PiagetCom.autoBasicSlideShow(slider, duration, (maxElem - 1), currentElem);
        }

    }, 3000);
};

PiagetCom.autoBasicSlideShowMSIE = function(slider, duration, maxElem, currentElem) {
    slider.find(".row.active[data-slide-position='"+currentElem+"']").css("display", "none").removeClass('active');

    var nextElem = parseInt(currentElem) + 1;

    // if the next elem doesn't exist go to the first one
    if (nextElem > maxElem) {
        nextElem = 0;
    }
    slider.find(".row[data-slide-position='"+nextElem+"']").css("display", "block").addClass('active');

    // infinite slideshow
    setTimeout(function() {
        PiagetCom.autoBasicSlideShowMSIE(slider, duration, maxElem, nextElem);
    }, 3000);
};

PiagetCom.autoBasicSlideShow = function(slider, duration, maxElem, currentElem) {
    slider.find(".row.active[data-slide-position='"+currentElem+"']").fadeOut("slow", function() {
        $(this).removeClass('active');
        var nextElem = parseInt(currentElem) + 1;

        // if the next elem doesn't exist go to the first one
        if (nextElem > maxElem) {
            nextElem = 0;
        }
        slider.find(".row[data-slide-position='"+nextElem+"']").fadeIn("slow", function() {
            $(this).addClass('active');
        });

        // infinite slideshow
        setTimeout(function() {
            PiagetCom.autoBasicSlideShow(slider, duration, maxElem, nextElem);
        }, 3000);
    });
};

/**
 * Product image zoom
 */
Dom.body.on("click", "img.allow-fullscreen",function(e){
    e.preventDefault();
    PiagetCom.showProductImageFullScreen();
});


/**
 * SLIDESHOW END
 */
PiagetCom.CTRL = {
    DATA_THUMBNAIL : "data-thumbnail",
    DATA_TARGET : "data-target",
    DATA_RECEIVER : "data-receiver",
    PRODUCT_IMG_FULL_SCREEN_CONTAINER : ".product-img-full-screen",
    DATA_PRODUCT_IMG_FULL : "data-image-full-screen"
};

/**
 * Static object where the Stage info are stocked.
 */
var Stage;
Stage={};
Stage.height=0;
Stage.width=0;
Stage.bodyHeight=0;
Stage.bodyWidth=0;
Stage.scrollY=0;
Stage.maxScrollY=0;
Stage.footerY=0;
Stage.docViewTop=0;
Stage.docViewBottom=0;
Stage.zoom=1;
/**
 * Refresh the values
 */
Stage.update=function(){

    if(Browser.isMobile){
        var deviceWidth = (Math.abs(window.orientation) == 90) ? screen.height : screen.width;
       Stage.zoom = deviceWidth / window.innerWidth;
    }

    Stage.scrollY=Stage.docViewTop=$(window).scrollTop();
    Stage.height=$(window).height();
    Stage.width=$(window).width();
    Stage.widthZoomed=1/Stage.zoom*Stage.width;
    Stage.heightZoomed=1/Stage.zoom*Stage.height;


    Stage.bodyHeight=$(document).outerHeight();
    Stage.bodyWidth=$(document).outerWidth();
    Stage.maxScrollY=Stage.bodyHeight-Stage.height*(1/Stage.zoom);
    Stage.docViewBottom = Stage.docViewTop + Stage.height;
    //document.title="w"+Stage.width+" h"+Stage.height+ "bw"+Stage.bodyWidth +" z"+Stage.zoom;
};

/**
 * Return true if an element is in screel
 * @param {jQuery} jq
 * @returns {boolean}
 */
Stage.isVisible=function(jq){

    var elemTop = jq.offset().top;
    var elemBottom = elemTop + jq.height();
    if(elemTop>Stage.docViewTop && elemTop<Stage.docViewBottom){
        return true;
    }
    if(elemBottom>Stage.docViewTop && elemBottom<Stage.docViewBottom){
        return true;
    }
    return false;
};
/**
 * Telle you if stage dimensions are differents than window.
 * @returns {boolean}
 */
Stage.hasChanged=function(){
    if(Stage.height!=$(window).height() || Stage.width!=$(window).width()){
        return true
    }else{
        return false;
    }
};

var EVENT_PIAGET_COM_AFTER_AJAX="onPiagetComAfterAjax";

/**
 * Enable tabs
 */
$('.tabs a').click(function (e) {
    e.preventDefault();
    $(this).tab('show');
    $(this).parent().parent().find('a').removeClass('active');
    $(this).addClass('active');
});
;

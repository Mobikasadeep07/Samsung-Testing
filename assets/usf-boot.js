/* USF file - DO NOT MODIFY THIS FILE. THIS FILE IS REGULARLY CHANGED BY USF APP AND **ANY DIRECT CHANGES WILL BE LOST**. Use our in-app customization if you need to update CSS and JS code. Auto modified at: 1/5/2022 5:59:28 AM*/
!function(){function e(e){return"[object Function]"===Object.prototype.toString.call(e)}function t(e){return"string"==typeof e||e instanceof String}function r(r){var n;r={config:r}.config;var s=new XMLHttpRequest,i=r.type||"GET",a="GET"===i?function(r){var n,s,i=r.data;if(!i)return r.url;if(e(i)&&(i=i()),!t(i)){var a=[];for(var o in i)a.push(o+"="+encodeURIComponent(i[o]));i=a.join("&")}return n=r.url,(s=i)?n.includes("?")?n+"&"+s:n+"?"+s:n}(r):r.url;s.open(i,a,!0),s.timeout=r.timeout,s.setRequestHeader("Content-Type",r.contentType||"application/x-www-form-urlencoded");var o=r.error,l=!1,u=!1,c={abort:function(){l=!0,u=!0,s.abort(),r.abort&&r.abort.apply(r,[s])}};s.onreadystatechange=function(){4==s.readyState&&(s.status>=200&&s.status<400?r.success&&r.success.apply(r,[function(e,t){switch(e.dataType){case"json":return JSON.parse(t.responseText);default:return t.responseText}}(r,s),{xhr:s,redirected:function(e,t){for(var r=0,n=t.response;r<n.length;){var s=n[r++];if("\t"!==s&&" "!==s&&"\r"!==s&&"\n"!==s)return"<"===s&&-1!==n.indexOf("<html")}}(0,s),config:r}]):o&&!l&&(l=!0,o.apply(r,[s,s.status,null,{xhr:s,config:r}])))},s.onerror=function(e){o&&!l&&(l=!0,o.apply(r,[s,s.status,e]))},s.ontimeout=function(e){o&&!l&&(l=!0,o.apply(r,[s,"timeout",e]))},s.onabort=function(e){u||(l=!0,u=!0,r.abort&&r.abort.apply(r,[s]))};var f=r.data;e(f)&&(f=f());try{s.send(f)}catch(n){o&&!l&&(l=!0,o.apply(r,[s,s.status,n]))}return c}var n,s=function(){this.list={}};s.prototype={add(e,t){if(Array.isArray(e))for(var r=e.length,n=0;n<r;n++)this.add(e[n],t);else{var s=this.list[e];s||(this.list[e]=s=[]),s.push(t)}},remove(e,t){t||delete this.list[e];var r=this.list[e];r.splice(r.indexOf(t),1)},raise(e,t,r){if(window.usf_container||"rerender"!==e){var n=this.list[e];if(n)for(var s=0;s<n.length;s++)n[s](t,r);else;}}},window.usf||(window.usf={}),usf.components={},usf.collectionsByUrlName={},usf.EventHub=s,usf.event=n=new s;var i=usf.settings={"online":1,"version":"1.0.2.4112","storeId":"samsung-parts-nj.myshopify.com","siteId":"edfccae2-10ea-4e44-a28e-d868fe41cba6","resUrl":"//cdn.shopify.com/s/files/1/0257/0108/9360/t/85/assets/","analyticsApiUrl":"https://analytics-usf.hotyon.com/set","searchSvcUrl":"https://svc-2-usf.hotyon.com/","enabledPlugins":[],"currency":"USD","priceLongFormat":"${0} USD","priceFormat":"${0}","showGotoTop":1,"mobileBreakpoint":767,"decimals":0,"decimalDisplay":".","thousandSeparator":",","plugins":{},"revision":31193956,"searchSvcUrl":"https://svc-2-usf.hotyon.com/","filters":{},"instantSearch":{"online":1,"searchBoxSelector":"input[name=q]","numOfSuggestions":6,"numOfProductMatches":10,"numOfCollections":4,"numOfPages":4},"search":{"online":1,"sortFields":["r","title","-title","date","-date","price","-price","-discount"],"searchResultsUrl":"/pages/search-results","more":"page","itemsPerPage":10,"imageSizeType":"fixed","imageSize":"600,350","showSearchInputOnSearchPage":1,"showAltImage":1,"showVendor":1,"showSale":1,"showSoldOut":1,"canChangeUrl":1},"collections":{"online":1,"collectionsPageUrl":"/pages/collections"},"filterNavigation":{"showFilterArea":1,"showSingle":1,"showProductCount":1},"translation_en":{"search":"Search","latestSearches":"Latest searches","popularSearches":"Popular searches","viewAllResultsFor":"view all results for <span class=\u0022usf-highlight\u0022>{0}</span>","viewAllResults":"view all results","noMatchesFoundFor":"No matches found for \u0022<b>{0}</b>\u0022. Please try again with a different term.","productSearchResultWithTermSummary":"<b>{0}</b> results for \u0027<b>{1}</b>\u0027","productSearchResultSummary":"<b>{0}</b> products","productSearchNoResults":"<h2>No matching for \u0027<b>{0}</b>\u0027.</h2><p>But don\u0027t give up – check the filters, spelling or try less specific search terms.</p>","productSearchNoResultsEmptyTerm":"<h2>No results found.</h2><p>But don\u0027t give up – check the filters or try less specific terms.</p>","clearAll":"Clear all","clear":"Clear","clearAllFilters":"Clear all filters","clearFiltersBy":"Clear filters by {0}","filterBy":"Filter by {0}","sort":"Sort","sortBy_r":"Relevance","sortBy_title":"Title: A-Z","sortBy_-title":"Title: Z-A","sortBy_date":"Date: Old to New","sortBy_-date":"Date: New to Old","sortBy_price":"Price: Low to High","sortBy_-price":"Price: High to Low","sortBy_-discount":"Discount: High to Low","sortBy_bestselling":"Best selling","sortBy_-available":"Inventory: High to Low","filters":"Filters","filterOptions":"Filter options","clearFilterOptions":"Clear all filter options","youHaveViewed":"You\u0027ve viewed {0} of {1} products","loadMore":"Load more","loadPrev":"Load previous","productMatches":"Search Suggestions","trending":"Trending","didYouMean":"Sorry, nothing found for \u0027<b>{0}</b>\u0027.<br>Did you mean \u0027<b>{1}</b>\u0027?","searchSuggestions":"Search suggestions","quantity":"Quantity","selectedVariantNotAvailable":"The selected variant is not available.","addToCart":"Add to cart","seeFullDetails":"See full details","chooseOptions":"Choose options","quickView":"Quick view","sale":"Sale","save":"Save","soldOut":"Sold out","viewItems":"View items","more":"More","all":"All","prevPage":"Previous page","gotoPage":"Go to page {0}","nextPage":"Next page","from":"From","collections":"Collections","pages":"Pages","sortBy_metafield:my_fields.supported_models":"my_fields.supported_models: A-Z","sortBy_-metafield:my_fields.supported_models":"my_fields.supported_models: Z-A","sortBy_metafield:my_fields.part_type":"my_fields.part_type: A-Z","sortBy_-metafield:my_fields.part_type":"my_fields.part_type: Z-A","sortBy_metafield:my_fields.collections":"my_fields.collections: A-Z","sortBy_-metafield:my_fields.collections":"my_fields.collections: Z-A","sortBy_metafield:my_fields.specification":"my_fields.specification: A-Z","sortBy_-metafield:my_fields.specification":"my_fields.specification: Z-A","sortBy_metafield:my_fields.lvl1":"my_fields.lvl1: A-Z","sortBy_-metafield:my_fields.lvl1":"my_fields.lvl1: Z-A","sortBy_option:Title":"Title: A-Z","sortBy_-option:Title":"Title: Z-A"}};i.currencyRate=1;var a,o,l=i.instantSearch.online,u=i.search.online,c=function(e){if(this.list=[],e)for(var t=0;t<e.length;t++)this.push(e[t]);var r=this,n=!1;function s(){if(!n){var e=i.analyticsApiUrl;if(void 0!==navigator.sendBeacon){var t=navigator.sendBeacon(e,JSON.stringify({events:r.list,time:new Date}));n=t}else{var s="events="+encodeURIComponent(JSON.stringify(r.list))+"&time="+(new Date).toISOString(),a=new XMLHttpRequest;a.open("POST",e,!1),a.setRequestHeader("Content-Type","text/plain;charset=UTF-8"),a.send(s)}}}window.addEventListener("beforeunload",s),window.addEventListener("unload",s)};c.prototype={push(e){"function"==typeof e&&(e=e.apply(this)),e.length&&this[e[0]].apply(this,e.slice(1,e.length)),this.list.push(e)},track(e,t){t.event=e,t.siteId=i.siteId,t.time=new Date,this.list.push(t)}},window._usfaq=new c(window._usfaq);var f,d,h,p,g,m,y,w={List:0,Box:1,Swatch:2};function _(e){if(e&&!d){var t=document.createElement("div");t.innerHTML=e,usf_container.parentNode.insertBefore(t,usf_container),d=1,k.redirectToOriginalView()}}function b(e,t,r){var s;function l(i){if(r)if(f){var o=f;f=i,o()}else f=i;else!function(i){a=null,e.loader=!1;var o=i.data.redirect;o&&e.onRedirect(o);t&&e.result&&c?1===t?e.result.items=e.result.items.concat(i.data.items):e.result.items.unshift(...i.data.items):e.result=i.data;r||n.raise("sr_dataReceived",e,i.data,e.result.items);var l=i.data.facets;if(e.hasFacets=l&&l.length,e.hasFacets){for(var u=!1,f=0;f<l.length;f++){var d=l[f];(d.labels.length||void 0!==d.min||d.navigationCollectionsKeepMain&&d.navigationCollectionsMenu.length)&&(u=!0),d.displayMode=w[d.display]}u||(e.hasFacets=!1)}2===t||(e.itemsLoaded+=i.data.items.length);var p=i.data.extra;if(p){var v=p.collections;if(v)for(var g=usf.collectionsByUrlName={},f=0;f<v.length;f++){var m=v[f];g[m.urlName]=m}_(p.message)}document.body.classList[e.noFacets?"add":"remove"]("usf-has-no-facets"),r||e.$nextTick(()=>{n.raise("sr_updated",e,i.data),S(s),h||(h=1,window.addEventListener("pageshow",function(){var e=sessionStorage.getItem("usfVP");e&&S(e=JSON.parse(e))}))})}(i=JSON.parse(i))}var u=i.search.more,c="more"===u||"infinite"===u;if(J&&(s=sessionStorage.getItem("usfVP"))&&(s=JSON.parse(s),c&&s.take!==F.take))F.take=s.take;else{if(e.loader||(e._refreshTime=(new Date).getTime()),c&&!t){var d=0,p=F.take,v=i.search.itemsPerPage;p>v&&(d=Math.floor((p-1)/v)*v,e.itemsOffset=d),e.itemsLoaded=d}if(r||(e.loader=1===t?"more":2!==t||"prev",n.raise("sr_updating",e,null)),r)f=null;else if(void 0!==f){function g(){l(f),f=void 0}return void(null===f?f=g:g())}var m={q:C(e.term),apiKey:i.siteId},y=k.locale;y&&(m.locale=y),window._usfGetProductDescription||(m.getProductDescription=0);var E=k.customerTags;E&&E.length&&(m.customerTags=E.join(","));var P,T=e.facetFilters,O={query:m,filters:T};k.onSearch(O),(T=O.filters)&&(m.facetFilters=JSON.stringify(T)),c?(P=2===t?e.itemsOffset:e.itemsLoaded,p=e.itemsPerPage):(P=(e.page-1)*e.itemsPerPage,p=e.itemsPerPage),m.skip=P,m.take=p,e.sortBy&&"r"!==e.sortBy&&(m.sort=e.sortBy),e.itemsLoaded||o===e.term||(o=e.term,e.term&&_usfaq.track("search",{term:e.term,isEmpty:e.result&&!e.result.items.length})),a&&a.abort(),a=usf.utils.send({url:i.searchSvcUrl+"search",data:m,startTime:e._refreshTime,success:l,error:function(r,n,s){403!==n?setTimeout(()=>{f=void 0;var r=usf.search;r._refreshTime=e._refreshTime,b(r,t)},3e3):_(JSON.parse(r.response).meta.description)}})}}function S(e){if(e){function t(){var t=usf_container.querySelector('[data-usf-pid="'+e.id+'"]');t&&!function(e){const t=e.getBoundingClientRect();return t.top>=0&&t.left>=0&&t.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&t.right<=(window.innerWidth||document.documentElement.clientWidth)}(t)&&t.scrollIntoView()}t(),sessionStorage.removeItem("usfVP"),setTimeout(t,500)}}function C(e){for(var t=0;t<e.length&&" "===e[t];)t++;return t>0&&(e=e.substr(t)),e.toLocaleLowerCase().replace(/[*\?]/g,"")}usf._refineTerm=C;var E=location.pathname.toLowerCase();usf.platform={name:"shopify",termVar:"q",isCollectionPage:-1!==E.indexOf("/collections/")&&-1===E.indexOf("/products/"),get collection(){if(m)return m;var e=k.collectionWithParams;if(e){var t=e.lastIndexOf("/");-1!==t&&(e=e.substring(0,t)),m=e}return e},set collection(e){m=e},get locale(){if(!p){var e=E,t=e.indexOf("/collections/");-1===t&&(t=e.endsWith("/search")?e.length-7:e.indexOf("/pages/")),p=t>0?e.substring(1,t).replace(/[\/\\]/g,"_"):Shopify.locale.toLowerCase()}return p},get baseUrl(){if(void 0===g){var e=E,t="/"+k.locale;e.startsWith(t)||(t=""),g=t}return g},get collectionWithParams(){var e=E,t=k.baseUrl;if(e.startsWith(t+"/collections/"))return decodeURIComponent(e.substring(t.length+13))},get tagUrlName(){if(void 0===y){var e=k.collectionWithParams;if(e){var t=e.lastIndexOf("/");y=-1!==t?e.substring(t+1):null}}return y},get customerTags(){return _usfCustomerTags},onSearch(e){if("vendors"===k.collection){var t=Q.get("q");t&&(e.query.q="",e.filters||(e.filters={}),e.filters._usf_vendor=["vendor",[t]])}var r=_usfCollectionId||"",n=k.tagUrlName;n&&(r+="/"+n),(r||k.isCollectionPage)&&(e.query.collection=r)},init(){_usfTheme.applied&&(i.search.searchResultsUrl="/search")},redirectToOriginalView(){var e=location.href;-1===e.indexOf("no-usf")&&(location=e+(-1===e.indexOf("?")?"?":"&")+"view=no-usf")}};var k=usf.platform;const P="_usf_";var T=function(e){this.canChangeUrl=e,this.changed=[];var t=this;function r(){t.changed.forEach(e=>e())}history.pushState=(e=>(function(){var t=e.apply(this,arguments);return r(),t}))(history.pushState),history.replaceState=(e=>(function(){var t=e.apply(this,arguments);return r(),t}))(history.replaceState),window.addEventListener("popstate",()=>{r()})};function O(e){return e=e.replace(/\+/g," "),decodeURIComponent(e)}var U=function(e){for(var t=e?e.substring(1).split("&"):[],r=[],n=0;n<t.length;n++){var s=t[n].split("="),i=s[1];if(void 0!==i){var a,o=i.split(P);a=o.length>1?o.map(e=>O(e)):O(i),r.push([O(s[0]),a])}}this.entries=r};U.prototype={get(e,t){var r=this.entries.find(t=>t[0]===e);return r?r[1]:t},append(e,t){this.entries.find(r=>r[0]===e&&r[1]===t)||this.entries.push([e,t])},set(e,t){var r=this.entries.find(t=>t[0]===e);r?r[1]=t:this.entries.push([e,t])},toString(){var e,t=this.entries.map(t=>encodeURIComponent(t[0])+"="+(e=t[1],Array.isArray(e)?e.map(e=>encodeURIComponent(e)).join(P):encodeURIComponent(e))).join("&");return t?"?"+t:""},delete(e,t){for(var r=this.entries.length-1;r>=0;r--){var n=this.entries[r];R(e,decodeURIComponent(n[0]))&&(t&&decodeURIComponent(n[1])!==t||this.entries.splice(r,1))}}},usf.URLSearchParams=U;var L=location.search;function I(e,t,r,n){if(!1!==r){if(n.canChangeUrl){var s=O(location.search)!==O(e);return r||s?(e=location.pathname+e,t||!s?history.replaceState(null,null,e):history.pushState(null,null,e),!0):void 0}e!==L&&(L=e,n.changed.forEach(e=>e()))}}function R(e,r){return t(e)?e===r:e.test(r)}function x(e,t,r){Object.keys(t).forEach(n=>{(function(t,r){for(var n=0;n<e.entries;n++){var s=e.entries[n];if(s[0]===t&&s[1]===r)return!0}})(n,t[n])||e[r.append?"append":"set"](n,t[n])})}T.prototype={get(e,t){return new U(this.getSearch()).get(e,t)},entries(){return new U(this.getSearch()).entries},snapshot(){this._snapshot=this.entries()},getSearch(){return this.canChangeUrl?location.search:L},getChanges(){var e=this.entries(),t=this._snapshot;if(!t)return e;var r=[];return e.forEach(e=>{t.find(t=>t[0]===e[0]&&t[1]===e[1])||r.push(e)}),t.forEach(t=>{e.find(e=>e[0]===t[0])||r.push([t[0]])}),r},update(e,t,r){var n=new U(this.getSearch());if(r||(r={}),t)if(t.length)t.forEach(e=>n.delete(e));else for(var s=n.entries.length-1;s>=0;s--){var i=n.entries[s],a=i[0];if(t.hasOwnProperty(a)){var o=t[a];i[1]===o&&n.delete(a,o)}}return e&&x(n,e,r),I(n.toString(),r.replace,r.force,this)},add(e,t){var r=new U(this.getSearch());return t||(t={}),x(r,e,t),I(r.toString(),t.replace,t.force,this)},remove(e){var r,n=new U(this.getSearch()),s=arguments.length;if(s>=2&&"object"==typeof(r=arguments[s-1])&&r&&s--,2===s&&(l=arguments[1]))for(var i=0;i<n.entries.length;i++){if((a=n.entries[i])[0]===e&&a[1]===l){n.delete(e,l);break}}else if(t(e))for(i=0;i<n.entries.length;i++){if((a=n.entries[i])[0]===e){n.delete(e);break}}else if(e.length)e.forEach(e=>{e&&(Array.isArray(e)?n.delete(e[0],e[1]):n.delete(e))});else for(i=n.entries.length-1;i>=0;i--){var a,o=(a=n.entries[i])[0];if(e.hasOwnProperty(o)){var l=e[o];a[1]===l&&n.delete(o,l)}}return r||(r={}),I(n.toString(),r.replace,r.force,this)}},usf.Query=T;function A(){}A.prototype={get term(){return Q.get(k.termVar,"")},set term(e){var t={};t[k.termVar]=e,Q.update(t,[/uff_.*/,/usf_.*/,"page"],{force:!0})},getTermQuery:e=>k.termVar+"="+encodeURIComponent(e),get page(){return parseInt(Q.get("page"))||1},set page(e){if(e<=1)Q.remove("page");else{var t={};t.page=e,Q.add(t)}},get take(){return parseInt(Q.get("usf_take"))||i.search.itemsPerPage},set take(e){e?(v={},v.usf_take=e,Q.update(v)):Q.remove("usf_take")},get itemsPerPage(){return function(e,t){var r=parseInt(e)||t;r>t&&(r=t);return r}(Q.get("usf_ipp"),i.search.itemsPerPage)},getPageUrl(e){if(this.p===this.page)return"javascript:void(0)";var t=new URL(window.location.href),r=t.searchParams;return!e||e<=1?r.delete("page"):r.set("page",e),t.toString()},get facetFilters(){var e,t={};return Q.entries().forEach(r=>{var n=r[0];if(n.startsWith("uff_")){var s="uff_".length,i=n.indexOf("_",s),a=n.substring(s,i);a=parseInt(a,36);var o=n.substr(i+1),l=r[1];Array.isArray(l)||(l=[l]),t[a]=[o,l],e=!0}}),e?t:null},set facetFilters(e){if(Object.keys(e).length){var t,r={};for(var n in e){var s=e[n];r["uff_"+(t=n,parseInt(t).toString(36))+"_"+s[0]]=s[1]}Q.update(r,[/uff_.*/,"page"])}else this.removeAllFacetFilters()},get view(){return Q.get("usf_view","grid")},set view(e){if(e){var t={};t.usf_view=e,Q.add(t)}else Q.remove("usf_view")},isViewChanged:e=>1!==e.length||"usf_view"!==e[0][0],get sort(){var e=Q.get("usf_sort");if(e)return e;var t=i.search.sortFields;return t?t[0]:""},set sort(e){if(e){var t={};t.usf_sort=e,Q.add(t)}else Q.remove("usf_sort")},removeAllFacetFilters(){Q.remove([/uff_.*/,"page"])}};var F=new A;usf.queryRewriter=F;var N=function(e){if(this.plugins=[],e)for(var t=0;t<e.length;t++)this.push(e[t])};function q(e,t,r){var n,s,i;for(s=document.getElementsByTagName("link"),i=0;i<s.length;i++)if(s[i].href.endsWith(e))return!1;return(n=document.createElement("link")).setAttribute("rel","stylesheet"),n.setAttribute("type","text/css"),n.setAttribute("href",e),t&&(n.onload=t),r&&(n.onerror=r),document.head.appendChild(n),!0}function B(e,t,r,n){var s,i,a;for(i=document.getElementsByTagName("script"),a=0;a<i.length;a++){var o=i[a].src;if(o&&o.endsWith(e))return!1}return(s=document.createElement("script")).setAttribute("type","text/javascript"),s.setAttribute("src",e),s.async=!0,n&&Object.keys(n).forEach(function(e){s.setAttribute(e,n[e])}),t&&(s.onload=t),r&&(s.onerror=r),document.head.appendChild(s),!0}function j(e,t,r,n){for(var s=0,i=0,a=0;a<t.length;a++){var o,l=t[a];n?(0,o=B):o=q,l.startsWith("http")||l.startsWith("//")||(l=e+l),o(l,function(){++s===i&&r()})&&i++}i===s&&r()}function W(e,t){for(;e;){if(!e||e===document.body)return;if((e=e.parentNode)&&e.classList.contains(t))return e}}function M(e,t,r,n){if(!e)throw new Error("Element must be set.");if(e.length)for(var s=0;s<e.length;s++)M(e[s],t,r,n);else if(e._r_events||(e._r_events={}),"string"==typeof t)r&&(n||(n={}),function(e,t,r,n){var s,i=e._r_events[t];i||(e._r_events[t]=i=[]);s=function(t){return r.call(e,t)},e.addEventListener(t,s,n),i[i.length]={handler:r,browserHandler:s,options:n}}(e,t,r,n));else for(var i in t){M(e,i,t[i],r)}}function V(e){"loading"===document.readyState?document.addEventListener("DOMContentLoaded",e):e()}function H(e){z&&(z=[],delete z),n.raise("is_hide",e)}function D(e,t){Y(function(){!function(e,t){if(W(e,"usf-sr-inputbox")&&usf.platform.collection)return;(t||e.value)&&n.raise("is_show",e)}(e,t)})}N.prototype={push(e){this.plugins.push(e)},invoke(e,t){return function e(t,r,n,s){if(!(r>=t.length)){var i=t[r],a=i[n];if(a){var o=s.slice(0,s.length);return o.push(function(){if(r<t.length-1)return e(t,r+1,n,s)}),a.apply(i,o)}return e(t,r+1,n,s)}}(this.plugins,0,e,t)},has(e){for(var t=this.plugins,r=0;r<t.length;r++)if(t[r][e])return!0}},usf.plugins=new N(usf.plugins)/* Begin plugin code */
/* End plugin code */
usf.utils={on:M,off:function(e,t,r){if(e._r_events&&t){var n=null,s=e._r_events[t]||[];if(void 0!==r){for(var i=0,a=s.length;i<a;i++)if(s[i].handler===r){n=s[i].browserHandler;break}e.removeEventListener(t,n),s.splice(i,1)}else if("string"==typeof t){for(i=0,a=s.length;i<a;i++)n=s[i].browserHandler,e.removeEventListener(t,n);delete e._r_events[t]}else for(var o in t){for(r=t[o],i=0,a=(s=e._r_events[o]||[]).length;i<a;i++)if(s[i].handler===r){n=s[i].browserHandler;break}e.removeEventListener(o,n),s.splice(i,1)}}},closest:W,loadJsFile:B,loadFiles:j,ready:V,installSearchInput:$,hideInstantSearch:H,loadAndShowInstantSearch:D,stopEvent:(e,t)=>!!e&&(e.preventDefault&&e.preventDefault(),t||(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0),e.returnValue=!1,!1),send(e,t){var n=e.startTime||(new Date).getTime();if(!e._errorModified){var s=6e3,i=e.error;e.timeout=s,e._errorModified=1,e.error=function(r){var a;if((new Date).getTime()-n>=s)return e.url=(a=e.url).includes("fallback")?a:a.replace(/svc-(\d+)-/,"svc-$1-fallback-"),delete e.timeout,setTimeout(()=>usf.utils.send.apply(this,[e,t]),200),void(s=1500);i.apply(this,arguments)}}if(!t){var a=usf.plugins.invoke("send",[e]);if(void 0!==a)return a}return r(e)}},usf.fetch=b;var J=window.performance&&window.performance.navigation.type===window.performance.navigation.TYPE_BACK_FORWARD;usf.query=new T(i.search.canChangeUrl);var G,K,z,Q=usf.query;function X(e){if(!e.target._usf_no_popup){var t=e.target;t.value?D(t):H(t)}}function $(e,t){if(e&&(l||u)){var r=e.parentNode;if(!r.classList.contains("usf-sr-inputbox")){var n=e.cloneNode(!0);r.replaceChild(n,e),e=n}for(;"FORM"!==r.tagName;)if((r=r.parentNode)===document.body){r=null;break}if(G=k.baseUrl+i.search.searchResultsUrl,r&&u&&(r.action=G,r.onsubmit=function(t){var r=window.usf_container;return location.pathname.includes(G)||r&&W(e,"usf-sr-inputbox")?(F.term=e.value,r&&r.click(),H(e)):location=G+"?"+k.termVar+"="+encodeURIComponent(e.value),usf.utils.stopEvent(t)}),e._usf_no_popup=t,e.setAttribute("autocomplete","off"),l){var s=t?null:function(e){if(usf.isMobile)return D(e.target,!0),usf.utils.stopEvent(e);D(e.target)};M(e,{input:X,keydown:function(e){13===e.keyCode&&(usf.utils.stopEvent(e),r&&u?r.onsubmit():location=G+"?"+k.termVar+"="+encodeURIComponent(e.target.value))},click:s,focus:s})}}}function Y(e){if(2!==K)if(1!==K){var t;K=1;var r=[(t=_usfTheme.assetUrl.replace("usf-boot.js","{0}")).replace("{0}","usf.js")],s=[t.replace("{0}","usf.css")];n.raise("preinit"),e||b({term:F.term,itemsPerPage:F.itemsPerPage,page:F.page,facetFilters:F.facetFilters,sortBy:F.sort},0,!0),j(t,r,function(){K=2,z&&(z.forEach(e=>e()),delete z),G=k.baseUrl+i.search.searchResultsUrl,e&&e(),V(function(){n.raise("init");var e=document.body.classList;document.body.addEventListener("keyup",function(t){9==t.keyCode&&e.add("usf-wc")}),document.addEventListener("click",function(t){e.remove("usf-wc")})})},1),j(t,s,function(){},0)}else e&&(z||(z=[]),z.push(e));else e&&e()}if(i.online){k.init();var Z=location.pathname,ee=usf._canLoadContainer=(k.isCollectionPage?i.collections.online:-1!==Z.indexOf(i.search.searchResultsUrl)&&i.search.online)||window._usfHasContainer;ee&&Y(),V(function(){var e=document.body.classList;(usf.isMobile=document.body.clientWidth<i.mobileBreakpoint)&&e.add("usf-mobile"),i.darkMode&&e.add("usf-dark"),ee&&window.usf_container&&(e.add("usf-has-container"),k.isCollectionPage&&e.add("usf-collections-page"),e.add(i.filters.horz?"usf-horz-layout":"usf-vert-layout")),l&&i.instantSearch.searchBoxSelector.split(",").forEach(e=>{for(var t=document.body.querySelectorAll(e),r=0;r<t.length;r++)$(t[r])})})}}();
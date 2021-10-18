!function(){"use strict";var e,t,a,r=window.location,o=window.document,n=window.localStorage,l=o.getElementById("plausible"),s=l.getAttribute("data-api")||(e=l.src.split("/"),t=e[0],a=e[2],t+"//"+a+"/api/event"),c=n&&n.plausible_ignore,p=l&&l.getAttribute("data-exclude").split(",");function u(e){console.warn("Ignoring Event: "+e)}function i(e,t){if(/^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(r.hostname)||"file:"===r.protocol)return u("localhost");if(!(window.phantom||window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)){if("true"==c)return u("localStorage flag");if(p)for(var a=0;a<p.length;a++)if("pageview"==e&&r.pathname.match(new RegExp("^"+p[a].trim().replace(/\*\*/g,".*").replace(/([^\.])\*/g,"$1[^\\s/]*")+"/?$")))return u("exclusion rule");var n={};n.n=e,n.u=r.href,n.d=l.getAttribute("data-domain"),n.r=o.referrer||null,n.w=window.innerWidth,t&&t.meta&&(n.m=JSON.stringify(t.meta)),t&&t.props&&(n.p=JSON.stringify(t.props)),n.h=1;var i=new XMLHttpRequest;i.open("POST",s,!0),i.setRequestHeader("Content-Type","text/plain"),i.send(JSON.stringify(n)),i.onreadystatechange=function(){4==i.readyState&&t&&t.callback&&t.callback()}}}function d(e){for(var t=e.target,a="auxclick"==e.type&&2==e.which,n="click"==e.type;t&&(void 0===t.tagName||"a"!=t.tagName.toLowerCase()||!t.href);)t=t.parentNode;t&&t.href&&t.host&&t.host!==r.host&&((a||n)&&plausible("Outbound Link: Click",{props:{url:t.href}}),t.target&&!t.target.match(/^_(self|parent|top)$/i)||e.ctrlKey||e.metaKey||e.shiftKey||!n||(setTimeout(function(){r.href=t.href},150),e.preventDefault()))}o.addEventListener("click",d),o.addEventListener("auxclick",d);var w=window.plausible&&window.plausible.q||[];window.plausible=i;for(var f=0;f<w.length;f++)i.apply(this,w[f])}();
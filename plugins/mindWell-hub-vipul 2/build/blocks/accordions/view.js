(()=>{"use strict";var e={n:o=>{var t=o&&o.__esModule?()=>o.default:()=>o;return e.d(t,{a:t}),t},d:(o,t)=>{for(var r in t)e.o(t,r)&&!e.o(o,r)&&Object.defineProperty(o,r,{enumerable:!0,get:t[r]})},o:(e,o)=>Object.prototype.hasOwnProperty.call(e,o)};const o=window.wp.domReady;e.n(o)()((()=>{document.querySelectorAll(".faq__accordion--item")?.forEach((e=>{e?.addEventListener("toggle",(function(){var e;this.open?(this.classList.add("open"),e=this,e.closest(".faq__accordion--items").querySelectorAll(".faq__accordion--item")?.forEach((o=>{o!==e&&o.open&&(o.removeAttribute("open"),o.classList.remove("open"))}))):this.classList.remove("open")}))}))}))})();
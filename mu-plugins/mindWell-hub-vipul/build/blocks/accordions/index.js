(()=>{"use strict";var e,t={451:()=>{const e=window.wp.blocks,t=window.React,l=window.wp.blockEditor,n=window.wp.i18n,o=window.wp.components,r=window.wp.element;function i({attributes:e,setAttributes:i}){const{postUrl:a,customAccordion:c=[]}=e,[s,d]=(0,r.useState)({}),[m,u]=(0,r.useState)(a||""),[p,w]=(0,r.useState)({title:"",body:""}),_=e=>{try{return new URL(e),!0}catch{return!1}};return(0,t.createElement)(l.InspectorControls,null,(0,t.createElement)(o.PanelBody,{title:(0,n.__)("Accordion settings","mindwell")},(0,t.createElement)(o.TextControl,{placeholder:(0,n.__)("Enter API URL","mindwell"),value:m,onChange:e=>{_(e)?(d({...s,apiUrl:""}),u(e)):d({...s,apiUrl:(0,n.__)("Please enter a valid URL","mindwell")})},help:s.apiUrl?(0,t.createElement)(o.Notice,{status:"warning",isDismissible:!1},s.apiUrl):""}),(0,t.createElement)(o.ButtonGroup,null,(0,t.createElement)(o.Button,{variant:"primary",onClick:()=>{_(m)&&m&&i({...e,postUrl:m})},icon:"plus-alt2",label:(0,n.__)("Fetch Posts","mindwell")},(0,n.__)("Fetch Posts","mindwell"))),(0,t.createElement)(o.PanelBody,{title:(0,n.__)("Add Custom Accordion","mindwell"),className:"custom-accordion__panel"},(0,t.createElement)("h2",null,(0,n.__)("Title","mindwell")),(0,t.createElement)(o.TextControl,{placeholder:(0,n.__)("Enter Accordion Title","mindwell"),value:p.title,onChange:e=>w({...p,title:e})}),(0,t.createElement)("h2",null,(0,n.__)("Body","mindwell")),(0,t.createElement)(o.TextControl,{placeholder:(0,n.__)("Enter Accordion Body","mindwell"),value:p.body,onChange:e=>w({...p,body:e}),help:s.newAccordionItem?(0,t.createElement)(o.Notice,{status:"warning",isDismissible:!1},s.newAccordionItem):""}),(0,t.createElement)(o.Button,{variant:"primary",onClick:()=>{p.title&&p.body?(i({...e,customAccordion:[...c,p]}),w({title:"",body:""}),d({...s,newAccordionItem:""})):d({...s,newAccordionItem:(0,n.__)("Please enter both title and body","mindwell")})},icon:"plus-alt2",label:(0,n.__)("Add Accordion Item","mindwell")},(0,n.__)("Add Accordion Item","mindwell")))))}const a=({index:e,title:l,body:r,removable:i,handleRemoveCustomAccordion:a})=>(0,t.createElement)("li",null,(0,t.createElement)("details",{className:"faq__accordion--item"},(0,t.createElement)("summary",null,(0,t.createElement)("span",null,l),(0,t.createElement)(o.ButtonGroup,null,i&&(0,t.createElement)(o.Button,{variant:"secondary",isDestructive:!0,onClick:()=>{a(e)}},(0,n.__)("Remove","mindwell"))))),(0,t.createElement)("p",{className:"faq__accordion--item-content"},r)),c=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"mindwell/accordion","parent":["mindwell/faq"],"title":"Accordions","description":"Accordions block","icon":"table-row-after","category":"mindwell-blocks","textdomain":"mindwell","editorScript":"file:./index.js","editorStyle":"file:./index.css","viewScript":"file:./view.js","style":"file:./style-index.css","render":"file:./render.php","supports":{"html":false,"anchor":true,"reusable":false},"attributes":{"postUrl":{"type":"string","default":"https://jsonplaceholder.typicode.com/posts?_limit=6"},"customAccordion":{"type":"array","default":[]}}}');(0,e.registerBlockType)(c.name,{...c,edit:({attributes:e,setAttributes:c})=>{const{postUrl:s}=e,{customAccordion:d}=e,{data:m,loading:u,error:p}=(e=>{const[t,l]=(0,r.useState)([]),[o,i]=(0,r.useState)(!1),[a,c]=(0,r.useState)(null);return(0,r.useEffect)((()=>((async()=>{if(e&&"string"==typeof e){i(!0);try{const t=await fetch(e);if(!t.ok)throw new Error((0,n.__)("Failed to fetch data","mindwell"));let o;try{o=await t.json()}catch(e){throw new Error((0,n.__)("API response is not valid","mindwell"))}c(null),l(o)}catch(e){c(e.message||(0,n.__)("Something went wrong","mindwell"))}finally{i(!1)}}else c((0,n.__)("Please Enter a valid URL.","mindwell"))})(),()=>{l([]),c(null)})),[e]),{data:t,loading:o,error:a}})(s),w=t=>{const l=[...d];l.splice(t,1),c({...e,customAccordion:l})};return(0,t.createElement)("div",{...(0,l.useBlockProps)({className:"faq__accordion"})},(0,t.createElement)("ul",{className:"faq__accordion--items",id:"faq__accordion--items"},p&&(0,t.createElement)("li",null,p),u&&(0,t.createElement)(o.Spinner,null),m?.map(((e,l)=>(0,t.createElement)(a,{key:l,index:l,title:e.title,body:e.body,removable:!1}))),0===d?.length&&(0,t.createElement)("li",{className:"lead-text"},(0,n.__)("Custom Accordions will appear here..","mindwell"),"."),d?.map(((e,l)=>(0,t.createElement)(a,{key:l,index:l,title:e.title,body:e.body,removable:!0,handleRemoveCustomAccordion:w})))),(0,t.createElement)(i,{attributes:e,setAttributes:c}))},save:()=>null})}},l={};function n(e){var o=l[e];if(void 0!==o)return o.exports;var r=l[e]={exports:{}};return t[e](r,r.exports,n),r.exports}n.m=t,e=[],n.O=(t,l,o,r)=>{if(!l){var i=1/0;for(d=0;d<e.length;d++){for(var[l,o,r]=e[d],a=!0,c=0;c<l.length;c++)(!1&r||i>=r)&&Object.keys(n.O).every((e=>n.O[e](l[c])))?l.splice(c--,1):(a=!1,r<i&&(i=r));if(a){e.splice(d--,1);var s=o();void 0!==s&&(t=s)}}return t}r=r||0;for(var d=e.length;d>0&&e[d-1][2]>r;d--)e[d]=e[d-1];e[d]=[l,o,r]},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={681:0,633:0};n.O.j=t=>0===e[t];var t=(t,l)=>{var o,r,[i,a,c]=l,s=0;if(i.some((t=>0!==e[t]))){for(o in a)n.o(a,o)&&(n.m[o]=a[o]);if(c)var d=c(n)}for(t&&t(l);s<i.length;s++)r=i[s],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(d)},l=globalThis.webpackChunkmindwell=globalThis.webpackChunkmindwell||[];l.forEach(t.bind(null,0)),l.push=t.bind(null,l.push.bind(l))})();var o=n.O(void 0,[633],(()=>n(451)));o=n.O(o)})();
(this.webpackJsonposa2cde=this.webpackJsonposa2cde||[]).push([[0],{15:function(t,e,n){t.exports=n(38)},20:function(t,e,n){},38:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),o=n(13),c=n.n(o),u=(n(20),n(14)),i=n(2),l=function(t){var e=t.note,n=t.toggleImportance,r=e.important?"make not important":"make important";return a.a.createElement("li",{className:"note"},e.content,a.a.createElement("button",{onClick:n},r))},f=n(3),m=n.n(f),s=function(){return m.a.get("/notes").then((function(t){return t.data}))},p=function(t){return m.a.post("/notes",t).then((function(t){return t.data}))},b=function(t,e){return m.a.put("".concat("/notes","/").concat(t),e).then((function(t){return t.data}))},O=function(t){var e=t.message;return null===e?null:a.a.createElement("div",{className:"error"},e)};function d(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}var v=function(){return a.a.createElement("div",{style:{color:"green",fontStyle:"italic",fontSize:16}},a.a.createElement("br",null),a.a.createElement("em",null,"Note app, Department of Computer Science, University of Helsinki 2019"))},E=function(){var t=Object(r.useState)([]),e=Object(i.a)(t,2),n=e[0],o=e[1],c=Object(r.useState)(""),f=Object(i.a)(c,2),m=f[0],E=f[1],g=Object(r.useState)(!0),h=Object(i.a)(g,2),j=h[0],y=h[1],S=Object(r.useState)(null),w=Object(i.a)(S,2),k=w[0],P=w[1];Object(r.useEffect)((function(){s().then((function(t){return o(t)}))}),[]);var D=j?n:n.filter((function(t){return t.important})),N=function(t){var e=n.find((function(e){return e.id===t})),r=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?d(n,!0).forEach((function(e){Object(u.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):d(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},e,{important:!e.important});b(t,r).then((function(e){o(n.map((function(n){return n.id!==t?n:e})))})).catch((function(r){P("Note '".concat(e.content,"' was already removed from server")),setTimeout((function(){P(null)}),5e3),o(n.filter((function(e){return e.id!==t})))}))};return a.a.createElement("div",null,a.a.createElement("h1",null,"Notes"),a.a.createElement(O,{message:k}),a.a.createElement("div",null,a.a.createElement("button",{onClick:function(){return y(!j)}},"show ",j?"important":"all")),a.a.createElement("ul",null,D.map((function(t){return a.a.createElement(l,{key:t.id,note:t,toggleImportance:function(){return N(t.id)}})}))),a.a.createElement("form",{onSubmit:function(t){t.preventDefault();var e={content:m,date:(new Date).toISOString(),important:Math.random()>.5,id:n.length+1};p(e).then((function(t){o(n.concat(t)),E("")}))}},a.a.createElement("input",{value:m,onChange:function(t){E(t.target.value)}}),a.a.createElement("button",{type:"submit"},"save")),a.a.createElement(v,null))};c.a.render(a.a.createElement(E,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.f97dffa1.chunk.js.map
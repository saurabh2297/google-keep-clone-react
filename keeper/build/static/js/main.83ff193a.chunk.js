(this.webpackJsonpkeeper=this.webpackJsonpkeeper||[]).push([[0],{53:function(e,t,n){"use strict";n.r(t);var c=n(2),r=n(0),j=n(7),a=n.n(j),i=n(38),o=n(22),s=n(34),l=n.n(s);var u=function(){return Object(c.jsx)("header",{children:Object(c.jsxs)("h1",{children:[Object(c.jsx)(l.a,{}),"Kepper"]})})},b=(new Date).getFullYear();var O=function(){return Object(c.jsx)("footer",{children:Object(c.jsxs)("p",{children:["copyright \xa9",b]})})},d=n(36),x=n.n(d);var h=function(e){return Object(c.jsxs)("div",{className:"note",children:[Object(c.jsx)("h1",{children:e.title}),Object(c.jsx)("p",{children:e.content}),Object(c.jsx)("button",{onClick:function(){e.onDelete(e.id)},children:Object(c.jsx)(x.a,{})})]})},f=n(26),p=n(33),v=n(37),m=n.n(v),k=n(70),g=n(71);var C=function(e){var t=Object(r.useState)(!1),n=Object(o.a)(t,2),j=n[0],a=n[1],i=Object(r.useState)({title:"",content:""}),s=Object(o.a)(i,2),l=s[0],u=s[1];function b(e){var t=e.target,n=t.name,c=t.value;u((function(e){return Object(p.a)(Object(p.a)({},e),{},Object(f.a)({},n,c))}))}return Object(c.jsx)("div",{children:Object(c.jsxs)("form",{className:"create-note",children:[j&&Object(c.jsx)("input",{onChange:b,value:l.title,name:"title",type:"text",placeholder:"Title"}),Object(c.jsx)("textarea",{onChange:b,value:l.content,name:"content",type:"text",placeholder:"Take a note...",rows:j?3:1,onClick:function(){a(!0)}}),Object(c.jsx)(g.a,{in:j,children:Object(c.jsx)(k.a,{onClick:function(t){e.onAdd(l),u({title:"",content:""}),a(!1),t.preventDefault()},children:Object(c.jsx)(m.a,{})})})]})})};var w=function(){var e=Object(r.useState)([]),t=Object(o.a)(e,2),n=t[0],j=t[1];function a(e){j((function(t){return t.filter((function(t,n){return n!==e}))}))}return Object(c.jsxs)("div",{children:[Object(c.jsx)(u,{}),Object(c.jsx)(C,{onAdd:function(e){j((function(t){return[].concat(Object(i.a)(t),[e])}))}}),n.map((function(e,t){return Object(c.jsx)(h,{id:t,title:e.title,content:e.content,onDelete:a},t)})),Object(c.jsx)(O,{})]})};a.a.render(Object(c.jsx)(w,{}),document.getElementById("root"))}},[[53,1,2]]]);
//# sourceMappingURL=main.83ff193a.chunk.js.map
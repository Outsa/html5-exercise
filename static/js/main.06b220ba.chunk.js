(this["webpackJsonphtml5-exercise"]=this["webpackJsonphtml5-exercise"]||[]).push([[0],{15:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var a=n(2),i=n.n(a),c=n(16),r=n.n(c),s=(n(15),n(8)),o=n(5),l="Phone number",j="E-mail address",d=["Albie Alvey","Avalon Wyndham","Deloris Alvey","Elicia Meadows","Eliott Spalding","Fabian Morris","Fay Deering","Gayla Goodwin","Hazel Salvage","Jayden Stainthorpe","Kathie Upton","Kayley Wilkinson","Kerr Selby","Kizzy Arrington","Leah Belmont","Louisa Macey","Lucian Hill","Philippa Eldred","Rylee Fairbairn","Yolanda Hext"],b={id:0,name:"",phone:"",email:""},u=n(0),h=function(){return Object(u.jsxs)("div",{className:"header",children:[Object(u.jsx)("span",{className:"logo"}),"Word Software"]})},p=n(3),O=n(9),m=n(4),x=function(e,t){e.preventDefault();var n=function(e){var t={},n=e.name,a=e.email,i=e.phone;return n||(t.name="Name is required"),i?/^[0-9\b]+$/.test(i)||(t.phone="Phone is invalid"):t.phone="Phone is required",a?/\S+@\S+\.\S+/.test(a)||(t.email="Email address is invalid"):t.email="Email address is required",t}(t);return 0===Object.entries(n).length||(alert(Object.values(n).join("\n")),!1)},f=Object(a.createContext)({}),v=f,y=function(e){var t=e.children,n=Object(a.useState)(Array.from(d,(function(e,t){return{id:t+1,name:e,phone:"050"+(n=1e6,a=9e6,n=Math.ceil(n),a=Math.floor(a),Math.floor(Math.random()*(a-n)+n)),email:e.toLowerCase().replace(" ",".")+"@gmail.com"};var n,a}))),i=Object(m.a)(n,2),c=i[0],r=i[1],s=Object(a.useState)(20),o=Object(m.a)(s,2),l=o[0],j=o[1];return Object(u.jsx)(f.Provider,{value:{participants:c,addParticipant:function(e){var t=l+1;r([].concat(Object(O.a)(c),[Object(p.a)(Object(p.a)({},e),{},{id:t})])),j(t)},updateParticipant:function(e){var t=e.id,n=c.findIndex((function(e){return e.id===t})),a=c.slice(0,n),i=c.slice(n+1,c.length);r([].concat(Object(O.a)(a),[Object(p.a)({},e)],Object(O.a)(i)))},deleteParticipant:function(e){r(c.filter((function(t){return t.id!==e})))},sortParticipants:function(e){var t=e.key,n=e.desc,a=Object(O.a)(c).sort((function(e,a){var i=e[t].toString().toLowerCase(),c=a[t].toString().toLowerCase();return n?c>i?1:-1:c>i?-1:1}));r(a)}},children:t})},g=n(12),C=n(7),S=function(e){var t=e.children,n=void 0===t?null:t,a=e.isHeader,i=void 0!==a&&a,c=Object(C.a)(e,["children","isHeader"]);return Object(u.jsx)("span",Object(p.a)(Object(p.a)({className:i?"table-header":"table-cell"},c),{},{children:n}))},P=S,N=function(e){var t=e.children,n=void 0===t?null:t,a=Object(C.a)(e,["children"]);return Object(u.jsx)(S,Object(p.a)(Object(p.a)({isHeader:!0},a),{},{children:n}))},w=function(e){var t=e.title,n=e.fieldName,i=e.sortType,c=e.setSortType,r=Object(a.useState)(!1),s=Object(m.a)(r,2),o=s[0],l=s[1];return Object(u.jsxs)(N,{onClick:function(){return function(){var e=!o;c({desc:e,key:n}),l(e)}()},children:[t,i.key===n&&Object(u.jsx)(g.a,{icon:o?"arrow-up":"arrow-down"})]})},k=n(10),F=function(e){var t=Object(a.useState)(e||b),n=Object(m.a)(t,2),i=n[0],c=n[1];return{editableParticipant:i,handleParticipantFieldChange:function(e,t){c(Object(p.a)(Object(p.a)({},i),{},Object(k.a)({},t,e.target.value)))},initEditableParticipant:function(){c(b)}}},E=function(){var e=Object(a.useContext)(v);if(void 0===e)throw new Error("useParticipants must be used within a ParticipantProvider");return e},T=function(e){var t=e.onClickFn,n=e.icon;return Object(u.jsx)("button",{type:"button",className:"icon-button",onClick:function(){return t()},children:Object(u.jsx)(g.a,{icon:n})})},M=function(e){var t=e.className,n=e.buttonText,a=e.type,i=void 0===a?"button":a,c=e.onClick;return Object(u.jsx)("button",{className:"text-button ".concat(t),type:i||"button",onClick:c,children:n})},A=function(e){var t=Object.assign({},e);return Object(u.jsx)(M,Object(p.a)(Object(p.a)({},t),{},{type:"submit"}))},L=function(e){var t=e.name,n=e.placeholder,a=e.participant,i=e.handleChange;return Object(u.jsx)(P,{children:Object(u.jsx)("input",{name:t,placeholder:n,type:"text",value:a[t],onChange:function(e){return i(e,t)}})})},H=function(e){var t=e.participant,n=e.handleChange;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(L,{name:"name",placeholder:"Full name",participant:t,handleChange:n}),Object(u.jsx)(L,{name:"email",placeholder:j,participant:t,handleChange:n}),Object(u.jsx)(L,{name:"phone",placeholder:l,participant:t,handleChange:n})]})},K=function(e){var t=e.onSubmitFn,n=e.children,a=e.className;return Object(u.jsx)("form",{onSubmit:t,className:"table-row"+(a?" "+a:""),children:n})},q=function(){var e=E().addParticipant,t=F(),n=t.editableParticipant,a=t.initEditableParticipant,i=t.handleParticipantFieldChange;return Object(u.jsxs)(K,{onSubmitFn:function(t){x(t,Object(p.a)({},n))&&(e(n),a())},className:"add-participant-form",children:[Object(u.jsx)(H,{participant:n,handleChange:i}),Object(u.jsx)(P,{children:Object(u.jsx)(A,{className:"text-button add-button",buttonText:"Add new"})})]})},z=function(e){var t=e.participant,n=e.setEditable,a=E().updateParticipant,i=F(t),c=i.editableParticipant,r=i.handleParticipantFieldChange;return Object(u.jsxs)(K,{onSubmitFn:function(e){x(e,c)&&(a(c),n(!1))},children:[Object(u.jsx)(H,{participant:c,handleChange:r}),Object(u.jsxs)(P,{children:[Object(u.jsx)(M,{className:"cancel-button",onClick:function(){return n(!1)},buttonText:"Cancel"}),Object(u.jsx)(A,{className:"save-button",buttonText:"Save"})]})]})},D=function(e){var t=e.children,n=Object(C.a)(e,["children"]);return Object(u.jsx)("div",Object(p.a)(Object(p.a)({className:"table-row"},n),{},{children:t}))},J=function(e){var t=e.participant,n=Object(a.useState)(!1),i=Object(m.a)(n,2),c=i[0],r=i[1],s=E().deleteParticipant;return c?Object(u.jsx)(z,{participant:t,setEditable:r}):Object(u.jsxs)(D,{onClick:function(){return r(!0)},children:[Object(u.jsx)(P,{children:t.name}),Object(u.jsx)(P,{children:t.email}),Object(u.jsx)(P,{children:t.phone}),Object(u.jsxs)(P,{children:[Object(u.jsx)(T,{onClickFn:function(){return r(!1)},icon:"pen"}),Object(u.jsx)(T,{onClickFn:function(){return s(t.id)},icon:"trash"})]})]})},W=function(){var e=E(),t=e.participants,n=e.sortParticipants,i=Object(a.useState)({key:"name",desc:void 0}),c=Object(m.a)(i,2),r=c[0],s=c[1];return Object(a.useEffect)((function(){void 0!==r.desc&&n(r)}),[r]),Object(u.jsxs)("div",{className:"table",children:[Object(u.jsx)(q,{}),Object(u.jsxs)(D,{children:[Object(u.jsx)(w,{title:"Name",fieldName:"name",sortType:r,setSortType:s}),Object(u.jsx)(w,{title:j,fieldName:"email",sortType:r,setSortType:s}),Object(u.jsx)(w,{title:l,fieldName:"phone",sortType:r,setSortType:s}),Object(u.jsx)(N,{})]}),t.map((function(e){return Object(u.jsx)(J,{participant:e},e.id)}))]})},B=function(){return Object(u.jsxs)("div",{className:"content",children:[Object(u.jsx)("h1",{children:"List of Participants"}),Object(u.jsx)(y,{children:Object(u.jsx)(W,{})})]})},G=function(){return o.b.add(s.d,s.c,s.b,s.a),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(h,{}),Object(u.jsx)(B,{})]})};r.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(G,{})}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.06b220ba.chunk.js.map
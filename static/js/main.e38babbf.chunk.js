(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{34:function(e,t,n){e.exports={contact_form:"Form_contact_form__2kgVi",form_input:"Form_form_input__3p7qB"}},54:function(e,t,n){e.exports={filter_input:"Filter_filter_input__19JVD"}},63:function(e,t,n){},72:function(e,t,n){},93:function(e,t,n){"use strict";n.r(t);n(63);var c,o,r=n(0),a=n.n(r),i=n(17),u=n.n(i),s=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,113)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),c(e),o(e),r(e),a(e)}))},b=n(15),j=n(33),l=n(6),O=n(53),d=n.n(O),f=n(7),p=n(5),h=Object(l.b)("phonebook/ADD_CONTACT_R"),m=Object(l.b)("phonebook/ADD_CONTACT_S"),v=Object(l.b)("phonebook/ADD_CONTACT_F"),_=Object(l.b)("phonebook/DELETE_CONTACT_R"),g=Object(l.b)("phonebook/DELETE_CONTACT_S"),x=Object(l.b)("phonebook/DELETE_CONTACT_F"),C=Object(l.b)("phonebook/TOGGLE_FAVOURITE_R"),T=Object(l.b)("phonebook/TOGGLE_FAVOURITE_S"),k=Object(l.b)("phonebook/TOGGLE_FAVOURITE_F"),y=Object(l.b)("phonebook/FILTER_CONTACT"),N=[],A="",E=!1,F=Object(l.c)(N,(c={},Object(p.a)(c,m,(function(e,t){t.type;var n=t.payload;return[].concat(Object(j.a)(e),[n])})),Object(p.a)(c,g,(function(e,t){t.type;var n=t.payload;return e.filter((function(e){return e.id!==n}))})),Object(p.a)(c,T,(function(e,t){t.type;var n=t.payload;return e.map((function(e){return e.id===n.id?n:e}))})),c)),L=(Object(l.c)(E,(o={},Object(p.a)(o,h,(function(){return!0})),Object(p.a)(o,m,(function(){return!1})),Object(p.a)(o,v,(function(){return!1})),Object(p.a)(o,_,(function(){return!0})),Object(p.a)(o,g,(function(){return!1})),Object(p.a)(o,x,(function(){return!1})),Object(p.a)(o,C,(function(){return!0})),Object(p.a)(o,T,(function(){return!1})),Object(p.a)(o,k,(function(){return!1})),o)),Object(l.c)(A,Object(p.a)({},y,(function(e,t){t.type;return t.payload})))),D=Object(f.c)({contacts:F,filter:L}),w=Object(f.c)({phonebook:D}),P=Object(l.a)({reducer:w,devTools:!0,middleware:[].concat(Object(j.a)(Object(l.d)()),[d.a])}),R=(n(72),n(21)),S=n(58),B=n(34),G=n(112),I=n(111),V=(n(43),n(19)),U=n(28),q=n.n(U);q.a.defaults.baseURL="http://localhost:4000";var z=n(2),H=function(){var e=Object(b.c)((function(e){return e.phonebook.contacts})),t=Object(b.b)(),n=Object(r.useState)({name:"",number:""}),c=Object(S.a)(n,2),o=c[0],a=c[1],i=function(e){var t=e.target,n=t.name,c=t.value;a(Object(R.a)(Object(R.a)({},o),{},Object(p.a)({},n,c)))},u=function(n){var c,o=n.name,r=n.number,i=/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/.test(o),u=/(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})/.test(r);e.some((function(e){return e.name===o}))?V.b.warn("".concat(o," is already in contacts!"),{position:"top-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}):!0!==i?V.b.error("The name can only consist of letters, apostrophes, dashes and spaces.",{position:"top-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}):!0!==u?V.b.error("The phone number must be 11-12 digits long and can contain numbers, spaces, dashes, pot-bellied brackets and can start with +",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}):(t((c={name:o,number:r},function(e){var t=Object(R.a)(Object(R.a)({},c),{},{favourite:!1});e(h()),q.a.post("/contacts",t).then((function(t){var n=t.data;return e(m(n))})).catch((function(t){return e(v(t))}))})),a({name:"",number:""}))};return Object(z.jsxs)(z.Fragment,{children:[Object(z.jsxs)("form",{className:B.contact_form,noValidate:!0,autoComplete:"off",onSubmit:function(e){e.preventDefault(),u(o)},children:[Object(z.jsx)(G.a,{placeholder:"Name",className:B.form_input,inputProps:{"aria-label":"contact name"},type:"text",onChange:i,name:"name",value:o.name,id:"name",required:!0,variant:"outlined"}),Object(z.jsx)(G.a,{placeholder:"Number",className:B.form_input,inputProps:{"aria-label":"contact number"},type:"tel",onChange:i,name:"number",value:o.number,id:"number",required:!0}),Object(z.jsx)(I.a,{variant:"contained",type:"submit",children:"Add contact"})]}),Object(z.jsx)(V.a,{})]})},J=n(54),Z=function(){var e=Object(b.c)((function(e){return e.phonebook.filter})),t=Object(b.b)();return Object(z.jsx)("div",{children:Object(z.jsx)(G.a,{type:"text",placeholder:"search contact",name:"filter",value:e,onChange:function(e){return t(y(e.target.value))},className:J.filter_input})})},M=n(55),$=n.n(M),K=n(57),Q=n.n(K),W=n(56),X=n.n(W),Y=n(35),ee=function(){var e=Object(b.c)((function(e){return e.phonebook.contacts})),t=Object(b.c)((function(e){return e.phonebook.filter})),n=Object(b.b)(),c=function(){var n=t.toLowerCase();return e.filter((function(e){var t=e.name,c=e.number;return t.toLowerCase().includes(n)||c.toLowerCase().includes(n)}))},o=function(e){return n(function(e){return function(t){t(_()),q.a.delete("/contacts/".concat(e)).then((function(){return t(g(e))})).catch((function(e){return t(x(e))}))}}(e))},r=function(e){return n(function(e){var t=e.id,n=e.favourite;return function(e){e(C());var c={favourite:n};q.a.patch("/contacts/".concat(t),c).then((function(t){var n=t.data;return e(T(n))})).catch((function(t){return e(k(t))}))}}(e))};return Object(z.jsx)(z.Fragment,{children:c().length?Object(z.jsx)("ol",{className:"contact-list",children:c().map((function(e){var t=e.name,n=e.number,c=e.id,a=e.favourite;return Object(z.jsxs)("li",{children:[Object(z.jsxs)("p",{className:"contact-text",children:[Object(z.jsx)("span",{children:t}),Object(z.jsx)("span",{children:n})]}),Object(z.jsx)(I.a,{className:"delete-button",onClick:function(){return o(c)},children:Object(z.jsx)($.a,{color:"secondary"})}),Object(z.jsx)(I.a,{className:"favourite-button",onClick:function(){return r({id:c,favourite:!a})},children:a?Object(z.jsx)(X.a,{style:{color:Y.a[500]}}):Object(z.jsx)(Q.a,{color:"secondary"})})]},t)}))}):Object(z.jsx)("p",{children:"Contact list is empty"})})},te=function(){return Object(z.jsxs)("div",{className:"container",children:[Object(z.jsx)("h1",{children:"Phonebook"}),Object(z.jsx)(H,{}),Object(z.jsx)("h2",{children:"Contacts"}),Object(z.jsx)(Z,{}),Object(z.jsx)(ee,{})]})};u.a.render(Object(z.jsx)(b.a,{store:P,children:Object(z.jsx)(a.a.StrictMode,{children:Object(z.jsx)(te,{})})}),document.getElementById("root")),s()}},[[93,1,2]]]);
//# sourceMappingURL=main.e38babbf.chunk.js.map
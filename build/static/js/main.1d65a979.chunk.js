(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{18:function(e,t,a){e.exports=a(41)},23:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(15),c=a.n(l),u=(a(23),a(2)),s=function(e){var t=e.users,a=e.updateUsers,l=Object(n.useState)(""),c=Object(u.a)(l,2),s=c[0],m=c[1];return Object(n.useEffect)((function(){var e=""===s?t:t.filter((function(e){return e.name.first.toLowerCase().indexOf(s.toLowerCase())>=0}));a(e)}),[s,t]),r.a.createElement("input",{value:s,onChange:function(e){return m(e.target.value)}})},m=a(17),o=(a(6),function(e){var t=e.users,a=Object(n.useState)([]),l=Object(u.a)(a,2),c=l[0],s=l[1];return Object(n.useEffect)((function(){return s(t)}),[t]),r.a.createElement("div",null,r.a.createElement("table",{className:"table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null," "),r.a.createElement("th",{scope:"col",onClick:function(){var e=Object(m.a)(t).sort((function(e,t){var a=e.name.first,n=t.name.first;return a<n?-1:a>n?1:0}));s(e)}},r.a.createElement("u",null,"FirstName")),r.a.createElement("th",{scope:"col"},"LastName"),r.a.createElement("th",{scope:"col"},"Email"),r.a.createElement("th",{scope:"col"},"Phone Number"))),r.a.createElement("tbody",null,c.map((function(e){var t=e.picture.thumbnail,a=e.phone,n=e.email,l=e.name,c=l.first,u=l.last;return r.a.createElement("tr",{key:n},r.a.createElement("td",null,r.a.createElement("img",{src:t})),r.a.createElement("th",null,c),r.a.createElement("td",null,u),r.a.createElement("td",null,n),r.a.createElement("td",null,a),r.a.createElement("td",null))})))))}),i=a(16),E=a.n(i);var f=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)([]),m=Object(u.a)(c,2),i=m[0],f=m[1];return Object(n.useEffect)((function(){E.a.get("https://randomuser.me/api/?results=200&nat=us").then((function(e){var t=e.data.results;return l(t)}))}),[]),r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"App-header"},r.a.createElement("h1",null,"Employee Directory"),r.a.createElement("p",null,"To Sort by First name, please click on FirstName. To Filter by first name please enter name into text box."),r.a.createElement(s,{users:a,updateUsers:f})),r.a.createElement(o,{users:i}))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,null)),document.getElementById("root"))},6:function(e,t,a){}},[[18,1,2]]]);
//# sourceMappingURL=main.1d65a979.chunk.js.map
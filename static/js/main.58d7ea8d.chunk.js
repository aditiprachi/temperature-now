(this["webpackJsonptemperature-now"]=this["webpackJsonptemperature-now"]||[]).push([[0],{20:function(e,t,a){},21:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a.n(n),i=a(14),s=a.n(i),m=(a(20),a(21),a(5),a(3)),r=a(15),j=a.n(r),o=a(0);var d=function(){var e=Object(n.useState)("Mumbai"),t=Object(m.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)({temp:"",min:"",max:""}),s=Object(m.a)(i,2),r=s[0],d=s[1],l=Object(n.useState)(""),u=Object(m.a)(l,2),b=u[0],h=u[1];return Object(n.useEffect)((function(){j.a.get("https://api.openweathermap.org/data/2.5/weather?q=".concat(a,"&units=metric&appid=44dc9ea8e39f5201664d59a3572a9d27")).then((function(e){console.log(e),d({temp:e.data.main.temp,min:e.data.main.temp_min,max:e.data.main.temp_max}),h(e.data.main)})).catch((function(e){console.log(e),d({temp:"",min:"",max:""}),h("")}))}),[a]),Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{children:Object(o.jsx)("h1",{className:"heading",children:"Temperature Now"})}),Object(o.jsxs)("div",{className:"box",children:[Object(o.jsx)("div",{className:"inputData",children:Object(o.jsx)("input",{className:"inputFeild",type:"text",onChange:function(e){c(e.target.value)},value:a})}),b?Object(o.jsx)("div",{children:Object(o.jsxs)("div",{className:"info",children:[Object(o.jsxs)("h2",{className:"location",children:[Object(o.jsx)("i",{className:"fas fa-map-marker-alt"}),a]}),Object(o.jsx)("h1",{className:"temp",children:r.temp}),Object(o.jsxs)("h3",{className:"tempmin_max",children:["Max ",r.max," | Min ",r.min]})]})}):Object(o.jsx)("h1",{className:"errorInfo",children:"No data found"}),Object(o.jsx)("div",{className:"wave"})]})]})};var l=function(){return Object(o.jsx)("div",{className:"App",children:Object(o.jsx)(d,{})})},u=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,42)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,i=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),i(e),s(e)}))};s.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(l,{})}),document.getElementById("root")),u()},5:function(e,t,a){}},[[41,1,2]]]);
//# sourceMappingURL=main.58d7ea8d.chunk.js.map
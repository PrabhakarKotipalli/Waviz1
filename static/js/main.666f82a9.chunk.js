(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{126:function(e,t,n){"use strict";n.r(t);var c=n(3),a=n(4),s=n.n(a),r=n(20),i=n.n(r),o=n(41),l=n.n(o),j=n(53),b=n(12),u=(n(32),function(e){var t=e.Flight,n=Math.floor(50*Math.random())+10;return Object(c.jsx)("a",{href:"",children:Object(c.jsxs)("div",{className:"Flights",children:[Object(c.jsxs)("p",{children:[Object(c.jsx)("b",{children:"Flight Name:"})," ",t]}),Object(c.jsxs)("p",{class:"Price",children:[Object(c.jsx)("b",{children:"Price:"})," ",n,"$"]}),Object(c.jsx)("button",{className:"btn btn-outline-primary",children:"Book Now"}),Object(c.jsx)("hr",{})]})})}),d=n(54),h=n.n(d);n(63);var O=function(){var e=Object(a.useState)([]),t=Object(b.a)(e,2),n=t[0],s=t[1],r=Object(a.useState)(""),i=Object(b.a)(r,2),o=i[0],d=i[1],O=Object(a.useState)([]),p=Object(b.a)(O,2),f=(p[0],p[1],Object(a.useState)(null)),x=Object(b.a)(f,2),m=x[0],g=x[1],v=Object(a.useState)("US-NY"),S=Object(b.a)(v,2),y=S[0],k=S[1],F=Object(a.useState)("SFO-sky"),C=Object(b.a)(F,2),D=C[0],N=C[1],w=Object(a.useState)(""),I=Object(b.a)(w,2),P=I[0],U=I[1];Object(a.useEffect)((function(){console.log("Calling Use effect"),B()}),[y,m,D]);var B=function(){var e=Object(j.a)(l.a.mark((function e(){var t,n,c,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return null!=m?(t=m.toISOString(),n=t.slice(0,10),console.log(n)):n="2020-12-20",e.next=3,fetch("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/".concat(D,"/").concat(y,"/").concat(n,"?inboundpartialdate=").concat(n),{method:"GET",headers:{"x-rapidapi-key":"36a93f6ea0msh2414af55d6f88eap14a4c9jsn04cb0f41b6c1","x-rapidapi-host":"skyscanner-skyscanner-flight-search-v1.p.rapidapi.com"}});case 3:return c=e.sent,e.next=6,c.json();case 6:a=e.sent,console.log(a),s(a.Carriers),console.log(a.Carriers);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();if(null!=m){var T=m.toISOString().slice(0,10);console.log(T)}return Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"Dude Airline Bookings: "}),Object(c.jsx)("div",{className:"Input_field",children:Object(c.jsxs)("form",{onSubmit:function(e){e.preventDefault(),k(o),N(P),console.log(o)},children:[Object(c.jsx)("input",{name:"Origin",placeholder:"From",value:o,onChange:function(e){d(e.target.value)}}),Object(c.jsx)("input",{name:"Destination",placeholder:"To",value:P,onChange:function(e){U(e.target.value)}}),Object(c.jsx)("p",{children:"Departure:"})," ",Object(c.jsx)(h.a,{className:"DatePicker",selected:m,onChange:function(e){return g(e)},dateFormat:"yyyy/mm/dd",minDate:new Date}),Object(c.jsx)("p",{children:Object(c.jsx)("button",{className:"btn btn-primary",type:"submit",children:"Search"})})]})}),Object(c.jsx)("h2",{children:"Search Results"}),n.map((function(e){return Object(c.jsx)(u,{Flight:e.Name},e.CarrierId)})),Object(c.jsxs)("div",{class:"lds-roller",children:[Object(c.jsx)("div",{}),Object(c.jsx)("div",{}),Object(c.jsx)("div",{}),Object(c.jsx)("div",{})]})]})},p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,130)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),s(e),r(e)}))};i.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(O,{})}),document.getElementById("root")),p()},32:function(e,t,n){}},[[126,1,2]]]);
//# sourceMappingURL=main.666f82a9.chunk.js.map
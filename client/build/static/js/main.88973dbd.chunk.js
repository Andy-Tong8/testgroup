(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{61:function(e,t,a){e.exports=a(92)},66:function(e,t,a){},67:function(e,t,a){},92:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(7),o=a.n(l),c=(a(66),a(67),a(19)),u=a(54),s=a(15),i=a(27),m=a.n(i),d=a(93),p=a(121),g=a(122),E=a(124),b={paper:{minWidth:"95%",padding:"1rem",display:"flex",justifyContent:"space-evenly"},card:{width:"30%",padding:"1rem",justifyContent:"space-evenly"},input:{marginBottom:"1rem"},button:{width:"100%"}},h=function(e){var t=Object(n.useState)([]),a=Object(s.a)(t,2),l=a[0],o=a[1],i=Object(n.useState)(!1),h=Object(s.a)(i,2),f=h[0],y=h[1],j=Object(n.useState)(1),v=Object(s.a)(j,2),D=v[0],k=v[1];Object(n.useEffect)((function(){console.log("you are in useeffect"),m.a.get("http://localhost:8000/api/readAll/".concat(D)).then((function(e){return o(Object(u.a)(e.data))})).catch((function(e){return console.log(e)}))}),[f,D]);var O=function(e){k(-1*D)},C=function(e,t){3===t?m.a.delete("http://localhost:8000/api/deleteOne/".concat(e._id)).then((function(e){return y(!f)})).catch((function(e){return console.log(e)})):(e.status=t,m.a.put("http://localhost:8000/api/updateOne/".concat(e._id),e).then((function(e){return y(!f)})).catch((function(e){return console.log(e)})))};return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,{elevation:3,style:b.paper},r.a.createElement(p.a,{style:b.card},r.a.createElement(g.a,null,r.a.createElement("div",{className:"backlog"},r.a.createElement("h2",{onClick:O,style:{backgroundColor:"#9FC5F8"}},"Backlog"),l.map((function(e,t){return 0===e.status?r.a.createElement("div",{key:t},r.a.createElement("h4",null,e.name),r.a.createElement("p",{style:{color:new Date(e.dueDate).getTime()-(new Date).getTime()<0?"red":"black"}},"Due: ",e.dueDate.substring(0,10)),r.a.createElement(E.a,{style:{backgroundColor:"#FFE599"},onClick:function(t){return C(e,1)}},"Start Project")):null}))))),r.a.createElement(p.a,{style:b.card},r.a.createElement(g.a,null,r.a.createElement("div",{className:"progress"},r.a.createElement("h2",{onClick:O,style:{backgroundColor:"#FFE599"}},"In Progress"),l.map((function(e,t){return 1===e.status?r.a.createElement("div",{key:t},r.a.createElement("h4",null,e.name),r.a.createElement("p",{style:{color:new Date(e.dueDate).getTime()-(new Date).getTime()<0?"red":"black"}},"Due: ",e.dueDate.substring(0,10)),r.a.createElement(E.a,{style:{backgroundColor:"#B6D7A8"},onClick:function(t){return C(e,2)}},"Move To Completed")):null}))))),r.a.createElement(p.a,{style:b.card},r.a.createElement(g.a,null,r.a.createElement("div",{className:"completed"},r.a.createElement("h2",{onClick:O,style:{backgroundColor:"#B6D7A8"}},"Completed"),l.map((function(e,t){return 2===e.status?r.a.createElement("div",{key:t},r.a.createElement("h4",null,e.name),r.a.createElement("p",{style:{color:new Date(e.dueDate).getTime()-(new Date).getTime()<0?"red":"black"}},"Due: ",e.dueDate.substring(0,10)),r.a.createElement(E.a,{style:{backgroundColor:"#EA9999"},onClick:function(t){return C(e,3)}},"Remove Project")):null})))))),r.a.createElement(E.a,{style:{backgroundColor:"#9FC5F8",display:"inline-block",margin:"1px",textAlign:"left"},onClick:function(){Object(c.c)("/projects/new")}},"Add New Project"))},f=a(33),y=a(51),j=a(125),v=a(126),D=a(127),k=a(123),O={paper:{width:"30rem",padding:"1rem",margin:"0 auto"},input:{marginBottom:"1rem"},button:{width:"400px",backgroundColor:"#9FC5F8"}},C=function(e){var t=Object(n.useState)({name:"",dueDate:""}),a=Object(s.a)(t,2),l=a[0],o=a[1],u=Object(n.useState)(!1),i=Object(s.a)(u,2),p=i[0],g=i[1],b=Object(n.useState)({name:"",dueDate:""}),h=Object(s.a)(b,2),C=h[0],w=h[1],F=Object(n.useState)(!1),P=Object(s.a)(F,2),x=P[0];P[1];Object(n.useEffect)((function(){console.log("you are in form useeffect"),B()}),[C,x,l]);var A=function(e){o(Object(y.a)({},l,Object(f.a)({},e.target.name,e.target.value))),console.log("formstate at the end of onchange is:",l)},B=function(){console.log("you are in validator start");var e=!1;l.name.length>0&&l.name.length<3&&(e=!0),0===l.dueDate.length&&(e=!0),g(e)};return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",{style:{margin:"5px",textAlign:"right"}},r.a.createElement(c.a,{style:{marginRight:"10px"},to:"/"},"Back to Dashboard")),r.a.createElement(d.a,{elevation:3,style:O.paper},r.a.createElement("h2",null,"Plan a new Project"),r.a.createElement("div",null,r.a.createElement("p",{style:{color:"blue"}},l.name.length>0&&l.name.length<3&&"FRONT END: Project name must be at least 3 characters"),r.a.createElement("p",{style:{color:"red"}},C.name),r.a.createElement("p",{style:{color:"red"}},C.dueDate),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),console.log("you are in create onsumbit"),m.a.post("http://localhost:8000/api/create",l).then((function(e){return Object(c.c)("/")})).catch((function(e){console.log("error is:",e.response),"MongoError"==e.response.data.name?w({name:"BACKEND: Project already exists!"}):w({name:e.response.data.errors.name?e.response.data.errors.name.message:"",dueDate:e.response.data.errors.dueDate?e.response.data.errors.dueDate.message:""})}))}},r.a.createElement(j.a,{variant:"outlined",style:O.input},r.a.createElement(v.a,null,"Name"),r.a.createElement(D.a,{id:"name",type:"text",name:"name",onChange:A})),r.a.createElement("br",null),r.a.createElement(j.a,{variant:"outlined",style:O.input},r.a.createElement(k.a,{id:"dueDate",name:"dueDate",label:"Due Date",type:"date",variant:"outlined",onChange:A,InputLabelProps:{shrink:!0}})),r.a.createElement("br",null),r.a.createElement(E.a,{style:O.button,type:"submit",varient:"contained",color:"primary",disabled:p},"Plan Project")))))};var w=function(){return Object(n.useEffect)((function(){Object(c.c)("/")}),[]),r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Project Manager"),r.a.createElement(c.b,null,r.a.createElement(h,{path:"/"}),r.a.createElement(C,{path:"/projects/new"})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[61,1,2]]]);
//# sourceMappingURL=main.88973dbd.chunk.js.map
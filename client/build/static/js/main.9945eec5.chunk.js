(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{109:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),i=n(11),s=n.n(i),r=n(31),o=n.n(r),l=n(53),d=n(30),u=n(18),j="SET_UPLOADING",b="SET_PROCESSING",h="SET_DOWNLOADING",p="SET_RESULT",O="RESET",x=function(e,t){switch(t.type){case j:return Object(u.a)(Object(u.a)({},e),{},{result:null,uploading:!0,processing:!1,downloading:!1});case b:return Object(u.a)(Object(u.a)({},e),{},{processing:!0,uploading:!1,downloading:!1});case h:return Object(u.a)(Object(u.a)({},e),{},{downloading:!0,processing:!1,uploading:!1});case O:return Object(u.a)(Object(u.a)({},e),{},{downloading:!1,processing:!1,uploading:!1});case p:return Object(u.a)(Object(u.a)({},e),{},{downloading:!1,processing:!1,uploading:!1,result:t.payload});default:return e}},f=Object(a.createContext)(),m={url:"https://valid-email.herokuapp.com"},g=n(2),v=function(e){var t=Object(a.useReducer)(x,{uploading:!1,processing:!1,downloading:!1,result:null}),n=Object(d.a)(t,2),c=n[0],i=n[1],s=function(){var e=Object(l.a)(o.a.mark((function e(t){var n,a,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return v(),(n=new FormData).append("file",t[0]),e.next=5,fetch("".concat(m.url,"/email/upload"),{method:"POST",body:n});case 5:return a=e.sent,e.next=8,a.json();case 8:c=e.sent,a.status&&r(c.newName);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),r=function(){var e=Object(l.a)(o.a.mark((function e(t){var n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return y(),e.next=3,fetch("".concat(m.url,"/email/filter"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:t})});case 3:return n=e.sent,e.next=6,n.json();case 6:a=e.sent,n.status&&u(t,a);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=Object(l.a)(o.a.mark((function e(t,n){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return w(),e.next=3,fetch("".concat(m.url,"/email/delete"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({newName:t})});case 3:e.sent.status&&(N(),S(n));case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),v=function(){i({type:j})},y=function(){i({type:b})},w=function(){i({type:h})},S=function(e){i({type:p,payload:e})},N=function(){i({type:O})};return Object(g.jsx)(f.Provider,{value:{uploading:c.uploading,processing:c.processing,downloading:c.downloading,result:c.result,upload:s,process:r,download:u},children:e.children})},y=(n(94),n(141)),w=n(55),S=n(150),N=n(59),E=n.n(N),T=Object(S.a)({nav:{boxShadow:"0 1px 1px #f5f5f5 ",marginBottom:50,padding:10,textAlign:"center",color:"white"}}),k=function(){var e=T(),t=Object(a.useState)(1),n=Object(d.a)(t,2),c=n[0],i=n[1];return Object(a.useEffect)((function(){i(1)}),[c]),Object(g.jsx)("div",{className:e.nav,children:Object(g.jsx)(y.a,{children:c?Object(g.jsxs)(E.a,{avgTypingDelay:50,cursor:{show:!0,blink:!0,element:"",hideWhenDone:!1,hideWhenDoneDelay:1e3},onTypingDone:function(){return i(0)},children:[Object(g.jsx)(w.a,{variant:"h4",children:"Email Verify"}),Object(g.jsx)(E.a.Backspace,{count:11,delay:800})]}):""})})},C=n(148),D=n(146),P=n(147),H=function(){return Object(g.jsxs)("div",{class:"lds-roller",children:[Object(g.jsx)("div",{}),Object(g.jsx)("div",{}),Object(g.jsx)("div",{}),Object(g.jsx)("div",{}),Object(g.jsx)("div",{}),Object(g.jsx)("div",{}),Object(g.jsx)("div",{}),Object(g.jsx)("div",{})]})},A=n(143),B=n(144),I=n(145),W=function(){return Object(g.jsx)("div",{children:Object(g.jsxs)(A.a,{children:[Object(g.jsx)(B.a,{children:Object(g.jsx)(I.a,{primary:"1. Upload CSV format file "})}),Object(g.jsx)(B.a,{children:Object(g.jsx)(I.a,{primary:"2. Emails must be in 1 column (You may include unlimited columns of other data)."})}),Object(g.jsx)(B.a,{children:Object(g.jsx)(I.a,{primary:"3. When finished uploading, you may analyze or clean your list."})})]})})},F=Object(S.a)({result:{minWidth:"90%",maxWidth:"90%",minHeight:"50vh",maxHeight:"50vh",background:"transparent",border:"1px solid #f5f5f5",color:"white",overflowY:"auto",position:"relative","&:focus":{outline:0}}}),L=function(e){var t=e.result,n=F();return Object(g.jsxs)(a.Fragment,{children:[Object(g.jsx)(w.a,{style:{color:"#bdbdbd"},children:"Here are you verify emails"}),Object(g.jsx)("br",{}),Object(g.jsx)("div",{className:n.result,children:t.msg.map((function(e){return Object(g.jsx)(w.a,{style:{padding:"5px"},children:e})}))}),Object(g.jsxs)(w.a,{variant:"h6",style:{color:"teal"},children:[t.filtered,"% of emails filtered out"]})]})},J=Object(S.a)({card:{minHeight:"82vh",maxHeight:"82vh",background:"transparent",color:"#f5f5f5","@media (max-width:780px)":{maxHeight:"82vh",height:"fit-content"}},spinner:{padding:25,marginBottom:5,display:"flex",alignItems:"center",flexDirection:"column"}}),R=function(){var e=J(),t=Object(a.useContext)(f),n=t.processing,c=t.downloading,i=t.uploading,s=t.result;return Object(g.jsx)(D.a,{elevation:2,className:e.card,children:Object(g.jsx)(P.a,{children:Object(g.jsx)(y.a,{className:e.spinner,children:s?Object(g.jsx)(L,{result:s}):Object(g.jsxs)(a.Fragment,{children:[Object(g.jsx)(W,{}),(i||n||c)&&Object(g.jsx)(H,{}),i&&Object(g.jsx)(w.a,{children:"uploading ..."}),n&&Object(g.jsx)(w.a,{children:"processing ..."}),c&&Object(g.jsx)(w.a,{children:"downloading results ..."})]})})})})},_=n(83),G=n(149),U=n(82),Y=n.n(U),z=Object(S.a)({container:{minHeight:"80vh",display:"flex",flexDirection:"column",justifyContent:"center","@media (max-width:780px)":{maxHeight:"80vh",height:"fit-content"}},uploadBtn:{marginTop:15,width:"fit-content"}}),V=function(){var e=z(),t=Object(a.useContext)(f),n=t.processing,c=t.downloading,i=t.uploading,s=t.upload,r=Object(a.useState)([]),o=Object(d.a)(r,2),l=o[0],u=o[1],j=Object(a.useState)({status:!1,msg:null}),b=Object(d.a)(j,2),h=b[0],p=b[1];return Object(g.jsxs)("div",{className:e.container,children:[h.status&&Object(g.jsx)(w.a,{variant:"h6",style:{color:"#f5f5f5"},children:h.msg}),Object(g.jsx)(_.a,{acceptedFiles:[".csv"],showPreviews:!1,maxFileSize:1e7,onChange:function(e){u(e)}}),Object(g.jsx)(G.a,{variant:"contained",color:"default",className:e.uploadBtn,endIcon:Object(g.jsx)(Y.a,{style:{color:"black"}}),onClick:function(){0===l.length?p({status:!0,msg:"Please upload a file"}):l.length>1?p({status:!0,msg:"Please upload only one file"}):(p({status:!1,msg:null}),s(l))},disabled:n||i||c,children:"ANALYZE & CLEAN"})]})},M=n(61),Z=n.n(M),q=function(){return Object(g.jsxs)(C.a,{container:!0,children:[Object(g.jsx)(C.a,{item:!0,xs:12,sm:6,children:Object(g.jsx)(Z.a,{children:Object(g.jsx)(V,{})})}),Object(g.jsx)(C.a,{item:!0,xs:12,sm:6,children:Object(g.jsx)(Z.a,{children:Object(g.jsx)(R,{})})})]})};var K=function(){return Object(g.jsxs)(v,{children:[Object(g.jsx)(k,{}),Object(g.jsx)(y.a,{children:Object(g.jsx)(q,{})})]})};s.a.render(Object(g.jsx)(c.a.StrictMode,{children:Object(g.jsx)(K,{})}),document.getElementById("root"))},94:function(e,t,n){}},[[109,1,2]]]);
//# sourceMappingURL=main.9945eec5.chunk.js.map
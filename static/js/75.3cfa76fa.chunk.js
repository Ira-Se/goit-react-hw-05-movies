"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[75],{1111:function(n,t,r){r.d(t,{e:function(){return o}});var e=r(7689),a=r(3225),c=r(184),o=function(n){var t=n.currentList,r=(0,e.TH)();return(0,c.jsx)(a.aV,{children:t.map((function(n){return(0,c.jsx)(a.Fg,{to:"/movies/".concat(n.id),state:{from:r},children:(0,c.jsxs)(a.H2,{children:[(0,c.jsx)(a.Wf,{src:n.poster_path?"https://image.tmdb.org/t/p/w500/".concat(n.poster_path):"https://ih1.redbubble.net/image.579678625.6248/papergc,500x,w,f8f8f8-pad,750x1000,f8f8f8.u7.jpg",alt:n.currentListtitle}),(0,c.jsx)(a.rS,{children:n.title})]})},n.id)}))})}},3225:function(n,t,r){r.d(t,{Fg:function(){return h},H2:function(){return f},Wf:function(){return d},aV:function(){return x},rS:function(){return l}});var e,a,c,o,u,p=r(168),i=r(1087),s=r(5867),x=s.ZP.ul(e||(e=(0,p.Z)(["\n  display: flex;\n  justify-content: center;\n  gap: 30px;\n  flex-wrap: wrap;\n  margin-bottom: 40px;\n  list-style: none;\n"]))),f=s.ZP.li(a||(a=(0,p.Z)(["\n  width: 300px;\n  height: 500px;\n  object-fit: cover;\n  box-shadow: 0px 1px 2px 0px rgba(0, 255, 255, 0.7),\n    1px 2px 4px 0px rgba(0, 255, 255, 0.7),\n    2px 4px 8px 0px rgba(0, 255, 255, 0.7),\n    2px 4px 16px 0px rgba(0, 255, 255, 0.7);\n"]))),l=s.ZP.p(c||(c=(0,p.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: bottom;\n  flex-wrap: wrap;\n  color: rgba(0, 255, 255, 0.7);\n  font-size: 20px;\n  text-decoration: none;\n"]))),d=s.ZP.img(o||(o=(0,p.Z)(["\n  width: 300px;\n  height: 400px;\n  object-fit: cover;\n"]))),h=(0,s.ZP)(i.rU)(u||(u=(0,p.Z)(["\n  text-decoration: none;\n"])))},1256:function(n,t,r){r.d(t,{Bt:function(){return x},Mc:function(){return i},bI:function(){return f},wr:function(){return p},y:function(){return s}});var e=r(5861),a=r(7757),c=r.n(a),o=r(1243);o.Z.defaults.baseURL="https://api.themoviedb.org/3";var u=new URLSearchParams({api_key:"6bcb4df6f6ccae49c8637c73c0f829b9",language:"en-US"}),p=function(){var n=(0,e.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/trending/movie/day?".concat(u));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),i=function(){var n=(0,e.Z)(c().mark((function n(t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/movie/".concat(t,"?").concat(u));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),s=function(){var n=(0,e.Z)(c().mark((function n(t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/movie/".concat(t,"/credits?").concat(u));case 2:return r=n.sent,n.abrupt("return",r.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),x=function(){var n=(0,e.Z)(c().mark((function n(t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/movie/".concat(t,"/reviews?").concat(u));case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,e.Z)(c().mark((function n(t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/search/movie?query=".concat(t,"&").concat(u));case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},1075:function(n,t,r){r.r(t),r.d(t,{default:function(){return k}});var e,a,c,o=r(5861),u=r(9439),p=r(7757),i=r.n(p),s=r(1111),x=r(168),f=r(5867),l=f.ZP.form(e||(e=(0,x.Z)(["\n  display: flex;\n  justify-content: center;\n  margin-bottom: 30px;\n  margin-top: 30px;\n"]))),d=f.ZP.button(a||(a=(0,x.Z)(["\n  width: 100px;\n  height: 50px;\n  border: 1px solid black;\n  box-shadow: 0px 1px 2px 0px rgba(0, 255, 255, 0.7),\n    1px 2px 4px 0px rgba(0, 255, 255, 0.7),\n    2px 4px 8px 0px rgba(0, 255, 255, 0.7),\n    2px 4px 16px 0px rgba(0, 255, 255, 0.7);\n  background-color: black;\n  border-radius: 6px;\n  font-size: 18px;\n  color: rgba(0, 255, 255, 0.7);\n"]))),h=f.ZP.input(c||(c=(0,x.Z)(["\n  display: inline-block;\n  width: 300px;\n  height: 50px;\n  border: none;\n  background-color: black;\n  border-radius: 6px;\n  box-shadow: 0px 1px 2px 0px rgba(0, 255, 255, 0.7),\n    1px 2px 4px 0px rgba(0, 255, 255, 0.7),\n    2px 4px 8px 0px rgba(0, 255, 255, 0.7),\n    2px 4px 16px 0px rgba(0, 255, 255, 0.7);\n  padding-left: 4px;\n  padding-right: 4px;\n  margin-left: 20px;\n  font-size: 18px;\n  color: rgba(0, 255, 255, 0.7);\n"]))),b=r(184),g=function(n){var t=n.handleSubmit,r=n.handleChange;return(0,b.jsxs)(l,{onSubmit:t,children:[(0,b.jsx)(h,{type:"text",onChange:r}),(0,b.jsx)(d,{children:"Search"})]})},v=r(1256),m=r(2791),w=r(1087),Z=r(1686),y=r.n(Z);function k(){var n=(0,m.useState)(""),t=(0,u.Z)(n,2),r=t[0],e=t[1],a=(0,m.useState)([]),c=(0,u.Z)(a,2),p=c[0],x=c[1],f=(0,w.lr)(),l=(0,u.Z)(f,2),d=l[0],h=l[1];(0,m.useEffect)((function(){var n,t=null!==(n=d.get("query"))&&void 0!==n?n:"";function r(){return(r=(0,o.Z)(i().mark((function n(){return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(""!==t){n.next=2;break}return n.abrupt("return");case 2:return n.prev=2,n.t0=x,n.next=6,(0,v.bI)(t);case 6:n.t1=n.sent,(0,n.t0)(n.t1),n.next=14;break;case 10:n.prev=10,n.t2=n.catch(2),y().Notify.failure("Please reload the page"),console.log(n.t2);case 14:case"end":return n.stop()}}),n,null,[[2,10]])})))).apply(this,arguments)}!function(){r.apply(this,arguments)}()}),[d]);return(0,b.jsxs)("div",{children:[r&&(0,b.jsx)(g,{handleSubmit:function(n){n.preventDefault(),h({query:r}),console.log(p.length),""!==r?0===p.length&&y().Notify.failure("No results were found for your request"):y().Notify.failure("Fill in the search field")},handleChange:function(n){e(n.target.value)}}),p&&(0,b.jsx)(s.e,{currentList:p})]})}}}]);
//# sourceMappingURL=75.3cfa76fa.chunk.js.map
(this["webpackJsonptest-work-app"]=this["webpackJsonptest-work-app"]||[]).push([[0],{14:function(e,t,n){"use strict";n.d(t,"f",(function(){return a})),n.d(t,"e",(function(){return r})),n.d(t,"g",(function(){return s})),n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return o})),n.d(t,"d",(function(){return l}));var c=n(7),a=function(e){return{type:c.a.SET_USERNAME,payload:e}},r=function(e){return{type:c.a.SET_REPO,payload:e}},s=function(){return{type:c.a.LOADING_START}},i=function(){return{type:c.a.LOADING_END}},u=function(){return{type:c.a.FETCH_COUNT}},o=function(){return{type:c.a.FETCH_ISSUES}},l=function(e){return{type:c.a.SET_OPTIONS,payload:e}}},16:function(e,t,n){"use strict";var c=n(11),a=n.n(c),r=n(17),s=n(6),i=n(7),u={loading:!1,list:null,error:null,totalCount:null,username:"",repo:"",page:null,options:{perPage:"10",page:1,state:"open"}},o=n(38),l=n(15),j=n(32),b=n(37),d=a.a.mark(f),O=Object(o.a)(),p=Object(r.combineReducers)({issues:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i.a.SET_USERNAME:return Object(s.a)(Object(s.a)({},e),{},{username:t.payload});case i.a.SET_REPO:return Object(s.a)(Object(s.a)({},e),{},{repo:t.payload});case i.a.SET_ISSUES:return Object(s.a)(Object(s.a)({},e),{},{list:t.payload});case i.a.LOADING_START:return Object(s.a)(Object(s.a)({},e),{},{loading:!0});case i.a.LOADING_END:return Object(s.a)(Object(s.a)({},e),{},{loading:!1});case i.a.SET_COUNT:return Object(s.a)(Object(s.a)({},e),{},{totalCount:t.payload});case i.a.SET_PAGE:return Object(s.a)(Object(s.a)({},e),{},{page:t.payload});case i.a.SET_OPTIONS:return Object(s.a)(Object(s.a)({},e),{},{options:t.payload});default:return e}}});function f(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(l.a)([Object(l.d)(i.a.FETCH_ISSUES,j.b),Object(l.d)(i.a.FETCH_COUNT,j.a)]);case 2:case"end":return e.stop()}}),d)}var S=Object(r.createStore)(p,Object(b.composeWithDevTools)(Object(r.applyMiddleware)(O)));O.run(f);t.a=S},32:function(e,t,n){"use strict";(function(e){n.d(t,"b",(function(){return f})),n.d(t,"a",(function(){return S}));var c,a,r=n(11),s=n.n(r),i=n(15),u=n(16),o=n(34),l=n(7),j=n(14),b=s.a.mark(f),d=s.a.mark(S),O=(null===(c=e)||void 0===c||null===(a=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API:"https://api.github.com"}))||void 0===a?void 0:a.REACT_APP_API)||"https://api.github.com",p=new o.a(O);function f(){var e,t,n,c,a;return s.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e=[u.a.getState().issues.username,u.a.getState().issues.repo,u.a.getState().issues.options],t=e[0],n=e[1],c=e[2],r.next=3,Object(i.c)(Object(j.g)());case 3:return r.prev=3,r.next=6,Object(i.b)(p.fetchIssues,t,n,c);case 6:return a=r.sent,r.next=9,Object(i.c)({type:l.a.SET_ISSUES,payload:a});case 9:r.next=14;break;case 11:r.prev=11,r.t0=r.catch(3),console.error(r.t0);case 14:return r.prev=14,r.next=17,Object(i.c)(Object(j.a)());case 17:return r.finish(14);case 18:case"end":return r.stop()}}),b,null,[[3,11,14,18]])}function S(){var e,t,n,c,a;return s.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e=[u.a.getState().issues.username,u.a.getState().issues.repo,u.a.getState().issues.options],t=e[0],n=e[1],c=e[2],r.prev=1,r.next=4,Object(i.b)(p.getIssuesCount,t,n,c.state);case 4:return a=r.sent,r.next=7,Object(i.c)({type:l.a.SET_COUNT,payload:a});case 7:console.log(a),r.next=13;break;case 10:r.prev=10,r.t0=r.catch(1),console.error(r.t0);case 13:case"end":return r.stop()}}),d,null,[[1,10]])}}).call(this,n(54))},34:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var c=n(11),a=n.n(c),r=n(33),s=n(35),i=n(36),u=function(){function e(t){var n=this;Object(s.a)(this,e),this._url=t,this.fetchIssues=function(){var e=Object(r.a)(a.a.mark((function e(t,c,r){var s,i,u;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s="".concat(n.url,"/repos/").concat(t,"/").concat(c,"/issues"),r&&(s+=n.getQueryString(r)),e.next=4,fetch(s);case 4:return i=e.sent,e.next=7,i.json();case 7:return u=e.sent,e.abrupt("return",u.map((function(e){return{title:e.title,url:e.html_url,number:e.number,createdAt:e.created_at,body:e.body,user:{avatar:e.user.avatar_url,username:e.user.login}}})));case 9:case"end":return e.stop()}}),e)})));return function(t,n,c){return e.apply(this,arguments)}}(),this.getFormattedData=function(e){return e.map((function(e){return{title:e.title,url:e.html_url,number:e.number,createdAt:e.created_at,body:e.body,user:{avatar:e.user.avatar_url,username:e.user.login}}}))},this.getIssuesCount=function(){var e=Object(r.a)(a.a.mark((function e(t,c,r){var s,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=r||"open",e.next=3,fetch("".concat(n.url,"/search/issues?q=repo:").concat(t,"/").concat(c,"%20is:issue+state:").concat(r));case 3:return s=e.sent,e.next=6,s.json();case 6:return i=e.sent,e.abrupt("return",i.total_count);case 8:case"end":return e.stop()}}),e)})));return function(t,n,c){return e.apply(this,arguments)}}(),this.getQueryString=function(e){var t="?";return e.perPage&&(t+="per_page=".concat(e.perPage,"&")),e.page&&(t+="page=".concat(e.page,"&")),e.state&&(t+="state=".concat(e.state,"&")),t=t.slice(0,t.length-1)}}return Object(i.a)(e,[{key:"url",get:function(){return this._url}}]),e}()},43:function(e,t,n){},44:function(e,t,n){},48:function(e,t,n){},52:function(e,t,n){},55:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(23),r=n.n(a),s=(n(43),n(44),n(13)),i=n(19),u=n(8),o=n(6),l=n(20),j=(n(48),n(14)),b=function(e){return 1===e.toString().length?"0".concat(e.toString()):e},d=function(e){return"".concat(function(e){var t=new Date(e);return"".concat(b(t.getDate()),".").concat(b(t.getMonth()),".").concat(t.getFullYear())}(e)," ").concat(function(e){var t=new Date(e);return"".concat(b(t.getHours()),":").concat(b(t.getMinutes()),":").concat(b(t.getSeconds()))}(e))},O=n(2),p=function(e){var t=e.title,n=e.createdAt,c=e.number,a=e.url,r=e.user,s=d(n);return Object(O.jsxs)("div",{className:"issue-item",children:[Object(O.jsxs)("div",{className:"issue-item_main",children:[Object(O.jsxs)("div",{className:"issue-item_user",children:[Object(O.jsx)("div",{className:"issue-item_user-avatar",children:Object(O.jsx)("img",{src:r.avatar,alt:""})}),Object(O.jsx)("a",{className:"issue-item_user-link",href:"#",children:r.username})]}),Object(O.jsx)("h4",{className:"issue-item_title",children:Object(O.jsxs)(i.b,{to:"/details#".concat(c),children:[t," "]})}),Object(O.jsx)("div",{className:"issue-item_more",children:Object(O.jsx)("a",{href:a,target:"_blank",children:"\u041f\u0435\u0440\u0435\u0439\u0442\u0438"})})]}),Object(O.jsxs)("div",{className:"issue-item_footer",children:[Object(O.jsxs)("span",{className:"issue-item_date",children:["\u0421\u043e\u0437\u0434\u0430\u043d\u043e: ",s]}),Object(O.jsxs)("span",{className:"issue-item_number",children:["\u041d\u043e\u043c\u0435\u0440 \u043e\u0431\u0440\u0430\u0449\u0435\u043d\u0438\u044f: ",c]})]})]})},f=function(e){for(var t=e.amountElems,n=e.perPage,c=e.onChange,a=e.active,r=t?Math.ceil(t/n):0,s=[],i=1;i<=r;i++)s.push(i);return Object(O.jsx)("ul",{className:"pagination",children:s.map((function(e){return Object(O.jsx)("li",{className:a===e?"active":void 0,children:Object(O.jsx)("a",{href:e.toString(),onClick:function(t){!function(e,t){e.preventDefault(),c(t)}(t,e)},children:e})},e)}))})},S=function(){var e=Object(s.c)((function(e){return e.issues})),t=e.list,n=e.totalCount,a=e.loading,r=e.options,i=Object(c.useState)(1),u=Object(l.a)(i,2),b=u[0],d=u[1],S=Object(c.useState)(!1),h=Object(l.a)(S,2),v=h[0],m=h[1],x=Object(s.b)();Object(c.useEffect)((function(){(null===t||void 0===t?void 0:t.length)&&g()}),[b]),Object(c.useEffect)((function(){m(!!(t&&n&&n>10))}),[n,t]);var g=function(){x(Object(j.d)(Object(o.a)(Object(o.a)({},r),{},{page:b}))),x(Object(j.c)()),console.log(b)},E=Object(O.jsx)("p",{className:"text-center",children:"\u0417\u0434\u0435\u0441\u044c \u0434\u0430\u043d\u043d\u044b\u0445 \u043d\u0435\u0442 :("}),_=Object(O.jsx)("p",{className:"text-center",children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."}),T=Object(O.jsx)("p",{className:"text-center",children:"\u0423 \u044d\u0442\u043e\u0433\u043e \u0440\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u044f \u043d\u0435\u0442 \u043d\u0438 \u043e\u0434\u043d\u043e\u0433\u043e \u043e\u0431\u0440\u0430\u0449\u0435\u043d\u0438\u044f"});return Object(O.jsxs)("div",{className:"container-medium",children:[Object(O.jsx)("div",{className:"issue-list",children:a?_:t?t.length?t.map((function(e){return Object(c.createElement)(p,Object(o.a)(Object(o.a)({},e),{},{key:e.number}))})):T:E}),v&&Object(O.jsx)(f,{amountElems:n,perPage:+r.perPage,onChange:function(e){d(e)},active:b})]})},h=n(26),v=function(){var e=Object(s.c)((function(e){return e.issues})),t=Object(c.useState)({username:e.username,repo:e.repo}),n=Object(l.a)(t,2),a=n[0],r=n[1],i=Object(c.useState)("10"),u=Object(l.a)(i,2),b=u[0],d=u[1],p=Object(s.b)(),f=function(e){return e.trim().toLowerCase()},S=function(e){var t=e.target.getAttribute("name")||"";r(Object(o.a)(Object(o.a)({},a),{},Object(h.a)({},t,e.target.value)))};Object(c.useEffect)((function(){e.list&&e.list.length&&v()}),[b]);var v=function(){var t=f(a.username),n=f(a.repo);p(Object(j.f)(t)),p(Object(j.e)(n)),p(Object(j.d)(Object(o.a)(Object(o.a)({},e.options),{},{perPage:b}))),p(Object(j.c)()),p(Object(j.b)())};return Object(O.jsx)("div",{className:"search-form",children:Object(O.jsxs)("form",{onSubmit:function(e){e.preventDefault(),v()},children:[Object(O.jsxs)("div",{className:"col",children:[Object(O.jsxs)("label",{className:"input-field",children:[Object(O.jsx)("span",{children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043b\u043e\u0433\u0438\u043d \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f: "}),Object(O.jsx)("input",{type:"text",name:"username",value:a.username,onChange:S,disabled:e.loading})]}),Object(O.jsxs)("label",{className:"input-field",children:[Object(O.jsx)("span",{children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0440\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u044f: "}),Object(O.jsx)("input",{type:"text",name:"repo",value:a.repo,onChange:S,disabled:e.loading})]}),Object(O.jsx)("button",{type:"submit",disabled:e.loading,children:"\u041f\u043e\u0438\u0441\u043a"})]}),Object(O.jsx)("div",{className:"input-field select-field",children:Object(O.jsxs)("label",{children:[Object(O.jsx)("span",{children:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0435\u043c\u044b\u0445 \u043e\u0431\u0440\u0430\u0449\u0435\u043d\u0438\u0439"}),Object(O.jsxs)("select",{value:b,onChange:function(e){d((function(t){return t===e.target.value?t:e.target.value}))},children:[Object(O.jsx)("option",{value:"10",children:"10"}),Object(O.jsx)("option",{value:"30",children:"30"}),Object(O.jsx)("option",{value:"50",children:"50"})]})]})})]})})},m=function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)(v,{}),Object(O.jsx)(S,{})]})},x=(n(52),function(){var e,t=Object(u.f)().location.hash.slice(1),n=null===(e=Object(s.c)((function(e){return e.issues})).list)||void 0===e?void 0:e.filter((function(e){return e.number.toString()===t}))[0];return console.log(t),console.log(n),Object(O.jsxs)("div",{className:"issue-page",children:[Object(O.jsxs)("p",{children:["\u0414\u0435\u0442\u0430\u043b\u044c\u043d\u0430\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043f\u043e \u043e\u0431\u0440\u0430\u0449\u0435\u043d\u0438\u044e \u043d\u043e\u043c\u0435\u0440: ",null===n||void 0===n?void 0:n.number]}),Object(O.jsxs)("p",{children:["\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a: ",null===n||void 0===n?void 0:n.title]}),Object(O.jsxs)("p",{children:["\u0410\u0432\u0442\u043e\u0440: ",null===n||void 0===n?void 0:n.user.username]}),Object(O.jsxs)("p",{children:["\u0421\u0441\u044b\u043b\u043a\u0430:"," ",Object(O.jsx)("a",{href:null===n||void 0===n?void 0:n.url,target:"_blank",children:null===n||void 0===n?void 0:n.url})]}),Object(O.jsxs)("p",{children:["\u041d\u0435\u0440\u0430\u0441\u043f\u0430\u0440\u0441\u0435\u043d\u043d\u044b\u0439 \u0442\u0435\u043a\u0441\u0442: ",null===n||void 0===n?void 0:n.body]}),Object(O.jsxs)("p",{children:["\u0421\u043e\u0437\u0434\u0430\u043d\u043e: ",d(n.createdAt)]})]})}),g=function(){var e=Object(s.c)((function(e){return e.issues.error}));return Object(c.useEffect)((function(){console.log(e)}),[e]),Object(O.jsx)(i.a,{children:Object(O.jsxs)("div",{className:"container",children:[Object(O.jsx)("header",{className:"header",children:Object(O.jsx)(i.b,{to:"/",exact:!0,children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"})}),Object(O.jsxs)(u.c,{children:[Object(O.jsx)(u.a,{path:"/",exact:!0,children:Object(O.jsx)(m,{})}),Object(O.jsxs)(u.a,{path:"/details",children:[Object(O.jsx)(u.a,{path:"/details"}),Object(O.jsx)(x,{})]})]})]})})},E=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,56)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))},_=n(16);r.a.render(Object(O.jsx)(s.a,{store:_.a,children:Object(O.jsx)(g,{})}),document.getElementById("root")),E()},7:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var c={SET_USERNAME:"ISSUES/SET_USERNAME",SET_REPO:"ISSUES/SET_REPO",FETCH_ISSUES:"ISSUES/FETCH_ISSUES",SET_ISSUES:"ISSUES/SET_ISSUES",LOADING_START:"ISSUES/LOADING_START",LOADING_END:"ISSUES/LOADING_END",SET_COUNT:"ISSUES/SET_COUNT",FETCH_COUNT:"ISSUES/FETCH_COUNT",SET_PAGE:"ISSUES/SET_PAGE",SET_OPTIONS:"ISSUES/SET_OPTIONS"}}},[[55,1,2]]]);
//# sourceMappingURL=main.d3dcb59e.chunk.js.map
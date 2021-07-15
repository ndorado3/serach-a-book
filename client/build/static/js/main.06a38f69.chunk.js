(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{132:function(e,a,t){e.exports=t(154)},138:function(e,a,t){},154:function(e,a,t){"use strict";t.r(a);var n,r,o,l,c,i=t(0),s=t.n(i),u=t(39),m=t.n(u),d=(t(137),t(138),t(26)),b=t(45),p=t(119),g=t(56),v=t(14),k=t(120),E=t(23),h=t.n(E),f=t(33),w=t(17),O=t(167),j=t(168),y=t(173),S=t(116),I=t(169),x=t(170),C=t(178),B=t(34),F=t(111),T=t(112),L=t(95),_=t.n(L),N=new(function(){function e(){Object(F.a)(this,e)}return Object(T.a)(e,[{key:"getProfile",value:function(){return _()(this.getToken())}},{key:"loggedIn",value:function(){var e=this.getToken();return!!e&&!this.isTokenExpired(e)}},{key:"isTokenExpired",value:function(e){try{return _()(e).exp<Date.now()/1e3}catch(a){return!1}}},{key:"getToken",value:function(){return localStorage.getItem("id_token")}},{key:"login",value:function(e){localStorage.setItem("id_token",e),window.location.assign("/")}},{key:"logout",value:function(){localStorage.removeItem("id_token"),window.location.assign("/")}}]),e}()),$=function(e){var a=localStorage.getItem("saved_books")?JSON.parse(localStorage.getItem("saved_books")):null;if(!a)return!1;var t=null===a||void 0===a?void 0:a.filter((function(a){return a!==e}));return localStorage.setItem("saved_books",JSON.stringify(t)),!0},q=t(50),P=t(24),D=Object(P.a)(n||(n=Object(q.a)(["\n  mutation login($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      token\n      user {\n        _id\n        username\n      }\n    }\n  }\n"]))),M=Object(P.a)(r||(r=Object(q.a)(["\n  mutation addUser($username: String!, $email: String!, $password: String!) {\n    addUser(username: $username, email: $email, password: $password) {\n      token\n      user {\n        _id\n        username\n      }\n    }\n  }\n"]))),G=Object(P.a)(o||(o=Object(q.a)(["\n  mutation saveBook($dataB: InputBooks!) {\n    saveBook(dataB: $dataB) {\n      _id\n      username\n      email\n      savedBooks {\n        bookId\n        authors\n        image\n        description\n        title\n        link\n      }\n    }\n  }\n"]))),U=Object(P.a)(l||(l=Object(q.a)(["\n  mutation removeBook($bookId: ID!) {\n    removeBook(bookId: $bookId) {\n      _id\n      username\n      email\n      savedBooks {\n        bookId\n        authors\n        image\n        description\n        title\n        link\n      }\n    }\n  }\n"]))),V=function(){var e=Object(i.useState)([]),a=Object(w.a)(e,2),t=a[0],n=a[1],r=Object(i.useState)(""),o=Object(w.a)(r,2),l=o[0],c=o[1],u=Object(i.useState)(localStorage.getItem("saved_books")?JSON.parse(localStorage.getItem("saved_books")):[]),m=Object(w.a)(u,2),b=m[0],p=m[1],g=Object(B.useMutation)(G),v=Object(w.a)(g,2),E=v[0],F=v[1].error;Object(i.useEffect)((function(){return function(){var e;(e=b).length?localStorage.setItem("saved_books",JSON.stringify(e)):localStorage.removeItem("saved_books")}}));var T=function(){var e=Object(f.a)(h.a.mark((function e(a){var t,r,o,i;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),l){e.next=3;break}return e.abrupt("return",!1);case 3:return e.prev=3,e.next=6,fetch("https://www.googleapis.com/books/v1/volumes?q=".concat(l));case 6:if((t=e.sent).ok){e.next=9;break}throw new Error("something went wrong!");case 9:return e.next=11,t.json();case 11:r=e.sent,o=r.items,i=o.map((function(e){var a;return{bookId:e.id,authors:e.volumeInfo.authors||["No author to display"],title:e.volumeInfo.title,description:e.volumeInfo.description,image:(null===(a=e.volumeInfo.imageLinks)||void 0===a?void 0:a.thumbnail)||""}})),n(i),c(""),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(3),console.error(e.t0);case 21:case"end":return e.stop()}}),e,null,[[3,18]])})));return function(a){return e.apply(this,arguments)}}(),L=function(){var e=Object(f.a)(h.a.mark((function e(a){var n,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.find((function(e){return e.bookId===a})),N.loggedIn()?N.getToken():null){e.next=4;break}return e.abrupt("return",!1);case 4:return e.prev=4,e.next=7,E({variables:{dataB:Object(d.a)({},n)}});case 7:if(r=e.sent,r.data,!F){e.next=11;break}throw new Error("something went wrong!");case 11:console.log(b),p([].concat(Object(k.a)(b),[n.bookId])),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(4),console.error(e.t0);case 18:case"end":return e.stop()}}),e,null,[[4,15]])})));return function(a){return e.apply(this,arguments)}}();return s.a.createElement(s.a.Fragment,null,s.a.createElement(O.a,{fluid:!0,className:"text-light bg-dark"},s.a.createElement(j.a,null,s.a.createElement("h1",null,"Search for Books!"),s.a.createElement(y.a,{onSubmit:T},s.a.createElement(y.a.Row,null,s.a.createElement(S.a,{xs:12,md:8},s.a.createElement(y.a.Control,{name:"searchInput",value:l,onChange:function(e){return c(e.target.value)},type:"text",size:"lg",placeholder:"Search for a book"})),s.a.createElement(S.a,{xs:12,md:4},s.a.createElement(I.a,{type:"submit",variant:"success",size:"lg"},"Submit Search")))))),s.a.createElement(j.a,null,s.a.createElement("h2",null,t.length?"Viewing ".concat(t.length," results:"):"Search for a book to begin"),s.a.createElement(x.a,null,t.map((function(e){return s.a.createElement(C.a,{key:e.bookId,border:"dark"},e.image?s.a.createElement(C.a.Img,{src:e.image,alt:"The cover for ".concat(e.title),variant:"top"}):null,s.a.createElement(C.a.Body,null,s.a.createElement(C.a.Title,null,e.title),s.a.createElement("p",{className:"small"},"Authors: ",e.authors),s.a.createElement(C.a.Text,null,e.description),N.loggedIn()&&s.a.createElement(I.a,{disabled:null===b||void 0===b?void 0:b.some((function(a){return a===e.bookId})),className:"btn-block btn-info",onClick:function(){return L(e.bookId)}},(null===b||void 0===b?void 0:b.some((function(a){return a===e.bookId})))?"This book has already been saved!":"Save this Book!")))})))))},Y=Object(P.a)(c||(c=Object(q.a)(["\n  {\n    me {\n      _id\n      username\n      email\n      bookCount\n      savedBooks {\n        # _id\n        bookId\n        authors\n        image\n        link\n        title\n        description\n      }\n    }\n  }\n"]))),A=function(){var e=Object(B.useQuery)(Y),a=e.loading,t=e.data,n=Object(B.useMutation)(U),r=Object(w.a)(n,2),o=r[0],l=(r[1].error,(null===t||void 0===t?void 0:t.me)||[]),c=function(){var e=Object(f.a)(h.a.mark((function e(a){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(N.loggedIn()?N.getToken():null){e.next=3;break}return e.abrupt("return",!1);case 3:try{t=o({variables:{bookId:a}}),t.data,$(a)}catch(n){console.error(n)}case 4:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return a?s.a.createElement("h2",null,"LOADING..."):s.a.createElement(s.a.Fragment,null,s.a.createElement(O.a,{fluid:!0,className:"text-light bg-dark"},s.a.createElement(j.a,null,s.a.createElement("h1",null,"Viewing ",l.username,"'s saved books!"))),s.a.createElement(j.a,null,s.a.createElement("h2",null,l.savedBooks.length?"Viewing ".concat(l.savedBooks.length," saved ").concat(1===l.savedBooks.length?"book":"books",":"):"You have no saved books!"),s.a.createElement(x.a,null,l.savedBooks.map((function(e){return s.a.createElement(C.a,{key:e.bookId,border:"dark"},e.image?s.a.createElement(C.a.Img,{src:e.image,alt:"The cover for ".concat(e.title),variant:"top"}):null,s.a.createElement(C.a.Body,null,s.a.createElement(C.a.Title,null,e.title),s.a.createElement("p",{className:"small"},"Authors: ",e.authors),s.a.createElement(C.a.Text,null,e.description),s.a.createElement(I.a,{className:"btn-block btn-danger",onClick:function(){return c(e.bookId)}},"Delete this Book!")))})))))},J=t(175),K=t(174),z=t(172),H=t(176),Q=t(52),R=t(171),W=function(){var e=Object(i.useState)({username:"",email:"",password:""}),a=Object(w.a)(e,2),t=a[0],n=a[1],r=Object(i.useState)(!1),o=Object(w.a)(r,1)[0],l=Object(i.useState)(!1),c=Object(w.a)(l,2),u=c[0],m=c[1],b=Object(B.useMutation)(M),p=Object(w.a)(b,1)[0],g=function(e){var a=e.target,r=a.name,o=a.value;n(Object(d.a)(Object(d.a)({},t),{},Object(Q.a)({},r,o)))},v=function(){var e=Object(f.a)(h.a.mark((function e(a){var r,o;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),!1===a.currentTarget.checkValidity()&&(a.preventDefault(),a.stopPropagation()),e.prev=3,e.next=6,p({variables:Object(d.a)({},t)});case 6:r=e.sent,o=r.data,N.login(o.addUser.token),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),console.error(e.t0);case 14:n({username:"",email:"",password:""});case 15:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(a){return e.apply(this,arguments)}}();return s.a.createElement(s.a.Fragment,null,s.a.createElement(y.a,{noValidate:!0,validated:o,onSubmit:v},s.a.createElement(R.a,{dismissible:!0,onClose:function(){return m(!1)},show:u,variant:"danger"},"Something went wrong with your signup!"),s.a.createElement(y.a.Group,null,s.a.createElement(y.a.Label,{htmlFor:"username"},"Username"),s.a.createElement(y.a.Control,{type:"text",placeholder:"Your username",name:"username",onChange:g,value:t.username,required:!0}),s.a.createElement(y.a.Control.Feedback,{type:"invalid"},"Username is required!")),s.a.createElement(y.a.Group,null,s.a.createElement(y.a.Label,{htmlFor:"email"},"Email"),s.a.createElement(y.a.Control,{type:"email",placeholder:"Your email address",name:"email",onChange:g,value:t.email,required:!0}),s.a.createElement(y.a.Control.Feedback,{type:"invalid"},"Email is required!")),s.a.createElement(y.a.Group,null,s.a.createElement(y.a.Label,{htmlFor:"password"},"Password"),s.a.createElement(y.a.Control,{type:"password",placeholder:"Your password",name:"password",onChange:g,value:t.password,required:!0}),s.a.createElement(y.a.Control.Feedback,{type:"invalid"},"Password is required!")),s.a.createElement(I.a,{disabled:!(t.username&&t.email&&t.password),type:"submit",variant:"success"},"Submit")))},X=function(){var e=Object(i.useState)({email:"",password:""}),a=Object(w.a)(e,2),t=a[0],n=a[1],r=Object(i.useState)(!1),o=Object(w.a)(r,1)[0],l=Object(i.useState)(!1),c=Object(w.a)(l,2),u=c[0],m=c[1],b=Object(B.useMutation)(D),p=Object(w.a)(b,1)[0],g=function(e){var a=e.target,r=a.name,o=a.value;n(Object(d.a)(Object(d.a)({},t),{},Object(Q.a)({},r,o)))},v=function(){var e=Object(f.a)(h.a.mark((function e(a){var r,o;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),!1===a.currentTarget.checkValidity()&&(a.preventDefault(),a.stopPropagation()),e.prev=3,e.next=6,p({variables:Object(d.a)({},t)});case 6:r=e.sent,o=r.data,N.login(o.login.token),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),console.error(e.t0);case 14:n({username:"",email:"",password:""});case 15:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(a){return e.apply(this,arguments)}}();return s.a.createElement(s.a.Fragment,null,s.a.createElement(y.a,{noValidate:!0,validated:o,onSubmit:v},s.a.createElement(R.a,{dismissible:!0,onClose:function(){return m(!1)},show:u,variant:"danger"},"Something went wrong with your login credentials!"),s.a.createElement(y.a.Group,null,s.a.createElement(y.a.Label,{htmlFor:"email"},"Email"),s.a.createElement(y.a.Control,{type:"text",placeholder:"Your email",name:"email",onChange:g,value:t.email,required:!0}),s.a.createElement(y.a.Control.Feedback,{type:"invalid"},"Email is required!")),s.a.createElement(y.a.Group,null,s.a.createElement(y.a.Label,{htmlFor:"password"},"Password"),s.a.createElement(y.a.Control,{type:"password",placeholder:"Your password",name:"password",onChange:g,value:t.password,required:!0}),s.a.createElement(y.a.Control.Feedback,{type:"invalid"},"Password is required!")),s.a.createElement(I.a,{disabled:!(t.email&&t.password),type:"submit",variant:"success"},"Submit")))},Z=function(){var e=Object(i.useState)(!1),a=Object(w.a)(e,2),t=a[0],n=a[1];return s.a.createElement(s.a.Fragment,null,s.a.createElement(J.a,{bg:"dark",variant:"dark",expand:"lg"},s.a.createElement(j.a,{fluid:!0},s.a.createElement(J.a.Brand,{as:g.b,to:"/"},"Google Books Search"),s.a.createElement(J.a.Toggle,{"aria-controls":"navbar"}),s.a.createElement(J.a.Collapse,{id:"navbar"},s.a.createElement(K.a,{className:"ml-auto"},s.a.createElement(K.a.Link,{as:g.b,to:"/"},"Search For Books"),N.loggedIn()?s.a.createElement(s.a.Fragment,null,s.a.createElement(K.a.Link,{as:g.b,to:"/saved"},"See Your Books"),s.a.createElement(K.a.Link,{onClick:N.logout},"Logout")):s.a.createElement(K.a.Link,{onClick:function(){return n(!0)}},"Login/Sign Up"))))),s.a.createElement(z.a,{size:"lg",show:t,onHide:function(){return n(!1)},"aria-labelledby":"signup-modal"},s.a.createElement(H.a.Container,{defaultActiveKey:"login"},s.a.createElement(z.a.Header,{closeButton:!0},s.a.createElement(z.a.Title,{id:"signup-modal"},s.a.createElement(K.a,{variant:"pills"},s.a.createElement(K.a.Item,null,s.a.createElement(K.a.Link,{eventKey:"login"},"Login")),s.a.createElement(K.a.Item,null,s.a.createElement(K.a.Link,{eventKey:"signup"},"Sign Up"))))),s.a.createElement(z.a.Body,null,s.a.createElement(H.a.Content,null,s.a.createElement(H.a.Pane,{eventKey:"login"},s.a.createElement(X,{handleModalClose:function(){return n(!1)}})),s.a.createElement(H.a.Pane,{eventKey:"signup"},s.a.createElement(W,{handleModalClose:function(){return n(!1)}})))))))},ee=Object(b.createHttpLink)({uri:"/graphql"}),ae=Object(p.a)((function(e,a){var t=a.headers,n=localStorage.getItem("id_token");return{headers:Object(d.a)(Object(d.a)({},t),{},{authorization:n?"Bearer ".concat(n):""})}})),te=new b.ApolloClient({link:ae.concat(ee),cache:new b.InMemoryCache});var ne=function(){return s.a.createElement(b.ApolloProvider,{client:te},s.a.createElement(g.a,null,s.a.createElement(s.a.Fragment,null,s.a.createElement(Z,null),s.a.createElement(v.c,null,s.a.createElement(v.a,{exact:!0,path:"/",component:V}),s.a.createElement(v.a,{exact:!0,path:"/saved",component:A}),s.a.createElement(v.a,{render:function(){return s.a.createElement("h1",{className:"display-2"},"Wrong page!")}})))))};m.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(ne,null)),document.getElementById("root"))}},[[132,1,2]]]);
//# sourceMappingURL=main.06a38f69.chunk.js.map
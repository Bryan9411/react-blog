(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{29:function(n,t,e){},36:function(n,t,e){"use strict";e.r(t);var r=e(0),c=e(1),a=e.n(c),i=e(20),o=e.n(i),u=(e(29),e(4)),s=e(2),l=e(3),d="token",j=function(n){return localStorage.setItem(d,n)},b=function(){return localStorage.getItem(d)},x="https://student-json-api.lidemy.me",p=function(){var n=b();return fetch("".concat(x,"/me"),{headers:{authorization:"Bearer ".concat(n)}}).then((function(n){return n.json()}))},f=function(n,t){return fetch("".concat(x,"/posts?_page=").concat(n,"&_limit=").concat(t,"&_sort=createdAt&_order=desc")).then((function(n){return n}))},h=e(7),O=e.p+"static/media/avatar.859b5d00.png";function g(){var n=Object(s.a)(["\n  display: block;\n  font-size: 16px;\n  color: rgba(26, 137, 23, 1);\n  text-decoration none;\n  margin: 20px 0;\n"]);return g=function(){return n},n}function v(){var n=Object(s.a)(["\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  width: 500px;\n  font-size: 22px;\n"]);return v=function(){return n},n}function m(){var n=Object(s.a)(["\n  letter-spacing: 0.1em;\n  font-size: 35px;\n"]);return m=function(){return n},n}function w(){var n=Object(s.a)(["\n  margin: 5px 0px;\n  color: #6c6c6c;\n  font-size: 16px;\n"]);return w=function(){return n},n}function y(){var n=Object(s.a)(["\n  border-bottom: 1px solid rgb(238, 238, 238);\n  margin-bottom: 20px;\n  padding: 25px 0px;\n"]);return y=function(){return n},n}function k(){var n=Object(s.a)(["\n  display: block;\n  font-size: 16px;\n  color: rgba(21, 87, 23, 1);\n  text-decoration none;\n  margin: 20px 0;\n  text-align: center;\n"]);return k=function(){return n},n}function S(){var n=Object(s.a)(["\n  width: 150px;\n  height: 150px;\n  img {\n    border-radius: 50%;\n    width: 100%;\n  }\n"]);return S=function(){return n},n}function C(){var n=Object(s.a)(["\n  width: calc(100% - 290px);\n  margin-left: auto;\n"]);return C=function(){return n},n}function z(){var n=Object(s.a)(["\n  position: fixed;\n  top: 50%;\n  margin: 0px 100px 0 40px;\n  align-items: center;\n\n  h2 {\n    font-weight: bold;\n    text-align: center;\n    overflow-wrap: break-word;\n    margin: 15px 0;\n  }\n\n  span {\n    display: block;\n    text-align: center;\n  }\n"]);return z=function(){return n},n}function _(){var n=Object(s.a)(["\n  display: flex;\n  max-width: 1440px;\n  margin: 0 auto;\n  flex-direction: colum;\n  align-items: center;\n"]);return _=function(){return n},n}var P=l.a.div(_()),N=l.a.div(z()),L=l.a.div(C()),B=l.a.div(S()),D=Object(l.a)(h.b)(k()),E=l.a.div(y()),M=l.a.div(w()),A=l.a.h2(m()),T=l.a.div(v()),$=Object(l.a)(h.b)(g());function J(n){var t=n.post;return Object(r.jsxs)(E,{children:[Object(r.jsx)(M,{children:new Date(t.createdAt).toLocaleString()}),Object(r.jsx)(A,{children:t.title}),Object(r.jsx)(T,{children:t.body}),Object(r.jsx)($,{to:"/posts/".concat(t.id),children:"Read More"})]})}function R(){var n=Object(c.useState)([]),t=Object(u.a)(n,2),e=t[0],a=t[1];return Object(c.useEffect)((function(){fetch("".concat(x,"/posts?_sort=createdAt&_order=desc")).then((function(n){return n.json()})).then((function(n){a(n),console.log(n)}))}),[]),Object(r.jsxs)(P,{children:[Object(r.jsxs)(N,{children:[Object(r.jsx)(B,{children:Object(r.jsx)("img",{src:O,alt:"avatar"})}),Object(r.jsx)("h2",{children:"My Blog"}),Object(r.jsx)(D,{to:"/about",children:"\u95dc\u65bc\u6211"})]}),Object(r.jsx)(L,{children:e.map((function(n){return Object(r.jsx)(J,{post:n},n.id)}))})]})}var F=Object(c.createContext)(null),I=e(5);function U(){var n=Object(s.a)(["\n  text-align: center;\n  color: red;\n"]);return U=function(){return n},n}function W(){var n=Object(s.a)(["\n  margin: 15px auto;\n  width: 140px;\n  border-radius: 4px;\n  background-color: rgba(34, 34, 34);\n  color: white;\n  text-align: center;\n  line-height: 45px;\n  font-size: 18px;\n  letter-spacing: 0.1em;\n  cursor: pointer;\n\n  &:hover {\n    color: rgba(26, 137, 23, 1);\n    font-weight: 700;\n  }\n"]);return W=function(){return n},n}function X(){var n=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n  margin: auto;\n\n  input {\n    width: 200px;\n    border-radius: 4px;\n    padding: 6px;\n    margin: 15px;\n  }\n"]);return X=function(){return n},n}function H(){var n=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n  marin: 0 auto;\n"]);return H=function(){return n},n}function q(){var n=Object(s.a)(["\n  text-align: center;\n\n  span {\n    margin-bottom: 10px;\n  }\n"]);return q=function(){return n},n}function G(){var n=Object(s.a)(["\n  position: absolute;\n  width: 400px;\n  height: 330px;\n  border: 1px solid black;\n  margin: 0 auto;\n  padding: 45px 20px;\n  top: 40%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n"]);return G=function(){return n},n}function K(){var n=Object(s.a)(["\n  max-width: 1440px;\n  margin: 0 auto;\n"]);return K=function(){return n},n}var Q=l.a.form(K()),V=l.a.div(G()),Y=l.a.div(q()),Z=l.a.div(H()),nn=l.a.div(X()),tn=l.a.button(W()),en=l.a.div(U());function rn(){var n=Object(c.useState)(""),t=Object(u.a)(n,2),e=t[0],a=t[1],i=Object(c.useState)(""),o=Object(u.a)(i,2),s=o[0],l=o[1],d=Object(c.useState)(""),b=Object(u.a)(d,2),f=b[0],h=b[1],O=Object(c.useContext)(F).setUser,g=Object(I.f)();return Object(r.jsx)(Q,{onSubmit:function(n){n.preventDefault(),h(null),function(n,t){return fetch("".concat(x,"/login"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({username:n,password:t})}).then((function(n){return n.json()}))}(e,s).then((function(n){console.log(n),1!==n.ok&&h(n.message),j(n.token),p().then((function(n){if(1!==n.ok)return j(null),h(n.message);O(n.data),g.push("/")}))}))},children:Object(r.jsxs)(V,{children:[Object(r.jsxs)(Y,{children:[Object(r.jsx)("h2",{children:"Welcome back"}),Object(r.jsx)("span",{children:"Enter the account and password"})]}),Object(r.jsxs)(Z,{children:[Object(r.jsxs)(nn,{children:[Object(r.jsx)("input",{type:"text",placeholder:"please enter your account",value:e,onChange:function(n){a(n.target.value)}}),Object(r.jsx)("input",{type:"password",placeholder:"please enter your password",value:s,onChange:function(n){l("Lidemy")}})]}),Object(r.jsx)(tn,{type:"submit",children:"Login"})]}),f&&Object(r.jsx)(en,{children:f})]})})}function cn(){var n=Object(s.a)([""]);return cn=function(){return n},n}function an(){var n=Object(s.a)(["\n  font-size: 16px;\n  font-weight: bold;\n"]);return an=function(){return n},n}function on(){var n=Object(s.a)([""]);return on=function(){return n},n}function un(){var n=Object(s.a)(["\n  display: flex;\n  padding: 20px 0;\n  align-items: center;\n  a {\n    display: block;\n    margin: 0 20px;\n    text-decoration: none;\n    color: rgba(26, 137, 23, 1);\n    font-size: 20px;\n    &:hover {\n      letter-spacing: 0.2em;\n      transition: all 1s;\n    }\n  }\n"]);return un=function(){return n},n}function sn(){var n=Object(s.a)(["\n  display: flex;\n  flex-direction: colum;\n"]);return sn=function(){return n},n}function ln(){var n=Object(s.a)(["\n  display: block;\n  font-size: 16px;\n  color: rgba(26, 137, 23, 1);\n  text-decoration none;\n  margin: 20px 0;\n"]);return ln=function(){return n},n}function dn(){var n=Object(s.a)(["\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  width: 500px;\n  font-size: 22px;\n"]);return dn=function(){return n},n}function jn(){var n=Object(s.a)(["\n  letter-spacing: 0.1em;\n  font-size: 35px;\n"]);return jn=function(){return n},n}function bn(){var n=Object(s.a)(["\n  margin: 5px 0px;\n  color: #6c6c6c;\n  font-size: 16px;\n"]);return bn=function(){return n},n}function xn(){var n=Object(s.a)(["\n  border-bottom: 1px solid rgb(238, 238, 238);\n  margin-bottom: 20px;\n  padding: 25px 0px;\n"]);return xn=function(){return n},n}function pn(){var n=Object(s.a)(["\n  display: block;\n  font-size: 16px;\n  color: rgba(21, 87, 23, 1);\n  text-decoration none;\n  margin: 20px 0;\n  text-align: center;\n"]);return pn=function(){return n},n}function fn(){var n=Object(s.a)(["\n  width: 150px;\n  height: 150px;\n  img {\n    border-radius: 50%;\n    width: 100%;\n  }\n"]);return fn=function(){return n},n}function hn(){var n=Object(s.a)(["\n  width: calc(100% - 290px);\n  margin-left: auto;\n"]);return hn=function(){return n},n}function On(){var n=Object(s.a)(["\n  position: fixed;\n  top: 50%;\n  margin: 0px 100px 0 40px;\n  align-items: center;\n\n  h2 {\n    font-weight: bold;\n    text-align: center;\n    overflow-wrap: break-word;\n    margin: 15px 0;\n  }\n\n  span {\n    display: block;\n    text-align: center;\n  }\n"]);return On=function(){return n},n}function gn(){var n=Object(s.a)(["\n  display: flex;\n  flex-direction: colum;\n  margin: 0 auto;\n  max-width: 1440px;\n  align-items: center;\n"]);return gn=function(){return n},n}var vn=l.a.div(gn()),mn=l.a.div(On()),wn=l.a.div(hn()),yn=l.a.div(fn()),kn=Object(l.a)(h.b)(pn()),Sn=l.a.div(xn()),Cn=l.a.div(bn()),zn=l.a.h2(jn()),_n=l.a.div(dn()),Pn=Object(l.a)(h.b)(ln()),Nn=l.a.div(sn()),Ln=l.a.div(un()),Bn=Object(l.a)(h.b)(on()),Dn=l.a.div(an()),En=Object(l.a)(h.b)(cn());function Mn(n){var t=n.post;return Object(r.jsxs)(Sn,{children:[Object(r.jsx)(Cn,{children:new Date(t.createdAt).toLocaleString()}),Object(r.jsx)(zn,{children:t.title}),Object(r.jsx)(_n,{children:t.body}),Object(r.jsx)(Pn,{to:"/posts/".concat(t.id),children:"ReadMore"})]})}function An(n){var t=n.currentPage,e=n.handleChangePageLast,c=n.handleChangePageNext,a=n.totalPages;return Object(r.jsxs)(Ln,{children:[1!==t&&Object(r.jsx)(Bn,{onClick:e,children:"Last"}),Object(r.jsx)(Dn,{children:t}),t!==a&&Object(r.jsx)(En,{onClick:c,children:"Next"})]})}function Tn(){var n=Object(c.useState)([]),t=Object(u.a)(n,2),e=t[0],a=t[1],i=Object(c.useState)(0),o=Object(u.a)(i,2),s=o[0],l=o[1],d=Object(c.useState)(1),j=Object(u.a)(d,2),b=j[0],x=j[1];return Object(c.useEffect)((function(){f(1,3).then((function(n){if(console.log(n),n.headers.get("X-Total-Count")){var t=Number(n.headers.get("X-Total-Count"));console.log(t);var e=Math.ceil(t/3);return console.log("totalPages",e),e||(e=1),l(e),console.log(n),n.json()}})).then((function(n){a(n)}))}),[]),Object(c.useEffect)((function(){return f(b,3).then((function(n){return n.json()})).then((function(n){console.log(n),a(n)}))}),[b]),Object(r.jsxs)(vn,{children:[Object(r.jsxs)(mn,{children:[Object(r.jsx)(yn,{children:Object(r.jsx)("img",{src:O,alt:"avatar"})}),Object(r.jsx)("h2",{children:"My Blog"}),Object(r.jsx)(kn,{to:"/about",children:"\u95dc\u65bc\u6211"})]}),Object(r.jsxs)(wn,{children:[Object(r.jsx)("h1",{children:"\u6587\u7ae0\u5217\u8868"}),e.map((function(n){return Object(r.jsx)(Mn,{post:n},n.id)})),Object(r.jsx)(Nn,{children:Object(r.jsx)(An,{totalPages:s,currentPage:b,handleChangePageNext:function(n){n.preventDefault(),x(b+1)},handleChangePageLast:function(n){n.preventDefault(),x(b-1)}})})]})]})}function $n(){var n=Object(s.a)(["\n  margin: 20px auto;\n  & + & {\n    margin: 10px 0;\n  }\n"]);return $n=function(){return n},n}function Jn(){var n=Object(s.a)(["\n  width: 150px;\n  height: 150px;\n  margin: auto;\n\n  img {\n    border-radius: 50%;\n    width: 100%;\n  }\n"]);return Jn=function(){return n},n}function Rn(){var n=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n  max-width: 1440px;\n  margin: 10% auto;\n"]);return Rn=function(){return n},n}var Fn=l.a.div(Rn()),In=l.a.div(Jn()),Un=l.a.div($n());function Wn(){return Object(r.jsxs)(Fn,{children:[Object(r.jsx)(In,{children:Object(r.jsx)("img",{src:O,alt:"avatar"})}),Object(r.jsxs)(Un,{children:[Object(r.jsx)("p",{children:"\u6211\u662f Bryan\uff0c\u76ee\u524d\u53c3\u52a0\u7a0b\u5f0f\u5c0e\u5e2b\u8a08\u756b\u7b2c\u56db\u671f\uff0c\u5b78\u7fd2\u524d\u7aef\u6280\u8853\u3002"}),Object(r.jsx)("p",{children:"\u9019\u88e1\u6703\u8a18\u9304\u6211\u5728\u7a0b\u5f0f\u5c0e\u5e2b\u8a08\u756b\u88e1\u7684\u5fc3\u5f97\u8207\u4e00\u4e9b\u7b46\u8a18\u3002"})]})]})}function Xn(){var n=Object(s.a)(["\n  color: red;\n  margin: 10px auto;\n  font-size: 16px;\n"]);return Xn=function(){return n},n}function Hn(){var n=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n  margin: auto;\n  border: 1px solid black;\n  border-radius: 4px;\n  width: 70%;\n  padding: 20px;\n\n  input {\n    width: 40%;\n    padding: 5px;\n    margin: 10px 0;\n  }\n  span {\n  }\n  textarea {\n    width: 80%;\n    height: 300px;\n    padding: 5px;\n    margin: 10px 0;\n  }\n  button {\n    width: 5%;\n    padding: 5px;\n    margin: 10px 0;\n  }\n"]);return Hn=function(){return n},n}function qn(){var n=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n  max-width: 1440px;\n  margin: auto;\n\n  h2 {\n    text-align: center;\n  }\n"]);return qn=function(){return n},n}var Gn=l.a.div(qn()),Kn=l.a.form(Hn()),Qn=l.a.div(Xn());function Vn(){var n=Object(c.useState)(""),t=Object(u.a)(n,2),e=t[0],a=t[1],i=Object(c.useState)(""),o=Object(u.a)(i,2),s=o[0],l=o[1],d=Object(c.useState)(""),j=Object(u.a)(d,2),p=j[0],f=j[1],h=Object(I.f)();return Object(r.jsxs)(Gn,{children:[Object(r.jsx)("h2",{children:"\u65b0\u589e\u6587\u7ae0"}),Object(r.jsxs)(Kn,{children:[Object(r.jsx)("h4",{children:"\u6a19\u984c:"}),Object(r.jsx)("input",{type:"text",value:e,onChange:function(n){a(n.target.value)}}),Object(r.jsx)("h4",{children:"\u5167\u5bb9:"}),Object(r.jsx)("textarea",{type:"text",value:s,onChange:function(n){l(n.target.value)}}),Object(r.jsx)("button",{type:"submit",onClick:function(n){n.preventDefault(),function(n,t){var e=b();return fetch("".concat(x,"/posts"),{method:"POST",headers:{"content-type":"application/json",authorization:"Bearer ".concat(e)},body:JSON.stringify({title:n,body:t})}).then((function(n){return n.json()}))}(e,s).then((function(n){if(console.log(n),0===n.ok)return f(n.message.toString());h.push("/")}))},children:"\u9001\u51fa"})]}),p&&Object(r.jsx)(Qn,{children:"\u8cc7\u6599\u6709\u7f3a"})]})}function Yn(){var n=Object(s.a)(["\n  text-align: center;\n  color: red;\n"]);return Yn=function(){return n},n}function Zn(){var n=Object(s.a)(["\n  margin: 15px auto;\n  width: 140px;\n  border-radius: 4px;\n  background-color: rgba(34, 34, 34);\n  color: white;\n  text-align: center;\n  line-height: 45px;\n  font-size: 18px;\n  letter-spacing: 0.1em;\n  cursor: pointer;\n\n  &:hover {\n    color: rgba(26, 137, 23, 1);\n    font-weight: 700;\n  }\n"]);return Zn=function(){return n},n}function nt(){var n=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n  margin: auto;\n\n  input {\n    width: 200px;\n    border-radius: 4px;\n    padding: 6px;\n    margin: 18px;\n  }\n"]);return nt=function(){return n},n}function tt(){var n=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n  marin: 0 auto;\n"]);return tt=function(){return n},n}function et(){var n=Object(s.a)(["\n  text-align: center;\n\n  span {\n    display: block;\n    margin-bottom: 10px;\n  }\n"]);return et=function(){return n},n}function rt(){var n=Object(s.a)(["\n  position: absolute;\n  width: 400px;\n  height: 330px;\n  border: 1px solid black;\n  margin: 0 auto;\n  padding: 20px 20px 125px 20px;\n  top: 40%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n"]);return rt=function(){return n},n}function ct(){var n=Object(s.a)(["\n  max-width: 1440px;\n  margin: 0 auto;\n"]);return ct=function(){return n},n}var at=l.a.form(ct()),it=l.a.div(rt()),ot=l.a.div(et()),ut=l.a.div(tt()),st=l.a.div(nt()),lt=l.a.button(Zn()),dt=l.a.div(Yn());function jt(){var n=Object(c.useState)(""),t=Object(u.a)(n,2),e=t[0],a=t[1],i=Object(c.useState)(""),o=Object(u.a)(i,2),s=o[0],l=o[1],d=Object(c.useState)(""),b=Object(u.a)(d,2),f=b[0],h=b[1],O=Object(c.useState)(""),g=Object(u.a)(O,2),v=g[0],m=g[1],w=Object(I.f)(),y=Object(c.useContext)(F).setUser;return Object(r.jsx)(at,{onSubmit:function(n){n.preventDefault(),function(n,t,e){return fetch("".concat(x,"/register"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({nickname:n,username:t,password:e})}).then((function(n){return n.json()}))}(e,s,f).then((function(n){1!==n.ok&&m(n.message),j(n.token),p().then((function(n){1!==n.ok&&m(n.message),y(n.data),w.push("./login")}))}))},children:Object(r.jsxs)(it,{children:[Object(r.jsxs)(ot,{children:[Object(r.jsx)("h2",{children:"Welcome to register"}),Object(r.jsx)("span",{children:"Enter the account and password to register"})]}),Object(r.jsxs)(ut,{children:[Object(r.jsxs)(st,{children:["nikname:",Object(r.jsx)("input",{type:"text",placeholder:"please enter your nickname",value:e,onChange:function(n){a(n.target.value)}}),"account:",Object(r.jsx)("input",{type:"text",placeholder:"please enter your account",value:s,onChange:function(n){l(n.target.value)}}),"password:",Object(r.jsx)("input",{type:"password",placeholder:"please enter your password",value:f,onChange:function(n){h("Lidemy")}})]}),Object(r.jsx)(lt,{type:"submit",children:"Register"})]}),v&&Object(r.jsx)(dt,{children:v})]})})}function bt(){var n=Object(s.a)(["\n  color: rgba(26, 137, 23, 1);\n"]);return bt=function(){return n},n}function xt(){var n=Object(s.a)(["\n  width: 700px;\n  letter-spacing: 0.2em;\n  font-size: 16px;\n"]);return xt=function(){return n},n}function pt(){var n=Object(s.a)([""]);return pt=function(){return n},n}function ft(){var n=Object(s.a)(["\n  border-bottom: 1px solid rgb(238, 238, 238);\n  margin-bottom: 20px;\n  padding: 25px 0px;\n  max-width: 500px;\n"]);return ft=function(){return n},n}function ht(){var n=Object(s.a)(["\n  display: block;\n  font-size: 16px;\n  color: rgba(21, 87, 23, 1);\n  text-decoration none;\n  margin: 20px 0;\n  text-align: center;\n"]);return ht=function(){return n},n}function Ot(){var n=Object(s.a)(["\n  width: 150px;\n  height: 150px;\n  img {\n    border-radius: 50%;\n    width: 100%;\n  }\n"]);return Ot=function(){return n},n}function gt(){var n=Object(s.a)(["\n  margin: 0 auto;\n"]);return gt=function(){return n},n}function vt(){var n=Object(s.a)(["\n  position: fixed;\n  top: 50%;\n  margin: 0px 5%;\n  align-items: center;\n\n  h2 {\n    font-weight: bold;\n    text-align: center;\n  }\n\n  span {\n    display: block;\n    text-align: center;\n  }\n"]);return vt=function(){return n},n}function mt(){var n=Object(s.a)(["\n  display: flex;\n  max-width: 1440px;\n  margin: 0 auto;\n  flex-direction: colum;\n  align-items: center;\n"]);return mt=function(){return n},n}var wt=l.a.div(mt()),yt=l.a.div(vt()),kt=l.a.ul(gt()),St=l.a.div(Ot()),Ct=Object(l.a)(h.b)(ht()),zt=l.a.div(ft()),_t=l.a.h2(pt()),Pt=l.a.div(xt()),Nt=l.a.div(bt());function Lt(n){var t=n.post;return Object(r.jsxs)(zt,{children:[Object(r.jsx)(Nt,{children:new Date(t.createdAt).toLocaleString()}),Object(r.jsxs)(_t,{children:["\u6a19\u984c: ",t.title]}),Object(r.jsx)(Pt,{children:t.body})]})}function Bt(){var n=Object(c.useState)([]),t=Object(u.a)(n,2),e=t[0],a=t[1],i=Object(I.h)().id;return Object(c.useEffect)((function(){(function(n){return fetch("".concat(x,"/posts/").concat(n)).then((function(n){return n.json()}))})(i).then((function(n){return a(n)}))}),[i]),Object(r.jsxs)(wt,{children:[Object(r.jsxs)(yt,{children:[Object(r.jsx)(St,{children:Object(r.jsx)("img",{src:O,alt:"avatar"})}),Object(r.jsx)("h2",{children:"My Blog"}),Object(r.jsx)(Ct,{to:"/about",children:"\u95dc\u65bc\u6211"})]}),Object(r.jsx)(kt,{children:Object(r.jsx)(Lt,{post:e},e.id)})]})}function Dt(){var n=Object(s.a)(["\n  display: block;\n  padding: 21px;\n  color: rgb(40, 40, 40, 0.6);\n  text-decoration: none;\n  cursor: pointer;\n\n  & + & {\n    margin: 10px;\n  }\n\n  &:hover {\n    color: rgba(26, 137, 23, 1);\n  }\n\n  ","\n"]);return Dt=function(){return n},n}function Et(){var n=Object(s.a)(["\n  font-size: 28px;\n  font-weight: bold;\n  text-decoration: none;\n  margin: 10px;\n  color: rgba(26, 137, 23, 1);\n"]);return Et=function(){return n},n}function Mt(){var n=Object(s.a)(["\n  display: flex;\n  align-items: center;\n  margin: 10px;\n  .register {\n    color: rgba(26, 137, 23, 1);\n    border: 1px solid rgba(26, 137, 23, 1);\n    padding: 8px 12px;\n    border-radius: 4px;\n    letter-spacing: 0.1em;\n    font-size: 14px;\n    text-align: center;\n    line-height: 13px;\n  }\n\n  .login {\n    color: rgba(26, 137, 23, 1);\n    border: 1px solid rgba(26, 137, 23, 1);\n    padding: 8px 12px;\n    border-radius: 4px;\n    letter-spacing: 0.1em;\n    font-size: 14px;\n    text-align: center;\n    line-height: 13px;\n  }\n"]);return Mt=function(){return n},n}function At(){var n=Object(s.a)(["\n  display: flex;\n  align-items: baseline;\n\n  .left__button {\n    margin: 10px;\n    font-size: 16px;\n  }\n"]);return At=function(){return n},n}function Tt(){var n=Object(s.a)(["\n  display: flex;\n  margin: 0 auto;\n  padding: 10px;\n  justify-content: space-between;\n  align-items: center;\n  max-width: 1620px;\n"]);return Tt=function(){return n},n}var $t=l.a.div(Tt()),Jt=l.a.div(At()),Rt=l.a.div(Mt()),Ft=Object(l.a)(h.b)(Et()),It=Object(l.a)(h.b)(Dt(),(function(n){return n.$active&&"\n    \n    color: rgba(26, 137, 23, 1);\n  "}));function Ut(){var n=Object(I.g)(),t=Object(c.useContext)(F),e=t.user,a=t.setUser,i=Object(I.f)();return Object(r.jsxs)($t,{children:[Object(r.jsxs)(Jt,{children:[Object(r.jsx)(Ft,{className:"logo",to:"/",children:"My Blog"}),Object(r.jsx)(It,{className:"left__button",to:"/",$active:"/"===n.pathname,children:"Home"}),Object(r.jsx)(It,{className:"left__button",to:"/archive",$active:"/archive"===n.pathname,children:"Archive"}),Object(r.jsx)(It,{className:"left__button",to:"/about",$active:"/about"===n.pathname,children:"About"})]}),Object(r.jsxs)(Rt,{children:[!e&&Object(r.jsx)(It,{className:"login",to:"/login",$active:"/login"===n.pathname,children:"Login"}),!e&&Object(r.jsx)(It,{className:"register",to:"/register",$active:"/register"===n.pathname,children:"Register"}),e&&Object(r.jsx)(It,{className:"left__button",to:"/release",$active:"/release"===n.pathname,children:"Release"}),e&&Object(r.jsx)(It,{onClick:function(t){j(""),a(null),"/"!==n.pathname&&i.push("/")},children:"Sign Out"})]})]})}var Wt=e.p+"static/media/bannerr.28d969bb.jpg";function Xt(){var n=Object(s.a)(["\n  height: 500px;\n  margin: auto;\n\n  img {\n    width: 100%;\n    height: 100%;\n  }\n"]);return Xt=function(){return n},n}var Ht=l.a.div(Xt());function qt(){return Object(r.jsx)(Ht,{children:Object(r.jsx)("img",{src:Wt,alt:"banner"})})}function Gt(){var n=Object(s.a)([""]);return Gt=function(){return n},n}var Kt=l.a.div(Gt());var Qt=function(){var n=Object(c.useState)(null),t=Object(u.a)(n,2),e=t[0],a=t[1];return Object(c.useEffect)((function(){b()&&p().then((function(n){n.ok&&a(n.data)}))}),[]),Object(r.jsx)(F.Provider,{value:{user:e,setUser:a},children:Object(r.jsx)(Kt,{children:Object(r.jsxs)(h.a,{children:[Object(r.jsx)(Ut,{}),Object(r.jsxs)(I.c,{children:[Object(r.jsxs)(I.a,{exact:!0,path:"/",children:[Object(r.jsx)(qt,{}),Object(r.jsx)(R,{})]}),Object(r.jsxs)(I.a,{path:"/posts/:id",children:[Object(r.jsx)(qt,{}),Object(r.jsx)(Bt,{})]}),Object(r.jsxs)(I.a,{path:"/archive",children:[Object(r.jsx)(qt,{}),Object(r.jsx)(Tn,{})]}),Object(r.jsx)(I.a,{path:"/about",children:Object(r.jsx)(Wn,{})}),Object(r.jsx)(I.a,{path:"/release",children:Object(r.jsx)(Vn,{})}),Object(r.jsx)(I.a,{path:"/login",children:Object(r.jsx)(rn,{})}),Object(r.jsx)(I.a,{path:"/register",children:Object(r.jsx)(jt,{})})]})]})})})},Vt=function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,37)).then((function(t){var e=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;e(n),r(n),c(n),a(n),i(n)}))};o.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(Qt,{})}),document.getElementById("root")),Vt()}},[[36,1,2]]]);
//# sourceMappingURL=main.dfea5c9d.chunk.js.map
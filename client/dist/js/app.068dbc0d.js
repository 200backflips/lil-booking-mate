(function(e){function t(t){for(var n,o,u=t[0],i=t[1],c=t[2],p=0,d=[];p<u.length;p++)o=u[p],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);l&&l(t);while(d.length)d.shift()();return s.push.apply(s,c||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],n=!0,u=1;u<r.length;u++){var i=r[u];0!==a[i]&&(n=!1)}n&&(s.splice(t--,1),e=o(o.s=r[0]))}return e}var n={},a={app:0},s=[];function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=n,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],i=u.push.bind(u);u.push=t,u=u.slice();for(var c=0;c<u.length;c++)t(u[c]);var l=i;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var n=r("85ec"),a=r.n(n);a.a},"0529":function(e,t,r){"use strict";var n=r("a60d"),a=r.n(n);a.a},"0cf9":function(e,t,r){"use strict";var n=r("a4e0"),a=r.n(n);a.a},"0f62":function(e,t,r){e.exports=r.p+"img/user.2747d0ad.svg"},"0fd6":function(e,t,r){},2946:function(e,t,r){"use strict";var n=r("a7d5"),a=r.n(n);a.a},"309a":function(e,t,r){e.exports=r.p+"img/logout.2c72e490.svg"},"39b2":function(e,t,r){"use strict";var n=r("c423"),a=r.n(n);a.a},"3c54":function(e,t,r){},"414d":function(e,t,r){"use strict";var n=r("0fd6"),a=r.n(n);a.a},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"App",attrs:{id:"app"}},[r("div",{staticClass:"content"},[r("Header"),r("router-view"),r("Footer")],1)])},s=[],o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"Header"},[n("div",{staticClass:"logout-btn"},[n("button",{on:{click:function(t){return t.preventDefault(),e.logOut(t)}}},[n("router-link",{attrs:{to:"/"}},[n("img",{attrs:{src:r("309a"),alt:"logout"}})])],1)]),n("h1",[e._v("lil booking mate")])])},u=[],i=r("5530"),c=r("2f62"),l={name:"Header",methods:Object(i["a"])({},Object(c["b"])(["logOut"]))},p=l,d=(r("5d59"),r("2877")),m=Object(d["a"])(p,o,u,!1,null,"2d75c2b8",null),f=m.exports,g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.isLoggedIn?n("div",{staticClass:"Footer"},[n("router-link",{attrs:{to:"/"}},[n("img",{attrs:{src:r("86e6"),alt:"home"}})]),n("img",{staticClass:"logged-out",attrs:{src:r("ce42"),alt:"booked-dates"}}),n("img",{staticClass:"logged-out",attrs:{src:r("7dd3"),alt:"message"}}),n("router-link",{attrs:{to:"/user"}},[n("img",{attrs:{src:r("0f62"),alt:"user"}})])],1):n("div",{staticClass:"Footer"},[n("router-link",{attrs:{to:"/"}},[n("img",{attrs:{src:r("86e6"),alt:"home"}})]),n("img",{staticClass:"logged-out",attrs:{src:r("ce42"),alt:"booked-dates"}}),n("img",{staticClass:"logged-out",attrs:{src:r("7dd3"),alt:"message"}}),n("img",{staticClass:"logged-out",attrs:{src:r("0f62"),alt:"user"}})],1)},v=[],b={name:"Footer",computed:Object(c["c"])(["isLoggedIn"])},I=b,h=(r("d055"),Object(d["a"])(I,g,v,!1,null,"a8e19064",null)),k=h.exports,w={name:"App",components:{Header:f,Footer:k}},_=w,P=(r("034f"),Object(d["a"])(_,a,s,!1,null,null,null)),y=P.exports,O=(r("d81d"),r("d3b7"),r("ac1f"),r("25f0"),r("466d"),{users:[{email:"test@test.com",password:"secret",timePeriod:""},{email:"gitte@test.com",password:"secret",timePeriod:""}],userInput:{email:"",password:""},userIsLoggedIn:!1,errorMessage:"",userInfo:{email:"",password:"",timePeriod:""},changeEmail:!1,changePassword:!1,datePicked:""}),j={allUsers:function(e){return e.users},isLoggedIn:function(e){return e.userIsLoggedIn},errorMessage:function(e){return e.errorMessage},userInfo:function(e){return e.userInfo},changeEmail:function(e){return e.changeEmail},changePassword:function(e){return e.changePassword}},x=/^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/,E=/^[a-z ]+[\d ]{7}/i,C={captureEmail:function(e,t){var r=e.commit;r("setErrorMessage",""),r("setInputEmail",t)},capturePassword:function(e,t){var r=e.commit;r("setErrorMessage",""),r("setInputPassword",t)},verifyLogIn:function(e){var t=e.commit;O.users.map((function(e){O.userInput.email===e.email&&O.userInput.password===e.password&&(t("captureUserInfo",e),t("setLogIn")),t("setErrorMessage","the email or password you have provided is incorrect. please try again")}))},logOut:function(e){var t=e.commit;t("setLogOut")},toggleUserInfo:function(e,t){var r=e.commit;"email"===t?r("toggleEmail"):"password"===t&&r("togglePassword")},updateEmail:function(e){var t=e.commit;x.test(O.userInput.email)&&(O.users.map((function(e){e.email===O.userInfo.email&&(e.email=O.userInput.email,t("setUserDetails",e.email))})),t("toggleEmail")),t("setErrorMessage","you have entered an invalid email")},updatePassword:function(e){var t=e.commit;O.userInput.password.length>3&&(O.users.map((function(e){e.password===O.userInfo.password&&(e.password=O.userInput.password,t("setUserDetails",e.password))})),t("togglePassword")),t("setErrorMessage","your password has to be at least 3 characters long")},pickDate:function(e,t){var r=e.commit;r("setPickDate",t)},bookDate:function(e){var t=e.commit;if(""!==O.datePicked){var r=O.datePicked;O.users.map((function(e){e.email===O.userInfo.email&&(e.timePeriod=r,t("setBookDate",e),e.timePeriod=r.toString().match(E)[0],t("captureUserInfo",e))}))}},cancelBooking:function(e){var t=e.commit;t("setPickDate",""),O.users.map((function(e){e.email===O.userInfo.email&&(e.timePeriod="",t("setBookDate",e),t("captureUserInfo",e))}))}},F={setInputEmail:function(e,t){return e.userInput.email=t},setInputPassword:function(e,t){return e.userInput.password=t},setLogIn:function(e){return e.userIsLoggedIn=!0},setLogOut:function(e){return e.userIsLoggedIn=!1},setErrorMessage:function(e,t){return e.errorMessage=t},captureUserInfo:function(e,t){return e.userInfo=t},toggleEmail:function(e){return e.changeEmail=!e.changeEmail},togglePassword:function(e){return e.changePassword=!e.changePassword},setUserDetails:function(e,t){return Object(i["a"])({},e,{update:t})},setPickDate:function(e,t){return e.datePicked=t},setBookDate:function(e,t){return Object(i["a"])({},e,{date:t})}},D={state:O,getters:j,actions:C,mutations:F};n["a"].use(c["a"]);var L=new c["a"].Store({modules:{users:D}}),B=r("4af9"),M=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"Home"},[e.isLoggedIn?r("BookingForm"):r("Login")],1)},T=[],U=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("form",{staticClass:"Login",attrs:{autocomplete:"on"}},[r("FormField",{attrs:{labelName:"email",inputType:"text",capture:e.captureEmail}}),r("FormField",{attrs:{labelName:"password",inputType:"password",capture:e.capturePassword}}),r("div",{staticClass:"error-message"},[r("p",[e._v(e._s(e.errorMessage))])]),r("Button",{staticClass:"main-btn",attrs:{buttonText:"login",clickHandler:e.verifyLogIn}})],1)},H=[],$=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{class:e.className},[r("button",{on:{click:function(t){return t.preventDefault(),e.clickHandler(t)}}},[e._v(e._s(e.buttonText))])])},N=[],S={name:"Button",props:{className:String,buttonText:String,clickHandler:Function}},A=S,z=(r("2946"),Object(d["a"])(A,$,N,!1,null,"1548d549",null)),Z=z.exports,J=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"form-field"},[r("label",[e._v(e._s(e.labelName))]),"checkbox"===e.inputType?r("input",{directives:[{name:"model",rawName:"v-model",value:e.userInput,expression:"userInput"}],attrs:{input:e.capture(e.userInput),type:"checkbox"},domProps:{checked:Array.isArray(e.userInput)?e._i(e.userInput,null)>-1:e.userInput},on:{change:function(t){var r=e.userInput,n=t.target,a=!!n.checked;if(Array.isArray(r)){var s=null,o=e._i(r,s);n.checked?o<0&&(e.userInput=r.concat([s])):o>-1&&(e.userInput=r.slice(0,o).concat(r.slice(o+1)))}else e.userInput=a}}}):"radio"===e.inputType?r("input",{directives:[{name:"model",rawName:"v-model",value:e.userInput,expression:"userInput"}],attrs:{input:e.capture(e.userInput),type:"radio"},domProps:{checked:e._q(e.userInput,null)},on:{change:function(t){e.userInput=null}}}):r("input",{directives:[{name:"model",rawName:"v-model",value:e.userInput,expression:"userInput"}],attrs:{input:e.capture(e.userInput),type:e.inputType},domProps:{value:e.userInput},on:{input:function(t){t.target.composing||(e.userInput=t.target.value)}}})])},q=[],G={name:"FormField",props:{labelName:String,inputType:String,capture:Function},data:function(){return{userInput:""}}},K=G,Q=(r("6782"),Object(d["a"])(K,J,q,!1,null,"8867d8ac",null)),R=Q.exports,V={name:"Login",components:{Button:Z,FormField:R},computed:Object(c["c"])(["errorMessage"]),methods:Object(i["a"])({},Object(c["b"])(["captureEmail","capturePassword","verifyLogIn"]))},W=V,X=(r("0cf9"),Object(d["a"])(W,U,H,!1,null,"3b3cc80b",null)),Y=X.exports,ee=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"BookingForm"},[r("p",[e._v("choose a date to book to and from")]),r("DatePicker"),""===e.userInfo.timePeriod?[r("Button",{staticClass:"main-btn",attrs:{buttonText:"book",clickHandler:e.bookDate}}),r("p",[e._v("you have no dates booked currently")])]:[r("Button",{staticClass:"main-btn",attrs:{buttonText:"cancel",clickHandler:e.cancelBooking}}),r("p",[e._v("you have booked "+e._s(e.userInfo.timePeriod))])]],2)},te=[],re=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("datepicker",{staticClass:"datepicker",attrs:{value:e.date,inline:!0,language:e.sv,"monday-first":!0},on:{selected:e.pickDate}})},ne=[],ae=r("fa33"),se=r("2430"),oe={name:"DatePicker",components:{datepicker:ae["a"]},data:function(){return{date:new Date,sv:se["sv"]}},methods:Object(i["a"])({},Object(c["b"])(["pickDate"]))},ue=oe,ie=(r("0529"),Object(d["a"])(ue,re,ne,!1,null,null,null)),ce=ie.exports,le={name:"BookingForm",components:{Button:Z,DatePicker:ce},computed:Object(c["c"])(["userInfo"]),methods:Object(i["a"])({},Object(c["b"])(["bookDate","cancelBooking"]))},pe=le,de=(r("414d"),Object(d["a"])(pe,ee,te,!1,null,"d1e61106",null)),me=de.exports,fe={name:"Home",components:{Login:Y,BookingForm:me},computed:Object(c["c"])(["isLoggedIn"])},ge=fe,ve=(r("94fa"),Object(d["a"])(ge,M,T,!1,null,"bbd29f62",null)),be=ve.exports,Ie=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"User"},[n("img",{attrs:{src:r("0f62"),alt:"user"}}),n("form",{staticClass:"user-details",attrs:{autocomplete:"off"}},[n("p",[e._v("click any of the information that you wish to update")]),e.changeEmail?[n("FormField",{attrs:{labelName:"email",inputType:"text",capture:e.captureEmail}}),n("Button",{staticClass:"update-btn",attrs:{buttonText:"update",clickHandler:e.updateEmail}}),n("div",{staticClass:"error-message"},[n("p",[e._v(e._s(e.errorMessage))])])]:n("button",{on:{click:function(t){return t.preventDefault(),e.toggleUserInfo("email")}}},[e._v("email: "+e._s(e.userInfo.email))]),e.changePassword?[n("FormField",{attrs:{labelName:"password",inputType:"password",capture:e.capturePassword}}),n("Button",{staticClass:"update-btn",attrs:{buttonText:"update",clickHandler:e.updatePassword}}),n("div",{staticClass:"error-message"},[n("p",[e._v(e._s(e.errorMessage))])])]:n("button",{staticClass:"password-text",on:{click:function(t){return t.preventDefault(),e.toggleUserInfo("password")}}},[e._v("password: ••••••")]),n("p",[e._v(e._s(""===e.userInfo.timePeriod?"you have no dates booked currently":"active booking: "+e.userInfo.timePeriod))])],2)])},he=[],ke={name:"User",components:{FormField:R,Button:Z},computed:Object(c["c"])(["userInfo","changeEmail","changePassword","errorMessage"]),methods:Object(i["a"])({},Object(c["b"])(["toggleUserInfo","captureEmail","capturePassword","updateEmail","updatePassword"]))},we=ke,_e=(r("39b2"),Object(d["a"])(we,Ie,he,!1,null,"f44a6dc0",null)),Pe=_e.exports;n["a"].use(B["a"]);var ye=new B["a"]({routes:[{path:"/",component:be},{path:"/user",component:Pe}],mode:"history"});n["a"].config.productionTip=!1,new n["a"]({store:L,router:ye,render:function(e){return e(y)}}).$mount("#app")},"5d59":function(e,t,r){"use strict";var n=r("ef6c"),a=r.n(n);a.a},6782:function(e,t,r){"use strict";var n=r("3c54"),a=r.n(n);a.a},"7dd3":function(e,t,r){e.exports=r.p+"img/telegram.2fbdc432.svg"},"839a":function(e,t,r){},"83c2":function(e,t,r){},"85ec":function(e,t,r){},"86e6":function(e,t,r){e.exports=r.p+"img/home.6f087f95.svg"},"94fa":function(e,t,r){"use strict";var n=r("83c2"),a=r.n(n);a.a},a4e0:function(e,t,r){},a60d:function(e,t,r){},a7d5:function(e,t,r){},c423:function(e,t,r){},ce42:function(e,t,r){e.exports=r.p+"img/newsfeed.4a2854bc.svg"},d055:function(e,t,r){"use strict";var n=r("839a"),a=r.n(n);a.a},ef6c:function(e,t,r){}});
//# sourceMappingURL=app.068dbc0d.js.map
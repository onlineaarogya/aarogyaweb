_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[14],{"/0+H":function(e,t,a){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(r.default.useContext(o.AmpStateContext))};var n,r=(n=a("q1tI"))&&n.__esModule?n:{default:n},o=a("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,a=void 0!==t&&t,n=e.hybrid,r=void 0!==n&&n,o=e.hasQuery,i=void 0!==o&&o;return a||r&&i}},"48fX":function(e,t,a){var n=a("qhzo");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)}},"5fIB":function(e,t,a){var n=a("7eYB");e.exports=function(e){if(Array.isArray(e))return n(e)}},"8Kt/":function(e,t,a){"use strict";var n=a("oI91");function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}t.__esModule=!0,t.defaultHead=f,t.default=void 0;var o,i=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=d();if(t&&t.has(e))return t.get(e);var a={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var o=n?Object.getOwnPropertyDescriptor(e,r):null;o&&(o.get||o.set)?Object.defineProperty(a,r,o):a[r]=e[r]}a.default=e,t&&t.set(e,a);return a}(a("q1tI")),c=(o=a("Xuae"))&&o.__esModule?o:{default:o},s=a("lwAK"),l=a("FYa8"),u=a("/0+H");function d(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return d=function(){return e},e}function f(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[i.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(i.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function p(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===i.default.Fragment?e.concat(i.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var m=["name","httpEquiv","charSet","itemProp"];function h(e,t){return e.reduce((function(e,t){var a=i.default.Children.toArray(t.props.children);return e.concat(a)}),[]).reduce(p,[]).reverse().concat(f(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,a=new Set,n={};return function(r){var o=!0,i=!1;if(r.key&&"number"!==typeof r.key&&r.key.indexOf("$")>0){i=!0;var c=r.key.slice(r.key.indexOf("$")+1);e.has(c)?o=!1:e.add(c)}switch(r.type){case"title":case"base":t.has(r.type)?o=!1:t.add(r.type);break;case"meta":for(var s=0,l=m.length;s<l;s++){var u=m[s];if(r.props.hasOwnProperty(u))if("charSet"===u)a.has(u)?o=!1:a.add(u);else{var d=r.props[u],f=n[u]||new Set;"name"===u&&i||!f.has(d)?(f.add(d),n[u]=f):o=!1}}}return o}}()).reverse().map((function(e,a){var o=e.key||a;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var c=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},e.props||{});return c["data-href"]=c.href,c.href=void 0,c["data-optimized-fonts"]=!0,i.default.cloneElement(e,c)}return i.default.cloneElement(e,{key:o})}))}function g(e){var t=e.children,a=(0,i.useContext)(s.AmpStateContext),n=(0,i.useContext)(l.HeadManagerContext);return i.default.createElement(c.default,{reduceComponentsToState:h,headManager:n,inAmpMode:(0,u.isInAmpMode)(a)},t)}g.rewind=function(){};var y=g;t.default=y},FYa8:function(e,t,a){"use strict";var n;t.__esModule=!0,t.HeadManagerContext=void 0;var r=((n=a("q1tI"))&&n.__esModule?n:{default:n}).default.createContext({});t.HeadManagerContext=r},Ojfx:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),o=a("R/WZ"),i=a("41Hj"),c=a("HALo"),s=a("dhJC"),l=(a("eD//"),a("tVbE")),u=a("SLcR"),d=a("469l"),f=(a("IsqK"),a("Jc4N")),p=(r.a.createElement,Object(o.a)((function(){return{map:{zIndex:9},icon:{background:"transparent",borderRadius:0}}})),a("tr08")),m=a("lopY"),h=(a("RHQs"),a("kKik"),a("kbOB")),g=(r.a.createElement,Object(o.a)((function(e){return{image:{objectFit:"cover",borderRadius:e.spacing(1)}}})),a("cpVT")),y=(a("iuhU"),r.a.createElement,Object(o.a)((function(e){return{root:{width:"100%",height:"100%",position:"relative",overflow:"hidden"},image:Object(g.a)({minHeight:400,objectFit:"cover"},e.breakpoints.down("sm"),{width:"auto"}),textWhite:{color:"white"},title:{fontWeight:"bold"},section:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",paddingTop:0,paddingBottom:0}}})),a("tRbT")),v=(r.a.createElement,Object(o.a)((function(e){return{promoLogo:{maxWidth:120},title:{fontWeight:"bold"}}})),r.a.createElement),b=Object(o.a)((function(){return{image:{maxWidth:420}}})),w=function(e){var t=e.className,a=Object(s.a)(e,["className"]),n=b(),r=Object(p.a)(),o=Object(m.a)(r.breakpoints.up("md"),{defaultMatches:!0});return v("div",Object(c.a)({className:t},a),v(y.a,{container:!0,justify:"space-between",spacing:o?4:2,direction:o?"row":"column-reverse"},v(y.a,{item:!0,container:!0,alignItems:"center",justify:"flex-start",xs:12,md:6,"data-aos":"fade-up"},v("div",null,v(f.e,{title:"Our Mission",subtitle:"We strive to improve the quality and accessibility of healthcare and medical facilities for each and everyone, irrespective of any locational disadvantage. We envisage to achieve through leveraging technology, innovative solutions, artificial intelligence and ethical governance practices.",align:"left",disableGutter:!0,subtitleProps:{color:"textPrimary",variant:"body1"}}))),v(y.a,{item:!0,container:!0,justify:o?"flex-end":"flex-start",alignItems:"center",xs:12,md:6,"data-aos":"fade-up"},v(h.d,{src:"https://www.onlineaarogya.com/assets/about.jpeg",alt:"About Us",className:n.image}))))},O=a("ofer"),j=r.a.createElement,x=Object(o.a)((function(){return{checkBox:{background:"transparent",borderRadius:0},image:{maxWidth:450,height:"auto"}}})),k=function(e){var t=e.className,a=Object(s.a)(e,["className"]),n=x(),r=Object(p.a)(),o=Object(m.a)(r.breakpoints.up("md"),{defaultMatches:!0});return j("div",Object(c.a)({className:t},a),j(y.a,{container:!0,spacing:o?4:2,direction:o?"row":"column-reverse"},j(y.a,{item:!0,xs:12,md:6,"data-aos":"fade-up"},j(y.a,{container:!0,alignItems:"flex-start",justify:"center",direction:"column"},j(f.e,{title:"Why Online Aarogya",subtitleColor:"textPrimary",align:"left",disableGutter:!0}),j(y.a,{container:!0,spacing:0},["Get Medical Assistance 24x7.","Your health is our priority. You get to choose your doctors for all your medical needs.","Getting medical assistance is as simple as chat, audio call, video call or simply booking an on-clinic appointment.","Digital medical records with prediction and prescription.","Access your medical records whenever you need and share.","Your medical emergency contact can share your medical records without any hassle.","Provide complete Healthcare coverage to your Family and loved ones.","100% assurance on Privacy and Security. We are ISO 27001, HIPPA, and future readiness with DISHA Compliance."].map((function(e,t){return j(y.a,{item:!0,xs:12,key:t,"data-aos":"fade-up"},j(l.a,{disableGutters:!0},j(u.a,null,j(d.a,{src:"https://assets.maccarianagency.com/the-front/illustrations/check-icon-yellow.svg",className:n.checkBox})),j(O.a,{variant:"subtitle1",color:"textPrimary"},e)))}))))),j(y.a,{item:!0,container:!0,justify:o?"flex-end":"center",alignItems:"center",xs:12,md:6,"data-aos":"fade-up"},j(h.d,{src:"https://assets.maccarianagency.com/the-front/illustrations/team.png",srcSet:"https://assets.maccarianagency.com/the-front/illustrations/team@2x.png 2x",alt:"team",className:n.image}))))},E=r.a.createElement,P=function(e){var t=e.className,a=Object(s.a)(e,["className"]),n=Object(p.a)(),r=Object(m.a)(n.breakpoints.up("md"),{defaultMatches:!0});return E("div",Object(c.a)({className:t},a),E(y.a,{container:!0,spacing:r?4:2},E(y.a,{item:!0,xs:12,sm:6,"data-aos":"fade-up"},E(f.e,{title:"Who are we?",subtitle:"ACPL is a start-up in the field of medical healthcare including tele-medicine. The software platform will enable patients to search doctors for various specialties, check their profile, book appointment, and take consultation. \nThe company is going to start the pilot launch by end of Aug 2021 and a full-scale launch of services by end of Oct 2021.\nThe company\u2019s mission is to create medical healthcare eco-system accessible, easier and better in terms of quality especially serving to the rural and non-metro geographies, which constitutes more than 75% of the population.\nCompany is looking for individuals who are open to new learning and ready to accept challenges. The individual will have to relocate to Silvassa.\nNote: Individuals who are looking for a comfortable work environment and finds difficult to work under time pressure may not apply.",disableGutter:!0,align:"left",subtitleProps:{variant:"body1",color:"textPrimary"}})),E(y.a,{item:!0,xs:12,sm:6,"data-aos":"fade-up"},E(f.e,{title:"Our Vision",subtitle:"We aspire to create an eco-system for everyone to avail the best of healthcare and medical support.",disableGutter:!0,align:"left",subtitleProps:{variant:"body1",color:"textPrimary"}}))))},_=a("RUlj"),M=r.a.createElement,A=Object(o.a)((function(e){return{root:{height:"100%",width:"100%"},sectionNoPaddingTop:{paddingTop:0},sectionPartners:{boxShadow:"0 5px 20px 0 rgba(90, 202, 157, 0.05)","& .section-alternate__content":{paddingTop:e.spacing(5),paddingBottom:e.spacing(5)}}}})),C=function(){var e=A();return M("div",{className:e.root},M(_.a,{title:"About Us | OnlineAarogya}",metaKeyWord:"About Us, OnlineAarogya",metaDescription:"ACPL is a start-up in the field of medical healthcare including tele-medicine. The software platform will enable patients to search doctors for various specialties, check their profile, book appointment, and take consultation. The company is going to start the pilot launch by end of Aug 2021 and a full-scale launch of services by end of Oct 2021. The company\u2019s mission is to create medical healthcare eco-system accessible, easier and better in terms of quality especially serving to the rural and non-metro geographies, which constitutes more than 75% of the population."}),M(i.t,null,M(w,null)),M(i.t,{className:e.sectionNoPaddingTop},M(P,null)),M(i.u,null,M(k,null)))},I=a("Exl5"),H=a("69Y9"),S=r.a.createElement;t.default=function(){return S(H.a,{component:C,layout:I.a})}},RHQs:function(e,t,a){"use strict";var n=a("wx14"),r=a("Ff2n"),o=a("q1tI"),i=(a("TOwV"),a("17x9"),a("iuhU")),c=a("H2TA"),s=o.forwardRef((function(e,t){var a=e.cellHeight,c=void 0===a?180:a,s=e.children,l=e.classes,u=e.className,d=e.cols,f=void 0===d?2:d,p=e.component,m=void 0===p?"ul":p,h=e.spacing,g=void 0===h?4:h,y=e.style,v=Object(r.a)(e,["cellHeight","children","classes","className","cols","component","spacing","style"]);return o.createElement(m,Object(n.a)({className:Object(i.a)(l.root,u),ref:t,style:Object(n.a)({margin:-g/2},y)},v),o.Children.map(s,(function(e){if(!o.isValidElement(e))return null;var t=e.props.cols||1,a=e.props.rows||1;return o.cloneElement(e,{style:Object(n.a)({width:"".concat(100/f*t,"%"),height:"auto"===c?"auto":c*a+g,padding:g/2},e.props.style)})})))}));t.a=Object(c.a)({root:{display:"flex",flexWrap:"wrap",overflowY:"auto",listStyle:"none",padding:0,WebkitOverflowScrolling:"touch"}},{name:"MuiGridList"})(s)},RUlj:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a("q1tI"),r=a.n(n),o=a("g4pe"),i=a.n(o),c=r.a.createElement;function s(e){var t=e.title,a=e.metaKeyWord,n=e.metaDescription;return c(i.a,null,c(r.a.Fragment,null,c("title",null,t),c("meta",{name:"keywords",content:a}),c("meta",{name:"description",content:n})))}},T0f4:function(e,t){function a(t){return e.exports=a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},a(t)}e.exports=a},Xuae:function(e,t,a){"use strict";var n=a("mPvQ"),r=a("/GRZ"),o=a("i2R6"),i=(a("qXWd"),a("48fX")),c=a("tCBg"),s=a("T0f4");function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=s(e);if(t){var r=s(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return c(this,a)}}t.__esModule=!0,t.default=void 0;var u=a("q1tI"),d=function(e){i(a,e);var t=l(a);function a(e){var o;return r(this,a),(o=t.call(this,e))._hasHeadManager=void 0,o.emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(n(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,o}return o(a,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),a}(u.Component);t.default=d},g4pe:function(e,t,a){e.exports=a("8Kt/")},kG2m:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},kKik:function(e,t,a){"use strict";var n=a("wx14"),r=a("Ff2n"),o=a("KQm4"),i=a("q1tI"),c=(a("17x9"),a("iuhU")),s=a("l3Wi"),l=a("H2TA"),u=a("ucBr"),d=function(e,t){var a,n,r,i;e&&e.complete&&(e.width/e.height>e.parentElement.offsetWidth/e.parentElement.offsetHeight?((a=e.classList).remove.apply(a,Object(o.a)(t.imgFullWidth.split(" "))),(n=e.classList).add.apply(n,Object(o.a)(t.imgFullHeight.split(" ")))):((r=e.classList).remove.apply(r,Object(o.a)(t.imgFullHeight.split(" "))),(i=e.classList).add.apply(i,Object(o.a)(t.imgFullWidth.split(" ")))))};var f=i.forwardRef((function(e,t){var a=e.children,o=e.classes,l=e.className,f=(e.cols,e.component),p=void 0===f?"li":f,m=(e.rows,Object(r.a)(e,["children","classes","className","cols","component","rows"])),h=i.useRef(null);return i.useEffect((function(){!function(e,t){e&&(e.complete?d(e,t):e.addEventListener("load",(function(){d(e,t)})))}(h.current,o)})),i.useEffect((function(){var e=Object(s.a)((function(){d(h.current,o)}));return window.addEventListener("resize",e),function(){e.clear(),window.removeEventListener("resize",e)}}),[o]),i.createElement(p,Object(n.a)({className:Object(c.a)(o.root,l),ref:t},m),i.createElement("div",{className:o.tile},i.Children.map(a,(function(e){return i.isValidElement(e)?"img"===e.type||Object(u.a)(e,["Image"])?i.cloneElement(e,{ref:h}):e:null}))))}));t.a=Object(l.a)({root:{boxSizing:"border-box",flexShrink:0},tile:{position:"relative",display:"block",height:"100%",overflow:"hidden"},imgFullHeight:{height:"100%",transform:"translateX(-50%)",position:"relative",left:"50%"},imgFullWidth:{width:"100%",position:"relative",transform:"translateY(-50%)",top:"50%"}},{name:"MuiGridListTile"})(f)},lwAK:function(e,t,a){"use strict";var n;t.__esModule=!0,t.AmpStateContext=void 0;var r=((n=a("q1tI"))&&n.__esModule?n:{default:n}).default.createContext({});t.AmpStateContext=r},mPvQ:function(e,t,a){var n=a("5fIB"),r=a("rlHP"),o=a("KckH"),i=a("kG2m");e.exports=function(e){return n(e)||r(e)||o(e)||i()}},oI91:function(e,t){e.exports=function(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}},qXWd:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},rlHP:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},tCBg:function(e,t,a){var n=a("C+bE"),r=a("qXWd");e.exports=function(e,t){return!t||"object"!==n(t)&&"function"!==typeof t?r(e):t}},v0Wy:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about-us",function(){return a("Ojfx")}])}},[["v0Wy",0,1,2,4,3,5,6,7]]]);
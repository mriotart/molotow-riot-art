/*! For license information please see a979c37c6747bf59c26b02a2e982216fab0805bd-07067f2c1c8476dd2023.js.LICENSE.txt */
(self.webpackChunkmolotow_riot_art=self.webpackChunkmolotow_riot_art||[]).push([[507,718],{4742:function(e,t,n){var o;!function(){"use strict";var a=!("undefined"==typeof window||!window.document||!window.document.createElement),r={canUseDOM:a,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:a&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:a&&!!window.screen};void 0===(o=function(){return r}.call(t,n,t,e))||(e.exports=o)}()},6899:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.bodyOpenClassName=t.portalClassName=void 0;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=n(7294),s=m(r),l=m(n(3935)),i=m(n(5697)),c=m(n(7433)),u=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(465)),d=n(8882),f=m(d),p=n(9712);function m(e){return e&&e.__esModule?e:{default:e}}function h(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function b(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var v=t.portalClassName="ReactModalPortal",y=t.bodyOpenClassName="ReactModal__Body--open",w=d.canUseDOM&&void 0!==l.default.createPortal,g=function(e){return document.createElement(e)},O=function(){return w?l.default.createPortal:l.default.unstable_renderSubtreeIntoContainer};function C(e){return e()}var E=function(e){function t(){var e,n,a;h(this,t);for(var r=arguments.length,i=Array(r),u=0;u<r;u++)i[u]=arguments[u];return n=a=b(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),a.removePortal=function(){!w&&l.default.unmountComponentAtNode(a.node);var e=C(a.props.parentSelector);e&&e.contains(a.node)?e.removeChild(a.node):console.warn('React-Modal: "parentSelector" prop did not returned any DOM element. Make sure that the parent element is unmounted to avoid any memory leaks.')},a.portalRef=function(e){a.portal=e},a.renderPortal=function(e){var n=O()(a,s.default.createElement(c.default,o({defaultStyles:t.defaultStyles},e)),a.node);a.portalRef(n)},b(a,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"componentDidMount",value:function(){d.canUseDOM&&(w||(this.node=g("div")),this.node.className=this.props.portalClassName,C(this.props.parentSelector).appendChild(this.node),!w&&this.renderPortal(this.props))}},{key:"getSnapshotBeforeUpdate",value:function(e){return{prevParent:C(e.parentSelector),nextParent:C(this.props.parentSelector)}}},{key:"componentDidUpdate",value:function(e,t,n){if(d.canUseDOM){var o=this.props,a=o.isOpen,r=o.portalClassName;e.portalClassName!==r&&(this.node.className=r);var s=n.prevParent,l=n.nextParent;l!==s&&(s.removeChild(this.node),l.appendChild(this.node)),(e.isOpen||a)&&!w&&this.renderPortal(this.props)}}},{key:"componentWillUnmount",value:function(){if(d.canUseDOM&&this.node&&this.portal){var e=this.portal.state,t=Date.now(),n=e.isOpen&&this.props.closeTimeoutMS&&(e.closesAt||t+this.props.closeTimeoutMS);n?(e.beforeClose||this.portal.closeWithTimeout(),setTimeout(this.removePortal,n-t)):this.removePortal()}}},{key:"render",value:function(){return d.canUseDOM&&w?(!this.node&&w&&(this.node=g("div")),O()(s.default.createElement(c.default,o({ref:this.portalRef,defaultStyles:t.defaultStyles},this.props)),this.node)):null}}],[{key:"setAppElement",value:function(e){u.setElement(e)}}]),t}(r.Component);E.propTypes={isOpen:i.default.bool.isRequired,style:i.default.shape({content:i.default.object,overlay:i.default.object}),portalClassName:i.default.string,bodyOpenClassName:i.default.string,htmlOpenClassName:i.default.string,className:i.default.oneOfType([i.default.string,i.default.shape({base:i.default.string.isRequired,afterOpen:i.default.string.isRequired,beforeClose:i.default.string.isRequired})]),overlayClassName:i.default.oneOfType([i.default.string,i.default.shape({base:i.default.string.isRequired,afterOpen:i.default.string.isRequired,beforeClose:i.default.string.isRequired})]),appElement:i.default.oneOfType([i.default.instanceOf(f.default),i.default.instanceOf(d.SafeHTMLCollection),i.default.instanceOf(d.SafeNodeList),i.default.arrayOf(i.default.instanceOf(f.default))]),onAfterOpen:i.default.func,onRequestClose:i.default.func,closeTimeoutMS:i.default.number,ariaHideApp:i.default.bool,shouldFocusAfterRender:i.default.bool,shouldCloseOnOverlayClick:i.default.bool,shouldReturnFocusAfterClose:i.default.bool,preventScroll:i.default.bool,parentSelector:i.default.func,aria:i.default.object,data:i.default.object,role:i.default.string,contentLabel:i.default.string,shouldCloseOnEsc:i.default.bool,overlayRef:i.default.func,contentRef:i.default.func,id:i.default.string,overlayElement:i.default.func,contentElement:i.default.func},E.defaultProps={isOpen:!1,portalClassName:v,bodyOpenClassName:y,role:"dialog",ariaHideApp:!0,closeTimeoutMS:0,shouldFocusAfterRender:!0,shouldCloseOnEsc:!0,shouldCloseOnOverlayClick:!0,shouldReturnFocusAfterClose:!0,preventScroll:!1,parentSelector:function(){return document.body},overlayElement:function(e,t){return s.default.createElement("div",e,t)},contentElement:function(e,t){return s.default.createElement("div",e,t)}},E.defaultStyles={overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(255, 255, 255, 0.75)"},content:{position:"absolute",top:"40px",left:"40px",right:"40px",bottom:"40px",border:"1px solid #ccc",background:"#fff",overflow:"auto",WebkitOverflowScrolling:"touch",borderRadius:"4px",outline:"none",padding:"20px"}},(0,p.polyfill)(E),t.default=E},7433:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),s=n(7294),l=b(n(5697)),i=h(n(9218)),c=b(n(8560)),u=h(n(465)),d=h(n(9280)),f=n(8882),p=b(f),m=b(n(1314));function h(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function b(e){return e&&e.__esModule?e:{default:e}}n(3724);var v={overlay:"ReactModal__Overlay",content:"ReactModal__Content"},y=0,w=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.setOverlayRef=function(e){n.overlay=e,n.props.overlayRef&&n.props.overlayRef(e)},n.setContentRef=function(e){n.content=e,n.props.contentRef&&n.props.contentRef(e)},n.afterClose=function(){var e=n.props,t=e.appElement,o=e.ariaHideApp,a=e.htmlOpenClassName,r=e.bodyOpenClassName;r&&d.remove(document.body,r),a&&d.remove(document.getElementsByTagName("html")[0],a),o&&y>0&&0===(y-=1)&&u.show(t),n.props.shouldFocusAfterRender&&(n.props.shouldReturnFocusAfterClose?(i.returnFocus(n.props.preventScroll),i.teardownScopedFocus()):i.popWithoutFocus()),n.props.onAfterClose&&n.props.onAfterClose(),m.default.deregister(n)},n.open=function(){n.beforeOpen(),n.state.afterOpen&&n.state.beforeClose?(clearTimeout(n.closeTimer),n.setState({beforeClose:!1})):(n.props.shouldFocusAfterRender&&(i.setupScopedFocus(n.node),i.markForFocusLater()),n.setState({isOpen:!0},(function(){n.openAnimationFrame=requestAnimationFrame((function(){n.setState({afterOpen:!0}),n.props.isOpen&&n.props.onAfterOpen&&n.props.onAfterOpen({overlayEl:n.overlay,contentEl:n.content})}))})))},n.close=function(){n.props.closeTimeoutMS>0?n.closeWithTimeout():n.closeWithoutTimeout()},n.focusContent=function(){return n.content&&!n.contentHasFocus()&&n.content.focus({preventScroll:!0})},n.closeWithTimeout=function(){var e=Date.now()+n.props.closeTimeoutMS;n.setState({beforeClose:!0,closesAt:e},(function(){n.closeTimer=setTimeout(n.closeWithoutTimeout,n.state.closesAt-Date.now())}))},n.closeWithoutTimeout=function(){n.setState({beforeClose:!1,isOpen:!1,afterOpen:!1,closesAt:null},n.afterClose)},n.handleKeyDown=function(e){9===e.keyCode&&(0,c.default)(n.content,e),n.props.shouldCloseOnEsc&&27===e.keyCode&&(e.stopPropagation(),n.requestClose(e))},n.handleOverlayOnClick=function(e){null===n.shouldClose&&(n.shouldClose=!0),n.shouldClose&&n.props.shouldCloseOnOverlayClick&&(n.ownerHandlesClose()?n.requestClose(e):n.focusContent()),n.shouldClose=null},n.handleContentOnMouseUp=function(){n.shouldClose=!1},n.handleOverlayOnMouseDown=function(e){n.props.shouldCloseOnOverlayClick||e.target!=n.overlay||e.preventDefault()},n.handleContentOnClick=function(){n.shouldClose=!1},n.handleContentOnMouseDown=function(){n.shouldClose=!1},n.requestClose=function(e){return n.ownerHandlesClose()&&n.props.onRequestClose(e)},n.ownerHandlesClose=function(){return n.props.onRequestClose},n.shouldBeClosed=function(){return!n.state.isOpen&&!n.state.beforeClose},n.contentHasFocus=function(){return document.activeElement===n.content||n.content.contains(document.activeElement)},n.buildClassName=function(e,t){var o="object"===(void 0===t?"undefined":a(t))?t:{base:v[e],afterOpen:v[e]+"--after-open",beforeClose:v[e]+"--before-close"},r=o.base;return n.state.afterOpen&&(r=r+" "+o.afterOpen),n.state.beforeClose&&(r=r+" "+o.beforeClose),"string"==typeof t&&t?r+" "+t:r},n.attributesFromObject=function(e,t){return Object.keys(t).reduce((function(n,o){return n[e+"-"+o]=t[o],n}),{})},n.state={afterOpen:!1,beforeClose:!1},n.shouldClose=null,n.moveFromContentToOverlay=null,n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidMount",value:function(){this.props.isOpen&&this.open()}},{key:"componentDidUpdate",value:function(e,t){this.props.isOpen&&!e.isOpen?this.open():!this.props.isOpen&&e.isOpen&&this.close(),this.props.shouldFocusAfterRender&&this.state.isOpen&&!t.isOpen&&this.focusContent()}},{key:"componentWillUnmount",value:function(){this.state.isOpen&&this.afterClose(),clearTimeout(this.closeTimer),cancelAnimationFrame(this.openAnimationFrame)}},{key:"beforeOpen",value:function(){var e=this.props,t=e.appElement,n=e.ariaHideApp,o=e.htmlOpenClassName,a=e.bodyOpenClassName;a&&d.add(document.body,a),o&&d.add(document.getElementsByTagName("html")[0],o),n&&(y+=1,u.hide(t)),m.default.register(this)}},{key:"render",value:function(){var e=this.props,t=e.id,n=e.className,a=e.overlayClassName,r=e.defaultStyles,s=e.children,l=n?{}:r.content,i=a?{}:r.overlay;if(this.shouldBeClosed())return null;var c={ref:this.setOverlayRef,className:this.buildClassName("overlay",a),style:o({},i,this.props.style.overlay),onClick:this.handleOverlayOnClick,onMouseDown:this.handleOverlayOnMouseDown},u=o({id:t,ref:this.setContentRef,style:o({},l,this.props.style.content),className:this.buildClassName("content",n),tabIndex:"-1",onKeyDown:this.handleKeyDown,onMouseDown:this.handleContentOnMouseDown,onMouseUp:this.handleContentOnMouseUp,onClick:this.handleContentOnClick,role:this.props.role,"aria-label":this.props.contentLabel},this.attributesFromObject("aria",o({modal:!0},this.props.aria)),this.attributesFromObject("data",this.props.data||{}),{"data-testid":this.props.testId}),d=this.props.contentElement(u,s);return this.props.overlayElement(c,d)}}]),t}(s.Component);w.defaultProps={style:{overlay:{},content:{}},defaultStyles:{}},w.propTypes={isOpen:l.default.bool.isRequired,defaultStyles:l.default.shape({content:l.default.object,overlay:l.default.object}),style:l.default.shape({content:l.default.object,overlay:l.default.object}),className:l.default.oneOfType([l.default.string,l.default.object]),overlayClassName:l.default.oneOfType([l.default.string,l.default.object]),bodyOpenClassName:l.default.string,htmlOpenClassName:l.default.string,ariaHideApp:l.default.bool,appElement:l.default.oneOfType([l.default.instanceOf(p.default),l.default.instanceOf(f.SafeHTMLCollection),l.default.instanceOf(f.SafeNodeList),l.default.arrayOf(l.default.instanceOf(p.default))]),onAfterOpen:l.default.func,onAfterClose:l.default.func,onRequestClose:l.default.func,closeTimeoutMS:l.default.number,shouldFocusAfterRender:l.default.bool,shouldCloseOnOverlayClick:l.default.bool,shouldReturnFocusAfterClose:l.default.bool,preventScroll:l.default.bool,role:l.default.string,contentLabel:l.default.string,aria:l.default.object,data:l.default.object,children:l.default.node,shouldCloseOnEsc:l.default.bool,overlayRef:l.default.func,contentRef:l.default.func,id:l.default.string,overlayElement:l.default.func,contentElement:l.default.func,testId:l.default.string},t.default=w,e.exports=t.default},465:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.resetState=function(){l&&(l.removeAttribute?l.removeAttribute("aria-hidden"):null!=l.length?l.forEach((function(e){return e.removeAttribute("aria-hidden")})):document.querySelectorAll(l).forEach((function(e){return e.removeAttribute("aria-hidden")})));l=null},t.log=function(){0},t.assertNodeList=i,t.setElement=function(e){var t=e;if("string"==typeof t&&s.canUseDOM){var n=document.querySelectorAll(t);i(n,t),t=n}return l=t||l},t.validateElement=c,t.hide=function(e){var t=!0,n=!1,o=void 0;try{for(var a,r=c(e)[Symbol.iterator]();!(t=(a=r.next()).done);t=!0){a.value.setAttribute("aria-hidden","true")}}catch(s){n=!0,o=s}finally{try{!t&&r.return&&r.return()}finally{if(n)throw o}}},t.show=function(e){var t=!0,n=!1,o=void 0;try{for(var a,r=c(e)[Symbol.iterator]();!(t=(a=r.next()).done);t=!0){a.value.removeAttribute("aria-hidden")}}catch(s){n=!0,o=s}finally{try{!t&&r.return&&r.return()}finally{if(n)throw o}}},t.documentNotReadyOrSSRTesting=function(){l=null};var o,a=n(2473),r=(o=a)&&o.__esModule?o:{default:o},s=n(8882);var l=null;function i(e,t){if(!e||!e.length)throw new Error("react-modal: No elements were found for selector "+t+".")}function c(e){var t=e||l;return t?Array.isArray(t)||t instanceof HTMLCollection||t instanceof NodeList?t:[t]:((0,r.default)(!1,["react-modal: App element is not defined.","Please use `Modal.setAppElement(el)` or set `appElement={el}`.","This is needed so screen readers don't see main content","when modal is opened. It is not recommended, but you can opt-out","by setting `ariaHideApp={false}`."].join(" ")),[])}},3724:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.resetState=function(){for(var e=[s,l],t=0;t<e.length;t++){var n=e[t];n&&(n.parentNode&&n.parentNode.removeChild(n))}s=l=null,i=[]},t.log=function(){console.log("bodyTrap ----------"),console.log(i.length);for(var e=[s,l],t=0;t<e.length;t++){var n=e[t]||{};console.log(n.nodeName,n.className,n.id)}console.log("edn bodyTrap ----------")};var o,a=n(1314),r=(o=a)&&o.__esModule?o:{default:o};var s=void 0,l=void 0,i=[];function c(){0!==i.length&&i[i.length-1].focusContent()}r.default.subscribe((function(e,t){s||l||((s=document.createElement("div")).setAttribute("data-react-modal-body-trap",""),s.style.position="absolute",s.style.opacity="0",s.setAttribute("tabindex","0"),s.addEventListener("focus",c),(l=s.cloneNode()).addEventListener("focus",c)),(i=t).length>0?(document.body.firstChild!==s&&document.body.insertBefore(s,document.body.firstChild),document.body.lastChild!==l&&document.body.appendChild(l)):(s.parentElement&&s.parentElement.removeChild(s),l.parentElement&&l.parentElement.removeChild(l))}))},9280:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.resetState=function(){var e=document.getElementsByTagName("html")[0];for(var t in n)a(e,n[t]);var r=document.body;for(var s in o)a(r,o[s]);n={},o={}},t.log=function(){0};var n={},o={};function a(e,t){e.classList.remove(t)}t.add=function(e,t){return a=e.classList,r="html"==e.nodeName.toLowerCase()?n:o,void t.split(" ").forEach((function(e){!function(e,t){e[t]||(e[t]=0),e[t]+=1}(r,e),a.add(e)}));var a,r},t.remove=function(e,t){return a=e.classList,r="html"==e.nodeName.toLowerCase()?n:o,void t.split(" ").forEach((function(e){!function(e,t){e[t]&&(e[t]-=1)}(r,e),0===r[e]&&a.remove(e)}));var a,r}},9218:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.resetState=function(){s=[]},t.log=function(){0},t.handleBlur=c,t.handleFocus=u,t.markForFocusLater=function(){s.push(document.activeElement)},t.returnFocus=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=null;try{return void(0!==s.length&&(t=s.pop()).focus({preventScroll:e}))}catch(n){console.warn(["You tried to return focus to",t,"but it is not in the DOM anymore"].join(" "))}},t.popWithoutFocus=function(){s.length>0&&s.pop()},t.setupScopedFocus=function(e){l=e,window.addEventListener?(window.addEventListener("blur",c,!1),document.addEventListener("focus",u,!0)):(window.attachEvent("onBlur",c),document.attachEvent("onFocus",u))},t.teardownScopedFocus=function(){l=null,window.addEventListener?(window.removeEventListener("blur",c),document.removeEventListener("focus",u)):(window.detachEvent("onBlur",c),document.detachEvent("onFocus",u))};var o,a=n(7252),r=(o=a)&&o.__esModule?o:{default:o};var s=[],l=null,i=!1;function c(){i=!0}function u(){if(i){if(i=!1,!l)return;setTimeout((function(){l.contains(document.activeElement)||((0,r.default)(l)[0]||l).focus()}),0)}}},1314:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.log=function(){console.log("portalOpenInstances ----------"),console.log(o.openInstances.length),o.openInstances.forEach((function(e){return console.log(e)})),console.log("end portalOpenInstances ----------")},t.resetState=function(){o=new n};var n=function e(){var t=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.register=function(e){-1===t.openInstances.indexOf(e)&&(t.openInstances.push(e),t.emit("register"))},this.deregister=function(e){var n=t.openInstances.indexOf(e);-1!==n&&(t.openInstances.splice(n,1),t.emit("deregister"))},this.subscribe=function(e){t.subscribers.push(e)},this.emit=function(e){t.subscribers.forEach((function(n){return n(e,t.openInstances.slice())}))},this.openInstances=[],this.subscribers=[]},o=new n;t.default=o},8882:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.canUseDOM=t.SafeNodeList=t.SafeHTMLCollection=void 0;var o,a=n(4742);var r=((o=a)&&o.__esModule?o:{default:o}).default,s=r.canUseDOM?window.HTMLElement:{};t.SafeHTMLCollection=r.canUseDOM?window.HTMLCollection:{},t.SafeNodeList=r.canUseDOM?window.NodeList:{},t.canUseDOM=r.canUseDOM;t.default=s},8560:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=(0,r.default)(e);if(!n.length)return void t.preventDefault();var o=void 0,a=t.shiftKey,l=n[0],i=n[n.length-1],c=s();if(e===c){if(!a)return;o=i}i!==c||a||(o=l);l===c&&a&&(o=i);if(o)return t.preventDefault(),void o.focus();var u=/(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent);if(null==u||"Chrome"==u[1]||null!=/\biPod\b|\biPad\b/g.exec(navigator.userAgent))return;var d=n.indexOf(c);d>-1&&(d+=a?-1:1);if(void 0===(o=n[d]))return t.preventDefault(),void(o=a?i:l).focus();t.preventDefault(),o.focus()};var o,a=n(7252),r=(o=a)&&o.__esModule?o:{default:o};function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document;return e.activeElement.shadowRoot?s(e.activeElement.shadowRoot):e.activeElement}e.exports=t.default},7252:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function e(t){var n=[].slice.call(t.querySelectorAll("*"),0).reduce((function(t,n){return t.concat(n.shadowRoot?e(n.shadowRoot):[n])}),[]);return n.filter(r)};var n=/input|select|textarea|button|object|iframe/;function o(e){var t=e.offsetWidth<=0&&e.offsetHeight<=0;if(t&&!e.innerHTML)return!0;try{var n=window.getComputedStyle(e);return t?"visible"!==n.getPropertyValue("overflow")||e.scrollWidth<=0&&e.scrollHeight<=0:"none"==n.getPropertyValue("display")}catch(o){return console.warn("Failed to inspect element style"),!1}}function a(e,t){var a=e.nodeName.toLowerCase();return(n.test(a)&&!e.disabled||"a"===a&&e.href||t)&&function(e){for(var t=e,n=e.getRootNode&&e.getRootNode();t&&t!==document.body;){if(n&&t===n&&(t=n.host.parentNode),o(t))return!1;t=t.parentNode}return!0}(e)}function r(e){var t=e.getAttribute("tabindex");null===t&&(t=void 0);var n=isNaN(t);return(n||t>=0)&&a(e,!n)}e.exports=t.default},583:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,a=n(6899),r=(o=a)&&o.__esModule?o:{default:o};t.default=r.default,e.exports=t.default},1146:function(e,t,n){"use strict";n.r(t);var o=n(7294),a=n(1597),r=n(134),s=n.n(r),l=n(7059);t.default=function(e){var t,r=e.pageTitle,i=e.fullHeroImage,c=e.children,u=(0,o.useState)(!1),d=u[0],f=u[1],p=(0,a.K2)("3159585216");return t=!0===i?o.createElement("section",{id:"eyecatcher"},o.createElement("div",{className:"eyecatcher-container-full"},o.createElement("h1",null,"Molotow Riot Art ",o.createElement("span",null)),o.createElement("a",{href:"#spotlight",type:"button",className:"spotlight-link"},"Spotlight"))):"",o.createElement("div",null,o.createElement("header",null,o.createElement("title",null,r," | ",p.site.siteMetadata.title)),o.createElement("section",{id:"header"},o.createElement("div",{className:"header container"},o.createElement("div",{className:"logo-container"},o.createElement(a.rU,{to:"/"},o.createElement(s(),null))),o.createElement("nav",{className:"navbar"},o.createElement("div",{className:d?"hamburger-button active":"hamburger-button",onClick:function(){return f(!d)},onKeyDown:function(e){"Enter"===e.key&&f(!d)},role:"button",tabIndex:0},o.createElement("div",{id:"bar1",className:"bar"}),o.createElement("div",{id:"bar2",className:"bar"}),o.createElement("div",{id:"bar3",className:"bar"})),o.createElement("ul",{className:d?"active":null},o.createElement("li",null,o.createElement(a.rU,{to:"/gallery",className:"nav-link-text"},"Gallerie")),o.createElement("li",null,o.createElement(a.rU,{to:"/blog",className:"nav-link-text"},"Blog")),o.createElement("li",null,o.createElement(a.rU,{to:"/about",className:"nav-link-text"},"About")))))),t,o.createElement("main",null,o.createElement("div",{className:"main-container"},c)),o.createElement("footer",null,o.createElement("div",{className:"footer-container"},o.createElement("h1",null,o.createElement("span",null,"Molotow")," Riot ",o.createElement("span",null,"Art")),o.createElement("div",{className:"social-icons"},o.createElement("div",{classname:"social-icon"},o.createElement(l.S,{src:"../../images/icons/facebook-icon.png",width:32,height:32,__imageData:n(2972)})),o.createElement("div",{classname:"social-icon"},o.createElement(l.S,{src:"../../images/icons/instagram-icon.png",width:32,height:32,__imageData:n(1342)})),o.createElement("div",{classname:"social-icon"},o.createElement(l.S,{src:"../../images/icons/twitter-icon.png",width:32,height:32,__imageData:n(6486)})),o.createElement("div",{classname:"social-icon"},o.createElement(l.S,{src:"../../images/icons/whatsapp-icon.png",width:32,height:32,__imageData:n(5207)}))),o.createElement("p",null,"Copyright © 2022 Molotow Riot Art. All rights reserved"))))}},134:function(e,t,n){var o=n(7294);function a(e){return o.createElement("svg",e,[o.createElement("path",{id:"bottlePath",d:"m80.156 163.74-25.395 24.502s-15.653 1.7213-27.065-7.8503c-11.411-9.5717-11.518-23.926-11.518-23.926l22.248-27.997s10.961-12.942 21.112-21.528c4.723-3.9949 24.74-6.4754 36.151-14.282 10.547-7.2157 15.233-16.529 15.233-16.529s4.7586 2.1925 6.7799 3.9045c2.4202 2.0491 5.2675 6.0916 5.2675 6.0916s-9.9195 7.8093-15.42 17.068c-5.3218 8.9571-7.806 31.146-10 36.272-4.3885 10.253-17.393 24.275-17.393 24.275z",fill:"none",stroke:"#000000",strokeWidth:"4.4075",key:0}),o.createElement("path",{id:"flamePath",d:"m152 73.745c4.1142-7.5022 2.1678-8.9355 6.0317-18.864 1.211-3.1117-0.2337-4.4256-0.2337-4.4256s-6.9414 13.058-8.6751 9.5201c-1.7338-3.5381 0.38363-10.158 4.4338-13.929 4.0501-3.7705 10.335-3.4616 13.088-15.724 2.7522-12.263 2.4469-10.377 2.4469-10.377s-4.4021 8.8653-8.2611 12.569c-3.859 3.7034-13.212 0.95593-9.1577-3.9832 4.0544-4.9391 10.022-8.5068 10.022-8.5068s-7.4487-2.8311-12.385-0.49641c-4.936 2.3347-11.82 9.7593-13.232 15.723-1.4122 5.964 4.422 8.8281-0.36798 11.202s-16.635-4.6012-20.641 4.4398 1.5988 19.431 9.8259 25.962c5.93 4.5262 18.442 10.038 27.105-3.1107z",fill:"none",stroke:"#000000",strokeWidth:"3",key:1}),o.createElement("g",{id:"mraTest",transform:"matrix(1.6836 0 0 1.3329 -96.185 -63.311)",strokeWidth:".265","aria-label":"MRA",key:2},[o.createElement("path",{id:"aPath",d:"m328.31 169.61q-3.5625 0.46691-7.8375 1.0505-4.275 0.58363-7.6951 1.0505 0.57002-3.8519 1.14-7.5872 0.42752-3.2683 0.71249-6.5366 0.42752-3.2683 0.71253-5.6028h-12.398l-5.7 16.808q-3.135 0.35018-7.4101 0.81709-4.275 0.35018-7.9801 0.70036-4.56 0.4669-8.9776 0.93379 5.7-15.524 11.258-30.582 2.28-6.3032 4.7025-13.19 2.565-6.8868 4.9876-13.657 2.565-6.8868 4.845-13.19 2.28-6.3032 3.99-11.556 9.6901-0.58363 19.665-1.4007 10.118-0.81707 19.665-2.2178-0.42749 3.7352-0.9975 9.338-0.4275 5.4861-0.85501 12.023-0.4275 6.5367-0.855 13.657-0.42752 7.1203-0.85502 14.007-0.71249 16.108-1.5675 34.201-4.275 0.58362-8.5501 0.9338zm-21.945-29.298q0.57001 0 1.995 0 1.5675-0.11672 3.135-0.11672 1.71-0.11671 3.135-0.11671 1.425-0.11676 1.995-0.23346 0-0.70037 0.14251-2.3345 0.28499-1.7509 0.42751-3.8519 0.285-2.2178 0.57-4.7858t0.56998-5.0192q0.57001-5.953 1.425-12.84l0.85501-10.155-2.1375 0.11673-3.2775 10.038z",strokeWidth:".32294",key:0}),o.createElement("path",{id:"rPath",d:"m224.62 178.76q2.8575-14.076 5.5033-27.517 0.9525-5.715 2.1167-11.853 1.1642-6.2441 2.1167-12.277 1.0583-6.1383 1.905-11.747 0.95249-5.715 1.4817-10.372 6.0325-1.905 13.017-2.7517 6.985-0.9525 13.864-0.9525 4.1275 0 6.7733 0.9525 2.7517 0.9525 4.2333 2.7517 1.5875 1.6933 2.2225 4.0217 0.635 2.3283 0.635 5.1858 0 4.2333-1.4817 8.3608-1.4817 4.0216-4.0216 7.7258-2.4342 3.5983-5.715 6.6675-3.175 2.9633-6.8791 4.8683 1.905 4.2333 4.0216 9.3133 2.2225 4.9742 4.1275 9.525 2.1167 5.2916 4.3392 10.583l-16.404 5.715q-2.1167-7.3025-3.81-13.758-0.74083-2.6458-1.4817-5.3975-0.74083-2.8575-1.3758-5.2916-0.635-2.54-1.0583-4.445-0.42333-1.905-0.52917-2.9633l-1.3758 0.42334q-0.635 3.3866-1.5875 8.255-0.84666 4.8683-1.5875 9.4191-0.9525 5.3975-1.905 11.112zm24.871-45.932q2.0108-0.21167 4.8683-1.6933 2.9633-1.4817 5.6092-3.4925 2.6458-2.1167 4.5508-4.3392 1.905-2.2225 1.905-3.9158 0-1.1642-0.74083-1.7992-0.74083-0.74084-2.1167-1.0583-1.27-0.42334-2.8575-0.52917-1.5875-0.10583-3.2808-0.10583-1.1642 0-2.4342 0.10583-1.1642 0-2.1167 0z",strokeWidth:".265",key:1}),o.createElement("path",{id:"mPath",d:"m150.51 183.55q4.6566-14.076 8.89-27.622 1.7992-5.715 3.7042-11.959 1.905-6.2442 3.81-12.382 1.905-6.1383 3.4925-11.853 1.6933-5.715 2.9633-10.583 5.8208 0 11.007-0.635t11.218-1.1642q-0.3175 2.3283-0.74083 5.2916-0.3175 2.8575-0.84667 6.0325-0.42333 3.175-0.95249 6.5616-0.52917 3.3866-1.27 8.6783t-2.0108 13.229h1.3758q3.0692-8.0433 5.08-13.335 2.0108-5.3975 3.2808-8.7841 1.27-3.3867 2.54-6.5616 1.3758-3.2808 2.54-6.1383 1.27-2.9633 2.3283-5.1858 2.6458-0.21166 4.9742-0.52916t4.6566-0.635q2.3283-0.42333 4.6566-0.74083 2.4342-0.42333 5.2916-0.9525-1.0583 6.1383-2.0108 12.594-0.9525 6.4558-1.6933 12.912-0.74083 6.35-1.4817 12.594-0.635 6.2442-1.1642 11.853-1.27 13.123-2.2225 25.612l-18.415 3.2808q0-0.52917 0.10583-2.8575 0.21167-2.3283 0.42333-5.715 0.3175-3.3866 0.74083-7.5141 0.52917-4.1275 0.9525-8.255 0.52917-4.1275 1.0583-7.9375 0.52917-3.9158 1.0583-6.6675h-0.9525q-1.4817 4.445-3.2808 9.4191-1.7992 4.8683-3.7042 9.9483-1.7992 5.08-3.5983 9.9483-1.7992 4.8683-3.175 9.3133-3.7042 0.10583-6.35 0.3175-2.6458 0.10583-6.1383 0.31749l3.3867-39.264h-1.5875q-0.21166 1.3758-1.0583 4.6566-0.84666 3.175-2.0108 7.4083-1.0583 4.1275-2.3283 8.6783-1.27 4.445-2.4342 8.3608-1.0583 3.81-1.7992 6.35-0.74083 2.4342-0.84667 2.7516z",key:2})])])}a.defaultProps={width:"550mm",height:"200mm",version:"1.1",viewBox:"0 0 550 200"},e.exports=a,a.default=a},2473:function(e){"use strict";var t=function(){};e.exports=t},1342:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/09552590e0b5f7ab183cf926e9ceb885/914ee/instagram-icon.png","srcSet":"/static/09552590e0b5f7ab183cf926e9ceb885/22867/instagram-icon.png 8w,\\n/static/09552590e0b5f7ab183cf926e9ceb885/fbc98/instagram-icon.png 16w,\\n/static/09552590e0b5f7ab183cf926e9ceb885/914ee/instagram-icon.png 32w,\\n/static/09552590e0b5f7ab183cf926e9ceb885/1c9ce/instagram-icon.png 64w","sizes":"(min-width: 32px) 32px, 100vw"},"sources":[{"srcSet":"/static/09552590e0b5f7ab183cf926e9ceb885/5d252/instagram-icon.webp 8w,\\n/static/09552590e0b5f7ab183cf926e9ceb885/e789a/instagram-icon.webp 16w,\\n/static/09552590e0b5f7ab183cf926e9ceb885/ef6ff/instagram-icon.webp 32w,\\n/static/09552590e0b5f7ab183cf926e9ceb885/8257c/instagram-icon.webp 64w","type":"image/webp","sizes":"(min-width: 32px) 32px, 100vw"}]},"width":32,"height":32}')},6486:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/ebc6e443edfba20ef0e119c6c4b079ca/914ee/twitter-icon.png","srcSet":"/static/ebc6e443edfba20ef0e119c6c4b079ca/22867/twitter-icon.png 8w,\\n/static/ebc6e443edfba20ef0e119c6c4b079ca/fbc98/twitter-icon.png 16w,\\n/static/ebc6e443edfba20ef0e119c6c4b079ca/914ee/twitter-icon.png 32w,\\n/static/ebc6e443edfba20ef0e119c6c4b079ca/1c9ce/twitter-icon.png 64w","sizes":"(min-width: 32px) 32px, 100vw"},"sources":[{"srcSet":"/static/ebc6e443edfba20ef0e119c6c4b079ca/5d252/twitter-icon.webp 8w,\\n/static/ebc6e443edfba20ef0e119c6c4b079ca/e789a/twitter-icon.webp 16w,\\n/static/ebc6e443edfba20ef0e119c6c4b079ca/ef6ff/twitter-icon.webp 32w,\\n/static/ebc6e443edfba20ef0e119c6c4b079ca/8257c/twitter-icon.webp 64w","type":"image/webp","sizes":"(min-width: 32px) 32px, 100vw"}]},"width":32,"height":32}')},2972:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#1878f8","images":{"fallback":{"src":"/static/0de1c31e495fdc0567d072d5268d736a/914ee/facebook-icon.png","srcSet":"/static/0de1c31e495fdc0567d072d5268d736a/22867/facebook-icon.png 8w,\\n/static/0de1c31e495fdc0567d072d5268d736a/fbc98/facebook-icon.png 16w,\\n/static/0de1c31e495fdc0567d072d5268d736a/914ee/facebook-icon.png 32w,\\n/static/0de1c31e495fdc0567d072d5268d736a/1c9ce/facebook-icon.png 64w","sizes":"(min-width: 32px) 32px, 100vw"},"sources":[{"srcSet":"/static/0de1c31e495fdc0567d072d5268d736a/5d252/facebook-icon.webp 8w,\\n/static/0de1c31e495fdc0567d072d5268d736a/e789a/facebook-icon.webp 16w,\\n/static/0de1c31e495fdc0567d072d5268d736a/ef6ff/facebook-icon.webp 32w,\\n/static/0de1c31e495fdc0567d072d5268d736a/8257c/facebook-icon.webp 64w","type":"image/webp","sizes":"(min-width: 32px) 32px, 100vw"}]},"width":32,"height":32}')},5207:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#58f878","images":{"fallback":{"src":"/static/6f404efb2f6982575dd1f634dc397b2f/914ee/whatsapp-icon.png","srcSet":"/static/6f404efb2f6982575dd1f634dc397b2f/22867/whatsapp-icon.png 8w,\\n/static/6f404efb2f6982575dd1f634dc397b2f/fbc98/whatsapp-icon.png 16w,\\n/static/6f404efb2f6982575dd1f634dc397b2f/914ee/whatsapp-icon.png 32w,\\n/static/6f404efb2f6982575dd1f634dc397b2f/1c9ce/whatsapp-icon.png 64w","sizes":"(min-width: 32px) 32px, 100vw"},"sources":[{"srcSet":"/static/6f404efb2f6982575dd1f634dc397b2f/5d252/whatsapp-icon.webp 8w,\\n/static/6f404efb2f6982575dd1f634dc397b2f/e789a/whatsapp-icon.webp 16w,\\n/static/6f404efb2f6982575dd1f634dc397b2f/ef6ff/whatsapp-icon.webp 32w,\\n/static/6f404efb2f6982575dd1f634dc397b2f/8257c/whatsapp-icon.webp 64w","type":"image/webp","sizes":"(min-width: 32px) 32px, 100vw"}]},"width":32,"height":32}')}}]);
//# sourceMappingURL=a979c37c6747bf59c26b02a2e982216fab0805bd-07067f2c1c8476dd2023.js.map
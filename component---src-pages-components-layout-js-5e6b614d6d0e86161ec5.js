(self.webpackChunkmolotow_riot_art=self.webpackChunkmolotow_riot_art||[]).push([[718],{9713:function(e){e.exports=function(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e},e.exports.__esModule=!0,e.exports.default=e.exports},2837:function(e,t,a){"use strict";var o=a(5318);t.__esModule=!0,t.default=void 0;var c=o(a(1506)),i=o(a(5354)),n=o(a(9713)),r=o(a(7294)),l=o(a(5697)),s=function(e){function t(){for(var t,a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return t=e.call.apply(e,[this].concat(o))||this,(0,n.default)((0,c.default)(t),"state",{theme:"undefined"!=typeof window?window.__theme:null}),t}(0,i.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=this;window.__onThemeChange=function(){e.setState({theme:window.__theme})}},a.toggleTheme=function(e){window.__setPreferredTheme(e)},a.render=function(){return r.default.createElement(this.props.children,{theme:this.state.theme,toggleTheme:this.toggleTheme})},t}(r.default.Component);s.propTypes={children:l.default.func.isRequired};var d=s;t.default=d},7441:function(e,t,a){"use strict";a(5318)(a(2837)).default},4214:function(e,t,a){"use strict";a.r(t);var o=a(7294),c=a(5444),i=(a(7441),a(134)),n=a.n(i),r=a(6125);t.default=function(e){var t,i=e.pageTitle,l=e.fullHeroImage,s=e.children,d=(0,o.useState)(!1),m=d[0],f=d[1],w=(0,c.K2)("3159585216");return t=!0===l?o.createElement("section",{id:"eyecatcher"},o.createElement("div",{className:"eyecatcher-container-full"},o.createElement("h1",null,"Molotow Riot Art ",o.createElement("span",null)),o.createElement("a",{href:"#spotlight",type:"button",className:"spotlight-link"},"Spotlight"))):"",o.createElement("div",null,o.createElement("header",null,o.createElement("title",null,i," | ",w.site.siteMetadata.title)),o.createElement("section",{id:"header"},o.createElement("div",{className:"header container"},o.createElement("div",{className:"logo-container"},o.createElement(c.rU,{to:"/"},o.createElement(n(),null))),o.createElement("nav",{className:"navbar"},o.createElement("div",{className:m?"hamburger-button active":"hamburger-button",onClick:function(){return f(!m)},onKeyDown:function(e){"Enter"===e.key&&f(!m)},role:"button",tabIndex:0},o.createElement("div",{id:"bar1",className:"bar"}),o.createElement("div",{id:"bar2",className:"bar"}),o.createElement("div",{id:"bar3",className:"bar"})),o.createElement("ul",{className:m?"active":null},o.createElement("li",null,o.createElement(c.rU,{to:"/gallery",className:"nav-link-text"},"Gallerie")),o.createElement("li",null,o.createElement(c.rU,{to:"/blog",className:"nav-link-text"},"Blog")),o.createElement("li",null,o.createElement(c.rU,{to:"/about",className:"nav-link-text"},"About")))))),t,o.createElement("main",null,o.createElement("div",{className:"main-container"},s)),o.createElement("footer",null,o.createElement("div",{className:"footer-container"},o.createElement("h1",null,o.createElement("span",null,"Molotow")," Riot ",o.createElement("span",null,"Art")),o.createElement("div",{className:"social-icons"},o.createElement("div",{classname:"social-icon"},o.createElement(r.S,{src:"../../images/icons/facebook-icon.png",width:32,height:32,__imageData:a(2972)})),o.createElement("div",{classname:"social-icon"},o.createElement(r.S,{src:"../../images/icons/instagram-icon.png",width:32,height:32,__imageData:a(1342)})),o.createElement("div",{classname:"social-icon"},o.createElement(r.S,{src:"../../images/icons/twitter-icon.png",width:32,height:32,__imageData:a(6486)})),o.createElement("div",{classname:"social-icon"},o.createElement(r.S,{src:"../../images/icons/whatsapp-icon.png",width:32,height:32,__imageData:a(5207)}))),o.createElement("p",null,"Copyright © 2022 Molotow Riot Art. All rights reserved"))))}},134:function(e,t,a){var o=a(7294);function c(e){return o.createElement("svg",e,[o.createElement("path",{id:"bottlePath",d:"m80.156 163.74-25.395 24.502s-15.653 1.7213-27.065-7.8503c-11.411-9.5717-11.518-23.926-11.518-23.926l22.248-27.997s10.961-12.942 21.112-21.528c4.723-3.9949 24.74-6.4754 36.151-14.282 10.547-7.2157 15.233-16.529 15.233-16.529s4.7586 2.1925 6.7799 3.9045c2.4202 2.0491 5.2675 6.0916 5.2675 6.0916s-9.9195 7.8093-15.42 17.068c-5.3218 8.9571-7.806 31.146-10 36.272-4.3885 10.253-17.393 24.275-17.393 24.275z",fill:"none",stroke:"#000000",strokeWidth:"4.4075",key:0}),o.createElement("path",{id:"flamePath",d:"m152 73.745c4.1142-7.5022 2.1678-8.9355 6.0317-18.864 1.211-3.1117-0.2337-4.4256-0.2337-4.4256s-6.9414 13.058-8.6751 9.5201c-1.7338-3.5381 0.38363-10.158 4.4338-13.929 4.0501-3.7705 10.335-3.4616 13.088-15.724 2.7522-12.263 2.4469-10.377 2.4469-10.377s-4.4021 8.8653-8.2611 12.569c-3.859 3.7034-13.212 0.95593-9.1577-3.9832 4.0544-4.9391 10.022-8.5068 10.022-8.5068s-7.4487-2.8311-12.385-0.49641c-4.936 2.3347-11.82 9.7593-13.232 15.723-1.4122 5.964 4.422 8.8281-0.36798 11.202s-16.635-4.6012-20.641 4.4398 1.5988 19.431 9.8259 25.962c5.93 4.5262 18.442 10.038 27.105-3.1107z",fill:"none",stroke:"#000000",strokeWidth:"3",key:1}),o.createElement("g",{id:"mraTest",transform:"matrix(1.6836 0 0 1.3329 -96.185 -63.311)",strokeWidth:".265","aria-label":"MRA",key:2},[o.createElement("path",{id:"aPath",d:"m328.31 169.61q-3.5625 0.46691-7.8375 1.0505-4.275 0.58363-7.6951 1.0505 0.57002-3.8519 1.14-7.5872 0.42752-3.2683 0.71249-6.5366 0.42752-3.2683 0.71253-5.6028h-12.398l-5.7 16.808q-3.135 0.35018-7.4101 0.81709-4.275 0.35018-7.9801 0.70036-4.56 0.4669-8.9776 0.93379 5.7-15.524 11.258-30.582 2.28-6.3032 4.7025-13.19 2.565-6.8868 4.9876-13.657 2.565-6.8868 4.845-13.19 2.28-6.3032 3.99-11.556 9.6901-0.58363 19.665-1.4007 10.118-0.81707 19.665-2.2178-0.42749 3.7352-0.9975 9.338-0.4275 5.4861-0.85501 12.023-0.4275 6.5367-0.855 13.657-0.42752 7.1203-0.85502 14.007-0.71249 16.108-1.5675 34.201-4.275 0.58362-8.5501 0.9338zm-21.945-29.298q0.57001 0 1.995 0 1.5675-0.11672 3.135-0.11672 1.71-0.11671 3.135-0.11671 1.425-0.11676 1.995-0.23346 0-0.70037 0.14251-2.3345 0.28499-1.7509 0.42751-3.8519 0.285-2.2178 0.57-4.7858t0.56998-5.0192q0.57001-5.953 1.425-12.84l0.85501-10.155-2.1375 0.11673-3.2775 10.038z",strokeWidth:".32294",key:0}),o.createElement("path",{id:"rPath",d:"m224.62 178.76q2.8575-14.076 5.5033-27.517 0.9525-5.715 2.1167-11.853 1.1642-6.2441 2.1167-12.277 1.0583-6.1383 1.905-11.747 0.95249-5.715 1.4817-10.372 6.0325-1.905 13.017-2.7517 6.985-0.9525 13.864-0.9525 4.1275 0 6.7733 0.9525 2.7517 0.9525 4.2333 2.7517 1.5875 1.6933 2.2225 4.0217 0.635 2.3283 0.635 5.1858 0 4.2333-1.4817 8.3608-1.4817 4.0216-4.0216 7.7258-2.4342 3.5983-5.715 6.6675-3.175 2.9633-6.8791 4.8683 1.905 4.2333 4.0216 9.3133 2.2225 4.9742 4.1275 9.525 2.1167 5.2916 4.3392 10.583l-16.404 5.715q-2.1167-7.3025-3.81-13.758-0.74083-2.6458-1.4817-5.3975-0.74083-2.8575-1.3758-5.2916-0.635-2.54-1.0583-4.445-0.42333-1.905-0.52917-2.9633l-1.3758 0.42334q-0.635 3.3866-1.5875 8.255-0.84666 4.8683-1.5875 9.4191-0.9525 5.3975-1.905 11.112zm24.871-45.932q2.0108-0.21167 4.8683-1.6933 2.9633-1.4817 5.6092-3.4925 2.6458-2.1167 4.5508-4.3392 1.905-2.2225 1.905-3.9158 0-1.1642-0.74083-1.7992-0.74083-0.74084-2.1167-1.0583-1.27-0.42334-2.8575-0.52917-1.5875-0.10583-3.2808-0.10583-1.1642 0-2.4342 0.10583-1.1642 0-2.1167 0z",strokeWidth:".265",key:1}),o.createElement("path",{id:"mPath",d:"m150.51 183.55q4.6566-14.076 8.89-27.622 1.7992-5.715 3.7042-11.959 1.905-6.2442 3.81-12.382 1.905-6.1383 3.4925-11.853 1.6933-5.715 2.9633-10.583 5.8208 0 11.007-0.635t11.218-1.1642q-0.3175 2.3283-0.74083 5.2916-0.3175 2.8575-0.84667 6.0325-0.42333 3.175-0.95249 6.5616-0.52917 3.3866-1.27 8.6783t-2.0108 13.229h1.3758q3.0692-8.0433 5.08-13.335 2.0108-5.3975 3.2808-8.7841 1.27-3.3867 2.54-6.5616 1.3758-3.2808 2.54-6.1383 1.27-2.9633 2.3283-5.1858 2.6458-0.21166 4.9742-0.52916t4.6566-0.635q2.3283-0.42333 4.6566-0.74083 2.4342-0.42333 5.2916-0.9525-1.0583 6.1383-2.0108 12.594-0.9525 6.4558-1.6933 12.912-0.74083 6.35-1.4817 12.594-0.635 6.2442-1.1642 11.853-1.27 13.123-2.2225 25.612l-18.415 3.2808q0-0.52917 0.10583-2.8575 0.21167-2.3283 0.42333-5.715 0.3175-3.3866 0.74083-7.5141 0.52917-4.1275 0.9525-8.255 0.52917-4.1275 1.0583-7.9375 0.52917-3.9158 1.0583-6.6675h-0.9525q-1.4817 4.445-3.2808 9.4191-1.7992 4.8683-3.7042 9.9483-1.7992 5.08-3.5983 9.9483-1.7992 4.8683-3.175 9.3133-3.7042 0.10583-6.35 0.3175-2.6458 0.10583-6.1383 0.31749l3.3867-39.264h-1.5875q-0.21166 1.3758-1.0583 4.6566-0.84666 3.175-2.0108 7.4083-1.0583 4.1275-2.3283 8.6783-1.27 4.445-2.4342 8.3608-1.0583 3.81-1.7992 6.35-0.74083 2.4342-0.84667 2.7516z",key:2})])])}c.defaultProps={width:"550mm",height:"200mm",version:"1.1",viewBox:"0 0 550 200"},e.exports=c,c.default=c},1342:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/molotow-riot-art/static/09552590e0b5f7ab183cf926e9ceb885/914ee/instagram-icon.png","srcSet":"/molotow-riot-art/static/09552590e0b5f7ab183cf926e9ceb885/22867/instagram-icon.png 8w,\\n/molotow-riot-art/static/09552590e0b5f7ab183cf926e9ceb885/fbc98/instagram-icon.png 16w,\\n/molotow-riot-art/static/09552590e0b5f7ab183cf926e9ceb885/914ee/instagram-icon.png 32w,\\n/molotow-riot-art/static/09552590e0b5f7ab183cf926e9ceb885/1c9ce/instagram-icon.png 64w","sizes":"(min-width: 32px) 32px, 100vw"},"sources":[{"srcSet":"/molotow-riot-art/static/09552590e0b5f7ab183cf926e9ceb885/5d252/instagram-icon.webp 8w,\\n/molotow-riot-art/static/09552590e0b5f7ab183cf926e9ceb885/e789a/instagram-icon.webp 16w,\\n/molotow-riot-art/static/09552590e0b5f7ab183cf926e9ceb885/ef6ff/instagram-icon.webp 32w,\\n/molotow-riot-art/static/09552590e0b5f7ab183cf926e9ceb885/8257c/instagram-icon.webp 64w","type":"image/webp","sizes":"(min-width: 32px) 32px, 100vw"}]},"width":32,"height":32}')},6486:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/molotow-riot-art/static/ebc6e443edfba20ef0e119c6c4b079ca/914ee/twitter-icon.png","srcSet":"/molotow-riot-art/static/ebc6e443edfba20ef0e119c6c4b079ca/22867/twitter-icon.png 8w,\\n/molotow-riot-art/static/ebc6e443edfba20ef0e119c6c4b079ca/fbc98/twitter-icon.png 16w,\\n/molotow-riot-art/static/ebc6e443edfba20ef0e119c6c4b079ca/914ee/twitter-icon.png 32w,\\n/molotow-riot-art/static/ebc6e443edfba20ef0e119c6c4b079ca/1c9ce/twitter-icon.png 64w","sizes":"(min-width: 32px) 32px, 100vw"},"sources":[{"srcSet":"/molotow-riot-art/static/ebc6e443edfba20ef0e119c6c4b079ca/5d252/twitter-icon.webp 8w,\\n/molotow-riot-art/static/ebc6e443edfba20ef0e119c6c4b079ca/e789a/twitter-icon.webp 16w,\\n/molotow-riot-art/static/ebc6e443edfba20ef0e119c6c4b079ca/ef6ff/twitter-icon.webp 32w,\\n/molotow-riot-art/static/ebc6e443edfba20ef0e119c6c4b079ca/8257c/twitter-icon.webp 64w","type":"image/webp","sizes":"(min-width: 32px) 32px, 100vw"}]},"width":32,"height":32}')},2972:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#1878f8","images":{"fallback":{"src":"/molotow-riot-art/static/0de1c31e495fdc0567d072d5268d736a/914ee/facebook-icon.png","srcSet":"/molotow-riot-art/static/0de1c31e495fdc0567d072d5268d736a/22867/facebook-icon.png 8w,\\n/molotow-riot-art/static/0de1c31e495fdc0567d072d5268d736a/fbc98/facebook-icon.png 16w,\\n/molotow-riot-art/static/0de1c31e495fdc0567d072d5268d736a/914ee/facebook-icon.png 32w,\\n/molotow-riot-art/static/0de1c31e495fdc0567d072d5268d736a/1c9ce/facebook-icon.png 64w","sizes":"(min-width: 32px) 32px, 100vw"},"sources":[{"srcSet":"/molotow-riot-art/static/0de1c31e495fdc0567d072d5268d736a/5d252/facebook-icon.webp 8w,\\n/molotow-riot-art/static/0de1c31e495fdc0567d072d5268d736a/e789a/facebook-icon.webp 16w,\\n/molotow-riot-art/static/0de1c31e495fdc0567d072d5268d736a/ef6ff/facebook-icon.webp 32w,\\n/molotow-riot-art/static/0de1c31e495fdc0567d072d5268d736a/8257c/facebook-icon.webp 64w","type":"image/webp","sizes":"(min-width: 32px) 32px, 100vw"}]},"width":32,"height":32}')},5207:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#58f878","images":{"fallback":{"src":"/molotow-riot-art/static/6f404efb2f6982575dd1f634dc397b2f/914ee/whatsapp-icon.png","srcSet":"/molotow-riot-art/static/6f404efb2f6982575dd1f634dc397b2f/22867/whatsapp-icon.png 8w,\\n/molotow-riot-art/static/6f404efb2f6982575dd1f634dc397b2f/fbc98/whatsapp-icon.png 16w,\\n/molotow-riot-art/static/6f404efb2f6982575dd1f634dc397b2f/914ee/whatsapp-icon.png 32w,\\n/molotow-riot-art/static/6f404efb2f6982575dd1f634dc397b2f/1c9ce/whatsapp-icon.png 64w","sizes":"(min-width: 32px) 32px, 100vw"},"sources":[{"srcSet":"/molotow-riot-art/static/6f404efb2f6982575dd1f634dc397b2f/5d252/whatsapp-icon.webp 8w,\\n/molotow-riot-art/static/6f404efb2f6982575dd1f634dc397b2f/e789a/whatsapp-icon.webp 16w,\\n/molotow-riot-art/static/6f404efb2f6982575dd1f634dc397b2f/ef6ff/whatsapp-icon.webp 32w,\\n/molotow-riot-art/static/6f404efb2f6982575dd1f634dc397b2f/8257c/whatsapp-icon.webp 64w","type":"image/webp","sizes":"(min-width: 32px) 32px, 100vw"}]},"width":32,"height":32}')}}]);
//# sourceMappingURL=component---src-pages-components-layout-js-5e6b614d6d0e86161ec5.js.map
webpackJsonp([1],{132:function(e,t){},133:function(e,t){},134:function(e,t){},135:function(e,t){},136:function(e,t){},196:function(e,t,n){function o(e){n(136)}var r=n(10)(n(90),n(205),o,null,null);e.exports=r.exports},197:function(e,t,n){function o(e){n(135)}var r=n(10)(n(92),n(204),o,null,null);e.exports=r.exports},198:function(e,t,n){var o=n(10)(n(93),n(202),null,null,null);e.exports=o.exports},199:function(e,t,n){function o(e){n(134)}var r=n(10)(n(94),n(203),o,null,null);e.exports=r.exports},200:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("header-bar"),e._v(" "),n("creator")],1)},staticRenderFns:[]}},201:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("visual-editor",{staticClass:"column--content"}),e._v(" "),n("div",{staticClass:"screenshot__canvas",style:{width:e.lastColumn+"px"}},[n("aframe-view",{staticClass:"column screenshot__content",style:{width:e.screenshotWidth+"px",height:e.screenshotHeight+"px"},attrs:{id:"app-container"}})],1)],1)},staticRenderFns:[]}},202:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"editor__box-upload",attrs:{id:e.uploadId}},[e._v("\n  click to upload or drop a file"),n("br"),n("br"),e._v(" "),n("img",{staticClass:"editor__box-img",style:{width:e.imgWidth+"px"},attrs:{src:e.imgUrl}})])},staticRenderFns:[]}},203:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"editor__container"},[n("div",{staticClass:"editor__controls"},e._l(e.elements,function(t,o){return t.hide?e._e():n("div",{staticClass:"editor__box",class:t.color},[t.isPreview?e._e():n("div",{staticClass:"editor__box-toggle",class:{closed:!t.isOpen},on:{click:function(e){t.isOpen=!t.isOpen}}}),e._v(" "),n("div",{staticClass:"editor__box-title",class:t.color,on:{click:function(e){t.isOpen=!t.isOpen}}},[e._v(e._s(t.name))]),e._v(" "),e._l(t.ctrl,function(o,r){return t.isOpen&&e.getValue(o.condition)&&!o.hide?n("div",["text"===o.type?n("span",{staticClass:"editor__box-text",domProps:{innerHTML:e._s(o.text)}}):e._e(),e._v(" "),"checkbox"===o.type?n("input",{directives:[{name:"model",rawName:"v-model",value:o.val,expression:"c.val"}],attrs:{type:"checkbox",id:r},domProps:{checked:Array.isArray(o.val)?e._i(o.val,null)>-1:o.val},on:{change:[function(t){var n=o.val,r=t.target,i=!!r.checked;if(Array.isArray(n)){var a=e._i(n,null);r.checked?a<0&&e.$set(o,"val",n.concat([null])):a>-1&&e.$set(o,"val",n.slice(0,a).concat(n.slice(a+1)))}else e.$set(o,"val",i)},function(t){e.runMethod(o.method)}]}}):e._e(),e._v(" "),!o.label||"checkbox"!==o.type&&"input"!==o.type?e._e():n("label",{staticClass:"editor__box-label",attrs:{for:r}},[e._v(e._s(o.label))]),e._v(" "),"input"===o.type?n("input",{directives:[{name:"model",rawName:"v-model",value:o.val,expression:"c.val"}],staticClass:"editor__box-input",attrs:{placeholder:o.placeholder},domProps:{value:o.val},on:{input:[function(t){t.target.composing||e.$set(o,"val",t.target.value)},function(t){e.runMethod(o.method)}]}}):e._e(),e._v(" "),"textarea"===o.type?n("textarea",{directives:[{name:"model",rawName:"v-model",value:o.val,expression:"c.val"}],staticClass:"editor__box-textarea",attrs:{placeholder:o.placeholder},domProps:{value:o.val},on:{input:[function(t){t.target.composing||e.$set(o,"val",t.target.value)},function(t){e.runMethod(o.method)}]}}):e._e(),e._v(" "),"button"===o.type?n("button",{staticClass:"editor__box-button",on:{click:function(t){o.method?e.runMethod(o.method):e.$store.commit(o.mutation)}},model:{value:o.val,callback:function(t){e.$set(o,"val",t)},expression:"c.val"}},[e._v(e._s(o.label))]):e._e(),e._v(" "),"slider"===o.type?n("vue-slider",{staticClass:"editor__box-slider",attrs:{tooltip:"hover",min:o.range[0],max:o.range[1]},on:{input:function(t){e.runMethod(o.method)}},model:{value:o.val,callback:function(t){e.$set(o,"val",t)},expression:"c.val"}}):e._e(),e._v(" "),"color"===o.type?n("div",{staticClass:"editor__box-color-preview",style:{"background-color":o.val.hex},on:{click:function(t){e.showColorPicker=!e.showColorPicker}}},[e._v(e._s(o.val.hex))]):e._e(),e._v(" "),"color"===o.type&&e.showColorPicker?n("chrome-picker",{staticClass:"editor__box-color",on:{input:function(t){e.runMethod(o.method)}},model:{value:o.val,callback:function(t){e.$set(o,"val",t)},expression:"c.val"}}):e._e(),e._v(" "),"upload"===o.type?n("image-upload",{attrs:{"upload-id":r,"img-width":e.getValue(o.width),"img-url":e.getValue(o.src)},on:{upload:e.imageUpload}}):e._e(),e._v(" "),o.error?n("div",{staticClass:"editor__box-error",domProps:{innerHTML:e._s(o.error)}}):e._e()],1):e._e()})],2)}))])},staticRenderFns:[]}},204:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",[n("div",{staticClass:"header__logo"}),e._v(" "),n("h1",[n("span",{staticClass:"header__title"},[e._v("3d.io Screenshots")]),n("span",{staticClass:"header__version"},[e._v("beta")])])])}]}},205:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app__container"},[n("div",{staticClass:"app__wrapper",attrs:{id:"aframe-wrapper"}},[n("iframe",{staticClass:"app__iframe",attrs:{id:"aframe-view",src:"about:blank"}})])])}]}},212:function(e,t){},213:function(e,t){},39:function(e,t,n){"use strict";var o=n(26),r=n(206),i=n(76),a=n.n(i);o.a.use(r.a),t.a=new r.a({routes:[{path:"/",name:"Creator",component:a.a}]})},40:function(e,t){function n(e){throw new Error("Cannot find module '"+e+"'.")}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=40},43:function(e,t,n){"use strict";n.d(t,"a",function(){return o}),n.d(t,"b",function(){return r}),n.d(t,"c",function(){return i}),n.d(t,"f",function(){return a}),n.d(t,"d",function(){return s}),n.d(t,"g",function(){return l}),n.d(t,"h",function(){return c}),n.d(t,"e",function(){return u});var o="UPDATE_CODE",r="UPDATE_SCREENSHOT",i="SET_SCENE",a="SET_SHORT_ID",s="SET_MODEL_STRUCTURE",l="SET_APP_TITLE",c="SET_TEMPLATE",u="LOADING_APP"},76:function(e,t,n){function o(e){n(133)}var r=n(10)(n(91),n(201),o,null,null);e.exports=r.exports},78:function(e,t,n){"use strict";var o,r=n(44),i=n.n(r),a=n(26),s=n(11),l=n(88),c=n(43);a.a.use(s.a);var u={aframeCode:"",sceneToLoad:!1,modelStructure:null,screenshotDimensions:{width:null,height:null}},d={aframeCode:function(e){return e.aframeCode},sceneToLoad:function(e){return e.sceneToLoad},modelStructure:function(e){return e.modelStructure},screenshotDimensions:function(e){return e.screenshotDimensions}},p=(o={},i()(o,c.a,function(e,t){e.aframeCode=t}),i()(o,c.b,function(e,t){e.screenshotDimensions=t}),i()(o,c.c,function(e,t){e.sceneToLoad=t}),i()(o,c.d,function(e,t){e.modelStructure=t}),o);t.a=new s.a.Store({getters:d,mutations:p,state:u,modules:{apps:l.a},strict:!1})},79:function(e,t,n){function o(e){n(132)}var r=n(10)(n(89),n(200),o,null,null);e.exports=r.exports},82:function(e,t,n){"use strict";t.a={getShortCode:function(e){return fetch("https://app.3d.io/get-short-id/"+e.replace(/^\//,""),{method:"POST",headers:{"X-API-Key":"thisWillChange"}}).then(function(e){return e.text()})},getDirectory:function(e){return fetch("https://app.3d.io/get-dir/"+e).then(function(e){return e.text()})},readFromDirectory:function(e){return fetch("https://storage-nocdn.3d.io"+e+"index.html?x="+Date.now(),{mode:"cors"}).then(function(e){return e.text()})}}},83:function(e,t){e.exports=["default_setup"]},84:function(e,t){e.exports={scene:{name:"Import Archilogic scene",isOpen:!0,color:"ocean",ctrl:{"scn-inpt":{type:"input",placeholder:"enter a scene id or url",error:!1,val:null,method:"pushScene"}}},logo:{name:"Custom logo",isOpen:!0,ctrl:{"lg-ckbx":{label:"Show Logo",id:"show-logo",type:"checkbox",val:!0,method:"switchLogo"},"lg-inpt":{condition:"elements.logo.ctrl.lg-ckbx.val",type:"input",hide:!0,placeholder:"enter a url",val:null,method:"pushLogo"},"lg-text":{condition:"elements.logo.ctrl.lg-ckbx.val",text:"Use ideally a png with transparency - not wider than 200px",type:"text"},"lg-upload":{condition:"elements.logo.ctrl.lg-ckbx.val",type:"upload",width:"elements.logo.ctrl.lg-width.val",src:"elements.logo.ctrl.lg-inpt.val"},"lg-img":{condition:"elements.logo.ctrl.lg-ckbx.val",type:"image",width:"elements.logo.ctrl.lg-width.val",src:"elements.logo.ctrl.lg-inpt.val"},"lg-width":{condition:"elements.logo.ctrl.lg-ckbx.val",label:"Size",type:"slider",range:[50,250],val:80,method:"pushLogo"},"lg-link":{condition:"elements.logo.ctrl.lg-ckbx.val",type:"input",placeholder:"enter a target link",val:null,method:"pushLogo"}}},sky:{name:"Background",isOpen:!0,ctrl:{"bkgrnd-ckbx-clr":{label:"Use color",id:"bkgrnd-color",type:"checkbox",method:"pushColor",val:!0},"bkgrnd-clr":{condition:"elements.sky.ctrl.bkgrnd-ckbx-clr.val",type:"color",val:{hex:"#ffffff"},method:"pushColor"},"bkgrnd-ckbx-img":{label:"Use Image",id:"bkgrnd-img",type:"checkbox",method:"pushSkyImg",val:!1},"bkgrnd-text":{condition:"elements.sky.ctrl.bkgrnd-ckbx-img.val",text:'Best use an <a href="https://www.google.ch/search?biw=1803&bih=804&q=equirectangular+image" target="_blank">equirectangluar image</a> - not wider than 4096px',type:"text"},"bkgrnd-upload":{condition:"elements.sky.ctrl.bkgrnd-ckbx-img.val",type:"upload",src:"elements.sky.ctrl.bkgrnd-inpt.val"},"bkgrnd-rot":{condition:"elements.sky.ctrl.bkgrnd-ckbx-img.val",label:"Rotation",type:"slider",range:[0,360],val:0,method:"pushSkyImg"},"bkgrnd-inpt":{condition:"elements.sky.ctrl.bkgrnd-ckbx-img.val",type:"input",placeholder:"enter your file key",val:null,method:"pushSkyImg"}}},screenshot:{name:"Screenshot",isOpen:!0,ctrl:{"screenshot-width":{label:"Width",id:"screenshot-width",type:"input",method:"changeScreenshotDimensions",val:null},"screenshot-height":{label:"Height",id:"screenshot-height",type:"input",method:"changeScreenshotDimensions",val:null},"screenshot-btn":{label:"Take Screenshot",id:"screenshot-btn",type:"button",method:"takeScreenshot"}}}}},85:function(e,t){e.exports={cameraControls:"    <div class=\"camera-controls\">\n      <div class=\"waypoints\">\n        <button class=\"btn-waypoint\" onclick=\"document.querySelector('[camera]').components['tour'].goTo('Overview')\">Overview</button>\n        <button class=\"btn-toggle-play playing\"\n                onclick=\"this.classList.contains('playing') ? document.querySelector('[camera]').components['tour'].pauseTour() : document.querySelector('[camera]').components['tour'].playTour(), this.classList.toggle('playing')\">\n        </button>\n      </div>\n      <div class=\"camera-mode\">\n        <div class=\"btn camera active\"\n             onclick=\"document.querySelector('.waypoints').classList.toggle('hide'), this.classList.toggle('active')\">\n        </div>\n        <div class=\"btn bird\"\n             id=\"btn-bird\"\n             onclick=\"document.querySelector('[camera]').components['tour'].updateViewPoint({position:{y:7}, rotation:{x:-60}}), document.querySelector('#btn-person').classList.remove('active'), this.classList.add('active')\">\n        </div>\n        <div class=\"btn person active\"\n             id=\"btn-person\"\n             onclick=\"document.querySelector('[camera]').components['tour'].updateViewPoint({position:{y:1.6}, rotation:{x:0}}), document.querySelector('#btn-bird').classList.remove('active'), this.classList.add('active')\">\n        </div>\n      </div>\n    </div>",logo:'<div id="custom-logo">\n      <a href="https://3d.io" target="_blank">\n        <img src="https://archilogic-com.github.io/ui-style-guide/3d-io-logo/3d-io-logo-small.svg">\n      </a>\n    </div>'}},86:function(e,t){function n(e,t){for(var n,r,i,a,s,l,c=t||0,u=!1,d=/><./gm;n=d.exec(e);)i=n.index,a=d.lastIndex-1,r="/"===e.slice(i+2,a+1),l=!1,r?(u?c-=2:l=!0,u=!0):(u||(c+=2),u=!1),s=">\n"+" ".repeat(c)+"<",l||(e=o(e,i,a,s));return e}function o(e,t,n,o){return e.substr(0,t)+o+e.substr(n)}e.exports=n},87:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(26),r=n(11),i=n(79),a=n.n(i),s=n(80),l=(n.n(s),n(78)),c=n(39);n.i(s.sync)(l.a,c.a);o.a.use(r.a),o.a.config.productionTip=!1,new o.a({el:"#app",store:l.a,router:c.a,template:"<App/>",components:{App:a.a}})},88:function(e,t,n){"use strict";var o,r=n(44),i=n.n(r),a=n(43),s=n(83),l=n.n(s),c=n(82),u=n(39),d={isLoadingApp:null,appTitle:null,shortId:"",isTemplate:!1},p={isTemplate:function(e){return e.isTemplate},shortId:function(e){return e.shortId},appTitle:function(e){return e.appTitle}},m={loadApp:function(e,t){var n=e.commit,o=e.state,r=e.rootState;if(console.log("loading app",n,o,r,t),o.isLoadingApp===t)return void console.warn("already loading");n("LOADING_APP",t),c.a.getDirectory(t).then(function(e){console.log("loading app",t,"is Template:",l.a.indexOf(t)>-1);var o=l.a.indexOf(t)>-1;return n("SET_TEMPLATE",o),c.a.readFromDirectory(e)}).then(function(e){var o=/<title>(.*)<\/title>/g.test(e)&&/<title>(.*)<\/title>/g.exec(e)[1];n("SET_APP_TITLE",o),n("SET_SHORT_ID",t),n("UPDATE_CODE",e);var i=r.route&&r.route.query;u.a.replace({path:"/"+t,query:i}),setTimeout(function(){n("LOADING_APP",null)},400)}).catch(function(e){console.error("Loading failed :("),console.error(e),n("LOADING_APP",null)})}},h=(o={},i()(o,a.e,function(e,t){e.isLoadingApp=t}),i()(o,a.f,function(e,t){t&&(e.shortId=t)}),i()(o,a.g,function(e,t){e.appTitle=t}),i()(o,a.h,function(e,t){e.isTemplate=t}),o);t.a={state:d,getters:p,actions:m,mutations:h}},89:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(197),r=n.n(o),i=n(76),a=n.n(i);t.default={name:"app",components:{"header-bar":r.a,creator:a.a},methods:{initApp:function(){this.$store.dispatch("loadApp","default_setup")}},mounted:function(){this.initApp()}}},90:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(11),r=n(65);n.n(r);t.default={name:"aframe-view",data:function(){return{msg:"aframe view"}},computed:n.i(o.b)({aframeCode:"aframeCode"}),watch:{aframeCode:function(){this.updateIframe()}},methods:{updateIframe:n.i(r.debounce)(function(){var e=document.getElementById("aframe-view"),t=e.parentNode;t.removeChild(e);var n=document.createElement("iframe");n.id="aframe-view",n.className="app__iframe",t.append(n),e=document.getElementById("aframe-view");var o=e.contentWindow.document;o.open();var r=this.aframeCode.replace("<a-scene",'<a-scene vr-mode-ui="enabled: false"');o.write(r),o.close()},500)},mounted:function(){this.updateIframe()}}},91:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(45),r=n.n(o),i=n(196),a=n.n(i),s=n(199),l=n.n(s),c=n(11);t.default={name:"creator",data:function(){return{innerWidth:null}},computed:r()({},n.i(c.b)({aframeCode:"aframeCode",shortId:"shortId",appTitle:"appTitle",isTemplate:"isTemplate",screenshotDimensions:"screenshotDimensions"}),{lastColumn:function(){return this.innerWidth-350},columnMode:function(){var e=this,t="";return["v"].forEach(function(n,o){e.columns[o].isVisible&&(t+=n)}),""===t?"a":t},screenshotWidth:function(){return this.screenshotDimensions.width||1024},screenshotHeight:function(){return this.screenshotDimensions.height||768}}),components:{"aframe-view":a.a,"visual-editor":l.a},methods:{handleResize:function(){this.innerWidth=window.innerWidth}},created:function(){this.handleResize(),window.addEventListener("resize",this.handleResize,!0)}}},92:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"header-bar"}},93:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(41),r=n.n(o);t.default={name:"image-upload",props:["imgUrl","imgWidth","uploadId"],data:function(){return{initialPos:null,initialScreenPos:null}},mounted:function(){var e=this;r.a.utils.ui.fileDrop({elementId:this.uploadId,upload:!0,dragOverCssClass:"file-drop-box-dragover",onInput:function(t){e.$emit("upload",{url:t[0].url,target:e.uploadId})}})}}},94:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(45),r=n.n(o),i=n(11),a=n(195),s=(n.n(a),n(207)),l=n.n(s),c=n(65),u=(n.n(c),n(84)),d=n.n(u),p=n(198),m=n.n(p),h=n(86),g=n.n(h),v=n(85),f=n.n(v),_=n(41),b=n.n(_),k=n(151),y=n.n(k),x=n(137),C=n.n(x);t.default={name:"visual-editor",data:function(){return{elements:d.a,showColorPicker:!1}},components:{"chrome-picker":a.Chrome,"image-upload":m.a,"vue-slider":l.a},watch:{aframeCode:function(e){e&&""!==e.trim()&&(this.getSky(),this.getLogo(),this.getApp())}},computed:r()({},n.i(i.b)({aframeCode:"aframeCode",sceneToLoad:"sceneToLoad",modelStructure:"modelStructure",shortId:"shortId"})),methods:{getValue:function(e){var t=!0;return e&&(t=e.split(".").reduce(function(e,t){return e[t]},this)),t},runMethod:n.i(c.debounce)(function(e){e&&this[e]&&this[e]()},300),getEl:function(e,t){var n=void 0;return n=document.createElement("div"),n.innerHTML=this.aframeCode,t?n.querySelectorAll(e):n.querySelector(e)},pushScene:function(){var e=this;this.elements.scene.ctrl["scn-inpt"].error=!1;var t=this.elements.scene.ctrl["scn-inpt"].val,n=/[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}/i;if(!n.test(t))return void(this.elements.scene.ctrl["scn-inpt"].error="no valid uuid");var o=n.exec(t)[0];b.a.scene.getAframeElements(o).then(function(t){t[0].classList.add("io3d-scene");var n=e.getEl('[class="io3d-scene"]'),r=e.getEl("[camera]")||e.getEl("a-camera"),i=g()(t[0].outerHTML,6),a=g()(t[1].outerHTML,6),s=e.getEl("app-3dio")||e.getEl("io3d-app"),l=s.outerHTML,c=l.replace("app-3dio","io3d-app").replace(/scene-id=".*"/g,'scene-id="'+o+'"'),u=e.aframeCode.replace(l,c);u=n?u.replace(n.outerHTML,i):u.replace("</a-scene>","  "+i+"\n    </a-scene>"),u=r?u.replace(r.outerHTML,a):u.replace("</a-scene>","  "+a+"\n    </a-scene>"),e.$store.commit("UPDATE_CODE",u),e.updateWaypoints()})},updateWaypoints:function(){var e=this.getEl("[tour-waypoint]",!0),t=this.getEl(".waypoints"),n=this.getEl(".btn-waypoint",!0),o=/https:\/\/unpkg\.com\/aframe-animation-component\/dist\/aframe-animation-component\.min\.js/.test(this.aframeCode),r="",i=this.aframeCode;if(n.forEach(function(e){var t=e.outerHTML;i=i.replace(t,"")}),i=i.replace(/^\s*\n/gm,"\n"),e.forEach(function(e){var t=e.getAttribute("tour-waypoint"),n=e.getAttribute("io3d-uuid");r+="\n"+" ".repeat(8)+'<button class="btn-waypoint" onclick="document.querySelector(\'[camera]\').components[\'tour\'].goTo(this.dataset.waypointId)" data-waypoint-id="'+n+'">'+t+"</button>"}),t){if(i=i.replace('<div class="waypoints">','<div class="waypoints">'+r),!o){i=i.replace("  </head>",'    <script src="https://unpkg.com/aframe-animation-component/dist/aframe-animation-component.min.js"><\/script>\n  </head>')}this.$store.commit("UPDATE_CODE",i)}},getApp:function(){var e=this.getEl("app-3dio")||this.getEl("io3d-app");if(e){var t=e.id,n=e.getAttribute("scene-id");this.$route.params.shortCode!==t&&console.warn("app id "+t+" does not match route "+this.$route.params.shortCode),this.elements.scene.ctrl["scn-inpt"].val=n}},getSky:function(){var e=this.getEl("a-sky");if(e){var t=e.getAttribute("color"),n=e.getAttribute("src"),o=e.getAttribute("rotation");t?(this.elements.sky.ctrl["bkgrnd-clr"].val={hex:t},this.elements.sky.ctrl["bkgrnd-ckbx-img"].val=!1,this.elements.sky.ctrl["bkgrnd-ckbx-clr"].val=!0):n&&(this.elements.sky.ctrl["bkgrnd-inpt"].val=n,this.elements.sky.ctrl["bkgrnd-ckbx-img"].val=!0,this.elements.sky.ctrl["bkgrnd-ckbx-clr"].val=!1,this.elements.sky.ctrl["bkgrnd-rot"].val=o?o.split(" ")[1]:0)}},pushColor:function(){this.elements.sky.ctrl["bkgrnd-ckbx-img"].val=!1;var e=this.getEl("a-sky"),t=this.elements.sky.ctrl["bkgrnd-clr"].val.hex,n=this.aframeCode.replace(e.outerHTML,'<a-sky color="'+t+'"></a-sky>');this.$store.commit("UPDATE_CODE",n)},pushSkyImg:function(){this.elements.sky.ctrl["bkgrnd-ckbx-clr"].val=!1;var e=this.getEl("a-sky"),t=this.elements.sky.ctrl["bkgrnd-inpt"].val,n=this.elements.sky.ctrl["bkgrnd-rot"].val,o=this.aframeCode.replace(e.outerHTML,'<a-sky src="'+t+'" rotation="0 '+n+' 0"></a-sky>');this.$store.commit("UPDATE_CODE",o)},getLogo:function(){var e=this.getEl("#custom-logo img"),t=this.getEl("#custom-logo a");e&&(this.elements.logo.ctrl["lg-inpt"].val=e.src,t&&(this.elements.logo.ctrl["lg-link"].val=/href="\S*"/.test(t.outerHTML)?/href="(\S*)"/.exec(t.outerHTML)[1]:null))},switchLogo:function(){var e=this.elements.logo.ctrl["lg-ckbx"].val,t=this.getEl("#custom-logo img");if(e){var n=this.elements.logo.ctrl["lg-inpt"].val="https://archilogic-com.github.io/ui-style-guide/3d-io-logo/3d-io-logo-small.svg",o=this.aframeCode.replace('<img src="">','<img src="'+n+'">');this.$store.commit("UPDATE_CODE",o)}else{if(!t)return;var r=this.aframeCode.replace(t.src,"");this.$store.commit("UPDATE_CODE",r)}},pushLogo:function(){var e=this.elements.logo.ctrl["lg-inpt"].val,t=this.elements.logo.ctrl["lg-width"].val,n=this.getEl("#custom-logo"),o=this.getEl("#custom-logo img"),r=this.getEl("#custom-logo a"),i=this.aframeCode;if((!n||!o||!r)&&n)return i=i.replace(n.outerHTML,f.a.logo),this.$store.commit("UPDATE_CODE",i),void this.pushLogo();var a=this.elements.logo.ctrl["lg-link"].val;a&&""!==a&&(this.elements.logo.ctrl["lg-link"].val=a.trim(),/^http.*:\/\//.test(a)||(this.elements.logo.ctrl["lg-link"].val="http://"+this.elements.logo.ctrl["lg-link"].val));var s=void 0;if(o){r&&(s=/href="\S*"/.test(r.outerHTML)&&/href="\S*"/.exec(r.outerHTML)[0]),i=i.replace(/<div id="custom-logo".*>/g,'<div id="custom-logo" style="width:'+t+'px">'),i=i.replace(o.src,e);var l=this.elements.logo.ctrl["lg-link"].val;i=s?i.replace("<a "+s,l?'<a href="'+l+'"':"<a"):i.replace(r.outerHTML,r.outerHTML.replace("<a",l?'<a href="'+l+'"':"<a")),this.$store.commit("UPDATE_CODE",i)}},imageUpload:function(e){"lg-upload"===e.target?(this.elements.logo.ctrl["lg-inpt"].val=e.url,this.pushLogo()):"bkgrnd-upload"===e.target&&(this.elements.sky.ctrl["bkgrnd-inpt"].val=e.url,this.pushSkyImg())},takeScreenshot:function(){y()(document.querySelector("#app-container")).then(function(e){e.toBlob(function(e){C.a.saveAs(e,"myScreenshot.png")})})},changeScreenshotDimensions:function(){console.log(this);var e=this.elements.screenshot.ctrl["screenshot-width"].val,t=this.elements.screenshot.ctrl["screenshot-height"].val,n={width:e,height:t};this.$store.commit("UPDATE_SCREENSHOT",n)}}}}},[87]);
//# sourceMappingURL=app.6afb4c545adf5fc747ba.js.map
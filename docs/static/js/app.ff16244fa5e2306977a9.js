webpackJsonp([1],{127:function(e,t){},128:function(e,t){},129:function(e,t){},130:function(e,t){},131:function(e,t){},132:function(e,t){},165:function(e,t,o){function n(e){o(129)}var i=o(7)(o(81),o(173),n,null,null);e.exports=i.exports},166:function(e,t,o){function n(e){o(132)}var i=o(7)(o(82),o(176),n,null,null);e.exports=i.exports},167:function(e,t,o){function n(e){o(131)}var i=o(7)(o(84),o(175),n,null,null);e.exports=i.exports},168:function(e,t,o){var n=o(7)(o(85),o(172),null,null,null);e.exports=n.exports},169:function(e,t,o){function n(e){o(130)}var i=o(7)(o(86),o(174),n,null,null);e.exports=i.exports},170:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"app"}},[o("header-bar"),e._v(" "),o("creator")],1)},staticRenderFns:[]}},171:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"container"},[o("visual-editor",{staticClass:"column--content"}),e._v(" "),o("div",{staticClass:"screenshot__canvas",style:{width:e.lastColumn+"px"}},[o("aframe-view",{staticClass:"column screenshot__content",style:{width:e.screenshotWidth+"px",height:e.screenshotHeight+"px"},attrs:{id:"app-container"}})],1)],1)},staticRenderFns:[]}},172:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"editor__box-upload",attrs:{id:e.uploadId}},[e._v("\n  click to upload or drop a file"),o("br"),o("br"),e._v(" "),o("img",{staticClass:"editor__box-img",style:{width:e.imgWidth+"px"},attrs:{src:e.imgUrl}})])},staticRenderFns:[]}},173:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"scene-container"},[o("a-scene",{style:{width:e.screenshotWidth+"px",height:e.screenshotHeight+"px"},attrs:{embedded:""}},[o("a-sky",{attrs:{color:e.color,src:e.backgroundImageSrc,rotation:e.backgroundImageRotation}})],1),e._v(" "),e.cameraControlsVisible?o("div",{staticClass:"camera-controls"},[o("div",{staticClass:"waypoints",attrs:{id:"waypoints"}},e._l(e.waypoints,function(t){return o("button",{staticClass:"btn-waypoint",domProps:{textContent:e._s(t.name)},on:{click:function(o){e.handleWaypointClick(t.id)}}})})),e._v(" "),e._m(0)]):e._e(),e._v(" "),e.logo.showLogo?o("div",{staticClass:"logo",class:{"logo--align-right":e.logo.alignRight},style:{width:e.logo.width+"px"},attrs:{id:"custom-logo"}},[o("img",{staticClass:"logo__img",attrs:{src:e.logo.dataURL}})]):e._e(),e._v(" "),o("div",{staticClass:"screenshot-preview",attrs:{id:"screenshot-preview"}},[e.logo.showLogo?o("div",{staticClass:"logo",style:{width:e.logo.width+"px"},attrs:{id:"custom-logo"}},[o("img",{staticClass:"logo__img",class:{"logo--align-right":e.logo.alignRight},attrs:{src:e.logo.dataURL}})]):e._e(),e._v(" "),o("img",{staticClass:"screenshot-img",attrs:{id:"screenshot-img",src:"#"}})])],1)},staticRenderFns:[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"camera-mode"},[o("div",{staticClass:"btn camera active",attrs:{onclick:"document.querySelector('.waypoints').classList.toggle('hide'), this.classList.toggle('active')"}}),e._v(" "),o("div",{staticClass:"btn bird",attrs:{id:"btn-bird",onclick:"document.querySelector('[camera]').components['tour'].updateViewPoint({position:{y:7}, rotation:{x:-60}}), document.querySelector('#btn-person').classList.remove('active'), this.classList.add('active')"}}),e._v(" "),o("div",{staticClass:"btn person active",attrs:{id:"btn-person",onclick:"document.querySelector('[camera]').components['tour'].updateViewPoint({position:{y:1.6}, rotation:{x:0}}), document.querySelector('#btn-bird').classList.remove('active'), this.classList.add('active')"}})])}]}},174:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"editor__container"},[o("div",{staticClass:"editor__controls"},e._l(e.elements,function(t,n){return t.hide?e._e():o("div",{staticClass:"editor__box",class:t.color},[t.isPreview?e._e():o("div",{staticClass:"editor__box-toggle",class:{closed:!t.isOpen},on:{click:function(e){t.isOpen=!t.isOpen}}}),e._v(" "),o("div",{staticClass:"editor__box-title",class:t.color,on:{click:function(e){t.isOpen=!t.isOpen}}},[e._v(e._s(t.name))]),e._v(" "),e._l(t.ctrl,function(n,i){return t.isOpen&&e.getValue(n.condition)&&!n.hide?o("div",["text"===n.type?o("span",{staticClass:"editor__box-text",domProps:{innerHTML:e._s(n.text)}}):e._e(),e._v(" "),"checkbox"===n.type?o("input",{directives:[{name:"model",rawName:"v-model",value:n.val,expression:"c.val"}],attrs:{type:"checkbox",id:i},domProps:{checked:Array.isArray(n.val)?e._i(n.val,null)>-1:n.val},on:{change:[function(t){var o=n.val,i=t.target,s=!!i.checked;if(Array.isArray(o)){var r=e._i(o,null);i.checked?r<0&&e.$set(n,"val",o.concat([null])):r>-1&&e.$set(n,"val",o.slice(0,r).concat(o.slice(r+1)))}else e.$set(n,"val",s)},function(t){e.runMethod(n.method)}]}}):e._e(),e._v(" "),!n.label||"checkbox"!==n.type&&"input"!==n.type?e._e():o("label",{staticClass:"editor__box-label",attrs:{for:i}},[e._v(e._s(n.label))]),e._v(" "),"input"===n.type?o("input",{directives:[{name:"model",rawName:"v-model",value:n.val,expression:"c.val"}],staticClass:"editor__box-input",attrs:{placeholder:n.placeholder},domProps:{value:n.val},on:{input:[function(t){t.target.composing||e.$set(n,"val",t.target.value)},function(t){e.runMethod(n.method)}]}}):e._e(),e._v(" "),"textarea"===n.type?o("textarea",{directives:[{name:"model",rawName:"v-model",value:n.val,expression:"c.val"}],staticClass:"editor__box-textarea",attrs:{placeholder:n.placeholder},domProps:{value:n.val},on:{input:[function(t){t.target.composing||e.$set(n,"val",t.target.value)},function(t){e.runMethod(n.method)}]}}):e._e(),e._v(" "),"button"===n.type?o("button",{staticClass:"editor__box-button",on:{click:function(t){n.method?e.runMethod(n.method):e.$store.commit(n.mutation)}},model:{value:n.val,callback:function(t){e.$set(n,"val",t)},expression:"c.val"}},[e._v(e._s(n.label))]):e._e(),e._v(" "),"slider"===n.type?o("vue-slider",{staticClass:"editor__box-slider",attrs:{tooltip:"hover",min:n.range[0],max:n.range[1]},on:{input:function(t){e.runMethod(n.method)}},model:{value:n.val,callback:function(t){e.$set(n,"val",t)},expression:"c.val"}}):e._e(),e._v(" "),"color"===n.type?o("div",{staticClass:"editor__box-color-preview",style:{"background-color":n.val.hex},on:{click:function(t){e.showColorPicker=!e.showColorPicker}}},[e._v(e._s(n.val.hex))]):e._e(),e._v(" "),"color"===n.type&&e.showColorPicker?o("chrome-picker",{staticClass:"editor__box-color",on:{input:function(t){e.runMethod(n.method)}},model:{value:n.val,callback:function(t){e.$set(n,"val",t)},expression:"c.val"}}):e._e(),e._v(" "),"upload"===n.type?o("image-upload",{attrs:{"upload-id":i,"img-width":e.getValue(n.width),"img-url":e.getValue(n.src)},on:{upload:e.imageUpload}}):e._e(),e._v(" "),n.error?o("div",{staticClass:"editor__box-error",domProps:{innerHTML:e._s(n.error)}}):e._e()],1):e._e()})],2)}))])},staticRenderFns:[]}},175:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("header",[o("div",{staticClass:"header__logo"}),e._v(" "),o("h1",[o("span",{staticClass:"header__title"},[e._v("3d.io Screenshots")]),o("span",{staticClass:"header__version"},[e._v("beta")])])])}]}},176:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"app__container"},[o("div",{staticClass:"app__wrapper",attrs:{id:"aframe-wrapper"}},[o("div",{staticClass:"app__view",attrs:{id:"aframe-view"}},[o("aframe-scene")],1)])])},staticRenderFns:[]}},48:function(e,t,o){"use strict";o.d(t,"a",function(){return n}),o.d(t,"e",function(){return i}),o.d(t,"g",function(){return s}),o.d(t,"f",function(){return r}),o.d(t,"b",function(){return a}),o.d(t,"c",function(){return c}),o.d(t,"d",function(){return l}),o.d(t,"h",function(){return d});var n="UPDATE_CODE",i="UPDATE_COLOR",s="UPDATE_LOGO",r="UPDATE_IMAGE",a="UPDATE_SCREENSHOT",c="SET_SCENE",l="SET_MODEL_STRUCTURE",d="LOADING_APP"},72:function(e,t,o){function n(e){o(128)}var i=o(7)(o(83),o(171),n,null,null);e.exports=i.exports},73:function(e,t,o){"use strict";var n=o(30),i=o(177),s=o(72),r=o.n(s);n.a.use(i.a),t.a=new i.a({routes:[{path:"/",name:"Creator",component:r.a}]})},74:function(e,t,o){"use strict";var n,i=o(49),s=o.n(i),r=o(30),a=o(13),c=o(79),l=o(48);r.a.use(a.a);var d={screenshotWidth:1024,screenshotHeight:768,color:"#FFFFFF",imageSrc:"https://storage.3d.io/535e624259ee6b0200000484/2017-08-08_15-19-35_C6qRcB/empire_low.jpg",imageRot:"290",logoSrc:"https://raw.githubusercontent.com/archilogic-com/3dio-js/HEAD/3dio-logo.png",logoWidth:80,logoDataURL:null},u={aframeCode:function(e){var t=document.createElement("template");return t.innerHTML=e,t.content}('<a-scene><a-sky color="#6EBAA7"></a-sky></a-scene>'),sceneToLoad:!1,modelStructure:null,color:d.color,screenshotDimensions:{width:d.screenshotWidth,height:d.screenshotHeight},backgroundImage:{src:d.imageSrc,rotation:d.imageRot},logo:{src:d.logoSrc,width:d.logoWidth,showLogo:!0,dataURL:d.logoDataURL,alignRight:!1}},h={aframeCode:function(e){return e.aframeCode},sceneToLoad:function(e){return e.sceneToLoad},modelStructure:function(e){return e.modelStructure},screenshotDimensions:function(e){return e.screenshotDimensions},color:function(e){return e.color},backgroundImage:function(e){return e.backgroundImage},logo:function(e){return e.logo}},g=(n={},s()(n,l.a,function(e,t){console.log("Update Code",e,t),e.aframeCode=t}),s()(n,l.b,function(e,t){console.log("Update Screenshot",e,t),e.screenshotDimensions=t}),s()(n,l.c,function(e,t){console.log("Setting Scene",e,t),e.sceneToLoad=t}),s()(n,l.d,function(e,t){console.log("Setting Model Structure",e,t),e.modelStructure=t}),s()(n,l.e,function(e,t){console.log("Updating Color",e,t),e.color=t}),s()(n,l.f,function(e,t){console.log("Updating Image",e,t),e.backgroundImage=t}),s()(n,l.g,function(e,t){console.log("Updating Logo",e,t),e.logo=t}),n);t.a=new a.a.Store({getters:h,mutations:g,state:u,modules:{apps:c.a},strict:!1})},75:function(e,t,o){function n(e){o(127)}var i=o(7)(o(80),o(170),n,null,null);e.exports=i.exports},77:function(e,t){e.exports={scene:{name:"Import Archilogic scene",isOpen:!0,color:"ocean",ctrl:{"scn-inpt":{type:"input",placeholder:"enter a scene id or url",error:!1,val:null,method:"pushScene"}}},logo:{name:"Custom logo",isOpen:!0,ctrl:{"lg-ckbx":{label:"Show Logo",id:"show-logo",type:"checkbox",val:!0,method:"switchLogo"},"lg-inpt":{condition:"elements.logo.ctrl.lg-ckbx.val",type:"input",placeholder:"enter a url",val:"https://raw.githubusercontent.com/archilogic-com/3dio-js/HEAD/3dio-logo.png",method:"pushLogo"},"lg-text":{condition:"elements.logo.ctrl.lg-ckbx.val",text:"Use ideally a png with transparency - not wider than 200px",type:"text"},"lg-upload":{condition:"elements.logo.ctrl.lg-ckbx.val",type:"upload",width:"elements.logo.ctrl.lg-width.val",src:"elements.logo.ctrl.lg-inpt.val"},"lg-img":{condition:"elements.logo.ctrl.lg-ckbx.val",type:"image",width:"elements.logo.ctrl.lg-width.val",src:"elements.logo.ctrl.lg-inpt.val"},"lg-width":{condition:"elements.logo.ctrl.lg-ckbx.val",label:"Size",type:"slider",range:[50,250],val:80,method:"pushLogo"},"lg-align":{condition:"elements.logo.ctrl.lg-ckbx.val",label:"Align right",type:"checkbox",val:!1,method:"alignLogo"}}},sky:{name:"Background",isOpen:!0,ctrl:{"bkgrnd-ckbx-clr":{label:"Use color",id:"bkgrnd-color",type:"checkbox",method:"pushColor",val:!1},"bkgrnd-clr":{condition:"elements.sky.ctrl.bkgrnd-ckbx-clr.val",type:"color",val:{hex:"#FFFFFF"},method:"pushColor"},"bkgrnd-ckbx-img":{label:"Use Image",id:"bkgrnd-img",type:"checkbox",method:"pushSkyImg",val:!0},"bkgrnd-text":{condition:"elements.sky.ctrl.bkgrnd-ckbx-img.val",text:'Best use an <a href="https://www.google.ch/search?biw=1803&bih=804&q=equirectangular+image" target="_blank">equirectangluar image</a> - not wider than 4096px',type:"text"},"bkgrnd-upload":{condition:"elements.sky.ctrl.bkgrnd-ckbx-img.val",type:"upload",src:"elements.sky.ctrl.bkgrnd-inpt.val"},"bkgrnd-rot":{condition:"elements.sky.ctrl.bkgrnd-ckbx-img.val",label:"Rotation",type:"slider",range:[0,360],val:290,method:"pushSkyImg"},"bkgrnd-inpt":{condition:"elements.sky.ctrl.bkgrnd-ckbx-img.val",type:"input",placeholder:"enter your file key",val:"https://storage.3d.io/535e624259ee6b0200000484/2017-08-08_15-19-35_C6qRcB/empire_low.jpg",method:"pushSkyImg"}}},screenshot:{name:"Screenshot",isOpen:!0,ctrl:{"screenshot-width":{label:"Width",id:"screenshot-width",type:"input",method:"changeScreenshotDimensions",val:1024},"screenshot-height":{label:"Height",id:"screenshot-height",type:"input",method:"changeScreenshotDimensions",val:768},"screenshot-btn":{label:"Take Screenshot",id:"screenshot-btn",type:"button",method:"takeScreenshot"}}}}},78:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(30),i=o(13),s=o(75),r=o.n(s),a=o(76),c=(o.n(a),o(74)),l=o(73);o.i(a.sync)(c.a,l.a);n.a.use(i.a),n.a.config.productionTip=!1,new n.a({el:"#app",store:c.a,router:l.a,template:"<App/>",components:{App:r.a}})},79:function(e,t,o){"use strict";var n=o(49),i=o.n(n),s=o(48),r={isLoadingApp:!1},a={loadApp:function(e){var t=e.commit,o=e.state,n=e.rootState;if(console.log("loading app",t,o,n),o.isLoadingApp)return void console.warn("already loading");t("LOADING_APP",!0);var i=null;!function(e,t){var o=new XMLHttpRequest;o.onload=function(){var e=new FileReader;e.onloadend=function(){t(e.result)},e.readAsDataURL(o.response)},o.open("GET",e),o.responseType="blob",o.send()}("https://cors-anywhere.herokuapp.com/https://raw.githubusercontent.com/archilogic-com/3dio-js/HEAD/3dio-logo.png",function(e){i=e,t("UPDATE_LOGO",{src:"https://raw.githubusercontent.com/archilogic-com/3dio-js/HEAD/3dio-logo.png",width:80,showLogo:!0,dataURL:i,alignRight:!1}),t("LOADING_APP",!1)})}},c=i()({},s.h,function(e,t){console.log("Loading App",e,t),e.isLoadingApp=t});t.a={state:r,actions:a,mutations:c}},80:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(167),i=o.n(n),s=o(72),r=o.n(s);t.default={name:"app",components:{"header-bar":i.a,creator:r.a},methods:{initApp:function(){this.$store.dispatch("loadApp")}},mounted:function(){this.initApp()}}},81:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(91),i=o.n(n),s=o(31),r=o.n(s),a=o(13),c=o(146),l=o.n(c),d=o(133),u=o.n(d);t.default={name:"aframe-scene",data:function(){return{cameraControlsVisible:!1,waypoints:[],preview:!1}},watch:{aframeCode:function(){this.pushScene()}},computed:r()({},o.i(a.b)({aframeCode:"aframeCode",screenshotDimensions:"screenshotDimensions",color:"color",backgroundImage:"backgroundImage",logo:"logo"}),{screenshotWidth:function(){return this.screenshotDimensions.width},screenshotHeight:function(){return this.screenshotDimensions.height},backgroundImageSrc:function(){return this.backgroundImage.src},backgroundImageRotation:function(){return"0 "+this.backgroundImage.rotation+" 0"}}),mounted:function(){this.$root.$on("takeScreenshot",this.takeScreenshot),console.log(i()(this.logo.image))},methods:{pushScene:function(){var e=this,t=this.aframeCode;io3d.scene.getAframeElements(t).then(function(t){e.cameraControlsVisible=!0,t[0].classList.add("io3d-scene");var o=e.$el.querySelector('[class="io3d-scene"]'),n=e.$el.querySelector("[camera]")||e.querySelector("a-camera");o&&o.parentNode.removeChild(o),e.$el.querySelector("a-scene").appendChild(t[0]),n&&n.parentNode.removeChild(n),e.$el.querySelector("a-scene").appendChild(t[1]),e.updateWaypoints()})},updateWaypoints:function(){var e=this;this.waypoints=[];var t=this.$el.querySelectorAll("[tour-waypoint]"),o=null;t.forEach(function(t,n){console.log(t.getAttribute("tour-waypoint"));var i={name:t.getAttribute("tour-waypoint"),id:t.getAttribute("io3d-uuid")};e.waypoints.push(i),0===n&&(o=t.getAttribute("io3d-uuid"))}),window.setTimeout(function(){e.handleWaypointClick(o)},500)},handleWaypointClick:function(e){return document.querySelector("[camera]").components.tour.goTo(e)},takeScreenshot:function(){var e=document.querySelector("a-scene").components.screenshot;console.log("Taking Screenshot 1",e.data.width,this.screenshotDimensions),e.data.width=this.screenshotWidth,e.data.height=this.screenshotHeight;var t=e.getCanvas("perspective"),o=t.toDataURL("image/png"),n=document.getElementById("screenshot-preview");document.getElementById("screenshot-img").src=o,console.log("CONTAINER",n),l()(n).then(function(e){e.toBlob(function(e){u.a.saveAs(e,"myScreenshot.png")})})}}}},82:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(165),i=o.n(n);t.default={name:"aframe-view",components:{"aframe-scene":i.a}}},83:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(31),i=o.n(n),s=o(166),r=o.n(s),a=o(169),c=o.n(a),l=o(13);t.default={name:"creator",data:function(){return{innerWidth:null}},computed:i()({},o.i(l.b)({screenshotDimensions:"screenshotDimensions"}),{lastColumn:function(){return this.innerWidth-350},columnMode:function(){var e=this,t="";return["v"].forEach(function(o,n){e.columns[n].isVisible&&(t+=o)}),""===t?"a":t},screenshotWidth:function(){return this.screenshotDimensions.width},screenshotHeight:function(){return this.screenshotDimensions.height}}),components:{"aframe-view":r.a,"visual-editor":c.a},methods:{handleResize:function(){this.innerWidth=window.innerWidth}},created:function(){this.handleResize(),window.addEventListener("resize",this.handleResize,!0)}}},84:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"header-bar"}},85:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"image-upload",props:["imgUrl","imgWidth","uploadId"],data:function(){return{initialPos:null,initialScreenPos:null}},mounted:function(){var e=this;io3d.utils.ui.fileDrop({elementId:this.uploadId,upload:!0,dragOverCssClass:"file-drop-box-dragover",onInput:function(t){e.$emit("upload",{url:t[0].url,target:e.uploadId})}})}}},86:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(31),i=o.n(n),s=o(13),r=o(164),a=(o.n(r),o(178)),c=o.n(a),l=o(160),d=(o.n(l),o(77)),u=o.n(d),h=o(168),g=o.n(h);t.default={name:"visual-editor",data:function(){return{elements:u.a,showColorPicker:!1}},components:{"chrome-picker":r.Chrome,"image-upload":g.a,"vue-slider":c.a},computed:i()({},o.i(s.b)({aframeCode:"aframeCode",sceneToLoad:"sceneToLoad",modelStructure:"modelStructure",shortId:"shortId",screenshotDimensions:"screenshotDimensions",logo:"logo"})),methods:{getValue:function(e){var t=!0;return e&&(t=e.split(".").reduce(function(e,t){return e[t]},this)),t},runMethod:o.i(l.debounce)(function(e){e&&this[e]&&this[e]()},300),getEl:function(e,t){var o=void 0;return o=document.createElement("div"),o.innerHTML=this.aframeCode,t?o.querySelectorAll(e):o.querySelector(e)},pushScene:function(){this.elements.scene.ctrl["scn-inpt"].error=!1;var e=this.elements.scene.ctrl["scn-inpt"].val,t=/[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}/i;if(!t.test(e))return void(this.elements.scene.ctrl["scn-inpt"].error="no valid uuid");var o=t.exec(e)[0];this.$store.commit("UPDATE_CODE",o)},pushColor:function(){this.elements.sky.ctrl["bkgrnd-ckbx-img"].val=!1;var e=this.elements.sky.ctrl["bkgrnd-clr"].val.hex;this.$store.commit("UPDATE_COLOR",e)},pushSkyImg:function(){this.elements.sky.ctrl["bkgrnd-ckbx-clr"].val=!1;var e=this.elements.sky.ctrl["bkgrnd-inpt"].val,t=this.elements.sky.ctrl["bkgrnd-rot"].val;this.$store.commit("UPDATE_IMAGE",{src:e,rotation:t})},alignLogo:function(){var e=this.elements.logo.ctrl["lg-align"].val,t={src:this.logo.src,width:this.logo.width,showLogo:this.logo.showLogo,alignRight:e,dataURL:this.logo.dataURL};this.$store.commit("UPDATE_LOGO",t)},switchLogo:function(){var e={src:this.logo.src,width:this.logo.width,showLogo:!this.logo.showLogo,alignRight:this.logo.alignRight,dataURL:this.logo.dataURL};this.$store.commit("UPDATE_LOGO",e)},pushLogo:function(){var e=this,t=this.elements.logo.ctrl["lg-inpt"].val,o=this.elements.logo.ctrl["lg-width"].val,n=null,i=t;!function(e,t){var o=new XMLHttpRequest;o.onload=function(){var e=new FileReader;e.onloadend=function(){t(e.result)},e.readAsDataURL(o.response)},o.open("GET",e),o.responseType="blob",o.send()}("https://cors-anywhere.herokuapp.com/"+i,function(i){n=i,e.$store.commit("UPDATE_LOGO",{src:t,width:o,showLogo:!0,dataURL:n})})},imageUpload:function(e){"lg-upload"===e.target?(this.elements.logo.ctrl["lg-inpt"].val=e.url,this.pushLogo()):"bkgrnd-upload"===e.target&&(this.elements.sky.ctrl["bkgrnd-inpt"].val=e.url,this.pushSkyImg())},takeScreenshot:function(){this.$root.$emit("takeScreenshot")},changeScreenshotDimensions:function(){var e=this.elements.screenshot.ctrl["screenshot-width"].val,t=this.elements.screenshot.ctrl["screenshot-height"].val,o={width:e,height:t};this.$store.commit("UPDATE_SCREENSHOT",o),window.setTimeout(function(){window.dispatchEvent(new Event("resize"))},500)}}}}},[78]);
//# sourceMappingURL=app.ff16244fa5e2306977a9.js.map
<template>
  <div class="editor__container">
    <div class="editor__controls">
      <div v-if="!el.hide" class="editor__box" :class="el.color" v-for="(el, index) in elements">
        <div v-if="!el.isPreview" class="editor__box-toggle" :class="{'closed': !el.isOpen}" @click="el.isOpen = !el.isOpen"></div>
        <div class="editor__box-title" :class="el.color" @click="el.isOpen = !el.isOpen">{{el.name}}</div>
        <div v-if="el.isOpen && getValue(c.condition) && !c.hide" v-for="(c, key) in el.ctrl">
          <span v-if="c.type === 'text'" class="editor__box-text" v-html="c.text"></span>
          <input v-if="c.type === 'checkbox'" type="checkbox" :id="key" v-model="c.val" @change="runMethod(c.method)">
          <label v-if="c.label && (c.type === 'checkbox' || c.type === 'input')" :for="key" class="editor__box-label">{{c.label}}</label>
          <input v-if="c.type === 'input'" class="editor__box-input" v-model="c.val" :placeholder="c.placeholder" @input="runMethod(c.method)">
          <textarea v-if="c.type === 'textarea'" class="editor__box-textarea" v-model="c.val" :placeholder="c.placeholder" @input="runMethod(c.method)"></textarea>
          <button v-if="c.type === 'button'" class="editor__box-button" v-model="c.val" @click="(c.method ? runMethod(c.method) : $store.commit(c.mutation))">{{c.label}}</button>
          <vue-slider v-if="c.type === 'slider'"
                      class="editor__box-slider"
                      v-model="c.val"
                      tooltip="hover"
                      :min="c.range[0]"
                      :max="c.range[1]"
                      @input="runMethod(c.method)">
          </vue-slider>
          <div v-if="c.type === 'color'" class="editor__box-color-preview" :style="{'background-color': c.val.hex}" @click="showColorPicker = !showColorPicker">{{c.val.hex}}</div>
          <chrome-picker v-if="c.type === 'color' && showColorPicker" class="editor__box-color" v-model="c.val" @input="runMethod(c.method)"></chrome-picker>
          <image-upload v-if="c.type === 'upload'"
                        :upload-id="key"
                        :img-width="getValue(c.width)"
                        :img-url="getValue(c.src)"
                        v-on:upload="imageUpload">
          </image-upload>
          <div v-if="c.error" class="editor__box-error" v-html="c.error"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { Chrome } from 'vue-color'
import vueSlider from 'vue-slider-component'
import { debounce } from 'lodash'
import controlELements from '../js/control-elements'
import ImageUpload from './image-upload'
import prettifyHtml from '../js/prettify-html'
import htmlSnippets from '../js/html-code-snippets'
import io3d from '3dio'
import html2canvas from 'html2canvas'
import fileSaver from 'file-saver'

export default {
  name: 'visual-editor',
  data () {
    return {
      elements: controlELements,
      showColorPicker: false
    }
  },
  components: {
    'chrome-picker': Chrome,
    'image-upload': ImageUpload,
    'vue-slider': vueSlider
  },
  watch: {
    'aframeCode': function (c) {
      // prevent initial loading if code is empty
      if (!c || c.trim() === '') return
      this.getSky()
      this.getLogo()
      this.getApp()
    }
  },
  computed: {
    ...mapGetters({
      aframeCode: 'aframeCode',
      sceneToLoad: 'sceneToLoad',
      modelStructure: 'modelStructure',
      shortId: 'shortId'
    })
  },
  methods: {
    getValue: function (c) {
      let prop = true
      if (c) {
        prop = c.split('.').reduce((o, i) => o[i], this)
      }
      return prop
    },
    runMethod: debounce(function (callback) {
      if (callback && this[callback]) this[callback]()
    }, 300),
    getEl: function (key, list) {
      let el, target
      el = document.createElement('div')
      el.innerHTML = this.aframeCode
      if (list) target = el.querySelectorAll(key)
      else target = el.querySelector(key)

      return target
    },
    pushScene: function () {
      this.elements.scene.ctrl['scn-inpt'].error = false
      const sceneInput = this.elements.scene.ctrl['scn-inpt'].val
      var checkUuid = /[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}/i
      if (!checkUuid.test(sceneInput)) {
        this.elements.scene.ctrl['scn-inpt'].error = 'no valid uuid'
        return
      }
      // extract sceneId from url or sceneId string directly
      // scene id to for testing:
      // 5dc58829-ecd3-4b33-bdaf-f798b7edecd4
      const sceneId = checkUuid.exec(sceneInput)[0]
      io3d.scene.getAframeElements(sceneId)
        .then(result => {
          // we'll get two elements: plan + camera ( including waypoints )
          // add class for later identification
          result[0].classList.add('io3d-scene')
          // check for previously added elements
          const prevScene = this.getEl('[class="io3d-scene"]')
          const prevCamera = this.getEl('[camera]') || this.getEl('a-camera')
          // create string with correct indentation
          var newSceneElements = prettifyHtml(result[0].outerHTML, 6)
          var newCameraElements = prettifyHtml(result[1].outerHTML, 6)

          const el = this.getEl('app-3dio') || this.getEl('io3d-app')
          const oldIdentifier = el.outerHTML
          const newIdentifier = oldIdentifier.replace('app-3dio', 'io3d-app').replace(/scene-id=".*"/g, `scene-id="${sceneId}"`)
          let newCode = this.aframeCode.replace(oldIdentifier, newIdentifier)

          // replace existing scene elements
          if (prevScene) newCode = newCode.replace(prevScene.outerHTML, newSceneElements)
          // add new scene elements right before closing a-scene
          else newCode = newCode.replace('</a-scene>', '  ' + newSceneElements + '\n    </a-scene>')

          // replace existing camera elements
          if (prevCamera) newCode = newCode.replace(prevCamera.outerHTML, newCameraElements)
          // add new scene elements right before closing a-scene
          else newCode = newCode.replace('</a-scene>', '  ' + newCameraElements + '\n    </a-scene>')

          this.$store.commit('UPDATE_CODE', newCode)
          this.updateWaypoints()
        })
    },
    updateWaypoints: function () {
      const waypoints = this.getEl('[tour-waypoint]', true)
      const waypointParent = this.getEl('.waypoints')
      const existingWaypoints = this.getEl('.btn-waypoint', true)
      const hasAnimationLib = /https:\/\/unpkg\.com\/aframe-animation-component\/dist\/aframe-animation-component\.min\.js/.test(this.aframeCode)

      let newWaypoints = ''
      let newCode = this.aframeCode
      existingWaypoints.forEach(el => {
        let str = el.outerHTML
        newCode = newCode.replace(str, '')
      })
      // replace multiple empty lines
      newCode = newCode.replace(/^\s*\n/gm, '\n')
      waypoints.forEach(el => {
        let name = el.getAttribute('tour-waypoint')
        let waypointId = el.getAttribute('io3d-uuid')
        newWaypoints += '\n' + ' '.repeat(8) + '<button class="btn-waypoint" onclick="document.querySelector(\'[camera]\').components[\'tour\'].goTo(this.dataset.waypointId)" data-waypoint-id="' + waypointId + '">' + name + '</button>'
      })
      if (waypointParent) {
        // blurb
        newCode = newCode.replace('<div class="waypoints">', '<div class="waypoints">' + newWaypoints)
        if (!hasAnimationLib) {
          /* eslint-disable no-useless-escape */
          var animLib = '    <script src="https://unpkg.com/aframe-animation-component/dist/aframe-animation-component.min.js">\<\/script>\n  </head>'
          newCode = newCode.replace('  </head>', animLib)
        }
        this.$store.commit('UPDATE_CODE', newCode)
      }
    },
    getApp: function () {
      // legacy support
      const el = this.getEl('app-3dio') || this.getEl('io3d-app')
      if (!el) return
      const shortId = el.id
      const sceneId = el.getAttribute('scene-id')
      if (this.$route.params.shortCode !== shortId) {
        console.warn(`app id ${shortId} does not match route ${this.$route.params.shortCode}`)
        // TODO: updated shortId in code
      }
      this.elements.scene.ctrl['scn-inpt'].val = sceneId
    },
    getSky: function () {
      const el = this.getEl('a-sky')
      if (!el) return
      const skyColor = el.getAttribute('color')
      const skySrc = el.getAttribute('src')
      const rotation = el.getAttribute('rotation')
      if (skyColor) {
        this.elements.sky.ctrl['bkgrnd-clr'].val = {
          hex: skyColor
        }
        this.elements.sky.ctrl['bkgrnd-ckbx-img'].val = false
        this.elements.sky.ctrl['bkgrnd-ckbx-clr'].val = true
      } else if (skySrc) {
        this.elements.sky.ctrl['bkgrnd-inpt'].val = skySrc
        this.elements.sky.ctrl['bkgrnd-ckbx-img'].val = true
        this.elements.sky.ctrl['bkgrnd-ckbx-clr'].val = false
        // rotation is a string - that's why we need to parse it
        this.elements.sky.ctrl['bkgrnd-rot'].val = rotation ? rotation.split(' ')[1] : 0
      }
    },
    pushColor: function () {
      this.elements.sky.ctrl['bkgrnd-ckbx-img'].val = false
      const el = this.getEl('a-sky')
      const newColor = this.elements.sky.ctrl['bkgrnd-clr'].val.hex
      const newCode = this.aframeCode.replace(el.outerHTML, '<a-sky color="' + newColor + '"></a-sky>')
      this.$store.commit('UPDATE_CODE', newCode)
    },
    pushSkyImg: function () {
      this.elements.sky.ctrl['bkgrnd-ckbx-clr'].val = false
      const el = this.getEl('a-sky')
      const newImg = this.elements.sky.ctrl['bkgrnd-inpt'].val
      const rot = this.elements.sky.ctrl['bkgrnd-rot'].val
      const newCode = this.aframeCode.replace(el.outerHTML, `<a-sky src="${newImg}" rotation="0 ${rot} 0"></a-sky>`)
      this.$store.commit('UPDATE_CODE', newCode)
    },
    getLogo: function () {
      const imgEl = this.getEl('#custom-logo img')
      const linkEl = this.getEl('#custom-logo a')
      if (!imgEl) return
      this.elements.logo.ctrl['lg-inpt'].val = imgEl.src
      if (linkEl) this.elements.logo.ctrl['lg-link'].val = /href="\S*"/.test(linkEl.outerHTML) ? /href="(\S*)"/.exec(linkEl.outerHTML)[1] : null
    },
    switchLogo: function () {
      const showLogo = this.elements.logo.ctrl['lg-ckbx'].val
      const img = this.getEl('#custom-logo img')
      if (!showLogo) {
        if (!img) return
        const newCode = this.aframeCode.replace(img.src, '')
        this.$store.commit('UPDATE_CODE', newCode)
      } else {
        let newImg = this.elements.logo.ctrl['lg-inpt'].val = 'https://archilogic-com.github.io/ui-style-guide/3d-io-logo/3d-io-logo-small.svg'
        const newCode = this.aframeCode.replace('<img src="">', '<img src="' + newImg + '">')
        this.$store.commit('UPDATE_CODE', newCode)
      }
    },
    pushLogo: function () {
      const newLogo = this.elements.logo.ctrl['lg-inpt'].val
      const logoSize = this.elements.logo.ctrl['lg-width'].val
      const logoEl = this.getEl('#custom-logo')
      const imgEl = this.getEl('#custom-logo img')
      const linkEl = this.getEl('#custom-logo a')
      let newCode = this.aframeCode
      if (!logoEl || !imgEl || !linkEl) {
        if (logoEl) {
          newCode = newCode.replace(logoEl.outerHTML, htmlSnippets.logo)
          this.$store.commit('UPDATE_CODE', newCode)
          this.pushLogo()
          return
        }
      }
      // check if link contains protokoll
      const myLink = this.elements.logo.ctrl['lg-link'].val
      if (myLink && myLink !== '') {
        this.elements.logo.ctrl['lg-link'].val = myLink.trim()
        if (!/^http.*:\/\//.test(myLink)) this.elements.logo.ctrl['lg-link'].val = 'http://' + this.elements.logo.ctrl['lg-link'].val
      }
      let currentLink
      if (!imgEl) return
      // extract link from href attribute - doing linkEl.href works unreliably
      if (linkEl) currentLink = /href="\S*"/.test(linkEl.outerHTML) && /href="\S*"/.exec(linkEl.outerHTML)[0]
      // adapt logo size
      newCode = newCode.replace(/<div id="custom-logo".*>/g, `<div id="custom-logo" style="width:${logoSize}px">`)
      // replace logo src
      newCode = newCode.replace(imgEl.src, newLogo)
      // set new url link for log
      // console.log('push logo', `${currentLink}`, `href="${this.elements.logo.ctrl['lg-link'].val}"`, linkEl.outerHTML)
      const logoLink = this.elements.logo.ctrl['lg-link'].val
      if (currentLink) {
        newCode = newCode.replace(`<a ${currentLink}`, logoLink ? `<a href="${logoLink}"` : '<a')
      } else {
        newCode = newCode.replace(linkEl.outerHTML, linkEl.outerHTML.replace('<a', logoLink ? `<a href="${logoLink}"` : '<a'))
      }
      // console.log(newCode)
      this.$store.commit('UPDATE_CODE', newCode)
    },
    imageUpload: function (el) {
      if (el.target === 'lg-upload') {
        this.elements.logo.ctrl['lg-inpt'].val = el.url
        this.pushLogo()
      } else if (el.target === 'bkgrnd-upload') {
        this.elements.sky.ctrl['bkgrnd-inpt'].val = el.url
        this.pushSkyImg()
      }
    },
    takeScreenshot: function () {
      html2canvas(document.querySelector('#app-container')).then(canvas => {
        canvas.toBlob(function (blob) {
          fileSaver.saveAs(blob, 'myScreenshot.png')
        })
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  @import '../styles/config.less';
  .editor {
     &__container {
       height: ~"calc(100vh - @{headerSmall})";
       position: relative;
       display: flex;
       flex-direction: column;
       justify-content: space-between;
       background: @white-0;
       // color: @grey-70;
    }
    &__controls {
      max-height: ~"calc(100vh - @{headerSmall})";
      overflow: auto;
    }
    &__box {
      position: relative;
      padding: 15px;
      background: @white-0;
      text-align: left;
      border-bottom: solid 1px @white-4;
      &-title {
        cursor: pointer;
        font-weight: bold;
        margin-bottom: 10px;
        &:hover {
          color: @grey-90;
        }
      }
      &:hover {
        box-shadow: 0 0 15px 0 rgba(0,0,0,0.1);
        z-index: 10;
      }
      &-input, &-textarea {
        width: 100%;
        height: 30px;
        margin: 10px 0;
        font-size: 14px;
        padding: 5px 8px;
        border-radius: 3px;
        color: @grey-70;
        border: solid 1px @grey-6;
        background: @white-2;
        outline: none;
      }
      &-textarea {
        height: 80px;
        line-height: 20px;
        resize: none;
      }
      &-label {
        margin-top: 5px;
        font-size: 15px;
        min-width: 100px;
        display: inline-block;
      }
      &-img {
        width: 100%;
      }
      button {
        padding: 4px 10px;
        font-size: 15px;
        margin-top: 10px;
        border-radius: 3px;
        background: @grey-6;
        border: 1px solid @grey-20;
        cursor: pointer;
        .transition(background ease 0.3s);
        &:hover {
          background: @grey-10;
        }
      }
      &-toggle {
        position: absolute;
        top: 18px;
        right: 14px;
        background:
          url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='45' version='1.1'><polyline fill='rgb(50,55,60)' points='0,10 40,10 20,45'/></svg>") left top / 11px auto no-repeat;
        height: 11px;
        width: 11px;
        transform-origin: center;
        .transition(all .3s ease);
        opacity: 0.4;
        &.closed {
          transform: rotate(180deg);
        }
        &:hover {
          cursor: pointer;
          opacity: 0.8;
        }
      }
      &-color-preview {
        margin: 5px 0;
        padding: 5px 10px;
        width: 80px;
        cursor: pointer;
        font-size: 14px;
        border-radius: 3px;
        box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.1);
        &:hover {
          box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.2);
        }
      }
      &-color {
        width: 100%;
        max-width: 255px;
        margin: 10px 0;
      }
      &-upload {
        position: relative;
        width: 100%;
        min-height: 120px;
        font-size: 14px;
        color: @grey-60;
        padding: 10px;
        margin: 5px 0;
        border-radius: 3px;
        border: solid 1px @grey-6;
        background-color: @white-2;
        .transition(background-color ease 0.3s);
        &:hover {
          background-color: @white-3;
          border: 1px solid @grey-10;
        }
      }
      &-text {
        font-size: 14px;
      }
      &-error {
        font-size: 12px;
        color: red;
      }
    }
  }
</style>
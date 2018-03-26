import Vue from 'vue'
import Vuex from 'vuex'
import apps from './modules/apps'
import * as types from './mutation-types'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const DEFAULT_VALUES = {
  screenshotWidth: 1024,
  screenshotHeight: 768,
  color: '#FFFFFF',
  imageSrc: 'https://storage.3d.io/535e624259ee6b0200000484/2017-08-08_15-19-35_C6qRcB/empire_low.jpg',
  imageRot: '290',
  logoSrc: 'https://archilogic-com.github.io/ui-style-guide/3d-io-logo/3d-io-logo-small.svg',
  logoWidth: 80,
  logoUrl: 'https://3d.io'
}

// initial state
const state = {
  aframeCode: htmlToElements('<a-scene><a-sky color="#6EBAA7"></a-sky></a-scene>'),
  sceneToLoad: false,
  modelStructure: null,
  color: DEFAULT_VALUES.color,
  screenshotDimensions: {
    width: DEFAULT_VALUES.screenshotWidth,
    height: DEFAULT_VALUES.screenshotHeight
  },
  backgroundImage: {
    src: DEFAULT_VALUES.imageSrc,
    rotation: DEFAULT_VALUES.imageRot
  },
  logo: {
    src: DEFAULT_VALUES.logoSrc,
    width: DEFAULT_VALUES.logoWidth,
    url: DEFAULT_VALUES.logoUrl
  }
}

function htmlToElements (html) {
  var template = document.createElement('template')
  template.innerHTML = html
  return template.content
}

// getters
const getters = {
  aframeCode: state => state.aframeCode,
  sceneToLoad: state => state.sceneToLoad,
  modelStructure: state => state.modelStructure,
  screenshotDimensions: state => state.screenshotDimensions,
  color: state => state.color,
  backgroundImage: state => state.backgroundImage,
  logo: state => state.logo
}

// mutations
const mutations = {
  [types.UPDATE_CODE] (state, data) {
    console.log('Update Code', state, data)
    state.aframeCode = data
  },
  [types.UPDATE_SCREENSHOT] (state, data) {
    console.log('Update Screenshot', state, data)
    state.screenshotDimensions = data
  },
  [types.SET_SCENE] (state, id) {
    console.log('Setting Scene', state, id)
    state.sceneToLoad = id
  },
  [types.SET_MODEL_STRUCTURE] (state, data) {
    console.log('Setting Model Structure', state, data)
    state.modelStructure = data
  },
  [types.UPDATE_COLOR] (state, data) {
    console.log('Updating Color', state, data)
    state.color = data
  },
  [types.UPDATE_IMAGE] (state, data) {
    console.log('Updating Image', state, data)
    state.backgroundImage = data
  },
  [types.UPDATE_LOGO] (state, data) {
    console.log('Updating Logo', state, data)
    state.logo = data
  }
}

export default new Vuex.Store({
  getters,
  mutations,
  state,
  modules: {
    apps
  },
  strict: debug
})


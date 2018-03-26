import Vue from 'vue'
import Vuex from 'vuex'
import apps from './modules/apps'
import * as types from './mutation-types'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const DEFAULT_VALUES = {
  screenshotWidth: 1024,
  screenshotHeight: 768,
  color: '#6EBAA7'
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
  color: state => state.color
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


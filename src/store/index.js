import Vue from 'vue'
import Vuex from 'vuex'
import apps from './modules/apps'
import * as types from './mutation-types'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

// initial state
const state = {
  aframeCode: `
    <a-scene>
      <a-sky color="#6EBAA7"></a-sky>
    </a-scene>
  `,
  sceneToLoad: false,
  modelStructure: null,
  screenshotDimensions: {
    width: null,
    height: null
  }
}

// getters
const getters = {
  aframeCode: state => state.aframeCode,
  sceneToLoad: state => state.sceneToLoad,
  modelStructure: state => state.modelStructure,
  screenshotDimensions: state => state.screenshotDimensions
}

// mutations
const mutations = {
  [types.UPDATE_CODE] (state, data) {
    state.aframeCode = data
  },
  [types.UPDATE_SCREENSHOT] (state, data) {
    state.screenshotDimensions = data
  },
  [types.SET_SCENE] (state, id) {
    state.sceneToLoad = id
  },
  [types.SET_MODEL_STRUCTURE] (state, data) {
    state.modelStructure = data
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


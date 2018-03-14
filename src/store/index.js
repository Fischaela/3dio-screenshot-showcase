import Vue from 'vue'
import Vuex from 'vuex'
import apps from './modules/apps'
import * as types from './mutation-types'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

// initial state
const state = {
  aframeCode: '',
  sceneToLoad: false,
  modelStructure: null
}

// getters
const getters = {
  aframeCode: state => state.aframeCode,
  sceneToLoad: state => state.sceneToLoad,
  modelStructure: state => state.modelStructure
}

// mutations
const mutations = {
  [types.UPDATE_CODE] (state, data) {
    state.aframeCode = data
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


import Vue from 'vue'
import Vuex from 'vuex'
import apps from './modules/apps'
import * as types from './mutation-types'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

// initial state
const state = {
  aframeCode: '',
  unsavedChanges: false,
  showUserPopup: false,
  showScenePopup: false,
  sceneToLoad: false,
  modelStructure: null,
  isEmbedded: true
}

// getters
const getters = {
  aframeCode: state => state.aframeCode,
  unsavedChanges: state => state.unsavedChanges,
  showUserPopup: state => state.showUserPopup,
  showScenePopup: state => state.showScenePopup,
  sceneToLoad: state => state.sceneToLoad,
  modelStructure: state => state.modelStructure,
  isEmbedded: state => state.isEmbedded
}

// mutations
const mutations = {
  [types.UPDATE_CODE] (state, data) {
    state.aframeCode = data
  },
  [types.UNSAVED_CHANGES] (state, data) {
    state.unsavedChanges = data
  },
  [types.TOGGLE_USER_MENU] (state) {
    state.showUserPopup = !state.showUserPopup
  },
  [types.TOGGLE_SCENE_POPUP] (state) {
    state.showScenePopup = !state.showScenePopup
  },
  [types.SET_SCENE] (state, id) {
    state.sceneToLoad = id
  },
  [types.SET_MODEL_STRUCTURE] (state, data) {
    state.modelStructure = data
  },
  [types.SET_EMBEDDED] (state, data) {
    state.isEmbedded = data
  }
}

// actions
const actions = {
  toggleUserMenuClickout ({commit, state}, evt) {
    const menuToggle = evt.target.getAttribute('data-menu-toggle')
    if (state.showUserPopup && menuToggle === 'user') return
    else commit(types.TOGGLE_USER_MENU, false)
  }
}

export default new Vuex.Store({
  actions,
  getters,
  mutations,
  state,
  modules: {
    apps
  },
  strict: debug
})


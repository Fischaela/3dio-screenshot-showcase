import * as types from '../mutation-types'
import templates from '../../js/app-templates'
import Api from '../../js/api'
import router from '../../router/index'

// initial state
const state = {
  isLoadingApp: null,
  appTitle: null,
  shortId: '',
  isTemplate: false
}

// getters
const getters = {
  isTemplate: state => state.isTemplate,
  shortId: state => state.shortId,
  appTitle: state => state.appTitle
}

// actions
const actions = {
  // load specific app
  loadApp ({commit, state, rootState}, shortCode) {
    console.log('loading app', commit, state, rootState, shortCode)
    if (state.isLoadingApp === shortCode) {
      console.warn('already loading')
      return
    }
    commit('LOADING_APP', shortCode)
    Api.getDirectory(shortCode).then(dir => {
      // determine whether we are loading a template
      console.log('loading app', shortCode, 'is Template:', templates.indexOf(shortCode) > -1)
      let isTemplate = templates.indexOf(shortCode) > -1
      // treat files from other users as templates
      commit('SET_TEMPLATE', isTemplate)
      return Api.readFromDirectory(dir)
    }).then((code) => {
      // set app title
      const appTitle = /<title>(.*)<\/title>/g.test(code) && /<title>(.*)<\/title>/g.exec(code)[1]
      // update app state
      commit('SET_APP_TITLE', appTitle)
      commit('SET_SHORT_ID', shortCode)
      commit('UPDATE_CODE', code)
      // adapt route
      let query = rootState.route && rootState.route.query
      router.replace({path: '/' + shortCode, query})
      // end processing with small delay
      setTimeout(() => {
        commit('LOADING_APP', null)
      }, 400)
    }).catch((err) => {
      console.error('Loading failed :(')
      console.error(err)
      commit('LOADING_APP', null)
    })
  }
}

// mutations
const mutations = {
  [types.LOADING_APP] (state, data) {
    state.isLoadingApp = data
  },
  [types.SET_SHORT_ID] (state, id) {
    if (id) state.shortId = id
  },
  [types.SET_APP_TITLE] (state, title) {
    state.appTitle = title
  },
  [types.SET_TEMPLATE] (state, isTemplate) {
    state.isTemplate = isTemplate
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}

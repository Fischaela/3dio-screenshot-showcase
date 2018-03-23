import * as types from '../mutation-types'

// initial state
const state = {
  isLoadingApp: false
}

// actions
const actions = {
  // load specific app
  loadApp ({commit, state, rootState}) {
    console.log('loading app', commit, state, rootState)
    if (state.isLoadingApp) {
      console.warn('already loading')
      return
    }
    commit('LOADING_APP', true)
    commit('LOADING_APP', false)
  }
}

// mutations
const mutations = {
  [types.LOADING_APP] (state, data) {
    console.log('Loading App', state, data)
    state.isLoadingApp = data
  }
}

export default {
  state,
  actions,
  mutations
}

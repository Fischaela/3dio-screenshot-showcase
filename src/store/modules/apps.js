import * as types from '../mutation-types'
import io3d from '3dio'
import {cloneDeep} from 'lodash'
import templates from '../../js/app-templates'
import Api from '../../js/api'
import router from '../../router/index'

// initial state
const state = {
  appsKey: 'apps.json',
  userApps: {},
  isLoadingApps: false,
  isWritingApps: false,
  isLoadingApp: null,
  appTitle: null,
  shortId: '',
  isTemplate: false
}

// getters
const getters = {
  userApps: state => state.userApps,
  isTemplate: state => state.isTemplate,
  shortId: state => state.shortId,
  appTitle: state => state.appTitle,
  isProcessing: state => state.isLoadingApps || state.isWritingApps || !!state.isLoadingApp
}

// actions
const actions = {
  // load user apps from s3
  getApps ({commit, dispatch, state, rootState}) {
    // fetch apps.json
    commit(types.IS_LOADING_APPS, true)
    return fetch(`https://storage-nocdn.3d.io/${rootState.user.loggedInUser.id}/app-creator/${state.appsKey}?x=${Date.now()}`)
      .then((res) => {
        if (!res.ok) {
          var err = new Error('Request failed')
          err.httpStatus = res.status
          throw err
        }
        return res
      })
      .then((res) => res.json())
      .then((apps) => {
        // populate vuex store with user apps
        commit(types.UPDATE_APPS, cloneDeep(apps))
        // end processing with small delay
        setTimeout(() => {
          commit(types.IS_LOADING_APPS, false)
          commit(types.IS_WRITING_APPS, false)
        }, 400)
        return apps
      }).catch((e) => {
        // fallback to create new apps.json if not existent
        if (e.httpStatus && e.httpStatus === 404 || e.httpStatus === 403) {
          // if the user has no apps.json - let's create one for him
          console.warn('user has no apps, let\'s get started')
          dispatch('writeApps', {})
          commit(types.IS_LOADING_APPS, false)
        } else {
          console.error('Error loading apps', e)
          commit(types.IS_LOADING_APPS, false)
        }
      })
  },
  // load specific app
  loadApp ({commit, state, rootState}, shortCode) {
    console.log('loading app', state.isLoadingApp)
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
  },
  // update apps.json on s3
  addApp ({dispatch}, app) {
    console.log('adding app', app.shortId)
    // reusing template ids shouldn't happen but has happenend
    if (templates.includes(app.shortId)) {
      console.warn('templates can not be saved')
      return
    }
    // load before each saving to prevent overriding changes from other users
    dispatch('getApps').then(apps => {
      console.log('saving apps', app, apps)
      apps[app.shortId] = app
      dispatch('writeApps', apps)
    }).catch((e) => {
      console.error(e.message)
    })
  },
  writeApps ({commit, dispatch, rootState}, apps) {
    commit(types.IS_WRITING_APPS, true)
    var file = new Blob([JSON.stringify(apps)], { type: 'application/json' })
    file.name = state.appsKey
    io3d.storage.put(file, { key: `/${rootState.user.loggedInUser.id}/app-creator/${state.appsKey}` })
      .then(result => {
        // sync s3 with local state
        dispatch('getApps')
      })
      .catch(error => {
        console.error(error)
        commit(types.IS_WRITING_APPS, false)
      })
  }
}

// mutations
const mutations = {
  [types.UPDATE_APPS] (state, apps) {
    state.userApps = apps
  },
  [types.IS_WRITING_APPS] (state, data) {
    state.isWritingApps = data
  },
  [types.IS_LOADING_APPS] (state, data) {
    state.isLoadingApps = data
  },
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
  },
  [types.SET_APPS_KEY] (state, key) {
    console.log('setting apps key', key)
    state.appsKey = key
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}

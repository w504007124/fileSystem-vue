import Vue from 'vue'
import Vuex from 'vuex'

import user from './modules/user'
import publicVar from './modules/public'
import test1 from './modules/vuex-test'
import test2 from './modules/vuex-test2'

import getters from './getters'
Vue.use(Vuex)

export default new Vuex.Store({
  getters,
  mutations: {
  },
  actions: {
  },
  modules: {
    test1,
    user,
    test2,
    publicVar
  }
})

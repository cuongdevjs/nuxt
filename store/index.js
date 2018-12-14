import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const createStore = () => {
  return new Vuex.Store({
    state: {
      loading: false
    },
    getters: {
      loading: (state) => state.loading
    },
    mutations: {
      setLoading(state) {
        state.loading = true
      },
      setStopLoading(state) {
        state.loading = false
      }
    },
    actions: {
      setLoading({
        dispatch,
        commit
      }) {
        commit('setLoading')
      },
      setStopLoading({
        dispatch,
        commit
      }) {
        commit('setStopLoading')
      }
    },
    modules: {}
  })
}

export default createStore

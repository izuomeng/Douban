import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

const state = {
  movieTab: 'in_theaters',
  in_theaters: [],
  coming_soon: [],
  top250: [],
  title: '电影'
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})

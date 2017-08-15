import * as types from './type'

export default {
  [types.CHNAGE_MOVIE_TAB] (state, to) {
    state.movieTab = to
  },
  [types.SET_MOVIE_ITEMS] (state, payload) {
    state[payload.tab] = payload.value
  },
  [types.CHANGE_TITLE] (state, value) {
    state.title = value
  },
  [types.SET_TOTAL] (state, payload) {
    state[payload.tab].total = payload.value
  }
}

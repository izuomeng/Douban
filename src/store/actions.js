import * as types from './type'

export default {
  changeMovieTab (context, to) {
    context.commit(types.CHNAGE_MOVIE_TAB, to)
  },
  setMovieItems (context, payload) {
    context.commit(types.SET_MOVIE_ITEMS, {tab: payload.tab, value: payload.value})
  },
  changeTitle (context, value) {
    context.commit(types.CHANGE_TITLE, value)
  },
  setTotal (context, payload) {
    context.commit(types.SET_TOTAL, payload)
  }
}

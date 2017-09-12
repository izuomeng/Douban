import Vue from 'vue'
import Router from 'vue-router'
import Movie from './movie/router'
import Book from './book/router'
import Music from './music/router'
import About from './about/router'
import Details from './details/router'
import Person from './person/router'
import Search from './search/router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    Movie,
    Book,
    Music,
    About,
    Details,
    Person,
    Search
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

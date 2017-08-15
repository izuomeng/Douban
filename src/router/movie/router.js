import inTheater from './in-theater/router'
import comingSoon from './coming-soon/router'
import top250 from './top250/router'
import movie from './main.vue'

export default {
  path: '/movie/in_theaters',
  component: movie,
  alias: ['/movie', '/'],
  children: [
    inTheater,
    comingSoon,
    top250
  ]
}

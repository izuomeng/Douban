const detail = () => import('./main.vue')

export default {
  path: '/movie/subject/:id',
  component: detail,
  name: 'details'
}

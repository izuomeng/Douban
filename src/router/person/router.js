const person = () => import('./main.vue')

export default {
  path: '/movie/celebrity/:id',
  component: person,
  name: 'person'
}

const inTheater = () => import('./main.vue')

export default {
  path: 'in_theaters',
  component: inTheater,
  mate: { keepAlive: true }
}

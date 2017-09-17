const comingSoon = () => import('./main.vue')

export default {
  path: 'coming_soon',
  component: comingSoon,
  mate: { keepAlive: true }
}

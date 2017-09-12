<template>
  <card-movies title="coming_soon"></card-movies>
</template>

<script>
  import cardMovies from '../../../components/cardMovies.vue'
  export default {
    components: {
      cardMovies
    },
    beforeRouteEnter (to, from, next) {
      next(vm => {
        vm.$parent.activeTab = 'coming_soon'
      })
    }
  }
</script>

<template>
  <card-movies title="in_theaters"></card-movies>
</template>

<script>
  import cardMovies from '../../../components/cardMovies.vue'
  export default {
    components: {
      cardMovies
    },
    beforeRouteEnter (to, from, next) {
      next(vm => {
        vm.$parent.activeTab = 'in_theaters'
      })
    }
  }
</script>

<template>
  <div>
    Music page
  </div>
</template>

<<script>
export default {
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.$store.dispatch('changeTitle', '音乐')
    })
  }
}
</script>


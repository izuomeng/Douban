<template>
  <div>
    Book page
  </div>
</template>

<<script>
export default {
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.$store.dispatch('changeTitle', '图书')
    })
  }
}
</script>

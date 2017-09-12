<template>
  <div>
    About me page
  </div>
</template>

<<script>
export default {
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.$store.dispatch('changeTitle', '关于')
    })
  }
}
</script>
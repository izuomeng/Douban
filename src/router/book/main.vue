<style lang="less" src="./style.less"></style>

<template>
  <div class="book">
    <img src="../../assets/book.png" width="300px"/><br>
    欢迎来到图书页！在右上方搜索栏查找你想看的图书
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

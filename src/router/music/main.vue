<style lang="less" src="./style.less"></style>

<template>
  <div class="music">
    <img src="../../assets/music.png" width="300px"/><br>
    欢迎来到音乐页！在右上方搜索栏查找你想听的音乐
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


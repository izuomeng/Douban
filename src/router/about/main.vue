<style lang="less" src="./style.less"></style>

<template>
  <div class="about-me">
    <img src="../../assets/me.png" width="300px"/><br>
    这是用vue做的第一个小型项目，感谢豆瓣提供的API，由于没有申请开发者账号，因此读书和音乐模块暂时无法使用
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
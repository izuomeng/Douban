<template>
  <div id="itemCard" @click="jump()">
    <div class="left" :style="{ backgroundImage: 'url('+item.images.large+')', backgroundSize: 'cover'}">
    </div>
    <div class="right">
      <h3>{{ item.title }}</h3>
      <span>评分：{{ item.rating.average }}</span><br/>
      原名：{{ item.original_title }}
    </div>
  </div>
</template>

<script>
  export default {
    props: ['item'],
    methods: {
      jump () {
        this.$router.push({name: 'details', params: {id: this.item.id}})
      }
    }
  }
</script>

<style lang="less">
  #itemCard{
    width: 100%;
    margin: 10px auto;
    max-width: 900px;
    box-shadow: lightgrey 0 0 10px;
    cursor: pointer;
    &:after{
      content: '';
      display: block;
      clear: both;
    }
    .left{
      position: relative;
      width: 16%;
      float: left;
      padding-bottom: 22.4%;
      background-color: lightskyblue;
      overflow: hidden;
      text-align: left;
    }
    .right{
      height: 100%;
      overflow: hidden;
      padding: 10px;
      text-align: left;
    }
    h3{
      margin-top: 0;
    }
  }
</style>

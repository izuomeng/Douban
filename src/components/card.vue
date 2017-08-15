<template>
  <div id="card" @click="jump()">
    <mu-card>
      <mu-card-media class="imgContent" :style="{ backgroundImage: 'url('+movieItem.images.large+')', backgroundSize: 'cover'}">
      </mu-card-media>
      <mu-card-text class="text">
        <div class="title">
          {{ movieItem.title }}
        </div>
        分数：{{ movieItem.rating.average }}
      </mu-card-text>
    </mu-card>
  </div>
</template>

<script>
  export default {
    props: ['item'],
    data () {
      return {
        movieItem: this.item
      }
    },
    methods: {
      jump () {
        this.$router.push({name: 'details', params: {id: this.movieItem.id}})
      }
    }
  }
</script>

<style lang="less">
  #card{
    width: 100%;
    cursor: pointer;
    .imgContent{
      position: relative;
      width: 100%;
      padding-bottom: 138%;
      overflow: hidden;
    }
    .title{
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
    .text{

    }
  }
</style>

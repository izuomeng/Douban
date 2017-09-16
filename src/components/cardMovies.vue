<template>
  <div :id="title" class="cardMovies">
    <mu-toast v-if="toast" message="请求数据失败"/>
    <mu-circular-progress :size="50" :strokeWidth="3" v-if="loading" class="loading"/>
    <mu-row v-if="!loading">
      <mu-col width="33" tablet="25" desktop="20" v-for="item in items" :key="item.id" class="movieItem">
        <card :item="item"></card>
      </mu-col>
    </mu-row>
    <div v-show="!loading&&moreLoading" class="load" id="loadMore">
      <mu-circular-progress :size="25" :strokeWidth="2" class="moreLoading"/>
      <span>正在加载...</span>
    </div>
    <div v-if="noMore&&!loading" class="load">
      没有更多了!
    </div>
  </div>
</template>

<script>
  import card from './card.vue'
  export default {
    props: ['title'],
    data () {
      return {
        loading: true,
        items: [],
        moreLoading: false,
        total: 0,
        f: this.watchScroll.bind(this),
        toast: false
      }
    },
    computed: {
      noMore () {
        return (this.items.length >= this.total)
      }
    },
    created () {
      this.getMovies()
    },
    mounted () {
      this.$G.prepareLoading(document.getElementById(this.title))
      document.addEventListener('scroll', this.f)
    },
    activated () {
      document.addEventListener('scroll', this.f)
    },
    deactived () {
      document.removeEventListener('scroll', this.f)
    },
    destroyed () {
      document.removeEventListener('scroll', this.f)
    },
    methods: {
      getMovies () {
        this.$G.requestMovies(this.title, this)
      },
      watchScroll () {
        let self = this
        if (self.noMore) {
          return
        }
        if (self.title !== self.$store.state.movieTab) {
          return
        }
        if (document.body) {
          let body = document.body
          if ((body.scrollTop === body.offsetHeight - window.innerHeight) && (!self.moreLoading)) {
            self.moreLoading = true
            self.$G.loadMoreMovies(self.title, self.items.length, self)
          }
        }
      }
    },
    components: {
      card
    }
  }
</script>

<style lang="less">
  .cardMovies{
    position: relative;
    padding: 5px;
    overflow: auto;
    .loading{
      position: absolute;
      top: 50%;
      margin-top: -25px;
    }
    .row{
      justify-content: flex-start!important;
    }
    .movieItem{
      padding: 5px;
    }
    .moreLoading{
      vertical-align: middle;
    }
    .load{
      line-height: 24px;
      font-size: 16px;
    }
    .mu-toast{
        margin-left: calc(~"50% - 144px");
        top: 132px
    }
  }
</style>

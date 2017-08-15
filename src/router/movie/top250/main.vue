<style lang="less" src="./style.less"></style>
<template ref="top250">
  <div id="top250">
    <mu-circular-progress :size="50" :strokeWidth="3" v-if="loading" class="loading"/>
    <div class="movies" v-if="!loading">
      <item-card v-for="i in items" :item="i" :key="i.id"></item-card>
    </div>
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
  import itemCard from '../../../components/itemCard.vue'
  export default {
    data () {
      return {
        loading: true,
        items: [],
        moreLoading: false,
        total: 0,
        f: this.watchScroll.bind(this)
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
      this.$G.prepareLoading(document.getElementById('top250'))
      document.addEventListener('scroll', this.f)
    },
    activated () {
      document.addEventListener('scroll', this.f)
    },
    deactivated () {
      document.removeEventListener('scroll', this.f)
    },
    destroyed () {
      document.removeEventListener('scroll', this.f)
    },
    methods: {
      getMovies () {
        this.$G.requestMovies('top250', this, '?count=12')
      },
      watchScroll () {
        let self = this
        if (self.noMore) {
          return
        }
        if (self.$store.state.movieTab !== 'top250') {
          return
        }
        if (document.body) {
          let body = document.body
          if ((body.scrollTop === body.offsetHeight - window.innerHeight) && (!self.moreLoading)) {
            self.moreLoading = true
            self.$G.loadMoreMovies('top250', self.items.length, self)
          }
        }
      }
    },
    components: {
      itemCard
    }
  }
</script>

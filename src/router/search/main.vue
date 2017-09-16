<style lang="less" src="./style.less"></style>

<template>
  <div id="search">
    <mu-circular-progress :size="50" :strokeWidth="3" v-if="loading" class="loading"/>
    <div class="movies" v-if="!loading">
      <item-card v-for="i in items" :item="i" :key="i.id"></item-card>
    </div>
    <mu-toast v-if="toast" message="请求数据失败"/>
  </div>
</template>

<script>
import itemCard from '../../components/itemCard.vue'

export default {
  data () {
    return {
      searchText: this.$route.query.question,
      loading: true,
      items: [],
      previousTitle: '电影',
      from: 'movie',
      toast: false
    }
  },
  components: {
    itemCard
  },
  mounted () {
    this.$G.prepareLoading(document.getElementById('search'))
  },
  activated () {
    console.log('activated called')
    this.getMovies()
  },
  methods: {
    getMovies () {
      let tid = setTimeout(() => {
        this.loading = false
        this.toast = true
        setTimeout(() => {
          this.toast = false
        }, 3000)
      }, 5000)
      this.$G.searchMovie(this.from, this.searchText).then((response) => {
        this.loading = false
        this.items = response.data.subjects
        clearTimeout(tid)
      }).catch((error) => {
        throw new Error('加载失败 ' + error)
      })
    }
  },
  watch: {
    $route () {
      this.loading = true
      this.searchText = this.$route.query.question
      this.getMovies()
    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      switch (from.path) {
        case '/book':
          vm.from = 'book'
          break
        case '/music':
          vm.from = 'music'
          break
        default:
          vm.from = 'movie'
          break
      }
      vm.getMovies()
      vm.previousTitle = vm.$store.state.title
      vm.$store.dispatch('changeTitle', `"${to.query.question}"的搜索结果`)
    })
  },
  beforeRouteLeave (to, from, next) {
    this.$parent.$refs.headBar.searchText = ''
    this.$store.dispatch('changeTitle', this.previousTitle)
    next()
  }
}
</script>


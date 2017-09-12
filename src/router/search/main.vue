<<style lang="less">
#search{
  position: relative;
  padding: 10px 20px;
  .loading{
    position: absolute;
    top: 50%;
    margin-top: -25px;
  }
}
</style>

<template>
  <div>
    <div id="search">
      <mu-circular-progress :size="50" :strokeWidth="3" v-if="loading" class="loading"/>
      <div class="movies" v-if="!loading">
        <item-card v-for="i in items" :item="i" :key="i.id"></item-card>
      </div>
    </div>
  </div>
</template>

<<script>
import itemCard from '../../components/itemCard.vue'

export default {
  data () {
    return {
      searchText: this.$route.query.question,
      loading: true,
      items: []
    }
  },
  components: {
    itemCard
  },
  created () {
    this.getMovies()
  },
  mounted () {
    this.$G.prepareLoading(document.getElementById('search'))
  },
  activated () {
    this.getMovies()
  },
  methods: {
    getMovies () {
      this.$G.searchMovie(this.searchText).then((response) => {
        this.loading = false
        this.items = response.data.subjects
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
  beforeRouteLeave (to, from, next) {
    this.$parent.$refs.headBar.searchText = ''
    next()
  }
}
</script>


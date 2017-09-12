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
      loading: true,
      items: []
    }
  },
  components: {
    searchHead,
    itemCard
  },
  created () {
    this.getMovies()
  },
  mounted () {
    this.$G.prepareLoading(document.getElementById('search'))
  },
  methods: {
    getMovies () {
      this.$G.searchMovies('search', this, `?q=${this.$route.params.id}`)
    }
  }
}
</script>


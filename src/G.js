import axios from 'axios'
export default {
  $http: axios,
  prepareLoading (element) {
    let top = element.getBoundingClientRect().top
    let height = window.innerHeight
    element.style.minHeight = (height - top) + 'px'
  },
  requestMovies (url, that, params = '?count=20') {
    let self = that
    if (self.$store.state[url].length <= 0) {
      axios.get('/api/movie/' + url + params).then(function (response) {
        self.loading = false
        self.items = response.data.subjects
        self.total = response.data.total
        self.$store.dispatch('setMovieItems', {tab: url, value: self.items})
        self.$store.dispatch('setTotal', {tab: url, value: self.total})
      }).catch(function (error) {
        throw new Error('加载失败 ' + error)
      })
    } else {
      self.loading = false
      self.items = self.$store.state[url]
      self.total = self.$store.state[url].total
    }
  },
  loadMoreMovies (url, start, that) {
    start = parseInt(start)
    axios.get('/api/movie/' + url + '?start=' + start + '&count=12').then(function (response) {
      for (let item of response.data.subjects) {
        that.items.push(item)
      }
      that.$store.dispatch('setMovieItems', {tab: url, value: that.items})
      that.moreLoading = false
    }).catch(function (error) {
      throw new Error('加载错误' + error)
    })
  },
  requestSingleMovie (id) {
    return axios.get('/api/movie/subject/' + id)
  }
}

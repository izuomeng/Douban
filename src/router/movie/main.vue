<style lang="less" src="./style.less"></style>
<template>
  <div id="movie">
    <div id="movieTabs" ref="a">
      <mu-tabs :value="activeTab" @change="handleTabChange">
        <mu-tab value="in_theaters" title="正在热映"/>
        <mu-tab value="coming_soon" title="即将上线"/>
        <mu-tab value="top250" title="豆瓣top250"/>
      </mu-tabs>
    </div>
    <div style="height: 48px; display: none" id="placeHolder"></div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        activeTab: 'in_theaters',
        isFix: false,
        f: this.changeTab.bind(this)
      }
    },
    created () {
      this.handleTabChange(this.$store.state.movieTab)
    },
    mounted () {
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
      handleTabChange (val) {
        this.activeTab = val
        this.$store.dispatch('changeMovieTab', val)
        this.$router.push('/movie/' + this.activeTab)
        if (document.body.scrollTop >= 64) {
          window.scrollTo(0, 64)
        }
      },
      changeTab () {
        let tab = document.getElementById('movieTabs')
        if (tab) {
          if (tab.getBoundingClientRect().top <= 0) {
            document.getElementById('placeHolder').style.display = 'block'
            tab.classList.add('fix')
          }
          if (document.body.scrollTop <= 64) {
            tab.classList.remove('fix')
            document.getElementById('placeHolder').style.display = 'none'
          }
        }
      }
    },
    beforeRouteEnter (to, from, next) {
      next(vm => {
        vm.$store.dispatch('changeTitle', '电影')
      })
    }
  }
</script>

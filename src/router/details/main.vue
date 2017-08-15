<style lang="less" src="./style.less"></style>

<template>
  <div id="subject">
    <mu-circular-progress :size="50" :strokeWidth="3" v-if="loading" class="loading"/>
    <div v-if="!loading" class="wrap">
      <div class="header" id="detailHeader">
        <img :src="item.images.large" style="width: 100%; position: absolute" id="scrollImg"/>
      </div>
      <div class="content">
        <div class="top">
          <div class="title">
            <h2>
              {{ item.title }}
            </h2>
            <h4>
              评分：{{ item.rating.average }}
              <span style="color: grey">（{{ item.ratings_count }}人评价）</span>
            </h4>
          </div>
          <div class="poster">
            <img :src="item.images.large" style="width: 100%; position: absolute"/>
          </div>
        </div>
        <mu-raised-button class="demo-raised-button" :label="hadWatch" icon="done" primary style="min-width: 165px" @click="disableButton(1)" :disabled="disabled"/>
        <mu-raised-button class="demo-raised-button" :label="neverWatch" icon="forward" primary style="min-width: 165px" @click="disableButton(2)" :disabled="disabled"/>
        <div class="introduce">
          <h4>
            原名
          </h4>
          <span>{{ item.original_title }}</span>
          <h4>
            又名
          </h4>
          <span>{{ names }}</span>
          <h4>
            影片类型
          </h4>
          <span>{{ type }}</span>
          <h4>
            国家
          </h4>
          <span>{{ countries }}</span>
          <h4>
            年代
          </h4>
          <span>{{ item.year }}</span>
          <h4>
            介绍
          </h4>
          <span>{{ item.summary }}</span>
          <h4>
            导演
          </h4>
          <div class="directors">
            <div v-for="i in item.directors" class="image" @click="goPersonPage(i.id)">
              <div class="avatar" :style="{ backgroundImage: 'url('+i.avatars.large+')', backgroundSize: 'cover'}">
              </div>
              <div style="text-align: center">
                {{ i.name }}
              </div>
            </div>
          </div>
          <h4>
            主演
          </h4>
          <div class="directors">
            <div v-for="i in item.casts" class="image" @click="goPersonPage(i.id)">
              <div class="avatar" :style="{ backgroundImage: 'url('+i.avatars.large+')', backgroundSize: 'cover'}">
              </div>
              <div style="text-align: center; white-space: normal">
                {{ i.name }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'details',
    data () {
      return {
        id: this.$route.params.id,
        item: {},
        loading: true,
        comments: {},
        disabled: false
      }
    },
    computed: {
      names () {
        return this.item.aka.join(' / ')
      },
      type () {
        return this.item.genres.join(' / ')
      },
      countries () {
        return this.item.countries.join(' / ')
      },
      hadWatch () {
        return this.item.wish_count + '人看过'
      },
      neverWatch () {
        return this.item.collect_count + '人想看'
      },
      backImage () {
        return {
          backgroundImage: 'url(' + this.item.images.large + ')',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }
      }
    },
    mounted () {
      this.$G.prepareLoading(document.getElementById('subject'))
      document.addEventListener('scroll', this.parallax)
    },
    created () {
      this.getMovie(this.id)
    },
    activated () {
      document.addEventListener('scroll', this.parallax)
    },
    deactivated () {
      document.removeEventListener('scroll', this.parallax)
    },
    destroyed () {
      document.removeEventListener('scroll', this.parallax)
    },
    methods: {
      goPersonPage (id) {
        this.$router.push({name: 'person', params: {id: id}})
      },
      getMovie (id) {
        let self = this
        if (id) {
          self.$G.requestSingleItem('subject/' + id).then(function (response) {
            self.item = response.data
            self.loading = false
          }).catch(function (error) {
            throw new Error(error)
          })
        }
      },
      // 视差滚动
      parallax () {
        let top = document.body.scrollTop
        let img = document.getElementById('scrollImg')
        if (img) {
          if (top < (img.height - img.width * 0.8) && top >= 0) {
            img.style.top = -top + 'px'
          }
        }
      },
      disableButton (n) {
        this.disabled = true
        if (n === 1) {
          this.item.wish_count++
        } else {
          this.item.collect_count++
        }
      }
    }
  }
</script>

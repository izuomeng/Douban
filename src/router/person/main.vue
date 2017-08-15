<style lang="less" src="./style.less"></style>

<template>
  <div id="person">
    <mu-circular-progress :size="50" :strokeWidth="3" v-if="loading" class="loading"/>
    <div class="wrap" v-if="!loading">
      <div class="head">
        <div class="img" :style="{ backgroundImage: 'url('+item.avatars.large+')', backgroundSize: 'cover'}">
        </div>
        <div class="intro">
          <h1>
            {{ item.name }}
          </h1>
          <span>性别：{{ item.gender }}</span>
          <span>英文名：{{ item.aka_en.join(' / ') }}</span>
          <span>出生地：{{ item.born_place }}</span>
        </div>
      </div>
      <div class="works">
        <h4>影人作品</h4>
        <div class="directors">
          <div v-for="i in item.works" class="image" @click="jump(i.subject.id)">
            <div class="avatar" :style="{ backgroundImage: 'url('+i.subject.images.large+')', backgroundSize: 'cover'}">
            </div>
            <div style="text-align: center; white-space: normal">
              {{ i.subject.title }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        id: this.$route.params.id,
        loading: true,
        item: {}
      }
    },
    mounted () {
      this.$G.prepareLoading(document.getElementById('person'))
    },
    created () {
      this.getMovie(this.id)
    },
    methods: {
      getMovie (id) {
        let self = this
        if (id) {
          self.$G.requestSingleItem('celebrity/' + id).then(function (response) {
            self.item = response.data
            self.loading = false
          }).catch(function (error) {
            throw new Error(error)
          })
        }
      },
      jump (id) {
        this.$router.push({name: 'details', params: {id: id}})
      }
    }
  }
</script>

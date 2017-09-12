<template>
  <div id="head-bar">
    <mu-appbar :title="storeTitle" id="appBar" titleClass="headBarTitle">
      <mu-icon-button icon="menu" slot="left" @click="toggle(true)"/>
      <mu-text-field icon="search" class="appbar-search-field"  slot="right"
      hintText="请输入搜索内容" @change="handleSearch()" v-model="searchText"/>
    </mu-appbar>
    <mu-drawer :open="open" :docked="docked" @close="toggle()">
      <mu-list @itemClick="docked ? '' : toggle()">
        <mu-list-item title="电影" to="/movie" @click="jump('电影')"/>
        <mu-list-item title="音乐" to="/music" @click="jump('音乐')"/>
        <mu-list-item title="图书" to="book" @click="jump('图书')"/>
        <mu-list-item title="关于" to="/about" @click="jump('关于')"/>
      </mu-list>
    </mu-drawer>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        open: false,
        docked: true,
        searchText: ''
      }
    },
    methods: {
      toggle (flag) {
        this.open = !this.open
        this.docked = !flag
      },
      jump (title) {
        this.$store.dispatch('changeTitle', title)
      },
      handleSearch () {
        let self = this
        this.$router.push({name: 'search', params: {param: self.searchText}})
      }
    },
    computed: {
      storeTitle () {
        return this.$store.state.title
      }
    },
    created () {
      this.$router.push('/movie')
    }
  }
</script>

<style lang="less">
  .appbar-search-field{
    color: #FFF;
    margin-bottom: 0;
    &.focus-state {
      color: #FFF;
    }
    .mu-text-field-hint {
      color: fade(#FFF, 54%);
    }
    .mu-text-field-input {
      color: #FFF;
    }
    .mu-text-field-focus-line {
      background-color: #FFF;
    }
  }
  .headBarTitle{
    text-align: left;
  }
</style>

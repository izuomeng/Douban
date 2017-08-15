<template>
  <div id="app">
    <head-bar></head-bar>
    <router-view></router-view>
  </div>
</template>

<script>
  import headBar from './components/head.vue'
  export default {
    components: {
      headBar
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-width: 500px;
}
a{
  text-decoration: none;
}
</style>

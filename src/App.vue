<template>
  <div id="app">
    <router-view></router-view>
    <foot-tab-bar></foot-tab-bar>
  </div>
</template>
<script>
  import FootTabBar from 'components/content/FootTabBar'
  export default {
    name:'App',
    components:{
      FootTabBar
    }
  }
</script>
<style>
  @import 'assets/css/base.css'
</style>

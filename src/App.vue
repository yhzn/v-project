<template>
  <div id="app">
    <Heads/>
    <router-view/>
    <Foots/>
  </div>
</template>

<script>
import Heads from './components/head'
import Foots from './components/foot'
export default {
  name: 'app',
  components:{
    Heads,
    Foots
  }
}
</script>

<style>
#app {
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
}
</style>

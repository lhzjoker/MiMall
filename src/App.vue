<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import storage from './storage/index.js'
  export default {
    data() {
      return {
        
      }
    },
    name: 'App',
    components: {
      
    },
    mounted() {
      console.log(123);
      // storage.setItem("a",1,"user")
      storage.clear("a")
    }
  }
</script>

<style>
  #app {
      font-family: Avenir, Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: #2c3e50;
      margin-top: 60px;
    }
</style>
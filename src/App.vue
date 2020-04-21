<template>
  <div id="app">
    <router-view></router-view>
    {{res}}
  </div>
</template>

<script>
  // import storage from './storage/index.js'
  export default {
    data() {
      return {
        res: ''
      }
    },
    name: 'App',
    components: {
      
    },
    mounted() {
      this.axios({
        url:'/user/login'
      }).then((res)=>{
        this.res = res
      })
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
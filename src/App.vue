<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
// import axios from 'axios'
import jsonp from 'jsonp'
export default {
  name: 'App',
  components: {
    HelloWorld
  },
  /* 发送请求，用axios.get的方式 */
  mounted(){
    /* 一个供我们调用的接口 */
    let url = '/api/activity/servicetime'
    /* promise结构 */
    // axios.get(url).then(()=>{
      
    // })
    jsonp(url,()=>{
      
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

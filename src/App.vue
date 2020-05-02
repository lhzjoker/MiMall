<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        
      }
    },
    name: 'App',
    components: {
      
    },
    mounted() {
      this.getUser()
      this.getCartCount()
    },
    methods: {
      getUser(){
        this.axios.get('/user').then(()=>{
          //to-do 保存到vuex中
        })
      },
      getCartCount(){
        this.axios.get('/carts/products/sum').then(()=>{
          //to-do 保存到vuex中
        })
      }
    },
  }
</script>

<style lang="scss">
@import './assets/scss/reset.scss';
@import './assets/scss/mixin.scss';
@import './assets/scss/config.scss';
@import './assets/scss/button.scss';
</style>
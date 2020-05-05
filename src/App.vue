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
      if (this.$cookie.get('userId')) {
        this.getUser()
        this.getCartCount()
      }
    },
    methods: {
      getUser() {
        this.axios.get('/user').then((res={}) => {
          //to-do 保存到vuex中
          this.$store.dispatch('saveUserName',res.username)
        })
      },
      getCartCount() {
        this.axios.get('/carts/products/sum').then((res=0) => {
          //to-do 保存到vuex中
          this.$store.dispatch('saveCartCount',res)
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
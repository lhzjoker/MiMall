import Vue from 'vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'

//根据前端跨域进行调整
axios.defaults.baseURL = '/api'
//设置超时时间
axios.defaults.timeout = 8000

//接口错误拦截
axios.interceptors.response.use(function(response){
  let res = response.data
  if(res.status == 0){      //状态码为0代表登陆成功
    return res.data
  }else if(response.status == 10){    //状态码为10代表未登陆，跳转到登陆页面
    window.location.href = '/#/login'   //跳转到登陆页面
  }else{
    alert(res.msg)
  }
})

Vue.use(VueAxios,axios)

Vue.config.productionTip = false

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')

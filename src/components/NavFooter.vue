<template>
  <div class="footer">
    <div class="foot-logo">
      <img src="/imgs/logo-footer.png" alt />
      <p>小米商城</p>
    </div>
    <div class="foot-link">
      <a href="https://github.com/lhzjoker" target="_blank">叫我阿华就好了主页</a>
      <a href="https://github.com/lhzjoker/MiMall" target="_blank">小米商城复刻前端源码</a>
      <a href="https://github.com/lhzjoker/blink" target="_blank">纯商业级微信小程序开发源码</a>
    </div>
    <div class="Copyright">
        Copyright ©2020 
      <span>mi.lhzjoker.com</span>
       All Rights Reserved
    </div>
  </div>
</template>

<script>
export default {
  name: "nav-footer"
};
</script>

<style lang="scss">
@import "./../assets/scss/config.scss";
.footer {
  height: 240px;
  background-color: $colorB;
  color: #b0b0b0;
  position: absolute;
  bottom: 0;
  border-top: 3px solid $colorA;
  width: 100%;
  text-align: center;
  font-size: 16px;
  .foot-logo{
      margin-top: 50px;
      
      img{
          width: 53px;
          height: 36px;
          margin-bottom: 20px;
      }
      p{
          margin-bottom: 40px;
      }
  }
  .foot-link {
    a {
      color: #b0b0b0;
      margin-right: 20px;
      display: inline-block;
      height: 16px;
      line-height: 16px;
      position: relative;
      &:after {
        content: '';
        position: absolute;
        top: 1px;
        margin-left: 10px;
        border-right: 1px solid #b0b0b0;
        height: 15px;
    }
    &:last-child:after{
        display: none;
    }
    }
    margin-bottom: 10px;
  }
  .Copyright{
      span{
          color: $colorA;
      }
  }
}
</style>
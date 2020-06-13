<template>
  <div class="login">
    <div class="container">
      <div class="login-header">
        <a href="/#/index">
          <img src="/imgs/login-logo.png" alt />
        </a>
      </div>
    </div>
    <div class="login-body">
      <div class="container">
        <div class="login-form">
          <h3>
            <span class="checked">账号登录</span>
            <span class="sep-line">|</span>
            <span>扫码登录</span>
          </h3>
          <div class="input">
            <input type="text" placeholder="请输入账号" v-model="username"  autocomplete="on"/>
          </div>
          <div class="input">
            <input type="password" placeholder="请输入密码" v-model="password" autocomplete="on"/>
          </div>
          <div class="btn-box">
            <div class="btn">
              <a href="javascript:;" @click="login">登录</a>
            </div>
          </div>
          <div class="tips">
            <div class="sms" @click="register">手机短信登录/注册</div>
            <div class="reg">
              立即注册
              <span>|</span>
              忘记密码？
            </div>
          </div>
        </div>
      </div>
      <img src="/imgs/login-bg.jpg" alt />
      <div class="container">
        <div class="login-foot">
          <div class="foot-link">
            <a href="https://github.com/lhzjoker" target="_blank">叫我阿华就好了主页</a>
            <a href="https://github.com/lhzjoker/MiMall" target="_blank">小米商城复刻前端源码</a>
            <a href="https://github.com/lhzjoker/blink" target="_blank">纯商业级微信小程序开发源码</a>
          </div>
          <div class="Copyright">Copyright ©2020mi.lhzjoker.comAll Rights Reserved</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "login",
  data() {
    return {
      username: "",
      password: "",
      userId: "",
      email: "2313169248@qq.com"
    };
  },
  methods: {
    login() {
      let { username, password } = this; //解构语法
      this.axios
        .post("/user/login", {
          username,
          password
        })
        .then(res => {
          this.$cookie.set('userId', res.id, { expires: 'Session' }); //保存用户id
          this.$store.dispatch('saveUserName',res.username)
          this.$router.push({
            name: 'index',
            params:{
              from: 'login'
            }
          });
        });
    },
    register() {
      this.$router.push("/register")
    }
  }
};
</script>
<style lang="scss">
@import "./../assets/scss/config.scss";
@import "./../assets/scss/base.scss";
.login {
  .login-header {
    height: 110px;
    line-height: 110px;
    a {
      display: inline-block;
    }
    img {
      height: 100%;
      width: auto;
    }
  }
  .login-body {
    img {
      width: 100%;
      height: 576px;
    }
    .login-form {
      padding: 0px 31px;
      box-sizing: border-box;
      position: absolute;
      right: 0;
      top: 30px;
      z-index: 10;
      background-color: #ffffff;
      width: 410px;
      height: 510px;
      text-align: center;
      h3 {
        height: 120px;
        line-height: 120px;
        span {
          font-size: 24px;
          margin-right: 20px;
          &:last-child {
            margin-right: 0;
          }
        }
        .checked {
          color: $colorA;
        }
      }
      .input {
        display: inline-block;
        width: 348px;
        height: 50px;
        border: 1px solid #e5e5e5;
        margin-bottom: 20px;
        input {
          width: 100%;
          height: 100%;
          background-color: #e8f0fe;
          border: none;
          padding: 18px;
        }
      }
      .btn-box {
        .btn {
          width: 348px;
          height: 50px;
          margin-bottom: 15px;
          a {
            color: #ffffff;
            line-height: 50px;
            width: 100%;
            font-size: 16px;
            display: inline-block;
          }
        }
      }
      .tips {
        font-size: 14px;
        position: relative;
        cursor: pointer;
        .sms {
          color: $colorA;
          position: absolute;
          left: 0;
        }
        .reg {
          position: absolute;
          right: 0;
          color: #999999;
        }
      }
    }
  }
  .login-foot {
    font-size: 16px;
    text-align: center;
    color: #999999;
    .foot-link{
        margin-top: 50px;
        margin-bottom: 20px;
        a{
            color: #999999;
            margin-right: 10px;
            &:after{
            border-right: 1px solid #999999;
            margin-left: 10px;
            content: '';
        }
        &:last-child:after{
            display: none;
        }
        }
        
    }
  }
}
</style>
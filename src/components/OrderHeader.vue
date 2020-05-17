<template>
  <div class="order">
    <div class="container clearfix">
      <div class="logo fl">
        <a href="/#/index"></a>
      </div>
      <div class="title">
        <h2 class="fl">{{title}}<slot name="tips"></slot>
        </h2>
      </div>
      <div class="username fr">
        <a href="javascript:;">{{username}}</a>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  export default {
    name: "order-header",
    props: {
      title: String
    },
    computed: {
      ...mapState(['username'])
    },
  };
</script>
<style lang="scss">
  @import "./../assets/scss/mixin.scss";
  @import "./../assets/scss/config.scss";

  .order {
    padding: 30px 0;
    border-bottom: 2px solid $colorA;
    background-color: #ffffff;
    .logo {
      width: 55px;
      height: 55px;
      display: inline-block;
      background-color: $colorA;

      a {
        display: inline-block;
        width: 110px;
        height: 55px;

        &:before {
          content: "";
          @include bgImg(55px, 55px, "/imgs/mi-logo.png");
          display: inline-block;
          transition: all 0.3s;
        }

        &:after {
          content: "";
          @include bgImg(55px, 55px, "/imgs/mi-home.png");
          display: inline-block;
          transition: all 0.3s;
        }

        &:hover:before {
          margin-left: -55px;
          transition: all 0.3s;
        }
      }
    }

    .title {
      h2 {
        font-size: 28px;
        color: #333333;
        margin-left: 55px;
        line-height: 55px;
      }

      span {
        font-size: 14px;
        margin-left: 17px;
        color: #999999;
        line-height: 55px;
        font-weight: 200;
      }
    }

    .username {
      a {
        font-size: 16px;
        color: #666666;
        display: inline-block;
      }
      line-height: 55px;
    }
  }
</style>
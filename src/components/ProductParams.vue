<template>
  <div class="productparams">
    <div class="nav-topbar" :class="{'is-fixed':isFixed}">
      <div class="container">
        <div class="title">小米CC9</div>
        <div class="params">
          <a href="javascript:;">概述</a>
          <span>|</span>
          <a href="javascript:;">参数</a>
          <span>|</span>
          <a href="javascript:;">用户评价</a>
          <slot name="buy"></slot>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script>
export default {
  name: "product",
  components: {},
  data() {
    return {
      isFixed: false
    };
  },
  mounted() {
    //一个监听滚动条的事件
    window.addEventListener("scroll", this.initHeight);
  },
  methods: {
    initHeight() {
      //获取当前滚动条所处的高度
      let scrollTop =
        window.pageXOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      this.isFixed = scrollTop > 151 ? true : false;
    }
  },
  destroyed() {
    window.removeEventListener("scroll", this.initHeight, false);
  }
};
</script>
 
<style lang="scss">
@import "./../assets/scss/config.scss";
.productparams {
  .nav-topbar {
    &.is-fixed {
      position: fixed;
      top: 0;
      width: 100%;
      box-shadow: 0px 5px 5px $colorE; //阴影x轴横向为0，y轴竖向为5px，宽度为5px
    }
    border-top: 1px solid #e5e5e5;
    background-color: #ffffff;
    height: 71px;
    line-height: 71px;
    .container {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      .title {
        font-size: 20px;
        font-weight: bold;
      }
      .params {
        font-size: 14px;
        a {
          color: #666666;
          margin-right: 10px;
        }
        span {
          margin-right: 10px;
          &:last-child:margin-right {
            display: none;
          }
        }
      }
    }
  }
}
</style>
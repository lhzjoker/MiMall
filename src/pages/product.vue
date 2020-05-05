<template>
  <div class="product">
    <product-params :title="product.name">
      <template v-slot:buy>
        <button class="btn" @click="buy">立即购买</button>
      </template>
    </product-params>
    <div class="content">
      <div class="item-bg-1">
        <h2>{{product.name}}</h2>
        <h3>{{product.subtitle}}</h3>
        <p>
          <a href="javascript:;">全球首款双频 GP</a>
          <span>|</span>
          <a href="javascript:;">骁龙845</a>
          <span>|</span>
          <a href="javascript:;">AI 变焦双摄</a>
          <span>|</span>
          <a href="javascript:;">红外人脸识别</a>
        </p>
        <div class="price">
          <span>￥</span>{{product.price}}
        </div>
      </div>
      <div class="item-bg-2"></div>
      <div class="item-bg-3"></div>
      <div class="item-swiper">
        <swiper :options="swiperOptions">
          <swiper-slide v-for="(item,index) in swiperList" :key="index">
            <img :src="item" alt />
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
        <div class="desc">小米8 AI变焦双摄拍摄</div>
      </div>
      <div class="item-video">
        <h2>
          60帧超慢动作摄影
          <br />慢慢回味每一瞬间的精彩
        </h2>
        <p>
          后置960帧电影般超慢动作视频，将眨眼间的美妙展现得淋漓尽致！
          <br />更能AI 精准分析视频内容，15个场景智能匹配背景音效。
        </p>
        <div class="video-bg" @click="onvideo"></div>
        <div class="video-box" >
          <div class="overlay" v-show="showVideo"></div>
          <div class="video" :class="{'slide':showVideo}">
            <span class="icon-close" @click="offvideo"></span>
            <video src="/imgs/product/video.mp4" autoplay muted controls="controls"></video>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
import ProductParams from "./../components/ProductParams.vue";
export default {
  name: "product",
  components: {
    ProductParams,
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      swiperList: [
        "/imgs/product/gallery-2.png",
        "/imgs/product/gallery-3.png",
        "/imgs/product/gallery-4.png",
        "/imgs/product/gallery-5.jpg",
        "/imgs/product/gallery-6.jpg"
      ],
      showVideo: false,
      swiperOptions: {
        autoplay: true,
        slidesPerView: 3, //设置slider容器能够同时显示的slides数量
        spaceBetween: 30, //在slide之间设置距离
        freeMode: true, //默认为false，普通模式：slide滑动时只滑动一格，并自动贴合wrapper，设置为true则变为free模式，slide会根据惯性滑动可能不止一格且不会贴合
        //分页器
        pagination: {
          el: ".swiper-pagination",
          clickable: true //点击原点可切换
        }
      },
      product: {}
    };
  },
  methods: {
    onvideo() {
      this.showVideo = true;
    },
    offvideo() {
      this.showVideo = false;
    },
    getUserInfo(){
      let id = this.$route.params.id    //获取路由参数id
      this.axios.get(`/products/${id}`).then((res)=>{
        this.product = res
      })
    },
    buy(){
      let id = this.$route.params.id
      this.$router.push(`/detail/${id}`)
    }
  },
  mounted() {
    this.getUserInfo()
  },
};
</script>

<style lang="scss">
@import "./../assets/scss/config.scss";
@import "./../assets/scss/mixin.scss";
.product {
  .content {
    width: 100%;
    .item-bg-1 {
      background: url(/imgs/product/product-bg-1.png) no-repeat 50%;
      height: 718px;
      text-align: center;
      width: 100%;
      h2{
        font-size: 80px;
        padding-top: 56px;
      }
      h3{
        font-size: 24px;
        letter-spacing: 10px;   //字与字之间间隔10px
        margin-bottom: 25px;
      }
      p{
        a{
          font-size: 16px;
          color: #333333;
        }
        span{
          padding: 0 10px;
          font-size: 16px;
        }
        margin-bottom: 40px;
      }
      .price{
        font-size: 38px;
        color: #333333;
      }
    }
    .item-bg-2 {
      background: url(/imgs/product/product-bg-2.png) no-repeat 50%;
      height: 480px;
      background-size: 1226px 397px;
    }
    .item-bg-3 {
      background: url(/imgs/product/product-bg-3.png) no-repeat 50%;
      height: 638px;
      background-size: cover;
    }
    .item-swiper {
      margin: 36px auto 56px;
      img {
        width: 100%;  //撑满swiper-slide容器
      }
      .desc {
        text-align: center;
        font-size: 18px;
        color: #333333;
      }
    }
  }
  .item-video {
    background-color: black;
    text-align: center;
    color: #ffffff;
    h2 {
      font-size: 60px;
      padding-top: 82px;
      margin-bottom: 47px;
    }
    p {
      font-size: 24px;
      padding-bottom: 58px;
    }
    .video-bg {
      @include bgImg(1226px, 540px, "/imgs/product/gallery-1.png", cover);
      margin-bottom: 58px;
      cursor: pointer;
    }
    .video-box {
      .overlay {
        @include position(fixed);
        background-color: $colorI;
        opacity: 0.5;
        z-index: 10;
      }
      .video {
        position: fixed;
        top: -50%;
        left: 50%;
        width: 1000px;
        height: 536px;
        transform: translate(-50%, -50%);
        z-index: 10;
        transition: all 0.5s;
        &.slide {
          top: 50%;
        }
        video {
          width: 100%;
          height: 100%;
          object-fit: cover; //保持原有尺寸比例。宽度和高度中短的那条边跟容器大小一致，长的那条等比缩放。可能会有部分区域不可见。
          outline: none; //元素周围的一条线，位于边框边缘的外围，可起到突出元素的作用,这里的作用是去掉这条线
        }
        .icon-close {
          @include positionImg(
            absolute,
            20px,
            20px,
            20px,
            20px,
            "/imgs/icon-close.png"
          );
          cursor: pointer;
          display: inline-block;
          z-index: 11;
        }
      }
    }
  }
}
</style>
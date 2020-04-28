<template>
  <div class="index">
    <div class="container">
      <div class="swiper-box">
        <div class="nav-menu">
          <ul class="menu-wrap">
            <li class="menu-item">
              <a href="javascript:;">手机 电话卡</a>
              <div class="children">
                <ul class="products" v-for="(item,i) in menuList" :key="i">
                  <li class="product" v-for="(sub,j) in item" :key="j">
                    <a :href="sub?'/#/product/'+sub.id:''">
                      <img :src="sub?sub.image:'/imgs/item-box-1.png'" alt />
                      {{sub?sub.name:'小米CC9'}}
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">电视 盒子</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">笔记本 平板</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">家电 插线板</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">出行 穿戴</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">智能 路由器</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">电源 配件</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">生活 箱包</a>
            </li>
          </ul>
        </div>
        <swiper :options="swiperOptions">
          <swiper-slide v-for="(item,index) in swiperList" :key="index">
            <a :href="'/#/product/' + item.id">
              <img :src="item.image" alt />
            </a>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <!--左箭头。如果放置在swiper-container外面，需要自定义样式。-->
          <div class="swiper-button-next" slot="button-next"></div>
          <!--右箭头。如果放置在swiper-container外面，需要自定义样式。-->
        </swiper>
      </div>
      <div class="ads-box">
        <a :href="'/#/product/'+item.id" v-for="(item,index) in adsList" :key="index">
          <img :src="item.image" alt />
        </a>
      </div>
      <div class="banner"></div>
      <div class="product-box"></div>
    </div>
    <service-bar></service-bar>
  </div>
</template>

<script>
import ServiceBar from "./../components/ServiceBar";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
export default {
  name: "index",
  components: {
    Swiper,
    SwiperSlide,
    ServiceBar
  },
  data() {
    return {
      swiperOptions: {
        //环绕
        loop: true,
        //自动切换
        autoplay: true,
        //方块旋转
        effect: "cube",
        cubeEffect: {
          slideShadows: true,
          shadow: true,
          shadowOffset: 100,
          shadowScale: 0.6
        },
        //分页器
        pagination: {
          el: ".swiper-pagination",
          clickable: true //点击原点可切换
        },
        //箭头实现切换效果
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      },
      swiperList: [
        {
          id: "42",
          image: "/imgs/slider/slide-1.jpg"
        },
        {
          id: "45",
          image: "/imgs/slider/slide-2.jpg"
        },
        {
          id: "46",
          image: "/imgs/slider/slide-3.jpg"
        },
        {
          id: "",
          image: "/imgs/slider/slide-4.jpg"
        },
        {
          id: "",
          image: "/imgs/slider/slide-5.jpg"
        }
      ],
      menuList: [
        [
          {
            id: 30,
            image: "/imgs/item-box-1.png",
            name: "小米CC9"
          },
          {
            id: 31,
            image: "/imgs/item-box-2.png",
            name: "小米8青春版"
          },
          {
            id: 32,
            image: "/imgs/item-box-3.jpg",
            name: "Redmi K20 Pro"
          },
          {
            id: 33,
            image: "/imgs/item-box-4.jpg",
            name: "移动4G专区"
          }
        ],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
      ],
      adsList: [
        {
          id: "33",
          image: "/imgs/ads/ads-1.png"
        },
        {
          id: "48",
          image: "/imgs/ads/ads-2.jpg"
        },
        {
          id: "45",
          image: "/imgs/ads/ads-3.png"
        },
        {
          id: "47",
          image: "/imgs/ads/ads-4.jpg"
        }
      ]
    };
  }
};
</script>
<style lang="scss">
@import "./../assets/scss/mixin.scss";
@import "./../assets/scss/config.scss";
.index {
  .swiper-box {
    .swiper-container {
      height: 451px;
      .swiper-button-prev {
        left: 274px;
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
    .nav-menu {
      position: absolute;
      z-index: 10;
      height: 451px;
      width: 264px;
      padding: 26px 0;
      box-sizing: border-box;
      background-color: #55585a91;
      .menu-wrap {
        .menu-item {
          height: 50px;
          line-height: 50px;
          position: relative;
          a {
            color: #ffffff;
            font-size: 16px;
            margin-left: 30px;
            display: inline-block;
            &:after {
              content: "";
              @include bgImg(10px, 15px, "/imgs/icon-arrow.png");
              position: absolute;
              top: 17.5px;
              right: 30px;
            }
          }
          &:hover {
            background-color: $colorA;
            .children {
              display: block;
            }
          }
          .children {
            display: none;
            width: 962px;
            position: absolute;
            top: -26px;
            left: 264px;
            background-color: $colorG;
            border: 1px solid $colorH;
            ul {
              display: flex;
              justify-content: space-between;
              height: 75px;
              li {
                height: 75px;
                line-height: 75px;
                flex: 1; //平均分布
                padding-left: 23px;
              }
              img {
                width: 42px;
                height: 35px;
                vertical-align: middle;
                margin-right: 15px;
              }
              a {
                display: inline-block;
                color: #333333;
                font-size: 14px;
              }
            }
          }
        }
      }
    }
  }
  .ads-box {
    @include flex();
    margin-top: 14px;
    margin-bottom: 31px;
    img {
      width: 294px;
      height: 166px;
      display: inline-block;
    }
  }
}
</style>
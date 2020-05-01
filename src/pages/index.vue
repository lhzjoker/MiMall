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
      <div class="banner">
        <a :href="'/#/product/' + banner.id">
          <img :src="banner.image" alt />
        </a>
      </div>
    </div>
    <div class="product-box">
      <div class="container">
        <h2>手机</h2>
        <div class="wraper">
          <div class="banner">
            <a href="'/#/product/35'">
              <img src="/imgs/mix-alpha.jpg" alt />
            </a>
          </div>
          <div class="list-box">
            <div class="list" v-for="(arr,i) in phoneList" :key="i">
              <div class="item" v-for="(item,j) in arr" :key="j">
                <span :class="{'new-pro':j%2==0}">新品</span>
                <div class="item-img">
                  <img :src="item.mainImage" />
                </div>
                <h3>{{item.name}}</h3>
                <div class="item-info">
                  <p>{{item.subtitle}}</p>
                </div>
                <div class="item-price">
                  <p @click="addCart(item.id)">{{item.price}}元</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <service-bar></service-bar>
    <modal title="友情提示" btnType="1" sureText="查看购物车"
     modalType="middle" :showModal="showModal"
     @submit="gotoCart" @cancel="showModal=false"
     >
      <template v-slot:body>
        <p>商品添加成功！</p>
      </template>
    </modal>
  </div>
</template>

<script>
import ServiceBar from "./../components/ServiceBar";
import Modal from "./../components/Modal";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
export default {
  name: "index",
  components: {
    Swiper,
    SwiperSlide,
    ServiceBar,
    Modal
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
      ],
      banner: {
        id: "30",
        image: "/imgs/banner-1.png"
      },
      phoneList: [],
      showModal: false
    };
  },
  methods: {
    init() {
      this.axios
        .get("/products", {
          params: {
            categoryId: "100012",
            pageSize: 14
          }
        })
        .then(res => {
          res.list = res.list.slice(6, 14);
          this.phoneList = [res.list.slice(0, 4), res.list.slice(4, 8)];
        });
    },
    addCart() {
      this.showModal = true;
      //这里需要登陆，完善登陆页面之后再设置
      // this.axios.post("/carts", {
      //   productId: id,
      //   selected: true
      // }).then(()=>{

      // }).catch(()=>{

      // });
    },
    gotoCart(){
      this.$router.push('/cart')
    }
  },
  mounted() {
    this.init();
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
      z-index: 5;
      height: 451px;
      width: 264px;
      padding: 26px 0;
      box-sizing: border-box;
      background-color: rgba(85, 88, 90, 0.48);
      // background-color: #55585a91;
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
              flex-direction: row;
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
  .banner {
    height: 170px;
    a {
      display: inline-block;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .product-box {
    width: 100%;
    background-color: #f5f5f5;
    padding-bottom: 30px;
    h2 {
      font-size: 22px;
      padding-bottom: 20px;
      padding-top: 20px;
      display: inline-block;
      color: #333333;
    }
    .wraper {
      height: 619px;
      display: flex;
      .banner {
        margin-right: 14px;
        a {
          width: 224px;
          height: 619px;
          img {
            display: inline-block;
            width: 100%;
            height: 100%;
          }
        }
      }
      .list-box {
        .list {
          @include flex();
          width: 986px;
          margin-bottom: 14px;
          &:last-child {
            margin-bottom: 0;
          }
          .item {
            height: 302px;
            width: 236px;
            background-color: #ffffff;
            text-align: center;
            span {
              display: inline-block;
              width: 67px;
              height: 24px;
              line-height: 24px;
              color: #ffffff;
              //设置不同情况不同样式
              &.new-pro {
                background-color: #7ecf68;
              }
              &.kill-pro {
                background-color: #e82626;
              }
            }
            .item-img {
              img {
                width: 100%;
                height: 195px;
                display: inline-block;
              }
            }
            .item-info {
              color: #999999;
              margin-bottom: 10px;
              margin-top: 6px;
            }
            .item-price {
              cursor: pointer;
              height: 30px;
              p {
                display: inline-block;
                color: #f20a0a;
                font-size: 14px;
                font-weight: bold;
                &:after {
                  @include bgImg(20px, 30px, "/imgs/icon-cart-hover.png");
                  margin-left: 5px;
                  vertical-align: middle;
                  content: "";
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
<template>
  <div class="detail">
    <product-params :title="product.name"></product-params>
    <div class="detail-body">
      <div class="container clearfix">
        <div class="swiper-box">
          <swiper :options="swiperOptions">
            <swiper-slide v-for="(item,index) in swiperList" :key="index">
              <img :src="item" alt />
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
        </div>
        <div class="content">
          <h2 class="item-title">{{product.name}}</h2>
          <p>
            相机全新升级 / 960帧超慢动作 / 手持超级夜景 / 全球首款双频GPS / 骁龙845处理器 / 红
            <br />外人脸解锁 / AI变焦双摄 / 三星 AMOLED 屏
          </p>
          <div class="delivery">小米自营</div>
          <div class="price">
            {{product.price}}
            <span class="del">1999元</span>
          </div>
          <div class="line"></div>
          <div class="addr">
            <div class="icon-addr"></div>
            <span>北京 北京市 朝阳区 安定门街道</span>
            <p>有现货</p>
          </div>
          <div class="item-version clearfix">
            <h2>选择版本</h2>
            <div class="phone fl" :class="{'checked':version==1}" @click="version=1">6GB+64GB 全网通</div>
            <div class="phone fr" :class="{'checked':version==2}" @click="version=2">4GB+64GB 移动4G</div>
          </div>
          <div class="item-color clearfix">
            <h2>选择颜色</h2>
            <div class="phone checked">
              <span class="color"></span>深空灰
            </div>
          </div>
          <div class="item-total">
            <div class="phone-info clearfix">
              <div class="fl">{{product.name}} {{version==1?'6GB+64GB 全网通':'4GB+64GB 移动4G'}} 深灰色</div>
              <div class="fr">{{product.price}}元</div>
            </div>
            <div class="phone-total">总计：{{product.price}}元</div>
          </div>
          <div class="btn" @click="addCart">加入购物车</div>
        </div>
      </div>
    </div>
    <modal
      title="友情提示"
      btnType="1"
      sureText="查看购物车"
      modalType="middle"
      :showModal="showModal"
      @submit="gotoCart"
      @cancel="showModal=false"
    >
      <template v-slot:body>
        <p>商品添加成功！</p>
      </template>
    </modal>
    <service-bar></service-bar>
  </div>
</template>

<script>
import ProductParams from "./../components/ProductParams.vue";
import ServiceBar from "./../components/ServiceBar.vue";
import Modal from "./../components/Modal.vue";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
export default {
  name: "detail",
  components: {
    Swiper,
    SwiperSlide,
    ServiceBar,
    ProductParams,
    Modal
  },

  data() {
    return {
      showModal: false,
      id: this.$route.params.id, //获取商品id
      version: 1, //商品版本切换
      product: {},
      swiperList: [
        "/imgs/detail/phone-1.jpg",
        "/imgs/detail/phone-2.jpg",
        "/imgs/detail/phone-3.jpg",
        "/imgs/detail/phone-4.jpg"
      ],
      swiperOptions: {
        //环绕
        loop: true,
        //自动切换
        autoplay: true,
        //分页器
        pagination: {
          el: ".swiper-pagination",
          clickable: true //点击原点可切换
        }
      }
    };
  },
  methods: {
    getUserInfo() {
      this.axios.get(`/products/${this.id}`).then(res => {
        this.product = res;
      });
    },
    addCart() {
      this.axios
        .post("/carts", {
          productId: this.id,
          selected: true
        })
        .then((res = { cartProductVoList: 0 }) => {
          this.$store.dispatch("saveCartCount", res.cartTotalQuantity);     //实时更新购物车数量
          this.showModal=true
        });
    },
    gotoCart() {
      this.$router.push("/cart");
    }
  },
  mounted() {
    this.getUserInfo();
  }
};
</script>
<style lang="scss">
@import "./../assets/scss/config.scss";
@import "./../assets/scss/mixin.scss";
@import "./../assets/scss/base.scss";
.detail {
  .detail-body {
    .swiper-box {
      float: left;
      height: 617px;
      margin-top: 5px;
      width: 642px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .content {
      float: right;
      width: 584px;
      height: 870px;
      h2 {
        font-size: 28px;
        height: 64px;
        line-height: 64px;
      }
      p {
        font-size: 14px;
        height: 36px;
      }
      .delivery {
        font-size: 16px;
        height: 40px;
        line-height: 40px;
        color: $colorA;
        margin-top: 20px;
      }
      .price {
        font-size: 20px;
        color: $colorA;
        .del {
          text-decoration: line-through; //加一条线，划掉
          font-size: 16px;
          color: #999999;
          margin-left: 10px;
        }
      }
      .line {
        border-top: 1px solid #e5e5e5;
        margin-top: 25px;
        margin-bottom: 28px;
      }
      .addr {
        width: 100%;
        height: 108px;
        background-color: #fafafa;
        border: 1px solid #e5e5e5;
        padding-top: 31px;
        padding-left: 70px;
        font-size: 14px;
        position: relative;
        box-sizing: border-box;
        margin-bottom: 30px;
        .icon-addr {
          @include positionImg(
            absolute,
            30px,
            515px,
            20px,
            20px,
            "/imgs/detail/icon-loc.png"
          );
          margin-right: 10px;
        }
        span {
          color: #999999;
        }
        p {
          font-size: 14px;
          color: $colorA;
          margin-top: 10px;
        }
      }
      .item-version,
      .item-color {
        h2 {
          font-size: 20px;
        }
        .phone {
          width: 287px;
          height: 50px;
          line-height: 50px;
          font-size: 16px;
          color: #333333;
          border: 1px solid #e5e5e5;
          text-align: center;
          cursor: pointer;
          box-sizing: border-box;
          &.checked {
            border: 1px solid #ff6600;
            color: $colorA;
          }
          .color {
            width: 14px;
            height: 14px;
            background-color: #666666;
            display: inline-block;
            margin-right: 5px;
            margin-top: 3px;
          }
        }
      }
      .item-total {
        background-color: #fafafa;
        height: 108px;
        font-size: 14px;
        padding: 24px 33px 29px 30px;
        box-sizing: border-box;
        margin-top: 40px;
        .phone-total {
          color: $colorA;
          font-size: 24px;
          margin-top: 18px;
        }
      }
      .btn {
        width: 287px;
        height: 50px;
        line-height: 50px;
        font-size: 16px;
        margin-top: 30px;
      }
    }
  }
}
</style>
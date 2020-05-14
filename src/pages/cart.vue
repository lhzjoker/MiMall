<template>
  <div>
    <order-header title="我的购物车">
      <template v-slot:tips>
        <span>温馨提示：产品是否购买成功，以最终下单为准哦，请尽快结算</span>
      </template>
    </order-header>
    <div class="wrapper">
      <div class="container">
        <div class="cart-box">
          <ul class="item-head">
            <li class="col-1">
              <span class="checkbox" :class="{'checked':allChecked}" @click="toggleAll"></span>全选
            </li>
            <li class="col-3">商品价格</li>
            <li class="col-1">单价</li>
            <li class="col-2">数量</li>
            <li class="col-1">小计</li>
            <li class="col-1">操作</li>
          </ul>
          <ul class="item-list">
            <li class="item" v-for="(item,index) in list" :key="index">
              <div class="item-checked">
                <span
                  class="checkbox"
                  :class="{'checked':item.productSelected}"
                  @click="updateCart(item)"
                ></span>
              </div>
              <div class="item-name">
                <img v-lazy="item.productMainImage" alt />
                <span>{{item.productName + ',' + item.productSubtitle}}</span>
              </div>
              <div class="item-price">{{item.productPrice}}</div>
              <div class="item-num">
                <div class="num-box">
                  <a href="javascript:;" @click="updateCart(item,'-')">-</a>
                  <span>{{item.quantity}}</span>
                  <a href="javascript:;" @click="updateCart(item,'+')">+</a>
                </div>
              </div>
              <div class="item-total">{{item.productTotalPrice}}</div>
              <div class="item-del">
                <img src="/imgs/icon-close.png" alt @click="show(item)" />
              </div>
            </li>
          </ul>
        </div>
        <div class="order-wrap clearfix">
          <div class="tips fl">
            <a href="/#/index">继续购物</a>
            共
            <span>{{list.length}}</span>件商品，已选择
            <span>{{checkedNum}}</span>件
          </div>
          <div class="total fr">
            合计：
            <span>{{cartTotalPrice}}元</span>
            <a href="javascript:;" class="btn" @click="orderConfirm">去结算</a>
          </div>
        </div>
      </div>
    </div>
    <service-bar></service-bar>
    <nav-footer></nav-footer>
    <modal
      title="友情提示"
      btnType="3"
      modalType="middle"
      :showModal="showModal"
      @submit="sureDelete"
      @cancel="showModal=false"
    >
      <template v-slot:body>
        <p>是否确定删除购物车</p>
      </template>
    </modal>
  </div>
</template>

<script>
import OrderHeader from "./../components/OrderHeader";
import NavFooter from "./../components/NavFooter";
import ServiceBar from "./../components/ServiceBar";
import Modal from "./../components/Modal";
export default {
  name: "cart",
  components: {
    OrderHeader,
    NavFooter,
    ServiceBar,
    Modal
  },
  data() {
    return {
      list: [], //商品列表
      allChecked: false, //是否全选
      cartTotalPrice: 0,
      checkedNum: 0,
      showModal: false,
      item: {}
    };
  },
  methods: {
    //页面渲染数据
    renderData(res) {
      this.list = res.cartProductVoList;
      this.allChecked = res.selectedAll;
      this.cartTotalPrice = res.cartTotalPrice;
      this.checkedNum = this.list.filter(item => item.productSelected).length; //返回选中的商品数量
    },
    //获取购物车列表
    getCartList() {
      this.axios.get("/carts").then(res => {
        this.renderData(res);
      });
    },
    //全选
    toggleAll() {
      let url = this.allChecked ? "/carts/unSelectAll" : "/carts/selectAll";
      this.axios.put(url).then(res => {
        this.renderData(res);
      });
    },
    //更新购物车
    updateCart(item, type) {
      let quantity = item.quantity;
      let selected = item.productSelected;
      if (type == "+") {
        if (quantity >= item.productStock) {
          this.$message.warning("库存不足");
          return;
        }
        ++quantity;
      } else if (type == "-") {
        if (quantity == 1) {
          this.$message.warning("商品数量至少保留一件");
          return;
        }
        --quantity;
      } else {
        selected = !item.productSelected;
      }
      this.axios
        .put(`/carts/${item.productId}`, {
          quantity,
          selected
        })
        .then(res => {
          this.renderData(res);
        });
    },
    //删除购物车某个产品
    deleteCart(item) {
      this.axios.delete(`/carts/${item.productId}`).then(res => {
        this.renderData(res);
      });
    },
    //弹出modal，是否确认删除
    show(item) {
      this.showModal = true;
      this.item = item;
    },
    //确认删除
    sureDelete() {
      if (this.item) {
        this.deleteCart(this.item);
      }
      this.showModal =  false
      this.$message.success('删除成功')
    },
    //跳转的结算页面
    orderConfirm() {
      let isCheck = this.list.every(item => !item.productSelected); //返回的是Boolean值，如果全部没有选中返回true
      if (isCheck) {
        this.$message.warning("请选择至少一件商品");
      } else {
        this.$router.push("/order/confirm");
      }
    }
  },
  mounted() {
    if(this.$cookie.get('userId')){
      this.getCartList();
    }else{
      this.$router.push('/login')
    }
    
  }
};
</script>

<style lang="scss">
@import "./../assets/scss/config.scss";
@import "./../assets/scss/mixin.scss";
.wrapper {
  background-color: #f5f5f5;
  padding-top: 30px;
  padding-bottom: 114px;
  .cart-box {
    background-color: #ffffff;
    font-size: 14px;
    color: #999999;
    text-align: center;
    .checkbox {
      display: inline-block;
      width: 22px;
      height: 22px;
      border: 1px solid #e5e5e5;
      cursor: pointer;
      vertical-align: middle;
      margin-right: 17px;
      &.checked {
        background: url("/imgs/icon-gou.png") $colorA no-repeat center;
        border: none;
        background-size: 16px 12px;
      }
    }
    .item-head {
      display: flex;
      height: 79px;
      line-height: 79px;
      .col-1 {
        flex: 1;
      }
      .col-2 {
        flex: 2;
      }
      .col-3 {
        flex: 3;
      }
    }
    .item-list {
      .item {
        display: flex;
        height: 126px;
        border-top: 1px solid #e5e5e5;
        font-size: 16px;
        align-items: center;
        .item-checked {
          flex: 1;
        }
        .item-name {
          flex: 3;
          align-items: center;
          display: flex;
          font-size: 18px;
          color: #333333;
          img {
            width: 80px;
            height: 80px;
            vertical-align: middle;
          }
          span {
            margin-left: 30px;
          }
        }
        .item-price {
          flex: 1;
          color: #333333;
        }
        .item-num {
          flex: 2;
          color: #333333;
          .num-box {
            display: inline-block;
            width: 150px;
            height: 40px;
            line-height: 40px;
            border: 1px solid #e5e5e5;
            a {
              color: #333333;
              width: 50px;
              height: 100%;
              display: inline-block;
            }
            span {
              color: #333333;
              width: 50px;
              height: 100%;
              display: inline-block;
            }
          }
        }

        .item-total {
          flex: 1;
          color: $colorA;
        }
        .item-del {
          flex: 1;
          img {
            height: 12px;
            display: inline-block;
            cursor: pointer;
          }
        }
      }
    }
  }
  .order-wrap {
    font-size: 14px;
    color: #666666;
    height: 50px;
    line-height: 50px;
    margin-top: 30px;
    .tips {
      margin-left: 29px;
      a {
        margin-right: 37px;
        color: #666666;
      }
      span {
        color: $colorA;
        margin: 0 5px;
      }
    }
    .total {
      color: $colorA;
      span {
        font-size: 24px;
      }
      a {
        width: 204px;
        height: 50px;
        line-height: 50px;
        margin-left: 30px;
      }
    }
  }
}
</style>
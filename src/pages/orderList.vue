<template>
  <div class="order-list">
    <order-header title="订单列表">
      <template v-slot:tips>
        <span>请谨防钓鱼链接或诈骗电话，了解更多></span>
      </template>
    </order-header>
    <div class="container">
      <div class="wrap" v-for="(order,index) in list" :key="index">
        <div class="header">
          <div class="title">
            {{order.createTime}}
            <span>|</span>
            {{order.receiverName}}
            <span>|</span>
            订单号：{{order.orderNo}}
            <span>|</span>
            {{order.paymentTypeDesc}}
          </div>
          <div class="pay">
            应付金额：
            <span>{{order.payment}}</span>
            元
          </div>
        </div>
        <div class="order-content clearfix">
          <div class="good-box fl">
            <div class="good-list" v-for="(item,i) in order.orderItemVoList" :key="i">
              <div class="good-img">
                <img v-lazy="item.productImage" alt />
              </div>
              <div class="good-name">
                <div class="p-name">{{item.productName}}</div>
                <div class="p-money">{{item.totalPrice + 'X' + item.quantity}}元</div>
              </div>
            </div>
          </div>
          <div class="good-state fr" v-if="order.status == 20">
            <a href="javascript:;">{{order.statusDesc}}</a>
          </div>
          <div class="good-state fr" v-else>
            <a href="javascript:;" @click="goPay(order.orderNo)">{{order.statusDesc}}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import OrderHeader from "./../components/OrderHeader";
export default {
  name: "order-list",
  components: {
    OrderHeader
  },
  data() {
    return {
      list: [], //订单列表
      price: 0 //订单价格
    };
  },
  mounted() {
    this.getOrderList();
  },
  methods: {
    getOrderList() {
      this.axios.get("/orders").then(res => {
        this.list = res.list;
      });
    }
  }
};
</script>

<style lang="scss">
@import "./../assets/scss/config.scss";
@import "./../assets/scss/mixin.scss";
.order-list {
  background-color: #f5f5f5;
  padding-bottom: 50px;
  .wrap {
    margin-top: 30px;
    border: 1px solid #d7d7d7;
    .header {
      background-color: #fffaf7;
      font-size: 16px;
      color: #666666;
      display: flex;
      justify-content: space-between;
      height: 80px;
      line-height: 80px;
      padding: 0 50px;
      .title {
        span {
          padding: 0 10px;
        }
      }
      .pay {
        span {
          color: #333333;
          font-size: 26px;
        }
      }
    }
    .order-content {
        background-color: #ffffff;
      padding: 0 43px;
      .good-box {
        width: 88%;
        .good-list {
          display: flex;
          align-items: center;
          height: 145px;
          .good-img {
            width: 112px;
            img {
              width: 100%;
            }
          }
          .good-name {
            font-size: 20px;
            color: $colorB;
          }
        }
      }
      .good-state {
        height: 145px;
        line-height: 145px;
        font-size: 20px;
        color: $colorA;
        a {
          color: $colorA;
        }
      }
    }
  }
}
</style>
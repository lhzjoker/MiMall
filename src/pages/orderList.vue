<template>
  <div class="order-list">
    <order-header title="订单列表">
      <template v-slot:tips>
        <span>请谨防钓鱼链接或诈骗电话，了解更多></span>
      </template>
    </order-header>
    <div class="container">
      <loading v-if="loading"></loading>
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
      <no-data v-if="!loading && list.length == 0"></no-data>
      <el-pagination
        class="pagination"
        :pageSize="pageSize"
        background
        layout="prev, pager, next"
        :total="total"
        @current-change="handelchange"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
import OrderHeader from "./../components/OrderHeader";
import Loading from "./../components/Loading";
import NoData from "./../components/NoData";
import { Pagination } from "element-ui";
import infiniteScroll from "vue-infinite-scroll";
export default {
  name: "order-list",
  components: {
    OrderHeader,
    Loading,
    NoData,
    [Pagination.name]: Pagination
  },
  directives: { infiniteScroll },
  data() {
    return {
      list: [], //订单列表
      loading: false, //是否展示loading页面
      total: 0, //返回的总数据条数
      pageSize: 5, //每一页的条数
      pageNum: 1
    };
  },
  mounted() {
    this.getOrderList();
  },
  methods: {
    getOrderList() {
      this.loading = true;
      this.axios
        .get("/orders", {
          params: {
            pageSize: 5,
            pageNum: this.pageNum
          }
        })
        .then(res => {
          this.loading = false;
          this.list = res.list;
          this.total = res.total;
        })
        .catch(() => {
          this.loading = false;
        });
    },
    goPay(orderNo) {
      //三种路由传参方式
      // this.$router.push('/order/pay')
      /*this.$router.push({
        name: 'order-pay',    //路由的name
        query:{
          orderNo
        }
      })*/
      this.$router.push({
        path: "/order/pay", //路径地址
        query: {
          orderNo
        }
      });
    },
    //点击触发事件，会有一个回调参数，这个回调参数就是当前的页数
    handelchange(pageNum) {
      this.pageNum = pageNum;
      this.getOrderList();
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
  .pagination {
    text-align: right;
    margin-top: 30px;
  }
  .el-pagination.is-background .el-pager li:not(.disabled).active {
    background-color: $colorA;
    color: #fff;
  }
}
</style>
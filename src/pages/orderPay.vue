<template>
  <div class="order-pay">
    <order-header title="订单支付">
      <template v-slot:tips>
        <span>请谨防钓鱼链接或诈骗电话，了解更多</span>
      </template>
    </order-header>
    <scan-pay-code v-if="showPay" :img="payImg" @close="closeModal"></scan-pay-code>
    <modal title="支付确认" :showModal="showPayModal" btnType="3" sureText="查看订单" cancelText="未支付" @cancel="showPayModal=false" @submit="gotoOrderList">
        <template v-slot:body>
            <span>您确认是否完成支付？</span>
        </template>
    </modal>
    <div class="container">
      <div class="order-wrap">
        <div class="item-order">
          <div class="icon-success"></div>
          <div class="order-info">
            <h2>订单提交成功！去付款咯～</h2>
            <p>
              请在
              <span>30分钟</span>内完成支付, 超时后将取消订单
            </p>
            <p>收货信息：{{addrinfo}}</p>
          </div>
          <div class="order-total">
            <p>
              应付总额：
              <span>{{totalPrice}}</span>元
            </p>
            <p>
              订单详情
              <em class="icon-down" :class="{'up':showDetail}" @click="showDetail=!showDetail"></em>
            </p>
          </div>
        </div>
        <div class="item-detail" v-if="showDetail">
          <div class="item">
            <div class="detail-title">订单号：</div>
            <div class="detail-info">{{orderNo}}</div>
          </div>
          <div class="item">
            <div class="detail-title">收货信息：</div>
            <div class="detail-info">{{addrinfo}}</div>
          </div>
          <div class="item">
            <div class="detail-title">商品名称：</div>
            <div class="detail-info">
              <ul>
                <li v-for="(item,index) in goodsdetail" :key="index">
                  <img v-lazy="item.productImage" alt />
                  {{item.productName}}
                </li>
              </ul>
            </div>
          </div>
          <div class="item">
            <div class="detail-title">发票信息：</div>
            <div class="detail-info">电子发票 个人</div>
          </div>
        </div>
      </div>
      <div class="pays">
        <div class="title">
          <h2>选择以下支付方式付款</h2>
        </div>
        <div class="pay-ways">
          <h2>支付平台</h2>
          <div class="platform">
            <div class="alipay" :class="{'checked':payment == 1}" @click="paySubmit(1)"></div>
            <div class="weixin" :class="{'checked':payment == 2}" @click="paySubmit(2)"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import OrderHeader from "./../components/OrderHeader";
import ScanPayCode from "./../components/ScanPayCode";
import Modal from "./../components/Modal";
import QRCode from "qrcode";
export default {
  name: "order-pay",
  data() {
    return {
      orderNo: this.$route.query.orderNo, //订单号
      addrinfo: {}, //收货人详细地址
      goodsdetail: [], //商品信息
      totalPrice: 0, //商品总价
      showDetail: false, //是否展示商品细节
      payment: 0, //支付方式，1为支付宝，2为微信
      showPay: false, //是否展示微信弹框
      payImg: "", //微信二维码
      showPayModal: false,  //是否展示支付确认弹框
      T: ''     //当前支付状态
    };
  },
  methods: {
    getOrderDetail() {
      this.axios.get(`/orders/${this.orderNo}`).then(res => {
        let item = res.shippingVo;
        this.goodsdetail = res.orderItemVoList;
        this.addrinfo = `${item.receiverName} ${item.receiverMobile} ${item.receiverProvince} ${item.receiverCity} ${item.receiverDistrict} ${item.receiverAddress}`;
        this.totalPrice = res.payment;
      });
    },
    paySubmit(payment) {
      //payment等于1就是支付宝支付，2就是微信支付
      if (payment == 1) {
        this.payment = 1;
        window.open("/#/order/alipay?orderId=" + this.orderNo, "_blank"); //携带订单号跳转到支付宝支付页面（新页面）
      } else if (payment == 2) {
        this.payment = 2;
        this.axios
          .post("/pay", {
            orderId: this.orderNo,
            orderName: "Vue高仿小米商城",
            amount: 0.01,
            payType: 2
          })
          .then(res => {
              //通过插件生成微信支付二维码
            QRCode.toDataURL(res.content)
              .then(url => {
                this.showPay = true;
                this.payImg = url;
                this.loopOrderState()
              })
              .catch(() => {
                this.$message.error('二维码生成失败，请稍后重试')
              });
          });
      }
    },
    closeModal(){
        this.showPay = false
        this.showPayModal = true
        clearInterval(this.T)
    },
    gotoOrderList(){
        this.$router.push('/order/list')
    },
    //轮询当前支付状态
    loopOrderState(){
      //setInterval和setTimeout不一样，这个只要不关闭会一直轮询，setTimeout则只会执行一次
      this.T = setInterval(()=>{
        this.axios.get(`/orders/${this.orderNo}`).then((res)=>{
        if(res.status == 20){
          clearInterval(this.T)   //关闭轮询
          this.gotoOrderList()
        }
      })
      },1000)
    }
  },
  mounted() {
    this.getOrderDetail();
  },
  components: {
    OrderHeader,
    ScanPayCode,
    Modal
  }
};
</script>
<style lang="scss">
@import "./../assets/scss/config.scss";
.order-pay {
  background-color: #f5f5f5;
  padding-bottom: 60px;
  .order-wrap {
    margin-top: 30px;
    background-color: #ffffff;
    padding: 64px 50px;
    font-size: 14px;
    .item-order {
      padding-bottom: 40px;
      display: flex;
      align-items: center;
      .icon-success {
        width: 90px;
        height: 90px;
        display: inline-block;
        margin-right: 30px;
        background: url("/imgs/icon-gou.png") #80c58a no-repeat center;
        background-size: 60px;
        border-radius: 50%;
      }
      .order-info {
        margin-right: 300px;
        h2 {
          font-size: 24px;
          color: #333333;
          margin-bottom: 20px;
        }
        p {
          color: #666666;
          span {
            color: #ff6700;
          }
        }
      }
      .order-total {
        p {
          margin-bottom: 30px;
          &:last-child {
            margin-bottom: 0;
          }
          span {
            color: $colorA;
            font-size: 28px;
          }
          .icon-down {
            margin-left: 10px;
            width: 14px;
            height: 10px;
            display: inline-block;
            background: url("/imgs/icon-down.png") no-repeat center;
            background-size: contain;
            cursor: pointer;
            transition: all 0.5s;
            &.up {
              transform: rotate(180deg); //旋转180度
            }
          }
        }
      }
    }
    .item-detail {
      padding-left: 120px;
      padding-top: 50px;
      border-top: 1px solid #d7d7d7;
      .item {
        display: flex;
        margin-bottom: 20px;
        .detail-title {
          width: 100px;
        }
        .detail-info {
          display: inline-block;
          img {
            width: 30px;
            height: 30px;
            vertical-align: middle;
          }
        }
      }
    }
  }
  .pays {
    margin-top: 30px;
    background-color: #ffffff;
    padding: 30px 64px;
    .title {
      padding-bottom: 30px;
      border-bottom: 1px solid #d7d7d7;
      h2 {
        font-size: 20px;
        font-weight: 200;
      }
    }
    .pay-ways {
      margin-top: 30px;
      h2 {
        font-size: 18px;
        font-weight: 200;
      }
      .platform {
        display: flex;
        margin-top: 20px;
        .alipay,
        .weixin {
          width: 190px;
          height: 66px;
          border: 1px solid #d7d7d7;
          cursor: pointer;
          display: inline-block;
          &.checked {
            border: 1px solid #ff6700;
          }
        }
        .alipay {
          background: url("/imgs/pay/icon-ali.png") no-repeat center;
          background-size: 55%;
          margin-right: 20px;
        }
        .weixin {
          background: url("/imgs/pay/icon-wechat.png") no-repeat center;
          background-size: 60%;
        }
      }
    }
  }
}
</style>
<template>
  <div class="order-confirm">
    <order-header title="订单确认">
      <template v-slot:tips>
        <span>请认真填写收货地址</span>
      </template>
    </order-header>
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      style="position: absolute; width: 0px; height: 0px; overflow: hidden;"
    >
      <defs>
        <symbol id="icon-add" viewBox="0 0 31 32">
          <title>add</title>
          <path
            d="M30.745 15.152h-14.382v-14.596c0-0.308-0.243-0.557-0.543-0.557s-0.543 0.249-0.543 0.557v14.596h-14.665c-0.3 0-0.543 0.249-0.543 0.557s0.243 0.557 0.543 0.557h14.665v15.177c0 0.307 0.243 0.557 0.543 0.557s0.543-0.249 0.543-0.557v-15.177h14.382c0.3 0 0.543-0.249 0.543-0.557s-0.243-0.557-0.543-0.557z"
            class="path1"
          />
        </symbol>
        <symbol id="icon-edit" viewBox="0 0 32 32">
          <title>edit</title>
          <path
            d="M28.287 8.51l-4.805-4.806 0.831-0.831c0.472-0.472 1.086-0.777 1.564-0.777 0.248 0 0.452 0.082 0.622 0.253l3.143 3.144c0.539 0.54 0.133 1.529-0.524 2.186l-0.831 0.831zM26.805 9.992l-1.138 1.138-4.805-4.806 1.138-1.138 4.805 4.806zM24.186 12.612l-14.758 14.762-4.805-4.806 14.758-14.762 4.805 4.806zM7.379 28.288l-4.892 1.224 1.223-4.894 3.669 3.67zM31.123 4.011l-3.143-3.144c-0.567-0.567-1.294-0.867-2.103-0.867-1.036 0-2.174 0.52-3.045 1.391l-20.429 20.436c-0.135 0.134-0.23 0.302-0.276 0.487l-2.095 8.385c-0.089 0.355 0.017 0.736 0.276 0.995 0.198 0.198 0.461 0.307 0.741 0.307 0.085 0 0.171-0.010 0.254-0.031l8.381-2.096c0.185-0.047 0.354-0.142 0.487-0.276l20.43-20.436c1.409-1.41 2.042-3.632 0.524-5.15v0z"
            class="path1"
          />
        </symbol>
        <symbol id="icon-del" viewBox="0 0 32 32">
          <title>delete</title>
          <path
            d="M11.355 4.129v-2.065h9.29v2.065h-9.29zM6.194 29.935v-23.742h19.613v23.742h-19.613zM30.968 4.129h-8.258v-3.097c0-0.569-0.463-1.032-1.032-1.032h-11.355c-0.569 0-1.032 0.463-1.032 1.032v3.097h-8.258c-0.569 0-1.032 0.463-1.032 1.032s0.463 1.032 1.032 1.032h3.097v24.774c0 0.569 0.463 1.032 1.032 1.032h21.677c0.569 0 1.032-0.463 1.032-1.032v-24.774h3.097c0.569 0 1.032-0.463 1.032-1.032s-0.463-1.032-1.032-1.032v0z"
            class="path1"
          />
          <path
            d="M10.323 9.806c-0.569 0-1.032 0.463-1.032 1.032v14.452c0 0.569 0.463 1.032 1.032 1.032s1.032-0.463 1.032-1.032v-14.452c0-0.569-0.463-1.032-1.032-1.032z"
            class="path2"
          />
          <path
            d="M16 9.806c-0.569 0-1.032 0.463-1.032 1.032v14.452c0 0.569 0.463 1.032 1.032 1.032s1.032-0.463 1.032-1.032v-14.452c0-0.569-0.463-1.032-1.032-1.032z"
            class="path3"
          />
          <path
            d="M21.677 9.806c-0.569 0-1.032 0.463-1.032 1.032v14.452c0 0.569 0.463 1.032 1.032 1.032s1.032-0.463 1.032-1.032v-14.452c0-0.569-0.463-1.032-1.032-1.032z"
            class="path4"
          />
        </symbol>
      </defs>
    </svg>
    <div class="wrapper">
      <div class="container">
        <div class="order-box">
          <div class="item-addr">
            <h2 class="addr-title">收获地址</h2>
            <div class="addr-list clearfix">
              <div
                class="addr-info fl"
                :class="{ 'checked' : index == checkindex}"
                @click="checkindex = index"
                v-for="(item,index) in list"
                :key="index"
              >
                <h2>{{item.receiverName}}</h2>
                <div class="phone">{{item.receiverMobile}}</div>
                <div
                  class="street"
                >{{item.receiverProvince + ' ' + item.receiverCity + ' ' + item.receiverDistrict + ' ' + item.receiverAddress}}</div>
                <div class="actions">
                  <a href="javascript:;" class="fl" @click="delAddr(item)">
                    <svg class="icon">
                      <use xlink:href="#icon-del" />
                    </svg>
                  </a>
                  <a href="javascript:;" class="fr" @click="editAddr(item)">
                    <svg class="icon">
                      <use xlink:href="#icon-edit" />
                    </svg>
                  </a>
                </div>
              </div>
              <div class="add-addr fl" @click="addAddr()">
                <div class="icon-addr"></div>
                <div>添加收获地址</div>
              </div>
            </div>
          </div>
          <div class="item-goods">
            <div class="goods-title">商品</div>
            <ul>
              <li v-for="(item,index) in cartList" :key="index">
                <div class="good">
                  <div class="good-name">
                    <img :src="item.productMainImage" alt />
                    <span>{{item.productName+ ' ' + item.productSubtitle}}</span>
                  </div>
                  <div class="good-price">{{item.productPrice}}元x{{item.quantity}}</div>
                  <div class="good-total">{{item.productTotalPrice}}元</div>
                </div>
              </li>
            </ul>
          </div>
          <div class="item-shipping">
            <h2>配送方式</h2>
            <span>包邮</span>
          </div>
          <div class="item-invoice">
            <h2>发票</h2>
            <span>电子发票 个人</span>
          </div>
          <div class="detail">
            <div class="item">
              <span class="item-name">商品件数：</span>
              <span class="item-val">{{count}}件</span>
            </div>
            <div class="item">
              <span class="item-name">商品总价：</span>
              <span class="item-val">{{cartTotalPrice}}元</span>
            </div>
            <div class="item">
              <span class="item-name">优惠活动：</span>
              <span class="item-val">0元</span>
            </div>
            <div class="item">
              <span class="item-name">运费：</span>
              <span class="item-val">0元</span>
            </div>
            <div class="item-total">
              <span class="item-name">应付总额：</span>
              <span class="item-val">{{cartTotalPrice}}元</span>
            </div>
          </div>
          <div class="btn-group">
            <div class="btn-large btn-default" @click="backtoCart">返回购物车</div>
            <div class="btn-large btn" @click="orderConfirm">去结算</div>
          </div>
        </div>
      </div>
    </div>
    <modal
      title="删除订单"
      btnType="3"
      :showModal="showdelModal"
      @cancel="showdelModal=false"
      @submit="submitAddr"
    >
      <template v-slot:body>
        <span>您确认要删除此地址吗？</span>
      </template>
    </modal>
    <modal
      title="编辑确认"
      btnType="3"
      :showModal="showEditModal"
      @cancel="showEditModal=false"
      @submit="submitAddr"
    >
      <template v-slot:body>
        <div class="edit-wrap">
          <div class="item">
            <input type="text" class="input" placeholder="姓名" v-model="checkItem.receiverName" />
            <input type="text" class="input" placeholder="手机号" v-model="checkItem.receiverMobile" />
          </div>
          <div class="item">
            <select name="province" v-model="checkItem.receiverProvince" id>
              <option value="湖南省">湖南省</option>
              <option value="湖北省">湖北省</option>
              <option value="广东省">广东省</option>
            </select>
            <select name="city" v-model="checkItem.receiverCity" id>
              <option value="湖南省">长沙市</option>
              <option value="湖北省">武汉市</option>
              <option value="广东省">深圳市</option>
            </select>
            <select name="district" v-model="checkItem.receiverDistrict" id>
              <option value="湖南省">岳麓区</option>
              <option value="湖北省">武昌区</option>
              <option value="广东省">福田区</option>
            </select>
          </div>
          <div class="item">
            <textarea name="street" v-model="checkItem.receiverAddress" id></textarea>
          </div>
          <div class="item">
            <input type="text" class="input" placeholder="邮编" v-model="checkItem.receiverZip" />
          </div>
        </div>
      </template>
    </modal>
  </div>
</template>

<script>
import OrderHeader from "./../components/OrderHeader";
import Modal from "./../components/Modal";
export default {
  name: "order-confirm",
  components: {
    OrderHeader,
    Modal
  },
  data() {
    return {
      list: [], //收货地址列表
      cartList: [], //购物车中需要结算的商品列表
      cartTotalPrice: 0, //商品总金额
      count: 0, //结算商品的总数量
      checkindex: 0, //选中地址时的索引
      showdelModal: false, //是否展示删除弹框
      showEditModal: false, //是否展示编辑弹框或者新增弹框
      checkItem: {}, //选中的地址
      userAction: "" //0：新增  1 :编辑 2：删除
    };
  },
  methods: {
    getCartList() {
      this.axios.get("/carts").then(res => {
        //获取购物车选中的商品
        this.cartList = res.cartProductVoList.filter(
          item => item.productSelected
        );
        //获取购物车选中的商品的数量
        this.cartList.map(item => {
          this.count += item.quantity;
        });
        this.cartTotalPrice = res.cartTotalPrice;
      });
    },
    getaddrList() {
      this.axios.get("/shippings").then(res => {
        this.list = res.list;
      });
    },
    backtoCart() {
      this.$router.push("/cart");
    },
    //订单提交
    orderConfirm(){
      let item = this.list[this.checkindex]
      if(!item){
        this.$message.error('请选择一个收货地址')
        return;
      }
      this.axios.post('/orders',{
        shippingId:item.id
      }).then((res)=>{
        //携带参数跳转到订单支付页面
        this.$router.push({
          path:'/order/pay',
          query:{
            orderNo : res.orderNo
          }
        })
      })
    },
    delAddr(item) {
      this.showdelModal = true;
      this.checkItem = item;
      this.userAction = 2;
    },
    editAddr(item) {
      this.showEditModal = true;
      this.checkItem = item;
      this.userAction = 1;
    },
    addAddr() {
      this.showEditModal = true;
      this.checkItem = {};
      this.userAction = 0;
    },
    closeModal() {
      this.showdelModal = false;
      this.showEditModal = false;
      this.checkItem = {};
      this.userAction = "";
    },
    submitAddr() {
      let { checkItem, userAction } = this;
      let method, url, params;
      if (userAction == 0) {
        method = "post";
        url = "/shippings";
      } else if (userAction == 1) {
        method = "put";
        url = `/shippings/${checkItem.id}`;
      } else {
        method = "delete";
        url = `/shippings/${checkItem.id}`;
      }
      if (userAction == 0 || userAction == 1) {
        let errMsg = '';
        let {
          receiverName,
          receiverPhone,
          receiverMobile,
          receiverProvince,
          receiverCity,
          receiverDistrict,
          receiverAddress,
          receiverZip
        } = checkItem;
        if (!receiverName) {
          errMsg = "请输入收获人名称";
        } else if (!receiverMobile || !/\d{11}/.test(receiverMobile)) {
          errMsg = "请输入正确的手机号码";
        } else if (!receiverProvince) {
          errMsg = "请输入省份";
        } else if (!receiverCity) {
          errMsg = "请输入城市";
        } else if (!receiverDistrict) {
          errMsg = "请输入地区";
        } else if (!receiverAddress) {
          errMsg = "请输入详细的地址";
        } else if (!/\d{6}/.test(receiverZip)) {
          errMsg = "请输入正确的邮编";
        }
        if (errMsg) {
          this.$message.error(errMsg);
          return;
        }
        params = {
          receiverName,
          receiverPhone,
          receiverMobile,
          receiverProvince,
          receiverCity,
          receiverDistrict,
          receiverAddress,
          receiverZip
        };
      }

      this.axios[method](url, params).then(() => {
        this.closeModal();
        this.getaddrList();   //重新获取地址列表
        this.$message.success("操作成功");
      });
    }
  },
  mounted() {
    this.getCartList();
    this.getaddrList();
  }
};
</script>
<style lang="scss">
@import "./../assets/scss/mixin.scss";
@import "./../assets/scss/config.scss";
.order-confirm {
  .wrapper {
    background-color: #f5f5f5;
    .order-box {
      background-color: #ffffff;
      padding-top: 40px;
      padding-left: 40px;
      padding-bottom: 38px;
      .item-addr {
        .addr-title {
          font-size: 20px;
          font-weight: 200;
          color: #333333;
          margin-bottom: 20px;
        }
        .add-addr,
        .addr-info {
          width: 271px;
          height: 180px;
          border: 1px solid #e5e5e5;
          font-size: 14px;
          cursor: pointer;
          color: #757575;
        }
        .addr-info {
          margin-right: 10px;
          padding: 15px 24px;
          box-sizing: border-box;
          h2 {
            font-size: 18px;
            font-weight: 300;
            margin-bottom: 10px;
            color: #333333;
          }
        }
        .checked {
          border: 1px solid $colorA;
        }
        .actions {
          margin-top: 50px;
          .icon {
            width: 20px;
            height: 20px;
            fill: #666666;
            &:hover {
              fill: $colorA; //XML-SVG专属样式，把颜色填充进去
            }
          }
        }
        .add-addr {
          text-align: center;
          color: #999999;
          .icon-addr {
            width: 30px;
            height: 30px;
            border-radius: 50%;
            background: url("/imgs/icon-add.png") #e0e0e0 no-repeat center;
            background-size: 14px;
            margin: 0 auto;
            margin-top: 50px;
            margin-bottom: 10px;
          }
        }
      }
      .item-goods {
        .goods-title {
          font-size: 18px;
          margin-top: 20px;
          font-weight: bold;
          margin-bottom: 10px;
        }
        ul {
          border-top: 1px solid #e5e5e5;
          border-bottom: 1px solid #e5e5e5;
          li {
            .good {
              display: flex;
              line-height: 40px;
              font-size: 16px;
              margin-top: 10px;
              &:last-child {
                margin-bottom: 10px;
              }
              .good-name {
                flex: 5;
                img {
                  width: 30px;
                  height: 30px;
                  vertical-align: middle;
                }
              }
              .good-price {
                flex: 2;
              }
              .good-total {
                flex: 1;
                color: $colorA;
              }
            }
          }
        }
      }
      .item-shipping {
        h2 {
          font-size: 20px;
          display: inline-block;
          margin-right: 30px;
          margin-top: 30px;
        }
        span {
          color: $colorA;
          font-size: 16px;
        }
      }
      .item-invoice {
        h2 {
          font-size: 20px;
          display: inline-block;
          margin-right: 71px;
          margin-top: 20px;
        }
        span {
          color: $colorA;
          font-size: 16px;
        }
      }
      .detail {
        padding: 50px 44px 33px 0;
        border-bottom: 1px solid #f5f5f5;
        text-align: right;
        font-size: 16px;
        color: #666;
        .item {
          margin-bottom: 10px;
          .item-val {
            color: $colorA;
            display: inline-block;
            width: 100px;
          }
        }
        .item-total {
          .item-val {
            font-size: 28px;
            color: $colorA;
          }
        }
      }
      .btn-group {
        margin-top: 20px;
        text-align: right;
        .btn-default {
          margin-right: 20px;
        }
      }
    }
  }
  .edit-wrap {
    font-size: 14px;
    .item {
      margin-bottom: 15px;
      .input {
        width: 280px;
        height: 40px;
        line-height: 40px;
        display: inline-block;
        margin-right: 15px;
        padding-left: 15px;
        border: 1px solid #e5e5e5;
        &:last-child {
          margin-right: 0;
        }
      }
      select {
        height: 40px;
        line-height: 40px;
        width: 70px;
        margin-right: 15px;
        border: 1px solid #e5e5e5;
      }
      textarea {
        height: 62px;
        width: 100%;
        padding: 13px 15px;
        box-sizing: border-box;
        border: 1px solid #e5e5e5;
      }
    }
  }
}
</style>
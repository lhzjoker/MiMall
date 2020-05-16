<template>
    <div class="ali-pay">
        <order-header title="订单支付">
            <template v-slot:tips>
                <span>请谨防钓鱼链接或诈骗电话，了解更多</span>
            </template>
        </order-header>
        <loading v-if="loading"></loading>
        <div class="form" v-html="content"></div>
    </div>
</template>

<script>
    import OrderHeader from './../components/OrderHeader';
    import Loading from './../components/Loading';
    export default {
        name: 'alipay',
        data() {
            return {
                orderId: this.$route.query.orderId,      //订单号
                content: '',     //支付宝页面html源码
                loading: true   //是否展示loading
            }
        },
        components: {
            OrderHeader,
            Loading
        },
        mounted() {
            this.submitPay()
        },
        methods: {
            submitPay() {
                this.axios.post('/pay', {
                    orderId: this.orderId,
                    orderName: 'Vue小米高仿商城',
                    amount: 0.01,
                    payType: 1,
                }).then((res) => {
                    this.content = res.content
                    setTimeout(()=>{
                        document.forms[0].submit();     //提交第一个表单数据，跳转到支付宝页面
                    },100)
                })
            }
        },
    }
</script>
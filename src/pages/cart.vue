<template>
    <div>
        <order-header title="我的购物车">
            <template v-slot:tips>
                <span>温馨提示：产品是否购买成功，以最终下单为准哦，请尽快结算</span>
            </template>
        </order-header>
        <router-view></router-view>
        <service-bar></service-bar>
        <nav-footer></nav-footer>
    </div>
</template>

<script>
    import OrderHeader from './../components/OrderHeader'
    import NavFooter from './../components/NavFooter'
    import ServiceBar from './../components/ServiceBar'
    export default{
        name: 'cart',
        components: {
            OrderHeader,
            NavFooter,
            ServiceBar
        }
    }
</script>
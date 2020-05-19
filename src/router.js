import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/home'
import Index from './pages/index'
// import Product from './pages/product'
// import Detail from './pages/detail'
// import Cart from './pages/cart'
// import Order from './pages/order'
// import OrderConfirm from './pages/orderConfirm'
// import OrderList from './pages/orderList'
// import OrderPay from './pages/orderPay'
// import Alipay from './pages/alipay'
// import Login from './pages/login'




/* 加载插件固定的语法 */
Vue.use(Router)

export default new Router({
    routes: [    //配置路由，这里是个数组
        {       //每一个链接都是一个对象
            path: '/',  //链接路径
            name: 'home',   //路由名称
            redirect: '/index',     //重定向
            component: Home,    //对应的组件模板
            children: [{        //子路由
                path: 'index',
                name: 'index',
                component: Index,
            },
            {
                path: 'product/:id',        //动态路由 /:表示动态传id
                name: 'product',
                component: () => import('./pages/product.vue')
            },
            {
                path: 'detail/:id',
                name: 'detail',
                component: () => import('./pages/detail.vue')
            }
            ]
        },
        {
            path: '/cart',
            name: 'cart',
            component: () => import('./pages/cart.vue')
        },
        {
            path: '/order',
            name: 'order',
            component: () => import('./pages/order.vue'),
            children: [{
                path: 'confirm',
                name: 'order-confirm',
                component: () => import('./pages/orderConfirm.vue')
            },
            {
                path: 'list',
                name: 'order-list',
                component: () => import('./pages/orderList.vue')
            },
            {
                path: 'pay',
                name: 'order-pay',
                component: () => import('./pages/orderPay.vue')
            },
            {
                path: 'alipay',
                name: 'alipay',
                component: () => import('./pages/alipay.vue')
            }
            ]
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('./pages/login.vue')
        },
    ]
})
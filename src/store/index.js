import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex);

const state = {
    username:'',    //用户名
    cartcount: 0    //购物车数量
}

export default new Vuex.Store({
    state,
    actions,
    mutations
})
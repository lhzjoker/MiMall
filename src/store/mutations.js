//商城Vuex-mutation
export default{
    saveUserName(state,username){
        state.username = username
    },
    saveCartCount(state,cartcount){
        state.cartcount = cartcount
    }
}
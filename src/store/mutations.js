/**
 * 
 */
export default{
    saveUserName(state,username){
        state.username=username;
    },
    saveCartCount(state,count){
        state.cartCount=count;
    },
    addNewState(state, payload) { //添加新的属性到state
        this.replaceState({...state, newProp: payload})
      }

}
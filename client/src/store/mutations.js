/*
* 调用mutat中的方法来操作state中的数据
* */

export default({
    Receive_shop(state,data){
      state.shops=data
   },
    Receive_userinfo(state,data){
       //console.log(data)
    state.userinfo=data
  },
   Reset_userinfo(state){
      state.userinfo={}
  },
  Reseive_cartgoods(state,data){
    let flag=false
      state.cartgoods.some((good, index, arr) => {
     // console.log(arr)
        if (good.name ===data.name) {
         good.count++
          flag=true
          return flag
        }
      })
    if(!flag){
      state.cartgoods.push(data)
    }
  },
  //商家信息
  Reseive_shopinfo(state,data){
      state.shopinfo=data
  }
})

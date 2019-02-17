/*
* 只负责对外提供数据，不能修改数据
* */


export  default {
  //计算购物车的总数量
  countnum(state){
   return  state.cartgoods.reduce((totle,good)=>{
      return totle+good.count
    },0)
  },
  //计算购物车的总价
  countprice(state){
    //onsole.log(state.cartgoods)
    return state.cartgoods.reduce((totle,good)=>{
      //console.log(good.count*good.price)
      return totle+good.count*good.price
    },0)
  }
}

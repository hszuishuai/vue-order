/*
* 多个mutations的操作
* 将异步操作放于actions中
* */
import  vue from 'vue'
import {reqShops,reqUserInfo} from '../api/index.js'
export default ({
  //异步得到商户信息
   async getshop(context){
     const result= await  reqShops()
     context.commit('Receive_shop',result.data)
},
  //用户信息
    getuserinfo(context){
     const result=reqUserInfo().then(res=>{
       context.commit('Receive_userinfo',res.data)
     })
    },
  //用户退出登录
  async loginout(context){
    context.commit('Reset_userinfo')
  },
  //购物车中的商品信息
  getcartnum(context,e){
     if(!e.count){
       //给数据绑定对象添加属性
       vue.set(e,'count',1)
     }
     //console.log(e)
     context.commit('Reseive_cartgoods',e)
  },
  //更改购物车中的数量
  delnum(context,e){
     if(e.count>1){
       e.count--
     }else {
       context.state.cartgoods.splice(context.state.cartgoods.indexOf(e),1)
     }
  },
  //获取用户评论
  shopinfo(context,data){
    context.commit('Reseive_shopinfo',data)
  }
})

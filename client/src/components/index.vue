<template>
<div id="index">
  <headertop title="vue外卖">
    <span class="search" slot="left">
       <button>
         <span><i class="iconfont  icon-sousuo"></i>火锅</span>
       </button>
    </span>
    <span @click="$router.push({name:'login_pwd'})" class="login_resgister" slot="right">
      <span>
        登入注册
      </span>
    </span>
  </headertop>
<swiper/>
  <div class="navtype">
    <div class="navtype-item">
      <span class="iconfont icon-waimai1"></span>
      <p>美发</p>
    </div>
    <div class="navtype-item">
      <span class="iconfont  icon-zhusu" style="color: #4f2231"></span>
      <p>住宿</p>
    </div>
    <div class="navtype-item">
      <span class="iconfont  icon-xingzhuang" style="color: rgba(98,98,98,0.95)"></span>
      <p>电影</p>
    </div>
    <div class="navtype-item">
      <span class="iconfont icon-xiuxianyule" style="color: aqua"></span>
      <p>休闲娱乐</p>
    </div>
    <div class="navtype-item">
      <span class="iconfont icon-waimai" ></span>
      <p>外卖</p>
    </div>
  </div>
  <div class="navtype1">
    <div class="navtype-item">
      <span class="iconfont icon-huochepiao"  style="color: rgba(0,0,255,0.78)"></span>
      <p>火车票</p>
    </div>
    <div class="navtype-item">
      <span class="iconfont icon-ktv"  style="color: aqua"></span>
      <p>KTV</p>
    </div>
    <div class="navtype-item">
      <span class="iconfont icon-zhoubianyou"  style="color: rgba(0,0,255,0.78)"></span>
      <p>周边游</p>
    </div>
    <div class="navtype-item">
      <span class="iconfont icon-hunshasheying"  style="color: pink"></span>
      <p>婚纱摄影</p>
    </div>
    <div class="navtype-item">
      <span class="iconfont icon-quanbufenlei"></span>
      <p>全部</p>
    </div>
  </div>
  <div class="shop" v-for="(shop,index) in shops" :key="index">
    <router-link :to="'/index/shop/'+index" tag="div">
    <div class="shop-item">
      <img src="./Swiper/imgs/22.jpg">
      <div class="shopinfo">
        <ul>
          <li>{{shop.name}}<span></span></li>
          <li><rating class="rating" :shoprating="shop.rating"/>
            <div>
              <span class="shopnum">月售{{shop.recent_order_num}}</span>
              <span class="typepost">xx专送</span>
            </div>
          </li>
          <li>￥{{shop.float_minimum_order_amount}}起送/{{shop.piecewise_agent_fee.tips}}</li>
        </ul>
      </div>
    </div>
    </router-link>
  </div>
</div>
</template>
<script>
  import  swiper from "../components/Swiper/swiper.vue"
  import  headertop from "../components/HeaderTop/headerTop.vue"
  import  rating from '../components/Ratingstart/ratingstart.vue'
  import {mapState} from 'vuex'
export default {
  name: 'index',
  data () {
    return {
      msg: '',
      shoplist:[]
    }
  },
  created(){

  },
  mounted(){
     this.$store.dispatch('getshop')
  },
  computed:{
   ...mapState(['shops'])
  },
  components:{
    swiper,
    headertop,
    rating
  },
  methods:{

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .a(){
    display: flex;
    justify-content: space-between;
    width: 95%;
    margin: 30px auto;
    flex-wrap: wrap;
  }
  .p(){
    color: #cccccc;
    font-size: 10px;
    margin: 5px 0;
  }
  .item(){
    width: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
#index{
  padding-top: 40px;
  padding-bottom: 30px;
  #header {
    header {
      .search {
        width: 60%;
        display: inline-block;
        button {
          width: 100%;
          height: 30px;
          text-align: center;
          line-height: 40px;
          font-size: 10px;
          color: #ffffff;
          background: #f4f4f4;
          border: none;
          outline: none;
          border-radius: 10px;

          span {
            line-height: 30px;
          }
        }
      }
      .login_resgister {
        display: inline-block;
        width: 20%;

        span {
          font-size: 14px;
        }
      }
    }
  }
  .navtype{
   .a;
    .navtype-item{
      .item;
      span{
        font-size: 30px;
        color: orange;
      }
      p{
       .p;
      }
    }
 }
  .navtype1{
  .a;
    .navtype-item{
      .item;
    p{
      .p;
    }
    span{
    font-size: 20px;
    }
  }
  }
  .shop{
    width: 100%;
    box-shadow: 1px 1px 1px 1px #cccccc ;
    .shop-item{
      width: 100%;
      height: 120px;
      margin: 20px 0;
      display: flex;
      justify-items: center;
      img{
      width: 30%;
      }
      .shopinfo{
        width: 70%;
        ul{
          list-style: none;
          padding-left:20px ;
          display: flex;
          flex-direction: column;
          justify-content: center;
          li{
           margin-top: 14px;
          }
          & li:nth-of-type(2){
            font-size: 12px;
            display: flex;
            justify-content: space-between;
            .rating{
              flex: 3;
            }
            div{
              flex: 7;
              display: flex;
              justify-content: space-between;
             margin-right: 10px;
              .shopnum{
                color: #cccccc;
              }
            }
          }
        }
      }
    }

  }
}
</style>

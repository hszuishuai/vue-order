<template>
    <div id="goodscart">
      <div class="cart">
      <div class="shopcart" @click="isshow_cart">
      <i class="iconfont icon-waimai"><span v-if="cartgoods!=''">{{countnum}}</span></i>
      <ul>
      <li :class="countprice>0?'color_w':'nongoods'">￥{{countprice}}</li>
      <li>另需配送费2元</li>
      </ul>
      </div>
      <button :class="{color_g:isstate}">{{ispostgoods}}</button>
      </div>
      <div class="cartgoods" v-if="isshow">
        <div class="carttitle">
          <span>购物车</span>
          <span>清空</span>
        </div>
        <scroll :data="cartgoods">
        <ul slot="scroll">
          <li v-for="(good,index) in cartgoods " :key="index">
            <span>{{good.name}}</span>
            <span style="color: red">￥{{good.price}}</span>
            <div class="contranum">
            <span class="delnum" @click="updatenum({type:false,data:good})">-</span>
            <span>{{good.count}}</span>
            <span class="addnum" @click="updatenum({type:true,data:good})" >+</span>
            </div>
          </li>
        </ul>
        </scroll>
      </div>
      <transition name="fade">
      <div class="mask" @click="ismask" v-if="isshow">
      </div>
      </transition>
    </div>
</template>

<script>
  import {mapState,mapGetters} from 'vuex'
  import scroll from '../../components/Scroll/scroll.vue'
    export default {
      name: "goodscart",
      data() {
        return {
          countmoney: null,
          isshow:false
        }
      },
      computed: {
        //计算是否购物车中的满足配送
        ...mapState(['cartgoods']),
        ...mapGetters(['countnum', 'countprice']),
        ispostgoods() {
          const cartgoods = this.cartgoods
          const {countprice} = this
          if(countprice>20){
            return `立即购买`
          }else  if(countprice>0){
            return `还差￥${20-countprice}配送`
          }else {
            return `￥20元配送`
          }
        },
       isstate(){
          return this.countprice>=20
       }
      },
      methods:{
        isshow_cart(){
          if(this.cartgoods!=''){
            return this.isshow=!this.isshow
          }
          return this.isshow=false
        },
        ismask(){
          this.isshow=false
        },
        //
        updatenum(e){
          if(e.type){
            this.$store.dispatch('getcartnum',e.data)
          }else {
            this.$store.dispatch('delnum',e.data)
          }
        }
      },
      components:{
       scroll
      },
      //监视购物车中的数量
      watch: {
        cartgoods(e){
          if(e<=0){
            return this.isshow=false
          }
        }
      }
    }
</script>

<style scoped lang="less">

#goodscart{
  position: fixed;
  left:0;
  bottom: 0;
  z-index: 50;
  width: 100%;
  /*background: red;*/
  .mask{
    position: fixed;
    top:0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 5;
    //backdrop-filter: blur(10px);
    opacity:0.7;
    background: rgba(7, 17, 27, 0.6);
    &.fade-enter-active, &.fade-leave-active {
      transition: all 1s;
    &.fade-enter, &.fade-leave-to {
      opacity: 0;
      background: rgba(7, 17, 27, 0);
    }
    }
  }
    .cart {
      display: flex;
      width: 100%;
      height: 50px;
      background: #323232;
      position: fixed;
      bottom: 0;
      left: 0;
      z-index: 100;

      .shopcart {
        flex: 7;
        i {
          position: relative;
          top: -10px;
          font-size: 40px;
          left: 10px;
          color: blue;
          span {
            display: inline-block;
            position: absolute;
            font-size: 10px;
            color: white;
            top: 5px;
            left: 30px;
            background: red;
            padding: 1px 5px 5px 5px;
            border-radius: 100%;
          }
        }
        ul {
          display: inline-block;
          color: #cccccc;
          margin-left: 25px;
          height: 200px;
          .color_w {
            color: white;
            font-size: 15px;
          }
          .nongoods {
            font-size: 12px;
          }
          li {
            &:nth-of-type(2) {
              font-size: 10px;
            }
          }
        }
      }
      button {
        flex: 3;
        color: white;
        background: #535353;
        border: none;
        font-weight: 600;

        &.color_g {
          background: #00e000;
        }
      }

    }
    .cartgoods {
      background: white;
      position: absolute;
      padding-bottom: 50px;
      bottom: 0;
      left: 0;
      width: 100%;
      z-index:10;
      .carttitle {
        display: flex;
        justify-content: space-between;
        background: #d3d3d3;
        span {
          display: inline-block;
          padding: 5px;
        }
      }
      ul {
        z-index: 3;
        li {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 5px;
          height: 50px;
          span{
            flex: 3.33;
          }
          .contranum {
            margin-right: 20px;

            span {
              padding: 2px;
              display: inline-block;

              &.delnum {
                border: 1px solid blue;
                color: blue;
                padding: 1px 4px 3px 4px;
                border-radius: 100%;
                font-weight: 600;
              }

              &.addnum {
                color: white;
                padding: 1px 4px 3px 4px;
                border-radius: 100%;
                background: blue;
                font-weight: 600;
              }
            }
          }
        }
      }
    }
  }

</style>

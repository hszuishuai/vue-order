<template>
    <div id="shoporder">
      <div class="goodtype">
        <div class="goodtype-item">
      <div @click="getgoodlist(index)" v-for="(goods,index) in goodlists" :key="index" :class="getscrollY===index ?'color':''">
        {{goods.name}}
      </div>
        </div>
      </div>
  <div class="goodlists">

    <div class="goodlist" ref="goods">
      <div class="goodlist-item" v-for="(goodsitem,index) in goodlists" :key="index">
        <P>{{goodsitem.name}}</P>
        <div class="good-item" v-for="(good,index) in goodsitem.foods" :key="index">
          <img :src='good.icon'>
          <div class="good-content">
            <p ref="goodname">{{good.name}}</p>
            <p  class="shopgoods-text">{{good.description}}</p>
            <p class="shopgoods-text">月售{{good.sellCount}}&nbsp好评率{{good.rating}}%</p>
            <p class="cartnum">
              <span ref='price'style="color: red">￥{{good.price}}</span>
              <span @click="upcartnum(good)">+</span>
            </p>
          </div>
        </div>
        </div>
      </div>
    </div>
      <goodscart/>
    </div>
</template>

<script>
  import goodscart from '../../goodscart/goodscart.vue'
  import Bscroll from 'better-scroll'
  //import {mapState} from 'vuex'
    export default {
        name: "order",
      data(){
        return{
          goodlists:[],
          tops:[],
          scrollY:null,
        }
      },
      components:{
          goodscart
      },
      created(){
      this.axios.get('http://localhost:3000/goods').then(res=>{
          //console.log(res.data)
          this.goodlists=res.data.data;
          this.$nextTick(()=>{
            this._isTops();
            this._isscroll()
        })
        })
      },

      methods:{
          //收集tops
          _isTops(){
            let tops=[0]
            let top=0
            const good=this.$refs.goods.children;
            Array.prototype.slice.call(good).forEach(e=>{
             top+=e.clientHeight
              tops.push(top)
            })
            this.tops=tops
          },
          //收集scrollY
         _isscroll(){
           if(!this.goodtype){
             this.goodtype= new Bscroll('.goodtype',{probeType:2,click:true}) //better-scroll 对象 数据请求完成后，对象在进行创建
           }else {
             this.goodtype.refresh()
           }
           if(!this.goodlist){
             this.goodlist= new Bscroll('.goodlists',{probeType:2,click:true}) //better-scroll 对象 数据请求完成后，对象在进行创建
           }else {
             this.goodlist.refresh()
           }
           this.goodtype.on('scroll',(event)=>{
             //console.log(event.y)
           })
           this.goodlist.on('scroll',(event)=>{
             this.scrollY=event.y
           })
           this.goodlist.on('scrollEnd',(event)=>{
             //console.log(event.y)
             this.scrollY=event.y
           })
         },
        //点击左侧菜单 右侧跳转到对应界面
          getgoodlist(index){
            const y=-this.tops[index]
            this.scrollY=y
            //console.log(y)
            this.goodlist.scrollTo(0,y,1000)
          },
          //更新购物城中的数量 将数据存储到vuex中
          upcartnum(e){
           //console.log(e)
          this.$store.dispatch('getcartnum',e)
        },

      },
      computed:{
          //计算scrollY
        getscrollY(){
         const {scrollY,tops}=this
         let goodindex=0
          tops.findIndex((top,index)=>{
            if(top<=Math.abs(scrollY)&&tops[index+1]>Math.abs(scrollY)){
              return goodindex=index
            }
          })
          return  goodindex
        },
      }
    }
</script>

<style scoped lang="less">
 #shoporder{
   display: flex;
   overflow: hidden;
   position: absolute;
   top: 300px;
   bottom: 50px;
   width: 100%;
   .goodtype{
     flex:2;
     width: 80px;
     height: 330px;
     //overflow-x: scroll;
     .goodtype-item {
       div {
         height: 50px;
         border-right: 1px solid #cccccc;
         text-align: center;
         line-height: 50px;
         font-size: 12px;
         &.color{
           color: blue;
           font-weight: 600;
         }
       }
     }
   }
   .goodlists{
     flex: 8;
     height: 330px;
     //overflow-x: scroll;
     .goodlist {
       .goodlist-item {
         width: 100%;
         .good-item {
           /*width: 30%;*/
           width: 100%;
           display: flex;
           margin: 10px 0;
           img {
             flex: 2;
             padding: 10px;
           }
           .good-content {
             flex: 7;
             display: flex;
             flex-direction: column;
             justify-content: space-around;
              .cartnum{
              span{
                &:nth-of-type(2){
                  display: inline-block;
                  float: right;
                  margin-right: 30px;
                  background: blue;
                  width: 20px;
                  height: 20px;
                  color: white;
                  border-radius: 100%;
                  text-align: center;
                  line-height: 20px;
                }
              }
             }
             .shopgoods-text {
               color: #9e9e9e;
               font-size: 10px;
             }
           }
         }
       }
     }
   }

 }
</style>

<template>
    <div id="shop" ref="shop">
      <i class="iconfont  icon-fanhui" @click="$router.push({name:'index'})"></i>
      <img :src="shoplist.bgImg">
      <div class="shopinfo" >
        <img :src="shoplist.avatar">
        <div class="shopinfo_contain">
        <p><span>品牌</span>{{shoplist.name}}</p>
        <p>
          <span>{{shoplist.score}}</span>
          <span>月售{{shoplist.sellCount}}</span>
          <span>距离{{shoplist.distance}}</span>
          <span>约{{shoplist.minPrice}}分钟</span>
          <span>{{shoplist.description}}</span>
        </p>
          <ul>
            <li><span class="typename">
              {{profitlist.name}}</span><span>{{profitlist.content}}</span>
              <span>8个优惠</span>
              <span @click="isshow" class="iconfont  icon-iconfonti"></span>
            </li>
          </ul>
        </div>
      </div>
      <div class="shoptype">
        <div class="shoptype-item">
          <router-link to="/index/shop/order" tag="span">点餐</router-link>
        </div>
        <div class="shoptype-item">
          <router-link to="/index/shop/ratings" tag="span">评价</router-link>
        </div>
        <div class="shoptype-item">
          <router-link to="/index/shop/shoper" tag="span">商家</router-link>
        </div>
      </div>
      <keep-alive>
      <router-view/>
      </keep-alive>
      <div class="shopprofit"  v-if="isprofit">
        <p>优惠活动</p>
      <ul>
        <li v-for="(support,index) in shoplist.supports" :key="index">
          <span class="typename">{{support.name}}</span>
          <span>{{support.content}}</span></li>
      </ul>
      </div>
    </div>
</template>

<script>
  import scroll from '../Scroll/scroll.vue'
    export default {
      name: "shop",
      data(){
          return{
            shoplist:[],
            isprofit:false,
            profitlist:[]
          }
      },
      created(){
          this.axios.get('http://localhost:3000/info').then(res=>{
            //console.log(res.data);
            this.shoplist=res.data.data;
            this.$store.dispatch('shopinfo',res.data.data)
            this.profitlist=this.shoplist.supports[0]
          });
      },
      mounted(){
      // this.shoplist=this.$store.state.shops
        //console.log(this.shoplist)
      },
      methods:{
          isshow(){
            console.log(22)
            return this.isprofit=true
          }
      },
      components:{
        scroll
      }
    }
</script>

<style scoped lang="less">

#shop{
    padding-bottom: 50px;
    width: 100%;
    i {
      position: absolute;
      top: 10px;
      left: 10px;
      font-size: 30px;
      color: white;
    }
    .shopinfo {
      display: flex;
      width: 100%;
      position: relative;
      justify-content: center;

      img {
        align-items: center;
        vertical-align: center;
        width: 100px;
        position: absolute;
        top: -50px;
      }

      .shopinfo_contain {
        padding-top: 50px;

        p {
          text-align: center;

          &:nth-of-type(1) {
            font-weight: 600;

            span {
              display: inline-block;
              font-size: 12px;
              background: orange;
              margin-right: 10px;
            }
          }

          &:nth-of-type(2) {
            font-size: 12px;
            margin-top: 10px;

            span {
              padding: 5px;
              font-weight: 600;
            }
          }
        }

        ul {
          margin-top: 10px;
          font-size: 12px;

          li {
            margin: 2px 0;
            border: 1px solid #cccccc;
            height: 20px;

            .typename {
              padding: 0 2px;
              background: blue;
              display: inline-block;
              color: white;
              font-weight: 600;
            }
          }
        }
      }
    }

    .shopprofit {
      width: 100%;
      background: white;
      position: fixed;
      bottom: 0;
      z-index: 100;
      display: flex;
      flex-direction: column;
      transition: all 1s ease-in-out;

      p {
        margin: 10px auto;
        font-weight: 600;
      }

      ul {
        font-size: 12px;
        margin: auto;

        li {
          margin: 2px 0;
          height: 20px;

          .typename {
            padding: 0 2px;
            background: blue;
            display: inline-block;
            color: white;
            font-weight: 600;
          }
        }
      }

    }

    img {
      width: 100%;
    }

    .shoptype {
      display: flex;
      text-align: center;
      justify-content: center;
      align-items: center;
      height: 40px;
      border-bottom: 1px solid #cccccc;

      .shoptype-item {
        flex: 3.33;

        span {
          font-size: 14px;
          position: relative;
          color: #cccccc;
        }

        .router-link-active {
          color: blue;

          &:after {
            content: '';
            display: inline-block;
            position: absolute;
            width: 100%;
            height: 2px;
            bottom: -10px;
            left: 0;
            background: blue;
          }
        }
      }
    }
}
</style>

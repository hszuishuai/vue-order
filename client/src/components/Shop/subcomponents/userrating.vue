<template>
    <div id="user_ratings">
      <div class="shopinfo">
        <ul>
        <li>{{shopinfo.score}}</li>
        <li><span>商家评分</span><Ratings :shoprating="shopinfo.score"></Ratings></li>
        <li><span>味道</span> <span>{{shopinfo.serviceScore}}</span></li>
        <li><span>包装</span> <span>{{shopinfo.foodScore}}</span></li>
        <li><span>配送</span> <span>4.8</span></li>
        </ul>
      </div>
      <div class="ratings">
        <div class="rating" v-for="(item,index) in ratinglist" :key="index">
          <img :src="item.avatar">
          <div class="ratingcontain">
            <p><span>{{item.username}}</span><span>{{item.rateTime |date}}</span></p>
            <Ratings :shoprating="item.score"></Ratings>
            <p>{{item.text}}</p>
            <p class="recommend"> <span v-for="(reitem,index) in item.recommend" :key="index">{{reitem}}</span></p>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import  {reqShopRatings} from '../../../api/index.js'
  import {mapState} from 'vuex'
  import Ratings from '../../Ratingstart/ratingstart.vue'
    export default {
      name: "userrating",
      data(){
        return{
        ratinglist:[]
        }
      },
      created(){
          this._Ratings()
        },
      methods: {
        _Ratings() {
          reqShopRatings().then(res => {
            this.ratinglist = res.data
          })
        }
      },
        computed:{
          ...mapState(['shopinfo'])
        },
        components:{
          Ratings
        }
  }
</script>

<style scoped lang="less">
#user_ratings{
  .shopinfo{
    ul{
      display: flex;
      justify-content: space-between;
      height: 100px;
      border-bottom: 1px solid #cccccc;
      li{
        flex: 2;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #777777;
        font-size: 12px;
        &:nth-of-type(1){
          font-size: 25px;
          color: red;
        }
        span {
          &:nth-child(2) {
            font-size: 18px;
          }
        }
      }
    }
  }
  .ratings{
    .rating{
      display: flex;
      border-bottom: 1px solid #cccccc;
      img{
        width: 25px;
        height: 25px;
        padding: 5px;
        border-radius: 100%;
      }
      .ratingcontain{
        flex: 8;
        p{
          padding: 5px;
          &:nth-of-type(1){
            display: flex;
            justify-content: space-between;
          }

        }
        .recommend{
          span{
            display: inline-block;
            font-size: 12px;
            background: #e2e2e2;
            margin: 0 5px;
          }
        }
      }
    }
  }
}
</style>

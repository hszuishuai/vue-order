<template>
    <div id="user">
      <headertop  title="我的"></headertop>

      <div class="user-info">
        <div class="user-icon">
          <span class="iconfont icon-yonghu"></span>
        </div>
        <div class="usertitle">
          <p class="username" v-if="userinfo">{{userinfo.name}}</p>
          <router-link class="username" v-else :to=" userinfo ?'/user/userinfo' :'/user/login'" tag="p">登录/注册</router-link>
          <p class="userphone">{{userinfo ? userinfo.phone :'登入后享受更多权限'}}</p>
        </div>
      </div>
        <ul class="usermoney">
          <li><p style="color: #0000ff">0.00元</p><P>钱包</P></li>
          <li><p style="color: red">0个</p><P>红包</P></li>
          <li><p style="color: #009b00">0个</p><P>金币</P></li>
        </ul>
        <ul class="rules">
          <li>我的地址  <span class="iconfont  icon-iconfonti"></span></li>
          <li>金币商城  <span class="iconfont  icon-iconfonti"></span></li>
          <li>我的客服 <span class="iconfont  icon-iconfonti"></span></li>
          <li>会员中心 <span class="iconfont  icon-iconfonti"></span></li>
        </ul>
      <mt-button  type="danger" @click="loginout"  v-if="userinfo" size="large">退出登录</mt-button>
    </div>
</template>

<script>
  import  headertop from "../components/HeaderTop/headerTop.vue"
  import  {mapState} from 'vuex'
    export default {
        name: "user",
      components:{
          headertop
      },
      created(){
         // this.axios.get('http://localhost:3000/userinfo') .then(res=>{
         //   console.log(res.data)
         // })
      },
      methods:{
          back:()=>{
          this.$router.push({name:'login'})
          },
        //用户退出
        loginout(){
            this.axios.get('http://localhost:3000/loginout').then(res=>{
              if(res.data.code===0){
                 this.$store.state.userinfo=null
              }
            })
        }
      },
      computed:{
           ...mapState(['userinfo'])
      }
    }
</script>

<style scoped lang="less">

#user {
  a {
    text-decoration: none;
  }
  ul {
    list-style: none;
  }
  padding-top: 40px;
  #header /deep/ header {
    background: rgba(0, 0, 245, 0.73);
  }

  .user-info {
    display: flex;
    align-items: center;
    background: rgba(0, 0, 245, 0.73);
    height: 100px;
    border-top: 2px solid white;

    .user-icon {
      margin: 0 15px;

      span {
        font-size: 45px;
        color: white;
      }
    ;
    }

    .usertitle {
      color: white;

      .username {
        font-weight: 600;
        font-size: 20px;
      }

      .userphone {
        font-size: 12px;
      }
    }
  }
  .usermoney {
    display: flex;
    justify-content: space-between;
    list-style: none;
    height: 70px;

    li {
      flex: 3.33;
      border-right: 1px solid #cccccc;
      border-bottom: 1px solid #cccccc;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      &:nth-of-type(1) {

      }
    }
  }
  .rules {
    li {
      height: 40px;
      border: 1px solid #cccccc;
      line-height: 40px;
      margin: 10px 0;
      span{
        display: inline-block;
        float: right;
        margin-right: 10px;
      }
    }
  }
}
</style>

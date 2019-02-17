<template>
    <div id="message">
      <div class="phone">
   <input type="text" v-model="phonenum" placeholder="手机号">
        <button :disabled="!isButton"  :class="{right_phone:rightphone}" @click="getcode">
          <span v-if="ispost">获取验证码</span>
          <span v-else>已发送({{posttime}}S)</span>
        </button>
      </div>
      <div class="vif">
        <input type="text" v-model="yanzhen" placeholder="验证码">
      </div>
      <mt-button type="primary"   size="large">登录</mt-button>
    </div>
</template>

<script>
    export default {
      name: "message",
      data(){
          return{
            posttime:30,
            phonenum:null,
            yanzhen:'',
            isButton:true,
            ispost:true
          }
      },
      computed:{
          rightphone(){
            return this.isButton=/^1\d{10}$/.test(this.phonenum)
          }
      },
      methods:{
        //启动倒计时
        //发送验证码
        getcode(){
          this.ispost=false;
          this.isButton=false;
           setInterval(()=>{
             this.posttime-=1;
             if(this.posttime<=0){
               this.ispost=true;
               this.isButton=true;
               return this.posttime=30
             }
           },1000)

        },

  /*
  * 用户登入验证
  * */
      // login(){
      //   this.axios.post('/user',{phonenum:this.phonenum,yanzhenma:this.yanzhen},{
      //     withCredentials: true
      //   }).then(res=>{
      //     //console.log(res.data)
      //   })
      // }
      }
    }
</script>

<style scoped lang="less">

  input{
    height: 30px;
    border: 1px solid #cccccc;
  }
  button{
    height: 34px;
     }
#message {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .phone {
    width: 100%;
    margin: 20px 0;
    display: flex;
    input{
      flex: 6;
    }
    button{
      flex: 4;
    }

    .right_phone {
      color: black;
    }
  }
    .vif {
      input {
        width: 230px;
      }
    }
    .mint-button {
      margin-top: 50px;
      width: 100%;
    }
  }
</style>

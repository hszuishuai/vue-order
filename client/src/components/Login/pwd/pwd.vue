<template>
    <div>
      <div id="pwd">
        <div class="phone">
          <input type="text" v-model="name" placeholder="用户名">
        </div>
        <div class="pwd">
          <input type="password" v-model="pwd" placeholder="密码">
        </div>
        <div class="vif">
          <input type="text" v-model="code" placeholder="验证码">
          <img src="http://localhost:3000/captcha" @click="upcaptcha" ref="captcha">
        </div>
        <mt-button type="primary" @click="login" size="large">登录</mt-button>
      </div>
    </div>
</template>


<script>
  import { MessageBox } from 'mint-ui';
    export default {
        name: "pwd",
      data(){
          return{
            name:'',
            pwd:null,
            code:''
          }
      },
      created(){
      },
      methods:{
         //更换图形验证码
        upcaptcha(){
          // this.axios.get('/captcha').then((res)=>{
          //   // console.log(res.data)
          // })
         this.$refs.captcha.src='http://localhost:3000/captcha?time'+Date.now()
        },
        //用户登录
        login(){
          this.axios.post('http://localhost:3000/user',{name:this.name,pwd:this.pwd,captcha:this.code},{
            withCredentials: true
          }).then(res=>{
             //console.log(res.data)
           if(res.data.code==0){
             console.log(res.data)
             this.$store.dispatch('getuserinfo')
             this.$router.push({name:'user'})
           }else {
             this.tips(res.data.msg)
              this.upcaptcha()
           }
          })
        },
        //提示框
        tips(title){
          MessageBox({
            title: '提示',
            message: title,
          });
        }
      }
    }
</script>

<style scoped lang="less">
  input{
    width: 100%;
    height: 35px;
    border: 1px solid #cccccc;
  }
  button{
    height: 34px;

  }
  #pwd {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 230px;
    .phone {
      width: 100%;
      margin: 20px 0;
    }

    .pwd {
      width: 100%;
    }
    .vif{
      display: flex;
      flex-direction: row;
      margin-top: 20px;
      width: 100%;
      border: 1px solid #cccccc;
      align-items: center;

      input{
       flex:7;
        border:none;
        outline: none;
      }
      img{
        flex: 3;
        height: 30px;
      }
    }
    .mint-button{
      margin-top: 50px;
    }
  }
</style>

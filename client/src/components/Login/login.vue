<template>
    <div id="login">
      <div class="back">
      <span class="iconfont  icon-fanhui" @click="$router.push({name:'user'})"></span>
      </div>
      <div class="login-contain">
        <div class="title">vue外卖</div>
        <div class="login-type">
        <div class="login-type-item">
          <router-link to="/user/login/message" tag="span">短信登陆</router-link>
        </div>
          <div class="login-type-item">
            <router-link to="/user/login/pwd" tag="span">密码登陆</router-link>
          </div>
        </div>
        <router-view/>
      </div>
    </div>
</template>

<script>
    export default {
        name: "login"
    }
</script>

<style scoped lang="less">
  //路由动画
  /*.v-enter{*/
    /*opacity: 0;*/
    /*transform:translateX(100%);*/
  /*}*/
  /*.v-leave-to{*/
    /*opacity: 0;*/
    /*transform:translateX(-100%);*/
    /*position: absolute;*/
     /*top: 200px;*/
  /*}*/
  /*.v-enter-active,*/
  /*.v-leave-active{*/
    /*transition: all 0.5s ease;*/
  /*}*/
  #login{
    overflow-x: hidden;
    .back {
      margin: 15px;

      span {
        font-size: 25px;
      }
    }
      .login-contain{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        .title{
          font-size: 30px;
          color: rgba(0, 0, 245, 0.73);
          margin: 40px 0;
        }
        .login-type{
          display: flex;
          flex-direction: row;
          .login-type-item{
            font-size: 14px;
            margin: 0 10px;
            position: relative;
          .router-link-active{
            color: rgba(0, 0, 245, 0.73);
            &:after{
              content: '';
              position: absolute;
              height: 2px;
              width: 100%;
              background: rgba(0, 0, 245, 0.73);
              bottom: -10px;
              left: 0;
            }
          }
          }
        }
      }
    }

</style>

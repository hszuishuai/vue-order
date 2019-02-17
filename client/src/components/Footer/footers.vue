<template>
  <div id="footers">
<!--<footer>-->
  <!--<router-link to="/index" class="foot-item">-->
    <!--首页-->
  <!--</router-link>-->
  <!--<router-link to="/search" class="foot-item">-->
    <!--搜索-->
  <!--</router-link>-->
  <!--<router-link  to="/order" class="foot-item">-->
   <!--购物车-->
  <!--</router-link>-->
  <!--<router-link  to="/user" class="foot-item">-->
   <!--我的-->
  <!--</router-link>-->
<!--</footer>-->
    <mt-tabbar>
      <mt-tab-item id="tab1">
        <router-link to="/index">
          <p class="iconfont  icon-shouye"></p>
        首页
        </router-link>
      </mt-tab-item>
      <mt-tab-item  id="tab2">
        <router-link to="/search">
          <p class="iconfont  icon-faxian"></p>
          搜索
        </router-link>
      </mt-tab-item>

      <mt-tab-item id="tab3">
        <router-link to="/order">
        <p class="iconfont  icon-dingdan"></p>
        订单
        </router-link>
      </mt-tab-item>
      <mt-tab-item id="tab4">
        <router-link to="/user">
          <p class="iconfont  icon-wode"></p>
        我的
        </router-link>
      </mt-tab-item>
    </mt-tabbar>
    </div>
</template>

<script>
    export default {
        name: "footers"
    }
</script>

<style scoped lang="less">
  #footers{
    .mint-tabbar{
      position: fixed;
      a{
        text-decoration: none;
        display: flex;
        flex-direction: column;
        justify-content: center;
        color: black;
        &.router-link-active{
          color: rgba(0, 0, 202, 0.57);
        }
        p{
          height: 24px;
        }
      }
    }
  }
</style>

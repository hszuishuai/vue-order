import Vue from 'vue'
import Router from 'vue-router'
import index from '../components/index.vue'
import search from '../components/search.vue'
import order from '../components/order.vue'
import user from '../components/user.vue'
import login from '../components/Login/login.vue'
import login_message from '../components/Login/message/message.vue'
import login_pwd from '../components/Login/pwd/pwd.vue'
import shop   from '../components/Shop/shop.vue'
import userratings from '../components/Shop/subcomponents/userrating.vue'
import shoporder from '../components/Shop/subcomponents/order.vue'
import shoper from '../components/Shop/subcomponents/shoper.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'index',
      meta:{show:true},
      component: index
    },
    {
      path: '/order',
      name: 'order',
      meta:{show:true},
      component: order
    },
    {
      path: '/search',
      name: 'search',
      meta:{show:true},
      component: search
    },
    {
      path: '/user',
      name: 'user',
      meta:{show:true},
      component: user
    },
    {
      path: '/user/login',
      name: 'login',
      component: login,
      meta:{show:true},
      children:[{
        path:'/user/login/message',
        component:login_message
      },{
        path:'/user/login/pwd',
        name:'login_pwd',
        component:login_pwd
      },
        {
          path: '/',
          redirect: '/user/login/pwd',
        }
      ]
    },
    {
      path: '/index/shop/:id',
      name: 'shop',
      component: shop,
      meta:{show:false},
      children: [
        {
          path:'/index/shop/order',
          component: shoporder
        },{
          path:'/index/shop/shoper',
          //name:'login_pwd',
          component:shoper
        },
        {
          path:'/index/shop/ratings',
          //name:'login_pwd',
          component:userratings
        },
        {
          path: '/',
          redirect: '/index/shop/order',
        }
        ]
    },
  ]
})

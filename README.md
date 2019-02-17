# webapp 仿饿了吗外卖

> A Vue.js project


## 技术栈
### 前端
* vue-cli：Vue 脚手架工具，快速初始化项目代码
* Vue：用于构建用户界面的 MVVM 框架
* vue-router：为单页面应用提供的路由系统，使用了 Lazy Loading Routes 技术来实现异步加载优化性能
* vuex：Vue 集中状态管理，实现多组件的相互通信
* vue-lazyload：实现图片懒加载，节省用户流量，优化页面加载速度
* vue-axios: 实现与本地服务器的跨域请求
* better-scroll：解决移动端各种滚动场景需求的插件，使移动端滑动体验更加流畅
* less：css 预编译处理器
* ES6：ECMAScript 新一代语法，模块化、解构赋值、Promise、Class 等方法非常好用
* moment:时间处理类库，能更好的初始化时间格式
* mint-ui:一个vue的ui库
### 后台
* Node.js：利用 Express 搭建的本地测试服务器
* mongodb: moogoose.js来操作数据库

## 实现的功能
用户的登入与注册，商家列表页面，商家详情页面，购物车类
## 用户登入与注册页面
通过与后台数据交互，实现用户的登入与注册
## 商家列表页面
通过api请求渲染得到数据，应用flex布局将数据渲染到页面
## 商家详情页面
商家详情数据的渲染，以及better-scroll插件的使用
## 购物车类
实现商品的添加，控制购物车商品的数量的增减
## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).



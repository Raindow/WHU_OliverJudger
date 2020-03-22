// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

// eslint-disable-next-line no-unused-vars
import axios from 'axios'
import Vue from 'vue'
import App from './App'
// 引入路由
import VueRouter from 'vue-router'
import Routes from './router/routes'
// eslint-disable-next-line no-unused-vars
// import store from './router/store'
// elementUI导入
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import vuex from 'vuex'
import VueCodeMirror from 'vue-codemirror'
import 'codemirror/lib/codemirror.css'
Vue.use(VueCodeMirror)
// 注意样式文件需要单独引入
// 调用插件
Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.use(VueRouter)

// eslint-disable-next-line no-undef
const router = new VueRouter({
  routes: Routes,
  // 消除地址栏中的#
  mode: 'history'
})
Vue.use(vuex)
const store = new vuex.Store({
// store对象
  state: {
    show: false,
    count: 0
  }
})
// eslint-disable-next-line no-new
new Vue({
  el: '#app', // 将所有视图放到id值为app的这个dom元素中
  components: { App }, // components表明引入的文件即App.vue
  template: '<App/>',
  router: router,
  store: store
})

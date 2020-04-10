// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// eslint-disable-next-line no-unused-vars
import axios from 'axios'
import Vue from 'vue'
import App from './App'
// 引入路由
// eslint-disable-next-line import/no-duplicates
import VueRouter from 'vue-router'
import Routes from './router/routes'
// eslint-disable-next-line no-unused-vars
import {store} from './store/store'
// elementUI导入
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import vuex from 'vuex'
import VueCodeMirror from 'vue-codemirror'
import 'codemirror/lib/codemirror.css'
// eslint-disable-next-line import/no-duplicates
import Router from 'vue-router'
// 注意样式文件需要单独引入
// 调用插件
Vue.use(VueCodeMirror)
Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.use(vuex)
Vue.config.productionTip = false
// eslint-disable-next-line no-undef
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}
const router = new VueRouter({
  routes: Routes,
  // 消除地址栏中的#
  mode: 'history'
})
// eslint-disable-next-line no-new
new Vue({
  el: '#app', // 将所有视图放到id值为app的这个dom元素中
  components: { App }, // components表明引入的文件即App.vue
  template: '<App/>',
  router: router,
  store: store
})
router.beforeEach((to, from, next) => {
  // store的getters中定义获取用户信息的函数 getUser
  // userId为空说明用户未登录
  let tem = !!localStorage.getItem('isLogin')
  if (tem !== true) {
    // 跳转到登录页
    if (to.path === '/Setting/Profile' || to.path === '/Setting/Account' || to.path === '/Stu_Submission' || to.path === '/Stu_Home') {
      alert('请先登录')
      next('/Home')
    } else {
      next()
    }
  } else {
    next()
  }
})

import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
// 挂载Vuex
Vue.use(Vuex)

// 创建VueX对象
export const store = new Vuex.Store({
  state: {
    status: '',
    token: localStorage.getItem('token') || '',
    user: {},
    studentID: '',
    // use for Course part
    Course: '',
    Chapter: '',
    isLogin: localStorage.getItem('isLogin') || ''
  },
  mutations: {
    auth_request (state) {
      state.status = 'loading'
    },
    auth_success (state, token, user) {
      console.log(token)
      console.log(user)
      state.status = 'success'
      state.token = token
      state.user = user
    },
    auth_error (state) {
      state.status = 'error'
    },
    logout (state) {
      state.status = ''
      state.token = ''
    },
    saveId (state, Id) {
      state.studentID = Id
    },
    editCourse (state, CourseName) {
      state.Course = CourseName
      sessionStorage.setItem('CourseName', CourseName) // Set the CourseName in session Storage
    },
    editChapter (state, ChapterName) {
      state.Chapter = ChapterName
      sessionStorage.setItem('ChapterName', ChapterName)
    }
  },
  actions: {
    Login ({commit}, user) {
      return new Promise((resolve, reject) => {
        commit('auth_request')
        let data = {user: user, token: '1234'}
        localStorage.setItem('token', '1234')
        localStorage.setItem('isLogin', true)
        // 更新token
        commit('auth_success', data)
      })
    },
    LogOut ({ commit, state }) {
      return new Promise((resolve, reject) => {
        axios.get('Logout')
          .then(response => {
            // eslint-disable-next-line no-undef
            removeIsLogin()
            localStorage.removeItem('loginUsername')
            // 移除之前在axios头部设置的token,现在将无法执行需要token的事务
            delete axios.defaults.headers.common['Authorization']
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    }
  },
  getters: {
    // !!将state.token强制转换为布尔值，若state.token存在且不为空(已登录)则返回true，反之返回false
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status
  }
})

import axios from 'axios';
Vue.prototype.$axios = axios;
//登录界面
<template>
  <div class="login">
    <div class="outer_label">
<!--      <img class="inner_label login_logo" src="src/assets/logo.png">-->
    </div>
    <div class="login_form">
      <div id="ID" class="item">
      <el-input v-model.trim="ID" placeholder=" 请输入账号"/>
      </div>
      <div id="PW" class="item">
        <el-input type="password" v-model.trim="password" placeholder=" 请输入密码"></el-input>
      </div>
      <div class="item">
        <el-radio-group v-model="radio">
        <el-radio v-model="radio" label="stu">学生</el-radio>
        <el-radio v-model="radio" label="tea">老师</el-radio>
        </el-radio-group>
      </div>
      <el-button class="login_bt" type="primary" @click="login" round :loading="isBtnLoading">登录</el-button>
<!--      <el-button class="login_bt" type="primary" @click="cancel" round>取消</el-button>-->
    </div>
  </div>

</template>

<script>
import Vue from 'vue'
export default {
  name: 'Login',
  methods: {
    // 登录界面取消按钮函数
    cancel () {
      // 返回上一页，如果没有上一页返回首页
      if (window.history.length <= 1) {
        this.$router.push({path: '/'})
        return false
      } else {
        this.$router.go(-1)
      }
      this.visible(false)
    },
    // 登录界面登录按钮函数
    login () {
      if (!this.ID) {
        // this.$message.error 常用于主动操作的反馈提示
        this.$message.error('请输入用户名')
        return
      }
      if (!this.password) {
        this.$message.error('请输入密码')
        return
      }
      let data = {
        'ID': this.ID,
        'password': this.password
      }
      let that = this
      this.$axios.post('http://127.0.0.1:3000/users/login', data
      ).then(function (res) {
        console.log(res.data)
        if (res.data === '验证成功') {
          Vue.prototype.$userID = that.ID
          localStorage.setItem('isLogin', true)
          location.reload()
        } else {
          alert(res.data)
          console.log(res.data)
          location.reload()
        }
      }).catch(function (error) {
        console.log(error)
      })
    }
  },
  // created () {
  //   if (JSON.parse(localStorage.getItem('user')) && JSON.parse(localStorage.getItem('user')).userName) {
  //     this.userName = JSON.parse(localStorage.getItem('user')).userName
  //     this.password = JSON.parse(localStorage.getItem('user')).password
  //   }
  // },
  computed: {
  },
  data () {
    return {
      ID: '',
      password: '',
      isBtnLoading: false,
      loginType: 'stu'
    }
  }
}
</script>

<style scoped>
  .login_form {
    padding-top: 10%;
    padding-left: 10%;
    padding-right: 10%;
  }
  .item {
    margin:10px 5px 15px 20px;

  }

</style>

import axios from 'axios';
Vue.prototype.$axios = axios;
//登录界面
<template>
  <div class="login">
    <div class="outer_label">
    </div>
    <div class="login_form">
      <div id="ID" class="item">
      <el-input v-model.trim="ID" placeholder=" 请输入账号"/>
      </div>
      <div id="PW" class="item">
        <el-input type="password" v-model.trim="password" placeholder=" 请输入密码"></el-input>
      </div>
      <div class="item">
        <el-radio-group v-model="loginType">
        <el-radio v-model="loginType" label="stu">学生</el-radio>
        <el-radio v-model="loginType" label="tea">老师</el-radio>
        </el-radio-group>
      </div>
      <el-button class="login_bt" type="primary" @click="login" round :loading="isBtnLoading">登录</el-button>
    </div>
  </div>

</template>

<script>
// import Vue from 'vue'
export default {
  name: 'Login',
  data () {
    return {
      ID: '',
      password: '',
      isBtnLoading: false,
      loginType: 'stu'
    }
  },
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
        this.$message.error('请输入用户名')
        return
      }
      if (!this.password) {
        this.$message.error('请输入密码')
        return
      }
      if (this.loginType === 'stu') {
        this.studentLogin()
      }
    },
    // 学生登录
    studentLogin () {
      let data = {
        'ID': this.ID,
        'password': this.password
      }
      let that = this
      this.$axios.post('/students/login', data
      ).then(function (res) {
        console.log(res.data)
        if (res.data === '验证成功') {
          localStorage.setItem('isLogin', true)
          localStorage.setItem('userID', that.ID)
          location.reload()
        } else {
          alert(res.data)
          location.reload()
        }
      }).catch(function (error) {
        console.log(error)
      })
    }
  },
  computed: {
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

//注册界面
<template>
  <div class="register_form">
    <!--     input 框: trim 自动过滤用户输入的首尾空格 -->
    <div class="item">
      <input v-model.trim="ID" placeholder=" 请输入账号 ">
    </div>
    <div class="item">
      <input type="password" v-model.trim="password" placeholder=" 请输入密码">
    </div>
    <div class="item">
      <input type="password" v-model.trim="passwordConfirm" placeholder=" 请再次输入密码">
    </div>
    <div class="item">
      <input v-model.trim="stuName" placeholder=" 请输入名字">
    </div>
    <div class="item">
      <input v-model.trim="major" placeholder=" 请输入专业">
    </div>
    <div class="item">
      <input v-model.trim="email" placeholder=" 请输入邮箱">
    </div>
    <div class="item">
      <el-radio-group v-model="loginType">
        // v-model 绑定变量，意味着其值为Radio的label属性的值
        // label 可以是String、Number或Boolean
        <el-radio v-model="loginType" label="stu">学生</el-radio>
        <el-radio v-model="loginType" label="tea">老师</el-radio>
      </el-radio-group>
    </div>
    <div>
      <el-button type="primary" @click="register">注册</el-button>
<!--      <el-button type="primary" @click="cancel">取消</el-button>-->
    </div>
  </div>
</template>

<script>

export default {
  name: 'Register',
  methods: {
    // 注册界面取消按钮函数
    cancel () {
      // 返回上一页，如果没有上一页返回首页
      if (window.history.length <= 1) {
        this.$router.push({path: '/'})
        return false
      } else {
        this.$router.go(-1)
      }
    },
    // 注册界面登录按钮函数
    register () {
      if (!this.ID) {
        // this.$message.error 常用于主动操作的反馈提示
        this.$message.error('请输入用户名')
        return
      }
      if (!this.password) {
        this.$message.error('请输入密码')
        return
      }
      if (this.password !== this.passwordConfirm) {
        this.$message.error('请保证两次密码相同')
        return
      }
      if (!this.stuName) {
        this.$message.error('请输入姓名')
        return
      }
      if (!this.major) {
        this.$message.error('请输入专业')
        return
      }
      if (!this.email) {
        this.$message.error('请输入邮箱')
        return
      }
      if (this.loginType === 'stu') {
        this.studentRegister()
      }
    },
    // 学生注册
    studentRegister () {
      let data = {
        'ID': this.ID,
        'password': this.password,
        'stuName': this.stuName,
        'major': this.major,
        'email': this.email
      }
      this.$axios.post('/students/register', data
      ).then(function (res) {
        console.log(res.data)
        alert(res.data)
        location.reload()
      }).catch(function (error) {
        console.log(error)
      })
    }
  },
  data () {
    return {
      // 新建了名为radio的数据模型，通过v-model把两个单选按钮都绑定radio
      loginType: 'stu',
      ID: '',
      stuName: '',
      major: '',
      password: '',
      passwordConfirm: '',
      email: ''
    }
  }
}
</script>

<style scoped>
  .register_form {
    /*padding-top: 10%;*/
    padding-left: 5%;
    padding-right: 5%;
  }
.item {
  margin:10px 5px 15px 20px;

}
</style>

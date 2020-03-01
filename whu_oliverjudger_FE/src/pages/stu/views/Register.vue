//注册界面
<template>
  <div class="register_form">
    <!--     input 框: trim 自动过滤用户输入的首尾空格 -->
    <div class="item">
      <input v-model.trim="ID" placeholder=" 请输入账号 ">
    </div>
    <div class="item">
      <input type="password" v-model.trim="inputContent" placeholder=" 请输入密码">
    </div>
    <div class="item">
      <input type="password" v-model.trim="inputContent" placeholder=" 请再次输入密码">
    </div>
    <div class="item">
      <input v-model.trim="inputContent" placeholder=" 请输入邮箱">
    </div>
    <div class="item">
      <el-radio-group v-model="radio">
        // v-model 绑定变量，意味着其值为Radio的label属性的值
        // label 可以是String、Number或Boolean
        <el-radio v-model="radio" label="stu">学生</el-radio>
        <el-radio v-model="radio" label="tea">老师</el-radio>
      </el-radio-group>
    </div>
    <div>
      <el-button type="primary" @click="register">注册</el-button>
      <el-button type="primary" @click="cancel">取消</el-button>
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
    }
  },
  data () {
    return {
      // 新建了名为radio的数据模型，通过v-model把两个单选按钮都绑定radio
      radio: 'stu'

    }
  }
}
</script>

<style scoped>
  .register_form {
    padding-top: 10%;
    padding-left: 10%;
    padding-right: 10%;
  }
.item {
  margin:10px 5px 15px 20px;

}
</style>

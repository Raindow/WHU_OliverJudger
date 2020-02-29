//注册界面
<template>
  <div class="register_form">
    <!--     input 框: trim 自动过滤用户输入的首尾空格 -->
    <div class="item">
      账号:
      <input v-model.trim="ID" placeholder=" 请输入 ... ">
    </div>
    <div class="item">
      密码:
      <input type="password" v-model.trim="inputContent" placeholder=" 请输入 ... ">
    </div>
    <div class="item">
      再次输入密码:
      <input type="password" v-model.trim="inputContent" placeholder=" 请输入 ... ">
    </div>
    <div class="item">
      邮箱:
      <input v-model.trim="inputContent" placeholder=" 请输入 ... ">
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
    login () {

    }
  },
  data () {
    return {

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

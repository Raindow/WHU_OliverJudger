//注册界面
<template>
  <div>
    <!--     input 框: trim 自动过滤用户输入的首尾空格 -->
    <p>
      账号:
      <input v-model.trim="ID" placeholder=" 请输入 ... ">
    </p>
    <p>
      密码:
      <input type="password" v-model.trim="inputContent" placeholder=" 请输入 ... ">
    </p>
    <p>
      再次输入密码:
      <input type="password" v-model.trim="inputContent" placeholder=" 请输入 ... ">
    </p>
    <p>
      邮箱:
      <input v-model.trim="inputContent" placeholder=" 请输入 ... ">
    </p>
    <p>
      <el-button type="info" @click="register">注册</el-button>
      <el-button type="info" @click="cancel">取消</el-button>
    </p>
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

</style>

<template>
  <el-menu :default-active="this.$route.path" router mode="horizontal">
    <el-menu-item>
      <el-image  :src="require('@/assets/logo.png')" fit="fit"></el-image>
    </el-menu-item>
    <el-menu-item v-for="(item,i) in navList" :key="i" :index="item.name">
      {{ item.navItem }}
    </el-menu-item >
    <el-button v-show="!LogCondition" type="primary" @click="register">注册</el-button>
    <el-button v-show="!LogCondition" type="primary" @click="login">登陆</el-button>
    <el-dropdown>
    <span class="el-dropdown-link" v-show="!LogCondition">
    Stu_Name<i class="el-icon-arrow-down el-icon--right"></i>
    </span>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item>Home</el-dropdown-item>
      <el-dropdown-item>Submissions</el-dropdown-item>
      <el-dropdown-item>Setting</el-dropdown-item>
      <el-dropdown-item divided>Log out</el-dropdown-item>
    </el-dropdown-menu>
    </el-dropdown>
  </el-menu>

</template>

<script>
export default {
  name: 'NavBar',
  methods: {
    // 上方注册按钮函数
    register () {
      this.$router.push({path: '../Register'})
    },
    // 上方登录按钮函数
    login () {
      this.$router.push({path: '../Login'})
    }
  },
  data () {
    return {
      navList: [
        {name: '/', navItem: 'Home'},
        {name: '/Contests', navItem: 'Contests'},
        {name: '/Problems', navItem: 'Problems'}
      ],
      LogCondition: false
    }
  }
}
</script>

<style scoped>
</style>

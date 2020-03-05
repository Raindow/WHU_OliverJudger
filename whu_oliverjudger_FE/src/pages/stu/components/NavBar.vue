<template>
  <el-menu :default-active="this.$route.path" router mode="horizontal">
    <el-menu-item>
      <el-image  :src="require('@/assets/logo.png')" fit="fit"></el-image>
    </el-menu-item>
<!--    el-menu-item的index设为要跳转的路由（并且点击菜单项，会直接push到点击的页面)。-->
<!--    注意：一定要设置el-submenu的index属性（1，2，3…）。不然会出bug-->
    <el-menu-item v-for="(item,i) in navList" :key="i" :index="item.name">
      {{ item.navItem }}
    </el-menu-item >
    <div class="right_part">
    <el-button v-if="LogCondition" type="info" plain @click="register">注册</el-button>
    <el-button v-if="LogCondition" type="info" plain @click="login">登陆</el-button>
    <el-dropdown>
    <span class="el-dropdown-link" v-if="!LogCondition">
    Stu_Name<i class="el-icon-arrow-down el-icon--right"></i>
    </span>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item @click.native="Stu_Home">Home</el-dropdown-item>
      <el-dropdown-item>Submissions</el-dropdown-item>
      <el-dropdown-item>Setting</el-dropdown-item>
      <el-dropdown-item divided>Log out</el-dropdown-item>
    </el-dropdown-menu>
    </el-dropdown>
    </div>
  </el-menu>

</template>

<script>
export default {
  name: 'NavBar',
  methods: {
    // 上方注册按钮函数
    register () {
      this.$router.push({path: '/Register'})
    },
    // 上方登录按钮函数
    login () {
      this.$router.push({path: '/Login'})
    },
    updateCondition () {
      // 用于更换注册状态
      this.LogCondition = !this.LogCondition
    },
    Stu_Home () {
      this.$router.push({path: '/Stu_Home'})
    }
  },
  data () {
    return {
      navList: [
        {name: '/', navItem: 'Home'},
        {name: '/Contests', navItem: 'Contests'},
        {name: '/Problems', navItem: 'Problems'}
      ],
      LogCondition: false // use this to judge whether it have been login
    }
  }
}
</script>

<style scoped>
  .right_part{
    float:right
  }
</style>

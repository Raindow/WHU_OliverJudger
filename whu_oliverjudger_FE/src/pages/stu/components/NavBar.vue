<template>
  <el-menu :default-active="this.$route.path" router mode="horizontal">
    <el-menu-item>
      <el-image  :src="require('@/assets/logo.png')" fit="fit"></el-image>
    </el-menu-item>
<!--    el-menu-item的index设为要跳转的路由（并且点击菜单项，会直接push到点击的页面)。-->
<!--    注意：一定要设置el-submenu的index属性（1，2，3…）。不然会出bug-->
    <el-menu-item v-for="(item,i) in navList" :key="i" :index="item.name" :class="item.navItemIcon">
      {{ item.navItem }}
    </el-menu-item >
    <div class="right_part">
    <el-button v-show="LogCondition" type="primary" @click="registerVisible = true">注册</el-button>
    <el-button v-show="LogCondition" type="primary" @click="loginVisible = true">登录</el-button>
<!--      用于注册登录的弹窗-->
    <el-dialog title="登录" :visible.sync="loginVisible" :before-close="handleClose">
        <login></login>
    </el-dialog>
    <el-dialog title="注册" :visible.sync="registerVisible" :before-close="handleClose">
        <register></register>
    </el-dialog>
<!--      用于用户选项的下拉列表-->
    <el-dropdown>
    <span class="el-dropdown-link" v-if="!LogCondition">
      <i class="el-icon-user"></i>Stu_Name<i class="el-icon-arrow-down el-icon--right"></i>
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
import Login from '@/pages/stu/views/Login.vue'
import Register from '@/pages/stu/views/Register.vue'
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
  components: {
    'login': Login,
    'register': Register
  },
  data () {
    return {
      navList: [
        {
          name: '/',
          navItem: 'Home',
          navItemIcon: 'el-icon-s-home'
        },
        {
          name: '/Contests',
          navItem: 'Contests',
          navItemIcon: 'el-icon-trophy'

        },
        {
          name: '/Problems',
          navItem: 'Problems',
          navItemIcon: 'el-icon-s-promotion'

        }
      ],
      LogCondition: false, // use this to judge whether it have been login
      registerVisible: false,
      loginVisible: false
    }
  }
}
</script>

<style scoped>
  .right_part{
    float:right
  }
</style>

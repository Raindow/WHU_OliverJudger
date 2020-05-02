<!--
NavBar.vue
用于显示处理导航栏的信息
同时import的Login和Register用于处理登录注册请求
-->
<template>
  <div>
    <el-image  :src="require('@/assets/logo.png')" fit="fit" class="barImg" @click="linkto('Home')"></el-image>
  <el-menu :default-active="this.$route.path" router mode="horizontal" class="bar">
    <el-menu-item v-for="(item,i) in navList" :key="i" :index="item.name" >
      <i :class="item.navItemIcon"></i>
      {{ item.navItem }}
    </el-menu-item >

    <el-submenu index="About">
      <template slot="title"><i class="el-icon-star-on"></i>
        <span>About</span></template>
      <el-menu-item index="/Judger"><i class="el-icon-question"></i><span>About</span></el-menu-item>
      <el-menu-item index="/Us"><i class="el-icon-info"></i><span>Us</span></el-menu-item>
    </el-submenu>
    <div class="right_part">
    <el-button v-show="!  isLogin () " type="primary" @click="registerVisible = true">注册</el-button>
    <el-button v-show="!  isLogin () " type="primary" @click="loginVisible = true">登录</el-button>
<!--      用于注册登录的弹窗-->
    <el-dialog title="登录" :visible.sync="loginVisible" :before-close="handleClose">
        <login></login>
    </el-dialog>
    <el-dialog title="注册" :visible.sync="registerVisible" :before-close="handleClose">
        <register></register>
    </el-dialog>
<!--      用于用户选项的下拉列表-->
    <el-dropdown>
    <span class="el-dropdown-link" v-show="  isLogin () ">
      <i class="el-icon-user"></i>{{ID}}<i class="el-icon-arrow-down el-icon--right"></i>
    </span>
    <el-dropdown-menu slot="dropdown" >
      <el-dropdown-item @click.native="Stu_Home">Home</el-dropdown-item>
      <el-dropdown-item @click.native="Stu_Submission">Submissions</el-dropdown-item>
      <el-dropdown-item @click.native="Setting">Setting</el-dropdown-item>
      <el-dropdown-item @click.native="Loginout">Log out</el-dropdown-item>
    </el-dropdown-menu>
    </el-dropdown>
    </div>
  </el-menu>
  </div>
</template>

<script>
import Login from '@/pages/stu/components/Register-Login/Login.vue'
import Register from '@/pages/stu/components/Register-Login/Register.vue'
export default {
  name: 'NavBar',
  watch: {
    LoginCondition: 'isLogin'
  },
  methods: {
    linkto (url) {
      this.$router.push('/' + url)
    },
    isLogin () {
      let tem = !!localStorage.getItem('isLogin')
      if (tem === true) {
        this.LoginCondition = true
        return true
      } else {
        this.LoginCondition = false
        return false
      }
    },
    // 弹窗退出函数
    handleClose () {
      this.registerVisible = false
      this.loginVisible = false
    },

    // 上方注册按钮函数
    register () {
      this.$router.push({path: '/Register'})
    },
    // 上方登录按钮函数
    login () {
      this.$router.push({path: '/Login'})
    },

    Stu_Home () {
      this.$router.push({path: '/Stu_Home'})
    },
    Stu_Submission () {
      this.$router.push({path: '/Stu_Submission'})
    },
    Setting () {
      this.$router.push({path: '/Setting/Profile'})
    },
    Loginout () {
      localStorage.removeItem('isLogin')
      localStorage.removeItem('userID')
      var tem = localStorage.getItem('isLogin')
      console.log(tem)
      this.LoginCondition = false
      this.$router.push('/' + 'Home')
      location.reload()
    }
  },
  components: {
    'login': Login,
    'register': Register
  },
  data () {
    return {
      ID: localStorage.getItem('userID'),
      navList: [
        {
          name: '/Home',
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
        },
        {
          name: '/Courses',
          navItem: 'Courses',
          navItemIcon: 'el-icon-s-flag'
        }
      ],
      Stu_Name: '',
      LoginCondition: false, // use this to judge whether it have been login
      registerVisible: false,
      loginVisible: false
    }
  }
}
</script>

<style scoped>
  .barImg{
    height: 65px;
    float: left;
    margin-right: 2%
  }
  .right_part{
    float:right
  }
  .bar{
    float: left;
    width: 80%;
    min-width: 650px
  }
  @media screen and (max-width: 1230px) {
    .bar{
      float: left;
      width: 100%;
      min-width: 650px
    }
  }
</style>

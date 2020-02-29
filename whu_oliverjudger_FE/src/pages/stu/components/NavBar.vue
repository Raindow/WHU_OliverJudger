<template>
  <el-menu :default-active="this.$route.path" router mode="horizontal">
    <el-menu-item>
      <el-image  :src="require('@/assets/logo.png')" fit="fit"></el-image>
    </el-menu-item>
    <el-menu-item v-for="(item,i) in navList" :key="i" :index="item.name">
      {{ item.navItem }}
    </el-menu-item>
    <el-menu-item type="flex" justify="end">
      <el-button type="info">注册</el-button>
      <el-button type="info">登陆</el-button>

    </el-menu-item>
  </el-menu>

</template>

<script>
export default {
  name: 'NavBar',
  data () {
    return {
      navList: [
        {name: '/', navItem: 'Home'},
        {name: '/Contests', navItem: 'Contests'},
        {name: '/Problems', navItem: 'Problems'}
      ]
    }
  }
}
</script>

<style scoped>
</style>

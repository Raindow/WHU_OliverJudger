<template>
  <el-menu :default-active="this.$route.path" router mode="horizontal">
    <el-menu-item v-for="(item,i) in navList" :key="i" :index="item.name">
      {{ item.navItem }}
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

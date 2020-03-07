<template>
  <el-menu
    default-active="this.$route.path"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
    router>
    <el-menu-item index="/Setting/Account">
      <i class="el-icon-menu"></i>
      <span slot="title">个人信息</span>
    </el-menu-item>
    <el-menu-item index="/Setting/Profile">
      <i class="el-icon-setting"></i>
      <span slot="title">账号设置</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: 'SideBar'
}
</script>

<style scoped>

</style>

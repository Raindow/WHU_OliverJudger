<template>
  <el-menu
    default-active="this.$route.path"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
    router>
    <slot name="stu_picture"></slot>
    <el-menu-item index="/Setting/Profile">
      <i class="el-icon-menu"></i>
      <span slot="title">个人信息</span>
    </el-menu-item>
    <el-menu-item index="/Setting/Account">
      <i class="el-icon-setting"></i>
      <span slot="title">账号设置</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: 'SideBar',
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style scoped>

</style>

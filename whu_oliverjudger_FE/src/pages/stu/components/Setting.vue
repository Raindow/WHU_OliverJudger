<template>
  <el-row class="tac">
  <el-col :span="8">
    <side-bar></side-bar>
  </el-col>
    <el-col :span="8">
      <router-view></router-view>
    </el-col>
  </el-row>
</template>

<script>
import SideBar from '@/pages/stu/components/SideBar'
export default {
  name: 'Setting',
  components: {
    'SideBar': SideBar
  }
}
</script>

<style scoped>
.tac{
  margin:5%
}
</style>

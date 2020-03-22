<template>
  <el-row class="tac">
  <el-col :span="8">
    <SideBar>
      <el-image
        slot="stu_picture"
        style="width: 100px; height: 100px"
        :src="require('@/assets/Stu_Default_Picture.jpeg')"
        fit="fit"></el-image>
    </SideBar>
  </el-col>
    <el-col :span="16">
      <router-view></router-view>
    </el-col>
  </el-row>
</template>

<script>
import SideBar from '@/pages/stu/components/Student-Center/SideBar'
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

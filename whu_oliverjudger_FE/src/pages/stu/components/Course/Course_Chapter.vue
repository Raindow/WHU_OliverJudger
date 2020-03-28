<template>
  <el-row class="tac">
    <el-col :span="8">
    <!--      获取当前charpter的名称 $route.params.id 传到Couese_Side_Bar中-->
      <Course_Side_Bar>
      </Course_Side_Bar>
    </el-col>
    <el-col :span="16">
      <router-view></router-view>
    </el-col>
  </el-row>
</template>

<script>
// eslint-disable-next-line camelcase
import Course_Side_Bar from '@/pages/stu/components/Course/Course_Side_Bar'
export default {
  name: 'Course_Chapter',
  components: {
    Course_Side_Bar
  }
}
</script>

<style scoped>

</style>

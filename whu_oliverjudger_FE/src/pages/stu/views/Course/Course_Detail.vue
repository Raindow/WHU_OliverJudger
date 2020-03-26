<template>
  <div class="Course_Detail">
    <Course_NavBar :courseName="CourseName"></Course_NavBar>
    <router-view>
    </router-view>
  </div>
</template>
<script>
// eslint-disable-next-line camelcase
import Course_NavBar from '@/pages/stu/components/Course/Course_NavBar'
export default {
  name: 'Course_Detail',
  components: {
    Course_NavBar
  },
  mounted () {
    console.log()
  },
  data: function () {
    return {
      // 接收参数
      CourseName: this.$store.state.Course
    }
  }
}
</script>

<style scoped>

</style>

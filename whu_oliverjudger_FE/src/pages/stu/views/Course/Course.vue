<!--
Course.vue
这个页面是拿来做Course的主界面，课程的每个item使用的是Course_Item
-->
<template>
  <div class="Course">
    <div v-for="(item,i) in items" :key="i" :index="item.name">
      <CourseItem v-bind:title="item.navItem" :imgSrc="item.imgSrc" :url="item.name" :course-english="item.navIndex">
      </CourseItem>
    </div >
  </div>
</template>

<script>
// 这里import的是每个CourseItemde1e组件的vue
import CourseItem from '@/pages/stu/components/Course/CourseItem'
export default {
  name: 'Course',
  components: {
    CourseItem
  },
  data () {
    return {
      items: []
    }
  },
  mounted: function () {
    this.items = []
    let that = this
    this.$axios.get('/course/showCourseAllList'
    ).then(function (res) {
      that.items = res.data
    }).catch(function (error) {
      console.log(error)
    })
  },
  methods: {
  }
}
</script>

<style scoped>
  .Course{
    position: relative;
    margin: 5% auto 0 auto;
    width: 80%;
    min-height: 475px;
    border-right: solid aliceblue 2px;
    border-left: solid aliceblue 2px;
    border-radius: 5px;
    display: flex;
    display: -webkit-flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
  }
</style>

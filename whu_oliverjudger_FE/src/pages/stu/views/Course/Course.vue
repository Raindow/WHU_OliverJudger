<template>
  <div class="Course">
<!--这个页面是拿来做Course的主界面，课程的每个item使用的是Course_Item-->
    <div v-for="(item,i) in items" :key="i" :index="item.name">
      <CourseItem v-bind:title="item.navItem" :imgSrc="item.imgSrc" :url="item.name" :course-english="item.navIndex">
      </CourseItem>
    </div >
  </div>
</template>

<script>
import CourseItem from '@/pages/stu/components/Course/CourseItem'
export default {
  name: 'Course',
  components: {
    CourseItem
  },
  data () {
    return {
      items: [],
      courseList: [
        {
          name: '/Courses/Data_Structure',
          navItem: '数据结构',
          navIndex: 'Data_Structure',
          imgSrc: 'https://pic.downk.cc/item/5e9a5fc7c2a9a83be55bc51a.jpg'
        },
        {
          name: '/Courses/Java',
          navItem: '面向对象程序设计Java',
          navIndex: 'Java',
          imgSrc: 'https://pic.downk.cc/item/5e9a601fc2a9a83be55c0cb4.jpg'

        },
        {
          name: '/Courses/Cplusplus',
          navItem: 'C++程序设计',
          navIndex: 'Cplusplus',
          imgSrc: 'https://pic.downk.cc/item/5e9a6032c2a9a83be55c1cf8.jpg'
        },
        {
          name: '/Courses/Objective-C',
          navItem: 'Objective-C',
          navIndex: 'Objective-C',
          imgSrc: 'https://pic.downk.cc/item/5e9a606ec2a9a83be55c4b4d.jpg'
        },
        {
          name: '/Courses/Mysql',
          navItem: '数据库系统',
          navIndex: 'Mysql',
          imgSrc: 'https://pic.downk.cc/item/5e9a60a6c2a9a83be55c7362.jpg'
        }
      ]
    }
  },
  mounted: function () {
    this.items = []
    let that = this
    this.$axios.get('/course/showCourseAllList'
    ).then(function (res) {
      console.log(res.data)
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

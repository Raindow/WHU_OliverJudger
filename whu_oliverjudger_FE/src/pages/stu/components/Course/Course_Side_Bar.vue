<template>
  <el-col :span="8">
    <h2>{{charpterName}}</h2>
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b" >
<!--      左侧选择框-->
      <el-menu-item v-for="(item,index) in items" v-bind:key="index"  @click.native="linkto(item)">
        <i class="el-icon-menu"></i>
        <span >{{item.chapter_sub_CN}}</span>
      </el-menu-item>
    </el-menu>
  </el-col>
</template>

<script>
export default {
  name: 'Course_Side_Bar',
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    linkto (item) {
      this.$router.push(this.router_item + '/' + item.chapter_sub_ENG)
    }
  },
  data: function () {
    return {
      ChapterName: '',
      router_item: '/Courses/' + sessionStorage.getItem('CourseName') + '/' + sessionStorage.getItem('ChapterName'),
      Queue_StackItems: [
        {chapter_sub_CN: '概览', chapter_sub_ENG: 'QueueandStack_Abstract'},
        {chapter_sub_CN: '队列：先入先出的数据结构', chapter_sub_ENG: 'Queue_FIFO'},
        {chapter_sub_CN: '队列和广度优先搜索', chapter_sub_ENG: 'Queue_BFS'},
        {chapter_sub_CN: '栈：后入先出的数据结构', chapter_sub_ENG: 'Stack_LIFO'},
        {chapter_sub_CN: '栈和深度优先搜索', chapter_sub_ENG: 'Stack_DFS'},
        {chapter_sub_CN: '小结', chapter_sub_ENG: 'QueueandStack_Summary'}
      ],
      Array_StringItems: [
        {chapter_sub_CN: '数组字符串概览', chapter_sub_ENG: 'Array_String_Abstract'},
        {chapter_sub_CN: '二维数组', chapter_sub_ENG: 'Array_String_Two-Dimensional-Array'},
        {chapter_sub_CN: '双指针技巧', chapter_sub_ENG: 'Array_String_Double-Link'},
        {chapter_sub_CN: '小结', chapter_sub_ENG: 'Array_String_QueueandStack_Summary'}
      ],
      Test: [
        {
          chapter_sub_CN: 'Test', chapter_sub_ENG: 'Test'
        }
      ],
      items: []
    }
  },
  // computed: {
  //   router_item () {
  //     return this.$store.getters.calculate_chapter_route
  //   }
  // },
  beforeMount () {
    this.ChapterName = sessionStorage.getItem('ChapterName')
    if (this.ChapterName === 'queue-stack') {
      this.items = []
      this.items = this.Queue_StackItems
    } else if (this.ChapterName === 'array-string') {
      this.items = []
      this.items = this.Array_StringItems
    } else {
      this.items = this.Test
    }
  },
  watch: {
    // 监听相同路由下参数变化的时候，从而实现异步刷新
    '$route' (to, from) {
      this.ChapterName = sessionStorage.getItem('ChapterName')
      if (this.ChapterName === 'queue-stack') {
        this.items = []
        this.items = this.Queue_StackItems
      } else if (this.ChapterName === 'array-string') {
        this.items = []
        this.items = this.Array_StringItems
      }
    }
  }
}
</script>

<style scoped>

</style>

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
      <el-menu-item v-for="(item,index) in items" v-bind:key="index"  @click.native="linkto">
        <i class="el-icon-menu"></i>
        <span >{{item.chapter_sub_CN}}</span>
      </el-menu-item>
    </el-menu>
  </el-col>
</template>

<script>
export default {
  name: 'Course_Side_Bar',
  props: {
    charpterName: String
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  },
  data: function () {
    return {
      items: [
        {chapter_sub_CN: '概览', chapter_sub_ENG: 'QueueandStack_Abstract'},
        {chapter_sub_CN: '队列：先入先出的数据结构', chapter_sub_ENG: 'Queue_FIFO'},
        {chapter_sub_CN: '队列和广度优先搜索', chapter_sub_ENG: 'Queue_BFS'},
        {chapter_sub_CN: '栈：后入先出的数据结构', chapter_sub_ENG: 'Stack_LIFO'},
        {chapter_sub_CN: '栈和深度优先搜索', chapter_sub_ENG: 'Stack_DFS'},
        {chapter_sub_CN: '小结', chapter_sub_ENG: 'QueueandStack_Summary'}
      ]
    }
  }
}
</script>

<style scoped>

</style>

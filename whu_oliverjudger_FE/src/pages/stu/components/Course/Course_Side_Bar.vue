<template>
  <el-col :span="20">
    <h2>{{ChapterName}}</h2>
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
        <span >{{item.Chapter_Sub_CN}}</span>
      </el-menu-item>
    </el-menu>
  </el-col >
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
      this.$router.push(this.router_item + '/' + item.Chapter_Sub_ENG)
    }
  },
  data: function () {
    return {
      ChapterName: '',
      router_item: '/Courses/' + sessionStorage.getItem('CourseName') + '/' + sessionStorage.getItem('ChapterName'),
      Test: [
        {
          Chapter_Sub_CN: 'Test', Chapter_Sub_ENG: 'Test'
        }
      ],
      items: []
    }
  },
  mounted: function () {
    this.items = []
    this.ChapterName = sessionStorage.getItem('ChapterName')
    let that = this
    this.$axios.get('/chapter/showChapterList', { // 还可以直接把参数拼接在url后边
      params: {
        chapter: that.ChapterName
      }
    }).then(function (res) {
      that.items = res.data
    }).catch(function (error) {
      console.log(error)
    })
  },
  watch: {
    // 监听相同路由下参数变化的时候，从而实现异步刷新
    '$route' (to, from) {
      this.ChapterName = sessionStorage.getItem('ChapterName')
      let that = this
      this.$axios.get('/chapter/showChapterList', { // 还可以直接把参数拼接在url后边
        params: {
          chapter: that.ChapterName
        }
      }).then(function (res) {
        that.items = res.data
      }).catch(function (error) {
        console.log(error)
      })
    }
  }
}
</script>

<style scoped>

</style>

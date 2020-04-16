<template>
<!--  顶端-->
  <el-carousel type="card" ref="carousel" height="150px" @click.native="linkto" :autoplay="autoSlip" indicator-position="none">
    <el-carousel-item v-for="item in items" :key="item.Chapter">
      <div>
        <h2>
          {{ item.Chapter }}
        </h2>
        {{courseEnglishName}}
      </div>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  name: 'Course_NavBar',
  data: function () {
    return {
      // 定义了data中的 courseEnglishName，由于props无法直接使用，避免麻烦
      autoSlip: false,
      courseEnglishName: sessionStorage.getItem('CourseName'),
      Data_StructureItem: [
        {chapter: '队列&栈', link: '/Courses/Data_Structure/queue-stack', name: 'queue-stack'},
        {chapter: '数组和字符串', link: '/Courses/Data_Structure/array-string', name: 'array-string'},
        {chapter: '链表', link: '/Courses/Data_Structure/linked-list', name: 'linked-list'},
        {chapter: '哈希表', link: '/Courses/Data_Structure/hash-map', name: 'hash-map'},
        {chapter: '二分查找', link: '/Courses/Data_Structure/binary-search', name: 'binary-search'},
        {chapter: '二叉树', link: '/Courses/Data_Structure/binary-tree', name: 'binary-tree'},
        {chapter: 'N叉树', link: '/Courses/Data_Structure/n-tree', name: 'n-tree'},
        {chapter: '前缀树', link: '/Courses/Data_Structure/prefix-tree', name: 'prefix-tree'}
      ],
      MysqlItem: [
        {chapter: '增删改查', link: '/Courses/Mysql/adus', name: 'adus'},
        {chapter: '查询子句', link: '/Courses/Mysql/substatement', name: 'substatement'},
        {chapter: '范式', link: '/Courses/Mysql/paradigm', name: 'paradigm'}
      ],
      items: [
      ]
    }
  },
  mounted: function () {
    // 判断课程总类
    // 看是什么课程，给items赋值
    // if (this.courseEnglishName === 'Data_Structure') {
    //   this.items = []
    //   this.items = this.Data_StructureItem
    // } else if (this.courseEnglishName === 'Mysql') {
    //   this.items = []
    //   this.items = this.MysqlItem
    // }
    this.items = []
    let that = this
    this.$axios.get('/course/showCourseList', { // 还可以直接把参数拼接在url后边
      params: {
        course: this.courseEnglishName
      }
    }).then(function (res) {
      console.log(res.data)
      that.items = res.data
    }).catch(function (error) {
      console.log(error)
    })
  },
  methods: {
    // 给每个都弄一个点击事件，如果点击了对应的章节就会跳过去了
    linkto () {
      let activeIndex = this.$refs.carousel.activeIndex
      this.$store.commit('editChapter', this.items[activeIndex].name)
      this.$router.push(this.items[activeIndex].link)
    }
  }
}
</script>

<style scoped>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>

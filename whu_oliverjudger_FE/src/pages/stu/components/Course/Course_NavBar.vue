<template>
<!--  顶端-->
  <el-carousel type="card" ref="carousel" height="150px" @click.native="linkto" :autoplay="false">
    <el-carousel-item v-for="item in items" :key="item.chapter">
      <div>
        <h2>
          {{ item.chapter }}
        </h2>
        {{courseEnglishName}}
      </div>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  name: 'Course_NavBar',
  props: {
    courseName: String
  },
  data: function () {
    return {
      courseEnglishName: this.courseName,
      Data_StructureItem: [
        {chapter: '队列&栈', link: '/Courses/Data_Structure/queue-stack'},
        {chapter: '数组和字符串', link: '/Courses/Data_Structure/array-string'},
        {chapter: '链表', link: '/Courses/Data_Structure/linked-list'},
        {chapter: '哈希表', link: '/Courses/Data_Structure/hash-map'},
        {chapter: '二分查找', link: '/Courses/Data_Structure/binary-search'}
      ],
      MysqlItem: [
        {chapter: '增删改查', link: '/Courses/Mysql/ADUS'},
        {chapter: '查询子句', link: '/Courses/Mysql/SubStatement'},
        {chapter: '范式', link: '/Courses/Mysql/Paradigm'}
      ],
      items: [
      ]
    }
  },
  mounted: function () {
    // 判断课程总类
    if (this.courseEnglishName === 'Data_Structure') {
      this.items = []
      this.items = this.Data_StructureItem
    } else if (this.courseEnglishName === 'Mysql') {
      this.items = []
      this.items = this.MysqlItem
    }
  },
  methods: {
    linkto () {
      let activeIndex = this.$refs.carousel.activeIndex
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

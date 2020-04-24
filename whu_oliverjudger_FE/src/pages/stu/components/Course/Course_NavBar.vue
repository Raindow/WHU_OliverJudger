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
      items: [
      ]
    }
  },
  mounted: function () {
    this.items = []
    let that = this
    // 用于获取到课程的所有List就是每个单元Chapter
    this.$axios.get('/course/showCourseList', { // 还可以直接把参数拼接在url后边
      params: {
        course: this.courseEnglishName
      }
    }).then(function (res) {
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

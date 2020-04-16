<template>
<div class="item" @click="ClickEvent(url,courseEnglish)">
  <el-image
    style="width: 100px; height: 100px"
    :src=imgSrc
    fit="fit"></el-image>
  <div>{{title}}</div>
</div>
</template>

<script>
export default {
  name: 'CourseItem',
  data () {
    return {
    }
  },
  props: {
    // url 属性 是用来定义下一次push操作的目标路由
    // title 属性是用于存储展示课程的名字
    // imgSrc 属性用来存储展示课程的图片路径
    // coursename 属性是用来传输参数 如果可以用vuex实现就可以删除， 详情参考Course_Detail.vue
    url: {
      required: true
    },
    title: {
      require: true
    },
    imgSrc: {
      required: true
    },
    courseEnglish: {
      required: true
    }
  },
  methods: {
    ClickEvent: function (url, courseEnglish) {
      // alert(url)
      this.$store.commit('editCourse', courseEnglish)
      this.$router.push(url)
    }
  }
}
</script>

<style scoped>
  .item{
    width: 200px;
    height: 200px;
    font-size: 26px;
    border: 1px solid dodgerblue;
  }
</style>

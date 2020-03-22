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
      alert(url)
      this.$router.push({path: url, query: {coursename: courseEnglish}})
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

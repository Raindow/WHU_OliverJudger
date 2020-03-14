<template>
<div class="item" @click="ClickEvent(url)">
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
    }
  },
  methods: {
    ClickEvent: function (url) {
      alert(url)
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

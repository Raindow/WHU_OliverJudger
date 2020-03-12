<template>
  <div>
    <vue-waterfall-easy :imgsArr="imgsArr" @scrollLoadImg="fetchImgsData"></vue-waterfall-easy>
  </div>
</template>

<script>
import vueWaterfallEasy from 'vue-waterfall-easy'
// export default {
//   name: 'Course',
//   components: {
//     vueWaterfallEasy
//   }
// }
export default {
  name: 'Course',
  components: {
    vueWaterfallEasy
  },
  data () {
    return {
      imgsArr: [], // 存放所有已加载图片的数组（即当前页面会加载的所有图片）
      fetchImgsArr: [] // 存放每次滚动时下一批要加载的图片的数组
    }
  },
  methods: {
    initImgsArr (n, m) { // 初始化图片数组的方法，把要加载的图片装入
      var arr = []
      for (var i = n; i < m; i++) {
        arr.push({ src: require('@/assets/test_course.jpg'), link: '', info: '一些图片描述文字' }) // src为加载的图片的地址、link为超链接的链接地址、
        console.log(arr[i])
        // info为自定义的图片展示信息，请根据自己的情况自行填写
      }
      return arr
    },
    fetchImgsData () { // 获取新的图片数据的方法，用于页面滚动满足条件时调用
      this.imgsArr = this.imgsArr.concat(this.fetchImgsArr) // 数组拼接，把下一批要加载的图片放入所有图片的数组中
    }
  },
  created () {
    this.imgsArr = this.initImgsArr(0, 10) // 初始化第一次（即页面加载完毕时）要加载的图片数据
    this.fetchImgsArr = this.initImgsArr(10, 20) // 模拟每次请求的下一批新的图片的数据数据
  }
}
</script>

<style scoped>
  vue-waterfall-easy{
    position: fixed;
  }
</style>

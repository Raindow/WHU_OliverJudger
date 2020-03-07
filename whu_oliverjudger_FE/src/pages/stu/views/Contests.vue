
<template>
<!--  <div id="Contests">-->
<!--    <h1>我是Contests</h1>-->
<!--  </div>-->
  <ContestsInformation></ContestsInformation>
<!--  <vue-waterfall-easy :imgsArr="imgsArr" @scrollLoadImg="fetchImgsData">-->
<!--&lt;!&ndash;    <template slot-scope="props">&ndash;&gt;-->
<!--&lt;!&ndash;    <div class="player_info">&ndash;&gt;-->
<!--&lt;!&ndash;      <div class="title"><i class="tt tt-quanburen"></i>{{props.value.info}}</div>&ndash;&gt;-->
<!--&lt;!&ndash;      <div class="ticket">&ndash;&gt;-->
<!--&lt;!&ndash;        <mt-button @click="upLoadTicket(props.value.id)" size="small"><i class="tt tt-quanburen"></i>投票</mt-button>&ndash;&gt;-->
<!--&lt;!&ndash;      </div>&ndash;&gt;-->
<!--&lt;!&ndash;      <p class="num">{{props.index+1}}票</p>&ndash;&gt;-->
<!--&lt;!&ndash;    </div>&ndash;&gt;-->
<!--&lt;!&ndash;</template>&ndash;&gt;-->
<!--  </vue-waterfall-easy>-->
</template>

<script>
import ContestsInformation from '../components/ContestsInformation'
import vueWaterfallEasy from 'vue-waterfall-easy'
export default {
  name: 'Contests',
  data () {
    return {
      // 存放所有已加载图片的数组（即当前页面会加载的所有图片）
      imgsArr: [],
      // 存放每次滚动时下一批要加载的图片的数组
      fetchImgsArr: []
    }
  },
  components: {
    vueWaterfallEasy,
    ContestsInformation
  },
  methods: {
    initImgsArr (n, m) { // 初始化图片数组的方法，把要加载的图片装入
      var arr = []

      arr.push({ src: "require('@/assets/Stu_Default_Picture.jpeg')", link: '', info: '一些图片描述文字' }) // src为加载的图片的地址、link为超链接的链接地址、

      // info为自定义的图片展示信息，请根据自己的情况自行填写

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

  /*#Contests{*/
  /*  margin: 0;*/
  /*  padding: 0;*/
  /*  background: lightyellow;*/
  /*  height: 600px;*/
  /*  width: 100%;*/
  /*}*/
</style>

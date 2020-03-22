
<template>
  <ContestsInformation></ContestsInformation>
</template>

<script>
import ContestsInformation from '../../components/Contests/ContestsInformation'

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
    ContestsInformation
  }
}

</script>

<style scoped>
</style>

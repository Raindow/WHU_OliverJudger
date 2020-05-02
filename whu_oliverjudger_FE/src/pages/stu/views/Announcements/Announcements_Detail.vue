<!--
Announcements_Detail.vue
用于显示公告的具体页面
-->
<template>
  <div class="Announcements_detail">
    <div class="titleStyle" v-html="title"></div>
    <div class="detailContentStyle" v-html="detailContent"></div>
  </div>
</template>

<script>
export default {
  name: 'Announcements_Detail',
  data () {
    return {
      title: '',
      detailContent: ''
    }
  },
  created () {
    this.init()
  },
  methods: {
    getDetail (data) {
      return data.replace(/\\n/g, '<br/>')
    },
    init () {
      let that = this
      this.$axios.get('/announcement/showDetail', {
        params: {
          title: this.$route.params.id
        }
      }).then(function (res) {
        that.detailContent = (res.data[0]).Content
        that.title = that.$route.params.id
      }).catch(function (error) {
        console.log(error)
      })
    }
  }
}
</script>

<style scoped>
  .Announcements_detail
  {
    position: relative;
    float: left;
    margin: 1% auto 0 auto;
    background: #f4f4f4;
    width: 80%;
    min-height: 375px;
    border-right: solid aliceblue 2px;
    border-radius: 5px;
  }
  .titleStyle{

    position: relative;
    /*width: 60%;*/
    /*font-style: italic;*/
    font-size: 20px;
      display: inline-block;
    text-align: left;
  }
  .detailContentStyle
  {

    position: relative;
    /*width: 80%;*/
    /*font-style: italic;*/
    font-size: 15px;
    /*display: inline-block;*/
    margin: 2% auto 1% auto;
    text-align: left;
  }
</style>

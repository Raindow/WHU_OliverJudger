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
      return data.replace(/\n/g, '<br/>')
    },
    init () {
      let that = this
      let xmlhttp = new XMLHttpRequest()
      xmlhttp.open('POST', 'http://127.0.0.1:3000/announcement')
      xmlhttp.setRequestHeader('content-type', 'application.json')
      let data = {title: this.$route.params.id}
      xmlhttp.onreadystatechange = function (res) {
        // eslint-disable-next-line no-undef
        console.log(xmlhttp.status)
        if (xmlhttp.readyState === 4) {
          if (xmlhttp.status === 200) {
            let {Title, Content} = JSON.parse(xmlhttp.response)[0]
            that.detailContent = that.getDetail(Content)
            that.title = that.getDetail(Title)
          }
        }
      }
      xmlhttp.send(JSON.stringify(data))
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

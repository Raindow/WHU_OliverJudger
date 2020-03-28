<template>
  <div class="Announcements_detail">
    <div class="titleStyle" v-html=" getDetail ($route.params.id)"></div>

    <div class="detailContentStyle" v-html=" getDetail (detailContent)"></div>

  </div>

</template>

<script>
export default {
  name: 'Announcements_Detail',
  data () {
    return {
      title: '',
      detailContent: '',
      tableData: [] // 存储通告数据
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      this.title = '武汉大学在线测评系统'
      this.detailContent = '本项目是由何承达老师指导，具体成员为石泽昆，陈添，黄文柯。\n\n' +
        '所有参加的学生都要求是武大的学生，希望你们使用愉快！”\n' +
        '\n'
      this.tableData = [
        {
          startAt: '2020-2-25 13:37:58',
          endAt: '2020-2-25 13:37:58',
          contestType: 'Accepted',
          rule: '1',
          creator: 'aaa'
        }]
    },
    getDetail (data) {
      return data.replace(/\n/g, '<br/>')
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

<template>
  <div class="contestsInformation_detail">
    <span class="titleStyle" >{{title}}</span>

    <span class="detailContentStyle" v-html=" getDetail ()"></span>
  </div>
</template>

<script>
export default {
  name: 'ContestsInformation_Detail',
  data () {
    return {
      title: '2019级《高级程序设计语言》过程性考核3-重现',
      detailContent: '本次测试是本学期第3次过程性考核，主要考核以数组、指针、字符串等内容为主。\n\n' +
        '1.所有参加测试的学生需要事先在QDUOJ上注册账户，账户名统一为“班级－学号－姓名”的格式，例如“1班-2019000001-张三”。\n' +
        '\n' +
        '2.本次考核时间为两节课，采用计算机自动OI评测模式，评测结果按照解题总得分排名，排名最高者为100分，其他按照排名加权计算。\n' +
        '\n' +
        '3.考核密码为：19test3'
    }
  },
  methods: {
    getDetail () {
      return this.detailContent.replace(/\n/g, '<br/>')
    }
  }
}
</script>

<style scoped>
  .contestsInformation_detail
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
    /*float: left;*/
    /*width: 60%;*/
    /*font-style: italic;*/
    font-size: 20px;
    display: inline-block;
    text-align: left;
  }
  .detailContentStyle
  {

    position: relative;
    float: left;
    /*width: 80%;*/
    /*font-style: italic;*/
    font-size: 15px;
    /*display: inline-block;*/
    margin: 2% auto 0% auto;
    text-align: left;
  }
</style>

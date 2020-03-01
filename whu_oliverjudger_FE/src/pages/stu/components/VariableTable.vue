<template>
<!--  show-heade 是否显示表头-->
  <el-table
    :show-header="showHeader"
    :data="tableData"
    stripe
  >
<!--    在el-table-column中用prop属性来对应对象中的键名即可填入数据，-->
<!--    用label属性来定义表格的列名。-->
<!--    可以使用width属性来定义列宽。-->
    <el-table-column
      v-for="col in columnHeaders" :key="col.prop" :prop="col.prop" :label="col.label"
    >
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: 'VariableTable',
  props: {
    tableData: {
      required: true
    },
    columnHeaders: {
      required: true
    },
    showHeader: {
      required: false,
      type: Boolean,
      default: true
    }
  }
  // mounted () {
  //   this.init()
  // },
  // methods: {
  //   init () {
  //     this.setTableContent()
  //   },
  //   setTableContent () {
  //     this.columnHeaders = [
  //       {prop: 'announcement', label: '公告'},
  //       {prop: 'date', label: '日期'}
  //     ]
  //     this.tableData = [
  //       {announcement: 'OliverJudger', date: '2020-20-20'},
  //       {announcement: 'OliverJudger', date: '2020-20-20'},
  //       {announcement: 'OliverJudger', date: '2020-20-20'},
  //       {announcement: 'OliverJudger', date: '2020-20-20'}
  //     ]
  //   },
  //   clickEvent () {
  //     console.log('clickSuccessful')
  //   }
  // }
}
</script>

<style scoped>

</style>

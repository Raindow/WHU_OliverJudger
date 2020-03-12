<template>
<!--  show-heade 是否显示表头-->
  <el-table
    :show-header="showHeader"
    :data="tableData"
    stripe
    @row-click="clickEvent"
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
    },
    clickEvent: {
      required: false,
      type: Function,
      default: void (0)
    }
  }
}
</script>

<style scoped>

</style>

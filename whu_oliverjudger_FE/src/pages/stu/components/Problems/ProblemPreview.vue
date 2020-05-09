<!--
ProblemPreview.vue
用于处理题目列表哦页面的显示
-->
<template>
  <div class="problemPreview">
    <span>
      <el-input
        class="problemSearch"
        v-model="search"
        placeholder="搜索题目 名称、内容 或 编号"
        clearable
      ></el-input>
    </span>
    <VariableTable
      :table-data="pageData"
      :column-headers="columnHeaders"
      :show-header="true"
      :click-event="clickEventForContent"
    ></VariableTable>
    <el-pagination
      class="problemPagination"
      background
      layout="sizes, prev, pager, next"
      :page-size="pageSize"
      :page-sizes="[10, 20, 50, 100]"
      :total="showTableData.length"
      @size-change="handleSizeChange"
      :current-page.sync="currentPage"
      @current-change="handleCurrentChange"
    ></el-pagination>
  </div>
</template>

<script>
import VariableTable from '../VariableTable'
export default {
  name: 'ProblemPreview',
  components: {
    VariableTable
  },
  data () {
    return {
      problemPreviewHeight: {height: ''},
      currentPage: 1,
      pageSize: 10,
      search: '',
      columnHeaders: [ // 列表的头标签
        {prop: 'proIndex', label: '序号'},
        {prop: 'title', label: '题名'},
        {prop: 'proLevel', label: '难度'}
      ],
      tableData: [] // 存储通告数据
    }
  },
  mounted () {
    this.init()
    // 计算公告高度
    window.addEventListener('resize', this.calculateProblemPreviewHeight, false)
  },
  computed: {
    showTableData: {
      // 计算需要显示的的条目总量
      get () {
        return this.tableData.filter(data => !this.search ||
          data.title.toLowerCase().includes(this.search.toLowerCase()) ||
          data.proIndex === Number(this.search))
      }
    },
    // 设置当前页的显示
    pageData: function () {
      return this.showTableData.slice(((this.currentPage) - 1) * this.pageSize, this.currentPage * this.pageSize)
    }
  },
  watch: {
    // 监听search变量，当search变化时，设置当前页数
    search: function () {
      this.handleCurrentChange(1)
    }
  },
  methods: {
    init () {
      this.setTableContent()
      // this.calculateProblemPreviewHeight()
    },
    calculateProblemPreviewHeight () {
      // innerHeight 返回窗口的文档显示区的高度。
      this.problemPreviewHeight.height = (0.65 * window.innerHeight) + 'px'
    },
    setTableContent () {
      this.$axios.get('/problems/').then((res) => {
        this.tableData = res.data
        console.log(this.tableData)
      }).catch((err) => {
        console.log(err)
      })
    },
    handleSizeChange (val) {
      this.currentPage = 1
      this.pageSize = val
    },
    handleCurrentChange (currentPage) {
      this.currentPage = currentPage
    },
    clickEventForContent (row) {
      this.$router.push({ path: '/Problems/' + row.title })
    }
  }
}
</script>
<style scoped>
  .problemPreview{
    position: relative;
    margin: 2% auto 0 auto;
    width: 80%;
    min-height: 475px;
    border-radius: 5px;
  }
  .problemSearch{
    float: left;
    width: 60%;
    margin-right: 1%;
  }
  .problemPagination{
    margin: 2% auto;
  }
</style>

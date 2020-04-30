<template>
  <div>
   <span class="title"> {{$route.params.id}}</span>
    <span>
    </span>
    <span class="tableStyle">
    <VariableTable
      :table-data="pageData"
      :column-headers="columnHeaders"
      :show-header="true"
      :click-event="clickEventForContent"
    ></VariableTable>
    </span>
    <!-- page-size 每页显示条目个数  total 总条目数 -->
    <el-pagination
    class="problemPagination"
    background
    layout="prev, pager, next"
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
  name: 'Course_Chapter_Item',
  components: {
    VariableTable
  },
  data () {
    return {
      problemPreviewHeight: {height: ''},
      currentPage: 1,
      pageSize: 5,
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
          data.index.includes(this.search))
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
    },
    calculateProblemPreviewHeight () {
      // innerHeight 返回窗口的文档显示区的高度。
      this.problemPreviewHeight.height = (0.65 * window.innerHeight) + 'px'
    },
    setTableContent () {
      let that = this
      this.$axios.get('/chapter/chapterProblem', { // 还可以直接把参数拼接在url后边
        params: {
          chapter: this.$route.params.id
        }
      }).then(function (res) {
        console.log(res.data)
        that.tableData = res.data
      }).catch(function (error) {
        console.log(error)
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
div{
  margin:20px;
}
  .problemPagination{
    width: 60%;
    margin: 3% auto;
  }
  .tableStyle{
    width: 20%;
  }
</style>

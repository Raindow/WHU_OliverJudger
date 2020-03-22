<template>
  <div class="problemPreview">
<!--       :style="problemPreviewHeight">-->
    <span>
      <!--      clearable是否可清空-->
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
    <!-- page-size 每页显示条目个数  total 总条目数 -->
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
        {prop: 'index', label: '序号'},
        {prop: 'title', label: '题名'},
        {prop: 'level', label: '难度'}
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
      // this.calculateProblemPreviewHeight()
    },
    calculateProblemPreviewHeight () {
      // innerHeight 返回窗口的文档显示区的高度。
      this.problemPreviewHeight.height = (0.65 * window.innerHeight) + 'px'
    },
    setTableContent () {
      this.tableData = [{index: '1', title: 'OliverJurdge', level: '困难'},
        {index: '2', title: '武汉大学', level: '简单'}, {index: '13', title: '软件学院', level: '简单'},
        {index: '3', title: 'OliverJurdge', level: '中等'}, {index: '14', title: 'OliverJurdge', level: '中等'},
        {index: '4', title: 'OliverJurdge', level: '困难'}, {index: '15', title: '软件学院', level: '简单'},
        {index: '5', title: 'OliverJurdge', level: '简单'}, {index: '16', title: 'OliverJurdge', level: '中等'},
        {index: '6', title: '软件学院', level: '困难'}, {index: '17', title: 'OliverJurdge', level: '困难'},
        {index: '7', title: 'OliverJurdge', level: '中等'}, {index: '18', title: '武汉大学', level: '简单'},
        {index: '8', title: '武汉大学', level: '中等'}, {index: '19', title: 'OliverJurdge', level: '简单'},
        {index: '9', title: 'OliverJurdge', level: '简单'}, {index: '20', title: 'OliverJurdge', level: '中等'},
        {index: '10', title: '软件学院', level: '困难'}, {index: '21', title: '武汉大学', level: '困难'},
        {index: '11', title: 'OliverJurdge', level: '简单'}, {index: '22', title: 'OliverJurdge', level: '中等'},
        {index: '12', title: 'OliverJurdge', level: '困难'}, {index: '23', title: '软件学院', level: '困难'}
      ]
    },
    handleSizeChange (val) {
      this.currentPage = 1
      this.pageSize = val
    },
    handleCurrentChange (currentPage) {
      this.currentPage = currentPage
    },
    clickEventForContent (row) {
      alert(row.title)
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
    /*position: absolute;*/
    /*bottom: 0;*/
    margin: 2% auto;
    /*width: 100%*/
  }
</style>

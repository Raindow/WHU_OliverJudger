<template>
  <div class="announcement">
    <span>
      <span class="announcementHeader">Announcement</span>
<!--      clearable是否可清空-->
      <el-input
        class="announcementSearch"
        v-model="search"
        placeholder="标题或日期 进行搜索"
        clearable
        @change="inputSearchChanged"></el-input>
    </span>
    <div :style="tableHeight">
      <VariableTable
      :table-data="showTableContent()"
      :column-headers="columnHeaders"
      :show-header="false"
      ></VariableTable>
    </div>
<!--    page-size 每页显示条目个数  total 总条目数-->
    <el-pagination
      background
      layout="prev, pager, next"
      :page-size="pageSize"
      :total="totalTableLength"
      @current-change="handleCurrentChange"></el-pagination>
  </div>

</template>

<script>
import VariableTable from './VariableTable'
export default {
  name: 'Announcements',
  components: {
    VariableTable
  },
  data () {
    return {
      tableHeight: {
        height: ''
      },
      totalTableLength: 0, // 获取通告总数目
      pageSize: 8, // page-size 每页显示条目个数
      currentPage: 1,
      search: '',
      searchChanged: false,
      columnHeaders: [ // 列表的头标签
        {prop: 'announcement', label: '公告'},
        {prop: 'date', label: '日期'}
      ],
      tableData: [] // 存储通告数据
    }
  },
  mounted () {
    this.init()
    // 用于固定分页栏的位置
    window.onresize = () => {
      this.calculateTableHeight()
    }
  },
  methods: {
    init () {
      this.setTableContent()
      this.calculateTableHeight()
    },
    calculateTableHeight () {
      // innerheight 返回窗口的文档显示区的高度。
      this.tableHeight.height = (0.6 * window.innerHeight) + 'px'
    },
    setTableContent () {
      this.tableData = [{announcement: 'OliverJudger', date: '2020-20-20'}, {announcement: 'OliverJudger', date: '1010-10-10'},
        {announcement: 'OliverJudger', date: '2020-20-20'}, {announcement: 'OliverJudger', date: '1010-10-10'},
        {announcement: 'OliverJudger', date: '2020-20-20'}, {announcement: 'OliverJudger', date: '1010-10-10'},
        {announcement: 'OliverJudger', date: '2020-20-20'}, {announcement: 'OliverJudger', date: '1010-10-10'},
        {announcement: 'OliverJudger', date: '3020-20-20'}, {announcement: 'OliverJudger', date: '1010-10-10'},
        {announcement: 'OliverJudger', date: '2020-20-20'}, {announcement: 'OliverJudger', date: '1010-10-10'},
        {announcement: 'OliverJudger', date: '2020-20-20'}, {announcement: 'OliverJudger', date: '1010-10-10'},
        {announcement: 'OliverJudger', date: '2020-20-20'}, {announcement: 'OliverJudger', date: '1010-10-10'},
        {announcement: 'OliverJudger', date: '2020-20-20'}, {announcement: 'OliverJudger', date: '1010-10-10'},
        {announcement: 'OliverJudger', date: '2020-20-20'}, {announcement: 'OliverJudger', date: '1010-10-10'},
        {announcement: 'OliverJudger', date: '2020-20-20'}, {announcement: 'OliverJudger', date: '1010-10-10'}
      ]
      this.totalTableLength = this.tableData.length // 设置总通告数目
    },
    showTableContent () {
      // temp接收三类型的数据
      // 第一类是search没出现即展现所有数据，第二类是announcement中包含了search内容的，第三类是date中包含了的
      let temp = this.tableData.filter(data => !this.search ||
        data.announcement.toLowerCase().includes(this.search.toLowerCase()) ||
        data.date.includes(this.search))
      if (this.searchChanged) {
        this.currentPage = 1
        this.totalTableLength = temp.length
        this.searchChanged = false
      }
      return temp.slice(((this.currentPage) - 1) * this.pageSize, this.currentPage * this.pageSize)
    },
    inputSearchChanged () {
      this.searchChanged = true
    },
    handleCurrentChange (currentPage) {
      this.currentPage = currentPage
    }
  }
}
</script>
<style scoped>
  .announcement{
    text-align: center;
    position: relative;
    margin-top: 5%;
    left: 10%;
    width: 80%;
    border-right: solid aliceblue 2px;
    border-radius: 5px;
  }
  .announcementHeader{
    float: left;
    font-style: italic;
    font-size: 30px;
    display: inline-block;
    margin: 2px;
  }
  .announcementSearch{
    float: right;
    width: 60%;
    margin-right: 1%;
  }
</style>

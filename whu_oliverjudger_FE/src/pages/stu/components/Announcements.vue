<template>
  <div class="announcement">
    <span>
      <span class="announcementHeader">Announcement</span>
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
      totalTableLength: 0,
      pageSize: 8,
      currentPage: 1,
      search: '',
      searchChanged: false,
      columnHeaders: [
        {prop: 'announcement', label: '公告'},
        {prop: 'date', label: '日期'}
      ],
      tableData: []
    }
  },
  mounted () {
    this.init()
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
      this.totalTableLength = this.tableData.length
    },
    showTableContent () {
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

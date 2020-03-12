<template>
  <div class="contestsInformation">
    <span>
      <span class="contestsInformationHeader">Contest</span>
      <!--      clearable是否可清空-->
      <el-input class="contestsInformationSearch"
        v-model="search"
        placeholder="请按照比赛信息进行搜索"
        clearable>
      </el-input>
    </span>
    <div :style="tableHeight">

      <ContestsTable
        :table-data="pageData"
        :column-headers="columnHeaders"
        :show-header="true"
        :click-event="clickEvent"
      ></ContestsTable>
    </div>
    <!--    page-size 每页显示条目个数  total 总条目数-->
    <el-pagination
      class="contestsInformationPagination"
      background
      layout="prev, pager, next"
      :page-size="pageSize"
      :total="totalTableLength"
      @current-change="handleCurrentChange"></el-pagination>
  </div>

</template>

<script>
import ContestsTable from './ContestsTable'
export default {
  name: 'ContestInformation',
  components: {
    ContestsTable
  },
  data () {
    return {
      tableHeight: {
        height: ''
      },
      totalTableLength: 0, // 获取通告总数目
      pageSize: 7, // page-size 每页显示条目个数
      currentPage: 1,
      search: '',
      searchChanged: false,
      columnHeaders: [ // 列表的头标签
        {prop: 'contestName', label: '比赛名'},
        {prop: 'date', label: '日期'},
        {prop: 'usingTime', label: '使用时间'},
        {prop: 'ruleType', label: '规则类型'},
        {prop: 'availability', label: '是否可用'}
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
  computed: {
    showTableData: {
      get () {
        return this.tableData.filter(data => !this.search ||
        data.date.includes(this.search) ||
        data.contestName.toLowerCase().includes(this.search.toLowerCase()) ||
        data.usingTime.toLowerCase().includes(this.search.toLowerCase()) ||
        data.ruleType.toLowerCase().includes(this.search.toLowerCase()) ||
        data.availability.toLowerCase().includes(this.search.toLowerCase())
        )
      }
    },
    pageData: function () {
      return this.showTableData.slice(((this.currentPage) - 1) * this.pageSize, this.currentPage * this.pageSize)
    }
  },
  watch: {
    search: function () {
      this.handleCurrentChange(1)
    }
  },

  methods: {
    init () {
      this.setTableContent()
      this.calculateTableHeight()
    },
    calculateTableHeight () {
      // innerheight 返回窗口的文档显示区的高度。
      this.tableHeight.height = (0.6 * (window.innerHeight)) + 'px'
    },
    setTableContent () {
      this.tableData = [
        {contestName: 'contest1', date: '2020-1-1', usingTime: '3 days', ruleType: 'OI', availability: 'underway'},
        {contestName: 'contest2', date: '2020-1-2', usingTime: '4 days', ruleType: 'OI', availability: 'enable'},
        {contestName: 'contest3', date: '2020-1-3', usingTime: '5 days', ruleType: 'OI', availability: 'enable'},
        {contestName: 'contest4', date: '2020-1-4', usingTime: '6 days', ruleType: 'OI', availability: 'enable'},
        {contestName: 'contest4', date: '2020-1-4', usingTime: '6 days', ruleType: 'OI', availability: 'enable'},
        {contestName: 'contest4', date: '2020-1-4', usingTime: '6 days', ruleType: 'OI', availability: 'enable'},
        {contestName: 'contest4', date: '2020-1-4', usingTime: '6 days', ruleType: 'OI', availability: 'enable'},
        {contestName: 'contest4', date: '2020-1-4', usingTime: '6 days', ruleType: 'OI', availability: 'enable'},
        {contestName: 'contest4', date: '2020-1-4', usingTime: '6 days', ruleType: 'OI', availability: 'enable'},
        {contestName: 'contest4', date: '2020-1-4', usingTime: '6 days', ruleType: 'OI', availability: 'enable'},
        {contestName: 'contest4', date: '2020-1-4', usingTime: '6 days', ruleType: 'OI', availability: 'enable'}
      ]
      this.totalTableLength = this.tableData.length // 设置总通告数目
    },
    handleCurrentChange (currentPage) {
      this.currentPage = currentPage
    }
  }
}
</script>

<style scoped>
  .contestsInformation{
    position: relative;
    margin: 5% auto 0 auto;
    width: 80%;
    min-height: 475px;
    border-right: solid aliceblue 2px;
    border-radius: 5px;
  }
  .contestsInformationHeader{
    float: left;
    font-style: italic;
    font-size: 30px;
    display: inline-block;
    margin: 2px;
  }
  .contestsInformationSearch{
    float: right;
    width: 60%;
    margin-right: 1%;
  }
  .contestsInformationPagination{
    position: absolute;
    bottom: 0;
    margin: 0 auto;
    width: 100%
  }
</style>

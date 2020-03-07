<template>
  <div class="contestsInformation">
    <span>
      <span class="contestsInformationHeader">Contest</span>
      <!--      clearable是否可清空-->
      <el-input class="contestsInformationSearch"
        v-model="search"
        placeholder="请按照比赛信息进行搜索"
        clearable
        @change="inputSearchChanged">
      </el-input>
    </span>
    <div :style="tableHeight">

      <VariableTable
        :table-data="showTableContent()"
        :column-headers="columnHeaders"
        :show-header="true"
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
  name: 'ContestInformation',
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
      this.tableData = [
        {contestName: 'contest1', date: '2020-1-1', usingTime: '3 days', ruleType: 'OI', availability: 'underway'},
        {contestName: 'contest2', date: '2020-1-2', usingTime: '4 days', ruleType: 'OI', availability: 'enable'},
        {contestName: 'contest3', date: '2020-1-3', usingTime: '5 days', ruleType: 'OI', availability: 'enable'},
        {contestName: 'contest4', date: '2020-1-4', usingTime: '6 days', ruleType: 'OI', availability: 'enable'}
      ]
      this.totalTableLength = this.tableData.length // 设置总通告数目
    },
    showTableContent () {
      // temp接收三类型的数据
      // 第一类是search没出现即展现所有数据，第二类是announcement中包含了search内容的，第三类是date中包含了的
      let temp = this.tableData.filter(data => !this.search ||
        data.date.includes(this.search) ||
        data.contestName.toLowerCase().includes(this.search.toLowerCase()) ||
        data.usingTime.toLowerCase().includes(this.search.toLowerCase()) ||
        data.ruleType.toLowerCase().includes(this.search.toLowerCase()) ||
        data.availability.toLowerCase().includes(this.search.toLowerCase())
      )
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
  .contestsInformation{
    text-align: center;
    position: relative;
    margin-top: 5%;
    left: 10%;
    width: 80%;
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
</style>

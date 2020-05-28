<template>
  <div class="Stu_Submission">
    <span>
      <span class="Stu_SubmissionHeader">Submission</span>
      <!--      clearable是否可清空-->
      <el-input class="Stu_SubmissionSearch"
                v-model="search"
                placeholder="请按照提交信息进行搜索"
                clearable>
      </el-input>
<!--      <span class="Stu_SeeYourself">只看自己-->
<!--      <el-switch-->
<!--        v-model="isSeeYourself">-->
<!--      </el-switch>-->
<!--      </span>-->
    </span>
    <div :style="tableHeight">

      <VariableTable
        :table-data="pageData"
        :column-headers="columnHeaders"
        :show-header="true"
        :click-event="clickEvent"
      ></VariableTable>
    </div>
    <!--    page-size 每页显示条目个数  total 总条目数-->
    <el-pagination
      class="Stu_SubmissionPagination"
      background
      layout="prev, pager, next"
      :page-size="pageSize"
      :total="showTableData.length"
      :current-page.sync="currentPage"
      @current-change="handleCurrentChange"></el-pagination>
  </div>
</template>

<script>
import VariableTable from '../VariableTable'

export default {
  name: 'Stu_Submission',
  components: {
    VariableTable
  },
  data () {
    return {
      tableHeight: {
        height: ''
      },
      ID: localStorage.getItem('userID'),
      totalTableLength: 0, // 获取通告总数目
      pageSize: 7, // page-size 每页显示条目个数
      currentPage: 1,
      search: '',
      searchChanged: false,
      columnHeaders: [ // 列表的头标签
        {prop: 'ID', label: '用户ID'},
        {prop: 'submissionTime', label: '提交时间'},
        {prop: 'submissionStatus', label: '提交状态'},
        {prop: 'problemName', label: '问题名'},
        {prop: 'usingTime', label: '使用时间'},
        {prop: 'usingMemory', label: '使用内存'},
        {prop: 'usingLanguage', label: '使用语言'}
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
    // 输入筛选
    showTableData: {
      get () {
        return this.tableData.filter(data => !this.search ||
            data.submissionTime.includes(this.search) ||
            data.ID.toLowerCase().includes(this.search.toLowerCase()) ||
            data.problemName.toLowerCase().includes(this.search.toLowerCase()) ||
            data.usingTime.toLowerCase().includes(this.search.toLowerCase()) ||
            data.usingLanguage.toLowerCase().includes(this.search.toLowerCase()) ||
          data.usingMemory.toLowerCase().includes(this.search.toLowerCase()) ||
          data.submissionStatus.toLowerCase().includes(this.search.toLowerCase())
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
    clickEvent () {
    },
    init () {
      this.getSubmission()
      this.calculateTableHeight()
    },
    // 获取提交记录
    getSubmission () {
      let data = {
        'ID': this.ID
      }
      let that = this
      this.$axios.post('/submission/searchSubmission', data
      ).then(function (res) {
        that.dealRes(res.data)
      }).catch(function (error) {
        console.log(error)
      })
    },
    dealRes (data) {
      console.log(data[0])
      for (var i = 0; i < data.length; i++) {
        let tem = {'ID': data[i].studentID, 'submissionTime': data[i].submissionTime, 'submissionStatus': data[i].submissionStatus, 'problemName': data[i].problemName, 'usingTime': data[i].usingTime, 'usingMemory': data[i].usingMemory, 'usingLanguage': data[i].usingLanguage}
        this.tableData.push(tem)
      }
    },
    calculateTableHeight () {
      // innerheight 返回窗口的文档显示区的高度。
      this.tableHeight.height = (0.6 * (window.innerHeight)) + 'px'
    },
    handleCurrentChange (currentPage) {
      this.currentPage = currentPage
    }
  }
}
</script>

<style scoped>
  .Stu_Submission {
    position: relative;
    margin: 5% auto 0 auto;
    width: 80%;
    min-height: 475px;
    border-right: solid aliceblue 2px;
    border-radius: 5px;
  }

  .Stu_SubmissionHeader {
    float: left;
    font-style: italic;
    font-size: 30px;
    display: inline-block;
    margin: 2px;
  }

  .Stu_SeeYourself {
    font-size: 15px;
    display: inline-block;
    margin: 2px;
  }

  .Stu_SubmissionSearch {
    float: right;
    width: 60%;
    margin-right: 1%;
  }

  .Stu_SubmissionPagination {
    position: absolute;
    bottom: 0;
    margin: 0% auto;
    width: 100%
  }
</style>

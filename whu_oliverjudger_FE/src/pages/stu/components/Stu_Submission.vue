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
      <span class="Stu_SeeYourself">只看自己
      <el-switch
        v-model="isSeeYourself">
      </el-switch>
      </span>
    </span>
    <div :style="tableHeight">

      <VariableTable
        :table-data="pageData"
        :column-headers="columnHeaders"
        :show-header="true"
      ></VariableTable>
    </div>
    <!--    page-size 每页显示条目个数  total 总条目数-->
    <el-pagination
      class="Stu_SubmissionPagination"
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
  name: 'Stu_Submission',
  components: {
    VariableTable
  },
  data () {
    return {
      tableHeight: {
        height: ''
      },
      isSeeYourself: false,
      totalTableLength: 0, // 获取通告总数目
      pageSize: 7, // page-size 每页显示条目个数
      currentPage: 1,
      search: '',
      searchChanged: false,
      columnHeaders: [ // 列表的头标签
        {prop: 'submissionTime', label: '提交时间'},
        {prop: 'ID', label: '用户ID'},
        {prop: 'submissionStatus', label: '提交状态'},
        {prop: 'problemName', label: '问题名'},
        {prop: 'usingTime', label: '使用时间'},
        {prop: 'usingMemory', label: '使用内存'},
        {prop: 'usingLanguage', label: '使用语言'},
        {prop: 'author', label: '作者'}
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
          data.author.toLowerCase().includes(this.search.toLowerCase()) ||
          data.submissionStatus.toLowerCase().includes(this.search.toLowerCase())
        )
      }

    },
    // 开关筛选
    switchOnTableData: {
      get () {
        return this.tableData.filter(data => data.ID.toLowerCase().includes('aaaaaa')
        )
      }
    },
    pageData: function () {
      console.log(this.isSeeYourself)
      // return this.showTableData.slice(((this.currentPage) - 1) * this.pageSize, this.currentPage * this.pageSize)

      if (!this.isSeeYourself) {
        return this.showTableData.slice(((this.currentPage) - 1) * this.pageSize, this.currentPage * this.pageSize)
      } else {
        return this.switchOnTableData.slice(((this.currentPage) - 1) * this.pageSize, this.currentPage * this.pageSize)
      }
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
        {
          submissionTime: '2020-2-25 13:37:58',
          ID: 'aaaaaa',
          submissionStatus: 'Accepted',
          problemName: '1',
          usingTime: '1ms',
          usingMemory: '2MB',
          usingLanguage: 'c',
          author: 'aaa'
        },
        {
          submissionTime: '2020-2-25 13:37:58',
          ID: '19370be695a7',
          submissionStatus: 'Accepted',
          problemName: '1',
          usingTime: '1ms',
          usingMemory: '2MB',
          usingLanguage: 'c',
          author: 'aaa'
        },
        {
          submissionTime: '2020-2-27 13:37:58',
          ID: '19370be695a7',
          submissionStatus: 'Accepted',
          problemName: '2',
          usingTime: '1ms',
          usingMemory: '2MB',
          usingLanguage: 'java',
          author: 'bbb'
        }
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

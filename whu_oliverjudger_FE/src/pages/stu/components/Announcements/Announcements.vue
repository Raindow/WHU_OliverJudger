<!--
Announcements.vue
用来展示公告列表的信息的页面组件，调用了VariableTable.vue来实现组件化，降低耦合程度
-->
<template>
  <div class="announcement"
  :style="announcementsHeight">
    <span>
      <span class="announcementHeader">Announcement</span>
      <el-input
        class="announcementSearch"
        v-model="search"
        placeholder="标题或日期 进行搜索"
        clearable
      ></el-input>
    </span>
      <VariableTable
      :table-data="pageData"
      :column-headers="columnHeaders"
      :show-header="false"
      :click-event="clickEventForContent"
      ></VariableTable>
    <el-pagination
      class="announcementPagination"
      background
      layout="prev, pager, next"
      :page-size="pageSize"
      :total="showTableData.length"
      :current-page.sync="currentPage"
      @current-change="handleCurrentChange"
      ></el-pagination>
  </div>
</template>

<script>
import VariableTable from '../VariableTable'
export default {
  name: 'Announcements',
  components: {
    VariableTable
  },
  data () {
    return {
      announcementsHeight: {height: ''},
      pageSize: 8, // page-size 每页显示条目个数
      currentPage: 1,
      search: '',
      columnHeaders: [ // 列表的头标签
        {prop: 'Title', label: '公告'},
        {prop: 'Time', label: '日期'}
      ],
      tableData: [] // 存储通告数据
    }
  },
  mounted () {
    this.init()
    // 计算公告高度
    window.addEventListener('resize', this.calculateAnnouncementsHeight, false)
  },
  computed: {
    showTableData: {
    // 计算需要显示的的条目总量
      get () {
        return this.tableData.filter(data => !this.search ||
                                     data.Title.toLowerCase().includes(this.search.toLowerCase()) ||
                                     data.Time.includes(this.search))
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
      this.calculateAnnouncementsHeight()
    },
    calculateAnnouncementsHeight () {
      // innerHeight 返回窗口的文档显示区的高度。
      this.announcementsHeight.height = (0.65 * window.innerHeight) + 'px'
    },
    setTableContent () {
      let that = this
      this.$axios.get('/announcement/showList'
      ).then(function (res) {
        console.log(res.data)
        that.tableData = res.data
      }).catch(function (error) {
        console.log(error)
      })
    },
    handleCurrentChange (currentPage) {
      this.currentPage = currentPage
    },
    clickEventForContent (row) {
      this.$router.push({ path: '/home/' + row.Title })
    }
  }
}
</script>
<style scoped>
  .announcement{
    position: relative;
    margin: 5% auto 0 auto;
    width: 80%;
    min-height: 475px;
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
  .announcementPagination{
    position: absolute;
    bottom: 0;
    margin: 0 auto;
    width: 100%
  }
</style>

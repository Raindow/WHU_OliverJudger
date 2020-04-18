<template>
  <div>
    <el-container>
    <el-header>个人信息</el-header>
    <el-main>
      <el-row >
        <el-col :span=11>Name：{{now_name}}<el-input
          placeholder="请输入Name"
          v-model="input_name"
          clearable>
        </el-input></el-col>
        <el-col :span=11 >Major：{{now_major}}<el-input
          placeholder="请输入Major"
          v-model="input_major"
          clearable>
        </el-input></el-col>
       </el-row>
      <el-button type="primary" plain v-on:click="test">Update</el-button>
    </el-main>
  </el-container>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  data () {
    return {
      input_name: '',
      now_name: 'default',
      input_major: '',
      now_major: 'default'
    }
  },
  mounted: function () {
    let that = this
    this.$axios.get('/users/profile', { // 还可以直接把参数拼接在url后边
      params: {
        ID: localStorage.getItem('userID')
      }
    }).then(function (res) {
      console.log(res.data[0])
      that.now_name = res.data[0].Name
      that.now_major = res.data[0].Major
    }).catch(function (error) {
      console.log(error)
    })
  },
  methods: {
    test: function () {
      // alert('tt' + localStorage.getItem('userID'))
    }
  },
  created () {
    this.test()
  }
}
</script>

<style scoped>
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    margin: 10px;
    border-radius: 4px;
  }
</style>

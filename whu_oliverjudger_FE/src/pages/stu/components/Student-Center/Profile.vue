<template>
  <div>
    <el-container>
    <el-header>个人信息</el-header>
    <el-main>
      <el-row >
        <el-col :span=11>姓名：{{now_name}}<el-input
          placeholder="更新姓名"
          v-model="input_name"
          clearable>
        </el-input></el-col>
        <el-col :span=11 >专业：{{now_major}}<el-input
          placeholder="更新专业"
          v-model="input_major"
          clearable>
        </el-input></el-col>
       </el-row>
      <el-button type="primary" plain v-on:click="update">Update</el-button>
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
    update: function () {
      let data = {
        'ID': localStorage.getItem('userID'),
        'Name': this.input_name === '' ? this.now_name : this.input_name,
        'Major': this.input_major === '' ? this.now_major : this.input_major
      }
      let that = this
      this.$axios.post('/users/updateProfile', data
      ).then(function (res) {
        console.log(res.data)
        if (res.data === 'Profile更新成功') {
          that.now_name = that.input_name
          that.now_major = that.input_major
          alert('更新完成')
          location.reload()
        } else {
          alert(res.data)
          console.log(res.data)
          location.reload()
        }
      }).catch(function (error) {
        console.log(error)
      })
    }
  },
  created () {
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

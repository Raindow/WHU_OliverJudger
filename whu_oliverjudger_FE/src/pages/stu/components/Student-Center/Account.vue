<template>
  <div>
    <el-container>
      <el-header>账号设置</el-header>
      <el-main>
        <el-row >
          <el-col :span="11" >更改密码</el-col>
          <el-col :span="11" >更改邮箱
          </el-col>
        </el-row>
        <el-row >
          <el-col :span="11" >Old Password<el-input
            placeholder="请输入Old_Password"
            v-model="input_Old_Password"
            clearable>
          </el-input></el-col>
          <el-col :span="11" >Current Password<el-input
            placeholder="请输入Current Password"
            v-model="input_Current_Password"
            clearable>
          </el-input></el-col>
        </el-row>
        <el-row >
          <el-col :span="11" >New Password<el-input
            placeholder="请输入New Password"
            v-model="input_New_Password"
            clearable>
          </el-input></el-col>
          <el-col :span="11" >Current Email<el-input
            placeholder="input_Current_Email"
            v-model="input_Current_Email"
            :disabled="true">
          </el-input></el-col>
        </el-row>
        <el-row >
          <el-col :span="11" >Confirm New Password<el-input
            placeholder="确认 New Password"
            v-model="confirm_New_Password"
            clearable>
          </el-input></el-col>
          <el-col :span="11" >Input New Email<el-input
            placeholder="请输入New Email"
            v-model="input_New_Email"
            clearable>
          </el-input></el-col>
        </el-row>
        <el-row >
          <el-col :span="11" >        <el-button type="primary" plain v-on:click="UpdatePassword">Update Password</el-button>
          </el-col>
          <el-col :span="11" >        <el-button type="primary" plain>Update Email</el-button>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'Account',
  data: function () {
    return {
      input_Old_Password: '',
      input_Current_Password: '',
      input_New_Password: '',
      input_Current_Email: '591852399@qq.com',
      confirm_New_Password: '',
      input_New_Email: ''
    }
  },
  created: function () {
  },
  methods: {
    UpdatePassword: function () {
      let that = this
      this.$axios.get('/users/getAccount', { // 还可以直接把参数拼接在url后边
        params: {
          ID: localStorage.getItem('userID')
        }
      }).then(function (res) {
        console.log(res.data[0])
        console.log(res.data[0].Password)
        if (that.input_Old_Password === res.data[0].Password) {
          if (that.input_New_Password === that.confirm_New_Password) {
            if (that.input_New_Password === '' || that.confirm_New_Password === '') {
              alert('新密码不能为空')
            } else {
              let data = {
                'ID': localStorage.getItem('userID'),
                'Password': that.input_New_Password
              }
              that.$axios.post('/users/updateAccountPassword', data
              ).then(function (res) {
                console.log(res.data)
                if (res.data === 'Profile更新成功') {
                  alert('密码更新成功')
                  location.reload()
                } else {
                  alert('密码更新失败')
                  location.reload()
                }
              }).catch(function (error) {
                console.log(error)
              })
            }
          } else {
            alert('确认密码和新密码不一致，无法更新')
          }
        } else {
          alert('密码错误，无法更新密码')
        }
      }).catch(function (error) {
        console.log(error)
      })
    }
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
    border-radius: 4px;
    margin: 5px;
  }
</style>

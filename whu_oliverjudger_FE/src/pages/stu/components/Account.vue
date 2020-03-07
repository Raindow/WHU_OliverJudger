<template>
  <div>
    <el-container>
      <el-header>账号设置</el-header>
      <el-main>
        <el-row gutter="24">
          <el-col :span="12" >更改密码</el-col>
          <el-col :span="12" >更改邮箱
          </el-col>
        </el-row>
        <el-row gutter="24">
          <el-col :span="12" >Old Password<el-input
            placeholder="Old_Password"
            v-model="input_Old_Password"
            clearable>
          </el-input></el-col>
          <el-col :span="12" >Current Password<el-input
            placeholder="请输入Current Password"
            v-model="input_Current_Password"
            clearable>
          </el-input></el-col>
        </el-row>
        <el-row gutter="24">
          <el-col :span="12" >New Password<el-input
            placeholder="请输入New Password"
            v-model="input_New_Password"
            clearable>
          </el-input></el-col>
          <el-col :span="12" >Current Email<el-input
            placeholder="input_Current_Email"
            v-model="input_Current_Email"
            :disabled="true">
          </el-input></el-col>
        </el-row>
        <el-row gutter="24">
          <el-col :span="12" >Confirm New Password<el-input
            placeholder="确认 New Password"
            v-model="confirm_New_Password"
            clearable>
          </el-input></el-col>
          <el-col :span="12" >Input New Email<el-input
            placeholder="请输入New Email"
            v-model="input_New_Email"
            clearable>
          </el-input></el-col>
        </el-row>
        <el-row gutter="24">
          <el-col :span="12" >        <el-button type="primary" plain>Update Password</el-button>
          </el-col>
          <el-col :span="12" >        <el-button type="primary" plain>Update Email</el-button>

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
  }
</style>

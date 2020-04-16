<template>
  <div>
    <el-container>
    <el-header>个人信息</el-header>
    <el-main>
      <el-row gutter=24>
        <el-col :span="12" >Name<el-input
          placeholder="请输入Name"
          v-model="input_name"
          clearable>
        </el-input></el-col>
        <el-col :span="12" >Blog<el-input
          placeholder="请输入Blog"
          v-model="input_blog"
          clearable>
        </el-input></el-col>
      </el-row>

      <el-row gutter=24>

        <el-col :span="12" >Major<el-input
          placeholder="请输入Major"
          v-model="input_major"
          clearable>
        </el-input></el-col>
        <el-col :span="12" >Github<el-input
          placeholder="请输入Github"
          v-model="input_github"
          clearable>
        </el-input></el-col>
      </el-row>
      <el-button type="primary" plain>Update</el-button>
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
      input_blog: '',
      input_major: '',
      input_github: ''

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

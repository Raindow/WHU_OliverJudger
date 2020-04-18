<template>
  <div>
    <el-container>
    <el-header>个人信息</el-header>
    <el-main>
      <el-row gutter=24>
        <el-col :span=12>Name<el-input
          placeholder="请输入Name"
          v-model="input_name"
          clearable>
        </el-input></el-col>
        <el-col :span=12 >Major<el-input
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
      input_major: ''
    }
  },
  methods: {
    test: function () {
      alert('tt' + localStorage.getItem('userID'))
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
    border-radius: 4px;
  }
</style>

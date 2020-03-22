<template>
<div class="Stu_Home">
  <el-image
    style="width: 100px; height: 100px"
    :src="require('@/assets/Stu_Default_Picture.jpeg')"
    fit="fit"></el-image>
  <el-row>
    <el-col :span="24"><div class="grid-content bg-purple-dark">
      {{stu_name}}
    </div></el-col>
  </el-row>
  <el-row>
    <el-col :span="8"><div class="grid-content bg-purple">Solved
      <div>{{stu_solved}}</div>
      </div></el-col>
    <el-col :span="8"><div class="grid-content bg-purple-light">Submission
      <div>{{stu_submission}}</div>
      </div></el-col>
    <el-col :span="8"><div class="grid-content bg-purple">Score
      <div>{{stu_score}}</div>
      </div></el-col>
  </el-row>
</div>
</template>

<script>
export default {
  name: 'Stu_Home',
  data () {
    return {
      stu_picture_src: '@/assets/logo.png',
      stu_name: 'admin',
      stu_solved: 2,
      stu_submission: 4,
      stu_score: 95.6
    }
  }
}
</script>

<style scoped>
  .Stu_Home{
    width: 50%;
    height: 50%;
    margin: 0 auto;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }

</style>

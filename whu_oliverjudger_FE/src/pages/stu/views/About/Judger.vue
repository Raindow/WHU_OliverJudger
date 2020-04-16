<template>
  <div>
    <div>Compiler & Judger</div>
    <el-table
      :data="tableCompilerData"
      style="width: 80%">
      <el-table-column
        prop="name"
        label="Compiler"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="Address">
      </el-table-column>
    </el-table>
        <div>
          Result Explanation
        </div>
    <el-table
      :data="tableReasonData"
      style="width: 80%">
      <el-table-column
        prop="name"
        label="Result"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="Explanation">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'Judger',
  created () {
    console.log(this.$userID)
  },
  data () {
    return {
      tableCompilerData: [{
        name: 'C ( GCC 5.4 )',
        address: '/usr/bin/gcc -DONLINE_JUDGE -O2 -w -fmax-errors=3 -std=c11 {src_path} -lm -o {exe_path}'
      }, {
        name: 'C++ ( G++ 5.4 )',
        address: '/usr/bin/g++ -DONLINE_JUDGE -O2 -w -fmax-errors=3 -std=c++14 {src_path} -lm -o {exe_path}'
      }, {
        name: 'Java ( OpenJDK 1.8 )',
        address: '/usr/bin/javac {src_path} -d {exe_dir} -encoding UTF8'
      }, {
        name: 'Python2 ( Python 2.7 )',
        address: '/usr/bin/python -m py_compile {src_path}'
      }, {
        name: 'Python3 ( Python 3.5 )',
        address: '/usr/bin/python3 -m py_compile {src_path}'
      }],
      tableReasonData: [{
        name: '等待评分 & 正在评分',
        address: '您的解答将很快被测评,请等待结果'},
      {
        name: '编译失败',
        address: '无法编译您的源代码，点击链接查看编译器的输出'
      }, {
        name: '已接受',
        address: '你的解题方法是正确的'
      }, {
        name: '答案错误',
        address: '你的程序输出结果与判题程序的答案不符'
      }, {
        name: '运行时错误',
        address: '您的程序异常终止，可能的原因是：段错误，被零除或用非0的代码退出程序'
      }, {
        name: '运行超时',
        address: '您的程序使用的 CPU 时间已超出限制'
      }, {
        name: '超内存占用',
        address: '程序实际使用的内存已超出限制'
      }, {
        name: '系统错误',
        address: '糟糕，判题程序出了问题。请报告给管理员'
      }
      ]
    }
  }
}
</script>

<style scoped>

</style>

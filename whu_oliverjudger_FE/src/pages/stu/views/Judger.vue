<template>
  <div>
    Compiler & Judger
    C ( GCC 5.4 )
    /usr/bin/gcc -DONLINE_JUDGE -O2 -w -fmax-errors=3 -std=c11 {src_path} -lm -o {exe_path}
    C++ ( G++ 5.4 )
    /usr/bin/g++ -DONLINE_JUDGE -O2 -w -fmax-errors=3 -std=c++14 {src_path} -lm -o {exe_path}
    Java ( OpenJDK 1.8 )
    /usr/bin/javac {src_path} -d {exe_dir} -encoding UTF8
    Python2 ( Python 2.7 )
    /usr/bin/python -m py_compile {src_path}
    Python3 ( Python 3.5 )
    /usr/bin/python3 -m py_compile {src_path}
    Result Explanation
    Pending & Judging : You solution will be judged soon, please wait for result.
    Compile Error : Failed to compile your source code. Click on the link to see compiler's output.
    Accepted : Congratulations. Your solution is correct.
    Wrong Answer : Your program's output doesn't match judger's answer.
    Runtime Error : Your program terminated abnormally. Possible reasons are: segment fault, divided by zero or exited with code other than 0.
    Time Limit Exceeded : The CPU time your program used has exceeded limit.
    Memory Limit Exceeded : The memory your program actually used has exceeded limit.
    System Error : Oops, something has gone wrong with the judger. Please report this to administrator.
  </div>
</template>

<script>
export default {
  name: 'Judger'
}
</script>

<style scoped>

</style>

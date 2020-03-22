<template>
  <div class="contentDetail">
    <span class="title">{{$route.params.id}}</span>
    <el-divider></el-divider>
    <span class="describe">问题阐述</span>
    <p>武汉大学计算机学院在线代码测评，课程授课。武汉大学计算机学院在线代码测评，课程授课。武汉大学计算机学院在线代码测评，课程
      授课。武汉大学计算机学院在线代码测评，课程授课。武汉大学计算机学院在线代码测评，课程授课。武汉大学计算机学院在线代码测评，
      课程授课。武汉大学计算机学院在线代码测评，课程授课。武汉大学计算机学院在线代码测评，课程授课。武汉大学计算机学院在线代码测
      评，课程授课</p>
    <span class="example">示例</span>
    <p>武汉大学计算机学院在线代码测评，课程授课。武汉大学计算机学院在线代码测评，课程授课。武汉大学计算机学院在线代码测评，课程
      授课。武汉大学计算机学院在线代码测评，课程授课。武汉大学计算机学院在线代码测评，课程授课。武汉大学计算机学院在线代码测评，
      课程授课。武汉大学计算机学院在线代码测评，课程授课。武汉大学计算机学院在线代码测评，课程授课。武汉大学计算机学院在线代码测
      评，课程授课</p>
    <span class="example">答案</span>
    <codemirror
      :value="code"
      :options="cmOptions"
    ></codemirror>
  </div>
</template>

<script>
// VueCodeMirror 导入
import { codemirror } from 'vue-codemirror'
import 'codemirror/lib/codemirror.css'
// 语言支持
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/clike/clike'
import 'codemirror/mode/go/go'
import 'codemirror/mode/python/python'
// c++ text/x-c++src
// java text/x-java
// js text/javascript
// python text/python
// 快捷键
import 'codemirror/keymap/sublime.js'
import 'codemirror/keymap/emacs.js'
import 'codemirror/keymap/vim.js'
// 主题
import 'codemirror/theme/monokai.css'
import 'codemirror/theme/ambiance.css'
// 选择行高亮
import 'codemirror/addon/selection/active-line'
// 自动补全
import 'codemirror/addon/hint/javascript-hint'
import 'codemirror/addon/hint/anyword-hint'
import 'codemirror/addon/hint/show-hint'
import 'codemirror/addon/hint/show-hint.css'
// 代码折叠
import 'codemirror/addon/fold/foldcode.js'
import 'codemirror/addon/fold/foldgutter.js'
import 'codemirror/addon/fold/indent-fold.js'
import 'codemirror/addon/fold/brace-fold'
import 'codemirror/addon/fold/comment-fold.js'
import 'codemirror/addon/fold/foldgutter.css'
// 编辑选项，例如括号自动补全b
import 'codemirror/addon/edit/closebrackets' // 括号自动补全
import 'codemirror/addon/edit/matchbrackets' // 光标在括号旁边，就会使匹配的括号突出显示
import 'codemirror/addon/comment/comment' // 注释和取消注释
export default {
  name: 'Problems_Detail',
  components: {
    codemirror
  },
  data () {
    return {
      code: '',
      cmOptions: {
        mode: 'text/x-c++src',
        theme: 'monokai',
        indentWithTabs: true,
        smartIndent: true,
        lineNumbers: true,
        lineWrapping: true,
        matchBrackets: true,
        autoCloseBrackets: true,
        onKeyEvent: true, // 是否允许拖拽事件和键盘事件
        styleActiveLine: true,
        cursorHeight: 1, // 光标高度
        autoRefresh: true,
        keyMap: 'sublime',
        extraKeys: {
          'Ctrl': 'autocomplete'
        }
      }
    }
  }
}
</script>

<style scoped>
.contentDetail{
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  border: 1px;
  border-radius: 4px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  width: 80%;
  margin: 2% auto 0 auto;
  padding: 2%;
  text-align: left
}
.title{
  font-weight: bolder;
  font-size: x-large;
}
.describe{
  font-size: larger;
}
.example{
  font-size: larger;
}
</style>

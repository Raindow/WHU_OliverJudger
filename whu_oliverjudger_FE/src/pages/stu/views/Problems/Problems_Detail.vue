<template>
  <div class="contentDetail">
    <span class="title">{{$route.params.id}}</span>
    <el-divider></el-divider>
    <span class="describe">问题阐述</span>
    <p v-html="problem"></p>
    <span class="example">示例</span>
    <p v-html="example"></p>
    <span class="example">答案</span>
    <div>
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="在线编辑代码" name="first">
          <span>language</span>
          <el-select v-model="codeLang.label">
            <el-option
              v-for="item in codeLangOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
              aria-selected="true">
            </el-option>
          </el-select>
          <span>theme</span>
          <el-select v-model="theme">
            <el-option
              v-for="item in themeOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          <codemirror
            ref="coder"
            :value="code"
            :options="cmOptions"
            style="margin-top: 1%"
          ></codemirror>
          <el-button style="margin-top: 1%;float: right" @click="codeSubmission">提交</el-button>
        </el-tab-pane>
        <el-tab-pane label="文件提交" name="second">
          <!-- 网址需要修改 -->
          <el-upload
            class="upload-demo"
            style="text-align: center"
            ref="upload"
            drag
            action="http://127.0.0.1:3000/submission/submit"
            :before-upload="beforeUpload"
            :data="fileUploadData"
            :on-preview="handleFilePreview"
            :on-remove="handleFileRemove"
            :on-success="handleFileSuccess"
            :on-error="handleFileErr"
            :file-list="fileList"
            :auto-upload="false">
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">将文件拖到此处，或<em>点击选择文件</em></div>
          </el-upload>
          <el-button style="margin-top: 1%; float: right" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
        </el-tab-pane>
      </el-tabs>

    </div>
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
// 选择行高亮
import 'codemirror/addon/selection/active-line'
// 自动补全
import 'codemirror/addon/hint/javascript-hint'
import 'codemirror/addon/hint/anyword-hint'
import 'codemirror/addon/hint/show-hint'
import 'codemirror/addon/hint/show-hint.css'
// 代码折叠
import 'codemirror/addon/fold/foldcode'
import 'codemirror/addon/fold/foldgutter'
import 'codemirror/addon/fold/indent-fold'
import 'codemirror/addon/fold/brace-fold'
import 'codemirror/addon/fold/comment-fold'
import 'codemirror/addon/fold/foldgutter.css'
// 编辑选项，例如括号自动补全
import 'codemirror/addon/edit/closebrackets' // 括号自动补全
import 'codemirror/addon/edit/matchbrackets' // 光标在括号旁边，就会使匹配的括号突出显示
import 'codemirror/addon/comment/comment'// 注释和取消注释

export default {
  name: 'Problems_Detail',
  components: {
    codemirror
  },
  data () {
    return {
      // 问题描述
      problem: '',
      // 示例
      example: '',
      // 标签页 默认页
      activeName: 'first',
      // 设置编程语言
      codeLangOptions: [{
        value: 'cpp',
        label: 'C++'
      }, {
        value: 'java',
        label: 'Java'
      }, {
        value: 'py',
        label: 'Python'
      }],
      codeLang: {
        value: 'cpp',
        label: 'C++'
      },
      // 设置主题
      themeOptions: [{
        value: 'default',
        label: 'default'
      }, {
        value: 'monokai',
        label: 'monokai'
      }],
      theme: 'default',
      // 输入的代码
      code: '',
      // 编辑器设置
      cmOptions: {
        mode: 'text/x-c++src',
        theme: 'default',
        indentUnit: 4, // 设置自动缩进为4
        indentWithTabs: true, // 在缩进时，会将需要把 n*tab宽度个空格替换成n个tab字符
        smartIndent: true, // 开启自动缩进
        lineNumbers: true, // 开启代码前行数显示
        // 下列三个属性用于折叠代码所需要的设置
        foldGutter: true,
        gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter'],
        lineWrapping: true,
        // matchBrackets用于匹配括号，autoCloseBrackets用于自动匹配
        matchBrackets: true,
        autoCloseBrackets: true,
        onKeyEvent: true, // 是否允许拖拽事件和键盘事件
        styleActiveLine: true, // 选中行高亮
        cursorHeight: 1, // 光标高度
        autoRefresh: true, // 自动更新
        keyMap: 'sublime', // 快捷键使用sublime版
        showCursorWhenSelecting: true,
        // 额外快捷键
        extraKeys: {
          'Ctrl': 'autocomplete'
        }
      },
      // 上传文件列表
      fileList: [],
      fileUploadData: {ID: null, language: '', title: ''}
    }
  },
  mounted () {
    this.getContent()
  },
  watch: {
    codeLang (val) {
      switch (val.label) {
        case 'C++':
          this.cmOptions.mode = 'text/x-c++src'
          break
        case 'Java':
          this.cmOptions.mode = 'text/x-java'
          break
        case 'Python':
          this.cmOptions.mode = 'text/python'
          break
        case 'JavaScript':
          this.cmOptions.mode = 'text/javascript'
          break
      }
    },
    theme (val) {
      this.cmOptions.theme = val
    }
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    },
    // 提交直接编辑的代码需要修改的地方
    codeSubmission () {
      this.$axios.post('http://127.0.0.1:3000/submission/submit', {
        ID: localStorage.getItem('id'),
        language: this.codeLang.value,
        title: this.$route.params.id,
        content: this.$refs.coder.codemirror.getValue()
      }).then((res) => {
        console.log(res.data)
      })
    },
    beforeUpload (file, fileList) {
      console.log('beforeUpload' + 'aaaaa')
      console.log(fileList)
      console.log(this.fileList)
      this.fileUploadData.ID = localStorage.getItem('id')
      this.fileUploadData.language = (file.name.split('.')).pop()
      this.fileUploadData.title = this.$route.params.id
    },
    submitUpload () {
      this.$refs.upload.submit()
    },
    handleFileRemove (file, fileList) {
      console.log(file, fileList)
    },
    handleFilePreview (file) {
      console.log(file)
    },
    handleFileSuccess (response, file, fileList) {
      console.log('success')
      console.log(response)
      console.log(file)
      console.log(fileList)
      console.log(this)
      console.log(this.fileUploadData)
    },
    handleFileErr (err, file, fileList) {
      console.log('err')
      console.log(err)
      console.log(file)
    },
    getContent () {
      console.log('getContent')
      console.log(this.$route.params.id)
      this.$axios.get('http://127.0.0.1:3000/problems/detail', {
        params: {
          title: this.$route.params.id
        }
      }).then((res) => {
        console.log(res.data)
        this.problem = this.getDetail((res.data[0]).content)
        this.example = this.getDetail((res.data[0]).exampleInandOut)
      }).catch((err) => {
        console.log(err)
      })
    },
    getDetail (data) {
      console.log('getDetail')
      return data.replace(/\\n/g, '<br/>')
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

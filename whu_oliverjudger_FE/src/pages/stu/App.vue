<template>
  <div id="app">
    <el-container>
      <el-header height="auto">
        <NavBar></NavBar>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
      <el-footer>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import NavBar from '@/pages/stu/components/NavBar.vue'
export default {
  name: 'App',
  components: {
    'NavBar': NavBar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}
::-webkit-scrollbar{
  width: 10px;
  height: 5px;
}
::-webkit-scrollbar-thumb{
  background-color: #e5e9f2;
  border-radius: 5px;
}

</style>

<template>
  <div id="app">
    <NavBar></NavBar>
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from '@/pages/stu/components/NavBar.vue'
import Home from './views/Home'
import Problems from './views/Problems'
import Contests from './views/Contests'
export default {
  name: 'App',
  components: {
    'NavBar': NavBar,
    'Home': Home,
    'Problems': Problems,
    'Contests': Contests
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
  margin-top: 60px;
}
</style>

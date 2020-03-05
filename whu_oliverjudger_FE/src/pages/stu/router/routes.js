import Home from '../views/general/Home'
import Problems from '../views/Problems'
import Contests from '../views/Contests'
import Login from '../views/Login'
import Register from '../views/Register'
// eslint-disable-next-line camelcase
import Stu_home from '@/pages/stu/components/Stu_Home.vue'
export default[
  {path: '/', component: Home},
  {path: '/Problems', component: Problems},
  {path: '/Contests', component: Contests},
  {path: '/Login', component: Login},
  {path: '/Register', component: Register},
  {path: '/Stu_Home', component: Stu_home}

]

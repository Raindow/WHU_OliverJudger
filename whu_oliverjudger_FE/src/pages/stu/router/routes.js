import Home from '../views/Home'
import Problems from '../views/Problems'
import Contests from '../views/Contests'
import Login from '../components/Login'
import Register from '../components/Register'
// eslint-disable-next-line camelcase
import Stu_home from '@/pages/stu/components/Stu_Home.vue'
import Setting from '@/pages/stu/components/Setting'
import Account from '@/pages/stu/components/Account'
import Profile from '@/pages/stu/components/Profile'
export default[
  {
    path: '/',
    component: Home
  },
  {
    path: '/Problems',
    component: Problems},
  {
    path: '/Contests',
    component: Contests},
  {
    path: '/Login',
    component: Login},
  {
    path: '/Register',
    component: Register},
  {
    path: '/Stu_Home',
    component: Stu_home},
  {
    path: '/Setting',
    component: Setting,
    children: [
      {
        path: 'Account',
        component: Account
      },
      {
        path: 'Profile',
        component: Profile
      }
    ]
  }

]

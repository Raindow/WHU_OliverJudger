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
// eslint-disable-next-line camelcase
import Announcements_Detail from '@/pages/stu/views/Announcements_Detail'
// eslint-disable-next-line camelcase
import ContestsInformation_Detail from '@/pages/stu/views/ContestsInformation_Detail'
export default[
  {
    path: '/Home',
    component: Home
  },
  {
    path: '/Home/:id',
    component: Announcements_Detail
  },
  {
    path: '/Home/:id',
    component: ContestsInformation_Detail
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

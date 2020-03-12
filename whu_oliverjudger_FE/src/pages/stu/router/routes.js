import Home from '../views/Home'
import Problems from '../views/Problems'
import Contests from '../views/Contests'
import Login from '../components/Login'
import Register from '../components/Register'
// eslint-disable-next-line camelcase
import Stu_home from '@/pages/stu/components/Stu_Home.vue'
// eslint-disable-next-line camelcase
import Stu_Submission from '@/pages/stu/components/Stu_Submission'
import Setting from '@/pages/stu/components/Setting'
import Account from '@/pages/stu/components/Account'
import Profile from '@/pages/stu/components/Profile'
import Courses from '@/pages/stu/views/Course'
// eslint-disable-next-line camelcase
import Announcements_Detail from '@/pages/stu/views/Announcements_Detail'
import Judger from '@/pages/stu/views/Judger'
import Us from '@/pages/stu/views/Us'
// eslint-disable-next-line camelcase
import Problems_Detail from '@/pages/stu/views/Problems_Detail'
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
    path: '/Problems',
    component: Problems
  },
  {
    path: '/Problems/:id',
    component: Problems_Detail
  },
  {
    path: '/Contests',
    component: Contests
  },
  {
    path: '/Contests/:id',
    component: ContestsInformation_Detail
  },
  {
    path: '/Courses',
    component: Courses
  },
  {
    path: '/Login',
    component: Login
  },
  {
    path: '/Register',
    component: Register
  },
  {
    path: '/Stu_Home',
    component: Stu_home
  },
  {
    path: '/Stu_Submission',
    component: Stu_Submission
  },
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
  },
  {
    path: '/Judger',
    component: Judger
  },
  {
    path: '/Us',
    component: Us
  }

]

import Home from '../views/Announcements/Home'
import Problems from '../views/Problems/Problems'
import Contests from '../views/Contests/Contests'
import Login from '../components/Register-Login/Login'
import Register from '../components/Register-Login/Register'
// eslint-disable-next-line camelcase
import Stu_home from '@/pages/stu/components/Student-Center/Stu_Home.vue'
// eslint-disable-next-line camelcase
import Stu_Submission from '@/pages/stu/components/Student-Center/Stu_Submission'
import Setting from '@/pages/stu/components/Student-Center/Setting'
import Account from '@/pages/stu/components/Student-Center/Account'
import Profile from '@/pages/stu/components/Student-Center/Profile'
import Courses from '@/pages/stu/views/Course/Course'
// eslint-disable-next-line camelcase
import Announcements_Detail from '@/pages/stu/views/Announcements/Announcements_Detail'
import Judger from '@/pages/stu/views/About/Judger'
import Us from '@/pages/stu/views/About/Us'
// eslint-disable-next-line camelcase
import Problems_Detail from '@/pages/stu/views/Problems/Problems_Detail'
// eslint-disable-next-line camelcase
import Course_Chapter from '@/pages/stu/components/Course/Course_Chapter'
// eslint-disable-next-line camelcase
import ContestsInformation_Detail from '@/pages/stu/views/Contests/ContestsInformation_Detail'
import CourseDetail from '@/pages/stu/views/Course/Course_Detail'
export default[
  {
    path: '/',
    component: Home
  },
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
    path: '/Courses/:id',
    component: CourseDetail,
    children: [{
      path: ':id',
      component: Course_Chapter
    }]

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

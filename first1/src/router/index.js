import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/home/HomeView.vue'
import ShuJiaView from '../views/ShuJia/ShuJiaView.vue'
import UserView from '../views/UserView/UserView.vue'
import ClassifyView from '../views/ClassifyView/ClassifyView.vue'
import NewWorkView from '../views/ClassifyView/NewWorkView.vue'
import weekBangView from '../views/ClassifyView/weekBangView.vue'
import EndBangView from '../views/ClassifyView/EndBangView.vue'
import SearchView from '../views/home/searchView.vue'
import checkView from '../views/home/checkView.vue'
import ReadingView from '../components/ReadingCompent.vue'
import ReadingStartView from '../views/home/ReadingStart.vue'
import AllListView from '../views/home/AllListView.vue'
import LoginView from '../views/UserView/LoginView.vue'
import otherLoginView from '../views/UserView/OtherLogin.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      istrue:true
    }
  },
  {
    path: '/shuJia',
    name: 'shuJia',
    component: ShuJiaView,
    meta: {
      istrue:true
    }
  },
  {
    path: '/user',
    name: 'user',
    component: UserView,
    meta: {
      istrue:true
    }
  },
  {
    path: '/classify',
    name: 'classify',
    component: ClassifyView,
    meta: {
      istrue:false
    }

  },
  {
    path: '/newWork',
    name: 'newWork',
    component: NewWorkView,
    meta: {
      istrue:false
    }
  },
  {
    path: '/weekBang',
    name: 'weekBang',
    component: weekBangView,
    meta: {
      istrue:false
    }
  },
  {
    path: '/endBang',
    name: 'endBang',
    component: EndBangView,
    meta: {
      istrue:false
    }
  },
  {
    path: '/search',
    name: 'search',
    component: SearchView,
    meta: {
      istrue:false
    }
  },
  {
    path: '/check',
    name: 'check',
    component: checkView,
    meta: {
      istrue:false
    }
  },
  {
    path: '/reading',
    name: 'reading',
    component: ReadingView,
    meta: {
      istrue:false
    }
  },
  {
    path: '/readingStartView',
    name: 'readingStartView',
    component: ReadingStartView,
    meta: {
      istrue:false
    }

  },
  {
    path: '/allList',
    name: 'allList',
    component: AllListView,
    meta: {
      istrue:false
    }

  },
  
  {
    path: '/login',
    name: 'login',
    component: LoginView,
    meta: {
      istrue:false
    }

  },
  {
    path: '/otherLogin',
    name: 'otherLogin',
    component: otherLoginView,
    meta: {
      istrue:false
    }

  },
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

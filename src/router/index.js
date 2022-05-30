import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ShopInfo from '../views/Shop/index.vue'
import Login from '../views/Shop/login.vue'
import Register from '../views/Shop/register.vue'
import Manager from '../views/Shop/manager.vue'
import Release from '../views/Shop/release.vue'
import Buy from '../views/Shop/buy.vue'
import SearchInfo from '../views/Shop/searchInfo.vue'
import My from '../views/Shop/my.vue'
import MyBuy from '../views/Shop/mybuy.vue'
import MySeller from '../views/Shop/myseller.vue'
import ManagerShop from '../views/Shop/managerShop.vue'
import ForgetPassword from '../views/Shop/forgetPassword.vue'
import ChangeEmail from '../views/Shop/changeEmail.vue'
import Message from '../views/Shop/message.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: "/home",
  },
  {
    path: "/home",
    name: 'HomeView',
    component: HomeView
  },
  {
    path: '/shop/info',
    name: 'ShopInfo',
    component: ShopInfo
  },
  {
    path:'/login',
    name:'Login',
    component:Login
  },
  {
    path:'/register',
    name:'Register',
    component:Register
  },
  {
    path:'/manager',
    name:'Manager',
    component:Manager,
  },
  {
    path:'/release',
    name:'Release',
    component:Release,
  },
  {
    path:'/buy',
    name:'Buy',
    component:Buy,
  },
  {
    path:'/searchInfo',
    name:'SearchInfo',
    component:SearchInfo,
  },
  {
    path:'/my',
    name:'My',
    component:My,
  },
  {
    path:'/mybuy',
    name:'MyBuy',
    component:MyBuy,
  },
  {
    path:'/myseller',
    name:'MySeller',
    component:MySeller,
  },
  {
    path:'/managerShop',
    name:'ManagerShop',
    component:ManagerShop,
  },
  {
    path:'/forgetPassword',
    name:'ForgetPassword',
    component:ForgetPassword,
  },
  {
    path:'/changeEmail',
    name:'ChangeEmail',
    component:ChangeEmail,
  },
  {
    path:'/message',
    name:'Message',
    component:Message,
  },
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
})

export default router

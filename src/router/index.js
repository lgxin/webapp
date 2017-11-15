import Vue from 'vue'
import Router from 'vue-router'
import logo from '@/pages/logo'
// import HelloWorld from '@/components/HelloWorld'
import index from '@/pages/index/index'
import indexapp from '@/pages/pagings/indexapp'
import destinationapp from '@/pages/pagings/destinationapp'
import findapp from '@/pages/pagings/findapp'
import myapp from '@/pages/pagings/myapp'
import register from '@/pages/register'
import tourismList from '@/pages/commodityList/tourismList'
import forget from '@/pages/commodityList/forgetpassword'

Vue.use(Router)
export default new Router({
  routes: [
    {// 首页
      path: '/index',
      name: 'index',
      component: index,
      children: [
        /* 主页 */
        {
          path: '/index',
          name: '主页',
          component: indexapp
        },
        {
          path: '/destinationapp',
          name: '目的地',
          component: destinationapp
        },
        {
          path: '/findapp',
          name: 'findapp',
          component: findapp
        },
        {
          path: '/myapp',
          name: 'myapp',
          component: myapp
        }
      ]
    },
    {
      path: '/',
      name: 'logo',
      component: logo
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/tourismList',
      name: 'tourismList',
      component: tourismList
    },
    {
      path: '/forget',
      name: 'forget',
      component: forget
    }
  ]
})

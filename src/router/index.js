import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import index from '@/pages/index/index'
import indexapp from '@/pages/pagings/indexapp'
import destinationapp from '@/pages/pagings/destinationapp'
import findapp from '@/pages/pagings/findapp'
import myapp from '@/pages/pagings/myapp'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: 'hello',
      name: 'Hello',
      component: HelloWorld
    },
    {// 首页
      path: '/',
      name: 'index',
      component: index,
      children: [
        /* 主页 */
        {
          path: '/',
          name: '主页',
          component: indexapp
        },
        {
          path: 'destinationapp',
          name: '目的地',
          component: destinationapp
        },
        {
          path: 'findapp',
          name: 'findapp',
          component: findapp
        },
        {
          path: 'myapp',
          name: 'myapp',
          component: myapp
        }
      ]
    }
  ]
})

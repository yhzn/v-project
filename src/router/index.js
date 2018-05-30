import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/views/home'
import Shop from '@/views/shop'
import Elem from '@/views/element'
import ui from '@/views/ui'
import betterScroll from '@/views/better-scroll'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'hello',
      component: HelloWorld
    },
    {
      path: '/scroll',
      name: 'betterScroll',
      component: betterScroll
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/shop',
      name: 'shop',
      component: Shop
    },
    {
      path: '/element',
      name: 'element',
      component: Elem
    },
    {
      path: '/ui',
      name: 'ui',
      component: ui
    }
  ]
})

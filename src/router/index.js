import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import MyTabber from '@/components/MyTabber'

import FootBar from '@/components/FootBar'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/myTabber',
      name:'myTabber',
      component:MyTabber
    	
    },
    {
        path:'/footBar',
        name:'footBar',
        component:FootBar
      	
      }
    
  ]
})

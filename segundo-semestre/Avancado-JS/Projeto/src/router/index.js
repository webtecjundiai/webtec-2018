import Vue from 'vue'
import Router from 'vue-router'
import Info from '@/components/Info'
import Home from '@/components/Home'
import Contato from '@/components/Contato'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/info',
      name: 'Info',
      component: Info
    },
    {
      path: '/contato',
      name: 'Contato',
      component: Contato
    }
  ]
})

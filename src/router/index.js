import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Home from '../components/Home.vue'
import Map from '../components/Map.vue'


export default new Router({
  routes: [
    {
      path: '/',
      name: 'root',
      component: Home
    },
    {
      path: '/map',
      name: 'Map',
      component: Map
    },
    {
      path: '/missions',
      name: 'Missions',
      component: Map
    },
    {
      path: '/join',
      name: 'Join',
      component: Map
    }
  ]
})

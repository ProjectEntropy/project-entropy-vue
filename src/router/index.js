import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Home     from '../components/Home.vue'
import Map      from '../components/Map.vue'
import Missions from '../components/Missions.vue'
import Join     from '../components/Join.vue'


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
      component: Missions
    },
    {
      path: '/join',
      name: 'Join',
      component: Join
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import Recomment from 'components/recommend'
import Singer from 'components/singer'
import Search from 'components/search'
import Rank from 'components/rank'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/recommend',

      component: Recomment
    },
    {
      path: '/singer',
      component: Singer
    },
    {
      path: '/search',
      component: Search
    },
    {
      path: '/rank',
      component: Rank
    }
  ]
})

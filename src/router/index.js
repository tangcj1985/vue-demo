import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '@/pages/index'
import DetailPage from '@/pages/detail'
import ForecastPage from '@/pages/detail/forecast'
import VueResource from 'vue-resource'

Vue.use(Router)
Vue.use(VueResource)
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'IndexPage',
      component: IndexPage
    },
    {
      path: '/detail',
      name: 'DetailPage',
      component: DetailPage,
      children: [
        {
          path: 'forecast',
          name: 'ForecastPage',
          component: ForecastPage
        }
      ]
    }
  ]
})

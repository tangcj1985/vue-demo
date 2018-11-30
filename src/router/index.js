import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '@/pages/index'
import DetailPage from '@/pages/detail'
import DetailAnaPage from '@/pages/detail/analysis'
import DetailCouPage from '@/pages/detail/count'
import DetailForPage from '@/pages/detail/forecast'
import DetailPubPage from '@/pages/detail/publish'
import VueResource from 'vue-resource'

Vue.use(Router)
Vue.use(VueResource)
export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'IndexPage',
    component: IndexPage
  },
  {
    path: '/detail',
    name: 'DetailPage',
    component: DetailPage,
    children: [{
      path: 'analysis',
      component: DetailAnaPage
    },
    {
      path: 'count',
      component: DetailCouPage
    },
    {
      path: 'forecast',
      component: DetailForPage
    },
    {
      path: 'publish',
      component: DetailPubPage
    }
    ]
  }
  ]
})

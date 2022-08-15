import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/vuex-----test',
    name: 'vuex',
    component: () => import('../views/vuex/vuexIndex.vue')
  },
  {
    path: '/zujianIndex-----test',
    name: 'zujian',
    component: () => import('../views/zujian/zujianIndex.vue')
  },
  {
    path: '/redirect',
    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect')
      }
    ]
  },
  {
    path: '/',
    name: 'login',
    component: () => import('../views/login/index.vue')
  },
  {
    path: '/main',
    component: () => import('../components/main/index.vue'),
    redirect: '/index',
    children: [
      {
        path: '/index',
        component: () => import('../views/index.vue'),
        name: 'index'
      },
      {
        path: '/files-file',
        component: () => import('../views/files-file/index.vue'),
        name: 'files-file'
      },
      {
        path: '/files-images',
        component: () => import('../views/files-images/index.vue'),
        name: 'files-images'
      },
      {
        path: '/pdf',
        component: () => import('../views/pdf/index.vue'),
        name: 'pdf'
      }
    ]
  },
  {
    path: '/images-display',
    component: () => import('../views/files-images/display.vue'),
    name: 'images-display',
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

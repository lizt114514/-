import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/views/Layout/index.vue'),
      children: [
        { 
          path: '',
          name: 'home',
          component: () => import('@/views/Home/index.vue')
        },
        { 
          path: '/category/:id',
          name: 'category',
          component: () => import('@/views/Category/index.vue')
        },
        {
          path: 'category/sub/:id',
          name: 'subCategory',
          component: () => import('@/views/SubCategory/index.vue')
        },
        {
          path: 'detail/:id',
          name: 'detail',
          component: () => import('@/views/Detail/index.vue')
        },
        {
          path: 'cartList',
          name: 'cartList',
          component: () => import('@/views/CartList/index.vue')
        },
        {
          path: 'checkout',
          name: 'checkout',
          component: () => import('@/views/CheckOut/index.vue')
        },
        {
          path: 'pay/:id',
          name: 'pay',
          component: () => import('@/views/Pay/index.vue')
        },
        {
          path: 'paycallback',
          name: 'paycallback',
          component: () => import('@/views/Pay/PayBack.vue')
        },
        {
          path: 'member',
          name: 'member',
          component: () => import('@/views/Member/index.vue'),
          children: [
            {
              path: 'user',
              component: () => import('@/views/Member/components/UserInfo.vue')
            },
            {
              path: 'order',
              component: () => import('@/views/Member/components/UserOrder.vue')
            }
          ]
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login/index.vue')
    },
  ],
  // 路由滚动行定制
  scrollBehavior () {
    return  {
      top: 0
    }
  }
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
    {
      path:'',
      redirect:'/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: () => import(/* webpackChunkName: "about" */ 'views/home/Home.vue'),
    },
    {
      path: '/menu',
      name: 'Menu',
      component: () => import(/* webpackChunkName: "about" */ 'views/menu/Menu.vue'),
      // meta:{
      //   active:'/menu'
      // }
    },
    {
      path: '/discover',
      name: 'Discover',
      component: () => import(/* webpackChunkName: "about" */ 'views/discover/Discover.vue'),
      meta:{
        active:'/discover'
      }
    },
    {
      path: '/profile',
      name: 'Profile',
      component: () => import(/* webpackChunkName: "about" */ 'views/profile/Profile.vue'),
      meta:{
        active:'/profile'
      }
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

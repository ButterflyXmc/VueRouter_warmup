import Vue from 'vue'
import VueRouter from 'vue-router'
//1. importing
import HomePage from '@/views/HomePage.vue'
import AdvicePage from '@/views/AdvicePage'


Vue.use(VueRouter)

// 2.
const routes = [
  // The routes is an array of objects 
  // Each objects represents one of the available views
  {
    path: "/",
    component: HomePage
  },
  {
    path: "/advice-page",
    component: AdvicePage
  }
]

const router = new VueRouter({
  routes
})

export default router 

import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const Home = ()=> import('../views/home/Home.vue')
const Category = ()=> import('../views/category/Category.vue')
const Shopcart = ()=> import('../views/shopcart/Shopcart.vue')
const Profile = ()=> import('../views/profile/Profile.vue')

const Detail = ()=> import('../views/detail/Detail.vue')

  const routes = [
    {
      path : '/',
      redirect:'/home'
    },
    {
      path : '/home',
      component:Home
    },
    {
      path : '/category',
      component:Category
    },
    {
      path : '/shopcart',
      component:Shopcart
    },
    {
      path : '/profile',
      component:Profile
    },
    {
      path : '/Detail/:iid',
      component:Detail
    },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

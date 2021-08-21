import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// 解决重复点击报错问题
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
}

const Home = () => import("@/views/home/Home.vue")
const Category = () => import("@/views/category/Category.vue")
const Cart = () => import("@/views/cart/Cart.vue")
const Profile = () => import("@/views/profile/Profile.vue")
const Detail = () => import("@/views/detail/Detail.vue")

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/detail/:iid',
    component: Detail
  },
  {
    path: '*',
    component: () => import('@/views/error/Error.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  linkActiveClass: 'active'
})

export default router

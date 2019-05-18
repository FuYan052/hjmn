import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import AboutUs from '@/pages/AboutUs'
import Product from '@/pages/Product'
import News from '@/pages/News'
import Contact from '@/pages/Contact'
import OnlineFranchise from '@/pages/OnlineFranchise'
import NewsDetail from '@/pages/NewsDetail'
import ProductDetail from '@/pages/ProductDetail'
import ProductImg from '@/pages/ProductImg'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/aboutUs',
      name: 'AboutUs',
      component: AboutUs
    },
    {
      path: '/product',
      name: 'Product',
      component: Product
    },
    {
      path: '/news',
      name: 'News',
      component: News
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/onlineFranchise',
      name: 'OnlineFranchise',
      component: OnlineFranchise
    },
    {
      path: '/newsDetail',
      name: 'NewsDetail',
      component: NewsDetail
    },
    {
      path: '/productDetail',
      name: 'ProductDetail',
      component: ProductDetail
    },
    {
      path: '/productImg',
      name: 'ProductImg',
      component: ProductImg
    },
  ]
})

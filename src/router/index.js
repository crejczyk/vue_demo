import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Home from '@/components/Home'
import Login from '@/components/Login'
import AddBlog from '@/components/AddBlog'
import ShowBlogs from '@/components/ShowBlogs'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/AddBlog',
      name: 'AddBlog',
      component: AddBlog
    },
    {
      path: '/ShowBlogs',
      name: 'ShowBlogs',
      component: ShowBlogs
    },
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})

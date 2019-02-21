import Vue from 'vue'
import Router from 'vue-router'


import home from '../components/Home'
import list from '../components/List'
import collect from '../components/Collect'
import add from '../components/Add'
import detail from '../components/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    //注册路由
    {path:'/home',component:home},
    {path:'/list',component:list},
    {path:'/collect',component:collect},
    {path:'/add',component:add},
    {path:'/detail',component:detail},
  ]
})

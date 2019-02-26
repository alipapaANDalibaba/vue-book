import Vue from 'vue'
import Router from 'vue-router'


import Home from '../components/Home'
import List from '../components/List'
import Collect from '../components/Collect'
import Add from '../components/Add'
import Detail from '../components/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    //注册路由
    {path:'/',redirect:'/home'},
    {
      path:'/home',
      component:Home,
      meta:{requireLive:true}
      },
    {path:'/list',component:List},
    {path:'/collect',component:Collect},
    {path:'/add',component:Add},
    //   /detail/1  {bid:1} 路径参数，必须有但是可以随机
    {path:'/detail/:bid',component:Detail,name:'details'},
    {path:'*',redirect:'/home'},
  ]
})

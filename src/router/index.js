import Vue from 'vue'
import Router from 'vue-router'


// import Home from '../components/Home'
// import List from '../components/List'
// import Collect from '../components/Collect'
// import Add from '../components/Add'
// import Detail from '../components/Detail'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    //注册路由
    {
      path:'/',redirect:'/home'
    },
    {
      path:'/home',
      component:()=>import('../components/Home.vue'),
      meta:{requireLive:true,title:'首页'}
      },
    {
      path:'/list',
      component:()=>import('../components/List.vue'),
      meta:{title:'列表页'}
    },
    {
      path:'/collect',
      component:()=>import('../components/Collect.vue'),
      meta:{title:'收藏页'}
    },
    {
      path:'/add',
      component:()=>import('../components/Add.vue'),
      meta:{title:'添加页'}
    },
    {
      ///detail/1  {bid:1} 路径参数，必须有但是可以随机
      path:'/detail/:bid',
      component:()=>import('../components/Detail.vue'),
      name:'details',
      meta:{title:'详情页'}
    },
    {
      path:'*',redirect:'/home'
    },
  ]
})

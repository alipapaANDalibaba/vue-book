
```
npm install stylus stylus-loader axios vuex
````
 - mock模拟数据
 - api代表所有接口
 - base代表基础组件
 - component代表页面组件


1.在router/index.js设置Add,Collect,Home,List,Detail的路由
2.Home.vue页面需要一个轮播图(插件:vue-awsome-swiper),字体图标(阿里矢量图标库)

##热门图书功能
- 先写服务端，确保数据能正常返回
- 增加api方法，实现调取数据功能
- 在哪个组件中应用api,如果是一个基础组件需要用这些数据，在使用这个组件的父级调用这个方法，然后传递给基础组件
- 写一个基础组件 
    - 创建一个.vue文件
    - 在需要使用这个组件的父级中import
    - 注册组件
    - 以标签的形式引入
    
## 路由元信息 
    - 使页面加载的时候加载loading.vue组件，但页面跳转的时候加载loading.vue组件
    - keep-alive:是Vue的内置组件，能在组件切换过程中将状态保留在内存中，防止重复渲染DOM，保存的是里它最近的标签。
    
## 下拉加载
   - 默认给5条，前端告诉后台从现在开始要从第几条给我
   - /page?offset=5
   - 后台返回时需要告诉前端是否有更多的数据hasMore:false

###代码分割
   - 跳转页面时分别加载需要跳转页面的数据
   - 用 component:()=>import('../components/Home.vue')的方式注册路由



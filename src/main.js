import Vue from 'vue'
import App from './App'
import router from './router'

import './assets/iconfont/font/iconfont.css'
//导入轮播图插件
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper, /* { default global options } */)
//导入图片懒加载
import VueLazyload from 'vue-lazyload';
Vue.use(VueLazyload, {
  preLoad: 2,
  error: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=396805210,4266088262&fm=27&gp=0.jpg',
  loading: 'http://img3.imgtn.bdimg.com/it/u=1369632820,95673491&fm=26&gp=0.jpg',
  attempt: 1
})


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

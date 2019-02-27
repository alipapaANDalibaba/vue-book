<template>
  <div id="app">
    <!--keep-alive:是Vue的内置组件，能在组件切换过程中将状态保留在内存中，防止重复渲染DOM。-->
    <transition name="fadeIn">
      <keep-alive>
        <router-view v-if="$route.meta.requireLive"></router-view>
      </keep-alive>
    </transition>
    <transition name="fadeIn">
      <router-view v-if="!$route.meta.requireLive"></router-view>
    </transition>
    <Tab></Tab>
  </div>
</template>

<script>
  import Tab from './base/Tab'
  export default {
    components: {
        Tab
    }
  }
</script>

<style>
  body,html{
    padding: 0;
    margin: 0;
  }
  ul,li{
    list-style: none;
    padding: 0;
    margin: 0;
  }
  a{
    text-decoration: none;
    outline: none;
    color: lightseagreen;
  }
  input,button{
    -webkit-appearance: none;
  }
  .content{
    position: fixed;
    width: 100%;
    top: 40px;
    bottom: 50px;
    overflow: auto;
  }
  .fadeIn-enter{
    opacity: 0;
  }
  .fadeIn-enter-active{
    transition: all 0.3s linear;
  }
  .fadeIn-leave-active{
    transition: all 0.3s linear;
    opacity: 0;
  }
  .swiper-pagination-bullet-active {
    opacity: 1;
    background-color: #FFFFFF;
  }
</style>

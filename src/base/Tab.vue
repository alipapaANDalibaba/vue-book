<template>
    <div class="tabBox">
      <router-link to="/home"><i class="iconfont">&#xe64c;</i><span>首页</span></router-link>
      <router-link to="/list"><i class="iconfont">&#xe609;</i><span>列表页</span></router-link>
      <router-link to="/collect"><i class="iconfont">&#xe61d;</i><span>收藏</span></router-link>
      <router-link to="/add"><i class="iconfont">&#xe621;</i><span>添加</span></router-link>
    </div>
</template>
<script>
  export default {
    data() {
      return {}
    },
    methods: {},
    computed: {},
    components: {

    }
  }
</script>
<style scoped>
  .tabBox{
    position: fixed;
    bottom: 0;
    left: 0;
    height: 50px;
    width: 100%;
    display: flex;
    border-top: 1px solid #EEEEEE;
  }
  .tabBox a{
    flex: 1;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .tabBox a i{
    font-size: 25px;
  }
  .tabBox a span{
    font-size: 12px;
  }
  .tabBox .router-link-active{
    color: red;
  }
</style>

<template>
    <div class="tabBox">

      <router-link to="/home">首页</router-link>
      <router-link to="/list">列表页</router-link>
      <router-link to="/collect">收藏</router-link>
      <router-link to="/add">添加</router-link>
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
    position: absolute;
    bottom: 0;
    left: 0;
    height: 50px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .tabBox a{
    flex: 1;
    text-align: center;
    line-height: 50px;
  }
  .tabBox .router-link-active{
    color: red;
  }
</style>

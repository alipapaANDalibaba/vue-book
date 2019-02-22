<template>
    <header>
      <slot></slot>
      <i class="iconfont" v-if="back" v-on:click="goBack">&#xe62a;</i>
    </header>
</template>
<script>
    export default {
      props:{
        back:{
          type:Boolean,
          default:false
        }
      },
      methods:{
        goBack:function(){
          this.$router.go(-1);
        }
      },
      data() {
          return {}
      }
    }
</script>
<style scoped>
  header{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #00a0ea;
    text-align: center;
    height: 40px;
    line-height: 40px;
    color: #f1f1f1;
  }
  header>i{
    position: absolute;
    left: 10px;
    font-size: 18px;
  }
</style>

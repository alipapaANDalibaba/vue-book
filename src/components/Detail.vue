<template>
    <div class="detail">
      <MHeader :back="true">详情页</MHeader>
      <ul>
        <li>
          <label for="bookName">书的名称</label>
          <input type="text" v-model.trim="book.bookName" id="bookName">
        </li>
        <li>
          <label for="bookInfo">书的信息</label>
          <input type="text" v-model.trim="book.bookInfo" id="bookInfo">
        </li>
        <li>
          <label for="bookPrice">书的价格</label>
          <input type="text" v-model.number.trim="book.bookPrice" id="bookPrice">
        </li>
        <li><button @click="update">确认修改</button></li>
      </ul>
    </div>
</template>
<script>
  import MHeader from '../base/MHeader';
  import {findOneBook,updateBook} from '../api'
    export default {
      created(){
        this.getData();
      },
      data() {
          return {
            book:{}
          }
      },
      watch:{
        $route(){
          this.getData();
        }
      },
      methods: {
        async getData(){
         this.book = await findOneBook(this.bid);
         //如果this.book是空对象，就调回列表页
          Object.keys(this.book).length>0?void 0:this.$router.push('/list')
        },
        async update(){
          console.log(this.bid);
          await updateBook(this.bid,this.book);
          //修改完成跳转页面
          this.$router.push('/list');
        }
      },
      computed: {
        bid(){
          return this.$route.params.bid;//将路由bid映射到页面上
        }
      },
      components: {
        MHeader
      }

    }
</script>
<style scoped>
  .detail{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #fff;
    z-index: 100;
  }
  ul{
    margin: 50px 10px 20px 10px;
  }
  ul li label{
    display: block;
    font-size: 25px;
  }
  ul li input{
    height: 25px;
    width: 100%;
    margin: 10px 0;
    padding-left: 10px;
    box-sizing: border-box;
  }
  button{
    display: block;
    width: 80px;
    height: 50px;
    margin-top: 5px;
    border: 0;
    outline: none;
    background-color: lightskyblue;
    color: #fff;
    font-size: 12px;
    border-radius: 10px;
  }
</style>

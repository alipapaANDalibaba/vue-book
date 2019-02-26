<template>
    <div>
      <MHeader>添加</MHeader>
      <div class="content">
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
          <li>
            <label for="bookPrice">书的封面</label>
            <input type="text" v-model.trim="book.bookCover" id="bookCover">
          </li>
          <li><button @click="add">添加</button></li>
        </ul>
      </div>
    </div>
</template>
<script>
  import MHeader from '../base/MHeader';
  import {addBook} from '../api'
    export default {
        data() {
            return {book:{}}
        },
        methods: {
          async add(){
            await addBook(this.book);
            this.$router.push('/list')
          },
        },
        computed: {},
        components: {
          MHeader
        }
    }
</script>
<style scoped>
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

<template>
    <div>
      <MHeader>列表页</MHeader>
      <div class="content" ref="scroll" @scroll="loadMove">
        <ul>
          <router-link v-for="(item,index) in books" :key="index" :to="{name:'details',params:{bid:item.bookId}}" tag="li">
            <img :src="item.bookCover" alt="">
            <div>
              <h4>{{item.bookName}}</h4>
              <p>{{item.bookInfo}}</p>
              <b>价格：<span>{{item.bookPrice}}</span></b>
              <!--需要阻止冒泡，不然会直接跳转到detail页面-->
              <button @click.stop="delBook(item.bookId)">删除</button>
            </div>
          </router-link>
        </ul>
        <!--<div class="more">没有数据了</div>-->
      </div>
    </div>
</template>
<script>
    import MHeader from "../base/MHeader"
    import {pagination,removeBook} from '../api'
    export default {
      created(){
        this.getBookData();
      },
      data() {
          return {
            books:[],
            offset:0,//获取的数据量
            hasMore:true,//是否有更多信息
            bookLoading:'加载更多',
            isLoading:false,//默认不是正在加载
          }
      },
      methods:{
        async getBookData(){
          if(this.hasMore && !this.isLoading){
            this.isLoading = true; //正在加载中，假如是正在加载中，多次点击加载，那么不会加载
            let {hasMore,books} = await pagination(this.offset);
            this.books = [...this.books,...books];
            this.hasMore = hasMore;
            console.log(this.books,this.books.length,this.hasMore);
            this.offset = this.books.length;
            this.isLoading = false; //加载完毕
          }
        },
        async delBook(id){
          await removeBook(id);
          //删除数据之后，页面数据刷新
          this.books = this.books.filter(item =>item.bookId !== id)
        },
        loadMove(){
          clearTimeout(this.timer);
          this.timer = setTimeout(()=>{//节流
            let {scrollTop,clientHeight,scrollHeight} = this.$refs.scroll;
            if(scrollTop+clientHeight+20>=scrollHeight){
              this.getBookData();
            }
          },20)
        }
      },
      computed: {

      },
      components: {
        MHeader
      }
    }
</script>
<style scoped>
    .content ul{
      margin-bottom: 20px;
    }
    .content ul li{
      padding: 10px;
      display: flex;
      border-bottom: 1px solid #e6e6e6;
    }
    .content ul li img{
      width: 45%;
      height: 150px;
    }
    .content ul li h4{
      margin:10px 0 0 0;
      font-size: 20px;
    }
    .content ul li p{
      margin: 0;
      font-size: 14px;
    }
    .content ul li b{
      color: red;
    }
    .content ul li b span{
      vertical-align: -5%;
    }
    .content ul li button{
      display: block;
      width: 50px;
      height: 20px;
      margin-top: 5px;
      border: 0;
      outline: none;
      background-color: orange;
      color: #fff;
      font-size: 12px;
      border-radius: 10px;
    }
    .more{
      margin: 0 auto 20px auto;
      background-color: lightskyblue;
      font-size: 20px;
      width: 90%;
      height: 40px;
      color: #FFFFFF;
      display: flex;
      justify-content: center;
      align-items: center;
    }
</style>

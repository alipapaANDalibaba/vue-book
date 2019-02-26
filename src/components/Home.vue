<template>
    <div>
      <MHeader :back="true">首页</MHeader>
      <div class="content">
        <Loading v-if="loading"></Loading>
        <template v-else>
          <Swiper :swiperSlides="sliders"></Swiper>
          <div class="bookList">
            <h3>热门图书</h3>
            <ul>
              <li v-for="item in hotBooks" :key="item.bookId">
                <img :src="item.bookCover" alt="" />
                <b>{{item.bookName}}</b>
              </li>
            </ul>
          </div>
        </template>
      </div>
    </div>

</template>
<script>
import MHeader from '../base/MHeader'
import Swiper from '../base/swiper'
import Loading from '../base/loading'
import {getHomeAll} from '../api/index'
export default {
  created(){
    this.getData();
  },
  data() {
    return {
      sliders : [],
      hotBooks :[],
      loading:true,
    }
  },
  methods: {
    async getData(){
        let [sliders,hotBook] = await getHomeAll();
        this.sliders = sliders;
        this.hotBooks = hotBook;
        this.loading = false;
    }
  },
  computed: {},
  components: {
    MHeader,Swiper,Loading
  }
}
</script>
<style scoped>
  .bookList{
    width: 100%;
    margin: 0 auto;
  }
  .bookList h3{
    color: lightslategrey;
    margin-left: 20px;
  }
  .bookList ul{
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 15px;
  }
  .bookList ul li{
    text-align: center;
    width: 50%;
    margin: 5px 0;
  }
  .bookList ul li img{
    width: 100%;
  }
  .bookList ul li b{
    font-size: 14px;
  }
</style>

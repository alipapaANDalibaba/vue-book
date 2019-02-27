<template>
  <swiper :options="swiperOption">
    <swiper-slide v-for="(slide, index) in swiperSlides" :key="index">
      <img :src="slide" alt="">
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
  export default {
    name: 'carrousel',
    props:['swiperSlides'],
    data() {
      return {
        swiperOption: {
          // autoplay:3500,
          setWrapperSize:true,
          pagination: '.swiper-pagination',
        },
      }
    }
  }
</script>
<style scoped>
  div{touch-action: none;}
  img{
    width: 100%;
  }

</style>

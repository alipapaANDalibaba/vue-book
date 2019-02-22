<template>
    <div>
      <MHeader :back="true">首页</MHeader>
      <div class="content">
        <Swiper></Swiper>
        <Swiper></Swiper>
        <Swiper></Swiper>
        <Swiper></Swiper>
        <Swiper></Swiper>
        <Swiper></Swiper>
        <Swiper></Swiper>
        <Swiper></Swiper>
      </div>
    </div>

</template>
<script>
import MHeader from '../base/MHeader'
import Swiper from '../base/swiper'
export default {
  data() {
    return {}
  },
  methods: {},
  computed: {},
  components: {
    MHeader,Swiper
  }
}
</script>
<style scoped></style>

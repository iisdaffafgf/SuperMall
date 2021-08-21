<template>
  <van-swipe class="my-swipe" :autoplay="2500" indicator-color="white">
    <van-swipe-item v-for="item in swiperData" :key="item">
      <img v-lazy="item" class="swiper-img" />
    </van-swipe-item>
  </van-swipe>
</template>

<script>
export default {
  name: "DetailSwiper",
  props: {
    swiperData: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped>
.my-swipe {
  width: 100%;
  height: 300px;
}
.swiper-img {
  width: 100%;
}
</style>
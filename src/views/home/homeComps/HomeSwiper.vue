<template>
  <van-swipe
    class="my-swipe"
    :autoplay="2500"
    indicator-color="white"
    @change="onChange"
    :stop-propagation="false"
  >
    <van-swipe-item v-for="item in swiperData" :key="item.acm">
      <a :href="item.link">
        <img :src="item.image" :title="item.title" class="swiper-img" />
      </a>
    </van-swipe-item>
  </van-swipe>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    swiperData: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    onChange(index) {},
  },
};
</script>

<style scoped>
.swiper-img {
  width: 100%;
}
</style>
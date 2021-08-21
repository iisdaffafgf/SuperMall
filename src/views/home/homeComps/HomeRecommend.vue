<template>
  <div class="home-recommend">
    <a
      class="recommend-item"
      v-for="item in recommendData"
      :key="item.acm"
      :href="item.link"
    >
      <img :src="item.image" alt="item.title" />
      <div>{{ item.title }}</div></a
    >
  </div>
</template>

<script>
export default {
  props: {
    recommendData: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped>
.home-recommend {
  margin-top: 10px;

  width: 100%;

  display: flex;
  flex: 1;
  justify-content: space-around;
}
.home-recommend img,
.home-recommend div {
  width: 60px;
  text-align: center;
  font-size: 13px;
}
</style>
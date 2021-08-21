<template>
  <ul class="goods-list">
    <goods-list-item
      v-for="(item, index) in goodsData"
      :key="index + item.acm"
      :goods="item"
      class="goods-list-item"
    />
  </ul>
</template>

<script>
import GoodsListItem from "./GoodsListItem.vue";
export default {
  name: "GoodsList",
  components: {
    GoodsListItem,
  },
  props: {
    goodsData: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  mounted() {},
};
</script>

<style scoped>
.goods-list {
  width: 100%;
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  justify-content: space-around;
}
.goods-list-item {
  width: 48%;
  overflow: hidden;
}
</style>
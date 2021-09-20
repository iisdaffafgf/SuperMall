<template>
  <div class="recommend">
    <h3 class="recommend-title">为您推荐:</h3>
    <goods-list :goodsData="goodsData" ref="recommend" />
  </div>
</template>

<script>
import GoodsList from "@/components/content/goodslist/GoodsList.vue";

export default {
  props: {
    goodsData: {
      type: Array,
      default() {
        return {};
      },
    },
  },
  components: {
    GoodsList,
  },
};
</script>

<style scoped>
.recommend-title {
  margin: 20px 0 5px 5px;
}
</style>
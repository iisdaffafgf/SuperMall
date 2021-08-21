<template>
  <div class="base-info">
    <p class="desc">{{ baseInfo.desc }}</p>
    <div class="price">
      <span class="now-price">{{ baseInfo.price }}</span>
      <del class="old-price">{{ baseInfo.oldPrice }}</del>
      <span class="discount">{{ baseInfo.discountDesc }}</span>
    </div>
    <div class="columns">
      <span v-for="item in baseInfo.columns" :key="item">{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBaseInfo",
  props: {
    baseInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped>
.base-info {
  padding: 10px 5px 10px 5px;
}
.desc {
  font-size: 16px;
}
.price {
  padding: 10px 0;
}
.now-price {
  font-size: 16px;
  color: rgb(255, 87, 119);
}
.old-price {
  font-size: 12px;
  color: #ccc;
  padding: 0 5px;
}
.discount {
  background-color: rgb(255, 87, 119);
  vertical-align: top;
  font-size: 13px;
  color: #fff;
  padding: 2px;
  border-radius: 5px;
}
.columns {
  font-size: 12px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgba(200, 200, 200, 0.3);
  color: #ccc;
}
</style>
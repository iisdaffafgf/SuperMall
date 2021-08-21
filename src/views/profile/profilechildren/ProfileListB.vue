<template>
  <ul class="list">
    <li @click="toShopCart">
      <img src="~assets/img/profile/cart.svg" alt="" />我的购物车
    </li>
    <li><img src="~assets/img/profile/shopping.svg" alt="" />下载App</li>
  </ul>
</template>

<script>
export default {
  name: "ProfileListB",
  methods: {
    toShopCart() {
      this.$router.push("/shopcart");
    },
  },
};
</script>

<style scoped>
.list li {
  height: 40px;
  line-height: 40px;
}
.list > li:first-child {
  border-bottom: 1px solid rgba(200, 200, 200, 0.3);
}
.list img {
  width: 18px;
  height: 18px;
  vertical-align: bottom;
  margin: 0 10px 10px 11px;
}
</style>
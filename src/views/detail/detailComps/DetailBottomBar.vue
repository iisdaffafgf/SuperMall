<template>
  <div class="bottom-bar">
    <ul class="left">
      <li>
        <div class="service-img"></div>
        客服
      </li>
      <li>
        <div class="shop-img"></div>
        店铺
      </li>
      <li>
        <div class="collect-img"></div>
        收藏
      </li>
    </ul>
    <div class="right">
      <div class="buy">购买</div>
      <div class="addcart" @click="addCart">加入购物车</div>
    </div>
  </div>
</template>

<script>
export default {
  naem: "DetailBottomBar",
  methods: {
    addCart() {
      this.$emit("addCart");
    },
  },
};
</script>

<style scoped>
.bottom-bar {
  width: 100%;
  height: 49px;
  /* background-color: red; */
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  box-shadow: 0 -1px 2px rgba(128, 128, 128, 0.2);
}
.left {
  width: 55%;
  display: flex;
  background-color: #fff;
}
.left li {
  flex: 1;
  color: #777;
  font-size: 13px;
  text-align: center;
}
.left li div {
  margin: 2px auto;
  width: 30px;
  height: 30px;
  background-image: url("~@/assets/img/detail/detail_bottom.png");
  background-size: 30px;
}
.service-img {
  background-position: 0 -72px;
}
.shop-img {
  background-position: 0 -134px;
}
.right {
  width: 45%;
  display: flex;
  font-size: 13px;
}
.right div {
  flex: 1;
  line-height: 49px;
  text-align: center;
}
.buy {
  background-color: rgb(255, 120, 155);
  color: #fff;
}
.addcart {
  background-color: rgb(255, 221, 16);
  color: #000;
}
</style>
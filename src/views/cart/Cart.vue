<template>
  <div id="cart">
    <nav-bar class="nav-bar">
      <template #center>
        <div>购物车({{ goodsCounter }})</div>
      </template>
    </nav-bar>
    <scroll ref="scroll" class="content" :probeType="3" :pullUpLoad="true">
      <cart-list></cart-list>
    </scroll>
    <cart-total />
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar.vue";
import Scroll from "@/components/common/scroll/Scroll.vue";

import CartList from "./cartComps/CartList.vue";
import CartTotal from "./cartComps/CartTotal.vue";
export default {
  name: "Cart",
  components: {
    NavBar,
    Scroll,
    CartList,
    CartTotal,
  },
  computed: {
    goodsCounter() {
      return this.$store.state.cartList.length;
    },
  },
};
</script>

<style scoped>
.nav-bar {
  color: #fff;
  background-color: rgb(255, 87, 119);
}
.content {
  position: absolute;
  overflow: hidden;
  top: 44px;
  bottom: 79px;
  left: 0;
  right: 0;
}
</style>
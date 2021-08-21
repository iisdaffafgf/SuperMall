<template>
  <ul>
    <cart-item
      v-for="item in $store.state.cartList"
      :key="item.iid"
      :cartItem="item"
    />
  </ul>
</template>

<script>
import CartItem from "./CartItem.vue";
export default {
  components: {
    CartItem,
  },
};
</script>

<style>
</style>
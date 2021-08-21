<template>
  <li class="cart-item">
    <cart-select
      class="select"
      @click.native="selectThis"
      :selected="selected"
      :class="{ allSelect: cartItem.selected }"
    />
    <div class="info">
      <img v-lazy="cartItem.image" alt="" class="img" />
      <div>
        <p class="title">{{ cartItem.title }}</p>
        <p class="desc">{{ cartItem.desc }}</p>
        <div class="price">
          <span class="price-single">{{ totalPrice }}</span>
          <span>x{{ cartItem.count }}</span>
        </div>
      </div>
    </div>
  </li>
</template>

<script>
import CartSelect from "./CartSelect.vue";
export default {
  data() {
    return {};
  },
  props: {
    cartItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  components: {
    CartSelect,
  },
  computed: {
    totalPrice() {
      return (
        "￥" +
        (parseFloat(this.cartItem.price) * this.cartItem.count).toFixed(2)
      );
    },
    selected() {
      // return
    },
  },
  methods: {
    selectThis() {
      this.$store.commit("selectThis", this.cartItem.iid);
    },
  },
};
</script>

<style scoped>
.img {
  width: 60px;
  border-radius: 5px;
}
.info {
  /* padding: 0 5px; */
  display: flex;
  width: 90%;
  justify-content: space-between;
}
.info p {
  width: calc(100vw - 100px);
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 13px;
}
.cart-item {
  display: flex;
  padding: 5px 0;
  border-bottom: 1px solid #ccc;
}
.title {
  color: #000;
}
.price {
  width: calc(100vw - 130px);
  display: flex;
  justify-content: space-between;
}
.desc {
  margin: 10px 0 30px 0;
}
.select {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  margin: auto 0;
  /* padding: 0 5px; */
}
.price-single {
  color: rgb(255, 165, 0);
}
</style>
<template>
  <div class="total">
    <div class="left">
      <cart-select
        class="icon"
        @click.native="selectAll"
        :class="{ allSelect: allSelect }"
      />
      <span class="middle">全选</span>

      <span class="middle sum">合计:￥{{ totalPrice }}</span>
    </div>
    <div class="right">去结算({{ selectCounter }})</div>
  </div>
</template>

<script>
import CartSelect from "./CartSelect.vue";
export default {
  name: "CartTotal",
  components: {
    CartSelect,
  },
  computed: {
    allSelect() {
      return this.$store.state.cartList.every((item) => item.selected);
    },
    selectCounter() {
      let sum = 0;
      this.$store.state.cartList.forEach((item) => {
        if (item.selected) {
          sum++;
        }
      });
      return sum;
    },
    totalPrice() {
      let totalPrice = 0;
      this.$store.state.cartList.forEach((item) => {
        if (item.selected) {
          totalPrice += parseFloat(item.price) * item.count;
        }
      });
      return totalPrice.toFixed(2);
    },
  },
  methods: {
    selectAll() {
      if (this.$store.state.cartList.every((item) => item.selected)) {
        this.$store.commit("cancelAll");
      } else {
        this.$store.commit("selectAll");
      }
    },
  },
};
</script>

<style scoped>
.total {
  height: 30px;
  width: 100%;
  background-color: rgb(238, 238, 238);
  position: fixed;
  bottom: 49px;
  display: flex;
  justify-content: space-between;
}
.right {
  height: 100%;
  width: 20%;
  background-color: rgb(255, 81, 0);
  line-height: 30px;
  text-align: center;
  font-size: 12px;
  color: #fff;
}
.left {
  display: flex;
  width: 45%;
  justify-content: space-around;
  font-size: 12px;
}
.middle {
  line-height: 30px;
}
.sum {
  width: 60%;
}
.icon {
  margin: auto 0;
}
</style>
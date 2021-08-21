<template>
  <div class="img">
    <img src="@/assets/img/cart/tick.svg" alt="" />
  </div>
</template>

<script>
export default {
  props: {
    selected: {
      type: Boolean,
      default: false,
    },
  },
  computed: {},
};
</script>

<style scoped>
.img img {
  width: 12px;
  height: 12px;
  margin-bottom: 2px;
  border-radius: 50%;
  vertical-align: bottom;
}
.img {
  width: 15px;
  height: 15px;
  font-size: 12px;
  border-radius: 50%;
  border: 2px solid #ccc;
}
.allSelect {
  background-color: rgb(255, 87, 119);
  border: 2px solid rgb(255, 87, 119);
}
</style>
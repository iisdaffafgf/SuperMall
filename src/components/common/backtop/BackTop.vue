<template>
  <div class="back-top">
    <img src="@/assets/img/common/top.png" alt="回到顶部" />
  </div>
</template>

<script>
export default {
  name: "BackTop",
  methods: {},
};
</script>

<style scoped>
.back-top {
  width: 40px;
  height: 40px;
  border-radius: 15px;

  position: fixed;
  bottom: 55px;
  right: 10px;
  z-index: 99;
}
.back-top img {
  width: 100%;
}
</style>
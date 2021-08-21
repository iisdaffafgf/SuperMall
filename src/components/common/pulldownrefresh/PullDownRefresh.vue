<template>
  <div class="pull-down-refresh" v-show="isShow">{{ message }}</div>
</template>

<script>
export default {
  name: "PullDownRefresh",
  props: {
    isShow: {
      type: Boolean,
      default: false,
    },
    message: {
      type: String,
      default: "正在刷新...",
    },
  },
};
</script>

<style scoped>
.pull-down-refresh {
  position: fixed;
  top: 44px;
  height: 40px;
  width: 100%;
  text-align: center;
  line-height: 40px;
  background-color: #ccc;
}
</style>
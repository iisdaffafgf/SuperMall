<template>
  <ul class="tab-control">
    <li
      class="tab-item"
      v-for="(item, index) in tabList"
      :key="item"
      @click="tabItem(index)"
      :class="{ active: currentIndex === index }"
    >
      <span>{{ item }}</span>
    </li>
  </ul>
</template>

<script>
export default {
  name: "HomeTabControl",
  data() {
    return {
      currentIndex: 0,
    };
  },
  props: {
    tabList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    tabItem(index) {
      this.currentIndex = index;
      this.$emit("tabItem", this.currentIndex);
    },
  },
};
</script>

<style scoped>
.tab-control {
  width: 100%;
  display: flex;
  margin: 0 0 5px 0;
  background-color: #fff;
  padding: 5px 0 5px 0;
}
.tab-item {
  flex: 1;
  text-align: center;
  height: 28px;
  line-height: 28px;
  font-size: 14px;
}
.active > span {
  display: inline-block;
  width: 60px;
  color: rgb(254, 99, 129);
  border-bottom: 3px solid rgb(254, 99, 129);
}
</style>
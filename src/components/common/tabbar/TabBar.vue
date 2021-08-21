<template>
  <div id="tab-bar">
    <tab-bar-item
      v-for="item in pData"
      :key="item.text"
      :pdata="{
        defaultImg: item.defaultImg,
        activeImage: item.activeImage,
        text: item.text,
        path: item.path,
      }"
    />
  </div>
</template>

<script>
import TabBarItem from "./TabBarItem.vue";
export default {
  name: "TabBar",
  data() {
    return {};
  },
  props: {
    pData: {
      type: Array,
    },
  },
  components: {
    TabBarItem,
  },
};
</script>

<style scoped>
#tab-bar {
  width: 100%;
  height: 49px;
  display: flex;
  flex: 1;
  justify-content: space-around;
  background-color: #f6f6f6;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  box-shadow: 0 -1px 2px rgba(128, 128, 128, 0.2);
}
</style>
<template>
  <ul class="list">
    <li
      v-for="(item, index) in list"
      :key="item.acm"
      class="item"
      :class="{ active: index === currentIndex }"
      @click="togg(index)"
    >
      {{ item.title }}
    </li>
  </ul>
</template>

<script>
export default {
  name: "CategoryList",
  data() {
    return {
      currentIndex: 0,
    };
  },
  props: {
    list: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    togg(index) {
      this.currentIndex = index;
      this.$emit("togg", index);
    },
  },
};
</script>

<style scoped>
.item {
  font-size: 12px;
  width: 80px;
  height: 35px;
  line-height: 35px;
  text-align: center;
  background-color: rgb(246, 246, 246);
}
.active {
  color: red;
  background-color: #fff;
}
.active::before {
  content: "";
  display: block;
  position: absolute;
  width: 0;
  height: 36px;
  border-left: 2px solid red;
}
</style>
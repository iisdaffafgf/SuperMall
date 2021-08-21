<template>
  <nav-bar class="nav-bar">
    <template #left>
      <div @click="backRouter">
        <img src="@/assets/img/common/back.svg" alt="" class="back-img" />
      </div>
    </template>
    <template #center>
      <div class="center">
        <div
          v-for="(item, index) in navList"
          :key="item"
          @click="jumpY(index)"
          :class="{ active: index === currentIndex }"
        >
          {{ item }}
        </div>
      </div>
    </template>
  </nav-bar>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar.vue";

export default {
  name: "DetailNavBar",
  components: {
    NavBar,
  },
  props: {
    navList: {
      type: Array,
      default() {
        return [];
      },
    },
    currentIndex: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    backRouter() {
      this.$router.back();
    },
    jumpY(index) {
      this.$emit("jumpY", index);
    },
  },
};
</script>

<style scoped>
.back-img {
  vertical-align: middle;
}
.center {
  display: flex;
  font-size: 13px;
}
.center div {
  flex: 1;
}
.active {
  color: #f00;
}
</style>
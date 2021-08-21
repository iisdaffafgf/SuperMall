<template>
  <div class="tab-bar-item" :path="pdata.path" @click="routerLink">
    <div class="default-img img" v-if="!isActive">
      <img :src="pdata.defaultImg" alt="" />
    </div>
    <div class="active-img img" v-else>
      <img :src="pdata.activeImage" alt="" />
    </div>
    <div class="text" :class="{ active: isActive }">{{ pdata.text }}</div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    pdata: {
      type: Object,
    },
  },
  methods: {
    routerLink() {
      this.$router.push(this.pdata.path);
    },
  },
  computed: {
    isActive() {
      return this.$route.path === this.pdata.path;
    },
  },
};
</script>

<style scoped>
.tab-bar-item {
  text-align: center;
  margin-top: 3px;
}
.text {
  font-size: 13px;
}
.img img {
  width: 26px;
}
.active {
  color: rgb(255, 87, 119);
}
</style>
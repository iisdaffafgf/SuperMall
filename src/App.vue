<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view />
    </keep-alive>
    <tab-bar :pData="tabBarData" v-if="showTabBar" />
  </div>
</template>
<script>
import TabBar from "@/components/common/tabbar/TabBar.vue";
export default {
  components: {
    TabBar,
  },
  data() {
    return {
      tabBarData: [
        {
          defaultImg: require("./assets/img/tabbar/home.svg"),
          activeImage: require("./assets/img/tabbar/home_active.svg"),
          text: "首页",
          path: "/home",
        },
        {
          defaultImg: require("./assets/img/tabbar/category.svg"),
          activeImage: require("./assets/img/tabbar/category_active.svg"),
          text: "分类",
          path: "/category",
        },
        {
          defaultImg: require("./assets/img/tabbar/profile.svg"),
          activeImage: require("./assets/img/tabbar/profile_active.svg"),
          text: "我的",
          path: "/profile",
        },
        {
          defaultImg: require("./assets/img/tabbar/shopcart.svg"),
          activeImage: require("./assets/img/tabbar/shopcart_active.svg"),
          text: "购物车",
          path: "/cart",
        },
      ],
    };
  },
  computed: {
    showTabBar() {
      return (
        this.$route.path == "/home" ||
        this.$route.path == "/category" ||
        this.$route.path == "/profile" ||
        this.$route.path == "/cart"
      );
    },
  },
};
</script>
<style>
@import url("./assets/css/base.css");
</style>

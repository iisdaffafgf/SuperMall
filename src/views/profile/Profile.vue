<template>
  <div id="profile">
    <nav-bar class="nav-bar">
      <template #center>
        <div>个人中心</div>
      </template>
    </nav-bar>
    <pull-down-refresh :isShow="isShow" />
    <scroll
      ref="scroll"
      class="content"
      :probeType="3"
      :pullUpLoad="true"
      :pullDownRefresh="true"
      @pullingDown="pullingDownRefresh"
    >
      <profile-status />
      <profile-balance />
      <profile-list-a />
      <profile-list-b />
    </scroll>
  </div>
</template>

<script>
import ProfileStatus from "./profilechildren/ProfileStatus.vue";
import ProfileBalance from "./profilechildren/ProfileBalance.vue";
import ProfileListA from "./profilechildren/ProfileListA.vue";
import ProfileListB from "./profilechildren/ProfileListB.vue";

import NavBar from "components/common/navbar/NavBar.vue";
import Scroll from "components/common/scroll/Scroll.vue";
import PullDownRefresh from "components/common/pulldownrefresh/PullDownRefresh.vue";
export default {
  name: "Profile",
  components: {
    ProfileStatus,
    ProfileBalance,
    ProfileListA,
    ProfileListB,

    NavBar,
    Scroll,
    PullDownRefresh,
  },
  data() {
    return {
      isShow: false,
    };
  },
  methods: {
    pullingDownRefresh() {
      this.isShow = true;
      setTimeout(() => {
        location.reload();
        this.$refs.scroll.finishPullDown();
        this.isShow = false;
      }, 2000);
    },
  },
};
</script>

<style scoped>
#profile {
  position: relative;
  height: 100vh;
}
.nav-bar {
  background-color: rgb(254, 99, 129);
  color: #fff;
  /* font-weight: bold; */
}
.content {
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  overflow: hidden;
}
</style>
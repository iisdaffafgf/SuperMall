<template>
  <div class="wrapper" ref="wrapper">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Bscroll from "@better-scroll/core";
import PullUp from "@better-scroll/pull-up";
import PullDown from "@better-scroll/pull-down";
import observeImage from "@better-scroll/observe-image";
import observeDOM from "@better-scroll/observe-dom";

Bscroll.use(PullUp);
Bscroll.use(PullDown);
Bscroll.use(observeImage);
Bscroll.use(observeDOM);

export default {
  name: "Scroll",

  data() {
    return {
      scroll: null,
    };
  },

  props: {
    probeType: {
      type: Number,
      default: 0,
    },
    pullUpLoad: {
      type: Boolean,
      default: false,
    },
    pullDownRefresh: {
      type: Boolean,
      default: false,
    },
  },

  mounted() {
    this.scroll = new Bscroll(this.$refs.wrapper, {
      observeDOM: true,
      observeImage: true,
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
      pullDownRefresh: this.pullDownRefresh,
    });
    // 监听滑动
    this.scroll.on("scroll", (position) => {
      this.$emit("scroll", position);
    });
    // 监听上滑手势并且到底部
    this.scroll.on("pullingUp", () => {
      this.$emit("pullingUp");
    });
    // 监听下拉刷新
    if (this.pullDownRefresh) {
      this.scroll.on("pullingDown", () => {
        this.$emit("pullingDown");
      });
    }
  },

  methods: {
    scrollTo(x, y, time = 300) {
      this.scroll.scrollTo(x, y, time);
    },
    finishPullUp() {
      this.scroll.finishPullUp();
    },
    finishPullDown() {
      this.scroll.finishPullDown();
    },
    refresh() {
      this.scroll.refresh();
    },
  },
};
</script>

<style>
</style>
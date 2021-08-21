<template>
  <div id="home">
    <nav-bar class="nav-bar">
      <template #center>购物街</template>
    </nav-bar>
    <home-tab-control
      :tabList="tabList"
      @tabItem="tabItem"
      class="hack-tab"
      v-show="tabShow"
    />
    <scroll
      ref="scroll"
      class="content"
      :probeType="3"
      :pullUpLoad="true"
      @scroll="scroll"
      @pullingUp="pullingUp"
    >
      <home-swiper :swiperData="swiperData" />
      <home-recommend :recommendData="recommendData" />
      <home-week></home-week>

      <home-tab-control
        :tabList="tabList"
        @tabItem="tabItem"
        ref="tabControl"
      />

      <goods-list :goodsData="goodsData[type[currentIndex]].list" />
    </scroll>
    <back-top v-show="tabShow" @click.native="backTop" />
  </div>
</template>

<script>
import { getHomeMultidata, getHomeData } from "@/network/home.js";

// 完全公共组件
import NavBar from "@/components/common/navbar/NavBar.vue";
import Scroll from "@/components/common/scroll/Scroll.vue";
import BackTop from "@/components/common/backtop/BackTop.vue";

// 内容公共组件
import GoodsList from "@/components/content/goodslist/GoodsList.vue";

// Home内容组件
import HomeSwiper from "./homeComps/HomeSwiper.vue";
import HomeRecommend from "./homeComps/HomeRecommend.vue";
import HomeWeek from "./homeComps/HomeWeek.vue";
import HomeTabControl from "./homeComps/HomeTabControl.vue";
export default {
  name: "Home",
  components: {
    NavBar,
    Scroll,
    BackTop,

    GoodsList,

    HomeSwiper,
    HomeRecommend,
    HomeWeek,
    HomeTabControl,
  },
  data() {
    return {
      // 轮播图数据
      swiperData: [],
      // 推荐数据
      recommendData: [],
      // 商品数据
      goodsData: {
        pop: { page: 0, list: [] }, //流行
        new: { page: 0, list: [] }, //新款
        sell: { page: 0, list: [] }, //精选
      },
      // 商品Tag，同时特配合currentIndex，控制当前传给GoodsList组件的是哪个Tag的数据
      type: ["pop", "new", "sell"],
      currentIndex: 0,
      // tab切换栏的项
      tabList: ["流行", "推荐", "精选"],
      // 控制hackTab栏以及backTop的显示与隐藏
      tabShow: false,
    };
  },
  computed: {},
  methods: {
    // 商品数据
    getHomeGoods(type) {
      const page = this.goodsData[type].page + 1;
      getHomeData(type, page).then((res) => {
        // console.log(res.data.list);
        this.goodsData[type].list.push(...res.data.list);
        this.goodsData[type].page += 1;
        // console.log(this.goodsData[this.type].list[0]);
      });
    },
    // tab栏切换商品分类
    tabItem(currentIndex) {
      this.currentIndex = currentIndex;
    },
    // 监听滑动，控制hackTab的显示隐藏
    scroll(position) {
      let tabTop = this.$refs.tabControl.$el.offsetTop;
      // console.log(-position.y);
      if (-position.y >= tabTop) {
        this.tabShow = true;
      } else {
        this.tabShow = false;
      }
    },
    // 监听上滑手势，到底请求新增数据
    pullingUp() {
      this.getHomeGoods(this.type[this.currentIndex]);
      this.$refs.scroll.finishPullUp();
    },
    // 点击回到顶部(自定义组件标签不能直接使用click，需要使用事件修饰符native)
    backTop() {
      this.$refs.scroll.scrollTo(0, 0);
    },
  },
  created() {
    // 轮播图、推荐数据
    getHomeMultidata().then((res) => {
      this.swiperData = res.data.banner.list;
      this.recommendData = res.data.recommend.list;
      // console.log(this.recommendData);
    });
    // 商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
};
</script>

<style scoped>
#home {
  height: 100vh;
  position: relative;
}
.nav-bar {
  background-color: rgb(254, 99, 129);
  color: #fff;
}
.content {
  width: 100%;
  position: absolute;
  top: 44px;
  bottom: 49px;
  overflow: hidden;
}
.hack-tab {
  position: fixed;
  top: 44px;
  z-index: 9;
}
</style>
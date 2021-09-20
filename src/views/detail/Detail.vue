<template>
  <div id="detail">
    <detail-nav-bar
      :navList="navList"
      class="nav-bar"
      @jumpY="jumpY"
      :currentIndex="currentIndex"
    />

    <scroll
      ref="scroll"
      class="content"
      :probeType="3"
      :pullUpLoad="true"
      @scroll="scroll"
    >
      <detail-swiper :swiperData="swiperData" ref="goods" />
      <detail-base-info :baseInfo="baseInfo" />
      <detail-shop-info :shopInfo="shopInfo" />
      <detail-goods-wear :wearInfo="wearInfo" @imgLoaded="imgLoaded" />
      <detail-goods-params :goodsParams="goodsParams" ref="params" />
      <detail-rate :userRate="userRate" ref="rate" />

      <detail-recommend :goodsData="recommend" ref="recommend" />
    </scroll>
    <back-top @click.native="backTop" v-show="showBackTop" />
    <detail-bottom-bar @addCart="addCart" />
  </div>
</template>

<script>
import {
  getDetailData,
  getRecommend,
  Baseinfo,
  ShopInfo,
  CartItem,
} from "@/network/detail.js";

import Scroll from "@/components/common/scroll/Scroll.vue";
import BackTop from "@/components/common/backtop/BackTop.vue";

import DetailNavBar from "./detailComps/DetailNavBar.vue";
import DetailSwiper from "./detailComps/DetailSwiper.vue";
import DetailBaseInfo from "./detailComps/DetailBaseInfo.vue";
import DetailShopInfo from "./detailComps/DetailShopInfo.vue";
import DetailGoodsWear from "./detailComps/DetailGoodsWear.vue";
import DetailGoodsParams from "./detailComps/DetailGoodsParams.vue";
import DetailRate from "./detailComps/DetailRate.vue";
import DetailRecommend from "./detailComps/DetailRecommend.vue";
import DetailBottomBar from "./detailComps/DetailBottomBar.vue";
export default {
  name: "Detail",
  components: {
    Scroll,
    BackTop,

    // GoodsList,

    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsWear,
    DetailGoodsParams,
    DetailRate,
    DetailRecommend,
    DetailBottomBar,
  },
  data() {
    return {
      // navbar内容
      navList: ["商品", "参数", "评论", "推荐"],
      // 四个模块的offsetTop
      offsetTop: [],
      currentIndex: 0,
      // 轮播图
      swiperData: [],
      // 商品基本数据
      baseInfo: {},
      // 店铺数据
      shopInfo: {},
      // 穿着效果
      wearInfo: {},
      // 参数数据
      goodsParams: {},
      // 评论数据
      userRate: {},
      // 推荐数据
      recommend: [],
      // 添加到购物车
      cartItem: {},
      showBackTop: false,
    };
  },
  methods: {
    // 图片加载完成
    imgLoaded() {
      this.jumpY(0);
      // console.log(this.offsetTop);
    },
    // 点击选项，跳转位置
    jumpY(index) {
      this.offsetTop = [];
      this.offsetTop.push(
        this.$refs.goods.$el.offsetTop,
        this.$refs.params.$el.offsetTop,
        this.$refs.rate.$el.offsetTop,
        this.$refs.recommend.$el.offsetTop
      );
      if (this.offsetTop.length === 4) {
        this.currentIndex = index;
        this.$refs.scroll.scrollTo(0, -this.offsetTop[index]);
      }
    },
    // 监听滚动
    scroll(position) {
      let y = -position.y;
      if (y >= 0 && y < this.offsetTop[1]) {
        if (y > 1000) {
          this.showBackTop = true;
        } else {
          this.showBackTop = false;
        }
        this.offsetTop = [];
        this.offsetTop.push(
          this.$refs.goods.$el.offsetTop,
          this.$refs.params.$el.offsetTop,
          this.$refs.rate.$el.offsetTop,
          this.$refs.recommend.$el.offsetTop
        );
        this.currentIndex = 0;
      } else if (y >= this.offsetTop[1] && y < this.offsetTop[2]) {
        this.currentIndex = 1;
      } else if (y >= this.offsetTop[2] && y < this.offsetTop[3]) {
        this.currentIndex = 2;
      } else {
        this.currentIndex = 3;
      }
      // console.log(position);
    },
    // 回到顶部
    backTop() {
      this.$refs.scroll.scrollTo(0, 0);
    },
    // 添加到购物车
    addCart() {
      this.$store.dispatch("addCart", this.cartItem).then((res) => {
        this.$toast(res);
      });
    },
  },
  created() {
    getDetailData(this.$route.params.iid).then((res) => {
      let data = res.result;
      // console.log(data);
      // 轮播图数据
      this.swiperData = data.itemInfo.topImages;
      // 基本数据
      this.baseInfo = new Baseinfo(data);
      // 店铺信息数据
      this.shopInfo = new ShopInfo(data.shopInfo);
      // 穿着效果数据
      this.wearInfo = data.detailInfo;
      // 参数数据
      this.goodsParams = data.itemParams;
      // 评论数据
      this.userRate = data.rate;
      // 添加到购物车数据
      this.cartItem = new CartItem(data);
    });
    // 推荐数据
    getRecommend().then((res) => {
      this.recommend = res.data.list;
    });
  },
  mounted() {},
};
</script>

<style scoped>
#detail {
  background-color: #fff;
  position: relative;
  height: 100vh;
}
.nav-bar {
  position: relative;
  top: 0;
  left: 0;
  right: 0;
}
.content {
  width: 100%;
  position: absolute;
  top: 44px;
  bottom: 49px;
  overflow: hidden;
}
</style>
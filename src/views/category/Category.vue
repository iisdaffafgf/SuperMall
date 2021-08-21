<template>
  <div id="category">
    <nav-bar class="nav-bar">
      <template #center> 商品分类 </template>
    </nav-bar>
    <div class="content">
      <scroll class="content1" :probeType="3" :pullUpLoad="true">
        <category-list :list="cateList" @togg="togg"></category-list>
      </scroll>
      <scroll class="content2" :probeType="3" :pullUpLoad="true">
        <goods-list :goodsData="cateListData[currentIndex]" />
      </scroll>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar.vue";
import Scroll from "@/components/common/scroll/Scroll.vue";

import GoodsList from "@/components/content/goodslist/GoodsList.vue";

import CategoryList from "./categoryComps/CategoryList.vue";

import { getCateList, getCateGoods } from "@/network/category.js";
export default {
  name: "Category",
  data() {
    return {
      currentIndex: 0,
      cateList: [],
      cateListData: [],
    };
  },
  components: {
    NavBar,
    Scroll,

    GoodsList,

    CategoryList,
  },
  methods: {
    togg(index) {
      this.currentIndex = index;
      if (!this.cateListData[this.currentIndex]) {
        getCateGoods(this.cateList[this.currentIndex].miniWallkey).then(
          (res) => {
            this.cateListData.length = this.cateList.length;
            this.cateListData.splice(this.currentIndex, 0, res);
          }
        );
      }
    },
  },
  created() {
    getCateList().then((res) => {
      // console.log(res.data.category.list);
      this.cateList = res.data.category.list;
      // console.log(this.cateList);
      getCateGoods(this.cateList[0].miniWallkey).then((res) => {
        this.cateListData.push(res);
        // console.log(this.cateListData);
      });
    });
  },
};
</script>

<style scoped>
.nav-bar {
  background-color: rgb(254, 99, 129);
  color: #fff;
}
.content1 {
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  width: 80px;
  overflow: hidden;
}
.content2 {
  position: absolute;
  top: 44px;
  bottom: 49px;
  right: 0;
  width: calc(100vw - 80px);
  overflow: hidden;
}
</style>
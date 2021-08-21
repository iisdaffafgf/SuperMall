<template>
  <div class="goods-wear" v-if="Object.keys(wearInfo).length">
    <div class="desc">
      <div class="top-left addstyle"></div>
      <p class="desc-content">{{ wearInfo.desc }}</p>
      <div class="bottom-right addstyle"></div>
    </div>
    <h5 class="title">
      {{ wearInfo.detailImage[0].key }}
    </h5>
    <ul class="imgs">
      <li
        v-for="(item, index) in wearInfo.detailImage[0].list"
        :key="item + index"
      >
        <img v-lazy="item" alt="穿着效果" @load="imgLoaded" />
      </li>
    </ul>
  </div>
</template>

<script>
import { debounce } from "@/common/utils.js";
export default {
  name: "DetailGoodsWear",
  data() {
    return {
      counter: 0,
    };
  },
  props: {
    wearInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    imgLoaded() {
      this.counter++;
      if (this.counter === this.wearInfo.detailImage[0].list.length) {
        this.$emit("imgLoaded");
      }
    },
  },
};
</script>

<style scoped>
.goods-wear {
  padding: 10px 0;
  position: relative;
}
.addstyle {
  border-bottom: 1px solid #000;
  width: 35%;
}
.addstyle::before {
  width: 3px;
  height: 3px;
  background-color: #000;
  content: "";
  display: block;
}
.top-left {
  position: absolute;
  left: 5px;
}
.bottom-right {
  position: absolute;
  right: 5px;
}
.bottom-right::before {
  position: absolute;
  right: 0;
  top: -3px;
}
.desc-content {
  padding: 10px 0;
  font-size: 13px;
  text-indent: 2em;
}
.desc {
  padding: 0 5px;
}
.title {
  padding: 0 5px;
  font-weight: normal;
  color: #000;
  margin-top: 10px;
}
.imgs {
  padding: 5px;
}
.imgs img {
  width: 100%;
}
</style>
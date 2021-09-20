<template>
  <li class="goods-list-item" @click="toDetail">
    <img v-lazy="showImg" alt="" class="goods-img" />
    <div class="goods-info">
      <div class="goods-title">{{ goods.title }}</div>
      <div class="goods-pop">
        <span class="goods-price">{{ goodsPrice }}</span>
        <span class="goods-collect">
          <img src="@/assets/img/common/collect.svg" alt="收藏人数：" />
          <span class="collects">{{ goods.cfav }}</span>
        </span>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  name: "GoodsListItem",
  props: {
    goods: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {
    goodsPrice() {
      return `￥${parseInt(this.goods.price).toFixed(2)}`;
    },
    showImg() {
      return this.goods.image || this.goods.img || this.goods.show.img;
    },
  },
  methods: {
    toDetail() {
      this.$router.push("/detail/" + this.goods.iid);
    },
  },
  mounted() {},
};
</script>

<style scoped>
.goods-list-item {
  position: relative;
  margin-bottom: 10px;
}
.goods-img {
  width: 100%;
  margin-bottom: 40px;
  border-radius: 5px;
}
.goods-info {
  width: 100%;
  position: absolute;
  bottom: 0;
}
.goods-title {
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 12px;
}
.goods-pop {
  text-align: center;
}
.goods-price {
  font-size: 14px;
  color: rgb(254, 99, 129);
}
.goods-collect > img {
  margin-left: 5px;
  width: 12px;
  vertical-align: middle;
}
.collects {
  font-size: 12px;
}
</style>
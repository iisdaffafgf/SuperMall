<template>
  <div class="goods-params" v-if="Object.keys(goodsParams).length">
    <h5 class="title">{{ goodsParams.rule.key }}</h5>
    <table class="rule">
      <tr v-for="items in goodsParams.rule.tables[0]" :key="items[0]">
        <td v-for="(item, index) in items" :key="item + index">
          {{ item }}
        </td>
      </tr>
    </table>
    <h5 class="title">{{ goodsParams.info.key }}</h5>
    <table class="info">
      <tr v-for="items in goodsParams.info.set" :key="items.key">
        <td class="fixedwidth">{{ items.key }}</td>
        <td class="pinkcolor">{{ items.value }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "DetailGoodsParams",
  props: {
    goodsParams: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped>
.title {
  font-weight: normal;
  color: #000;
  width: 100%;
  text-align: center;
}
.rule,
.info {
  padding: 0 5px;
  width: 100%;
  font-size: 12px;
}
td {
  height: 30px;
  border-bottom: 1px solid #efefef;
}
.fixedwidth {
  width: 25%;
}
.pinkcolor {
  color: rgb(255, 120, 155);
}
</style>
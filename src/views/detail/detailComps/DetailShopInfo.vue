<template>
  <div class="shop-info">
    <ul class="services">
      <template v-for="(item, index) in shopInfo.services">
        <li v-if="index < 4" :key="item.name">
          <img :src="item.icon" alt="" v-if="item.icon" />
          <span>{{ item.name }}</span>
        </li>
      </template>
    </ul>
    <div class="shop">
      <img :src="shopInfo.logo" alt="logo" class="shop-logo" />
      <span class="shop-name">{{ shopInfo.name }}</span>
    </div>
    <div class="score">
      <div class="sells-goods">
        <div class="sells">
          <div>{{ sells }}</div>
          <div>总销量</div>
        </div>
        <div class="goods">
          <div>{{ this.shopInfo.goods }}</div>
          <div>全部宝贝</div>
        </div>
      </div>
      <div class="divider"></div>
      <table class="goods-score">
        <tr v-for="item in shopInfo.score" :key="item.name">
          <td
            v-for="(value, key) in item"
            :key="key + value"
            :class="{
              betterdesc: key === 'isBetter' && item[key],
              notbetterdesc: key === 'isBetter' && !item[key],
              betterscore: key === 'score' && item.isBetter,
              notbetterscore: key === 'score' && !item.isBetter,
            }"
          >
            {{ scoreCom(key, value) }}
          </td>
        </tr>
      </table>
    </div>
    <div class="goshop">进店逛逛</div>
  </div>
</template>

<script>
export default {
  name: "DetailShopInfo",
  props: {
    shopInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {
    sells() {
      return this.shopInfo.sells > 100000
        ? (this.shopInfo.sells / 10000).toFixed(1) + "万"
        : this.shopInfo.sells;
    },
    scoreCom() {
      return function (key, value) {
        if (key === "isBetter") {
          return value ? "高" : "低";
        }
        return value;
      };
    },
  },
};
</script>

<style>
.shop-info {
  padding: 10px 5px;
}
.services {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
}
.services img {
  width: 10px;
}
.shop {
  margin: 20px 0;
  height: 40px;
}
.shop-logo {
  width: 40px;
  border: 1px solid #f00;
  border-radius: 25px;
  vertical-align: middle;
}
.shop-name {
  padding-left: 10px;
}
.score {
  display: flex;
  font-size: 12px;

  justify-content: space-around;
}
.sells-goods {
  width: 100px;
  padding-top: 8px;

  text-align: center;
  display: flex;
  justify-content: space-between;
}
.divider {
  margin-top: 4px;
  width: 1px;
  height: 40px;
  background-color: #ccc;
}
.goshop {
  width: 100px;
  background-color: rgb(244, 244, 244);
  border-radius: 5px;
  text-align: center;
  margin: 5px auto;
  font-size: 14px;
  line-height: 24px;
}

.betterdesc {
  color: #fff;
  background: #f00;
}
.notbetterdesc {
  color: #fff;
  background-color: #367c36;
}
.betterscore {
  color: #f00;
}
.notbetterscore {
  color: #367c36;
}
</style>
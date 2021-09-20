<template>
  <div class="rate" v-if="Object.keys(userRate).length">
    <div class="title">
      <span>用户评价</span>
      <span>更多（{{ getRates }}）</span>
    </div>
    <div class="user-rate">
      <div class="user">
        <img :src="userRate.list[0].user.avatar" alt="" />
        <span class="uname">{{ userRate.list[0].user.uname }}</span>
      </div>
      <p class="content">{{ userRate.list[0].content }}</p>
      <p class="created">{{ getTime }}{{ userRate.list[0].style }}</p>
      <ul class="rate-img">
        <li v-for="item in userRate.list[0].images" :key="item">
          <img :src="item" alt="" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { formatDate } from "@/common/utils.js";
export default {
  name: "DetailRate",
  props: {
    userRate: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {
    getRates() {
      return this.userRate.cRate > 99 ? "99+" : this.userRate.cRate;
    },
    getTime() {
      return formatDate(
        new Date(this.userRate.list[0].created * 1000),
        "yyyy-MM-dd hh:mm"
      );
    },
  },
};
</script>

<style scoped>
.rate {
  padding: 10px 5px;
  border-bottom: 1px solid #ccc;
}
.title {
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid #cccc;
  display: flex;
  justify-content: space-between;
}
.user {
  margin: 10px 0;
}
.user img {
  width: 30px;
  border-radius: 15px;
  margin-right: 8px;
  vertical-align: middle;
}
.content {
  font-size: 12px;
}
.created {
  margin-top: 5px;
  font-size: 12px;
  color: rgba(200, 200, 200);
}
.rate-img {
  display: flex;
  align-items: flex-end;
}
.rate-img li {
  width: 20%;
  margin-right: 5px;
}
.rate-img img {
  width: 100%;
}
</style>
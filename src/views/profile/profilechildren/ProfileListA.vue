<template>
  <ul class="list">
    <li><img src="~assets/img/profile/message.svg" alt="" />我的消息</li>
    <li class="center">
      <img src="~assets/img/profile/pointer.svg" alt="" />积分商城
    </li>
    <li><img src="~assets/img/profile/vip.svg" alt="" />会员卡</li>
  </ul>
</template>

<script>
export default {
  name: "ProfileListA",
};
</script>

<style scoped>
.list {
  border-bottom: 5px solid rgb(242, 242, 242);
}
.list li {
  height: 40px;
  line-height: 40px;
}
.list img {
  width: 18px;
  height: 18px;
  vertical-align: bottom;
  margin: 0 10px 10px 11px;
}
.center {
  border-top: 1px solid rgba(200, 200, 200, 0.3);
  border-bottom: 1px solid rgba(200, 200, 200, 0.3);
}
</style>
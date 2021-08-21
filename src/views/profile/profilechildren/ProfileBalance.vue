<template>
  <div class="balance">
    <div>
      <div class="text-center"><span>0.00</span>元</div>
      <div>我的余额</div>
    </div>
    <div class="center">
      <div class="text-center"><span>0</span>个</div>
      <div>我的优惠</div>
    </div>
    <div>
      <div class="text-center"><span>0</span>分</div>
      <div>我的积分</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileBalance",
};
</script>

<style scoped>
.balance {
  padding: 10px 0;
  border-bottom: 5px solid rgb(242, 242, 242);
  display: flex;
  justify-content: space-around;
}
span {
  color: rgb(201, 112, 86);
  font-size: 24px;
  font-weight: bold;
}
.text-center {
  text-align: center;
  margin: 5px 0;
}
.center {
  position: relative;
}
.center::before {
  position: absolute;
  left: -25px;
  top: 0;
  content: "";
  display: block;
  height: 100%;
  width: 1px;
  background-color: #ddd;
  transform: scaleX(50%);
}
.center::after {
  position: absolute;
  right: -25px;
  top: 0;
  content: "";
  display: block;
  height: 100%;
  width: 1px;
  background-color: #ddd;
  transform: scaleX(50%);
}
</style>
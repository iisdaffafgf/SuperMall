<template>
  <div class="profile-status">
    <div class="avatars">
      <img src="~assets/img/profile/avatar.svg" alt="" />
    </div>
    <div class="status">
      <div class="login">
        <a href="javascript:;">登录</a>
        /
        <a href="javascript:;">注册</a>
      </div>
      <div class="phone-num">
        <img src="~assets/img/profile/phone.svg" alt="" />
        <a href="javascript:;">暂无绑定手机号</a>
      </div>
    </div>
    <div class="more"></div>
  </div>
</template>

<script>
export default {
  name: "ProfileStatus",
};
</script>

<style scoped>
.profile-status {
  display: flex;
  position: relative;
  width: 100%;
  height: 100px;
  padding: 10px;

  background-color: rgb(254, 99, 129);

  color: #fff;
}
.profile-status a {
  color: #fff;
  /* line-height: 90px; */
}
.avatars {
  width: 80px;
  height: 80px;
}

.avatars img {
  width: 100%;
}
.status {
  margin-left: 10px;
  margin-top: 20px;
}
.status img {
  width: 18px;
  height: 18px;
  vertical-align: bottom;
}
.phone-num {
  margin-top: 10px;
}
.more {
  width: 20px;
  height: 20px;
  border-top: #fff 2px solid;
  border-right: #fff 2px solid;
  transform: rotateZ(45deg) translateY(-50%);

  position: absolute;
  top: 50%;
  right: 20px;
}
</style>
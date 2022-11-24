<template>
  <div class="otherLogin">
    <div class="otherLogin-title">
      <div class="title-icon" @click="onBack">
        <img src="../../res/mipmap-xxhdpi-v4/fanhui.png" alt="" />
      </div>
      <div class="title-text">登陆</div>
    </div>
    <div class="ipt1">
      <input type="text" placeholder="请输入昵称" />
    </div>
    <div class="ipt2">
      <input type="password" placeholder="请输入密码,密码8-16位" />
    </div>
    <div class="otherLogin-bg">
        <img src="../../res/mipmap-xxhdpi-v4/bgmao.png" alt="">
    </div>
    <div class="otherLogin-agreement">
        <div class="otherLogin-agreement-icon">
            <img src="../../res/drawable-xxhdpi-v4/abc_btn_check_to_on_mtrl_000.png" alt="">
        </div>
        <div class="otherLogin-agreement-text">我已阅读并同意用户协议和隐私政策</div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    onBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="scss" scoped>
.otherLogin {
  width: 100vw;
  height: 100vh;

  .ipt1 {
    width: 85%;
    height: 30px;
    margin: 10% auto;
    text-align: center;
    border-bottom: 0.1px solid #eee;
    input {
      width: 100%;
      outline: none;
      border: 0;
    }
  }
  .ipt2 {
    width: 85%;
    height: 30px;
    margin: 10% auto;
    text-align: center;
    border-bottom: 0.1px solid #eee;
    input {
      width: 100%;
      outline: none;
      border: 0;
    }
  }
  .otherLogin-title {

    width: 100%;
    border-bottom: 0.1px solid #eee;
    .title-text {
      width: 100%;
      height: 40px;
      text-align: center;
      line-height: 40px;
      color: #878787;
    }
    .title-icon {
      width: 10px;
      position: fixed;
      top: 10px;
      left: 10px;
    }
  }
  .otherLogin-agreement {
    width: 100vw;
    margin-top: 10%;
    display: flex;
    
   align-items: center;

    .otherLogin-agreement-icon {
        width: 25px;
    }
    .otherLogin-agreement-text {
        line-height: 25px;
        font-size: 12px;
        text-align: center;
    }
  }
}
</style>
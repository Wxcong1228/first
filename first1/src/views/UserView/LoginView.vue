<template>
  <div class="login">
    <div class="login-content">
      <div class="login-back" @click="toBack">
        <img src="../../res/mipmap-xxhdpi-v4/shareguanbi.png" alt="" />
      </div>
      <div class="login-bg">
        <img src="../../res/mipmap-xxhdpi-v4/shenmantanger.png" alt="" />
      </div>
      <div class="login-text">使用第三方登录</div>
      <div class="login-icon">
        <div class="login-icon-pic">
          <img src="../../res/mipmap-xxhdpi-v4/shareqqhaoyou.png" alt="" />
          <img src="../../res/mipmap-xxhdpi-v4/shareweixinhaoyou.png" alt="" />
          <img src="../../res/mipmap-xxhdpi-v4/shareweibo.png" alt="" />
        </div>
      </div>
      <div class="login-xieyi">
        <input type="checkbox">
        <span>我已阅读并同意用户协议和隐私政策</span>
      </div>
      <div class="login-other" @click="toOther">其他登录方式</div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    toBack() {
      this.$router.go(-1);
    },
    toOther() {
        this.$router.push({
            path:'/otherLogin'
        })
    }
  },
};
</script>

<style lang="scss" scoped>
.login {
  width: 100vw;
  height: 100vh;

  .login-content {
    width: 100vw;
    height: 100vh;

    .login-bg {
      width: 100%;
      height: 40%;
      line-height: 300px;
      text-align: center;
      img {
        width: 25%;
      }
    }
    .login-back {
      position: fixed;
      width: 13px;
      top: 15px;
      left: 15px;
    }
    .login-text {
      width: 100%;
      text-align: center;
      font-size: 13px;
      color: #aaa;
    }
    .login-icon {
      width: 100%;
      display: flex;
      text-align: center;
      margin-top: 15px;
      

      .login-icon-pic {
        margin:auto;
        width: 50%;
        display: flex;
        justify-content: space-around;
        img {
          width: 20%;
        }
      }
    }
    .login-xieyi {
        margin-top: 50%;
        text-align: center;
        font-size: 12px;
        span {
            margin-left: 3px;
        }
      }
      .login-other {
        text-align: center;
        margin-top: 15%;
        color: #699bec;
      }
  }
}
</style>
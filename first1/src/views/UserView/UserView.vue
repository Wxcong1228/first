<template>
  <div class="shu">
    <div class="chahua">
      <img src="../../res/mipmap-xxhdpi-v4/chahuatu.png" alt="" />
    </div>
    <div class="box1">
      <div class="box1-left" @click="toLogin">
        <div class="left-img">
          <img src="../../res/mipmap-xxhdpi-v4/touxiang.png" alt="" />
        </div>
        <div class="left-txt">登录</div>
      </div>
      <div class="box1-right">
        <div class="right-img">
          <img src="../../res/mipmap-xxhdpi-v4/wodejifen.png" alt="" />
        </div>
        <div class="right-txt"><span class="sp">&nbsp;0&nbsp;</span>积分</div>
      </div>
    </div>
    <!-- <div class="box2">
      <van-share-sheet v-model="showShare" :options="options" cancel-text="分享"/>
    </div> -->
    <div class="box2">
      <div class="box2-one aa">
        <div class="box2-one-l">
          <img class="box2-img"  src="../../res/mipmap-xxhdpi-v4/wodexiaoxi.png" alt="">
          <span class="text">我的消息</span>
        </div>
        <div class="box2-one-r">
          <img class="jiantou" src="../../res/mipmap-xxhdpi-v4/jiantou.png" alt="">
        </div>
      </div>
      <div class="box2-two aa">
        <div class="box2-one-l">
          <img class="box2-img" src="../../res/mipmap-xxhdpi-v4/tuijian.png" alt="">
          <span class="text">分享链接</span>
        </div>
        <div class="box2-one-r">
          <img class="jiantou" src="../../res/mipmap-xxhdpi-v4/jiantou.png" alt="">
        </div>
      </div>
      <div class="box2-three aa">
        <div class="box2-one-l">
          <img  class="box2-img" src="../../res/mipmap-xxhdpi-v4/shezhi.png" alt="">
          <span class="text">我的设置</span>
        </div>
        <div class="box2-one-r">
          <img class="jiantou" src="../../res/mipmap-xxhdpi-v4/jiantou.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

  <script>
export default {
  data() {
    return {
      
    };
   
  },
  methods: {
    toLogin() {
      this.$router.push({
        path:'/login',
      })
    }
  }
};
</script>

  <style lang="scss" scoped>
.shu {
  background-color: #f8f8f8;
}
.box1 {
  display: flex;
  width: 100vw;
  background-color: white;
}
.box1-left {
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 5px 20px 40px 0px;
}
.left-img {
  width: 50px;
  height: 50px;
  border: 1px solid transparent;

  &.img {
    width: 100%;
    height: 100%;
  }
  &.left-txt {
    margin-right: 50%;
  }
}
.box1-right {
  width: 60%;
  display: flex;
  align-items: flex-end;
  padding: 80px 0 10px 45px;
}
.right-img {
  width: 15px;
  height: 15px;
}
.right-txt {
  font-size: 12px;
  color: #bababa;
}
.sp {
  font-size: 13px;
  color: #ff7d67;
}
.box2 {
  width: 100%;
  margin-top: 10px;
  // display: flex;
}
.aa {
  width: 100%;
  height: 50px;
  background-color: #fff;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
}
.box2-one-l {
  width: 30%;
  height: 50px;
  display: flex;
  line-height: 50px;
  text-align: center;
  // margin-left: 10px;
  padding-left: 10px;
  // padding-top: 10px;
}
.box2-img {
  width: 30%;
  height: 60%;
  line-height: 50px;
  margin-top: 8px;
}
.box2-one-r {
  width: 10%;
  height: 50px;
  line-height: 50px;
  text-align: center;
  // float: right;
}
.jiantou {
  width: 30%;
  height: 15px;
}
.box2-one-r::after {
  content: '';
  display: block;
  clear: both;
}
</style>
  
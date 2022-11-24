<template>
    <div class="shu">
      <div class="navBer1">
        <van-tabs
        class="home-tabs-bar"
        v-model="activeName"
        type="none"
        background="#ff7b65"
      >
        <van-tab title="收藏" name="hot">
          <div class="imgbox"><img src="../../res/mipmap-xxhdpi-v4/meiyoushoucang.png" alt=""></div>
        </van-tab>
        <van-tab title="历史" name="week">
          <div class="imgbox"><img src="../../res/mipmap-xxhdpi-v4/lishiweikong.png" alt=""></div>
        </van-tab>
      </van-tabs>
    </div>
    </div>
  </template>

  <script>
  export default {
    data() {
      return {
        activeName:1
      }
    }
  }
  </script>

  <style lang="scss">
  .navBer1 {
    width: 100vw;
    height: 50px;
    position: relative;
    background-color: #ff7b65;
  }
  .Collection {
    position: absolute;
    top: 10px;
    
  }
  .imgbox {
    width: 200px;
    height: 200px;
    margin:100px auto;
  }
  

  </style>
  
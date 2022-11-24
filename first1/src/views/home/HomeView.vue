<template>
  <div class="home">
    <div class="navBar">
      <van-tabs
        class="home-tabs-bar"
        v-model="activeName"
        type="none"
        background="#ff7b65"
        color="#ffbdb2"
      >
        <van-tab title="热门" name="hot">
          <HotView :show="show"></HotView>
        </van-tab>
        <van-tab title="周更" name="week">
          <week-view></week-view>
        </van-tab>
       
      </van-tabs>
      <div class="search-link" @click="toSearchPage"></div>
    </div>
  </div>
</template>

<script>
import HotView from "./HotView.vue";
import WeekView from './WeekView.vue';
export default {
  name: "HomeView",
  props:{
    show:Boolean,
    // require:true
  },
  data() {
    return {
      activeName: "hot",
    };
  },
  methods:{
    toSearchPage(){
      this.$router.push({
        path:'/search',
      })
    }
  },
  components: { HotView, WeekView },
};
</script>

<style lang="scss">
.home {
  position: fixed;
  width: 100vw;
  height: calc(100% - 50px);
  overflow: hidden;
  // border: 1px solid black;
}

.navBar {
  display: flex;
  align-items: center;
  position: relative;
}
.van-tabs.home-tabs-bar {
  position: fixed;
  width: 100vw;
  top: 0;
}
.van-tabs__nav {
  width: 100vw;
  height: 56px;
}
.van-tab {
  color: black;
}
.van-tab--active {
  color: #fff;
}
.van-tabs__content {
    width: 100vw;
    height: 570px;
    overflow: auto;
}
.search-link {
  position: absolute;
  right: 3vw;
  top: 18px;
  margin: auto 0;
  width: 16px;
  height: 16px;
  background-image: url(../../res/mipmap-xxhdpi-v4/sosuobaise.png);
  background-position: center center;
  background-size: contain;
  z-index: 2;
}

</style>
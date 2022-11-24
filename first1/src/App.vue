<template>
  <div id="app">
    <nav class="nav" v-show="$route.meta.istrue">
      <router-link class="tab-bar-item icon-home" to="/">
        <div class="nav-text">首页</div>
      </router-link>
      <router-link class="tab-bar-item icon-shuJia" to="/shuJia">
        <div class="nav-text">书架</div>
      </router-link>
      <router-link class="tab-bar-item icon-user" to="/user">
        <div class="nav-text">我的</div>
      </router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      show:true
    }
  }
}
</script>

<style lang="scss">
  *{
    padding: 0;
    margin: 0;
    list-style: none;
  }
.nav {
  width: 100vw;
  height: 50px;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: white;
  display: flex;
  z-index: 9;
}
.tab-bar-item {
  flex: 1;
  line-height: 50px;
  font-size: 12px;
  background-size: 22px 22px;
  background-repeat: no-repeat;
  background-position: center 5px;
.nav-text {
  text-align: center;
  margin-top: 13px;
  color: black;
 
}
  &.router-link-exact-active {
    background-color: none;
    &.icon-home {
    background-image: url(../src/res/mipmap-xxhdpi-v4/shouye1.png);
  }
  &.icon-shuJia {
    background-image: url(../src/res/mipmap-xxhdpi-v4/shujia1.png);
  }
  &.icon-user {
    background-image: url(../src/res/mipmap-xxhdpi-v4/wode1.png);
  }
  }
}
  .icon-home {
    background-image: url(../src/res/mipmap-xxhdpi-v4/shouye.png);
  }
  .icon-shuJia {
    background-image: url(../src/res/mipmap-xxhdpi-v4/shujia.png);
  }
  .icon-user {
    background-image: url(../src/res/mipmap-xxhdpi-v4/wode.png);
  }
  //
#app {
  width: 100vw;
  // position: relative;
  // height: 100vw;
}
</style>

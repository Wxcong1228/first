<template>
  <div class="loading-bar" ref="loadingBar">
    <template v-if="isLoading">
      <van-loading size="24px">加载中...</van-loading>
    </template>
    <template v-if="!isLoading">
      <span></span>
    </template>
  </div>
</template>

<script>
export default {
    props:{
        isLoading:Boolean
    }
};
</script>

<style lang="scss" scoped>
.loading-bar {
  width: 100vw;
  height: 16px;
  display: flex;
  justify-content: center;
  align-items: center;

  .text {
    padding-left: 10px;
    color: #bbb;
  }
}
</style>
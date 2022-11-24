<template>
  <div class="board-item" @click="jtci(itemData.comic_id)" :data-id="itemData.comic_id" :item-type="itemType" :item-index="index">
    <van-image :src="itemData.pic" lazy-load>
      <template v-slot:loading>
        <img src="../res/mipmap-xxhdpi-v4/placeholdershu.png">
      </template>
    </van-image>
    <div class="title">{{ itemData.comic_title }}</div>
    <div class="sub-title">
      <span>
        {{ itemData.comic_sub_title }}
      </span>
    </div>
  </div>
</template>

<script>
import {jtci} from '../../utils/jumpToComicInfo'
export default {
  props: {
    itemData: {
      type: Object,
    },
    itemType: {
      type: Number,
    },
    index: Number,
  },
  methods:{
    jtci
  }
};
</script>

<style lang="scss" scoped>
.board-item {
  width: calc(100vw / 3);
  padding: 0 4%;
  box-sizing: border-box;
  font-size: 14px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;

  &[item-type="4"],
  &[item-type="7"] {
    width: 50vw;
  }

  &[item-type="6"][item-index="0"] {
    width: 100vw;
    padding: 0 12%;
  }

  
  &>.van-image{
    border-radius: 10px;
    overflow: hidden;
    
    img {
      width: 100%;
      height: auto;
      flex-grow: 1;
      max-height: 200px;
    }
  }

  .title {
    padding: 8px 0;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .sub-title {
    width: 100%;
    color: #aaa;

    span {
      display: inline-block;
      width: 100%;
      font-size: 12px;
      display: inline-block;
      transform-origin: left top;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }
}
</style>
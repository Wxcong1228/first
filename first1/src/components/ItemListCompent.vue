<template>
  <div class="listBox" :item-type="itemType" :item-index="index" 
  @click="jtci(newData.comic_id)">
    <van-image class="pic" :src="newData.pic" lazy-load>
      <template v-slot:loading>
        <img src="../res/mipmap-xxhdpi-v4/placeholdershu.png" alt="" />
      </template>
    </van-image>
    <div class="listBox-title">{{ newData.comic_title }}</div>
    <div class="listBox-introduce">{{ newData.comic_sub_title }}</div>
  </div>
</template>

<script>
import {jtci} from "../../utils/jumpToComicInfo";
export default {
  props: {
    newData: {
      type: Object,
    },
    itemType: {
      type: Number,
    },
    index: Number,
  },
  methods:{
    // toReading(){
    //   this.$router.push({
    //     path:'/reading',
    //   })
    // },
    jtci  
  }
};
</script>

<style lang="scss">
.listBox {
  width: 30vw;
  height: 180px;
  margin: 10px 5px 0 7px;
  box-sizing: border-box;
  font-size: 14px;
  margin-bottom: 20px;
  float: left;
  // border: 1px solid black;

  flex-direction: column;
  &[item-type="4"],
  &[item-type="7"] {
    width: 46vw;
  }

  &[item-type="6"][item-index="0"] {
    width: 100vw;
    padding: 0 12%;
  }
}
.pic {
  width: 100%;
  height: 70%;
  overflow: hidden;
  border-radius: 10px;
}
.listBox-title {
  margin-top: 5px;
  font-weight: 550;
  font-size: 13px;
  color: #646464;
}
.listBox-introduce {
  width: 100%;
  height: 12px;
  margin-top: 5px;
  font-size: 12px;
  color: #aaaaaa;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
</style>
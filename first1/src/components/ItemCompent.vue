<template>
  <div class="ItemList">
    <div class="ItemList-top">
      <div class="title">
        <img src="../res/mipmap-xxhdpi-v4/zhangshi.png" alt="" />
        <span class="text1">{{ ItemData.title }}</span>
        <div class="Change-btn" @click="switchBoardItemContent(ItemData.bid)">换一批</div>
      </div>
    </div>

    <div class="list">
      <ItemListCompent
        v-for="(item, i) in ItemData.comic_info_board"
        :newData="item"
        :key="item.comic_id"
        :itemType="ItemData.item_type"
        :index="i"
      ></ItemListCompent>
    </div>
    <div class="footer" @click="toCheck(ItemData.bid)"><span>查看更多</span></div>
  </div>
</template>

<script>
import ItemListCompent from "./ItemListCompent.vue";
export default {
  props: {
    ItemData: {
      type: Object,
      require: true,
    },
  },
  methods: {
    switchBoardItemContent(val){
      this.$emit('switchBoardItemContent',val)
    },
    toCheck(val) {
      this.$router.push({
        path:'/check',
        query: {
          bid: val,
        },
      })
    },
  },
  components: { ItemListCompent },
};
</script>

<style lang="scss">
.ItemList {
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-content: center;

  .ItemList-top {
    width: 100vw;
    position: relative;
  }
}
.text1 {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  text-align: center;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
}
img {
  width: 100%;
  height: auto;
}
.Change-btn {
  width: 50px;
  height: 30px;
  font-size: 12px;
  position: absolute;
  top: 40%;
  right: 2%;
}
.footer {
    width: 100vw;
    height: 60px;
    line-height: 60px;
    text-align: center;
    color: #7b7b7b;
}
</style>
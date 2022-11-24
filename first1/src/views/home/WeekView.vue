<template>
  <div id="week-page">
    <van-tabs class="week-tab" v-model="active" animated background="#eee" color="black">
      <van-tab v-for="index in Text" :title="'周' + index" :key="index+'a'">
        <div class="week-bigbox">
        <div class="Week-Content" v-for="item in WeekItem" :key="item.id">
          <div class="week-title" >
            <span>{{item.comic_title}}</span>
            </div>
          <div class="week-pic"><img :src="item.pic" alt=""></div>
          <div class="week-update">
            <div class="week-text">
              更新至{{item.section_title}}</div>
            <div class="count">
              <div class="week-img"><img src="../../res/mipmap-xxhdpi-v4/detaildianzanhou.png" alt=""></div>
              <div class="like-count">{{item.like_count}}</div>
            </div>
          </div>
        </div>
      </div>
      </van-tab>
    </van-tabs>
   
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      Text: ["一", "二", "三", "四", "五", "六", "日"],
      WeekItem: [],
    };
  },
  created() {
    this.WeekDate();
  },
  methods: {
    async WeekDate() {
      await this.$http
        .get("/api/IndexReal/getDailyComicInfoNew")
        .then((res) => {
          this.WeekItem = res.data.comic_weekly;
          console.log(this.WeekItem);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.week-page {
  position: relative;
}
.week-tab {
  position: fixed;
  top: 56px;
  left: 0;
  // line-height: 56px;
  // text-align: center;
}
.week-title {
  width: 100vw;
  height: 30px;
  line-height: 30px;
  font-size: 13px;
  // 
  span {
    padding: 10px 0 10px 10px;
  }
}
.week-bigbox {
  width: 100vw;
  height: 515px;
  overflow: auto;
}

.week-update {
  width: 100vw;
  height: 30px;
  display: flex;
  font-size: 13px;
  color: #ddd;
  // 
  justify-content:space-between;
  
  .week-text {
    padding: 10px 0 10px 10px;
  }
}


.count {
  width: 50px;
  height: 30px;
  display: flex;
}
.week-img {
  width: 13px;
  height: 13px;
}
.like-count {
  margin-left: 3px;
}
img{
  width: 100%;
  height: 100%;
}
::v-deep .van-tabs__nav--line.van-tabs__nav--complete {
    /* padding-right: 8px; */
     padding-left: none;
     box-sizing: border-box;
}
.van-tabs__nav--line{
  padding-bottom: none;
}
::v-deep .van-tabs__line {
    position: absolute;
    bottom: 15px;
    left: 0;
    z-index: 1;
    width: 40px;
    height: 1px;
    background-color: red;
    border-radius: 3px;
}
::v-deep element.style {
    background-color: red !important; 
    transform: translateX(86px) translateX(-50%);
    transition-duration: 0.3s;
}
</style>
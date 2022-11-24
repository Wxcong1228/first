<template>
  <div class="reading-start">
    <transition name="move1">
      <div class="" @click="toClick" v-if="isShow">
        <div class="reading-title">
          <div class="reading-title-icon" @click="onClickFanHui">
            <img src="@/res/mipmap-xxhdpi-v4/fanhui_details.png" alt="" />
          </div>
          <div class="reading-title-sectiontitle">{{ sectiontitle }}</div>
          <div class="reading-title-fenxiang">
            <img src="@/res/mipmap-xxhdpi-v4/fenxiang.png" alt="" />
          </div>
        </div>
      </div>
    </transition>
    <div
      class="reading-content-img"
      @click="toClick"
      v-for="i in comicImages"
      :key="i"
    >
      <img :src="i" alt="" />
    </div>
    <transition name="move">
      <div class="reading-select" v-if="isShow">
        <img src="../../res/mipmap-xxhdpi-v4/diban.png" alt="" />
        <div class="reading-s" @click="toChangeContent(previd, '已经是第一章了')">
          上一话
        </div>
        <div class="reading-icon" @click="toClickMulu">
          <img src="@/res/mipmap-xxhdpi-v4/muli.png" alt="" />
        </div>
        <div
          class="reading-x"
          @click="toChangeContent(nextid, '已经是最后一章了')"
        >
          下一话
        </div>
      </div>
    </transition>
    <van-popup
      v-model="showMulu"
      position="right"
      background="#000"
      :style="{ width: '55%', height: '100%' }"
    >
      <pop-up-mu-lu
        @changeSid="toChangeContent"
        :arr2="arr2"
        :arr="arr"
        :muluData="directoryData"
        :sectiontitle="sectiontitle"
      ></pop-up-mu-lu>
    </van-popup>
  </div>
</template>

<script>
import PopUpMuLu from "./PopUpMuLu.vue";
// import { ref } from 'vue';
import { Toast } from "vant";
export default {
  data() {
    return {
      sectiontitle: "",
      comicid: this.$route.query.comicid,
      sectionid: this.$route.query.sectionid,
      arr: this.$route.query.arr,
      arr2: this.$route.query.arr2,
      comicImages: [],
      showTool: true,
      title: "",
      previd: 0,
      nextid: 0,
      showMulu: false,
      directoryData: {
        title: "",
        sid: this.$route.query.sectionid,
        comic_status: "",
        comic_section_detail: [],
      },
      isShow: true,
    };
  },
  created() {
    this.getContentData();
  },
  methods: {
    toChangeContent(sid, text) {
      if (sid == 0) {
        Toast({
          message: text,
          position: "bottom",
        });

        return;
      }

      this.$router.replace({
        query: {
          comicid: this.$route.query.comicid,
          sectionid: sid,
        },
      });

      this.directoryData.sid = sid;
      this.getContentData(sid);
    },

    async getDirectory() {
      await this.$http
        .get("/api/ComicReal/getComicDetails", {
          comic_id: this.comicid,
        })
        .then((data) => {
          this.directoryData.comic_status = data.data.comic_info.comic_status;
          this.directoryData.comic_section_detail =
            data.data.comic_section_detail;
        });
    },

    getContentData(sid) {
      this.$http
        .get("/api/ComicRead/getComicSections", {
          comicid: this.comicid,
          sectionid: sid || this.sectionid,
        })
        .then((data) => {
          this.comicImages = data.data.images;
          this.directoryData.title = data.data.comictitle;
          this.title = data.data.comictitle;
          this.previd = data.data.previd;
          this.nextid = data.data.nextid;
          this.sectiontitle = data.data.sectiontitle;
          console.log('title==>',this.directoryData.title);
          console.log("arr", this.arr);
          console.log(this.sectiontitle);
          console.log(this.title);
          console.log('data==>',data);
        });
    },
    toClick() {
      this.isShow = !this.isShow;
    },
    onClickFanHui() {
      this.$router.back();
    },
    toClickNext(id) {
      this.sectionid = id;
    },
    toClickMulu() {
      this.showMulu = !this.showMulu;
    },
  },
  components: { PopUpMuLu },
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 0;
}
img {
  display: block;
  width: 100%;
  overflow: hidden;
  border-bottom: 0;
  // vertical-align:bottom;
}

.reading-start {
  position: relative;
  .reading-title {
    position: fixed;
    width: 100%;
    height: 50px;
    top: 0;
    left: 0;
    background-color: #2f2f2f;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    // background-color: white;
    // z-index: 9;
    .reading-title-icon {
      position: absolute;
      width: 5%;
      top: 15px;
      left: 15px;
      bottom: 0;
    }
    .reading-title-sectiontitle {
      position: absolute;
      top: 16px;
      left: 45%;
      font-size: 14px;
      margin: auto;
    }
    .reading-title-fenxiang {
      position: absolute;
      width: 4%;
      right: 15px;
      top: 14px;
      color: #ddd;
    }
  }
}
.reading-select {
  position: relative;
  position: fixed;
  bottom: 0;
  left: 0;

  .reading-s {
    width: 50px;
    position: absolute;
    width: auto;
    top: 35px;
    left: 15%;
    font-size: 13px;
    color: #dedede;
  }
  .reading-icon {
    position: absolute;
    width: 20px;
    top: 21px;
    left: 0;
    right: 0;
    margin: auto;
  }
  .reading-x {
    width: 50px;
    position: absolute;
    top: 35px;
    right: 15%;
    font-size: 13px;
    color: #dedede;
  }
}
.reading-mulu-list {
  width: 60%;
  height: 100%;
  position: absolute;
  right: 0;
  top: 0;
  background-color: #2f2f2f;
}

.move-enter,
.move-leave-to {
  transform: translateY(73px);
}

.move-enter-active,
.move-leave-active {
  transition: all 0.4s linear;
}

.move-enter-to,
.move-leave {
  transform: translateY(0);
}

.move1-enter,
.move1-leave-to {
  transform: translateY(-50px);
}

.move1-enter-active,
.move1-leave-active {
  transition: all 0.4s linear;
}

.move1-enter-to,
.move1-leave {
  transform: translateY(0);
}

.van-popup {
  background-color: #2f2f2f;
}
</style>
<!-- <template>
  <div class="classify">
    <van-nav-bar
      class="nav-bar"
      title="分类"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="classify-title">
      <div
        class="classify-tab"
        v-for="item in classifyDate.comic_cat"
        :class="{ active: active == item.cat_id }"
        :key="item.cat_id"
        @click="changeCatid(item.cat_id)"
      >
        <div class="classify-tab-title">{{ item.cat_name }}</div>
      </div>
    </div>
    <ClassifyItemView
      :classifyComic="classifyComic"
      v-if="updata"
      :isLoading="isLoading"
      @srollToBottom="contentScroll"
      :key="random"
    ></ClassifyItemView>
  </div>
</template>

<script>
import { Toast } from "vant";

import ClassifyItemView from "./ClassifyItemView.vue";
export default {
  setup() {
    const onClickLeft = () => history.back();
    const onClickRight = () => Toast("按钮");
    return {
      onClickLeft,
      onClickRight,
    };
  },
  data() {
    return {
      classifyDate: {},
      classifyComic: [],
      catid: 0,
      active: 0,
      pn: 1,
      updata: true,
      isLoading: true,
    };
  },
  created() {
    this.getClassifyDate();
  },
  methods: {
    async getClassifyDate() {
      await this.$http
        .get("/api/IndexReal/getCatComics", {
          catid: this.catid,
          pn: this.pn,
        })
        .then((res) => {
          this.classifyDate = res.data;
          this.classifyComic = res.data.comic_info;
          if (res) {
            this.updata = true;
            console.log(this.updata);
          }
          console.log("classifyDate==>", this.classifyDate);
          console.log("classifyComic==>", this.classifyComic);
        });
    },
    changeCatid(val) {
      this.pn = 1;
      this.updata = false;
      console.log(this.updata);
      this.catid = val;
      this.getClassifyData();
      this.activeTab = val;
      this.isLoading = true;
    },
    // onClickLeft() {
    //   this.$router.back();
    // },
    async contentScroll(isSrollOnBottom) {
      console.log(isSrollOnBottom);
      if (isSrollOnBottom) {
        this.pn++;
        await this.$http
          .get("/api/IndexReal/getCatComics", {
            catid: this.catid,
            pn: this.pn,
          })
          .then((response) => {
            if (response.data.code == 404) {
              this.isLoading = false;
            } else {
              this.comicsData.push(...response.data.comic_info);
            }
          })
          .catch(function (error) {
            // 处理错误情况
            console.log(error);
          });
      }
    },
  },
  computed: {
    random() {
      return "a" + String(Math.floor(Math.random() * 100));
    },
  },
  components: { ClassifyItemView },
};
</script>

<style lang="scss">
.classify-title {
  width: 100vw;
  // height: 40px;
  display: flex;
  align-items: center;
  // padding: 5px;
  justify-content: space-between;
}
.classify {
  width: 100vw;
  height: 100%;
  background-color: #fff;
}
.classify-tab-title {
  width: 12.5vw;
  font-size: 14px;
  line-height: 30px;
  text-align: center;
  height: 30px;
}
.active {
  border: 1px solid orange;
  border-radius: 10px;
  background-color: orange;
}
.loading {
  width: 100vw;
  height: 30px;
  text-align: center;
}
</style> -->
<template>
    <div class="classily-page">
      <van-nav-bar
        class="navbar"
        title="分类"
        left-arrow
        @click-left="onClickLeft"
      />
      <div type="none" class="classifyTabs">
        <div
          class="classify-tab"
          v-for="item in classifyData.comic_cat"
          :class="{ 'active-tab': activeTab == item.cat_id }"
          :key="item.cat_id"
          @click="changeCatid(item.cat_id)"
        >
          <span>{{ item.cat_name }}</span>
        </div>
      </div>
      <ClassifyItemView
        :comicsData="comicsData"
        :isLoading="isLoading"
        :key="random"
        v-if="updata"
        @srollToBottom="contentScroll"
      ></ClassifyItemView>
    </div>
  </template>
  
  
  <script>
//   import ClassifyContentView from "./ClassifyContentView.vue";
import ClassifyItemView from "./ClassifyItemView.vue";
  
  export default {
    data() {
      return {
        classifyData: {},
        comicsData:[],
        catid: 0,
        pn: 1,
        activeTab: 0,
        isLoading: true,
        updata: true,
      };
    },
  
    methods: {
      async getClassifyData() {
        await this.$http
          .get("/api/IndexReal/getCatComics", {
            catid: this.catid,
            pn: this.pn,
          })
          .then((response) => {
            console.log(response);
            
            this.classifyData = response.data;
            this.comicsData = response.data.comic_info;
            if (response) {
              this.updata = true;
              console.log(this.updata);
            }
          });
      },
  
      changeCatid(val) {
        this.pn = 1;
        this.updata = false;
        console.log(this.updata);
        this.catid = val;
        this.getClassifyData();
        this.activeTab = val;
        this.isLoading = true;
      },
  
      onClickLeft() {
        this.$router.back();
      },
  
      async contentScroll(isSrollOnBottom) {
  
        console.log(isSrollOnBottom);
        if (isSrollOnBottom) {
          this.pn++;
          await this.$http
            .get(
              "/api/IndexReal/getCatComics",
              {
                catid: this.catid,
                pn: this.pn,
              }
            )
            .then((response) => {
              if (response.data.code == 404) {
                this.isLoading = false;
              } else {
                this.comicsData.push(...response.data.comic_info)
              }
            })
            .catch(function (error) {
              // 处理错误情况
              console.log(error);
            });
        }
      },
    },
  
    computed: {
      random() {
        return "a" + String(Math.floor(Math.random() * 100));
      },
    },
  
    components: {
    // ClassifyContentView,
    ClassifyItemView
},
  
    created() {
      this.getClassifyData();
    },
  };
  </script>
  
  
  <style lang="scss" scoped>
  .classily-page {
    position: fixed;
    width: 100vw;
    height: 100%;
    z-index: 10;
    background-color: #fff;
  
    ::v-deep .navbar {
      height: auto;
      .van-nav-bar__content {
        height: auto;
        line-height: 2;
        font-size: 18px;
  
        .van-nav-bar__title {
          font-size: 18px;
        }
  
        .van-nav-bar__left {
          .van-icon {
            color: #111;
            font-size: 24px;
          }
        }
      }
    }
  
    .classifyTabs {
      margin-top: 20px;
      display: flex;
      justify-content: space-around;
  
      .classify-tab {
        font-size: 15px;
        padding: 0;
        span {
          padding: 2px 8px;
        }
      }
  
      .active-tab {
        span {
          color: #fff;
        //   padding: 2px 8px;
          border-radius: 10px;
          
          background-color: #ff7b65;
        }
      }
    }
  }
  </style>
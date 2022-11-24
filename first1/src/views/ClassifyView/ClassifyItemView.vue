<!-- <template>
    <div class="classify-content" @scroll="contentScroll">
        <div class="class-list" v-for="c in classifyComic" :key="c.comic_id">
            <div class="classify-pic"><img :src="c.pic" alt=""></div>
            <div class="classify-title-t">{{c.comic_title}}</div>
            <div class="classify-introduce">{{c.comic_sub_title}}</div>
        </div>
        <van-loading class="loading" :isLoading="isLoading" size="24px">加载中...</van-loading>
    </div>
    
</template>

<script>
import debounce from "lodash.debounce";
export default {
    props:{
        classifyComic:Array,
        isLoading: Boolean,
    },
    data() {
        return {
            isSrollOnBottom : false
        }
    },
    methods:{
        contentScroll(e) {
      console.log(e.srcElement.scrollHeight , e.srcElement.scrollTop ,
        e.srcElement.offsetHeight);
      if (
        e.srcElement.scrollHeight - e.srcElement.scrollTop <=
        e.srcElement.offsetHeight + 10
      ) {
        this.isSrollOnBottom = true;
      } else {
        this.isSrollOnBottom = false;
      }
      this.$emit("srollToBottom", this.isSrollOnBottom);
    },
    },
    mounted() {
    this.$nextTick(() => {
      this.contentScroll = debounce(this.contentScroll, 300);
    });
  },
}
</script>

<style lang="scss">
.classify-content {
    width: 100vw;
    height: 590px;
    overflow: auto;
    background-color: white;
}
.class-list {
    width: 28vw;
    float: left;
    padding: 10px;
}
.class-list::after {
    content: '';
    clear: both;
    display: block;
}
.classify-pic {
    border-radius: 10px;
    overflow: hidden;
}
.classify-title-t {
    width: 100vw;
    padding: 5px;
    font-size: 14px;
    font-weight: 550;
}
.classify-introduce {
    width: 100px;
    padding: 5px;
    font-size: 12px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}
</style> -->

<template>
    <div class="classify-content" @scroll="contentScroll">
      <BoardItemCompent
        v-for="(item, i) in comicsData"
        :itemData="item"
        :key="item.comic_id"
        :index="i"
      ></BoardItemCompent>
      <LoadingBox :isLoading="isLoading"></LoadingBox>
    </div>
  </template>
  
  <script>
//   import BoardItemCompent from "@/components/BoardItemCompent.vue";
  import LoadingBox from "@/components/LoadingBoxComponent.vue";
  import debounce from "lodash.debounce";
// import ItemListCompent from "@/components/ItemListCompent.vue";
import BoardItemCompent from "@/components/BoardItemCompent.vue";
  export default {
    props: {
      comicsData: Array,
      isLoading: Boolean,
    },
  
    data() {
      return {
        isSrollOnBottom: false,
      };
    },
  
    methods: {
      contentScroll(e) {
        console.log(e.srcElement.scrollHeight , e.srcElement.scrollTop ,
          e.srcElement.offsetHeight);
        if (
          e.srcElement.scrollHeight - e.srcElement.scrollTop <=
          e.srcElement.offsetHeight + 10
        ) {
          this.isSrollOnBottom = true;
        } else {
          this.isSrollOnBottom = false;
        }
        this.$emit("srollToBottom", this.isSrollOnBottom);
      },
    },
    components: {
    // BoardItemCompent,
    LoadingBox,
    // ItemListCompent,
    BoardItemCompent
},
  
    mounted() {
      this.$nextTick(() => {
        this.contentScroll = debounce(this.contentScroll, 300);
      });
    },
  };
  </script>
  
  
  <style lang="scss" scoped>
  .classify-content {
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    overflow: auto;
    height: calc(100vh - 94px);
  }
  </style>
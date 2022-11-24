<template>
    <div class="search">
        <form action="/">
      <van-search
        style="font-size: 12px"
        v-model="searchValue"
        left-icon=""
        shape="round"
        background="#ff7b65"
        show-action
        placeholder="输入漫画名称搜索"
        @cancel="onCancel"
      />
    </form>
    <div class="resou" v-if="isShow">
        <div class="resou-text" v-for="item in hotArr" :key="item.id" @click="toHot(item.title)">{{item.title}}</div>
    </div>
    <div class="search-list" >
      <div class="check-content" v-for="s in searchData" :key="s.comic_id"
      @click="jtci(searchData[0].comic_id)">
        <div class="check-content-left">
            <div class="check-content-pic">
                <img :src="s.pic" alt="">
            </div>
        </div>
        <div class="check-content-right">
            <div class="check-content-title">{{s.comic_title}}</div>
            <div class="check-content-text">{{s.category}}</div>
            <div class="check-content-hot"></div>
        </div>
    </div>
    </div>
    </div>
</template>

<script>
import {jtci} from '../../../utils/jumpToComicInfo'
export default {
  data() {
    return {
      value: '',
      searchValue:'',
      hotArr:[],
      searchData:[],
      isShow:true,
    };
  },
  created() {
    this.getReSouData(),
    this.getSearchData()
  },
  methods: {
    jtci,
   
    onCancel() {
      this.$router.back()
    },
    async getReSouData(){
        await this.$http 
        .get("/api/SearchReal/getHotSearchComics")
        .then((res) => {
            console.log(res);
            this.hotArr = res.data.hot_comics
        })
    },
   async getSearchData(val) {
     await this.$http
      .get("/api/SearchReal/getSearchResults",{
        keyword: val,
      })
      .then((res) => {
        console.log(res);
        this.searchData = res.data.comic_info
        // console.log('a==>',this.searchData)
        console.log('res==>',this.searchData);
        
          // this.isShow = false
      })
    },
    toHot(val){
      this.searchValue = val
      // this.isShow = false
    },
    

  },
  watch:{
    searchValue(val) {
      this.getSearchData(val);
      if(this.searchValue == ''){
          this.isShow = true
        }else {
          this.isShow = false
        
      }
    }
  }
};
</script>

<style lang="scss">
.search {
  width: 100%;
  height: 667px;
  background-color: #fafafa;
}
.resou {
    width: 100%;
    height: 50px;
    display: flex;
    line-height: 40px;
    // border: 1px solid black;
    background-color: #fafafa;
}
.resou-text {
    width: 20vw;
    text-align: center;
    margin-left: 15px;
    font-size: 13px;
    color: #b4b4b4;
    margin-top: 10px;
    border-radius: 20px;
    border: 0.5px solid #ddd;
}
</style>
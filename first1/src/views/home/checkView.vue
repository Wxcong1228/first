<template>
  <div class="check">
    <van-nav-bar 
      :title="checkArr.boardtitle"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="content-big">
    <div class="check-content" v-for="item in checkArr.comic_info
" :key="item.comic_id">
        <div class="check-content-left">
            <div class="check-content-pic">
                <img :src="item.pic" alt="">
            </div>
        </div>
        <div class="check-content-right">
            <div class="check-content-title">{{item.comic_title}}</div>
            <div class="check-content-text">{{item.category}}</div>
            <div class="check-content-hot">
                <img src="../../res/mipmap-xxhdpi-v4/redu.png" alt="">
                <img src="../../res/mipmap-xxhdpi-v4/redu.png" alt="">
                <img src="../../res/mipmap-xxhdpi-v4/redu.png" alt="">
            </div>
        </div>
        <div class="content-shoucang">
        <img src="../../res/mipmap-xxhdpi-v4/shoucang.png" alt="">
    </div>
    </div>
    
</div>
  </div>
</template>

<script>
// import { Toast } from 'vant';
export default {
    data(){
        return {
            bid: this.$route.query.bid,
            checkArr:{},
            
        }
    },
    created() {
        this.getCheckData()
    },
    methods: {
    onClickLeft() {
        this.$router.back();
    },
   async getCheckData() {
      await  this.$http
        .get("/api/IndexReal/getMoreComics",{
            bid: this.bid
        })
        .then((res) => {
            this.checkArr = res.data
            console.log(this.checkArr);
        })
    }
  },
};
</script>

<style lang="scss">
.check {
  width: 100%;
  height: 667px;
  background-color: white;
}
.content-big{
    width: 100%;
    height: 621px;
    overflow: auto;
    

    
}
.check-content {
    position: relative;
    width: 100%;
    // height: 617px;
    display: flex;
    // padding: 10px;
    .content-shoucang {
        position: absolute;
        width: 12%;
        top: 44%;
        right: 0;
        bottom: 0;
    }
    .check-content-hot{
        display: flex;
        width: 15%;
        margin-top: 30px;
    }
}
.check-content-left {
    width: 25%;
    border-radius: 10px;
    overflow: hidden;
    margin: 10px 0 0 10px;
}
.check-content-right {
    padding: 20px 0 0 15px;
}
.check-content-title {
    font-size: 14px;
    font-weight: 550;
}
.check-content-text {
    padding: 27px 0 0 0;
    font-size: 13px;
    color: #808080;
}
</style>
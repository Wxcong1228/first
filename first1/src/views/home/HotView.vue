<template>
  <div class="home1">
    <div class="lbt1">
      <div class="bg"></div>
      <div class="box33">
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
          <van-swipe-item
            ><img class="lbt-pic"
              src="http:\/\/res.shenmantang.com\/Upload\/Cartoon\/2019\/07\/03\/5d1c0bbc2828d.jpg"
              alt=""
          /></van-swipe-item>
          <van-swipe-item
            ><img class="lbt-pic"
              src="http:\/\/res.shenmantang.com\/Upload\/Cartoon\/2019\/08\/28\/5d66444da6175.jpg"
              alt=""
          /></van-swipe-item>
          <van-swipe-item
            ><img class="lbt-pic"
              src="http:\/\/res.shenmantang.com\/Upload\/Cartoon\/2022\/07\/15\/62d107f709430.jpg"
              alt=""
          /></van-swipe-item>
          <van-swipe-item
            ><img class="lbt-pic"
              src="http:\/\/res.shenmantang.com\/Upload\/Cartoon\/2019\/02\/19\/5c6b7d00db184.jpg"
              alt=""
          /></van-swipe-item>
          <van-swipe-item
            ><img class="lbt-pic"
              src="http:\/\/res.shenmantang.com\/Upload\/Cartoon\/2019\/08\/28\/5d66439139af1.jpg"
              alt=""
          /></van-swipe-item>
          <van-swipe-item
            ><img class="lbt-pic"
              src="http:\/\/res.ad.jamojoy.com\/Uploads\/advs\/img\/2022-09-28\/6333e5eebbcc7.jpg"
              alt=""
          /></van-swipe-item>
        </van-swipe>
      </div>
    </div>
    <div class="content">
  
      <van-grid class="item-list">
          <van-grid-item icon="./icons/fenlei.png" :show="show" text="分类" to="/classify"/>
          <van-grid-item icon="./icons/xinzuobang.png" text="新作榜" to="/newWork"/>
          <van-grid-item icon="./icons/zhoubang.png" text="周榜" to="/weekBang"/>
          <van-grid-item icon="./icons/wanjiebang.png" text="完结榜" to="/endBang"/>
      </van-grid>

    </div>

    <div class="ItemList">
        <ItemCompent v-for="item in ItemData" :key="item.bid" :ItemData="item"
        @switchBoardItemContent="ChangeDate"></ItemCompent>
        <div class="end"><span>已经到底了哦~</span></div>
        <!-- <div class="a11"></div> -->
    </div>
  </div>
</template>

<script>
import ItemCompent from '@/components/ItemCompent.vue';
export default {
    created() {
        this.getDate();
    },
    // props:[show],
    props:{
    show:Boolean,
    // require:true
  },
    data() {
        return {
            ItemData:[],
            // 定义一个空对象，用来存储点击换一批时刷新的数据
            ItemArr:{}
        }
    },
    components: { 
        ItemCompent 
    },
   
    methods: {
       async getDate() {
           await this.$axios
            .get("/api/IndexReal/getHotsNewForandroidAdv")
            .then((res) => {
                this.ItemData = res.data.board
                console.log(this.ItemData);
            })
        },
         ChangeDate(val) {
            console.log(val);
             this.$http
            .get("/api/IndexReal/changeComic",{
                bid : val
            })
            .then((res) => {
              // 对ItemData数组进行遍历
                this.ItemData.forEach((item,index) => {
                  // 判断数组元素中的bid是否与传入的val相等
                    if(item.bid == val) {
                      // 定义一个数组存储当前的ItemData。
                        let arr = this.ItemData
                        this.ItemArr = res.data.board[0]
                        arr[index] = this.ItemArr
                        this.ItemData = [...arr]
                    }
                })
            })
        }
    }
}
</script>
<style lang="scss">
.home1 {
    position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: calc(100vh - 50px);
}
.box33 {
//   position: absolute;
  width: 80vw;
  height: 150px;
  overflow: hidden;
  border-radius: 10px;
  margin: auto;
  top: 0;
  left: 10%;
}
.lbt-pic {
  width: 100%;
  height: 100%;
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}

.lbt1 {
    // margin-top: 50px;
  position: relative;
  width: 100vw;
  height: 150px;
}
.bg {
    background-color: #ff7b65;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: -1;
    height: 50px;
}
.content {
  width: 100vw;
  height: 120px;
//   background-color: #39a9ed;
  background-size: 100% 100%;
//   background-repeat: no-repeat;
//   background-position: center center;
  background-image: url(../../res/mipmap-xxhdpi-v4/yinyingbg.png);
}
// .item-list .van-grid {
//   background-image: url(../../res/mipmap-xxhdpi-v4/yinyingbg.png);
// }
.item-list.van-grid {
    width: 100vw;
    background-image: url(../../res/mipmap-xxhdpi-v4/yinyingbg.png);
    background-position: 0 0;
    background-size: 100% auto;
    background-repeat: no-repeat;
    background-color: transparent;

    .van-grid-item .van-grid-item__content {
      background-color: transparent;
    }
  }
.item {
    width: 100vw;
    height: 130px;
    display: flex;
}
.a {
    width: 25vw;
    height: 120px;
    // border: 1px solid black;
}
.imgBox {
     width: 25vw;
     height: 70px;
     background-size: 40px 40px;
     background-repeat: no-repeat;
     background-position: center center;
    //  border: 1px solid black;
     
}
.img-fenLei {
    background-image: url(../../res/mipmap-xxhdpi-v4/fenlei.png);
}
.img-NewWork {
    background-image: url(../../res/mipmap-xxhdpi-v4/xinzuobang.png);
}
.img-Week {
    background-image: url(../../res/mipmap-xxhdpi-v4/zhoubang.png);
}
.img-End {
    background-image: url(../../res/mipmap-xxhdpi-v4/wanjiebang.png);
}
.text {
    width: 25vw;
    height: 36px;
    color: #918989;
    text-align: center;
}
.ItemList {
    width: 100vw;
    height: auto;
}
.end {
    width: 100vw;
    height: 25px;
    line-height: 25px;
    text-align: center;
    font-size: 12px;
    color: #ddd;
    background-color: #f8f8f8;
}
.a11 {
    width: 100vw;
    height: 60px;
}
</style>
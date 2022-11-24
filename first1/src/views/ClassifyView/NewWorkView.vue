<template>
    <div class="newWork">
      <van-nav-bar
        title="排行榜"
        left-text=""
        left-arrow
        @click-left="onClickLeft"
      />
      <van-tabs v-model="activeName"  title-active-color="red" animated>
        <van-tab title="新作榜" name="a" >
            <div class="newWork-item" @click="jtci(n.comic_id)" v-for="( n,i) in newWorkArr" :key="n.comic_id">
                <div class="newWork-item-left">
                    <div class="newWork-item-left-pic">
                        <img class="item-left-img" :src="n.pic" alt="">
                    </div>
                </div>
                <div class="newWork-item-right">
                    <div class="newWork-item-right-title">{{n.comic_title}}</div>
                    <div class="newWork-item-right-leiXing">{{n.category}}</div>
                    <div class="newWork-item-right-hot">
                        <img class="hot-img" src="../../res/mipmap-xxhdpi-v4/redu.png" alt="">
                        <img class="hot-img" src="../../res/mipmap-xxhdpi-v4/redu.png" alt="">
                        <img class="hot-img" src="../../res/mipmap-xxhdpi-v4/redu.png" alt="">
                        <img class="hot-img" src="../../res/mipmap-xxhdpi-v4/redu.png" alt="">
                    </div>
                </div>
                <div class="list-box">
                    <span>No.{{i+1}}</span>
                </div>
            </div>
        
        </van-tab>
        <van-tab title="周榜" name="b">
            <div class="newWork-item" v-for="(e,i) in endArr" @click="jtci(e.comic_id)"  :key="e.comic_id">
                <div class="newWork-item-left">
                    <div class="newWork-item-left-pic">
                        <img class="item-left-img" :src="e.pic" alt="">
                    </div>
                </div>
                <div class="newWork-item-right">
                    <div class="newWork-item-right-title">{{e.comic_title}}</div>
                    <div class="newWork-item-right-leiXing">{{e.category}}</div>
                    <div class="newWork-item-right-hot">
                        <img class="hot-img" src="../../res/mipmap-xxhdpi-v4/redu.png" alt="">
                        <img class="hot-img" src="../../res/mipmap-xxhdpi-v4/redu.png" alt="">
                        <img class="hot-img" src="../../res/mipmap-xxhdpi-v4/redu.png" alt="">
                    </div>
                </div>
                <div class="list-box">
                    <span>No.{{i+1}}</span>
                </div>
            </div>
        </van-tab>
        <van-tab title="完结榜" name="c">
            <div class="newWork-item" v-for="(e,i) in endArr" @click="jtci(e.comic_id)" :key="e.comic_id" >
                <div class="newWork-item-left">
                    <div class="newWork-item-left-pic">
                        <img class="item-left-img" :src="e.pic" alt="">
                    </div>
                </div>
                <div class="newWork-item-right">
                    <div class="newWork-item-right-title">{{e.comic_title}}</div>
                    <div class="newWork-item-right-leiXing">{{e.category}}</div>
                    <div class="newWork-item-right-hot">
                        <img class="hot-img" src="../../res/mipmap-xxhdpi-v4/redu.png" alt="">
                        <img class="hot-img" src="../../res/mipmap-xxhdpi-v4/redu.png" alt="">
                        <img class="hot-img" src="../../res/mipmap-xxhdpi-v4/redu.png" alt="">
                        <img class="hot-img" src="../../res/mipmap-xxhdpi-v4/redu.png" alt="">
                        <img class="hot-img" src="../../res/mipmap-xxhdpi-v4/redu.png" alt="">
                    </div>
                </div>
                <div class="list-box">
                    <span>No.{{i+1}}</span>
                </div>
            </div>
        </van-tab>
        </van-tabs>
    </div>
  </template>
  
  <script>
  import {jtci} from '../../../utils/jumpToComicInfo'
  import { Toast } from 'vant';
  export default {
      setup() {
      const onClickLeft = () => history.back();
      const onClickRight = () => Toast('按钮');
      return {
        onClickLeft,
        onClickRight,
      };
    },
    data() {
        return {
            newWorkArr:[],
            endArr:[],
            activeName:0,
            a:0
        }
    },
    created() {
        this.getWeekDate()
        this.getEndDate()
    },
    methods: {
        jtci,
        getWeekDate(){
            this.$http
            .get("/api/ComicReal/getRankComics")
            .then((res)=>{
                this.newWorkArr = res.data.comic_info_rank
                console.log('a',this.newWorkArr)
            })
        },
        getEndDate(){
            this.$http
            .get("/api/ComicReal/getRankComics")
            .then((res)=>{
                this.endArr = res.data.comic_info_rank
                console.log('b',this.endArr);
            })
        }
    }
  };
  </script>

  <style lang="scss" scoped>
 .newWork {
    width:100%;
    height: 665px;
    overflow: auto;
    background-color: white;
 }
 .newWork-item-left-pic {
    width: 25vw;
    padding: 20px 0 20px 20px;
 }
 .newWork-item {
    width: 100vw;
    display: flex;
    position: relative;
 }
 .item-left-img {
    border-radius: 10px;
    overflow: hidden;
 }
 .newWork-item-right{
    width: 70vw;
    padding: 30px;
 }
 .newWork-item-right-title {
    font-weight: bold;
    color: #444444;
 }
 .newWork-item-right-leiXing {
    margin-top: 35px;
    font-size: 13px;
    color: #b4b4b4;
 }
 .newWork-item-right-hot {
    width: 70vw;
    height: 15px;
    margin-top: 30px;
 }
 .hot-img {
    width: 6%;
    height: 100%;
    margin-right: 5px;
 }

 
 .list-box {
    position: absolute;
    width: 55px;
    height: 28px;
    line-height: 28px;
    text-align: center;
    top: 0;
    // left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    color: #fff;
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center center;
    background-image: url(../../res/mipmap-xxhdpi-v4/no1.png);
    background-color: aqua;
 }
 
 .newWork-item:nth-child(2) .list-box{
    background-image: url(../../res/mipmap-xxhdpi-v4/no2.png);
    
 }
 .newWork-item:nth-child(3) .list-box{
    background-image: url(../../res/mipmap-xxhdpi-v4/no3.png);
 }
  </style>
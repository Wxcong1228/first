<template>
    <div class="reading">
        <div class="reading-icon" @click="toBack()">
            <img src="../res/mipmap-xxhdpi-v4/fanhuibgg.png" alt="">
        </div>
        <div class="reading-fenX">
            <img src="../res/mipmap-xxhdpi-v4/fenxiangbg.png" alt="">
        </div>
        <div class="reading-content">
            <!-- <van-image :src="ReadingContent.pic" lazy-load>
                <template v-slot:loading>
                    <img src="../res/mipmap-xxhdpi-v4/weijiazai.png">
                </template>
            </van-image> -->
            <div class="reading-pic">
                <img class="reading-img" :src="ReadingContent.pic" alt="">
            </div>
            <div class="reading-title">{{ReadingContent.comic_title}}</div>
            <div class="reading-category">{{ReadingContent.category}}</div>
        </div>

        <div class="reading-list">
        <div class="reading-btn">
            <div class="reading-btn-left">
                <div class="reading-btn-img">
                    <img src="../res/mipmap-xxhdpi-v4/detailshoucangqian.png" alt="">
                </div>
                <div class="reading-btn-text">收藏</div>
            </div>
            <div class="reading-btn-right">
                <div class="reading-btn-right-text" 
                @click="jtcs(comicId, ReadingData.comic_section_detail[0].section_id,fourArr,bigArr)">开始阅读</div>
            </div>
            
        </div>
        <div :class="isTrue ? 'reading-intro1' : 'reading-intro'">
            <div class="reading-intro-content">
                {{ReadingContent.intro}}
            </div>
            
        </div>
        <div class="more" @click="toMoreClick">{{isTrue ? '收起' : '更多'}}</div>
        <div class="reading-box3">
            <div class="box3-comic_status">{{ReadingContent.comic_status}}</div>
            <div class="box3-datstr">{{datstr}}</div>
            <div class="box3-section_title">更新至{{section_title}}</div>
            <div class="all-btn" @click="toAllClick(bigArr)">
                <span class="all" >全部</span>
                <div class="all-img">
                    <img src="../res/mipmap-xxhdpi-v4/gerenzhongxinhuisejiantou.png" alt="">
                </div>
            </div>
        </div>
        <div class="box4">
        <div class="box4-length" v-for="o in oneArr" :key="o"
        @click="jtcs(comicId, ReadingData.comic_section_detail[0].section_id,fourArr,bigArr)">
        {{o+1}}</div>
        <div class="box4-length" @click="toAllClick(bigArr)" v-if="twoArr != ''">...</div>
        <div class="box4-length" v-for="t in twoArr" :key="t"
        @click="jtcs(comicId, ReadingData.comic_section_detail[0].section_id,fourArr,bigArr)">
            {{t+1}}
        </div>
    </div>

    <div class="box5">
        <div class="box5-title">评论</div>
        <div class="box5-content-title">
            <div class="box5-content-title-redu">
                <img src="../res/mipmap-xxhdpi-v4/redu.png" alt="">
            </div>
            <span>精彩评论</span>
        </div>
        <div class="box5-content-list">
            <div class="content-list" v-for="j in comments" :key="j.commentid">
                <div class="content-list-left">
                    <div class="left-user-img">
                    <div class="user-pic">
                        <img :src="j.user.picurl" alt="">
                    </div>
                </div>
                </div>
                <div class="content-list-right">
                    <div class="right-content">
                    <div class="nickname">{{j.user.nickname}}</div>
                    <div class="datcreate">
                        <div class="shijian">
                            <img src="../res/mipmap-xxhdpi-v4/shijian.png" alt="">
                        </div>
                        <span>{{j.datcreate}}</span>
                    </div>
                    <div class="comments-content">{{j.content}}</div>
                </div>
                </div>
                
            </div>
        </div>
    </div>
    <div class="box6">
        <div class="box6-content">
            <div class="box6-content-left">
                <div class="box6-icon">
                    <img src="../res/mipmap-xxhdpi-v4/pinglunqian.png" alt="">
                </div>
                <div class="box6-text">发评论...</div>
            </div>
            <div class="box6-content-right">
                <div class="box6-right-text">查看全部评价</div>
                <div class="box6-right-icon">
                    <img src="../res/mipmap-xxhdpi-v4/gerenzhongxinhuisejiantou.png" alt="">
                </div>
            </div>
        </div>
    </div>
    <div class="box7">已经到底了哦~</div>
</div>
    </div>
    

</template>

<script>

// import { runInThisContext } from "vm";
// import { isGeneratorFunction } from "util/types";
import { jtcs } from "../../utils/jumpToComicSection";
// import { obj } from '../../utils/apis/comic-info'
export default {
    data(){
        return{
            show: true,
            oneArr:[],
            twoArr:[],
            threeArr:[],
            fourArr:[],
            bigArr:[],
            length:"",
            datstr:"",
            section_title:"",
            ReadingData: {},
            ReadingContent:{}, 
            comicId: this.$route.query.id,
            isTrue:false,
            comments:[],
            pic:'',
            lianxiArr:[]
            // comicId: this.$route.query.id,
        }
    },
    created() {
        this.toReadingData()
        this.getCommentData()
    },
    methods:{
        jtcs,
        toBack(){
            this.$router.back()
        },
        toReadingData(){
            this.$http
        .get("/api/ComicReal/getComicDetails", {
          comic_id: this.comicId,
        })
        .then((response) => {
            console.log(this.comicId)
          this.ReadingData = response.data
          this.ReadingContent = response.data.comic_info
          this.pic = this.ReadingContent.pic
          this.bigArr = response.data.comic_section_detail
          this.fourArr = this.bigArr.reverse()
          this.length = this.bigArr.length
          this.section_title = this.ReadingData.comic_section_detail[this.ReadingData.comic_section_detail.length-1].section_title
          this.datstr = this.fourArr[0].datstr
          for(let i = 0 ;i < this.bigArr.length;i++){
            if(i<=3){
                this.oneArr.push(i)
            }else if (i>= this.bigArr.length-3){
                this.twoArr.push(i)
            }else{
                this.threeArr.push(i)
            }
          }

        //   this.bigArr.map((item,index) => {
        //     console.log(index)
        //     console.log(item)
        //     if(this.lianxiArr.indexOf(index) == -1){
        //         this.lianxiArr.push(index)

        //     }
        //     console.log('lianxi==>',this.lianxiArr);
        //   })
        });
    },
    toMoreClick(){
        this.isTrue = !this.isTrue
    },
    toAllClick(arr) {
        this.$router.push({
            path:'/allList',
            query:{
                arr:arr
            }
        })
    },
    
    getCommentData() {
        this.$http
        .get("/api/CommentComic/getComicComments",{
            comicid: this.comicId,
        })
        .then((data) => {
            console.log('get==>',data)
            console.log(this.comicId)
            this.comments = data.data.comments
        })
    }
   
    }
}
</script>

<style lang="scss">
.reading {
    width: 100%;
    position: relative;
}
.reading-icon {
    position: absolute;
    width: 25px;
    // height: 30px;
    top: 15px;
    left: 15px;
    z-index: 9;
}
.reading-fenX {
    position: absolute;
    width: 25px;
    // height: 30px;
    top: 15px;
    right: 15px;
    z-index: 9;
}
.reading-content {
    position: relative;
    height: 5%;
    
}
.reading-img{
        width:100%;
        // height: 180px;
    }
.reading-title {
    position: absolute;
    font-size: 20px;
    color: #f5f4ef;
    left: 5px;
    bottom: 45px;
}
.reading-category {
    position: absolute;
    font-size: 12px;
    bottom: 20px;
    left: 6px;
    color: #ccc;
}
.reading-list {
    width: 100%;
    height: 432px;
    overflow: auto;
}
.reading-btn {
    width: 100vw;
    height: 60px;
    // 
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
}
.reading-btn-left {
    padding: 10px;
    width: 30vw;
    display: flex;
    height: 50px;
    
}
.reading-btn-img {
    padding: 0 0 0 10px;
    width: 30%;
}
.reading-btn-text {
    padding: 5px 0 0 10px;
    font-size: 20px;
    // line-height: 35px;
}
.reading-btn-right {
    width: 65vw;
    height: 50px;
    
}
.reading-btn-right-text {
    width: 93%;
    height: 50px;
    overflow: hidden;
    line-height: 50px;
    text-align: center;
    color: #fff;
    font-size: 17px;
    background-color: #ffa36d;
    border-radius: 999px;
}
.reading-intro {
    width: 100%;
    height: 24px;
    overflow: hidden;
    text-overflow: ellipsis;
    // 
}
.reading-intro1 {
    width: 100%;
    // padding: 0 10px 0 10px;
}
.reading-intro-content {
    width: 98%;
    font-size: 12px;
   padding-left: 10px;
   box-sizing: border-box;
    color: #353535;
    overflow: hidden;

}
.more {
    width: 100%;
    height: 15px;
    line-height: 15px;
    margin-top: 5px;
    font-size: 13px;
    background-color: #fff;
    text-align: center;
    color: #ccc;
}

.reading-box3 {
    width: 100vw;
    display: flex;
    position: relative;

    .box3-comic_status {
        width: 15%;
        margin-left: 5px;
        // padding-left: 10px;
        padding-top: 5px;
        font-size: 14px;
    }
    .box3-datstr{
        width: 20%;
        height: 12px;
        overflow: hidden;
        padding-top: 7px;
        font-size: 12px;
        color: #bbb;
    }
    .box3-section_title {
        padding-top: 7px;
        font-size: 12px;
        color: #bbb;
        
    }
    .all-btn{
        position: absolute;
        top: 6px;
        right: 10px;
        display: flex;
        font-size: 13px;
        color: #ffa36d;
        
    }
    .all{
        margin-right: 10px;
        padding-top: 2px;
    }

    .all-img {
        width: 8px;
    }
    
}

.box4 {
    width: 100%;
    height: 90px;
    overflow: hidden;
    margin-top: 10px;
}
.box4-length {
    margin-top: 5px;
        float: left;
        width: 18%;
        height: 40px;
        line-height: 40px;
        text-align: center;
        margin-left: 10px;
        border: 1px solid transparent;
        background-color: #f8f8f8;
    }
.box4-length::after {
    content: '';
    clear: both;
    display: block;
}
.box5 {
    width: 100%;
    margin-top: 10px;
    .box5-title {
    // width: 100%;
    // padding: 10px;
    margin-left: 5px;
    margin-top: 10px;
    font-size: 18px;
    font-weight: 500;
}
.box5-content-title {
    width: 100%;
    display: flex;
    // padding: 10px;
    .box5-content-title-redu{
        width: 10px;
        margin-left: 5px;
        margin-top: 15px;
    }
    span {
        font-size: 13px;
        color: #bbb;
        margin-left: 5px;
        margin-top: 16px;
    }
   
}
.content-list{
    display: flex;
}
.content-list-left {
        width: 15%;
        
        // padding: 20px;
        .left-user-img{
            width: 30px;
            height: 30px;
            margin-left: 10px;
            margin-top: 20px;
            border-radius: 999px;
            overflow: hidden;
            .user-pic {
            width: 100%;
            // padding: 20px 0px 0px 10px;
        }
        }
        
    }
.content-list-right{
    width: 70%;
    .right-content {
        margin-top: 20px;
        font-size: 12px;
        .nickname{
            color: #929292;
        }
        .datcreate {
            width: 100%;
            height: 18px;
            display: flex;
            margin-left: -65px;
            justify-content: flex-start;
            color: #cdcdcd;
            font-size: 18px;
            
            transform: scale(0.5);
            .shijian {
                width: 18px;
                height: 18px;
                margin-right: 10px;
            }
        }
        .comments-content{
            margin-top: 10px;
            font-size: 13px;
        }
    }
    }

}
.box6 {
    width: 100%;
    margin-top: 15px;
    .box6-content{
        display: flex;
        justify-content: space-between;
    }
    

    .box6-content-left {
        display: flex;
        width: 49%;
        .box6-icon {
            width: 15%;
            margin-left: 10px;
        }
        .box6-text {
            font-size: 12px;
            margin-left: 5px;
           margin-top: 3px;
        }
    }
    .box6-content-right {
        display: flex;
        width: 25%;
        margin-right: 10px;
        .box6-right-text{
            font-size: 13px;
            margin-top: 1px;
            // float: right;
        }
        .box6-right-icon {
            width: 8px;
            margin-left: 5px;
        }
    }
}
.box7 {
    width: 100%;
    height: 20px;
    line-height: 20px;
    text-align: center;
    font-size: 12px;
    background-color: #f4f4f4;
}

</style>
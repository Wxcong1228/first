
<template>
    <transition name="move2">
    <div class="all">
        
        <div class="all-list" v-for="a in arr2" :key="a.section_id">
            <div class="all-list-content"
            @click="jtcs(comicId, ReadingData.comic_section_detail[0].section_id,fourArr,bigArr)">{{a+1}}</div>
        </div>
        <div class="all-footer">
            <div class="all-fanhui" @click="toAllBack">
                <div class="fanhui-icon">
                    <img src="../../res/mipmap-xxhdpi-v4/baisefanhui.png" alt="">
                </div>
                <span class="all-text">返回</span>
            </div>
            <div class="all-content"></div>
            <div class="all-order">倒序</div>
        </div>
    </div>
</transition>
</template>

<script>
import jtcs from '../../../utils/jumpToComicSection'
export default {
    data(){
        return{
            arr:this.$route.query.arr,
            arr2:[]
        }
    },
    created(){
        this.getArr()
    },
    methods: {
        jtcs,
        getArr(){
            console.log(this.arr);
            for(let i = 0;i<this.arr.length;i++){
                if(this.arr2.indexOf(i) == -1){
                    this.arr2.push(i)
                }else {
                    break
                }
            }
            console.log(this.arr2);
        },
        toAllBack(){
            this.$router.back()
        }
        
    }
}
</script>

<style lang="scss" scoped>
.all {
    width: 100%;
   
    .all-list {
        padding: 5px;
        width: 18%;
        font-size: 16px;
        line-height: 26px;
        text-align: center;
        margin-right: 10px;
        float: left;
        margin-left: 4px;
        margin-top: 5px;
        background-color: #f8f8f8;
        border: 0.1px solid transparent;
    }
    .all-list::after {
        clear: both;
        display: block;
        content: '';
    }
    .all-footer{
        position: fixed;
        width: 100%;
        height: 40px;
        bottom: 0;
        left: 0;
        display: flex;
        justify-content: space-between;
        background-color: #ddd;

        .all-fanhui {
            width: 15%;
            display: flex;
            margin-left: 5px;
            .fanhui-icon {
                width: 10px;
                line-height: 40px;
                text-align: center;
                margin-top: 3px;
            }
            .all-text {
                margin-left: 5px;
                line-height: 40px;
                text-align: center;
            }
            
        }
        .all-order {
                line-height: 40px;
                text-align: center;
                margin-right: 10px;
                color: #ff9887;
            }
    }
    
}
// .move2-enter,
// .move2-leave-to {
//   transform: translateY(667px);
// }

// .move2-enter-active,
// .move2-leave-active {
//   transition: all 1s linear;
// }

// .move2-enter-to,
// .move2-leave {
//   transform: translateY(0);
// }
</style>
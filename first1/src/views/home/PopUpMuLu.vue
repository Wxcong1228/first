<template>
    <div class="muLu">
        <div class="muLu-title" >
            {{muluData.title}}
        </div>
        <div class="mulu-add">
            <!-- sectiontitle -->
            <div class="mulu-add-sum">共{{arr.length}}话</div>
            <div class="mulu-add-comic_status">连载中</div>
            <div class="order" @click="toClickOrder">{{isOrder? '倒序' : '升序'}}</div>
        </div>
        <div class="mulu-content">
            <div class="mulu-list" v-for="a in (isOrder? arr : arr2)" :key="a.section_id">
                <div :class="a.section_title == sectiontitle ? 'mulu-list-content1' : 'mulu-list-content' " >{{a.section_title}}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
    muluData: Object,
    arr:Array,
    arr2:Array,
    sectiontitle:String
  },
    data(){
        return{
            isOrder:true,
            muluArr:[],

        }
    },
   
   
    methods:{
        toClickOrder(){
            this.isOrder = !this.isOrder
        },
        
    },
    watch:{
        toClickOrder(){
            this.isOrder = !this.isOrder
        }
    }
}
</script>

<style lang="scss" scoped>
.muLu {
    width: 100%;
    height: 100%;
    background-color: #2f2f2f;
    .muLu-title {
    width: 100%;
    height: 50px;
    background-color: #3e3e3e;
    font-size: 15px;
    line-height: 50px;
    text-align: center;
    color: #ddd;
}
.mulu-add {
    width: 100%;
    height: 40px;
    display: flex;
    background-color: #000;
    .mulu-add-sum {
        width: 20%;
        color: #7a7a7a;
        padding: 14px 10px 14px 10px;
        font-size: 12px;
    }
    .mulu-add-comic_status{
        width: 20%;
        color: #7a7a7a;
        padding: 14px 0 14px 0;
        font-size: 12px;   
    }
    .order{
        box-sizing: border-box;
        width: 42%;
        font-size: 12px;
        color: #ddd;
        padding: 14px 0 14px 60px;
    }
}

.mulu-content{
    width: 100%;
    height: calc(100% - 90px);
    overflow: auto;
    font-size: 13px;
    color: #ddd;
    .mulu-list {
    width: 100%;
    
    .mulu-list-content {
        padding: 15px 0 15px 15px;
    // height: 15px;
        font-size: 13px;
        color:#fff;
        border-bottom: .5px solid #3e3e3e;
    }
    .mulu-list-content1 {
        padding: 15px 0 15px 15px;
    // height: 15px;
        font-size: 13px;
        color:red;
        border-bottom: .5px solid #3e3e3e;
    }
}
}
}


</style>
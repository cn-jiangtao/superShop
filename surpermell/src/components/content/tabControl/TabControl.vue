<template>
    <div class="tab-control">
        <div v-for="(item, index) in titles" :key="item" 
        class="tab-control-item"
        :class="{active:index==currentIndex}"
        @click="itemclick(index)">
            <span>{{item}}</span>
        </div>
    </div>
</template>
<script>
export default {
   
    props:{
        titles:{
            type:Array,
            default(){
                return []
            }
        }
    },
    data() {
        return {
            currentIndex:0
        };
    },

    mounted() {
        
    },

    methods: {
        itemclick(index){
            this.currentIndex=index;
            this.$emit('tabClick', index);
        }
    },
};
</script>
<style scoped>
.tab-control{
    display: flex;
    text-align: center;
    font-size: 14px;
    background-color: #fff;
}
.tab-control span{
    padding:5px;
}
.tab-control-item{
    flex: 1;
    line-height: 40px;
    height: 40px;
}
.active{
    color:hotpink

}
.active span{
    border-bottom:3px solid hotpink;
}
</style>
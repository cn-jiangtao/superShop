<template>
    <div class="recommends">
        <div v-for="item in recommends"  :key="item.id"  class="recommends-item">
            <a :href="item.link">
                <img :src="item.image">
                <div >{{item.title}}</div>
            </a>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        //子类拿到父类home的recmmends
        recommends:{
            type:Array,
            default(){
                return []
            }
        }
    }
}
</script>
<style scoped>
    .recommends{
       
        display: flex;
        width: 100%;
        font-size: 15px;
        padding: 15px 0px 20px;
        text-align: center;
        border-bottom: 10px solid #eee;
    }
    .recommends-item{
        flex:1
    }
    .recommends-item img{
        width: 90%;
        margin-bottom: 10px;
    }
    a{
        text-decoration:none;
    }
</style>
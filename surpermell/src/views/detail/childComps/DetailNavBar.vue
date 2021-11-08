 
<template>
  <div>
      <navbar>
            <div slot="left" class="back" @click="backClick">
                <img src="@/assets/img/common/back.svg" alt="">
            </div>
            <div slot="center" class="title">
                <div  v-for="(item,index) in title" 
                :key="item"
                class="title-item"
                :class="{active:index==currentIndex}"
                @click="titleClick(index)"
                >
                {{item}}</div>
            </div>
      </navbar>
  </div>
</template>

<script>
import Navbar from '../../../components/common/navbar/Navbar.vue'
export default {
  components: { Navbar },
  
  props: {
  },
  data () {
    return {
        title:['商品','参数','评论'],
        currentIndex:0
    }
  },
  // 方法集合
  methods: {
      titleClick(index){
         this.currentIndex=index,
         this.$emit('titleClick', index);  
      },
      backClick(){
        //   返回上一次
          this.$router.back()
      }
  },
  // 计算属性
  computed: {
  },
  // 侦听
  watch: {
  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created () {
  },
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted () {
  },
  // 生命周期 - 创建之前
  beforeCreate () {
  },
  // 生命周期 - 挂载之前
  beforeMount () {
  },
  // 生命周期 - 更新之前
  beforeUpdate () {
  },
  // 生命周期 - 更新之后
  updated () {
  },
  // 生命周期 - 销毁之前
  beforeDestroy () {
  },
  // 生命周期 - 销毁完成
  destroyed () {
  },
  // 如果页面有keep-alive缓存功能，该函数会触发
  activated () {
  }
}
</script>

<style scoped>
 .title{
     display: flex;
     font-size:13px;
 }
 .title-item{
     flex:1;
 }
 .active{
     color: pink;
 }
 .img{
     width: 5px;
     height: 5px;
 }
 .back img{
     margin-top: 10px;
 }
</style>

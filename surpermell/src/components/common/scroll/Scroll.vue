<template>
  <div class="wrapper" ref="wrapper">
      <div class="content">
          <slot></slot>
      </div>
  </div>
</template>

<script>
import BScroll from "better-scroll"
export default {
  name: '',
  props: {
      probeType:{
          type:Number,
          default:0
      },
      pullUpLoad:{
          type:Boolean,
          default:false
      }
  },
  data () {
    return {
        scroll:null,
       
    }
  },
  // 方法集合
  methods: {
      // 使用BScroll内部的scrollTo方法实现回到顶部
    scrollTo(x, y, time = 500) {
      this.scroll && this.scroll.scrollTo(x, y, time);
    },
    // 调用scroll中的finishPullUp方法来实现多次加载
    finishPullUp(){
        this.scroll.finishPullUp()
    },
    //
    refresh(){
       this.scroll && this.scroll.refresh()
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
      //创建BScroll对象
      this.scroll=new BScroll(this.$refs.wrapper,{
          click:true,
          probeType:this.probeType,
          pullUpLoad:this.pullUpLoad,
      })
      //监听滚动位置
      this.scroll.on('scroll',position=>{
          this.$emit('scroll', position);
      })
      //监听上拉加载更多
      this.scroll.on('pullingUp',()=>{
          this.$emit('pullingUp');
      })
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
 
</style>

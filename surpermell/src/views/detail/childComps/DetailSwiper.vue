<template>
  <div>
       <swiper class="swiper-item">
            <swiper-item  v-for="item in topImages" :key="item.id">
               
                <img :src="item">
               
            </swiper-item>
        </swiper>
  </div>
</template>

<script>

import {Swiper,SwiperItem} from '@/components/common/swiper/index'
export default {
  components:{Swiper,SwiperItem},
  name: '',
  props: {
      topImages:{
          type:Array,
          default(){
              return []
          }
      }
  },
  data () {
    return {
    }
  },
  // 方法集合
  methods: {
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
 .swiper-item{
     height: 300px;
     overflow: hidden;
 }
</style>


<template>
  <div class="goods">
      <!-- 便利goods -->
      <goods-list-item v-for="item in goods" :key="item.id" :goodsItem="item" ></goods-list-item>
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem.vue'
export default {
  components: { GoodsListItem }, 
  name: '',
  props: {
    // 拿到父组件goods的类型，内容
      goods:{
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
  /* 引入CSS */
 
  .goods{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
</style>

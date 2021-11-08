<template>
  <div>
     
       
            <cart-list-item  v-for="(item,index) in cartList" :key="index" :product="item"></cart-list-item>
       
    
  </div>
</template>

<script>
import CartListItem from './CartListItem.vue'
export default {
  components: { CartListItem },
  name: '',
  props: {
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
      cartList(){
          const cartList=this.$store.state.cartList
          console.log(cartList)
          return cartList
      }
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
 
</style>

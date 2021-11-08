
<template>
  <div class="check-button" :class="{check: isChecked}">
      <img scr="@/assets/img/cart/tick.svg">
  </div>
</template>

<script>
export default {
  name: '',
  props: {
      isChecked:{
          type:Boolean,
          default:false
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
  .check-button{
      width: 20px;
      height: 20px;
      border-radius: 50%;
     border: 2px solid #aaa;     
  }
  .check{
      border-color:red ;
    background-color: red;
  }
  
</style>

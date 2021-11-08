
<template>
  <div class="but-bar">
      <div class="bar-item bottom-left">
      <div>
        <i class="icon service"></i>
        <span class="text">客服</span>
      </div>
      <div>
        <i class="icon shop"></i>
        <span class="text">店铺</span>
      </div>
      <div>
        <i class="icon collect"></i>
        <span class="text">收藏</span>
      </div>
    </div>
    <div class="bar-item bar-right">
      <div class="cart" @click="addCart">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  props: {
  },
  data () {
    return {
    }
  },
  // 方法集合
  methods: {
      addCart(){
          this.$emit('addCart');
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
  .but-bar{
      height: 49px;
      /* background-color: green; */
      display: flex;
  }
  .bar-item {
  flex: 1;
  display: flex;
}
.bar-item > div {
  flex: 1;
  text-align: center;
}
.bar-item .text {
  font-size: 13px;
}
.bar-item .icon {
  display: block;
  width: 22px;
  height: 20px;
  margin: 5px auto 0;
  background: url(~@/assets/img/detail/detail_bottom.png) 0 0/100%;
}
.bar-item .service {
  background-position: 0 -54px;
}
.bar-item .shop {
  background-position: 0 -98px;
}
.bar-right {
  font-size: 15px;
  color: #fff;
  line-height: 49px;
}
.bar-right .cart {
  background: #ffe817;
  color: #333;
}
.bar-right .buy {
  background: #f69;
}
</style>

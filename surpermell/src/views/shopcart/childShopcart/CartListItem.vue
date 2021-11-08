
<template>
 
    <div class="cart-item">
        <div>
            <check-button :isChecked="product.checked" @click.native="checkClick"></check-button>
        </div>
        <div class="goods-img">
             <img :src="product.image" alt />
        </div>
        <div class="goods-info">
                <div class="title">{{product.title}}</div>
                <div class="desc">{{product.desc}}</div>
            <div class="price-count">
                <div class="price">{{product.price}}</div>
                <div class="count">X{{product.count}}</div>
            </div>
        </div>
  </div>
</template>

<script>
import CheckButton from '../../../components/content/checkButton/CheckButton.vue'
export default {
  components: { CheckButton },
  name: '',
  props: {
      product:{
          type:Object,
          default(){
              return {}
          }
      }
  },
  data () {
    return {
    }
  },
  // 方法集合
  methods: {
      checkClick(){
          this.product.checked=!this.product.checked
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
.cart-item {
  width: 100%;
  padding: 4px 8px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgb(224, 221, 221);
}
.goods-img {
  padding: 5px;
}
.goods-img img {
  width: 80px;
  height: 100px;
  border-radius: 5px;
}
.goods-info {
  width: 65%;
  padding: 5px 10px;
  overflow: hidden;
  font-size: 17px;
  color: #333;
}
.goods-info .title,
.goods-info .desc {
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.goods-info .desc {
  margin-top: 10px;
  font-size: 12px;
  color: #666;
}
.goods-info .title{
    font-size: 14px;
}
.goods-info .price-count {
  padding: 5px 5px;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
}
.price {
  color: var(--color-high-text);
  font-weight: 700;
}
</style>

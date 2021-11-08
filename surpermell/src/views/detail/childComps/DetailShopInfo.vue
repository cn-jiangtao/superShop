<template>
  <div>
      <div class="logo">
          <img :src="shop.logo">
          <div>{{shop.name}}</div>
      </div>
      <div class="shop-middle">
          <div class="center">
              <p>{{shop.sells}}</p>
              <p class="top">总销量</p>
          </div>
          <div class="center">
              <p>{{shop.goodsCount}}</p>
              <p class="top">全部宝贝</p>
          </div>
     
      <div class="shop-score" >
        <table>
          <tr v-for="(item, index) in shop.score" :key="index">
            <td >{{item.name}}</td>
            <td class="score" :class="{'item-score':item.isBetter}">{{item.score}}</td>
            <td class="isbetter" :class="{'item-isBetter':item.isBetter}">{{item.isBetter?'高':'低'}}</td>
          </tr>
        </table>
      </div>
      </div>
      <div class="goShop">
          <p >进入店铺</p>
      </div>
  </div>
</template>

<script>
export default {
  name: '',
  props: {
      shop:{
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
 .logo{
     display: flex;
     padding-top: 10px;
 }
 .logo img{
     width: 64px;
     height: 64px;
     border-radius: 50%;
 }
 .logo div{
     font-size: 20px;
     padding-top: 20px;
 }
 .shop-middle{
     display: flex;
     
 }
 .shop-middle div{
     flex: 1;
 }
 .shop-score{
     font-size: 8px;
     border-left: 2px solid rgb(197, 191, 191);
     padding-left: 10px;
 }
 .center{
     text-align: center;
 }
 .top{
     padding-top: 5px;
 }
 .shop-score .score{
     color: green;
 }
 .shop-score .item-score{
     color: red;
 }
 .shop-score .isbetter{
    background-color: green;
 }
 .shop-score .item-isBetter{
    background-color: red;
 }
 .goShop{
     text-align: center;
     padding-top: 10px;
 }
 .goShop p{
    display: inline-block;
    padding: 2px 30px;
    background: rgba(100, 100, 100, 0.2);
    border-radius: 5%;
    
 }
</style>

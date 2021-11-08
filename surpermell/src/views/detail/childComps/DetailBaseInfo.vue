<template>
  <div v-if="Object.keys(goods).length!=0">
        <div class="title">{{goods.title}}</div>
        <div class="price">
          <span class="newPrice">{{goods.newPrice}}</span>
          <span class="oldPrice">{{goods.oldPrice}}</span>
          <span class="discount" v-if="goods.discount">{{goods.discount}}</span>
        </div>    
        <div class="columns">
           <span>{{goods.columns && goods.columns[0]}}</span>
            <span>{{goods.columns && goods.columns[1]}}</span>
            <span>{{goods.services && goods.services[goods.services.length-1].name}}</span>
        </div> 
        
        <div class="services"  v-if="goods.services">
            <span v-for="index in goods.services.length-1" :key="index">
                <img :src="goods.services[index-1].icon">
                <span>{{goods.services[index-1].name}}</span>
            </span>

        </div>
  </div>
</template>

<script>
export default {
  name: '',
  props: {
      goods:{
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
  .title{
      font-weight: bolder;
  }
  .price{
      padding-top: 10px;
  }
  .newPrice{
      color: rgb(247, 9, 48);
  }
  .oldPrice{
      font-size: 1px;
      /* 将文字添加删除线 */
      text-decoration: line-through;
      padding-left: 5px;
  }
  .discount{
      background-color: pink;
      border-radius: 6px;
      position: relative;
      top: -6px;
      font-weight: bolder;   
  }
  .columns{
      margin-top: 10px;
      padding-bottom: 5px;
      display: flex;
      font-size: 12px;
      color: gray;
     justify-content: space-between;
  }
  .services{
      margin-top: 10px;
      display: flex;
      font-size: 12px;
     justify-content: space-between;
     padding-bottom: 10px;
     border-bottom: 3px solid gray;
  }
  .services img{
      width: 10px;
      height: 10px;
  }
  
</style>

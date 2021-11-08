<template>
  <div class="bottom-bar">

      <div class="check">
          <check-button :isChecked="isCheckAll" @click.native="clickAll"></check-button>
          <span>全选</span>
          
      </div>
      <div class="prices">
          <span>合计:￥{{prices}}</span>
      </div>
      <div class="calculate">
          <span>去结算:{{calculate}}</span>
      </div>
  </div>
</template>

<script>
import CheckButton from '../../../components/content/checkButton/CheckButton.vue'
export default {
  components: { CheckButton },
  name: '',
  props: {
  },
  data () {
    return {
    }
  },
  // 方法集合
  methods: {
      clickAll(){
          if(this.isCheckAll){
              //如果全部选中，则改为全部不选择
              this.$store.state.cartList.forEach(item=>item.checked=false)
          }else{
              //反之，改为全部选中
              this.$store.state.cartList.forEach(item=>item.checked=true)
          }
      }
  },
  // 计算属性
  computed: {
    isCheckAll(){
    //    filter方法
    if(this.$store.state.cartList.length==0){
        return false
    }else{
        return !(this.$store.state.cartList.filter(item=>!item.checked).length)
    }
   
    },
    calculate() {
        const calculate= this.$store.state.cartList
        .filter((item) => item.checked)
        .reduce((preValue, item) => {
          return preValue + item.count
        }, 0)
        return calculate
    },


      prices(){
          
          const prices= this.$store.state.cartList
          .filter(item=>{
              return item.checked
          }).reduce((preValue,item)=>{
              return preValue+item.price*item.count
          },0)
          return prices
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
 .bottom-bar{
     height: 40px;
     position: relative;
     bottom: 49px;
     display: flex;
     justify-content: space-between;
     /* background-color: red; */
      
 }
 .check{
     display: flex;
     padding: 10px 5px;
 }
 .prices{
     padding: 10px 10px;
 }
 .calculate{
      padding: 10px 10px;
      width: 100px;
      height: 40px;
      background: red;
 }
</style>

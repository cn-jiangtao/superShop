<template>
  <div class="cart-shop">
    <navbar class="cartTop">
      <div slot="center">购物车({{this.$store.getters.cartLength}})</div>
    </navbar>
    <scroll ref="scroll" class="cartScroll">
    <cart-list></cart-list>
    </scroll>
    <cart-bottom-bar></cart-bottom-bar>
  </div>
</template>

<script>
import Navbar from '../../components/common/navbar/Navbar.vue'
import CartList from '@/views/shopcart/childShopcart/CartList.vue'
import Scroll from '../../components/common/scroll/Scroll.vue'
import CartBottomBar from './childShopcart/CartBottomBar.vue'
export default { 
  components: { Navbar, CartList, Scroll, CartBottomBar },
  name: 'Shopcart',
  methods:{
   
  }
}
</script>

<style  scoped>
 .cartTop{
   background-color: pink;
 }
 .cart-shop{
   height: 100vh;
 }
 .cartScroll{
   height:calc(100% - 44px - 49px );
    overflow: hidden;
 }
</style>>


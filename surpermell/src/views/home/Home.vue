<template>
  <div id="Home">
    <navbar class="nav-home"><div slot="center">购物街</div></navbar>
    <scroll class="content" ref="scroll" :probe-type="3" @scroll="contentScroll" :pull-up-load="true" @pullingUp="loadMore">
      <!-- 轮播图展示 -->
      <home-swiper :banners="banners"></home-swiper>
      <!-- 活动展示 -->
      <recommends :recommends="recommends"></recommends>
      <!-- 本周流行展示 -->
      <feature></feature>
      <!-- 导航栏展示 -->
      <tab-control class="tab-control" :titles="['流行','新款','精选']" @tabClick="tabClick"></tab-control>
      <!-- 数据显示 -->
      <goods-list :goods="goods[currentType].list"></goods-list>
    </scroll>
    <!-- 回顶部按钮 -->
    <back-top @click.native="backclick" v-show="isShowbacktop"></back-top>
  </div>
</template>

<script>
import Navbar from '../../components/common/navbar/Navbar.vue';
import TabControl from '../../components/content/tabControl/TabControl.vue';
import GoodsList from '../../components/content/goods/GoodsList.vue';
import BackTop from '../../components/content/backTop/BackTop.vue';
import Scroll from '../../components/common/scroll/Scroll.vue';



import HomeSwiper from './childHome/HomeSwiper.vue';
import Recommends from './childHome/Recommends.vue';
import Feature from './childHome/Feature.vue';


import { getHomeMultidata,getHomeGoods} from '@/network/home';
import {backTopMixin} from '@/common/mixin.js'




export default {
  name: "Home",
  components: {
        Navbar,
        HomeSwiper,
        Recommends,
        Feature,
        TabControl,
    GoodsList,
    BackTop,
    Scroll,
      },
 
  mixins:[backTopMixin],//采用混入实现回到顶部按钮功能
    data(){
      return{
       banners:[],
       recommends:[],
      //  请求到商品数据的类型以及页码
       goods:{
         'pop':{page:0,list:[]},
         'new':{page:0,list:[]},
         'sell':{page:0,list:[]},
       },
        // 最开始默认显示pop的数据
         currentType:'pop',
        //  回到顶部按钮默认为false
         // isShowbacktop:false,
        }
    
    },
    
    created(){
      getHomeMultidata().then(res=>{
        this.banners=res.data.banner.list;
        this.recommends=res.data.recommend.list;
      }),
      //请求商品数据
      this.getHomeGoods('pop'),
      this.getHomeGoods('new'),
      this.getHomeGoods('sell')
      
      
    },
    methods:{
      //事件监听相关的
      //用index的点击的改变来改变currentType的值
        tabClick(index){
          switch(index){
            case 0:
            this.currentType='pop'
            break
            case 1:
            this.currentType='new'
            break
            case 2:
            this.currentType='sell'
            
          }
        },
        
        // 当-y轴大于1000的时候显示按钮
        contentScroll(position){
          this.isShowbacktop=(-position.y)>1000
        },
        //上拉加载更实现
        loadMore(){
          this.getHomeGoods(this.currentType)
        },
        



      //网络请求相关的
        getHomeGoods(type){
          const page=this.goods[type].page+1
          getHomeGoods(type,page).then(res=>{
            
            this.goods[type].list.push(...res.data.list)
            this.goods[type].page+=1

            // 实现多次加载更多 
            this.$refs.scroll.finishPullUp()
          })
        }
      },
      
      mounted(){
        //监听item图片加载完成
      this.$bus.$on('itemImageLoad',()=>{
       
        this.$refs.scroll.refresh()
      })
      },
      destroyed(){  
        console.log("销毁")
      },
    }


  
  
</script>

<style scoped>
*{
  padding: 0px;
  margin: 0 auto;
}
#Home{
  padding-top:44px ;
  height: 100vh;
  position: relative;
 
}
.nav-home{

  background:pink;
  color: white;
  position: fixed;
  left: 0;
  right:0;
  top:0;
  z-index:9;
}
.tab-control{
  position: sticky;
  top: 44px;
  z-index: 9;
}
/* 两种滚动区域指定 content*/
.content {
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  overflow: hidden;
}
/* .content{
  height: calc(100% - 93px);
  overflow: hidden;
  margin-top: 44px;
} */

</style>
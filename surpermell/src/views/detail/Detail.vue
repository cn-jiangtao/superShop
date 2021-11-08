<template>
  <div id="detail">
    <detail-nav-bar
      class="detail-nav-bar"
      @titleClick="titleClick"
      ref="nav"
    ></detail-nav-bar>
    <scroll
      class="center"
      :pull-up-load="true"
      :probe-type="3"
      ref="scroll"
      @scroll="contentScroll"
    >
      <detail-swiper :topImages="topImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info
        :detailInfo="detailInfo"
        @imageLoad="imageLoad"
      ></detail-goods-info>
      <detail-param-info
        :paramsInfo="paramsInfo"
        ref="params"
      ></detail-param-info>
      <detail-commen-info
        :commentInfo="commentInfo"
        ref="common"
      ></detail-commen-info>

      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </scroll>
    <back-top @click.native="backclick" v-show="isShowbacktop"></back-top>
    <detail-botton-bar @addCart="addCart"> </detail-botton-bar>
    <toast :message="message" :show="show"></toast>
    
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar.vue";
import { getDetail, Goods, Shop, Params } from "@/network/detail.js";
import DetailSwiper from "./childComps/DetailSwiper.vue";
import DetailBaseInfo from "./childComps/DetailBaseInfo.vue";
import DetailShopInfo from "./childComps/DetailShopInfo.vue";
import Scroll from "../../components/common/scroll/Scroll.vue";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo.vue";
import DetailParamInfo from "./childComps/DetailParamInfo.vue";
import DetailCommenInfo from "./childComps/DetailCommenInfo.vue";
import DetailBottonBar from "./childComps/DetailBottonBar.vue";

import BackTop from "@/components/content/backTop/BackTop.vue";
import { backTopMixin } from "@/common/mixin.js";
import Toast from '@/components/common/toast/Toast.vue';

export default {
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommenInfo,
    DetailBottonBar,
    BackTop,
    Toast,

   
  },


  name: "Detail",
  props: {},
  mixins: [backTopMixin],
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramsInfo: {},
      commentInfo: {},
      themeTopYs: [],
      currentIndex: 0,
      message:'',
      show:false
    };
  },
  // 方法集合
  methods: {
    imageLoad() {
      this.themeTopYs = [];
      this.themeTopYs.push(0);
      this.themeTopYs.push(this.$refs.params.$el.offsetTop);
      this.themeTopYs.push(this.$refs.common.$el.offsetTop);

      console.log(this.themeTopYs);

      this.$refs.scroll.refresh();
    },
    titleClick(index) {
      // console.log(index)
      this.$refs.scroll.scrollTo(0, -this.themeTopYs[index] + 44, 100);
    },

    contentScroll(position) {
      const positionY = -position.y;
      let length = this.themeTopYs.length;
      for (let i = 0; i <= length; i++) {
        // if(positionY>this.themeTopYs[i]&&positionY<this.themeTopYs[i+1]){
        //     console.log(i)
        if (
          (this.currentIndex !== i &&
            i < length - 1 &&
            positionY >= this.themeTopYs[i] &&
            positionY < this.themeTopYs[i + 1]) ||
          (i == length - 1 && positionY >= this.themeTopYs[i])
        ) {
          this.currentIndex = i;

          // 拿到导航栏的currentIndex，将新的currentIndex赋值给导航栏
          this.$refs.nav.currentIndex = this.currentIndex;
        }
      }
      //y轴大于1000显示按钮
      this.isShowBackTop = positionY > 1000;
    },
    addCart() {
      const product = {};
      product.image = this.topImages[0];
      product.title = this.goods.title;
      product.desc = this.goods.desc;
      product.price = this.goods.realPrice;
      product.iid = this.iid;

      // this.$store.commit("addCart",product)
      this.$store.dispatch("addCart", product).then(res=>{
        this.show=true;
        this.message=res;
        setTimeout(()=>{
          this.show=false
        },1500)
      })
    },
  },
  // 计算属性
  computed: {},
  // 侦听
  watch: {},
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {
    // 保存传入的iid
    this.iid = this.$route.params.iid;

    // 根据iid请求详情数据
    getDetail(this.iid).then((res) => {
      // 拿到轮播图数据
      this.topImages = res.result.itemInfo.topImages;
      //拿到商品数据
      this.goods = new Goods(
        res.result.itemInfo,
        res.result.columns,
        res.result.shopInfo.services
      );
      // 拿到商家数据
      this.shop = new Shop(res.result.shopInfo);
      //  商品详情数据
      this.detailInfo = res.result.detailInfo;
      //商品参数
      this.paramsInfo = new Params(
        res.result.itemParams.info,
        res.result.itemParams.rule
      );
      //商品评论
      if (res.result.rate.rCate != 0) {
        this.commentInfo = res.result.rate.list[0];
      }
    });
  },
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  // 生命周期 - 创建之前
  beforeCreate() {},
  // 生命周期 - 挂载之前
  beforeMount() {},
  // 生命周期 - 更新之前
  beforeUpdate() {},
  // 生命周期 - 更新之后
  updated() {},
  // 生命周期 - 销毁之前
  beforeDestroy() {},
  // 生命周期 - 销毁完成
  destroyed() {},
  // 如果页面有keep-alive缓存功能，该函数会触发
  activated() {},
};
</script>

<style scoped>
#detail {
  position: relative;
  z-index: 10;
  background: #fff;
  height: 100vh;
}
/* .detail-nav-bar{
   position: relative;
   z-index: 11;
   background: #fff;
 } */
.center {
  height: calc(100% - 44px - 49px);
  overflow: hidden;
}
/* .center {
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  overflow: hidden;
} */
</style>

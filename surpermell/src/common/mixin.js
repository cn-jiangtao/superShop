

// export const imgListenerMixin = {
//     data() {
//       return {
//         itemImgListener: null
//       };
//     },
//     mounted() {
//       // 当图片加载完成，调用refresh重新计算scrollHeight
    
//       let refresh = this.$refs.scroll.refresh;
//       // 使用一个参数来保存一个refresh函数，传给事件总线的第二个参数。这样在取消事件的时候可以直接传进这个参数
//       // 首页对首页对goodslistitem里的图片进行监听，当进到详情页应当取消，因为详情页也用的goodslistitem
//       this.itemImgListener = () => {refresh();};
  
//       this.$bus.$on("itemImgLoad", this.itemImgListener);
//     }
//   };



// 混入是否回到顶部
export const backTopMixin={
  data() {
    return {
      isShowbacktop:false,
    };
  },
  methods:{
    backclick(){
      this.$refs.scroll.scrollTo(0,0)
    },
  }
}
  
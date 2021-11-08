<template>
  <div v-if="Object.keys(detailInfo).length !== 0" class="goods-list">
    <div class="info-desc clear-fix">
      <div class="desc">
        <div class="desc">{{ detailInfo.desc }}</div>
      </div>
    </div>
    <div class="info-key">{{ detailInfo.detailImage[0].key }}</div>
    <div class="info-list">
      <img
        v-for="(item, index) in detailInfo.detailImage[0].list"
        :key="index"
        :src="item"
        @load="imageLoad"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    detailInfo: {
      type: Object,
      default() {},
    },
  },
  data() {
    return {
      counter: 0,
      imageLength: 0,
    };
  },
  // 方法集合
  methods: {
    imageLoad() {
      // 判断，所有的图片加载完成了之后，进行一次回调
      if (++this.counter === this.imageLength) {
        this.$emit("imageLoad");
      }
    },
  },
  // 计算属性
  computed: {},
  // 侦听
  watch: {
    detailInfo() {
      this.imageLength = this.detailInfo.detailImage[0].list.length;
    },
  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {},
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
.goods-list {
  padding: 30px 8px 0;
  border-bottom: 4px solid rgba(100, 100, 100, 0.1);
}
.info-desc {
  padding: 0 8px 0;
  font-size: 14px;
}
.info-desc .desc {
  text-indent: 2em;
}
.info-key {
  padding: 8px;
}
.info-list img {
  width: 100%;
}
</style>

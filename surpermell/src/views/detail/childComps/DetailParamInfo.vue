<template>
  <div class="params-info" v-if="Object.keys(paramsInfo).length !== 0">
    <table class="info-size" v-for="(table, index) in paramsInfo.sizes" :key="index">
      <tr v-for="(tr, indey) in table" :key="indey">
        <td v-for="(td, indez) in tr" :key="indez">{{td}}</td>
      </tr>
    </table>
    <table class="info-params">
      <tr v-for="(info, index) in paramsInfo.infos" :key="index">
        <td class="info-params-key">{{info.key}}</td>
        <td class="info-params-value">{{info.value}}</td>
      </tr>
    </table>
    <div class="info-img" v-if="paramsInfo.image.length !== 0">
      <img :src="paramsInfo.image" alt />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    paramsInfo: {
      type: Object,
      default() {
        return {}
      },
    },
  },
}
</script>

<style scoped>
.params-info {
  padding: 20px 15px;
  font-size: 16px;
  border-bottom: 5px solid #f2f5f8;
}
.params-info table {
  width: 100%;
  border-collapse: collapse;
}
.params-info table tr {
  height: 42px;
}
.params-info table tr td {
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
}
.info-params-key {
  /* 当value的数据量比较大时会挤到key，所以给key一个固定的高度 */
  width: 95px;
}
.info-params {
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}
.info-params-value {
  color: #eb4846;
}
.info-img img {
  width: 100%;
}
</style>
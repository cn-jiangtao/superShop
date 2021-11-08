<template>
  <div>
      <div class="header">
          <span>用户评论</span>
          <span>更多</span>
      </div>
      <div v-if="Object.keys(commentInfo).length !== 0" class="user">
          <span><img :src="commentInfo.user.avatar"></span>
          <span class="username">{{commentInfo.user.uname}}</span>
      </div>
      <div class="comment">
          <p>{{commentInfo.content}}</p>
          <div class="style">
              <span>{{commentInfo.created | formatDate('yyyy-MM-dd')}}</span>
              <span>{{commentInfo.style}}</span>
          </div>
          <div v-for="item in commentInfo.images" :key="item" class="userimg">
              <img :src="item">
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: '',
  props: {
      commentInfo:{
          type:Object
      }
  },
  data () {
    return {
    }
  },


  //用过滤器检时间戳转换成正常日期格式
  filters: {
    // 处理时间戳
    formatDate(date, format) {
      if (typeof date == 'string') {
        return date
      }
      if (!format) format = 'yyyy-MM-dd hh:mm:ss'
      if (!date || date == null) return null
      // * 1000转为毫秒
      date = new Date(date * 1000)
      let o = {
        'M+': date.getMonth() + 1, // 月份
        'd+': date.getDate(), // 日
        'h+': date.getHours(), // 小时
        'm+': date.getMinutes(), // 分
        's+': date.getSeconds(), // 秒
        'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
        S: date.getMilliseconds(), // 毫秒
      }
      // 获取年份
      if (/(y+)/.test(format))
        format = format.replace(
          RegExp.$1,
          (date.getFullYear() + '').substr(4 - RegExp.$1.length)
        )
      for (var k in o) {
        if (new RegExp('(' + k + ')').test(format))
          format = format.replace(
            RegExp.$1,
            RegExp.$1.length === 1
              ? o[k]
              : ('00' + o[k]).substr(('' + o[k]).length)
          )
      }
      return format
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
}
</script>

<style scoped>
 .header{
     display: flex;
     justify-content: space-between;
     padding:5px 20px 0px 20px;
     border-bottom: 1px solid rgb(214, 201, 201);
 }
 .user img{
     width: 64px;
     height: 64px;
     border-radius: 50%;
     margin: 10px 10px;
 }
 .username{
     position: relative;
     top: -50px;
 }
 .comment{
     margin: 0px 10px;
 }
 .comment p{
     font-size: 14px;
     text-indent: 28px;
 }
 .style{
     margin-top: 5px;
     font-size: 12px;
 }
 .userimg{
   display: flex;
 }
 .userimg img{
     
     width: 70px;
     height: 70px;
 }
</style>

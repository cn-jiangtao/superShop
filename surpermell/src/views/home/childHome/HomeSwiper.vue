<template>
    <div>
        <swiper>
            <swiper-item v-for="item in banners" :key="item.id">
                <a :href="item.link">
                <img :src="item.image923">
                </a>
            </swiper-item>
        </swiper>
    </div>
</template>
<script>
import {Swiper,SwiperItem} from '@/components/common/swiper/index'


export default {

  components: { Swiper, SwiperItem },
  props:{
      //子类拿到父类home的banners
      banners:{
          type:Array,
          default(){
              return []
          }
      }
  }
    
}
</script>
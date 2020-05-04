<template>
  <swiper :options="swiperOption" class="homes-wiper" v-if="banner.length">
        <swiper-slide v-for="(item,index) in banner" :key="index">
          <a :href="item.link">
            <img :src="item.image" alt="">
          </a>
        </swiper-slide>
        <div class="swiper-pagination change"  slot="pagination"></div>   
    
      </swiper>
</template>

<script>
  import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
  import 'swiper/css/swiper.css'
  export default {
      name:'HomeSwiper',
      props:{
          banner:{
            type:Array,
            default(){
              return []
            }
          }
      },
      data() {
          return {
              swiperOption:{
                    //显示分页
                    pagination: {
                      el: '.swiper-pagination'
                    },
                    //自动轮播
                    autoplay: {
                      delay: 2000,
                      //当用户滑动图片后继续自动轮播
                      disableOnInteraction: false,
                    },
                    //开启循环模式
                    loop: true
                }
          }
      },
  }
</script>

<style>
 .homes-wiper img{
    width: 100%;
  }
  .change /deep/ .swiper-pagination-bullet-active {
    background-color: var(--color-tint);
  }
</style>
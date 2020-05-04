<template>
  <div id="home">
      <nav-bar class="home-nav">
        <template #center>
            格林街
        </template>
      </nav-bar>
      <home-swiper :banner='banner'></home-swiper>
      <home-recommend :recommend='recommend'></home-recommend>
      <fashion-view></fashion-view>
      <tab-control :titles="['流行','新款','精选']" class="tab-c"></tab-control>

    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
      <li>8</li>
      <li>9</li>
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
      <li></li>
    </ul>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar"
  import HomeSwiper from "./homeChild/HomeSwiper"
  import HomeRecommend from "./homeChild/HomeRecommend"
  import FashionView from "./homeChild/FashionView"
  import TabControl from "components/content/TabControl"

  import {getHomeMultidata,getHomeGoods} from "network/home"

  export default {
    name:'Home',
    components:{
      NavBar,
      HomeSwiper,
      HomeRecommend,
      FashionView,
      TabControl
      
    },
    data() {
      return {
        banner:[],
        recommend:[],
        goods:{
          'pops':{page:0,list:[]},
          'news':{page:0,list:[]},
          'sell':{page:0,list:[]},

        }
      }
    },
    created() {
      getHomeMultidata().then(res=>{
        this.banner = res.data.banner.list
        this.recommend = res.data.recommend.list
      })
      getHomeGoods('pop',1).then(res=>{
        console.log(res)
      })
    },
  }
</script>

<style>
  #home{
    padding-top: 44px;
  }
  .home-nav{
    background-color:var(--color-tint);
    color: #ffffff;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 999;
  }
  .tab-c{
    position: sticky;
    top:44px;
  }
</style>
<template>
  <ul class="home-recommend">
      <li v-for="(item,index) in recommend" :key="index">
        <a :href="item.link">
          <img :src="item.image" alt="">
          <div>{{item.title}}</div>
        </a>
      </li>
  </ul>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props:{
      recommend:{
          type:Array,
          default(){
              return []
          }
      }
  }
}
</script>

<style scoped>
  .home-recommend{
    display: flex;
    text-align: center;
    list-style: none;
    font-size: 12px;
    padding: 10px 0 20px;
    border-bottom: 8px solid #eee;
  }
  .home-recommend li{
    flex: 1;
  }
  .home-recommend img{
    width: 85%;
    margin-bottom: 6px;
  }
  
</style>
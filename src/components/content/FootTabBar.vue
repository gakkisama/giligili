<template>
      <tab-bar>
      <tab-bar-item path='/home'>
        <template #tab-icon>
          <img src="~assets/img/tabbar/home.svg" alt="首页">
        </template>
        <template #tab-icon-active>
          <img src="~assets/img/tabbar/home_active.svg" alt="首页">
        </template>
        <template #tab-text>
          <div>
            首页
          </div>
        </template>
        <div>首页</div>
      </tab-bar-item>
      <tab-bar-item path='/menu'>
        <template #tab-icon>
          <img src="~assets/img/tabbar/menu.svg" alt="目录">
        </template>
        <template #tab-icon-active>
          <img src="~assets/img/tabbar/menu_active.svg" alt="目录">
        </template>
        <template #tab-text>
          <div>
            目录
          </div>
        </template>
      </tab-bar-item>
      <tab-bar-item path='/discover'>
        <template #tab-icon>
          <img src="~assets/img/tabbar/discover.svg" alt="发现">
        </template>
        <template #tab-icon-active>
          <img src="~assets/img/tabbar/discover_active.svg" alt="发现">
        </template>
        <template #tab-text>
          <div>
            发现
          </div>
        </template>
      </tab-bar-item>
      <tab-bar-item path='/profile'>
        <template #tab-icon>
          <img src="~assets/img/tabbar/profile.svg" alt="我的">
        </template>
        <template #tab-icon-active>
          <img src="~assets/img/tabbar/profile_active.svg" alt="我的">
        </template>
        <template #tab-text>
          <div>
            我的
          </div>
        </template>
      </tab-bar-item>
    </tab-bar>
</template>

<script>
import TabBar from 'components/common/tabbar/TabBar'
import TabBarItem from 'components/common/tabbar/TabBarItem'
export default {
    name:'FootTabBar',
    components:{
        TabBar,TabBarItem
    }
}
</script>

<style>

</style>
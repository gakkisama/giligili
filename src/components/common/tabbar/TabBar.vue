<template>
    <div class="tab-bar">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name:'TabBar',
    data() {
        return {
            // isActive:false,
        }
    },
    computed: {
      isActive(){
        
        // return this.$route.path.indexOf(this.path)!==-1
      }
    },
    methods: {
        // tabClick(e,path){
          
        //     this.$router.push(path).catch(error=> error)
            
        //     return this.path=path
            
            
        },
    }

</script>
<style scoped>
  .tab-bar{
    
    display: flex;
    position: fixed;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: #f6f6f6;
    box-shadow: 0px -1px 10px rgba(83, 81, 81, 0.2);
    color: #8a8a8a;
  }
  .tab-bar-item{
    flex: 1;
    height: 49px;
    text-align: center;
    font-size: 14px;
  }
  .tab-bar-item img{
      width: 24px;
      height: 24px;
      margin-top: 3px;
      vertical-align: middle;
  }
  /* .active{
      color: #1296db;
  } */
</style>
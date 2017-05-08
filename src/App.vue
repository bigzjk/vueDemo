<!--以后项目的根组件 -->
<template>
<!-- template里面主要放的是html元素 也就是html的页面结构 -->  
  <div>
  <!-- 1.0mint-ui的header组件 -->
  <mt-header fixed title="bigzjk"></mt-header>
  <!-- 2.0 利用vue-router 的router-view站位 -->
  <router-view></router-view>
  <!-- 3.0mui的tabber组件 -->
  <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item " to="/home">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item" to="/tabbar-with-chat">
        <span class="mui-icon mui-icon-email"></span>
        <span class="mui-tab-label">会员</span>
      </router-link>
      <router-link class="mui-tab-item" to="/shopcar">
        <span class="mui-icon mui-icon-contact"><span class="mui-badge">0</span></span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link class="mui-tab-item" to="/tabbar-with-map">
        <span class="mui-icon mui-icon-gear"></span>
        <span class="mui-tab-label">搜索</span>
      </router-link>
    </nav>
  </div>
</template>
<script>
// import {add} from './calc.js';
  import {Toast} from 'mint-ui';
  // 负责到处.vue这个组件对象
  export default{
    data (){ //等价于es5中的data:function()
     return {}
    },
    methods:{
     
    },
    created(){

    }
  }

</script>

<style scoped>
  /*当前页面的css样式写在这里 其中scoped表示这里面写的css代码只在当前的组件中有效，不会影响到其他组件页面*/

</style>
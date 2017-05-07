<!--以后项目的根组件 -->
<template>
<!-- template里面主要放的是html元素 也就是html的页面结构 -->  
  <div>
    <span v-text='msg' class='red'></span>
    <button @click='add(1,2)'>add</button>
    <router-link to='login'>登录</router-link>
    <router-link to='/register'>注册</router-link>
    <!-- 路由占位符 -->
    <router-view></router-view>
    <mt-button @click='tip' type='danger' size=large>danger</mt-button> 
  </div>
</template>
<script>
// import {add} from './calc.js';
  import {Toast} from 'mint-ui';
  function add(x,y){console.log(x+y)}
  // 负责到处.vue这个组件对象
  export default{
    data (){ //等价于es5中的data:function()
      return {
        msg:'hello world'
      }
    },
    methods:{
      add,  //es6写法
      tip :function() {
        Toast('小呆比')
      }
    },
    created(){

    }
  }

</script>

<style scoped>
  /*当前页面的css样式写在这里 其中scoped表示这里面写的css代码只在当前的组件中有效，不会影响到其他组件页面*/
.red{
  color:red;
  /*background-color: red;*/
}
</style>
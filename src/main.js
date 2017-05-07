//1.0 导入vue核心包
import Vue from 'vue';
// 2.0 导入App.vue的vue对象
import App from './App.vue';
//3.0 
import vueRouter from 'vue-router';
//3.0.1
Vue.use(vueRouter);
//3.0.2
import login from './components/account/login.vue'
import register from './components/account/register.vue'
var router1 = new vueRouter({
  routes:[
      {path:'/login',component:login},
      {path:'/register',component:register}
  ]
});
//4.0 使用mint-ui
import 'mint-ui/lib/style.min.css'
import mintui from 'mint-ui';
//zai Vue中使用mintui
Vue.use(mintui);
//5.0 利用vue对象进行解析渲染
new Vue({
  el:'#app',
  router:router1,
  //render:function(create) {create(App)} //es5的写法
  render:c=>c(App)  // es6的写法 
})
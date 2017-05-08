  //1.0 导入vue核心包
import Vue from 'vue';
// 2.0 导入App.vue的vue对象
import App from './App.vue';
//3.0 
import vueRouter from 'vue-router';
//3.0.1
Vue.use(vueRouter);
//3.0.2
import home from './components/Home.vue';
import shopcar from './components/shopcar/car.vue';
import newslist from './components/news/newslist.vue';
var router1 = new vueRouter({
  linkActiveClass:'mui-active',
  routes:[
      {path:'/home',component:home},
      {path:'/shopcar',component:shopcar},
      {path:'/news/newslist',component:newslist}
  ]
});
//4.0 使用mint-ui
import 'mint-ui/lib/style.min.css';
import mintui from 'mint-ui';
//zai Vue中使用mintui
Vue.use(mintui);
//5.0 利用vue对象进行解析渲染
import '../statics/mui/css/mui.css';
//6.0 导入一个当前系统的全局基本样式
import '../statics/css/site.css'
// 7.0 将vue-resource在vue中绑定 自动在vue对象实例上注入一个$http对象
//就可以使用ajax代码
import vueResource from 'vue-resource';
Vue.use(vueResource);

// 8.0 定义一个全局过滤器实现日期的格式化
import moment from 'moment';
Vue.filter('datafmt',function(input,fmtstring){
  //用momentjs 实现日期格式化
  return moment(input).format(fmtstring);
});



new Vue({
  el:'#app',
  router:router1,
  //render:function(create) {create(App)} //es5的写法
  render:c=>c(App)  // es6的写法 
})
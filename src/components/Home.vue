<template>
  <div id="tmpl">
    <!-- 轮播图 -->
    <mt-swipe :auto="5000">
      <!-- <mt-swipe-item>1</mt-swipe-item> -->
      <mt-swipe-item v-for='item in list'>
        <img :src="item.img" alt="">
      </mt-swipe-item>
    </mt-swipe>
    <!-- 商品导航 -->
    <div class="mui-content">
            <ul class="mui-table-view mui-grid-view mui-grid-9">
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                  <router-link to="/news/newslist">
                    <span class="mui-icon mui-icon-home"></span>
                    <div class="mui-media-body">新闻资讯</div>
                  </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                  <router-link to="/photo/photolist">
                    <span class="mui-icon mui-icon-email"></span>
                    <div class="mui-media-body">图片分享</div>
                  </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                  <router-link to="/goods/goodslist">
                    <span class="mui-icon mui-icon-chatbubble"></span>
                    <div class="mui-media-body">商品购买</div>
                  </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                  <router-link to="/feedback">
                    <span class="mui-icon mui-icon-location"></span>
                    <div class="mui-media-body">留言反馈</div>
                  </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                  <router-link to="/video">
                    <span class="mui-icon mui-icon-search"></span>
                    <div class="mui-media-body">视频专区</div>
                  </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                  <router-link to="/callme">
                    <span class="mui-icon mui-icon-phone"></span>
                    <div class="mui-media-body">联系我们</div>
                  </router-link>
                </li>
               
            </ul> 
    </div>
  </div>
</template>
 <script>
  import { Toast } from 'mint-ui';
  import common from '../kits/common.js'
  export default{
    data(){
      return {
        list:[]
      }
    },
      created(){
        this.getimgs();
      },
      methods:{
        getimgs() {
          var url = common.apidomain+"/api/getlunbo"; 
          this.$http.get(url).then(function(response){
            var data = response.body;
            if(data.status !=0) {
              Toast(data.message);
              return;
            }
            console.log(data);
            this.list = data.message;
          })
        }
      }
  }
 </script>

 <style scoped>
  .mint-swipe{
    height: 300px;
  }
  .mint-swipe-item img {
    width: 100%;
  }
  .mint-swipe-item {
    background-color: greenyellow;
    width: 100%;
    height: 300px;
  }
 .mui-grid-view.mui-grid-9 {
    background-color: #fff;
    border: none;
 }
 .mui-grid-view.mui-grid-9 .mui-table-view-cell{
    border:none;
 }
 </style>
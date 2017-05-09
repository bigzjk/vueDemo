<template>
  <div id="tmpl">
    <div class="title">
      <h4 v-text="info.title"></h4>
      <p>{{info.add_time | datafmt('YYYY-MM-DD HH:mm:ss')}} {{info.click}}次浏览</p>
    </div>
    <div id="content" v-html="info.content">
     
    </div>

  </div>
</template>

<script>
import common from '../../kits/common.js'
  export default {
    data(){
      return {
        id:0,
        info:{
          
        }
      }
    },
    created(){
      this.id = this.$route.params.id;
      //console.log(this.id);
      var url =common.apidomain+ "/api/getnew/"+this.id;
      this.$http.get(url).then(function(response){
        var res = response.body;
        console.log(res);
        if(res.status !=0) {
           Toast(data.message);
           return;
        }
        this.info = res.message[0];
        console.log(this.info);
      })
    }

  }
</script>
<style scoped>
  .title h4{
    color: #0094ff;
  }
  .title p {
    color: rgba(0,0,0,0.5);
  }
  .title,#content {
    padding: 5px;
  }
</style>
<!--实训-->
<template>
	<div class="shixun">
    <div style="font-size: 50px;">
    {{init}}
    </div>
    <div class="name-frame">
      <div class="name-panel" v-for="(list,item) in nameList" :key="item">
        <span>{{list.name}}</span>
        <span>{{item}}</span>
      </div>
    </div>
	</div>
</template>

<script>
  import shixun from './shixun.js'
  export default {
    data() {
      return {
        init:"调用",
        reint:"",
        nameList:[
          {name:"刘华彬"},
          {name:"周跃"},
          {name:"叶国斌"},
          {name:"万超彦"}
        ],
      }
    },
    created(){//页面初始化调用
      this.onLoad();
    },
    methods:{
      onLoad(){
        shixun.TEST();
        console.log(shixun.name);
        // function(res)  简写成 res=>
        //var init="调用"
        shixun.asynGet(this.init,res=>{
          this.init=res;
        });
      },
      //function getdata(){
      //
      //}
      getData(){

      },
    }
  };
</script>

<style scoped>
  @import url("./shixun.css");
</style>

<!--前端第四课，by谢治权2020-04-08-->
<template>
	<div>
    <function_title title="前端第四课---vue的响应式机制/vue组件开发/vue路由"></function_title>
    <div class="frame">
      <div class="input-frame" v-for="(list,inp) in inputList" :key="inp">
        <span class="input-label">{{list.label}}</span>
        <input class="input-panel" v-model="list.value" />
      </div>
      <!-- <div class="btn-frame" @click="submit">
        <span>提交</span>
      </div> -->
      <submitBtn title="提交" @subMit="submit"></submitBtn>
    </div>
	</div>
</template>

<script>
  import function_title from '@/components/titlebar/function_title.vue';
  import submitBtn from '@/components/submitBtn.vue';//引入组件
  export default {
    components: {//注册组件
      function_title,
      submitBtn
    },
    created() {//初始化
      this.update();
    },
    data() {
      return {
        name:"名称",
        inputList:[//输入框集合
          {
            label:"名称",
            value:"",     //与input的value值相绑定
          },
          {
            label:"简称",
            value:"",
          },
          {
            label:"团队号",
            value:"",
          },
          {
            label:"官网",
            value:"",
          },
          {
            label:"营业地址",
            value:"",
          },
          {
            label:"联系电话",
            value:"",
          },
          {
            label:"纳税登记号",
            value:"",
          },
          {
            label:"银行账号",
            value:"",
          },
        ]
      }
    },
    methods:{
      update(){//3秒后改变name值为“简称”
        setTimeout(()=>{
          this.name="简称"
        },3000)
      },
      submit(){//提交,JSON.stringify将JSON对象转为string对象
        alert(JSON.stringify(this.inputList));
      }
    },
  };

</script>

<style lang="less" scoped>
 @import "shixun_4.css";
</style>

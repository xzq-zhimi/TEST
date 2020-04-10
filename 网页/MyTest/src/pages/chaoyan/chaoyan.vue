<template>
   <div>
     <div class="frame">
      <div class="panel">
        <div style="height: 30px;">VUE项目实训</div>
        <div class="fast">
          <router-link class="class-panel" style="height: 30px;" v-for="(list,cla) in classList" :key="cla" :to="list.to">{{list.class}}</router-link>
        </div>
      </div>
     </div>
   </div>
</template>

<script>
  export default {
    data() {
      return {
        classList:[
          {
            class:"第三节课",
            to:"/chaoyan/shixun_3"
          },
        ]
      }
    }
  };
</script>

<style lang="less" scoped>
  @import "index.less";
</style>

<template>
   <div>
     <div class="frame">
      <div class="panel">
        <div style="height: 30px;">VUE项目实训</div>
        <div class="fast">
          <router-link class="class-panel" style="height: 30px;" v-for="(list,cla) in classList" :key="cla" :to="list.to">{{list.class}}</router-link>
        </div>
      </div>

      <div class="student-frame">
       <router-link class="student-panel" to="chaoyan">超彦</router-link>
       <router-link class="student-panel" to="huabing">华彬</router-link>
       <router-link class="student-panel" to="zhouyue">周跃</router-link>
       <router-link class="student-panel" to="guobing">国斌</router-link>
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
            to:"shixun/shixun_3"
          },
          {
            class:"第四节课",
            to:"shixun/shixun_4"
          },
        ]
      }
    }
  };
</script>

<style lang="less" scoped>
  @import "index.less";
</style>

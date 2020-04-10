<!--功能标题-->
<template>
  <div>
    <div class="function_title">
      <div class="function_panel" v-show="title!=''">
        <span>{{title}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "function_title",
    props: {
      title: {
        type: String,
        default: ""
      }
    },
    data() {
      return {

      }
    }
  };
</script>

<style lang="less" scoped>
  .function_title {
    width: 100%;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .function_panel {
      min-width: 10px;
      height: 32px;
      clear: both;
      line-height: 36px;
      display: flex;
      font-size: 17px;
      padding-left: 2px;
      padding-right: 3px;
      box-sizing: border-box;
      border-bottom: 3px solid #F9644E;
      user-select:none;
      margin-left: 10px;
    }
  }
</style>

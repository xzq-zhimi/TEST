<template>
  <div>
    <div class="btn-frame" @click="submit">
      <span>{{title}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "subnitBtn",
    props: {
      title: {//声明一个title接收参数，
        type: String,
        default: ""
      }
    },
    data() {
      return {

      }
    },
    methods:{
      submit(){
        this.$emit("subMit");
      }
    }
  };
</script>

<style>
  .btn-frame{
    width: 100px;
    height: 30px;
    margin-top: 20px;
    background: #0074D9;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    color: #fff;
    line-height: 30px;
  }
</style>

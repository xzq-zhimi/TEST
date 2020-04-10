<template>
  <div>
    <router-view />
  </div>
</template>

<script>
  export default {
    name: 'App',
    created() { //onload页面初始化前
      this.getAgent();
    },
    data() {
      return {
        isWetch:null
      }
    },
    methods: {
      getAgent() {
        var ua = window.navigator.userAgent.toLowerCase();
        if (ua.match(/MicroMessenger/i) == 'micromessenger') {
          this.isWetch=true;
        } else {
          this.isWetch=false;
        }
      }
    }
  }
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
    out-line: none;
    color: #*****;
  }
</style>

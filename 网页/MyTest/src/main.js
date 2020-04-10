// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from "./router";
Vue.use(require('vue-wechat-title'));
Vue.config.productionTip = false;

Vue.prototype.Agent = null; //是否为微信浏览器
var ua = navigator.userAgent.toLowerCase(); //获取判断用的对象
if (ua.match(/MicroMessenger/i) == "micromessenger") {
  //在微信中打开
  Vue.prototype.Agent = true;
}
else{
  Vue.prototype.Agent = false;
}
console.log(Vue.prototype.Agent);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
});

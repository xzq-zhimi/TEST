import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);


import index from '@/pages/index/index.vue';
import chaoyan from '@/pages/chaoyan/chaoyan.vue';
import chaoyan_3 from '@/pages/chaoyan/shixun_3/shixun_3.vue';

import guobing from '@/pages/guobing/guobing.vue';
import huabing from '@/pages/huabing/huabing.vue';
import zhouyue from '@/pages/zhouyue/zhouyue.vue';
import shixun_3 from '@/pages/shixun/shixun_3/shixun_3.vue';
import shixun_4 from '@/pages/shixun/shixun_4/shixun_4.vue';


export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/', //
      name: '天泽云',
      component: index,
      meta:{
        title:'首页'
      }
    },
    {
      path: '/zhouyue', //邀请加入
      name: '天泽云邀请加入',
      component: zhouyue,
      meta:{
        title:'邀请加入'
      }
    },
    {
      path: '/huabing', //邀请加入
      name: '天泽云邀请加入',
      component: huabing,
      meta:{
        title:'邀请加入'
      }
    },
    {
      path: '/guobing', //邀请加入
      name: '叶国斌',
      component: guobing,
      meta:{
        title:'邀请加入'
      }
    },
    {
      path: '/chaoyan', //邀请加入
      name: '万超彦',
      component: chaoyan,
      meta:{
        title:'chaoyan'
      }
    },
    {
      path: '/chaoyan/shixun_3', //邀请加入
      name: '万超彦实训3',
      component: chaoyan_3,
      meta:{
        title:'shixun_3'
      }
    },
    
    {
      path: '/shixun/shixun_3', //邀请加入
      name: '前端第三课',
      component: shixun_3,
      meta:{
        title:'shixun_3'
      }
    },
    {
      path: '/shixun/shixun_4', //邀请加入
      name: '前端第四课',
      component: shixun_4,
      meta:{
        title:'shixun_4'
      }
    },
  ]
})

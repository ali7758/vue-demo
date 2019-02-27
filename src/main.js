// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router.config'
import store from './store/store'
Vue.config.productionTip = false
import 'animate.css'
import axios from 'axios'
import {VIEW_LOADING} from './store/types';


//拦截器
axios.interceptors.request.use(function (config) {
  // 请求发出之前，做点其他业务   显示loading....
  // config == 请求时配置
  store.dispatch(VIEW_LOADING,true)
  return config;
}, function (error) {
  // 集中处理一些错误配置 
  return Promise.reject(error);
});

// 响应拦截器
axios.interceptors.response.use(function (response) {
  //response == 返回的响应体  隐藏loading....
  store.dispatch(VIEW_LOADING,false)
  return response;
}, function (error) {
  return Promise.reject(error);
});

import loading from './loading/loading';
Vue.use(loading);


new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',

  router,
  store
})

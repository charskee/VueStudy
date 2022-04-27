/*
  该文件是整个项目的入口文件
*/ 

// 引入Vue 此处引入的是没有模板解析器的Vue文件  vue.runtime.esm.js
import Vue from 'vue'
// 引入App组件 他是所有组件的父组件
import App from './App.vue'
// 关闭Vue的生产提示
Vue.config.productionTip = false

// 创建Vue的实例对象
new Vue({
  //render: h => h(App), 
  //render 就是模板解析器  这里就是简写形式
  render:function(createElement){
    console.log('@@'+createElement);
    return createElement(App)
  }
}).$mount('#app') // el:'#app'

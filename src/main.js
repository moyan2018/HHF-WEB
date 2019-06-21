// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'

import store from './store.js'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/iconfont.css'
import '@/assets/css/style.css'

/**
 * 阻止启动生产消息。开发环境下，Vue 会提供很多警告来帮你对付常见的错误与陷阱。
 * 而在生产环境下，这些警告语句却没有用，反而会增加应用的体积。此外，有些警告检查还有一些小的运行时开销，这在生产环境模式下是可以避免的。
 */
Vue.config.productionTip = false;
/**
 * 引入element-ui框架
 * Vue.use注册插件。
 */
Vue.use(ElementUI);
/**
 * 使用Vue.component()方法注册全局组件。
 * 第一个参数是自定义元素名称，也就是将来在别的组件中使用这个组件的标签名称。
 * 第二个参数是将要注册的Vue组件。
 */
Vue.component('footer-copyright', {
  // template: '<p class="footer-msg">©CopyRight 2019-2088 鹏飞科技发展有限公司 版权所有 <a href="http://www.baidu.com" target="_blank">粤ICP备88888888号</a></p>'
});
/**
 * 全局方法 Vue.filter() 注册一个自定义过滤器,必须放在Vue实例化前面
 * filter是默认会传入当前的item，而且filter的第一个参数默认就是当前的item。
 */
Vue.filter('formatDateTime', function (value) {
  if (!value) return ''
  let date = new Date(value);
  let y = date.getFullYear() + '/';
  let mon = (date.getMonth() + 1) + '/';
  let d = date.getDate();
  return y + mon + d;
});
/**
 * 每个 Vue 应用都是通过用 Vue 函数创建一个新的 Vue 实例开始的：
 * 每个 Vue 实例在被创建时都要经过一系列的初始化过程——例如，需要设置数据监听、
 * 编译模板、将实例挂载到 DOM 并在数据变化时更新 DOM 等。同时在这个过程中也会运行一些叫做生命周期钩子的函数，这给了用户在不同阶段添加自己的代码的机会。
 */
new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
})

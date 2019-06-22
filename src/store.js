/**
 * Created by yqr on 2018/3/26.
 */
import Vue from 'vue'
import Vuex from 'vuex'

/**
 * vuex 是一个专门为vue.js应用程序开发的状态管理模式。vuex中，有默认的五种基本的对象：
 * state：存储状态（变量）
 * getters：对数据获取之前的再次编译，可以理解为state的计算属性。我们在组件中使用 $sotre.getters.fun()
 * mutations：修改状态，并且是同步的。在组件中使用$store.commit('',params)。这个和我们组件中的自定义事件类似。
 * actions：异步操作。在组件中使用是$store.dispath('')
 * modules：store的子模块，为了开发大型项目，方便状态管理而使用的。这里我们就不解释了，用起来和上面的一样。
 */
Vue.use(Vuex)

/*测试数据*/
const date = 'Mon Mar 24 2018 00:00:00 GMT+0800 (中国标准时间)'
const data = [
  {
    id: '1111',
    name: 'Allen',
    type: '员工',
    status: '已离职'
  },{
    id: '2222',
    name: 'Thomas',
    type: '司机',
    status: '在职'
  }
]

const state = {
  collapsed: false,
  topNavState: 'home',//对应left.js
  leftNavState: 'home'//对应home.vue
}

/*从本地存储读取数据*/
for(var item in state) {
  localStorage.getItem(item)? state[item] = JSON.parse(localStorage.getItem(item)): false;
}

export default new Vuex.Store({
  state
})

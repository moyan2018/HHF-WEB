import Vue from 'vue'
import Router from 'vue-router'
import LeftNav from '@/components/nav/leftNav.vue'
import Home from '@/views/home.vue'
import EnterpriseList from '@/views/enterprise/index.vue'
import EnterpriseAdd from '@/views/enterprise/add.vue'
import EnterpriseDetail from '@/views/enterprise/detail.vue'
import VehicleManage from '@/views/vehicle/index.vue'
import DeptManager from '@/views/dept/index.vue'
import NotFound from '@/components/404.vue'

// 懒加载方式，当路由被访问的时候才加载对应组件
const Login = resolve => require(['@/views/login'], resolve)

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/login',
      type: 'login',
      component: Login
    },
    {
      path: '*',
      component: NotFound
    },
    {
      path: '/',
      type: 'enterprise',
      name: 'enterprise',
      component: Home,
      redirect: '/enterprise/list',
      menuShow: true,
      children: [
        {
          path: '/enterpriseList',
          component: LeftNav,
          name: '企业管理',
          leaf: true, // 只有一个节点
          iconCls: 'el-icon-s-unfold', // 图标样式class
          menuShow: true,
          children: [
            { path: '/enterprise/list', component: EnterpriseList, name: '企业列表', menuShow: true }
          ]
        },
        {
          path: '/enterpriseAdd',
          component: LeftNav,
          name: 'enterpriseAdd',
          leaf: true, // 只有一个节点
          iconCls: 'el-icon-s-unfold',
          menuShow: true,
          children: [
            { path: '/enterprise/add', component: EnterpriseAdd, name: '企业添加', menuShow: true }
          ]
        },
        {
          path: '/enterpriseDetail',
          component: LeftNav,
          name: 'enterpriseDetail',
          leaf: true, // 只有一个节点
          iconCls: 'el-icon-s-unfold',
          menuShow: true,
          children: [
            { path: '/enterprise/detail', component: EnterpriseDetail, name: '企业详情', menuShow: true }
          ]
        },
      ]
    },
    {
      path: '/vehicleManager',
      type: 'enterprise',
      name: 'vehicle',
      component: Home,
      redirect: '/vehicle/list',
      menuShow: true,
      children: [
        {
          path: '/vehicleList',
          component: LeftNav,
          name: 'vehicleList',
          leaf: true, // 只有一个节点
          iconCls: 'iconfont icon-home', // 图标样式class
          menuShow: true,
          children: [
            { path: '/vehicle/list', component: VehicleManage, name: '车辆信息', menuShow: true }
          ]
        }
      ]
    },
    {
      path: '/deptManager',
      type: 'enterprise',
      name: 'dept',
      component: Home,
      redirect: '/dept/list',
      menuShow: true,
      children: [
        {
          path: '/deptList',
          component: LeftNav,
          name: 'deptList',
          leaf: true, // 只有一个节点
          iconCls: 'iconfont icon-home', // 图标样式class
          menuShow: true,
          children: [
            { path: '/dept/list', component: DeptManager, name: '部门信息', menuShow: true }
          ]
        }
      ]
    }

  ]
});

router.beforeEach((to, from, next) => {
  // console.log('to:' + to.path)
  if (to.path.startsWith('/login')) {
    window.localStorage.removeItem('access-user')
    next()
  } else if(to.path.startsWith('/register')){
    window.localStorage.removeItem('access-user')
    next()
  } else {
    let user = JSON.parse(window.localStorage.getItem('access-user'))
    if (!user) {
      next({path: '/login'})
    } else {
      next()
    }
  }
});

export default router

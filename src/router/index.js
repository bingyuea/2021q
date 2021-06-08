import Vue from 'vue/dist/vue.esm.js'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/debounce',
    name: 'JavaScript专题之跟着underscore学防抖',
    component: () => import('../views/debounce/debounce')
  },{
    path: '/throttle',
    name: 'JavaScript专题之跟着underscore学节流',
    component: () => import('../views/throttle/throttle')
  },{
    path: '/JavaScript专题之数组去重',
    name: 'JavaScript专题之数组去重 ',
    component: () => import('../views/JavaScript专题之数组去重/index')
  },{
    path: '/DFS和BFS',
    name: 'DFS和BFS',
    component: () => import('../views/DFS和BFS')
  },
  {
    path: '/keepalive',
    name: 'keepalive之基础用法',
    component: () => import('../views/keepAlive/index'),
  },
  {
    path: '/keepalive/lifeStyle',
    name: 'keepalive之lifeStyle',
    component: () => import('../views/keepAlive/lifeStyle'),
  },
  {
    path: '/keepalive/max',
    name: 'keepalive之max',
    component: () => import('../views/keepAlive/max'),
  },{
    path: '/keepalive/exclude',
    name: 'keepalive之exclude',
    component: () => import('../views/keepAlive/exclude'),
  },{
    path: '/keepalive/excludeAndInclude',
    name: 'keepalive之excludeAndInclude',
    component: () => import('../views/keepAlive/excludeAndInclude'),
  },
  {
    path: '/keepalive/route',
    name: 'keepalive之route',
    component: () => import('../views/keepAlive/route'),
    meta:{
      keepAlive: true // 不需要例举出需要被缓存组件名称
    }
  },
  {
    path: '/keepalive/routeFalse',
    name: 'keepalive之routeFalse',
    component: () => import('../views/keepAlive/routeFalse'),
    meta:{
      keepAlive: false
    }
  },
  {
    path: '/keepalive/name',
    name: 'keepalive之name',
    component: () => import('../views/keepAlive/name'),
    meta:{
      keepAlive: true
    }
  },
  {
    path: '/keepalive/functional',
    name: 'keepalive之functional',
    component: () => import('../views/keepAlive/functional'),
    meta:{
      keepAlive: true
    }
  },
  {
    path: '/slot/slot',
    name: 'slot基础用法',
    component: () => import('../views/slot/slot'),
  },{
    path: '/slot/slot之编译作用域',
    name: 'slot之编译作用域',
    component: () => import('../views/slot/slot之编译作用域'),
  },{
    path: '/slot/slot之默认内容',
    name: 'slot之默认内容',
    component: () => import('../views/slot/slot之默认内容'),
  },{
    path: '/slot/slot之具名插槽',
    name: 'slot之具名插槽',
    component: () => import('../views/slot/slot之具名插槽'),
  },{
    path: '/slot/slot之具名插槽缩写',
    name: 'slot之具名插槽缩写',
    component: () => import('../views/slot/slot之具名插槽缩写'),
  },{
    path: '/slot/slot之作用域插槽',
    name: 'slot之作用域插槽',
    component: () => import('../views/slot/slot之作用域插槽'),
  },{
    path: '/slot/slot之作用域插槽之独占默认插槽的缩写语法',
    name: 'slot之作用域插槽之独占默认插槽的缩写语法',
    component: () => import('../views/slot/slot之作用域插槽之独占默认插槽的缩写语法'),
  },{
    path: '/slot/slot之作用域插槽之解构插槽 Prop',
    name: 'slot之作用域插槽之解构插槽 Prop',
    component: () => import('../views/slot/slot之作用域插槽之解构插槽 Prop'),
  },{
    path: '/slot/slot之动态插槽名',
    name: 'slot之动态插槽名',
    component: () => import('../views/slot/slot之动态插槽名'),
  },{
    path: '/slot/slot其他示例',
    name: 'slot其他示例',
    component: () => import('../views/slot/slot其他示例'),
  },{
    path: '/slot/slot其他示例2',
    name: 'slot其他示例2',
    component: () => import('../views/slot/slot其他示例2'),
  },{
    path: '/v-model/model',
    name: 'model',
    component: () => import('../views/v-model/model'),
  },
  {
    path: '/test',
    name: 'test',
    component: () => import('../views/debounce/debounce.md')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

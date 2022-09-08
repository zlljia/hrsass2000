// 构建权限功能的文件
// 引入router
import router from './router'
// 引入vuex的仓库
import store from './store'
// 引入element里面的消息提示组件
import { Message } from 'element-ui'
// 引入发请求的进度条插件
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import { getToken } from '@/utils/auth' // get token from cookie
import getPageTitle from '@/utils/get-page-title'

// 不需要token也能访问的页面
const whiteRoutes = ['/login', '/404']
// 全局路由前置守卫
router.beforeEach(async (to, from, next) => {
  NProgress.start() // 开启进度条
  // 判断是否存在token
  if (store.getters.token) {
    // 存在token
    if (to.path === '/login') {
      // 如果访问的是登录页
      // 放行到主页
      next('/')
    } else {
      // 没有userId 证明还没有获取到用户信息
      if (!store.getters.userId) {
        await store.dispatch('user/getUserInfo')
      }
      // 直接放行
      next()
    }
  } else {
    // 不存在token 
    // 判断访问的是不是白名单路由
    if (whiteRoutes.includes(to.path)) {
      // 在白名单 直接放行
      next()
    } else {
      // 不是的话直接跳转登录页
      next('/login')
    }
  }
  NProgress.done() // 手动关闭一次进度条的问题
})

// 全局路由后置守卫
router.afterEach((to, from, next) => {
  NProgress.done() // 关闭进度条
})
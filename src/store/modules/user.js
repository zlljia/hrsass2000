import { getToken, setToken, removeToken } from '@/utils/auth'
// 引入登录接口 获取用户资料的接口 获取用户详情的接口
import { HRlogin, HRgetUserInfo, HRgetUserDetailById } from '@/api/user'

const state = {
  token: getToken(), // 设置token为共享状态，获取的时候就先从缓存获取
  userInfo: {}
}

const mutations = {
  setToken(state, token) {
    state.token = token // 将数据设置给vuex
    // 同步给缓存
    setToken(token)
  },
  removeToken(state) {
    state.token = null // 将vuex的数据置空
    removeToken() // 同步到缓存
  },
  // 设置用户信息
  setUserInfo(state, userInfo) {
    state.userInfo = userInfo
  },
  // 移除用户信息
  removeUserInfo(state) {
    state.userInfo = {}
  }
}

const actions = {
  async login(context, data) {
    // 调用api接口
    const result = await HRlogin(data) // 拿到token
    context.commit('setToken', result) // 设置token
  },
  // 获取用户资料信息
  async getUserInfo(context) {
    const result = await HRgetUserInfo()
    // 获取用户详情信息
    const baseInfo = await HRgetUserDetailById(result.userId)
    // 合并数据 用户信息数据
    const baseResult = { ...result, ...baseInfo }
    context.commit('setUserInfo', baseResult)
    return baseResult
  },
  // 退出登录
  logout(context) {
    // 清空token
    context.commit('removeToken')
    // 清空用户数据
    context.commit('removeUserInfo')
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}


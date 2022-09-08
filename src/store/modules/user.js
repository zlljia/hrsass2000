import { getToken, setToken, removeToken } from '@/utils/auth'
// 引入登录接口 获取用户资料的接口
import { HRlogin, HRgetUserInfo } from '@/api/user'

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
  // 获取用户资料
  async getUserInfo() {
    const result = await HRgetUserInfo()
    context.commit('setUserInfo', result)
    return result
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}


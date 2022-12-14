// 将token持久化存入cookie中
import Cookies from 'js-cookie'

const TokenKey = 'hrsass-ihrm-token'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

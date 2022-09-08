import request from '@/utils/request'

/* 
* 登录的接口
*/
export const HRlogin = (data) => {
  return request({
    url: '/sys/login',
    method: 'post',
    data
  })
}

/* 
* 获取用户信息的接口
*/
export const HRgetUserInfo = () => {
  return request({
    url: 'sys/profile',
    method: 'post'
  })
}

export function logout() {

}

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

/* 
* 根据用户id获取用户详细信息
*/
export const HRgetUserDetailById = (id) => {
  return request({
    url: `sys/user/${id}`,
    method: 'get'
  })
}

export function logout() {

}

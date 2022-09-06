import request from '@/utils/request'

/* 
* 登录的接口
*/
export const login = (data) => {
  return request({
    url: '/sys/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {

}

export function logout() {

}

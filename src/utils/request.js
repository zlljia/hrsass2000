import axios from 'axios'
// 引入信息提示组件
import { Message } from 'element-ui'
import store from '@/store'

const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_API, // 请求基础aip
    timeout: 5000
})
service.interceptors.request.use(config => {
    // 注入token
    if (store.getters.token) {
        config.headers['Authorization'] = `Bearer ${store.getters.token}`
    }
    return config
}, (error) => {
    Promise.reject(error)
})
service.interceptors.response.use((response) => {
    // axios默认加了一层data
    const { success, message, data } = response.data
    if (success) {
        return data
    } else {
        Message.error(message)
        return Promise.reject(new Error(message))
    }
}, (error) => {
    // 请求出错 提示错误信息
    Message.error(error.message)
    return Promise.reject(error)
})
export default service

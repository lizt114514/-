// axios基础封装
import axios from 'axios'
import { useUserStore } from '@/stores/userStore.js'
import { ElMessage } from 'element-plus'
import router from '@/router'

const httpInstance = axios.create({
    baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
    timeout: 5000
})

// 拦截器
httpInstance.interceptors.request.use(config => {
    const userStore = useUserStore()
    const token = userStore.userInfo.token
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
}, e => Promise.reject(e))

// axios响应式拦截器
httpInstance.interceptors.response.use(res => res.data, e => {
    // 统一错误提示
    ElMessage({
        type: 'warning',
        message: e.response.data.message
    })
    // 401 token处理
    if (e.response.status === 401) {
        const userStore = useUserStore()
        userStore.loginOut()
        router.push('/login')
    }
    return Promise.reject(e)
})

export default httpInstance
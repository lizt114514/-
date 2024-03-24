import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { lazyPlugin } from './directives'
import App from './App.vue'
import router from './router'
import { componentPlugin } from './components'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
// 引入初始化的样式文件
import '@/styles/common.scss'

const app = createApp(App)

app.use(createPinia().use(piniaPluginPersistedstate))
app.use(router)
app.use(lazyPlugin)
app.use(componentPlugin)
app.mount('#app')

// 定义全局指令


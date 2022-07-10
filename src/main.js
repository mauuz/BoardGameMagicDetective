import mitt from 'mitt'
import { createApp } from 'vue'
import App from './App.vue'
import router from '../router/index'

const app = createApp(App)
app.config.globalProperties.$bus = new mitt()
app.use(router)
app.mount('#app')

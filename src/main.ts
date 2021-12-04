import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'element-plus/dist/index.css'
import registerAppConfig from './useElement/index'
import echarts from './echarts/useEcharts'
const app = createApp(App)

app.use(router).use(registerAppConfig)
app.mount('#app')
app.config.globalProperties.$echarts = echarts

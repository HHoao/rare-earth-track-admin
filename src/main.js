import {createApp} from 'vue'
import App from './App'
import router from '@/router'
import store from './store'

import '@/styles/index.scss' // global css
import '@/assets/fonts/iconfont.css'
import icons from '@/icons'
import '@/permission.js'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'default-passive-events'
const app = createApp(App);

app.use(icons)
app.use(store)
app.use(ElementPlus)
app.use(router).mount('#app')

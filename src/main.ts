import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import router from './router'
import './mock/index'

const app = createApp(App).use(VueAxios, axios)

app.use(createPinia())
app.use(ElementPlus)
app.use(router)

app.mount('#app')

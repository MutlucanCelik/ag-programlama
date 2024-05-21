import 'jquery'
import '@/assets/vendor/bootstrap/js/bootstrap.bundle.min.js'
import '@/assets/js/sb-admin-2.js'
import '@/assets/css/sb-admin-2.css'
import '@/assets/vendor/fontawesome/css/all.min.css'


import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'



createApp(App).use(store).use(router).mount('#app')

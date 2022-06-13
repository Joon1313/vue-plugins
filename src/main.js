import { createApp } from 'vue'
import App from './App.vue'
import store from './plugins/store'

createApp(App).use(store).mount('#app')

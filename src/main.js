import './styles/index.css';

import { createApp } from 'vue';
import App from './app.vue';
import router from './router';


const vue = createApp(App)

vue.use(router)
vue.mount('#app')

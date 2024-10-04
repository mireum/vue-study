import { createApp } from 'vue'
import App from './App.vue'
import axios from "axios";

// 라우터
import router from "./router";

createApp(App).use(router).use(axios).mount('#app')

// axios 전역 설정
// createApp(App).config.globalProperties.axios = axios;

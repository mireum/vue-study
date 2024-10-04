import { createApp } from 'vue'
import App from './App.vue'
import axios from "axios";
import { createPinia } from 'pinia';

// 라우터
import router from "./router";

createApp(App).use(router).use(axios).mount('#app')

// axios 전역 설정
createApp(App).config.globalProperties.axios = axios;
// template에서 사용하기
// <!-- 컴포넌트 인스턴스 속성을 템플릿안에서 사용할때 예시 -->
// <h2>{{ $person.name }}</h2>

// // script에서 사용하기
// 만들어진 전역속성은 컴포넌트 인스턴스에서 사용이 가능하다!
// 그런데 Vue3의 경우 컴포넌트 인스턴스가 setup()라이프사이클 이후에 생성이 된다.
// 그래서 setup()에서는 사용이 불가하고, OptionsAPI에서 사용할 수 있다.
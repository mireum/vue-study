<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <div id="app">
    <img src="./assets/logo.png">
    <HelloWorld msg="Hello World!"/>
    <!-- 데이터 바인딩 -->
    <p> {{ price }} </p>
    <!-- 태그 속성 바인딩 -->
    <h4 :style="태그속성"> 내용 </h4>
  </div>
  <!-- 태그 반복문 v-for -->
  <div>
    <a v-for="숫자 in 10" :key="숫자">Home</a>
    <br />
    <a v-for="(alphabet, i) in ['a','b','c']" :key="i">Home</a>
  </div>

  <!-- 이벤트 핸들러 onClick => @click -->
  <div>
    <h4>{{ i }}</h4>
    <button @click="i++">더하기</button>
  </div>

  <!-- 조건문 v-if -->
  <div v-if="1 == 1">
    <p>조건문 True</p>
  </div>

  <!-- import export -->
  <p>a: {{ a }} b: {{ b }}</p>


</template>

<script>

import HelloWorld from './components/HelloWorld.vue'
import { a, b } from './components/a.js'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data(){
    return {
      price : 1000,
      태그속성 : 'color:red',
      i: 0,
      a, b,
      
    }
  },
  methods : { 
  increase(){ 
      this.i += 1 
    },
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

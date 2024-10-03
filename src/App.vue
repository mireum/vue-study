<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <div id="app">
    <img src="./assets/logo.png">
    <!-- <HelloWorld msg="Hello World!"/> -->
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

  <!-- 컴포넌트와 props 전달 -->
  <!-- 하위 component에 데이터를 전달하려면 상위 component에서는 :을 활용하여 데이터 전달이 가능 함
       하위 component에서는 props를 통해 데이터를 전달 받을 수 있음. -->
  <!-- 첫번째 방법: props 데이터 전달 -->
  <Props1 title="제목1" content="내용1" />
  <!-- 두번째 방법: props 객체 문법 -->
  <!-- 자식 컴포넌트가 객체인 경우 -->
  <Props2 title="제목2" content="내용2" />
  <!-- 부모 컴포넌트가 객체인 경우 -->
  <Props2 :title="post.title" :content="post.content" />
  <!-- 위의 방식대로 post.title을 보내면 자식 컴포넌트에서 업데이트가 불가하지만
       객체 post 자체를 보내면 업데이트가 가능하다. props.post.title은 변경 가능 -->
  <!-- <Props3 :post="post2" /> -->

  <!-- 하위 component에서 상위 component로 데이터를 전달하려면 커스텀 이벤트를 활용해야 함.
       커스텀 이벤트는 $emit으로 하위->상위 component로 데이터 전달할 수 있음 -->
  <!-- 커스템 이벤트와 데이터를 같이 보내고 싶다면 데이터를 수신받는 쪽에서 $event를 활용하면 됨. 
       $event에 데이터가 담겨 있음 -->
  <AbCd :propsData="data" @커스텀이벤트="console.log('커스텀이벤트 실행!'); console.log($event)" />

  <!-- 데이터 입력 -->
  <input v-model="inputData">
  <br />
  
  <!-- router 라우터 -->
  <!-- router-view 사이에 라우터가 들어가게 됨 -->
  <!-- router-link는 클릭 시 거기로 이동 -->
  <router-link to="/main">메인 컴포넌트로 gogo</router-link>
  <router-view></router-view>

  <!-- url 파라미터 -->
  <!-- /main/id의 id가 출력된다! -->
  {{$route.params.id}}
</template>

<script setup>
import { ref } from 'vue';
// import { reactive } from 'vue';
const post = ref({
  title: "제목2",
  content: "내용2"
});
// const post2 = reactive({
//   title: "제목"
// });
</script>

<script>

// import HelloWorld from './components/HelloWorld.vue'
import { a, b } from './components/a.js'
import Props1 from './components/Props1.vue'
import Props2 from './components/Props2.vue'
// import Props3 from './components/Props3.vue'
import AbCd from './components/AbCd.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    Props1,
    Props2,
    // Props3,
    AbCd,
  },
  data(){
    return {
      price : 1000,
      태그속성 : 'color:red',
      i: 0,
      a, b,
      inputData : 0,

    }
  },
  // 데이터 감시
  watch: {
    inputData() {
      // inputData가 변경될 때 실행할 코드
      console.log('입력 변경!');
    }
  },
  methods : { 
  increase(){ 
      this.i += 1 
    },
  },
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

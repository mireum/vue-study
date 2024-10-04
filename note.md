## npm run serve 로 실행

### 버전 확인
[vue-cli 버전확인]
vue --version

[vue 버전확인]
npm list vue

A.vue (x) AaB.vue (o)
단일 단어로 구성된 HTML 엘리먼트와의 충돌을 방지하기 위해 vue에서 제공하는 빌트인 컴포넌트를 제외한 컴포넌트의 이름은 항상 여러 단어로 구성되어야 한다.

component name "abc" should always be multi-word 에러가 나올 때 
export default {
  name: "이 이름만 고쳐도 에러는 뜨지 않는다"
}

## 페이지 이동은 vue-router

npm install vue-router@4

### vuex

참조
https://velog.io/@na_jeong/VueVuex-Store-%EC%82%AC%EC%9A%A9%EB%B2%95

vuex는 vue.js 애플리케이션을 위한 상태 관리 패턴과 라이브러리다.
상/하위/형제 컴포넌트끼리 데이터를 주고 받을 수 있다.
데이터를 Store라는 파일을 통해 관리하고 프로젝트 전체에 걸쳐 활용할 수 있게 해주는 방법이다.

% 상태 관리 패턴이란 %
앱의 규모가 커지면 단점이 발생한다.
1. props, emit이 거쳐야 할 컴포넌트가 많아진다.
2. EventBus를 사용한다고 하더라도 이벤트를 어디서 보내고 받았는지 데이터 흐름을 파악하기에 어렵다.

이런 문제점을 해결하기 위해 모든 데이터 통신을 한 곳에서 중앙 집중식으로 관리하는 것이 '상태 관리'이다.

<1> vue

1. state
프로젝트에서 공통으로 사용할 변수.
프로젝트 내 모든 곳에서 참조 및 사용 가능.
각 컴포넌트에서 동일한 값 사용 가능.
mutations를 통해서만 변경 가능.

2. mutaions
mutations의 주요 목적은 state를 변경시키는 것.
동기 처리를 한다. 위에서 순차적으로
commit('함수명', '전달인자')으로 실행.
mutations 내에 함수 형태로 작성한다.

3. actions
actions의 주요 목적은 mutations를 실행시키는 것.
비동기 처리를 한다.
dispatch('함수명','전달인자')로 실행시킬 수 있다.
actions 내에 함수 형태로 작성한다.
비동기 처리이기 때문에 주로 콜백 함수로 작성한다.

4. getters
각 components의 계산된 속성의 공통 사용 정의.
여러 components에서 동일한 computed가 사용될 경우 getters에 정의하여 공통으로 사용.
하위 모듈의 getters를 불러오기 위해서는 this.$store.getters["경로명/함수명"];

<2> pinia

mutations 없이 state, action, getters
❗❗src 아래에 stores 폴더 생성. 그 아래에 js파일 생성.
사용할 store의 이름은 use로 시작하는게 관례이다.
❗❗defineStore()에 들어가는 첫번째 파라미터는 애플리케이션 전체에서 사용할 수 있는 store의 고유한 id 값이라고 생각하면 된다. ( = 컴포넌트에서 꺼낼 때 쓸 이름!! )
❗❗store에서 this 키워드를 사용하여 상태나 메소드에 접근하기 원하는 경우 화살표함수가 아닌 일반함수로 써줘라!


## vue lifecycle

beforeCreate()
created()
beforeMount()
mounted()
beforeUpdate()
updated()
beforeUnmount()
unmounted()

## 디버깅

디버깅은 크롬 개발자도구에 Vue devtools
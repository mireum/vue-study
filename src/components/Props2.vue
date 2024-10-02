<template>
  <p>두번째 props 전달 {{ title }} {{ content }}</p>
</template>

<!-- Props 객체문법 선언 -->
<!-- type : String, Number, ... 모든 기본 생성자 또는 모든 사용자 정의 타입이 올 수 있다. 배열을 이용하여 여러개의 타입을 선언할 수도 있다. (ex. [Number, String]) -->
<!-- defalut : 속성값이 비어있거나 undefined를 전달 받는 경우 기본값을 선언할 수 있다. -->
<!-- required : 속성이 필수값이라면 true로 해서 설정할 수 있다. -->
<!-- validator : 속성값의 유효성 검사가 필요할 때 사용할 수 있다. -->

<!-- props 첫번째 방법과는 그냥 자식 컴포넌트가 어떻게 받느냐의 차이 -->
<script>
  export default {
    name: "SecondProps",
    props: {
      title: {
        type: String,
        default: 'news'
      },
      content: {
        type: String,
        required: true 
      }
    },
    setup(){
      return {}
    }
  }
</script>
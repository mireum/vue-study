<template>
  <div>
    <p>{{ a }} {{ b }}</p>
    <h4 @click="$emit('커스텀이벤트', a)">이거 누르면 App.vue(상위 component)로 이벤트 전달</h4>
  </div>
</template>

<script>
export default {
  name: "AbCd",
  props: {
    propsData : Object,
  },
  data() {
    return {
      a: '컴포넌트',
      b: '만들기'
    }
  },
  // mounted() {
  //   // 컴포넌트가 마운트될 때 props를 출력
  //   console.log('Props:', this.props);
  // }
}
</script>
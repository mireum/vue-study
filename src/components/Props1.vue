<template>
  <p>첫번째 props 전달 {{ title }} {{ content }}</p>
</template>

<script>
  export default {
    name: "FirstProps",
    props: ['title', 'content'],
  }
</script>
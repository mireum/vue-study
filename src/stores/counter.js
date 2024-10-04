import { defineStore } from "pinia";

export const useCounterStore = defineStore('counter', {
  // 상태
  state: () => ({
    counter: 0,
  }),
  // computed
  getters: {
    doubleCount: state => state.counter * 2,
  },
  // method
  // 상태값을 바꾸고 싶을 떄! 
  // 여기서 this 쓰는거 유의하기!
  actions: {
    increment() {
      this.counter++
    },
  },
})
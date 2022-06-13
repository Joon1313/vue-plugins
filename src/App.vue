<template>
  <h1>나는 플러그인에 제공/주입 된 커스텀Store 상태 값이에요</h1>
  <h2>{{count}}</h2>
  <div class="btn-wrap">
    <button @click="increment">증가</button>
    <button @click="decrement">감소</button>
    <button @click="init">초기화</button>

  </div>
</template>

<script setup>
import useStore from './plugins/useStore';

const store = useStore();

const count = store.state.count;
const init = store.mutation.init;
const increment = store.mutation.increment;
const decrement = store.mutation.decrement;
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  color:#fff;
}
body{
  background-color: black;
  color:#fff;
}
.btn-wrap {
  display: flex;
  justify-content: center;
  gap:20px
}
</style>

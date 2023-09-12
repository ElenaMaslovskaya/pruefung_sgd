<template>
  <div id="app">
    <NumberConverter />
  </div>
</template>

<script>
import NumberConverter from './components/NumberConverter.vue';

export default {
  name: 'App',
  components: {
    NumberConverter,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #121212;
  color: #ffffff;
  width: 100vw;
  height: 100vh;
  padding: 20px;
}
</style>

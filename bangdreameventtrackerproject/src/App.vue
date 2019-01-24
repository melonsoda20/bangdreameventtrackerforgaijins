<template>
  <div id="app">
    <BandoriTitle></BandoriTitle>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import BandoriTitle from './components/shared/vue/Header.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    BandoriTitle
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

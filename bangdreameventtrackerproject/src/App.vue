<template>
  <div id="app">
    <bandori-header></bandori-header>
    <bandori-tabs></bandori-tabs>
    <router-view></router-view>
  </div>
</template>

<script>
import App from './App.vue';

export default {
  name: 'app'
}
</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

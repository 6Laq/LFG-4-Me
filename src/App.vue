<template>
  <div id="app">
    <home />
    <router-view></router-view>
  </div>
</template>

<script>
import Home from './pages/Home'

export default {
  name: 'app',
  components: {
    Home
  }
}
</script>

<style>
  #app {
    display: flex;
    background-color: lightgrey;
    max-width: 100%;
    height: 100vh;
    overflow: hidden;
    font-family: 'Lato', sans-serif;
  }
</style>

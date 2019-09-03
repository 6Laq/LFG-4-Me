<template>
  <div id="app">
    <index />
  </div>
</template>

<script>
import Index from './pages/Index'

export default {
  components: {
    Index
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

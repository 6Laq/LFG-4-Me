<template>
  <div class="page">
    <Nav />
    <div class="container column">
      <div class="side-menu">
        <div class="side-image"></div>
      </div>
      <div class="main-area">
        <div>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from './Nav'

export default {
  name: 'Index',
  components: {
    Nav
  }
}
</script>

<style scoped>
.page {
  background-color: aliceblue
}
.container {
  background-color: burlywood
}
.side-menu {
  background-color: thistle
}
.main-area {
  background-color: blue
}
</style>

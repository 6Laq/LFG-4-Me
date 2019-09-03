<template>
  <section class="section">
    <Nav />
    <div class="container">
      <SideMenu class="side-menu" />
      <div class="main-area">posts</div>
      <div class="side-area">related pots</div>
    </div>
  </section>
</template>

<script>
import Nav from '../components/Nav'
import SideMenu from '../components/SideMenu'

export default {
  name: 'Index',
  components: {
    Nav,
    SideMenu
  }
}
</script>

<style scoped>
.section {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
}
.container {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  background-color: #386679;
  overflow: hidden;
  height: 100%;
  width: 1500px;
  min-width: 1232px;
}
.side-menu {
  background-color: thistle;
  height: 100%;
  width: 10%;
}
.main-area{
  background-color: lightcoral;
  height: 100%;
  width: 70%;
}
.side-area {
  background-color: green;
  height: 100%;
  width: 15%;
}
</style>

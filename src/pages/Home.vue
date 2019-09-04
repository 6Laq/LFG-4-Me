<template>
  <div class="page">
    <Nav />
    <div class="page-container">
      <SideMenu class="side-menu" />
      <Posts class="main-area"/>
    </div>
  </div>
</template>

<script>
import Nav from '../components/Nav'
import SideMenu from '../components/SideMenu'
import Posts from '../components/Posts'

export default {
  name: 'Home',
  data () {
    return {
      name: '',
    }
  },
  components: {
    Nav,
    SideMenu,
    Posts
  }
}
</script>

<style scoped>
.page-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #386679;
  overflow: hidden;
  height: 100%;
  width: 1500px;
  min-width: 1232px;
}
.side-menu {
  background-color: thistle;
  min-width: 15%;
}
.main-area{
  height: 100%;
  width:80%;
}
</style>

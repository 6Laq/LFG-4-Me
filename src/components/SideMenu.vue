<template>
  <div class="side-menu-box column">
    <div class="side-search">
      <a class="">Hello</a>
    </div>
    <div class="side-profile">
      <a class="">Hello</a>
    </div>
    <div class="side-friends">
      <a class="">Hello</a>
    </div>
    <div class="side-recent">
      <a class="">Hello</a>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.side-menu-box {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-content: center;
}
.side-search {
  background-color: aliceblue;
  width: 50px;
}
.side-profile {
  background-color: aliceblue;
  width: 50px;
}
.side-friends {
  background-color: aliceblue;
  width: 50px;
}
.side-recent {
  background-color: aliceblue;
  width: 50px;
}
</style>
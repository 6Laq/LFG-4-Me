<template>
  <div class="side-menu-box">
    <div class="side-search">
      <a class="">Search</a>
    </div>
    <div class="side-profile">
      <a class="">Profile</a>
    </div>
    <div class="side-friends">
      <a class="">Friends</a>
    </div>
    <div class="side-recent">
      <a class="">Recent</a>
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
}
.side-search {
  background-color: aliceblue;
  width: 100px;
  height: 50px;
}
.side-profile {
  background-color: aliceblue;
  width: 100px;
  height: 50px;

}
.side-friends {
  background-color: aliceblue;
  width: 100px;
  height: 50px;

}
.side-recent {
  background-color: aliceblue;
  width: 100px;
  height: 50px;

}
</style>
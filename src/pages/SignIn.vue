<template>
  <div class="page-container">
    <div class="sigin-image">
      
    </div>
    <div class="sign-up">
      <h3>Create a new account</h3>
      <input
        v-model="email" 
        type="text" 
        class="input" 
        placeholder="Email" 
        required 
      />
      <input 
        v-model="password"
        type="password" 
        class="input" 
        placeholder="Password" 
        required 
      />
      <button v-on:click="signUp" class="button">Sign Up!</button>
    </div>
  </div>
</template>

<script>  
  export default {
    name: 'signup',
    data () {
      return {
        email: '',
        password: ''
      }
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
.sigin-image {
  height: 100%;
  width: 25%
}
.sign-up {
  height: 100%;
  width: 25%
}
</style>
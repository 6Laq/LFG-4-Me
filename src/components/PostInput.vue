<template>
  <input
    type="text"
    class="input"
    :value="value"
    @input="$emit('input', $event.target.value)"
  >
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: '',
    }
  }
}
</script>

<style scoped>

.input {
  width: 100%;
  padding: 10px 10px;

}
</style>

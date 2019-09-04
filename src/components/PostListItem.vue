<template>
  <li>
    {{ post.message }}
    <button @click="$emit('remove', post.id)">
      X
    </button>
  </li>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  }
}
</script>
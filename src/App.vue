<template>
  <div 
    v-for="post in store.state.posts" 
    :key="post.id"
  >
    {{ post.title }}
  </div>
</template>

<script>
import { store } from './composables/Store'
export default {
  setup() {
    return { store }
  }
}
</script>

<style>

</style>
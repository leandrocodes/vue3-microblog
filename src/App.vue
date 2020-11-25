<template>
  <div class="cards">
    <card v-for="post in store.state.posts" :key="post.id">
      <template v-slot:title>
        {{ post.title }}
      </template>
      <template v-slot:content>
        {{ post.content }}
      </template>
      <template v-slot:actions>
        <controls :post="post" />
      </template>
    </card>
  </div>
</template>

<script>
import { store } from './composables/Store'
import card from './components/card.vue'
import controls from './components/controls.vue'
export default {
  components: {
    card,
    controls
  },
  setup() {
    return { store }
  }
}
</script>

<style scoped>
.cards {
  display: flex;
}
</style>

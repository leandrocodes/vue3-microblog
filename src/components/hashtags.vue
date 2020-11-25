<template>
  <span v-for="tag in hashtags" :key="tag"> #{{ tag }} </span>
</template>

<script>
export default {
  props: {
    hashtags: {
      type: Array
    }
  }
}
</script>

<style></style>

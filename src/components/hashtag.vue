<template>
  <span @click="setHashtag" class="hashtag"> #{{ hashtag }} </span>
</template>

<script>
export default {
  props: {
    hashtag: {
      type: String
    }
  },
  setup(props, ctx) {
    const setHashtag = () => {
      ctx.emit('setHashtag', props.hashtag)
    }

    return {
      setHashtag
    }
  }
}
</script>

<style scoped>
.hashtag {
  text-decoration: underline;
}

.hashtag:hover {
  color: cornflowerblue;
}
</style>

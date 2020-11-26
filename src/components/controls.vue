<template>
  <div>
    <button>
      {{ post.likes }}
    </button>
    <br />
    <hashtag
      v-for="tag in post.hashtags"
      :hashtag="tag"
      :key="tag"
      @setHashtag="setHashtag"
    ></hashtag>
  </div>
</template>

<script>
import hashtag from './hashtag.vue'
export default {
  components: {
    hashtag
  },
  props: {
    post: {
      type: Object
    }
  },

  setup(props, ctx) {
    const setHashtag = tag => {
      console.log(tag)
      ctx.emit('setHashtag', tag)
    }

    return {
      setHashtag
    }
  }
}
</script>

<style></style>

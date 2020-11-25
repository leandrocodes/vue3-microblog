<template>
  <div>
    <button>
      {{ post.likes }}
    </button>
    <hashtags :hashtags="post.hashtags"></hashtags>
  </div>
</template>

<script>
import hashtag from './hashtags.vue'
export default {
  components: {
    hashtags
  },
  props: {
    post: {
      type: Object
    }
  },
  setup(props) {
    console.log(props.post.title)
  }
}
</script>

<style></style>

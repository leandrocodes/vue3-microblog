import { reactive } from 'vue'

class Store {
  constructor() {
    this.state = reactive({
      posts: [
        {
          id: 1,
          title: 'Post',
          content: 'A post'
        }
      ]
    })
  }
}

export const store = new Store()

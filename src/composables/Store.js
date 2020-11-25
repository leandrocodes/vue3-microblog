import { reactive } from 'vue'

class Store {
  constructor() {
    this.state = reactive({
      posts: [
        {
          id: 1,
          title: 'Learning Vue 3',
          content: 'Using composition API and Vite',
          hashtags: [
            'vue',
            'js',
            'composition api'
          ],
          likes: 32
        }
      ]
    })
  }
}

export const store = new Store()

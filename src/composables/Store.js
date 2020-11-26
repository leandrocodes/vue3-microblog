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
        },
        {
          id: 2,
          title: 'Learning Typescript',
          content: 'Learning Typescript with Cod3r cursos',
          hashtags: [
            'ts',
            'js',
            'typescript'
          ],
          likes: 32
        },
        {
          id: 3,
          title: 'Learning Flutter',
          content: 'Learning Dart and Flutter with Academind',
          hashtags: [
            'google',
            'flutter',
            'mobile'
          ],
          likes: 32
        }
      ]
    })
  }
}

export const store = new Store()

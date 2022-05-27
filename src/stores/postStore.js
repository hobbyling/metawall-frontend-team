import { defineStore } from 'pinia'
import router from './../router/router'

export const usePostStore = defineStore('postStore', {
  state: () => {
    return {
      posts: [],
      postingData: {
        _id: '',
        content: '',
        image: []
      }
    }
  },
  actions: {
    async patchPosts(data) {
      this.posts.length = 0
      Object.assign(this.posts, data)
      console.log(this.posts)
    },
    patchPostingData(data) {
      Object.assign(this.postingData, data)
    }
  }
})
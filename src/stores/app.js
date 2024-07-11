// Utilities
import { defineStore } from 'pinia'

export const bookStore = defineStore('app', {
  state: () => ({
      books: []
  }),
  getters: {
      getFavorite: (state) => state.books.filter((book) => book.favorite), 
  },
  actions: {
    updateFavorite(isbn, favorite) {
      this.books.find((book) => book.isbn == isbn).favorite = favorite;
    },

    deleteBook(isbn){
      const ind = this.books.indexOf(this.books.find((book) => book.isbn == isbn));
      if (ind != -1){
        this.books.splice(ind, 1);
      }
    }
  }
})

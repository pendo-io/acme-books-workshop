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

    setBooks(books) {
      this.books = books;
    },
    
    getFromISBN (isbn){
      return this.books.find((book) => book.isbn == isbn)
    },

    editBook(isbn, updatedBook){
      this.books.find((book) => book.isbn == isbn) = updatedBook;
    },

    deleteBook(isbn){
      this.books.splice(this.books.indexOf(this.books.find((book) => book.isbn == isbn)), 1);
    }
  }
})

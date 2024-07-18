import { fetchBooks, validateBook } from '@/services/api.service';
import { defineStore } from 'pinia';

export const useBookStore = defineStore('book', {
  state: () => ({
    books: [],
  }),
  getters: {
    getFavoriteBooks: (state) => state.books.filter((book) => book.favorite),
    getBookByIsbn: (state) => (isbn) => state.books.find((book) => book.isbn === isbn),
  },
  actions: {
    async loadBooks() {
      this.books = await fetchBooks()
    },
    createBook(newBook) {
      validateBook(newBook);
      this.books.push(newBook)
    },
    updateBook(isbn, updatedBook) {
      validateBook(updatedBook);
      const index = this.books.findIndex((book) => book.isbn === isbn)
      this.books[index] = updatedBook
    },
    deleteBook(isbn) {
      this.books = this.books.filter((book) => book.isbn !== isbn)
    },
  },
})

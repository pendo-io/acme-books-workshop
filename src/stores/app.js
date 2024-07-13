// Utilities
import { defineStore } from 'pinia'

export const bookStore = defineStore('app', {
  state: () => ({
      books: []
  }),
  getters: {
      getFavorite: (state) => state.books.filter((book) => book.favorite),
      categories: (state) => [...new Set(state.books.flatMap(book => book.categories).filter(value => value !== undefined && value !== ''))].sort((a, b) => a.localeCompare(b))
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
    },

    makeDatesActuallyReadableWithoutExactTimesThatTheyWerePublishedBecauseThatsJustUnrealisticNoOneKnowsTheExactTimeAtWhichABookWasPubishedItDoesntMakeAnySense(){
      this.books.forEach(book => {
        if (book.publishedDate){
          book.publishedDate = book.publishedDate.substring(0, 10);
          console.log(book.publishedDate);
        }
      });
    },

    isUnique(isbn){
      return !(typeof this.books.find((book) => book.isbn == isbn) === 'object')
    }
  }
})

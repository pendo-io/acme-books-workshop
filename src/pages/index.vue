<!-- The template is where you can define the structure of the component using html-->
<template>
  <div class="home">
      <v-img
        height="150"
        width="250"
        src="@/assets/logo.png"
      />

      <h1>Welcome to Books</h1>
      <br>
      <h3>Your favorites:</h3>
      <br>

      <div class="cards-container">
        <book-card
          v-for="book in favoriteBooks"
          :key="book.isbn"
          :isbn="book.isbn"
          :title="book.title"
          :authors="book.authors.join(', ')"
          :img-src="book.thumbnailUrl"
          :short-description="book.shortDescription"
          :long-description="book.longDescription"
          :unfavorite="unfavorite"
          />
      </div>
      <v-card>
        <v-btn @click="showAdd = true">Add Favourites</v-btn>
      </v-card>

      <v-dialog v-model="showAdd">
        <v-card>
          <v-card-title>Add Favourites</v-card-title>
          <v-text-field
            v-model="search"
            label="Search by ISBN, Title, or Author..."
            variant="outlined"
            hide-details
            single-line
            clearable
            ref="searchField"
            @keydown.enter="enterFavorite"
            prepend-inner-icon="mdi-magnify"/>

          <v-data-table :items="[{}, ...allBooks]" :search="search" :headers="headers" items-per-page="1" show-items-per-page="false" hide-default-footer hide-default-header>
            <template v-slot:item.authors="{ item }">
                {{ toArray(item.authors) }}
            </template>
            <template v-slot:item.favorite="{ item }">
                <v-btn 
                v-if="item.title"
                @click="favoriteBook(item)"
                ref="favoriteButton"
                >Add Favourite</v-btn>
              </template>
          </v-data-table>
          <v-btn @click="showAdd = false">Close</v-btn>
        </v-card>
      </v-dialog>
      
  </div>
</template>


<script setup>
import { bookStore } from '@/stores/app';
import { ref } from 'vue';

const store = bookStore();
store.makeDatesActuallyReadableWithoutExactTimesThatTheyWerePublishedBecauseThatsJustUnrealisticNoOneKnowsTheExactTimeAtWhichABookWasPubishedItDoesntMakeAnySense();

const showAdd = ref(false);

const favoriteBooks = ref([]);
favoriteBooks.value = store.getFavorite;

const allBooks = ref([])
allBooks.value = store.books;
const search = ref('');
const searchField = ref(null);
const favoriteButton = ref(null);

const headers = [{title: 'ISBN', key: 'isbn'}, 
                 {title: 'Title', key: 'title'},
                 {title: 'Authors', key: 'authors'}, 
                 {title: 'Favourite', key: 'favorite'}]

function unfavorite(isbn) {
  store.updateFavorite(isbn, false);
  favoriteBooks.value = store.getFavorite;
}

const enterFavorite = () => {
  favoriteBook(favoriteButton.value.$el.click());
}

const favoriteBook = (theItem) => {
    store.updateFavorite(theItem.isbn, true)
    favoriteBooks.value = store.getFavorite;
    search.value = "";
    searchField.value.focus();
}

const toArray = (stringIn) => {
    if (Array.isArray(stringIn)){
    try{ return stringIn.join(", "); } 
    catch { return "" }
    }
    else return stringIn;
}

const sequence = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a", "Enter"]
var ind = 0;

document.addEventListener('keydown', (event) => {
  if (event.key == sequence[ind]) ind ++;
  else ind=0;
  if (ind == 11) store.books.forEach((book) => {book.thumbnailUrl = "https://media.tenor.com/o656qFKDzeUAAAAM/rick-astley-never-gonna-give-you-up.gif";});
});

</script>

<style scoped>
.home {
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 64px;
}

</style>

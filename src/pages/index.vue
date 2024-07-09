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
        <!-- Step 2: use the book-card component here -->
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
  </div>
</template>

<!-- The script setup is where the logic goes.
 This is where you can define variables and functions that will be used in the template -->
<script setup>
import { bookStore } from '@/stores/app';
import { ref } from 'vue';

const store = bookStore();

const favoriteBooks = ref([]);

favoriteBooks.value = store.getFavorite;

function unfavorite(isbn) {
  store.updateFavorite(isbn, false);
  favoriteBooks.value = store.getFavorite;
}

</script>

<!-- The style tag is where you can define styles that will only apply to this component -->
<style scoped>
.home {
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 64px;
}

.cards-container {
  /* Add styles here */
}
</style>

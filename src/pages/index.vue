<!-- The template is where you can define the structure of the component using html-->
<template>
  <div class="home">
      <v-img
        height="150"
        width="250"
        src="@/assets/logo.png"
      />

      <!-- Step 1: Change the title and save the file. -->
      <h1>Welcome to Acme Books</h1>

      <div class="cards-container">
        <!-- Step 2: Add the <book-card/> component here. -->
        <book-card
          class="card"
          v-for="book in favoriteBooks"
          :key="book.isbn"
          :title="book.title"
          :pageCount="pageCount(book)"
          :shortDescription="shortDescription(book)" />
      </div>
  </div>
</template>

<!-- The script setup is where the logic goes.
 This is where you can define variables and functions that will be used in the template -->
<script setup>
import { useBookStore } from '@/stores/bookStore';

const bookStore = useBookStore();
const favoriteBooks = bookStore.getFavoriteBooks;

// Step 3: Define your functions here.
const pageCount = (book) => {
  return `${book.pageCount} pages`;
};

const shortDescription = (book) => {
  return book.shortDescription;
};

</script>

<!-- The style tag is where you can define styles that will only apply to this component -->
<style scoped>
.home {
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 64px;
  background-color: #273043;
  color: #EFF6EE;
}

/* Step 4: Add styles for the cards-container here. */
.cards-container {
   /* Add styles here */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
}

.card {
  background-color: #9197AE;
  color: #0C345A;
  border-color: #EFF6EE;
  border-width: 2px;
}

</style>

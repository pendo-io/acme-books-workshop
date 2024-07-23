<!-- The template is where you can define the structure of the component using html-->
<template>
  <div class="home">
      <v-img
        height="150"
        width="250"
        src="@/assets/logo.png"
      />

      <h1>Welcome to Acme Books</h1>

      <div class="cards-container">
        <!-- Step 2: use the book-card component here -->
      </div>
  </div>
</template>

<!-- The script setup is where the logic goes.
 This is where you can define variables and functions that will be used in the template -->
<script setup>
import { useBookStore } from '@/stores/bookStore';

const bookStore = useBookStore();
const favoriteBooks = bookStore.getFavoriteBooks;
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

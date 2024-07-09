<template>
    <div class="all-books">
        <v-img
            height="150"
            width="250"
            src="@/assets/logo.png"
        />

        <h1>Welcome to Books</h1>
        <br>
        <h3>All Books:</h3>
        <br>
        <v-data-table :items="allBooks" :headers="headers">
            <template v-slot:item.authors="{ item }">
                {{ toArray(item.authors) }}
            </template>
            <template v-slot:item.categories="{ item }">
                {{ toArray(item.categories) }}
            </template>
            <template v-slot:item.publishedDate="{ item }">
                {{ toDate(item.publishedDate) }}
            </template>
            <template v-slot:item.favorite="{ item }">
                <v-checkbox 
                v-model="item.favorite"
                @click="favoriteBook(item)"
                />
            </template>
        </v-data-table>
        <!-- add the vuetify data table component here! -->
    </div>
</template>


<script setup>
import { getBooks, updateBook } from '@/services/api.service';
const allBooks = ref([]);

getBooks().then((books) => {
  allBooks.value = books;
});

const headers = [
    {
        title: "ISBN",
        key: "isbn" 
    },

    {
        title: "Title",
        key: "title"
    }, 

    {
        title: "Authors",
        key: "authors",
    },
    {
        title: "Published Date",
        key: "publishedDate"
    },
    {
        title: "Categories",
        key: "categories"
    },
    {
        title: "favorite",
        key: "favorite"
    }
]

const toArray = (stringIn) => {
    try{ return Array.from(stringIn).join(", "); } 
    catch { return "" }
}

const toDate = (stringIn) => {
    try { return stringIn.substring(0, 10); } 
    catch { return ""; }
};

const favoriteBook = (theItem) => {
    console.log(theItem.isbn);
    updateBook(theItem.isbn, {favorite: !theItem.favorite}); // ERROR? returns Error: Short description must be a string [if no short description given]; else: returns TypeError: Cannot read properties of undefined (reading 'catch')
}


</script>

<style scoped>
.all-books {
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 64px;
}


</style>

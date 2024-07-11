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
        <v-row>
            <v-col>
                <v-btn class="mt-4" @click="newBook">New Book</v-btn>
            </v-col>
            <v-col>
                <v-text-field
                    v-model="search"
                    label="Search by ISBN, Title, Authors, Published Date, or Category..."
                    variant="outlined"
                    hide-details
                    single-line
                    width="143vh"
                    class="ma-2"/>
            </v-col>
            <v-col><v-spacer/></v-col>
        </v-row>
        <v-data-table :items="allBooks" :headers="headers" :search="search" @click:row="handleClick">
            <template v-slot:item.delete="{ item }">
                <v-btn flat @click="deleteBookFunc(item)">🗑</v-btn>
            </template>
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

        <v-dialog v-model="detailsDialog" width="500px">
            <v-card>
                <v-row class="ma-2">
                    <v-col cols="8">
                        <v-textarea label="Title" class="title" v-model="details.title" variant="plain" dense hide-details rows="1"/>
                        <v-textarea label="Authors" class="authors" v-model="details.authors" variant="plain" dense hide-details rows="2" @change="reformatAuthors(details)"/>
                    </v-col>
                    <v-col>
                        <v-card-text class="mr-n10" style="font-size: 1.2em; cursor: pointer;" @click="deleteBookFunc(details)">🗑</v-card-text>
                    </v-col>
                    <v-col>
                        <v-card-text class="ml-n6" style="font-size: 1.2em; cursor: pointer;" @click="updateFavoriteHeart(details)">{{ favoriteButton }}</v-card-text>
                    </v-col>
                </v-row>
                <v-row class="mt-3">
                    <v-col class="ml-7" cols="3">
                        <v-img :src="details.thumbnailUrl" height="140px" width="112px" />
                    </v-col>
                    <v-col cols="4">
                        <v-card-text class="my-n4">ISBN: </v-card-text>
                        <v-card-text class="my-n4">Page Count: </v-card-text>
                        <v-card-text class="my-n4">Published: </v-card-text>
                        <v-card-text class="my-n4">Categories: </v-card-text>
                        <v-card-text class="my-n4">Thumbnail: </v-card-text>
                    </v-col>
                    <v-col class="my-n3">
                        <v-text-field single-line label="ISBN" class="mt-n3 details mx-n10" v-model="details.isbn" variant="plain" dense hide-details/>
                        <v-text-field single-line label="PageCount" class="mt-n3 details mx-n10" v-model="details.pageCount" variant="plain" dense hide-details/>
                        <v-text-field single-line label="Published" class="mt-n3 details mx-n10" v-model="details.publishedDate" variant="plain" dense hide-details/>
                        <v-text-field single-line label="Categories" class="mt-n3 details mx-n10" v-model="details.categories" variant="plain" dense hide-details/>
                        <v-text-field width="170px" single-line label="Thumbnail URL" class="mt-n3 details mx-n10 truncate-text" v-model="details.thumbnailUrl" variant="plain" dense hide-details/>
                    </v-col>
                </v-row>
                <v-textarea :label="labelDescription" class="mx-5" v-model="detailsDescription" variant="plain" dense hide-details @change="updateDetailsDescription(details)"/>
                <v-btn class="mt-4" @click="updateDescription(details)">{{ detailsDescriptionValue }}</v-btn>

                <v-btn class = "my-2" @click="detailsDialog = false">Save & Close</v-btn>
            </v-card>
        </v-dialog>
    </div>
</template>


<script setup>
import { bookStore } from '@/stores/app';

const store = bookStore();

const search = ref('');
const detailsDialog = ref(false);

const allBooks = ref([]);
allBooks.value = store.books;

const details = ref({});
const detailsDescription = ref();
const detailsDescriptionValue = ref();
const favoriteButton = ref();
const labelDescription = ref();

const headers = [
    {
        title:"",
        key: "delete"
    },

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
        title: "Favourite",
        key: "favorite"
    }
]

const toArray = (stringIn) => {
    if (Array.isArray(stringIn)){
    try{ return stringIn.join(", "); } 
    catch { return "" }
    }
    else return stringIn;
}

const toDate = (stringIn) => {
    try { return stringIn.substring(0, 10); } 
    catch { return stringIn; }
};

const favoriteBook = (theItem) => {
    store.updateFavorite(theItem.isbn, !theItem.favorite)
}

const handleClick = (value, row) => {
    if (!(value.target.type == "checkbox") && !(value.target.closest("button"))){
        details.value = row.item;
        detailsDialog.value = true;
        detailsDescription.value = row.item.shortDescription;
        detailsDescriptionValue.value = "Show Long Description";
        labelDescription.value = "Short Description";
        if (row.item.favorite) favoriteButton.value = "❤";
        else favoriteButton.value = "♡";
    }
}

const newBook = () => {
    details.value = {isbn: "", title: "", pageCount: "", publishedDate: "", thumbnailUrl: "", shortDescription: "", longDescription: "", authors: [], categories: [], favorite: false}
    detailsDialog.value = true;
    detailsDescription.value = "";
    detailsDescriptionValue.value = "Show Long Description";
    labelDescription.value = "Short Description";
    favoriteButton.value = "♡";
    store.books.push(details.value);
    allBooks.value = store.books;
}

const updateFavoriteHeart = (details) => {
    favoriteBook(details);
    if (favoriteButton.value == "❤") favoriteButton.value = "♡";
    else favoriteButton.value = "❤";
}

const updateDescription = (details) => {
    if (details.shortDescription == detailsDescription.value) {
        detailsDescription.value = details.longDescription;
        detailsDescriptionValue.value = "Show Short Description";
        labelDescription.value = "Long Description";
    }
    else {
        detailsDescription.value = details.shortDescription;
        detailsDescriptionValue.value = "Show Long Description"
        labelDescription.value = "Short Description";
    }
}

const reformatAuthors = (details) => {
    details.authors = details.authors.split(", ");
}

const updateDetailsDescription = (details) => {
    if (detailsDescriptionValue.value == "Show Short Description") details.longDescription = detailsDescription.value;
    else details.shortDescription = detailsDescription.value;
}

const deleteBookFunc = (details) => {
    store.deleteBook(details.isbn);
    detailsDialog.value = false;
}
</script>

<style scoped>
.all-books {
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 64px;
}

:deep(.title .v-input__control .v-field__input) {
  font-size: 23px;
  font-weight: bold;
}

:deep(.authors .v-input__control .v-field__input) {
  font-size: 14px;
  color: lightgray;
}

:deep(.details .v-input__control .v-field__input) {
  font-size: 12px;
}

:deep(.truncate-text .v-input__control .v-input__slot .v-text-field__slot){
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>

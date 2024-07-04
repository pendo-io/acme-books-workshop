# Step 3: List all the books in a table

## a) Add table component

In this section, we will be adding a list of all books to the `all-books.vue` page, using a [vuetify data table](https://vuetifyjs.com/en/components/data-tables/basics/). Similar to the book card, component, we will add the component using kebab-case naming standard, by adding the following to the template:
```
<v-data-table ... />
```
Make sure to read through the documentation of the component to familiarise yourself with the usage, and code examples to make implementing this part easier!

To get our books data from the `books.json` file, we will use the api service provided (`api.service.js`) to fetch the books. Import the `getBooks` function into the component script setup, and set the returned value to a const that we can use in the template, which should look like:
```
const allBooks = getBooks();
```
We will need to select the column headers that we want to display, give them a title, and a key to identify the correct row in our book object. For example, if we have a book data object that is structured like:
```
      {
        "isbn": "1933988673",
        "title": "Unlocking Android",
        "pageCount": 416,
        ...
      },
```
and we wanted to choose `pageCount` as a table column, we would add this to our headers like:
```
const headers = [
  {
    title: 'Page Count' //displayed column title,
    key: 'pageCount' // book object attribute
  },
  ... //rest of the chosen headers
]
```

Now we have defined our book data and selected headers, we can add these as props to the vuetify component:
```
<v-data-table
  :items="allBooks"
  :headers="headers" />
```


## b) Add at least one of the following features to the table

### Search
Search is a common filtering method, which will only display rows that match/contain a specified search query. the vuetify data table component comes with a built `search` prop, in which you can provide some text string (usually typed into an input), and your table will be automatically filtered. See more info and an example here:
https://vuetifyjs.com/en/components/data-tables/data-and-display/#search

### Pagination
Pagination is a techinique used to divide large sets of data into smaller, more manageable pages. Instead of displaying all possible rows for your data table all at once, we can break these down into discrete pages, allowing users to navigate through the rows, page by page. Vuetify data table has an`itemsPerPage` prop, to define how long each page should be, and a `v-model:page` binding to signify which number 'page' should be currently displayed. See more info, and an example with dynamic changing of pages here: 
https://vuetifyjs.com/en/components/data-tables/data-and-display/#pagination-examples

### Column sorting

Users may want to sort rows by a specific column value, to organise the data in either an ascending or descending order. For example, if you were to sort a table in descending order by the 'Created At' column, it would show the most recently created rows at the top, and the oldest created rows at the bottom. This functionality makes the user experience more interactive, user-freindly and efficient. See examples of column sorting here:
https://vuetifyjs.com/en/components/data-tables/data-and-display/#sorting-examples

### Filtering by category

Add buttons to filter books by category


<hr style="margin-top: 32px">
<div style="display: flex; justify-content: space-between; margin-top: 16px; font-weight: bold; font-size: 16px">
  <span><a href="./docs/tasks/step-2.md">← Previous Step</a></span>
  <span><a href="README.md">🏠 Home</a></span>
  <span><a href="./docs/tasks/step-4.md">Next Step →</a></span>
</div>

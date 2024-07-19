# Step 4: Dynamically update the books displayed on the homepage

## a) Add the checkbox component to the table

Add a checkbox to the vuetify table using the `item-value` prop
(https://vuetifyjs.com/en/components/data-tables/data-and-display/#selection-examples).
The selected values should be the books marked as favorite.

The value of the selected items can be access through the `v-model` prop. The array consists of the values set using the item-value prop, so you will need to add the `return-object` prop as well. See the example: https://vuetifyjs.com/en/components/data-tables/data-and-display/#selected-values.

When you check or uncheck a checkbox these selected items will change. You should use the `updateBook` action in the Pinia `bookStore` to update the books by setting and un-setting the favorites field when a book is checked and unchecked on the table.

## b) Unfavorite a book from the homepage

For each book card component in the list of favorite books on the homepage, add a button so that you can unfavorite the book. Use the `updateBook` action again and you can use a vuetify button component if you wish (https://vuetifyjs.com/en/components/buttons/).

## c) Favorite a book from the homepage

Add a button to the homepage that opens a drawer or modal that allows you to favorite a book.

## d) Edit a books details

Add a way for a user to edit a books details (from the homepage and from the table). Use the `updateBook` action in the store. Include a way to remove a book from your library list using the `deleteBook` store action.

<hr style="margin-top: 32px">
<div style="display: flex; justify-content: space-between; margin-top: 16px; font-weight: bold; font-size: 16px">
  <span><a href="./docs/tasks/step-3.md">← Previous Step</a></span>
  <span><a href="README.md">🏠 Home</a></span>
  <span></span>
</div>

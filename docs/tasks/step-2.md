# Step 2: Update the homepage

Each book stored in `/data/books.json` has a favorite field that, if true, marks that book as a favorite book. In this step you will display those favorite books on the homepage.

## a) Add the book card component to the homepage

Open `/src/components/BookCard.vue` and have a look at it, it is a simple vue component with a template, script and style section. The template is where you structure your component using html. The script is where the logic goes using javascript, inside the script you can also define `props` (properties) which allow dynamic variables to be passed into the component. Finally there is a style section where you define the styles for that component using css.

The BookCard component is currently not being used by the homepage. Open `src/pages/index.vue` (the homepage component) to add it.

To add the component use a tag that has the components name in kebab case. In this case we want to render the `BookCard.vue` component so we add `<book-card ... />` to the template of `index.vue`.

In the script for `index.vue` we already return a list of the `favoriteBooks` for the component to use in the template. This is done using the store getter `getFavoriteBooks` which gets all of the books from `books.json` that have `favorite: true` set. We can use `v-for` to loop through each book in the favorite books list and create a book card component for each of the favorite books. The `v-for` requires a unique key for each component, we can pass the `isbn` to it as that is a unique identifier.

Finally we can pass data to the components props, `:prop-name="value"`, for example we can pass the title to the component by doing `:title="books.title"`.

You should have something like this:
```html
<book-card
  v-for="book in favoriteBooks"
  :key="book.isbn"
  :title="book.title"
/>
```

### b) Update the card component to display more information

Open `src/components/BookCard.vue` and you will see that it uses a component in the template. It is using the `<v-card/>` component which comes from the vuetify component library which is a library full of many building blocks such as buttons, dialogues etc. The `v-card` is a [vuetify card component](https://vuetifyjs.com/en/components/cards/). Change this file so that the card component displays at least the title, author and book cover image. Use the linked vuetify documentation to guide you.

## c) Style the homepage

Style the homepage. Play with colors, fonts, layout etc. In `src/pages/index.vue` add classes to the sections and define the styles using css in the `<style> ... </style>` section.

## d) Add navigation

Create a new vue component inside of the components folder called `Navbar.vue`. This component will be used inside of `src/layouts/default.vue` as this is the component that declares the page layout. Anything you add here will appear on every page, which is what we want for our navbar.

Use the [vuetify app bar](https://vuetifyjs.com/en/components/app-bars/) in `Navbar.vue` to add a navigation bar that can route between the root homepage `/` and the all books page `/all-books` (which is currently empty). Then add your navbar component to the default layout component.

<hr style="margin-top: 32px">
<div style="display: flex; justify-content: space-between; margin-top: 16px; font-weight: bold; font-size: 16px">
  <span><a href="./docs/tasks/step-1.md">← Previous Step</a></span>
  <span><a href="README.md">🏠 Home</a></span>
  <span><a href="./docs/tasks/step-3.md">Next Step →</a></span>
</div>

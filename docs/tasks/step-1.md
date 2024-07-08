# Step 1: Clone and run the base app

## a) Download a copy of the base app
Open your terminal and type the following.
```bash
# navigate using cd (change directory) to your documents
# optional: change the path if you want to save the app somewhere else
cd ~/Documents/

# clone the github repository
git clone git@github.com:pendo-io/acme-books-workshop.git
```

This will clone the app into your Documents on your computer. Open the `ACME-BOOKS-WORKSHOP` folder in your code editor.

Here is a rough file structure and explanation of some of the key folders and files.
```bash
├── data
    ├── books.get.json # the list of books
├── docs
    └── ... # documentation including these instructions
├── src
    └── assets
        └── ... # static files, e.g. images
    └── components
        └── ... # reusable UI components (e.g. AppFooter.vue)
    └── layouts
        ├── default.vue # default structure/template for pages
    └── pages
        ├── index.vue # main Vue component for the index route/page.
        └── ... # other pages (http://127.0.0.1:3000/my-page => my-page.vue)
    └── services
        ├── api.service.js # functions for reading and writing the data
    ├── App.vue # root component, renders app structure.
    ├── main.js # entry point, initializes Vue app.
```

## b) Install the node dependencies
Open your terminal and type the following.

```bash
npm i
```

> VSCode also has an integrated terminal that can opened from the menu bar (Terminal -> New Terminal), or using the shortcut: `⌘ J` (Mac) or `Ctrl J` (Windows).

## c) Start the development server
To start the app run the following in your terminal.

```bash
npm run dev
```

This will start a local development server on your laptop. You can visit your app in your browser by clicking or visiting the link returned by the output of that command.

You should see the following webpage.
![Welcome to Acme Books](./step-1.png)

## d) Make your first change

Open `src/pages/index.vue` and change the page heading from `Welcome to ACME Books` to `Welcome to <your-name> Books`. Press save and the webpage will update to show your changes.


<hr style="margin-top: 32px">
<div style="display: flex; justify-content: space-between; margin-top: 16px; font-weight: bold; font-size: 16px">
  <span></span>
  <span><a href="README.md">🏠 Home</a></span>
  <span><a href="./docs/tasks/step-2.md">Next Step →</a></span>
</div>

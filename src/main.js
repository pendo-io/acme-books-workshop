/*
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

import { getBooks } from "./services/api.service.js"
import { createPinia } from 'pinia'
import { bookStore } from './stores/app'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
registerPlugins(app)

app.mount('#app')

const store = bookStore()

getBooks().then((books) => {
   store.books = books;
});

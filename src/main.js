/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins';

// Components
import App from './App.vue';

// Composables
import { createApp } from 'vue';

// Create store
import { useBookStore } from '@/stores/book';
import { createPinia } from 'pinia';

const app = createApp(App)

const pinia = createPinia()
app.use(pinia)
const bookStore = useBookStore();
bookStore.loadBooks();


registerPlugins(app)

app.mount('#app')

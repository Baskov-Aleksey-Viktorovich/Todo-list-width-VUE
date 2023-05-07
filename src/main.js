import { createApp } from 'vue';
import App from './App.vue';
import TheHeader from './components/layouts/TheHeader.vue';

/* import { createRouter, createWebHistory } from 'vue-router'; */

/* const router = createRouter({
    history: createWebHistory(),
}); */

const app = createApp(App);
/* app.use(router); */
app.component('the-header', TheHeader);
app.mount('#app');

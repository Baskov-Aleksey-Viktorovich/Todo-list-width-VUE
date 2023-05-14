import { createApp } from 'vue';
import App from './App.vue';
import TheHeader from './components/layouts/TheHeader.vue';
import BaseButton from './UI/BaseButton.vue';
import ModalCard from './UI/ModalCard.vue';
import DashBoard from './components/DashBoard.vue';
import UserLogin   from './pages/UserLogin.vue';
import UserSingin   from './pages/auth/UserSingin.vue';


import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/main' },
        { path: '/main', component: DashBoard },
        { path: '/login', component: UserLogin },
        { path: '/singin', component: UserSingin },

    ],
});

const app = createApp(App);
app.use(router);
app.component('the-header', TheHeader);
app.component('base-button', BaseButton);
app.component('modal-card', ModalCard);
app.mount('#app');

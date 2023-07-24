import { createApp } from 'vue';
import App from './App.vue';
import TheHeader from './components/layouts/TheHeader.vue';
import BaseButton from './UI/BaseButton.vue';
import ModalCard from './UI/ModalCard.vue';
import DashBoard from './components/DashBoard.vue';
import UserLogin   from './pages/auth/UserLogin.vue';
import UserSingin   from './pages/auth/UserSingin.vue';
import { initializeApp } from 'firebase/app';

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


const firebaseConfig = {
    apiKey: 'AIzaSyBwRSvlOJFkk6AtmcRCv73oQy4s6rVLDz0',
    authDomain: 'todo-cf1b6.firebaseapp.com',
    projectId: 'todo-cf1b6',
    storageBucket: 'todo-cf1b6.appspot.com',
    messagingSenderId: '89091472753',
    appId: '1:89091472753:web:2e22a1706b143683bfcad0',
    measurementId: 'G-EVEKFWMDJX',
};

initializeApp(firebaseConfig);



const app = createApp(App);
app.use(router);
app.component('the-header', TheHeader);
app.component('base-button', BaseButton);
app.component('modal-card', ModalCard);
app.mount('#app');

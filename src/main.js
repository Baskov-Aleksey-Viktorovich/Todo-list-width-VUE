import { createApp } from 'vue';
import App from './App.vue';

import TheHeader from './components/layouts/TheHeader.vue';
import TheMain from './components/layouts/TheMain.vue';

import BaseButton from './UI/BaseButton.vue';
import ModalCard from './UI/ModalCard.vue';
import DashBoard from './components/DashBoard.vue';
import UserLogin   from './pages/auth/UserLogin.vue';
import UserSingin   from './pages/auth/UserSingin.vue';
import AddDushBoard from './pages/auth/AddDushBoard.vue';

//router
import { createRouter, createWebHistory } from 'vue-router';

import { initializeApp } from 'firebase/app';
//


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/main' },
        { path: '/main', component: TheMain },
        { path: '/login', component: UserLogin },
        { path: '/singin', component: UserSingin },
        { path: '/new-dash', component: AddDushBoard },
        { path: '/task-board', component: DashBoard },
    ],
});

initializeApp({
    apiKey: 'AIzaSyBY6RUmbZwpG1bVCKr9fma3keIvBpDgmgk',
    authDomain: 'todo-auth-16ee1.firebaseapp.com',
    projectId: 'todo-auth-16ee1',
    storageBucket: 'todo-auth-16ee1.appspot.com',
    messagingSenderId: '32565768580',
    appId: '1:32565768580:web:5909f39601842dac4badd1',
});

const app =  createApp(App);
app.use(router);
app.component('the-header', TheHeader);
app.component('base-button', BaseButton);
app.component('modal-card', ModalCard);
app.mount('#app');

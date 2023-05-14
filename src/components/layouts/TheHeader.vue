<template>
    <header class="header">
        <div class="header__wrapper">
            <router-link to="/main" class="header__logo">
                <img src="@/assets/img/logo.svg" alt="logotype">
            </router-link>
            <div class="header__dark bg-white dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
                <base-button @click="toggleDark()">{{isDark ? "Dark" : "Light"}}</base-button>
            </div>
            <div class="header__board">New DushBoard</div>
            <div class="header__login">
                <router-link to="/singin">
                    <base-button mode="singin">Sing In</base-button>
                </router-link>
                <router-link to="/login">
                    <base-button>Login</base-button>
                </router-link>
            </div>
        </div>
    </header>
</template>

<script setup>

import { useDark, useToggle } from '@vueuse/core';

const isDark = useDark();
const toggleDark = useToggle(isDark);

</script>

<style lang="scss">

    .header{
        position: static;
        top: 0;
        background-color: transparent;
        z-index: 1004;
    &__wrapper{
        display: flex;
        width: 100wv;
        height: 10vh;
        align-items: center;
        position: relative;
        padding: 0 10px 0 10px;
        font-size: 18px;
        justify-content: space-around;
    }

    &__dark{
        padding: 10px;
    }
    &__board{
        margin: 0 0 0 15px;
        cursor: pointer;
    }

    &__login{
        cursor: pointer;
    }

    }
</style>

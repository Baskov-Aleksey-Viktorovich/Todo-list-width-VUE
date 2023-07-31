<template>
    <header class="header">
        <div class="header__wrapper">
            <router-link to="/main" class="header__logo">
                <img class="logo" src="@/assets/img/logo.svg" alt="logotype">
            </router-link>
            <div class="header__dark bg-white dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
                <base-button
                    @click="toggleDark()">{{isDark ? "Dark" : "Light"}}
                    <img src="@/assets/img/icons/SVG/brightness-contrast.svg" alt="sun">
                </base-button>
            </div>
            <!--             <div class="header__board">
                <router-link to="/new-dash">
                    <base-button>New Dash Board</base-button>
                </router-link>
            </div> -->
            <div class="header__auth">
                <router-link class="main-button" :class="{'select': isActive === 0}" @click="makeActive(0)" to="/singin">
                    <img src="@/assets/img/icons/SVG/hand-paper-o.svg" alt="">
                    Sing In
                </router-link>

                <router-link class="main-button" :class="{'select': isActive === 1}" @click="makeActive(1)" to="/login">
                    <img src="@/assets/img/icons/SVG/hand-peace-o.svg" alt="">
                    Login
                </router-link>
            </div>
        </div>
    </header>
</template>

<script setup>


import { useDark, useToggle } from '@vueuse/core';




const isDark     = useDark();
const toggleDark = useToggle(isDark);

</script>

<script>
export default {
    data (){
        return {
            isActive: undefined,
        };
    },
    methods: {
        makeActive (index){
            this.isActive = index;
        },
    },
};
</script>


<style lang="scss">

    .header{
        position: static;
        top: 0;
        background-color: transparent;
        z-index: 1004;

    &__wrapper{
        display: flex;
        margin: 0 auto;
        width: 80%;
        height: 20%;
        align-items: center;
        position: relative;
        padding: 0 10px 0 10px;
        font-size: 18px;
        justify-content: space-between;
    }


    &__dark{
        padding: 10px;
    }
    &__board{
        margin: 0 0 0 15px;
        cursor: pointer;
    }

    &__auth{
        display: flex;
        cursor: pointer;
    }

        @media screen and (max-width: 749px) {
    &__wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      width: 100%;
      height: 10%;
    }}
    .logo{
        width: 70%;
    }
    }
</style>

<template>
    <modal-card mode='singin'>
        <div class="wrapper">
            <div class="wrapper__header">
                <h1>Sing In</h1>
                <img src="@/assets/img/icons/SVG/smile1.svg" alt="">
            </div>
            <form @submit.prevent="register">
                <div class="form-control">
                    <label class="form-text" for="email">Email</label>
                    <input class="form__email" type="email" placeholder="Email" v-model="email" >
                    <label class="form-text" for="password">Password: </label>
                    <input class="form__password"
                           :class="{active: isActive, 'form-text' : 'empty-text'}"
                           type="password" placeholder="Password" v-model="password">
                    <base-button type="submit">Sing in</base-button>
                </div>

                <span>OR</span>
                <div class="form-control">
                    <base-button @click="singinWidthGoogle">
                        Continue width Google
                        <img class="sing-ing" src="@/assets/img/icons/SVG/google1.svg" alt="">
                    </base-button>
                </div>
            </form>
        </div>
    </modal-card>
</template>

<script>
import { getAuth,  createUserWithEmailAndPassword } from 'firebase/auth';
export default {
    props: [ 'mode' ],
    data (){
        return {
            email: null,
            password: null,
            isActive: null,
        };
    },
    methods: {
        register (){
            createUserWithEmailAndPassword(getAuth(), this.email, this.password).then((data) => {
                console.log('good', data.message);
                this.$router.push('/');
            }).catch((error) => {
                return console.log(error.message);
            });
        },
    },
};
</script>





<style>

    .wrapper__header{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        margin: auto;
    }

    .form-text{
        padding: 15px;
    }

    .empty-text{
        border: 1px splid red;
    }

    .sing-ing{
        align-items: center;
        width: 10%;
    }
    .form-control{
        display: flex;
        flex-direction: column;
        vertical-align: middle;
        text-align: center;
    }


</style>

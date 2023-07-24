<template>
    <modal-card mode='singin'>
        <div class="wrapper">
            <h1>Sing In</h1>
            <form action="">
                <div class="form-control">
                    <label class="form-text" for="email" >Email</label>
                    <input required class="form__email" type="email" placeholder="Email" v-model="email">
                </div>

                <div class="form-control">
                    <label class="form-text" for="password">Password: </label>
                    <input required class="form__password" type="password" placeholder="Password" v-model="password">
                </div>
                <div class="form-control">
                    <button>Sing In With Google</button>
                </div>
                <base-button>Sing in</base-button>
            </form>
        </div>
    </modal-card>
</template>

<script>
export default {
    props: [ 'mode' ],
};
</script>


<style scoped>
    .wrapper{
        text-align: center;
    }
    .form-text{
        padding: 15px;
    }

</style>

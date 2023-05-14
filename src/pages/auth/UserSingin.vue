<template>
    <modal-card mode='singin'>
        <div class="wrapper">
            <h1>Sing In</h1>
            <form action="">
                <div class="form-control">
                    <label for="email">Email</label>
                    <input class="form__email" type="email" placeholder="Email">
                </div>

                <div class="form-control">
                    <label for="password">password</label>
                    <input class="form__password" type="password" placeholder="Password">
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
</style>

<template>
    <modal-card mode='login'>
        <div class="wrapper">
            <h1>LogIn</h1>
            <form action="">
                <div class="form-control">
                    <label class="form-text" for="email">Email: </label>
                    <input required class="form__email" type="email" placeholder="Email">
                </div>

                <div class="form-control">
                    <label for="password">Password:</label>
                    <input required class="form__password" type="password" placeholder="Password">
                </div>
                <base-button>Login</base-button>
            </form>
        </div>
    </modal-card>
</template>

<script>
export default {
    props: [ 'mode' ],
};
</script>

<style>
.wrapper{
    text-align: center;
    padding: 50px 0 0 0;
    border-radius: 5px;
}
.form-text{
    padding: 15px;
}
</style>

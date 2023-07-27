<template>
    <modal-card mode='login'>
        <div class="wrapper">
            <div class="wrapper__header">
                <h1>LogIn</h1>
                <img src="@/assets/img/icons/SVG/happy1.svg" alt="h1">
            </div>
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

<style >
.form-text{
    padding: 15px;
}
.wrapper__header{
    display: flex;
    justify-content: space-between;
    width: 55%;
    margin: auto;
}
</style>

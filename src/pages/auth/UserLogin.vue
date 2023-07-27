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
                    <base-button>Login</base-button>
                    <span>OR</span>
                    <base-button>
                        Continue width Google
                        <img class="sing-ing" src="@/assets/img/icons/SVG/google1.svg" alt="">
                    </base-button>
                </div>
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
    .wrapper__header{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        margin: auto;
    }

    .form-text{
        padding: 15px;
    }
    .form-control{
        display: flex;
        flex-direction: column;
        vertical-align: middle;
        text-align: center;
    }
</style>

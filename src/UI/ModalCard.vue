<template>
    <div class="wrapper">
        <div :class='mode'>
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: [ 'mode' ],
};
</script>

<style scoped>
    div{
        margin: 0 auto;
        width: 50%;
        height: 30vh;
        position: relative;
    }
    .login{
        width: 50%;
        height: 25vh;
        border: 5px solid #b1b1b1;
        border-radius: 5px;
    }

    .singin{
        width: 50%;
        height: 25vh;
        border: 5px solid #b1b1b1;
        border-radius: 5px;
    }
</style>


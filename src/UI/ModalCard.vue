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

<style >
    .wrapper{
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        text-align: center;
        height: 100%;
        margin:  auto;
    }
    .login{
        align-self: center;
        max-height: 25%;
        border: 2px solid #b1b1b1;
        border-radius: 5px;
    }

    .singin{
        align-self: center;
        max-height: 25%;
        border: 2px solid #b1b1b1;
        border-radius: 5px;
    }
</style>


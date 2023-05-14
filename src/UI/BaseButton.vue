<template>
    <button :type="type" :class="mode">
        <slot></slot>
    </button>
</template>

<script>
export default {
    props: [ 'type', 'mode' ],
};
</script>

<style scoped>

    button{
    display: inline-block;
    outline: 0;
    border: 0;
    margin: 5px;
    cursor: pointer;
    background: #b1b1b1;
    color: black;
    border-radius: 8px;
    padding: 14px 24px 16px;
    font-size: 18px;
    line-height: 1;
    transition: transform 200ms,background 200ms;
    }

    button:hover{
    transform: translateY(-2px);
}

.singin{
    display: inline-block;
    outline: 0;
    border: 0;
    margin: 5px;
    border: 1px solid #b1b1b1;
    cursor: pointer;
    background: transparent;
    color: black;
    border-radius: 8px;
    padding: 14px 24px 16px;
    font-size: 18px;
    line-height: 1;
    transition: transform 200ms,background 200ms;
}
.modal{
    width: 100%;
    outline: 0;
    border: 0;
    margin: 5px;
    border: 1px solid #b1b1b1;
    cursor: pointer;
    background: transparent;
    color: black;
    border-radius: 8px;
    padding: 14px 24px 16px;
    font-size: 18px;
    line-height: 1;
    transition: transform 200ms,background 200ms;
}

</style>

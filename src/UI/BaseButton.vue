<template>
    <button class="main-button" :type="type" :class="mode">
        <slot></slot>
    </button>
</template>

<script>
export default {
    props: [ 'type', 'mode' ],
};
</script>

<style>

    .main-button{
    display: flex;
    justify-content: space-around;
    text-decoration: none;
    vertical-align: middle;
    outline: 0;
    border: 0;
    margin: 5px;
    cursor: pointer;
    height: 40%;
    padding: 10px;
    background: #b1b1b1;
    color: black;
    border-radius: 8px;
    font-size: 18px;
    line-height: 1;
    transition: transform 200ms,background 200ms;
    }

.main-button > a {
    text-decoration: none;
    color: black;
}

    .main-button:hover{
    transform: translateY(-2px);
}

.select{
    display: inline-block;
      align-self: center;
    outline: 0;
    border: 0;
    margin: 5px;
    border: 1px solid #b1b1b1;
    cursor: pointer;
    background: transparent;
    color: black;
    border-radius: 8px;
    padding: 14px 18px 16px;
    font-size: 18px;
    line-height: 1;
    transition: transform 200ms,background 200ms;
}
.modal{
    width: 100%;
    align-self: center;
    max-height: 10%;
    outline: 0;
    border: 0;
    margin: 5px;
    border: 1px solid #b1b1b1;
    cursor: pointer;
    background: transparent;
    color: black;
    border-radius: 8px;
    padding: 14px 24px 16px;
    font-size: 14px;
    line-height: 1;
    transition: transform 200ms,background 200ms;
}

</style>

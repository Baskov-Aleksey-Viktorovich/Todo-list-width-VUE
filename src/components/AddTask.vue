<template>
    <div class="task-block">
        <input class="task-block__name"
               v-model="todo.name"
               type="text"
               placeholder="Type name for Task">
        <textarea
            class="task-block__descr"
            v-model="todo.description"
            name="description"
            placeholder="Type description for Task"
            cols="30"
            rows="2"></textarea>
        <div class="task-block__wrapper">
            <base-button @click="addTask">
                <img src="@/assets/img/icons/SVG/plus.svg" alt="">
                Add Task</base-button>
            <base-button @click="getConfetti">Confetti</base-button>
        </div>
    </div>
</template>

<script>
import confetti from 'canvas-confetti';

export default {
    data () {
        return {
            todo: {
                name: '',
                description: '',
            },
        };
    },

    methods: {
        clearInput () {
            this.todo = {
                name: '',
                description: '',
            };
        },

        addTask () {
            this.todo.id = Date.now();

            if (this.todo.name !== '' && this.todo.description !== '') {
                this.$emit('create', this.todo);
            }
            this.clearInput();
        },

        getConfetti () {
            confetti();
        },
    },
};
</script>
<style lang="scss">
.task-block  {
    width: 100%;


&__name  {
    width: 100%;
    height: 40px;
}

&__descr {
    width: 100%;
}

&__button {
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
&__wrapper{

    text-align: center;
}
&__button:hover{
    transform: translateY(-2px);
}
}
</style>

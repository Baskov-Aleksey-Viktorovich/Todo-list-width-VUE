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
            placeholder="Type description of Task"
            cols="30"
            rows="2"></textarea>
        <button class="task-block__button" @click="addTask">Add Task</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            todo: {
                name: '',
                description: '',
            },
        };
    },
    methods: {
        addTask() {
            this.todo.id = Date.now();
            if (this.todo.name !== '' && this.todo.description !== '') {
                this.$emit('create', this.todo);
            }
            this.todo = {
                name: '',
                description: '',
            };
        },
    },
};
</script>

<style>
.task-block  {
    width: 100%;
}
.task-block__name  {
    width: 100%;
    height: 40px;
}
.task-block__descr {
    width: 100%;
}
.task-block__button {
    width: 100%;
}
</style>

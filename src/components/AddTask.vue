<template>
    <div class="add__task">
        <input v-model="todos.name" type="text" class="add__task__name" placeholder="Type name for Task">
        <textarea v-model="todos.description" name="description" id="add__task__descr"
            placeholder="Type description of Task" cols="30" rows="2"></textarea>
        <button class="add__task__button" @click="addTask">Add Task</button>
    </div>
</template>

<script>

export default {
    data() {
        return {
            todos: {
                name: '',
                description: '',
            },
        }
    },
    methods: {
        addTask() {
            this.todos.id = Date.now();
            if (this.todos.name != '' && this.todos.description != '') {
                this.$emit('create', this.todos)
            }
            this.todos = {
                name: '',
                description: '',
            }
        }
    }
}
</script>

<style>
.add__task {
    width: 100%;

}

.add__task__name {
    width: 100%;
    height: 40px;
}

#add__task__descr {
    width: 100%;
}

.add__task__button {
    width: 100%;
}
</style>
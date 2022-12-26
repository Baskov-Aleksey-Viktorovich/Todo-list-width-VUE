<template>
              <div class="task__block" v-for="todo in todos"
            :key='todo.id'>
                <span class="task__block__title">{{todo.name}}</span>
                <p class="task__block__desc">{{todo.description}}</p>
            </div>
</template>

<script>
export default {
 props:{
    tasks:{
        type: Array,
        required: true,
    }
 },
}
</script>
<style scoped>
.task__block{
    width: 320px;
    background-color: #fff;
    margin: 0 auto;
    border-radius: 5px;
    margin-bottom: 8px;
}
.task__block__title {
    width: 100%;
}

.task__block__desc {
    width: 100%;
}
</style>
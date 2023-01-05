<template>
    <div class="task-list">
        <div class="task-list-item" v-for="task in items" :key="task.id">
            <div class="task-list-item-body">
                <h6 class="task-list-item__title">{{ task.name }}</h6>
                <p class="task-list-item__desc">{{ task.description }}</p>
            </div>

            <div class="task-list-item-actions">
                <button @click="deleteTask(task.id)" class="task-list-item-actions__delete">
                    x
                </button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        items: {
            type: Array,
        },
    },
    methods: {
        deleteTask(id) {
            this.$emit('deleteTask', id);
        },
    },
};
</script>

<style>
.task__block {
  width: 320px;
  background-color: #fff;
  margin: 0 auto;
  border-radius: 5px;
  margin-bottom: 8px;
  position: relative;
}

.task__block__title {
  width: 100%;
}

.task__block__desc {
  width: 100%;
  font-size: 12px;
}
.task__block__delete{
  position: absolute;
  top: 0;
  right: 10px;
  cursor: pointer;
}
</style>

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

<style lang="scss">
.task-list {
  &-item {
    display: flex;
    align-items: stretch;
    justify-content: space-between;
    padding-left: 16px;
    margin-bottom: 16px;
    background: lightgray;

    &-body {
      flex: 0 1 95%;
    }

    &-actions {
      flex: 0 0 5%;

      &__delete {
        height: 100%;
        background: red;
        padding: 10px;
        border: none;
        cursor: pointer;
        transition: background 0.3s ease;

        &:hover {
          background: darkred;
        }
      }
    }

    &__title {
      font-size: 16px;
      text-align: center;
      text-transform: capitalize;
    }
  }
}
</style>

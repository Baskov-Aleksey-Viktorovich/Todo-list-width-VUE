<template>
    <div>
        <div
            class="task__block"
            v-for="item in todo"
            :key="item.id">
            <span class="task__block__title">{{ item.name }}</span>
            <p class="task__block__desc">{{ item.description }}</p>
            <div v-on:click="deleteTask" class="task__block__delete">x</div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        items: {
            type: Array,
        },
        inwork: {
            type: Array,
        },
        complate: {
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

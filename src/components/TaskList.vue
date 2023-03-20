<template>
    <div class="task-list">
        <draggable
            v-model="tasks"
            group="tasks"
            @start="drag=true"
            @end="drag=false"
            item-key="id">
            <template #item="{element}">
                <div class="task-list-item">
                    <div class="task-list-item-body">
                        <h6 class="task-list-item__title">{{ element?.name }}</h6>
                        <p class="task-list-item__desc">{{ element?.description }}</p>
                    </div>

                    <div class="task-list-item-actions">
                        <button @click="deleteTask(element?.id)" class="task-list-item-actions__delete">
                            x
                        </button>
                    </div>
                </div>
            </template>
        </draggable>
    </div>
</template>

<script>
import draggable from 'vuedraggable';
import { computed } from 'vue';

export default {
    components: {
        draggable,
    },
    props: {
        items: {
            type: Array,
        },
    },
    setup (props, { emit }) {
        const tasks = computed({
            get: () => props.items ?? [],
            set: (value) => emit('update:items', value),
        });

        return {
            tasks,
        };
    },
    methods: {
        deleteTask (id) {
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

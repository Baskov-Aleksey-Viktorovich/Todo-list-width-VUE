<template>
    <ul class="task-list">
        <draggable
            v-model="tasks"
            group="tasks"
            @start="drag=true"
            @end="drag=false"
            item-key="id"
        >
            <template #item="{element}">
                <li class="task-list-item">
                    <div class="task-list-item-body list-group-item">
                        <h6 class="task-list-item__title">{{ element?.name }}</h6>
                        <p class="task-list-item__desc">{{ element?.description }}</p>
                    </div>

                    <div class="list-item-actions">
                        <button @click="deleteTask(element?.id)" class="task-list-item-actions__delete">
                            x
                        </button>
                    </div>
                </li>
            </template>
        </draggable>
    </ul>
</template>

<script >
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

        function deleteTask (id) {
            emit('deleteTask', id);
        }

        return {
            tasks,
            deleteTask,
        };
    },

};

</script>
<style lang="scss">
.task-list {

&-item {
  display: flex;
  border-radius: 5px;
  align-items: stretch;
  justify-content: space-between;
  padding-left: 16px;
  margin-bottom: 16px;
  background: #b1b1b1;
  cursor: grab;

  &-body {
    flex: 0 1 95%;
  }

  &-actions {
    flex: 0 0 5%;
    &__delete {
      height: 100%;
      background: red !important;
      padding: 10px;
      border: none;
      cursor: pointer;
      transition: background 0.3s ease;
      &:hover {
        background: darkred !important;
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

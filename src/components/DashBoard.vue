<template>
    <div class="wrapper">
        <div class="dashboard">
            <div class="dashboard__col">
                <span class="dashdoard__title">Task {{ todo.length }}</span>

                <task-list
                    v-model:items="todo"
                    @deleteTask="deleteTask(todo, $event)">
                </task-list>

                <add-task
                    :todo="todo"
                    @create="addTask" />
            </div>
            <div class="dashboard__col">
                <span class="dashdoard__title">In Work {{ workInProgress.length }}</span>

                <task-list
                    v-model:items="workInProgress"
                    @deleteTask="deleteTask(workInProgress, $event)">
                </task-list>
            </div>
            <div class="dashboard__col">
                <span class="dashdoard__title">Complete tasks {{completedTasks.length}}</span>

                <task-list
                    v-model:items="completedTasks"
                    @deleteTask="deleteTask(completedTasks, $event)">
                </task-list>
            </div>
        </div>
    </div>
</template>

<script>
import AddTask from './AddTask.vue';
import TaskList from './TaskList.vue';

export default {
    components: {
        AddTask,
        TaskList,
    },
    data () {
        return {
            drag: false,

            todo: [ { id: 0, name: 'Name for Task', description: 'descr for Task' } ],
            workInProgress: [
                { id: 1, name: 'inwork 1', description: 'descr for Task' },
                { id: 3, name: 'inwork 2', description: 'descr for Task 2' },
            ],
            completedTasks: [
                { id: 2, name: 'complate 1', description: 'descr for Task' },
                { id: 228, name: 'complate 2', description: 'Test Drag' },
            ],
        };
    },



    methods: {
        addTask (todo) {
            this.todo.push(todo);
        },
        deleteTask (list, idToDelete) {
            const index = list.findIndex(({ id }) => id === idToDelete);
            list.splice(index, 1);
        },
    },
};
</script>

<style>
.wrapper {
  margin: 0 auto;
  width: 100vw;
  height: 100vh;
  position: relative;
  background-image: linear-gradient(rgba(0, 0, 255, 0.5),
      rgba(255, 255, 0, 0.5));
}

.dashboard {
  width: 1200px;
  min-height: 80vh;
  margin: 0 auto;
  display: flex;
}

.dashboard__col {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  height: 100%;
  width: 35%;
  border-radius: 5px;
  background-color: #ebecf0;
  margin: 10px;
}

.dashdoard__title {
  font-size: 18px;
  display: block;
  text-align: center;
  padding: 15px;
}

.dashboard__col__button {
  height: 40px;
  background-color: #ebecf0;
  cursor: pointer;
}
@supports (display: flex) {
  @media screen and (max-width: 768px) {
    .dashboard {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 50vw;
    }
        .dashboard__col{
        width: 40vw;
    }
  }
    @media screen and (max-width: 500px) {
    .dashboard {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 0;
      width: 100vw;
    }
    .dashboard__col{
        width: 100vw;
        margin-bottom: 10px;
    }
  }
}
</style>

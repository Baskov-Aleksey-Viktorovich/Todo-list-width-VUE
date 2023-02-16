<template>
    <div class="wrapper">
        <div class="dashboard">
            <div class="dashboard__col">
                <span class="dashdoard__title">Task {{ todo.length }}</span>
                <task-list :items="todo" @deleteTask="deleteTask(todo, $event)"></task-list>
                <add-task
                    :todo="todo"
                    @create="addTask" />
            </div>
            <div class="dashboard__col">
                <span class="dashdoard__title">In Work</span>
                <task-list :items="workInProgress"
                           @deleteTask="deleteTask(workInProgress, $event)">
                </task-list>
            </div>
            <div class="dashboard__col">
                <span class="dashdoard__title">Complete tasks</span>
                <task-list :items="completedTasks"
                           @deleteTask="deleteTask(completedTasks, $event
                           )"></task-list>
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
            todo: [ { id: 0, name: 'Name for Task', description: 'descr for Task' } ],
            workInProgress: [ { id: 1, name: 'inwork 1', description: 'descr for Task' } ],
            completedTasks: [ { id: 2, name: 'complate 1', description: 'descr for Task' } ],
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
</style>

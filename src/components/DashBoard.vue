<template>
    <div class="wrapper">
        <div class="dashboard">
            <div class="dashboard__col">
                <span class="dashdoard__title"> Task {{todo.length}}</span>
                <task-list @deleteTask="deleteTask(todo.id)" :todo="todo" ></task-list>
                <add-task
                    :todo="todo"
                    @create="addTask" />
            </div>
            <div class="dashboard__col">
                <span class="dashdoard__title">In Work {{ inwork.length }}</span>
                <task-list @deleteTask="deleteTask(inwork.id)" :inwork="inwork"></task-list>
            </div>
            <div class="dashboard__col">
                <span class="dashdoard__title">Complete tasks {{ complate.length }}</span>
                <task-list @deleteTask="deleteTask(complate.id)" :complate="complate"></task-list>
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
    data() {
        return {
            todo: [ { id: 0, name: 'Name for Task', description: 'descr for Task' } ],
            inwork: [ { id: 1, name: 'Task In work', description: 'In work' } ],
            complate: [ { id: 2, name: 'Complate task', description: 'Complate Task' } ],
        };
    },
    methods: {
        addTask(todo) {
            this.todo.push(todo);
        },
        deleteTask(id) {
            this.todo.splice(id, 1);
            this.inwork.splice(id, 1);
            this.complate.splice(id, 1);
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
  height: 80vh;
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

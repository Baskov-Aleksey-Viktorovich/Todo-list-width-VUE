<template>
  <div class="wrapper">
    <div class="dashboard">
      <div class="dashboard__col">
        <span class="dashdoard__title">Task</span>
        <task-list :todo="todo"></task-list>
        <add-task :todo="todo" @create="addTask" />
      </div>
      <div class="dashboard__col">
        <span class="dashdoard__title">In Work</span>
      </div>
      <div class="dashboard__col">
        <span class="dashdoard__title">Complete tasks</span>
      </div>
    </div>
  </div>
</template>
<script>
import AddTask from "./AddTask.vue";
import TaskList from "./TaskList.vue";

export default {
  components: {
    AddTask,
    TaskList,
  },
  data() {
    return {
      todo: [{ id: 0, name: "Name for Task", description: "descr for Task" }],
    };
  },
  methods: {
    addTask(todo) {
      this.todo.push(todo);
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

/* Wrapper style */

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
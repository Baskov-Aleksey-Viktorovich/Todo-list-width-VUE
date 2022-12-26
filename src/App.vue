<template>
        <dash-board>
            <task-post :todos='todos'></task-post>
            <add-tasks/>
        </dash-board>
</template>

<script>

import DashBoard from"./components/DashBoard.vue"
import AddTasks from "./components/AddTasks.vue"
import TaskPost from "./components/TaskPost.vue"

export default {
    components:{
        DashBoard, 
        AddTasks, 
        TaskPost,
    },
  data() {
    return {
        todos: [
            {id:0, name:'Test', description: 'test'}, 
        ], 
        name:'',
        description: '',
    }
  },
  methods: {
    addTask(){
        const newTask = {
            id: Date.now(),
            name: this.name,
            description:this.description,
        }
        if(this.name != '' && this.description != ''){
            this.todos.push(newTask);
        }
        this.name = '';
        this.description = '';
    },
  },
};
</script>

<style>
    /* Link fonts */
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&display=swap');

    /* Reset */
* {
font-family: 'Space Grotesk', sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

    /* Adaptive */
@media screen and (width:1199px){
  .dashboard {
  width:100%;
  height: 80vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}
}
</style>

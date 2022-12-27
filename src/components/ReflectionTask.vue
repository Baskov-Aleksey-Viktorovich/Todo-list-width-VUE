<template>
<div class="task__block" v-for="todo in todos"
            :key='todo.id'>
                <span class="task__block__title">{{todo.name}}</span>
                <p class="task__block__desc">{{todo.description}}</p>
</div>
<div class="task__block" v-for="work in inwork"
            :key='work.id'>
                <span class="task__block__title">{{work.name}}</span>
                <p class="task__block__desc">{{work.description}}</p>
</div>
<div class="task__block" v-for="exe in executed"
            :key='exe.id'>
                <span class="task__block__title">{{exe.name}}</span>
                <p class="task__block__desc">{{exe.description}}</p>
</div>
</template>

<script>
/* import dragable from 'vuedraggable' */
export default {
/*     components:{
        dragable,
    }, */
    props:{
        todos:{
            type:Array,
        },
        inwork:{
            type:Array,
        },
        executed:{
            type: Array,
        }
        
    }, 
    data(){
        return{
            drag:false,
        }
    }
}
</script>

<style>
.task__block{
    width: 320px;
    background-color: #fff;
    margin: 0 auto;
    border-radius: 5px;
    margin-bottom: 8px;
}

.task__block__title {
    width: 100%;
}

.task__block__desc {
    width: 100%;
    font-size: 12px;
}
</style>
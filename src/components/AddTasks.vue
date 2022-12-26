<template>
    <div class="add__task">
                <input 
                @input="name = $event.target.value"
                v-bind:value="name" 
                type="text"  
                class="add__task__name" 
                placeholder="Type name for Task">
                <textarea v-bind:value="description"
                  @input="description = $event.target.value"
                  name="description" 
                  id="add__task__descr" 
                  placeholder="Type description of Task" cols="30" rows="2"></textarea>
                <button class="add__task__button">Add Task</button>
     </div>
</template>

<script>
export default {

}
</script>

<style>

/* Task Block Style */
.add__task{
    width: 100%;
} 
.add__task__name {
    width: 100%;
    height: 40px;
}
#add__task__descr{
    width: 100%;
}
.add__task__button {
    width: 100%;
}
</style>
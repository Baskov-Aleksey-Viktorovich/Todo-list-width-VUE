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
        todo: {
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
        deleteTask() {
            this.$emit('deleteTask');
        },
    },
};
</script>

<style>
.task__block {
  width: 320px;
  background-color: #fff;
  margin: 0 auto;
  border-radius: 5px;
  margin-bottom: 8px;
  position: relative;
}

.task__block__title {
  width: 100%;
}

.task__block__desc {
  width: 100%;
  font-size: 12px;
}
.task__block__delete{
  position: absolute;
  top: 0;
  right: 10px;
  cursor: pointer;
}
</style>

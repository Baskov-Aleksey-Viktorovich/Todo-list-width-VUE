<template>
    <div class="wrapper">
    <div class="dashboard">
        <div class="dashboard__col">
            <span class="dashdoard__title">Task</span>
        </div>
        <div class="dashboard__col">
            <span class="dashdoard__title">In Work</span>
        </div>
        <div class="dashboard__col">
            <span class="dashdoard__title">Executed</span>
        </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

  .wrapper{
    margin: 0 auto;
    width: 100vw;
    height:100vh;
    position: relative;
    background-image: linear-gradient(rgba(0, 0, 255, 0.5), rgba(255, 255, 0, 0.5));
  }
/* Wrapper style */

.dashboard {
    width:1200px;
    height: 80vh;
    margin: 0 auto;
    display: flex;
}

.dashboard__col {
    display:flex;
    flex-direction: column;
    margin: 0 auto;
    height: 100%;
    width: 35%;
    border-radius: 5px;
    background-color:#ebecf0;
    margin: 10px;

}
.dashdoard__title{
    font-size: 18px;
    display: block;
    text-align: center;
    padding: 15px;
}

.dashboard__col__button{
    height:40px;
    background-color: #ebecf0;
    cursor:pointer;
}
</style>
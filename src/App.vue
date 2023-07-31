<template>
    <the-header/>
    <router-view></router-view>
</template>
<script>

/* import DashBoard from './components/DashBoard.vue'; */

export default {
    components: {
        /* DashBoard, */
    },
};
</script>


<style lang="scss">
/* Import fonts */

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500;700&display=swap');

.dark{
  background-color: #2C3333;
  color: white;

  li{
    background-color: #424242;
  }
  span{
    background: #808080;
  }

 button{
    color: white;
    background: #424242;
  }

a{
  color: white;
}
img{
  color: white;
}

  .dashboard__col{
    background: #808080;
  }
}

img{
  height: 10%;
  width: 20%;
}
/* Reset Styles */

* {
  font-family: 'Poppins', sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>

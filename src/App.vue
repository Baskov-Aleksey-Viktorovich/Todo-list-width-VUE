<template>
  <dash-board></dash-board>
</template>
<script>
import DashBoard from './components/DashBoard.vue';
export default {
  components: {
    DashBoard
  },
};
</script>

<style>
/* Import fonts */
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&display=swap');

/* Reset Styles */
* {
  font-family: 'Space Grotesk', sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Add Task Block Style */
@media screen and (width:1199px) {
  .dashboard {
    width: 100%;
    height: 80vh;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
  }
}
</style>

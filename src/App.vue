<template>
    <dash-board></dash-board>
</template>
<script>
import DashBoard from './components/DashBoard.vue';

export default {
    components: {
        DashBoard,
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
</style>

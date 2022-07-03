<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
// import myCard from './components/myCard.vue'

import scoreboards from './components/scoreBoard.vue'
import otherPlayerCardPosition from "./components/otherPlayerCardPosition.vue";
//   window.onload = function() {
//   document.addEventListener('touchstart', function(event) {
//     if (event.touches.length > 1) {
//       event.preventDefault()
//     }
//   })
//   document.addEventListener('gesturestart', function(event) {
//   event.preventDefault()
// })
// }

</script>

<template>
  <otherPlayerCardPosition></otherPlayerCardPosition>
  <div style="margin-top:3rem">
    <scoreboards></scoreboards>
  </div>

</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 12px;
}
.bottom {
}
</style>

<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
// import myCard from './components/myCard.vue'
import centerCard from './components/centerCard.vue'
import scoreboards from './components/scoreBoard.vue'
import otherPlayerCardPosition from "./components/otherPlayerCardPosition.vue";

</script>

<template>
      <router-view v-slot="{ Component}">
         <component :is="Component" />
      </router-view>
</template>

<style>
html,
body,
#app {
  height: 100%;
  margin: 0;
  padding: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 12px;
  background: url("./assets/bgimg.png") repeat center center;
  background-size: cover;
}
</style>

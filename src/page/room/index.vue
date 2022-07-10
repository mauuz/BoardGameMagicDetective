<template>
  <div class="container">
      <div class="center">
        <otherPlayerCardPosition></otherPlayerCardPosition>
        <div style="margin-top:3rem">
          <scoreboards></scoreboards>
        </div>
      </div>
  </div>

</template>

<script>
import otherPlayerCardPosition from '../../components/otherPlayerCardPosition.vue'
import scoreboards from '../../components/scoreBoard.vue'
export default {
  name: "index",
  setup(){

  },
  components:{
    otherPlayerCardPosition,scoreboards
  }
}
</script>

<style scoped>
  .container {
      display:flex;
      flex-direction:column;
      padding:1.5rem;
  }

</style>
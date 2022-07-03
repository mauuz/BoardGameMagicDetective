<template>
    <div class="top">
      <topCard :cardList="[5,2,3]"></topCard>
    </div>
    <div class="left-right">
      <sideCard :cardList="[1,2,5]"></sideCard>
      <sideCard :cardList="[5,6,1]"></sideCard>
    </div>
</template>

<script>

import sideCard from "./sideCard.vue"
import topCard from "./topCard.vue"
export default {
  name: "otherPlayerCardPosition",
  components:{
    sideCard,topCard
  }
}
</script>

<style scoped>
  .top {
    width: 15rem;
    margin:0 auto;
  }
  .left-right {
    width: 100%;
    display: flex;
    justify-content:space-between;
  }
</style>
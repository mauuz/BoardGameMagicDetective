<template>
    <div class="top">
      <topCard :cardList="[5,2,3]"></topCard>
    </div>
    <div class="left-right">
      <sideCard :cardList="[1,2,5]"></sideCard>
      <div style="height:12.7rem;width:7.5rem;">
        <centerCard></centerCard>
      </div>
      <sideCard :cardList="[5,6,1]"></sideCard>
    </div>
</template>

<script>

import sideCard from "./sideCard.vue"
import topCard from "./topCard.vue"
import centerCard from "./centerCard.vue"
export default {
  name: "otherPlayerCardPosition",
  components:{
    sideCard,topCard,centerCard
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
    flex:1;
    align-items: center;
    justify-content:space-between;
  }
</style>
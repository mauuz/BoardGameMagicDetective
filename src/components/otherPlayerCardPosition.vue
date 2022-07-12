<template>
    <div class="top" v-if="playerNumber === 5">
      <topCard :cardList="top"></topCard>
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

import {computed} from 'vue'
import sideCard from "./sideCard.vue"
import topCard from "./topCard.vue"
import centerCard from "./centerCard.vue"
import { useStore} from 'vuex'
export default {
  name: "otherPlayerCardPosition",
  setup(){
    const store = useStore()
    console.log(store.state)
    //卡牌数组
    let top = computed(()=>{
        return store.state.playerCard.cardList[0].card
    })
    let playerNumber = computed(()=>{
      return store.state.setting.playerNumber
    })
    return {
      top,playerNumber
    }
  },
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
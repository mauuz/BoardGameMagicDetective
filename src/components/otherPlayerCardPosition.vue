<template>
    <div class="top" v-if="playerNumber === 5">
      <topCard :cardList="top"></topCard>
    </div>
    <div class="container">
      <div class="player">
        Player{{ playerLeft }}
      </div>
      <div class="player">
        Player{{playerRight}}
      </div>
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
    let playerLeft = computed(()=>{
        if(store.state.setting.playerNumber === 4){
          return store.state.playerCard.cardList[0].player
        }else {
          return store.state.playerCard.cardList[1].player
        }
    })

    let playerRight = computed(()=>{
      if(store.state.setting.playerNumber === 4){
        return store.state.playerCard.cardList[1].player
      }else {
        return store.state.playerCard.cardList[2].player
      }
    })

    let playerNumber = computed(()=>{
      return store.state.setting.playerNumber
    })
    return {
      top,playerNumber,playerLeft,playerRight
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
    padding-left: 1.3rem;
    padding-right:1.3rem;
    width: 100%;
    display: flex;
    flex:1;
    align-items: center;
    justify-content:space-between;
    box-sizing: border-box;
  }
  .container {
    display: flex;
    justify-content:space-between;
  }

  .player {
    line-height:1.5rem;
    width:7rem;
    height:1.5rem;
    text-align:center;
    color:#ffffff;
    background: url("../../src/assets/img_1.png") no-repeat center center;
    background-position:20%;
    background-size: 100% 100%;
  }
</style>
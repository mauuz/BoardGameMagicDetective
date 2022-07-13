<template>
    <div class="playerNumber">
      <div style="height:6rem;">
        <button @click="crateRoom4Player()">4 人(包括幽灵)</button>
      </div>
      <div>
        <button  @click="crateRoom5Player()">5 人(包括幽灵)</button>
      </div>
    </div>
</template>

<script>
import {useStore} from 'vuex'
import  {ref,computed} from 'vue'
export default {
  name: "choosePlayerNumber",
  setup(){
    const store = useStore()
    const crateRoom4Player = function (){
      store.dispatch('setRandomRoomId')
      store.commit('SET_PLAYER_NUMBER',4)
      store.commit('OPEN_WAITING_ROOM')
    }
    const crateRoom5Player = function (){
      store.dispatch('setRandomRoomId')
      store.commit('SET_PLAYER_NUMBER',5)
      store.commit('OPEN_WAITING_ROOM')
    }
    return {
      crateRoom4Player,crateRoom5Player
    }
  }
}
</script>

<style scoped>
  .playerNumber {
      display: flex;
      flex-direction: column;
  }
  .playerNumber button {
    font-size:1.3rem;
    font-weight: bold;
    margin-bottom:1rem;
    color:white;
    background: url("../../src/assets/img_1.png") no-repeat center center;
    background-position:20%;
    background-size: 100% 100%;
    cursor: pointer;
    height:4rem;
    width:20rem;
    border:none;
    border-radius: 1rem;
  }
</style>
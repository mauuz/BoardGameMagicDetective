<template>
  <div class="player">
    {{player}}
  </div>
  <div class="user-card">
    <div class="card" v-for="(item,index) in cardList">
      <img :src="imgUrl(item)" alt="">
    </div>
    <div class="clear" v-if="cardList.length == 0">
        已出完
    </div>
  </div>
</template>

<script>
import {useStore} from 'vuex'
import {ref,computed} from 'vue'
export default {
  name: "topCard",
  setup(){
    const store = useStore()
    function imgUrl(index){
      return new URL(`../../src/assets/${index+1}.png`, import.meta.url).href
    }
    const player = computed(()=>{
      if(store.state.setting.playerNumber === 5){
        return 'Player'+ store.state.playerCard.cardList[0].player
      }
    })
    return {
      imgUrl,player
    }
  },
  props:{
    cardList:{
      type:Array,
      default:[1,1,1]
    }
  }
}
</script>

<style scoped>
  .user-card {
    display: flex;

  }
  .card {
    margin: 0 auto;
    width: 4rem;
    height: 7rem;
  }

  .card img {
    width: 4rem;
  }
  .clear {
    font-size:2rem;
    font-weight:bold;
    color:#ded7c2;
    margin: 0 auto;
    width: 7rem;
    height: 7rem;
    text-align:center;
  }
  .player {
    margin: 0 auto;
    margin-top: 3rem;
    margin-bottom: 1rem;
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
<template>
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
import {ref} from 'vue'
export default {
  name: "sideCard",
  setup() {
      function imgUrl(index){
        return new URL(`../../src/assets/${index+1}.png`, import.meta.url).href
      }
      return {
        imgUrl
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
  .card {
      width: 4rem;
      height: auto;
      margin-top: 0.5rem;
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
</style>
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
        return new URL(`../../src/assets/${index}.png`, import.meta.url).href
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
  .user-card {
    min-height:20rem;
  }
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
    margin-top: 2rem;
    writing-mode:vertical-lr;
    font-weight:bold;
    color:#ffffff;
    width: 4rem;
  }
</style>
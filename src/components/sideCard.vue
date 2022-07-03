<template>
  <div class="user-card">
    <div class="card" v-for="(item,index) in cardList">
      <img :src="imgUrl(item)" alt="">
    </div>
  </div>
</template>

<script>
import {ref} from 'vue'
export default {
  name: "sideCard",
  setup() {
      function imgUrl(index){
        return `src/assets/${index+1}.png`
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
</style>
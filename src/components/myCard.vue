<template>
 <div class="my-card-area">
    我的卡牌
   <div class="card">
      <div class="card-type" v-for="(item,index) in cardList">
        {{index}}
<!--        <img :src=`../assets/${index}.png` alt="">-->
      </div>
   </div>
 </div>
</template>

<script>
import {ref,watch} from "vue"
export default {
  name: "myCard",
  setup(){
    let cardList = [1,2,3,4,5,6,7,8,9]
    return {
      cardList
    }
  }
}
</script>

<style scoped>
  .my-card-area {
      width: 100%;
      max-width: 80rem;
      height: 8rem;
      border: 1px solid red;
  }
  .card {
      display: flex;
      height: 100%;
      justify-content: space-between;
  }
  .card-type {
      border: 1px solid green;
      width: 5rem;
      height: 6rem;
  }
  .card-type img {
      width:100%
  }
</style>
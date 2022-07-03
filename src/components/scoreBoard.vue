<template>
<div class="center">
  <div class="scoreboards">
      <div class="card-display" v-for="(item,index) in cardTypeNumberList">
        <img :src="getUrl(index)" alt="">
        <div class="fill" v-for="(number,index) in item.number">
            <div v-if="item.fill  > index && item.fill > 0">✔</div>
            <div v-else></div>
        </div>
      </div>
  </div>
</div>
</template>

<script>
import {ref,computed} from 'vue'
export default {
  name: "scoreBoards",
  setup(){
    const cardTypeNumberList = [{
      type:1,
      number:2,
      fill:1,
    },
      {
        type:2,
        number:2,
        fill:1,
      },
      {
        type:3,
        number:3,
        fill:3,
      },
      {
        type:4,
        number:3,
        fill:2,
      },
      {
        type:5,
        number:3,
        fill:2,
      },
      {
        type:6,
        number:4,
        fill:4,
      },
      {
        type:7,
        number:4,
        fill:2,
      },
      {
        type:8,
        number:4,
        fill:3,
      },
      {
        type:9,
        number:4,
        fill:2,
      },
    ]
    let cardFillIn = ref(cardTypeNumberList)

    function getUrl(index){
      return `src/assets/${index+1}.png`
    }
    return {
      cardTypeNumberList,cardFillIn,getUrl
    }
  }

}
</script>

<style scoped>
  .center {
    width: 100%;
  }
  .scoreboards {
    width: 100%;
    display: flex;
  }
  .card-display {
    width: 100%;
    text-align:center;
  }
  .card-display img {
    width: 2.8rem;
  }
  .fill {
    text-align:center;
    min-height:1.5rem;
    border: 1px solid black;
    margin-right:1px;
    margin-bottom:1px;
  }

</style>
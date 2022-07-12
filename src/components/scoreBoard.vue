<template>
  <div class="confirm">
    <button @click="confirm" :class="{prohibit:prohibit}">确定出牌</button>
  </div>
<div class="center">
  <div class="player">
    Player{{playerId}}
  </div>
  <div class="scoreboards">
      <div class="card-display" v-for="(item,index) in cardTypeNumberList">
        <img :src="getUrl(index)" alt="" ref="imgPosition" @click="choose(index)" :class="{active:item.isChoose}">
      </div>
  </div>
  <div class="credit-board">
    <div class="credit" v-for="(item,index) in cardTypeNumberList">
        <div class="fill" v-for="(number,index) in item.number">
          <div v-if="item.fill > index && item.fill > 0">✔</div>
          <div v-else></div>
        </div>
    </div>
  </div>
</div>
</template>

<script>
import {useStore} from 'vuex'
import {ref, computed, onMounted, getCurrentInstance, watch} from 'vue'
export default {
  name: "scoreBoards",
  setup(){
    const store = useStore()
    const currentChooseCard = ref(0)
    const { appContext } = getCurrentInstance()
    const imgPosition = ref(null)
    const prohibit = ref(true)
    const cardTypeNumberList = computed(()=>{
      return store.state.boardCredit.cardTypeNumberList
    })
    let cardFillIn = ref(cardTypeNumberList)

    function getUrl(index){
      return new URL(`../../src/assets/${index+1}.png`, import.meta.url).href

    }


    function choose(index) {
      for (let i = 0;i< 9 ;i++) {
        if(index !== i){
          cardTypeNumberList.value[i].isChoose = false
        }
      }
      currentChooseCard.value = index
      cardTypeNumberList.value[index].isChoose = !cardTypeNumberList.value[index].isChoose
    }

    function confirm(){
      appContext.config.globalProperties.$bus.emit('confirm',currentChooseCard.value)
    }
    const playerId = computed(()=>{
      return store.state.setting.playerId
    })
    watch(cardTypeNumberList,(old,newValue)=>{
      for(let i = 0;i< cardTypeNumberList.value.length;i++) {
        if(cardTypeNumberList.value[i].isChoose){
          prohibit.value = false
          break
        }else {
          prohibit.value = true
        }
      }

    },{deep:true})
    return {
      cardTypeNumberList,cardFillIn,getUrl,choose,imgPosition,confirm,prohibit,playerId
    }
  },


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
    height: 5rem;
    width: 100%;
    text-align:center;
    transition: all 1s;
  }
  .card-display img {
    width: 3.5rem;
    transition: all 0.5s;
  }
 .fill {
    opacity:0.7;
    background-color: #fff;
    text-align:center;
    min-height:1.5rem;
    border: 1px solid black;
    border-radius: 6px;
    margin-right:1px;
    margin-bottom:1px;
  }
  .credit {
    justify-content:space-between;
    flex:1;
  }
  .credit-board {
    color:#000000;
    margin-top: 1rem;
    width:100%;
    display:flex;
    justify-content:space-between;
  }
  .active {
    margin-top: -10px;
  }

  .confirm {
    text-align:center;
    margin-top: -5rem;
    margin-bottom:1.5rem;
  }

  .confirm button {
      color:white;
      background: url("/src/assets/img_1.png") no-repeat center center;
      background-position:20%;
      background-size: 100% 100%;
      cursor: pointer;
      width:9.6rem;
      height:2.4rem;
      border:none;
      border-radius: 1rem;
  }

  .prohibit {
    pointer-events: none;
    opacity:0.5;
  }

  .player {
    margin: 0 auto;
    margin-top: 4rem;
    line-height:1.5rem;
    width:7rem;
    height:1.5rem;
    text-align:center;
    color:#ffffff;
    background: url("../../src/assets/img_1.png") no-repeat center center;
    background-position:20%;
    background-size: 100% 100%;
    margin-bottom: 1.5rem;
  }
</style>
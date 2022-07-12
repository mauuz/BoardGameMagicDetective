<template>
  <div class="card" :class="{active:isActive}">
      <div class="front">
        <img src="../assets/back.png" alt="">
      </div>
      <div class="back">
        <img :src="imgUrl" alt="">
      </div>
  </div>
</template>

<script>
import {useStore} from 'vuex'
import {ref,onMounted,getCurrentInstance,computed} from 'vue'
export default {
  name: "centerCard",
  setup(){
    const store = useStore()
    const { appContext} = getCurrentInstance()
    let showCardType = computed(()=>{
      return store.state.centerShowCard.cardType
    })

    const isActive = computed(()=>{
        return store.state.centerShowCard.showCard
    })

    let imgUrl = computed(()=>{
          return new URL(`../../src/assets/${showCardType.value}.png`, import.meta.url).href

    })
    onMounted(()=>{
      appContext.config.globalProperties.$bus.on('confirm',(type)=>{
          store.commit('OPEN_CARD')
          currentChooseCard.value = type + 1

      })
    })

    return {
      isActive,imgUrl
    }

  }
}
</script>

<style scoped>
  .card {
      height:12.7rem;
      width:7.5rem;
      position:relative;
      transform-style: preserve-3d;
      perspective: 1000px;
      transition: all 1s;
  }

  .front,
  .back {
      height: 100%;
      width: 100%;
      position: absolute;
      backface-visibility: hidden;
      left: 0;
      top: 0;

  }
  .front img,
  .back img {
        height:12.7rem;
        width:7.5rem;
  }
  .back {
      transform: rotateY(180deg);
  }

  /*.card:hover {*/
  /*  transform: rotateY(180deg);*/
  /*}*/

  .active {
      transform: rotateY(-180deg);
  }

</style>
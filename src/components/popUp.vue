<template>
  <teleport to="body" v-if="showPopUp" >
      <div class="mask" @click.stop="close">
        <div class="center" >
            <div class="title">玩家人数</div>
            <div class="content" @click.stop="prevent">
              <choosePlayerNumber></choosePlayerNumber>
            </div>
        </div>

      </div>
  </teleport>

</template>

<script>
import choosePlayerNumber from "./choosePlayerNumber.vue";
import { ref,onMounted,getCurrentInstance} from 'vue'
export default {
  name: "popUp",
  setup(){
      const { appContext } = getCurrentInstance()
      let showPopUp = ref(false)
      function close (){
        showPopUp.value = false
      }
      function prevent(){

      }
      onMounted(()=>{
        appContext.config.globalProperties.$bus.on('createRoom',()=>{
          showPopUp.value = true
        })
      })
      return {
        showPopUp,close,prevent
      }
  },
  components:{
    choosePlayerNumber
  }
}
</script>

<style scoped>
  .title {
    color:#ffffff;
    font-weight:bold;
    font-size:2rem;
  }
  .mask {
    background-color: rgba(0,0,0,0.9);
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    z-index:999;
    transition: all 0.5s;
  }
  .content {
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content:center;
    /*background-color: #000000;*/
    min-height:15rem;
    width: 30rem;
    height: auto;
    border-radius: 1rem;
  }
  .center {

    width:100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
  }
</style>
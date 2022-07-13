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

  <teleport to="body" v-if="showEnterRoom" >
    <div class="mask" @click.stop="close">
      <div class="center" >
        <div class="title">房间号</div>
        <div class="content" @click.stop="prevent">
          <enterRoom></enterRoom>
        </div>
      </div>
    </div>
  </teleport>

  <teleport to="body" v-if="showWaiting">
    <div class="mask" >
        <div class="center" style="color:#ffffff;font-size:2rem">
            <div>等待其他玩家加入</div>
            <div>1/4</div>
            <div @click.stop="closeWaitingRoom" style="font-size:1rem;margin-top:1.5rem;">关闭</div>
        </div>
    </div>
  </teleport>

</template>

<script>
import {useStore} from 'vuex'
import choosePlayerNumber from "./choosePlayerNumber.vue";
import enterRoom from "./enterRoom.vue";
import { ref,onMounted,getCurrentInstance,computed} from 'vue'
export default {
  name: "popUp",
  setup(){
      const store = useStore()
      const { appContext } = getCurrentInstance()
      let showPopUp = ref(false)
      let showEnterRoom = ref(false)
      let showWaiting = computed(()=>{
        return store.state.waitingRoom.showWaitingInfo
      })
      function close (){
        showPopUp.value = false
        showEnterRoom.value = false
      }
      function prevent(){

      }
      function closeWaitingRoom(){
        store.commit('CLOSER_WAITING_ROOM')
      }
      onMounted(()=>{
        appContext.config.globalProperties.$bus.on('createRoom',()=>{
          showPopUp.value = true
        })

        appContext.config.globalProperties.$bus.on('enterRoom',()=>{
          showEnterRoom.value = true
        })
      })
      return {
        showPopUp,close,prevent,showEnterRoom,showWaiting,closeWaitingRoom
      }
  },
  components:{
    choosePlayerNumber,enterRoom
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
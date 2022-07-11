<template>
  <div class="bg">
    <div class="container">
        <div class="choose">
          <label>Magic Detective</label>
          <button>创建房间</button>
          <button>加入游戏</button>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "index"
}
</script>

<style scoped>
  .bg {
      display:flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width:100%;
      height:100%;

  }
  .bg button{
      font-size:1.3rem;
      font-weight: bold;
      margin-bottom:1rem;
      color:white;
      background: url("src/assets/img_1.png") no-repeat center center;
      background-position:20%;
      background-size: 100% 100%;
      cursor: pointer;
      height:4rem;
      border:none;
      border-radius: 1rem;
  }
  .choose {
      margin-top: -2rem;
      width: 20rem;
      display:flex;
      flex-direction:column;
  }
  .choose label {
      font-size:2.5rem;
      font-weight:bold;
      color:white;
      text-align:center;
      margin-bottom: 1rem;
  }
  /*.logo {*/
  /*    width:15rem;*/
  /*    height: 10rem;*/
  /*    font-size:1rem;*/
  /*}*/
  /*.logo img{*/
  /*    width: 15rem;*/
  /*    height: 15rem;*/
  /*}*/
</style>
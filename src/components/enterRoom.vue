<template>
  <div class="playerNumber">
    <div>
      <input type="text" maxlength="4">
    </div>
    <div>
      <button>确认</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "enterRoom"
}
</script>

<style scoped>
  .playerNumber {
    text-align:center;
    display: flex;
    flex-direction: column;
  }
  .playerNumber button {
    font-size:1.3rem;
    font-weight: bold;
    margin-bottom:1rem;
    color:white;
    background: url("../../src/assets/img_1.png") no-repeat center center;
    background-position:20%;
    background-size: 100% 100%;
    cursor: pointer;
    height:4rem;
    width:20rem;
    border:none;
    border-radius: 1rem;
  }
  .playerNumber input{
      font-size:1.5rem;
      font-weight:bold;
      text-align:center;
      text-decoration: none;
      outline:none;
      height:3rem;
      width:19rem;
      border:none;
      border-radius:2rem;
      margin-bottom: 2rem;
  }
</style>
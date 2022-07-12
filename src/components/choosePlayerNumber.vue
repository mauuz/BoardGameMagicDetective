<template>
    <div class="playerNumber">
      <div style="height:6rem;">
        <button>4 人(包括幽灵)</button>
      </div>
      <div>
        <button>5 人(包括幽灵)</button>
      </div>
    </div>
</template>

<script>
export default {
  name: "choosePlayerNumber"
}
</script>

<style scoped>
  .playerNumber {
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
</style>
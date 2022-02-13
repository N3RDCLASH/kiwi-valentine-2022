<template>
  <div class="flex flex-col w-full h-screen">
    <div
      class="flex flex-col h-2/5 bg-my-valentine bg-no-repeat bg-center bg-contain"
    ></div>
    <div class="form-container h-3/5">
      <h1 class="question-header">Will you be my valentine?</h1>

      <div class="button-container">
        <button class="button no" @click="clickedNo">No</button>
        <button class="button yes" @click="clickedYes">Yes</button>
      </div>
      <img src="../assets/img/wave.svg" class="bottom-0 absolute" alt="" />
    </div>
  </div>
</template>

<script>
import { confetti } from "dom-confetti";
import audio from "../assets/audio/tada.mp3";
export default {
  setup(props, context) {
    const clickedYes = (e) => {
      confetti(e.target);
      const tada = new Audio(audio);
      tada.play();
      setTimeout(() => context.emit("readyYes", true), 4000);
    };
    const clickedNo = (e) => {
      console.log(e);
      context.emit("readyNo", true);
    };
    return { clickedYes, clickedNo };
  },
};
</script>

<style lang="css" scoped>
.form-container {
  @apply flex flex-col justify-center rounded-t-lg gap-8 py-4;
}
.question-header {
  @apply text-center text-6xl  justify-self-center;
}
.button-container {
  @apply flex flex-row gap-8 justify-center;
}
.button {
  @apply text-white py-2 px-4 rounded w-32 block bg-white text-4xl;
}
.button.no {
  background-color: #ff7876;
}
.button.yes {
  background-color: #9ad14b;
}
</style>

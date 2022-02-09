<template>
  <div class="flex flex-col w-full h-screen">
    <div class="image-container flex flex-col h-2/5">
      <img src="../assets/img/kiwi-hearts.svg" class="h-full" alt="" />
    </div>
    <div class="form-container h-3/5">
      <h1 class="question-header">Are You Ready?</h1>

      <div class="button-container">
        <button class="button no" @click="clickedNo">No</button>
        <button class="button yes" @click="clickedYes">Yes</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup(props, context) {
    const clickedYes = () => {
      context.emit("readyYes", true);
    };
    const clickedNo = () => {
      context.emit("readyNo", true);
    };
    return { clickedYes, clickedNo };
  },
};
</script>

<style lang="css" scoped>
.form-container {
  @apply flex flex-col justify-center rounded-t-lg gap-8 py-4;
  background-color: #ff7876;
}
.question-header {
  @apply text-center text-6xl  justify-self-center;
}
.button-container {
  @apply flex flex-row gap-8 justify-center;
}
.button {
  @apply text-white py-2 px-4 rounded w-32 block bg-white text-4xl;
  color: #ff7876;
}
.button.no {
  color: #ff7876;
}
.button.yes {
  color: #9ad14b;
}
</style>

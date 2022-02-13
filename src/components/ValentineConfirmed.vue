<template>
  <div class="flex flex-col w-full h-screen">
    <div class="h-1/2 bg-valentine-confimed bg-no-repeat bg-center"></div>
    <div class="h-2/6">
      <h1 class="">Valentine Confirmed!</h1>
      <vue-countdown :time="time" v-slot="{ days, hours, minutes, seconds }">
        <h2 class="">
          {{ days }} day{{ days == 1 ? "s" : "" }}, {{ hours }} hours,
          {{ minutes }} minutes, {{ seconds }} seconds.
        </h2>
      </vue-countdown>
    </div>
    <div class="h-1/6 p-0">
      <img src="../assets/img/wave.svg" class="bottom-0 absolute" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    const now = new Date();
    const valentinesDay = new Date("14 Feb 2022");

    return {
      time: valentinesDay - now,
    };
  },
};
</script>

<style lang="css" scoped>
h1 {
  @apply text-center text-6xl  justify-self-center;
}
h2 {
  @apply mt-5 text-center text-3xl md:text-4xl font-bold justify-self-center;
  color: #ff7876;
}
</style>

<template>
  <div class="flex flex-col w-full h-screen">
    <div class="h-1/2 bg-valentine-confimed bg-no-repeat bg-center"></div>
    <div class="h-2/6">
      <h1 class="">Valentine Confirmed!</h1>
      <div class="flex justify-center mt-4">
        <iframe
          src="https://open.spotify.com/embed/playlist/1IfQLMOT8MhZSPkwmvt1ij"
          width="300"
          height="80"
          frameborder="0"
          allowtransparency="true"
          allow="encrypted-media"
        ></iframe>
      </div>
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

    window.localStorage.setItem("valentineConfirmed", "true");
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
.calendar {
  @apply mt-2 block w-40 text-center pt-2  text-white rounded mx-auto text-2xl;
  background-color: #9ad14b;
}
</style>

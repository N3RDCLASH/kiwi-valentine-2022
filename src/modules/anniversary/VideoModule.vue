<template>
  <section class="h-full flex flex-col">
    <picture class="z-10">
      <img
        src="../../assets/img/qoute-mobile.svg"
        class="w-full h-full md:hidden block"
        alt=""
      />
      <img
        src="../../assets/img/qoute-desktop.svg"
        class="w-full h-full hidden md:block"
        alt=""
      />
    </picture>
    <video
      :ref="
        (el) => {
          videoPlayer = el;
        }
      "
      class="-mt-[6rem] z-0"
      src="../../assets/video/voltzberg.mp4"
      :autoplay="true"
      muted
      loop
      preload="true"
    ></video>
  </section>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";

export default defineComponent({
  setup() {
    const videoPlayer = ref();
    onMounted(() => {
      console.log(videoPlayer);
      document.body.click();
      videoPlayer.value.play();
    });
    return {
      videoPlayer,
    };
  },
});
</script>

<style scoped></style>

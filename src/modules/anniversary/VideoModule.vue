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
    <div
      class="content before:text-[20px] before:md:text-[40px] before:lg:text-[96px]"
    >
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
    </div>
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

<style scoped>
.content {
  position: relative;
}
.content video {
  width: 100%;
  display: block;
}
.content:before {
  content: "Where it all started.";
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-family: "Cutive";
  position: absolute;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 5px;
  top: -6rem;
  right: 0;
  bottom: 0;
  left: 0;
}
</style>

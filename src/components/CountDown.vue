<template>
  <div class="flex flex-col justify-center w-full h-screen">
    <h1
      class="text-6xl text-center slide-fwd-center flex flex-col justify-self-center"
    >
      {{ countdown }}
    </h1>
    <h1
      class="text-6xl text-center slide-fwd-center flex flex-col justify-self-center"
    >
    Here we go...
    </h1>
  </div>
</template>

<script>
import { reactive, toRefs, toRef } from "vue";

export default {
  setup(props, { emit, attrs: { time } }) {
    const state = reactive({ countdown: time });
    const timer = (timeLeft) => {
      if (timeLeft == 0) return emit("timerDone", true);

      state.countdown = timeLeft--;
      setTimeout(() => {
        return timer(timeLeft);
      }, 1000);
    };
    timer(time);
    return {
      ...toRefs(state),
    };
  },
};
</script>

<style lang="css" scoped>
.slide-fwd-center {
  -webkit-animation: slide-fwd-center 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    both;
  animation: slide-fwd-center 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

/**
 * ----------------------------------------
 * animation slide-fwd-center
 * ----------------------------------------
 */
@-webkit-keyframes slide-fwd-center {
  0% {
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
  }
  100% {
    -webkit-transform: translateZ(160px);
    transform: translateZ(160px);
  }
}
@keyframes slide-fwd-center {
  0% {
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
  }
  100% {
    -webkit-transform: translateZ(160px);
    transform: translateZ(160px);
  }
}
</style>

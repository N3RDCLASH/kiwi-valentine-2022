<template>
  <section class="lg:min-h-screen h-full flex flex-col lg:flex-row">
    <!-- mobile -->
    <div class="md:hidden flex flex-col items-center gap-6">
      <h1 class="text-[40px] text-center">Happy Anniversary!</h1>
      <img src="../../assets/img/couple.png" class="h-full w-full" alt="" />
      <h2 class="text-[40px] text-center font-bold font-dancing-script">
        5 Wonderful Years!
      </h2>
    </div>
    <!-- desktop -->
    <div
      class="hidden md:flex flex-col flex-1 gap-10 2xl:gap-20 items-center justify-center px-10"
    >
      <h1 class="text-6xl xl:text-8xl text-center">Happy Anniversary!</h1>
      <h2
        class="text-6xl xl:text-8xl text-center font-bold font-dancing-script"
      >
        5 Wonderful Years!
      </h2>
    </div>
    <div
      class="hidden md:flex flex-col flex-1 items-center justify-center px-10"
    >
      <img
        src="../../assets/img/couple.png"
        class="max-w-[30em] xl:max-w-[36em] 2xl:max-w-[45em]"
        alt=""
      />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style scoped></style>

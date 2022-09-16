<template>
  <section class="flex flex-col items-center py-10 gap-4">
    <h2 class="text-[24px] md:text-[40px] lg:text-[64px]">
      Some momements we’ve shared.
    </h2>
    <carousel
      :items-to-show="3"
      :autoplay="2000"
      class="bg-[url(/assets/rose-bg.png)] bg-repeat bg-contain py-10 max-w-full overflow-x-clip"
    >
      <slide v-for="(slide, index) in moments" :key="index">
        <div
          class="flex flex-col max-h-[40em] shadow-md rounded-md self-center"
        >
          <img
            :src="`/assets/moments/${slide.url}`"
            class="h-full rounded-md"
            alt=""
          />
        </div>
      </slide>
      <template #addons>
        <Pagination />
      </template>
    </carousel>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import { moments } from "../../config/index";
import "vue3-carousel/dist/carousel.css";
export default defineComponent({
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  setup() {
    return { moments };
  },
});
</script>

<style>
.carousel__track {
  display: flex !important;
  gap: 2em;
}
.carousel__slide {
  height: inherit !important;
}
</style>

<template>
  <section class="flex flex-col items-center py-10">
    <h2 class="text-[20px] md:text-[40px] lg:text-[64px]">
      Some momements we’ve shared.
    </h2>
    <carousel :items-to-show="1" :autoplay="2000">
      <slide v-for="(slide, index) in moments" :key="index">
        <div class="flex flex-col h-[30em] shadow-md rounded-md self-center">
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
}
.carousel__slide {
  height: inherit !important;
}
</style>

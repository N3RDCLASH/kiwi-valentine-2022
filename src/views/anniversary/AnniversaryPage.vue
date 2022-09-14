<template>
  <div class="2xl:container mx-auto">
    <hero-module></hero-module>
    <video-module></video-module>
    <moments-module></moments-module>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
  HeroModule,
  VideoModule,
  MomentsModule,
} from "../../modules/anniversary/index";
export default defineComponent({
  components: { HeroModule, VideoModule, MomentsModule },
  setup() {
    return {};
  },
});
</script>

<style>
body {
  font-family: "Happy Monkey", cursives !important;
}
</style>

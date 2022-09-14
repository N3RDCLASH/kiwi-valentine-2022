<template>
  <div class="2xl:container mx-auto">
    <header-component></header-component>
    <hero-module></hero-module>
    <video-module></video-module>
    <moments-module></moments-module>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
  HeaderComponent,
  HeroModule,
  VideoModule,
  MomentsModule,
} from "../../modules/anniversary/index";
export default defineComponent({
  components: { HeaderComponent, HeroModule, VideoModule, MomentsModule },
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

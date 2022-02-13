<template>
  <div class="flex items-stretch grow">
    <proposal-flow></proposal-flow>
  </div>
</template>

<script setup lang="ts">
import ProposalFlow from "./views/proposal/ProposalFlow.vue";
import "./assets/index.css";
</script>
<style>
#app {
  @apply min-h-screen;
}
</style>

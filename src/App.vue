<template>
  <div class="flex items-stretch grow">
    <ProposalFlow></ProposalFlow>
  </div>
</template>

<script setup lang="ts">
import ProposalFlow from "./views/proposal/ProposalFlow.vue";
</script>
<style>
#app {
  @apply min-h-screen;
}
</style>

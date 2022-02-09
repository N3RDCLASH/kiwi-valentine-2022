<template>
  <AreYouReady
    v-if="this.state.readyYes == false"
    @readyYes="(state) => (this.state.readyYes = state)"
    @readyNo="(state) => (this.state.readyNo = state)"
  ></AreYouReady>
  <BeMyValentine
    v-if="this.state.readyYes"
    @readyYes="(state) => (this.state.valentineYes = state)"
    @readyNo="(state) => (this.state.valentineNo = state)"
  ></BeMyValentine>
</template>

<script>
import { reactive } from "@vue/reactivity";
import AreYouReady from "../../components/AreYouReady.vue";
import BeMyValentine from "../../components/BeMyValentine.vue";
export default {
  components: {
    AreYouReady,
    BeMyValentine,
  },
  setup() {
    const state = reactive({
      readyYes: false,
      readyNo: false,
      valentineYes: false,
      readyNo: false,
    });
    const logEvent = (data) => console.log(data);
    return {
      state,
      logEvent,
    };
  },
};
</script>

<style lang="scss" scoped></style>

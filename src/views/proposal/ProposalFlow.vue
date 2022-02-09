<template>
  <AreYouReady
    v-if="this.state.readyYes == false"
    @readyYes="(state) => (this.state.readyYes = state)"
    @readyNo="(state) => (this.state.readyNo = state)"
  ></AreYouReady>
  <BeMyValentine
    v-if="this.state.readyYes && !this.state.valentineYes"
    @readyYes="(state) => (this.state.valentineYes = state)"
    @readyNo="(state) => (this.state.valentineNo = state)"
  ></BeMyValentine>
  <ValentineConfirmed v-if="this.state.valentineYes"></ValentineConfirmed>
</template>

<script>
import { reactive } from "@vue/reactivity";
import AreYouReady from "../../components/AreYouReady.vue";
import BeMyValentine from "../../components/BeMyValentine.vue";
import ValentineConfirmed from "../../components/ValentineConfirmed.vue";
export default {
  components: {
    AreYouReady,
    BeMyValentine,
    ValentineConfirmed,
  },
  setup() {
    const state = reactive({
      readyYes: false,
      readyNo: false,
      valentineYes: false,
      valentineNo: false,
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

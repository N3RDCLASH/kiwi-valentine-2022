<template>
  <are-you-ready
    v-if="!this.state.displayTimer && !this.state.readyYes"
    @readyYes="(state) => (this.state.displayTimer = state)"
    @readyNo="(state) => (this.state.readyNo = state)"
  ></are-you-ready>
  <modal
    v-if="this.state.readyNo"
    message="Try again!"
    @isOpen="(value) => (this.state.readyNo = value)"
  ></modal>
  <count-down
    v-if="this.state.displayTimer"
    :time="5"
    @timerDone="
      () => {
        this.state.readyYes = true;
        this.state.displayTimer = false;
      }
    "
  ></count-down>
  <be-my-valentine
    v-if="this.state.readyYes && !this.state.valentineYes"
    @readyYes="(state) => (this.state.valentineYes = state)"
    @readyNo="(state) => (this.state.valentineNo = state)"
  ></be-my-valentine>
  <modal
    v-if="this.state.valentineNo"
    message="Sike🥴  Try again!"
    @isOpen="(value) => (this.state.valentineNo = value)"
  ></modal>
  <valentine-confirmed v-if="this.state.valentineYes"></valentine-confirmed>
</template>

<script>
import { reactive } from "@vue/reactivity";
import AreYouReady from "../../components/AreYouReady.vue";
import BeMyValentine from "../../components/BeMyValentine.vue";
import ValentineConfirmed from "../../components/ValentineConfirmed.vue";
import CountDown from "../../components/CountDown.vue";
import Modal from "../../components/Modal.vue";
export default {
  components: {
    AreYouReady,
    BeMyValentine,
    ValentineConfirmed,
    CountDown,
    Modal,
  },
  setup() {
    const state = reactive({
      readyYes: false,
      readyNo: false,
      displayTimer: false,
      valentineYes: false,
      valentineNo: false,
    });
    return {
      state,
    };
  },
};
</script>

<style lang="scss" scoped></style>

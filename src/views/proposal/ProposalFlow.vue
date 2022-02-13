// Not the most efficient way to transitions or conditional rendering 🥴
<template>
  <transition name="fadeo" mode="in-out">
    <are-you-ready
      v-if="!this.state.displayTimer && !this.state.readyYes"
      @readyYes="(state) => (this.state.displayTimer = state)"
      @readyNo="(state) => (this.state.readyNo = state)"
    ></are-you-ready>
  </transition>
  <transition name="fadeo" mode="in-out">
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
  </transition>
  <transition name="fadeo" mode="in-out">
    <be-my-valentine
      v-if="this.state.readyYes && !this.state.valentineYes"
      @readyYes="(state) => (this.state.valentineYes = state)"
      @readyNo="(state) => (this.state.valentineNo = state)"
    ></be-my-valentine>
  </transition>
  <transition name="fadeo" mode="in-out">
    <valentine-confirmed v-if="this.state.valentineYes"></valentine-confirmed>
  </transition>

  <modal
    v-if="this.state.readyNo"
    message="Try again!"
    @isOpen="(value) => (this.state.readyNo = value)"
  ></modal>

  <modal
    v-if="this.state.valentineNo"
    message="Sike🥴  Try again!"
    @isOpen="(value) => (this.state.valentineNo = value)"
  ></modal>
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

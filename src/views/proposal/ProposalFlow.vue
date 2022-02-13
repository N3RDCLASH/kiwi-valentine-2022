// Not the most efficient way to transitions or conditional rendering 🥴
<template>
  <div
    class="flex flex-col h-screen justify-center items-center w-full"
    v-if="this.state.loading"
  >
    <svg
      class="animate-spin -ml-1 mr-3 h-5 w-5 pink-text w-1/4"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        class="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        stroke-width="4"
      ></circle>
      <path
        class="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
  </div>
  <transition name="fadeo" mode="in-out">
    <are-you-ready
      v-if="
        !this.state.loading && !this.state.displayTimer && !this.state.readyYes
      "
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
    const loadDelay = () => {
      setTimeout(() => (state.loading = false), 1000);
    };
    loadDelay();
    const state = reactive({
      loading: true,
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

<style lang="css" scoped>
.pink-text {
  color: #ff7876;
}
</style>

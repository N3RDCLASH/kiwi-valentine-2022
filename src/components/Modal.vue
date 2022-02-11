<template>
  <div
    v-clickOutside="clickOutside"
    :class="{ hidden: isActive, focus: isActive }"
    class="flex justify-center align-middle overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-50 items-center h-screen md:inset-0"
  >
    <div
      class="w-2/3 md:w-1/6 bg-yellow-500 h-2/6 rounded flex flex-col justify-center"
    >
      <div
        @click="handleClose"
        class="cursor-pointer flex justify-end -mt-12 mr-4"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>
      <span
        class="flex justify-center align-content-middle text-6xl text-center mt-4"
      >
        {{ message }}
      </span>
    </div>
  </div>
  <div class="h-screen bg-black opacity-50 w-full absolute"></div>
</template>

<script>
import { toRefs } from "vue";
import vClickOutside from "click-outside-vue3";

export default {
  emits: ["clickedOutside", "isOpen"],
  props: {
    message: String,
    isActive: Boolean,
  },
  directives: {
    clickOutside: vClickOutside.directive,
  },
  setup(props, context) {
    const clickOutside = () => {
      console.log("test");
    };
    const handleClose = () => {
      context.emit("isOpen", false);
    };
    const { message } = toRefs(props);
    return { message, clickOutside, handleClose };
  },
};
</script>

<style lang="scss" scoped></style>

import { createApp } from "vue";
import vClickOutside from "click-outside-vue3";
import VueCountdown from "@chenfengyuan/vue-countdown";
import App from "./App.vue";
import "./index.css";

const AppInstance = createApp(App);
AppInstance.use(vClickOutside);
AppInstance.component(VueCountdown.name, VueCountdown);
AppInstance.mount("#app");

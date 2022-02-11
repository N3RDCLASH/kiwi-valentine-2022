import { createApp } from "vue";
import vClickOutside from "click-outside-vue3";
import App from "./App.vue";
import "./index.css";

const AppInstance = createApp(App);
AppInstance.use(vClickOutside);
AppInstance.mount("#app");

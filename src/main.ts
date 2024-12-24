import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import roteador from "./router/router";
import { createPinia } from "pinia";

createApp(App).use(createPinia()).use(roteador).mount("#app");
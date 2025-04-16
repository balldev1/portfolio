import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "@/router/index";
import i18n from "./language/i18n";

const app = createApp(App);
app.use(i18n);
app.use(router);
app.mount("#app");

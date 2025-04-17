import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "@/router/index";
import i18n from "./language/i18n";
import PrimeVue from "primevue/config";
import "primevue/resources/themes/lara-light-indigo/theme.css";
import "primeicons/primeicons.css";

const app = createApp(App);
app.use(i18n);
app.use(router);
app.use(PrimeVue);
app.mount("#app");

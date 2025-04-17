import { createWebHistory, createRouter } from "vue-router";

import Home from "../views/Home.vue";
import Contact from "../views/Contact.vue";
import Currency from "../views/Currency.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/contact", component: Contact },
  { path: "/currency", component: Currency },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

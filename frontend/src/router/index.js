import { createWebHistory, createRouter } from "vue-router";

import Home from "../views/Home.vue";
import Contact from "../views/Contact.vue";
import Wiress_guru from "../views/Wirelessguru.vue";
import Ssit from "../views/Ssit.vue";
import Modernnetwork from "../views/Modernnetwork.vue";
import Pokemon from "../views/Pokemon.vue";
import Currency from "../views/Currency.vue";
import Note from "../views/Note.vue";
import Tr069 from "../views/Tr069.vue";
import Weight from "../views/Weight.vue";
import Door from "../views/Door.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/contact", component: Contact },
  { path: "/wireless-guru", component: Wiress_guru },
  { path: "/ss-it", component: Ssit },
  { path: "/modern-network", component: Modernnetwork },
  { path: "/tr069", component: Tr069 },
  { path: "/weight", component: Weight },
  { path: "/door", component: Door },
  { path: "/pokemon", component: Pokemon },
  { path: "/currency", component: Currency },
  { path: "/note", component: Note },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

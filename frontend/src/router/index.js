import { createWebHistory, createRouter } from "vue-router";

import Home from "../views/Home.vue";
import Public from "../views/Public.vue";
import Wiress_guru from "../views/Wirelessguru.vue";
import Ssit from "../views/Ssit.vue";
import Modernnetwork from "../views/Modernnetwork.vue";
import OrderFood from "../views/OrderFood.vue";
import Pokemon from "../views/Pokemon.vue";
import Currency from "../views/Currency.vue";
import Note from "../views/Note.vue";
import Tr069 from "../views/Tr069.vue";
import Weight from "../views/Weight.vue";
import Door from "../views/Door.vue";
import Springboot from "../views/Springboot.vue";
import Rustauth from "@/views/Rustauth.vue";
import Basic from "@/views/Basic.vue";
import Thinking from "@/views/Thinking.vue";
import Cdn from "@/views/Cdn.vue";
import Cache from "@/views/Cache.vue";
import Load_balancer from "@/views/Load_balancer.vue";
import Messagequeue from "@/views/Messagequeue.vue";
import Pub_sub from "@/views/Pub_sub.vue";
import Api_protocols from "@/views/Api_protocols.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/public", component: Public },
  { path: "/wireless-guru", component: Wiress_guru },
  { path: "/ss-it", component: Ssit },
  { path: "/modern-network", component: Modernnetwork },
  { path: "/tr069", component: Tr069 },
  { path: "/orderfood", component: OrderFood },
  { path: "/weight", component: Weight },
  { path: "/door", component: Door },
  { path: "/pokemon", component: Pokemon },
  { path: "/currency", component: Currency },
  { path: "/note", component: Note },
  { path: "/springboot", component: Springboot },
  { path: "/rustauth", component: Rustauth },
  { path: "/basic", component: Basic },
  { path: "/thinking", component: Thinking },
  { path: "/cdn", component: Cdn },
  { path: "/cache", component: Cache },
  { path: "/load_balancer", component: Load_balancer },
  { path: "/messagequeue", component: Messagequeue },
  { path: "/pub_sub", component: Pub_sub },
  { path: "/api_protocols", component: Api_protocols },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

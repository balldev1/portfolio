<template>
  <div class="flex gap-6 w-full">
    <!-- เนื้อหาหลัก -->
    <div class="flex-1 flex flex-col gap-4 pb-10">
      <h1 class="text-4xl underline underline-offset-8 font-semibold">
        Basicสรุปตามความเข้าใจ
      </h1>

      <div ref="domRef"><Dom /></div>
      <div ref="oopRef"><Oop /></div>
      <div ref="mvcRef"><Mvc /></div>
      <div ref="lifecycleRef"><Lifecycle /></div>
      <div ref="propsemitRef"><Propsemit /></div>
      <div ref="vuenuxtRef"><Vuenuxt /></div>
      <div ref="jqueryvueRef"><Jqueryvue /></div>
      <div ref="vifvshowRef"><Vifvshow /></div>
      <div ref="watch_computedRef"><Watch_computed /></div>
      <div ref="sql_nosqlRef"><Sql_nosql /></div>
    </div>

    <!-- เมนู sticky -->
    <div class="w-80 sticky top-24 self-start -balance">
      <button
        v-for="section in sections"
        :key="section.name"
        @click="scrollTo(section.name as SectionName)"
        :class="{
          'bg-gray-500 text-white': activeSection === section.name,
          'bg-white': activeSection !== section.name,
        }"
        class="btn btn-sm border-none text-black rounded m-1 hover:bg-gray-500 hover:text-white uppercase"
      >
        {{ section.label }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Dom from "./Basic/Dom.vue";
import Oop from "./Basic/Oop.vue";
import Mvc from "./Basic/Mvc.vue";
import Lifecycle from "./Basic/lifecycle.vue";
import Propsemit from "./Basic/Propsemit.vue";
import Vuenuxt from "./Basic/Vuenuxt.vue";
import Jqueryvue from "./Basic/Jqueryvue.vue";
import Vifvshow from "./Basic/Vifvshow.vue";
import Watch_computed from "./Basic/Watch_computed.vue";
import Sql_nosql from "./Basic/Sql_nosql.vue";

type SectionName =
  | "dom"
  | "oop"
  | "mvc"
  | "lifecycle"
  | "propsemit"
  | "vuenuxt"
  | "jqueryvue"
  | "vifvshow"
  | "watch_computed"
  | "sql_nosql";
const activeSection = ref<SectionName | null>(null);

const refsMap: Record<SectionName, any> = {
  dom: ref<HTMLElement | null>(null),
  oop: ref<HTMLElement | null>(null),
  mvc: ref<HTMLElement | null>(null),
  lifecycle: ref<HTMLElement | null>(null),
  propsemit: ref<HTMLElement | null>(null),
  vuenuxt: ref<HTMLElement | null>(null),
  jqueryvue: ref<HTMLElement | null>(null),
  vifvshow: ref<HTMLElement | null>(null),
  watch_computed: ref<HTMLElement | null>(null),
  sql_nosql: ref<HTMLElement | null>(null),
};

const sections: { name: SectionName; label: string }[] = [
  { name: "dom", label: "Dom" },
  { name: "oop", label: "OOP" },
  { name: "mvc", label: "MVC" },
  { name: "lifecycle", label: "Lifecycle" },
  { name: "propsemit", label: "Props | emit" },
  { name: "vuenuxt", label: "vue | nuxt" },
  { name: "jqueryvue", label: "Jquery | Vue" },
  { name: "vifvshow", label: "v-if | v-show" },
  { name: "watch_computed", label: "Watch | Computed" },
  { name: "sql_nosql", label: "sql | nosql" },
];

const scrollTo = (section: SectionName) => {
  activeSection.value = section;
  refsMap[section].value?.scrollIntoView({ behavior: "smooth" });
};

const domRef = refsMap.dom;
const oopRef = refsMap.oop;
const mvcRef = refsMap.mvc;
const lifecycleRef = refsMap.lifecycle;
const propsemitRef = refsMap.propsemit;
const vuenuxtRef = refsMap.vuenuxt;
const jqueryvueRef = refsMap.jqueryvue;
const vifvshowRef = refsMap.vifvshow;
const watch_computedRef = refsMap.watch_computed;
const sql_nosqlRef = refsMap.sql_nosql;
</script>

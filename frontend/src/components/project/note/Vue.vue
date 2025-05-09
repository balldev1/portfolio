<template>
  <div class="flex gap-6 w-full">
    <!-- เนื้อหาหลัก -->
    <div class="flex-1 flex flex-col gap-4 pb-10">
      <h1 class="text-4xl underline underline-offset-8 font-semibold">
        Vue สรุปตามความเข้าใจ
      </h1>

      <div class="mt-5 flex flex-col gap-5 w-full items-center">
        <img src="/project/vue.webp" loading="lazy" class="w-full h-96" />
      </div>

      <div ref="testRef">
        <div class="flex flex-col gap-4">
          <span
            class="text-gray-950 border-none uppercase text-balance mt-2 badge bg-white p-4 shadow-md shadow-gray-500"
          >
            Test
          </span>

          <span class="text-gray-300 leading-8"> comming soon </span>
        </div>
        <div className="divider "></div>
      </div>
      <!-- <div ref="oopRef"><Oop /></div> -->
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
import Oop from "./Basic/Oop.vue";

type SectionName = "test" | "oop";

const activeSection = ref<SectionName | null>(null);

const refsMap: Record<SectionName, any> = {
  test: ref<HTMLElement | null>(null),
  oop: ref<HTMLElement | null>(null),
};

const sections: { name: SectionName; label: string }[] = [
  { name: "test", label: "Test" },
  { name: "oop", label: "OOP" },
];

const scrollTo = (section: SectionName) => {
  activeSection.value = section;
  refsMap[section].value?.scrollIntoView({ behavior: "smooth" });
};

const testRef = refsMap.test;
const oopRef = refsMap.oop;
</script>

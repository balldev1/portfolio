<template>
  <div class="flex gap-6 w-full">
    <!-- เนื้อหาหลัก -->
    <div class="flex-1 flex flex-col gap-4 pb-10">
      <h1 class="text-4xl underline underline-offset-8 font-semibold">
        Blog Thinking Develop Yourself
      </h1>

      <div ref="sensitiveRef"><Sensitive /></div>
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
import Sensitive from "./Thinking/Sensitive.vue";

type SectionName = "sensitive";
const activeSection = ref<SectionName | null>(null);

const refsMap: Record<SectionName, any> = {
  sensitive: ref<HTMLElement | null>(null),
};

const sections: { name: SectionName; label: string }[] = [
  { name: "sensitive", label: "Sensitive" },
];

const scrollTo = (section: SectionName) => {
  activeSection.value = section;
  refsMap[section].value?.scrollIntoView({ behavior: "smooth" });
};

const sensitiveRef = refsMap.sensitive;
</script>

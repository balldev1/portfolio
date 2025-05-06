<template>
  <div class="flex gap-6 w-full">
    <!-- เนื้อหาหลัก -->
    <div class="flex-1 flex flex-col gap-4">
      <h1 class="text-4xl underline underline-offset-8 font-semibold">
        Basic สรุปตามความเข้าใจ
      </h1>

      <div ref="domRef">
        <Dom />
      </div>

      <div ref="oopRef">
        <Oop />
      </div>
    </div>

    <!-- เมนู sticky -->
    <div class="w-60 p-2 sticky pl-5 top-24 self-start">
      <button
        @click="scrollTo('dom')"
        :class="{
          'bg-gray-500 text-white': activeSection === 'dom',
          'bg-white': activeSection !== 'dom',
        }"
        class="btn btn-sm border-none text-black rounded m-1 hover:bg-gray-500 hover:text-white"
      >
        dom
      </button>

      <button
        @click="scrollTo('oop')"
        :class="{
          'bg-gray-500 text-white': activeSection === 'oop',
          'bg-white': activeSection !== 'oop',
        }"
        class="btn btn-sm border-none text-black rounded m-1 hover:bg-gray-500 hover:text-white"
      >
        oop
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Dom from "./Basic/Dom.vue";
import Oop from "./Basic/Oop.vue";

// ตัวแปรเดียวใช้เก็บ section ที่ active
const activeSection = ref<"dom" | "oop" | null>(null);

// refs สำหรับการเลื่อน
const domRef = ref<HTMLElement | null>(null);
const oopRef = ref<HTMLElement | null>(null);

// ฟังก์ชันรวม
const scrollTo = (section: "dom" | "oop") => {
  activeSection.value = section;
  if (section === "dom") {
    domRef.value?.scrollIntoView({ behavior: "smooth" });
  } else if (section === "oop") {
    oopRef.value?.scrollIntoView({ behavior: "smooth" });
  }
};
</script>

<style scoped></style>

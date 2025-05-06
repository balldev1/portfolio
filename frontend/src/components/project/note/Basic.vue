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
        @click="scrollToDom"
        :class="{
          'bg-gray-500 text-white ': isDomActive,
          'bg-white': !isDomActive,
        }"
        class="btn btn-sm border-none text-black rounded m-1 hover:bg-gray-500 hover:text-white"
      >
        dom
      </button>
      <button
        @click="scrollToOop"
        :class="{
          'bg-gray-500 text-white': isOopActive,
          'bg-white': !isOopActive,
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

// สถานะของปุ่มที่จะติดคลาส bg-gray-500
const isOopActive = ref(false);
const isDomActive = ref(false);

// refs สำหรับการเลื่อน
const domRef = ref<HTMLElement | null>(null);
const oopRef = ref<HTMLElement | null>(null);

const scrollToDom = () => {
  domRef.value?.scrollIntoView({ behavior: "smooth" });
  // เปลี่ยนสถานะของปุ่ม
  isDomActive.value = true;
  isOopActive.value = false; // ลบคลาส bg-gray-500 เมื่อไปที่ dom
};

const scrollToOop = () => {
  oopRef.value?.scrollIntoView({ behavior: "smooth" });
  // เปลี่ยนสถานะของปุ่ม
  isDomActive.value = false; // ลบคลาส bg-gray-300 เมื่อไปที่ oop
  isOopActive.value = true; // เพิ่มคลาส bg-gray-500 เมื่อไปที่ oop
};
</script>

<style scoped></style>

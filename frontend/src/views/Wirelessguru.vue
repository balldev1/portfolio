<template>
  <div class="w-full h-screen relative">
    <!-- แสดง Loading ระหว่างโหลด -->
    <div
      v-if="isLoading"
      class="absolute inset-0 flex items-center justify-center bg-stone-950 z-10"
    >
      <span
        className="loading loading-spinner loading-4xl text-stone-500 w-30 animate-pulse"
      ></span>
    </div>

    <!-- iframe แสดงเว็บ -->
    <iframe
      src="https://wireless-guru.com/"
      class="w-full h-full border-none"
      frameborder="0"
      @load="isLoading = false"
      @error="handleError"
    ></iframe>
  </div>
</template>

<script setup>
import { ref } from "vue";

const isLoading = ref(true);

const handleError = () => {
  console.error("โหลด iframe ไม่สำเร็จ");
  isLoading.value = false; // หรือจะแสดงข้อความ error แทน
};
</script>

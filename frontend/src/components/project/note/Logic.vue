<template>
  <div class="flex flex-col gap-4 w-full">
    <h1 class="text-4xl underline underline-offset-8 font-semibold">Logic</h1>

    <span
      class="text-gray-300 text-lg text-balance mt-2 badge p-4 shadow shadow-gray-500"
    >
      สรุปตามความเข้าใจ
    </span>

    <div class="my-5 flex flex-col gap-5">
      <img src="/project/logic.webp" loading="lazy" class="" alt="cdn" />
    </div>

    <div class="my-5 flex flex-col gap-5">
      <img src="/project/logic2.webp" loading="lazy" class="" alt="cdn" />
    </div>

    <div class="my-5 flex flex-col gap-5">
      <img src="/project/logic3.webp" loading="lazy" class="" alt="cdn" />
    </div>
  </div>
</template>

<script setup>
import { useSeo } from "@/composables/useSeo.js";

useSeo({
  title: "Logic",
  description: "Content Delivery Network",
  keywords: "logic",
  url: "https://portfolio-frontend-ten-steel.vercel.app/",
});
</script>

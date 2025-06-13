<template>
  <div class="flex flex-col gap-4 w-full">
    <h1 class="text-4xl underline underline-offset-8 font-semibold">
      Fail over
    </h1>

    <span
      class="text-gray-300 text-lg text-balance mt-2 badge p-4 shadow shadow-gray-500"
    >
      สรุปตามความเข้าใจ
    </span>

    <span class="text-gray-300 text-md text-balance">
      Fail over = การเปลี่ยนไปใช้ สำรอง อัตโนมัติ เมื่อของหลัก พัง
    </span>

    <div class="my-5 flex flex-col gap-5">
      <img
        src="/project/failover.webp"
        loading="lazy"
        class=""
        alt="Publish (topic) / Subscribe (sub)"
      />
    </div>
  </div>
</template>

<script setup>
import { useSeo } from "@/composables/useSeo.js";

useSeo({
  title: "Failover",
  description: "Failover,Server ",
  keywords: "Failover,Server",
  url: "https://portfolio-frontend-ten-steel.vercel.app/",
});
</script>

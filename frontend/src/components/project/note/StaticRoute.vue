<template>
  <div class="flex flex-col gap-4 w-full">
    <h1 class="text-4xl underline underline-offset-8 font-semibold">
      Static Route
    </h1>

    <span
      class="text-gray-300 text-lg text-balance mt-2 badge p-4 shadow shadow-gray-500"
    >
      สรุปตามความเข้าใจ
    </span>

    <span class="text-gray-300 text-md text-balance">
      <br />
      Static Routing ก็เหมือนกับ บอกพนักงานส่งของว่า ไม่ว่าอะไรจะเกิดขึ้น
      ต้องเอาพัสดุไปบ้านเลขที่ 2 เท่านั้น ถนนไปบ้านเลขที่ 2 ถูกปิด หรือมีการ
      <br />
      ย้ายบ้านเลขที่ 2 ไปที่ใหม่ พนักงานก็ จะพยายามไปตามที่กำหนด อยู่ดี
      สุดท้ายก็ ส่งไม่ได้ เพราะ ไม่มีทางไปถึงจริง ๆ
      <br />
      <br />
      Dynamic Routing ก็เหมือนพนักงานส่งของมี GPS อัปเดตเส้นทางอัตโนมัติ
      ถ้าถนนปิด จะเปลี่ยนไปทางใหม่ได้ ถ้าบ้านย้าย GPS จะอัปเดตเส้นทางใหม่ให้
    </span>

    <div class="my-5 flex flex-col gap-5">
      <img
        src="/project/static.webp"
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
  title: "network,static",
  description: "network,static",
  keywords: "network,static",
  url: "https://portfolio-frontend-ten-steel.vercel.app/",
});
</script>

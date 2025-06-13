<template>
  <div class="flex flex-col gap-4 w-full">
    <h1 class="text-4xl underline underline-offset-8 font-semibold">Packet</h1>

    <span
      class="text-gray-300 text-lg text-balance mt-2 badge p-4 shadow shadow-gray-500"
    >
      สรุปตามความเข้าใจ
    </span>

    <span class="text-gray-300 text-md text-balance">
      <br />
      Packet Network เปรียบเหมือนจดหมาย ก็คือให้นึกจดหมาย
      มีหัวกระดาษจ่าหน้าซองว่า ส่งจากที่ไหน ปลายทางที่ไหน หัวกระดาษ เรียกว่า
      Header (หัวแพ็กเก็ต)
      <br />
      <br />
      แล้ว ก็มีเนื้อหาข้างในซองจดหมาย ก็คือ Payload (เนื้อหาในแพ็กเก็ต)
      <br />
      <br />
      แผ่นสรุปท้ายซอง Trailer คือส่วนที่ช่วยตรวจสอบว่า "จดหมายยังสมบูรณ์ดี"
      ก่อนถึงมือผู้รับ เหมือนส่วนแสดงว่า
      ซองจดหมายเสียหายหรือสภาพไม่สมบูรณ์ให้คนรับรู้
      <br />
      <br />
      สรุป Packet มี 3 ส่วน Header(บอกที่อยู่ผู้ส่ง–ผู้รับ) ,
      Payload(เนื้อหาจริงที่ต้องการส่ง) , Trailer(ตรวจว่าเนื้อหาในจดหมายครบ
      ถูกต้อง ไม่เสียหาย)
    </span>

    <div class="my-5 flex flex-col gap-5">
      <img
        src="/project/packet.webp"
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
  title: "Networks , Packet",
  description: "Networks, Packet",
  keywords: "Networks ,Packet",
  url: "https://portfolio-frontend-ten-steel.vercel.app/",
});
</script>

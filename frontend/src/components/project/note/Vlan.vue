<template>
  <div class="flex flex-col gap-4 w-full">
    <h1 class="text-4xl underline underline-offset-8 font-semibold">Vlan</h1>

    <span
      class="text-gray-300 text-lg text-balance mt-2 badge p-4 shadow shadow-gray-500"
    >
      สรุปตามความเข้าใจ
    </span>

    <span class="text-gray-300 text-md text-balance">
      <br />
      VLAN คือการ “แบ่งห้องเครือข่ายเสมือน” บน Switch เดียวกัน
      แม้ว่าทุกเครื่องจะเสียบสาย LAN เข้า Switch ตัวเดียวกัน
      แต่เราสามารถแยให้อยู่คนละ “ห้องเครือข่าย” ได้ เช่น ถ้าต่อ port คนละ port
      ก็จะจำลอง vlan ของ port ตัวเองได้เลยไม่ต้องรวมกับ port อื่น
      <br />
      <br />
      โดยที่ vlan มีความสามารถเปรียบเหมือนตึกที่ มี ห้อง10 , 20 ,30 ,40 โดย
      10,20,30 สามารถเข้าถึงได้ถ้าอนุญาติ
      แต่ห้อง40จะเหมือนห้องเก็บเงินการเข้าห้องจะยุ่งยากกว่า ต้องมีการvpn
      หรืfirewall
    </span>

    <div class="my-5 flex flex-col gap-5">
      <img
        src="/project/vlan.webp"
        loading="lazy"
        class=""
        alt="Publish (topic) / Subscribe (sub)"
      />
    </div>
  </div>
</template>

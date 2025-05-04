<template>
  <div class="flex flex-col gap-4 w-full">
    <h1 class="text-4xl underline underline-offset-8 font-semibold">
      Spring boot
    </h1>

    <span class="text-gray-300 text-sm text-balance mt-2">
      สรุปตามความเข้าใจ
    </span>

    <span class="text-gray-300 text-sm text-balance">
      Entity กำหนดโครงสร้างของฐานข้อมูล<br /><br />
      Controller รับคำขอจาก client และส่งคำขอไปยัง service เพื่อประมวลผล
      <br /><br />
      Service คือมีหน้าที่ประมวลผล logic ที่เกี่ยวข้องกับข้อมูล
      <br /><br />
      application.properties คือไฟล์ที่ใช้ในการตั้งค่าต่างๆ เช่น
      การเชื่อมต่อกับฐานข้อมูล ซึ่งคล้ายกับไฟล์ .env
    </span>
    <span class="text-gray-300 text-sm text-balance">
      พัฒนาแอพพลิเคชั่นแบบ GUI ด้วย Java (Swing) | สำหรับผู้เริ่มต้น [FULL
      COURSE]
    </span>
    <span class="text-gray-300 text-sm text-balance">
      Ref : https://www.youtube.com/watch?v=Ka7Sm8W84iw
    </span>

    <span class="text-gray-300 text-sm text-balance">
      Github : https://github.com/balldev1/Spring_Boot
    </span>

    <div class="mt-5 flex flex-col gap-5">
      <img src="/project/springboot1.png" loading="lazy" />
      <img src="/project/springboot2.png" loading="lazy" />
      <img src="/project/springboot3.png" loading="lazy" />
    </div>

    <div class="py-5">
      <iframe
        width="100%"
        height="500"
        src="https://www.youtube.com/embed/Ka7Sm8W84iw"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  </div>
</template>

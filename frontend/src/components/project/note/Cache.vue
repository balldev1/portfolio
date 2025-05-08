<template>
  <div class="flex flex-col gap-4 w-full">
    <h1 class="text-4xl underline underline-offset-8 font-semibold">
      Cache memory concept application
    </h1>

    <span
      class="text-gray-300 text-lg text-balance mt-2 badge p-4 shadow shadow-gray-500"
    >
      สรุปตามความเข้าใจ
    </span>

    <span class="text-gray-300 text-md text-balance">
      <br />
      client โหลดข้อมูล server พอได้ข้อมูลก็จะเก็บ cache โดยสามารถเก็บได้ทั้ง
      frontend , backend
      <br />
      <br />
      frontend เช่น vue เช่น เปิดหน้าสินค้าให้โหลดจาก เซิฟเวอร์ครั้งแรก
      พอได้ข้อมูลมาก็จะเก็บไว้ที่ pinia ครั้งต่อไปเมือมาหน้าเดิมก็เช็คว่ามี
      cache pinia ไหมถ้ามีก็เอามาใช้เลยไม่ต้องไปติดต่อกับ server<br />
      <br />
      backend ก็เหมือนกัน โหลดข้อมูลเซิฟเวอร์ครั้งแรก
      พอได้ข้อมูลมาก็จะเก็บไว้ที่ Redis ครั้งต่อไปเมือมาหน้าเดิมก็เช็คว่ามี
      cache ไหมถ้ามีก็เอามาใช้เลยไม่ต้องไปติดต่อกับ server
    </span>

    <div class="my-5 flex flex-col gap-5">
      <img src="/project/cache.png" loading="lazy" class="h-[60rem]" />
    </div>
  </div>
</template>

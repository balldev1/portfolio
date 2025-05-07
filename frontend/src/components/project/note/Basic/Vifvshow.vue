<template>
  <div class="flex flex-col gap-4">
    <span
      class="text-gray-950 border-none uppercase text-balance mt-2 badge bg-white p-4 shadow-md shadow-gray-500"
    >
      vifvshow
    </span>

    <span class="text-gray-300 leading-8">
      v-if คือ ลบออกจาก dom จริง ๆ เช่น if !== login ให้ซ่อนข้อมูล
      <br />
      v-show คือ ซ่อนจาก dom เช่น button เปิดปิด modal เหมาะกับที่ใช้งานบ่อยๆ
      ไม่ต้องเรนเดอร์ใหม่
    </span>

    <div class="mt-5 flex flex-col gap-5 w-full items-center">
      <img src="/project/vifvshow.jpg" loading="lazy" class="w-full h-96" />
    </div>
  </div>
  <div className="divider "></div>
</template>

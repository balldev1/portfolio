<template>
  <div class="flex flex-col gap-4">
    <span
      class="text-gray-950 border-none uppercase text-balance mt-2 badge bg-white p-4 shadow-md shadow-gray-500"
    >
      sql vs nosql
    </span>

    <span class="text-gray-300 leading-8">
      SQL คือ ฐานข้อมูลรูปแบบตารางมีการเชื่อมต่อกันแต่ละ table
      ที่มีข้อมูลที่คงที่ เช่น เกรดนักเรียน , รายชื่อนักเรียน
      <br />
      noSQL คือ ฐานข้อมูลรูปแบบไม่ตายตัวเหมาะกับ เช่น
      เว็บไซคที่มีหมวดหมู่หลายหมวดหมู่
    </span>

    <div class="mt-5 flex flex-col gap-5 w-full items-center">
      <img src="/project/sql_nosql.png" loading="lazy" class="w-full h-96" />
    </div>
  </div>
  <div className="divider "></div>
</template>

<template>
  <div class="flex flex-col gap-4">
    <span
      class="text-gray-950 border-none uppercase text-balance mt-2 badge bg-white p-4 shadow-md shadow-gray-500"
    >
      Mvc
    </span>

    <span class="text-gray-300 leading-8">
      Client ส่ง Request → เช่น ผู้ใช้เปิดหน้า /products Route → กำหนดว่า URL
      นี้ควรส่งไปที่ Controller ไหน เช่น ProductController@index<br />
      Controller → เป็นตัวกลางประมวลผล logic เช่น ต้องการแสดงรายการสินค้า Model
      Product
      <br />
      Model (Product) ไปดึงข้อมูลจากฐานข้อมูล Response กลับไปยัง Client
      ให้เห็นผ่าน View<br />
    </span>

    <div class="mt-5 flex flex-col gap-5 w-full items-center">
      <img src="/project/mvc.jpg" loading="lazy" class="w-[30rem]" />
    </div>
  </div>
</template>

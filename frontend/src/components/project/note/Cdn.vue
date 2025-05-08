<template>
  <div class="flex flex-col gap-4 w-full">
    <h1 class="text-4xl underline underline-offset-8 font-semibold">CDN</h1>

    <span
      class="text-gray-300 text-lg text-balance mt-2 badge p-4 shadow shadow-gray-500"
    >
      สรุปตามความเข้าใจ
    </span>

    <span class="text-gray-300 text-md text-balance">
      <br />
      CDN ( Content Delivery Network )
      คือระบบของเซิร์ฟเวอร์ที่กระจายอยู่ตามภูมิภาคต่าง ๆ ทั่วโลก
      มีหน้าที่หลักคือ ช่วยส่งเนื้อหาเว็บไซต์ (เช่น รูปภาพ, CSS, JavaScript)
      ไปยังผู้ใช้งานให้เร็วขึ้น
      โดยเลือกส่งจากเซิร์ฟเวอร์ที่อยู่ใกล้ผู้ใช้มากที่สุด <br />
      <br />
      เช่น สมมุติรูป cat.jpg อยู่ที่ server ไทย แล้ว
      ถ้าคนอยุ่ที่อินเดียวเรียกใช้ server อินเดียก็จะเช็คว่ามี Cache ไหม
      ถ้ามีให้เอามาใช้เลย ถ้าไม่มีก็จะไปเรียกมาจาก server ที่ไทยก่อนครั้งแรก
      แล้วจะเก็บ Cache เพือใช้ครั้งต่อไป <br />
      <br />
      ไม่ใช่ไฟล์ถาวร แต่เป็น สำเนาชั่วคราว ที่ CDN เก็บไว้
      อยู่ได้ตามเวลาที่กำหนด เช่น 1 วัน, 1 สัปดาห์ เป็นต้น
    </span>

    <div class="mt-5 flex flex-col gap-5">
      <img src="/project/cdn.png" loading="lazy" />
    </div>
  </div>
</template>

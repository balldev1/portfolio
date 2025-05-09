<template>
  <div class="flex flex-col gap-4 w-full">
    <h1 class="text-4xl underline underline-offset-8 font-semibold">Pub_sub</h1>

    <span
      class="text-gray-300 text-lg text-balance mt-2 badge p-4 shadow shadow-gray-500"
    >
      สรุปตามความเข้าใจ
    </span>

    <span class="text-gray-300 text-md text-balance">
      <br />
      Message Queue ก็คือ ยกตัวอย่างง่ายๆเหมือนไปสั่งข้าว แล้วเขียนเมนู ข้าว
      ไว้ที่ กระดาษ ลูกค้าคนที่ 1 เขียนเมนูข้าว -> คิวที่ 1 ,
      <br />
      <br />
      ลูกค้าคนที่ 2 เขียนเมนูข้าว -> คิวที่ 2 แล้วเอาไปใส่ในกล่องรับออเดอร์
      (Message Queue)
      <br />
      <br />
      พ่อครัว (Consumer) จะหยิบออเดอร์มาทีละใบตามลำดับ ลูกค้าไม่ต้องรอ
      <br />
      <br />
      พอเขียนเสร็จก็ไปนั่งรอข้าวได้เลย (asynchronous)
    </span>

    <div class="my-5 flex flex-col gap-5">
      <img src="/project/Pub_sub.png" loading="lazy" class="" />
    </div>
  </div>
</template>

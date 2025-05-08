<template>
  <div class="flex flex-col gap-4 w-full">
    <h1 class="text-4xl underline underline-offset-8 font-semibold">
      Load Balancer
    </h1>

    <span
      class="text-gray-300 text-lg text-balance mt-2 badge p-4 shadow shadow-gray-500"
    >
      สรุปตามความเข้าใจ
    </span>

    <span class="text-gray-300 text-md text-balance">
      <br />
      กระจายปริมาณการใช้งาน (request) จากผู้ใช้ไปยังหลาย ๆ เซิร์ฟเวอร์
      เพื่อให้ระบบ ไม่ล่ม, รองรับคนจำนวนมาก, และทำงานได้เร็วขึ้น
      <br />
      <br />
      Nginx , Cloud Load Balancer , Kubernetes
      <br />
      <br />
      มี Web Server 3 เครื่อง (A, B, C) Load Balancer จะกระจาย request เช่น:
      คนที่ 1 → Server A คนที่ 2 → Server B คนที่ 3 → Server C
      <br />
      <br />
      ถ้า server ตัวใดตัวหนึ่งล่ม → ให้ server อื่นทำงานแทนได้
    </span>

    <div class="my-5 flex flex-col gap-5">
      <img src="/project/load_balancer.jpg" loading="lazy" class="" />
    </div>
  </div>
</template>

<template>
  <div class="flex flex-col gap-4 w-full">
    <h1 class="text-4xl underline underline-offset-8 font-semibold">
      Domain Name System
    </h1>

    <span
      class="text-gray-300 text-lg text-balance mt-2 badge p-4 shadow shadow-gray-500"
    >
      สรุปตามความเข้าใจ
    </span>

    <span class="text-gray-300 text-md text-balance">
      <br />
      ยกตัวอย่างง่ายๆก็คือ Client → ขอเข้า www.google.com
      <br />
      <br />
      DNS Resolver → หา IP ของชื่อโดเมน (www.google.com)
      <br />
      <br />
      ได้ IP(www.google.com) กลับมา เช่น 8.8.8.8
      <br />
      <br />
      Client ใช้ IP นี้ ส่ง HTTP Request ไปยัง Server
      <br />
      <br />
      Web Server ส่งข้อมูลกลับมาให้ Client
    </span>

    <div class="my-5 flex flex-col gap-5">
      <img src="/project/dns.jpg" loading="lazy" class="" />
    </div>
  </div>
</template>

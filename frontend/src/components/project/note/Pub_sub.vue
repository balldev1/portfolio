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
      ยกตัวอย่างง่ายๆก็คือ อาจาร์ยเขียนหนังสือบนกระดานดำ กระดานดำ คือ topic
      <br />
      <br />
      ส่วนนักเรียนที่นั่งเรียนอยู่ ก็ sub (เฝ้าดู) -> topic (กระดานดำ) ไว้
      <br />
      <br />
      เมืออาจาร์ยเขียนลงกระดาน (topic)
      <br />
      <br />
      นักเรียนก็สามารถรู้ข้อความบนกระดานได้เลยเพราะ sub กระดานดำ (topic) ไว้
    </span>

    <div class="my-5 flex flex-col gap-5">
      <img src="/project/pub_sub.png" loading="lazy" class="" />
    </div>
  </div>
</template>

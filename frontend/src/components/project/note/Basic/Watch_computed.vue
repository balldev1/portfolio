<template>
  <div class="flex flex-col gap-4">
    <span
      class="text-gray-950 border-none uppercase text-balance mt-2 badge bg-white p-4 shadow-md shadow-gray-500"
    >
      watch vs computed
    </span>

    <span class="text-gray-300 leading-8">
      watch() คือ เฝ้าดูค่าแล้วติดตามค่าที่ส่งมาแล้วทำบางอย่างเช่นปุ่ม
      เปลี่ยนหน้า เมือกดหน้า 2 ให้ api ดึงข้อมูล หน้า 2 มา
      <br />
      Computed() คือ ติดตามค่าแล้วเก็บ แคช เมือค่าเปลี่ยนให้อัพเดทค่านั้นเช่น
      input
    </span>

    <div class="mt-5 flex flex-col gap-5 w-full items-center">
      <img
        src="/project/watch_computed.jpeg"
        loading="lazy"
        class="w-full h-96"
      />
    </div>
  </div>
  <div className="divider "></div>
</template>
